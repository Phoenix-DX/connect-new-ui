import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import type { EventBookletMember } from '@/api/event';
import { EventBooklet_MembersItem } from './EventBooklet_MembersItem';

/* EventBooklet_MembersItem: the two clickable Containers of the row (MI view, K028). A fictional member. */

const MEMBER: EventBookletMember = {
  MemberId: '1',
  HouseholderId: '10',
  Title: 'Mr',
  FirstName: 'Tomás',
  LastName: 'Herrera',
  Age: '40',
  Phone: '',
  IsHouseholder: true,
  Country: 'Argentina',
  CountryCode: 'AR',
  Locality: 'Necochea',
  LocalityId: '601',
  IsHostLocality: false,
  Host: 'Mr Julián & Mrs Fiorella Vitale',
  HostHouseholderId: '880100',
  Days: ['2026-11-06'],
  Role: '',
  OrderNo: '1',
};

describe('EventBooklet_MembersItem', () => {
  it('the name cell and the host cell have the inline style cursor: pointer of a Container with an OnClick', () => {
    const { container } = render(<EventBooklet_MembersItem memberItem={MEMBER} />);
    const title = container.querySelector<HTMLElement>('.orbit-booklet-list-members-title');
    const host = container.querySelector<HTMLElement>('.orbit-booklet-list-members-host');
    const days = container.querySelector<HTMLElement>('.orbit-booklet-list-members-days');
    expect(title?.getAttribute('style')).toBe('cursor: pointer;');
    expect(host?.getAttribute('style')).toBe('cursor: pointer;');
    expect(days?.getAttribute('style')).toBeNull();
  });

  it('a click on the name raises Click_Member and a click on the host raises Click_Host', () => {
    const onClickMember = vi.fn();
    const onClickHost = vi.fn();
    const { container } = render(
      <EventBooklet_MembersItem memberItem={MEMBER} onClickMember={onClickMember} onClickHost={onClickHost} />,
    );
    const title = container.querySelector('.orbit-booklet-list-members-title');
    const host = container.querySelector('.orbit-booklet-list-members-host');
    if (!title || !host) throw new Error('no clickable cell');
    fireEvent.click(title);
    fireEvent.click(host);
    expect(onClickMember).toHaveBeenCalledTimes(1);
    expect(onClickHost).toHaveBeenCalledTimes(1);
  });
});
