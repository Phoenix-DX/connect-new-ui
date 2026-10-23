import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { osImage } from '@/legacy/os/os-assets';
import { ContactEmailForm } from '@/components/contact/ContactEmailForm';
import { ContactHeaderCard } from '@/components/contact/ContactHeaderCard';
import { Layout_DetailPage } from '@/shared/UBTConnectLibrary/Layout_DetailPage';
import { useNoCommonUi } from '@/platform/feedback/dialogs';
import { contactByEmailOrbitHelpdeskConfig } from './config';
import { useContactByEmailOrbitHelpdeskSubmit } from './hooks/useContactByEmailOrbitHelpdeskSubmit';
import { readContactByEmailOrbitHelpdeskInputs } from './inputs';

/** Images.Orbit_Logo of Connect2_OrbitMobile_MUI. */
const ORBIT_LOGO = 'img/Connect2_OrbitMobile_MUI.Orbit_Logo.svg';

/** @origin UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk
    The route of the Orbit Helpdesk e-mail: Layout_DetailPage (title left, the title and colour of `config.ts`) with
    the shared ContactEmailForm (the form inputs of `config.ts`, the props of the submit hook) whose
    Placeholder_ContactCard holds the header card (the Orbit logo and "Orbit Helpdesk", no second line). No data
    action. Placeholder_CommonUI_Inside_Layout is empty: no CommonUI, so `useNoCommonUi()` (shell guide). The flows
    are in hooks/useContactByEmailOrbitHelpdeskSubmit.ts. */
export default function ContactByEmailOrbitHelpdesk() {
  useNoCommonUi();
  const [params] = useSearchParams();
  const inputs = useMemo(() => readContactByEmailOrbitHelpdeskInputs(params), [params]);
  const config = contactByEmailOrbitHelpdeskConfig(inputs);
  const submit = useContactByEmailOrbitHelpdeskSubmit(inputs);

  return (
    <Layout_DetailPage
      id="$b1"
      inAlignTitleLeft
      inIsPrimaryColor={config.isPrimaryColor}
      placeholderHeaderTitle={<span data-expression="">{config.title}</span>}
      content={
        <ContactEmailForm id="$b2" {...config.form} {...submit}>
          <ContactHeaderCard imageSrc={osImage(ORBIT_LOGO)} title="Orbit Helpdesk" />
        </ContactEmailForm>
      }
    />
  );
}
