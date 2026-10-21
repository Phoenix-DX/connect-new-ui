# P-MUTATION: Mutations keep state

- Status: accepted
- Applies when: the route creates, updates or deletes data, or reads data another route changes
- Reference: route AcceptPendingPolicies: `app/src/screens/AcceptPendingPolicies/mocks.ts`, `app/src/screens/AcceptPendingPolicies/components/actions.ts`
- Fingerprint: 75e630f2e4f91d70

## Rules
- Seed a collection from the fixture or the fictional data, with src/mocks/store.ts, and keep the data that a mutation changes in it.
- Make list and detail handlers read the collection with statefulHandler. Make mutation handlers change it. Then a saved item appears where the original shows it.
- Give the answer of the mutation the recorded/captured shape.

## Notes
Add notes below this line; stack.py keeps them only through `pattern reference`.
