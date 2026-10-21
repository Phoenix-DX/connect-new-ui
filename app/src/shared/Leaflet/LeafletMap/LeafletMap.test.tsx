import { composeStories } from '@storybook/react-vite';
import { render, waitFor } from '@testing-library/react';
import L from 'leaflet';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { diffAgainstCapture } from '../../../test/dom';
import { LeafletMap } from './LeafletMap';
import * as stories from './LeafletMap.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

/* What jsdom cannot reproduce is left out on both sides: the tiles (stubbed, no network), the geometry Leaflet writes
   as inline styles, the zoom proxy and the classes Leaflet adds after browser detection (touch, 3D transitions). */
const BROWSER_CLASSES = [
  'leaflet-touch',
  'leaflet-fade-anim',
  'leaflet-zoom-animated',
  'leaflet-zoom-hide',
  'leaflet-retina',
  'leaflet-safari',
];
function normalize(el: Element): Element {
  const c = el.cloneNode(true) as Element;
  c.querySelectorAll('.leaflet-tile-container').forEach((t) => {
    t.replaceChildren();
  });
  c.querySelectorAll('.leaflet-proxy').forEach((p) => {
    p.remove();
  });
  c.querySelectorAll('.leaflet-container *').forEach((e) => {
    e.removeAttribute('style');
  });
  c.querySelectorAll('*').forEach((e) => {
    e.classList.remove(...BROWSER_CLASSES);
  });
  return c;
}
const parse = (html: string) => {
  const tpl = document.createElement('template');
  tpl.innerHTML = html.replace('<!-- prettier-ignore -->', '').trim();
  const el = tpl.content.firstElementChild;
  if (!el) throw new Error('empty capture');
  return el;
};

describe('LeafletMap', () => {
  beforeEach(() => {
    vi.spyOn(L, 'tileLayer').mockImplementation(() => L.gridLayer() as L.TileLayer); // no tile server in tests
    vi.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockReturnValue(390);
    vi.spyOn(HTMLElement.prototype, 'clientHeight', 'get').mockReturnValue(300);
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });

  const composed: Record<string, React.ComponentType> = composeStories(stories);
  for (const [name, Story] of Object.entries(composed)) {
    const file = `./__captures__/${name.toLowerCase()}.html`;
    it(`${name} matches ${file.slice(2)} (Leaflet DOM, normalized)`, async () => {
      const html = captures[file];
      if (html === undefined) throw new Error(`no capture ${file}`);
      const { container } = render(<Story />);
      await waitFor(() => {
        expect(container.querySelectorAll('.leaflet-marker-icon')).toHaveLength(3);
      });
      const root = container.firstElementChild;
      if (!root) throw new Error('nothing rendered');
      expect(diffAgainstCapture(normalize(root), normalize(parse(html)).outerHTML, { text: false })).toEqual([]);
    });
  }

  it('raises SetCallbacks, then OnInitialized with the map id; the default tile layer gets subdomains a, b, c', async () => {
    const onSetCallbacks = vi.fn();
    const onInit = vi.fn();
    render(
      <LeafletMap
        id="map1"
        zoomControlOptions={{ position: 'bottomright' }}
        onSetCallbacks={onSetCallbacks}
        onOnInitialized={onInit}
      />,
    );
    await waitFor(() => {
      expect(onInit).toHaveBeenCalledWith('map1-LeafletMap');
    });
    expect(onSetCallbacks).toHaveBeenCalledWith('map1-LeafletMap');
    expect(L.tileLayer).toHaveBeenCalledWith(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      expect.objectContaining({ subdomains: ['a', 'b', 'c'] }),
    );
  });

  it('raises OnMarker_Clicked with the marker data and the map id', async () => {
    const onClick = vi.fn();
    const { container } = render(
      <LeafletMap
        id="map2"
        mapOptions={{ Center: [10, 0], Zoom: 4, AttributionControl: false }}
        markersList={[
          {
            Marker: {
              Id: 'm1',
              Type: 'Member',
              ExtraData: 'x',
              Latlng: [10, 0],
              Options: { Opacity: 1, Icon: { iconUrl: 'p.svg' } },
            },
          },
        ]}
        zoomControlOptions={{ position: 'bottomright' }}
        onOnMarkerClicked={onClick}
      />,
    );
    await waitFor(() => {
      expect(container.querySelector('.leaflet-marker-icon')).not.toBeNull();
    });
    container.querySelector('.leaflet-marker-icon')?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(onClick).toHaveBeenCalledWith('m1', 'map2-LeafletMap', 'Member', 'x', 10, 0, expect.anything());
  });
  describe('GeoJSON_Features', () => {
    /* jsdom has no SVGSVGElement.createSVGRect, so Leaflet's browser check finds no SVG renderer: force it on. */
    const browser = L.Browser as { svg: boolean };
    const svg = browser.svg;
    beforeEach(() => {
      browser.svg = true;
    });
    afterEach(() => {
      browser.svg = svg;
    });
    const square = (lng: number) =>
      JSON.stringify({
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [lng, 0],
              [lng + 1, 0],
              [lng + 1, 1],
              [lng, 1],
              [lng, 0],
            ],
          ],
        },
      });
    const features = [
      {
        Id: 'CRI',
        Type: 'Country',
        ExtraData: 'x',
        FeatureJSON: square(0),
        PathOptions: { stroke: true, color: '#ff7800', weight: 5, opacity: 1, fill: true, fillOpacity: 0.5 },
      },
      /* No Id: a GUID; no PathOptions: Map_Internal_Layer_SetStyle serializes the default record without its defaults
         (Serialize Default Values False, controller :2841), so setStyle({}) keeps Leaflet's path style. */
      { Type: 'Country', FeatureJSON: square(2) },
      /* No geometry: nothing to draw. */
      { Id: 'NONE', FeatureJSON: JSON.stringify({ type: 'Feature', properties: {}, geometry: null }) },
    ];
    const paths = (root: Element) => [...root.querySelectorAll('.leaflet-overlay-pane svg path')];

    it('draws each feature with its PathOptions and raises OnGeoJSON_Clicked(Id, MapId, Type, ExtraData)', async () => {
      const onGeoJSON = vi.fn();
      const { container } = render(
        <LeafletMap
          id="map3"
          mapOptions={{ Center: [0.5, 1.5], Zoom: 5 }}
          geoJSONFeatures={features}
          zoomControlOptions={{ position: 'bottomright' }}
          onOnGeoJSONClicked={onGeoJSON}
        />,
      );
      await waitFor(() => {
        expect(paths(container)).toHaveLength(2);
      });
      const [cri, plain] = paths(container);
      expect(cri?.getAttribute('stroke')).toBe('#ff7800');
      expect(cri?.getAttribute('stroke-width')).toBe('5');
      expect(cri?.getAttribute('fill-opacity')).toBe('0.5');
      expect(plain?.getAttribute('stroke')).toBe('#3388ff');
      expect(plain?.getAttribute('fill')).toBe('#3388ff');
      cri?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      expect(onGeoJSON).toHaveBeenCalledWith('CRI', 'map3-LeafletMap', 'Country', 'x');
    });

    it('a feature already in the registry is not added again when the parameters change', async () => {
      const { container, rerender } = render(
        <LeafletMap
          id="map4"
          mapOptions={{ Center: [0.5, 0.5], Zoom: 5 }}
          geoJSONFeatures={features.slice(0, 1)}
          zoomControlOptions={{ position: 'bottomright' }}
        />,
      );
      await waitFor(() => {
        expect(paths(container)).toHaveLength(1);
      });
      rerender(
        <LeafletMap
          id="map4"
          mapOptions={{ Center: [0.5, 0.5], Zoom: 5 }}
          geoJSONFeatures={[{ ...features[0], PathOptions: { stroke: true, color: '#880808', weight: 5, opacity: 1 } }]}
          zoomControlOptions={{ position: 'bottomright' }}
        />,
      );
      expect(paths(container)).toHaveLength(1);
      expect(paths(container)[0]?.getAttribute('stroke')).toBe('#880808');
    });
  });
});
