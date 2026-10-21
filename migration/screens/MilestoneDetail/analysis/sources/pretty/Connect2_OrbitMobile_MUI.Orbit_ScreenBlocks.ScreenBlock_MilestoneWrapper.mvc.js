define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MilestoneWrapper.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "UBT_AppManager.model", "UBT_AppManager.controller", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealGuest.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealHost.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealHelper.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationGuest.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHelper.mvc$model", "Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$model", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "Connect2_OrbitMobile_IS.model$GetGmpMilestoneHostResponseRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS"], function(OutSystems, Connect2_OrbitMobile_MUIModel, UBT_AppManagerModel, UBT_AppManagerController, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_MealGuest_mvcModel, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_MealHost_mvcModel, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_MealHelper_mvcModel, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_AccommodationGuest_mvcModel, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_AccommodationHost_mvcModel, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_AccommodationHelper_mvcModel, Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvcModel) {
    var OS = OutSystems.Internal;

    var GetGmpMilestoneHostDataActRec = (function(_super) {
        __extends(GetGmpMilestoneHostDataActRec, _super);

        function GetGmpMilestoneHostDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        GetGmpMilestoneHostDataActRec.attributesToDeclare = function() {
            return [
                this.attr("Response", "responseOut", "Response", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.GetGmpMilestoneHostResponseRec());
                }, true, Connect2_OrbitMobile_ISModel.GetGmpMilestoneHostResponseRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        GetGmpMilestoneHostDataActRec.fromStructure = function(str) {
            return new GetGmpMilestoneHostDataActRec(new GetGmpMilestoneHostDataActRec.RecordClass({
                responseOut: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        GetGmpMilestoneHostDataActRec.init();
        return GetGmpMilestoneHostDataActRec;
    })(OS.Model.DataSourceRecord);

    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("UserMemberId", "userMemberIdVar", "UserMemberId", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("IsFetchingData", "isFetchingDataVar", "IsFetchingData", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("In_FromNotification", "in_FromNotificationIn", "In_FromNotification", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_FromNotificationInDataFetchStatus", "_in_FromNotificationInDataFetchStatus", "_in_FromNotificationInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_MilestoneId", "in_MilestoneIdIn", "In_MilestoneId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_MilestoneIdInDataFetchStatus", "_in_MilestoneIdInDataFetchStatus", "_in_MilestoneIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_EventId", "in_EventIdIn", "In_EventId", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("_in_EventIdInDataFetchStatus", "_in_EventIdInDataFetchStatus", "_in_EventIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_HostId", "in_HostIdIn", "In_HostId", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("_in_HostIdInDataFetchStatus", "_in_HostIdInDataFetchStatus", "_in_HostIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_OrbitMilestoneTypeId", "in_OrbitMilestoneTypeIdIn", "In_OrbitMilestoneTypeId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_OrbitMilestoneTypeIdInDataFetchStatus", "_in_OrbitMilestoneTypeIdInDataFetchStatus", "_in_OrbitMilestoneTypeIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_MilestoneName", "in_MilestoneNameIn", "In_MilestoneName", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_MilestoneNameInDataFetchStatus", "_in_MilestoneNameInDataFetchStatus", "_in_MilestoneNameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_EventName", "in_EventNameIn", "In_EventName", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_EventNameInDataFetchStatus", "_in_EventNameInDataFetchStatus", "_in_EventNameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("GetGmpMilestoneHost", "getGmpMilestoneHostDataAct", "getGmpMilestoneHostDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new GetGmpMilestoneHostDataActRec());
                }, true, GetGmpMilestoneHostDataActRec)
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
                    Model._hasValidationWidgetsValue = ((((((((Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_MealGuest_mvcModel.hasValidationWidgets || Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_MealHost_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_MealHelper_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_AccommodationGuest_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_AccommodationHost_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_AccommodationHelper_mvcModel.hasValidationWidgets) || Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_FromNotification" in inputs) {
                this.variables.in_FromNotificationIn = inputs.In_FromNotification;
                if ("_in_FromNotificationInDataFetchStatus" in inputs) {
                    this.variables._in_FromNotificationInDataFetchStatus = inputs._in_FromNotificationInDataFetchStatus;
                }

            }

            if ("In_MilestoneId" in inputs) {
                this.variables.in_MilestoneIdIn = inputs.In_MilestoneId;
                if ("_in_MilestoneIdInDataFetchStatus" in inputs) {
                    this.variables._in_MilestoneIdInDataFetchStatus = inputs._in_MilestoneIdInDataFetchStatus;
                }

            }

            if ("In_EventId" in inputs) {
                this.variables.in_EventIdIn = inputs.In_EventId;
                if ("_in_EventIdInDataFetchStatus" in inputs) {
                    this.variables._in_EventIdInDataFetchStatus = inputs._in_EventIdInDataFetchStatus;
                }

            }

            if ("In_HostId" in inputs) {
                this.variables.in_HostIdIn = inputs.In_HostId;
                if ("_in_HostIdInDataFetchStatus" in inputs) {
                    this.variables._in_HostIdInDataFetchStatus = inputs._in_HostIdInDataFetchStatus;
                }

            }

            if ("In_OrbitMilestoneTypeId" in inputs) {
                this.variables.in_OrbitMilestoneTypeIdIn = inputs.In_OrbitMilestoneTypeId;
                if ("_in_OrbitMilestoneTypeIdInDataFetchStatus" in inputs) {
                    this.variables._in_OrbitMilestoneTypeIdInDataFetchStatus = inputs._in_OrbitMilestoneTypeIdInDataFetchStatus;
                }

            }

            if ("In_MilestoneName" in inputs) {
                this.variables.in_MilestoneNameIn = inputs.In_MilestoneName;
                if ("_in_MilestoneNameInDataFetchStatus" in inputs) {
                    this.variables._in_MilestoneNameInDataFetchStatus = inputs._in_MilestoneNameInDataFetchStatus;
                }

            }

            if ("In_EventName" in inputs) {
                this.variables.in_EventNameIn = inputs.In_EventName;
                if ("_in_EventNameInDataFetchStatus" in inputs) {
                    this.variables._in_EventNameInDataFetchStatus = inputs._in_EventNameInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Orbit_ScreenBlocks.ScreenBlock_MilestoneWrapper");
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MilestoneWrapper.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "UBT_AppManager.model", "UBT_AppManager.controller", "Connect2_OrbitMobile_IS.model", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MilestoneWrapper.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MilestoneWrapper.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealGuest.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealHost.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MealHelper.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationGuest.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHost.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_AccommodationHelper.mvc$view", "Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$view", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "Connect2_OrbitMobile_IS.model$GetGmpMilestoneHostResponseRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, UBT_AppManagerModel, UBT_AppManagerController, Connect2_OrbitMobile_ISModel, React, OSView, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_MilestoneWrapper_mvc_model, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_MilestoneWrapper_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_MealGuest_mvc_view, OSWidgets, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_MealHost_mvc_view, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_MealHelper_mvc_view, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_AccommodationGuest_mvc_view, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_AccommodationHost_mvc_view, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_AccommodationHelper_mvc_view, Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view) {
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
        View.displayName = "Orbit_ScreenBlocks.ScreenBlock_MilestoneWrapper";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_MealGuest_mvc_view, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_MealHost_mvc_view, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_MealHelper_mvc_view, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_AccommodationGuest_mvc_view, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_AccommodationHost_mvc_view, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_AccommodationHelper_mvc_view, Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_MilestoneWrapper_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_MilestoneWrapper_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(((model.variables.in_FromNotificationIn && !(model.variables.isFetchingDataVar)) || !(model.variables.in_FromNotificationIn)), false, this, function() {
                return [$if(((model.variables.in_FromNotificationIn && model.variables.getGmpMilestoneHostDataAct.responseOut.statusAttr.successAttr) || !(model.variables.in_FromNotificationIn)), false, this, function() {
                    return [$if((((((model.variables.in_FromNotificationIn) ? (model.variables.getGmpMilestoneHostDataAct.responseOut.milestoneTypeAttr) : (model.variables.in_OrbitMilestoneTypeIdIn)) === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.mealGuest) || (((model.variables.in_FromNotificationIn) ? (model.variables.getGmpMilestoneHostDataAct.responseOut.milestoneTypeAttr) : (model.variables.in_OrbitMilestoneTypeIdIn)) === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.mealHost)) || (((model.variables.in_FromNotificationIn) ? (model.variables.getGmpMilestoneHostDataAct.responseOut.milestoneTypeAttr) : (model.variables.in_OrbitMilestoneTypeIdIn)) === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.mealHelper)), false, this, function() {
                        return [$if((((model.variables.in_FromNotificationIn) ? (model.variables.getGmpMilestoneHostDataAct.responseOut.milestoneTypeAttr) : (model.variables.in_OrbitMilestoneTypeIdIn)) === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.mealGuest), false, this, function() {
                            return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_MealGuest_mvc_view, {
                                inputs: {
                                    In_PreloadMilestoneName: model.getCachedValue(idService.getId("qa5j2JXyY0yifFiZ6HNqxw.In_PreloadMilestoneName"), function() {
                                        return (((model.variables.in_FromNotificationIn && model.variables.getGmpMilestoneHostDataAct.responseOut.statusAttr.successAttr)) ? (model.variables.getGmpMilestoneHostDataAct.responseOut.milestoneTitleAttr) : (model.variables.in_MilestoneNameIn));
                                    }, function() {
                                        return model.variables.in_FromNotificationIn;
                                    }, function() {
                                        return model.variables.getGmpMilestoneHostDataAct.responseOut.statusAttr.successAttr;
                                    }, function() {
                                        return model.variables.getGmpMilestoneHostDataAct.responseOut.milestoneTitleAttr;
                                    }, function() {
                                        return model.variables.in_MilestoneNameIn;
                                    }),
                                    _in_PreloadMilestoneNameInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_FromNotificationInDataFetchStatus, model.variables.getGmpMilestoneHostDataAct.dataFetchStatusAttr, model.variables._in_MilestoneNameInDataFetchStatus),
                                    In_EventId: model.variables.in_EventIdIn,
                                    _in_EventIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EventIdInDataFetchStatus),
                                    In_MilestoneId: model.variables.in_MilestoneIdIn,
                                    _in_MilestoneIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneIdInDataFetchStatus),
                                    In_PreloadEventName: model.variables.in_EventNameIn,
                                    _in_PreloadEventNameInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EventNameInDataFetchStatus),
                                    In_HostId: model.getCachedValue(idService.getId("qa5j2JXyY0yifFiZ6HNqxw.In_HostId"), function() {
                                        return (((model.variables.in_FromNotificationIn && model.variables.getGmpMilestoneHostDataAct.responseOut.statusAttr.successAttr)) ? (model.variables.getGmpMilestoneHostDataAct.responseOut.hostIdAttr) : (model.variables.in_HostIdIn));
                                    }, function() {
                                        return model.variables.in_FromNotificationIn;
                                    }, function() {
                                        return model.variables.getGmpMilestoneHostDataAct.responseOut.statusAttr.successAttr;
                                    }, function() {
                                        return model.variables.getGmpMilestoneHostDataAct.responseOut.hostIdAttr;
                                    }, function() {
                                        return model.variables.in_HostIdIn;
                                    }),
                                    _in_HostIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_FromNotificationInDataFetchStatus, model.variables.getGmpMilestoneHostDataAct.dataFetchStatusAttr, model.variables._in_HostIdInDataFetchStatus),
                                    In_OrbitMilestoneTypeId: model.getCachedValue(idService.getId("qa5j2JXyY0yifFiZ6HNqxw.In_OrbitMilestoneTypeId"), function() {
                                        return (((model.variables.in_FromNotificationIn && model.variables.getGmpMilestoneHostDataAct.responseOut.statusAttr.successAttr)) ? (OS.BuiltinFunctions.textToIdentifier(model.variables.getGmpMilestoneHostDataAct.responseOut.milestoneTypeAttr)) : (model.variables.in_OrbitMilestoneTypeIdIn));
                                    }, function() {
                                        return model.variables.in_FromNotificationIn;
                                    }, function() {
                                        return model.variables.getGmpMilestoneHostDataAct.responseOut.statusAttr.successAttr;
                                    }, function() {
                                        return model.variables.getGmpMilestoneHostDataAct.responseOut.milestoneTypeAttr;
                                    }, function() {
                                        return model.variables.in_OrbitMilestoneTypeIdIn;
                                    }),
                                    _in_OrbitMilestoneTypeIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_FromNotificationInDataFetchStatus, model.variables.getGmpMilestoneHostDataAct.dataFetchStatusAttr, model.variables._in_OrbitMilestoneTypeIdInDataFetchStatus)
                                },
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    },
                                    navigateTo_HouseholdDetail$Action: function(event_HouseholdIdIn) {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_MealGuest NavigateTo_HouseholdDetail");
                                            controller.navigateTo_HouseholdDetail$Action(event_HouseholdIdIn, controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });

                                        ;
                                    },
                                    navigateTo_ContactByEmail$Action: function(in_AvatarURLIn, in_ContactNameIn, in_ContactSurnameIn, in_ContactLocalityIn, in_ContactCountryIn, in_EmailToIn, in_SubjectIn, in_MilestoneTitleIn, in_FormattedDateTimeIn) {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_MealGuest NavigateTo_ContactByEmail");
                                            controller.navigateTo_ContactHostByEmail$Action(in_AvatarURLIn, in_ContactNameIn, in_ContactSurnameIn, in_ContactLocalityIn, in_ContactCountryIn, in_EmailToIn, in_SubjectIn, in_MilestoneTitleIn, in_FormattedDateTimeIn, controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });

                                        ;
                                    },
                                    navigateTo_ContactHelpdesk$Action: function(event_SubjectIn, event_EventNameIn) {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_MealGuest NavigateTo_ContactHelpdesk");
                                            controller.navigateTo_ContactHelpdesk$Action(event_SubjectIn, event_EventNameIn, controller.callContext(eventHandlerContext));
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
                                    menu: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Placeholder, {
                                            align: /*Default*/ 0,
                                            content: _this.props.placeholders.menu_MealGuest,
                                            _idProps: {
                                                service: idService,
                                                name: "Menu_MealGuest"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        })];
                                    }),
                                    commonUI_Elements: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Placeholder, {
                                            align: /*Default*/ 0,
                                            content: _this.props.placeholders.commonUI_Elements_MealGuest,
                                            _idProps: {
                                                service: idService,
                                                name: "CommonUI_Elements_MealGuest"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        })];
                                    })
                                }
                            })];
                        }, function() {
                            return [$if((((model.variables.in_FromNotificationIn) ? (model.variables.getGmpMilestoneHostDataAct.responseOut.milestoneTypeAttr) : (model.variables.in_OrbitMilestoneTypeIdIn)) === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.mealHost), false, this, function() {
                                return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_MealHost_mvc_view, {
                                    inputs: {
                                        In_PreloadMilestoneName: model.getCachedValue(idService.getId("asUpGVSh2kuuCDb4qFT4+A.In_PreloadMilestoneName"), function() {
                                            return (((model.variables.in_FromNotificationIn && model.variables.getGmpMilestoneHostDataAct.responseOut.statusAttr.successAttr)) ? (model.variables.getGmpMilestoneHostDataAct.responseOut.milestoneTitleAttr) : (model.variables.in_MilestoneNameIn));
                                        }, function() {
                                            return model.variables.in_FromNotificationIn;
                                        }, function() {
                                            return model.variables.getGmpMilestoneHostDataAct.responseOut.statusAttr.successAttr;
                                        }, function() {
                                            return model.variables.getGmpMilestoneHostDataAct.responseOut.milestoneTitleAttr;
                                        }, function() {
                                            return model.variables.in_MilestoneNameIn;
                                        }),
                                        _in_PreloadMilestoneNameInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_FromNotificationInDataFetchStatus, model.variables.getGmpMilestoneHostDataAct.dataFetchStatusAttr, model.variables._in_MilestoneNameInDataFetchStatus),
                                        In_EventId: model.variables.in_EventIdIn,
                                        _in_EventIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EventIdInDataFetchStatus),
                                        In_OrbitMilestoneTypeId: model.getCachedValue(idService.getId("asUpGVSh2kuuCDb4qFT4+A.In_OrbitMilestoneTypeId"), function() {
                                            return (((model.variables.in_FromNotificationIn && model.variables.getGmpMilestoneHostDataAct.responseOut.statusAttr.successAttr)) ? (OS.BuiltinFunctions.textToIdentifier(model.variables.getGmpMilestoneHostDataAct.responseOut.milestoneTypeAttr)) : (model.variables.in_OrbitMilestoneTypeIdIn));
                                        }, function() {
                                            return model.variables.in_FromNotificationIn;
                                        }, function() {
                                            return model.variables.getGmpMilestoneHostDataAct.responseOut.statusAttr.successAttr;
                                        }, function() {
                                            return model.variables.getGmpMilestoneHostDataAct.responseOut.milestoneTypeAttr;
                                        }, function() {
                                            return model.variables.in_OrbitMilestoneTypeIdIn;
                                        }),
                                        _in_OrbitMilestoneTypeIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_FromNotificationInDataFetchStatus, model.variables.getGmpMilestoneHostDataAct.dataFetchStatusAttr, model.variables._in_OrbitMilestoneTypeIdInDataFetchStatus),
                                        In_MilestoneId: model.variables.in_MilestoneIdIn,
                                        _in_MilestoneIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneIdInDataFetchStatus),
                                        In_PreloadEventName: model.variables.in_EventNameIn,
                                        _in_PreloadEventNameInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EventNameInDataFetchStatus),
                                        In_HostId: model.getCachedValue(idService.getId("asUpGVSh2kuuCDb4qFT4+A.In_HostId"), function() {
                                            return (((model.variables.in_FromNotificationIn && model.variables.getGmpMilestoneHostDataAct.responseOut.statusAttr.successAttr)) ? (model.variables.getGmpMilestoneHostDataAct.responseOut.hostIdAttr) : (model.variables.in_HostIdIn));
                                        }, function() {
                                            return model.variables.in_FromNotificationIn;
                                        }, function() {
                                            return model.variables.getGmpMilestoneHostDataAct.responseOut.statusAttr.successAttr;
                                        }, function() {
                                            return model.variables.getGmpMilestoneHostDataAct.responseOut.hostIdAttr;
                                        }, function() {
                                            return model.variables.in_HostIdIn;
                                        }),
                                        _in_HostIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_FromNotificationInDataFetchStatus, model.variables.getGmpMilestoneHostDataAct.dataFetchStatusAttr, model.variables._in_HostIdInDataFetchStatus)
                                    },
                                    events: {
                                        _handleError: function(ex) {
                                            controller.handleError(ex);
                                        },
                                        navigateTo_ContactHelpdesk$Action: function(event_SubjectIn, event_EventNameIn) {
                                            var eventHandlerContext = callContext.clone();
                                            return OS.Flow.tryFinally(function() {
                                                var varBag = {};
                                                controller.pushDebuggerContext(eventHandlerContext);

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_MealHost NavigateTo_ContactHelpdesk");
                                                controller.navigateTo_ContactHelpdesk$Action(event_SubjectIn, event_EventNameIn, controller.callContext(eventHandlerContext));
                                            }, function() {
                                                controller.popDebuggerContext(eventHandlerContext);
                                            });

                                            ;
                                        },
                                        navigateTo_HouseholdDetail$Action: function(event_HouseholdIdIn) {
                                            var eventHandlerContext = callContext.clone();
                                            return OS.Flow.tryFinally(function() {
                                                var varBag = {};
                                                controller.pushDebuggerContext(eventHandlerContext);

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_MealHost NavigateTo_HouseholdDetail");
                                                controller.navigateTo_HouseholdDetail$Action(event_HouseholdIdIn, controller.callContext(eventHandlerContext));
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
                                        uuid: "3",
                                        alias: "2"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    placeholders: {
                                        menu: new PlaceholderContent(function() {
                                            return [React.createElement(OSWidgets.Placeholder, {
                                                align: /*Default*/ 0,
                                                content: _this.props.placeholders.menu_MealHost,
                                                _idProps: {
                                                    service: idService,
                                                    name: "Menu_MealHost"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })];
                                        }),
                                        commonUI_Elements: new PlaceholderContent(function() {
                                            return [React.createElement(OSWidgets.Placeholder, {
                                                align: /*Default*/ 0,
                                                content: _this.props.placeholders.commonUI_Elements_MealHost,
                                                _idProps: {
                                                    service: idService,
                                                    name: "CommonUI_Elements_MealHost"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })];
                                        })
                                    }
                                })];
                            }, function() {
                                return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_MealHelper_mvc_view, {
                                    inputs: {
                                        In_MilestoneId: model.variables.in_MilestoneIdIn,
                                        _in_MilestoneIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneIdInDataFetchStatus),
                                        In_OrbitMilestoneTypeId: model.getCachedValue(idService.getId("vLN98LLTY0a6GmdK87gpIA.In_OrbitMilestoneTypeId"), function() {
                                            return (((model.variables.in_FromNotificationIn && model.variables.getGmpMilestoneHostDataAct.responseOut.statusAttr.successAttr)) ? (OS.BuiltinFunctions.textToIdentifier(model.variables.getGmpMilestoneHostDataAct.responseOut.milestoneTypeAttr)) : (model.variables.in_OrbitMilestoneTypeIdIn));
                                        }, function() {
                                            return model.variables.in_FromNotificationIn;
                                        }, function() {
                                            return model.variables.getGmpMilestoneHostDataAct.responseOut.statusAttr.successAttr;
                                        }, function() {
                                            return model.variables.getGmpMilestoneHostDataAct.responseOut.milestoneTypeAttr;
                                        }, function() {
                                            return model.variables.in_OrbitMilestoneTypeIdIn;
                                        }),
                                        _in_OrbitMilestoneTypeIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_FromNotificationInDataFetchStatus, model.variables.getGmpMilestoneHostDataAct.dataFetchStatusAttr, model.variables._in_OrbitMilestoneTypeIdInDataFetchStatus),
                                        In_EventId: model.variables.in_EventIdIn,
                                        _in_EventIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EventIdInDataFetchStatus),
                                        In_HostId: model.getCachedValue(idService.getId("vLN98LLTY0a6GmdK87gpIA.In_HostId"), function() {
                                            return (((model.variables.in_FromNotificationIn && model.variables.getGmpMilestoneHostDataAct.responseOut.statusAttr.successAttr)) ? (model.variables.getGmpMilestoneHostDataAct.responseOut.hostIdAttr) : (model.variables.in_HostIdIn));
                                        }, function() {
                                            return model.variables.in_FromNotificationIn;
                                        }, function() {
                                            return model.variables.getGmpMilestoneHostDataAct.responseOut.statusAttr.successAttr;
                                        }, function() {
                                            return model.variables.getGmpMilestoneHostDataAct.responseOut.hostIdAttr;
                                        }, function() {
                                            return model.variables.in_HostIdIn;
                                        }),
                                        _in_HostIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_FromNotificationInDataFetchStatus, model.variables.getGmpMilestoneHostDataAct.dataFetchStatusAttr, model.variables._in_HostIdInDataFetchStatus),
                                        In_PreloadMilestoneName: model.getCachedValue(idService.getId("vLN98LLTY0a6GmdK87gpIA.In_PreloadMilestoneName"), function() {
                                            return (((model.variables.in_FromNotificationIn && model.variables.getGmpMilestoneHostDataAct.responseOut.statusAttr.successAttr)) ? (model.variables.getGmpMilestoneHostDataAct.responseOut.milestoneTitleAttr) : (model.variables.in_MilestoneNameIn));
                                        }, function() {
                                            return model.variables.in_FromNotificationIn;
                                        }, function() {
                                            return model.variables.getGmpMilestoneHostDataAct.responseOut.statusAttr.successAttr;
                                        }, function() {
                                            return model.variables.getGmpMilestoneHostDataAct.responseOut.milestoneTitleAttr;
                                        }, function() {
                                            return model.variables.in_MilestoneNameIn;
                                        }),
                                        _in_PreloadMilestoneNameInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_FromNotificationInDataFetchStatus, model.variables.getGmpMilestoneHostDataAct.dataFetchStatusAttr, model.variables._in_MilestoneNameInDataFetchStatus),
                                        In_PreloadEventName: model.variables.in_EventNameIn,
                                        _in_PreloadEventNameInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EventNameInDataFetchStatus)
                                    },
                                    events: {
                                        _handleError: function(ex) {
                                            controller.handleError(ex);
                                        },
                                        navigateTo_ContactByEmail$Action: function(in_AvatarURLIn, in_ContactNameIn, in_ContactSurnameIn, in_ContactLocalityIn, in_ContactCountryIn, in_EmailToIn, in_SubjectIn, in_MilestoneTitleIn, in_FormattedDateTimeIn) {
                                            var eventHandlerContext = callContext.clone();
                                            return OS.Flow.tryFinally(function() {
                                                var varBag = {};
                                                controller.pushDebuggerContext(eventHandlerContext);

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_MealHelper NavigateTo_ContactByEmail");
                                                controller.navigateTo_ContactHostByEmail$Action(in_AvatarURLIn, in_ContactNameIn, in_ContactSurnameIn, in_ContactLocalityIn, in_ContactCountryIn, in_EmailToIn, in_SubjectIn, in_MilestoneTitleIn, in_FormattedDateTimeIn, controller.callContext(eventHandlerContext));
                                            }, function() {
                                                controller.popDebuggerContext(eventHandlerContext);
                                            });

                                            ;
                                        },
                                        navigateTo_HouseholdDetail$Action: function(event_HouseholdIdIn) {
                                            var eventHandlerContext = callContext.clone();
                                            return OS.Flow.tryFinally(function() {
                                                var varBag = {};
                                                controller.pushDebuggerContext(eventHandlerContext);

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_MealHelper NavigateTo_HouseholdDetail");
                                                controller.navigateTo_HouseholdDetail$Action(event_HouseholdIdIn, controller.callContext(eventHandlerContext));
                                            }, function() {
                                                controller.popDebuggerContext(eventHandlerContext);
                                            });

                                            ;
                                        },
                                        navigateTo_ContactHelpdesk$Action: function(event_SubjectIn, event_EventNameIn) {
                                            var eventHandlerContext = callContext.clone();
                                            return OS.Flow.tryFinally(function() {
                                                var varBag = {};
                                                controller.pushDebuggerContext(eventHandlerContext);

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_MealHelper NavigateTo_ContactHelpdesk");
                                                controller.navigateTo_ContactHelpdesk$Action(event_SubjectIn, event_EventNameIn, controller.callContext(eventHandlerContext));
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
                                        uuid: "6",
                                        alias: "3"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    placeholders: {
                                        menu: PlaceholderContent.Empty,
                                        commonUI_Elements: PlaceholderContent.Empty
                                    },
                                    _dependencies: []
                                })];
                            })];
                        })];
                    }, function() {
                        return [];
                    }), $if((((((model.variables.in_FromNotificationIn) ? (model.variables.getGmpMilestoneHostDataAct.responseOut.milestoneTypeAttr) : (model.variables.in_OrbitMilestoneTypeIdIn)) === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.accommodationGuest) || (((model.variables.in_FromNotificationIn) ? (model.variables.getGmpMilestoneHostDataAct.responseOut.milestoneTypeAttr) : (model.variables.in_OrbitMilestoneTypeIdIn)) === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.accommodationHost)) || (((model.variables.in_FromNotificationIn) ? (model.variables.getGmpMilestoneHostDataAct.responseOut.milestoneTypeAttr) : (model.variables.in_OrbitMilestoneTypeIdIn)) === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.accommodationHelper)), false, this, function() {
                        return [$if((((model.variables.in_FromNotificationIn) ? (model.variables.getGmpMilestoneHostDataAct.responseOut.milestoneTypeAttr) : (model.variables.in_OrbitMilestoneTypeIdIn)) === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.accommodationGuest), false, this, function() {
                            return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_AccommodationGuest_mvc_view, {
                                inputs: {
                                    In_EventId: model.variables.in_EventIdIn,
                                    _in_EventIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EventIdInDataFetchStatus),
                                    In_PreloadEventName: model.variables.in_EventNameIn,
                                    _in_PreloadEventNameInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EventNameInDataFetchStatus),
                                    In_OrbitMilestoneTypeId: model.getCachedValue(idService.getId("OpQPmHt9WUOyYv++vT_RNg.In_OrbitMilestoneTypeId"), function() {
                                        return (((model.variables.in_FromNotificationIn && model.variables.getGmpMilestoneHostDataAct.responseOut.statusAttr.successAttr)) ? (OS.BuiltinFunctions.textToIdentifier(model.variables.getGmpMilestoneHostDataAct.responseOut.milestoneTypeAttr)) : (model.variables.in_OrbitMilestoneTypeIdIn));
                                    }, function() {
                                        return model.variables.in_FromNotificationIn;
                                    }, function() {
                                        return model.variables.getGmpMilestoneHostDataAct.responseOut.statusAttr.successAttr;
                                    }, function() {
                                        return model.variables.getGmpMilestoneHostDataAct.responseOut.milestoneTypeAttr;
                                    }, function() {
                                        return model.variables.in_OrbitMilestoneTypeIdIn;
                                    }),
                                    _in_OrbitMilestoneTypeIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_FromNotificationInDataFetchStatus, model.variables.getGmpMilestoneHostDataAct.dataFetchStatusAttr, model.variables._in_OrbitMilestoneTypeIdInDataFetchStatus),
                                    In_HostId: model.getCachedValue(idService.getId("OpQPmHt9WUOyYv++vT_RNg.In_HostId"), function() {
                                        return (((model.variables.in_FromNotificationIn && model.variables.getGmpMilestoneHostDataAct.responseOut.statusAttr.successAttr)) ? (model.variables.getGmpMilestoneHostDataAct.responseOut.hostIdAttr) : (model.variables.in_HostIdIn));
                                    }, function() {
                                        return model.variables.in_FromNotificationIn;
                                    }, function() {
                                        return model.variables.getGmpMilestoneHostDataAct.responseOut.statusAttr.successAttr;
                                    }, function() {
                                        return model.variables.getGmpMilestoneHostDataAct.responseOut.hostIdAttr;
                                    }, function() {
                                        return model.variables.in_HostIdIn;
                                    }),
                                    _in_HostIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_FromNotificationInDataFetchStatus, model.variables.getGmpMilestoneHostDataAct.dataFetchStatusAttr, model.variables._in_HostIdInDataFetchStatus),
                                    In_MilestoneId: model.variables.in_MilestoneIdIn,
                                    _in_MilestoneIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneIdInDataFetchStatus),
                                    In_PreloadMilestoneName: model.getCachedValue(idService.getId("OpQPmHt9WUOyYv++vT_RNg.In_PreloadMilestoneName"), function() {
                                        return (((model.variables.in_FromNotificationIn && model.variables.getGmpMilestoneHostDataAct.responseOut.statusAttr.successAttr)) ? (model.variables.getGmpMilestoneHostDataAct.responseOut.milestoneTitleAttr) : (model.variables.in_MilestoneNameIn));
                                    }, function() {
                                        return model.variables.in_FromNotificationIn;
                                    }, function() {
                                        return model.variables.getGmpMilestoneHostDataAct.responseOut.statusAttr.successAttr;
                                    }, function() {
                                        return model.variables.getGmpMilestoneHostDataAct.responseOut.milestoneTitleAttr;
                                    }, function() {
                                        return model.variables.in_MilestoneNameIn;
                                    }),
                                    _in_PreloadMilestoneNameInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_FromNotificationInDataFetchStatus, model.variables.getGmpMilestoneHostDataAct.dataFetchStatusAttr, model.variables._in_MilestoneNameInDataFetchStatus)
                                },
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    },
                                    navigateTo_ContactByEmail$Action: function(in_AvatarURLIn, in_ContactNameIn, in_ContactSurnameIn, in_ContactLocalityIn, in_ContactCountryIn, in_EmailToIn, in_SubjectIn, in_MilestoneTitleIn, in_FormattedDateTimeIn) {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_AccommodationGuest NavigateTo_ContactByEmail");
                                            controller.navigateTo_ContactHostByEmail$Action(in_AvatarURLIn, in_ContactNameIn, in_ContactSurnameIn, in_ContactLocalityIn, in_ContactCountryIn, in_EmailToIn, in_SubjectIn, in_MilestoneTitleIn, in_FormattedDateTimeIn, controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });

                                        ;
                                    },
                                    navigateTo_HouseholdDetail$Action: function(event_HouseholdIdIn) {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_AccommodationGuest NavigateTo_HouseholdDetail");
                                            controller.navigateTo_HouseholdDetail$Action(event_HouseholdIdIn, controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });

                                        ;
                                    },
                                    navigateTo_ContactHelpdesk$Action: function(event_SubjectIn, event_EventNameIn) {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_AccommodationGuest NavigateTo_ContactHelpdesk");
                                            controller.navigateTo_ContactHelpdesk$Action(event_SubjectIn, event_EventNameIn, controller.callContext(eventHandlerContext));
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
                                    uuid: "7",
                                    alias: "4"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    menu: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Placeholder, {
                                            align: /*Default*/ 0,
                                            content: _this.props.placeholders.menu_AccommodationGuest,
                                            _idProps: {
                                                service: idService,
                                                name: "Menu_AccommodationGuest"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        })];
                                    }),
                                    commonUI_Elements: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Placeholder, {
                                            align: /*Default*/ 0,
                                            content: _this.props.placeholders.commonUI_Elements_AccommodationGuest,
                                            _idProps: {
                                                service: idService,
                                                name: "CommonUI_Elements_AccommodationGuest"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        })];
                                    })
                                }
                            })];
                        }, function() {
                            return [$if((((model.variables.in_FromNotificationIn) ? (model.variables.getGmpMilestoneHostDataAct.responseOut.milestoneTypeAttr) : (model.variables.in_OrbitMilestoneTypeIdIn)) === Connect2_OrbitMobile_MUIModel.staticEntities.orbitMilestoneType.accommodationHost), false, this, function() {
                                return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_AccommodationHost_mvc_view, {
                                    inputs: {
                                        In_OrbitMilestoneTypeId: model.getCachedValue(idService.getId("s5ycpBGpEEeZUuWaD2mTKg.In_OrbitMilestoneTypeId"), function() {
                                            return (((model.variables.in_FromNotificationIn && model.variables.getGmpMilestoneHostDataAct.responseOut.statusAttr.successAttr)) ? (OS.BuiltinFunctions.textToIdentifier(model.variables.getGmpMilestoneHostDataAct.responseOut.milestoneTypeAttr)) : (model.variables.in_OrbitMilestoneTypeIdIn));
                                        }, function() {
                                            return model.variables.in_FromNotificationIn;
                                        }, function() {
                                            return model.variables.getGmpMilestoneHostDataAct.responseOut.statusAttr.successAttr;
                                        }, function() {
                                            return model.variables.getGmpMilestoneHostDataAct.responseOut.milestoneTypeAttr;
                                        }, function() {
                                            return model.variables.in_OrbitMilestoneTypeIdIn;
                                        }),
                                        _in_OrbitMilestoneTypeIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_FromNotificationInDataFetchStatus, model.variables.getGmpMilestoneHostDataAct.dataFetchStatusAttr, model.variables._in_OrbitMilestoneTypeIdInDataFetchStatus),
                                        In_MilestoneId: model.variables.in_MilestoneIdIn,
                                        _in_MilestoneIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneIdInDataFetchStatus),
                                        In_PreloadEventName: model.variables.in_EventNameIn,
                                        _in_PreloadEventNameInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EventNameInDataFetchStatus),
                                        In_PreloadMilestoneName: model.getCachedValue(idService.getId("s5ycpBGpEEeZUuWaD2mTKg.In_PreloadMilestoneName"), function() {
                                            return (((model.variables.in_FromNotificationIn && model.variables.getGmpMilestoneHostDataAct.responseOut.statusAttr.successAttr)) ? (model.variables.getGmpMilestoneHostDataAct.responseOut.milestoneTitleAttr) : (model.variables.in_MilestoneNameIn));
                                        }, function() {
                                            return model.variables.in_FromNotificationIn;
                                        }, function() {
                                            return model.variables.getGmpMilestoneHostDataAct.responseOut.statusAttr.successAttr;
                                        }, function() {
                                            return model.variables.getGmpMilestoneHostDataAct.responseOut.milestoneTitleAttr;
                                        }, function() {
                                            return model.variables.in_MilestoneNameIn;
                                        }),
                                        _in_PreloadMilestoneNameInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_FromNotificationInDataFetchStatus, model.variables.getGmpMilestoneHostDataAct.dataFetchStatusAttr, model.variables._in_MilestoneNameInDataFetchStatus),
                                        In_HostId: model.getCachedValue(idService.getId("s5ycpBGpEEeZUuWaD2mTKg.In_HostId"), function() {
                                            return (((model.variables.in_FromNotificationIn && model.variables.getGmpMilestoneHostDataAct.responseOut.statusAttr.successAttr)) ? (model.variables.getGmpMilestoneHostDataAct.responseOut.hostIdAttr) : (model.variables.in_HostIdIn));
                                        }, function() {
                                            return model.variables.in_FromNotificationIn;
                                        }, function() {
                                            return model.variables.getGmpMilestoneHostDataAct.responseOut.statusAttr.successAttr;
                                        }, function() {
                                            return model.variables.getGmpMilestoneHostDataAct.responseOut.hostIdAttr;
                                        }, function() {
                                            return model.variables.in_HostIdIn;
                                        }),
                                        _in_HostIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_FromNotificationInDataFetchStatus, model.variables.getGmpMilestoneHostDataAct.dataFetchStatusAttr, model.variables._in_HostIdInDataFetchStatus),
                                        In_EventId: model.variables.in_EventIdIn,
                                        _in_EventIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EventIdInDataFetchStatus)
                                    },
                                    events: {
                                        _handleError: function(ex) {
                                            controller.handleError(ex);
                                        },
                                        navigateTo_GuestArrangements$Action: function(event_MemberIdIn, event_MilestoneTypeIdIn, event_MilestoneTitleIn, event_HostIdIn) {
                                            var eventHandlerContext = callContext.clone();
                                            return OS.Flow.tryFinally(function() {
                                                var varBag = {};
                                                controller.pushDebuggerContext(eventHandlerContext);

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_AccommodationHost NavigateTo_GuestArrangements");
                                                controller.navigateTo_GuestArrangements$Action(event_MemberIdIn, event_MilestoneTypeIdIn, event_MilestoneTitleIn, event_HostIdIn, controller.callContext(eventHandlerContext));
                                            }, function() {
                                                controller.popDebuggerContext(eventHandlerContext);
                                            });

                                            ;
                                        },
                                        navigateTo_HouseholdDetail$Action: function(event_HouseholdIdIn) {
                                            var eventHandlerContext = callContext.clone();
                                            return OS.Flow.tryFinally(function() {
                                                var varBag = {};
                                                controller.pushDebuggerContext(eventHandlerContext);

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_AccommodationHost NavigateTo_HouseholdDetail");
                                                controller.navigateTo_HouseholdDetail$Action(event_HouseholdIdIn, controller.callContext(eventHandlerContext));
                                            }, function() {
                                                controller.popDebuggerContext(eventHandlerContext);
                                            });

                                            ;
                                        },
                                        navigateTo_ContactHelpdesk$Action: function(event_SubjectIn, event_EventNameIn) {
                                            var eventHandlerContext = callContext.clone();
                                            return OS.Flow.tryFinally(function() {
                                                var varBag = {};
                                                controller.pushDebuggerContext(eventHandlerContext);

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_AccommodationHost NavigateTo_ContactHelpdesk");
                                                controller.navigateTo_ContactHelpdesk$Action(event_SubjectIn, event_EventNameIn, controller.callContext(eventHandlerContext));
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
                                        alias: "5"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    placeholders: {
                                        menu: new PlaceholderContent(function() {
                                            return [React.createElement(OSWidgets.Placeholder, {
                                                align: /*Default*/ 0,
                                                content: _this.props.placeholders.menu_AccomodationHost,
                                                _idProps: {
                                                    service: idService,
                                                    name: "Menu_AccomodationHost"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })];
                                        }),
                                        commonUI_Elements: new PlaceholderContent(function() {
                                            return [React.createElement(OSWidgets.Placeholder, {
                                                align: /*Default*/ 0,
                                                content: _this.props.placeholders.commonUI_Elements_AccomodationHost,
                                                _idProps: {
                                                    service: idService,
                                                    name: "CommonUI_Elements_AccomodationHost"
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider
                                            })];
                                        })
                                    }
                                })];
                            }, function() {
                                return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_AccommodationHelper_mvc_view, {
                                    inputs: {
                                        In_PreloadMilestoneName: model.getCachedValue(idService.getId("aM_5W9MfhU2NfSITINprXA.In_PreloadMilestoneName"), function() {
                                            return (((model.variables.in_FromNotificationIn && model.variables.getGmpMilestoneHostDataAct.responseOut.statusAttr.successAttr)) ? (model.variables.getGmpMilestoneHostDataAct.responseOut.milestoneTitleAttr) : (model.variables.in_MilestoneNameIn));
                                        }, function() {
                                            return model.variables.in_FromNotificationIn;
                                        }, function() {
                                            return model.variables.getGmpMilestoneHostDataAct.responseOut.statusAttr.successAttr;
                                        }, function() {
                                            return model.variables.getGmpMilestoneHostDataAct.responseOut.milestoneTitleAttr;
                                        }, function() {
                                            return model.variables.in_MilestoneNameIn;
                                        }),
                                        _in_PreloadMilestoneNameInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_FromNotificationInDataFetchStatus, model.variables.getGmpMilestoneHostDataAct.dataFetchStatusAttr, model.variables._in_MilestoneNameInDataFetchStatus),
                                        In_PreloadEventName: model.variables.in_EventNameIn,
                                        _in_PreloadEventNameInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EventNameInDataFetchStatus),
                                        In_MilestoneId: model.variables.in_MilestoneIdIn,
                                        _in_MilestoneIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneIdInDataFetchStatus),
                                        In_EventId: model.variables.in_EventIdIn,
                                        _in_EventIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EventIdInDataFetchStatus),
                                        In_OrbitMilestoneTypeId: model.getCachedValue(idService.getId("aM_5W9MfhU2NfSITINprXA.In_OrbitMilestoneTypeId"), function() {
                                            return (((model.variables.in_FromNotificationIn && model.variables.getGmpMilestoneHostDataAct.responseOut.statusAttr.successAttr)) ? (OS.BuiltinFunctions.textToIdentifier(model.variables.getGmpMilestoneHostDataAct.responseOut.milestoneTypeAttr)) : (model.variables.in_OrbitMilestoneTypeIdIn));
                                        }, function() {
                                            return model.variables.in_FromNotificationIn;
                                        }, function() {
                                            return model.variables.getGmpMilestoneHostDataAct.responseOut.statusAttr.successAttr;
                                        }, function() {
                                            return model.variables.getGmpMilestoneHostDataAct.responseOut.milestoneTypeAttr;
                                        }, function() {
                                            return model.variables.in_OrbitMilestoneTypeIdIn;
                                        }),
                                        _in_OrbitMilestoneTypeIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_FromNotificationInDataFetchStatus, model.variables.getGmpMilestoneHostDataAct.dataFetchStatusAttr, model.variables._in_OrbitMilestoneTypeIdInDataFetchStatus),
                                        In_HostId: model.getCachedValue(idService.getId("aM_5W9MfhU2NfSITINprXA.In_HostId"), function() {
                                            return (((model.variables.in_FromNotificationIn && model.variables.getGmpMilestoneHostDataAct.responseOut.statusAttr.successAttr)) ? (model.variables.getGmpMilestoneHostDataAct.responseOut.hostIdAttr) : (model.variables.in_HostIdIn));
                                        }, function() {
                                            return model.variables.in_FromNotificationIn;
                                        }, function() {
                                            return model.variables.getGmpMilestoneHostDataAct.responseOut.statusAttr.successAttr;
                                        }, function() {
                                            return model.variables.getGmpMilestoneHostDataAct.responseOut.hostIdAttr;
                                        }, function() {
                                            return model.variables.in_HostIdIn;
                                        }),
                                        _in_HostIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_FromNotificationInDataFetchStatus, model.variables.getGmpMilestoneHostDataAct.dataFetchStatusAttr, model.variables._in_HostIdInDataFetchStatus)
                                    },
                                    events: {
                                        _handleError: function(ex) {
                                            controller.handleError(ex);
                                        },
                                        navigateTo_HouseholdDetail$Action: function(event_HouseholdIdIn) {
                                            var eventHandlerContext = callContext.clone();
                                            return OS.Flow.tryFinally(function() {
                                                var varBag = {};
                                                controller.pushDebuggerContext(eventHandlerContext);

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_AccommodationHelper NavigateTo_HouseholdDetail");
                                                controller.navigateTo_HouseholdDetail$Action(event_HouseholdIdIn, controller.callContext(eventHandlerContext));
                                            }, function() {
                                                controller.popDebuggerContext(eventHandlerContext);
                                            });

                                            ;
                                        },
                                        navigateTo_ContactHelpdesk$Action: function(event_SubjectIn, event_EventNameIn) {
                                            var eventHandlerContext = callContext.clone();
                                            return OS.Flow.tryFinally(function() {
                                                var varBag = {};
                                                controller.pushDebuggerContext(eventHandlerContext);

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_AccommodationHelper NavigateTo_ContactHelpdesk");
                                                controller.navigateTo_ContactHelpdesk$Action(event_SubjectIn, event_EventNameIn, controller.callContext(eventHandlerContext));
                                            }, function() {
                                                controller.popDebuggerContext(eventHandlerContext);
                                            });

                                            ;
                                        },
                                        navigateTo_GuestArrangements$Action: function(event_MemberIdIn, event_MilestoneTypeIdIn, event_MilestoneTitleIn, event_HostIdIn) {
                                            var eventHandlerContext = callContext.clone();
                                            return OS.Flow.tryFinally(function() {
                                                var varBag = {};
                                                controller.pushDebuggerContext(eventHandlerContext);

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_AccommodationHelper NavigateTo_GuestArrangements");
                                                controller.navigateTo_GuestArrangements$Action(event_MemberIdIn, event_MilestoneTypeIdIn, event_MilestoneTitleIn, event_HostIdIn, controller.callContext(eventHandlerContext));
                                            }, function() {
                                                controller.popDebuggerContext(eventHandlerContext);
                                            });

                                            ;
                                        },
                                        navigateTo_ContactByEmail$Action: function(in_AvatarURLIn, in_ContactNameIn, in_ContactSurnameIn, in_ContactLocalityIn, in_ContactCountryIn, in_EmailToIn, in_SubjectIn, in_MilestoneTitleIn, in_FormattedDateTimeIn) {
                                            var eventHandlerContext = callContext.clone();
                                            return OS.Flow.tryFinally(function() {
                                                var varBag = {};
                                                controller.pushDebuggerContext(eventHandlerContext);

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_AccommodationHelper NavigateTo_ContactByEmail");
                                                controller.navigateTo_ContactHostByEmail$Action(in_AvatarURLIn, in_ContactNameIn, in_ContactSurnameIn, in_ContactLocalityIn, in_ContactCountryIn, in_EmailToIn, in_SubjectIn, in_MilestoneTitleIn, in_FormattedDateTimeIn, controller.callContext(eventHandlerContext));
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
                                        alias: "6"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    placeholders: {
                                        menu: PlaceholderContent.Empty,
                                        commonUI_Elements: PlaceholderContent.Empty
                                    },
                                    _dependencies: []
                                })];
                            })];
                        })];
                    }, function() {
                        return [];
                    })];
                }, function() {
                    return [React.createElement(Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, {
                        inputs: {
                            CustomClass: "orbit-detail"
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
                            alias: "7"
                        },
                        _widgetRecordProvider: widgetsRecordProvider,
                        placeholders: {
                            menu: new PlaceholderContent(function() {
                                return [React.createElement(OSWidgets.Placeholder, {
                                    align: /*Default*/ 0,
                                    content: _this.props.placeholders.menu_Failed,
                                    _idProps: {
                                        service: idService,
                                        name: "Menu_Failed"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })];
                            }),
                            headerLeft: PlaceholderContent.Empty,
                            title: new PlaceholderContent(function() {
                                return [React.createElement(OSWidgets.Expression, {
                                    value: model.getCachedValue(idService.getId("B1oNRref1E6HlmnY5ujBFg.Value"), function() {
                                        return ((((model.variables.in_EventNameIn) !== (OS.BuiltinFunctions.nullTextIdentifier()))) ? (model.variables.in_EventNameIn) : ("Event not found"));
                                    }, function() {
                                        return model.variables.in_EventNameIn;
                                    }),
                                    _idProps: {
                                        service: idService,
                                        uuid: "16"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EventNameInDataFetchStatus)
                                })];
                            }),
                            headerRight: PlaceholderContent.Empty,
                            headerContent: PlaceholderContent.Empty,
                            content: new PlaceholderContent(function() {
                                return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, {
                                    inputs: {
                                        Message: "This Event could not be found. Please check again later or contact the Orbit Helpdesk if you have any questions."
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
                                        alias: "8"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    _dependencies: []
                                })];
                            }),
                            bottomBar: PlaceholderContent.Empty,
                            commonUI_Elements: new PlaceholderContent(function() {
                                return [React.createElement(OSWidgets.Placeholder, {
                                    align: /*Default*/ 0,
                                    content: _this.props.placeholders.commonUI_Elements_Failed,
                                    _idProps: {
                                        service: idService,
                                        name: "CommonUI_Elements_Failed"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })];
                            })
                        }
                    })];
                })];
            }, function() {
                return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, {
                    inputs: {
                        In_SkeletonLoadingId: Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.milestoneWrapper
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
                        alias: "9"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    _dependencies: []
                })];
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MilestoneWrapper.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "UBT_AppManager.model", "UBT_AppManager.controller", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MilestoneWrapper.mvc$debugger", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MilestoneWrapper.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "Connect2_OrbitMobile_IS.model$GetGmpMilestoneHostResponseRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, UBT_AppManagerModel, UBT_AppManagerController, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_MilestoneWrapper_mvc_Debugger, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_MilestoneWrapper_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {};
            this.dataFetchDependenciesOriginal = {
                getGmpMilestoneHost$DataActRefresh: -1
            };
            this.dataFetchDependentsGraph = {
                getGmpMilestoneHost$DataActRefresh: []
            };
            this.shouldSendClientVarsToDataSources = false;
        }
        // Server Actions

        // Aggregates and Data Actions
        Controller.prototype.getGmpMilestoneHost$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:315o6CiWu061gSQ9RskDjw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.ht2SSr28ZUCLOXuHgVuZWw/DataActions.315o6CiWu061gSQ9RskDjw:30NM7JCyN171L_eoD04t3Q", "Connect2_OrbitMobile_MUI", "GetGmpMilestoneHost", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_MilestoneWrapper/GetGmpMilestoneHost");
                return controller.callDataAction("DataActionGetGmpMilestoneHost", "screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_MilestoneWrapper/DataActionGetGmpMilestoneHost", "2yM7PdGnqlMO0HPz5m_jkA", function(b) {
                    model.variables.getGmpMilestoneHostDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.getGmpMilestoneHostDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getGmpMilestoneHostDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false).then(function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_MilestoneWrapper/GetGmpMilestoneHost On After Fetch");
                    controller._onAfterFetch_GetGmpMilestoneHost$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:315o6CiWu061gSQ9RskDjw", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };

        Controller.prototype.dataFetchActionNames = ["getGmpMilestoneHost$DataActRefresh"];
        // Client Actions
        Controller.prototype._onAfterFetch_GetGmpMilestoneHost$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnAfterFetch_GetGmpMilestoneHost");
            callContext = controller.callContext(callContext);
            var unknownErrorVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
            varBag.callContext = callContext;
            varBag.unknownErrorVar = unknownErrorVar;
            try {
                try {
                    OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:SnpfIbnEe0au5xHW8lxsvw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.ht2SSr28ZUCLOXuHgVuZWw/ClientActions.SnpfIbnEe0au5xHW8lxsvw:FHYyxZmp567QPoKDtUTAkQ", "Connect2_OrbitMobile_MUI", "OnAfterFetch_GetGmpMilestoneHost", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7o8UbGiLLU+n3+zGcUI17g", callContext.id);
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BeFMJ3Z9_0uz6XoBohu6Jg", callContext.id);
                    // IsFetchingData = False
                    model.variables.isFetchingDataVar = false;
                    OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:H0CkkDQbNkm+uDmlH0jWAA", callContext.id);
                } catch (ex) {
                    (function() {
                        OS.Logger.trace("ScreenBlock_MilestoneWrapper.OnAfterFetch_GetGmpMilestoneHost", OS.Exceptions.getMessage(ex), ex.name);
                        // Handle Error: UnknownError
                        if (OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.UserException, "Connect2_OrbitMobile_MUI.UnknownError")) {
                            OS.Logger.error(null, ex);
                            unknownErrorVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                            OutSystemsDebugger.handleException(unknownErrorVar.value.exceptionMessageAttr, callContext.id);
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dybq8qQVKku4M57dlnk+fA", callContext.id);
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+U3ybeXo1UCn1RYOZv3XxQ", callContext.id);
                            // IsFetchingData = False
                            model.variables.isFetchingDataVar = false;
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Wgqd+u7AjUyCvOesYfuM8A", callContext.id);
                            // Raise Error: UnknownError
                            throw new OS.Exceptions.Exceptions.UserException("Connect2_OrbitMobile_MUI.UnknownError", unknownErrorVar.value.exceptionMessageAttr);
                        }

                        throw ex;
                    })();
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:SnpfIbnEe0au5xHW8lxsvw", callContext.id);
            }

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
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:+y7bKXQuFU20J_t1hrRCnQ:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.ht2SSr28ZUCLOXuHgVuZWw/ClientActions.+y7bKXQuFU20J_t1hrRCnQ:Vz0J6ZHhiFBr9bL2uxlaBw", "Connect2_OrbitMobile_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ytTx20AFTU+agxyhLV2jKw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:E7i_dj+MUEWYpanLcs0hfg", callContext.id);
                wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_MilestoneWrapper_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnReady", {
                    FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MilestoneWrapper.OnReady$wasCurrentViewRestoredFromCacheJSResult"))();
                    jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
                    return jsNodeResult;
                }, {}, {});
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qWkpcQxmx0iDMKUEKUZ2Eg", callContext.id) && wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut)) {
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Pcdy_tVtHEOzAWEcEKdMrA", callContext.id);
                    } else {
                        // From Notification?
                        if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uhHzxXxL2Emf_aCf99fYMw", callContext.id) && !(model.variables.in_FromNotificationIn))) {
                            // Missing optional values?
                            if ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:r3ceG+9O9EW_szb56hq4SA", callContext.id) && !(((model.variables.in_HostIdIn.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier())) || (model.variables.in_OrbitMilestoneTypeIdIn === OS.BuiltinFunctions.nullTextIdentifier())) || (model.variables.in_MilestoneNameIn === OS.BuiltinFunctions.nullTextIdentifier()))))) {
                                OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fOHjq7nPjEeeDELCbd1XJA", callContext.id);
                                return OS.Flow.returnAsync();

                            }

                        }

                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pzxKd+d4_0O_2LuAuv8VRQ", callContext.id);
                        // IsFetchingData = True
                        model.variables.isFetchingDataVar = true;
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:W7mHV2soIki+iPDIg5IB_g", callContext.id);
                        // Execute Action: AppManager_GetCachedUserInfo
                        appManager_GetCachedUserInfoVar.value = UBT_AppManagerController.default.appManager_GetCachedUserInfo$Action(callContext);

                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:os6XJWFd5EGeJQ8CJNqmRg", callContext.id);
                        // UserMemberId = TextToInteger
                        model.variables.userMemberIdVar = OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.textToInteger(appManager_GetCachedUserInfoVar.value.userInformationOut.memberIdAttr));
                        OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GIQSINT46UuSfzzl2ev81Q", callContext.id);
                        // Refresh Query: GetGmpMilestoneHost
                        var result = controller.getGmpMilestoneHost$DataActRefresh(callContext);
                        model.flush();
                        return result.then(function() {
                            OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CAIR9wATrU6gB4dhU2wI4A", callContext.id);
                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:+y7bKXQuFU20J_t1hrRCnQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:+y7bKXQuFU20J_t1hrRCnQ", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MilestoneWrapper.OnReady$wasCurrentViewRestoredFromCacheJSResult", [{
            name: "FromCache",
            attrName: "fromCacheOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);

        Controller.prototype.onAfterFetch_GetGmpMilestoneHost$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onAfterFetch_GetGmpMilestoneHost$Action, callContext);

        };
        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.navigateTo_ContactHostByEmail$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.navigateTo_HouseholdDetail$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.navigateTo_ContactHelpdesk$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.navigateTo_GuestArrangements$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:YqF_ecsKt0e5VFTRsjye5A:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A:QgY6d2StgdXP5HfjADqGwg", "Connect2_OrbitMobile_MUI", "Orbit_ScreenBlocks", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:ht2SSr28ZUCLOXuHgVuZWw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.ht2SSr28ZUCLOXuHgVuZWw:h3A3uC87adlTT0a6gIta1Q", "Connect2_OrbitMobile_MUI", "ScreenBlock_MilestoneWrapper", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:ht2SSr28ZUCLOXuHgVuZWw", callContext.id);
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_MilestoneWrapper On Ready");
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
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MilestoneWrapper.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
    };
});

define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_MilestoneWrapper.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "dybq8qQVKku4M57dlnk+fA": {
            getter: function(varBag, idService) {
                return varBag.unknownErrorVar.value;
            }
        },
        "W7mHV2soIki+iPDIg5IB_g": {
            getter: function(varBag, idService) {
                return varBag.appManager_GetCachedUserInfoVar.value;
            }
        },
        "E7i_dj+MUEWYpanLcs0hfg": {
            getter: function(varBag, idService) {
                return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
            }
        },
        "x8mK+rIQN0WnupN+FG3yug": {
            getter: function(varBag, idService) {
                return varBag.model.variables.userMemberIdVar;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "98+VCUnPXkyTP6DKNaxeWw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isFetchingDataVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "udqLLusCwkiH3wwEHEcXUQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_FromNotificationIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "fwHJTQNw2kq27I+aCceiHg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_MilestoneIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "kavhu5imIU+KDWQlZshIig": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_EventIdIn;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "2STov2JyCky_hEU_d4xtnw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_HostIdIn;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "HdiEHQwHmkSJjqzvp683Kg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_OrbitMilestoneTypeIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "tg7hlAjkbkexyVHUiYmFdw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_MilestoneNameIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "mn9R2AxO8kGP+sRSWCuP6w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_EventNameIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "315o6CiWu061gSQ9RskDjw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.getGmpMilestoneHostDataAct;
            }
        },
        "4u8YUF9h3U+UeoSId2PBVQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_IsNotFetching"));
                })(varBag.model, idService);
            }
        },
        "+7d+dFqrJ0umpzxmm5FLLA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_HasData"));
                })(varBag.model, idService);
            }
        },
        "JqmQKVMxQU2TOd6a5IzCtA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_MealMilestone"));
                })(varBag.model, idService);
            }
        },
        "8GzQZqwPKkiSfOnCJn0Q7w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_MealGuestMilestone"));
                })(varBag.model, idService);
            }
        },
        "hdCBqa0VM0Oi1LE+5wRlEA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu"));
                })(varBag.model, idService);
            }
        },
        "7y0axoDtnU6NasP+5wcb1g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu_MealGuest"));
                })(varBag.model, idService);
            }
        },
        "YixhxAIu4ECfu9NkNE9n2Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements"));
                })(varBag.model, idService);
            }
        },
        "FxskdyoQx0C+fvoCmG8hdw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements_MealGuest"));
                })(varBag.model, idService);
            }
        },
        "elJDSj2lY0+TPT62iu3NxA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IfHostMealMilestone"));
                })(varBag.model, idService);
            }
        },
        "eq1MXCpN90WYFVKCU8Z0PQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu"));
                })(varBag.model, idService);
            }
        },
        "pSxzsCojIkG2PxG6znVtQg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu_MealHost"));
                })(varBag.model, idService);
            }
        },
        "rz5rG2j1KEezzemb3ZU+Kw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements"));
                })(varBag.model, idService);
            }
        },
        "zFDVWhX1pEW25Q3pdOCc6w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements_MealHost"));
                })(varBag.model, idService);
            }
        },
        "bcSwJv21KkeJnUbzNbF_Yw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu"));
                })(varBag.model, idService);
            }
        },
        "q_UXCILP4EeydozzPdvObQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements"));
                })(varBag.model, idService);
            }
        },
        "ZD4BDpXjkEu4Li1qGe_Bqg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_AccomodationMilestone"));
                })(varBag.model, idService);
            }
        },
        "orLvkawq3UKd9m91lRl1dQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_AccomodationGuestMilestone"));
                })(varBag.model, idService);
            }
        },
        "iXw8wphdpkGFigIMnSq3FA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu"));
                })(varBag.model, idService);
            }
        },
        "dRrszek7X0yibZiFjv05Kw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu_AccommodationGuest"));
                })(varBag.model, idService);
            }
        },
        "7cJIXJOY7kqTCJM5kPpj1w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements"));
                })(varBag.model, idService);
            }
        },
        "vStI8IoyOUWkexf5q_4BhA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements_AccommodationGuest"));
                })(varBag.model, idService);
            }
        },
        "+Y04i4shEEqRg09LAD5a5A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IfHostAccommodationMilestone"));
                })(varBag.model, idService);
            }
        },
        "woB58PQ5aUGHIWw1U0rs7A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu"));
                })(varBag.model, idService);
            }
        },
        "iVDr0ZMVs0C43yvf5+hhkA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu_AccomodationHost"));
                })(varBag.model, idService);
            }
        },
        "9bPKq79lUkyOM19S9IYbbw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements"));
                })(varBag.model, idService);
            }
        },
        "KoWQhydpuUWtiZN+RACOUA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements_AccomodationHost"));
                })(varBag.model, idService);
            }
        },
        "7Y2z06bch02g3ntR8xeIOA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu"));
                })(varBag.model, idService);
            }
        },
        "5+R7OC8d1E2l6WjcmJ8NKQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements"));
                })(varBag.model, idService);
            }
        },
        "th_greXYI06dLTaRdsT8jA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu"));
                })(varBag.model, idService);
            }
        },
        "i5E_Tr8EIUyECvpOv1MZIw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu_Failed"));
                })(varBag.model, idService);
            }
        },
        "UmT_xzEYeUegSFhpjIXEPg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderLeft"));
                })(varBag.model, idService);
            }
        },
        "MKJ6BT_yMkefc2vbKEqEjQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Title"));
                })(varBag.model, idService);
            }
        },
        "na4exyFMpki11Ey9E3oa2w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderRight"));
                })(varBag.model, idService);
            }
        },
        "waWl5Zww90uoTZ7W17IzCA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderContent"));
                })(varBag.model, idService);
            }
        },
        "Uzea5rWQ_UagRk8Ko22Nag": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "zPaF3XZyZUOhGqheKdnKXw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BottomBar"));
                })(varBag.model, idService);
            }
        },
        "deFtAehBQkSFdFZAkAnlMw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements"));
                })(varBag.model, idService);
            }
        },
        "ILOk2EN1BkS_oOeNej+TBQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements_Failed"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});