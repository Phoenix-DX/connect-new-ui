import { describe, expect, it } from 'vitest';
import type { CurrentService, Service } from '@/api/service';
import {
  action_ChangeOrderLocal,
  referenceServicesOf,
  type ChangeOrderVariables,
  type ServicesLists,
} from './servicesState';

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

const ids = (next: ServicesLists) => ({
  current: next.currentServices.map((c) => [c.service.id, c.serviceUser.order]),
  available: next.availableServices.map((s) => s.id),
});

/** Copies of the lists, as the screen gives them to the action, with HasChanges False. */
const variablesOf = (from: ServicesLists): ChangeOrderVariables => ({
  currentServices: [...from.currentServices],
  availableServices: [...from.availableServices],
  hasChanges: false,
});

/** NewOrder, OldOrder, isFromFavoriteList, isToFavoriteList, ItemId, UserId. */
type ChangeArgs = [number, number, boolean, boolean, string, number];

/** Action_ChangeOrderLocal on copies of `lists`: the variables after the action. */
function change(...args: ChangeArgs) {
  const variables = variablesOf(lists);
  action_ChangeOrderLocal(variables, reference, ...args);
  return variables;
}

/** Action_ChangeOrderLocal on copies of `lists` when a List action fails: the error and the variables after it. */
function failedChange(...args: ChangeArgs) {
  const variables = variablesOf(lists);
  let error: unknown = null;
  try {
    action_ChangeOrderLocal(variables, reference, ...args);
  } catch (e) {
    error = e;
  }
  return { error, variables };
}

describe('referenceServicesOf', () => {
  it('is AvailableServices, then the services of CurrentServices (OnAfterFetch_GetServices)', () => {
    expect(reference.map((s) => s.id)).toEqual(['Harbour', 'ElGusto', 'Orbit', 'LDM', 'Trove', 'MyNotes']);
  });

  it('is empty before the data action answers', () => {
    expect(referenceServicesOf(undefined)).toEqual([]);
  });
});

describe('action_ChangeOrderLocal', () => {
  it('changes nothing when NewOrder = OldOrder: HasChanges stays False', () => {
    const variables = change(2, 2, true, true, 'LDM', USER);
    expect(variables).toEqual(variablesOf(lists));
  });

  it('removes a favourite (remove icon: OldOrder = its Order, NewOrder = -1): it goes to the top of the suggestions', () => {
    const variables = change(-1, 3, true, false, 'Trove', USER);
    expect(ids(variables)).toEqual({
      current: [
        ['Orbit', 1],
        ['LDM', 2],
        ['MyNotes', 3],
      ],
      available: ['Trove', 'Harbour', 'ElGusto'],
    });
    expect(variables.hasChanges).toBe(true);
  });

  it('adds a suggestion (add icon: OldOrder = -1, NewOrder = count + 1): a new choice at the end of the favourites', () => {
    const variables = change(5, -1, false, true, 'ElGusto', USER);
    expect(ids(variables)).toEqual({
      current: [
        ['Orbit', 1],
        ['LDM', 2],
        ['Trove', 3],
        ['MyNotes', 4],
        ['ElGusto', 5],
      ],
      available: ['Harbour'],
    });
    expect(variables.currentServices[4]).toEqual({
      service: gusto,
      serviceUser: { id: null, connectServiceId: 'ElGusto', userId: USER, order: 5, lastChangedOn: null },
    });
  });

  it('adds the default service record when the service is not in ReferenceServices', () => {
    const variables = change(5, -1, false, true, 'Lighthouse', USER);
    expect(variables.currentServices[4]?.service).toEqual(expect.objectContaining({ id: '', label: '', iconId: '' }));
    expect(variables.currentServices[4]?.serviceUser.connectServiceId).toBe('Lighthouse');
    expect(variables.availableServices).toEqual([harbour, gusto]);
  });

  it('keeps the original bug B3 of a drag in the favourites: the zero-based indexes are adjusted again', () => {
    // SortableJS gives OldIndex 3 and NewIndex 1 (zero-based) for a drag of "My Notes" to the second row
    const variables = change(1, 3, true, true, 'MyNotes', USER);
    expect(variables.currentServices.map((c) => c.service.id)).toEqual(['MyNotes', 'Orbit', 'LDM', 'MyNotes']);
  });

  it('moves nothing when neither list is the favourites, and numbers the favourites again', () => {
    const variables = change(1, 2, false, false, 'Trove', USER);
    expect(ids(variables)).toEqual(ids(lists));
    expect(variables.hasChanges).toBe(true);
  });

  it('B3, a touch drag to the top (NewOrder 0 - 1): ListRemove2 runs, ListInsert2 fails; the removal and HasChanges stay', () => {
    // SortableJS gives OldIndex 3 and NewIndex 0 (zero-based) for a drag of "My Notes" to the first row
    const { error, variables } = failedChange(0, 3, true, true, 'MyNotes', USER);
    expect(error).toEqual(new Error('Index out of bounds. Index -1 for bounds [0, 2].'));
    expect(variables.hasChanges).toBe(true);
    // The row at OldOrder - 1 = 2 is gone; the Orders are not numbered again (the Foreach does not run)
    expect(ids(variables)).toEqual({
      current: [
        ['Orbit', 1],
        ['LDM', 2],
        ['MyNotes', 4],
      ],
      available: ['Harbour', 'ElGusto'],
    });
  });

  it('raises the text of the runtime List.checkIndex for a wrong index, after HasChanges = True', () => {
    // GetCurrentService finds no favourite: GetServices.CurrentServices[-1]
    expect(failedChange(-1, 1, true, false, 'Harbour', USER)).toEqual({
      error: new Error('Index out of bounds. Index -1 for bounds [0, 3].'),
      variables: { ...variablesOf(lists), hasChanges: true },
    });
    // ListRemove at OldOrder - 1 = -1
    expect(failedChange(-1, 0, true, false, 'Trove', USER).error).toEqual(
      new Error('Index out of bounds. Index -1 for bounds [0, 3].'),
    );
    // ListInsert2 at NewOrder - 1 = 6 of 4 favourites (the end is 4): ListRemove3 ran before it
    const { error, variables } = failedChange(7, -1, false, true, 'Harbour', USER);
    expect(error).toEqual(new Error('Index out of bounds. Index 6 for bounds [0, 3].'));
    expect(ids(variables)).toEqual({ current: ids(lists).current, available: ['ElGusto'] });
  });

  it('raises "for empty list." for an index of an empty list', () => {
    const variables: ChangeOrderVariables = { currentServices: [], availableServices: [harbour], hasChanges: false };
    expect(() => {
      action_ChangeOrderLocal(variables, reference, -1, 1, true, false, 'Trove', USER);
    }).toThrow(new Error('Index out of bounds. Index -1 for empty list.'));
    expect(variables.hasChanges).toBe(true);
  });

  it('changes only the copies that it gets, not the lists of the screen', () => {
    const copy = structuredClone(lists);
    change(5, -1, false, true, 'Harbour', USER);
    change(-1, 3, true, false, 'Trove', USER);
    failedChange(0, 3, true, true, 'MyNotes', USER);
    expect(lists).toEqual(copy);
  });
});
