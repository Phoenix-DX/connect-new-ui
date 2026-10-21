# Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.ListOfDaySelectors

- Kind: shared; build screens using it: EventBooklet, EventDetail
- Compiled source: `migration/screens/EventDetail/analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.ListOfDaySelectors.mvc.js`
- Child blocks: Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.DaySelector (queue: Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.DaySelector)

## Inputs

| Input | Type |
|---|---|
| DateList | RecordList DayFilterList |
| ShowInWeekday | Boolean |
| ReplaceSunday | Boolean |
| AddWeekdayBelow | Boolean |

## Captured DOM variants (1 distinct, 1 instances)

### Variant 1: EventDetail/default (×1)

```html
<div class="OSBlockWidget" data-block="Orbit_Generic_Blocks.ListOfDaySelectors" id="b1-b7-$b1">
  <div class="list list-group event-date-selector-list OSFillParent" data-animation-disabled="" data-list="" data-virtualization-disabled="">
    <div class="event-date-selector-cont" data-container="" style="cursor: pointer;">
      <div class="OSBlockWidget" data-block="Orbit_Generic_Blocks.DaySelector" id="b1-b7-b1-l1-142790_0-$b1"><!-- nested block: 4 nodes --></div>
      <span class="event-date-selector-weekday" data-expression="">
        •
      </span>
    </div>
    <div class="event-date-selector-cont" data-container="" style="cursor: pointer;">
      <div class="OSBlockWidget" data-block="Orbit_Generic_Blocks.DaySelector" id="b1-b7-b1-l1-142790_1-$b1"><!-- nested block: 4 nodes --></div>
      <span class="event-date-selector-weekday" data-expression="">
        •
      </span>
    </div>
    <div class="event-date-selector-cont" data-container="" style="cursor: pointer;">
      <div class="OSBlockWidget" data-block="Orbit_Generic_Blocks.DaySelector" id="b1-b7-b1-l1-142790_2-$b1"><!-- nested block: 4 nodes --></div>
      <span class="event-date-selector-weekday" data-expression="">
        •
      </span>
    </div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.ListOfDaySelectors.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.ListOfDaySelectors.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.ListOfDaySelectors.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.DaySelector.mvc$view", "Connect2_OrbitMobile_MUI.controller$GetFormattedDate_Weekday", "Connect2_OrbitMobile_MUI.controller$GetFormattedDate_Single", "Connect2_OrbitMobile_BL.model$DayFilterRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$DayFilterList"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_ListOfDaySelectors_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_ListOfDaySelectors_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_DaySelector_mvc_view) {
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
        View.displayName = "Orbit_Generic_Blocks.ListOfDaySelectors";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_DaySelector_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_ListOfDaySelectors_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_ListOfDaySelectors_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.List, {
                animateItems: false,
                extendedProperties: {
                    "disable-virtualization": "True"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                mode: /*Default*/ 0,
                source: model.variables.dateListIn,
                style: "list list-group event-date-selector-list",
                tag: "div",
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._dateListInDataFetchStatus),
                placeholders: {
                    content: new IteratorPlaceholderContent(function(idService, callContext) {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedEvents: {
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);
                                        controller.clickedDate$Action(Connect2_OrbitMobile_MUIModel.staticEntities.milestoneTimeType.dAY, model.variables.dateListIn.getCurrent(callContext.iterationContext).dateGroupAttr, model.variables.dateListIn.getCurrentRowNumber(callContext.iterationContext), controller.callContext(eventHandlerContext));
                                    }, function() {
                                        controller.popDebuggerContext(eventHandlerContext);
                                    });
                                    ;
                                }
                            },
                            style: "event-date-selector-cont",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: [asPrimitiveValue(model.variables.addWeekdayBelowIn), asPrimitiveValue(model.variables.replaceSundayIn), asPrimitiveValue(model.variables.showInWeekdayIn), asPrimitiveValue(model.variables._addWeekdayBelowInDataFetchStatus), asPrimitiveValue(model.variables._replaceSundayInDataFetchStatus), asPrimitiveValue(model.variables._showInWeekdayInDataFetchStatus), asPrimitiveValue(model.variables._dateListInDataFetchStatus), asPrimitiveValue(model.variables.dateListIn.getCurrent(callContext.iterationContext).dateGroupAttr), asPrimitiveValue(model.variables.dateListIn.getCurrent(callContext.iterationContext).isSelectedAttr)]
                        }, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_DaySelector_mvc_view, {
                            inputs: {
                                IsSelected: model.variables.dateListIn.getCurrent(callContext.iterationContext).isSelectedAttr,
                                _isSelectedInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._dateListInDataFetchStatus)
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                }
                            },
                            _validationProps: {
                                validationService: validationService
                            },
                            _idProps: {
                                service: idService,
                                uuid: "2",
                                alias: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                placeholder_Digit: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Expression, {
                                        value: model.getCachedValue(idService.getId("C1Pz8726jk6Pc7Yj4rhvEw.Value"), function() {
                                                return Connect2_OrbitMobile_MUIController.default.getFormattedDate_Weekday$Action(model.variables.dateListIn.getCurrent(callContext.iterationContext).dateGroupAttr, true, model.variables.replaceSundayIn, callContext).out_WeekdayOut;
                                                return Connect2_OrbitMobile_MUIController.default.getFormattedDate_Single$Action(model.variables.dateListIn.getCurrent(callContext.iterationContext).dateGroupAttr, Connect2_OrbitMobile_MUIModel.staticEntities.timeFormat.day, callContext).out_FormattedDateOut;
                                            }, OS.DataTypes.DataTypes.Text, callContext.id)));
                                        }, function() {
                                            return model.variables.showInWeekdayIn;
                                        }, function() {
                                            return model.variables.dateListIn.getCurrent(callContext.iterationContext).dateGroupAttr;
                                        }, function() {
                                            return model.variables.replaceSundayIn;
                                        }),
                                        _idProps: {
                                            service: idService,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._showInWeekdayInDataFetchStatus, model.variables._dateListInDataFetchStatus, model.variables._replaceSundayInDataFetchStatus)
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables._replaceSundayInDataFetchStatus), asPrimitiveValue(model.variables._dateListInDataFetchStatus), asPrimitiveValue(model.variables._showInWeekdayInDataFetchStatus), asPrimitiveValue(model.variables.replaceSundayIn), asPrimitiveValue(model.variables.dateListIn.getCurrent(callContext.iterationContext).dateGroupAttr), asPrimitiveValue(model.variables.showInWeekdayIn)]
                        }), $if(model.variables.addWeekdayBelowIn, false, this, function() {
                            return [React.createElement(OSWidgets.Expression, {
                                style: "event-date-selector-weekday",
                                value: model.getCachedValue(idService.getId("jpbIInK26EixazXN_OFk0A.Value"), function() {
                                        return Connect2_OrbitMobile_MUIController.default.getFormattedDate_Weekday$Action(model.variables.dateListIn.getCurrent(callContext.iterationContext).dateGroupAttr, true, model.variables.replaceSundayIn, callContext).out_WeekdayOut;
                                    }, OS.DataTypes.DataTypes.Text, callContext.id);
                                }, function() {
                                    return model.variables.dateListIn.getCurrent(callContext.iterationContext).dateGroupAttr;
                                }, function() {
                                    return model.variables.replaceSundayIn;
                                }),
                                _idProps: {
                                    service: idService,
                                    uuid: "4"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._dateListInDataFetchStatus, model.variables._replaceSundayInDataFetchStatus)
                            })];
                        }, function() {
                            return [];
                        }))];
                    }, callContext, idService, "1")
                },
                _dependencies: [asPrimitiveValue(model.variables.addWeekdayBelowIn), asPrimitiveValue(model.variables.replaceSundayIn), asPrimitiveValue(model.variables.showInWeekdayIn), asPrimitiveValue(model.variables._addWeekdayBelowInDataFetchStatus), asPrimitiveValue(model.variables._replaceSundayInDataFetchStatus), asPrimitiveValue(model.variables._showInWeekdayInDataFetchStatus), asPrimitiveValue(model.variables._dateListInDataFetchStatus)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
