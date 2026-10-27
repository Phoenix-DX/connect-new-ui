/* The adaptive-cards renderer that RenderAdaptiveCardJS uses as the global `AdaptiveCards` on TST. The library is a
   stack decision (migration/clarify/builds/B9-messagedetail.md, "Decisions needed"): no package is installed, so the
   runtime is null and the viewer renders an empty AdaptiveCardContainer. After the install, set the runtime here:
     import * as AdaptiveCards from 'adaptivecards';
     let runtime: AdaptiveCardsRuntime | null = AdaptiveCards as unknown as AdaptiveCardsRuntime;
   The tests set a stub runtime with setAdaptiveCardsRuntime. */

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

let runtime: AdaptiveCardsRuntime | null = null;

/** The renderer in use; null until the library is installed. */
export const getAdaptiveCardsRuntime = (): AdaptiveCardsRuntime | null => runtime;

/** Sets the renderer (the tests use a stub). */
export function setAdaptiveCardsRuntime(next: AdaptiveCardsRuntime | null): void {
  runtime = next;
}
