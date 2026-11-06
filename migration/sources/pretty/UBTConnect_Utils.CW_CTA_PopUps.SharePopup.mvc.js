define("UBTConnect_Utils.CW_CTA_PopUps.SharePopup.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBT_AppManager.controller", "UBTConnect_Utils.controller", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup.mvc$model", "UBTConnect_Utils.model$ContactPopupButtonTextRecordList", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnect_Utils.model$ContactPopupButtonList", "UBT_AppManager.controller$AppManager_GetIsNative", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBT_AppManager", "UBTConnect_Utils.model$ContactPopupButtonTextRecord", "UBTConnect_Utils.model$ContactPopupButtonRec", "UBTConnect_Utils.controller$GetHasExtendedShare", "UBTConnect_Utils.controller$ShowComingSoonMessage"], function(OutSystems, UBTConnect_UtilsModel, UBT_AppManagerController, UBTConnect_UtilsController, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("SharePopupButtons", "sharePopupButtonsVar", "SharePopupButtons", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactPopupButtonTextRecordList());
                }, false, UBTConnect_UtilsModel.ContactPopupButtonTextRecordList),
                this.attr("In_ContactPopupData", "in_ContactPopupDataIn", "In_ContactPopupData", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactPopupDataRec());
                }, false, UBTConnect_UtilsModel.ContactPopupDataRec),
                this.attr("_in_ContactPopupDataInDataFetchStatus", "_in_ContactPopupDataInDataFetchStatus", "_in_ContactPopupDataInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_ImageSizeId", "in_ImageSizeIdIn", "In_ImageSizeId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return UBTConnect_UtilsModel.staticEntities.uBT_ImageSize.extraLarge_100;
                }, false),
                this.attr("_in_ImageSizeIdInDataFetchStatus", "_in_ImageSizeIdInDataFetchStatus", "_in_ImageSizeIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_mvcModel.hasValidationWidgets;
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_ContactPopupData" in inputs) {
                this.variables.in_ContactPopupDataIn = inputs.In_ContactPopupData;
                if ("_in_ContactPopupDataInDataFetchStatus" in inputs) {
                    this.variables._in_ContactPopupDataInDataFetchStatus = inputs._in_ContactPopupDataInDataFetchStatus;
                }

            }

            if ("In_ImageSizeId" in inputs) {
                this.variables.in_ImageSizeIdIn = inputs.In_ImageSizeId;
                if ("_in_ImageSizeIdInDataFetchStatus" in inputs) {
                    this.variables._in_ImageSizeIdInDataFetchStatus = inputs._in_ImageSizeIdInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "CW_CTA_PopUps.SharePopup");
});
define("UBTConnect_Utils.CW_CTA_PopUps.SharePopup.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBT_AppManager.controller", "react", "OutSystems/ReactView/Main", "UBTConnect_Utils.CW_CTA_PopUps.SharePopup.mvc$model", "UBTConnect_Utils.CW_CTA_PopUps.SharePopup.mvc$controller", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect_Utils.model$ContactPopupButtonTextRecordList", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnect_Utils.model$ContactPopupButtonList", "UBT_AppManager.controller$AppManager_GetIsNative", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBT_AppManager", "UBTConnect_Utils.model$ContactPopupButtonTextRecord", "UBTConnect_Utils.model$ContactPopupButtonRec", "UBTConnect_Utils.controller$GetHasExtendedShare", "UBTConnect_Utils.controller$ShowComingSoonMessage"], function(OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBT_AppManagerController, React, OSView, UBTConnect_Utils_CW_CTA_PopUps_SharePopup_mvc_model, UBTConnect_Utils_CW_CTA_PopUps_SharePopup_mvc_controller, UBTConnect_UtilsClientVariables, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_mvc_view, OSWidgets) {
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
        View.displayName = "CW_CTA_PopUps.SharePopup";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Utils_CW_CTA_PopUps_SharePopup_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Utils_CW_CTA_PopUps_SharePopup_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_mvc_view, {
                inputs: {
                    In_ContactPopupButtons: model.getCachedValue(idService.getId("bWqkaEVtK02GbKQtMVe7OA.In_ContactPopupButtons"), function() {
                        return OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.sharePopupButtonsVar, new UBTConnect_UtilsModel.ContactPopupButtonList(), function(source, target) {
                            target = source.contactPopupButtonAttr;
                            return target;
                        });
                    }, function() {
                        return model.variables.sharePopupButtonsVar;
                    }),
                    In_ImageSizeId: model.variables.in_ImageSizeIdIn,
                    _in_ImageSizeIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ImageSizeIdInDataFetchStatus),
                    In_ContactPopupData: model.variables.in_ContactPopupDataIn,
                    _in_ContactPopupDataInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ContactPopupDataInDataFetchStatus)
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    event_Cancel$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_CTA_PopUps/ContactPopup Event_Cancel");
                            controller.event_Cancel$Action(controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    },
                    event_Clicked$Action: function(event_IdIn, event_RowNumberIn) {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_CTA_PopUps/ContactPopup Event_Clicked");
                                return controller.onClick_CallButton$Action(event_RowNumberIn, controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });
                        });;
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
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect_Utils.CW_CTA_PopUps.SharePopup.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBT_AppManager.controller", "UBTConnect_Utils.languageResources", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.CW_CTA_PopUps.SharePopup.mvc$debugger", "UBTConnect_Utils.model$ContactPopupButtonTextRecordList", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnect_Utils.model$ContactPopupButtonList", "UBT_AppManager.controller$AppManager_GetIsNative", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBT_AppManager", "UBTConnect_Utils.model$ContactPopupButtonTextRecord", "UBTConnect_Utils.model$ContactPopupButtonRec", "UBTConnect_Utils.controller$GetHasExtendedShare", "UBTConnect_Utils.controller$ShowComingSoonMessage"], function(OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBT_AppManagerController, UBTConnect_UtilsLanguageResources, UBTConnect_UtilsClientVariables, UBTConnect_Utils_CW_CTA_PopUps_SharePopup_mvc_Debugger) {
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
        Controller.prototype._action_SetSharePopupButtons$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_SetSharePopupButtons");
            callContext = controller.callContext(callContext);
            var appManager_GetIsNativeVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.appManager_GetIsNativeVar = appManager_GetIsNativeVar;
            try {
                OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:4mIuG1HWdE+XKSdA_bBEZA:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg/NodesShownInESpaceTree.gDLBlm8_SE2pBR9L00BsgQ/ClientActions.4mIuG1HWdE+XKSdA_bBEZA:nVJSYqa2tZ5uDLql5PghiA", "UBTConnect_Utils", "Action_SetSharePopupButtons", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:IQitgGowkUSnQ8PtGgDLLQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:GbgWm912vUCHv38pN1iy+A", callContext.id);
                // Execute Action: ListAppendAll
                OS.SystemActions.listAppendAll(model.variables.sharePopupButtonsVar, function() {
                    var list = new UBTConnect_UtilsModel.ContactPopupButtonTextRecordList();
                    list.pushAll([function() {
                        var rec = new UBTConnect_UtilsModel.ContactPopupButtonTextRecord();
                        rec.contactPopupButtonAttr = function() {
                            var rec = new UBTConnect_UtilsModel.ContactPopupButtonRec();
                            rec.idAttr = "1";
                            rec.uBT_IconIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.share;
                            rec.labelAttr = "Share to Connect";
                            return rec;
                        }();
                        rec.numberAttr = "0";
                        return rec;
                    }()]);
                    return list;
                }(), callContext);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:l+tAjEEKKkePQ262+I4U1w", callContext.id);
                // Execute Action: AppManager_GetIsNative
                appManager_GetIsNativeVar.value = UBT_AppManagerController.default.appManager_GetIsNative$Action(callContext);

                if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:hpkbvrbFBkC9kG7oZUmfRg", callContext.id) && appManager_GetIsNativeVar.value.isNativeOut)) {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:wDifD1ZxmEeAeGY4VQRX3g", callContext.id);
                    // Execute Action: ListAppendAll2
                    OS.SystemActions.listAppendAll(model.variables.sharePopupButtonsVar, function() {
                        var list = new UBTConnect_UtilsModel.ContactPopupButtonTextRecordList();
                        list.pushAll([function() {
                            var rec = new UBTConnect_UtilsModel.ContactPopupButtonTextRecord();
                            rec.contactPopupButtonAttr = function() {
                                var rec = new UBTConnect_UtilsModel.ContactPopupButtonRec();
                                rec.idAttr = "2";
                                rec.uBT_IconIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.share;
                                rec.labelAttr = "Share to other apps";
                                return rec;
                            }();
                            rec.numberAttr = "0";
                            return rec;
                        }()]);
                        return list;
                    }(), callContext);
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:obuEMFxRDUOVJ3IjN8jxIQ", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:obuEMFxRDUOVJ3IjN8jxIQ", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:4mIuG1HWdE+XKSdA_bBEZA", callContext.id);
            }

        };
        Controller.prototype._onClick_CallButton$Action = function(event_RowNumberIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_CallButton");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect_Utils.CW_CTA_PopUps.SharePopup.OnClick_CallButton$vars"))());
            vars.value.event_RowNumberInLocal = event_RowNumberIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:QYo4JrIBkkupYwUgNbHsBA:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg/NodesShownInESpaceTree.gDLBlm8_SE2pBR9L00BsgQ/ClientActions.QYo4JrIBkkupYwUgNbHsBA:YPhFvoNc3kQwBoliWqHiRQ", "UBTConnect_Utils", "OnClick_CallButton", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:5hU4NcUFLUKI1clqpZ4Jig", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ddwIsBRcSUSiESBrCLsbew", callContext.id) && (vars.value.event_RowNumberInLocal === 0))) {
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:mz20zZYFPk2C_rw5EcPNKg", callContext.id);
                        // Trigger Event: Event_ShareToConnect
                        return controller.event_ShareToConnect$Action(callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:wGlwrL51TkCw8WBooLK4yQ", callContext.id);
                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:7nGsUr0sTESYZSreIIHQsg", callContext.id);
                        // Trigger Event: Event_ShareToOthers
                        return controller.event_ShareToOthers$Action(callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:wGlwrL51TkCw8WBooLK4yQ", callContext.id);
                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:QYo4JrIBkkupYwUgNbHsBA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:QYo4JrIBkkupYwUgNbHsBA", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect_Utils.CW_CTA_PopUps.SharePopup.OnClick_CallButton$vars", [{
            name: "Event_RowNumber",
            attrName: "event_RowNumberInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }]);
        Controller.prototype._screeenEvent_OnParametersChanged$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ScreeenEvent_OnParametersChanged");
            callContext = controller.callContext(callContext);
            var getHasExtendedShareVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getHasExtendedShareVar = getHasExtendedShareVar;
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:0Sg1r91jh0ie07nwSvrDgg:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg/NodesShownInESpaceTree.gDLBlm8_SE2pBR9L00BsgQ/ClientActions.0Sg1r91jh0ie07nwSvrDgg:+Ctuw2q0HdhWiaVsLHEC3w", "UBTConnect_Utils", "ScreeenEvent_OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:_rDpbbNbIEeMLqWDQvh9Ww", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:MUpqgLt9+06c9qB3+O8SnA", callContext.id);
                // Execute Action: GetHasExtendedShare
                getHasExtendedShareVar.value = UBTConnect_UtilsController.default.getHasExtendedShare$Action(callContext);

                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:XnLua8+87EqtLX5gVzjX4A", callContext.id) && getHasExtendedShareVar.value.hasExtendedShareOut)) {
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:EGNelQvARkiH3TDY_I8klg", callContext.id);
                    } else {
                        return OS.Flow.executeSequence(function() {
                            if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:bQdhaUtM+U+Crqr0i4C7yA", callContext.id) && ((((model.variables.in_ContactPopupDataIn.showPopupAttr && ((model.variables.in_ContactPopupDataIn.entityTypeIdAttr) !== (UBTConnect_UtilsModel.staticEntities.connect_Entity.member))) && ((model.variables.in_ContactPopupDataIn.entityTypeIdAttr) !== (UBTConnect_UtilsModel.staticEntities.connect_Entity.oneSchoolGlobal))) && ((model.variables.in_ContactPopupDataIn.entityTypeIdAttr) !== (UBTConnect_UtilsModel.staticEntities.connect_Entity.household))) && ((model.variables.in_ContactPopupDataIn.entityTypeIdAttr) !== (UBTConnect_UtilsModel.staticEntities.connect_Entity.feedItem))))) {
                                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:SDfcutAh_UC0yFAn40IzKQ", callContext.id);
                                // Execute Action: ShowComingSoonMessage
                                UBTConnect_UtilsController.default.showComingSoonMessage$Action(callContext);
                                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:01d91+CTiEez4vCDgbJb2w", callContext.id);
                                // Trigger Event: Event_Cancel
                                return controller.event_Cancel$Action(callContext).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:aBQNIIRcxU6pmn0sc+HL2A", callContext.id);
                                });
                            } else {
                                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:aBQNIIRcxU6pmn0sc+HL2A", callContext.id);
                            }

                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:0Sg1r91jh0ie07nwSvrDgg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:0Sg1r91jh0ie07nwSvrDgg", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._screenEvent_OnInitialize$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ScreenEvent_OnInitialize");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:zbPQ4V_JT0KRt0FbX7i5zQ:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg/NodesShownInESpaceTree.gDLBlm8_SE2pBR9L00BsgQ/ClientActions.zbPQ4V_JT0KRt0FbX7i5zQ:6QUn6pPoVGvBwwXjgc3MiA", "UBTConnect_Utils", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:b7BxDxAbnE2w7_uITD+lUQ", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:aVPGanFBxEC4+JtHBrK74w", callContext.id) && model.variables.sharePopupButtonsVar.isEmpty)) {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:8ibHdGvmJ0KP7rMdwuW_VA", callContext.id);
                    // Execute Action: Action_SetSharePopupButtons
                    controller._action_SetSharePopupButtons$Action(callContext);
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:vEnTDv2qy0KoEuEkAOIbAg", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:p0RREm3DrEq__qcxHVJi7g", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:zbPQ4V_JT0KRt0FbX7i5zQ", callContext.id);
            }

        };

        Controller.prototype.action_SetSharePopupButtons$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_SetSharePopupButtons$Action, callContext);

        };
        Controller.prototype.onClick_CallButton$Action = function(event_RowNumberIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_CallButton$Action, callContext, event_RowNumberIn);

        };
        Controller.prototype.screeenEvent_OnParametersChanged$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screeenEvent_OnParametersChanged$Action, callContext);

        };
        Controller.prototype.screenEvent_OnInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnInitialize$Action, callContext);

        };
        Controller.prototype.event_ShareToOthers$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.event_ShareToConnect$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.event_Cancel$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:40BOH8zZHka5ciwmYfvqVg:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg:9C3kcfT08imn_yT0sR8WzQ", "UBTConnect_Utils", "CW_CTA_PopUps", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:gDLBlm8_SE2pBR9L00BsgQ:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg/NodesShownInESpaceTree.gDLBlm8_SE2pBR9L00BsgQ:CodQPssUSYNiuEJwehHbbQ", "UBTConnect_Utils", "SharePopup", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:gDLBlm8_SE2pBR9L00BsgQ", callContext.id);
            OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:40BOH8zZHka5ciwmYfvqVg", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "CW_CTA_PopUps/SharePopup On Initialize");
                return controller.screenEvent_OnInitialize$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onReadyEventHandler = null;
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "CW_CTA_PopUps/SharePopup On Parameters Changed");
                return controller.screeenEvent_OnParametersChanged$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
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

define("UBTConnect_Utils.CW_CTA_PopUps.SharePopup.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "l+tAjEEKKkePQ262+I4U1w": {
            getter: function(varBag, idService) {
                return varBag.appManager_GetIsNativeVar.value;
            }
        },
        "up_jYDZXC0aoT2_EYWgrmw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.event_RowNumberInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "MUpqgLt9+06c9qB3+O8SnA": {
            getter: function(varBag, idService) {
                return varBag.getHasExtendedShareVar.value;
            }
        },
        "1ZcsK8ZW80eu3+MWK+BrQw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.sharePopupButtonsVar;
            }
        },
        "sp5V6cWer0204AK2F5PNog": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_ContactPopupDataIn;
            }
        },
        "hMt6L05GEE+T3vcRPBbx7g": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_ImageSizeIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});