import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  CarouselOneSchoolGlobalDetails,
  type CarouselOneSchoolGlobalDetailsSlot,
} from './CarouselOneSchoolGlobalDetails';

/* EntitiesCarousel_OneSchoolGlobal (EntitiesCarousel_OneSchoolGlobal.mvc.js view): its wrapper and
   OneSchoolGlobalDetails_Block (alias 1) with In_OneSchoolGlobalId = In_EntityId and IsRestoredFromCache False. */
describe('EntitiesCarousel_OneSchoolGlobal', () => {
  it('renders its wrapper and gives OneSchoolGlobalDetails_Block its instance id and the school id', () => {
    const slots: CarouselOneSchoolGlobalDetailsSlot[] = [];
    const { container } = render(
      <CarouselOneSchoolGlobalDetails
        id="b3-$b1"
        inEntityId="1431"
        renderOneSchoolGlobalDetails={(slot) => {
          slots.push(slot);
          return <span>school {slot.oneSchoolGlobalId}</span>;
        }}
      />,
    );
    const wrapper = container.querySelector('[data-block="Directory_Caroussel.EntitiesCarousel_OneSchoolGlobal"]');
    expect(wrapper?.id).toBe('b3-$b1');
    expect(screen.getByText('school 1431')).toBeInTheDocument();
    expect(slots.at(-1)).toEqual({ id: 'b3-b1-$b1', oneSchoolGlobalId: '1431', isRestoredFromCache: false });
  });

  it('renders its wrapper only without a slot, and no instance id without its own id', () => {
    const slots: CarouselOneSchoolGlobalDetailsSlot[] = [];
    const { container } = render(<CarouselOneSchoolGlobalDetails inEntityId="7" />);
    expect(
      container.querySelector('[data-block="Directory_Caroussel.EntitiesCarousel_OneSchoolGlobal"]')?.innerHTML,
    ).toBe('');
    render(<CarouselOneSchoolGlobalDetails renderOneSchoolGlobalDetails={(slot) => (slots.push(slot), null)} />);
    expect(slots.at(-1)).toEqual({ id: undefined, oneSchoolGlobalId: '0', isRestoredFromCache: false });
  });
});
