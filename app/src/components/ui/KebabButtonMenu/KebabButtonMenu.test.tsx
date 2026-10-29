import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ContextMenu } from '@/components/ui/ContextMenu';
import { testCapturedVariants } from '@/test/capturedVariants';
import { KebabButtonMenu } from './KebabButtonMenu';
import * as stories from './KebabButtonMenu.stories';

/* ContextMenu keeps its view; the spy reads the options that KebabButtonMenu gives it (the menu is closed). */
vi.mock('@/components/ui/ContextMenu', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/components/ui/ContextMenu')>();
  return { ...actual, ContextMenu: vi.fn(actual.ContextMenu) };
});
const hasShare = () => vi.mocked(ContextMenu).mock.lastCall?.[0].inContextMenuOptions?.HasShare;

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('KebabButtonMenu', () => {
  testCapturedVariants(stories, captures);

  it('In_DisableShare removes the Share option (live TST)', () => {
    render(<KebabButtonMenu />);
    expect(hasShare()).toBe(true);
    render(<KebabButtonMenu inDisableShare />);
    expect(hasShare()).toBe(false);
  });
});
