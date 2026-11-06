define("UBTConnect_Utils.CW_Notes.ItemNotesSection.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnectLibrary.model", "UBTConnect_Utils.controller", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnect_Utils.CW_Notes.NoteListActions.mvc$model", "UBTConnectLibrary.ConnectCorePatterns.ItemCard_ActionBar.mvc$model", "UBTConnect_Utils.CW_Notes.NotesSheet.mvc$model", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnectLibrary.model$NotesRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$ActionBarOptionsRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$Note_ItemRec", "UBTConnect_Utils.model$Note_ItemList", "UBTConnect_Utils.controller$ShareEntity_ByURL", "UBTConnect_Utils.controller$GetShareTypeBy_ConnectEntityType"], function(OutSystems, UBTConnect_UtilsModel, UBTConnectLibraryModel, UBTConnect_UtilsController, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnect_Utils_CW_Notes_NoteListActions_mvcModel, UBTConnectLibrary_ConnectCorePatterns_ItemCard_ActionBar_mvcModel, UBTConnect_Utils_CW_Notes_NotesSheet_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("IsAddNote", "isAddNoteVar", "IsAddNote", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("ShareContactData", "shareContactDataVar", "ShareContactData", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactPopupDataRec());
                }, false, UBTConnect_UtilsModel.ContactPopupDataRec),
                this.attr("ShareObjectTypeId", "shareObjectTypeIdVar", "ShareObjectTypeId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("In_ItemId", "in_ItemIdIn", "In_ItemId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_ItemIdInDataFetchStatus", "_in_ItemIdInDataFetchStatus", "_in_ItemIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_EntityType", "in_EntityTypeIn", "In_EntityType", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_EntityTypeInDataFetchStatus", "_in_EntityTypeInDataFetchStatus", "_in_EntityTypeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_NoteCategoryId", "in_NoteCategoryIdIn", "In_NoteCategoryId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_NoteCategoryIdInDataFetchStatus", "_in_NoteCategoryIdInDataFetchStatus", "_in_NoteCategoryIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_Notes", "in_NotesIn", "In_Notes", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.NotesRec());
                }, false, UBTConnectLibraryModel.NotesRec),
                this.attr("_in_NotesInDataFetchStatus", "_in_NotesInDataFetchStatus", "_in_NotesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_IsBookmarked", "in_IsBookmarkedIn", "In_IsBookmarked", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_IsBookmarkedInDataFetchStatus", "_in_IsBookmarkedInDataFetchStatus", "_in_IsBookmarkedInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_ContactPopupData", "in_ContactPopupDataIn", "In_ContactPopupData", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactPopupDataRec());
                }, false, UBTConnect_UtilsModel.ContactPopupDataRec),
                this.attr("_in_ContactPopupDataInDataFetchStatus", "_in_ContactPopupDataInDataFetchStatus", "_in_ContactPopupDataInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("useViewDetails", "useViewDetailsIn", "useViewDetails", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_useViewDetailsInDataFetchStatus", "_useViewDetailsInDataFetchStatus", "_useViewDetailsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("ActionBarOptions", "actionBarOptionsIn", "ActionBarOptions", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ActionBarOptionsRec());
                }, false, UBTConnectLibraryModel.ActionBarOptionsRec),
                this.attr("_actionBarOptionsInDataFetchStatus", "_actionBarOptionsInDataFetchStatus", "_actionBarOptionsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = (((UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets || UBTConnect_Utils_CW_Notes_NoteListActions_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectCorePatterns_ItemCard_ActionBar_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_Notes_NotesSheet_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_ItemId" in inputs) {
                this.variables.in_ItemIdIn = inputs.In_ItemId;
                if ("_in_ItemIdInDataFetchStatus" in inputs) {
                    this.variables._in_ItemIdInDataFetchStatus = inputs._in_ItemIdInDataFetchStatus;
                }

            }

            if ("In_EntityType" in inputs) {
                this.variables.in_EntityTypeIn = inputs.In_EntityType;
                if ("_in_EntityTypeInDataFetchStatus" in inputs) {
                    this.variables._in_EntityTypeInDataFetchStatus = inputs._in_EntityTypeInDataFetchStatus;
                }

            }

            if ("In_NoteCategoryId" in inputs) {
                this.variables.in_NoteCategoryIdIn = inputs.In_NoteCategoryId;
                if ("_in_NoteCategoryIdInDataFetchStatus" in inputs) {
                    this.variables._in_NoteCategoryIdInDataFetchStatus = inputs._in_NoteCategoryIdInDataFetchStatus;
                }

            }

            if ("In_Notes" in inputs) {
                this.variables.in_NotesIn = inputs.In_Notes;
                if ("_in_NotesInDataFetchStatus" in inputs) {
                    this.variables._in_NotesInDataFetchStatus = inputs._in_NotesInDataFetchStatus;
                }

            }

            if ("In_IsBookmarked" in inputs) {
                this.variables.in_IsBookmarkedIn = inputs.In_IsBookmarked;
                if ("_in_IsBookmarkedInDataFetchStatus" in inputs) {
                    this.variables._in_IsBookmarkedInDataFetchStatus = inputs._in_IsBookmarkedInDataFetchStatus;
                }

            }

            if ("In_ContactPopupData" in inputs) {
                this.variables.in_ContactPopupDataIn = inputs.In_ContactPopupData;
                if ("_in_ContactPopupDataInDataFetchStatus" in inputs) {
                    this.variables._in_ContactPopupDataInDataFetchStatus = inputs._in_ContactPopupDataInDataFetchStatus;
                }

            }

            if ("useViewDetails" in inputs) {
                this.variables.useViewDetailsIn = inputs.useViewDetails;
                if ("_useViewDetailsInDataFetchStatus" in inputs) {
                    this.variables._useViewDetailsInDataFetchStatus = inputs._useViewDetailsInDataFetchStatus;
                }

            }

            if ("ActionBarOptions" in inputs) {
                this.variables.actionBarOptionsIn = inputs.ActionBarOptions;
                if ("_actionBarOptionsInDataFetchStatus" in inputs) {
                    this.variables._actionBarOptionsInDataFetchStatus = inputs._actionBarOptionsInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "CW_Notes.ItemNotesSection");
});
define("UBTConnect_Utils.CW_Notes.ItemNotesSection.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect_Utils.CW_Notes.ItemNotesSection.mvc$model", "UBTConnect_Utils.CW_Notes.ItemNotesSection.mvc$controller", "UBTConnect_Utils.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect_Utils.CW_Notes.NoteListActions.mvc$view", "UBTConnectLibrary.ConnectCorePatterns.ItemCard_ActionBar.mvc$view", "UBTConnect_Utils.CW_Notes.NotesSheet.mvc$view", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnectLibrary.model$NotesRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$ActionBarOptionsRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$Note_ItemRec", "UBTConnect_Utils.model$Note_ItemList", "UBTConnect_Utils.controller$ShareEntity_ByURL", "UBTConnect_Utils.controller$GetShareTypeBy_ConnectEntityType"], function(OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnectLibraryModel, React, OSView, UBTConnect_Utils_CW_Notes_ItemNotesSection_mvc_model, UBTConnect_Utils_CW_Notes_ItemNotesSection_mvc_controller, UBTConnect_UtilsClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnect_Utils_CW_Notes_NoteListActions_mvc_view, UBTConnectLibrary_ConnectCorePatterns_ItemCard_ActionBar_mvc_view, UBTConnect_Utils_CW_Notes_NotesSheet_mvc_view) {
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
        View.displayName = "CW_Notes.ItemNotesSection";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnect_Utils_CW_Notes_NoteListActions_mvc_view, UBTConnectLibrary_ConnectCorePatterns_ItemCard_ActionBar_mvc_view, UBTConnect_Utils_CW_Notes_NotesSheet_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Utils_CW_Notes_ItemNotesSection_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Utils_CW_Notes_ItemNotesSection_mvc_controller;
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
                    content: new PlaceholderContent(function() {
                        return [$if((model.variables.in_NotesIn.totalAttr > 0), false, this, function() {
                            return [React.createElement(UBTConnect_Utils_CW_Notes_NoteListActions_mvc_view, {
                                inputs: {
                                    In_ShowPreviewOnly: true,
                                    In_ItemId: model.variables.in_ItemIdIn,
                                    _in_ItemIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ItemIdInDataFetchStatus),
                                    In_NoteCategoryId: model.variables.in_NoteCategoryIdIn,
                                    _in_NoteCategoryIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_NoteCategoryIdInDataFetchStatus),
                                    Notes: model.variables.in_NotesIn,
                                    _notesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_NotesInDataFetchStatus)
                                },
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    },
                                    on_ShowAllNotesRequested$Action: function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_Notes/NoteListActions On_ShowAllNotesRequested");
                                            controller.handler_OnShowAllNotesRequested$Action(controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });

                                        ;
                                    },
                                    onSaveEditNote$Action: function(notesIn) {
                                        return Promise.resolve().then(function() {
                                            var eventHandlerContext = callContext.clone();
                                            return OS.Flow.tryFinally(function() {
                                                var varBag = {};
                                                controller.pushDebuggerContext(eventHandlerContext);

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_Notes/NoteListActions OnSaveEditNote");
                                                return controller.handler_OnSaveEditNote$Action(notesIn, controller.callContext(eventHandlerContext));
                                            }, function() {
                                                controller.popDebuggerContext(eventHandlerContext);
                                            });
                                        });;
                                    },
                                    on_NoteDeleted$Action: function(noteIdIn, isLastNoteDeletedIn) {
                                        return Promise.resolve().then(function() {
                                            var eventHandlerContext = callContext.clone();
                                            return OS.Flow.tryFinally(function() {
                                                var varBag = {};
                                                controller.pushDebuggerContext(eventHandlerContext);

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_Notes/NoteListActions On_NoteDeleted");
                                                return controller.handler_OnNoteDeleted$Action(noteIdIn, isLastNoteDeletedIn, controller.callContext(eventHandlerContext));
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
                                    alias: "2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        }, function() {
                            return [];
                        }), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                            inputs: {
                                Options: model.getCachedValue(idService.getId("06uBwpLfakSKXyhF_H4_fQ.Options"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                        rec.paddingSizeAttr = function() {
                                            var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                            rec.verticalSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.small;
                                            return rec;
                                        }();
                                        rec.borderOptionsAttr = function() {
                                            var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                            rec.colorAttr = UBTConnect_UtilsModel.staticEntities.uBT_Color.neutral2;
                                            rec.sizeAttr = function() {
                                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                rec.topSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.small;
                                                return rec;
                                            }();
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
                                uuid: "2",
                                alias: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(UBTConnectLibrary_ConnectCorePatterns_ItemCard_ActionBar_mvc_view, {
                                        inputs: {
                                            ActionBarOptions: model.variables.actionBarOptionsIn,
                                            _actionBarOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._actionBarOptionsInDataFetchStatus)
                                        },
                                        events: {
                                            _handleError: function(ex) {
                                                controller.handleError(ex);
                                            },
                                            onClickAddNote$Action: function() {
                                                var eventHandlerContext = callContext.clone();
                                                return OS.Flow.tryFinally(function() {
                                                    var varBag = {};
                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/ItemCard_ActionBar OnClickAddNote");
                                                    controller.handler_OnAddNoteClicked$Action(controller.callContext(eventHandlerContext));
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
                                            alias: "4"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables._actionBarOptionsInDataFetchStatus), asPrimitiveValue(model.variables.actionBarOptionsIn)]
                        }), $if(false, false, this, function() {
                            return [];
                        }, function() {
                            return [React.createElement(UBTConnect_Utils_CW_Notes_NotesSheet_mvc_view, {
                                inputs: {
                                    In_Notes: model.variables.in_NotesIn,
                                    _in_NotesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_NotesInDataFetchStatus),
                                    In_IsOpen: model.variables.isAddNoteVar,
                                    In_ItemId: model.variables.in_ItemIdIn,
                                    _in_ItemIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ItemIdInDataFetchStatus),
                                    In_NoteCategoryId: model.variables.in_NoteCategoryIdIn,
                                    _in_NoteCategoryIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_NoteCategoryIdInDataFetchStatus)
                                },
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    },
                                    on_NotesChanged$Action: function(new_NotesIn) {
                                        return Promise.resolve().then(function() {
                                            var eventHandlerContext = callContext.clone();
                                            return OS.Flow.tryFinally(function() {
                                                var varBag = {};
                                                controller.pushDebuggerContext(eventHandlerContext);

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_Notes/NotesSheet On_NotesChanged");
                                                return controller.handler_OnSheetNotesChanged$Action(new_NotesIn, controller.callContext(eventHandlerContext));
                                            }, function() {
                                                controller.popDebuggerContext(eventHandlerContext);
                                            });
                                        });;
                                    },
                                    on_NoteDeleted$Action: function(noteIdIn, wasLastNoteIn) {
                                        return Promise.resolve().then(function() {
                                            var eventHandlerContext = callContext.clone();
                                            return OS.Flow.tryFinally(function() {
                                                var varBag = {};
                                                controller.pushDebuggerContext(eventHandlerContext);

                                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_Notes/NotesSheet On_NoteDeleted");
                                                return controller.handler_OnNoteDeleted$Action(noteIdIn, wasLastNoteIn, controller.callContext(eventHandlerContext));
                                            }, function() {
                                                controller.popDebuggerContext(eventHandlerContext);
                                            });
                                        });;
                                    },
                                    on_NoteSheet_Closed$Action: function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_Notes/NotesSheet On_NoteSheet_Closed");
                                            controller.handler_OnNoteSheetClosed$Action(controller.callContext(eventHandlerContext));
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
                                    uuid: "4",
                                    alias: "5"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.isAddNoteVar), asPrimitiveValue(model.variables.actionBarOptionsIn), asPrimitiveValue(model.variables.in_NoteCategoryIdIn), asPrimitiveValue(model.variables.in_ItemIdIn), asPrimitiveValue(model.variables._actionBarOptionsInDataFetchStatus), asPrimitiveValue(model.variables._in_NoteCategoryIdInDataFetchStatus), asPrimitiveValue(model.variables._in_ItemIdInDataFetchStatus), asPrimitiveValue(model.variables._in_NotesInDataFetchStatus), asPrimitiveValue(model.variables.in_NotesIn)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect_Utils.CW_Notes.ItemNotesSection.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnectLibrary.model", "UBTConnect_Utils.languageResources", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.CW_Notes.ItemNotesSection.mvc$debugger", "UBTConnect_Utils.CW_Notes.ItemNotesSection.mvc$controller.OnReady.CheckRestoredJS", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnectLibrary.model$NotesRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$ActionBarOptionsRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$Note_ItemRec", "UBTConnect_Utils.model$Note_ItemList", "UBTConnect_Utils.controller$ShareEntity_ByURL", "UBTConnect_Utils.controller$GetShareTypeBy_ConnectEntityType"], function(OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnectLibraryModel, UBTConnect_UtilsLanguageResources, UBTConnect_UtilsClientVariables, UBTConnect_Utils_CW_Notes_ItemNotesSection_mvc_Debugger, UBTConnect_Utils_CW_Notes_ItemNotesSection_mvc_controller_OnReady_CheckRestoredJS) {
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
        Controller.prototype._handler_OnNoteDeleted$Action = function(noteIdIn, wasLastNoteIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_OnNoteDeleted");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect_Utils.CW_Notes.ItemNotesSection.Handler_OnNoteDeleted$vars"))());
            vars.value.noteIdInLocal = noteIdIn;
            vars.value.wasLastNoteInLocal = wasLastNoteIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:I1V4E8YNNUSQsIYi5wf6UQ:/NRWebFlows.4SPMb9EXFkG4E6LhSCJZjQ/NodesShownInESpaceTree.9Dnb8kI2XkidWditI+sXYA/ClientActions.I1V4E8YNNUSQsIYi5wf6UQ:NTQM07Hl931cJSnE6gHq4Q", "UBTConnect_Utils", "Handler_OnNoteDeleted", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:IVpQ2z+xVke9JVnc5hUrwA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:+L+co+neqEmkMFnI0aP5bg", callContext.id);
                // Trigger Event: On_NoteDeleted
                return controller.on_NoteDeleted$Action(vars.value.noteIdInLocal, vars.value.wasLastNoteInLocal, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:yJtmh+t56UijgEqxsR9nrA", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:I1V4E8YNNUSQsIYi5wf6UQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:I1V4E8YNNUSQsIYi5wf6UQ", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect_Utils.CW_Notes.ItemNotesSection.Handler_OnNoteDeleted$vars", [{
            name: "NoteId",
            attrName: "noteIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }, {
            name: "WasLastNote",
            attrName: "wasLastNoteInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._handler_OnSharedCancel$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_OnSharedCancel");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:lDRfFVsvYEO86k0FkkD6nA:/NRWebFlows.4SPMb9EXFkG4E6LhSCJZjQ/NodesShownInESpaceTree.9Dnb8kI2XkidWditI+sXYA/ClientActions.lDRfFVsvYEO86k0FkkD6nA:++T666nsgDatpyJlvvZ0lA", "UBTConnect_Utils", "Handler_OnSharedCancel", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:hmxKfOnNAU+rC1qXu82s3Q", callContext.id);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:1_EpQPsj+ECkwpaPz4fo6A", callContext.id);
                // ShareContactData.ShowPopup = False
                model.variables.shareContactDataVar.showPopupAttr = false;
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:2L42Reu6XECRJnn2O_RQtQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:lDRfFVsvYEO86k0FkkD6nA", callContext.id);
            }

        };
        Controller.prototype._handler_OnNoteSheetClosed$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_OnNoteSheetClosed");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:K09Gcrp2HEeMhogps2CNew:/NRWebFlows.4SPMb9EXFkG4E6LhSCJZjQ/NodesShownInESpaceTree.9Dnb8kI2XkidWditI+sXYA/ClientActions.K09Gcrp2HEeMhogps2CNew:MPJ5FjL3OufD_qJQ9+z_hw", "UBTConnect_Utils", "Handler_OnNoteSheetClosed", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:KTjtbie4gk67A6IYnUu7Eg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:zJ8xKmobSkyiDThkY6srKQ", callContext.id);
                // IsAddNote = False
                model.variables.isAddNoteVar = false;
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:X5s86qamxUSiryQlGOFTHQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:K09Gcrp2HEeMhogps2CNew", callContext.id);
            }

        };
        Controller.prototype._handler_OnShareToOthers$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_OnShareToOthers");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:Wetlhpoq1kSqXY16xMyaDw:/NRWebFlows.4SPMb9EXFkG4E6LhSCJZjQ/NodesShownInESpaceTree.9Dnb8kI2XkidWditI+sXYA/ClientActions.Wetlhpoq1kSqXY16xMyaDw:LtAEpAPGRwBEjjcj7NQUAA", "UBTConnect_Utils", "Handler_OnShareToOthers", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:eVYXIDmxmUe8AdM_XMMVAw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:RKQvfE6NtkKZL8LqW4Aa0A", callContext.id);
                // ShareContactData.ShowPopup = False
                model.variables.shareContactDataVar.showPopupAttr = false;
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:QotJAkBD60aVT9MbHxiPPw", callContext.id);
                // Execute Action: ShareEntity_ByURL
                model.flush();
                return UBTConnect_UtilsController.default.shareEntity_ByURL$Action(model.variables.shareObjectTypeIdVar, model.variables.in_ItemIdIn, "", OS.DataTypes.DateTime.defaultValue, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:G6M4edC0ykOgLui2nTQTQw", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:Wetlhpoq1kSqXY16xMyaDw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:Wetlhpoq1kSqXY16xMyaDw", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._handler_OnSaveEditNote$Action = function(notesIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_OnSaveEditNote");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect_Utils.CW_Notes.ItemNotesSection.Handler_OnSaveEditNote$vars"))());
            vars.value.notesInLocal = notesIn.clone();
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:hBGmjUZvgUagwY2cyvqhiw:/NRWebFlows.4SPMb9EXFkG4E6LhSCJZjQ/NodesShownInESpaceTree.9Dnb8kI2XkidWditI+sXYA/ClientActions.hBGmjUZvgUagwY2cyvqhiw:7VJq1XBqSo_WlGWde1j9+g", "UBTConnect_Utils", "Handler_OnSaveEditNote", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:DO29katlzEWvLDDCJeKoaQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:lb12WKPUCku1F3vTukh2cw", callContext.id);
                // Trigger Event: On_NotesChanged
                return controller.on_NotesChanged$Action(vars.value.notesInLocal, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:PemWA3_HdECL3EK_CstKzg", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:hBGmjUZvgUagwY2cyvqhiw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:hBGmjUZvgUagwY2cyvqhiw", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect_Utils.CW_Notes.ItemNotesSection.Handler_OnSaveEditNote$vars", [{
            name: "Notes",
            attrName: "notesInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new UBTConnectLibraryModel.NotesRec();
            },
            complexType: UBTConnectLibraryModel.NotesRec
        }]);
        Controller.prototype._handler_OnShowAllNotesRequested$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_OnShowAllNotesRequested");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:01AEuaGaqEGn4UegZuwXeQ:/NRWebFlows.4SPMb9EXFkG4E6LhSCJZjQ/NodesShownInESpaceTree.9Dnb8kI2XkidWditI+sXYA/ClientActions.01AEuaGaqEGn4UegZuwXeQ:Y1qZq3qnu_0pzhWuvr+ggw", "UBTConnect_Utils", "Handler_OnShowAllNotesRequested", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:M+d960eaIE+L2NoyoivCEQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:pjGzq6L5QU2GvPADbr6Pfg", callContext.id);
                // IsAddNote = True
                model.variables.isAddNoteVar = true;
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:dtFXK896KUKtnM7ojXIbOA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:01AEuaGaqEGn4UegZuwXeQ", callContext.id);
            }

        };
        Controller.prototype._handler_OnAddNoteClicked$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_OnAddNoteClicked");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:mHrMvPq6LkSDlmSibOzXHw:/NRWebFlows.4SPMb9EXFkG4E6LhSCJZjQ/NodesShownInESpaceTree.9Dnb8kI2XkidWditI+sXYA/ClientActions.mHrMvPq6LkSDlmSibOzXHw:6peOLww0Tvy5d61oi4gBIA", "UBTConnect_Utils", "Handler_OnAddNoteClicked", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:3ddPs0ttQ0SIZ0bvdAN9xQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:L0abJGp4bUqcjTN7zHMKRQ", callContext.id);
                // IsAddNote = True
                model.variables.isAddNoteVar = true;
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Or0O4rY5pE2vmI8ewnVreg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:mHrMvPq6LkSDlmSibOzXHw", callContext.id);
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
            var getShareTypeBy_ConnectEntityTypeVar = new OS.DataTypes.VariableHolder();
            var checkRestoredJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getShareTypeBy_ConnectEntityTypeVar = getShareTypeBy_ConnectEntityTypeVar;
            varBag.checkRestoredJSResult = checkRestoredJSResult;
            try {
                OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:XYHSw2nOqEOhisnrwGgfPg:/NRWebFlows.4SPMb9EXFkG4E6LhSCJZjQ/NodesShownInESpaceTree.9Dnb8kI2XkidWditI+sXYA/ClientActions.XYHSw2nOqEOhisnrwGgfPg:ywO1oGcHEArnmK0RRuFmoQ", "UBTConnect_Utils", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Q9Puz2aFg0WatfRGUlWagA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:LUW4aXV64UKX5H5qc3gEog", callContext.id);
                checkRestoredJSResult.value = controller.safeExecuteJSNode(UBTConnect_Utils_CW_Notes_ItemNotesSection_mvc_controller_OnReady_CheckRestoredJS, "CheckRestored", "OnReady", {
                    FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
                    FromHistory: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("UBTConnect_Utils.CW_Notes.ItemNotesSection.OnReady$checkRestoredJSResult"))();
                    jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
                    jsNodeResult.fromHistoryOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromHistory, OS.DataTypes.DataTypes.Boolean);
                    return jsNodeResult;
                }, {}, {});
                if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:u7fwVj_Nm0iLNlChGnYRqw", callContext.id) && (checkRestoredJSResult.value.fromCacheOut || checkRestoredJSResult.value.fromHistoryOut))) {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:om2eJlLFm02NP4nPnyvrDg", callContext.id);
                } else {
                    if ((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:5HGZBHohy0y4XU2nMTPZeQ", callContext.id) && model.variables.actionBarOptionsIn.showShareAttr)) {
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:blro+GVANk+WFfARvAMSCQ", callContext.id);
                        // Execute Action: GetShareTypeBy_ConnectEntityType
                        getShareTypeBy_ConnectEntityTypeVar.value = UBTConnect_UtilsController.default.getShareTypeBy_ConnectEntityType$Action(model.variables.in_EntityTypeIn, false, callContext);

                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:1u1fR17hRkiNRBSde1YKsQ", callContext.id);
                        // ShareObjectTypeId = GetShareTypeBy_ConnectEntityType.ShareType
                        model.variables.shareObjectTypeIdVar = getShareTypeBy_ConnectEntityTypeVar.value.shareTypeOut;
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:XJ7EfbkYdUewqQwcMK1Grw", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:XJ7EfbkYdUewqQwcMK1Grw", callContext.id);
                    }

                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:XYHSw2nOqEOhisnrwGgfPg", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect_Utils.CW_Notes.ItemNotesSection.OnReady$checkRestoredJSResult", [{
            name: "FromCache",
            attrName: "fromCacheOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "FromHistory",
            attrName: "fromHistoryOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._handler_OnShareClicked$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_OnShareClicked");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:aRSMyfFqB02T5JIGjOXX7w:/NRWebFlows.4SPMb9EXFkG4E6LhSCJZjQ/NodesShownInESpaceTree.9Dnb8kI2XkidWditI+sXYA/ClientActions.aRSMyfFqB02T5JIGjOXX7w:H2_jl7FrXyy9cthUnTdoxA", "UBTConnect_Utils", "Handler_OnShareClicked", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:fv7rgNXzoEeWhWYX97Xkfw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:VFMm70dPgEWsQlNbW8GYIw", callContext.id);
                // ShareContactData = In_ContactPopupData
                model.variables.shareContactDataVar = model.variables.in_ContactPopupDataIn;
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:VFMm70dPgEWsQlNbW8GYIw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // ShareContactData.ShowPopup = True
                model.variables.shareContactDataVar.showPopupAttr = true;
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:0advgLv3Z0uBOcG_LCjW0w", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:aRSMyfFqB02T5JIGjOXX7w", callContext.id);
            }

        };
        Controller.prototype._handler_OnSheetNotesChanged$Action = function(new_NotesIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_OnSheetNotesChanged");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect_Utils.CW_Notes.ItemNotesSection.Handler_OnSheetNotesChanged$vars"))());
            vars.value.new_NotesInLocal = new_NotesIn.clone();
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:ZDjt+14soEq0CE63up6IrA:/NRWebFlows.4SPMb9EXFkG4E6LhSCJZjQ/NodesShownInESpaceTree.9Dnb8kI2XkidWditI+sXYA/ClientActions.ZDjt+14soEq0CE63up6IrA:31Hzg8n6QiQGgaFnjYTq9g", "UBTConnect_Utils", "Handler_OnSheetNotesChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:duCgEPa_s0W2EUKF3TDUfg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:UWRUxFZN4EaKH2qtCZqTiA", callContext.id);
                // Trigger Event: On_NotesChanged
                return controller.on_NotesChanged$Action(vars.value.new_NotesInLocal, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:w+waTJLiHEKZKR9ia4jwsQ", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:ZDjt+14soEq0CE63up6IrA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:ZDjt+14soEq0CE63up6IrA", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect_Utils.CW_Notes.ItemNotesSection.Handler_OnSheetNotesChanged$vars", [{
            name: "New_Notes",
            attrName: "new_NotesInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new UBTConnectLibraryModel.NotesRec();
            },
            complexType: UBTConnectLibraryModel.NotesRec
        }]);

        Controller.prototype.handler_OnNoteDeleted$Action = function(noteIdIn, wasLastNoteIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_OnNoteDeleted$Action, callContext, noteIdIn, wasLastNoteIn);

        };
        Controller.prototype.handler_OnSharedCancel$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_OnSharedCancel$Action, callContext);

        };
        Controller.prototype.handler_OnNoteSheetClosed$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_OnNoteSheetClosed$Action, callContext);

        };
        Controller.prototype.handler_OnShareToOthers$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_OnShareToOthers$Action, callContext);

        };
        Controller.prototype.handler_OnSaveEditNote$Action = function(notesIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_OnSaveEditNote$Action, callContext, notesIn);

        };
        Controller.prototype.handler_OnShowAllNotesRequested$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_OnShowAllNotesRequested$Action, callContext);

        };
        Controller.prototype.handler_OnAddNoteClicked$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_OnAddNoteClicked$Action, callContext);

        };
        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.handler_OnShareClicked$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_OnShareClicked$Action, callContext);

        };
        Controller.prototype.handler_OnSheetNotesChanged$Action = function(new_NotesIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_OnSheetNotesChanged$Action, callContext, new_NotesIn);

        };
        Controller.prototype.on_UnbookmarkClicked$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.on_BookmarkClicked$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.on_NoteDeleted$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.on_NotesChanged$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:4SPMb9EXFkG4E6LhSCJZjQ:/NRWebFlows.4SPMb9EXFkG4E6LhSCJZjQ:sFzoW3bRc+2i8CkiQ6zxIA", "UBTConnect_Utils", "CW_Notes", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:9Dnb8kI2XkidWditI+sXYA:/NRWebFlows.4SPMb9EXFkG4E6LhSCJZjQ/NodesShownInESpaceTree.9Dnb8kI2XkidWditI+sXYA:hZuI5jgZvesic1HfKoKVyg", "UBTConnect_Utils", "ItemNotesSection", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:9Dnb8kI2XkidWditI+sXYA", callContext.id);
            OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:4SPMb9EXFkG4E6LhSCJZjQ", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "CW_Notes/ItemNotesSection On Ready");
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
            return UBTConnect_UtilsController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnect_UtilsLanguageResources);
});
define("UBTConnect_Utils.CW_Notes.ItemNotesSection.mvc$controller.OnReady.CheckRestoredJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
        //$parameters.FromHistory = $public.Navigation.navigatedFromHistory();
    };
});

define("UBTConnect_Utils.CW_Notes.ItemNotesSection.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "qrLpFr9kv0Ka1W5H30z_Ng": {
            getter: function(varBag, idService) {
                return varBag.vars.value.noteIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "vXnTe2OFsUuGx83Z_A3dnw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.wasLastNoteInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "7f+WyDO+UUOyTFyvv0vgJA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.notesInLocal;
            }
        },
        "blro+GVANk+WFfARvAMSCQ": {
            getter: function(varBag, idService) {
                return varBag.getShareTypeBy_ConnectEntityTypeVar.value;
            }
        },
        "LUW4aXV64UKX5H5qc3gEog": {
            getter: function(varBag, idService) {
                return varBag.checkRestoredJSResult.value;
            }
        },
        "tjTw8emMbEqJydt75ahB8g": {
            getter: function(varBag, idService) {
                return varBag.vars.value.new_NotesInLocal;
            }
        },
        "87GIweMnqUS2gKOaYEuy+Q": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isAddNoteVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "MHV8X8lzEkG9JqCI1p9R_g": {
            getter: function(varBag, idService) {
                return varBag.model.variables.shareContactDataVar;
            }
        },
        "XOyiXWBc9kKUW8LEA9V_gg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.shareObjectTypeIdVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "oxgP1ME4_ECJz5ttMv_ZUA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_ItemIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "M3M5D4NZ6EiK6dPQCCqCKw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_EntityTypeIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "oLHDppP+w0u33wV47S1n3A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_NoteCategoryIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "h+92VoVV90aBrtRUiX620Q": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_NotesIn;
            }
        },
        "c6e9h59Sg0+aZhH8R9U2lg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_IsBookmarkedIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "YXUGj0v0IUKmOALHpl3OhQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_ContactPopupDataIn;
            }
        },
        "0n8g9AoJg0S52ct9m6TpAg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.useViewDetailsIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "urgEwqLvx0SSGLaI00jagA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.actionBarOptionsIn;
            }
        },
        "btPa15rqU06NJx77FQqkbQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "m+3+OWxOHk+bzHCMO4EEPA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "40k4gv5N6EuELGVmSBXvYw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HideInServiceStudio_BottomSheet"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});