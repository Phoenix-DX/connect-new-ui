import { useMemo, useState } from 'react';
import { ButtonLoading } from '@/shared/osui/ButtonLoading';
import { SectionSeparator } from '@/shared/UBTConnect/SectionSeparator';
import { Button } from '@/shared/UBTConnect_Utils/Button';
import { Columns_Three } from '@/shared/UBTConnectLibrary/Columns_Three';
import { Columns_Two } from '@/shared/UBTConnectLibrary/Columns_Two';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import { FixedFooter } from '@/shared/UBTConnectLibrary/FixedFooter';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { IconText } from '@/shared/UBTConnectLibrary/IconText';
import { Layout_DetailPage } from '@/shared/UBTConnectLibrary/Layout_DetailPage';
import {
  UBT_Color,
  UBT_ColumnBehaviour,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_IconsSize,
  UBT_Shape,
  UBT_Size,
  UBT_VerticalAlign,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import type { ContainerOptions, TextOptions } from '@/shared/UBTConnectLibrary/lib/structures';
import { SkeletonSection } from '@/shared/UBTConnectLibrary/SkeletonSection';
import {
  NotRegisteredException,
  UserException,
  exceptionMessage,
  isCommunicationException,
  isInstanceOf,
  isSystemException,
  raiseToFlowHandler,
} from '@/legacy/os/exceptions';
import { useNoCommonUi } from '@/platform/feedback/dialogs';
import { feedbackMessageAutoClose } from '@/platform/feedback';
import { currentUserId } from '@/platform/session/session';
import { changeOrderBulk, useGetServices } from './api';
import { action_ChangeOrderLocal, type ServicesLists } from './components/actions';
import { SortableList } from './components/SortableList';
import { SortableList_Draggable } from './components/SortableList_Draggable';
import {
  UBT_Color_Neutral1,
  UBT_FontSize_Heading6,
  UBT_Icons2,
  UBT_MessageType_Success,
  UBT_Shadow_ExtraSmallTop,
} from './components/staticEntities';
import type { Service } from './types';

const GROUP = 'services';
const FAVOURITE_LIST = 'FavouriteList';
const SUGGESTION_LIST = 'SuggestionList';
const SUGGESTIONS2 = 'Suggestions2';

const TITLE_TEXT: TextOptions = {
  Color: UBT_Color.Neutral10,
  FontSize: UBT_FontSize_Heading6,
  FontWeight: UBT_FontWeight.SemiBold,
};
const ITEM_TEXT: TextOptions = {
  Color: UBT_Color.Neutral10,
  FontSize: UBT_FontSize.Base,
  FontWeight: UBT_FontWeight.SemiBold,
};
const SECTION_CONTAINER: ContainerOptions = {
  PaddingSize: { VerticalSizeId: UBT_Size.Small, HorizontalSizeId: UBT_Size.Base },
};
const ROW_CONTAINER: ContainerOptions = {
  PaddingSize: { VerticalSizeId: UBT_Size.Small },
  BorderOptions: { Color: UBT_Color.Neutral4, Size: { BottomSizeId: UBT_Size.Small } },
};
const DRAG_HANDLE_CONTAINER: ContainerOptions = {
  Background: { BackgroundColor: UBT_Color_Neutral1 },
  PaddingSize: { VerticalSizeId: UBT_Size.Small, HorizontalSizeId: UBT_Size.ExtraSmall },
  BorderOptions: { Radius: { GeneralSizeId: UBT_Shape.Rounded } },
  IsInlineBlock: true,
};
const ICON_TEXT_COLUMNS = {
  ColumnBehaviour: UBT_ColumnBehaviour.ReduceFirst,
  SpacingSize: UBT_Size.Small,
  VerticalAlign: UBT_VerticalAlign.Center,
};

/** OutSystems List widget classes: "list list-group" + data fetch status + grid classes (dom:51, loading.html:51,
    offline.html:51). */
const listClass = (isFetching: boolean, hasError: boolean) =>
  `list list-group${isFetching ? ' list-loading' : ''}${hasError ? ' list-error' : ''} OSFillParent`;

/** Drag handle of a row: CustomContainer `drag-handle` with the drag_indicator icon (Services.mvc.js:455-505). */
function DragHandle({ scope, container, icon }: { scope: string; container: number; icon: number }) {
  return (
    <CustomContainer
      id={`${scope}-$b${String(container)}`}
      extendedClasses="drag-handle"
      options={DRAG_HANDLE_CONTAINER}
    >
      <Icon
        id={`${scope}-$b${String(icon)}`}
        inIconId={UBT_Icons2.DragIndicator}
        inColorId={UBT_Color.Neutral6}
        inSizeId={UBT_IconsSize.NonStandard_14}
      />
    </CustomContainer>
  );
}

/** Flow handler of an error raised by a screen action (Bubble* user exceptions, NotRegistered re-raised). */
function raiseFromHandler(error: unknown): void {
  if (isInstanceOf(error, NotRegisteredException)) {
    raiseToFlowHandler(error);
    return;
  }
  if (isCommunicationException(error)) {
    raiseToFlowHandler(new UserException(exceptionMessage(error), 'UBTConnect.BubbleCommunicationException'));
    return;
  }
  if (!isSystemException(error)) {
    raiseToFlowHandler(new UserException(exceptionMessage(error), 'UBTConnect.BubbleGenericException'));
    return;
  }
  raiseToFlowHandler(error);
}

/** UBTConnect App_Services.Services (Services.mvc.js: model :1-90, view :91-1216, controller :1217-2280).
    Captured dom/default.html, loading.html, offline.html. */
export default function Services() {
  // Layout_DetailPage's Placeholder_CommonUI_Inside_Layout is empty (Services.mvc.js:1207): no CommonUI, so the shell
  // mounts neither Access Restricted nor the lock container, and no InactivityTimer runs here (CR-Services-1)
  useNoCommonUi();
  const getServices = useGetServices();
  const [changed, setChanged] = useState<ServicesLists | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const isDataFetched = getServices.isSuccess;
  const hasFetchError = getServices.isError;
  const lists: ServicesLists = changed ?? getServices.data ?? { currentServices: [], availableServices: [] };
  // OnAfterFetch_GetServices: ReferenceServices empty → AvailableServices + CurrentServices.Connect_Services
  const referenceServices = useMemo<Service[]>(
    () =>
      getServices.data
        ? [...getServices.data.availableServices, ...getServices.data.currentServices.map((c) => c.service)]
        : [],
    [getServices.data],
  );
  const isFetching = !isDataFetched && !hasFetchError;

  // Handler_SortableListOnDragEnd (Services.mvc.js:1674-1760)
  const handler_SortableListOnDragEnd = (
    fromId: string,
    toId: string,
    oldIndex: number,
    newIndex: number,
    itemId: string,
  ) => {
    if (oldIndex === newIndex) return;
    try {
      const next = action_ChangeOrderLocal(
        lists,
        referenceServices,
        newIndex,
        oldIndex,
        fromId === FAVOURITE_LIST,
        toId === FAVOURITE_LIST,
        itemId,
        Number(currentUserId() ?? 0),
      );
      if (next) {
        setChanged(next);
        setHasChanges(true);
      }
    } catch (error) {
      raiseFromHandler(error);
    }
  };

  // OnClick_SaveChanges (Services.mvc.js:1277-1378); isLoading stays True after an error, as in the original.
  const onClick_SaveChanges = async () => {
    if (!hasChanges) return;
    setIsLoading(true);
    try {
      await changeOrderBulk(lists.currentServices);
      setIsLoading(false);
      feedbackMessageAutoClose({
        title: '',
        message: 'Your changes were saved.',
        messageType: UBT_MessageType_Success,
        encodedHtml: true,
        extendedClass: '',
        delayMs: 0,
        useDebounce: false,
      });
      setHasChanges(false);
    } catch (error) {
      raiseFromHandler(error);
    }
  };

  return (
    <Layout_DetailPage
      id="$b1"
      placeholderHeaderTitle="Manage Services"
      content={
        <>
          <div data-container="" id="ContentWrapper">
            <SkeletonSection id="Content" inIsLoading={!(isDataFetched || hasFetchError) || isLoading}>
              <SortableList id="$b3" group={GROUP} preventDomMove onDragEnd={handler_SortableListOnDragEnd}>
                <CustomContainer id="Favourites2" options={SECTION_CONTAINER}>
                  <CustomText
                    id="$b5"
                    inText="Favourites"
                    inTextOptions={TITLE_TEXT}
                    inPaddingOptions={{ VerticalSizeId: UBT_Size.Small }}
                  />
                  <div
                    className={listClass(isFetching, hasFetchError)}
                    data-list=""
                    id={FAVOURITE_LIST}
                    style={{ position: 'relative' }}
                  >
                    {lists.currentServices.map((current, i) => {
                      const scope = `l1-38_${String(i)}`;
                      return (
                        <CustomContainer
                          key={`${current.service.id}-${String(i)}`}
                          id={`${scope}-$b6`}
                          options={ROW_CONTAINER}
                        >
                          <Columns_Two
                            id={`${scope}-$b7`}
                            columnOptions={{ ColumnBehaviour: UBT_ColumnBehaviour.ReduceLast }}
                            left={
                              <SortableList_Draggable
                                id={`${scope}-$b8`}
                                itemId={current.service.id}
                                useCustomDragHandle
                              >
                                <Columns_Two
                                  id={`${scope}-$b9`}
                                  columnOptions={ICON_TEXT_COLUMNS}
                                  left={<DragHandle scope={scope} container={10} icon={11} />}
                                  right={
                                    <IconText
                                      id={`${scope}-$b12`}
                                      text={current.service.label}
                                      textOptions={ITEM_TEXT}
                                      spacingSize={UBT_Size.Small}
                                    >
                                      <Icon
                                        id={`${scope}-$b13`}
                                        inIconId={current.service.iconId}
                                        inSizeId={UBT_IconsSize.Base_24}
                                      />
                                    </IconText>
                                  }
                                />
                              </SortableList_Draggable>
                            }
                            right={
                              current.service.isMandatory ? null : (
                                <Icon
                                  id={`${scope}-$b14`}
                                  inIconId={UBT_Icons2.CancelFill}
                                  inColorId={UBT_Color.Neutral7}
                                  inSizeId={UBT_IconsSize.Base_24}
                                  onClick={() => {
                                    handler_SortableListOnDragEnd(
                                      FAVOURITE_LIST,
                                      SUGGESTIONS2,
                                      current.serviceUser.order,
                                      -1,
                                      current.service.id,
                                    );
                                  }}
                                />
                              )
                            }
                          />
                        </CustomContainer>
                      );
                    })}
                  </div>
                </CustomContainer>
              </SortableList>
              {lists.availableServices.length > 0 && (
                <>
                  <SectionSeparator id="$b15" />
                  <SortableList
                    id="$b16"
                    group={GROUP}
                    denyLists={[SUGGESTION_LIST, FAVOURITE_LIST]}
                    preventDomMove
                    onDragEnd={handler_SortableListOnDragEnd}
                  >
                    <CustomContainer id={SUGGESTIONS2} options={SECTION_CONTAINER}>
                      <CustomText
                        id="$b18"
                        inText="Suggestions"
                        inTextOptions={TITLE_TEXT}
                        inPaddingOptions={{ VerticalSizeId: UBT_Size.Small }}
                      />
                      <div
                        className={listClass(isFetching, hasFetchError)}
                        data-list=""
                        id={SUGGESTION_LIST}
                        style={{ position: 'relative' }}
                      >
                        {lists.availableServices.map((service, i) => {
                          const scope = `l2-37_${String(i)}`;
                          return (
                            <SortableList_Draggable
                              key={`${service.id}-${String(i)}`}
                              id={`${scope}-$b19`}
                              itemId={service.id}
                              useCustomDragHandle
                            >
                              <CustomContainer id={`${scope}-$b20`} options={ROW_CONTAINER}>
                                <Columns_Three
                                  id={`${scope}-$b21`}
                                  columnOptions={{
                                    ...ICON_TEXT_COLUMNS,
                                    ColumnBehaviour: UBT_ColumnBehaviour.ExpandMiddle,
                                  }}
                                  left={<DragHandle scope={scope} container={22} icon={23} />}
                                  middle={
                                    <IconText
                                      id={`${scope}-$b24`}
                                      text={service.label}
                                      textOptions={ITEM_TEXT}
                                      spacingSize={UBT_Size.Small}
                                    >
                                      <Icon
                                        id={`${scope}-$b25`}
                                        inIconId={service.iconId}
                                        inSizeId={UBT_IconsSize.Base_24}
                                      />
                                    </IconText>
                                  }
                                  right={
                                    <Icon
                                      id={`${scope}-$b26`}
                                      inIconId={UBT_Icons2.AddCircle}
                                      inColorId={UBT_Color.Primary}
                                      inSizeId={UBT_IconsSize.Base_24}
                                      onClick={() => {
                                        handler_SortableListOnDragEnd(
                                          SUGGESTION_LIST,
                                          FAVOURITE_LIST,
                                          -1,
                                          lists.currentServices.length + 1,
                                          service.id,
                                        );
                                      }}
                                    />
                                  }
                                />
                              </CustomContainer>
                            </SortableList_Draggable>
                          );
                        })}
                      </div>
                    </CustomContainer>
                  </SortableList>
                </>
              )}
            </SkeletonSection>
          </div>
          <FixedFooter
            id="$b27"
            useBottomBar={false}
            expectedFooterHeight="calc(2 * var(--space-base) + var(--ubt-button-height-m))"
            contentContainerId="ContentWrapper"
          >
            <CustomContainer
              id="$b28"
              options={{
                Background: { BackgroundColor: UBT_Color.Neutral0 },
                PaddingSize: { GeneralSizeId: UBT_Size.Base },
                ShadowId: UBT_Shadow_ExtraSmallTop,
              }}
            >
              <ButtonLoading id="$b29" isLoading={isLoading}>
                <Button
                  id="$b30"
                  buttonText="Save changes"
                  isDisabled={isLoading}
                  onButtonOnClick={() => {
                    void onClick_SaveChanges();
                  }}
                />
              </ButtonLoading>
            </CustomContainer>
          </FixedFooter>
        </>
      }
    />
  );
}
