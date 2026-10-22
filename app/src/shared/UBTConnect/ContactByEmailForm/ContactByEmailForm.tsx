// @os-block UBTConnect.ContactFlow.ContactByEmailForm
import { useId, useState, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { allowUpcomingNavigation } from '@/platform/navigation';
import { preventNavigation, type NavigationEvent } from '../../NavigationHandler/lib/actions';
import { ButtonLoading } from '../../osui/ButtonLoading';
import { Button } from '../../UBTConnect_Utils/Button';
import { CustomContainer } from '../../UBTConnectLibrary/CustomContainer';
import { DynamicTextArea } from '../../UBTConnectLibrary/DynamicTextArea';
import { FixedFooter } from '../../UBTConnectLibrary/FixedFooter';
import { InputCounter } from '../../UBTConnectLibrary/InputCounter';
import { UBT_Color, UBT_FontSize, UBT_Shadow, UBT_Size } from '../../UBTConnectLibrary/lib/staticEntities';
import { TextArea_WithCounter } from '../../UBTConnectLibrary/TextArea_WithCounter';
import { Dialog_Navigation } from '../Dialog_Navigation';

export interface ContactByEmailFormProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** IsLoading: disables the fields and shows the button spinner (default false). */
  isLoading?: boolean;
  /** In_SubjectPlaceholder: prompt of the subject input (default ""). */
  inSubjectPlaceholder?: string;
  /** In_MessagePlaceholder: prompt of the message text area (default ""). */
  inMessagePlaceholder?: string;
  /** In_Subject: fixed subject; when not "" the subject field is disabled and has no counter (default ""). */
  inSubject?: string;
  /** In_UseDynamicTextAreaSubject: the subject is a growing text area instead of an input (default false). */
  inUseDynamicTextAreaSubject?: boolean;
  /** In_MessageLabel: label of the message text area (default "Message"). */
  inMessageLabel?: string;
  /** Event Event_SubmitForm(Subject, Message). */
  onEventSubmitForm?: (subject: string, message: string) => void;
  /** Placeholder Placeholder_ContactCard. */
  children?: ReactNode;
}

/** Height the FixedFooter reserves under the content (compiled ExpectedFooterHeight). */
const FOOTER_HEIGHT = 'calc(2 * var(--space-base) + var(--ubt-button-height-m))';

/** E-mail form of the contact flow (p:UBTConnect.ContactFlow.ContactByEmailForm.mvc.js, ContactByEmailMember copy;
    view :526-1000, controller :1010-1100). Div_Content (the FixedFooter adds its class and height) > CustomContainer
    (padding x Base, top Small, bottom Base) > Placeholder_ContactCard (margin bottom Base) and Form1: the Subject label
    with either an Input (maxlength 100) or, In_UseDynamicTextAreaSubject, a DynamicTextArea (bounded, one line) in a
    font-size Small container; both enabled only when In_Subject = "" and not IsLoading, with an InputCounter when
    In_Subject = ""; then TextArea_WithCounter with the message label and text area (3 lines, maxlength 1000).
    FixedFooter: ButtonLoading(IsLoading) > Button "Send", disabled until Subject and Message are not "".
    Dialog_Navigation ("Delete message?") is on while Subject <> In_Subject or Trim(Message) <> "". */
export function ContactByEmailForm({
  id,
  isLoading = false,
  inSubjectPlaceholder = '',
  inMessagePlaceholder = '',
  inSubject = '',
  inUseDynamicTextAreaSubject = false,
  inMessageLabel = 'Message',
  onEventSubmitForm,
  children,
}: ContactByEmailFormProps) {
  const uid = useId();
  const contentId = `${uid}Div_Content`;
  const subjectInputId = `${uid}Input_Subject`;
  const subjectTextAreaId = `${uid}TextArea_Subject`;
  const messageId = `${uid}TextArea_Message`;
  // OnInitialize (controller :1043-1058): Subject = In_Subject.
  const [subject, setSubject] = useState(inSubject);
  const [message, setMessage] = useState('');
  const subjectEnabled = inSubject === '' && !isLoading;
  const counter = (inputId: string) =>
    inSubject !== '' ? null : <InputCounter inInputId={inputId} inInitialLength={0} />;

  // OnClick_SubmitForm (controller :1012-1040): AllowUpcomingNavigation, then Event_SubmitForm(Subject, Message).
  const onClickSubmitForm = () => {
    allowUpcomingNavigation();
    onEventSubmitForm?.(subject, message);
  };
  // OnBackNavigation_PreventNavigation (controller :1060-1080): PreventNavigation(Event_NavigationEvent).
  const onBackNavigationPreventNavigation = (event: NavigationEvent) => {
    preventNavigation(event);
  };

  return (
    <OSBlock name="ContactFlow.ContactByEmailForm" id={id}>
      <div id={contentId} data-container="">
        <CustomContainer
          options={{
            PaddingSize: { HorizontalSizeId: UBT_Size.Base, TopSizeId: UBT_Size.Small, BottomSizeId: UBT_Size.Base },
          }}
        >
          <CustomContainer options={{ MarginSize: { BottomSizeId: UBT_Size.Base } }}>
            <div>{children}</div>
          </CustomContainer>
          <form
            className="form OSFillParent"
            data-form=""
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div data-container="">
              <label className="OSFillParent" data-label="" htmlFor={subjectInputId}>
                Subject
              </label>
              {inUseDynamicTextAreaSubject ? (
                <CustomContainer options={{ TextOptions: { FontSize: UBT_FontSize.Small } }}>
                  <DynamicTextArea inIsBounded inText={subject}>
                    <span>
                      <textarea
                        className="form-control OSFillParent"
                        data-textarea=""
                        disabled={!subjectEnabled}
                        id={subjectTextAreaId}
                        maxLength={100}
                        rows={1}
                        value={subject}
                        onChange={(e) => {
                          setSubject(e.target.value);
                        }}
                      />
                    </span>
                  </DynamicTextArea>
                  {counter(subjectTextAreaId)}
                </CustomContainer>
              ) : (
                <>
                  <span className="input-text">
                    <input
                      aria-required="false"
                      className="form-control OSFillParent"
                      data-input=""
                      disabled={!subjectEnabled}
                      id={subjectInputId}
                      maxLength={100}
                      placeholder={inSubjectPlaceholder}
                      type="text"
                      value={subject}
                      onChange={(e) => {
                        setSubject(e.target.value);
                      }}
                    />
                  </span>
                  {counter(subjectInputId)}
                </>
              )}
            </div>
            <div data-container="">
              <TextArea_WithCounter inInitialLength={0}>
                <label className="OSFillParent" data-label="" htmlFor={messageId}>
                  <span data-expression="">{inMessageLabel}</span>
                </label>
                <span>
                  <textarea
                    className="form-control OSFillParent"
                    data-textarea=""
                    disabled={isLoading}
                    id={messageId}
                    maxLength={1000}
                    placeholder={inMessagePlaceholder}
                    rows={3}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                </span>
              </TextArea_WithCounter>
            </div>
          </form>
        </CustomContainer>
      </div>
      <FixedFooter useBottomBar={false} contentContainerId={contentId} expectedFooterHeight={FOOTER_HEIGHT}>
        <CustomContainer
          options={{
            Background: { BackgroundColor: UBT_Color.Neutral0 },
            PaddingSize: { GeneralSizeId: UBT_Size.Base },
            ShadowId: UBT_Shadow.ExtraSmallTop,
          }}
        >
          <ButtonLoading isLoading={isLoading}>
            <Button
              buttonText="Send"
              isDisabled={!(subject !== '' && message !== '')}
              onButtonOnClick={onClickSubmitForm}
            />
          </ButtonLoading>
        </CustomContainer>
      </FixedFooter>
      {(subject !== inSubject || message.trim() !== '') && (
        <Dialog_Navigation
          onEventOnBackNavigation={onBackNavigationPreventNavigation}
          placeholderHeader={<span data-expression="">Delete message?</span>}
          placeholderBody={<span data-expression="">Are you sure you want to delete this message?</span>}
        />
      )}
    </OSBlock>
  );
}
