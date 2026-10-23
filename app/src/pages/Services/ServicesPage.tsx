import { DetailLayout } from '@/components/layout';
import { useNoCommonUi } from '@/platform/feedback/dialogs';
import { useNavigateBack } from '@/platform/navigation';
import { ServicesContent } from './components/ServicesContent';
import { ServicesFooter } from './components/ServicesFooter';
import { useServices } from './hooks/useServices';

/** The id of the content container, which the fixed footer pads. */
const CONTENT_CONTAINER_ID = 'ContentWrapper';

/** @origin UBTConnect.App_Services.Services
    The services of the user: the detail layout "Manage Services" with the favourites and the suggestions, which the
    user orders, removes and adds by drag or by icon, and the fixed "Save changes" button. The flows are in
    useServices. Captured dom/default.html, loading.html and offline.html. */
export default function Services() {
  // The Placeholder_CommonUI_Inside_Layout of Layout_DetailPage is empty: no CommonUI, so the shell mounts neither
  // Access Restricted nor the lock container, and no InactivityTimer runs here (CR-Services-1)
  useNoCommonUi();
  const navigateBack = useNavigateBack();
  const { lists, isFetching, hasFetchError, isSkeletonLoading, isLoading, onDragEnd, onRemove, onAdd, onSaveChanges } =
    useServices();

  return (
    <DetailLayout
      id="$b1"
      headerTitle="Manage Services"
      onBack={navigateBack}
      content={
        <>
          <ServicesContent
            id={CONTENT_CONTAINER_ID}
            lists={lists}
            isSkeletonLoading={isSkeletonLoading}
            isFetching={isFetching}
            hasFetchError={hasFetchError}
            onDragEnd={onDragEnd}
            onRemove={onRemove}
            onAdd={onAdd}
          />
          <ServicesFooter
            contentContainerId={CONTENT_CONTAINER_ID}
            isLoading={isLoading}
            onSaveChanges={onSaveChanges}
          />
        </>
      }
    />
  );
}
