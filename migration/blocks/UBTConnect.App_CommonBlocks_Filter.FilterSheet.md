# UBTConnect.App_CommonBlocks_Filter.FilterSheet

- Kind: shared; build screens using it: CountryDetails, Notes, Search, Updates_SingleList
- Compiled source: `migration/screens/CountryDetails/analysis/sources/pretty/UBTConnect.App_CommonBlocks_Filter.FilterSheet.mvc.js`
- Child blocks: NavigationHandler.NavigationHandler.BackNavigationHandler, UBTConnect.App_Cache.CacheControl_UserInfo_Wrapper, UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionChoice_Item, UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionList_Item, UBTConnectLibrary.BasePatterns.Columns_Two, UBTConnectLibrary.BasePatterns.CustomContainer, UBTConnectLibrary.BasePatterns.CustomText, UBTConnectLibrary.ConnectPatterns.BottomSheet, UBTConnectLibrary.ConnectPatterns.Button, UBTConnectLibrary.ConnectPatterns.Icon, UBTConnectLibrary.ConnectPatterns.SelectionOption_List, UBTConnectLibrary.ConnectPatterns.SkeletonSection, UBTConnect_Utils.CacheControl.CacheControl_AllCountries, UBTConnect_Utils.CacheControl.CacheControl_AllLocalities (queue: UBTConnect.App_Cache.CacheControl_UserInfo_Wrapper, UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionChoice_Item, UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionList_Item, UBTConnectLibrary.ConnectPatterns.BottomSheet, UBTConnectLibrary.ConnectPatterns.SelectionOption_List, UBTConnect_Utils.CacheControl.CacheControl_AllCountries, UBTConnect_Utils.CacheControl.CacheControl_AllLocalities)

## Inputs

| Input | Type |
|---|---|
| In_Options | Record Filter_Common_OptionsRec |
| ExtendedClasses | Text |

## Captured DOM variants (3 distinct, 12 instances)

### Variant 1: CountryDetails/default (×6)

```html
<div class="OSBlockWidget" data-block="App_CommonBlocks_Filter.FilterSheet" id="$b28">
  <div class="OSBlockWidget" data-block="ConnectPatterns.BottomSheet" id="b28-$b1"><!-- nested block: 645 nodes --></div>
  <div class="OSBlockWidget" data-block="CacheControl.CacheControl_AllCountries" id="b28-$b18"><!-- nested block: 1 nodes --></div>
  <div class="OSBlockWidget" data-block="App_Cache.CacheControl_UserInfo_Wrapper" id="b28-$b20"><!-- nested block: 2 nodes --></div>
  <div class="OSBlockWidget" data-block="NavigationHandler.BackNavigationHandler" id="b28-$b21"><!-- nested block: 0 nodes --></div>
</div>
```

### Variant 2: Notes/default (×3)

```html
<div class="OSBlockWidget" data-block="App_CommonBlocks_Filter.FilterSheet" id="b11-$b1">
  <div class="OSBlockWidget" data-block="ConnectPatterns.BottomSheet" id="b11-b1-$b1"><!-- nested block: 109 nodes --></div>
  <div class="OSBlockWidget" data-block="NavigationHandler.BackNavigationHandler" id="b11-b1-$b21"><!-- nested block: 0 nodes --></div>
</div>
```

### Variant 3: Updates_SingleList/default (×3)

```html
<div class="OSBlockWidget" data-block="App_CommonBlocks_Filter.FilterSheet" id="b20-$b1">
  <div class="OSBlockWidget" data-block="ConnectPatterns.BottomSheet" id="b20-b1-$b1"><!-- nested block: 198 nodes --></div>
  <div class="OSBlockWidget" data-block="CacheControl.CacheControl_AllCountries" id="b20-b1-$b18"><!-- nested block: 1 nodes --></div>
  <div class="OSBlockWidget" data-block="CacheControl.CacheControl_AllLocalities" id="b20-b1-$b19"><!-- nested block: 1 nodes --></div>
  <div class="OSBlockWidget" data-block="App_Cache.CacheControl_UserInfo_Wrapper" id="b20-b1-$b20"><!-- nested block: 2 nodes --></div>
  <div class="OSBlockWidget" data-block="NavigationHandler.BackNavigationHandler" id="b20-b1-$b21"><!-- nested block: 0 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect.App_CommonBlocks_Filter.FilterSheet.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "APIDomain_Directory_IS.model", "UBTConnectLibrary.controller", "UBTConnect_Utils.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.App_CommonBlocks_Filter.FilterSheet.mvc$model", "UBTConnect.App_CommonBlocks_Filter.FilterSheet.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionChoice_Item.mvc$view", "UBTConnectLibrary.ConnectPatterns.SelectionOption_List.mvc$view", "UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionList_Item.mvc$view", "UBTConnectLibrary.ConnectPatterns.Button.mvc$view", "UBTConnect_Utils.CacheControl.CacheControl_AllCountries.mvc$view", "UBTConnect_Utils.CacheControl.CacheControl_AllLocalities.mvc$view", "UBTConnect.App_Cache.CacheControl_UserInfo_Wrapper.mvc$view", "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$view", "UBTConnect.model$Filter_Common_Control_ListRec", "UBTConnect.model$CacheControl_AllCountriesBooleanRecord", "UBTConnect.model$CacheControl_AllLocalitiesBooleanRecord", "UBTConnect.model$BooleanDirectory_UserCurrentRecord", "UBTConnect.model$Filter_Common_Control_ListListFilter_Common_Control_ListListFilter_Common_Control_ChoiceListRecord", "UBTConnect.model$Filter_CommonRec", "UBTConnect.model$Filter_Common_OptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$InlineIconRec", "UBTConnect.model$Filter_Common_Control_ChoiceRec", "UBTConnectLibrary.model$SelectionOption_ItemRec", "UBTConnect.model$SelectionOption_ItemList", "UBTConnectLibrary.model$ButtonOptionsRec", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnectLibrary.controller$Input_ClearString", "UBTConnect_Utils.model$CacheControl_AllCountriesRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.model$UI_CountryDetailsRec", "UBTConnect.model$UI_CountryDetails2List", "UBTConnect.controller$App_CommonFilter_DefineOptionNames", "UBTConnect.model$TextTextLongIntegerRecordList", "UBTConnect.controller$App_CommonFilter_CheckCountry", "UBTConnect.model$Filter_Common_Control_ListList", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetClose", "NavigationHandler.controller$PreventNavigation", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect.model$Filter_Common_Control_ChoiceList", "UBTConnect_Utils.model$UI_LocalityDetailsRec", "UBTConnect.model$UI_LocalityDetailsList", "UBTConnect_Utils.model$CacheControl_AllLocalitiesRec"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, APIDomain_Directory_ISModel, UBTConnectLibraryController, UBTConnect_UtilsModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, NavigationHandlerController, React, OSView, UBTConnect_App_CommonBlocks_Filter_FilterSheet_mvc_model, UBTConnect_App_CommonBlocks_Filter_FilterSheet_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnect_App_CommonBlocks_Filter_FilterSheet_OptionChoice_Item_mvc_view, UBTConnectLibrary_ConnectPatterns_SelectionOption_List_mvc_view, UBTConnect_App_CommonBlocks_Filter_FilterSheet_OptionList_Item_mvc_view, UBTConnectLibrary_ConnectPatterns_Button_mvc_view, UBTConnect_Utils_CacheControl_CacheControl_AllCountries_mvc_view, UBTConnect_Utils_CacheControl_CacheControl_AllLocalities_mvc_view, UBTConnect_App_Cache_CacheControl_UserInfo_Wrapper_mvc_view, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view) {
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
        View.displayName = "App_CommonBlocks_Filter.FilterSheet";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnect_App_CommonBlocks_Filter_FilterSheet_OptionChoice_Item_mvc_view, UBTConnectLibrary_ConnectPatterns_SelectionOption_List_mvc_view, UBTConnect_App_CommonBlocks_Filter_FilterSheet_OptionList_Item_mvc_view, UBTConnectLibrary_ConnectPatterns_Button_mvc_view, UBTConnect_Utils_CacheControl_CacheControl_AllCountries_mvc_view, UBTConnect_Utils_CacheControl_CacheControl_AllLocalities_mvc_view, UBTConnect_App_Cache_CacheControl_UserInfo_Wrapper_mvc_view, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_App_CommonBlocks_Filter_FilterSheet_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_App_CommonBlocks_Filter_FilterSheet_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_view, {
                inputs: {
                    Content_BackgroundColorId: UBTConnectModel.staticEntities.uBT_Color.neutral2,
                    Title: model.getCachedValue(idService.getId("aczah8942EeuyHayRZGrqw.Title"), function() {
                        return (((model.variables.subState_SelectedVar === model.variables.subState_MainVar)) ? ("Sort & Filter") : ((model.variables.optionList_SelectedVar.sheetTitleAttr + " Filter")));
                    }, function() {
                        return model.variables.subState_SelectedVar;
                    }, function() {
                        return model.variables.subState_MainVar;
                    }, function() {
                        return model.variables.optionList_SelectedVar.sheetTitleAttr;
                    }),
                    Content_Padding: model.getCachedValue(idService.getId("aczah8942EeuyHayRZGrqw.Content_Padding"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                            rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                            return rec;
                        }();
                    }),
                    FooterHeight: "72px",
                    ExtendedClasses: model.variables.extendedClassesIn,
                    _extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassesInDataFetchStatus)
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onClose$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);
                            controller.bottomSheetOnClose$Action(controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });
                        ;
                    },
                    onToggle$Action: function(isOpenIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);
                            controller.bottomSheetOnToggle$Action(isOpenIn, controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });
                        ;
                    },
                    initialized$Action: function(idIn) {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);
                                return controller.bottomSheetInitialized$Action(idIn, controller.callContext(eventHandlerContext));
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
                    content: new PlaceholderContent(function() {
                        return [$if((model.variables.subState_SelectedVar === model.variables.subState_MainVar), false, this, function() {
                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                                inputs: {
                                    In_IsLoading: ((!((model.variables.localCacheControl_AllLocalitiesVar.isFetchedAttr || model.variables.localCacheControl_UserInfoVar.isFetchedAttr)) && model.variables.in_OptionsIn.hasLocalitiesAttr.enableAttr) && (!((model.variables.localCacheControl_AllCountriesVar.isFetchedAttr || !(model.variables.localCacheControl_UserInfoVar.isFetchedAttr))) && model.variables.in_OptionsIn.hasCountriesAttr.enableAttr)),
                                    _in_IsLoadingInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_OptionsInDataFetchStatus)
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
                                    name: "Loading",
                                    alias: "2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    placeholder_LoadingSection: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.List, {
                                            animateItems: true,
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            mode: /*Default*/ 0,
                                            source: model.variables.optionControlVar.optionList_ControlAttr,
                                            style: "list list-group",
                                            tag: "div",
                                            _idProps: {
                                                service: idService,
                                                name: "OptionsList"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            placeholders: {
                                                content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                    return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                                        inputs: {
                                                            Options: model.getCachedValue(idService.getId("OptionList_Item.Options"), function() {
                                                                return function() {
                                                                    var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                                    rec.backgroundAttr = function() {
                                                                        var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                                                        rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
                                                                        return rec;
                                                                    }();
                                                                    rec.paddingSizeAttr = function() {
                                                                        var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                                        rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
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
                                                            },
                                                            clicked$Action: function() {
                                                                var eventHandlerContext = callContext.clone();
                                                                return OS.Flow.tryFinally(function() {
                                                                    var varBag = {};
                                                                    controller.pushDebuggerContext(eventHandlerContext);
                                                                    controller.onClick_SelectionOption$Action(model.variables.optionControlVar.optionList_ControlAttr.getCurrent(callContext.iterationContext).titleAttr, controller.callContext(eventHandlerContext));
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
                                                            name: "OptionList_Item",
                                                            alias: "3"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        placeholders: {
                                                            content: new PlaceholderContent(function() {
                                                                return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
                                                                    inputs: {
                                                                        ColumnOptions: model.getCachedValue(idService.getId("j9erbEWEwECsUyL5wmz5mw.ColumnOptions"), function() {
                                                                            return function() {
                                                                                var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
                                                                                rec.columnBehaviourAttr = UBTConnectModel.staticEntities.uBT_ColumnBehaviour.reduceLast;
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
```
(… 721 more lines in `migration/screens/CountryDetails/analysis/sources/pretty/UBTConnect.App_CommonBlocks_Filter.FilterSheet.mvc.js`)
