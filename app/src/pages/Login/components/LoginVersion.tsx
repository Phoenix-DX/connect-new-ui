import { OSBlock } from '@/components/ui/os/OSBlock';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { UBT_Color, UBT_Size } from '@/shared/UBTConnect/lib/staticEntities';
import { Version } from '@/shared/UBTConnect/Version';
import { UBT_FontSize_DoubleExtraSmall } from './staticEntities';

/** The app version under the login card: a CustomContainer with margin top base, text colour neutral-10 and font size
    xxs around the Version block.
    @origin UBTConnect.App_Common.Version_LoginWrapper */
export function LoginVersion({ id }: { id?: string }) {
  const prefix = id?.replace('$', '');
  const childId = (n: number) => (prefix === undefined ? undefined : `${prefix}-$b${String(n)}`);
  return (
    <OSBlock name="App_Common.Version_LoginWrapper" id={id}>
      <CustomContainer
        id={childId(1)}
        options={{
          MarginSize: { TopSizeId: UBT_Size.Base },
          TextOptions: { Color: UBT_Color.Neutral10, FontSize: UBT_FontSize_DoubleExtraSmall },
        }}
      >
        <Version id={childId(2)} />
      </CustomContainer>
    </OSBlock>
  );
}
