// @os-block UBTConnectLibrary.BasePatterns.CustomContainer
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { styleFromCssText } from '@/shared/lib/cssText';
import {
  formatClasses,
  getClasses_Container,
  getStyle_BackgroundImage,
  getStyle_Opacity,
  getStyle_SizeOptions,
} from '@/shared/UBTConnectLibrary/lib/actions';
import type { ContainerOptions } from './types';

export interface CustomContainerProps {
  /** OutSystems instance id of the block. */
  id?: string;
  extendedClasses?: string;
  options?: ContainerOptions;
  /** Event Clicked. */
  onClicked?: () => void;
  /** Placeholder Content. */
  children?: ReactNode;
}

const MAIN_CONTAINER_CLASS = 'ubt-custom-container';

/* OnReady: SetStyle appends these declarations to the Content placeholder's inline style. */
function readyStyle(options: ContainerOptions): string {
  const parts: string[] = [];
  const { HeightOptions: height = {}, WidthOptions: width = {}, Background: background = {} } = options;
  if (height.Min || height.Main || height.Max) parts.push(getStyle_SizeOptions('height', height));
  if (width.Min || width.Main || width.Max) parts.push(getStyle_SizeOptions('width', width));
  if (background.BackgroundImage?.Image) {
    parts.push(getStyle_BackgroundImage(background.BackgroundImage));
  } else if (background.BackgroundColor) {
    parts.push(getStyle_Opacity('background-color', background.Opacity ?? 0, background.BackgroundColor));
  }
  return parts.join(' ');
}

export function CustomContainer({ id, extendedClasses = '', options = {}, onClicked, children }: CustomContainerProps) {
  const className = formatClasses(MAIN_CONTAINER_CLASS, formatClasses(extendedClasses, getClasses_Container(options)));
  return (
    <OSBlock name="BasePatterns.CustomContainer" id={id}>
      <div
        className={className}
        style={{ cursor: 'pointer', ...styleFromCssText(readyStyle(options)) }}
        onClick={onClicked}
      >
        {children}
      </div>
    </OSBlock>
  );
}
