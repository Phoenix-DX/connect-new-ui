import type { UI_ListMenuOption, UI_MenuSection } from '@/components/menu/MenuList';
import { Type_ContactSubject, UBT_Icons2_Local } from './staticEntities';

/** UBTConnect Lookup_ContactUsMenuOptions: one UI_ListMenuOption per contact subject. */
interface Lookup_ContactUsMenuOptions {
  SetupAUBTOneAccount: UI_ListMenuOption;
  LoginWithUBTOne: UI_ListMenuOption;
  SubscriptionsAndPayments: UI_ListMenuOption;
  HouseholdDetailsAndProfile: UI_ListMenuOption;
  CommunityEvents: UI_ListMenuOption;
  GeneralQuestions: UI_ListMenuOption;
  GeneralSuggestions: UI_ListMenuOption;
  GeneralQuestionsOrSuggestions: UI_ListMenuOption;
}

/** A row with Id = Label = the subject (UI_ListMenuOption record default for the other fields). */
const option = (subject: string, iconId: string): UI_ListMenuOption => ({
  Id: subject,
  Label: subject,
  IconId: iconId,
});

/** Get_LookupContactUsMenu (client action, p:UBTConnect.controller.js `get_LookupContactUsMenu$Action`): the first five
    subjects always; signed in (GetUserId <> NullIdentifier) GeneralQuestions (BookOpen) and GeneralSuggestions
    (GeneralSuggestionsFeedbackRating, Tooltip), otherwise GeneralQuestionsOrSuggestions (BookOpen). Fields not set keep
    the record default (empty row). */
export function get_LookupContactUsMenu(isSignedIn: boolean): Lookup_ContactUsMenuOptions {
  const out: Lookup_ContactUsMenuOptions = {
    SetupAUBTOneAccount: option(Type_ContactSubject.SetupAUBTOneAccount, UBT_Icons2_Local.UBT),
    LoginWithUBTOne: option(Type_ContactSubject.LoginWithUBTOne, UBT_Icons2_Local.PersonAdd),
    SubscriptionsAndPayments: option(Type_ContactSubject.SubscriptionsAndPayments, UBT_Icons2_Local.ShoppingBasket),
    HouseholdDetailsAndProfile: option(Type_ContactSubject.HouseholdDetailsAndProfile, UBT_Icons2_Local.AccountCircle),
    CommunityEvents: option(Type_ContactSubject.CommunityEvents, UBT_Icons2_Local.PersonPlay),
    GeneralQuestions: {},
    GeneralSuggestions: {},
    GeneralQuestionsOrSuggestions: {},
  };
  if (isSignedIn) {
    out.GeneralQuestions = option(Type_ContactSubject.GeneralQuestions, UBT_Icons2_Local.BookOpen);
    out.GeneralSuggestions = option(Type_ContactSubject.GeneralSuggestionsFeedbackRating, UBT_Icons2_Local.Tooltip);
  } else {
    out.GeneralQuestionsOrSuggestions = option(
      Type_ContactSubject.GeneralQuestionsOrSuggestions,
      UBT_Icons2_Local.BookOpen,
    );
  }
  return out;
}

/** Get_ContactUsMenuSections (client action, p:UBTConnect.controller.js `get_ContactUsMenuSections$Action`): the three
    sections "User Account Management", "Community Engagement" and "General Inquiries" (SectionTitle set, HasSeparator
    record default True). Signed in, General Inquiries holds GeneralQuestions and GeneralSuggestions
    (ListAppendAll_LoggedInMenuOptions); signed out, only GeneralQuestionsOrSuggestions (ListAppendAll_LoggedOutMenuOptions,
    not captured: Q1). */
export function get_ContactUsMenuSections(isSignedIn: boolean): UI_MenuSection[] {
  const lookup = get_LookupContactUsMenu(isSignedIn);
  return [
    {
      SectionTitle: 'User Account Management',
      MenuOptions: [
        lookup.SetupAUBTOneAccount,
        lookup.LoginWithUBTOne,
        lookup.SubscriptionsAndPayments,
        lookup.HouseholdDetailsAndProfile,
      ],
    },
    { SectionTitle: 'Community Engagement', MenuOptions: [lookup.CommunityEvents] },
    {
      SectionTitle: 'General Inquiries',
      MenuOptions: isSignedIn
        ? [lookup.GeneralQuestions, lookup.GeneralSuggestions]
        : [lookup.GeneralQuestionsOrSuggestions],
    },
  ];
}
