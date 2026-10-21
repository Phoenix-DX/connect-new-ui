define("Connect2_LegacyShared.NewConnect.InBlock_ActionMenu.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function(OutSystems, Connect2_LegacySharedModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("ActiveDOMElem", "activeDOMElemVar", "ActiveDOMElem", true, false, OS.DataTypes.DataTypes.Object, function() {
                    return null;
                }, false),
                this.attr("IsOpen", "isOpenIn", "IsOpen", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_isOpenInDataFetchStatus", "_isOpenInDataFetchStatus", "_isOpenInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
        Object.defineProperty(Model, "hasValidationWidgets", {
            enumerable: true,
            configurable: true,
            get: function() {
                return false;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("IsOpen" in inputs) {
                this.variables.isOpenIn = inputs.IsOpen;
                if ("_isOpenInDataFetchStatus" in inputs) {
                    this.variables._isOpenInDataFetchStatus = inputs._isOpenInDataFetchStatus;
                }

            }

            if ("ExtendedClass" in inputs) {
                this.variables.extendedClassIn = inputs.ExtendedClass;
                if ("_extendedClassInDataFetchStatus" in inputs) {
                    this.variables._extendedClassInDataFetchStatus = inputs._extendedClassInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "NewConnect.InBlock_ActionMenu");
});
define("Connect2_LegacyShared.NewConnect.InBlock_ActionMenu.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.NewConnect.InBlock_ActionMenu.mvc$model", "Connect2_LegacyShared.NewConnect.InBlock_ActionMenu.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystems/ReactWidgets/Main"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, React, OSView, Connect2_LegacyShared_NewConnect_InBlock_ActionMenu_mvc_model, Connect2_LegacyShared_NewConnect_InBlock_ActionMenu_mvc_controller, Connect2_LegacySharedClientVariables, OSWidgets) {
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
        View.displayName = "NewConnect.InBlock_ActionMenu";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return Connect2_LegacyShared_NewConnect_InBlock_ActionMenu_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_LegacyShared_NewConnect_InBlock_ActionMenu_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(false, false, this, function() {
                return [];
            }, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedEvents: {
                        onClick: function() {
                            return Promise.resolve().then(function() {
                                var eventHandlerContext = callContext.clone();
                                return OS.Flow.tryFinally(function() {
                                    var varBag = {};
                                    controller.pushDebuggerContext(eventHandlerContext);

                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "NewConnect/InBlock_ActionMenu/ActionMenuContainer onclick");
                                    return controller.onCancelClick$Action(controller.callContext(eventHandlerContext));
                                }, function() {
                                    controller.popDebuggerContext(eventHandlerContext);
                                });
                            });;
                        }
                    },
                    extendedProperties: {
                        "aria-hidden": model.getCachedValue(idService.getId("ActionMenuContainer.aria-hidden"), function() {
                            return ((model.variables.isOpenIn) ? ("false") : ("true"));
                        }, function() {
                            return model.variables.isOpenIn;
                        }),
                        "aria-expanded": model.getCachedValue(idService.getId("ActionMenuContainer.aria-expanded"), function() {
                            return ((model.variables.isOpenIn) ? ("true") : ("false"));
                        }, function() {
                            return model.variables.isOpenIn;
                        }),
                        "aria-live": "polite",
                        "aria-atomic": "true"
                    },
                    style: ("action-menu-container " + model.variables.extendedClassIn),
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "ActionMenuContainer"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassInDataFetchStatus)
                }, React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    style: "action-menu-background",
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "1"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    style: ("action-menu" + " OSAutoMarginTop"),
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "2"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedEvents: {
                        onClick: function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "NewConnect/InBlock_ActionMenu/ActionSheetClose onclick");
                                controller.toggleActionSheet$Action(controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });

                            ;
                        }
                    },
                    style: "action-menu-top",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "ActionSheetClose"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    style: "close-bar",
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "4"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })), React.createElement(OSWidgets.Placeholder, {
                    align: /*Default*/ 0,
                    content: _this.props.placeholders.menuEntries,
                    style: "action-menu-entries",
                    _idProps: {
                        service: idService,
                        name: "MenuEntries"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })))];
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("Connect2_LegacyShared.NewConnect.InBlock_ActionMenu.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.languageResources", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.NewConnect.InBlock_ActionMenu.mvc$debugger", "Connect2_LegacyShared.NewConnect.InBlock_ActionMenu.mvc$controller.OnCancelClick.FocusActiveDOMElemJS", "Connect2_LegacyShared.NewConnect.InBlock_ActionMenu.mvc$controller.ToggleActionSheet.ToggleActionSheetJS"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedLanguageResources, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_NewConnect_InBlock_ActionMenu_mvc_Debugger, Connect2_LegacyShared_NewConnect_InBlock_ActionMenu_mvc_controller_OnCancelClick_FocusActiveDOMElemJS, Connect2_LegacyShared_NewConnect_InBlock_ActionMenu_mvc_controller_ToggleActionSheet_ToggleActionSheetJS) {
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
        Controller.prototype._onCancelClick$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnCancelClick");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:pTtRRbmxR0qeLksYyb2sxA:/NRWebFlows.ftzXERRgTkOrQwLkytO6Iw/NodesShownInESpaceTree.pdCxEyBLSke5zDwPmzBT7A/ClientActions.pTtRRbmxR0qeLksYyb2sxA:P4e+dOQ7J5rIfMfoBdicug", "Connect2_LegacyShared", "OnCancelClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:4PQHSv8NC0+THeqtCYkfzA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:IWxtHWY9l0CIQsI7rXc0Ug", callContext.id);
                controller.safeExecuteJSNode(Connect2_LegacyShared_NewConnect_InBlock_ActionMenu_mvc_controller_OnCancelClick_FocusActiveDOMElemJS, "FocusActiveDOMElem", "OnCancelClick", {
                    ActiveDOMElem: OS.DataConversion.JSNodeParamConverter.to(model.variables.activeDOMElemVar, OS.DataTypes.DataTypes.Object)
                }, function($parameters) {}, {}, {});
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:kcGaU1I_gEKUjWSL7id2Sg", callContext.id);
                // Trigger Event: OnClose
                return controller.onClose$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:rc+5QvOjYEeCxb18_qoWGw", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:pTtRRbmxR0qeLksYyb2sxA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:pTtRRbmxR0qeLksYyb2sxA", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._toggleActionSheet$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ToggleActionSheet");
            callContext = controller.callContext(callContext);
            var toggleActionSheetJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.toggleActionSheetJSResult = toggleActionSheetJSResult;
            try {
                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:HurxRfXXMkagc8EgFQnpQw:/NRWebFlows.ftzXERRgTkOrQwLkytO6Iw/NodesShownInESpaceTree.pdCxEyBLSke5zDwPmzBT7A/ClientActions.HurxRfXXMkagc8EgFQnpQw:zLF7jCuD00edR51PP_dG2A", "Connect2_LegacyShared", "ToggleActionSheet", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:GZf5aFCk3k+lf0dQFpdsAQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:_kIMnmkAd06f6swphZ7CTA", callContext.id);
                toggleActionSheetJSResult.value = controller.safeExecuteJSNode(Connect2_LegacyShared_NewConnect_InBlock_ActionMenu_mvc_controller_ToggleActionSheet_ToggleActionSheetJS, "ToggleActionSheet", "ToggleActionSheet", {
                    IsOpen: OS.DataConversion.JSNodeParamConverter.to(model.variables.isOpenIn, OS.DataTypes.DataTypes.Boolean),
                    WidgetId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("ActionMenuContainer"), OS.DataTypes.DataTypes.Text),
                    ActiveDOMElem: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("Connect2_LegacyShared.NewConnect.InBlock_ActionMenu.ToggleActionSheet$toggleActionSheetJSResult"))();
                    jsNodeResult.activeDOMElemOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ActiveDOMElem, OS.DataTypes.DataTypes.Object);
                    return jsNodeResult;
                }, {}, {});
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:BsZuVU2IR0yvNv+VJTChiQ", callContext.id);
                // ActiveDOMElem = ToggleActionSheet.ActiveDOMElem
                model.variables.activeDOMElemVar = toggleActionSheetJSResult.value.activeDOMElemOut;
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:83sTG06EkU6fgzo59u0nbQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:HurxRfXXMkagc8EgFQnpQw", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_LegacyShared.NewConnect.InBlock_ActionMenu.ToggleActionSheet$toggleActionSheetJSResult", [{
            name: "ActiveDOMElem",
            attrName: "activeDOMElemOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
            }
        }]);
        Controller.prototype._onParametersChanged$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnParametersChanged");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:L+_wrW0nRku1kqR5ruIiOw:/NRWebFlows.ftzXERRgTkOrQwLkytO6Iw/NodesShownInESpaceTree.pdCxEyBLSke5zDwPmzBT7A/ClientActions.L+_wrW0nRku1kqR5ruIiOw:u6TPz4muIcV53_uHs3Mgqw", "Connect2_LegacyShared", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:gNh+BKWC6UCuAJ6bwNEzSw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:5hhSho9hV0C8C5pmAuyoZA", callContext.id);
                // Execute Action: ToggleActionSheet
                controller._toggleActionSheet$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:DGt0z1Recke70GJG1ApbHA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:L+_wrW0nRku1kqR5ruIiOw", callContext.id);
            }

        };

        Controller.prototype.onCancelClick$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onCancelClick$Action, callContext);

        };
        Controller.prototype.toggleActionSheet$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._toggleActionSheet$Action, callContext);

        };
        Controller.prototype.onParametersChanged$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

        };
        Controller.prototype.onClose$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:ftzXERRgTkOrQwLkytO6Iw:/NRWebFlows.ftzXERRgTkOrQwLkytO6Iw:JaedA_oaqDbeyrL3rjkmHg", "Connect2_LegacyShared", "NewConnect", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:pdCxEyBLSke5zDwPmzBT7A:/NRWebFlows.ftzXERRgTkOrQwLkytO6Iw/NodesShownInESpaceTree.pdCxEyBLSke5zDwPmzBT7A:IUQEmXbr5tyAJ_0BETYbbQ", "Connect2_LegacyShared", "InBlock_ActionMenu", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:pdCxEyBLSke5zDwPmzBT7A", callContext.id);
            OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:ftzXERRgTkOrQwLkytO6Iw", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = null;
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "NewConnect/InBlock_ActionMenu On Parameters Changed");
                return controller.onParametersChanged$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
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
define("Connect2_LegacyShared.NewConnect.InBlock_ActionMenu.mvc$controller.OnCancelClick.FocusActiveDOMElemJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        if ($parameters.ActiveDOMElem) {
            $parameters.ActiveDOMElem.focus();
        }


    };
});
define("Connect2_LegacyShared.NewConnect.InBlock_ActionMenu.mvc$controller.ToggleActionSheet.ToggleActionSheetJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        var actionSheetAnimatableClass = 'action-menu-container--animatable';
        var actionSheet = document.getElementById($parameters.WidgetId);
        actionSheet.classList.add(actionSheetAnimatableClass);

        function OnTransitionEnd() {
            actionSheet.classList.remove(actionSheetAnimatableClass);


            actionSheet.removeEventListener("transitionend", OnTransitionEnd, false);
        }

        if ($parameters.IsOpen) {
            $parameters.ActiveDOMElem = document.activeElement;
            actionSheet.classList.add('action-menu-container--visible');
        } else {
            actionSheet.classList.remove('action-menu-container--visible');
        }

        actionSheet.addEventListener("transitionend", OnTransitionEnd, false);
    };
});

define("Connect2_LegacyShared.NewConnect.InBlock_ActionMenu.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "IWxtHWY9l0CIQsI7rXc0Ug": {
            getter: function(varBag, idService) {
                return varBag.focusActiveDOMElemJSResult.value;
            }
        },
        "_kIMnmkAd06f6swphZ7CTA": {
            getter: function(varBag, idService) {
                return varBag.toggleActionSheetJSResult.value;
            }
        },
        "s1v0hBgPbUu7QKO6uYvsxw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.activeDOMElemVar;
            },
            dataType: OS.DataTypes.DataTypes.Object
        },
        "e3gzzx5M8kC9oy2ISa_bwg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isOpenIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "Zp1IZ1g2rUOKJGXoxXbNQg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.extendedClassIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "EwLZrTsXAUWoBJsmFSagTg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ActionMenuContainer"));
                })(varBag.model, idService);
            }
        },
        "ZBbUUYz71UKphJBEwK3zlw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ActionSheetClose"));
                })(varBag.model, idService);
            }
        },
        "_a+iE044k0mh78CZF76ssg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("MenuEntries"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});