// @os-block UBTConnect.App_Common.BottomBarMenu
import { useEffect, useRef } from 'react';
import { NotCaptured } from '@/app/NotCaptured';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { log } from '@/platform/log/log';
import { useOsNavigate } from '@/platform/navigation';
import { APP_ID } from '@/platform/navigation/paths';
import { useClientVar } from '@/platform/session/session';
import { OSLink } from '../../lib/OSLink';
import { BottomBarItem } from '../../osui/BottomBarItem';
import { CustomText } from '../../UBTConnectLibrary/CustomText';
import { Icon } from '../../UBTConnectLibrary/Icon';
import { bottomBarSlider_ForceRefresh } from '../../UBTConnectLibrary/lib/actions';
import {
  bottomBar_GetList,
  connect_LaunchDarkly_PermissionCheck,
  getHasC1DirectoryView,
  getHasNewBookmarks,
} from '../../UBTConnect_Utils/lib/actions';
import { Connect_BottomBar_Items } from '../../UBTConnect_Utils/lib/staticEntities';
import { App_IconBadge } from '../App_IconBadge';
import { BottomBarContent } from '../BottomBarContent';
import { directory_Updates_RefreshBottomBarCount, scrollTop } from '../lib/actions';
import { UBT_Color, UBT_FontSize, UBT_IconsSize } from '../lib/staticEntities';

export interface BottomBarMenuProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Connect_BottomBar_Items identifier of the current screen. */
  activeItem?: string;
  useMapsItems?: boolean;
  isHouseholder?: boolean;
  isRootPage?: boolean;
  /** Event BottomBar_Clicked (an item without its own destination). */
  onBottomBarClicked?: (inItem: string) => void;
}

const I = Connect_BottomBar_Items;
const BASE = `/${APP_ID}`;

/** Delayed_BottomBarSlider_ForceRefresh JS node (OnParametersChanged, after the view renders). */
function delayed_BottomBarSlider_ForceRefresh(activeItemIndex: number) {
  if (!document.querySelector('.bottom-bar .list > a.active')) {
    const bottomBarItems = document.querySelectorAll('.bottom-bar .list > a');
    const target = bottomBarItems[activeItemIndex];
    if (activeItemIndex !== -1 && target) target.classList.add('active');
  }
  bottomBarSlider_ForceRefresh();
  document.querySelector('.bottom-bar .list > a.active')?.classList.remove('active');
}

export function BottomBarMenu({
  id,
  activeItem = '',
  useMapsItems = false,
  isHouseholder = false,
  isRootPage = false,
  onBottomBarClicked,
}: BottomBarMenuProps) {
  const navigate = useOsNavigate();
  const unreadCount = useClientVar('UBTConnect.Directory_Updates_UnreadCount');
  /* OnInitialize: LocalBottomBar_Items = BottomBar_GetList (the same list on every run outside the maps menu). */
  const items = bottomBar_GetList();

  /* OnReady (once per instance, as OutSystems runs it; StrictMode re-runs effects): Directory_Updates_RefreshBottomBarCount
     (False), which calls the server only when the last check is CheckFrequency minutes old (UC:2458-2470), then
     SetBottomBarActiveElement(-1): OSUI adds `active` to `.bottom-bar` children[ActiveItem] (runtime-sources/
     OutSystemsUI_2_23.OutSystemsUI.js:17638-17650), and children[-1] is none. */
  const readyRan = useRef(false);
  useEffect(() => {
    if (readyRan.current) return;
    readyRan.current = true;
    directory_Updates_RefreshBottomBarCount(false).catch((e: unknown) => {
      log.warn('Directory_Updates_RefreshBottomBarCount failed', e);
    });
  }, []);

  /* OnParametersChanged: a householder re-runs OnInitialize once (Retried); otherwise the slider is refreshed and,
     outside the maps menu, nothing else happens. Then the delayed JS fixes the active link and refreshes the slider. */
  const retried = useRef(false);
  const params = `${activeItem}|${String(useMapsItems)}|${String(isHouseholder)}|${String(isRootPage)}`;
  const previous = useRef(params);
  useEffect(() => {
    if (previous.current === params) return;
    previous.current = params;
    const activeItemIndex = items.findIndex((p) => p.Id === activeItem);
    if (isHouseholder && !retried.current) {
      retried.current = true;
    } else {
      bottomBarSlider_ForceRefresh();
      if (!useMapsItems) return;
    }
    void Promise.resolve().then(() => {
      delayed_BottomBarSlider_ForceRefresh(activeItemIndex);
    });
  }, [params, items, activeItem, isHouseholder, useMapsItems]);

  /* Event_BottomBar_Clicked (BottomBarMenu.mvc.js:568-700). */
  const event_BottomBar_Clicked = (inItem: string) => {
    if (inItem === activeItem && isRootPage) {
      scrollTop(inItem === I.Bookmarks ? '.layout .content' : '.active-screen', 'instant');
    } else if (inItem === I.Home) {
      navigate(`${BASE}/HomeFeed`);
    } else if (inItem === I.Directory) {
      navigate(getHasC1DirectoryView() ? `${BASE}/CountryList` : `${BASE}/Locality_Details`);
    } else if (inItem === I.Updates) {
      navigate(`${BASE}/Updates_SingleList`);
    } else if (inItem === I.Bookmarks) {
      const hasBookmarkNote = connect_LaunchDarkly_PermissionCheck('mobileDirectoryBookmarkNote');
      const otherwise = hasBookmarkNote ? 'New_MyBookmarks' : 'MyBookmarks';
      navigate(`${BASE}/${getHasNewBookmarks() ? 'Bookmarks' : otherwise}`);
    } else if (inItem === I.Menu) {
      navigate(`${BASE}/Menu`);
    } else {
      onBottomBarClicked?.(inItem);
    }
  };

  return (
    <OSBlock name="App_Common.BottomBarMenu" id={id}>
      <BottomBarContent>
        {useMapsItems ? (
          <NotCaptured name="BottomBarMenu useMapsItems items (Explore, Bookmarked, Settings: identifiers not captured)" />
        ) : (
          <div className="list list-group OSFillParent" data-list="">
            {items.map((item) => {
              const itemId = item.Id ?? '';
              const isActive = activeItem === itemId;
              const color = isActive ? UBT_Color.Primary : UBT_Color.Neutral6;
              const iconId = (isActive ? item.UBTIconActive : item.UBTIcon) ?? '';
              const click = () => {
                event_BottomBar_Clicked(itemId);
              };
              return (
                <OSLink key={itemId} className={isActive ? 'active' : ''} onClick={click}>
                  <BottomBarItem
                    icon={
                      itemId === I.Updates ? (
                        <App_IconBadge
                          isLoading={false}
                          badgeNumber={String(unreadCount)}
                          maxNotifications={9}
                          iconId={iconId}
                          iconColor={color}
                          onOnClick={click}
                        />
                      ) : (
                        <Icon inIconId={iconId} inColorId={color} inSizeId={UBT_IconsSize.Base_24} />
                      )
                    }
                    text={
                      <CustomText
                        inTextOptions={{ Color: color, FontSize: UBT_FontSize.ExtraSmall }}
                        inText={item.Label ?? ''}
                      />
                    }
                  />
                </OSLink>
              );
            })}
          </div>
        )}
      </BottomBarContent>
    </OSBlock>
  );
}
