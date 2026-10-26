/** @origin UBTConnect_Utils.CW_Share.ShareSheet */
import type { ReactNode } from 'react';

export interface ShareSheetContainerProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_IsOpen: a change opens or closes the sheet (OnParametersChanged). */
  inIsOpen?: boolean;
  inShareObjectTypeId?: string;
  /** Long Integer (text). */
  inShareableObjectId?: string;
  inIsLegacy?: boolean;
  inUpdateType?: string;
  /** In_UpdateDate (Date, ISO text; OutSystems null date 1900-01-01). */
  inUpdateDate?: string;
  /** Event Event_ClosedShareSheet. */
  onEventClosedShareSheet?: () => void;
  /** Placeholder Placeholder_ShareableObject. */
  children?: ReactNode;
}

/** The input of useShareSheet: the props of the container with their defaults applied. */
export type ShareSheetParams = Required<
  Pick<
    ShareSheetContainerProps,
    'inIsOpen' | 'inShareObjectTypeId' | 'inShareableObjectId' | 'inUpdateType' | 'inUpdateDate'
  >
> &
  Pick<ShareSheetContainerProps, 'onEventClosedShareSheet'>;
