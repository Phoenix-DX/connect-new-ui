define("Connect2_LegacyShared.Utility.ShowMoreShowLessContainer.mvc$model", [
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
          "ResizeEventListener",
          "resizeEventListenerVar",
          "ResizeEventListener",
          true,
          false,
          OS.DataTypes.DataTypes.Object,
          function () {
            return null;
          },
          false,
        ),
        this.attr(
          "Local_IsShowMore",
          "local_IsShowMoreVar",
          "Local_IsShowMore",
          true,
          false,
          OS.DataTypes.DataTypes.Boolean,
          function () {
            return false;
          },
          false,
        ),
        this.attr(
          "MaximumNumberOfLines",
          "maximumNumberOfLinesIn",
          "MaximumNumberOfLines",
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return 3;
          },
          false,
        ),
        this.attr(
          "_maximumNumberOfLinesInDataFetchStatus",
          "_maximumNumberOfLinesInDataFetchStatus",
          "_maximumNumberOfLinesInDataFetchStatus",
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return /*Fetched*/ 1;
          },
          false,
        ),
        this.attr(
          "ContentLineHeight",
          "contentLineHeightIn",
          "ContentLineHeight",
          true,
          false,
          OS.DataTypes.DataTypes.Text,
          function () {
            return "1.5em";
          },
          false,
        ),
        this.attr(
          "_contentLineHeightInDataFetchStatus",
          "_contentLineHeightInDataFetchStatus",
          "_contentLineHeightInDataFetchStatus",
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return /*Fetched*/ 1;
          },
          false,
        ),
        this.attr(
          "SectionHeaderId",
          "sectionHeaderIdIn",
          "SectionHeaderId",
          true,
          false,
          OS.DataTypes.DataTypes.Text,
          function () {
            return "";
          },
          false,
        ),
        this.attr(
          "_sectionHeaderIdInDataFetchStatus",
          "_sectionHeaderIdInDataFetchStatus",
          "_sectionHeaderIdInDataFetchStatus",
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
      if ("MaximumNumberOfLines" in inputs) {
        this.variables.maximumNumberOfLinesIn = inputs.MaximumNumberOfLines;
        if ("_maximumNumberOfLinesInDataFetchStatus" in inputs) {
          this.variables._maximumNumberOfLinesInDataFetchStatus =
            inputs._maximumNumberOfLinesInDataFetchStatus;
        }
      }

      if ("ContentLineHeight" in inputs) {
        this.variables.contentLineHeightIn = inputs.ContentLineHeight;
        if ("_contentLineHeightInDataFetchStatus" in inputs) {
          this.variables._contentLineHeightInDataFetchStatus =
            inputs._contentLineHeightInDataFetchStatus;
        }
      }

      if ("SectionHeaderId" in inputs) {
        this.variables.sectionHeaderIdIn = inputs.SectionHeaderId;
        if ("_sectionHeaderIdInDataFetchStatus" in inputs) {
          this.variables._sectionHeaderIdInDataFetchStatus =
            inputs._sectionHeaderIdInDataFetchStatus;
        }
      }
    };
    return Model;
  })(OS.Model.BaseViewModel);
  return new OS.Model.ModelFactory(Model, "Utility.ShowMoreShowLessContainer");
});
define("Connect2_LegacyShared.Utility.ShowMoreShowLessContainer.mvc$view", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_LegacyShared.model",
  "Connect2_LegacyShared.controller",
  "react",
  "OutSystems/ReactView/Main",
  "Connect2_LegacyShared.Utility.ShowMoreShowLessContainer.mvc$model",
  "Connect2_LegacyShared.Utility.ShowMoreShowLessContainer.mvc$controller",
  "Connect2_LegacyShared.clientVariables",
  "OutSystems/ReactWidgets/Main",
], function (
  OutSystems,
  Connect2_LegacySharedModel,
  Connect2_LegacySharedController,
  React,
  OSView,
  Connect2_LegacyShared_Utility_ShowMoreShowLessContainer_mvc_model,
  Connect2_LegacyShared_Utility_ShowMoreShowLessContainer_mvc_controller,
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
    View.displayName = "Utility.ShowMoreShowLessContainer";
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
        return Connect2_LegacyShared_Utility_ShowMoreShowLessContainer_mvc_model;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(View.prototype, "controllerFactory", {
      get: function () {
        return Connect2_LegacyShared_Utility_ShowMoreShowLessContainer_mvc_controller;
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
            style: "show-more-container",
            visible: true,
            _idProps: {
              service: idService,
              name: "Root",
            },
            _widgetRecordProvider: widgetsRecordProvider,
          },
          React.createElement(
            OSWidgets.Container,
            {
              align: /*Default*/ 0,
              animate: false,
              style: "position-relative",
              visible: true,
              _idProps: {
                service: idService,
                name: "DIV_Content",
              },
              _widgetRecordProvider: widgetsRecordProvider,
            },
            React.createElement(OSWidgets.Placeholder, {
              align: /*Default*/ 0,
              content: _this.props.placeholders.placeholder_Content,
              style: "show-more-body margin-bottom-base font-size-s",
              _idProps: {
                service: idService,
                name: "Placeholder_Content",
              },
              _widgetRecordProvider: widgetsRecordProvider,
            }),
            React.createElement(OSWidgets.Container, {
              align: /*Default*/ 0,
              animate: false,
              style: "show-more-cutoff",
              visible: true,
              _idProps: {
                service: idService,
                uuid: "3",
              },
              _widgetRecordProvider: widgetsRecordProvider,
            }),
          ),
          React.createElement(
            OSWidgets.Container,
            {
              align: /*Default*/ 0,
              animate: false,
              style: "font-size-s",
              visible: true,
              _idProps: {
                service: idService,
                name: "DIV_Actions",
              },
              _widgetRecordProvider: widgetsRecordProvider,
            },
            React.createElement(
              OSWidgets.Container,
              {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                  style: "text-align: right;",
                },
                style: "show-more-expand",
                visible: true,
                _idProps: {
                  service: idService,
                  name: "ShowMore",
                },
                _widgetRecordProvider: widgetsRecordProvider,
              },
              React.createElement(
                OSWidgets.Link,
                {
                  enabled: true,
                  onClick: function () {
                    var eventHandlerContext = callContext.clone();
                    return OS.Flow.tryFinally(
                      function () {
                        var varBag = {};
                        controller.pushDebuggerContext(eventHandlerContext);

                        OutSystemsDebugger.setThreadStartName(
                          eventHandlerContext.id,
                          "Utility/ShowMoreShowLessContainer/Link OnClick",
                        );
                        controller.showMoreLessOnClick$Action(
                          false,
                          controller.callContext(eventHandlerContext),
                        );
                      },
                      function () {
                        controller.popDebuggerContext(eventHandlerContext);
                      },
                    );
                  },
                  visible: true,
                  _idProps: {
                    service: idService,
                    uuid: "6",
                  },
                  _widgetRecordProvider: widgetsRecordProvider,
                },
                React.createElement(OSWidgets.Placeholder, {
                  align: /*Default*/ 0,
                  content: _this.props.placeholders.showMoreLabel,
                  _idProps: {
                    service: idService,
                    name: "ShowMoreLabel",
                  },
                  _widgetRecordProvider: widgetsRecordProvider,
                }),
              ),
            ),
            React.createElement(
              OSWidgets.Container,
              {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                  style: "text-align: right;",
                },
                style: "show-more-collapse",
                visible: true,
                _idProps: {
                  service: idService,
                  name: "ShowLess",
                },
                _widgetRecordProvider: widgetsRecordProvider,
              },
              React.createElement(
                OSWidgets.Link,
                {
                  enabled: true,
                  onClick: function () {
                    var eventHandlerContext = callContext.clone();
                    return OS.Flow.tryFinally(
                      function () {
                        var varBag = {};
                        controller.pushDebuggerContext(eventHandlerContext);

                        OutSystemsDebugger.setThreadStartName(
                          eventHandlerContext.id,
                          "Utility/ShowMoreShowLessContainer/Link OnClick",
                        );
                        controller.showMoreLessOnClick$Action(
                          true,
                          controller.callContext(eventHandlerContext),
                        );
                      },
                      function () {
                        controller.popDebuggerContext(eventHandlerContext);
                      },
                    );
                  },
                  visible: true,
                  _idProps: {
                    service: idService,
                    uuid: "9",
                  },
                  _widgetRecordProvider: widgetsRecordProvider,
                },
                React.createElement(OSWidgets.Placeholder, {
                  align: /*Default*/ 0,
                  content: _this.props.placeholders.showLessLabel,
                  _idProps: {
                    service: idService,
                    name: "ShowLessLabel",
                  },
                  _widgetRecordProvider: widgetsRecordProvider,
                }),
              ),
            ),
          ),
        ),
      );
    };
    return View;
  })(OSView.BaseView.BaseWebBlock);

  return View;
});
define("Connect2_LegacyShared.Utility.ShowMoreShowLessContainer.mvc$controller", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_LegacyShared.model",
  "Connect2_LegacyShared.controller",
  "Connect2_LegacyShared.languageResources",
  "Connect2_LegacyShared.clientVariables",
  "Connect2_LegacyShared.Utility.ShowMoreShowLessContainer.mvc$debugger",
  "Connect2_LegacyShared.Utility.ShowMoreShowLessContainer.mvc$controller.ShowMoreLessOnClick.JavaScript1JS",
  "Connect2_LegacyShared.Utility.ShowMoreShowLessContainer.mvc$controller.ShowMoreLessOnClick.ScrollToTopContainerJS",
  "Connect2_LegacyShared.Utility.ShowMoreShowLessContainer.mvc$controller.OnDestroy.RemoveResizeEventListenerJS",
  "Connect2_LegacyShared.Utility.ShowMoreShowLessContainer.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS",
  "Connect2_LegacyShared.Utility.ShowMoreShowLessContainer.mvc$controller.OnReady.InitiateShowMoreShowLessJS",
  "Connect2_LegacyShared.Utility.ShowMoreShowLessContainer.mvc$controller.OnReady.ToggleShowMoreShowLessJS",
], function (
  OutSystems,
  Connect2_LegacySharedModel,
  Connect2_LegacySharedController,
  Connect2_LegacySharedLanguageResources,
  Connect2_LegacySharedClientVariables,
  Connect2_LegacyShared_Utility_ShowMoreShowLessContainer_mvc_Debugger,
  Connect2_LegacyShared_Utility_ShowMoreShowLessContainer_mvc_controller_ShowMoreLessOnClick_JavaScript1JS,
  Connect2_LegacyShared_Utility_ShowMoreShowLessContainer_mvc_controller_ShowMoreLessOnClick_ScrollToTopContainerJS,
  Connect2_LegacyShared_Utility_ShowMoreShowLessContainer_mvc_controller_OnDestroy_RemoveResizeEventListenerJS,
  Connect2_LegacyShared_Utility_ShowMoreShowLessContainer_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS,
  Connect2_LegacyShared_Utility_ShowMoreShowLessContainer_mvc_controller_OnReady_InitiateShowMoreShowLessJS,
  Connect2_LegacyShared_Utility_ShowMoreShowLessContainer_mvc_controller_OnReady_ToggleShowMoreShowLessJS,
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
    Controller.prototype._showMoreLessOnClick$Action = function (
      isShowLessIn,
      callContext,
    ) {
      var varBag = {};
      var model = this.model;
      var controller = this.controller;
      var idService = this.idService;
      varBag.model = model;
      varBag.idService = idService;
      controller.ensureControllerAlive("ShowMoreLessOnClick");
      callContext = controller.callContext(callContext);
      var vars = new OS.DataTypes.VariableHolder(
        new (controller.constructor.getVariableGroupType(
          "Connect2_LegacyShared.Utility.ShowMoreShowLessContainer.ShowMoreLessOnClick$vars",
        ))(),
      );
      vars.value.isShowLessInLocal = isShowLessIn;
      varBag.callContext = callContext;
      varBag.vars = vars;
      try {
        OutSystemsDebugger.push(
          "DjcSN7X3Kkyt49iAAhnv1A:Nz2uYtYhjkemPjQfPaSFhA:/NRWebFlows.gVAcruMrmEKn5YhRe8dMaw/NodesShownInESpaceTree.fEKxqetliUudkEhq7HKGhw/ClientActions.Nz2uYtYhjkemPjQfPaSFhA:OxzY5TEkkcmL69G2KhIT4w",
          "Connect2_LegacyShared",
          "ShowMoreLessOnClick",
          "NRFlows.ClientScreenActionFlow",
          callContext.id,
          varBag,
        );
        OutSystemsDebugger.handleBreakpoint(
          "DjcSN7X3Kkyt49iAAhnv1A:OFUG_9kfW02lY9pFbtaHMA",
          callContext.id,
        );
        if (
          OutSystemsDebugger.handleBreakpoint(
            "DjcSN7X3Kkyt49iAAhnv1A:MowCwTgUCkO3aledgEhRVg",
            callContext.id,
          ) &&
          vars.value.isShowLessInLocal
        ) {
          OutSystemsDebugger.handleBreakpoint(
            "DjcSN7X3Kkyt49iAAhnv1A:feCDPOVWs0KeWByfdogsqg",
            callContext.id,
          );
          // Local_IsShowMore = False
          model.variables.local_IsShowMoreVar = false;
          OutSystemsDebugger.handleBreakpoint(
            "DjcSN7X3Kkyt49iAAhnv1A:t59YWY378UCKQxUNDFOYqw",
            callContext.id,
          );
          controller.safeExecuteJSNode(
            Connect2_LegacyShared_Utility_ShowMoreShowLessContainer_mvc_controller_ShowMoreLessOnClick_ScrollToTopContainerJS,
            "ScrollToTopContainer",
            "ShowMoreLessOnClick",
            {
              RootId: OS.DataConversion.JSNodeParamConverter.to(
                idService.getId("Root"),
                OS.DataTypes.DataTypes.Text,
              ),
              sectionHeaderId: OS.DataConversion.JSNodeParamConverter.to(
                model.variables.sectionHeaderIdIn,
                OS.DataTypes.DataTypes.Text,
              ),
            },
            function ($parameters) {},
            {},
            {},
          );
        } else {
          OutSystemsDebugger.handleBreakpoint(
            "DjcSN7X3Kkyt49iAAhnv1A:NBBEyKm5GU2v1jg24j30Vw",
            callContext.id,
          );
          // Local_IsShowMore = True
          model.variables.local_IsShowMoreVar = true;
        }

        OutSystemsDebugger.handleBreakpoint(
          "DjcSN7X3Kkyt49iAAhnv1A:WpQNQjlqyECcPbwS5s8_mA",
          callContext.id,
        );
        controller.safeExecuteJSNode(
          Connect2_LegacyShared_Utility_ShowMoreShowLessContainer_mvc_controller_ShowMoreLessOnClick_JavaScript1JS,
          "JavaScript1",
          "ShowMoreLessOnClick",
          {
            ContainerId: OS.DataConversion.JSNodeParamConverter.to(
              idService.getId("Root"),
              OS.DataTypes.DataTypes.Text,
            ),
          },
          function ($parameters) {},
          {},
          {},
        );
        OutSystemsDebugger.handleBreakpoint(
          "DjcSN7X3Kkyt49iAAhnv1A:6QWDBLM8P0+nL2hQ3FzUXQ",
          callContext.id,
        );
      } catch (ex) {
        OutSystemsDebugger.handleException(ex, callContext.id);
        throw ex;
      } finally {
        OutSystemsDebugger.pop(
          "DjcSN7X3Kkyt49iAAhnv1A:Nz2uYtYhjkemPjQfPaSFhA",
          callContext.id,
        );
      }
    };
    Controller.registerVariableGroupType(
      "Connect2_LegacyShared.Utility.ShowMoreShowLessContainer.ShowMoreLessOnClick$vars",
      [
        {
          name: "IsShowLess",
          attrName: "isShowLessInLocal",
          mandatory: true,
          dataType: OS.DataTypes.DataTypes.Boolean,
          defaultValue: function () {
            return false;
          },
        },
      ],
    );
    Controller.prototype._onDestroy$Action = function (callContext) {
      var varBag = {};
      var model = this.model;
      var controller = this.controller;
      var idService = this.idService;
      varBag.model = model;
      varBag.idService = idService;
      controller.ensureControllerAlive("OnDestroy");
      callContext = controller.callContext(callContext);
      varBag.callContext = callContext;
      try {
        OutSystemsDebugger.push(
          "DjcSN7X3Kkyt49iAAhnv1A:lJ0BwVAsy0qF7Gg8xW+BUQ:/NRWebFlows.gVAcruMrmEKn5YhRe8dMaw/NodesShownInESpaceTree.fEKxqetliUudkEhq7HKGhw/ClientActions.lJ0BwVAsy0qF7Gg8xW+BUQ:jG6wdSflcFv3MCHxMBIVGA",
          "Connect2_LegacyShared",
          "OnDestroy",
          "NRFlows.ClientScreenActionFlow",
          callContext.id,
          varBag,
        );
        OutSystemsDebugger.handleBreakpoint(
          "DjcSN7X3Kkyt49iAAhnv1A:TZqC5syMLka3eajD169hPQ",
          callContext.id,
        );
        OutSystemsDebugger.handleBreakpoint(
          "DjcSN7X3Kkyt49iAAhnv1A:MhLU0TOe_0GjmgivyPRd1w",
          callContext.id,
        );
        controller.safeExecuteJSNode(
          Connect2_LegacyShared_Utility_ShowMoreShowLessContainer_mvc_controller_OnDestroy_RemoveResizeEventListenerJS,
          "RemoveResizeEventListener",
          "OnDestroy",
          {
            ResizeEventListener: OS.DataConversion.JSNodeParamConverter.to(
              model.variables.resizeEventListenerVar,
              OS.DataTypes.DataTypes.Object,
            ),
          },
          function ($parameters) {},
          {},
          {},
        );
        OutSystemsDebugger.handleBreakpoint(
          "DjcSN7X3Kkyt49iAAhnv1A:qd64vKDJGkyIdtd0MFZ6zw",
          callContext.id,
        );
      } catch (ex) {
        OutSystemsDebugger.handleException(ex, callContext.id);
        throw ex;
      } finally {
        OutSystemsDebugger.pop(
          "DjcSN7X3Kkyt49iAAhnv1A:lJ0BwVAsy0qF7Gg8xW+BUQ",
          callContext.id,
        );
      }
    };
    Controller.prototype._onReady$Action = function (callContext) {
      var varBag = {};
      var model = this.model;
      var controller = this.controller;
      var idService = this.idService;
      varBag.model = model;
      varBag.idService = idService;
      controller.ensureControllerAlive("OnReady");
      callContext = controller.callContext(callContext);
      var wasCurrentViewRestoredFromCacheJSResult =
        new OS.DataTypes.VariableHolder();
      var initiateShowMoreShowLessJSResult = new OS.DataTypes.VariableHolder();
      varBag.callContext = callContext;
      varBag.wasCurrentViewRestoredFromCacheJSResult =
        wasCurrentViewRestoredFromCacheJSResult;
      varBag.initiateShowMoreShowLessJSResult =
        initiateShowMoreShowLessJSResult;
      try {
        OutSystemsDebugger.push(
          "DjcSN7X3Kkyt49iAAhnv1A:yMg88H1LnUybI4XDTPxI6Q:/NRWebFlows.gVAcruMrmEKn5YhRe8dMaw/NodesShownInESpaceTree.fEKxqetliUudkEhq7HKGhw/ClientActions.yMg88H1LnUybI4XDTPxI6Q:xlTKa3DA3tfNZv1KE3J98g",
          "Connect2_LegacyShared",
          "OnReady",
          "NRFlows.ClientScreenActionFlow",
          callContext.id,
          varBag,
        );
        OutSystemsDebugger.handleBreakpoint(
          "DjcSN7X3Kkyt49iAAhnv1A:Lhpb0AJ1FkyygqgBUUGqFw",
          callContext.id,
        );
        OutSystemsDebugger.handleBreakpoint(
          "DjcSN7X3Kkyt49iAAhnv1A:f_ZGpkl53ECxBuRgysDNnA",
          callContext.id,
        );
        wasCurrentViewRestoredFromCacheJSResult.value =
          controller.safeExecuteJSNode(
            Connect2_LegacyShared_Utility_ShowMoreShowLessContainer_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS,
            "WasCurrentViewRestoredFromCache",
            "OnReady",
            {
              FromCache: OS.DataConversion.JSNodeParamConverter.to(
                false,
                OS.DataTypes.DataTypes.Boolean,
              ),
            },
            function ($parameters) {
              var jsNodeResult =
                new (controller.constructor.getVariableGroupType(
                  "Connect2_LegacyShared.Utility.ShowMoreShowLessContainer.OnReady$wasCurrentViewRestoredFromCacheJSResult",
                ))();
              jsNodeResult.fromCacheOut =
                OS.DataConversion.JSNodeParamConverter.from(
                  $parameters.FromCache,
                  OS.DataTypes.DataTypes.Boolean,
                );
              return jsNodeResult;
            },
            {},
            {},
          );
        OutSystemsDebugger.handleBreakpoint(
          "DjcSN7X3Kkyt49iAAhnv1A:Y_BPpzrxIkKCOp1Lf7Stkw",
          callContext.id,
        );
        initiateShowMoreShowLessJSResult.value = controller.safeExecuteJSNode(
          Connect2_LegacyShared_Utility_ShowMoreShowLessContainer_mvc_controller_OnReady_InitiateShowMoreShowLessJS,
          "InitiateShowMoreShowLess",
          "OnReady",
          {
            ContainerId: OS.DataConversion.JSNodeParamConverter.to(
              idService.getId("Root"),
              OS.DataTypes.DataTypes.Text,
            ),
            RootId: OS.DataConversion.JSNodeParamConverter.to(
              idService.getId("Root"),
              OS.DataTypes.DataTypes.Text,
            ),
            ContentLineHeight: OS.DataConversion.JSNodeParamConverter.to(
              model.variables.contentLineHeightIn,
              OS.DataTypes.DataTypes.Text,
            ),
            MaximumNumberOfLines: OS.DataConversion.JSNodeParamConverter.to(
              model.variables.maximumNumberOfLinesIn,
              OS.DataTypes.DataTypes.Integer,
            ),
            BodyId: OS.DataConversion.JSNodeParamConverter.to(
              idService.getId("Placeholder_Content"),
              OS.DataTypes.DataTypes.Text,
            ),
            Listener: OS.DataConversion.JSNodeParamConverter.to(
              null,
              OS.DataTypes.DataTypes.Object,
            ),
          },
          function ($parameters) {
            var jsNodeResult = new (controller.constructor.getVariableGroupType(
              "Connect2_LegacyShared.Utility.ShowMoreShowLessContainer.OnReady$initiateShowMoreShowLessJSResult",
            ))();
            jsNodeResult.listenerOut =
              OS.DataConversion.JSNodeParamConverter.from(
                $parameters.Listener,
                OS.DataTypes.DataTypes.Object,
              );
            return jsNodeResult;
          },
          {},
          {},
        );
        OutSystemsDebugger.handleBreakpoint(
          "DjcSN7X3Kkyt49iAAhnv1A:JSTc6S3CUU+CFP7QhcqI2A",
          callContext.id,
        );
        // ResizeEventListener = InitiateShowMoreShowLess.Listener
        model.variables.resizeEventListenerVar =
          initiateShowMoreShowLessJSResult.value.listenerOut;
        if (
          OutSystemsDebugger.handleBreakpoint(
            "DjcSN7X3Kkyt49iAAhnv1A:kZFkKNy5hEusPkqgC7agRw",
            callContext.id,
          ) &&
          wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut
        ) {
          if (
            OutSystemsDebugger.handleBreakpoint(
              "DjcSN7X3Kkyt49iAAhnv1A:81JOnJH8uUa4SiGVETZvIw",
              callContext.id,
            ) &&
            model.variables.local_IsShowMoreVar
          ) {
            OutSystemsDebugger.handleBreakpoint(
              "DjcSN7X3Kkyt49iAAhnv1A:q_s4uPJZREmykZ6I1Z8icw",
              callContext.id,
            );
            controller.safeExecuteJSNode(
              Connect2_LegacyShared_Utility_ShowMoreShowLessContainer_mvc_controller_OnReady_ToggleShowMoreShowLessJS,
              "ToggleShowMoreShowLess",
              "OnReady",
              {
                ContainerId: OS.DataConversion.JSNodeParamConverter.to(
                  idService.getId("Root"),
                  OS.DataTypes.DataTypes.Text,
                ),
              },
              function ($parameters) {},
              {},
              {},
            );
            OutSystemsDebugger.handleBreakpoint(
              "DjcSN7X3Kkyt49iAAhnv1A:RyW4lTJ9XEabU2YH_eHm0Q",
              callContext.id,
            );
          } else {
            OutSystemsDebugger.handleBreakpoint(
              "DjcSN7X3Kkyt49iAAhnv1A:RyW4lTJ9XEabU2YH_eHm0Q",
              callContext.id,
            );
          }
        } else {
          OutSystemsDebugger.handleBreakpoint(
            "DjcSN7X3Kkyt49iAAhnv1A:0pM0LlJBOkKFpCS4e0o0FQ",
            callContext.id,
          );
        }
      } catch (ex) {
        OutSystemsDebugger.handleException(ex, callContext.id);
        throw ex;
      } finally {
        OutSystemsDebugger.pop(
          "DjcSN7X3Kkyt49iAAhnv1A:yMg88H1LnUybI4XDTPxI6Q",
          callContext.id,
        );
      }
    };
    Controller.registerVariableGroupType(
      "Connect2_LegacyShared.Utility.ShowMoreShowLessContainer.OnReady$wasCurrentViewRestoredFromCacheJSResult",
      [
        {
          name: "FromCache",
          attrName: "fromCacheOut",
          mandatory: true,
          dataType: OS.DataTypes.DataTypes.Boolean,
          defaultValue: function () {
            return false;
          },
        },
      ],
    );
    Controller.registerVariableGroupType(
      "Connect2_LegacyShared.Utility.ShowMoreShowLessContainer.OnReady$initiateShowMoreShowLessJSResult",
      [
        {
          name: "Listener",
          attrName: "listenerOut",
          mandatory: true,
          dataType: OS.DataTypes.DataTypes.Object,
          defaultValue: function () {
            return null;
          },
        },
      ],
    );

    Controller.prototype.showMoreLessOnClick$Action = function (
      isShowLessIn,
      callContext,
    ) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(
        controller._showMoreLessOnClick$Action,
        callContext,
        isShowLessIn,
      );
    };
    Controller.prototype.onDestroy$Action = function (callContext) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(
        controller._onDestroy$Action,
        callContext,
      );
    };
    Controller.prototype.onReady$Action = function (callContext) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(
        controller._onReady$Action,
        callContext,
      );
    };

    // Event Handler Actions
    Controller.prototype.pushDebuggerContext = function (callContext) {
      var varBag = {};
      OutSystemsDebugger.push(
        "DjcSN7X3Kkyt49iAAhnv1A:gVAcruMrmEKn5YhRe8dMaw:/NRWebFlows.gVAcruMrmEKn5YhRe8dMaw:y4OEvNt9FV7g_od25DYkmA",
        "Connect2_LegacyShared",
        "Utility",
        "NRFlows.WebFlow",
        callContext.id,
        varBag,
      );
      OutSystemsDebugger.push(
        "DjcSN7X3Kkyt49iAAhnv1A:fEKxqetliUudkEhq7HKGhw:/NRWebFlows.gVAcruMrmEKn5YhRe8dMaw/NodesShownInESpaceTree.fEKxqetliUudkEhq7HKGhw:5DbC1VxAQi8y9+Vi4SIqMg",
        "Connect2_LegacyShared",
        "ShowMoreShowLessContainer",
        "NRNodes.WebBlock",
        callContext.id,
        varBag,
      );
    };
    Controller.prototype.popDebuggerContext = function (callContext) {
      OutSystemsDebugger.pop(
        "DjcSN7X3Kkyt49iAAhnv1A:fEKxqetliUudkEhq7HKGhw",
        callContext.id,
      );
      OutSystemsDebugger.pop(
        "DjcSN7X3Kkyt49iAAhnv1A:gVAcruMrmEKn5YhRe8dMaw",
        callContext.id,
      );
    };
    Controller.prototype.onInitializeEventHandler = null;
    Controller.prototype.onReadyEventHandler = function (callContext) {
      var controller = this.controller;
      var model = this.model;
      var idService = this.idService;

      return OS.Flow.tryFinally(
        function () {
          var varBag = {};
          controller.pushDebuggerContext(callContext);

          OutSystemsDebugger.setThreadStartName(
            callContext.id,
            "Utility/ShowMoreShowLessContainer On Ready",
          );
          return controller.onReady$Action(callContext);
        },
        function () {
          controller.popDebuggerContext(callContext);
        },
      );
    };
    Controller.prototype.onRenderEventHandler = null;
    Controller.prototype.onDestroyEventHandler = function (callContext) {
      var controller = this.controller;
      var model = this.model;
      var idService = this.idService;

      return OS.Flow.tryFinally(
        function () {
          var varBag = {};
          controller.pushDebuggerContext(callContext);

          OutSystemsDebugger.setThreadStartName(
            callContext.id,
            "Utility/ShowMoreShowLessContainer On Destroy",
          );
          return controller.onDestroy$Action(callContext);
        },
        function () {
          controller.popDebuggerContext(callContext);
        },
      );
    };
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
define("Connect2_LegacyShared.Utility.ShowMoreShowLessContainer.mvc$controller.ShowMoreLessOnClick.JavaScript1JS", [], function () {
  return function ($parameters, $actions, $roles, $public) {
    var container = document.getElementById($parameters.ContainerId);
    (function () {
      container.classList.toggle("show-more-expanded");
    })();
  };
});
define("Connect2_LegacyShared.Utility.ShowMoreShowLessContainer.mvc$controller.ShowMoreLessOnClick.ScrollToTopContainerJS", [], function () {
  return function ($parameters, $actions, $roles, $public) {
    let showMoreShowLessEl = document.getElementById($parameters.RootId);
    let sectionHeader = null;
    let scrollableContainer = null;
    if (
      showMoreShowLessEl &&
      showMoreShowLessEl.classList.contains("show-more-expanded")
    ) {
      sectionHeader = document.getElementById($parameters.sectionHeaderId);
      scrollableContainer = document.querySelector(".content");
      if (
        scrollableContainer &&
        sectionHeader &&
        scrollableContainer.scrollTop > sectionHeader.offsetTop
      ) {
        scrollableContainer.scrollTo({
          top: sectionHeader.offsetTop,
          left: 0,
          behavior: "smooth",
        });
      }
    }
  };
});
define("Connect2_LegacyShared.Utility.ShowMoreShowLessContainer.mvc$controller.OnDestroy.RemoveResizeEventListenerJS", [], function () {
  return function ($parameters, $actions, $roles, $public) {
    removeEventListener("resize", $parameters.ResizeEventListener);
  };
});
define("Connect2_LegacyShared.Utility.ShowMoreShowLessContainer.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", [], function () {
  return function ($parameters, $actions, $roles, $public) {
    $parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
  };
});
define("Connect2_LegacyShared.Utility.ShowMoreShowLessContainer.mvc$controller.OnReady.InitiateShowMoreShowLessJS", [], function () {
  return function ($parameters, $actions, $roles, $public) {
    var container = document.getElementById($parameters.ContainerId);
    var body = document.getElementById($parameters.BodyId);
    var root = document.getElementById($parameters.RootId);

    root.style =
      "--overflow-max-lines: " +
      $parameters.MaximumNumberOfLines +
      "; --content-line-height: " +
      $parameters.ContentLineHeight;

    window.setTimeout(function () {
      if (body.scrollHeight > body.offsetHeight) {
        container.classList.add("show-more-overflowing");
      }
    }, 0);

    $parameters.Listener = function () {
      if (body.scrollHeight > body.offsetHeight) {
        container.classList.add("show-more-overflowing");
      } else {
        container.classList.remove("show-more-overflowing");
      }
    };
    window.addEventListener("resize", $parameters.Listener);
  };
});
define("Connect2_LegacyShared.Utility.ShowMoreShowLessContainer.mvc$controller.OnReady.ToggleShowMoreShowLessJS", [], function () {
  return function ($parameters, $actions, $roles, $public) {
    var container = document.getElementById($parameters.ContainerId);
    (function () {
      container.classList.toggle("show-more-expanded");
    })();
  };
});

define("Connect2_LegacyShared.Utility.ShowMoreShowLessContainer.mvc$debugger", [
  "exports",
  "OutSystems/ClientRuntime/Debugger",
  "OutSystems/ClientRuntime/Main",
], function (exports, Debugger, OutSystems) {
  var OS = OutSystems.Internal;
  var metaInfo = {
    clqQkOvv5UqokkLRVdjvPQ: {
      getter: function (varBag, idService) {
        return varBag.vars.value.isShowLessInLocal;
      },
      dataType: OS.DataTypes.DataTypes.Boolean,
    },
    WpQNQjlqyECcPbwS5s8_mA: {
      getter: function (varBag, idService) {
        return varBag.javaScript1JSResult.value;
      },
    },
    t59YWY378UCKQxUNDFOYqw: {
      getter: function (varBag, idService) {
        return varBag.scrollToTopContainerJSResult.value;
      },
    },
    MhLU0TOe_0GjmgivyPRd1w: {
      getter: function (varBag, idService) {
        return varBag.removeResizeEventListenerJSResult.value;
      },
    },
    f_ZGpkl53ECxBuRgysDNnA: {
      getter: function (varBag, idService) {
        return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
      },
    },
    Y_BPpzrxIkKCOp1Lf7Stkw: {
      getter: function (varBag, idService) {
        return varBag.initiateShowMoreShowLessJSResult.value;
      },
    },
    q_s4uPJZREmykZ6I1Z8icw: {
      getter: function (varBag, idService) {
        return varBag.toggleShowMoreShowLessJSResult.value;
      },
    },
    jHuKr8YifkmkzqzX0cA7mw: {
      getter: function (varBag, idService) {
        return varBag.model.variables.resizeEventListenerVar;
      },
      dataType: OS.DataTypes.DataTypes.Object,
    },
    "w+CIUeHDukS+kXNKn+bKoQ": {
      getter: function (varBag, idService) {
        return varBag.model.variables.local_IsShowMoreVar;
      },
      dataType: OS.DataTypes.DataTypes.Boolean,
    },
    "qfmL+cxsj0yDOEPhG_Y2mw": {
      getter: function (varBag, idService) {
        return varBag.model.variables.maximumNumberOfLinesIn;
      },
      dataType: OS.DataTypes.DataTypes.Integer,
    },
    te8saliP4Eq5JetCifYbCg: {
      getter: function (varBag, idService) {
        return varBag.model.variables.contentLineHeightIn;
      },
      dataType: OS.DataTypes.DataTypes.Text,
    },
    A_lxJgM68Ua_OwLozHMshQ: {
      getter: function (varBag, idService) {
        return varBag.model.variables.sectionHeaderIdIn;
      },
      dataType: OS.DataTypes.DataTypes.Text,
    },
    crooUlUYz0mhVGY2y4xLfw: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Root"));
        })(varBag.model, idService);
      },
    },
    Fb046ysifUSmL7yCOo_Pkw: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("DIV_Content"));
        })(varBag.model, idService);
      },
    },
    OfBw2r5MS0u721K4vNEu4g: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Placeholder_Content"));
        })(varBag.model, idService);
      },
    },
    gZ2C5JFVcESY0FaBWL95Vg: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("DIV_Actions"));
        })(varBag.model, idService);
      },
    },
    "CaPEYqLvRU+Kdh0D01Kwfg": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("ShowMore"));
        })(varBag.model, idService);
      },
    },
    HUz_iZYsJU26R2llYxTKUA: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("ShowMoreLabel"));
        })(varBag.model, idService);
      },
    },
    oh5zhsw78ESHxANiVyP8yg: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("ShowLess"));
        })(varBag.model, idService);
      },
    },
    _JPfZj_T4ECccxOW4WbqMw: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("ShowLessLabel"));
        })(varBag.model, idService);
      },
    },
  };
  OutSystemsDebugger.registerMetaInfo(metaInfo);
});
