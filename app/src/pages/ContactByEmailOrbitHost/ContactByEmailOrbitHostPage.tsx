import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { ContactEmailForm } from '@/components/contact/ContactEmailForm';
import { ContactPersonCard } from '@/components/contact/ContactPersonCard';
import { DetailLayoutContainer } from '@/containers/DetailLayout';
import { useNoCommonUi } from '@/platform/feedback/dialogs';
import { contactByEmailOrbitHostConfig } from './config';
import { useContactByEmailOrbitHostSubmit } from './hooks/useContactByEmailOrbitHostSubmit';
import { readContactByEmailOrbitHostInputs } from './inputs';

/** @origin UBTConnect.ContactFlow.ContactByEmailOrbitHost
    The route of the e-mail to an Orbit host. Not captured (no-capture, user 2026-10-16): built from the compiled code,
    with the markup of the same blocks as ContactByEmailMember. Layout_DetailPage (title left, the title and colour of
    `config.ts`) with the shared ContactEmailForm (the form inputs of `config.ts`, the props of the submit hook) whose
    Placeholder_ContactCard holds the person card (the host avatar, In_HostName and the locality line).
    Placeholder_CommonUI_Inside_Layout is empty: no CommonUI, so `useNoCommonUi()` (shell guide). The flows are in
    hooks/useContactByEmailOrbitHostSubmit.ts. */
export default function ContactByEmailOrbitHost() {
  useNoCommonUi();
  const [params] = useSearchParams();
  const inputs = useMemo(() => readContactByEmailOrbitHostInputs(params), [params]);
  const config = contactByEmailOrbitHostConfig(inputs);
  const submit = useContactByEmailOrbitHostSubmit(inputs);

  return (
    <DetailLayoutContainer
      id="$b1"
      inAlignTitleLeft
      inIsPrimaryColor={config.isPrimaryColor}
      placeholderHeaderTitle={<span data-expression="">{config.title}</span>}
      content={
        <ContactEmailForm id="$b2" {...config.form} {...submit}>
          <ContactPersonCard
            entityType={inputs.In_EntityType}
            entityId={inputs.In_EntityId}
            avatarURL={inputs.In_AvatarURL}
            name={inputs.In_HostName}
            locality={inputs.In_ContactLocality}
            country={inputs.In_ContactCountry}
          />
        </ContactEmailForm>
      }
    />
  );
}
