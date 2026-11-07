import { render } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import type { Interchange } from '@/api/locality';
import type { EntityDetailsActionsContainerProps } from '@/containers/EntityDetailsActions/types';
import { Locality_Interchange } from './Locality_Interchange';

/* TST publish of 2026-10-29: Locality_Interchange gives its In_InterchangeLocalityId to
   Directory_Interchange_StatisticsList, which gives it as In_LocalityId to Directory_EntityDetailsActions (survey
   Directory_Interchange_StatisticsList.mvc.js:317-342), so the notes item id of an interchange is
   "<LocalityId>:<InterchangeLocalityId>". The actions menu and the list item are stubs; the props are recorded.
   Fictional ids and names. */
const actionsProps = vi.hoisted(() => [] as EntityDetailsActionsContainerProps[]);

vi.mock('@/containers/EntityDetailsActions/EntityDetailsActionsContainer', () => ({
  EntityDetailsActionsContainer: (props: EntityDetailsActionsContainerProps) => {
    actionsProps.push(props);
    return null;
  },
}));
vi.mock('@/components/directory/StatisticsListItem', () => ({
  StatisticsListItem: ({ actionsMenu }: { actionsMenu?: ReactNode }) => <div>{actionsMenu}</div>,
}));
vi.mock('@/pages/Locality_Details/hooks/useLocalityInterchange', () => ({
  useLocalityInterchange: () => ({
    interchangeList: [
      {
        interchangeLocalityId: '5',
        interchangeCountryName: 'New Zealand',
        isBookmarked: false,
        interchangeStatistics: { Title: 'Riverton Interchange' },
      } as unknown as Interchange,
    ],
    isLoading: false,
    onNavigateToLocality: vi.fn(),
  }),
}));

describe('Locality_Interchange', () => {
  it('gives its locality id down as the In_LocalityId of the actions menu of each interchange', () => {
    actionsProps.length = 0;
    render(<Locality_Interchange id="$b1" inInterchangeLocalityId="252" />);
    expect(actionsProps.at(-1)).toMatchObject({ entityId: '5', inLocalityId: '252' });
  });
});
