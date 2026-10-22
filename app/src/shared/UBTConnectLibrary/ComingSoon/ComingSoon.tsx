// @os-block UBTConnectLibrary.ConnectPatterns.ComingSoon
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import { UBT_Size } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import type { TextOptions } from '@/shared/UBTConnectLibrary/lib/structures';

export interface ComingSoonProps {
  /** OutSystems instance id of the block. */
  id?: string;
  inTextOptions?: TextOptions;
}

/** "Coming Soon" box (p:UBTConnectLibrary.ConnectPatterns.ComingSoon.mvc.js:147-195): a padding-base CustomContainer
    (border Size / Radius records empty) holding a centered CustomText with the caller's text options. */
export function ComingSoon({ id, inTextOptions = {} }: ComingSoonProps) {
  return (
    <OSBlock name="ConnectPatterns.ComingSoon" id={id}>
      <CustomContainer
        extendedClasses="ubt-coming-soon"
        options={{ PaddingSize: { GeneralSizeId: UBT_Size.Base }, BorderOptions: { Size: {}, Radius: {} } }}
      >
        <CustomText inTextOptions={inTextOptions} inText="Coming Soon" extendedClasses="text-align-center" />
      </CustomContainer>
    </OSBlock>
  );
}
