import { useState, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { Columns_Two } from '@/shared/UBTConnectLibrary/Columns_Two';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { formatClasses } from '@/shared/UBTConnectLibrary/lib/actions';
import { UBT_ColumnBehaviour, UBT_Size, UBT_VerticalAlign } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { UBT_Icons_ExpandMore } from '@/pages/OneSchoolGlobalDetails/staticEntities';

export interface ExpandableSectionProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** StartExpanded (default True, model :19-21): isExpanded at OnReady. */
  startExpanded?: boolean;
  extendedClasses?: string;
  /** Placeholder Title. */
  title?: ReactNode;
  /** Placeholder Content. */
  children?: ReactNode;
}

/** MainContainerClass (model :16-18). */
const MAIN_CONTAINER_CLASS = 'ubt-expandable-section';

/** UBTConnectLibrary.ConnectPatterns.ExpandableSection (analysis/sources/pretty/
    UBTConnectLibrary.ConnectPatterns.ExpandableSection.mvc.js; only OneSchoolGlobalDetails uses it,
    catalog/blocks.md:248). View: the main container (FormatClasses(FormatClasses(MainContainerClass, ExtendedClasses),
    "expanded" | "closed")) holds the title row (CustomContainer padding y medium / x base > Columns_Two reduce last,
    spacing xs, centred: the title placeholder (OSInline) and the expand icon, whose container click is
    Action_IconOnClick) and the content (CustomContainer padding y small / x base > the content placeholder). The
    original CSS shows or hides the content from the `expanded` / `closed` class. Action_IconOnClick (:420): isExpanded
    = not isExpanded; OnReady (:445): isExpanded = StartExpanded (model default False before it).
    @origin UBTConnectLibrary.ConnectPatterns.ExpandableSection */
export function ExpandableSection({
  id,
  startExpanded = true,
  extendedClasses = '',
  title,
  children,
}: ExpandableSectionProps) {
  /* OnReady sets isExpanded = StartExpanded once (later input changes are not read); the model default (False) only
     lasts until then, so the state starts from StartExpanded. */
  const [isExpanded, setIsExpanded] = useState(() => startExpanded);
  const className = formatClasses(
    formatClasses(MAIN_CONTAINER_CLASS, extendedClasses),
    isExpanded ? 'expanded' : 'closed',
  );
  return (
    <OSBlock name="ConnectPatterns.ExpandableSection" id={id}>
      <div className={className} data-container="">
        <CustomContainer
          options={{ PaddingSize: { VerticalSizeId: UBT_Size.Medium, HorizontalSizeId: UBT_Size.Base } }}
        >
          <Columns_Two
            columnOptions={{
              ColumnBehaviour: UBT_ColumnBehaviour.ReduceLast,
              SpacingSize: UBT_Size.ExtraSmall,
              VerticalAlign: UBT_VerticalAlign.Center,
            }}
            left={
              <div className={`${MAIN_CONTAINER_CLASS}--title`} data-container="">
                <div className={`${MAIN_CONTAINER_CLASS}--title-text OSInline`}>{title}</div>
              </div>
            }
            right={
              <div
                className={`${MAIN_CONTAINER_CLASS}--title-icon OSInline`}
                data-container=""
                style={{ cursor: 'pointer', width: 'auto' }}
                onClick={() => {
                  setIsExpanded((v) => !v);
                }}
              >
                <Icon inIconId={UBT_Icons_ExpandMore} />
              </div>
            }
          />
        </CustomContainer>
        <div className={`${MAIN_CONTAINER_CLASS}--content`} data-container="">
          <CustomContainer
            options={{ PaddingSize: { VerticalSizeId: UBT_Size.Small, HorizontalSizeId: UBT_Size.Base } }}
          >
            <div className={`${MAIN_CONTAINER_CLASS}--content`}>{children}</div>
          </CustomContainer>
        </div>
      </div>
    </OSBlock>
  );
}
