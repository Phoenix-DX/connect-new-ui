define("Connect2_Assemble_MUI.Assemble.AssembleEventDetail__Error.mvc$model", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_Assemble_MUI.model",
], function (OutSystems, Connect2_Assemble_MUIModel) {
  var OS = OutSystems.Internal;

  var VariablesRecord = (function (_super) {
    __extends(VariablesRecord, _super);
    function VariablesRecord(defaults) {
      _super.apply(this, arguments);
    }
    VariablesRecord.attributesToDeclare = function () {
      return [
        this.attr(
          "Title",
          "titleIn",
          "Title",
          true,
          false,
          OS.DataTypes.DataTypes.Text,
          function () {
            return "";
          },
          false,
        ),
        this.attr(
          "_titleInDataFetchStatus",
          "_titleInDataFetchStatus",
          "_titleInDataFetchStatus",
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return /*Fetched*/ 1;
          },
          false,
        ),
        this.attr(
          "Subtitle",
          "subtitleIn",
          "Subtitle",
          true,
          false,
          OS.DataTypes.DataTypes.Text,
          function () {
            return "";
          },
          false,
        ),
        this.attr(
          "_subtitleInDataFetchStatus",
          "_subtitleInDataFetchStatus",
          "_subtitleInDataFetchStatus",
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
    Object.defineProperty(Model, "hasValidationWidgets", {
      enumerable: true,
      configurable: true,
      get: function () {
        return false;
      },
    });

    Model.prototype.setInputs = function (inputs) {
      if ("Title" in inputs) {
        this.variables.titleIn = inputs.Title;
        if ("_titleInDataFetchStatus" in inputs) {
          this.variables._titleInDataFetchStatus =
            inputs._titleInDataFetchStatus;
        }
      }

      if ("Subtitle" in inputs) {
        this.variables.subtitleIn = inputs.Subtitle;
        if ("_subtitleInDataFetchStatus" in inputs) {
          this.variables._subtitleInDataFetchStatus =
            inputs._subtitleInDataFetchStatus;
        }
      }
    };
    return Model;
  })(OS.Model.BaseViewModel);
  return new OS.Model.ModelFactory(
    Model,
    "Assemble.AssembleEventDetail__Error",
  );
});
define("Connect2_Assemble_MUI.Assemble.AssembleEventDetail__Error.mvc$view", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_Assemble_MUI.model",
  "Connect2_Assemble_MUI.controller",
  "react",
  "OutSystems/ReactView/Main",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail__Error.mvc$model",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail__Error.mvc$controller",
  "OutSystems/ReactWidgets/Main",
], function (
  OutSystems,
  Connect2_Assemble_MUIModel,
  Connect2_Assemble_MUIController,
  React,
  OSView,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail__Error_mvc_model,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail__Error_mvc_controller,
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
    View.displayName = "Assemble.AssembleEventDetail__Error";
    View.getCssDependencies = function () {
      return ["css/OutSystemsReactWidgets.css"];
    };
    View.getJsDependencies = function () {
      return [];
    };
    View.getBlocks = function () {
      return [];
    };
    Object.defineProperty(View.prototype, "modelFactory", {
      get: function () {
        return Connect2_Assemble_MUI_Assemble_AssembleEventDetail__Error_mvc_model;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(View.prototype, "controllerFactory", {
      get: function () {
        return Connect2_Assemble_MUI_Assemble_AssembleEventDetail__Error_mvc_controller;
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
            style:
              "nc-error-screen-info text-align-center assemble-details-error",
            visible: true,
            _idProps: {
              service: idService,
              name: "DIV_CustomErrorScreen",
            },
            _widgetRecordProvider: widgetsRecordProvider,
          },
          React.createElement(
            OSWidgets.Container,
            {
              align: /*Default*/ 0,
              animate: false,
              style: "text-align-center",
              visible: true,
              _idProps: {
                service: idService,
                uuid: "1",
              },
              _widgetRecordProvider: widgetsRecordProvider,
            },
            React.createElement(OSWidgets.Placeholder, {
              align: /*Default*/ 0,
              content: _this.props.placeholders.icon,
              gridProperties: {
                classes: "OSInline",
              },
              style: "assemble-details-error__icon",
              _idProps: {
                service: idService,
                name: "Icon",
              },
              _widgetRecordProvider: widgetsRecordProvider,
            }),
          ),
          React.createElement(
            OSWidgets.Container,
            {
              align: /*Default*/ 0,
              animate: false,
              style: "assemble-details-error__title",
              visible: true,
              _idProps: {
                service: idService,
                uuid: "3",
              },
              _widgetRecordProvider: widgetsRecordProvider,
            },
            React.createElement(OSWidgets.Expression, {
              style: "heading3",
              value: model.variables.titleIn,
              _idProps: {
                service: idService,
                uuid: "4",
              },
              _widgetRecordProvider: widgetsRecordProvider,
              value_dataFetchStatus: OS.Model.calculateDataFetchStatus(
                model.variables._titleInDataFetchStatus,
              ),
            }),
          ),
          React.createElement(
            OSWidgets.Container,
            {
              align: /*Default*/ 0,
              animate: false,
              style: "assemble-details-error__subtitle padding-x-base",
              visible: true,
              _idProps: {
                service: idService,
                uuid: "5",
              },
              _widgetRecordProvider: widgetsRecordProvider,
            },
            React.createElement(OSWidgets.Expression, {
              style: "font-size-s",
              value: model.variables.subtitleIn,
              _idProps: {
                service: idService,
                uuid: "6",
              },
              _widgetRecordProvider: widgetsRecordProvider,
              value_dataFetchStatus: OS.Model.calculateDataFetchStatus(
                model.variables._subtitleInDataFetchStatus,
              ),
            }),
          ),
        ),
      );
    };
    return View;
  })(OSView.BaseView.BaseWebBlock);

  return View;
});
define("Connect2_Assemble_MUI.Assemble.AssembleEventDetail__Error.mvc$controller", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_Assemble_MUI.model",
  "Connect2_Assemble_MUI.controller",
  "Connect2_Assemble_MUI.languageResources",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail__Error.mvc$debugger",
], function (
  OutSystems,
  Connect2_Assemble_MUIModel,
  Connect2_Assemble_MUIController,
  Connect2_Assemble_MUILanguageResources,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail__Error_mvc_Debugger,
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
        "4YvUCWT53U+6BrZWsVWc3Q:9S2Isdp2SEO_gTRJQw2+TQ:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.9S2Isdp2SEO_gTRJQw2+TQ:qY8CxlV2qO6sXML9epXBGw",
        "Connect2_Assemble_MUI",
        "AssembleEventDetail__Error",
        "NRNodes.WebBlock",
        callContext.id,
        varBag,
      );
    };
    Controller.prototype.popDebuggerContext = function (callContext) {
      OutSystemsDebugger.pop(
        "4YvUCWT53U+6BrZWsVWc3Q:9S2Isdp2SEO_gTRJQw2+TQ",
        callContext.id,
      );
      OutSystemsDebugger.pop(
        "4YvUCWT53U+6BrZWsVWc3Q:n+VQoM4mfUCcC1ucCtOSYA",
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
      return Connect2_Assemble_MUIController.default.defaultTimeout;
    };
    return Controller;
  })(OS.Controller.BaseViewController);
  return new OS.Controller.ControllerFactory(
    Controller,
    Connect2_Assemble_MUILanguageResources,
  );
});

define("Connect2_Assemble_MUI.Assemble.AssembleEventDetail__Error.mvc$debugger", [
  "exports",
  "OutSystems/ClientRuntime/Debugger",
  "OutSystems/ClientRuntime/Main",
], function (exports, Debugger, OutSystems) {
  var OS = OutSystems.Internal;
  var metaInfo = {
    eafEW2MSEE6MiVgNjU5PDQ: {
      getter: function (varBag, idService) {
        return varBag.model.variables.titleIn;
      },
      dataType: OS.DataTypes.DataTypes.Text,
    },
    tHg2RDqilEKocDud7Q2reg: {
      getter: function (varBag, idService) {
        return varBag.model.variables.subtitleIn;
      },
      dataType: OS.DataTypes.DataTypes.Text,
    },
    "7ZU52DnVKEq0FsLG6_Xs2A": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("DIV_CustomErrorScreen"));
        })(varBag.model, idService);
      },
    },
    Lt5hBgswTUeQJu6X_jAj_Q: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Icon"));
        })(varBag.model, idService);
      },
    },
  };
  OutSystemsDebugger.registerMetaInfo(metaInfo);
});
