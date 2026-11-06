import { formatDateTime } from '@/lib/osDateTime';
import { PlaceholderFunction } from './staticEntities';

/* PlaceholderLib, the module that BuildAssembleNotificationContent calls (TST PlaceholderLib.controller.js = PL and
   PlaceholderLib.model.js, fetched read-only 2026-10-27 and 2026-10-28, migration/knowledge/runtime-sources.md).
   Decision PD8 (user, 2026-10-28): a 1:1 port, defects included. SetTextPlaceholdersValue has no stop condition other
   than "no placeholder found": known-original-bugs.md B19. */

/** PlaceholderRec (PlaceholderLib.model.js:8-16). */
interface PlaceholderRec {
  PlaceholderFunctionId: string;
  Parameters: string;
}

/** PlaceholderParametersRec (PlaceholderLib.model.js:215-224). */
interface PlaceholderParametersRec {
  Parameter1: string;
  Parameter2: string;
}

/** The outputs of Regex_Search. */
interface RegexSearchResult {
  Found: boolean;
  PatternResult: string;
  FirstIndex: number;
}

/** OutSystems Replace: every occurrence of the search text. */
const replaceAll = (text: string, search: string, replacement: string): string => text.split(search).join(replacement);

/** Regex_Search(Text, Pattern) and its JavaScript node RegExSearchJS (PL :244-395): a global RegExp of the pattern;
    PatternResult is the first match, FirstIndex its position (-1 when not found). */
export function regex_Search(text: string, pattern: string): RegexSearchResult {
  const regex = new RegExp(pattern, 'g');
  const matches = text.match(regex);
  const found = matches !== null;
  return {
    Found: found,
    PatternResult: matches?.[0] ?? '',
    FirstIndex: found ? text.search(regex) : -1,
  };
}

/** JSONDeserialize of a PlaceholderParametersRec (OutSystems.js JSONUtils deserializeFromJSON and parseJSON): "" gives
    the default record; other text is read leniently (numbers and unquoted keys are quoted) and then JSON.parse runs;
    a parse error throws "Failed to deserialize JSON to ...". */
function deserializePlaceholderParameters(json: string): PlaceholderParametersRec {
  const rec: PlaceholderParametersRec = { Parameter1: '', Parameter2: '' };
  if (json === '') return rec;
  let data: unknown;
  try {
    const lenient = json.replace(
      /(?:"([^\\"]|\\.)*")|(?:'([^\\']|\\.)*')|(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(\w+)\s*:/g,
      (match: string, _d: unknown, single: string | undefined, num: string | undefined, key: string | undefined) => {
        if (num !== undefined) return `"${num}"`;
        if (single !== undefined) return `"${match.substring(1, match.length - 1)}"`;
        if (key !== undefined) return `"${key}":`;
        return match;
      },
    );
    data = JSON.parse(lenient);
  } catch (error) {
    throw new Error(
      `Failed to deserialize JSON to PlaceholderParametersRec: ${error instanceof Error ? error.message : String(error)}`,
      { cause: error },
    );
  }
  if (typeof data === 'object' && data !== null) {
    const values = data as Record<string, unknown>;
    for (const attribute of ['Parameter1', 'Parameter2'] as const) {
      const value = values[attribute];
      if (typeof value === 'string') rec[attribute] = value;
    }
  }
  return rec;
}

/** GetLocalDatePlaceholderFunction_Value(Placeholder) (PL :1-61): FormatDateTime(TextToDateTime(Parameter1),
    Parameter2) of the deserialized Parameters. */
function getLocalDatePlaceholderFunction_Value(placeholder: PlaceholderRec): string {
  const parameters = deserializePlaceholderParameters(placeholder.Parameters);
  return formatDateTime(parameters.Parameter1, parameters.Parameter2);
}

/** GetTargetNamePlaceholderFunction_Value(Placeholder) (PL :183-243): Parameter1 of the deserialized Parameters. */
function getTargetNamePlaceholderFunction_Value(placeholder: PlaceholderRec): string {
  return deserializePlaceholderParameters(placeholder.Parameters).Parameter1;
}

/** GetPlaceholderValue(Placeholder, FromClientApp_Name) (PL :62-182): LocalDate gives the formatted date; FirstName
    serializes {Parameter1: FromClientApp_Name} and reads Parameter1 back; any other function gives "". */
export function getPlaceholderValue(placeholder: PlaceholderRec, fromClientApp_Name: string): string {
  if (placeholder.PlaceholderFunctionId === PlaceholderFunction.LocalDateTime) {
    return getLocalDatePlaceholderFunction_Value(placeholder);
  }
  if (placeholder.PlaceholderFunctionId === PlaceholderFunction.FirstName) {
    const inputPlaceholderParameters: PlaceholderParametersRec = { Parameter1: fromClientApp_Name, Parameter2: '' };
    return getTargetNamePlaceholderFunction_Value({
      PlaceholderFunctionId: placeholder.PlaceholderFunctionId,
      Parameters: JSON.stringify(inputPlaceholderParameters),
    });
  }
  return '';
}

/** The inputs of SetTextPlaceholdersValue. */
interface SetTextPlaceholdersValueInputs {
  text: string;
  delimiterPlaceholder: string;
  delimiterFunction: string;
  delimiterParameter: string;
  fromClientApp_Name: string;
}

/** SetTextPlaceholdersValue(Text, Delimiter_Placeholder, Delimiter_Function, Delimiter_Parameter, FromClientApp_Name)
    (PL :396-498). When a placeholder is found, it searches the whole text for the first function and the first
    parameters; when both are found and GetPlaceholderValue is not "", the placeholder is replaced by the value. Then it
    calls itself again with the text, on every path (PL :479). A text whose first placeholder gives no value (no
    function, no parameters, an unknown function, an empty name, or empty delimiters) never changes, so the recursion
    does not end: a stack overflow (RangeError, or the JSONDeserialize error that wraps it), as on TST (B19). The delimiters go into the RegExp as they are. */
export function setTextPlaceholdersValue(inputs: SetTextPlaceholdersValueInputs): string {
  const { delimiterPlaceholder, delimiterFunction, delimiterParameter, fromClientApp_Name } = inputs;
  let processedText = inputs.text;
  const placeholder = regex_Search(processedText, `${delimiterPlaceholder}(.*?)${delimiterPlaceholder}`);
  if (!placeholder.Found) return processedText;
  const fn = regex_Search(processedText, `${delimiterFunction}(.*?)${delimiterFunction}`);
  if (fn.Found) {
    const functionId = replaceAll(fn.PatternResult, delimiterFunction, '');
    const parameters = regex_Search(processedText, `${delimiterParameter}(.*?)${delimiterParameter}`);
    if (parameters.Found) {
      const value = getPlaceholderValue(
        { PlaceholderFunctionId: functionId, Parameters: replaceAll(parameters.PatternResult, delimiterParameter, '') },
        fromClientApp_Name,
      );
      processedText =
        value === ''
          ? processedText
          : processedText.substring(0, placeholder.FirstIndex) +
            value +
            processedText.substring(placeholder.FirstIndex + placeholder.PatternResult.length);
    }
  }
  return setTextPlaceholdersValue({ ...inputs, text: processedText });
}
