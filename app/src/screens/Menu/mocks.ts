import { http, HttpResponse, type RequestHandler } from 'msw';
import type { ActionOutputs, PathOf } from '@/api/client/callAction';
import { contractHandler } from '../../mocks/contract';
import { fixtureData } from '../../mocks/fixtures';
import { mockDelay, scenario } from '../../mocks/scenario';
import { mockUserInformation, mockUserToggles } from '@/platform/session/mockUser';
import { Connect_Entity } from '../../shared/UBTConnect_Utils/lib/staticEntities';
import { mockSignedImageURL } from '../../shared/UBTConnect_Utils/UBT_LazyImage/mocks';

/* Menu mocks (P-MOCKS).
   - ActionRequestPhotoUpdate: never recorded (a write, blocked on TST); fictional answer Out_IsSuccess = True (contract
     x-mock-source fictional). It changes nothing the app shows, so nothing is stored (Q2 → A, pending).
   - Scenario `householder` (?mock=householder, Q1 → A, pending): the TST account captured on Menu is a householder (the
     "Request Photo Update" row is kept, dom/default.html:309; Menu.mvc.js:845-856). This scenario answers the shared
     CacheControl_UserInfo/DataActionGetCacheInfo with the shell's mock user with the householder toggle on (the shell
     handler, src/shell/mocks.ts, with ?mockuser=householder) and a member photo: the TST record had a signed photo URL
     (the avatar rendered an image, dom/default.html:62-63, and no GetSignedImagesInBulk was called, calls.md), so the
     photo is the neutral placeholder of the Q-W2C-1 rule (mockSignedImageURL). Every other scenario falls through to the
     shell handler.
   Other scenarios: real, empty, error, loading (src/mocks/scenario.ts). */
type UserInfoCacheOutput = ActionOutputs<PathOf<'UBTConnect_Utils', 'CacheControl_UserInfo/DataActionGetCacheInfo'>>;

const householderUserInfoCache = http.post(
  '/api/UBTConnect_Utils/CacheControl_UserInfo/DataActionGetCacheInfo',
  async () => {
    if (scenario() !== 'householder') return undefined;
    await mockDelay();
    const recorded = fixtureData(
      'UBTConnect_Utils',
      'CacheControl_UserInfo/DataActionGetCacheInfo',
    ) as UserInfoCacheOutput;
    const user = mockUserInformation({ ...mockUserToggles(), householder: true });
    const current = user.Directory_UserCurrent;
    const member = current.Directory_UserCurrent_Member;
    const photo = { ...member.Photo, SignedURL: mockSignedImageURL(current.MemberID, Connect_Entity.Member) };
    const data: UserInfoCacheOutput = {
      ...recorded,
      CacheControl_Response: {
        ...recorded.CacheControl_Response,
        Directory_UserCurrent: { ...current, Directory_UserCurrent_Member: { ...member, Photo: photo } },
        HasPoliciesToAccept: user.HasPoliciesToAccept,
      },
    };
    return HttpResponse.json({ data });
  },
);

export const handlers: RequestHandler[] = [
  contractHandler('UBTConnect', 'ActionRequestPhotoUpdate', () => ({ Out_IsSuccess: true })),
  householderUserInfoCache,
];
