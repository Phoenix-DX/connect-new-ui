import { composeStories } from '@storybook/react-vite';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import * as stories from './ContactPersonCard.stories';

const { Default, CountryOnly } = composeStories(stories);

describe('ContactPersonCard', () => {
  it('shows the name and the locality line "<locality>, <country>"', () => {
    render(<Default />);
    expect(screen.getByText('Clara Whitfield')).toBeInTheDocument();
    expect(screen.getByText('Ashford, United Kingdom')).toBeInTheDocument();
  });

  it('has no separator when the locality or the country is ""', () => {
    render(<CountryOnly />);
    expect(screen.getByText('Sweden')).toBeInTheDocument();
  });

  it('keeps the instance ids of the screen blocks ($b3 to $b9)', () => {
    const { container } = render(<Default />);
    const ids = Array.from(container.querySelectorAll('[data-block]'))
      .map((e) => e.id)
      .filter((id) => id !== '');
    expect(ids).toEqual(['$b3', '$b4', '$b5', '$b6', '$b7', '$b8', '$b9']);
  });

  it('renders the avatar in the "ubt-object-fit-avatar-img" container and the home_pin icon', () => {
    const { container } = render(<Default />);
    expect(
      container.querySelector('#\\$b5 > .ubt-object-fit-avatar-img [data-block="CW_Image.UBT_LazyImage"]'),
    ).not.toBeNull();
    expect(container.querySelector('#\\$b9 .connect-icon-home_pin')).not.toBeNull();
  });
});
