define("UBTConnect.App_Notifications.Notifications.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "Connect_Updates_CS.model", "UBTConnectLibrary.model", "Connect2_Notification_CS.model", "UBTConnect.controller", "NavigationHandler.controller", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTConnectLibrary.Layouts.Layout_MainPages_Upgrade.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnectLibrary.ConnectPatterns.Input.mvc$model", "UBTConnectLibrary.OutSystemsUIOverrides.Badge.mvc$model", "UBTConnect.App_Notifications.Notifications_Action.mvc$model", "UBTConnect.App_Notifications.Notifications_Header.mvc$model", "UBTConnect.App_Notifications.Notifications_NoItemsFound.mvc$model", "UBTConnect.App_Notifications.NotificationsListBreakpoints.mvc$model", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnectLibrary.ConnectCorePatterns.Notification_ListItem.mvc$model", "NavigationHandler.ScrollAnchors.ScrollAnchor.mvc$model", "UBTConnect.App_Common.BottomBarMenu.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "UBTConnect.App_Notifications.Notifications_SortSheet.mvc$model", "UBTConnect.App_Notifications.Notifications_MoreActionSheet.mvc$model", "Connect_Updates_CS.model$Filter_UpdatesRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Updates_CS", "UBTConnect.model$UI_Updates_DateRangeList", "UBTConnect.model$UI_UpdateItem_BreakpointList", "UBTConnect.model$UI_UpdateItem_BreakpointRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$SearchInputRec", "UBTConnect.model$UI_Updates_DateRangeRec", "Connect2_Notification_CS.model$MessageListItemRec", "UBTConnect.referencesHealth$Connect2_Notification_CS", "UBTConnect.model$MessageListItemList", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnect.controller$ScrollTop", "UBTConnect.controller$Directory_Updates_RefreshBottomBarCount", "NavigationHandler.controller$GetPreloadObject", "UBTConnect.referencesHealth$NavigationHandler", "NavigationHandler.controller$AssignFromObject", "UBTConnect.model$EntitiesCarousel_SwippedItemList", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetOpen", "UBTConnect.controller$GetSkeletonList_UI_Notification", "UBTConnect.model$Updates_DateRangesList", "UBTConnect.controller$App_Notifications_AugmentDateRanges", "UBTConnect.controller$App_Notifications_GetBreakpoints", "UBTConnect.controller$Directory_Updates_GetListBreakpoint"], function(OutSystems, UBTConnectModel, Connect_Updates_CSModel, UBTConnectLibraryModel, Connect2_Notification_CSModel, UBTConnectController, NavigationHandlerController, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTConnectLibrary_Layouts_Layout_MainPages_Upgrade_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, UBTConnectLibrary_ConnectPatterns_Input_mvcModel, UBTConnectLibrary_OutSystemsUIOverrides_Badge_mvcModel, UBTConnect_App_Notifications_Notifications_Action_mvcModel, UBTConnect_App_Notifications_Notifications_Header_mvcModel, UBTConnect_App_Notifications_Notifications_NoItemsFound_mvcModel, UBTConnect_App_Notifications_NotificationsListBreakpoints_mvcModel, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, UBTConnectLibrary_ConnectCorePatterns_Notification_ListItem_mvcModel, NavigationHandler_ScrollAnchors_ScrollAnchor_mvcModel, UBTConnect_App_Common_BottomBarMenu_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel, UBTConnect_App_Notifications_Notifications_SortSheet_mvcModel, UBTConnect_App_Notifications_Notifications_MoreActionSheet_mvcModel) {
    var OS = OutSystems.Internal;

    var GetDateRangesDataActRec = (function(_super) {
        __extends(GetDateRangesDataActRec, _super);

        function GetDateRangesDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        GetDateRangesDataActRec.attributesToDeclare = function() {
            return [
                this.attr("DateRangesList", "dateRangesListOut", "DateRangesList", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.Updates_DateRangesList());
                }, true, UBTConnectModel.Updates_DateRangesList)
            ].concat(_super.attributesToDeclare.call(this));
        };
        GetDateRangesDataActRec.fromStructure = function(str) {
            return new GetDateRangesDataActRec(new GetDateRangesDataActRec.RecordClass({
                dateRangesListOut: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        GetDateRangesDataActRec.init();
        return GetDateRangesDataActRec;
    })(OS.Model.DataSourceRecord);
    var FetchNotificationsDataActRec = (function(_super) {
        __extends(FetchNotificationsDataActRec, _super);

        function FetchNotificationsDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        FetchNotificationsDataActRec.attributesToDeclare = function() {
            return [
                this.attr("UI_NotificationItemList", "uI_NotificationItemListOut", "UI_NotificationItemList", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.MessageListItemList());
                }, true, UBTConnectModel.MessageListItemList),
                this.attr("HasUnreadMessages", "hasUnreadMessagesOut", "HasUnreadMessages", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, true),
                this.attr("UnreadNotificationsCount", "unreadNotificationsCountOut", "UnreadNotificationsCount", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        FetchNotificationsDataActRec.init();
        return FetchNotificationsDataActRec;
    })(OS.Model.DataSourceRecord);

    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("Filter_BottomSheetId", "filter_BottomSheetIdVar", "Filter_BottomSheetId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("Filter_Updates", "filter_UpdatesVar", "Filter_Updates", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect_Updates_CSModel.Filter_UpdatesRec());
                }, false, Connect_Updates_CSModel.Filter_UpdatesRec),
                this.attr("HasFiltersApplied", "hasFiltersAppliedVar", "HasFiltersApplied", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("ShowMarkAll", "showMarkAllVar", "ShowMarkAll", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("DateRanges", "dateRangesVar", "DateRanges", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_Updates_DateRangeList());
                }, false, UBTConnectModel.UI_Updates_DateRangeList),
                this.attr("isLoading", "isLoadingVar", "isLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("BottomSheetId_IsLoaded", "bottomSheetId_IsLoadedVar", "BottomSheetId_IsLoaded", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("BottomSheetId_ShowSubscription", "bottomSheetId_ShowSubscriptionVar", "BottomSheetId_ShowSubscription", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("Breakpoints", "breakpointsVar", "Breakpoints", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_UpdateItem_BreakpointList());
                }, false, UBTConnectModel.UI_UpdateItem_BreakpointList),
                this.attr("CurrentBreakpoint", "currentBreakpointVar", "CurrentBreakpoint", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_UpdateItem_BreakpointRec());
                }, false, UBTConnectModel.UI_UpdateItem_BreakpointRec),
                this.attr("EventListener", "eventListenerVar", "EventListener", true, false, OS.DataTypes.DataTypes.Object, function() {
                    return null;
                }, false),
                this.attr("EventListenerTarget", "eventListenerTargetVar", "EventListenerTarget", true, false, OS.DataTypes.DataTypes.Object, function() {
                    return null;
                }, false),
                this.attr("IsHeaderScrolled", "isHeaderScrolledVar", "IsHeaderScrolled", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("IsToggleSearch", "isToggleSearchVar", "IsToggleSearch", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("CurrentSearchString", "currentSearchStringVar", "CurrentSearchString", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("BadgeNumber", "badgeNumberVar", "BadgeNumber", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 0;
                }, false),
                this.attr("SelectedHistorySearch", "selectedHistorySearchVar", "SelectedHistorySearch", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("DeviceHardwareId", "deviceHardwareIdVar", "DeviceHardwareId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("Filter_MessageTypePrivate", "filter_MessageTypePrivateVar", "Filter_MessageTypePrivate", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return true;
                }, false),
                this.attr("Filter_MessageTypePublic", "filter_MessageTypePublicVar", "Filter_MessageTypePublic", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return true;
                }, false),
                this.attr("OrderByIsAscending", "orderByIsAscendingVar", "OrderByIsAscending", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("MaxRecords", "maxRecordsVar", "MaxRecords", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 20;
                }, false),
                this.attr("ShowWarning", "showWarningVar", "ShowWarning", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("SelectedFilter_OrderASC", "selectedFilter_OrderASCVar", "SelectedFilter_OrderASC", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("Filter_OrderASC", "filter_OrderASCVar", "Filter_OrderASC", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("Filter_OrderDESC", "filter_OrderDESCVar", "Filter_OrderDESC", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("SelectedFilter_MessageTypePrivate", "selectedFilter_MessageTypePrivateVar", "SelectedFilter_MessageTypePrivate", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return true;
                }, false),
                this.attr("SelectedFilter_MessageTypePublic", "selectedFilter_MessageTypePublicVar", "SelectedFilter_MessageTypePublic", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return true;
                }, false),
                this.attr("MoreAction_BottomSheetId", "moreAction_BottomSheetIdVar", "MoreAction_BottomSheetId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("GetDateRanges", "getDateRangesDataAct", "getDateRangesDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new GetDateRangesDataActRec());
                }, true, GetDateRangesDataActRec),
                this.attr("FetchNotifications", "fetchNotificationsDataAct", "fetchNotificationsDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new FetchNotificationsDataActRec());
                }, true, FetchNotificationsDataActRec)
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
                    Model._hasValidationWidgetsValue = (((((((((((((((UBTConnectLibrary_Layouts_Layout_MainPages_Upgrade_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Input_mvcModel.hasValidationWidgets) || UBTConnectLibrary_OutSystemsUIOverrides_Badge_mvcModel.hasValidationWidgets) || UBTConnect_App_Notifications_Notifications_Action_mvcModel.hasValidationWidgets) || UBTConnect_App_Notifications_Notifications_Header_mvcModel.hasValidationWidgets) || UBTConnect_App_Notifications_Notifications_NoItemsFound_mvcModel.hasValidationWidgets) || UBTConnect_App_Notifications_NotificationsListBreakpoints_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectCorePatterns_Notification_ListItem_mvcModel.hasValidationWidgets) || NavigationHandler_ScrollAnchors_ScrollAnchor_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_BottomBarMenu_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets) || UBTConnect_App_Notifications_Notifications_SortSheet_mvcModel.hasValidationWidgets) || UBTConnect_App_Notifications_Notifications_MoreActionSheet_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {};
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "App_Notifications.Notifications");
});
define("UBTConnect.App_Notifications.Notifications.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Updates_CS.model", "UBTConnectLibrary.model", "Connect2_Notification_CS.model", "NavigationHandler.controller", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Notifications.Notifications.mvc$model", "UBTConnect.App_Notifications.Notifications.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.Layouts.Layout_MainPages_Upgrade.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.ConnectPatterns.Input.mvc$view", "UBTConnectLibrary.OutSystemsUIOverrides.Badge.mvc$view", "UBTConnect.App_Notifications.Notifications_Action.mvc$view", "UBTConnect.App_Notifications.Notifications_Header.mvc$view", "UBTConnect.App_Notifications.Notifications_NoItemsFound.mvc$view", "UBTConnect.App_Notifications.NotificationsListBreakpoints.mvc$view", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnectLibrary.ConnectCorePatterns.Notification_ListItem.mvc$view", "NavigationHandler.ScrollAnchors.ScrollAnchor.mvc$view", "UBTConnect.App_Common.BottomBarMenu.mvc$view", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "UBTConnect.App_Notifications.Notifications_SortSheet.mvc$view", "UBTConnect.App_Notifications.Notifications_MoreActionSheet.mvc$view", "Connect_Updates_CS.model$Filter_UpdatesRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Updates_CS", "UBTConnect.model$UI_Updates_DateRangeList", "UBTConnect.model$UI_UpdateItem_BreakpointList", "UBTConnect.model$UI_UpdateItem_BreakpointRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$SearchInputRec", "UBTConnect.model$UI_Updates_DateRangeRec", "Connect2_Notification_CS.model$MessageListItemRec", "UBTConnect.referencesHealth$Connect2_Notification_CS", "UBTConnect.model$MessageListItemList", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnect.controller$ScrollTop", "UBTConnect.controller$Directory_Updates_RefreshBottomBarCount", "NavigationHandler.controller$GetPreloadObject", "UBTConnect.referencesHealth$NavigationHandler", "NavigationHandler.controller$AssignFromObject", "UBTConnect.model$EntitiesCarousel_SwippedItemList", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetOpen", "UBTConnect.controller$GetSkeletonList_UI_Notification", "UBTConnect.model$Updates_DateRangesList", "UBTConnect.controller$App_Notifications_AugmentDateRanges", "UBTConnect.controller$App_Notifications_GetBreakpoints", "UBTConnect.controller$Directory_Updates_GetListBreakpoint"], function(OutSystems, UBTConnectModel, UBTConnectController, Connect_Updates_CSModel, UBTConnectLibraryModel, Connect2_Notification_CSModel, NavigationHandlerController, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, UBTConnect_App_Notifications_Notifications_mvc_model, UBTConnect_App_Notifications_Notifications_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_Layouts_Layout_MainPages_Upgrade_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectPatterns_Input_mvc_view, UBTConnectLibrary_OutSystemsUIOverrides_Badge_mvc_view, UBTConnect_App_Notifications_Notifications_Action_mvc_view, UBTConnect_App_Notifications_Notifications_Header_mvc_view, UBTConnect_App_Notifications_Notifications_NoItemsFound_mvc_view, UBTConnect_App_Notifications_NotificationsListBreakpoints_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_ConnectCorePatterns_Notification_ListItem_mvc_view, NavigationHandler_ScrollAnchors_ScrollAnchor_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, UBTConnect_App_Notifications_Notifications_SortSheet_mvc_view, UBTConnect_App_Notifications_Notifications_MoreActionSheet_mvc_view) {
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
        View.displayName = "App_Notifications.Notifications";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/UBTConnect.App_Notifications.Notifications.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/UBTConnectLibrary.ScrollAnimations.js"];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_Layouts_Layout_MainPages_Upgrade_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectPatterns_Input_mvc_view, UBTConnectLibrary_OutSystemsUIOverrides_Badge_mvc_view, UBTConnect_App_Notifications_Notifications_Action_mvc_view, UBTConnect_App_Notifications_Notifications_Header_mvc_view, UBTConnect_App_Notifications_Notifications_NoItemsFound_mvc_view, UBTConnect_App_Notifications_NotificationsListBreakpoints_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_ConnectCorePatterns_Notification_ListItem_mvc_view, NavigationHandler_ScrollAnchors_ScrollAnchor_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, UBTConnect_App_Notifications_Notifications_SortSheet_mvc_view, UBTConnect_App_Notifications_Notifications_MoreActionSheet_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_App_Notifications_Notifications_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_App_Notifications_Notifications_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function() {
                return "Notifications";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_Layouts_Layout_MainPages_Upgrade_mvc_view, {
                inputs: {
                    isGrayBackground: true
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onHeaderScrolled$Action: function(event_IsHeaderScrolledIn) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Layouts/Layout_MainPages_Upgrade OnHeaderScrolled");
                            controller.handler_OnHeaderScrolled$Action(event_IsHeaderScrolledIn, controller.callContext(eventHandlerContext));
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
                    placeholder_Header_Title: new PlaceholderContent(function() {
                        return [$if(model.variables.isToggleSearchVar, false, this, function() {
                            return [$if(model.variables.isHeaderScrolledVar, false, this, function() {
                                return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                    inputs: {
                                        ExtendedClasses: "full-width",
                                        Options: model.getCachedValue(idService.getId("sjcU_qk4XEy+T4wt7D89mg.Options"), function() {
                                            return function() {
                                                var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                rec.displayOptionsAttr = function() {
                                                    var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
                                                    rec.displayAttr = UBTConnectModel.staticEntities.uBT_Display.flex;
                                                    rec.alignItemsAttr = UBTConnectModel.staticEntities.uBT_AlignItems.center;
                                                    rec.flexDirectionAttr = UBTConnectModel.staticEntities.uBT_FlexDirection.row;
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
                                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                                inputs: {
                                                    In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral0,
                                                    In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.arrowLeftAlt,
                                                    In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.base_24
                                                },
                                                events: {
                                                    _handleError: function(ex) {
                                                        controller.handleError(ex);
                                                    },
                                                    click$Action: function() {
                                                        var eventHandlerContext = callContext.clone();
                                                        return OS.Flow.tryFinally(function() {
                                                            var varBag = {};
                                                            controller.pushDebuggerContext(eventHandlerContext);

                                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Icon Click");
                                                            controller.handler_ToggleSearch$Action(controller.callContext(eventHandlerContext));
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
                                                    uuid: "2",
                                                    alias: "3"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider,
                                                _dependencies: []
                                            }), React.createElement(UBTConnectLibrary_ConnectPatterns_Input_mvc_view, {
                                                inputs: {
                                                    In_Options: model.getCachedValue(idService.getId("Search_PostScroll.In_Options"), function() {
                                                        return function() {
                                                            var rec = new UBTConnectLibraryModel.SearchInputRec();
                                                            rec.initalStringAttr = model.variables.currentSearchStringVar;
                                                            rec.searchPromptAttr = "Search notifications";
                                                            rec.debounce_DelayMSAttr = 300;
                                                            rec.borderRadiusAttr = UBTConnectModel.staticEntities.shape.rounded;
                                                            rec.enableAutocompleteHTMLAttr = false;
                                                            rec.isSyncValueWithInputAttr = true;
                                                            return rec;
                                                        }();
                                                    }, function() {
                                                        return model.variables.currentSearchStringVar;
                                                    })
                                                },
                                                events: {
                                                    _handleError: function(ex) {
                                                        controller.handleError(ex);
                                                    },
                                                    event_ClearString$Action: function() {
                                                        return Promise.resolve().then(function() {
                                                            var eventHandlerContext = callContext.clone();
                                                            return OS.Flow.tryFinally(function() {
                                                                var varBag = {};
                                                                controller.pushDebuggerContext(eventHandlerContext);

                                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Input Event_ClearString");
                                                                return controller.handler_FilterSearchText$Action("", controller.callContext(eventHandlerContext));
                                                            }, function() {
                                                                controller.popDebuggerContext(eventHandlerContext);
                                                            });
                                                        });;
                                                    },
                                                    event_Submit$Action: function(event_SubmittedStringIn) {
                                                        return Promise.resolve().then(function() {
                                                            var eventHandlerContext = callContext.clone();
                                                            return OS.Flow.tryFinally(function() {
                                                                var varBag = {};
                                                                controller.pushDebuggerContext(eventHandlerContext);

                                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Input Event_Submit");
                                                                return controller.handler_FilterSearchText$Action(event_SubmittedStringIn, controller.callContext(eventHandlerContext));
                                                            }, function() {
                                                                controller.popDebuggerContext(eventHandlerContext);
                                                            });
                                                        });;
                                                    },
                                                    event_OnChange$Action: function(event_CurrentStringIn) {
                                                        var eventHandlerContext = callContext.clone();
                                                        return OS.Flow.tryFinally(function() {
                                                            var varBag = {};
                                                            controller.pushDebuggerContext(eventHandlerContext);

                                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Input Event_OnChange");
                                                            controller.handler_OnChangeSearchInput$Action(event_CurrentStringIn, false, controller.callContext(eventHandlerContext));
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
                                                    name: "Search_PostScroll",
                                                    alias: "4"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider,
                                                _dependencies: []
                                            })];
                                        })
                                    },
                                    _dependencies: [asPrimitiveValue(model.variables.currentSearchStringVar)]
                                })];
                            }, function() {
                                return ["Notifications", React.createElement(UBTConnectLibrary_OutSystemsUIOverrides_Badge_mvc_view, {
                                    inputs: {
                                        Size: UBTConnectModel.staticEntities.uBT_Size.extraSmall,
                                        Color: UBTConnectModel.staticEntities.uBT_Color.redDark,
                                        Number: OS.BuiltinFunctions.integerToLongInteger(model.variables.badgeNumberVar),
                                        MaxNumber: 9
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
                                        uuid: "4",
                                        alias: "5"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    _dependencies: []
                                })];
                            })];
                        }, function() {
                            return ["Notifications", React.createElement(UBTConnectLibrary_OutSystemsUIOverrides_Badge_mvc_view, {
                                inputs: {
                                    Color: UBTConnectModel.staticEntities.uBT_Color.redDark,
                                    Number: OS.BuiltinFunctions.integerToLongInteger(model.variables.badgeNumberVar),
                                    MaxNumber: 9,
                                    Size: UBTConnectModel.staticEntities.uBT_Size.extraSmall
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
                                    uuid: "5",
                                    alias: "6"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        })];
                    }),
                    placeholder_Header_Right: new PlaceholderContent(function() {
                        return [$if(model.variables.isHeaderScrolledVar, false, this, function() {
                            return [$if(model.variables.isToggleSearchVar, false, this, function() {
                                return [];
                            }, function() {
                                return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                    inputs: {
                                        In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.base_24,
                                        In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral0,
                                        In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.search
                                    },
                                    events: {
                                        _handleError: function(ex) {
                                            controller.handleError(ex);
                                        },
                                        click$Action: function() {
                                            var eventHandlerContext = callContext.clone();
                                            return OS.Flow.tryFinally(function() {
                                                var varBag = {};
                                                controller.pushDebuggerContext(eventHandlerContext);

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Icon Click");
                                                controller.handler_ToggleSearch$Action(controller.callContext(eventHandlerContext));
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
                                        name: "Icon_Search",
                                        alias: "7"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    _dependencies: []
                                })];
                            }), React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                inputs: {
                                    In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.base_24,
                                    In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.moreVertical,
                                    In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral0
                                },
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    },
                                    click$Action: function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Icon Click");
                                            controller.onClick_KebabButton$Action(controller.callContext(eventHandlerContext));
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
                                    name: "Icon_Kebab",
                                    alias: "8"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        }, function() {
                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                inputs: {
                                    In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral0,
                                    In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.base_24,
                                    In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.moreVertical
                                },
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    },
                                    click$Action: function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Icon Click");
                                            controller.onClick_KebabButton$Action(controller.callContext(eventHandlerContext));
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
                                    name: "Icon_Kebab2",
                                    alias: "9"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        })];
                    }),
                    placeholder_Header_Input: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_Input_mvc_view, {
                            inputs: {
                                In_Options: model.getCachedValue(idService.getId("Search_PreScroll.In_Options"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.SearchInputRec();
                                        rec.initalStringAttr = model.variables.currentSearchStringVar;
                                        rec.searchPromptAttr = "Search notifications";
                                        rec.debounce_DelayMSAttr = 300;
                                        rec.borderRadiusAttr = UBTConnectModel.staticEntities.shape.rounded;
                                        rec.enableAutocompleteHTMLAttr = false;
                                        rec.isSyncValueWithInputAttr = true;
                                        return rec;
                                    }();
                                }, function() {
                                    return model.variables.currentSearchStringVar;
                                })
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                event_OnChange$Action: function(event_CurrentStringIn) {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);

                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Input Event_OnChange");
                                        controller.handler_OnChangeSearchInput$Action(event_CurrentStringIn, true, controller.callContext(eventHandlerContext));
                                    }, function() {
                                        controller.popDebuggerContext(eventHandlerContext);
                                    });

                                    ;
                                },
                                event_ClearString$Action: function() {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Input Event_ClearString");
                                            return controller.handler_FilterSearchText$Action("", controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });
                                    });;
                                },
                                event_Submit$Action: function(event_SubmittedStringIn) {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Input Event_Submit");
                                            return controller.handler_FilterSearchText$Action(event_SubmittedStringIn, controller.callContext(eventHandlerContext));
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
                                name: "Search_PreScroll",
                                alias: "10"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    }),
                    headerContent: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnect_App_Notifications_Notifications_Action_mvc_view, {
                            inputs: {
                                HaveFiltersApplied: model.variables.hasFiltersAppliedVar,
                                BottomSheetId: model.variables.filter_BottomSheetIdVar,
                                isLoaded: true,
                                ShowSubscriptionOnClick: model.variables.bottomSheetId_ShowSubscriptionVar
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
                                name: "Notifications_Action",
                                alias: "11"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: false,
                            _idProps: {
                                service: idService,
                                uuid: "11"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(UBTConnect_App_Notifications_Notifications_Header_mvc_view, {
                            inputs: {
                                Title: model.variables.currentBreakpointVar.sectionNameAttr,
                                isLoading: model.variables.isLoadingVar,
                                BadgeNumber: model.variables.currentBreakpointVar.badgeCountAttr
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
                                name: "Notifications_ListHeader",
                                alias: "12"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }))];
                    }),
                    content: new PlaceholderContent(function() {
                        return [$if(((!(model.variables.isLoadingVar) && model.variables.fetchNotificationsDataAct.isDataFetchedAttr) && model.variables.fetchNotificationsDataAct.uI_NotificationItemListOut.isEmpty), false, this, function() {
                            return [React.createElement(UBTConnect_App_Notifications_Notifications_NoItemsFound_mvc_view, {
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
                                    uuid: "13",
                                    alias: "13"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        }, function() {
                            return [React.createElement(UBTConnect_App_Notifications_NotificationsListBreakpoints_mvc_view, {
                                inputs: {
                                    Breakpoints: model.variables.breakpointsVar,
                                    UI_NotificationItemList: model.variables.fetchNotificationsDataAct.uI_NotificationItemListOut,
                                    _uI_NotificationItemListInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchNotificationsDataAct.dataFetchStatusAttr),
                                    IsLoading: model.variables.isLoadingVar
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
                                    uuid: "14",
                                    alias: "14"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            }), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                visible: false,
                                _idProps: {
                                    service: idService,
                                    uuid: "15"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.List, {
                                animateItems: false,
                                extendedProperties: {
                                    "disable-virtualization": "False"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mode: /*Default*/ 0,
                                source: model.variables.fetchNotificationsDataAct.uI_NotificationItemListOut,
                                style: "list list-group background-neutral-0 updates-list",
                                tag: "div",
                                _idProps: {
                                    service: idService,
                                    name: "List_Notifications"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchNotificationsDataAct.dataFetchStatusAttr),
                                placeholders: {
                                    content: new IteratorPlaceholderContent(function(idService, callContext) {
                                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                                            inputs: {
                                                In_IsLoading: model.variables.isLoadingVar
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
                                                alias: "15"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            placeholders: {
                                                placeholder_LoadingSection: new PlaceholderContent(function() {
                                                    return [React.createElement(OSWidgets.Container, {
                                                        align: /*Default*/ 0,
                                                        animate: false,
                                                        extendedProperties: {
                                                            "data-plus-date": OS.BuiltinFunctions.dateTimeToText(model.variables.fetchNotificationsDataAct.uI_NotificationItemListOut.getCurrent(callContext.iterationContext).dateTimeCreatedAttr)
                                                        },
                                                        style: "updates-list__list-item",
                                                        visible: true,
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "18"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider
                                                    }, React.createElement(UBTConnectLibrary_ConnectCorePatterns_Notification_ListItem_mvc_view, {
                                                        inputs: {
                                                            In_AvatarImage_Left: model.getCachedValue(idService.getId("NotificationItem.In_AvatarImage_Left"), function() {
                                                                return function() {
                                                                    var rec = new UBTConnectLibraryModel.AvatarImageRec();
                                                                    rec.uRLAttr = model.variables.fetchNotificationsDataAct.uI_NotificationItemListOut.getCurrent(callContext.iterationContext).profileIconURLAttr;
                                                                    return rec;
                                                                }();
                                                            }, function() {
                                                                return model.variables.fetchNotificationsDataAct.uI_NotificationItemListOut.getCurrent(callContext.iterationContext).profileIconURLAttr;
                                                            }),
                                                            _in_AvatarImage_LeftInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchNotificationsDataAct.dataFetchStatusAttr),
                                                            In_IsRead: model.variables.fetchNotificationsDataAct.uI_NotificationItemListOut.getCurrent(callContext.iterationContext).isReadAttr,
                                                            _in_IsReadInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchNotificationsDataAct.dataFetchStatusAttr),
                                                            In_IsDoubleAvatar: false,
                                                            In_Description: model.variables.fetchNotificationsDataAct.uI_NotificationItemListOut.getCurrent(callContext.iterationContext).titleAttr,
                                                            _in_DescriptionInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchNotificationsDataAct.dataFetchStatusAttr),
                                                            In_NotificationDate: model.variables.fetchNotificationsDataAct.uI_NotificationItemListOut.getCurrent(callContext.iterationContext).dateTimeCreatedAttr,
                                                            _in_NotificationDateInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchNotificationsDataAct.dataFetchStatusAttr)
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
                                                            name: "NotificationItem",
                                                            alias: "16"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        _dependencies: []
                                                    }), React.createElement(NavigationHandler_ScrollAnchors_ScrollAnchor_mvc_view, {
                                                        inputs: {
                                                            Id: OS.BuiltinFunctions.longIntegerToText(model.variables.fetchNotificationsDataAct.uI_NotificationItemListOut.getCurrent(callContext.iterationContext).idAttr),
                                                            _idInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchNotificationsDataAct.dataFetchStatusAttr)
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
                                                            uuid: "20",
                                                            alias: "17"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        _dependencies: []
                                                    }))];
                                                })
                                            },
                                            _dependencies: [asPrimitiveValue(model.variables.fetchNotificationsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.fetchNotificationsDataAct.uI_NotificationItemListOut.getCurrent(callContext.iterationContext).idAttr), asPrimitiveValue(model.variables.fetchNotificationsDataAct.uI_NotificationItemListOut.getCurrent(callContext.iterationContext).titleAttr), asPrimitiveValue(model.variables.fetchNotificationsDataAct.uI_NotificationItemListOut.getCurrent(callContext.iterationContext).isReadAttr), asPrimitiveValue(model.variables.fetchNotificationsDataAct.uI_NotificationItemListOut.getCurrent(callContext.iterationContext).profileIconURLAttr), asPrimitiveValue(model.variables.fetchNotificationsDataAct.uI_NotificationItemListOut.getCurrent(callContext.iterationContext).dateTimeCreatedAttr)]
                                        })];
                                    }, callContext, idService, "1")
                                },
                                _dependencies: [asPrimitiveValue(model.variables.fetchNotificationsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.isLoadingVar)]
                            }))];
                        })];
                    }),
                    bottom: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnect_App_Common_BottomBarMenu_mvc_view, {
                            inputs: {
                                ActiveItem: model.getCachedValue(idService.getId("_WfZMhArpk+gGwF+GbpRFg.ActiveItem"), function() {
                                    return OS.BuiltinFunctions.nullTextIdentifier();
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
                                uuid: "21",
                                alias: "18"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    }),
                    placeholder_CommonUI_Inside_Layout: new PlaceholderContent(function() {
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
                                uuid: "22",
                                alias: "19"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.breakpointsVar), asPrimitiveValue(model.variables.fetchNotificationsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.fetchNotificationsDataAct.uI_NotificationItemListOut), asPrimitiveValue(model.variables.fetchNotificationsDataAct.isDataFetchedAttr), asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.currentBreakpointVar.badgeCountAttr), asPrimitiveValue(model.variables.currentBreakpointVar.sectionNameAttr), asPrimitiveValue(model.variables.bottomSheetId_ShowSubscriptionVar), asPrimitiveValue(model.variables.filter_BottomSheetIdVar), asPrimitiveValue(model.variables.hasFiltersAppliedVar), asPrimitiveValue(model.variables.badgeNumberVar), asPrimitiveValue(model.variables.currentSearchStringVar), asPrimitiveValue(model.variables.isHeaderScrolledVar), asPrimitiveValue(model.variables.isToggleSearchVar)]
            }), $if(false, false, this, function() {
                return [];
            }, function() {
                return [React.createElement(UBTConnect_App_Notifications_Notifications_SortSheet_mvc_view, {
                    inputs: {},
                    events: {
                        _handleError: function(ex) {
                            controller.handleError(ex);
                        },
                        loaded$Action: function(showSubscriptionOnClickIn) {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Notifications/Notifications_SortSheet Loaded");
                                controller.handler_FilterSheetLoaded$Action(showSubscriptionOnClickIn, controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });

                            ;
                        },
                        sheetInitialized$Action: function(sheetIdIn) {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Notifications/Notifications_SortSheet SheetInitialized");
                                controller.handler_FilterSheetSheetInitialized$Action(sheetIdIn, controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });

                            ;
                        },
                        applyFilters$Action: function() {
                            return Promise.resolve().then(function() {
                                var eventHandlerContext = callContext.clone();
                                return OS.Flow.tryFinally(function() {
                                    var varBag = {};
                                    controller.pushDebuggerContext(eventHandlerContext);

                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Notifications/Notifications_SortSheet ApplyFilters");
                                    return controller.handler_ApplyFilters$Action(model.variables.hasFiltersAppliedVar, controller.callContext(eventHandlerContext));
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
                        uuid: "23",
                        alias: "20"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    _dependencies: []
                })];
            }), $if(false, false, this, function() {
                return [];
            }, function() {
                return [React.createElement(UBTConnect_App_Notifications_Notifications_MoreActionSheet_mvc_view, {
                    inputs: {},
                    events: {
                        _handleError: function(ex) {
                            controller.handleError(ex);
                        },
                        loaded$Action: function(showSubscriptionOnClickIn) {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Notifications/Notifications_MoreActionSheet Loaded");
                                controller.handler_MoreActionSheetLoaded$Action(showSubscriptionOnClickIn, controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });

                            ;
                        },
                        applyFilters$Action: function() {
                            return Promise.resolve().then(function() {
                                var eventHandlerContext = callContext.clone();
                                return OS.Flow.tryFinally(function() {
                                    var varBag = {};
                                    controller.pushDebuggerContext(eventHandlerContext);

                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Notifications/Notifications_MoreActionSheet ApplyFilters");
                                    return controller.handler_ApplyFilters$Action(model.variables.hasFiltersAppliedVar, controller.callContext(eventHandlerContext));
                                }, function() {
                                    controller.popDebuggerContext(eventHandlerContext);
                                });
                            });;
                        },
                        sheetInitialized$Action: function(sheetIdIn) {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Notifications/Notifications_MoreActionSheet SheetInitialized");
                                controller.handler_MoreActionSheetSheetInitialized$Action(sheetIdIn, controller.callContext(eventHandlerContext));
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
                        uuid: "24",
                        alias: "21"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    _dependencies: []
                })];
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);

    return View;
});
define("UBTConnect.App_Notifications.Notifications.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Updates_CS.model", "UBTConnectLibrary.model", "Connect2_Notification_CS.model", "NavigationHandler.controller", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_Notifications.Notifications.mvc$debugger", "UBTConnect.App_Notifications.controller", "UBTConnect.App_Notifications.Notifications.mvc$controller.DestroyEventListener.DestroyEventListenerJS", "UBTConnect.App_Notifications.Notifications.mvc$controller.ScreenEvent_OnInitialize.FocusCursorJS", "UBTConnect.App_Notifications.Notifications.mvc$controller.ScreenEvent_OnInitialize.IsViewRestoredFromCacheJS", "UBTConnect.App_Notifications.Notifications.mvc$controller.ScreenEvent_OnReady.SetStickyHeaderHeightJS", "UBTConnect.App_Notifications.Notifications.mvc$controller.SetupScrollThreshold.SetupScrollThresholdsJS", "UBTConnect.App_Notifications.Notifications.mvc$controller.SetupScrollListener.SetupScrollEndListenerJS", "Connect_Updates_CS.model$Filter_UpdatesRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Updates_CS", "UBTConnect.model$UI_Updates_DateRangeList", "UBTConnect.model$UI_UpdateItem_BreakpointList", "UBTConnect.model$UI_UpdateItem_BreakpointRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$SearchInputRec", "UBTConnect.model$UI_Updates_DateRangeRec", "Connect2_Notification_CS.model$MessageListItemRec", "UBTConnect.referencesHealth$Connect2_Notification_CS", "UBTConnect.model$MessageListItemList", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnect.controller$ScrollTop", "UBTConnect.controller$Directory_Updates_RefreshBottomBarCount", "NavigationHandler.controller$GetPreloadObject", "UBTConnect.referencesHealth$NavigationHandler", "NavigationHandler.controller$AssignFromObject", "UBTConnect.model$EntitiesCarousel_SwippedItemList", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetOpen", "UBTConnect.controller$GetSkeletonList_UI_Notification", "UBTConnect.model$Updates_DateRangesList", "UBTConnect.controller$App_Notifications_AugmentDateRanges", "UBTConnect.controller$App_Notifications_GetBreakpoints", "UBTConnect.controller$Directory_Updates_GetListBreakpoint"], function(OutSystems, UBTConnectModel, UBTConnectController, Connect_Updates_CSModel, UBTConnectLibraryModel, Connect2_Notification_CSModel, NavigationHandlerController, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_Notifications_Notifications_mvc_Debugger, _flow_UBTConnect_App_NotificationsController, UBTConnect_App_Notifications_Notifications_mvc_controller_DestroyEventListener_DestroyEventListenerJS, UBTConnect_App_Notifications_Notifications_mvc_controller_ScreenEvent_OnInitialize_FocusCursorJS, UBTConnect_App_Notifications_Notifications_mvc_controller_ScreenEvent_OnInitialize_IsViewRestoredFromCacheJS, UBTConnect_App_Notifications_Notifications_mvc_controller_ScreenEvent_OnReady_SetStickyHeaderHeightJS, UBTConnect_App_Notifications_Notifications_mvc_controller_SetupScrollThreshold_SetupScrollThresholdsJS, UBTConnect_App_Notifications_Notifications_mvc_controller_SetupScrollListener_SetupScrollEndListenerJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {
                updateCurrentBreakpoint$Action: function(breakpointIn) {
                    breakpointIn = (breakpointIn === undefined) ? "" : breakpointIn;
                    return controller.executeActionInsideJSNode(controller._updateCurrentBreakpoint$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(breakpointIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "UpdateCurrentBreakpoint");
                },
                handler_ScrollEnding_UpdateBreakpoint$Action: function(in_DateIn) {
                    in_DateIn = (in_DateIn === undefined) ? "" : in_DateIn;
                    return controller.executeActionInsideJSNode(controller._handler_ScrollEnding_UpdateBreakpoint$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_DateIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "Handler_ScrollEnding_UpdateBreakpoint");
                }
            };
            this.dataFetchDependenciesOriginal = {
                getDateRanges$DataActRefresh: -1,
                fetchNotifications$DataActRefresh: -1
            };
            this.dataFetchDependentsGraph = {
                getDateRanges$DataActRefresh: [],
                fetchNotifications$DataActRefresh: []
            };
            this.shouldSendClientVarsToDataSources = false;
        }
        // Server Actions
        Controller.prototype.action_UI_UpdateItem_MarkAllAsRead$ServerAction = function(filter_UpdatesIn, callContext) {
            var controller = this.controller;
            var inputs = {
                Filter_Updates: OS.DataConversion.ServerDataConverter.to(filter_UpdatesIn, OS.DataTypes.DataTypes.Record)
            };
            return controller.callServerAction("Action_UI_UpdateItem_MarkAllAsRead", "screenservices/UBTConnect/App_Notifications/Notifications/ServiceAPIAction_UI_UpdateItem_MarkAllAsRead", "+WdIU5_kw9pLQimxUkxuew", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
            }, false).then(function(outputs) {});
        };

        // Aggregates and Data Actions
        Controller.prototype.getDateRanges$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:UPatnTxUzUSyph6SkRu4vw:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.nXyc+9VWHk+uigsyRKJRVQ/DataActions.UPatnTxUzUSyph6SkRu4vw:UeackZYSPFipVXZ+iYJV_A", "UBTConnect", "GetDateRanges", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "App_Notifications/Notifications/GetDateRanges");
                return controller.callDataAction("DataActionGetDateRanges", "screenservices/UBTConnect/App_Notifications/Notifications/DataActionGetDateRanges", "VHJtI4240mipQzNI94RA2g", function(b) {
                    model.variables.getDateRangesDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.getDateRangesDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getDateRangesDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false).then(function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "App_Notifications/Notifications/GetDateRanges On After Fetch");
                    return controller._onAfterFetch_GetDateRanges$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:UPatnTxUzUSyph6SkRu4vw", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };
        Controller.prototype.fetchNotifications$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:MIT7zgZzJ0urDbwBA22R5w:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.nXyc+9VWHk+uigsyRKJRVQ/DataActions.MIT7zgZzJ0urDbwBA22R5w:Tccoa3GNYo_IVjZWpuzsAw", "UBTConnect", "FetchNotifications", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "App_Notifications/Notifications/FetchNotifications");
                return controller.callDataAction("DataActionFetchNotifications", "screenservices/UBTConnect/App_Notifications/Notifications/DataActionFetchNotifications", "5f64GmY73D9nis0X1mHptw", function(b) {
                    model.variables.fetchNotificationsDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.fetchNotificationsDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.fetchNotificationsDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false).then(function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "App_Notifications/Notifications/FetchNotifications On After Fetch");
                    return controller._onAfterFetch_FetchNotifications$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:MIT7zgZzJ0urDbwBA22R5w", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };

        Controller.prototype.dataFetchActionNames = ["getDateRanges$DataActRefresh", "fetchNotifications$DataActRefresh"];
        // Client Actions
        Controller.prototype._handler_FilterSearchText$Action = function(textIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_FilterSearchText");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_Notifications.Notifications.Handler_FilterSearchText$vars"))());
            vars.value.textInLocal = textIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:M_+VDP1teUWZD7RK8Zgwpg:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.nXyc+9VWHk+uigsyRKJRVQ/ClientActions.M_+VDP1teUWZD7RK8Zgwpg:H91Nm7n_wmKq5YnqvlHFyw", "UBTConnect", "Handler_FilterSearchText", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KamIlQ2JrUSmPK7_xzsDlw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_d01obfHqketUAqs2VtDSQ", callContext.id);
                // CurrentSearchString = Text
                model.variables.currentSearchStringVar = vars.value.textInLocal;
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:esdERWkvykyiw2BsuNRIrQ", callContext.id) && (vars.value.textInLocal === model.variables.filter_UpdatesVar.filter_SearchTextAttr))) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YAEcNMdmzEqAUybpRBMfaA", callContext.id);
                    } else {
                        // Set Text Filter
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fCMhfAQN5U6BsQIS0OqhDA", callContext.id);
                        // Filter_Updates.Filter_SearchText = Text
                        model.variables.filter_UpdatesVar.filter_SearchTextAttr = vars.value.textInLocal;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:D6I9+poeVkCV8gYu1twH6A", callContext.id);
                        // ShowMarkAll = False
                        model.variables.showMarkAllVar = false;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6UAQB+ep_kWhy6DJM6Qzmg", callContext.id);
                        // Execute Action: ScrollTop
                        UBTConnectController.default.scrollTop$Action(".active-screen", "instant", callContext);
                        // isLoading
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Iht94hw_cEmZcbVldHIwXQ", callContext.id);
                        // isLoading = True
                        model.variables.isLoadingVar = true;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dTZP+U0Gm0eBBEVtaHJmfw", callContext.id);
                        // Execute Action: RefreshNotifications
                        return controller._refreshNotifications$Action(callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XxMRvNlmME2T+UuQpHiIMw", callContext.id);
                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:M_+VDP1teUWZD7RK8Zgwpg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:M_+VDP1teUWZD7RK8Zgwpg", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect.App_Notifications.Notifications.Handler_FilterSearchText$vars", [{
            name: "Text",
            attrName: "textInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._destroyEventListener$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("DestroyEventListener");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:s7enDSvB4UyAcwwTKTaGJQ:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.nXyc+9VWHk+uigsyRKJRVQ/ClientActions.s7enDSvB4UyAcwwTKTaGJQ:mhiq9cesCsMdYKo9nn_WfA", "UBTConnect", "DestroyEventListener", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WLo06LhsIUuZnvc8rHxRQQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sBWfYxNEqEaoMRyaNI4IxQ", callContext.id);
                controller.safeExecuteJSNode(UBTConnect_App_Notifications_Notifications_mvc_controller_DestroyEventListener_DestroyEventListenerJS, "DestroyEventListener", "DestroyEventListener", {
                    In_EventListener: OS.DataConversion.JSNodeParamConverter.to(model.variables.eventListenerVar, OS.DataTypes.DataTypes.Object),
                    In_EventListenerTarget: OS.DataConversion.JSNodeParamConverter.to(model.variables.eventListenerTargetVar, OS.DataTypes.DataTypes.Object)
                }, function($parameters) {}, {}, {});
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7DM1+XsSHkOKsG5L7ymMbw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:s7enDSvB4UyAcwwTKTaGJQ", callContext.id);
            }

        };
        Controller.prototype._handler_ToggleSearch$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_ToggleSearch");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:E2zJEZDgq0Wai20XNDlvIw:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.nXyc+9VWHk+uigsyRKJRVQ/ClientActions.E2zJEZDgq0Wai20XNDlvIw:JbujKCuuZ4_vGJhNHX0+xQ", "UBTConnect", "Handler_ToggleSearch", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SOIMdDwljEqLZF2rWBUuKA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7OVZFD3zbkSt+u2hZepXgA", callContext.id);
                // IsToggleSearch = notIsToggleSearch
                model.variables.isToggleSearchVar = !(model.variables.isToggleSearchVar);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xwuGXyyXKEycnUProzZYTg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:E2zJEZDgq0Wai20XNDlvIw", callContext.id);
            }

        };
        Controller.prototype._handler_OnChangeSearchInput$Action = function(event_CurrentStringIn, in_IsToggleSearchIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_OnChangeSearchInput");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_Notifications.Notifications.Handler_OnChangeSearchInput$vars"))());
            vars.value.event_CurrentStringInLocal = event_CurrentStringIn;
            vars.value.in_IsToggleSearchInLocal = in_IsToggleSearchIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:+lK4EzTQKkWgOjrutDZeXQ:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.nXyc+9VWHk+uigsyRKJRVQ/ClientActions.+lK4EzTQKkWgOjrutDZeXQ:o8MytFt_srC3N89XZQKxfA", "UBTConnect", "Handler_OnChangeSearchInput", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FmkwSz32rkSAeqtnEbxT_A", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zMkLQ_dO4UWSWt3eGEWcgw", callContext.id);
                // CurrentSearchString = Event_CurrentString
                model.variables.currentSearchStringVar = vars.value.event_CurrentStringInLocal;
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:c4X_1jN6kESgOKAkiBWCag", callContext.id) && vars.value.in_IsToggleSearchInLocal)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:iyl68Y_As0C1vg9wAPkXAw", callContext.id);
                    // IsToggleSearch = True
                    model.variables.isToggleSearchVar = true;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:d4pieSD7TEqKVu9m+RfdaQ", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:d4pieSD7TEqKVu9m+RfdaQ", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:+lK4EzTQKkWgOjrutDZeXQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_Notifications.Notifications.Handler_OnChangeSearchInput$vars", [{
            name: "Event_CurrentString",
            attrName: "event_CurrentStringInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "In_IsToggleSearch",
            attrName: "in_IsToggleSearchInLocal",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._handler_MarkAsRead$Action = function(updateItemIdIn, currentPositionIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_MarkAsRead");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_Notifications.Notifications.Handler_MarkAsRead$vars"))());
            vars.value.updateItemIdInLocal = updateItemIdIn;
            vars.value.currentPositionInLocal = currentPositionIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:jlReIww23UehslP4FBdVrw:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.nXyc+9VWHk+uigsyRKJRVQ/ClientActions.jlReIww23UehslP4FBdVrw:qscl2ge3tdzxRbD_8ek4wQ", "UBTConnect", "Handler_MarkAsRead", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pR6P4clKokmGCKZZOM7tlg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:thFOqQCj5EWhcUBrT9y16A", callContext.id);
                // Execute Action: RefreshUpdatesAndFlags
                controller._refreshUpdatesAndFlags$Action(vars.value.currentPositionInLocal, callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9NYFOmFDN0W4Z10k23zbZw", callContext.id);
                // Execute Action: Directory_Updates_RefreshBottomBarCount
                model.flush();
                return UBTConnectController.default.directory_Updates_RefreshBottomBarCount$Action(true, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zt9D_OO0W0q8Om9xiH0wEQ", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:jlReIww23UehslP4FBdVrw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:jlReIww23UehslP4FBdVrw", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect.App_Notifications.Notifications.Handler_MarkAsRead$vars", [{
            name: "UpdateItemId",
            attrName: "updateItemIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }, {
            name: "CurrentPosition",
            attrName: "currentPositionInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }]);
        Controller.prototype._screenEvent_OnInitialize$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ScreenEvent_OnInitialize");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_Notifications.Notifications.ScreenEvent_OnInitialize$vars"))());
            var getPreloadObjectVar = new OS.DataTypes.VariableHolder();
            var listIndexOfVar = new OS.DataTypes.VariableHolder();
            var assignFromObjectVar = new OS.DataTypes.VariableHolder();
            var isViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.getPreloadObjectVar = getPreloadObjectVar;
            varBag.listIndexOfVar = listIndexOfVar;
            varBag.assignFromObjectVar = assignFromObjectVar;
            varBag.isViewRestoredFromCacheJSResult = isViewRestoredFromCacheJSResult;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:MUEAKd2DjE2aiuGILTE2AA:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.nXyc+9VWHk+uigsyRKJRVQ/ClientActions.MUEAKd2DjE2aiuGILTE2AA:B2NJEcDO+GOPYGTu1y6iDg", "UBTConnect", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MOApiuQyhUeQ35kRuoK3hA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:G2D90PzT4ke3OuMiHJrU1w", callContext.id);
                isViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(UBTConnect_App_Notifications_Notifications_mvc_controller_ScreenEvent_OnInitialize_IsViewRestoredFromCacheJS, "IsViewRestoredFromCache", "ScreenEvent_OnInitialize", {
                    IsRestoredFromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("UBTConnect.App_Notifications.Notifications.ScreenEvent_OnInitialize$isViewRestoredFromCacheJSResult"))();
                    jsNodeResult.isRestoredFromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsRestoredFromCache, OS.DataTypes.DataTypes.Boolean);
                    return jsNodeResult;
                }, {}, {});
                // Check if IsViewRestoredFromCache IsRestoredFromCache
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fRGJJn3Hb0ekkV4G0uNmfw", callContext.id) && isViewRestoredFromCacheJSResult.value.isRestoredFromCacheOut)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zNmNyw6cjkapHKLT9geNPg", callContext.id);
                    controller.safeExecuteJSNode(UBTConnect_App_Notifications_Notifications_mvc_controller_ScreenEvent_OnInitialize_FocusCursorJS, "FocusCursor", "ScreenEvent_OnInitialize", {
                        InputWidgetID: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Search_PreScroll"), OS.DataTypes.DataTypes.Text)
                    }, function($parameters) {}, {}, {});
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DS2TN086kEmJK0Y84S2ElA", callContext.id);
                    // Execute Action: GetPreloadObject
                    getPreloadObjectVar.value = NavigationHandlerController.default.getPreloadObject$Action(callContext);

                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nsEy9STzYUmfTDZTmiBPpw", callContext.id) && ((getPreloadObjectVar.value.preloadOut) !== (OS.BuiltinFunctions.nullObject())))) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6GVjkg7SckGc2XXZvur3TA", callContext.id);
                        // Execute Action: AssignFromObject
                        assignFromObjectVar.value = NavigationHandlerController.default.assignFromObject$Action(OS.BuiltinFunctions.toObject(vars.value.entitiesCarousel_SwippedItemsVar), getPreloadObjectVar.value.preloadOut, callContext);

                        // Foreach EntitiesCarousel_SwippedItems
                        callContext.iterationContext.registerIterationStart(vars.value.entitiesCarousel_SwippedItemsVar);
                        try {
                            var entitiesCarousel_SwippedItemsIterator = callContext.iterationContext.getIterator(vars.value.entitiesCarousel_SwippedItemsVar);
                            var entitiesCarousel_SwippedItemsIndex = 0;
                            while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SfxMC9XPa06DOZPkJ3H82A", callContext.id) && (entitiesCarousel_SwippedItemsIndex < vars.value.entitiesCarousel_SwippedItemsVar.length))) {
                                entitiesCarousel_SwippedItemsIterator.currentRowNumber = entitiesCarousel_SwippedItemsIndex;
                                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7P0Z5s7KCEyXqNVelMwy3Q", callContext.id) && ((vars.value.entitiesCarousel_SwippedItemsVar.getItem(entitiesCarousel_SwippedItemsIndex.valueOf()).listPositionAttr < model.variables.fetchNotificationsDataAct.uI_NotificationItemListOut.length) && (vars.value.entitiesCarousel_SwippedItemsVar.getItem(entitiesCarousel_SwippedItemsIndex.valueOf()).entityItemIdAttr === OS.BuiltinFunctions.longIntegerToText(model.variables.fetchNotificationsDataAct.uI_NotificationItemListOut.getItem(vars.value.entitiesCarousel_SwippedItemsVar.getItem(entitiesCarousel_SwippedItemsIndex.valueOf()).listPositionAttr).idAttr))))) {
                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qWDOH6QlnkyZ8yTh37QKww", callContext.id);
                                    // FetchNotifications.UnreadNotificationsCount = FetchNotifications.UnreadNotificationsCount - 1
                                    model.variables.fetchNotificationsDataAct.unreadNotificationsCountOut = model.variables.fetchNotificationsDataAct.unreadNotificationsCountOut.sub(OS.BuiltinFunctions.integerToLongInteger(1));
                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qWDOH6QlnkyZ8yTh37QKww", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                                    // FetchNotifications.UI_NotificationItemList[EntitiesCarousel_SwippedItems.Current.ListPosition].IsRead = True
                                    model.variables.fetchNotificationsDataAct.uI_NotificationItemListOut.getItem(vars.value.entitiesCarousel_SwippedItemsVar.getItem(entitiesCarousel_SwippedItemsIndex.valueOf()).listPositionAttr).isReadAttr = true;
                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:farzPUKCh0GTrXdojl_BUg", callContext.id);
                                    // Execute Action: ListIndexOf
                                    listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.breakpointsVar, function(p) {
                                        return (OS.BuiltinFunctions.dateTimeToDate(model.variables.fetchNotificationsDataAct.uI_NotificationItemListOut.getItem(vars.value.entitiesCarousel_SwippedItemsVar.getItem(entitiesCarousel_SwippedItemsIndex.valueOf()).listPositionAttr).dateTimeCreatedAttr).gte(p.dateRangeAttr.fromAttr) && OS.BuiltinFunctions.dateTimeToDate(model.variables.fetchNotificationsDataAct.uI_NotificationItemListOut.getItem(vars.value.entitiesCarousel_SwippedItemsVar.getItem(entitiesCarousel_SwippedItemsIndex.valueOf()).listPositionAttr).dateTimeCreatedAttr).lte(p.dateRangeAttr.toAttr));
                                    }, callContext);

                                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TqzcDS0TakOhUp4dzzSw5g", callContext.id) && ((listIndexOfVar.value.positionOut) !== (-1)))) {
                                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LhHqfGTB9U+rLzzn0Vf5qg", callContext.id);
                                        // Breakpoints[ListIndexOf.Position].BadgeCount = Breakpoints[ListIndexOf.Position].BadgeCount - 1
                                        model.variables.breakpointsVar.getItem(listIndexOfVar.value.positionOut).badgeCountAttr = (model.variables.breakpointsVar.getItem(listIndexOfVar.value.positionOut).badgeCountAttr - 1);
                                    }

                                    // <<
                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HQ2XzbALvE6b8O1TYs026A", callContext.id);
                                }

                                entitiesCarousel_SwippedItemsIndex++;
                            }

                        } finally {
                            callContext.iterationContext.registerIterationEnd(vars.value.entitiesCarousel_SwippedItemsVar);
                        }

                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DyqdrmSczESgY1_kY+W8oA", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FkxxlbkqBEe9UIgeYIPgAQ", callContext.id);
                    }

                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tsJXbVVAxE6GCv0cOFFl1g", callContext.id);
                    // SelectedFilter_MessageTypePrivate = True
                    model.variables.selectedFilter_MessageTypePrivateVar = true;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tsJXbVVAxE6GCv0cOFFl1g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // SelectedFilter_MessageTypePublic = True
                    model.variables.selectedFilter_MessageTypePublicVar = true;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tsJXbVVAxE6GCv0cOFFl1g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                    // SelectedFilter_OrderASC = False
                    model.variables.selectedFilter_OrderASCVar = false;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LLWLqg0k+k2+3Y_g5Wyqeg", callContext.id);
                    // Execute Action: InitializeSetting
                    controller._initializeSetting$Action(callContext);
                    // Set Initial Breakpoint
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LMDqk4VTtkucbBXl7w9iyA", callContext.id);
                    // CurrentBreakpoint.Position = 0
                    model.variables.currentBreakpointVar.positionAttr = 0;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LMDqk4VTtkucbBXl7w9iyA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // CurrentBreakpoint.SectionName = Today
                    model.variables.currentBreakpointVar.sectionNameAttr = UBTConnectModel.staticEntities.updates_DateRanges.today;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LMDqk4VTtkucbBXl7w9iyA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                    // CurrentBreakpoint.BadgeCount = 0
                    model.variables.currentBreakpointVar.badgeCountAttr = 0;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:U1W2vVFTCkOvjXWBEtdsKA", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:MUEAKd2DjE2aiuGILTE2AA", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_Notifications.Notifications.ScreenEvent_OnInitialize$vars", [{
            name: "EntitiesCarousel_SwippedItems",
            attrName: "entitiesCarousel_SwippedItemsVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.RecordList,
            defaultValue: function() {
                return new UBTConnectModel.EntitiesCarousel_SwippedItemList();
            },
            complexType: UBTConnectModel.EntitiesCarousel_SwippedItemList
        }]);
        Controller.registerVariableGroupType("UBTConnect.App_Notifications.Notifications.ScreenEvent_OnInitialize$isViewRestoredFromCacheJSResult", [{
            name: "IsRestoredFromCache",
            attrName: "isRestoredFromCacheOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._handler_MoreActionSheetSheetInitialized$Action = function(sheetIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_MoreActionSheetSheetInitialized");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_Notifications.Notifications.Handler_MoreActionSheetSheetInitialized$vars"))());
            vars.value.sheetIdInLocal = sheetIdIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:SRvbL8_eMEC2gWHZ3jauCg:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.nXyc+9VWHk+uigsyRKJRVQ/ClientActions.SRvbL8_eMEC2gWHZ3jauCg:CaNp3ASy+n3rdflj3M1fCA", "UBTConnect", "Handler_MoreActionSheetSheetInitialized", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:09Kc9atbA06iKaPBWNBtHQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:n_S4alY2b0a+fS2TS3LLXw", callContext.id);
                // MoreAction_BottomSheetId = SheetId
                model.variables.moreAction_BottomSheetIdVar = vars.value.sheetIdInLocal;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WZFeTXCxcE+e6hsIc7t6eg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:SRvbL8_eMEC2gWHZ3jauCg", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_Notifications.Notifications.Handler_MoreActionSheetSheetInitialized$vars", [{
            name: "SheetId",
            attrName: "sheetIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._onClick_KebabButton$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_KebabButton");
            callContext = controller.callContext(callContext);
            var bottomSheetOpenVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.bottomSheetOpenVar = bottomSheetOpenVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:XqYoRlSBtUq7cvfqqrr0Tw:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.nXyc+9VWHk+uigsyRKJRVQ/ClientActions.XqYoRlSBtUq7cvfqqrr0Tw:SOccI+J8T5Bj8pBlidwwvw", "UBTConnect", "OnClick_KebabButton", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:134lyQRS6kGwzA5wFJLDhg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TNba3L5RJkO2++4PZD4BJg", callContext.id);
                // Execute Action: BottomSheetOpen
                bottomSheetOpenVar.value = OutSystemsUI_2_23Controller.default.bottomSheetOpen$Action(model.variables.moreAction_BottomSheetIdVar, callContext);

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HS1ig94VYEmRXNGENkHBhA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:XqYoRlSBtUq7cvfqqrr0Tw", callContext.id);
            }

        };
        Controller.prototype._setMarkAllTag$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("SetMarkAllTag");
            callContext = controller.callContext(callContext);
            var listFilter_GetUnreadVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.listFilter_GetUnreadVar = listFilter_GetUnreadVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:FaOjSJTIH0imj9mh7_5uyQ:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.nXyc+9VWHk+uigsyRKJRVQ/ClientActions.FaOjSJTIH0imj9mh7_5uyQ:8H2sAHg4nv42C2ljkmxWWg", "UBTConnect", "SetMarkAllTag", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2c9jbl+1aUisaq818TTwxA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:k9We+B+Xy0iSL6WCeZMAuA", callContext.id);
                // Execute Action: ListFilter_GetUnread
                listFilter_GetUnreadVar.value = OS.SystemActions.listFilter(model.variables.fetchNotificationsDataAct.uI_NotificationItemListOut, function(p) {
                    return !(p.isReadAttr);
                }, callContext);

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pGXdE4q5ekOb4bihyvBLCQ", callContext.id);
                // ShowMarkAll = notListFilter_GetUnread.FilteredList.Empty
                model.variables.showMarkAllVar = !(listFilter_GetUnreadVar.value.filteredListOut.isEmpty);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:p8DmqaotDkOkV_sgt_zpmA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:FaOjSJTIH0imj9mh7_5uyQ", callContext.id);
            }

        };
        Controller.prototype._updateCurrentBreakpoint$Action = function(breakpointIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("UpdateCurrentBreakpoint");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_Notifications.Notifications.UpdateCurrentBreakpoint$vars"))());
            vars.value.breakpointInLocal = breakpointIn;
            var listFilterBreakpointsVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.listFilterBreakpointsVar = listFilterBreakpointsVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:VunpUWnFOkWURtrgLlepFg:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.nXyc+9VWHk+uigsyRKJRVQ/ClientActions.VunpUWnFOkWURtrgLlepFg:vjXb1rl2zTVp2_gLiH5aNg", "UBTConnect", "UpdateCurrentBreakpoint", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LagQraWywUe2_RdtVI7xzw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:I8RjVOiuuEuHidiGlREV5g", callContext.id);
                // Execute Action: ListFilterBreakpoints
                listFilterBreakpointsVar.value = OS.SystemActions.listFilter(model.variables.breakpointsVar, function(p) {
                    return (p.sectionNameAttr === OS.BuiltinFunctions.textToIdentifier(vars.value.breakpointInLocal));
                }, callContext);

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AVq1ojawqUemyqGbKvlfBQ", callContext.id);
                // CurrentBreakpoint = If
                model.variables.currentBreakpointVar = ((!(listFilterBreakpointsVar.value.filteredListOut.isEmpty)) ? (listFilterBreakpointsVar.value.filteredListOut.getCurrent(callContext.iterationContext)) : (model.variables.currentBreakpointVar));
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Fc2XXPGnb0Wl89qwKXhJgg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:VunpUWnFOkWURtrgLlepFg", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_Notifications.Notifications.UpdateCurrentBreakpoint$vars", [{
            name: "Breakpoint",
            attrName: "breakpointInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._setDefaultFilters$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("SetDefaultFilters");
            callContext = controller.callContext(callContext);
            var listFilter_TodayVar = new OS.DataTypes.VariableHolder();
            var listFilter_OlderVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.listFilter_TodayVar = listFilter_TodayVar;
            varBag.listFilter_OlderVar = listFilter_OlderVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:CQb1Vc7km0OPMLngGSScqw:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.nXyc+9VWHk+uigsyRKJRVQ/ClientActions.CQb1Vc7km0OPMLngGSScqw:MnCmoxX8md57Xplu91Jsnw", "UBTConnect", "SetDefaultFilters", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UBT7EAQoW0a7GB_2TtJ6Tg", callContext.id);
                // Needs Dates?
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5UfXClgLJEO+Fuv+0Gjgiw", callContext.id) && (model.variables.filter_UpdatesVar.filter_DateAttr.date_FromAttr.equals(OS.BuiltinFunctions.nullDate()) || model.variables.filter_UpdatesVar.filter_DateAttr.date_ToAttr.equals(OS.BuiltinFunctions.nullDate())))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+OTb54yUdEW5XYdRxzNOJQ", callContext.id);
                    // Execute Action: ListFilter_Older
                    listFilter_OlderVar.value = OS.SystemActions.listFilter(model.variables.dateRangesVar, function(p) {
                        return (p.rangeAttr === UBTConnectModel.staticEntities.updates_DateRanges.older);
                    }, callContext);

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Ynh+UYi6qECIcuWXDDVrVg", callContext.id);
                    // Execute Action: ListFilter_Today
                    listFilter_TodayVar.value = OS.SystemActions.listFilter(model.variables.dateRangesVar, function(p) {
                        return (p.rangeAttr === UBTConnectModel.staticEntities.updates_DateRanges.today);
                    }, callContext);

                    // Set Dates
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dysXQGM5bEGUTVJrxOevaA", callContext.id);
                    // Filter_Updates.Filter_Date.Date_From = ListFilter_Older.FilteredList.Current.From
                    model.variables.filter_UpdatesVar.filter_DateAttr.date_FromAttr = listFilter_OlderVar.value.filteredListOut.getCurrent(callContext.iterationContext).fromAttr;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dysXQGM5bEGUTVJrxOevaA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // Filter_Updates.Filter_Date.Date_To = ListFilter_Today.FilteredList.Current.To
                    model.variables.filter_UpdatesVar.filter_DateAttr.date_ToAttr = listFilter_TodayVar.value.filteredListOut.getCurrent(callContext.iterationContext).toAttr;
                }

                // Needs Status?
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FHcWm5OI7EuqGSR0Be2vxg", callContext.id) && (model.variables.filter_UpdatesVar.filter_ReadOnlyAttr === OS.BuiltinFunctions.nullTextIdentifier()))) {
                    // Set Status
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sG947cLwBESMgB1h_auXdg", callContext.id);
                    // Filter_Updates.Filter_ReadOnly = None
                    model.variables.filter_UpdatesVar.filter_ReadOnlyAttr = UBTConnectModel.staticEntities.choice.none;
                }

                // Needs Sort?
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rBOn+o3Zc0OYYoMJUJhvNw", callContext.id) && (model.variables.filter_UpdatesVar.sort_ByNewestAttr === OS.BuiltinFunctions.nullTextIdentifier()))) {
                    // Set Sort
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zrVhwItZika62g2kPWDGmg", callContext.id);
                    // Filter_Updates.Sort_ByNewest = Yes
                    model.variables.filter_UpdatesVar.sort_ByNewestAttr = UBTConnectModel.staticEntities.choice.yes;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VnUP5ShHIUOfrTQF7_p07A", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VnUP5ShHIUOfrTQF7_p07A", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:CQb1Vc7km0OPMLngGSScqw", callContext.id);
            }

        };
        Controller.prototype._setBadgeCountsToZero$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("SetBadgeCountsToZero");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:DSl4Vsw_QUGxvxCaSZ7z7g:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.nXyc+9VWHk+uigsyRKJRVQ/ClientActions.DSl4Vsw_QUGxvxCaSZ7z7g:TjfF_zyNcUgwLUSGAshT7g", "UBTConnect", "SetBadgeCountsToZero", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hjcArp6Ok0KfWsOdVLg7bw", callContext.id);
                // Foreach Breakpoints
                callContext.iterationContext.registerIterationStart(model.variables.breakpointsVar);
                try {
                    var breakpointsIterator = callContext.iterationContext.getIterator(model.variables.breakpointsVar);
                    var breakpointsIndex = 0;
                    while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6+ItkBeaNUSw8JZJZ1Q9Zw", callContext.id) && (breakpointsIndex < model.variables.breakpointsVar.length))) {
                        breakpointsIterator.currentRowNumber = breakpointsIndex;
                        // Set BadgeCount to 0
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3NZVCX3GWkqF0xnKp6ffdA", callContext.id);
                        // Breakpoints.Current.BadgeCount = 0
                        model.variables.breakpointsVar.getItem(breakpointsIndex.valueOf()).badgeCountAttr = 0;
                        breakpointsIndex++;
                    }

                } finally {
                    callContext.iterationContext.registerIterationEnd(model.variables.breakpointsVar);
                }

                // Set Current Breakpoint
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Uj2Usv_YvEKKCSbtsbPEYg", callContext.id);
                // CurrentBreakpoint.BadgeCount = 0
                model.variables.currentBreakpointVar.badgeCountAttr = 0;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GTCgAqFKZEqlCKp648vyMg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:DSl4Vsw_QUGxvxCaSZ7z7g", callContext.id);
            }

        };
        Controller.prototype._handler_MarkAllAsRead$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_MarkAllAsRead");
            callContext = controller.callContext(callContext);
            var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
            varBag.callContext = callContext;
            varBag.allExceptionsVar = allExceptionsVar;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:YYnQXaLJ1UStnIowUxuIMg:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.nXyc+9VWHk+uigsyRKJRVQ/ClientActions.YYnQXaLJ1UStnIowUxuIMg:l+XGGxpXbrdNtYg3oFSmfA", "UBTConnect", "Handler_MarkAllAsRead", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mzYlqwc8PEC88t__IGg+7w", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QTySwlSuCkGznOSKOtLCKg", callContext.id);
                // ShowMarkAll = False
                model.variables.showMarkAllVar = false;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4g__a4jJYkiz9DQFYUM6Kg", callContext.id);
                // isLoading = True
                model.variables.isLoadingVar = true;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sVq7dr2GyUarZpAZX6dsSw", callContext.id);
                // Execute Action: Action_UI_UpdateItem_MarkAllAsRead
                model.flush();
                return controller.action_UI_UpdateItem_MarkAllAsRead$ServerAction(model.variables.filter_UpdatesVar, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xI+9hyKu8Ui0TbJKlZA+TQ", callContext.id);
                    // Execute Action: SetBadgeCountsToZero
                    controller._setBadgeCountsToZero$Action(callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4mgoBXo3iEGwXQ32RX3hQg", callContext.id);
                    // isLoading = False
                    model.variables.isLoadingVar = false;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FR2RYeiODUqNVJbwDkUffw", callContext.id);
                    // Execute Action: Directory_Updates_RefreshBottomBarCount
                    model.flush();
                    return UBTConnectController.default.directory_Updates_RefreshBottomBarCount$Action(true, callContext);
                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UohmIBwFIUimjX7Y8aO0Zw", callContext.id);
                });
            }).catch(function(ex) {
                OS.Logger.trace("Notifications.Handler_MarkAllAsRead", OS.Exceptions.getMessage(ex), ex.name);
                // Handle Error: AllExceptions
                if (!(OS.Exceptions.isSystem(ex))) {
                    OS.Logger.error(null, ex);
                    allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                    OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
                    return OS.Flow.executeAsyncFlow(function() {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7HLo2POa+UKBQAJhC50Nig", callContext.id);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:m4Xoc8xpsUSqQz3wN_hjCQ", callContext.id);
                        // isLoading = False
                        model.variables.isLoadingVar = false;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:racmddu9b0KX3m3a7puwOg", callContext.id);
                        return OS.Flow.returnAsync();

                    });
                }

                throw ex;
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:YYnQXaLJ1UStnIowUxuIMg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:YYnQXaLJ1UStnIowUxuIMg", callContext.id);
                throw ex;

            });
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
            var getSkeletonList_UI_NotificationVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getSkeletonList_UI_NotificationVar = getSkeletonList_UI_NotificationVar;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:g6HPX5F04UqVz6IcAOBJTg:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.nXyc+9VWHk+uigsyRKJRVQ/ClientActions.g6HPX5F04UqVz6IcAOBJTg:rfqqbE6iwT3KM7IIKO9w6Q", "UBTConnect", "ScreenEvent_OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hklKEQKvK0O64auESqaQgQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IUZwKvbZNUeVXIZtow6GMA", callContext.id);
                controller.safeExecuteJSNode(UBTConnect_App_Notifications_Notifications_mvc_controller_ScreenEvent_OnReady_SetStickyHeaderHeightJS, "SetStickyHeaderHeight", "ScreenEvent_OnReady", null, function($parameters) {}, {}, {});
                // isLoading
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lSXYUyFBgUKA1PhZ+XYXxQ", callContext.id);
                // isLoading = True
                model.variables.isLoadingVar = true;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fO23MaliVUaKsvz3m8nbwQ", callContext.id);
                // Execute Action: GetSkeletonList_UI_Notification
                getSkeletonList_UI_NotificationVar.value = UBTConnectController.default.getSkeletonList_UI_Notification$Action(10, callContext);

                // Setup Skeleton Data
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1r+U9iMixka7D9+DDEvhBQ", callContext.id);
                // FetchNotifications.UI_NotificationItemList = GetSkeletonList_UI_Notification.UI_NotificationItems
                model.variables.fetchNotificationsDataAct.uI_NotificationItemListOut = getSkeletonList_UI_NotificationVar.value.uI_NotificationItemsOut;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hCp0qv1u+064wUt10WiREg", callContext.id);
                // Refresh Query: GetDateRanges
                var result = controller.getDateRanges$DataActRefresh(callContext);
                model.flush();
                return result.then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hBMFAn7H00+w9OpC01+W9Q", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:g6HPX5F04UqVz6IcAOBJTg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:g6HPX5F04UqVz6IcAOBJTg", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._handler_FilterSheetSheetInitialized$Action = function(sheetIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_FilterSheetSheetInitialized");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_Notifications.Notifications.Handler_FilterSheetSheetInitialized$vars"))());
            vars.value.sheetIdInLocal = sheetIdIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:50joeBcMUkilsupq90tduQ:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.nXyc+9VWHk+uigsyRKJRVQ/ClientActions.50joeBcMUkilsupq90tduQ:G2KcQmS8ABiv4qJ_lrIOmQ", "UBTConnect", "Handler_FilterSheetSheetInitialized", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4t7WFoBYwkaLfN_O9Tx2LA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:aL2ddYLIqkuFE2yXx9vbXQ", callContext.id);
                // Filter_BottomSheetId = SheetId
                model.variables.filter_BottomSheetIdVar = vars.value.sheetIdInLocal;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uf7a01lu6UGCFwIbASgFmQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:50joeBcMUkilsupq90tduQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_Notifications.Notifications.Handler_FilterSheetSheetInitialized$vars", [{
            name: "SheetId",
            attrName: "sheetIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
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
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:CBzrePNFQkGiGCWnFIGfAQ:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.nXyc+9VWHk+uigsyRKJRVQ/ClientActions.CBzrePNFQkGiGCWnFIGfAQ:khsOhFKJypFn3X+oAZadNg", "UBTConnect", "InitializeSetting", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FhyKU0tABUal3+bSEkGq6g", callContext.id);
                // Is User Logged?
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8mLr+o8bWEGsMiCoy6XrYQ", callContext.id) && ((OS.BuiltinFunctions.getUserId()) !== (OS.BuiltinFunctions.nullIdentifier())))) {
                    // Set True
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gUiuqiTVrEmTgaSiTawiEA", callContext.id);
                    // ShowWarning = True
                    model.variables.showWarningVar = true;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gUiuqiTVrEmTgaSiTawiEA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // Filter_MessageTypePrivate = SelectedFilter_MessageTypePrivate
                    model.variables.filter_MessageTypePrivateVar = model.variables.selectedFilter_MessageTypePrivateVar;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gUiuqiTVrEmTgaSiTawiEA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                    // Filter_MessageTypePublic = SelectedFilter_MessageTypePublic
                    model.variables.filter_MessageTypePublicVar = model.variables.selectedFilter_MessageTypePublicVar;
                } else {
                    // Set False
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:iY9UxsEvVEaICaN6JxMzOA", callContext.id);
                    // ShowWarning = False
                    model.variables.showWarningVar = false;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:iY9UxsEvVEaICaN6JxMzOA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // Filter_MessageTypePrivate = False
                    model.variables.filter_MessageTypePrivateVar = false;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:iY9UxsEvVEaICaN6JxMzOA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                    // Filter_MessageTypePublic = True
                    model.variables.filter_MessageTypePublicVar = true;
                }

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VC9Y8hhL60aHNH+NGLFZ5g", callContext.id);
                // Filter_OrderASC = SelectedFilter_OrderASC
                model.variables.filter_OrderASCVar = model.variables.selectedFilter_OrderASCVar;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VC9Y8hhL60aHNH+NGLFZ5g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // Filter_OrderDESC = notSelectedFilter_OrderASC
                model.variables.filter_OrderDESCVar = !(model.variables.selectedFilter_OrderASCVar);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IT32FWLyYE+a1GMCFWRDjg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:CBzrePNFQkGiGCWnFIGfAQ", callContext.id);
            }

        };
        Controller.prototype._onAfterFetch_GetDateRanges$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnAfterFetch_GetDateRanges");
            callContext = controller.callContext(callContext);
            var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
            var app_Notifications_AugmentDateRangesVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.allExceptionsVar = allExceptionsVar;
            varBag.app_Notifications_AugmentDateRangesVar = app_Notifications_AugmentDateRangesVar;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:R7Bwevf9Ak2tjzopGLdPtQ:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.nXyc+9VWHk+uigsyRKJRVQ/ClientActions.R7Bwevf9Ak2tjzopGLdPtQ:39Z32o52R0pPl_VvhrO6Ag", "UBTConnect", "OnAfterFetch_GetDateRanges", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ObeP3IkBD0qc8Ohq4apCXA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:e8EqzbNEbkyTVtexMU89Jw", callContext.id);
                // Execute Action: App_Notifications_AugmentDateRanges
                app_Notifications_AugmentDateRangesVar.value = UBTConnectController.default.app_Notifications_AugmentDateRanges$Action(model.variables.getDateRangesDataAct.dateRangesListOut, callContext);

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CIys7A54BEeHpW9r9zilIQ", callContext.id);
                // DateRanges = App_Notifications_AugmentDateRanges.DateRanges
                model.variables.dateRangesVar = app_Notifications_AugmentDateRangesVar.value.dateRangesOut;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NAu82Ffqm0m3sblUB7zHMQ", callContext.id);
                // Execute Action: SetDefaultFilters
                controller._setDefaultFilters$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:iBlfE2kf60u3MEuCJYRS6Q", callContext.id);
                // Execute Action: RefreshNotifications
                return controller._refreshNotifications$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8NAIyVpZW0WaHnNSiHe+5g", callContext.id);
                });
            }).catch(function(ex) {
                OS.Logger.trace("Notifications.OnAfterFetch_GetDateRanges", OS.Exceptions.getMessage(ex), ex.name);
                // Handle Error: AllExceptions
                if (!(OS.Exceptions.isSystem(ex))) {
                    OS.Logger.error(null, ex);
                    allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                    OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
                    return OS.Flow.executeAsyncFlow(function() {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4D8NZtvUpE+E_05HdZ1BjA", callContext.id);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ce4xFrP_8kO+VcFagNoBlA", callContext.id);
                        // isLoading = False
                        model.variables.isLoadingVar = false;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+eqCFHsQd0irOpX5oA5dvA", callContext.id);
                        // Raise Error: BubbleGenericException
                        throw new OS.Exceptions.Exceptions.UserException("UBTConnect.BubbleGenericException", allExceptionsVar.value.exceptionMessageAttr);
                    });
                }

                throw ex;
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:R7Bwevf9Ak2tjzopGLdPtQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:R7Bwevf9Ak2tjzopGLdPtQ", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._refreshNotifications$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("RefreshNotifications");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:3I79fA3DHki3qOF9UG6sCQ:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.nXyc+9VWHk+uigsyRKJRVQ/ClientActions.3I79fA3DHki3qOF9UG6sCQ:yFWZ_++y8vcnBWcr9gsViQ", "UBTConnect", "RefreshNotifications", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XXayzIg+9Eqsi82Vh+IFZw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_GwvU7st0Eil5wFj31tW_Q", callContext.id);
                // Refresh Query: FetchNotifications
                var result = controller.fetchNotifications$DataActRefresh(callContext);
                model.flush();
                return result.then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AMcA03QlfEm+XaUA+auV9Q", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:3I79fA3DHki3qOF9UG6sCQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:3I79fA3DHki3qOF9UG6sCQ", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._refreshUpdatesAndFlags$Action = function(currentPositionIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("RefreshUpdatesAndFlags");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_Notifications.Notifications.RefreshUpdatesAndFlags$vars"))());
            vars.value.currentPositionInLocal = currentPositionIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:ZkLEh5zq3kGK1jkmqkAXrw:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.nXyc+9VWHk+uigsyRKJRVQ/ClientActions.ZkLEh5zq3kGK1jkmqkAXrw:_c_t+x2XKn7WXI6TlukSCA", "UBTConnect", "RefreshUpdatesAndFlags", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kNkm_WOuWEmRAxE9f7Q1bg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tpgUiHn95U+f329rV5B+9w", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:ZkLEh5zq3kGK1jkmqkAXrw", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_Notifications.Notifications.RefreshUpdatesAndFlags$vars", [{
            name: "CurrentPosition",
            attrName: "currentPositionInLocal",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }]);
        Controller.prototype._handler_FilterSheetLoaded$Action = function(showSubscriptionOnClickIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_FilterSheetLoaded");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_Notifications.Notifications.Handler_FilterSheetLoaded$vars"))());
            vars.value.showSubscriptionOnClickInLocal = showSubscriptionOnClickIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:x1ukiqAKs0OmoTobWCGsZw:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.nXyc+9VWHk+uigsyRKJRVQ/ClientActions.x1ukiqAKs0OmoTobWCGsZw:TEhsXPiLVUVMC1_+_fbtYA", "UBTConnect", "Handler_FilterSheetLoaded", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qlUmxVbUaECaUxA81ysgxg", callContext.id);
                // Setup Bottom Sheet Info
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:V1ygfH4uIUa8Bv73BvHpDA", callContext.id);
                // BottomSheetId_IsLoaded = True
                model.variables.bottomSheetId_IsLoadedVar = true;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:V1ygfH4uIUa8Bv73BvHpDA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // BottomSheetId_ShowSubscription = ShowSubscriptionOnClick
                model.variables.bottomSheetId_ShowSubscriptionVar = vars.value.showSubscriptionOnClickInLocal;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4ma99A6OA06dXRmTs1cPJg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:x1ukiqAKs0OmoTobWCGsZw", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_Notifications.Notifications.Handler_FilterSheetLoaded$vars", [{
            name: "ShowSubscriptionOnClick",
            attrName: "showSubscriptionOnClickInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._sectionHeaderEvent_UpdateListHeader$Action = function(event_BreakpointIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("SectionHeaderEvent_UpdateListHeader");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_Notifications.Notifications.SectionHeaderEvent_UpdateListHeader$vars"))());
            vars.value.event_BreakpointInLocal = event_BreakpointIn.clone();
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:VgP6lbhiCEOBs7x5q0psPw:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.nXyc+9VWHk+uigsyRKJRVQ/ClientActions.VgP6lbhiCEOBs7x5q0psPw:hmW+sSUDipOExdXqosEAuA", "UBTConnect", "SectionHeaderEvent_UpdateListHeader", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DjYyd7idD0S9v53eFU+35w", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7aX8jMVNzUmxCpH8B7oTmw", callContext.id);
                // CurrentBreakpoint = Event_Breakpoint
                model.variables.currentBreakpointVar = vars.value.event_BreakpointInLocal;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lkAP+iWDnk+KOwc8WNxQqg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:VgP6lbhiCEOBs7x5q0psPw", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_Notifications.Notifications.SectionHeaderEvent_UpdateListHeader$vars", [{
            name: "Event_Breakpoint",
            attrName: "event_BreakpointInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new UBTConnectModel.UI_UpdateItem_BreakpointRec();
            },
            complexType: UBTConnectModel.UI_UpdateItem_BreakpointRec
        }]);
        Controller.prototype._handler_MarkAsUnread$Action = function(updateItemIdIn, currentPositionIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_MarkAsUnread");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_Notifications.Notifications.Handler_MarkAsUnread$vars"))());
            vars.value.updateItemIdInLocal = updateItemIdIn;
            vars.value.currentPositionInLocal = currentPositionIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:ymAzoatJ80eAB12RPbnj2w:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.nXyc+9VWHk+uigsyRKJRVQ/ClientActions.ymAzoatJ80eAB12RPbnj2w:tXCWcU6GHzsL2phfGVXzHg", "UBTConnect", "Handler_MarkAsUnread", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:EXbyjmaf90i9QdMSdT8z2w", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KNIk3FZeC0GgFtCUGXqNGw", callContext.id);
                // Execute Action: RefreshUpdatesAndFlags
                controller._refreshUpdatesAndFlags$Action(vars.value.currentPositionInLocal, callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:il2X+_vAKUGvw80UhyG7aQ", callContext.id);
                // Execute Action: Directory_Updates_RefreshBottomBarCount
                model.flush();
                return UBTConnectController.default.directory_Updates_RefreshBottomBarCount$Action(true, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mKhVpg1uF0Kcqg9jtnC+bA", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:ymAzoatJ80eAB12RPbnj2w", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:ymAzoatJ80eAB12RPbnj2w", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect.App_Notifications.Notifications.Handler_MarkAsUnread$vars", [{
            name: "UpdateItemId",
            attrName: "updateItemIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }, {
            name: "CurrentPosition",
            attrName: "currentPositionInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }]);
        Controller.prototype._onAfterFetch_FetchNotifications$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnAfterFetch_FetchNotifications");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_Notifications.Notifications.OnAfterFetch_FetchNotifications$vars"))());
            var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
            var app_Notifications_GetBreakpointsVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.allExceptionsVar = allExceptionsVar;
            varBag.app_Notifications_GetBreakpointsVar = app_Notifications_GetBreakpointsVar;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:_nDMuYywM0SeuHnioSuYpw:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.nXyc+9VWHk+uigsyRKJRVQ/ClientActions._nDMuYywM0SeuHnioSuYpw:b3t45pn9E3ZRXGJsDwvN+w", "UBTConnect", "OnAfterFetch_FetchNotifications", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IS0X6ycyY0O9besICMNhmw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jR8B_wO+gUKAsms7F5q9gg", callContext.id);
                // Execute Action: App_Notifications_GetBreakpoints
                app_Notifications_GetBreakpointsVar.value = UBTConnectController.default.app_Notifications_GetBreakpoints$Action(model.variables.fetchNotificationsDataAct.uI_NotificationItemListOut, model.variables.dateRangesVar, callContext);

                // Set Breakpoints
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+nmLsbacSUm0_Xw10sViUQ", callContext.id);
                // Breakpoints = App_Notifications_GetBreakpoints.Breakpoints
                model.variables.breakpointsVar = app_Notifications_GetBreakpointsVar.value.breakpointsOut;
                // Has Breakpoints?
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:d0AaupqB2UmmXjOAF8oj3Q", callContext.id) && !(app_Notifications_GetBreakpointsVar.value.breakpointsOut.isEmpty))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:r28WuIBu40C804zhoG_aIg", callContext.id);
                    // CurrentBreakpoint = Breakpoints[0]
                    model.variables.currentBreakpointVar = model.variables.breakpointsVar.getItem(0);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:otDF8Ffx+0umigSxMMY4Bg", callContext.id);
                    // CurrentBreakpoint = EmptyBreakpoint
                    model.variables.currentBreakpointVar = vars.value.emptyBreakpointVar;
                }

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XOr0IHDegku1HnicxXVR6w", callContext.id);
                // ShowMarkAll = FetchNotifications.UnreadNotificationsCount > 0
                model.variables.showMarkAllVar = model.variables.fetchNotificationsDataAct.unreadNotificationsCountOut.gt(OS.BuiltinFunctions.integerToLongInteger(0));
                // isLoading
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KMPBj8iHXEeWSjn3MqlzsQ", callContext.id);
                // isLoading = False
                model.variables.isLoadingVar = false;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pjJXH+HE60WV4qL2uz7rsg", callContext.id);
                // Execute Action: DestroyEventListener
                controller._destroyEventListener$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:glZWBn2gEkSSD3k8OtOKlw", callContext.id);
                // Execute Action: SetupScrollListener
                controller._setupScrollListener$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:n4KY2uYty02hTDy1LKqmHw", callContext.id);
                // Execute Action: Directory_Updates_RefreshBottomBarCount
                model.flush();
                return UBTConnectController.default.directory_Updates_RefreshBottomBarCount$Action(true, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CONrEsWEuk2xydI_BWeFyA", callContext.id);
                });
            }).catch(function(ex) {
                OS.Logger.trace("Notifications.OnAfterFetch_FetchNotifications", OS.Exceptions.getMessage(ex), ex.name);
                // Handle Error: AllExceptions
                if (!(OS.Exceptions.isSystem(ex))) {
                    OS.Logger.error(null, ex);
                    allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                    OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
                    return OS.Flow.executeAsyncFlow(function() {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PJUrwunUl0a0GJnzjJQTbQ", callContext.id);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:f33Sof01b0GH4iHAoc49KA", callContext.id);
                        // isLoading = False
                        model.variables.isLoadingVar = false;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:B+AbQ676oE+1iZ2dqZkwrg", callContext.id);
                        // Raise Error: BubbleGenericException
                        throw new OS.Exceptions.Exceptions.UserException("UBTConnect.BubbleGenericException", allExceptionsVar.value.exceptionMessageAttr);
                    });
                }

                throw ex;
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:_nDMuYywM0SeuHnioSuYpw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:_nDMuYywM0SeuHnioSuYpw", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect.App_Notifications.Notifications.OnAfterFetch_FetchNotifications$vars", [{
            name: "EmptyBreakpoint",
            attrName: "emptyBreakpointVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new UBTConnectModel.UI_UpdateItem_BreakpointRec();
            },
            complexType: UBTConnectModel.UI_UpdateItem_BreakpointRec
        }]);
        Controller.prototype._handler_MoreActionSheetLoaded$Action = function(showSubscriptionOnClickIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_MoreActionSheetLoaded");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_Notifications.Notifications.Handler_MoreActionSheetLoaded$vars"))());
            vars.value.showSubscriptionOnClickInLocal = showSubscriptionOnClickIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:OG3lwyboTUu04kjKheCuFg:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.nXyc+9VWHk+uigsyRKJRVQ/ClientActions.OG3lwyboTUu04kjKheCuFg:8x+JTtr2aakQ1d7wecD9zg", "UBTConnect", "Handler_MoreActionSheetLoaded", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ym6EvTbPQkmgSAEWfAh2sw", callContext.id);
                // Setup Bottom Sheet Info
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wc3PH7dPCkeMimiBfbgFgQ", callContext.id);
                // BottomSheetId_IsLoaded = True
                model.variables.bottomSheetId_IsLoadedVar = true;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wc3PH7dPCkeMimiBfbgFgQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // BottomSheetId_ShowSubscription = ShowSubscriptionOnClick
                model.variables.bottomSheetId_ShowSubscriptionVar = vars.value.showSubscriptionOnClickInLocal;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NqManh3Lj0CDBd25aWjY0Q", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:OG3lwyboTUu04kjKheCuFg", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_Notifications.Notifications.Handler_MoreActionSheetLoaded$vars", [{
            name: "ShowSubscriptionOnClick",
            attrName: "showSubscriptionOnClickInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._handler_OnHeaderScrolled$Action = function(event_IsHeaderScrolledIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_OnHeaderScrolled");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_Notifications.Notifications.Handler_OnHeaderScrolled$vars"))());
            vars.value.event_IsHeaderScrolledInLocal = event_IsHeaderScrolledIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:mDWX2RFS8kquU3_741kzXQ:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.nXyc+9VWHk+uigsyRKJRVQ/ClientActions.mDWX2RFS8kquU3_741kzXQ:da_u2NvpxqoA+nrBZwJksA", "UBTConnect", "Handler_OnHeaderScrolled", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:J_eV3p1oK0eNgnlfJBd4dQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dNCITAh3SUq_VchhaI4q7Q", callContext.id);
                // IsHeaderScrolled = Event_IsHeaderScrolled
                model.variables.isHeaderScrolledVar = vars.value.event_IsHeaderScrolledInLocal;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GU6dHyx0aEm7Ttmsw_pfYQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:mDWX2RFS8kquU3_741kzXQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_Notifications.Notifications.Handler_OnHeaderScrolled$vars", [{
            name: "Event_IsHeaderScrolled",
            attrName: "event_IsHeaderScrolledInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._handler_ApplyFilters$Action = function(event_HasFiltersAppliedIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_ApplyFilters");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_Notifications.Notifications.Handler_ApplyFilters$vars"))());
            vars.value.event_HasFiltersAppliedInLocal = event_HasFiltersAppliedIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:YAJz4bPV1UOZ5xXzUvvfOg:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.nXyc+9VWHk+uigsyRKJRVQ/ClientActions.YAJz4bPV1UOZ5xXzUvvfOg:fxP1FyD5f9j0X2r5JsO1DQ", "UBTConnect", "Handler_ApplyFilters", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HK_72iyG4E61AnCbgMQlGg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                // Setup Variables
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:60niFLmFX0illvCu5xngyg", callContext.id);
                // HasFiltersApplied = Event_HasFiltersApplied
                model.variables.hasFiltersAppliedVar = vars.value.event_HasFiltersAppliedInLocal;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:t9lic+Ls8kWnDxNH_vR4+w", callContext.id);
                // ShowMarkAll = False
                model.variables.showMarkAllVar = false;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_2QKGu4GMEm4ULydBx4bGg", callContext.id);
                // Execute Action: ScrollTop
                UBTConnectController.default.scrollTop$Action(".active-screen", "instant", callContext);
                // isLoading
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_Mm22_0J806UhWZgd+11ew", callContext.id);
                // isLoading = True
                model.variables.isLoadingVar = true;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jc+xCEpqIE23AKu4+icR+A", callContext.id);
                // Execute Action: RefreshUpdates
                return controller._refreshNotifications$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:S5V_IbM6IEGJ0hH_lMv1sg", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:YAJz4bPV1UOZ5xXzUvvfOg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:YAJz4bPV1UOZ5xXzUvvfOg", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect.App_Notifications.Notifications.Handler_ApplyFilters$vars", [{
            name: "Event_HasFiltersApplied",
            attrName: "event_HasFiltersAppliedInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._setupScrollThreshold$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("SetupScrollThreshold");
            callContext = controller.callContext(callContext);
            var setupScrollThresholdsJSResult = new OS.DataTypes.VariableHolder();
            var jSONSerialize_BreakpointsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
            varBag.callContext = callContext;
            varBag.setupScrollThresholdsJSResult = setupScrollThresholdsJSResult;
            varBag.jSONSerialize_BreakpointsVar = jSONSerialize_BreakpointsVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:JZrs6LIaaUO04Me4WC9Mjg:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.nXyc+9VWHk+uigsyRKJRVQ/ClientActions.JZrs6LIaaUO04Me4WC9Mjg:le20Fjjje1vj_dxsUGpQPA", "UBTConnect", "SetupScrollThreshold", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qnQz1b91fkeOc6OOf9E+uw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WMyX4qhe5EuTgiRYWXr4Hg", callContext.id);
                // JSON Serialize: JSONSerialize_Breakpoints
                jSONSerialize_BreakpointsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.breakpointsVar, true, false);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DTw3jfMu70u2zFYtsxYRDQ", callContext.id);
                setupScrollThresholdsJSResult.value = controller.safeExecuteJSNode(UBTConnect_App_Notifications_Notifications_mvc_controller_SetupScrollThreshold_SetupScrollThresholdsJS, "SetupScrollThresholds", "SetupScrollThreshold", {
                    In_ListId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("List_Notifications"), OS.DataTypes.DataTypes.Text),
                    In_UpdateItemClass: OS.DataConversion.JSNodeParamConverter.to(".ubt-update-item", OS.DataTypes.DataTypes.Text),
                    In_Breakpoints: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize_BreakpointsVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                    In_HeaderSearchClass: OS.DataConversion.JSNodeParamConverter.to(".header-top-search", OS.DataTypes.DataTypes.Text),
                    In_ScrollContainer: OS.DataConversion.JSNodeParamConverter.to(".active-screen.screen-container:has(.layout)", OS.DataTypes.DataTypes.Text),
                    Out_DestroyListener: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object),
                    Out_DestroyListenerTarget: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("UBTConnect.App_Notifications.Notifications.SetupScrollThreshold$setupScrollThresholdsJSResult"))();
                    jsNodeResult.out_DestroyListenerOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Out_DestroyListener, OS.DataTypes.DataTypes.Object);
                    jsNodeResult.out_DestroyListenerTargetOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Out_DestroyListenerTarget, OS.DataTypes.DataTypes.Object);
                    return jsNodeResult;
                }, {
                    UpdateCurrentBreakpoint: controller.clientActionProxies.updateCurrentBreakpoint$Action
                }, {});
                // Setup Scroll Objects
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gVnrjmkLqE2m_MAQm6G4IA", callContext.id);
                // EventListener = SetupScrollThresholds.Out_DestroyListener
                model.variables.eventListenerVar = setupScrollThresholdsJSResult.value.out_DestroyListenerOut;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gVnrjmkLqE2m_MAQm6G4IA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // EventListenerTarget = SetupScrollThresholds.Out_DestroyListenerTarget
                model.variables.eventListenerTargetVar = setupScrollThresholdsJSResult.value.out_DestroyListenerTargetOut;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eH7Fn42gcUaCSHIxMLPkog", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:JZrs6LIaaUO04Me4WC9Mjg", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_Notifications.Notifications.SetupScrollThreshold$setupScrollThresholdsJSResult", [{
            name: "Out_DestroyListener",
            attrName: "out_DestroyListenerOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
            }
        }, {
            name: "Out_DestroyListenerTarget",
            attrName: "out_DestroyListenerTargetOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
            }
        }]);
        Controller.prototype._handler_ScrollEnding_UpdateBreakpoint$Action = function(in_DateIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_ScrollEnding_UpdateBreakpoint");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_Notifications.Notifications.Handler_ScrollEnding_UpdateBreakpoint$vars"))());
            vars.value.in_DateInLocal = in_DateIn;
            var directory_Updates_GetListBreakpointVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.directory_Updates_GetListBreakpointVar = directory_Updates_GetListBreakpointVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:NW0T93kisUOfbwjLY9IhJw:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.nXyc+9VWHk+uigsyRKJRVQ/ClientActions.NW0T93kisUOfbwjLY9IhJw:nWUj6Xn_4WG4KtpDd0kbFw", "UBTConnect", "Handler_ScrollEnding_UpdateBreakpoint", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:h3dHiK9uPEaur_BvjVn30Q", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TJdEIU9aHUiNgxiUkqQo1A", callContext.id);
                // Execute Action: Directory_Updates_GetListBreakpoint
                directory_Updates_GetListBreakpointVar.value = UBTConnectController.default.directory_Updates_GetListBreakpoint$Action(model.variables.breakpointsVar, OS.BuiltinFunctions.textToDate(vars.value.in_DateInLocal), OS.BuiltinFunctions.currDate(), false, callContext);

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:H7Ic076S90y1UFS4g8FOuA", callContext.id);
                // CurrentBreakpoint = Directory_Updates_GetListBreakpoint.Out_ListBreakpoint
                model.variables.currentBreakpointVar = directory_Updates_GetListBreakpointVar.value.out_ListBreakpointOut;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8esrz_6Uj0+ZM+sIu4vhiw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:NW0T93kisUOfbwjLY9IhJw", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.App_Notifications.Notifications.Handler_ScrollEnding_UpdateBreakpoint$vars", [{
            name: "In_Date",
            attrName: "in_DateInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._setupScrollListener$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("SetupScrollListener");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:aGPj_rqG6E6kBfv7McdzLA:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.nXyc+9VWHk+uigsyRKJRVQ/ClientActions.aGPj_rqG6E6kBfv7McdzLA:Omd2BGgWDTxjNsE+GEJWhA", "UBTConnect", "SetupScrollListener", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SY7T+fJOhUewIg1oad14ag", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:t39pkagoxUiiTWvU2urqXw", callContext.id);
                controller.safeExecuteJSNode(UBTConnect_App_Notifications_Notifications_mvc_controller_SetupScrollListener_SetupScrollEndListenerJS, "SetupScrollEndListener", "SetupScrollListener", {
                    In_TopElementId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Notifications_ListHeader"), OS.DataTypes.DataTypes.Text)
                }, function($parameters) {}, {
                    Handler_ScrollEnding_UpdateBreakpoint: controller.clientActionProxies.handler_ScrollEnding_UpdateBreakpoint$Action
                }, {});
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Np4lH4NgM0yanhqvhB8m3w", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:aGPj_rqG6E6kBfv7McdzLA", callContext.id);
            }

        };

        Controller.prototype.handler_FilterSearchText$Action = function(textIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_FilterSearchText$Action, callContext, textIn);

        };
        Controller.prototype.destroyEventListener$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._destroyEventListener$Action, callContext);

        };
        Controller.prototype.handler_ToggleSearch$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_ToggleSearch$Action, callContext);

        };
        Controller.prototype.handler_OnChangeSearchInput$Action = function(event_CurrentStringIn, in_IsToggleSearchIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_OnChangeSearchInput$Action, callContext, event_CurrentStringIn, in_IsToggleSearchIn);

        };
        Controller.prototype.handler_MarkAsRead$Action = function(updateItemIdIn, currentPositionIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_MarkAsRead$Action, callContext, updateItemIdIn, currentPositionIn);

        };
        Controller.prototype.screenEvent_OnInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnInitialize$Action, callContext);

        };
        Controller.prototype.handler_MoreActionSheetSheetInitialized$Action = function(sheetIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_MoreActionSheetSheetInitialized$Action, callContext, sheetIdIn);

        };
        Controller.prototype.onClick_KebabButton$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_KebabButton$Action, callContext);

        };
        Controller.prototype.setMarkAllTag$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._setMarkAllTag$Action, callContext);

        };
        Controller.prototype.updateCurrentBreakpoint$Action = function(breakpointIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._updateCurrentBreakpoint$Action, callContext, breakpointIn);

        };
        Controller.prototype.setDefaultFilters$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._setDefaultFilters$Action, callContext);

        };
        Controller.prototype.setBadgeCountsToZero$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._setBadgeCountsToZero$Action, callContext);

        };
        Controller.prototype.handler_MarkAllAsRead$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_MarkAllAsRead$Action, callContext);

        };
        Controller.prototype.screenEvent_OnReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnReady$Action, callContext);

        };
        Controller.prototype.handler_FilterSheetSheetInitialized$Action = function(sheetIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_FilterSheetSheetInitialized$Action, callContext, sheetIdIn);

        };
        Controller.prototype.initializeSetting$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._initializeSetting$Action, callContext);

        };
        Controller.prototype.onAfterFetch_GetDateRanges$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onAfterFetch_GetDateRanges$Action, callContext);

        };
        Controller.prototype.refreshNotifications$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._refreshNotifications$Action, callContext);

        };
        Controller.prototype.refreshUpdatesAndFlags$Action = function(currentPositionIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._refreshUpdatesAndFlags$Action, callContext, currentPositionIn);

        };
        Controller.prototype.handler_FilterSheetLoaded$Action = function(showSubscriptionOnClickIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_FilterSheetLoaded$Action, callContext, showSubscriptionOnClickIn);

        };
        Controller.prototype.sectionHeaderEvent_UpdateListHeader$Action = function(event_BreakpointIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._sectionHeaderEvent_UpdateListHeader$Action, callContext, event_BreakpointIn);

        };
        Controller.prototype.handler_MarkAsUnread$Action = function(updateItemIdIn, currentPositionIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_MarkAsUnread$Action, callContext, updateItemIdIn, currentPositionIn);

        };
        Controller.prototype.onAfterFetch_FetchNotifications$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onAfterFetch_FetchNotifications$Action, callContext);

        };
        Controller.prototype.handler_MoreActionSheetLoaded$Action = function(showSubscriptionOnClickIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_MoreActionSheetLoaded$Action, callContext, showSubscriptionOnClickIn);

        };
        Controller.prototype.handler_OnHeaderScrolled$Action = function(event_IsHeaderScrolledIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_OnHeaderScrolled$Action, callContext, event_IsHeaderScrolledIn);

        };
        Controller.prototype.handler_ApplyFilters$Action = function(event_HasFiltersAppliedIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_ApplyFilters$Action, callContext, event_HasFiltersAppliedIn);

        };
        Controller.prototype.setupScrollThreshold$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._setupScrollThreshold$Action, callContext);

        };
        Controller.prototype.handler_ScrollEnding_UpdateBreakpoint$Action = function(in_DateIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_ScrollEnding_UpdateBreakpoint$Action, callContext, in_DateIn);

        };
        Controller.prototype.setupScrollListener$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._setupScrollListener$Action, callContext);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:jD6cc912jEmdKmf5_8Sipg:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg:C0dHS3xzkGhxAA9p12FDtg", "UBTConnect", "App_Notifications", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:nXyc+9VWHk+uigsyRKJRVQ:/NRWebFlows.jD6cc912jEmdKmf5_8Sipg/NodesShownInESpaceTree.nXyc+9VWHk+uigsyRKJRVQ:2tGp0LMjDWxcoa2Fgm8oIw", "UBTConnect", "Notifications", "NRNodes.WebScreen", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:nXyc+9VWHk+uigsyRKJRVQ", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:jD6cc912jEmdKmf5_8Sipg", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "App_Notifications/Notifications On Initialize");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "App_Notifications/Notifications On Ready");
                return controller.screenEvent_OnReady$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "App_Notifications/Notifications On Destroy");
                return controller.destroyEventListener$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onParametersChangedEventHandler = null;
        Controller.prototype.handleError = function(ex) {
            return _flow_UBTConnect_App_NotificationsController.default.handleError(ex, this.callContext());
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
define("UBTConnect.App_Notifications.Notifications.mvc$controller.DestroyEventListener.DestroyEventListenerJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        if ($parameters.In_EventListener && $parameters.In_EventListenerTarget) {
            $parameters.In_EventListenerTarget.removeEventListener('scroll', $parameters.In_EventListener);
        }
    };
});
define("UBTConnect.App_Notifications.Notifications.mvc$controller.ScreenEvent_OnInitialize.FocusCursorJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        setTimeout(function() {
            var input = document.getElementById($parameters.InputWidgetID);
            if (input) {
                input.focus();
            }
        }, 200)
    };
});
define("UBTConnect.App_Notifications.Notifications.mvc$controller.ScreenEvent_OnInitialize.IsViewRestoredFromCacheJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
    };
});
define("UBTConnect.App_Notifications.Notifications.mvc$controller.ScreenEvent_OnReady.SetStickyHeaderHeightJS", [], function() {
    return function($actions, $roles, $public) {
        function setStickyTopOffsetVariable() {
            const headerEl = document.querySelector('.header');
            const updatesHeaderEl = document.querySelector('.updates-list__header');
            const scrollContainer = document.querySelector('.active-screen.screen-container');

            if (!headerEl || !updatesHeaderEl || !scrollContainer) {
                console.warn('Could not find element(s) for offset calculation:', {
                    headerEl,
                    updatesHeaderEl,
                    scrollContainer
                });
                return;
            }

            const headerHeight = headerEl.getBoundingClientRect().height;
            const updatesHeaderHeight = updatesHeaderEl.getBoundingClientRect().height;
            const topOffsetPx = headerHeight + updatesHeaderHeight + 9;

            scrollContainer.style.setProperty('--sticky-top-offset', `${topOffsetPx}px`);

            if (window._stickyDebug) {
                console.log('Set --sticky-top-offset:', {
                    headerHeight,
                    updatesHeaderHeight,
                    topOffsetPx
                });
            }
        }

        setStickyTopOffsetVariable();
    };
});
define("UBTConnect.App_Notifications.Notifications.mvc$controller.SetupScrollThreshold.SetupScrollThresholdsJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const scrollCont = document.querySelector($parameters.In_ScrollContainer);
        const headerSearch = document.querySelector($parameters.In_HeaderSearchClass);
        const updateItem = document.getElementById($parameters.In_ListId).querySelector($parameters.In_UpdateItemClass);
        const breakpoints = JSON.parse($parameters.In_Breakpoints);

        if (scrollCont && headerSearch && updateItem && (Array.isArray(breakpoints) && breakpoints.length !== 0)) {
            const itemHeight = updateItem.offsetHeight;
            let previousBreakpoint = -1;
            let isDebouncing = {
                value: false
            };

            function getIndex(scrollTop) {
                const index = Math.floor((scrollTop - headerSearch.offsetHeight) / itemHeight);
                if (!Number.isFinite(index)) {
                    return 0;
                }
                return Math.max(0, index);
            }

            function getCurrentBreakpoint(index) {
                for (let i = breakpoints.length - 1; i >= 0; i--) {
                    if (index >= breakpoints[i].position) {
                        return breakpoints[i];
                    }
                }
                return breakpoints[0];
            }

            function onScrollThreshold() {

                const currentScroll = scrollCont.scrollTop;
                const currentBreakpoint = getCurrentBreakpoint(getIndex(currentScroll));

                if (currentBreakpoint !== previousBreakpoint) {
                    previousBreakpoint = currentBreakpoint;
                    $actions.UpdateCurrentBreakpoint(currentBreakpoint.sectionName);
                }
            }

            const processScroll = () => {
                ScrollEvent.debounceScroll(onScrollThreshold, isDebouncing);
            }

            scrollCont.addEventListener('scroll', processScroll, {
                passive: true
            });

            $parameters.Out_DestroyListener = processScroll;
            $parameters.Out_DestroyListenerTarget = scrollCont;
        }
    };
});
define("UBTConnect.App_Notifications.Notifications.mvc$controller.SetupScrollListener.SetupScrollEndListenerJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        function setupScrollEndCorrection(scrollContainerSelector, stickyHeaderId, listItemSelector) {
            if (typeof window._stickyDebug === 'undefined') {
                window._stickyDebug = false;
            }

            const scrollContainer = document.querySelector(scrollContainerSelector);
            const stickyHeaderEl = document.getElementById(stickyHeaderId);

            if (!scrollContainer || !stickyHeaderEl) {
                console.warn('Missing element(s):', {
                    scrollContainer,
                    stickyHeaderEl
                });
                return;
            }

            function resolveCurrentDate(retriesLeft = 3) {
                const headerRect = stickyHeaderEl.getBoundingClientRect();
                const boundaryY = headerRect.bottom; // the line we're checking against

                // grab all currently rendered list items
                const allItems = [...document.querySelectorAll(listItemSelector)];

                // find the item whose bounds straddle the boundary line
                // i.e. top is above (or at) the line, and bottom is below (or at) the line
                let currentItem = null;
                for (const item of allItems) {
                    const rect = item.getBoundingClientRect();
                    if (rect.top <= boundaryY && rect.bottom >= boundaryY) {
                        currentItem = item;
                        break; // there should only be one true match at a time
                    }
                }

                if (!currentItem) {
                    // virtualized list may not have committed the correct render window yet —
                    // retry on the next frame(s) instead of giving up immediately
                    if (retriesLeft > 0) {
                        if (window._stickyDebug) {
                            console.warn(`No list item currently intersects the sticky header boundary — retrying (${retriesLeft} left)`);
                        }
                        requestAnimationFrame(() => resolveCurrentDate(retriesLeft - 1));
                    } else {
                        if (window._stickyDebug) {
                            console.warn('No list item currently intersects the sticky header boundary after retries — giving up.');
                        }
                    }
                    return;
                }

                const plusDate = currentItem.getAttribute('data-plus-date');

                if (window._stickyDebug) {
                    console.log('%c SCROLLEND CORRECTION', 'color: white; background: darkorange; padding: 2px 6px; border-radius: 3px;');
                    console.log('Resolved item:', currentItem, '| data-plus-date:', plusDate);
                }

                $actions.Handler_ScrollEnding_UpdateBreakpoint(plusDate);

                if (window._stickyDebug) {
                    console.log(plusDate);
                }
            }

            scrollContainer.addEventListener('scrollend', () => resolveCurrentDate(), {
                passive: true
            });
            resolveCurrentDate(); // run once on load to establish correct initial state

            return resolveCurrentDate;
        }

        window.setTimeout(() => setupScrollEndCorrection(
            '.active-screen.screen-container',
            $parameters.In_TopElementId,
            '.updates-list__list-item' // adjust to whatever the actual list item selector is
        ), 0);
    };
});

define("UBTConnect.App_Notifications.Notifications.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "TZcvnqT2E0yqcL7m_MNdTA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.textInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "sBWfYxNEqEaoMRyaNI4IxQ": {
            getter: function(varBag, idService) {
                return varBag.destroyEventListenerJSResult.value;
            }
        },
        "lYK1oqCsyEOQcXGTc9U5rw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.event_CurrentStringInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "UiMUWbTFpUqGccsc4nLCkQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_IsToggleSearchInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "sDKJW8CUQUSLgRFxIoivSw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.updateItemIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "TNtL6edjwUGMntxVprawCw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.currentPositionInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "HHC0uDKDYUS_X6l6PWrA7A": {
            getter: function(varBag, idService) {
                return varBag.vars.value.entitiesCarousel_SwippedItemsVar;
            }
        },
        "DS2TN086kEmJK0Y84S2ElA": {
            getter: function(varBag, idService) {
                return varBag.getPreloadObjectVar.value;
            }
        },
        "farzPUKCh0GTrXdojl_BUg": {
            getter: function(varBag, idService) {
                return varBag.listIndexOfVar.value;
            }
        },
        "6GVjkg7SckGc2XXZvur3TA": {
            getter: function(varBag, idService) {
                return varBag.assignFromObjectVar.value;
            }
        },
        "zNmNyw6cjkapHKLT9geNPg": {
            getter: function(varBag, idService) {
                return varBag.focusCursorJSResult.value;
            }
        },
        "G2D90PzT4ke3OuMiHJrU1w": {
            getter: function(varBag, idService) {
                return varBag.isViewRestoredFromCacheJSResult.value;
            }
        },
        "bSZ9fLRMwUyfEEwksLrzyw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.sheetIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "TNba3L5RJkO2++4PZD4BJg": {
            getter: function(varBag, idService) {
                return varBag.bottomSheetOpenVar.value;
            }
        },
        "k9We+B+Xy0iSL6WCeZMAuA": {
            getter: function(varBag, idService) {
                return varBag.listFilter_GetUnreadVar.value;
            }
        },
        "MZgmEOLQz0a8KJPQSZlrsQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.breakpointInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "I8RjVOiuuEuHidiGlREV5g": {
            getter: function(varBag, idService) {
                return varBag.listFilterBreakpointsVar.value;
            }
        },
        "Ynh+UYi6qECIcuWXDDVrVg": {
            getter: function(varBag, idService) {
                return varBag.listFilter_TodayVar.value;
            }
        },
        "+OTb54yUdEW5XYdRxzNOJQ": {
            getter: function(varBag, idService) {
                return varBag.listFilter_OlderVar.value;
            }
        },
        "7HLo2POa+UKBQAJhC50Nig": {
            getter: function(varBag, idService) {
                return varBag.allExceptionsVar.value;
            }
        },
        "fO23MaliVUaKsvz3m8nbwQ": {
            getter: function(varBag, idService) {
                return varBag.getSkeletonList_UI_NotificationVar.value;
            }
        },
        "IUZwKvbZNUeVXIZtow6GMA": {
            getter: function(varBag, idService) {
                return varBag.setStickyHeaderHeightJSResult.value;
            }
        },
        "mn1SJhgbcEuxzHfWtyJbwg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.sheetIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "4D8NZtvUpE+E_05HdZ1BjA": {
            getter: function(varBag, idService) {
                return varBag.allExceptionsVar.value;
            }
        },
        "e8EqzbNEbkyTVtexMU89Jw": {
            getter: function(varBag, idService) {
                return varBag.app_Notifications_AugmentDateRangesVar.value;
            }
        },
        "eiSWGjDQQUSJt47aRzc_5w": {
            getter: function(varBag, idService) {
                return varBag.vars.value.currentPositionInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "Pw8V6O4t4k6emBf3ibkQNA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.showSubscriptionOnClickInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "Atm0UmzBZU+L3XACm_WA6A": {
            getter: function(varBag, idService) {
                return varBag.vars.value.event_BreakpointInLocal;
            }
        },
        "9RJkJeGrf0GTN1D1FY1hJA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.updateItemIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "N7ywv+hMC025rNO0tf726w": {
            getter: function(varBag, idService) {
                return varBag.vars.value.currentPositionInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "_m1W4TLjt0qQrpLsKjYpXA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.emptyBreakpointVar;
            }
        },
        "PJUrwunUl0a0GJnzjJQTbQ": {
            getter: function(varBag, idService) {
                return varBag.allExceptionsVar.value;
            }
        },
        "jR8B_wO+gUKAsms7F5q9gg": {
            getter: function(varBag, idService) {
                return varBag.app_Notifications_GetBreakpointsVar.value;
            }
        },
        "UHJXCySKCEqXj7Rkvh2nPQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.showSubscriptionOnClickInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "8Kl3bMrMo0yJqGKeiaMm6Q": {
            getter: function(varBag, idService) {
                return varBag.vars.value.event_IsHeaderScrolledInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "b7BmHq1a5kqtO5ouQYoEpQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.event_HasFiltersAppliedInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "WMyX4qhe5EuTgiRYWXr4Hg": {
            getter: function(varBag, idService) {
                return varBag.jSONSerialize_BreakpointsVar.value;
            }
        },
        "DTw3jfMu70u2zFYtsxYRDQ": {
            getter: function(varBag, idService) {
                return varBag.setupScrollThresholdsJSResult.value;
            }
        },
        "ZeD9YUwhO0u4TuCaXY0YCQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_DateInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "TJdEIU9aHUiNgxiUkqQo1A": {
            getter: function(varBag, idService) {
                return varBag.directory_Updates_GetListBreakpointVar.value;
            }
        },
        "t39pkagoxUiiTWvU2urqXw": {
            getter: function(varBag, idService) {
                return varBag.setupScrollEndListenerJSResult.value;
            }
        },
        "WPYH6WUF602eNTsWIob5jQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.filter_BottomSheetIdVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "Ip1+HiuwYUOnDdx855PcPA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.filter_UpdatesVar;
            }
        },
        "LzF4rJ0xg0uidvYw25_2yw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.hasFiltersAppliedVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "42ikxvzULkKyxSJO_hGHlA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.showMarkAllVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "Af0Txy2X0UOblyba9nCQiA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.dateRangesVar;
            }
        },
        "nMg4RCCcNUyLt0NW2Lwqsw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isLoadingVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "emISxdO_GkO_uWrJhB0Qrg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.bottomSheetId_IsLoadedVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "rxnhjumDFUO3R0pod5+4yQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.bottomSheetId_ShowSubscriptionVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "ePLh2Y9xBUqVdrtjqnlNPg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.breakpointsVar;
            }
        },
        "PSBJQ2JbS0SpeNNKLTyw+A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.currentBreakpointVar;
            }
        },
        "eEWQvtTyVESqjlnti28QXg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.eventListenerVar;
            },
            dataType: OS.DataTypes.DataTypes.Object
        },
        "B2ze3eW+ukGxoxzdqhI2Hw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.eventListenerTargetVar;
            },
            dataType: OS.DataTypes.DataTypes.Object
        },
        "lLip1A8oW0qI2mO9t58hmA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isHeaderScrolledVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "qiPfPXXLyEW+cRVrgh18oQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isToggleSearchVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "1Djzcx6bx0yyP7le84eNfg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.currentSearchStringVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "IIG11rUy10WrUw06pg2r0w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.badgeNumberVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "EblTTh2TnkObWettGbVJVQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.selectedHistorySearchVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "gh8cPl0CpE6Ycg8ns9MhBw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.deviceHardwareIdVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "Cgc+MSyIH0KMYzbqApv7Fw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.filter_MessageTypePrivateVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "0mmwiNRIyUOLVdF2ZymEnA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.filter_MessageTypePublicVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "VLrJDiV1_kCB6HqmxBIsXQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.orderByIsAscendingVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "VFE4Mym9fkmrX7sSe1eH_A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.maxRecordsVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "J_6kukk81kaC2rrOI7mHgg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.showWarningVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "HRGCbwNKl0SYfK4+Mf8SaA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.selectedFilter_OrderASCVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "VF2DAz0s_k+zw0qk16IvUA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.filter_OrderASCVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "Vne70qwn0E6wl4YE5FoUBA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.filter_OrderDESCVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "Upx+EueTAE6on+2Zu2Eelg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.selectedFilter_MessageTypePrivateVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "BwWT2uNYIkW8OdPOPZQIFQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.selectedFilter_MessageTypePublicVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "ORF_tv_2dkWjNCzH3sG5WA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.moreAction_BottomSheetIdVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "UPatnTxUzUSyph6SkRu4vw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.getDateRangesDataAct;
            }
        },
        "MIT7zgZzJ0urDbwBA22R5w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.fetchNotificationsDataAct;
            }
        },
        "IikFeCJWq0ms6zLHRCL9nA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Header_Title"));
                })(varBag.model, idService);
            }
        },
        "B72G2PQdm0C6Aol5soIVdA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_IsSearchToggled_Input"));
                })(varBag.model, idService);
            }
        },
        "0Lq_jHZEaUOWdtUdmbZxXw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_IsHeaderScrolled_Search"));
                })(varBag.model, idService);
            }
        },
        "H33XnlBpj0+WDCi2Lto5JQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "2AjcLHmnoUircLfxmvY5pA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Search_PostScroll"));
                })(varBag.model, idService);
            }
        },
        "3XbaN3och0KK2APRiDCsfA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Header_Right"));
                })(varBag.model, idService);
            }
        },
        "hHjyKBM2ikehrl1BEJ1h8w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_IsHeaderScrolled_Icons"));
                })(varBag.model, idService);
            }
        },
        "DGidlJuWR0uMxYLAPqizcQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_IsSearchToggled_Icon"));
                })(varBag.model, idService);
            }
        },
        "F9qovGw8X0W94Xcxwpy_Iw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Icon_Search"));
                })(varBag.model, idService);
            }
        },
        "9v6+p7xojUK7gmcT3ijKWA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Icon_Kebab"));
                })(varBag.model, idService);
            }
        },
        "5NUTDKXfIkq376PZ1UgoOA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Icon_Kebab2"));
                })(varBag.model, idService);
            }
        },
        "MU+4lnLzRUODedTLT_AYiw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Header_Input"));
                })(varBag.model, idService);
            }
        },
        "JOAAAD96SEa060Uyu7NVFw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Search_PreScroll"));
                })(varBag.model, idService);
            }
        },
        "jzO9JPqwO0S6cduID6nuDA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderContent"));
                })(varBag.model, idService);
            }
        },
        "ypaMbYR4G0GYA0GqFfkrJQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Notifications_Action"));
                })(varBag.model, idService);
            }
        },
        "mLvZGVF5wU2yzlyLG6TN3w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Notifications_ListHeader"));
                })(varBag.model, idService);
            }
        },
        "QnnSfnkg2E+f2z2kRkttFg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "daDlgQw_S024+eTBSjnETQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_HasNoNotifications"));
                })(varBag.model, idService);
            }
        },
        "hp6BoyCtPEq5COpMCcSfzg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("List_Notifications"));
                })(varBag.model, idService);
            }
        },
        "pW8y04jKvUi2AvTovApoMw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
                })(varBag.model, idService);
            }
        },
        "WiiX+cr7V0G0NdMrfN7pZQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("NotificationItem"));
                })(varBag.model, idService);
            }
        },
        "eKOGLOyUQ0mwvLaJw6xGQA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Bottom"));
                })(varBag.model, idService);
            }
        },
        "GCl4oOVXWEGAeGml3QIALw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
                })(varBag.model, idService);
            }
        },
        "u0VCbDCAP0OSX+gkdj+lJw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HideInServiceStudio_BottomSheet"));
                })(varBag.model, idService);
            }
        },
        "FRXinsq4NU6ZeteUyNVmEA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HideInServiceStudio_BottomSheet2"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});