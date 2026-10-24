/* The inputs of LDM_Email_V2 (S model :9-48) as the block takes them (EventHostId → In_EventHostId, S view :152-159;
   Long Integers stay strings, "0" by default; EventDate is "YYYY-MM-DD", "" for the null date) and the outputs of
   GetCoordinatorDetails that the block reads (B :1125-1211, view :296-410; GetCoordinatorDetailsResponse of
   Connect2_OrbitMobile_IS inside Out_CoordinatorDetails) are domain types of api/message; this module keeps the names
   that the screen uses. UBT_Email.UserContactRequest, the input of EventContact (B :1239-1252), is a domain type of
   api/message too. */
export type {
  EventEmailCallInputs as EventEmailInputs,
  EventEmailCoordinatorData as CoordinatorDetailsData,
} from '@/api/message';
