import { composeStories } from '@storybook/react-vite';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '../../test/capturedVariants';
import * as stories from './Layout_Orbit.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const { V1 } = composeStories(stories);

describe('Layout_Orbit', () => {
  testCapturedVariants(stories, captures);

  it('BaseLayout gets ExtendedClass "orbit-theme " and the placeholders, as on EventDetail/default', () => {
    const { container } = render(<V1 />);
    expect(container.querySelector('.layout')?.className).toBe(
      'layout layout-side layout-native ios-bounce aside-overlay orbit-theme ',
    );
    expect(container.querySelector('.main-content')?.textContent).toContain(
      'Orbit_ScreenBlocks.ScreenBlock_EventDetail',
    );
  });

  it('OnInitialize sets the orbit-theme body class (SetThemeClassToBody) and drops the other themes', () => {
    document.body.classList.add('connect-theme');
    render(<V1 />);
    expect(document.body).toHaveClass('orbit-theme');
    expect(document.body).not.toHaveClass('connect-theme');
  });
});
