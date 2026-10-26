import { act, fireEvent, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { freshPage } from '@/test/testSupport';
import PINBiometricsMenu from './PINBiometricsMenuPage';

/* The page with its flows (usePINBiometricsMenu) in the app frame on a memory router. */
const PATH = '/UBTConnect/PINBiometricsMenu';
const routes = {
  '/UBTConnect/Menu': <p>Menu screen</p>,
  [PATH]: <PINBiometricsMenu />,
  '/UBTConnect/PINChange': <p>PINChange screen</p>,
};

beforeEach(() => {
  freshPage();
  resetNavigation();
});
afterEach(() => {
  sessionStorage.clear();
});

describe('PINBiometricsMenu page', () => {
  it('shows the primary detail layout titled "PIN & Biometrics" with the Menu_List of the Change PIN row', () => {
    const { container } = renderRoutes(routes, PATH);
    const layout = container.querySelector('[data-block="Layouts.Layout_DetailPage"]');
    if (layout === null) throw new Error('layout not rendered');
    expect(layout.id).toBe('$b1');
    expect(layout.querySelector('.ubt-layout-detail.ubt-layout-detail--primary')).not.toBeNull();
    expect(layout.querySelector('.header-title.text-align-center')?.textContent).toBe('PIN & Biometrics');
    const list = layout.querySelector('.content-middle > [data-block="App_Menu.Menu_List"]');
    expect(list?.id).toBe('$b2');
    expect(list?.querySelector('[data-block="App_Common_Blocks.SectionSeparator"]')).toBeNull();
    expect(screen.getByText('Change PIN')).toBeInTheDocument();
    expect(screen.queryByText('Biometric Login')).not.toBeInTheDocument();
    expect(layout.querySelector('.header-right')?.childElementCount).toBe(0);
    expect(layout.querySelector('.footer')?.childElementCount).toBe(0);
  });

  it('the Change PIN row opens PINChange; back shows the menu again', async () => {
    const { router, at } = renderRoutes(routes, PATH);
    fireEvent.click(screen.getByText('Change PIN'));
    expect(await screen.findByText('PINChange screen')).toBeInTheDocument();
    expect(at()).toBe('/UBTConnect/PINChange');

    await act(() => router.navigate(-1));
    expect(at()).toBe(PATH);
    expect(screen.getByText('Change PIN')).toBeInTheDocument();
  });

  it('the back arrow goes to the previous screen', async () => {
    const { router, at } = renderRoutes(routes, '/UBTConnect/Menu');
    await act(() => router.navigate(PATH));
    // The back arrow: the Icon block b1-$b2 of the layout header.
    const back = document.getElementById('b1-$b2')?.firstElementChild;
    if (back == null) throw new Error('back arrow not rendered');
    fireEvent.click(back);
    expect(await screen.findByText('Menu screen')).toBeInTheDocument();
    expect(at()).toBe('/UBTConnect/Menu');
  });
});
