import type { ReactNode } from 'react';

/* Platform widgets OSWidgets.ButtonGroup / ButtonGroupItem (not OutSystems blocks: no OSBlockWidget root), ported from
   migration/runtime-sources/OutSystemsReactWidgets.js AbstractButtonGroup / ButtonGroup / ButtonGroupItem (Q3,
   recommendation A, pending the orchestrator's answer). Group: `<div data-button-group class=<style>
   role="radiogroup" aria-activedescendant=<id of the selected item>>` > `<div>` > the items (the validation element
   adds nothing for a non-mandatory group). Item: `<button data-button-group-item class=<style>[ button-group-selected-item]
   aria-checked role="radio">`, disabled when the item or the group is disabled; a click sets the group's variable to
   the item's value when it differs. Not ported: executeWithActiveClassOn (a transient class during the click) and the
   runtime's stale aria-activedescendant when no item matches (here the attribute is left out). */

export interface ButtonGroupItemSpec {
  /** Widget name (the element id). */
  id: string;
  value: string;
  style: string;
  enabled?: boolean;
  content: ReactNode;
}

export interface ButtonGroupProps {
  /** Widget name (the element id). */
  id: string;
  style: string;
  enabled?: boolean;
  /** Variable. */
  value: string;
  onChange: (value: string) => void;
  items: readonly ButtonGroupItemSpec[];
}

export function ButtonGroup({ id, style, enabled = true, value, onChange, items }: ButtonGroupProps) {
  const selected = items.find((item) => item.value === value);
  return (
    <div data-button-group="" className={style} role="radiogroup" aria-activedescendant={selected?.id} id={id}>
      <div>
        {items.map((item) => {
          const isSelected = item.value === value;
          return (
            <button
              key={item.id}
              data-button-group-item=""
              className={item.style + (isSelected ? ' button-group-selected-item' : '')}
              disabled={!((item.enabled ?? true) && enabled)}
              aria-checked={isSelected ? 'true' : 'false'}
              role="radio"
              id={item.id}
              onClick={() => {
                if (item.value !== value) onChange(item.value);
              }}
            >
              {item.content}
            </button>
          );
        })}
      </div>
    </div>
  );
}
