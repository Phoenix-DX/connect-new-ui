# P-FLAGS: Feature flags

- Status: accepted
- Applies when: the route reads a feature flag (flags.py route <S>)
- Reference: route HomeFeed: `app/src/screens/HomeFeed/components/FeedBlock_Services.tsx`, `app/src/screens/HomeFeed/components/FeedBlock_Updates.tsx`
- Fingerprint: 5f09654ce10e8fa5

## Rules
- read flags only with useFlag/useFlagOn from src/lib/flags, with the key of the user's decision
- build the branches the decision says (both: every value renders exactly its captured variant state
- default-only: only the default branch, the other renders nothing)
- never hard-code a value
- switch the decided values with ?ff=Key:value or the flag panel (?ffpanel=1)

## Notes
Add notes below this line; stack.py keeps them only through `pattern reference`.
