import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { expectToMatchCapture } from '@/test/dom';
import columns2V2 from '@/shared/osui/Columns2/__captures__/v2.html?raw';
import columns2V3 from '@/shared/osui/Columns2/__captures__/v3.html?raw';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { PendingBlock } from '@/shared/test/PendingBlock';
import { CustomText } from '@/components/ui/CustomText';
import { Icon } from '@/components/ui/Icon';
import { UBT_Size, UBT_VerticalAlign } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { ColumnsTwo } from './ColumnsTwo';
import * as stories from './ColumnsTwo.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const columns2 = (container: HTMLElement) => container.querySelector('[data-block="Adaptive.Columns2"]');

describe('Columns_Two', () => {
  testCapturedVariants(stories, captures);

  /* Every captured Adaptive.Columns2 is rendered by Columns_Two: its own markup is checked against those captures. */
  it('renders Columns2 capture v2 (BrowseDirectory/default)', () => {
    const { container } = render(
      <ColumnsTwo
        extendedClasses="margin-left-base"
        columnOptions={{ ColumnBehaviour: 'reduce-last' }}
        left={<PendingBlock name="ConnectPatterns.IconText" />}
        right={<Icon inIconId="connect-icon-chevron_right" />}
      />,
    );
    expectToMatchCapture(columns2(container), columns2V2);
  });

  it('renders Columns2 capture v3 (BrowseDirectory/default)', () => {
    const { container } = render(
      <ColumnsTwo
        columnOptions={{
          ColumnBehaviour: 'reduce-first',
          SpacingSize: UBT_Size.Base,
          VerticalAlign: UBT_VerticalAlign.Center,
        }}
        left={
          <div>
            <Icon inIconId="connect-icon-book_closed" />
          </div>
        }
        right={<CustomText inText="Select another country to view" />}
      />,
    );
    expectToMatchCapture(columns2(container), columns2V3);
  });

  it('fixed column width (not captured)', () => {
    const { container } = render(<ColumnsTwo columnOptions={{ ColumnSizes: { Left: 48 } }} />);
    const left = container.querySelector('.ubt-columns--left');
    expect(left).toHaveClass('ubt-columns--fixed-width');
    expect(left?.getAttribute('style')).toContain('--_ubt-column-width: 48px');
    expect(container.querySelector('.ubt-columns--right')).not.toHaveClass('ubt-columns--fixed-width');
  });
});
