// @os-block UBTConnectLibrary.Layouts.SubLayout_Section
import type { ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { CustomContainer } from '../CustomContainer';
import { formatClasses } from '../lib/actions';
import { UBT_Size } from '../lib/staticEntities';

export interface SubLayout_SectionProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** UBT_Size identifier of the top margin (default ExtraSmall). */
  marginTop?: string;
  extendedClasses?: string;
  /** Placeholder Title (in a `margin-bottom-s` placeholder). */
  title?: ReactNode;
  /** Placeholder Content. */
  content?: ReactNode;
}

/** Section sub-layout (UBTConnectLibrary.Layouts.SubLayout_Section.mvc.js view, ContactUsDetails copy): a
    CustomContainer with FormatClasses("ubt-sub-layout-section", ExtendedClasses) and MarginSize.TopSizeId = MarginTop,
    holding the Title placeholder (style `margin-bottom-s`) and the Content placeholder. The container's Clicked
    raises the block's own event Clicked; its only parent, SubLayout_DirectoryDetailScreen_Section, binds no event
    (survey UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen_Section.mvc.js), so the click does nothing and no
    prop is exposed (audit A1). */
export function SubLayout_Section({
  id,
  marginTop = UBT_Size.ExtraSmall,
  extendedClasses = '',
  title,
  content,
}: SubLayout_SectionProps) {
  return (
    <OSBlock name="Layouts.SubLayout_Section" id={id}>
      <CustomContainer
        extendedClasses={formatClasses('ubt-sub-layout-section', extendedClasses)}
        options={{ MarginSize: { TopSizeId: marginTop } }}
      >
        <div className="margin-bottom-s">{title}</div>
        <div>{content}</div>
      </CustomContainer>
    </OSBlock>
  );
}
