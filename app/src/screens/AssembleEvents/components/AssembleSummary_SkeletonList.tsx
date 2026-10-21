// @os-block Connect2_Assemble_MUI.AssembleSkeleton.AssembleSummary_SkeletonList
import { OSBlock } from '../../../components/OSBlock';
import { OSList } from '../../../components/OSList';
import { AssembleSummaryDetailHeader_Skeleton } from '../../../shared/Connect2_Assemble_MUI/AssembleSummaryDetailHeader_Skeleton';
import { NC_Card_Item_Text__Skeleton } from '../../../shared/Connect2_LegacyShared/NC_Card_Item_Text__Skeleton';
import { NC_Result_Item_Badge } from '../../../shared/Connect2_LegacyShared/NC_Result_Item_Badge';

export interface AssembleSummary_SkeletonListProps {
  id: string;
  skeletonListLength: number;
}

/** AssembleSkeleton.AssembleSummary_SkeletonList, as captured (loading.html:221-330; the block's compiled view is not
    in the local sources, only in the survey): a List of SkeletonListLength rows, each
    `background-neutral-1 padding-bottom-s` > `background-neutral-0` > AssembleSummaryDetailHeader_Skeleton with text
    skeletons (Width8 / Width5 subtitle, Width7 title, Width6 location), a bottom subtitle holding one space (captured 4 px wide, no :empty ::after) and a 73 px neutral
    badge. NC_Result_Item__Card__Location (not built) is rendered here with its captured markup. */
export function AssembleSummary_SkeletonList({ id, skeletonListLength }: AssembleSummary_SkeletonListProps) {
  const scope = id.replace('$', '');
  const rows = Array.from({ length: skeletonListLength }, (_, i) => i);
  return (
    <OSBlock name="AssembleSkeleton.AssembleSummary_SkeletonList" id={id}>
      <OSList source={rows} keyOf={(i) => i} className="list list-group" animateItems positionRelative>
        {(i) => {
          const p = `${scope}-l1-75_${String(i)}`;
          return (
            <div className="background-neutral-1 padding-bottom-s" data-container="">
              <div className="background-neutral-0" data-container="">
                <AssembleSummaryDetailHeader_Skeleton
                  id={`${p}-$b1`}
                  placeholderSubtitleTop={
                    <>
                      <div className="font-size-h6 margin-bottom-s ThemeGrid_Width8" data-container="">
                        <NC_Card_Item_Text__Skeleton id={`${p}-$b2`} />
                      </div>
                      <div className="font-size-xs ThemeGrid_Width5" data-container="">
                        <NC_Card_Item_Text__Skeleton id={`${p}-$b3`} />
                      </div>
                    </>
                  }
                  placeholderTitle={
                    <div className="ThemeGrid_Width7" data-container="">
                      <NC_Card_Item_Text__Skeleton id={`${p}-$b4`} />
                    </div>
                  }
                  placeholderSubtitleBottom={<span data-expression=""> </span>}
                  placeholderRight={<NC_Result_Item_Badge id={`${p}-$b5`} size="73px" />}
                  placeholderLocation={
                    <OSBlock name="NewConnect_Utilities.NC_Result_Item__Card__Location" id={`${p}-$b6`}>
                      <div
                        className="padding-y-s border-top-s text-neutral-2 font-size-xs font-regular"
                        id={`${p}-b6-Placeholder_Location`}
                      >
                        <div className="ThemeGrid_Width6" data-container="">
                          <NC_Card_Item_Text__Skeleton id={`${p}-$b7`} />
                        </div>
                      </div>
                    </OSBlock>
                  }
                />
              </div>
            </div>
          );
        }}
      </OSList>
    </OSBlock>
  );
}
