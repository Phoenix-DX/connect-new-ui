import { describe, expect, it } from 'vitest';
import {
  toHousehold,
  toHouseholdCaption,
  toHouseholdCaptionInputs,
  toHouseholdCoordinates,
  toLocalityHouseholdIds,
  toLocalityHouseholdIdsInputs,
  toMemberRelations,
  toSiblingRelations,
  type HouseholdWire,
} from './mapper';

type MemberWire = HouseholdWire['Out_HouseholdMembers']['List'][number];

/** A member as the server sends it: every field, with the OutSystems defaults. */
const memberWire = (fields: Partial<MemberWire>): MemberWire => ({
  Age: 0,
  ContryCode: '',
  CountryName: '',
  DateOfBirth: '1900-01-01',
  DeceasedDate: '1900-01-01',
  Description: '',
  DescriptionHighlight: '',
  DisplayAge: false,
  Email: '',
  FirstName: '',
  FormattedLocality: '',
  HasCTAs: false,
  HasNavigation: false,
  HomePhone: '',
  HouseholdId: '0',
  Id: '0',
  Initials: '',
  IsDeceased: false,
  LastName: '',
  LifeCycleText: '',
  LifeCycleText_IsItallic: false,
  LocalityId: '0',
  LocalityName: '',
  MarriageHighlightText: '',
  MarriagePartnerTakenText: '',
  MarriageText: '',
  MemberRole: '',
  MobilePhone: '',
  Title: '',
  WorkPhone: '',
  ...fields,
});

const wire: HouseholdWire = {
  Household: {
    HouseholdCard: {
      Id: '7001',
      Household_Card_Content: {
        Name: 'Harlow Household',
        FamilyNames: 'Ada, Ben',
        Surname: 'Harlow',
        Address: '12 Quay Street',
        LocalityId: '310',
        LocalityName: 'Wellington',
        CountryName: 'New Zealand',
        SupperMeetingId: '88',
        SupperMeetingName: 'Karori',
        TimezoneName: 'NZST',
        TimezoneOffset: 12,
        DisplayOptions: { IsAncestry: false, IsDeceased: true, IsHidden: false },
      },
    },
    Household_Actions: {
      HasBookmark: true,
      HasCall: false,
      HasEmail: false,
      HasGift: true,
      HasNotes: true,
      HasShare: true,
      HasUnbookmark: false,
      HasViewDetails: false,
    },
  },
  Out_HouseholdMembers: {
    List: [
      memberWire({
        Id: '11',
        HouseholdId: '7001',
        FirstName: 'Ada',
        Title: 'Ada Harlow',
        MemberRole: 'Householder',
        LifeCycleText: 'Born 1972',
        HasCTAs: true,
        HasNavigation: true,
        DisplayAge: true,
        Email: 'ada@example.org',
        MobilePhone: '021 555 0101',
        HomePhone: '04 555 0102',
      }),
    ],
  },
  Out_NonHouseholdMembers: {
    List: [
      memberWire({
        Id: '21',
        HouseholdId: '7002',
        Title: 'Ben Harlow',
        LocalityName: 'Nelson',
        CountryName: 'New Zealand',
        MarriageText: 'Married',
        MarriageHighlightText: 'Cara Moss',
        MarriagePartnerTakenText: 'took the name Harlow',
        LifeCycleText_IsItallic: true,
        IsDeceased: true,
      }),
    ],
  },
  isVisible: false,
};

describe('household mapper', () => {
  it('toHousehold keeps the fields that the UI reads and unwraps both member lists', () => {
    expect(toHousehold(wire)).toEqual({
      Household: {
        HouseholdCard: {
          Id: '7001',
          Household_Card_Content: {
            Name: 'Harlow Household',
            FamilyNames: 'Ada, Ben',
            Address: '12 Quay Street',
            LocalityId: '310',
            LocalityName: 'Wellington',
            CountryName: 'New Zealand',
            SupperMeetingId: '88',
            SupperMeetingName: 'Karori',
            DisplayOptions: { IsAncestry: false, IsDeceased: true, IsHidden: false },
          },
        },
      },
      Out_HouseholdMembers: [
        {
          Id: '11',
          HouseholdId: '7001',
          Title: 'Ada Harlow',
          MemberRole: 'Householder',
          LifeCycleText: 'Born 1972',
          LifeCycleText_IsItallic: false,
          IsDeceased: false,
          HasCTAs: true,
          HasNavigation: true,
          LocalityName: '',
          CountryName: '',
          MarriageText: '',
          MarriageHighlightText: '',
          MarriagePartnerTakenText: '',
          DisplayAge: true,
          Email: 'ada@example.org',
          MobilePhone: '021 555 0101',
          WorkPhone: '',
          HomePhone: '04 555 0102',
        },
      ],
      Out_NonHouseholdMembers: [
        {
          Id: '21',
          HouseholdId: '7002',
          Title: 'Ben Harlow',
          MemberRole: '',
          LifeCycleText: '',
          LifeCycleText_IsItallic: true,
          IsDeceased: true,
          HasCTAs: false,
          HasNavigation: false,
          LocalityName: 'Nelson',
          CountryName: 'New Zealand',
          MarriageText: 'Married',
          MarriageHighlightText: 'Cara Moss',
          MarriagePartnerTakenText: 'took the name Harlow',
          DisplayAge: false,
          Email: '',
          MobilePhone: '',
          WorkPhone: '',
          HomePhone: '',
        },
      ],
      isVisible: false,
    });
  });

  it('toHousehold answers empty member lists for empty wire lists', () => {
    const household = toHousehold({
      ...wire,
      Out_HouseholdMembers: { List: [] },
      Out_NonHouseholdMembers: { List: [] },
    });
    expect(household.Out_HouseholdMembers).toEqual([]);
    expect(household.Out_NonHouseholdMembers).toEqual([]);
  });

  it('toHouseholdCoordinates keeps the latitude, the longitude and UseCoordinates', () => {
    expect(
      toHouseholdCoordinates({
        HouseholdCoordinates: { Latitude: '-41.2865', Longitude: '174.7762', UseCoordinates: true },
      }),
    ).toEqual({ Latitude: '-41.2865', Longitude: '174.7762', UseCoordinates: true });
  });
});

/* The two calls of the Photobook screen. Fictional households. */
describe('household mapper: Photobook', () => {
  const marlowe = { householdId: '7001', householdName: 'Ada & Tom Marlowe', locality: 'Nelson' };
  const harlow = { householdId: '7002', householdName: 'Ben Harlow', locality: 'Nelson' };

  it('toLocalityHouseholdIds unwraps the list in the server order', () => {
    expect(
      toLocalityHouseholdIds({
        Out_LocalityHouseholdIds: {
          List: [
            { HouseholdId: '7001', HouseholdName: 'Ada & Tom Marlowe', Locality: 'Nelson' },
            { HouseholdId: '7002', HouseholdName: 'Ben Harlow', Locality: 'Nelson' },
          ],
        },
      }),
    ).toEqual([marlowe, harlow]);
    expect(toLocalityHouseholdIds({ Out_LocalityHouseholdIds: { List: [] } })).toEqual([]);
  });

  it('toLocalityHouseholdIdsInputs sends the screen variables and inputs with their wire names, in screen order', () => {
    const wire = toLocalityHouseholdIdsInputs({
      inHouseholdId: '7002',
      inLocalityId: '252',
      isLoading: true,
      selectedHousehold: { id: '7002', position: 0 },
    });
    expect(wire).toEqual({
      IsLoading: true,
      SelectedHousehold: { Id: '7002', Position: 0 },
      In_HouseholdId: '7002',
      In_LocalityId: '252',
    });
    expect(Object.keys(wire)).toEqual(['IsLoading', 'SelectedHousehold', 'In_HouseholdId', 'In_LocalityId']);
  });

  it('toHouseholdCaptionInputs sends the block inputs and variables with their wire names, in block order', () => {
    const wire = toHouseholdCaptionInputs({
      inCurrentHousehold: harlow,
      inIsShow: true,
      inMainContainerClass: 'photobook-carousel',
      infoSheetId: 'sheet-1',
      lastFetched: marlowe,
      isLoading: true,
    });
    expect(wire).toEqual({
      In_CurrentHousehold: { HouseholdId: '7002', HouseholdName: 'Ben Harlow', Locality: 'Nelson' },
      In_IsShow: true,
      In_MainContainerClass: 'photobook-carousel',
      InfoSheetId: 'sheet-1',
      LastFetched: { HouseholdId: '7001', HouseholdName: 'Ada & Tom Marlowe', Locality: 'Nelson' },
      isLoading: true,
    });
    expect(Object.keys(wire)).toEqual([
      'In_CurrentHousehold',
      'In_IsShow',
      'In_MainContainerClass',
      'InfoSheetId',
      'LastFetched',
      'isLoading',
    ]);
  });

  it('toHouseholdCaption keeps the caption and the household it belongs to', () => {
    expect(
      toHouseholdCaption({
        HouseholdCaption: 'HARLOW (Ben - Nelson)',
        LastFetchedHousehold: { HouseholdId: '7002', HouseholdName: 'Ben Harlow', Locality: 'Nelson' },
      }),
    ).toEqual({ householdCaption: 'HARLOW (Ben - Nelson)', lastFetchedHousehold: harlow });
  });
});

describe('household mapper of the relations (HouseholdRelations_Block)', () => {
  const father = memberWire({
    Id: '31',
    HouseholdId: '7010',
    FirstName: 'Owen',
    Title: 'Owen Harlow',
    LifeCycleText: 'Born 4 Apr 1941',
    HasNavigation: true,
    LocalityName: 'Napier',
    CountryName: 'New Zealand',
    FormattedLocality: 'Napier, New Zealand',
    Email: 'owen@example.org',
  });

  it('toMemberRelations keeps the fields that the relations UI reads and unwraps the previous spouses', () => {
    const relations = toMemberRelations({
      MemberName: 'Ada Harlow',
      FamilyName: 'The Harlows',
      Father: father,
      Mother: memberWire({ Id: '32', HouseholdId: '7010', Title: 'Ruth Lane', IsDeceased: true }),
      FormerSpouses: { List: [memberWire({ Id: '33', Title: 'Tom Reed', MarriageText: 'Divorced' })] },
      ParentHouseholdId: '7010',
    });
    expect(relations.MemberName).toBe('Ada Harlow');
    expect(relations.FamilyName).toBe('The Harlows');
    expect(relations.ParentHouseholdId).toBe('7010');
    expect(relations.Father).toEqual({
      Id: '31',
      HouseholdId: '7010',
      Title: 'Owen Harlow',
      LifeCycleText: 'Born 4 Apr 1941',
      LifeCycleText_IsItallic: false,
      IsDeceased: false,
      HasNavigation: true,
      LocalityName: 'Napier',
      CountryName: 'New Zealand',
      FormattedLocality: 'Napier, New Zealand',
      MarriageText: '',
      MarriageHighlightText: '',
      MarriagePartnerTakenText: '',
    });
    expect(relations.Mother).toMatchObject({ Id: '32', Title: 'Ruth Lane', IsDeceased: true });
    expect(relations.FormerSpouses).toEqual([expect.objectContaining({ Id: '33', MarriageText: 'Divorced' })]);
  });

  it('toSiblingRelations unwraps the siblings', () => {
    expect(toSiblingRelations({ Out_siblingRelations: { List: [father] } }).Out_siblingRelations).toEqual([
      expect.objectContaining({ Id: '31', Title: 'Owen Harlow', FormattedLocality: 'Napier, New Zealand' }),
    ]);
    expect(toSiblingRelations({ Out_siblingRelations: { List: [] } })).toEqual({ Out_siblingRelations: [] });
  });
});
