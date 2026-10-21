define("UBTConnect.App_Profile.Profile_HouseholdPreview.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "Connect_Household_CS.model", "APIDomain_Directory_IS.model", "UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$model", "UBTConnect.Directory_Household.HouseholdDetails_Block.mvc$model", "UBTConnect.model$HouseholdPreviewStructureRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "Connect_Household_CS.model$UI_AccountFormRec", "UBTConnect.referencesHealth$Connect_Household_CS", "Connect_Household_CS.model$UI_AccountForm_PersonalInformationRec", "UBTConnect.model$TextTextTextCustom_Address_ItemListRecord", "APIDomain_Directory_IS.model$Custom_Address_ItemRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnect.model$Custom_Address_ItemList", "Connect_Household_CS.model$UI_AccountForm_ContactInformationRec", "Connect_Household_CS.model$UI_AccountForm_IdentificationInformationRec"], function(OutSystems, UBTConnectModel, UBTConnectLibraryModel, Connect_Household_CSModel, APIDomain_Directory_ISModel, UBTConnectLibrary_ConnectPatterns_BottomSheet_mvcModel, UBTConnect_Directory_Household_HouseholdDetails_Block_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("HouseholdId", "householdIdIn", "HouseholdId", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("_householdIdInDataFetchStatus", "_householdIdInDataFetchStatus", "_householdIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("Preview", "previewIn", "Preview", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.HouseholdPreviewStructureRec());
                }, false, UBTConnectModel.HouseholdPreviewStructureRec),
                this.attr("_previewInDataFetchStatus", "_previewInDataFetchStatus", "_previewInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = (UBTConnectLibrary_ConnectPatterns_BottomSheet_mvcModel.hasValidationWidgets || UBTConnect_Directory_Household_HouseholdDetails_Block_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("HouseholdId" in inputs) {
                this.variables.householdIdIn = inputs.HouseholdId;
                if ("_householdIdInDataFetchStatus" in inputs) {
                    this.variables._householdIdInDataFetchStatus = inputs._householdIdInDataFetchStatus;
                }

            }

            if ("Preview" in inputs) {
                this.variables.previewIn = inputs.Preview;
                if ("_previewInDataFetchStatus" in inputs) {
                    this.variables._previewInDataFetchStatus = inputs._previewInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "App_Profile.Profile_HouseholdPreview");
});
define("UBTConnect.App_Profile.Profile_HouseholdPreview.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "Connect_Household_CS.model", "APIDomain_Directory_IS.model", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Profile.Profile_HouseholdPreview.mvc$model", "UBTConnect.App_Profile.Profile_HouseholdPreview.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.Directory_Household.HouseholdDetails_Block.mvc$view", "UBTConnect.model$HouseholdPreviewStructureRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "Connect_Household_CS.model$UI_AccountFormRec", "UBTConnect.referencesHealth$Connect_Household_CS", "Connect_Household_CS.model$UI_AccountForm_PersonalInformationRec", "UBTConnect.model$TextTextTextCustom_Address_ItemListRecord", "APIDomain_Directory_IS.model$Custom_Address_ItemRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnect.model$Custom_Address_ItemList", "Connect_Household_CS.model$UI_AccountForm_ContactInformationRec", "Connect_Household_CS.model$UI_AccountForm_IdentificationInformationRec"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, Connect_Household_CSModel, APIDomain_Directory_ISModel, React, OSView, UBTConnect_App_Profile_Profile_HouseholdPreview_mvc_model, UBTConnect_App_Profile_Profile_HouseholdPreview_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_view, OSWidgets, UBTConnect_Directory_Household_HouseholdDetails_Block_mvc_view) {
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
        View.displayName = "App_Profile.Profile_HouseholdPreview";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_view, UBTConnect_Directory_Household_HouseholdDetails_Block_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_App_Profile_Profile_HouseholdPreview_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_App_Profile_Profile_HouseholdPreview_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_view, {
                inputs: {
                    Content_Padding: model.getCachedValue(idService.getId("H6ITKgoFKkW4c19_kq4oag.Content_Padding"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                            rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.none;
                            return rec;
                        }();
                    }),
                    Title: "Preview Household Profile"
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    initialized$Action: function(idIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/BottomSheet Initialized");
                            controller.onInitialized$Action(idIn, controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
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
                    content: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                "inert": "",
                                style: "text-align: left;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(UBTConnect_Directory_Household_HouseholdDetails_Block_mvc_view, {
                            inputs: {
                                isEnabled: false,
                                HouseholdId: model.variables.householdIdIn,
                                _householdIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._householdIdInDataFetchStatus),
                                In_ShowKebabMenu: true,
                                Preview: model.variables.previewIn,
                                _previewInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._previewInDataFetchStatus)
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
                                uuid: "2",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                placeholder_CarouselTag: PlaceholderContent.Empty
                            },
                            _dependencies: []
                        }))];
                    }),
                    footer: PlaceholderContent.Empty
                },
                _dependencies: [asPrimitiveValue(model.variables.previewIn), asPrimitiveValue(model.variables._previewInDataFetchStatus), asPrimitiveValue(model.variables._householdIdInDataFetchStatus), asPrimitiveValue(model.variables.householdIdIn)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect.App_Profile.Profile_HouseholdPreview.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "Connect_Household_CS.model", "APIDomain_Directory_IS.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_Profile.Profile_HouseholdPreview.mvc$debugger", "UBTConnect.model$HouseholdPreviewStructureRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "Connect_Household_CS.model$UI_AccountFormRec", "UBTConnect.referencesHealth$Connect_Household_CS", "Connect_Household_CS.model$UI_AccountForm_PersonalInformationRec", "UBTConnect.model$TextTextTextCustom_Address_ItemListRecord", "APIDomain_Directory_IS.model$Custom_Address_ItemRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnect.model$Custom_Address_ItemList", "Connect_Household_CS.model$UI_AccountForm_ContactInformationRec", "Connect_Household_CS.model$UI_AccountForm_IdentificationInformationRec"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, Connect_Household_CSModel, APIDomain_Directory_ISModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_Profile_Profile_HouseholdPreview_mvc_Debugger) {
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

        Controller.prototype.onInitialized$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:+Ecj6GgNgEOBGVT8iphmjQ:/NRWebFlows.+Ecj6GgNgEOBGVT8iphmjQ:bInaa6_gbF9cBaV75zFs2g", "UBTConnect", "App_Profile", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:UxUvX4IAU0eQjMvYfYv4BA:/NRWebFlows.+Ecj6GgNgEOBGVT8iphmjQ/NodesShownInESpaceTree.UxUvX4IAU0eQjMvYfYv4BA:Y+YPWwpKr7Sjmr8oa58aYQ", "UBTConnect", "Profile_HouseholdPreview", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:UxUvX4IAU0eQjMvYfYv4BA", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:+Ecj6GgNgEOBGVT8iphmjQ", callContext.id);
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

define("UBTConnect.App_Profile.Profile_HouseholdPreview.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "tSp1IeIQM0G_Q4FKr1K5Mw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.householdIdIn;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "p2AHDbGeuEmkPRr1FJE+NQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.previewIn;
            }
        },
        "Ko+kiUbvQEW2VZWHsrhXFw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "LO6V178iXUqLtL4x22atSg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_CarouselTag"));
                })(varBag.model, idService);
            }
        },
        "gE+B8nqSfEm1mzMiI38Z_g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Footer"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});