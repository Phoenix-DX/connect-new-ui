import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '../../test/capturedVariants';
import { Person_Contact_Options } from './Person_Contact_Options';
import * as stories from './Person_Contact_Options.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

const renderBlock = (props: Parameters<typeof Person_Contact_Options>[0]) =>
  render(
    <MemoryRouter>
      <Person_Contact_Options {...props} />
    </MemoryRouter>,
  );

describe('Person_Contact_Options', () => {
  testCapturedVariants(stories, captures);

  it('renders no link while the inputs are empty', () => {
    const { container } = renderBlock({});
    expect(container.querySelectorAll('a')).toHaveLength(0);
  });

  it('renders the mobile and work links with their classes and icons (not captured)', () => {
    const { container } = renderBlock({ mobilePhone: '1', workPhone: '2' });
    const [mobile, work] = [...container.querySelectorAll('a > div')];
    expect(mobile).toHaveClass('block-household-person-options-mobile', 'text-green-darker');
    expect(mobile?.querySelector('i')).toHaveClass('fa-mobile');
    expect(work).toHaveClass('block-household-person-options-work', 'text-dark-blue');
    expect(work?.querySelector('i')).toHaveClass('fa-briefcase');
  });

  it('a phone link raises CallClicked with its own number, the email link EmailClicked', () => {
    const onCallClicked = vi.fn();
    const onEmailClicked = vi.fn();
    const { container } = renderBlock({
      phone: 'p',
      mobilePhone: 'm',
      workPhone: 'w',
      emailAddress: 'e',
      onCallClicked,
      onEmailClicked,
    });
    const links = [...container.querySelectorAll('a')];
    links.forEach((link) => fireEvent.click(link));
    expect(onCallClicked.mock.calls).toEqual([['p'], ['m'], ['w']]);
    expect(onEmailClicked.mock.calls).toEqual([['e']]);
  });
});
