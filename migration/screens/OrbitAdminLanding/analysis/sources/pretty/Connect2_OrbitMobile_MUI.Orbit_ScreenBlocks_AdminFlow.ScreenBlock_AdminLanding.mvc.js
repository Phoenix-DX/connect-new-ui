define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model", "UBT_AppManager.model", "UBT_AppManager.controller", "Connect2_OrbitMobile_MUI.controller", "Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$model", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Event.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$model", "UBTConnect_Utils.controller$IsListVirtualizationDisabled", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_BL.model$GetAdminOrbitEvents_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$GetAdminOrbitEvents_ScreenList", "Connect2_OrbitMobile_BL.model$Event_ScreenRec", "Connect2_OrbitMobile_BL.model$OrbitEventTypeRec", "Connect2_OrbitMobile_IS.model$EventInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "Connect2_OrbitMobile_MUI.model$AuditPayload_ClickEventRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ClickEvent"], function(OutSystems, Connect2_OrbitMobile_MUIModel, UBTConnect_UtilsController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_ISModel, UBT_AppManagerModel, UBT_AppManagerController, Connect2_OrbitMobile_MUIController, Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvcModel, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Event_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvcModel) {
    var OS = OutSystems.Internal;

    var Get_AdminEventsListDataActRec = (function(_super) {
        __extends(Get_AdminEventsListDataActRec, _super);

        function Get_AdminEventsListDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        Get_AdminEventsListDataActRec.attributesToDeclare = function() {
            return [
                this.attr("Response", "responseOut", "Response", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.GetAdminOrbitEvents_ScreenList());
                }, true, Connect2_OrbitMobile_MUIModel.GetAdminOrbitEvents_ScreenList)
            ].concat(_super.attributesToDeclare.call(this));
        };
        Get_AdminEventsListDataActRec.fromStructure = function(str) {
            return new Get_AdminEventsListDataActRec(new Get_AdminEventsListDataActRec.RecordClass({
                responseOut: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        Get_AdminEventsListDataActRec.init();
        return Get_AdminEventsListDataActRec;
    })(OS.Model.DataSourceRecord);

    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("IsFetchingData", "isFetchingDataVar", "IsFetchingData", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("EventsSummary", "eventsSummaryVar", "EventsSummary", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.GetAdminOrbitEvents_ScreenList());
                }, false, Connect2_OrbitMobile_MUIModel.GetAdminOrbitEvents_ScreenList),
                this.attr("UserFirstName", "userFirstNameVar", "UserFirstName", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("UserMemberId", "userMemberIdVar", "UserMemberId", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("Get_AdminEventsList", "get_AdminEventsListDataAct", "get_AdminEventsListDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Get_AdminEventsListDataActRec());
                }, true, Get_AdminEventsListDataActRec)
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
                    Model._hasValidationWidgetsValue = ((((Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvcModel.hasValidationWidgets || Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Event_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {};
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding");
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model", "UBT_AppManager.model", "UBT_AppManager.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Event.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$view", "UBTConnect_Utils.controller$IsListVirtualizationDisabled", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_BL.model$GetAdminOrbitEvents_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$GetAdminOrbitEvents_ScreenList", "Connect2_OrbitMobile_BL.model$Event_ScreenRec", "Connect2_OrbitMobile_BL.model$OrbitEventTypeRec", "Connect2_OrbitMobile_IS.model$EventInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "Connect2_OrbitMobile_MUI.model$AuditPayload_ClickEventRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ClickEvent"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, UBTConnect_UtilsController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_ISModel, UBT_AppManagerModel, UBT_AppManagerController, React, OSView, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminLanding_mvc_model, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminLanding_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, OSWidgets, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Event_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view) {
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
        View.displayName = "Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Event_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminLanding_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminLanding_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, {
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
                    menu: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.menu,
                            _idProps: {
                                service: idService,
                                name: "Menu"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    headerLeft: new PlaceholderContent(function() {
                        return [React.createElement(Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, {
                            inputs: {
                                MenuAction: Connect2_OrbitMobile_MUIModel.staticEntities.menuAction.menu
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
                            _dependencies: []
                        })];
                    }),
                    title: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Icon, {
                            icon: "flag",
                            iconSize: /*FontSize*/ 0,
                            style: "icon menu-icon-Orbit",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    headerRight: PlaceholderContent.Empty,
                    headerContent: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "orbit-admin-header-cont",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "orbit-admin-header-text-cont",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Expression, {
                            style: "orbit-admin-header-text",
                            value: model.variables.userFirstNameVar,
                            _idProps: {
                                service: idService,
                                uuid: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })))];
                    }),
                    content: new PlaceholderContent(function() {
                        return [$if(!(model.variables.isFetchingDataVar), false, this, function() {
                            return [$if((model.variables.get_AdminEventsListDataAct.isDataFetchedAttr && !(model.variables.isFetchingDataVar)), false, this, function() {
                                return [$if(!(model.variables.eventsSummaryVar.isEmpty), false, this, function() {
                                    return [React.createElement(OSWidgets.List, {
                                        animateItems: true,
                                        extendedProperties: {
                                            "disable-virtualization": model.getCachedValue(idService.getId("AoVSdlqhNk+GZ0q2X1i25g.disable-virtualization"), function() {
                                                return OutSystemsDebugger.handleFunctionCall(function() {
                                                    return (UBTConnect_UtilsController.default.isListVirtualizationDisabled$Action(callContext).hasListVirtualizationDisabledOut ? "True" : "False");
                                                }, OS.DataTypes.DataTypes.Text, callContext.id);
                                            })
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mode: /*Default*/ 0,
                                        source: model.variables.eventsSummaryVar,
                                        style: "list list-group orbit-card-list",
                                        tag: "div",
                                        _idProps: {
                                            service: idService,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                return [React.createElement(OSWidgets.Container, {
                                                    align: /*Default*/ 0,
                                                    animate: false,
                                                    style: "orbit-card-list-cont",
                                                    visible: true,
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "8"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    _dependencies: [asPrimitiveValue(model.variables.eventsSummaryVar.getCurrent(callContext.iterationContext))]
                                                }, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Event_mvc_view, {
                                                    inputs: {
                                                        In_EventSummary: model.getCachedValue(idService.getId("e66GZJqzCkO22wZNl_41uA.In_EventSummary"), function() {
                                                            return OS.DataConversion.JSConversions.typeConvertRecord(model.variables.eventsSummaryVar.getCurrent(callContext.iterationContext), new Connect2_OrbitMobile_BLModel.Event_ScreenRec(), function(source, target) {
                                                                target.eventIdAttr = source.orbitSummaryItemAttr.eventIdAttr;
                                                                target.typeAttr = source.orbitSummaryItemAttr.typeAttr;
                                                                target.titleAttr = source.orbitSummaryItemAttr.titleAttr;
                                                                target.orbitEventTypeAttr = source.orbitEventTypeAttr;
                                                                target.eventInfoAttr = source.orbitSummaryItemAttr.eventInfoAttr;
                                                                return target;
                                                            });
                                                        }, function() {
                                                            return model.variables.eventsSummaryVar.getCurrent(callContext.iterationContext);
                                                        })
                                                    },
                                                    events: {
                                                        _handleError: function(ex) {
                                                            controller.handleError(ex);
                                                        },
                                                        clickedEvent$Action: function(event_SelectedEventIn) {
                                                            return Promise.resolve().then(function() {
                                                                var eventHandlerContext = callContext.clone();
                                                                return OS.Flow.tryFinally(function() {
                                                                    var varBag = {};
                                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/Card_Event ClickedEvent");
                                                                    return controller.onHandle_EventCardClicked$Action(event_SelectedEventIn, model.variables.eventsSummaryVar.getCurrent(callContext.iterationContext).orbitSummaryItemAttr.typeFriendlyAttr, controller.callContext(eventHandlerContext));
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
                                                        uuid: "9",
                                                        alias: "3"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    _dependencies: []
                                                }))];
                                            }, callContext, idService, "1")
                                        },
                                        _dependencies: []
                                    })];
                                }, function() {
                                    return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, {
                                        inputs: {
                                            Message: "There are no events currently where QR scanning is required. If you have any questions, please contact your regional Orbit helpdesk."
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
                                            uuid: "10",
                                            alias: "4"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    })];
                                })];
                            }, function() {
                                return [];
                            })];
                        }, function() {
                            return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, {
                                inputs: {
                                    In_SkeletonLoadingId: Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.orbitLanding
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
                                    uuid: "11",
                                    alias: "5"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        })];
                    }),
                    bottomBar: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.bottomBar,
                            _idProps: {
                                service: idService,
                                name: "BottomBar"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    commonUI_Elements: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.commonUI_Elements,
                            _idProps: {
                                service: idService,
                                name: "CommonUI_Elements"
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
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model", "UBT_AppManager.model", "UBT_AppManager.controller", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.mvc$debugger", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", "UBTConnect_Utils.controller$IsListVirtualizationDisabled", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_BL.model$GetAdminOrbitEvents_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$GetAdminOrbitEvents_ScreenList", "Connect2_OrbitMobile_BL.model$Event_ScreenRec", "Connect2_OrbitMobile_BL.model$OrbitEventTypeRec", "Connect2_OrbitMobile_IS.model$EventInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "Connect2_OrbitMobile_MUI.model$AuditPayload_ClickEventRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ClickEvent"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, UBTConnect_UtilsController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_ISModel, UBT_AppManagerModel, UBT_AppManagerController, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminLanding_mvc_Debugger, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminLanding_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {};
            this.dataFetchDependenciesOriginal = {
                get_AdminEventsList$DataActRefresh: -1
            };
            this.dataFetchDependentsGraph = {
                get_AdminEventsList$DataActRefresh: []
            };
            this.shouldSendClientVarsToDataSources = false;
        }
        // Server Actions

        // Aggregates and Data Actions
        Controller.prototype.get_AdminEventsList$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:gxQUB9EQzEeMI1j4g1ymZg:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.Fihq8GAG4EWOA0SZ_Adj7w/DataActions.gxQUB9EQzEeMI1j4g1ymZg:3J3Rhc4IlNH4xx8hjgPtjg", "Connect2_OrbitMobile_MUI", "Get_AdminEventsList", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminLanding/Get_AdminEventsList");
                return controller.callDataAction("DataActionGet_AdminEventsList", "screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminLanding/DataActionGet_AdminEventsList", "vZwN_gCAFY7sAh9jpc4Kuw", function(b) {
                    model.variables.get_AdminEventsListDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.get_AdminEventsListDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.get_AdminEventsListDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false).then(function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminLanding/Get_AdminEventsList On After Fetch");
                    controller._onAfterFetch_Get_AdminEventsList$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:gxQUB9EQzEeMI1j4g1ymZg", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };

        Controller.prototype.dataFetchActionNames = ["get_AdminEventsList$DataActRefresh"];
        // Client Actions
        Controller.prototype._refresh_GetEventsByMemberId$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Refresh_GetEventsByMemberId");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:O35UxpY9HE25aY3zBVo6wg:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.Fihq8GAG4EWOA0SZ_Adj7w/ClientActions.O35UxpY9HE25aY3zBVo6wg:wcI9AR+16s74_D44ce_gIw", "Connect2_OrbitMobile_MUI", "Refresh_GetEventsByMemberId", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wiZjLLkmxkGCdB6Qh+HZWQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Z02JKKbdLEe36AeCq4PA2g", callContext.id);
                // Refresh Query: Get_AdminEventsList
                var result = controller.get_AdminEventsList$DataActRefresh(callContext);
                model.flush();
                return result.then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JKMGiOKs002_UAEfC2srig", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:O35UxpY9HE25aY3zBVo6wg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:O35UxpY9HE25aY3zBVo6wg", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._onReady$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnReady");
            callContext = controller.callContext(callContext);
            var appManager_GetCachedUserInfoVar = new OS.DataTypes.VariableHolder();
            var wasCurrentViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.appManager_GetCachedUserInfoVar = appManager_GetCachedUserInfoVar;
            varBag.wasCurrentViewRestoredFromCacheJSResult = wasCurrentViewRestoredFromCacheJSResult;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:baROz_QxokmqKzLYWJKsNQ:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.Fihq8GAG4EWOA0SZ_Adj7w/ClientActions.baROz_QxokmqKzLYWJKsNQ:IMKDnfEq+HRlDEiTZ7GllQ", "Connect2_OrbitMobile_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JZGzwISzpkq+iRl_TZP81w", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:i+J7YPTMwEiNjSW8SpMRkw", callContext.id);
                wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminLanding_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnReady", {
                    FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.OnReady$wasCurrentViewRestoredFromCacheJSResult"))();
                    jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
                    return jsNodeResult;
                }, {}, {});
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:v8c8N3yBG0ivU3llkCIb0A", callContext.id) && wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut)) {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:91dC+BZIm0CG5CS8yc_aMg", callContext.id);
                    } else {
                        // Begin fetching
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:S93ogUlbUUaMLN1ht0YVGw", callContext.id);
                        // IsFetchingData = True
                        model.variables.isFetchingDataVar = true;
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ZPUf0LXudU+6UdAiPENZQQ", callContext.id);
                        // Execute Action: AppManager_GetCachedUserInfo
                        appManager_GetCachedUserInfoVar.value = UBT_AppManagerController.default.appManager_GetCachedUserInfo$Action(callContext);

                        // Set Admin Info
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rA+fK9My1UeS3Tb2OFo1ZA", callContext.id);
                        // UserFirstName = AppManager_GetCachedUserInfo.UserInformation.FirstName
                        model.variables.userFirstNameVar = appManager_GetCachedUserInfoVar.value.userInformationOut.firstNameAttr;
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rA+fK9My1UeS3Tb2OFo1ZA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                        // UserMemberId = If
                        model.variables.userMemberIdVar = ((OS.BuiltinFunctions.textToLongIntegerValidate(appManager_GetCachedUserInfoVar.value.userInformationOut.memberIdAttr)) ? (OS.BuiltinFunctions.textToLongInteger(appManager_GetCachedUserInfoVar.value.userInformationOut.memberIdAttr)) : (OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier())));
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:c4m71xLIg02L5shDxoWjjQ", callContext.id);
                        // Execute Action: Refresh_GetEventsByMemberId
                        return controller._refresh_GetEventsByMemberId$Action(callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yNY+cz0fFUOf0JiROjtqTw", callContext.id);
                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:baROz_QxokmqKzLYWJKsNQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:baROz_QxokmqKzLYWJKsNQ", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.OnReady$wasCurrentViewRestoredFromCacheJSResult", [{
            name: "FromCache",
            attrName: "fromCacheOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._onHandle_EventCardClicked$Action = function(eventSummaryIn, in_EventFriendlyTypeIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_EventCardClicked");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.OnHandle_EventCardClicked$vars"))());
            vars.value.eventSummaryInLocal = eventSummaryIn.clone();
            vars.value.in_EventFriendlyTypeInLocal = in_EventFriendlyTypeIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:hqtP4K1gKk+UguphphFHhg:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.Fihq8GAG4EWOA0SZ_Adj7w/ClientActions.hqtP4K1gKk+UguphphFHhg:Z0VNBacwzT3Gsm3GaBhK7g", "Connect2_OrbitMobile_MUI", "OnHandle_EventCardClicked", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+glh9tMsYkmDbXsLqcaxzQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TqNcade+j0mSUrXlU9R8YQ", callContext.id);
                // Trigger Event: NavigateTo_EventDetail
                return controller.navigateTo_EventDetail$Action(vars.value.eventSummaryInLocal.eventIdAttr, vars.value.eventSummaryInLocal.titleAttr, vars.value.eventSummaryInLocal.eventInfoAttr.startEventDateAttr, vars.value.eventSummaryInLocal.eventInfoAttr.endEventDateAttr, vars.value.eventSummaryInLocal.eventInfoAttr.eventLocationAttr, vars.value.in_EventFriendlyTypeInLocal, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Awf3HHrVSU+DAh+MJpCtEg", callContext.id);
                    // Execute Action: OnApplicationEvent_ClickEvent
                    model.flush();
                    return Connect2_OrbitMobile_MUIController.default.onApplicationEvent_ClickEvent$Action(function() {
                        var rec = new Connect2_OrbitMobile_MUIModel.AuditPayload_ClickEventRec();
                        rec.eventIdAttr = vars.value.eventSummaryInLocal.eventIdAttr;
                        rec.eventTitleAttr = vars.value.eventSummaryInLocal.titleAttr;
                        rec.eventLocationAttr = vars.value.eventSummaryInLocal.eventInfoAttr.eventLocationAttr;
                        rec.eventStartDateAttr = vars.value.eventSummaryInLocal.eventInfoAttr.startEventDateAttr;
                        rec.eventEndDateAttr = vars.value.eventSummaryInLocal.eventInfoAttr.endEventDateAttr;
                        return rec;
                    }(), callContext);
                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3keZxI5ugUaqMjEQMoB2_g", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:hqtP4K1gKk+UguphphFHhg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:hqtP4K1gKk+UguphphFHhg", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.OnHandle_EventCardClicked$vars", [{
            name: "EventSummary",
            attrName: "eventSummaryInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new Connect2_OrbitMobile_BLModel.Event_ScreenRec();
            },
            complexType: Connect2_OrbitMobile_BLModel.Event_ScreenRec
        }, {
            name: "In_EventFriendlyType",
            attrName: "in_EventFriendlyTypeInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._onAfterFetch_Get_AdminEventsList$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnAfterFetch_Get_AdminEventsList");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:o3pI_CvbZEmzzxDQMWBFkw:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.Fihq8GAG4EWOA0SZ_Adj7w/ClientActions.o3pI_CvbZEmzzxDQMWBFkw:mqORmvQF6+1AvmKHTBRzAg", "Connect2_OrbitMobile_MUI", "OnAfterFetch_Get_AdminEventsList", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JWikoRlnG0GRlAjQmWHTGA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KMTFZ3EbiEudXc7qqmkBGQ", callContext.id);
                // EventsSummary = Get_AdminEventsList.Response
                model.variables.eventsSummaryVar = model.variables.get_AdminEventsListDataAct.responseOut;
                // Finished Fetching
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:FAIjbBIdoU26SrQrInnY9Q", callContext.id);
                // IsFetchingData = False
                model.variables.isFetchingDataVar = false;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uZyWQIYoUEuciz2c6SkARQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:o3pI_CvbZEmzzxDQMWBFkw", callContext.id);
            }

        };

        Controller.prototype.refresh_GetEventsByMemberId$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._refresh_GetEventsByMemberId$Action, callContext);

        };
        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.onHandle_EventCardClicked$Action = function(eventSummaryIn, in_EventFriendlyTypeIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_EventCardClicked$Action, callContext, eventSummaryIn, in_EventFriendlyTypeIn);

        };
        Controller.prototype.onAfterFetch_Get_AdminEventsList$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onAfterFetch_Get_AdminEventsList$Action, callContext);

        };
        Controller.prototype.navigateTo_EventDetail$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:gsvXRoYDGUKLqTlTbKlOFA:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA:3HoUgFFZNBz79txQ+Fnk_A", "Connect2_OrbitMobile_MUI", "Orbit_ScreenBlocks_AdminFlow", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Fihq8GAG4EWOA0SZ_Adj7w:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.Fihq8GAG4EWOA0SZ_Adj7w:lowDycZRYNi8WEiUj_ky8g", "Connect2_OrbitMobile_MUI", "ScreenBlock_AdminLanding", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Fihq8GAG4EWOA0SZ_Adj7w", callContext.id);
            OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:gsvXRoYDGUKLqTlTbKlOFA", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminLanding On Ready");
                return controller.onReady$Action(callContext);

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
            return Connect2_OrbitMobile_MUIController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, Connect2_OrbitMobile_MUILanguageResources);
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
    };
});

define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminLanding.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "ZPUf0LXudU+6UdAiPENZQQ": {
            getter: function(varBag, idService) {
                return varBag.appManager_GetCachedUserInfoVar.value;
            }
        },
        "i+J7YPTMwEiNjSW8SpMRkw": {
            getter: function(varBag, idService) {
                return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
            }
        },
        "LhUQEqWk_EGCrBHCVUB63w": {
            getter: function(varBag, idService) {
                return varBag.vars.value.eventSummaryInLocal;
            }
        },
        "E3ALXqo3XUSij8pmtqJ7tg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_EventFriendlyTypeInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "rI7KeG7UdE2G+wcsoZ_fow": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isFetchingDataVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "fi8wiB3T8Uau4SZ2eB4uNQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.eventsSummaryVar;
            }
        },
        "ngHz_Oz3vkqfWqF21QPQ+w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.userFirstNameVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "2pBtCm7dAU6qiVhHcPaFTw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.userMemberIdVar;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "gxQUB9EQzEeMI1j4g1ymZg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.get_AdminEventsListDataAct;
            }
        },
        "duio8H53oE6SoFM4BsY79g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu"));
                })(varBag.model, idService);
            }
        },
        "3WCvBx8N_0yNwMVRGP_5MQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu"));
                })(varBag.model, idService);
            }
        },
        "MjBDGzzGlUa65kRvyl2Qyw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderLeft"));
                })(varBag.model, idService);
            }
        },
        "LNLqDtF7pUOrxtAPvthP_w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Title"));
                })(varBag.model, idService);
            }
        },
        "YKGGxd1UjECAJsF3cLpQiw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderRight"));
                })(varBag.model, idService);
            }
        },
        "31hqh+tVN0GSS+iqMyP8fw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderContent"));
                })(varBag.model, idService);
            }
        },
        "jNLg97Mkmk6lSXbtdhs5yQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "gmmqGnfMZU6B7oraCBR6Ww": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_IsNotFetching"));
                })(varBag.model, idService);
            }
        },
        "CfEZVO+ng0ikSAwCNTStnw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_HasFetchedData"));
                })(varBag.model, idService);
            }
        },
        "YPueI+YJo0e2AY+6jNdJXA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HasData"));
                })(varBag.model, idService);
            }
        },
        "ChCYCtH5kUuDwYpEAl0kxw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BottomBar"));
                })(varBag.model, idService);
            }
        },
        "2_dTT6QwSkqm9PyDOwLyTw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BottomBar"));
                })(varBag.model, idService);
            }
        },
        "okYlTsvpaka63XAzcMjU3g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements"));
                })(varBag.model, idService);
            }
        },
        "D3ycszJ2nkGwGw+xBK_b9g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});