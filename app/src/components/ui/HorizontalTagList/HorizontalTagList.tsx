/** @origin UBTConnectLibrary.ConnectPatterns.HorizontalTagList */
// @os-block UBTConnectLibrary.ConnectPatterns.HorizontalTagList
import { OSBlock } from '@/components/ui/os/OSBlock';
import { TagToggle } from '@/components/ui/TagToggle';
import { formatClasses } from '@/lib/ubtConnectLibrary/actions';
import type { Tag } from './types';
import { useTagToggleList } from './useTagToggleList';

export interface HorizontalTagListProps {
  /** OutSystems instance id of the block. */
  id?: string;
  inTagToggleList?: Tag[];
  inIsSingleSelection?: boolean;
  inIsMandatorySelection?: boolean;
  /** UBT_Size identifier: " padding-x-" + it on the list. */
  inHorizontalPadding?: string;
  extendedClasses?: string;
  isEnabled?: boolean;
  /** Event Changed(In_TagToggleList): the list after a toggle. */
  onChanged?: (tagToggleList: Tag[]) => void;
}

const MAIN_CONTAINER_CLASS = 'ubt-tag-list';

/* Stable empty defaults: a new {} / [] per render would count as a new input. */
const NO_TAGS: Tag[] = [];

/** Row of TagToggles (p:UBTConnectLibrary.ConnectPatterns.HorizontalTagList.mvc.js view :68-137). The list input is
    the block's own copy (TagToggleToggle changes it); a new input replaces it. */
export function HorizontalTagList({
  id,
  inTagToggleList = NO_TAGS,
  inIsSingleSelection = false,
  inIsMandatorySelection = false,
  inHorizontalPadding = '',
  extendedClasses = '',
  isEnabled = true,
  onChanged,
}: HorizontalTagListProps) {
  /* TagToggleToggle (:322-430): useTagToggleList. An omitted Enabled is True (TagRec defaults, :1269-1274). */
  const { list, toggle } = useTagToggleList(inTagToggleList, {
    isSingleSelection: inIsSingleSelection,
    isMandatorySelection: inIsMandatorySelection,
    onChanged,
  });

  const listClass =
    formatClasses(formatClasses('list list-group list-horizontal--gap-xs', MAIN_CONTAINER_CLASS), extendedClasses) +
    (inHorizontalPadding !== '' ? ' padding-x-' + inHorizontalPadding : '');
  return (
    <OSBlock name="ConnectPatterns.HorizontalTagList" id={id}>
      <div className={`${listClass} OSFillParent`} data-list="" data-virtualization-disabled="">
        {list.map((tag, i) => (
          <TagToggle
            key={i}
            tag={tag}
            isEnabled={isEnabled && (tag.Enabled ?? true)}
            onEventClick={(isSelected) => {
              toggle(isSelected, i, tag.Enabled ?? true);
            }}
          />
        ))}
      </div>
    </OSBlock>
  );
}
