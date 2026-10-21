define("UBTConnect.Home.FeedBlock_CommunityPopulation.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "Connect_Geography_CS.model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "Connect_Geography_CS.model$UI_MembersStatisticsRec", "UBTConnect.referencesHealth$Connect_Geography_CS"], function(OutSystems, UBTConnectModel, UBTConnectLibraryModel, Connect_Geography_CSModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel) {
    var OS = OutSystems.Internal;

    var FetchCountDataActRec = (function(_super) {
        __extends(FetchCountDataActRec, _super);

        function FetchCountDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        FetchCountDataActRec.attributesToDeclare = function() {
            return [
                this.attr("UI_MembersStatistics", "uI_MembersStatisticsOut", "UI_MembersStatistics", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect_Geography_CSModel.UI_MembersStatisticsRec());
                }, true, Connect_Geography_CSModel.UI_MembersStatisticsRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        FetchCountDataActRec.fromStructure = function(str) {
            return new FetchCountDataActRec(new FetchCountDataActRec.RecordClass({
                uI_MembersStatisticsOut: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        FetchCountDataActRec.init();
        return FetchCountDataActRec;
    })(OS.Model.DataSourceRecord);

    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("FetchCount", "fetchCountDataAct", "fetchCountDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new FetchCountDataActRec());
                }, true, FetchCountDataActRec)
            ].concat(_super.attributesToDeclare.call(this));
        };
        VariablesRecord.fromStructure = function(str) {
            return new VariablesRecord(new VariablesRecord.RecordClass({
                fetchCountDataAct: OS.DataTypes.ImmutableBase.getData(str)
            }));
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
                    Model._hasValidationWidgetsValue = ((UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {};
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Home.FeedBlock_CommunityPopulation");
});
define("UBTConnect.Home.FeedBlock_CommunityPopulation.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "Connect_Geography_CS.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Home.FeedBlock_CommunityPopulation.mvc$model", "UBTConnect.Home.FeedBlock_CommunityPopulation.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "Connect_Geography_CS.model$UI_MembersStatisticsRec", "UBTConnect.referencesHealth$Connect_Geography_CS"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, Connect_Geography_CSModel, React, OSView, UBTConnect_Home_FeedBlock_CommunityPopulation_mvc_model, UBTConnect_Home_FeedBlock_CommunityPopulation_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view) {
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
        View.displayName = "Home.FeedBlock_CommunityPopulation";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Home_FeedBlock_CommunityPopulation_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Home_FeedBlock_CommunityPopulation_mvc_controller;
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
                    Options: model.getCachedValue(idService.getId("JLozr+OGM0qnsEduLjXKtQ.Options"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                            rec.backgroundAttr = function() {
                                var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.primaryGradientRadial;
                                return rec;
                            }();
                            rec.paddingSizeAttr = function() {
                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                                rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
                                return rec;
                            }();
                            rec.borderOptionsAttr = function() {
                                var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                rec.radiusAttr = function() {
                                    var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
                                    rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Shape.medium;
                                    return rec;
                                }();
                                return rec;
                            }();
                            rec.isSkeletonElementAttr = true;
                            return rec;
                        }();
                    })
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    clicked$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "BasePatterns/CustomContainer Clicked");
                            controller.onClick_Block$Action(controller.callContext(eventHandlerContext));
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
                    content: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                            inputs: {
                                In_Text: "Community Population",
                                In_TextOptions: model.getCachedValue(idService.getId("nyvpsB9EpUWllWMyhq8ifA.In_TextOptions"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                        rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
                                        rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.doubleExtraSmall;
                                        rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
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
                            _dependencies: []
                        }), React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                            inputs: {
                                In_IsLoading: (!(model.variables.fetchCountDataAct.isDataFetchedAttr) && !(model.variables.fetchCountDataAct.hasFetchErrorAttr))
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
                            placeholders: {
                                placeholder_LoadingSection: new PlaceholderContent(function() {
                                    return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                        inputs: {
                                            In_TextOptions: model.getCachedValue(idService.getId("EpCo1TYnHEeXgTxYXY3THA.In_TextOptions"), function() {
                                                return function() {
                                                    var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                    rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
                                                    rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.heading2;
                                                    rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
                                                    return rec;
                                                }();
                                            }),
                                            In_Text: model.getCachedValue(idService.getId("EpCo1TYnHEeXgTxYXY3THA.In_Text"), function() {
                                                return (((!(model.variables.fetchCountDataAct.isDataFetchedAttr) && !(model.variables.fetchCountDataAct.hasFetchErrorAttr))) ? ("00000") : (OS.BuiltinFunctions.formatDecimal(OS.BuiltinFunctions.longIntegerToDecimal(model.variables.fetchCountDataAct.uI_MembersStatisticsOut.totalNumberOfMembersAttr), 0, "", ",")));
                                            }, function() {
                                                return model.variables.fetchCountDataAct.isDataFetchedAttr;
                                            }, function() {
                                                return model.variables.fetchCountDataAct.hasFetchErrorAttr;
                                            }, function() {
                                                return model.variables.fetchCountDataAct.uI_MembersStatisticsOut.totalNumberOfMembersAttr;
                                            }),
                                            _in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchCountDataAct.dataFetchStatusAttr)
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
                                        _dependencies: []
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.fetchCountDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.fetchCountDataAct.uI_MembersStatisticsOut.totalNumberOfMembersAttr), asPrimitiveValue(model.variables.fetchCountDataAct.hasFetchErrorAttr), asPrimitiveValue(model.variables.fetchCountDataAct.isDataFetchedAttr)]
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.fetchCountDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.fetchCountDataAct.uI_MembersStatisticsOut.totalNumberOfMembersAttr), asPrimitiveValue(model.variables.fetchCountDataAct.hasFetchErrorAttr), asPrimitiveValue(model.variables.fetchCountDataAct.isDataFetchedAttr)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect.Home.FeedBlock_CommunityPopulation.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "Connect_Geography_CS.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Home.FeedBlock_CommunityPopulation.mvc$debugger", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "Connect_Geography_CS.model$UI_MembersStatisticsRec", "UBTConnect.referencesHealth$Connect_Geography_CS"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, Connect_Geography_CSModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Home_FeedBlock_CommunityPopulation_mvc_Debugger) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {};
            this.dataFetchDependenciesOriginal = {
                fetchCount$DataActRefresh: 0
            };
            this.dataFetchDependentsGraph = {
                fetchCount$DataActRefresh: []
            };
            this.shouldSendClientVarsToDataSources = false;
        }
        // Server Actions

        // Aggregates and Data Actions
        Controller.prototype.fetchCount$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:1NxTNcNbzk2+3AiYz6EB3Q:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.ZIHMhvtLBkGkx_szvoUWXw/DataActions.1NxTNcNbzk2+3AiYz6EB3Q:+muzj23kZ3uqUoK89D3k3g", "UBTConnect", "FetchCount", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "Home/FeedBlock_CommunityPopulation/FetchCount");
                return controller.callDataAction("DataActionFetchCount", "screenservices/UBTConnect/Home/FeedBlock_CommunityPopulation/DataActionFetchCount", "FWdYMlN_ey0SaOVEMGAFew", function(b) {
                    model.variables.fetchCountDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.fetchCountDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.fetchCountDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false);

            }, function() {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:1NxTNcNbzk2+3AiYz6EB3Q", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };

        Controller.prototype.dataFetchActionNames = ["fetchCount$DataActRefresh"];
        // Client Actions
        Controller.prototype._onClick_Block$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_Block");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:ujoXkjisXEu1jT1CMZY5CQ:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.ZIHMhvtLBkGkx_szvoUWXw/ClientActions.ujoXkjisXEu1jT1CMZY5CQ:4nUFBedsL8P8HveAM5l4xQ", "UBTConnect", "OnClick_Block", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:urMGskAp2Eam7Xr91_uITA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:EiM2QuO6TU+b+iDkEZJ6Fg", callContext.id);
                // Destination: /UBTConnect/Updates_SingleList
                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/Updates_SingleList", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:ujoXkjisXEu1jT1CMZY5CQ", callContext.id);
            }

        };

        Controller.prototype.onClick_Block$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_Block$Action, callContext);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:9o650LFgPEKO3jEzGxssNw:/NRWebFlows.9o650LFgPEKO3jEzGxssNw:9fwzOG+yQfV_SOU4v_xngw", "UBTConnect", "Home", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:ZIHMhvtLBkGkx_szvoUWXw:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.ZIHMhvtLBkGkx_szvoUWXw:fUFr4_XUyvtOIu8qMdKU0g", "UBTConnect", "FeedBlock_CommunityPopulation", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:ZIHMhvtLBkGkx_szvoUWXw", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:9o650LFgPEKO3jEzGxssNw", callContext.id);
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

define("UBTConnect.Home.FeedBlock_CommunityPopulation.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "1NxTNcNbzk2+3AiYz6EB3Q": {
            getter: function(varBag, idService) {
                return varBag.model.variables.fetchCountDataAct;
            }
        },
        "zW6qbGbnB0SyalkAm1RMmA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "H0w+JP2vo0i2lUoPjhjAIA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});