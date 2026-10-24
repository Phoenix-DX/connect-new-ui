import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { osImage } from '@/legacy/os/os-assets';
import { ContactEmailForm } from '@/components/contact/ContactEmailForm';
import { ContactHeaderCard } from '@/components/contact/ContactHeaderCard';
import { DetailLayoutContainer } from '@/containers/DetailLayout';
import { useNoCommonUi } from '@/platform/feedback/dialogs';
import { contactByEmailOneSchoolGlobalConfig } from './config';
import { useContactByEmailOneSchoolGlobalSubmit } from './hooks/useContactByEmailOneSchoolGlobalSubmit';
import { readContactByEmailOneSchoolGlobalInputs } from './inputs';

/** @origin UBTConnect.ContactFlow.ContactByEmailOneSchoolGlobal
    The route of the OneSchool Global e-mail: Layout_DetailPage (title left, the title and colour of `config.ts`) with
    the shared ContactEmailForm (the form inputs of `config.ts`, the props of the submit hook) whose
    Placeholder_ContactCard holds the header card (the OneSchool Global logo, In_ContactName and an empty line).
    Placeholder_CommonUI_Inside_Layout is empty: no CommonUI, so `useNoCommonUi()` (shell guide). The flows are in
    hooks/useContactByEmailOneSchoolGlobalSubmit.ts. */
export default function ContactByEmailOneSchoolGlobal() {
  useNoCommonUi();
  const [params] = useSearchParams();
  const inputs = useMemo(() => readContactByEmailOneSchoolGlobalInputs(params), [params]);
  const config = contactByEmailOneSchoolGlobalConfig;
  const submit = useContactByEmailOneSchoolGlobalSubmit(inputs);

  return (
    <DetailLayoutContainer
      id="$b1"
      inAlignTitleLeft
      inIsPrimaryColor={config.isPrimaryColor}
      placeholderHeaderTitle={<span data-expression="">{config.title}</span>}
      content={
        <ContactEmailForm id="$b2" {...config.form} {...submit}>
          <ContactHeaderCard
            imageSrc={osImage('img/UBTConnectLibrary.OneSchoolGlobal.svg')}
            title={inputs.In_ContactName}
            subtitle=" "
          />
        </ContactEmailForm>
      }
    />
  );
}
