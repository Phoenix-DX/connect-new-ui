/** @origin UBTConnectLibrary.ConnectPatterns.HighlightSearch */
// @os-block UBTConnectLibrary.ConnectPatterns.HighlightSearch
import { OSBlock } from '@/components/ui/os/OSBlock';
import { IconInline } from '@/components/ui/IconInline';
import { removeRegexSpecialCharacters } from '@/shared/UBTConnectLibrary/lib/actions';
import { highlight_V3 } from './highlight';
import type { InlineIcon } from './types';

export interface HighlightSearchProps {
  /** OutSystems instance id of the block. */
  id?: string;
  text?: string;
  searchTerms?: string;
  /** Space-separated words never highlighted. */
  stopWords?: string;
  isWordbound?: boolean;
  /** Classes of the highlighted parts. */
  highlightClasses?: string;
  inlineIcon?: InlineIcon;
}

const MAIN_CONTAINER_CLASS = 'highlight-search';

export function HighlightSearch({
  id,
  text = '',
  searchTerms = '',
  stopWords = '',
  isWordbound = false,
  highlightClasses = '',
  inlineIcon,
}: HighlightSearchProps) {
  const parts = highlight_V3(text, removeRegexSpecialCharacters(searchTerms), stopWords, isWordbound);
  const markClasses = highlightClasses.trim().split(/\s+/).filter(Boolean).join(' ') || undefined;
  return (
    <OSBlock name="ConnectPatterns.HighlightSearch" id={id}>
      <IconInline inlineIcon={inlineIcon} />
      <div className={MAIN_CONTAINER_CLASS} data-container="" style={{ display: 'inline' }}>
        {parts.map((part, index) =>
          part.highlighted ? (
            <span className={markClasses} key={index}>
              <mark>{part.text}</mark>
            </span>
          ) : (
            <span key={index}>{part.text}</span>
          ),
        )}
      </div>
    </OSBlock>
  );
}
