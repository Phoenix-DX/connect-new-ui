import type { ReactNode } from 'react';
import { OrbitBlankLayout } from '@/components/layout/OrbitBlankLayout/OrbitBlankLayout';
import { OSBlock } from '@/components/ui/os/OSBlock';
import type { BackNavigationEvent } from '@/platform/navigation';
import { BackNavigationHandler } from '@/platform/navigation/BackNavigationHandler/BackNavigationHandler';

interface ScreenBlock_PassportScanProps {
  /** OutSystems instance id of the block. */
  id: string;
  /** Placeholder CommonUI_Elements. */
  commonUIElements?: ReactNode;
  /** Handler_BackNavigation of the block (`usePassportScan`). */
  onBackNavigation: (event: BackNavigationEvent) => void;
}

/** The DOM id of the Container `passportScan`, the container of the embed (`idService.getId("passportScan")`). */
export const passportScanContainerId = (id: string): string => `${id.replace('$', '')}-passportScan`;

/** The full-screen style of the Container `passportScan` (ScreenBlock_PassportScan.mvc.js:209, compiled view). */
const PASSPORT_SCAN_STYLE = { position: 'absolute', top: 0, left: 0, height: '100vh', width: '100vw' } as const;

/** @origin OrbitPassportScanC2.PassportScan.ScreenBlock_PassportScan
    The view of the block (ScreenBlock_PassportScan.mvc.js:187-262): Layout_OrbitBlank with the Container
    `passportScan` in Content (the embed loader fills it with the portal iframe; React renders no child in it) and
    the placeholder CommonUI_Elements, then BackNavigationHandler. Props only: the flows are in `usePassportScan`. */
export function ScreenBlock_PassportScan({ id, commonUIElements, onBackNavigation }: ScreenBlock_PassportScanProps) {
  const prefix = id.replace('$', '');
  return (
    <OSBlock name="PassportScan.ScreenBlock_PassportScan" id={id}>
      <OrbitBlankLayout
        id={`${prefix}-$b1`}
        content={<div data-container="" id={passportScanContainerId(id)} style={PASSPORT_SCAN_STYLE} />}
        commonUIElements={<div id={`${prefix}-CommonUI_Elements`}>{commonUIElements}</div>}
      />
      <BackNavigationHandler id={`${prefix}-$b2`} onBackNavigation={onBackNavigation} />
    </OSBlock>
  );
}
