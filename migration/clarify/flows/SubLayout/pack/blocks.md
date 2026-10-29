# Pack of UI flow SubLayout (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Own blocks of the flow: SubLayout_Browse_Section, SubLayout_DirectoryCalendar, SubLayout_DirectoryDetailScreen, SubLayout_DirectoryDetailScreen_Section
Blocks of other UBTConnect flows that the flow uses (transitive): 0

## Block SubLayout_Browse_Section (flow SubLayout)
- public: False
- input parameters: -
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): BrowseDirectory, CountryDetails

#### Widget tree
```
container  [style="directory-detail-screen"]
  placeholder-def Placeholder_TopSection
  placeholder-def Placeholder_BottomSection
```

## Block SubLayout_DirectoryCalendar (flow SubLayout)
- public: False
- input parameters: -
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): MyCalendar

#### Widget tree
```
container  [style="calendar-full-content"]
  placeholder-def Placeholder_CalendarContent
```

## Block SubLayout_DirectoryDetailScreen (flow SubLayout)
- public: False
- input parameters: HideActions: Boolean
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): ComunityBusinessDetails_Block, HouseholdDetails_Block, OneSchoolGlobalDetails_Block, OneSchoolGlobalEventDetail, SupperMeeting_DetailsBlock

#### Widget tree
```
container  [style="directory-detail-screen"]
  placeholder-def Placeholder_DetailCard
  placeholder-def Placeholder_CallToAction
  placeholder-def Placeholder_Content
```

## Block SubLayout_DirectoryDetailScreen_Section (flow SubLayout)
- public: False
- input parameters: In_Title: Text (mandatory); In_PaddingTop: UBT_Size Identifier = Entities.UBT_Size.Small; In_PaddingBottom: UBT_Size Identifier = Entities.UBT_Size.Small
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): ContactUsDetails, HouseholdDetails_Members_Block, HouseholdRelations_Block, Household_GalleryCard_List, OneSchoolGlobalDetails_Block, OneSchoolGlobalEventDetail, SupperMeeting_DetailsBlock

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns)
  args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { HorizontalSizeId: Entities.UBT_Size.Base, TopSizeId: In_PaddingTop, BottomSizeId: In_PaddingBottom } }
  placeholder Content:
    block SubLayout_Section (UBTConnectLibrary.Layouts)
      placeholder Title:
        if In_Title <> ""
          block CustomText (UBTConnectLibrary.BasePatterns)
            args: In_Text=In_Title, In_TextOptions={ FontWeight: Entities.UBT_FontWeight.SemiBold }
      placeholder Content:
        placeholder-def Placeholder_SectionContent
```
