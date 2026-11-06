import { composeStories } from '@storybook/react-vite';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import * as stories from './PendingPoliciesForm.stories';

const { Default, TwoPolicies, AllSelected, Loading, AcceptedAll } = composeStories(stories);

const block = (root: Element) => root.querySelector('[data-block="App_Policies.Policy_Custom_AcceptPendingPolicies"]');
const rowCheckboxes = (root: Element) =>
  root.querySelectorAll('.ubt-policies--list [data-block="ConnectPatterns.Icon"] > div');
const agreeToAll = (root: Element) =>
  root.querySelector('.ubt-policies--agree-to-all [data-block="ConnectPatterns.Icon"] > div');
const continueButton = () => screen.getByRole('button', { name: 'Continue' });

describe('Policy_Custom_AcceptPendingPolicies (PendingPoliciesForm)', () => {
  it('shows one row per pending policy, as captured, and no "I agree to all" for one policy', () => {
    const { container } = render(<Default />);
    expect(block(container)).not.toBeNull();
    expect(screen.getAllByText('I have read and agree to the')).toHaveLength(1);
    expect(screen.getByText('Connect Privacy Policy')).toHaveClass('font-size-s', 'font-semi-bold', 'text-underline');
    expect(container.querySelector('.ubt-policies--list.text-align-left')).not.toBeNull();
    expect(container.querySelector('.ubt-policies--list .display-flex.margin-y-xl.margin-right-l')).not.toBeNull();
    expect(container.querySelectorAll('.ubt-policies--list .connect-icon-checkbox_outline_blank')).toHaveLength(1);
    expect(screen.queryByText(/I agree to/)).toBeNull();
    expect(continueButton()).toBeDisabled();
  });

  it('shows "I agree to all Terms & Conditions and the Privacy Policy" for two or more policies', () => {
    const { container } = render(<TwoPolicies />);
    expect(screen.getAllByText('I have read and agree to the')).toHaveLength(2);
    expect(screen.getByText('Connect Terms and Conditions')).toBeInTheDocument();
    expect(screen.getByText('I agree to')).toBeInTheDocument();
    expect(screen.getByText('all Terms & Conditions and the Privacy Policy')).toHaveClass('text-underline');
    expect(container.querySelectorAll('.ubt-policies--list .connect-icon-checkbox_outline_blank')).toHaveLength(2);
    expect(continueButton()).toBeDisabled();
  });

  it('checks every box and enables Continue when all are selected', () => {
    const { container } = render(<AllSelected />);
    expect(container.querySelectorAll('.ubt-policies--list .connect-icon-checkbox')).toHaveLength(2);
    expect(container.querySelector('.ubt-policies--agree-to-all .connect-icon-checkbox')).not.toBeNull();
    expect(continueButton()).toBeEnabled();
  });

  it('shows the list-updating container while the first fetch runs', () => {
    const { container } = render(<Loading />);
    expect(container.querySelector('.list-updating')).not.toBeNull();
    expect(screen.queryByRole('button', { name: 'Continue' })).toBeNull();
  });

  it('shows the "accepted all" message with no policy, and no footer', () => {
    render(<AcceptedAll />);
    expect(screen.getByText(/You have accepted all required policies\./)).toBeInTheDocument();
    expect(screen.getByText(/No more policies available to accept\./)).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Continue' })).toBeNull();
  });

  it('raises the row checkbox with its index, "I agree to all" and Continue; the policy name has no click', () => {
    const onToggle = vi.fn();
    const onToggleAll = vi.fn();
    const onContinue = vi.fn();
    const { container, rerender } = render(<TwoPolicies onToggle={onToggle} onToggleAll={onToggleAll} />);
    const second = rowCheckboxes(container)[1];
    if (!second) throw new Error('no row checkbox');
    fireEvent.click(second);
    expect(onToggle).toHaveBeenCalledWith(1);
    const all = agreeToAll(container);
    if (!all) throw new Error('no "I agree to all" checkbox');
    fireEvent.click(all);
    expect(onToggleAll).toHaveBeenCalledTimes(1);
    expect(screen.getByText('Connect Privacy Policy').onclick).toBeNull();

    rerender(<AllSelected onContinue={onContinue} />);
    fireEvent.click(continueButton());
    expect(onContinue).toHaveBeenCalledTimes(1);
  });
});
