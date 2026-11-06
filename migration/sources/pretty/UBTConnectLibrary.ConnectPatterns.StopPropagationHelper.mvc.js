define('UBTConnectLibrary.ConnectPatterns.StopPropagationHelper.mvc$model', [
  'OutSystems/ClientRuntime/Main',
  'UBTConnectLibrary.model',
  'UBTConnectLibrary.controller',
  'UBTConnectLibrary.controller$StopPropagationHelper_GetClass',
], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController) {
  var OS = OutSystems.Internal;

  var VariablesRecord = (function (_super) {
    __extends(VariablesRecord, _super);
    function VariablesRecord(defaults) {
      _super.apply(this, arguments);
    }
    VariablesRecord.attributesToDeclare = function () {
      return [].concat(_super.attributesToDeclare.call(this));
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
    Object.defineProperty(Model, 'hasValidationWidgets', {
      enumerable: true,
      configurable: true,
      get: function () {
        return false;
      },
    });

    Model.prototype.setInputs = function (inputs) {};
    return Model;
  })(OS.Model.VariablelessViewModel);
  return new OS.Model.ModelFactory(Model, 'ConnectPatterns.StopPropagationHelper');
});
define('UBTConnectLibrary.ConnectPatterns.StopPropagationHelper.mvc$view', [
  'OutSystems/ClientRuntime/Main',
  'UBTConnectLibrary.model',
  'UBTConnectLibrary.controller',
  'react',
  'OutSystems/ReactView/Main',
  'UBTConnectLibrary.ConnectPatterns.StopPropagationHelper.mvc$model',
  'UBTConnectLibrary.ConnectPatterns.StopPropagationHelper.mvc$controller',
  'UBTConnectLibrary.clientVariables',
  'OutSystems/ReactWidgets/Main',
  'UBTConnectLibrary.controller$StopPropagationHelper_GetClass',
], function (
  OutSystems,
  UBTConnectLibraryModel,
  UBTConnectLibraryController,
  React,
  OSView,
  UBTConnectLibrary_ConnectPatterns_StopPropagationHelper_mvc_model,
  UBTConnectLibrary_ConnectPatterns_StopPropagationHelper_mvc_controller,
  UBTConnectLibraryClientVariables,
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
    View.displayName = 'ConnectPatterns.StopPropagationHelper';
    View.getCssDependencies = function () {
      return ['css/OutSystemsReactWidgets.css'];
    };
    View.getJsDependencies = function () {
      return [];
    };
    View.getBlocks = function () {
      return [];
    };
    Object.defineProperty(View.prototype, 'modelFactory', {
      get: function () {
        return UBTConnectLibrary_ConnectPatterns_StopPropagationHelper_mvc_model;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(View.prototype, 'controllerFactory', {
      get: function () {
        return UBTConnectLibrary_ConnectPatterns_StopPropagationHelper_mvc_controller;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(View.prototype, 'title', {
      get: function () {
        return '';
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
        'div',
        this.getRootNodeProperties(),
        React.createElement(OSWidgets.Placeholder, {
          align: /*Default*/ 0,
          content: _this.props.placeholders.content,
          style: model.getCachedValue(idService.getId('Content.Style'), function () {
            return OutSystemsDebugger.handleFunctionCall(
              function () {
                return UBTConnectLibraryController.default.stopPropagationHelper_GetClass$Action(callContext).classOut;
              },
              OS.DataTypes.DataTypes.Text,
              callContext.id,
            );
          }),
          _idProps: {
            service: idService,
            name: 'Content',
          },
          _widgetRecordProvider: widgetsRecordProvider,
        }),
      );
    };
    return View;
  })(OSView.BaseView.BaseWebBlock);

  return View;
});
define('UBTConnectLibrary.ConnectPatterns.StopPropagationHelper.mvc$controller', [
  'OutSystems/ClientRuntime/Main',
  'UBTConnectLibrary.model',
  'UBTConnectLibrary.controller',
  'UBTConnectLibrary.languageResources',
  'UBTConnectLibrary.clientVariables',
  'UBTConnectLibrary.ConnectPatterns.StopPropagationHelper.mvc$debugger',
  'UBTConnectLibrary.controller$StopPropagationHelper_GetClass',
], function (
  OutSystems,
  UBTConnectLibraryModel,
  UBTConnectLibraryController,
  UBTConnectLibraryLanguageResources,
  UBTConnectLibraryClientVariables,
  UBTConnectLibrary_ConnectPatterns_StopPropagationHelper_mvc_Debugger,
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
        'lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g:3o_94888UGa0qaomZFOpnQ',
        'UBTConnectLibrary',
        'ConnectPatterns',
        'NRFlows.WebFlow',
        callContext.id,
        varBag,
      );
      OutSystemsDebugger.push(
        'lAQ0zS6tEEyl6BBIK9yo1A:j6E9LcxL60md8tGHlOWgSg:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.j6E9LcxL60md8tGHlOWgSg:aJ2qty7+StI0ob_lpwjrOA',
        'UBTConnectLibrary',
        'StopPropagationHelper',
        'NRNodes.WebBlock',
        callContext.id,
        varBag,
      );
    };
    Controller.prototype.popDebuggerContext = function (callContext) {
      OutSystemsDebugger.pop('lAQ0zS6tEEyl6BBIK9yo1A:j6E9LcxL60md8tGHlOWgSg', callContext.id);
      OutSystemsDebugger.pop('lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g', callContext.id);
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
      return UBTConnectLibraryController.default.defaultTimeout;
    };
    return Controller;
  })(OS.Controller.BaseViewController);
  return new OS.Controller.ControllerFactory(Controller, UBTConnectLibraryLanguageResources);
});

define('UBTConnectLibrary.ConnectPatterns.StopPropagationHelper.mvc$debugger', [
  'exports',
  'OutSystems/ClientRuntime/Debugger',
  'OutSystems/ClientRuntime/Main',
], function (exports, Debugger, OutSystems) {
  var OS = OutSystems.Internal;
  var metaInfo = {
    NEupIJp7_E2dZ5qJkOFzWw: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId('Content'));
        })(varBag.model, idService);
      },
    },
  };
  OutSystemsDebugger.registerMetaInfo(metaInfo);
});
