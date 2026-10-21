# HandleOnResumeOpenLink

OutSystems: `UBTConnect.Legacy_Share.HandleOnResumeOpenLink` · pack
`migration/blocks/UBTConnect.Legacy_Share.HandleOnResumeOpenLink.md`

Inputs: none. Events: none. Placeholders: none. Child blocks (plugins, empty on the web, rendered as their wrappers):
`Connect2_AndroidAppLinksPlugin.AndroidAppLinks.AndroidAppLinkOnResumeHandler`,
`EventfulDeeplinksPlugin.EventfulDeeplinksPlugin.DeeplinkHandlerCentral`.

## Captured variants (1 distinct; 1 tested)

| Capture | Source                   |
| ------- | ------------------------ |
| v1      | BookmarksByGroup/default |

## Not settled

- The plugin events (`ResumeNavigation`, `OnDeeplinkOpen`) are native only; their handler (`Action_ProcessURL`) is not
  ported (decision U14: plain URLs, resume-link helper in `src/shell/resume.ts`, plugins later).
