# P-OSUI: OutSystems UI patterns

- Status: accepted
- Applies when: the route renders an OutSystems UI pattern block (survey/osui.md)
- Reference: route HomeFeed: `app/src/screens/HomeFeed/components/FeedBlock_Services.tsx`
- Fingerprint: f48153152b460cf2

## Rules
- Use the shared component src/shared/osui/<Pattern> (tag @os-block OutSystemsUI.<Flow>.<Block>).
  - The foundation owner builds it once.
  - The pattern's inputs are props. The pattern's events are callbacks.
- The shared component renders the same DOM and osui-* classes as the capture in every captured state (open, closed, selected, disabled).
- The shared component reproduces the behaviour (open/close, keyboard, selection, events).
- A provider library (date picker, dropdown search, carousel, slider) is the one that the user chose in stack item osui:<Pattern>.
- Do not make a route-local version.

## Notes
Add notes below this line; stack.py keeps them only through `pattern reference`.
