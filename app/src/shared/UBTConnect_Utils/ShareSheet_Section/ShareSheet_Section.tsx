// @os-block UBTConnect_Utils.CW_Share.ShareSheet_Section
import type { ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';

export interface ShareSheet_SectionProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_HideBorder: declared, but the compiled view does not read it (ShareSheet_Section.mvc.js:12-15, 134-150). */
  inHideBorder?: boolean;
  /** Placeholder Placeholder_Title. */
  placeholderTitle?: ReactNode;
  /** Placeholder Placeholder_Content. */
  placeholderContent?: ReactNode;
}

/** Two placeholders, title then content (UBTConnect_Utils.CW_Share.ShareSheet_Section.mvc.js:134-150). */
export function ShareSheet_Section({ id, placeholderTitle, placeholderContent }: ShareSheet_SectionProps) {
  return (
    <OSBlock name="CW_Share.ShareSheet_Section" id={id}>
      <div>{placeholderTitle}</div>
      <div>{placeholderContent}</div>
    </OSBlock>
  );
}
