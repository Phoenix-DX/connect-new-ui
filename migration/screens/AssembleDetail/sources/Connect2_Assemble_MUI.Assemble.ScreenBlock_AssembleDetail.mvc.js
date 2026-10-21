define("Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleDetail.mvc$model", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_Assemble_MUI.model",
  "Connect2_Assemble_CS.model",
  "NavigationHandler.controller",
  "Connect2_LegacyShared.Layout.Layout.mvc$model",
  "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$model",
  "Connect2_LegacyShared.Reusable.NewConnectContent.mvc$model",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail.mvc$model",
  "NavigationHandler.ScrollAnchors.FocusScrollAnchorOnBack.mvc$model",
  "Connect2_Assemble_CS.model$AssembleDetailsPreloadingRec",
  "Connect2_Assemble_MUI.referencesHealth",
  "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS",
  "NavigationHandler.controller$AssignFromObject",
  "Connect2_Assemble_MUI.referencesHealth$NavigationHandler",
  "NavigationHandler.controller$GetPreloadObject",
], function (
  OutSystems,
  Connect2_Assemble_MUIModel,
  Connect2_Assemble_CSModel,
  NavigationHandlerController,
  Connect2_LegacyShared_Layout_Layout_mvcModel,
  Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel,
  Connect2_LegacyShared_Reusable_NewConnectContent_mvcModel,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_mvcModel,
  NavigationHandler_ScrollAnchors_FocusScrollAnchorOnBack_mvcModel,
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
          "CurrentItemPosition",
          "currentItemPositionVar",
          "CurrentItemPosition",
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return -1;
          },
          false,
        ),
        this.attr(
          "AssembleDetailsPreloading",
          "assembleDetailsPreloadingVar",
          "AssembleDetailsPreloading",
          true,
          false,
          OS.DataTypes.DataTypes.Record,
          function () {
            return OS.DataTypes.ImmutableBase.getData(
              new Connect2_Assemble_CSModel.AssembleDetailsPreloadingRec(),
            );
          },
          false,
          Connect2_Assemble_CSModel.AssembleDetailsPreloadingRec,
        ),
        this.attr(
          "EventId",
          "eventIdIn",
          "EventId",
          true,
          false,
          OS.DataTypes.DataTypes.Text,
          function () {
            return "";
          },
          false,
        ),
        this.attr(
          "_eventIdInDataFetchStatus",
          "_eventIdInDataFetchStatus",
          "_eventIdInDataFetchStatus",
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return /*Fetched*/ 1;
          },
          false,
        ),
        this.attr(
          "SeriesId",
          "seriesIdIn",
          "SeriesId",
          true,
          false,
          OS.DataTypes.DataTypes.Text,
          function () {
            return "";
          },
          false,
        ),
        this.attr(
          "_seriesIdInDataFetchStatus",
          "_seriesIdInDataFetchStatus",
          "_seriesIdInDataFetchStatus",
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return /*Fetched*/ 1;
          },
          false,
        ),
        this.attr(
          "Start",
          "startIn",
          "Start",
          true,
          false,
          OS.DataTypes.DataTypes.DateTime,
          function () {
            return OS.DataTypes.DateTime.defaultValue;
          },
          false,
        ),
        this.attr(
          "_startInDataFetchStatus",
          "_startInDataFetchStatus",
          "_startInDataFetchStatus",
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return /*Fetched*/ 1;
          },
          false,
        ),
        this.attr(
          "AssembleEventTypeTile",
          "assembleEventTypeTileIn",
          "AssembleEventTypeTile",
          true,
          false,
          OS.DataTypes.DataTypes.Text,
          function () {
            return "";
          },
          false,
        ),
        this.attr(
          "_assembleEventTypeTileInDataFetchStatus",
          "_assembleEventTypeTileInDataFetchStatus",
          "_assembleEventTypeTileInDataFetchStatus",
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
            Connect2_LegacyShared_Layout_Layout_mvcModel.hasValidationWidgets ||
            Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel.hasValidationWidgets ||
            Connect2_LegacyShared_Reusable_NewConnectContent_mvcModel.hasValidationWidgets ||
            Connect2_Assemble_MUI_Assemble_AssembleEventDetail_mvcModel.hasValidationWidgets ||
            NavigationHandler_ScrollAnchors_FocusScrollAnchorOnBack_mvcModel.hasValidationWidgets;
        }

        return Model._hasValidationWidgetsValue;
      },
    });

    Model.prototype.setInputs = function (inputs) {
      if ("EventId" in inputs) {
        this.variables.eventIdIn = inputs.EventId;
        if ("_eventIdInDataFetchStatus" in inputs) {
          this.variables._eventIdInDataFetchStatus =
            inputs._eventIdInDataFetchStatus;
        }
      }

      if ("SeriesId" in inputs) {
        this.variables.seriesIdIn = inputs.SeriesId;
        if ("_seriesIdInDataFetchStatus" in inputs) {
          this.variables._seriesIdInDataFetchStatus =
            inputs._seriesIdInDataFetchStatus;
        }
      }

      if ("Start" in inputs) {
        this.variables.startIn = inputs.Start;
        if ("_startInDataFetchStatus" in inputs) {
          this.variables._startInDataFetchStatus =
            inputs._startInDataFetchStatus;
        }
      }

      if ("AssembleEventTypeTile" in inputs) {
        this.variables.assembleEventTypeTileIn = inputs.AssembleEventTypeTile;
        if ("_assembleEventTypeTileInDataFetchStatus" in inputs) {
          this.variables._assembleEventTypeTileInDataFetchStatus =
            inputs._assembleEventTypeTileInDataFetchStatus;
        }
      }
    };
    return Model;
  })(OS.Model.BaseViewModel);
  return new OS.Model.ModelFactory(
    Model,
    "Assemble.ScreenBlock_AssembleDetail",
  );
});
define("Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleDetail.mvc$view", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_Assemble_MUI.model",
  "Connect2_Assemble_MUI.controller",
  "Connect2_Assemble_CS.model",
  "NavigationHandler.controller",
  "react",
  "OutSystems/ReactView/Main",
  "Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleDetail.mvc$model",
  "Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleDetail.mvc$controller",
  "Connect2_LegacyShared.Layout.Layout.mvc$view",
  "OutSystems/ReactWidgets/Main",
  "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$view",
  "Connect2_LegacyShared.Reusable.NewConnectContent.mvc$view",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail.mvc$view",
  "NavigationHandler.ScrollAnchors.FocusScrollAnchorOnBack.mvc$view",
  "Connect2_Assemble_CS.model$AssembleDetailsPreloadingRec",
  "Connect2_Assemble_MUI.referencesHealth",
  "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS",
  "NavigationHandler.controller$AssignFromObject",
  "Connect2_Assemble_MUI.referencesHealth$NavigationHandler",
  "NavigationHandler.controller$GetPreloadObject",
], function (
  OutSystems,
  Connect2_Assemble_MUIModel,
  Connect2_Assemble_MUIController,
  Connect2_Assemble_CSModel,
  NavigationHandlerController,
  React,
  OSView,
  Connect2_Assemble_MUI_Assemble_ScreenBlock_AssembleDetail_mvc_model,
  Connect2_Assemble_MUI_Assemble_ScreenBlock_AssembleDetail_mvc_controller,
  Connect2_LegacyShared_Layout_Layout_mvc_view,
  OSWidgets,
  Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view,
  Connect2_LegacyShared_Reusable_NewConnectContent_mvc_view,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_mvc_view,
  NavigationHandler_ScrollAnchors_FocusScrollAnchorOnBack_mvc_view,
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
    View.displayName = "Assemble.ScreenBlock_AssembleDetail";
    View.getCssDependencies = function () {
      return ["css/OutSystemsReactWidgets.css"];
    };
    View.getJsDependencies = function () {
      return [];
    };
    View.getBlocks = function () {
      return [
        Connect2_LegacyShared_Layout_Layout_mvc_view,
        Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view,
        Connect2_LegacyShared_Reusable_NewConnectContent_mvc_view,
        Connect2_Assemble_MUI_Assemble_AssembleEventDetail_mvc_view,
        NavigationHandler_ScrollAnchors_FocusScrollAnchorOnBack_mvc_view,
      ];
    };
    Object.defineProperty(View.prototype, "modelFactory", {
      get: function () {
        return Connect2_Assemble_MUI_Assemble_ScreenBlock_AssembleDetail_mvc_model;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(View.prototype, "controllerFactory", {
      get: function () {
        return Connect2_Assemble_MUI_Assemble_ScreenBlock_AssembleDetail_mvc_controller;
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
        React.createElement(Connect2_LegacyShared_Layout_Layout_mvc_view, {
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
            name: "Layout",
            alias: "1",
          },
          _widgetRecordProvider: widgetsRecordProvider,
          placeholders: {
            menu: PlaceholderContent.Empty,
            headerLeft: new PlaceholderContent(function () {
              return [
                React.createElement(
                  Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view,
                  {
                    inputs: {
                      MenuAction:
                        Connect2_Assemble_MUIModel.staticEntities.menuAction
                          .back,
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
                      uuid: "1",
                      alias: "2",
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    _dependencies: [],
                  },
                ),
              ];
            }),
            title: new PlaceholderContent(function () {
              return [
                React.createElement(OSWidgets.Expression, {
                  value:
                    model.variables.assembleDetailsPreloadingVar
                      .assembleEventSummaryAttr.assembleEventTypeAttr.titleAttr,
                  _idProps: {
                    service: idService,
                    uuid: "2",
                  },
                  _widgetRecordProvider: widgetsRecordProvider,
                }),
              ];
            }),
            headerRight: PlaceholderContent.Empty,
            headerContent: PlaceholderContent.Empty,
            content: new PlaceholderContent(function () {
              return [
                React.createElement(
                  Connect2_LegacyShared_Reusable_NewConnectContent_mvc_view,
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
                      alias: "3",
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    placeholders: {
                      content: new PlaceholderContent(function () {
                        return [
                          React.createElement(
                            Connect2_Assemble_MUI_Assemble_AssembleEventDetail_mvc_view,
                            {
                              inputs: {
                                SeriesId: model.variables.seriesIdIn,
                                _seriesIdInDataFetchStatus:
                                  OS.Model.calculateDataFetchStatus(
                                    model.variables._seriesIdInDataFetchStatus,
                                  ),
                                EventId: model.variables.eventIdIn,
                                _eventIdInDataFetchStatus:
                                  OS.Model.calculateDataFetchStatus(
                                    model.variables._eventIdInDataFetchStatus,
                                  ),
                                Start: model.variables.startIn,
                                _startInDataFetchStatus:
                                  OS.Model.calculateDataFetchStatus(
                                    model.variables._startInDataFetchStatus,
                                  ),
                              },
                              events: {
                                _handleError: function (ex) {
                                  controller.handleError(ex);
                                },
                                navigateTo_Household$Action: function (
                                  householdIdIn,
                                ) {
                                  var eventHandlerContext = callContext.clone();
                                  return OS.Flow.tryFinally(
                                    function () {
                                      var varBag = {};
                                      controller.pushDebuggerContext(
                                        eventHandlerContext,
                                      );

                                      OutSystemsDebugger.setThreadStartName(
                                        eventHandlerContext.id,
                                        "Assemble/AssembleEventDetail NavigateTo_Household",
                                      );
                                      controller.navigateTo_Household$Action(
                                        householdIdIn,
                                        controller.callContext(
                                          eventHandlerContext,
                                        ),
                                      );
                                    },
                                    function () {
                                      controller.popDebuggerContext(
                                        eventHandlerContext,
                                      );
                                    },
                                  );
                                },
                                navigateto_EmailContact$Action: function (
                                  event_AvatarURLIn,
                                  event_ContactNameIn,
                                  event_ContactSurnameIn,
                                  event_ContactLocalityIn,
                                  event_ContactCountryIn,
                                  event_EmailToIn,
                                  event_MemberIdIn,
                                ) {
                                  var eventHandlerContext = callContext.clone();
                                  return OS.Flow.tryFinally(
                                    function () {
                                      var varBag = {};
                                      controller.pushDebuggerContext(
                                        eventHandlerContext,
                                      );

                                      OutSystemsDebugger.setThreadStartName(
                                        eventHandlerContext.id,
                                        "Assemble/AssembleEventDetail Navigateto_EmailContact",
                                      );
                                      controller.navigateTo_EmailContact$Action(
                                        event_AvatarURLIn,
                                        event_ContactNameIn,
                                        event_ContactSurnameIn,
                                        event_ContactLocalityIn,
                                        event_ContactCountryIn,
                                        event_EmailToIn,
                                        event_MemberIdIn,
                                        controller.callContext(
                                          eventHandlerContext,
                                        ),
                                      );
                                    },
                                    function () {
                                      controller.popDebuggerContext(
                                        eventHandlerContext,
                                      );
                                    },
                                  );
                                },
                                navigateTo_HouseholdCarousel$Action: function (
                                  itemPositionIn,
                                  selectedHouseholdIdIn,
                                ) {
                                  var eventHandlerContext = callContext.clone();
                                  return OS.Flow.tryFinally(
                                    function () {
                                      var varBag = {};
                                      controller.pushDebuggerContext(
                                        eventHandlerContext,
                                      );

                                      OutSystemsDebugger.setThreadStartName(
                                        eventHandlerContext.id,
                                        "Assemble/AssembleEventDetail NavigateTo_HouseholdCarousel",
                                      );
                                      controller.navigateTo_HouseholdCarousel$Action(
                                        itemPositionIn,
                                        selectedHouseholdIdIn,
                                        controller.callContext(
                                          eventHandlerContext,
                                        ),
                                      );
                                    },
                                    function () {
                                      controller.popDebuggerContext(
                                        eventHandlerContext,
                                      );
                                    },
                                  );
                                },
                                eventNotFound$Action: function () {
                                  var eventHandlerContext = callContext.clone();
                                  return OS.Flow.tryFinally(
                                    function () {
                                      var varBag = {};
                                      controller.pushDebuggerContext(
                                        eventHandlerContext,
                                      );

                                      OutSystemsDebugger.setThreadStartName(
                                        eventHandlerContext.id,
                                        "Assemble/AssembleEventDetail EventNotFound",
                                      );
                                      controller.eventNotFound$Action(
                                        controller.callContext(
                                          eventHandlerContext,
                                        ),
                                      );
                                    },
                                    function () {
                                      controller.popDebuggerContext(
                                        eventHandlerContext,
                                      );
                                    },
                                  );
                                },
                                navigateTo_ShareObject$Action: function (
                                  shareObjectTypeIdIn,
                                  objectIdIn,
                                  in_IsExternalSharingIn,
                                ) {
                                  var eventHandlerContext = callContext.clone();
                                  return OS.Flow.tryFinally(
                                    function () {
                                      var varBag = {};
                                      controller.pushDebuggerContext(
                                        eventHandlerContext,
                                      );

                                      OutSystemsDebugger.setThreadStartName(
                                        eventHandlerContext.id,
                                        "Assemble/AssembleEventDetail NavigateTo_ShareObject",
                                      );
                                      controller.navigateTo_ShareObject$Action(
                                        shareObjectTypeIdIn,
                                        objectIdIn,
                                        in_IsExternalSharingIn,
                                        controller.callContext(
                                          eventHandlerContext,
                                        ),
                                      );
                                    },
                                    function () {
                                      controller.popDebuggerContext(
                                        eventHandlerContext,
                                      );
                                    },
                                  );
                                },
                                updateTitle$Action: function (titleIn) {
                                  var eventHandlerContext = callContext.clone();
                                  return OS.Flow.tryFinally(
                                    function () {
                                      var varBag = {};
                                      controller.pushDebuggerContext(
                                        eventHandlerContext,
                                      );

                                      OutSystemsDebugger.setThreadStartName(
                                        eventHandlerContext.id,
                                        "Assemble/AssembleEventDetail UpdateTitle",
                                      );
                                      controller.assembleDetailUpdateTitle$Action(
                                        titleIn,
                                        controller.callContext(
                                          eventHandlerContext,
                                        ),
                                      );
                                    },
                                    function () {
                                      controller.popDebuggerContext(
                                        eventHandlerContext,
                                      );
                                    },
                                  );
                                },
                              },
                              _validationProps: {
                                validationService: validationService,
                              },
                              _idProps: {
                                service: idService,
                                uuid: "4",
                                alias: "4",
                              },
                              _widgetRecordProvider: widgetsRecordProvider,
                              _dependencies: [],
                            },
                          ),
                          React.createElement(
                            NavigationHandler_ScrollAnchors_FocusScrollAnchorOnBack_mvc_view,
                            {
                              inputs: {
                                ListIndex:
                                  model.variables.currentItemPositionVar,
                                ScrollAnchorId:
                                  model.variables.assembleDetailsPreloadingVar.preloadedFromListIndexAttr.toString(),
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
                                uuid: "5",
                                alias: "5",
                              },
                              _widgetRecordProvider: widgetsRecordProvider,
                              _dependencies: [],
                            },
                          ),
                        ];
                      }),
                    },
                    _dependencies: [
                      asPrimitiveValue(
                        model.variables.assembleDetailsPreloadingVar
                          .preloadedFromListIndexAttr,
                      ),
                      asPrimitiveValue(model.variables.currentItemPositionVar),
                      asPrimitiveValue(model.variables.startIn),
                      asPrimitiveValue(model.variables.eventIdIn),
                      asPrimitiveValue(model.variables._startInDataFetchStatus),
                      asPrimitiveValue(
                        model.variables._eventIdInDataFetchStatus,
                      ),
                      asPrimitiveValue(
                        model.variables._seriesIdInDataFetchStatus,
                      ),
                      asPrimitiveValue(model.variables.seriesIdIn),
                    ],
                  },
                ),
              ];
            }),
            bottomBar: new PlaceholderContent(function () {
              return [
                React.createElement(OSWidgets.Placeholder, {
                  align: /*Default*/ 0,
                  content: _this.props.placeholders.bottomBar,
                  _idProps: {
                    service: idService,
                    name: "BottomBar",
                  },
                  _widgetRecordProvider: widgetsRecordProvider,
                }),
              ];
            }),
            commonUI_Elements: new PlaceholderContent(function () {
              return [
                React.createElement(OSWidgets.Placeholder, {
                  align: /*Default*/ 0,
                  content: _this.props.placeholders.commonUI_Elements,
                  _idProps: {
                    service: idService,
                    name: "CommonUI_Elements",
                  },
                  _widgetRecordProvider: widgetsRecordProvider,
                }),
              ];
            }),
          },
        }),
      );
    };
    return View;
  })(OSView.BaseView.BaseWebBlock);

  return View;
});
define("Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleDetail.mvc$controller", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_Assemble_MUI.model",
  "Connect2_Assemble_MUI.controller",
  "Connect2_Assemble_CS.model",
  "NavigationHandler.controller",
  "Connect2_Assemble_MUI.languageResources",
  "Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleDetail.mvc$debugger",
  "Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleDetail.mvc$controller.OnInitialize.WasCurrentViewRestoredFromCacheJS",
  "Connect2_Assemble_CS.model$AssembleDetailsPreloadingRec",
  "Connect2_Assemble_MUI.referencesHealth",
  "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS",
  "NavigationHandler.controller$AssignFromObject",
  "Connect2_Assemble_MUI.referencesHealth$NavigationHandler",
  "NavigationHandler.controller$GetPreloadObject",
], function (
  OutSystems,
  Connect2_Assemble_MUIModel,
  Connect2_Assemble_MUIController,
  Connect2_Assemble_CSModel,
  NavigationHandlerController,
  Connect2_Assemble_MUILanguageResources,
  Connect2_Assemble_MUI_Assemble_ScreenBlock_AssembleDetail_mvc_Debugger,
  Connect2_Assemble_MUI_Assemble_ScreenBlock_AssembleDetail_mvc_controller_OnInitialize_WasCurrentViewRestoredFromCacheJS,
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
      var wasCurrentViewRestoredFromCacheJSResult =
        new OS.DataTypes.VariableHolder();
      varBag.callContext = callContext;
      varBag.wasCurrentViewRestoredFromCacheJSResult =
        wasCurrentViewRestoredFromCacheJSResult;
      try {
        OutSystemsDebugger.push(
          "4YvUCWT53U+6BrZWsVWc3Q:rzjTgCTaF0mTz48hiw3LpA:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.N0OLaMtG2k+7WIGD8lOJow/ClientActions.rzjTgCTaF0mTz48hiw3LpA:pBpklkpk5a1vlS_dbgcOoQ",
          "Connect2_Assemble_MUI",
          "OnInitialize",
          "NRFlows.ClientScreenActionFlow",
          callContext.id,
          varBag,
        );
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:9YrES489cEmXndoR+vtuuQ",
          callContext.id,
        );
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:8d2TLXv_j0O9ylOZpKhKjA",
          callContext.id,
        );
        wasCurrentViewRestoredFromCacheJSResult.value =
          controller.safeExecuteJSNode(
            Connect2_Assemble_MUI_Assemble_ScreenBlock_AssembleDetail_mvc_controller_OnInitialize_WasCurrentViewRestoredFromCacheJS,
            "WasCurrentViewRestoredFromCache",
            "OnInitialize",
            {
              FromCache: OS.DataConversion.JSNodeParamConverter.to(
                false,
                OS.DataTypes.DataTypes.Boolean,
              ),
            },
            function ($parameters) {
              var jsNodeResult =
                new (controller.constructor.getVariableGroupType(
                  "Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleDetail.OnInitialize$wasCurrentViewRestoredFromCacheJSResult",
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
        if (
          OutSystemsDebugger.handleBreakpoint(
            "4YvUCWT53U+6BrZWsVWc3Q:1gQ2CB8bhUCcGl43dEs8yQ",
            callContext.id,
          ) &&
          wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut
        ) {
          OutSystemsDebugger.handleBreakpoint(
            "4YvUCWT53U+6BrZWsVWc3Q:wDNvo6+YEkSbWvpFrpYk_w",
            callContext.id,
          );
        } else {
          OutSystemsDebugger.handleBreakpoint(
            "4YvUCWT53U+6BrZWsVWc3Q:Z_je__SWV06wZWYhAxW7eQ",
            callContext.id,
          );
          // Execute Action: OnInitialize_Preload
          controller._onInitialize_Preload$Action(callContext);
          // Has preloaded title?
          if (
            OutSystemsDebugger.handleBreakpoint(
              "4YvUCWT53U+6BrZWsVWc3Q:Nzcwnmuk20yHKEuvRatKpw",
              callContext.id,
            ) &&
            model.variables.assembleDetailsPreloadingVar
              .assembleEventSummaryAttr.assembleEventTypeAttr.titleAttr === ""
          ) {
            OutSystemsDebugger.handleBreakpoint(
              "4YvUCWT53U+6BrZWsVWc3Q:w2AHlZhbPkq_qJU6UflZQg",
              callContext.id,
            );
            // AssembleDetailsPreloading.AssembleEventSummary.AssembleEventType.Title = AssembleEventTypeTile
            model.variables.assembleDetailsPreloadingVar.assembleEventSummaryAttr.assembleEventTypeAttr.titleAttr =
              model.variables.assembleEventTypeTileIn;
            OutSystemsDebugger.handleBreakpoint(
              "4YvUCWT53U+6BrZWsVWc3Q:S99VfCog6kmjD_JGHHekpg",
              callContext.id,
            );
          } else {
            OutSystemsDebugger.handleBreakpoint(
              "4YvUCWT53U+6BrZWsVWc3Q:S99VfCog6kmjD_JGHHekpg",
              callContext.id,
            );
          }
        }
      } catch (ex) {
        OutSystemsDebugger.handleException(ex, callContext.id);
        throw ex;
      } finally {
        OutSystemsDebugger.pop(
          "4YvUCWT53U+6BrZWsVWc3Q:rzjTgCTaF0mTz48hiw3LpA",
          callContext.id,
        );
      }
    };
    Controller.registerVariableGroupType(
      "Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleDetail.OnInitialize$wasCurrentViewRestoredFromCacheJSResult",
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
    Controller.prototype._assembleDetailUpdateTitle$Action = function (
      titleIn,
      callContext,
    ) {
      var varBag = {};
      var model = this.model;
      var controller = this.controller;
      var idService = this.idService;
      varBag.model = model;
      varBag.idService = idService;
      controller.ensureControllerAlive("AssembleDetailUpdateTitle");
      callContext = controller.callContext(callContext);
      var vars = new OS.DataTypes.VariableHolder(
        new (controller.constructor.getVariableGroupType(
          "Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleDetail.AssembleDetailUpdateTitle$vars",
        ))(),
      );
      vars.value.titleInLocal = titleIn;
      varBag.callContext = callContext;
      varBag.vars = vars;
      try {
        OutSystemsDebugger.push(
          "4YvUCWT53U+6BrZWsVWc3Q:IURsqJjG8kKEB+eSrM6dpg:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.N0OLaMtG2k+7WIGD8lOJow/ClientActions.IURsqJjG8kKEB+eSrM6dpg:S4vr+eUekqtKqsKlCP25oA",
          "Connect2_Assemble_MUI",
          "AssembleDetailUpdateTitle",
          "NRFlows.ClientScreenActionFlow",
          callContext.id,
          varBag,
        );
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:w1t_NyuY80GWmnmvH+lIQQ",
          callContext.id,
        );
        if (
          OutSystemsDebugger.handleBreakpoint(
            "4YvUCWT53U+6BrZWsVWc3Q:p_taMj+gVkm0hgoz8RKEFg",
            callContext.id,
          ) &&
          vars.value.titleInLocal === ""
        ) {
          OutSystemsDebugger.handleBreakpoint(
            "4YvUCWT53U+6BrZWsVWc3Q:w_Wrj6RdEECNblwvbVFuHA",
            callContext.id,
          );
        } else {
          OutSystemsDebugger.handleBreakpoint(
            "4YvUCWT53U+6BrZWsVWc3Q:vuttVGUHCEiR8_5ONi15+A",
            callContext.id,
          );
          // AssembleDetailsPreloading.AssembleEventSummary.AssembleEventType.Title = Title
          model.variables.assembleDetailsPreloadingVar.assembleEventSummaryAttr.assembleEventTypeAttr.titleAttr =
            vars.value.titleInLocal;
          OutSystemsDebugger.handleBreakpoint(
            "4YvUCWT53U+6BrZWsVWc3Q:w_Wrj6RdEECNblwvbVFuHA",
            callContext.id,
          );
        }
      } catch (ex) {
        OutSystemsDebugger.handleException(ex, callContext.id);
        throw ex;
      } finally {
        OutSystemsDebugger.pop(
          "4YvUCWT53U+6BrZWsVWc3Q:IURsqJjG8kKEB+eSrM6dpg",
          callContext.id,
        );
      }
    };
    Controller.registerVariableGroupType(
      "Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleDetail.AssembleDetailUpdateTitle$vars",
      [
        {
          name: "Title",
          attrName: "titleInLocal",
          mandatory: true,
          dataType: OS.DataTypes.DataTypes.Text,
          defaultValue: function () {
            return "";
          },
        },
      ],
    );
    Controller.prototype._onInitialize_Preload$Action = function (callContext) {
      var varBag = {};
      var model = this.model;
      var controller = this.controller;
      var idService = this.idService;
      varBag.model = model;
      varBag.idService = idService;
      controller.ensureControllerAlive("OnInitialize_Preload");
      callContext = controller.callContext(callContext);
      var assignFromObjectVar = new OS.DataTypes.VariableHolder();
      var getPreloadObjectVar = new OS.DataTypes.VariableHolder();
      varBag.callContext = callContext;
      varBag.assignFromObjectVar = assignFromObjectVar;
      varBag.getPreloadObjectVar = getPreloadObjectVar;
      try {
        OutSystemsDebugger.push(
          "4YvUCWT53U+6BrZWsVWc3Q:GI6a0kwESU+_X7kA1iB5hQ:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.N0OLaMtG2k+7WIGD8lOJow/ClientActions.GI6a0kwESU+_X7kA1iB5hQ:rtEUITvlWMRLxhyQPo9L5Q",
          "Connect2_Assemble_MUI",
          "OnInitialize_Preload",
          "NRFlows.ClientScreenActionFlow",
          callContext.id,
          varBag,
        );
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:hpvfzJ57c0mHM5F4a787eQ",
          callContext.id,
        );
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:1arBjAEh+0qdvfAd8s+gOA",
          callContext.id,
        );
        // Execute Action: GetPreloadObject
        getPreloadObjectVar.value =
          NavigationHandlerController.default.getPreloadObject$Action(
            callContext,
          );

        if (
          OutSystemsDebugger.handleBreakpoint(
            "4YvUCWT53U+6BrZWsVWc3Q:aLu_XBIKWU2Jx7f2t7GScg",
            callContext.id,
          ) &&
          getPreloadObjectVar.value.preloadOut !==
            OS.BuiltinFunctions.nullObject()
        ) {
          OutSystemsDebugger.handleBreakpoint(
            "4YvUCWT53U+6BrZWsVWc3Q:EmsVd6iCf0+ud1C4LB5YMA",
            callContext.id,
          );
          // Execute Action: AssignFromObject
          assignFromObjectVar.value =
            NavigationHandlerController.default.assignFromObject$Action(
              OS.BuiltinFunctions.toObject(
                model.variables.assembleDetailsPreloadingVar,
              ),
              getPreloadObjectVar.value.preloadOut,
              callContext,
            );

          OutSystemsDebugger.handleBreakpoint(
            "4YvUCWT53U+6BrZWsVWc3Q:fNlBE7CNqkWhv+zbc0wR8g",
            callContext.id,
          );
        } else {
          OutSystemsDebugger.handleBreakpoint(
            "4YvUCWT53U+6BrZWsVWc3Q:fNlBE7CNqkWhv+zbc0wR8g",
            callContext.id,
          );
        }
      } catch (ex) {
        OutSystemsDebugger.handleException(ex, callContext.id);
        throw ex;
      } finally {
        OutSystemsDebugger.pop(
          "4YvUCWT53U+6BrZWsVWc3Q:GI6a0kwESU+_X7kA1iB5hQ",
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
    Controller.prototype.assembleDetailUpdateTitle$Action = function (
      titleIn,
      callContext,
    ) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(
        controller._assembleDetailUpdateTitle$Action,
        callContext,
        titleIn,
      );
    };
    Controller.prototype.onInitialize_Preload$Action = function (callContext) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(
        controller._onInitialize_Preload$Action,
        callContext,
      );
    };
    Controller.prototype.eventNotFound$Action = function () {
      return Promise.resolve();
    };
    Controller.prototype.navigateTo_ShareObject$Action = function () {
      return Promise.resolve();
    };
    Controller.prototype.navigateTo_HouseholdCarousel$Action = function () {
      return Promise.resolve();
    };
    Controller.prototype.navigateTo_EmailContact$Action = function () {
      return Promise.resolve();
    };
    Controller.prototype.navigateTo_Household$Action = function () {
      return Promise.resolve();
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
        "4YvUCWT53U+6BrZWsVWc3Q:N0OLaMtG2k+7WIGD8lOJow:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.N0OLaMtG2k+7WIGD8lOJow:FHLVU2fddfCCqMylxxTuEw",
        "Connect2_Assemble_MUI",
        "ScreenBlock_AssembleDetail",
        "NRNodes.WebBlock",
        callContext.id,
        varBag,
      );
    };
    Controller.prototype.popDebuggerContext = function (callContext) {
      OutSystemsDebugger.pop(
        "4YvUCWT53U+6BrZWsVWc3Q:N0OLaMtG2k+7WIGD8lOJow",
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
            "Assemble/ScreenBlock_AssembleDetail On Initialize",
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
define("Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleDetail.mvc$controller.OnInitialize.WasCurrentViewRestoredFromCacheJS", [], function () {
  return function ($parameters, $actions, $roles, $public) {
    $parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
  };
});

define("Connect2_Assemble_MUI.Assemble.ScreenBlock_AssembleDetail.mvc$debugger", [
  "exports",
  "OutSystems/ClientRuntime/Debugger",
  "OutSystems/ClientRuntime/Main",
], function (exports, Debugger, OutSystems) {
  var OS = OutSystems.Internal;
  var metaInfo = {
    "8d2TLXv_j0O9ylOZpKhKjA": {
      getter: function (varBag, idService) {
        return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
      },
    },
    AFxMnP53gEiHcokQTEjbJg: {
      getter: function (varBag, idService) {
        return varBag.vars.value.titleInLocal;
      },
      dataType: OS.DataTypes.DataTypes.Text,
    },
    "EmsVd6iCf0+ud1C4LB5YMA": {
      getter: function (varBag, idService) {
        return varBag.assignFromObjectVar.value;
      },
    },
    "1arBjAEh+0qdvfAd8s+gOA": {
      getter: function (varBag, idService) {
        return varBag.getPreloadObjectVar.value;
      },
    },
    eUKjQV_v70GuQh9IeuXTIQ: {
      getter: function (varBag, idService) {
        return varBag.model.variables.currentItemPositionVar;
      },
      dataType: OS.DataTypes.DataTypes.Integer,
    },
    kv_tI4dqsUuQfPRPM6Chsg: {
      getter: function (varBag, idService) {
        return varBag.model.variables.assembleDetailsPreloadingVar;
      },
    },
    gKDNnZRyy0SoQv4wGDQKIw: {
      getter: function (varBag, idService) {
        return varBag.model.variables.eventIdIn;
      },
      dataType: OS.DataTypes.DataTypes.Text,
    },
    "oPE98I+UsU6fe2RrI0NgOg": {
      getter: function (varBag, idService) {
        return varBag.model.variables.seriesIdIn;
      },
      dataType: OS.DataTypes.DataTypes.Text,
    },
    upsO5a8dcEWa7qg_AnWhZA: {
      getter: function (varBag, idService) {
        return varBag.model.variables.startIn;
      },
      dataType: OS.DataTypes.DataTypes.DateTime,
    },
    "3V26n28QPkCXSHWPPd6Xgg": {
      getter: function (varBag, idService) {
        return varBag.model.variables.assembleEventTypeTileIn;
      },
      dataType: OS.DataTypes.DataTypes.Text,
    },
    N7vL2Hqd60GGXSM0r7T8Dw: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Layout"));
        })(varBag.model, idService);
      },
    },
    eBBZcxPn6k2RzYwO_UCqGA: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Menu"));
        })(varBag.model, idService);
      },
    },
    quY5zSpIcUmuctQiSE1hog: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("HeaderLeft"));
        })(varBag.model, idService);
      },
    },
    ufDHCmHC0Ei5IbRXaB2dxw: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Title"));
        })(varBag.model, idService);
      },
    },
    MJCwNFED6USQIRW9OsmSGA: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("HeaderRight"));
        })(varBag.model, idService);
      },
    },
    huYCCOsvn02h2g1iIfaBsA: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("HeaderContent"));
        })(varBag.model, idService);
      },
    },
    "_fXRyWom2UOkFywZ+iVkpg": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Content"));
        })(varBag.model, idService);
      },
    },
    fPJUhnxS1UCkRLkP4rKEYw: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Content"));
        })(varBag.model, idService);
      },
    },
    "MoxS0rWRH0m6rF+1+yFpwQ": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("BottomBar"));
        })(varBag.model, idService);
      },
    },
    URFkoN0cw0muJXxIGl0ZKw: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("BottomBar"));
        })(varBag.model, idService);
      },
    },
    Am3Dnkt1vkmhO4dEqOD1Xg: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("CommonUI_Elements"));
        })(varBag.model, idService);
      },
    },
    ESQELuskJkqkE3jmNUH91Q: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("CommonUI_Elements"));
        })(varBag.model, idService);
      },
    },
  };
  OutSystemsDebugger.registerMetaInfo(metaInfo);
});
