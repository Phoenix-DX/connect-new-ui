import { CustomContainer } from '@/components/ui/CustomContainer';
import { UBT_Color, UBT_FontSize, UBT_FontWeight, UBT_Size } from '@/lib/ubtConnectLibrary/staticEntities';

export interface ContactUsDetailsHeaderProps {
  /** In_ListMenuOptionLabel. */
  label: string;
  /** Description: the description of the subject. */
  description: string;
  /** Signed in with a country phone: the Support Team call link shows. */
  showSupportTeamCall: boolean;
  /** The Support Team link. */
  onSupportTeam: () => void;
}

const HEADER_OPTIONS = { PaddingSize: { VerticalSizeId: UBT_Size.Small, HorizontalSizeId: UBT_Size.Base } };
const LABEL_OPTIONS = {
  TextOptions: { Color: UBT_Color.Neutral10, FontSize: UBT_FontSize.Small, FontWeight: UBT_FontWeight.SemiBold },
};
const DESCRIPTION_OPTIONS = {
  MarginSize: { TopSizeId: UBT_Size.Small },
  TextOptions: { FontSize: UBT_FontSize.Small },
};
const CALL_OPTIONS = { MarginSize: { TopSizeId: UBT_Size.Base }, TextOptions: { FontSize: UBT_FontSize.Small } };

/** The top of the ContactUsDetails content: the label of the subject, its description and, signed in with a country
    phone, the "Prefer to speak with someone?" text with the Support Team call link.
    @origin UBTConnect.App_Menu_ContactUs.ContactUsDetails */
export function ContactUsDetailsHeader({
  label,
  description,
  showSupportTeamCall,
  onSupportTeam,
}: ContactUsDetailsHeaderProps) {
  return (
    <CustomContainer id="$b2" options={HEADER_OPTIONS}>
      <CustomContainer id="$b3" options={LABEL_OPTIONS}>
        <span data-expression="">{label}</span>
      </CustomContainer>
      <CustomContainer id="$b4" options={DESCRIPTION_OPTIONS}>
        <span data-expression="">{description}</span>
      </CustomContainer>
      {showSupportTeamCall && (
        <CustomContainer id="$b5" options={CALL_OPTIONS}>
          <span data-expression="">{'Prefer to speak with someone? \r\nGive our '}</span>
          <a
            className="text-underline"
            data-link=""
            href="#"
            style={{ marginLeft: 0 }}
            onClick={(event) => {
              event.preventDefault();
              onSupportTeam();
            }}
          >
            Support Team
          </a>
          <span data-expression="" style={{ marginLeft: 0 }}>
            {' a call.'}
          </span>
        </CustomContainer>
      )}
    </CustomContainer>
  );
}
