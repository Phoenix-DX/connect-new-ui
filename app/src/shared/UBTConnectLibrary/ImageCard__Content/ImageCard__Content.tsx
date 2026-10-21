// @os-block UBTConnectLibrary.ConnectPatterns.ImageCard__Content
import type { ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { CustomContainer } from '../CustomContainer';
import { UBT_Color, UBT_FontSize, UBT_FontWeight } from '../lib/staticEntities';

export interface ImageCard__ContentProps {
  /** OutSystems instance id of the block. */
  id?: string;
  inTitle?: string;
  inSubtitle?: string;
  inShowSubtitle?: boolean;
  /** Placeholder Placeholder_TopSectionContent. */
  placeholderTopSectionContent?: ReactNode;
  /** Placeholder Placeholder_BottomSectionContent. */
  placeholderBottomSectionContent?: ReactNode;
}

const MAIN_CONTAINER_CLASS = 'image-card-content';

/** Content of an image card (p:UBTConnectLibrary.ConnectPatterns.ImageCard__Content.mvc.js:175-272): top placeholder,
    title (twice "__title", as compiled), the subtitle CustomContainer (neutral-8 xs regular) when In_ShowSubtitle,
    bottom placeholder. */
export function ImageCard__Content({
  id,
  inTitle = '',
  inSubtitle = '',
  inShowSubtitle = false,
  placeholderTopSectionContent,
  placeholderBottomSectionContent,
}: ImageCard__ContentProps) {
  return (
    <OSBlock name="ConnectPatterns.ImageCard__Content" id={id}>
      <div className={MAIN_CONTAINER_CLASS} data-container="">
        <div>{placeholderTopSectionContent}</div>
        <div className={`${MAIN_CONTAINER_CLASS}__title`} data-container="">
          <div className={`${MAIN_CONTAINER_CLASS}__title`} data-container="">
            <span data-expression="">{inTitle}</span>
          </div>
          {inShowSubtitle ? (
            <CustomContainer
              extendedClasses={`${MAIN_CONTAINER_CLASS}__subtitle`}
              options={{
                TextOptions: {
                  Color: UBT_Color.Neutral8,
                  FontSize: UBT_FontSize.ExtraSmall,
                  FontWeight: UBT_FontWeight.Regular,
                },
              }}
            >
              <span data-expression="">{inSubtitle}</span>
            </CustomContainer>
          ) : null}
        </div>
        <div>{placeholderBottomSectionContent}</div>
      </div>
    </OSBlock>
  );
}
