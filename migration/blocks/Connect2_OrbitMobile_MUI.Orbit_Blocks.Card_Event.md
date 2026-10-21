# Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Event

- Kind: shared; build screens using it: OrbitAdminLanding, OrbitLanding
- Compiled source: `migration/screens/OrbitLanding/analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Event.mvc.js`
- Child blocks: Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Template (queue: Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Template)

## Inputs

| Input | Type |
|---|---|
| In_EventSummary | Record Event_ScreenRec |

## Captured DOM variants (1 distinct, 1 instances)

### Variant 1: OrbitLanding/default (×1)

```html
<div class="OSBlockWidget" data-block="Orbit_Blocks.Card_Event" id="b1-l1-60_0-$b5">
  <div class="OSBlockWidget" data-block="Orbit_Blocks.Card_Template" id="b1-l1-60_0-b5-$b1"><!-- nested block: 20 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Event.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Event.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Event.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Template.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_OrbitMobile_MUI.controller$GetCSSVarFromMainColor", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTime", "Connect2_OrbitMobile_BL.model$Event_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Event_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Event_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Template_mvc_view, OSWidgets) {
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
        View.displayName = "Orbit_Blocks.Card_Event";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/Connect2_OrbitMobile_MUI.TimeFormat.js"];
        };
        View.getBlocks = function() {
            return [Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Template_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Event_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Event_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Template_mvc_view, {
                inputs: {
                    In_MainColorVar: model.variables.in_EventSummaryIn.orbitEventTypeAttr.mainColorVarAttr,
                    _in_MainColorVarInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EventSummaryInDataFetchStatus)
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onClick$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);
                            controller.clickedEvent$Action(model.variables.in_EventSummaryIn, controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });
                        ;
                    }
                },
                _validationProps: {
                    validationService: validationService
                },
                _idProps: {
                    service: idService,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    placeholder_Icon: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: model.getCachedValue(idService.getId("OrbitEventCard_IconCont.style"), function() {
                                        return Connect2_OrbitMobile_MUIController.default.getCSSVarFromMainColor$Action(model.variables.in_EventSummaryIn.orbitEventTypeAttr.mainColorVarAttr, Connect2_OrbitMobile_MUIModel.staticEntities.orbitColorShade.color2, callContext).out_ColorVarOut;
                                    }, OS.DataTypes.DataTypes.Text, callContext.id)) + ";");
                                }, function() {
                                    return model.variables.in_EventSummaryIn.orbitEventTypeAttr.mainColorVarAttr;
                                })
                            },
                            style: "orbit-card-icon-cont",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "OrbitEventCard_IconCont"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Icon, {
                            extendedProperties: {
                                className: ("icon orbit-card-icon " + model.variables.in_EventSummaryIn.orbitEventTypeAttr.mainIconAttr),
                                style: model.getCachedValue(idService.getId("OrbitEventCard_Icon.style"), function() {
                                        return Connect2_OrbitMobile_MUIController.default.getCSSVarFromMainColor$Action(model.variables.in_EventSummaryIn.orbitEventTypeAttr.mainColorVarAttr, Connect2_OrbitMobile_MUIModel.staticEntities.orbitColorShade.color7, callContext).out_ColorVarOut;
                                    }, OS.DataTypes.DataTypes.Text, callContext.id)) + ";");
                                }, function() {
                                    return model.variables.in_EventSummaryIn.orbitEventTypeAttr.mainColorVarAttr;
                                })
                            },
                            icon: "flag",
                            iconSize: /*FontSize*/ 0,
                            style: "icon orbit-card-icon",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "OrbitEventCard_Icon"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))];
                    }),
                    placeholder_Title: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Expression, {
                            value: model.variables.in_EventSummaryIn.titleAttr,
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EventSummaryInDataFetchStatus)
                        })];
                    }),
                    placeholder_Content: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "orbit-card-content-info margin-bottom-m",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "OrbitEventCard_MeetingTime"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Icon, {
                            icon: "flag",
                            iconSize: /*FontSize*/ 0,
                            style: "icon orbit-icon-date-time orbit-card-content-info-icon",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "OrbitEventCard_MeetingTimeIcon"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Expression, {
                            value: model.getCachedValue(idService.getId("OrbitEventCard_MeetingTimeText.Value"), function() {
                                    return Connect2_OrbitMobile_MUIController.default.getFormattedDateTime$Action(model.variables.in_EventSummaryIn.eventInfoAttr.startEventDateAttr, false, true, false, true, false, false, callContext).out_FormattedDateTimeOut;
                                    return Connect2_OrbitMobile_MUIController.default.getFormattedDateTime$Action(model.variables.in_EventSummaryIn.eventInfoAttr.endEventDateAttr, false, true, false, true, false, false, callContext).out_FormattedDateTimeOut;
                                }, OS.DataTypes.DataTypes.Text, callContext.id));
                            }, function() {
                                return model.variables.in_EventSummaryIn.eventInfoAttr.startEventDateAttr;
                            }, function() {
                                return model.variables.in_EventSummaryIn.eventInfoAttr.endEventDateAttr;
                            }),
                            _idProps: {
                                service: idService,
                                name: "OrbitEventCard_MeetingTimeText"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EventSummaryInDataFetchStatus)
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "orbit-card-content-info",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "OrbitEventCard_MeetingLocation"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Icon, {
                            icon: "flag",
                            iconSize: /*FontSize*/ 0,
                            style: "icon orbit-icon-location orbit-card-content-info-icon",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "OrbitEventCard_MeetingLocationIcon"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Expression, {
                            value: model.variables.in_EventSummaryIn.eventInfoAttr.eventLocationAttr,
                            _idProps: {
                                service: idService,
                                name: "OrbitEventCard_MeetingLocationText"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EventSummaryInDataFetchStatus)
                        }))];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables._in_EventSummaryInDataFetchStatus), asPrimitiveValue(model.variables.in_EventSummaryIn.eventInfoAttr.eventLocationAttr), asPrimitiveValue(model.variables.in_EventSummaryIn.eventInfoAttr.endEventDateAttr), asPrimitiveValue(model.variables.in_EventSummaryIn.eventInfoAttr.startEventDateAttr), asPrimitiveValue(model.variables.in_EventSummaryIn.titleAttr), asPrimitiveValue(model.variables.in_EventSummaryIn.orbitEventTypeAttr.mainIconAttr), asPrimitiveValue(model.variables.in_EventSummaryIn.orbitEventTypeAttr.mainColorVarAttr)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
