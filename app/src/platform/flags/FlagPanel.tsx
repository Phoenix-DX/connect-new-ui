import { useSyncExternalStore } from 'react';
import { setFlagOverride } from './overrides';
import { FLAGS } from './registry';
import { FLAG_KEYS } from './resolve';
import { getFlags, subscribeFlags } from './store';

const VALUES = ['on', 'off'] as const;

/* Review tool, not part of the original UI: open with ?ffpanel=1. Switches the flags of the registry (overrides, kept
   for the tab). AppFrame renders it only when FLAG_OVERRIDES_BUILT is true (dev and demo builds). */
export function FlagPanel() {
  const flags = useSyncExternalStore(subscribeFlags, getFlags);
  if (!new URL(window.location.href).searchParams.has('ffpanel')) return null;
  return (
    <div className="rv-flags">
      <b>Feature flags</b>
      {FLAG_KEYS.map((key) => (
        <label key={key}>
          <span>{key}</span>
          <select
            value={flags[key] ? 'on' : 'off'}
            onChange={(e) => {
              setFlagOverride(key, e.target.value === 'on');
            }}
          >
            {VALUES.map((v) => (
              <option key={v} value={v}>
                {v}
                {(v === 'on') === FLAGS[key].default ? ' (default)' : ''}
              </option>
            ))}
          </select>
        </label>
      ))}
    </div>
  );
}
