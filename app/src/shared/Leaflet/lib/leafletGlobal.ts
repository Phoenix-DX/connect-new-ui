/* The JS nodes of the Leaflet module use the global `L` (module script Leaflet.leafletsrc.js = leaflet 1.9.4, ADR-3);
   leaflet.markercluster (Leaflet.leaflet_markerclustersrc.js = 1.5.3) extends that global when it loads. */
import L from 'leaflet';

(globalThis as unknown as { L: typeof L }).L = L;

export default L;
