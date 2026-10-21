# P-MOCKS: Mocks and scenarios

- Status: accepted
- Applies when: the route has server calls
- Reference: route AcceptPendingPolicies: `app/src/screens/AcceptPendingPolicies/mocks.ts`
- Fingerprint: c031563d76ca10bd

## Rules
- mocks.ts exports MSW handlers for POST /api/<Module>/<Action>
- when the stack uses recorded fixtures, a recorded action uses recordedHandler(module, action) from src/mocks/fixtures; the adapter sends the OutSystems input names
- an action or branch never recorded gets fictional data with captured counts and shapes
- never hand-edit a fixture
- scenario() selects real/empty/error and one scenario per captured state
- mockDelay() on every handler

## Notes
Add notes below this line; stack.py keeps them only through `pattern reference`.
