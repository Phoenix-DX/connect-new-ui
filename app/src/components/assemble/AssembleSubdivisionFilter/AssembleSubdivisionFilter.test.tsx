import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { LOCALITY } from '@/mocks/fictional/directory';
import { applyTestSession } from '@/platform/session/testSession';
import { freshPage } from '@/test/testSupport';
import { AssembleSubdivisionFilter } from './AssembleSubdivisionFilter';

/* Compiled view and controller: migration/blocks/sources/Connect2_Assemble_MUI.Assemble
   .Assemble_FilterSubdivisionByLocality.mvc.js (view :162-392, controller :396-650); data from the fictional
   Connect2_LegacyShared mocks (lib/mocks.ts). Not captured. */
const names = (container: HTMLElement) =>
  [...container.querySelectorAll('[data-block="Reusable.RadioButtonListItem"] span')].map((s) => s.textContent);
const localityCalls = () => (window.__osCalls ?? []).filter((c) => c.action === 'ActionGetLocalityInformation');

describe('Assemble_FilterSubdivisionByLocality', () => {
  beforeEach(async () => {
    freshPage();
    window.history.replaceState(null, '', '/UBTConnect/AssembleEvents?mocksession=unlocked');
    await applyTestSession();
  });

  it('Spinner while fetching (IsFetchingSubdivisions default True), then the search and the radio list', async () => {
    const { container } = render(<AssembleSubdivisionFilter id="b6-$b1" localityId={LOCALITY.id} />);
    expect(container.querySelector('[data-block="Reusable.Spinner"] .list-updating')).not.toBeNull();
    await waitFor(() => {
      expect(names(container)).toEqual(['Zapiola (Main Meeting Room)', 'Patagonia', 'Ingeniero White']);
    });
    const input = container.querySelector('#b6-b1-Input_SearchTearn');
    expect(input).toHaveAttribute('placeholder', 'Search Supper Meetings');
    expect(input).toHaveAttribute('maxlength', '50');
    expect(input).toHaveStyle({ borderWidth: '0px 0px 1px 0px' });
    expect(container.querySelector('[data-block="Utilities.Separator"]')).not.toBeNull();
    // the main hall's title is primary, the others neutral-10 (view :300-320)
    const spans = container.querySelectorAll<HTMLElement>('[data-block="Reusable.RadioButtonListItem"] span');
    expect(spans[0]?.style.color).toBe('var(--color-primary)');
    expect(spans[1]?.style.color).toBe('var(--color-neutral-10)');
    expect(localityCalls()).toHaveLength(1);
  });

  it('SelectedSubdivisionId checks its radio; a radio click raises SelectedSubdivision(Id)', async () => {
    const onSelectedSubdivision = vi.fn();
    const { container } = render(
      <AssembleSubdivisionFilter
        localityId={LOCALITY.id}
        selectedSubdivisionId="9202"
        onSelectedSubdivision={onSelectedSubdivision}
      />,
    );
    await screen.findByText('Patagonia');
    const radios = [...container.querySelectorAll<HTMLInputElement>('input[type="radio"]')];
    expect(radios.map((r) => r.checked)).toEqual([false, true, false]);
    fireEvent.click(screen.getByText('Ingeniero White'));
    expect(onSelectedSubdivision).toHaveBeenLastCalledWith('9203');
  });

  it('search: diacritics and case ignored, "No results found", "" reloads from the locality cache', async () => {
    const { container } = render(<AssembleSubdivisionFilter id="b6-$b1" localityId="254" />);
    await screen.findByText('Güemes');
    const input = container.querySelector('#b6-b1-Input_SearchTearn') as HTMLInputElement;
    fireEvent.change(input, { target: { value: ' GUEMES ' } });
    await waitFor(() => {
      expect(names(container)).toEqual(['Güemes']);
    });
    fireEvent.change(input, { target: { value: 'zz' } });
    expect(await screen.findByText('No results found')).toHaveAttribute('id', 'b6-b1-DIV_NoResultsFound');
    fireEvent.change(input, { target: { value: '' } });
    await waitFor(() => {
      expect(names(container)).toEqual(['Alta Córdoba (Main Meeting Room)', 'Güemes']);
    });
    expect(localityCalls()).toHaveLength(1);
  });
});
