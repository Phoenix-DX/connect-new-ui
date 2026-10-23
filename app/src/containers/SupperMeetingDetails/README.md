# SupperMeetingDetailsContainer

`UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock` with its child block
`UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList`: the supper meeting card, its actions and its
households. Used by the SupperMeeting_Details page and the SupperMeeting_Carousel page (in the
`renderSupperMeetingDetails` slot of EntitiesCarouse_lSupperMeetingDetails).

Why a container (decision W26): two pages render it, it holds two data actions, and it renders
Directory_EntityDetailsActions, which a component cannot import (rule 4).

## Structure

| File                                                                 | Role                                                                                 |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts`   | OnReady of both blocks and OnClick_NavigateToHousehold, with `useFlowState`.         |
| `containers/SupperMeetingDetails/hooks/supperMeetingDetailsState.ts` | The state record and the reducer (tested in `supperMeetingDetailsState.test.ts`).    |
| `containers/SupperMeetingDetails/SupperMeetingDetailsContainer.tsx`  | Takes `subdivisionId` and `flags`; fills the `entityActions` slot; renders the view. |
| `components/directory/SupperMeetingDetails/SupperMeetingDetails.tsx` | The view, props only. Renders SupperMeeting_HouseholdList (props only).              |
| `containers/SupperMeetingDetails/mocks.ts`                           | The two MSW handlers (recorded supper meeting, fictional households).                |

The data actions come from `src/api/locality/` (`fetchSubdivisionDetails`, `fetchSubdivisionHouseholds`). The old
`api.ts` and `mocks.ts` files of both blocks no longer exist. The callers read the flag with
`useSupperMeetingDetailsFlags()` and pass `flags`. Both are exported from `src/containers/index.ts`.

## Inputs → props

| Input                                         | Prop            | Default  |
| --------------------------------------------- | --------------- | -------- |
| In_SubdivsionId (Long Integer as text, sic)   | `subdivisionId` | `'0'`    |
| GetHasCarouselEnabled (flag C2EnableCarousel) | `flags`         | required |
| Placeholder_CarouselTag                       | `carouselTag`   | none     |

`id` is the instance id of SupperMeeting_DetailsBlock. Neither block has OnParametersChanged: the hook reads the id
once, and the household list gets the same id.

## Flows

- OnReady: the refresh of DataActionGetSubdivisionHouseholds (In_SubdivisionId), then the refresh of
  DataActionGetSubdivision (In_SubdivsionId), both started at once, in the call order of the port before the refactor
  (the child block first).
- A failed GetSubdivision keeps the skeleton (IsDataFetched stays False). A failed GetSubdivisionHouseholds sets the
  Error status (`list-error`) and keeps the skeleton rows. Neither failure goes to the flow handler.
- OnClick_NavigateToHousehold (Event_OnClick_Household of the household list): with the flag, SetPreloadObject (the
  CarouselHouseholdItem of every listed household) and HouseholdCarousel(In_StartingHouseholdId); otherwise
  HouseholdDetails(HouseholdId).
- Decision W23: OnReady runs once per mount (a once-guard for StrictMode). After an unmount, a started flow skips its
  state writes only; its calls already ran. `hooks/useSupperMeetingDetails.test.tsx` covers it.

## Not settled

- OutSystems skips the skeletons and the refreshes of a view that the view cache restores. The port before the
  refactor kept no block state over a back navigation: it showed the skeletons and refreshed both data actions. The
  hook keeps that behavior (`restore` gives the first state), and the page test covers it.
- A failed fetch: the OutSystems runtime also hands the exception to the block's handleError; the port does not.
