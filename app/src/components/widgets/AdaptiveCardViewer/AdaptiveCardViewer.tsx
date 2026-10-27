import { useEffect, useRef } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { renderAdaptiveCardAction } from './actions';
import { serializeHostConfig, type HostConfig } from './hostConfig';

/** @origin Connect2_LegacyShared.Widgets.AdaptiveCardViewer */

interface AdaptiveCardViewerProps {
  /** OutSystems instance id of the block (`b1-b4-$b2` in NotificationDetailBlock). */
  id?: string;
  /** Prefix of the block's children (`b1-b4-b2`). */
  prefix: string;
  /** In_AdaptiveCardJson: the card payload. */
  inAdaptiveCardJson: string;
  /** In_HostConfig. */
  inHostConfig: HostConfig;
  /** Event OnExecuteAction(CardPayload, ActionId, FormPayload). */
  onExecuteAction?: (cardPayload: string, actionId: string, formPayload: string) => unknown;
}

/** An adaptive card: the container AdaptiveCardContainer, which OnReady and OnParametersChanged fill with
    RenderAdaptiveCardAction (the If of the view has the constant condition False, so the container always shows). */
export function AdaptiveCardViewer({
  id,
  prefix,
  inAdaptiveCardJson,
  inHostConfig,
  onExecuteAction,
}: AdaptiveCardViewerProps) {
  const containerId = `${prefix}-AdaptiveCardContainer`;
  const hostConfigJson = serializeHostConfig(inHostConfig);
  const onExecuteActionRef = useRef(onExecuteAction);
  useEffect(() => {
    onExecuteActionRef.current = onExecuteAction;
  }, [onExecuteAction]);

  useEffect(() => {
    // OnExecuteAction_JSBinder: the event gets the current In_AdaptiveCardJson.
    renderAdaptiveCardAction(containerId, inAdaptiveCardJson, hostConfigJson, (actionId, formPayload) => {
      void onExecuteActionRef.current?.(inAdaptiveCardJson, actionId, formPayload);
    });
  }, [containerId, inAdaptiveCardJson, hostConfigJson]);

  return (
    <OSBlock name="Widgets.AdaptiveCardViewer" id={id}>
      <div data-container="" id={containerId} />
    </OSBlock>
  );
}
