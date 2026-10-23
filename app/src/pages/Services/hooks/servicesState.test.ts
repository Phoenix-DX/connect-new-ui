import { describe, expect, it } from 'vitest';
import type { CurrentService, Service } from '@/api/service';
import { action_ChangeOrderLocal, referenceServicesOf, type ServicesLists } from './servicesState';

/* Fictional services in the shape of the recorded answer. */
const service = (id: string, label: string, order: number, isMandatory = false): Service => ({
  id,
  label,
  order,
  isActive: true,
  iconId: `connect-icon-${id.toLowerCase()}`,
  isMandatory,
  startAsDefault: true,
});
const favourite = (s: Service, rowId: string, order: number): CurrentService => ({
  service: s,
  serviceUser: { id: rowId, connectServiceId: s.id, userId: 990001, order, lastChangedOn: null },
});

const orbit = service('Orbit', 'Orbit', 1, true);
const ldm = service('LDM', "Lord's Day Meal", 2, true);
const trove = service('Trove', 'Trove', 4);
const notes = service('MyNotes', 'My Notes', 6);
const harbour = service('Harbour', 'Harbour Bookings', 8);
const gusto = service('ElGusto', 'El Gusto', 9);

const lists: ServicesLists = {
  currentServices: [
    favourite(orbit, '601', 1),
    favourite(ldm, '602', 2),
    favourite(trove, '603', 3),
    favourite(notes, '604', 4),
  ],
  availableServices: [harbour, gusto],
};
const reference = referenceServicesOf(lists);
const USER = 990001;

const ids = (next: ServicesLists | null) => ({
  current: next?.currentServices.map((c) => [c.service.id, c.serviceUser.order]),
  available: next?.availableServices.map((s) => s.id),
});

describe('referenceServicesOf', () => {
  it('is AvailableServices, then the services of CurrentServices (OnAfterFetch_GetServices)', () => {
    expect(reference.map((s) => s.id)).toEqual(['Harbour', 'ElGusto', 'Orbit', 'LDM', 'Trove', 'MyNotes']);
  });

  it('is empty before the data action answers', () => {
    expect(referenceServicesOf(undefined)).toEqual([]);
  });
});

describe('action_ChangeOrderLocal', () => {
  it('changes nothing when NewOrder = OldOrder', () => {
    expect(action_ChangeOrderLocal(lists, reference, 2, 2, true, true, 'LDM', USER)).toBeNull();
  });

  it('removes a favourite (remove icon: OldOrder = its Order, NewOrder = -1): it goes to the top of the suggestions', () => {
    const next = action_ChangeOrderLocal(lists, reference, -1, 3, true, false, 'Trove', USER);
    expect(ids(next)).toEqual({
      current: [
        ['Orbit', 1],
        ['LDM', 2],
        ['MyNotes', 3],
      ],
      available: ['Trove', 'Harbour', 'ElGusto'],
    });
  });

  it('adds a suggestion (add icon: OldOrder = -1, NewOrder = count + 1): a new choice at the end of the favourites', () => {
    const next = action_ChangeOrderLocal(lists, reference, 5, -1, false, true, 'ElGusto', USER);
    expect(ids(next)).toEqual({
      current: [
        ['Orbit', 1],
        ['LDM', 2],
        ['Trove', 3],
        ['MyNotes', 4],
        ['ElGusto', 5],
      ],
      available: ['Harbour'],
    });
    expect(next?.currentServices[4]).toEqual({
      service: gusto,
      serviceUser: { id: null, connectServiceId: 'ElGusto', userId: USER, order: 5, lastChangedOn: null },
    });
  });

  it('adds the default service record when the service is not in ReferenceServices', () => {
    const next = action_ChangeOrderLocal(lists, reference, 5, -1, false, true, 'Lighthouse', USER);
    expect(next?.currentServices[4]?.service).toEqual(expect.objectContaining({ id: '', label: '', iconId: '' }));
    expect(next?.currentServices[4]?.serviceUser.connectServiceId).toBe('Lighthouse');
    expect(next?.availableServices).toEqual([harbour, gusto]);
  });

  it('keeps the original bug B3 of a drag in the favourites: the zero-based indexes are adjusted again', () => {
    // SortableJS gives OldIndex 3 and NewIndex 1 (zero-based) for a drag of "My Notes" to the second row
    const next = action_ChangeOrderLocal(lists, reference, 1, 3, true, true, 'MyNotes', USER);
    expect(next?.currentServices.map((c) => c.service.id)).toEqual(['MyNotes', 'Orbit', 'LDM', 'MyNotes']);
  });

  it('moves nothing when neither list is the favourites, and numbers the favourites again', () => {
    const next = action_ChangeOrderLocal(lists, reference, 1, 2, false, false, 'Trove', USER);
    expect(ids(next)).toEqual(ids(lists));
    expect(next).not.toBe(lists);
  });

  it('throws for a favourite that is not in the list, and for a wrong index', () => {
    expect(() => action_ChangeOrderLocal(lists, reference, -1, 1, true, false, 'Harbour', USER)).toThrow(
      'Index out of range',
    );
    expect(() => action_ChangeOrderLocal(lists, reference, -1, 0, true, false, 'Trove', USER)).toThrow(
      'Index out of range',
    );
    expect(() => action_ChangeOrderLocal(lists, reference, 7, -1, false, true, 'Harbour', USER)).toThrow(
      'Index out of range',
    );
  });

  it('does not change the lists that it gets', () => {
    const copy = structuredClone(lists);
    action_ChangeOrderLocal(lists, reference, 5, -1, false, true, 'Harbour', USER);
    action_ChangeOrderLocal(lists, reference, -1, 3, true, false, 'Trove', USER);
    expect(lists).toEqual(copy);
  });
});
