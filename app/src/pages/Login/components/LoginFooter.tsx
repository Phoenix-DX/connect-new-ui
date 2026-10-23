import { OSLink } from '@/shared/lib/OSLink';
import { LoginVersion } from './LoginVersion';

/** Under the login card: "Need help? Contact Us" (a link to ContactUsMenu) and the app version. The instance id is the
    one of the Login screen ($b9).
    @origin UBTConnect.App_Common.Login */
export function LoginFooter() {
  return (
    <div className="text-align-center" data-container="">
      <div className="need-help-footer" data-container="">
        Need help?{' '}
        <OSLink className="font-regular text-underline" style={{ marginLeft: '0px' }} url="/UBTConnect/ContactUsMenu">
          Contact Us
        </OSLink>
      </div>
      <LoginVersion id="$b9" />
    </div>
  );
}
