import { composeStories } from '@storybook/react-vite';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ContextMenu_Item } from './ContextMenu_Item';
import * as stories from './ContextMenu_Item.stories';

const { CompiledView } = composeStories(stories);

/* No captured DOM exists for this block: the checks follow the compiled view
   (migration/blocks/sources/UBTConnectLibrary.ConnectPatterns.ContextMenu_Item.mvc.js:171-260). */
describe('ContextMenu_Item', () => {
  it('renders a padded ubt-context-menu-option container with an IconText (Small gutter) and its Icon', () => {
    const { container } = render(<CompiledView />);
    const root = container.firstElementChild;
    expect(root).toHaveAttribute('data-block', 'ConnectPatterns.ContextMenu_Item');
    const option = root?.querySelector(':scope > [data-block="BasePatterns.CustomContainer"] > div');
    expect(option?.className).toBe('ubt-custom-container ubt-context-menu-option padding-x-s padding-y-base');
    const iconText = option?.querySelector(':scope > [data-block="ConnectPatterns.IconText"]');
    expect(iconText).toHaveTextContent('Share');
    expect(iconText?.querySelector('[data-block="ConnectPatterns.Icon"] > div')?.className).toBe(
      'ubt-icon connect-icon-share text-neutral-7 icon-medium',
    );
  });

  it('uses In_UBT_IconColorId when set', () => {
    const { container } = render(<ContextMenu_Item inUBTIconsId="connect-icon-edit" inUBTIconColorId="primary" />);
    expect(container.querySelector('.ubt-icon')).toHaveClass('text-primary');
  });
});
