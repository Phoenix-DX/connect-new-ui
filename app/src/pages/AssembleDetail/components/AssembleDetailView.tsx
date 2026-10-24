import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { LegacyLayout } from '@/components/layout/LegacyLayout';
import { MenuIcon } from '@/components/layout/MenuIcon';
import { MenuAction } from '@/shared/Connect2_LegacyShared/lib/staticEntities';
import { NewConnectContent } from '@/components/ui/NewConnectContent';

export interface AssembleDetailViewProps {
  /** OutSystems instance id of the block (`$b2`). */
  id: string;
  /** Title: the header title. */
  title: string;
  /** AssembleEventDetail (instance `<scope>-$b4`), given by the page. */
  eventDetail: ReactNode;
  /** FocusScrollAnchorOnBack (instance `<scope>-$b5`), given by the page. */
  focusScrollAnchor: ReactNode;
  /** The BottomBar placeholder (BottomBarMenu). */
  bottomBar?: ReactNode;
}

/** The view of the block ScreenBlock_AssembleDetail, props only. Layout: the back arrow, the title, then
    NewConnectContent with the meeting detail and FocusScrollAnchorOnBack, the BottomBar and the empty Menu and
    CommonUI_Elements placeholders. The flows are in useAssembleDetail.
    @origin Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleDetail */
export function AssembleDetailView({ id, title, eventDetail, focusScrollAnchor, bottomBar }: AssembleDetailViewProps) {
  const scope = id.replace(/\$/g, '');
  return (
    <OSBlock name="Assemble.ScreenBlock_AssembleDetail" id={id}>
      <LegacyLayout
        id={`${scope}-Layout`}
        menu={<div id={`${scope}-Menu`} />}
        headerLeft={<MenuIcon id={`${scope}-$b2`} menuAction={MenuAction.Back} />}
        title={<span data-expression="">{title}</span>}
        content={
          <NewConnectContent id={`${scope}-$b3`}>
            {eventDetail}
            {focusScrollAnchor}
          </NewConnectContent>
        }
        bottomBar={<div id={`${scope}-BottomBar`}>{bottomBar}</div>}
        commonUIElements={<div id={`${scope}-CommonUI_Elements`} />}
      />
    </OSBlock>
  );
}
