define("UBTConnect.Calendar.MyEntertaining.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "UBTConnect.Calendar.MyEntertaining_Embedded.mvc$model"], function(OutSystems, UBTConnectModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel, UBTConnect_Calendar_MyEntertaining_Embedded_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("MyCalendarEventSourceId", "myCalendarEventSourceIdIn", "MyCalendarEventSourceId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_myCalendarEventSourceIdInDataFetchStatus", "_myCalendarEventSourceIdInDataFetchStatus", "_myCalendarEventSourceIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = (UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets || UBTConnect_Calendar_MyEntertaining_Embedded_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("MyCalendarEventSourceId" in inputs) {
                this.variables.myCalendarEventSourceIdIn = OS.DataConversion.ServerDataConverter.from(inputs.MyCalendarEventSourceId, OS.DataTypes.DataTypes.Text);
            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Calendar.MyEntertaining");
});
define("UBTConnect.Calendar.MyEntertaining.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Calendar.MyEntertaining.mvc$model", "UBTConnect.Calendar.MyEntertaining.mvc$controller", "UBTConnect.clientVariables", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.Calendar.MyEntertaining_Embedded.mvc$view"], function(OutSystems, UBTConnectModel, UBTConnectController, React, OSView, UBTConnect_Calendar_MyEntertaining_mvc_model, UBTConnect_Calendar_MyEntertaining_mvc_controller, UBTConnectClientVariables, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, OSWidgets, UBTConnect_Calendar_MyEntertaining_Embedded_mvc_view) {
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
        View.displayName = "Calendar.MyEntertaining";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, UBTConnect_Calendar_MyEntertaining_Embedded_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Calendar_MyEntertaining_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Calendar_MyEntertaining_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function() {
                return "MyEntertaining";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, {
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
            }), React.createElement(UBTConnect_Calendar_MyEntertaining_Embedded_mvc_view, {
                inputs: {
                    In_InitialEventSouceId: model.variables.myCalendarEventSourceIdIn
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
                _dependencies: []
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);

    return View;
});
define("UBTConnect.Calendar.MyEntertaining.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Calendar.MyEntertaining.mvc$debugger", "UBTConnect.Calendar.controller"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Calendar_MyEntertaining_mvc_Debugger, _flow_UBTConnect_CalendarController) {
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


        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:FzAHH4EQ0kOcszHAaF2leA:/NRWebFlows.FzAHH4EQ0kOcszHAaF2leA:bxsuxVZ1+m7B3f0Wz9IOSw", "UBTConnect", "Calendar", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:4p9jadBfjU+LmXYvzjIhUQ:/NRWebFlows.FzAHH4EQ0kOcszHAaF2leA/NodesShownInESpaceTree.4p9jadBfjU+LmXYvzjIhUQ:3Z_mVkdEdI+NPcbr9APBbg", "UBTConnect", "MyEntertaining", "NRNodes.WebScreen", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:4p9jadBfjU+LmXYvzjIhUQ", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:FzAHH4EQ0kOcszHAaF2leA", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = null;
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = null;
        Controller.prototype.handleError = function(ex) {
            return _flow_UBTConnect_CalendarController.default.handleError(ex, this.callContext());
        };
        Controller.checkPermissions = function() {
            OS.RolesInfo.checkRegistered();
        };
        Controller.prototype.getDefaultTimeout = function() {
            return UBTConnectController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});

define("UBTConnect.Calendar.MyEntertaining.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "C8Tv0B05HU2KOy7fP0xuNA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.myCalendarEventSourceIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});