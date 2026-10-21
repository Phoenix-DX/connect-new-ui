define("UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByMessage.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup.mvc$model", "UBTConnect_Utils.model$ContactPopupButtonTextRecordList", "UBTConnect_Utils.model$ContactByMessagePopupDataRec", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnect_Utils.model$ContactPopupButtonList", "UBTConnect_Utils.model$ContactPopupButtonTextRecord", "UBTConnect_Utils.model$ContactPopupButtonRec"], function(OutSystems, UBTConnect_UtilsModel, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("ContactPopupButtons", "contactPopupButtonsVar", "ContactPopupButtons", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactPopupButtonTextRecordList());
                }, false, UBTConnect_UtilsModel.ContactPopupButtonTextRecordList),
                this.attr("In_ContactByMessageData", "in_ContactByMessageDataIn", "In_ContactByMessageData", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactByMessagePopupDataRec());
                }, false, UBTConnect_UtilsModel.ContactByMessagePopupDataRec),
                this.attr("_in_ContactByMessageDataInDataFetchStatus", "_in_ContactByMessageDataInDataFetchStatus", "_in_ContactByMessageDataInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            if ("In_ContactByMessageData" in inputs) {
                this.variables.in_ContactByMessageDataIn = inputs.In_ContactByMessageData;
                if ("_in_ContactByMessageDataInDataFetchStatus" in inputs) {
                    this.variables._in_ContactByMessageDataInDataFetchStatus = inputs._in_ContactByMessageDataInDataFetchStatus;
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
    return new OS.Model.ModelFactory(Model, "CW_CTA_PopUps.ContactPopup_ByMessage");
});
define("UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByMessage.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "react", "OutSystems/ReactView/Main", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByMessage.mvc$model", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByMessage.mvc$controller", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect_Utils.model$ContactPopupButtonTextRecordList", "UBTConnect_Utils.model$ContactByMessagePopupDataRec", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnect_Utils.model$ContactPopupButtonList", "UBTConnect_Utils.model$ContactPopupButtonTextRecord", "UBTConnect_Utils.model$ContactPopupButtonRec"], function(OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, React, OSView, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByMessage_mvc_model, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByMessage_mvc_controller, UBTConnect_UtilsClientVariables, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_mvc_view, OSWidgets) {
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
        View.displayName = "CW_CTA_PopUps.ContactPopup_ByMessage";
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
                return UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByMessage_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByMessage_mvc_controller;
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
                    In_ContactPopupData: model.getCachedValue(idService.getId("YtV59sb0QkmbQvLjb1XoqQ.In_ContactPopupData"), function() {
                        return OS.DataConversion.JSConversions.typeConvertRecord(model.variables.in_ContactByMessageDataIn, new UBTConnect_UtilsModel.ContactPopupDataRec(), function(source, target) {
                            target = source.contactPopupDataAttr;
                            return target;
                        });
                    }, function() {
                        return model.variables.in_ContactByMessageDataIn;
                    }),
                    _in_ContactPopupDataInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ContactByMessageDataInDataFetchStatus),
                    In_ImageSizeId: model.variables.in_ImageSizeIdIn,
                    _in_ImageSizeIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ImageSizeIdInDataFetchStatus),
                    In_ContactPopupButtons: model.getCachedValue(idService.getId("YtV59sb0QkmbQvLjb1XoqQ.In_ContactPopupButtons"), function() {
                        return OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.contactPopupButtonsVar, new UBTConnect_UtilsModel.ContactPopupButtonList(), function(source, target) {
                            target = source.contactPopupButtonAttr;
                            return target;
                        });
                    }, function() {
                        return model.variables.contactPopupButtonsVar;
                    })
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
                                return controller.onClick_MessageButton$Action(event_RowNumberIn, controller.callContext(eventHandlerContext));
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
define("UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByMessage.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.languageResources", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByMessage.mvc$debugger", "UBTConnect_Utils.model$ContactPopupButtonTextRecordList", "UBTConnect_Utils.model$ContactByMessagePopupDataRec", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnect_Utils.model$ContactPopupButtonList", "UBTConnect_Utils.model$ContactPopupButtonTextRecord", "UBTConnect_Utils.model$ContactPopupButtonRec"], function(OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsLanguageResources, UBTConnect_UtilsClientVariables, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByMessage_mvc_Debugger) {
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
        Controller.prototype._action_SetContactPopupButtons$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_SetContactPopupButtons");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:0F7UMsFuRkix8hLSwdvqAw:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg/NodesShownInESpaceTree.PY_PbIra_0+3jCyHiAge2w/ClientActions.0F7UMsFuRkix8hLSwdvqAw:DJt9bLJab8V6B4eLr9hzbw", "UBTConnect_Utils", "Action_SetContactPopupButtons", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:7BmLH1bgXUmjBT7PAJLBrA", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:NRnzuZz6k0qoqYrLuU5RVw", callContext.id) && (model.variables.in_ContactByMessageDataIn.contactPopupDataAttr.actionNameAttr === ""))) {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Yqw52vY3zUKKb69du_3L2w", callContext.id);
                    // In_ContactByMessageData.ContactPopupData.ActionName = "Message"
                    model.variables.in_ContactByMessageDataIn.contactPopupDataAttr.actionNameAttr = "Message";
                }

                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:fDDATdNJxEqYvgeSuYpdig", callContext.id);
                // Execute Action: ListClear
                OS.SystemActions.listClear(model.variables.contactPopupButtonsVar, callContext);
                if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:KoT8qyoS6EiyCnLH+irrjg", callContext.id) && model.variables.in_ContactByMessageDataIn.showEmailAttr)) {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:l_jYIdx6WECNTgw+fpP0YA", callContext.id);
                    // Execute Action: ListAppend_Email
                    OS.SystemActions.listAppend(model.variables.contactPopupButtonsVar, function() {
                        var rec = new UBTConnect_UtilsModel.ContactPopupButtonTextRecord();
                        rec.contactPopupButtonAttr = function() {
                            var rec = new UBTConnect_UtilsModel.ContactPopupButtonRec();
                            rec.idAttr = UBTConnect_UtilsModel.staticEntities.type_MessageChannel.email;
                            rec.uBT_IconIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.mailFill;
                            rec.labelAttr = "Email";
                            return rec;
                        }();
                        return rec;
                    }(), callContext);
                }

                if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:JtRs771SDkC0SDH9o+HYyQ", callContext.id) && model.variables.in_ContactByMessageDataIn.showWhatsappAttr)) {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:NDvQFgtDVkOB0d4Rr9h+1A", callContext.id);
                    // Execute Action: ListAppend_Whatsapp
                    OS.SystemActions.listAppend(model.variables.contactPopupButtonsVar, function() {
                        var rec = new UBTConnect_UtilsModel.ContactPopupButtonTextRecord();
                        rec.contactPopupButtonAttr = function() {
                            var rec = new UBTConnect_UtilsModel.ContactPopupButtonRec();
                            rec.idAttr = UBTConnect_UtilsModel.staticEntities.type_MessageChannel.whatsApp;
                            rec.uBT_IconIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.whatsapp;
                            rec.labelAttr = UBTConnect_UtilsModel.staticEntities.type_MessageChannel.whatsApp;
                            return rec;
                        }();
                        return rec;
                    }(), callContext);
                }

                if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:hl74oeJmw0yETYOjNvjudg", callContext.id) && model.variables.in_ContactByMessageDataIn.showSignalAttr)) {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:PsgBf7IdgUKzgtSV9EDfnA", callContext.id);
                    // Execute Action: ListAppend_Signal
                    OS.SystemActions.listAppend(model.variables.contactPopupButtonsVar, function() {
                        var rec = new UBTConnect_UtilsModel.ContactPopupButtonTextRecord();
                        rec.contactPopupButtonAttr = function() {
                            var rec = new UBTConnect_UtilsModel.ContactPopupButtonRec();
                            rec.idAttr = UBTConnect_UtilsModel.staticEntities.type_MessageChannel.signal;
                            rec.uBT_IconIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.signal;
                            rec.labelAttr = UBTConnect_UtilsModel.staticEntities.type_MessageChannel.signal;
                            return rec;
                        }();
                        return rec;
                    }(), callContext);
                }

                if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:_+PP28CRKESGNHpHVY6GJQ", callContext.id) && model.variables.in_ContactByMessageDataIn.showCallAttr)) {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:JV2w3XmUqkmd8xB8IrIyng", callContext.id);
                    // Execute Action: ListAppend_Call
                    OS.SystemActions.listAppend(model.variables.contactPopupButtonsVar, function() {
                        var rec = new UBTConnect_UtilsModel.ContactPopupButtonTextRecord();
                        rec.contactPopupButtonAttr = function() {
                            var rec = new UBTConnect_UtilsModel.ContactPopupButtonRec();
                            rec.idAttr = UBTConnect_UtilsModel.staticEntities.type_MessageChannel.call;
                            rec.uBT_IconIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.callFill;
                            rec.labelAttr = UBTConnect_UtilsModel.staticEntities.type_MessageChannel.call;
                            return rec;
                        }();
                        return rec;
                    }(), callContext);
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:GymuL3CmDUSPjeTbTSFt9A", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:GymuL3CmDUSPjeTbTSFt9A", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:0F7UMsFuRkix8hLSwdvqAw", callContext.id);
            }

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
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:uc3HRfGGcU6Y6MfKPX23ww:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg/NodesShownInESpaceTree.PY_PbIra_0+3jCyHiAge2w/ClientActions.uc3HRfGGcU6Y6MfKPX23ww:d0Fm5FMnPgB1dkokbtaK_w", "UBTConnect_Utils", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:qy9MwK4bWU+wNoXdWwk8OQ", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:CxJZVy_Ja0KCFc8Ffe+Enw", callContext.id) && model.variables.in_ContactByMessageDataIn.contactPopupDataAttr.showPopupAttr)) {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:aZMxB241SkmTbTNi5sEAoA", callContext.id);
                    // Execute Action: Action_SetContactPopupButtons
                    controller._action_SetContactPopupButtons$Action(callContext);
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:zDpK8da0S0Kny4k7LGwQ7g", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:zDpK8da0S0Kny4k7LGwQ7g", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:uc3HRfGGcU6Y6MfKPX23ww", callContext.id);
            }

        };
        Controller.prototype._onInitialize$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnInitialize");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:F85MfPQilEWjtO5Rx3wjYA:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg/NodesShownInESpaceTree.PY_PbIra_0+3jCyHiAge2w/ClientActions.F85MfPQilEWjtO5Rx3wjYA:KEJPyHUJ7NVYphVEvLobzw", "UBTConnect_Utils", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ONrFvP1OakuYl+XmxGXaTQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:BL_a53Ha3kmwqo5xwz9Xww", callContext.id);
                // Execute Action: Action_SetContactPopupButtons
                controller._action_SetContactPopupButtons$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:7G4SPQbdGkS_JNqBEmDngA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:F85MfPQilEWjtO5Rx3wjYA", callContext.id);
            }

        };
        Controller.prototype._onClick_MessageButton$Action = function(event_RowNumberIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_MessageButton");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByMessage.OnClick_MessageButton$vars"))());
            vars.value.event_RowNumberInLocal = event_RowNumberIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:A2_wjgHd2UO+WXUvsT47ug:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg/NodesShownInESpaceTree.PY_PbIra_0+3jCyHiAge2w/ClientActions.A2_wjgHd2UO+WXUvsT47ug:FZot+7DLHn1VcFObTEJ75Q", "UBTConnect_Utils", "OnClick_MessageButton", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Bw7os5MvK0WVJhBMEPdlhg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:4pR8ioOALEOxZooFfR40Pg", callContext.id);
                // Trigger Event: Event_SelectedMessageChannel
                return controller.event_SelectedMessageChannel$Action(model.variables.contactPopupButtonsVar.getItem(vars.value.event_RowNumberInLocal).contactPopupButtonAttr.idAttr, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ENYYj2OJ4kKMJ2VOqbU0fw", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:A2_wjgHd2UO+WXUvsT47ug", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:A2_wjgHd2UO+WXUvsT47ug", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByMessage.OnClick_MessageButton$vars", [{
            name: "Event_RowNumber",
            attrName: "event_RowNumberInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }]);

        Controller.prototype.action_SetContactPopupButtons$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_SetContactPopupButtons$Action, callContext);

        };
        Controller.prototype.onParametersChanged$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

        };
        Controller.prototype.onInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

        };
        Controller.prototype.onClick_MessageButton$Action = function(event_RowNumberIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_MessageButton$Action, callContext, event_RowNumberIn);

        };
        Controller.prototype.event_Cancel$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.event_SelectedMessageChannel$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:40BOH8zZHka5ciwmYfvqVg:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg:9C3kcfT08imn_yT0sR8WzQ", "UBTConnect_Utils", "CW_CTA_PopUps", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:PY_PbIra_0+3jCyHiAge2w:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg/NodesShownInESpaceTree.PY_PbIra_0+3jCyHiAge2w:WFwHofxQabVnVZ6LlWYccw", "UBTConnect_Utils", "ContactPopup_ByMessage", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:PY_PbIra_0+3jCyHiAge2w", callContext.id);
            OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:40BOH8zZHka5ciwmYfvqVg", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "CW_CTA_PopUps/ContactPopup_ByMessage On Initialize");
                return controller.onInitialize$Action(callContext);

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

                OutSystemsDebugger.setThreadStartName(callContext.id, "CW_CTA_PopUps/ContactPopup_ByMessage On Parameters Changed");
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
            return UBTConnect_UtilsController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnect_UtilsLanguageResources);
});

define("UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByMessage.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "FPRDnh66SE+bQkeTaUAleQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.event_RowNumberInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "k_JPoVeCPUSG8MoHft_rLg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.contactPopupButtonsVar;
            }
        },
        "ey4sUBXuiUqHvnZFsxhzaQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_ContactByMessageDataIn;
            }
        },
        "em9xkTHR6UuvtgCVPUWsZA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_ImageSizeIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});