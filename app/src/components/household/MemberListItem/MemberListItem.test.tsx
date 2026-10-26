import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import { MemberListItem } from './MemberListItem';
import * as stories from './MemberListItem.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('Member_ListItem', () => {
  testCapturedVariants(stories, captures);
  it('raises OnClickPerson from the name or the avatar only when enabled; italic life-cycle text', () => {
    const onClick = vi.fn();
    const { getByText, rerender } = render(
      <MemberListItem title="Someone" lifeCycleText="Life" lifeCycleTextItalic onOnClickPerson={onClick} />,
    );
    expect(getByText('Life').parentElement).toHaveClass('italic');
    fireEvent.click(getByText('Someone'));
    expect(onClick).toHaveBeenCalledTimes(1);
    rerender(<MemberListItem title="Someone" isEnabled={false} onOnClickPerson={onClick} />);
    fireEvent.click(getByText('Someone'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
