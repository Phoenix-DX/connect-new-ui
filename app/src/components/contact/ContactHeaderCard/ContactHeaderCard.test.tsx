import { composeStories } from '@storybook/react-vite';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import * as stories from './ContactHeaderCard.stories';

const { OneSchoolGlobal, LDMCoordinator, OrbitHelpdesk } = composeStories(stories);

const ids = (container: HTMLElement) =>
  Array.from(container.querySelectorAll('[data-block]'))
    .map((e) => e.id)
    .filter((id) => id !== '');

describe('ContactHeaderCard', () => {
  it('OneSchoolGlobal: the logo, the title and the second line', () => {
    const { container } = render(<OneSchoolGlobal />);
    expect(container.querySelector('img.contact-by-email__header__img')?.getAttribute('src')).toMatch(
      /UBTConnectLibrary\.OneSchoolGlobal\.svg$/,
    );
    expect(screen.getByText('Riverside Campus Office')).toBeInTheDocument();
    expect(ids(container)).toEqual(['$b3', '$b4', '$b5']);
  });

  it('LDMCoordinator: no image source gives an img without src; the subtitle line', () => {
    const { container } = render(<LDMCoordinator />);
    expect(container.querySelector('img.contact-by-email__header__img')?.hasAttribute('src')).toBe(false);
    expect(screen.getByText('LDM Event Coordinator')).toBeInTheDocument();
  });

  it('OrbitHelpdesk: no subtitle gives no second line ($b5 absent)', () => {
    const { container } = render(<OrbitHelpdesk />);
    expect(screen.getByText('Orbit Helpdesk')).toBeInTheDocument();
    expect(ids(container)).toEqual(['$b3', '$b4']);
  });

  it('the header is centred and keeps the class contact-by-email__header', () => {
    const { container } = render(<OneSchoolGlobal />);
    expect(container.querySelector('div.text-align-center > #\\$b3 > .contact-by-email__header')).not.toBeNull();
  });
});
