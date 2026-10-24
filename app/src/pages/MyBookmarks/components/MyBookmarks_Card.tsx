/** @origin Connect2_MyBookmarks_MUI.MyBookmarksFlow.MyBookmarks_Card */
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';

export interface MyBookmarks_CardProps {
  /** OutSystems instance id of the block (`b1-MyBookmarks_Contacts`). */
  id: string;
  /** Id prefix of the block's own elements (`b1-b3`). */
  scope: string;
  /** ObjectGroup (MyBookmarks_Group). */
  objectGroup: string;
  showViewAll: boolean;
  /** Placeholder Placeholder_BookmarksContent. */
  children?: ReactNode;
  /** Event NavigateTo_ViewAll(BookmarkGroup). */
  onNavigateToViewAll: (bookmarkGroup: string) => void;
}

/** MyBookmarks_Card (p:Connect2_MyBookmarks_MUI.MyBookmarksFlow.MyBookmarks_Card.mvc.js view :150-230): title
    "My " + ObjectGroup and, when ShowViewAll, "View All" (both raise NavigateTo_ViewAll(ObjectGroup) on click), the
    content placeholder and "Recent". */
export function MyBookmarks_Card({
  id,
  scope,
  objectGroup,
  showViewAll,
  children,
  onNavigateToViewAll,
}: MyBookmarks_CardProps) {
  return (
    <OSBlock name="MyBookmarksFlow.MyBookmarks_Card" id={id}>
      <div className="bookmark-card" data-container="" id={`${scope}-BookmarkCard`}>
        <div className="bookmark-card-title" data-container="" id={`${scope}-BookmarkCard_Title`}>
          <span
            className="bold"
            data-expression=""
            onClick={() => {
              onNavigateToViewAll(objectGroup);
            }}
          >
            {'My ' + objectGroup}
          </span>
          {showViewAll && (
            <span
              className="text-primary-color text-underline bold"
              data-expression=""
              onClick={() => {
                onNavigateToViewAll(objectGroup);
              }}
            >
              View All
            </span>
          )}
        </div>
        <div className="bookmark-card-placeholder" id={`${scope}-Placeholder_BookmarksContent`}>
          {children}
        </div>
        <div className="bookmark-card-bottom" data-container="" id={`${scope}-BookmarkCard_Bottom`}>
          Recent
        </div>
      </div>
    </OSBlock>
  );
}
