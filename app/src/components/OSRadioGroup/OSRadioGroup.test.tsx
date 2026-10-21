import { act, fireEvent, render } from '@testing-library/react';
import { useState } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { expectToMatchCapture } from '../../test/dom';
import { RadioButton, RadioGroup } from './OSRadioGroup';

/* Markup and behaviour of OSWidgets.RadioGroup / RadioButton (OutSystemsReactWidgets.js W:78-188, W:347-430), as the
   Photobook speed sheet uses them (Photobook_Options_Right.mvc.js view :478-570). */
function Speeds({ initial = 8000, onChange }: { initial?: number; onChange?: () => void }) {
  const [speed, setSpeed] = useState(initial);
  return (
    <RadioGroup
      id="b4-RadioGroup_SpeedOptions"
      style="radio-group photobook-carousel--radio-group"
      value={speed}
      onValueChange={setSpeed}
      onChange={onChange}
    >
      <RadioButton id="b4-Five" style="radio-button photobook-carousel--radio-button" value={5000}>
        <span data-expression="">5s</span>
      </RadioButton>
      <RadioButton id="b4-Eight" style="radio-button photobook-carousel--radio-button" value={8000}>
        <span data-expression="">8s</span>
      </RadioButton>
      <RadioButton id="b4-Fifteen" style="radio-button photobook-carousel--radio-button" value={15000} enabled={false}>
        <span data-expression="">15s</span>
      </RadioButton>
    </RadioGroup>
  );
}

const input = (container: HTMLElement, id: string) => container.querySelector<HTMLInputElement>(`#${id}-input`);

describe('OSRadioGroup', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders the runtime markup: group div, inner div, one wrapper + input + label per RadioButton', () => {
    const { container } = render(<Speeds />);
    // expectToMatchCapture compares tags, attributes (any order) and text; ids are checked below.
    expectToMatchCapture(
      container.firstElementChild,
      '<div data-radio-group="" class="radio-group photobook-carousel--radio-group OSFillParent" role="radiogroup" ' +
        'aria-activedescendant="b4-Eight" id="b4-RadioGroup_SpeedOptions"><div>' +
        '<div data-radio-button="" class="OSFillParent" id="b4-Five"><input type="radio" id="b4-Five-input" ' +
        'class="radio-button photobook-carousel--radio-button" name="b4-RadioGroup_SpeedOptions" value="5000">' +
        '<label for="b4-Five-input"><span data-expression="">5s</span></label></div>' +
        '<div data-radio-button="" class="OSFillParent" id="b4-Eight"><input type="radio" id="b4-Eight-input" ' +
        'class="radio-button photobook-carousel--radio-button" name="b4-RadioGroup_SpeedOptions" value="8000" checked="">' +
        '<label for="b4-Eight-input"><span data-expression="">8s</span></label></div>' +
        '<div data-radio-button="" class="OSFillParent" id="b4-Fifteen"><input type="radio" id="b4-Fifteen-input" ' +
        'class="radio-button photobook-carousel--radio-button" name="b4-RadioGroup_SpeedOptions" value="15000" ' +
        'disabled=""><label for="b4-Fifteen-input"><span data-expression="">15s</span></label></div>' +
        '</div></div>',
    );
    expect(input(container, 'b4-Eight')?.checked).toBe(true);
    expect(input(container, 'b4-Five')?.checked).toBe(false);
    expect(container.firstElementChild).toHaveAttribute('id', 'b4-RadioGroup_SpeedOptions');
    expect(Array.from(container.querySelectorAll('[data-radio-button]'), (el) => el.id)).toEqual([
      'b4-Five',
      'b4-Eight',
      'b4-Fifteen',
    ]);
    expect(input(container, 'b4-Five')).toHaveAttribute('name', 'b4-RadioGroup_SpeedOptions');
    expect(container.querySelector('label')).toHaveAttribute('for', 'b4-Five-input');
  });

  it('a click sets the variable (checked, aria-activedescendant) and raises OnChange after paint', () => {
    vi.useFakeTimers();
    const onChange = vi.fn();
    const { container } = render(<Speeds onChange={onChange} />);
    fireEvent.click(input(container, 'b4-Five') as HTMLInputElement);
    expect(input(container, 'b4-Five')?.checked).toBe(true);
    expect(input(container, 'b4-Eight')?.checked).toBe(false);
    expect(container.firstElementChild).toHaveAttribute('aria-activedescendant', 'b4-Five');
    expect(container.querySelector('#b4-Five')).not.toHaveClass('active');
    expect(onChange).not.toHaveBeenCalled();
    act(() => {
      vi.advanceTimersByTime(50);
    });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('a disabled RadioButton (or a disabled group) renders a disabled input; the current value is not re-set', () => {
    const onValueChange = vi.fn();
    const same = render(
      <RadioGroup id="s" style="radio-group" value="a" onValueChange={onValueChange}>
        <RadioButton id="a" style="" value="a">
          A
        </RadioButton>
      </RadioGroup>,
    );
    // updateValue (W:106-115): a value equal to the variable changes nothing.
    fireEvent.click(same.container.querySelector('#a-input') as HTMLInputElement);
    expect(onValueChange).not.toHaveBeenCalled();
    const group = render(
      <RadioGroup id="g" style="radio-group" value="a" onValueChange={vi.fn()} enabled={false}>
        <RadioButton id="a" style="" value="a">
          A
        </RadioButton>
      </RadioGroup>,
    );
    expect(group.container.querySelector('input[name="g"]')).toBeDisabled();
  });

  it('no matching RadioButton: no aria-activedescendant; a validation message adds not-valid and its span', () => {
    const { container } = render(
      <RadioGroup id="g" style="radio-group" value="z" onValueChange={vi.fn()} validationMessage="Required field!">
        <RadioButton id="a" style="" value="a" visible={false}>
          A
        </RadioButton>
      </RadioGroup>,
    );
    const root = container.firstElementChild;
    expect(root).not.toHaveAttribute('aria-activedescendant');
    expect(root).toHaveClass('radio-group', 'OSFillParent', 'not-valid');
    expect(container.querySelector('#g_DescribedBy.validation-message')).toHaveTextContent('Required field!');
    expect(container.querySelector('#a-input')).toHaveAttribute('hidden');
  });
});
