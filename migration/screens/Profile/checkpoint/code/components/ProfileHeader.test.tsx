import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ProfileHeader } from './ProfileHeader';

describe('ProfileHeader', () => {
  it('shows the full name and the "Preview Household Profile" link, which raises onViewPreview', () => {
    const onViewPreview = vi.fn();
    render(<ProfileHeader memberId="990001" photoUrl="" fullName="Matías Vitale" onViewPreview={onViewPreview} />);
    expect(screen.getByText('Matías Vitale')).toBeInTheDocument();
    expect(screen.getByText('Preview Household Profile')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Preview Household Profile'));
    expect(onViewPreview).toHaveBeenCalledTimes(1);
  });
});
