import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { acceptPolicies, usePendingPoliciesQuery, type PendingPoliciesInputs, type PendingPolicy } from '@/api/policy';
import { isCommunicationException, raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { jSUtils_PageOpenInNewTab } from '@/lib/jsUtils';
import { getDeviceInfo } from '@/pages/AcceptPendingPolicies/actions';

/** @origin UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies
    The flows of the block: the GetPendingPolicies data action, its OnAfterFetch, the checkboxes and ContinueOnClick.
    The page calls this hook and gives the result to PendingPoliciesForm. */

/** The events of the block. */
export interface PendingPoliciesFormEvents {
  /** Event AcceptedAll. */
  onAcceptedAll?: () => Promise<void> | void;
  /** Event NetworkError. */
  onNetworkError?: () => void;
}

/** The state and the handlers of the block. */
export interface PendingPoliciesFormState {
  /** GetPendingPolicies.Policies after the last fetch; undefined until the first fetch ends. */
  rows: PendingPolicy[] | undefined;
  isAllSelected: boolean;
  /** ToggleCheckBox of one row (by its index). */
  toggleCheckBox: (index: number) => void;
  /** ToggleSelectAllCheckBox. */
  toggleSelectAllCheckBox: () => void;
  /** ContinueOnClick. */
  continueOnClick: () => Promise<void>;
  /** OnClickPolicy. */
  onClickPolicy: (policy: PendingPolicy) => void;
}

/** The block's list after a fetch: OutSystems replaces GetPendingPolicies.Policies on each fetch (replaceWith) and the
    checkboxes change its IsSelected in place. `at` = the fetch it came from. */
interface ListState {
  at: number;
  rows: PendingPolicy[];
}

/** The App_Policies flow exception handler delegates to App_Common's (Q2): a CommunicationException shows the
    communication message, any other exception (e.g. a server UserException) ShowExceptionMessage(message, False). */
const handleFlowError = raiseToFlowHandler;

/** Policy_Custom_AcceptPendingPolicies: the input parameters PolicyApplications, Country and ContentBlockId, and the
    events AcceptedAll and NetworkError. */
export function usePendingPoliciesForm(
  inputs: PendingPoliciesInputs,
  { onAcceptedAll, onNetworkError }: PendingPoliciesFormEvents,
): PendingPoliciesFormState {
  const [isAllSelected, setIsAllSelected] = useState(false);
  const isAllSelectedRef = useRef(isAllSelected);
  useLayoutEffect(() => {
    isAllSelectedRef.current = isAllSelected;
  });
  const query = usePendingPoliciesQuery(inputs, () => isAllSelectedRef.current);

  const [list, setList] = useState<ListState | null>(null);
  if (query.data && !query.isPlaceholderData && list?.at !== query.dataUpdatedAt) {
    setList({ at: query.dataUpdatedAt, rows: query.data });
  }
  const rows = list?.rows;

  // A failed GetPendingPolicies goes to the screen's handleError → App_Policies flow → App_Common handler (Q2):
  // communication errors → communication message, others → ShowExceptionMessage(message, False). Once per failed fetch.
  const errorAt = query.isError ? query.errorUpdatedAt : 0;
  const fetchError = query.error;
  useEffect(() => {
    if (errorAt !== 0) handleFlowError(fetchError);
  }, [errorAt, fetchError]);

  const events = useRef({ onAcceptedAll, onNetworkError });
  useLayoutEffect(() => {
    events.current = { onAcceptedAll, onNetworkError };
  });

  // GetPendingPoliciesOnAfterFetch: an empty list → Wait 5 s → AcceptedAll, after every fetch. The timers of earlier
  // fetches keep running (each fetch has its own flow); all stop when the block is destroyed.
  const timers = useRef<number[]>([]);
  const fetchedAt = list?.at;
  const fetchedEmpty = rows?.length === 0;
  useEffect(() => {
    if (fetchedAt === undefined || !fetchedEmpty) return;
    timers.current.push(
      window.setTimeout(() => {
        void events.current.onAcceptedAll?.();
      }, 5000),
    );
  }, [fetchedAt, fetchedEmpty]);
  useEffect(() => {
    const pending = timers.current;
    return () => {
      for (const t of pending) window.clearTimeout(t);
    };
  }, []);

  const setRows = (next: PendingPolicy[]) => {
    setList((s) => (s ? { ...s, rows: next } : s));
  };

  // ToggleCheckBox + SelectCheckboxOnChange: IsAllSelected = ListAll(IsSelected).
  const toggleCheckBox = (index: number) => {
    if (!rows) return;
    const next = rows.map((r, i) => (i === index ? { ...r, isSelected: !r.isSelected } : r));
    setRows(next);
    setIsAllSelected(next.every((r) => r.isSelected));
  };

  // ToggleSelectAllCheckBox + SelectAllCheckboxOnChange: every row = IsAllSelected.
  const toggleSelectAllCheckBox = () => {
    if (!rows) return;
    const all = !isAllSelected;
    setIsAllSelected(all);
    setRows(rows.map((r) => ({ ...r, isSelected: all })));
  };

  // ContinueOnClick: ListFilter(IsSelected) → GetDeviceInfo → AcceptPolicies → AcceptedAll; CommunicationException →
  // NetworkError. Other exceptions go to the App_Policies flow handler (Q2).
  const continueOnClick = async () => {
    const selected = (rows ?? []).filter((r) => r.isSelected).map((r) => r.id);
    const device = getDeviceInfo();
    try {
      await acceptPolicies(selected, device);
    } catch (error) {
      if (isCommunicationException(error)) events.current.onNetworkError?.();
      else handleFlowError(error);
      return;
    }
    await events.current.onAcceptedAll?.();
  };

  // OnClickPolicy: CanOpenApplicationPolicyDirectlyViaUrl = IsWeb (ApplicationPolicies_CW, TST copy in
  // migration/shell/sources) → JSUtils_PageOpenInNewTab(Current.Url) on the web (Q1). DetailsOnClick is the native
  // branch (AGENTS rule 14: not built).
  const onClickPolicy = (policy: PendingPolicy) => {
    jSUtils_PageOpenInNewTab(policy.url);
  };

  return { rows, isAllSelected, toggleCheckBox, toggleSelectAllCheckBox, continueOnClick, onClickPolicy };
}
