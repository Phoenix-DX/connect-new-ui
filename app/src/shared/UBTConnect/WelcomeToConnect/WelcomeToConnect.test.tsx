import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { WelcomeToConnect } from './WelcomeToConnect';
import * as stories from './WelcomeToConnect.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('WelcomeToConnect', () => {
  testCapturedVariants(stories, captures);

  it('loads the captured Connect logo', () => {
    const { container } = render(<WelcomeToConnect />);
    expect(container.querySelector('img')?.getAttribute('src')).toBe(
      '/os-assets/UBTConnect/img/UBTConnect.ConnectLogo.svg',
    );
  });
});
