# Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_PillItem

- Kind: shared; build screens using it: EventBooklet, EventDetail, HostSurvey
- Compiled source: `migration/screens/EventDetail/analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_PillItem.mvc.js`
- Child blocks: - (queue: -)

## Inputs

| Input | Type |
|---|---|
| In_IsDisabled | Boolean |
| In_IconClass | Text |
| In_PillText | Text |
| In_IsSmallIcon | Boolean |
| In_ExtendedClass | Text |
| In_ExtendedStyle | Text |

## Captured DOM variants (8 distinct, 28 instances)

### Variant 1: EventDetail/default (×1)

```html
<div class="OSBlockWidget" data-block="Orbit_Blocks.HostSurvey_PillItem" id="b1-$b3">
  <div class="orbit-host-survey-pill" data-container="" style="background-color: var(--orbit-green-2); color: var(--orbit-green-6);">
    <i class="icon orbit-icon-circle-check color-orbit-green-6 font-size-xs" data-icon=""></i>
    <span class="margin-left-s font-size-xs line-height-xs white-space-nowrap" data-expression="">
      Confirmed
    </span>
  </div>
</div>
```

### Variant 2: HostSurvey/default (×3)

```html
<div class="OSBlockWidget" data-block="Orbit_Blocks.HostSurvey_PillItem" id="b2-l5-142863_0-b24-$b1">
  <div class="orbit-host-survey-pill orbit-host-survey-pill-disabled" data-container="">
    <i class="icon orbit-icon-couple font-size-base" data-icon=""></i>
    <span class="margin-left-s font-size-xs line-height-xs white-space-nowrap" data-expression="">
      ••••••
    </span>
  </div>
</div>
```

### Variant 3: HostSurvey/default (×7)

```html
<div class="OSBlockWidget" data-block="Orbit_Blocks.HostSurvey_PillItem" id="b2-l5-142863_0-b24-$b2">
  <div class="orbit-host-survey-pill orbit-host-survey-pill-disabled" data-container="">
    <i class="icon orbit-icon-accommodation font-size-base" data-icon=""></i>
    <span class="margin-left-s font-size-xs line-height-xs white-space-nowrap" data-expression="">
      •
    </span>
  </div>
</div>
```

### Variant 4: HostSurvey/default (×7)

```html
<div class="OSBlockWidget" data-block="Orbit_Blocks.HostSurvey_PillItem" id="b2-l5-142863_0-b24-$b3">
  <div class="orbit-host-survey-pill orbit-host-survey-pill-disabled" data-container="">
    <i class="icon orbit-icon-home font-size-base" data-icon=""></i>
    <span class="margin-left-s font-size-xs line-height-xs white-space-nowrap" data-expression="">
      Ground Floor
    </span>
  </div>
</div>
```

(4 more variants not shown: rerun with --variants)

## Compiled view (debugger lines removed)

```js
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_PillItem.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_PillItem.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_PillItem.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets) {
    var OS = OutSystems.Internal;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;
    var View = (function(_super) {
        __extends(View, _super);
        function View() {
            var thisIsInstanceOfSuper = this instanceof _super;
            if (thisIsInstanceOfSuper == false) {
                return;
            }
            try {
                this.initialize.apply(this, arguments);
            } catch (error) {
                View.handleError(error);
                throw error;
            }
        }
        View.prototype.initialize = function() {
            _super.apply(this, arguments);
        };
        View.displayName = "Orbit_Blocks.HostSurvey_PillItem";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function() {
                return "";
            },
            enumerable: true,
            configurable: true
        });
        View.prototype.internalRender = function() {
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            var validationService = controller.validationService;
            var widgetsRecordProvider = this.widgetsRecordProvider;
            var callContext = controller.callContext();
            var $if = View.ifWidget;
            var $text = View.textWidget;
            var asPrimitiveValue = View.asPrimitiveValue;
            var getTranslation = View.getTranslation;
            var _this = this;
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: model.getCachedValue(idService.getId("egiUihI2K0ebY13+C0J5AA.style"), function() {
                        return ((model.variables.in_IsDisabledIn) ? ("") : (model.variables.in_ExtendedStyleIn));
                    }, function() {
                        return model.variables.in_IsDisabledIn;
                    }, function() {
                        return model.variables.in_ExtendedStyleIn;
                    })
                },
                style: model.getCachedValue(idService.getId("egiUihI2K0ebY13+C0J5AA.Style"), function() {
                    return ("orbit-host-survey-pill" + ((model.variables.in_IsDisabledIn) ? (" orbit-host-survey-pill-disabled") : (((((model.variables.in_ExtendedClassIn) !== (""))) ? ((" " + model.variables.in_ExtendedClassIn)) : ("")))));
                }, function() {
                    return model.variables.in_IsDisabledIn;
                }, function() {
                    return model.variables.in_ExtendedClassIn;
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsDisabledInDataFetchStatus, model.variables._in_ExtendedClassInDataFetchStatus)
            }, React.createElement(OSWidgets.Icon, {
                extendedProperties: {
                    className: model.getCachedValue(idService.getId("I5SeKVXsW0uLMYehIdS4UA.class"), function() {
                        return (("icon " + model.variables.in_IconClassIn) + ((model.variables.in_IsSmallIconIn) ? (" font-size-xs") : (" font-size-base")));
                    }, function() {
                        return model.variables.in_IconClassIn;
                    }, function() {
                        return model.variables.in_IsSmallIconIn;
                    })
                },
                icon: "flag",
                iconSize: /*FontSize*/ 0,
                style: "\"icon\"",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Expression, {
                style: "margin-left-s font-size-xs line-height-xs white-space-nowrap",
                value: model.variables.in_PillTextIn,
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_PillTextInDataFetchStatus)
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
