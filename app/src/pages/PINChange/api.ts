/* PINChange calls no data or server action itself (p:UBTConnect.App_PIN.PINChange.mvc.js:348 `dataFetchActionNames = []`).
   The calls of its capture come from the shell's app start (SynchAppContext … CacheableHouseholds, calls.md #1-7); the
   PIN check and change go through the shared PIN blocks and the shell's mock PIN (see route-spec.md "Data"). */
export {};
