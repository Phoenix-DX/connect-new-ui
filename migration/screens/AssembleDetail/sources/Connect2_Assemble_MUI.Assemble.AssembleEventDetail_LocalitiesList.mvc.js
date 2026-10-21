define("Connect2_Assemble_MUI.Assemble.AssembleEventDetail_LocalitiesList.mvc$model", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_Assemble_MUI.model",
  "Connect2_Assemble_CS.model",
  "APIDomain_Directory_IS.model",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_LocalitySubdivisionList.mvc$model",
  "Connect2_Assemble_CS.model$LocalityDetailsRec",
  "Connect2_Assemble_MUI.referencesHealth",
  "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS",
  "Connect2_Assemble_MUI.model$LocalityDetailsList",
  "Connect2_Assemble_MUI.model$LocalityDetailsBooleanRecord",
  "Connect2_Assemble_CS.model$AssembleAttendeeSubdivisionRec",
  "Connect2_Assemble_MUI.model$AssembleAttendeeSubdivisionList",
  "Connect2_Assemble_CS.model$AssembleAttendeeGuestRec",
  "Connect2_Assemble_MUI.model$AssembleAttendeeGuestList",
  "APIDomain_Directory_IS.model$PhotoURLRec",
  "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS",
], function (
  OutSystems,
  Connect2_Assemble_MUIModel,
  Connect2_Assemble_CSModel,
  APIDomain_Directory_ISModel,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_LocalitySubdivisionList_mvcModel,
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
          "AssembleAttendeeSubdivisionList",
          "assembleAttendeeSubdivisionListIn",
          "AssembleAttendeeSubdivisionList",
          true,
          false,
          OS.DataTypes.DataTypes.RecordList,
          function () {
            return OS.DataTypes.ImmutableBase.getData(
              new Connect2_Assemble_MUIModel.LocalityDetailsList(),
            );
          },
          false,
          Connect2_Assemble_MUIModel.LocalityDetailsList,
        ),
        this.attr(
          "_assembleAttendeeSubdivisionListInDataFetchStatus",
          "_assembleAttendeeSubdivisionListInDataFetchStatus",
          "_assembleAttendeeSubdivisionListInDataFetchStatus",
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
            Connect2_Assemble_MUI_Assemble_AssembleEventDetail_LocalitySubdivisionList_mvcModel.hasValidationWidgets;
        }

        return Model._hasValidationWidgetsValue;
      },
    });

    Model.prototype.setInputs = function (inputs) {
      if ("AssembleAttendeeSubdivisionList" in inputs) {
        this.variables.assembleAttendeeSubdivisionListIn =
          inputs.AssembleAttendeeSubdivisionList;
        if ("_assembleAttendeeSubdivisionListInDataFetchStatus" in inputs) {
          this.variables._assembleAttendeeSubdivisionListInDataFetchStatus =
            inputs._assembleAttendeeSubdivisionListInDataFetchStatus;
        }
      }
    };
    return Model;
  })(OS.Model.BaseViewModel);
  return new OS.Model.ModelFactory(
    Model,
    "Assemble.AssembleEventDetail_LocalitiesList",
  );
});
define("Connect2_Assemble_MUI.Assemble.AssembleEventDetail_LocalitiesList.mvc$view", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_Assemble_MUI.model",
  "Connect2_Assemble_MUI.controller",
  "Connect2_Assemble_CS.model",
  "APIDomain_Directory_IS.model",
  "react",
  "OutSystems/ReactView/Main",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_LocalitiesList.mvc$model",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_LocalitiesList.mvc$controller",
  "OutSystems/ReactWidgets/Main",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_LocalitySubdivisionList.mvc$view",
  "Connect2_Assemble_CS.model$LocalityDetailsRec",
  "Connect2_Assemble_MUI.referencesHealth",
  "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS",
  "Connect2_Assemble_MUI.model$LocalityDetailsList",
  "Connect2_Assemble_MUI.model$LocalityDetailsBooleanRecord",
  "Connect2_Assemble_CS.model$AssembleAttendeeSubdivisionRec",
  "Connect2_Assemble_MUI.model$AssembleAttendeeSubdivisionList",
  "Connect2_Assemble_CS.model$AssembleAttendeeGuestRec",
  "Connect2_Assemble_MUI.model$AssembleAttendeeGuestList",
  "APIDomain_Directory_IS.model$PhotoURLRec",
  "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS",
], function (
  OutSystems,
  Connect2_Assemble_MUIModel,
  Connect2_Assemble_MUIController,
  Connect2_Assemble_CSModel,
  APIDomain_Directory_ISModel,
  React,
  OSView,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_LocalitiesList_mvc_model,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_LocalitiesList_mvc_controller,
  OSWidgets,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_LocalitySubdivisionList_mvc_view,
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
    View.displayName = "Assemble.AssembleEventDetail_LocalitiesList";
    View.getCssDependencies = function () {
      return ["css/OutSystemsReactWidgets.css"];
    };
    View.getJsDependencies = function () {
      return [];
    };
    View.getBlocks = function () {
      return [
        Connect2_Assemble_MUI_Assemble_AssembleEventDetail_LocalitySubdivisionList_mvc_view,
      ];
    };
    Object.defineProperty(View.prototype, "modelFactory", {
      get: function () {
        return Connect2_Assemble_MUI_Assemble_AssembleEventDetail_LocalitiesList_mvc_model;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(View.prototype, "controllerFactory", {
      get: function () {
        return Connect2_Assemble_MUI_Assemble_AssembleEventDetail_LocalitiesList_mvc_controller;
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
            style: "margin-bottom-base text-neutral-7 font-semi-bold",
            visible: true,
            _idProps: {
              service: idService,
              name: "DIV_InvitedLocalities__Header",
            },
            _widgetRecordProvider: widgetsRecordProvider,
          },
          React.createElement(OSWidgets.Placeholder, {
            align: /*Default*/ 0,
            content: _this.props.placeholders.header,
            _idProps: {
              service: idService,
              name: "Header",
            },
            _widgetRecordProvider: widgetsRecordProvider,
          }),
        ),
        React.createElement(
          OSWidgets.Container,
          {
            align: /*Default*/ 0,
            animate: true,
            style: "margin-top-s",
            visible: !model.variables.assembleAttendeeSubdivisionListIn.isEmpty,
            _idProps: {
              service: idService,
              name: "DIV_InvitedLocalitiesList",
            },
            _widgetRecordProvider: widgetsRecordProvider,
            visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(
              model.variables._assembleAttendeeSubdivisionListInDataFetchStatus,
            ),
          },
          React.createElement(
            OSWidgets.Container,
            {
              align: /*Default*/ 0,
              animate: false,
              visible: true,
              _idProps: {
                service: idService,
                name: "DIV_Localities__List",
              },
              _widgetRecordProvider: widgetsRecordProvider,
            },
            React.createElement(OSWidgets.List, {
              animateItems: true,
              extendedProperties: {
                "disable-virtualization": "True",
              },
              gridProperties: {
                classes: "OSFillParent",
              },
              mode: /*Default*/ 0,
              source: model.variables.assembleAttendeeSubdivisionListIn,
              style: "list list-group list-sticky-records margin-bottom-s",
              tag: "div",
              _idProps: {
                service: idService,
                name: "ListLocalities",
              },
              _widgetRecordProvider: widgetsRecordProvider,
              source_dataFetchStatus: OS.Model.calculateDataFetchStatus(
                model.variables
                  ._assembleAttendeeSubdivisionListInDataFetchStatus,
              ),
              placeholders: {
                content: new IteratorPlaceholderContent(
                  function (idService, callContext) {
                    return [
                      React.createElement(
                        OSWidgets.Container,
                        {
                          align: /*Default*/ 0,
                          animate: false,
                          visible: true,
                          _idProps: {
                            service: idService,
                            uuid: "5",
                          },
                          _widgetRecordProvider: widgetsRecordProvider,
                          _dependencies: [
                            asPrimitiveValue(
                              model.variables
                                ._assembleAttendeeSubdivisionListInDataFetchStatus,
                            ),
                            asPrimitiveValue(
                              model.variables.assembleAttendeeSubdivisionListIn.getCurrent(
                                callContext.iterationContext,
                              ),
                            ),
                          ],
                        },
                        React.createElement(
                          OSWidgets.Container,
                          {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                              service: idService,
                              name: "DIV_Locality",
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                          },
                          React.createElement(
                            Connect2_Assemble_MUI_Assemble_AssembleEventDetail_LocalitySubdivisionList_mvc_view,
                            {
                              inputs: {
                                AssembleAttendeeSubdivisionList:
                                  model.getCachedValue(
                                    idService.getId(
                                      "8rP8VSJwfkywk+uNwvSbvw.AssembleAttendeeSubdivisionList",
                                    ),
                                    function () {
                                      return OS.DataConversion.JSConversions.typeConvertRecord(
                                        model.variables.assembleAttendeeSubdivisionListIn.getCurrent(
                                          callContext.iterationContext,
                                        ),
                                        new Connect2_Assemble_MUIModel.LocalityDetailsBooleanRecord(),
                                        function (source, target) {
                                          target.isSelectedAttr = false;
                                          target.localityDetailAttr.localityIdAttr =
                                            source.localityIdAttr;
                                          target.localityDetailAttr.localityNameAttr =
                                            source.localityNameAttr;
                                          target.localityDetailAttr.assembleAttendeeSubdivisionListAttr =
                                            source.assembleAttendeeSubdivisionListAttr;
                                          return target;
                                        },
                                      );
                                    },
                                    function () {
                                      return model.variables.assembleAttendeeSubdivisionListIn.getCurrent(
                                        callContext.iterationContext,
                                      );
                                    },
                                  ),
                                _assembleAttendeeSubdivisionListInDataFetchStatus:
                                  OS.Model.calculateDataFetchStatus(
                                    model.variables
                                      ._assembleAttendeeSubdivisionListInDataFetchStatus,
                                  ),
                              },
                              events: {
                                _handleError: function (ex) {
                                  controller.handleError(ex);
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
                                        "Assemble/AssembleEventDetail_LocalitySubdivisionList NavigateTo_ShareObject",
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
                                        "Assemble/AssembleEventDetail_LocalitySubdivisionList NavigateTo_HouseholdCarousel",
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
                              },
                              _validationProps: {
                                validationService: validationService,
                              },
                              _idProps: {
                                service: idService,
                                uuid: "7",
                                alias: "1",
                              },
                              _widgetRecordProvider: widgetsRecordProvider,
                              _dependencies: [],
                            },
                          ),
                        ),
                      ),
                    ];
                  },
                  callContext,
                  idService,
                  "1",
                ),
              },
              _dependencies: [
                asPrimitiveValue(
                  model.variables
                    ._assembleAttendeeSubdivisionListInDataFetchStatus,
                ),
              ],
            }),
          ),
        ),
      );
    };
    return View;
  })(OSView.BaseView.BaseWebBlock);

  return View;
});
define("Connect2_Assemble_MUI.Assemble.AssembleEventDetail_LocalitiesList.mvc$controller", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_Assemble_MUI.model",
  "Connect2_Assemble_MUI.controller",
  "Connect2_Assemble_CS.model",
  "APIDomain_Directory_IS.model",
  "Connect2_Assemble_MUI.languageResources",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_LocalitiesList.mvc$debugger",
  "Connect2_Assemble_CS.model$LocalityDetailsRec",
  "Connect2_Assemble_MUI.referencesHealth",
  "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS",
  "Connect2_Assemble_MUI.model$LocalityDetailsList",
  "Connect2_Assemble_MUI.model$LocalityDetailsBooleanRecord",
  "Connect2_Assemble_CS.model$AssembleAttendeeSubdivisionRec",
  "Connect2_Assemble_MUI.model$AssembleAttendeeSubdivisionList",
  "Connect2_Assemble_CS.model$AssembleAttendeeGuestRec",
  "Connect2_Assemble_MUI.model$AssembleAttendeeGuestList",
  "APIDomain_Directory_IS.model$PhotoURLRec",
  "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS",
], function (
  OutSystems,
  Connect2_Assemble_MUIModel,
  Connect2_Assemble_MUIController,
  Connect2_Assemble_CSModel,
  APIDomain_Directory_ISModel,
  Connect2_Assemble_MUILanguageResources,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_LocalitiesList_mvc_Debugger,
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

    Controller.prototype.navigateTo_ShareObject$Action = function () {
      return Promise.resolve();
    };
    Controller.prototype.navigateTo_HouseholdCarousel$Action = function () {
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
        "4YvUCWT53U+6BrZWsVWc3Q:jXPRV0kd4kCmHr0jJ4IgQQ:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.jXPRV0kd4kCmHr0jJ4IgQQ:5pyEvPxYwpYIgx6lo39_oQ",
        "Connect2_Assemble_MUI",
        "AssembleEventDetail_LocalitiesList",
        "NRNodes.WebBlock",
        callContext.id,
        varBag,
      );
    };
    Controller.prototype.popDebuggerContext = function (callContext) {
      OutSystemsDebugger.pop(
        "4YvUCWT53U+6BrZWsVWc3Q:jXPRV0kd4kCmHr0jJ4IgQQ",
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

define("Connect2_Assemble_MUI.Assemble.AssembleEventDetail_LocalitiesList.mvc$debugger", [
  "exports",
  "OutSystems/ClientRuntime/Debugger",
  "OutSystems/ClientRuntime/Main",
], function (exports, Debugger, OutSystems) {
  var OS = OutSystems.Internal;
  var metaInfo = {
    DriBKlb210ullzsC0IJvxg: {
      getter: function (varBag, idService) {
        return varBag.model.variables.assembleAttendeeSubdivisionListIn;
      },
    },
    CyqprbEVGE6kmjH1cYVAnw: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(
            idService.getId("DIV_InvitedLocalities__Header"),
          );
        })(varBag.model, idService);
      },
    },
    FBKm3EvgLEe_jZQ4A6owvg: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Header"));
        })(varBag.model, idService);
      },
    },
    s1zCcPlzO0CyJqhpuoXSxg: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(
            idService.getId("DIV_InvitedLocalitiesList"),
          );
        })(varBag.model, idService);
      },
    },
    crGAFXakJECsAHaXQhfKVg: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("DIV_Localities__List"));
        })(varBag.model, idService);
      },
    },
    jZSbLJyT6kGwBVpyNeA26g: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("ListLocalities"));
        })(varBag.model, idService);
      },
    },
    XxAilHqTrkSJBgxmbNiAow: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("DIV_Locality"));
        })(varBag.model, idService);
      },
    },
  };
  OutSystemsDebugger.registerMetaInfo(metaInfo);
});
