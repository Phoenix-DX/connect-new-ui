define("Connect2_LegacyShared.MyBookmarks.BookmarkNoteAddEdit.mvc$model", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_LegacyShared.model",
  "Connect2_LegacyShared.model$BookmarkNoteRec",
], function (OutSystems, Connect2_LegacySharedModel) {
  var OS = OutSystems.Internal;

  var VariablesRecord = (function (_super) {
    __extends(VariablesRecord, _super);
    function VariablesRecord(defaults) {
      _super.apply(this, arguments);
    }
    VariablesRecord.attributesToDeclare = function () {
      return [
        this.attr(
          "In_Note",
          "in_NoteVar",
          "In_Note",
          true,
          false,
          OS.DataTypes.DataTypes.Text,
          function () {
            return "";
          },
          false,
        ),
        this.attr(
          "BookmarkNote",
          "bookmarkNoteIn",
          "BookmarkNote",
          true,
          false,
          OS.DataTypes.DataTypes.Record,
          function () {
            return OS.DataTypes.ImmutableBase.getData(
              new Connect2_LegacySharedModel.BookmarkNoteRec(),
            );
          },
          false,
          Connect2_LegacySharedModel.BookmarkNoteRec,
        ),
        this.attr(
          "_bookmarkNoteInDataFetchStatus",
          "_bookmarkNoteInDataFetchStatus",
          "_bookmarkNoteInDataFetchStatus",
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return /*Fetched*/ 1;
          },
          false,
        ),
      ].concat(_super.attributesToDeclare.call(this));
    };
    VariablesRecord.init();
    return VariablesRecord;
  })(OS.DataTypes.GenericRecord);
  var WidgetsRecord = (function (_super) {
    __extends(WidgetsRecord, _super);
    function WidgetsRecord() {
      _super.apply(this, arguments);
    }
    WidgetsRecord.getWidgetsType = function () {
      return {
        TextArea_Note: OS.Model.ValidationWidgetRecord,
      };
    };

    return WidgetsRecord;
  })(OS.Model.BaseWidgetRecordMap);
  var Model = (function (_super) {
    __extends(Model, _super);
    function Model() {
      _super.apply(this, arguments);
    }
    Model.getVariablesRecordConstructor = function () {
      return VariablesRecord;
    };
    Model.getWidgetsRecordConstructor = function () {
      return WidgetsRecord;
    };
    Object.defineProperty(Model, "hasValidationWidgets", {
      enumerable: true,
      configurable: true,
      get: function () {
        return true;
      },
    });

    Model.prototype.setInputs = function (inputs) {
      if ("BookmarkNote" in inputs) {
        this.variables.bookmarkNoteIn = inputs.BookmarkNote;
        if ("_bookmarkNoteInDataFetchStatus" in inputs) {
          this.variables._bookmarkNoteInDataFetchStatus =
            inputs._bookmarkNoteInDataFetchStatus;
        }
      }
    };
    return Model;
  })(OS.Model.BaseViewModel);
  return new OS.Model.ModelFactory(Model, "MyBookmarks.BookmarkNoteAddEdit");
});
define("Connect2_LegacyShared.MyBookmarks.BookmarkNoteAddEdit.mvc$view", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_LegacyShared.model",
  "Connect2_LegacyShared.controller",
  "react",
  "OutSystems/ReactView/Main",
  "Connect2_LegacyShared.MyBookmarks.BookmarkNoteAddEdit.mvc$model",
  "Connect2_LegacyShared.MyBookmarks.BookmarkNoteAddEdit.mvc$controller",
  "Connect2_LegacyShared.clientVariables",
  "OutSystems/ReactWidgets/Main",
  "NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc$view",
  "Connect2_LegacyShared.Reusable.InputCounter.mvc$view",
  "Connect2_LegacyShared.model$BookmarkNoteRec",
], function (
  OutSystems,
  Connect2_LegacySharedModel,
  Connect2_LegacySharedController,
  React,
  OSView,
  Connect2_LegacyShared_MyBookmarks_BookmarkNoteAddEdit_mvc_model,
  Connect2_LegacyShared_MyBookmarks_BookmarkNoteAddEdit_mvc_controller,
  Connect2_LegacySharedClientVariables,
  OSWidgets,
  NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_view,
  Connect2_LegacyShared_Reusable_InputCounter_mvc_view,
) {
  var OS = OutSystems.Internal;
  var PlaceholderContent = OSView.Widget.PlaceholderContent;
  var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;

  var View = (function (_super) {
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
    View.prototype.initialize = function () {
      _super.apply(this, arguments);
    };
    View.displayName = "MyBookmarks.BookmarkNoteAddEdit";
    View.getCssDependencies = function () {
      return ["css/OutSystemsReactWidgets.css"];
    };
    View.getJsDependencies = function () {
      return [];
    };
    View.getBlocks = function () {
      return [
        NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_view,
        Connect2_LegacyShared_Reusable_InputCounter_mvc_view,
      ];
    };
    Object.defineProperty(View.prototype, "modelFactory", {
      get: function () {
        return Connect2_LegacyShared_MyBookmarks_BookmarkNoteAddEdit_mvc_model;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(View.prototype, "controllerFactory", {
      get: function () {
        return Connect2_LegacyShared_MyBookmarks_BookmarkNoteAddEdit_mvc_controller;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(View.prototype, "title", {
      get: function () {
        return "";
      },
      enumerable: true,
      configurable: true,
    });
    View.prototype.internalRender = function () {
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

      return React.createElement(
        "div",
        this.getRootNodeProperties(),
        React.createElement(
          OSWidgets.Container,
          {
            align: /*Default*/ 0,
            animate: false,
            style: "bookmark-note-action-dialog backwards-compatibility",
            visible: true,
            _idProps: {
              service: idService,
              uuid: "0",
            },
            _widgetRecordProvider: widgetsRecordProvider,
          },
          React.createElement(
            NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_view,
            {
              inputs: {},
              events: {
                _handleError: function (ex) {
                  controller.handleError(ex);
                },
                confirmed$Action: function () {
                  return Promise.resolve().then(function () {
                    var eventHandlerContext = callContext.clone();
                    return OS.Flow.tryFinally(
                      function () {
                        var varBag = {};
                        controller.pushDebuggerContext(eventHandlerContext);

                        OutSystemsDebugger.setThreadStartName(
                          eventHandlerContext.id,
                          "ConfirmationDialogs/ActionConfirmationDialog Confirmed",
                        );
                        return controller.saveNote$Action(
                          controller.callContext(eventHandlerContext),
                        );
                      },
                      function () {
                        controller.popDebuggerContext(eventHandlerContext);
                      },
                    );
                  });
                },
              },
              _validationProps: {
                validationService: validationService,
              },
              _idProps: {
                service: idService,
                uuid: "1",
                alias: "1",
              },
              _widgetRecordProvider: widgetsRecordProvider,
              placeholders: {
                dialogHeader: new PlaceholderContent(function () {
                  return [
                    React.createElement(OSWidgets.Expression, {
                      value: model.getCachedValue(
                        idService.getId("zEEpSBb+4kC0dOv6rENeig.Value"),
                        function () {
                          return (
                            (model.variables.in_NoteVar === ""
                              ? "Add "
                              : "Edit ") + "note"
                          );
                        },
                        function () {
                          return model.variables.in_NoteVar;
                        },
                      ),
                      _idProps: {
                        service: idService,
                        uuid: "2",
                      },
                      _widgetRecordProvider: widgetsRecordProvider,
                    }),
                  ];
                }),
                dialogBody: new PlaceholderContent(function () {
                  return [
                    React.createElement(
                      OSWidgets.Container,
                      {
                        align: /*Default*/ 0,
                        animate: false,
                        visible: true,
                        _idProps: {
                          service: idService,
                          uuid: "3",
                        },
                        _widgetRecordProvider: widgetsRecordProvider,
                      },
                      React.createElement(OSWidgets.TextArea, {
                        _validationProps: {
                          validationService: validationService,
                        },
                        enabled: true,
                        extendedEvents: {
                          onFocus: function () {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(
                              function () {
                                var varBag = {};
                                controller.pushDebuggerContext(
                                  eventHandlerContext,
                                );

                                OutSystemsDebugger.setThreadStartName(
                                  eventHandlerContext.id,
                                  "MyBookmarks/BookmarkNoteAddEdit/TextArea_Note onfocus",
                                );
                                controller.textArea_NoteOnFocus$Action(
                                  controller.callContext(eventHandlerContext),
                                );
                              },
                              function () {
                                controller.popDebuggerContext(
                                  eventHandlerContext,
                                );
                              },
                            );
                          },
                        },
                        gridProperties: {
                          classes: "OSFillParent",
                        },
                        mandatory: false,
                        maxLength: 50,
                        prompt: "Give a Description",
                        style: "form-control",
                        textLines: 3,
                        variable: model.createVariable(
                          OS.DataTypes.DataTypes.Text,
                          model.variables.bookmarkNoteIn.noteAttr,
                          function (value) {
                            model.variables.bookmarkNoteIn.noteAttr = value;
                          },
                        ),
                        _idProps: {
                          service: idService,
                          name: "TextArea_Note",
                        },
                        _widgetRecordProvider: widgetsRecordProvider,
                        variable_dataFetchStatus:
                          OS.Model.calculateDataFetchStatus(
                            model.variables._bookmarkNoteInDataFetchStatus,
                          ),
                      }),
                    ),
                    React.createElement(
                      Connect2_LegacyShared_Reusable_InputCounter_mvc_view,
                      {
                        inputs: {
                          InputId: idService.getId("TextArea_Note"),
                          NoteInitialLength: model.getCachedValue(
                            idService.getId(
                              "hs_7iGFhF0yxlVRaSZVmlw.NoteInitialLength",
                            ),
                            function () {
                              return OS.BuiltinFunctions.length(
                                model.variables.bookmarkNoteIn.noteAttr,
                              );
                            },
                            function () {
                              return model.variables.bookmarkNoteIn.noteAttr;
                            },
                          ),
                          _noteInitialLengthInDataFetchStatus:
                            OS.Model.calculateDataFetchStatus(
                              model.variables._bookmarkNoteInDataFetchStatus,
                            ),
                        },
                        events: {
                          _handleError: function (ex) {
                            controller.handleError(ex);
                          },
                        },
                        _validationProps: {
                          validationService: validationService,
                        },
                        _idProps: {
                          service: idService,
                          uuid: "5",
                          alias: "2",
                        },
                        _widgetRecordProvider: widgetsRecordProvider,
                        _dependencies: [],
                      },
                    ),
                  ];
                }),
                buttonLabel_Confirm: new PlaceholderContent(function () {
                  return ["SAVE"];
                }),
                buttonLabel_Dismiss: new PlaceholderContent(function () {
                  return [
                    React.createElement(
                      OSWidgets.Container,
                      {
                        align: /*Default*/ 0,
                        animate: false,
                        extendedEvents: {
                          onClick: function () {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(
                              function () {
                                var varBag = {};
                                controller.pushDebuggerContext(
                                  eventHandlerContext,
                                );

                                OutSystemsDebugger.setThreadStartName(
                                  eventHandlerContext.id,
                                  "MyBookmarks/BookmarkNoteAddEdit/Container onclick",
                                );
                                controller.discardNote$Action(
                                  controller.callContext(eventHandlerContext),
                                );
                              },
                              function () {
                                controller.popDebuggerContext(
                                  eventHandlerContext,
                                );
                              },
                            );
                          },
                        },
                        visible: true,
                        _idProps: {
                          service: idService,
                          uuid: "6",
                        },
                        _widgetRecordProvider: widgetsRecordProvider,
                      },
                      "CANCEL",
                    ),
                  ];
                }),
              },
              _dependencies: [
                asPrimitiveValue(
                  model.variables._bookmarkNoteInDataFetchStatus,
                ),
                asPrimitiveValue(model.variables.bookmarkNoteIn.noteAttr),
                asPrimitiveValue(model.variables.in_NoteVar),
              ],
            },
          ),
        ),
      );
    };
    return View;
  })(OSView.BaseView.BaseWebBlock);

  return View;
});
define("Connect2_LegacyShared.MyBookmarks.BookmarkNoteAddEdit.mvc$controller", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_LegacyShared.model",
  "Connect2_LegacyShared.controller",
  "Connect2_LegacyShared.languageResources",
  "Connect2_LegacyShared.clientVariables",
  "Connect2_LegacyShared.MyBookmarks.BookmarkNoteAddEdit.mvc$debugger",
  "Connect2_LegacyShared.MyBookmarks.BookmarkNoteAddEdit.mvc$controller.TextArea_NoteOnFocus.JavaScript1JS",
  "Connect2_LegacyShared.model$BookmarkNoteRec",
], function (
  OutSystems,
  Connect2_LegacySharedModel,
  Connect2_LegacySharedController,
  Connect2_LegacySharedLanguageResources,
  Connect2_LegacySharedClientVariables,
  Connect2_LegacyShared_MyBookmarks_BookmarkNoteAddEdit_mvc_Debugger,
  Connect2_LegacyShared_MyBookmarks_BookmarkNoteAddEdit_mvc_controller_TextArea_NoteOnFocus_JavaScript1JS,
) {
  var OS = OutSystems.Internal;
  var Controller = (function (_super) {
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
    Controller.prototype._onParametersChanged$Action = function (callContext) {
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
        OutSystemsDebugger.push(
          "DjcSN7X3Kkyt49iAAhnv1A:3VsfRFh50Uq9Xo33aB3mVg:/NRWebFlows.ozEroREZXUy42SBfp3+baQ/NodesShownInESpaceTree.nb2mOAqbxku8N+w_keVWKg/ClientActions.3VsfRFh50Uq9Xo33aB3mVg:4Fa3ziXcHD_ZmdIS0wh8gQ",
          "Connect2_LegacyShared",
          "OnParametersChanged",
          "NRFlows.ClientScreenActionFlow",
          callContext.id,
          varBag,
        );
        OutSystemsDebugger.handleBreakpoint(
          "DjcSN7X3Kkyt49iAAhnv1A:BlBj2L74uUqR_tDS9XIHXQ",
          callContext.id,
        );
        OutSystemsDebugger.handleBreakpoint(
          "DjcSN7X3Kkyt49iAAhnv1A:ylyIeWY6C0um+9rFYV4bGA",
          callContext.id,
        );
        // In_Note = Trim
        model.variables.in_NoteVar = OS.BuiltinFunctions.trim(
          model.variables.bookmarkNoteIn.noteAttr,
        );
        OutSystemsDebugger.handleBreakpoint(
          "DjcSN7X3Kkyt49iAAhnv1A:vBZtC5MTykK4LsLilcCk5w",
          callContext.id,
        );
      } catch (ex) {
        OutSystemsDebugger.handleException(ex, callContext.id);
        throw ex;
      } finally {
        OutSystemsDebugger.pop(
          "DjcSN7X3Kkyt49iAAhnv1A:3VsfRFh50Uq9Xo33aB3mVg",
          callContext.id,
        );
      }
    };
    Controller.prototype._discardNote$Action = function (callContext) {
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
        OutSystemsDebugger.push(
          "DjcSN7X3Kkyt49iAAhnv1A:MtC7f6hoeUqrqnK60TxDww:/NRWebFlows.ozEroREZXUy42SBfp3+baQ/NodesShownInESpaceTree.nb2mOAqbxku8N+w_keVWKg/ClientActions.MtC7f6hoeUqrqnK60TxDww:Oga2DSIygNatGN5c4ZWkJg",
          "Connect2_LegacyShared",
          "DiscardNote",
          "NRFlows.ClientScreenActionFlow",
          callContext.id,
          varBag,
        );
        OutSystemsDebugger.handleBreakpoint(
          "DjcSN7X3Kkyt49iAAhnv1A:WwKc6pTS0kaDFciQDTAnEQ",
          callContext.id,
        );
        OutSystemsDebugger.handleBreakpoint(
          "DjcSN7X3Kkyt49iAAhnv1A:Hw8uPTArDkqbZ5fCBmeQkw",
          callContext.id,
        );
        // BookmarkNote.Note = ""
        model.variables.bookmarkNoteIn.noteAttr = "";
        OutSystemsDebugger.handleBreakpoint(
          "DjcSN7X3Kkyt49iAAhnv1A:aSyvDjoJDkqNhFKt4AB8FQ",
          callContext.id,
        );
      } catch (ex) {
        OutSystemsDebugger.handleException(ex, callContext.id);
        throw ex;
      } finally {
        OutSystemsDebugger.pop(
          "DjcSN7X3Kkyt49iAAhnv1A:MtC7f6hoeUqrqnK60TxDww",
          callContext.id,
        );
      }
    };
    Controller.prototype._textArea_NoteOnFocus$Action = function (callContext) {
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
        OutSystemsDebugger.push(
          "DjcSN7X3Kkyt49iAAhnv1A:iTAMkDlz6USgLO+4TJvtwg:/NRWebFlows.ozEroREZXUy42SBfp3+baQ/NodesShownInESpaceTree.nb2mOAqbxku8N+w_keVWKg/ClientActions.iTAMkDlz6USgLO+4TJvtwg:fYjQz+8Cowbw9Yq_PKDmSg",
          "Connect2_LegacyShared",
          "TextArea_NoteOnFocus",
          "NRFlows.ClientScreenActionFlow",
          callContext.id,
          varBag,
        );
        OutSystemsDebugger.handleBreakpoint(
          "DjcSN7X3Kkyt49iAAhnv1A:0SAgiR6KnkmLjtIA1onmBA",
          callContext.id,
        );
        OutSystemsDebugger.handleBreakpoint(
          "DjcSN7X3Kkyt49iAAhnv1A:65HcvLX0tkuyZyOUF+APfg",
          callContext.id,
        );
        controller.safeExecuteJSNode(
          Connect2_LegacyShared_MyBookmarks_BookmarkNoteAddEdit_mvc_controller_TextArea_NoteOnFocus_JavaScript1JS,
          "JavaScript1",
          "TextArea_NoteOnFocus",
          {
            TextAreaNoteId: OS.DataConversion.JSNodeParamConverter.to(
              idService.getId("TextArea_Note"),
              OS.DataTypes.DataTypes.Text,
            ),
          },
          function ($parameters) {},
          {},
          {},
        );
        OutSystemsDebugger.handleBreakpoint(
          "DjcSN7X3Kkyt49iAAhnv1A:_t5HWJk7PECIufld+TthTw",
          callContext.id,
        );
      } catch (ex) {
        OutSystemsDebugger.handleException(ex, callContext.id);
        throw ex;
      } finally {
        OutSystemsDebugger.pop(
          "DjcSN7X3Kkyt49iAAhnv1A:iTAMkDlz6USgLO+4TJvtwg",
          callContext.id,
        );
      }
    };
    Controller.prototype._saveNote$Action = function (callContext) {
      var varBag = {};
      var model = this.model;
      var controller = this.controller;
      var idService = this.idService;
      varBag.model = model;
      varBag.idService = idService;
      controller.ensureControllerAlive("SaveNote");
      callContext = controller.callContext(callContext);
      varBag.callContext = callContext;
      OutSystemsDebugger.push(
        "DjcSN7X3Kkyt49iAAhnv1A:ba9K7KANUk+JQ+0OQwRXCA:/NRWebFlows.ozEroREZXUy42SBfp3+baQ/NodesShownInESpaceTree.nb2mOAqbxku8N+w_keVWKg/ClientActions.ba9K7KANUk+JQ+0OQwRXCA:eahsFpifN5D2k7lQnX68sA",
        "Connect2_LegacyShared",
        "SaveNote",
        "NRFlows.ClientScreenActionFlow",
        callContext.id,
        varBag,
      );
      OutSystemsDebugger.handleBreakpoint(
        "DjcSN7X3Kkyt49iAAhnv1A:4NDljZ20fUuo6IPCBAGRiA",
        callContext.id,
      );
      return OS.Flow.executeAsyncFlow(function () {
        OutSystemsDebugger.handleBreakpoint(
          "DjcSN7X3Kkyt49iAAhnv1A:PibezPhPoUKR+OUNLpeJnw",
          callContext.id,
        );
        // Trigger Event: Save_Note
        return controller
          .save_Note$Action(model.variables.bookmarkNoteIn, callContext)
          .then(function () {
            OutSystemsDebugger.handleBreakpoint(
              "DjcSN7X3Kkyt49iAAhnv1A:vDBY27TuSEeSHcxv6y+q0w",
              callContext.id,
            );
            // BookmarkNote.Note = ""
            model.variables.bookmarkNoteIn.noteAttr = "";
            OutSystemsDebugger.handleBreakpoint(
              "DjcSN7X3Kkyt49iAAhnv1A:vDBY27TuSEeSHcxv6y+q0w",
              callContext.id,
              OutSystemsDebugger.BreakpointType.BetweenAssignments,
              "2",
            );
            // BookmarkNote.BookmarkId = 0
            model.variables.bookmarkNoteIn.bookmarkIdAttr =
              OS.BuiltinFunctions.integerToLongInteger(0);
            OutSystemsDebugger.handleBreakpoint(
              "DjcSN7X3Kkyt49iAAhnv1A:YNKdYb9cDkmrDRXtDLvBwg",
              callContext.id,
            );
          });
      })
        .then(function (res) {
          OutSystemsDebugger.pop(
            "DjcSN7X3Kkyt49iAAhnv1A:ba9K7KANUk+JQ+0OQwRXCA",
            callContext.id,
          );
          return res;
        })
        .catch(function (ex) {
          OutSystemsDebugger.handleException(ex, callContext.id);
          OutSystemsDebugger.pop(
            "DjcSN7X3Kkyt49iAAhnv1A:ba9K7KANUk+JQ+0OQwRXCA",
            callContext.id,
          );
          throw ex;
        });
    };

    Controller.prototype.onParametersChanged$Action = function (callContext) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(
        controller._onParametersChanged$Action,
        callContext,
      );
    };
    Controller.prototype.discardNote$Action = function (callContext) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(
        controller._discardNote$Action,
        callContext,
      );
    };
    Controller.prototype.textArea_NoteOnFocus$Action = function (callContext) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(
        controller._textArea_NoteOnFocus$Action,
        callContext,
      );
    };
    Controller.prototype.saveNote$Action = function (callContext) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(
        controller._saveNote$Action,
        callContext,
      );
    };
    Controller.prototype.save_Note$Action = function () {
      return Promise.resolve();
    };

    // Event Handler Actions
    Controller.prototype.pushDebuggerContext = function (callContext) {
      var varBag = {};
      OutSystemsDebugger.push(
        "DjcSN7X3Kkyt49iAAhnv1A:ozEroREZXUy42SBfp3+baQ:/NRWebFlows.ozEroREZXUy42SBfp3+baQ:zcC157Ezm7Xa9m0F9ps9eQ",
        "Connect2_LegacyShared",
        "MyBookmarks",
        "NRFlows.WebFlow",
        callContext.id,
        varBag,
      );
      OutSystemsDebugger.push(
        "DjcSN7X3Kkyt49iAAhnv1A:nb2mOAqbxku8N+w_keVWKg:/NRWebFlows.ozEroREZXUy42SBfp3+baQ/NodesShownInESpaceTree.nb2mOAqbxku8N+w_keVWKg:Vkd80O8LZ21IRmkQjU8OHw",
        "Connect2_LegacyShared",
        "BookmarkNoteAddEdit",
        "NRNodes.WebBlock",
        callContext.id,
        varBag,
      );
    };
    Controller.prototype.popDebuggerContext = function (callContext) {
      OutSystemsDebugger.pop(
        "DjcSN7X3Kkyt49iAAhnv1A:nb2mOAqbxku8N+w_keVWKg",
        callContext.id,
      );
      OutSystemsDebugger.pop(
        "DjcSN7X3Kkyt49iAAhnv1A:ozEroREZXUy42SBfp3+baQ",
        callContext.id,
      );
    };
    Controller.prototype.onInitializeEventHandler = null;
    Controller.prototype.onReadyEventHandler = null;
    Controller.prototype.onRenderEventHandler = null;
    Controller.prototype.onDestroyEventHandler = null;
    Controller.prototype.onParametersChangedEventHandler = function (
      callContext,
    ) {
      var controller = this.controller;
      var model = this.model;
      var idService = this.idService;

      return OS.Flow.tryFinally(
        function () {
          var varBag = {};
          controller.pushDebuggerContext(callContext);

          OutSystemsDebugger.setThreadStartName(
            callContext.id,
            "MyBookmarks/BookmarkNoteAddEdit On Parameters Changed",
          );
          return controller.onParametersChanged$Action(callContext);
        },
        function () {
          controller.popDebuggerContext(callContext);
        },
      );
    };
    Controller.prototype.handleError = function (ex) {
      return controller.handleError(ex);
    };
    Controller.checkPermissions = function () {};
    Controller.prototype.getDefaultTimeout = function () {
      return Connect2_LegacySharedController.default.defaultTimeout;
    };
    return Controller;
  })(OS.Controller.BaseViewController);
  return new OS.Controller.ControllerFactory(
    Controller,
    Connect2_LegacySharedLanguageResources,
  );
});
define("Connect2_LegacyShared.MyBookmarks.BookmarkNoteAddEdit.mvc$controller.TextArea_NoteOnFocus.JavaScript1JS", [], function () {
  return function ($parameters, $actions, $roles, $public) {
    document
      .getElementById($parameters.TextAreaNoteId)
      .addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
        }
      });
  };
});

define("Connect2_LegacyShared.MyBookmarks.BookmarkNoteAddEdit.mvc$debugger", [
  "exports",
  "OutSystems/ClientRuntime/Debugger",
  "OutSystems/ClientRuntime/Main",
], function (exports, Debugger, OutSystems) {
  var OS = OutSystems.Internal;
  var metaInfo = {
    "65HcvLX0tkuyZyOUF+APfg": {
      getter: function (varBag, idService) {
        return varBag.javaScript1JSResult.value;
      },
    },
    "JxX4vCFZzkm52hGLlD+LbA": {
      getter: function (varBag, idService) {
        return varBag.model.variables.in_NoteVar;
      },
      dataType: OS.DataTypes.DataTypes.Text,
    },
    gDESO39ujkGOmfhWm3VemA: {
      getter: function (varBag, idService) {
        return varBag.model.variables.bookmarkNoteIn;
      },
    },
    "3_V2UlgGdEeP_qtTRU9MUw": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("DialogHeader"));
        })(varBag.model, idService);
      },
    },
    "4gHyh5o8WUKwj_wIPqRunQ": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("DialogBody"));
        })(varBag.model, idService);
      },
    },
    fFoLK1WulkKMcme1JrHn1w: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("TextArea_Note"));
        })(varBag.model, idService);
      },
    },
    "7GfelgtsMk67_qWDqp_bSg": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("ButtonLabel_Confirm"));
        })(varBag.model, idService);
      },
    },
    iXbhTqjIcUW4mgPFqptALw: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("ButtonLabel_Dismiss"));
        })(varBag.model, idService);
      },
    },
  };
  OutSystemsDebugger.registerMetaInfo(metaInfo);
});
