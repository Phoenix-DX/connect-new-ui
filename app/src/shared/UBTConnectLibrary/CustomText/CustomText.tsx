// @os-block UBTConnectLibrary.BasePatterns.CustomText
import { OSBlock } from '../../../components/OSBlock';
import { HighlightSearch } from '../HighlightSearch';
import { IconInline_Internal } from '../IconInline_Internal';
import { formatClasses, getClasses_Text, getSpacingOptions } from '../lib/actions';
import type { InlineIcon, SpacingOptions, TextOptions } from './types';

export interface CustomTextProps {
  /** OutSystems instance id of the block. */
  id?: string;
  inText?: string;
  inTextOptions?: TextOptions;
  inPaddingOptions?: SpacingOptions;
  /** Words to highlight; when set the text renders through HighlightSearch. */
  inHighlightWords?: string;
  inHighlightOptions?: TextOptions;
  extendedClasses?: string;
  fitContent?: boolean;
  inJustifyText?: boolean;
  noWrap?: boolean;
  inlineIcon?: InlineIcon;
  /** Event Clicked. */
  onClicked?: () => void;
}

export function CustomText({
  id,
  inText = '',
  inTextOptions,
  inPaddingOptions,
  inHighlightWords = '',
  inHighlightOptions,
  extendedClasses = '',
  fitContent = false,
  inJustifyText = false,
  noWrap = false,
  inlineIcon,
  onClicked,
}: CustomTextProps) {
  let className = formatClasses(getClasses_Text(inTextOptions), extendedClasses);
  className = formatClasses(className, fitContent ? 'ubt-with-fit-content' : '');
  className = formatClasses(className, getSpacingOptions('padding', inPaddingOptions));
  className = formatClasses(className, inJustifyText ? 'text-justify' : '');
  className = formatClasses(className, noWrap ? 'text-no-wrap' : '');
  return (
    <OSBlock name="BasePatterns.CustomText" id={id}>
      <div className={className} data-container="" style={{ cursor: 'pointer' }} onClick={onClicked}>
        {inHighlightWords !== '' ? (
          <HighlightSearch
            text={inText}
            searchTerms={inHighlightWords}
            stopWords="and in"
            inlineIcon={inlineIcon}
            highlightClasses={getClasses_Text(inHighlightOptions)}
          />
        ) : (
          <>
            <IconInline_Internal inlineIcon={inlineIcon} />
            <span data-expression="" style={{ marginLeft: '0px' }}>
              {inText}
            </span>
          </>
        )}
      </div>
    </OSBlock>
  );
}
