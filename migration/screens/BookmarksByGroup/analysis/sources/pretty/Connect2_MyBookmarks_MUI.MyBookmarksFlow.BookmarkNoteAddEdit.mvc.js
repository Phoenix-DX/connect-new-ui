define("Connect2_MyBookmarks_MUI.MyBookmarksFlow.BookmarkNoteAddEdit.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_LegacyShared.model", "Connect2_LegacyShared.model$BookmarkNoteRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function(OutSystems, Connect2_MyBookmarks_MUIModel, Connect2_LegacySharedModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("In_Note", "in_NoteVar", "In_Note", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("BookmarkNote", "bookmarkNoteIn", "BookmarkNote", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.BookmarkNoteRec());
                }, false, Connect2_LegacySharedModel.BookmarkNoteRec),
                this.attr("_bookmarkNoteInDataFetchStatus", "_bookmarkNoteInDataFetchStatus", "_bookmarkNoteInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            return {
                TextArea_Note: OS.Model.ValidationWidgetRecord
            };
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
                return true;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("BookmarkNote" in inputs) {
                this.variables.bookmarkNoteIn = inputs.BookmarkNote;
                if ("_bookmarkNoteInDataFetchStatus" in inputs) {
                    this.variables._bookmarkNoteInDataFetchStatus = inputs._bookmarkNoteInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "MyBookmarksFlow.BookmarkNoteAddEdit");
});
define("Connect2_MyBookmarks_MUI.MyBookmarksFlow.BookmarkNoteAddEdit.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.controller", "Connect2_LegacyShared.model", "react", "OutSystems/ReactView/Main", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.BookmarkNoteAddEdit.mvc$model", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.BookmarkNoteAddEdit.mvc$controller", "OutSystems/ReactWidgets/Main", "NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc$view", "Connect2_LegacyShared.Reusable.InputCounter.mvc$view", "Connect2_LegacyShared.model$BookmarkNoteRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function(OutSystems, Connect2_MyBookmarks_MUIModel, Connect2_MyBookmarks_MUIController, Connect2_LegacySharedModel, React, OSView, Connect2_MyBookmarks_MUI_MyBookmarksFlow_BookmarkNoteAddEdit_mvc_model, Connect2_MyBookmarks_MUI_MyBookmarksFlow_BookmarkNoteAddEdit_mvc_controller, OSWidgets, NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_view, Connect2_LegacyShared_Reusable_InputCounter_mvc_view) {
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
        View.displayName = "MyBookmarksFlow.BookmarkNoteAddEdit";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_view, Connect2_LegacyShared_Reusable_InputCounter_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return Connect2_MyBookmarks_MUI_MyBookmarksFlow_BookmarkNoteAddEdit_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_MyBookmarks_MUI_MyBookmarksFlow_BookmarkNoteAddEdit_mvc_controller;
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
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConfirmationDialogs/ActionConfirmationDialog Confirmed");
                                return controller.saveNote$Action(controller.callContext(eventHandlerContext));
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
                    uuid: "1",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    dialogHeader: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Expression, {
                            gridProperties: {
                                marginLeft: "Adaptive"
                            },
                            value: model.getCachedValue(idService.getId("gNhCf3dV2Eec1f7c+_229Q.Value"), function() {
                                return ((((model.variables.in_NoteVar === "")) ? ("Add ") : ("Edit ")) + "note");
                            }, function() {
                                return model.variables.in_NoteVar;
                            }),
                            _idProps: {
                                service: idService,
                                uuid: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    dialogBody: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.TextArea, {
                            _validationProps: {
                                validationService: validationService
                            },
                            enabled: true,
                            extendedEvents: {
                                onFocus: function() {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);

                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyBookmarksFlow/BookmarkNoteAddEdit/TextArea_Note onfocus");
                                        controller.textArea_NoteOnFocus$Action(controller.callContext(eventHandlerContext));
                                    }, function() {
                                        controller.popDebuggerContext(eventHandlerContext);
                                    });

                                    ;
                                }
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: false,
                            maxLength: 50,
                            prompt: "Give a Description",
                            style: "form-control",
                            textLines: 3,
                            variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.bookmarkNoteIn.noteAttr, function(value) {
                                model.variables.bookmarkNoteIn.noteAttr = value;
                            }),
                            _idProps: {
                                service: idService,
                                name: "TextArea_Note"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            variable_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._bookmarkNoteInDataFetchStatus)
                        })), React.createElement(Connect2_LegacyShared_Reusable_InputCounter_mvc_view, {
                            inputs: {
                                NoteInitialLength: model.getCachedValue(idService.getId("hvV+_YgFik25nvo6kZ0W9w.NoteInitialLength"), function() {
                                    return OS.BuiltinFunctions.length(model.variables.bookmarkNoteIn.noteAttr);
                                }, function() {
                                    return model.variables.bookmarkNoteIn.noteAttr;
                                }),
                                _noteInitialLengthInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._bookmarkNoteInDataFetchStatus),
                                InputId: idService.getId("TextArea_Note")
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
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    }),
                    buttonLabel_Confirm: new PlaceholderContent(function() {
                        return ["SAVE"];
                    }),
                    buttonLabel_Dismiss: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedEvents: {
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);

                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyBookmarksFlow/BookmarkNoteAddEdit/Container onclick");
                                        controller.discardNote$Action(controller.callContext(eventHandlerContext));
                                    }, function() {
                                        controller.popDebuggerContext(eventHandlerContext);
                                    });

                                    ;
                                }
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "CANCEL")];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables._bookmarkNoteInDataFetchStatus), asPrimitiveValue(model.variables.bookmarkNoteIn.noteAttr), asPrimitiveValue(model.variables.in_NoteVar)]
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("Connect2_MyBookmarks_MUI.MyBookmarksFlow.BookmarkNoteAddEdit.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.controller", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_MUI.languageResources", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.BookmarkNoteAddEdit.mvc$debugger", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.BookmarkNoteAddEdit.mvc$controller.TextArea_NoteOnFocus.JavaScript1JS", "Connect2_LegacyShared.model$BookmarkNoteRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared"], function(OutSystems, Connect2_MyBookmarks_MUIModel, Connect2_MyBookmarks_MUIController, Connect2_LegacySharedModel, Connect2_MyBookmarks_MUILanguageResources, Connect2_MyBookmarks_MUI_MyBookmarksFlow_BookmarkNoteAddEdit_mvc_Debugger, Connect2_MyBookmarks_MUI_MyBookmarksFlow_BookmarkNoteAddEdit_mvc_controller_TextArea_NoteOnFocus_JavaScript1JS) {
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
        Controller.prototype._textArea_NoteOnFocus$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("TextArea_NoteOnFocus");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:pphQO5g85k+QKN_Cjw+ekA:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.OQfMH_lsGUu6ejFdjDxC1A/ClientActions.pphQO5g85k+QKN_Cjw+ekA:pdXowGF7KYFPXGUJdGUdBA", "Connect2_MyBookmarks_MUI", "TextArea_NoteOnFocus", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:UEy9q_Yn2U2VLTCvo550OA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:uUfy2gFUpE2qc4wMhEJBTw", callContext.id);
                controller.safeExecuteJSNode(Connect2_MyBookmarks_MUI_MyBookmarksFlow_BookmarkNoteAddEdit_mvc_controller_TextArea_NoteOnFocus_JavaScript1JS, "JavaScript1", "TextArea_NoteOnFocus", {
                    TextAreaNoteId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("TextArea_Note"), OS.DataTypes.DataTypes.Text)
                }, function($parameters) {}, {}, {});
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:oWmRsoBn4EGJOkMhvcgFNA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:pphQO5g85k+QKN_Cjw+ekA", callContext.id);
            }

        };
        Controller.prototype._discardNote$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("DiscardNote");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:jVIlfkhs9k2AWAG7ySYQZg:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.OQfMH_lsGUu6ejFdjDxC1A/ClientActions.jVIlfkhs9k2AWAG7ySYQZg:BZF27+QNiHAaOtnfYX6hgg", "Connect2_MyBookmarks_MUI", "DiscardNote", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:HhzoUZDlT0azjQeULcSnDw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:4wzKa5eoDECOfDyMk6gRaQ", callContext.id);
                // BookmarkNote.Note = ""
                model.variables.bookmarkNoteIn.noteAttr = "";
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:vl_GA64qW0+Wx9QB6R5Qtg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:jVIlfkhs9k2AWAG7ySYQZg", callContext.id);
            }

        };
        Controller.prototype._onParametersChanged$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnParametersChanged");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:r8uqvV4sVUu754PRxQZ8gw:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.OQfMH_lsGUu6ejFdjDxC1A/ClientActions.r8uqvV4sVUu754PRxQZ8gw:aoZjwCT2Tf6hgG6+UbLk3w", "Connect2_MyBookmarks_MUI", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:ZT44xWM5_UCzezM1e6esdA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:zyIyVg1AFEqjyHSvhxT1lA", callContext.id);
                // In_Note = Trim
                model.variables.in_NoteVar = OS.BuiltinFunctions.trim(model.variables.bookmarkNoteIn.noteAttr);
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:s7Fp_1Ztc0CzThN8tA5nbQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:r8uqvV4sVUu754PRxQZ8gw", callContext.id);
            }

        };
        Controller.prototype._saveNote$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("SaveNote");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:67wY9Nyuxk683qK2xNIOqw:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.OQfMH_lsGUu6ejFdjDxC1A/ClientActions.67wY9Nyuxk683qK2xNIOqw:1vtnnRQwLqkVShZAt1IsXw", "Connect2_MyBookmarks_MUI", "SaveNote", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:6viqozoCWk2fZeberrvibw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:xWkYmPfFOUKfriQg9KHYQg", callContext.id);
                // Trigger Event: Save_Note
                return controller.save_Note$Action(model.variables.bookmarkNoteIn, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:5Iz_BNnB4EuQM8Ok9PGX5g", callContext.id);
                    // BookmarkNote.Note = ""
                    model.variables.bookmarkNoteIn.noteAttr = "";
                    OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:5Iz_BNnB4EuQM8Ok9PGX5g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                    // BookmarkNote.BookmarkId = 0
                    model.variables.bookmarkNoteIn.bookmarkIdAttr = OS.BuiltinFunctions.integerToLongInteger(0);
                    OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:ntLDm1PIx0uwZEV9OAjE_Q", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:67wY9Nyuxk683qK2xNIOqw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:67wY9Nyuxk683qK2xNIOqw", callContext.id);
                throw ex;

            });
        };

        Controller.prototype.textArea_NoteOnFocus$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._textArea_NoteOnFocus$Action, callContext);

        };
        Controller.prototype.discardNote$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._discardNote$Action, callContext);

        };
        Controller.prototype.onParametersChanged$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

        };
        Controller.prototype.saveNote$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._saveNote$Action, callContext);

        };
        Controller.prototype.save_Note$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:CBvOGFy8j0+xPUeAWREtQw:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw:9WxoUPdIIKPcyGMtXvfZqg", "Connect2_MyBookmarks_MUI", "MyBookmarksFlow", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:OQfMH_lsGUu6ejFdjDxC1A:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.OQfMH_lsGUu6ejFdjDxC1A:zIkgIP54DCEhk_TX3Pu4lw", "Connect2_MyBookmarks_MUI", "BookmarkNoteAddEdit", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:OQfMH_lsGUu6ejFdjDxC1A", callContext.id);
            OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:CBvOGFy8j0+xPUeAWREtQw", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = null;
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "MyBookmarksFlow/BookmarkNoteAddEdit On Parameters Changed");
                return controller.onParametersChanged$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
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
define("Connect2_MyBookmarks_MUI.MyBookmarksFlow.BookmarkNoteAddEdit.mvc$controller.TextArea_NoteOnFocus.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        document.getElementById($parameters.TextAreaNoteId).addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
            }
        });
    };
});

define("Connect2_MyBookmarks_MUI.MyBookmarksFlow.BookmarkNoteAddEdit.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "uUfy2gFUpE2qc4wMhEJBTw": {
            getter: function(varBag, idService) {
                return varBag.javaScript1JSResult.value;
            }
        },
        "Rjh1RmUE7UOJsWIKaFitLw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_NoteVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "HjW+fpy2v0incc0OkqXtPg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.bookmarkNoteIn;
            }
        },
        "MBWL02uAJkq4zBIcBiaSew": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("DialogHeader"));
                })(varBag.model, idService);
            }
        },
        "3cvjLJ7SG0aNOvya1z1PqA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("DialogBody"));
                })(varBag.model, idService);
            }
        },
        "VVDPY+F4Jkuph1XKzqoPkw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("TextArea_Note"));
                })(varBag.model, idService);
            }
        },
        "JzYib0QD3UefOYUMytcYiA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ButtonLabel_Confirm"));
                })(varBag.model, idService);
            }
        },
        "fOK2eVps5kqZfTcxPTJM6A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ButtonLabel_Dismiss"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});