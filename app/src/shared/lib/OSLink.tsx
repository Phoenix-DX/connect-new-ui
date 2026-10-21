import type { CSSProperties, MouseEvent, ReactNode } from 'react';
import { useOsNavigate } from '../../shell/navigation';

export interface OSLinkProps {
  /** Screen URL (`/UBTConnect/<Screen>`): the link navigates inside the app. Without it the link only runs `onClick`. */
  url?: string;
  className?: string;
  /** Inline style as captured (gridProperties marginLeft "0" → `margin-left: 0px`). */
  style?: CSSProperties;
  /** OnClick of a link without URL. */
  onClick?: () => void;
  children?: ReactNode;
}

/** OutSystems Link widget: `<a data-link>`, href = the screen URL or "#" (the captures keep it as
    `data-original-href`). A click stays in the app like the OutSystems router. */
export function OSLink({ url, className, style, onClick, children }: OSLinkProps) {
  const navigate = useOsNavigate();
  const click = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (url !== undefined) navigate(url);
    else onClick?.();
  };
  return (
    <a className={className} data-link="" href={url ?? '#'} style={style} onClick={click}>
      {children}
    </a>
  );
}
