import { getAdaptiveCardsRuntime } from './runtime';

/* The client actions and JavaScript nodes of Connect2_LegacyShared.Widgets.AdaptiveCardViewer
   (Connect2_LegacyShared.Widgets.AdaptiveCardViewer.mvc.js controller) and IsJsonValid (Connect2_LegacyShared.controller.js
   :5775-5860). */

/** IsJsonValid(Json): IsJsonValidJavascriptJS, true when JSON.parse succeeds. */
export function isJsonValid(json: string): boolean {
  try {
    JSON.parse(json);
    return true;
  } catch {
    return false;
  }
}

/** OnExecuteAction_JSBinder(ActionId, FormPayload): the client action that the card calls; it raises the block event
    OnExecuteAction(In_AdaptiveCardJson, ActionId, FormPayload). */
type OnExecuteActionBinder = (actionId: string, formPayload: string) => void;

/** RenderAdaptiveCardAction(ContainerId): when In_AdaptiveCardJson is valid JSON, JSONSerialize_HostConfig and
    RenderAdaptiveCardJS. The JS node parses the card, renders it into the container (cleared first) and binds the
    actions: an OpenUrlAction opens its url (`window.cordova ? "_system" : "_blank"`: the web branch, decision U18), any
    other action calls the binder with `action.id ? action.id : action.title` and JSON.stringify(action.data). An
    undefined parameter reaches the client action as "" (the action proxy, mvc.js:182). Nothing renders while no
    renderer is installed (runtime.ts). */
export function renderAdaptiveCardAction(
  containerId: string,
  adaptiveCardJson: string,
  hostConfigJson: string,
  onExecuteAction: OnExecuteActionBinder,
): void {
  if (!isJsonValid(adaptiveCardJson)) return;
  const AdaptiveCards = getAdaptiveCardsRuntime();
  if (AdaptiveCards === null) return;
  const data: unknown = JSON.parse(adaptiveCardJson);
  const adaptiveCard = new AdaptiveCards.AdaptiveCard();
  adaptiveCard.onExecuteAction = (action) => {
    if (action instanceof AdaptiveCards.OpenUrlAction) {
      window.open(action.url, '_blank');
    } else {
      onExecuteAction(
        (action.id ? action.id : action.title) ?? '',
        action.data === undefined ? '' : JSON.stringify(action.data),
      );
    }
  };
  if (hostConfigJson && hostConfigJson !== '')
    adaptiveCard.hostConfig = new AdaptiveCards.HostConfig(JSON.parse(hostConfigJson));
  adaptiveCard.parse(data);
  const renderedCard = adaptiveCard.render();
  const containerDiv = document.getElementById(containerId);
  if (containerDiv === null || renderedCard === undefined) return;
  containerDiv.innerHTML = '';
  containerDiv.appendChild(renderedCard);
}
