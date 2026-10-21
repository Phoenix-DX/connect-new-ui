# UBTConnect.Home.FeedBlock_CommunityPopulation

- Kind: shared; build screens using it: CountryList, HomeFeed
- Compiled source: `migration/screens/CountryList/analysis/sources/pretty/UBTConnect.Home.FeedBlock_CommunityPopulation.mvc.js`
- Child blocks: UBTConnectLibrary.BasePatterns.CustomContainer, UBTConnectLibrary.BasePatterns.CustomText, UBTConnectLibrary.ConnectPatterns.SkeletonSection (queue: -)

## Inputs

(none found)

## Captured DOM variants (1 distinct, 6 instances)

### Variant 1: CountryList/default (×6)

```html
<div class="OSBlockWidget" data-block="Home.FeedBlock_CommunityPopulation" id="$b18">
  <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b18-$b1"><!-- nested block: 13 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect.Home.FeedBlock_CommunityPopulation.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "Connect_Geography_CS.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Home.FeedBlock_CommunityPopulation.mvc$model", "UBTConnect.Home.FeedBlock_CommunityPopulation.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "Connect_Geography_CS.model$UI_MembersStatisticsRec", "UBTConnect.referencesHealth$Connect_Geography_CS"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, Connect_Geography_CSModel, React, OSView, UBTConnect_Home_FeedBlock_CommunityPopulation_mvc_model, UBTConnect_Home_FeedBlock_CommunityPopulation_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view) {
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
        View.displayName = "Home.FeedBlock_CommunityPopulation";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Home_FeedBlock_CommunityPopulation_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Home_FeedBlock_CommunityPopulation_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                inputs: {
                    Options: model.getCachedValue(idService.getId("JLozr+OGM0qnsEduLjXKtQ.Options"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                            rec.backgroundAttr = function() {
                                var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.primaryGradientRadial;
                                return rec;
                            }();
                            rec.paddingSizeAttr = function() {
                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                                rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
                                return rec;
                            }();
                            rec.borderOptionsAttr = function() {
                                var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                rec.radiusAttr = function() {
                                    var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
                                    rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Shape.medium;
                                    return rec;
                                }();
                                return rec;
                            }();
                            rec.isSkeletonElementAttr = true;
                            return rec;
                        }();
                    })
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
                            controller.onClick_Block$Action(controller.callContext(eventHandlerContext));
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
                    content: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                            inputs: {
                                In_Text: "Community Population",
                                In_TextOptions: model.getCachedValue(idService.getId("nyvpsB9EpUWllWMyhq8ifA.In_TextOptions"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                        rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
                                        rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.doubleExtraSmall;
                                        rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
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
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }), React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                            inputs: {
                                In_IsLoading: (!(model.variables.fetchCountDataAct.isDataFetchedAttr) && !(model.variables.fetchCountDataAct.hasFetchErrorAttr))
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
                                alias: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                placeholder_LoadingSection: new PlaceholderContent(function() {
                                    return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                        inputs: {
                                            In_TextOptions: model.getCachedValue(idService.getId("EpCo1TYnHEeXgTxYXY3THA.In_TextOptions"), function() {
                                                return function() {
                                                    var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                    rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
                                                    rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.heading2;
                                                    rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
                                                    return rec;
                                                }();
                                            }),
                                            In_Text: model.getCachedValue(idService.getId("EpCo1TYnHEeXgTxYXY3THA.In_Text"), function() {
                                                return (((!(model.variables.fetchCountDataAct.isDataFetchedAttr) && !(model.variables.fetchCountDataAct.hasFetchErrorAttr))) ? ("00000") : (OS.BuiltinFunctions.formatDecimal(OS.BuiltinFunctions.longIntegerToDecimal(model.variables.fetchCountDataAct.uI_MembersStatisticsOut.totalNumberOfMembersAttr), 0, "", ",")));
                                            }, function() {
                                                return model.variables.fetchCountDataAct.isDataFetchedAttr;
                                            }, function() {
                                                return model.variables.fetchCountDataAct.hasFetchErrorAttr;
                                            }, function() {
                                                return model.variables.fetchCountDataAct.uI_MembersStatisticsOut.totalNumberOfMembersAttr;
                                            }),
                                            _in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchCountDataAct.dataFetchStatusAttr)
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
                                            uuid: "3",
                                            alias: "4"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.fetchCountDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.fetchCountDataAct.uI_MembersStatisticsOut.totalNumberOfMembersAttr), asPrimitiveValue(model.variables.fetchCountDataAct.hasFetchErrorAttr), asPrimitiveValue(model.variables.fetchCountDataAct.isDataFetchedAttr)]
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.fetchCountDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.fetchCountDataAct.uI_MembersStatisticsOut.totalNumberOfMembersAttr), asPrimitiveValue(model.variables.fetchCountDataAct.hasFetchErrorAttr), asPrimitiveValue(model.variables.fetchCountDataAct.isDataFetchedAttr)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
