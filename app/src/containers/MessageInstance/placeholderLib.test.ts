import { describe, expect, it } from 'vitest';
import { getPlaceholderValue, regex_Search, setTextPlaceholdersValue } from './placeholderLib';

const DELIMITERS = { delimiterPlaceholder: '##', delimiterFunction: '@@', delimiterParameter: '%%' };

describe('PlaceholderLib (TST PlaceholderLib.controller.js, decision PD8)', () => {
  it('Regex_Search gives the first match and its index, or -1 and "" (RegExSearchJS :373-395)', () => {
    expect(regex_Search('a ##x## b ##y##', '##(.*?)##')).toEqual({
      Found: true,
      PatternResult: '##x##',
      FirstIndex: 2,
    });
    expect(regex_Search('no placeholder', '##(.*?)##')).toEqual({ Found: false, PatternResult: '', FirstIndex: -1 });
  });

  it('GetPlaceholderValue: FirstName gives FromClientApp_Name, LocalDate formats Parameter1, others give ""', () => {
    expect(getPlaceholderValue({ PlaceholderFunctionId: 'FirstName', Parameters: '' }, 'Miriam')).toBe('Miriam');
    expect(
      getPlaceholderValue(
        {
          PlaceholderFunctionId: 'LocalDate',
          Parameters: '{"Parameter1":"2026-11-08T19:30:00","Parameter2":"dd MMM yyyy"}',
        },
        '',
      ),
    ).toBe('08 Nov 2026');
    expect(getPlaceholderValue({ PlaceholderFunctionId: 'Unknown', Parameters: '' }, 'Miriam')).toBe('');
  });

  it('replaces each placeholder in turn and stops when none is left', () => {
    const text =
      '<p>Dear ##@@FirstName@@%%%%##, the meeting is on ##@@LocalDate@@%%{"Parameter1":"2026-11-08T19:30:00","Parameter2":"dddd d MMMM"}%%##.</p>';
    expect(setTextPlaceholdersValue({ ...DELIMITERS, text, fromClientApp_Name: 'Miriam' })).toBe(
      '<p>Dear Miriam, the meeting is on ##@@LocalDate@@%%{"Parameter1":"2026-11-08T19:30:00","Parameter2":"dddd d MMMM"}%%##.</p>'.replace(
        /##@@LocalDate@@%%.*%%##/,
        'Sunday 8 November',
      ),
    );
  });

  it('keeps a text without placeholders', () => {
    const text = '<p>The meeting now starts at 7:30 pm.</p>';
    expect(setTextPlaceholdersValue({ ...DELIMITERS, text, fromClientApp_Name: 'Miriam' })).toBe(text);
  });

  it('recurses for ever when the first placeholder gives no value, as on TST (known-original-bugs B19)', () => {
    // Empty delimiters: "(.*?)" always matches and the function id "" has no value.
    expect(() =>
      setTextPlaceholdersValue({
        text: '<p>Any text</p>',
        delimiterPlaceholder: '',
        delimiterFunction: '',
        delimiterParameter: '',
        fromClientApp_Name: 'Miriam',
      }),
    ).toThrow(/Maximum call stack size exceeded/);
    // An empty first name (the overflow can hit inside JSONDeserialize, which wraps it, as OutSystems.js does).
    expect(() =>
      setTextPlaceholdersValue({ ...DELIMITERS, text: 'Dear ##@@FirstName@@%%%%##', fromClientApp_Name: '' }),
    ).toThrow(/Maximum call stack size exceeded/);
  });
});
