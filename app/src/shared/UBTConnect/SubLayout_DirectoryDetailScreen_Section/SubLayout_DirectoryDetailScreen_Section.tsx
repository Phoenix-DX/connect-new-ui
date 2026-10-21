// @os-block UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen_Section
import type { ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { CustomContainer } from '../../UBTConnectLibrary/CustomContainer';
import { CustomText } from '../../UBTConnectLibrary/CustomText';
import { SubLayout_Section } from '../../UBTConnectLibrary/SubLayout_Section';
import { UBT_Color, UBT_FontWeight, UBT_Size } from '../lib/staticEntities';

export interface SubLayout_DirectoryDetailScreen_SectionProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Section title (CustomText, semi-bold); none when empty. */
  inTitle?: string;
  /** UBT_Size identifier (default Small). */
  inPaddingTop?: string;
  /** UBT_Size identifier (default Small). */
  inPaddingBottom?: string;
  /** Placeholder Placeholder_SectionContent. */
  children?: ReactNode;
}

/** Directory detail section (UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen_Section.mvc.js view, ContactUsDetails
    copy): CustomContainer (background Neutral0, padding x base, top In_PaddingTop, bottom In_PaddingBottom) holding
    SubLayout_Section (no input: its defaults) whose Title is the CustomText of In_Title (semi-bold, only when not
    empty) and whose Content is the Placeholder_SectionContent. */
export function SubLayout_DirectoryDetailScreen_Section({
  id,
  inTitle = '',
  inPaddingTop = UBT_Size.Small,
  inPaddingBottom = UBT_Size.Small,
  children,
}: SubLayout_DirectoryDetailScreen_SectionProps) {
  return (
    <OSBlock name="SubLayout.SubLayout_DirectoryDetailScreen_Section" id={id}>
      <CustomContainer
        options={{
          Background: { BackgroundColor: UBT_Color.Neutral0 },
          PaddingSize: { HorizontalSizeId: UBT_Size.Base, TopSizeId: inPaddingTop, BottomSizeId: inPaddingBottom },
        }}
      >
        <SubLayout_Section
          title={
            inTitle !== '' && <CustomText inText={inTitle} inTextOptions={{ FontWeight: UBT_FontWeight.SemiBold }} />
          }
          content={<div>{children}</div>}
        />
      </CustomContainer>
    </OSBlock>
  );
}
