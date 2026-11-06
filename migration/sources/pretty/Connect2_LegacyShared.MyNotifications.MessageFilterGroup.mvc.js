define("Connect2_LegacyShared.MyNotifications.MessageFilterGroup.mvc$model", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_LegacyShared.model",
  "OutSystemsUI_2_23.controller",
  "OutSystemsUI_2_23.Utilities.Separator.mvc$model",
  "OutSystemsUI_2_23.controller$TextEllipsis",
  "Connect2_LegacyShared.referencesHealth",
  "Connect2_LegacyShared.referencesHealth$OutSystemsUI_2_23",
], function (
  OutSystems,
  Connect2_LegacySharedModel,
  OutSystemsUI_2_23Controller,
  OutSystemsUI_2_23_Utilities_Separator_mvcModel,
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
    Model._hasValidationWidgetsValue = undefined;
    Object.defineProperty(Model, "hasValidationWidgets", {
      enumerable: true,
      configurable: true,
      get: function () {
        if (Model._hasValidationWidgetsValue === undefined) {
          Model._hasValidationWidgetsValue = OutSystemsUI_2_23_Utilities_Separator_mvcModel.hasValidationWidgets;
        }

        return Model._hasValidationWidgetsValue;
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
  return new OS.Model.ModelFactory(Model, "MyNotifications.MessageFilterGroup");
});
define("Connect2_LegacyShared.MyNotifications.MessageFilterGroup.mvc$view", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_LegacyShared.model",
  "Connect2_LegacyShared.controller",
  "OutSystemsUI_2_23.controller",
  "react",
  "OutSystems/ReactView/Main",
  "Connect2_LegacyShared.MyNotifications.MessageFilterGroup.mvc$model",
  "Connect2_LegacyShared.MyNotifications.MessageFilterGroup.mvc$controller",
  "Connect2_LegacyShared.clientVariables",
  "OutSystems/ReactWidgets/Main",
  "OutSystemsUI_2_23.Utilities.Separator.mvc$view",
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
  Connect2_LegacyShared_MyNotifications_MessageFilterGroup_mvc_model,
  Connect2_LegacyShared_MyNotifications_MessageFilterGroup_mvc_controller,
  Connect2_LegacySharedClientVariables,
  OSWidgets,
  OutSystemsUI_2_23_Utilities_Separator_mvc_view,
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
    View.displayName = "MyNotifications.MessageFilterGroup";
    View.getCssDependencies = function () {
      return ["css/OutSystemsReactWidgets.css"];
    };
    View.getJsDependencies = function () {
      return [];
    };
    View.getBlocks = function () {
      return [OutSystemsUI_2_23_Utilities_Separator_mvc_view];
    };
    Object.defineProperty(View.prototype, "modelFactory", {
      get: function () {
        return Connect2_LegacyShared_MyNotifications_MessageFilterGroup_mvc_model;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(View.prototype, "controllerFactory", {
      get: function () {
        return Connect2_LegacyShared_MyNotifications_MessageFilterGroup_mvc_controller;
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
            style: "padding-top-m",
            visible: true,
            _idProps: {
              service: idService,
              name: "Message_Filter_Group",
            },
            _widgetRecordProvider: widgetsRecordProvider,
          },
          React.createElement(OSWidgets.Expression, {
            style: "margin-bottom-m margin-left-m text-primary-color bold",
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
          React.createElement(OutSystemsUI_2_23_Utilities_Separator_mvc_view, {
            inputs: {
              Space: Connect2_LegacySharedModel.staticEntities.space.small,
              IsVertical: false,
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
              uuid: "3",
              alias: "1",
            },
            _widgetRecordProvider: widgetsRecordProvider,
            _dependencies: [],
          }),
        ),
      );
    };
    return View;
  })(OSView.BaseView.BaseWebBlock);

  return View;
});
define("Connect2_LegacyShared.MyNotifications.MessageFilterGroup.mvc$controller", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_LegacyShared.model",
  "Connect2_LegacyShared.controller",
  "OutSystemsUI_2_23.controller",
  "Connect2_LegacyShared.languageResources",
  "Connect2_LegacyShared.clientVariables",
  "Connect2_LegacyShared.MyNotifications.MessageFilterGroup.mvc$debugger",
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
  Connect2_LegacyShared_MyNotifications_MessageFilterGroup_mvc_Debugger,
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
        "DjcSN7X3Kkyt49iAAhnv1A:WtG88OG+4Eum9AvplSNcZw:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.WtG88OG+4Eum9AvplSNcZw:HhZnxJ+b7PSzRp_qH7CTfA",
        "Connect2_LegacyShared",
        "MessageFilterGroup",
        "NRNodes.WebBlock",
        callContext.id,
        varBag,
      );
    };
    Controller.prototype.popDebuggerContext = function (callContext) {
      OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:WtG88OG+4Eum9AvplSNcZw", callContext.id);
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

define("Connect2_LegacyShared.MyNotifications.MessageFilterGroup.mvc$debugger", [
  "exports",
  "OutSystems/ClientRuntime/Debugger",
  "OutSystems/ClientRuntime/Main",
], function (exports, Debugger, OutSystems) {
  var OS = OutSystems.Internal;
  var metaInfo = {
    fi8LICUihUWVEptA_75FVg: {
      getter: function (varBag, idService) {
        return varBag.model.variables.titleIn;
      },
      dataType: OS.DataTypes.DataTypes.Text,
    },
    inyahGnklUCXfJNCe5k2AA: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Message_Filter_Group"));
        })(varBag.model, idService);
      },
    },
    nSTIi1qSTkSFHnAITjZ1Cw: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Message_Filter_Item_Title"));
        })(varBag.model, idService);
      },
    },
    "ZQJr3Qht5k+peNFblEqD4g": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Message_Filter_Item_Placeholder"));
        })(varBag.model, idService);
      },
    },
  };
  OutSystemsDebugger.registerMetaInfo(metaInfo);
});
