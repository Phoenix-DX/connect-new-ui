import type { Meta, StoryObj } from '@storybook/react-vite';
import { InlineSVG } from './InlineSVG';

const meta = { title: 'Shared/osui/InlineSVG', component: InlineSVG } satisfies Meta<typeof InlineSVG>;
export default meta;
type Story = StoryObj<typeof meta>;

/* The SVGCode built by the callers (header background: path = their Path variable). */
const headerSvg = (path: string, pathAttributes = '') =>
  `<svg viewBox="0 0 100 200" preserveAspectRatio="none">\r\n<defs>\r\n    <linearGradient id='primaryGradient' x1='0%' x2='100%'  y1='0%' y2='0%'>\r\n        <stop offset='0%' stop-color='var(--color-primary,#00819C)'/>\r\n        <stop offset='100%' stop-color='var(--color-cyan,#4EAEC2)'/>\r\n    </linearGradient>\r\n</defs>\r\n<path d='${path}' fill='url(#primaryGradient)'${pathAttributes}/>\r\n</svg>`;

/** BookmarksByGroup/default */
export const V1: Story = {
  args: { svgCode: headerSvg('M0,0 H100 V160 Q50,181 0,160 Z'), extendedClass: 'ubt-header-svg' },
};
/** Splash/default: the screen animates the path; the capture holds the animated attributes, included here. */
export const V2: Story = {
  args: {
    svgCode: headerSvg(
      'M 100,50 A 50,50 0 1,0 0,50 A 50,50 0 1,0 100,50',
      ' data-svg-origin="50 50" style="translate: none; rotate: none; scale: none; transform-origin: 0px 0px;" transform="matrix(2.7087,0,0,2.7087,-85.435,-35.435)"',
    ),
    extendedClass: 'ubt-header-svg ubt-loading-svg',
  },
};
