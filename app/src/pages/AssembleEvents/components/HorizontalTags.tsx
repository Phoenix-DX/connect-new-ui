// @os-block Connect2_LegacyShared.Reusable.HorizontalTags
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { Tag } from '@/shared/osui/Tag';
import type { TagItem } from '@/pages/AssembleEvents/types';

const POINTER = { cursor: 'pointer' };

export interface HorizontalTagsProps {
  id: string;
  tagList: TagItem[];
  activeTagId: string;
  /** Event OnClickTag(TagId). */
  onClickTag: (tagId: string) => void;
}

/** Reusable.HorizontalScrollTiles (p:analysis/sources/pretty/Connect2_LegacyShared.Reusable.HorizontalScrollTiles
    .mvc.js view): Root `horizontal-scroll-tiles` > `horizontal-scroll-tiles-content` > Content placeholder `tile-list`. */
function HorizontalScrollTiles({ id, children }: { id: string; children: React.ReactNode }) {
  const scope = id.replace('$', '');
  return (
    <OSBlock name="Reusable.HorizontalScrollTiles" id={id}>
      <div className="horizontal-scroll-tiles" data-container="" id={`${scope}-Root`}>
        <div className="horizontal-scroll-tiles-content" data-container="">
          <div className="tile-list" id={`${scope}-Content`}>
            {children}
          </div>
        </div>
      </div>
    </OSBlock>
  );
}

/** Reusable.HorizontalTags (p:…/Connect2_LegacyShared.Reusable.HorizontalTags.mvc.js view; dom/default.html:161-190):
    HorizontalScrollTiles holding List_Tags; each tag a clickable container with Content.Tag, ExtendedClass
    "connect-tag" + " connect-tag-active" on ActiveTagId, the Label in `text-no-wrap`. OnClick raises OnClickTag(Id).
    IsScrollToActiveTagOnReady is never set by its caller, so OnReady does nothing. */
export function HorizontalTags({ id, tagList, activeTagId, onClickTag }: HorizontalTagsProps) {
  const scope = id.replace('$', '');
  return (
    <OSBlock name="Reusable.HorizontalTags" id={id}>
      <div data-container="">
        <HorizontalScrollTiles id={`${scope}-$b1`}>
          <OSList
            id={`${scope}-List_Tags`}
            source={tagList}
            keyOf={(tag) => tag.Id}
            className="list list-group"
            animateItems
            disableVirtualization
          >
            {(tag, index) => (
              <div
                data-container=""
                style={POINTER}
                onClick={() => {
                  onClickTag(tag.Id);
                }}
              >
                <Tag
                  id={`${scope}-l1-70_${String(index)}-$b2`}
                  extendedClass={`connect-tag${tag.Id === activeTagId ? ' connect-tag-active' : ''}`}
                >
                  <span className="text-no-wrap" data-expression="">
                    {tag.Label}
                  </span>
                </Tag>
              </div>
            )}
          </OSList>
        </HorizontalScrollTiles>
      </div>
    </OSBlock>
  );
}
