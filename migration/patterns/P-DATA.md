# P-DATA: Server data in a route

- Status: accepted
- Applies when: the route calls data or server actions
- Reference: route AcceptPendingPolicies: `app/src/screens/AcceptPendingPolicies/api.ts`, `app/src/screens/AcceptPendingPolicies/types.ts`
- Fingerprint: 6aeb0c4381d1c937

## Rules
- api.ts exports one function per action. Each function calls callAction(module, action, inputs) and maps the wire shape with os-wire helpers
- components use TanStack Query hooks defined in api.ts
- query keys are [<Screen>, <Action>, inputs]
- components never see wire shapes

## Notes
Add notes below this line; stack.py keeps them only through `pattern reference`.
