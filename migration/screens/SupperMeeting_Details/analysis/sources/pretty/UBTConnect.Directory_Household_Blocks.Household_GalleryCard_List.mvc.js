define("UBTConnect.Directory_Household_Blocks.Household_GalleryCard_List.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Household_CS.model", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen_Section.mvc$model", "UBTConnect.Directory_CommonBlocks.Directory_EmptyState.mvc$model", "OutSystemsUI_2_23.Adaptive.Gallery.mvc$model", "UBTConnect.Directory_Household_Blocks.Household_GalleryCard.mvc$model", "UBTConnect.model$LookupSectionsRec", "UBTConnect.controller$Get_LookupSection", "Connect_Household_CS.model$UI_SubdivisionHouseholdRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnect.model$UI_SubdivisionHouseholdList"], function(OutSystems, UBTConnectModel, UBTConnectController, Connect_Household_CSModel, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_Section_mvcModel, UBTConnect_Directory_CommonBlocks_Directory_EmptyState_mvcModel, OutSystemsUI_2_23_Adaptive_Gallery_mvcModel, UBTConnect_Directory_Household_Blocks_Household_GalleryCard_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("ItemsPerRow", "itemsPerRowVar", "ItemsPerRow", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 2;
                }, false),
                this.attr("In_Household_GalleryCard_List", "in_Household_GalleryCard_ListIn", "In_Household_GalleryCard_List", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_SubdivisionHouseholdList());
                }, false, UBTConnectModel.UI_SubdivisionHouseholdList),
                this.attr("_in_Household_GalleryCard_ListInDataFetchStatus", "_in_Household_GalleryCard_ListInDataFetchStatus", "_in_Household_GalleryCard_ListInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_IsLoading", "in_IsLoadingIn", "In_IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_IsLoadingInDataFetchStatus", "_in_IsLoadingInDataFetchStatus", "_in_IsLoadingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
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
                    Model._hasValidationWidgetsValue = ((((UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets || UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_Section_mvcModel.hasValidationWidgets) || UBTConnect_Directory_CommonBlocks_Directory_EmptyState_mvcModel.hasValidationWidgets) || OutSystemsUI_2_23_Adaptive_Gallery_mvcModel.hasValidationWidgets) || UBTConnect_Directory_Household_Blocks_Household_GalleryCard_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_Household_GalleryCard_List" in inputs) {
                this.variables.in_Household_GalleryCard_ListIn = inputs.In_Household_GalleryCard_List;
                if ("_in_Household_GalleryCard_ListInDataFetchStatus" in inputs) {
                    this.variables._in_Household_GalleryCard_ListInDataFetchStatus = inputs._in_Household_GalleryCard_ListInDataFetchStatus;
                }

            }

            if ("In_IsLoading" in inputs) {
                this.variables.in_IsLoadingIn = inputs.In_IsLoading;
                if ("_in_IsLoadingInDataFetchStatus" in inputs) {
                    this.variables._in_IsLoadingInDataFetchStatus = inputs._in_IsLoadingInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Directory_Household_Blocks.Household_GalleryCard_List");
});
define("UBTConnect.Directory_Household_Blocks.Household_GalleryCard_List.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Household_CS.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Household_Blocks.Household_GalleryCard_List.mvc$model", "UBTConnect.Directory_Household_Blocks.Household_GalleryCard_List.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen_Section.mvc$view", "UBTConnect.Directory_CommonBlocks.Directory_EmptyState.mvc$view", "OutSystemsUI_2_23.Adaptive.Gallery.mvc$view", "UBTConnect.Directory_Household_Blocks.Household_GalleryCard.mvc$view", "UBTConnect.model$LookupSectionsRec", "UBTConnect.controller$Get_LookupSection", "Connect_Household_CS.model$UI_SubdivisionHouseholdRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnect.model$UI_SubdivisionHouseholdList"], function(OutSystems, UBTConnectModel, UBTConnectController, Connect_Household_CSModel, React, OSView, UBTConnect_Directory_Household_Blocks_Household_GalleryCard_List_mvc_model, UBTConnect_Directory_Household_Blocks_Household_GalleryCard_List_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, OSWidgets, UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_Section_mvc_view, UBTConnect_Directory_CommonBlocks_Directory_EmptyState_mvc_view, OutSystemsUI_2_23_Adaptive_Gallery_mvc_view, UBTConnect_Directory_Household_Blocks_Household_GalleryCard_mvc_view) {
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
        View.displayName = "Directory_Household_Blocks.Household_GalleryCard_List";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_Section_mvc_view, UBTConnect_Directory_CommonBlocks_Directory_EmptyState_mvc_view, OutSystemsUI_2_23_Adaptive_Gallery_mvc_view, UBTConnect_Directory_Household_Blocks_Household_GalleryCard_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Directory_Household_Blocks_Household_GalleryCard_List_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Directory_Household_Blocks_Household_GalleryCard_List_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                inputs: {
                    In_IsLoading: model.variables.in_IsLoadingIn,
                    _in_IsLoadingInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsLoadingInDataFetchStatus)
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
                    placeholder_LoadingSection: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_Section_mvc_view, {
                            inputs: {
                                In_Title: model.getCachedValue(idService.getId("fr7kSycYkkO9HJagivL40Q.In_Title"), function() {
                                    return OutSystemsDebugger.handleFunctionCall(function() {
                                        return UBTConnectController.default.get_LookupSection$Action(false, callContext).out_LookupOut;
                                    }, OS.DataTypes.DataTypes.Record, callContext.id).householdsAttr.pluralAttr;
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
                                placeholder_SectionContent: new PlaceholderContent(function() {
                                    return [$if(model.variables.in_Household_GalleryCard_ListIn.isEmpty, false, this, function() {
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
                                        return [React.createElement(OutSystemsUI_2_23_Adaptive_Gallery_mvc_view, {
                                            inputs: {
                                                RowItemsTablet: model.variables.itemsPerRowVar,
                                                RowItemsDesktop: model.variables.itemsPerRowVar,
                                                RowItemsPhone: model.variables.itemsPerRowVar
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
                                                alias: "4"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            placeholders: {
                                                content: new PlaceholderContent(function() {
                                                    return [React.createElement(OSWidgets.List, {
                                                        animateItems: false,
                                                        extendedProperties: {
                                                            "disable-virtualization": "True"
                                                        },
                                                        gridProperties: {
                                                            classes: "OSFillParent"
                                                        },
                                                        mode: /*Default*/ 0,
                                                        source: model.variables.in_Household_GalleryCard_ListIn,
                                                        style: "list list-group",
                                                        tag: "div",
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "4"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_Household_GalleryCard_ListInDataFetchStatus),
                                                        placeholders: {
                                                            content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                                return [React.createElement(UBTConnect_Directory_Household_Blocks_Household_GalleryCard_mvc_view, {
                                                                    inputs: {
                                                                        SubdivisionHousehold_GalleryCard: model.variables.in_Household_GalleryCard_ListIn.getCurrent(callContext.iterationContext),
                                                                        _subdivisionHousehold_GalleryCardInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_Household_GalleryCard_ListInDataFetchStatus),
                                                                        ItemsPerRow: model.variables.itemsPerRowVar
                                                                    },
                                                                    events: {
                                                                        _handleError: function(ex) {
                                                                            controller.handleError(ex);
                                                                        },
                                                                        event_OnClick$Action: function() {
                                                                            var eventHandlerContext = callContext.clone();
                                                                            return OS.Flow.tryFinally(function() {
                                                                                var varBag = {};
                                                                                controller.pushDebuggerContext(eventHandlerContext);

                                                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Household_Blocks/Household_GalleryCard Event_OnClick");
                                                                                controller.event_OnClick_Household_GalleryCard$Action(model.variables.in_Household_GalleryCard_ListIn.getCurrent(callContext.iterationContext).householdIdAttr, controller.callContext(eventHandlerContext));
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
                                                                        alias: "5"
                                                                    },
                                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                                    _dependencies: []
                                                                })];
                                                            }, callContext, idService, "1")
                                                        },
                                                        _dependencies: [asPrimitiveValue(model.variables.itemsPerRowVar), asPrimitiveValue(model.variables._in_Household_GalleryCard_ListInDataFetchStatus)]
                                                    })];
                                                })
                                            },
                                            _dependencies: [asPrimitiveValue(model.variables.itemsPerRowVar), asPrimitiveValue(model.variables._in_Household_GalleryCard_ListInDataFetchStatus), asPrimitiveValue(model.variables.in_Household_GalleryCard_ListIn)]
                                        })];
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.itemsPerRowVar), asPrimitiveValue(model.variables._in_Household_GalleryCard_ListInDataFetchStatus), asPrimitiveValue(model.variables.in_Household_GalleryCard_ListIn)]
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.itemsPerRowVar), asPrimitiveValue(model.variables._in_Household_GalleryCard_ListInDataFetchStatus), asPrimitiveValue(model.variables.in_Household_GalleryCard_ListIn)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect.Directory_Household_Blocks.Household_GalleryCard_List.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Household_CS.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Household_Blocks.Household_GalleryCard_List.mvc$debugger", "UBTConnect.model$LookupSectionsRec", "UBTConnect.controller$Get_LookupSection", "Connect_Household_CS.model$UI_SubdivisionHouseholdRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnect.model$UI_SubdivisionHouseholdList"], function(OutSystems, UBTConnectModel, UBTConnectController, Connect_Household_CSModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Household_Blocks_Household_GalleryCard_List_mvc_Debugger) {
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

        Controller.prototype.event_OnClick_Household_GalleryCard$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:AYMEjs49fE+urBzl2Bc2lQ:/NRWebFlows.AYMEjs49fE+urBzl2Bc2lQ:uCNLUKQMufTVXdBiwtGWyw", "UBTConnect", "Directory_Household_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:umqKcbPhzU+VGl45GuBPMA:/NRWebFlows.AYMEjs49fE+urBzl2Bc2lQ/NodesShownInESpaceTree.umqKcbPhzU+VGl45GuBPMA:T6g+UDHei4r_s9FovFgkCQ", "UBTConnect", "Household_GalleryCard_List", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:umqKcbPhzU+VGl45GuBPMA", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:AYMEjs49fE+urBzl2Bc2lQ", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = null;
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

define("UBTConnect.Directory_Household_Blocks.Household_GalleryCard_List.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "3_EE_JSAVE+_dzLj7dhtOQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.itemsPerRowVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "yubOLXXhYEuZPRNCkIzmEA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_Household_GalleryCard_ListIn;
            }
        },
        "PExh8VagfUGdOO1QDfNt7A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_IsLoadingIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "bAczEjcGuUu0_Ekt3PZ_Cw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
                })(varBag.model, idService);
            }
        },
        "W7aWO5sB20yJf5j5eqnylA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_SectionContent"));
                })(varBag.model, idService);
            }
        },
        "B2ibjtJ2XEKG568ZGFZv6Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Empty"));
                })(varBag.model, idService);
            }
        },
        "DngeKTFh60aaOrMHJ0h3UA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});