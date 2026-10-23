import { MOCKS_BUILT } from '@/platform/config/config';
import { mockAuth } from './mockAuth';
import type { AuthProvider } from './provider';

/** The identity provider of this build: mockAuth in mock builds (dev, mock build, demo), none in production builds
    until a production provider exists (bffAuth, not part of the refactor; plan v2 §3.2). MOCKS_BUILT is a build-time
    constant, so production builds drop mockAuth and what it imports (build/mockFree.ts checks it). */
export function authProvider(): AuthProvider | null {
  return MOCKS_BUILT ? mockAuth : null;
}
