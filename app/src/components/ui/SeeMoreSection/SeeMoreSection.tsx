/** @origin UBTConnectLibrary.ConnectPatterns.SeeMoreSection */
// @os-block UBTConnectLibrary.ConnectPatterns.SeeMoreSection
import { useState, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { CustomText } from '@/components/ui/CustomText';
import { formatClasses } from '@/shared/UBTConnectLibrary/lib/actions';
import { UBT_Color, UBT_FontSize, UBT_FontWeight, UBT_Size } from '@/shared/UBTConnectLibrary/lib/staticEntities';

export interface SeeMoreSectionProps {
  /** OutSystems instance id of the block. */
  id?: string;
  startExpanded?: boolean;
  extendedClasses?: string;
  isEnabled?: boolean;
  /** Placeholder Content. */
  children?: ReactNode;
}

const MAIN_CONTAINER_CLASS = 'ubt-see-more-section';

/** Collapsible section (p:UBTConnectLibrary.ConnectPatterns.SeeMoreSection.mvc.js:178-303): "See more" / "Hide" toggles
    the "expanded" / "closed" class (Action_IconOnClick :338); the content sits in a padding-y-s CustomContainer.
    Event_OnReady (:363) sets isExpanded = StartExpanded: here the initial state. */
export function SeeMoreSection({
  id,
  startExpanded = true,
  extendedClasses = '',
  isEnabled = true,
  children,
}: SeeMoreSectionProps) {
  const [isExpanded, setIsExpanded] = useState(startExpanded);
  return (
    <OSBlock name="ConnectPatterns.SeeMoreSection" id={id}>
      <div
        className={formatClasses(
          formatClasses(MAIN_CONTAINER_CLASS, extendedClasses),
          isExpanded ? 'expanded' : 'closed',
        )}
        data-container=""
      >
        <div className={`${MAIN_CONTAINER_CLASS}--title`} data-container="">
          <CustomText
            inText={!isExpanded ? 'See more' : 'Hide'}
            inTextOptions={{
              Color: isEnabled ? UBT_Color.Primary : UBT_Color.Neutral7,
              FontSize: UBT_FontSize.Small,
              FontWeight: UBT_FontWeight.SemiBold,
            }}
            onClicked={() => {
              setIsExpanded((v) => !v);
            }}
          />
        </div>
        <div className={`${MAIN_CONTAINER_CLASS}--content`} data-container="">
          <CustomContainer options={{ PaddingSize: { VerticalSizeId: UBT_Size.Small } }}>
            <div className={`${MAIN_CONTAINER_CLASS}--content`}>{children}</div>
          </CustomContainer>
        </div>
      </div>
    </OSBlock>
  );
}
