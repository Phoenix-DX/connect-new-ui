import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { NC_Card_Item_Text__Skeleton } from '@/shared/Connect2_LegacyShared/NC_Card_Item_Text__Skeleton';
import { NC_Result_Item__Image__Skeleton } from './NC_Result_Item__Image__Skeleton';

export interface AssembleEventDetail_AttendeeSubdivisionList_SkeletProps {
  /** OutSystems instance id of the block. */
  id: string;
  /** SkeletonListLength: the number of image skeletons (OnInitialize builds SkeletonList with that many items). */
  skeletonListLength: number;
}

/** A ThemeGrid_Width4 `margin-bottom-base` text skeleton, then a `list list-group margin-bottom-s` List of round image
    skeletons in `padding-bottom-s` rows.
    @origin Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivisionList_Skelet */
export function AssembleEventDetail_AttendeeSubdivisionList_Skelet({
  id,
  skeletonListLength,
}: AssembleEventDetail_AttendeeSubdivisionList_SkeletProps) {
  const scope = id.replace(/\$/g, '');
  const skeletonList = Array.from({ length: skeletonListLength }, (_, i) => i);
  return (
    <OSBlock name="Assemble.AssembleEventDetail_AttendeeSubdivisionList_Skelet" id={id}>
      <div className="margin-bottom-base ThemeGrid_Width4" data-container="">
        <NC_Card_Item_Text__Skeleton id={`${scope}-$b1`} />
      </div>
      <OSList className="list list-group margin-bottom-s" animateItems source={skeletonList} keyOf={(i) => i}>
        {(i) => (
          <div className="padding-bottom-s" data-container="">
            <NC_Result_Item__Image__Skeleton id={`${scope}-$b2-${String(i)}`} inIsRoundImage />
          </div>
        )}
      </OSList>
    </OSBlock>
  );
}
