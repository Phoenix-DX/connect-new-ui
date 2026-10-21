define("SortableJS.Sortable.SortableList.mvc$model", ["OutSystems/ClientRuntime/Main", "SortableJS.model", "SortableJS.controller", "SortableJS.controller$SetupList"], function(OutSystems, SortableJSModel, SortableJSController) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("Group", "groupIn", "Group", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_groupInDataFetchStatus", "_groupInDataFetchStatus", "_groupInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("DenyLists", "denyListsIn", "DenyLists", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                }, false, OS.DataTypes.TextList),
                this.attr("_denyListsInDataFetchStatus", "_denyListsInDataFetchStatus", "_denyListsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("PreventDomMove", "preventDomMoveIn", "PreventDomMove", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return true;
                }, false),
                this.attr("_preventDomMoveInDataFetchStatus", "_preventDomMoveInDataFetchStatus", "_preventDomMoveInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            if ("Group" in inputs) {
                this.variables.groupIn = inputs.Group;
                if ("_groupInDataFetchStatus" in inputs) {
                    this.variables._groupInDataFetchStatus = inputs._groupInDataFetchStatus;
                }

            }

            if ("DenyLists" in inputs) {
                this.variables.denyListsIn = inputs.DenyLists;
                if ("_denyListsInDataFetchStatus" in inputs) {
                    this.variables._denyListsInDataFetchStatus = inputs._denyListsInDataFetchStatus;
                }

            }

            if ("PreventDomMove" in inputs) {
                this.variables.preventDomMoveIn = inputs.PreventDomMove;
                if ("_preventDomMoveInDataFetchStatus" in inputs) {
                    this.variables._preventDomMoveInDataFetchStatus = inputs._preventDomMoveInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Sortable.SortableList");
});
define("SortableJS.Sortable.SortableList.mvc$view", ["OutSystems/ClientRuntime/Main", "SortableJS.model", "SortableJS.controller", "react", "OutSystems/ReactView/Main", "SortableJS.Sortable.SortableList.mvc$model", "SortableJS.Sortable.SortableList.mvc$controller", "OutSystems/ReactWidgets/Main", "SortableJS.controller$SetupList"], function(OutSystems, SortableJSModel, SortableJSController, React, OSView, SortableJS_Sortable_SortableList_mvc_model, SortableJS_Sortable_SortableList_mvc_controller, OSWidgets) {
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
        View.displayName = "Sortable.SortableList";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/SortableJS.Sortable.SortableList.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/SortableJS.Sortable_min.js"];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return SortableJS_Sortable_SortableList_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return SortableJS_Sortable_SortableList_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.listPlaceholder,
                _idProps: {
                    service: idService,
                    name: "ListPlaceholder"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("SortableJS.Sortable.SortableList.mvc$controller", ["OutSystems/ClientRuntime/Main", "SortableJS.model", "SortableJS.controller", "SortableJS.languageResources", "SortableJS.Sortable.SortableList.mvc$debugger", "SortableJS.Sortable.SortableList.mvc$controller.OnReady.GetObjJS", "SortableJS.controller$SetupList"], function(OutSystems, SortableJSModel, SortableJSController, SortableJSLanguageResources, SortableJS_Sortable_SortableList_mvc_Debugger, SortableJS_Sortable_SortableList_mvc_controller_OnReady_GetObjJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {
                handler$Action: function(fromIdIn, toIdIn, oldIndexIn, newIndexIn, itemIdIn) {
                    fromIdIn = (fromIdIn === undefined) ? "" : fromIdIn;
                    toIdIn = (toIdIn === undefined) ? "" : toIdIn;
                    oldIndexIn = (oldIndexIn === undefined) ? 0 : oldIndexIn;
                    newIndexIn = (newIndexIn === undefined) ? 0 : newIndexIn;
                    itemIdIn = (itemIdIn === undefined) ? "" : itemIdIn;
                    return controller.executeActionInsideJSNode(controller._handler$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(fromIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(toIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(oldIndexIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(newIndexIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(itemIdIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "Handler");
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
                OutSystemsDebugger.push("Osc9JulZXEaKSiD4trZbew:YPr5OuK+GEObLq0qA1eIlA:/NRWebFlows.KBS5caG9PUahQlQFrVdl1g/NodesShownInESpaceTree.xJ1YK9Xy+k2FQOpn2DFa4g/ClientActions.YPr5OuK+GEObLq0qA1eIlA:xaVUmTMA6R99KzGc2kVjxA", "SortableJS", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("Osc9JulZXEaKSiD4trZbew:5aM0wXeTmk+4qkO+8MBTIw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("Osc9JulZXEaKSiD4trZbew:3eplBQuBFkCVAw7Po4qW_Q", callContext.id);
                // Execute Action: OnReady
                controller._onReady$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("Osc9JulZXEaKSiD4trZbew:kTuRZJHA3UmatQbmT1NXxA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("Osc9JulZXEaKSiD4trZbew:YPr5OuK+GEObLq0qA1eIlA", callContext.id);
            }

        };
        Controller.prototype._handler$Action = function(fromIdIn, toIdIn, oldIndexIn, newIndexIn, itemIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("SortableJS.Sortable.SortableList.Handler$vars"))());
            vars.value.fromIdInLocal = fromIdIn;
            vars.value.toIdInLocal = toIdIn;
            vars.value.oldIndexInLocal = oldIndexIn;
            vars.value.newIndexInLocal = newIndexIn;
            vars.value.itemIdInLocal = itemIdIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("Osc9JulZXEaKSiD4trZbew:2lSHO6E0wkialY30ThdKvw:/NRWebFlows.KBS5caG9PUahQlQFrVdl1g/NodesShownInESpaceTree.xJ1YK9Xy+k2FQOpn2DFa4g/ClientActions.2lSHO6E0wkialY30ThdKvw:22JYPxt+3fERxk1BDHgPtg", "SortableJS", "Handler", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("Osc9JulZXEaKSiD4trZbew:j2D28F7J406LuzaLzs7sMg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("Osc9JulZXEaKSiD4trZbew:RUTkGvGkNEe2aHlPzipr2w", callContext.id);
                // Trigger Event: OnDragEnd
                return controller.onDragEnd$Action(vars.value.fromIdInLocal, vars.value.toIdInLocal, vars.value.oldIndexInLocal, vars.value.newIndexInLocal, vars.value.itemIdInLocal, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("Osc9JulZXEaKSiD4trZbew:Dsuiud7v20CWJ0icS7K9Cw", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("Osc9JulZXEaKSiD4trZbew:2lSHO6E0wkialY30ThdKvw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("Osc9JulZXEaKSiD4trZbew:2lSHO6E0wkialY30ThdKvw", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("SortableJS.Sortable.SortableList.Handler$vars", [{
            name: "FromId",
            attrName: "fromIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "ToId",
            attrName: "toIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "OldIndex",
            attrName: "oldIndexInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }, {
            name: "NewIndex",
            attrName: "newIndexInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }, {
            name: "ItemId",
            attrName: "itemIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._onReady$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnReady");
            callContext = controller.callContext(callContext);
            var getObjJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getObjJSResult = getObjJSResult;
            try {
                OutSystemsDebugger.push("Osc9JulZXEaKSiD4trZbew:Qn16aDAC6EiWWegIx1w00w:/NRWebFlows.KBS5caG9PUahQlQFrVdl1g/NodesShownInESpaceTree.xJ1YK9Xy+k2FQOpn2DFa4g/ClientActions.Qn16aDAC6EiWWegIx1w00w:+f0oW_tcJOMokrVVkf3q6g", "SortableJS", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("Osc9JulZXEaKSiD4trZbew:SM6EezuiFU6dUQcolI6W5Q", callContext.id);
                OutSystemsDebugger.handleBreakpoint("Osc9JulZXEaKSiD4trZbew:qQAaNZfaGECS9giod1N5gQ", callContext.id);
                getObjJSResult.value = controller.safeExecuteJSNode(SortableJS_Sortable_SortableList_mvc_controller_OnReady_GetObjJS, "GetObj", "OnReady", {
                    Function: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("SortableJS.Sortable.SortableList.OnReady$getObjJSResult"))();
                    jsNodeResult.functionOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Function, OS.DataTypes.DataTypes.Object);
                    return jsNodeResult;
                }, {
                    Handler: controller.clientActionProxies.handler$Action
                }, {});
                OutSystemsDebugger.handleBreakpoint("Osc9JulZXEaKSiD4trZbew:qg6_szAuBUiHVIa1bT2ZEg", callContext.id);
                // Execute Action: SetupList
                SortableJSController.default.setupList$Action(idService.getId("ListPlaceholder"), getObjJSResult.value.functionOut, model.variables.groupIn, model.variables.denyListsIn, model.variables.preventDomMoveIn, callContext);
                OutSystemsDebugger.handleBreakpoint("Osc9JulZXEaKSiD4trZbew:18o3HSTNOU2_p6DE5x0C8g", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("Osc9JulZXEaKSiD4trZbew:Qn16aDAC6EiWWegIx1w00w", callContext.id);
            }

        };
        Controller.registerVariableGroupType("SortableJS.Sortable.SortableList.OnReady$getObjJSResult", [{
            name: "Function",
            attrName: "functionOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
            }
        }]);

        Controller.prototype.onParametersChanged$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

        };
        Controller.prototype.handler$Action = function(fromIdIn, toIdIn, oldIndexIn, newIndexIn, itemIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler$Action, callContext, fromIdIn, toIdIn, oldIndexIn, newIndexIn, itemIdIn);

        };
        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.onDragEnd$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("Osc9JulZXEaKSiD4trZbew:KBS5caG9PUahQlQFrVdl1g:/NRWebFlows.KBS5caG9PUahQlQFrVdl1g:0yfiRtcavKQV2BgbvBOERg", "SortableJS", "Sortable", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("Osc9JulZXEaKSiD4trZbew:xJ1YK9Xy+k2FQOpn2DFa4g:/NRWebFlows.KBS5caG9PUahQlQFrVdl1g/NodesShownInESpaceTree.xJ1YK9Xy+k2FQOpn2DFa4g:XWLX4Eg4hU4DzWiMW86D9A", "SortableJS", "SortableList", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("Osc9JulZXEaKSiD4trZbew:xJ1YK9Xy+k2FQOpn2DFa4g", callContext.id);
            OutSystemsDebugger.pop("Osc9JulZXEaKSiD4trZbew:KBS5caG9PUahQlQFrVdl1g", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Sortable/SortableList On Ready");
                return controller.onReady$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Sortable/SortableList On Parameters Changed");
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
            return SortableJSController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, SortableJSLanguageResources);
});
define("SortableJS.Sortable.SortableList.mvc$controller.OnReady.GetObjJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Function = $actions.Handler;
    };
});

define("SortableJS.Sortable.SortableList.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "JswIr2gTOkCdC10smrGbSQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.fromIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "a4ToGxJ3akqwBy88rF+vbg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.toIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "GmZ2vge69UGrVPyl8v8wKA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.oldIndexInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "_S+EtuJcUEGSBSBXQ8tfRA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.newIndexInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "vKvPlBLOKkuXKaC7drQwCg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.itemIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "qQAaNZfaGECS9giod1N5gQ": {
            getter: function(varBag, idService) {
                return varBag.getObjJSResult.value;
            }
        },
        "WMpF72rv7kykVclHpmsrtg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.groupIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "rXKyvVghWUmpTMtLRxWcuw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.denyListsIn;
            }
        },
        "m_u83lBDmESLRgrRnJDnRw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.preventDomMoveIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "JJxsm_PUaE+cHtXVEBc6Uw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ListPlaceholder"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});