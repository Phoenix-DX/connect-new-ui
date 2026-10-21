define("Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_Banner.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.controller$FormatDateForEventBanner"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("ActiveHeight", "activeHeightVar", "ActiveHeight", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 210;
                }, false),
                this.attr("In_ImageURL", "in_ImageURLIn", "In_ImageURL", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_ImageURLInDataFetchStatus", "_in_ImageURLInDataFetchStatus", "_in_ImageURLInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_IsHost", "in_IsHostIn", "In_IsHost", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_IsHostInDataFetchStatus", "_in_IsHostInDataFetchStatus", "_in_IsHostInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_EventLocation", "in_EventLocationIn", "In_EventLocation", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_EventLocationInDataFetchStatus", "_in_EventLocationInDataFetchStatus", "_in_EventLocationInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_EventDate", "in_EventDateIn", "In_EventDate", true, false, OS.DataTypes.DataTypes.Date, function() {
                    return OS.DataTypes.DateTime.defaultValue;
                }, false),
                this.attr("_in_EventDateInDataFetchStatus", "_in_EventDateInDataFetchStatus", "_in_EventDateInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_Adults", "in_AdultsIn", "In_Adults", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("_in_AdultsInDataFetchStatus", "_in_AdultsInDataFetchStatus", "_in_AdultsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_Children", "in_ChildrenIn", "In_Children", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("_in_ChildrenInDataFetchStatus", "_in_ChildrenInDataFetchStatus", "_in_ChildrenInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_MinHeight", "in_MinHeightIn", "In_MinHeight", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 210;
                }, false),
                this.attr("_in_MinHeightInDataFetchStatus", "_in_MinHeightInDataFetchStatus", "_in_MinHeightInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_IsCoordinatorAvailable", "in_IsCoordinatorAvailableIn", "In_IsCoordinatorAvailable", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_IsCoordinatorAvailableInDataFetchStatus", "_in_IsCoordinatorAvailableInDataFetchStatus", "_in_IsCoordinatorAvailableInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            if ("In_ImageURL" in inputs) {
                this.variables.in_ImageURLIn = inputs.In_ImageURL;
                if ("_in_ImageURLInDataFetchStatus" in inputs) {
                    this.variables._in_ImageURLInDataFetchStatus = inputs._in_ImageURLInDataFetchStatus;
                }

            }

            if ("In_IsHost" in inputs) {
                this.variables.in_IsHostIn = inputs.In_IsHost;
                if ("_in_IsHostInDataFetchStatus" in inputs) {
                    this.variables._in_IsHostInDataFetchStatus = inputs._in_IsHostInDataFetchStatus;
                }

            }

            if ("In_EventLocation" in inputs) {
                this.variables.in_EventLocationIn = inputs.In_EventLocation;
                if ("_in_EventLocationInDataFetchStatus" in inputs) {
                    this.variables._in_EventLocationInDataFetchStatus = inputs._in_EventLocationInDataFetchStatus;
                }

            }

            if ("In_EventDate" in inputs) {
                this.variables.in_EventDateIn = inputs.In_EventDate;
                if ("_in_EventDateInDataFetchStatus" in inputs) {
                    this.variables._in_EventDateInDataFetchStatus = inputs._in_EventDateInDataFetchStatus;
                }

            }

            if ("In_Adults" in inputs) {
                this.variables.in_AdultsIn = inputs.In_Adults;
                if ("_in_AdultsInDataFetchStatus" in inputs) {
                    this.variables._in_AdultsInDataFetchStatus = inputs._in_AdultsInDataFetchStatus;
                }

            }

            if ("In_Children" in inputs) {
                this.variables.in_ChildrenIn = inputs.In_Children;
                if ("_in_ChildrenInDataFetchStatus" in inputs) {
                    this.variables._in_ChildrenInDataFetchStatus = inputs._in_ChildrenInDataFetchStatus;
                }

            }

            if ("In_MinHeight" in inputs) {
                this.variables.in_MinHeightIn = inputs.In_MinHeight;
                if ("_in_MinHeightInDataFetchStatus" in inputs) {
                    this.variables._in_MinHeightInDataFetchStatus = inputs._in_MinHeightInDataFetchStatus;
                }

            }

            if ("In_IsCoordinatorAvailable" in inputs) {
                this.variables.in_IsCoordinatorAvailableIn = inputs.In_IsCoordinatorAvailable;
                if ("_in_IsCoordinatorAvailableInDataFetchStatus" in inputs) {
                    this.variables._in_IsCoordinatorAvailableInDataFetchStatus = inputs._in_IsCoordinatorAvailableInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "LDM_Blocks.EventDetail_Banner");
});
define("Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_Banner.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_Banner.mvc$model", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_Banner.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_OrbitMobile_MUI.controller$FormatDateForEventBanner"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, React, OSView, Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_Banner_mvc_model, Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_Banner_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets) {
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
        View.displayName = "LDM_Blocks.EventDetail_Banner";
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
                return Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_Banner_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_Banner_mvc_controller;
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
                extendedProperties: {
                    style: (("height: " + (model.variables.activeHeightVar).toString()) + "px;")
                },
                style: "event-detail-banner-image-cont",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Image, {
                extendedProperties: {
                    style: (("height: " + (model.variables.activeHeightVar).toString()) + "px;")
                },
                style: "event-detail-banner-image",
                type: /*External*/ 1,
                url: model.variables.in_ImageURLIn,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                url_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ImageURLInDataFetchStatus)
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: (("height: " + (model.variables.activeHeightVar).toString()) + "px;")
                },
                style: "event-detail-banner-overlay",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: (("min-height: " + (model.variables.activeHeightVar).toString()) + "px;")
                },
                style: "event-detail-banner-text",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Expression, {
                style: "margin-top-m",
                value: model.getCachedValue(idService.getId("kGQpBktHTkesOScB9_oEmg.Value"), function() {
                    return ((model.variables.in_IsHostIn) ? ("Host") : ("Guest"));
                }, function() {
                    return model.variables.in_IsHostIn;
                }),
                _idProps: {
                    service: idService,
                    uuid: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsHostInDataFetchStatus)
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "display-flex flex-direction-column text-align-center margin-top-m margin-bottom-m",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "5"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Expression, {
                style: "font-size-1-5em bold",
                value: model.variables.in_EventLocationIn,
                _idProps: {
                    service: idService,
                    uuid: "6"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EventLocationInDataFetchStatus)
            }), React.createElement(OSWidgets.Expression, {
                style: "font-size-1-25em",
                value: model.getCachedValue(idService.getId("NsVlrgyj3kSaBNgi6LZJMQ.Value"), function() {
                    return OutSystemsDebugger.handleFunctionCall(function() {
                        return Connect2_OrbitMobile_MUIController.default.formatDateForEventBanner$Action(model.variables.in_EventDateIn, callContext).out_FormattedDateOut;
                    }, OS.DataTypes.DataTypes.Text, callContext.id);
                }, function() {
                    return model.variables.in_EventDateIn;
                }),
                _idProps: {
                    service: idService,
                    uuid: "7"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EventDateInDataFetchStatus)
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    className: model.getCachedValue(idService.getId("eXwzua5tIEmZmR2NPqa9SA.class"), function() {
                        return ("full-width display-flex" + ((model.variables.in_IsHostIn) ? (" flex-space-between") : (" justify-content-flex-end")));
                    }, function() {
                        return model.variables.in_IsHostIn;
                    })
                },
                style: "full-width display-flex",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "8"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: true,
                style: "display-flex",
                visible: model.variables.in_IsHostIn,
                _idProps: {
                    service: idService,
                    uuid: "9"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsHostInDataFetchStatus)
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: true,
                style: "event-detail-banner-people event-detail-banner-adults",
                visible: model.variables.in_IsHostIn,
                _idProps: {
                    service: idService,
                    uuid: "10"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsHostInDataFetchStatus)
            }, React.createElement(OSWidgets.Expression, {
                style: "font-size-1-5em bold",
                value: OS.BuiltinFunctions.longIntegerToText(model.variables.in_AdultsIn),
                _idProps: {
                    service: idService,
                    uuid: "11"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_AdultsInDataFetchStatus)
            }), React.createElement(OSWidgets.Expression, {
                style: "font-size-0-75em",
                value: model.getCachedValue(idService.getId("+8kbmLJc00qKC9i_FoCfSQ.Value"), function() {
                    return ((model.variables.in_AdultsIn.equals(OS.BuiltinFunctions.integerToLongInteger(1))) ? ("Adult") : ("Adults"));
                }, function() {
                    return model.variables.in_AdultsIn;
                }),
                _idProps: {
                    service: idService,
                    uuid: "12"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_AdultsInDataFetchStatus)
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: true,
                style: "event-detail-banner-people event-detail-banner-children",
                visible: model.variables.in_IsHostIn,
                _idProps: {
                    service: idService,
                    uuid: "13"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsHostInDataFetchStatus)
            }, React.createElement(OSWidgets.Expression, {
                style: "font-size-1-5em bold",
                value: OS.BuiltinFunctions.longIntegerToText(model.variables.in_ChildrenIn),
                _idProps: {
                    service: idService,
                    uuid: "14"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ChildrenInDataFetchStatus)
            }), React.createElement(OSWidgets.Expression, {
                style: "font-size-0-75em",
                value: model.getCachedValue(idService.getId("CpPgQ5Tax02n1yOYP0iWcw.Value"), function() {
                    return ((model.variables.in_ChildrenIn.equals(OS.BuiltinFunctions.integerToLongInteger(1))) ? ("Child") : ("Children"));
                }, function() {
                    return model.variables.in_ChildrenIn;
                }),
                _idProps: {
                    service: idService,
                    uuid: "15"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ChildrenInDataFetchStatus)
            }))), React.createElement(OSWidgets.Button, {
                enabled: model.variables.in_IsCoordinatorAvailableIn,
                extendedProperties: {
                    style: model.getCachedValue(idService.getId("SceZoitrD0WbpqnzwJJtlw.style"), function() {
                        return ((model.variables.in_IsHostIn) ? ("") : ("min-height: 51px;"));
                    }, function() {
                        return model.variables.in_IsHostIn;
                    })
                },
                isDefault: false,
                onClick: function() {
                    return Promise.resolve().then(function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/EventDetail_Banner/Button OnClick");
                            return controller.onClick_ContactOrganiser$Action(controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });
                    });;
                },
                style: "btn btn-primary",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "16"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsCoordinatorAvailableInDataFetchStatus)
            }, React.createElement(OSWidgets.Icon, {
                extendedProperties: {
                    style: "padding: 0px 5px 2px 5px;"
                },
                icon: "envelope",
                iconSize: /*FontSize*/ 0,
                style: "icon",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "17"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Text, {
                style: "text-no-wrap",
                text: ["Contact Coordinator"],
                _idProps: {
                    service: idService,
                    uuid: "18"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_Banner.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_Banner.mvc$debugger", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_Banner.mvc$controller.OnReady.CorrectHeightJS", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_Banner.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_Banner.mvc$controller.OnParametersChanged.WasCurrentViewRestoredFromCacheJS", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_Banner.mvc$controller.OnInitialize.WasCurrentViewRestoredFromCacheJS", "Connect2_OrbitMobile_MUI.controller$FormatDateForEventBanner"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_Banner_mvc_Debugger, Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_Banner_mvc_controller_OnReady_CorrectHeightJS, Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_Banner_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS, Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_Banner_mvc_controller_OnParametersChanged_WasCurrentViewRestoredFromCacheJS, Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_Banner_mvc_controller_OnInitialize_WasCurrentViewRestoredFromCacheJS) {
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
            var correctHeightJSResult = new OS.DataTypes.VariableHolder();
            var wasCurrentViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.correctHeightJSResult = correctHeightJSResult;
            varBag.wasCurrentViewRestoredFromCacheJSResult = wasCurrentViewRestoredFromCacheJSResult;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:clRfC+DGQUGCv_aobJ2vLA:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ/NodesShownInESpaceTree.MUKYym+X602RrZRILyReqA/ClientActions.clRfC+DGQUGCv_aobJ2vLA:c_haiNQykjEMWpl3eczssQ", "Connect2_OrbitMobile_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GZMJpTCmhU2R9wXjNb4BZA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2ScN_oLCNE+Qc+DVtkMp_Q", callContext.id);
                wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_Banner_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnReady", {
                    FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_Banner.OnReady$wasCurrentViewRestoredFromCacheJSResult"))();
                    jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
                    return jsNodeResult;
                }, {}, {});
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JxqSoBahsEymJfP2hH_owA", callContext.id) && wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut)) {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:kRBr_be_5UKDnAUvUG1nKA", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0niIdpzmiUGzI33Ng+H77w", callContext.id);
                        correctHeightJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_Banner_mvc_controller_OnReady_CorrectHeightJS, "CorrectHeight", "OnReady", {
                            FinalHeight: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer)
                        }, function($parameters) {
                            var jsNodeResult = new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_Banner.OnReady$correctHeightJSResult"))();
                            jsNodeResult.finalHeightOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FinalHeight, OS.DataTypes.DataTypes.Integer);
                            return jsNodeResult;
                        }, {}, {});
                        // Has Value Changed?
                        return OS.Flow.executeSequence(function() {
                            if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6h6vAdcYOEy5CpwZgEoVHA", callContext.id) && ((correctHeightJSResult.value.finalHeightOut) !== (model.variables.in_MinHeightIn)))) {
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:H9QYP5F8GU+7+LJmVPAf0w", callContext.id);
                                // ActiveHeight = CorrectHeight.FinalHeight
                                model.variables.activeHeightVar = correctHeightJSResult.value.finalHeightOut;
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Rx+0hThk0kGhZcgHs0McZw", callContext.id);
                                // Trigger Event: SetContainerHeight
                                return controller.setContainerHeight$Action(model.variables.activeHeightVar, callContext).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:o4owIPDV40iLRb2O6kmOcA", callContext.id);
                                });
                            } else {
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:o4owIPDV40iLRb2O6kmOcA", callContext.id);
                            }

                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:clRfC+DGQUGCv_aobJ2vLA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:clRfC+DGQUGCv_aobJ2vLA", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_Banner.OnReady$correctHeightJSResult", [{
            name: "FinalHeight",
            attrName: "finalHeightOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }]);
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_Banner.OnReady$wasCurrentViewRestoredFromCacheJSResult", [{
            name: "FromCache",
            attrName: "fromCacheOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._onClick_ContactOrganiser$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_ContactOrganiser");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:W_BKZ+WNdkyvNUly9o0tAQ:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ/NodesShownInESpaceTree.MUKYym+X602RrZRILyReqA/ClientActions.W_BKZ+WNdkyvNUly9o0tAQ:HEVAyVPDO+c14teCF1Y2VQ", "Connect2_OrbitMobile_MUI", "OnClick_ContactOrganiser", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WzDN3tO3GkSfbZLYocqI3A", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8CXaTgbrOESlpKPm46R0BQ", callContext.id);
                // Trigger Event: ContactOrganiser
                return controller.contactOrganiser$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gxP7tq5p8UmZ2BkMGWv2lg", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:W_BKZ+WNdkyvNUly9o0tAQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:W_BKZ+WNdkyvNUly9o0tAQ", callContext.id);
                throw ex;

            });
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
            var wasCurrentViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.wasCurrentViewRestoredFromCacheJSResult = wasCurrentViewRestoredFromCacheJSResult;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:E4kklehUzk+m65rz0VjFlQ:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ/NodesShownInESpaceTree.MUKYym+X602RrZRILyReqA/ClientActions.E4kklehUzk+m65rz0VjFlQ:rkhU6_quHh3epcMXQbXw8Q", "Connect2_OrbitMobile_MUI", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wFP5vf0xyUijSxDPgZaoBw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:MCXbFN8vmEur0TLR0FcPTw", callContext.id);
                wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_Banner_mvc_controller_OnParametersChanged_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnParametersChanged", {
                    FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_Banner.OnParametersChanged$wasCurrentViewRestoredFromCacheJSResult"))();
                    jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
                    return jsNodeResult;
                }, {}, {});
                if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xPxugPZfaUy8HNRcNlQa3w", callContext.id) && wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut)) {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GQH7gQaM70SyR_Vhygzrzg", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:azwL0Og5N0ibt_bQ1AYTCA", callContext.id);
                    // Execute Action: SetActiveHeight
                    controller._setActiveHeight$Action(callContext);
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GaT+UgY6eUCw22O9Z0pShA", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:E4kklehUzk+m65rz0VjFlQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_Banner.OnParametersChanged$wasCurrentViewRestoredFromCacheJSResult", [{
            name: "FromCache",
            attrName: "fromCacheOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._onInitialize$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnInitialize");
            callContext = controller.callContext(callContext);
            var wasCurrentViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.wasCurrentViewRestoredFromCacheJSResult = wasCurrentViewRestoredFromCacheJSResult;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:bksGpHYbyUGS5wIWv2uNqQ:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ/NodesShownInESpaceTree.MUKYym+X602RrZRILyReqA/ClientActions.bksGpHYbyUGS5wIWv2uNqQ:K+PwIus43Mq9No2NHC47pw", "Connect2_OrbitMobile_MUI", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:MFu0_5K6+0mMx0iSO3wnsw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WeWXqeofdUOEv9FkviMatA", callContext.id);
                wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_Banner_mvc_controller_OnInitialize_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnInitialize", {
                    FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_Banner.OnInitialize$wasCurrentViewRestoredFromCacheJSResult"))();
                    jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
                    return jsNodeResult;
                }, {}, {});
                if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:X8udit7e80CwB2GgULZplA", callContext.id) && wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut)) {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bSMaN6hXBEaJ4hXqcDlKCw", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vGZFM+9Rx0GMhS3cerpC+A", callContext.id);
                    // Execute Action: SetActiveHeight
                    controller._setActiveHeight$Action(callContext);
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wUcMpBXBMEaO1Ukdo9JaUA", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:bksGpHYbyUGS5wIWv2uNqQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_Banner.OnInitialize$wasCurrentViewRestoredFromCacheJSResult", [{
            name: "FromCache",
            attrName: "fromCacheOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._setActiveHeight$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("SetActiveHeight");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:dNtj0nm+xEiBs7eDUCPswg:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ/NodesShownInESpaceTree.MUKYym+X602RrZRILyReqA/ClientActions.dNtj0nm+xEiBs7eDUCPswg:3TnKps9btBc5WpMoNkdeEQ", "Connect2_OrbitMobile_MUI", "SetActiveHeight", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:MSkjBpQnBEagPrfp8DNZEg", callContext.id);
                // Has value changed?
                if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:hgc2EwkyxEyXOhMTHiTfuQ", callContext.id) && ((model.variables.in_MinHeightIn) !== (model.variables.activeHeightVar)))) {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0tN6zOowXUW5MUJD7BAl4g", callContext.id);
                    // ActiveHeight = In_MinHeight
                    model.variables.activeHeightVar = model.variables.in_MinHeightIn;
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wbIRR+9b3E6ZOF1ehstMcg", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wbIRR+9b3E6ZOF1ehstMcg", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:dNtj0nm+xEiBs7eDUCPswg", callContext.id);
            }

        };

        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.onClick_ContactOrganiser$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_ContactOrganiser$Action, callContext);

        };
        Controller.prototype.onParametersChanged$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

        };
        Controller.prototype.onInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

        };
        Controller.prototype.setActiveHeight$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._setActiveHeight$Action, callContext);

        };
        Controller.prototype.contactOrganiser$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.setContainerHeight$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:u4BC4QhydUm9ABIHkrjpQQ:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ:_P7gfhFmARrzYcq0IncBSg", "Connect2_OrbitMobile_MUI", "LDM_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:MUKYym+X602RrZRILyReqA:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ/NodesShownInESpaceTree.MUKYym+X602RrZRILyReqA:bDRmGC7Aj+sM3DdldSBbhA", "Connect2_OrbitMobile_MUI", "EventDetail_Banner", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:MUKYym+X602RrZRILyReqA", callContext.id);
            OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:u4BC4QhydUm9ABIHkrjpQQ", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_Blocks/EventDetail_Banner On Initialize");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_Blocks/EventDetail_Banner On Ready");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_Blocks/EventDetail_Banner On Parameters Changed");
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
            return Connect2_OrbitMobile_MUIController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, Connect2_OrbitMobile_MUILanguageResources);
});
define("Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_Banner.mvc$controller.OnReady.CorrectHeightJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.FinalHeight = document.querySelector(".event-detail-banner-text").offsetHeight;
    };
});
define("Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_Banner.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
    };
});
define("Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_Banner.mvc$controller.OnParametersChanged.WasCurrentViewRestoredFromCacheJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
    };
});
define("Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_Banner.mvc$controller.OnInitialize.WasCurrentViewRestoredFromCacheJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
    };
});

define("Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_Banner.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "0niIdpzmiUGzI33Ng+H77w": {
            getter: function(varBag, idService) {
                return varBag.correctHeightJSResult.value;
            }
        },
        "2ScN_oLCNE+Qc+DVtkMp_Q": {
            getter: function(varBag, idService) {
                return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
            }
        },
        "MCXbFN8vmEur0TLR0FcPTw": {
            getter: function(varBag, idService) {
                return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
            }
        },
        "WeWXqeofdUOEv9FkviMatA": {
            getter: function(varBag, idService) {
                return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
            }
        },
        "PaG34vudoUqhr9f2_e2yzg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.activeHeightVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "cULR+bJSHkm7QCSQmfxJBg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_ImageURLIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "dPralACM9ESh4bOwIOO0_w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_IsHostIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "pB9Hkjxh2U6__lVN1qrbTw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_EventLocationIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "Lrk3gMd6Gk61x8SDsGVjuQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_EventDateIn;
            },
            dataType: OS.DataTypes.DataTypes.Date
        },
        "JSs++Izj70yvd1B1MnlfCw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_AdultsIn;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "2cstOraUskuAAW30niXUZg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_ChildrenIn;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "vKaFQlEkuU++vypyaDRZrg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_MinHeightIn;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "jkivAg2qKUeQgIEIjJqZVw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_IsCoordinatorAvailableIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});