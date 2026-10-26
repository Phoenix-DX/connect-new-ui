import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { ContactEmailForm } from '@/components/contact/ContactEmailForm';
import { ContactHeaderCard } from '@/components/contact/ContactHeaderCard';
import { DetailLayoutContainer } from '@/containers/DetailLayout';
import { useNoCommonUi } from '@/platform/feedback/dialogs';
import { contactByEmailLDMCoordinatorConfig } from './config';
import { useContactByEmailLDMCoordinatorSubmit } from './hooks/useContactByEmailLDMCoordinatorSubmit';
import { readContactByEmailLDMCoordinatorInputs } from './inputs';

/** @origin UBTConnect.ContactFlow.ContactByEmailLDMCoordinator
    The route of the e-mail to an LDM event coordinator. Not captured (no-capture, user 2026-10-16): built from the
    compiled code. Layout_DetailPage (title left, the title and colour of `config.ts`) with the shared ContactEmailForm
    (the form inputs of `config.ts`, the props of the submit hook) whose Placeholder_ContactCard holds the coordinator
    header card: the avatar image (the If(False) false branch, always shown), the name and "LDM Event Coordinator".
    Placeholder_CommonUI_Inside_Layout is empty: no CommonUI, so `useNoCommonUi()` (shell guide). The flows are in
    hooks/useContactByEmailLDMCoordinatorSubmit.ts. */
export default function ContactByEmailLDMCoordinator() {
  useNoCommonUi();
  const [params] = useSearchParams();
  const inputs = useMemo(() => readContactByEmailLDMCoordinatorInputs(params), [params]);
  const config = contactByEmailLDMCoordinatorConfig(inputs);
  const submit = useContactByEmailLDMCoordinatorSubmit(inputs);

  return (
    <DetailLayoutContainer
      id="$b1"
      inAlignTitleLeft
      inIsPrimaryColor={config.isPrimaryColor}
      placeholderHeaderTitle={<span data-expression="">{config.title}</span>}
      content={
        <ContactEmailForm id="$b2" {...config.form} {...submit}>
          <ContactHeaderCard
            imageSrc={inputs.In_AvatarURL || undefined}
            title={inputs.In_ContactName}
            subtitle="LDM Event Coordinator"
          />
        </ContactEmailForm>
      }
    />
  );
}
