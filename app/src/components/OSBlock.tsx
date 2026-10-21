import type { ReactNode } from 'react';

/* Same wrapper OutSystems renders around every block. Keep the captured name/id: CSS and reviews rely on it. */
export function OSBlock({ name, id, children }: { name: string; id?: string; children?: ReactNode }) {
  return (
    <div className="OSBlockWidget" data-block={name} id={id}>
      {children}
    </div>
  );
}
