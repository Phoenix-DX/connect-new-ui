define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_PillItem.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model"], function(OutSystems, Connect2_OrbitMobile_MUIModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("In_IsDisabled", "in_IsDisabledIn", "In_IsDisabled", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_IsDisabledInDataFetchStatus", "_in_IsDisabledInDataFetchStatus", "_in_IsDisabledInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_IconClass", "in_IconClassIn", "In_IconClass", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_IconClassInDataFetchStatus", "_in_IconClassInDataFetchStatus", "_in_IconClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_PillText", "in_PillTextIn", "In_PillText", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_PillTextInDataFetchStatus", "_in_PillTextInDataFetchStatus", "_in_PillTextInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_IsSmallIcon", "in_IsSmallIconIn", "In_IsSmallIcon", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_IsSmallIconInDataFetchStatus", "_in_IsSmallIconInDataFetchStatus", "_in_IsSmallIconInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_ExtendedClass", "in_ExtendedClassIn", "In_ExtendedClass", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_ExtendedClassInDataFetchStatus", "_in_ExtendedClassInDataFetchStatus", "_in_ExtendedClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_ExtendedStyle", "in_ExtendedStyleIn", "In_ExtendedStyle", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_ExtendedStyleInDataFetchStatus", "_in_ExtendedStyleInDataFetchStatus", "_in_ExtendedStyleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            if ("In_IsDisabled" in inputs) {
                this.variables.in_IsDisabledIn = inputs.In_IsDisabled;
                if ("_in_IsDisabledInDataFetchStatus" in inputs) {
                    this.variables._in_IsDisabledInDataFetchStatus = inputs._in_IsDisabledInDataFetchStatus;
                }

            }

            if ("In_IconClass" in inputs) {
                this.variables.in_IconClassIn = inputs.In_IconClass;
                if ("_in_IconClassInDataFetchStatus" in inputs) {
                    this.variables._in_IconClassInDataFetchStatus = inputs._in_IconClassInDataFetchStatus;
                }

            }

            if ("In_PillText" in inputs) {
                this.variables.in_PillTextIn = inputs.In_PillText;
                if ("_in_PillTextInDataFetchStatus" in inputs) {
                    this.variables._in_PillTextInDataFetchStatus = inputs._in_PillTextInDataFetchStatus;
                }

            }

            if ("In_IsSmallIcon" in inputs) {
                this.variables.in_IsSmallIconIn = inputs.In_IsSmallIcon;
                if ("_in_IsSmallIconInDataFetchStatus" in inputs) {
                    this.variables._in_IsSmallIconInDataFetchStatus = inputs._in_IsSmallIconInDataFetchStatus;
                }

            }

            if ("In_ExtendedClass" in inputs) {
                this.variables.in_ExtendedClassIn = inputs.In_ExtendedClass;
                if ("_in_ExtendedClassInDataFetchStatus" in inputs) {
                    this.variables._in_ExtendedClassInDataFetchStatus = inputs._in_ExtendedClassInDataFetchStatus;
                }

            }

            if ("In_ExtendedStyle" in inputs) {
                this.variables.in_ExtendedStyleIn = inputs.In_ExtendedStyle;
                if ("_in_ExtendedStyleInDataFetchStatus" in inputs) {
                    this.variables._in_ExtendedStyleInDataFetchStatus = inputs._in_ExtendedStyleInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Orbit_Blocks.HostSurvey_PillItem");
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_PillItem.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_PillItem.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_PillItem.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets) {
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
        View.displayName = "Orbit_Blocks.HostSurvey_PillItem";
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
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_controller;
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
                    style: model.getCachedValue(idService.getId("egiUihI2K0ebY13+C0J5AA.style"), function() {
                        return ((model.variables.in_IsDisabledIn) ? ("") : (model.variables.in_ExtendedStyleIn));
                    }, function() {
                        return model.variables.in_IsDisabledIn;
                    }, function() {
                        return model.variables.in_ExtendedStyleIn;
                    })
                },
                style: model.getCachedValue(idService.getId("egiUihI2K0ebY13+C0J5AA.Style"), function() {
                    return ("orbit-host-survey-pill" + ((model.variables.in_IsDisabledIn) ? (" orbit-host-survey-pill-disabled") : (((((model.variables.in_ExtendedClassIn) !== (""))) ? ((" " + model.variables.in_ExtendedClassIn)) : ("")))));
                }, function() {
                    return model.variables.in_IsDisabledIn;
                }, function() {
                    return model.variables.in_ExtendedClassIn;
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsDisabledInDataFetchStatus, model.variables._in_ExtendedClassInDataFetchStatus)
            }, React.createElement(OSWidgets.Icon, {
                extendedProperties: {
                    className: model.getCachedValue(idService.getId("I5SeKVXsW0uLMYehIdS4UA.class"), function() {
                        return (("icon " + model.variables.in_IconClassIn) + ((model.variables.in_IsSmallIconIn) ? (" font-size-xs") : (" font-size-base")));
                    }, function() {
                        return model.variables.in_IconClassIn;
                    }, function() {
                        return model.variables.in_IsSmallIconIn;
                    })
                },
                icon: "flag",
                iconSize: /*FontSize*/ 0,
                style: "\"icon\"",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Expression, {
                style: "margin-left-s font-size-xs line-height-xs white-space-nowrap",
                value: model.variables.in_PillTextIn,
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_PillTextInDataFetchStatus)
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_PillItem.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_PillItem.mvc$debugger"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_Debugger) {
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
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ:tepBwzTPFZZUt4uwi04GJA", "Connect2_OrbitMobile_MUI", "Orbit_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:UW_CfBJGzUWR4+uI89BXGg:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.UW_CfBJGzUWR4+uI89BXGg:BFCmWp6YlZihelRb20ICSQ", "Connect2_OrbitMobile_MUI", "HostSurvey_PillItem", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:UW_CfBJGzUWR4+uI89BXGg", callContext.id);
            OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ", callContext.id);
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
            return Connect2_OrbitMobile_MUIController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, Connect2_OrbitMobile_MUILanguageResources);
});

define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_PillItem.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "4+LjXRb5kkCRrNjjEXk1ZA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_IsDisabledIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "Ak64tDgHQ0OZAUR6V8RkAQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_IconClassIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "hPERQ_41j0CYaeZkok3OaQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_PillTextIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "uE4IE2v22EmMhDN+eyF5UQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_IsSmallIconIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "gx2rZpeChUiA_bdCJd8YKA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_ExtendedClassIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "ldEzeORRS0Khq9gAv2HJIw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_ExtendedStyleIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});