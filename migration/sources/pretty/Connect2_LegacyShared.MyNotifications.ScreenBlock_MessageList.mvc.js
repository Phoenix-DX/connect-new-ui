define("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "UBT_AppManager_CS.model", "UBT_AppManager.controller", "Connect2_LegacyShared.controller", "NavigationHandler.controller", "Connect2_LegacyShared.model$LongIntegerBooleanMessageListItemListRecord", "Connect2_LegacyShared.model$MessageListItemList", "UBT_AppManager_CS.model$AppManager_DeviceContextRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBT_AppManager_CS", "UBT_AppManager.controller$AppManager_GetDeviceContext", "Connect2_LegacyShared.referencesHealth$UBT_AppManager", "Connect2_LegacyShared.controller$DecrementReadMessagesCounter", "NavigationHandler.controller$PreventNavigation", "Connect2_LegacyShared.referencesHealth$NavigationHandler", "Connect2_LegacyShared.controller$SynchronizeNumberUnreadMessages", "Connect2_LegacyShared.controller$SetUnreadNotificationsNumber"], function(OutSystems, Connect2_LegacySharedModel, UBT_AppManager_CSModel, UBT_AppManagerController, Connect2_LegacySharedController, NavigationHandlerController) {
    var OS = OutSystems.Internal;

    var GetMessagesDataActRec = (function(_super) {
        __extends(GetMessagesDataActRec, _super);

        function GetMessagesDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        GetMessagesDataActRec.attributesToDeclare = function() {
            return [
                this.attr("Messages", "messagesOut", "Messages", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.MessageListItemList());
                }, true, Connect2_LegacySharedModel.MessageListItemList),
                this.attr("HasUnreadMessages", "hasUnreadMessagesOut", "HasUnreadMessages", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, true),
                this.attr("CountUnreadMessages", "countUnreadMessagesOut", "CountUnreadMessages", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        GetMessagesDataActRec.init();
        return GetMessagesDataActRec;
    })(OS.Model.DataSourceRecord);
    var GetMessageInstanceById2DataActRec = (function(_super) {
        __extends(GetMessageInstanceById2DataActRec, _super);

        function GetMessageInstanceById2DataActRec(defaults) {
            _super.apply(this, arguments);
        }
        GetMessageInstanceById2DataActRec.attributesToDeclare = function() {
            return [
                this.attr("Exist", "existOut", "Exist", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        GetMessageInstanceById2DataActRec.fromStructure = function(str) {
            return new GetMessageInstanceById2DataActRec(new GetMessageInstanceById2DataActRec.RecordClass({
                existOut: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        GetMessageInstanceById2DataActRec.init();
        return GetMessageInstanceById2DataActRec;
    })(OS.Model.DataSourceRecord);

    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("ShowWarning", "showWarningVar", "ShowWarning", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("ShowFilters", "showFiltersVar", "ShowFilters", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("ShowSearch", "showSearchVar", "ShowSearch", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("SearchMessageString", "searchMessageStringVar", "SearchMessageString", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("OrderByIsAscending", "orderByIsAscendingVar", "OrderByIsAscending", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("SelectedHistorySearch", "selectedHistorySearchVar", "SelectedHistorySearch", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("DeviceHardwareId", "deviceHardwareIdVar", "DeviceHardwareId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("MaxRecords", "maxRecordsVar", "MaxRecords", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 20;
                }, false),
                this.attr("isLoadMore", "isLoadMoreVar", "isLoadMore", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("Filter_OrderASC", "filter_OrderASCVar", "Filter_OrderASC", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("Filter_OrderDESC", "filter_OrderDESCVar", "Filter_OrderDESC", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("Filter_MessageTypePrivate", "filter_MessageTypePrivateVar", "Filter_MessageTypePrivate", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return true;
                }, false),
                this.attr("Filter_MessageTypePublic", "filter_MessageTypePublicVar", "Filter_MessageTypePublic", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return true;
                }, false),
                this.attr("IsShowLoading", "isShowLoadingVar", "IsShowLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("IsEmptyMessage", "isEmptyMessageVar", "IsEmptyMessage", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("IsRefreshing", "isRefreshingVar", "IsRefreshing", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("MessagesList", "messagesListVar", "MessagesList", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.LongIntegerBooleanMessageListItemListRecord());
                }, false, Connect2_LegacySharedModel.LongIntegerBooleanMessageListItemListRecord),
                this.attr("HasUnread", "hasUnreadVar", "HasUnread", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("WarningMessage", "warningMessageVar", "WarningMessage", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "To access your Private Messages, please login to the Connect App.";
                }, false),
                this.attr("CurrentMessageInstanceId", "currentMessageInstanceIdVar", "CurrentMessageInstanceId", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("ForceInitiateLoginFlowDateTime", "forceInitiateLoginFlowDateTimeVar", "ForceInitiateLoginFlowDateTime", true, false, OS.DataTypes.DataTypes.DateTime, function() {
                    return OS.DataTypes.DateTime.defaultValue;
                }, false),
                this.attr("TotalPrivate", "totalPrivateVar", "TotalPrivate", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("TotalPublic", "totalPublicVar", "TotalPublic", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("SelectedFilter_OrderASC", "selectedFilter_OrderASCVar", "SelectedFilter_OrderASC", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("SelectedFilter_MessageTypePrivate", "selectedFilter_MessageTypePrivateVar", "SelectedFilter_MessageTypePrivate", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return true;
                }, false),
                this.attr("SelectedFilter_MessageTypePublic", "selectedFilter_MessageTypePublicVar", "SelectedFilter_MessageTypePublic", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return true;
                }, false),
                this.attr("Trigger_PullToRefresh", "trigger_PullToRefreshIn", "Trigger_PullToRefresh", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_trigger_PullToRefreshInDataFetchStatus", "_trigger_PullToRefreshInDataFetchStatus", "_trigger_PullToRefreshInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("GetMessages", "getMessagesDataAct", "getMessagesDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new GetMessagesDataActRec());
                }, true, GetMessagesDataActRec),
                this.attr("GetMessageInstanceById2", "getMessageInstanceById2DataAct", "getMessageInstanceById2DataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new GetMessageInstanceById2DataActRec());
                }, true, GetMessageInstanceById2DataActRec)
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
            return {
                Input_SearchMessages: OS.Model.ValidationWidgetRecord
            };
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
                return true;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("Trigger_PullToRefresh" in inputs) {
                this.variables.trigger_PullToRefreshIn = inputs.Trigger_PullToRefresh;
                if ("_trigger_PullToRefreshInDataFetchStatus" in inputs) {
                    this.variables._trigger_PullToRefreshInDataFetchStatus = inputs._trigger_PullToRefreshInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "MyNotifications.ScreenBlock_MessageList");
});
define("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "UBT_AppManager_CS.model", "UBT_AppManager.controller", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.mvc$model", "Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.mvc$controller", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.Layout.Layout.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$view", "Connect2_LegacyShared.Layout.MenuIcon_Back.mvc$view", "OutSystemsUI_2_23.Interaction.InputWithIcon.mvc$view", "Connect2_LegacyShared.UtilityFlow.MessageSearchHistory.mvc$view", "Connect2_LegacyShared.Reusable.Warning_PrivateMessage.mvc$view", "Connect2_LegacyShared.MyNotifications.MessageListBlock.mvc$view", "Connect2_LegacyShared.Reusable.MessageList_NoResults.mvc$view", "Connect2_LegacyShared.MyNotifications.MessageList_NoNotifications_Banner.mvc$view", "Connect2_LegacyShared.Reusable.Spinner.mvc$view", "OutSystemsUI_2_23.Interaction.Animate.mvc$view", "Connect2_LegacyShared.MyNotifications.MessageList_Filter.mvc$view", "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$view", "Connect2_LegacyShared.model$LongIntegerBooleanMessageListItemListRecord", "Connect2_LegacyShared.model$MessageListItemList", "UBT_AppManager_CS.model$AppManager_DeviceContextRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBT_AppManager_CS", "UBT_AppManager.controller$AppManager_GetDeviceContext", "Connect2_LegacyShared.referencesHealth$UBT_AppManager", "Connect2_LegacyShared.controller$DecrementReadMessagesCounter", "NavigationHandler.controller$PreventNavigation", "Connect2_LegacyShared.referencesHealth$NavigationHandler", "Connect2_LegacyShared.controller$SynchronizeNumberUnreadMessages", "Connect2_LegacyShared.controller$SetUnreadNotificationsNumber"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, UBT_AppManager_CSModel, UBT_AppManagerController, NavigationHandlerController, React, OSView, Connect2_LegacyShared_MyNotifications_ScreenBlock_MessageList_mvc_model, Connect2_LegacyShared_MyNotifications_ScreenBlock_MessageList_mvc_controller, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_Layout_Layout_mvc_view, OSWidgets, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_LegacyShared_Layout_MenuIcon_Back_mvc_view, OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_view, Connect2_LegacyShared_UtilityFlow_MessageSearchHistory_mvc_view, Connect2_LegacyShared_Reusable_Warning_PrivateMessage_mvc_view, Connect2_LegacyShared_MyNotifications_MessageListBlock_mvc_view, Connect2_LegacyShared_Reusable_MessageList_NoResults_mvc_view, Connect2_LegacyShared_MyNotifications_MessageList_NoNotifications_Banner_mvc_view, Connect2_LegacyShared_Reusable_Spinner_mvc_view, OutSystemsUI_2_23_Interaction_Animate_mvc_view, Connect2_LegacyShared_MyNotifications_MessageList_Filter_mvc_view, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view) {
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
        View.displayName = "MyNotifications.ScreenBlock_MessageList";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Layout_Layout_mvc_view, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_LegacyShared_Layout_MenuIcon_Back_mvc_view, OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_view, Connect2_LegacyShared_UtilityFlow_MessageSearchHistory_mvc_view, Connect2_LegacyShared_Reusable_Warning_PrivateMessage_mvc_view, Connect2_LegacyShared_MyNotifications_MessageListBlock_mvc_view, Connect2_LegacyShared_Reusable_MessageList_NoResults_mvc_view, Connect2_LegacyShared_MyNotifications_MessageList_NoNotifications_Banner_mvc_view, Connect2_LegacyShared_Reusable_Spinner_mvc_view, OutSystemsUI_2_23_Interaction_Animate_mvc_view, Connect2_LegacyShared_MyNotifications_MessageList_Filter_mvc_view, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return Connect2_LegacyShared_MyNotifications_ScreenBlock_MessageList_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_LegacyShared_MyNotifications_ScreenBlock_MessageList_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_LegacyShared_Layout_Layout_mvc_view, {
                inputs: {
                    UsePullToRefresh: true
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onPullToRefresh$Action: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Layout/Layout OnPullToRefresh");
                                return controller.pullToRefresh$Action(controller.callContext(eventHandlerContext));
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
                placeholders: {
                    menu: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.menu_IfLoggedIn,
                            _idProps: {
                                service: idService,
                                name: "Menu_IfLoggedIn"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    headerLeft: new PlaceholderContent(function() {
                        return [$if(((OS.BuiltinFunctions.getUserId()) !== (OS.BuiltinFunctions.nullIdentifier())), false, this, function() {
                            return [$if((model.variables.showSearchVar || model.variables.showFiltersVar), false, this, function() {
                                return [React.createElement(OSWidgets.Icon, {
                                    extendedEvents: {
                                        onClick: function() {
                                            return Promise.resolve().then(function() {
                                                var eventHandlerContext = callContext.clone();
                                                return OS.Flow.tryFinally(function() {
                                                    var varBag = {};
                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyNotifications/ScreenBlock_MessageList/Close_Search_Icon onclick");
                                                    return controller.onClick_CloseSearchAndFilter$Action(controller.callContext(eventHandlerContext));
                                                }, function() {
                                                    controller.popDebuggerContext(eventHandlerContext);
                                                });
                                            });;
                                        }
                                    },
                                    extendedProperties: {
                                        "data-icon": model.getCachedValue(idService.getId("Close_Search_Icon.data-icon"), function() {
                                            return ((model.variables.showSearchVar) ? ("icon-search") : ("icon-filter"));
                                        }, function() {
                                            return model.variables.showSearchVar;
                                        })
                                    },
                                    icon: "arrow-left",
                                    iconSize: /*FontSize*/ 0,
                                    style: "icon padding-y-s padding-x-s",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        name: "Close_Search_Icon"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })];
                            }, function() {
                                return [React.createElement(Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, {
                                    inputs: {
                                        MenuAction: Connect2_LegacySharedModel.staticEntities.menuAction.menu
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
                                        uuid: "3",
                                        alias: "2"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    _dependencies: []
                                })];
                            })];
                        }, function() {
                            return [React.createElement(Connect2_LegacyShared_Layout_MenuIcon_Back_mvc_view, {
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
                                    uuid: "4",
                                    alias: "3"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        })];
                    }),
                    title: new PlaceholderContent(function() {
                        return [$if((((model.variables.searchMessageStringVar) !== ("")) || model.variables.showSearchVar), false, this, function() {
                            return [React.createElement(OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_view, {
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
                                    uuid: "5",
                                    alias: "4"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    icon: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Icon, {
                                            icon: "search",
                                            iconSize: /*FontSize*/ 0,
                                            style: "icon",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "6"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        })];
                                    }),
                                    input: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Input, {
                                            _validationProps: {
                                                validationService: validationService
                                            },
                                            enabled: (model.variables.showSearchVar || ((model.variables.searchMessageStringVar) !== (""))),
                                            extendedEvents: {
                                                onKeyUp: function() {
                                                    var eventHandlerContext = callContext.clone();
                                                    return OS.Flow.tryFinally(function() {
                                                        var varBag = {};
                                                        controller.pushDebuggerContext(eventHandlerContext);

                                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyNotifications/ScreenBlock_MessageList/Input_SearchMessages onkeyup");
                                                        controller.onKeyup_SearchMessages$Action(controller.callContext(eventHandlerContext));
                                                    }, function() {
                                                        controller.popDebuggerContext(eventHandlerContext);
                                                    });

                                                    ;
                                                }
                                            },
                                            extendedProperties: {
                                                style: "display: block;"
                                            },
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            inputType: /*Search*/ 8,
                                            mandatory: false,
                                            maxLength: 50,
                                            prompt: "Search My Notifications...",
                                            style: "form-control search-input",
                                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.searchMessageStringVar, function(value) {
                                                model.variables.searchMessageStringVar = value;
                                            }),
                                            _idProps: {
                                                service: idService,
                                                name: "Input_SearchMessages"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }), React.createElement(OSWidgets.Icon, {
                                            extendedEvents: {
                                                onClick: function() {
                                                    return Promise.resolve().then(function() {
                                                        var eventHandlerContext = callContext.clone();
                                                        return OS.Flow.tryFinally(function() {
                                                            var varBag = {};
                                                            controller.pushDebuggerContext(eventHandlerContext);

                                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyNotifications/ScreenBlock_MessageList/Icon onclick");
                                                            return controller.onClickSearchClear$Action(controller.callContext(eventHandlerContext));
                                                        }, function() {
                                                            controller.popDebuggerContext(eventHandlerContext);
                                                        });
                                                    });;
                                                }
                                            },
                                            extendedProperties: {
                                                style: "color: #d3d3d3; padding: 10px; position: absolute; right: 0px; top: 5px;"
                                            },
                                            icon: "remove",
                                            iconSize: /*FontSize*/ 0,
                                            style: "icon",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "8"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        })];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(model.variables.showSearchVar), asPrimitiveValue(model.variables.searchMessageStringVar)]
                            })];
                        }, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                style: "text-align-center",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "9"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Expression, {
                                value: model.getCachedValue(idService.getId("HBo29SqzZ0Gtz0NvBbnwkw.Value"), function() {
                                    return ((model.variables.showFiltersVar) ? ("Sort") : ("My Notifications"));
                                }, function() {
                                    return model.variables.showFiltersVar;
                                }),
                                _idProps: {
                                    service: idService,
                                    uuid: "10"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }))];
                        })];
                    }),
                    headerRight: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "11"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $if(model.variables.showSearchVar, false, this, function() {
                            return [];
                        }, function() {
                            return [React.createElement(OSWidgets.Icon, {
                                extendedEvents: {
                                    onClick: function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyNotifications/ScreenBlock_MessageList/Search_Icon onclick");
                                            controller.onClick_Search$Action(controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });

                                        ;
                                    }
                                },
                                extendedProperties: {
                                    style: "margin-right: 0px; padding: 5px;"
                                },
                                icon: "search",
                                iconSize: /*FontSize*/ 0,
                                style: "icon padding-y-s padding-x-s",
                                visible: !(model.variables.showFiltersVar),
                                _idProps: {
                                    service: idService,
                                    name: "Search_Icon"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        }), $if(model.variables.showFiltersVar, false, this, function() {
                            return [React.createElement(OSWidgets.Icon, {
                                extendedEvents: {
                                    onClick: function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyNotifications/ScreenBlock_MessageList/Close_Filter_Icon onclick");
                                            controller.toggleShowFilters$Action(controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });

                                        ;
                                    }
                                },
                                extendedProperties: {
                                    style: "margin-right: 0px;"
                                },
                                gridProperties: {
                                    marginLeft: "0"
                                },
                                icon: "remove",
                                iconSize: /*FontSize*/ 0,
                                style: "icon padding-y-s padding-x-s margin-left-base",
                                visible: !(model.variables.showSearchVar),
                                _idProps: {
                                    service: idService,
                                    name: "Close_Filter_Icon"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        }, function() {
                            return [React.createElement(OSWidgets.Icon, {
                                extendedEvents: {
                                    onClick: function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyNotifications/ScreenBlock_MessageList/Filter_Icon onclick");
                                            controller.onClick_Filter$Action(controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });

                                        ;
                                    }
                                },
                                extendedProperties: {
                                    style: "margin-right: 0px; padding: 5px;"
                                },
                                gridProperties: {
                                    marginLeft: "0px"
                                },
                                icon: "filter",
                                iconSize: /*FontSize*/ 0,
                                style: "icon padding-y-s padding-x-s margin-left-base",
                                visible: !(model.variables.showSearchVar),
                                _idProps: {
                                    service: idService,
                                    name: "Filter_Icon"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            gridProperties: {
                                classes: "ThemeGrid_Width1"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "15"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))];
                    }),
                    headerContent: PlaceholderContent.Empty,
                    content: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "message-list",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "16"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $if(!(model.variables.showSearchVar), false, this, function() {
                            return [];
                        }, function() {
                            return [React.createElement(Connect2_LegacyShared_UtilityFlow_MessageSearchHistory_mvc_view, {
                                inputs: {
                                    SearchString: model.variables.searchMessageStringVar,
                                    RecentSearchTypeId: Connect2_LegacySharedModel.staticEntities.recentSearchType.myNotifications
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
                                    uuid: "17",
                                    alias: "5"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: !(model.variables.isShowLoadingVar),
                            _idProps: {
                                service: idService,
                                name: "FilterDataBlock"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, $if(!(model.variables.showFiltersVar), false, this, function() {
                            return [$if(model.variables.showWarningVar, false, this, function() {
                                return [];
                            }, function() {
                                return [React.createElement(Connect2_LegacyShared_Reusable_Warning_PrivateMessage_mvc_view, {
                                    inputs: {
                                        Message: model.variables.warningMessageVar
                                    },
                                    events: {
                                        _handleError: function(ex) {
                                            controller.handleError(ex);
                                        },
                                        navigateTo_Login$Action: function() {
                                            var eventHandlerContext = callContext.clone();
                                            return OS.Flow.tryFinally(function() {
                                                var varBag = {};
                                                controller.pushDebuggerContext(eventHandlerContext);

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Reusable/Warning_PrivateMessage NavigateTo_Login");
                                                controller.handler_NavigateTo_Login$Action(controller.callContext(eventHandlerContext));
                                            }, function() {
                                                controller.popDebuggerContext(eventHandlerContext);
                                            });

                                            ;
                                        },
                                        dismiss$Action: function() {
                                            var eventHandlerContext = callContext.clone();
                                            return OS.Flow.tryFinally(function() {
                                                var varBag = {};
                                                controller.pushDebuggerContext(eventHandlerContext);

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Reusable/Warning_PrivateMessage Dismiss");
                                                controller.dismiss_WarningMessage$Action(controller.callContext(eventHandlerContext));
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
                                        uuid: "19",
                                        alias: "6"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    _dependencies: []
                                })];
                            }), $if(!(model.variables.messagesListVar.itemsAttr.isEmpty), false, this, function() {
                                return [React.createElement(Connect2_LegacyShared_MyNotifications_MessageListBlock_mvc_view, {
                                    inputs: {
                                        IsShowLoading: model.variables.isShowLoadingVar,
                                        MessagesList: model.variables.messagesListVar
                                    },
                                    events: {
                                        _handleError: function(ex) {
                                            controller.handleError(ex);
                                        },
                                        swipeEventsClear$Action: function(messageInstanceIdIn) {
                                            return Promise.resolve().then(function() {
                                                var eventHandlerContext = callContext.clone();
                                                return OS.Flow.tryFinally(function() {
                                                    var varBag = {};
                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyNotifications/MessageListBlock SwipeEventsClear");
                                                    return controller.swipe_EventsClear$Action(messageInstanceIdIn, controller.callContext(eventHandlerContext));
                                                }, function() {
                                                    controller.popDebuggerContext(eventHandlerContext);
                                                });
                                            });;
                                        },
                                        markAllRead$Action: function() {
                                            return Promise.resolve().then(function() {
                                                var eventHandlerContext = callContext.clone();
                                                return OS.Flow.tryFinally(function() {
                                                    var varBag = {};
                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyNotifications/MessageListBlock MarkAllRead");
                                                    return controller.onClick_MarkAllAsRead$Action(controller.callContext(eventHandlerContext));
                                                }, function() {
                                                    controller.popDebuggerContext(eventHandlerContext);
                                                });
                                            });;
                                        },
                                        onClick_GoToMessageDetail$Action: function(messageInstanceIdIn, isReadIn) {
                                            return Promise.resolve().then(function() {
                                                var eventHandlerContext = callContext.clone();
                                                return OS.Flow.tryFinally(function() {
                                                    var varBag = {};
                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyNotifications/MessageListBlock OnClick_GoToMessageDetail");
                                                    return controller.onClick_GoToMessageDetail$Action(messageInstanceIdIn, controller.callContext(eventHandlerContext));
                                                }, function() {
                                                    controller.popDebuggerContext(eventHandlerContext);
                                                });
                                            });;
                                        },
                                        swipeEventsRead$Action: function(messageInstanceIdIn) {
                                            return Promise.resolve().then(function() {
                                                var eventHandlerContext = callContext.clone();
                                                return OS.Flow.tryFinally(function() {
                                                    var varBag = {};
                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyNotifications/MessageListBlock SwipeEventsRead");
                                                    return controller.swipe_EventsRead$Action(messageInstanceIdIn, controller.callContext(eventHandlerContext));
                                                }, function() {
                                                    controller.popDebuggerContext(eventHandlerContext);
                                                });
                                            });;
                                        },
                                        onScrollEnding$Action: function() {
                                            return Promise.resolve().then(function() {
                                                var eventHandlerContext = callContext.clone();
                                                return OS.Flow.tryFinally(function() {
                                                    var varBag = {};
                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyNotifications/MessageListBlock OnScrollEnding");
                                                    return controller.onScrollEnding$Action(controller.callContext(eventHandlerContext));
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
                                        uuid: "20",
                                        alias: "7"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    _dependencies: []
                                })];
                            }, function() {
                                return [$if((model.variables.getMessagesDataAct.isDataFetchedAttr && (((((OS.BuiltinFunctions.getUserId()) !== (OS.BuiltinFunctions.nullIdentifier())) && !(model.variables.filter_MessageTypePrivateVar)) || !(model.variables.filter_MessageTypePublicVar)) || ((model.variables.searchMessageStringVar) !== ("")))), false, this, function() {
                                    return [$if(((model.variables.getMessagesDataAct.isDataFetchedAttr && model.variables.messagesListVar.itemsAttr.isEmpty) && !(model.variables.isEmptyMessageVar)), false, this, function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "21"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(Connect2_LegacyShared_Reusable_MessageList_NoResults_mvc_view, {
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
                                                uuid: "22",
                                                alias: "8"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            placeholders: {
                                                placeholder1: new PlaceholderContent(function() {
                                                    return ["Make sure that all words are spelled correctly."];
                                                }),
                                                placeholder2: new PlaceholderContent(function() {
                                                    return ["Try different keyword."];
                                                }),
                                                placeholder3: new PlaceholderContent(function() {
                                                    return ["Clear filter."];
                                                })
                                            },
                                            _dependencies: []
                                        }))];
                                    }, function() {
                                        return [React.createElement(Connect2_LegacyShared_MyNotifications_MessageList_NoNotifications_Banner_mvc_view, {
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
                                                uuid: "23",
                                                alias: "9"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        })];
                                    })];
                                }, function() {
                                    return [$if((model.variables.getMessagesDataAct.isDataFetchedAttr && model.variables.messagesListVar.itemsAttr.isEmpty), false, this, function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "24"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }), React.createElement(Connect2_LegacyShared_MyNotifications_MessageList_NoNotifications_Banner_mvc_view, {
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
                                                uuid: "25",
                                                alias: "10"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        })];
                                    }, function() {
                                        return [];
                                    })];
                                })];
                            }), React.createElement(Connect2_LegacyShared_Reusable_Spinner_mvc_view, {
                                inputs: {
                                    ShowLoader: model.variables.isLoadMoreVar
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
                                    uuid: "26",
                                    alias: "11"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        }, function() {
                            return [React.createElement(OutSystemsUI_2_23_Interaction_Animate_mvc_view, {
                                inputs: {
                                    Speed: Connect2_LegacySharedModel.staticEntities.speed.fast,
                                    AnimationType: Connect2_LegacySharedModel.staticEntities.animationType.rightToLeft
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
                                    uuid: "27",
                                    alias: "12"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    content: new PlaceholderContent(function() {
                                        return [React.createElement(Connect2_LegacyShared_MyNotifications_MessageList_Filter_mvc_view, {
                                            inputs: {
                                                Filter_OrderASC: model.variables.filter_OrderASCVar,
                                                Filter_OrderDESC: model.variables.filter_OrderDESCVar
                                            },
                                            events: {
                                                _handleError: function(ex) {
                                                    controller.handleError(ex);
                                                },
                                                applyFilters$Action: function() {
                                                    return Promise.resolve().then(function() {
                                                        var eventHandlerContext = callContext.clone();
                                                        return OS.Flow.tryFinally(function() {
                                                            var varBag = {};
                                                            controller.pushDebuggerContext(eventHandlerContext);

                                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyNotifications/MessageList_Filter ApplyFilters");
                                                            return controller.onClick_ApplyFilters$Action(controller.callContext(eventHandlerContext));
                                                        }, function() {
                                                            controller.popDebuggerContext(eventHandlerContext);
                                                        });
                                                    });;
                                                },
                                                messageSort$Action: function(isAscendingIn) {
                                                    var eventHandlerContext = callContext.clone();
                                                    return OS.Flow.tryFinally(function() {
                                                        var varBag = {};
                                                        controller.pushDebuggerContext(eventHandlerContext);

                                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyNotifications/MessageList_Filter MessageSort");
                                                        controller.onChange_MessageSort$Action(isAscendingIn, controller.callContext(eventHandlerContext));
                                                    }, function() {
                                                        controller.popDebuggerContext(eventHandlerContext);
                                                    });

                                                    ;
                                                },
                                                resetFilters$Action: function() {
                                                    return Promise.resolve().then(function() {
                                                        var eventHandlerContext = callContext.clone();
                                                        return OS.Flow.tryFinally(function() {
                                                            var varBag = {};
                                                            controller.pushDebuggerContext(eventHandlerContext);

                                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyNotifications/MessageList_Filter ResetFilters");
                                                            return controller.onClick_ResetFilters$Action(controller.callContext(eventHandlerContext));
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
                                                uuid: "28",
                                                alias: "13"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        })];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(model.variables.filter_OrderDESCVar), asPrimitiveValue(model.variables.filter_OrderASCVar)]
                            })];
                        })), React.createElement(Connect2_LegacyShared_Reusable_Spinner_mvc_view, {
                            inputs: {
                                ShowLoader: model.variables.isShowLoadingVar
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
                                name: "LoadingMarkAllRead",
                                alias: "14"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })), React.createElement(NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view, {
                            inputs: {},
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                backNavigation$Action: function(backNavigationEventIn) {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);

                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "NavigationHandler/BackNavigationHandler BackNavigation");
                                        controller.backNavigationHandler$Action(backNavigationEventIn, controller.callContext(eventHandlerContext));
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
                                uuid: "30",
                                alias: "15"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
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
define("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "UBT_AppManager_CS.model", "UBT_AppManager.controller", "NavigationHandler.controller", "Connect2_LegacyShared.languageResources", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.mvc$debugger", "Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.mvc$controller.OnInitialize.FocusCursorJS", "Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.mvc$controller.OnInitialize.WasCurrentViewRestoredFromCacheJS", "Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.mvc$controller.OnClick_Search.FocusCursorJS", "Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.mvc$controller.RefreshMessages.ScrollToTopJS", "Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.mvc$controller.OnClickSearchClear.SetScrollToTopJS", "Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.mvc$controller.OnClick_CloseSearchAndFilter.WasCurrentViewRestoredFromCacheJS", "Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.mvc$controller.OnClick_CloseSearchAndFilter.FocusCursorJS", "Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.mvc$controller.OnKeyup_SearchMessages.CheckForEnterKeyJS", "Connect2_LegacyShared.model$LongIntegerBooleanMessageListItemListRecord", "Connect2_LegacyShared.model$MessageListItemList", "UBT_AppManager_CS.model$AppManager_DeviceContextRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBT_AppManager_CS", "UBT_AppManager.controller$AppManager_GetDeviceContext", "Connect2_LegacyShared.referencesHealth$UBT_AppManager", "Connect2_LegacyShared.controller$DecrementReadMessagesCounter", "NavigationHandler.controller$PreventNavigation", "Connect2_LegacyShared.referencesHealth$NavigationHandler", "Connect2_LegacyShared.controller$SynchronizeNumberUnreadMessages", "Connect2_LegacyShared.controller$SetUnreadNotificationsNumber"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, UBT_AppManager_CSModel, UBT_AppManagerController, NavigationHandlerController, Connect2_LegacySharedLanguageResources, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_MyNotifications_ScreenBlock_MessageList_mvc_Debugger, Connect2_LegacyShared_MyNotifications_ScreenBlock_MessageList_mvc_controller_OnInitialize_FocusCursorJS, Connect2_LegacyShared_MyNotifications_ScreenBlock_MessageList_mvc_controller_OnInitialize_WasCurrentViewRestoredFromCacheJS, Connect2_LegacyShared_MyNotifications_ScreenBlock_MessageList_mvc_controller_OnClick_Search_FocusCursorJS, Connect2_LegacyShared_MyNotifications_ScreenBlock_MessageList_mvc_controller_RefreshMessages_ScrollToTopJS, Connect2_LegacyShared_MyNotifications_ScreenBlock_MessageList_mvc_controller_OnClickSearchClear_SetScrollToTopJS, Connect2_LegacyShared_MyNotifications_ScreenBlock_MessageList_mvc_controller_OnClick_CloseSearchAndFilter_WasCurrentViewRestoredFromCacheJS, Connect2_LegacyShared_MyNotifications_ScreenBlock_MessageList_mvc_controller_OnClick_CloseSearchAndFilter_FocusCursorJS, Connect2_LegacyShared_MyNotifications_ScreenBlock_MessageList_mvc_controller_OnKeyup_SearchMessages_CheckForEnterKeyJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {
                onHandle_SearchHistorySelectedItem$Action: function(selectedStringIn) {
                    selectedStringIn = (selectedStringIn === undefined) ? "" : selectedStringIn;
                    return controller.executeActionInsideJSNode(controller._onHandle_SearchHistorySelectedItem$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(selectedStringIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "OnHandle_SearchHistorySelectedItem");
                }
            };
            this.dataFetchDependenciesOriginal = {
                getMessages$DataActRefresh: -1,
                getMessageInstanceById2$DataActRefresh: -1
            };
            this.dataFetchDependentsGraph = {
                getMessages$DataActRefresh: [],
                getMessageInstanceById2$DataActRefresh: []
            };
            this.shouldSendClientVarsToDataSources = false;
        }
        // Server Actions
        Controller.prototype.wrapper_MarkAllAsReadNotifications$ServerAction = function(isPublicIn, isPrivateIn, deviceHardwareIdIn, searchTermIn, callContext) {
            var controller = this.controller;
            var inputs = {
                IsPublic: OS.DataConversion.ServerDataConverter.to(isPublicIn, OS.DataTypes.DataTypes.Boolean),
                IsPrivate: OS.DataConversion.ServerDataConverter.to(isPrivateIn, OS.DataTypes.DataTypes.Boolean),
                DeviceHardwareId: OS.DataConversion.ServerDataConverter.to(deviceHardwareIdIn, OS.DataTypes.DataTypes.Text),
                SearchTerm: OS.DataConversion.ServerDataConverter.to(searchTermIn, OS.DataTypes.DataTypes.Text)
            };
            return controller.callServerAction("Wrapper_MarkAllAsReadNotifications", "screenservices/Connect2_LegacyShared/MyNotifications/ScreenBlock_MessageList/ActionWrapper_MarkAllAsReadNotifications", "WVWLMJD5RlPnLGW7E41vVg", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
            }, false).then(function(outputs) {
                var executeServerActionResult = new(controller.constructor.getVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList$ActionWrapper_MarkAllAsReadNotifications"))();
                executeServerActionResult.totalChangeOut = OS.DataConversion.ServerDataConverter.from(outputs.TotalChange, OS.DataTypes.DataTypes.Integer);
                return executeServerActionResult;
            });
        };
        Controller.registerVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList$ActionWrapper_MarkAllAsReadNotifications", [{
            name: "TotalChange",
            attrName: "totalChangeOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }]);
        Controller.prototype.markMessageAsRead$ServerAction = function(messageInstanceIdIn, deviceHardwareIdIn, selectedHistorySearchIn, messageTypePrivateIn, messageTypePublicIn, callContext) {
            var controller = this.controller;
            var inputs = {
                MessageInstanceId: OS.DataConversion.ServerDataConverter.to(messageInstanceIdIn, OS.DataTypes.DataTypes.LongInteger),
                DeviceHardwareId: OS.DataConversion.ServerDataConverter.to(deviceHardwareIdIn, OS.DataTypes.DataTypes.Text),
                SelectedHistorySearch: OS.DataConversion.ServerDataConverter.to(selectedHistorySearchIn, OS.DataTypes.DataTypes.Text),
                MessageTypePrivate: OS.DataConversion.ServerDataConverter.to(messageTypePrivateIn, OS.DataTypes.DataTypes.Boolean),
                MessageTypePublic: OS.DataConversion.ServerDataConverter.to(messageTypePublicIn, OS.DataTypes.DataTypes.Boolean)
            };
            return controller.callServerAction("MarkMessageAsRead", "screenservices/Connect2_LegacyShared/MyNotifications/ScreenBlock_MessageList/ActionMarkMessageAsRead", "Bh68aDt7ICLQ35L0mN0npw", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
            }, false).then(function(outputs) {
                var executeServerActionResult = new(controller.constructor.getVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList$ActionMarkMessageAsRead"))();
                executeServerActionResult.hasUnreadMessagesOut = OS.DataConversion.ServerDataConverter.from(outputs.HasUnreadMessages, OS.DataTypes.DataTypes.Boolean);
                return executeServerActionResult;
            });
        };
        Controller.registerVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList$ActionMarkMessageAsRead", [{
            name: "HasUnreadMessages",
            attrName: "hasUnreadMessagesOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype.markMessageAsClear$ServerAction = function(messageInstanceIdIn, deviceHardwareIdIn, selectedHistorySearchIn, messageTypePrivateIn, messageTypePublicIn, callContext) {
            var controller = this.controller;
            var inputs = {
                MessageInstanceId: OS.DataConversion.ServerDataConverter.to(messageInstanceIdIn, OS.DataTypes.DataTypes.LongInteger),
                DeviceHardwareId: OS.DataConversion.ServerDataConverter.to(deviceHardwareIdIn, OS.DataTypes.DataTypes.Text),
                SelectedHistorySearch: OS.DataConversion.ServerDataConverter.to(selectedHistorySearchIn, OS.DataTypes.DataTypes.Text),
                MessageTypePrivate: OS.DataConversion.ServerDataConverter.to(messageTypePrivateIn, OS.DataTypes.DataTypes.Boolean),
                MessageTypePublic: OS.DataConversion.ServerDataConverter.to(messageTypePublicIn, OS.DataTypes.DataTypes.Boolean)
            };
            return controller.callServerAction("MarkMessageAsClear", "screenservices/Connect2_LegacyShared/MyNotifications/ScreenBlock_MessageList/ActionMarkMessageAsClear", "aTmlhhoF2840O54n7itWZA", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
            }, false).then(function(outputs) {
                var executeServerActionResult = new(controller.constructor.getVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList$ActionMarkMessageAsClear"))();
                executeServerActionResult.isReadOut = OS.DataConversion.ServerDataConverter.from(outputs.IsRead, OS.DataTypes.DataTypes.Boolean);
                executeServerActionResult.hasUnreadMessagesOut = OS.DataConversion.ServerDataConverter.from(outputs.HasUnreadMessages, OS.DataTypes.DataTypes.Boolean);
                executeServerActionResult.isHaveMessageOut = OS.DataConversion.ServerDataConverter.from(outputs.IsHaveMessage, OS.DataTypes.DataTypes.Boolean);
                return executeServerActionResult;
            });
        };
        Controller.registerVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList$ActionMarkMessageAsClear", [{
            name: "IsRead",
            attrName: "isReadOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "HasUnreadMessages",
            attrName: "hasUnreadMessagesOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "IsHaveMessage",
            attrName: "isHaveMessageOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);

        // Aggregates and Data Actions
        Controller.prototype.getMessages$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:EJQIFi0E10a0PRyWNHlwAg:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.n0_zftvMk06xYTZKgLQJKQ/DataActions.EJQIFi0E10a0PRyWNHlwAg:0k6gZucczwtFsB9xAKSrKQ", "Connect2_LegacyShared", "GetMessages", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "MyNotifications/ScreenBlock_MessageList/GetMessages");
                return controller.callDataAction("DataActionGetMessages", "screenservices/Connect2_LegacyShared/MyNotifications/ScreenBlock_MessageList/DataActionGetMessages", "AEMbTIyYZL+LQHm7WraD7g", function(b) {
                    model.variables.getMessagesDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.getMessagesDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getMessagesDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false).then(function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "MyNotifications/ScreenBlock_MessageList/GetMessages On After Fetch");
                    controller._onAfterFetch_GetMessages$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:EJQIFi0E10a0PRyWNHlwAg", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };
        Controller.prototype.getMessageInstanceById2$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:g00fqahLUkC8lRnuhp7Tjg:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.n0_zftvMk06xYTZKgLQJKQ/DataActions.g00fqahLUkC8lRnuhp7Tjg:A5sbdRKzbiDDPUb153d4FQ", "Connect2_LegacyShared", "GetMessageInstanceById2", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "MyNotifications/ScreenBlock_MessageList/GetMessageInstanceById2");
                return controller.callDataAction("DataActionGetMessageInstanceById2", "screenservices/Connect2_LegacyShared/MyNotifications/ScreenBlock_MessageList/DataActionGetMessageInstanceById2", "lFUUPBq4M7uCdMDN9egNaw", function(b) {
                    model.variables.getMessageInstanceById2DataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.getMessageInstanceById2DataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getMessageInstanceById2DataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false);

            }, function() {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:g00fqahLUkC8lRnuhp7Tjg", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };

        Controller.prototype.dataFetchActionNames = ["getMessages$DataActRefresh", "getMessageInstanceById2$DataActRefresh"];
        // Client Actions
        Controller.prototype._onInitialize$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnInitialize");
            callContext = controller.callContext(callContext);
            var appManager_GetDeviceContextVar = new OS.DataTypes.VariableHolder();
            var wasCurrentViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.appManager_GetDeviceContextVar = appManager_GetDeviceContextVar;
            varBag.wasCurrentViewRestoredFromCacheJSResult = wasCurrentViewRestoredFromCacheJSResult;
            try {
                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:UsIzAZ2yYk699OyRgqWwYA:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.n0_zftvMk06xYTZKgLQJKQ/ClientActions.UsIzAZ2yYk699OyRgqWwYA:n6CFyolx05+_o0DYPUe76Q", "Connect2_LegacyShared", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:xRH7Pit+V0uQAQm9jIYkfQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:S3ln3Ah5KU+GQxTjd1temA", callContext.id);
                wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_LegacyShared_MyNotifications_ScreenBlock_MessageList_mvc_controller_OnInitialize_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnInitialize", {
                    FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.OnInitialize$wasCurrentViewRestoredFromCacheJSResult"))();
                    jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
                    return jsNodeResult;
                }, {}, {});
                if ((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:RMajylbQ0kaf8ieRPtunhA", callContext.id) && wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut)) {
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:FiHhxhdGnEimuZJ7mSVI0w", callContext.id);
                    controller.safeExecuteJSNode(Connect2_LegacyShared_MyNotifications_ScreenBlock_MessageList_mvc_controller_OnInitialize_FocusCursorJS, "FocusCursor", "OnInitialize", {
                        InputWidgetID: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Input_SearchMessages"), OS.DataTypes.DataTypes.Text)
                    }, function($parameters) {}, {}, {});
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:TAaEin1QwEuCW4C5QLrLLQ", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:0z7ZbxoqZk2TPZ2rCLjMzw", callContext.id);
                    // SelectedFilter_MessageTypePrivate = True
                    model.variables.selectedFilter_MessageTypePrivateVar = true;
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:0z7ZbxoqZk2TPZ2rCLjMzw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // SelectedFilter_MessageTypePublic = True
                    model.variables.selectedFilter_MessageTypePublicVar = true;
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:0z7ZbxoqZk2TPZ2rCLjMzw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                    // SelectedFilter_OrderASC = False
                    model.variables.selectedFilter_OrderASCVar = false;
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:YOcVCxWQgk6pb5hfyGmawQ", callContext.id);
                    // Execute Action: AppManager_GetDeviceContext
                    appManager_GetDeviceContextVar.value = UBT_AppManagerController.default.appManager_GetDeviceContext$Action(callContext);

                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Fkb69u6AqUu5n8+IGiSk6Q", callContext.id);
                    // DeviceHardwareId = AppManager_GetDeviceContext.AppManager_MobileContext.UUID
                    model.variables.deviceHardwareIdVar = appManager_GetDeviceContextVar.value.appManager_MobileContextOut.uUIDAttr;
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:j7HBzeLCO0OpqKJ1sxcXBA", callContext.id);
                    // Execute Action: InitializeSetting
                    controller._initializeSetting$Action(callContext);
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:qU7LMX9n102NLPv0NzoT5g", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:UsIzAZ2yYk699OyRgqWwYA", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.OnInitialize$wasCurrentViewRestoredFromCacheJSResult", [{
            name: "FromCache",
            attrName: "fromCacheOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._pullToRefresh$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("PullToRefresh");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:Cy_gBXsS7Um_aJsxuBXteA:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.n0_zftvMk06xYTZKgLQJKQ/ClientActions.Cy_gBXsS7Um_aJsxuBXteA:USnMtz3IHeuH_3JuUnt2JQ", "Connect2_LegacyShared", "PullToRefresh", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:2NlHDf8cukOvgLPcshHlPg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:4ZV5ulY6XUOwq+tPSud4fw", callContext.id) && model.variables.isRefreshingVar)) {
                        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:YLSfCAW4AE+sNV5WeuvWKw", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:DAwHKGi3jkKI8VyWV6lObA", callContext.id);
                        // Execute Action: RefreshMessages
                        return controller._refreshMessages$Action(false, callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:7cvrRNC6_EmUGHuzbrGBXQ", callContext.id);
                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:Cy_gBXsS7Um_aJsxuBXteA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:Cy_gBXsS7Um_aJsxuBXteA", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._onClick_Search$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_Search");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:73x_CIbJd0mMm_RPMnatIg:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.n0_zftvMk06xYTZKgLQJKQ/ClientActions.73x_CIbJd0mMm_RPMnatIg:HJ5ORggIT1WbHcTOrwuQeQ", "Connect2_LegacyShared", "OnClick_Search", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:X8om0ow6jUShOS0yjttLBw", callContext.id);
                // Hide Filters
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Hfm+DW75pEO5rcbiW4HHPw", callContext.id);
                // ShowFilters = False
                model.variables.showFiltersVar = false;
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:sd0h950L70ql0z8i+Z6eYw", callContext.id);
                // Execute Action: ToggleShowSearch
                controller._toggleShowSearch$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:r7QHfnfVjU6pK3h7ymaYDA", callContext.id);
                controller.safeExecuteJSNode(Connect2_LegacyShared_MyNotifications_ScreenBlock_MessageList_mvc_controller_OnClick_Search_FocusCursorJS, "FocusCursor", "OnClick_Search", {
                    InputWidgetID: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Input_SearchMessages"), OS.DataTypes.DataTypes.Text)
                }, function($parameters) {}, {}, {});
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:55pruVf0m0ijlFqWYBMlwA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:73x_CIbJd0mMm_RPMnatIg", callContext.id);
            }

        };
        Controller.prototype._b2C_SignInFlowControllerSignInCompleted$Action = function(redirectToIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("B2C_SignInFlowControllerSignInCompleted");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.B2C_SignInFlowControllerSignInCompleted$vars"))());
            vars.value.redirectToInLocal = redirectToIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:89_YI6Gl4kGyJj7txZtWcg:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.n0_zftvMk06xYTZKgLQJKQ/ClientActions.89_YI6Gl4kGyJj7txZtWcg:2AzZkONqi6sL+zKHADmofw", "Connect2_LegacyShared", "B2C_SignInFlowControllerSignInCompleted", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:AXsirupbpE+IBHhmm3CxYg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                // ForceInitiateLoginFlowDateTime
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:oQdF_B2tKEaCeXZgOT4SWw", callContext.id);
                // ForceInitiateLoginFlowDateTime = NullDate
                model.variables.forceInitiateLoginFlowDateTimeVar = OS.BuiltinFunctions.nullDate();
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:2FVVvk3+6EaeEvzdJsPxFQ", callContext.id);
                // Trigger Event: NavigateTo_B2CCallback
                return controller.navigateTo_B2CCallback$Action(vars.value.redirectToInLocal, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:ebv68t3V3Eu1_DMC9h9u8w", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:89_YI6Gl4kGyJj7txZtWcg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:89_YI6Gl4kGyJj7txZtWcg", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.B2C_SignInFlowControllerSignInCompleted$vars", [{
            name: "RedirectTo",
            attrName: "redirectToInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._onReady$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnReady");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:RTAyMTJD3UyZJo7ssD9m0Q:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.n0_zftvMk06xYTZKgLQJKQ/ClientActions.RTAyMTJD3UyZJo7ssD9m0Q:ueh2jFzMACB8JhHEkor5yA", "Connect2_LegacyShared", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:db7RxPdTeEmEhCzzcy9APg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:FkS6rmqP5EWN3EPrQqhelg", callContext.id);
                // Refresh Query: GetMessages
                var result = controller.getMessages$DataActRefresh(callContext);
                model.flush();
                return result.then(function() {
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Y_0dzRmSq0uRC2Tu6yz2hQ", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:RTAyMTJD3UyZJo7ssD9m0Q", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:RTAyMTJD3UyZJo7ssD9m0Q", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._onHandle_SearchHistorySelectedItem$Action = function(selectedStringIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_SearchHistorySelectedItem");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.OnHandle_SearchHistorySelectedItem$vars"))());
            vars.value.selectedStringInLocal = selectedStringIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:omQJOU_eXEiOdUOgzg_Ncg:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.n0_zftvMk06xYTZKgLQJKQ/ClientActions.omQJOU_eXEiOdUOgzg_Ncg:kZFRsx7HKVGYBYaixNAUSw", "Connect2_LegacyShared", "OnHandle_SearchHistorySelectedItem", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:vpdsw+4EWkuv8DLPWAIRrw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                // Is From List?
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:k+o7tTsDvkm42Wl4z4m4Wg", callContext.id) && ((vars.value.selectedStringInLocal) !== ("")))) {
                        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:1nVNs6HkFkqlhNteSn8MsQ", callContext.id);
                        // SelectedHistorySearch = SelectedString
                        model.variables.selectedHistorySearchVar = vars.value.selectedStringInLocal;
                        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:tpMEOGAdEEiM3sYH3buuhg", callContext.id);
                        // Execute Action: RefreshMessagesFromList
                        return controller._refreshMessages$Action(true, callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:PdfEoxUJ8k6hChK3ZwGLOw", callContext.id);
                        });
                    } else {
                        // Written Search
                        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:YYnNnRHC6EyIXFXq98Q6EA", callContext.id);
                        // SelectedHistorySearch = SearchMessageString
                        model.variables.selectedHistorySearchVar = model.variables.searchMessageStringVar;
                        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:ctR_DbNQME2ygiJXERC6tg", callContext.id);
                        // Execute Action: RefreshMessages
                        return controller._refreshMessages$Action(true, callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:PdfEoxUJ8k6hChK3ZwGLOw", callContext.id);
                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:omQJOU_eXEiOdUOgzg_Ncg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:omQJOU_eXEiOdUOgzg_Ncg", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.OnHandle_SearchHistorySelectedItem$vars", [{
            name: "SelectedString",
            attrName: "selectedStringInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._onClick_GoToMessageDetail$Action = function(messageInstanceIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_GoToMessageDetail");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.OnClick_GoToMessageDetail$vars"))());
            vars.value.messageInstanceIdInLocal = messageInstanceIdIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:JLOyQgMFukSMRObXc1fJfA:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.n0_zftvMk06xYTZKgLQJKQ/ClientActions.JLOyQgMFukSMRObXc1fJfA:KlMDnuhFfaNP4V6AgFdWhA", "Connect2_LegacyShared", "OnClick_GoToMessageDetail", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:oUDL2gI_S0C4HIzoOnkrrA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:oUdRPWureU6z7ZfYsU_izQ", callContext.id);
                // CurrentMessageInstanceId = MessageInstanceId
                model.variables.currentMessageInstanceIdVar = vars.value.messageInstanceIdInLocal;
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:u28f+tYbY0SNxBabZQsGYw", callContext.id);
                // Refresh Query: GetMessageInstanceById2
                var result = controller.getMessageInstanceById2$DataActRefresh(callContext);
                model.flush();
                return result.then(function() {
                    return OS.Flow.executeSequence(function() {
                        if ((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:MYl6s12G+ES9ryBasGPEjQ", callContext.id) && model.variables.getMessageInstanceById2DataAct.existOut)) {
                            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:5WqXVkN3XEORAMJ24jLYWA", callContext.id);
                            // Trigger Event: NavigateTo_MessageDetail
                            return controller.navigateTo_MessageDetail$Action(vars.value.messageInstanceIdInLocal, callContext).then(function() {
                                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:NlRYasuWmUW9WTl5u17eZQ", callContext.id);
                            });
                        } else {
                            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:xXF0zBNniECP6jPMyLKW2g", callContext.id);
                            OS.FeedbackMessageService.showFeedbackMessage("This message is no longer available", /*Info*/ 0);
                            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:ZZdrBtZCCkmfeGtsjHd82g", callContext.id);
                            // Refresh Query: GetMessages
                            var result = controller.getMessages$DataActRefresh(callContext);
                            model.flush();
                            return result.then(function() {
                                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:i2MbZc8O_USegbAx25QE9Q", callContext.id);
                            });
                        }

                    });
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:JLOyQgMFukSMRObXc1fJfA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:JLOyQgMFukSMRObXc1fJfA", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.OnClick_GoToMessageDetail$vars", [{
            name: "MessageInstanceId",
            attrName: "messageInstanceIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }]);
        Controller.prototype._refreshMessages$Action = function(isScrollToTopIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("RefreshMessages");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.RefreshMessages$vars"))());
            vars.value.isScrollToTopInLocal = isScrollToTopIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:HftuQ2Gp5ke+mjyW1ZjFbQ:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.n0_zftvMk06xYTZKgLQJKQ/ClientActions.HftuQ2Gp5ke+mjyW1ZjFbQ:xUWDYuyTUmbyPdnAdqEH+Q", "Connect2_LegacyShared", "RefreshMessages", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:AA2SqsDM4UyWUn1+BsHNkA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:EYwaDQoUrU2Gy+IQ3kS0aQ", callContext.id);
                // IsRefreshing = True
                model.variables.isRefreshingVar = true;
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:hn38RnDVWkuESfU2+KOyQQ", callContext.id);
                // Refresh Query: GetMessages
                var result = controller.getMessages$DataActRefresh(callContext);
                model.flush();
                return result.then(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:d5OSzswhL0ekFDP6efchUA", callContext.id) && vars.value.isScrollToTopInLocal)) {
                        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:+YL18A4RwkCIhys0sabB1w", callContext.id);
                        controller.safeExecuteJSNode(Connect2_LegacyShared_MyNotifications_ScreenBlock_MessageList_mvc_controller_RefreshMessages_ScrollToTopJS, "ScrollToTop", "RefreshMessages", null, function($parameters) {}, {}, {});
                        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Ebw9o0U3mk60FFe7gEZmxw", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Ebw9o0U3mk60FFe7gEZmxw", callContext.id);
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:HftuQ2Gp5ke+mjyW1ZjFbQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:HftuQ2Gp5ke+mjyW1ZjFbQ", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.RefreshMessages$vars", [{
            name: "IsScrollToTop",
            attrName: "isScrollToTopInLocal",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._onClick_ResetFilters$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_ResetFilters");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:7DYFRv2f9UirgeKpjc1qlw:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.n0_zftvMk06xYTZKgLQJKQ/ClientActions.7DYFRv2f9UirgeKpjc1qlw:sPa219tKKO4He9O39CT19A", "Connect2_LegacyShared", "OnClick_ResetFilters", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:U3WOmIP2pE2AYlikPPpnGA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                // Reset Filters
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:iD1YbI1H40SWJH5cdqr9DQ", callContext.id);
                // Filter_MessageTypePrivate = If
                model.variables.filter_MessageTypePrivateVar = ((((OS.BuiltinFunctions.getUserId()) !== (OS.BuiltinFunctions.nullIdentifier()))) ? (true) : (false));
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:iD1YbI1H40SWJH5cdqr9DQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // Filter_MessageTypePublic = True
                model.variables.filter_MessageTypePublicVar = true;
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:iD1YbI1H40SWJH5cdqr9DQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                // Filter_OrderASC = False
                model.variables.filter_OrderASCVar = false;
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:iD1YbI1H40SWJH5cdqr9DQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
                // Filter_OrderDESC = True
                model.variables.filter_OrderDESCVar = true;
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:m+pv6JKMWEmrQVP88qbXvQ", callContext.id);
                // Execute Action: SaveSetting
                controller._saveSetting$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:yTr5R7yp+Eq69Tr++U9qzA", callContext.id);
                // Execute Action: RefreshMessages
                return controller._refreshMessages$Action(false, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:d69xS81fBEmo3dma1Rm5tA", callContext.id);
                    // Execute Action: ToggleShowFilters
                    controller._toggleShowFilters$Action(callContext);
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:U+qcHUVyeUW7sb8ObqjNoQ", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:7DYFRv2f9UirgeKpjc1qlw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:7DYFRv2f9UirgeKpjc1qlw", callContext.id);
                throw ex;

            });
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
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:93U6VHmf5keMsDz6VUlNuA:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.n0_zftvMk06xYTZKgLQJKQ/ClientActions.93U6VHmf5keMsDz6VUlNuA:nK1UlBS8yopz4fU2_6wlKQ", "Connect2_LegacyShared", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:q5_8yKZOSUmPzyPuMV0e4Q", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:zD18qFloB0mBo7zu26TMYg", callContext.id) && model.variables.trigger_PullToRefreshIn)) {
                        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:6hCcgS2peUyuXuzWCynhNw", callContext.id);
                        // Execute Action: PullToRefresh
                        return controller._pullToRefresh$Action(callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:eiWvaTXgG0aM+HmRQHzLmw", callContext.id);
                            // Trigger Event: PullToRefreshTriggered
                            return controller.pullToRefreshTriggered$Action(callContext);
                        }).then(function() {
                            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:t559uhqN_0Ci6PdkCrsMCg", callContext.id);
                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:t559uhqN_0Ci6PdkCrsMCg", callContext.id);
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:93U6VHmf5keMsDz6VUlNuA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:93U6VHmf5keMsDz6VUlNuA", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._saveSetting$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("SaveSetting");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:ojK0WK5kIkmEZJswKmLITw:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.n0_zftvMk06xYTZKgLQJKQ/ClientActions.ojK0WK5kIkmEZJswKmLITw:6nwuL8nZ66TpFA3PAEfnoQ", "Connect2_LegacyShared", "SaveSetting", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:d7HXPnwv+Eup0A3hvVsstA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:2gc5tJDSLU669FrL024AxA", callContext.id);
                // SelectedFilter_OrderASC = Filter_OrderASC
                model.variables.selectedFilter_OrderASCVar = model.variables.filter_OrderASCVar;
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:2gc5tJDSLU669FrL024AxA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // SelectedFilter_MessageTypePublic = Filter_MessageTypePublic
                model.variables.selectedFilter_MessageTypePublicVar = model.variables.filter_MessageTypePublicVar;
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:2gc5tJDSLU669FrL024AxA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                // SelectedFilter_MessageTypePrivate = Filter_MessageTypePrivate
                model.variables.selectedFilter_MessageTypePrivateVar = model.variables.filter_MessageTypePrivateVar;
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:X7cG_QLnPU2mH8EH9CIddQ", callContext.id);
                // Execute Action: SetSortVariable
                controller._setSortVariable$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:UB0RXmASr06Fvr26LF7bzg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:ojK0WK5kIkmEZJswKmLITw", callContext.id);
            }

        };
        Controller.prototype._onScrollEnding$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnScrollEnding");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.OnScrollEnding$vars"))());
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:SoRgWQOlqku7DEMJUiRCXQ:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.n0_zftvMk06xYTZKgLQJKQ/ClientActions.SoRgWQOlqku7DEMJUiRCXQ:8YgWjd2lsHB5RM1svvTcRg", "Connect2_LegacyShared", "OnScrollEnding", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:E+7vd5UviUmHKZ0v3zJY2g", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:+GGEG2_UcEuzYn2c6KpRhg", callContext.id) && model.variables.isRefreshingVar)) {
                        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:uIE+aii9M0mSmH9TYLRYbw", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Mf4d7r2Jy0S71pONGcpkcQ", callContext.id);
                        // isLoadMore = True
                        model.variables.isLoadMoreVar = true;
                        return OS.Flow.executeSequence(function() {
                            if ((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:TITtUQH3ckOG0_ceXsZ+5A", callContext.id) && model.variables.getMessagesDataAct.isDataFetchedAttr)) {
                                return OS.Flow.executeSequence(function() {
                                    if ((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:FapQz21imEO+PSvgHxLIzg", callContext.id) && (model.variables.messagesListVar.itemsAttr.length >= (model.variables.maxRecordsVar - vars.value.incrementRecordsVar)))) {
                                        // MaxRecords2 += IncrementRecords
                                        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:njL0+9CAw0SfCgPI2QsYOw", callContext.id);
                                        // MaxRecords = MaxRecords + IncrementRecords
                                        model.variables.maxRecordsVar = (model.variables.maxRecordsVar + vars.value.incrementRecordsVar);
                                        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:wiPxdrQsYU+XedzioG5jOA", callContext.id);
                                        // Execute Action: RefreshMessages
                                        return controller._refreshMessages$Action(false, callContext).then(function() {
                                            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:0lQW9wnZdkep_G4ayVZ+eQ", callContext.id);
                                            // isLoadMore = False
                                            model.variables.isLoadMoreVar = false;
                                            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:rGVUWPNAtEq5wQsshfXNmA", callContext.id);
                                        });
                                    } else {
                                        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:HHvjrHuaiE2bmQiXvIDFCw", callContext.id);
                                        // isLoadMore = False
                                        model.variables.isLoadMoreVar = false;
                                        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:U4pS0SozPEyJLCReVUXpDA", callContext.id);
                                    }

                                });
                            } else {
                                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:ZQZyE7k1GE2EY4lSCyuRKA", callContext.id);
                            }

                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:SoRgWQOlqku7DEMJUiRCXQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:SoRgWQOlqku7DEMJUiRCXQ", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.OnScrollEnding$vars", [{
            name: "IncrementRecords",
            attrName: "incrementRecordsVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 20;
            }
        }]);
        Controller.prototype._updateMessageClear$Action = function(isReadIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("UpdateMessageClear");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.UpdateMessageClear$vars"))());
            vars.value.isReadInLocal = isReadIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:59+mYlieOU6j0cyZkFkLBw:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.n0_zftvMk06xYTZKgLQJKQ/ClientActions.59+mYlieOU6j0cyZkFkLBw:NgqnUAjexqjqeKRMa+Lsdw", "Connect2_LegacyShared", "UpdateMessageClear", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:8mWImxYF5UeHpqBq5+HeZw", callContext.id);
                // Not Read
                if ((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:bW+wG+LeEkex7_Np4ls_1Q", callContext.id) && !(vars.value.isReadInLocal))) {
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:SDdVvyqLk0S834VmsbMB1Q", callContext.id);
                    // Execute Action: DecrementReadMessagesCounter
                    Connect2_LegacySharedController.default.decrementReadMessagesCounter$Action(callContext);
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:hXzVD6ouvk2CREQe7+KHwA", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:hXzVD6ouvk2CREQe7+KHwA", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:59+mYlieOU6j0cyZkFkLBw", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.UpdateMessageClear$vars", [{
            name: "IsRead",
            attrName: "isReadInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._updateMessageRead$Action = function(messageInstanceIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("UpdateMessageRead");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.UpdateMessageRead$vars"))());
            vars.value.messageInstanceIdInLocal = messageInstanceIdIn;
            var listIndexOfVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.listIndexOfVar = listIndexOfVar;
            try {
                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:4mezcwPo1EW_lU0Rq4LoHw:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.n0_zftvMk06xYTZKgLQJKQ/ClientActions.4mezcwPo1EW_lU0Rq4LoHw:tKeEOgSVUJ6baamiTRqFIw", "Connect2_LegacyShared", "UpdateMessageRead", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:KkqsTM9AB0ec8jisRXeoqA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Adm5KJ_NQk6ginVOSRb7HA", callContext.id);
                // Execute Action: DecrementReadMessagesCounter
                Connect2_LegacySharedController.default.decrementReadMessagesCounter$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Tp1BMXzv1UC8iby2sLebmA", callContext.id);
                // Execute Action: ListIndexOf
                listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.messagesListVar.itemsAttr, function(p) {
                    return p.idAttr.equals(vars.value.messageInstanceIdInLocal);
                }, callContext);

                // Check Position
                if ((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:vWY9zsIxE02Oru1ImHUMfw", callContext.id) && (listIndexOfVar.value.positionOut > -1))) {
                    // Update Read
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:daqlwiKMrEy4Or1HFpfzag", callContext.id);
                    // MessagesList.Items[ListIndexOf.Position].IsRead = True
                    model.variables.messagesListVar.itemsAttr.getItem(listIndexOfVar.value.positionOut).isReadAttr = true;
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:4OKiBVuTNkqt5Of4TAL9WA", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:4OKiBVuTNkqt5Of4TAL9WA", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:4mezcwPo1EW_lU0Rq4LoHw", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.UpdateMessageRead$vars", [{
            name: "MessageInstanceId",
            attrName: "messageInstanceIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }]);
        Controller.prototype._revertSelectedFiltersToPersistedValue$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("RevertSelectedFiltersToPersistedValue");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:0c44dAuehECASklZUecytw:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.n0_zftvMk06xYTZKgLQJKQ/ClientActions.0c44dAuehECASklZUecytw:kGdPvxkZftRqQed_LkH5pA", "Connect2_LegacyShared", "RevertSelectedFiltersToPersistedValue", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:skwcIl5Cl0GlLIKXAl98Sw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:1jJEvpdbY02iELCDsVJ8QQ", callContext.id);
                // Filter_OrderASC = SelectedFilter_OrderASC
                model.variables.filter_OrderASCVar = model.variables.selectedFilter_OrderASCVar;
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:1jJEvpdbY02iELCDsVJ8QQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // Filter_OrderDESC = notSelectedFilter_OrderASC
                model.variables.filter_OrderDESCVar = !(model.variables.selectedFilter_OrderASCVar);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:1jJEvpdbY02iELCDsVJ8QQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                // Filter_MessageTypePrivate = SelectedFilter_MessageTypePrivate
                model.variables.filter_MessageTypePrivateVar = model.variables.selectedFilter_MessageTypePrivateVar;
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:1jJEvpdbY02iELCDsVJ8QQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
                // Filter_MessageTypePublic = SelectedFilter_MessageTypePublic
                model.variables.filter_MessageTypePublicVar = model.variables.selectedFilter_MessageTypePublicVar;
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:pLooQoWn_UqH5Q8I2zEiKQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:0c44dAuehECASklZUecytw", callContext.id);
            }

        };
        Controller.prototype._backNavigationHandler$Action = function(backNavigationEventIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("BackNavigationHandler");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.BackNavigationHandler$vars"))());
            vars.value.backNavigationEventInLocal = backNavigationEventIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:QorodMLD5Uy15yINIt2t0Q:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.n0_zftvMk06xYTZKgLQJKQ/ClientActions.QorodMLD5Uy15yINIt2t0Q:VW_2McmwxafGO6M2ksD0EA", "Connect2_LegacyShared", "BackNavigationHandler", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:AEbbMdrcw0CuvZcvW_iC3A", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:JjTpRgJ0eEqqrUxQzEh_PQ", callContext.id) && model.variables.showFiltersVar)) {
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:cu_PYP+m5UqWNWTeqJQs+g", callContext.id);
                    // Execute Action: PreventNavigation
                    NavigationHandlerController.default.preventNavigation$Action(vars.value.backNavigationEventInLocal, callContext);
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:GeyADF0zdkOQKLV5WOayJA", callContext.id);
                    // Execute Action: ToggleShowFilters
                    controller._toggleShowFilters$Action(callContext);
                }

                if ((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:K4PPd2xmjU+UIvmT+M4iaA", callContext.id) && model.variables.showSearchVar)) {
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:obXKxqI+lEOj5EOl9E1cKg", callContext.id);
                    // Execute Action: PreventNavigation2
                    NavigationHandlerController.default.preventNavigation$Action(vars.value.backNavigationEventInLocal, callContext);
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:XDoe1m9cMEuXUwt2xoBoJA", callContext.id);
                    // Execute Action: ToggleShowSearch
                    controller._toggleShowSearch$Action(callContext);
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:ZW6JT44XO0eGZmrPAcdB9g", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:ZW6JT44XO0eGZmrPAcdB9g", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:QorodMLD5Uy15yINIt2t0Q", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.BackNavigationHandler$vars", [{
            name: "BackNavigationEvent",
            attrName: "backNavigationEventInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
            }
        }]);
        Controller.prototype._onClick_MarkAllAsRead$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_MarkAllAsRead");
            callContext = controller.callContext(callContext);
            var wrapper_MarkAllAsReadNotificationsVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.wrapper_MarkAllAsReadNotificationsVar = wrapper_MarkAllAsReadNotificationsVar;
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:et99dRYsB0ez41t+48618Q:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.n0_zftvMk06xYTZKgLQJKQ/ClientActions.et99dRYsB0ez41t+48618Q:mMgLCVHt1yW7ujD3Lqql0w", "Connect2_LegacyShared", "OnClick_MarkAllAsRead", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:4P6BONW80EK0oqd_L84TcA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:JsmSxkbvLE61bgfFSkMSFQ", callContext.id);
                // IsShowLoading = True
                model.variables.isShowLoadingVar = true;
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:MhXd2YcGXESIbAKIAlohgg", callContext.id);
                // Execute Action: Wrapper_MarkAllAsReadNotifications
                model.flush();
                return controller.wrapper_MarkAllAsReadNotifications$ServerAction(model.variables.filter_MessageTypePublicVar, model.variables.filter_MessageTypePrivateVar, model.variables.deviceHardwareIdVar, model.variables.selectedHistorySearchVar, callContext).then(function(value) {
                    wrapper_MarkAllAsReadNotificationsVar.value = value;
                }).then(function() {
                    return OS.Flow.executeSequence(function() {
                        if ((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:deNxuKTt7Uq+Ct_Q62qYOg", callContext.id) && (wrapper_MarkAllAsReadNotificationsVar.value.totalChangeOut > 0))) {
                            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:0jkoWe27BkSSZY6zQJVvmQ", callContext.id);
                            // Execute Action: RefreshMessages
                            return controller._refreshMessages$Action(false, callContext).then(function() {
                                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:HHMVVGRXqUO0jabab6y44w", callContext.id);
                                // Execute Action: SynchronizeNumberUnreadMessages
                                model.flush();
                                return Connect2_LegacySharedController.default.synchronizeNumberUnreadMessages$Action(callContext);
                            });
                        }

                    });
                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Jc3jx_27v0Go6Y+5POL9kA", callContext.id);
                    // IsShowLoading = False
                    model.variables.isShowLoadingVar = false;
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:BnXEFJriQ0uo6z8W0NdwJA", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:et99dRYsB0ez41t+48618Q", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:et99dRYsB0ez41t+48618Q", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._onClickSearchClear$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClickSearchClear");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:rfC1deZnLUW6MXZKQNVbBQ:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.n0_zftvMk06xYTZKgLQJKQ/ClientActions.rfC1deZnLUW6MXZKQNVbBQ:39VK+V3DD21caiyC2Rn7XA", "Connect2_LegacyShared", "OnClickSearchClear", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:NJA2CUDi7k2bsdH29OXqBg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:7NQ_OWKhP0C4xTl_hTMq_A", callContext.id);
                // SearchMessageString = ""
                model.variables.searchMessageStringVar = "";
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:1tlEoH8Z9U+oTqL56oBvnA", callContext.id);
                controller.safeExecuteJSNode(Connect2_LegacyShared_MyNotifications_ScreenBlock_MessageList_mvc_controller_OnClickSearchClear_SetScrollToTopJS, "SetScrollToTop", "OnClickSearchClear", null, function($parameters) {}, {}, {});
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:quFRgu0TCECatNbdM07Jvw", callContext.id);
                // Execute Action: OnHandle_SearchHistorySelectedItem
                return controller._onHandle_SearchHistorySelectedItem$Action("", callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:A8yxFq47y0mwpnwKPU6nmw", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:rfC1deZnLUW6MXZKQNVbBQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:rfC1deZnLUW6MXZKQNVbBQ", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._toggleShowSearch$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ToggleShowSearch");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:77txd_pI20WswodUJJAYMQ:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.n0_zftvMk06xYTZKgLQJKQ/ClientActions.77txd_pI20WswodUJJAYMQ:kSmKFjyATKkYwQSSHABDWQ", "Connect2_LegacyShared", "ToggleShowSearch", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:oZH5iIrbFEWfyCC2nk1HYw", callContext.id);
                // Toggle Search
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:zzhbRNL6J0u_rga2dSVCSA", callContext.id);
                // ShowSearch = notShowSearch
                model.variables.showSearchVar = !(model.variables.showSearchVar);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Dwyoabs21UOURhRB2yBnlg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:77txd_pI20WswodUJJAYMQ", callContext.id);
            }

        };
        Controller.prototype._initializeSetting$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("InitializeSetting");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:QDsqgUNaUk6cI1TUO3jNuQ:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.n0_zftvMk06xYTZKgLQJKQ/ClientActions.QDsqgUNaUk6cI1TUO3jNuQ:rVa79yN1_naNoQPfHSnocQ", "Connect2_LegacyShared", "InitializeSetting", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:N8HIfYKQJ0mb1cC_iQripw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:C+VsfvOj+UKOFDKINBw2_g", callContext.id);
                // WarningMessage = "To access your Private Messages," + NewLine + "please login to the  Connect App."
                model.variables.warningMessageVar = (("To access your Private Messages," + "\r\n") + "please login to the  Connect App.");
                // Is User Logged?
                if ((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:dW21j+9V10inFQs3XzDmsg", callContext.id) && ((OS.BuiltinFunctions.getUserId()) !== (OS.BuiltinFunctions.nullIdentifier())))) {
                    // Set True
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:GL3Em5zckUGCWvpLVQQiYw", callContext.id);
                    // ShowWarning = True
                    model.variables.showWarningVar = true;
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:GL3Em5zckUGCWvpLVQQiYw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // Filter_MessageTypePrivate = SelectedFilter_MessageTypePrivate
                    model.variables.filter_MessageTypePrivateVar = model.variables.selectedFilter_MessageTypePrivateVar;
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:GL3Em5zckUGCWvpLVQQiYw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                    // Filter_MessageTypePublic = SelectedFilter_MessageTypePublic
                    model.variables.filter_MessageTypePublicVar = model.variables.selectedFilter_MessageTypePublicVar;
                } else {
                    // Set False
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:CAz3D+Fai06OTL4QeMiDtg", callContext.id);
                    // ShowWarning = False
                    model.variables.showWarningVar = false;
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:CAz3D+Fai06OTL4QeMiDtg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // Filter_MessageTypePrivate = False
                    model.variables.filter_MessageTypePrivateVar = false;
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:CAz3D+Fai06OTL4QeMiDtg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                    // Filter_MessageTypePublic = True
                    model.variables.filter_MessageTypePublicVar = true;
                }

                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:zCUz3dFsHky6OJpLMDNm+Q", callContext.id);
                // Filter_OrderASC = SelectedFilter_OrderASC
                model.variables.filter_OrderASCVar = model.variables.selectedFilter_OrderASCVar;
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:zCUz3dFsHky6OJpLMDNm+Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // Filter_OrderDESC = notSelectedFilter_OrderASC
                model.variables.filter_OrderDESCVar = !(model.variables.selectedFilter_OrderASCVar);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Bx3pQtNzOE22Cn50doA1ug", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:QDsqgUNaUk6cI1TUO3jNuQ", callContext.id);
            }

        };
        Controller.prototype._onChange_MessageSort$Action = function(isAscendingIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnChange_MessageSort");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.OnChange_MessageSort$vars"))());
            vars.value.isAscendingInLocal = isAscendingIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:SZS8kCz2uEO4KecWBwpe+g:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.n0_zftvMk06xYTZKgLQJKQ/ClientActions.SZS8kCz2uEO4KecWBwpe+g:O_XATlv4Y7w_soxDDWaJww", "Connect2_LegacyShared", "OnChange_MessageSort", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:w6hqP9R5XEiBQlYA_M1b4w", callContext.id);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:CNyzok72Wke7RZGtw9iXBg", callContext.id);
                // Filter_OrderASC = IsAscending
                model.variables.filter_OrderASCVar = vars.value.isAscendingInLocal;
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:CNyzok72Wke7RZGtw9iXBg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // Filter_OrderDESC = notIsAscending
                model.variables.filter_OrderDESCVar = !(vars.value.isAscendingInLocal);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:eWUElFicDUuHqNzCvRKpBw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:SZS8kCz2uEO4KecWBwpe+g", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.OnChange_MessageSort$vars", [{
            name: "IsAscending",
            attrName: "isAscendingInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._swipe_EventsRead$Action = function(messageInstanceIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Swipe_EventsRead");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.Swipe_EventsRead$vars"))());
            vars.value.messageInstanceIdInLocal = messageInstanceIdIn;
            var markMessageAsReadVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.markMessageAsReadVar = markMessageAsReadVar;
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:8h1WkRHmRUGbNYzE9ewPag:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.n0_zftvMk06xYTZKgLQJKQ/ClientActions.8h1WkRHmRUGbNYzE9ewPag:Z2K9uRcWK7jr3Ey3q+JPpw", "Connect2_LegacyShared", "Swipe_EventsRead", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:ZazlvIqgk02vEb44hWiFhw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:SDMtyobMDEu2omr+pDkCOw", callContext.id);
                // Execute Action: MarkMessageAsRead
                model.flush();
                return controller.markMessageAsRead$ServerAction(vars.value.messageInstanceIdInLocal, model.variables.deviceHardwareIdVar, model.variables.selectedHistorySearchVar, model.variables.filter_MessageTypePrivateVar, model.variables.filter_MessageTypePublicVar, callContext).then(function(value) {
                    markMessageAsReadVar.value = value;
                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:n4ff1d8yOE6RkAjQGKOlow", callContext.id);
                    // MessagesList.HasUnreadMessages = MarkMessageAsRead.HasUnreadMessages
                    model.variables.messagesListVar.hasUnreadMessagesAttr = markMessageAsReadVar.value.hasUnreadMessagesOut;
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:jpwbYtvcMkuQYTKcsO4+hw", callContext.id);
                    // Execute Action: UpdateMessageRead
                    controller._updateMessageRead$Action(vars.value.messageInstanceIdInLocal, callContext);
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:KwigS2uudkeUVYj5wDvCkw", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:8h1WkRHmRUGbNYzE9ewPag", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:8h1WkRHmRUGbNYzE9ewPag", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.Swipe_EventsRead$vars", [{
            name: "MessageInstanceId",
            attrName: "messageInstanceIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }]);
        Controller.prototype._b2C_SignInFlowControllerResetPasswordCompleted$Action = function(successMessageIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("B2C_SignInFlowControllerResetPasswordCompleted");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.B2C_SignInFlowControllerResetPasswordCompleted$vars"))());
            vars.value.successMessageInLocal = successMessageIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:yZ3Nn3FeHUiRQSWA4Kl+mA:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.n0_zftvMk06xYTZKgLQJKQ/ClientActions.yZ3Nn3FeHUiRQSWA4Kl+mA:22mejprbJgZHcFB0v0QFIA", "Connect2_LegacyShared", "B2C_SignInFlowControllerResetPasswordCompleted", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Mv0bn3xylE6pPi0FU_LeTQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:pPhOGtpP8UWwVGpOcwyxAQ", callContext.id);
                OS.FeedbackMessageService.showFeedbackMessage(vars.value.successMessageInLocal, /*Success*/ 1);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:hK_FldodBEi7Zo2fKdFXCg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:yZ3Nn3FeHUiRQSWA4Kl+mA", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.B2C_SignInFlowControllerResetPasswordCompleted$vars", [{
            name: "SuccessMessage",
            attrName: "successMessageInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._onClick_CloseSearchAndFilter$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_CloseSearchAndFilter");
            callContext = controller.callContext(callContext);
            var wasCurrentViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.wasCurrentViewRestoredFromCacheJSResult = wasCurrentViewRestoredFromCacheJSResult;
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:E+0etKV0TEql7cXE5t5isw:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.n0_zftvMk06xYTZKgLQJKQ/ClientActions.E+0etKV0TEql7cXE5t5isw:uOYIu2XzIkPPOhZRNtT9Og", "Connect2_LegacyShared", "OnClick_CloseSearchAndFilter", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:LLLKeUkDuEW+JeN3swPeKQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:q4kMfDlhV0CtulP54xjHyA", callContext.id) && model.variables.showSearchVar)) {
                        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:UnOgB6EROEiCKYK1Aj3lPA", callContext.id);
                        // Execute Action: ToggleShowSearch
                        controller._toggleShowSearch$Action(callContext);
                        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:X3_Hlrew5EyRBpVgSLK8xg", callContext.id);
                        wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_LegacyShared_MyNotifications_ScreenBlock_MessageList_mvc_controller_OnClick_CloseSearchAndFilter_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnClick_CloseSearchAndFilter", {
                            FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                        }, function($parameters) {
                            var jsNodeResult = new(controller.constructor.getVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.OnClick_CloseSearchAndFilter$wasCurrentViewRestoredFromCacheJSResult"))();
                            jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
                            return jsNodeResult;
                        }, {}, {});
                        return OS.Flow.executeSequence(function() {
                            if ((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:swIAMkDrkE+tmSngNoodHg", callContext.id) && !(wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut))) {
                                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:SD6IGFaA1EW3iJhEj_M7cg", callContext.id);
                                // Execute Action: OnClickSearchClear
                                return controller._onClickSearchClear$Action(callContext);
                            }

                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:YyDcj8sJe0unyHELufGAjQ", callContext.id);
                        // Execute Action: ToggleShowFilters
                        controller._toggleShowFilters$Action(callContext);
                        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:UfperOMrE0KjAM_8SY_F5g", callContext.id);
                        // Execute Action: RevertSelectedFiltersToPersistedValue
                        controller._revertSelectedFiltersToPersistedValue$Action(callContext);
                    }

                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:U4RNvzdNSUOzyMGW3OPq_A", callContext.id);
                    controller.safeExecuteJSNode(Connect2_LegacyShared_MyNotifications_ScreenBlock_MessageList_mvc_controller_OnClick_CloseSearchAndFilter_FocusCursorJS, "FocusCursor", "OnClick_CloseSearchAndFilter", {
                        InputWidgetID: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Input_SearchMessages"), OS.DataTypes.DataTypes.Text)
                    }, function($parameters) {}, {}, {});
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:o4DMAtJmeUKFtyU25WPLkQ", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:E+0etKV0TEql7cXE5t5isw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:E+0etKV0TEql7cXE5t5isw", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.OnClick_CloseSearchAndFilter$wasCurrentViewRestoredFromCacheJSResult", [{
            name: "FromCache",
            attrName: "fromCacheOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._onClick_ApplyFilters$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_ApplyFilters");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:_CJ5xI2RrkSg_SomA72NfQ:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.n0_zftvMk06xYTZKgLQJKQ/ClientActions._CJ5xI2RrkSg_SomA72NfQ:lPwYQK7vciFR3M8bpLMsIA", "Connect2_LegacyShared", "OnClick_ApplyFilters", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:URJyJ3aKpk2Esf7KC8oHBw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:SeQdLofwNEeNqYk26Zl_SA", callContext.id);
                // Execute Action: SaveSetting
                controller._saveSetting$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:3vMnxUIRP0iMayT0uAQ4SQ", callContext.id);
                // Execute Action: RefreshMessages
                return controller._refreshMessages$Action(false, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:YOWR+X077ESTIVsCnSLTQg", callContext.id);
                    // Execute Action: ToggleShowFilters
                    controller._toggleShowFilters$Action(callContext);
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:+T82S2b0S0SlFgdO0ce29g", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:_CJ5xI2RrkSg_SomA72NfQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:_CJ5xI2RrkSg_SomA72NfQ", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._setSortVariable$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("SetSortVariable");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:RT8LxmrfF0WMTIJsogI3GA:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.n0_zftvMk06xYTZKgLQJKQ/ClientActions.RT8LxmrfF0WMTIJsogI3GA:4RfokEhJNzBWY9QAgChkXA", "Connect2_LegacyShared", "SetSortVariable", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:DT6L9KT5BUmAxF6hqNldpg", callContext.id);
                // Set Sorts
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:iCADTYdlg0CpplCnQLcDMg", callContext.id);
                // OrderByIsAscending = Filter_OrderASC
                model.variables.orderByIsAscendingVar = model.variables.filter_OrderASCVar;
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:DI0Kq3RkEUOEz9w1FGzWBQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:RT8LxmrfF0WMTIJsogI3GA", callContext.id);
            }

        };
        Controller.prototype._dismiss_WarningMessage$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Dismiss_WarningMessage");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:RcU4yIqpbU66ot_nChOjNA:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.n0_zftvMk06xYTZKgLQJKQ/ClientActions.RcU4yIqpbU66ot_nChOjNA:ONO4rcTOyXOz86ubdEJ0YA", "Connect2_LegacyShared", "Dismiss_WarningMessage", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:gZG9bTaXokeSe2lMIjdlqQ", callContext.id);
                // Set True
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:eT5KPX0rF0WK7SH7Ze7bWg", callContext.id);
                // ShowWarning = True
                model.variables.showWarningVar = true;
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:A2lpxtQ8hkKQHKY3_9gXPQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:RcU4yIqpbU66ot_nChOjNA", callContext.id);
            }

        };
        Controller.prototype._b2C_SignInFlowControllerSignUpCompleted$Action = function(successMessageIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("B2C_SignInFlowControllerSignUpCompleted");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.B2C_SignInFlowControllerSignUpCompleted$vars"))());
            vars.value.successMessageInLocal = successMessageIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:Yj_+1OQH1E26qPSXaeN7DQ:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.n0_zftvMk06xYTZKgLQJKQ/ClientActions.Yj_+1OQH1E26qPSXaeN7DQ:KB83eJoT_QBRdG5D6tNBNA", "Connect2_LegacyShared", "B2C_SignInFlowControllerSignUpCompleted", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:wk+2kKg3Sk24HKwjxRePeA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                // ForceInitiateLoginFlowDateTime
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Ve7PygiK70Odf3Fpxaa9aA", callContext.id);
                // ForceInitiateLoginFlowDateTime = NullDate
                model.variables.forceInitiateLoginFlowDateTimeVar = OS.BuiltinFunctions.nullDate();
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:w8S7hVRt3kmEPhOXXQx3Uw", callContext.id);
                OS.FeedbackMessageService.showFeedbackMessage(vars.value.successMessageInLocal, /*Success*/ 1);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:glSKDN+meUCNFPR3Y5yFMQ", callContext.id);
                // Trigger Event: NavigateTo_B2CLanding
                return controller.navigateTo_B2CLanding$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Ptt7trA5XUWCRjz9J7+rOw", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:Yj_+1OQH1E26qPSXaeN7DQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:Yj_+1OQH1E26qPSXaeN7DQ", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.B2C_SignInFlowControllerSignUpCompleted$vars", [{
            name: "SuccessMessage",
            attrName: "successMessageInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._toggleShowFilters$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ToggleShowFilters");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:AIpd5Q13b0S2FzuAowXxlA:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.n0_zftvMk06xYTZKgLQJKQ/ClientActions.AIpd5Q13b0S2FzuAowXxlA:WTP4SOLF8oJA43EisqcQxg", "Connect2_LegacyShared", "ToggleShowFilters", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Y2w1QacymEqJyAZYU9UyKg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:xSZa8QOqgEitrrKmff6A0A", callContext.id);
                // Execute Action: RevertSelectedFiltersToPersistedValue
                controller._revertSelectedFiltersToPersistedValue$Action(callContext);
                // Toggle Filter Bar
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:XWVg6sOs6UOgdG+AG29q5A", callContext.id);
                // ShowFilters = notShowFilters
                model.variables.showFiltersVar = !(model.variables.showFiltersVar);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:MDTFrCb0gkaf_xAWPFqkOA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:AIpd5Q13b0S2FzuAowXxlA", callContext.id);
            }

        };
        Controller.prototype._swipe_EventsClear$Action = function(messageInstanceIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Swipe_EventsClear");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.Swipe_EventsClear$vars"))());
            vars.value.messageInstanceIdInLocal = messageInstanceIdIn;
            var markMessageAsClearVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.markMessageAsClearVar = markMessageAsClearVar;
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:_o086ESTpESvFzJaOaeayQ:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.n0_zftvMk06xYTZKgLQJKQ/ClientActions._o086ESTpESvFzJaOaeayQ:LUJPsRxe0IzbaShtPtI0KQ", "Connect2_LegacyShared", "Swipe_EventsClear", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:NCBOf5aV+EOrCIa9yb4yjg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:_LB5hryOhEmW6n+sE1KR1g", callContext.id);
                // Execute Action: HideMessageClear
                controller._hideMessageClear$Action(vars.value.messageInstanceIdInLocal, callContext);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:6oaRYc4M8E6j5W63mJuUKA", callContext.id);
                // Execute Action: MarkMessageAsClear
                model.flush();
                return controller.markMessageAsClear$ServerAction(vars.value.messageInstanceIdInLocal, model.variables.deviceHardwareIdVar, model.variables.selectedHistorySearchVar, model.variables.filter_MessageTypePrivateVar, model.variables.filter_MessageTypePublicVar, callContext).then(function(value) {
                    markMessageAsClearVar.value = value;
                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:zdRNgHAVIU6WUpX5rrRL7Q", callContext.id);
                    // MessagesList.HasUnreadMessages = MarkMessageAsClear.HasUnreadMessages
                    model.variables.messagesListVar.hasUnreadMessagesAttr = markMessageAsClearVar.value.hasUnreadMessagesOut;
                }).then(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Kb0qTdrHMkqfhsbdCUWQWQ", callContext.id) && !(markMessageAsClearVar.value.isHaveMessageOut))) {
                        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:p09d+rY2sUa0JfOB6adAgQ", callContext.id);
                        // IsEmptyMessage = True
                        model.variables.isEmptyMessageVar = true;
                    }

                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:UX7Ja7DkuEKyp+AaGyvzZQ", callContext.id);
                    // Execute Action: UpdateMessageOnline
                    controller._updateMessageClear$Action(markMessageAsClearVar.value.isReadOut, callContext);
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:QB12MOgt10SX0p22jUpNuw", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:_o086ESTpESvFzJaOaeayQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:_o086ESTpESvFzJaOaeayQ", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.Swipe_EventsClear$vars", [{
            name: "MessageInstanceId",
            attrName: "messageInstanceIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }]);
        Controller.prototype._hideMessageClear$Action = function(messageInstanceIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("HideMessageClear");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.HideMessageClear$vars"))());
            vars.value.messageInstanceIdInLocal = messageInstanceIdIn;
            var listIndexOfVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.listIndexOfVar = listIndexOfVar;
            try {
                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:PiNH6oBeFk2oZwIuG8yoMQ:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.n0_zftvMk06xYTZKgLQJKQ/ClientActions.PiNH6oBeFk2oZwIuG8yoMQ:AIXnyTZsmxv01m3kRhb3cg", "Connect2_LegacyShared", "HideMessageClear", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:NUJn6WMJ2EGtLebj5x39rQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:nMrB2v5Uxk+L2EmRi21eiw", callContext.id);
                // Execute Action: ListIndexOf
                listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.messagesListVar.itemsAttr, function(p) {
                    return p.idAttr.equals(vars.value.messageInstanceIdInLocal);
                }, callContext);

                // Check Position
                if ((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Cj9viPtakUGyB5ljoXB8mA", callContext.id) && ((listIndexOfVar.value.positionOut > -1) && (listIndexOfVar.value.positionOut < model.variables.messagesListVar.itemsAttr.length)))) {
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:U8gV+7YtMEWda+3umVIRMg", callContext.id);
                    // Execute Action: ListRemove
                    OS.SystemActions.listRemove(model.variables.messagesListVar.itemsAttr, listIndexOfVar.value.positionOut, callContext);
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:bByy325EWkG5mZyrPhDDcw", callContext.id);
                    // MaxRecords = MaxRecords - 1
                    model.variables.maxRecordsVar = (model.variables.maxRecordsVar - 1);
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:VFVBDDW61k68WyUGmYE2wA", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:VFVBDDW61k68WyUGmYE2wA", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:PiNH6oBeFk2oZwIuG8yoMQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.HideMessageClear$vars", [{
            name: "MessageInstanceId",
            attrName: "messageInstanceIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }]);
        Controller.prototype._onKeyup_SearchMessages$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnKeyup_SearchMessages");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:zsEh7z6d9U6v1+O8Bg3zBQ:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.n0_zftvMk06xYTZKgLQJKQ/ClientActions.zsEh7z6d9U6v1+O8Bg3zBQ:iT4OayDvzeIHRh+9aUH8Bw", "Connect2_LegacyShared", "OnKeyup_SearchMessages", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:S1ULohjtXEy5BJh0MnnOKA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:QAgdoabFCESt4EaTR1pSdQ", callContext.id);
                controller.safeExecuteJSNode(Connect2_LegacyShared_MyNotifications_ScreenBlock_MessageList_mvc_controller_OnKeyup_SearchMessages_CheckForEnterKeyJS, "CheckForEnterKey", "OnKeyup_SearchMessages", null, function($parameters) {}, {
                    OnHandle_SearchHistorySelectedItem: controller.clientActionProxies.onHandle_SearchHistorySelectedItem$Action
                }, {});
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:jcxP6AwSOUeKKfR40bI4oQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:zsEh7z6d9U6v1+O8Bg3zBQ", callContext.id);
            }

        };
        Controller.prototype._onAfterFetch_GetMessages$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnAfterFetch_GetMessages");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:NPXK8zQsMka6QypJxZJYRw:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.n0_zftvMk06xYTZKgLQJKQ/ClientActions.NPXK8zQsMka6QypJxZJYRw:MfQUOf4kwzhAB1M4Lg6VYg", "Connect2_LegacyShared", "OnAfterFetch_GetMessages", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:mhtAspkjMUycEOG639r4UA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:BGsNHEney0yIZbSPF17SdA", callContext.id);
                // Execute Action: ListClear
                OS.SystemActions.listClear(model.variables.messagesListVar.itemsAttr, callContext);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:mzcZg1ZFqEKRK8rquqRmVg", callContext.id);
                // Execute Action: ListAppendAll
                OS.SystemActions.listAppendAll(model.variables.messagesListVar.itemsAttr, model.variables.getMessagesDataAct.messagesOut, callContext);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:xw8b8QYKRkG9Gkt8DZifMg", callContext.id);
                // Execute Action: SetUnreadNotificationsNumber
                Connect2_LegacySharedController.default.setUnreadNotificationsNumber$Action(model.variables.getMessagesDataAct.countUnreadMessagesOut, callContext);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:QE3xeK7UxUGv2jcH_dJizg", callContext.id);
                // TotalPrivate = 0
                model.variables.totalPrivateVar = OS.BuiltinFunctions.integerToLongInteger(0);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:QE3xeK7UxUGv2jcH_dJizg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // TotalPublic = 0
                model.variables.totalPublicVar = OS.BuiltinFunctions.integerToLongInteger(0);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Aswa_SJFbUO5+TMcf+WijQ", callContext.id);
                // HasUnread = GetMessages.HasUnreadMessages
                model.variables.hasUnreadVar = model.variables.getMessagesDataAct.hasUnreadMessagesOut;
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Aswa_SJFbUO5+TMcf+WijQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // MessagesList.HasUnreadMessages = GetMessages.HasUnreadMessages
                model.variables.messagesListVar.hasUnreadMessagesAttr = model.variables.getMessagesDataAct.hasUnreadMessagesOut;
                // Foreach MessagesList.Items
                callContext.iterationContext.registerIterationStart(model.variables.messagesListVar.itemsAttr);
                try {
                    var itemsIterator = callContext.iterationContext.getIterator(model.variables.messagesListVar.itemsAttr);
                    var itemsIndex = 0;
                    while ((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:s6roMD2tMEyvP4l9XEd_+w", callContext.id) && (itemsIndex < model.variables.messagesListVar.itemsAttr.length))) {
                        itemsIterator.currentRowNumber = itemsIndex;
                        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:h8Ho8tMgDUafVo0BEkLY7g", callContext.id);
                        // TotalPrivate = TotalPrivate + If
                        model.variables.totalPrivateVar = model.variables.totalPrivateVar.add(OS.BuiltinFunctions.integerToLongInteger((((!(model.variables.messagesListVar.itemsAttr.getItem(itemsIndex.valueOf()).isReadAttr) && (model.variables.messagesListVar.itemsAttr.getItem(itemsIndex.valueOf()).messageTemplateTypeIdAttr === Connect2_LegacySharedModel.staticEntities.messageType.private))) ? (1) : (0))));
                        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:h8Ho8tMgDUafVo0BEkLY7g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                        // TotalPublic = TotalPublic + If
                        model.variables.totalPublicVar = model.variables.totalPublicVar.add(OS.BuiltinFunctions.integerToLongInteger((((!(model.variables.messagesListVar.itemsAttr.getItem(itemsIndex.valueOf()).isReadAttr) && (model.variables.messagesListVar.itemsAttr.getItem(itemsIndex.valueOf()).messageTemplateTypeIdAttr === Connect2_LegacySharedModel.staticEntities.messageType.public))) ? (1) : (0))));
                        itemsIndex++;
                    }

                } finally {
                    callContext.iterationContext.registerIterationEnd(model.variables.messagesListVar.itemsAttr);
                }

                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:4TktkmiBhUSOSz0w6yLBPQ", callContext.id);
                // IsRefreshing = False
                model.variables.isRefreshingVar = false;
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:7PpJQ2Q24UuUvU+G3PkLoA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:NPXK8zQsMka6QypJxZJYRw", callContext.id);
            }

        };
        Controller.prototype._onClick_Filter$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_Filter");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:NrBn+PUQg0KP_zi398GtVA:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.n0_zftvMk06xYTZKgLQJKQ/ClientActions.NrBn+PUQg0KP_zi398GtVA:FBHLSXfZ7WJVnwB4XCkzig", "Connect2_LegacyShared", "OnClick_Filter", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:IvdhRF489k6tc8IESJmRhg", callContext.id);
                // Hide Search
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:4pt4ZvyusUKx4tpa0VOvQA", callContext.id);
                // ShowSearch = False
                model.variables.showSearchVar = false;
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:QXvx_pW2FE6wzjeSVGKQbA", callContext.id);
                // Execute Action: ToggleShowFilters
                controller._toggleShowFilters$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:BwXKt+DIA0iJDwbM3kKZsA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:NrBn+PUQg0KP_zi398GtVA", callContext.id);
            }

        };
        Controller.prototype._handler_NavigateTo_Login$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_NavigateTo_Login");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:C4Pz_txo80CKW8TVhZpdmw:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.n0_zftvMk06xYTZKgLQJKQ/ClientActions.C4Pz_txo80CKW8TVhZpdmw:PuQ8uvtiKOkN9f8th24+CQ", "Connect2_LegacyShared", "Handler_NavigateTo_Login", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:MW+23lMaUU6YIjzp3eDuMg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:2fMh3QNvZk6PD6N9zhbJUA", callContext.id);
                // ForceInitiateLoginFlowDateTime = CurrDateTime
                model.variables.forceInitiateLoginFlowDateTimeVar = OS.BuiltinFunctions.currDateTime();
                OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:SCF8f2F2qkeeCaoqMBikSQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:C4Pz_txo80CKW8TVhZpdmw", callContext.id);
            }

        };

        Controller.prototype.onInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

        };
        Controller.prototype.pullToRefresh$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._pullToRefresh$Action, callContext);

        };
        Controller.prototype.onClick_Search$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_Search$Action, callContext);

        };
        Controller.prototype.b2C_SignInFlowControllerSignInCompleted$Action = function(redirectToIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._b2C_SignInFlowControllerSignInCompleted$Action, callContext, redirectToIn);

        };
        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.onHandle_SearchHistorySelectedItem$Action = function(selectedStringIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_SearchHistorySelectedItem$Action, callContext, selectedStringIn);

        };
        Controller.prototype.onClick_GoToMessageDetail$Action = function(messageInstanceIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_GoToMessageDetail$Action, callContext, messageInstanceIdIn);

        };
        Controller.prototype.refreshMessages$Action = function(isScrollToTopIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._refreshMessages$Action, callContext, isScrollToTopIn);

        };
        Controller.prototype.onClick_ResetFilters$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_ResetFilters$Action, callContext);

        };
        Controller.prototype.onParametersChanged$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

        };
        Controller.prototype.saveSetting$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._saveSetting$Action, callContext);

        };
        Controller.prototype.onScrollEnding$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onScrollEnding$Action, callContext);

        };
        Controller.prototype.updateMessageClear$Action = function(isReadIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._updateMessageClear$Action, callContext, isReadIn);

        };
        Controller.prototype.updateMessageRead$Action = function(messageInstanceIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._updateMessageRead$Action, callContext, messageInstanceIdIn);

        };
        Controller.prototype.revertSelectedFiltersToPersistedValue$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._revertSelectedFiltersToPersistedValue$Action, callContext);

        };
        Controller.prototype.backNavigationHandler$Action = function(backNavigationEventIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._backNavigationHandler$Action, callContext, backNavigationEventIn);

        };
        Controller.prototype.onClick_MarkAllAsRead$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_MarkAllAsRead$Action, callContext);

        };
        Controller.prototype.onClickSearchClear$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClickSearchClear$Action, callContext);

        };
        Controller.prototype.toggleShowSearch$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._toggleShowSearch$Action, callContext);

        };
        Controller.prototype.initializeSetting$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._initializeSetting$Action, callContext);

        };
        Controller.prototype.onChange_MessageSort$Action = function(isAscendingIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onChange_MessageSort$Action, callContext, isAscendingIn);

        };
        Controller.prototype.swipe_EventsRead$Action = function(messageInstanceIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._swipe_EventsRead$Action, callContext, messageInstanceIdIn);

        };
        Controller.prototype.b2C_SignInFlowControllerResetPasswordCompleted$Action = function(successMessageIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._b2C_SignInFlowControllerResetPasswordCompleted$Action, callContext, successMessageIn);

        };
        Controller.prototype.onClick_CloseSearchAndFilter$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_CloseSearchAndFilter$Action, callContext);

        };
        Controller.prototype.onClick_ApplyFilters$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_ApplyFilters$Action, callContext);

        };
        Controller.prototype.setSortVariable$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._setSortVariable$Action, callContext);

        };
        Controller.prototype.dismiss_WarningMessage$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._dismiss_WarningMessage$Action, callContext);

        };
        Controller.prototype.b2C_SignInFlowControllerSignUpCompleted$Action = function(successMessageIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._b2C_SignInFlowControllerSignUpCompleted$Action, callContext, successMessageIn);

        };
        Controller.prototype.toggleShowFilters$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._toggleShowFilters$Action, callContext);

        };
        Controller.prototype.swipe_EventsClear$Action = function(messageInstanceIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._swipe_EventsClear$Action, callContext, messageInstanceIdIn);

        };
        Controller.prototype.hideMessageClear$Action = function(messageInstanceIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._hideMessageClear$Action, callContext, messageInstanceIdIn);

        };
        Controller.prototype.onKeyup_SearchMessages$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onKeyup_SearchMessages$Action, callContext);

        };
        Controller.prototype.onAfterFetch_GetMessages$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onAfterFetch_GetMessages$Action, callContext);

        };
        Controller.prototype.onClick_Filter$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_Filter$Action, callContext);

        };
        Controller.prototype.handler_NavigateTo_Login$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_NavigateTo_Login$Action, callContext);

        };
        Controller.prototype.navigateTo_B2CLanding$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.navigateTo_MessageDetail$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.pullToRefreshTriggered$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.navigateTo_B2CCallback$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:iKTaVBbqsE2TV8kygBm0tA:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA:JDVFsscJB_uWX_OdVOax1A", "Connect2_LegacyShared", "MyNotifications", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:n0_zftvMk06xYTZKgLQJKQ:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.n0_zftvMk06xYTZKgLQJKQ:uEaVOUcpy7H3KVBB1z9elQ", "Connect2_LegacyShared", "ScreenBlock_MessageList", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:n0_zftvMk06xYTZKgLQJKQ", callContext.id);
            OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:iKTaVBbqsE2TV8kygBm0tA", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "MyNotifications/ScreenBlock_MessageList On Initialize");
                return controller.onInitialize$Action(callContext);

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

                OutSystemsDebugger.setThreadStartName(callContext.id, "MyNotifications/ScreenBlock_MessageList On Ready");
                return controller.onReady$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "MyNotifications/ScreenBlock_MessageList On Parameters Changed");
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
            return Connect2_LegacySharedController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, Connect2_LegacySharedLanguageResources);
});
define("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.mvc$controller.OnInitialize.FocusCursorJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        setTimeout(function() {
            var input = document.getElementById($parameters.InputWidgetID);
            if (input) {
                input.focus();
            }
        }, 200)
    };
});
define("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.mvc$controller.OnInitialize.WasCurrentViewRestoredFromCacheJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
    };
});
define("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.mvc$controller.OnClick_Search.FocusCursorJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        setTimeout(function() {
            var input = document.getElementById($parameters.InputWidgetID);
            if (input) {
                input.focus();
            }
        }, 200)
    };
});
define("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.mvc$controller.RefreshMessages.ScrollToTopJS", [], function() {
    return function($actions, $roles, $public) {
        document.querySelector(".content").scrollTop = 0;
    };
});
define("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.mvc$controller.OnClickSearchClear.SetScrollToTopJS", [], function() {
    return function($actions, $roles, $public) {
        var content = document.querySelector(".content");
        if (content) {
            content.scroll({
                top: 0,
                left: 0,
                behavior: 'instant'
            });
        }
    };
});
define("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.mvc$controller.OnClick_CloseSearchAndFilter.WasCurrentViewRestoredFromCacheJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
    };
});
define("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.mvc$controller.OnClick_CloseSearchAndFilter.FocusCursorJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        setTimeout(function() {
            var input = document.getElementById($parameters.InputWidgetID);
            if (input) {
                input.focus();
            }
        }, 200)
    };
});
define("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.mvc$controller.OnKeyup_SearchMessages.CheckForEnterKeyJS", [], function() {
    return function($actions, $roles, $public) {
        if (event.keyCode == 13) {
            $actions.OnHandle_SearchHistorySelectedItem("");
            event.target.blur();
        }
    };
});

define("Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "YOcVCxWQgk6pb5hfyGmawQ": {
            getter: function(varBag, idService) {
                return varBag.appManager_GetDeviceContextVar.value;
            }
        },
        "FiHhxhdGnEimuZJ7mSVI0w": {
            getter: function(varBag, idService) {
                return varBag.focusCursorJSResult.value;
            }
        },
        "S3ln3Ah5KU+GQxTjd1temA": {
            getter: function(varBag, idService) {
                return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
            }
        },
        "r7QHfnfVjU6pK3h7ymaYDA": {
            getter: function(varBag, idService) {
                return varBag.focusCursorJSResult.value;
            }
        },
        "Li3r0KTCb0SR6I1q3Io5ZA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.redirectToInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "yx+seUW1406w6uv4BHka9w": {
            getter: function(varBag, idService) {
                return varBag.vars.value.selectedStringInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "0SHaA2RPXk+S1xeMtncq0g": {
            getter: function(varBag, idService) {
                return varBag.vars.value.messageInstanceIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "QIfCRH5Fp0SNLPTokSg3vg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isScrollToTopInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "+YL18A4RwkCIhys0sabB1w": {
            getter: function(varBag, idService) {
                return varBag.scrollToTopJSResult.value;
            }
        },
        "UO10LCfqjU+RdUpf860u3w": {
            getter: function(varBag, idService) {
                return varBag.vars.value.incrementRecordsVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "6jtCSwvMB0mu66B+b9a2AA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isReadInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "Kz8TGmHNz0qlj1X1Jhybpw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.messageInstanceIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "Tp1BMXzv1UC8iby2sLebmA": {
            getter: function(varBag, idService) {
                return varBag.listIndexOfVar.value;
            }
        },
        "hPvfD2JedE2fsIxpSRmHJw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.backNavigationEventInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Object
        },
        "MhXd2YcGXESIbAKIAlohgg": {
            getter: function(varBag, idService) {
                return varBag.wrapper_MarkAllAsReadNotificationsVar.value;
            }
        },
        "1tlEoH8Z9U+oTqL56oBvnA": {
            getter: function(varBag, idService) {
                return varBag.setScrollToTopJSResult.value;
            }
        },
        "dge4A+IyqkeFVgRbK55AWQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isAscendingInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "tUomxixgDkO83VkwEdKqTA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.messageInstanceIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "SDMtyobMDEu2omr+pDkCOw": {
            getter: function(varBag, idService) {
                return varBag.markMessageAsReadVar.value;
            }
        },
        "FN8125kt_UisRoIh+j5dbg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.successMessageInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "X3_Hlrew5EyRBpVgSLK8xg": {
            getter: function(varBag, idService) {
                return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
            }
        },
        "U4RNvzdNSUOzyMGW3OPq_A": {
            getter: function(varBag, idService) {
                return varBag.focusCursorJSResult.value;
            }
        },
        "omNiOlbqtEiTeDCdE9ySeg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.successMessageInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "D4gBwu78WUaV7Od9eNZ1hg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.messageInstanceIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "6oaRYc4M8E6j5W63mJuUKA": {
            getter: function(varBag, idService) {
                return varBag.markMessageAsClearVar.value;
            }
        },
        "SG4cyor5WEGDkA8A5KZhfQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.messageInstanceIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "nMrB2v5Uxk+L2EmRi21eiw": {
            getter: function(varBag, idService) {
                return varBag.listIndexOfVar.value;
            }
        },
        "QAgdoabFCESt4EaTR1pSdQ": {
            getter: function(varBag, idService) {
                return varBag.checkForEnterKeyJSResult.value;
            }
        },
        "qpXEsWG4+kq60vEMN5QU8A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.showWarningVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "c1aNRN2QxEqzIZHCEGH1Rg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.showFiltersVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "IgACkdWxtkOnmtxmp6zRIg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.showSearchVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "cj1ZrFrYGEa3iCuuEi9qHA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.searchMessageStringVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "DyxKOTuu7k2LiewWEZdvAQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.orderByIsAscendingVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "2rYojxOFe067Pu8lQ1q5fA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.selectedHistorySearchVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "JSUzbFMtX0SHtjzq+HuyGQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.deviceHardwareIdVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "i29uYl1eKE+G9HKc8hYh3Q": {
            getter: function(varBag, idService) {
                return varBag.model.variables.maxRecordsVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "k2nw_FGzVUSlEoJPKi7bfg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isLoadMoreVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "ALahGqy0j0q80wRELh1NGQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.filter_OrderASCVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "gBK4GkUvMkaLP+qNGThCjg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.filter_OrderDESCVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "md_6t9GWokuy9vG8uwWWHg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.filter_MessageTypePrivateVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "ziWqums1_kKlGzEWUGY4fA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.filter_MessageTypePublicVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "buVZznGyz0Gwu9HS14h3Ew": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isShowLoadingVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "N5Dp_QBE+kqEoBC1iSRV5A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isEmptyMessageVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "wBUaGMdhCk+Ww3A+TMuu+A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isRefreshingVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "GhUgjqT1x0iyCbWP6HNrXw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.messagesListVar;
            }
        },
        "SetdibSS_kuYNWMmRVCA4g": {
            getter: function(varBag, idService) {
                return varBag.model.variables.hasUnreadVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "WUSKd7eTQUemoPhfllVRXA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.warningMessageVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "GN1n76UE3E6QT6645_1uLQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.currentMessageInstanceIdVar;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "dPZP99tYYkGtPcCkHWO_Xg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.forceInitiateLoginFlowDateTimeVar;
            },
            dataType: OS.DataTypes.DataTypes.DateTime
        },
        "ujVpsVTIgEeak6b4Mtgq0A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.totalPrivateVar;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "dNcUZd2NS0+ugftD6Fo0eg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.totalPublicVar;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "t60xkW0KBU6jTf2zgnVWaw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.selectedFilter_OrderASCVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "jE02nfLW20K2LAKWJEK7wg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.selectedFilter_MessageTypePrivateVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "ZQCDIX77cUWIawEAfIzW+w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.selectedFilter_MessageTypePublicVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "m_N7PkW6+UK9MCth8+8AIg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.trigger_PullToRefreshIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "EJQIFi0E10a0PRyWNHlwAg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.getMessagesDataAct;
            }
        },
        "g00fqahLUkC8lRnuhp7Tjg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.getMessageInstanceById2DataAct;
            }
        },
        "iVDSVGM7d0S+7kVRoIj8ag": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu"));
                })(varBag.model, idService);
            }
        },
        "cZ8_Lst+8UmRRlcmDYTGQw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu_IfLoggedIn"));
                })(varBag.model, idService);
            }
        },
        "61sLsUJZxUKfWmNnHisHQg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderLeft"));
                })(varBag.model, idService);
            }
        },
        "MqZCFDquG0SYk9NONYh8vA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsLoggedIn"));
                })(varBag.model, idService);
            }
        },
        "ikZC0Cd7z0OMEKHgDyRc_w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsSearchShowHeader"));
                })(varBag.model, idService);
            }
        },
        "FzQVn4FL4ketJrEUlk5dkw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Close_Search_Icon"));
                })(varBag.model, idService);
            }
        },
        "KQktr6RNEESqOslmIu7qQw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Title"));
                })(varBag.model, idService);
            }
        },
        "UGGHQP_JEECJam7BAfwldQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsSearch"));
                })(varBag.model, idService);
            }
        },
        "DtauVCt43E2lS4j0K5jy2A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Icon"));
                })(varBag.model, idService);
            }
        },
        "BQJ6Ra_3z0eCC2Bsphp8hA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Input"));
                })(varBag.model, idService);
            }
        },
        "+akrdwOmyE+IZdzAotTTUw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Input_SearchMessages"));
                })(varBag.model, idService);
            }
        },
        "weNe3DMGzkGEtMLZw1rxww": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderRight"));
                })(varBag.model, idService);
            }
        },
        "MPGJrOKMdUSQ3hnQKuLwbA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsSearchOpen"));
                })(varBag.model, idService);
            }
        },
        "OJc_Yu5Oy0yz7JAX3B5Heg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Search_Icon"));
                })(varBag.model, idService);
            }
        },
        "M+A0c4RAKEe24XzoX6Az6w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsFiltersBarOpen"));
                })(varBag.model, idService);
            }
        },
        "XQqdKMtnO06ZGak13k+4GA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Close_Filter_Icon"));
                })(varBag.model, idService);
            }
        },
        "DQnwY6jkXEueSvf6Ag0LVw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Filter_Icon"));
                })(varBag.model, idService);
            }
        },
        "j9rTJrPFXUqTTzl79kX03w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderContent"));
                })(varBag.model, idService);
            }
        },
        "IZo0E3_8pke3IkQ0E0L_kA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "N98lK87DKkOtzqVr4Xl0yw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsShowSearch"));
                })(varBag.model, idService);
            }
        },
        "WsX7yeYKGEK5qr16k8Pplg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("FilterDataBlock"));
                })(varBag.model, idService);
            }
        },
        "cE_WHpCW8UKmKI_3wrvOkQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsShowFilters"));
                })(varBag.model, idService);
            }
        },
        "84GEDv0hg0GHdE6qDQ_+hQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ListHasResults"));
                })(varBag.model, idService);
            }
        },
        "i7TIIL7kIESVIAfNr+p6hw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsFiltered"));
                })(varBag.model, idService);
            }
        },
        "AiqgUuj1R0C0ubVlNfZrMw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder1"));
                })(varBag.model, idService);
            }
        },
        "r9_IPfhdq02RFvdEYCC6WA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder2"));
                })(varBag.model, idService);
            }
        },
        "N_zyB9l9C0C6v579bf2Rgg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder3"));
                })(varBag.model, idService);
            }
        },
        "910XiyZOuUG98QM6in1Djg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "_VgRYiaO+UiNFBQrS8djHg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("LoadingMarkAllRead"));
                })(varBag.model, idService);
            }
        },
        "6PcF9joLsE+FJ5pFzqsO+w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BottomBar"));
                })(varBag.model, idService);
            }
        },
        "OPehfrhyakyg5O3Py2LjuA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BottomBar"));
                })(varBag.model, idService);
            }
        },
        "umsk8y_Ak0CmMJcA+mvh0g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements"));
                })(varBag.model, idService);
            }
        },
        "+iranGheZU2PJMHwNxWImw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});