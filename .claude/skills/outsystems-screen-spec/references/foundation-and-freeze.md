# Foundation and freeze

UI consistency across screens comes from one implementation per shared thing (layout, header, bottom bar, cards, lists, dialogs, toasts) used everywhere, plus the original CSS left untouched. It does not come from each screen agent reading carefully.

## Contents
1. What belongs to the foundation
2. Building a shared block
3. Tags and the catalog
4. Freeze and change requests
5. Regression runs

## 1. What belongs to the foundation

- The shell (`app-shell.spec.md`): document, root containers, layouts, header, bottom bar, menus, toasts, shared dialogs, global logic (navigation, view cache, preload, flags as mock toggles, security mocks).
- Every block in `catalog/foundation-queue.md`: blocks used by two or more remaining live screens and not built yet.
- Cross-cutting helpers: wire-format mappers, OS List behaviour (virtualisation, scroll ending), lazy images, transition and first-frame rules. These are the places where one fix used to ripple through every screen.

## 2. Building a shared block

1. Collect every captured state of the block across the screens that use it (catalog `blocks.md` lists them; their `analysis/dom/*.html`).
2. Read the block's compiled source once (inputs, events, placeholders, render conditions).
3. Build `app/src/components/<domain>/<Block>/` (or `app/src/containers/<Block>/`) with props named after the block inputs, events after its events, placeholders as children/slots.
4. Add the tag `@os-block <Module.Flow.Block>` in a comment of the component file (several tags if one component implements several blocks).
5. Write a DOM snapshot test per captured state (render with the state's inputs, compare with the captured subtree using the same normalisation as the parity check).
6. Note in the block's README which states were not captured.

## 3. Tags and the catalog

`catalog.py` treats a block as built only when some file under `src/shared` or `src/shell` carries its tag, or (fallback) a folder/file has its exact name and no other module has a block with that name. Tags make the catalog reliable and let `context_pack.py` collapse the block in every pack.

## 4. Freeze and change requests

After the foundation phase, screen agents may not change `app/src/platform`, `app/src/legacy`, `app/src/lib`, `app/src/styles`, `app/src/vendor`, `os-legacy.css` or generated files. `scope_guard.py` enforces this before merge.

When a screen needs something there:
1. Write `migration/change-requests/CR-<Screen>-<n>.md` from `assets/change-request-template.md`: block, the captured evidence (`dom/<state>.html` lines, expression in `sources/pretty`), the expected change, screens affected.
2. Render that part with `<NotCaptured name="CR-<Screen>-<n>: …">` (with whatever real content is known) and finish the rest of the screen.
3. Add the request to the route spec ("Change requests" and "Decisions to confirm"): whether the route may finish with the workaround is a decision for the user at review time.

The foundation owner handles requests in batches: apply, set `- Status: applied`, re-run regression, and list the routes whose markers can now be removed (they are reopened with the user's agreement).

## 5. Regression runs

After each batch: for every block touched, take its users from `catalog/blocks.json` (`liveUsers` with status built/verified) and run parity on all their captured states. Record the run in the ledger as `foundation`. A regression found here is fixed in the shared block, never patched in the screen.
