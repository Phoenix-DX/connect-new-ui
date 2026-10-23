import { describe, expect, it } from 'vitest';
import {
  fromCurrentService,
  toChangeServicesOrderInputs,
  toCurrentService,
  toUserServices,
  type CurrentServiceWire,
  type ServiceWire,
} from './mapper';

/** A fictional service as the server sends it: every field. */
const serviceWire = (id: string, label: string, order: number, isMandatory = false): ServiceWire => ({
  Id: id,
  Label: label,
  Order: order,
  Is_Active: true,
  IconId: `connect-icon-${id.toLowerCase()}`,
  isMandatory,
  StartAsDefault: false,
});

const currentWire = (id: string, userRowId: string, order: number, lastChangedOn: string): CurrentServiceWire => ({
  Connect_Services: serviceWire(id, `${id} label`, order + 10),
  Connect_Service_User: {
    Id: userRowId,
    ConnectServiceId: id,
    UserId: 990001,
    Order: order,
    LastChangedOn: lastChangedOn,
  },
});

describe('service mapper', () => {
  it('toUserServices keeps the two lists in the server order with every field', () => {
    const services = toUserServices({
      AvailableServices: { List: [serviceWire('Atlas', 'Atlas Maps', 8), serviceWire('Harbour', 'Harbour', 9)] },
      CurrentServices: { List: [currentWire('Orbit', '601', 1, '2026-09-30T08:15:00')] },
    });
    expect(services.availableServices).toEqual([
      {
        id: 'Atlas',
        label: 'Atlas Maps',
        order: 8,
        isActive: true,
        iconId: 'connect-icon-atlas',
        isMandatory: false,
        startAsDefault: false,
      },
      expect.objectContaining({ id: 'Harbour', order: 9 }),
    ]);
    expect(services.currentServices).toHaveLength(1);
    expect(services.currentServices[0]?.service).toEqual(
      expect.objectContaining({ id: 'Orbit', label: 'Orbit label', order: 11 }),
    );
    expect(services.currentServices[0]?.serviceUser).toEqual({
      id: '601',
      connectServiceId: 'Orbit',
      userId: 990001,
      order: 1,
      lastChangedOn: '2026-09-30T08:15:00',
    });
  });

  it('toUserServices answers two empty lists for an empty answer', () => {
    expect(toUserServices({ AvailableServices: { List: [] }, CurrentServices: { List: [] } })).toEqual({
      availableServices: [],
      currentServices: [],
    });
  });

  it('toCurrentService reads the NullIdentifier ("0" or "") and the null date as null', () => {
    expect(toCurrentService(currentWire('Trove', '0', 2, '1900-01-01T00:00:00')).serviceUser).toEqual(
      expect.objectContaining({ id: null, lastChangedOn: null }),
    );
    expect(toCurrentService(currentWire('Trove', '', 2, '')).serviceUser.id).toBeNull();
  });

  it('fromCurrentService sends a new choice with Id "0" and the null date', () => {
    const wire = fromCurrentService({
      service: toCurrentService(currentWire('Trove', '0', 3, '')).service,
      serviceUser: { id: null, connectServiceId: 'Trove', userId: 990001, order: 3, lastChangedOn: null },
    });
    expect(wire.Connect_Service_User).toEqual({
      Id: '0',
      ConnectServiceId: 'Trove',
      UserId: 990001,
      Order: 3,
      LastChangedOn: '1900-01-01T00:00:00',
    });
  });

  it('a recorded row goes back to the server unchanged, with the keys in the wire order', () => {
    const row = currentWire('Orbit', '601', 1, '2026-09-30T08:15:00');
    const back = fromCurrentService(toCurrentService(row));
    expect(back).toEqual(row);
    expect(Object.keys(back.Connect_Services)).toEqual([
      'Id',
      'Label',
      'Order',
      'Is_Active',
      'IconId',
      'isMandatory',
      'StartAsDefault',
    ]);
    expect(Object.keys(back.Connect_Service_User)).toEqual([
      'Id',
      'ConnectServiceId',
      'UserId',
      'Order',
      'LastChangedOn',
    ]);
  });

  it('toChangeServicesOrderInputs wraps the whole list of favourites', () => {
    const rows = [currentWire('Orbit', '601', 1, '1900-01-01T00:00:00'), currentWire('Trove', '0', 2, '')];
    const inputs = toChangeServicesOrderInputs(rows.map(toCurrentService));
    expect(inputs.CurrentServices.List.map((r) => [r.Connect_Services.Id, r.Connect_Service_User.Id])).toEqual([
      ['Orbit', '601'],
      ['Trove', '0'],
    ]);
    expect(inputs.CurrentServices.List[1]?.Connect_Service_User.LastChangedOn).toBe('1900-01-01T00:00:00');
  });
});
