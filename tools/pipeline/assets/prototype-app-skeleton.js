/* Skeleton of the per-screen code for scripts/build_prototype.py (optional review prototype).
   Every name here is a placeholder: take element types, classes, data-block names, call names and
   expressions from the screen's analysis/ (dom/*.html, sources/pretty/*.mvc.js, calls.md, types.ts).
   Never invent a class, string, image or behaviour; render <Missing> for anything not captured. */

const APP_CONFIG = {
  title: 'SCREEN_NAME · React prototype',
  lead: 'DOM tree, classes and CSS come from the captured page. Data is mock with captured counts. Dashed frames are blocks or states the capture does not contain.',
  sizes: { '390x844': [390, 844] },                       // first = default; add the captured viewport
  scenarios: [['real', 'As captured'], ['empty', 'No data'], ['error', 'Network error on load']],
  onScenarioChange: () => { cache.summary = null; },
  flags: [],                                              // [['flagKey', 'Readable flag name from code']]
  defaultFlags: {},
  sections: [
    ['Try these', ['...one line per interaction worth checking...']],
    ['Not in the capture', ['...blocks, states and images listed in coverage.md...']],
  ],
};

/* 1. Mock data: same number of items and same field shapes as the capture, fictional values. */
const MOCK = { items: [/* { id: '101', title: 'Fictional title', photo: true } */] };

/* 2. Wire responses (OutSystems shape) and the mapper the real React code will reuse. */
const cache = { summary: null };
async function fetchSummary() {
  const { scenario, latency } = store.get();
  log('DATA_ACTION_NAME (on enter)');                     // original action name from calls.md
  await delay(latency);
  if (scenario === 'error') throw new Error('CommunicationException');
  const wire = { List: scenario === 'empty' ? [] : MOCK.items.map(i => ({ Id: String(i.id), Title: i.title })) };
  return wire.List.map(r => ({ id: r.Id, title: r.Title || '' }));   // "" means no value on the wire
}

/* 3. Blocks: markup copied from dom/default.html, wrappers kept with their data-block names. */
function ScreenContent({ items }) {
  return html`
    <${OSBlock} name="FLOW.SCREEN_BLOCK" id="b1">
      <div className="CLASSES-FROM-DOM">
        ${items.map(i => html`<div key=${i.id} className="CLASSES-FROM-DOM">${i.title}</div>`)}
      </div>
    <//>`;
}

/* 4. Screen: lifecycle and states from the controller (OnInitialize, OnAfterFetch, view cache on back). */
function PhoneApp() {
  const settings = useSettings();
  const [state, setState] = React.useState({ loading: true, items: [], error: false });
  React.useEffect(() => {
    let live = true;
    setState(s => ({ ...s, loading: !cache.summary }));
    fetchSummary()
      .then(items => { cache.summary = items; live && setState({ loading: false, items, error: false }); })
      .catch(() => live && setState({ loading: false, items: [], error: true }));
    return () => { live = false; };
  }, [settings.epoch, settings.scenario]);
  if (state.loading) return html`<${Missing} name="Loading state (not captured)" />`;
  if (state.error) return html`<${Missing} name="Network error state (not captured)" />`;
  if (!state.items.length) return html`<${Missing} name="Empty state (not captured)" />`;
  return html`<${ScreenContent} items=${state.items} />`;
}
