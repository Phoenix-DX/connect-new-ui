import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ProfileHouseholdPreview } from './ProfileHouseholdPreview';

describe('ProfileHouseholdPreview', () => {
  it('renders the household of the page in an inert container with the instance id of the block', () => {
    const renderHousehold = vi.fn((id: string) => <p>household {id}</p>);
    const onOnInitialized = vi.fn();
    const { container } = render(
      <ProfileHouseholdPreview id="$b60" onOnInitialized={onOnInitialized} renderHousehold={renderHousehold} />,
    );
    const block = container.querySelector('[data-block="App_Profile.Profile_HouseholdPreview"]');
    expect(block).not.toBeNull();
    expect(renderHousehold).toHaveBeenCalledWith('b60-$b2');
    const content = screen.getByText('household b60-$b2').parentElement;
    expect(content).toHaveAttribute('inert');
    expect(content).toHaveAttribute('data-container');
    expect(content).toHaveStyle({ textAlign: 'left' });
    expect(block?.textContent).toContain('Preview Household Profile');
    expect(onOnInitialized).toHaveBeenCalledTimes(1);
    expect(onOnInitialized).toHaveBeenCalledWith(expect.any(String));
  });
});
