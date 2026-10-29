import type { RequestHandler } from 'msw';
import { contractHandler } from '@/mocks/contract';

/* Mocks of PassportScan (not captured, user decision I10-2 (a)).
   DataActionGetConfigs of ScreenBlock_PassportScan: fictional. BaseURL is the local fake portal
   (public/mock-embeds/orbit-passport.html, left out of production builds with the other mock embeds); it ends with
   "#", so the loader's `<BaseURL>/passport` opens the static page at `#/passport` without a dev-server rule. The
   token and the B2C values are fictional texts, never a real token. A read only, typed by the contract
   (contractHandler; the operation came with the regeneration of I10-6). Scenarios: real, loading (no answer),
   error (500). */
export const PASSPORT_SCAN_MOCK_CONFIGS = {
  Token: 'demo-b2c-id-token.not-a-real-token',
  B2CTenant: 'ubtconnect-demo.example',
  B2CClientId: '00000000-0000-4000-8000-00000000d3m0',
  B2CPolicy: 'B2C_1A_DEMO_SIGNIN',
  TokenType: 'ubt-one',
} as const;

/** The fake portal as BaseURL, on the app's own origin. */
export const mockPortalBaseUrl = (): string =>
  `${new URL(`${import.meta.env.BASE_URL}mock-embeds/orbit-passport.html`, window.location.origin).href}#`;

export const handlers: RequestHandler[] = [
  contractHandler('OrbitPassportScanC2', 'ScreenBlock_PassportScan/DataActionGetConfigs', () => ({
    ...PASSPORT_SCAN_MOCK_CONFIGS,
    BaseURL: mockPortalBaseUrl(),
  })),
];
