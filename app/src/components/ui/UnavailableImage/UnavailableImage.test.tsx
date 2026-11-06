import { composeStories } from '@storybook/react-vite';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { getClasses_BackgroundImageSize } from '@/lib/ubtConnectLibrary/actions';
import { Type_Image, UBT_ImageCardType } from '@/lib/ubtConnectLibrary/staticEntities';
import * as stories from './UnavailableImage.stories';

const { HouseholdGallery, OneSchool } = composeStories(stories);

describe('Unavailable_Image (not captured: live compiled view of 2026-11-05)', () => {
  it('Household: "Household image missing", the coming-soon text and the gallery size classes', () => {
    const { container } = render(<HouseholdGallery />);
    expect(container.querySelector('[data-block="ConnectPatterns.Unavailable_Image"]')).not.toBeNull();
    expect(screen.getByText('Household image missing')).toBeInTheDocument();
    expect(screen.queryByText('Sorry, no photo available')).toBeNull();
    const text = screen.getByText('This image is being updated and coming soon.');
    expect(text.className).toBe('font-size-xs text-neutral-7');
    const box = container.querySelector('.ubt-image-unavailable__background-image');
    expect(box?.className).toBe(
      `ubt-image-unavailable__background-image ${getClasses_BackgroundImageSize(UBT_ImageCardType.Gallery, 0)}`,
    );
    expect(box?.querySelector('.text-align-center.ubt-unavailable-image')).not.toBeNull();
  });

  it('OneSchool: "Sorry, no photo available"', () => {
    render(<OneSchool />);
    expect(screen.getByText('Sorry, no photo available')).toBeInTheDocument();
    expect(screen.queryByText('Household image missing')).toBeNull();
  });

  it('any other TypeImage (Subdivision, or none): "Household image missing"', () => {
    const { rerender } = render(<OneSchool typeImage={Type_Image.Subdivision} />);
    expect(screen.getByText('Household image missing')).toBeInTheDocument();
    rerender(<OneSchool typeImage={undefined} />);
    expect(screen.getByText('Household image missing')).toBeInTheDocument();
  });
});
