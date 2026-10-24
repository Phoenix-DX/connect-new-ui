import type { Service } from '@/api/service';
import { Icon } from '@/components/ui/Icon';
import { IconText } from '@/components/ui/IconText';
import {
  UBT_Color,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_IconsSize,
  UBT_Size,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import type { TextOptions } from '@/shared/UBTConnectLibrary/lib/structures';

export interface ServiceIconTextProps {
  /** OutSystems instance id of the IconText. */
  id: string;
  /** OutSystems instance id of the Icon. */
  iconBlockId: string;
  service: Service;
}

const ITEM_TEXT: TextOptions = {
  Color: UBT_Color.Neutral10,
  FontSize: UBT_FontSize.Base,
  FontWeight: UBT_FontWeight.SemiBold,
};

/** The icon and the label of a service in a row.
    @origin UBTConnect.App_Services.Services */
export function ServiceIconText({ id, iconBlockId, service }: ServiceIconTextProps) {
  return (
    <IconText id={id} text={service.label} textOptions={ITEM_TEXT} spacingSize={UBT_Size.Small}>
      <Icon id={iconBlockId} inIconId={service.iconId} inSizeId={UBT_IconsSize.Base_24} />
    </IconText>
  );
}
