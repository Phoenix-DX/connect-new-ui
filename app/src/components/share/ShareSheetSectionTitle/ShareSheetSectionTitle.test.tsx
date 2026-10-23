import { composeStories } from '@storybook/react-vite';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import * as stories from './ShareSheetSectionTitle.stories';

const { CompiledView, DoubleExtraSmall } = composeStories(stories);

/* No captured DOM exists for this block: the checks follow the compiled view
   (migration/blocks/sources/UBTConnect_Utils.CW_Share.ShareSheet_SectionTitle.mvc.js). */
describe('ShareSheet_SectionTitle', () => {
  it('Small font: bottom padding S, semi-bold label', () => {
    const { container } = render(<CompiledView />);
    expect(container.firstElementChild).toHaveAttribute('data-block', 'CW_Share.ShareSheet_SectionTitle');
    const box = container.querySelector('.ubt-custom-container');
    expect(box).toHaveClass('padding-bottom-s', 'font-semi-bold', 'font-size-s');
    expect(box?.querySelector(':scope > div[data-container] > span[data-expression]')).toHaveTextContent('Shared To');
  });

  it('DoubleExtraSmall font: bottom padding XS', () => {
    const { container } = render(<DoubleExtraSmall />);
    expect(container.querySelector('.ubt-custom-container')).toHaveClass('padding-bottom-xs', 'font-size-xxs');
  });
});
