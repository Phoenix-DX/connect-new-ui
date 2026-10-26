import { composeStories } from '@storybook/react-vite';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import * as stories from './PendingPoliciesForm.stories';

const { Default, AllSelected, OnePolicy, Loading, AcceptedAll } = composeStories(stories);

const block = (root: Element) => root.querySelector('[data-block="App_Policies.Policy_Custom_AcceptPendingPolicies"]');
const rowCheckboxes = (root: Element) =>
  root.querySelectorAll('.ubt-policies--list [data-block="ConnectPatterns.Icon"] > div');
const agreeToAll = (root: Element) =>
  root.querySelector('.ubt-policies--agree-to-all [data-block="ConnectPatterns.Icon"] > div');
const continueButton = () => screen.getByRole('button', { name: 'Continue' });

describe('Policy_Custom_AcceptPendingPolicies (PendingPoliciesForm)', () => {
  it('shows one row per pending policy and "I agree to all" for two or more', () => {
    const { container } = render(<Default />);
    expect(block(container)).not.toBeNull();
    expect(screen.getAllByText('I agree to the Connect -')).toHaveLength(2);
    expect(screen.getByText('Terms and Conditions')).toBeInTheDocument();
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByText('I agree to all')).toBeInTheDocument();
    expect(container.querySelectorAll('.ubt-policies--list .connect-icon-checkbox_outline_blank')).toHaveLength(2);
  });

  it('disables Continue until every policy is selected', () => {
    render(<Default />);
    expect(continueButton()).toBeDisabled();
  });

  it('checks every box and enables Continue when all are selected', () => {
    const { container } = render(<AllSelected />);
    expect(container.querySelectorAll('.ubt-policies--list .connect-icon-checkbox')).toHaveLength(2);
    expect(container.querySelector('.ubt-policies--agree-to-all .connect-icon-checkbox')).not.toBeNull();
    expect(continueButton()).toBeEnabled();
  });

  it('has no "I agree to all" for one policy', () => {
    render(<OnePolicy />);
    expect(screen.getAllByText('I agree to the Connect -')).toHaveLength(1);
    expect(screen.queryByText('I agree to all')).toBeNull();
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

  it('raises the row checkbox with its index, "I agree to all", the policy link and Continue', () => {
    const onToggle = vi.fn();
    const onToggleAll = vi.fn();
    const onPolicyClick = vi.fn();
    const onContinue = vi.fn();
    const { container, rerender } = render(
      <Default onToggle={onToggle} onToggleAll={onToggleAll} onPolicyClick={onPolicyClick} />,
    );
    const second = rowCheckboxes(container)[1];
    if (!second) throw new Error('no row checkbox');
    fireEvent.click(second);
    expect(onToggle).toHaveBeenCalledWith(1);
    const all = agreeToAll(container);
    if (!all) throw new Error('no "I agree to all" checkbox');
    fireEvent.click(all);
    expect(onToggleAll).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByText('Privacy Policy'));
    expect(onPolicyClick).toHaveBeenCalledWith(expect.objectContaining({ id: '7002' }));

    rerender(<AllSelected onContinue={onContinue} />);
    fireEvent.click(continueButton());
    expect(onContinue).toHaveBeenCalledTimes(1);
  });
});
