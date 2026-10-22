import manifest from './os-assets.manifest.json';

/* Resolve an image referenced in OutSystems code ("img/Module.file.png") to the captured file,
   or to a visible "not captured" marker. */
export function osImage(ref: string): string {
  const file = ref.split('?', 1)[0]?.split('/').pop() ?? ref;
  const hit = manifest.find((p) => p.endsWith('/' + file));
  if (hit) return hit;
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='300' height='130'><rect width='300' height='130' fill='#fff0f5' stroke='#d63c74' stroke-width='3' stroke-dasharray='8 6'/><text x='150' y='60' font-family='Arial' font-size='13' fill='#7a1f43' text-anchor='middle'>Image not captured</text><text x='150' y='80' font-family='Arial' font-size='11' fill='#7a1f43' text-anchor='middle'>${file}</text></svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}
