import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { expectToMatchCapture } from '@/test/dom';
import columns3V1 from '@/shared/osui/Columns3/__captures__/v1.html?raw';
import columns3V2 from '@/shared/osui/Columns3/__captures__/v2.html?raw';
import columns3V4 from '@/shared/osui/Columns3/__captures__/v4.html?raw';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { IconText } from '@/shared/UBTConnectLibrary/IconText';
import { SkeletonSection } from '@/shared/UBTConnectLibrary/SkeletonSection';
import { UBT_ColumnBehaviour, UBT_Size, UBT_VerticalAlign } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { Columns_Three } from './Columns_Three';
import * as stories from './Columns_Three.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const columns3 = (container: HTMLElement) => container.querySelector('[data-block="Adaptive.Columns3"]');

describe('Columns_Three', () => {
  testCapturedVariants(stories, captures);

  /* Every captured Adaptive.Columns3 is rendered by Columns_Three: its markup is checked against those captures. */
  it('renders Columns3 capture v1 (ContactByEmailMember/default)', () => {
    const { container } = render(
      <Columns_Three
        columnOptions={{ ColumnBehaviour: UBT_ColumnBehaviour.ExpandMiddle }}
        left={<CustomContainer />}
        middle={
          <>
            <CustomText inText="Name" />
            <IconText text="Locality" />
          </>
        }
      />,
    );
    expectToMatchCapture(columns3(container), columns3V1);
  });

  it('renders Columns3 capture v2 (ContactUsMenu/default: gutter from SpacingSize, vertical align)', () => {
    const { container } = render(
      <Columns_Three
        columnOptions={{
          ColumnBehaviour: UBT_ColumnBehaviour.ExpandMiddle,
          SpacingSize: UBT_Size.Small,
          VerticalAlign: UBT_VerticalAlign.Center,
        }}
        left={<Icon inIconId="connect-icon-mail" />}
        middle={<CustomText inText="Contact us" />}
        right={<SkeletonSection />}
      />,
    );
    expectToMatchCapture(columns3(container), columns3V2);
  });

  it('renders Columns3 capture v4 (CountryDetails/default: same-size columns)', () => {
    const { container } = render(
      <Columns_Three
        columnOptions={{ ColumnBehaviour: UBT_ColumnBehaviour.SameSize }}
        left={<IconText text="Members" />}
        middle={<IconText text="Houses" />}
        right={<CustomText inText="Localities" />}
      />,
    );
    expectToMatchCapture(columns3(container), columns3V4);
  });

  it('fixed column widths (not captured)', () => {
    const { container } = render(<Columns_Three columnOptions={{ ColumnSizes: { Middle: 40, Right: 24 } }} />);
    expect(container.querySelector('.ubt-columns--left')).not.toHaveClass('ubt-columns--fixed-width');
    const middle = container.querySelector('.ubt-columns--middle');
    expect(middle).toHaveClass('ubt-columns--fixed-width');
    expect(middle?.getAttribute('style')).toContain('--_ubt-column-width: 40px');
    expect(container.querySelector('.ubt-columns--right')?.getAttribute('style')).toContain('24px');
  });
});
