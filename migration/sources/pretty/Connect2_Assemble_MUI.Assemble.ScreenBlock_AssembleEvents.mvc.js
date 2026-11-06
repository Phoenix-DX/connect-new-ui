define("Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleEvents.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "APIDomain_Directory_IS.model", "MemoryClientCache.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.Layout.Layout.mvc$model", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$model", "Connect2_LegacyShared.Reusable.NewConnectContent.mvc$model", "Connect2_Assemble_MUI.Assemble.AssembleSummary_List.mvc$model", "APIDomain_Directory_IS.model$Users_Current_GETResponseRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_Assemble_MUI.referencesHealth$MemoryClientCache", "Connect2_LegacyShared.controller$GetCacheableUserInfo", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(OutSystems, Connect2_Assemble_MUIModel, APIDomain_Directory_ISModel, MemoryClientCacheModel, Connect2_LegacySharedController, Connect2_LegacyShared_Layout_Layout_mvcModel, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel, Connect2_LegacyShared_Reusable_NewConnectContent_mvcModel, Connect2_Assemble_MUI_Assemble_AssembleSummary_List_mvcModel) {
    var OS = OutSystems.Internal;

    var GetSubdivisionNameDataActRec = (function(_super) {
        __extends(GetSubdivisionNameDataActRec, _super);

        function GetSubdivisionNameDataActRec(defaults) {
            _super.apply(this, arguments);
        }
        GetSubdivisionNameDataActRec.attributesToDeclare = function() {
            return [
                this.attr("SelectedSubdivisionName", "selectedSubdivisionNameOut", "SelectedSubdivisionName", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, true)
            ].concat(_super.attributesToDeclare.call(this));
        };
        GetSubdivisionNameDataActRec.fromStructure = function(str) {
            return new GetSubdivisionNameDataActRec(new GetSubdivisionNameDataActRec.RecordClass({
                selectedSubdivisionNameOut: OS.DataTypes.ImmutableBase.getData(str)
            }));
        };
        GetSubdivisionNameDataActRec.init();
        return GetSubdivisionNameDataActRec;
    })(OS.Model.DataSourceRecord);

    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("SubdivisionName", "subdivisionNameVar", "SubdivisionName", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("SubdivisionId", "subdivisionIdIn", "SubdivisionId", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("_subdivisionIdInDataFetchStatus", "_subdivisionIdInDataFetchStatus", "_subdivisionIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("ShowBackNavigation", "showBackNavigationIn", "ShowBackNavigation", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_showBackNavigationInDataFetchStatus", "_showBackNavigationInDataFetchStatus", "_showBackNavigationInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("IsUserSubdivision", "isUserSubdivisionIn", "IsUserSubdivision", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return true;
                }, false),
                this.attr("_isUserSubdivisionInDataFetchStatus", "_isUserSubdivisionInDataFetchStatus", "_isUserSubdivisionInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("GetSubdivisionName", "getSubdivisionNameDataAct", "getSubdivisionNameDataAct", true, true, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new GetSubdivisionNameDataActRec());
                }, true, GetSubdivisionNameDataActRec)
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
                    Model._hasValidationWidgetsValue = (((Connect2_LegacyShared_Layout_Layout_mvcModel.hasValidationWidgets || Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel.hasValidationWidgets) || Connect2_LegacyShared_Reusable_NewConnectContent_mvcModel.hasValidationWidgets) || Connect2_Assemble_MUI_Assemble_AssembleSummary_List_mvcModel.hasValidationWidgets);
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

            if ("ShowBackNavigation" in inputs) {
                this.variables.showBackNavigationIn = inputs.ShowBackNavigation;
                if ("_showBackNavigationInDataFetchStatus" in inputs) {
                    this.variables._showBackNavigationInDataFetchStatus = inputs._showBackNavigationInDataFetchStatus;
                }

            }

            if ("IsUserSubdivision" in inputs) {
                this.variables.isUserSubdivisionIn = inputs.IsUserSubdivision;
                if ("_isUserSubdivisionInDataFetchStatus" in inputs) {
                    this.variables._isUserSubdivisionInDataFetchStatus = inputs._isUserSubdivisionInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Assemble.ScreenBlock_AssembleEvents");
});
define("Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleEvents.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "APIDomain_Directory_IS.model", "MemoryClientCache.model", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleEvents.mvc$model", "Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleEvents.mvc$controller", "Connect2_LegacyShared.Layout.Layout.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$view", "Connect2_LegacyShared.Reusable.NewConnectContent.mvc$view", "Connect2_Assemble_MUI.Assemble.AssembleSummary_List.mvc$view", "APIDomain_Directory_IS.model$Users_Current_GETResponseRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_Assemble_MUI.referencesHealth$MemoryClientCache", "Connect2_LegacyShared.controller$GetCacheableUserInfo", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, APIDomain_Directory_ISModel, MemoryClientCacheModel, Connect2_LegacySharedController, React, OSView, Connect2_Assemble_MUI_Assemble_ScreenBlock_AssembleEvents_mvc_model, Connect2_Assemble_MUI_Assemble_ScreenBlock_AssembleEvents_mvc_controller, Connect2_LegacyShared_Layout_Layout_mvc_view, OSWidgets, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_LegacyShared_Reusable_NewConnectContent_mvc_view, Connect2_Assemble_MUI_Assemble_AssembleSummary_List_mvc_view) {
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
        View.displayName = "Assemble.ScreenBlock_AssembleEvents";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Layout_Layout_mvc_view, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_LegacyShared_Reusable_NewConnectContent_mvc_view, Connect2_Assemble_MUI_Assemble_AssembleSummary_List_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return Connect2_Assemble_MUI_Assemble_ScreenBlock_AssembleEvents_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_Assemble_MUI_Assemble_ScreenBlock_AssembleEvents_mvc_controller;
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
                    name: "Layout",
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
                                MenuAction: model.getCachedValue(idService.getId("H0AvvoAjJE6T0jJ2nV2yRQ.MenuAction"), function() {
                                    return ((model.variables.showBackNavigationIn) ? (Connect2_Assemble_MUIModel.staticEntities.menuAction.back) : (Connect2_Assemble_MUIModel.staticEntities.menuAction.menu));
                                }, function() {
                                    return model.variables.showBackNavigationIn;
                                }),
                                _menuActionInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._showBackNavigationInDataFetchStatus)
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
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            visible: model.variables.isUserSubdivisionIn,
                            _idProps: {
                                service: idService,
                                name: "DIV_Assemble"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isUserSubdivisionInDataFetchStatus)
                        }, "Assemble"), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "text-ellipsis",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "DIV_SMName"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Expression, {
                            style: model.getCachedValue(idService.getId("trN8G9doX0u7WXZIRY5kzg.Style"), function() {
                                return ("text-align-center" + (((model.variables.showBackNavigationIn && !(model.variables.isUserSubdivisionIn))) ? ("") : (" font-size-0-75em")));
                            }, function() {
                                return model.variables.showBackNavigationIn;
                            }, function() {
                                return model.variables.isUserSubdivisionIn;
                            }),
                            value: model.variables.subdivisionNameVar,
                            _idProps: {
                                service: idService,
                                uuid: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._showBackNavigationInDataFetchStatus, model.variables._isUserSubdivisionInDataFetchStatus)
                        }))];
                    }),
                    headerRight: new PlaceholderContent(function() {
                        return [$if(model.variables.isUserSubdivisionIn, false, this, function() {
                            return [React.createElement(OSWidgets.Icon, {
                                extendedEvents: {
                                    onClick: function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/ScreenBlock_AssembleEvents/Icon onclick");
                                            controller.navigateTo_MyCalendarAssemble$Action(controller.callContext(eventHandlerContext));
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
                                    uuid: "6"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "line-height-1",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "7"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Link, {
                                enabled: true,
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);

                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/ScreenBlock_AssembleEvents/Link OnClick");
                                        controller.navigateTo_AssembleLocationFilters$Action(controller.callContext(eventHandlerContext));
                                    }, function() {
                                        controller.popDebuggerContext(eventHandlerContext);
                                    });

                                    ;
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "8"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Icon, {
                                icon: "flag",
                                iconSize: /*FontSize*/ 0,
                                style: "icon connect-icon-place font-size-1-5em",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "9"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })))];
                        }, function() {
                            return [];
                        })];
                    }),
                    headerContent: PlaceholderContent.Empty,
                    content: new PlaceholderContent(function() {
                        return [React.createElement(Connect2_LegacyShared_Reusable_NewConnectContent_mvc_view, {
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
                                uuid: "10",
                                alias: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(Connect2_Assemble_MUI_Assemble_AssembleSummary_List_mvc_view, {
                                        inputs: {
                                            SubdivisionId: model.variables.subdivisionIdIn,
                                            _subdivisionIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._subdivisionIdInDataFetchStatus)
                                        },
                                        events: {
                                            _handleError: function(ex) {
                                                controller.handleError(ex);
                                            },
                                            navigateTo_AssembleDetail$Action: function(seriesIdIn, eventIdIn, startIn) {
                                                var eventHandlerContext = callContext.clone();
                                                return OS.Flow.tryFinally(function() {
                                                    var varBag = {};
                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/AssembleSummary_List NavigateTo_AssembleDetail");
                                                    controller.navigateTo_AssembleDetail$Action(seriesIdIn, eventIdIn, startIn, controller.callContext(eventHandlerContext));
                                                }, function() {
                                                    controller.popDebuggerContext(eventHandlerContext);
                                                });

                                                ;
                                            },
                                            assyncException$Action: function(exceptionMessageIn) {
                                                var eventHandlerContext = callContext.clone();
                                                return OS.Flow.tryFinally(function() {
                                                    var varBag = {};
                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/AssembleSummary_List AssyncException");
                                                    controller.handler_AssyncException$Action(exceptionMessageIn, controller.callContext(eventHandlerContext));
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
                                            uuid: "11",
                                            alias: "4"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables._subdivisionIdInDataFetchStatus), asPrimitiveValue(model.variables.subdivisionIdIn)]
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
define("Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleEvents.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "APIDomain_Directory_IS.model", "MemoryClientCache.model", "Connect2_LegacyShared.controller", "Connect2_Assemble_MUI.languageResources", "Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleEvents.mvc$debugger", "Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleEvents.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", "APIDomain_Directory_IS.model$Users_Current_GETResponseRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS", "MemoryClientCache.model$MemoryCacheResultRec", "Connect2_Assemble_MUI.referencesHealth$MemoryClientCache", "Connect2_LegacyShared.controller$GetCacheableUserInfo", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared"], function(OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, APIDomain_Directory_ISModel, MemoryClientCacheModel, Connect2_LegacySharedController, Connect2_Assemble_MUILanguageResources, Connect2_Assemble_MUI_Assemble_ScreenBlock_AssembleEvents_mvc_Debugger, Connect2_Assemble_MUI_Assemble_ScreenBlock_AssembleEvents_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {};
            this.dataFetchDependenciesOriginal = {
                getSubdivisionName$DataActRefresh: -1
            };
            this.dataFetchDependentsGraph = {
                getSubdivisionName$DataActRefresh: []
            };
            this.shouldSendClientVarsToDataSources = false;
        }
        // Server Actions

        // Aggregates and Data Actions
        Controller.prototype.getSubdivisionName$DataActRefresh = function(callContext) {
            var model = this.model;
            var controller = this.controller;
            var callContext = controller.callContext(callContext);
            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:CkEKWHTFG0CT_MDHSQ+mBQ:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.9ApsSc3cC02TZYq6Y1QBsQ/DataActions.CkEKWHTFG0CT_MDHSQ+mBQ:qfA8zlxkhfA9JmJdTgv_kQ", "Connect2_Assemble_MUI", "GetSubdivisionName", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.setThreadStartName(callContext.id, "Assemble/ScreenBlock_AssembleEvents/GetSubdivisionName");
                return controller.callDataAction("DataActionGetSubdivisionName", "screenservices/Connect2_Assemble_MUI/Assemble/ScreenBlock_AssembleEvents/DataActionGetSubdivisionName", "ecXpzV6bfnO_Irfsv7i6Ng", function(b) {
                    model.variables.getSubdivisionNameDataAct.dataFetchStatusAttr = b;
                }, function(json) {
                    model.variables.getSubdivisionNameDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getSubdivisionNameDataAct.constructor));
                }, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function(json, headers) {
                    OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
                }, callContext, undefined, false).then(function() {
                    OutSystemsDebugger.setThreadStartName(callContext.id, "Assemble/ScreenBlock_AssembleEvents/GetSubdivisionName On After Fetch");
                    controller._getSubdivisionNameOnAfterFetch$Action(controller.callContext(callContext));

                });

            }, function() {
                OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:CkEKWHTFG0CT_MDHSQ+mBQ", callContext.id);
                controller.popDebuggerContext(callContext);

            });
        };

        Controller.prototype.dataFetchActionNames = ["getSubdivisionName$DataActRefresh"];
        // Client Actions
        Controller.prototype._getSubdivisionNameOnAfterFetch$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("GetSubdivisionNameOnAfterFetch");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:wa44FYUxtkizwc_jEjQGtQ:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.9ApsSc3cC02TZYq6Y1QBsQ/ClientActions.wa44FYUxtkizwc_jEjQGtQ:W5n4v5IEtE2sW7FdLWMKrw", "Connect2_Assemble_MUI", "GetSubdivisionNameOnAfterFetch", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:CyANDQ6KXk+mOfwsmM2efA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:heZsauqgIk6I6L6cq4Hmwg", callContext.id);
                // SubdivisionName = GetSubdivisionName.SelectedSubdivisionName
                model.variables.subdivisionNameVar = model.variables.getSubdivisionNameDataAct.selectedSubdivisionNameOut;
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:D8B7fBP8G0aUy+blqd7+HA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:wa44FYUxtkizwc_jEjQGtQ", callContext.id);
            }

        };
        Controller.prototype._handler_AssyncException$Action = function(exceptionMessageIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_AssyncException");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleEvents.Handler_AssyncException$vars"))());
            vars.value.exceptionMessageInLocal = exceptionMessageIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            try {
                OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:9iz6ZPATFka87N6Yy_nVOQ:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.9ApsSc3cC02TZYq6Y1QBsQ/ClientActions.9iz6ZPATFka87N6Yy_nVOQ:NcexaTvZwfw4Zagj6avXJQ", "Connect2_Assemble_MUI", "Handler_AssyncException", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:IxkqoM8bt0iYjKBs5m8Mwg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:izsL+Y6s2kue1kCnraCyVw", callContext.id);
                // Raise Error: UnknownException
                throw new OS.Exceptions.Exceptions.UserException("Connect2_Assemble_MUI.UnknownException", vars.value.exceptionMessageInLocal);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:9iz6ZPATFka87N6Yy_nVOQ", callContext.id);
            }

        };
        Controller.registerVariableGroupType("Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleEvents.Handler_AssyncException$vars", [{
            name: "ExceptionMessage",
            attrName: "exceptionMessageInLocal",
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
            var getCacheableUserInfoVar = new OS.DataTypes.VariableHolder();
            var wasCurrentViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getCacheableUserInfoVar = getCacheableUserInfoVar;
            varBag.wasCurrentViewRestoredFromCacheJSResult = wasCurrentViewRestoredFromCacheJSResult;
            OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:NigamcNIBU6xVsCL0mQIdw:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.9ApsSc3cC02TZYq6Y1QBsQ/ClientActions.NigamcNIBU6xVsCL0mQIdw:upVAKGJUcjO6Lf3wKg7k1Q", "Connect2_Assemble_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:iVJjgO5OXk23MMZa5LOdSQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:bOddNICrEEmT4u78DE9ovQ", callContext.id);
                wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_Assemble_MUI_Assemble_ScreenBlock_AssembleEvents_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnReady", {
                    FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleEvents.OnReady$wasCurrentViewRestoredFromCacheJSResult"))();
                    jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
                    return jsNodeResult;
                }, {}, {});
                // Check if WasCurrentViewRestoredFromCache FromCache
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:nPu+Da5biECSsJA2ppcvKQ", callContext.id) && (wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut === true))) {
                        OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:7xxgsrvYnkOOWLrm1ToTbw", callContext.id);
                    } else {
                        return OS.Flow.executeSequence(function() {
                            if ((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Uo23Z8BUuUSzcc0o4r82Ng", callContext.id) && model.variables.subdivisionIdIn.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier())))) {
                                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:mngdtaSxUkKz2fjIaxIvNw", callContext.id);
                                // Execute Action: GetCacheableUserInfo
                                model.flush();
                                return Connect2_LegacySharedController.default.getCacheableUserInfo$Action(callContext).then(function(value) {
                                    getCacheableUserInfoVar.value = value;
                                }).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:l52cClNreE2i6k_5qbenhQ", callContext.id);
                                    // SubdivisionName = GetCacheableUserInfo.UserInformation.Subdivision.Name
                                    model.variables.subdivisionNameVar = getCacheableUserInfoVar.value.userInformationOut.subdivisionAttr.nameAttr;
                                    OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:dfrS27fL5UmHhnsbyzTZyg", callContext.id);
                                });
                            } else {
                                OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:YmX2kvKWXE+FM6a2yPjATw", callContext.id);
                                // Refresh Query: GetSubdivisionName
                                var result = controller.getSubdivisionName$DataActRefresh(callContext);
                                model.flush();
                                return result.then(function() {
                                    OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:dfrS27fL5UmHhnsbyzTZyg", callContext.id);
                                });
                            }

                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:NigamcNIBU6xVsCL0mQIdw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:NigamcNIBU6xVsCL0mQIdw", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleEvents.OnReady$wasCurrentViewRestoredFromCacheJSResult", [{
            name: "FromCache",
            attrName: "fromCacheOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);

        Controller.prototype.getSubdivisionNameOnAfterFetch$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._getSubdivisionNameOnAfterFetch$Action, callContext);

        };
        Controller.prototype.handler_AssyncException$Action = function(exceptionMessageIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_AssyncException$Action, callContext, exceptionMessageIn);

        };
        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.navigateTo_AssembleLocationFilters$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.navigateTo_MyCalendarAssemble$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.navigateTo_AssembleDetail$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:n+VQoM4mfUCcC1ucCtOSYA:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA:9jQU9CfZCZWwIcnaUbLRAg", "Connect2_Assemble_MUI", "Assemble", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:9ApsSc3cC02TZYq6Y1QBsQ:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.9ApsSc3cC02TZYq6Y1QBsQ:1roNAf2Nv2z3Ybu62F7QoA", "Connect2_Assemble_MUI", "ScreenBlock_AssembleEvents", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:9ApsSc3cC02TZYq6Y1QBsQ", callContext.id);
            OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:n+VQoM4mfUCcC1ucCtOSYA", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Assemble/ScreenBlock_AssembleEvents On Ready");
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
define("Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleEvents.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
    };
});

define("Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleEvents.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "6_vlM3pGHEWUDyAIdG52Rw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.exceptionMessageInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "mngdtaSxUkKz2fjIaxIvNw": {
            getter: function(varBag, idService) {
                return varBag.getCacheableUserInfoVar.value;
            }
        },
        "bOddNICrEEmT4u78DE9ovQ": {
            getter: function(varBag, idService) {
                return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
            }
        },
        "EPEncgh_x0yuYR_NGGxqFQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.subdivisionNameVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "in_nOVImy0eQoHg1C6kNVA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.subdivisionIdIn;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "zLk8tf49Z0O7mPGuCji_lA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.showBackNavigationIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "YMs5VN0_4kKIzglQvuJ1Dw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isUserSubdivisionIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "CkEKWHTFG0CT_MDHSQ+mBQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.getSubdivisionNameDataAct;
            }
        },
        "_jWcuqPvTEKj695Tqvf6IA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Layout"));
                })(varBag.model, idService);
            }
        },
        "6PZfWlPeu0urWN47DU4QkA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu"));
                })(varBag.model, idService);
            }
        },
        "CpgqWI0B70iirEEQnRyKTQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Menu"));
                })(varBag.model, idService);
            }
        },
        "GdECTnM02UCxGjznD8Y2EA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderLeft"));
                })(varBag.model, idService);
            }
        },
        "1UeHa7vODECAAN4Wln_5vQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Title"));
                })(varBag.model, idService);
            }
        },
        "ipoq1h_z8UC3JPNA88i+FQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("DIV_Assemble"));
                })(varBag.model, idService);
            }
        },
        "N0nlWnAnNUq6XARTgqePog": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("DIV_SMName"));
                })(varBag.model, idService);
            }
        },
        "BCUI4NI8aUmMGE28N9yHqw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderRight"));
                })(varBag.model, idService);
            }
        },
        "JffMee_ZXk2zl2myU7mpCA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HeaderContent"));
                })(varBag.model, idService);
            }
        },
        "LFyqSX+Sr0eBKlgIK32zew": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "_cY63YShJEG6mWvM8LXWiQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "TYnFRMuNzEy1By7XU5Ux5Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BottomBar"));
                })(varBag.model, idService);
            }
        },
        "6H60j3F93UKs353KAnykFw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BottomBar"));
                })(varBag.model, idService);
            }
        },
        "bJcFs23FDkiJiU7cn4u+Jg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements"));
                })(varBag.model, idService);
            }
        },
        "HaDreQdpcUid6cIp3sfpug": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CommonUI_Elements"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});