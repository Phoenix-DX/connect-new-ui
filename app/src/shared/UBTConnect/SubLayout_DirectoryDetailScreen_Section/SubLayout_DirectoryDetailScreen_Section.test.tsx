import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '../../test/capturedVariants';
import { SubLayout_DirectoryDetailScreen_Section } from './SubLayout_DirectoryDetailScreen_Section';
import * as stories from './SubLayout_DirectoryDetailScreen_Section.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('SubLayout_DirectoryDetailScreen_Section', () => {
  testCapturedVariants(stories, captures);

  it('container classes of the captured ContactUsDetails dom; empty title renders no text', () => {
    const { container } = render(
      <SubLayout_DirectoryDetailScreen_Section>body</SubLayout_DirectoryDetailScreen_Section>,
    );
    const outer = container.querySelector('.ubt-custom-container');
    expect(outer).toHaveClass('background-neutral-0', 'padding-x-base', 'padding-top-s', 'padding-bottom-s');
    expect(container.querySelector('.ubt-sub-layout-section .margin-bottom-s')).toBeEmptyDOMElement();
    expect(screen.getByText('body')).toBeInTheDocument();
  });

  it('In_Title: semi-bold CustomText in the Title placeholder; paddings from the inputs', () => {
    const { container } = render(
      <SubLayout_DirectoryDetailScreen_Section inTitle="About" inPaddingTop="base" inPaddingBottom="none" />,
    );
    expect(container.querySelector('.ubt-custom-container')).toHaveClass('padding-top-base', 'padding-bottom-none');
    const title = container.querySelector('.ubt-sub-layout-section .margin-bottom-s');
    expect(title?.querySelector('[data-block="BasePatterns.CustomText"]')).toHaveTextContent('About');
  });
});
