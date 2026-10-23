# Dev report: P5-1 api/client

## Result
status: pass
summary: Added `ApiError` (kind and the OutSystems exception as `cause`) in `api/client/apiError.ts`, with the mapping in
both directions in `legacy/os/os-exceptions.ts`. Added `signedOutRemotely()` (`platform/session/auth.ts`), which
`ShowExceptionMessage` ForceLogout now calls. A test shows that its end state equals the end state of `signOut()`.
`callAction` is not changed. All quick checks pass.

## Files changed
app/src/legacy/os/os-exceptions.ts
app/src/legacy/os/os-exceptions.test.ts
app/src/api/client/apiError.ts
app/src/api/client/apiError.test.ts
app/src/platform/session/machine.ts
app/src/platform/session/machine.test.ts
app/src/platform/session/auth.ts
app/src/platform/session/auth.test.ts
app/src/platform/feedback/exceptionMessages.ts
migration/refactor/handoffs/P5-1/dev.md

## Commands run
npm --prefix app run typecheck → exit 0
cd app && npx vitest run src/platform/session src/platform/feedback src/platform/auth src/api/client src/legacy/os src/mocks/contract.test.ts src/app → exit 0, 33 files, 240 tests passed
cd app && npx eslint (the 9 changed code files) → exit 0
npm --prefix app run format:check → exit 0
npm --prefix app run arch → exit 0, 0 errors, 210 warnings (the same count as before the step; no warning in a changed file, no cycle)

## Deviations from the brief
- Q1 answered: option C (rf Q12, Opus, high confidence, under the user's overnight delegation).
  - `signedOutRemotely()` in `platform/session/auth.ts` is the single entry point for "the server ended the
    session". It runs Connect_Logout and sends the new machine event `signedOutRemotely` (any signed-in status →
    signedOut, the same transition as `signOut`).
  - `signOut()` and `signedOutRemotely()` share one Connect_Logout body (`connectLogout(event)`). The steps keep their
    order. Only the session event is different.
  - The only caller is the forced-logout branch of `showExceptionMessage` (`exceptionMessages.ts:123`), which before
    called `signOut()`. The redirect after it is unchanged.
  - Proof: `auth.test.ts` runs `signOut()` and then `signedOutRemotely()` on the same signed-in device, with a PIN, a
    persistent client variable, two memory-cache entries and local-note rows. Both runs give the same end state:
    status sequence, machine status, shell state, PIN, the full localStorage and sessionStorage, caches, IndexedDB
    rows, and server calls (`ActionAppManager_SynchAppContext` only). There is no difference.
- The 401 and SecurityException triggers wait for the BFF (bffAuth). `callAction` and `raiseToFlowHandler` call
  nothing new. The App_Common SecurityException branch (signed in: ForceLogout; anonymous:
  `Login?In_IsFromInvalidPermissions=True`) is not ported. It is the known gap G1 in
  `migration/refactor/followups.md`, for the user to decide outside the refactor.
- The plan names `legacy/os/osExceptions.ts`. The file is `legacy/os/os-exceptions.ts` (plan §2.2, the move of P1-3).
  P5-1 is a change step, so the file keeps its name. The mapping is in that file.
- `ApiErrorKind` is declared in `legacy/os/os-exceptions.ts` and re-exported by `api/client/apiError.ts`. If the type
  were in `api/client`, `legacy/os` would import `api/client` and make an import cycle (dependency-cruiser counts type
  imports: `tsPreCompilationDeps: true`).
- `callAction` is not changed. The mapping reads a 401 from the text `Request failed with status 401`. `callAction`
  builds this text, and the runtime uses the same text (OutSystems.js:3). `REQUEST_FAILED` (a new constant) is equal to
  the literal in `callAction`. A test of `callAction` offline checks that they agree (`apiError.test.ts`).
- Kinds:
  - timeout: CommunicationException 'The connection has timed out'.
  - network: CommunicationException 'Request failed with an error'.
  - security: SecurityException and its subclasses, or status 401.
  - viewChanged: ViewHasChangedException.
  - server: all other exceptions, and the other statuses that are not ok.
- Reverse direction: `exceptionOfApiErrorKind(kind, message, specificType)`, which `ApiError.ofKind` uses.
  `asApiError(unknown)` wraps an OutSystems exception. For other errors it returns null.

## Questions for the user
none
