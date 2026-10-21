define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_LegacyShared.controller", "UBT_AppManager.model", "UBT_AppManager.controller", "Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$model", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Household_Members_Selection.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Milestone.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Event.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Popup_OrbitLanding_Filters.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Popup_OrbitLanding_Sort.mvc$model", "UBTConnect_Utils.controller$IsListVirtualizationDisabled", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_MUI.model$GetHouseholdMembersResponse_ScreenList", "Connect2_OrbitMobile_BL.model$GetOrbitEventsSummary_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$GetOrbitEventsSummary_ScreenList", "Connect2_OrbitMobile_BL.model$YearItemRec", "Connect2_OrbitMobile_MUI.model$YearItemList", "Connect2_OrbitMobile_MUI.model$IntegerIntegerIntegerRecord", "Connect2_OrbitMobile_BL.model$Milestone_ScreenRec", "Connect2_OrbitMobile_BL.model$OrbitMilestoneTypeRec", "Connect2_OrbitMobile_IS.model$MilestoneInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_BL.model$Event_ScreenRec", "Connect2_OrbitMobile_BL.model$OrbitEventTypeRec", "Connect2_OrbitMobile_IS.model$EventInfoRec", "Connect2_OrbitMobile_MUI.model$AuditPayload_SwitchMemberRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_SwitchMember", "Connect2_LegacyShared.controller$CopyClassesAcrossPortal", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.model$AuditPayload_ClickMilestoneRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ClickMilestone", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ApplyFilters", "Connect2_OrbitMobile_MUI.controller$ScrollContentToTop", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ApplySortBy", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "Connect2_OrbitMobile_MUI.controller$GetFullYear", "Connect2_OrbitMobile_MUI.model$AuditPayload_ClickEventRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ClickEvent"], function(OutSystems, Connect2_OrbitMobile_MUIModel, UBTConnect_UtilsController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_MUIController, Connect2_LegacySharedController, UBT_AppManagerModel, UBT_AppManagerController, Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvcModel, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_Household_Members_Selection_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Milestone_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Event_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_Popup_OrbitLanding_Filters_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_Popup_OrbitLanding_Sort_mvcModel) {
    var OS = OutSystems.Internal;

    var Get_EventsByMemberIdDataActRec = (function(_super) {
        __extends(Get_EventsByMemberIdDataActRec, _super);

        function Get_EventsByMemberIdDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        Get_EventsByMemberIdDataActRec.attributesToDeclare = function() {
            return [
                this.attr("Response", "responseOut", "Response", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.GetOrbitEventsSummary_ScreenList());
                }, true, Connect2_OrbitMobile_MUIModel.GetOrbitEventsSummary_ScreenList),
                this.attr("YearFilter", "yearFilterOut", "YearFilter", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.YearItemList());
                }, true, Connect2_OrbitMobile_MUIModel.YearItemList)
            ].concat(_super.attributesToDeclare.call(this));
        };
        Get_EventsByMemberIdDataActRec.init();
        return Get_EventsByMemberIdDataActRec;
    })(OS.Model.DataSourceRecord);
    var Get_HouseholdMembersDataActRec = (function(_super) {
        __extends(Get_HouseholdMembersDataActRec, _super);

        function Get_HouseholdMembersDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        Get_HouseholdMembersDataActRec.attributesToDeclare = function() {
            return [
                this.attr("Response", "responseOut", "Response", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.GetHouseholdMembersResponse_ScreenList());
                }, true, Connect2_OrbitMobile_MUIModel.GetHouseholdMembersResponse_ScreenList)
            ].concat(_super.attributesToDeclare.call(this));
        };
        Get_HouseholdMembersDataActRec.fromStructure = function(str) {
            return new Get_HouseholdMembersDataActRec(new Get_HouseholdMembersDataActRec.RecordClass({
                responseOut: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        Get_HouseholdMembersDataActRec.init();
        return Get_HouseholdMembersDataActRec;
    })(OS.Model.DataSourceRecord);

    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("HouseholdMembersList", "householdMembersListVar", "HouseholdMembersList", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.GetHouseholdMembersResponse_ScreenList());
                }, false, Connect2_OrbitMobile_MUIModel.GetHouseholdMembersResponse_ScreenList),
                this.attr("SelectedMemberId", "selectedMemberIdVar", "SelectedMemberId", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("IsFetchingData", "isFetchingDataVar", "IsFetchingData", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("EventsSummary", "eventsSummaryVar", "EventsSummary", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.GetOrbitEventsSummary_ScreenList());
                }, false, Connect2_OrbitMobile_MUIModel.GetOrbitEventsSummary_ScreenList),
                this.attr("EventFilter", "eventFilterVar", "EventFilter", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return OS.BuiltinFunctions.nullIdentifier();
                }, false),
                this.attr("SortEventsASC", "sortEventsASCVar", "SortEventsASC", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return true;
                }, false),
                this.attr("YearsSelection", "yearsSelectionVar", "YearsSelection", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.YearItemList());
                }, false, Connect2_OrbitMobile_MUIModel.YearItemList),
                this.attr("Popup_SortByOpened", "popup_SortByOpenedVar", "Popup_SortByOpened", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("Popup_FiltersOpened", "popup_FiltersOpenedVar", "Popup_FiltersOpened", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("PopupMeasurements", "popupMeasurementsVar", "PopupMeasurements", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.IntegerIntegerIntegerRecord());
                }, false, Connect2_OrbitMobile_MUIModel.IntegerIntegerIntegerRecord),
                this.attr("CurrentMemberId", "currentMemberIdVar", "CurrentMemberId", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("Get_EventsByMemberId", "get_EventsByMemberIdDataAct", "get_EventsByMemberIdDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Get_EventsByMemberIdDataActRec());
                }, true, Get_EventsByMemberIdDataActRec),
                this.attr("Get_HouseholdMembers", "get_HouseholdMembersDataAct", "get_HouseholdMembersDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Get_HouseholdMembersDataActRec());
                }, true, Get_HouseholdMembersDataActRec)
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
                    Model._hasValidationWidgetsValue = ((((((((Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvcModel.hasValidationWidgets || Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_Household_Members_Selection_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Milestone_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Event_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_Popup_OrbitLanding_Filters_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_Popup_OrbitLanding_Sort_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {};
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Orbit_ScreenBlocks.ScreenBlock_OrbitLanding");
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model", "Connect2_LegacyShared.controller", "UBT_AppManager.model", "UBT_AppManager.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Household_Members_Selection.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Milestone.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_Event.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Popup_OrbitLanding_Filters.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Popup_OrbitLanding_Sort.mvc$view", "UBTConnect_Utils.controller$IsListVirtualizationDisabled", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_MUI.model$GetHouseholdMembersResponse_ScreenList", "Connect2_OrbitMobile_BL.model$GetOrbitEventsSummary_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$GetOrbitEventsSummary_ScreenList", "Connect2_OrbitMobile_BL.model$YearItemRec", "Connect2_OrbitMobile_MUI.model$YearItemList", "Connect2_OrbitMobile_MUI.model$IntegerIntegerIntegerRecord", "Connect2_OrbitMobile_BL.model$Milestone_ScreenRec", "Connect2_OrbitMobile_BL.model$OrbitMilestoneTypeRec", "Connect2_OrbitMobile_IS.model$MilestoneInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_BL.model$Event_ScreenRec", "Connect2_OrbitMobile_BL.model$OrbitEventTypeRec", "Connect2_OrbitMobile_IS.model$EventInfoRec", "Connect2_OrbitMobile_MUI.model$AuditPayload_SwitchMemberRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_SwitchMember", "Connect2_LegacyShared.controller$CopyClassesAcrossPortal", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.model$AuditPayload_ClickMilestoneRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ClickMilestone", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ApplyFilters", "Connect2_OrbitMobile_MUI.controller$ScrollContentToTop", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ApplySortBy", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "Connect2_OrbitMobile_MUI.controller$GetFullYear", "Connect2_OrbitMobile_MUI.model$AuditPayload_ClickEventRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ClickEvent"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, UBTConnect_UtilsController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_ISModel, Connect2_LegacySharedController, UBT_AppManagerModel, UBT_AppManagerController, React, OSView, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_OrbitLanding_mvc_model, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_OrbitLanding_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, OSWidgets, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Household_Members_Selection_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Milestone_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Event_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Popup_OrbitLanding_Filters_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Popup_OrbitLanding_Sort_mvc_view) {
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
        View.displayName = "Orbit_ScreenBlocks.ScreenBlock_OrbitLanding";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Household_Members_Selection_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Milestone_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Event_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Popup_OrbitLanding_Filters_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Popup_OrbitLanding_Sort_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_OrbitLanding_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_OrbitLanding_mvc_controller;
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
                    headerRight: new PlaceholderContent(function() {
                        return [$if((!(model.variables.selectedMemberIdVar.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier()))) && model.variables.selectedMemberIdVar.equals(model.variables.currentMemberIdVar)), false, this, function() {
                            return [React.createElement(OSWidgets.Icon, {
                                extendedEvents: {
                                    onClick: function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_OrbitLanding/Icon onclick");
                                            controller.navigateTo_MyCalendarOrbit$Action(model.variables.selectedMemberIdVar, controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });

                                        ;
                                    }
                                },
                                icon: "flag",
                                iconSize: /*Twotimes*/ 1,
                                style: "icon menu-icon-my-calendar font-size-1-5em",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "4"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        }, function() {
                            return [];
                        })];
                    }),
                    headerContent: new PlaceholderContent(function() {
                        return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_Household_Members_Selection_mvc_view, {
                            inputs: {
                                In_HouseholdMembersList: model.variables.householdMembersListVar
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                clickedHouseholdMember$Action: function(event_MemberListIn, event_MemberIdIn) {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/Household_Members_Selection ClickedHouseholdMember");
                                            return controller.onHandle_ClickedHouseholdMember$Action(event_MemberListIn, event_MemberIdIn, controller.callContext(eventHandlerContext));
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
                                alias: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedEvents: {
                                onClick: function() {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_OrbitLanding/Container onclick");
                                            return controller.onHandle_ViewPassportDetails$Action(controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });
                                    });;
                                }
                            },
                            style: "orbit-landing-passport-cont",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Icon, {
                            icon: "flag",
                            iconSize: /*FontSize*/ 0,
                            style: "icon orbit-icon-passport",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "7"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Expression, {
                            style: "margin-left-m",
                            value: "View Passport details",
                            _idProps: {
                                service: idService,
                                uuid: "8"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Icon, {
                            icon: "chevron-right",
                            iconSize: /*FontSize*/ 0,
                            style: "icon orbit-icon-arrow margin-left-m",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "9"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "orbit-landing-filters-cont",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "10"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedEvents: {
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);

                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_OrbitLanding/Container onclick");
                                        controller.onToggle_FilterPopup$Action(controller.callContext(eventHandlerContext));
                                    }, function() {
                                        controller.popDebuggerContext(eventHandlerContext);
                                    });

                                    ;
                                }
                            },
                            style: "orbit-landing-filters justify-content-flex-start",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "11"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Expression, {
                            style: "bold color-orbit-primary-7 text-no-wrap margin-right-s",
                            value: model.getCachedValue(idService.getId("jrt7sf3Mm0WY+UkzWX_j_Q.Value"), function() {
                                return (((model.variables.eventFilterVar === Connect2_OrbitMobile_MUIModel.staticEntities.orbitLandingFilter.pastEvents)) ? ("Past Events") : ((((model.variables.eventFilterVar === Connect2_OrbitMobile_MUIModel.staticEntities.orbitLandingFilter.upcomingEvents)) ? ("Upcoming Events") : ("Upcoming Events"))));
                            }, function() {
                                return model.variables.eventFilterVar;
                            }),
                            _idProps: {
                                service: idService,
                                uuid: "12"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), $if(model.variables.popup_FiltersOpenedVar, false, this, function() {
                            return [React.createElement(OSWidgets.Icon, {
                                icon: "caret-up",
                                iconSize: /*FontSize*/ 0,
                                style: "icon",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "13"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        }, function() {
                            return [React.createElement(OSWidgets.Icon, {
                                icon: "caret-down",
                                iconSize: /*FontSize*/ 0,
                                style: "icon",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "14"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedEvents: {
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);

                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_OrbitLanding/Container onclick");
                                        controller.onToggle_SortPopup$Action(controller.callContext(eventHandlerContext));
                                    }, function() {
                                        controller.popDebuggerContext(eventHandlerContext);
                                    });

                                    ;
                                }
                            },
                            style: "orbit-landing-filters justify-content-flex-end",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "15"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            style: "bold color-orbit-primary-7 text-no-wrap margin-right-s",
                            text: ["Sort By"],
                            _idProps: {
                                service: idService,
                                uuid: "16"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), $if(model.variables.popup_SortByOpenedVar, false, this, function() {
                            return [React.createElement(OSWidgets.Icon, {
                                icon: "caret-up",
                                iconSize: /*FontSize*/ 0,
                                style: "icon",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "17"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        }, function() {
                            return [React.createElement(OSWidgets.Icon, {
                                icon: "caret-down",
                                iconSize: /*FontSize*/ 0,
                                style: "icon",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "18"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        })))];
                    }),
                    content: new PlaceholderContent(function() {
                        return [$if(!(model.variables.isFetchingDataVar), false, this, function() {
                            return [$if((model.variables.get_EventsByMemberIdDataAct.isDataFetchedAttr && !(model.variables.isFetchingDataVar)), false, this, function() {
                                return [$if(!(model.variables.eventsSummaryVar.isEmpty), false, this, function() {
                                    return [React.createElement(OSWidgets.List, {
                                        animateItems: true,
                                        extendedProperties: {
                                            "disable-virtualization": model.getCachedValue(idService.getId("R6Dj7UBXm0OqCC4NgNo9tQ.disable-virtualization"), function() {
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
                                            uuid: "19"
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
                                                        uuid: "20"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    _dependencies: [asPrimitiveValue(model.variables.eventsSummaryVar.getCurrent(callContext.iterationContext))]
                                                }, $if(((model.variables.eventsSummaryVar.getCurrent(callContext.iterationContext).orbitMilestoneTypeAttr.idAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())), false, this, function() {
                                                    return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Milestone_mvc_view, {
                                                        inputs: {
                                                            In_MilestoneSummary: model.getCachedValue(idService.getId("sD0iW7qJnkKe_BF9PaSerQ.In_MilestoneSummary"), function() {
                                                                return OS.DataConversion.JSConversions.typeConvertRecord(model.variables.eventsSummaryVar.getCurrent(callContext.iterationContext), new Connect2_OrbitMobile_BLModel.Milestone_ScreenRec(), function(source, target) {
                                                                    target.milestoneIdAttr = source.orbitSummaryItemAttr.milestoneIdAttr;
                                                                    target.typeAttr = source.orbitSummaryItemAttr.typeAttr;
                                                                    target.titleAttr = source.orbitSummaryItemAttr.titleAttr;
                                                                    target.orbitMilestoneTypeAttr = source.orbitMilestoneTypeAttr;
                                                                    target.milestoneInfoAttr = source.orbitSummaryItemAttr.milestoneInfoAttr;
                                                                    return target;
                                                                });
                                                            }, function() {
                                                                return model.variables.eventsSummaryVar.getCurrent(callContext.iterationContext);
                                                            }),
                                                            IsSetUpMeals: false
                                                        },
                                                        events: {
                                                            _handleError: function(ex) {
                                                                controller.handleError(ex);
                                                            },
                                                            clickedMilestone$Action: function(event_SelectedMilestoneIn) {
                                                                return Promise.resolve().then(function() {
                                                                    var eventHandlerContext = callContext.clone();
                                                                    return OS.Flow.tryFinally(function() {
                                                                        var varBag = {};
                                                                        controller.pushDebuggerContext(eventHandlerContext);

                                                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/Card_Milestone ClickedMilestone");
                                                                        return controller.onHandle_MilestoneCardClicked$Action(event_SelectedMilestoneIn, controller.callContext(eventHandlerContext));
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
                                                            uuid: "21",
                                                            alias: "4"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        _dependencies: []
                                                    })];
                                                }, function() {
                                                    return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_Event_mvc_view, {
                                                        inputs: {
                                                            In_EventSummary: model.getCachedValue(idService.getId("8_0YTs5BmUKU8R3KbQVjNg.In_EventSummary"), function() {
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
                                                                        return controller.onHandle_EventCardClicked$Action(event_SelectedEventIn, controller.callContext(eventHandlerContext));
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
                                                            uuid: "22",
                                                            alias: "5"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        _dependencies: []
                                                    })];
                                                }))];
                                            }, callContext, idService, "1")
                                        },
                                        _dependencies: []
                                    })];
                                }, function() {
                                    return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, {
                                        inputs: {
                                            Message: "You currently have not been assigned to an event. Check with your locality invite coordinator if you have any questions."
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
                                            uuid: "23",
                                            alias: "6"
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
                                    uuid: "24",
                                    alias: "7"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "RootPlaceholder_Filters"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedEvents: {
                                "componentDidUpdate": function() {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);

                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_OrbitLanding/Root_Filters componentDidUpdate");
                                        controller.componentDidUpdate_Filters$Action(controller.callContext(eventHandlerContext));
                                    }, function() {
                                        controller.popDebuggerContext(eventHandlerContext);
                                    });

                                    ;
                                }
                            },
                            style: "backwards-compatibility orbit-landing-filters__popup-backdrop",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "Root_Filters"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Popup, {
                            extendedProperties: {
                                style: (("top: " + (model.variables.popupMeasurementsVar.topAttr).toString()) + "px;")
                            },
                            showPopup: model.variables.popup_FiltersOpenedVar,
                            style: "popup-dialog orbit-filters-popup",
                            _idProps: {
                                service: idService,
                                name: "Popup_Filters"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_Popup_OrbitLanding_Filters_mvc_view, {
                            inputs: {
                                In_OrbitLandingFilter: model.variables.eventFilterVar,
                                In_Years: model.variables.yearsSelectionVar,
                                PopupMeasurements: model.variables.popupMeasurementsVar
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                applyFilters$Action: function(event_SelectedFilterIn, event_SelectedYearsIn) {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/Popup_OrbitLanding_Filters ApplyFilters");
                                            return controller.onHandle_ApplyFilters$Action(event_SelectedFilterIn, event_SelectedYearsIn, controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });
                                    });;
                                },
                                closePopup$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);

                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/Popup_OrbitLanding_Filters ClosePopup");
                                        controller.onToggle_FilterPopup$Action(controller.callContext(eventHandlerContext));
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
                                uuid: "28",
                                alias: "8"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "RootPlaceholder_Sort"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedEvents: {
                                "componentDidUpdate": function() {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);

                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_OrbitLanding/Root_Sort componentDidUpdate");
                                        controller.componentDidUpdate_Sort$Action(controller.callContext(eventHandlerContext));
                                    }, function() {
                                        controller.popDebuggerContext(eventHandlerContext);
                                    });

                                    ;
                                }
                            },
                            style: "backwards-compatibility orbit-landing-filters__popup-backdrop",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "Root_Sort"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Popup, {
                            extendedProperties: {
                                style: (((("top: " + (model.variables.popupMeasurementsVar.topAttr).toString()) + "px; left: ") + (model.variables.popupMeasurementsVar.leftAttr).toString()) + "px;")
                            },
                            showPopup: model.variables.popup_SortByOpenedVar,
                            style: "popup-dialog orbit-filters-popup",
                            _idProps: {
                                service: idService,
                                name: "Popup_Sort"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_Popup_OrbitLanding_Sort_mvc_view, {
                            inputs: {
                                In_IsSortASC: model.variables.sortEventsASCVar
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                },
                                applySort$Action: function(event_IsSortASCIn) {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/Popup_OrbitLanding_Sort ApplySort");
                                            return controller.onHandle_ApplySort$Action(event_IsSortASCIn, controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });
                                    });;
                                },
                                closePopup$Action: function() {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);

                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/Popup_OrbitLanding_Sort ClosePopup");
                                        controller.onToggle_SortPopup$Action(controller.callContext(eventHandlerContext));
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
                                uuid: "32",
                                alias: "9"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }))))];
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
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_IS.model", "Connect2_LegacyShared.controller", "UBT_AppManager.model", "UBT_AppManager.controller", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding.mvc$debugger", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding.mvc$controller.GetPopupMeasurements.GetMeasurementsJS", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", "UBTConnect_Utils.controller$IsListVirtualizationDisabled", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_MUI.model$GetHouseholdMembersResponse_ScreenList", "Connect2_OrbitMobile_BL.model$GetOrbitEventsSummary_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.model$GetOrbitEventsSummary_ScreenList", "Connect2_OrbitMobile_BL.model$YearItemRec", "Connect2_OrbitMobile_MUI.model$YearItemList", "Connect2_OrbitMobile_MUI.model$IntegerIntegerIntegerRecord", "Connect2_OrbitMobile_BL.model$Milestone_ScreenRec", "Connect2_OrbitMobile_BL.model$OrbitMilestoneTypeRec", "Connect2_OrbitMobile_IS.model$MilestoneInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_BL.model$Event_ScreenRec", "Connect2_OrbitMobile_BL.model$OrbitEventTypeRec", "Connect2_OrbitMobile_IS.model$EventInfoRec", "Connect2_OrbitMobile_MUI.model$AuditPayload_SwitchMemberRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_SwitchMember", "Connect2_LegacyShared.controller$CopyClassesAcrossPortal", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.model$AuditPayload_ClickMilestoneRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ClickMilestone", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ApplyFilters", "Connect2_OrbitMobile_MUI.controller$ScrollContentToTop", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ApplySortBy", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "Connect2_OrbitMobile_MUI.controller$GetFullYear", "Connect2_OrbitMobile_MUI.model$AuditPayload_ClickEventRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ClickEvent"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, UBTConnect_UtilsController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_ISModel, Connect2_LegacySharedController, UBT_AppManagerModel, UBT_AppManagerController, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_OrbitLanding_mvc_Debugger, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_OrbitLanding_mvc_controller_GetPopupMeasurements_GetMeasurementsJS, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_OrbitLanding_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {};
            this.dataFetchDependenciesOriginal = {
                get_EventsByMemberId$DataActRefresh: -1,
                get_HouseholdMembers$DataActRefresh: -1
            };
            this.dataFetchDependentsGraph = {
                get_EventsByMemberId$DataActRefresh: [],
                get_HouseholdMembers$DataActRefresh: []
            };
            this.shouldSendClientVarsToDataSources = false;
        }
        // Server Actions

        // Aggregates and Data Actions
        Controller.prototype.get_EventsByMemberId$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:xaDhL6uv1EultkLxD5ETDg:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.eHRKvMs5rUKdfVmJ60G8Yw/DataActions.xaDhL6uv1EultkLxD5ETDg:JiTdvz3eWnW_7+Qp51R9Gw", "Connect2_OrbitMobile_MUI", "Get_EventsByMemberId", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_OrbitLanding/Get_EventsByMemberId");
                return controller.callDataAction("DataActionGet_EventsByMemberId", "screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_OrbitLanding/DataActionGet_EventsByMemberId", "hGtUWxYOK2jbJt51dPK5cA", function(b) {
                    model.variables.get_EventsByMemberIdDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.get_EventsByMemberIdDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.get_EventsByMemberIdDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false).then(function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_OrbitLanding/Get_EventsByMemberId On After Fetch");
                    controller._onAfterFetch_Get_EventsByMemberId$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:xaDhL6uv1EultkLxD5ETDg", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };
        Controller.prototype.get_HouseholdMembers$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:yzCo5QXfME+3eVJ_fh+uwQ:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.eHRKvMs5rUKdfVmJ60G8Yw/DataActions.yzCo5QXfME+3eVJ_fh+uwQ:FTteMD2SNEvcJ_lCRt0gUA", "Connect2_OrbitMobile_MUI", "Get_HouseholdMembers", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_OrbitLanding/Get_HouseholdMembers");
                return controller.callDataAction("DataActionGet_HouseholdMembers", "screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_OrbitLanding/DataActionGet_HouseholdMembers", "5xpgbLfc8S9mERhcPyjRmg", function(b) {
                    model.variables.get_HouseholdMembersDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.get_HouseholdMembersDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.get_HouseholdMembersDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false).then(function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_OrbitLanding/Get_HouseholdMembers On After Fetch");
                    return controller._onAfterFetch_Get_HouseholdMembers$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:yzCo5QXfME+3eVJ_fh+uwQ", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };

        Controller.prototype.dataFetchActionNames = ["get_EventsByMemberId$DataActRefresh", "get_HouseholdMembers$DataActRefresh"];
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
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:sIXcBrKsWUqIpmc22cG94A:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.eHRKvMs5rUKdfVmJ60G8Yw/ClientActions.sIXcBrKsWUqIpmc22cG94A:1kAGaytTd759aoW8RSV0BQ", "Connect2_OrbitMobile_MUI", "Refresh_GetEventsByMemberId", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mkaClaoiFEqs4fh_q07zRw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7CiXqOetwUus5Vgb2VwkLw", callContext.id);
                // Execute Action: ResetFiltersAndSort
                controller._resetFiltersAndSort$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:K0VaPt2VHkOS4wdhkDTFkA", callContext.id);
                // Refresh Query: Get_EventsByMemberId
                var result = controller.get_EventsByMemberId$DataActRefresh(callContext);
                model.flush();
                return result.then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gKhqRLbpQE+exaK3Vaiddg", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:sIXcBrKsWUqIpmc22cG94A", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:sIXcBrKsWUqIpmc22cG94A", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._onToggle_FilterPopup$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnToggle_FilterPopup");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:s+RcCnAz_Eyn5CfTtdF4jQ:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.eHRKvMs5rUKdfVmJ60G8Yw/ClientActions.s+RcCnAz_Eyn5CfTtdF4jQ:H2lNHxj6T9UU3WVxxwJVMQ", "Connect2_OrbitMobile_MUI", "OnToggle_FilterPopup", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jfSqmdvnhUy5_KQ7Ir0Wdg", callContext.id);
                // Has data?
                if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jCTY1UDjFUCJ4LCVWwg6Dw", callContext.id) && (!(model.variables.isFetchingDataVar) && !(model.variables.householdMembersListVar.isEmpty)))) {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:edk4J18oWUi9iekuyeIDIQ", callContext.id);
                    // Popup_FiltersOpened = notPopup_FiltersOpened
                    model.variables.popup_FiltersOpenedVar = !(model.variables.popup_FiltersOpenedVar);
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:OtV5H0MvzEuhZNJd60DsdQ", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:80Vii_U8EkGdpQqHke6XpQ", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:s+RcCnAz_Eyn5CfTtdF4jQ", callContext.id);
            }

        };
        Controller.prototype._onToggle_SortPopup$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnToggle_SortPopup");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:kij5Dldv8EG0XNRdsgPycw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.eHRKvMs5rUKdfVmJ60G8Yw/ClientActions.kij5Dldv8EG0XNRdsgPycw:ETathTz0NMzTZarKkpGL4w", "Connect2_OrbitMobile_MUI", "OnToggle_SortPopup", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+EmtMhV21EyLqCM3nQZhzg", callContext.id);
                // Has data?
                if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JTakOF31HEisQMhH3bC2IA", callContext.id) && (!(model.variables.isFetchingDataVar) && !(model.variables.householdMembersListVar.isEmpty)))) {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SDDMP+BPqUWFMrA6fRNRwA", callContext.id);
                    // Popup_SortByOpened = notPopup_SortByOpened
                    model.variables.popup_SortByOpenedVar = !(model.variables.popup_SortByOpenedVar);
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5OtYUF7HPUOlbRH6RYvj2w", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5AVhyp4Fi0OXondouA+e_g", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:kij5Dldv8EG0XNRdsgPycw", callContext.id);
            }

        };
        Controller.prototype._onHandle_ClickedHouseholdMember$Action = function(memberListIn, memberIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_ClickedHouseholdMember");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding.OnHandle_ClickedHouseholdMember$vars"))());
            vars.value.memberListInLocal = memberListIn.clone();
            vars.value.memberIdInLocal = memberIdIn;
            var listIndexOf_SelectedMemberVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.listIndexOf_SelectedMemberVar = listIndexOf_SelectedMemberVar;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:hShcEU_+n0GF8k7_p_I3ZQ:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.eHRKvMs5rUKdfVmJ60G8Yw/ClientActions.hShcEU_+n0GF8k7_p_I3ZQ:2kYjDaWBq5mmCIjUwJcEJQ", "Connect2_OrbitMobile_MUI", "OnHandle_ClickedHouseholdMember", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SscODocF7U2fntminuXARw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                // Update Household Member List
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:iaSk0xF7TkqzWe8Q2QykUQ", callContext.id);
                // HouseholdMembersList = MemberList
                model.variables.householdMembersListVar = vars.value.memberListInLocal;
                // New Member?
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WKDITBOU_EyAQEYc4ERHNA", callContext.id) && !(vars.value.memberIdInLocal.equals(model.variables.selectedMemberIdVar)))) {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:MolEQZ4nVEKG03NUvW1hvw", callContext.id);
                        // SelectedMemberId = MemberId
                        model.variables.selectedMemberIdVar = vars.value.memberIdInLocal;
                        // Begin Fetching
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Fb_2zbz8iE6SoCBor6pzYw", callContext.id);
                        // IsFetchingData = True
                        model.variables.isFetchingDataVar = true;
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NeZl5UgEXUCMHfwwvqexGA", callContext.id);
                        // Execute Action: Refresh_GetEventsByMemberId
                        return controller._refresh_GetEventsByMemberId$Action(callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:cCqvGEoE_0Cmesit6fu5Ag", callContext.id);
                            // Execute Action: ListIndexOf_SelectedMember
                            listIndexOf_SelectedMemberVar.value = OS.SystemActions.listIndexOf(vars.value.memberListInLocal, function(p) {
                                return p.isSelectedAttr;
                            }, callContext);

                        }).then(function() {
                            // Has Selected Member?
                            return OS.Flow.executeSequence(function() {
                                if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:s5bkNefRiUGlGOkRUOnPIg", callContext.id) && ((listIndexOf_SelectedMemberVar.value.positionOut) !== (-1)))) {
                                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ME4SGRVYAEGTUOaF70yv_g", callContext.id);
                                    // Execute Action: OnApplicationEvent_SwitchMember
                                    model.flush();
                                    return Connect2_OrbitMobile_MUIController.default.onApplicationEvent_SwitchMember$Action(function() {
                                        var rec = new Connect2_OrbitMobile_MUIModel.AuditPayload_SwitchMemberRec();
                                        rec.memberIdAttr = vars.value.memberListInLocal.getItem(listIndexOf_SelectedMemberVar.value.positionOut).memberIdAttr;
                                        rec.memberNameAttr = vars.value.memberListInLocal.getItem(listIndexOf_SelectedMemberVar.value.positionOut).firstNameAttr;
                                        return rec;
                                    }(), callContext).then(function() {
                                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Qd6_36FAWU2HXzuFo3ABdQ", callContext.id);
                                    });
                                } else {
                                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:eNZBdAFw2ke4AEl5wFyWJw", callContext.id);
                                }

                            });
                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nzoNqA5LTUmxNBFRdYBi7A", callContext.id);
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:hShcEU_+n0GF8k7_p_I3ZQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:hShcEU_+n0GF8k7_p_I3ZQ", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding.OnHandle_ClickedHouseholdMember$vars", [{
            name: "MemberList",
            attrName: "memberListInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.RecordList,
            defaultValue: function() {
                return new Connect2_OrbitMobile_MUIModel.GetHouseholdMembersResponse_ScreenList();
            },
            complexType: Connect2_OrbitMobile_MUIModel.GetHouseholdMembersResponse_ScreenList
        }, {
            name: "MemberId",
            attrName: "memberIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }]);
        Controller.prototype._onAfterFetch_Get_EventsByMemberId$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnAfterFetch_Get_EventsByMemberId");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:8Z4mHXAFVESW1BhNPTiURw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.eHRKvMs5rUKdfVmJ60G8Yw/ClientActions.8Z4mHXAFVESW1BhNPTiURw:akxZjwkzeye0niaPeDxG5w", "Connect2_OrbitMobile_MUI", "OnAfterFetch_Get_EventsByMemberId", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:M+5p2rKVVEy1MCIeRG9P5A", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5JPs_diQ7UeuSPPNuUmTAw", callContext.id);
                // Execute Action: FilterEvents
                controller._filterEvents$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1yrMAqGFbUmWJ0ENPFOVDw", callContext.id);
                // Execute Action: SetAndSortEvents
                controller._setAndSortEvents$Action(true, false, callContext);
                // Set Year Filters
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Yn3zu0ip1EKXWibhpXxnIA", callContext.id);
                // YearsSelection = Get_EventsByMemberId.YearFilter
                model.variables.yearsSelectionVar = model.variables.get_EventsByMemberIdDataAct.yearFilterOut;
                // Finished Fetching
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:kxj192NF1Emz75e0upsy7g", callContext.id);
                // IsFetchingData = False
                model.variables.isFetchingDataVar = false;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ousStjv8SkelZibppR8czA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:8Z4mHXAFVESW1BhNPTiURw", callContext.id);
            }

        };
        Controller.prototype._componentDidUpdate_Sort$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ComponentDidUpdate_Sort");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:i2gHHgSNOUOTzPTSMoNc3A:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.eHRKvMs5rUKdfVmJ60G8Yw/ClientActions.i2gHHgSNOUOTzPTSMoNc3A:WM2jKiSm6QRZuDV4dO4WSw", "Connect2_OrbitMobile_MUI", "ComponentDidUpdate_Sort", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ol9T_7OgQUObQ5rZqqBR1w", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:85XirJePMUqOuzZUFfBlyQ", callContext.id);
                // Execute Action: CopyClassesAcrossPortal
                Connect2_LegacySharedController.default.copyClassesAcrossPortal$Action(idService.getId("Root_Sort"), idService.getId("Popup_Sort"), callContext);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RPbQ9WEK_k+yJzijrDi8vw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:i2gHHgSNOUOTzPTSMoNc3A", callContext.id);
            }

        };
        Controller.prototype._resetFiltersAndSort$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ResetFiltersAndSort");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding.ResetFiltersAndSort$vars"))());
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:ZQZmRMAQyEqUUWe2Fr+x_Q:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.eHRKvMs5rUKdfVmJ60G8Yw/ClientActions.ZQZmRMAQyEqUUWe2Fr+x_Q:HY9SDjh1Aj5XU+nH7hDP6Q", "Connect2_OrbitMobile_MUI", "ResetFiltersAndSort", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nkPsmtRkh02CLOm0e0h3Jg", callContext.id);
                // Set all options
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:u2MJOi0xFE24QYDJnV8q1w", callContext.id);
                // SortEventsASC = True
                model.variables.sortEventsASCVar = true;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:u2MJOi0xFE24QYDJnV8q1w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // EventFilter = UpcomingEvents
                model.variables.eventFilterVar = Connect2_OrbitMobile_MUIModel.staticEntities.orbitLandingFilter.upcomingEvents;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:u2MJOi0xFE24QYDJnV8q1w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                // YearsSelection = Default_Years
                model.variables.yearsSelectionVar = vars.value.default_YearsVar;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:AqwHKs8R4E6gA+D_3zDgCQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:ZQZmRMAQyEqUUWe2Fr+x_Q", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding.ResetFiltersAndSort$vars", [{
            name: "Default_Years",
            attrName: "default_YearsVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.RecordList,
            defaultValue: function() {
                return new Connect2_OrbitMobile_MUIModel.YearItemList();
            },
            complexType: Connect2_OrbitMobile_MUIModel.YearItemList
        }]);
        Controller.prototype._onHandle_MilestoneCardClicked$Action = function(milestoneSummaryIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_MilestoneCardClicked");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding.OnHandle_MilestoneCardClicked$vars"))());
            vars.value.milestoneSummaryInLocal = milestoneSummaryIn.clone();
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:EVtXTFCA8UmfrP0wLJSy+Q:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.eHRKvMs5rUKdfVmJ60G8Yw/ClientActions.EVtXTFCA8UmfrP0wLJSy+Q:v60CE4IK77SmH6FALvnJbw", "Connect2_OrbitMobile_MUI", "OnHandle_MilestoneCardClicked", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mwCjWS6QzkCL+q6+M0kNnw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nH80fIgNIEOMdu3PsZ33hw", callContext.id);
                // Trigger Event: NavigateTo_TransportDetail
                return controller.navigateTo_TransportDetail$Action(vars.value.milestoneSummaryInLocal.milestoneIdAttr, vars.value.milestoneSummaryInLocal.orbitMilestoneTypeAttr.idAttr, vars.value.milestoneSummaryInLocal.titleAttr, model.variables.selectedMemberIdVar, vars.value.milestoneSummaryInLocal.orbitMilestoneTypeAttr.transportHeaderClassAttr, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1S4bi+_paE+I683my1+_aA", callContext.id);
                    // Execute Action: OnApplicationEvent_ClickMilestone
                    model.flush();
                    return Connect2_OrbitMobile_MUIController.default.onApplicationEvent_ClickMilestone$Action(function() {
                        var rec = new Connect2_OrbitMobile_MUIModel.AuditPayload_ClickMilestoneRec();
                        rec.milestoneIdAttr = vars.value.milestoneSummaryInLocal.milestoneIdAttr;
                        rec.milestoneTypeAttr = vars.value.milestoneSummaryInLocal.typeAttr;
                        rec.milestoneTitleAttr = vars.value.milestoneSummaryInLocal.titleAttr;
                        rec.milestoneLocationAttr = vars.value.milestoneSummaryInLocal.milestoneInfoAttr.locationAttr;
                        rec.milestoneStartDateAttr = vars.value.milestoneSummaryInLocal.milestoneInfoAttr.milestoneStartDateTimeAttr;
                        rec.milestoneEndDateAttr = vars.value.milestoneSummaryInLocal.milestoneInfoAttr.milestoneEndDateTimeAttr;
                        rec.associatedEventIdAttr = OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier());
                        rec.associatedEventTitleAttr = "";
                        return rec;
                    }(), callContext);
                }).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3yaAaP5t+0qU0NXo1bCflA", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:EVtXTFCA8UmfrP0wLJSy+Q", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:EVtXTFCA8UmfrP0wLJSy+Q", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding.OnHandle_MilestoneCardClicked$vars", [{
            name: "MilestoneSummary",
            attrName: "milestoneSummaryInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new Connect2_OrbitMobile_BLModel.Milestone_ScreenRec();
            },
            complexType: Connect2_OrbitMobile_BLModel.Milestone_ScreenRec
        }]);
        Controller.prototype._getPopupMeasurements$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("GetPopupMeasurements");
            callContext = controller.callContext(callContext);
            var getMeasurementsJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getMeasurementsJSResult = getMeasurementsJSResult;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:_utXUr6Q_UuimoqX_BI8kQ:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.eHRKvMs5rUKdfVmJ60G8Yw/ClientActions._utXUr6Q_UuimoqX_BI8kQ:Rt9xjaQs9JHgKfihLonL+Q", "Connect2_OrbitMobile_MUI", "GetPopupMeasurements", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:b+h4o3dwfEmF0JBoLKk6tA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:X99j5lfDJkW9vkfa0O7FzQ", callContext.id);
                getMeasurementsJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_OrbitLanding_mvc_controller_GetPopupMeasurements_GetMeasurementsJS, "GetMeasurements", "GetPopupMeasurements", {
                    Top: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer),
                    Left: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer),
                    Bottom: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding.GetPopupMeasurements$getMeasurementsJSResult"))();
                    jsNodeResult.topOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Top, OS.DataTypes.DataTypes.Integer);
                    jsNodeResult.leftOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Left, OS.DataTypes.DataTypes.Integer);
                    jsNodeResult.bottomOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Bottom, OS.DataTypes.DataTypes.Integer);
                    return jsNodeResult;
                }, {}, {});
                // Set Measurements
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GAUAzPI950umdYj8DH2WEQ", callContext.id);
                // PopupMeasurements.Top = GetMeasurements.Top
                model.variables.popupMeasurementsVar.topAttr = getMeasurementsJSResult.value.topOut;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GAUAzPI950umdYj8DH2WEQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // PopupMeasurements.Left = GetMeasurements.Left
                model.variables.popupMeasurementsVar.leftAttr = getMeasurementsJSResult.value.leftOut;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GAUAzPI950umdYj8DH2WEQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                // PopupMeasurements.Bottom = GetMeasurements.Bottom
                model.variables.popupMeasurementsVar.bottomAttr = getMeasurementsJSResult.value.bottomOut;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8Ic82ldHYU6fUB0QKp1y0g", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:_utXUr6Q_UuimoqX_BI8kQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding.GetPopupMeasurements$getMeasurementsJSResult", [{
            name: "Top",
            attrName: "topOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }, {
            name: "Left",
            attrName: "leftOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }, {
            name: "Bottom",
            attrName: "bottomOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }]);
        Controller.prototype._setAndSortEvents$Action = function(isSortASCIn, isForceSortIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("SetAndSortEvents");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding.SetAndSortEvents$vars"))());
            vars.value.isSortASCInLocal = isSortASCIn;
            vars.value.isForceSortInLocal = isForceSortIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:znwUed8k8kKEPPZjFLIfAQ:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.eHRKvMs5rUKdfVmJ60G8Yw/ClientActions.znwUed8k8kKEPPZjFLIfAQ:aswGogBCnHn2qU1zCK7O2A", "Connect2_OrbitMobile_MUI", "SetAndSortEvents", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5UXpwnu1fE6g6mwVbG+7tw", callContext.id);
                // New Sort Order?
                if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tvPrJOZ4IEe9Rbxe3Tizyg", callContext.id) && !(((vars.value.isSortASCInLocal) !== (model.variables.sortEventsASCVar))))) {
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vMPbSSJH7keafG_xP6NH3A", callContext.id) && !(vars.value.isForceSortInLocal))) {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pNJUT0SGqEOr9wGs4dj8uA", callContext.id);
                        return;

                    }

                }

                // Switch Var
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QMDsWJfk6U6_gA9ImZPSWA", callContext.id);
                // SortEventsASC = IsSortASC
                model.variables.sortEventsASCVar = vars.value.isSortASCInLocal;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LQQP0R0EskWq2VAXZDU+fg", callContext.id);
                // Execute Action: SortEvents
                controller._sortEvents$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6ZPake6eb0igCPEa+HMopA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:znwUed8k8kKEPPZjFLIfAQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding.SetAndSortEvents$vars", [{
            name: "IsSortASC",
            attrName: "isSortASCInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "IsForceSort",
            attrName: "isForceSortInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._onHandle_ApplyFilters$Action = function(in_SelectedFilterIn, in_SelectedYearsIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_ApplyFilters");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding.OnHandle_ApplyFilters$vars"))());
            vars.value.in_SelectedFilterInLocal = in_SelectedFilterIn;
            vars.value.in_SelectedYearsInLocal = in_SelectedYearsIn.clone();
            var listFilter_SelectedYearsVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.listFilter_SelectedYearsVar = listFilter_SelectedYearsVar;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:K2kShkWcYUC+NgW3ZBLrfg:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.eHRKvMs5rUKdfVmJ60G8Yw/ClientActions.K2kShkWcYUC+NgW3ZBLrfg:UsgO0yJqrKjSgaolv1Sdbw", "Connect2_OrbitMobile_MUI", "OnHandle_ApplyFilters", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:f8Y4XXVs50SwKsvgFSxA9Q", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4Hs_9Ji46ES_A0IQ8f1S4Q", callContext.id);
                // Execute Action: OnToggle_FilterPopup
                controller._onToggle_FilterPopup$Action(callContext);
                // Set Filter Selection
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Y_3nZnXjs0iO5V_XLIqkpQ", callContext.id);
                // EventFilter = In_SelectedFilter
                model.variables.eventFilterVar = vars.value.in_SelectedFilterInLocal;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Y_3nZnXjs0iO5V_XLIqkpQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // YearsSelection = In_SelectedYears
                model.variables.yearsSelectionVar = vars.value.in_SelectedYearsInLocal;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LyUg77ysM0qdYkTefnP78Q", callContext.id);
                // Execute Action: FilterEvents
                controller._filterEvents$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rV+6pGfN902e9RdOYSQA4Q", callContext.id);
                // Execute Action: SetAndSortEvents
                controller._setAndSortEvents$Action(((model.variables.eventFilterVar === Connect2_OrbitMobile_MUIModel.staticEntities.orbitLandingFilter.upcomingEvents) && ((model.variables.eventFilterVar) !== (Connect2_OrbitMobile_MUIModel.staticEntities.orbitLandingFilter.pastEvents))), true, callContext);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zdGA12GrpEOuO03FIVUI5Q", callContext.id);
                // Execute Action: ListFilter_SelectedYears
                listFilter_SelectedYearsVar.value = OS.SystemActions.listFilter(vars.value.in_SelectedYearsInLocal, function(p) {
                    return p.isSelectedAttr;
                }, callContext);

                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Y7mnStQwrkO5M2JiPlVBsA", callContext.id);
                // Execute Action: OnApplicationEvent_ApplyFilters
                model.flush();
                return Connect2_OrbitMobile_MUIController.default.onApplicationEvent_ApplyFilters$Action(vars.value.in_SelectedFilterInLocal, OS.DataConversion.JSConversions.typeConvertRecordList(listFilter_SelectedYearsVar.value.filteredListOut, new OS.DataTypes.IntegerList(), function(source, target) {
                    target = OS.BuiltinFunctions.longIntegerToInteger(source.yearAttr);
                    return target;
                }), callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GsUrB_DbOE24jj9FwPTyYQ", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:K2kShkWcYUC+NgW3ZBLrfg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:K2kShkWcYUC+NgW3ZBLrfg", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding.OnHandle_ApplyFilters$vars", [{
            name: "In_SelectedFilter",
            attrName: "in_SelectedFilterInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }, {
            name: "In_SelectedYears",
            attrName: "in_SelectedYearsInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.RecordList,
            defaultValue: function() {
                return new Connect2_OrbitMobile_MUIModel.YearItemList();
            },
            complexType: Connect2_OrbitMobile_MUIModel.YearItemList
        }]);
        Controller.prototype._sortEvents$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("SortEvents");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:GZIjkTqpzEu9x4grB5mE_Q:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.eHRKvMs5rUKdfVmJ60G8Yw/ClientActions.GZIjkTqpzEu9x4grB5mE_Q:lK22FyqgLtYW4h3KQyeRIw", "Connect2_OrbitMobile_MUI", "SortEvents", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:OaIegkVtWEG8TlMr0Ie_oA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SpFxhr5nfUK4+R6euRnxRw", callContext.id);
                // Execute Action: ListSort
                OS.SystemActions.listSort(model.variables.eventsSummaryVar, function(p) {
                    return p.orbitSummaryItemAttr.sequenceNoAttr;
                }, model.variables.sortEventsASCVar, callContext);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fHiifdW6e0WsvRze1JeWeQ", callContext.id);
                // Execute Action: ScrollContentToTop
                Connect2_OrbitMobile_MUIController.default.scrollContentToTop$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yYPdcqsquUiCmLfEYLpbuw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:GZIjkTqpzEu9x4grB5mE_Q", callContext.id);
            }

        };
        Controller.prototype._onHandle_ApplySort$Action = function(in_IsSortASCIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_ApplySort");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding.OnHandle_ApplySort$vars"))());
            vars.value.in_IsSortASCInLocal = in_IsSortASCIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:LmYgnul3WU+CuD2cBqeiCw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.eHRKvMs5rUKdfVmJ60G8Yw/ClientActions.LmYgnul3WU+CuD2cBqeiCw:u97SaK4fkVwsMvJHyms84A", "Connect2_OrbitMobile_MUI", "OnHandle_ApplySort", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Z6YI4Yl1sEWDPA8RYSxmTw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:FoZ3PJlvGUKx5ddGfVKzAw", callContext.id);
                // Execute Action: OnToggle_SortPopup
                controller._onToggle_SortPopup$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WwMQyTYeMU+9y2CiXeWuSQ", callContext.id);
                // Execute Action: SetAndSortEvents
                controller._setAndSortEvents$Action(vars.value.in_IsSortASCInLocal, false, callContext);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Byl0qgD4rUGk1IHQOfDeqA", callContext.id);
                // Execute Action: OnApplicationEvent_ApplySortBy
                model.flush();
                return Connect2_OrbitMobile_MUIController.default.onApplicationEvent_ApplySortBy$Action(vars.value.in_IsSortASCInLocal, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XQ29g5NooEmscTCCcZShLQ", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:LmYgnul3WU+CuD2cBqeiCw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:LmYgnul3WU+CuD2cBqeiCw", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding.OnHandle_ApplySort$vars", [{
            name: "In_IsSortASC",
            attrName: "in_IsSortASCInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._onAfterFetch_Get_HouseholdMembers$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnAfterFetch_Get_HouseholdMembers");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Ig3luJOIE0KnKyYpTJIb4A:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.eHRKvMs5rUKdfVmJ60G8Yw/ClientActions.Ig3luJOIE0KnKyYpTJIb4A:dGBBmdfo6OGJuaxpawV9sA", "Connect2_OrbitMobile_MUI", "OnAfterFetch_Get_HouseholdMembers", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wYHaqMEpzEiUhLqewgkp0Q", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                // Has Data?
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gk_W+9FcFEuYrlu44RGWJQ", callContext.id) && !(model.variables.get_HouseholdMembersDataAct.responseOut.isEmpty))) {
                        // Set First Item as Selected
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:I6oTLVTOhUCA6UBA+GKQHA", callContext.id);
                        // Get_HouseholdMembers.Response[0].IsSelected = True
                        model.variables.get_HouseholdMembersDataAct.responseOut.getItem(0).isSelectedAttr = true;
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:I6oTLVTOhUCA6UBA+GKQHA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                        // SelectedMemberId = Get_HouseholdMembers.Response[0].MemberId
                        model.variables.selectedMemberIdVar = model.variables.get_HouseholdMembersDataAct.responseOut.getItem(0).memberIdAttr;
                        // Set Screen Data
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6RYyI_3eoUWIOtj8kcPtfg", callContext.id);
                        // HouseholdMembersList = Get_HouseholdMembers.Response
                        model.variables.householdMembersListVar = model.variables.get_HouseholdMembersDataAct.responseOut;
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lCzN8cdfQUOPc9CJKVnpwA", callContext.id);
                        // Execute Action: Refresh_GetEventsByMemberId
                        return controller._refresh_GetEventsByMemberId$Action(callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nw9V1FA+V0mc3SJbgXW7bw", callContext.id);
                        });
                    } else {
                        // Finished Events
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LIBz6_3Aj0Ct1VeF6YGOSw", callContext.id);
                        // IsFetchingData = False
                        model.variables.isFetchingDataVar = false;
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+9Hc6HdnBkm_TD_wV7Iqzw", callContext.id);
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Ig3luJOIE0KnKyYpTJIb4A", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Ig3luJOIE0KnKyYpTJIb4A", callContext.id);
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
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Z1yrzAS8tU6OfQkrKnaKRw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.eHRKvMs5rUKdfVmJ60G8Yw/ClientActions.Z1yrzAS8tU6OfQkrKnaKRw:aL+0XtulqOtCDG_6fHyiAw", "Connect2_OrbitMobile_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7wQUNLQz70OY7Wfj+NtcyQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:x81e4dJ+1U+x6spcgJJUGA", callContext.id);
                wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_OrbitLanding_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnReady", {
                    FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding.OnReady$wasCurrentViewRestoredFromCacheJSResult"))();
                    jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
                    return jsNodeResult;
                }, {}, {});
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QDmWyZvtZ0yHFFs5OG6qRA", callContext.id) && wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut)) {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_Tp9gAmDAkG5J8jifHAr1g", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:n_cGql6Uv0uuADD7iYqy6A", callContext.id);
                        // Execute Action: Refresh_GetHouseholdMembers
                        return controller._refresh_GetHouseholdMembers$Action(callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vC9DD_Sx0k2n7MJSUjYxRQ", callContext.id);
                            // Execute Action: GetPopupMeasurements
                            controller._getPopupMeasurements$Action(callContext);
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:R3l7NJUdjk6PDK+xu4_U6g", callContext.id);
                            // Execute Action: AppManager_GetCachedUserInfo
                            appManager_GetCachedUserInfoVar.value = UBT_AppManagerController.default.appManager_GetCachedUserInfo$Action(callContext);

                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:G4wAnElDJk2_NAETvhOP6w", callContext.id);
                            // CurrentMemberId = TextToInteger
                            model.variables.currentMemberIdVar = OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.textToInteger(appManager_GetCachedUserInfoVar.value.userInformationOut.memberIdAttr));
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PFVTgT69L0ymdxf1PucLkA", callContext.id);
                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Z1yrzAS8tU6OfQkrKnaKRw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Z1yrzAS8tU6OfQkrKnaKRw", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding.OnReady$wasCurrentViewRestoredFromCacheJSResult", [{
            name: "FromCache",
            attrName: "fromCacheOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._filterEvents$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("FilterEvents");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding.FilterEvents$vars"))());
            var listFilter_YearVar = new OS.DataTypes.VariableHolder();
            var listFilter_MoreThan8DaysAgoVar = new OS.DataTypes.VariableHolder();
            var listFilter_Last8DaysAndFutureVar = new OS.DataTypes.VariableHolder();
            var listFilter_YearFiltersVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.listFilter_YearVar = listFilter_YearVar;
            varBag.listFilter_MoreThan8DaysAgoVar = listFilter_MoreThan8DaysAgoVar;
            varBag.listFilter_Last8DaysAndFutureVar = listFilter_Last8DaysAndFutureVar;
            varBag.listFilter_YearFiltersVar = listFilter_YearFiltersVar;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Xzj8zH7k8UeQjo0yJD34Ow:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.eHRKvMs5rUKdfVmJ60G8Yw/ClientActions.Xzj8zH7k8UeQjo0yJD34Ow:JO1wd58B8dmIGqadidKYIQ", "Connect2_OrbitMobile_MUI", "FilterEvents", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RyP7o6kkQ0Wq3_q61pbSYw", callContext.id);
                // Has data?
                if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3+HyLbcg9k6u90p6ZxoOOw", callContext.id) && !(model.variables.get_EventsByMemberIdDataAct.responseOut.isEmpty))) {
                    // Filter Option
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ujR1NtaMGUKWqalR9UYoJQ", callContext.id) && (model.variables.eventFilterVar === Connect2_OrbitMobile_MUIModel.staticEntities.orbitLandingFilter.upcomingEvents))) {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BI0IvvzlHE+vcN43DFE8Lg", callContext.id);
                        // Execute Action: ListFilter_Last8DaysAndFuture
                        listFilter_Last8DaysAndFutureVar.value = OS.SystemActions.listFilter(model.variables.get_EventsByMemberIdDataAct.responseOut, function(p) {
                            return ((((p.orbitMilestoneTypeAttr.idAttr) !== (OS.BuiltinFunctions.nullTextIdentifier()))) ? (p.orbitSummaryItemAttr.milestoneInfoAttr.milestoneEndDateTimeAttr.gte(OS.BuiltinFunctions.addDays(OS.BuiltinFunctions.currDate(), -22))) : (p.orbitSummaryItemAttr.eventInfoAttr.endEventDateAttr.gte(OS.BuiltinFunctions.addDays(OS.BuiltinFunctions.currDate(), -22))));
                        }, callContext);

                        // Set Filtered List
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fJCXuXAb2kqSoaK4l5RQZw", callContext.id);
                        // EventsSummary = ListFilter_Last8DaysAndFuture.FilteredList
                        model.variables.eventsSummaryVar = listFilter_Last8DaysAndFutureVar.value.filteredListOut;
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JM2McnJWC0m1HDTblsNKDg", callContext.id);
                    } else {
                        if ((model.variables.eventFilterVar === Connect2_OrbitMobile_MUIModel.staticEntities.orbitLandingFilter.pastEvents)) {
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VsUODlOsLU6OHW_0vYzneQ", callContext.id);
                            // Execute Action: ListFilter_MoreThan8DaysAgo
                            listFilter_MoreThan8DaysAgoVar.value = OS.SystemActions.listFilter(model.variables.get_EventsByMemberIdDataAct.responseOut, function(p) {
                                return ((((p.orbitMilestoneTypeAttr.idAttr) !== (OS.BuiltinFunctions.nullTextIdentifier()))) ? (p.orbitSummaryItemAttr.milestoneInfoAttr.milestoneEndDateTimeAttr.lt(OS.BuiltinFunctions.addDays(OS.BuiltinFunctions.currDate(), -22))) : (p.orbitSummaryItemAttr.eventInfoAttr.endEventDateAttr.lt(OS.BuiltinFunctions.addDays(OS.BuiltinFunctions.currDate(), -22))));
                            }, callContext);

                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:W57s59uhT0W9YdDf1K+Slw", callContext.id);
                            // Execute Action: ListFilter_YearFilters
                            listFilter_YearFiltersVar.value = OS.SystemActions.listFilter(model.variables.yearsSelectionVar, function(p) {
                                return p.isSelectedAttr;
                            }, callContext);

                            // Filtering by year?
                            if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IwjeswddIEieRmUORKUmeA", callContext.id) && !(listFilter_YearFiltersVar.value.filteredListOut.isEmpty))) {
                                // Foreach ListFilter_YearFilters.FilteredList
                                callContext.iterationContext.registerIterationStart(listFilter_YearFiltersVar.value.filteredListOut);
                                try {
                                    var filteredListIterator = callContext.iterationContext.getIterator(listFilter_YearFiltersVar.value.filteredListOut);
                                    var filteredListIndex = 0;
                                    while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9QctXEtcm0uyfR31qRMxCA", callContext.id) && (filteredListIndex < listFilter_YearFiltersVar.value.filteredListOut.length))) {
                                        filteredListIterator.currentRowNumber = filteredListIndex;
                                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1qH3CdyDoUWuXI49FFa09g", callContext.id);
                                        // Execute Action: ListFilter_Year
                                        listFilter_YearVar.value = OS.SystemActions.listFilter(listFilter_MoreThan8DaysAgoVar.value.filteredListOut, function(p) {
                                            return ((((p.orbitMilestoneTypeAttr.idAttr) !== (OS.BuiltinFunctions.nullTextIdentifier()))) ? (OutSystemsDebugger.handleFunctionCall(function() {
                                                return OS.BuiltinFunctions.integerToLongInteger(Connect2_OrbitMobile_MUIController.default.getFullYear$Action(p.orbitSummaryItemAttr.milestoneInfoAttr.milestoneStartDateTimeAttr, callContext).yearOut);
                                            }, OS.DataTypes.DataTypes.LongInteger, callContext.id).equals(listFilter_YearFiltersVar.value.filteredListOut.getItem(filteredListIndex.valueOf()).yearAttr)) : (OutSystemsDebugger.handleFunctionCall(function() {
                                                return OS.BuiltinFunctions.integerToLongInteger(Connect2_OrbitMobile_MUIController.default.getFullYear$Action(p.orbitSummaryItemAttr.eventInfoAttr.startEventDateAttr, callContext).yearOut);
                                            }, OS.DataTypes.DataTypes.LongInteger, callContext.id).equals(listFilter_YearFiltersVar.value.filteredListOut.getItem(filteredListIndex.valueOf()).yearAttr)));
                                        }, callContext);

                                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+N+UTKlbREauNnaBmna8nQ", callContext.id);
                                        // Execute Action: ListAppendAll_FilteredYears
                                        OS.SystemActions.listAppendAll(vars.value.yearFilteredListVar, listFilter_YearVar.value.filteredListOut, callContext);
                                        filteredListIndex++;
                                    }

                                } finally {
                                    callContext.iterationContext.registerIterationEnd(listFilter_YearFiltersVar.value.filteredListOut);
                                }

                                // Set Filtered List
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zfIAozMDpkOt_AvLdeHmkA", callContext.id);
                                // EventsSummary = YearFilteredList
                                model.variables.eventsSummaryVar = vars.value.yearFilteredListVar;
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Fl+O3nH8jE6h4xLtKCUiVg", callContext.id);
                            } else {
                                // Set Filtered List
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vPRaUpnx8kKYepZNpYuw1g", callContext.id);
                                // EventsSummary = ListFilter_MoreThan8DaysAgo.FilteredList
                                model.variables.eventsSummaryVar = listFilter_MoreThan8DaysAgoVar.value.filteredListOut;
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Fl+O3nH8jE6h4xLtKCUiVg", callContext.id);
                            }

                        } else {
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ebCK4Kdk9EKllQeBLkkiYw", callContext.id);
                        }

                    }

                } else {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:W4rGKzuaDUu11sz5GFYxnQ", callContext.id);
                    // EventsSummary = Get_EventsByMemberId.Response
                    model.variables.eventsSummaryVar = model.variables.get_EventsByMemberIdDataAct.responseOut;
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:sKLlWKLgaEiUCHk1NkQw_A", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Xzj8zH7k8UeQjo0yJD34Ow", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding.FilterEvents$vars", [{
            name: "YearFilteredList",
            attrName: "yearFilteredListVar",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.RecordList,
            defaultValue: function() {
                return new Connect2_OrbitMobile_MUIModel.GetOrbitEventsSummary_ScreenList();
            },
            complexType: Connect2_OrbitMobile_MUIModel.GetOrbitEventsSummary_ScreenList
        }]);
        Controller.prototype._refresh_GetHouseholdMembers$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Refresh_GetHouseholdMembers");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:ePAA0f8NCUeySQ2T+v0EBw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.eHRKvMs5rUKdfVmJ60G8Yw/ClientActions.ePAA0f8NCUeySQ2T+v0EBw:WSazZjMWGhFfFpPlipIGRA", "Connect2_OrbitMobile_MUI", "Refresh_GetHouseholdMembers", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:r9wAN+zOj0KeGrsHCxNGUA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                // Begin Fetching
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zKpochyBfkSxEkhl2fPDRw", callContext.id);
                // IsFetchingData = True
                model.variables.isFetchingDataVar = true;
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xPX84iDKUkyTgcfMUMid1Q", callContext.id);
                // Refresh Query: Get_HouseholdMembers
                var result = controller.get_HouseholdMembers$DataActRefresh(callContext);
                model.flush();
                return result.then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:58HQjl0zvE2CszHlklrdhw", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:ePAA0f8NCUeySQ2T+v0EBw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:ePAA0f8NCUeySQ2T+v0EBw", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._onHandle_EventCardClicked$Action = function(eventSummaryIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_EventCardClicked");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding.OnHandle_EventCardClicked$vars"))());
            vars.value.eventSummaryInLocal = eventSummaryIn.clone();
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:NY7+5_6uXUuDPLQHMMJxvQ:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.eHRKvMs5rUKdfVmJ60G8Yw/ClientActions.NY7+5_6uXUuDPLQHMMJxvQ:YOFOGpGdcyANmiy94OhD3A", "Connect2_OrbitMobile_MUI", "OnHandle_EventCardClicked", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NDB_TEj41kKJxmp3s6il2A", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ualUzbqQFUKQpQhd2V7lJA", callContext.id);
                // Trigger Event: NavigateTo_EventDetail
                return controller.navigateTo_EventDetail$Action(vars.value.eventSummaryInLocal.eventIdAttr, vars.value.eventSummaryInLocal.titleAttr, model.variables.selectedMemberIdVar, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Q1xWzZA1aUK94m5gYdzs1w", callContext.id);
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
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qPqLPT1kCk6d_+U387AQTQ", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:NY7+5_6uXUuDPLQHMMJxvQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:NY7+5_6uXUuDPLQHMMJxvQ", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding.OnHandle_EventCardClicked$vars", [{
            name: "EventSummary",
            attrName: "eventSummaryInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new Connect2_OrbitMobile_BLModel.Event_ScreenRec();
            },
            complexType: Connect2_OrbitMobile_BLModel.Event_ScreenRec
        }]);
        Controller.prototype._onHandle_ViewPassportDetails$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnHandle_ViewPassportDetails");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:cB4I9me+h0mCuxQ8aSCbQA:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.eHRKvMs5rUKdfVmJ60G8Yw/ClientActions.cB4I9me+h0mCuxQ8aSCbQA:9rQ85yNhAbOSG7X2Kkz49A", "Connect2_OrbitMobile_MUI", "OnHandle_ViewPassportDetails", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:OUtPZLFfv0q06qu1OvKp3Q", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:F_8v3tmjWUOxuqCbHCnk1g", callContext.id) && (model.variables.isFetchingDataVar || model.variables.currentMemberIdVar.equals(OS.BuiltinFunctions.integerToLongInteger(0))))) {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:HTPcqwSZPE+hcmBQHdiHGw", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lCWD4IvVlku9pnrH41BPUw", callContext.id);
                        // Trigger Event: NavigateTo_PassportScan
                        return controller.navigateTo_PassportScan$Action(model.variables.selectedMemberIdVar, model.variables.currentMemberIdVar, callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TZmSY_NHJkmtg6elsfAjTQ", callContext.id);
                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:cB4I9me+h0mCuxQ8aSCbQA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:cB4I9me+h0mCuxQ8aSCbQA", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._componentDidUpdate_Filters$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ComponentDidUpdate_Filters");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Xuwy+zuR4UqDRe3T2xlnig:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.eHRKvMs5rUKdfVmJ60G8Yw/ClientActions.Xuwy+zuR4UqDRe3T2xlnig:aR5MlK6U+rhs2RXtWqvTOQ", "Connect2_OrbitMobile_MUI", "ComponentDidUpdate_Filters", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rbszjXLSZUa4QcfuTo22Tw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:eVa7LcPmM0G52FbPT7XOYA", callContext.id);
                // Execute Action: CopyClassesAcrossPortal
                Connect2_LegacySharedController.default.copyClassesAcrossPortal$Action(idService.getId("Root_Filters"), idService.getId("Popup_Filters"), callContext);
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oBDMVYG7M0Gxq_GFnAskIg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Xuwy+zuR4UqDRe3T2xlnig", callContext.id);
            }

        };

        Controller.prototype.refresh_GetEventsByMemberId$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._refresh_GetEventsByMemberId$Action, callContext);

        };
        Controller.prototype.onToggle_FilterPopup$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onToggle_FilterPopup$Action, callContext);

        };
        Controller.prototype.onToggle_SortPopup$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onToggle_SortPopup$Action, callContext);

        };
        Controller.prototype.onHandle_ClickedHouseholdMember$Action = function(memberListIn, memberIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_ClickedHouseholdMember$Action, callContext, memberListIn, memberIdIn);

        };
        Controller.prototype.onAfterFetch_Get_EventsByMemberId$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onAfterFetch_Get_EventsByMemberId$Action, callContext);

        };
        Controller.prototype.componentDidUpdate_Sort$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._componentDidUpdate_Sort$Action, callContext);

        };
        Controller.prototype.resetFiltersAndSort$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._resetFiltersAndSort$Action, callContext);

        };
        Controller.prototype.onHandle_MilestoneCardClicked$Action = function(milestoneSummaryIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_MilestoneCardClicked$Action, callContext, milestoneSummaryIn);

        };
        Controller.prototype.getPopupMeasurements$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._getPopupMeasurements$Action, callContext);

        };
        Controller.prototype.setAndSortEvents$Action = function(isSortASCIn, isForceSortIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._setAndSortEvents$Action, callContext, isSortASCIn, isForceSortIn);

        };
        Controller.prototype.onHandle_ApplyFilters$Action = function(in_SelectedFilterIn, in_SelectedYearsIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_ApplyFilters$Action, callContext, in_SelectedFilterIn, in_SelectedYearsIn);

        };
        Controller.prototype.sortEvents$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._sortEvents$Action, callContext);

        };
        Controller.prototype.onHandle_ApplySort$Action = function(in_IsSortASCIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_ApplySort$Action, callContext, in_IsSortASCIn);

        };
        Controller.prototype.onAfterFetch_Get_HouseholdMembers$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onAfterFetch_Get_HouseholdMembers$Action, callContext);

        };
        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.filterEvents$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._filterEvents$Action, callContext);

        };
        Controller.prototype.refresh_GetHouseholdMembers$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._refresh_GetHouseholdMembers$Action, callContext);

        };
        Controller.prototype.onHandle_EventCardClicked$Action = function(eventSummaryIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_EventCardClicked$Action, callContext, eventSummaryIn);

        };
        Controller.prototype.onHandle_ViewPassportDetails$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onHandle_ViewPassportDetails$Action, callContext);

        };
        Controller.prototype.componentDidUpdate_Filters$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._componentDidUpdate_Filters$Action, callContext);

        };
        Controller.prototype.navigateTo_TransportDetail$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.navigateTo_PassportScan$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.navigateTo_EventDetail$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.navigateTo_MyCalendarOrbit$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:YqF_ecsKt0e5VFTRsjye5A:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A:QgY6d2StgdXP5HfjADqGwg", "Connect2_OrbitMobile_MUI", "Orbit_ScreenBlocks", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:eHRKvMs5rUKdfVmJ60G8Yw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.eHRKvMs5rUKdfVmJ60G8Yw:PE1uFC0tDnOkzk5ARyxcMA", "Connect2_OrbitMobile_MUI", "ScreenBlock_OrbitLanding", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:eHRKvMs5rUKdfVmJ60G8Yw", callContext.id);
            OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:YqF_ecsKt0e5VFTRsjye5A", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_OrbitLanding On Ready");
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
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding.mvc$controller.GetPopupMeasurements.GetMeasurementsJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        let hH = document.querySelector(".header");
        if (hH) {
            $parameters.Top = hH.offsetHeight;
            $parameters.Left = (hH.offsetWidth / 2) - 10;
        }
        let fT = document.querySelector(".footer");
        if (fT) {
            $parameters.Bottom = fT.offsetHeight;
        }
    };
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
    };
});

define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_OrbitLanding.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "7CDDWEZpEkmzk9TwxqOxdQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.memberListInLocal;
            }
        },
        "f4vRtdKG+UiduQD1hOnpGA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.memberIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "cCqvGEoE_0Cmesit6fu5Ag": {
            getter: function(varBag, idService) {
                return varBag.listIndexOf_SelectedMemberVar.value;
            }
        },
        "v3Dzi1ZVM06Jhn+D38P+6g": {
            getter: function(varBag, idService) {
                return varBag.vars.value.default_YearsVar;
            }
        },
        "6HvLi66jKUGFT82b6nLREA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.milestoneSummaryInLocal;
            }
        },
        "X99j5lfDJkW9vkfa0O7FzQ": {
            getter: function(varBag, idService) {
                return varBag.getMeasurementsJSResult.value;
            }
        },
        "2FfzKq682US_QyLV3iS6Tg": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isSortASCInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "HoQnnmwdY0OlCeN9ZzmzIw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isForceSortInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "c2Xri1DUpUGBWTDLcLvE1A": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_SelectedFilterInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "PmbMT9r7F0iT_L44Wg34PQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_SelectedYearsInLocal;
            }
        },
        "zdGA12GrpEOuO03FIVUI5Q": {
            getter: function(varBag, idService) {
                return varBag.listFilter_SelectedYearsVar.value;
            }
        },
        "G94WGDAPrUe2FYcEdBPN+A": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_IsSortASCInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "R3l7NJUdjk6PDK+xu4_U6g": {
            getter: function(varBag, idService) {
                return varBag.appManager_GetCachedUserInfoVar.value;
            }
        },
        "x81e4dJ+1U+x6spcgJJUGA": {
            getter: function(varBag, idService) {
                return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
            }
        },
        "eS877FGxHk2QXg9W6dyc5w": {
            getter: function(varBag, idService) {
                return varBag.vars.value.yearFilteredListVar;
            }
        },
        "1qH3CdyDoUWuXI49FFa09g": {
            getter: function(varBag, idService) {
                return varBag.listFilter_YearVar.value;
            }
        },
        "VsUODlOsLU6OHW_0vYzneQ": {
            getter: function(varBag, idService) {
                return varBag.listFilter_MoreThan8DaysAgoVar.value;
            }
        },
        "BI0IvvzlHE+vcN43DFE8Lg": {
            getter: function(varBag, idService) {
                return varBag.listFilter_Last8DaysAndFutureVar.value;
            }
        },
        "W57s59uhT0W9YdDf1K+Slw": {
            getter: function(varBag, idService) {
                return varBag.listFilter_YearFiltersVar.value;
            }
        },
        "u3sHw5eyV0Sa606_0CDeSw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.eventSummaryInLocal;
            }
        },
        "gLxFLvyg7Ei+lK30fdp+BA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.householdMembersListVar;
            }
        },
        "pSXkhrIUmk6p8xyvfdorTg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.selectedMemberIdVar;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "hgwcnGou70yIgX2h7FWxQQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isFetchingDataVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "L7DWfOP980SKLVL8Mm9hPQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.eventsSummaryVar;
            }
        },
        "OfzWx_XeBkSvQ9L1ahVqWQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.eventFilterVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "QAxE8kCJ_E+XuH1Uy0AZzg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.sortEventsASCVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "WmuF4t6xvUW1zN9gY37XdA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.yearsSelectionVar;
            }
        },
        "_5Yt0DF7m02zXpWxZNYWkw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.popup_SortByOpenedVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "vdcHIDUzmEuSKCy84E678A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.popup_FiltersOpenedVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "MJwerps1NE62puYDwhbWgg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.popupMeasurementsVar;
            }
        },
        "iYk1oFsSxk6em20vbbh+Ug": {
            getter: function(varBag, idService) {
                return varBag.model.variables.currentMemberIdVar;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "xaDhL6uv1EultkLxD5ETDg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.get_EventsByMemberIdDataAct;
            }
        },
        "yzCo5QXfME+3eVJ_fh+uwQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.get_HouseholdMembersDataAct;
            }
        },
        "rwb4WvZNaEy+rE67+6yccQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu"));
                })(varBag.model, idService);
            }
        },
        "_CmcnD+g_kav7iE7aCNvGA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu"));
                })(varBag.model, idService);
            }
        },
        "mC12csVtnEC6FT20d4A2UQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderLeft"));
                })(varBag.model, idService);
            }
        },
        "Od4p73oKWEGxoeazvk9u6g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Title"));
                })(varBag.model, idService);
            }
        },
        "szaU7P3N5k2J7YLXs7kqPA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderRight"));
                })(varBag.model, idService);
            }
        },
        "adjDRYul9USp25w5hcvtig": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderContent"));
                })(varBag.model, idService);
            }
        },
        "55D1ejwY80+MSNEVVHy+tg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_FiltersOpened"));
                })(varBag.model, idService);
            }
        },
        "q3c39LAI2UK6ueTZkzLeMQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_SortFiltersOpened"));
                })(varBag.model, idService);
            }
        },
        "DArGfKdA+EKwfuVQ_Qo5aA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "k8nhffQjqk+nb+BE9qR2Bw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_IsNotFetching"));
                })(varBag.model, idService);
            }
        },
        "OpMeOqXVOUemTzv5DuM3iQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_HasFetchedData"));
                })(varBag.model, idService);
            }
        },
        "54ZCGwwM5UGcd8kjMAdM8Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HasData"));
                })(varBag.model, idService);
            }
        },
        "ganFsoH0s0i_3aiy5Eps0A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_IsMilestone"));
                })(varBag.model, idService);
            }
        },
        "z3ZgV0_fL0KW52wh0lxB4A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("RootPlaceholder_Filters"));
                })(varBag.model, idService);
            }
        },
        "XYX5jtbN1kyyeYpO_G+czw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Root_Filters"));
                })(varBag.model, idService);
            }
        },
        "r99HTjIXYUaaJLmiQ3Opyw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Popup_Filters"));
                })(varBag.model, idService);
            }
        },
        "49hAZjaKVECWcVTydrjWLw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("RootPlaceholder_Sort"));
                })(varBag.model, idService);
            }
        },
        "9tPlQ42FUUCB1e+WdVd2Aw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Root_Sort"));
                })(varBag.model, idService);
            }
        },
        "1byw9jHzWkygeH9+I7yNcA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Popup_Sort"));
                })(varBag.model, idService);
            }
        },
        "cLrHjJB5dk+urKfwqQaJRw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BottomBar"));
                })(varBag.model, idService);
            }
        },
        "YXdPwelh50qzp6XFejzEuQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BottomBar"));
                })(varBag.model, idService);
            }
        },
        "U0ID4nNe+EKSmbfAaIS0Fg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements"));
                })(varBag.model, idService);
            }
        },
        "YtLuUHV+kUyad91kRCNqcQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});