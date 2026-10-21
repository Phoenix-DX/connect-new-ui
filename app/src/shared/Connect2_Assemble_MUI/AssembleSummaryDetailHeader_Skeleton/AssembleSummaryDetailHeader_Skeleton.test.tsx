import { composeStories } from '@storybook/react-vite';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '../../test/capturedVariants';
import { expectToMatchCapture } from '../../../test/dom';
import * as cardStories from '../../Connect2_LegacyShared/NC_Result_Item__Card/NC_Result_Item__Card.stories';
import * as stories from './AssembleSummaryDetailHeader_Skeleton.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const cardCaptures = import.meta.glob<string>('../../Connect2_LegacyShared/NC_Result_Item__Card/__captures__/*.html', {
  query: '?raw',
  import: 'default',
  eager: true,
});

describe('AssembleSummaryDetailHeader_Skeleton', () => {
  testCapturedVariants(stories, captures);

  it('the nested card matches the NC_Result_Item__Card capture taken from this instance (placeholders wrapped once)', () => {
    const { V1 } = composeStories(stories);
    const { container } = render(<V1 />);
    const card = container.querySelector('[data-block="NewConnect_Utilities.NC_Result_Item__Card"]');
    const html = Object.values(cardCaptures)[0] as string;
    expectToMatchCapture(card, html);
    expect(composeStories(cardStories).V1).toBeDefined();
  });
});
