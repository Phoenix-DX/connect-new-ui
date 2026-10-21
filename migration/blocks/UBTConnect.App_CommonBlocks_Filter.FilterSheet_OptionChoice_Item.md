# UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionChoice_Item

- Kind: shared; build screens using it: CountryDetails, Notes, Notifications, Search, Updates_SingleList
- Compiled source: `migration/screens/Notes/analysis/sources/pretty/UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionChoice_Item.mvc.js`
- Child blocks: UBTConnectLibrary.BasePatterns.CustomContainer, UBTConnectLibrary.BasePatterns.CustomText, UBTConnectLibrary.ConnectPatterns.SelectionOption_List (queue: UBTConnectLibrary.ConnectPatterns.SelectionOption_List)

## Inputs

| Input | Type |
|---|---|
| Filter_Common_Control_Choice | Record Filter_Common_Control_ChoiceRec |

## Captured DOM variants (1 distinct, 12 instances)

### Variant 1: Notes/default (×12)

```html
<div class="OSBlockWidget" data-block="App_CommonBlocks_Filter.FilterSheet_OptionChoice_Item" id="b11-b1-l2-81_1-$b8">
  <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b11-b1-l2-81_1-b8-Choice"><!-- nested block: 46 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionChoice_Item.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionChoice_Item.mvc$model", "UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionChoice_Item.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.ConnectPatterns.SelectionOption_List.mvc$view", "UBTConnectLibrary.model$SelectionOption_ItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$SelectionOption_ItemList", "UBTConnect.model$Filter_Common_Control_ChoiceRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$InlineIconRec"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, React, OSView, UBTConnect_App_CommonBlocks_Filter_FilterSheet_OptionChoice_Item_mvc_model, UBTConnect_App_CommonBlocks_Filter_FilterSheet_OptionChoice_Item_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_SelectionOption_List_mvc_view) {
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
        View.displayName = "App_CommonBlocks_Filter.FilterSheet_OptionChoice_Item";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_SelectionOption_List_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_App_CommonBlocks_Filter_FilterSheet_OptionChoice_Item_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_App_CommonBlocks_Filter_FilterSheet_OptionChoice_Item_mvc_controller;
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
                    Options: model.getCachedValue(idService.getId("Choice.Options"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                            rec.backgroundAttr = function() {
                                var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
                                return rec;
                            }();
                            rec.paddingSizeAttr = function() {
                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
                                rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                                return rec;
                            }();
                            rec.marginSizeAttr = function() {
                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.extraSmall;
                                return rec;
                            }();
                            rec.borderOptionsAttr = function() {
                                var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral3;
                                rec.sizeAttr = function() {
                                    var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                    rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                                    return rec;
                                }();
                                rec.radiusAttr = function() {
                                    var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
                                    rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Shape.soft;
                                    return rec;
                                }();
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
                    name: "Choice",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    content: new PlaceholderContent(function() {
                        return [$if(((model.variables.filter_Common_Control_ChoiceIn.titleAttr) !== ("")), false, this, function() {
                            return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                inputs: {
                                    Options: model.getCachedValue(idService.getId("fOkcPx5FU0Kme_jz1YSr7A.Options"), function() {
                                        return function() {
                                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                            rec.marginSizeAttr = function() {
                                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
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
                                    uuid: "1",
                                    alias: "2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    content: new PlaceholderContent(function() {
                                        return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                            inputs: {
                                                In_TextOptions: model.getCachedValue(idService.getId("ulGqGWEojk+C7amSkLuGtQ.In_TextOptions"), function() {
                                                    return function() {
                                                        var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                        rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.base;
                                                        rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
                                                        return rec;
                                                    }();
                                                }),
                                                ExtendedClasses: "text-align-left",
                                                In_Text: model.variables.filter_Common_Control_ChoiceIn.titleAttr,
                                                _in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._filter_Common_Control_ChoiceInDataFetchStatus)
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
                                            _dependencies: []
                                        })];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(model.variables._filter_Common_Control_ChoiceInDataFetchStatus), asPrimitiveValue(model.variables.filter_Common_Control_ChoiceIn.titleAttr)]
                            })];
                        }, function() {
                            return [];
                        }), React.createElement(UBTConnectLibrary_ConnectPatterns_SelectionOption_List_mvc_view, {
                            inputs: {
                                SelectionOption_ItemList: model.variables.optionsVar,
                                isMultiselect: false,
                                LastItem_StyleOptions: model.getCachedValue(idService.getId("7SfooChdF06AdF9WkgBk4g.LastItem_StyleOptions"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                        rec.marginSizeAttr = function() {
                                            var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                            rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.none;
                                            return rec;
                                        }();
                                        return rec;
                                    }();
                                }),
                                Item_StyleOptions: model.getCachedValue(idService.getId("7SfooChdF06AdF9WkgBk4g.Item_StyleOptions"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                        rec.marginSizeAttr = function() {
                                            var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                            rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
                                            return rec;
                                        }();
                                        return rec;
                                    }();
                                })
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                onSelectionChange$Action: function(selectedItemsIn, clickedItemIdIn) {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);
                                            return controller.onChange_Selection$Action(selectedItemsIn, clickedItemIdIn, controller.callContext(eventHandlerContext));
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
                                uuid: "3",
                                alias: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.optionsVar), asPrimitiveValue(model.variables._filter_Common_Control_ChoiceInDataFetchStatus), asPrimitiveValue(model.variables.filter_Common_Control_ChoiceIn.titleAttr)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
