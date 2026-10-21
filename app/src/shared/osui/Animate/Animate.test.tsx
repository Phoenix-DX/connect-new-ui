import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '../../test/capturedVariants';
import { Animate } from './Animate';
import * as stories from './Animate.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('Animate', () => {
  testCapturedVariants(stories, captures);

  it('writes the delay and the empty defaults as the compiled view does', () => {
    const { container } = render(<Animate delay={250} />);
    const content = container.querySelector('[data-block="Interaction.Animate"] > div') as HTMLElement;
    expect(content.className).toBe('animate  ');
    expect(content.style.animationDelay).toBe('250ms');
  });
});
