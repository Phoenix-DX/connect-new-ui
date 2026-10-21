# CR-HomeFeed-1: UBTConnect_Utils actions — export OpenInApp_OpenExternalLink and OpenInApp_OpenApp

- Status: applied
- Raised by: HomeFeed, 2026-10-15
- Block: UBTConnect_Utils client actions `OpenInApp_OpenExternalLink(Link, …)` and `OpenInApp_OpenApp(PackageName)` →
  `app/src/shared/UBTConnect_Utils/lib/actions.ts`
- Other routes using it (survey sources): OpenExternalLink in App_Common_Blocks.External_Link, App_Menu.Menu,
  Calendar.MyEntertaining_Embedded, Home.FeedBlock_Services; OpenApp in Dialog_GoExternalApp (HomeFeed own block)
- Related question: Q2 (Connect_Services ids: the branches that call them cannot be reached before it is answered)

## Evidence
- Expression / handler: `sources/pretty/UBTConnect.Home.FeedBlock_Services.mvc.js:1043-1047`
  (`ExternalLink = GetServices.ExternalLinks_ElGusto; OpenInApp_OpenExternalLink(ExternalLink, False)`),
  `sources/pretty/UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_GoExternalApp.mvc.js` GoToExternalApp
  (`PackageName = ""` → FeedbackMessage_AutoClose "Not available"; else `OpenInApp_OpenApp(PackageName)`).
- The action bodies are not in the downloaded code (UBTConnect_Utils.controller.js not in the survey sources).
  `shell/dialogs/subscription.ts` opens the subscription link with `window.open(…, '_blank')` inline (decision U18),
  but exports no helper.
- Parity difference it explains: none in the captured states (no click captured).

## Expected change
Exported helpers `openInApp_OpenExternalLink(link, <second input>)` (web: U18, new tab) and `openInApp_OpenApp(packageName)`
(native app launch; the web behaviour is a decision for the user: the compiled web path of the plugin is not known).

## Workaround in the route until applied
FeedBlock_Services: the El Gusto branch and Dialog_GoExternalApp's GoToExternalApp call nothing for these two steps
(comment with this CR id); markup unchanged (no rendered part depends on them).

## Resolution (foundation owner)
Set `- Status: applied` above when done (route.py reset keeps applied requests and deletes open ones raised by a failed run).
- Change: `openInApp_OpenExternalLink(url, inNewTab = false)` in `app/src/shared/UBTConnect_Utils/lib/actions.ts`, ported
  from `UBTConnect_Utils.controller.js:4491-4538` (HomeFeed raw copy): http(s) URL (Index, ignoreCase) → plugin branch
  (:4508-4514), which decision U18 maps to a new tab for both targets; else InNewTab → `jSUtils_PageOpenInNewTab`
  (:4518-4521, now shared in `UBTJavaScriptUtils/lib/actions.ts`), else `JSUtils_PageRedirect(Url, True)` (:4523-4526).
  Note: without U18 the web path of an http(s) link with InNewTab False is a same-tab redirect. `shell/dialogs/subscription.ts`
  now calls the helper; FeedBlock_Services' El Gusto branch calls it (mvc :1042-1046). Tests: `UBTConnect_Utils/lib/actions.test.ts`.
  `openInApp_OpenApp(packageName)` ported (2026-10-15, browser path) in the same file from `UBTConnect_Utils.controller.js:4360-4462`
  with the TST plugin scripts: CheckAppLauncherPlugin is `!!window.cordova && !!window.plugins.launcher`
  (runtime-sources/Connect2_AppLauncherPlugin.controller.js:302) → False; IsCordovaDefined (`typeof(cordova)`,
  CommonPlugin.controller.js:508-512) → False (no market:// link, :4421-4426); GetOperatingSystem (CommonPlugin.controller.js:147-200,
  `getOperatingSystem()`) → GetPlatform "" without Cordova (:236-280) → Other (Mobile_OperatingSystem TST values) → not
  Android/Windows (Play Store link :4434-4435 not taken) → FeedbackMessage_AutoClose2("Not available", "Sorry, this app is not
  available in the platform you are using", Info, True, "", 0, False) and return (:4439-4441). Wired in Dialog_GoExternalApp
  GoToExternalApp (raw mvc :620-629), reached from FeedBlock_Services Trove/HR100/CommunityTradelink (ConfirmAction, raw
  mvc :997-1066) now that the Connect_Services ids are the TST values. Tests: `UBTConnect_Utils/lib/actions.test.ts`.
- Regression parity run on: Login, PINUnlock, PINRegister, Splash (2026-10-15).
