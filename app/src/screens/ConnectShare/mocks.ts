import type { RequestHandler } from 'msw';
import { ServerException } from '@/legacy/os/os-exceptions';
import { contractHandler } from '../../mocks/contract';
import { Type_ShareObject } from '../../shared/UBTConnect/lib/staticEntities';
import type { Get_ShareDetailsWire } from './types';

/* Get_ShareDetails was not recorded (share data is person data, migration/knowledge/mock-fixtures.md): fictional.
   - Every ShareId not listed below (the capture's 00000000-0000-0000-0000-000000000000 included) raises the exception
     the capture shows (calls.md #1: data {} + exception). Its message is masked in the capture (dom/default.html:77,
     54 masked characters shown on one line): the text here is fictional, marked as a mock, and short enough to stay
     on one line like the captured title (Q1, conservative choice).
   - The ShareIds below exercise the branches the capture did not reach (Q2 → A, pending the orchestrator's answer):
     the redirects go to the ids the built target screens were captured with (HouseholdId 42438,
     In_OneSchoolGlobalId 1430, In_SubdivsionId 1210) and a fictional FeedItemId. */

type ShareWire = Get_ShareDetailsWire;

const NULL_DATE = '1900-01-01';
const NULL_DATETIME = '1900-01-01T00:00:00Z';
const emptyPhoto = { Bucket: '', Path: '', SignedPath: '', Type: '' };

interface ShareCase {
  available?: boolean;
  typeId: string;
  objectId: string;
  itemId?: string;
  canAccess?: boolean;
  householderId?: string;
}

const share = ({
  available = true,
  typeId,
  objectId,
  itemId = objectId,
  canAccess = true,
  householderId = '0',
}: ShareCase): ShareWire => ({
  IsShareAvailable: available,
  UpdateDate: NULL_DATE,
  ShareObjectType: {
    APIKey: '',
    Id: typeId,
    Is_Active: true,
    Label: typeId,
    LabelPrefix: '',
    NotificationTitle: '',
    Order: 0,
  },
  ShareDetails: {
    Id: '9001',
    DateCreatedUTC: NULL_DATETIME,
    ObjectId: objectId,
    ObjectName: '',
    Details: {
      Sender: {
        CountryCode: '',
        CountryId: '',
        CountryName: '',
        Email: '',
        FirstName: '',
        FullName: '',
        HasAccess: true,
        Id: '',
        LastName: '',
        LocalityId: '',
        LocalityName: '',
        MemberId: '0',
        Photo: emptyPhoto,
        Source: '',
      },
      ShareItem: {
        BirthType: '',
        CanAccess: canAccess,
        CountryName: '',
        DateTime: NULL_DATETIME,
        Description: '',
        Extension: { FullName: '', IsDeceased: false },
        GenderId: '',
        HouseholderId: householderId,
        Id: itemId,
        IsVisible: true,
        Label: '',
        LocalityName: '',
        ParentsName: '',
        Photo: emptyPhoto,
        Subtitle: '',
        Title: '',
        Type: '',
      },
    },
  },
});

const shareId = (n: number): string => `00000000-0000-0000-0000-${String(n).padStart(12, '0')}`;

/** Fictional shares by ShareId, one per branch of OnInitializeSharingScreen / Action_Redirect. */
export const MOCK_SHARES: Readonly<Record<string, ShareWire>> = {
  // IsShareAvailable False → "This shared item is no longer available"
  [shareId(1)]: share({ available: false, typeId: Type_ShareObject.Household, objectId: '42438' }),
  // ShareItem.Id "" → "This shared item is no longer available"
  [shareId(2)]: share({ typeId: Type_ShareObject.Household, objectId: '42438', itemId: '' }),
  // CanAccess False → upgrade popup after 1 s and "You don't have access to shared item"
  [shareId(3)]: share({ typeId: Type_ShareObject.Household, objectId: '42438', canAccess: false }),
  // Household → HouseholdDetails?HouseholdId=42438
  [shareId(4)]: share({ typeId: Type_ShareObject.Household, objectId: '42438' }),
  // Update → HouseholdDetails with the householder's id
  [shareId(5)]: share({ typeId: Type_ShareObject.Update, objectId: '5001', householderId: '42438' }),
  // OneSchool Global → OneSchoolGlobalDetails?In_OneSchoolGlobalId=1430
  [shareId(6)]: share({ typeId: Type_ShareObject.OneSchoolGlobal, objectId: '1430' }),
  // Feed (always accessible) → FeedItemDetail?FeedItemId=mock-feed-item-1
  [shareId(7)]: share({ typeId: Type_ShareObject.Feed, objectId: 'mock-feed-item-1', canAccess: false }),
  // Supper Meeting → SupperMeeting_Details?In_SubdivsionId=1210
  [shareId(8)]: share({ typeId: Type_ShareObject.SupperMeeting, objectId: '1210' }),
  // a type Action_Redirect does not route (Locality) → IsRedirect False, empty status
  [shareId(9)]: share({ typeId: Type_ShareObject.Locality, objectId: '1001' }),
};

export const handlers: RequestHandler[] = [
  contractHandler('UBTConnect', 'ActionGet_ShareDetails', ({ ShareId }) => {
    const found = MOCK_SHARES[ShareId];
    if (!found) throw new ServerException('Share not found (mock message)');
    return found;
  }),
];
