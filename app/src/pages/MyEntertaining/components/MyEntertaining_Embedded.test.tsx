import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import { MyEntertaining_Embedded } from './MyEntertaining_Embedded';

function renderView(onBack = vi.fn(), renderCalendar = vi.fn((id: string) => <div data-testid="calendar" id={id} />)) {
  const view = render(
    <MemoryRouter initialEntries={['/UBTConnect/MyEntertaining']}>
      <MyEntertaining_Embedded id="$b2" onBack={onBack} renderCalendar={renderCalendar} />
    </MemoryRouter>,
  );
  return { ...view, onBack, renderCalendar };
}

const blockNames = (c: HTMLElement) =>
  Array.from(c.querySelectorAll('[data-block]')).map((e) => e.getAttribute('data-block'));

describe('MyEntertaining_Embedded', () => {
  it('renders Layout_DetailPage (primary, "My Entertaining") with the calendar slot and CommonUI_InsideLayout', () => {
    const { container, renderCalendar } = renderView();
    const block = container.querySelector('[data-block="Calendar.MyEntertaining_Embedded"]');
    expect(block).toHaveAttribute('id', '$b2');
    expect(blockNames(container).slice(0, 2)).toEqual([
      'Calendar.MyEntertaining_Embedded',
      'Layouts.Layout_DetailPage',
    ]);
    expect(container.querySelector('[data-block="Layouts.Layout_DetailPage"]')).toHaveAttribute('id', 'b2-$b1');
    expect(container.querySelector('.ubt-layout-detail--primary')).not.toBeNull();
    expect(screen.getByText('My Entertaining')).toBeInTheDocument();
    expect(renderCalendar).toHaveBeenCalledWith('b2-$b2');
    expect(screen.getByTestId('calendar').closest('.content-middle')).not.toBeNull();
    expect(container.querySelector('[data-block="App_Common.CommonUI_InsideLayout"]')).toHaveAttribute('id', 'b2-$b3');
  });

  it('the back arrow calls onBack', () => {
    const { container, onBack } = renderView();
    const back = container.querySelector('.connect-icon-arrow_left_alt');
    if (!back) throw new Error('no back arrow');
    fireEvent.click(back);
    expect(onBack).toHaveBeenCalledTimes(1);
  });
});
