import { fireEvent, render } from '@testing-library/react';
import type { ComponentProps } from 'react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import { AssembleEventsView } from './AssembleEventsView';

/* The props-only view of ScreenBlock_AssembleEvents. The supper meeting names are fictional. */
type Props = ComponentProps<typeof AssembleEventsView>;
function renderView(overrides: Partial<Props> = {}) {
  const props: Props = {
    id: '$b2',
    subdivisionName: 'Zapiola (Main Meeting Room)',
    showBackNavigation: false,
    isUserSubdivision: true,
    list: <div id="b2-$b4" />,
    bottomBar: <div id="bottom-bar" />,
    onNavigateToAssembleLocationFilters: vi.fn(),
    onNavigateToMyCalendarAssemble: vi.fn(),
    ...overrides,
  };
  const view = render(
    <MemoryRouter>
      <AssembleEventsView {...props} />
    </MemoryRouter>,
  );
  return { ...view, props };
}

describe('AssembleEventsView', () => {
  it('the user\'s supper meeting: the menu icon, "Assemble" over the small name, the calendar and place icons', () => {
    const { container, props } = renderView();
    expect(container.querySelector('#b2-DIV_Assemble')).toHaveTextContent('Assemble');
    const name = container.querySelector('#b2-DIV_SMName span');
    expect(name).toHaveTextContent('Zapiola (Main Meeting Room)');
    expect(name).toHaveClass('font-size-0-75em');
    expect(container.querySelector('[id="b2-$b4"]')).not.toBeNull();
    expect(container.querySelector('#b2-BottomBar #bottom-bar')).not.toBeNull();
    fireEvent.click(container.querySelector('.menu-icon-my-calendar') as HTMLElement);
    expect(props.onNavigateToMyCalendarAssemble).toHaveBeenCalledTimes(1);
    fireEvent.click(container.querySelector('.connect-icon-place') as HTMLElement);
    expect(props.onNavigateToAssembleLocationFilters).toHaveBeenCalledTimes(1);
  });

  it('another supper meeting after a back navigation: the large name, no "Assemble" and no icons', () => {
    const { container } = renderView({
      subdivisionName: 'Patagonia',
      showBackNavigation: true,
      isUserSubdivision: false,
    });
    expect(container.querySelector('#b2-DIV_Assemble')).toBeNull();
    const name = container.querySelector('#b2-DIV_SMName span');
    expect(name).toHaveTextContent('Patagonia');
    expect(name).not.toHaveClass('font-size-0-75em');
    expect(container.querySelector('.menu-icon-my-calendar')).toBeNull();
    expect(container.querySelector('.connect-icon-place')).toBeNull();
  });

  it('a back navigation to the own supper meeting keeps the small name', () => {
    const { container } = renderView({ showBackNavigation: true, isUserSubdivision: true });
    expect(container.querySelector('#b2-DIV_SMName span')).toHaveClass('font-size-0-75em');
  });
});
