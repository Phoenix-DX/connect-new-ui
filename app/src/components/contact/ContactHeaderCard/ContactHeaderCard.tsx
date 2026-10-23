import { UBT_FontWeight } from '@/shared/UBTConnect/lib/staticEntities';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { UBT_Color, UBT_FontSize, UBT_Size } from '@/shared/UBTConnectLibrary/lib/staticEntities';

export interface ContactHeaderCardProps {
  /** Source of the header image; undefined → the image has no src attribute. The page resolves an OutSystems
      asset with `osImage`. */
  imageSrc?: string;
  /** The first line (Neutral10 / Base / Bold). */
  title: string;
  /** The second line (Neutral7 / XS); undefined → no second line (ContactByEmailOrbitHelpdesk). */
  subtitle?: string;
}

/** @origin UBTConnect.ContactFlow.ContactByEmailOneSchoolGlobal
    The header card in Placeholder_ContactCard of the ContactByEmail form. ContactByEmailLDMCoordinator and
    ContactByEmailOrbitHelpdesk have the same markup (duplicates.md, group 1). A centred container > CustomContainer
    `contact-by-email__header` (Neutral2 background, padding y XS, margin bottom Base) > the image
    `contact-by-email__header__img`, the title line and, when given, the subtitle line (both padding top XS). The
    blocks keep the instance ids of the screens ($b3 to $b5). */
export function ContactHeaderCard({ imageSrc, title, subtitle }: ContactHeaderCardProps) {
  return (
    <div className="text-align-center" data-container="">
      <CustomContainer
        id="$b3"
        extendedClasses="contact-by-email__header"
        options={{
          Background: { BackgroundColor: UBT_Color.Neutral2 },
          PaddingSize: { VerticalSizeId: UBT_Size.ExtraSmall },
          MarginSize: { BottomSizeId: UBT_Size.Base },
        }}
      >
        <div data-container="">
          <img className="contact-by-email__header__img" data-image="" src={imageSrc} />
        </div>
        <CustomContainer
          id="$b4"
          options={{
            PaddingSize: { TopSizeId: UBT_Size.ExtraSmall },
            TextOptions: {
              Color: UBT_Color.Neutral10,
              FontSize: UBT_FontSize.Base,
              FontWeight: UBT_FontWeight.Bold,
            },
          }}
        >
          <span data-expression="">{title}</span>
        </CustomContainer>
        {subtitle !== undefined && (
          <CustomContainer
            id="$b5"
            options={{
              PaddingSize: { TopSizeId: UBT_Size.ExtraSmall },
              TextOptions: { Color: UBT_Color.Neutral7, FontSize: UBT_FontSize.ExtraSmall },
            }}
          >
            <span data-expression="">{subtitle}</span>
          </CustomContainer>
        )}
      </CustomContainer>
    </div>
  );
}
