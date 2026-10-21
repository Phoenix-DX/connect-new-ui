# UBTConnect.Directory_Caroussel.EntitiesCarousel_Element

- Kind: shared; build screens using it: HouseholdCarousel, SupperMeeting_Carousel
- Compiled source: `migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnect.Directory_Caroussel.EntitiesCarousel_Element.mvc.js`
- Child blocks: UBTConnect.Directory_Caroussel.CarouselTag, UBTConnect.Directory_Caroussel.EntitiesCarouse_lSupperMeetingDetails, UBTConnect.Directory_Caroussel.EntitiesCarousel_HouseholdDetails (queue: UBTConnect.Directory_Caroussel.CarouselTag, UBTConnect.Directory_Caroussel.EntitiesCarouse_lSupperMeetingDetails, UBTConnect.Directory_Caroussel.EntitiesCarousel_HouseholdDetails)

## Inputs

| Input | Type |
|---|---|
| In_ConnectEntityTypeId | Text |
| In_EntityId | LongInteger |
| In_CarouselLength | Integer |
| In_Index_ActiveElement | Integer |
| In_Index_NextActiveElement | Integer |
| In_Index_CurrentElement | Integer |
| In_RenderBuffer | Integer |

## Captured DOM variants (3 distinct, 78 instances)

### Variant 1: HouseholdCarousel/default (×12)

```html
<div class="OSBlockWidget" data-block="Directory_Caroussel.EntitiesCarousel_Element" id="b3-l1-1152_0-$b2">
  <div class="" data-container="">
    <div class="OSBlockWidget" data-block="Directory_Caroussel.EntitiesCarousel_HouseholdDetails" id="b3-l1-1152_0-b2-$b3"><!-- nested block: 580 nodes --></div>
  </div>
</div>
```

### Variant 2: HouseholdCarousel/default (×57)

```html
<div class="OSBlockWidget" data-block="Directory_Caroussel.EntitiesCarousel_Element" id="b3-l1-1152_4-$b2"></div>
```

### Variant 3: SupperMeeting_Carousel/default (×9)

```html
<div class="OSBlockWidget" data-block="Directory_Caroussel.EntitiesCarousel_Element" id="b3-l1-1164_0-$b2">
  <div class="" data-container="">
    <div class="OSBlockWidget" data-block="Directory_Caroussel.EntitiesCarouse_lSupperMeetingDetails" id="b3-l1-1164_0-b2-$b1"><!-- nested block: 575 nodes --></div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect.Directory_Caroussel.EntitiesCarousel_Element.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Caroussel.EntitiesCarousel_Element.mvc$model", "UBTConnect.Directory_Caroussel.EntitiesCarousel_Element.mvc$controller", "UBTConnect.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnect.Directory_Caroussel.EntitiesCarouse_lSupperMeetingDetails.mvc$view", "UBTConnect.Directory_Caroussel.CarouselTag.mvc$view", "UBTConnect.Directory_Caroussel.EntitiesCarousel_HouseholdDetails.mvc$view", "UBTConnect.controller$Get_IsInsideRenderBuffer"], function(OutSystems, UBTConnectModel, UBTConnectController, React, OSView, UBTConnect_Directory_Caroussel_EntitiesCarousel_Element_mvc_model, UBTConnect_Directory_Caroussel_EntitiesCarousel_Element_mvc_controller, UBTConnectClientVariables, OSWidgets, UBTConnect_Directory_Caroussel_EntitiesCarouse_lSupperMeetingDetails_mvc_view, UBTConnect_Directory_Caroussel_CarouselTag_mvc_view, UBTConnect_Directory_Caroussel_EntitiesCarousel_HouseholdDetails_mvc_view) {
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
        View.displayName = "Directory_Caroussel.EntitiesCarousel_Element";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_Directory_Caroussel_EntitiesCarouse_lSupperMeetingDetails_mvc_view, UBTConnect_Directory_Caroussel_CarouselTag_mvc_view, UBTConnect_Directory_Caroussel_EntitiesCarousel_HouseholdDetails_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Directory_Caroussel_EntitiesCarousel_Element_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Directory_Caroussel_EntitiesCarousel_Element_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), $if(model.variables.isRenderCurrentElementVar, false, this, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    style: "",
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "0"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, $if((model.variables.in_ConnectEntityTypeIdIn === UBTConnectModel.staticEntities.connect_Entity.supperMeetings_aka_Subdivisions), false, this, function() {
                    return [React.createElement(UBTConnect_Directory_Caroussel_EntitiesCarouse_lSupperMeetingDetails_mvc_view, {
                        inputs: {
                            In_SubdivisionId: model.variables.in_EntityIdIn,
                            _in_SubdivisionIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EntityIdInDataFetchStatus)
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
                            uuid: "1",
                            alias: "1"
                        },
                        _widgetRecordProvider: widgetsRecordProvider,
                        placeholders: {
                            placeholder_CarouselTag: new PlaceholderContent(function() {
                                return [React.createElement(UBTConnect_Directory_Caroussel_CarouselTag_mvc_view, {
                                    inputs: {
                                        In_TotalItems: model.variables.in_CarouselLengthIn,
                                        _in_TotalItemsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_CarouselLengthInDataFetchStatus),
                                        In_IndexCurrentItem: model.variables.in_Index_CurrentElementIn,
                                        _in_IndexCurrentItemInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_Index_CurrentElementInDataFetchStatus)
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
                                        alias: "2"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    _dependencies: []
                                })];
                            })
                        },
                        _dependencies: [asPrimitiveValue(model.variables.in_Index_CurrentElementIn), asPrimitiveValue(model.variables._in_Index_CurrentElementInDataFetchStatus), asPrimitiveValue(model.variables._in_CarouselLengthInDataFetchStatus), asPrimitiveValue(model.variables.in_CarouselLengthIn)]
                    })];
                }, function() {
                    return [];
                }), $if((model.variables.in_ConnectEntityTypeIdIn === UBTConnectModel.staticEntities.connect_Entity.household), false, this, function() {
                    return [React.createElement(UBTConnect_Directory_Caroussel_EntitiesCarousel_HouseholdDetails_mvc_view, {
                        inputs: {
                            In_HouseholdId: model.variables.in_EntityIdIn,
                            _in_HouseholdIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EntityIdInDataFetchStatus),
                            In_IsSkeletonOnly: model.variables.isSkeletonOnlyVar
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
                            uuid: "3",
                            alias: "3"
                        },
                        _widgetRecordProvider: widgetsRecordProvider,
                        placeholders: {
                            placeholder_CarouselTag: new PlaceholderContent(function() {
                                return [React.createElement(UBTConnect_Directory_Caroussel_CarouselTag_mvc_view, {
                                    inputs: {
                                        In_TotalItems: model.variables.in_CarouselLengthIn,
                                        _in_TotalItemsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_CarouselLengthInDataFetchStatus),
                                        In_IndexCurrentItem: model.variables.in_Index_CurrentElementIn,
                                        _in_IndexCurrentItemInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_Index_CurrentElementInDataFetchStatus)
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
                                        uuid: "4",
                                        alias: "4"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    _dependencies: []
                                })];
                            })
                        },
                        _dependencies: [asPrimitiveValue(model.variables.in_Index_CurrentElementIn), asPrimitiveValue(model.variables._in_Index_CurrentElementInDataFetchStatus), asPrimitiveValue(model.variables._in_CarouselLengthInDataFetchStatus), asPrimitiveValue(model.variables.in_CarouselLengthIn)]
                    })];
                }, function() {
                    return [];
                }))];
            }, function() {
                return [];
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
