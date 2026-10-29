import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import { MyEntertaining_Embedded } from './MyEntertaining_Embedded';

function renderView(
  onNavBack = vi.fn(),
  renderCalendar = vi.fn((id: string, navBack: () => void) => (
    <button data-testid="calendar" id={id} type="button" onClick={navBack} />
  )),
) {
  const view = render(
    <MemoryRouter initialEntries={['/UBTConnect/MyEntertaining']}>
      <MyEntertaining_Embedded id="$b2" onNavBack={onNavBack} renderCalendar={renderCalendar} />
    </MemoryRouter>,
  );
  return { ...view, onNavBack, renderCalendar };
}

const blockNames = (c: HTMLElement) =>
  Array.from(c.querySelectorAll('[data-block]')).map((e) => e.getAttribute('data-block'));

describe('MyEntertaining_Embedded', () => {
  it('renders Layout_DetailPage (primary, In_IsHideTitle: no header) with the calendar slot and CommonUI_InsideLayout', () => {
    const { container, renderCalendar } = renderView();
    const block = container.querySelector('[data-block="Calendar.MyEntertaining_Embedded"]');
    expect(block).toHaveAttribute('id', '$b2');
    expect(blockNames(container).slice(0, 2)).toEqual([
      'Calendar.MyEntertaining_Embedded',
      'Layouts.Layout_DetailPage',
    ]);
    expect(container.querySelector('[data-block="Layouts.Layout_DetailPage"]')).toHaveAttribute('id', 'b2-$b1');
    expect(container.querySelector('.ubt-layout-detail--primary')).not.toBeNull();
    expect(container.querySelector('header')).toBeNull();
    expect(screen.queryByText('My Entertaining')).toBeNull();
    expect(renderCalendar).toHaveBeenCalledWith('b2-$b2', expect.any(Function));
    expect(screen.getByTestId('calendar').closest('.content-middle')).not.toBeNull();
    expect(container.querySelector('[data-block="App_Common.CommonUI_InsideLayout"]')).toHaveAttribute('id', 'b2-$b3');
  });

  it("Handle_NavBack: the calendar's OnNavBack raises OnNavBack", () => {
    const { onNavBack } = renderView();
    fireEvent.click(screen.getByTestId('calendar'));
    expect(onNavBack).toHaveBeenCalledTimes(1);
  });
});
