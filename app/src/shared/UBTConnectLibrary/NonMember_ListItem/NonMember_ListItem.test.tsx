import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '../../test/capturedVariants';
import { NonMember_ListItem } from './NonMember_ListItem';
import * as stories from './NonMember_ListItem.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('NonMember_ListItem', () => {
  testCapturedVariants(stories, captures);
  it('deceased caption (italic option) and partner-taken text (not captured); click only when enabled', () => {
    const onClick = vi.fn();
    const { getByText, rerender } = render(
      <NonMember_ListItem
        title="Someone"
        deceasedCaption="Deceased"
        lifeCycleTextItalic
        marriedCaption="Married"
        marriedPartnerTakenText="Taken"
        onOnClickPerson={onClick}
      />,
    );
    expect(getByText('Deceased').parentElement).toHaveClass('italic', 'text-neutral-7');
    expect(getByText('Taken').parentElement).toHaveClass('italic', 'text-cyan-darkest');
    fireEvent.click(getByText('Someone'));
    expect(onClick).toHaveBeenCalledTimes(1);
    rerender(<NonMember_ListItem title="Someone" isEnabled={false} onOnClickPerson={onClick} />);
    fireEvent.click(getByText('Someone'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
