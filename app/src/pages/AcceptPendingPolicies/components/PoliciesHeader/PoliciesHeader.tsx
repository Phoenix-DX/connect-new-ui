import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { UBT_Color, UBT_FontSize, UBT_FontWeight, UBT_Size } from '@/lib/ubtConnectLibrary/staticEntities';
import { UBT_FontSize_Heading3 } from '@/pages/AcceptPendingPolicies/staticEntities';

const TEXT_BASE_SEMIBOLD = {
  Color: UBT_Color.Neutral0,
  FontSize: UBT_FontSize.Base,
  FontWeight: UBT_FontWeight.SemiBold,
};

export interface PoliciesHeaderProps {
  /** The URL of the white Connect logo (UBTConnect.ConnectLogoWhite.svg): the page resolves the OutSystems asset. */
  logoSrc: string;
}

/** @origin UBTConnect.App_Policies.AcceptPendingPolicies
    The header of the screen content: "Welcome to", the white Connect logo and the two title lines
    "Connect and Directory" and "Terms and Conditions & Privacy Policy". The blocks keep the instance ids of the screen
    ($b2 to $b6). */
export function PoliciesHeader({ logoSrc }: PoliciesHeaderProps) {
  return (
    <div className="ubt-policies--header" data-container="">
      <CustomContainer id="$b2" options={{ PaddingSize: { BottomSizeId: UBT_Size.Small } }}>
        <CustomText
          id="$b3"
          inText="Welcome to"
          inTextOptions={{
            Color: UBT_Color.Neutral0,
            FontSize: UBT_FontSize_Heading3,
            FontWeight: UBT_FontWeight.SemiBold,
          }}
        />
      </CustomContainer>
      <img className="login-screen__connect-logo ThemeGrid_MarginGutter" data-image="" src={logoSrc} />
      <CustomContainer id="$b4" options={{ PaddingSize: { TopSizeId: UBT_Size.Base, BottomSizeId: UBT_Size.Medium } }}>
        <CustomText id="$b5" inTextOptions={TEXT_BASE_SEMIBOLD} inText="Connect and Directory" />
        <CustomText id="$b6" inTextOptions={TEXT_BASE_SEMIBOLD} inText="Terms and Conditions & Privacy Policy" />
      </CustomContainer>
    </div>
  );
}
