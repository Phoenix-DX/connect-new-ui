define("NavigationHandler.ScrollAnchors.FocusScrollAnchorOnBack.mvc$model", [
  "OutSystems/ClientRuntime/Main",
  "NavigationHandler.model",
  "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$model",
], function (
  OutSystems,
  NavigationHandlerModel,
  NavigationHandler_NavigationHandler_BackNavigationHandler_mvcModel,
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
          "ListIndex",
          "listIndexIn",
          "ListIndex",
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return 0;
          },
          false,
        ),
        this.attr(
          "_listIndexInDataFetchStatus",
          "_listIndexInDataFetchStatus",
          "_listIndexInDataFetchStatus",
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return /*Fetched*/ 1;
          },
          false,
        ),
        this.attr(
          "ScrollAnchorId",
          "scrollAnchorIdIn",
          "ScrollAnchorId",
          true,
          false,
          OS.DataTypes.DataTypes.Text,
          function () {
            return "";
          },
          false,
        ),
        this.attr(
          "_scrollAnchorIdInDataFetchStatus",
          "_scrollAnchorIdInDataFetchStatus",
          "_scrollAnchorIdInDataFetchStatus",
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
            NavigationHandler_NavigationHandler_BackNavigationHandler_mvcModel.hasValidationWidgets;
        }

        return Model._hasValidationWidgetsValue;
      },
    });

    Model.prototype.setInputs = function (inputs) {
      if ("ListIndex" in inputs) {
        this.variables.listIndexIn = inputs.ListIndex;
        if ("_listIndexInDataFetchStatus" in inputs) {
          this.variables._listIndexInDataFetchStatus =
            inputs._listIndexInDataFetchStatus;
        }
      }

      if ("ScrollAnchorId" in inputs) {
        this.variables.scrollAnchorIdIn = inputs.ScrollAnchorId;
        if ("_scrollAnchorIdInDataFetchStatus" in inputs) {
          this.variables._scrollAnchorIdInDataFetchStatus =
            inputs._scrollAnchorIdInDataFetchStatus;
        }
      }
    };
    return Model;
  })(OS.Model.BaseViewModel);
  return new OS.Model.ModelFactory(
    Model,
    "ScrollAnchors.FocusScrollAnchorOnBack",
  );
});
define("NavigationHandler.ScrollAnchors.FocusScrollAnchorOnBack.mvc$view", [
  "OutSystems/ClientRuntime/Main",
  "NavigationHandler.model",
  "NavigationHandler.controller",
  "react",
  "OutSystems/ReactView/Main",
  "NavigationHandler.ScrollAnchors.FocusScrollAnchorOnBack.mvc$model",
  "NavigationHandler.ScrollAnchors.FocusScrollAnchorOnBack.mvc$controller",
  "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$view",
  "OutSystems/ReactWidgets/Main",
], function (
  OutSystems,
  NavigationHandlerModel,
  NavigationHandlerController,
  React,
  OSView,
  NavigationHandler_ScrollAnchors_FocusScrollAnchorOnBack_mvc_model,
  NavigationHandler_ScrollAnchors_FocusScrollAnchorOnBack_mvc_controller,
  NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view,
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
    View.displayName = "ScrollAnchors.FocusScrollAnchorOnBack";
    View.getCssDependencies = function () {
      return ["css/OutSystemsReactWidgets.css"];
    };
    View.getJsDependencies = function () {
      return [];
    };
    View.getBlocks = function () {
      return [
        NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view,
      ];
    };
    Object.defineProperty(View.prototype, "modelFactory", {
      get: function () {
        return NavigationHandler_ScrollAnchors_FocusScrollAnchorOnBack_mvc_model;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(View.prototype, "controllerFactory", {
      get: function () {
        return NavigationHandler_ScrollAnchors_FocusScrollAnchorOnBack_mvc_controller;
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
        $if(
          false,
          false,
          this,
          function () {
            return [];
          },
          function () {
            return [
              React.createElement(
                NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view,
                {
                  inputs: {
                    Priority: -1,
                  },
                  events: {
                    _handleError: function (ex) {
                      controller.handleError(ex);
                    },
                    backNavigation$Action: function (backNavigationEventIn) {
                      return Promise.resolve().then(function () {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(
                          function () {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(
                              eventHandlerContext.id,
                              "NavigationHandler/BackNavigationHandler BackNavigation",
                            );
                            return controller.onBackNavigation$Action(
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
                    uuid: "0",
                    alias: "1",
                  },
                  _widgetRecordProvider: widgetsRecordProvider,
                  _dependencies: [],
                },
              ),
            ];
          },
        ),
      );
    };
    return View;
  })(OSView.BaseView.BaseWebBlock);

  return View;
});
define("NavigationHandler.ScrollAnchors.FocusScrollAnchorOnBack.mvc$controller", [
  "OutSystems/ClientRuntime/Main",
  "NavigationHandler.model",
  "NavigationHandler.controller",
  "NavigationHandler.languageResources",
  "NavigationHandler.ScrollAnchors.FocusScrollAnchorOnBack.mvc$debugger",
  "NavigationHandler.ScrollAnchors.FocusScrollAnchorOnBack.mvc$controller.OnBackNavigation.SetScrollAnchorOnNavigationStorageJS",
], function (
  OutSystems,
  NavigationHandlerModel,
  NavigationHandlerController,
  NavigationHandlerLanguageResources,
  NavigationHandler_ScrollAnchors_FocusScrollAnchorOnBack_mvc_Debugger,
  NavigationHandler_ScrollAnchors_FocusScrollAnchorOnBack_mvc_controller_OnBackNavigation_SetScrollAnchorOnNavigationStorageJS,
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
    Controller.prototype._onBackNavigation$Action = function (callContext) {
      var varBag = {};
      var model = this.model;
      var controller = this.controller;
      var idService = this.idService;
      varBag.model = model;
      varBag.idService = idService;
      controller.ensureControllerAlive("OnBackNavigation");
      callContext = controller.callContext(callContext);
      varBag.callContext = callContext;
      OutSystemsDebugger.push(
        "wQiaiMpsYkOl7D4DOqcT3A:rfLXuYLIDkqY3WTOur1l7A:/NRWebFlows.dvawmcZh2UeW7QDlpK16cg/NodesShownInESpaceTree.R0IWAuQ58EC85cTu+2SU0w/ClientActions.rfLXuYLIDkqY3WTOur1l7A:GSvTj9Ef5PNZhsUc3bDwhQ",
        "NavigationHandler",
        "OnBackNavigation",
        "NRFlows.ClientScreenActionFlow",
        callContext.id,
        varBag,
      );
      OutSystemsDebugger.handleBreakpoint(
        "wQiaiMpsYkOl7D4DOqcT3A:EnJAkyUXQE++tr2Ndu3nkA",
        callContext.id,
      );
      return OS.Flow.executeAsyncFlow(function () {
        if (
          OutSystemsDebugger.handleBreakpoint(
            "wQiaiMpsYkOl7D4DOqcT3A:4yVuRcTbdk27qzKr3Q1Ljw",
            callContext.id,
          ) &&
          model.variables.listIndexIn >= 0 &&
          model.variables.scrollAnchorIdIn !== ""
        ) {
          OutSystemsDebugger.handleBreakpoint(
            "wQiaiMpsYkOl7D4DOqcT3A:bBSHVkwSxUifqf8y+85xNg",
            callContext.id,
          );
          controller.safeExecuteJSNode(
            NavigationHandler_ScrollAnchors_FocusScrollAnchorOnBack_mvc_controller_OnBackNavigation_SetScrollAnchorOnNavigationStorageJS,
            "SetScrollAnchorOnNavigationStorage",
            "OnBackNavigation",
            {
              ListIndex: OS.DataConversion.JSNodeParamConverter.to(
                model.variables.listIndexIn,
                OS.DataTypes.DataTypes.Integer,
              ),
              ScrollAnchorId: OS.DataConversion.JSNodeParamConverter.to(
                model.variables.scrollAnchorIdIn,
                OS.DataTypes.DataTypes.Text,
              ),
            },
            function ($parameters) {},
            {},
            {},
          );
        }

        OutSystemsDebugger.handleBreakpoint(
          "wQiaiMpsYkOl7D4DOqcT3A:MUAUZ1GNGEOUSwUI54b98g",
          callContext.id,
        );
        // Trigger Event: BackNavigation
        return controller.backNavigation$Action(callContext).then(function () {
          OutSystemsDebugger.handleBreakpoint(
            "wQiaiMpsYkOl7D4DOqcT3A:1snZH3Kg60qsYjFu_YbquA",
            callContext.id,
          );
        });
      })
        .then(function (res) {
          OutSystemsDebugger.pop(
            "wQiaiMpsYkOl7D4DOqcT3A:rfLXuYLIDkqY3WTOur1l7A",
            callContext.id,
          );
          return res;
        })
        .catch(function (ex) {
          OutSystemsDebugger.handleException(ex, callContext.id);
          OutSystemsDebugger.pop(
            "wQiaiMpsYkOl7D4DOqcT3A:rfLXuYLIDkqY3WTOur1l7A",
            callContext.id,
          );
          throw ex;
        });
    };

    Controller.prototype.onBackNavigation$Action = function (callContext) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(
        controller._onBackNavigation$Action,
        callContext,
      );
    };
    Controller.prototype.backNavigation$Action = function () {
      return Promise.resolve();
    };

    // Event Handler Actions
    Controller.prototype.pushDebuggerContext = function (callContext) {
      var varBag = {};
      OutSystemsDebugger.push(
        "wQiaiMpsYkOl7D4DOqcT3A:dvawmcZh2UeW7QDlpK16cg:/NRWebFlows.dvawmcZh2UeW7QDlpK16cg:g_mS2C2ntGaKScoRgzUSeA",
        "NavigationHandler",
        "ScrollAnchors",
        "NRFlows.WebFlow",
        callContext.id,
        varBag,
      );
      OutSystemsDebugger.push(
        "wQiaiMpsYkOl7D4DOqcT3A:R0IWAuQ58EC85cTu+2SU0w:/NRWebFlows.dvawmcZh2UeW7QDlpK16cg/NodesShownInESpaceTree.R0IWAuQ58EC85cTu+2SU0w:3UbQWp9Qu5CDRAV6YyQuQg",
        "NavigationHandler",
        "FocusScrollAnchorOnBack",
        "NRNodes.WebBlock",
        callContext.id,
        varBag,
      );
    };
    Controller.prototype.popDebuggerContext = function (callContext) {
      OutSystemsDebugger.pop(
        "wQiaiMpsYkOl7D4DOqcT3A:R0IWAuQ58EC85cTu+2SU0w",
        callContext.id,
      );
      OutSystemsDebugger.pop(
        "wQiaiMpsYkOl7D4DOqcT3A:dvawmcZh2UeW7QDlpK16cg",
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
      return NavigationHandlerController.default.defaultTimeout;
    };
    return Controller;
  })(OS.Controller.BaseViewController);
  return new OS.Controller.ControllerFactory(
    Controller,
    NavigationHandlerLanguageResources,
  );
});
define("NavigationHandler.ScrollAnchors.FocusScrollAnchorOnBack.mvc$controller.OnBackNavigation.SetScrollAnchorOnNavigationStorageJS", [], function () {
  return function ($parameters, $actions, $roles, $public) {
    window.dx.Navigation.Storage = window.dx.Navigation.Storage || new Map();
    window.dx.Navigation.Storage.set("dx-entering-scroll-anchor", {
      id: $parameters.ScrollAnchorId,
      index: $parameters.ListIndex,
    });
  };
});

define("NavigationHandler.ScrollAnchors.FocusScrollAnchorOnBack.mvc$debugger", [
  "exports",
  "OutSystems/ClientRuntime/Debugger",
  "OutSystems/ClientRuntime/Main",
], function (exports, Debugger, OutSystems) {
  var OS = OutSystems.Internal;
  var metaInfo = {
    "bBSHVkwSxUifqf8y+85xNg": {
      getter: function (varBag, idService) {
        return varBag.setScrollAnchorOnNavigationStorageJSResult.value;
      },
    },
    EcfGUAs5N0OdJ9sbdPcM8Q: {
      getter: function (varBag, idService) {
        return varBag.model.variables.listIndexIn;
      },
      dataType: OS.DataTypes.DataTypes.Integer,
    },
    tyVeuc3rZkus5AddztNiaw: {
      getter: function (varBag, idService) {
        return varBag.model.variables.scrollAnchorIdIn;
      },
      dataType: OS.DataTypes.DataTypes.Text,
    },
  };
  OutSystemsDebugger.registerMetaInfo(metaInfo);
});
