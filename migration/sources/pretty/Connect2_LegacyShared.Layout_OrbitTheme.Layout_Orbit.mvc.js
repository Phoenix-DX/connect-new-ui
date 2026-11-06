define("Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "OutSystemsUI_2_23.controller", "NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$model", "Connect2_LegacyShared.Layout.BaseLayout_UpdatedOSUI.mvc$model", "Connect2_LegacyShared.controller$IOSPreventSwipe", "Connect2_LegacyShared.controller$IOSMetaTags", "OutSystemsUI_2_23.controller$DEPRECATED_LayoutReadyMobile", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$OutSystemsUI_2_23", "Connect2_LegacyShared.controller$SetThemeClassToBody"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, OutSystemsUI_2_23Controller, NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvcModel, Connect2_LegacyShared_Layout_BaseLayout_UpdatedOSUI_mvcModel) {
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
                this.attr("ExtendedClasses", "extendedClassesIn", "ExtendedClasses", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_extendedClassesInDataFetchStatus", "_extendedClassesInDataFetchStatus", "_extendedClassesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("CustomClass", "customClassIn", "CustomClass", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_customClassInDataFetchStatus", "_customClassInDataFetchStatus", "_customClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = (NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvcModel.hasValidationWidgets || Connect2_LegacyShared_Layout_BaseLayout_UpdatedOSUI_mvcModel.hasValidationWidgets);
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

            if ("ExtendedClasses" in inputs) {
                this.variables.extendedClassesIn = inputs.ExtendedClasses;
                if ("_extendedClassesInDataFetchStatus" in inputs) {
                    this.variables._extendedClassesInDataFetchStatus = inputs._extendedClassesInDataFetchStatus;
                }

            }

            if ("CustomClass" in inputs) {
                this.variables.customClassIn = inputs.CustomClass;
                if ("_customClassInDataFetchStatus" in inputs) {
                    this.variables._customClassInDataFetchStatus = inputs._customClassInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Layout_OrbitTheme.Layout_Orbit");
});
define("Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$model", "Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$controller", "Connect2_LegacyShared.clientVariables", "NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Layout.BaseLayout_UpdatedOSUI.mvc$view", "Connect2_LegacyShared.controller$IOSPreventSwipe", "Connect2_LegacyShared.controller$IOSMetaTags", "OutSystemsUI_2_23.controller$DEPRECATED_LayoutReadyMobile", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$OutSystemsUI_2_23", "Connect2_LegacyShared.controller$SetThemeClassToBody"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, OutSystemsUI_2_23Controller, React, OSView, Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_model, Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_controller, Connect2_LegacySharedClientVariables, NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_view, OSWidgets, Connect2_LegacyShared_Layout_BaseLayout_UpdatedOSUI_mvc_view) {
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
        View.displayName = "Layout_OrbitTheme.Layout_Orbit";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [NavigationHandler_LayoutRuntime_NavigationHandler_LayoutRuntime_Top_mvc_view, Connect2_LegacyShared_Layout_BaseLayout_UpdatedOSUI_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_controller;
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
                style: "orbit-theme backwards-compatibility",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(Connect2_LegacyShared_Layout_BaseLayout_UpdatedOSUI_mvc_view, {
                inputs: {
                    CustomClass: model.variables.customClassIn,
                    _customClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._customClassInDataFetchStatus),
                    ExtendedClass: ("orbit-theme " + model.variables.extendedClassesIn),
                    _extendedClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassesInDataFetchStatus),
                    UsePullToRefresh: model.variables.usePullToRefreshIn,
                    _usePullToRefreshInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._usePullToRefreshInDataFetchStatus)
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onPullToRefresh$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Layout/BaseLayout_UpdatedOSUI OnPullToRefresh");
                            controller.onPullToRefresh$Action(controller.callContext(eventHandlerContext));
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
                    alias: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    navigation: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.menu,
                            _idProps: {
                                service: idService,
                                name: "Menu"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    headerLeft: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.headerLeft,
                            _idProps: {
                                service: idService,
                                name: "HeaderLeft"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    headerSearch: PlaceholderContent.Empty,
                    title: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.title,
                            _idProps: {
                                service: idService,
                                name: "Title"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    headerRight: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.headerRight,
                            _idProps: {
                                service: idService,
                                name: "HeaderRight"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    headerContent: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.headerContent,
                            _idProps: {
                                service: idService,
                                name: "HeaderContent"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    content: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.content,
                            _idProps: {
                                service: idService,
                                name: "Content"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    bottom: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.bottomBar,
                            _idProps: {
                                service: idService,
                                name: "BottomBar"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    commonUI: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.commonUI_Elements,
                            _idProps: {
                                service: idService,
                                name: "CommonUI_Elements"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    })
                }
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "OutSystemsUI_2_23.controller", "Connect2_LegacyShared.languageResources", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$debugger", "Connect2_LegacyShared.controller$IOSPreventSwipe", "Connect2_LegacyShared.controller$IOSMetaTags", "OutSystemsUI_2_23.controller$DEPRECATED_LayoutReadyMobile", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$OutSystemsUI_2_23", "Connect2_LegacyShared.controller$SetThemeClassToBody"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, OutSystemsUI_2_23Controller, Connect2_LegacySharedLanguageResources, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_Debugger) {
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
        Controller.prototype._onReady$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnReady");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:1b4EgDVr7UOey84IbIvGFw:/NRWebFlows.11OCuQaR7UCZO6BJLhowZw/NodesShownInESpaceTree.Iqx+R_RBDEKtLnNw4AjPZA/ClientActions.1b4EgDVr7UOey84IbIvGFw:UHYMv7OOkFZ5mvOBthZuwg", "Connect2_LegacyShared", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:9KU73VK2VUK6jw2SOZocsg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:q40dTXidYkuboBol9Z2jQg", callContext.id);
                // Execute Action: IOSMetaTags
                Connect2_LegacySharedController.default.iOSMetaTags$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:7BAAOra8jkOY97ZppF7PnA", callContext.id);
                // Execute Action: IOSPreventSwipe
                Connect2_LegacySharedController.default.iOSPreventSwipe$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Rp80eqdsJ0+X7teOuaOUdQ", callContext.id);
                // Execute Action: DEPRECATED_LayoutReadyMobile
                OutSystemsUI_2_23Controller.default.dEPRECATED_LayoutReadyMobile$Action(false, callContext);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Ht5nyzqeoEi92kQMQnkN3g", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:1b4EgDVr7UOey84IbIvGFw", callContext.id);
            }

        };
        Controller.prototype._onInitialize$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnInitialize");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:N77Asl6BmUSS8WY22IuUCQ:/NRWebFlows.11OCuQaR7UCZO6BJLhowZw/NodesShownInESpaceTree.Iqx+R_RBDEKtLnNw4AjPZA/ClientActions.N77Asl6BmUSS8WY22IuUCQ:qLpbgXCGTEej_d6ByUB3EQ", "Connect2_LegacyShared", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:OqMR7H2IcUWauZAjEKli3w", callContext.id);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:LNstX_LFtEWsWjg0slsoXw", callContext.id);
                // Execute Action: SetThemeClassToBody
                Connect2_LegacySharedController.default.setThemeClassToBody$Action(Connect2_LegacySharedModel.staticEntities.themeClass.orbit, callContext);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:W4j2DogaY0aLHiwtX0Kxmg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:N77Asl6BmUSS8WY22IuUCQ", callContext.id);
            }

        };

        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.onInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

        };
        Controller.prototype.onPullToRefresh$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:11OCuQaR7UCZO6BJLhowZw:/NRWebFlows.11OCuQaR7UCZO6BJLhowZw:AhnsMNfEtM6rI_FMJ8GYtg", "Connect2_LegacyShared", "Layout_OrbitTheme", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:Iqx+R_RBDEKtLnNw4AjPZA:/NRWebFlows.11OCuQaR7UCZO6BJLhowZw/NodesShownInESpaceTree.Iqx+R_RBDEKtLnNw4AjPZA:at1FXUPYsZQEIlMFcy4fWw", "Connect2_LegacyShared", "Layout_Orbit", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:Iqx+R_RBDEKtLnNw4AjPZA", callContext.id);
            OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:11OCuQaR7UCZO6BJLhowZw", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Layout_OrbitTheme/Layout_Orbit On Initialize");
                return controller.onInitialize$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onReadyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Layout_OrbitTheme/Layout_Orbit On Ready");
                return controller.onReady$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
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

define("Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "C+VzsRgNvUy1e1HPu9gYPw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.usePullToRefreshIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "V3Ss0msDpEaz3lNlXCk7yg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.extendedClassesIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "5wlrqhc52USPQJK0WA+nIQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.customClassIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "bY4AznH2KEKtzxu+dDtf1g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Navigation"));
                })(varBag.model, idService);
            }
        },
        "yMJpA_lgs0S7iKMLA8hx7w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu"));
                })(varBag.model, idService);
            }
        },
        "Qq2m6VlqA0u1n489lKEDqg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderLeft"));
                })(varBag.model, idService);
            }
        },
        "WTPeR9BKxEyBIJfOA8Mc3g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderLeft"));
                })(varBag.model, idService);
            }
        },
        "WnHCKb1AXE2Rtc8FIRea7w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderSearch"));
                })(varBag.model, idService);
            }
        },
        "dmcaAOiw90+Nq0fbtf5YVA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Title"));
                })(varBag.model, idService);
            }
        },
        "mDhpAyqPakGyBURpLrTZaA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Title"));
                })(varBag.model, idService);
            }
        },
        "ZzSnpWgtiECP+Z4Ozk1PWg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderRight"));
                })(varBag.model, idService);
            }
        },
        "CsvOsVUClEyDVB5MlCo1xQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderRight"));
                })(varBag.model, idService);
            }
        },
        "zC_IT8VrKUu8w3o3LESOAQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderContent"));
                })(varBag.model, idService);
            }
        },
        "M57UnDg4ZEGC2m4Llvz4KA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderContent"));
                })(varBag.model, idService);
            }
        },
        "rytObg_DTUKdpOJig6tEpA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "Ft_JfN_Op0muTGVv1iqRZA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "Acv+Yytd40aqCaDyP1X0wg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Bottom"));
                })(varBag.model, idService);
            }
        },
        "fIawlZdMNEO2oEdd49dsXg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BottomBar"));
                })(varBag.model, idService);
            }
        },
        "jPVk3HVnIk6f8Crtafr3EA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI"));
                })(varBag.model, idService);
            }
        },
        "V18VXxSfv0uhxTc7Qt4fbw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});