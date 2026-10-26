import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import { OrbitSkeletonLoading } from '@/lib/orbit/staticEntities';
import { OrbitSkeleton } from './OrbitSkeleton';
import * as stories from './OrbitSkeleton.stories';

/* Stories with a capture; the others have their own tests. */
const capturedStories = { default: stories.default, V1: stories.V1, V2: stories.V2, V3: stories.V3 };
const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const S = OrbitSkeletonLoading;

const shape = (id: number) => {
  const { container } = render(<OrbitSkeleton inSkeletonLoadingId={id} />);
  const root = container.firstElementChild as Element;
  return {
    root,
    rows: root.querySelectorAll('.orbit-skeleton-loading-list > div'),
    rowClass: root.querySelector('.orbit-skeleton-loading-list > div')?.className,
  };
};

describe('Skeleton_Loading', () => {
  testCapturedVariants(capturedStories, captures);

  it('list skeletons: rows and row height per id (OnInitialize NumberOfBlocks, view class expression)', () => {
    expect(shape(S.TransportDetail).rows).toHaveLength(15);
    expect(shape(S.TransportDetail).rowClass).toBe('orbit-skeleton-loading-item orbit-skeleton-item-height-base');
    expect(shape(S.ViewDocument).rows).toHaveLength(25);
    expect(shape(S.ViewDocument).rowClass).toBe('orbit-skeleton-loading-item orbit-skeleton-item-height-s');
    expect(shape(S.HostSurveyHelpers).rows).toHaveLength(15);
    expect(shape(S.HostSurvey).rows).toHaveLength(6);
    expect(shape(S.HostSurvey).rowClass).toBe('orbit-skeleton-loading-item orbit-skeleton-item-height-m');
    expect(shape(S.MilestoneDetailGuest).rows).toHaveLength(12);
  });

  it('fixed skeletons and unknown ids', () => {
    expect(shape(S.SingleItem).root.innerHTML).toBe(
      '<div class="orbit-skeleton-loading-item orbit-skeleton-item-height-base" data-container=""></div>',
    );
    expect(shape(S.AdminEventDetails).root.querySelectorAll('.orbit-skeleton-item-height-s')).toHaveLength(4);
    expect(shape(S.MemberQRCode).root.querySelectorAll('.orbit-skeleton-loading-item')).toHaveLength(4);
    expect(shape(S.MilestoneWrapper).root.innerHTML).toBe(
      '<div class="orbit-skeleton-loading-header" data-container=""></div>',
    );
    const booklet = shape(S.EventBooklet).root.querySelectorAll('.orbit-skeleton-loading-list-item');
    expect([...booklet].map((r) => r.className)).toEqual([
      'orbit-skeleton-loading-list-item',
      'orbit-skeleton-loading-list-item opacity-0-75 margin-top-m',
      'orbit-skeleton-loading-list-item opacity-0-5 margin-top-m',
      'orbit-skeleton-loading-list-item opacity-0-25 margin-top-m',
    ]);
    expect(shape(0).root.innerHTML).toBe('');
  });

  it('OnParametersChanged: a new id rebuilds the rows', () => {
    const { container, rerender } = render(<OrbitSkeleton inSkeletonLoadingId={S.EventDetail} />);
    expect(container.querySelectorAll('.orbit-skeleton-loading-list > div')).toHaveLength(4);
    rerender(<OrbitSkeleton inSkeletonLoadingId={S.OrbitLanding} />);
    expect(container.querySelectorAll('.orbit-skeleton-loading-list > div')).toHaveLength(6);
  });
});
