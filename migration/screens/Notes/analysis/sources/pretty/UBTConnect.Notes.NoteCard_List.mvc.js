define("UBTConnect.Notes.NoteCard_List.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "Connect_Notes_CS.model", "UBTConnectLibrary.model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnectLibrary.ConnectPatterns.EmptyListBorderless.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnect.Notes.NoteCard_Item.mvc$model", "Connect_Notes_CS.model$UI_Note_CardItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Notes_CS", "UBTConnect.model$UI_Note_CardItemList", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "Connect_Notes_CS.model$UI_Note_CardContentRec", "Connect_Notes_CS.model$UI_NoteCard_SourceHeaderRec", "UBTConnectLibrary.model$NotesRec", "UBTConnectLibrary.model$Note_ItemRec", "UBTConnect.model$Note_ItemList"], function(OutSystems, UBTConnectModel, Connect_Notes_CSModel, UBTConnectLibraryModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, UBTConnectLibrary_ConnectPatterns_EmptyListBorderless_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel, UBTConnect_Notes_NoteCard_Item_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("In_Notes", "in_NotesIn", "In_Notes", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_Note_CardItemList());
                }, false, UBTConnectModel.UI_Note_CardItemList),
                this.attr("_in_NotesInDataFetchStatus", "_in_NotesInDataFetchStatus", "_in_NotesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_IsLoading", "in_IsLoadingIn", "In_IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_IsLoadingInDataFetchStatus", "_in_IsLoadingInDataFetchStatus", "_in_IsLoadingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_SearchString", "in_SearchStringIn", "In_SearchString", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_SearchStringInDataFetchStatus", "_in_SearchStringInDataFetchStatus", "_in_SearchStringInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = ((((UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_EmptyListBorderless_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets) || UBTConnect_Notes_NoteCard_Item_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_Notes" in inputs) {
                this.variables.in_NotesIn = inputs.In_Notes;
                if ("_in_NotesInDataFetchStatus" in inputs) {
                    this.variables._in_NotesInDataFetchStatus = inputs._in_NotesInDataFetchStatus;
                }

            }

            if ("In_IsLoading" in inputs) {
                this.variables.in_IsLoadingIn = inputs.In_IsLoading;
                if ("_in_IsLoadingInDataFetchStatus" in inputs) {
                    this.variables._in_IsLoadingInDataFetchStatus = inputs._in_IsLoadingInDataFetchStatus;
                }

            }

            if ("In_SearchString" in inputs) {
                this.variables.in_SearchStringIn = inputs.In_SearchString;
                if ("_in_SearchStringInDataFetchStatus" in inputs) {
                    this.variables._in_SearchStringInDataFetchStatus = inputs._in_SearchStringInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Notes.NoteCard_List");
});
define("UBTConnect.Notes.NoteCard_List.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Notes_CS.model", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Notes.NoteCard_List.mvc$model", "UBTConnect.Notes.NoteCard_List.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnectLibrary.ConnectPatterns.EmptyListBorderless.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnect.Notes.NoteCard_Item.mvc$view", "Connect_Notes_CS.model$UI_Note_CardItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Notes_CS", "UBTConnect.model$UI_Note_CardItemList", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "Connect_Notes_CS.model$UI_Note_CardContentRec", "Connect_Notes_CS.model$UI_NoteCard_SourceHeaderRec", "UBTConnectLibrary.model$NotesRec", "UBTConnectLibrary.model$Note_ItemRec", "UBTConnect.model$Note_ItemList"], function(OutSystems, UBTConnectModel, UBTConnectController, Connect_Notes_CSModel, UBTConnectLibraryModel, React, OSView, UBTConnect_Notes_NoteCard_List_mvc_model, UBTConnect_Notes_NoteCard_List_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_ConnectPatterns_EmptyListBorderless_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnect_Notes_NoteCard_Item_mvc_view) {
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
        View.displayName = "Notes.NoteCard_List";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_ConnectPatterns_EmptyListBorderless_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnect_Notes_NoteCard_Item_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Notes_NoteCard_List_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Notes_NoteCard_List_mvc_controller;
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
                    Options: model.getCachedValue(idService.getId("9b3YXylIUEuF2ZfdEX50sA.Options"), function() {
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
                                rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
                                return rec;
                            }();
                            rec.heightOptionsAttr = function() {
                                var rec = new UBTConnectLibraryModel.SizeOptionsRec();
                                rec.mainAttr = ((model.variables.in_NotesIn.isEmpty) ? ("100%") : (""));
                                return rec;
                            }();
                            return rec;
                        }();
                    }, function() {
                        return model.variables.in_NotesIn.isEmpty;
                    }),
                    _optionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_NotesInDataFetchStatus)
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
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                placeholder_LoadingSection: new PlaceholderContent(function() {
                                    return [$if(model.variables.in_NotesIn.isEmpty, false, this, function() {
                                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_EmptyListBorderless_mvc_view, {
                                            inputs: {
                                                IconId: UBTConnectModel.staticEntities.uBT_Icons2.borderColor
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
                                                titlePlaceholder: new PlaceholderContent(function() {
                                                    return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                                        inputs: {
                                                            In_Text: "No note added yet",
                                                            In_TextOptions: model.getCachedValue(idService.getId("EhFwWvM8VUqa1ehhz2T9Dg.In_TextOptions"), function() {
                                                                return function() {
                                                                    var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                                    rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral9;
                                                                    rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.base;
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
                                                            uuid: "3",
                                                            alias: "4"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        _dependencies: []
                                                    })];
                                                }),
                                                textPlaceholder: new PlaceholderContent(function() {
                                                    return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                                        inputs: {
                                                            In_Text: "Add note to content by tapping the Add Note",
                                                            In_TextOptions: model.getCachedValue(idService.getId("3uxAa+vBbUa9zzIPXZI4ew.In_TextOptions"), function() {
                                                                return function() {
                                                                    var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                                    rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
                                                                    rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
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
                                                            uuid: "4",
                                                            alias: "5"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        _dependencies: []
                                                    }), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                                        inputs: {
                                                            In_TextOptions: model.getCachedValue(idService.getId("4se9H96p6EmTusFqmmnLvw.In_TextOptions"), function() {
                                                                return function() {
                                                                    var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                                    rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
                                                                    rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
                                                                    return rec;
                                                                }();
                                                            }),
                                                            In_Text: "icon."
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
                                                            alias: "6"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        _dependencies: []
                                                    })];
                                                })
                                            },
                                            _dependencies: []
                                        })];
                                    }, function() {
                                        return [React.createElement(OSWidgets.List, {
                                            animateItems: true,
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            mode: /*Default*/ 0,
                                            onScrollEnding: function() {
                                                return Promise.resolve().then(function() {
                                                    var eventHandlerContext = callContext.clone();
                                                    return OS.Flow.tryFinally(function() {
                                                        var varBag = {};
                                                        controller.pushDebuggerContext(eventHandlerContext);

                                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Notes/NoteCard_List/List OnScrollEnding");
                                                        return controller.noteCardList_OnScrollEnding$Action(controller.callContext(eventHandlerContext));
                                                    }, function() {
                                                        controller.popDebuggerContext(eventHandlerContext);
                                                    });
                                                });;
                                            },
                                            source: model.variables.in_NotesIn,
                                            style: "list list-group list--gap-s",
                                            tag: "div",
                                            _idProps: {
                                                service: idService,
                                                uuid: "6"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_NotesInDataFetchStatus),
                                            placeholders: {
                                                content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                    return [React.createElement(UBTConnect_Notes_NoteCard_Item_mvc_view, {
                                                        inputs: {
                                                            In_SearchString: model.variables.in_SearchStringIn,
                                                            _in_SearchStringInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SearchStringInDataFetchStatus),
                                                            NoteCardItem: model.variables.in_NotesIn.getCurrent(callContext.iterationContext),
                                                            _noteCardItemInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_NotesInDataFetchStatus)
                                                        },
                                                        events: {
                                                            _handleError: function(ex) {
                                                                controller.handleError(ex);
                                                            },
                                                            onClickCardItem$Action: function() {
                                                                var eventHandlerContext = callContext.clone();
                                                                return OS.Flow.tryFinally(function() {
                                                                    var varBag = {};
                                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Notes/NoteCard_Item OnClickCardItem");
                                                                    controller.onClick_NoteCardItem$Action(model.variables.in_NotesIn.getCurrent(callContext.iterationContext).itemIdAttr, OS.BuiltinFunctions.longIntegerToText(model.variables.in_NotesIn.getCurrent(callContext.iterationContext).itemId2Attr), model.variables.in_NotesIn.getCurrent(callContext.iterationContext).noteCategoryIdAttr, model.variables.in_NotesIn.getCurrent(callContext.iterationContext).hasDetailAccessAttr, controller.callContext(eventHandlerContext));
                                                                }, function() {
                                                                    controller.popDebuggerContext(eventHandlerContext);
                                                                });

                                                                ;
                                                            },
                                                            updateNoteCardsList$Action: function(noteCard_IdIn, noteCard_ItemIdIn, noteCard_NoteCategoryIdIn) {
                                                                var eventHandlerContext = callContext.clone();
                                                                return OS.Flow.tryFinally(function() {
                                                                    var varBag = {};
                                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Notes/NoteCard_Item UpdateNoteCardsList");
                                                                    controller.handler_UpdateNoteCardsList$Action(noteCard_IdIn, noteCard_ItemIdIn, noteCard_NoteCategoryIdIn, controller.callContext(eventHandlerContext));
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
                                                            alias: "7"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        _dependencies: []
                                                    })];
                                                }, callContext, idService, "1")
                                            },
                                            _dependencies: [asPrimitiveValue(model.variables._in_NotesInDataFetchStatus), asPrimitiveValue(model.variables._in_SearchStringInDataFetchStatus), asPrimitiveValue(model.variables.in_SearchStringIn)]
                                        })];
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.in_SearchStringIn), asPrimitiveValue(model.variables._in_SearchStringInDataFetchStatus), asPrimitiveValue(model.variables._in_NotesInDataFetchStatus), asPrimitiveValue(model.variables.in_NotesIn)]
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.in_SearchStringIn), asPrimitiveValue(model.variables.in_NotesIn), asPrimitiveValue(model.variables._in_SearchStringInDataFetchStatus), asPrimitiveValue(model.variables._in_NotesInDataFetchStatus), asPrimitiveValue(model.variables._in_IsLoadingInDataFetchStatus), asPrimitiveValue(model.variables.in_IsLoadingIn)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect.Notes.NoteCard_List.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Notes_CS.model", "UBTConnectLibrary.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Notes.NoteCard_List.mvc$debugger", "Connect_Notes_CS.model$UI_Note_CardItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Notes_CS", "UBTConnect.model$UI_Note_CardItemList", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "Connect_Notes_CS.model$UI_Note_CardContentRec", "Connect_Notes_CS.model$UI_NoteCard_SourceHeaderRec", "UBTConnectLibrary.model$NotesRec", "UBTConnectLibrary.model$Note_ItemRec", "UBTConnect.model$Note_ItemList"], function(OutSystems, UBTConnectModel, UBTConnectController, Connect_Notes_CSModel, UBTConnectLibraryModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Notes_NoteCard_List_mvc_Debugger) {
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
        Controller.prototype._handler_UpdateNoteCardsList$Action = function(noteCard_IdIn, noteCard_ItemIdIn, noteCard_NoteCategoryIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Handler_UpdateNoteCardsList");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.Notes.NoteCard_List.Handler_UpdateNoteCardsList$vars"))());
            vars.value.noteCard_IdInLocal = noteCard_IdIn;
            vars.value.noteCard_ItemIdInLocal = noteCard_ItemIdIn;
            vars.value.noteCard_NoteCategoryIdInLocal = noteCard_NoteCategoryIdIn;
            var listIndexOfVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.listIndexOfVar = listIndexOfVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:cXbZDWOMfEC6N_qVxemM3w:/NRWebFlows.2DlYrQQBWkK7ftgdGmwqyg/NodesShownInESpaceTree.ASOS800jzUe57Z88yf7chg/ClientActions.cXbZDWOMfEC6N_qVxemM3w:QccbZNKc6x8PtCkiNMe1pw", "UBTConnect", "Handler_UpdateNoteCardsList", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6hAsu2X5UEugZnv5HI5sew", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ri6Jb+F18EG1Nd5XhIxe8A", callContext.id);
                // Execute Action: ListIndexOf
                listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.in_NotesIn, function(p) {
                    return (((p.idAttr === vars.value.noteCard_IdInLocal) && (p.itemIdAttr === OS.BuiltinFunctions.longIntegerToText(vars.value.noteCard_ItemIdInLocal))) && (p.noteCategoryIdAttr === vars.value.noteCard_NoteCategoryIdInLocal));
                }, callContext);

                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:o8cr1yWRjkKFLrLa+uWe9g", callContext.id) && ((listIndexOfVar.value.positionOut) !== (-1)))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FSoSQYpAq0yhv0TKli7KJw", callContext.id);
                    // Execute Action: ListRemove
                    OS.SystemActions.listRemove(model.variables.in_NotesIn, listIndexOfVar.value.positionOut, callContext);
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sV+PB0og40W6o41ge16Hag", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:y0BJ9t7IpUe3_V02Nn3_Ww", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:cXbZDWOMfEC6N_qVxemM3w", callContext.id);
            }

        };
        Controller.registerVariableGroupType("UBTConnect.Notes.NoteCard_List.Handler_UpdateNoteCardsList$vars", [{
            name: "NoteCard_Id",
            attrName: "noteCard_IdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "NoteCard_ItemId",
            attrName: "noteCard_ItemIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.LongInteger,
            defaultValue: function() {
                return OS.DataTypes.LongInteger.defaultValue;
            }
        }, {
            name: "NoteCard_NoteCategoryId",
            attrName: "noteCard_NoteCategoryIdInLocal",
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
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:kggGXLQ11kez9nlDJ6VnMQ:/NRWebFlows.2DlYrQQBWkK7ftgdGmwqyg/NodesShownInESpaceTree.ASOS800jzUe57Z88yf7chg/ClientActions.kggGXLQ11kez9nlDJ6VnMQ:ec+nusBCNFWfg2wySnREXg", "UBTConnect", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ejStGpBxFU6cPOexKyTo6g", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:giJUeHuYJk66qJl6bP+VBw", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:kggGXLQ11kez9nlDJ6VnMQ", callContext.id);
            }

        };
        Controller.prototype._noteCardList_OnScrollEnding$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("NoteCardList_OnScrollEnding");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:7gp4ljivcES2wDsbC11XWA:/NRWebFlows.2DlYrQQBWkK7ftgdGmwqyg/NodesShownInESpaceTree.ASOS800jzUe57Z88yf7chg/ClientActions.7gp4ljivcES2wDsbC11XWA:n3PZ8SrHojOEw3NK0L2rkA", "UBTConnect", "NoteCardList_OnScrollEnding", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wQmljovSwE6OEabEXxZ_WQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DgDk6n2rT0aR022+qQC_Hg", callContext.id);
                // Trigger Event: OnLoadMore
                return controller.onLoadMore$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bF57Belck0CVzOmcwoqiGg", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:7gp4ljivcES2wDsbC11XWA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:7gp4ljivcES2wDsbC11XWA", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._onInitialize$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnInitialize");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:yiEaqDRpmkGeQPpajlxDvw:/NRWebFlows.2DlYrQQBWkK7ftgdGmwqyg/NodesShownInESpaceTree.ASOS800jzUe57Z88yf7chg/ClientActions.yiEaqDRpmkGeQPpajlxDvw:ugki+0ZklMNKtkAr8rjBrw", "UBTConnect", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2wvZnrRRw0SNbST9rKq0Sw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+mTaLqAbDEq72+VL0jo+fA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FDyA40gp20qjrF_gubNnDA", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:yiEaqDRpmkGeQPpajlxDvw", callContext.id);
            }

        };

        Controller.prototype.handler_UpdateNoteCardsList$Action = function(noteCard_IdIn, noteCard_ItemIdIn, noteCard_NoteCategoryIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._handler_UpdateNoteCardsList$Action, callContext, noteCard_IdIn, noteCard_ItemIdIn, noteCard_NoteCategoryIdIn);

        };
        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.noteCardList_OnScrollEnding$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._noteCardList_OnScrollEnding$Action, callContext);

        };
        Controller.prototype.onInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

        };
        Controller.prototype.onClick_NoteCardItem$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.onLoadMore$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:2DlYrQQBWkK7ftgdGmwqyg:/NRWebFlows.2DlYrQQBWkK7ftgdGmwqyg:H6BPPYIIY_GDy0FJgaUDiA", "UBTConnect", "Notes", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:ASOS800jzUe57Z88yf7chg:/NRWebFlows.2DlYrQQBWkK7ftgdGmwqyg/NodesShownInESpaceTree.ASOS800jzUe57Z88yf7chg:TlHIz6i3WT+2unatl0K9Mw", "UBTConnect", "NoteCard_List", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:ASOS800jzUe57Z88yf7chg", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:2DlYrQQBWkK7ftgdGmwqyg", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Notes/NoteCard_List On Initialize");
                return controller.onInitialize$Action(callContext);

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

                OutSystemsDebugger.setThreadStartName(callContext.id, "Notes/NoteCard_List On Ready");
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
            return UBTConnectController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});

define("UBTConnect.Notes.NoteCard_List.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "JGfuomsHNkSgwaL3_o295A": {
            getter: function(varBag, idService) {
                return varBag.vars.value.noteCard_IdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "pipZceVlaEi7x_pETs+a2g": {
            getter: function(varBag, idService) {
                return varBag.vars.value.noteCard_ItemIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "t9GCZ2qR_0WAd_Y4RGwBfw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.noteCard_NoteCategoryIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "ri6Jb+F18EG1Nd5XhIxe8A": {
            getter: function(varBag, idService) {
                return varBag.listIndexOfVar.value;
            }
        },
        "jmdLAkbdOUindfX0vgDrVQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_NotesIn;
            }
        },
        "2RpUbqJM8EaCc8DH1yMDIQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_IsLoadingIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "hDToeMjNz0KCGFy3748TEg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_SearchStringIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "LpFpejHcSUmYGQ+q35OD0A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "jGj7wcN03UenRTDJaGTPWQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
                })(varBag.model, idService);
            }
        },
        "VAnWtulZtESYMm_S+n+6kw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Empty"));
                })(varBag.model, idService);
            }
        },
        "SDhoN+kQ6Uutyxu0vNqP9A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("TitlePlaceholder"));
                })(varBag.model, idService);
            }
        },
        "dTBVaWi3G02GmZCUUHOazA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("TextPlaceholder"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});