define("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "UBTConnect_Utils.controller", "Connect2_MyBookmarks_IS.model", "Connect2_LegacyShared.model", "Connect2_Sharing_CS.model", "NavigationHandler.controller", "Connect2_LegacyShared.controller", "Connect2_MyBookmarks_MUI.controller", "Connect2_LegacyShared.Layout.Layout.mvc$model", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$model", "NavigationHandler.ScrollAnchors.ScrollAnchor.mvc$model", "Connect2_LegacyShared.Utility.Result_Item_Image.mvc$model", "Connect2_LegacyShared.Utility.ItemOptionsMenu.mvc$model", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.BookmarkNote.mvc$model", "Connect2_LegacyShared.Utility.Result_Item_Badge.mvc$model", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.BookmarkNoteAddEdit.mvc$model", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.BookmarkNoteDelete.mvc$model", "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy.mvc$model", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.NoBookmarks.mvc$model", "Connect2_LegacyShared.Reusable.MessageList_NoResults.mvc$model", "Connect2_LegacyShared.Reusable.Spinner.mvc$model", "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$model", "UBTConnect_Utils.CW_Share.ShareSheet.mvc$model", "UBTConnect_Utils.CW_Share.ShareableObject_Generic.mvc$model", "UBTConnect_Utils.controller$GetHasBookmarNote", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.controller$GetHasExtendedShare", "Connect2_MyBookmarks_IS.model$BookmarkItemRec", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_MyBookmarks_IS", "Connect2_MyBookmarks_MUI.model$BookmarkItemList", "Connect2_LegacyShared.model$BookmarkNoteRec", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_Sharing_CS.model$UI_ShareableObject_GenericRec", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_Sharing_CS", "NavigationHandler.controller$SetPreloadObject", "Connect2_MyBookmarks_MUI.referencesHealth$NavigationHandler", "Connect2_LegacyShared.model$HouseholdCarouselPreloadedItemRec", "Connect2_MyBookmarks_MUI.model$HouseholdCarouselPreloadedItemList", "Connect2_LegacyShared.model$HouseholdCarouselPreloadingRec", "Connect2_LegacyShared.controller$PutCachedMyBookmarks", "Connect2_LegacyShared.model$CommunityBusinessCarouselPreloadedItemRec", "Connect2_MyBookmarks_MUI.model$CommunityBusinessCarouselPreloadedItemList", "Connect2_LegacyShared.model$CommunityBusinessCarouselPreloadingRec", "NavigationHandler.controller$RememberFocusedScrollAnchor", "Connect2_MyBookmarks_MUI.controller$SendBookmarkedHiddenFeedbackMessage", "Connect2_MyBookmarks_MUI.controller$GetBookmarkById", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "Connect2_LegacyShared.controller$GetCachedMyBookmarks", "NavigationHandler.controller$ConfirmAction", "NavigationHandler.controller$PreventNavigation", "Connect2_MyBookmarks_MUI.controller$SendBookmarkedFeedbackMessage", "Connect2_LegacyShared.controller$Delete_LocalBookmarkByBookmarkId", "Connect2_LegacyShared.controller$AuditBookmarkSubscriptionEvent", "Connect2_MyBookmarks_IS.model$GetBookmarksByGroupResponseRec"], function(OutSystems, Connect2_MyBookmarks_MUIModel, UBTConnect_UtilsController, Connect2_MyBookmarks_ISModel, Connect2_LegacySharedModel, Connect2_Sharing_CSModel, NavigationHandlerController, Connect2_LegacySharedController, Connect2_MyBookmarks_MUIController, Connect2_LegacyShared_Layout_Layout_mvcModel, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel, NavigationHandler_ScrollAnchors_ScrollAnchor_mvcModel, Connect2_LegacyShared_Utility_Result_Item_Image_mvcModel, Connect2_LegacyShared_Utility_ItemOptionsMenu_mvcModel, Connect2_MyBookmarks_MUI_MyBookmarksFlow_BookmarkNote_mvcModel, Connect2_LegacyShared_Utility_Result_Item_Badge_mvcModel, Connect2_MyBookmarks_MUI_MyBookmarksFlow_BookmarkNoteAddEdit_mvcModel, Connect2_MyBookmarks_MUI_MyBookmarksFlow_BookmarkNoteDelete_mvcModel, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvcModel, Connect2_MyBookmarks_MUI_MyBookmarksFlow_NoBookmarks_mvcModel, Connect2_LegacyShared_Reusable_MessageList_NoResults_mvcModel, Connect2_LegacyShared_Reusable_Spinner_mvcModel, NavigationHandler_NavigationHandler_BackNavigationHandler_mvcModel, UBTConnect_Utils_CW_Share_ShareSheet_mvcModel, UBTConnect_Utils_CW_Share_ShareableObject_Generic_mvcModel) {
    var OS = OutSystems.Internal;

    var GetAllBookmarksByGroupDataActRec = (function(_super) {
        __extends(GetAllBookmarksByGroupDataActRec, _super);

        function GetAllBookmarksByGroupDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        GetAllBookmarksByGroupDataActRec.attributesToDeclare = function() {
            return [
                this.attr("GetBookmarksGroupResponse", "getBookmarksGroupResponseOut", "GetBookmarksGroupResponse", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_ISModel.GetBookmarksByGroupResponseRec());
                }, true, Connect2_MyBookmarks_ISModel.GetBookmarksByGroupResponseRec),
                this.attr("WasSearched", "wasSearchedOut", "WasSearched", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        GetAllBookmarksByGroupDataActRec.init();
        return GetAllBookmarksByGroupDataActRec;
    })(OS.Model.DataSourceRecord);

    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("BookmarkedItems", "bookmarkedItemsVar", "BookmarkedItems", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_MUIModel.BookmarkItemList());
                }, false, Connect2_MyBookmarks_MUIModel.BookmarkItemList),
                this.attr("ShowSearch", "showSearchVar", "ShowSearch", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("SearchString", "searchStringVar", "SearchString", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("SortColumn", "sortColumnVar", "SortColumn", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("IsFetchingBookmarks", "isFetchingBookmarksVar", "IsFetchingBookmarks", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("UpdatedTotal", "updatedTotalVar", "UpdatedTotal", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("WasSearchDone", "wasSearchDoneVar", "WasSearchDone", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("SearchString_SearchDone", "searchString_SearchDoneVar", "SearchString_SearchDone", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("IsFromNavigationHistory", "isFromNavigationHistoryVar", "IsFromNavigationHistory", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("EditingBookmarkNote", "editingBookmarkNoteVar", "EditingBookmarkNote", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.BookmarkNoteRec());
                }, false, Connect2_LegacySharedModel.BookmarkNoteRec),
                this.attr("IsShareOpen", "isShareOpenVar", "IsShareOpen", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("ShareableObjectId", "shareableObjectIdVar", "ShareableObjectId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("ShareableObject_Generic", "shareableObject_GenericVar", "ShareableObject_Generic", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_Sharing_CSModel.UI_ShareableObject_GenericRec());
                }, false, Connect2_Sharing_CSModel.UI_ShareableObject_GenericRec),
                this.attr("Type_ShareObjectId", "type_ShareObjectIdVar", "Type_ShareObjectId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("BookmarkGroup", "bookmarkGroupIn", "BookmarkGroup", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_bookmarkGroupInDataFetchStatus", "_bookmarkGroupInDataFetchStatus", "_bookmarkGroupInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("GetAllBookmarksByGroup", "getAllBookmarksByGroupDataAct", "getAllBookmarksByGroupDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new GetAllBookmarksByGroupDataActRec());
                }, true, GetAllBookmarksByGroupDataActRec)
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
                    Model._hasValidationWidgetsValue = (((((((((((((((Connect2_LegacyShared_Layout_Layout_mvcModel.hasValidationWidgets || Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel.hasValidationWidgets) || NavigationHandler_ScrollAnchors_ScrollAnchor_mvcModel.hasValidationWidgets) || Connect2_LegacyShared_Utility_Result_Item_Image_mvcModel.hasValidationWidgets) || Connect2_LegacyShared_Utility_ItemOptionsMenu_mvcModel.hasValidationWidgets) || Connect2_MyBookmarks_MUI_MyBookmarksFlow_BookmarkNote_mvcModel.hasValidationWidgets) || Connect2_LegacyShared_Utility_Result_Item_Badge_mvcModel.hasValidationWidgets) || Connect2_MyBookmarks_MUI_MyBookmarksFlow_BookmarkNoteAddEdit_mvcModel.hasValidationWidgets) || Connect2_MyBookmarks_MUI_MyBookmarksFlow_BookmarkNoteDelete_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvcModel.hasValidationWidgets) || Connect2_MyBookmarks_MUI_MyBookmarksFlow_NoBookmarks_mvcModel.hasValidationWidgets) || Connect2_LegacyShared_Reusable_MessageList_NoResults_mvcModel.hasValidationWidgets) || Connect2_LegacyShared_Reusable_Spinner_mvcModel.hasValidationWidgets) || NavigationHandler_NavigationHandler_BackNavigationHandler_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_Share_ShareSheet_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_Share_ShareableObject_Generic_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("BookmarkGroup" in inputs) {
                this.variables.bookmarkGroupIn = inputs.BookmarkGroup;
                if ("_bookmarkGroupInDataFetchStatus" in inputs) {
                    this.variables._bookmarkGroupInDataFetchStatus = inputs._bookmarkGroupInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "MyBookmarksFlow.ScreenBlock_BookmarkGroup");
});
define("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.controller", "UBTConnect_Utils.controller", "Connect2_MyBookmarks_IS.model", "Connect2_LegacyShared.model", "Connect2_Sharing_CS.model", "NavigationHandler.controller", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.mvc$model", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.mvc$controller", "Connect2_LegacyShared.Layout.Layout.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$view", "NavigationHandler.ScrollAnchors.ScrollAnchor.mvc$view", "Connect2_LegacyShared.Utility.Result_Item_Image.mvc$view", "Connect2_LegacyShared.Utility.ItemOptionsMenu.mvc$view", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.BookmarkNote.mvc$view", "Connect2_LegacyShared.Utility.Result_Item_Badge.mvc$view", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.BookmarkNoteAddEdit.mvc$view", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.BookmarkNoteDelete.mvc$view", "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy.mvc$view", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.NoBookmarks.mvc$view", "Connect2_LegacyShared.Reusable.MessageList_NoResults.mvc$view", "Connect2_LegacyShared.Reusable.Spinner.mvc$view", "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$view", "UBTConnect_Utils.CW_Share.ShareSheet.mvc$view", "UBTConnect_Utils.CW_Share.ShareableObject_Generic.mvc$view", "UBTConnect_Utils.controller$GetHasBookmarNote", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.controller$GetHasExtendedShare", "Connect2_MyBookmarks_IS.model$BookmarkItemRec", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_MyBookmarks_IS", "Connect2_MyBookmarks_MUI.model$BookmarkItemList", "Connect2_LegacyShared.model$BookmarkNoteRec", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_Sharing_CS.model$UI_ShareableObject_GenericRec", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_Sharing_CS", "NavigationHandler.controller$SetPreloadObject", "Connect2_MyBookmarks_MUI.referencesHealth$NavigationHandler", "Connect2_LegacyShared.model$HouseholdCarouselPreloadedItemRec", "Connect2_MyBookmarks_MUI.model$HouseholdCarouselPreloadedItemList", "Connect2_LegacyShared.model$HouseholdCarouselPreloadingRec", "Connect2_LegacyShared.controller$PutCachedMyBookmarks", "Connect2_LegacyShared.model$CommunityBusinessCarouselPreloadedItemRec", "Connect2_MyBookmarks_MUI.model$CommunityBusinessCarouselPreloadedItemList", "Connect2_LegacyShared.model$CommunityBusinessCarouselPreloadingRec", "NavigationHandler.controller$RememberFocusedScrollAnchor", "Connect2_MyBookmarks_MUI.controller$SendBookmarkedHiddenFeedbackMessage", "Connect2_MyBookmarks_MUI.controller$GetBookmarkById", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "Connect2_LegacyShared.controller$GetCachedMyBookmarks", "NavigationHandler.controller$ConfirmAction", "NavigationHandler.controller$PreventNavigation", "Connect2_MyBookmarks_MUI.controller$SendBookmarkedFeedbackMessage", "Connect2_LegacyShared.controller$Delete_LocalBookmarkByBookmarkId", "Connect2_LegacyShared.controller$AuditBookmarkSubscriptionEvent", "Connect2_MyBookmarks_IS.model$GetBookmarksByGroupResponseRec"], function(OutSystems, Connect2_MyBookmarks_MUIModel, Connect2_MyBookmarks_MUIController, UBTConnect_UtilsController, Connect2_MyBookmarks_ISModel, Connect2_LegacySharedModel, Connect2_Sharing_CSModel, NavigationHandlerController, Connect2_LegacySharedController, React, OSView, Connect2_MyBookmarks_MUI_MyBookmarksFlow_ScreenBlock_BookmarkGroup_mvc_model, Connect2_MyBookmarks_MUI_MyBookmarksFlow_ScreenBlock_BookmarkGroup_mvc_controller, Connect2_LegacyShared_Layout_Layout_mvc_view, OSWidgets, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, NavigationHandler_ScrollAnchors_ScrollAnchor_mvc_view, Connect2_LegacyShared_Utility_Result_Item_Image_mvc_view, Connect2_LegacyShared_Utility_ItemOptionsMenu_mvc_view, Connect2_MyBookmarks_MUI_MyBookmarksFlow_BookmarkNote_mvc_view, Connect2_LegacyShared_Utility_Result_Item_Badge_mvc_view, Connect2_MyBookmarks_MUI_MyBookmarksFlow_BookmarkNoteAddEdit_mvc_view, Connect2_MyBookmarks_MUI_MyBookmarksFlow_BookmarkNoteDelete_mvc_view, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view, Connect2_MyBookmarks_MUI_MyBookmarksFlow_NoBookmarks_mvc_view, Connect2_LegacyShared_Reusable_MessageList_NoResults_mvc_view, Connect2_LegacyShared_Reusable_Spinner_mvc_view, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view, UBTConnect_Utils_CW_Share_ShareSheet_mvc_view, UBTConnect_Utils_CW_Share_ShareableObject_Generic_mvc_view) {
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
        View.displayName = "MyBookmarksFlow.ScreenBlock_BookmarkGroup";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Layout_Layout_mvc_view, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, NavigationHandler_ScrollAnchors_ScrollAnchor_mvc_view, Connect2_LegacyShared_Utility_Result_Item_Image_mvc_view, Connect2_LegacyShared_Utility_ItemOptionsMenu_mvc_view, Connect2_MyBookmarks_MUI_MyBookmarksFlow_BookmarkNote_mvc_view, Connect2_LegacyShared_Utility_Result_Item_Badge_mvc_view, Connect2_MyBookmarks_MUI_MyBookmarksFlow_BookmarkNoteAddEdit_mvc_view, Connect2_MyBookmarks_MUI_MyBookmarksFlow_BookmarkNoteDelete_mvc_view, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view, Connect2_MyBookmarks_MUI_MyBookmarksFlow_NoBookmarks_mvc_view, Connect2_LegacyShared_Reusable_MessageList_NoResults_mvc_view, Connect2_LegacyShared_Reusable_Spinner_mvc_view, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view, UBTConnect_Utils_CW_Share_ShareSheet_mvc_view, UBTConnect_Utils_CW_Share_ShareableObject_Generic_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return Connect2_MyBookmarks_MUI_MyBookmarksFlow_ScreenBlock_BookmarkGroup_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_MyBookmarks_MUI_MyBookmarksFlow_ScreenBlock_BookmarkGroup_mvc_controller;
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
                                MenuAction: Connect2_MyBookmarks_MUIModel.staticEntities.menuAction.back
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
                        return [$if(true, false, this, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                style: "text-align-center",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "3"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Expression, {
                                value: ("My " + model.variables.bookmarkGroupIn),
                                _idProps: {
                                    service: idService,
                                    uuid: "4"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._bookmarkGroupInDataFetchStatus)
                            }))];
                        }, function() {
                            return [];
                        })];
                    }),
                    headerRight: new PlaceholderContent(function() {
                        return [$if(true, false, this, function() {
                            return [];
                        }, function() {
                            return [];
                        })];
                    }),
                    headerContent: PlaceholderContent.Empty,
                    content: new PlaceholderContent(function() {
                        return [$if((!(model.variables.isFetchingBookmarksVar) || model.variables.isFromNavigationHistoryVar), false, this, function() {
                            return [$if(!(model.variables.bookmarkedItemsVar.isEmpty), false, this, function() {
                                return [React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    style: "bookmark-list-cont",
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "5"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, $if((model.variables.bookmarkGroupIn === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_Group.contacts), false, this, function() {
                                    return [React.createElement(OSWidgets.List, {
                                        animateItems: true,
                                        extendedEvents: {
                                            "dx-preload-list-source": function() {
                                                var eventHandlerContext = callContext.clone();
                                                return OS.Flow.tryFinally(function() {
                                                    var varBag = {};
                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyBookmarksFlow/ScreenBlock_BookmarkGroup/List_Contacts dx-preload-list-source");
                                                    controller.preloadListSource_Bookmarks$Action(controller.callContext(eventHandlerContext));
                                                }, function() {
                                                    controller.popDebuggerContext(eventHandlerContext);
                                                });

                                                ;
                                            }
                                        },
                                        extendedProperties: {
                                            "disable-virtualization": "True"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mode: /*Default*/ 0,
                                        source: model.variables.bookmarkedItemsVar,
                                        style: "list list-group",
                                        tag: "div",
                                        _idProps: {
                                            service: idService,
                                            name: "List_Contacts"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                return [React.createElement(OSWidgets.Container, {
                                                    align: /*Default*/ 0,
                                                    animate: false,
                                                    extendedProperties: {
                                                        style: model.getCachedValue(idService.getId("lSSg85zJ7Ue3ljr6oL9OAQ.style"), function() {
                                                            return (((model.variables.bookmarkedItemsVar.getCurrentRowNumber(callContext.iterationContext) < (model.variables.bookmarkedItemsVar.length - 1))) ? ("margin-bottom: var(--space-base);") : (""));
                                                        }, function() {
                                                            return model.variables.bookmarkedItemsVar.getCurrentRowNumber(callContext.iterationContext);
                                                        }, function() {
                                                            return model.variables.bookmarkedItemsVar.length;
                                                        })
                                                    },
                                                    style: "bookmark-list-item",
                                                    visible: true,
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "7"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    _dependencies: [asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrentRowNumber(callContext.iterationContext)), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).noteAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).recordDisabledAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).recordNotAvailableAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).titleAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).idAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).imageAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.shareObjectTypeIdAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.isDeceasedAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.countryNameAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.localityNameAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.childrenNamesAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).objectIdAttr)]
                                                }, React.createElement(NavigationHandler_ScrollAnchors_ScrollAnchor_mvc_view, {
                                                    inputs: {
                                                        Id: model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).objectIdAttr
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
                                                        uuid: "8",
                                                        alias: "3"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    _dependencies: []
                                                }), React.createElement(Connect2_LegacyShared_Utility_Result_Item_Image_mvc_view, {
                                                    inputs: {
                                                        In_HasBorder: false,
                                                        In_ShowDescription: ((model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.childrenNamesAttr) !== ("")),
                                                        In_ResultType: Connect2_MyBookmarks_MUIModel.staticEntities.resultListType.household,
                                                        In_SignedURL: model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).imageAttr,
                                                        In_ShowTag: (((model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.localityNameAttr) !== ("")) || ((model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.countryNameAttr) !== (""))),
                                                        ItemHeight: "66px",
                                                        In_HasAction: true,
                                                        ShowPlaceholderForImage: (model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.isDeceasedAttr && (model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).imageAttr === ""))
                                                    },
                                                    events: {
                                                        _handleError: function(ex) {
                                                            controller.handleError(ex);
                                                        },
                                                        onClick_Item$Action: function() {
                                                            return Promise.resolve().then(function() {
                                                                var eventHandlerContext = callContext.clone();
                                                                return OS.Flow.tryFinally(function() {
                                                                    var varBag = {};
                                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Utility/Result_Item_Image OnClick_Item");
                                                                    return controller.onClick_BookmarkedItem$Action(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).idAttr, model.variables.bookmarkedItemsVar.getCurrentRowNumber(callContext.iterationContext), idService.ownerService.getId("List_Contacts"), controller.callContext(eventHandlerContext));
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
                                                        name: "Household_List_Item",
                                                        alias: "4"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    placeholders: {
                                                        imagePlaceholder: new PlaceholderContent(function() {
                                                            return [React.createElement(OSWidgets.Image, {
                                                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.PlaceholderImage_Household.png"),
                                                                style: "bookmark-list-item__image-placeholder",
                                                                type: /*Static*/ 0,
                                                                _idProps: {
                                                                    service: idService,
                                                                    uuid: "10"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider
                                                            })];
                                                        }),
                                                        title_Placeholder: new PlaceholderContent(function() {
                                                            return [React.createElement(OSWidgets.Expression, {
                                                                style: "font-size-0-9em bold",
                                                                value: model.getCachedValue(idService.getId("Household_Title.Value"), function() {
                                                                    return ((((model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).titleAttr) !== (""))) ? (model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).titleAttr) : ("Information not available"));
                                                                }, function() {
                                                                    return model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).titleAttr;
                                                                }),
                                                                _idProps: {
                                                                    service: idService,
                                                                    name: "Household_Title"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider
                                                            })];
                                                        }),
                                                        description_Placeholder: new PlaceholderContent(function() {
                                                            return [React.createElement(OSWidgets.Expression, {
                                                                style: "country-household-count household-locality-no-paddingleft",
                                                                value: model.getCachedValue(idService.getId("Household_Description.Value"), function() {
                                                                    return ((((model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.childrenNamesAttr) !== (""))) ? (model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.childrenNamesAttr) : (""));
                                                                }, function() {
                                                                    return model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.childrenNamesAttr;
                                                                }),
                                                                _idProps: {
                                                                    service: idService,
                                                                    name: "Household_Description"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider
                                                            })];
                                                        }),
                                                        tag_Placeholder: new PlaceholderContent(function() {
                                                            return [React.createElement(OSWidgets.Expression, {
                                                                extendedProperties: {
                                                                    style: "color: #000; font-size: 0.8em;"
                                                                },
                                                                style: "font-size-0-75em text-align-left padding-x-xs padding-y-xs border-radius-soft background-neutral-2 text-neutral-6",
                                                                value: model.getCachedValue(idService.getId("Household_Tag.Value"), function() {
                                                                    return (((((model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.localityNameAttr) !== (""))) ? (model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.localityNameAttr) : ("")) + ((((model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.countryNameAttr) !== (""))) ? ((((((model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.localityNameAttr) !== (""))) ? (", ") : ("")) + model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.countryNameAttr)) : ("")));
                                                                }, function() {
                                                                    return model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.localityNameAttr;
                                                                }, function() {
                                                                    return model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.countryNameAttr;
                                                                }),
                                                                _idProps: {
                                                                    service: idService,
                                                                    name: "Household_Tag"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider
                                                            })];
                                                        }),
                                                        result_Item_Placeholder: new PlaceholderContent(function() {
                                                            return [React.createElement(Connect2_LegacyShared_Utility_ItemOptionsMenu_mvc_view, {
                                                                inputs: {
                                                                    IsShareImplemented: (!(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.isDeceasedAttr) && !(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).recordNotAvailableAttr)),
                                                                    In_IsBookmarked: true
                                                                },
                                                                events: {
                                                                    _handleError: function(ex) {
                                                                        controller.handleError(ex);
                                                                    },
                                                                    onShareToConnect$Action: function() {
                                                                        return Promise.resolve().then(function() {
                                                                            var eventHandlerContext = callContext.clone();
                                                                            return OS.Flow.tryFinally(function() {
                                                                                var varBag = {};
                                                                                controller.pushDebuggerContext(eventHandlerContext);

                                                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Utility/ItemOptionsMenu OnShareToConnect");
                                                                                return controller.onHandle_ShareItem$Action(false, model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.shareObjectTypeIdAttr, OS.BuiltinFunctions.textToLongInteger(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).objectIdAttr), model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).recordDisabledAttr, Connect2_MyBookmarks_MUIModel.staticEntities.connect_Entity.household, controller.callContext(eventHandlerContext));
                                                                            }, function() {
                                                                                controller.popDebuggerContext(eventHandlerContext);
                                                                            });
                                                                        });;
                                                                    },
                                                                    onShareToOthers$Action: function() {
                                                                        return Promise.resolve().then(function() {
                                                                            var eventHandlerContext = callContext.clone();
                                                                            return OS.Flow.tryFinally(function() {
                                                                                var varBag = {};
                                                                                controller.pushDebuggerContext(eventHandlerContext);

                                                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Utility/ItemOptionsMenu OnShareToOthers");
                                                                                return controller.onHandle_ShareItem$Action(true, model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.shareObjectTypeIdAttr, OS.BuiltinFunctions.textToLongInteger(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).objectIdAttr), model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).recordDisabledAttr, Connect2_MyBookmarks_MUIModel.staticEntities.connect_Entity.household, controller.callContext(eventHandlerContext));
                                                                            }, function() {
                                                                                controller.popDebuggerContext(eventHandlerContext);
                                                                            });
                                                                        });;
                                                                    },
                                                                    bookmarkToggle$Action: function(isItemBookmarkedIn) {
                                                                        return Promise.resolve().then(function() {
                                                                            var eventHandlerContext = callContext.clone();
                                                                            return OS.Flow.tryFinally(function() {
                                                                                var varBag = {};
                                                                                controller.pushDebuggerContext(eventHandlerContext);

                                                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Utility/ItemOptionsMenu BookmarkToggle");
                                                                                return controller.onHandle_BookmarkToggle$Action(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).idAttr, model.variables.bookmarkedItemsVar.getCurrentRowNumber(callContext.iterationContext), controller.callContext(eventHandlerContext));
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
                                                                    uuid: "14",
                                                                    alias: "5"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                placeholders: {
                                                                    anchor_Placeholder: new PlaceholderContent(function() {
                                                                        return [React.createElement(OSWidgets.Icon, {
                                                                            icon: "ellipsis-h",
                                                                            iconSize: /*FontSize*/ 0,
                                                                            style: "icon padding-x-base",
                                                                            visible: true,
                                                                            _idProps: {
                                                                                service: idService,
                                                                                uuid: "15"
                                                                            },
                                                                            _widgetRecordProvider: widgetsRecordProvider
                                                                        })];
                                                                    })
                                                                },
                                                                _dependencies: []
                                                            })];
                                                        }),
                                                        bookmarkNote: new PlaceholderContent(function() {
                                                            return [$if(OutSystemsDebugger.handleFunctionCall(function() {
                                                                return UBTConnect_UtilsController.default.getHasBookmarNote$Action(callContext).hasBookmarkNoteAccessOut;
                                                            }, OS.DataTypes.DataTypes.Boolean, callContext.id), false, this, function() {
                                                                return [React.createElement(Connect2_MyBookmarks_MUI_MyBookmarksFlow_BookmarkNote_mvc_view, {
                                                                    inputs: {
                                                                        BookmarkId: model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).idAttr,
                                                                        In_Note: model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).noteAttr
                                                                    },
                                                                    events: {
                                                                        _handleError: function(ex) {
                                                                            controller.handleError(ex);
                                                                        },
                                                                        editNote$Action: function(in_BookmarkIn) {
                                                                            return Promise.resolve().then(function() {
                                                                                var eventHandlerContext = callContext.clone();
                                                                                return OS.Flow.tryFinally(function() {
                                                                                    var varBag = {};
                                                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyBookmarksFlow/BookmarkNote EditNote");
                                                                                    return controller.handler_EditNote$Action(in_BookmarkIn, model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).recordDisabledAttr, OS.BuiltinFunctions.textToLongInteger(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).objectIdAttr), controller.callContext(eventHandlerContext));
                                                                                }, function() {
                                                                                    controller.popDebuggerContext(eventHandlerContext);
                                                                                });
                                                                            });;
                                                                        },
                                                                        deleteNote$Action: function(bookmarkIdIn) {
                                                                            return Promise.resolve().then(function() {
                                                                                var eventHandlerContext = callContext.clone();
                                                                                return OS.Flow.tryFinally(function() {
                                                                                    var varBag = {};
                                                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyBookmarksFlow/BookmarkNote DeleteNote");
                                                                                    return controller.handler_DeleteNote$Action(bookmarkIdIn, model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).recordDisabledAttr, OS.BuiltinFunctions.textToLongInteger(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).objectIdAttr), controller.callContext(eventHandlerContext));
                                                                                }, function() {
                                                                                    controller.popDebuggerContext(eventHandlerContext);
                                                                                });
                                                                            });;
                                                                        },
                                                                        addNote$Action: function(bookmarkIdIn) {
                                                                            return Promise.resolve().then(function() {
                                                                                var eventHandlerContext = callContext.clone();
                                                                                return OS.Flow.tryFinally(function() {
                                                                                    var varBag = {};
                                                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyBookmarksFlow/BookmarkNote AddNote");
                                                                                    return controller.handler_AddNote$Action(bookmarkIdIn, model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).recordDisabledAttr, OS.BuiltinFunctions.textToLongInteger(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).objectIdAttr), controller.callContext(eventHandlerContext));
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
                                                                        uuid: "16",
                                                                        alias: "6"
                                                                    },
                                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                                    _dependencies: []
                                                                })];
                                                            }, function() {
                                                                return [];
                                                            })];
                                                        })
                                                    },
                                                    _dependencies: [asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrentRowNumber(callContext.iterationContext)), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).noteAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).idAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).recordDisabledAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).objectIdAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).recordNotAvailableAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.shareObjectTypeIdAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.isDeceasedAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.countryNameAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.localityNameAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.childrenNamesAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).titleAttr)]
                                                }))];
                                            }, callContext, idService, "1")
                                        },
                                        _dependencies: []
                                    })];
                                }, function() {
                                    return [];
                                }), $if((model.variables.bookmarkGroupIn === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_Group.locations), false, this, function() {
                                    return [React.createElement(OSWidgets.List, {
                                        animateItems: true,
                                        extendedEvents: {
                                            "dx-preload-list-source": function() {
                                                var eventHandlerContext = callContext.clone();
                                                return OS.Flow.tryFinally(function() {
                                                    var varBag = {};
                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyBookmarksFlow/ScreenBlock_BookmarkGroup/List_Locations dx-preload-list-source");
                                                    controller.preloadListSource_Bookmarks$Action(controller.callContext(eventHandlerContext));
                                                }, function() {
                                                    controller.popDebuggerContext(eventHandlerContext);
                                                });

                                                ;
                                            }
                                        },
                                        extendedProperties: {
                                            "disable-virtualization": "True"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mode: /*Default*/ 0,
                                        source: model.variables.bookmarkedItemsVar,
                                        style: "list list-group",
                                        tag: "div",
                                        _idProps: {
                                            service: idService,
                                            name: "List_Locations"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                return [React.createElement(OSWidgets.Container, {
                                                    align: /*Default*/ 0,
                                                    animate: false,
                                                    visible: true,
                                                    _idProps: {
                                                        service: idService,
                                                        name: "BookmarkList_Locations_Container"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    _dependencies: [asPrimitiveValue(model.variables.bookmarkedItemsVar.length), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrentRowNumber(callContext.iterationContext)), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).titleAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).imageAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).recordDisabledAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).noteAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).idAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.householdCountAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.isMainHallAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.localityNameAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.countryNameAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).objectTypeAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).objectIdAttr)]
                                                }, React.createElement(NavigationHandler_ScrollAnchors_ScrollAnchor_mvc_view, {
                                                    inputs: {
                                                        Id: model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).objectIdAttr
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
                                                        uuid: "19",
                                                        alias: "7"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    _dependencies: []
                                                }), $if((model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).objectTypeAttr === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_ObjectType.locality), false, this, function() {
                                                    return [React.createElement(OSWidgets.Container, {
                                                        align: /*Default*/ 0,
                                                        animate: false,
                                                        extendedProperties: {
                                                            style: model.getCachedValue(idService.getId("7RgZDSnEAk60DK_6PdmXZA.style"), function() {
                                                                return (((model.variables.bookmarkedItemsVar.getCurrentRowNumber(callContext.iterationContext) < (model.variables.bookmarkedItemsVar.length - 1))) ? ("margin-bottom: var(--space-base);") : (""));
                                                            }, function() {
                                                                return model.variables.bookmarkedItemsVar.getCurrentRowNumber(callContext.iterationContext);
                                                            }, function() {
                                                                return model.variables.bookmarkedItemsVar.length;
                                                            })
                                                        },
                                                        style: "bookmark-list-item",
                                                        visible: true,
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "20"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider
                                                    }, React.createElement(Connect2_LegacyShared_Utility_Result_Item_Badge_mvc_view, {
                                                        inputs: {
                                                            In_HasAction: true,
                                                            In_ShowTag: ((model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.countryNameAttr) !== ("")),
                                                            In_HasBorder: false,
                                                            ItemHeight: "55px",
                                                            In_BadgeText: model.getCachedValue(idService.getId("LocalitiesList_Item.In_BadgeText"), function() {
                                                                return OS.BuiltinFunctions.substr(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.localityNameAttr, 0, 1);
                                                            }, function() {
                                                                return model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.localityNameAttr;
                                                            }),
                                                            In_Diameter: 40,
                                                            In_BadgeBackgroundColor: "#36c9c5",
                                                            In_ShowDescription: false
                                                        },
                                                        events: {
                                                            _handleError: function(ex) {
                                                                controller.handleError(ex);
                                                            },
                                                            onClick_Item$Action: function() {
                                                                return Promise.resolve().then(function() {
                                                                    var eventHandlerContext = callContext.clone();
                                                                    return OS.Flow.tryFinally(function() {
                                                                        var varBag = {};
                                                                        controller.pushDebuggerContext(eventHandlerContext);

                                                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Utility/Result_Item_Badge OnClick_Item");
                                                                        return controller.onClick_BookmarkedItem$Action(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).idAttr, model.variables.bookmarkedItemsVar.getCurrentRowNumber(callContext.iterationContext), idService.ownerService.getId("List_Locations"), controller.callContext(eventHandlerContext));
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
                                                            name: "LocalitiesList_Item",
                                                            alias: "8"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        placeholders: {
                                                            title_Placeholder: new PlaceholderContent(function() {
                                                                return [React.createElement(OSWidgets.Expression, {
                                                                    style: "font-size-0-9em bold",
                                                                    value: model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.localityNameAttr,
                                                                    _idProps: {
                                                                        service: idService,
                                                                        name: "Locality_Title"
                                                                    },
                                                                    _widgetRecordProvider: widgetsRecordProvider
                                                                })];
                                                            }),
                                                            description_Placeholder: PlaceholderContent.Empty,
                                                            tag_Placeholder: new PlaceholderContent(function() {
                                                                return [React.createElement(OSWidgets.Expression, {
                                                                    style: "font-size-0-75em text-align-left padding-x-xs padding-y-xs border-radius-soft background-neutral-2 text-neutral-6",
                                                                    value: model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.countryNameAttr,
                                                                    _idProps: {
                                                                        service: idService,
                                                                        name: "Locality_Tag"
                                                                    },
                                                                    _widgetRecordProvider: widgetsRecordProvider
                                                                })];
                                                            }),
                                                            result_Item_Placeholder: new PlaceholderContent(function() {
                                                                return [React.createElement(Connect2_LegacyShared_Utility_ItemOptionsMenu_mvc_view, {
                                                                    inputs: {
                                                                        In_IsBookmarked: true
                                                                    },
                                                                    events: {
                                                                        _handleError: function(ex) {
                                                                            controller.handleError(ex);
                                                                        },
                                                                        bookmarkToggle$Action: function(isItemBookmarkedIn) {
                                                                            return Promise.resolve().then(function() {
                                                                                var eventHandlerContext = callContext.clone();
                                                                                return OS.Flow.tryFinally(function() {
                                                                                    var varBag = {};
                                                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Utility/ItemOptionsMenu BookmarkToggle");
                                                                                    return controller.onHandle_BookmarkToggle$Action(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).idAttr, model.variables.bookmarkedItemsVar.getCurrentRowNumber(callContext.iterationContext), controller.callContext(eventHandlerContext));
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
                                                                        uuid: "24",
                                                                        alias: "9"
                                                                    },
                                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                                    placeholders: {
                                                                        anchor_Placeholder: new PlaceholderContent(function() {
                                                                            return [React.createElement(OSWidgets.Icon, {
                                                                                icon: "ellipsis-h",
                                                                                iconSize: /*FontSize*/ 0,
                                                                                style: "icon padding-x-base",
                                                                                visible: true,
                                                                                _idProps: {
                                                                                    service: idService,
                                                                                    uuid: "25"
                                                                                },
                                                                                _widgetRecordProvider: widgetsRecordProvider
                                                                            })];
                                                                        })
                                                                    },
                                                                    _dependencies: []
                                                                })];
                                                            }),
                                                            bookmarkNote: new PlaceholderContent(function() {
                                                                return [$if(OutSystemsDebugger.handleFunctionCall(function() {
                                                                    return UBTConnect_UtilsController.default.getHasBookmarNote$Action(callContext).hasBookmarkNoteAccessOut;
                                                                }, OS.DataTypes.DataTypes.Boolean, callContext.id), false, this, function() {
                                                                    return [React.createElement(Connect2_MyBookmarks_MUI_MyBookmarksFlow_BookmarkNote_mvc_view, {
                                                                        inputs: {
                                                                            In_Note: model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).noteAttr,
                                                                            BookmarkId: model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).idAttr
                                                                        },
                                                                        events: {
                                                                            _handleError: function(ex) {
                                                                                controller.handleError(ex);
                                                                            },
                                                                            deleteNote$Action: function(bookmarkIdIn) {
                                                                                return Promise.resolve().then(function() {
                                                                                    var eventHandlerContext = callContext.clone();
                                                                                    return OS.Flow.tryFinally(function() {
                                                                                        var varBag = {};
                                                                                        controller.pushDebuggerContext(eventHandlerContext);

                                                                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyBookmarksFlow/BookmarkNote DeleteNote");
                                                                                        return controller.handler_DeleteNote$Action(bookmarkIdIn, model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).recordDisabledAttr, OS.BuiltinFunctions.textToLongInteger(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).objectIdAttr), controller.callContext(eventHandlerContext));
                                                                                    }, function() {
                                                                                        controller.popDebuggerContext(eventHandlerContext);
                                                                                    });
                                                                                });;
                                                                            },
                                                                            addNote$Action: function(bookmarkIdIn) {
                                                                                return Promise.resolve().then(function() {
                                                                                    var eventHandlerContext = callContext.clone();
                                                                                    return OS.Flow.tryFinally(function() {
                                                                                        var varBag = {};
                                                                                        controller.pushDebuggerContext(eventHandlerContext);

                                                                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyBookmarksFlow/BookmarkNote AddNote");
                                                                                        return controller.handler_AddNote$Action(bookmarkIdIn, model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).recordDisabledAttr, OS.BuiltinFunctions.textToLongInteger(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).objectIdAttr), controller.callContext(eventHandlerContext));
                                                                                    }, function() {
                                                                                        controller.popDebuggerContext(eventHandlerContext);
                                                                                    });
                                                                                });;
                                                                            },
                                                                            editNote$Action: function(in_BookmarkIn) {
                                                                                return Promise.resolve().then(function() {
                                                                                    var eventHandlerContext = callContext.clone();
                                                                                    return OS.Flow.tryFinally(function() {
                                                                                        var varBag = {};
                                                                                        controller.pushDebuggerContext(eventHandlerContext);

                                                                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyBookmarksFlow/BookmarkNote EditNote");
                                                                                        return controller.handler_EditNote$Action(in_BookmarkIn, model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).recordDisabledAttr, OS.BuiltinFunctions.textToLongInteger(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).objectIdAttr), controller.callContext(eventHandlerContext));
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
                                                                            uuid: "26",
                                                                            alias: "10"
                                                                        },
                                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                                        _dependencies: []
                                                                    })];
                                                                }, function() {
                                                                    return [];
                                                                })];
                                                            })
                                                        },
                                                        _dependencies: [asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrentRowNumber(callContext.iterationContext)), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).objectIdAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).recordDisabledAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).noteAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).idAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.countryNameAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.localityNameAttr)]
                                                    }))];
                                                }, function() {
                                                    return [$if((model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).objectTypeAttr === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_ObjectType.subdivision), false, this, function() {
                                                        return [React.createElement(OSWidgets.Container, {
                                                            align: /*Default*/ 0,
                                                            animate: false,
                                                            extendedProperties: {
                                                                style: model.getCachedValue(idService.getId("FER_km6jIEmi3VXrEWyndw.style"), function() {
                                                                    return (((model.variables.bookmarkedItemsVar.getCurrentRowNumber(callContext.iterationContext) < (model.variables.bookmarkedItemsVar.length - 1))) ? ("margin-bottom: var(--space-base);") : (""));
                                                                }, function() {
                                                                    return model.variables.bookmarkedItemsVar.getCurrentRowNumber(callContext.iterationContext);
                                                                }, function() {
                                                                    return model.variables.bookmarkedItemsVar.length;
                                                                })
                                                            },
                                                            style: "bookmark-list-item",
                                                            visible: true,
                                                            _idProps: {
                                                                service: idService,
                                                                uuid: "27"
                                                            },
                                                            _widgetRecordProvider: widgetsRecordProvider
                                                        }, React.createElement(Connect2_LegacyShared_Utility_Result_Item_Image_mvc_view, {
                                                            inputs: {
                                                                In_HasAction: true,
                                                                In_ShowTag: true,
                                                                In_SignedURL: model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).imageAttr,
                                                                In_ShowDescription: false,
                                                                In_ResultType: Connect2_MyBookmarks_MUIModel.staticEntities.resultListType.subdivision,
                                                                In_HasBorder: false,
                                                                ItemHeight: "66px"
                                                            },
                                                            events: {
                                                                _handleError: function(ex) {
                                                                    controller.handleError(ex);
                                                                },
                                                                onClick_Item$Action: function() {
                                                                    return Promise.resolve().then(function() {
                                                                        var eventHandlerContext = callContext.clone();
                                                                        return OS.Flow.tryFinally(function() {
                                                                            var varBag = {};
                                                                            controller.pushDebuggerContext(eventHandlerContext);

                                                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Utility/Result_Item_Image OnClick_Item");
                                                                            return controller.onClick_BookmarkedItem$Action(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).idAttr, model.variables.bookmarkedItemsVar.getCurrentRowNumber(callContext.iterationContext), idService.ownerService.getId("List_Locations"), controller.callContext(eventHandlerContext));
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
                                                                name: "Subdivisions_List_Item",
                                                                alias: "11"
                                                            },
                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                            placeholders: {
                                                                imagePlaceholder: PlaceholderContent.Empty,
                                                                title_Placeholder: new PlaceholderContent(function() {
                                                                    return [React.createElement(OSWidgets.Expression, {
                                                                        extendedProperties: {
                                                                            style: model.getCachedValue(idService.getId("Subdivision_Title.style"), function() {
                                                                                return (("color: " + ((model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.isMainHallAttr) ? ("var(--color-primary)") : ("var(--color-neutral-10)"))) + ";");
                                                                            }, function() {
                                                                                return model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.isMainHallAttr;
                                                                            })
                                                                        },
                                                                        style: "font-size-0-9em bold",
                                                                        value: model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).titleAttr,
                                                                        _idProps: {
                                                                            service: idService,
                                                                            name: "Subdivision_Title"
                                                                        },
                                                                        _widgetRecordProvider: widgetsRecordProvider
                                                                    })];
                                                                }),
                                                                description_Placeholder: PlaceholderContent.Empty,
                                                                tag_Placeholder: new PlaceholderContent(function() {
                                                                    return [React.createElement(OSWidgets.Expression, {
                                                                        extendedProperties: {
                                                                            style: model.getCachedValue(idService.getId("Subdivision_Tag.Style"), function() {
                                                                                return (((((("background-color: " + ((model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.isMainHallAttr) ? ("var(--color-primary)") : ("var(--color-neutral-2)"))) + ";") + " ") + "color: ") + ((model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.isMainHallAttr) ? ("var(--color-neutral-2)") : ("var(--color-neutral-6)"))) + ";");
                                                                            }, function() {
                                                                                return model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.isMainHallAttr;
                                                                            })
                                                                        },
                                                                        style: "font-size-0-75em text-align-left padding-x-xs padding-y-xs border-radius-soft",
                                                                        value: model.getCachedValue(idService.getId("Subdivision_Tag.Value"), function() {
                                                                            return ((model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.householdCountAttr.equals(OS.BuiltinFunctions.integerToLongInteger(1))) ? ((OS.BuiltinFunctions.longIntegerToText(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.householdCountAttr) + " Household")) : ((OS.BuiltinFunctions.longIntegerToText(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.householdCountAttr) + " Households")));
                                                                        }, function() {
                                                                            return model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.householdCountAttr;
                                                                        }),
                                                                        _idProps: {
                                                                            service: idService,
                                                                            name: "Subdivision_Tag"
                                                                        },
                                                                        _widgetRecordProvider: widgetsRecordProvider
                                                                    })];
                                                                }),
                                                                result_Item_Placeholder: new PlaceholderContent(function() {
                                                                    return [React.createElement(Connect2_LegacyShared_Utility_ItemOptionsMenu_mvc_view, {
                                                                        inputs: {
                                                                            In_IsBookmarked: true,
                                                                            IsShareImplemented: model.getCachedValue(idService.getId("DU+kYA28rEumc4q4PdaX8g.IsShareImplemented"), function() {
                                                                                return OutSystemsDebugger.handleFunctionCall(function() {
                                                                                    return UBTConnect_UtilsController.default.getHasExtendedShare$Action(callContext).hasExtendedShareOut;
                                                                                }, OS.DataTypes.DataTypes.Boolean, callContext.id);
                                                                            })
                                                                        },
                                                                        events: {
                                                                            _handleError: function(ex) {
                                                                                controller.handleError(ex);
                                                                            },
                                                                            bookmarkToggle$Action: function(isItemBookmarkedIn) {
                                                                                return Promise.resolve().then(function() {
                                                                                    var eventHandlerContext = callContext.clone();
                                                                                    return OS.Flow.tryFinally(function() {
                                                                                        var varBag = {};
                                                                                        controller.pushDebuggerContext(eventHandlerContext);

                                                                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Utility/ItemOptionsMenu BookmarkToggle");
                                                                                        return controller.onHandle_BookmarkToggle$Action(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).idAttr, model.variables.bookmarkedItemsVar.getCurrentRowNumber(callContext.iterationContext), controller.callContext(eventHandlerContext));
                                                                                    }, function() {
                                                                                        controller.popDebuggerContext(eventHandlerContext);
                                                                                    });
                                                                                });;
                                                                            },
                                                                            onShareToConnect$Action: function() {
                                                                                return Promise.resolve().then(function() {
                                                                                    var eventHandlerContext = callContext.clone();
                                                                                    return OS.Flow.tryFinally(function() {
                                                                                        var varBag = {};
                                                                                        controller.pushDebuggerContext(eventHandlerContext);

                                                                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Utility/ItemOptionsMenu OnShareToConnect");
                                                                                        return controller.onHandle_ShareItem$Action(false, Connect2_MyBookmarks_MUIModel.staticEntities.type_ShareObject.supperMeeting, model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).idAttr, false, Connect2_MyBookmarks_MUIModel.staticEntities.connect_Entity.supperMeetings_aka_Subdivisions, controller.callContext(eventHandlerContext));
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
                                                                            uuid: "31",
                                                                            alias: "12"
                                                                        },
                                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                                        placeholders: {
                                                                            anchor_Placeholder: new PlaceholderContent(function() {
                                                                                return [React.createElement(OSWidgets.Icon, {
                                                                                    icon: "ellipsis-h",
                                                                                    iconSize: /*FontSize*/ 0,
                                                                                    style: "icon padding-x-base",
                                                                                    visible: true,
                                                                                    _idProps: {
                                                                                        service: idService,
                                                                                        uuid: "32"
                                                                                    },
                                                                                    _widgetRecordProvider: widgetsRecordProvider
                                                                                })];
                                                                            })
                                                                        },
                                                                        _dependencies: []
                                                                    })];
                                                                }),
                                                                bookmarkNote: new PlaceholderContent(function() {
                                                                    return [$if(OutSystemsDebugger.handleFunctionCall(function() {
                                                                        return UBTConnect_UtilsController.default.getHasBookmarNote$Action(callContext).hasBookmarkNoteAccessOut;
                                                                    }, OS.DataTypes.DataTypes.Boolean, callContext.id), false, this, function() {
                                                                        return [React.createElement(Connect2_MyBookmarks_MUI_MyBookmarksFlow_BookmarkNote_mvc_view, {
                                                                            inputs: {
                                                                                BookmarkId: model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).idAttr,
                                                                                In_Note: model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).noteAttr
                                                                            },
                                                                            events: {
                                                                                _handleError: function(ex) {
                                                                                    controller.handleError(ex);
                                                                                },
                                                                                addNote$Action: function(bookmarkIdIn) {
                                                                                    return Promise.resolve().then(function() {
                                                                                        var eventHandlerContext = callContext.clone();
                                                                                        return OS.Flow.tryFinally(function() {
                                                                                            var varBag = {};
                                                                                            controller.pushDebuggerContext(eventHandlerContext);

                                                                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyBookmarksFlow/BookmarkNote AddNote");
                                                                                            return controller.handler_AddNote$Action(bookmarkIdIn, model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).recordDisabledAttr, OS.BuiltinFunctions.textToLongInteger(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).objectIdAttr), controller.callContext(eventHandlerContext));
                                                                                        }, function() {
                                                                                            controller.popDebuggerContext(eventHandlerContext);
                                                                                        });
                                                                                    });;
                                                                                },
                                                                                deleteNote$Action: function(bookmarkIdIn) {
                                                                                    return Promise.resolve().then(function() {
                                                                                        var eventHandlerContext = callContext.clone();
                                                                                        return OS.Flow.tryFinally(function() {
                                                                                            var varBag = {};
                                                                                            controller.pushDebuggerContext(eventHandlerContext);

                                                                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyBookmarksFlow/BookmarkNote DeleteNote");
                                                                                            return controller.handler_DeleteNote$Action(bookmarkIdIn, model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).recordDisabledAttr, OS.BuiltinFunctions.textToLongInteger(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).objectIdAttr), controller.callContext(eventHandlerContext));
                                                                                        }, function() {
                                                                                            controller.popDebuggerContext(eventHandlerContext);
                                                                                        });
                                                                                    });;
                                                                                },
                                                                                editNote$Action: function(in_BookmarkIn) {
                                                                                    return Promise.resolve().then(function() {
                                                                                        var eventHandlerContext = callContext.clone();
                                                                                        return OS.Flow.tryFinally(function() {
                                                                                            var varBag = {};
                                                                                            controller.pushDebuggerContext(eventHandlerContext);

                                                                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyBookmarksFlow/BookmarkNote EditNote");
                                                                                            return controller.handler_EditNote$Action(in_BookmarkIn, model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).recordDisabledAttr, OS.BuiltinFunctions.textToLongInteger(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).objectIdAttr), controller.callContext(eventHandlerContext));
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
                                                                                uuid: "33",
                                                                                alias: "13"
                                                                            },
                                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                                            _dependencies: []
                                                                        })];
                                                                    }, function() {
                                                                        return [];
                                                                    })];
                                                                })
                                                            },
                                                            _dependencies: [asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrentRowNumber(callContext.iterationContext)), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).objectIdAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).recordDisabledAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).noteAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).idAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.householdCountAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.isMainHallAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).titleAttr)]
                                                        }))];
                                                    }, function() {
                                                        return [];
                                                    })];
                                                }))];
                                            }, callContext, idService, "2")
                                        },
                                        _dependencies: []
                                    })];
                                }, function() {
                                    return [];
                                }), $if((model.variables.bookmarkGroupIn === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_Group.entities), false, this, function() {
                                    return [React.createElement(OSWidgets.List, {
                                        animateItems: true,
                                        extendedEvents: {
                                            "dx-preload-list-source": function() {
                                                var eventHandlerContext = callContext.clone();
                                                return OS.Flow.tryFinally(function() {
                                                    var varBag = {};
                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyBookmarksFlow/ScreenBlock_BookmarkGroup/List_Entities dx-preload-list-source");
                                                    controller.preloadListSource_Bookmarks$Action(controller.callContext(eventHandlerContext));
                                                }, function() {
                                                    controller.popDebuggerContext(eventHandlerContext);
                                                });

                                                ;
                                            }
                                        },
                                        extendedProperties: {
                                            "disable-virtualization": "True"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mode: /*Default*/ 0,
                                        source: model.variables.bookmarkedItemsVar,
                                        style: "list list-group",
                                        tag: "div",
                                        _idProps: {
                                            service: idService,
                                            name: "List_Entities"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                return [React.createElement(OSWidgets.Container, {
                                                    align: /*Default*/ 0,
                                                    animate: false,
                                                    extendedProperties: {
                                                        style: model.getCachedValue(idService.getId("XVlNkYUYd0GncP_PaAMnbw.style"), function() {
                                                            return (((model.variables.bookmarkedItemsVar.getCurrentRowNumber(callContext.iterationContext) < (model.variables.bookmarkedItemsVar.length - 1))) ? ("margin-bottom: var(--space-base);") : (""));
                                                        }, function() {
                                                            return model.variables.bookmarkedItemsVar.getCurrentRowNumber(callContext.iterationContext);
                                                        }, function() {
                                                            return model.variables.bookmarkedItemsVar.length;
                                                        })
                                                    },
                                                    style: "bookmark-list-item",
                                                    visible: true,
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "35"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    _dependencies: [asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrentRowNumber(callContext.iterationContext)), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).noteAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).recordDisabledAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).recordNotAvailableAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).idAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).titleAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).objectTypeAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).imageAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.shareObjectTypeIdAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.areasServedAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.countryNameAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.localityNameAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).objectIdAttr)]
                                                }, React.createElement(NavigationHandler_ScrollAnchors_ScrollAnchor_mvc_view, {
                                                    inputs: {
                                                        Id: model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).objectIdAttr
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
                                                        uuid: "36",
                                                        alias: "14"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    _dependencies: []
                                                }), React.createElement(Connect2_LegacyShared_Utility_Result_Item_Image_mvc_view, {
                                                    inputs: {
                                                        In_HasAction: true,
                                                        In_ShowTag: (((model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.localityNameAttr) !== ("")) || ((model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.countryNameAttr) !== (""))),
                                                        In_HasBorder: false,
                                                        ItemHeight: "66px",
                                                        In_ResultType: Connect2_MyBookmarks_MUIModel.staticEntities.resultListType.subdivision,
                                                        In_SignedURL: model.getCachedValue(idService.getId("Entity_List_Item.In_SignedURL"), function() {
                                                            return ((((model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).imageAttr) !== (""))) ? (model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).imageAttr) : ((((OS.BuiltinFunctions.textToIdentifier(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).objectTypeAttr) === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_ObjectType.campusCo)) ? (((((model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).titleAttr) !== (""))) ? (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.CampusCo_PhotoComingSoon.png")) : (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.CampusCo_PhotoUnavailable.png")))) : ((((OS.BuiltinFunctions.textToIdentifier(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).objectTypeAttr) === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_ObjectType.oneSchoolGlobal)) ? (((((model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).titleAttr) !== (""))) ? (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.OneSchool_PhotoComingSoon.png")) : (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.OneSchool_PhotoUnavailable.png")))) : (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.no_division_rectangle.png")))))));
                                                        }, function() {
                                                            return model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).imageAttr;
                                                        }, function() {
                                                            return model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).objectTypeAttr;
                                                        }, function() {
                                                            return model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).titleAttr;
                                                        }),
                                                        In_ShowDescription: false
                                                    },
                                                    events: {
                                                        _handleError: function(ex) {
                                                            controller.handleError(ex);
                                                        },
                                                        onClick_Item$Action: function() {
                                                            return Promise.resolve().then(function() {
                                                                var eventHandlerContext = callContext.clone();
                                                                return OS.Flow.tryFinally(function() {
                                                                    var varBag = {};
                                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Utility/Result_Item_Image OnClick_Item");
                                                                    return controller.onClick_BookmarkedItem$Action(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).idAttr, model.variables.bookmarkedItemsVar.getCurrentRowNumber(callContext.iterationContext), idService.ownerService.getId("List_Entities"), controller.callContext(eventHandlerContext));
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
                                                        name: "Entity_List_Item",
                                                        alias: "15"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    placeholders: {
                                                        imagePlaceholder: PlaceholderContent.Empty,
                                                        title_Placeholder: new PlaceholderContent(function() {
                                                            return [React.createElement(OSWidgets.Expression, {
                                                                style: "font-size-0-9em bold",
                                                                value: model.getCachedValue(idService.getId("Entity_Title.Value"), function() {
                                                                    return ((((model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).titleAttr) !== (""))) ? (model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).titleAttr) : ("Information not available"));
                                                                }, function() {
                                                                    return model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).titleAttr;
                                                                }),
                                                                _idProps: {
                                                                    service: idService,
                                                                    name: "Entity_Title"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider
                                                            })];
                                                        }),
                                                        description_Placeholder: PlaceholderContent.Empty,
                                                        tag_Placeholder: new PlaceholderContent(function() {
                                                            return [React.createElement(OSWidgets.Expression, {
                                                                extendedProperties: {
                                                                    style: "color: #000; font-size: 0.8em;"
                                                                },
                                                                style: "font-size-0-75em text-align-left padding-x-xs padding-y-xs border-radius-soft background-neutral-2 text-neutral-6",
                                                                value: model.getCachedValue(idService.getId("Entity_Tag.Value"), function() {
                                                                    return (((((model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.areasServedAttr) !== (""))) ? (model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.areasServedAttr) : ("")) + ((((model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.countryNameAttr) !== (""))) ? ((((((model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.areasServedAttr) !== (""))) ? (", ") : ("")) + model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.countryNameAttr)) : ("")));
                                                                }, function() {
                                                                    return model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.areasServedAttr;
                                                                }, function() {
                                                                    return model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.countryNameAttr;
                                                                }),
                                                                _idProps: {
                                                                    service: idService,
                                                                    name: "Entity_Tag"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider
                                                            })];
                                                        }),
                                                        result_Item_Placeholder: new PlaceholderContent(function() {
                                                            return [React.createElement(Connect2_LegacyShared_Utility_ItemOptionsMenu_mvc_view, {
                                                                inputs: {
                                                                    IsShareImplemented: !(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).recordNotAvailableAttr),
                                                                    In_IsBookmarked: true
                                                                },
                                                                events: {
                                                                    _handleError: function(ex) {
                                                                        controller.handleError(ex);
                                                                    },
                                                                    onShareToOthers$Action: function() {
                                                                        return Promise.resolve().then(function() {
                                                                            var eventHandlerContext = callContext.clone();
                                                                            return OS.Flow.tryFinally(function() {
                                                                                var varBag = {};
                                                                                controller.pushDebuggerContext(eventHandlerContext);

                                                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Utility/ItemOptionsMenu OnShareToOthers");
                                                                                return controller.onHandle_ShareItem$Action(true, model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.shareObjectTypeIdAttr, OS.BuiltinFunctions.textToLongInteger(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).objectIdAttr), model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).recordDisabledAttr, Connect2_MyBookmarks_MUIModel.staticEntities.connect_Entity.oneSchoolGlobal, controller.callContext(eventHandlerContext));
                                                                            }, function() {
                                                                                controller.popDebuggerContext(eventHandlerContext);
                                                                            });
                                                                        });;
                                                                    },
                                                                    bookmarkToggle$Action: function(isItemBookmarkedIn) {
                                                                        return Promise.resolve().then(function() {
                                                                            var eventHandlerContext = callContext.clone();
                                                                            return OS.Flow.tryFinally(function() {
                                                                                var varBag = {};
                                                                                controller.pushDebuggerContext(eventHandlerContext);

                                                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Utility/ItemOptionsMenu BookmarkToggle");
                                                                                return controller.onHandle_BookmarkToggle$Action(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).idAttr, model.variables.bookmarkedItemsVar.getCurrentRowNumber(callContext.iterationContext), controller.callContext(eventHandlerContext));
                                                                            }, function() {
                                                                                controller.popDebuggerContext(eventHandlerContext);
                                                                            });
                                                                        });;
                                                                    },
                                                                    onShareToConnect$Action: function() {
                                                                        return Promise.resolve().then(function() {
                                                                            var eventHandlerContext = callContext.clone();
                                                                            return OS.Flow.tryFinally(function() {
                                                                                var varBag = {};
                                                                                controller.pushDebuggerContext(eventHandlerContext);

                                                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Utility/ItemOptionsMenu OnShareToConnect");
                                                                                return controller.onHandle_ShareItem$Action(false, model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.shareObjectTypeIdAttr, OS.BuiltinFunctions.textToLongInteger(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).objectIdAttr), model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).recordDisabledAttr, Connect2_MyBookmarks_MUIModel.staticEntities.connect_Entity.oneSchoolGlobal, controller.callContext(eventHandlerContext));
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
                                                                    uuid: "40",
                                                                    alias: "16"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider,
                                                                placeholders: {
                                                                    anchor_Placeholder: new PlaceholderContent(function() {
                                                                        return [React.createElement(OSWidgets.Icon, {
                                                                            icon: "ellipsis-h",
                                                                            iconSize: /*FontSize*/ 0,
                                                                            style: "icon padding-x-base",
                                                                            visible: true,
                                                                            _idProps: {
                                                                                service: idService,
                                                                                uuid: "41"
                                                                            },
                                                                            _widgetRecordProvider: widgetsRecordProvider
                                                                        })];
                                                                    })
                                                                },
                                                                _dependencies: []
                                                            })];
                                                        }),
                                                        bookmarkNote: new PlaceholderContent(function() {
                                                            return [$if(OutSystemsDebugger.handleFunctionCall(function() {
                                                                return UBTConnect_UtilsController.default.getHasBookmarNote$Action(callContext).hasBookmarkNoteAccessOut;
                                                            }, OS.DataTypes.DataTypes.Boolean, callContext.id), false, this, function() {
                                                                return [React.createElement(Connect2_MyBookmarks_MUI_MyBookmarksFlow_BookmarkNote_mvc_view, {
                                                                    inputs: {
                                                                        BookmarkId: model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).idAttr,
                                                                        In_Note: model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).noteAttr
                                                                    },
                                                                    events: {
                                                                        _handleError: function(ex) {
                                                                            controller.handleError(ex);
                                                                        },
                                                                        deleteNote$Action: function(bookmarkIdIn) {
                                                                            return Promise.resolve().then(function() {
                                                                                var eventHandlerContext = callContext.clone();
                                                                                return OS.Flow.tryFinally(function() {
                                                                                    var varBag = {};
                                                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyBookmarksFlow/BookmarkNote DeleteNote");
                                                                                    return controller.handler_DeleteNote$Action(bookmarkIdIn, model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).recordDisabledAttr, OS.BuiltinFunctions.textToLongInteger(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).objectIdAttr), controller.callContext(eventHandlerContext));
                                                                                }, function() {
                                                                                    controller.popDebuggerContext(eventHandlerContext);
                                                                                });
                                                                            });;
                                                                        },
                                                                        editNote$Action: function(in_BookmarkIn) {
                                                                            return Promise.resolve().then(function() {
                                                                                var eventHandlerContext = callContext.clone();
                                                                                return OS.Flow.tryFinally(function() {
                                                                                    var varBag = {};
                                                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyBookmarksFlow/BookmarkNote EditNote");
                                                                                    return controller.handler_EditNote$Action(in_BookmarkIn, model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).recordDisabledAttr, OS.BuiltinFunctions.textToLongInteger(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).objectIdAttr), controller.callContext(eventHandlerContext));
                                                                                }, function() {
                                                                                    controller.popDebuggerContext(eventHandlerContext);
                                                                                });
                                                                            });;
                                                                        },
                                                                        addNote$Action: function(bookmarkIdIn) {
                                                                            return Promise.resolve().then(function() {
                                                                                var eventHandlerContext = callContext.clone();
                                                                                return OS.Flow.tryFinally(function() {
                                                                                    var varBag = {};
                                                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyBookmarksFlow/BookmarkNote AddNote");
                                                                                    return controller.handler_AddNote$Action(bookmarkIdIn, model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).recordDisabledAttr, OS.BuiltinFunctions.textToLongInteger(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).objectIdAttr), controller.callContext(eventHandlerContext));
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
                                                                        uuid: "42",
                                                                        alias: "17"
                                                                    },
                                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                                    _dependencies: []
                                                                })];
                                                            }, function() {
                                                                return [];
                                                            })];
                                                        })
                                                    },
                                                    _dependencies: [asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrentRowNumber(callContext.iterationContext)), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).noteAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).idAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).recordDisabledAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).objectIdAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).recordNotAvailableAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.shareObjectTypeIdAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.countryNameAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.areasServedAttr), asPrimitiveValue(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).titleAttr)]
                                                }))];
                                            }, callContext, idService, "3")
                                        },
                                        _dependencies: []
                                    })];
                                }, function() {
                                    return [];
                                }), React.createElement(Connect2_MyBookmarks_MUI_MyBookmarksFlow_BookmarkNoteAddEdit_mvc_view, {
                                    inputs: {
                                        BookmarkNote: model.variables.editingBookmarkNoteVar
                                    },
                                    events: {
                                        _handleError: function(ex) {
                                            controller.handleError(ex);
                                        },
                                        save_Note$Action: function(bookmarkNoteIn) {
                                            var eventHandlerContext = callContext.clone();
                                            return OS.Flow.tryFinally(function() {
                                                var varBag = {};
                                                controller.pushDebuggerContext(eventHandlerContext);

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyBookmarksFlow/BookmarkNoteAddEdit Save_Note");
                                                controller.handler_OnSaveBookmarkNote$Action(bookmarkNoteIn, controller.callContext(eventHandlerContext));
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
                                        name: "BookmarkNoteAddEdit_Popup",
                                        alias: "18"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    _dependencies: []
                                }), React.createElement(Connect2_MyBookmarks_MUI_MyBookmarksFlow_BookmarkNoteDelete_mvc_view, {
                                    inputs: {
                                        bookmarkId: model.variables.editingBookmarkNoteVar.bookmarkIdAttr
                                    },
                                    events: {
                                        _handleError: function(ex) {
                                            controller.handleError(ex);
                                        },
                                        deleteNoteConfirm$Action: function(bookmarkIdIn) {
                                            var eventHandlerContext = callContext.clone();
                                            return OS.Flow.tryFinally(function() {
                                                var varBag = {};
                                                controller.pushDebuggerContext(eventHandlerContext);

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyBookmarksFlow/BookmarkNoteDelete DeleteNoteConfirm");
                                                controller.handler_ConfirmDeleteNote$Action(bookmarkIdIn, controller.callContext(eventHandlerContext));
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
                                        name: "DeleteNote_Popup",
                                        alias: "19"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    _dependencies: []
                                })), React.createElement(UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view, {
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
                                        name: "FreeSubscriptionAlert",
                                        alias: "20"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    _dependencies: []
                                })];
                            }, function() {
                                return [$if(!(model.variables.getAllBookmarksByGroupDataAct.wasSearchedOut), false, this, function() {
                                    return [React.createElement(Connect2_MyBookmarks_MUI_MyBookmarksFlow_NoBookmarks_mvc_view, {
                                        inputs: {
                                            IsToDisplay: (model.variables.bookmarkedItemsVar.isEmpty && !(model.variables.isFetchingBookmarksVar))
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
                                            uuid: "46",
                                            alias: "21"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            titlePlaceholder: new PlaceholderContent(function() {
                                                return [React.createElement(OSWidgets.Container, {
                                                    align: /*Default*/ 0,
                                                    animate: false,
                                                    style: "no-bookmark-top-message",
                                                    visible: true,
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "47"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                }, "You\'ll find your", React.createElement("br"), " bookmarks here")];
                                            }),
                                            textPlaceholder: new PlaceholderContent(function() {
                                                return [React.createElement(OSWidgets.Container, {
                                                    align: /*Default*/ 0,
                                                    animate: false,
                                                    style: "no-bookmark-bottom-message",
                                                    visible: true,
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "48"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                }, "You can get back to a page that\'s", React.createElement("br"), "important to you by adding a bookmark ")];
                                            })
                                        },
                                        _dependencies: []
                                    })];
                                }, function() {
                                    return [React.createElement(Connect2_LegacyShared_Reusable_MessageList_NoResults_mvc_view, {
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
                                            uuid: "49",
                                            alias: "22"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            placeholder1: new PlaceholderContent(function() {
                                                return ["Make sure that all words are spelled correctly."];
                                            }),
                                            placeholder2: new PlaceholderContent(function() {
                                                return ["Try different keyword."];
                                            }),
                                            placeholder3: PlaceholderContent.Empty
                                        },
                                        _dependencies: []
                                    })];
                                })];
                            })];
                        }, function() {
                            return [React.createElement(Connect2_LegacyShared_Reusable_Spinner_mvc_view, {
                                inputs: {
                                    ShowLoader: model.variables.isFetchingBookmarksVar
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
                                    uuid: "50",
                                    alias: "23"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        }), React.createElement(NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view, {
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
                                uuid: "51",
                                alias: "24"
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
            }), React.createElement(UBTConnect_Utils_CW_Share_ShareSheet_mvc_view, {
                inputs: {
                    In_ShareObjectTypeId: model.variables.type_ShareObjectIdVar,
                    In_IsOpen: model.variables.isShareOpenVar,
                    In_ShareableObjectId: model.variables.shareableObjectIdVar,
                    In_IsLegacy: true
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    event_ClosedShareSheet$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_Share/ShareSheet Event_ClosedShareSheet");
                            controller.handler_CloseShareSheet$Action(controller.callContext(eventHandlerContext));
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
                    uuid: "54",
                    alias: "25"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    placeholder_ShareableObject: new PlaceholderContent(function() {
                        return [$if(((model.variables.shareableObject_GenericVar.connectEntityTypeIdAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())), false, this, function() {
                            return [React.createElement(UBTConnect_Utils_CW_Share_ShareableObject_Generic_mvc_view, {
                                inputs: {
                                    In_ShareableObject: model.variables.shareableObject_GenericVar
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
                                    uuid: "55",
                                    alias: "26"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        }, function() {
                            return [];
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.shareableObject_GenericVar)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.controller", "UBTConnect_Utils.controller", "Connect2_MyBookmarks_IS.model", "Connect2_LegacyShared.model", "Connect2_Sharing_CS.model", "NavigationHandler.controller", "Connect2_LegacyShared.controller", "Connect2_MyBookmarks_MUI.languageResources", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.mvc$debugger", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.mvc$controller.RefreshBookmarkData.SetScrollToTopJS", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.mvc$controller.Handler_OnSaveBookmarkNote.UpdateNoteJS", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.mvc$controller.OnKeyup_SearchBookmarkItems.CheckForEnterKeyJS", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.mvc$controller.PreloadListSource_Bookmarks.WasCurrentViewRestoredFromCacheJS", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.mvc$controller.OnInitialize.WasCurrentViewRestoredFromCacheJS", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.mvc$controller.ResetSearch.AsynchRefreshBookmarkDataJS", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.mvc$controller.ResetSearch.SetScrollToTopJS", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.mvc$controller.OnClick_Search.FocusCursorJS", "UBTConnect_Utils.controller$GetHasBookmarNote", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.controller$GetHasExtendedShare", "Connect2_MyBookmarks_IS.model$BookmarkItemRec", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_MyBookmarks_IS", "Connect2_MyBookmarks_MUI.model$BookmarkItemList", "Connect2_LegacyShared.model$BookmarkNoteRec", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_Sharing_CS.model$UI_ShareableObject_GenericRec", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_Sharing_CS", "NavigationHandler.controller$SetPreloadObject", "Connect2_MyBookmarks_MUI.referencesHealth$NavigationHandler", "Connect2_LegacyShared.model$HouseholdCarouselPreloadedItemRec", "Connect2_MyBookmarks_MUI.model$HouseholdCarouselPreloadedItemList", "Connect2_LegacyShared.model$HouseholdCarouselPreloadingRec", "Connect2_LegacyShared.controller$PutCachedMyBookmarks", "Connect2_LegacyShared.model$CommunityBusinessCarouselPreloadedItemRec", "Connect2_MyBookmarks_MUI.model$CommunityBusinessCarouselPreloadedItemList", "Connect2_LegacyShared.model$CommunityBusinessCarouselPreloadingRec", "NavigationHandler.controller$RememberFocusedScrollAnchor", "Connect2_MyBookmarks_MUI.controller$SendBookmarkedHiddenFeedbackMessage", "Connect2_MyBookmarks_MUI.controller$GetBookmarkById", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "Connect2_LegacyShared.controller$GetCachedMyBookmarks", "NavigationHandler.controller$ConfirmAction", "NavigationHandler.controller$PreventNavigation", "Connect2_MyBookmarks_MUI.controller$SendBookmarkedFeedbackMessage", "Connect2_LegacyShared.controller$Delete_LocalBookmarkByBookmarkId", "Connect2_LegacyShared.controller$AuditBookmarkSubscriptionEvent", "Connect2_MyBookmarks_IS.model$GetBookmarksByGroupResponseRec"], function(OutSystems, Connect2_MyBookmarks_MUIModel, Connect2_MyBookmarks_MUIController, UBTConnect_UtilsController, Connect2_MyBookmarks_ISModel, Connect2_LegacySharedModel, Connect2_Sharing_CSModel, NavigationHandlerController, Connect2_LegacySharedController, Connect2_MyBookmarks_MUILanguageResources, Connect2_MyBookmarks_MUI_MyBookmarksFlow_ScreenBlock_BookmarkGroup_mvc_Debugger, Connect2_MyBookmarks_MUI_MyBookmarksFlow_ScreenBlock_BookmarkGroup_mvc_controller_RefreshBookmarkData_SetScrollToTopJS, Connect2_MyBookmarks_MUI_MyBookmarksFlow_ScreenBlock_BookmarkGroup_mvc_controller_Handler_OnSaveBookmarkNote_UpdateNoteJS, Connect2_MyBookmarks_MUI_MyBookmarksFlow_ScreenBlock_BookmarkGroup_mvc_controller_OnKeyup_SearchBookmarkItems_CheckForEnterKeyJS, Connect2_MyBookmarks_MUI_MyBookmarksFlow_ScreenBlock_BookmarkGroup_mvc_controller_PreloadListSource_Bookmarks_WasCurrentViewRestoredFromCacheJS, Connect2_MyBookmarks_MUI_MyBookmarksFlow_ScreenBlock_BookmarkGroup_mvc_controller_OnInitialize_WasCurrentViewRestoredFromCacheJS, Connect2_MyBookmarks_MUI_MyBookmarksFlow_ScreenBlock_BookmarkGroup_mvc_controller_ResetSearch_AsynchRefreshBookmarkDataJS, Connect2_MyBookmarks_MUI_MyBookmarksFlow_ScreenBlock_BookmarkGroup_mvc_controller_ResetSearch_SetScrollToTopJS, Connect2_MyBookmarks_MUI_MyBookmarksFlow_ScreenBlock_BookmarkGroup_mvc_controller_OnClick_Search_FocusCursorJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {
                updateNote$Action: function(bookmarkIdIn, noteIn) {
                    bookmarkIdIn = (bookmarkIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : bookmarkIdIn;
                    noteIn = (noteIn === undefined) ? "" : noteIn;
                    return controller.executeActionInsideJSNode(controller._updateNote$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(bookmarkIdIn, OS.DataTypes.DataTypes.LongInteger), OS.DataConversion.JSNodeParamConverter.from(noteIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "UpdateNote");
                },
                refreshBookmarkData$Action: function(isScrollToTopIn) {
                    isScrollToTopIn = (isScrollToTopIn === undefined) ? false : isScrollToTopIn;
                    return controller.executeActionInsideJSNode(controller._refreshBookmarkData$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(isScrollToTopIn, OS.DataTypes.DataTypes.Boolean)), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "RefreshBookmarkData");
                }
            };
            this.dataFetchDependenciesOriginal = {
                getAllBookmarksByGroup$DataActRefresh: -1
            };
            this.dataFetchDependentsGraph = {
                getAllBookmarksByGroup$DataActRefresh: []
            };
            this.shouldSendClientVarsToDataSources = false;
        }
        // Server Actions
        Controller.prototype.deleteBookmarkByBookmarkId$ServerAction = function(bookmarkIdIn, callContext) {
            var controller = this.controller;
            var inputs = {
                BookmarkId: OS.DataConversion.ServerDataConverter.to(bookmarkIdIn, OS.DataTypes.DataTypes.LongInteger)
            };
            return controller.callServerAction("DeleteBookmarkByBookmarkId", "screenservices/Connect2_MyBookmarks_MUI/MyBookmarksFlow/ScreenBlock_BookmarkGroup/ActionDeleteBookmarkByBookmarkId", "3Ib_7A4fr_Qg+58dJT0Hgw", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
            }, false).then(function(outputs) {
                var executeServerActionResult = new(controller.constructor.getVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup$rssespaceconnect2_mybookmarks_bl_ActionDeleteBookmarkByBookmarkId"))();
                executeServerActionResult.successOut = OS.DataConversion.ServerDataConverter.from(outputs.Success, OS.DataTypes.DataTypes.Boolean);
                return executeServerActionResult;
            });
        };
        Controller.registerVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup$rssespaceconnect2_mybookmarks_bl_ActionDeleteBookmarkByBookmarkId", [{
            name: "Success",
            attrName: "successOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype.new_UpdateBookmarkNote$ServerAction = function(bookmarkIdIn, noteIn, callContext) {
            var controller = this.controller;
            var inputs = {
                BookmarkId: OS.DataConversion.ServerDataConverter.to(bookmarkIdIn, OS.DataTypes.DataTypes.LongInteger),
                Note: OS.DataConversion.ServerDataConverter.to(noteIn, OS.DataTypes.DataTypes.Text)
            };
            return controller.callServerAction("New_UpdateBookmarkNote", "screenservices/Connect2_MyBookmarks_MUI/MyBookmarksFlow/ScreenBlock_BookmarkGroup/ActionNew_UpdateBookmarkNote", "H+WLAyV4bkMx8b8yVOmCkQ", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
            }, false).then(function(outputs) {
                var executeServerActionResult = new(controller.constructor.getVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup$rssespaceconnect2_mybookmarks_bl_ActionNew_UpdateBookmarkNote"))();
                executeServerActionResult.successOut = OS.DataConversion.ServerDataConverter.from(outputs.Success, OS.DataTypes.DataTypes.Boolean);
                return executeServerActionResult;
            });
        };
        Controller.registerVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup$rssespaceconnect2_mybookmarks_bl_ActionNew_UpdateBookmarkNote", [{
            name: "Success",
            attrName: "successOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);

        // Aggregates and Data Actions
        Controller.prototype.getAllBookmarksByGroup$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:Wfc2uDMEqUOXE7BtjrLtcA:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.bRHJWasHOUikj6CUcclXCQ/DataActions.Wfc2uDMEqUOXE7BtjrLtcA:hCUPOj+MgSd+w09oXq5Tcw", "Connect2_MyBookmarks_MUI", "GetAllBookmarksByGroup", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "MyBookmarksFlow/ScreenBlock_BookmarkGroup/GetAllBookmarksByGroup");
                return controller.callDataAction("DataActionGetAllBookmarksByGroup", "screenservices/Connect2_MyBookmarks_MUI/MyBookmarksFlow/ScreenBlock_BookmarkGroup/DataActionGetAllBookmarksByGroup", "yuUIBx8HhFuprQUvyTW1gg", function(b) {
                    model.variables.getAllBookmarksByGroupDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.getAllBookmarksByGroupDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getAllBookmarksByGroupDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false).then(function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "MyBookmarksFlow/ScreenBlock_BookmarkGroup/GetAllBookmarksByGroup On After Fetch");
                    controller._onAfterFetch_GetAllBookmarksByGroup$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:Wfc2uDMEqUOXE7BtjrLtcA", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };

        Controller.prototype.dataFetchActionNames = ["getAllBookmarksByGroup$DataActRefresh"];
        // Client Actions
        Controller.prototype._refreshBookmarkData$Action = function(isScrollToTopIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("RefreshBookmarkData");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.RefreshBookmarkData$vars"))());
            vars.value.isScrollToTopInLocal = isScrollToTopIn;
            var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.allExceptionsVar = allExceptionsVar;
            OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:uA7AFuQX8EefxDUPqoIdng:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.bRHJWasHOUikj6CUcclXCQ/ClientActions.uA7AFuQX8EefxDUPqoIdng:vr0eXbVnK+JfDklzQfYwVw", "Connect2_MyBookmarks_MUI", "RefreshBookmarkData", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:BoboB32cuESV1PriYAI_rA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:bmpoaICH_Ea4wc0120HLbg", callContext.id);
                // IsFetchingBookmarks = True
                model.variables.isFetchingBookmarksVar = true;
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:ttWeYlQMCEKCS5QSFwJYiQ", callContext.id);
                // Refresh Query: GetAllBookmarksByGroup
                var result = controller.getAllBookmarksByGroup$DataActRefresh(callContext);
                model.flush();
                return result.then(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:uEubAH+vYkStuJxqmP0SHg", callContext.id) && vars.value.isScrollToTopInLocal)) {
                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:4X0zcL8D1k67UqRxPUz1+A", callContext.id);
                        controller.safeExecuteJSNode(Connect2_MyBookmarks_MUI_MyBookmarksFlow_ScreenBlock_BookmarkGroup_mvc_controller_RefreshBookmarkData_SetScrollToTopJS, "SetScrollToTop", "RefreshBookmarkData", null, function($parameters) {}, {}, {});
                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:s5O7caLNmUGoJMX7pvk73Q", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:s5O7caLNmUGoJMX7pvk73Q", callContext.id);
                    }

                });
            }).catch(function(ex) {
                OS.Logger.trace("ScreenBlock_BookmarkGroup.RefreshBookmarkData", OS.Exceptions.getMessage(ex), ex.name);
                // Handle Error: AllExceptions
                if (!(OS.Exceptions.isSystem(ex))) {
                    OS.Logger.error(null, ex);
                    allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                    OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
                    return OS.Flow.executeAsyncFlow(function() {
                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:GaLtozDEH0CE9VI7YY7eMQ", callContext.id);
                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:L1CvmwmyDUCNH8msqKTuXg", callContext.id);
                        // IsFetchingBookmarks = False
                        model.variables.isFetchingBookmarksVar = false;
                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:Xjy_c6L7HkWc2ALaq2GZhQ", callContext.id);
                        // SearchString = ""
                        model.variables.searchStringVar = "";
                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:NtCm69zz806xYomjQBMU6Q", callContext.id);
                        OS.FeedbackMessageService.showFeedbackMessage(allExceptionsVar.value.exceptionMessageAttr, /*Error*/ 3);
                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:dwiWoyWT6k6nlyX_FfxyJA", callContext.id);
                        return OS.Flow.returnAsync();

                    });
                }

                throw ex;
            }).then(function(res) {
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:uA7AFuQX8EefxDUPqoIdng", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:uA7AFuQX8EefxDUPqoIdng", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.RefreshBookmarkData$vars", [{
            name: "IsScrollToTop",
            attrName: "isScrollToTopInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._navigateTo_HouseholdsCarousel$Action = function(selectedHouseholdIdIn, itemPositionIn, itemsLengthIn, searchedStringIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("NavigateTo_HouseholdsCarousel");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.NavigateTo_HouseholdsCarousel$vars"))());
            vars.value.selectedHouseholdIdInLocal = selectedHouseholdIdIn;
            vars.value.itemPositionInLocal = itemPositionIn;
            vars.value.itemsLengthInLocal = itemsLengthIn;
            vars.value.searchedStringInLocal = searchedStringIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:SeoZF8Ql4UWk5ERWCOPOUA:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.bRHJWasHOUikj6CUcclXCQ/ClientActions.SeoZF8Ql4UWk5ERWCOPOUA:peMhcmKeUvbRuVrMJdZgrw", "Connect2_MyBookmarks_MUI", "NavigateTo_HouseholdsCarousel", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:viy4IjRY80O1gvFwRyXwZQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:w2gZO7P_VEeVmhSz5J80Lg", callContext.id);
                // HouseholdCarouselPreloading.IsPreloaded = True
                vars.value.householdCarouselPreloadingVar.isPreloadedAttr = true;
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:w2gZO7P_VEeVmhSz5J80Lg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // HouseholdCarouselPreloading.PreloadedCarouselItems = BookmarkedItems
                vars.value.householdCarouselPreloadingVar.preloadedCarouselItemsAttr = OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.bookmarkedItemsVar, new Connect2_MyBookmarks_MUIModel.HouseholdCarouselPreloadedItemList(), function(source, target) {
                    target.idAttr = OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.textToInteger(source.objectIdAttr));
                    target.nameAttr = source.titleAttr;
                    target.isDeceasedAttr = source.detailsJsonAttr.isDeceasedAttr;
                    target.imageAttr = source.imageAttr;
                    return target;
                });
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:4PVFwH_mYESDlNdurNUYQg", callContext.id);
                // Execute Action: SetPreloadObject
                NavigationHandlerController.default.setPreloadObject$Action(OS.BuiltinFunctions.toObject(vars.value.householdCarouselPreloadingVar), callContext);
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:S5POwq67J0+9ecHkvM2MOg", callContext.id);
                // Trigger Event: NavigateTo_HouseholdCarousel
                return controller.navigateTo_HouseholdCarousel$Action(vars.value.selectedHouseholdIdInLocal, vars.value.itemsLengthInLocal, vars.value.itemPositionInLocal, vars.value.searchedStringInLocal, OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.bookmarkedItemsVar, new OS.DataTypes.LongIntegerList(), function(source, target) {
                    target = OS.BuiltinFunctions.textToLongInteger(source.objectIdAttr);
                    return target;
                }), callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:P58Kxl1fe0OlcDplRSnLdA", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:SeoZF8Ql4UWk5ERWCOPOUA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:SeoZF8Ql4UWk5ERWCOPOUA", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.NavigateTo_HouseholdsCarousel$vars", [{
            name: "SelectedHouseholdId",
            attrName: "selectedHouseholdIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }, {
            name: "ItemPosition",
            attrName: "itemPositionInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }, {
            name: "ItemsLength",
            attrName: "itemsLengthInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }, {
            name: "SearchedString",
            attrName: "searchedStringInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "HouseholdCarouselPreloading",
            attrName: "householdCarouselPreloadingVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new Connect2_LegacySharedModel.HouseholdCarouselPreloadingRec();
            },
            complexType: Connect2_LegacySharedModel.HouseholdCarouselPreloadingRec
        }]);
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
            OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:3L0iJCsgukO4TnvckQCjdA:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.bRHJWasHOUikj6CUcclXCQ/ClientActions.3L0iJCsgukO4TnvckQCjdA:1CS8ge4I2F8tfNOC1uM2Mw", "Connect2_MyBookmarks_MUI", "OnClickSearchClear", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:0dJ_9uH8PE+CcUMt40qMmA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:oL1wwRXXl0in9+pfZXJuJw", callContext.id) && (model.variables.searchStringVar === ""))) {
                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:JL1CgHC0IkO7PsdLVB6lFQ", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:IKOy1Kd3P0uEtI82O_jxBQ", callContext.id);
                        // SearchString = ""
                        model.variables.searchStringVar = "";
                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:TTGIHwcOPkqS1nolZdIMkA", callContext.id);
                        // SearchString_SearchDone = SearchString
                        model.variables.searchString_SearchDoneVar = model.variables.searchStringVar;
                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:JhR9kFSftka4WGIh4U5KBQ", callContext.id);
                        // Execute Action: RefreshBookmarkData
                        return controller._refreshBookmarkData$Action(true, callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:9n00e+cWx0OHYQsS3i1Q6g", callContext.id);
                            // WasSearchDone = False
                            model.variables.wasSearchDoneVar = false;
                            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:NF0jmI7qlEyKSdTYJ92Q8w", callContext.id);
                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:3L0iJCsgukO4TnvckQCjdA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:3L0iJCsgukO4TnvckQCjdA", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._onAfterFetch_GetAllBookmarksByGroup$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnAfterFetch_GetAllBookmarksByGroup");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:nRGZKv7taUmZPXaZIKBs7w:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.bRHJWasHOUikj6CUcclXCQ/ClientActions.nRGZKv7taUmZPXaZIKBs7w:jqWEDHbqb+A2oiNLmlrjWQ", "Connect2_MyBookmarks_MUI", "OnAfterFetch_GetAllBookmarksByGroup", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:H75tGBKVQkOtKgzB1laWOA", callContext.id);
                // Set Data
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:XavARi+UzUqiSnPVjXFdtw", callContext.id);
                // BookmarkedItems = GetAllBookmarksByGroup.GetBookmarksGroupResponse.Results
                model.variables.bookmarkedItemsVar = model.variables.getAllBookmarksByGroupDataAct.getBookmarksGroupResponseOut.resultsAttr;
                // Set Updated Total
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:iUsvZ6Nyx0eMEzciyoqp4A", callContext.id);
                // UpdatedTotal = GetAllBookmarksByGroup.GetBookmarksGroupResponse.Total
                model.variables.updatedTotalVar = model.variables.getAllBookmarksByGroupDataAct.getBookmarksGroupResponseOut.totalAttr;
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:v8FpneVRTU+Gs4NT1DVQeQ", callContext.id);
                // IsFetchingBookmarks = False
                model.variables.isFetchingBookmarksVar = false;
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:HIacgFwqJ0SFuzJi9bUPtQ", callContext.id);
                // Execute Action: PutCachedMyBookmarks
                Connect2_LegacySharedController.default.putCachedMyBookmarks$Action(model.variables.bookmarkGroupIn, model.variables.bookmarkedItemsVar, callContext);
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:riP6WZokyUOlSDebC2FIzg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:nRGZKv7taUmZPXaZIKBs7w", callContext.id);
            }

        };
        Controller.prototype._onHandle_ShareItem$Action = function(isShareToOthersIn, shareObjectTypeIdIn, objectIdIn, isRecordDisabledIn, connect_EntityTypeIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_ShareItem");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.OnHandle_ShareItem$vars"))());
            vars.value.isShareToOthersInLocal = isShareToOthersIn;
            vars.value.shareObjectTypeIdInLocal = shareObjectTypeIdIn;
            vars.value.objectIdInLocal = objectIdIn;
            vars.value.isRecordDisabledInLocal = isRecordDisabledIn;
            vars.value.connect_EntityTypeIdInLocal = connect_EntityTypeIdIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:LHeEMYx_5EG+RLPpuV_FgA:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.bRHJWasHOUikj6CUcclXCQ/ClientActions.LHeEMYx_5EG+RLPpuV_FgA:22uQ4JWoF2KDSSH7MV4LsA", "Connect2_MyBookmarks_MUI", "OnHandle_ShareItem", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:dR5JnXW6D0C3FNdHkorrOg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:UZhcSm21+0W9YrIA3BUFkA", callContext.id) && (vars.value.shareObjectTypeIdInLocal === OS.BuiltinFunctions.nullTextIdentifier()))) {
                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:ZG+oT3gK5UOoUXPWgXeaog", callContext.id);
                        OS.FeedbackMessageService.showFeedbackMessage("Coming soon", /*Info*/ 0);
                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:Ys6BgQD9tkqMQuEfRdCnsA", callContext.id);
                    } else {
                        return OS.Flow.executeSequence(function() {
                            if ((OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:paLu_4Wopk2lFEh1gZIqSQ", callContext.id) && vars.value.isRecordDisabledInLocal)) {
                                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:RhQ8vgdRS0yyjGU1G+xucw", callContext.id);
                                // Execute Action: UpgradeSubscription
                                return controller._upgradeSubscription$Action(vars.value.objectIdInLocal, callContext).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:X0vJyA1GoEinoCZh2RRqGw", callContext.id);
                                });
                            } else {
                                return OS.Flow.executeSequence(function() {
                                    if ((OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:KM8zQQu8dECOT_RH+Xeniw", callContext.id) && OutSystemsDebugger.handleFunctionCall(function() {
                                            return UBTConnect_UtilsController.default.getHasExtendedShare$Action(callContext).hasExtendedShareOut;
                                        }, OS.DataTypes.DataTypes.Boolean, callContext.id))) {
                                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:s7i0_mwM8US_UEBtF5ypZw", callContext.id);
                                        // ShareableObject_Generic = BookmarkedItems.Current
                                        model.variables.shareableObject_GenericVar = OS.DataConversion.JSConversions.typeConvertRecord(model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext), new Connect2_Sharing_CSModel.UI_ShareableObject_GenericRec(), function(source, target) {
                                            target.connectEntityTypeIdAttr = vars.value.connect_EntityTypeIdInLocal;
                                            target.idAttr = source.objectIdAttr;
                                            target.titleAttr = source.titleAttr;
                                            target.subtitleAttr = source.detailsJsonAttr.childrenNamesAttr;
                                            target.locationAttr = ((source.detailsJsonAttr.localityNameAttr + ", ") + source.detailsJsonAttr.countryNameAttr);
                                            return target;
                                        });
                                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:s7i0_mwM8US_UEBtF5ypZw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                                        // ShareableObjectId = BookmarkedItems.Current.ObjectId
                                        model.variables.shareableObjectIdVar = model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).objectIdAttr;
                                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:s7i0_mwM8US_UEBtF5ypZw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                                        // Type_ShareObjectId = ShareObjectTypeId
                                        model.variables.type_ShareObjectIdVar = vars.value.shareObjectTypeIdInLocal;
                                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:s7i0_mwM8US_UEBtF5ypZw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
                                        // IsShareOpen = True
                                        model.variables.isShareOpenVar = true;
                                        if ((OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:vwqnYT7q9kejeSCmUMHj0Q", callContext.id) && (vars.value.connect_EntityTypeIdInLocal === Connect2_MyBookmarks_MUIModel.staticEntities.connect_Entity.oneSchoolGlobal))) {
                                            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:EZvy1RWPKUyYWStmvsqYtg", callContext.id);
                                            // ShareableObject_Generic.Location = BookmarkedItems.Current.DetailsJson.AreasServed + ", " + BookmarkedItems.Current.DetailsJson.CountryName
                                            model.variables.shareableObject_GenericVar.locationAttr = ((model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.areasServedAttr + ", ") + model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).detailsJsonAttr.countryNameAttr);
                                            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:EZvy1RWPKUyYWStmvsqYtg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                                            // ShareableObject_Generic.SignedURL = BookmarkedItems.Current.Image
                                            model.variables.shareableObject_GenericVar.signedURLAttr = model.variables.bookmarkedItemsVar.getCurrent(callContext.iterationContext).imageAttr;
                                            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:6mRxKBwuGEaVz9KEubt4ZA", callContext.id);
                                        } else {
                                            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:6mRxKBwuGEaVz9KEubt4ZA", callContext.id);
                                        }

                                    } else {
                                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:28AoLQMxWU+bX+0zY25u9g", callContext.id);
                                        // Trigger Event: NavigateTo_ShareObject
                                        return controller.navigateTo_ShareObject$Action(vars.value.objectIdInLocal, vars.value.shareObjectTypeIdInLocal, vars.value.isShareToOthersInLocal, callContext).then(function() {
                                            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:OtXXi9BBjUWvzL3Val_75w", callContext.id);
                                        });
                                    }

                                });
                            }

                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:LHeEMYx_5EG+RLPpuV_FgA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:LHeEMYx_5EG+RLPpuV_FgA", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.OnHandle_ShareItem$vars", [{
            name: "IsShareToOthers",
            attrName: "isShareToOthersInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "ShareObjectTypeId",
            attrName: "shareObjectTypeIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "ObjectId",
            attrName: "objectIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }, {
            name: "IsRecordDisabled",
            attrName: "isRecordDisabledInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "Connect_EntityTypeId",
            attrName: "connect_EntityTypeIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._handler_OnSaveBookmarkNote$Action = function(in_BookmarkIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_OnSaveBookmarkNote");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.Handler_OnSaveBookmarkNote$vars"))());
            vars.value.in_BookmarkInLocal = in_BookmarkIn.clone();
            var listIndexOfVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.listIndexOfVar = listIndexOfVar;
            try {
                OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:JkgHMjkUv0C03elQva2cCw:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.bRHJWasHOUikj6CUcclXCQ/ClientActions.JkgHMjkUv0C03elQva2cCw:I8PBI2Hk+3pw79TV3KSRSA", "Connect2_MyBookmarks_MUI", "Handler_OnSaveBookmarkNote", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:uJIKblLKRk+7qR7eb0ADgw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:BFLmUp_e9ESUKpZhTh4gKw", callContext.id);
                controller.safeExecuteJSNode(Connect2_MyBookmarks_MUI_MyBookmarksFlow_ScreenBlock_BookmarkGroup_mvc_controller_Handler_OnSaveBookmarkNote_UpdateNoteJS, "UpdateNote", "Handler_OnSaveBookmarkNote", {
                    BookmarkId: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_BookmarkInLocal.bookmarkIdAttr, OS.DataTypes.DataTypes.LongInteger),
                    Note: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_BookmarkInLocal.noteAttr, OS.DataTypes.DataTypes.Text)
                }, function($parameters) {}, {
                    UpdateNote: controller.clientActionProxies.updateNote$Action
                }, {});
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:bgA8J6Cs9UqG1j76McAJNQ", callContext.id);
                // Execute Action: ListIndexOf
                listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.bookmarkedItemsVar, function(p) {
                    return p.idAttr.equals(vars.value.in_BookmarkInLocal.bookmarkIdAttr);
                }, callContext);

                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:izb0di_amkSjm2PJtltThQ", callContext.id);
                // BookmarkedItems[ListIndexOf.Position].Note = Trim
                model.variables.bookmarkedItemsVar.getItem(listIndexOfVar.value.positionOut).noteAttr = OS.BuiltinFunctions.trim(vars.value.in_BookmarkInLocal.noteAttr);
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:OWZ1wr9igk6b+CutCAvuAA", callContext.id);
                // Execute Action: PutCachedMyBookmarks
                Connect2_LegacySharedController.default.putCachedMyBookmarks$Action(model.variables.bookmarkGroupIn, model.variables.bookmarkedItemsVar, callContext);
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:zrqPd3Z0+EGO3FBHTE24hg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:JkgHMjkUv0C03elQva2cCw", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.Handler_OnSaveBookmarkNote$vars", [{
            name: "In_Bookmark",
            attrName: "in_BookmarkInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new Connect2_LegacySharedModel.BookmarkNoteRec();
            },
            complexType: Connect2_LegacySharedModel.BookmarkNoteRec
        }]);
        Controller.prototype._handler_ConfirmDeleteNote$Action = function(bookmarkIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_ConfirmDeleteNote");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.Handler_ConfirmDeleteNote$vars"))());
            vars.value.bookmarkIdInLocal = bookmarkIdIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:B9F3NlTOL06Glu38CMDSTA:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.bRHJWasHOUikj6CUcclXCQ/ClientActions.B9F3NlTOL06Glu38CMDSTA:qM7u7uXbk135Hex2MeGClw", "Connect2_MyBookmarks_MUI", "Handler_ConfirmDeleteNote", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:WUmyq+IoDkW0xAvBM26hMQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:a2nuvdFdoUyQappWRqUiVA", callContext.id);
                // Execute Action: Handler_OnSaveBookmarkNote
                controller._handler_OnSaveBookmarkNote$Action(function() {
                    var rec = new Connect2_LegacySharedModel.BookmarkNoteRec();
                    rec.bookmarkIdAttr = vars.value.bookmarkIdInLocal;
                    rec.noteAttr = "";
                    return rec;
                }(), callContext);
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:h5NuuuPbz0CzBFswHahIRA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:B9F3NlTOL06Glu38CMDSTA", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.Handler_ConfirmDeleteNote$vars", [{
            name: "bookmarkId",
            attrName: "bookmarkIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
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
            OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:GVaMQjkmC0Kh1l1rLyodFg:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.bRHJWasHOUikj6CUcclXCQ/ClientActions.GVaMQjkmC0Kh1l1rLyodFg:NO8qFE1UmQ8GnhB2hmof4Q", "Connect2_MyBookmarks_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:5f7DFaurEU+UXswMjH+d1A", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:hJhzSxQQdUyuCBUgZlLNyg", callContext.id) && model.variables.isFromNavigationHistoryVar)) {
                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:zgrgJqArDUapUVK3TyzXWg", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:o6r2jvyMskGJ6f2bWpVt3Q", callContext.id);
                        // Execute Action: RefreshBookmarkData
                        return controller._refreshBookmarkData$Action(model.variables.isFromNavigationHistoryVar, callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:OiUPeAqzVUeJ1UIyaTkqEw", callContext.id);
                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:GVaMQjkmC0Kh1l1rLyodFg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:GVaMQjkmC0Kh1l1rLyodFg", callContext.id);
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
                OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:WFefQoTF70W__kz+iC5loA:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.bRHJWasHOUikj6CUcclXCQ/ClientActions.WFefQoTF70W__kz+iC5loA:5Xi1oD7_QUl6yiuqpkn54w", "Connect2_MyBookmarks_MUI", "ToggleShowSearch", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:xcAhzn1JR0idrhqk0lvNFQ", callContext.id);
                // Toggle Search
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:YlYFfLXH7kOkR0TERwuHGw", callContext.id);
                // ShowSearch = notShowSearch
                model.variables.showSearchVar = !(model.variables.showSearchVar);
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:BZ4Hv+HyGUaVZM7wCCIlPA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:WFefQoTF70W__kz+iC5loA", callContext.id);
            }

        };
        Controller.prototype._navigateTo_LocalityDetail$Action = function(localityIdIn, localityNameIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("NavigateTo_LocalityDetail");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.NavigateTo_LocalityDetail$vars"))());
            vars.value.localityIdInLocal = localityIdIn;
            vars.value.localityNameInLocal = localityNameIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:oj+ESMUNzkeunYf1QaqgzQ:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.bRHJWasHOUikj6CUcclXCQ/ClientActions.oj+ESMUNzkeunYf1QaqgzQ:Z+ipoZIXwTVNMenKaq5OUg", "Connect2_MyBookmarks_MUI", "NavigateTo_LocalityDetail", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:zlBlVNLdzEGxc1MkVkLWmQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:mkgJdwKO6kefn5jtVXh12A", callContext.id);
                // Trigger Event: NavigateTo_Locality
                return controller.navigateTo_Locality$Action(vars.value.localityIdInLocal, vars.value.localityNameInLocal, 0, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:x4hFMwqeBEuU+TDUEDWNIQ", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:oj+ESMUNzkeunYf1QaqgzQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:oj+ESMUNzkeunYf1QaqgzQ", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.NavigateTo_LocalityDetail$vars", [{
            name: "LocalityId",
            attrName: "localityIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }, {
            name: "LocalityName",
            attrName: "localityNameInLocal",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._navigateTo_CommunityBusinessDetail$Action = function(communityBusinessIdIn, itemPositionIn, objectTypeIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("NavigateTo_CommunityBusinessDetail");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.NavigateTo_CommunityBusinessDetail$vars"))());
            vars.value.communityBusinessIdInLocal = communityBusinessIdIn;
            vars.value.itemPositionInLocal = itemPositionIn;
            vars.value.objectTypeInLocal = objectTypeIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:5b3xSOWDCUiArAsW5LbN1g:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.bRHJWasHOUikj6CUcclXCQ/ClientActions.5b3xSOWDCUiArAsW5LbN1g:u03ABKaXlYWTwWtAvHpHtA", "Connect2_MyBookmarks_MUI", "NavigateTo_CommunityBusinessDetail", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:cHrw88WG5ESCw+5_GRNaJw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:5I+4hrTn70eSjxoQ1Z+uPQ", callContext.id);
                // CommunityBusinessCarouselPreloading.IsPreloaded = True
                vars.value.communityBusinessCarouselPreloadingVar.isPreloadedAttr = true;
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:5I+4hrTn70eSjxoQ1Z+uPQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // CommunityBusinessCarouselPreloading.PreloadedCarouselItems = BookmarkedItems
                vars.value.communityBusinessCarouselPreloadingVar.preloadedCarouselItemsAttr = OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.bookmarkedItemsVar, new Connect2_MyBookmarks_MUIModel.CommunityBusinessCarouselPreloadedItemList(), function(source, target) {
                    target.idAttr = OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.textToInteger(source.objectIdAttr));
                    target.nameAttr = source.titleAttr;
                    target.signedURLAttr = source.imageAttr;
                    target.communityBusinessTypeIdAttr = (((source.objectTypeAttr === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_ObjectType.campusCo)) ? (Connect2_MyBookmarks_MUIModel.staticEntities.communityBusinessType2.campusCo) : ((((source.objectTypeAttr === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_ObjectType.oneSchoolGlobal)) ? (Connect2_MyBookmarks_MUIModel.staticEntities.communityBusinessType2.oneSchoolGlobal) : (OS.BuiltinFunctions.nullTextIdentifier()))));
                    return target;
                });
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:_mYxYvCpiUSJwG_SEQ6V+A", callContext.id);
                // Execute Action: SetPreloadObject
                NavigationHandlerController.default.setPreloadObject$Action(OS.BuiltinFunctions.toObject(vars.value.communityBusinessCarouselPreloadingVar), callContext);
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:flKkdpR0NE2qX8urmZfjmA", callContext.id);
                // Trigger Event: NavigateTo_CommunityBusinessCarousel
                return controller.navigateTo_CommunityBusinessCarousel$Action(vars.value.communityBusinessIdInLocal, model.variables.updatedTotalVar, vars.value.itemPositionInLocal, vars.value.objectTypeInLocal, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:QgsX83uPpU+p_xoWG5Ka8g", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:5b3xSOWDCUiArAsW5LbN1g", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:5b3xSOWDCUiArAsW5LbN1g", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.NavigateTo_CommunityBusinessDetail$vars", [{
            name: "CommunityBusinessId",
            attrName: "communityBusinessIdInLocal",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }, {
            name: "ItemPosition",
            attrName: "itemPositionInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }, {
            name: "ObjectType",
            attrName: "objectTypeInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "CommunityBusinessCarouselPreloading",
            attrName: "communityBusinessCarouselPreloadingVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new Connect2_LegacySharedModel.CommunityBusinessCarouselPreloadingRec();
            },
            complexType: Connect2_LegacySharedModel.CommunityBusinessCarouselPreloadingRec
        }]);
        Controller.prototype._handler_AddNote$Action = function(bookmarkIdIn, isRecordDisabledIn, objectIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_AddNote");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.Handler_AddNote$vars"))());
            vars.value.bookmarkIdInLocal = bookmarkIdIn;
            vars.value.isRecordDisabledInLocal = isRecordDisabledIn;
            vars.value.objectIdInLocal = objectIdIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:jVvlUB4i10Kne2VfambXOQ:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.bRHJWasHOUikj6CUcclXCQ/ClientActions.jVvlUB4i10Kne2VfambXOQ:J9ThEf3uYOqEudeXRicHBw", "Connect2_MyBookmarks_MUI", "Handler_AddNote", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:X3tDnPczcEiONbAwendwDw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:nKGuSStQRkCscNHCY40Uyg", callContext.id);
                // Execute Action: Handler_EditNote
                return controller._handler_EditNote$Action(function() {
                    var rec = new Connect2_LegacySharedModel.BookmarkNoteRec();
                    rec.bookmarkIdAttr = vars.value.bookmarkIdInLocal;
                    rec.noteAttr = "";
                    return rec;
                }(), vars.value.isRecordDisabledInLocal, vars.value.objectIdInLocal, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:Gxl_q9z30U+tCzJY6+kdjQ", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:jVvlUB4i10Kne2VfambXOQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:jVvlUB4i10Kne2VfambXOQ", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.Handler_AddNote$vars", [{
            name: "BookmarkId",
            attrName: "bookmarkIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }, {
            name: "IsRecordDisabled",
            attrName: "isRecordDisabledInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "ObjectId",
            attrName: "objectIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }]);
        Controller.prototype._onKeyup_SearchBookmarkItems$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnKeyup_SearchBookmarkItems");
            callContext = controller.callContext(callContext);
            var checkForEnterKeyJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.checkForEnterKeyJSResult = checkForEnterKeyJSResult;
            OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:O+EcYI+n8UedN48LMegQYQ:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.bRHJWasHOUikj6CUcclXCQ/ClientActions.O+EcYI+n8UedN48LMegQYQ:Yt7DdbZLMarwrC6nkTse+w", "Connect2_MyBookmarks_MUI", "OnKeyup_SearchBookmarkItems", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:ul0Hho6+EEWVh2oSj7Eibw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:vvPCAzuehkOG8AZ8WTe0dA", callContext.id);
                checkForEnterKeyJSResult.value = controller.safeExecuteJSNode(Connect2_MyBookmarks_MUI_MyBookmarksFlow_ScreenBlock_BookmarkGroup_mvc_controller_OnKeyup_SearchBookmarkItems_CheckForEnterKeyJS, "CheckForEnterKey", "OnKeyup_SearchBookmarkItems", {
                    WasSearchDone: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.OnKeyup_SearchBookmarkItems$checkForEnterKeyJSResult"))();
                    jsNodeResult.wasSearchDoneOut = OS.DataConversion.JSNodeParamConverter.from($parameters.WasSearchDone, OS.DataTypes.DataTypes.Boolean);
                    return jsNodeResult;
                }, {}, {});
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:w_yYAOT0cE2NsWmN62r5Cg", callContext.id);
                // WasSearchDone = CheckForEnterKey.WasSearchDone
                model.variables.wasSearchDoneVar = checkForEnterKeyJSResult.value.wasSearchDoneOut;
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:Vsqfw7oebEmot8yxCJ_BOw", callContext.id) && checkForEnterKeyJSResult.value.wasSearchDoneOut)) {
                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:6ZV44R06S0OrpO16SqhuRg", callContext.id);
                        // SearchString_SearchDone = SearchString
                        model.variables.searchString_SearchDoneVar = model.variables.searchStringVar;
                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:UK1vQk0dsUGZ1RTs1+CUYg", callContext.id);
                        // Execute Action: RefreshBookmarkData
                        return controller._refreshBookmarkData$Action(true, callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:xOraYqkQ0ESwW9BaqmwlWg", callContext.id);
                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:r_Es+6N2iUKs+CckYnBe+g", callContext.id);
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:O+EcYI+n8UedN48LMegQYQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:O+EcYI+n8UedN48LMegQYQ", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.OnKeyup_SearchBookmarkItems$checkForEnterKeyJSResult", [{
            name: "WasSearchDone",
            attrName: "wasSearchDoneOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._onClick_BookmarkedItem$Action = function(bookmarkItemIdIn, currentRowNumberIn, currentListWidgetIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_BookmarkedItem");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.OnClick_BookmarkedItem$vars"))());
            vars.value.bookmarkItemIdInLocal = bookmarkItemIdIn;
            vars.value.currentRowNumberInLocal = currentRowNumberIn;
            vars.value.currentListWidgetIdInLocal = currentListWidgetIdIn;
            var getBookmarkByIdVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.getBookmarkByIdVar = getBookmarkByIdVar;
            OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:AqzvYuP9M0mIqagroiRNuQ:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.bRHJWasHOUikj6CUcclXCQ/ClientActions.AqzvYuP9M0mIqagroiRNuQ:xKK7BCin+4K8sjzlfEsaiw", "Connect2_MyBookmarks_MUI", "OnClick_BookmarkedItem", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:cDXILfYiSkeCrdp3f6+qUg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:vLaiYC5US0WbjVVaL4KccQ", callContext.id);
                // Execute Action: GetBookmarkById
                model.flush();
                return Connect2_MyBookmarks_MUIController.default.getBookmarkById$Action(vars.value.bookmarkItemIdInLocal, callContext).then(function(value) {
                    getBookmarkByIdVar.value = value;
                }).then(function() {
                    return OS.Flow.executeSequence(function() {
                        if ((OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:qzmmUQ637EW0N5aSNtppGw", callContext.id) && getBookmarkByIdVar.value.isBookmarkFoundOut)) {
                            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:08IpAWIJHU25Fa3YM2isyA", callContext.id);
                            // SelectedObjectId = TextToLongInteger
                            vars.value.selectedObjectIdVar = OS.BuiltinFunctions.textToLongInteger(getBookmarkByIdVar.value.out_BookmarkItemOut.objectIdAttr);
                            // Is Record Not Available?
                            return OS.Flow.executeSequence(function() {
                                if ((OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:iuQ5sPdeMkO4587lxrP4KA", callContext.id) && getBookmarkByIdVar.value.out_BookmarkItemOut.recordNotAvailableAttr)) {
                                    OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:TOyxHaJu7UG1pXofFh92_Q", callContext.id);
                                    // Execute Action: SendBookmarkedHiddenFeedbackMessage
                                    Connect2_MyBookmarks_MUIController.default.sendBookmarkedHiddenFeedbackMessage$Action(OS.BuiltinFunctions.textToIdentifier(getBookmarkByIdVar.value.out_BookmarkItemOut.objectTypeAttr), callContext);
                                    OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:rFz6HL1uokKY1KmCFdyCoA", callContext.id);
                                } else {
                                    // Is Record Enabled?
                                    return OS.Flow.executeSequence(function() {
                                        if ((OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:nrSw_0SkAUyY9IM7AMOPYg", callContext.id) && !(getBookmarkByIdVar.value.out_BookmarkItemOut.recordDisabledAttr))) {
                                            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:37RzGI6RtUqUVUl58Do2Ag", callContext.id);
                                            // Execute Action: RememberFocusedScrollAnchor
                                            NavigationHandlerController.default.rememberFocusedScrollAnchor$Action(vars.value.currentListWidgetIdInLocal, vars.value.currentRowNumberInLocal, OS.BuiltinFunctions.longIntegerToText(vars.value.selectedObjectIdVar), callContext);
                                            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:WAm_tXPCIUyQVAFyngyljA", callContext.id);
                                            // Execute Action: PutCachedMyBookmarks
                                            Connect2_LegacySharedController.default.putCachedMyBookmarks$Action(model.variables.bookmarkGroupIn, model.variables.bookmarkedItemsVar, callContext);
                                            // Bookmark Group
                                            return OS.Flow.executeSequence(function() {
                                                if ((OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:wZqvH7mVx0SZREQhP5kdMg", callContext.id) && (model.variables.bookmarkGroupIn === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_Group.contacts))) {
                                                    OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:A7fnIqRpkEeG0f_gEeQ+DA", callContext.id);
                                                    // Execute Action: NavigateTo_HouseholdsCarousel
                                                    return controller._navigateTo_HouseholdsCarousel$Action(vars.value.selectedObjectIdVar, vars.value.currentRowNumberInLocal, model.variables.updatedTotalVar, model.variables.searchString_SearchDoneVar, callContext).then(function() {
                                                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:D6DdVpaK_kKkt4pFooodig", callContext.id);
                                                    });
                                                } else {
                                                    return OS.Flow.executeSequence(function() {
                                                        if ((model.variables.bookmarkGroupIn === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_Group.entities)) {
                                                            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:NLJ73yIlu0OgeN2SaIhcGQ", callContext.id);
                                                            // Execute Action: NavigateTo_CommunityBusinessDetail
                                                            return controller._navigateTo_CommunityBusinessDetail$Action(vars.value.selectedObjectIdVar, vars.value.currentRowNumberInLocal, getBookmarkByIdVar.value.out_BookmarkItemOut.objectTypeAttr, callContext).then(function() {
                                                                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:5NFNTfidxEGWIBAI7akBJw", callContext.id);
                                                            });
                                                        } else {
                                                            return OS.Flow.executeSequence(function() {
                                                                if ((model.variables.bookmarkGroupIn === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_Group.locations)) {
                                                                    // Is Locality?
                                                                    return OS.Flow.executeSequence(function() {
                                                                        if ((OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:6HNbHxUogU2N7miFX4PBNw", callContext.id) && (getBookmarkByIdVar.value.out_BookmarkItemOut.objectTypeAttr === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_ObjectType.locality))) {
                                                                            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:6abQWFau_06jrpI8EIdUaw", callContext.id);
                                                                            // Execute Action: NavigateTo_LocalityDetail
                                                                            return controller._navigateTo_LocalityDetail$Action(getBookmarkByIdVar.value.out_BookmarkItemOut.detailsJsonAttr.localityIDAttr, getBookmarkByIdVar.value.out_BookmarkItemOut.titleAttr, callContext).then(function() {
                                                                                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:6EuuxK4xlUiTBGrZWgdPvA", callContext.id);
                                                                            });
                                                                        } else {
                                                                            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:Vlt6ZpgeK0WWvyhEmDw4Uw", callContext.id);
                                                                            // Execute Action: NavigateTo_SubdivisionDetail
                                                                            return controller._navigateTo_SubdivisionDetail$Action(vars.value.selectedObjectIdVar, callContext).then(function() {
                                                                                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:59FAKnVyZ0C_3jasoaqy3g", callContext.id);
                                                                            });
                                                                        }

                                                                    });
                                                                } else {
                                                                    OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:9LLdDxtAdESgJb_fnfBtTA", callContext.id);
                                                                }

                                                            });
                                                        }

                                                    });
                                                }

                                            });
                                        } else {
                                            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:PzUVm0yKpUOmdzw8GCN3Sw", callContext.id);
                                            // Execute Action: App_Subscription_ShowUpgradePopUp
                                            model.flush();
                                            return UBTConnect_UtilsController.default.app_Subscription_ShowUpgradePopUp$Action(callContext).then(function() {
                                                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:sInDlRHcE0KBnwv47zGTWQ", callContext.id);
                                            });
                                        }

                                    });
                                }

                            });
                        } else {
                            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:zavNLvhSika4V5yoibQ6tw", callContext.id);
                            OS.FeedbackMessageService.showFeedbackMessage("That bookmark isn’t available", /*Error*/ 3);
                            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:w_b1ly6MUEKCcv67wlHbnQ", callContext.id);
                            // Refresh Query: GetAllBookmarksByGroup
                            var result = controller.getAllBookmarksByGroup$DataActRefresh(callContext);
                            model.flush();
                            return result.then(function() {
                                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:45XJlga310mzvX5msDwYPA", callContext.id);
                            });
                        }

                    });
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:AqzvYuP9M0mIqagroiRNuQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:AqzvYuP9M0mIqagroiRNuQ", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.OnClick_BookmarkedItem$vars", [{
            name: "BookmarkItemId",
            attrName: "bookmarkItemIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }, {
            name: "CurrentRowNumber",
            attrName: "currentRowNumberInLocal",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }, {
            name: "CurrentListWidgetId",
            attrName: "currentListWidgetIdInLocal",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "SelectedObjectId",
            attrName: "selectedObjectIdVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }]);
        Controller.prototype._preloadListSource_Bookmarks$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("PreloadListSource_Bookmarks");
            callContext = controller.callContext(callContext);
            var getCachedMyBookmarksVar = new OS.DataTypes.VariableHolder();
            var wasCurrentViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getCachedMyBookmarksVar = getCachedMyBookmarksVar;
            varBag.wasCurrentViewRestoredFromCacheJSResult = wasCurrentViewRestoredFromCacheJSResult;
            try {
                OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:RKwfdUPGjEukhHU0gso8bQ:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.bRHJWasHOUikj6CUcclXCQ/ClientActions.RKwfdUPGjEukhHU0gso8bQ:JqFdEzDan2cb55wDSafWGg", "Connect2_MyBookmarks_MUI", "PreloadListSource_Bookmarks", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:joFbteA6cEKmz+6LUiA2kQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:cKVd45WBQUuRdwBouChg+Q", callContext.id);
                wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_MyBookmarks_MUI_MyBookmarksFlow_ScreenBlock_BookmarkGroup_mvc_controller_PreloadListSource_Bookmarks_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "PreloadListSource_Bookmarks", {
                    FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.PreloadListSource_Bookmarks$wasCurrentViewRestoredFromCacheJSResult"))();
                    jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
                    return jsNodeResult;
                }, {}, {});
                if ((OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:2+Q8wfLZs0+HtRVtaBQy7w", callContext.id) && wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut)) {
                    OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:xlBKIDF2w0iT0afUPybbrQ", callContext.id);
                    // Execute Action: GetCachedMyBookmarks
                    getCachedMyBookmarksVar.value = Connect2_LegacySharedController.default.getCachedMyBookmarks$Action(model.variables.bookmarkGroupIn, callContext);

                    // Cache Hit?
                    if ((OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:x2FPGMM5d02dBYWJpOTaUg", callContext.id) && getCachedMyBookmarksVar.value.cacheHitOut)) {
                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:Rk+KwZYUiEmwWV37bpsn8g", callContext.id);
                        // BookmarkedItems = GetCachedMyBookmarks.Bookmarks
                        model.variables.bookmarkedItemsVar = getCachedMyBookmarksVar.value.bookmarksOut;
                        // Set Updated Total
                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:fWgo0pBUD0ijwckqPVbgqw", callContext.id);
                        // UpdatedTotal = GetCachedMyBookmarks.Bookmarks.Length
                        model.variables.updatedTotalVar = OS.BuiltinFunctions.integerToLongInteger(getCachedMyBookmarksVar.value.bookmarksOut.length);
                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:hfaJrdtGKkKxLIrnwavboA", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:9gmsW3mHMEWM0J0NfLSdkA", callContext.id);
                    }

                } else {
                    OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:BSILFatk80G3rPkVFN3XEg", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:RKwfdUPGjEukhHU0gso8bQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.PreloadListSource_Bookmarks$wasCurrentViewRestoredFromCacheJSResult", [{
            name: "FromCache",
            attrName: "fromCacheOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._navigateTo_SubdivisionDetail$Action = function(subdivisionIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("NavigateTo_SubdivisionDetail");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.NavigateTo_SubdivisionDetail$vars"))());
            vars.value.subdivisionIdInLocal = subdivisionIdIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:u19SeKlZxU+SWXIghvo4dQ:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.bRHJWasHOUikj6CUcclXCQ/ClientActions.u19SeKlZxU+SWXIghvo4dQ:AIyVEbioeC6n5gAOKtMlwg", "Connect2_MyBookmarks_MUI", "NavigateTo_SubdivisionDetail", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:pgc+_MbTL0yAcUPS70bCLA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:aX2LCX6BkU+KVwT4lRcvIA", callContext.id);
                // Trigger Event: NavigateTo_Subdivision
                return controller.navigateTo_Subdivision$Action(vars.value.subdivisionIdInLocal, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:FW5nHoDlo0+bDgf1vHlO6Q", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:u19SeKlZxU+SWXIghvo4dQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:u19SeKlZxU+SWXIghvo4dQ", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.NavigateTo_SubdivisionDetail$vars", [{
            name: "SubdivisionId",
            attrName: "subdivisionIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }]);
        Controller.prototype._handler_DeleteNote$Action = function(bookmarkIdIn, isRecordDisabledIn, objectIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_DeleteNote");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.Handler_DeleteNote$vars"))());
            vars.value.bookmarkIdInLocal = bookmarkIdIn;
            vars.value.isRecordDisabledInLocal = isRecordDisabledIn;
            vars.value.objectIdInLocal = objectIdIn;
            var openDeleteNotePopupVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.openDeleteNotePopupVar = openDeleteNotePopupVar;
            OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:qB6QfF_AgEKZFfnwAEzAjg:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.bRHJWasHOUikj6CUcclXCQ/ClientActions.qB6QfF_AgEKZFfnwAEzAjg:9N_oNi7YWXTgd3v9zfWIrw", "Connect2_MyBookmarks_MUI", "Handler_DeleteNote", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:8IRboPjGxkGB22jLpEfnpg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:4KK74yshVEKcBcS2xYvqVA", callContext.id) && vars.value.isRecordDisabledInLocal)) {
                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:iZzGDoGzE02OcWghOvCUZw", callContext.id);
                        // Execute Action: UpgradeSubscription
                        return controller._upgradeSubscription$Action(vars.value.objectIdInLocal, callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:0RWABp+_l0C_XoH80HMCyg", callContext.id);
                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:wT1hrcv_hUOfp994vOPzog", callContext.id);
                        // EditingBookmarkNote.BookmarkId = BookmarkId
                        model.variables.editingBookmarkNoteVar.bookmarkIdAttr = vars.value.bookmarkIdInLocal;
                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:moxfuiwG+kuVkphvjtibUg", callContext.id);
                        // Execute Action: OpenDeleteNotePopup
                        model.flush();
                        return NavigationHandlerController.default.confirmAction$Action(idService.getId("DeleteNote_Popup"), callContext).then(function(value) {
                            openDeleteNotePopupVar.value = value;
                        }).then(function() {
                            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:Lxtqs2WGWEaxET9+cEpbSQ", callContext.id);
                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:qB6QfF_AgEKZFfnwAEzAjg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:qB6QfF_AgEKZFfnwAEzAjg", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.Handler_DeleteNote$vars", [{
            name: "BookmarkId",
            attrName: "bookmarkIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }, {
            name: "IsRecordDisabled",
            attrName: "isRecordDisabledInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "ObjectId",
            attrName: "objectIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }]);
        Controller.prototype._backNavigationHandler$Action = function(backNavigationEventIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("BackNavigationHandler");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.BackNavigationHandler$vars"))());
            vars.value.backNavigationEventInLocal = backNavigationEventIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:NzhBkZi5H0eaU468XE5CvA:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.bRHJWasHOUikj6CUcclXCQ/ClientActions.NzhBkZi5H0eaU468XE5CvA:NeRnfKtdxdd2CSHyJqNn+w", "Connect2_MyBookmarks_MUI", "BackNavigationHandler", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:FKl0sJ4fpEmUHcgETtJUdQ", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:+eWLKZa+w02ugvp9Idz1HA", callContext.id) && (((model.variables.searchStringVar) !== ("")) || model.variables.showSearchVar))) {
                    OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:pU_TZoyxDEKVd2penL5XGA", callContext.id);
                    // Execute Action: ResetSearch
                    controller._resetSearch$Action(callContext);
                    OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:UH1b1wOmHEGu101A5hUmzA", callContext.id);
                    // Execute Action: PreventNavigation
                    NavigationHandlerController.default.preventNavigation$Action(vars.value.backNavigationEventInLocal, callContext);
                    OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:FS6PdNr2NUGgiabtJCEo3Q", callContext.id);
                } else {
                    if ((OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:CbIE3qE7ZU+XYyTbqbMBEA", callContext.id) && (model.variables.bookmarkGroupIn === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_Group.contacts))) {
                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:ArlVme7rgES2cfQtqAi9Kg", callContext.id);
                        // Execute Action: SetPreloadObjectBookmarks
                        NavigationHandlerController.default.setPreloadObject$Action(OS.BuiltinFunctions.toObject(model.variables.bookmarkedItemsVar), callContext);
                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:L1nkVBwt4kW1LpuIRa1wGw", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:FJ+MK7EgZkizG0YFTLjhjg", callContext.id);
                    }

                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:NzhBkZi5H0eaU468XE5CvA", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.BackNavigationHandler$vars", [{
            name: "BackNavigationEvent",
            attrName: "backNavigationEventInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
            }
        }]);
        Controller.prototype._onHandle_BookmarkToggle$Action = function(bookmarkIdIn, currentPositionIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_BookmarkToggle");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.OnHandle_BookmarkToggle$vars"))());
            vars.value.bookmarkIdInLocal = bookmarkIdIn;
            vars.value.currentPositionInLocal = currentPositionIn;
            var deleteBookmarkByBookmarkIdVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.deleteBookmarkByBookmarkIdVar = deleteBookmarkByBookmarkIdVar;
            OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:qvB1ljjgbE2Sr_OcrCc14A:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.bRHJWasHOUikj6CUcclXCQ/ClientActions.qvB1ljjgbE2Sr_OcrCc14A:IGgZfv1GY5P6FPQ3Ieut0A", "Connect2_MyBookmarks_MUI", "OnHandle_BookmarkToggle", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:YlqFycWzWUqjQJiKj8yWeg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:HYILp0RPj0+kf+nuBC5dRA", callContext.id);
                // Execute Action: DeleteBookmarkByBookmarkId
                model.flush();
                return controller.deleteBookmarkByBookmarkId$ServerAction(vars.value.bookmarkIdInLocal, callContext).then(function(value) {
                    deleteBookmarkByBookmarkIdVar.value = value;
                }).then(function() {
                    return OS.Flow.executeSequence(function() {
                        if ((OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:33G7v1609kOPaT3RqljhyA", callContext.id) && deleteBookmarkByBookmarkIdVar.value.successOut)) {
                            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:5z4pep8dAEyNLBXozkguiw", callContext.id);
                            // Execute Action: ListRemove
                            OS.SystemActions.listRemove(model.variables.bookmarkedItemsVar, vars.value.currentPositionInLocal, callContext);
                            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:8H2hGA3rckauLYh4IbFnbQ", callContext.id);
                            // Execute Action: SendBookmarkedFeedbackMessage
                            Connect2_MyBookmarks_MUIController.default.sendBookmarkedFeedbackMessage$Action(false, callContext);
                            // Update Total
                            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:qffBLOsKTE+xjGtYCCRYHw", callContext.id);
                            // UpdatedTotal = UpdatedTotal - 1
                            model.variables.updatedTotalVar = model.variables.updatedTotalVar.sub(OS.BuiltinFunctions.integerToLongInteger(1));
                            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:Yf5+8sb1k0+YbFUqMAPDqg", callContext.id);
                            // Execute Action: Delete_LocalBookmarkByBookmarkId
                            model.flush();
                            return Connect2_LegacySharedController.default.delete_LocalBookmarkByBookmarkId$Action(vars.value.bookmarkIdInLocal, callContext).then(function() {
                                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:scYkCIuIQEOkB8vDZRIWKQ", callContext.id);
                                // Execute Action: PutCachedMyBookmarks
                                Connect2_LegacySharedController.default.putCachedMyBookmarks$Action(model.variables.bookmarkGroupIn, model.variables.bookmarkedItemsVar, callContext);
                                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:0cGohnTkhU6093cmtRV4Aw", callContext.id);
                            });
                        } else {
                            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:4d6pas4AvkiUitMWhhTqNA", callContext.id);
                            OS.FeedbackMessageService.showFeedbackMessage("Bookmark could not be removed. Please try again later.", /*Info*/ 0);
                            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:ZiWTkO4hAUuWQw3g2LUjjg", callContext.id);
                        }

                    });
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:qvB1ljjgbE2Sr_OcrCc14A", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:qvB1ljjgbE2Sr_OcrCc14A", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.OnHandle_BookmarkToggle$vars", [{
            name: "BookmarkId",
            attrName: "bookmarkIdInLocal",
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
        Controller.prototype._updateNote$Action = function(bookmarkIdIn, noteIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("UpdateNote");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.UpdateNote$vars"))());
            vars.value.bookmarkIdInLocal = bookmarkIdIn;
            vars.value.noteInLocal = noteIn;
            var new_UpdateBookmarkNoteVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.new_UpdateBookmarkNoteVar = new_UpdateBookmarkNoteVar;
            OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:vjOBusign0ubI1Mdqn+CDQ:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.bRHJWasHOUikj6CUcclXCQ/ClientActions.vjOBusign0ubI1Mdqn+CDQ:46OMiZT1WWoC9XXF_Jklpw", "Connect2_MyBookmarks_MUI", "UpdateNote", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:UAYC_AfH8USZdOBlSnMlUw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:WH5GMkJ+vE2PqMoaKOtn5A", callContext.id);
                // Execute Action: New_UpdateBookmarkNote
                model.flush();
                return controller.new_UpdateBookmarkNote$ServerAction(vars.value.bookmarkIdInLocal, OS.BuiltinFunctions.trim(vars.value.noteInLocal), callContext).then(function(value) {
                    new_UpdateBookmarkNoteVar.value = value;
                }).then(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:6z2Qw4AWa0O9NyRmPodSKw", callContext.id) && new_UpdateBookmarkNoteVar.value.successOut)) {
                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:sHgls3xzWUmRuFOe29d7Aw", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:qN1z1XoHmk2Ic2l4eJyfJA", callContext.id);
                        OS.FeedbackMessageService.showFeedbackMessage("There was an error, please try again.", /*Error*/ 3);
                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:l1vs00CCSUm7Pmok_jaObQ", callContext.id);
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:vjOBusign0ubI1Mdqn+CDQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:vjOBusign0ubI1Mdqn+CDQ", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.UpdateNote$vars", [{
            name: "BookmarkId",
            attrName: "bookmarkIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }, {
            name: "Note",
            attrName: "noteInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._handler_CloseShareSheet$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_CloseShareSheet");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:wJ2awvG1EUWoQu_aegNunA:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.bRHJWasHOUikj6CUcclXCQ/ClientActions.wJ2awvG1EUWoQu_aegNunA:ldXjj6H7G333WTRN_+FXjw", "Connect2_MyBookmarks_MUI", "Handler_CloseShareSheet", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:fAFBU+MA30iqBQf4dzNchw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:aQWbJBtYkEOPy7O2suqnrw", callContext.id);
                // IsShareOpen = False
                model.variables.isShareOpenVar = false;
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:aQWbJBtYkEOPy7O2suqnrw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // ShareableObject_Generic.ConnectEntityTypeId = NullTextIdentifier
                model.variables.shareableObject_GenericVar.connectEntityTypeIdAttr = OS.BuiltinFunctions.nullTextIdentifier();
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:3kPlEC8+E0esLVuNGlm0Yg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:wJ2awvG1EUWoQu_aegNunA", callContext.id);
            }

        };
        Controller.prototype._handler_EditNote$Action = function(in_BookmarkIn, isRecordDisabledIn, objectIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_EditNote");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.Handler_EditNote$vars"))());
            vars.value.in_BookmarkInLocal = in_BookmarkIn.clone();
            vars.value.isRecordDisabledInLocal = isRecordDisabledIn;
            vars.value.objectIdInLocal = objectIdIn;
            var openBookmarkNoteAddEditPopupVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.openBookmarkNoteAddEditPopupVar = openBookmarkNoteAddEditPopupVar;
            OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:KAREyb+ByUG3IRc09L1_XA:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.bRHJWasHOUikj6CUcclXCQ/ClientActions.KAREyb+ByUG3IRc09L1_XA:1WDU6Rt3fUaCBmC0MTCw+g", "Connect2_MyBookmarks_MUI", "Handler_EditNote", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:0JaHvvaFqkiH7T+RYbTaRA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:cMZqqsSJc0CSYI_F9Yokhg", callContext.id) && vars.value.isRecordDisabledInLocal)) {
                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:a6v6pEAiLUWxlXiO1XIlCg", callContext.id);
                        // Execute Action: UpgradeSubscription
                        return controller._upgradeSubscription$Action(vars.value.objectIdInLocal, callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:IvjTxk9sP0qlPxKBrRC8xw", callContext.id);
                        });
                    } else {
                        // EditingBookmarkNote
                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:zEvwz4o3aUSwTRzR_CqCGQ", callContext.id);
                        // EditingBookmarkNote = In_Bookmark
                        model.variables.editingBookmarkNoteVar = vars.value.in_BookmarkInLocal;
                        OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:xqc596aC50eKqw_D94k4hA", callContext.id);
                        // Execute Action: OpenBookmarkNoteAddEditPopup
                        model.flush();
                        return NavigationHandlerController.default.confirmAction$Action(idService.getId("BookmarkNoteAddEdit_Popup"), callContext).then(function(value) {
                            openBookmarkNoteAddEditPopupVar.value = value;
                        }).then(function() {
                            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:g0eTvinoQEOz0DjygQ+iQQ", callContext.id);
                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:KAREyb+ByUG3IRc09L1_XA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:KAREyb+ByUG3IRc09L1_XA", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.Handler_EditNote$vars", [{
            name: "In_Bookmark",
            attrName: "in_BookmarkInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new Connect2_LegacySharedModel.BookmarkNoteRec();
            },
            complexType: Connect2_LegacySharedModel.BookmarkNoteRec
        }, {
            name: "IsRecordDisabled",
            attrName: "isRecordDisabledInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "ObjectId",
            attrName: "objectIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }]);
        Controller.prototype._onInitialize$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnInitialize");
            callContext = controller.callContext(callContext);
            var wasCurrentViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.wasCurrentViewRestoredFromCacheJSResult = wasCurrentViewRestoredFromCacheJSResult;
            try {
                OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:Exdez40Qh0Op3YQCgOPTAQ:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.bRHJWasHOUikj6CUcclXCQ/ClientActions.Exdez40Qh0Op3YQCgOPTAQ:hoPLbvdFh4RyL0UMNU++dw", "Connect2_MyBookmarks_MUI", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:T_1Rcl4ODUORkU3z93TNxQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:si+fmqNO4E2aKh79Nv+m1Q", callContext.id);
                wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_MyBookmarks_MUI_MyBookmarksFlow_ScreenBlock_BookmarkGroup_mvc_controller_OnInitialize_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnInitialize", {
                    FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.OnInitialize$wasCurrentViewRestoredFromCacheJSResult"))();
                    jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
                    return jsNodeResult;
                }, {}, {});
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:s6qbXrzE3EeC3Fcx0bAEyA", callContext.id);
                // IsFromNavigationHistory = WasCurrentViewRestoredFromCache.FromCache
                model.variables.isFromNavigationHistoryVar = wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut;
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:jALx13xv8Ue1Yajq6WgyMw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:Exdez40Qh0Op3YQCgOPTAQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.OnInitialize$wasCurrentViewRestoredFromCacheJSResult", [{
            name: "FromCache",
            attrName: "fromCacheOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._resetSearch$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ResetSearch");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:+JJv3DImv0m0kKNGMoEa8w:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.bRHJWasHOUikj6CUcclXCQ/ClientActions.+JJv3DImv0m0kKNGMoEa8w:zCCovDbLg7u014srLq6WBg", "Connect2_MyBookmarks_MUI", "ResetSearch", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:dQSZQnd6hkaVSt30EVivxw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:22EGTOIoS0+pGSoHBmDKkA", callContext.id);
                // SearchString = ""
                model.variables.searchStringVar = "";
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:22EGTOIoS0+pGSoHBmDKkA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // SearchString_SearchDone = ""
                model.variables.searchString_SearchDoneVar = "";
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:m6WPNIfo3EGCKfrntnH2yg", callContext.id);
                // Execute Action: ToggleShowSearch
                controller._toggleShowSearch$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:Zrq4aKMsHkiceW5IOlG_jg", callContext.id);
                controller.safeExecuteJSNode(Connect2_MyBookmarks_MUI_MyBookmarksFlow_ScreenBlock_BookmarkGroup_mvc_controller_ResetSearch_SetScrollToTopJS, "SetScrollToTop", "ResetSearch", null, function($parameters) {}, {}, {});
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:VNQ4DYSsKkCTiS9Qrda5xA", callContext.id);
                controller.safeExecuteJSNode(Connect2_MyBookmarks_MUI_MyBookmarksFlow_ScreenBlock_BookmarkGroup_mvc_controller_ResetSearch_AsynchRefreshBookmarkDataJS, "AsynchRefreshBookmarkData", "ResetSearch", null, function($parameters) {}, {
                    RefreshBookmarkData: controller.clientActionProxies.refreshBookmarkData$Action
                }, {});
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:q6ZJAD15k023e77QcYN+pw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:+JJv3DImv0m0kKNGMoEa8w", callContext.id);
            }

        };
        Controller.prototype._upgradeSubscription$Action = function(objectIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("UpgradeSubscription");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.UpgradeSubscription$vars"))());
            vars.value.objectIdInLocal = objectIdIn;
            var confirmAction_UpgradeSubscriptionVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.confirmAction_UpgradeSubscriptionVar = confirmAction_UpgradeSubscriptionVar;
            OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:9Jb66lDs_0inYph_rk0gyg:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.bRHJWasHOUikj6CUcclXCQ/ClientActions.9Jb66lDs_0inYph_rk0gyg:J512zoIoR19qaX1avMIXpw", "Connect2_MyBookmarks_MUI", "UpgradeSubscription", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:Ex0EQMn5AkCK_8tT_aj8oA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:_nmFPAaJlkSrhXWYWrENEg", callContext.id);
                // Execute Action: AuditBookmarkSubscriptionEvent
                model.flush();
                return Connect2_LegacySharedController.default.auditBookmarkSubscriptionEvent$Action((((model.variables.bookmarkGroupIn === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_Group.contacts)) ? (vars.value.objectIdInLocal) : (OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier()))), (((model.variables.bookmarkGroupIn === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_Group.locations)) ? (vars.value.objectIdInLocal) : (OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier()))), "", (((model.variables.bookmarkGroupIn === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_Group.entities)) ? (vars.value.objectIdInLocal) : (OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier()))), callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:reav2HS7x06aIuA8_utLmg", callContext.id);
                    // Execute Action: ConfirmAction_UpgradeSubscription
                    model.flush();
                    return NavigationHandlerController.default.confirmAction$Action(idService.getId("FreeSubscriptionAlert"), callContext).then(function(value) {
                        confirmAction_UpgradeSubscriptionVar.value = value;
                    });
                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:0hfG3A0SykCJ+KIMrgqjvA", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:9Jb66lDs_0inYph_rk0gyg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:9Jb66lDs_0inYph_rk0gyg", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.UpgradeSubscription$vars", [{
            name: "ObjectId",
            attrName: "objectIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }]);
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
                OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:JX9b9E4f4kys4OLN3WPWrQ:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.bRHJWasHOUikj6CUcclXCQ/ClientActions.JX9b9E4f4kys4OLN3WPWrQ:YXfF9yfvhzvGpWv5rbUp0A", "Connect2_MyBookmarks_MUI", "OnClick_Search", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:h3wXrOo9M0mQTcc2hlh+Hg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:Xtgaj4Uf7kONJ9SMn_KtKQ", callContext.id);
                // Execute Action: ToggleShowSearch
                controller._toggleShowSearch$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:y6Hhlxsu3UCRZxGLqH83cg", callContext.id);
                controller.safeExecuteJSNode(Connect2_MyBookmarks_MUI_MyBookmarksFlow_ScreenBlock_BookmarkGroup_mvc_controller_OnClick_Search_FocusCursorJS, "FocusCursor", "OnClick_Search", {
                    InputWidgetID: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Input_BookmarkItems"), OS.DataTypes.DataTypes.Text)
                }, function($parameters) {}, {}, {});
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:LNRdT607Ek2+lesocmIbkw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:JX9b9E4f4kys4OLN3WPWrQ", callContext.id);
            }

        };

        Controller.prototype.refreshBookmarkData$Action = function(isScrollToTopIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._refreshBookmarkData$Action, callContext, isScrollToTopIn);

        };
        Controller.prototype.navigateTo_HouseholdsCarousel$Action = function(selectedHouseholdIdIn, itemPositionIn, itemsLengthIn, searchedStringIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._navigateTo_HouseholdsCarousel$Action, callContext, selectedHouseholdIdIn, itemPositionIn, itemsLengthIn, searchedStringIn);

        };
        Controller.prototype.onClickSearchClear$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClickSearchClear$Action, callContext);

        };
        Controller.prototype.onAfterFetch_GetAllBookmarksByGroup$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onAfterFetch_GetAllBookmarksByGroup$Action, callContext);

        };
        Controller.prototype.onHandle_ShareItem$Action = function(isShareToOthersIn, shareObjectTypeIdIn, objectIdIn, isRecordDisabledIn, connect_EntityTypeIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_ShareItem$Action, callContext, isShareToOthersIn, shareObjectTypeIdIn, objectIdIn, isRecordDisabledIn, connect_EntityTypeIdIn);

        };
        Controller.prototype.handler_OnSaveBookmarkNote$Action = function(in_BookmarkIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_OnSaveBookmarkNote$Action, callContext, in_BookmarkIn);

        };
        Controller.prototype.handler_ConfirmDeleteNote$Action = function(bookmarkIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_ConfirmDeleteNote$Action, callContext, bookmarkIdIn);

        };
        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.toggleShowSearch$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._toggleShowSearch$Action, callContext);

        };
        Controller.prototype.navigateTo_LocalityDetail$Action = function(localityIdIn, localityNameIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._navigateTo_LocalityDetail$Action, callContext, localityIdIn, localityNameIn);

        };
        Controller.prototype.navigateTo_CommunityBusinessDetail$Action = function(communityBusinessIdIn, itemPositionIn, objectTypeIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._navigateTo_CommunityBusinessDetail$Action, callContext, communityBusinessIdIn, itemPositionIn, objectTypeIn);

        };
        Controller.prototype.handler_AddNote$Action = function(bookmarkIdIn, isRecordDisabledIn, objectIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_AddNote$Action, callContext, bookmarkIdIn, isRecordDisabledIn, objectIdIn);

        };
        Controller.prototype.onKeyup_SearchBookmarkItems$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onKeyup_SearchBookmarkItems$Action, callContext);

        };
        Controller.prototype.onClick_BookmarkedItem$Action = function(bookmarkItemIdIn, currentRowNumberIn, currentListWidgetIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_BookmarkedItem$Action, callContext, bookmarkItemIdIn, currentRowNumberIn, currentListWidgetIdIn);

        };
        Controller.prototype.preloadListSource_Bookmarks$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._preloadListSource_Bookmarks$Action, callContext);

        };
        Controller.prototype.navigateTo_SubdivisionDetail$Action = function(subdivisionIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._navigateTo_SubdivisionDetail$Action, callContext, subdivisionIdIn);

        };
        Controller.prototype.handler_DeleteNote$Action = function(bookmarkIdIn, isRecordDisabledIn, objectIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_DeleteNote$Action, callContext, bookmarkIdIn, isRecordDisabledIn, objectIdIn);

        };
        Controller.prototype.backNavigationHandler$Action = function(backNavigationEventIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._backNavigationHandler$Action, callContext, backNavigationEventIn);

        };
        Controller.prototype.onHandle_BookmarkToggle$Action = function(bookmarkIdIn, currentPositionIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_BookmarkToggle$Action, callContext, bookmarkIdIn, currentPositionIn);

        };
        Controller.prototype.updateNote$Action = function(bookmarkIdIn, noteIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._updateNote$Action, callContext, bookmarkIdIn, noteIn);

        };
        Controller.prototype.handler_CloseShareSheet$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_CloseShareSheet$Action, callContext);

        };
        Controller.prototype.handler_EditNote$Action = function(in_BookmarkIn, isRecordDisabledIn, objectIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_EditNote$Action, callContext, in_BookmarkIn, isRecordDisabledIn, objectIdIn);

        };
        Controller.prototype.onInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

        };
        Controller.prototype.resetSearch$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._resetSearch$Action, callContext);

        };
        Controller.prototype.upgradeSubscription$Action = function(objectIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._upgradeSubscription$Action, callContext, objectIdIn);

        };
        Controller.prototype.onClick_Search$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_Search$Action, callContext);

        };
        Controller.prototype.navigateTo_Subdivision$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.navigateTo_ShareObject$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.navigateTo_CommunityBusinessCarousel$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.navigateTo_Locality$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.navigateTo_HouseholdCarousel$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:CBvOGFy8j0+xPUeAWREtQw:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw:9WxoUPdIIKPcyGMtXvfZqg", "Connect2_MyBookmarks_MUI", "MyBookmarksFlow", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:bRHJWasHOUikj6CUcclXCQ:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.bRHJWasHOUikj6CUcclXCQ:ywhqhz+AGZL49VOf_7hi7Q", "Connect2_MyBookmarks_MUI", "ScreenBlock_BookmarkGroup", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:bRHJWasHOUikj6CUcclXCQ", callContext.id);
            OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:CBvOGFy8j0+xPUeAWREtQw", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "MyBookmarksFlow/ScreenBlock_BookmarkGroup On Initialize");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "MyBookmarksFlow/ScreenBlock_BookmarkGroup On Ready");
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
            return Connect2_MyBookmarks_MUIController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, Connect2_MyBookmarks_MUILanguageResources);
});
define("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.mvc$controller.RefreshBookmarkData.SetScrollToTopJS", [], function() {
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
define("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.mvc$controller.Handler_OnSaveBookmarkNote.UpdateNoteJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $actions.UpdateNote($parameters.BookmarkId, $parameters.Note);
    };
});
define("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.mvc$controller.OnKeyup_SearchBookmarkItems.CheckForEnterKeyJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        if (event.keyCode == 13) {
            $parameters.WasSearchDone = true;
            event.target.blur();
        } else {
            $parameters.WasSearchDone = false;
        }
    };
});
define("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.mvc$controller.PreloadListSource_Bookmarks.WasCurrentViewRestoredFromCacheJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
    };
});
define("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.mvc$controller.OnInitialize.WasCurrentViewRestoredFromCacheJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
    };
});
define("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.mvc$controller.ResetSearch.AsynchRefreshBookmarkDataJS", [], function() {
    return function($actions, $roles, $public) {
        window.setTimeout(function() {
            $actions.RefreshBookmarkData(true)
        }, 0)
    };
});
define("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.mvc$controller.ResetSearch.SetScrollToTopJS", [], function() {
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
define("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.mvc$controller.OnClick_Search.FocusCursorJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        setTimeout(function() {
            var input = document.getElementById($parameters.InputWidgetID);
            if (input) {
                input.focus();
            }
        }, 200)
    };
});

define("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "MXdYw5H1wEy19bfYHFMAXg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isScrollToTopInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "GaLtozDEH0CE9VI7YY7eMQ": {
            getter: function(varBag, idService) {
                return varBag.allExceptionsVar.value;
            }
        },
        "4X0zcL8D1k67UqRxPUz1+A": {
            getter: function(varBag, idService) {
                return varBag.setScrollToTopJSResult.value;
            }
        },
        "ktyNrV33VUafMYLuw_r5tg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.householdCarouselPreloadingVar;
            }
        },
        "9+m0uWH8ZUCQPJMiL5aUEw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.selectedHouseholdIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "MZRaacl1RE+NbzQWoKfwvg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.itemPositionInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "nAb0NEHs_0+Pg0x0n1YAHA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.itemsLengthInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "L2PP8SwDFkS5fGbeXrF5AQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.searchedStringInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "7vn1Wp28yk2blRprEzWRKg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isShareToOthersInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "kV47RkYNb0KtvQ2ZO9G59w": {
            getter: function(varBag, idService) {
                return varBag.vars.value.shareObjectTypeIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "remH8B4vKE6Y5X78P3Fr1Q": {
            getter: function(varBag, idService) {
                return varBag.vars.value.objectIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "CpIqcSMRZEGCu5AQbEId1g": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isRecordDisabledInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "_+b6C0EGp02TkqOtFDt+Cg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.connect_EntityTypeIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "dJkKtuZfE0mP7owBwpsy2Q": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_BookmarkInLocal;
            }
        },
        "bgA8J6Cs9UqG1j76McAJNQ": {
            getter: function(varBag, idService) {
                return varBag.listIndexOfVar.value;
            }
        },
        "BFLmUp_e9ESUKpZhTh4gKw": {
            getter: function(varBag, idService) {
                return varBag.updateNoteJSResult.value;
            }
        },
        "cheASWrDc0uMm9Uxbyb32Q": {
            getter: function(varBag, idService) {
                return varBag.vars.value.bookmarkIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "6hfbOG6+ZkuWFosgqpHDIQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.localityIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "t0qPekKKo02zldGR6HMluw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.localityNameInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "VbOQVySfjEqgpFlheZRYFQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.communityBusinessCarouselPreloadingVar;
            }
        },
        "U3GoMFgv0U2qaDnsG6CNNQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.communityBusinessIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "h4H59urlzEaSlgW4Dv9Vzw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.itemPositionInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "Tw2lfY+DU02Qw+1RjSRslQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.objectTypeInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "o+bZpWI19ESAjgPaFKgGkw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.bookmarkIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "mPu8MuVQ5Em+TU6shiJIqw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isRecordDisabledInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "27yl5qguuUyQ0MR9ou2Lcw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.objectIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "vvPCAzuehkOG8AZ8WTe0dA": {
            getter: function(varBag, idService) {
                return varBag.checkForEnterKeyJSResult.value;
            }
        },
        "En1JyAkICU61FxgOTl_Rhw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.selectedObjectIdVar;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "LsrjEiL3Dk2+OoeqmVUaNQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.bookmarkItemIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "Liw5Wx4GSkm+VUPac_M2Rw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.currentRowNumberInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "DvA2xxvji0CFX0QDi0Pb1w": {
            getter: function(varBag, idService) {
                return varBag.vars.value.currentListWidgetIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "vLaiYC5US0WbjVVaL4KccQ": {
            getter: function(varBag, idService) {
                return varBag.getBookmarkByIdVar.value;
            }
        },
        "xlBKIDF2w0iT0afUPybbrQ": {
            getter: function(varBag, idService) {
                return varBag.getCachedMyBookmarksVar.value;
            }
        },
        "cKVd45WBQUuRdwBouChg+Q": {
            getter: function(varBag, idService) {
                return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
            }
        },
        "x71d6jm2AkaAl_kcuncxsw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.subdivisionIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "TH11e1ef1ECE9e9JUpwW7g": {
            getter: function(varBag, idService) {
                return varBag.vars.value.bookmarkIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "Pzi8Lw4qskqKDx3OL_o9Ug": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isRecordDisabledInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "GHhi8hsARUqCv77Tf_VQ0A": {
            getter: function(varBag, idService) {
                return varBag.vars.value.objectIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "moxfuiwG+kuVkphvjtibUg": {
            getter: function(varBag, idService) {
                return varBag.openDeleteNotePopupVar.value;
            }
        },
        "4BbxEQIOQUaUhEwwOn8ixA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.backNavigationEventInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Object
        },
        "KmlxiJM+YEWcDg3kaHbX4w": {
            getter: function(varBag, idService) {
                return varBag.vars.value.bookmarkIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "_DGPi_wuUk6_kDa2FzDJuA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.currentPositionInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "HYILp0RPj0+kf+nuBC5dRA": {
            getter: function(varBag, idService) {
                return varBag.deleteBookmarkByBookmarkIdVar.value;
            }
        },
        "KsT6s9RY2kad7Eu19J7iLw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.bookmarkIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "Dgo9pgO1CkaefPUiEqovEg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.noteInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "WH5GMkJ+vE2PqMoaKOtn5A": {
            getter: function(varBag, idService) {
                return varBag.new_UpdateBookmarkNoteVar.value;
            }
        },
        "RkYqbeCT50ybdvDgdynTEQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_BookmarkInLocal;
            }
        },
        "Gqa9GeqjxkqZWXnWbUryMA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isRecordDisabledInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "oQOSFnXH3UabtEBLn7AxJA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.objectIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "xqc596aC50eKqw_D94k4hA": {
            getter: function(varBag, idService) {
                return varBag.openBookmarkNoteAddEditPopupVar.value;
            }
        },
        "si+fmqNO4E2aKh79Nv+m1Q": {
            getter: function(varBag, idService) {
                return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
            }
        },
        "VNQ4DYSsKkCTiS9Qrda5xA": {
            getter: function(varBag, idService) {
                return varBag.asynchRefreshBookmarkDataJSResult.value;
            }
        },
        "Zrq4aKMsHkiceW5IOlG_jg": {
            getter: function(varBag, idService) {
                return varBag.setScrollToTopJSResult.value;
            }
        },
        "Xg_2Mz8qQEur9DBz77cN+g": {
            getter: function(varBag, idService) {
                return varBag.vars.value.objectIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "reav2HS7x06aIuA8_utLmg": {
            getter: function(varBag, idService) {
                return varBag.confirmAction_UpgradeSubscriptionVar.value;
            }
        },
        "y6Hhlxsu3UCRZxGLqH83cg": {
            getter: function(varBag, idService) {
                return varBag.focusCursorJSResult.value;
            }
        },
        "xnRJZQCyQkWmn+dpSgLAqQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.bookmarkedItemsVar;
            }
        },
        "oqpVCKbtn0uJ+wgsnc83dw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.showSearchVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "q_xAtf_9mkyN3XSlohFbmQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.searchStringVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "7Ea3tz3uvE+O7f1CyTYpVQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.sortColumnVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "tUb1wgdR6UeiF5DV867kUw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isFetchingBookmarksVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "+T5gA+cj3EKYdQtX6M7FJQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.updatedTotalVar;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "q_tbHJzVSU+_i+DeGC7LrQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.wasSearchDoneVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "b0qxnqdju0Cat8hiZD0XEw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.searchString_SearchDoneVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "+mpeGoFzzkGiPgXo_oKCfA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isFromNavigationHistoryVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "3Ez8Ir+CX0mYAOQXueYUjg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.editingBookmarkNoteVar;
            }
        },
        "xhP_aX409E65r6FqciPoPw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isShareOpenVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "MuzCCjGRjUm09F1FLc4q3g": {
            getter: function(varBag, idService) {
                return varBag.model.variables.shareableObjectIdVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "ZiIZf0INA0OzlPrdcjMkrw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.shareableObject_GenericVar;
            }
        },
        "WBmlEAgo_kSMHcqt+secTA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.type_ShareObjectIdVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "nlmI8OMUyUqTyEzXDGK6Tg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.bookmarkGroupIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "Wfc2uDMEqUOXE7BtjrLtcA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.getAllBookmarksByGroupDataAct;
            }
        },
        "pszzi1ZiIUuXttqZSSPh8g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu"));
                })(varBag.model, idService);
            }
        },
        "yw5jaqSFJUKpd2PgpPpVkw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu"));
                })(varBag.model, idService);
            }
        },
        "6iqZVQTxhkCKeH8jmoLIlw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderLeft"));
                })(varBag.model, idService);
            }
        },
        "IVIwgIFH_U2Dxfb6OyrnIg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Title"));
                })(varBag.model, idService);
            }
        },
        "iSdcukp4JEmp8gIZ9Z0vzA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ShowTrue_Search"));
                })(varBag.model, idService);
            }
        },
        "kzybRbRDqkuLeSV5_Y3qcQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderRight"));
                })(varBag.model, idService);
            }
        },
        "+XyJ7pFEw0yiFPUna1zZDQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ShowTrue_SearchIcon"));
                })(varBag.model, idService);
            }
        },
        "DtoswQfqFkKt6gbgwNFlUA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderContent"));
                })(varBag.model, idService);
            }
        },
        "8qbnOmcnmUGEt2qTrpOaGg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "XE1H_d8jaUWH2jCd7n7EGg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsBookmarkDataFetched_Or_FromBackNavigation"));
                })(varBag.model, idService);
            }
        },
        "NDeNEJVijUqBEbMoV7414w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HasResults"));
                })(varBag.model, idService);
            }
        },
        "VuIl21e6W06Kbfb2enYsIw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsContacts"));
                })(varBag.model, idService);
            }
        },
        "LtfpbGEf6EuH5XY9MmO88A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("List_Contacts"));
                })(varBag.model, idService);
            }
        },
        "yrBgM_cCPUiHO7lpH90BPA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Household_List_Item"));
                })(varBag.model, idService);
            }
        },
        "TVoWcqbSikKcA2KdxBE1OA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ImagePlaceholder"));
                })(varBag.model, idService);
            }
        },
        "S4NQ7tAv3kuBRQkWAm2JJQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Title_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "syEOqDQtiUWI0FREhv7zlA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Household_Title"));
                })(varBag.model, idService);
            }
        },
        "qWE1VwAI5kSW2hsLxx4QGQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Description_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "QKvUPXLgM0uKNiwHvFwK0g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Household_Description"));
                })(varBag.model, idService);
            }
        },
        "YYyFZvnzikOZh25sDy1cPg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Tag_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "R9E6CMg1c0qIZxXCN4OT5g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Household_Tag"));
                })(varBag.model, idService);
            }
        },
        "IvkfRE7JSkOF1B1ev4cS8g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Result_Item_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "ByX67YvBd0qMOV0YuCts6A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Anchor_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "KdqH3x_IzUWgwIlfo_es2g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BookmarkNote"));
                })(varBag.model, idService);
            }
        },
        "+isC6xBMVUaHGOOuNBIKkQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsLocations"));
                })(varBag.model, idService);
            }
        },
        "LLblV5WWsUOWbu8tp7AOiA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("List_Locations"));
                })(varBag.model, idService);
            }
        },
        "4W1hkt6hCUGlFvAe+npvfw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BookmarkList_Locations_Container"));
                })(varBag.model, idService);
            }
        },
        "GdrEjwUejE2+FVgfDzh_BA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsLocality"));
                })(varBag.model, idService);
            }
        },
        "VcvzzcankkeyWW80Ttnr6A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("LocalitiesList_Item"));
                })(varBag.model, idService);
            }
        },
        "Tek52nepMEGQFbsgDLOY9Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Title_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "bjCRVZ41_k2aH0QYTV0GMA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Locality_Title"));
                })(varBag.model, idService);
            }
        },
        "QqesFeB8K0+hUFdWBwLSzA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Description_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "uxiUigNEdE+tz13RW7Atng": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Tag_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "emMA6ox2s0yaezQc4RHnmw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Locality_Tag"));
                })(varBag.model, idService);
            }
        },
        "u0Uf0j2ubEqvecMpLBBajg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Result_Item_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "4_cilDxyC0OqacnISQMZBQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Anchor_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "gJzqbm1q2UibOb_1NKCIpg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BookmarkNote"));
                })(varBag.model, idService);
            }
        },
        "2ais+db6tUulE71NLlgdYg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("WaitingForFeatureFlag2"));
                })(varBag.model, idService);
            }
        },
        "QWvYaZoJhU2_Xg1TclChOA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsSubdivision"));
                })(varBag.model, idService);
            }
        },
        "l7TBY1zbt0OQ0lB57ZYwIQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Subdivisions_List_Item"));
                })(varBag.model, idService);
            }
        },
        "yD_VJmJaU0Wo2zPzsfNInQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ImagePlaceholder"));
                })(varBag.model, idService);
            }
        },
        "4H0IQy2Q9UyE4AMFb6KXWQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Title_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "sKjrUw7m5kOgBvFC9X7G9A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Subdivision_Title"));
                })(varBag.model, idService);
            }
        },
        "rADuc0ggCkCaz8tG6Avkew": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Description_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "8nyr_6bZgU+9g0wkBANG8w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Tag_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "WfkITogehUql812X6W82HQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Subdivision_Tag"));
                })(varBag.model, idService);
            }
        },
        "1eO4WjWYJEKQwL6RWOZbeg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Result_Item_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "vB7NqiVXc0O7lNqyYb8zVw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Anchor_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "hMOgm8HL1Umr6gbtMoPSTQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BookmarkNote"));
                })(varBag.model, idService);
            }
        },
        "n0PADaVQukW0zCVbSz14Pg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("WaitingForFeatureFlag3"));
                })(varBag.model, idService);
            }
        },
        "givKLBSPcEuJwYNEoCDDbA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsEntities"));
                })(varBag.model, idService);
            }
        },
        "+ujrON87pUaP3QTDNRRDNw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("List_Entities"));
                })(varBag.model, idService);
            }
        },
        "5ogRxHxmFk+ClV8+iQylIg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Entity_List_Item"));
                })(varBag.model, idService);
            }
        },
        "82xktVW6f0a6rx1F7xH1sg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ImagePlaceholder"));
                })(varBag.model, idService);
            }
        },
        "f2xMYJxDYEy21RH0NWXg0w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Title_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "KoRsZGrpYEq3edRsr2DdDg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Entity_Title"));
                })(varBag.model, idService);
            }
        },
        "MjjCpmqqgUqKdPpVy3noDQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Description_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "dqQAWK+GIEqIquV5JbQ7FQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Tag_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "msE3LgP2uk2ycZeCbSRH7g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Entity_Tag"));
                })(varBag.model, idService);
            }
        },
        "NNxfOVNz6UyWo6weVlJj7Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Result_Item_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "CEF_+01AdUOuLvVnuaNJfg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Anchor_Placeholder"));
                })(varBag.model, idService);
            }
        },
        "07jcYPSC7UOoMz5Zz82MOg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BookmarkNote"));
                })(varBag.model, idService);
            }
        },
        "aQpd0DvFTk2jwkucKPrp7Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("WaitingForFeatureFlag4"));
                })(varBag.model, idService);
            }
        },
        "SeUrMkBt+0SD1wPZkSKQmA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BookmarkNoteAddEdit_Popup"));
                })(varBag.model, idService);
            }
        },
        "dSg+7F257UutWafWMLJK3A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("DeleteNote_Popup"));
                })(varBag.model, idService);
            }
        },
        "oDynwtfF1Ui_BiSwkYIYsw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("FreeSubscriptionAlert"));
                })(varBag.model, idService);
            }
        },
        "kE7sm_eR4EWHkycaZKkJjw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("NotFromSearch"));
                })(varBag.model, idService);
            }
        },
        "hf4DWrfpMkeNd5wXeACjxw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("TitlePlaceholder"));
                })(varBag.model, idService);
            }
        },
        "FZleoSTylEqw85H4cj1x4Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("TextPlaceholder"));
                })(varBag.model, idService);
            }
        },
        "qxDubk55YUOpzzTk7cO7vQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder1"));
                })(varBag.model, idService);
            }
        },
        "ZuX19hZAFU2nWrNizQD7sQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder2"));
                })(varBag.model, idService);
            }
        },
        "eIHdCWf2uUGFl4oFk3lNeQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder3"));
                })(varBag.model, idService);
            }
        },
        "ojjJ4k+Ey0OsnHR_UEVZLA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BottomBar"));
                })(varBag.model, idService);
            }
        },
        "j_1icOb2OUG4666yr0pkrA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BottomBar"));
                })(varBag.model, idService);
            }
        },
        "dyDj1fx6FUC7iEkGlYUnYg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements"));
                })(varBag.model, idService);
            }
        },
        "fH3sdOB70Eiw+APs80JtnA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements"));
                })(varBag.model, idService);
            }
        },
        "7wF3_sLbKUqL0fJz6341qA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_ShareableObject"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});