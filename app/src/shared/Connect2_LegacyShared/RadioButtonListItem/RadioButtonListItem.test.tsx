import { composeStories } from '@storybook/react-vite';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { RadioButtonListItem } from './RadioButtonListItem';
import * as stories from './RadioButtonListItem.stories';

const { Selected, NotSelected } = composeStories(stories);

/* Never captured: the markup follows the compiled view (RadioButtonListItem.mvc.js :147-215). */
describe('RadioButtonListItem', () => {
  it('renders one RadioGroup with one RadioButton; checked when SelectedValue equals RadioButtonValue', () => {
    const { container } = render(<Selected />);
    const group = container.querySelector('[data-block="Reusable.RadioButtonListItem"] > [data-radio-group]');
    expect(group?.className).toBe('radio-group radio-group--list-item  OSFillParent');
    const input = group?.querySelector<HTMLInputElement>('[data-radio-button].OSFillParent > input.radio-button');
    expect(input?.value).toBe('4101');
    expect(input?.checked).toBe(true);
    expect(group?.querySelector('label > div')?.textContent).toBe('Bahia Blanca Main Hall');
    const other = render(<NotSelected />);
    expect(other.container.querySelector<HTMLInputElement>('input.radio-button')?.checked).toBe(false);
  });

  it('ExtendedClass is appended; a click checks it and raises Selected', () => {
    const onSelected = vi.fn();
    const { container } = render(
      <RadioButtonListItem selectedValue="7" radioButtonValue="3" extendedClass="x-list" onSelected={onSelected}>
        Title
      </RadioButtonListItem>,
    );
    expect(container.querySelector('[data-radio-group]')).toHaveClass(
      'radio-group',
      'radio-group--list-item',
      'x-list',
    );
    const input = container.querySelector<HTMLInputElement>('input.radio-button') as HTMLInputElement;
    fireEvent.click(input);
    expect(onSelected).toHaveBeenCalledTimes(1);
    expect(input.checked).toBe(true);
  });
});
