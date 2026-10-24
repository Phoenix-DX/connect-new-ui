import { useRef, type ReactNode } from 'react';
import { LegacyLayout } from '@/components/layout/LegacyLayout';
import { MenuIcon } from '@/components/layout/MenuIcon';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSForm, useInputWithVariableValidation } from '@/components/ui/os/OSValidation';
import { householdEmailIds } from '@/pages/EmailTarget/hooks/householdEmailState';
import { LegacyInputCounter } from '@/components/ui/LegacyInputCounter';
import { MenuAction } from '@/shared/Connect2_LegacyShared/lib/staticEntities';
import type { NavigationEvent } from '@/shared/NavigationHandler/lib/actions';
import { NavigationConfirmationDialog } from '@/shared/NavigationHandler/NavigationConfirmationDialog';
import { DEPRECATED_ButtonLoading } from '@/shared/osui/DEPRECATED_ButtonLoading';

/** The view of the e-mail to a household, props only. The flows are in `useHouseholdEmail`; the page renders this
    view inside the ValidationServiceProvider of the hook's validation service.
    @origin Connect2_LegacyShared.Email.ScreenBlock_Household_Email */

export interface HouseholdEmailViewProps {
  /** OutSystems instance id of the block. */
  id: string;
  /** The recipient line "To: " + In_HouseholdFullName. */
  inHouseholdFullName: string;
  /** [HeaderText]: the title is "Contact " + HeaderText. */
  title: string;
  /** [Subject] */
  subject: string;
  /** [Message] */
  message: string;
  /** [IsSending]: the "send email" button shows its spinner. */
  isSending: boolean;
  /** Placeholder Menu. */
  menu?: ReactNode;
  /** Placeholder BottomBar. */
  bottomBar?: ReactNode;
  /** Placeholder CommonUI_Elements. */
  commonUIElements?: ReactNode;
  onSubjectChange: (value: string) => void;
  onMessageChange: (value: string) => void;
  /** The click of "send email". */
  onSubmit: () => void;
  /** Event Navigation of the NavigationConfirmationDialog. */
  onNavigation: (navigationEvent: NavigationEvent) => void;
}

/** OSWidgets.Input Email_Subject: `span.input-text` > input, Mandatory (required, aria-required), max 100,
    autocomplete off, style "form-control" + " field-error-border" while not Valid, grid class OSFillParent,
    " not-valid" and the message while a validation message shows. */
function SubjectInput({ id, value, onChange }: { id: string; value: string; onChange: (value: string) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const validation = useInputWithVariableValidation({ id, mandatory: true, dataType: 'Text', elementRef: inputRef });
  const style = `form-control${validation.record.validAttr ? '' : ' field-error-border'}`;
  return (
    <span className="input-text">
      <input
        ref={inputRef}
        aria-describedby={validation.ariaDescribedBy}
        aria-required="true"
        autoComplete="off"
        className={validation.className(`${style} OSFillParent`)}
        data-input=""
        id={id}
        maxLength={100}
        placeholder="Subject"
        required
        type="text"
        value={value}
        onChange={(e) => {
          onChange(e.currentTarget.value);
        }}
      />
      {validation.validationElement}
    </span>
  );
}

/** OSWidgets.TextArea TextArea_Message: span > textarea, Mandatory, max 1000, 6 lines, autocomplete off, style
    "form-control textarea-message" + " field-error-border" while not Valid. */
function MessageTextArea({ id, value, onChange }: { id: string; value: string; onChange: (value: string) => void }) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const validation = useInputWithVariableValidation({ id, mandatory: true, dataType: 'Text', elementRef: textAreaRef });
  const style = `form-control textarea-message${validation.record.validAttr ? '' : ' field-error-border'}`;
  return (
    <span>
      <textarea
        ref={textAreaRef}
        autoComplete="off"
        className={validation.className(`${style} OSFillParent`)}
        data-textarea=""
        id={id}
        maxLength={1000}
        placeholder="Type message here..."
        required
        rows={6}
        value={value}
        onChange={(e) => {
          onChange(e.currentTarget.value);
        }}
      />
      {validation.validationElement}
    </span>
  );
}

/** Layout with the back MenuIcon and the title "Contact " + HeaderText; the recipient line (envelope icon, "To: " +
    In_HouseholdFullName) and Email_Form (Subject with its InputCounter, Message with its InputCounter, the
    DEPRECATED_ButtonLoading "send email" button); then the NavigationConfirmationDialog (it asks while IsChange). */
export function HouseholdEmailView({
  id,
  inHouseholdFullName,
  title,
  subject,
  message,
  isSending,
  menu,
  bottomBar,
  commonUIElements,
  onSubjectChange,
  onMessageChange,
  onSubmit,
  onNavigation,
}: HouseholdEmailViewProps) {
  const ids = householdEmailIds(id);
  const { scope } = ids;

  return (
    <OSBlock name="Email.ScreenBlock_Household_Email" id={id}>
      <LegacyLayout
        id={`${scope}-$b1`}
        menu={<div id={`${scope}-Menu`}>{menu}</div>}
        headerLeft={<MenuIcon id={`${scope}-$b2`} menuAction={MenuAction.Back} />}
        title={
          <div className="text-align-center" data-container="">
            <span data-expression="">{`Contact ${title}`}</span>
          </div>
        }
        content={
          <>
            <div className="background-neutral-0 padding-x-base padding-top-xxl" data-container="">
              <div className="inline-flex-center-vertical full-width padding-x-l padding-y-base" data-container="">
                <i className="icon text-primary fa fa-envelope fa-2x" data-icon="" />
                <span className="margin-left-base" data-expression="">{`To: ${inHouseholdFullName}`}</span>
              </div>
              <OSForm id={ids.form} style="form card OSFillParent">
                <label className="mandatory OSFillParent" data-label="" htmlFor={ids.subject}>
                  Subject
                </label>
                <SubjectInput id={ids.subject} value={subject} onChange={onSubjectChange} />
                <LegacyInputCounter id={`${scope}-$b3`} inputId={ids.subject} />
                <label className="mandatory OSFillParent" data-label="" htmlFor={ids.message}>
                  Message
                </label>
                <MessageTextArea id={ids.message} value={message} onChange={onMessageChange} />
                <LegacyInputCounter id={`${scope}-$b4`} inputId={ids.message} />
                <div data-container="" style={{ textAlign: 'center' }}>
                  <DEPRECATED_ButtonLoading id={`${scope}-$b5`} isLoading={isSending}>
                    <button className="btn btn-primary OSFillParent" data-button="" type="submit" onClick={onSubmit}>
                      <div className="btn-loading margin-right-s OSInline" data-container="">
                        <div className="loading-spinner" data-container="" />
                      </div>
                      <div className="btn-label OSInline" data-container="">
                        send email
                      </div>
                    </button>
                  </DEPRECATED_ButtonLoading>
                </div>
              </OSForm>
            </div>
            <div className="backwards-compatibility" data-container="">
              <NavigationConfirmationDialog
                id={`${scope}-$b6`}
                onNavigation={onNavigation}
                dialogHeader="Confirm"
                dialogBody="Are you sure you want to discard the changes?"
                buttonLabelConfirm="Confirm"
                buttonLabelDismiss="Cancel"
              />
            </div>
          </>
        }
        bottomBar={<div id={`${scope}-BottomBar`}>{bottomBar}</div>}
        commonUIElements={<div id={`${scope}-CommonUI_Elements`}>{commonUIElements}</div>}
      />
    </OSBlock>
  );
}
