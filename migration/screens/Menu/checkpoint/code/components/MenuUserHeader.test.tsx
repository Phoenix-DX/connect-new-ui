import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import { MenuUserHeader, type MenuUserHeaderProps } from './MenuUserHeader';

function renderHeader(props: Partial<MenuUserHeaderProps> = {}) {
  const onEditYourAccount = vi.fn();
  const view = render(
    <MemoryRouter>
      <MenuUserHeader
        isLoading={false}
        memberId="990001"
        photoUrl=""
        fullName="Matías Vitale"
        onEditYourAccount={onEditYourAccount}
        {...props}
      />
    </MemoryRouter>,
  );
  const section = view.container.querySelector('[data-block="ConnectPatterns.SkeletonSection"] > div');
  return { ...view, onEditYourAccount, section };
}

describe('MenuUserHeader', () => {
  it('shows the full name and the "Edit your account" link of the user', () => {
    const { section } = renderHeader();
    expect(screen.getByText('Matías Vitale')).toBeInTheDocument();
    expect(screen.getByText('Edit your account')).toBeInTheDocument();
    expect(section).not.toHaveAttribute('inert');
  });

  it('the link raises onEditYourAccount', () => {
    const { onEditYourAccount } = renderHeader();
    fireEvent.click(screen.getByText('Edit your account'));
    expect(onEditYourAccount).toHaveBeenCalledTimes(1);
  });

  it('is an inert skeleton while the user record has not come', () => {
    const { section } = renderHeader({ isLoading: true, memberId: '0', fullName: '' });
    expect(section).toHaveAttribute('inert');
    expect(section?.className).toContain('skeleton');
  });
});
