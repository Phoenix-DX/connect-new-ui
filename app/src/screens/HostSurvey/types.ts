import type { ActionInputs, ActionOutputs, PathOf } from '@/api/client/callAction';

/* ---- Wire shapes (mocks.ts only) ----
   DataActionGetHostSurvey of ScreenBlock_HostSurvey and the server action PostHostSurvey, typed by the API contract
   (GetHostSurveyResponse of Connect2_OrbitMobile_IS; captured shape: analysis/calls.md § DataActionGetHostSurvey). */

type GetHostSurveyPath = PathOf<'Connect2_OrbitMobile_MUI', 'ScreenBlock_HostSurvey/DataActionGetHostSurvey'>;
type PostHostSurveyPath = PathOf<'Connect2_OrbitMobile_MUI', 'ActionPostHostSurvey'>;

/** GetHostSurveyResponse (Connect2_OrbitMobile_IS) as it travels. */
export type HostSurveyResponseWire = ActionOutputs<GetHostSurveyPath>['Response'];
export type PostHostSurveyInputsWire = ActionInputs<PostHostSurveyPath>;

/* ---- Domain (components) ----
   The block variables that the data action sends and the survey (GetHostSurveyResponse as the HostSurvey variable,
   with its rooms, meals, helpers and vehicles; DateTimes "" for the null date) are domain types of api/event; this
   module keeps the names that the screen uses. */
export type {
  HostSurvey,
  HostSurveyCallInputs as HostSurveyVariablesWire,
  HostSurveyMeal,
  HostSurveyRoom,
} from '@/api/event';
