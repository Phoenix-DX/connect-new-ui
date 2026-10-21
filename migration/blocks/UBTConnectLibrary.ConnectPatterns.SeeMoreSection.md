# UBTConnectLibrary.ConnectPatterns.SeeMoreSection

- Kind: shared; build screens using it: HouseholdCarousel, HouseholdDetails, Locality_Details, Profile, SupperMeeting_Carousel
- Compiled source: `migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnectLibrary.ConnectPatterns.SeeMoreSection.mvc.js`
- Child blocks: UBTConnectLibrary.BasePatterns.CustomContainer, UBTConnectLibrary.BasePatterns.CustomText (queue: -)

## Inputs

| Input | Type |
|---|---|
| StartExpanded | Boolean |
| ExtendedClasses | Text |
| isEnabled | Boolean |

## Captured DOM variants (1 distinct, 14 instances)

### Variant 1: HouseholdCarousel/default (×14)

```html
<div class="OSBlockWidget" data-block="ConnectPatterns.SeeMoreSection" id="b3-l1-1152_0-b2-b3-b1-$b14">
  <div class="ubt-see-more-section closed" data-container="">
    <div class="ubt-see-more-section--title" data-container="">
      <div class="OSBlockWidget" data-block="BasePatterns.CustomText" id="b3-l1-1152_0-b2-b3-b1-b14-$b1"><!-- nested block: 4 nodes --></div>
    </div>
    <div class="ubt-see-more-section--content" data-container="">
      <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b3-l1-1152_0-b2-b3-b1-b14-$b2"><!-- nested block: 68 nodes --></div>
    </div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnectLibrary.ConnectPatterns.SeeMoreSection.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.SeeMoreSection.mvc$model", "UBTConnectLibrary.ConnectPatterns.SeeMoreSection.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_SeeMoreSection_mvc_model, UBTConnectLibrary_ConnectPatterns_SeeMoreSection_mvc_controller, UBTConnectLibraryClientVariables, OSWidgets, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view) {
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
        View.displayName = "ConnectPatterns.SeeMoreSection";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_SeeMoreSection_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_SeeMoreSection_mvc_controller;
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
                style: model.getCachedValue(idService.getId("bD48KcNn40aomZqfnU3_wA.Style"), function() {
                            return UBTConnectLibraryController.default.formatClasses$Action(model.variables.mainContainerClassVar, model.variables.extendedClassesIn, callContext).classesOutOut;
                        }, OS.DataTypes.DataTypes.Text, callContext.id), ((model.variables.isExpandedVar) ? ("expanded") : ("closed")), callContext).classesOutOut;
                    }, OS.DataTypes.DataTypes.Text, callContext.id);
                }, function() {
                    return model.variables.mainContainerClassVar;
                }, function() {
                    return model.variables.extendedClassesIn;
                }, function() {
                    return model.variables.isExpandedVar;
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassesInDataFetchStatus)
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: (model.variables.mainContainerClassVar + "--title"),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                inputs: {
                    In_Text: model.getCachedValue(idService.getId("k8bXZUaXeUm8z35L3oWoXw.In_Text"), function() {
                        return ((!(model.variables.isExpandedVar)) ? ("See more") : ("Hide"));
                    }, function() {
                        return model.variables.isExpandedVar;
                    }),
                    In_TextOptions: model.getCachedValue(idService.getId("k8bXZUaXeUm8z35L3oWoXw.In_TextOptions"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.TextOptionsRec();
                            rec.colorAttr = ((model.variables.isEnabledIn) ? (UBTConnectLibraryModel.staticEntities.uBT_Color.primary) : (UBTConnectLibraryModel.staticEntities.uBT_Color.neutral7));
                            rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.small;
                            rec.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.semiBold;
                            return rec;
                        }();
                    }, function() {
                        return model.variables.isEnabledIn;
                    }),
                    _in_TextOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnabledInDataFetchStatus)
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    clicked$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);
                            controller.action_IconOnClick$Action(controller.callContext(eventHandlerContext));
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
                    uuid: "2",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: (model.variables.mainContainerClassVar + "--content"),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                inputs: {
                    Options: model.getCachedValue(idService.getId("18LkjAMOhkOBfZg8ECu5PA.Options"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                            rec.paddingSizeAttr = function() {
                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                rec.verticalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.small;
                                return rec;
                            }();
                            return rec;
                        }();
                    })
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
                    alias: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    content: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.content,
                            style: (model.variables.mainContainerClassVar + "--content"),
                            _idProps: {
                                service: idService,
                                name: "Content"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    })
                }
            }))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
