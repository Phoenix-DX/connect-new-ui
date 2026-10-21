define("Connect2_LegacyShared.Share.ContextMenu.mvc$model", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_LegacyShared.model",
  "Connect2_LegacyShared.Utility.ItemOptionsMenu.mvc$model",
], function (
  OutSystems,
  Connect2_LegacySharedModel,
  Connect2_LegacyShared_Utility_ItemOptionsMenu_mvcModel,
) {
  var OS = OutSystems.Internal;

  var VariablesRecord = (function (_super) {
    __extends(VariablesRecord, _super);
    function VariablesRecord(defaults) {
      _super.apply(this, arguments);
    }
    VariablesRecord.attributesToDeclare = function () {
      return [
        this.attr(
          "IsBookmarked",
          "isBookmarkedIn",
          "IsBookmarked",
          true,
          false,
          OS.DataTypes.DataTypes.Boolean,
          function () {
            return false;
          },
          false,
        ),
        this.attr(
          "_isBookmarkedInDataFetchStatus",
          "_isBookmarkedInDataFetchStatus",
          "_isBookmarkedInDataFetchStatus",
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return /*Fetched*/ 1;
          },
          false,
        ),
        this.attr(
          "IsRecordAvailable",
          "isRecordAvailableIn",
          "IsRecordAvailable",
          true,
          false,
          OS.DataTypes.DataTypes.Boolean,
          function () {
            return true;
          },
          false,
        ),
        this.attr(
          "_isRecordAvailableInDataFetchStatus",
          "_isRecordAvailableInDataFetchStatus",
          "_isRecordAvailableInDataFetchStatus",
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return /*Fetched*/ 1;
          },
          false,
        ),
        this.attr(
          "ShowGift",
          "showGiftIn",
          "ShowGift",
          true,
          false,
          OS.DataTypes.DataTypes.Boolean,
          function () {
            return false;
          },
          false,
        ),
        this.attr(
          "_showGiftInDataFetchStatus",
          "_showGiftInDataFetchStatus",
          "_showGiftInDataFetchStatus",
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
      return {};
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
    Model._hasValidationWidgetsValue = undefined;
    Object.defineProperty(Model, "hasValidationWidgets", {
      enumerable: true,
      configurable: true,
      get: function () {
        if (Model._hasValidationWidgetsValue === undefined) {
          Model._hasValidationWidgetsValue =
            Connect2_LegacyShared_Utility_ItemOptionsMenu_mvcModel.hasValidationWidgets;
        }

        return Model._hasValidationWidgetsValue;
      },
    });

    Model.prototype.setInputs = function (inputs) {
      if ("IsBookmarked" in inputs) {
        this.variables.isBookmarkedIn = inputs.IsBookmarked;
        if ("_isBookmarkedInDataFetchStatus" in inputs) {
          this.variables._isBookmarkedInDataFetchStatus =
            inputs._isBookmarkedInDataFetchStatus;
        }
      }

      if ("IsRecordAvailable" in inputs) {
        this.variables.isRecordAvailableIn = inputs.IsRecordAvailable;
        if ("_isRecordAvailableInDataFetchStatus" in inputs) {
          this.variables._isRecordAvailableInDataFetchStatus =
            inputs._isRecordAvailableInDataFetchStatus;
        }
      }

      if ("ShowGift" in inputs) {
        this.variables.showGiftIn = inputs.ShowGift;
        if ("_showGiftInDataFetchStatus" in inputs) {
          this.variables._showGiftInDataFetchStatus =
            inputs._showGiftInDataFetchStatus;
        }
      }
    };
    return Model;
  })(OS.Model.BaseViewModel);
  return new OS.Model.ModelFactory(Model, "Share.ContextMenu");
});
define("Connect2_LegacyShared.Share.ContextMenu.mvc$view", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_LegacyShared.model",
  "Connect2_LegacyShared.controller",
  "react",
  "OutSystems/ReactView/Main",
  "Connect2_LegacyShared.Share.ContextMenu.mvc$model",
  "Connect2_LegacyShared.Share.ContextMenu.mvc$controller",
  "Connect2_LegacyShared.clientVariables",
  "Connect2_LegacyShared.Utility.ItemOptionsMenu.mvc$view",
  "OutSystems/ReactWidgets/Main",
], function (
  OutSystems,
  Connect2_LegacySharedModel,
  Connect2_LegacySharedController,
  React,
  OSView,
  Connect2_LegacyShared_Share_ContextMenu_mvc_model,
  Connect2_LegacyShared_Share_ContextMenu_mvc_controller,
  Connect2_LegacySharedClientVariables,
  Connect2_LegacyShared_Utility_ItemOptionsMenu_mvc_view,
  OSWidgets,
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
    View.displayName = "Share.ContextMenu";
    View.getCssDependencies = function () {
      return ["css/OutSystemsReactWidgets.css"];
    };
    View.getJsDependencies = function () {
      return [];
    };
    View.getBlocks = function () {
      return [Connect2_LegacyShared_Utility_ItemOptionsMenu_mvc_view];
    };
    Object.defineProperty(View.prototype, "modelFactory", {
      get: function () {
        return Connect2_LegacyShared_Share_ContextMenu_mvc_model;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(View.prototype, "controllerFactory", {
      get: function () {
        return Connect2_LegacyShared_Share_ContextMenu_mvc_controller;
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
          Connect2_LegacyShared_Utility_ItemOptionsMenu_mvc_view,
          {
            inputs: {
              IsShareImplemented: true,
              In_IsBookmarked: model.variables.isBookmarkedIn,
              _in_IsBookmarkedInDataFetchStatus:
                OS.Model.calculateDataFetchStatus(
                  model.variables._isBookmarkedInDataFetchStatus,
                ),
              ShowGift: model.variables.showGiftIn,
              _showGiftInDataFetchStatus: OS.Model.calculateDataFetchStatus(
                model.variables._showGiftInDataFetchStatus,
              ),
              In_IsRecordAvailable: model.variables.isRecordAvailableIn,
              _in_IsRecordAvailableInDataFetchStatus:
                OS.Model.calculateDataFetchStatus(
                  model.variables._isRecordAvailableInDataFetchStatus,
                ),
            },
            events: {
              _handleError: function (ex) {
                controller.handleError(ex);
              },
              onSendGift$Action: function () {
                var eventHandlerContext = callContext.clone();
                return OS.Flow.tryFinally(
                  function () {
                    var varBag = {};
                    controller.pushDebuggerContext(eventHandlerContext);

                    OutSystemsDebugger.setThreadStartName(
                      eventHandlerContext.id,
                      "Utility/ItemOptionsMenu OnSendGift",
                    );
                    controller.onSendGift$Action(
                      controller.callContext(eventHandlerContext),
                    );
                  },
                  function () {
                    controller.popDebuggerContext(eventHandlerContext);
                  },
                );
              },
              bookmarkToggle$Action: function (isItemBookmarkedIn) {
                var eventHandlerContext = callContext.clone();
                return OS.Flow.tryFinally(
                  function () {
                    var varBag = {};
                    controller.pushDebuggerContext(eventHandlerContext);

                    OutSystemsDebugger.setThreadStartName(
                      eventHandlerContext.id,
                      "Utility/ItemOptionsMenu BookmarkToggle",
                    );
                    controller.bookmarkButtonClicked$Action(
                      isItemBookmarkedIn,
                      controller.callContext(eventHandlerContext),
                    );
                  },
                  function () {
                    controller.popDebuggerContext(eventHandlerContext);
                  },
                );
              },
              onShareToOthers$Action: function () {
                var eventHandlerContext = callContext.clone();
                return OS.Flow.tryFinally(
                  function () {
                    var varBag = {};
                    controller.pushDebuggerContext(eventHandlerContext);

                    OutSystemsDebugger.setThreadStartName(
                      eventHandlerContext.id,
                      "Utility/ItemOptionsMenu OnShareToOthers",
                    );
                    controller.shareProfileToOthers$Action(
                      controller.callContext(eventHandlerContext),
                    );
                  },
                  function () {
                    controller.popDebuggerContext(eventHandlerContext);
                  },
                );
              },
              onShareToConnect$Action: function () {
                var eventHandlerContext = callContext.clone();
                return OS.Flow.tryFinally(
                  function () {
                    var varBag = {};
                    controller.pushDebuggerContext(eventHandlerContext);

                    OutSystemsDebugger.setThreadStartName(
                      eventHandlerContext.id,
                      "Utility/ItemOptionsMenu OnShareToConnect",
                    );
                    controller.shareProfileToConnect$Action(
                      controller.callContext(eventHandlerContext),
                    );
                  },
                  function () {
                    controller.popDebuggerContext(eventHandlerContext);
                  },
                );
              },
            },
            _validationProps: {
              validationService: validationService,
            },
            _idProps: {
              service: idService,
              uuid: "0",
              alias: "1",
            },
            _widgetRecordProvider: widgetsRecordProvider,
            placeholders: {
              anchor_Placeholder: new PlaceholderContent(function () {
                return [
                  React.createElement(OSWidgets.Placeholder, {
                    align: /*Default*/ 0,
                    content: _this.props.placeholders.anchorPlaceHolder,
                    _idProps: {
                      service: idService,
                      name: "AnchorPlaceHolder",
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                  }),
                ];
              }),
            },
          },
        ),
      );
    };
    return View;
  })(OSView.BaseView.BaseWebBlock);

  return View;
});
define("Connect2_LegacyShared.Share.ContextMenu.mvc$controller", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_LegacyShared.model",
  "Connect2_LegacyShared.controller",
  "Connect2_LegacyShared.languageResources",
  "Connect2_LegacyShared.clientVariables",
  "Connect2_LegacyShared.Share.ContextMenu.mvc$debugger",
], function (
  OutSystems,
  Connect2_LegacySharedModel,
  Connect2_LegacySharedController,
  Connect2_LegacySharedLanguageResources,
  Connect2_LegacySharedClientVariables,
  Connect2_LegacyShared_Share_ContextMenu_mvc_Debugger,
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

    Controller.prototype.shareProfileToConnect$Action = function () {
      return Promise.resolve();
    };
    Controller.prototype.bookmarkButtonClicked$Action = function () {
      return Promise.resolve();
    };
    Controller.prototype.onSendGift$Action = function () {
      return Promise.resolve();
    };
    Controller.prototype.shareProfileToOthers$Action = function () {
      return Promise.resolve();
    };

    // Event Handler Actions
    Controller.prototype.pushDebuggerContext = function (callContext) {
      var varBag = {};
      OutSystemsDebugger.push(
        "DjcSN7X3Kkyt49iAAhnv1A:u_idVCh1KEOqtPO6zddp2w:/NRWebFlows.u_idVCh1KEOqtPO6zddp2w:ZpXc5Ofcw7GTHLG7_3Sl2A",
        "Connect2_LegacyShared",
        "Share",
        "NRFlows.WebFlow",
        callContext.id,
        varBag,
      );
      OutSystemsDebugger.push(
        "DjcSN7X3Kkyt49iAAhnv1A:gMV3wf03yEae48sR7vm9jg:/NRWebFlows.u_idVCh1KEOqtPO6zddp2w/NodesShownInESpaceTree.gMV3wf03yEae48sR7vm9jg:OP2sHDH07G9NQMsSZphb8Q",
        "Connect2_LegacyShared",
        "ContextMenu",
        "NRNodes.WebBlock",
        callContext.id,
        varBag,
      );
    };
    Controller.prototype.popDebuggerContext = function (callContext) {
      OutSystemsDebugger.pop(
        "DjcSN7X3Kkyt49iAAhnv1A:gMV3wf03yEae48sR7vm9jg",
        callContext.id,
      );
      OutSystemsDebugger.pop(
        "DjcSN7X3Kkyt49iAAhnv1A:u_idVCh1KEOqtPO6zddp2w",
        callContext.id,
      );
    };
    Controller.prototype.onInitializeEventHandler = null;
    Controller.prototype.onReadyEventHandler = null;
    Controller.prototype.onRenderEventHandler = null;
    Controller.prototype.onDestroyEventHandler = null;
    Controller.prototype.onParametersChangedEventHandler = null;
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

define("Connect2_LegacyShared.Share.ContextMenu.mvc$debugger", [
  "exports",
  "OutSystems/ClientRuntime/Debugger",
  "OutSystems/ClientRuntime/Main",
], function (exports, Debugger, OutSystems) {
  var OS = OutSystems.Internal;
  var metaInfo = {
    HLfQsGbwKke3Zp0qp7V7FQ: {
      getter: function (varBag, idService) {
        return varBag.model.variables.isBookmarkedIn;
      },
      dataType: OS.DataTypes.DataTypes.Boolean,
    },
    jlUXiFA4SUyOxsD271R6ng: {
      getter: function (varBag, idService) {
        return varBag.model.variables.isRecordAvailableIn;
      },
      dataType: OS.DataTypes.DataTypes.Boolean,
    },
    "GiHq0TU1sEiV1q+daxE26A": {
      getter: function (varBag, idService) {
        return varBag.model.variables.showGiftIn;
      },
      dataType: OS.DataTypes.DataTypes.Boolean,
    },
    "oyMej3Y080+fl6_UhDoibw": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Anchor_Placeholder"));
        })(varBag.model, idService);
      },
    },
    "v_7rRIZ6Eke3bY+H20PW_Q": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("AnchorPlaceHolder"));
        })(varBag.model, idService);
      },
    },
  };
  OutSystemsDebugger.registerMetaInfo(metaInfo);
});
