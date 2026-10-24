import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { HorizontalTagList } from './HorizontalTagList';
import * as stories from './HorizontalTagList.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const tags = () => [
  { Text: 'A', Identifier: 'a', IsSelected: true },
  { Text: 'B', Identifier: 'b', IsSelected: false },
  { Text: 'C', Identifier: 'c', IsSelected: false },
];
const click = (c: HTMLElement, i: number) => {
  fireEvent.click(c.querySelectorAll('.ubt-tag-toggle')[i] as HTMLElement);
};

describe('HorizontalTagList', () => {
  testCapturedVariants(stories, captures);

  it('toggles a tag and raises Changed with the list', () => {
    const onChanged = vi.fn();
    const { container } = render(<HorizontalTagList inTagToggleList={tags()} onChanged={onChanged} />);
    click(container, 1);
    expect(onChanged).toHaveBeenLastCalledWith([
      expect.objectContaining({ IsSelected: true }),
      expect.objectContaining({ Identifier: 'b', IsSelected: true }),
      expect.objectContaining({ IsSelected: false }),
    ]);
  });

  it('single selection: the clicked row index 0 is ignored at first (CurrentListIndex = 0); another row deselects the rest', () => {
    const onChanged = vi.fn();
    const { container } = render(
      <HorizontalTagList inTagToggleList={tags()} inIsSingleSelection onChanged={onChanged} />,
    );
    click(container, 0);
    expect(onChanged).not.toHaveBeenCalled();
    click(container, 2);
    expect(onChanged).toHaveBeenLastCalledWith([
      expect.objectContaining({ IsSelected: false }),
      expect.objectContaining({ IsSelected: false }),
      expect.objectContaining({ Identifier: 'c', IsSelected: true }),
    ]);
  });

  it('mandatory selection keeps the last selected tag; a disabled tag does nothing', () => {
    const onChanged = vi.fn();
    const list = [
      { Text: 'A', Identifier: 'a', IsSelected: false },
      { Text: 'B', Identifier: 'b', IsSelected: true, Enabled: true },
      { Text: 'C', Enabled: false, IsSelected: false },
    ];
    const { container } = render(
      <HorizontalTagList inTagToggleList={list} inIsMandatorySelection onChanged={onChanged} />,
    );
    click(container, 1);
    click(container, 2);
    expect(onChanged).not.toHaveBeenCalled();
  });
});
