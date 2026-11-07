import { describe, expect, it } from 'vitest';
import {
  CARD_LOADED,
  communityBusinessCardLoaded,
  EMPTY_COMMUNITY_BUSINESS,
  householdCardLoaded,
  INITIAL_SHARE_OBJECT_STATE,
  shareObjectReducer,
  textToLongInteger,
} from './shareObjectState';

describe('shareObjectState', () => {
  it('OnInitialize: IsLoading, empty cards', () => {
    expect(INITIAL_SHARE_OBJECT_STATE).toEqual({
      isLoading: true,
      household: { name: '', description: '', tag: '' },
      communityBusiness: EMPTY_COMMUNITY_BUSINESS,
    });
  });

  it('a household card: the family names as the description and "Locality, Country" as the tag', () => {
    const patch = householdCardLoaded({
      name: 'Tomás & Lucía Ferreyra',
      familyNames: 'Mateo & Julieta',
      localityName: 'Rosario',
      countryName: 'Argentina',
    });
    expect(patch).toEqual({
      household: { name: 'Tomás & Lucía Ferreyra', description: 'Mateo & Julieta', tag: 'Rosario, Argentina' },
    });
  });

  it('a community business card: ", Country" after AreasServed only when the country is not empty', () => {
    const card = { ...EMPTY_COMMUNITY_BUSINESS, name: 'Campus&Co Rosario', areasServed: 'Rosario' };
    expect(communityBusinessCardLoaded({ ...card, countryName: 'Argentina' }).communityBusiness).toEqual({
      ...card,
      countryName: 'Argentina',
      areasServed: 'Rosario, Argentina',
    });
    expect(communityBusinessCardLoaded(card).communityBusiness?.areasServed).toBe('Rosario');
  });

  it('the reducer applies an assignment and keeps the other variables', () => {
    const loaded = shareObjectReducer(INITIAL_SHARE_OBJECT_STATE, CARD_LOADED);
    expect(loaded).toEqual({ ...INITIAL_SHARE_OBJECT_STATE, isLoading: false });
  });

  it('textToLongInteger: the integer value of the text, "0" when it is not an integer', () => {
    expect(textToLongInteger('42438')).toBe('42438');
    expect(textToLongInteger(' 17 ')).toBe('17');
    expect(textToLongInteger('+17')).toBe('17');
    expect(textToLongInteger('-5')).toBe('-5');
    expect(textToLongInteger('007')).toBe('7');
    expect(textToLongInteger('')).toBe('0');
    expect(textToLongInteger('12a')).toBe('0');
    expect(textToLongInteger('1.5')).toBe('0');
  });
});
