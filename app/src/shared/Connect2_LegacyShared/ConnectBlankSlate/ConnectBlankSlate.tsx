// @os-block Connect2_LegacyShared.Reusable.ConnectBlankSlate
import type { ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';

export interface ConnectBlankSlateProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Placeholder Image. */
  image?: ReactNode;
  /** Placeholder Title. */
  title?: ReactNode;
  /** Placeholder Subtitle. */
  subtitle?: ReactNode;
}

/** Empty state of the legacy (Connect2) screens (p:migration/screens/ConnectShare/analysis/sources/pretty/
    Connect2_LegacyShared.Reusable.ConnectBlankSlate.mvc.js, view :110-160): a `connect-blank-slate-container` with the
    Image, Title and Subtitle placeholders. No input, event or action. */
export function ConnectBlankSlate({ id, image, title, subtitle }: ConnectBlankSlateProps) {
  return (
    <OSBlock name="Reusable.ConnectBlankSlate" id={id}>
      <div className="connect-blank-slate-container" data-container="">
        <div>{image}</div>
        <div className="connect-blank-slate-title margin-top-base text-align-center">{title}</div>
        <div className="connect-blank-slate-sub-title margin-top-s">{subtitle}</div>
      </div>
    </OSBlock>
  );
}
