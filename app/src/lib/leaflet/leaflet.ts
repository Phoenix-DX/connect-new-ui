/* LeafletMap.mvc.js:189-190 getJsDependencies: "scripts/Leaflet.leafletsrc.js", "scripts/Leaflet.leaflet_markerclustersrc.js".
   Import order matters: the global `L` exists before leaflet.markercluster runs. */
import L from './leafletGlobal';
import 'leaflet.markercluster';

export default L;
