# Version

OutSystems: `UBTConnect.App_Common.Version` · pack `migration/blocks/UBTConnect.App_Common.Version.md`

Inputs: none. Events: none. Placeholders: none. A CustomText (colour `inherit`) with the local Version: OnReady calls
`get_ConnectVersionDetails()` (`../../UBTConnect_Utils/lib/actions.ts`: server action `ActionGet_RuntimeVersion`
through `callAction`, recorded mock). OnReady builds "App version" + " " + upper-case environment (when set) + " " + native
version (when set) + " (" + runtime version + ")" (when not 0).

## Captured variants (1 distinct; 2 tested)

| Capture | Source               | What it shows                       |
| ------- | -------------------- | ----------------------------------- |
| v1      | Login/default (pack) | wrapper                             |
| v2      | Login/default        | text options (text masked: 4 words) |

## Not settled

- Environment: the original reads the client variable `UBT_AppManager.OutSystems_Environment` (set from
  `AppManager_ClientCache.Environment` by AppManager_SynchAppContext, AM:5039); the TST text has 4 words (environment
  included). The shell does not keep that variable, so the text is "App version (N)" until it does.
- Native version: AppVersionPlugin has no browser implementation; empty, as in the TST capture.
