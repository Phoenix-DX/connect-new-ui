import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import type { CurrentService, Service } from '@/api/service';
import type { ServicesLists } from '@/pages/Services/hooks/servicesState';
import { ServicesContent, type ServicesContentProps } from './ServicesContent';

/* The content from props: fictional services in the shape of the recorded answer. */
const service = (id: string, label: string, isMandatory = false): Service => ({
  id,
  label,
  order: 1,
  isActive: true,
  iconId: `connect-icon-${id.toLowerCase()}`,
  isMandatory,
  startAsDefault: true,
});
const favourite = (s: Service, order: number): CurrentService => ({
  service: s,
  serviceUser: { id: String(600 + order), connectServiceId: s.id, userId: 990001, order, lastChangedOn: null },
});

const lists: ServicesLists = {
  currentServices: [favourite(service('Orbit', 'Orbit', true), 1), favourite(service('Trove', 'Trove'), 2)],
  availableServices: [service('Harbour', 'Harbour Bookings'), service('ElGusto', 'El Gusto')],
};

function renderContent(props: Partial<ServicesContentProps> = {}) {
  const handlers = { onDragEnd: vi.fn(), onRemove: vi.fn(), onAdd: vi.fn() };
  const view = render(
    <ServicesContent
      id="ContentWrapper"
      lists={lists}
      isSkeletonLoading={false}
      isFetching={false}
      hasFetchError={false}
      {...handlers}
      {...props}
    />,
  );
  return { ...view, handlers };
}

const byId = (id: string) => document.getElementById(id);

describe('ServicesContent', () => {
  it('renders the favourites and the suggestions with their titles and rows', () => {
    renderContent();
    expect(byId('ContentWrapper')).not.toBeNull();
    expect(screen.getByText('Favourites')).toBeInTheDocument();
    expect(screen.getByText('Suggestions')).toBeInTheDocument();
    expect(byId('FavouriteList')?.className).toBe('list list-group OSFillParent');
    expect(byId('SuggestionList')?.className).toBe('list list-group OSFillParent');
    expect([...(byId('FavouriteList')?.children ?? [])].map((row) => row.textContent)).toEqual(['Orbit', 'Trove']);
    expect([...(byId('SuggestionList')?.children ?? [])].map((row) => row.textContent)).toEqual([
      'Harbour Bookings',
      'El Gusto',
    ]);
    expect(document.querySelector('[data-block="App_Common_Blocks.SectionSeparator"]')?.id).toBe('$b15');
    expect(document.querySelectorAll('[data-block="Sortable.SortableList"]')).toHaveLength(2);
  });

  it('each row has a drag handle with the id of its service, and the icon of the service', () => {
    renderContent();
    const handles = [...document.querySelectorAll('.drag-handle')];
    expect(handles.map((h) => h.getAttribute('sortable-item-id'))).toEqual(['Orbit', 'Trove', 'Harbour', 'ElGusto']);
    expect(handles.every((h) => h.querySelector('.connect-icon-drag_indicator'))).toBe(true);
    expect(document.querySelector('[id="l1-38_1-$b13"] .connect-icon-trove')).not.toBeNull();
  });

  it('a mandatory favourite has no remove icon; the remove icon raises onRemove with the favourite', () => {
    const { handlers } = renderContent();
    expect(document.querySelector('[id="l1-38_0-$b14"]')).toBeNull();
    const remove = document.querySelector('[id="l1-38_1-$b14"] .connect-icon-cancel_fill');
    fireEvent.click(remove as Element);
    expect(handlers.onRemove).toHaveBeenCalledWith(lists.currentServices[1]);
  });

  it('the add icon of a suggestion raises onAdd with the service', () => {
    const { handlers } = renderContent();
    const add = document.querySelector('[id="l2-37_1-$b26"] .connect-icon-add_circle');
    fireEvent.click(add as Element);
    expect(handlers.onAdd).toHaveBeenCalledWith(lists.availableServices[1]);
  });

  it('has no suggestions section when there is no service to add', () => {
    renderContent({ lists: { ...lists, availableServices: [] } });
    expect(screen.queryByText('Suggestions')).toBeNull();
    expect(byId('SuggestionList')).toBeNull();
    expect(document.querySelector('[data-block$="SectionSeparator"]')).toBeNull();
  });

  it('shows the skeleton, and the fetch status of GetServices on the lists', () => {
    const loading = renderContent({ isSkeletonLoading: true, isFetching: true });
    expect(document.querySelector('.ubt-skeleton-section')).not.toBeNull();
    expect(byId('FavouriteList')?.className).toBe('list list-group list-loading OSFillParent');
    loading.unmount();
    renderContent({ hasFetchError: true });
    expect(document.querySelector('.ubt-skeleton-section')).toBeNull();
    expect(byId('FavouriteList')?.className).toBe('list list-group list-error OSFillParent');
  });
});
