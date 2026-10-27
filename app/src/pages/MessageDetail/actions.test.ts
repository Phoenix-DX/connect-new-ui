import { describe, expect, it } from 'vitest';
import {
  assembleEventParameters,
  deserializeAdaptiveCardActionSubmitData,
  getConnectEntity_ByShareType,
  substringJS,
  VIEW_EVENT_DATA_END,
  VIEW_EVENT_DATA_START,
} from './actions';
import { textToLongInteger } from './hooks/messageDetailState';
import { ParameterName } from './staticEntities';

const param = (parameterNameId: number, parameterValue: string) => ({
  id: '1',
  messageTemplateId: '31',
  parameterNameId,
  parameterValue,
  tenantId: 1,
});

describe('the client actions of the message detail', () => {
  it('AdaptiveCardActionSubmitData reads the JSON names id, submitType and eventId', () => {
    expect(deserializeAdaptiveCardActionSubmitData('{"submitType":"view_event","eventId":5520,"id":"880"}')).toEqual({
      eventHostId: '880',
      submitType: 'view_event',
      eventId: '5520',
    });
    expect(deserializeAdaptiveCardActionSubmitData('')).toEqual({ eventHostId: '0', submitType: '', eventId: '0' });
    expect(() => deserializeAdaptiveCardActionSubmitData('{oops')).toThrow();
  });

  it('SubstringJS takes the data of the "View Event" action from the card', () => {
    const card =
      '{"actions":[{"type":"Action.Submit","title":"View Event","data":{"eventId":5520,"id":880},"style":"positive"}],"spacing":"medium"}';
    expect(substringJS(VIEW_EVENT_DATA_START, VIEW_EVENT_DATA_END, card)).toBe('{"eventId":5520,"id":880}');
  });

  it('OnClick_ViewAssembleEvent needs the parent and the instance ids; the type may be missing', () => {
    const parent = param(ParameterName.AssembleEventParentId, '4410');
    const instance = param(ParameterName.AssembleEventInstanceId, '4412');
    expect(
      assembleEventParameters([parent, instance, param(ParameterName.AssembleEventType, 'Bible Reading')]),
    ).toEqual({
      eventParentId: '4410',
      eventInstanceId: '4412',
      eventTypeTitle: 'Bible Reading',
    });
    expect(assembleEventParameters([parent, instance])?.eventTypeTitle).toBe('');
    expect(assembleEventParameters([parent])).toBeNull();
  });

  it('GetConnectEntity_ByShareType and TextToLongInteger', () => {
    expect(getConnectEntity_ByShareType('My Household')).toBe('Household');
    expect(getConnectEntity_ByShareType('Supper Meeting')).toBe('Supper Meetings');
    expect(getConnectEntity_ByShareType('Feed')).toBe('Feed Item');
    expect(getConnectEntity_ByShareType('Update')).toBe('');
    expect(textToLongInteger(' 7301 ')).toBe('7301');
    expect(textToLongInteger('M-7714')).toBe('0');
  });
});
