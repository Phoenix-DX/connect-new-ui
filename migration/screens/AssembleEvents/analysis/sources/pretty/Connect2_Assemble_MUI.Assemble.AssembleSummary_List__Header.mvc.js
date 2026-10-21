define("Connect2_Assemble_MUI.Assemble.AssembleSummary_List__Header.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_LegacyShared.NewConnect_Skeleton.NC_Card_Item_Text__Skeleton.mvc$model"], function(OutSystems, Connect2_Assemble_MUIModel, Connect2_LegacyShared_NewConnect_Skeleton_NC_Card_Item_Text__Skeleton_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("FilterLabel", "filterLabelIn", "FilterLabel", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_filterLabelInDataFetchStatus", "_filterLabelInDataFetchStatus", "_filterLabelInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("ListHeaderLabel", "listHeaderLabelIn", "ListHeaderLabel", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_listHeaderLabelInDataFetchStatus", "_listHeaderLabelInDataFetchStatus", "_listHeaderLabelInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("ShowClear", "showClearIn", "ShowClear", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_showClearInDataFetchStatus", "_showClearInDataFetchStatus", "_showClearInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("IsLoading", "isLoadingIn", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = Connect2_LegacyShared_NewConnect_Skeleton_NC_Card_Item_Text__Skeleton_mvcModel.hasValidationWidgets;
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("FilterLabel" in inputs) {
                this.variables.filterLabelIn = inputs.FilterLabel;
                if ("_filterLabelInDataFetchStatus" in inputs) {
                    this.variables._filterLabelInDataFetchStatus = inputs._filterLabelInDataFetchStatus;
                }

            }

            if ("ListHeaderLabel" in inputs) {
                this.variables.listHeaderLabelIn = inputs.ListHeaderLabel;
                if ("_listHeaderLabelInDataFetchStatus" in inputs) {
                    this.variables._listHeaderLabelInDataFetchStatus = inputs._listHeaderLabelInDataFetchStatus;
                }

            }

            if ("ShowClear" in inputs) {
                this.variables.showClearIn = inputs.ShowClear;
                if ("_showClearInDataFetchStatus" in inputs) {
                    this.variables._showClearInDataFetchStatus = inputs._showClearInDataFetchStatus;
                }

            }

            if ("IsLoading" in inputs) {
                this.variables.isLoadingIn = inputs.IsLoading;
                if ("_isLoadingInDataFetchStatus" in inputs) {
                    this.variables._isLoadingInDataFetchStatus = inputs._isLoadingInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Assemble.AssembleSummary_List__Header");
});
define("Connect2_Assemble_MUI.Assemble.AssembleSummary_List__Header.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "react", "OutSystems/ReactView/Main", "Connect2_Assemble_MUI.Assemble.AssembleSummary_List__Header.mvc$model", "Connect2_Assemble_MUI.Assemble.AssembleSummary_List__Header.mvc$controller", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.NewConnect_Skeleton.NC_Card_Item_Text__Skeleton.mvc$view"], function(OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, React, OSView, Connect2_Assemble_MUI_Assemble_AssembleSummary_List__Header_mvc_model, Connect2_Assemble_MUI_Assemble_AssembleSummary_List__Header_mvc_controller, OSWidgets, Connect2_LegacyShared_NewConnect_Skeleton_NC_Card_Item_Text__Skeleton_mvc_view) {
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
        View.displayName = "Assemble.AssembleSummary_List__Header";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_NewConnect_Skeleton_NC_Card_Item_Text__Skeleton_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return Connect2_Assemble_MUI_Assemble_AssembleSummary_List__Header_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_Assemble_MUI_Assemble_AssembleSummary_List__Header_mvc_controller;
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
                extendedEvents: {
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/AssembleSummary_List__Header/DIV_Filter onclick");
                            controller.onClick$Action(controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    }
                },
                style: "padding-x-base assemble-list-header__filter text-primary bold display-flex justify-content-space-between align-items-center",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "DIV_Filter"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                gridProperties: {
                    classes: "OSInline"
                },
                style: "full-height display-flex align-items-center",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Expression, {
                style: "white-space-nowrap",
                value: model.variables.filterLabelIn,
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._filterLabelInDataFetchStatus)
            }), React.createElement(OSWidgets.Icon, {
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                icon: "caret-down",
                iconSize: /*FontSize*/ 0,
                style: "icon text-neutral-8",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: true,
                visible: model.variables.showClearIn,
                _idProps: {
                    service: idService,
                    uuid: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._showClearInDataFetchStatus)
            }, React.createElement(OSWidgets.Link, {
                enabled: true,
                onClick: function() {
                    var eventHandlerContext = callContext.clone();
                    return OS.Flow.tryFinally(function() {
                        var varBag = {};
                        controller.pushDebuggerContext(eventHandlerContext);

                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/AssembleSummary_List__Header/Link OnClick");
                        controller.clear$Action(controller.callContext(eventHandlerContext));
                    }, function() {
                        controller.popDebuggerContext(eventHandlerContext);
                    });

                    ;
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "5"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "text-align: right;"
                },
                gridProperties: {
                    classes: "OSInline"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "6"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, "Clear")))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: true,
                style: "padding-x-base assemble-list-header__date padding-y-s margin-top-s font-semi-bold font-size-s",
                visible: (((model.variables.listHeaderLabelIn) !== ("")) || model.variables.isLoadingIn),
                _idProps: {
                    service: idService,
                    name: "DIV_ListHeader"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._listHeaderLabelInDataFetchStatus, model.variables._isLoadingInDataFetchStatus)
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "8"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $if(model.variables.isLoadingIn, false, this, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    gridProperties: {
                        classes: "ThemeGrid_Width6"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "9"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(Connect2_LegacyShared_NewConnect_Skeleton_NC_Card_Item_Text__Skeleton_mvc_view, {
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
                        alias: "1"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    _dependencies: []
                }))];
            }, function() {
                return [React.createElement(OSWidgets.Expression, {
                    value: model.variables.listHeaderLabelIn,
                    _idProps: {
                        service: idService,
                        uuid: "11"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._listHeaderLabelInDataFetchStatus)
                })];
            }))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("Connect2_Assemble_MUI.Assemble.AssembleSummary_List__Header.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "Connect2_Assemble_MUI.languageResources", "Connect2_Assemble_MUI.Assemble.AssembleSummary_List__Header.mvc$debugger"], function(OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, Connect2_Assemble_MUILanguageResources, Connect2_Assemble_MUI_Assemble_AssembleSummary_List__Header_mvc_Debugger) {
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

        Controller.prototype.onClick$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.clear$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:n+VQoM4mfUCcC1ucCtOSYA:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA:9jQU9CfZCZWwIcnaUbLRAg", "Connect2_Assemble_MUI", "Assemble", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:l_lRHAuGK0inzMPRnLKTAQ:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.l_lRHAuGK0inzMPRnLKTAQ:q5scVOoVj8QJWGQ_D3jSHQ", "Connect2_Assemble_MUI", "AssembleSummary_List__Header", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:l_lRHAuGK0inzMPRnLKTAQ", callContext.id);
            OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:n+VQoM4mfUCcC1ucCtOSYA", callContext.id);
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
            return Connect2_Assemble_MUIController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, Connect2_Assemble_MUILanguageResources);
});

define("Connect2_Assemble_MUI.Assemble.AssembleSummary_List__Header.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "VZzeSFc5BUuok20zEL346w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.filterLabelIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "8zQwCIZNMkamjS_8TGvEfQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.listHeaderLabelIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "bs+xNSm9mE+M+yc9lgyiHg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.showClearIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "aVBnai6h8ESmUkZGAhP3BQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isLoadingIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "2ZR5fa2f_U+IZdalWqsQvQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("DIV_Filter"));
                })(varBag.model, idService);
            }
        },
        "dpAsbmPaL0CokhsZK6BffQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("DIV_ListHeader"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});