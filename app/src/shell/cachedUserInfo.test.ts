import { beforeEach, describe, expect, it } from 'vitest';
import { signIn, signOut } from './auth';
import { appManager_GetCachedUserInfo, appManager_SetCachedUserInfo } from './cachedUserInfo';
import { getClientVar, setClientVar } from './session';
import { MOCK_USER_ID } from './mockUser';
import { applyTestSession } from './testSession';
import { freshPage } from './testSupport';

describe('AppManager_GetCachedUserInfo / AppManager_SetCachedUserInfo (CR-AcceptPendingPolicies-2)', () => {
  beforeEach(() => {
    freshPage();
    window.history.replaceState(null, '', '/');
  });

  it('gives the empty record while AppManager_UserExtended is empty or unreadable', () => {
    const empty = appManager_GetCachedUserInfo();
    expect(empty.CountryCode).toBe('');
    expect(empty.isCommunityMember).toBe(false);
    setClientVar('UBT_AppManager.AppManager_UserExtended', '{not json');
    expect(appManager_GetCachedUserInfo()).toEqual(empty);
  });

  it('round-trips the record through the client variable; missing or mistyped fields keep their default', () => {
    appManager_SetCachedUserInfo({ CountryCode: 'AR', isCommunityMember: true });
    expect(JSON.parse(getClientVar('UBT_AppManager.AppManager_UserExtended'))).toMatchObject({
      CountryCode: 'AR',
      isCommunityMember: true,
      Country: '',
    });
    expect(appManager_GetCachedUserInfo()).toMatchObject({ CountryCode: 'AR', isCommunityMember: true, Email: '' });

    setClientVar('UBT_AppManager.AppManager_UserExtended', '{"CountryCode":7,"Locality":"X","Other":"y"}');
    const rec = appManager_GetCachedUserInfo();
    expect(rec.CountryCode).toBe('');
    expect(rec.Locality).toBe('X');
    expect(rec).not.toHaveProperty('Other');
  });

  it('the mock sign-in and the test session store CountryCode only; logout clears it', async () => {
    await signIn();
    expect(JSON.parse(getClientVar('UBT_AppManager.AppManager_UserExtended'))).toMatchObject({
      CountryCode: 'AR',
      FirstName: '',
      LastName: '',
      MemberId: '',
      Locality: '',
      Country: '',
      Email: '',
    });
    await signOut();
    expect(getClientVar('UBT_AppManager.AppManager_UserExtended')).toBe('');

    window.history.replaceState(null, '', '/UBTConnect/AcceptPendingPolicies?mocksession=unlocked');
    await applyTestSession();
    expect(appManager_GetCachedUserInfo().CountryCode).toBe('AR');
  });

  it('merges the mock user identity from memory while signed in (CR-OrbitAdminLanding-1, CR-QRCodeGenerate-1)', async () => {
    await signIn();
    expect(appManager_GetCachedUserInfo()).toMatchObject({
      CountryCode: 'AR',
      FirstName: 'Matías',
      LastName: 'Vitale',
      MemberId: MOCK_USER_ID,
      Locality: 'Bahia Blanca',
      Country: 'Argentina',
      Email: '',
      Phone: '',
      Username: '',
      ContactBaseId: '',
      UserExternalId: '',
    });
    // nothing of the identity reaches browser storage
    const values = (store: Storage) =>
      Array.from({ length: store.length }, (_, i) => store.getItem(store.key(i) ?? '') ?? '').join('\n');
    const stored = values(window.localStorage) + values(window.sessionStorage);
    expect(stored).not.toContain('Matías');
    expect(stored).not.toContain('Vitale');
    expect(stored).not.toContain('Bahia Blanca');
    await signOut();
    expect(appManager_GetCachedUserInfo().FirstName).toBe('');
  });
});
