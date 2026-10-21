define("Connect2_MyBookmarks_MUI.MyBookmarksFlow.MyBookmarks_Card.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model"], function(OutSystems, Connect2_MyBookmarks_MUIModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("ObjectGroup", "objectGroupIn", "ObjectGroup", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_objectGroupInDataFetchStatus", "_objectGroupInDataFetchStatus", "_objectGroupInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("ShowViewAll", "showViewAllIn", "ShowViewAll", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_showViewAllInDataFetchStatus", "_showViewAllInDataFetchStatus", "_showViewAllInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
        Object.defineProperty(Model, "hasValidationWidgets", {
            enumerable: true,
            configurable: true,
            get: function() {
                return false;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("ObjectGroup" in inputs) {
                this.variables.objectGroupIn = inputs.ObjectGroup;
                if ("_objectGroupInDataFetchStatus" in inputs) {
                    this.variables._objectGroupInDataFetchStatus = inputs._objectGroupInDataFetchStatus;
                }

            }

            if ("ShowViewAll" in inputs) {
                this.variables.showViewAllIn = inputs.ShowViewAll;
                if ("_showViewAllInDataFetchStatus" in inputs) {
                    this.variables._showViewAllInDataFetchStatus = inputs._showViewAllInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "MyBookmarksFlow.MyBookmarks_Card");
});
define("Connect2_MyBookmarks_MUI.MyBookmarksFlow.MyBookmarks_Card.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.controller", "react", "OutSystems/ReactView/Main", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.MyBookmarks_Card.mvc$model", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.MyBookmarks_Card.mvc$controller", "OutSystems/ReactWidgets/Main"], function(OutSystems, Connect2_MyBookmarks_MUIModel, Connect2_MyBookmarks_MUIController, React, OSView, Connect2_MyBookmarks_MUI_MyBookmarksFlow_MyBookmarks_Card_mvc_model, Connect2_MyBookmarks_MUI_MyBookmarksFlow_MyBookmarks_Card_mvc_controller, OSWidgets) {
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
        View.displayName = "MyBookmarksFlow.MyBookmarks_Card";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return Connect2_MyBookmarks_MUI_MyBookmarksFlow_MyBookmarks_Card_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_MyBookmarks_MUI_MyBookmarksFlow_MyBookmarks_Card_mvc_controller;
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
                style: "bookmark-card",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "BookmarkCard"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "bookmark-card-title",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "BookmarkCard_Title"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Expression, {
                extendedEvents: {
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyBookmarksFlow/MyBookmarks_Card/Expression onclick");
                            controller.navigateTo_ViewAll$Action(model.variables.objectGroupIn, controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    }
                },
                gridProperties: {
                    marginLeft: "Adaptive"
                },
                style: "bold",
                value: ("My " + model.variables.objectGroupIn),
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._objectGroupInDataFetchStatus)
            }), $if(model.variables.showViewAllIn, false, this, function() {
                return [React.createElement(OSWidgets.Expression, {
                    extendedEvents: {
                        onClick: function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyBookmarksFlow/MyBookmarks_Card/Expression onclick");
                                controller.navigateTo_ViewAll$Action(model.variables.objectGroupIn, controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });

                            ;
                        }
                    },
                    gridProperties: {
                        marginLeft: "Adaptive"
                    },
                    style: "text-primary-color text-underline bold",
                    value: "View All",
                    _idProps: {
                        service: idService,
                        uuid: "3"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            }, function() {
                return [];
            })), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.placeholder_BookmarksContent,
                style: "bookmark-card-placeholder",
                _idProps: {
                    service: idService,
                    name: "Placeholder_BookmarksContent"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "bookmark-card-bottom",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "BookmarkCard_Bottom"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, "Recent")));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("Connect2_MyBookmarks_MUI.MyBookmarksFlow.MyBookmarks_Card.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.controller", "Connect2_MyBookmarks_MUI.languageResources", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.MyBookmarks_Card.mvc$debugger"], function(OutSystems, Connect2_MyBookmarks_MUIModel, Connect2_MyBookmarks_MUIController, Connect2_MyBookmarks_MUILanguageResources, Connect2_MyBookmarks_MUI_MyBookmarksFlow_MyBookmarks_Card_mvc_Debugger) {
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

        Controller.prototype.navigateTo_ViewAll$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:CBvOGFy8j0+xPUeAWREtQw:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw:9WxoUPdIIKPcyGMtXvfZqg", "Connect2_MyBookmarks_MUI", "MyBookmarksFlow", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:WfE_HaQ_g0mP_TA9bUlPrA:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.WfE_HaQ_g0mP_TA9bUlPrA:mPvT3_IkQSv+Ao7Fn0cwWQ", "Connect2_MyBookmarks_MUI", "MyBookmarks_Card", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:WfE_HaQ_g0mP_TA9bUlPrA", callContext.id);
            OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:CBvOGFy8j0+xPUeAWREtQw", callContext.id);
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
            return Connect2_MyBookmarks_MUIController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, Connect2_MyBookmarks_MUILanguageResources);
});

define("Connect2_MyBookmarks_MUI.MyBookmarksFlow.MyBookmarks_Card.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "CLbOMcTc40iNz33ai4oyfg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.objectGroupIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "7vWl6yA9CUSPPHGWriqcIw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.showViewAllIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "a7ulcgDtgEKlWaXRumkWkQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BookmarkCard"));
                })(varBag.model, idService);
            }
        },
        "+P0mWeqBx0eJmhkFmY51dg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BookmarkCard_Title"));
                })(varBag.model, idService);
            }
        },
        "2deo7yMyY0ScxAd25nmSVQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsShowViewAll"));
                })(varBag.model, idService);
            }
        },
        "Fo9VHwq1Mk+uLc0hqY2IyA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_BookmarksContent"));
                })(varBag.model, idService);
            }
        },
        "vrPbjSqDWkSn+GmsQLJIHg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("BookmarkCard_Bottom"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});