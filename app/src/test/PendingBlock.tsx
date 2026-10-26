import { NotCaptured } from '@/platform/feedback/NotCaptured';
import { OSBlock } from '@/components/ui/os/OSBlock';

/** Stories only: stand-in for a nested block that is not built yet. Same root wrapper as the real block (the capture
    tests compare only that wrapper for nested blocks); its content is a visible "not built" marker. */
export function PendingBlock({ name }: { name: string }) {
  return (
    <OSBlock name={name}>
      <NotCaptured name={`${name} (block not built yet)`} />
    </OSBlock>
  );
}
