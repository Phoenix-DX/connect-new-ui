import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Card_MemberInformation_Survey, surveyMemberLocation, surveyMemberName } from './Card_MemberInformation_Survey';
import { HostSurvey_HelperPills, helperLocationText } from './HostSurvey_HelperPills';
import { EMPTY_HELPER } from './hostSurveyHelpers';
import { OrbitNoResults } from '@/components/orbit/OrbitNoResults';

/* The small helper blocks: HostSurvey_HelperPills, Card_MemberInformation_Survey and NoResults. */

const ROLES = [{ Id: 1, Label: 'Usher', JSON_Name: 'USHER', Order: 2, isReadOnly: false }];
const HELPER = {
  ...EMPTY_HELPER,
  MemberId: '91002',
  FirstName: 'Nora',
  LastName: 'Pérez',
  HelperRole: 'USHER',
  LocalityName: 'Bahia Blanca',
  CountryName: 'Argentina',
};

describe('HostSurvey_HelperPills (view $b1, $b2)', () => {
  it('shows "<role>: <first> <last>" and the location pill', () => {
    render(
      <HostSurvey_HelperPills id="b1-$b4" inIsDisabled={false} inHelperRoles={ROLES} inHostSurvey_Helper={HELPER} />,
    );
    expect(screen.getByText('Usher: Nora Pérez')).toBeInTheDocument();
    expect(screen.getByText('Bahia Blanca (Argentina)')).toBeInTheDocument();
    expect(document.getElementById('b1-b4-$b1')).not.toBeNull();
  });
  it('hides the role pill without a role and the location pill without a place', () => {
    render(
      <HostSurvey_HelperPills
        id="b1-$b4"
        inIsDisabled
        inHelperRoles={ROLES}
        inHostSurvey_Helper={{ ...HELPER, HelperRole: '', LocalityName: '', CountryName: '' }}
      />,
    );
    expect(document.querySelectorAll('[data-block="Orbit_Blocks.HostSurvey_PillItem"]')).toHaveLength(0);
  });
  it('builds the location text as the original expression', () => {
    expect(helperLocationText({ ...HELPER, LocalityName: '' })).toBe('Argentina');
    expect(helperLocationText({ ...HELPER, CountryName: '' })).toBe('Bahia Blanca');
  });
});

describe('Card_MemberInformation_Survey', () => {
  it('shows the name and the location, and raises ClickedMember with the HouseholderId', () => {
    let clicked = '';
    render(
      <Card_MemberInformation_Survey
        id="b1-$b3"
        inExtendedClass="background-neutral-2"
        inMemberInformation={{
          MemberId: '91002',
          HouseholderId: '91002',
          FirstName: 'Nora',
          LastName: 'Pérez',
          Locality: 'Bahia Blanca',
          CountryCode: 'Argentina',
        }}
        onClickedMember={(id) => {
          clicked = id;
        }}
      />,
    );
    expect(document.querySelector('.member-info-cont.background-neutral-2')).not.toBeNull();
    screen.getByText('Nora Pérez').click();
    expect(clicked).toBe('91002');
    expect(screen.getByText('Bahia Blanca (Argentina)')).toBeInTheDocument();
  });
  it('wraps the photo in a MultiResolutionImageLoader: the User image while -loading, then the photo (L1, L3)', async () => {
    const photoURL = 'https://publicimageconnect.s3.ap-southeast-2.amazonaws.com/memberMock.png';
    const { container } = render(
      <Card_MemberInformation_Survey
        id="b1-$b3"
        inMemberInformation={{ MemberId: '91002', HouseholderId: '91002', SignedPhotoURL: photoURL }}
      />,
    );
    const loader = container.querySelector('[data-block="Widgets.MultiResolutionImageLoader"]') as HTMLElement;
    expect(loader.id).toBe('b1-b3-$b1');
    expect(loader.parentElement).toHaveClass('member-info-img-cont');
    const root = container.querySelector('#b1-b3-b1-Root') as HTMLElement;
    expect(root.className).toBe('multi-resolution-image-loader multi-resolution-image-loader-loading');
    const userImage = container.querySelector('#b1-b3-b1-Loading img') as HTMLImageElement;
    expect(userImage.className).toBe('member-info-img');
    expect(userImage.getAttribute('src')).toContain('Connect2_LegacyShared.User.png');
    const photo = container.querySelector('#b1-b3-b1-ImagesToLoad img') as HTMLImageElement;
    expect(photo.getAttribute('data-error-placeholder-src')).toBe(userImage.getAttribute('src'));
    await waitFor(() => {
      expect(photo).toHaveAttribute('src', photoURL);
    });
    const complete = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, 'complete');
    Object.defineProperty(HTMLImageElement.prototype, 'complete', { configurable: true, get: () => true });
    try {
      fireEvent.load(photo);
    } finally {
      if (complete) Object.defineProperty(HTMLImageElement.prototype, 'complete', complete);
    }
    expect(root.className).toBe('multi-resolution-image-loader multi-resolution-image-loader-loaded');
    expect(photo.className).toBe('member-info-img multi-resolution-image-loader-loaded');
  });
  it('builds the name and location as the original expressions', () => {
    expect(surveyMemberName({ FirstName: '', LastName: 'Pérez' })).toBe('Pérez');
    expect(surveyMemberLocation({ Locality: '', CountryCode: 'Argentina' })).toBe('Argentina');
  });
});

describe('OrbitNoResults', () => {
  it('renders the icon and the two placeholders', () => {
    render(<OrbitNoResults id="b1-$b7" placeholderTitle="No results for 'x'." placeholderMessage="Try again." />);
    expect(document.querySelector('.no-results-title')?.textContent).toBe("No results for 'x'.");
    expect(document.querySelector('.no-results-message')?.textContent).toBe('Try again.');
  });
});
