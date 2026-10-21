# UBTConnect.App_Menu.Menu_List

- Kind: shared; build screens using it: ContactUsMenu, Menu, PINBiometricsMenu, TermsAndPoliciesMenu
- Compiled source: `migration/screens/ContactUsMenu/analysis/sources/pretty/UBTConnect.App_Menu.Menu_List.mvc.js`
- Child blocks: UBTConnect.App_Common_Blocks.SectionSeparator, UBTConnectLibrary.BasePatterns.Columns_Three, UBTConnectLibrary.BasePatterns.CustomContainer, UBTConnectLibrary.BasePatterns.CustomText, UBTConnectLibrary.ConnectPatterns.Icon, UBTConnectLibrary.ConnectPatterns.IconText, UBTConnectLibrary.ConnectPatterns.SkeletonSection (queue: -)

## Inputs

| Input | Type |
|---|---|
| In_MenuSection | Record UI_MenuSectionRec |

## Captured DOM variants (2 distinct, 18 instances)

### Variant 1: ContactUsMenu/default (×12)

```html
<div class="OSBlockWidget" data-block="App_Menu.Menu_List" id="l1-37_0-$b3">
  <div class="OSBlockWidget" data-block="App_Common_Blocks.SectionSeparator" id="l1-37_0-b3-$b1"><!-- nested block: 2 nodes --></div>
  <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="l1-37_0-b3-$b2"><!-- nested block: 102 nodes --></div>
</div>
```

### Variant 2: PINBiometricsMenu/default (×6)

```html
<div class="OSBlockWidget" data-block="App_Menu.Menu_List" id="$b2">
  <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b2-$b2"><!-- nested block: 26 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect.App_Menu.Menu_List.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Menu.Menu_List.mvc$model", "UBTConnect.App_Menu.Menu_List.mvc$controller", "UBTConnect.clientVariables", "UBTConnect.App_Common_Blocks.SectionSeparator.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnectLibrary.BasePatterns.Columns_Three.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnect.model$UI_MenuSectionRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$InlineIconRec", "UBTConnect.model$UI_ListMenuOptionRec"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, React, OSView, UBTConnect_App_Menu_Menu_List_mvc_model, UBTConnect_App_Menu_Menu_List_mvc_controller, UBTConnectClientVariables, UBTConnect_App_Common_Blocks_SectionSeparator_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view) {
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
        View.displayName = "App_Menu.Menu_List";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_App_Common_Blocks_SectionSeparator_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_App_Menu_Menu_List_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_App_Menu_Menu_List_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), $if(model.variables.in_MenuSectionIn.hasSeparatorAttr, false, this, function() {
                return [React.createElement(UBTConnect_App_Common_Blocks_SectionSeparator_mvc_view, {
                    inputs: {},
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
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    _dependencies: []
                })];
            }, function() {
                return [];
            }), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                inputs: {
                    Options: model.getCachedValue(idService.getId("piav_wIPHE2o2MhOC2vzqg.Options"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                            rec.backgroundAttr = function() {
                                var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
                                return rec;
                            }();
                            rec.paddingSizeAttr = function() {
                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
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
                        return [$if(((model.variables.in_MenuSectionIn.sectionTitleAttr) !== ("")), false, this, function() {
                            return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                inputs: {
                                    Options: model.getCachedValue(idService.getId("b_Gw4YyjA0mb7n8dgRMQuQ.Options"), function() {
                                        return function() {
                                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                            rec.paddingSizeAttr = function() {
                                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                                                return rec;
                                            }();
                                            rec.textOptionsAttr = function() {
                                                var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral8;
                                                rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.extraSmall;
                                                rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
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
                                    uuid: "2",
                                    alias: "3"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    content: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Expression, {
                                            value: model.variables.in_MenuSectionIn.sectionTitleAttr,
                                            _idProps: {
                                                service: idService,
                                                uuid: "3"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MenuSectionInDataFetchStatus)
                                        })];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(model.variables._in_MenuSectionInDataFetchStatus), asPrimitiveValue(model.variables.in_MenuSectionIn.sectionTitleAttr)]
                            })];
                        }, function() {
                            return [];
                        }), React.createElement(OSWidgets.List, {
                            animateItems: true,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mode: /*Default*/ 0,
                            source: model.variables.in_MenuSectionIn.menuOptionsAttr,
                            style: "list list-group",
                            tag: "div",
                            _idProps: {
                                service: idService,
                                uuid: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MenuSectionInDataFetchStatus),
                            placeholders: {
                                content: new IteratorPlaceholderContent(function(idService, callContext) {
                                    return [React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                                        inputs: {
                                            In_IsLoading: model.variables.in_MenuSectionIn.menuOptionsAttr.getCurrent(callContext.iterationContext).isLoadingAttr,
                                            _in_IsLoadingInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MenuSectionInDataFetchStatus)
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
                                            uuid: "5",
                                            alias: "4"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            placeholder_LoadingSection: new PlaceholderContent(function() {
                                                return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                                    inputs: {
                                                        Options: model.getCachedValue(idService.getId("MttpggXiVkWeiBXwegskWA.Options"), function() {
                                                            return function() {
                                                                var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                                rec.paddingSizeAttr = function() {
                                                                    var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                    rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                                                                    return rec;
                                                                }();
                                                                rec.borderOptionsAttr = function() {
                                                                    var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                                                    rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral3;
                                                                    rec.sizeAttr = function() {
                                                                        var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                        rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
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
                                                        },
                                                        clicked$Action: function() {
                                                            var eventHandlerContext = callContext.clone();
                                                            return OS.Flow.tryFinally(function() {
                                                                var varBag = {};
                                                                controller.pushDebuggerContext(eventHandlerContext);
                                                                controller.onClick_MenuOption$Action(model.variables.in_MenuSectionIn.menuOptionsAttr.getCurrent(callContext.iterationContext), controller.callContext(eventHandlerContext));
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
                                                        uuid: "6",
                                                        alias: "5"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
```
(… 284 more lines in `migration/screens/ContactUsMenu/analysis/sources/pretty/UBTConnect.App_Menu.Menu_List.mvc.js`)
