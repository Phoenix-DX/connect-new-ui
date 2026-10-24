/* Highlight_V3 (JS node of HighlightSearch OnReady, HighlightSearch.mvc.js) as a pure function: the text split into
   plain and highlighted parts, in the order the original appends its <span> elements. */
export interface HighlightPart {
  text: string;
  highlighted: boolean;
}

interface Match {
  start: number;
  end: number;
  text: string;
}

const normalizeText = (text: string) => text.normalize('NFD').replace(/[̀-ͯ]/g, '');

export function highlight_V3(
  text: string,
  searchTerms: string,
  stopWords: string,
  useWordbound: boolean,
): HighlightPart[] {
  let wordsPattern = '';
  if (searchTerms) {
    if (searchTerms.length > 1) {
      const stopWordsRegex = new RegExp(' (' + stopWords.replace(/\s+/g, '|') + ') ', 'gi');
      wordsPattern = searchTerms
        .replace(stopWordsRegex, ' ')
        .replace(/( )+/g, '|')
        .replace(/(^\|)|(\|$)/g, '');
    } else {
      wordsPattern = searchTerms;
    }
  }
  if (!wordsPattern) return [{ text, highlighted: false }];

  wordsPattern =
    '(' +
    wordsPattern
      .split('|')
      .sort((a, b) => b.length - a.length)
      .join('|') +
    ')';
  const wordBoundary = useWordbound ? '\\b' : '';
  const exactRegex = new RegExp(wordBoundary + wordsPattern + wordBoundary, 'gi');
  const normalizedRegex = new RegExp(wordBoundary + normalizeText(wordsPattern) + wordBoundary, 'gi');

  const matches: Match[] = [];
  for (let match = exactRegex.exec(text); match; match = exactRegex.exec(text)) {
    matches.push({ start: match.index, end: match.index + match[0].length, text: match[0] });
    if (match[0] === '') exactRegex.lastIndex++; // the original loops forever on an empty match
  }
  if (matches.length === 0) {
    const match = normalizedRegex.exec(normalizeText(text)); // only the first normalized match
    if (match)
      matches.push({
        start: match.index,
        end: match.index + match[0].length,
        text: text.slice(match.index, match.index + match[0].length),
      });
  }
  matches.sort((a, b) => a.start - b.start);

  const parts: HighlightPart[] = [];
  let lastIndex = 0;
  for (const match of matches) {
    if (lastIndex < match.start) parts.push({ text: text.substring(lastIndex, match.start), highlighted: false });
    parts.push({ text: match.text, highlighted: true });
    lastIndex = match.end;
  }
  if (lastIndex < text.length) parts.push({ text: text.substring(lastIndex), highlighted: false });
  return parts;
}
