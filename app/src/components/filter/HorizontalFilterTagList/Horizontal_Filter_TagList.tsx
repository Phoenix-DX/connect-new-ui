/** @origin UBTConnectLibrary.ConnectPatterns.Horizontal_Filter_TagList */
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { formatClasses } from '@/lib/ubtConnectLibrary/actions';
import { UBT_Size } from '@/lib/ubtConnectLibrary/staticEntities';
import type { Tag } from '@/lib/ubtConnectLibrary/structures';
import { Skeleton } from '@/components/ui/Skeleton';
import { TagToggle } from '@/components/ui/TagToggle';
import { useTagToggleList } from '@/components/ui/HorizontalTagList/useTagToggleList';
import { child, scopeOf } from '@/components/ui/os/blockIds';

interface Horizontal_Filter_TagListProps {
  id?: string;
  inTagToggleList: Tag[];
  inIsSingleSelection?: boolean;
  inIsMandatorySelection?: boolean;
  inHorizontalPadding?: string;
  extendedClasses?: string;
  isEnabled?: boolean;
  inTagsLoading?: boolean;
  /** Placeholder Filter. */
  filter?: ReactNode;
  /** Event Changed(UpdatedTagList). */
  onChanged?: (tagToggleList: Tag[]) => void;
}

const MAIN_CONTAINER_CLASS = 'ubt-tag-list';

/** Filter placeholder and a row of TagToggles (survey UBTConnectLibrary.ConnectPatterns.Horizontal_Filter_TagList.mvc.js).
    TagToggleToggle is the same flow as HorizontalTagList's (`useTagToggleList`: single selection, mandatory selection,
    Changed). */
export function Horizontal_Filter_TagList({
  id,
  inTagToggleList,
  inIsSingleSelection = false,
  inIsMandatorySelection = false,
  inHorizontalPadding = '',
  extendedClasses = '',
  isEnabled = true,
  inTagsLoading = false,
  filter,
  onChanged,
}: Horizontal_Filter_TagListProps) {
  const p = scopeOf(id);
  const { list, toggle } = useTagToggleList(inTagToggleList, {
    isSingleSelection: inIsSingleSelection,
    isMandatorySelection: inIsMandatorySelection,
    onChanged,
  });
  const listClass =
    formatClasses(
      formatClasses('list list-group list-horizontal--gap-xs horizontal-tabs-list', MAIN_CONTAINER_CLASS),
      extendedClasses,
    ) + (inHorizontalPadding !== '' ? ' padding-x-' + inHorizontalPadding : '');
  return (
    <OSBlock name="ConnectPatterns.Horizontal_Filter_TagList" id={id}>
      <CustomContainer
        id={child(p, 1)}
        extendedClasses="horizontal-tabs-filter-container"
        options={{ PaddingSize: { VerticalSizeId: UBT_Size.ExtraSmall }, DisplayOptions: {} }}
      >
        <CustomContainer id={child(p, 2)}>
          <div className="horizontal-tabs-filter" id={`${p}-Filter`}>
            {filter}
          </div>
        </CustomContainer>
        <Skeleton id={child(p, 3)} isLoading={inTagsLoading}>
          <div className={`${listClass} OSFillParent`} data-list="" data-virtualization-disabled="">
            {list.map((tag, i) => (
              <TagToggle
                key={i}
                id={`${p}-l1-60_${String(i)}-$b4`}
                tag={tag}
                isEnabled={isEnabled && (tag.Enabled ?? true)}
                onEventClick={(isSelected) => {
                  toggle(isSelected, i, tag.Enabled ?? true);
                }}
              />
            ))}
          </div>
        </Skeleton>
      </CustomContainer>
    </OSBlock>
  );
}
