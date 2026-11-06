import { describe, expect, it } from 'vitest';
import { accommodationHostAnswer, gmpMilestoneHostAnswer } from './mocks';

/* DataActionGetAccommodationHost of the mock world: the capture of 2026-11-06 (migration/screens/MilestoneDetail/
   analysis/dom/default.html) shows six rooms, ten member cards and a "Guest Arrangements" link under each card; the
   capture plan opens the route with the ids of the TST account (event 2085, milestone GMP15700), which the mocks
   translate to the world's event 7301 / milestone 7301-1 (ORBIT_TST_ID_ALIASES). */
describe('MilestoneDetail mocks: GetAccommodationHost', () => {
  const rooms = (eventId: string, milestoneId: string) =>
    accommodationHostAnswer(eventId, milestoneId).Response.GetAccommodationHostResponse.Rooms.List;

  it('answers the ids of the capture plan with the hosted accommodation of the world', () => {
    const answer = accommodationHostAnswer('2085', 'GMP15700');
    expect(answer.HasData).toBe(true);
    expect(answer.Response.GetAccommodationHostResponse.EventDetails.Id).toBe('2085');
    expect(answer.Response.GetAccommodationHostResponse.EventDetails.Name).toBe(
      'Weekend Bible Conferences - Bahia and Azul',
    );
    expect(rooms('2085', 'GMP15700')).toEqual(rooms('7301', '7301-1'));
  });

  it('six rooms with ten guests, each with guest arrangements (the captured card counts 2 2 2 2 1 1)', () => {
    const members = rooms('7301', '7301-1').map((r) => r.Guests.List.flatMap((g) => g.MemberInformation.List));
    expect(members.map((m) => m.length)).toEqual([2, 2, 2, 2, 1, 1]);
    expect(members.flat().every((m) => m.HasGuestArrangements)).toBe(true);
  });

  it('a milestone that is not a hosted accommodation of the world: HasData false, empty lists', () => {
    const answer = accommodationHostAnswer('2085', 'GMP99999');
    expect(answer.HasData).toBe(false);
    expect(answer.Response.GetAccommodationHostResponse.Rooms.List).toEqual([]);
  });

  it('GetGmpMilestoneHost finds the milestone of the capture plan by its TST id', () => {
    expect(gmpMilestoneHostAnswer('GMP15700').Response).toMatchObject({
      MilestoneType: 'accommodation-host',
      MilestoneTitle: 'Accommodation',
      HostId: '990002',
      Status: { Success: true },
    });
  });
});
