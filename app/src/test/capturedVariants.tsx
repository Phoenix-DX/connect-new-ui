import { composeStories } from '@storybook/react-vite';
import { render } from '@testing-library/react';
import { it } from 'vitest';
import { expectToMatchCapture } from '@/test/dom';

type StoriesModule = Parameters<typeof composeStories>[0];

/** One DOM test per captured variant. Story `V<N>` of the block renders the inputs that produced
    `__captures__/v<N>.html`; the block's root element must match it (see `src/test/dom.ts` for what is compared).
    `captures` is the block's `import.meta.glob('./__captures__/*.html', { query: '?raw', import: 'default', eager: true })`. */
export function testCapturedVariants(stories: StoriesModule, captures: Record<string, string>) {
  const composed: Record<string, React.ComponentType> = composeStories(stories);
  for (const [name, Story] of Object.entries(composed)) {
    const file = `./__captures__/${name.toLowerCase()}.html`;
    it(`${name} matches ${file.slice(2)}`, () => {
      const html = captures[file];
      if (html === undefined) throw new Error(`story ${name} has no capture ${file}`);
      const { container } = render(<Story />);
      expectToMatchCapture(container.firstElementChild, html);
    });
  }
}
