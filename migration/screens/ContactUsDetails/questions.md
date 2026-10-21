# Questions: ContactUsDetails

Managed by route.py. Facts may be answered by the OutSystems MCP; decisions and reviews only by the user.

## Q1 [decision] signed-out form branch (answered)
- Question: The signed-out branch (isLogged False: Full Name, Email, Phone Number, Country dropdown, Locality fields, the italic 'All fields are required.' line, and OnReady → DataAction_GetCountriesNames) is reachable (Login → ContactUsMenu → ContactUsDetails) but no capture renders it and GetCountriesNames was never recorded. How should the route build it?
- Evidence: ContactUsDetails.mvc.js view :567-1040 ($if !isLogged), controller ScreenEvent_OnReady (Refresh DataAction_GetCountriesNames when not isLogged); dom/default.html shows only the signed-in branch; mocks/fixtures/index.json has no GetCountriesNames
- OutSystems MCP: not available to route agents
- Options: A: render the five fields as one NotCaptured (labels listed), build 'All fields are required.' (shared CustomContainer, compiled options) and keep the logic (OnReady GetCountriesNames with a fictional empty Countries list, the signed-out IsFormFilled/IsAnyFilled rules and validations) | B: build the five fields from the compiled view (OS Input / custom-mode Dropdown markup not captured on this route) | C: add a signed-out capture state first, then build (recommended: A)
- Answer (user, 2026-10-15T20:40:10): A (recommended), auto-accepted (user instruction 2026-10-15 16:59): signed-out branch as one NotCaptured, logic kept, GetCountriesNames fictional empty list

## Q2 [decision] feedback & rating subject (answered)
- Question: For In_ContactSubjectId = 'General Suggestions, Feedback & Rating' (Rate_ShowRate) the screen shows the ContactUs_Rate block and an IconText checkbox 'I would like to be contacted about my feedback.'; neither is captured and ContactUs_Rate is not built. How should the route build it?
- Evidence: ContactUsDetails.mvc.js view :545-566 (ContactUs_Rate), :1121-1185 (IconText + Icon checkbox / checkbox_outline_blank); controller ScreenEvent_OnInitialize Rate_ShowRate; states.json: only the 'Set up a UBT One account' subject captured
- OutSystems MCP: not available to route agents
- Options: A: ContactUs_Rate as NotCaptured (RateSelected logic kept), the checkbox IconText built from the shared IconText/Icon with the compiled inputs | B: build ContactUs_Rate from its compiled view in components/ | C: add a capture state for that subject first (recommended: A)
- Answer (user, 2026-10-15T20:40:10): A (recommended), auto-accepted (user instruction 2026-10-15 16:59): ContactUs_Rate NotCaptured; contacted-about-feedback checkbox built from shared IconText/Icon

## Q3 [review] review round 1 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Q1 → A (pending orchestrator answer): signed-out fields as one NotCaptured; logic kept; GetCountriesNames answers a fictional empty list.; Q2 → A (pending orchestrator answer): ContactUs_Rate as NotCaptured; the contact checkbox built from shared IconText/Icon with the compiled inputs.; SendContactUsMessage is a write: mocked (P-MUTATION collection `ContactUsDetails.sentMessages`, Out_ErrorMessage ""); the Out_ErrorMessage branch is only reachable with a real server; the `error` scenario gives HTTP 500 → the AllExceptions message.; Dialog_Information, Dialog_Navigation and the call popup open states are not captured: built from the compiled views with shared blocks.; GetLocalityTimezone is sent the screen variables of the recording without the user's form data (the recording dropped them); the mock serves the only recording.; `maxlength` 500 and the label's `for` follow the compiled view (MaxLength, TargetWidget); the captures drop both attributes. Feature flags: clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-15T23:15:52): confirm (auto-confirmed: user instruction 2026-10-15 16:59)

## Q4 [review] review round 2 (answered, blocking)
- Question: Please test this route and confirm, or tell me what to change. Decisions to confirm: Q1 → A (pending orchestrator answer): signed-out fields as one NotCaptured; logic kept; GetCountriesNames answers a fictional empty list.; Q2 → A (pending orchestrator answer): ContactUs_Rate as NotCaptured; the contact checkbox built from shared IconText/Icon with the compiled inputs.; SendContactUsMessage is a write: mocked (P-MUTATION collection `ContactUsDetails.sentMessages`, Out_ErrorMessage ""); the Out_ErrorMessage branch is only reachable with a real server; the `error` scenario gives HTTP 500 → the AllExceptions message.; Dialog_Information, Dialog_Navigation and the call popup open states are not captured: built from the compiled views with shared blocks.; GetLocalityTimezone is sent the screen variables of the recording without the user's form data (the recording dropped them); the mock serves the only recording.; `maxlength` 500 and the label's `for` follow the compiled view (MaxLength, TargetWidget); the captures drop both attributes. Feature flags: clientVar:App_PIN_BiometricEnabled → not a flag (false positive): user setting for biometric unlock, kept in a client variable; behaviour built as in the original (user, 2026-10-14)
- Evidence: route-spec.md, parity reports, feedback.md
- Options: confirm | change (say what)
- Answer (user, 2026-10-16T01:28:43): confirm (auto-confirmed: user instruction 2026-10-15 16:59)
