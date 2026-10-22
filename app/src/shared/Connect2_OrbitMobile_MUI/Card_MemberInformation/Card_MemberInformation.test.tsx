import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Card_MemberInformation } from './Card_MemberInformation';
import * as stories from './Card_MemberInformation.stories';
import { testCapturedVariants } from '@/shared/test/capturedVariants';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const member = {
  FirstName: 'Elsa',
  LastName: 'Pérez',
  Title: 'Mrs',
  Age: '58',
  Phone: '+54 555 0102',
  MemberId: '9',
  LocalityId: '252',
};

describe('Card_MemberInformation', () => {
  testCapturedVariants(stories, captures);

  it('ClickedMember(In_HouseholderId) from the photo and the text; ClickedPhone with name, ids and photo URL', async () => {
    const onClickedMember = vi.fn();
    const onClickedPhone = vi.fn();
    const { container } = render(
      <Card_MemberInformation
        inMemberInformation={member}
        inHouseholderId="42438"
        onClickedMember={onClickedMember}
        onClickedPhone={onClickedPhone}
        getSignedImageURL={() => Promise.resolve('https://photos.example.com/9.jpg')}
      />,
    );
    fireEvent.click(container.querySelector('.member-info-img-cont') as Element);
    fireEvent.click(container.querySelector('.member-info-text-cont') as Element);
    expect(onClickedMember).toHaveBeenNthCalledWith(1, '42438');
    expect(onClickedMember).toHaveBeenCalledTimes(2);
    await waitFor(() => {
      expect(container.querySelector('img')).toHaveAttribute('src', 'https://photos.example.com/9.jpg');
    });
    fireEvent.click(container.querySelector('.orbit-icon-phone') as Element);
    expect(onClickedPhone).toHaveBeenCalledWith(
      '+54 555 0102',
      'Elsa Pérez',
      '252',
      '9',
      'https://photos.example.com/9.jpg',
    );
  });

  it('no signed URL: the User image', async () => {
    const { container } = render(<Card_MemberInformation inMemberInformation={member} />);
    await waitFor(() => {
      expect(container.querySelector('img')?.getAttribute('src')).toContain('Connect2_LegacyShared.User.png');
    });
  });

  it('name and location: household locality wins when both parts are set; In_HideMemberInfoLocation hides it', () => {
    const { container, rerender } = render(
      <Card_MemberInformation
        inMemberInformation={{ ...member, Locality: 'Monte Hermoso', CountryCode: 'AR' }}
        inHouseholdLocality="Bahia Blanca"
        inHouseholdCountryCode="AR"
      />,
    );
    expect(container.querySelector('.member-info-name')?.textContent).toBe('Mrs Elsa Pérez');
    expect(container.querySelector('.member-info-location')?.textContent).toBe('Bahia Blanca - AR');
    rerender(<Card_MemberInformation inMemberInformation={{ ...member, Locality: 'Monte Hermoso' }} />);
    expect(container.querySelector('.member-info-location')?.textContent).toBe('Monte Hermoso');
    rerender(<Card_MemberInformation inMemberInformation={member} inHideMemberInfoLocation />);
    expect(container.querySelector('.member-info-location')).toBeNull();
  });

  it('dot needs In_DisplayDot and householder or spouse; spouse counts', () => {
    const { container, rerender } = render(
      <Card_MemberInformation inMemberInformation={{ IsSpouse: true }} inDisplayDot />,
    );
    expect(container.querySelector('.member-info-img-dot')).not.toBeNull();
    rerender(<Card_MemberInformation inMemberInformation={{ IsSpouse: true }} />);
    expect(container.querySelector('.member-info-img-dot')).toBeNull();
    rerender(<Card_MemberInformation inMemberInformation={{}} inDisplayDot />);
    expect(container.querySelector('.member-info-img-dot')).toBeNull();
  });

  it('admin tag placeholder, indented age, long age text style, personal info hidden', () => {
    const { container, rerender } = render(
      <Card_MemberInformation
        inMemberInformation={{ ...member, Age: '104' }}
        inShowAdminTag
        placeholderOrbitAdmin={<b>Admin</b>}
      />,
    );
    expect(container.querySelector('.member-info-admin-tag')?.textContent).toBe('Admin');
    expect(container.querySelector('.member-info-age-cont')).toHaveStyle({ marginLeft: 'var(--space-s)' });
    expect(container.querySelector('.member-info-age-text')).toHaveStyle({ fontSize: '0.8em', justifySelf: 'start' });
    rerender(<Card_MemberInformation inMemberInformation={{ ...member, Age: '0' }} />);
    expect(container.querySelector('.member-info-admin-tag')).toBeNull();
    expect(container.querySelector('.member-info-age-cont')).toBeNull();
    rerender(<Card_MemberInformation inMemberInformation={member} isShowPersonalInfo={false} />);
    expect(container.querySelector('.member-info-data-right-cont')).toBeNull();
    expect(screen.queryByText('58')).toBeNull();
  });
});
