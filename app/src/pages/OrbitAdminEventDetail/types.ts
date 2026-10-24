import type { QRCodeSeatItem } from '@/api/event';
import type { Member } from '@/api/member';

/* ---- Domain (components) ----
   The block variables that DataActionGet_EventInformation sends, a seat of the pass (QRCodeSeatItemRec) and the
   result of a check-in (QRCodeStatusRec) are domain types of api/event; this module keeps the names that the block
   uses. */
export type {
  AdminEventInformationCallInputs as AdminEventDetailVariablesWire,
  QRCodeSeatItem,
  QRCodeStatus,
} from '@/api/event';

/** The route inputs under their original names (P-PARAMS). DateTimes as in the URL (the UTC instant,
    ServerDataConverter.asString = toISOString) or the null date "1900-01-01T00:00:00". */
export interface AdminEventDetailInputs {
  In_EventId: string;
  In_EventName: string;
  In_EventStartDate: string;
  In_EventEndDate: string;
  In_EventLocation: string;
  In_EventTypeFriendly: string;
}

/** Directory_MemberById (APIDomain_Directory_IS): the scanned member, the domain type of api/member. */
export type ScannedMember = Member;

/** ScannedUserRec (Connect2_OrbitMobile_BL): the variable ScannedUser the scan popup shows (fields the block sets). */
export interface ScannedUser {
  Member: ScannedMember;
  SignedURL: string;
  UserRole: string;
  Seats: QRCodeSeatItem[];
  Tag: string;
  GuestRole: string;
}

/** TextBooleanRecord: the variable ScanError (OrbitErrorMessage inputs). */
export interface ScanError {
  IsShowErrorMessage: boolean;
  Message: string;
}
