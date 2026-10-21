# Skeleton_Loading

OutSystems: `Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading` · pack
`migration/blocks/Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.md` · source
`migration/blocks/sources/Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc.js`

| Input                | Type                           | Prop                  | Default |
| -------------------- | ------------------------------ | --------------------- | ------- |
| In_SkeletonLoadingId | Integer (OrbitSkeletonLoading) | `inSkeletonLoadingId` | `0`     |

No events, no placeholders. `OrbitSkeletonLoading` values: TST static entities (`../lib/staticEntities.ts`).

- View (:141-951): one `If` per id, in this order:
  - SingleItem
  - AdminEventDetails
  - OrbitLanding / TransportDetail / ViewDocument / HostSurveyHelpers (List_SkeletonLoadingSingle, row height large /
     base / s / base)
  - EventDetail
  - MilestoneDetailGuest
  - MilestoneDetailHost
  - MemberQRCode
  - HostSurvey (List_SkeletonLoadingDouble)
  - MilestoneWrapper
  - EventBooklet (four rows with inline widths and opacity that fades)
- OnInitialize (:1001-1088): NumberOfBlocks per id. OrbitLanding 6, TransportDetail 15, EventDetail 4,
  MilestoneDetailGuest 12, ViewDocument 25, HostSurvey 6, HostSurveyHelpers 15, MilestoneWrapper 0; others none. Then
  LoadingBlocks gets that many rows (`skeletonNumberOfBlocks`, `../lib/actions.ts`). OnParametersChanged (:974-999)
  clears and refills.
- Lists: animateItems True, virtualized, so `position: relative` as captured.

## Captured variants (3 tested)

| Capture | Source                    | Id                                       |
| ------- | ------------------------- | ---------------------------------------- |
| v1      | EventDetail/loading       | EventDetail                              |
| v2      | HelpersDetail/loading     | MilestoneDetailHost                      |
| v3      | OrbitAdminLanding/loading | OrbitLanding (also OrbitLanding/loading) |

## Not captured / not settled

- SingleItem, AdminEventDetails, TransportDetail, ViewDocument, HostSurveyHelpers, MilestoneDetailGuest, MemberQRCode,
  HostSurvey, MilestoneWrapper, EventBooklet: built from the compiled view (stories + structure tests).
