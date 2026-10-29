import { fireEvent, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { useIsCommonUiAbsent } from '@/platform/feedback/dialogs';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { calledActions, freshPage } from '@/test/testSupport';
import CommunityBusinessDetails_CoomingSoon from './CommunityBusinessDetails_CoomingSoonPage';
import { readCommunityBusinessDetailsInputs } from './inputs';

/* The page in the app frame on a memory router. The screen is static: no lifecycle event, no variable, no call. */
const PATH = '/UBTConnect/CommunityBusinessDetails_CoomingSoon';

/** Reads the app-level CommonUI presence that the page reports. */
function CommonUiProbe() {
  return <output data-testid="common-ui-absent">{String(useIsCommonUiAbsent())}</output>;
}

const routes = {
  '/UBTConnect/HomeFeed': <p>HomeFeed screen</p>,
  [PATH]: <CommunityBusinessDetails_CoomingSoon />,
};
const routesWithProbe = {
  ...routes,
  [PATH]: (
    <>
      <CommunityBusinessDetails_CoomingSoon />
      <CommonUiProbe />
    </>
  ),
};

const blockNames = (root: ParentNode) =>
  [...root.querySelectorAll('[data-block]')].map((block) => `${block.getAttribute('data-block')}#${block.id}`);

beforeEach(() => {
  freshPage();
  resetNavigation();
});
afterEach(() => {
  sessionStorage.clear();
});

describe('CommunityBusinessDetails_CoomingSoon page', () => {
  it('shows the main layout with an empty title, the StaticInput and the BlankSlate "Comming soon"', () => {
    const { container } = renderRoutes(routesWithProbe, `${PATH}?In_CommunityBusinessId=4210`);
    const layout = container.querySelector('[data-block="Layouts.Layout_MainPages"]');
    if (layout === null) throw new Error('layout not rendered');
    expect(layout.id).toBe('$b1');
    expect(blockNames(layout)).toEqual(
      expect.arrayContaining(['ConnectPatterns.StaticInput#$b2', 'Content.BlankSlate#$b3']),
    );
    expect(layout.querySelector('.header-title')?.textContent).toBe('');
    expect(layout.querySelector('.ubt-layout-main__search [data-block="ConnectPatterns.StaticInput"]')).not.toBeNull();
    expect(screen.getByText('Search for households, members or places.')).toBeInTheDocument();

    const slate = layout.querySelector('.content-middle [data-block="Content.BlankSlate"]');
    if (slate === null) throw new Error('blank slate not rendered');
    expect(slate.querySelector('.blank-slate.large')).not.toBeNull();
    expect(slate.querySelector('.blank-slate-icon i.icon.fa.fa-ellipsis-h.fa-2x')).not.toBeNull();
    expect(slate.querySelector('.blank-slate-description')?.textContent).toBe('Comming soon');
    expect(slate.querySelector('.blank-slate-actions')?.childElementCount).toBe(0);

    // No bottom bar, no CommonUI and no call of its own.
    expect(layout.querySelector('footer .footer')?.childElementCount).toBe(0);
    expect(container.querySelector('[data-block="App_Common.CommonUI_InsideLayout"]')).toBeNull();
    expect(screen.getByTestId('common-ui-absent').textContent).toBe('true');
    expect(calledActions()).toEqual([]);
  });

  it('a click on the StaticInput does nothing', () => {
    const { container, at } = renderRoutes(routes, PATH);
    const before = container.innerHTML;
    fireEvent.click(screen.getByText('Search for households, members or places.'));
    expect(at()).toBe(PATH);
    expect(container.innerHTML).toBe(before);
    expect(calledActions()).toEqual([]);
  });

  it('renders the same markup with or without the input', () => {
    const withInput = renderRoutes(routes, `${PATH}?In_CommunityBusinessId=4210`);
    const html = withInput.container.innerHTML;
    withInput.unmount();
    resetNavigation();
    const withoutInput = renderRoutes(routes, PATH);
    expect(withoutInput.container.innerHTML).toBe(html);
  });
});

describe('readCommunityBusinessDetailsInputs', () => {
  it('reads In_CommunityBusinessId as a string', () => {
    expect(readCommunityBusinessDetailsInputs(new URLSearchParams('In_CommunityBusinessId=4210'))).toEqual({
      In_CommunityBusinessId: '4210',
    });
  });

  it('gives the OutSystems default "0" when the input is absent or empty', () => {
    expect(readCommunityBusinessDetailsInputs(new URLSearchParams(''))).toEqual({ In_CommunityBusinessId: '0' });
    expect(readCommunityBusinessDetailsInputs(new URLSearchParams('In_CommunityBusinessId='))).toEqual({
      In_CommunityBusinessId: '0',
    });
  });
});
