define("SortableJS.Sortable.SortableList_Draggable.mvc$model", ["OutSystems/ClientRuntime/Main", "SortableJS.model"], function(OutSystems, SortableJSModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("Id", "idIn", "Id", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_idInDataFetchStatus", "_idInDataFetchStatus", "_idInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("UseCustomDragHandle", "useCustomDragHandleIn", "UseCustomDragHandle", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_useCustomDragHandleInDataFetchStatus", "_useCustomDragHandleInDataFetchStatus", "_useCustomDragHandleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            if ("Id" in inputs) {
                this.variables.idIn = inputs.Id;
                if ("_idInDataFetchStatus" in inputs) {
                    this.variables._idInDataFetchStatus = inputs._idInDataFetchStatus;
                }

            }

            if ("UseCustomDragHandle" in inputs) {
                this.variables.useCustomDragHandleIn = inputs.UseCustomDragHandle;
                if ("_useCustomDragHandleInDataFetchStatus" in inputs) {
                    this.variables._useCustomDragHandleInDataFetchStatus = inputs._useCustomDragHandleInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Sortable.SortableList_Draggable");
});
define("SortableJS.Sortable.SortableList_Draggable.mvc$view", ["OutSystems/ClientRuntime/Main", "SortableJS.model", "SortableJS.controller", "react", "OutSystems/ReactView/Main", "SortableJS.Sortable.SortableList_Draggable.mvc$model", "SortableJS.Sortable.SortableList_Draggable.mvc$controller", "OutSystems/ReactWidgets/Main"], function(OutSystems, SortableJSModel, SortableJSController, React, OSView, SortableJS_Sortable_SortableList_Draggable_mvc_model, SortableJS_Sortable_SortableList_Draggable_mvc_controller, OSWidgets) {
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
        View.displayName = "Sortable.SortableList_Draggable";
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
                return SortableJS_Sortable_SortableList_Draggable_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return SortableJS_Sortable_SortableList_Draggable_mvc_controller;
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
                content: _this.props.placeholders.item,
                extendedProperties: {
                    "sortable-item-id": model.variables.idIn
                },
                style: model.getCachedValue(idService.getId("Item.Style"), function() {
                    return ((model.variables.useCustomDragHandleIn) ? ("") : ("drag-handle"));
                }, function() {
                    return model.variables.useCustomDragHandleIn;
                }),
                _idProps: {
                    service: idService,
                    name: "Item"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._useCustomDragHandleInDataFetchStatus)
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("SortableJS.Sortable.SortableList_Draggable.mvc$controller", ["OutSystems/ClientRuntime/Main", "SortableJS.model", "SortableJS.controller", "SortableJS.languageResources", "SortableJS.Sortable.SortableList_Draggable.mvc$debugger", "SortableJS.Sortable.SortableList_Draggable.mvc$controller.OnReady.SetItemIdOnCustomDragHandleJS"], function(OutSystems, SortableJSModel, SortableJSController, SortableJSLanguageResources, SortableJS_Sortable_SortableList_Draggable_mvc_Debugger, SortableJS_Sortable_SortableList_Draggable_mvc_controller_OnReady_SetItemIdOnCustomDragHandleJS) {
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
                OutSystemsDebugger.push("Osc9JulZXEaKSiD4trZbew:kavPdtFuB0iEsrKBhDNU3Q:/NRWebFlows.KBS5caG9PUahQlQFrVdl1g/NodesShownInESpaceTree.dMc83rqTm0KIHzFdkQk0eQ/ClientActions.kavPdtFuB0iEsrKBhDNU3Q:eBqstLXE54d5S8_XoaH9EA", "SortableJS", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("Osc9JulZXEaKSiD4trZbew:i4N_w9YEPU+wk9rf5kmNuw", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("Osc9JulZXEaKSiD4trZbew:hl1sYu0x2kq5qw6Dsv9G+w", callContext.id) && model.variables.useCustomDragHandleIn)) {
                    OutSystemsDebugger.handleBreakpoint("Osc9JulZXEaKSiD4trZbew:or+0PC6tS0qj8X6cHBJrWA", callContext.id);
                    controller.safeExecuteJSNode(SortableJS_Sortable_SortableList_Draggable_mvc_controller_OnReady_SetItemIdOnCustomDragHandleJS, "SetItemIdOnCustomDragHandle", "OnReady", {
                        Id: OS.DataConversion.JSNodeParamConverter.to(model.variables.idIn, OS.DataTypes.DataTypes.Text),
                        ItemWidgetId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Item"), OS.DataTypes.DataTypes.Text)
                    }, function($parameters) {}, {}, {});
                    OutSystemsDebugger.handleBreakpoint("Osc9JulZXEaKSiD4trZbew:A6lRUVYQLEarJGI1Uq_d4Q", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("Osc9JulZXEaKSiD4trZbew:A6lRUVYQLEarJGI1Uq_d4Q", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("Osc9JulZXEaKSiD4trZbew:kavPdtFuB0iEsrKBhDNU3Q", callContext.id);
            }

        };
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
                OutSystemsDebugger.push("Osc9JulZXEaKSiD4trZbew:fNBzsUX9HEu1nDOdo_3D4w:/NRWebFlows.KBS5caG9PUahQlQFrVdl1g/NodesShownInESpaceTree.dMc83rqTm0KIHzFdkQk0eQ/ClientActions.fNBzsUX9HEu1nDOdo_3D4w:A_PNVztJSxdkcJOjP5QycQ", "SortableJS", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("Osc9JulZXEaKSiD4trZbew:cH_YyQFCRU6V0CNR4bgaWw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("Osc9JulZXEaKSiD4trZbew:G6+lHTTrUUuuyApSHYqYPQ", callContext.id);
                // Execute Action: OnReady
                controller._onReady$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("Osc9JulZXEaKSiD4trZbew:DUUB14iY8keMwcLe+KY3Kg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("Osc9JulZXEaKSiD4trZbew:fNBzsUX9HEu1nDOdo_3D4w", callContext.id);
            }

        };

        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.onParametersChanged$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("Osc9JulZXEaKSiD4trZbew:KBS5caG9PUahQlQFrVdl1g:/NRWebFlows.KBS5caG9PUahQlQFrVdl1g:0yfiRtcavKQV2BgbvBOERg", "SortableJS", "Sortable", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("Osc9JulZXEaKSiD4trZbew:dMc83rqTm0KIHzFdkQk0eQ:/NRWebFlows.KBS5caG9PUahQlQFrVdl1g/NodesShownInESpaceTree.dMc83rqTm0KIHzFdkQk0eQ:LCitYr7pSk43xtf7bfyXbg", "SortableJS", "SortableList_Draggable", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("Osc9JulZXEaKSiD4trZbew:dMc83rqTm0KIHzFdkQk0eQ", callContext.id);
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "Sortable/SortableList_Draggable On Ready");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "Sortable/SortableList_Draggable On Parameters Changed");
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
define("SortableJS.Sortable.SortableList_Draggable.mvc$controller.OnReady.SetItemIdOnCustomDragHandleJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        document.getElementById($parameters.ItemWidgetId).querySelector(".drag-handle")?.setAttribute("sortable-item-id", $parameters.Id)
    };
});

define("SortableJS.Sortable.SortableList_Draggable.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "or+0PC6tS0qj8X6cHBJrWA": {
            getter: function(varBag, idService) {
                return varBag.setItemIdOnCustomDragHandleJSResult.value;
            }
        },
        "eU08rY5AykGeopL5Ru+Oww": {
            getter: function(varBag, idService) {
                return varBag.model.variables.idIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "p76d9IUD6UyS9+11YczWDw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.useCustomDragHandleIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "FpNEl1mXRUuyFyERS31NzQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Item"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});