define("Connect2_LegacyShared.Reusable.ConnectBlankSlate.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function(OutSystems, Connect2_LegacySharedModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [].concat(_super.attributesToDeclare.call(this));
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

        Model.prototype.setInputs = function(inputs) {};
        return Model;
    })(OS.Model.VariablelessViewModel);
    return new OS.Model.ModelFactory(Model, "Reusable.ConnectBlankSlate");
});
define("Connect2_LegacyShared.Reusable.ConnectBlankSlate.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.Reusable.ConnectBlankSlate.mvc$model", "Connect2_LegacyShared.Reusable.ConnectBlankSlate.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystems/ReactWidgets/Main"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, React, OSView, Connect2_LegacyShared_Reusable_ConnectBlankSlate_mvc_model, Connect2_LegacyShared_Reusable_ConnectBlankSlate_mvc_controller, Connect2_LegacySharedClientVariables, OSWidgets) {
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
        View.displayName = "Reusable.ConnectBlankSlate";
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
                return Connect2_LegacyShared_Reusable_ConnectBlankSlate_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_LegacyShared_Reusable_ConnectBlankSlate_mvc_controller;
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
                style: "connect-blank-slate-container",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.image,
                _idProps: {
                    service: idService,
                    name: "Image"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.title,
                style: "connect-blank-slate-title margin-top-base text-align-center",
                _idProps: {
                    service: idService,
                    name: "Title"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.subtitle,
                style: "connect-blank-slate-sub-title margin-top-s",
                _idProps: {
                    service: idService,
                    name: "Subtitle"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("Connect2_LegacyShared.Reusable.ConnectBlankSlate.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.languageResources", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.Reusable.ConnectBlankSlate.mvc$debugger"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedLanguageResources, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_Reusable_ConnectBlankSlate_mvc_Debugger) {
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
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:1Cq57rPx+0OeWMzetLyzsA:/NRWebFlows.ETpwt426gkGMinqmYFovCg/NodesShownInESpaceTree.1Cq57rPx+0OeWMzetLyzsA:nM6oxmNcRU1b4jx_q92TBA", "Connect2_LegacyShared", "ConnectBlankSlate", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:1Cq57rPx+0OeWMzetLyzsA", callContext.id);
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

define("Connect2_LegacyShared.Reusable.ConnectBlankSlate.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "ObkXMsrbjUynzdgAIXSFcA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Image"));
                })(varBag.model, idService);
            }
        },
        "7yiHkrR+SEOKxltXDKw56A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Title"));
                })(varBag.model, idService);
            }
        },
        "MU5htjYoAkSNw9PZiAVfQQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Subtitle"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});