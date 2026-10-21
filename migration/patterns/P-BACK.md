# P-BACK: Back navigation and view cache

- Status: accepted
- Applies when: the original restores the view from cache on back
- Reference: route AcceptPendingPolicies: `app/src/screens/AcceptPendingPolicies/index.tsx`
- Fingerprint: 90d2c875a2662794

## Rules
- Use the view-cache helper of the shell.
- Show no spinner when the screen restores the view.
- Refresh the data in the background, as the original does.

## Notes
Add notes below this line; stack.py keeps them only through `pattern reference`.
