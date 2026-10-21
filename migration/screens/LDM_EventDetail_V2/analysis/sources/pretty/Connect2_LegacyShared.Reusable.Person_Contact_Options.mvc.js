define("Connect2_LegacyShared.Reusable.Person_Contact_Options.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model"], function(OutSystems, Connect2_LegacySharedModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("Phone", "phoneIn", "Phone", true, false, OS.DataTypes.DataTypes.PhoneNumber, function() {
                    return "";
                }, false),
                this.attr("_phoneInDataFetchStatus", "_phoneInDataFetchStatus", "_phoneInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("MobilePhone", "mobilePhoneIn", "MobilePhone", true, false, OS.DataTypes.DataTypes.PhoneNumber, function() {
                    return "";
                }, false),
                this.attr("_mobilePhoneInDataFetchStatus", "_mobilePhoneInDataFetchStatus", "_mobilePhoneInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("WorkPhone", "workPhoneIn", "WorkPhone", true, false, OS.DataTypes.DataTypes.PhoneNumber, function() {
                    return "";
                }, false),
                this.attr("_workPhoneInDataFetchStatus", "_workPhoneInDataFetchStatus", "_workPhoneInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("EmailAddress", "emailAddressIn", "EmailAddress", true, false, OS.DataTypes.DataTypes.Email, function() {
                    return "";
                }, false),
                this.attr("_emailAddressInDataFetchStatus", "_emailAddressInDataFetchStatus", "_emailAddressInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            if ("Phone" in inputs) {
                this.variables.phoneIn = inputs.Phone;
                if ("_phoneInDataFetchStatus" in inputs) {
                    this.variables._phoneInDataFetchStatus = inputs._phoneInDataFetchStatus;
                }

            }

            if ("MobilePhone" in inputs) {
                this.variables.mobilePhoneIn = inputs.MobilePhone;
                if ("_mobilePhoneInDataFetchStatus" in inputs) {
                    this.variables._mobilePhoneInDataFetchStatus = inputs._mobilePhoneInDataFetchStatus;
                }

            }

            if ("WorkPhone" in inputs) {
                this.variables.workPhoneIn = inputs.WorkPhone;
                if ("_workPhoneInDataFetchStatus" in inputs) {
                    this.variables._workPhoneInDataFetchStatus = inputs._workPhoneInDataFetchStatus;
                }

            }

            if ("EmailAddress" in inputs) {
                this.variables.emailAddressIn = inputs.EmailAddress;
                if ("_emailAddressInDataFetchStatus" in inputs) {
                    this.variables._emailAddressInDataFetchStatus = inputs._emailAddressInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Reusable.Person_Contact_Options");
});
define("Connect2_LegacyShared.Reusable.Person_Contact_Options.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.Reusable.Person_Contact_Options.mvc$model", "Connect2_LegacyShared.Reusable.Person_Contact_Options.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystems/ReactWidgets/Main"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, React, OSView, Connect2_LegacyShared_Reusable_Person_Contact_Options_mvc_model, Connect2_LegacyShared_Reusable_Person_Contact_Options_mvc_controller, Connect2_LegacySharedClientVariables, OSWidgets) {
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
        View.displayName = "Reusable.Person_Contact_Options";
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
                return Connect2_LegacyShared_Reusable_Person_Contact_Options_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_LegacyShared_Reusable_Person_Contact_Options_mvc_controller;
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
                style: "block-household-person-options",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Link, {
                enabled: ((model.variables.phoneIn) !== ("")),
                onClick: function() {
                    var eventHandlerContext = callContext.clone();
                    return OS.Flow.tryFinally(function() {
                        var varBag = {};
                        controller.pushDebuggerContext(eventHandlerContext);

                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Reusable/Person_Contact_Options/Link OnClick");
                        controller.callClicked$Action(model.variables.phoneIn, controller.callContext(eventHandlerContext));
                    }, function() {
                        controller.popDebuggerContext(eventHandlerContext);
                    });

                    ;
                },
                visible: ((model.variables.phoneIn) !== ("")),
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._phoneInDataFetchStatus),
                visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._phoneInDataFetchStatus)
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Call_Phone"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Icon, {
                icon: "phone",
                iconSize: /*FontSize*/ 0,
                style: "icon ",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))), React.createElement(OSWidgets.Link, {
                enabled: ((model.variables.mobilePhoneIn) !== ("")),
                onClick: function() {
                    var eventHandlerContext = callContext.clone();
                    return OS.Flow.tryFinally(function() {
                        var varBag = {};
                        controller.pushDebuggerContext(eventHandlerContext);

                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Reusable/Person_Contact_Options/Link OnClick");
                        controller.callClicked$Action(model.variables.mobilePhoneIn, controller.callContext(eventHandlerContext));
                    }, function() {
                        controller.popDebuggerContext(eventHandlerContext);
                    });

                    ;
                },
                visible: ((model.variables.mobilePhoneIn) !== ("")),
                _idProps: {
                    service: idService,
                    uuid: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._mobilePhoneInDataFetchStatus),
                visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._mobilePhoneInDataFetchStatus)
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: ("block-household-person-options-mobile" + " text-green-darker"),
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Call_Mobile"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Icon, {
                icon: "mobile",
                iconSize: /*FontSize*/ 0,
                style: "icon",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "6"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))), React.createElement(OSWidgets.Link, {
                enabled: ((model.variables.workPhoneIn) !== ("")),
                onClick: function() {
                    var eventHandlerContext = callContext.clone();
                    return OS.Flow.tryFinally(function() {
                        var varBag = {};
                        controller.pushDebuggerContext(eventHandlerContext);

                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Reusable/Person_Contact_Options/Link OnClick");
                        controller.callClicked$Action(model.variables.workPhoneIn, controller.callContext(eventHandlerContext));
                    }, function() {
                        controller.popDebuggerContext(eventHandlerContext);
                    });

                    ;
                },
                visible: ((model.variables.workPhoneIn) !== ("")),
                _idProps: {
                    service: idService,
                    uuid: "7"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._workPhoneInDataFetchStatus),
                visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._workPhoneInDataFetchStatus)
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: ("block-household-person-options-work" + " text-dark-blue"),
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Call_Work"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Icon, {
                icon: "briefcase",
                iconSize: /*FontSize*/ 0,
                style: "icon",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "9"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))), React.createElement(OSWidgets.Link, {
                enabled: ((model.variables.emailAddressIn) !== ("")),
                onClick: function() {
                    var eventHandlerContext = callContext.clone();
                    return OS.Flow.tryFinally(function() {
                        var varBag = {};
                        controller.pushDebuggerContext(eventHandlerContext);

                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Reusable/Person_Contact_Options/Link OnClick");
                        controller.emailClicked$Action(model.variables.emailAddressIn, controller.callContext(eventHandlerContext));
                    }, function() {
                        controller.popDebuggerContext(eventHandlerContext);
                    });

                    ;
                },
                visible: ((model.variables.emailAddressIn) !== ("")),
                _idProps: {
                    service: idService,
                    uuid: "10"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._emailAddressInDataFetchStatus),
                visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._emailAddressInDataFetchStatus)
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: ("block-household-person-options-email" + " text-dark-blue"),
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Email"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Icon, {
                icon: "envelope",
                iconSize: /*FontSize*/ 0,
                style: "icon",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "12"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("Connect2_LegacyShared.Reusable.Person_Contact_Options.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.languageResources", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.Reusable.Person_Contact_Options.mvc$debugger"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedLanguageResources, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_Reusable_Person_Contact_Options_mvc_Debugger) {
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

        Controller.prototype.callClicked$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.emailClicked$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:ETpwt426gkGMinqmYFovCg:/NRWebFlows.ETpwt426gkGMinqmYFovCg:+3SGrhAl8EdnlQpf6QG84w", "Connect2_LegacyShared", "Reusable", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:Zf8pohTZzka2gr_BCt+XUA:/NRWebFlows.ETpwt426gkGMinqmYFovCg/NodesShownInESpaceTree.Zf8pohTZzka2gr_BCt+XUA:6gpoeHwotu2Ft1VR7Q3vwQ", "Connect2_LegacyShared", "Person_Contact_Options", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:Zf8pohTZzka2gr_BCt+XUA", callContext.id);
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

define("Connect2_LegacyShared.Reusable.Person_Contact_Options.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "lfo1r4HzIk6IESArgMEEYw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.phoneIn;
            },
            dataType: OS.DataTypes.DataTypes.PhoneNumber
        },
        "K7ZX1clPrE+gzIou8xrIPQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.mobilePhoneIn;
            },
            dataType: OS.DataTypes.DataTypes.PhoneNumber
        },
        "JilqHoZ1+UmFi1sPfLmoSw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.workPhoneIn;
            },
            dataType: OS.DataTypes.DataTypes.PhoneNumber
        },
        "Q9+OLMlsDU+6RJiLxMC66w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.emailAddressIn;
            },
            dataType: OS.DataTypes.DataTypes.Email
        },
        "NF+GU5keukuf2WuJ5s8xFQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Call_Phone"));
                })(varBag.model, idService);
            }
        },
        "8BFD567R_EySMj1d_XtnJA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Call_Mobile"));
                })(varBag.model, idService);
            }
        },
        "BChVZvgroUqe1htQQnXBeg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Call_Work"));
                })(varBag.model, idService);
            }
        },
        "FkzOZmf_vkqbhNQ7QBCMkg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Email"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});