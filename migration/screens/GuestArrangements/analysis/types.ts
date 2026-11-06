// Generated from captured response shapes. Long Integer / Decimal travel as strings.

export interface EventDetails {
  Id: string /* Long Integer as string */;
  Name: string;
  Location: string;
  StartDate: string /* ISO DateTime */;
  EndDate: string /* "1900-01-01..." = no value */;
}

export interface EmptyListItem {
  HouseholderId: string /* Long Integer as string */;
  MemberId: string /* Long Integer as string */;
  LocalityId: string /* Long Integer as string */;
  FirstName: string /* "" in capture */;
  LastName: string /* "" in capture */;
  Title: string /* "" in capture */;
  SignedPhotoURL: string /* "" in capture */;
  SpecialNeeds: SpecialNeeds;
}

export interface SpecialNeeds {
  List: unknown[] /* empty in capture */;
  EmptyListItem: EmptyListItem;
}

export interface MealDetailsItem {
  MilestoneDateTime: string /* ISO DateTime */;
  MiddayMeal: string /* "" in capture */;
  EveningMeal: string;
}

export interface ArrivalDetails {
  List: unknown[] /* empty in capture */;
  EmptyListItem: EmptyListItem;
}

export interface DepartureDetails {
  List: unknown[] /* empty in capture */;
  EmptyListItem: EmptyListItem;
}

export interface Response {
  MemberId: string /* Long Integer as string */;
  FirstName: string;
  LastName: string;
  Title: string;
  EventDetails: EventDetails;
  SpecialNeeds: SpecialNeeds;
  MealDetails: MealDetailsItem[] /* wire: { List: [...] } */;
  ArrivalDetails: ArrivalDetails;
  DepartureDetails: DepartureDetails;
}

export interface GetGuestArrangementsResponse {
  Response: Response;
  HasData: boolean;
}
