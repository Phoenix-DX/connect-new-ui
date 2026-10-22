// @os-block ReactiveHtmlSanitizer.HtmlSanitizer.SanitizedHtml
import { useMemo } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import {
  allowAttributes,
  allowCssStyles,
  allowTags,
  disallowAttributes,
  disallowCssStyles,
  disallowTags,
  sanitizeHtml,
  setDefaults,
} from '../lib/actions';

export interface SanitizedHtmlProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** HTML to sanitize and show. */
  value?: string;
  resetWhitelist?: boolean;
  /** Comma-separated lists added to / deleted from the sanitizer's allow lists (they persist, see lib/actions.ts). */
  allowedAttributes?: string;
  disallowedAttributes?: string;
  allowedTags?: string;
  disallowedTags?: string;
  allowedCssStyles?: string;
  disallowedCssStyles?: string;
}

/** Sanitized HTML expression (p:ReactiveHtmlSanitizer.HtmlSanitizer.SanitizedHtml.mvc.js). OnReady, and again on
    every parameter change (OnParametersChanged calls OnReady), :300-345: setDefaults when ResetWhitelist, then
    AllowAttributes, DisallowAttributes, AllowTags, DisallowTags, AllowCssStyles, DisallowCssStyles, SanitizeHtml(Value),
    and PutHtmlInDom (:428-430) writes the result as the innerHTML of the `SanitizedHtml` expression. */
export function SanitizedHtml({
  id,
  value = '',
  resetWhitelist = false,
  allowedAttributes = '',
  disallowedAttributes = '',
  allowedTags = '',
  disallowedTags = '',
  allowedCssStyles = '',
  disallowedCssStyles = '',
}: SanitizedHtmlProps) {
  const html = useMemo(() => {
    if (resetWhitelist) setDefaults();
    allowAttributes(allowedAttributes);
    disallowAttributes(disallowedAttributes);
    allowTags(allowedTags);
    disallowTags(disallowedTags);
    allowCssStyles(allowedCssStyles);
    disallowCssStyles(disallowedCssStyles);
    return sanitizeHtml(value);
  }, [
    value,
    resetWhitelist,
    allowedAttributes,
    disallowedAttributes,
    allowedTags,
    disallowedTags,
    allowedCssStyles,
    disallowedCssStyles,
  ]);
  return (
    <OSBlock name="HtmlSanitizer.SanitizedHtml" id={id}>
      <span
        className="OSFillParent"
        data-expression=""
        style={{ marginLeft: 0 }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </OSBlock>
  );
}
