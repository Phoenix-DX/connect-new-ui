// @os-block Connect2_LegacyShared.Directory.HighlightSearch
import { OSBlock } from '@/components/ui/os/OSBlock';
import { removeRegexSpecialCharacters } from '@/shared/UBTConnectLibrary/lib/actions';

export interface HighlightSearchProps {
  /** OutSystems instance id of the block (`<prefix>-$b3`); the container is `<prefix>-b3-Contents`. */
  id: string;
  text?: string;
  searchTerms?: string;
  /** StopWords: an input the compiled flow never reads. */
  stopWords?: string;
  isWordbound?: boolean;
}

interface Part {
  text: string;
  mark: boolean;
}

const normalizeText = (text: string) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const escapeRegex = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Highlight JS node (Connect2_LegacyShared.Directory.HighlightSearch.mvc.js controller.OnReady.HighlightJS
    :325-409, OnReady :223-245): every space-separated term is matched (case-insensitive, word bound when asked) in the text, else in the
    accent-free text; matches are sorted and overlapping ones merged; the text is written as text nodes with the
    matches in `<mark>`. Returned as parts instead of rewriting the DOM. */
export function highlightParts(searchText: string, searchTerms: string, useWordbound: boolean): Part[] {
  const terms = searchTerms ? searchTerms.split(' ') : [];
  const wordBoundary = useWordbound ? '\\b' : '';
  const matches: { start: number; end: number }[] = [];
  for (const term of terms) {
    if (!term) continue;
    const exactRegex = new RegExp(wordBoundary + escapeRegex(term) + wordBoundary, 'gi');
    let found = false;
    for (let m = exactRegex.exec(searchText); m; m = exactRegex.exec(searchText)) {
      matches.push({ start: m.index, end: m.index + m[0].length });
      found = true;
    }
    if (!found) {
      const normRegex = new RegExp(wordBoundary + escapeRegex(normalizeText(term)) + wordBoundary, 'gi');
      const normText = normalizeText(searchText);
      for (let m = normRegex.exec(normText); m; m = normRegex.exec(normText)) {
        matches.push({ start: m.index, end: m.index + m[0].length });
      }
    }
  }
  matches.sort((a, b) => a.start - b.start);
  const merged: { start: number; end: number }[] = [];
  for (const curr of matches) {
    const last = merged[merged.length - 1];
    if (!last || curr.start > last.end) merged.push({ ...curr });
    else last.end = Math.max(last.end, curr.end);
  }
  const parts: Part[] = [];
  let last = 0;
  for (const m of merged) {
    if (last < m.start) parts.push({ text: searchText.substring(last, m.start), mark: false });
    parts.push({ text: searchText.substring(m.start, m.end), mark: true });
    last = m.end;
  }
  if (last < searchText.length) parts.push({ text: searchText.substring(last), mark: false });
  return parts;
}

/** Directory.HighlightSearch (view :168-190): container "Contents" (`display: inline;`) whose content the OnReady /
    OnParametersChanged Highlight node writes from Text and RemoveRegexSpecialCharacters(SearchTerms)
    (Connect2_LegacyShared.controller.js:6859-6864, same expression as the UBTConnectLibrary port). */
export function HighlightSearch({ id, text = '', searchTerms = '', isWordbound = false }: HighlightSearchProps) {
  const scope = id.replace('$', '');
  const parts = highlightParts(text, removeRegexSpecialCharacters(searchTerms), isWordbound);
  return (
    <OSBlock name="Directory.HighlightSearch" id={id}>
      <div data-container="" id={`${scope}-Contents`} style={{ display: 'inline' }}>
        {parts.map((part, index) => (part.mark ? <mark key={index}>{part.text}</mark> : part.text))}
      </div>
    </OSBlock>
  );
}
