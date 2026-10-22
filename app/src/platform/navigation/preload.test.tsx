import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { beforeEach, expect, test } from 'vitest';
import { useOsNavigate } from './osNavigate';
import { getPreloadObject, setPreloadObject, usePreloadObject } from './preload';
import { renderRoutes, resetNavigation } from './testRouter';

beforeEach(resetNavigation);

function List({ preload }: { preload: unknown }) {
  const go = useOsNavigate();
  return (
    <button
      type="button"
      onClick={() => {
        setPreloadObject(preload);
        go('/UBTConnect/Detail');
      }}
    >
      open detail
    </button>
  );
}

function Detail() {
  const preload = usePreloadObject();
  const go = useOsNavigate();
  return (
    <>
      <p>preload: {JSON.stringify(preload)}</p>
      <button
        type="button"
        onClick={() => {
          go('/UBTConnect/Other');
        }}
      >
        open other
      </button>
    </>
  );
}

function Other() {
  return <p>other: {JSON.stringify(usePreloadObject())}</p>;
}

const routesWith = (preload: unknown) => ({
  '/UBTConnect/List': <List preload={preload} />,
  '/UBTConnect/Detail': <Detail />,
  '/UBTConnect/Other': <Other />,
});

test('the next screen reads the preload object; it is deleted once that screen has mounted', async () => {
  renderRoutes(routesWith({ title: 'Item 1' }), '/UBTConnect/List');
  await userEvent.click(screen.getByText('open detail'));

  expect(screen.getByText('preload: {"title":"Item 1"}')).toBeInTheDocument();
  expect(getPreloadObject()).toBeNull();

  await userEvent.click(screen.getByText('open other'));
  expect(screen.getByText('other: null')).toBeInTheDocument();
});

test('an empty preload is not stored (SetPreloadJS)', async () => {
  renderRoutes(routesWith(''), '/UBTConnect/List');
  await userEvent.click(screen.getByText('open detail'));
  expect(screen.getByText('preload: null')).toBeInTheDocument();
});
