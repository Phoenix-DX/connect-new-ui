import { render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { AdaptiveCardViewer } from './AdaptiveCardViewer';
import { isJsonValid } from './actions';
import { AdaptiveCardsConfig, getHostConfigByConfigId, serializeHostConfig } from './hostConfig';
import {
  getAdaptiveCardsRuntime,
  setAdaptiveCardsRuntime,
  type AdaptiveCardAction,
  type AdaptiveCardInstance,
} from './runtime';

/* A stub of the AdaptiveCards namespace: it records the host config and the payload, renders a div with one button per
   action, and lets a test run an action. */
class StubOpenUrlAction implements AdaptiveCardAction {
  constructor(public url: string) {}
}
const created: StubCard[] = [];
class StubCard implements AdaptiveCardInstance {
  onExecuteAction?: (action: AdaptiveCardAction) => void;
  hostConfig?: unknown;
  payload: unknown;
  constructor() {
    created.push(this);
  }
  parse(payload: unknown) {
    this.payload = payload;
  }
  render() {
    const div = document.createElement('div');
    div.className = 'ac-adaptiveCard';
    return div;
  }
}
class StubHostConfig {
  constructor(public config: unknown) {}
}
const stubRuntime = { AdaptiveCard: StubCard, HostConfig: StubHostConfig, OpenUrlAction: StubOpenUrlAction };

const CARD = JSON.stringify({
  type: 'AdaptiveCard',
  version: '1.3',
  body: [{ type: 'TextBlock', text: 'Harvest Supper' }],
});

/** The installed SDK (adaptivecards 2.5.0, decision PD7): restored after each test. */
const sdkRuntime = getAdaptiveCardsRuntime();

afterEach(() => {
  setAdaptiveCardsRuntime(sdkRuntime);
  created.length = 0;
});

describe('AdaptiveCardViewer', () => {
  it('renders the card with the installed SDK (adaptivecards 2.5.0, the TST bundle)', () => {
    expect(sdkRuntime).not.toBeNull();
    const { container } = render(
      <AdaptiveCardViewer
        id="b1-b4-$b2"
        prefix="b1-b4-b2"
        inAdaptiveCardJson={CARD}
        inHostConfig={getHostConfigByConfigId(AdaptiveCardsConfig.Events)}
      />,
    );
    const host = container.querySelector('#b1-b4-b2-AdaptiveCardContainer');
    expect(host?.querySelector('.ac-adaptiveCard')).not.toBeNull();
    // The SDK writes the text with innerText, which jsdom does not implement: check the element only.
    expect(host?.querySelector('.ac-textBlock')).not.toBeNull();
  });

  it('renders an empty AdaptiveCardContainer when no renderer is set', () => {
    setAdaptiveCardsRuntime(null);
    const { container } = render(
      <AdaptiveCardViewer
        id="b1-b4-$b2"
        prefix="b1-b4-b2"
        inAdaptiveCardJson={CARD}
        inHostConfig={getHostConfigByConfigId(1)}
      />,
    );
    const block = container.querySelector('[data-block="Widgets.AdaptiveCardViewer"]');
    expect(block?.id).toBe('b1-b4-$b2');
    expect(container.querySelector('#b1-b4-b2-AdaptiveCardContainer')?.innerHTML).toBe('');
  });

  it('renders the card with the serialized host config into the container', () => {
    setAdaptiveCardsRuntime(stubRuntime);
    const hostConfig = getHostConfigByConfigId(AdaptiveCardsConfig.Events);
    const { container } = render(
      <AdaptiveCardViewer id="b1-b4-$b2" prefix="b1-b4-b2" inAdaptiveCardJson={CARD} inHostConfig={hostConfig} />,
    );
    expect(created).toHaveLength(1);
    expect(created[0]?.payload).toEqual(JSON.parse(CARD));
    expect((created[0]?.hostConfig as StubHostConfig).config).toEqual(JSON.parse(serializeHostConfig(hostConfig)));
    expect(container.querySelector('#b1-b4-b2-AdaptiveCardContainer .ac-adaptiveCard')).not.toBeNull();
  });

  it('does not render a payload that is not valid JSON (IsJsonValid)', () => {
    setAdaptiveCardsRuntime(stubRuntime);
    render(<AdaptiveCardViewer prefix="p" inAdaptiveCardJson="{not json" inHostConfig={getHostConfigByConfigId(1)} />);
    expect(created).toHaveLength(0);
    expect(isJsonValid('{"a":1}')).toBe(true);
    expect(isJsonValid('')).toBe(false);
  });

  it('raises OnExecuteAction with the card, the action id (or title) and the JSON of its data', () => {
    setAdaptiveCardsRuntime(stubRuntime);
    const onExecuteAction = vi.fn();
    render(
      <AdaptiveCardViewer
        prefix="p"
        inAdaptiveCardJson={CARD}
        inHostConfig={getHostConfigByConfigId(1)}
        onExecuteAction={onExecuteAction}
      />,
    );
    created[0]?.onExecuteAction?.({ id: 'submit', data: { submitType: 'view_event', eventId: 7301 } });
    created[0]?.onExecuteAction?.({ title: 'Send' });
    expect(onExecuteAction).toHaveBeenNthCalledWith(1, CARD, 'submit', '{"submitType":"view_event","eventId":7301}');
    expect(onExecuteAction).toHaveBeenNthCalledWith(2, CARD, 'Send', '');
  });

  it('opens an OpenUrlAction in a new tab instead of raising the event', () => {
    setAdaptiveCardsRuntime(stubRuntime);
    const open = vi.spyOn(window, 'open').mockReturnValue(null);
    const onExecuteAction = vi.fn();
    render(
      <AdaptiveCardViewer
        prefix="p"
        inAdaptiveCardJson={CARD}
        inHostConfig={getHostConfigByConfigId(1)}
        onExecuteAction={onExecuteAction}
      />,
    );
    created[0]?.onExecuteAction?.(new StubOpenUrlAction('https://example.org/harvest'));
    expect(open).toHaveBeenCalledWith('https://example.org/harvest', '_blank');
    expect(onExecuteAction).not.toHaveBeenCalled();
    open.mockRestore();
  });
});

describe('GetHostConfigByConfigId', () => {
  it('gives the Events config', () => {
    const config = getHostConfigByConfigId(AdaptiveCardsConfig.Events);
    expect(config.spacing).toEqual({ small: 8, default: 12, medium: 17, large: 23, extraLarge: 27, padding: 12 });
    expect(config.fontTypes.default).toEqual({
      fontFamily: 'Roboto',
      fontSizes: { small: 12, default: 14, medium: 16, large: 18, extraLarge: 20 },
      fontWeights: { lighter: 200, default: 400, bolder: 800 },
    });
    expect(config.fontTypes.monospace.fontFamily).toBe('Roboto Mono');
    expect(config.fontTypes.monospace.fontSizes).toEqual(config.fontTypes.default.fontSizes);
  });

  it('gives the default record for any other id', () => {
    expect(getHostConfigByConfigId(0).spacing).toEqual({
      small: 3,
      default: 8,
      medium: 20,
      large: 30,
      extraLarge: 40,
      padding: 20,
    });
  });
});
