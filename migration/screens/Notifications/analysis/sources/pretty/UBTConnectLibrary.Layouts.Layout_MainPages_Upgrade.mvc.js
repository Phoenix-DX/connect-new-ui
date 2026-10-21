define("UBTConnectLibrary.Layouts.Layout_MainPages_Upgrade.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.model", "NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "OutSystemsUI_2_23.Private.PullToRefresh.mvc$model", "UBTConnectLibrary.controller$RemoveScrollEvents", "OutSystemsUI_2_23.controller$LayoutDestroy", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$OutSystemsUI_2_23", "UBTConnectLibrary.controller$ClearTimeout", "OutSystemsUI_2_23.model$ErrorMessageRec", "OutSystemsUI_2_23.controller$SetLang", "OutSystemsUI_2_23.controller$AddFavicon", "OutSystemsUI_2_23.controller$LayoutReady", "UBTConnectLibrary.controller$SetMainFixedScroll", "UBTConnectLibrary.controller$SetScrollShadow", "OutSystemsUI_2_23.controller$SkipToContent"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, OutSystemsUI_2_23Controller, OutSystemsUI_2_23Model, NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, OutSystemsUI_2_23_Private_PullToRefresh_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("IsHeaderScrolled", "isHeaderScrolledVar", "IsHeaderScrolled", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("ScrollElement", "scrollElementVar", "ScrollElement", true, false, OS.DataTypes.DataTypes.Object, function() {
                    return null;
                }, false),
                this.attr("ScrollEvent", "scrollEventVar", "ScrollEvent", true, false, OS.DataTypes.DataTypes.Object, function() {
                    return null;
                }, false),
                this.attr("ShadowScrollEvent", "shadowScrollEventVar", "ShadowScrollEvent", true, false, OS.DataTypes.DataTypes.Object, function() {
                    return null;
                }, false),
                this.attr("ShadowTimeout", "shadowTimeoutVar", "ShadowTimeout", true, false, OS.DataTypes.DataTypes.Object, function() {
                    return null;
                }, false),
                this.attr("UsePullToRefresh", "usePullToRefreshIn", "UsePullToRefresh", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_usePullToRefreshInDataFetchStatus", "_usePullToRefreshInDataFetchStatus", "_usePullToRefreshInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("EnableAccessibilityFeatures", "enableAccessibilityFeaturesIn", "EnableAccessibilityFeatures", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_enableAccessibilityFeaturesInDataFetchStatus", "_enableAccessibilityFeaturesInDataFetchStatus", "_enableAccessibilityFeaturesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("isGrayBackground", "isGrayBackgroundIn", "isGrayBackground", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_isGrayBackgroundInDataFetchStatus", "_isGrayBackgroundInDataFetchStatus", "_isGrayBackgroundInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false)
            ].concat(_super.attributesToDeclare.call(this));
        };
        VariablesRecord.init();
        return VariablesRecord;
    })(OS.DataTypes.GenericRecord);
    var WidgetsRecord = (function(_super) {
        __extends(WidgetsRecord, _super);

        function WidgetsRecord() {
            _super.apply(this, arguments);
        }
        WidgetsRecord.getWidgetsType = function() {
            return {};
        };

        return WidgetsRecord;
    })(OS.Model.BaseWidgetRecordMap);
    var Model = (function(_super) {
        __extends(Model, _super);

        function Model() {
            _super.apply(this, arguments);
        }
        Model.getVariablesRecordConstructor = function() {
            return VariablesRecord;
        };
        Model.getWidgetsRecordConstructor = function() {
            return WidgetsRecord;
        };
        Model._hasValidationWidgetsValue = undefined;
        Object.defineProperty(Model, "hasValidationWidgets", {
            enumerable: true,
            configurable: true,
            get: function() {
                if ((Model._hasValidationWidgetsValue === undefined)) {
                    Model._hasValidationWidgetsValue = ((NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || OutSystemsUI_2_23_Private_PullToRefresh_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("UsePullToRefresh" in inputs) {
                this.variables.usePullToRefreshIn = inputs.UsePullToRefresh;
                if ("_usePullToRefreshInDataFetchStatus" in inputs) {
                    this.variables._usePullToRefreshInDataFetchStatus = inputs._usePullToRefreshInDataFetchStatus;
                }

            }

            if ("ExtendedClass" in inputs) {
                this.variables.extendedClassIn = inputs.ExtendedClass;
                if ("_extendedClassInDataFetchStatus" in inputs) {
                    this.variables._extendedClassInDataFetchStatus = inputs._extendedClassInDataFetchStatus;
                }

            }

            if ("EnableAccessibilityFeatures" in inputs) {
                this.variables.enableAccessibilityFeaturesIn = inputs.EnableAccessibilityFeatures;
                if ("_enableAccessibilityFeaturesInDataFetchStatus" in inputs) {
                    this.variables._enableAccessibilityFeaturesInDataFetchStatus = inputs._enableAccessibilityFeaturesInDataFetchStatus;
                }

            }

            if ("isGrayBackground" in inputs) {
                this.variables.isGrayBackgroundIn = inputs.isGrayBackground;
                if ("_isGrayBackgroundInDataFetchStatus" in inputs) {
                    this.variables._isGrayBackgroundInDataFetchStatus = inputs._isGrayBackgroundInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Layouts.Layout_MainPages_Upgrade");
});
define("UBTConnectLibrary.Layouts.Layout_MainPages_Upgrade.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.model", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.Layouts.Layout_MainPages_Upgrade.mvc$model", "UBTConnectLibrary.Layouts.Layout_MainPages_Upgrade.mvc$controller", "UBTConnectLibrary.clientVariables", "NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "OutSystemsUI_2_23.Private.PullToRefresh.mvc$view", "UBTConnectLibrary.controller$RemoveScrollEvents", "OutSystemsUI_2_23.controller$LayoutDestroy", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$OutSystemsUI_2_23", "UBTConnectLibrary.controller$ClearTimeout", "OutSystemsUI_2_23.model$ErrorMessageRec", "OutSystemsUI_2_23.controller$SetLang", "OutSystemsUI_2_23.controller$AddFavicon", "OutSystemsUI_2_23.controller$LayoutReady", "UBTConnectLibrary.controller$SetMainFixedScroll", "UBTConnectLibrary.controller$SetScrollShadow", "OutSystemsUI_2_23.controller$SkipToContent"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, OutSystemsUI_2_23Controller, OutSystemsUI_2_23Model, React, OSView, UBTConnectLibrary_Layouts_Layout_MainPages_Upgrade_mvc_model, UBTConnectLibrary_Layouts_Layout_MainPages_Upgrade_mvc_controller, UBTConnectLibraryClientVariables, NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, OutSystemsUI_2_23_Private_PullToRefresh_mvc_view) {
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
        View.displayName = "Layouts.Layout_MainPages_Upgrade";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/OutSystemsUI_2_23.OutSystemsUI.js", "scripts/UBTConnectLibrary.ScrollAnimations.js"];
        };
        View.getBlocks = function() {
            return [NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, OutSystemsUI_2_23_Private_PullToRefresh_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_Layouts_Layout_MainPages_Upgrade_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_Layouts_Layout_MainPages_Upgrade_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_view, {
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
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: model.getCachedValue(idService.getId("LayoutWrapper_Main.Style"), function() {
                    return ((("layout layout-side layout-native ios-bounce ubt-layout-main layout-sticky-title mainpage-upgrade-container" + (((model.variables.extendedClassIn === "")) ? ("") : ((" " + model.variables.extendedClassIn)))) + ((!(model.variables.enableAccessibilityFeaturesIn)) ? ("") : (" has-accessible-features"))) + ((model.variables.isGrayBackgroundIn) ? (" layout-gray-background") : ("")));
                }, function() {
                    return model.variables.extendedClassIn;
                }, function() {
                    return model.variables.enableAccessibilityFeaturesIn;
                }, function() {
                    return model.variables.isGrayBackgroundIn;
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    name: "LayoutWrapper_Main"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassInDataFetchStatus, model.variables._enableAccessibilityFeaturesInDataFetchStatus, model.variables._isGrayBackgroundInDataFetchStatus)
            }, React.createElement(OSWidgets.Link, {
                enabled: true,
                extendedProperties: {
                    "aria-label": "Skip to Content (Press Enter)",
                    "data-showskipcontent": model.getCachedValue(idService.getId("ZUT+3JsVGkm5IUfbu8WrtA.data-showskipcontent"), function() {
                        return ((model.variables.enableAccessibilityFeaturesIn) ? ("true") : ("false"));
                    }, function() {
                        return model.variables.enableAccessibilityFeaturesIn;
                    })
                },
                onClick: function() {
                    var eventHandlerContext = callContext.clone();
                    return OS.Flow.tryFinally(function() {
                        var varBag = {};
                        controller.pushDebuggerContext(eventHandlerContext);

                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Layouts/Layout_MainPages_Upgrade/Link OnClick");
                        controller.skipToContentOnClick$Action(controller.callContext(eventHandlerContext));
                    }, function() {
                        controller.popDebuggerContext(eventHandlerContext);
                    });

                    ;
                },
                style: "skip-nav",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, "Skip to Content (Press Enter)"), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "main",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    "aria-hidden": "true"
                },
                style: "sticky-observer",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.AdvancedHtml, {
                extendedProperties: {
                    role: "banner",
                    className: "header"
                },
                tag: "header",
                _idProps: {
                    service: idService,
                    name: "Header"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "upgrade-header-top header-top-title",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "6"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "header-content",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "7"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "ubt-layout-detail__left",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "8"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                inputs: {
                    In_SizeId: UBTConnectLibraryModel.staticEntities.uBT_IconSize.base_24,
                    In_IconId: UBTConnectLibraryModel.staticEntities.uBT_Icons.arrowLeftAlt,
                    In_ColorId: UBTConnectLibraryModel.staticEntities.uBT_Color.neutral0
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    click$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Icon Click");
                            controller.onClick_BackNavigation$Action(controller.callContext(eventHandlerContext));
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
                    uuid: "9",
                    alias: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.placeholder_Header_Title,
                gridProperties: {
                    classes: "OSInline"
                },
                style: "header-title-upgrade text-align-center",
                _idProps: {
                    service: idService,
                    name: "Placeholder_Header_Title"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.placeholder_Header_Right,
                style: "header-right-upgrade",
                _idProps: {
                    service: idService,
                    name: "Placeholder_Header_Right"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "upgrade-header-top-search header-top-search",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "HeaderSearch"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "header-content display-flex flex-direction-column justify-content-flex-start",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "13"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "ubt-layout-main__search",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "14"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.placeholder_Header_Input,
                _idProps: {
                    service: idService,
                    name: "Placeholder_Header_Input"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })))), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.headerContent,
                style: "header-top-content ph",
                _idProps: {
                    service: idService,
                    name: "HeaderContent"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), $if(model.variables.usePullToRefreshIn, false, this, function() {
                return [React.createElement(OutSystemsUI_2_23_Private_PullToRefresh_mvc_view, {
                    inputs: {},
                    events: {
                        _handleError: function(ex) {
                            controller.handleError(ex);
                        },
                        onContentPull$Action: function() {
                            return Promise.resolve().then(function() {
                                var eventHandlerContext = callContext.clone();
                                return OS.Flow.tryFinally(function() {
                                    var varBag = {};
                                    controller.pushDebuggerContext(eventHandlerContext);

                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Private/PullToRefresh OnContentPull");
                                    return controller.onHandle_OnPullToRefreshTrigger$Action(controller.callContext(eventHandlerContext));
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
                        uuid: "17",
                        alias: "3"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    _dependencies: []
                })];
            }, function() {
                return [];
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "content",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "ContentWrapper"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    role: "main"
                },
                style: "main-content ThemeGrid_Container",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "MainContentWrapper"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.content,
                style: "content-middle",
                _idProps: {
                    service: idService,
                    name: "Content"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))), React.createElement(OSWidgets.AdvancedHtml, {
                extendedProperties: {
                    role: "contentinfo",
                    className: "content-bottom"
                },
                tag: "footer",
                _idProps: {
                    service: idService,
                    uuid: "21"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.bottom,
                style: "footer ph",
                _idProps: {
                    service: idService,
                    name: "Bottom"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "offline-data-sync",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "23"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.placeholder_CommonUI_Inside_Layout,
                _idProps: {
                    service: idService,
                    name: "Placeholder_CommonUI_Inside_Layout"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnectLibrary.Layouts.Layout_MainPages_Upgrade.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.model", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.Layouts.Layout_MainPages_Upgrade.mvc$debugger", "UBTConnectLibrary.Layouts.Layout_MainPages_Upgrade.mvc$controller.SetScrollEvents.GetCallbackFunctionJS", "UBTConnectLibrary.controller$RemoveScrollEvents", "OutSystemsUI_2_23.controller$LayoutDestroy", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$OutSystemsUI_2_23", "UBTConnectLibrary.controller$ClearTimeout", "OutSystemsUI_2_23.model$ErrorMessageRec", "OutSystemsUI_2_23.controller$SetLang", "OutSystemsUI_2_23.controller$AddFavicon", "OutSystemsUI_2_23.controller$LayoutReady", "UBTConnectLibrary.controller$SetMainFixedScroll", "UBTConnectLibrary.controller$SetScrollShadow", "OutSystemsUI_2_23.controller$SkipToContent"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, OutSystemsUI_2_23Controller, OutSystemsUI_2_23Model, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_Layouts_Layout_MainPages_Upgrade_mvc_Debugger, UBTConnectLibrary_Layouts_Layout_MainPages_Upgrade_mvc_controller_SetScrollEvents_GetCallbackFunctionJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {
                onHandle_OnHeaderScrolledTrigger$Action: function(in_IsHeaderScrolledIn) {
                    in_IsHeaderScrolledIn = (in_IsHeaderScrolledIn === undefined) ? false : in_IsHeaderScrolledIn;
                    return controller.executeActionInsideJSNode(controller._onHandle_OnHeaderScrolledTrigger$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_IsHeaderScrolledIn, OS.DataTypes.DataTypes.Boolean)), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "OnHandle_OnHeaderScrolledTrigger");
                }
            };
            this.dataFetchDependenciesOriginal = {};
            this.dataFetchDependentsGraph = {};
            this.shouldSendClientVarsToDataSources = false;
        }
        // Server Actions

        // Aggregates and Data Actions

        Controller.prototype.dataFetchActionNames = [];
        // Client Actions
        Controller.prototype._onHandle_OnPullToRefreshTrigger$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_OnPullToRefreshTrigger");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:9HTgNVrdc0GDigpHxo1pjQ:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.XwjFFm3TgUa9Sg+aw4wzFg/ClientActions.9HTgNVrdc0GDigpHxo1pjQ:GSf_XLRt71NOMCUZCFFE4g", "UBTConnectLibrary", "OnHandle_OnPullToRefreshTrigger", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ywD3O+WxEEuoSn82tBQZpA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:KIigMpe1Z0GrqMQoXisBfA", callContext.id);
                // Trigger Event: OnPullToRefresh
                return controller.onPullToRefresh$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:PTgTEjZE3EizFvZBhgABjg", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:9HTgNVrdc0GDigpHxo1pjQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:9HTgNVrdc0GDigpHxo1pjQ", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._onHandle_OnHeaderScrolledTrigger$Action = function(in_IsHeaderScrolledIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_OnHeaderScrolledTrigger");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnectLibrary.Layouts.Layout_MainPages_Upgrade.OnHandle_OnHeaderScrolledTrigger$vars"))());
            vars.value.in_IsHeaderScrolledInLocal = in_IsHeaderScrolledIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:piH2WWtb3E2qojpdY83SCA:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.XwjFFm3TgUa9Sg+aw4wzFg/ClientActions.piH2WWtb3E2qojpdY83SCA:4XSg2rhn5+LtG8eM1yvGFw", "UBTConnectLibrary", "OnHandle_OnHeaderScrolledTrigger", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:4MojYJvi8kOVFV6Ao3yAhg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:1Ffad1otVEaFmYepfG1TIw", callContext.id);
                // IsHeaderScrolled = In_IsHeaderScrolled
                model.variables.isHeaderScrolledVar = vars.value.in_IsHeaderScrolledInLocal;
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:KqWl4VKkw0iDBr8KmdJ_4g", callContext.id);
                // Trigger Event: OnHeaderScrolled
                return controller.onHeaderScrolled$Action(model.variables.isHeaderScrolledVar, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:+sB3GTIKcUevzPDpekn4VA", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:piH2WWtb3E2qojpdY83SCA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:piH2WWtb3E2qojpdY83SCA", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnectLibrary.Layouts.Layout_MainPages_Upgrade.OnHandle_OnHeaderScrolledTrigger$vars", [{
            name: "In_IsHeaderScrolled",
            attrName: "in_IsHeaderScrolledInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._onClick_BackNavigation$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_BackNavigation");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:RQRRXBJSJE+0tZEFdzp4xQ:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.XwjFFm3TgUa9Sg+aw4wzFg/ClientActions.RQRRXBJSJE+0tZEFdzp4xQ:4sFPuawmcCoAM9M8FTBqCA", "UBTConnectLibrary", "OnClick_BackNavigation", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:xcwlPhMG5kaZPIquHj+zww", callContext.id);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:TLjei+yhP0ClfefDI7U5sw", callContext.id);
                // Destination: (PreviousScreen)
                return OS.Navigation.navigateBack(null, callContext, true);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:RQRRXBJSJE+0tZEFdzp4xQ", callContext.id);
            }

        };
        Controller.prototype._onDestroy$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnDestroy");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:gk0Pe8K7Jke8wFBvqpbBtQ:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.XwjFFm3TgUa9Sg+aw4wzFg/ClientActions.gk0Pe8K7Jke8wFBvqpbBtQ:Vr_YYyudvB2E+kCALHAZiQ", "UBTConnectLibrary", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:LBEodQ72hUGnMo7qd127rA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:x4EVUIWKB0yVU2Trf12pnA", callContext.id);
                // Execute Action: RemoveScrollEvents
                UBTConnectLibraryController.default.removeScrollEvents$Action(model.variables.scrollElementVar, model.variables.scrollEventVar, model.variables.shadowScrollEventVar, callContext);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:lKSXv+0EzkWum1klXgmfsg", callContext.id);
                // Execute Action: ClearTimeout
                UBTConnectLibraryController.default.clearTimeout$Action(model.variables.shadowTimeoutVar, callContext);
                // Null Objects
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:NupWFHHFOUG5x7qW4Y_Elg", callContext.id);
                // ScrollElement = NullObject
                model.variables.scrollElementVar = OS.BuiltinFunctions.nullObject();
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:NupWFHHFOUG5x7qW4Y_Elg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // ScrollEvent = NullObject
                model.variables.scrollEventVar = OS.BuiltinFunctions.nullObject();
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:NupWFHHFOUG5x7qW4Y_Elg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                // ShadowScrollEvent = NullObject
                model.variables.shadowScrollEventVar = OS.BuiltinFunctions.nullObject();
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:NupWFHHFOUG5x7qW4Y_Elg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
                // ShadowTimeout = NullObject
                model.variables.shadowTimeoutVar = OS.BuiltinFunctions.nullObject();
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:PtZ1u_CE1EWgVPB98At0XA", callContext.id);
                // Execute Action: LayoutDestroy
                OutSystemsUI_2_23Controller.default.layoutDestroy$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:YcoMO9esGkOTIg2C4fq7jw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:gk0Pe8K7Jke8wFBvqpbBtQ", callContext.id);
            }

        };
        Controller.prototype._onReady$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnReady");
            callContext = controller.callContext(callContext);
            var setLangVar = new OS.DataTypes.VariableHolder();
            var addFaviconVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.setLangVar = setLangVar;
            varBag.addFaviconVar = addFaviconVar;
            try {
                OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:1nY4gIUfEUCFKrX1hPsYLw:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.XwjFFm3TgUa9Sg+aw4wzFg/ClientActions.1nY4gIUfEUCFKrX1hPsYLw:mWlPp+cZVV_sIqtsKSq3CQ", "UBTConnectLibrary", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:_nFqzUXe9027YgvUaPlQNg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:BWn_6DXLHE2kClfD6_Jhbg", callContext.id);
                // Execute Action: LayoutReady
                OutSystemsUI_2_23Controller.default.layoutReady$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:d0_5WK0RkESmYG7ZHfwEUQ", callContext.id);
                // Execute Action: SetScrollEvents
                controller._setScrollEvents$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:yYodBDQzZk+d7t606ldDVA", callContext.id);
                // Execute Action: SetLang
                setLangVar.value = OutSystemsUI_2_23Controller.default.setLang$Action("", callContext);

                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:UpEWknMq4U2SZVIfA4Vecw", callContext.id);
                // Execute Action: AddFavicon
                addFaviconVar.value = OutSystemsUI_2_23Controller.default.addFavicon$Action("favicon.png", callContext);

                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:rXVkyCasEk6wOU174SoddA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:1nY4gIUfEUCFKrX1hPsYLw", callContext.id);
            }

        };
        Controller.prototype._setScrollEvents$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("SetScrollEvents");
            callContext = controller.callContext(callContext);
            var setMainFixedScrollVar = new OS.DataTypes.VariableHolder();
            var setScrollShadowVar = new OS.DataTypes.VariableHolder();
            var getCallbackFunctionJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.setMainFixedScrollVar = setMainFixedScrollVar;
            varBag.setScrollShadowVar = setScrollShadowVar;
            varBag.getCallbackFunctionJSResult = getCallbackFunctionJSResult;
            try {
                OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:5q3vvT_Te0WpULv1Bc9a8g:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.XwjFFm3TgUa9Sg+aw4wzFg/ClientActions.5q3vvT_Te0WpULv1Bc9a8g:sWqc4LHx3kz2hV0KwzrQJA", "UBTConnectLibrary", "SetScrollEvents", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:HDWp85yXOkCVuX_Y4hPabA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:m+RXirjJckOSet4RWSQzig", callContext.id);
                getCallbackFunctionJSResult.value = controller.safeExecuteJSNode(UBTConnectLibrary_Layouts_Layout_MainPages_Upgrade_mvc_controller_SetScrollEvents_GetCallbackFunctionJS, "GetCallbackFunction", "SetScrollEvents", {
                    Out_CallbackFunction: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("UBTConnectLibrary.Layouts.Layout_MainPages_Upgrade.SetScrollEvents$getCallbackFunctionJSResult"))();
                    jsNodeResult.out_CallbackFunctionOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Out_CallbackFunction, OS.DataTypes.DataTypes.Object);
                    return jsNodeResult;
                }, {
                    OnHandle_OnHeaderScrolledTrigger: controller.clientActionProxies.onHandle_OnHeaderScrolledTrigger$Action
                }, {});
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:WLTJLKKmpEyplW1IUawvxg", callContext.id);
                // Execute Action: SetMainFixedScroll
                setMainFixedScrollVar.value = UBTConnectLibraryController.default.setMainFixedScroll$Action(getCallbackFunctionJSResult.value.out_CallbackFunctionOut, callContext);

                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Nf6lfklQT0KT5PTrU17gUw", callContext.id);
                // Execute Action: SetScrollShadow
                setScrollShadowVar.value = UBTConnectLibraryController.default.setScrollShadow$Action(callContext);

                // Set Destroy Objects
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:JmMvyEHclEOv3rWNBJxyQQ", callContext.id);
                // ScrollElement = SetMainFixedScroll.Out_Element
                model.variables.scrollElementVar = setMainFixedScrollVar.value.out_ElementOut;
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:JmMvyEHclEOv3rWNBJxyQQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // ScrollEvent = SetMainFixedScroll.Out_ScrollEvent
                model.variables.scrollEventVar = setMainFixedScrollVar.value.out_ScrollEventOut;
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:JmMvyEHclEOv3rWNBJxyQQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                // ShadowScrollEvent = SetScrollShadow.Out_ScrollEvent
                model.variables.shadowScrollEventVar = setScrollShadowVar.value.out_ScrollEventOut;
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:JmMvyEHclEOv3rWNBJxyQQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
                // ShadowTimeout = SetScrollShadow.Out_Timeout
                model.variables.shadowTimeoutVar = setScrollShadowVar.value.out_TimeoutOut;
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:TasHmUapSEKNjbIRsY7RqA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:5q3vvT_Te0WpULv1Bc9a8g", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnectLibrary.Layouts.Layout_MainPages_Upgrade.SetScrollEvents$getCallbackFunctionJSResult", [{
            name: "Out_CallbackFunction",
            attrName: "out_CallbackFunctionOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
            }
        }]);
        Controller.prototype._skipToContentOnClick$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("SkipToContentOnClick");
            callContext = controller.callContext(callContext);
            var skipToContentVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.skipToContentVar = skipToContentVar;
            try {
                OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:8k7Rwro9L0yauHsZhxtdwA:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.XwjFFm3TgUa9Sg+aw4wzFg/ClientActions.8k7Rwro9L0yauHsZhxtdwA:hJ0boQ9UAdY8PFTT8+2Nmw", "UBTConnectLibrary", "SkipToContentOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:8plsnUjEhUe8FaTYU2KDDA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:WHriO_VybEmXNhOmloosLw", callContext.id);
                // Execute Action: SkipToContent
                skipToContentVar.value = OutSystemsUI_2_23Controller.default.skipToContent$Action(idService.getId("MainContentWrapper"), callContext);

                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:JGSswRUDpU+lHCiSLUjn8w", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:8k7Rwro9L0yauHsZhxtdwA", callContext.id);
            }

        };

        Controller.prototype.onHandle_OnPullToRefreshTrigger$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_OnPullToRefreshTrigger$Action, callContext);

        };
        Controller.prototype.onHandle_OnHeaderScrolledTrigger$Action = function(in_IsHeaderScrolledIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_OnHeaderScrolledTrigger$Action, callContext, in_IsHeaderScrolledIn);

        };
        Controller.prototype.onClick_BackNavigation$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_BackNavigation$Action, callContext);

        };
        Controller.prototype.onDestroy$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

        };
        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.setScrollEvents$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._setScrollEvents$Action, callContext);

        };
        Controller.prototype.skipToContentOnClick$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._skipToContentOnClick$Action, callContext);

        };
        Controller.prototype.onHeaderScrolled$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.onPullToRefresh$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:szBrd5WGsE6bcDfQ68RumQ:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ:LSOi3iQzjd8avvO2ZKIsMw", "UBTConnectLibrary", "Layouts", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:XwjFFm3TgUa9Sg+aw4wzFg:/NRWebFlows.szBrd5WGsE6bcDfQ68RumQ/NodesShownInESpaceTree.XwjFFm3TgUa9Sg+aw4wzFg:HX8js2ig2XfHreIujVVBxA", "UBTConnectLibrary", "Layout_MainPages_Upgrade", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:XwjFFm3TgUa9Sg+aw4wzFg", callContext.id);
            OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:szBrd5WGsE6bcDfQ68RumQ", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Layouts/Layout_MainPages_Upgrade On Ready");
                return controller.onReady$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Layouts/Layout_MainPages_Upgrade On Destroy");
                return controller.onDestroy$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onParametersChangedEventHandler = null;
        Controller.prototype.handleError = function(ex) {
            return controller.handleError(ex);
        };
        Controller.checkPermissions = function() {};
        Controller.prototype.getDefaultTimeout = function() {
            return UBTConnectLibraryController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnectLibraryLanguageResources);
});
define("UBTConnectLibrary.Layouts.Layout_MainPages_Upgrade.mvc$controller.SetScrollEvents.GetCallbackFunctionJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Out_CallbackFunction = $actions.OnHandle_OnHeaderScrolledTrigger;
    };
});

define("UBTConnectLibrary.Layouts.Layout_MainPages_Upgrade.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "Kz4pl+laxUCcI73M8JEtRg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_IsHeaderScrolledInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "yYodBDQzZk+d7t606ldDVA": {
            getter: function(varBag, idService) {
                return varBag.setLangVar.value;
            }
        },
        "UpEWknMq4U2SZVIfA4Vecw": {
            getter: function(varBag, idService) {
                return varBag.addFaviconVar.value;
            }
        },
        "WLTJLKKmpEyplW1IUawvxg": {
            getter: function(varBag, idService) {
                return varBag.setMainFixedScrollVar.value;
            }
        },
        "Nf6lfklQT0KT5PTrU17gUw": {
            getter: function(varBag, idService) {
                return varBag.setScrollShadowVar.value;
            }
        },
        "m+RXirjJckOSet4RWSQzig": {
            getter: function(varBag, idService) {
                return varBag.getCallbackFunctionJSResult.value;
            }
        },
        "WHriO_VybEmXNhOmloosLw": {
            getter: function(varBag, idService) {
                return varBag.skipToContentVar.value;
            }
        },
        "9GtNOWPGvkyWf+8beB5H2w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isHeaderScrolledVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "zYNjkPlO1EK0UPA6agJ3Jg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.scrollElementVar;
            },
            dataType: OS.DataTypes.DataTypes.Object
        },
        "py1vEqA8K02T8A29_KxbOA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.scrollEventVar;
            },
            dataType: OS.DataTypes.DataTypes.Object
        },
        "8a1L71P0wEOA1ojLgNAbnw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.shadowScrollEventVar;
            },
            dataType: OS.DataTypes.DataTypes.Object
        },
        "chKL76dH20+I0hp4YSiyGw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.shadowTimeoutVar;
            },
            dataType: OS.DataTypes.DataTypes.Object
        },
        "hA2Bcb5OwEiJVio7760XRQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.usePullToRefreshIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "NGEyRgqDYkelHuD7iCteVA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.extendedClassIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "27o9lakfWEunZo+6hYA2Fw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.enableAccessibilityFeaturesIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "9+efB1Tji0iKKXJ7dSlmLw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isGrayBackgroundIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "uiquXf6hN0+3M0o0IldVow": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("LayoutWrapper_Main"));
                })(varBag.model, idService);
            }
        },
        "yvTty2yxBU+6T69YLcsLPA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Header"));
                })(varBag.model, idService);
            }
        },
        "hJxIha2oLUiH1wOEwYWBRw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Header_Title"));
                })(varBag.model, idService);
            }
        },
        "ifxPGMlfkUqN1MWYZWlUTA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Header_Right"));
                })(varBag.model, idService);
            }
        },
        "mrpHhmVqVk+2RCAbiTwBIQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderSearch"));
                })(varBag.model, idService);
            }
        },
        "0x5aWBe1FEmqS1ZrjK+gMw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Header_Input"));
                })(varBag.model, idService);
            }
        },
        "BxIMLeQ_rkipISOwNCUraQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderContent"));
                })(varBag.model, idService);
            }
        },
        "7mQVG3b1VkWkRyj+L+zSBg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("PullToRefresh"));
                })(varBag.model, idService);
            }
        },
        "MW4wwSUkrUmhVIs8YcpHLg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ContentWrapper"));
                })(varBag.model, idService);
            }
        },
        "57M6ZYySdkqEcsv5mwAdzQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("MainContentWrapper"));
                })(varBag.model, idService);
            }
        },
        "RfyYer5_2EGkrit4GMU8Ng": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "DBqoVV1vPEa5ZaHfH4S0Pg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Bottom"));
                })(varBag.model, idService);
            }
        },
        "9iTkFti580O1R1M0Yo9JmQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});