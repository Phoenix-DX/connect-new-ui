import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ResultListType } from '../lib/staticEntities';
import { NC_Result_Item__Image } from './NC_Result_Item__Image';

/* Never captured: behaviour from the compiled view (NC_Result_Item__Image.mvc.js view :330-600). */
describe('NC_Result_Item__Image', () => {
  it('row classes (reverse, custom), data-item and the visual min-width', () => {
    const { container } = render(
      <NC_Result_Item__Image inIsReverseImageAndContent customClass="venue-row" htmlDataItem="venue-7" />,
    );
    const row = container.querySelector('[data-item]');
    expect(row?.className).toBe('display-flex align-items-center gap-base flex-direction-row-reverse venue-row');
    expect(row?.getAttribute('data-item')).toBe('venue-7');
    expect(container.querySelector('.result-item__visual')?.getAttribute('style')).toContain('min-width: 40px');
  });

  it('round signed photo: circle classes, width = height; square division image for a round Subdivision', () => {
    const { container, rerender } = render(
      <NC_Result_Item__Image inIsRoundImage inImageHeight={48} inSignedURL="/p.svg" />,
    );
    const img = container.querySelector('img');
    expect(img).toHaveClass('img-circle', 'img-cover', 'img-cover--top-center');
    expect(img?.getAttribute('style')).toBe('height: 48px; width: 48px;');
    rerender(<NC_Result_Item__Image inIsRoundImage inResultType={ResultListType.Subdivision} />);
    expect(container.querySelector('img')?.getAttribute('src')).toContain('no_division_square');
    rerender(<NC_Result_Item__Image inBorderRadius={8} inResultType={ResultListType.Subdivision} />);
    expect(container.querySelector('img')?.getAttribute('src')).toContain('no_division_rectangle');
    expect(container.querySelector('img')?.getAttribute('style')).toBe('height: 40px; border-radius: 8px;');
    rerender(<NC_Result_Item__Image />);
    expect(container.querySelector('img')?.getAttribute('src')).toContain('User_rectangle');
  });

  it('IsLoading: image and text skeletons, no placeholders', () => {
    const { container } = render(
      <NC_Result_Item__Image isLoading inIsRoundImage titlePlaceholder={<span>Title</span>} />,
    );
    expect(container.querySelector('.skeleton-item.border-radius-circle')).not.toBeNull();
    expect(container.querySelector('.skeleton-item.flex1')?.getAttribute('style')).toBe('height: 40px;');
    expect(screen.queryByText('Title')).toBeNull();
  });

  it('OnClick_Item: the row handler, plus the nested image / text handlers (events bubble)', () => {
    const onClick = vi.fn();
    const { container } = render(
      <NC_Result_Item__Image label={<span>Venue</span>} titlePlaceholder={<span>Hall</span>} onOnClickItem={onClick} />,
    );
    fireEvent.click(screen.getByText('Venue'));
    expect(onClick).not.toHaveBeenCalled();
    fireEvent.click(screen.getByText('Hall'));
    expect(onClick).toHaveBeenCalledTimes(2);
    const visual = container.querySelector('.result-item__visual');
    if (!visual) throw new Error('no visual');
    fireEvent.click(visual);
    expect(onClick).toHaveBeenCalledTimes(4);
  });
});
