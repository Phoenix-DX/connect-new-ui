define("UBTConnect.Directory_Locality.Locality_Households_HouseholdList.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "Connect_Household_CS.model", "NavigationHandler.controller", "UBTConnect_Utils.controller", "UBTConnect.controller", "UBTJavaScriptUtils.controller", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnect.Directory_CommonBlocks.Directory_EmptyState.mvc$model", "UBTConnect.Directory_Household_Blocks.Household_Card.mvc$model", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "Connect_Household_CS.model$UI_LocalityHouseholdRec", "UBTConnect.referencesHealth$Connect_Household_CS", "NavigationHandler.controller$SetPreloadObject", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect_Utils.controller$GetHasCarouselEnabled", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$UI_LocalityHouseholdList", "UBTConnect.model$SwipeActionLongIntegerRecordList", "UBTConnect.model$CarouselPreloadedHouseholdsRec", "UBTConnect.controller$GetLocal_Bookmark_C2", "UBTConnect.controller$GetLocal_Bookmark", "UBTConnect_Utils.controller$GetHasNewBookmarks", "UBTJavaScriptUtils.controller$JSUtils_Element_Operations_GetElementById", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTConnect_Utils.controller$ForceListUpdateOnScrollEnd", "UBTJavaScriptUtils.controller$ReactiveInstance_ForceUpdate"], function(OutSystems, UBTConnectModel, UBTConnectLibraryModel, Connect_Household_CSModel, NavigationHandlerController, UBTConnect_UtilsController, UBTConnectController, UBTJavaScriptUtilsController, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, UBTConnect_Directory_CommonBlocks_Directory_EmptyState_mvcModel, UBTConnect_Directory_Household_Blocks_Household_Card_mvcModel) {
    var OS = OutSystems.Internal;

    var GetLocalityHouseholdsDataActRec = (function(_super) {
        __extends(GetLocalityHouseholdsDataActRec, _super);

        function GetLocalityHouseholdsDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        GetLocalityHouseholdsDataActRec.attributesToDeclare = function() {
            return [
                this.attr("LocalityHouseholds", "localityHouseholdsOut", "LocalityHouseholds", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_LocalityHouseholdList());
                }, true, UBTConnectModel.UI_LocalityHouseholdList)
            ].concat(_super.attributesToDeclare.call(this));
        };
        GetLocalityHouseholdsDataActRec.fromStructure = function(str) {
            return new GetLocalityHouseholdsDataActRec(new GetLocalityHouseholdsDataActRec.RecordClass({
                localityHouseholdsOut: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        GetLocalityHouseholdsDataActRec.init();
        return GetLocalityHouseholdsDataActRec;
    })(OS.Model.DataSourceRecord);

    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("In_LocalityId", "in_LocalityIdIn", "In_LocalityId", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("_in_LocalityIdInDataFetchStatus", "_in_LocalityIdInDataFetchStatus", "_in_LocalityIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("GetLocalityHouseholds", "getLocalityHouseholdsDataAct", "getLocalityHouseholdsDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new GetLocalityHouseholdsDataActRec());
                }, true, GetLocalityHouseholdsDataActRec)
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
                    Model._hasValidationWidgetsValue = (((UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets) || UBTConnect_Directory_CommonBlocks_Directory_EmptyState_mvcModel.hasValidationWidgets) || UBTConnect_Directory_Household_Blocks_Household_Card_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_LocalityId" in inputs) {
                this.variables.in_LocalityIdIn = inputs.In_LocalityId;
                if ("_in_LocalityIdInDataFetchStatus" in inputs) {
                    this.variables._in_LocalityIdInDataFetchStatus = inputs._in_LocalityIdInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Directory_Locality.Locality_Households_HouseholdList");
});
define("UBTConnect.Directory_Locality.Locality_Households_HouseholdList.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "Connect_Household_CS.model", "NavigationHandler.controller", "UBTConnect_Utils.controller", "UBTJavaScriptUtils.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Locality.Locality_Households_HouseholdList.mvc$model", "UBTConnect.Directory_Locality.Locality_Households_HouseholdList.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnect.Directory_CommonBlocks.Directory_EmptyState.mvc$view", "UBTConnect.Directory_Household_Blocks.Household_Card.mvc$view", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "Connect_Household_CS.model$UI_LocalityHouseholdRec", "UBTConnect.referencesHealth$Connect_Household_CS", "NavigationHandler.controller$SetPreloadObject", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect_Utils.controller$GetHasCarouselEnabled", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$UI_LocalityHouseholdList", "UBTConnect.model$SwipeActionLongIntegerRecordList", "UBTConnect.model$CarouselPreloadedHouseholdsRec", "UBTConnect.controller$GetLocal_Bookmark_C2", "UBTConnect.controller$GetLocal_Bookmark", "UBTConnect_Utils.controller$GetHasNewBookmarks", "UBTJavaScriptUtils.controller$JSUtils_Element_Operations_GetElementById", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTConnect_Utils.controller$ForceListUpdateOnScrollEnd", "UBTJavaScriptUtils.controller$ReactiveInstance_ForceUpdate"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, Connect_Household_CSModel, NavigationHandlerController, UBTConnect_UtilsController, UBTJavaScriptUtilsController, React, OSView, UBTConnect_Directory_Locality_Locality_Households_HouseholdList_mvc_model, UBTConnect_Directory_Locality_Locality_Households_HouseholdList_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnect_Directory_CommonBlocks_Directory_EmptyState_mvc_view, UBTConnect_Directory_Household_Blocks_Household_Card_mvc_view) {
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
        View.displayName = "Directory_Locality.Locality_Households_HouseholdList";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnect_Directory_CommonBlocks_Directory_EmptyState_mvc_view, UBTConnect_Directory_Household_Blocks_Household_Card_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Directory_Locality_Locality_Households_HouseholdList_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Directory_Locality_Locality_Households_HouseholdList_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                inputs: {
                    Options: model.getCachedValue(idService.getId("duhQvR3nUkemXdi9Tzj6Ew.Options"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                            rec.backgroundAttr = function() {
                                var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
                                return rec;
                            }();
                            rec.paddingSizeAttr = function() {
                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
                                return rec;
                            }();
                            rec.marginSizeAttr = function() {
                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
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
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    content: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                            inputs: {
                                In_IsLoading: !(model.variables.getLocalityHouseholdsDataAct.isDataFetchedAttr)
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
                                placeholder_LoadingSection: new PlaceholderContent(function() {
                                    return [$if(model.variables.getLocalityHouseholdsDataAct.localityHouseholdsOut.isEmpty, false, this, function() {
                                        return [React.createElement(UBTConnect_Directory_CommonBlocks_Directory_EmptyState_mvc_view, {
                                            inputs: {
                                                EntityTypeId: UBTConnectModel.staticEntities.connect_Entity.household
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
                                                alias: "3"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        })];
                                    }, function() {
                                        return [React.createElement(OSWidgets.List, {
                                            animateItems: true,
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            mode: /*Default*/ 0,
                                            source: model.variables.getLocalityHouseholdsDataAct.localityHouseholdsOut,
                                            style: "list list-group list--gap-s",
                                            tag: "div",
                                            _idProps: {
                                                service: idService,
                                                name: "locality_Households"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalityHouseholdsDataAct.dataFetchStatusAttr),
                                            placeholders: {
                                                content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                    return [React.createElement(UBTConnect_Directory_Household_Blocks_Household_Card_mvc_view, {
                                                        inputs: {
                                                            Household: model.variables.getLocalityHouseholdsDataAct.localityHouseholdsOut.getCurrent(callContext.iterationContext),
                                                            _householdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalityHouseholdsDataAct.dataFetchStatusAttr)
                                                        },
                                                        events: {
                                                            _handleError: function(ex) {
                                                                controller.handleError(ex);
                                                            },
                                                            event_OnClickHousehold$Action: function(householdIdIn) {
                                                                return Promise.resolve().then(function() {
                                                                    var eventHandlerContext = callContext.clone();
                                                                    return OS.Flow.tryFinally(function() {
                                                                        var varBag = {};
                                                                        controller.pushDebuggerContext(eventHandlerContext);

                                                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Household_Blocks/Household_Card Event_OnClickHousehold");
                                                                        return controller.household_CardEvent_OnClickHousehold$Action(householdIdIn, controller.callContext(eventHandlerContext));
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
                                                            uuid: "4",
                                                            alias: "4"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        _dependencies: []
                                                    })];
                                                }, callContext, idService, "1")
                                            },
                                            _dependencies: [asPrimitiveValue(model.variables.getLocalityHouseholdsDataAct.dataFetchStatusAttr)]
                                        })];
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.getLocalityHouseholdsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalityHouseholdsDataAct.localityHouseholdsOut)]
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.getLocalityHouseholdsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalityHouseholdsDataAct.localityHouseholdsOut), asPrimitiveValue(model.variables.getLocalityHouseholdsDataAct.isDataFetchedAttr)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect.Directory_Locality.Locality_Households_HouseholdList.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "Connect_Household_CS.model", "NavigationHandler.controller", "UBTConnect_Utils.controller", "UBTJavaScriptUtils.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Locality.Locality_Households_HouseholdList.mvc$debugger", "UBTConnect.Directory_Locality.Locality_Households_HouseholdList.mvc$controller.ScreenEvent_OnReady.IsViewRestoredFromCacheJS", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "Connect_Household_CS.model$UI_LocalityHouseholdRec", "UBTConnect.referencesHealth$Connect_Household_CS", "NavigationHandler.controller$SetPreloadObject", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect_Utils.controller$GetHasCarouselEnabled", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$UI_LocalityHouseholdList", "UBTConnect.model$SwipeActionLongIntegerRecordList", "UBTConnect.model$CarouselPreloadedHouseholdsRec", "UBTConnect.controller$GetLocal_Bookmark_C2", "UBTConnect.controller$GetLocal_Bookmark", "UBTConnect_Utils.controller$GetHasNewBookmarks", "UBTJavaScriptUtils.controller$JSUtils_Element_Operations_GetElementById", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTConnect_Utils.controller$ForceListUpdateOnScrollEnd", "UBTJavaScriptUtils.controller$ReactiveInstance_ForceUpdate"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, Connect_Household_CSModel, NavigationHandlerController, UBTConnect_UtilsController, UBTJavaScriptUtilsController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Locality_Locality_Households_HouseholdList_mvc_Debugger, UBTConnect_Directory_Locality_Locality_Households_HouseholdList_mvc_controller_ScreenEvent_OnReady_IsViewRestoredFromCacheJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {};
            this.dataFetchDependenciesOriginal = {
                getLocalityHouseholds$DataActRefresh: -1
            };
            this.dataFetchDependentsGraph = {
                getLocalityHouseholds$DataActRefresh: []
            };
            this.shouldSendClientVarsToDataSources = false;
        }
        // Server Actions

        // Aggregates and Data Actions
        Controller.prototype.getLocalityHouseholds$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:KhPOk4+Im0mKCCwyt+2glQ:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.+udMzh+2pk+JLgDyZssqdA/DataActions.KhPOk4+Im0mKCCwyt+2glQ:no6mkvsXgq1eLcbxfBhuLA", "UBTConnect", "GetLocalityHouseholds", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Locality/Locality_Households_HouseholdList/GetLocalityHouseholds");
                return controller.callDataAction("DataActionGetLocalityHouseholds", "screenservices/UBTConnect/Directory_Locality/Locality_Households_HouseholdList/DataActionGetLocalityHouseholds", "_qjsKOtZ7mL8MVMM6zND8Q", function(b) {
                    model.variables.getLocalityHouseholdsDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.getLocalityHouseholdsDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getLocalityHouseholdsDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false).then(function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Locality/Locality_Households_HouseholdList/GetLocalityHouseholds On After Fetch");
                    return controller._onAfterFetch_GetLocalityHouseholds_Bookmarks$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:KhPOk4+Im0mKCCwyt+2glQ", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };

        Controller.prototype.dataFetchActionNames = ["getLocalityHouseholds$DataActRefresh"];
        // Client Actions
        Controller.prototype._household_CardEvent_OnClickHousehold$Action = function(householdIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Household_CardEvent_OnClickHousehold");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Locality.Locality_Households_HouseholdList.Household_CardEvent_OnClickHousehold$vars"))());
            vars.value.householdIdInLocal = householdIdIn;
            var getHasCarouselEnabledVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.getHasCarouselEnabledVar = getHasCarouselEnabledVar;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:sntIM_9LUkGHRlSSnPmZWw:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.+udMzh+2pk+JLgDyZssqdA/ClientActions.sntIM_9LUkGHRlSSnPmZWw:BtU34MabZl1GVRNXR3CKFw", "UBTConnect", "Household_CardEvent_OnClickHousehold", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rCmSZw4NUECE1ggUa6bOkw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VVOPXLoOPUujEN4VuvTh5Q", callContext.id);
                // Execute Action: GetHasCarouselEnabled
                getHasCarouselEnabledVar.value = UBTConnect_UtilsController.default.getHasCarouselEnabled$Action(callContext);

                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Z9TJKWQYYUGYc+vQ7tw7Pw", callContext.id) && getHasCarouselEnabledVar.value.hasCarouselEnabledOut)) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eRqvVJyKy0GzwikpQq+EPA", callContext.id);
                        // HouseholdIdList.CarouselHouseholdItem = GetLocalityHouseholds.LocalityHouseholds
                        vars.value.householdIdListVar.carouselHouseholdItemAttr = OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getLocalityHouseholdsDataAct.localityHouseholdsOut, new UBTConnectModel.SwipeActionLongIntegerRecordList(), function(source, target) {
                            target.householdAttr = source.householdIdAttr;
                            return target;
                        });
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:t5_mW5yUoEWU20pUUP7orA", callContext.id);
                        // Execute Action: SetPreloadObject
                        NavigationHandlerController.default.setPreloadObject$Action(OS.BuiltinFunctions.toObject(vars.value.householdIdListVar), callContext);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:F4k6IPMTikC40vxXZjIDbg", callContext.id);
                        // Destination: /UBTConnect/HouseholdCarousel
                        return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HouseholdCarousel", {
                            In_StartingHouseholdId: OS.DataConversion.ServerDataConverter.asString(model.variables.getLocalityHouseholdsDataAct.localityHouseholdsOut.getCurrent(callContext.iterationContext).householdIdAttr, OS.DataTypes.DataTypes.LongInteger)
                        }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SyqROVV5Y02Hfyk9TGJ0SQ", callContext.id);
                        // Trigger Event: Event_NavigateToHouseholdDetails
                        return controller.event_NavigateToHouseholdDetails$Action(vars.value.householdIdInLocal, callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zc1D2ctYTkeNg1rFpd+0OA", callContext.id);
                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:sntIM_9LUkGHRlSSnPmZWw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:sntIM_9LUkGHRlSSnPmZWw", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Locality.Locality_Households_HouseholdList.Household_CardEvent_OnClickHousehold$vars", [{
            name: "HouseholdId",
            attrName: "householdIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
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
        }]);
        Controller.prototype._onAfterFetch_GetLocalityHouseholds_Bookmarks$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnAfterFetch_GetLocalityHouseholds_Bookmarks");
            callContext = controller.callContext(callContext);
            var getLocal_Bookmark_C2Var = new OS.DataTypes.VariableHolder();
            var getLocal_BookmarkVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getLocal_Bookmark_C2Var = getLocal_Bookmark_C2Var;
            varBag.getLocal_BookmarkVar = getLocal_BookmarkVar;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:oYgXZ4REJkWHA7nzIBeJIA:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.+udMzh+2pk+JLgDyZssqdA/ClientActions.oYgXZ4REJkWHA7nzIBeJIA:XwME+UlHh5QcvP1BWMbmoA", "UBTConnect", "OnAfterFetch_GetLocalityHouseholds_Bookmarks", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VJDGznvnYk6epG8ybDqJzA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MYBnurIMOUmYeAH63TVvJQ", callContext.id) && OutSystemsDebugger.handleFunctionCall(function() {
                            return UBTConnect_UtilsController.default.getHasNewBookmarks$Action(callContext).out_HasNewBookmarksOut;
                        }, OS.DataTypes.DataTypes.Boolean, callContext.id))) {
                        // Foreach GetLocalityHouseholds.LocalityHouseholds
                        callContext.iterationContext.registerIterationStart(model.variables.getLocalityHouseholdsDataAct.localityHouseholdsOut);
                        return OS.Flow.tryFinally(function() {
                            var localityHouseholdsIterator = callContext.iterationContext.getIterator(model.variables.getLocalityHouseholdsDataAct.localityHouseholdsOut);
                            var localityHouseholdsIndex = 0;
                            return OS.Flow.whileAsync(function() {
                                return (OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:iouJda_U3EiyRa1c0LJGEA", callContext.id) && (localityHouseholdsIndex < model.variables.getLocalityHouseholdsDataAct.localityHouseholdsOut.length));
                            }, function() {
                                localityHouseholdsIterator.currentRowNumber = localityHouseholdsIndex;
                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Ds+wf5bMr0+fFRiX2tn+Ag", callContext.id);
                                // Execute Action: GetLocal_Bookmark_C2
                                model.flush();
                                return UBTConnectController.default.getLocal_Bookmark_C2$Action(UBTConnectModel.staticEntities.bookmarkCategory.household, model.variables.getLocalityHouseholdsDataAct.localityHouseholdsOut.getItem(localityHouseholdsIndex.valueOf()).householdIdAttr, callContext).then(function(value) {
                                    getLocal_Bookmark_C2Var.value = value;
                                }).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gQtaw0g1fk2KkQX2Hr8VWQ", callContext.id);
                                    // GetLocalityHouseholds.LocalityHouseholds.Current.IsBookmarked = GetLocal_Bookmark_C2.IsBookmarked
                                    model.variables.getLocalityHouseholdsDataAct.localityHouseholdsOut.getItem(localityHouseholdsIndex.valueOf()).isBookmarkedAttr = getLocal_Bookmark_C2Var.value.isBookmarkedOut;
                                }).then(function() {
                                    localityHouseholdsIndex++;
                                });
                            });
                        }, function() {
                            callContext.iterationContext.registerIterationEnd(model.variables.getLocalityHouseholdsDataAct.localityHouseholdsOut);
                        }).then(function() {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:EDTs6OYFX0K+v1Q7VEz+ew", callContext.id);
                        });
                    } else {
                        // Foreach GetLocalityHouseholds.LocalityHouseholds
                        callContext.iterationContext.registerIterationStart(model.variables.getLocalityHouseholdsDataAct.localityHouseholdsOut);
                        return OS.Flow.tryFinally(function() {
                            var localityHouseholdsIterator = callContext.iterationContext.getIterator(model.variables.getLocalityHouseholdsDataAct.localityHouseholdsOut);
                            var localityHouseholdsIndex = 0;
                            return OS.Flow.whileAsync(function() {
                                return (OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZaYqT8oGTUyvET41fql7FQ", callContext.id) && (localityHouseholdsIndex < model.variables.getLocalityHouseholdsDataAct.localityHouseholdsOut.length));
                            }, function() {
                                localityHouseholdsIterator.currentRowNumber = localityHouseholdsIndex;
                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Bvpu6Pc_g0+tKpS0D0uoaA", callContext.id);
                                // Execute Action: GetLocal_Bookmark
                                model.flush();
                                return UBTConnectController.default.getLocal_Bookmark$Action(UBTConnectModel.staticEntities.myBookmarks_ObjectType.contact, model.variables.getLocalityHouseholdsDataAct.localityHouseholdsOut.getItem(localityHouseholdsIndex.valueOf()).householdIdAttr, callContext).then(function(value) {
                                    getLocal_BookmarkVar.value = value;
                                }).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+uqfTUfRBkOqzfD99pjdLg", callContext.id);
                                    // GetLocalityHouseholds.LocalityHouseholds.Current.IsBookmarked = GetLocal_Bookmark.IsBookmarked
                                    model.variables.getLocalityHouseholdsDataAct.localityHouseholdsOut.getItem(localityHouseholdsIndex.valueOf()).isBookmarkedAttr = getLocal_BookmarkVar.value.isBookmarkedOut;
                                }).then(function() {
                                    localityHouseholdsIndex++;
                                });
                            });
                        }, function() {
                            callContext.iterationContext.registerIterationEnd(model.variables.getLocalityHouseholdsDataAct.localityHouseholdsOut);
                        }).then(function() {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mXQjAjzx4k6Y7XGg3AQiAA", callContext.id);
                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:oYgXZ4REJkWHA7nzIBeJIA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:oYgXZ4REJkWHA7nzIBeJIA", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._screenEvent_OnInitialize$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("ScreenEvent_OnInitialize");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:zEUrjnlPcE2yRXoAe7LoQQ:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.+udMzh+2pk+JLgDyZssqdA/ClientActions.zEUrjnlPcE2yRXoAe7LoQQ:3fjaOKoesbJebQxbcUQSVQ", "UBTConnect", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lDOx9kA7rUe79EBTK9ij9g", callContext.id);
                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:duXUGAGGfk2eNa0dKd_G3Q", callContext.id) && model.variables.getLocalityHouseholdsDataAct.localityHouseholdsOut.isEmpty)) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CETCfmzWHEipKdUk_G2onw", callContext.id);
                    // Execute Action: ListAppend
                    OS.SystemActions.listAppend(model.variables.getLocalityHouseholdsDataAct.localityHouseholdsOut, function() {
                        var rec = new Connect_Household_CSModel.UI_LocalityHouseholdRec();
                        rec.localityNameAttr = "Dumyy size";
                        rec.countryNameAttr = "Dumyy size";
                        return rec;
                    }(), callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1gPFUQbhe0uVOnNcMUTH0w", callContext.id);
                    // Execute Action: ListAppend2
                    OS.SystemActions.listAppend(model.variables.getLocalityHouseholdsDataAct.localityHouseholdsOut, function() {
                        var rec = new Connect_Household_CSModel.UI_LocalityHouseholdRec();
                        rec.localityNameAttr = "Dumyy size";
                        rec.countryNameAttr = "Dumyy size";
                        return rec;
                    }(), callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:R+kYW4pyr0ulfjX_P_pq1Q", callContext.id);
                    // Execute Action: ListAppend3
                    OS.SystemActions.listAppend(model.variables.getLocalityHouseholdsDataAct.localityHouseholdsOut, function() {
                        var rec = new Connect_Household_CSModel.UI_LocalityHouseholdRec();
                        rec.localityNameAttr = "Dumyy size";
                        rec.countryNameAttr = "Dumyy size";
                        return rec;
                    }(), callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TV83OuRUAUSqlZDmyy241Q", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TV83OuRUAUSqlZDmyy241Q", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:zEUrjnlPcE2yRXoAe7LoQQ", callContext.id);
            }

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
            var jSUtils_Element_Operations_GetElementByIdVar = new OS.DataTypes.VariableHolder();
            var isViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.jSUtils_Element_Operations_GetElementByIdVar = jSUtils_Element_Operations_GetElementByIdVar;
            varBag.isViewRestoredFromCacheJSResult = isViewRestoredFromCacheJSResult;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:tsOAwEpDA0er79vHEFC18w:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.+udMzh+2pk+JLgDyZssqdA/ClientActions.tsOAwEpDA0er79vHEFC18w:B0brgsJ8zil+KId5K5mL_w", "UBTConnect", "ScreenEvent_OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VW4SErA5z0en0ZSz0D9dxA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cvkyR4FGtEKMb6fmrnpl2Q", callContext.id);
                isViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(UBTConnect_Directory_Locality_Locality_Households_HouseholdList_mvc_controller_ScreenEvent_OnReady_IsViewRestoredFromCacheJS, "IsViewRestoredFromCache", "ScreenEvent_OnReady", {
                    IsRestoredFromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("UBTConnect.Directory_Locality.Locality_Households_HouseholdList.ScreenEvent_OnReady$isViewRestoredFromCacheJSResult"))();
                    jsNodeResult.isRestoredFromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsRestoredFromCache, OS.DataTypes.DataTypes.Boolean);
                    return jsNodeResult;
                }, {}, {});
                // Check if IsViewRestoredFromCache IsRestoredFromCache
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:umyU0EeEkU+Dtqb7PGTEyw", callContext.id) && (isViewRestoredFromCacheJSResult.value.isRestoredFromCacheOut === true))) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:E0ETGep0Jk2jaKtmge+xQg", callContext.id);
                        // Execute Action: JSUtils_Element_Operations_GetElementById
                        jSUtils_Element_Operations_GetElementByIdVar.value = UBTJavaScriptUtilsController.default.jSUtils_Element_Operations_GetElementById$Action(idService.getId("locality_Households"), callContext);

                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GAKp4s9g4EK4iLl7XmdcMw", callContext.id);
                        // Execute Action: ReactiveInstance_ForceUpdate
                        UBTJavaScriptUtilsController.default.reactiveInstance_ForceUpdate$Action(jSUtils_Element_Operations_GetElementByIdVar.value.elementOut, callContext);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:iwVtyUc0YUSmxhDSe7UMig", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vSsrqychSkK9b90S8u8NAQ", callContext.id);
                        // Execute Action: ForceListUpdateOnScrollEnd
                        UBTConnect_UtilsController.default.forceListUpdateOnScrollEnd$Action(idService.getId("locality_Households"), callContext);
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tYUYTfMNmkm30Hml2gYg+A", callContext.id);
                        // Refresh Query: GetLocalityHouseholds
                        var result = controller.getLocalityHouseholds$DataActRefresh(callContext);
                        model.flush();
                        return result.then(function() {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lFQebr_MXkGT5ybo0LwlCw", callContext.id);
                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:tsOAwEpDA0er79vHEFC18w", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:tsOAwEpDA0er79vHEFC18w", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect.Directory_Locality.Locality_Households_HouseholdList.ScreenEvent_OnReady$isViewRestoredFromCacheJSResult", [{
            name: "IsRestoredFromCache",
            attrName: "isRestoredFromCacheOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);

        Controller.prototype.household_CardEvent_OnClickHousehold$Action = function(householdIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._household_CardEvent_OnClickHousehold$Action, callContext, householdIdIn);

        };
        Controller.prototype.onAfterFetch_GetLocalityHouseholds_Bookmarks$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onAfterFetch_GetLocalityHouseholds_Bookmarks$Action, callContext);

        };
        Controller.prototype.screenEvent_OnInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnInitialize$Action, callContext);

        };
        Controller.prototype.screenEvent_OnReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._screenEvent_OnReady$Action, callContext);

        };
        Controller.prototype.event_NavigateToHouseholdDetails$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:BmZ1TBE6pkiXu8fkupJ8UQ:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ:FwAkjRuoCVCfL_Y3sNenPQ", "UBTConnect", "Directory_Locality", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:+udMzh+2pk+JLgDyZssqdA:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.+udMzh+2pk+JLgDyZssqdA:9xio3lpRZ5WzGwatLFVAAA", "UBTConnect", "Locality_Households_HouseholdList", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:+udMzh+2pk+JLgDyZssqdA", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:BmZ1TBE6pkiXu8fkupJ8UQ", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Locality/Locality_Households_HouseholdList On Initialize");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Locality/Locality_Households_HouseholdList On Ready");
                return controller.screenEvent_OnReady$Action(callContext);

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
            return UBTConnectController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});
define("UBTConnect.Directory_Locality.Locality_Households_HouseholdList.mvc$controller.ScreenEvent_OnReady.IsViewRestoredFromCacheJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
    };
});

define("UBTConnect.Directory_Locality.Locality_Households_HouseholdList.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "tKaO5tamGES+EKp1e+eSFA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.householdIdListVar;
            }
        },
        "DlG3Mn5cpEe+xRk4MRVhEw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.householdIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "VVOPXLoOPUujEN4VuvTh5Q": {
            getter: function(varBag, idService) {
                return varBag.getHasCarouselEnabledVar.value;
            }
        },
        "Ds+wf5bMr0+fFRiX2tn+Ag": {
            getter: function(varBag, idService) {
                return varBag.getLocal_Bookmark_C2Var.value;
            }
        },
        "Bvpu6Pc_g0+tKpS0D0uoaA": {
            getter: function(varBag, idService) {
                return varBag.getLocal_BookmarkVar.value;
            }
        },
        "E0ETGep0Jk2jaKtmge+xQg": {
            getter: function(varBag, idService) {
                return varBag.jSUtils_Element_Operations_GetElementByIdVar.value;
            }
        },
        "cvkyR4FGtEKMb6fmrnpl2Q": {
            getter: function(varBag, idService) {
                return varBag.isViewRestoredFromCacheJSResult.value;
            }
        },
        "KSv84sb4qU2eiFrV0FlTrg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_LocalityIdIn;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "KhPOk4+Im0mKCCwyt+2glQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.getLocalityHouseholdsDataAct;
            }
        },
        "Sv07UOiGxkmUG+1N_rparg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "iBclu31goUyts9+iBAGKfQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
                })(varBag.model, idService);
            }
        },
        "cf+SFfftkECzzsZ8SUueOQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("locality_Households"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});