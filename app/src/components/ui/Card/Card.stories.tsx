import type { Meta, StoryObj } from '@storybook/react-vite';
import { styleFromCssText } from '@/lib/cssText';
import { PendingBlock } from '@/test/PendingBlock';
import { Card } from './Card';

const meta = { title: 'Shared/osui/Card', component: Card } satisfies Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof meta>;

/** MessageDetail/default: the notification detail card (caller markup as captured; the info line is masked) */
export const V1: Story = {
  args: {
    children: (
      <>
        <div className="display-flex align-items-center" data-container="">
          <div className="notification-detail-icon-badge" data-container="">
            <img data-image="" src="/UBT_CW/img/UBT_CW.directory_entity_logo.png" alt="" />
          </div>
          <div
            className="ThemeGrid_Width8"
            data-container=""
            style={styleFromCssText('margin-top: 10px; padding: 0px 0px 0px 5px;')}
          >
            <div className="bold heading3" data-container="" style={styleFromCssText('font-size: 100%;')}>
              <span data-expression="" style={styleFromCssText('font-size: 100%;')}>
                Test Noti 56
              </span>
            </div>
          </div>
          <div
            className="ThemeGrid_Width2"
            data-container=""
            style={styleFromCssText('text-align: center; margin-left: 5px; margin-top: 10px; padding: 0px;')}
          />
        </div>
        <div
          className="margin-top-base"
          data-container=""
          style={styleFromCssText(
            'border-color: rgb(198, 198, 198); border-style: solid; border-width: 2px 0px 0px; margin-right: 10px; margin-top: 10px; padding: 15px 0px 10px;',
          )}
        >
          <div
            className="whitespace-normal notification-detail-content"
            data-container=""
            style={styleFromCssText('white-space: normal; word-break: break-word;')}
          >
            <PendingBlock name="HtmlSanitizer.SanitizedHtml" />
          </div>
        </div>
        <div className="margin-top-base" data-container="" style={styleFromCssText('margin-top: 3px;')}>
          <span className="text-note" data-expression="">
            Open every day from 9 am
          </span>
        </div>
      </>
    ),
  },
};
