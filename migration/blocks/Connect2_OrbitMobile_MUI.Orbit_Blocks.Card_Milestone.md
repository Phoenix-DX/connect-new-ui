# Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Milestone

- Kind: shared; build screens using it: EventDetail, OrbitLanding
- Compiled source: `migration/screens/EventDetail/analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Milestone.mvc.js`
- Child blocks: Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Template (queue: Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Template)

## Inputs

| Input | Type |
|---|---|
| IsOverrideMainColorVar | Text |
| IsSetUpMeals | Boolean |

## Captured DOM variants (1 distinct, 2 instances)

### Variant 1: EventDetail/default (×2)

```html
<div class="OSBlockWidget" data-block="Orbit_Blocks.Card_Milestone" id="b1-l1-142797_2-$b8">
  <div class="OSBlockWidget" data-block="Orbit_Blocks.Card_Template" id="b1-l1-142797_2-b8-$b1"><!-- nested block: 23 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Milestone.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Milestone.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Milestone.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Template.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_OrbitMobile_MUI.controller$GetCSSVarFromMainColor", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTimeById", "Connect2_OrbitMobile_MUI.controller$GetFormattedTime_FromDateTime", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTime", "Connect2_OrbitMobile_BL.model$Milestone_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Milestone_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Milestone_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Template_mvc_view, OSWidgets) {
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
        View.displayName = "Orbit_Blocks.Card_Milestone";
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
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Milestone_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Milestone_mvc_controller;
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
                    In_MainColorVar: model.variables.mainColorVarVar,
                    In_MilestoneTypeId: model.variables.in_MilestoneSummaryIn.orbitMilestoneTypeAttr.idAttr,
                    _in_MilestoneTypeIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneSummaryInDataFetchStatus)
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onClick$Action: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);
                                return controller.onHandle_ClickedMilestone$Action(controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });
                        });;
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
                                style: model.getCachedValue(idService.getId("NNlC5E0l7Uy8XHruqOiteg.style"), function() {
                                        return Connect2_OrbitMobile_MUIController.default.getCSSVarFromMainColor$Action(model.variables.mainColorVarVar, Connect2_OrbitMobile_MUIModel.staticEntities.orbitColorShade.color2, callContext).out_ColorVarOut;
                                    }, OS.DataTypes.DataTypes.Text, callContext.id)) + ";");
                                }, function() {
                                    return model.variables.mainColorVarVar;
                                })
                            },
                            style: "orbit-card-icon-cont",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Icon, {
                            extendedProperties: {
                                className: ("icon orbit-card-icon " + model.variables.in_MilestoneSummaryIn.orbitMilestoneTypeAttr.mainIconAttr),
                                style: model.getCachedValue(idService.getId("u+JHWFrJ+Ee85zOYpCDmOQ.style"), function() {
                                        return Connect2_OrbitMobile_MUIController.default.getCSSVarFromMainColor$Action(model.variables.mainColorVarVar, Connect2_OrbitMobile_MUIModel.staticEntities.orbitColorShade.color7, callContext).out_ColorVarOut;
                                    }, OS.DataTypes.DataTypes.Text, callContext.id)) + ";");
                                }, function() {
                                    return model.variables.mainColorVarVar;
                                })
                            },
                            icon: "flag",
                            iconSize: /*FontSize*/ 0,
                            style: "icon orbit-card-icon",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))];
                    }),
                    placeholder_Title: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Expression, {
                            value: model.variables.in_MilestoneSummaryIn.titleAttr,
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneSummaryInDataFetchStatus)
                        })];
                    }),
                    placeholder_Content: new PlaceholderContent(function() {
                        return [$if(model.variables.in_MilestoneSummaryIn.orbitMilestoneTypeAttr.isTransportMilestoneAttr, false, this, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: true,
                                extendedProperties: {
                                    className: model.getCachedValue(idService.getId("QYRTPCZqH02kdA4fk4lTPA.class"), function() {
                                        return ("orbit-card-content-info" + ((!(model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.milestoneEndDateTimeAttr.equals(OS.BuiltinFunctions.nullDate()))) ? (" margin-bottom-m") : ("")));
                                    }, function() {
                                        return model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.milestoneEndDateTimeAttr;
                                    })
                                },
                                style: "orbit-card-content-info",
                                visible: model.getCachedValue(idService.getId("QYRTPCZqH02kdA4fk4lTPA.Visible"), function() {
                                    return !(model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.milestoneStartDateTimeAttr.equals(OS.BuiltinFunctions.nullDate()));
                                }, function() {
                                    return model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.milestoneStartDateTimeAttr;
                                }),
                                _idProps: {
                                    service: idService,
                                    uuid: "4"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneSummaryInDataFetchStatus)
                            }, React.createElement(OSWidgets.Icon, {
                                extendedProperties: {
                                    className: ("icon orbit-card-content-info-icon " + model.variables.in_MilestoneSummaryIn.orbitMilestoneTypeAttr.iconTransportDepartureAttr)
                                },
                                icon: "flag",
                                iconSize: /*FontSize*/ 0,
                                style: "icon orbit-card-content-info-icon",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "5"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                style: "orbit-card-content-info-text",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "6"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Expression, {
                                style: "bold margin-bottom-base",
                                value: model.getCachedValue(idService.getId("gbsk4UekS0yjjsnnNIvDMg.Value"), function() {
                                        return Connect2_OrbitMobile_MUIController.default.getFormattedDateTimeById$Action(model.variables.in_MilestoneSummaryIn.typeAttr, model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.milestoneStartDateTimeAttr, callContext).out_FormattedDateTimeOut;
                                    }, OS.DataTypes.DataTypes.Text, callContext.id);
                                }, function() {
                                    return model.variables.in_MilestoneSummaryIn.typeAttr;
                                }, function() {
                                    return model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.milestoneStartDateTimeAttr;
                                }),
                                _idProps: {
                                    service: idService,
                                    uuid: "7"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneSummaryInDataFetchStatus)
                            }), React.createElement(OSWidgets.Expression, {
                                value: model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.departureLocationAttr,
                                _idProps: {
                                    service: idService,
                                    uuid: "8"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneSummaryInDataFetchStatus)
                            }))), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: true,
                                style: "orbit-card-content-info",
                                visible: model.getCachedValue(idService.getId("9hPWNIamhEWK_WBpyNRF6Q.Visible"), function() {
                                    return !(model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.milestoneEndDateTimeAttr.equals(OS.BuiltinFunctions.nullDate()));
                                }, function() {
                                    return model.variables.in_MilestoneSummaryIn.milestoneInfoAttr.milestoneEndDateTimeAttr;
                                }),
                                _idProps: {
                                    service: idService,
                                    uuid: "9"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneSummaryInDataFetchStatus)
                            }, React.createElement(OSWidgets.Icon, {
                                extendedProperties: {
                                    className: ("icon orbit-card-content-info-icon " + model.variables.in_MilestoneSummaryIn.orbitMilestoneTypeAttr.iconTransportArrivalAttr)
                                },
                                icon: "flag",
                                iconSize: /*FontSize*/ 0,
                                style: "icon orbit-card-content-info-icon",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "10"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                style: "orbit-card-content-info-text",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "11"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Expression, {
                                style: "bold margin-bottom-base",
                                value: model.getCachedValue(idService.getId("sb19aButoEyALHnG+I29Fw.Value"), function() {
```
(… 562 more lines in `migration/screens/EventDetail/analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Milestone.mvc.js`)
