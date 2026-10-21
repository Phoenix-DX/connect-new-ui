# UBTConnect.Directory_Caroussel.EntitiesCarousel

- Kind: shared; build screens using it: HouseholdCarousel, SupperMeeting_Carousel
- Compiled source: `migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnect.Directory_Caroussel.EntitiesCarousel.mvc.js`
- Child blocks: OutSystemsUI_2_23.Interaction.Carousel, UBTConnect.Directory_Caroussel.EntitiesCarousel_Element, UBTConnect.Directory_Caroussel.EntitiesCarousel_HeaderGenerator (queue: OutSystemsUI_2_23.Interaction.Carousel, UBTConnect.Directory_Caroussel.EntitiesCarousel_Element, UBTConnect.Directory_Caroussel.EntitiesCarousel_HeaderGenerator)

## Inputs

| Input | Type |
|---|---|
| In_StartingPosition | Integer |
| In_ConnectEntityTypeId | Text |

## Captured DOM variants (1 distinct, 6 instances)

### Variant 1: HouseholdCarousel/default (×6)

```html
<div class="OSBlockWidget" data-block="Directory_Caroussel.EntitiesCarousel" id="$b3">
  <div class="OSBlockWidget" data-block="Interaction.Carousel" id="b3-EntitiesCarousel"><!-- nested block: 2416 nodes --></div>
  <div class="OSBlockWidget" data-block="Directory_Caroussel.EntitiesCarousel_HeaderGenerator" id="b3-$b3"><!-- nested block: 0 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect.Directory_Caroussel.EntitiesCarousel.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Caroussel.EntitiesCarousel.mvc$model", "UBTConnect.Directory_Caroussel.EntitiesCarousel.mvc$controller", "UBTConnect.clientVariables", "OutSystemsUI_2_23.Interaction.Carousel.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.Directory_Caroussel.EntitiesCarousel_Element.mvc$view", "UBTConnect.Directory_Caroussel.EntitiesCarousel_HeaderGenerator.mvc$view", "UBTConnect.model$HeaderListList", "UBTConnect.model$EntitiesCarousel_ItemList", "OutSystemsUI_2_23.model$CarouselItemsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.model$CarouselOptionalConfigsRec", "UBTConnect.model$HeaderListRec", "OutSystemsUI_2_23.model$ErrorMessageRec", "OutSystemsUI_2_23.controller$SetSplideEvent", "OutSystemsUI_2_23.controller$CarouselDisableOnRender", "OutSystemsUI_2_23.model$SplideConfigsRec", "OutSystemsUI_2_23.controller$SetSplideConfigs", "OutSystemsUI_2_23.controller$UnsetSplideEvent"], function(OutSystems, UBTConnectModel, UBTConnectController, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, UBTConnect_Directory_Caroussel_EntitiesCarousel_mvc_model, UBTConnect_Directory_Caroussel_EntitiesCarousel_mvc_controller, UBTConnectClientVariables, OutSystemsUI_2_23_Interaction_Carousel_mvc_view, OSWidgets, UBTConnect_Directory_Caroussel_EntitiesCarousel_Element_mvc_view, UBTConnect_Directory_Caroussel_EntitiesCarousel_HeaderGenerator_mvc_view) {
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
        View.displayName = "Directory_Caroussel.EntitiesCarousel";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/UBTConnect.Directory_Caroussel.EntitiesCarousel.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [OutSystemsUI_2_23_Interaction_Carousel_mvc_view, UBTConnect_Directory_Caroussel_EntitiesCarousel_Element_mvc_view, UBTConnect_Directory_Caroussel_EntitiesCarousel_HeaderGenerator_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Directory_Caroussel_EntitiesCarousel_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Directory_Caroussel_EntitiesCarousel_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OutSystemsUI_2_23_Interaction_Carousel_mvc_view, {
                inputs: {
                    ExtendedClass: "ubt-entities-carousel",
                    OptionalConfigs: model.getCachedValue(idService.getId("EntitiesCarousel.OptionalConfigs"), function() {
                        return function() {
                            var rec = new OutSystemsUI_2_23Model.CarouselOptionalConfigsRec();
                            rec.autoPlayAttr = false;
                            rec.loopAttr = false;
                            rec.startingPositionAttr = model.variables.index_InitialVar;
                            return rec;
                        }();
                    }, function() {
                        return model.variables.index_InitialVar;
                    }),
                    Navigation: UBTConnectModel.staticEntities.carouselNavigation.none
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    initialized$Action: function(carouselIdIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);
                            controller.handler_EntitiesCarousel_Initialized$Action(controller.callContext(eventHandlerContext));
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
                    name: "EntitiesCarousel",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    carouselItems: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.List, {
                            animateItems: false,
                            extendedProperties: {
                                "disable-virtualization": "True"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mode: /*Default*/ 0,
                            source: model.variables.in_EntitiesCarousel_ItemsIn,
                            style: "list list-group",
                            tag: "div",
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EntitiesCarousel_ItemsInDataFetchStatus),
                            placeholders: {
                                content: new IteratorPlaceholderContent(function(idService, callContext) {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "2"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: [asPrimitiveValue(model.variables.renderBufferVar), asPrimitiveValue(model.variables.index_ActiveElementVar), asPrimitiveValue(model.variables.in_ConnectEntityTypeIdIn), asPrimitiveValue(model.variables.index_NextActiveElementVar), asPrimitiveValue(model.variables._in_ConnectEntityTypeIdInDataFetchStatus), asPrimitiveValue(model.variables._in_EntitiesCarousel_ItemsInDataFetchStatus), asPrimitiveValue(model.variables.in_EntitiesCarousel_ItemsIn.getCurrent(callContext.iterationContext).entityIdAttr), asPrimitiveValue(model.variables.in_EntitiesCarousel_ItemsIn.length), asPrimitiveValue(model.variables.in_EntitiesCarousel_ItemsIn.getCurrentRowNumber(callContext.iterationContext))]
                                    }, React.createElement(UBTConnect_Directory_Caroussel_EntitiesCarousel_Element_mvc_view, {
                                        inputs: {
                                            In_Index_CurrentElement: model.variables.in_EntitiesCarousel_ItemsIn.getCurrentRowNumber(callContext.iterationContext),
                                            _in_Index_CurrentElementInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EntitiesCarousel_ItemsInDataFetchStatus),
                                            In_Index_NextActiveElement: model.variables.index_NextActiveElementVar,
                                            In_ConnectEntityTypeId: model.variables.in_ConnectEntityTypeIdIn,
                                            _in_ConnectEntityTypeIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ConnectEntityTypeIdInDataFetchStatus),
                                            In_Index_ActiveElement: model.variables.index_ActiveElementVar,
                                            In_RenderBuffer: model.variables.renderBufferVar,
                                            In_CarouselLength: model.variables.in_EntitiesCarousel_ItemsIn.length,
                                            _in_CarouselLengthInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EntitiesCarousel_ItemsInDataFetchStatus),
                                            In_EntityId: model.getCachedValue(idService.getId("Qu_Mamtex0ScY2VWSqo5gQ.In_EntityId"), function() {
                                                return OS.BuiltinFunctions.textToLongInteger(model.variables.in_EntitiesCarousel_ItemsIn.getCurrent(callContext.iterationContext).entityIdAttr);
                                            }, function() {
                                                return model.variables.in_EntitiesCarousel_ItemsIn.getCurrent(callContext.iterationContext).entityIdAttr;
                                            }),
                                            _in_EntityIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EntitiesCarousel_ItemsInDataFetchStatus)
                                        },
                                        events: {
                                            _handleError: function(ex) {
                                                controller.handleError(ex);
                                            },
                                            event_SetHeader$Action: function(event_HeaderIn) {
                                                var eventHandlerContext = callContext.clone();
                                                return OS.Flow.tryFinally(function() {
                                                    var varBag = {};
                                                    controller.pushDebuggerContext(eventHandlerContext);
                                                    controller.handler_SetHeaderList$Action(event_HeaderIn, model.variables.in_EntitiesCarousel_ItemsIn.getCurrentRowNumber(callContext.iterationContext), controller.callContext(eventHandlerContext));
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
                                            uuid: "3",
                                            alias: "2"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    }))];
                                }, callContext, idService, "1")
                            },
                            _dependencies: [asPrimitiveValue(model.variables.renderBufferVar), asPrimitiveValue(model.variables.index_ActiveElementVar), asPrimitiveValue(model.variables.in_ConnectEntityTypeIdIn), asPrimitiveValue(model.variables.index_NextActiveElementVar), asPrimitiveValue(model.variables._in_ConnectEntityTypeIdInDataFetchStatus), asPrimitiveValue(model.variables._in_EntitiesCarousel_ItemsInDataFetchStatus)]
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.renderBufferVar), asPrimitiveValue(model.variables.index_ActiveElementVar), asPrimitiveValue(model.variables.in_ConnectEntityTypeIdIn), asPrimitiveValue(model.variables.index_NextActiveElementVar), asPrimitiveValue(model.variables._in_ConnectEntityTypeIdInDataFetchStatus), asPrimitiveValue(model.variables._in_EntitiesCarousel_ItemsInDataFetchStatus), asPrimitiveValue(model.variables.in_EntitiesCarousel_ItemsIn)]
            }), React.createElement(UBTConnect_Directory_Caroussel_EntitiesCarousel_HeaderGenerator_mvc_view, {
                inputs: {
                    In_CurrentIndex: model.variables.index_ActiveElementVar,
                    In_HouseholdCarouselHeaderList: model.variables.headerListVar
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    event_SetHeader$Action: function(event_HeaderIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);
                            controller.event_SetHeader$Action(event_HeaderIn, controller.callContext(eventHandlerContext));
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
                    uuid: "4",
                    alias: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
