import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { ContactEmailForm } from '@/components/contact/ContactEmailForm';
import { ContactPersonCard } from '@/components/contact/ContactPersonCard';
import { DetailLayoutContainer } from '@/containers/DetailLayout';
import { useNoCommonUi } from '@/platform/feedback/dialogs';
import { contactByEmailMemberConfig } from './config';
import { useContactByEmailMemberSubmit } from './hooks/useContactByEmailMemberSubmit';
import { readContactByEmailMemberInputs } from './inputs';

/** @origin UBTConnect.ContactFlow.ContactByEmailMember
    The route of the member e-mail: Layout_DetailPage (title left, the title and colour of `config.ts`) with the shared
    ContactEmailForm (the form inputs of `config.ts`, the props of the submit hook) whose Placeholder_ContactCard holds
    the person card (the member avatar, "<name> <surname>" and the locality line). Placeholder_CommonUI_Inside_Layout
    is empty: no CommonUI, so `useNoCommonUi()` (shell guide). The flows are in hooks/useContactByEmailMemberSubmit.ts. */
export default function ContactByEmailMember() {
  useNoCommonUi();
  const [params] = useSearchParams();
  const inputs = useMemo(() => readContactByEmailMemberInputs(params), [params]);
  const config = contactByEmailMemberConfig(inputs);
  const submit = useContactByEmailMemberSubmit(inputs);

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
            name={`${inputs.In_ContactName} ${inputs.In_ContactSurname}`}
            locality={inputs.In_ContactLocality}
            country={inputs.In_ContactCountry}
          />
        </ContactEmailForm>
      }
    />
  );
}
