# UBTConnectLibrary.ConnectPatterns.Input

- Kind: shared; build screens using it: BookmarksByGroup, BrowseCountries, BrowseDirectory, CountryDetails, FeedItemDetail, HomeFeed, HouseholdCarousel, HouseholdDetails, Locality_Details, Notes, Notifications, OneSchoolGlobalDetails, Profile, Search, SupperMeeting_Carousel, SupperMeeting_Details, Updates_SingleList
- Compiled source: `migration/screens/BrowseCountries/analysis/sources/pretty/UBTConnectLibrary.ConnectPatterns.Input.mvc.js`
- Child blocks: OutSystemsUI_2_23.Interaction.InputWithIcon, UBTConnectLibrary.ConnectPatterns.Icon (queue: -)

## Inputs

| Input | Type |
|---|---|
| In_ExtendedClasses | Text |

## Captured DOM variants (1 distinct, 23 instances)

### Variant 1: BrowseCountries/default (×23)

```html
<div class="OSBlockWidget" data-block="ConnectPatterns.Input" id="b2-Block_SearchInput">
  <div class="ubt-search-input" data-container="">
    <div class="OSBlockWidget" data-block="Interaction.InputWithIcon" id="b2-b3-$b1"><!-- nested block: 11 nodes --></div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnectLibrary.ConnectPatterns.Input.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTJavaScriptUtils.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.Input.mvc$model", "UBTConnectLibrary.ConnectPatterns.Input.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.Interaction.InputWithIcon.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.model$SearchInputRec", "UBTJavaScriptUtils.controller$JSUtils_DebounceTimer", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$UBTJavaScriptUtils", "UBTConnectLibrary.controller$FocusOnInput", "UBTJavaScriptUtils.controller$JSUtilis_Element_Operations_Focus", "UBTJavaScriptUtils.controller$JSUtils_Element_Operations_SetAttribute", "UBTJavaScriptUtils.controller$JSUtils_Element_Operations_GetElementById", "UBTConnectLibrary.controller$CheckForEnterKeyPress", "UBTConnectLibrary.controller$BlurInput"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTJavaScriptUtilsController, React, OSView, UBTConnectLibrary_ConnectPatterns_Input_mvc_model, UBTConnectLibrary_ConnectPatterns_Input_mvc_controller, UBTConnectLibraryClientVariables, OSWidgets, OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view) {
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
        View.displayName = "ConnectPatterns.Input";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_Input_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_Input_mvc_controller;
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
                style: "ubt-search-input",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_view, {
                inputs: {
                    AlignIconRight: false
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
                    icon: new PlaceholderContent(function() {
                        return [$if((model.variables.searchStringVar === ""), false, this, function() {
                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                inputs: {
                                    In_ColorId: UBTConnectLibraryModel.staticEntities.uBT_Color.inherit,
                                    In_IconId: UBTConnectLibraryModel.staticEntities.uBT_Icons.search,
                                    In_SizeId: UBTConnectLibraryModel.staticEntities.uBT_IconSize.medium_20
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
                        }, function() {
                            return [];
                        })];
                    }),
                    input: new PlaceholderContent(function() {
                        return [React.createElement(OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_view, {
                            inputs: {
                                AlignIconRight: true
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
                                alias: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                icon: new PlaceholderContent(function() {
                                    return [$if(((model.variables.searchStringVar) !== ("")), false, this, function() {
                                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                            inputs: {
                                                In_IconId: UBTConnectLibraryModel.staticEntities.uBT_Icons.cancelFill,
                                                In_ColorId: UBTConnectLibraryModel.staticEntities.uBT_Color.inherit,
                                                In_SizeId: UBTConnectLibraryModel.staticEntities.uBT_IconSize.medium_20
                                            },
                                            events: {
                                                _handleError: function(ex) {
                                                    controller.handleError(ex);
                                                },
                                                click$Action: function() {
                                                    return Promise.resolve().then(function() {
                                                        var eventHandlerContext = callContext.clone();
                                                        return OS.Flow.tryFinally(function() {
                                                            var varBag = {};
                                                            controller.pushDebuggerContext(eventHandlerContext);
                                                            return controller.onClick_ClearString$Action(true, controller.callContext(eventHandlerContext));
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
                                                uuid: "4",
                                                alias: "4"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        })];
                                    }, function() {
                                        return [];
                                    })];
                                }),
                                input: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Input, {
                                        _validationProps: {
                                            validationService: validationService
                                        },
                                        enabled: model.variables.in_OptionsIn.isEnabledAttr,
                                        extendedEvents: {
                                            onKeyUp: function() {
                                                return Promise.resolve().then(function() {
                                                    var eventHandlerContext = callContext.clone();
                                                    return OS.Flow.tryFinally(function() {
                                                        var varBag = {};
                                                        controller.pushDebuggerContext(eventHandlerContext);
                                                        return controller.onKeyup$Action(controller.callContext(eventHandlerContext));
                                                    }, function() {
                                                        controller.popDebuggerContext(eventHandlerContext);
                                                    });
                                                });;
                                            },
                                            onFocus: function() {
                                                var eventHandlerContext = callContext.clone();
                                                return OS.Flow.tryFinally(function() {
                                                    var varBag = {};
                                                    controller.pushDebuggerContext(eventHandlerContext);
                                                    controller.event_OnFocus$Action(controller.callContext(eventHandlerContext));
                                                }, function() {
                                                    controller.popDebuggerContext(eventHandlerContext);
                                                });
                                                ;
                                            }
                                        },
                                        extendedProperties: {
                                            maxLength: (model.variables.in_OptionsIn.maxLengthAttr).toString(),
                                            autoComplete: model.getCachedValue(idService.getId("Input_Search.autocomplete"), function() {
                                                return ((model.variables.in_OptionsIn.enableAutocompleteHTMLAttr) ? ("on") : ("off"));
                                            }, function() {
                                                return model.variables.in_OptionsIn.enableAutocompleteHTMLAttr;
                                            })
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        inputType: /*Search*/ 8,
                                        mandatory: model.variables.in_OptionsIn.isMandatoryAttr,
                                        maxLength: 50,
                                        onChange: function() {
                                            return Promise.resolve().then(function() {
                                                var eventHandlerContext = callContext.clone();
                                                return OS.Flow.tryFinally(function() {
                                                    var varBag = {};
                                                    controller.pushDebuggerContext(eventHandlerContext);
                                                    return controller.onChange$Action(controller.callContext(eventHandlerContext));
                                                }, function() {
                                                    controller.popDebuggerContext(eventHandlerContext);
                                                });
                                            });;
                                        },
                                        prompt: model.variables.in_OptionsIn.searchPromptAttr,
                                        style: model.getCachedValue(idService.getId("Input_Search.Style"), function() {
                                            return (("form-control " + model.variables.in_ExtendedClassesIn) + ((((model.variables.in_OptionsIn.borderRadiusAttr) !== (OS.BuiltinFunctions.nullTextIdentifier()))) ? ((" border-radius-" + model.variables.in_OptionsIn.borderRadiusAttr)) : ("")));
                                        }, function() {
                                            return model.variables.in_ExtendedClassesIn;
                                        }, function() {
                                            return model.variables.in_OptionsIn.borderRadiusAttr;
                                        }),
                                        variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.searchStringVar, function(value) {
                                            model.variables.searchStringVar = value;
                                        }),
                                        _idProps: {
                                            service: idService,
                                            name: "Input_Search"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_OptionsInDataFetchStatus),
                                        mandatory_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_OptionsInDataFetchStatus),
                                        prompt_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_OptionsInDataFetchStatus),
                                        style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ExtendedClassesInDataFetchStatus, model.variables._in_OptionsInDataFetchStatus)
                                    })];
                                })
```
(… 12 more lines in `migration/screens/BrowseCountries/analysis/sources/pretty/UBTConnectLibrary.ConnectPatterns.Input.mvc.js`)
