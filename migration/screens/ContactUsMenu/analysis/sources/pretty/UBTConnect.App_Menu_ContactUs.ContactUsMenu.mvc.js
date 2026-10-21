define("UBTConnect.App_Menu_ContactUs.ContactUsMenu.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "UBTConnect.controller", "UBT_AppManager.controller", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnect.App_Menu.Menu_List.mvc$model", "UBTConnect.App_Common_Blocks.SectionSeparator.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "UBTConnect.model$UI_MenuSectionList", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnect.model$UI_MenuSectionRec", "UBTConnect.model$UI_ListMenuOptionList", "UBTConnect.controller$Get_ContactUsMenuSections", "UBT_AppManager.controller$PIN_Check", "UBTConnect.referencesHealth$UBT_AppManager"], function(OutSystems, UBTConnectModel, UBTConnectLibraryModel, UBTConnectController, UBT_AppManagerController, UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnect_App_Menu_Menu_List_mvcModel, UBTConnect_App_Common_Blocks_SectionSeparator_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("ContactUs_Menu", "contactUs_MenuVar", "ContactUs_Menu", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_MenuSectionList());
                }, false, UBTConnectModel.UI_MenuSectionList),
                this.attr("IgnorePolices", "ignorePolicesVar", "IgnorePolices", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("IgnoreLockedScreen", "ignoreLockedScreenVar", "IgnoreLockedScreen", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
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
                    Model._hasValidationWidgetsValue = ((((UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets) || UBTConnect_App_Menu_Menu_List_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_Blocks_SectionSeparator_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {};
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "App_Menu_ContactUs.ContactUsMenu");
});
define("UBTConnect.App_Menu_ContactUs.ContactUsMenu.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBT_AppManager.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Menu_ContactUs.ContactUsMenu.mvc$model", "UBTConnect.App_Menu_ContactUs.ContactUsMenu.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnect.App_Menu.Menu_List.mvc$view", "UBTConnect.App_Common_Blocks.SectionSeparator.mvc$view", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "UBTConnect.model$UI_MenuSectionList", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnect.model$UI_MenuSectionRec", "UBTConnect.model$UI_ListMenuOptionList", "UBTConnect.controller$Get_ContactUsMenuSections", "UBT_AppManager.controller$PIN_Check", "UBTConnect.referencesHealth$UBT_AppManager"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBT_AppManagerController, React, OSView, UBTConnect_App_Menu_ContactUs_ContactUsMenu_mvc_model, UBTConnect_App_Menu_ContactUs_ContactUsMenu_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnect_App_Menu_Menu_List_mvc_view, UBTConnect_App_Common_Blocks_SectionSeparator_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view) {
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
        View.displayName = "App_Menu_ContactUs.ContactUsMenu";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnect_App_Menu_Menu_List_mvc_view, UBTConnect_App_Common_Blocks_SectionSeparator_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_App_Menu_ContactUs_ContactUsMenu_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_App_Menu_ContactUs_ContactUsMenu_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function() {
                return "ContactUsMenu";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, {
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
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    placeholder_Header_Title: new PlaceholderContent(function() {
                        return ["Contact Us"];
                    }),
                    placeholder_Header_Right: PlaceholderContent.Empty,
                    headerContent: PlaceholderContent.Empty,
                    content: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                            inputs: {
                                Options: model.getCachedValue(idService.getId("86Bq8++J+EGBhFSKqmaDCw.Options"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                        rec.paddingSizeAttr = function() {
                                            var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                            rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                                            rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
                                            return rec;
                                        }();
                                        rec.textOptionsAttr = function() {
                                            var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                            rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
                                            rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
                                            return rec;
                                        }();
                                        return rec;
                                    }();
                                })
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
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Expression, {
                                        value: "Please select the most relevant category so our Customer Care Team can direct your request to the right team.",
                                        _idProps: {
                                            service: idService,
                                            uuid: "2"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })];
                                })
                            },
                            _dependencies: []
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "contact-us-menu",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.List, {
                            animateItems: true,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mode: /*Default*/ 0,
                            source: model.variables.contactUs_MenuVar,
                            style: "list list-group",
                            tag: "div",
                            _idProps: {
                                service: idService,
                                uuid: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new IteratorPlaceholderContent(function(idService, callContext) {
                                    return [React.createElement(UBTConnect_App_Menu_Menu_List_mvc_view, {
                                        inputs: {
                                            In_MenuSection: model.variables.contactUs_MenuVar.getCurrent(callContext.iterationContext)
                                        },
                                        events: {
                                            _handleError: function(ex) {
                                                controller.handleError(ex);
                                            },
                                            onClick_MenuOption$Action: function(uI_ListMenuOptionIn) {
                                                var eventHandlerContext = callContext.clone();
                                                return OS.Flow.tryFinally(function() {
                                                    var varBag = {};
                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Menu/Menu_List OnClick_MenuOption");
                                                    controller.onClick_MenuOption$Action(uI_ListMenuOptionIn.idAttr, controller.callContext(eventHandlerContext));
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
                                            uuid: "5",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    })];
                                }, callContext, idService, "1")
                            },
                            _dependencies: []
                        })), React.createElement(UBTConnect_App_Common_Blocks_SectionSeparator_mvc_view, {
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
                                uuid: "6",
                                alias: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    }),
                    bottom: PlaceholderContent.Empty,
                    placeholder_CommonUI_Inside_Layout: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, {
                            inputs: {
                                In_IgnorePolicy: model.variables.ignorePolicesVar,
                                In_IgnoreLockScreen: model.variables.ignoreLockedScreenVar
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
                                uuid: "7",
                                alias: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.ignoreLockedScreenVar), asPrimitiveValue(model.variables.ignorePolicesVar), asPrimitiveValue(model.variables.contactUs_MenuVar)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);

    return View;
});
define("UBTConnect.App_Menu_ContactUs.ContactUsMenu.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBT_AppManager.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_Menu_ContactUs.ContactUsMenu.mvc$debugger", "UBTConnect.App_Menu_ContactUs.controller", "UBTConnect.App_Menu_ContactUs.ContactUsMenu.mvc$controller.ScreenEvent_OnInitialize.IsViewRestoredFromCacheJS", "UBTConnect.model$UI_MenuSectionList", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnect.model$UI_MenuSectionRec", "UBTConnect.model$UI_ListMenuOptionList", "UBTConnect.controller$Get_ContactUsMenuSections", "UBT_AppManager.controller$PIN_Check", "UBTConnect.referencesHealth$UBT_AppManager"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBT_AppManagerController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_Menu_ContactUs_ContactUsMenu_mvc_Debugger, _flow_UBTConnect_App_Menu_ContactUsController, UBTConnect_App_Menu_ContactUs_ContactUsMenu_mvc_controller_ScreenEvent_OnInitialize_IsViewRestoredFromCacheJS) {
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
        Controller.prototype._screenEvent_OnInitialize$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ScreenEvent_OnInitialize");
            callContext = controller.callContext(callContext);
            var get_ContactUsMenuSectionsVar = new OS.DataTypes.VariableHolder();
            var pIN_CheckVar = new OS.DataTypes.VariableHolder();
            var isViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.get_ContactUsMenuSectionsVar = get_ContactUsMenuSectionsVar;
            varBag.pIN_CheckVar = pIN_CheckVar;
            varBag.isViewRestoredFromCacheJSResult = isViewRestoredFromCacheJSResult;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:w0CsXqTpGUK9B06cXiLhUg:/NRWebFlows.8Rf7+7BkAkCmweOUSt2Oiw/NodesShownInESpaceTree.X39M2BJVUkyOqPMPXvQPDg/ClientActions.w0CsXqTpGUK9B06cXiLhUg:SFDgjQHiIbZ4mZghfztzqg", "UBTConnect", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0IjbLbl63kOqO48iJIKmpA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tXAs5jj_uE6PYvABJfh6gQ", callContext.id);
                // Execute Action: PIN_Check
                pIN_CheckVar.value = UBT_AppManagerController.default.pIN_Check$Action(callContext);

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:t8FEJ5Ql9kC3bxuGwDY91w", callContext.id);
                // IgnorePolices = GetUserId = NullIdentifier or PIN_Check.NeedRegister
                model.variables.ignorePolicesVar = ((OS.BuiltinFunctions.getUserId() === OS.BuiltinFunctions.nullIdentifier()) || pIN_CheckVar.value.needRegisterOut);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:t8FEJ5Ql9kC3bxuGwDY91w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // IgnoreLockedScreen = GetUserId <> NullIdentifier and PIN_Check.NeedRegister
                model.variables.ignoreLockedScreenVar = (((OS.BuiltinFunctions.getUserId()) !== (OS.BuiltinFunctions.nullIdentifier())) && pIN_CheckVar.value.needRegisterOut);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Afu2PaKzykugEK+pB41qOA", callContext.id);
                isViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(UBTConnect_App_Menu_ContactUs_ContactUsMenu_mvc_controller_ScreenEvent_OnInitialize_IsViewRestoredFromCacheJS, "IsViewRestoredFromCache", "ScreenEvent_OnInitialize", {
                    IsRestoredFromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("UBTConnect.App_Menu_ContactUs.ContactUsMenu.ScreenEvent_OnInitialize$isViewRestoredFromCacheJSResult"))();
                    jsNodeResult.isRestoredFromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsRestoredFromCache, OS.DataTypes.DataTypes.Boolean);
                    return jsNodeResult;
                }, {}, {});
                // Check if IsViewRestoredFromCache IsRestoredFromCache
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:E1pTW87b+EyZGweVCrVScQ", callContext.id) && isViewRestoredFromCacheJSResult.value.isRestoredFromCacheOut)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bVuWv+KcdUeavGMoqxVMEg", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:isoc5sGX0kmQ1S33iME1Uw", callContext.id);
                    // Execute Action: Get_ContactUsMenuSections
                    get_ContactUsMenuSectionsVar.value = UBTConnectController.default.get_ContactUsMenuSections$Action(callContext);

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2XLVOU2Ck0auqZsGvk6S6Q", callContext.id);
                    // ContactUs_Menu = Get_ContactUsMenuSections.Out_ContactUsMenuSections
                    model.variables.contactUs_MenuVar = get_ContactUsMenuSectionsVar.value.out_ContactUsMenuSectionsOut;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:35jkJs7u6UWzc4+wfWZpNA", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:w0CsXqTpGUK9B06cXiLhUg", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_Menu_ContactUs.ContactUsMenu.ScreenEvent_OnInitialize$isViewRestoredFromCacheJSResult", [{
            name: "IsRestoredFromCache",
            attrName: "isRestoredFromCacheOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._onClick_MenuOption$Action = function(event_ListMenuOptionIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_MenuOption");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_Menu_ContactUs.ContactUsMenu.OnClick_MenuOption$vars"))());
            vars.value.event_ListMenuOptionIdInLocal = event_ListMenuOptionIdIn;
            var listIndexOfVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.listIndexOfVar = listIndexOfVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:mHOJcxakG0eYyjE8WUONBA:/NRWebFlows.8Rf7+7BkAkCmweOUSt2Oiw/NodesShownInESpaceTree.X39M2BJVUkyOqPMPXvQPDg/ClientActions.mHOJcxakG0eYyjE8WUONBA:6llFWSA4nj5rmPlQrQwcpg", "UBTConnect", "OnClick_MenuOption", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DDwvaFI+F06KT34LIhnG5g", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3IaCW2qAb0CvOcDwkaT9sA", callContext.id);
                // Execute Action: ListIndexOf
                listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.contactUs_MenuVar.getCurrent(callContext.iterationContext).menuOptionsAttr, function(p) {
                    return (p.idAttr === vars.value.event_ListMenuOptionIdInLocal);
                }, callContext);

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8IsUv5S5SEmHjx0HwqZQsA", callContext.id);
                // Destination: /UBTConnect/ContactUsDetails
                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/ContactUsDetails", {
                    In_ContactSubjectId: OS.DataConversion.ServerDataConverter.asString(OS.BuiltinFunctions.textToIdentifier(model.variables.contactUs_MenuVar.getCurrent(callContext.iterationContext).menuOptionsAttr.getItem(listIndexOfVar.value.positionOut).idAttr), OS.DataTypes.DataTypes.Text),
                    In_ContactSubjectTitle: OS.DataConversion.ServerDataConverter.asString(model.variables.contactUs_MenuVar.getCurrent(callContext.iterationContext).sectionTitleAttr, OS.DataTypes.DataTypes.Text),
                    In_ListMenuOptionLabel: OS.DataConversion.ServerDataConverter.asString(model.variables.contactUs_MenuVar.getCurrent(callContext.iterationContext).menuOptionsAttr.getItem(listIndexOfVar.value.positionOut).labelAttr, OS.DataTypes.DataTypes.Text)
                }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:mHOJcxakG0eYyjE8WUONBA", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_Menu_ContactUs.ContactUsMenu.OnClick_MenuOption$vars", [{
            name: "Event_ListMenuOptionId",
            attrName: "event_ListMenuOptionIdInLocal",
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
        Controller.prototype.onClick_MenuOption$Action = function(event_ListMenuOptionIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_MenuOption$Action, callContext, event_ListMenuOptionIdIn);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:8Rf7+7BkAkCmweOUSt2Oiw:/NRWebFlows.8Rf7+7BkAkCmweOUSt2Oiw:7tOPq2rcK3ccLkU7+umGCg", "UBTConnect", "App_Menu_ContactUs", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:X39M2BJVUkyOqPMPXvQPDg:/NRWebFlows.8Rf7+7BkAkCmweOUSt2Oiw/NodesShownInESpaceTree.X39M2BJVUkyOqPMPXvQPDg:qHe+65thprNCkzifo8a5Cw", "UBTConnect", "ContactUsMenu", "NRNodes.WebScreen", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:X39M2BJVUkyOqPMPXvQPDg", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:8Rf7+7BkAkCmweOUSt2Oiw", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "App_Menu_ContactUs/ContactUsMenu On Initialize");
                return controller.screenEvent_OnInitialize$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onReadyEventHandler = null;
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = null;
        Controller.prototype.handleError = function(ex) {
            return _flow_UBTConnect_App_Menu_ContactUsController.default.handleError(ex, this.callContext());
        };
        Controller.checkPermissions = function() {};
        Controller.prototype.getDefaultTimeout = function() {
            return UBTConnectController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});
define("UBTConnect.App_Menu_ContactUs.ContactUsMenu.mvc$controller.ScreenEvent_OnInitialize.IsViewRestoredFromCacheJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
    };
});

define("UBTConnect.App_Menu_ContactUs.ContactUsMenu.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "isoc5sGX0kmQ1S33iME1Uw": {
            getter: function(varBag, idService) {
                return varBag.get_ContactUsMenuSectionsVar.value;
            }
        },
        "tXAs5jj_uE6PYvABJfh6gQ": {
            getter: function(varBag, idService) {
                return varBag.pIN_CheckVar.value;
            }
        },
        "Afu2PaKzykugEK+pB41qOA": {
            getter: function(varBag, idService) {
                return varBag.isViewRestoredFromCacheJSResult.value;
            }
        },
        "YLsZDU2aKkeEVZSX_UvHBw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.event_ListMenuOptionIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "3IaCW2qAb0CvOcDwkaT9sA": {
            getter: function(varBag, idService) {
                return varBag.listIndexOfVar.value;
            }
        },
        "LBVsYHmmi0eU3LVFEDe7Vw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.contactUs_MenuVar;
            }
        },
        "FE7H9C4VbEK2tmJp4bF_+A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.ignorePolicesVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "SQO7avqorEOEhxs3y26ywA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.ignoreLockedScreenVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "8KNtdL13X0anLGPm7cauXQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Header_Title"));
                })(varBag.model, idService);
            }
        },
        "yC7fn8ojj0mL_pGAvUcyNg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Header_Right"));
                })(varBag.model, idService);
            }
        },
        "YPs79d2V8kWXibkyUwvC9A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderContent"));
                })(varBag.model, idService);
            }
        },
        "7h_8ES1X8UOXd_EpifMuqA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "XeoNwsZiL0+SeTWjvWXFGQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "0slpT6j77kaEzoIr6xbUOA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Bottom"));
                })(varBag.model, idService);
            }
        },
        "EVu2bZ+vm0OVQ09hjmAqFw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});