define("Connect2_LegacyShared.Layout.BaseLayout_UpdatedOSUI.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.Private.PullToRefresh.mvc$model", "OutSystemsUI_2_23.controller$LayoutDestroy", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.model$ErrorMessageRec", "OutSystemsUI_2_23.controller$SetLang", "OutSystemsUI_2_23.controller$LayoutReady", "OutSystemsUI_2_23.controller$AddFavicon"], function(OutSystems, Connect2_LegacySharedModel, OutSystemsUI_2_23Controller, OutSystemsUI_2_23Model, OutSystemsUI_2_23_Private_PullToRefresh_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("UsePullToRefresh", "usePullToRefreshIn", "UsePullToRefresh", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_usePullToRefreshInDataFetchStatus", "_usePullToRefreshInDataFetchStatus", "_usePullToRefreshInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("HideHeaderOnScroll", "hideHeaderOnScrollIn", "HideHeaderOnScroll", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_hideHeaderOnScrollInDataFetchStatus", "_hideHeaderOnScrollInDataFetchStatus", "_hideHeaderOnScrollInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("MenuBehavior", "menuBehaviorIn", "MenuBehavior", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return Connect2_LegacySharedModel.staticEntities.sideMenuBehavior.overlay;
                }, false),
                this.attr("_menuBehaviorInDataFetchStatus", "_menuBehaviorInDataFetchStatus", "_menuBehaviorInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("CustomClass", "customClassIn", "CustomClass", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_customClassInDataFetchStatus", "_customClassInDataFetchStatus", "_customClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("IsHeaderTransparent", "isHeaderTransparentIn", "IsHeaderTransparent", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_isHeaderTransparentInDataFetchStatus", "_isHeaderTransparentInDataFetchStatus", "_isHeaderTransparentInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = OutSystemsUI_2_23_Private_PullToRefresh_mvcModel.hasValidationWidgets;
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

            if ("HideHeaderOnScroll" in inputs) {
                this.variables.hideHeaderOnScrollIn = inputs.HideHeaderOnScroll;
                if ("_hideHeaderOnScrollInDataFetchStatus" in inputs) {
                    this.variables._hideHeaderOnScrollInDataFetchStatus = inputs._hideHeaderOnScrollInDataFetchStatus;
                }

            }

            if ("MenuBehavior" in inputs) {
                this.variables.menuBehaviorIn = inputs.MenuBehavior;
                if ("_menuBehaviorInDataFetchStatus" in inputs) {
                    this.variables._menuBehaviorInDataFetchStatus = inputs._menuBehaviorInDataFetchStatus;
                }

            }

            if ("ExtendedClass" in inputs) {
                this.variables.extendedClassIn = inputs.ExtendedClass;
                if ("_extendedClassInDataFetchStatus" in inputs) {
                    this.variables._extendedClassInDataFetchStatus = inputs._extendedClassInDataFetchStatus;
                }

            }

            if ("CustomClass" in inputs) {
                this.variables.customClassIn = inputs.CustomClass;
                if ("_customClassInDataFetchStatus" in inputs) {
                    this.variables._customClassInDataFetchStatus = inputs._customClassInDataFetchStatus;
                }

            }

            if ("IsHeaderTransparent" in inputs) {
                this.variables.isHeaderTransparentIn = inputs.IsHeaderTransparent;
                if ("_isHeaderTransparentInDataFetchStatus" in inputs) {
                    this.variables._isHeaderTransparentInDataFetchStatus = inputs._isHeaderTransparentInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Layout.BaseLayout_UpdatedOSUI");
});
define("Connect2_LegacyShared.Layout.BaseLayout_UpdatedOSUI.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.model", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.Layout.BaseLayout_UpdatedOSUI.mvc$model", "Connect2_LegacyShared.Layout.BaseLayout_UpdatedOSUI.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.Private.PullToRefresh.mvc$view", "OutSystemsUI_2_23.controller$LayoutDestroy", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.model$ErrorMessageRec", "OutSystemsUI_2_23.controller$SetLang", "OutSystemsUI_2_23.controller$LayoutReady", "OutSystemsUI_2_23.controller$AddFavicon"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, OutSystemsUI_2_23Controller, OutSystemsUI_2_23Model, React, OSView, Connect2_LegacyShared_Layout_BaseLayout_UpdatedOSUI_mvc_model, Connect2_LegacyShared_Layout_BaseLayout_UpdatedOSUI_mvc_controller, Connect2_LegacySharedClientVariables, OSWidgets, OutSystemsUI_2_23_Private_PullToRefresh_mvc_view) {
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
        View.displayName = "Layout.BaseLayout_UpdatedOSUI";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/OutSystemsUI_2_23.OutSystemsUI.js"];
        };
        View.getBlocks = function() {
            return [OutSystemsUI_2_23_Private_PullToRefresh_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return Connect2_LegacyShared_Layout_BaseLayout_UpdatedOSUI_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_LegacyShared_Layout_BaseLayout_UpdatedOSUI_mvc_controller;
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
                style: model.getCachedValue(idService.getId("LayoutWrapper.Style"), function() {
                    return ((("layout layout-side layout-native ios-bounce " + ((!(model.variables.hideHeaderOnScrollIn)) ? ("") : ("hide-header-on-scroll "))) + model.variables.menuBehaviorIn) + (((model.variables.extendedClassIn === "")) ? ("") : ((" " + model.variables.extendedClassIn))));
                }, function() {
                    return model.variables.hideHeaderOnScrollIn;
                }, function() {
                    return model.variables.menuBehaviorIn;
                }, function() {
                    return model.variables.extendedClassIn;
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    name: "LayoutWrapper"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hideHeaderOnScrollInDataFetchStatus, model.variables._menuBehaviorInDataFetchStatus, model.variables._extendedClassInDataFetchStatus)
            }, React.createElement(OSWidgets.AdvancedHtml, {
                extendedProperties: {
                    role: "complementary",
                    className: "aside-navigation menu"
                },
                tag: "aside",
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.navigation,
                _idProps: {
                    service: idService,
                    name: "Navigation"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "main screen",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $if(model.variables.hideHeaderOnScrollIn, false, this, function() {
                return [React.createElement(OSWidgets.Container, {
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
                })];
            }, function() {
                return [];
            }), React.createElement(OSWidgets.AdvancedHtml, {
                extendedProperties: {
                    role: "banner",
                    className: model.getCachedValue(idService.getId("Header.class"), function() {
                        return ("header" + ((!(model.variables.isHeaderTransparentIn)) ? ((" " + model.variables.customClassIn)) : (" transparent")));
                    }, function() {
                        return model.variables.isHeaderTransparentIn;
                    }, function() {
                        return model.variables.customClassIn;
                    })
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
                style: "header-top",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "6"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "header-content display-flex",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "7"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "display-flex align-items-center full-width",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "8"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.headerLeft,
                style: "header-left",
                _idProps: {
                    service: idService,
                    name: "HeaderLeft"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.headerSearch,
                gridProperties: {
                    classes: "OSInline"
                },
                style: "header-search",
                _idProps: {
                    service: idService,
                    name: "HeaderSearch"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.AdvancedHtml, {
                extendedProperties: {
                    className: "header-title text-align-center"
                },
                tag: "h1",
                _idProps: {
                    service: idService,
                    uuid: "11"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.title,
                _idProps: {
                    service: idService,
                    name: "Title"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.headerRight,
                style: "header-right",
                _idProps: {
                    service: idService,
                    name: "HeaderRight"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })))), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.headerContent,
                style: "header-content header-top-content ph",
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
                                    return controller.actionHandler_OnPullToRefreshTrigger$Action(controller.callContext(eventHandlerContext));
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
                        uuid: "15",
                        alias: "1"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    _dependencies: []
                })];
            }, function() {
                return [];
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: ("content " + model.variables.customClassIn),
                visible: true,
                _idProps: {
                    service: idService,
                    name: "ContentWrapper"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._customClassInDataFetchStatus)
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
                    uuid: "19"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.bottom,
                style: "footer ph bottom",
                _idProps: {
                    service: idService,
                    name: "Bottom"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.commonUI,
                _idProps: {
                    service: idService,
                    name: "CommonUI"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("Connect2_LegacyShared.Layout.BaseLayout_UpdatedOSUI.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.model", "Connect2_LegacyShared.languageResources", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.Layout.BaseLayout_UpdatedOSUI.mvc$debugger", "OutSystemsUI_2_23.controller$LayoutDestroy", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.model$ErrorMessageRec", "OutSystemsUI_2_23.controller$SetLang", "OutSystemsUI_2_23.controller$LayoutReady", "OutSystemsUI_2_23.controller$AddFavicon"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, OutSystemsUI_2_23Controller, OutSystemsUI_2_23Model, Connect2_LegacySharedLanguageResources, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_Layout_BaseLayout_UpdatedOSUI_mvc_Debugger) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {};
            this.dataFetchDependenciesOriginal = {};
            this.dataFetchDependentsGraph = {};
            this.shouldSendClientVarsToDataSources = false;
        }
        // Server Actions

        // Aggregates and Data Actions

        Controller.prototype.dataFetchActionNames = [];
        // Client Actions
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
                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:OluzDRDenESRYZu6yUwJxg:/NRWebFlows.IMkSBn8ZRU+o_NajnulxWg/NodesShownInESpaceTree.0V1SgjvwZUa1Y4OAqW+GvQ/ClientActions.OluzDRDenESRYZu6yUwJxg:VGX3F0R8R8IwKPcJ8hmWlA", "Connect2_LegacyShared", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:u3jBA62qk02IxQ6JBcIBeA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:wVYDOML9lUOYFflG_60Wog", callContext.id);
                // Execute Action: LayoutDestroy
                OutSystemsUI_2_23Controller.default.layoutDestroy$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:sRtGHdTaI0+JtERCqLD2Bg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:OluzDRDenESRYZu6yUwJxg", callContext.id);
            }

        };
        Controller.prototype._actionHandler_OnPullToRefreshTrigger$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ActionHandler_OnPullToRefreshTrigger");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:picXzm7Ob0+fCeGalNDh5w:/NRWebFlows.IMkSBn8ZRU+o_NajnulxWg/NodesShownInESpaceTree.0V1SgjvwZUa1Y4OAqW+GvQ/ClientActions.picXzm7Ob0+fCeGalNDh5w:eufsK2zpITxHAZnK6Hrj9w", "Connect2_LegacyShared", "ActionHandler_OnPullToRefreshTrigger", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:6LjfHBzSA0G0GBtoG06DkQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:K5SvkXMhkU6_PxgEqt4kQA", callContext.id);
                // Trigger Event: OnPullToRefresh
                return controller.onPullToRefresh$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:rmObUGC2vki2uDE6LUsCDw", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:picXzm7Ob0+fCeGalNDh5w", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:picXzm7Ob0+fCeGalNDh5w", callContext.id);
                throw ex;

            });
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
                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:NGa_6UbwwkWJPUkfSZFKKQ:/NRWebFlows.IMkSBn8ZRU+o_NajnulxWg/NodesShownInESpaceTree.0V1SgjvwZUa1Y4OAqW+GvQ/ClientActions.NGa_6UbwwkWJPUkfSZFKKQ:VFhcmcUejl6rYa0LwtMUeA", "Connect2_LegacyShared", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:kmyGcwyAZ0mCX28_EDWpBg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:i3F1oKF1tE2PQE2pMmTdvg", callContext.id);
                // Execute Action: LayoutReady
                OutSystemsUI_2_23Controller.default.layoutReady$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:H24WnEAnQU66Jw6ICeirlQ", callContext.id);
                // Execute Action: SetLang
                setLangVar.value = OutSystemsUI_2_23Controller.default.setLang$Action("", callContext);

                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:SBZg_mkzoEWw_G26cU_AKg", callContext.id);
                // Execute Action: AddFavicon
                addFaviconVar.value = OutSystemsUI_2_23Controller.default.addFavicon$Action("favicon.png", callContext);

                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:arm5QETlsUynQpNbygQRxg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:NGa_6UbwwkWJPUkfSZFKKQ", callContext.id);
            }

        };

        Controller.prototype.onDestroy$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

        };
        Controller.prototype.actionHandler_OnPullToRefreshTrigger$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._actionHandler_OnPullToRefreshTrigger$Action, callContext);

        };
        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.onPullToRefresh$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:IMkSBn8ZRU+o_NajnulxWg:/NRWebFlows.IMkSBn8ZRU+o_NajnulxWg:g8dWHX6OMuTu8A_wnFyzaw", "Connect2_LegacyShared", "Layout", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:0V1SgjvwZUa1Y4OAqW+GvQ:/NRWebFlows.IMkSBn8ZRU+o_NajnulxWg/NodesShownInESpaceTree.0V1SgjvwZUa1Y4OAqW+GvQ:3AaU3g2JDneDd1vsuDDzpA", "Connect2_LegacyShared", "BaseLayout_UpdatedOSUI", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:0V1SgjvwZUa1Y4OAqW+GvQ", callContext.id);
            OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:IMkSBn8ZRU+o_NajnulxWg", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Layout/BaseLayout_UpdatedOSUI On Ready");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "Layout/BaseLayout_UpdatedOSUI On Destroy");
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
            return Connect2_LegacySharedController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, Connect2_LegacySharedLanguageResources);
});

define("Connect2_LegacyShared.Layout.BaseLayout_UpdatedOSUI.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "H24WnEAnQU66Jw6ICeirlQ": {
            getter: function(varBag, idService) {
                return varBag.setLangVar.value;
            }
        },
        "SBZg_mkzoEWw_G26cU_AKg": {
            getter: function(varBag, idService) {
                return varBag.addFaviconVar.value;
            }
        },
        "brN_WHX7CEKWQYEarNkRAA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.usePullToRefreshIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "YrH_hSpp1kyNDZ4dbt1qqA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.hideHeaderOnScrollIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "0Yt9arq_rUSkij8gKzEFLA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.menuBehaviorIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "OPBLdJ8ybkOufj3GACCsLg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.extendedClassIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "g0JirMwGfUK5QskGAMeanA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.customClassIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "aWQwWUTyvkaorWgefRoT0g": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isHeaderTransparentIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "uD0jhHUP0kW4AxI+zQZ5dQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("LayoutWrapper"));
                })(varBag.model, idService);
            }
        },
        "xVtJiRo1_UGcVO87ESgo8g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Navigation"));
                })(varBag.model, idService);
            }
        },
        "t_HdEyoTOUWB7uXUR6A86w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Header"));
                })(varBag.model, idService);
            }
        },
        "TFAknkncU0KSrwJa04mA7g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderLeft"));
                })(varBag.model, idService);
            }
        },
        "WyDxkd5l4EiPc3WypfOMMg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderSearch"));
                })(varBag.model, idService);
            }
        },
        "hw6YkIbT5UC6WRXMqnSn5w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Title"));
                })(varBag.model, idService);
            }
        },
        "0Tz24xfqW0i6wwd6HA4JmQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderRight"));
                })(varBag.model, idService);
            }
        },
        "C6OVCKayGk+mX8QKobYpaw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderContent"));
                })(varBag.model, idService);
            }
        },
        "EsTeRBheBUSr9DO8591bKg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("PullToRefresh"));
                })(varBag.model, idService);
            }
        },
        "W19GgNFdu0yJU8MGGnk8FQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ContentWrapper"));
                })(varBag.model, idService);
            }
        },
        "hx269vNUqU2EF13ANcW8tw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("MainContentWrapper"));
                })(varBag.model, idService);
            }
        },
        "wY3nYfcbqUGIEiwsa4E3pg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "sChbktca2ECmjxXPafqiEw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Bottom"));
                })(varBag.model, idService);
            }
        },
        "ySlBcQ1njEKYFWERVn3_ZQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});