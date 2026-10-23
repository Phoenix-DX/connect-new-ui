import type { UI_ListMenuOption, UI_MenuSection } from '@/components/menu/MenuList';
import { Type_ContactSubject, UBT_Icons2_Local } from '@/pages/ContactUsMenu/staticEntities';

/** The screen variables of the Contact Us menu and the client actions that build its sections, as pure code.
    @origin UBTConnect.App_Menu_ContactUs.ContactUsMenu */

/** [IgnorePolices] and [IgnoreLockedScreen]: the CommonUI_InsideLayout inputs that ScreenEvent_OnInitialize sets. */
export interface ContactUsMenuIgnore {
  /** IgnorePolices = GetUserId = NullIdentifier() or PIN_Check.NeedRegister. */
  polices: boolean;
  /** IgnoreLockedScreen = GetUserId <> NullIdentifier() and PIN_Check.NeedRegister. */
  lockedScreen: boolean;
}

/** ScreenEvent_OnInitialize after PIN_Check: the two ignore variables from the signed-in state and NeedRegister. */
export function initialIgnore(isSignedIn: boolean, needRegister: boolean): ContactUsMenuIgnore {
  return { polices: !isSignedIn || needRegister, lockedScreen: isSignedIn && needRegister };
}

/** Inputs of ContactUsDetails that OnClick_MenuOption sends, all Text. */
export interface ContactUsDetailsParams {
  In_ContactSubjectId: string;
  In_ContactSubjectTitle: string;
  In_ListMenuOptionLabel: string;
}

/** OnClick_MenuOption(Event_ListMenuOptionId) of a section's Menu_List: ListIndexOf(the section's MenuOptions,
    Id = Event_ListMenuOptionId), then the ContactUsDetails inputs: the row's Id (TextToIdentifier, as Text), the
    section title and the row's Label. A row that is not found gives the record default (empty texts). */
export function contactUsDetailsParams(section: UI_MenuSection, eventListMenuOptionId: string): ContactUsDetailsParams {
  const options = section.MenuOptions ?? [];
  const position = options.findIndex((p) => (p.Id ?? '') === eventListMenuOptionId);
  const row = options[position] ?? {};
  return {
    In_ContactSubjectId: row.Id ?? '',
    In_ContactSubjectTitle: section.SectionTitle ?? '',
    In_ListMenuOptionLabel: row.Label ?? '',
  };
}

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
