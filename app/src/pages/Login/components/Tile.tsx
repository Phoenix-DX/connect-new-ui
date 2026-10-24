import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { formatClasses } from '@/lib/ubtConnectLibrary/actions';
import { UBT_Color, UBT_Size } from '@/lib/ubtConnectLibrary/staticEntities';
import { UBT_Shape_Large } from './staticEntities';

export interface TileProps {
  /** OutSystems instance id of the block. */
  id?: string;
  extendedClasses?: string;
  /** Placeholder Content. */
  children?: ReactNode;
}

const MAIN_CONTAINER_CLASS = 'ubt-tile';

/** A card: a CustomContainer with background neutral-0, padding base and radius large, the classes
    FormatClasses(MainContainerClass "ubt-tile", ExtendedClasses), and the Content placeholder (captured
    `<div id="b2-Content">`).
    @origin UBTConnectLibrary.ConnectPatterns.Tile */
export function Tile({ id, extendedClasses = '', children }: TileProps) {
  const prefix = id?.replace('$', '');
  return (
    <OSBlock name="ConnectPatterns.Tile" id={id}>
      <CustomContainer
        id={prefix === undefined ? undefined : `${prefix}-$b1`}
        extendedClasses={formatClasses(MAIN_CONTAINER_CLASS, extendedClasses)}
        options={{
          Background: { BackgroundColor: UBT_Color.Neutral0 },
          PaddingSize: { GeneralSizeId: UBT_Size.Base },
          BorderOptions: { Radius: { GeneralSizeId: UBT_Shape_Large } },
        }}
      >
        <div id={prefix === undefined ? undefined : `${prefix}-Content`}>{children}</div>
      </CustomContainer>
    </OSBlock>
  );
}
