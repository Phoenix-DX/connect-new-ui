define("Connect2_MyBookmarks_MUI.MyBookmarksFlow.BookmarkNoteDelete.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc$model"], function(OutSystems, Connect2_MyBookmarks_MUIModel, NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("bookmarkId", "bookmarkIdIn", "bookmarkId", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("_bookmarkIdInDataFetchStatus", "_bookmarkIdInDataFetchStatus", "_bookmarkIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvcModel.hasValidationWidgets;
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("bookmarkId" in inputs) {
                this.variables.bookmarkIdIn = inputs.bookmarkId;
                if ("_bookmarkIdInDataFetchStatus" in inputs) {
                    this.variables._bookmarkIdInDataFetchStatus = inputs._bookmarkIdInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "MyBookmarksFlow.BookmarkNoteDelete");
});
define("Connect2_MyBookmarks_MUI.MyBookmarksFlow.BookmarkNoteDelete.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.controller", "react", "OutSystems/ReactView/Main", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.BookmarkNoteDelete.mvc$model", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.BookmarkNoteDelete.mvc$controller", "OutSystems/ReactWidgets/Main", "NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc$view"], function(OutSystems, Connect2_MyBookmarks_MUIModel, Connect2_MyBookmarks_MUIController, React, OSView, Connect2_MyBookmarks_MUI_MyBookmarksFlow_BookmarkNoteDelete_mvc_model, Connect2_MyBookmarks_MUI_MyBookmarksFlow_BookmarkNoteDelete_mvc_controller, OSWidgets, NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_view) {
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
        View.displayName = "MyBookmarksFlow.BookmarkNoteDelete";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return Connect2_MyBookmarks_MUI_MyBookmarksFlow_BookmarkNoteDelete_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_MyBookmarks_MUI_MyBookmarksFlow_BookmarkNoteDelete_mvc_controller;
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
                style: "bookmark-note-action-dialog backwards-compatibility",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_view, {
                inputs: {},
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    confirmed$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConfirmationDialogs/ActionConfirmationDialog Confirmed");
                            controller.deleteNoteConfirm$Action(model.variables.bookmarkIdIn, controller.callContext(eventHandlerContext));
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
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    dialogHeader: new PlaceholderContent(function() {
                        return ["Delete note"];
                    }),
                    dialogBody: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "Are you sure you would like to delete this note?")];
                    }),
                    buttonLabel_Confirm: new PlaceholderContent(function() {
                        return ["YES"];
                    }),
                    buttonLabel_Dismiss: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "NO")];
                    })
                },
                _dependencies: []
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("Connect2_MyBookmarks_MUI.MyBookmarksFlow.BookmarkNoteDelete.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.controller", "Connect2_MyBookmarks_MUI.languageResources", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.BookmarkNoteDelete.mvc$debugger"], function(OutSystems, Connect2_MyBookmarks_MUIModel, Connect2_MyBookmarks_MUIController, Connect2_MyBookmarks_MUILanguageResources, Connect2_MyBookmarks_MUI_MyBookmarksFlow_BookmarkNoteDelete_mvc_Debugger) {
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

        Controller.prototype.deleteNoteConfirm$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:CBvOGFy8j0+xPUeAWREtQw:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw:9WxoUPdIIKPcyGMtXvfZqg", "Connect2_MyBookmarks_MUI", "MyBookmarksFlow", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:9HckrxOxBkeP71OiM+uhRQ:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.9HckrxOxBkeP71OiM+uhRQ:vmW1EwbKxtd742z+x+XuWQ", "Connect2_MyBookmarks_MUI", "BookmarkNoteDelete", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:9HckrxOxBkeP71OiM+uhRQ", callContext.id);
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

define("Connect2_MyBookmarks_MUI.MyBookmarksFlow.BookmarkNoteDelete.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "qRnR_Xjnp0KAWXX9k48Maw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.bookmarkIdIn;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "he9+KgWHkE+WpBs2pb8ckw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("DialogHeader"));
                })(varBag.model, idService);
            }
        },
        "cszjJaYkJUawSALKKtZHeA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("DialogBody"));
                })(varBag.model, idService);
            }
        },
        "C3MztRnl3UqSsMiW6e0XTg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ButtonLabel_Confirm"));
                })(varBag.model, idService);
            }
        },
        "aP7cLKq+R0qmVas1WzyHGw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ButtonLabel_Dismiss"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});