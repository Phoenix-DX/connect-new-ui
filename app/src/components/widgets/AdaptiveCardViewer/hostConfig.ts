/* The HostConfig structure of Connect2_LegacyShared and its client action GetHostConfigByConfigId
   (Connect2_LegacyShared.controller.js:4787-4876; structures Connect2_LegacyShared.model.js HostConfigRec,
   HostConfig_SpacingRec, HostConfig_FontTypeRec, HostConfig_FontRec, HostConfig_FontSizeRec,
   HostConfig_FontWeightsRec). */

/** HostConfig_Spacing (defaults 3, 8, 20, 30, 40, 20). */
export interface HostConfigSpacing {
  small: number;
  default: number;
  medium: number;
  large: number;
  extraLarge: number;
  padding: number;
}

/** HostConfig_FontSize (defaults 10, 12, 14, 17, 20). */
interface HostConfigFontSizes {
  small: number;
  default: number;
  medium: number;
  large: number;
  extraLarge: number;
}

/** HostConfig_FontWeights (defaults 200, 400, 800). */
interface HostConfigFontWeights {
  lighter: number;
  default: number;
  bolder: number;
}

/** HostConfig_Font (FontFamily default "Roboto"). */
export interface HostConfigFont {
  fontFamily: string;
  fontSizes: HostConfigFontSizes;
  fontWeights: HostConfigFontWeights;
}

/** HostConfig: the JSON names of the record attributes (`spacing`, `fontTypes`, `default`, `monospace`, ...), which
    JSONSerialize_HostConfig writes. */
export interface HostConfig {
  spacing: HostConfigSpacing;
  fontTypes: { default: HostConfigFont; monospace: HostConfigFont };
}

/** Static entity AdaptiveCardsConfig of Connect2_LegacyShared: Events "1" (migration/knowledge/static-entities-tst.json). */
export const AdaptiveCardsConfig = { Events: 1 } as const;

const defaultFont = (): HostConfigFont => ({
  fontFamily: 'Roboto',
  fontSizes: { small: 10, default: 12, medium: 14, large: 17, extraLarge: 20 },
  fontWeights: { lighter: 200, default: 400, bolder: 800 },
});

/** A HostConfig record with the default values of its structures. */
const defaultHostConfig = (): HostConfig => ({
  spacing: { small: 3, default: 8, medium: 20, large: 30, extraLarge: 40, padding: 20 },
  fontTypes: { default: defaultFont(), monospace: defaultFont() },
});

/** GetHostConfigByConfigId(In_ConfigId): for Events, the spacing 8/12/17/23/27 with padding 12, the font sizes
    12/14/16/18/20 in "Roboto", and "Roboto Mono" with the same sizes for monospace; any other id gives the default
    record. */
export function getHostConfigByConfigId(configId: number): HostConfig {
  const config = defaultHostConfig();
  if (configId !== AdaptiveCardsConfig.Events) return config;
  config.spacing = { small: 8, default: 12, medium: 17, large: 23, extraLarge: 27, padding: 12 };
  config.fontTypes.default.fontFamily = 'Roboto';
  config.fontTypes.default.fontSizes = { small: 12, default: 14, medium: 16, large: 18, extraLarge: 20 };
  config.fontTypes.monospace.fontFamily = 'Roboto Mono';
  config.fontTypes.monospace.fontSizes = config.fontTypes.default.fontSizes;
  return config;
}

/** JSONSerialize_HostConfig (OS.JSONUtils.serializeToJSON(In_HostConfig, true, false)): the JSON names, with the
    default values. */
export const serializeHostConfig = (hostConfig: HostConfig): string => JSON.stringify(hostConfig);
