define("Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivisionList_Skelet.mvc$model", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_Assemble_MUI.model",
  "Connect2_LegacyShared.NewConnect_Skeleton.NC_Card_Item_Text__Skeleton.mvc$model",
  "Connect2_LegacyShared.NewConnect_Skeleton.NC_Result_Item__Image__Skeleton.mvc$model",
], function (
  OutSystems,
  Connect2_Assemble_MUIModel,
  Connect2_LegacyShared_NewConnect_Skeleton_NC_Card_Item_Text__Skeleton_mvcModel,
  Connect2_LegacyShared_NewConnect_Skeleton_NC_Result_Item__Image__Skeleton_mvcModel,
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
          "SkeletonList",
          "skeletonListVar",
          "SkeletonList",
          true,
          false,
          OS.DataTypes.DataTypes.RecordList,
          function () {
            return OS.DataTypes.ImmutableBase.getData(
              new OS.DataTypes.IntegerList(),
            );
          },
          false,
          OS.DataTypes.IntegerList,
        ),
        this.attr(
          "Iterator",
          "iteratorVar",
          "Iterator",
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return 0;
          },
          false,
        ),
        this.attr(
          "SkeletonListLength",
          "skeletonListLengthIn",
          "SkeletonListLength",
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return 0;
          },
          false,
        ),
        this.attr(
          "_skeletonListLengthInDataFetchStatus",
          "_skeletonListLengthInDataFetchStatus",
          "_skeletonListLengthInDataFetchStatus",
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
            Connect2_LegacyShared_NewConnect_Skeleton_NC_Card_Item_Text__Skeleton_mvcModel.hasValidationWidgets ||
            Connect2_LegacyShared_NewConnect_Skeleton_NC_Result_Item__Image__Skeleton_mvcModel.hasValidationWidgets;
        }

        return Model._hasValidationWidgetsValue;
      },
    });

    Model.prototype.setInputs = function (inputs) {
      if ("SkeletonListLength" in inputs) {
        this.variables.skeletonListLengthIn = inputs.SkeletonListLength;
        if ("_skeletonListLengthInDataFetchStatus" in inputs) {
          this.variables._skeletonListLengthInDataFetchStatus =
            inputs._skeletonListLengthInDataFetchStatus;
        }
      }
    };
    return Model;
  })(OS.Model.BaseViewModel);
  return new OS.Model.ModelFactory(
    Model,
    "Assemble.AssembleEventDetail_AttendeeSubdivisionList_Skelet",
  );
});
define("Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivisionList_Skelet.mvc$view", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_Assemble_MUI.model",
  "Connect2_Assemble_MUI.controller",
  "react",
  "OutSystems/ReactView/Main",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivisionList_Skelet.mvc$model",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivisionList_Skelet.mvc$controller",
  "OutSystems/ReactWidgets/Main",
  "Connect2_LegacyShared.NewConnect_Skeleton.NC_Card_Item_Text__Skeleton.mvc$view",
  "Connect2_LegacyShared.NewConnect_Skeleton.NC_Result_Item__Image__Skeleton.mvc$view",
], function (
  OutSystems,
  Connect2_Assemble_MUIModel,
  Connect2_Assemble_MUIController,
  React,
  OSView,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_AttendeeSubdivisionList_Skelet_mvc_model,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_AttendeeSubdivisionList_Skelet_mvc_controller,
  OSWidgets,
  Connect2_LegacyShared_NewConnect_Skeleton_NC_Card_Item_Text__Skeleton_mvc_view,
  Connect2_LegacyShared_NewConnect_Skeleton_NC_Result_Item__Image__Skeleton_mvc_view,
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
    View.displayName =
      "Assemble.AssembleEventDetail_AttendeeSubdivisionList_Skelet";
    View.getCssDependencies = function () {
      return ["css/OutSystemsReactWidgets.css"];
    };
    View.getJsDependencies = function () {
      return [];
    };
    View.getBlocks = function () {
      return [
        Connect2_LegacyShared_NewConnect_Skeleton_NC_Card_Item_Text__Skeleton_mvc_view,
        Connect2_LegacyShared_NewConnect_Skeleton_NC_Result_Item__Image__Skeleton_mvc_view,
      ];
    };
    Object.defineProperty(View.prototype, "modelFactory", {
      get: function () {
        return Connect2_Assemble_MUI_Assemble_AssembleEventDetail_AttendeeSubdivisionList_Skelet_mvc_model;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(View.prototype, "controllerFactory", {
      get: function () {
        return Connect2_Assemble_MUI_Assemble_AssembleEventDetail_AttendeeSubdivisionList_Skelet_mvc_controller;
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
            gridProperties: {
              classes: "ThemeGrid_Width4",
            },
            style: "margin-bottom-base",
            visible: true,
            _idProps: {
              service: idService,
              uuid: "0",
            },
            _widgetRecordProvider: widgetsRecordProvider,
          },
          React.createElement(
            Connect2_LegacyShared_NewConnect_Skeleton_NC_Card_Item_Text__Skeleton_mvc_view,
            {
              inputs: {},
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
                uuid: "1",
                alias: "1",
              },
              _widgetRecordProvider: widgetsRecordProvider,
              _dependencies: [],
            },
          ),
        ),
        React.createElement(OSWidgets.List, {
          animateItems: true,
          gridProperties: {
            classes: "OSFillParent",
          },
          mode: /*Default*/ 0,
          source: model.variables.skeletonListVar,
          style: "list list-group margin-bottom-s",
          tag: "div",
          _idProps: {
            service: idService,
            uuid: "2",
          },
          _widgetRecordProvider: widgetsRecordProvider,
          placeholders: {
            content: new IteratorPlaceholderContent(
              function (idService, callContext) {
                return [
                  React.createElement(
                    OSWidgets.Container,
                    {
                      align: /*Default*/ 0,
                      animate: false,
                      style: "padding-bottom-s",
                      visible: true,
                      _idProps: {
                        service: idService,
                        uuid: "3",
                      },
                      _widgetRecordProvider: widgetsRecordProvider,
                      _dependencies: [],
                    },
                    React.createElement(
                      Connect2_LegacyShared_NewConnect_Skeleton_NC_Result_Item__Image__Skeleton_mvc_view,
                      {
                        inputs: {
                          In_IsRoundImage: true,
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
                          uuid: "4",
                          alias: "2",
                        },
                        _widgetRecordProvider: widgetsRecordProvider,
                        _dependencies: [],
                      },
                    ),
                  ),
                ];
              },
              callContext,
              idService,
              "1",
            ),
          },
          _dependencies: [],
        }),
      );
    };
    return View;
  })(OSView.BaseView.BaseWebBlock);

  return View;
});
define("Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivisionList_Skelet.mvc$controller", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_Assemble_MUI.model",
  "Connect2_Assemble_MUI.controller",
  "Connect2_Assemble_MUI.languageResources",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivisionList_Skelet.mvc$debugger",
], function (
  OutSystems,
  Connect2_Assemble_MUIModel,
  Connect2_Assemble_MUIController,
  Connect2_Assemble_MUILanguageResources,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_AttendeeSubdivisionList_Skelet_mvc_Debugger,
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
    Controller.prototype._onInitialize$Action = function (callContext) {
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
        OutSystemsDebugger.push(
          "4YvUCWT53U+6BrZWsVWc3Q:iVcGRqhk_EylWiiJWWY9dA:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.r6c9E9Fgc0GLzItZFCBPWA/ClientActions.iVcGRqhk_EylWiiJWWY9dA:7iZkkGWq9O20qCPDgjk+Ww",
          "Connect2_Assemble_MUI",
          "OnInitialize",
          "NRFlows.ClientScreenActionFlow",
          callContext.id,
          varBag,
        );
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:L8s5a2Q4vk+ppmNw4FfCIg",
          callContext.id,
        );
        while (
          OutSystemsDebugger.handleBreakpoint(
            "4YvUCWT53U+6BrZWsVWc3Q:e750U8B2cEe_rKVpOb7rgA",
            callContext.id,
          ) &&
          model.variables.iteratorVar < model.variables.skeletonListLengthIn
        ) {
          OutSystemsDebugger.handleBreakpoint(
            "4YvUCWT53U+6BrZWsVWc3Q:kcnvL1YcgUuLDvtalgUIMQ",
            callContext.id,
          );
          // Execute Action: ListAppend
          OS.SystemActions.listAppend(
            model.variables.skeletonListVar,
            model.variables.iteratorVar,
            callContext,
          );
          OutSystemsDebugger.handleBreakpoint(
            "4YvUCWT53U+6BrZWsVWc3Q:we3pKLcpSUi+i2XyyR+t4g",
            callContext.id,
          );
          // Iterator = Iterator + 1
          model.variables.iteratorVar = model.variables.iteratorVar + 1;
        }

        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:IA8QVuEbNkKdo0mK0lMskg",
          callContext.id,
        );
      } catch (ex) {
        OutSystemsDebugger.handleException(ex, callContext.id);
        throw ex;
      } finally {
        OutSystemsDebugger.pop(
          "4YvUCWT53U+6BrZWsVWc3Q:iVcGRqhk_EylWiiJWWY9dA",
          callContext.id,
        );
      }
    };

    Controller.prototype.onInitialize$Action = function (callContext) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(
        controller._onInitialize$Action,
        callContext,
      );
    };

    // Event Handler Actions
    Controller.prototype.pushDebuggerContext = function (callContext) {
      var varBag = {};
      OutSystemsDebugger.push(
        "4YvUCWT53U+6BrZWsVWc3Q:n+VQoM4mfUCcC1ucCtOSYA:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA:9jQU9CfZCZWwIcnaUbLRAg",
        "Connect2_Assemble_MUI",
        "Assemble",
        "NRFlows.WebFlow",
        callContext.id,
        varBag,
      );
      OutSystemsDebugger.push(
        "4YvUCWT53U+6BrZWsVWc3Q:r6c9E9Fgc0GLzItZFCBPWA:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.r6c9E9Fgc0GLzItZFCBPWA:K3BJoGy2wu6cUGTkl1tXKw",
        "Connect2_Assemble_MUI",
        "AssembleEventDetail_AttendeeSubdivisionList_Skelet",
        "NRNodes.WebBlock",
        callContext.id,
        varBag,
      );
    };
    Controller.prototype.popDebuggerContext = function (callContext) {
      OutSystemsDebugger.pop(
        "4YvUCWT53U+6BrZWsVWc3Q:r6c9E9Fgc0GLzItZFCBPWA",
        callContext.id,
      );
      OutSystemsDebugger.pop(
        "4YvUCWT53U+6BrZWsVWc3Q:n+VQoM4mfUCcC1ucCtOSYA",
        callContext.id,
      );
    };
    Controller.prototype.onInitializeEventHandler = function (callContext) {
      var controller = this.controller;
      var model = this.model;
      var idService = this.idService;

      return OS.Flow.tryFinally(
        function () {
          var varBag = {};
          controller.pushDebuggerContext(callContext);

          OutSystemsDebugger.setThreadStartName(
            callContext.id,
            "Assemble/AssembleEventDetail_AttendeeSubdivisionList_Skelet On Initialize",
          );
          return controller.onInitialize$Action(callContext);
        },
        function () {
          controller.popDebuggerContext(callContext);
        },
      );
    };
    Controller.prototype.onReadyEventHandler = null;
    Controller.prototype.onRenderEventHandler = null;
    Controller.prototype.onDestroyEventHandler = null;
    Controller.prototype.onParametersChangedEventHandler = null;
    Controller.prototype.handleError = function (ex) {
      return controller.handleError(ex);
    };
    Controller.checkPermissions = function () {};
    Controller.prototype.getDefaultTimeout = function () {
      return Connect2_Assemble_MUIController.default.defaultTimeout;
    };
    return Controller;
  })(OS.Controller.BaseViewController);
  return new OS.Controller.ControllerFactory(
    Controller,
    Connect2_Assemble_MUILanguageResources,
  );
});

define("Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivisionList_Skelet.mvc$debugger", [
  "exports",
  "OutSystems/ClientRuntime/Debugger",
  "OutSystems/ClientRuntime/Main",
], function (exports, Debugger, OutSystems) {
  var OS = OutSystems.Internal;
  var metaInfo = {
    tS96ilqYu06He7V5qn7aqQ: {
      getter: function (varBag, idService) {
        return varBag.model.variables.skeletonListVar;
      },
    },
    "4vgwY4sVQUCPo_SIo12lrg": {
      getter: function (varBag, idService) {
        return varBag.model.variables.iteratorVar;
      },
      dataType: OS.DataTypes.DataTypes.Integer,
    },
    _iTBTgqMpUu87yiW3vFWvw: {
      getter: function (varBag, idService) {
        return varBag.model.variables.skeletonListLengthIn;
      },
      dataType: OS.DataTypes.DataTypes.Integer,
    },
  };
  OutSystemsDebugger.registerMetaInfo(metaInfo);
});
