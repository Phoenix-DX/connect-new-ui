import { useState } from 'react';
import { flagDefs, flagValue, setFlag } from '../lib/flags';

/* Review tool, not part of the original UI: open with ?ffpanel=1. Switches flag branches the user decided to build. */
export function FlagPanel() {
  const [, force] = useState(0);
  if (!new URL(window.location.href).searchParams.has('ffpanel')) return null;
  const defs = flagDefs();
  return (
    <div className="rv-flags">
      <b>Feature flags</b>
      {Object.keys(defs).length === 0 && <span>none decided (flags.py export)</span>}
      {Object.entries(defs).map(([name, d]) => (
        <label key={name}>
          <span>{name}</span>
          <select
            value={flagValue(name)}
            onChange={(e) => {
              setFlag(name, e.target.value);
              force((x) => x + 1);
            }}
          >
            {(d.values.length ? d.values : ['on', 'off']).map((v) => (
              <option key={v} value={v}>
                {v}
                {v === d.default ? ' (default)' : ''}
              </option>
            ))}
          </select>
        </label>
      ))}
    </div>
  );
}
