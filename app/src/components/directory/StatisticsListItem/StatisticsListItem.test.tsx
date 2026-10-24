import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import { UBT_Color, UBT_Icons } from '@/lib/ubtConnectLibrary/staticEntities';
import { StatisticsListItem } from './StatisticsListItem';
import * as stories from './StatisticsListItem.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('Statistics_ListItem', () => {
  testCapturedVariants(stories, captures);
  it('icon statistics, hidden border, actions menu (not captured); click raises Event_Clicked', () => {
    const onClick = vi.fn();
    const { container, getByText } = render(
      <StatisticsListItem
        inHideBorder
        inHasActionsMenu
        actionsMenu={<span>menu</span>}
        inStatisticsOptions={{
          Title: 'T',
          Statistics: [{ Name: 'Brethren', Value: '3', IconId: UBT_Icons.PersonFill, IconColorId: UBT_Color.Purple }],
        }}
        onEventClicked={onClick}
      />,
    );
    expect(container.querySelector('.ubt-statistics-item')).toHaveClass('border-none');
    expect(container.querySelector('[data-block="ConnectPatterns.IconText"] .connect-icon-person-fill')).not.toBeNull();
    expect(container.querySelector('.ubt-statistics-action-menu')).toHaveTextContent('menu');
    fireEvent.click(getByText('T'));
    expect(onClick).toHaveBeenCalled();
  });
});
