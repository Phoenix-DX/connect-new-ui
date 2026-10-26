# SupperMeeting_ImageCard_Content

OutSystems: `UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content` · pack
`migration/blocks/UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content.md`.

| Input                      | Type                        | Prop                       | Default |
| -------------------------- | --------------------------- | -------------------------- | ------- |
| In_Subdivision_CardContent | UI_Subdivision_Card_Content | `inSubdivisionCardContent` | `{}`    |
| In_ShowAddress             | Boolean                     | `inShowAddress`            | `false` |

Events, placeholders: none. Children: ImageCard__Content, SupperMeeting_ImageCard_Content_Statistics, CustomContainer,
AddressPopup_Wrapper. Ported action: GetDescriptor_Subdivision_GenderSplit (`../lib/actions.ts`).

## Captures

| Capture | Source                                                                 |
| ------- | ---------------------------------------------------------------------- |
| v1      | SupperMeeting_Carousel/default (pack: wrapper only)                    |
| v2      | SupperMeeting_Details/default (statistics and address popup collapsed) |

## Not captured / not settled

- In_ShowAddress False (no address container): compiled view only (`it`).
