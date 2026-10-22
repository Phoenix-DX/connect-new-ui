import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { NC_Result_Item_Badge } from './NC_Result_Item_Badge';
import * as stories from './NC_Result_Item_Badge.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('NC_Result_Item_Badge', () => {
  testCapturedVariants(stories, captures);

  it('BackgroundColor and Size go to the inline style; the Icon placeholder is inside', () => {
    const { container, getByText } = render(
      <NC_Result_Item_Badge backgroundColor="var(--color-primary)" size="48px">
        <span>12</span>
      </NC_Result_Item_Badge>,
    );
    const circle = container.querySelector('.border-radius-circle');
    expect(circle?.getAttribute('style')).toBe('background-color: var(--color-primary); height: 48px; width: 48px;');
    expect(circle).toContainElement(getByText('12'));
  });
});
