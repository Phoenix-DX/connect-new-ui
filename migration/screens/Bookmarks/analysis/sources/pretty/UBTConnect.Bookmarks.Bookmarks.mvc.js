define("UBTConnect.Bookmarks.Bookmarks.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "Connect_Bookmarks_CS.model", "NavigationHandler.controller", "UBTConnect.controller", "UBTConnectLibrary.Layouts.Layout_MainPages_FixedTitle.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnect.App_Common_Blocks.App_NotificationIcon.mvc$model", "UBTConnectLibrary.ConnectPatterns.Input.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.ConnectPatterns.Horizontal_Filter_TagList.mvc$model", "UBTConnect.App_CommonBlocks_Filter.FilterSheet_Icon_Label.mvc$model", "UBTConnect.Bookmarks.Bookmarks_Card_List.mvc$model", "UBTConnect.App_Common.BottomBarMenu.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "UBTConnect.Bookmarks.Bookmarks_FilterSheet.mvc$model", "UBTConnectLibrary.model$TagRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$TagList", "Connect_Bookmarks_CS.model$Bookmark_FilterRec", "UBTConnect.referencesHealth$Connect_Bookmarks_CS", "Connect_Bookmarks_CS.model$UI_Bookmark_CardItemRec", "UBTConnect.model$UI_Bookmark_CardItemList", "UBTConnectLibrary.model$SearchInputRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "Connect_Bookmarks_CS.model$UI_Bookmark_Card_ContentRec", "Connect_Bookmarks_CS.model$UI_Bookmark_Card_SourceHeaderRec", "UBTConnectLibrary.model$NotesRec", "UBTConnectLibrary.model$Note_ItemRec", "UBTConnect.model$Note_ItemList", "NavigationHandler.controller$SetPreloadObject", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect.model$SwipeActionLongIntegerRecordList", "UBTConnect.model$CarouselPreloadedHouseholdsRec", "UBTConnect.model$PreloadedCarouselRec", "UBTConnect.controller$ScrollTop", "UBTConnect.controller$GetBookmarks_Pills", "UBTConnect.controller$GetBookmarks_FilterYear", "Connect_Bookmarks_CS.model$UI_BookmarksRec"], function(OutSystems, UBTConnectModel, UBTConnectLibraryModel, Connect_Bookmarks_CSModel, NavigationHandlerController, UBTConnectController, UBTConnectLibrary_Layouts_Layout_MainPages_FixedTitle_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, UBTConnect_App_Common_Blocks_App_NotificationIcon_mvcModel, UBTConnectLibrary_ConnectPatterns_Input_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_ConnectPatterns_Horizontal_Filter_TagList_mvcModel, UBTConnect_App_CommonBlocks_Filter_FilterSheet_Icon_Label_mvcModel, UBTConnect_Bookmarks_Bookmarks_Card_List_mvcModel, UBTConnect_App_Common_BottomBarMenu_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel, UBTConnect_Bookmarks_Bookmarks_FilterSheet_mvcModel) {
    var OS = OutSystems.Internal;

    var GetBookmarksDataActRec = (function(_super) {
        __extends(GetBookmarksDataActRec, _super);

        function GetBookmarksDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        GetBookmarksDataActRec.attributesToDeclare = function() {
            return [
                this.attr("Out_Bookmarks", "out_BookmarksOut", "Out_Bookmarks", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect_Bookmarks_CSModel.UI_BookmarksRec());
                }, true, Connect_Bookmarks_CSModel.UI_BookmarksRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        GetBookmarksDataActRec.fromStructure = function(str) {
            return new GetBookmarksDataActRec(new GetBookmarksDataActRec.RecordClass({
                out_BookmarksOut: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        GetBookmarksDataActRec.init();
        return GetBookmarksDataActRec;
    })(OS.Model.DataSourceRecord);

    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("HeaderIsScrolled", "headerIsScrolledVar", "HeaderIsScrolled", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("BookmarkPills", "bookmarkPillsVar", "BookmarkPills", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.TagList());
                }, false, UBTConnectModel.TagList),
                this.attr("Bookmarks_Filter", "bookmarks_FilterVar", "Bookmarks_Filter", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect_Bookmarks_CSModel.Bookmark_FilterRec());
                }, false, Connect_Bookmarks_CSModel.Bookmark_FilterRec),
                this.attr("HasFiltersApplied", "hasFiltersAppliedVar", "HasFiltersApplied", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("Filter_BottomSheetId", "filter_BottomSheetIdVar", "Filter_BottomSheetId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("BottomSheetId_Filter_IsLoaded", "bottomSheetId_Filter_IsLoadedVar", "BottomSheetId_Filter_IsLoaded", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("BottomSheetId_Filter_ShowSubscription", "bottomSheetId_Filter_ShowSubscriptionVar", "BottomSheetId_Filter_ShowSubscription", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("Filter_BookmarksDefaultState", "filter_BookmarksDefaultStateVar", "Filter_BookmarksDefaultState", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect_Bookmarks_CSModel.Bookmark_FilterRec());
                }, false, Connect_Bookmarks_CSModel.Bookmark_FilterRec),
                this.attr("Years", "yearsVar", "Years", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                }, false, OS.DataTypes.TextList),
                this.attr("PageSize", "pageSizeVar", "PageSize", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 20;
                }, false),
                this.attr("PageNumber", "pageNumberVar", "PageNumber", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 1;
                }, false),
                this.attr("MaxRecords", "maxRecordsVar", "MaxRecords", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("Bookmarks_List", "bookmarks_ListVar", "Bookmarks_List", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_Bookmark_CardItemList());
                }, false, UBTConnectModel.UI_Bookmark_CardItemList),
                this.attr("ResetPillsValue", "resetPillsValueVar", "ResetPillsValue", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return true;
                }, false),
                this.attr("PillsLoaded", "pillsLoadedVar", "PillsLoaded", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("Bookmarks_Loading", "bookmarks_LoadingVar", "Bookmarks_Loading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("GetBookmarks", "getBookmarksDataAct", "getBookmarksDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new GetBookmarksDataActRec());
                }, true, GetBookmarksDataActRec)
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
                    Model._hasValidationWidgetsValue = ((((((((((UBTConnectLibrary_Layouts_Layout_MainPages_FixedTitle_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_Blocks_App_NotificationIcon_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Input_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Horizontal_Filter_TagList_mvcModel.hasValidationWidgets) || UBTConnect_App_CommonBlocks_Filter_FilterSheet_Icon_Label_mvcModel.hasValidationWidgets) || UBTConnect_Bookmarks_Bookmarks_Card_List_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_BottomBarMenu_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets) || UBTConnect_Bookmarks_Bookmarks_FilterSheet_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {};
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Bookmarks.Bookmarks");
});
define("UBTConnect.Bookmarks.Bookmarks.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "Connect_Bookmarks_CS.model", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Bookmarks.Bookmarks.mvc$model", "UBTConnect.Bookmarks.Bookmarks.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.Layouts.Layout_MainPages_FixedTitle.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnect.App_Common_Blocks.App_NotificationIcon.mvc$view", "UBTConnectLibrary.ConnectPatterns.Input.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.ConnectPatterns.Horizontal_Filter_TagList.mvc$view", "UBTConnect.App_CommonBlocks_Filter.FilterSheet_Icon_Label.mvc$view", "UBTConnect.Bookmarks.Bookmarks_Card_List.mvc$view", "UBTConnect.App_Common.BottomBarMenu.mvc$view", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "UBTConnect.Bookmarks.Bookmarks_FilterSheet.mvc$view", "UBTConnectLibrary.model$TagRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$TagList", "Connect_Bookmarks_CS.model$Bookmark_FilterRec", "UBTConnect.referencesHealth$Connect_Bookmarks_CS", "Connect_Bookmarks_CS.model$UI_Bookmark_CardItemRec", "UBTConnect.model$UI_Bookmark_CardItemList", "UBTConnectLibrary.model$SearchInputRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "Connect_Bookmarks_CS.model$UI_Bookmark_Card_ContentRec", "Connect_Bookmarks_CS.model$UI_Bookmark_Card_SourceHeaderRec", "UBTConnectLibrary.model$NotesRec", "UBTConnectLibrary.model$Note_ItemRec", "UBTConnect.model$Note_ItemList", "NavigationHandler.controller$SetPreloadObject", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect.model$SwipeActionLongIntegerRecordList", "UBTConnect.model$CarouselPreloadedHouseholdsRec", "UBTConnect.model$PreloadedCarouselRec", "UBTConnect.controller$ScrollTop", "UBTConnect.controller$GetBookmarks_Pills", "UBTConnect.controller$GetBookmarks_FilterYear", "Connect_Bookmarks_CS.model$UI_BookmarksRec"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, Connect_Bookmarks_CSModel, NavigationHandlerController, React, OSView, UBTConnect_Bookmarks_Bookmarks_mvc_model, UBTConnect_Bookmarks_Bookmarks_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_Layouts_Layout_MainPages_FixedTitle_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnect_App_Common_Blocks_App_NotificationIcon_mvc_view, UBTConnectLibrary_ConnectPatterns_Input_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_Horizontal_Filter_TagList_mvc_view, UBTConnect_App_CommonBlocks_Filter_FilterSheet_Icon_Label_mvc_view, UBTConnect_Bookmarks_Bookmarks_Card_List_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, UBTConnect_Bookmarks_Bookmarks_FilterSheet_mvc_view) {
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
        View.displayName = "Bookmarks.Bookmarks";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_Layouts_Layout_MainPages_FixedTitle_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnect_App_Common_Blocks_App_NotificationIcon_mvc_view, UBTConnectLibrary_ConnectPatterns_Input_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_Horizontal_Filter_TagList_mvc_view, UBTConnect_App_CommonBlocks_Filter_FilterSheet_Icon_Label_mvc_view, UBTConnect_Bookmarks_Bookmarks_Card_List_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, UBTConnect_Bookmarks_Bookmarks_FilterSheet_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Bookmarks_Bookmarks_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Bookmarks_Bookmarks_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function() {
                return "Bookmarks";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_Layouts_Layout_MainPages_FixedTitle_mvc_view, {
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

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Layouts/Layout_MainPages_FixedTitle OnHeaderScrolled");
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
                        return ["Bookmarks"];
                    }),
                    placeholder_Header_Right: new PlaceholderContent(function() {
                        return [$if(model.variables.headerIsScrolledVar, false, this, function() {
                            return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                inputs: {
                                    In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.search,
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
                                            controller.iconClick_SearchIcon$Action(controller.callContext(eventHandlerContext));
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
                            })];
                        }, function() {
                            return [];
                        }), React.createElement(UBTConnect_App_Common_Blocks_App_NotificationIcon_mvc_view, {
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
                                uuid: "2",
                                alias: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    }),
                    placeholder_Header_Input: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_Input_mvc_view, {
                            inputs: {
                                In_Options: model.getCachedValue(idService.getId("CItCy3WX5UysqH50GbtRCw.In_Options"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.SearchInputRec();
                                        rec.maxLengthAttr = 50;
                                        rec.initalStringAttr = model.variables.bookmarks_FilterVar.searchTextAttr;
                                        rec.searchPromptAttr = "Search";
                                        rec.debounce_DelayMSAttr = 200;
                                        rec.borderRadiusAttr = UBTConnectModel.staticEntities.shape.rounded;
                                        rec.enableAutocompleteHTMLAttr = false;
                                        return rec;
                                    }();
                                }, function() {
                                    return model.variables.bookmarks_FilterVar.searchTextAttr;
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
                                        controller.handler_SearchOnChange$Action(event_CurrentStringIn, controller.callContext(eventHandlerContext));
                                    }, function() {
                                        controller.popDebuggerContext(eventHandlerContext);
                                    });

                                    ;
                                },
                                event_Submit$Action: function(event_SubmittedStringIn) {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Input Event_Submit");
                                            return controller.handler_SearchOnSubmit$Action(controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });
                                    });;
                                },
                                event_ClearString$Action: function() {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Input Event_ClearString");
                                            return controller.handler_SearchOnClear$Action(controller.callContext(eventHandlerContext));
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
                                uuid: "3",
                                alias: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    }),
                    placeholder_Header_Input_Icon: PlaceholderContent.Empty,
                    headerContent: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                            inputs: {
                                ExtendedClasses: "background-neutral-0",
                                Options: model.getCachedValue(idService.getId("FilterPills.Options"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                        rec.paddingSizeAttr = function() {
                                            var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                            rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.extraSmall;
                                            rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
                                            return rec;
                                        }();
                                        rec.marginSizeAttr = function() {
                                            var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                            rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
                                            return rec;
                                        }();
                                        rec.displayOptionsAttr = function() {
                                            var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
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
                                name: "FilterPills",
                                alias: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(UBTConnectLibrary_ConnectPatterns_Horizontal_Filter_TagList_mvc_view, {
                                        inputs: {
                                            In_TagToggleList: model.variables.bookmarkPillsVar,
                                            In_TagsLoading: (!(model.variables.pillsLoadedVar) && model.variables.bookmarks_LoadingVar),
                                            In_IsSingleSelection: true
                                        },
                                        events: {
                                            _handleError: function(ex) {
                                                controller.handleError(ex);
                                            },
                                            changed$Action: function(updatedTagListIn) {
                                                return Promise.resolve().then(function() {
                                                    var eventHandlerContext = callContext.clone();
                                                    return OS.Flow.tryFinally(function() {
                                                        var varBag = {};
                                                        controller.pushDebuggerContext(eventHandlerContext);

                                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Horizontal_Filter_TagList Changed");
                                                        return controller.handler_OnClickPill$Action(updatedTagListIn, controller.callContext(eventHandlerContext));
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
                                            uuid: "5",
                                            alias: "6"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            filter: new PlaceholderContent(function() {
                                                return [React.createElement(UBTConnect_App_CommonBlocks_Filter_FilterSheet_Icon_Label_mvc_view, {
                                                    inputs: {
                                                        ShowSubscriptionOnClick: model.variables.bottomSheetId_Filter_ShowSubscriptionVar,
                                                        HaveFiltersApplied: model.variables.hasFiltersAppliedVar,
                                                        BottomSheetId: model.variables.filter_BottomSheetIdVar,
                                                        isLoaded: !(model.variables.bookmarks_LoadingVar)
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
                                                        uuid: "6",
                                                        alias: "7"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    _dependencies: []
                                                })];
                                            })
                                        },
                                        _dependencies: [asPrimitiveValue(model.variables.bookmarks_LoadingVar), asPrimitiveValue(model.variables.filter_BottomSheetIdVar), asPrimitiveValue(model.variables.hasFiltersAppliedVar), asPrimitiveValue(model.variables.bottomSheetId_Filter_ShowSubscriptionVar)]
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.filter_BottomSheetIdVar), asPrimitiveValue(model.variables.hasFiltersAppliedVar), asPrimitiveValue(model.variables.bottomSheetId_Filter_ShowSubscriptionVar), asPrimitiveValue(model.variables.bookmarks_LoadingVar), asPrimitiveValue(model.variables.pillsLoadedVar), asPrimitiveValue(model.variables.bookmarkPillsVar)]
                        })];
                    }),
                    content: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnect_Bookmarks_Bookmarks_Card_List_mvc_view, {
                            inputs: {
                                In_IsLoading: model.variables.bookmarks_LoadingVar,
                                In_SearchString: model.variables.bookmarks_FilterVar.searchTextAttr,
                                In_Bookmarks: model.variables.bookmarks_ListVar
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                item_Unbookmarked$Action: function() {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Bookmarks/Bookmarks_Card_List Item_Unbookmarked");
                                            return controller.handler_ItemUnbookmarked$Action(controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });
                                    });;
                                },
                                onClick_BookmarkCardItem$Action: function(objectIdIn, objectTypeIn) {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);

                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Bookmarks/Bookmarks_Card_List OnClick_BookmarkCardItem");
                                        controller.handler_OnClickBookmarkCardItem$Action(objectIdIn, objectTypeIn, controller.callContext(eventHandlerContext));
                                    }, function() {
                                        controller.popDebuggerContext(eventHandlerContext);
                                    });

                                    ;
                                },
                                onLoadMore$Action: function() {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Bookmarks/Bookmarks_Card_List OnLoadMore");
                                            return controller.bookmarks_Card_ListOnLoadMore$Action(controller.callContext(eventHandlerContext));
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
                                uuid: "7",
                                alias: "8"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    }),
                    bottom: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnect_App_Common_BottomBarMenu_mvc_view, {
                            inputs: {
                                ActiveItem: UBTConnectModel.staticEntities.connect_BottomBar_Items.bookmarks
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
                                alias: "9"
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
                                uuid: "9",
                                alias: "10"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.bookmarks_ListVar), asPrimitiveValue(model.variables.filter_BottomSheetIdVar), asPrimitiveValue(model.variables.hasFiltersAppliedVar), asPrimitiveValue(model.variables.bottomSheetId_Filter_ShowSubscriptionVar), asPrimitiveValue(model.variables.bookmarks_LoadingVar), asPrimitiveValue(model.variables.pillsLoadedVar), asPrimitiveValue(model.variables.bookmarkPillsVar), asPrimitiveValue(model.variables.bookmarks_FilterVar.searchTextAttr), asPrimitiveValue(model.variables.headerIsScrolledVar)]
            }), $if(false, false, this, function() {
                return [];
            }, function() {
                return [React.createElement(UBTConnect_Bookmarks_Bookmarks_FilterSheet_mvc_view, {
                    inputs: {
                        In_FilterBookmarks: model.variables.bookmarks_FilterVar,
                        In_YearsOptions: model.variables.yearsVar
                    },
                    events: {
                        _handleError: function(ex) {
                            controller.handleError(ex);
                        },
                        loaded$Action: function(showSubscriptionOnClickIn) {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Bookmarks/Bookmarks_FilterSheet Loaded");
                                controller.handler_FilterSheetLoaded$Action(showSubscriptionOnClickIn, controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });

                            ;
                        },
                        applyFilters$Action: function(event_Filter_BookmarksIn, event_HasFiltersAppliedIn) {
                            return Promise.resolve().then(function() {
                                var eventHandlerContext = callContext.clone();
                                return OS.Flow.tryFinally(function() {
                                    var varBag = {};
                                    controller.pushDebuggerContext(eventHandlerContext);

                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Bookmarks/Bookmarks_FilterSheet ApplyFilters");
                                    return controller.handler_ApplyFilters$Action(event_Filter_BookmarksIn, event_HasFiltersAppliedIn, controller.callContext(eventHandlerContext));
                                }, function() {
                                    controller.popDebuggerContext(eventHandlerContext);
                                });
                            });;
                        },
                        sheetInilialized$Action: function(sheetIdIn) {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Bookmarks/Bookmarks_FilterSheet SheetInilialized");
                                controller.handler_FilterSheetSheetInilialized$Action(sheetIdIn, controller.callContext(eventHandlerContext));
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
                        uuid: "10",
                        alias: "11"
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
define("UBTConnect.Bookmarks.Bookmarks.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "Connect_Bookmarks_CS.model", "NavigationHandler.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Bookmarks.Bookmarks.mvc$debugger", "UBTConnect.Bookmarks.controller", "UBTConnect.Bookmarks.Bookmarks.mvc$controller.ScreenEvent_OnInitialize.CheckRestoredJS", "UBTConnectLibrary.model$TagRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$TagList", "Connect_Bookmarks_CS.model$Bookmark_FilterRec", "UBTConnect.referencesHealth$Connect_Bookmarks_CS", "Connect_Bookmarks_CS.model$UI_Bookmark_CardItemRec", "UBTConnect.model$UI_Bookmark_CardItemList", "UBTConnectLibrary.model$SearchInputRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "Connect_Bookmarks_CS.model$UI_Bookmark_Card_ContentRec", "Connect_Bookmarks_CS.model$UI_Bookmark_Card_SourceHeaderRec", "UBTConnectLibrary.model$NotesRec", "UBTConnectLibrary.model$Note_ItemRec", "UBTConnect.model$Note_ItemList", "NavigationHandler.controller$SetPreloadObject", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect.model$SwipeActionLongIntegerRecordList", "UBTConnect.model$CarouselPreloadedHouseholdsRec", "UBTConnect.model$PreloadedCarouselRec", "UBTConnect.controller$ScrollTop", "UBTConnect.controller$GetBookmarks_Pills", "UBTConnect.controller$GetBookmarks_FilterYear", "Connect_Bookmarks_CS.model$UI_BookmarksRec"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, Connect_Bookmarks_CSModel, NavigationHandlerController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Bookmarks_Bookmarks_mvc_Debugger, _flow_UBTConnect_BookmarksController, UBTConnect_Bookmarks_Bookmarks_mvc_controller_ScreenEvent_OnInitialize_CheckRestoredJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {};
            this.dataFetchDependenciesOriginal = {
                getBookmarks$DataActRefresh: -1
            };
            this.dataFetchDependentsGraph = {
                getBookmarks$DataActRefresh: []
            };
            this.shouldSendClientVarsToDataSources = false;
        }
        // Server Actions

        // Aggregates and Data Actions
        Controller.prototype.getBookmarks$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:vpwYtw9olkyc4Nh8AR+sIg:/NRWebFlows.kStR2ohBzUir2kDhfuOSLg/NodesShownInESpaceTree.PwsuHYEyrUSjgGRAw5KZXA/DataActions.vpwYtw9olkyc4Nh8AR+sIg:dpVCnX4w2lB8Z3nyYwohwg", "UBTConnect", "GetBookmarks", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "Bookmarks/Bookmarks/GetBookmarks");
                return controller.callDataAction("DataActionGetBookmarks", "screenservices/UBTConnect/Bookmarks/Bookmarks/DataActionGetBookmarks", "ftHdJM2YfKYcIf_htmsxGQ", function(b) {
                    model.variables.getBookmarksDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.getBookmarksDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getBookmarksDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false).then(function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "Bookmarks/Bookmarks/GetBookmarks On After Fetch");
                    return controller._getBookmarksOnAfterFetch$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:vpwYtw9olkyc4Nh8AR+sIg", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };

        Controller.prototype.dataFetchActionNames = ["getBookmarks$DataActRefresh"];
        // Client Actions
        Controller.prototype._getBookmarksOnAfterFetch$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("GetBookmarksOnAfterFetch");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:_SlGFHZ+qE+WRjB1zfN05A:/NRWebFlows.kStR2ohBzUir2kDhfuOSLg/NodesShownInESpaceTree.PwsuHYEyrUSjgGRAw5KZXA/ClientActions._SlGFHZ+qE+WRjB1zfN05A:bsMQC2w4UI7i+ZN+Qjj3IQ", "UBTConnect", "GetBookmarksOnAfterFetch", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MuQSZhgUYEGmdLC8wUyllQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rotvzVs23Ue4_Hy24pQ0pQ", callContext.id) && (model.variables.pageNumberVar === 1))) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HQd4ngBEaU2sSHElbUQX0Q", callContext.id);
                        // MaxRecords = GetBookmarks.Out_Bookmarks.Total
                        model.variables.maxRecordsVar = model.variables.getBookmarksDataAct.out_BookmarksOut.totalAttr;
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:T+IRouLJ9UqXZRs3p+megQ", callContext.id);
                        // Bookmarks_List = GetBookmarks.Out_Bookmarks.BookmarkCardItemList
                        model.variables.bookmarks_ListVar = model.variables.getBookmarksDataAct.out_BookmarksOut.bookmarkCardItemListAttr;
                        return OS.Flow.executeSequence(function() {
                            if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dhQd4zXiF0y59MUepADhKg", callContext.id) && model.variables.resetPillsValueVar)) {
                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XsEYhrc3L0OZT95kdhlblg", callContext.id);
                                // Execute Action: Reset_PillsValues
                                return controller._reset_PillsValues$Action(callContext);
                            }

                        }).then(function() {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:EEg0ihA2BEyWE6b_sSdgJA", callContext.id);
                            // PillsLoaded = True
                            model.variables.pillsLoadedVar = true;
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:EEg0ihA2BEyWE6b_sSdgJA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                            // ResetPillsValue = False
                            model.variables.resetPillsValueVar = false;
                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GbYXup4RC0utfao5SqdMGw", callContext.id);
                        // Execute Action: ListAppendBookmarks
                        OS.SystemActions.listAppendAll(model.variables.bookmarks_ListVar, model.variables.getBookmarksDataAct.out_BookmarksOut.bookmarkCardItemListAttr, callContext);
                    }

                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3m7LXlmoXEOpty0JoFWe4w", callContext.id);
                    // Bookmarks_Loading = False
                    model.variables.bookmarks_LoadingVar = false;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6oK5CuB8Cke1n+RLE7DDDQ", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:_SlGFHZ+qE+WRjB1zfN05A", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:_SlGFHZ+qE+WRjB1zfN05A", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._skeletonLoader_Pills$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("SkeletonLoader_Pills");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:OqgGHr4GY0iXtQgCU9AGWQ:/NRWebFlows.kStR2ohBzUir2kDhfuOSLg/NodesShownInESpaceTree.PwsuHYEyrUSjgGRAw5KZXA/ClientActions.OqgGHr4GY0iXtQgCU9AGWQ:vkvUIXadDG4TL6N0zEraqg", "UBTConnect", "SkeletonLoader_Pills", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HzWNS_UlU0WxLnHC2ioIxw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_nRO+p+sQU+PLeMgT_Qs6Q", callContext.id);
                // Execute Action: ListAppend
                OS.SystemActions.listAppend(model.variables.bookmarkPillsVar, function() {
                    var rec = new UBTConnectLibraryModel.TagRec();
                    rec.textAttr = "All";
                    rec.identifierAttr = "All";
                    rec.isSelectedAttr = false;
                    return rec;
                }(), callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xBeGfiNvXUGLhcD55aLfhA", callContext.id);
                // Execute Action: ListAppend2
                OS.SystemActions.listAppend(model.variables.bookmarkPillsVar, function() {
                    var rec = new UBTConnectLibraryModel.TagRec();
                    rec.textAttr = "Dumyy size";
                    rec.identifierAttr = "Dumyy size";
                    rec.isSelectedAttr = false;
                    return rec;
                }(), callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_nwtxL5up0CAR99QbZEARA", callContext.id);
                // Execute Action: ListAppend3
                OS.SystemActions.listAppend(model.variables.bookmarkPillsVar, function() {
                    var rec = new UBTConnectLibraryModel.TagRec();
                    rec.textAttr = "Dumyy size";
                    rec.identifierAttr = "Dumyy size";
                    rec.isSelectedAttr = false;
                    return rec;
                }(), callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xeXZ3L28L0CdP8Nx4RVsQw", callContext.id);
                // Execute Action: ListAppend4
                OS.SystemActions.listAppend(model.variables.bookmarkPillsVar, function() {
                    var rec = new UBTConnectLibraryModel.TagRec();
                    rec.textAttr = "Dumyy size";
                    rec.identifierAttr = "Dumyy size";
                    rec.isSelectedAttr = false;
                    return rec;
                }(), callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NyCfJAC6Y0OonPtKFWH2kA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:OqgGHr4GY0iXtQgCU9AGWQ", callContext.id);
            }

        };
        Controller.prototype._handler_SearchOnClear$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_SearchOnClear");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:s2NOMu90YEeexTaxCnoIUQ:/NRWebFlows.kStR2ohBzUir2kDhfuOSLg/NodesShownInESpaceTree.PwsuHYEyrUSjgGRAw5KZXA/ClientActions.s2NOMu90YEeexTaxCnoIUQ:TqiPoX9IuWvbVgMjqZ+NgA", "UBTConnect", "Handler_SearchOnClear", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dAxunt6q7EazOmcyMYnRKg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cuhKkBRTfkGEj_9Fc0Ks5w", callContext.id);
                // Bookmarks_Filter.SearchText = ""
                model.variables.bookmarks_FilterVar.searchTextAttr = "";
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:OIc_1FJoakOzyqbcgEielg", callContext.id);
                // Execute Action: Refresh_GetBookmarksData
                return controller._refresh_GetBookmarksData$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rkr5L98OYUOOZwrdTYOxPw", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:s2NOMu90YEeexTaxCnoIUQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:s2NOMu90YEeexTaxCnoIUQ", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._handler_SearchOnChange$Action = function(currentStringIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_SearchOnChange");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Bookmarks.Bookmarks.Handler_SearchOnChange$vars"))());
            vars.value.currentStringInLocal = currentStringIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:1ol6OezM8kaINTilp7_0uQ:/NRWebFlows.kStR2ohBzUir2kDhfuOSLg/NodesShownInESpaceTree.PwsuHYEyrUSjgGRAw5KZXA/ClientActions.1ol6OezM8kaINTilp7_0uQ:HdLJv7WaXfJ0BB0zhP_G5Q", "UBTConnect", "Handler_SearchOnChange", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5nRJkCDddkelRWLU8g9jdg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hYcfRU8ND0mXO7zd0DDmfQ", callContext.id);
                // Bookmarks_Filter.SearchText = CurrentString
                model.variables.bookmarks_FilterVar.searchTextAttr = vars.value.currentStringInLocal;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:iQqIS+xK2EuYwPIynsBezQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:1ol6OezM8kaINTilp7_0uQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Bookmarks.Bookmarks.Handler_SearchOnChange$vars", [{
            name: "CurrentString",
            attrName: "currentStringInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
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
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Bookmarks.Bookmarks.Handler_OnHeaderScrolled$vars"))());
            vars.value.event_IsHeaderScrolledInLocal = event_IsHeaderScrolledIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:KmvpO0c8REKjiPLKIkr6WA:/NRWebFlows.kStR2ohBzUir2kDhfuOSLg/NodesShownInESpaceTree.PwsuHYEyrUSjgGRAw5KZXA/ClientActions.KmvpO0c8REKjiPLKIkr6WA:+yVVFbdBUaTBmH8Kq+kBWA", "UBTConnect", "Handler_OnHeaderScrolled", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:W7bjBpqKxEGYTp6XWqg5bw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CB_bOouCO0S9v65KpOivBQ", callContext.id);
                // HeaderIsScrolled = Event_IsHeaderScrolled
                model.variables.headerIsScrolledVar = vars.value.event_IsHeaderScrolledInLocal;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FLf5Q9Oo3UKReECnu9wKVA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:KmvpO0c8REKjiPLKIkr6WA", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Bookmarks.Bookmarks.Handler_OnHeaderScrolled$vars", [{
            name: "Event_IsHeaderScrolled",
            attrName: "event_IsHeaderScrolledInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._handler_ApplyFilters$Action = function(event_Filter_BookmarksIn, event_HasFiltersAppliedIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_ApplyFilters");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Bookmarks.Bookmarks.Handler_ApplyFilters$vars"))());
            vars.value.event_Filter_BookmarksInLocal = event_Filter_BookmarksIn.clone();
            vars.value.event_HasFiltersAppliedInLocal = event_HasFiltersAppliedIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:MOnRUGBl7kyxdxBqCDSe5Q:/NRWebFlows.kStR2ohBzUir2kDhfuOSLg/NodesShownInESpaceTree.PwsuHYEyrUSjgGRAw5KZXA/ClientActions.MOnRUGBl7kyxdxBqCDSe5Q:qmMU4UMGTUx0IsVmXDl3tA", "UBTConnect", "Handler_ApplyFilters", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Mr74AQ1EZkCCuZEphaGcpA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4cEMy86fxkGcivRhNeHrxA", callContext.id);
                // Bookmarks_Filter.SortByNewest = Event_Filter_Bookmarks.SortByNewest
                model.variables.bookmarks_FilterVar.sortByNewestAttr = vars.value.event_Filter_BookmarksInLocal.sortByNewestAttr;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4cEMy86fxkGcivRhNeHrxA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // Bookmarks_Filter.Years = Event_Filter_Bookmarks.Years
                model.variables.bookmarks_FilterVar.yearsAttr = vars.value.event_Filter_BookmarksInLocal.yearsAttr;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kDIPUu4qVUGeHpKZ+8MdJw", callContext.id);
                // HasFiltersApplied = Event_HasFiltersApplied
                model.variables.hasFiltersAppliedVar = vars.value.event_HasFiltersAppliedInLocal;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kQdbB9sZIkG3aVFX+mExBw", callContext.id);
                // Execute Action: Refresh_GetBookmarksData
                return controller._refresh_GetBookmarksData$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MepiaW3qtkeEtbIU31F+MA", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:MOnRUGBl7kyxdxBqCDSe5Q", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:MOnRUGBl7kyxdxBqCDSe5Q", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect.Bookmarks.Bookmarks.Handler_ApplyFilters$vars", [{
            name: "Event_Filter_Bookmarks",
            attrName: "event_Filter_BookmarksInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new Connect_Bookmarks_CSModel.Bookmark_FilterRec();
            },
            complexType: Connect_Bookmarks_CSModel.Bookmark_FilterRec
        }, {
            name: "Event_HasFiltersApplied",
            attrName: "event_HasFiltersAppliedInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._handler_OnClickBookmarkCardItem$Action = function(objectIdIn, objectTypeIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_OnClickBookmarkCardItem");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Bookmarks.Bookmarks.Handler_OnClickBookmarkCardItem$vars"))());
            vars.value.objectIdInLocal = objectIdIn;
            vars.value.objectTypeInLocal = objectTypeIn;
            var listFilter_OneSchoolGlobalVar = new OS.DataTypes.VariableHolder();
            var listFilterVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.listFilter_OneSchoolGlobalVar = listFilter_OneSchoolGlobalVar;
            varBag.listFilterVar = listFilterVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:YBPfXjzo6EiNJQN7K8GbEQ:/NRWebFlows.kStR2ohBzUir2kDhfuOSLg/NodesShownInESpaceTree.PwsuHYEyrUSjgGRAw5KZXA/ClientActions.YBPfXjzo6EiNJQN7K8GbEQ:0pmn5JdzLgbdD_JLJE_9DQ", "UBTConnect", "Handler_OnClickBookmarkCardItem", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7cSg2xgLHkuhQpPAYH5lIw", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2aeJNkdLFk6dG0DlDOibFQ", callContext.id) && (vars.value.objectTypeInLocal === UBTConnectModel.staticEntities.bookmarkCategory.feedItem))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HGug0HEqOEiTSHgI3Z1l8w", callContext.id);
                } else {
                    if ((vars.value.objectTypeInLocal === UBTConnectModel.staticEntities.bookmarkCategory.assembleEvent)) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KkT1Zqpmu06ePeX3neftJw", callContext.id);
                    } else {
                        if ((vars.value.objectTypeInLocal === UBTConnectModel.staticEntities.bookmarkCategory.interchange)) {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pn1RLE9Lw0u4h4eN3EblAQ", callContext.id);
                        } else {
                            if ((vars.value.objectTypeInLocal === UBTConnectModel.staticEntities.bookmarkCategory.lDMEvent)) {
                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bhTdxroCk067lQlDbjVUsQ", callContext.id);
                            } else {
                                if ((vars.value.objectTypeInLocal === UBTConnectModel.staticEntities.bookmarkCategory.locality)) {
                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QwebsBP1L0+pnQC6O1gGzg", callContext.id);
                                } else {
                                    if ((vars.value.objectTypeInLocal === UBTConnectModel.staticEntities.bookmarkCategory.localityContact)) {
                                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mcUYYpXM+EuYdWNuLZUt4g", callContext.id);
                                    } else {
                                        if ((vars.value.objectTypeInLocal === UBTConnectModel.staticEntities.bookmarkCategory.member)) {
                                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bWOoEY72R0K0TEoJBfNE2Q", callContext.id);
                                        } else {
                                            if ((vars.value.objectTypeInLocal === UBTConnectModel.staticEntities.bookmarkCategory.oneSchoolGlobal2)) {
                                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SrsDyJHfs0CG5HwvGmLAEg", callContext.id);
                                                // Execute Action: ListFilter_OneSchoolGlobal
                                                listFilter_OneSchoolGlobalVar.value = OS.SystemActions.listFilter(model.variables.bookmarks_ListVar, function(p) {
                                                    return (p.bookmarkCategoryIdAttr === UBTConnectModel.staticEntities.bookmarkCategory.oneSchoolGlobal2);
                                                }, callContext);

                                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4wYe9oZeQ0GPpy3ij4YbfQ", callContext.id);
                                                // PreloadedCarousel.CarouselItemIds = ListFilter_OneSchoolGlobal.FilteredList
                                                vars.value.preloadedCarouselVar.carouselItemIdsAttr = OS.DataConversion.JSConversions.typeConvertRecordList(listFilter_OneSchoolGlobalVar.value.filteredListOut, new OS.DataTypes.LongIntegerList(), function(source, target) {
                                                    target = source.itemIdAttr;
                                                    return target;
                                                });
                                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VJTIezn3sEWbD_EnI18FDQ", callContext.id);
                                                // Execute Action: SetPreloadObject3
                                                NavigationHandlerController.default.setPreloadObject$Action(OS.BuiltinFunctions.toObject(vars.value.preloadedCarouselVar), callContext);
                                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_tqUiMKhV0GT4hkKk+PTug", callContext.id);
                                                // Destination: /UBTConnect/OneSchoolGlobalCarousel
                                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/OneSchoolGlobalCarousel", {
                                                    In_StartingObjectId: OS.DataConversion.ServerDataConverter.asString(OS.BuiltinFunctions.textToLongInteger(vars.value.objectIdInLocal), OS.DataTypes.DataTypes.LongInteger)
                                                }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                            } else {
                                                if ((vars.value.objectTypeInLocal === UBTConnectModel.staticEntities.bookmarkCategory.orbitEvent)) {
                                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vErK4HyLuUOdzKvlJP7Ydg", callContext.id);
                                                } else {
                                                    if ((vars.value.objectTypeInLocal === UBTConnectModel.staticEntities.bookmarkCategory.personalEvent)) {
                                                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1WbyxasMQEC1tkCFC50J_Q", callContext.id);
                                                    } else {
                                                        if ((vars.value.objectTypeInLocal === UBTConnectModel.staticEntities.bookmarkCategory.supperMeeting)) {
                                                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:08bRyt2Dq0eAlGbPlx3i0A", callContext.id);
                                                            // Destination: /UBTConnect/SupperMeeting_Details
                                                            return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/SupperMeeting_Details", {
                                                                In_SubdivsionId: OS.DataConversion.ServerDataConverter.asString(OS.BuiltinFunctions.textToLongInteger(vars.value.objectIdInLocal), OS.DataTypes.DataTypes.LongInteger)
                                                            }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                                        } else {
                                                            if ((vars.value.objectTypeInLocal === UBTConnectModel.staticEntities.bookmarkCategory.update)) {
                                                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MJ2vIRP+jEOa2iDpAZn6gw", callContext.id);
                                                            } else {
                                                                if ((vars.value.objectTypeInLocal === UBTConnectModel.staticEntities.bookmarkCategory.household)) {
                                                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:K1ib66PdkESe9BU0XrL_dA", callContext.id);
                                                                    // Execute Action: ListFilter
                                                                    listFilterVar.value = OS.SystemActions.listFilter(model.variables.bookmarks_ListVar, function(p) {
                                                                        return (p.bookmarkCategoryIdAttr === UBTConnectModel.staticEntities.bookmarkCategory.household);
                                                                    }, callContext);

                                                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IUZdHpIAWUSI25Do5A71Ow", callContext.id);
                                                                    // HouseholdIdList.CarouselHouseholdItem = ListFilter.FilteredList
                                                                    vars.value.householdIdListVar.carouselHouseholdItemAttr = OS.DataConversion.JSConversions.typeConvertRecordList(listFilterVar.value.filteredListOut, new UBTConnectModel.SwipeActionLongIntegerRecordList(), function(source, target) {
                                                                        target.householdAttr = source.itemIdAttr;
                                                                        return target;
                                                                    });
                                                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UjsRTBcEnEOkYydg3Rr_6w", callContext.id);
                                                                    // Execute Action: SetPreloadObject
                                                                    NavigationHandlerController.default.setPreloadObject$Action(OS.BuiltinFunctions.toObject(vars.value.householdIdListVar), callContext);
                                                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rBC5FFsY80KXCS0GKJHX4w", callContext.id);
                                                                    // Destination: /UBTConnect/HouseholdCarousel
                                                                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HouseholdCarousel", {
                                                                        In_StartingHouseholdId: OS.DataConversion.ServerDataConverter.asString(OS.BuiltinFunctions.textToLongInteger(vars.value.objectIdInLocal), OS.DataTypes.DataTypes.LongInteger)
                                                                    }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                                                } else {
                                                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8+oP2_6DXEO82gZ2AMEzXg", callContext.id);
                                                                }

                                                            }

                                                        }

                                                    }

                                                }

                                            }

                                        }

                                    }

                                }

                            }

                        }

                    }

                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:YBPfXjzo6EiNJQN7K8GbEQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Bookmarks.Bookmarks.Handler_OnClickBookmarkCardItem$vars", [{
            name: "ObjectId",
            attrName: "objectIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
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
            name: "HouseholdIdList",
            attrName: "householdIdListVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new UBTConnectModel.CarouselPreloadedHouseholdsRec();
            },
            complexType: UBTConnectModel.CarouselPreloadedHouseholdsRec
        }, {
            name: "PreloadedCarousel",
            attrName: "preloadedCarouselVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new UBTConnectModel.PreloadedCarouselRec();
            },
            complexType: UBTConnectModel.PreloadedCarouselRec
        }]);
        Controller.prototype._handler_SearchOnSubmit$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_SearchOnSubmit");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:eU4JdLx7pUGCWL0VgPx8EQ:/NRWebFlows.kStR2ohBzUir2kDhfuOSLg/NodesShownInESpaceTree.PwsuHYEyrUSjgGRAw5KZXA/ClientActions.eU4JdLx7pUGCWL0VgPx8EQ:CbJGzRE98GaE8avgL4RiGg", "UBTConnect", "Handler_SearchOnSubmit", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vxZ9fVcSW0yuzstRpstvwQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dyJEBHed8EevE4b3U3_sCQ", callContext.id);
                // Execute Action: Refresh_GetBookmarksData
                return controller._refresh_GetBookmarksData$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wEw9h1i2skKr5GesI26GeA", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:eU4JdLx7pUGCWL0VgPx8EQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:eU4JdLx7pUGCWL0VgPx8EQ", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._handler_FilterSheetSheetInilialized$Action = function(sheetIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_FilterSheetSheetInilialized");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Bookmarks.Bookmarks.Handler_FilterSheetSheetInilialized$vars"))());
            vars.value.sheetIdInLocal = sheetIdIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:tKxYeemT2Ei46ZcTuH4wvg:/NRWebFlows.kStR2ohBzUir2kDhfuOSLg/NodesShownInESpaceTree.PwsuHYEyrUSjgGRAw5KZXA/ClientActions.tKxYeemT2Ei46ZcTuH4wvg:g0DPOVHQOhUiID_bi6iWYA", "UBTConnect", "Handler_FilterSheetSheetInilialized", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hCQ0HxliSE238UyQXziKiA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:w4UONm_JvUmjYIVY_ulQRA", callContext.id);
                // Filter_BottomSheetId = SheetId
                model.variables.filter_BottomSheetIdVar = vars.value.sheetIdInLocal;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VqNwFqE2x0W4dQwG+P0xWg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:tKxYeemT2Ei46ZcTuH4wvg", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Bookmarks.Bookmarks.Handler_FilterSheetSheetInilialized$vars", [{
            name: "SheetId",
            attrName: "sheetIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._iconClick_SearchIcon$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("IconClick_SearchIcon");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:PxMojTzzAkSdnLFkvS3+MQ:/NRWebFlows.kStR2ohBzUir2kDhfuOSLg/NodesShownInESpaceTree.PwsuHYEyrUSjgGRAw5KZXA/ClientActions.PxMojTzzAkSdnLFkvS3+MQ:+qbsNspNpGkhsEXMnwak1Q", "UBTConnect", "IconClick_SearchIcon", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wtbVaQDjMkqGMRwLhJoRyw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Zm4yiI6MVUWgsHcOi4Jpiw", callContext.id);
                // Execute Action: ScrollTop
                UBTConnectController.default.scrollTop$Action(".active-screen", "instant", callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:edPiG2Cwj0OSmEk+5bhcGA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:PxMojTzzAkSdnLFkvS3+MQ", callContext.id);
            }

        };
        Controller.prototype._handler_ItemUnbookmarked$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_ItemUnbookmarked");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:GuiPmSAwuUuq8DGmR15tQA:/NRWebFlows.kStR2ohBzUir2kDhfuOSLg/NodesShownInESpaceTree.PwsuHYEyrUSjgGRAw5KZXA/ClientActions.GuiPmSAwuUuq8DGmR15tQA:JoMT9OC9wGVb3Y7bCRcmhw", "UBTConnect", "Handler_ItemUnbookmarked", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qn_8DIJH50GjIbuUndbfnA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:edhB3RkP5UOftkyXBWBWLA", callContext.id);
                // Execute Action: Refresh_GetBookmarksData
                return controller._refresh_GetBookmarksData$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Zhbo6CNmF0aTyS5KaWKUtg", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:GuiPmSAwuUuq8DGmR15tQA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:GuiPmSAwuUuq8DGmR15tQA", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._reset_PillsValues$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Reset_PillsValues");
            callContext = controller.callContext(callContext);
            var getBookmarks_PillsVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getBookmarks_PillsVar = getBookmarks_PillsVar;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:kj+RrtGvzkCFAVhbVx_fDQ:/NRWebFlows.kStR2ohBzUir2kDhfuOSLg/NodesShownInESpaceTree.PwsuHYEyrUSjgGRAw5KZXA/ClientActions.kj+RrtGvzkCFAVhbVx_fDQ:+MKjXhqvp5B1Xb3PQhOHzg", "UBTConnect", "Reset_PillsValues", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:y3jES3idHkW1wRirQ7jlCA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NYS6UhAlDk+vRkHaNFjkNg", callContext.id);
                // Execute Action: GetBookmarks_Pills
                model.flush();
                return UBTConnectController.default.getBookmarks_Pills$Action(model.variables.bookmarks_FilterVar.bookmarkCategoryIdAttr, callContext).then(function(value) {
                    getBookmarks_PillsVar.value = value;
                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GZBH9vKnSEGqfTnUjvisHA", callContext.id);
                    // Execute Action: ListClear
                    OS.SystemActions.listClear(model.variables.bookmarkPillsVar, callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6dj9opF3Fk+QVdVnzpLK7g", callContext.id);
                    // Execute Action: ListAppendAll
                    OS.SystemActions.listAppendAll(model.variables.bookmarkPillsVar, getBookmarks_PillsVar.value.out_PillsOut, callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wEB2SumF2UmAMvvKMM28wQ", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:kj+RrtGvzkCFAVhbVx_fDQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:kj+RrtGvzkCFAVhbVx_fDQ", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._handler_FilterSheetLoaded$Action = function(showSubscriptionOnClickIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_FilterSheetLoaded");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Bookmarks.Bookmarks.Handler_FilterSheetLoaded$vars"))());
            vars.value.showSubscriptionOnClickInLocal = showSubscriptionOnClickIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:o_XUscc8MU+MQMje9UC7iw:/NRWebFlows.kStR2ohBzUir2kDhfuOSLg/NodesShownInESpaceTree.PwsuHYEyrUSjgGRAw5KZXA/ClientActions.o_XUscc8MU+MQMje9UC7iw:CUIxgPFj6vx9sGQsIYdwMg", "UBTConnect", "Handler_FilterSheetLoaded", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uyr8rBoMWkuzEXg1MRe6ZA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:R15YOGKX5E2QA8Q2LQI_UQ", callContext.id);
                // BottomSheetId_Filter_IsLoaded = True
                model.variables.bottomSheetId_Filter_IsLoadedVar = true;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SXkTxmtbi0ysoMxHuqM9jA", callContext.id);
                // BottomSheetId_Filter_ShowSubscription = ShowSubscriptionOnClick
                model.variables.bottomSheetId_Filter_ShowSubscriptionVar = vars.value.showSubscriptionOnClickInLocal;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7AAbCidnkkyatHbgCDOIgw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:o_XUscc8MU+MQMje9UC7iw", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Bookmarks.Bookmarks.Handler_FilterSheetLoaded$vars", [{
            name: "ShowSubscriptionOnClick",
            attrName: "showSubscriptionOnClickInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
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
            var getBookmarks_FilterYearVar = new OS.DataTypes.VariableHolder();
            var checkRestoredJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getBookmarks_FilterYearVar = getBookmarks_FilterYearVar;
            varBag.checkRestoredJSResult = checkRestoredJSResult;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:lLl_t_eJAUa75oASF3xs3A:/NRWebFlows.kStR2ohBzUir2kDhfuOSLg/NodesShownInESpaceTree.PwsuHYEyrUSjgGRAw5KZXA/ClientActions.lLl_t_eJAUa75oASF3xs3A:zwb+8I+rOgA2QmflY6Xb4Q", "UBTConnect", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Kyfgb0M28USzG5ud_xjlLA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:K+wxJLYVskG1MBzl6Efqkw", callContext.id);
                checkRestoredJSResult.value = controller.safeExecuteJSNode(UBTConnect_Bookmarks_Bookmarks_mvc_controller_ScreenEvent_OnInitialize_CheckRestoredJS, "CheckRestored", "ScreenEvent_OnInitialize", {
                    FromCache2: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
                    FromHistory2: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
                    FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
                    FromHistory: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("UBTConnect.Bookmarks.Bookmarks.ScreenEvent_OnInitialize$checkRestoredJSResult"))();
                    jsNodeResult.fromCache2Out = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache2, OS.DataTypes.DataTypes.Boolean);
                    jsNodeResult.fromHistory2Out = OS.DataConversion.JSNodeParamConverter.from($parameters.FromHistory2, OS.DataTypes.DataTypes.Boolean);
                    jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
                    jsNodeResult.fromHistoryOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromHistory, OS.DataTypes.DataTypes.Boolean);
                    return jsNodeResult;
                }, {}, {});
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6S2Ffru+xk600Lg1Lu46ig", callContext.id) && (checkRestoredJSResult.value.fromCache2Out || checkRestoredJSResult.value.fromHistory2Out))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:285DKX6rbEiE9DbN9YKuIw", callContext.id);
                    // PageNumber = 1
                    model.variables.pageNumberVar = 1;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QpnK+XZscky6sclJSxO2eA", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:clUWrN0j1EWPuIrrjzpYkg", callContext.id);
                    // Bookmarks_Loading = True
                    model.variables.bookmarks_LoadingVar = true;
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VEgMSHN8T0CTjNoMJBSVdg", callContext.id) && model.variables.bookmarkPillsVar.isEmpty)) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:adQWMaV1lUm7akMDE6WUbg", callContext.id);
                        // Execute Action: SkeletonLoader_Pills
                        controller._skeletonLoader_Pills$Action(callContext);
                    }

                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:yzp2L_suEUG0aIXiLb5YVg", callContext.id) && model.variables.bookmarks_ListVar.isEmpty)) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zJTSZKxCqUKO+o4Md8RzEA", callContext.id);
                        // Execute Action: SkeletonLoader_Bookmarks
                        controller._skeletonLoader_Bookmarks$Action(callContext);
                    }

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dV2GTLV8NEmdvD0QIgypdQ", callContext.id);
                    // Execute Action: GetBookmarks_FilterYear
                    getBookmarks_FilterYearVar.value = UBTConnectController.default.getBookmarks_FilterYear$Action(callContext);

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AikTlH5eIUat5nYX80BwBw", callContext.id);
                    // Execute Action: ListClear
                    OS.SystemActions.listClear(model.variables.yearsVar, callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:V3pH39WFhU6VBM3fPQRm4Q", callContext.id);
                    // Years = GetBookmarks_FilterYear.Out_Years
                    model.variables.yearsVar = getBookmarks_FilterYearVar.value.out_YearsOut;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:X+tVE4ylVEuJcXiO3FqqCA", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:lLl_t_eJAUa75oASF3xs3A", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Bookmarks.Bookmarks.ScreenEvent_OnInitialize$checkRestoredJSResult", [{
            name: "FromCache2",
            attrName: "fromCache2Out",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "FromHistory2",
            attrName: "fromHistory2Out",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "FromCache",
            attrName: "fromCacheOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "FromHistory",
            attrName: "fromHistoryOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._bookmarks_Card_ListOnLoadMore$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Bookmarks_Card_ListOnLoadMore");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:AOxPvyohpEGGiRLpbVIxOQ:/NRWebFlows.kStR2ohBzUir2kDhfuOSLg/NodesShownInESpaceTree.PwsuHYEyrUSjgGRAw5KZXA/ClientActions.AOxPvyohpEGGiRLpbVIxOQ:k4FqMf98cK8GI+ITtII_HA", "UBTConnect", "Bookmarks_Card_ListOnLoadMore", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:R1wzb3y4fEWAyGKYkI7klA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3EgbwWPgekiOaVOySQvvkQ", callContext.id) && (!(model.variables.getBookmarksDataAct.out_BookmarksOut.bookmarkCardItemListAttr.isEmpty) && OS.BuiltinFunctions.integerToLongInteger(model.variables.bookmarks_ListVar.length).lt(model.variables.maxRecordsVar)))) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:X2KyZvbLIkC_lhuP5rrAgw", callContext.id);
                        // PageNumber = PageNumber + 1
                        model.variables.pageNumberVar = (model.variables.pageNumberVar + 1);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Apxj9L_9uE+P+_ZE4uSQDA", callContext.id);
                        // Execute Action: Refresh_GetBookmarksData
                        return controller._refresh_GetBookmarksData$Action(callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0VkqexGZ2UqFF+6+aKo0vw", callContext.id);
                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:yVOizvBx6U2yH24tEH+ngQ", callContext.id);
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:AOxPvyohpEGGiRLpbVIxOQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:AOxPvyohpEGGiRLpbVIxOQ", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._handler_OnClickPill$Action = function(updatedTagListIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_OnClickPill");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Bookmarks.Bookmarks.Handler_OnClickPill$vars"))());
            vars.value.updatedTagListInLocal = updatedTagListIn.clone();
            var listFilterPillsBySelectedVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.listFilterPillsBySelectedVar = listFilterPillsBySelectedVar;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:DtV3xFw7q020VN8b7tbc2g:/NRWebFlows.kStR2ohBzUir2kDhfuOSLg/NodesShownInESpaceTree.PwsuHYEyrUSjgGRAw5KZXA/ClientActions.DtV3xFw7q020VN8b7tbc2g:npgVeyqkmQqfuID+_ghERQ", "UBTConnect", "Handler_OnClickPill", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YalWB0l3f0Gn9jNDe+Qe1w", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:RX2jvrnxRUaoAK1ewlxkGQ", callContext.id);
                // Execute Action: ListFilterPillsBySelected
                listFilterPillsBySelectedVar.value = OS.SystemActions.listFilter(vars.value.updatedTagListInLocal, function(p) {
                    return p.isSelectedAttr;
                }, callContext);

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YbIW14OBB0yzvh28RDeBNw", callContext.id);
                // Bookmarks_Filter.BookmarkCategoryId = TextToIdentifier
                model.variables.bookmarks_FilterVar.bookmarkCategoryIdAttr = OS.BuiltinFunctions.textToIdentifier(listFilterPillsBySelectedVar.value.filteredListOut.getCurrent(callContext.iterationContext).identifierAttr);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Pqc3DcS_CUump21ZgNOA_A", callContext.id);
                // PageNumber = 1
                model.variables.pageNumberVar = 1;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:aewIpJm1MUSn5L9Ljo2ZPw", callContext.id);
                // ResetPillsValue = False
                model.variables.resetPillsValueVar = false;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cMCfcAg7vUCwtXipXPB7YA", callContext.id);
                // Execute Action: Refresh_GetBookmarksData
                return controller._refresh_GetBookmarksData$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZpFluQi1MUWLlHHcQ+haYg", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:DtV3xFw7q020VN8b7tbc2g", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:DtV3xFw7q020VN8b7tbc2g", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect.Bookmarks.Bookmarks.Handler_OnClickPill$vars", [{
            name: "UpdatedTagList",
            attrName: "updatedTagListInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.RecordList,
            defaultValue: function() {
                return new UBTConnectModel.TagList();
            },
            complexType: UBTConnectModel.TagList
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
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Goyox0jCvkuNnUhOWGfBDw:/NRWebFlows.kStR2ohBzUir2kDhfuOSLg/NodesShownInESpaceTree.PwsuHYEyrUSjgGRAw5KZXA/ClientActions.Goyox0jCvkuNnUhOWGfBDw:ykU5BPeLpAKG6fNjoLl5UQ", "UBTConnect", "ScreenEvent_OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rHXbAxx_rUm9l7MABk62Yw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VGP++kVOpU2ewsY7ZJmtAg", callContext.id);
                // Execute Action: Reset_PillsValues
                return controller._reset_PillsValues$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qzc5ayvJwkavdfUUplt4uQ", callContext.id);
                    // Execute Action: Refresh_GetBookmarksData
                    return controller._refresh_GetBookmarksData$Action(callContext);
                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YSSxBNs2E0yVFiTtRJCATg", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Goyox0jCvkuNnUhOWGfBDw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Goyox0jCvkuNnUhOWGfBDw", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._skeletonLoader_Bookmarks$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("SkeletonLoader_Bookmarks");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:tNYF37IB3UuUCs5xIs_BbA:/NRWebFlows.kStR2ohBzUir2kDhfuOSLg/NodesShownInESpaceTree.PwsuHYEyrUSjgGRAw5KZXA/ClientActions.tNYF37IB3UuUCs5xIs_BbA:uxEcMbZRl6RSusz4_dAJRw", "UBTConnect", "SkeletonLoader_Bookmarks", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:K2T8LMDaqE+xIPmuLo7KMA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0Go1oRJHhUaXgQS_7QDqDA", callContext.id);
                // Execute Action: ListAppend
                OS.SystemActions.listAppend(model.variables.bookmarks_ListVar, function() {
                    var rec = new Connect_Bookmarks_CSModel.UI_Bookmark_CardItemRec();
                    rec.bookmark_Card_ContentAttr = function() {
                        var rec = new Connect_Bookmarks_CSModel.UI_Bookmark_Card_ContentRec();
                        rec.titleAttr = "Dumyy Dummy Dummy Dummy";
                        rec.subtitleAttr = "Dummy Dummy";
                        return rec;
                    }();
                    return rec;
                }(), callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Ahj2nnJCHkSwZTLkZSg3Qg", callContext.id);
                // Execute Action: ListAppend2
                OS.SystemActions.listAppend(model.variables.bookmarks_ListVar, function() {
                    var rec = new Connect_Bookmarks_CSModel.UI_Bookmark_CardItemRec();
                    rec.bookmark_Card_ContentAttr = function() {
                        var rec = new Connect_Bookmarks_CSModel.UI_Bookmark_Card_ContentRec();
                        rec.titleAttr = "Dumyy size";
                        rec.subtitleAttr = "Dumyy size";
                        return rec;
                    }();
                    return rec;
                }(), callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3sc8CuVZlUuFEuLw0mx2Kw", callContext.id);
                // Execute Action: ListAppend3
                OS.SystemActions.listAppend(model.variables.bookmarks_ListVar, function() {
                    var rec = new Connect_Bookmarks_CSModel.UI_Bookmark_CardItemRec();
                    rec.bookmark_Card_ContentAttr = function() {
                        var rec = new Connect_Bookmarks_CSModel.UI_Bookmark_Card_ContentRec();
                        rec.titleAttr = "Dumyy size";
                        rec.subtitleAttr = "Dumyy size";
                        return rec;
                    }();
                    return rec;
                }(), callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:s68yjcCgdkCCTf_tDBPfEA", callContext.id);
                // Execute Action: ListAppend4
                OS.SystemActions.listAppend(model.variables.bookmarks_ListVar, function() {
                    var rec = new Connect_Bookmarks_CSModel.UI_Bookmark_CardItemRec();
                    rec.bookmark_Card_ContentAttr = function() {
                        var rec = new Connect_Bookmarks_CSModel.UI_Bookmark_Card_ContentRec();
                        rec.titleAttr = "Dumyy size";
                        rec.subtitleAttr = "Dumyy size";
                        return rec;
                    }();
                    return rec;
                }(), callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eNiY0FXPmE2ulsWPFZr3jw", callContext.id);
                // Execute Action: ListAppend5
                OS.SystemActions.listAppend(model.variables.bookmarks_ListVar, function() {
                    var rec = new Connect_Bookmarks_CSModel.UI_Bookmark_CardItemRec();
                    rec.bookmark_Card_ContentAttr = function() {
                        var rec = new Connect_Bookmarks_CSModel.UI_Bookmark_Card_ContentRec();
                        rec.titleAttr = "Dumyy size";
                        rec.subtitleAttr = "Dumyy size";
                        return rec;
                    }();
                    return rec;
                }(), callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:im9yaZ3buUiE_1OotAijog", callContext.id);
                // Execute Action: ListAppend6
                OS.SystemActions.listAppend(model.variables.bookmarks_ListVar, function() {
                    var rec = new Connect_Bookmarks_CSModel.UI_Bookmark_CardItemRec();
                    rec.bookmark_Card_ContentAttr = function() {
                        var rec = new Connect_Bookmarks_CSModel.UI_Bookmark_Card_ContentRec();
                        rec.titleAttr = "Dumyy size";
                        rec.subtitleAttr = "Dumyy size";
                        return rec;
                    }();
                    return rec;
                }(), callContext);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:63jH4fv880S8GBOwVYb93w", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:tNYF37IB3UuUCs5xIs_BbA", callContext.id);
            }

        };
        Controller.prototype._refresh_GetBookmarksData$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Refresh_GetBookmarksData");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:h6ln_ehvEkWsvR+v7QtHcw:/NRWebFlows.kStR2ohBzUir2kDhfuOSLg/NodesShownInESpaceTree.PwsuHYEyrUSjgGRAw5KZXA/ClientActions.h6ln_ehvEkWsvR+v7QtHcw:iHQv+VrChO_cyX4Nqon6rA", "UBTConnect", "Refresh_GetBookmarksData", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VcLQdqDdQUq2BKfm0MhtjQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Hxv4+fv7Jk655raDDSYyxA", callContext.id);
                // Bookmarks_Loading = True
                model.variables.bookmarks_LoadingVar = true;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:iYppsCrxQESefE7zmAadqA", callContext.id);
                // Refresh Query: GetBookmarks
                var result = controller.getBookmarks$DataActRefresh(callContext);
                model.flush();
                return result.then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Y3sk8HRpnU+sEQpuiF8e_w", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:h6ln_ehvEkWsvR+v7QtHcw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:h6ln_ehvEkWsvR+v7QtHcw", callContext.id);
                throw ex;

            });
        };

        Controller.prototype.getBookmarksOnAfterFetch$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._getBookmarksOnAfterFetch$Action, callContext);

        };
        Controller.prototype.skeletonLoader_Pills$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._skeletonLoader_Pills$Action, callContext);

        };
        Controller.prototype.handler_SearchOnClear$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_SearchOnClear$Action, callContext);

        };
        Controller.prototype.handler_SearchOnChange$Action = function(currentStringIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_SearchOnChange$Action, callContext, currentStringIn);

        };
        Controller.prototype.handler_OnHeaderScrolled$Action = function(event_IsHeaderScrolledIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_OnHeaderScrolled$Action, callContext, event_IsHeaderScrolledIn);

        };
        Controller.prototype.handler_ApplyFilters$Action = function(event_Filter_BookmarksIn, event_HasFiltersAppliedIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_ApplyFilters$Action, callContext, event_Filter_BookmarksIn, event_HasFiltersAppliedIn);

        };
        Controller.prototype.handler_OnClickBookmarkCardItem$Action = function(objectIdIn, objectTypeIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_OnClickBookmarkCardItem$Action, callContext, objectIdIn, objectTypeIn);

        };
        Controller.prototype.handler_SearchOnSubmit$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_SearchOnSubmit$Action, callContext);

        };
        Controller.prototype.handler_FilterSheetSheetInilialized$Action = function(sheetIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_FilterSheetSheetInilialized$Action, callContext, sheetIdIn);

        };
        Controller.prototype.iconClick_SearchIcon$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._iconClick_SearchIcon$Action, callContext);

        };
        Controller.prototype.handler_ItemUnbookmarked$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_ItemUnbookmarked$Action, callContext);

        };
        Controller.prototype.reset_PillsValues$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._reset_PillsValues$Action, callContext);

        };
        Controller.prototype.handler_FilterSheetLoaded$Action = function(showSubscriptionOnClickIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_FilterSheetLoaded$Action, callContext, showSubscriptionOnClickIn);

        };
        Controller.prototype.screenEvent_OnInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnInitialize$Action, callContext);

        };
        Controller.prototype.bookmarks_Card_ListOnLoadMore$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._bookmarks_Card_ListOnLoadMore$Action, callContext);

        };
        Controller.prototype.handler_OnClickPill$Action = function(updatedTagListIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_OnClickPill$Action, callContext, updatedTagListIn);

        };
        Controller.prototype.screenEvent_OnReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnReady$Action, callContext);

        };
        Controller.prototype.skeletonLoader_Bookmarks$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._skeletonLoader_Bookmarks$Action, callContext);

        };
        Controller.prototype.refresh_GetBookmarksData$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._refresh_GetBookmarksData$Action, callContext);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:kStR2ohBzUir2kDhfuOSLg:/NRWebFlows.kStR2ohBzUir2kDhfuOSLg:JSKfj0CjfVbkU+WuEIFgoA", "UBTConnect", "Bookmarks", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:PwsuHYEyrUSjgGRAw5KZXA:/NRWebFlows.kStR2ohBzUir2kDhfuOSLg/NodesShownInESpaceTree.PwsuHYEyrUSjgGRAw5KZXA:247k9qgAQOgFqwjA8n4YrA", "UBTConnect", "Bookmarks", "NRNodes.WebScreen", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:PwsuHYEyrUSjgGRAw5KZXA", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:kStR2ohBzUir2kDhfuOSLg", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Bookmarks/Bookmarks On Initialize");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "Bookmarks/Bookmarks On Ready");
                return controller.screenEvent_OnReady$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = null;
        Controller.prototype.handleError = function(ex) {
            return _flow_UBTConnect_BookmarksController.default.handleError(ex, this.callContext());
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
define("UBTConnect.Bookmarks.Bookmarks.mvc$controller.ScreenEvent_OnInitialize.CheckRestoredJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
        //$parameters.FromHistory = $public.Navigation.navigatedFromHistory();
    };
});

define("UBTConnect.Bookmarks.Bookmarks.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "BfMAOrysVkWoxc1MBKmOKg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.currentStringInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "uTbj0BbwCkaDHamk4l5kfA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.event_IsHeaderScrolledInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "xYizQkUP1kShkk+cX2ijbw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.event_Filter_BookmarksInLocal;
            }
        },
        "WUd8EKC2T0uzpNvJvCg7lQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.event_HasFiltersAppliedInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "qBJ5157d30GaGMTahrlEyQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.householdIdListVar;
            }
        },
        "xut9uOYj4UWX0Mazrclf4A": {
            getter: function(varBag, idService) {
                return varBag.vars.value.preloadedCarouselVar;
            }
        },
        "qUFEI4s5+Uur3KADHi0l_Q": {
            getter: function(varBag, idService) {
                return varBag.vars.value.objectIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "h2wXwEzCFk6cPcKb2oETNw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.objectTypeInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "SrsDyJHfs0CG5HwvGmLAEg": {
            getter: function(varBag, idService) {
                return varBag.listFilter_OneSchoolGlobalVar.value;
            }
        },
        "K1ib66PdkESe9BU0XrL_dA": {
            getter: function(varBag, idService) {
                return varBag.listFilterVar.value;
            }
        },
        "QT5WVCg8oE2p_a0oxwqq0Q": {
            getter: function(varBag, idService) {
                return varBag.vars.value.sheetIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "NYS6UhAlDk+vRkHaNFjkNg": {
            getter: function(varBag, idService) {
                return varBag.getBookmarks_PillsVar.value;
            }
        },
        "fR57KtMUDUqD+kyBz841RA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.showSubscriptionOnClickInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "dV2GTLV8NEmdvD0QIgypdQ": {
            getter: function(varBag, idService) {
                return varBag.getBookmarks_FilterYearVar.value;
            }
        },
        "K+wxJLYVskG1MBzl6Efqkw": {
            getter: function(varBag, idService) {
                return varBag.checkRestoredJSResult.value;
            }
        },
        "igwmWNTl5E6M92CbY3ZHiQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.updatedTagListInLocal;
            }
        },
        "RX2jvrnxRUaoAK1ewlxkGQ": {
            getter: function(varBag, idService) {
                return varBag.listFilterPillsBySelectedVar.value;
            }
        },
        "JRmZBRenL0KvtPYSOxKMIA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.headerIsScrolledVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "M0WVwAup1E2kt7ePPaQOAw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.bookmarkPillsVar;
            }
        },
        "1ZfjFyakjEOaluBWG5aQTA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.bookmarks_FilterVar;
            }
        },
        "uWH+aCfbBE+wLm8BKhvkvw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.hasFiltersAppliedVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "v0BHUwp3gUu6tIQX_Qxj4w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.filter_BottomSheetIdVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "q0Apo+nO2EKsuC6Jjseusg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.bottomSheetId_Filter_IsLoadedVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "yqnGzd48oEGdYHuk0i67lA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.bottomSheetId_Filter_ShowSubscriptionVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "_gLH5UPHiUivExk_rLS6Sw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.filter_BookmarksDefaultStateVar;
            }
        },
        "T6QNQvxEtEmyC94JiCT37w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.yearsVar;
            }
        },
        "zUiQpqHhHkKBXM0X0S7v4Q": {
            getter: function(varBag, idService) {
                return varBag.model.variables.pageSizeVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "+KdgA5VqVUi6amY3TrSfaw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.pageNumberVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "e2xdhgLEWUGL6xvetqN7mQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.maxRecordsVar;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "YgL0UO9Z9U+_GkiK2eVzSg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.bookmarks_ListVar;
            }
        },
        "9737wy4YfkGbXVjUzTFWXw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.resetPillsValueVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "cpD7B+cBYUGtENro1ARjdQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.pillsLoadedVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "7_lpnpblhEyDQlhOgvNUfQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.bookmarks_LoadingVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "vpwYtw9olkyc4Nh8AR+sIg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.getBookmarksDataAct;
            }
        },
        "TyKqyBEu0EOB6sQ9LC9gKg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Header_Title"));
                })(varBag.model, idService);
            }
        },
        "02b8pV8gu0uRsTTYQMevbw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Header_Right"));
                })(varBag.model, idService);
            }
        },
        "cH5DGCA97kOWR0O65AMraA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Header_Input"));
                })(varBag.model, idService);
            }
        },
        "X3N2QSlkfkKanCOORnMzhQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Header_Input_Icon"));
                })(varBag.model, idService);
            }
        },
        "BM5sWMPOC02uxQhAJ5teBg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderContent"));
                })(varBag.model, idService);
            }
        },
        "sYWU197jo0q+HuN6Dwknaw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("FilterPills"));
                })(varBag.model, idService);
            }
        },
        "aiJThNgVPEiiWb6toHG+Ow": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "BF2ttEgVDE6szzNJSDPQcQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Filter"));
                })(varBag.model, idService);
            }
        },
        "sit+ZBR40EGqvykUIuwYSg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "AB6oONPgqU+nUHgkswr1uw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Bottom"));
                })(varBag.model, idService);
            }
        },
        "+ubwO6NfdkCClaVPhY4f0w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
                })(varBag.model, idService);
            }
        },
        "L_ZSORIu_0GYj9xRtpUqSA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HideInServiceStudio_BottomSheet"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});