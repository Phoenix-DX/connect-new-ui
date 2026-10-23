import { composeStories } from '@storybook/react-vite';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import * as stories from './PoliciesHeader.stories';

const { Default } = composeStories(stories);

describe('AcceptPendingPolicies header (PoliciesHeader)', () => {
  it('shows "Welcome to", the white Connect logo and the two title lines', () => {
    const { container } = render(<Default />);
    expect(screen.getByText('Welcome to')).toBeInTheDocument();
    expect(container.querySelector('img.login-screen__connect-logo')?.getAttribute('src')).toMatch(
      /UBTConnect\.ConnectLogoWhite\.svg$/,
    );
    expect(screen.getByText('Connect and Directory')).toBeInTheDocument();
    expect(screen.getByText('Terms and Conditions & Privacy Policy')).toBeInTheDocument();
  });

  it('keeps the instance ids of the screen blocks', () => {
    const { container } = render(<Default />);
    const ids = Array.from(container.querySelectorAll('[data-block]')).map((e) => e.id);
    expect(ids).toEqual(expect.arrayContaining(['$b2', '$b3', '$b4', '$b5', '$b6']));
  });
});
