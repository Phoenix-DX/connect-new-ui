/* The adaptive-cards renderer that RenderAdaptiveCardJS uses as the global `AdaptiveCards` on TST. TST loads
   `/UBTConnect/scripts/Connect2_LegacyShared.AdaptiveCards.js`, which is byte-identical (after the BOM and CRLF are
   normalised) to `dist/adaptivecards.js` of the npm package `adaptivecards` 2.5.0 (md5 ae3ac2e4..., checked
   2026-10-28). Decision PD7 (user, 2026-10-28): the package is pinned to that exact version
   (migration/clarify/builds/pending-decisions.md). The tests set a stub runtime with setAdaptiveCardsRuntime. */
import * as AdaptiveCards from 'adaptivecards';

/** An action of a card, as RenderAdaptiveCardJS reads it (Action.id, Action.title, SubmitAction.data,
    OpenUrlAction.url). */
export interface AdaptiveCardAction {
  id?: string;
  title?: string;
  data?: unknown;
  url?: string;
}

/** An AdaptiveCard instance: the members that RenderAdaptiveCardJS uses. */
export interface AdaptiveCardInstance {
  onExecuteAction?: (action: AdaptiveCardAction) => void;
  hostConfig?: unknown;
  parse: (payload: unknown) => void;
  render: () => HTMLElement | undefined;
}

/** The members of the AdaptiveCards namespace that RenderAdaptiveCardJS uses. */
interface AdaptiveCardsRuntime {
  AdaptiveCard: new () => AdaptiveCardInstance;
  HostConfig: new (config: unknown) => unknown;
  OpenUrlAction: abstract new (...args: never[]) => { url: string };
}

let runtime: AdaptiveCardsRuntime | null = AdaptiveCards as unknown as AdaptiveCardsRuntime;

/** The renderer in use (the SDK; a test may set a stub or null). */
export const getAdaptiveCardsRuntime = (): AdaptiveCardsRuntime | null => runtime;

/** Sets the renderer (the tests use a stub). */
export function setAdaptiveCardsRuntime(next: AdaptiveCardsRuntime | null): void {
  runtime = next;
}
