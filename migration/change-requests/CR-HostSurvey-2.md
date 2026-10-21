# CR-HostSurvey-2: shared OSUI Accordion — items that start expanded together stay open

- Status: applied
- Raised by: HostSurvey (route-hostsurvey), 2026-10-16
- Block: `app/src/shared/osui/Accordion/accordionContext.ts` (createAccordionParent.add), `AccordionItem.tsx`
- Other routes using it: every Accordion with MultipleItems False and more than one item with StartsExpanded True
- Related question: none (fact from the capture)

## Evidence
- Original: ScreenBlock_HostSurvey Accordion `b2-$b21` (HS view :2000-2016: only ExtendedClass, MultipleItems
  default False) with two AccordionItems StartsExpanded True (Accommodation :2022-2027, Meal Options :2224-2229).
- Captured: both items open (`osui-accordion-item--is-open`, `__content--is-expanded`, aria-expanded true;
  `migration/screens/HostSurvey/analysis/dom/default.html:166-180` and the Meal Options item).
- Clone: `createAccordionParent.add` closes the other open items when an open item is added
  (accordionContext.ts:33-35), so the first item is closed. Parity (diagnostic run with the proposed cloneQuery):
  `[class] div#b2-b22-AccordionItem: missing .osui-accordion-item--is-open extra .osui-accordion-item--is-closed`,
  `[attr] aria-expanded: true → false`, `[class] b2-b22-ContentWrapper: missing --is-expanded`, and the layout /
  position / pixel differences of the hidden rooms list.

## Expected change
Check the OSUI provider (runtime-sources/OutSystemsUI_2_23.OutSystemsUI.js Accordion addAccordionItem / AccordionItem
build, :4066-4245, :4381-4386): items built with StartsExpanded must not close each other at build time; only a
later open (user click) closes the others when MultipleItems is False.

## Workaround in the route until applied
None (the route keeps the original inputs; the difference stays in its parity report).

## Resolution (foundation owner, F14, 2026-10-16)
- Root cause is in the route, not in the shared block: the compiled HostSurvey view passes **MultipleItems: true** to
  the Accordion (HS view :2000-2004: `inputs: { MultipleItems: true, ExtendedClass: "orbit-host-survey-accordion" }`);
  the evidence above ("MultipleItems default False") misread it. The clone passed no `multipleItems`, so the default
  False applied. Fixed in `ScreenBlock_HostSurvey.tsx`: `<Accordion … multipleItems …>`.
- The shared Accordion is already faithful and stays unchanged: OSUI closes the other open items also at build time.
  The Accordion is created in its OnInitialize (OutSystemsUI_2_23.Content.Accordion.mvc.js :278-312, AccordionCreate),
  before the items build in their OnReady (AccordionItem.mvc.js :513-521 → build, OutSystemsUI.js :4524-4531 →
  _setAccordionParent :4379-4384 → notifyParent(Add)); addAccordionItem (:4088-4098) calls
  triggerAccordionItemClose when the added item is open (_isOpen = StartsExpanded, :4253), which returns early only
  when MultipleItems (triggerAccordionItemClose :4158-4161) and otherwise closes every other open item. So with MultipleItems False two
  StartsExpanded items do close each other on init, as `createAccordionParent.add` does; with True nothing closes,
  also not on a click (open() → Click → same check).
- Other users of `@os-block OutSystemsUI_2_23.Content.Accordion`: none (only HostSurvey imports shared/osui/Accordion;
  Accordion_Orbit and DEPRECATED_Accordion are other blocks).
- Parity HostSurvey: structure, class, attr, text, style, layout, position and calls 0 (both items open). Left: pixel
  9.26% from the header — the masked one-line title of the capture vs the fictional title on two lines plus the missing
  back arrow (VIA-BACK-MENUICON-HOSTSURVEY covers only class/style/layout/position), which moves everything below the
  header 15 px. Other Orbit routes accept this with a CAPTURE-VIA-MASK-SHIFT-<route>-PIXELS rule; HostSurvey needs the
  same rule (parity-exemptions.json, not edited here).
