import { composeStories } from '@storybook/react-vite';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '../../test/capturedVariants';
import { Menu_List } from './Menu_List';
import * as stories from './Menu_List.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const { NotCaptured_RowStates } = composeStories(stories);
/** The captured stories only (V1-V4). */
const captured = { default: stories.default, V1: stories.V1, V2: stories.V2, V3: stories.V3, V4: stories.V4 };

describe('Menu_List', () => {
  testCapturedVariants(captured, captures);

  it('row click raises OnClick_MenuOption with the row record', () => {
    const onClick = vi.fn();
    render(
      <Menu_List
        inMenuSection={{ MenuOptions: [{ Id: 'pin', IconId: 'connect-icon-password', Label: 'Change PIN' }] }}
        onOnClickMenuOption={onClick}
      />,
    );
    fireEvent.click(screen.getByText('Change PIN'));
    expect(onClick).toHaveBeenCalledWith({ Id: 'pin', IconId: 'connect-icon-password', Label: 'Change PIN' });
  });

  it('right side: switch, right text with icon, description, loading row (compiled view branches)', () => {
    const { container } = render(<NotCaptured_RowStates />);
    const rights = [...container.querySelectorAll('.ubt-columns--three-columns')].map((row) => row.children[2]);
    expect(rights[0]?.querySelector('.item-switch input.switch')).toBeChecked();
    expect(rights[1]?.querySelector('[data-block="ConnectPatterns.IconText"]')?.textContent).toContain('English');
    expect(rights[1]?.querySelector('.connect-icon-chevron_right.text-neutral-7')).not.toBeNull();
    expect(rights[2]?.querySelector('.connect-icon-chevron_right')).not.toBeNull();
    expect(screen.getByText('Questions and answers').closest('[data-container]')).toHaveClass('text-neutral-6');
    expect(container.querySelectorAll('.ubt-skeleton-section, [inert]').length).toBeGreaterThan(0);
  });

  it('the switch keeps its value in the block copy and the click passes it', () => {
    const onClick = vi.fn();
    const { container } = render(
      <Menu_List
        inMenuSection={{ MenuOptions: [{ Id: 'bio', Label: 'Biometrics', useSwitch: true }] }}
        onOnClickMenuOption={onClick}
      />,
    );
    const input = container.querySelector<HTMLInputElement>('input.switch');
    if (!input) throw new Error('no switch');
    fireEvent.click(input);
    expect(input).toBeChecked();
    fireEvent.click(screen.getByText('Biometrics'));
    expect(onClick).toHaveBeenLastCalledWith({ Id: 'bio', Label: 'Biometrics', useSwitch: true, SwitchValue: true });
  });

  it('HasSeparator False and no title: no separator and no title container', () => {
    const { container } = render(<Menu_List inMenuSection={{ HasSeparator: false }} />);
    expect(container.querySelector('[data-block="App_Common_Blocks.SectionSeparator"]')).toBeNull();
    expect(container.querySelectorAll('[data-block="BasePatterns.CustomContainer"]')).toHaveLength(1);
  });
});
