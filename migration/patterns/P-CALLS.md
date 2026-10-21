# P-CALLS: Same calls as the original

- Status: accepted
- Applies when: the route has server calls
- Reference: route AcceptPendingPolicies: `app/src/screens/AcceptPendingPolicies/api.ts`, `app/src/screens/AcceptPendingPolicies/components/actions.ts`
- Fingerprint: f7f29491af493962

## Rules
- Call the same actions in the same phase as the capture (analysis/calls.json).
  - Call data actions when the user enters the route.
  - Call server actions on the same user events and in the same order.
  - Use the original input parameter names.
- route.py parity checks call parity.

## Notes
Add notes below this line; stack.py keeps them only through `pattern reference`.
