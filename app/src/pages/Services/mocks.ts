import type { RequestHandler } from 'msw';
import type { ActionOutputs, PathOf } from '@/api/client/callAction';
import { contractHandler } from '@/mocks/contract';
import { fixtureData } from '@/mocks/fixtures';
import { collection } from '@/mocks/store';
import { osList } from '@/legacy/os/os-wire';

/** DataActionGetServices of the Services screen, as the contract describes it. */
type GetServicesOutputsWire = ActionOutputs<PathOf<'UBTConnect', 'Services/DataActionGetServices'>>;
/** Connect_Services_CS.Connect_Services. */
type ConnectServicesWire = GetServicesOutputsWire['AvailableServices']['List'][number];
/** UBTConnect.Connect_ServicesConnect_Service_UserRecord. */
type CurrentServiceWire = GetServicesOutputsWire['CurrentServices']['List'][number];

/* Services (P-MOCKS, P-MUTATION).
   - Services/DataActionGetServices: the recorded TST answer (fixture 02-f72786df.json, re-recorded read-only with the
     real service Id, IconId and ConnectServiceId, Q1) seeds two collections, so the first answer is the recording as
     is.
   - ServiceAPIService_ConnectServices_ChangeOrder_Bulk: a write, never recorded. It replaces the user's current
     services with the list sent (new rows get an id) and recomputes the available ones (every known service not in the
     list, by Order), so the next fetch shows what was saved. Never the real server.
   Scenarios: real, empty (both lists empty), error (HTTP 500), loading (never answers). */
interface GetServicesWire {
  AvailableServices: { List: ConnectServicesWire[] };
  CurrentServices: { List: CurrentServiceWire[] };
}

const recorded = () => fixtureData('UBTConnect', 'Services/DataActionGetServices') as GetServicesWire;

const current = collection(
  'Services.current',
  () => osList(recorded().CurrentServices).map((r) => ({ Id: r.Connect_Service_User.Id, Row: r })),
  'Id',
);
const available = collection(
  'Services.available',
  () => osList(recorded().AvailableServices).map((s, i) => ({ Id: String(i + 1), Row: s })),
  'Id',
);

const currentRows = () =>
  current
    .all()
    .map((r) => r.Row as CurrentServiceWire)
    .sort((a, b) => a.Connect_Service_User.Order - b.Connect_Service_User.Order);
// by Order, as the recorded answer (8, 9, 10); the collection's upsert prepends new rows
const availableRows = () =>
  available
    .all()
    .map((r) => r.Row as ConnectServicesWire)
    .sort((a, b) => a.Order - b.Order);

function saveCurrentServices(sent: CurrentServiceWire[]): void {
  const known = [...availableRows(), ...currentRows().map((r) => r.Connect_Services)];
  for (const r of [...current.all()]) current.remove(r.Id);
  for (const r of [...available.all()]) available.remove(r.Id);
  for (const row of sent) {
    const saved = current.upsert({ Id: row.Connect_Service_User.Id, Row: row });
    const id = String(saved.Id);
    current.upsert({ Id: id, Row: { ...row, Connect_Service_User: { ...row.Connect_Service_User, Id: id } } });
  }
  const chosen = new Set(sent.map((r) => r.Connect_Services.Id));
  known
    .filter((s, i) => !chosen.has(s.Id) && known.findIndex((k) => k.Id === s.Id) === i)
    .sort((a, b) => a.Order - b.Order)
    .forEach((s, i) => available.upsert({ Id: String(i + 1), Row: s }));
}

export const handlers: RequestHandler[] = [
  contractHandler('UBTConnect', 'Services/DataActionGetServices', () => ({
    AvailableServices: { List: availableRows() },
    CurrentServices: { List: currentRows() },
  })),
  contractHandler('UBTConnect', 'ServiceAPIService_ConnectServices_ChangeOrder_Bulk', ({ CurrentServices }) => {
    saveCurrentServices(osList(CurrentServices));
    return {};
  }),
];
