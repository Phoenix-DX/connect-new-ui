import type { ReactNode } from 'react';
import type { EventDocumentItem } from '@/api/event';
import { MenuIcon } from '@/components/layout/MenuIcon';
import { OrbitLayout } from '@/components/layout/OrbitLayout';
import { ContactHelpdeskFooter } from '@/components/orbit/ContactHelpdeskFooter';
import { OrbitNoInformation } from '@/components/orbit/OrbitNoInformation';
import { OrbitSkeleton } from '@/components/orbit/OrbitSkeleton';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { OrbitSkeletonLoading } from '@/shared/Connect2_OrbitMobile_MUI/lib/staticEntities';
import { LoadingSpinner } from './LoadingSpinner';

/** Connect2_OrbitMobile_MUI.menuAction.auto: the MenuAction that the block gives MenuIcon__UpdatedOSUI. */
const MENU_ACTION_AUTO = 'Auto';

const NO_DOCUMENTS =
  'There are no documents available for this event at the moment. For any enquiries please contact the event organiser.';

export interface ViewDocumentsViewProps {
  /** OutSystems instance id of the block (`$b1`). */
  id: string;
  /** In_EventName: the title. */
  eventName: string;
  /** EventDocuments: the document rows. */
  documents: EventDocumentItem[];
  /** IsFetchingData: the skeleton. */
  isFetchingData: boolean;
  /** IsLoadingDocument: the loading spinner. */
  isLoadingDocument: boolean;
  /** GetEventDocuments.IsDataFetched: without documents, the "no documents" message. */
  isDataFetched: boolean;
  /** GetEventDocuments.Response.EventDocuments is not empty: the document list. */
  hasResponseDocuments: boolean;
  /** OnClick_Document(In_DocumentURL, In_DocumentName): a document row. */
  onDocumentClick: (documentURL: string, documentName: string) => void;
  /** OnHandle_ContactHelpdesk: the footer "Contact Orbit Helpdesk". */
  onContactHelpdesk: () => void;
}

/** The documents of an event, props only: Layout_Orbit "orbit-detail orbit-header-center" with the Auto MenuIcon and
    the event name as title.
    - Content: the ViewDocument skeleton while fetching. With documents: the hint row (file icon, "Tap the link/s below
      …"), the List_EventDocuments rows (PDF icon and underlined name; unviewed color-orbit-primary-7, viewed
      text-neutral-7; " margin-bottom-m" on each row but the last) and the LoadingSpinner (IsLoadingDocument) in
      "backwards-compatibility". Without documents, once fetched: NoInformation.
    - BottomBar: ContactHelpdesk_Footer when there are documents.
    - CommonUI_Elements: FileTransfer HandleDownload (no markup; useViewDocuments wires its events) and the empty
      placeholder. The Menu placeholder is empty too.
    @origin Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_Documents.ScreenBlock_ViewDocuments */
export function ViewDocumentsView({
  id,
  eventName,
  documents,
  isFetchingData,
  isLoadingDocument,
  isDataFetched,
  hasResponseDocuments,
  onDocumentClick,
  onContactHelpdesk,
}: ViewDocumentsViewProps) {
  const prefix = id.replace('$', '');
  const lastRow = documents.length - 1;

  const documentList = (
    <>
      <div className="full-width padding-x-m padding-y-m" data-container="">
        <div data-container="">
          <i className="icon fa fa-file-text-o fa-1x" data-icon="" />
          <span className="margin-left-base">Tap the link/s below to view/download documents</span>
        </div>
        <div className="full-width margin-top-m" data-container="">
          <OSList
            id={`${prefix}-List_EventDocuments`}
            className="list list-group"
            animateItems
            positionRelative
            source={documents}
            keyOf={(d: EventDocumentItem, i) => `${d.DocumentURL}-${String(i)}`}
          >
            {(d, i) => (
              <div
                className={`full-width${i !== lastRow ? ' margin-bottom-m' : ''}`}
                data-container=""
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  onDocumentClick(d.DocumentURL, d.DocumentName);
                }}
              >
                <i className="icon orbit-icon-file-pdf color-orbit-red-5 fa fa-file-pdf-o fa-1x" data-icon="" />
                <span
                  className={`margin-left-base underline${!d.IsViewed ? ' color-orbit-primary-7' : ' text-neutral-7'}`}
                  data-expression=""
                >
                  {d.DocumentName}
                </span>
              </div>
            )}
          </OSList>
        </div>
      </div>
      <div className="backwards-compatibility" data-container="">
        <LoadingSpinner id={`${prefix}-$b3`} IsProcessingData={isLoadingDocument} />
      </div>
    </>
  );

  const content: ReactNode = isFetchingData ? (
    <OrbitSkeleton id={`${prefix}-$b5`} inSkeletonLoadingId={OrbitSkeletonLoading.ViewDocument} />
  ) : hasResponseDocuments ? (
    documentList
  ) : isDataFetched ? (
    <OrbitNoInformation id={`${prefix}-$b4`} message={NO_DOCUMENTS} />
  ) : null;

  return (
    <OSBlock name="Orbit_ScreenBlocks_Documents.ScreenBlock_ViewDocuments" id={id}>
      <OrbitLayout
        id={`${prefix}-$b1`}
        customClass="orbit-detail orbit-header-center"
        menu={<div id={`${prefix}-Menu`} />}
        headerLeft={<MenuIcon id={`${prefix}-$b2`} menuAction={MENU_ACTION_AUTO} />}
        title={<span data-expression="">{eventName}</span>}
        content={content}
        bottomBar={
          documents.length > 0 ? <ContactHelpdeskFooter id={`${prefix}-$b6`} onClick={onContactHelpdesk} /> : null
        }
        commonUIElements={
          <>
            <OSBlock name="FileTransfer.HandleDownload" id={`${prefix}-$b7`} />
            <div id={`${prefix}-CommonUI_Elements`} />
          </>
        }
      />
    </OSBlock>
  );
}
