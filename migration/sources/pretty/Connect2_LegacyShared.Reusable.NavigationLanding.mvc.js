define("Connect2_LegacyShared.Reusable.NavigationLanding.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function(OutSystems, Connect2_LegacySharedModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("IsEnabled", "isEnabledIn", "IsEnabled", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return true;
                }, false),
                this.attr("_isEnabledInDataFetchStatus", "_isEnabledInDataFetchStatus", "_isEnabledInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            if ("IsEnabled" in inputs) {
                this.variables.isEnabledIn = inputs.IsEnabled;
                if ("_isEnabledInDataFetchStatus" in inputs) {
                    this.variables._isEnabledInDataFetchStatus = inputs._isEnabledInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Reusable.NavigationLanding");
});
define("Connect2_LegacyShared.Reusable.NavigationLanding.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.Reusable.NavigationLanding.mvc$model", "Connect2_LegacyShared.Reusable.NavigationLanding.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystems/ReactWidgets/Main"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, React, OSView, Connect2_LegacyShared_Reusable_NavigationLanding_mvc_model, Connect2_LegacyShared_Reusable_NavigationLanding_mvc_controller, Connect2_LegacySharedClientVariables, OSWidgets) {
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
        View.displayName = "Reusable.NavigationLanding";
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
                return Connect2_LegacyShared_Reusable_NavigationLanding_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_LegacyShared_Reusable_NavigationLanding_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Link, {
                enabled: model.variables.isEnabledIn,
                transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                url: OS.Navigation.generateScreenURL(OS.BuiltinFunctions.getOwnerURLPath(), {}),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnabledInDataFetchStatus)
            }, React.createElement(OSWidgets.Icon, {
                icon: "home",
                iconSize: /*Twotimes*/ 1,
                style: "icon",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("Connect2_LegacyShared.Reusable.NavigationLanding.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.languageResources", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.Reusable.NavigationLanding.mvc$debugger"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedLanguageResources, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_Reusable_NavigationLanding_mvc_Debugger) {
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
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:ETpwt426gkGMinqmYFovCg:/NRWebFlows.ETpwt426gkGMinqmYFovCg:+3SGrhAl8EdnlQpf6QG84w", "Connect2_LegacyShared", "Reusable", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:P69m8Hsle0mcoHCeSRelbQ:/NRWebFlows.ETpwt426gkGMinqmYFovCg/NodesShownInESpaceTree.P69m8Hsle0mcoHCeSRelbQ:RUQ5NtttQtvxzbN91B74OA", "Connect2_LegacyShared", "NavigationLanding", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:P69m8Hsle0mcoHCeSRelbQ", callContext.id);
            OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:ETpwt426gkGMinqmYFovCg", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = null;
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

define("Connect2_LegacyShared.Reusable.NavigationLanding.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "YI8MwylI7UibMAFgTmm7OA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isEnabledIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});