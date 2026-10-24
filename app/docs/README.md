# UBTConnect React: documentation

| Page                                              | For                                                                                                                                                                          |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Architecture overview](architecture/overview.md) | quality attributes, C4 diagrams, layers, data flow                                                                                                                           |
| [Getting started](guides/getting-started.md)      | run, test, build, switch mocks and flags                                                                                                                                     |
| [Add or change a screen](guides/screens.md)       | the files of a screen, the rules, how it is verified                                                                                                                         |
| [API and mock data](guides/api-and-mocks.md)      | contract, `callAction`, recorded and fictional data, mutations                                                                                                               |
| [Platform widgets](guides/os-widgets.md)          | validation, popups, lists, radio groups, `NotCaptured`, `OSBlock`                                                                                                            |
| [Shell](guides/shell.md)                          | session, sign-in, PIN, lock, navigation guard, view cache, local storage                                                                                                     |
| [Shared code](guides/shared-code.md)              | shared blocks, OutSystems UI patterns, freeze and change requests                                                                                                            |
| [PWA](guides/pwa.md)                              | build modes, service worker, caching, manifest, demo build, iOS limits                                                                                                       |
| [Device adapters](guides/device.md)               | native features behind `src/platform/device`: barcode scanner (web scanner, `?scanner=web`)                                                                                  |
| [Quality checks](guides/quality.md)               | lint, tests, parity, CI                                                                                                                                                      |
| [Known original bugs](known-original-bugs.md)     | B1-B13: bugs of the original app, each reproduced or deliberately not (see the table)                                                                                        |
| Reference (generated)                             | [stack and ADRs](reference/stack.md) · [screens](reference/screens.md) · [flags](reference/flags.md) · [shared blocks](reference/shared-blocks.md) · [API](reference/api.md) |

The script `python3 migration/tools/docs_gen.py` (run from the project root) generates the reference pages. Do not edit them by hand.
