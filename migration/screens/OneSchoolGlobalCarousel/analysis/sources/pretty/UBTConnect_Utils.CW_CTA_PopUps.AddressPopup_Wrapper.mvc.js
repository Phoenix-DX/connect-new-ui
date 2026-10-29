define("UBTConnect_Utils.CW_CTA_PopUps.AddressPopup_Wrapper.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model", "UBTConnectLibrary.model", "UBTJavaScriptUtils.controller", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.controller", "UBT_AppManager.controller", "UBTConnect_Utils.controller", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnect_Utils.CW_CTA_PopUps.AddressPopup.mvc$model", "APIDomain_Directory_IS.model$Directory_CoordinatesRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIDomain_Directory_IS", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTJavaScriptUtils.controller$JSUtils_CopyToClipboard", "UBTConnect_Utils.referencesHealth$UBTJavaScriptUtils", "Connect2_AppLauncherPlugin.model$LauncherParametersRec", "UBTConnect_Utils.referencesHealth$Connect2_AppLauncherPlugin", "Connect2_AppLauncherPlugin.controller$CanLaunchWithData", "Connect2_AppLauncherPlugin.controller$CheckAppLauncherPlugin", "Connect2_AppLauncherPlugin.model$LauncherReturnRec", "Connect2_AppLauncherPlugin.controller$LaunchWithData", "UBT_AppManager.controller$AppManager_GetIsNative", "UBTConnect_Utils.referencesHealth$UBT_AppManager", "UBTConnect_Utils.controller$CleanAddressForMaps"], function(OutSystems, UBTConnect_UtilsModel, APIDomain_Directory_ISModel, UBTConnectLibraryModel, UBTJavaScriptUtilsController, Connect2_AppLauncherPluginModel, Connect2_AppLauncherPluginController, UBT_AppManagerController, UBTConnect_UtilsController, UBTConnectLibrary_BasePatterns_CustomText_mvcModel, UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("FontSize", "fontSizeVar", "FontSize", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return UBTConnect_UtilsModel.staticEntities.uBT_FontSize.small;
                }, false),
                this.attr("IsLocationPopupOpen", "isLocationPopupOpenVar", "IsLocationPopupOpen", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("IsMapsAvailable", "isMapsAvailableVar", "IsMapsAvailable", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("MapsPackageName", "mapsPackageNameVar", "MapsPackageName", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "com.google.android.apps.maps";
                }, false),
                this.attr("isUsingText", "isUsingTextVar", "isUsingText", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("In_Address", "in_AddressIn", "In_Address", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_AddressInDataFetchStatus", "_in_AddressInDataFetchStatus", "_in_AddressInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("IsEnabled", "isEnabledIn", "IsEnabled", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return true;
                }, false),
                this.attr("_isEnabledInDataFetchStatus", "_isEnabledInDataFetchStatus", "_isEnabledInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("IconVisible", "iconVisibleIn", "IconVisible", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return true;
                }, false),
                this.attr("_iconVisibleInDataFetchStatus", "_iconVisibleInDataFetchStatus", "_iconVisibleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_Coordinates", "in_CoordinatesIn", "In_Coordinates", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new APIDomain_Directory_ISModel.Directory_CoordinatesRec());
                }, false, APIDomain_Directory_ISModel.Directory_CoordinatesRec),
                this.attr("_in_CoordinatesInDataFetchStatus", "_in_CoordinatesInDataFetchStatus", "_in_CoordinatesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = (UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets || UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_Address" in inputs) {
                this.variables.in_AddressIn = inputs.In_Address;
                if ("_in_AddressInDataFetchStatus" in inputs) {
                    this.variables._in_AddressInDataFetchStatus = inputs._in_AddressInDataFetchStatus;
                }

            }

            if ("IsEnabled" in inputs) {
                this.variables.isEnabledIn = inputs.IsEnabled;
                if ("_isEnabledInDataFetchStatus" in inputs) {
                    this.variables._isEnabledInDataFetchStatus = inputs._isEnabledInDataFetchStatus;
                }

            }

            if ("IconVisible" in inputs) {
                this.variables.iconVisibleIn = inputs.IconVisible;
                if ("_iconVisibleInDataFetchStatus" in inputs) {
                    this.variables._iconVisibleInDataFetchStatus = inputs._iconVisibleInDataFetchStatus;
                }

            }

            if ("In_Coordinates" in inputs) {
                this.variables.in_CoordinatesIn = inputs.In_Coordinates;
                if ("_in_CoordinatesInDataFetchStatus" in inputs) {
                    this.variables._in_CoordinatesInDataFetchStatus = inputs._in_CoordinatesInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "CW_CTA_PopUps.AddressPopup_Wrapper");
});
define("UBTConnect_Utils.CW_CTA_PopUps.AddressPopup_Wrapper.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "APIDomain_Directory_IS.model", "UBTConnectLibrary.model", "UBTJavaScriptUtils.controller", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.controller", "UBT_AppManager.controller", "react", "OutSystems/ReactView/Main", "UBTConnect_Utils.CW_CTA_PopUps.AddressPopup_Wrapper.mvc$model", "UBTConnect_Utils.CW_CTA_PopUps.AddressPopup_Wrapper.mvc$controller", "UBTConnect_Utils.clientVariables", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect_Utils.CW_CTA_PopUps.AddressPopup.mvc$view", "APIDomain_Directory_IS.model$Directory_CoordinatesRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIDomain_Directory_IS", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTJavaScriptUtils.controller$JSUtils_CopyToClipboard", "UBTConnect_Utils.referencesHealth$UBTJavaScriptUtils", "Connect2_AppLauncherPlugin.model$LauncherParametersRec", "UBTConnect_Utils.referencesHealth$Connect2_AppLauncherPlugin", "Connect2_AppLauncherPlugin.controller$CanLaunchWithData", "Connect2_AppLauncherPlugin.controller$CheckAppLauncherPlugin", "Connect2_AppLauncherPlugin.model$LauncherReturnRec", "Connect2_AppLauncherPlugin.controller$LaunchWithData", "UBT_AppManager.controller$AppManager_GetIsNative", "UBTConnect_Utils.referencesHealth$UBT_AppManager", "UBTConnect_Utils.controller$CleanAddressForMaps"], function(OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, APIDomain_Directory_ISModel, UBTConnectLibraryModel, UBTJavaScriptUtilsController, Connect2_AppLauncherPluginModel, Connect2_AppLauncherPluginController, UBT_AppManagerController, React, OSView, UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_Wrapper_mvc_model, UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_Wrapper_mvc_controller, UBTConnect_UtilsClientVariables, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, OSWidgets, UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_mvc_view) {
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
        View.displayName = "CW_CTA_PopUps.AddressPopup_Wrapper";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_Wrapper_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_Wrapper_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                inputs: {
                    InlineIcon: model.getCachedValue(idService.getId("5w5WQxd7P06Hbx4kJiEMPQ.InlineIcon"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.InlineIconRec();
                            rec.iconIdAttr = (((model.variables.iconVisibleIn && ((OS.BuiltinFunctions.trim(model.variables.in_AddressIn)) !== ("")))) ? (UBTConnect_UtilsModel.staticEntities.uBT_Icons.locationOnFill) : (OS.BuiltinFunctions.nullTextIdentifier()));
                            rec.iconSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_IconSize.nonStandard_16;
                            rec.spacingSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.extraSmall;
                            rec.iconColorIdAttr = ((model.variables.isEnabledIn) ? (UBTConnect_UtilsModel.staticEntities.uBT_Color.primary) : (UBTConnect_UtilsModel.staticEntities.uBT_Color.neutral7));
                            return rec;
                        }();
                    }, function() {
                        return model.variables.iconVisibleIn;
                    }, function() {
                        return model.variables.in_AddressIn;
                    }, function() {
                        return model.variables.isEnabledIn;
                    }),
                    _inlineIconInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._iconVisibleInDataFetchStatus, model.variables._in_AddressInDataFetchStatus, model.variables._isEnabledInDataFetchStatus),
                    In_Text: model.variables.in_AddressIn,
                    _in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_AddressInDataFetchStatus),
                    In_TextOptions: model.getCachedValue(idService.getId("5w5WQxd7P06Hbx4kJiEMPQ.In_TextOptions"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.TextOptionsRec();
                            rec.colorAttr = ((model.variables.isEnabledIn) ? (UBTConnect_UtilsModel.staticEntities.uBT_Color.primary) : (UBTConnect_UtilsModel.staticEntities.uBT_Color.neutral7));
                            rec.fontSizeAttr = model.variables.fontSizeVar;
                            rec.fontWeightAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontWeight.regular;
                            rec.isUnderlinedAttr = true;
                            return rec;
                        }();
                    }, function() {
                        return model.variables.isEnabledIn;
                    }, function() {
                        return model.variables.fontSizeVar;
                    }),
                    _in_TextOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnabledInDataFetchStatus)
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    clicked$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "BasePatterns/CustomText Clicked");
                            controller.onClick_Address$Action(controller.callContext(eventHandlerContext));
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
                _dependencies: []
            }), React.createElement(UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_mvc_view, {
                inputs: {
                    In_ContactPopupData: model.getCachedValue(idService.getId("vfSphaFboUKuC7EMtP9YCQ.In_ContactPopupData"), function() {
                        return function() {
                            var rec = new UBTConnect_UtilsModel.ContactPopupDataRec();
                            rec.actionNameAttr = "Open Location";
                            rec.nameAttr = "";
                            rec.localityAttr = "";
                            rec.timezoneNameAttr = "";
                            rec.timezoneOffsetAttr = 0;
                            rec.showPopupAttr = model.variables.isLocationPopupOpenVar;
                            rec.showTimezoneAttr = false;
                            rec.showImageAttr = false;
                            return rec;
                        }();
                    }, function() {
                        return model.variables.isLocationPopupOpenVar;
                    }),
                    ShowGoogleMaps: model.variables.isMapsAvailableVar
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    event_OpenInGoogleMaps$Action: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_CTA_PopUps/AddressPopup Event_OpenInGoogleMaps");
                                return controller.handler_OpenInMapsOrGoogleMaps$Action("", true, controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });
                        });;
                    },
                    event_CopyAddress$Action: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_CTA_PopUps/AddressPopup Event_CopyAddress");
                                return controller.handler_CopyAddress$Action(controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });
                        });;
                    },
                    event_OpenInMaps$Action: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_CTA_PopUps/AddressPopup Event_OpenInMaps");
                                return controller.handler_OpenInMapsOrGoogleMaps$Action("", false, controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });
                        });;
                    },
                    event_Cancel$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_CTA_PopUps/AddressPopup Event_Cancel");
                            controller.handler_AddressPopupEvent_Cancel$Action(controller.callContext(eventHandlerContext));
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
                    uuid: "1",
                    alias: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect_Utils.CW_CTA_PopUps.AddressPopup_Wrapper.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "APIDomain_Directory_IS.model", "UBTConnectLibrary.model", "UBTJavaScriptUtils.controller", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.controller", "UBT_AppManager.controller", "UBTConnect_Utils.languageResources", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.CW_CTA_PopUps.AddressPopup_Wrapper.mvc$debugger", "APIDomain_Directory_IS.model$Directory_CoordinatesRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$APIDomain_Directory_IS", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTJavaScriptUtils.controller$JSUtils_CopyToClipboard", "UBTConnect_Utils.referencesHealth$UBTJavaScriptUtils", "Connect2_AppLauncherPlugin.model$LauncherParametersRec", "UBTConnect_Utils.referencesHealth$Connect2_AppLauncherPlugin", "Connect2_AppLauncherPlugin.controller$CanLaunchWithData", "Connect2_AppLauncherPlugin.controller$CheckAppLauncherPlugin", "Connect2_AppLauncherPlugin.model$LauncherReturnRec", "Connect2_AppLauncherPlugin.controller$LaunchWithData", "UBT_AppManager.controller$AppManager_GetIsNative", "UBTConnect_Utils.referencesHealth$UBT_AppManager", "UBTConnect_Utils.controller$CleanAddressForMaps"], function(OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, APIDomain_Directory_ISModel, UBTConnectLibraryModel, UBTJavaScriptUtilsController, Connect2_AppLauncherPluginModel, Connect2_AppLauncherPluginController, UBT_AppManagerController, UBTConnect_UtilsLanguageResources, UBTConnect_UtilsClientVariables, UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_Wrapper_mvc_Debugger) {
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
        Controller.prototype._onClick_Address$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_Address");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:twFnHn9VGUGMKxiAL2NUHQ:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg/NodesShownInESpaceTree.rJoRvh8pXkOBKJquY_YjTg/ClientActions.twFnHn9VGUGMKxiAL2NUHQ:Pa1EPLwZRZMyAPHM9dkhxg", "UBTConnect_Utils", "OnClick_Address", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:tI+fQhOD+0G6RqwRZW6X8g", callContext.id);
                // Has Coordinates
                if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:3YdvOrWTbkOk2pxH44P2kw", callContext.id) && (((OS.BuiltinFunctions.decimalToText(model.variables.in_CoordinatesIn.longitudeAttr)) !== ("")) && ((OS.BuiltinFunctions.decimalToText(model.variables.in_CoordinatesIn.latitudeAttr)) !== (""))))) {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Pd96AWV6m0enmjlPoiq_zQ", callContext.id);
                    // Execute Action: ToggleLocationPopup
                    controller._toggleLocationPopup$Action(callContext);
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Y3vFoAIuNUmTPMnVeNrW4Q", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:gkMTowuPLkaK3uDiSrjsHg", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:twFnHn9VGUGMKxiAL2NUHQ", callContext.id);
            }

        };
        Controller.prototype._handler_CopyAddress$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_CopyAddress");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:vrNLld1M80aOqRUjvfOOIw:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg/NodesShownInESpaceTree.rJoRvh8pXkOBKJquY_YjTg/ClientActions.vrNLld1M80aOqRUjvfOOIw:0t0z_Rb+tnZ9r8g366MkAA", "UBTConnect_Utils", "Handler_CopyAddress", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:WQzUkZxosE+30fL+zxodhQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:EQvtumIV2EWj7mL1N_e51A", callContext.id);
                // Execute Action: JSUtils_CopyToClipboard
                model.flush();
                return UBTJavaScriptUtilsController.default.jSUtils_CopyToClipboard$Action(model.variables.in_AddressIn, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Vx7kja6M60KefORKW5+2_w", callContext.id);
                    // Execute Action: ToggleLocationPopup
                    controller._toggleLocationPopup$Action(callContext);
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:HloC3rWo9EKMedVJE6m5jw", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:vrNLld1M80aOqRUjvfOOIw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:vrNLld1M80aOqRUjvfOOIw", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._toggleLocationPopup$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ToggleLocationPopup");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:gEHUnMJTeEelT1sqEkzHuQ:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg/NodesShownInESpaceTree.rJoRvh8pXkOBKJquY_YjTg/ClientActions.gEHUnMJTeEelT1sqEkzHuQ:86K3lhe_AuAE_FMaSTDffw", "UBTConnect_Utils", "ToggleLocationPopup", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ChCM9Q7tWUefRHnAKygAuA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:dQzAy7e7S0CnOhV1jmDkJA", callContext.id);
                // IsLocationPopupOpen = notIsLocationPopupOpen
                model.variables.isLocationPopupOpenVar = !(model.variables.isLocationPopupOpenVar);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:eHMDkkRGv0WvpSIIHG8z0w", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:gEHUnMJTeEelT1sqEkzHuQ", callContext.id);
            }

        };
        Controller.prototype._screenEvent_OnReady$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ScreenEvent_OnReady");
            callContext = controller.callContext(callContext);
            var canLaunchWithData_GoogleMpasVar = new OS.DataTypes.VariableHolder();
            var checkAppLauncherPluginVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.canLaunchWithData_GoogleMpasVar = canLaunchWithData_GoogleMpasVar;
            varBag.checkAppLauncherPluginVar = checkAppLauncherPluginVar;
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:TMK4t8+pxkSxYMv4zG5jCA:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg/NodesShownInESpaceTree.rJoRvh8pXkOBKJquY_YjTg/ClientActions.TMK4t8+pxkSxYMv4zG5jCA:htBr2nvukVrMnmq_R_tRow", "UBTConnect_Utils", "ScreenEvent_OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:q0Me4Ll_t0+EZV1AYXK1pg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:p8_R5Q4MQ0G5JRvvR09UXw", callContext.id) && true)) {
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:6gofP_VeHkeJSx_yQ6znLQ", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:NzbTlxSMO0+Lehrd3kfePA", callContext.id);
                        // Execute Action: CheckAppLauncherPlugin
                        checkAppLauncherPluginVar.value = Connect2_AppLauncherPluginController.default.checkAppLauncherPlugin$Action(callContext);

                        return OS.Flow.executeSequence(function() {
                            if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:nyB1ff+uoE2AYf4UDOFJ+A", callContext.id) && checkAppLauncherPluginVar.value.isAvailableOut)) {
                                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:1Q1bSFDq1kuhTPEo2d67gw", callContext.id);
                                // Execute Action: CanLaunchWithData_GoogleMpas
                                model.flush();
                                return Connect2_AppLauncherPluginController.default.canLaunchWithData$Action(function() {
                                    var rec = new Connect2_AppLauncherPluginModel.LauncherParametersRec();
                                    rec.packageNameAttr = model.variables.mapsPackageNameVar;
                                    return rec;
                                }(), callContext).then(function(value) {
                                    canLaunchWithData_GoogleMpasVar.value = value;
                                }).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:701mcsLBy0O_u_1crnUHWg", callContext.id);
                                    // IsMapsAvailable = CanLaunchWithData_GoogleMpas.Success
                                    model.variables.isMapsAvailableVar = canLaunchWithData_GoogleMpasVar.value.successOut;
                                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:s6_L+E7J9EmgJCvSSMu+7w", callContext.id);
                                });
                            } else {
                                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:9CPwFTg94kGAxmX+8Tvopw", callContext.id);
                            }

                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:TMK4t8+pxkSxYMv4zG5jCA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:TMK4t8+pxkSxYMv4zG5jCA", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._handler_OpenInMapsOrGoogleMaps$Action = function(cleanAddressIn, isGoogleMapsIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_OpenInMapsOrGoogleMaps");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect_Utils.CW_CTA_PopUps.AddressPopup_Wrapper.Handler_OpenInMapsOrGoogleMaps$vars"))());
            vars.value.cleanAddressInLocal = cleanAddressIn;
            vars.value.isGoogleMapsInLocal = isGoogleMapsIn;
            var launchWithDataVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.launchWithDataVar = launchWithDataVar;
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:i07OyDSwtEutc6wWuldh0A:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg/NodesShownInESpaceTree.rJoRvh8pXkOBKJquY_YjTg/ClientActions.i07OyDSwtEutc6wWuldh0A:WxWuuLhvfDmkP3tuio+9JA", "UBTConnect_Utils", "Handler_OpenInMapsOrGoogleMaps", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:wB2zKETofE6UVXxXiyuSiw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:gF91FjHiLkW+FYxcq8owxw", callContext.id) && ((model.variables.in_AddressIn) !== ("")))) {
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:QYZk73bxVEyvJ18kOv_8kw", callContext.id);
                        // CleanAddress = CleanAddressForMaps(In_Address)
                        vars.value.cleanAddressInLocal = OutSystemsDebugger.handleFunctionCall(function() {
                            return UBTConnect_UtilsController.default.cleanAddressForMaps$Action(model.variables.in_AddressIn, callContext).addressSafeOut;
                        }, OS.DataTypes.DataTypes.Text, callContext.id);
                        if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:lJKjma_Bj0KSOwccoIwxBA", callContext.id) && ((model.variables.in_CoordinatesIn.useCoordinatesAttr && !(model.variables.in_CoordinatesIn.longitudeAttr.equals(OS.BuiltinFunctions.integerToDecimal(0)))) && !(model.variables.in_CoordinatesIn.latitudeAttr.equals(OS.BuiltinFunctions.integerToDecimal(0)))))) {
                            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:c5EbqvnzKUO+jvgaHm9DOQ", callContext.id);
                            // MapsAddress = In_Coordinates.Latitude + "," + In_Coordinates.Longitude
                            vars.value.mapsAddressVar = ((OS.BuiltinFunctions.decimalToText(model.variables.in_CoordinatesIn.latitudeAttr) + ",") + OS.BuiltinFunctions.decimalToText(model.variables.in_CoordinatesIn.longitudeAttr));
                        } else {
                            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:wiO0qsKR40+i0pFcHGVq8Q", callContext.id);
                            // MapsAddress = EncodeUrl
                            vars.value.mapsAddressVar = OS.BuiltinFunctions.encodeUrl(vars.value.cleanAddressInLocal);
                            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:wiO0qsKR40+i0pFcHGVq8Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                            // isUsingText = True
                            model.variables.isUsingTextVar = true;
                        }

                        return OS.Flow.executeSequence(function() {
                            if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:RqBZiwOA3U6tMW03UTkFog", callContext.id) && OutSystemsDebugger.handleFunctionCall(function() {
                                    return UBT_AppManagerController.default.appManager_GetIsNative$Action(callContext).isNativeOut;
                                }, OS.DataTypes.DataTypes.Boolean, callContext.id))) {
                                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:spNiiWE7nUKitoCEM0j0tg", callContext.id);
                                // MapsAddress = "geo:" + If + MapsAddress
                                vars.value.mapsAddressVar = (("geo:" + ((model.variables.isUsingTextVar) ? ("?q=") : (""))) + vars.value.mapsAddressVar);
                                return OS.Flow.executeSequence(function() {
                                    if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:HT4928W7tU2uRMnHdentog", callContext.id) && (model.variables.isMapsAvailableVar && vars.value.isGoogleMapsInLocal))) {
                                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:N1Z2hV0w5kKXy91BeDQRFQ", callContext.id);
                                        // Execute Action: LaunchWithData
                                        model.flush();
                                        return Connect2_AppLauncherPluginController.default.launchWithData$Action(function() {
                                            var rec = new Connect2_AppLauncherPluginModel.LauncherParametersRec();
                                            rec.packageNameAttr = model.variables.mapsPackageNameVar;
                                            rec.uriAttr = vars.value.mapsAddressVar;
                                            return rec;
                                        }(), callContext).then(function(value) {
                                            launchWithDataVar.value = value;
                                        }).then(function() {
                                            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:BiTZWztxPUmYe4sTOCZuFA", callContext.id);
                                        });
                                    } else {
                                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Qp4sF6kMnEaJy8mK9+wC2w", callContext.id);
                                        // Destination: /UBTConnect_Utils/
                                        return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(vars.value.mapsAddressVar, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                    }

                                });
                            } else {
                                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:0folHIyCJkGffN6wyyPiTQ", callContext.id);
                                // Destination: /UBTConnect_Utils/
                                return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(("https://maps.google.com/maps?q=" + vars.value.mapsAddressVar), {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                            }

                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Nxhz56PkxUWgD12Rdole_Q", callContext.id);
                        OS.FeedbackMessageService.showFeedbackMessage("Map is not available", /*Info*/ 0);
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Ls0OS1a7K0+LX4GJPouANw", callContext.id);
                        // Execute Action: ToggleLocationPopup
                        controller._toggleLocationPopup$Action(callContext);
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:3OY8oSlgNEujl1Bp45XJOA", callContext.id);
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:i07OyDSwtEutc6wWuldh0A", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:i07OyDSwtEutc6wWuldh0A", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect_Utils.CW_CTA_PopUps.AddressPopup_Wrapper.Handler_OpenInMapsOrGoogleMaps$vars", [{
            name: "CleanAddress",
            attrName: "cleanAddressInLocal",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "isGoogleMaps",
            attrName: "isGoogleMapsInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "MapsAddress",
            attrName: "mapsAddressVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._handler_AddressPopupEvent_Cancel$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_AddressPopupEvent_Cancel");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:gTyR+jGAWkK2VaKEjBsudg:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg/NodesShownInESpaceTree.rJoRvh8pXkOBKJquY_YjTg/ClientActions.gTyR+jGAWkK2VaKEjBsudg:HbpvD4hFBh7whukXBuc60A", "UBTConnect_Utils", "Handler_AddressPopupEvent_Cancel", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:9B_3a6ZSfkmxhvlmgg9GHg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:IhTBoXAhp0C21Utb+4DFOA", callContext.id);
                // Execute Action: ToggleLocationPopup
                controller._toggleLocationPopup$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:hrv5WZ8NRk2OyhNTeVuUbg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:gTyR+jGAWkK2VaKEjBsudg", callContext.id);
            }

        };

        Controller.prototype.onClick_Address$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_Address$Action, callContext);

        };
        Controller.prototype.handler_CopyAddress$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_CopyAddress$Action, callContext);

        };
        Controller.prototype.toggleLocationPopup$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._toggleLocationPopup$Action, callContext);

        };
        Controller.prototype.screenEvent_OnReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnReady$Action, callContext);

        };
        Controller.prototype.handler_OpenInMapsOrGoogleMaps$Action = function(cleanAddressIn, isGoogleMapsIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_OpenInMapsOrGoogleMaps$Action, callContext, cleanAddressIn, isGoogleMapsIn);

        };
        Controller.prototype.handler_AddressPopupEvent_Cancel$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_AddressPopupEvent_Cancel$Action, callContext);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:40BOH8zZHka5ciwmYfvqVg:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg:9C3kcfT08imn_yT0sR8WzQ", "UBTConnect_Utils", "CW_CTA_PopUps", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:rJoRvh8pXkOBKJquY_YjTg:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg/NodesShownInESpaceTree.rJoRvh8pXkOBKJquY_YjTg:3G5QIaJjsiWtzpN+fmX9og", "UBTConnect_Utils", "AddressPopup_Wrapper", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:rJoRvh8pXkOBKJquY_YjTg", callContext.id);
            OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:40BOH8zZHka5ciwmYfvqVg", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "CW_CTA_PopUps/AddressPopup_Wrapper On Ready");
                return controller.screenEvent_OnReady$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = null;
        Controller.prototype.handleError = function(ex) {
            return controller.handleError(ex);
        };
        Controller.checkPermissions = function() {};
        Controller.prototype.getDefaultTimeout = function() {
            return UBTConnect_UtilsController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnect_UtilsLanguageResources);
});

define("UBTConnect_Utils.CW_CTA_PopUps.AddressPopup_Wrapper.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "1Q1bSFDq1kuhTPEo2d67gw": {
            getter: function(varBag, idService) {
                return varBag.canLaunchWithData_GoogleMpasVar.value;
            }
        },
        "NzbTlxSMO0+Lehrd3kfePA": {
            getter: function(varBag, idService) {
                return varBag.checkAppLauncherPluginVar.value;
            }
        },
        "okRAMP9Pn06x0NQslN5IFA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.mapsAddressVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "5PDS5Wf01UuVq0vY1BQdDQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.cleanAddressInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "VMdwDJFXfUWJ48brZYZLDg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isGoogleMapsInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "N1Z2hV0w5kKXy91BeDQRFQ": {
            getter: function(varBag, idService) {
                return varBag.launchWithDataVar.value;
            }
        },
        "zkv+uXTyIE21XoVG7DhWrA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.fontSizeVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "GLM_bX0r2kO3NG7N4b6pAg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isLocationPopupOpenVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "XjQ2WJrPV02+7XwBfKz9+g": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isMapsAvailableVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "ih0V+6aNIkyljR6oPNDmLg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.mapsPackageNameVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "xrn2+ah6HkKyIDuuz4Tt_w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isUsingTextVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "HyXgjkUyqEa95iPObp32Ww": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_AddressIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "auDCrSm_PEStdH4OACfdNg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isEnabledIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "i6FphlAm4USkdt2aPsLfPw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.iconVisibleIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "VKBiuj1AckiU5yrjyVPaCg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_CoordinatesIn;
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});