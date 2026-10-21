define("UBTConnect.Directory_Caroussel.EntitiesCarouse_lSupperMeetingDetails.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc$model"], function(OutSystems, UBTConnectModel, UBTConnect_Directory_SupperMeetings_SupperMeeting_DetailsBlock_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("In_SubdivisionId", "in_SubdivisionIdIn", "In_SubdivisionId", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("_in_SubdivisionIdInDataFetchStatus", "_in_SubdivisionIdInDataFetchStatus", "_in_SubdivisionIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = UBTConnect_Directory_SupperMeetings_SupperMeeting_DetailsBlock_mvcModel.hasValidationWidgets;
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_SubdivisionId" in inputs) {
                this.variables.in_SubdivisionIdIn = inputs.In_SubdivisionId;
                if ("_in_SubdivisionIdInDataFetchStatus" in inputs) {
                    this.variables._in_SubdivisionIdInDataFetchStatus = inputs._in_SubdivisionIdInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Directory_Caroussel.EntitiesCarouse_lSupperMeetingDetails");
});
define("UBTConnect.Directory_Caroussel.EntitiesCarouse_lSupperMeetingDetails.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Caroussel.EntitiesCarouse_lSupperMeetingDetails.mvc$model", "UBTConnect.Directory_Caroussel.EntitiesCarouse_lSupperMeetingDetails.mvc$controller", "UBTConnect.clientVariables", "UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc$view", "OutSystems/ReactWidgets/Main"], function(OutSystems, UBTConnectModel, UBTConnectController, React, OSView, UBTConnect_Directory_Caroussel_EntitiesCarouse_lSupperMeetingDetails_mvc_model, UBTConnect_Directory_Caroussel_EntitiesCarouse_lSupperMeetingDetails_mvc_controller, UBTConnectClientVariables, UBTConnect_Directory_SupperMeetings_SupperMeeting_DetailsBlock_mvc_view, OSWidgets) {
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
        View.displayName = "Directory_Caroussel.EntitiesCarouse_lSupperMeetingDetails";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_Directory_SupperMeetings_SupperMeeting_DetailsBlock_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Directory_Caroussel_EntitiesCarouse_lSupperMeetingDetails_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Directory_Caroussel_EntitiesCarouse_lSupperMeetingDetails_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnect_Directory_SupperMeetings_SupperMeeting_DetailsBlock_mvc_view, {
                inputs: {
                    In_SubdivsionId: model.variables.in_SubdivisionIdIn,
                    _in_SubdivsionIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SubdivisionIdInDataFetchStatus)
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
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    placeholder_CarouselTag: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.placeholder_CarouselTag,
                            _idProps: {
                                service: idService,
                                name: "Placeholder_CarouselTag"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    })
                }
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect.Directory_Caroussel.EntitiesCarouse_lSupperMeetingDetails.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Caroussel.EntitiesCarouse_lSupperMeetingDetails.mvc$debugger"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Caroussel_EntitiesCarouse_lSupperMeetingDetails_mvc_Debugger) {
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
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:3kpgKiDrmECLIcldYvdd+A:/NRWebFlows.3kpgKiDrmECLIcldYvdd+A:uGYi+UeKE4QciHgKGLa3sw", "UBTConnect", "Directory_Caroussel", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:2FjsKUUcf0isFnD2Sg0sqQ:/NRWebFlows.3kpgKiDrmECLIcldYvdd+A/NodesShownInESpaceTree.2FjsKUUcf0isFnD2Sg0sqQ:0dubYrFZWs4Nl5jh7NASmw", "UBTConnect", "EntitiesCarouse_lSupperMeetingDetails", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:2FjsKUUcf0isFnD2Sg0sqQ", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:3kpgKiDrmECLIcldYvdd+A", callContext.id);
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
            return UBTConnectController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});

define("UBTConnect.Directory_Caroussel.EntitiesCarouse_lSupperMeetingDetails.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "JCvnr85O6E+lwjnpCMOBkQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_SubdivisionIdIn;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "9ajSQfGKEEiH6e5vG+6uAw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_CarouselTag"));
                })(varBag.model, idService);
            }
        },
        "v_i7FvrVIE28YP50DB3pXw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_CarouselTag"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});