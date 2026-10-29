import { afterEach, describe, expect, it, vi } from 'vitest';
import { pageRedirect } from '@/platform/feedback/pageRedirect';
import { navigateToMaps } from '@/lib/legacyShared/actions';
import { MapNavigationRedirect } from '@/lib/legacyShared/staticEntities';
import { extractChildrenNamesFromCaptions, hostInformationOnClickAddress } from './actions';

vi.mock('@/platform/feedback/pageRedirect', () => ({ pageRedirect: vi.fn() }));
vi.mock('@/lib/legacyShared/actions', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/legacyShared/actions')>()),
  navigateToMaps: vi.fn(),
}));

afterEach(() => {
  vi.clearAllMocks();
});

/* ExtractChildrenNamesFromCaptions (Connect2_OrbitMobile_MUI.controller.js:1381-1401) and OnClick_Address of
   HostInformation (HostInformation.mvc.js:571-662). Fictional captions and address. */
describe('extractChildrenNamesFromCaptions', () => {
  it('keeps the children line between "<nobr><strong>" and the next "<br />"', () => {
    expect(
      extractChildrenNamesFromCaptions(
        '<div>Ricardo &amp; Lucía FERNÁNDEZ<br /><nobr><strong>Tomás</strong></nobr><br />Azul</div>',
      ),
    ).toBe('<nobr><strong>Tomás</strong></nobr>');
  });

  it('keeps the rest of the part when no "<br />" follows', () => {
    expect(extractChildrenNamesFromCaptions('<div>Ana ROJAS<br /><nobr><strong>Lía</strong></nobr></div>')).toBe(
      '<nobr><strong>Lía</strong></nobr>',
    );
  });

  it('gives "" without the children part, for an empty caption, or with "</div>" first', () => {
    expect(extractChildrenNamesFromCaptions('<div>Ana ROJAS<br />Tandil</div>')).toBe('');
    expect(extractChildrenNamesFromCaptions('')).toBe('');
    expect(extractChildrenNamesFromCaptions('</div><br /><nobr><strong>Lía')).toBe('');
  });
});

describe('hostInformationOnClickAddress', () => {
  const ADDRESS = 'Avenida Mitre 1260, Azul, Buenos Aires';

  it('opens Google Maps directions in the browser with the address and the country, commas replaced', () => {
    vi.mocked(navigateToMaps).mockReturnValue(0);
    hostInformationOnClickAddress(ADDRESS, 'Argentina');
    // generateScreenURL (shared) adds the api and query parameters to the destination.
    const url = vi.mocked(pageRedirect).mock.calls[0]?.[0] ?? '';
    expect(url.startsWith('https://www.google.com/maps/dir/?api=1')).toBe(true);
    expect(url).toContain(`query=${encodeURIComponent('Avenida Mitre 1260  Azul  Buenos Aires, Argentina')}`);
  });

  it('uses geo: on an Android browser and comgooglemaps: on an iPhone browser', () => {
    vi.mocked(navigateToMaps).mockReturnValue(MapNavigationRedirect.AndroidBrowser);
    hostInformationOnClickAddress(ADDRESS, 'Argentina');
    expect(vi.mocked(pageRedirect).mock.calls[0]?.[0]).toMatch(/^geo:0,0\?q=/);
    vi.mocked(navigateToMaps).mockReturnValue(MapNavigationRedirect.IPhoneBrowser);
    hostInformationOnClickAddress(ADDRESS, 'Argentina');
    expect(vi.mocked(pageRedirect).mock.calls[1]?.[0]).toMatch(/^comgooglemaps:\/\/\?q=/);
  });
});
