# UBTConnect_Utils.CW_Notes.NotesSheet

- Kind: shared; build screens using it: HouseholdCarousel, HouseholdDetails, Household_Relations, Locality_Details, Notes, OneSchoolGlobalDetails, Profile, SupperMeeting_Carousel, SupperMeeting_Details
- Compiled source: `migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnect_Utils.CW_Notes.NotesSheet.mvc.js`
- Child blocks: NavigationHandler.NavigationHandler.BackNavigationHandler, UBTConnectLibrary.ConnectPatterns.AddNote, UBTConnectLibrary.ConnectPatterns.BottomSheet, UBTConnect_Utils.CW_Notes.NoteListActions (queue: UBTConnectLibrary.ConnectPatterns.AddNote, UBTConnectLibrary.ConnectPatterns.BottomSheet, UBTConnect_Utils.CW_Notes.NoteListActions)

## Inputs

(none found)

## Captured DOM variants (1 distinct, 57 instances)

### Variant 1: HouseholdCarousel/default (×57)

```html
<div class="OSBlockWidget" data-block="CW_Notes.NotesSheet" id="b3-l1-1152_0-b2-b3-b1-b33-$b8"></div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect_Utils.CW_Notes.NotesSheet.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnectLibrary.model", "Connect_Notes_CS.model", "UBTConnect_Notes_MCS.controller", "UBTJavaScriptUtils.controller", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "UBTConnect_Utils.CW_Notes.NotesSheet.mvc$model", "UBTConnect_Utils.CW_Notes.NotesSheet.mvc$controller", "UBTConnect_Utils.clientVariables", "UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect_Utils.CW_Notes.NoteListActions.mvc$view", "UBTConnectLibrary.ConnectPatterns.AddNote.mvc$view", "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$view", "UBTConnectLibrary.model$NotesRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$Note_ItemRec", "UBTConnect_Utils.model$Note_ItemList", "Connect_Notes_CS.model$UI_Note_AddedRec", "UBTConnect_Utils.referencesHealth$Connect_Notes_CS", "UBTConnect_Utils.controller$Note_SendFeedbackMessages", "UBTConnect_Notes_MCS.controller$CreateOrUpdate_LocalNote", "UBTConnect_Utils.referencesHealth$UBTConnect_Notes_MCS", "UBTJavaScriptUtils.controller$ScreenModel_Flush", "UBTConnect_Utils.referencesHealth$UBTJavaScriptUtils", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect_Utils.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetClose", "OutSystemsUI_2_23.controller$BottomSheetOpen"], function(OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnectLibraryModel, Connect_Notes_CSModel, UBTConnect_Notes_MCSController, UBTJavaScriptUtilsController, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, UBTConnect_Utils_CW_Notes_NotesSheet_mvc_model, UBTConnect_Utils_CW_Notes_NotesSheet_mvc_controller, UBTConnect_UtilsClientVariables, UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_view, OSWidgets, UBTConnect_Utils_CW_Notes_NoteListActions_mvc_view, UBTConnectLibrary_ConnectPatterns_AddNote_mvc_view, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view) {
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
        View.displayName = "CW_Notes.NotesSheet";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_view, UBTConnect_Utils_CW_Notes_NoteListActions_mvc_view, UBTConnectLibrary_ConnectPatterns_AddNote_mvc_view, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Utils_CW_Notes_NotesSheet_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Utils_CW_Notes_NotesSheet_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), $if(model.variables.isSheetOpenVar, false, this, function() {
                return [React.createElement(UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_view, {
                    inputs: {
                        Title: "Note",
                        ExtendedClasses: model.variables.extendedClassesIn,
                        _extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassesInDataFetchStatus),
                        ShowHeader: true,
                        FooterHeight: "72px"
                    },
                    events: {
                        _handleError: function(ex) {
                            controller.handleError(ex);
                        },
                        onClose$Action: function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);
                                controller.on_NoteSheet_Closed$Action(controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });
                            ;
                        },
                        initialized$Action: function(idIn) {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);
                                controller.bottomSheet_Initialized$Action(idIn, controller.callContext(eventHandlerContext));
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
                            return [React.createElement(UBTConnect_Utils_CW_Notes_NoteListActions_mvc_view, {
                                inputs: {
                                    Notes: model.variables.in_NotesIn,
                                    _notesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_NotesInDataFetchStatus),
                                    In_ItemId: model.variables.in_ItemIdIn,
                                    _in_ItemIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ItemIdInDataFetchStatus),
                                    In_ShowPreviewOnly: false,
                                    In_NoteCategoryId: model.variables.in_NoteCategoryIdIn,
                                    _in_NoteCategoryIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_NoteCategoryIdInDataFetchStatus)
                                },
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    },
                                    on_NoteDeleted$Action: function(noteIdIn, isLastNoteDeletedIn) {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);
                                            controller.on_NoteDeleted$Action(noteIdIn, isLastNoteDeletedIn, controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });
                                        ;
                                    },
                                    on_EditingStateChanged$Action: function(isEditingIn) {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);
                                            controller.handler_OnEditingStateChanged$Action(isEditingIn, controller.callContext(eventHandlerContext));
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
                                                return controller.handler_OnSaveEditNote$Action(notesIn, controller.callContext(eventHandlerContext));
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
                        }),
                        footer: new PlaceholderContent(function() {
                            return [$if(model.variables.isEditingVar, false, this, function() {
                                return [];
                            }, function() {
                                return [React.createElement(UBTConnectLibrary_ConnectPatterns_AddNote_mvc_view, {
                                    inputs: {},
                                    events: {
                                        _handleError: function(ex) {
                                            controller.handleError(ex);
                                        },
                                        onSubmitRequested$Action: function(noteIn) {
                                            return Promise.resolve().then(function() {
                                                var eventHandlerContext = callContext.clone();
                                                return OS.Flow.tryFinally(function() {
                                                    var varBag = {};
                                                    controller.pushDebuggerContext(eventHandlerContext);
                                                    return controller.handler_OnAddNoteRequested$Action(noteIn, controller.callContext(eventHandlerContext));
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
                                        uuid: "2",
                                        alias: "3"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    _dependencies: []
                                })];
                            })];
                        })
                    },
                    _dependencies: [asPrimitiveValue(model.variables.isEditingVar), asPrimitiveValue(model.variables.in_NoteCategoryIdIn), asPrimitiveValue(model.variables.in_ItemIdIn), asPrimitiveValue(model.variables._in_NoteCategoryIdInDataFetchStatus), asPrimitiveValue(model.variables._in_ItemIdInDataFetchStatus), asPrimitiveValue(model.variables._in_NotesInDataFetchStatus), asPrimitiveValue(model.variables.in_NotesIn)]
                })];
            }, function() {
                return [];
            }), $if(model.variables.isSheetOpenVar, false, this, function() {
                return [React.createElement(NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view, {
                    inputs: {},
                    events: {
                        _handleError: function(ex) {
                            controller.handleError(ex);
                        },
                        backNavigation$Action: function(backNavigationEventIn) {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);
                                controller.backNavigationHandlerBackNavigation$Action(backNavigationEventIn, controller.callContext(eventHandlerContext));
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
            }, function() {
                return [];
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
