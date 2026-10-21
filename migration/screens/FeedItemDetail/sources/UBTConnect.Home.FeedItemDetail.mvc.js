define("UBTConnect.Home.FeedItemDetail.mvc$model", [
  "OutSystems/ClientRuntime/Main",
  "UBTConnect.model",
  "Connect2_Sharing_CS.model",
  "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$model",
  "UBTConnect.Home.Feed_Embeded.mvc$model",
  "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model",
  "UBTConnect_Utils.CW_Share.ShareSheet.mvc$model",
  "UBTConnect_Utils.CW_Share.ShareableObject_Generic.mvc$model",
  "Connect2_Sharing_CS.model$UI_ShareableObject_GenericRec",
  "UBTConnect.referencesHealth",
  "UBTConnect.referencesHealth$Connect2_Sharing_CS",
], function (
  OutSystems,
  UBTConnectModel,
  Connect2_Sharing_CSModel,
  UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel,
  UBTConnect_Home_Feed_Embeded_mvcModel,
  UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel,
  UBTConnect_Utils_CW_Share_ShareSheet_mvcModel,
  UBTConnect_Utils_CW_Share_ShareableObject_Generic_mvcModel,
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
          "IsShareOpen",
          "isShareOpenVar",
          "IsShareOpen",
          true,
          false,
          OS.DataTypes.DataTypes.Boolean,
          function () {
            return false;
          },
          false,
        ),
        this.attr(
          "ShareableObjectId",
          "shareableObjectIdVar",
          "ShareableObjectId",
          true,
          false,
          OS.DataTypes.DataTypes.Text,
          function () {
            return "";
          },
          false,
        ),
        this.attr(
          "ShareObjectTypeId",
          "shareObjectTypeIdVar",
          "ShareObjectTypeId",
          true,
          false,
          OS.DataTypes.DataTypes.Text,
          function () {
            return "";
          },
          false,
        ),
        this.attr(
          "ShareableFeedItem",
          "shareableFeedItemVar",
          "ShareableFeedItem",
          true,
          false,
          OS.DataTypes.DataTypes.Record,
          function () {
            return OS.DataTypes.ImmutableBase.getData(
              new Connect2_Sharing_CSModel.UI_ShareableObject_GenericRec(),
            );
          },
          false,
          Connect2_Sharing_CSModel.UI_ShareableObject_GenericRec,
        ),
        this.attr(
          "FeedItemId",
          "feedItemIdIn",
          "FeedItemId",
          true,
          false,
          OS.DataTypes.DataTypes.Text,
          function () {
            return "";
          },
          false,
        ),
        this.attr(
          "_feedItemIdInDataFetchStatus",
          "_feedItemIdInDataFetchStatus",
          "_feedItemIdInDataFetchStatus",
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
            UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel.hasValidationWidgets ||
            UBTConnect_Home_Feed_Embeded_mvcModel.hasValidationWidgets ||
            UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets ||
            UBTConnect_Utils_CW_Share_ShareSheet_mvcModel.hasValidationWidgets ||
            UBTConnect_Utils_CW_Share_ShareableObject_Generic_mvcModel.hasValidationWidgets;
        }

        return Model._hasValidationWidgetsValue;
      },
    });

    Model.prototype.setInputs = function (inputs) {
      if ("FeedItemId" in inputs) {
        this.variables.feedItemIdIn =
          OS.DataConversion.ServerDataConverter.from(
            inputs.FeedItemId,
            OS.DataTypes.DataTypes.Text,
          );
      }
    };
    return Model;
  })(OS.Model.BaseViewModel);
  return new OS.Model.ModelFactory(Model, "Home.FeedItemDetail");
});
define("UBTConnect.Home.FeedItemDetail.mvc$view", [
  "OutSystems/ClientRuntime/Main",
  "UBTConnect.model",
  "UBTConnect.controller",
  "Connect2_Sharing_CS.model",
  "react",
  "OutSystems/ReactView/Main",
  "UBTConnect.Home.FeedItemDetail.mvc$model",
  "UBTConnect.Home.FeedItemDetail.mvc$controller",
  "UBTConnect.clientVariables",
  "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$view",
  "OutSystems/ReactWidgets/Main",
  "UBTConnect.Home.Feed_Embeded.mvc$view",
  "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view",
  "UBTConnect_Utils.CW_Share.ShareSheet.mvc$view",
  "UBTConnect_Utils.CW_Share.ShareableObject_Generic.mvc$view",
  "Connect2_Sharing_CS.model$UI_ShareableObject_GenericRec",
  "UBTConnect.referencesHealth",
  "UBTConnect.referencesHealth$Connect2_Sharing_CS",
], function (
  OutSystems,
  UBTConnectModel,
  UBTConnectController,
  Connect2_Sharing_CSModel,
  React,
  OSView,
  UBTConnect_Home_FeedItemDetail_mvc_model,
  UBTConnect_Home_FeedItemDetail_mvc_controller,
  UBTConnectClientVariables,
  UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view,
  OSWidgets,
  UBTConnect_Home_Feed_Embeded_mvc_view,
  UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view,
  UBTConnect_Utils_CW_Share_ShareSheet_mvc_view,
  UBTConnect_Utils_CW_Share_ShareableObject_Generic_mvc_view,
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
    View.displayName = "Home.FeedItemDetail";
    View.getCssDependencies = function () {
      return [
        "css/OutSystemsReactWidgets.css",
        "css/OutSystemsUI_2_23.OutSystemsUI.css",
        "css/UBTConnectLibrary.UBTConnectBase.css",
        "css/UBTConnectLibrary.UBTConnectLibrary.css",
        "css/Connect2_LegacyShared.UBTConnect.css",
        "css/OutSystemsUI_2_23.OutSystemsUI.extra.css",
      ];
    };
    View.getJsDependencies = function () {
      return [];
    };
    View.getBlocks = function () {
      return [
        UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view,
        UBTConnect_Home_Feed_Embeded_mvc_view,
        UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view,
        UBTConnect_Utils_CW_Share_ShareSheet_mvc_view,
        UBTConnect_Utils_CW_Share_ShareableObject_Generic_mvc_view,
      ];
    };
    Object.defineProperty(View.prototype, "modelFactory", {
      get: function () {
        return UBTConnect_Home_FeedItemDetail_mvc_model;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(View.prototype, "controllerFactory", {
      get: function () {
        return UBTConnect_Home_FeedItemDetail_mvc_controller;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(View.prototype, "title", {
      get: function () {
        return "FeedItemDetail";
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
          UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view,
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
              uuid: "0",
              alias: "1",
            },
            _widgetRecordProvider: widgetsRecordProvider,
            placeholders: {
              placeholder_Header_Title: new PlaceholderContent(function () {
                return ["Feed Item"];
              }),
              placeholder_Header_Right: PlaceholderContent.Empty,
              headerContent: PlaceholderContent.Empty,
              content: new PlaceholderContent(function () {
                return [
                  React.createElement(UBTConnect_Home_Feed_Embeded_mvc_view, {
                    inputs: {
                      FeedItemId: model.variables.feedItemIdIn,
                    },
                    events: {
                      _handleError: function (ex) {
                        controller.handleError(ex);
                      },
                      event_Share$Action: function (
                        event_ShareIdIn,
                        event_FeedItemTitleIn,
                        event_FeedItemSubtitleIn,
                        event_FeedItemImageURLIn,
                      ) {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(
                          function () {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(
                              eventHandlerContext.id,
                              "Home/Feed_Embeded Event_Share",
                            );
                            controller.handler_ShareFeed$Action(
                              event_ShareIdIn,
                              event_FeedItemTitleIn,
                              event_FeedItemSubtitleIn,
                              event_FeedItemImageURLIn,
                              controller.callContext(eventHandlerContext),
                            );
                          },
                          function () {
                            controller.popDebuggerContext(eventHandlerContext);
                          },
                        );
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
                  }),
                ];
              }),
              bottom: PlaceholderContent.Empty,
              placeholder_CommonUI_Inside_Layout: new PlaceholderContent(
                function () {
                  return [
                    React.createElement(
                      UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view,
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
                          uuid: "2",
                          alias: "3",
                        },
                        _widgetRecordProvider: widgetsRecordProvider,
                        _dependencies: [],
                      },
                    ),
                  ];
                },
              ),
            },
            _dependencies: [asPrimitiveValue(model.variables.feedItemIdIn)],
          },
        ),
        React.createElement(UBTConnect_Utils_CW_Share_ShareSheet_mvc_view, {
          inputs: {
            In_ShareableObjectId: model.variables.shareableObjectIdVar,
            In_UpdateType: "",
            In_ShareObjectTypeId: model.variables.shareObjectTypeIdVar,
            In_UpdateDate: model.getCachedValue(
              idService.getId("o1UGw7n5EUaH5IbV8M850Q.In_UpdateDate"),
              function () {
                return OS.BuiltinFunctions.nullDate();
              },
            ),
            In_IsOpen: model.variables.isShareOpenVar,
          },
          events: {
            _handleError: function (ex) {
              controller.handleError(ex);
            },
            event_ClosedShareSheet$Action: function () {
              var eventHandlerContext = callContext.clone();
              return OS.Flow.tryFinally(
                function () {
                  var varBag = {};
                  controller.pushDebuggerContext(eventHandlerContext);

                  OutSystemsDebugger.setThreadStartName(
                    eventHandlerContext.id,
                    "CW_Share/ShareSheet Event_ClosedShareSheet",
                  );
                  controller.handler_CloseShareSheet$Action(
                    controller.callContext(eventHandlerContext),
                  );
                },
                function () {
                  controller.popDebuggerContext(eventHandlerContext);
                },
              );
            },
          },
          _validationProps: {
            validationService: validationService,
          },
          _idProps: {
            service: idService,
            uuid: "3",
            alias: "4",
          },
          _widgetRecordProvider: widgetsRecordProvider,
          placeholders: {
            placeholder_ShareableObject: new PlaceholderContent(function () {
              return [
                React.createElement(
                  UBTConnect_Utils_CW_Share_ShareableObject_Generic_mvc_view,
                  {
                    inputs: {
                      In_ShareableObject: model.variables.shareableFeedItemVar,
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
            asPrimitiveValue(model.variables.shareableFeedItemVar),
          ],
        }),
      );
    };
    return View;
  })(OSView.BaseView.BaseWebScreen);

  return View;
});
define("UBTConnect.Home.FeedItemDetail.mvc$controller", [
  "OutSystems/ClientRuntime/Main",
  "UBTConnect.model",
  "UBTConnect.controller",
  "Connect2_Sharing_CS.model",
  "UBTConnect.languageResources",
  "UBTConnect.clientVariables",
  "UBTConnect.Home.FeedItemDetail.mvc$debugger",
  "UBTConnect.Home.controller",
  "Connect2_Sharing_CS.model$UI_ShareableObject_GenericRec",
  "UBTConnect.referencesHealth",
  "UBTConnect.referencesHealth$Connect2_Sharing_CS",
], function (
  OutSystems,
  UBTConnectModel,
  UBTConnectController,
  Connect2_Sharing_CSModel,
  UBTConnectLanguageResources,
  UBTConnectClientVariables,
  UBTConnect_Home_FeedItemDetail_mvc_Debugger,
  _flow_UBTConnect_HomeController,
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
    Controller.prototype._handler_CloseShareSheet$Action = function (
      callContext,
    ) {
      var varBag = {};
      var model = this.model;
      var controller = this.controller;
      var idService = this.idService;
      varBag.model = model;
      varBag.idService = idService;
      controller.ensureControllerAlive("Handler_CloseShareSheet");
      callContext = controller.callContext(callContext);
      varBag.callContext = callContext;
      try {
        OutSystemsDebugger.push(
          "ZK4RCP5OdEuntYI2VRpwBA:uyQcN0BKGUqyk0vEwXshoQ:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.LY5ATX+MoUORJqptLC2YOA/ClientActions.uyQcN0BKGUqyk0vEwXshoQ:_JrxQCUGBfkueO_59oFSxw",
          "UBTConnect",
          "Handler_CloseShareSheet",
          "NRFlows.ClientScreenActionFlow",
          callContext.id,
          varBag,
        );
        OutSystemsDebugger.handleBreakpoint(
          "ZK4RCP5OdEuntYI2VRpwBA:1GW7FdEFoEa7JCD9ebToIQ",
          callContext.id,
        );
        OutSystemsDebugger.handleBreakpoint(
          "ZK4RCP5OdEuntYI2VRpwBA:qDNMm023jkmmy0k9UfQX7Q",
          callContext.id,
        );
        // IsShareOpen = False
        model.variables.isShareOpenVar = false;
        OutSystemsDebugger.handleBreakpoint(
          "ZK4RCP5OdEuntYI2VRpwBA:nnBeo1u+ikuUWILldpaXfg",
          callContext.id,
        );
      } catch (ex) {
        OutSystemsDebugger.handleException(ex, callContext.id);
        throw ex;
      } finally {
        OutSystemsDebugger.pop(
          "ZK4RCP5OdEuntYI2VRpwBA:uyQcN0BKGUqyk0vEwXshoQ",
          callContext.id,
        );
      }
    };
    Controller.prototype._handler_ShareFeed$Action = function (
      event_ShareIdIn,
      event_FeedItemTitleIn,
      event_FeedItemSubtitleIn,
      event_FeedItemImageURLIn,
      callContext,
    ) {
      var varBag = {};
      var model = this.model;
      var controller = this.controller;
      var idService = this.idService;
      varBag.model = model;
      varBag.idService = idService;
      controller.ensureControllerAlive("Handler_ShareFeed");
      callContext = controller.callContext(callContext);
      var vars = new OS.DataTypes.VariableHolder(
        new (controller.constructor.getVariableGroupType(
          "UBTConnect.Home.FeedItemDetail.Handler_ShareFeed$vars",
        ))(),
      );
      vars.value.event_ShareIdInLocal = event_ShareIdIn;
      vars.value.event_FeedItemTitleInLocal = event_FeedItemTitleIn;
      vars.value.event_FeedItemSubtitleInLocal = event_FeedItemSubtitleIn;
      vars.value.event_FeedItemImageURLInLocal = event_FeedItemImageURLIn;
      varBag.callContext = callContext;
      varBag.vars = vars;
      try {
        OutSystemsDebugger.push(
          "ZK4RCP5OdEuntYI2VRpwBA:2MDG8lKPJUC06L1KY1HUHA:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.LY5ATX+MoUORJqptLC2YOA/ClientActions.2MDG8lKPJUC06L1KY1HUHA:7yyHhbYh_FeuNXZERaA_Vw",
          "UBTConnect",
          "Handler_ShareFeed",
          "NRFlows.ClientScreenActionFlow",
          callContext.id,
          varBag,
        );
        OutSystemsDebugger.handleBreakpoint(
          "ZK4RCP5OdEuntYI2VRpwBA:r3YUPYhvb0W5ChKmqANzeQ",
          callContext.id,
        );
        OutSystemsDebugger.handleBreakpoint(
          "ZK4RCP5OdEuntYI2VRpwBA:Bw5ZG0fmdky_Xu5VDp+aAA",
          callContext.id,
        );
        // ShareObjectTypeId = Feed
        model.variables.shareObjectTypeIdVar =
          UBTConnectModel.staticEntities.type_ShareObject.feed;
        OutSystemsDebugger.handleBreakpoint(
          "ZK4RCP5OdEuntYI2VRpwBA:Bw5ZG0fmdky_Xu5VDp+aAA",
          callContext.id,
          OutSystemsDebugger.BreakpointType.BetweenAssignments,
          "2",
        );
        // ShareableObjectId = Event_ShareId
        model.variables.shareableObjectIdVar = vars.value.event_ShareIdInLocal;
        OutSystemsDebugger.handleBreakpoint(
          "ZK4RCP5OdEuntYI2VRpwBA:Bw5ZG0fmdky_Xu5VDp+aAA",
          callContext.id,
          OutSystemsDebugger.BreakpointType.BetweenAssignments,
          "3",
        );
        // IsShareOpen = True
        model.variables.isShareOpenVar = true;
        OutSystemsDebugger.handleBreakpoint(
          "ZK4RCP5OdEuntYI2VRpwBA:Bw5ZG0fmdky_Xu5VDp+aAA",
          callContext.id,
          OutSystemsDebugger.BreakpointType.BetweenAssignments,
          "4",
        );
        // ShareableFeedItem.ConnectEntityTypeId = FeedItem
        model.variables.shareableFeedItemVar.connectEntityTypeIdAttr =
          UBTConnectModel.staticEntities.connect_Entity.feedItem;
        OutSystemsDebugger.handleBreakpoint(
          "ZK4RCP5OdEuntYI2VRpwBA:Bw5ZG0fmdky_Xu5VDp+aAA",
          callContext.id,
          OutSystemsDebugger.BreakpointType.BetweenAssignments,
          "5",
        );
        // ShareableFeedItem.SignedURL = Event_FeedItemImageURL
        model.variables.shareableFeedItemVar.signedURLAttr =
          vars.value.event_FeedItemImageURLInLocal;
        OutSystemsDebugger.handleBreakpoint(
          "ZK4RCP5OdEuntYI2VRpwBA:Bw5ZG0fmdky_Xu5VDp+aAA",
          callContext.id,
          OutSystemsDebugger.BreakpointType.BetweenAssignments,
          "6",
        );
        // ShareableFeedItem.Title = Event_FeedItemTitle
        model.variables.shareableFeedItemVar.titleAttr =
          vars.value.event_FeedItemTitleInLocal;
        OutSystemsDebugger.handleBreakpoint(
          "ZK4RCP5OdEuntYI2VRpwBA:Bw5ZG0fmdky_Xu5VDp+aAA",
          callContext.id,
          OutSystemsDebugger.BreakpointType.BetweenAssignments,
          "7",
        );
        // ShareableFeedItem.Subtitle = Event_FeedItemSubtitle
        model.variables.shareableFeedItemVar.subtitleAttr =
          vars.value.event_FeedItemSubtitleInLocal;
        OutSystemsDebugger.handleBreakpoint(
          "ZK4RCP5OdEuntYI2VRpwBA:FhzhqMO0i0ebq8bJH3tuzA",
          callContext.id,
        );
      } catch (ex) {
        OutSystemsDebugger.handleException(ex, callContext.id);
        throw ex;
      } finally {
        OutSystemsDebugger.pop(
          "ZK4RCP5OdEuntYI2VRpwBA:2MDG8lKPJUC06L1KY1HUHA",
          callContext.id,
        );
      }
    };
    Controller.registerVariableGroupType(
      "UBTConnect.Home.FeedItemDetail.Handler_ShareFeed$vars",
      [
        {
          name: "Event_ShareId",
          attrName: "event_ShareIdInLocal",
          mandatory: true,
          dataType: OS.DataTypes.DataTypes.Text,
          defaultValue: function () {
            return "";
          },
        },
        {
          name: "Event_FeedItemTitle",
          attrName: "event_FeedItemTitleInLocal",
          mandatory: true,
          dataType: OS.DataTypes.DataTypes.Text,
          defaultValue: function () {
            return "";
          },
        },
        {
          name: "Event_FeedItemSubtitle",
          attrName: "event_FeedItemSubtitleInLocal",
          mandatory: true,
          dataType: OS.DataTypes.DataTypes.Text,
          defaultValue: function () {
            return "";
          },
        },
        {
          name: "Event_FeedItemImageURL",
          attrName: "event_FeedItemImageURLInLocal",
          mandatory: true,
          dataType: OS.DataTypes.DataTypes.Text,
          defaultValue: function () {
            return "";
          },
        },
      ],
    );

    Controller.prototype.handler_CloseShareSheet$Action = function (
      callContext,
    ) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(
        controller._handler_CloseShareSheet$Action,
        callContext,
      );
    };
    Controller.prototype.handler_ShareFeed$Action = function (
      event_ShareIdIn,
      event_FeedItemTitleIn,
      event_FeedItemSubtitleIn,
      event_FeedItemImageURLIn,
      callContext,
    ) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(
        controller._handler_ShareFeed$Action,
        callContext,
        event_ShareIdIn,
        event_FeedItemTitleIn,
        event_FeedItemSubtitleIn,
        event_FeedItemImageURLIn,
      );
    };

    // Event Handler Actions
    Controller.prototype.pushDebuggerContext = function (callContext) {
      var varBag = {};
      OutSystemsDebugger.push(
        "ZK4RCP5OdEuntYI2VRpwBA:9o650LFgPEKO3jEzGxssNw:/NRWebFlows.9o650LFgPEKO3jEzGxssNw:9fwzOG+yQfV_SOU4v_xngw",
        "UBTConnect",
        "Home",
        "NRFlows.WebFlow",
        callContext.id,
        varBag,
      );
      OutSystemsDebugger.push(
        "ZK4RCP5OdEuntYI2VRpwBA:LY5ATX+MoUORJqptLC2YOA:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.LY5ATX+MoUORJqptLC2YOA:9pPU22oLwkjT9+gUNFiNgQ",
        "UBTConnect",
        "FeedItemDetail",
        "NRNodes.WebScreen",
        callContext.id,
        varBag,
      );
    };
    Controller.prototype.popDebuggerContext = function (callContext) {
      OutSystemsDebugger.pop(
        "ZK4RCP5OdEuntYI2VRpwBA:LY5ATX+MoUORJqptLC2YOA",
        callContext.id,
      );
      OutSystemsDebugger.pop(
        "ZK4RCP5OdEuntYI2VRpwBA:9o650LFgPEKO3jEzGxssNw",
        callContext.id,
      );
    };
    Controller.prototype.onInitializeEventHandler = null;
    Controller.prototype.onReadyEventHandler = null;
    Controller.prototype.onRenderEventHandler = null;
    Controller.prototype.onDestroyEventHandler = null;
    Controller.prototype.onParametersChangedEventHandler = null;
    Controller.prototype.handleError = function (ex) {
      return _flow_UBTConnect_HomeController.default.handleError(
        ex,
        this.callContext(),
      );
    };
    Controller.checkPermissions = function () {
      OS.RolesInfo.checkRegistered();
    };
    Controller.prototype.getDefaultTimeout = function () {
      return UBTConnectController.default.defaultTimeout;
    };
    return Controller;
  })(OS.Controller.BaseViewController);
  return new OS.Controller.ControllerFactory(
    Controller,
    UBTConnectLanguageResources,
  );
});

define("UBTConnect.Home.FeedItemDetail.mvc$debugger", [
  "exports",
  "OutSystems/ClientRuntime/Debugger",
  "OutSystems/ClientRuntime/Main",
], function (exports, Debugger, OutSystems) {
  var OS = OutSystems.Internal;
  var metaInfo = {
    "+4dh9m2YfEOe2N1fI6hW8Q": {
      getter: function (varBag, idService) {
        return varBag.vars.value.event_ShareIdInLocal;
      },
      dataType: OS.DataTypes.DataTypes.Text,
    },
    "W47cUsPXUk+ivqCdiv1dcA": {
      getter: function (varBag, idService) {
        return varBag.vars.value.event_FeedItemTitleInLocal;
      },
      dataType: OS.DataTypes.DataTypes.Text,
    },
    "Hw+N9uqXAUiabdWITpp3QA": {
      getter: function (varBag, idService) {
        return varBag.vars.value.event_FeedItemSubtitleInLocal;
      },
      dataType: OS.DataTypes.DataTypes.Text,
    },
    p_PEkdSGt0aqyn3eaz8CdA: {
      getter: function (varBag, idService) {
        return varBag.vars.value.event_FeedItemImageURLInLocal;
      },
      dataType: OS.DataTypes.DataTypes.Text,
    },
    "sm9p2MyQFE+KX7lMTJtamw": {
      getter: function (varBag, idService) {
        return varBag.model.variables.isShareOpenVar;
      },
      dataType: OS.DataTypes.DataTypes.Boolean,
    },
    TENKTI39BUG_Wu8XDZ9MyQ: {
      getter: function (varBag, idService) {
        return varBag.model.variables.shareableObjectIdVar;
      },
      dataType: OS.DataTypes.DataTypes.Text,
    },
    "5vxoZOQUW0WlJAYwMkQ5gw": {
      getter: function (varBag, idService) {
        return varBag.model.variables.shareObjectTypeIdVar;
      },
      dataType: OS.DataTypes.DataTypes.Text,
    },
    "pxU8+FmOhkamo+GEeqGY6w": {
      getter: function (varBag, idService) {
        return varBag.model.variables.shareableFeedItemVar;
      },
    },
    vhl_ZdjlwkOyd9PPQyiA1Q: {
      getter: function (varBag, idService) {
        return varBag.model.variables.feedItemIdIn;
      },
      dataType: OS.DataTypes.DataTypes.Text,
    },
    "RmGg+frviEi9CeuPt2963A": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Placeholder_Header_Title"));
        })(varBag.model, idService);
      },
    },
    NzedtS3bykKsUObfwagmPQ: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Placeholder_Header_Right"));
        })(varBag.model, idService);
      },
    },
    "t8mMXFVksU+leZiQu8YJMg": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("HeaderContent"));
        })(varBag.model, idService);
      },
    },
    ouvtYWjkSEG_sfXaImCp0w: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Content"));
        })(varBag.model, idService);
      },
    },
    LSJPAOP_akeM0wfzgPhMTw: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Bottom"));
        })(varBag.model, idService);
      },
    },
    CYYfJw2mH06hudRJ2pPu3Q: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(
            idService.getId("Placeholder_CommonUI_Inside_Layout"),
          );
        })(varBag.model, idService);
      },
    },
    P4e95BUPRU2G8Zl0NUnJng: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(
            idService.getId("Placeholder_ShareableObject"),
          );
        })(varBag.model, idService);
      },
    },
  };
  OutSystemsDebugger.registerMetaInfo(metaInfo);
});
