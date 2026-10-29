import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import { Input, type SearchInputElement } from './Input';
import * as stories from './Input.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

const input = () => screen.getByRole<SearchInputElement>('searchbox');

describe('Input', () => {
  testCapturedVariants(stories, captures);

  afterEach(() => {
    vi.useRealTimers();
  });

  it('OnReady: the initial string, focus, Event_OnReady with the input id and the clearStringAction function', () => {
    const onEventOnReady = vi.fn();
    const { container } = render(
      <Input inOptions={{ InitalString: 'abc', FocusOnReady: true }} onEventOnReady={onEventOnReady} />,
    );
    expect(input()).toHaveValue('abc');
    expect(document.activeElement).toBe(input());
    expect(onEventOnReady).toHaveBeenCalledWith(input().id);
    expect(container.querySelector('.connect-icon-search')).toBeNull();
    act(() => {
      input().clearStringAction?.(false);
    });
    expect(input()).toHaveValue('');
    expect(container.querySelector('.connect-icon-search')).toHaveClass('text-inherit', 'icon-medium');
  });

  it('typing raises Event_OnChange after the debounce delay, or at once with -1', () => {
    vi.useFakeTimers();
    const onEventOnChange = vi.fn();
    const { rerender } = render(<Input inOptions={{ Debounce_DelayMS: 300 }} onEventOnChange={onEventOnChange} />);
    fireEvent.change(input(), { target: { value: 'a' } });
    fireEvent.change(input(), { target: { value: 'ab' } });
    expect(onEventOnChange).not.toHaveBeenCalled();
    act(() => {
      vi.advanceTimersByTime(300);
    });
    expect(onEventOnChange).toHaveBeenCalledTimes(1);
    expect(onEventOnChange).toHaveBeenCalledWith('ab');
    rerender(<Input inOptions={{ Debounce_DelayMS: -1 }} onEventOnChange={onEventOnChange} />);
    fireEvent.change(input(), { target: { value: 'abc' } });
    expect(onEventOnChange).toHaveBeenLastCalledWith('abc');
  });

  it('the clear icon empties the text, focuses the input and raises Event_ClearString', () => {
    const onEventClearString = vi.fn();
    const { container } = render(
      <Input inOptions={{ Debounce_DelayMS: -1 }} onEventClearString={onEventClearString} />,
    );
    fireEvent.change(input(), { target: { value: 'x' } });
    const clear = container.querySelector('.connect-icon-cancel_fill');
    if (!clear) throw new Error('no clear icon');
    expect(clear.closest('.input-with-icon')).toHaveClass('input-with-icon-right');
    fireEvent.click(clear);
    expect(input()).toHaveValue('');
    expect(document.activeElement).toBe(input());
    expect(onEventClearString).toHaveBeenCalledTimes(1);
  });

  it('Enter blurs the input and raises Event_Submit; focus raises Event_OnFocus', () => {
    const onEventSubmit = vi.fn();
    const onEventOnFocus = vi.fn();
    render(
      <Input inOptions={{ Debounce_DelayMS: -1 }} onEventSubmit={onEventSubmit} onEventOnFocus={onEventOnFocus} />,
    );
    act(() => {
      input().focus();
    });
    expect(onEventOnFocus).toHaveBeenCalledTimes(1);
    fireEvent.change(input(), { target: { value: 'term' } });
    fireEvent.keyUp(input(), { key: 'a' });
    expect(onEventSubmit).not.toHaveBeenCalled();
    fireEvent.keyUp(input(), { key: 'Enter' });
    expect(onEventSubmit).toHaveBeenCalledWith('term');
    expect(document.activeElement).not.toBe(input());
  });

  it('validity: mandatory, forced invalid, and new parameters (InitalString, IsSyncValueWithInput)', () => {
    const { rerender } = render(
      <Input inOptions={{ IsMandatory: true, ValidationMessage: 'Required', Debounce_DelayMS: -1 }} />,
    );
    expect(input()).toHaveAttribute('aria-required', 'true');
    fireEvent.change(input(), { target: { value: 'x' } });
    fireEvent.change(input(), { target: { value: '' } });
    // Platform Input widget invalid markup (components/OSValidation): " not-valid", aria-describedby, the message span
    // right after the input inside span.input-search.
    expect(input()).toHaveClass('not-valid');
    expect(input()).not.toHaveAttribute('aria-invalid');
    const message = screen.getByText('Required');
    expect(message).toHaveClass('validation-message');
    expect(message.tagName).toBe('SPAN');
    expect(message.id).toBe(`${input().id}_DescribedBy`);
    expect(input()).toHaveAttribute('aria-describedby', message.id);
    expect(input().nextElementSibling).toBe(message);
    expect(input().parentElement).toHaveClass('input-search');
    rerender(<Input inOptions={{ IsForceInvalid: false, InitalString: 'new', Debounce_DelayMS: -1 }} />);
    expect(input()).toHaveValue('new');
    expect(input()).not.toHaveClass('not-valid');
    expect(input()).not.toHaveAttribute('aria-describedby');
    expect(document.querySelector('.validation-message')).toBeNull();
    rerender(<Input inOptions={{ IsForceInvalid: true, ValidationMessage: 'Bad', Debounce_DelayMS: -1 }} />);
    expect(screen.getByText('Bad')).toHaveClass('validation-message');
    // Not valid with an empty message: no markup (hasValidationMessage).
    rerender(<Input inOptions={{ IsForceInvalid: true, ValidationMessage: '', Debounce_DelayMS: -1 }} />);
    expect(input()).not.toHaveClass('not-valid');
    expect(document.querySelector('.validation-message')).toBeNull();
    rerender(<Input inOptions={{ IsSyncValueWithInput: true, InitalString: '' }} inExtendedClasses="x-extra" />);
    expect(input()).toHaveValue('');
    expect(input()).toHaveClass('form-control', 'x-extra', 'OSFillParent');
  });

  it('Input_Search.Style starts with search-placeholder-ellipsis (live TST block, Bookmarks Q4 (a), user 2026-10-29)', () => {
    render(<Input inExtendedClasses="x-extra" />);
    expect(screen.getByRole('searchbox').className).toBe(
      'search-placeholder-ellipsis form-control x-extra border-radius-soft OSFillParent',
    );
  });
});
