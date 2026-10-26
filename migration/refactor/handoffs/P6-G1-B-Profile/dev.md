## Result
status: pass
summary: Profile is now a page, a hook (`useProfile`) with a pure state file (`profileState`), and 9 components. The page renders `HouseholdDetailsContainer` into the preview sheet through a slot, and it reads the household flags. `api.ts`, `types.ts` and `components/actions.ts` are deleted. The page imports `api/country` and `api/member` directly. Typecheck, eslint, prettier, depcruise (0 errors) and 30 Profile tests pass. A temporary test compared the old page and the new page in 6 mock scenarios, with 13 or 14 interaction steps each. The DOM, the call order and the request bodies were the same. The temporary test is deleted.

## Files changed
app/src/pages/Profile/ProfilePage.tsx (rewritten: the page composes the layout, components and container; the flows are in the hook)
app/src/pages/Profile/api.ts (deleted: the page imports `useCountryInfoQuery` from `@/api/country` and `editMemberDetails` from `@/api/member`)
app/src/pages/Profile/types.ts (deleted: `AccountForm` = `MemberAccountForm` of `@/api/member`, in hooks/profileState.ts)
app/src/pages/Profile/components/actions.ts (deleted: folded into hooks/profileState.ts)
app/src/pages/Profile/components/Profile_HouseholdPreview.tsx → app/src/pages/Profile/components/ProfileHouseholdPreview.tsx (git mv, then changed: `@origin` replaces `// @os-block`; the page gives the container through `renderHousehold(id)`, so the file does not import `@/containers` or read flags)
app/src/pages/Profile/staticEntities.ts (new: the TST static-entity values that only Profile uses)
app/src/pages/Profile/hooks/profileState.ts (new: state record, reducer, client actions)
app/src/pages/Profile/hooks/profileState.test.ts (new)
app/src/pages/Profile/hooks/useProfile.ts (new: the screen flows and the validation service)
app/src/pages/Profile/hooks/useProfile.test.tsx (new)
app/src/pages/Profile/components/formOptions.ts (new: the text, padding and column options of the parts)
app/src/pages/Profile/components/FormInput.tsx (new: was `OSInput` in the page)
app/src/pages/Profile/components/FormSwitch.tsx (new: was `OSSwitch` in the page)
app/src/pages/Profile/components/ProfileHeader.tsx (new: container Header)
app/src/pages/Profile/components/ProfileHeader.test.tsx (new)
app/src/pages/Profile/components/ProfileDetailsForm.tsx (new: OSForm DetailsForm; the address section is a slot)
app/src/pages/Profile/components/ProfileDetailsForm.test.tsx (new)
app/src/pages/Profile/components/IdentificationSection.tsx (new: container IdentificationInfo)
app/src/pages/Profile/components/PersonalInformationSection.tsx (new: container PersonalInfo)
app/src/pages/Profile/components/ContactInformationSection.tsx (new: container ContactInfo)
app/src/pages/Profile/components/ProfileFooter.tsx (new: FixedFooter with Close and Save)
app/src/pages/Profile/components/ProfileFooter.test.tsx (new)
app/src/pages/Profile/components/ProfileHouseholdPreview.test.tsx (new)
migration/refactor/handoffs/P6-G1-B-Profile/dev.md (this report)

Unchanged: app/src/pages/Profile/Profile.test.tsx, app/src/pages/Profile/mocks.ts. No shared block, platform, api or docs file changed.

## Commands run
npm --prefix app run typecheck → exit 0
cd app && npx vitest run src/pages/Profile → 7 files, 30 tests passed
cd app && npx vitest run src/pages/Profile src/api/member src/api/country src/containers/HouseholdDetails → 15 files, 89 tests passed
cd app && npx vitest run src/legacy/os/StylesheetHost.test.tsx src/shared/NavigationHandler src/app → 8 files, 41 tests passed
cd app && npx eslint src/pages/Profile → exit 0, no warning
cd app && npx prettier --check src/pages/Profile → all files use Prettier code style
cd app && npx depcruise src --config .dependency-cruiser.cjs --output-type err → 0 errors, 227 warnings (227 before the change)
python3 migration/tools/refactor/arch_baseline.py check → exit 0 (88 warnings, 88 baseline rows, 0 new, 0 gone)
Temporary equivalence test (`src/pages/Profile/zz-equivalence.tmp.test.tsx` with a copy of the old files in `zz-old/`, both deleted). Scenarios: `?mock=real`, `real&mockuser=householder`, `spouse`, `empty`, `error` and `loading`. Steps: invalid email, Save (validation message), valid email, mobile number, Switch2, preview sheet, age switch Cancel then Update Preference, copy icon, Save. Result: the old and new pages had the same DOM after each of the 13 or 14 steps, the same calls in the same order (2 to 10 calls) and the same EditDetails bodies in all 6 scenarios. One check of the harness failed: in the first scenario, two runs of the old page differed. The feedback container that the first run in the process creates moves position. The failure is in the test setup, not in Profile.

## Deviations from the brief
- Branch: the work is in the prefetch worktree `wt-Profile` (branch `rf/prefetch-P6-G1-B-Profile-43946ee`, base 43946ee), as the master told me. It is not on `refactor/architecture`. Nothing is committed. The rename is staged by `git mv`.
- Shape: page + hook + components. No new container: the page has one data source. `HouseholdDetailsContainer` (criterion 1, P2) stays the container, and the page renders it into the `renderHousehold` slot of `ProfileHouseholdPreview`. Term §2.1 says a component does not import a container. `useHouseholdDetailsFlags()` moved from the preview component to the page, because the page reads the flags (page-template).
- The page keeps 2 rule-9 depcruise warnings. They have the same rule and the same targets, and they moved inside `pages/Profile/`: `ProfilePage.tsx → legacy/os/exceptions` is now `hooks/useProfile.ts → legacy/os/exceptions` (the Bubble* flow handler), and `components/actions.ts → legacy/os/os-wire` is now `hooks/profileState.ts → legacy/os/os-wire` (`osList`, `wireList`). The total count did not change (227). To remove them, the step would need changes to `platform/feedback/flowErrors.ts` and to a `lib/` home for the os-wire helpers. The other G1 developers work in parallel and could change the same files, so I did not do it.
- The `NotCaptured` name string `"Profile address section (householder only, Profile.mvc.js:1269-1716; Q1)"` keeps its compiled-line reference. The string is in the DOM (`data-not-captured` and the review text), so a change would change the DOM. The comments of the rewritten files have no compiled-line references.
- The reducer keeps the semantics of the old `useState` closures. Each flow sends the values that it read on render (for example, `original` in `fieldsChanged` and `current` in `userInformationFetched`). The reducer returns the same state object when no value changes, as a `useState` setter does when it gets the same value.
- Edits: I made some exact-string edits with short inline Python replacements, mostly in the new tests. Each replacement checked that it matched once. I did not use the Edit tool or a script in `migration/tools/refactor/` for them, and I did not use `sed -i`. I ran `prettier --write` on the new files only.
- Not done by me (documenter): move-map.csv row 320 (`src/screens/Profile/index.tsx`) needs status `moved` and the shape note. calls-by-domain.md rows 43 and 53 still name `screens/Profile/api.ts` (now `pages/Profile/hooks/useProfile.ts` through `api/member` and `api/country`). page-template.md line 48 says `useCountryInfoQuery` (Profile) has callers "through the re-exports of the old `api.ts` files": Profile now calls it directly. The CHANGELOG needs an entry.

## Questions for the user
none
