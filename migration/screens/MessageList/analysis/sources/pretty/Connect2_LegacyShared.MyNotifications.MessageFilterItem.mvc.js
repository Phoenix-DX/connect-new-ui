define("Connect2_LegacyShared.MyNotifications.MessageFilterItem.mvc$model", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_LegacyShared.model",
  "OutSystemsUI_2_23.controller",
  "OutSystemsUI_2_23.controller$TextEllipsis",
  "Connect2_LegacyShared.referencesHealth",
  "Connect2_LegacyShared.referencesHealth$OutSystemsUI_2_23",
], function (OutSystems, Connect2_LegacySharedModel, OutSystemsUI_2_23Controller) {
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
          this.variables._titleInDataFetchStatus = inputs._titleInDataFetchStatus;
        }
      }
    };
    return Model;
  })(OS.Model.BaseViewModel);
  return new OS.Model.ModelFactory(Model, "MyNotifications.MessageFilterItem");
});
define("Connect2_LegacyShared.MyNotifications.MessageFilterItem.mvc$view", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_LegacyShared.model",
  "Connect2_LegacyShared.controller",
  "OutSystemsUI_2_23.controller",
  "react",
  "OutSystems/ReactView/Main",
  "Connect2_LegacyShared.MyNotifications.MessageFilterItem.mvc$model",
  "Connect2_LegacyShared.MyNotifications.MessageFilterItem.mvc$controller",
  "Connect2_LegacyShared.clientVariables",
  "OutSystems/ReactWidgets/Main",
  "OutSystemsUI_2_23.controller$TextEllipsis",
  "Connect2_LegacyShared.referencesHealth",
  "Connect2_LegacyShared.referencesHealth$OutSystemsUI_2_23",
], function (
  OutSystems,
  Connect2_LegacySharedModel,
  Connect2_LegacySharedController,
  OutSystemsUI_2_23Controller,
  React,
  OSView,
  Connect2_LegacyShared_MyNotifications_MessageFilterItem_mvc_model,
  Connect2_LegacyShared_MyNotifications_MessageFilterItem_mvc_controller,
  Connect2_LegacySharedClientVariables,
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
    View.displayName = "MyNotifications.MessageFilterItem";
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
        return Connect2_LegacyShared_MyNotifications_MessageFilterItem_mvc_model;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(View.prototype, "controllerFactory", {
      get: function () {
        return Connect2_LegacyShared_MyNotifications_MessageFilterItem_mvc_controller;
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
            style: "inline-flex-center-vertical flex-space-between full-width padding-x-m padding-y-m",
            visible: true,
            _idProps: {
              service: idService,
              name: "Message_Filter_Item",
            },
            _widgetRecordProvider: widgetsRecordProvider,
          },
          React.createElement(OSWidgets.Expression, {
            value: model.getCachedValue(
              idService.getId("Message_Filter_Item_Title.Value"),
              function () {
                return OutSystemsDebugger.handleFunctionCall(
                  function () {
                    return OutSystemsUI_2_23Controller.default.textEllipsis$Action(
                      model.variables.titleIn,
                      30,
                      callContext,
                    ).outOut;
                  },
                  OS.DataTypes.DataTypes.Text,
                  callContext.id,
                );
              },
              function () {
                return model.variables.titleIn;
              },
            ),
            _idProps: {
              service: idService,
              name: "Message_Filter_Item_Title",
            },
            _widgetRecordProvider: widgetsRecordProvider,
            value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleInDataFetchStatus),
          }),
          React.createElement(OSWidgets.Placeholder, {
            align: /*Default*/ 0,
            content: _this.props.placeholders.message_Filter_Item_Placeholder,
            _idProps: {
              service: idService,
              name: "Message_Filter_Item_Placeholder",
            },
            _widgetRecordProvider: widgetsRecordProvider,
          }),
        ),
      );
    };
    return View;
  })(OSView.BaseView.BaseWebBlock);

  return View;
});
define("Connect2_LegacyShared.MyNotifications.MessageFilterItem.mvc$controller", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_LegacyShared.model",
  "Connect2_LegacyShared.controller",
  "OutSystemsUI_2_23.controller",
  "Connect2_LegacyShared.languageResources",
  "Connect2_LegacyShared.clientVariables",
  "Connect2_LegacyShared.MyNotifications.MessageFilterItem.mvc$debugger",
  "OutSystemsUI_2_23.controller$TextEllipsis",
  "Connect2_LegacyShared.referencesHealth",
  "Connect2_LegacyShared.referencesHealth$OutSystemsUI_2_23",
], function (
  OutSystems,
  Connect2_LegacySharedModel,
  Connect2_LegacySharedController,
  OutSystemsUI_2_23Controller,
  Connect2_LegacySharedLanguageResources,
  Connect2_LegacySharedClientVariables,
  Connect2_LegacyShared_MyNotifications_MessageFilterItem_mvc_Debugger,
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
        "DjcSN7X3Kkyt49iAAhnv1A:iKTaVBbqsE2TV8kygBm0tA:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA:JDVFsscJB_uWX_OdVOax1A",
        "Connect2_LegacyShared",
        "MyNotifications",
        "NRFlows.WebFlow",
        callContext.id,
        varBag,
      );
      OutSystemsDebugger.push(
        "DjcSN7X3Kkyt49iAAhnv1A:fJH4pt4HFEqhTPDKKDQGnw:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.fJH4pt4HFEqhTPDKKDQGnw:yzsItk2Ux9vmhN7d9PHY7A",
        "Connect2_LegacyShared",
        "MessageFilterItem",
        "NRNodes.WebBlock",
        callContext.id,
        varBag,
      );
    };
    Controller.prototype.popDebuggerContext = function (callContext) {
      OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:fJH4pt4HFEqhTPDKKDQGnw", callContext.id);
      OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:iKTaVBbqsE2TV8kygBm0tA", callContext.id);
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
  return new OS.Controller.ControllerFactory(Controller, Connect2_LegacySharedLanguageResources);
});

define("Connect2_LegacyShared.MyNotifications.MessageFilterItem.mvc$debugger", [
  "exports",
  "OutSystems/ClientRuntime/Debugger",
  "OutSystems/ClientRuntime/Main",
], function (exports, Debugger, OutSystems) {
  var OS = OutSystems.Internal;
  var metaInfo = {
    "Yd8CBv+fjEy_mrxL3pgc2w": {
      getter: function (varBag, idService) {
        return varBag.model.variables.titleIn;
      },
      dataType: OS.DataTypes.DataTypes.Text,
    },
    "2WWTFIcaFE+v72joRka24Q": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Message_Filter_Item"));
        })(varBag.model, idService);
      },
    },
    dCweHA45dU6hBwsOQcvSqg: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Message_Filter_Item_Title"));
        })(varBag.model, idService);
      },
    },
    TcTle6M4KEGshMjEjKO_qg: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Message_Filter_Item_Placeholder"));
        })(varBag.model, idService);
      },
    },
  };
  OutSystemsDebugger.registerMetaInfo(metaInfo);
});
