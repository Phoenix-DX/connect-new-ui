import { useCallback, useMemo, useState } from 'react';
import { useFeedServicesQuery, type ExternalAppPopUpInfo, type ServiceItem, type ServicesPage } from '@/api/service';
import { feedbackMessageAutoClose } from '@/platform/feedback';
import { confirmAction } from '@/platform/feedback/dialogs';
import { useOsNavigate } from '@/platform/navigation';
import { APP_ID } from '@/platform/navigation/paths';
import { UBT_Icons } from '@/lib/ubtConnectLibrary/staticEntities';
import { openInApp_OpenExternalLink } from '@/lib/ubtConnectUtils/actions';
import { Connect_Services, UBT_Icons2 } from '@/pages/HomeFeed/staticEntities';
import { EMPTY_POPUP_INFO, INITIAL_PAGES, MAIN_ELEMENT_CLASS, toPages } from './feedServicesState';
import { goToExternalApp } from './goToExternalApp';

/** The variables and the flows of the services card of HomeFeed: the data action GetServices, the pages of the
    carousel, the id and the app of Dialog_GoExternalApp, OnClick_Service, OnClick_ServiceSettings and the confirm of
    the dialog. The page gives the result to the component FeedBlock_Services.
    @origin UBTConnect.Home.FeedBlock_Services */

/** The inputs of the block. */
export interface FeedServicesInputs {
  /** ItemPerPage: the services on one page of the carousel. */
  itemPerPage: number;
  /** ForceAddService: an "Add Service" item after the services. */
  forceAddService: boolean;
}

/** The flag that the flows read: GetHasNewLDM (`C2NewLDM`). */
export interface FeedServicesFlags {
  hasNewLDM: boolean;
}

export interface FeedServicesView {
  /** Local_ServicesPerPage: the skeleton page until GetServices answers, then the pages of the services. */
  pages: ServicesPage[];
  /** GetServices has data: the list keys of the fetched pages. */
  hasData: boolean;
  /** Not IsDataFetched, or HasFetchError: the services show as skeletons. */
  isLoading: boolean;
  /** Local_ExternalApp_PopUpInfo: the app that Dialog_GoExternalApp shows. */
  externalAppPopUpInfo: ExternalAppPopUpInfo;
  /** The OnPopUpReady event of Dialog_GoExternalApp: keeps the id of its popup. */
  onPopUpReady: (popUpId: string) => void;
  /** OnClick_ServiceSettings: the settings button. */
  onClickServiceSettings: () => void;
  /** OnClick_Service: a service of the carousel. */
  onClickService: (service: ServiceItem) => void;
  /** GoToExternalApp: the confirm of Dialog_GoExternalApp. */
  onGoToExternalApp: () => void;
}

export function useFeedServices(
  { itemPerPage, forceAddService }: FeedServicesInputs,
  { hasNewLDM }: FeedServicesFlags,
): FeedServicesView {
  const navigate = useOsNavigate();
  const [externalAppPopUpId, setExternalAppPopUpId] = useState('');
  const [popUpInfo, setPopUpInfo] = useState<ExternalAppPopUpInfo>(EMPTY_POPUP_INFO);
  const services = useFeedServicesQuery({
    mainElementClass: MAIN_ELEMENT_CLASS,
    servicesPerPage: INITIAL_PAGES,
    // The block fetches at start, before the OnReady of Dialog_GoExternalApp and before any click: both are empty.
    externalAppPopUpId: '',
    externalAppPopUpInfo: EMPTY_POPUP_INFO,
    itemPerPage,
    forceAddService,
  });
  const pages = useMemo(
    () => (services.data ? toPages(services.data, itemPerPage, forceAddService) : INITIAL_PAGES),
    [services.data, itemPerPage, forceAddService],
  );

  const onPopUpReady = useCallback((popUpId: string) => {
    setExternalAppPopUpId(popUpId);
  }, []);

  const go = (screen: string) => {
    navigate(`/${APP_ID}/${screen}`);
  };

  /** OnClick_Service. The ids of Connect_Services are the TST values (staticEntities.ts). */
  const clickService = async (selected: ServiceItem) => {
    const S = Connect_Services;
    const is = (record: string) => selected.id === record;
    if (is(S.Orbit)) {
      go('OrbitLanding');
      return;
    }
    if (is(S.LDM)) {
      // The branch with GetHasNewLDM False (LDM_MyEvents) is not built: default-only.
      if (hasNewLDM) go('LDM_MyEvents_V2');
      return;
    }
    if (is(S.MyCalendar)) {
      go('MyEntertaining');
      return;
    }
    if (is(S.Assemble)) {
      go('AssembleEvents');
      return;
    }
    if (is(S.OrbitAdmin)) {
      go('OrbitAdminLanding');
      return;
    }
    if (is(S.MyNotes)) {
      go('Notes');
      return;
    }
    const data = services.data;
    let info: ExternalAppPopUpInfo;
    if (is(S.Trove)) {
      info = { appName: 'Trove', packageName: data?.externalPackagesTrove ?? '', iconId: UBT_Icons2.Trove };
    } else if (is(S.HR100)) {
      info = { appName: 'HR100', packageName: data?.externalPackagesHR100 ?? '', iconId: UBT_Icons.SVG_HR100 };
    } else if (is(S.CommunityTradelink)) {
      info = {
        appName: 'Community Tradelink',
        packageName: data?.externalPackagesCommunityTradelink ?? '',
        iconId: UBT_Icons.SVG_CommunityTradelink,
      };
    } else if (is(S.ElGusto)) {
      // OpenInApp_OpenExternalLink(GetServices.ExternalLinks_ElGusto, False), shared since CR-HomeFeed-1.
      openInApp_OpenExternalLink(data?.externalLinksElGusto ?? '', false);
      return;
    } else if (is(S.OneSchoolGlobal)) {
      feedbackMessageAutoClose({
        title: 'Coming soon',
        message: 'This feature will be coming soon.',
        messageType: 'info',
        encodedHtml: true,
        extendedClass: '',
        delayMs: 0,
        useDebounce: false,
      });
      return;
    } else {
      return;
    }
    setPopUpInfo(info);
    // ConfirmAction(ExternalAppPopUp_Id): the confirm of Dialog_GoExternalApp runs GoToExternalApp.
    await confirmAction(externalAppPopUpId);
  };

  return {
    pages,
    hasData: services.data !== undefined,
    isLoading: !services.isSuccess || services.isError,
    externalAppPopUpInfo: popUpInfo,
    onPopUpReady,
    onClickServiceSettings: () => {
      go('Services');
    },
    onClickService: (service) => void clickService(service),
    onGoToExternalApp: () => {
      goToExternalApp(popUpInfo);
    },
  };
}
