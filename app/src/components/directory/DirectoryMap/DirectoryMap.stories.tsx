import type { Meta, StoryObj } from '@storybook/react-vite';
import { osImage } from '@/legacy/os/os-assets';
import type { MarkerWithWindow } from '@/shared/Leaflet/lib/structures';
import { DirectoryMap } from './DirectoryMap';

const meta = {
  title: 'Shared/Leaflet/LeafletMap',
  component: DirectoryMap,
} satisfies Meta<typeof DirectoryMap>;
export default meta;
type Story = StoryObj<typeof meta>;

/* Member pins are person data: neutral mock coordinates, far enough apart not to cluster. Icon, zoom control and
   options as the screens pass them (BrowseDirectory / CountryDetails .mvc.js: Pin_Member, bottom-right zoom control
   with font-icon classes, clustering on). The tile layer is the module default (OpenStreetMap). */
const pin = (n: number, lat: number, long: number): MarkerWithWindow => ({
  Marker: {
    Id: `mock-${String(n)}`,
    Latlng: [lat, long],
    Options: {
      /* Keyboard, Alt and Opacity keep their record defaults: the marker JSON leaves them out (Serialize Default Values
         False, Leaflet.controller.js:3277), so Leaflet's own apply (tabindex 0, role button, alt "Marker", opacity 1). */
      Icon: { iconUrl: osImage('img/UBTConnectLibrary.Pin_Member.svg'), iconSize: [20, 24], iconAnchor: [10, 24] },
    },
  },
});
const markers = [pin(1, 10, 0), pin(2, 30, 20), pin(3, 20, 40)];
const zoom = (color: string) => ({
  position: 'bottomright',
  zoomInTitle: 'Zoom in',
  zoomOutTitle: 'Zoom out',
  zoomInClass: `ubt-icon connect-icon-add text-${color}`,
  zoomOutClass: `ubt-icon connect-icon-remove text-${color}`,
});

/** BrowseDirectory/default: three member pins, zoom control in neutral-8. */
export const V1: Story = {
  args: {
    mapOptions: { Center: [20, 20], Zoom: 4, AttributionControl: false },
    markersList: markers,
    zoomControlOptions: zoom('neutral-8'),
    useClustering: true,
  },
};
/** CountryDetails/default: same map, zoom control in primary. */
export const V2: Story = {
  args: {
    ...V1.args,
    mapOptions: { Center: [20, 20], Zoom: 3, AttributionControl: false },
    zoomControlOptions: zoom('primary'),
  },
};
