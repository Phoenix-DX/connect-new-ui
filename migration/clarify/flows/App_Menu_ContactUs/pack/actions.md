# Pack of UI flow App_Menu_ContactUs (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Module client actions the flow calls (transitive): 17; of them shared (in `../../_shared/pack/actions.md`): 14

## Shared actions (signature only)

| Action | Folder | Inputs | Outputs | Used by flows |
|---|---|---|---|---|
| ExitApplicationForWebViewUpdate | ExternalNavigation | Delay: Integer | - | 29 |
| GetURLFromEventDataURL | Share_Utils | EventDataURL: Text (mandatory) | URL: Text | 29 |
| GetUserInformation_Wrapper_Assign | App_Cache | UserInformation: CacheControl_UserInformation | - | 15 |
| Get_IsUnsupportedSystem | UnsupportedSystems | - | Out_IsUnsupportedSystem: Boolean | 29 |
| Get_IsUnsupportedVersion | UnsupportedSystems | - | Out_IsUnsupportedWebViewVersion: Boolean; Out_IsUnsupportedAppVersion: Boolean; Out_IsUnsupportedBrowserVersion: Boolean | 29 |
| OfflineDataSync | App_OfflineDataSync | SyncUnit: Text (mandatory) | - | 29 |
| OfflineDataSyncConfiguration | App_OfflineDataSync | - | SyncOnOnline: Boolean; SyncOnLogin: Boolean; SyncOnResume: Boolean; RetryOnError: Boolean; RetryIntervalInSeconds: Integer | 29 |
| OpenGooglePlay_Chrome | ExternalNavigation | - | - | 29 |
| OpenGooglePlay_UBTConnect | ExternalNavigation | - | - | 29 |
| OpenGooglePlay_WebView | ExternalNavigation | - | - | 29 |
| SetResumeLoginLink | Share_Utils | URL: Text (mandatory) | - | 29 |
| Try_GetIsSupportedVersion | UnsupportedSystems | - | IsSupportedNativeVersion: Boolean = True; IsSupportedWebView: Boolean = True; IsAndroid: Boolean; IsApple: Boolean | 29 |
| Upgrade_UBTConnect | ExternalNavigation | - | - | 29 |
| Upgrade_WebView | ExternalNavigation | - | - | 29 |

## Actions of this flow (full)

## Get_ContactUsFormDescription (action, folder Directory_ContactUs)
- inputs: In_ListMenuOptionId: Text (mandatory)
- outputs: Out_FormDescription: Text; Out_MessagePrompt: Text
```
call Get_LookupContactUsMenu()
assign: Out_MessagePrompt = "To help us assist you better, please provide your query/ issue regarding "+In_ListMenuOptionId+"."
if (SetupAUBTOneAccount?) In_ListMenuOptionId = Get_LookupContactUsMenu.Out_LookupContactUsMenu.SetupAUBTOneAccount.Id
  assign: Out_FormDescription = "UBT One lets you access all your UBT applications with a single log in. \n\nUse the same username and password to sign in to the UBT Website, Connect, and more—no need to remember multiple credentials."
  assign (>>): 
  [M1] assign (>>): 
  [M2] assign (>>): 
  [M3] assign (>>): 
  [M4] assign (>>): 
  [M5] assign (>>): 
  [M6] assign (>>): 
  [M7] assign (>>): 
  end
else
  if (LoginWithUBTOne?) In_ListMenuOptionId = Get_LookupContactUsMenu.Out_LookupContactUsMenu.LoginWithUBTOne.Id
    assign: Out_FormDescription = "Where we can help:\n • Can’t log in with UBT One\n • Reset Password\n • Not received your UBT One Verification Code"
    → continues at [M1]
  else
    if (SubscriptionsAndPayments?) In_ListMenuOptionId = Get_LookupContactUsMenu.Out_LookupContactUsMenu.SubscriptionsAndPayments.Id
      assign: Out_FormDescription = "Where we can help:\n • Purchase Subscription\n • Upgrade or downgrade the Subscription \n • Subscription Cancellation \n • Payment issue \n • Adding other family members to my Connect subscription "\n //• Use the same username and password to sign in to the UBT Website, Connect, and more—no need t…
      → continues at [M2]
    else
      if (HouseholdDetailsAndProfile?) In_ListMenuOptionId = Get_LookupContactUsMenu.Out_LookupContactUsMenu.HouseholdDetailsAndProfile.Id
        assign: Out_FormDescription = "Where we can help:\n • Household Details \n • Address & Map\n • My Profile Details\n • Ancestry Details"
        → continues at [M3]
      else
        if (CommunityEvents?) In_ListMenuOptionId = Get_LookupContactUsMenu.Out_LookupContactUsMenu.CommunityEvents.Id
          assign: Out_FormDescription = "Where we can help:\n • Lord’s Day Meal \n • Orbit Travel & Events \n • Assemble"
          → continues at [M4]
        else
          if (GeneralQuestions?) In_ListMenuOptionId = Get_LookupContactUsMenu.Out_LookupContactUsMenu.GeneralQuestions.Id
            assign: Out_FormDescription = "We’d love to hear from you! \n\nWhether you have questions, please reach out and if you’re enjoying Connect, we’d love to know that too. Your feedback helps us improve!"; Out_MessagePrompt = "To help us assist you better, please provide your question."
            → continues at [M5]
          else
            if (GeneraSuggestions?) In_ListMenuOptionId = Get_LookupContactUsMenu.Out_LookupContactUsMenu.GeneralSuggestions.Id
              assign: Out_FormDescription = "We’d love to hear from you! \n\nPlease let us know your suggestions or feedback, and if you're enjoying Connect, we’d love to know that too. Your suggestions and feedback helps us improve!"; Out_MessagePrompt = "To help us improve Connect, please share your suggestions or feedback."
              → continues at [M6]
            else
              if (GeneralQuestionsOrSuggestions?) In_ListMenuOptionId = Get_LookupContactUsMenu.Out_LookupContactUsMenu.GeneralQuestionsOrSuggestions.Id
                assign: Out_FormDescription = "UBT One lets you access all your UBT applications with a single log in. \n\nUse the same username and password to sign in to the UBT Website, Connect, and more—no need to remember multiple credentials."
                → continues at [M7]
              else
                end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
```

## Get_ContactUsMenuSections (action, folder Directory_ContactUs)
- inputs: -
- outputs: Out_ContactUsMenuSections: UI_MenuSection List
```
call Get_LookupContactUsMenu()
if GetUserId() <> NullIdentifier()
  call ListAppendAll(List=Out_ContactUsMenuSections, SourceList=[ { SectionTitle: "User Account Management", MenuOptions: [ Get_LookupContactUsMenu.Out_LookupContactUsMenu.SetupAUBTOneAccount, Get_LookupContactUsMenu.Out_LookupContactUsMenu.LoginWithUBTOne, Get_L…) as ListAppendAll_LoggedInMenuOptions
  end
else
  call ListAppendAll(List=Out_ContactUsMenuSections, SourceList=[ { SectionTitle: "User Account Management", MenuOptions: [ Get_LookupContactUsMenu.Out_LookupContactUsMenu.SetupAUBTOneAccount, Get_LookupContactUsMenu.Out_LookupContactUsMenu.LoginWithUBTOne, Get_L…) as ListAppendAll_LoggedOutMenuOptions
  end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
```

## Get_LookupContactUsMenu (action, folder Directory_ContactUs)
- inputs: -
- outputs: Out_LookupContactUsMenu: Lookup_ContactUsMenuOptions
```
assign (SetupAUBTOneAccount): Out_LookupContactUsMenu.SetupAUBTOneAccount.Id = Entities.Type_ContactSubject.SetupAUBTOneAccount; Out_LookupContactUsMenu.SetupAUBTOneAccount.Label = Entities.Type_ContactSubject.SetupAUBTOneAccount; Out_LookupContactUsMenu.SetupAUBTOneAccount.IconId = Entities.UBT_Icons2.UBT
assign (LoginWithUBTOne): Out_LookupContactUsMenu.LoginWithUBTOne.Id = Entities.Type_ContactSubject.LoginWithUBTOne; Out_LookupContactUsMenu.LoginWithUBTOne.Label = Entities.Type_ContactSubject.LoginWithUBTOne; Out_LookupContactUsMenu.LoginWithUBTOne.IconId = Entities.UBT_Icons2.PersonAdd
assign (SubscriptionsAndPayments): Out_LookupContactUsMenu.SubscriptionsAndPayments.Id = Entities.Type_ContactSubject.SubscriptionsAndPayments; Out_LookupContactUsMenu.SubscriptionsAndPayments.Label = Entities.Type_ContactSubject.SubscriptionsAndPayments; Out_LookupContactUsMenu.SubscriptionsAndPayments.IconId = Entities.UBT_Icons2.ShoppingBasket
assign (HouseholdDetailsAndProfile): Out_LookupContactUsMenu.HouseholdDetailsAndProfile.Id = Entities.Type_ContactSubject.HouseholdDetailsAndProfile; Out_LookupContactUsMenu.HouseholdDetailsAndProfile.Label = Entities.Type_ContactSubject.HouseholdDetailsAndProfile; Out_LookupContactUsMenu.HouseholdDetailsAndProfile.IconId = Entities.UBT_Icons2.AccountCircle
assign (CommunityEvents): Out_LookupContactUsMenu.CommunityEvents.Id = Entities.Type_ContactSubject.CommunityEvents; Out_LookupContactUsMenu.CommunityEvents.Label = Entities.Type_ContactSubject.CommunityEvents; Out_LookupContactUsMenu.CommunityEvents.IconId = Entities.UBT_Icons2.PersonPlay
if GetUserId() <> NullIdentifier()
  assign (GeneralQuestions): Out_LookupContactUsMenu.GeneralQuestions.Id = Entities.Type_ContactSubject.GeneralQuestions; Out_LookupContactUsMenu.GeneralQuestions.Label = Entities.Type_ContactSubject.GeneralQuestions; Out_LookupContactUsMenu.GeneralQuestions.IconId = Entities.UBT_Icons2.BookOpen
  assign (GeneralSuggestions): Out_LookupContactUsMenu.GeneralSuggestions.Id = Entities.Type_ContactSubject.GeneralSuggestionsFeedbackRating; Out_LookupContactUsMenu.GeneralSuggestions.Label = Entities.Type_ContactSubject.GeneralSuggestionsFeedbackRating; Out_LookupContactUsMenu.GeneralSuggestions.IconId = Entities.UBT_Icons2.Tooltip
  end
else
  assign (GeneralQuestionsOrSuggestions): Out_LookupContactUsMenu.GeneralQuestionsOrSuggestions.Id = Entities.Type_ContactSubject.GeneralQuestionsOrSuggestions; Out_LookupContactUsMenu.GeneralQuestionsOrSuggestions.Label = Entities.Type_ContactSubject.GeneralQuestionsOrSuggestions; Out_LookupContactUsMenu.GeneralQuestionsOrSuggestions.IconId = Entities.UBT_Icons2.BookOpen
  end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
```
