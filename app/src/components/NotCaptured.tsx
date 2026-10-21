import type { ReactNode } from 'react';
import { showReviewMarkers } from '../shell/reviewMarkers';

/* Marker for anything the capture does not contain (block, state, image, popup, unmigrated screen).
   Never replace it with an invented design. The frame shows on the dev server with `?review=1` only (shell/reviewMarkers.ts); built
   apps render the content built from the compiled code without the frame, and nothing for an empty marker. */
export function NotCaptured({ name, children }: { name: string; children?: ReactNode }) {
  if (!showReviewMarkers()) return <>{children}</>;
  return (
    <div className="rv-missing" data-not-captured={name}>
      <b>Not captured: {name}</b>
      {children}
    </div>
  );
}
