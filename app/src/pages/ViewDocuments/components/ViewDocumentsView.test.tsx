import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import type { EventDocumentItem } from '@/api/event';
import { ViewDocumentsView, type ViewDocumentsViewProps } from './ViewDocumentsView';

/* The block ScreenBlock_ViewDocuments, props only. Fictional documents of an event. MenuIcon needs a router. */
const doc = (name: string, isViewed = false): EventDocumentItem => ({
  DocumentURL: `https://example.com/docs/${name.toLowerCase().replace(/ /g, '-')}.pdf`,
  DocumentName: name,
  LastUpdatedOn: '',
  LastUpdatedBy: 'Event Office',
  IsViewed: isViewed,
});
const DOCS = [doc('Conference Programme'), doc('Hall Map', true), doc('Arrival Schedule')];

function setup(props: Partial<ViewDocumentsViewProps> = {}) {
  const handlers = { onDocumentClick: vi.fn(), onContactHelpdesk: vi.fn() };
  const view = render(
    <MemoryRouter>
      <ViewDocumentsView
        id="$b1"
        eventName="Spring Conference"
        documents={DOCS}
        isFetchingData={false}
        isLoadingDocument={false}
        isDataFetched
        hasResponseDocuments
        {...handlers}
        {...props}
      />
    </MemoryRouter>,
  );
  return { ...view, handlers };
}

const block = (name: string) => document.querySelector(`[data-block="${name}"]`);
const rows = () => [...document.querySelectorAll('[id="b1-List_EventDocuments"] > div')];
const footer = () => document.querySelector('.contact-helpdesk-footer');
const NO_DOCUMENTS = 'There are no documents available for this event at the moment.';

describe('ViewDocumentsView', () => {
  it('the Orbit layout with the event name as title, the menu icon and the HandleDownload block', () => {
    const { container } = setup();
    expect(block('Orbit_ScreenBlocks_Documents.ScreenBlock_ViewDocuments')?.id).toBe('$b1');
    expect(container.textContent).toContain('Spring Conference');
    expect(document.getElementById('b1-$b2')).not.toBeNull();
    expect(block('FileTransfer.HandleDownload')?.id).toBe('b1-$b7');
    expect(document.getElementById('b1-Menu')?.childElementCount).toBe(0);
    expect(document.getElementById('b1-CommonUI_Elements')?.childElementCount).toBe(0);
  });

  it('the documents: the hint, one row per document, viewed and unviewed colours, no margin on the last row', () => {
    const { container } = setup();
    expect(container.textContent).toContain('Tap the link/s below to view/download documents');
    expect(rows().map((r) => r.textContent)).toEqual(['Conference Programme', 'Hall Map', 'Arrival Schedule']);
    expect(rows().map((r) => r.querySelector('span')?.className)).toEqual([
      'margin-left-base underline color-orbit-primary-7',
      'margin-left-base underline text-neutral-7',
      'margin-left-base underline color-orbit-primary-7',
    ]);
    expect(rows().map((r) => r.className)).toEqual([
      'full-width margin-bottom-m',
      'full-width margin-bottom-m',
      'full-width',
    ]);
    expect(footer()).not.toBeNull();
    expect(container.textContent).not.toContain(NO_DOCUMENTS);
  });

  it('a row click gives the URL and the name; the footer click raises ContactHelpdesk', () => {
    const { handlers } = setup();
    fireEvent.click(rows()[1] as Element);
    expect(handlers.onDocumentClick).toHaveBeenCalledWith('https://example.com/docs/hall-map.pdf', 'Hall Map');
    fireEvent.click(footer() as Element);
    expect(handlers.onContactHelpdesk).toHaveBeenCalledTimes(1);
  });

  it('while fetching: the ViewDocument skeleton only, no footer', () => {
    const { container } = setup({
      documents: [],
      isFetchingData: true,
      isDataFetched: false,
      hasResponseDocuments: false,
    });
    expect(block('Orbit_Generic_Blocks.Skeleton_Loading')?.id).toBe('b1-$b5');
    expect(rows()).toHaveLength(0);
    expect(footer()).toBeNull();
    expect(container.textContent).not.toContain(NO_DOCUMENTS);
  });

  it('fetched without documents: the no-documents message, no footer', () => {
    const { container } = setup({ documents: [], hasResponseDocuments: false });
    expect(container.textContent).toContain(NO_DOCUMENTS);
    expect(block('Orbit_Generic_Blocks.Skeleton_Loading')).toBeNull();
    expect(footer()).toBeNull();
  });

  it('before OnReady: no content', () => {
    setup({ documents: [], isDataFetched: false, hasResponseDocuments: false });
    expect(rows()).toHaveLength(0);
    expect(document.body.textContent).not.toContain(NO_DOCUMENTS);
    expect(block('Orbit_Generic_Blocks.Skeleton_Loading')).toBeNull();
  });

  it('IsLoadingDocument: the loading spinner pop-up in the body', () => {
    setup({ isLoadingDocument: true });
    const popup = document.getElementById('b1-b3-Popup_LoadingSpinner');
    expect(popup?.getAttribute('role')).toBe('dialog');
    expect(popup?.textContent).toBe('Loading');
  });

  it('no spinner pop-up while no document loads', () => {
    setup();
    expect(document.getElementById('b1-b3-Popup_LoadingSpinner')).toBeNull();
    expect(block('Orbit_Generic_Blocks.LoadingSpinner')?.id).toBe('b1-$b3');
  });
});
