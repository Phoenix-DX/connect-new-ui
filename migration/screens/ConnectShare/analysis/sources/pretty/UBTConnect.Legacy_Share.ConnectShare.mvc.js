define("UBTConnect.Legacy_Share.ConnectShare.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTJavaScriptUtils.controller", "UBTConnect_Utils.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "NavigationHandler.controller", "Connect2_LegacyShared.Share_UI.ScreenBlock_ShareDetail.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy.mvc$model", "UBTJavaScriptUtils.controller$ScreenController_NavigateToPage", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTConnect_Utils.model$Share_AttributesRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.controller$OnInitializeSharingScreen", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "NavigationHandler.controller$ReplaceOnUpcomingNavigation", "UBTConnect.referencesHealth$NavigationHandler"], function(OutSystems, UBTConnectModel, UBTJavaScriptUtilsController, UBTConnect_UtilsModel, UBTConnectController, UBTConnect_UtilsController, NavigationHandlerController, Connect2_LegacyShared_Share_UI_ScreenBlock_ShareDetail_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("StatusMessage", "statusMessageVar", "StatusMessage", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("ShowFreeSubscriptionAlert", "showFreeSubscriptionAlertVar", "ShowFreeSubscriptionAlert", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("IsRedirect", "isRedirectVar", "IsRedirect", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("Redirect_ShareObjectTypeId2", "redirect_ShareObjectTypeId2Var", "Redirect_ShareObjectTypeId2", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("Redirect_Share_AttributesId2", "redirect_Share_AttributesId2Var", "Redirect_Share_AttributesId2", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("ShareId", "shareIdIn", "ShareId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_shareIdInDataFetchStatus", "_shareIdInDataFetchStatus", "_shareIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = ((Connect2_LegacyShared_Share_UI_ScreenBlock_ShareDetail_mvcModel.hasValidationWidgets || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("ShareId" in inputs) {
                this.variables.shareIdIn = OS.DataConversion.ServerDataConverter.from(inputs.ShareId, OS.DataTypes.DataTypes.Text);
            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Legacy_Share.ConnectShare");
});
define("UBTConnect.Legacy_Share.ConnectShare.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTJavaScriptUtils.controller", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Legacy_Share.ConnectShare.mvc$model", "UBTConnect.Legacy_Share.ConnectShare.mvc$controller", "UBTConnect.clientVariables", "Connect2_LegacyShared.Share_UI.ScreenBlock_ShareDetail.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy.mvc$view", "UBTJavaScriptUtils.controller$ScreenController_NavigateToPage", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTConnect_Utils.model$Share_AttributesRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.controller$OnInitializeSharingScreen", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "NavigationHandler.controller$ReplaceOnUpcomingNavigation", "UBTConnect.referencesHealth$NavigationHandler"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTJavaScriptUtilsController, UBTConnect_UtilsModel, UBTConnect_UtilsController, NavigationHandlerController, React, OSView, UBTConnect_Legacy_Share_ConnectShare_mvc_model, UBTConnect_Legacy_Share_ConnectShare_mvc_controller, UBTConnectClientVariables, Connect2_LegacyShared_Share_UI_ScreenBlock_ShareDetail_mvc_view, OSWidgets, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view) {
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
        View.displayName = "Legacy_Share.ConnectShare";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/Connect2_LegacyShared.UBTMobileTheme_UpdatedOSUI.css", "css/Connect2_LegacyShared.ConnectMobileCommonTheme.css", "css/Connect2_LegacyShared.OrbitTheme.css", "css/Connect2_LegacyShared.AssembleTheme.css", "css/Connect2_LegacyShared.ConnectMobile.css", "css/Connect2_LegacyShared.UBTConnect_LegacyChain.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Share_UI_ScreenBlock_ShareDetail_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Legacy_Share_ConnectShare_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Legacy_Share_ConnectShare_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function() {
                return "ConnectShare";
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

            return React.createElement("div", this.getRootNodeProperties(), $if(!(model.variables.isRedirectVar), false, this, function() {
                return [React.createElement(Connect2_LegacyShared_Share_UI_ScreenBlock_ShareDetail_mvc_view, {
                    inputs: {
                        StatusMessage: model.variables.statusMessageVar
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
                        menu: PlaceholderContent.Empty,
                        bottomBar: PlaceholderContent.Empty,
                        commonUI_Elements: new PlaceholderContent(function() {
                            return [React.createElement(UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, {
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
                                    uuid: "1",
                                    alias: "2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        })
                    },
                    _dependencies: []
                }), React.createElement(UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view, {
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
                        name: "SubscriptionDenied",
                        alias: "3"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    _dependencies: []
                })];
            }, function() {
                return [];
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);

    return View;
});
define("UBTConnect.Legacy_Share.ConnectShare.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTJavaScriptUtils.controller", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "NavigationHandler.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Legacy_Share.ConnectShare.mvc$debugger", "UBTConnect.Legacy_Share.controller", "UBTConnect.Legacy_Share.ConnectShare.mvc$controller.ScreenEvent_OnInitialize.DelayedShowFreeSubscriptionAlertJS", "UBTConnect.Legacy_Share.ConnectShare.mvc$controller.ScreenEvent_OnInitialize.WasCurrentViewRestoredFromCacheJS", "UBTJavaScriptUtils.controller$ScreenController_NavigateToPage", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTConnect_Utils.model$Share_AttributesRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.controller$OnInitializeSharingScreen", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "NavigationHandler.controller$ReplaceOnUpcomingNavigation", "UBTConnect.referencesHealth$NavigationHandler"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTJavaScriptUtilsController, UBTConnect_UtilsModel, UBTConnect_UtilsController, NavigationHandlerController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Legacy_Share_ConnectShare_mvc_Debugger, _flow_UBTConnect_Legacy_ShareController, UBTConnect_Legacy_Share_ConnectShare_mvc_controller_ScreenEvent_OnInitialize_DelayedShowFreeSubscriptionAlertJS, UBTConnect_Legacy_Share_ConnectShare_mvc_controller_ScreenEvent_OnInitialize_WasCurrentViewRestoredFromCacheJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {
                action_SetShowFreeSubscriptionAlert$Action: function(in_ShowFreeSubscriptionAlertIn) {
                    in_ShowFreeSubscriptionAlertIn = (in_ShowFreeSubscriptionAlertIn === undefined) ? false : in_ShowFreeSubscriptionAlertIn;
                    return controller.executeActionInsideJSNode(controller._action_SetShowFreeSubscriptionAlert$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_ShowFreeSubscriptionAlertIn, OS.DataTypes.DataTypes.Boolean)), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "Action_SetShowFreeSubscriptionAlert");
                }
            };
            this.dataFetchDependenciesOriginal = {};
            this.dataFetchDependentsGraph = {};
            this.shouldSendClientVarsToDataSources = false;
        }
        // Server Actions

        // Aggregates and Data Actions

        Controller.prototype.dataFetchActionNames = [];
        // Client Actions
        Controller.prototype._screenEvent_OnInitialize$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ScreenEvent_OnInitialize");
            callContext = controller.callContext(callContext);
            var onInitializeSharingScreenVar = new OS.DataTypes.VariableHolder();
            var wasCurrentViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.onInitializeSharingScreenVar = onInitializeSharingScreenVar;
            varBag.wasCurrentViewRestoredFromCacheJSResult = wasCurrentViewRestoredFromCacheJSResult;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:cnrtbCuCckOFAFEmwudM6Q:/NRWebFlows.WLHP_h0dxkS_pTvB_M633w/NodesShownInESpaceTree.wBDadDf280SsHogi99FEmw/ClientActions.cnrtbCuCckOFAFEmwudM6Q:V8jNNCPGUl3zRBtMOdCK6w", "UBTConnect", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8oPTYhk13EK3YjQcor1RpA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xJ4pvfzYlEuofMSwqMfcAA", callContext.id) && false)) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lIsKLWZVS0W2SYq39wZOYw", callContext.id);
                        // IsRedirect = False
                        model.variables.isRedirectVar = false;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QZajWBWoJ0m90txzwXCoiA", callContext.id);
                        // Execute Action: ScreenController_NavigateToPage
                        model.flush();
                        return UBTJavaScriptUtilsController.default.screenController_NavigateToPage$Action("https://ubtm-dev.ubtconnectglobal.com/UBTConnect/CountryList", true, callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:iONhkpLuqEOufowqlpUQmA", callContext.id);
                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IQ9G8CvObkSD3D4Wd5OuGA", callContext.id);
                        wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(UBTConnect_Legacy_Share_ConnectShare_mvc_controller_ScreenEvent_OnInitialize_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "ScreenEvent_OnInitialize", {
                            FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                        }, function($parameters) {
                            var jsNodeResult = new(controller.constructor.getVariableGroupType("UBTConnect.Legacy_Share.ConnectShare.ScreenEvent_OnInitialize$wasCurrentViewRestoredFromCacheJSResult"))();
                            jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
                            return jsNodeResult;
                        }, {}, {});
                        return OS.Flow.executeSequence(function() {
                            if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AtFPKGP9jE+Vyarmjsnjew", callContext.id) && wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut)) {
                                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3FxLei_K1EaCrQwA8+Kvug", callContext.id) && (((model.variables.statusMessageVar) !== ("")) || model.variables.showFreeSubscriptionAlertVar))) {
                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bfY0ABAPA0yxxOlH029vVQ", callContext.id);
                                } else {
                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_JgU2QjK60WFM3NdjNmDSg", callContext.id);
                                    // Destination: (PreviousScreen)
                                    return OS.Flow.returnAsync(OS.Navigation.navigateBack(OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.None), callContext, true));
                                }

                            } else {
                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uqoBe_8MUE6I9LK_LsJuzA", callContext.id);
                                // Execute Action: OnInitializeSharingScreen
                                model.flush();
                                return UBTConnectController.default.onInitializeSharingScreen$Action(model.variables.shareIdIn, callContext).then(function(value) {
                                    onInitializeSharingScreenVar.value = value;
                                }).then(function() {
                                    // Set Vars
                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:84OZW1GpPk+1S3AQt+b+2w", callContext.id);
                                    // StatusMessage = OnInitializeSharingScreen.StatusMessage
                                    model.variables.statusMessageVar = onInitializeSharingScreenVar.value.statusMessageOut;
                                }).then(function() {
                                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DjCa6Y4oN06OXHFpZnVpaQ", callContext.id) && onInitializeSharingScreenVar.value.isRedirectOut)) {
                                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qLoLWZ7h40SHSCxJnkcF_A", callContext.id);
                                        // IsRedirect = True
                                        model.variables.isRedirectVar = true;
                                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qLoLWZ7h40SHSCxJnkcF_A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                                        // Redirect_ShareObjectTypeId2 = OnInitializeSharingScreen.Redirect_ShareObjectTypeId
                                        model.variables.redirect_ShareObjectTypeId2Var = onInitializeSharingScreenVar.value.redirect_ShareObjectTypeIdOut;
                                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qLoLWZ7h40SHSCxJnkcF_A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                                        // Redirect_Share_AttributesId2 = OnInitializeSharingScreen.Redirect_Share_Attributes.Id
                                        model.variables.redirect_Share_AttributesId2Var = onInitializeSharingScreenVar.value.redirect_Share_AttributesOut.idAttr;
                                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YN_qmxmkGkegNoSxjsxwNA", callContext.id);
                                    } else {
                                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2+wKSpjmbE6J8Nl_WDDokA", callContext.id);
                                        // This is delayed to prevent showing the modal before the pin .
                                        controller.safeExecuteJSNode(UBTConnect_Legacy_Share_ConnectShare_mvc_controller_ScreenEvent_OnInitialize_DelayedShowFreeSubscriptionAlertJS, "DelayedShowFreeSubscriptionAlert", "ScreenEvent_OnInitialize", {
                                            ShowFreeSubscriptionAlert: OS.DataConversion.JSNodeParamConverter.to(onInitializeSharingScreenVar.value.showFreeSubscriptionAlertOut, OS.DataTypes.DataTypes.Boolean)
                                        }, function($parameters) {}, {
                                            Action_SetShowFreeSubscriptionAlert: controller.clientActionProxies.action_SetShowFreeSubscriptionAlert$Action
                                        }, {});
                                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hvsuT8TRoEKGIIS9s_7Gfw", callContext.id);
                                    }

                                });
                            }

                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:cnrtbCuCckOFAFEmwudM6Q", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:cnrtbCuCckOFAFEmwudM6Q", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect.Legacy_Share.ConnectShare.ScreenEvent_OnInitialize$wasCurrentViewRestoredFromCacheJSResult", [{
            name: "FromCache",
            attrName: "fromCacheOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._action_SetShowFreeSubscriptionAlert$Action = function(in_ShowFreeSubscriptionAlertIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_SetShowFreeSubscriptionAlert");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Legacy_Share.ConnectShare.Action_SetShowFreeSubscriptionAlert$vars"))());
            vars.value.in_ShowFreeSubscriptionAlertInLocal = in_ShowFreeSubscriptionAlertIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:9zregeD2E06FTvarYOYsyQ:/NRWebFlows.WLHP_h0dxkS_pTvB_M633w/NodesShownInESpaceTree.wBDadDf280SsHogi99FEmw/ClientActions.9zregeD2E06FTvarYOYsyQ:FbLQjaSgaeQZ7FBv3TwPSQ", "UBTConnect", "Action_SetShowFreeSubscriptionAlert", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:98trw6LfFECxPZtl3bBamQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Xzd7_dLkPEa4LlXwrrOD+A", callContext.id) && vars.value.in_ShowFreeSubscriptionAlertInLocal)) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tgtTKi_BNkaNVHe1JflqOw", callContext.id);
                        // ShowFreeSubscriptionAlert = True
                        model.variables.showFreeSubscriptionAlertVar = true;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JPZ_ty1prEKAgAzqK00Zdw", callContext.id);
                        // Execute Action: App_Subscription_ShowUpgradePopUp
                        model.flush();
                        return UBTConnect_UtilsController.default.app_Subscription_ShowUpgradePopUp$Action(callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vRR48vi11kek4y+rEi4_7A", callContext.id);
                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SKDRN2mRn0qSvlXrX5rGig", callContext.id);
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:9zregeD2E06FTvarYOYsyQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:9zregeD2E06FTvarYOYsyQ", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect.Legacy_Share.ConnectShare.Action_SetShowFreeSubscriptionAlert$vars", [{
            name: "In_ShowFreeSubscriptionAlert",
            attrName: "in_ShowFreeSubscriptionAlertInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._screenEvent_OnReady$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ScreenEvent_OnReady");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:UWcApHWEM0OwHYpVGYnDhQ:/NRWebFlows.WLHP_h0dxkS_pTvB_M633w/NodesShownInESpaceTree.wBDadDf280SsHogi99FEmw/ClientActions.UWcApHWEM0OwHYpVGYnDhQ:aEC0QCROAahU2ShrKV5doA", "UBTConnect", "ScreenEvent_OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uvrdOBF7tU6bQ4jYaiIkEA", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0rQY4lnnSUaZG7aa+7RJOw", callContext.id) && model.variables.isRedirectVar)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:l5lGgRJMSESqgmOz8hiu9g", callContext.id);
                    // Execute Action: Action_Redirect
                    controller._action_Redirect$Action(model.variables.redirect_ShareObjectTypeId2Var, model.variables.redirect_Share_AttributesId2Var, callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:spFjmPTX3UW6Sdjr2bNbbw", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:K3vcI2qQqkiXJLQZ1Gr5EQ", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:UWcApHWEM0OwHYpVGYnDhQ", callContext.id);
            }

        };
        Controller.prototype._action_Redirect$Action = function(redirect_ShareObjectTypeIdIn, redirect_Share_AttributesIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_Redirect");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Legacy_Share.ConnectShare.Action_Redirect$vars"))());
            vars.value.redirect_ShareObjectTypeIdInLocal = redirect_ShareObjectTypeIdIn;
            vars.value.redirect_Share_AttributesIdInLocal = redirect_Share_AttributesIdIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:ioDA+VaGkESyTlwu2CYvZA:/NRWebFlows.WLHP_h0dxkS_pTvB_M633w/NodesShownInESpaceTree.wBDadDf280SsHogi99FEmw/ClientActions.ioDA+VaGkESyTlwu2CYvZA:a8wbg6ocM0CJch3nsmt41w", "UBTConnect", "Action_Redirect", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lPylsXA61kegFD1yFvqNOA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NbS0RztUP0OtKqbD4DrFcw", callContext.id);
                // Execute Action: ReplaceOnUpcomingNavigation
                NavigationHandlerController.default.replaceOnUpcomingNavigation$Action(callContext);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:g6GXAiIDTEm4www4YCSV5A", callContext.id) && (((vars.value.redirect_ShareObjectTypeIdInLocal === UBTConnectModel.staticEntities.type_ShareObject.household) || (vars.value.redirect_ShareObjectTypeIdInLocal === UBTConnectModel.staticEntities.type_ShareObject.myHousehold)) || (vars.value.redirect_ShareObjectTypeIdInLocal === UBTConnectModel.staticEntities.type_ShareObject.update)))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xGlnM5rV_0CRRVzS6WFQcg", callContext.id);
                    // Destination: /UBTConnect/HouseholdDetails
                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HouseholdDetails", {
                        HouseholdId: OS.DataConversion.ServerDataConverter.asString(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.textToInteger(vars.value.redirect_Share_AttributesIdInLocal)), OS.DataTypes.DataTypes.LongInteger)
                    }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.None), callContext, true);
                } else {
                    if ((vars.value.redirect_ShareObjectTypeIdInLocal === UBTConnectModel.staticEntities.type_ShareObject.oneSchoolGlobal)) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bP6ql3IqY06aMAOlCtjGQg", callContext.id);
                        // Destination: /UBTConnect/OneSchoolGlobalDetails
                        return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/OneSchoolGlobalDetails", {
                            In_OneSchoolGlobalId: OS.DataConversion.ServerDataConverter.asString(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.textToInteger(vars.value.redirect_Share_AttributesIdInLocal)), OS.DataTypes.DataTypes.LongInteger)
                        }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.None), callContext, true);
                    } else {
                        if ((vars.value.redirect_ShareObjectTypeIdInLocal === UBTConnectModel.staticEntities.type_ShareObject.feed)) {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fGvMthLW_kKmi8CAEjoE_A", callContext.id);
                            // Destination: /UBTConnect/FeedItemDetail
                            return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/FeedItemDetail", {
                                FeedItemId: OS.DataConversion.ServerDataConverter.asString(vars.value.redirect_Share_AttributesIdInLocal, OS.DataTypes.DataTypes.Text)
                            }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.None), callContext, true);
                        } else {
                            if ((vars.value.redirect_ShareObjectTypeIdInLocal === UBTConnectModel.staticEntities.type_ShareObject.supperMeeting)) {
                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ACLye7QKdkWD7gn+JEkJUQ", callContext.id);
                                // Destination: /UBTConnect/SupperMeeting_Details
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/SupperMeeting_Details", {
                                    In_SubdivsionId: OS.DataConversion.ServerDataConverter.asString(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.textToInteger(vars.value.redirect_Share_AttributesIdInLocal)), OS.DataTypes.DataTypes.LongInteger)
                                }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.None), callContext, true);
                            } else {
                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nJ5h_fYvXki52rSrGU8JeQ", callContext.id);
                                // IsRedirect = False
                                model.variables.isRedirectVar = false;
                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Cxlr8LZrT0OTdtu4GpecqQ", callContext.id);
                            }

                        }

                    }

                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:ioDA+VaGkESyTlwu2CYvZA", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Legacy_Share.ConnectShare.Action_Redirect$vars", [{
            name: "Redirect_ShareObjectTypeId",
            attrName: "redirect_ShareObjectTypeIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "Redirect_Share_AttributesId",
            attrName: "redirect_Share_AttributesIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

        Controller.prototype.screenEvent_OnInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnInitialize$Action, callContext);

        };
        Controller.prototype.action_SetShowFreeSubscriptionAlert$Action = function(in_ShowFreeSubscriptionAlertIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_SetShowFreeSubscriptionAlert$Action, callContext, in_ShowFreeSubscriptionAlertIn);

        };
        Controller.prototype.screenEvent_OnReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnReady$Action, callContext);

        };
        Controller.prototype.action_Redirect$Action = function(redirect_ShareObjectTypeIdIn, redirect_Share_AttributesIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_Redirect$Action, callContext, redirect_ShareObjectTypeIdIn, redirect_Share_AttributesIdIn);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:WLHP_h0dxkS_pTvB_M633w:/NRWebFlows.WLHP_h0dxkS_pTvB_M633w:U8s54roxSenXYNTkqHtRYg", "UBTConnect", "Legacy_Share", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:wBDadDf280SsHogi99FEmw:/NRWebFlows.WLHP_h0dxkS_pTvB_M633w/NodesShownInESpaceTree.wBDadDf280SsHogi99FEmw:isWINAR8fxNtjXBUJrVpKw", "UBTConnect", "ConnectShare", "NRNodes.WebScreen", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:wBDadDf280SsHogi99FEmw", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:WLHP_h0dxkS_pTvB_M633w", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Legacy_Share/ConnectShare On Initialize");
                return controller.screenEvent_OnInitialize$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onReadyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Legacy_Share/ConnectShare On Ready");
                return controller.screenEvent_OnReady$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = null;
        Controller.prototype.handleError = function(ex) {
            return _flow_UBTConnect_Legacy_ShareController.default.handleError(ex, this.callContext());
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
define("UBTConnect.Legacy_Share.ConnectShare.mvc$controller.ScreenEvent_OnInitialize.DelayedShowFreeSubscriptionAlertJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        window.setTimeout(function() {
            $actions.Action_SetShowFreeSubscriptionAlert($parameters.ShowFreeSubscriptionAlert)
        }, 1000)
    };
});
define("UBTConnect.Legacy_Share.ConnectShare.mvc$controller.ScreenEvent_OnInitialize.WasCurrentViewRestoredFromCacheJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
    };
});

define("UBTConnect.Legacy_Share.ConnectShare.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "uqoBe_8MUE6I9LK_LsJuzA": {
            getter: function(varBag, idService) {
                return varBag.onInitializeSharingScreenVar.value;
            }
        },
        "2+wKSpjmbE6J8Nl_WDDokA": {
            getter: function(varBag, idService) {
                return varBag.delayedShowFreeSubscriptionAlertJSResult.value;
            }
        },
        "IQ9G8CvObkSD3D4Wd5OuGA": {
            getter: function(varBag, idService) {
                return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
            }
        },
        "pstOxZH59EKj0nJcQQmK2Q": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_ShowFreeSubscriptionAlertInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "lzrbf2jTdUa_x7DPUXNY2A": {
            getter: function(varBag, idService) {
                return varBag.vars.value.redirect_ShareObjectTypeIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "HyntJxtKMU+5nkzp_Zr9eA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.redirect_Share_AttributesIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "R3FHFEPZiEyV9IQmRvRDxw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.statusMessageVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "yj4t_+QQ7EaItHDD3Mg6tA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.showFreeSubscriptionAlertVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "5BZsJDNX6ECh7S5kYRQjcA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isRedirectVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "T3opXbts00ClVmZvCx8j_w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.redirect_ShareObjectTypeId2Var;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "YaWSUUqdMECvw_Kzm0mtWA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.redirect_Share_AttributesId2Var;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "MfFeVWolUkevlEOWKGQ_EQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.shareIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "v6oQqW5kx069hfr78M12AA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu"));
                })(varBag.model, idService);
            }
        },
        "gydfNMRgkkmQjTFwemKV9g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BottomBar"));
                })(varBag.model, idService);
            }
        },
        "nJKH+QeZl0+K_2h9xAFHGA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements"));
                })(varBag.model, idService);
            }
        },
        "wdiQ2YI0AUa4FcNQjcCUJQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("SubscriptionDenied"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});