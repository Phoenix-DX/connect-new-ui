import { useEffect, type ReactNode } from 'react';
import { NotCaptured } from '@/platform/feedback/NotCaptured';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { osImage } from '@/legacy/os/os-assets';
import { Card } from '@/components/ui/Card';
import { SanitizedHtml } from '@/components/ui/SanitizedHtml';
import { formatDateTime } from '@/shared/lib/osDateTime';

/** The card of one message, props only: only MessageDetail uses it.
    @origin Connect2_LegacyShared.Widgets.NotificationDetailBlock */

export interface NotificationDetailBlockProps {
  /** OutSystems instance id of the block (`b1-NotificationDetailBlock`). */
  id: string;
  /** Prefix of the block's children (`b1-b4`). */
  prefix: string;
  title: string;
  profileIconURL: string;
  summary: string;
  isUrgent: boolean;
  isAdaptiveCard: boolean;
  messageContent: string;
  dateTimeCreated: string | null;
  showDetailsPlaceholder: boolean;
  forceNoIconBorder: boolean;
  hasActionButton: boolean;
  /** Placeholder MessageDetails (Sharing messages). */
  messageDetails?: ReactNode;
  /** Placeholder Placeholder_ActionButton (Orbit / Assemble buttons). */
  actionButton?: ReactNode;
}

/** Message_List_Item_Info: "ddd dd/MM/yyyy" + " " + ToLower("h:mm tt"), "" for the null date. */
const dateInfo = (d: string | null): string =>
  d === null ? '' : `${formatDateTime(d, 'ddd dd/MM/yyyy')} ${formatDateTime(d, 'h:mm tt').toLowerCase()}`;

/** NotificationDetailBlock: a Card with the sender icon (External image, or the User_rectangle static image when
    ProfileIconURL = ""), title, summary, urgent icon, the body (adaptive card, MessageDetails placeholder or the
    sanitized HTML), the date and the action button placeholder. OnReady runs OpenLinksInSystemBrowserJS on the Card:
    web branch, links open in a new tab. */
export function NotificationDetailBlock({
  id,
  prefix,
  title,
  profileIconURL,
  summary,
  isUrgent,
  isAdaptiveCard,
  messageContent,
  dateTimeCreated,
  showDetailsPlaceholder,
  forceNoIconBorder,
  hasActionButton,
  messageDetails,
  actionButton,
}: NotificationDetailBlockProps) {
  const cardId = `${prefix}-NotificationDetail`;

  useEffect(() => {
    const container = document.getElementById(cardId);
    if (container === null) return;
    const onClick = (evt: MouseEvent) => {
      const target = evt.target as HTMLAnchorElement | null;
      if (target?.tagName === 'A' && target.href) {
        evt.stopPropagation();
        evt.preventDefault();
        window.open(target.href, '_blank');
      }
    };
    container.addEventListener('click', onClick);
    return () => {
      container.removeEventListener('click', onClick);
    };
  }, [cardId]);

  // Style expression of the icon container, trailing space trimmed as the DOM shows it.
  const iconClass = (
    'notification-detail-icon-badge ' + (forceNoIconBorder ? 'no-border' : profileIconURL === '' ? 'no-border' : '')
  ).trim();

  let body: ReactNode;
  if (showDetailsPlaceholder) {
    body = <div id={`${prefix}-MessageDetails`}>{messageDetails}</div>;
  } else if (isAdaptiveCard) {
    body = (
      <div data-container="">
        <NotCaptured name={`Q1: Widgets.AdaptiveCardViewer (${prefix}-$b2)`} />
      </div>
    );
  } else {
    body = (
      <div
        className="whitespace-normal notification-detail-content"
        data-container=""
        style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}
      >
        <SanitizedHtml
          id={`${prefix}-$b3`}
          value={messageContent}
          allowedCssStyles="text-decoration,font-style,margin-left,padding-left"
          allowedTags="img,s,i,em,ul,li,ol,u,blockquote,sup,sub"
          allowedAttributes="src,style"
          resetWhitelist
        />
      </div>
    );
  }

  return (
    <OSBlock name="Widgets.NotificationDetailBlock" id={id}>
      <Card id={cardId} usePadding>
        <div className="display-flex align-items-center" data-container="">
          <div className={iconClass} data-container="">
            {profileIconURL !== '' ? (
              <img data-image="" src={profileIconURL} />
            ) : (
              <img data-image="" src={osImage('img/Connect2_LegacyShared.User_rectangle.png')} />
            )}
          </div>
          <div className="ThemeGrid_Width8" data-container="" style={{ marginTop: 10, padding: '0px 0px 0px 5px' }}>
            <div
              className="bold heading3"
              data-container=""
              id={`${prefix}-TitleContainer`}
              style={{ fontSize: '100%' }}
            >
              <span data-expression="" style={{ fontSize: '100%' }}>
                {title}
              </span>
            </div>
            {summary !== '' && (
              // SummaryContainer: not in any captured state; its inline style is not captured either.
              <NotCaptured name={`Summary (${prefix}-SummaryContainer)`}>{summary}</NotCaptured>
            )}
          </div>
          <div
            className="ThemeGrid_Width2"
            data-container=""
            style={{ textAlign: 'center', marginLeft: 5, marginTop: 10, padding: 0 }}
          >
            {isUrgent && (
              // Urgent icon: not in any captured state; its inline style is not captured either.
              <NotCaptured name={`Urgent icon (${prefix}-Message_List_Item_Icon)`} />
            )}
          </div>
        </div>
        <div
          className="margin-top-base"
          data-container=""
          style={{
            borderColor: 'rgb(198, 198, 198)',
            borderStyle: 'solid',
            borderWidth: '2px 0px 0px',
            marginRight: 10,
            marginTop: 10,
            padding: '15px 0px 10px',
          }}
        >
          {body}
        </div>
        <div className="margin-top-base" data-container="" style={{ marginTop: 3 }}>
          <span className="text-note" data-expression="" id={`${prefix}-Message_List_Item_Info`}>
            {dateInfo(dateTimeCreated)}
          </span>
        </div>
        {hasActionButton && (
          <div className="margin-top-base" data-container="">
            <div id={`${prefix}-Placeholder_ActionButton`}>{actionButton}</div>
          </div>
        )}
      </Card>
    </OSBlock>
  );
}
