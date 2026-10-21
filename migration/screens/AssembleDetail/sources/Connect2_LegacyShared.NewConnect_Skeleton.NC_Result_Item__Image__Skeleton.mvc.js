define("Connect2_LegacyShared.NewConnect_Skeleton.NC_Result_Item__Image__Skeleton.mvc$model", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_LegacyShared.model",
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
          "In_IsRoundImage",
          "in_IsRoundImageIn",
          "In_IsRoundImage",
          true,
          false,
          OS.DataTypes.DataTypes.Boolean,
          function () {
            return false;
          },
          false,
        ),
        this.attr(
          "_in_IsRoundImageInDataFetchStatus",
          "_in_IsRoundImageInDataFetchStatus",
          "_in_IsRoundImageInDataFetchStatus",
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return /*Fetched*/ 1;
          },
          false,
        ),
        this.attr(
          "In_ImageHeight",
          "in_ImageHeightIn",
          "In_ImageHeight",
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return 40;
          },
          false,
        ),
        this.attr(
          "_in_ImageHeightInDataFetchStatus",
          "_in_ImageHeightInDataFetchStatus",
          "_in_ImageHeightInDataFetchStatus",
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return /*Fetched*/ 1;
          },
          false,
        ),
        this.attr(
          "In_ResultItemVisualWidth",
          "in_ResultItemVisualWidthIn",
          "In_ResultItemVisualWidth",
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return 40;
          },
          false,
        ),
        this.attr(
          "_in_ResultItemVisualWidthInDataFetchStatus",
          "_in_ResultItemVisualWidthInDataFetchStatus",
          "_in_ResultItemVisualWidthInDataFetchStatus",
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return /*Fetched*/ 1;
          },
          false,
        ),
        this.attr(
          "CustomClass",
          "customClassIn",
          "CustomClass",
          true,
          false,
          OS.DataTypes.DataTypes.Text,
          function () {
            return "";
          },
          false,
        ),
        this.attr(
          "_customClassInDataFetchStatus",
          "_customClassInDataFetchStatus",
          "_customClassInDataFetchStatus",
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return /*Fetched*/ 1;
          },
          false,
        ),
        this.attr(
          "In_BorderRadius",
          "in_BorderRadiusIn",
          "In_BorderRadius",
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return 0;
          },
          false,
        ),
        this.attr(
          "_in_BorderRadiusInDataFetchStatus",
          "_in_BorderRadiusInDataFetchStatus",
          "_in_BorderRadiusInDataFetchStatus",
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return /*Fetched*/ 1;
          },
          false,
        ),
        this.attr(
          "In_IsReverseImageAndContent",
          "in_IsReverseImageAndContentIn",
          "In_IsReverseImageAndContent",
          true,
          false,
          OS.DataTypes.DataTypes.Boolean,
          function () {
            return false;
          },
          false,
        ),
        this.attr(
          "_in_IsReverseImageAndContentInDataFetchStatus",
          "_in_IsReverseImageAndContentInDataFetchStatus",
          "_in_IsReverseImageAndContentInDataFetchStatus",
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
      if ("In_IsRoundImage" in inputs) {
        this.variables.in_IsRoundImageIn = inputs.In_IsRoundImage;
        if ("_in_IsRoundImageInDataFetchStatus" in inputs) {
          this.variables._in_IsRoundImageInDataFetchStatus =
            inputs._in_IsRoundImageInDataFetchStatus;
        }
      }

      if ("In_ImageHeight" in inputs) {
        this.variables.in_ImageHeightIn = inputs.In_ImageHeight;
        if ("_in_ImageHeightInDataFetchStatus" in inputs) {
          this.variables._in_ImageHeightInDataFetchStatus =
            inputs._in_ImageHeightInDataFetchStatus;
        }
      }

      if ("In_ResultItemVisualWidth" in inputs) {
        this.variables.in_ResultItemVisualWidthIn =
          inputs.In_ResultItemVisualWidth;
        if ("_in_ResultItemVisualWidthInDataFetchStatus" in inputs) {
          this.variables._in_ResultItemVisualWidthInDataFetchStatus =
            inputs._in_ResultItemVisualWidthInDataFetchStatus;
        }
      }

      if ("CustomClass" in inputs) {
        this.variables.customClassIn = inputs.CustomClass;
        if ("_customClassInDataFetchStatus" in inputs) {
          this.variables._customClassInDataFetchStatus =
            inputs._customClassInDataFetchStatus;
        }
      }

      if ("In_BorderRadius" in inputs) {
        this.variables.in_BorderRadiusIn = inputs.In_BorderRadius;
        if ("_in_BorderRadiusInDataFetchStatus" in inputs) {
          this.variables._in_BorderRadiusInDataFetchStatus =
            inputs._in_BorderRadiusInDataFetchStatus;
        }
      }

      if ("In_IsReverseImageAndContent" in inputs) {
        this.variables.in_IsReverseImageAndContentIn =
          inputs.In_IsReverseImageAndContent;
        if ("_in_IsReverseImageAndContentInDataFetchStatus" in inputs) {
          this.variables._in_IsReverseImageAndContentInDataFetchStatus =
            inputs._in_IsReverseImageAndContentInDataFetchStatus;
        }
      }
    };
    return Model;
  })(OS.Model.BaseViewModel);
  return new OS.Model.ModelFactory(
    Model,
    "NewConnect_Skeleton.NC_Result_Item__Image__Skeleton",
  );
});
define("Connect2_LegacyShared.NewConnect_Skeleton.NC_Result_Item__Image__Skeleton.mvc$view", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_LegacyShared.model",
  "Connect2_LegacyShared.controller",
  "react",
  "OutSystems/ReactView/Main",
  "Connect2_LegacyShared.NewConnect_Skeleton.NC_Result_Item__Image__Skeleton.mvc$model",
  "Connect2_LegacyShared.NewConnect_Skeleton.NC_Result_Item__Image__Skeleton.mvc$controller",
  "Connect2_LegacyShared.clientVariables",
  "OutSystems/ReactWidgets/Main",
], function (
  OutSystems,
  Connect2_LegacySharedModel,
  Connect2_LegacySharedController,
  React,
  OSView,
  Connect2_LegacyShared_NewConnect_Skeleton_NC_Result_Item__Image__Skeleton_mvc_model,
  Connect2_LegacyShared_NewConnect_Skeleton_NC_Result_Item__Image__Skeleton_mvc_controller,
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
    View.displayName = "NewConnect_Skeleton.NC_Result_Item__Image__Skeleton";
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
        return Connect2_LegacyShared_NewConnect_Skeleton_NC_Result_Item__Image__Skeleton_mvc_model;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(View.prototype, "controllerFactory", {
      get: function () {
        return Connect2_LegacyShared_NewConnect_Skeleton_NC_Result_Item__Image__Skeleton_mvc_controller;
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
            style: model.getCachedValue(
              idService.getId("Result_Item.Style"),
              function () {
                return (
                  "display-flex align-items-center gap-base " +
                  (model.variables.in_IsReverseImageAndContentIn
                    ? "flex-direction-row-reverse "
                    : "") +
                  model.variables.customClassIn
                );
              },
              function () {
                return model.variables.in_IsReverseImageAndContentIn;
              },
              function () {
                return model.variables.customClassIn;
              },
            ),
            visible: true,
            _idProps: {
              service: idService,
              name: "Result_Item",
            },
            _widgetRecordProvider: widgetsRecordProvider,
            style_dataFetchStatus: OS.Model.calculateDataFetchStatus(
              model.variables._in_IsReverseImageAndContentInDataFetchStatus,
              model.variables._customClassInDataFetchStatus,
            ),
          },
          React.createElement(
            OSWidgets.Container,
            {
              align: /*Default*/ 0,
              animate: false,
              extendedProperties: {
                style:
                  "min-width: " +
                  model.variables.in_ResultItemVisualWidthIn.toString() +
                  "px;",
              },
              gridProperties: {
                classes: "OSInline",
              },
              visible: true,
              _idProps: {
                service: idService,
                uuid: "1",
              },
              _widgetRecordProvider: widgetsRecordProvider,
            },
            React.createElement(OSWidgets.Container, {
              align: /*Default*/ 0,
              animate: false,
              extendedProperties: {
                style: model.getCachedValue(
                  idService.getId("t5dJR2488Em3hJum0o51EQ.style"),
                  function () {
                    return (
                      "height: " +
                      model.variables.in_ImageHeightIn.toString() +
                      "px;" +
                      (model.variables.in_IsRoundImageIn
                        ? "width: " +
                          model.variables.in_ImageHeightIn.toString() +
                          "px;"
                        : "border-radius: " +
                          model.variables.in_BorderRadiusIn.toString() +
                          "px; ")
                    );
                  },
                  function () {
                    return model.variables.in_ImageHeightIn;
                  },
                  function () {
                    return model.variables.in_IsRoundImageIn;
                  },
                  function () {
                    return model.variables.in_BorderRadiusIn;
                  },
                ),
              },
              style: model.getCachedValue(
                idService.getId("t5dJR2488Em3hJum0o51EQ.Style"),
                function () {
                  return (
                    "skeleton-item " +
                    (model.variables.in_IsRoundImageIn
                      ? "border-radius-circle"
                      : "")
                  );
                },
                function () {
                  return model.variables.in_IsRoundImageIn;
                },
              ),
              visible: true,
              _idProps: {
                service: idService,
                uuid: "2",
              },
              _widgetRecordProvider: widgetsRecordProvider,
              style_dataFetchStatus: OS.Model.calculateDataFetchStatus(
                model.variables._in_IsRoundImageInDataFetchStatus,
              ),
            }),
          ),
          React.createElement(OSWidgets.Container, {
            align: /*Default*/ 0,
            animate: false,
            extendedProperties: {
              style:
                "height: " + model.variables.in_ImageHeightIn.toString() + "px",
            },
            style:
              "skeleton-item display-flex align-items-center justify-content-space-between flex1 border-radius-soft",
            visible: true,
            _idProps: {
              service: idService,
              uuid: "3",
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
define("Connect2_LegacyShared.NewConnect_Skeleton.NC_Result_Item__Image__Skeleton.mvc$controller", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_LegacyShared.model",
  "Connect2_LegacyShared.controller",
  "Connect2_LegacyShared.languageResources",
  "Connect2_LegacyShared.clientVariables",
  "Connect2_LegacyShared.NewConnect_Skeleton.NC_Result_Item__Image__Skeleton.mvc$debugger",
], function (
  OutSystems,
  Connect2_LegacySharedModel,
  Connect2_LegacySharedController,
  Connect2_LegacySharedLanguageResources,
  Connect2_LegacySharedClientVariables,
  Connect2_LegacyShared_NewConnect_Skeleton_NC_Result_Item__Image__Skeleton_mvc_Debugger,
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
        "DjcSN7X3Kkyt49iAAhnv1A:4ghymBJk70OzpiQFy_pupw:/NRWebFlows.4ghymBJk70OzpiQFy_pupw:w6d+7Xl04Ym08+gqvQfoeA",
        "Connect2_LegacyShared",
        "NewConnect_Skeleton",
        "NRFlows.WebFlow",
        callContext.id,
        varBag,
      );
      OutSystemsDebugger.push(
        "DjcSN7X3Kkyt49iAAhnv1A:tfxdDxvK7025sFLWrktuog:/NRWebFlows.4ghymBJk70OzpiQFy_pupw/NodesShownInESpaceTree.tfxdDxvK7025sFLWrktuog:vkf8PSnMfUW2XnOTFqTLNQ",
        "Connect2_LegacyShared",
        "NC_Result_Item__Image__Skeleton",
        "NRNodes.WebBlock",
        callContext.id,
        varBag,
      );
    };
    Controller.prototype.popDebuggerContext = function (callContext) {
      OutSystemsDebugger.pop(
        "DjcSN7X3Kkyt49iAAhnv1A:tfxdDxvK7025sFLWrktuog",
        callContext.id,
      );
      OutSystemsDebugger.pop(
        "DjcSN7X3Kkyt49iAAhnv1A:4ghymBJk70OzpiQFy_pupw",
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

define("Connect2_LegacyShared.NewConnect_Skeleton.NC_Result_Item__Image__Skeleton.mvc$debugger", [
  "exports",
  "OutSystems/ClientRuntime/Debugger",
  "OutSystems/ClientRuntime/Main",
], function (exports, Debugger, OutSystems) {
  var OS = OutSystems.Internal;
  var metaInfo = {
    "R3yFSsOQhUGnko+tpTLttQ": {
      getter: function (varBag, idService) {
        return varBag.model.variables.in_IsRoundImageIn;
      },
      dataType: OS.DataTypes.DataTypes.Boolean,
    },
    evxb2S04cE6DtzhPN4WtyA: {
      getter: function (varBag, idService) {
        return varBag.model.variables.in_ImageHeightIn;
      },
      dataType: OS.DataTypes.DataTypes.Integer,
    },
    "SL8ef5dpi0OOZ1+V1F+vkg": {
      getter: function (varBag, idService) {
        return varBag.model.variables.in_ResultItemVisualWidthIn;
      },
      dataType: OS.DataTypes.DataTypes.Integer,
    },
    CMUNkga0i0uJSRhhxapHxQ: {
      getter: function (varBag, idService) {
        return varBag.model.variables.customClassIn;
      },
      dataType: OS.DataTypes.DataTypes.Text,
    },
    "AHNA1wbD90qFB+5Nt5SgcA": {
      getter: function (varBag, idService) {
        return varBag.model.variables.in_BorderRadiusIn;
      },
      dataType: OS.DataTypes.DataTypes.Integer,
    },
    Q2Y_Lkmq4kGitnf2FkEPQQ: {
      getter: function (varBag, idService) {
        return varBag.model.variables.in_IsReverseImageAndContentIn;
      },
      dataType: OS.DataTypes.DataTypes.Boolean,
    },
    okhOUt78sU6FrXxSSWvl8w: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Result_Item"));
        })(varBag.model, idService);
      },
    },
  };
  OutSystemsDebugger.registerMetaInfo(metaInfo);
});
