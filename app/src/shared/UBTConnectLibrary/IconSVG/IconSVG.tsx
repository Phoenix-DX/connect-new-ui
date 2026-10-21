// @os-block UBTConnectLibrary.ConnectPatterns.IconSVG
import { OSBlock } from '../../../components/OSBlock';
import { osImage } from '../../../lib/os-assets';
import { UBT_Icons } from '../lib/staticEntities';

export interface IconSVGProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_IconId: UBT_Icons identifier of an SVG icon. */
  inIconId?: string;
}

/* One If per icon in the compiled view; at most one matches. */
const IMAGES: readonly (readonly [string, string])[] = [
  [UBT_Icons.SVG_OneSchoolGlobal, 'OneSchoolGlobal.svg'],
  [UBT_Icons.SVG_PinLock, 'Pin_Lock.svg'],
  [UBT_Icons.SVG_PinHouse, 'Pin_House.svg'],
  [UBT_Icons.SVG_PinMember, 'Pin_Member.svg'],
  [UBT_Icons.SVG_PinOneSchool, 'Pin_OneSchool.svg'],
  [UBT_Icons.SVG_HR100, 'HR100.svg'],
  [UBT_Icons.SVG_ElGusto, 'ElGusto.svg'],
  [UBT_Icons.SVG_CommunityTradelink, 'CommunityTradelink.svg'],
  [UBT_Icons.SVG_PinLocality, 'Pin_Locality.svg'],
  [UBT_Icons.SVG_PinCountry, 'Pin_Country.svg'],
];

export function IconSVG({ id, inIconId = '' }: IconSVGProps) {
  const file = IMAGES.find(([iconId]) => iconId === inIconId)?.[1];
  return (
    <OSBlock name="ConnectPatterns.IconSVG" id={id}>
      {file && <img data-image="" src={osImage(`img/UBTConnectLibrary.${file}`)} />}
    </OSBlock>
  );
}
