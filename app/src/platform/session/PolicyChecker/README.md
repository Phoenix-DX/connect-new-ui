# Policy_Checker

OutSystems: `UBTConnect.App_Policies.Policy_Checker` · pack `migration/blocks/UBTConnect.App_Policies.Policy_Checker.md`
(survey only: compiled source in `capture/survey-UBTConnect.json`)

Inputs: none. Events: none. Placeholders: none. Renders an empty wrapper (compiled view).

On initialize, when `UBTConnect.App_Policies_HasPolicyToAccept` is set (by `getUserInformation()` from
`HasPoliciesToAccept`; mock user `?mockuser=policies`), it calls `resetReplaceOnUpcomingNavigation()` and navigates to
`/UBTConnect/AcceptPendingPolicies` (push). CommonUI renders it only when not `In_IgnorePolicy` and the flag is set
(spec section 9, CUI:240): that condition belongs to the caller.

## Captured variants (0)

Never rendered on TST (no pending policy). Markup and behaviour from the compiled view/controller, tested in
`Policy_Checker.test.tsx`; story `Default` shows the empty wrapper.
