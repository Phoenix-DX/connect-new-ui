/** @origin OutSystemsUI_2_23.Content.Card */
// @os-block OutSystemsUI_2_23.Content.Card
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';

export interface CardProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** UsePadding; default True. */
  usePadding?: boolean;
  /** ExtendedClass. */
  extendedClass?: string;
  /** Placeholder Content. */
  children?: ReactNode;
}

/** OutSystems UI Card (OutSystemsUI_2_23.Content.Card.mvc.js, MessageDetail copy, internalRender): the Content
    placeholder with the class built by the compiled expression (spaces kept verbatim). */
export function Card({ id, usePadding = true, extendedClass = '', children }: CardProps) {
  const className =
    'placeholder-empty card card-content' +
    (usePadding ? '' : ' padding-none ') +
    (extendedClass === '' ? '' : ` ${extendedClass}`);
  return (
    <OSBlock name="Content.Card" id={id}>
      <div className={className}>{children}</div>
    </OSBlock>
  );
}
