define("Connect2_Assemble_MUI.Assemble.AssembleEventDetail_Section.mvc$model", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_Assemble_MUI.model",
  "Connect2_LegacyShared.NewConnect_Skeleton.NC_Card_Item_Text__Skeleton.mvc$model",
], function (
  OutSystems,
  Connect2_Assemble_MUIModel,
  Connect2_LegacyShared_NewConnect_Skeleton_NC_Card_Item_Text__Skeleton_mvcModel,
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
          "IsLoading",
          "isLoadingIn",
          "IsLoading",
          true,
          false,
          OS.DataTypes.DataTypes.Boolean,
          function () {
            return false;
          },
          false,
        ),
        this.attr(
          "_isLoadingInDataFetchStatus",
          "_isLoadingInDataFetchStatus",
          "_isLoadingInDataFetchStatus",
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return /*Fetched*/ 1;
          },
          false,
        ),
        this.attr(
          "IsVisible",
          "isVisibleIn",
          "IsVisible",
          true,
          false,
          OS.DataTypes.DataTypes.Boolean,
          function () {
            return false;
          },
          false,
        ),
        this.attr(
          "_isVisibleInDataFetchStatus",
          "_isVisibleInDataFetchStatus",
          "_isVisibleInDataFetchStatus",
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
            Connect2_LegacyShared_NewConnect_Skeleton_NC_Card_Item_Text__Skeleton_mvcModel.hasValidationWidgets;
        }

        return Model._hasValidationWidgetsValue;
      },
    });

    Model.prototype.setInputs = function (inputs) {
      if ("IsLoading" in inputs) {
        this.variables.isLoadingIn = inputs.IsLoading;
        if ("_isLoadingInDataFetchStatus" in inputs) {
          this.variables._isLoadingInDataFetchStatus =
            inputs._isLoadingInDataFetchStatus;
        }
      }

      if ("IsVisible" in inputs) {
        this.variables.isVisibleIn = inputs.IsVisible;
        if ("_isVisibleInDataFetchStatus" in inputs) {
          this.variables._isVisibleInDataFetchStatus =
            inputs._isVisibleInDataFetchStatus;
        }
      }
    };
    return Model;
  })(OS.Model.BaseViewModel);
  return new OS.Model.ModelFactory(
    Model,
    "Assemble.AssembleEventDetail_Section",
  );
});
define("Connect2_Assemble_MUI.Assemble.AssembleEventDetail_Section.mvc$view", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_Assemble_MUI.model",
  "Connect2_Assemble_MUI.controller",
  "react",
  "OutSystems/ReactView/Main",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_Section.mvc$model",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_Section.mvc$controller",
  "OutSystems/ReactWidgets/Main",
  "Connect2_LegacyShared.NewConnect_Skeleton.NC_Card_Item_Text__Skeleton.mvc$view",
], function (
  OutSystems,
  Connect2_Assemble_MUIModel,
  Connect2_Assemble_MUIController,
  React,
  OSView,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_Section_mvc_model,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_Section_mvc_controller,
  OSWidgets,
  Connect2_LegacyShared_NewConnect_Skeleton_NC_Card_Item_Text__Skeleton_mvc_view,
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
    View.displayName = "Assemble.AssembleEventDetail_Section";
    View.getCssDependencies = function () {
      return ["css/OutSystemsReactWidgets.css"];
    };
    View.getJsDependencies = function () {
      return [];
    };
    View.getBlocks = function () {
      return [
        Connect2_LegacyShared_NewConnect_Skeleton_NC_Card_Item_Text__Skeleton_mvc_view,
      ];
    };
    Object.defineProperty(View.prototype, "modelFactory", {
      get: function () {
        return Connect2_Assemble_MUI_Assemble_AssembleEventDetail_Section_mvc_model;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(View.prototype, "controllerFactory", {
      get: function () {
        return Connect2_Assemble_MUI_Assemble_AssembleEventDetail_Section_mvc_controller;
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
            animate: true,
            visible: model.variables.isVisibleIn,
            _idProps: {
              service: idService,
              name: "AssembleDetailSection",
            },
            _widgetRecordProvider: widgetsRecordProvider,
            visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(
              model.variables._isVisibleInDataFetchStatus,
            ),
          },
          React.createElement(
            OSWidgets.Container,
            {
              align: /*Default*/ 0,
              animate: false,
              style: "section-header margin-top-base",
              visible: true,
              _idProps: {
                service: idService,
                name: "Section_Header",
              },
              _widgetRecordProvider: widgetsRecordProvider,
            },
            $if(
              model.variables.isLoadingIn,
              false,
              this,
              function () {
                return [
                  React.createElement(
                    OSWidgets.Container,
                    {
                      align: /*Default*/ 0,
                      animate: false,
                      gridProperties: {
                        classes: "ThemeGrid_Width7",
                      },
                      visible: true,
                      _idProps: {
                        service: idService,
                        uuid: "2",
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
                          uuid: "3",
                          alias: "1",
                        },
                        _widgetRecordProvider: widgetsRecordProvider,
                        _dependencies: [],
                      },
                    ),
                  ),
                ];
              },
              function () {
                return [
                  React.createElement(OSWidgets.Placeholder, {
                    align: /*Default*/ 0,
                    content: _this.props.placeholders.placeholder_Header,
                    _idProps: {
                      service: idService,
                      name: "Placeholder_Header",
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                  }),
                ];
              },
            ),
          ),
          $if(
            model.variables.isLoadingIn,
            false,
            this,
            function () {
              return [
                React.createElement(OSWidgets.Placeholder, {
                  align: /*Default*/ 0,
                  content:
                    _this.props.placeholders.placeholder_Content__Loading,
                  _idProps: {
                    service: idService,
                    name: "Placeholder_Content__Loading",
                  },
                  _widgetRecordProvider: widgetsRecordProvider,
                }),
              ];
            },
            function () {
              return [
                React.createElement(OSWidgets.Placeholder, {
                  align: /*Default*/ 0,
                  content: _this.props.placeholders.placeholder_Content,
                  _idProps: {
                    service: idService,
                    name: "Placeholder_Content",
                  },
                  _widgetRecordProvider: widgetsRecordProvider,
                }),
              ];
            },
          ),
        ),
      );
    };
    return View;
  })(OSView.BaseView.BaseWebBlock);

  return View;
});
define("Connect2_Assemble_MUI.Assemble.AssembleEventDetail_Section.mvc$controller", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_Assemble_MUI.model",
  "Connect2_Assemble_MUI.controller",
  "Connect2_Assemble_MUI.languageResources",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_Section.mvc$debugger",
], function (
  OutSystems,
  Connect2_Assemble_MUIModel,
  Connect2_Assemble_MUIController,
  Connect2_Assemble_MUILanguageResources,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_Section_mvc_Debugger,
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
        "4YvUCWT53U+6BrZWsVWc3Q:0TC_3DJIKUiC2_8MtxQUeg:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.0TC_3DJIKUiC2_8MtxQUeg:oa6iGlzu1OtTEwaSrkVJwg",
        "Connect2_Assemble_MUI",
        "AssembleEventDetail_Section",
        "NRNodes.WebBlock",
        callContext.id,
        varBag,
      );
    };
    Controller.prototype.popDebuggerContext = function (callContext) {
      OutSystemsDebugger.pop(
        "4YvUCWT53U+6BrZWsVWc3Q:0TC_3DJIKUiC2_8MtxQUeg",
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

define("Connect2_Assemble_MUI.Assemble.AssembleEventDetail_Section.mvc$debugger", [
  "exports",
  "OutSystems/ClientRuntime/Debugger",
  "OutSystems/ClientRuntime/Main",
], function (exports, Debugger, OutSystems) {
  var OS = OutSystems.Internal;
  var metaInfo = {
    sSHD0exUfked_h8GyB0Jng: {
      getter: function (varBag, idService) {
        return varBag.model.variables.isLoadingIn;
      },
      dataType: OS.DataTypes.DataTypes.Boolean,
    },
    WchnZR_ZZU6n3ZVDBfhMzg: {
      getter: function (varBag, idService) {
        return varBag.model.variables.isVisibleIn;
      },
      dataType: OS.DataTypes.DataTypes.Boolean,
    },
    "+kHnbys5DE+8cpFB4W0OHw": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("AssembleDetailSection"));
        })(varBag.model, idService);
      },
    },
    DWFSbk93F02HNpQ4bSU3oA: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Section_Header"));
        })(varBag.model, idService);
      },
    },
    DeiiyoPPB0yv9joW4lK16g: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Placeholder_Header"));
        })(varBag.model, idService);
      },
    },
    "uedhj9vG6k6HMfFlBjpx+Q": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Section_Content"));
        })(varBag.model, idService);
      },
    },
    MCJO5oGDW06oAf_IF8wHkw: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(
            idService.getId("Placeholder_Content__Loading"),
          );
        })(varBag.model, idService);
      },
    },
    e2wHFIy8EkOiwPX4utRY9g: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Placeholder_Content"));
        })(varBag.model, idService);
      },
    },
  };
  OutSystemsDebugger.registerMetaInfo(metaInfo);
});
