# Orbit block pass (2026-10-27)

UI flow `Legacy_OrbitEventsFlow`. This file has the same table as section 10 of `migration/clarify/flows/Legacy_OrbitEventsFlow/report.md`. The rows are in `checklist.json` of that flow (ids K001 to K080).

Result: match 79, partial 1. J016 and J018 become `match`. J017 becomes `partial` (F8, minor: no pointer cursor on the name and host of `EventBooklet_MembersItem`).

Files. TST: `Connect2_OrbitMobile_MUI.Orbit_Blocks.<Block>.mvc.js`; the TST lines are the numbers that `python3 migration/clarify/tools/tst_source.py show <file>` prints. React: `app/src/pages/OrbitLanding/components/<Block>.tsx` for the two OrbitLanding popups, `app/src/pages/EventBooklet/components/<Block>.tsx` for the three EventBooklet blocks and `app/src/pages/TransportDetail/components/<Block>.tsx` for the two TransportDetail blocks.

The row id prefix is `Legacy_OrbitEventsFlow-`. `checklist.json` has the full text of each row.

| Row | Block | Element | TST lines | React lines | Verdict |
|---|---|---|---|---|---|
| K001 | Popup_OrbitLanding_Sort | Input In_IsSortASC | 13-15, 56-60 | 9-10, 27 | `match` |
| K002 | Popup_OrbitLanding_Sort | Close icon | 150-170, 329 | 31-33 | `match` |
| K003 | Popup_OrbitLanding_Sort | RadioGroup_SortBy | 196-268 | 36-50 | `match` |
| K004 | Popup_OrbitLanding_Sort | Selected sort label class | 230-231, 257-258 | 28, 45, 48 | `match` |
| K005 | Popup_OrbitLanding_Sort | Apply button | 279-303, 332 | 52-62 | `match` |
| K006 | Popup_OrbitLanding_Sort | Texts | 236, 263, 303 | 45, 48, 61 | `match` |
| K007 | Popup_OrbitLanding_Sort | Lifecycle | 346-350 | 25-67 | `match` |
| K008 | Popup_OrbitLanding_Filters | Inputs and local variable | 13-33, 72-100 | 10-23, 43-47 | `match` |
| K009 | Popup_OrbitLanding_Filters | Close icon | 182-206, 643-645 | 56-58 | `match` |
| K010 | Popup_OrbitLanding_Filters | Options container height | 208-215 | 59-63 | `match` |
| K011 | Popup_OrbitLanding_Filters | RadioGroup Upcoming / Past | 232-318 | 65-85 | `match` |
| K012 | Popup_OrbitLanding_Filters | OnChange_RadioGroup_Filter | 241-248, 515-544 | 69-73 | `match` |
| K013 | Popup_OrbitLanding_Filters | Visible rule of the year filter | 347, 358, 369 | 53, 86 | `match` |
| K014 | Popup_OrbitLanding_Filters | "Clear all" style | 319-354 | 88-95 | `match` |
| K015 | Popup_OrbitLanding_Filters | "Clear all" OnClick | 322-330 | 94 | `match` |
| K016 | Popup_OrbitLanding_Filters | OnClick_ClearYearFilters | 545-582 | 49-51 | `match` |
| K017 | Popup_OrbitLanding_Filters | Year row | 376-456 | 101-130 | `match` |
| K018 | Popup_OrbitLanding_Filters | OnChange_Checkbox_Year | 428-435, 583-623 | 47 | `match` |
| K019 | Popup_OrbitLanding_Filters | OnReady | 658-675 | 46-47 | `match` |
| K020 | Popup_OrbitLanding_Filters | Apply button | 466-490, 640-642 | 134-145 | `match` |
| K021 | Popup_OrbitLanding_Filters | Texts | 286, 313, 354, 365, 490 | 80, 83, 96, 99, 143 | `match` |
| K022 | EventBooklet_ListHeader | Inputs and lifecycle | 11-12, 220-224 | 8-13 | `match` |
| K023 | EventBooklet_ListHeader | Header row | 121-183 | 19-31 | `match` |
| K024 | EventBooklet_ListHeader | Texts | 160, 177 | 25, 28 | `match` |
| K025 | EventBooklet_MembersItem | Input MemberItem | 13-14 | 13-14 | `match` |
| K026 | EventBooklet_MembersItem | Member name | 172-181 | 22-26, 42 | `match` |
| K027 | EventBooklet_MembersItem | Name OnClick | 146-165, 312-314 | 41 | `match` |
| K028 | EventBooklet_MembersItem | Pointer cursor of the clickable cells | 149-157, 248-256 | 41, 61 | `partial` (F8) |
| K029 | EventBooklet_MembersItem | Days | 198-245 | 44-60 | `match` |
| K030 | EventBooklet_MembersItem | Host | 271-276 | 61-63 | `match` |
| K031 | EventBooklet_MembersItem | Host OnClick | 248-256, 309-311 | 61 | `match` |
| K032 | EventBooklet_MembersItem | Lifecycle | 326-330 | 31-67 | `match` |
| K033 | PopUp_OrbitBookletFilters | Inputs and local variables | 13-30 | 19-39 | `match` |
| K034 | PopUp_OrbitBookletFilters | OnInitialize | 744-783, 1458-1475 | 54-67, 81 | `match` |
| K035 | PopUp_OrbitBookletFilters | FilterLocalitiesFromCountry | 784-864 | 43-49 | `match` |
| K036 | PopUp_OrbitBookletFilters | OnReady | 1226-1249, 1476-1493 | 93-95 | `match` |
| K037 | PopUp_OrbitBookletFilters | Title row and close icon | 159-199, 1441-1443 | 228-236 | `match` |
| K038 | PopUp_OrbitBookletFilters | Guests and Helpers checkboxes | 219-300 | 238-274 | `match` |
| K039 | PopUp_OrbitBookletFilters | OnChange_Checkboxes, Guests | 244, 1250-1287 | 129-140, 248-251 | `match` |
| K040 | PopUp_OrbitBookletFilters | OnChange_Checkboxes, Helpers | 285, 1288-1300 | 141-147, 267-270 | `match` |
| K041 | PopUp_OrbitBookletFilters | ResetCheckboxes | 1332-1385 | 105-124 | `match` |
| K042 | PopUp_OrbitBookletFilters | Day selector | 301-357 | 275-289 | `match` |
| K043 | PopUp_OrbitBookletFilters | OnHandle_ClickedDate | 1089-1135 | 152-162 | `match` |
| K044 | PopUp_OrbitBookletFilters | DropdownTags_Roles | 376-445 | 290-306 | `match` |
| K045 | PopUp_OrbitBookletFilters | OnChange_DropdownSearch_Roles | 904-970 | 166-175 | `match` |
| K046 | PopUp_OrbitBookletFilters | DropdownTags_Countries | 446-522 | 307-322 | `match` |
| K047 | PopUp_OrbitBookletFilters | OnChange_DropdownSearch_Countries | 971-1088 | 181-199 | `match` |
| K048 | PopUp_OrbitBookletFilters | DropdownTags_Localities | 523-599 | 323-338 | `match` |
| K049 | PopUp_OrbitBookletFilters | OnChange_DropdownSearch_Localities | 706-743 | 201-204 | `match` |
| K050 | PopUp_OrbitBookletFilters | OnInitialized_Dropdowns | 428, 491, 582, 865-903 | 99-101, 301, 317, 333 | `match` |
| K051 | PopUp_OrbitBookletFilters | Footer | 600-681 | 341-353 | `match` |
| K052 | PopUp_OrbitBookletFilters | Apply | 620-627, 1444-1446 | 349-351 | `match` |
| K053 | PopUp_OrbitBookletFilters | OnHandle_ResetFilters | 634-641, 1136-1225 | 209-222, 352 | `match` |
| K054 | PopUp_OrbitBookletFilters | Texts | 169, 229, 270, 321, 386, 395, 401, 466, 468, 543, 554, 661, 671 | 225, 229, 240, 259, 277, 293, 300, 309, 316, 325, 332, 347-348 | `match` |
| K055 | TransportDetail | Input and local variable | 13-18 | 17-21, 61 | `match` |
| K056 | TransportDetail | OnReady | 1452-1497, 1515-1532 | 59-61 | `match` |
| K057 | TransportDetail | Operator row | 155-228 | 131-135 | `match` |
| K058 | TransportDetail | Type row | 230-306 | 136-140 | `match` |
| K059 | TransportDetail | Departure Location row | 308-443 | 64, 74-81, 141 | `match` |
| K060 | TransportDetail | Arrival Location row | 445-580 | 74-81, 142 | `match` |
| K061 | TransportDetail | Baggage Allowance row | 582-680 | 143-151 | `match` |
| K062 | TransportDetail | Travel info block | 681-704 | 152-157 | `match` |
| K063 | TransportDetail | Trip Duration, vehicle | 705-795 | 159-164 | `match` |
| K064 | TransportDetail | Trip Duration, other types | 796-884 | 165-169 | `match` |
| K065 | TransportDetail | Stops list | 885-1274 | 170-182 | `match` |
| K066 | TransportDetail | Stop title | 993-1013 | 89 | `match` |
| K067 | TransportDetail | Stopover Arrival Terminal | 1018-1105 | 90-100 | `match` |
| K068 | TransportDetail | Stopover Departure Terminal | 1106-1188 | 101-111 | `match` |
| K069 | TransportDetail | Stop Duration row | 1189-1271 | 114-118 | `match` |
| K070 | TransportDetail | Seats row | 1275-1382 | 122-126, 183-195 | `match` |
| K071 | TransportDetail | Notes | 1383-1425 | 196-203 | `match` |
| K072 | TransportDetail | Texts | 206, 284, 370, 507, 633, 656, 674, 764, 855, 974, 1052, 1134, 1241, 1327, 1404 | 87, 93, 104, 116, 132, 137, 141-149, 161, 166, 184, 199 | `match` |
| K073 | TransportDetail_TravelInfo | Inputs and lifecycle | 13-30, 741-788 | 12-18 | `match` |
| K074 | TransportDetail_TravelInfo | General information row | 164-200 | 49-54 | `match` |
| K075 | TransportDetail_TravelInfo | Travel identifier | 205-259 | 55-59 | `match` |
| K076 | TransportDetail_TravelInfo | Codeshare Flight | 260-344 | 60-78 | `match` |
| K077 | TransportDetail_TravelInfo | Booking Reference | 345-401 | 79-92 | `match` |
| K078 | TransportDetail_TravelInfo | Fare Type, Onboard Meal Type, Class | 402-557 | 93-117 | `match` |
| K079 | TransportDetail_TravelInfo | Vehicle Name and Driver Name | 560-734 | 121-148 | `match` |
| K080 | TransportDetail_TravelInfo | Texts | 283, 370, 434, 486, 531, 623, 708 | 63, 83, 100, 108, 113, 130, 142 | `match` |
