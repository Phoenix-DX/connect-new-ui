define("Connect2_Assemble_MUI.Assemble.AssembleSummary_List.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "Connect2_Assemble_CS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model", "MemoryClientCache.model", "Connect2_LegacyShared.controller", "NavigationHandler.controller", "Connect2_LegacyShared.Share.StickyHeader.mvc$model", "Connect2_LegacyShared.Reusable.HorizontalTags.mvc$model", "Connect2_Assemble_MUI.Assemble.AssembleSummary_List__Header.mvc$model", "Connect2_LegacyShared.NewConnect_Utilities.NC_ErrorScreen.mvc$model", "NavigationHandler.ScrollAnchors.ScrollAnchor.mvc$model", "Connect2_Assemble_MUI.Assemble.AssembleSummaryCard.mvc$model", "Connect2_Assemble_MUI.AssembleSkeleton.AssembleSummary_SkeletonList.mvc$model", "Connect2_Assemble_MUI.Assemble.AssembleSummary_FilterDrawer.mvc$model", "Connect2_Assemble_MUI.controller$GetAssembleHeaderDateString", "Connect2_Assemble_CS.model$AssembleEventSummaryRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS", "Connect2_Assemble_MUI.model$AssembleEventSummaryList", "Connect2_Assemble_CS.model$AssembleEventFilterRec", "Connect2_LegacyShared.model$TagRec", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_Assemble_MUI.model$TagList", "Connect2_Assemble_MUI.model$Text1RecordList", "Connect2_Assemble_CS.model$AssembleEventTypeRec", "Connect2_Assemble_MUI.model$AssembleEventTypeBooleanRecordList", "Connect2_Assemble_MUI.model$AssembleEventTypeList", "APIDomain_Directory_IS.model$Users_Current_GETResponseRec", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_Assemble_MUI.referencesHealth$MemoryClientCache", "Connect2_LegacyShared.controller$GetCacheableUserInfo", "Connect2_Assemble_MUI.controller$GetIANATimezone", "NavigationHandler.controller$SetPreloadObject", "Connect2_Assemble_MUI.referencesHealth$NavigationHandler", "NavigationHandler.controller$RememberFocusedScrollAnchor", "Connect2_Assemble_CS.model$AssembleDetailsPreloadingRec", "Connect2_Assemble_MUI.controller$OffsetDateTimeByUserUTCOffset", "Connect2_Assemble_MUI.model$DateTimeDateTimeRecord", "Connect2_Assemble_MUI.controller$GetAssembleEventListDateRangeFilter", "Connect2_Assemble_MUI.controller$GeAssembleSummaryListFilterLabel"], function(OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, Connect2_Assemble_CSModel, Connect2_LegacySharedModel, APIDomain_Directory_ISModel, MemoryClientCacheModel, Connect2_LegacySharedController, NavigationHandlerController, Connect2_LegacyShared_Share_StickyHeader_mvcModel, Connect2_LegacyShared_Reusable_HorizontalTags_mvcModel, Connect2_Assemble_MUI_Assemble_AssembleSummary_List__Header_mvcModel, Connect2_LegacyShared_NewConnect_Utilities_NC_ErrorScreen_mvcModel, NavigationHandler_ScrollAnchors_ScrollAnchor_mvcModel, Connect2_Assemble_MUI_Assemble_AssembleSummaryCard_mvcModel, Connect2_Assemble_MUI_AssembleSkeleton_AssembleSummary_SkeletonList_mvcModel, Connect2_Assemble_MUI_Assemble_AssembleSummary_FilterDrawer_mvcModel) {
    var OS = OutSystems.Internal;

    var GetAssembleEventTypesDataActRec = (function(_super) {
        __extends(GetAssembleEventTypesDataActRec, _super);

        function GetAssembleEventTypesDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        GetAssembleEventTypesDataActRec.attributesToDeclare = function() {
            return [
                this.attr("AssembleEventTypeList", "assembleEventTypeListOut", "AssembleEventTypeList", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_MUIModel.AssembleEventTypeList());
                }, true, Connect2_Assemble_MUIModel.AssembleEventTypeList)
            ].concat(_super.attributesToDeclare.call(this));
        };
        GetAssembleEventTypesDataActRec.fromStructure = function(str) {
            return new GetAssembleEventTypesDataActRec(new GetAssembleEventTypesDataActRec.RecordClass({
                assembleEventTypeListOut: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        GetAssembleEventTypesDataActRec.init();
        return GetAssembleEventTypesDataActRec;
    })(OS.Model.DataSourceRecord);
    var GetAssembleMeetingSummaryListDataActRec = (function(_super) {
        __extends(GetAssembleMeetingSummaryListDataActRec, _super);

        function GetAssembleMeetingSummaryListDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        GetAssembleMeetingSummaryListDataActRec.attributesToDeclare = function() {
            return [
                this.attr("AssembleSummaryMeetingList", "assembleSummaryMeetingListOut", "AssembleSummaryMeetingList", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_MUIModel.AssembleEventSummaryList());
                }, true, Connect2_Assemble_MUIModel.AssembleEventSummaryList)
            ].concat(_super.attributesToDeclare.call(this));
        };
        GetAssembleMeetingSummaryListDataActRec.fromStructure = function(str) {
            return new GetAssembleMeetingSummaryListDataActRec(new GetAssembleMeetingSummaryListDataActRec.RecordClass({
                assembleSummaryMeetingListOut: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        GetAssembleMeetingSummaryListDataActRec.init();
        return GetAssembleMeetingSummaryListDataActRec;
    })(OS.Model.DataSourceRecord);

    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("EventList", "eventListVar", "EventList", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_MUIModel.AssembleEventSummaryList());
                }, false, Connect2_Assemble_MUIModel.AssembleEventSummaryList),
                this.attr("EventList_Filter", "eventList_FilterVar", "EventList_Filter", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_CSModel.AssembleEventFilterRec());
                }, false, Connect2_Assemble_CSModel.AssembleEventFilterRec),
                this.attr("IsShow_FilterDrawer", "isShow_FilterDrawerVar", "IsShow_FilterDrawer", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("EventList_FilterLabel", "eventList_FilterLabelVar", "EventList_FilterLabel", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("EventList_RangeFrom", "eventList_RangeFromVar", "EventList_RangeFrom", true, false, OS.DataTypes.DataTypes.DateTime, function() {
                    return OS.DataTypes.DateTime.defaultValue;
                }, false),
                this.attr("EventsList_RangeTo", "eventsList_RangeToVar", "EventsList_RangeTo", true, false, OS.DataTypes.DataTypes.DateTime, function() {
                    return OS.DataTypes.DateTime.defaultValue;
                }, false),
                this.attr("EventList_PageNumber", "eventList_PageNumberVar", "EventList_PageNumber", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 1;
                }, false),
                this.attr("EventList_IsFiltered", "eventList_IsFilteredVar", "EventList_IsFiltered", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("EventList_HasMoreRecords", "eventList_HasMoreRecordsVar", "EventList_HasMoreRecords", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("MaxRecords", "maxRecordsVar", "MaxRecords", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 10;
                }, false),
                this.attr("SkeletonList_Length", "skeletonList_LengthVar", "SkeletonList_Length", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 3;
                }, false),
                this.attr("HeaderMenuOptionList", "headerMenuOptionListVar", "HeaderMenuOptionList", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_MUIModel.TagList());
                }, false, Connect2_Assemble_MUIModel.TagList),
                this.attr("LocalSubdivisionId", "localSubdivisionIdVar", "LocalSubdivisionId", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("DeviceTimezone", "deviceTimezoneVar", "DeviceTimezone", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("IsHeaderLoading", "isHeaderLoadingVar", "IsHeaderLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return true;
                }, false),
                this.attr("SelectedMettingTypeIds", "selectedMettingTypeIdsVar", "SelectedMettingTypeIds", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_MUIModel.Text1RecordList());
                }, false, Connect2_Assemble_MUIModel.Text1RecordList),
                this.attr("SubdivisionId", "subdivisionIdIn", "SubdivisionId", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("_subdivisionIdInDataFetchStatus", "_subdivisionIdInDataFetchStatus", "_subdivisionIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("GetAssembleEventTypes", "getAssembleEventTypesDataAct", "getAssembleEventTypesDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new GetAssembleEventTypesDataActRec());
                }, true, GetAssembleEventTypesDataActRec),
                this.attr("GetAssembleMeetingSummaryList", "getAssembleMeetingSummaryListDataAct", "getAssembleMeetingSummaryListDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new GetAssembleMeetingSummaryListDataActRec());
                }, true, GetAssembleMeetingSummaryListDataActRec)
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
                    Model._hasValidationWidgetsValue = (((((((Connect2_LegacyShared_Share_StickyHeader_mvcModel.hasValidationWidgets || Connect2_LegacyShared_Reusable_HorizontalTags_mvcModel.hasValidationWidgets) || Connect2_Assemble_MUI_Assemble_AssembleSummary_List__Header_mvcModel.hasValidationWidgets) || Connect2_LegacyShared_NewConnect_Utilities_NC_ErrorScreen_mvcModel.hasValidationWidgets) || NavigationHandler_ScrollAnchors_ScrollAnchor_mvcModel.hasValidationWidgets) || Connect2_Assemble_MUI_Assemble_AssembleSummaryCard_mvcModel.hasValidationWidgets) || Connect2_Assemble_MUI_AssembleSkeleton_AssembleSummary_SkeletonList_mvcModel.hasValidationWidgets) || Connect2_Assemble_MUI_Assemble_AssembleSummary_FilterDrawer_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("SubdivisionId" in inputs) {
                this.variables.subdivisionIdIn = inputs.SubdivisionId;
                if ("_subdivisionIdInDataFetchStatus" in inputs) {
                    this.variables._subdivisionIdInDataFetchStatus = inputs._subdivisionIdInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Assemble.AssembleSummary_List");
});
define("Connect2_Assemble_MUI.Assemble.AssembleSummary_List.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "Connect2_Assemble_CS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model", "MemoryClientCache.model", "Connect2_LegacyShared.controller", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "Connect2_Assemble_MUI.Assemble.AssembleSummary_List.mvc$model", "Connect2_Assemble_MUI.Assemble.AssembleSummary_List.mvc$controller", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Share.StickyHeader.mvc$view", "Connect2_LegacyShared.Reusable.HorizontalTags.mvc$view", "Connect2_Assemble_MUI.Assemble.AssembleSummary_List__Header.mvc$view", "Connect2_LegacyShared.NewConnect_Utilities.NC_ErrorScreen.mvc$view", "NavigationHandler.ScrollAnchors.ScrollAnchor.mvc$view", "Connect2_Assemble_MUI.Assemble.AssembleSummaryCard.mvc$view", "Connect2_Assemble_MUI.AssembleSkeleton.AssembleSummary_SkeletonList.mvc$view", "Connect2_Assemble_MUI.Assemble.AssembleSummary_FilterDrawer.mvc$view", "Connect2_Assemble_MUI.controller$GetAssembleHeaderDateString", "Connect2_Assemble_CS.model$AssembleEventSummaryRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS", "Connect2_Assemble_MUI.model$AssembleEventSummaryList", "Connect2_Assemble_CS.model$AssembleEventFilterRec", "Connect2_LegacyShared.model$TagRec", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_Assemble_MUI.model$TagList", "Connect2_Assemble_MUI.model$Text1RecordList", "Connect2_Assemble_CS.model$AssembleEventTypeRec", "Connect2_Assemble_MUI.model$AssembleEventTypeBooleanRecordList", "Connect2_Assemble_MUI.model$AssembleEventTypeList", "APIDomain_Directory_IS.model$Users_Current_GETResponseRec", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_Assemble_MUI.referencesHealth$MemoryClientCache", "Connect2_LegacyShared.controller$GetCacheableUserInfo", "Connect2_Assemble_MUI.controller$GetIANATimezone", "NavigationHandler.controller$SetPreloadObject", "Connect2_Assemble_MUI.referencesHealth$NavigationHandler", "NavigationHandler.controller$RememberFocusedScrollAnchor", "Connect2_Assemble_CS.model$AssembleDetailsPreloadingRec", "Connect2_Assemble_MUI.controller$OffsetDateTimeByUserUTCOffset", "Connect2_Assemble_MUI.model$DateTimeDateTimeRecord", "Connect2_Assemble_MUI.controller$GetAssembleEventListDateRangeFilter", "Connect2_Assemble_MUI.controller$GeAssembleSummaryListFilterLabel"], function(OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, Connect2_Assemble_CSModel, Connect2_LegacySharedModel, APIDomain_Directory_ISModel, MemoryClientCacheModel, Connect2_LegacySharedController, NavigationHandlerController, React, OSView, Connect2_Assemble_MUI_Assemble_AssembleSummary_List_mvc_model, Connect2_Assemble_MUI_Assemble_AssembleSummary_List_mvc_controller, OSWidgets, Connect2_LegacyShared_Share_StickyHeader_mvc_view, Connect2_LegacyShared_Reusable_HorizontalTags_mvc_view, Connect2_Assemble_MUI_Assemble_AssembleSummary_List__Header_mvc_view, Connect2_LegacyShared_NewConnect_Utilities_NC_ErrorScreen_mvc_view, NavigationHandler_ScrollAnchors_ScrollAnchor_mvc_view, Connect2_Assemble_MUI_Assemble_AssembleSummaryCard_mvc_view, Connect2_Assemble_MUI_AssembleSkeleton_AssembleSummary_SkeletonList_mvc_view, Connect2_Assemble_MUI_Assemble_AssembleSummary_FilterDrawer_mvc_view) {
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
        View.displayName = "Assemble.AssembleSummary_List";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Share_StickyHeader_mvc_view, Connect2_LegacyShared_Reusable_HorizontalTags_mvc_view, Connect2_Assemble_MUI_Assemble_AssembleSummary_List__Header_mvc_view, Connect2_LegacyShared_NewConnect_Utilities_NC_ErrorScreen_mvc_view, NavigationHandler_ScrollAnchors_ScrollAnchor_mvc_view, Connect2_Assemble_MUI_Assemble_AssembleSummaryCard_mvc_view, Connect2_Assemble_MUI_AssembleSkeleton_AssembleSummary_SkeletonList_mvc_view, Connect2_Assemble_MUI_Assemble_AssembleSummary_FilterDrawer_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return Connect2_Assemble_MUI_Assemble_AssembleSummary_List_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_Assemble_MUI_Assemble_AssembleSummary_List_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    name: "DIV_Root"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(Connect2_LegacyShared_Share_StickyHeader_mvc_view, {
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
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    content: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "connect-pill-menu",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(Connect2_LegacyShared_Reusable_HorizontalTags_mvc_view, {
                            inputs: {
                                ActiveTagId: model.variables.eventList_FilterVar.assembleFilterTimeOptionIdAttr,
                                TagList: model.variables.headerMenuOptionListVar
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                onClickTag$Action: function(tagIdIn) {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Reusable/HorizontalTags OnClickTag");
                                            return controller.horizontalTagsOnClickTag$Action(tagIdIn, controller.callContext(eventHandlerContext));
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
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })), React.createElement(Connect2_Assemble_MUI_Assemble_AssembleSummary_List__Header_mvc_view, {
                            inputs: {
                                FilterLabel: model.variables.eventList_FilterLabelVar,
                                ListHeaderLabel: model.getCachedValue(idService.getId("Uw9zYzjjMkWrDHD7AIzFGQ.ListHeaderLabel"), function() {
                                    return ((model.variables.eventListVar.isEmpty) ? ("") : (OutSystemsDebugger.handleFunctionCall(function() {
                                        return Connect2_Assemble_MUIController.default.getAssembleHeaderDateString$Action(OS.BuiltinFunctions.dateTimeToDate(model.variables.eventListVar.getCurrent(callContext.iterationContext).dateTimeAttr), model.variables.eventList_FilterVar.assembleFilterTimeOptionIdAttr, callContext).dateTimeStringOut;
                                    }, OS.DataTypes.DataTypes.Text, callContext.id)));
                                }, function() {
                                    return model.variables.eventListVar.isEmpty;
                                }, function() {
                                    return model.variables.eventListVar.getCurrent(callContext.iterationContext).dateTimeAttr;
                                }, function() {
                                    return model.variables.eventList_FilterVar.assembleFilterTimeOptionIdAttr;
                                }),
                                IsLoading: model.variables.isHeaderLoadingVar,
                                ShowClear: model.variables.eventList_IsFilteredVar
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                clear$Action: function() {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/AssembleSummary_List__Header Clear");
                                            return controller.handler_ClearFilters$Action(controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });
                                    });;
                                },
                                onClick$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);

                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/AssembleSummary_List__Header OnClick");
                                        controller.toggleFilterDrawer$Action(controller.callContext(eventHandlerContext));
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
                                uuid: "4",
                                alias: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.eventList_IsFilteredVar), asPrimitiveValue(model.variables.isHeaderLoadingVar), asPrimitiveValue(model.variables.eventListVar.getCurrent(callContext.iterationContext).dateTimeAttr), asPrimitiveValue(model.variables.eventListVar.isEmpty), asPrimitiveValue(model.variables.eventList_FilterLabelVar), asPrimitiveValue(model.variables.headerMenuOptionListVar), asPrimitiveValue(model.variables.eventList_FilterVar.assembleFilterTimeOptionIdAttr)]
            }), $if((model.variables.eventListVar.isEmpty && model.variables.getAssembleMeetingSummaryListDataAct.isDataFetchedAttr), false, this, function() {
                return [React.createElement(Connect2_LegacyShared_NewConnect_Utilities_NC_ErrorScreen_mvc_view, {
                    inputs: {
                        In_ErrorMessage: "We were unable to find any meetings to display.",
                        In_MatchMainContentHeight: false
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
                        alias: "4"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    placeholders: {
                        placeholder_Icon: new PlaceholderContent(function() {
                            return [React.createElement(OSWidgets.Icon, {
                                icon: "flag",
                                iconSize: /*Fourtimes*/ 3,
                                style: "icon connect-icon-calendar-cross",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "6"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        })
                    },
                    _dependencies: []
                })];
            }, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "DIV_ResultList"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.List, {
                    animateItems: true,
                    extendedProperties: {
                        "disable-virtualization": "True"
                    },
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    mode: /*Default*/ 0,
                    onScrollEnding: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/AssembleSummary_List/List_AssembleSummaryCards OnScrollEnding");
                                return controller.list_AssembleSummaryCardsOnScrollEnding$Action(controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });
                        });;
                    },
                    source: model.variables.eventListVar,
                    style: "background-neutral-1 list list-group",
                    tag: "div",
                    _idProps: {
                        service: idService,
                        name: "List_AssembleSummaryCards"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    placeholders: {
                        content: new IteratorPlaceholderContent(function(idService, callContext) {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedEvents: {
                                    onClick: function() {
                                        return Promise.resolve().then(function() {
                                            var eventHandlerContext = callContext.clone();
                                            return OS.Flow.tryFinally(function() {
                                                var varBag = {};
                                                controller.pushDebuggerContext(eventHandlerContext);

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/AssembleSummary_List/Container onclick");
                                                return controller.onClick_AssembleMeetingSummaryCard$Action(controller.callContext(eventHandlerContext));
                                            }, function() {
                                                controller.popDebuggerContext(eventHandlerContext);
                                            });
                                        });;
                                    }
                                },
                                style: "background-neutral-0 margin-bottom-s padding-top-s",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "9"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: [asPrimitiveValue(model.variables.eventListVar.getCurrent(callContext.iterationContext))]
                            }, React.createElement(NavigationHandler_ScrollAnchors_ScrollAnchor_mvc_view, {
                                inputs: {
                                    Id: model.variables.eventListVar.getCurrent(callContext.iterationContext).eventIdAttr
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
                                    alias: "5"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            }), React.createElement(Connect2_Assemble_MUI_Assemble_AssembleSummaryCard_mvc_view, {
                                inputs: {
                                    AssembleEventSummary: model.variables.eventListVar.getCurrent(callContext.iterationContext),
                                    IsListItem: true
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
                                    alias: "6"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            }))];
                        }, callContext, idService, "1")
                    },
                    _dependencies: []
                }))];
            }), $if(model.variables.getAssembleMeetingSummaryListDataAct.isDataFetchedAttr, false, this, function() {
                return [];
            }, function() {
                return [React.createElement(Connect2_Assemble_MUI_AssembleSkeleton_AssembleSummary_SkeletonList_mvc_view, {
                    inputs: {
                        SkeletonListLength: model.variables.skeletonList_LengthVar
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
                        uuid: "12",
                        alias: "7"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    _dependencies: []
                })];
            }), React.createElement(Connect2_Assemble_MUI_Assemble_AssembleSummary_FilterDrawer_mvc_view, {
                inputs: {
                    IsOpen: model.variables.isShow_FilterDrawerVar,
                    AssembleMeetingFilter: model.variables.eventList_FilterVar
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    applyFilters$Action: function(assembleMeetingFilterIn) {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/AssembleSummary_FilterDrawer ApplyFilters");
                                return controller.handler_ApplyFilters$Action(assembleMeetingFilterIn, controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });
                        });;
                    },
                    close$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/AssembleSummary_FilterDrawer Close");
                            controller.toggleFilterDrawer$Action(controller.callContext(eventHandlerContext));
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
                    uuid: "13",
                    alias: "8"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("Connect2_Assemble_MUI.Assemble.AssembleSummary_List.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "Connect2_Assemble_CS.model", "Connect2_LegacyShared.model", "APIDomain_Directory_IS.model", "MemoryClientCache.model", "Connect2_LegacyShared.controller", "NavigationHandler.controller", "Connect2_Assemble_MUI.languageResources", "Connect2_Assemble_MUI.Assemble.AssembleSummary_List.mvc$debugger", "Connect2_Assemble_MUI.Assemble.AssembleSummary_List.mvc$controller.OnReady.FetchDataJS", "Connect2_Assemble_MUI.Assemble.AssembleSummary_List.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", "Connect2_Assemble_MUI.Assemble.AssembleSummary_List.mvc$controller.Refresh_EventList.ScrollToTopJS", "Connect2_Assemble_MUI.controller$GetAssembleHeaderDateString", "Connect2_Assemble_CS.model$AssembleEventSummaryRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS", "Connect2_Assemble_MUI.model$AssembleEventSummaryList", "Connect2_Assemble_CS.model$AssembleEventFilterRec", "Connect2_LegacyShared.model$TagRec", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_Assemble_MUI.model$TagList", "Connect2_Assemble_MUI.model$Text1RecordList", "Connect2_Assemble_CS.model$AssembleEventTypeRec", "Connect2_Assemble_MUI.model$AssembleEventTypeBooleanRecordList", "Connect2_Assemble_MUI.model$AssembleEventTypeList", "APIDomain_Directory_IS.model$Users_Current_GETResponseRec", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_Assemble_MUI.referencesHealth$MemoryClientCache", "Connect2_LegacyShared.controller$GetCacheableUserInfo", "Connect2_Assemble_MUI.controller$GetIANATimezone", "NavigationHandler.controller$SetPreloadObject", "Connect2_Assemble_MUI.referencesHealth$NavigationHandler", "NavigationHandler.controller$RememberFocusedScrollAnchor", "Connect2_Assemble_CS.model$AssembleDetailsPreloadingRec", "Connect2_Assemble_MUI.controller$OffsetDateTimeByUserUTCOffset", "Connect2_Assemble_MUI.model$DateTimeDateTimeRecord", "Connect2_Assemble_MUI.controller$GetAssembleEventListDateRangeFilter", "Connect2_Assemble_MUI.controller$GeAssembleSummaryListFilterLabel"], function(OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, Connect2_Assemble_CSModel, Connect2_LegacySharedModel, APIDomain_Directory_ISModel, MemoryClientCacheModel, Connect2_LegacySharedController, NavigationHandlerController, Connect2_Assemble_MUILanguageResources, Connect2_Assemble_MUI_Assemble_AssembleSummary_List_mvc_Debugger, Connect2_Assemble_MUI_Assemble_AssembleSummary_List_mvc_controller_OnReady_FetchDataJS, Connect2_Assemble_MUI_Assemble_AssembleSummary_List_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS, Connect2_Assemble_MUI_Assemble_AssembleSummary_List_mvc_controller_Refresh_EventList_ScrollToTopJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {
                throwAssyncException$Action: function(exceptionMessageIn) {
                    exceptionMessageIn = (exceptionMessageIn === undefined) ? "" : exceptionMessageIn;
                    return controller.executeActionInsideJSNode(controller._throwAssyncException$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(exceptionMessageIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "ThrowAssyncException");
                },
                refresh_GetAssembleMeetingSummaryList$Action: function() {
                    return controller.executeActionInsideJSNode(controller._refresh_GetAssembleMeetingSummaryList$Action.bind(controller), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "Refresh_GetAssembleMeetingSummaryList");
                },
                refresh_GetAssembleEventTypes$Action: function() {
                    return controller.executeActionInsideJSNode(controller._refresh_GetAssembleEventTypes$Action.bind(controller), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "Refresh_GetAssembleEventTypes");
                }
            };
            this.dataFetchDependenciesOriginal = {
                getAssembleEventTypes$DataActRefresh: -1,
                getAssembleMeetingSummaryList$DataActRefresh: -1
            };
            this.dataFetchDependentsGraph = {
                getAssembleEventTypes$DataActRefresh: [],
                getAssembleMeetingSummaryList$DataActRefresh: []
            };
            this.shouldSendClientVarsToDataSources = false;
        }
        // Server Actions

        // Aggregates and Data Actions
        Controller.prototype.getAssembleEventTypes$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:oInVoUf4o0SHjv0HIPhJfg:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.sGEZWUQYMUG0QxAmVBFZNA/DataActions.oInVoUf4o0SHjv0HIPhJfg:6TYnKbbRxyNpRRrpBmrCcA", "Connect2_Assemble_MUI", "GetAssembleEventTypes", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "Assemble/AssembleSummary_List/GetAssembleEventTypes");
                return controller.callDataAction("DataActionGetAssembleEventTypes", "screenservices/Connect2_Assemble_MUI/Assemble/AssembleSummary_List/DataActionGetAssembleEventTypes", "wQmOwrJ3fAYdM2Otx1rPOg", function(b) {
                    model.variables.getAssembleEventTypesDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.getAssembleEventTypesDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getAssembleEventTypesDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false).then(function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "Assemble/AssembleSummary_List/GetAssembleEventTypes On After Fetch");
                    controller._getAssembleEventTypesOnAfterFetch$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:oInVoUf4o0SHjv0HIPhJfg", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };
        Controller.prototype.getAssembleMeetingSummaryList$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:I2cjvPchMku3Jn3QLWQg5g:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.sGEZWUQYMUG0QxAmVBFZNA/DataActions.I2cjvPchMku3Jn3QLWQg5g:RXTMqEu3XbvHkZo92aTyxA", "Connect2_Assemble_MUI", "GetAssembleMeetingSummaryList", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "Assemble/AssembleSummary_List/GetAssembleMeetingSummaryList");
                return controller.callDataAction("DataActionGetAssembleMeetingSummaryList", "screenservices/Connect2_Assemble_MUI/Assemble/AssembleSummary_List/DataActionGetAssembleMeetingSummaryList", "H6nZsmyz5QdGUGgoTx76kQ", function(b) {
                    model.variables.getAssembleMeetingSummaryListDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.getAssembleMeetingSummaryListDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getAssembleMeetingSummaryListDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false).then(function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "Assemble/AssembleSummary_List/GetAssembleMeetingSummaryList On After Fetch");
                    controller._getAssembleMeetingSummaryListOnAfterFetch$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:I2cjvPchMku3Jn3QLWQg5g", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };

        Controller.prototype.dataFetchActionNames = ["getAssembleEventTypes$DataActRefresh", "getAssembleMeetingSummaryList$DataActRefresh"];
        // Client Actions
        Controller.prototype._onReady$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnReady");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.Assemble.AssembleSummary_List.OnReady$vars"))());
            var wasCurrentViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.wasCurrentViewRestoredFromCacheJSResult = wasCurrentViewRestoredFromCacheJSResult;
            OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:YVrBEuN3RUeyqams3+7Dvw:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.sGEZWUQYMUG0QxAmVBFZNA/ClientActions.YVrBEuN3RUeyqams3+7Dvw:cM5CDpZmfBwgtwI3QL_4rA", "Connect2_Assemble_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:KmTTyEozcUaNJGkCSmb_uA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Gtk9_3JJ70CG_7jJnhrrGQ", callContext.id);
                wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_Assemble_MUI_Assemble_AssembleSummary_List_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnReady", {
                    FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.Assemble.AssembleSummary_List.OnReady$wasCurrentViewRestoredFromCacheJSResult"))();
                    jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
                    return jsNodeResult;
                }, {}, {});
                // From cache?
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:WaAEyR1TgU2IIQVoYaiGcQ", callContext.id) && (wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut === true))) {
                        // Is Data Fetched?
                        if ((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:NLlH7a_kSEybO4TkcTfe0g", callContext.id) && (model.variables.getAssembleEventTypesDataAct.isDataFetchedAttr && model.variables.getAssembleMeetingSummaryListDataAct.isDataFetchedAttr))) {
                            OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:ODmxW4a360CeZeYsMkCAww", callContext.id);
                            return OS.Flow.returnAsync();

                        } else {
                            OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:QvqiwadKiEebEek0DekGrw", callContext.id);
                            // FetchSummaryList = notGetAssembleMeetingSummaryList.IsDataFetched
                            vars.value.fetchSummaryListVar = !(model.variables.getAssembleMeetingSummaryListDataAct.isDataFetchedAttr);
                            OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:QvqiwadKiEebEek0DekGrw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                            // FetchEventTypes = EventList_Filter.AssembleEventType.Empty and notGetAssembleEventTypes.IsDataFetched
                            vars.value.fetchEventTypesVar = (model.variables.eventList_FilterVar.assembleEventTypeAttr.isEmpty && !(model.variables.getAssembleEventTypesDataAct.isDataFetchedAttr));
                        }

                    } else {
                        OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:49VPmh4QykGv+5mLXW29fQ", callContext.id);
                        // Execute Action: SetLocalSubdivisonId
                        return controller._setLocalSubdivisonId$Action(callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Di4zHcGYnkKOnGl_EIFHrA", callContext.id);
                            // FetchSummaryList = True
                            vars.value.fetchSummaryListVar = true;
                            OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Di4zHcGYnkKOnGl_EIFHrA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                            // FetchEventTypes = True
                            vars.value.fetchEventTypesVar = true;
                        });
                    }

                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:pU6f59Fq60CEsRaPJpvycQ", callContext.id);
                    controller.safeExecuteJSNode(Connect2_Assemble_MUI_Assemble_AssembleSummary_List_mvc_controller_OnReady_FetchDataJS, "FetchData", "OnReady", {
                        FetchEventTypes: OS.DataConversion.JSNodeParamConverter.to(vars.value.fetchEventTypesVar, OS.DataTypes.DataTypes.Boolean),
                        FetchSummaryList: OS.DataConversion.JSNodeParamConverter.to(vars.value.fetchSummaryListVar, OS.DataTypes.DataTypes.Boolean)
                    }, function($parameters) {}, {
                        ThrowAssyncException: controller.clientActionProxies.throwAssyncException$Action,
                        Refresh_GetAssembleMeetingSummaryList: controller.clientActionProxies.refresh_GetAssembleMeetingSummaryList$Action,
                        Refresh_GetAssembleEventTypes: controller.clientActionProxies.refresh_GetAssembleEventTypes$Action
                    }, {});
                    OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:q14SWJ6zYkSxUfezzxfQRA", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:YVrBEuN3RUeyqams3+7Dvw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:YVrBEuN3RUeyqams3+7Dvw", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_Assemble_MUI.Assemble.AssembleSummary_List.OnReady$vars", [{
            name: "FetchSummaryList",
            attrName: "fetchSummaryListVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "FetchEventTypes",
            attrName: "fetchEventTypesVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.registerVariableGroupType("Connect2_Assemble_MUI.Assemble.AssembleSummary_List.OnReady$wasCurrentViewRestoredFromCacheJSResult", [{
            name: "FromCache",
            attrName: "fromCacheOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._buildHeaderMenu$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("BuildHeaderMenu");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:QONxI5YWB02aZZS_Ioc_hw:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.sGEZWUQYMUG0QxAmVBFZNA/ClientActions.QONxI5YWB02aZZS_Ioc_hw:q8AJhSC6+czkEKZIBxQrmQ", "Connect2_Assemble_MUI", "BuildHeaderMenu", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:d23+fFSbGUyZA4ClEYFCjg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:rfrloWa2rUKDPqk7SWihmQ", callContext.id);
                // Execute Action: ListClear_MenuList
                OS.SystemActions.listClear(model.variables.headerMenuOptionListVar, callContext);
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:OTmSbIK_T0O3kDvlEdc7ow", callContext.id);
                // Execute Action: ListAppendAll_MenuList
                OS.SystemActions.listAppendAll(model.variables.headerMenuOptionListVar, function() {
                    var list = new Connect2_Assemble_MUIModel.TagList();
                    list.pushAll([function() {
                        var rec = new Connect2_LegacySharedModel.TagRec();
                        rec.idAttr = Connect2_Assemble_MUIModel.staticEntities.viewmodeType.upcomingMeetings;
                        rec.labelAttr = Connect2_Assemble_MUIModel.staticEntities.viewmodeType.upcomingMeetings;
                        return rec;
                    }(), function() {
                        var rec = new Connect2_LegacySharedModel.TagRec();
                        rec.idAttr = Connect2_Assemble_MUIModel.staticEntities.viewmodeType.pastMeetings;
                        rec.labelAttr = Connect2_Assemble_MUIModel.staticEntities.viewmodeType.pastMeetings;
                        return rec;
                    }()]);
                    return list;
                }(), callContext);
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Vo7gySN1T02E0h7mCJVZkw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:QONxI5YWB02aZZS_Ioc_hw", callContext.id);
            }

        };
        Controller.prototype._handler_ClearFilters$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_ClearFilters");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:dtmGNPE4+0Cq9oha8diuPg:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.sGEZWUQYMUG0QxAmVBFZNA/ClientActions.dtmGNPE4+0Cq9oha8diuPg:dcOLDkfMHTvHlRHbAf3tGQ", "Connect2_Assemble_MUI", "Handler_ClearFilters", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:I7K9tiqdVUmaQ_+7gMwr4w", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                // Foreach EventList_Filter.AssembleEventType
                callContext.iterationContext.registerIterationStart(model.variables.eventList_FilterVar.assembleEventTypeAttr);
                try {
                    var assembleEventTypeIterator = callContext.iterationContext.getIterator(model.variables.eventList_FilterVar.assembleEventTypeAttr);
                    var assembleEventTypeIndex = 0;
                    while ((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:ZzDcCrxTvkG9+dMELhhkuw", callContext.id) && (assembleEventTypeIndex < model.variables.eventList_FilterVar.assembleEventTypeAttr.length))) {
                        assembleEventTypeIterator.currentRowNumber = assembleEventTypeIndex;
                        OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:8O2YjAWsmE2JqE7s5GqFZQ", callContext.id);
                        // EventList_Filter.AssembleEventType.Current.IsSelected = False
                        model.variables.eventList_FilterVar.assembleEventTypeAttr.getItem(assembleEventTypeIndex.valueOf()).isSelectedAttr = false;
                        assembleEventTypeIndex++;
                    }

                } finally {
                    callContext.iterationContext.registerIterationEnd(model.variables.eventList_FilterVar.assembleEventTypeAttr);
                }

                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:iMvheDx6DkGRA2MkqWMOug", callContext.id);
                // Execute Action: Refresh_EventList
                return controller._refresh_EventList$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:jnvl2ZHiyE2XkZSqUv4ZIA", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:dtmGNPE4+0Cq9oha8diuPg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:dtmGNPE4+0Cq9oha8diuPg", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._getAssembleEventTypesOnAfterFetch$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("GetAssembleEventTypesOnAfterFetch");
            callContext = controller.callContext(callContext);
            var isCurrentlySelectedVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.isCurrentlySelectedVar = isCurrentlySelectedVar;
            try {
                OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:5lLCQ6rrJk6xAzcf9bRdHw:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.sGEZWUQYMUG0QxAmVBFZNA/ClientActions.5lLCQ6rrJk6xAzcf9bRdHw:JjPknpoKDDczIgH+q9DQrA", "Connect2_Assemble_MUI", "GetAssembleEventTypesOnAfterFetch", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Mxt2NntVtUSoIMTM1MZxOw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:gpmjXDH_dES7Ynqwyzdqag", callContext.id);
                // Execute Action: ListClearEventListFilter
                OS.SystemActions.listClear(model.variables.eventList_FilterVar.assembleEventTypeAttr, callContext);
                // Foreach GetAssembleEventTypes.AssembleEventTypeList
                callContext.iterationContext.registerIterationStart(model.variables.getAssembleEventTypesDataAct.assembleEventTypeListOut);
                try {
                    var assembleEventTypeListIterator = callContext.iterationContext.getIterator(model.variables.getAssembleEventTypesDataAct.assembleEventTypeListOut);
                    var assembleEventTypeListIndex = 0;
                    while ((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:UaJNOMmirE+qumC17oXYlA", callContext.id) && (assembleEventTypeListIndex < model.variables.getAssembleEventTypesDataAct.assembleEventTypeListOut.length))) {
                        assembleEventTypeListIterator.currentRowNumber = assembleEventTypeListIndex;
                        OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:CIFdpxReSkuBYiEl06FJ6w", callContext.id);
                        // Execute Action: IsCurrentlySelected
                        isCurrentlySelectedVar.value = OS.SystemActions.listAny(model.variables.selectedMettingTypeIdsVar, function(p) {
                            return (p.textAttr === model.variables.getAssembleEventTypesDataAct.assembleEventTypeListOut.getItem(assembleEventTypeListIndex.valueOf()).idAttr);
                        }, callContext);

                        OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:TfzEKUWDTUW3vesVcPZMEg", callContext.id);
                        // Execute Action: ListAppend
                        OS.SystemActions.listAppend(model.variables.eventList_FilterVar.assembleEventTypeAttr, OS.DataConversion.JSConversions.typeConvertRecord(model.variables.getAssembleEventTypesDataAct.assembleEventTypeListOut.getItem(assembleEventTypeListIndex.valueOf()), new Connect2_Assemble_MUIModel.AssembleEventTypeBooleanRecord(), function(source, target) {
                            target.assembleEventTypeAttr.idAttr = source.idAttr;
                            target.assembleEventTypeAttr.titleAttr = source.titleAttr;
                            target.isSelectedAttr = isCurrentlySelectedVar.value.resultOut;
                            return target;
                        }), callContext);
                        assembleEventTypeListIndex++;
                    }

                } finally {
                    callContext.iterationContext.registerIterationEnd(model.variables.getAssembleEventTypesDataAct.assembleEventTypeListOut);
                }

                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:DSj4iW4KhEG_K3fuj3e7Xg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:5lLCQ6rrJk6xAzcf9bRdHw", callContext.id);
            }

        };
        Controller.prototype._throwAssyncException$Action = function(exceptionMessageIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ThrowAssyncException");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.Assemble.AssembleSummary_List.ThrowAssyncException$vars"))());
            vars.value.exceptionMessageInLocal = exceptionMessageIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:qv3aZV4rSkOPPfYmRVYuQQ:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.sGEZWUQYMUG0QxAmVBFZNA/ClientActions.qv3aZV4rSkOPPfYmRVYuQQ:H5VHhiWNTHRgqcRyB2+Vrg", "Connect2_Assemble_MUI", "ThrowAssyncException", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:1lj6tOJNf0q2_qnTFbfaHw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:cNNQKJH49kqA7LSJ5XxbeQ", callContext.id);
                // Trigger Event: AssyncException
                return controller.assyncException$Action(vars.value.exceptionMessageInLocal, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:ULmKlrBwm0CYuy4XPV9xKQ", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:qv3aZV4rSkOPPfYmRVYuQQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:qv3aZV4rSkOPPfYmRVYuQQ", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_Assemble_MUI.Assemble.AssembleSummary_List.ThrowAssyncException$vars", [{
            name: "ExceptionMessage",
            attrName: "exceptionMessageInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._setLocalSubdivisonId$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("SetLocalSubdivisonId");
            callContext = controller.callContext(callContext);
            var getCacheableUserInfoVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getCacheableUserInfoVar = getCacheableUserInfoVar;
            OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:nsdCbjcvN0ev358sL4W7tg:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.sGEZWUQYMUG0QxAmVBFZNA/ClientActions.nsdCbjcvN0ev358sL4W7tg:8fiYFAJADtrvfv2MDaapsg", "Connect2_Assemble_MUI", "SetLocalSubdivisonId", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:d0QGkHLP20e9Z8jA7MDNZw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:7jLAHleP9kSNi9GkQN_G6Q", callContext.id) && model.variables.subdivisionIdIn.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier())))) {
                        OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:SWewV8+MPUW0PL+KUtnpIg", callContext.id);
                        // Execute Action: GetCacheableUserInfo
                        model.flush();
                        return Connect2_LegacySharedController.default.getCacheableUserInfo$Action(callContext).then(function(value) {
                            getCacheableUserInfoVar.value = value;
                        }).then(function() {
                            OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:5h2ytLPsuEiaTGNS1WMRVg", callContext.id);
                            // LocalSubdivisionId = GetCacheableUserInfo.UserInformation.Subdivision.Id
                            model.variables.localSubdivisionIdVar = getCacheableUserInfoVar.value.userInformationOut.subdivisionAttr.idAttr;
                            OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:cdFgvuI3l0Sw3HnKbzyM0Q", callContext.id);
                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:kxrjU3Ha_USBH0Hdar0ZNg", callContext.id);
                        // LocalSubdivisionId = SubdivisionId
                        model.variables.localSubdivisionIdVar = model.variables.subdivisionIdIn;
                        OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:cdFgvuI3l0Sw3HnKbzyM0Q", callContext.id);
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:nsdCbjcvN0ev358sL4W7tg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:nsdCbjcvN0ev358sL4W7tg", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._setDeviceTimezone$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("SetDeviceTimezone");
            callContext = controller.callContext(callContext);
            var getIANATimezoneVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getIANATimezoneVar = getIANATimezoneVar;
            try {
                OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:9U0Vf65A+kWr03CnC0nyCw:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.sGEZWUQYMUG0QxAmVBFZNA/ClientActions.9U0Vf65A+kWr03CnC0nyCw:j_QF_5481IHGs+CxwpNoqA", "Connect2_Assemble_MUI", "SetDeviceTimezone", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:VqlfaWODiE6oUeHndDgkXw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Xe3CIfL4jEK3j9JFVKWfEg", callContext.id);
                // Execute Action: GetIANATimezone
                getIANATimezoneVar.value = Connect2_Assemble_MUIController.default.getIANATimezone$Action(callContext);

                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:_v+9LgIl7ke0g0jywh_23g", callContext.id);
                // DeviceTimezone = GetIANATimezone.IANATimeZone
                model.variables.deviceTimezoneVar = getIANATimezoneVar.value.iANATimeZoneOut;
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Dmz+cUeJN0KyUnIwEuiggQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:9U0Vf65A+kWr03CnC0nyCw", callContext.id);
            }

        };
        Controller.prototype._refresh_EventList$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Refresh_EventList");
            callContext = controller.callContext(callContext);
            var listFilterVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.listFilterVar = listFilterVar;
            OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:ga4kgPSKVEaNqMFl7UM0vw:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.sGEZWUQYMUG0QxAmVBFZNA/ClientActions.ga4kgPSKVEaNqMFl7UM0vw:L0Qfev2MkZuVUIZEeeZzHQ", "Connect2_Assemble_MUI", "Refresh_EventList", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:imGKH6XZo0muwRsAhJt_1w", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:u9hZZvuju0CZ9J+FhpJC7w", callContext.id);
                // Execute Action: ListFilter
                listFilterVar.value = OS.SystemActions.listFilter(model.variables.eventList_FilterVar.assembleEventTypeAttr, function(p) {
                    return p.isSelectedAttr;
                }, callContext);

                // Has any Filter applyed?
                if ((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Atl0v4US90KFVyjiGMVweg", callContext.id) && !(listFilterVar.value.filteredListOut.isEmpty))) {
                    OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:a4R4qzA9VEOh5INvF6F3dw", callContext.id);
                    // EventList_IsFiltered = True
                    model.variables.eventList_IsFilteredVar = true;
                } else {
                    OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:t9OFbyCWakKnRuMqRBp0uw", callContext.id);
                    // EventList_IsFiltered = False
                    model.variables.eventList_IsFilteredVar = false;
                }

                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:jeGnQoO4LUOxs78Y2Oa6Bw", callContext.id);
                controller.safeExecuteJSNode(Connect2_Assemble_MUI_Assemble_AssembleSummary_List_mvc_controller_Refresh_EventList_ScrollToTopJS, "ScrollToTop", "Refresh_EventList", null, function($parameters) {}, {}, {});
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:yiOfcE8oA06UKP6y09+tlg", callContext.id);
                // Execute Action: SetFilterLabel
                controller._setFilterLabel$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:KM1FCB3Tn0ycP9Ms3d2LkA", callContext.id);
                // Execute Action: ListClear_LocalAssembleSummaryMeetingList
                OS.SystemActions.listClear(model.variables.eventListVar, callContext);
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:kriVR1qe_k6708z770iFaw", callContext.id);
                // EventList_PageNumber = 1
                model.variables.eventList_PageNumberVar = 1;
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:DecOi0OulkG8iBKiPMAVNQ", callContext.id);
                // Execute Action: SetDateRangeByFilterOptionId
                controller._setDateRangeByFilterOptionId$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:4hmNZCmogk61qYN+c8dccA", callContext.id);
                // Execute Action: SetDeviceTimezone
                controller._setDeviceTimezone$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:2lLdP_Euj0mHoB_Vq97Nkg", callContext.id);
                // Refresh Query: GetAssembleMeetingSummaryList
                var result = controller.getAssembleMeetingSummaryList$DataActRefresh(callContext);
                model.flush();
                return result.then(function() {
                    OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:JA_OPmGoFUmW3SdaCbwysQ", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:ga4kgPSKVEaNqMFl7UM0vw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:ga4kgPSKVEaNqMFl7UM0vw", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._list_AssembleSummaryCardsOnScrollEnding$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("List_AssembleSummaryCardsOnScrollEnding");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:UCssgCc7M0+TQ_NrrtNtzw:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.sGEZWUQYMUG0QxAmVBFZNA/ClientActions.UCssgCc7M0+TQ_NrrtNtzw:KVdObHy+SDSdVNxowH5kug", "Connect2_Assemble_MUI", "List_AssembleSummaryCardsOnScrollEnding", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:D9oDcHIBKUyUZVzYeVUBdg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:dBjvgYEcwEW8vKsaxn4z3w", callContext.id) && model.variables.getAssembleMeetingSummaryListDataAct.isDataFetchedAttr)) {
                        return OS.Flow.executeSequence(function() {
                            if ((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:DUXM805j60GS2soSRDLu7A", callContext.id) && model.variables.eventList_HasMoreRecordsVar)) {
                                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:rC4hl6ox+USfdrpqq2ZqQA", callContext.id);
                                // EventList_PageNumber = EventList_PageNumber + 1
                                model.variables.eventList_PageNumberVar = (model.variables.eventList_PageNumberVar + 1);
                                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:RG+lWxKlUkOXM88lrcZctg", callContext.id);
                                // Refresh Query: GetAssembleMeetingSummaryList
                                var result = controller.getAssembleMeetingSummaryList$DataActRefresh(callContext);
                                model.flush();
                                return result.then(function() {
                                    OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:hf4EPbD6e0WmYN09Jl4+Jg", callContext.id);
                                });
                            } else {
                                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:WhIXlzdmGku9m1S4wWKJHw", callContext.id);
                            }

                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:UohYz5Uj4ESJdr5y2Ru8lg", callContext.id);
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:UCssgCc7M0+TQ_NrrtNtzw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:UCssgCc7M0+TQ_NrrtNtzw", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._onClick_AssembleMeetingSummaryCard$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_AssembleMeetingSummaryCard");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.Assemble.AssembleSummary_List.OnClick_AssembleMeetingSummaryCard$vars"))());
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:G5AFgtkQK0qc34R3VVzyqw:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.sGEZWUQYMUG0QxAmVBFZNA/ClientActions.G5AFgtkQK0qc34R3VVzyqw:kREiZKmOvkRnQMxr1apAfA", "Connect2_Assemble_MUI", "OnClick_AssembleMeetingSummaryCard", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:MxWSad6yQ0yCFIsUZEeE3g", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:TXdn3IUgp0Kb0mCtFBzyDQ", callContext.id) && model.variables.eventListVar.getCurrent(callContext.iterationContext).isUnavailableAttr)) {
                        OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:99aNS3nBX06CdOs_NqV+YQ", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:rzjCFguCjEiIMDJ7rQnWsw", callContext.id);
                        // AssembleDetailsPreloading.AssembleEventSummary = EventList.Current
                        vars.value.assembleDetailsPreloadingVar.assembleEventSummaryAttr = model.variables.eventListVar.getCurrent(callContext.iterationContext);
                        OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:rzjCFguCjEiIMDJ7rQnWsw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                        // AssembleDetailsPreloading.PreloadedFromListIndex = EventList.CurrentRowNumber
                        vars.value.assembleDetailsPreloadingVar.preloadedFromListIndexAttr = model.variables.eventListVar.getCurrentRowNumber(callContext.iterationContext);
                        OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:MubYQdl2MEKAmP4qEC77LA", callContext.id);
                        // Execute Action: RememberFocusedScrollAnchor
                        NavigationHandlerController.default.rememberFocusedScrollAnchor$Action(idService.getId("List_AssembleSummaryCards"), model.variables.eventListVar.getCurrentRowNumber(callContext.iterationContext), model.variables.eventListVar.getCurrent(callContext.iterationContext).eventIdAttr, callContext);
                        OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:VrtYI_OWeEu1dmsvVx6esg", callContext.id);
                        // Execute Action: SetPreloadObject
                        NavigationHandlerController.default.setPreloadObject$Action(OS.BuiltinFunctions.toObject(vars.value.assembleDetailsPreloadingVar), callContext);
                        OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:673IBMSqZkiHS0DYg31nKA", callContext.id);
                        // Trigger Event: NavigateTo_AssembleDetail
                        return controller.navigateTo_AssembleDetail$Action(model.variables.eventListVar.getCurrent(callContext.iterationContext).seriesIdAttr, model.variables.eventListVar.getCurrent(callContext.iterationContext).eventIdAttr, model.variables.eventListVar.getCurrent(callContext.iterationContext).dateTimeAttr, callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:GsWGe4pczk606u+yG6NtXQ", callContext.id);
                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:G5AFgtkQK0qc34R3VVzyqw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:G5AFgtkQK0qc34R3VVzyqw", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_Assemble_MUI.Assemble.AssembleSummary_List.OnClick_AssembleMeetingSummaryCard$vars", [{
            name: "AssembleDetailsPreloading",
            attrName: "assembleDetailsPreloadingVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new Connect2_Assemble_CSModel.AssembleDetailsPreloadingRec();
            },
            complexType: Connect2_Assemble_CSModel.AssembleDetailsPreloadingRec
        }]);
        Controller.prototype._handler_ApplyFilters$Action = function(in_AssembleMeetingFilterIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_ApplyFilters");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.Assemble.AssembleSummary_List.Handler_ApplyFilters$vars"))());
            vars.value.in_AssembleMeetingFilterInLocal = in_AssembleMeetingFilterIn.clone();
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:_DEOjKtabkWXg5OZf2MUvQ:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.sGEZWUQYMUG0QxAmVBFZNA/ClientActions._DEOjKtabkWXg5OZf2MUvQ:SmKptyo6271EIQPKMtldUQ", "Connect2_Assemble_MUI", "Handler_ApplyFilters", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:dWMqCzT9SE2eUmSw9oXn_Q", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:GRuhnAGjw0ielF6Qzr1z5w", callContext.id);
                // EventList_Filter = In_AssembleMeetingFilter
                model.variables.eventList_FilterVar = vars.value.in_AssembleMeetingFilterInLocal;
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:9pySMyAssUmBARj0tg0dTg", callContext.id);
                // IsShow_FilterDrawer = False
                model.variables.isShow_FilterDrawerVar = false;
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Yr_nUT8N7kKK747VIKPDjQ", callContext.id);
                // Execute Action: Refresh_EventList
                return controller._refresh_EventList$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:3luqKKp2dk2pkHASK62jeA", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:_DEOjKtabkWXg5OZf2MUvQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:_DEOjKtabkWXg5OZf2MUvQ", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_Assemble_MUI.Assemble.AssembleSummary_List.Handler_ApplyFilters$vars", [{
            name: "In_AssembleMeetingFilter",
            attrName: "in_AssembleMeetingFilterInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new Connect2_Assemble_CSModel.AssembleEventFilterRec();
            },
            complexType: Connect2_Assemble_CSModel.AssembleEventFilterRec
        }]);
        Controller.prototype._getAssembleMeetingSummaryListOnAfterFetch$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("GetAssembleMeetingSummaryListOnAfterFetch");
            callContext = controller.callContext(callContext);
            var offsetDateTimeByUserUTCOffsetVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.offsetDateTimeByUserUTCOffsetVar = offsetDateTimeByUserUTCOffsetVar;
            try {
                OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:KV09rE9SdUurcrYYnZysdA:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.sGEZWUQYMUG0QxAmVBFZNA/ClientActions.KV09rE9SdUurcrYYnZysdA:C6ZAQllIxnc6c5vIiFpioA", "Connect2_Assemble_MUI", "GetAssembleMeetingSummaryListOnAfterFetch", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:RhYEcUT_uEGoi16mUqkSKw", callContext.id);
                // Foreach GetAssembleMeetingSummaryList.AssembleSummaryMeetingList
                callContext.iterationContext.registerIterationStart(model.variables.getAssembleMeetingSummaryListDataAct.assembleSummaryMeetingListOut);
                try {
                    var assembleSummaryMeetingListIterator = callContext.iterationContext.getIterator(model.variables.getAssembleMeetingSummaryListDataAct.assembleSummaryMeetingListOut);
                    var assembleSummaryMeetingListIndex = 0;
                    while ((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:cqF1+mICLEmAKMlNBRxztQ", callContext.id) && (assembleSummaryMeetingListIndex < model.variables.getAssembleMeetingSummaryListDataAct.assembleSummaryMeetingListOut.length))) {
                        assembleSummaryMeetingListIterator.currentRowNumber = assembleSummaryMeetingListIndex;
                        OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:9rrgZPHtJkaeguQ7EtOHUA", callContext.id);
                        // Execute Action: OffsetDateTimeByUserUTCOffset
                        offsetDateTimeByUserUTCOffsetVar.value = Connect2_Assemble_MUIController.default.offsetDateTimeByUserUTCOffset$Action(model.variables.getAssembleMeetingSummaryListDataAct.assembleSummaryMeetingListOut.getItem(assembleSummaryMeetingListIndex.valueOf()).dateTimeAttr, false, callContext);

                        OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Az3icZZJm0Or4PG8tW_UpA", callContext.id);
                        // GetAssembleMeetingSummaryList.AssembleSummaryMeetingList.Current.DateTime = OffsetDateTimeByUserUTCOffset.ConvertedDateTime
                        model.variables.getAssembleMeetingSummaryListDataAct.assembleSummaryMeetingListOut.getItem(assembleSummaryMeetingListIndex.valueOf()).dateTimeAttr = offsetDateTimeByUserUTCOffsetVar.value.convertedDateTimeOut;
                        OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:MOt1tm0eqkqwplM8xqRoDQ", callContext.id);
                        // Execute Action: ListAppend
                        OS.SystemActions.listAppend(model.variables.eventListVar, model.variables.getAssembleMeetingSummaryListDataAct.assembleSummaryMeetingListOut.getItem(assembleSummaryMeetingListIndex.valueOf()), callContext);
                        assembleSummaryMeetingListIndex++;
                    }

                } finally {
                    callContext.iterationContext.registerIterationEnd(model.variables.getAssembleMeetingSummaryListDataAct.assembleSummaryMeetingListOut);
                }

                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:e1DLwYgjBkKOG7DcxEPY2g", callContext.id);
                // EventList_HasMoreRecords = notGetAssembleMeetingSummaryList.AssembleSummaryMeetingList.Empty and notGetAssembleMeetingSummaryList.AssembleSummaryMeetingList.Length < MaxRecords
                model.variables.eventList_HasMoreRecordsVar = (!(model.variables.getAssembleMeetingSummaryListDataAct.assembleSummaryMeetingListOut.isEmpty) && !((model.variables.getAssembleMeetingSummaryListDataAct.assembleSummaryMeetingListOut.length < model.variables.maxRecordsVar)));
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:kD14RuPlpkeyQ2ggM8+0Uw", callContext.id);
                // IsHeaderLoading = False
                model.variables.isHeaderLoadingVar = false;
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:_SSpiXAl+0ihq_eh6XzAPg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:KV09rE9SdUurcrYYnZysdA", callContext.id);
            }

        };
        Controller.prototype._toggleFilterDrawer$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ToggleFilterDrawer");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:u4n3raj3XE+TTJASjED_Fw:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.sGEZWUQYMUG0QxAmVBFZNA/ClientActions.u4n3raj3XE+TTJASjED_Fw:urqbMxX+3Xr_CURS_1g_aQ", "Connect2_Assemble_MUI", "ToggleFilterDrawer", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:YHUin5KfzEuQB77g+x4hlQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:ICYARn0S80WHBOKDOT91Tw", callContext.id);
                // IsShow_FilterDrawer = notIsShow_FilterDrawer
                model.variables.isShow_FilterDrawerVar = !(model.variables.isShow_FilterDrawerVar);
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:McfKiA+hR029X+Yb_jg4ww", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:u4n3raj3XE+TTJASjED_Fw", callContext.id);
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
                OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:P1Snt1rbe0yPxYfxuWwgRA:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.sGEZWUQYMUG0QxAmVBFZNA/ClientActions.P1Snt1rbe0yPxYfxuWwgRA:9EJB56r0WZNFszJXnccZ_A", "Connect2_Assemble_MUI", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:OL0WYbwupEuJFZ3LzkzTRg", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:bFx4M3RhM0SFbanGjnHbyw", callContext.id) && (model.variables.eventList_FilterVar.assembleFilterTimeOptionIdAttr === OS.BuiltinFunctions.nullTextIdentifier()))) {
                    OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:5JO735XC_Umk1JauN2hBLQ", callContext.id);
                    // EventList_Filter.AssembleFilterTimeOptionId = UpcomingMeetings
                    model.variables.eventList_FilterVar.assembleFilterTimeOptionIdAttr = Connect2_Assemble_MUIModel.staticEntities.viewmodeType.upcomingMeetings;
                    OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Bt86vd_4AkmbFdXfao_ePQ", callContext.id);
                    // Execute Action: SetDateRangeByFilterOptionId
                    controller._setDateRangeByFilterOptionId$Action(callContext);
                }

                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:zwIjSmUCyUGMFPGYWQcDxw", callContext.id);
                // Execute Action: BuildHeaderMenu
                controller._buildHeaderMenu$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:P+PwNj7R80ePx8ZPVCORNw", callContext.id);
                // Execute Action: SetFilterLabel
                controller._setFilterLabel$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:qA4ewTHBW0WT2TwDbRLs5g", callContext.id);
                // Execute Action: SetDeviceTimezone
                controller._setDeviceTimezone$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:jbTB8s6n9EGz+Y4BrcbndA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:P1Snt1rbe0yPxYfxuWwgRA", callContext.id);
            }

        };
        Controller.prototype._horizontalTagsOnClickTag$Action = function(tagIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("HorizontalTagsOnClickTag");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.Assemble.AssembleSummary_List.HorizontalTagsOnClickTag$vars"))());
            vars.value.tagIdInLocal = tagIdIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:QOBgucE7+UG75lcAYVd_AQ:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.sGEZWUQYMUG0QxAmVBFZNA/ClientActions.QOBgucE7+UG75lcAYVd_AQ:2LMWrzEXs4SerR_LYCQl3Q", "Connect2_Assemble_MUI", "HorizontalTagsOnClickTag", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:OtAXuFp3HkWczCF_nCb74w", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:BEOJj9szqE2EGp6WG1mVdA", callContext.id);
                // EventList_Filter.AssembleFilterTimeOptionId = TextToIdentifier
                model.variables.eventList_FilterVar.assembleFilterTimeOptionIdAttr = OS.BuiltinFunctions.textToIdentifier(vars.value.tagIdInLocal);
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:gn5Y85sAfEia1mN3ecmYJQ", callContext.id);
                // Execute Action: Handler_ApplyFilters
                return controller._handler_ApplyFilters$Action(model.variables.eventList_FilterVar, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:H+pRTEf5gk2tIAkr4Vq4Gg", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:QOBgucE7+UG75lcAYVd_AQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:QOBgucE7+UG75lcAYVd_AQ", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_Assemble_MUI.Assemble.AssembleSummary_List.HorizontalTagsOnClickTag$vars", [{
            name: "TagId",
            attrName: "tagIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._setDateRangeByFilterOptionId$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("SetDateRangeByFilterOptionId");
            callContext = controller.callContext(callContext);
            var offsetDateTimeByUserUTCOffset_EndVar = new OS.DataTypes.VariableHolder();
            var offsetDateTimeByUserUTCOffset_StartVar = new OS.DataTypes.VariableHolder();
            var getAssembleEventListDateRangeFilterVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.offsetDateTimeByUserUTCOffset_EndVar = offsetDateTimeByUserUTCOffset_EndVar;
            varBag.offsetDateTimeByUserUTCOffset_StartVar = offsetDateTimeByUserUTCOffset_StartVar;
            varBag.getAssembleEventListDateRangeFilterVar = getAssembleEventListDateRangeFilterVar;
            try {
                OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:BO6ywP+rM0Kfws1ntJthBQ:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.sGEZWUQYMUG0QxAmVBFZNA/ClientActions.BO6ywP+rM0Kfws1ntJthBQ:Ax4MYKc2errnsgIoRPb1YA", "Connect2_Assemble_MUI", "SetDateRangeByFilterOptionId", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:41eEd2fnq0WEOefWCFVSdQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:5+UJvYV1I0OOIEV8rRQJEw", callContext.id);
                // Execute Action: GetAssembleEventListDateRangeFilter
                getAssembleEventListDateRangeFilterVar.value = Connect2_Assemble_MUIController.default.getAssembleEventListDateRangeFilter$Action(model.variables.eventList_FilterVar.assembleFilterTimeOptionIdAttr, callContext);

                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:g7JRkDLIREqBWP_7QJpCEA", callContext.id);
                // Execute Action: OffsetDateTimeByUserUTCOffset_Start
                offsetDateTimeByUserUTCOffset_StartVar.value = Connect2_Assemble_MUIController.default.offsetDateTimeByUserUTCOffset$Action(getAssembleEventListDateRangeFilterVar.value.dateRangeOut.startDateTimeAttr, true, callContext);

                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:_y9pFQEQ5EO_zhzCPRPnTw", callContext.id);
                // Execute Action: OffsetDateTimeByUserUTCOffset_End
                offsetDateTimeByUserUTCOffset_EndVar.value = Connect2_Assemble_MUIController.default.offsetDateTimeByUserUTCOffset$Action(getAssembleEventListDateRangeFilterVar.value.dateRangeOut.endDateTimeAttr, true, callContext);

                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:ZVqwlkQrXUeOs6uhrKd9Sw", callContext.id);
                // EventList_RangeFrom = OffsetDateTimeByUserUTCOffset_Start.ConvertedDateTime
                model.variables.eventList_RangeFromVar = offsetDateTimeByUserUTCOffset_StartVar.value.convertedDateTimeOut;
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:ZVqwlkQrXUeOs6uhrKd9Sw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // EventsList_RangeTo = OffsetDateTimeByUserUTCOffset_End.ConvertedDateTime
                model.variables.eventsList_RangeToVar = offsetDateTimeByUserUTCOffset_EndVar.value.convertedDateTimeOut;
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:vjqVDyc5Ik+Quk_IiKj3hg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:BO6ywP+rM0Kfws1ntJthBQ", callContext.id);
            }

        };
        Controller.prototype._refresh_GetAssembleMeetingSummaryList$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Refresh_GetAssembleMeetingSummaryList");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:ql5JwyYn_EuHrouL7ERqVw:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.sGEZWUQYMUG0QxAmVBFZNA/ClientActions.ql5JwyYn_EuHrouL7ERqVw:_hEzq_NHM74yzFVDmcH7NA", "Connect2_Assemble_MUI", "Refresh_GetAssembleMeetingSummaryList", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:vG3TGlfbk0anEiV4+RiM6Q", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:RPdax+5zXkCEtmkSNvpTzA", callContext.id);
                // Refresh Query: GetAssembleMeetingSummaryList
                var result = controller.getAssembleMeetingSummaryList$DataActRefresh(callContext);
                model.flush();
                return result.then(function() {
                    OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:oqPmk2RnoUWU5fVgSyt5Dw", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:ql5JwyYn_EuHrouL7ERqVw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:ql5JwyYn_EuHrouL7ERqVw", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._setFilterLabel$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("SetFilterLabel");
            callContext = controller.callContext(callContext);
            var geAssembleSummaryListFilterLabelVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.geAssembleSummaryListFilterLabelVar = geAssembleSummaryListFilterLabelVar;
            try {
                OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:ZL8u1Dp5g0aQ03KFYDDw4Q:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.sGEZWUQYMUG0QxAmVBFZNA/ClientActions.ZL8u1Dp5g0aQ03KFYDDw4Q:Ujs7VI00MS0elZY2G0d32Q", "Connect2_Assemble_MUI", "SetFilterLabel", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:XZV5Z+g7u02_Mj4vF1AGYg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:GFJjI_SZNEiXGj0Atq31jQ", callContext.id);
                // Execute Action: GeAssembleSummaryListFilterLabel
                geAssembleSummaryListFilterLabelVar.value = Connect2_Assemble_MUIController.default.geAssembleSummaryListFilterLabel$Action(model.variables.eventList_FilterVar, callContext);

                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:JJ7pgpWYLUSTr+K3hx_xUQ", callContext.id);
                // EventList_FilterLabel = GeAssembleSummaryListFilterLabel.Label
                model.variables.eventList_FilterLabelVar = geAssembleSummaryListFilterLabelVar.value.labelOut;
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:+OQMFbF8FUa+ceXNhEPr8g", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:ZL8u1Dp5g0aQ03KFYDDw4Q", callContext.id);
            }

        };
        Controller.prototype._refresh_GetAssembleEventTypes$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Refresh_GetAssembleEventTypes");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:ZAUs46zcIEib7kS9NW_Mjg:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.sGEZWUQYMUG0QxAmVBFZNA/ClientActions.ZAUs46zcIEib7kS9NW_Mjg:aHZWt5hOMYVEGcZozNLJ0g", "Connect2_Assemble_MUI", "Refresh_GetAssembleEventTypes", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:6QbjCao1N0uxe9VY8vDcmA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Tv+rNxfbi0WwSmtkI_UxXg", callContext.id);
                // Refresh Query: GetAssembleEventTypes
                var result = controller.getAssembleEventTypes$DataActRefresh(callContext);
                model.flush();
                return result.then(function() {
                    OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:sWn1ppyLPUOBjfkO6oDsqA", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:ZAUs46zcIEib7kS9NW_Mjg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:ZAUs46zcIEib7kS9NW_Mjg", callContext.id);
                throw ex;

            });
        };

        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.buildHeaderMenu$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._buildHeaderMenu$Action, callContext);

        };
        Controller.prototype.handler_ClearFilters$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_ClearFilters$Action, callContext);

        };
        Controller.prototype.getAssembleEventTypesOnAfterFetch$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._getAssembleEventTypesOnAfterFetch$Action, callContext);

        };
        Controller.prototype.throwAssyncException$Action = function(exceptionMessageIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._throwAssyncException$Action, callContext, exceptionMessageIn);

        };
        Controller.prototype.setLocalSubdivisonId$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._setLocalSubdivisonId$Action, callContext);

        };
        Controller.prototype.setDeviceTimezone$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._setDeviceTimezone$Action, callContext);

        };
        Controller.prototype.refresh_EventList$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._refresh_EventList$Action, callContext);

        };
        Controller.prototype.list_AssembleSummaryCardsOnScrollEnding$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._list_AssembleSummaryCardsOnScrollEnding$Action, callContext);

        };
        Controller.prototype.onClick_AssembleMeetingSummaryCard$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_AssembleMeetingSummaryCard$Action, callContext);

        };
        Controller.prototype.handler_ApplyFilters$Action = function(in_AssembleMeetingFilterIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_ApplyFilters$Action, callContext, in_AssembleMeetingFilterIn);

        };
        Controller.prototype.getAssembleMeetingSummaryListOnAfterFetch$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._getAssembleMeetingSummaryListOnAfterFetch$Action, callContext);

        };
        Controller.prototype.toggleFilterDrawer$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._toggleFilterDrawer$Action, callContext);

        };
        Controller.prototype.onInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

        };
        Controller.prototype.horizontalTagsOnClickTag$Action = function(tagIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._horizontalTagsOnClickTag$Action, callContext, tagIdIn);

        };
        Controller.prototype.setDateRangeByFilterOptionId$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._setDateRangeByFilterOptionId$Action, callContext);

        };
        Controller.prototype.refresh_GetAssembleMeetingSummaryList$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._refresh_GetAssembleMeetingSummaryList$Action, callContext);

        };
        Controller.prototype.setFilterLabel$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._setFilterLabel$Action, callContext);

        };
        Controller.prototype.refresh_GetAssembleEventTypes$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._refresh_GetAssembleEventTypes$Action, callContext);

        };
        Controller.prototype.navigateTo_AssembleDetail$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.assyncException$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.navigateToLocality$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:n+VQoM4mfUCcC1ucCtOSYA:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA:9jQU9CfZCZWwIcnaUbLRAg", "Connect2_Assemble_MUI", "Assemble", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:sGEZWUQYMUG0QxAmVBFZNA:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.sGEZWUQYMUG0QxAmVBFZNA:1Qm10sCJSymaDQKn9rXd5Q", "Connect2_Assemble_MUI", "AssembleSummary_List", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:sGEZWUQYMUG0QxAmVBFZNA", callContext.id);
            OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:n+VQoM4mfUCcC1ucCtOSYA", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Assemble/AssembleSummary_List On Initialize");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "Assemble/AssembleSummary_List On Ready");
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
            return Connect2_Assemble_MUIController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, Connect2_Assemble_MUILanguageResources);
});
define("Connect2_Assemble_MUI.Assemble.AssembleSummary_List.mvc$controller.OnReady.FetchDataJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        handleError = function(ex) {

            let controllerModuleName = $public.ApplicationContext.getCurrentScreenDefinition().controllerModuleName;

            require([controllerModuleName], function(ControllerModule) {
                let activeScreenController = ControllerModule.activeScreenController;
                activeScreenController.handleError(ex);
            });

            /* $actions.ThrowAssyncException(ex.message);*/
        }

        if ($parameters.FetchSummaryList) {
            $actions.Refresh_GetAssembleMeetingSummaryList().catch((ex) => handleError(ex));
        }

        if ($parameters.FetchEventTypes) {
            $actions.Refresh_GetAssembleEventTypes().catch((ex) => handleError(ex));
        }

    };
});
define("Connect2_Assemble_MUI.Assemble.AssembleSummary_List.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
    };
});
define("Connect2_Assemble_MUI.Assemble.AssembleSummary_List.mvc$controller.Refresh_EventList.ScrollToTopJS", [], function() {
    return function($actions, $roles, $public) {
        document.querySelector(".content").scrollTop = 0;
    };
});

define("Connect2_Assemble_MUI.Assemble.AssembleSummary_List.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "HshafYciYESGKAG_owW7Rg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.fetchSummaryListVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "JCcQkfF58UuTyle3ylNGGg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.fetchEventTypesVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "pU6f59Fq60CEsRaPJpvycQ": {
            getter: function(varBag, idService) {
                return varBag.fetchDataJSResult.value;
            }
        },
        "Gtk9_3JJ70CG_7jJnhrrGQ": {
            getter: function(varBag, idService) {
                return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
            }
        },
        "CIFdpxReSkuBYiEl06FJ6w": {
            getter: function(varBag, idService) {
                return varBag.isCurrentlySelectedVar.value;
            }
        },
        "N+7Fz8GfuUii2td5VLRXeg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.exceptionMessageInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "SWewV8+MPUW0PL+KUtnpIg": {
            getter: function(varBag, idService) {
                return varBag.getCacheableUserInfoVar.value;
            }
        },
        "Xe3CIfL4jEK3j9JFVKWfEg": {
            getter: function(varBag, idService) {
                return varBag.getIANATimezoneVar.value;
            }
        },
        "u9hZZvuju0CZ9J+FhpJC7w": {
            getter: function(varBag, idService) {
                return varBag.listFilterVar.value;
            }
        },
        "jeGnQoO4LUOxs78Y2Oa6Bw": {
            getter: function(varBag, idService) {
                return varBag.scrollToTopJSResult.value;
            }
        },
        "mQhUBMPqCUimvwo7ZCmCYg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.assembleDetailsPreloadingVar;
            }
        },
        "kEVkxwXZnEerhI8NsphYig": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_AssembleMeetingFilterInLocal;
            }
        },
        "9rrgZPHtJkaeguQ7EtOHUA": {
            getter: function(varBag, idService) {
                return varBag.offsetDateTimeByUserUTCOffsetVar.value;
            }
        },
        "JdcAvU9QQ0m0DnaCwP7+Eg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.tagIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "_y9pFQEQ5EO_zhzCPRPnTw": {
            getter: function(varBag, idService) {
                return varBag.offsetDateTimeByUserUTCOffset_EndVar.value;
            }
        },
        "g7JRkDLIREqBWP_7QJpCEA": {
            getter: function(varBag, idService) {
                return varBag.offsetDateTimeByUserUTCOffset_StartVar.value;
            }
        },
        "5+UJvYV1I0OOIEV8rRQJEw": {
            getter: function(varBag, idService) {
                return varBag.getAssembleEventListDateRangeFilterVar.value;
            }
        },
        "GFJjI_SZNEiXGj0Atq31jQ": {
            getter: function(varBag, idService) {
                return varBag.geAssembleSummaryListFilterLabelVar.value;
            }
        },
        "xeCUVmjKEUGm_ZT1MP2Xqw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.eventListVar;
            }
        },
        "vp4OTT0fT0mX307oBMcUoA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.eventList_FilterVar;
            }
        },
        "uFWKgXQrgUCH2qqHHjjQuA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isShow_FilterDrawerVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "Ehnj3fdSR0O0vWhPZy1Grg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.eventList_FilterLabelVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "K25c_Nm1Kk+1SlfZK+4mYg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.eventList_RangeFromVar;
            },
            dataType: OS.DataTypes.DataTypes.DateTime
        },
        "JoriXiGCskeoW1UG3EiLHw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.eventsList_RangeToVar;
            },
            dataType: OS.DataTypes.DataTypes.DateTime
        },
        "qflIAS8VP0WEEKuuOCdO6g": {
            getter: function(varBag, idService) {
                return varBag.model.variables.eventList_PageNumberVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "EnKKHichQk2dRTe6RHJEiQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.eventList_IsFilteredVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "9RmlYWlOw0qgbes40+xxGg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.eventList_HasMoreRecordsVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "LGtnUNaYVU6wH9d2QhIC2g": {
            getter: function(varBag, idService) {
                return varBag.model.variables.maxRecordsVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "kmRKCZiXdkqv+G5i8bkN7A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.skeletonList_LengthVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "lt0DV70LDESdYNQfFtjC1g": {
            getter: function(varBag, idService) {
                return varBag.model.variables.headerMenuOptionListVar;
            }
        },
        "EALdjlwQpE6Q7Pr0xrxCXw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.localSubdivisionIdVar;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "PRbe16_GSE65XgLX+enKsg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.deviceTimezoneVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "CxP01riZFkyPBrvs4s099w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isHeaderLoadingVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "7DWmPKo+GUC1Yg5sNtuMLg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.selectedMettingTypeIdsVar;
            }
        },
        "ifBzq9JjaUONgOyJuPmlAA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.subdivisionIdIn;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "oInVoUf4o0SHjv0HIPhJfg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.getAssembleEventTypesDataAct;
            }
        },
        "I2cjvPchMku3Jn3QLWQg5g": {
            getter: function(varBag, idService) {
                return varBag.model.variables.getAssembleMeetingSummaryListDataAct;
            }
        },
        "zFAermfiIUq0Yzjeiwbl4Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("DIV_Root"));
                })(varBag.model, idService);
            }
        },
        "asr8ydEPEUiDrUemg_qJrg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "b9mnjfCxKkqN77FkJalebQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("NoResults"));
                })(varBag.model, idService);
            }
        },
        "OvfqsaIDyEe6xX_0cgFocg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Icon"));
                })(varBag.model, idService);
            }
        },
        "wIP2QBb0vkyX1d1lxseV2g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("DIV_ResultList"));
                })(varBag.model, idService);
            }
        },
        "cvp+wzFYwESX3VrGSaIb5Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("List_AssembleSummaryCards"));
                })(varBag.model, idService);
            }
        },
        "3k3IgjExs0qLF6Kq8eukNg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsDataFetched"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});