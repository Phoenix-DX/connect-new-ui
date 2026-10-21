define("Connect2_Assemble_MUI.Assemble.AssembleEventDetail_LocalitySubdivisionList.mvc$model", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_Assemble_MUI.model",
  "Connect2_Assemble_CS.model",
  "APIDomain_Directory_IS.model",
  "Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Image.mvc$model",
  "Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item_Badge.mvc$model",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision.mvc$model",
  "Connect2_Assemble_MUI.model$LocalityDetailsBooleanRecord",
  "Connect2_Assemble_MUI.model$AssembleAttendeeSubdivisionRecord",
  "Connect2_Assemble_CS.model$AssembleAttendeeSubdivisionRec",
  "Connect2_Assemble_MUI.referencesHealth",
  "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS",
  "Connect2_Assemble_CS.model$AssembleAttendeeGuestRec",
  "Connect2_Assemble_MUI.model$AssembleAttendeeGuestList",
  "APIDomain_Directory_IS.model$PhotoURLRec",
  "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS",
], function (
  OutSystems,
  Connect2_Assemble_MUIModel,
  Connect2_Assemble_CSModel,
  APIDomain_Directory_ISModel,
  Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Image_mvcModel,
  Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item_Badge_mvcModel,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_AttendeeSubdivision_mvcModel,
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
          "AssembleAttendeeSubdivisionList_Local",
          "assembleAttendeeSubdivisionList_LocalVar",
          "AssembleAttendeeSubdivisionList_Local",
          true,
          false,
          OS.DataTypes.DataTypes.Record,
          function () {
            return OS.DataTypes.ImmutableBase.getData(
              new Connect2_Assemble_MUIModel.LocalityDetailsBooleanRecord(),
            );
          },
          false,
          Connect2_Assemble_MUIModel.LocalityDetailsBooleanRecord,
        ),
        this.attr(
          "AssembleAttendeeSubdivisionList",
          "assembleAttendeeSubdivisionListIn",
          "AssembleAttendeeSubdivisionList",
          true,
          false,
          OS.DataTypes.DataTypes.Record,
          function () {
            return OS.DataTypes.ImmutableBase.getData(
              new Connect2_Assemble_MUIModel.LocalityDetailsBooleanRecord(),
            );
          },
          false,
          Connect2_Assemble_MUIModel.LocalityDetailsBooleanRecord,
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
            Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Image_mvcModel.hasValidationWidgets ||
            Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item_Badge_mvcModel.hasValidationWidgets ||
            Connect2_Assemble_MUI_Assemble_AssembleEventDetail_AttendeeSubdivision_mvcModel.hasValidationWidgets;
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
    "Assemble.AssembleEventDetail_LocalitySubdivisionList",
  );
});
define("Connect2_Assemble_MUI.Assemble.AssembleEventDetail_LocalitySubdivisionList.mvc$view", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_Assemble_MUI.model",
  "Connect2_Assemble_MUI.controller",
  "Connect2_Assemble_CS.model",
  "APIDomain_Directory_IS.model",
  "react",
  "OutSystems/ReactView/Main",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_LocalitySubdivisionList.mvc$model",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_LocalitySubdivisionList.mvc$controller",
  "OutSystems/ReactWidgets/Main",
  "Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Image.mvc$view",
  "Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item_Badge.mvc$view",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision.mvc$view",
  "Connect2_Assemble_MUI.model$LocalityDetailsBooleanRecord",
  "Connect2_Assemble_MUI.model$AssembleAttendeeSubdivisionRecord",
  "Connect2_Assemble_CS.model$AssembleAttendeeSubdivisionRec",
  "Connect2_Assemble_MUI.referencesHealth",
  "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS",
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
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_LocalitySubdivisionList_mvc_model,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_LocalitySubdivisionList_mvc_controller,
  OSWidgets,
  Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Image_mvc_view,
  Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item_Badge_mvc_view,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_AttendeeSubdivision_mvc_view,
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
    View.displayName = "Assemble.AssembleEventDetail_LocalitySubdivisionList";
    View.getCssDependencies = function () {
      return ["css/OutSystemsReactWidgets.css"];
    };
    View.getJsDependencies = function () {
      return [];
    };
    View.getBlocks = function () {
      return [
        Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Image_mvc_view,
        Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item_Badge_mvc_view,
        Connect2_Assemble_MUI_Assemble_AssembleEventDetail_AttendeeSubdivision_mvc_view,
      ];
    };
    Object.defineProperty(View.prototype, "modelFactory", {
      get: function () {
        return Connect2_Assemble_MUI_Assemble_AssembleEventDetail_LocalitySubdivisionList_mvc_model;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(View.prototype, "controllerFactory", {
      get: function () {
        return Connect2_Assemble_MUI_Assemble_AssembleEventDetail_LocalitySubdivisionList_mvc_controller;
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
            extendedEvents: {
              onClick: function () {
                var eventHandlerContext = callContext.clone();
                return OS.Flow.tryFinally(
                  function () {
                    var varBag = {};
                    controller.pushDebuggerContext(eventHandlerContext);

                    OutSystemsDebugger.setThreadStartName(
                      eventHandlerContext.id,
                      "Assemble/AssembleEventDetail_LocalitySubdivisionList/DIV_Locality_Header onclick",
                    );
                    controller.handler_OnClickToggleLocalitiesList$Action(
                      controller.callContext(eventHandlerContext),
                    );
                  },
                  function () {
                    controller.popDebuggerContext(eventHandlerContext);
                  },
                );
              },
            },
            style: model.getCachedValue(
              idService.getId("DIV_Locality_Header.Style"),
              function () {
                return (
                  "list-sticky-records__sticky-record " +
                  (model.variables.assembleAttendeeSubdivisionList_LocalVar
                    .isSelectedAttr
                    ? "list-sticky-records__sticky-record--active"
                    : "")
                );
              },
              function () {
                return model.variables.assembleAttendeeSubdivisionList_LocalVar
                  .isSelectedAttr;
              },
            ),
            visible: true,
            _idProps: {
              service: idService,
              name: "DIV_Locality_Header",
            },
            _widgetRecordProvider: widgetsRecordProvider,
          },
          React.createElement(
            Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Image_mvc_view,
            {
              inputs: {
                ShowPlaceholderForImage: true,
                In_IsRoundImage: true,
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
                alias: "1",
              },
              _widgetRecordProvider: widgetsRecordProvider,
              placeholders: {
                label: PlaceholderContent.Empty,
                imagePlaceholder: new PlaceholderContent(function () {
                  return [
                    React.createElement(
                      Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item_Badge_mvc_view,
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
                          alias: "2",
                        },
                        _widgetRecordProvider: widgetsRecordProvider,
                        placeholders: {
                          placeholder_Icon: new PlaceholderContent(function () {
                            return [
                              React.createElement(OSWidgets.Icon, {
                                icon: "map-marker",
                                iconSize: /*FontSize*/ 0,
                                style:
                                  "icon fa-map-marker font-size-h4 text-neutral-6",
                                visible: true,
                                _idProps: {
                                  service: idService,
                                  uuid: "3",
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                              }),
                            ];
                          }),
                        },
                        _dependencies: [],
                      },
                    ),
                  ];
                }),
                title_Placeholder: new PlaceholderContent(function () {
                  return [
                    React.createElement(OSWidgets.Expression, {
                      style: "font-size-s",
                      value:
                        model.variables.assembleAttendeeSubdivisionList_LocalVar
                          .localityDetailAttr.localityNameAttr,
                      _idProps: {
                        service: idService,
                        uuid: "4",
                      },
                      _widgetRecordProvider: widgetsRecordProvider,
                    }),
                  ];
                }),
                description_Placeholder: PlaceholderContent.Empty,
                action_Placeholder: new PlaceholderContent(function () {
                  return [
                    React.createElement(
                      OSWidgets.Container,
                      {
                        align: /*Default*/ 0,
                        animate: false,
                        style: "list-sticky-records__sticky-record__action",
                        visible: true,
                        _idProps: {
                          service: idService,
                          name: "DIV_ToggleSubsdivisionList",
                        },
                        _widgetRecordProvider: widgetsRecordProvider,
                      },
                      $if(
                        model.variables.assembleAttendeeSubdivisionList_LocalVar
                          .isSelectedAttr,
                        false,
                        this,
                        function () {
                          return [
                            React.createElement(OSWidgets.Icon, {
                              icon: "angle-up",
                              iconSize: /*Twotimes*/ 1,
                              style: "icon",
                              visible: true,
                              _idProps: {
                                service: idService,
                                uuid: "6",
                              },
                              _widgetRecordProvider: widgetsRecordProvider,
                            }),
                          ];
                        },
                        function () {
                          return [
                            React.createElement(OSWidgets.Icon, {
                              icon: "angle-down",
                              iconSize: /*Twotimes*/ 1,
                              style: "icon",
                              visible: true,
                              _idProps: {
                                service: idService,
                                uuid: "7",
                              },
                              _widgetRecordProvider: widgetsRecordProvider,
                            }),
                          ];
                        },
                      ),
                    ),
                  ];
                }),
              },
              _dependencies: [
                asPrimitiveValue(
                  model.variables.assembleAttendeeSubdivisionList_LocalVar
                    .isSelectedAttr,
                ),
                asPrimitiveValue(
                  model.variables.assembleAttendeeSubdivisionList_LocalVar
                    .localityDetailAttr.localityNameAttr,
                ),
              ],
            },
          ),
        ),
        React.createElement(
          OSWidgets.Container,
          {
            align: /*Default*/ 0,
            animate: true,
            visible:
              model.variables.assembleAttendeeSubdivisionList_LocalVar
                .isSelectedAttr,
            _idProps: {
              service: idService,
              name: "DIV_LocalitySubdivisions_List",
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
            source:
              model.variables.assembleAttendeeSubdivisionList_LocalVar
                .localityDetailAttr.assembleAttendeeSubdivisionListAttr,
            style: "list list-group list-sticky-records margin-bottom-s",
            tag: "div",
            _idProps: {
              service: idService,
              uuid: "9",
            },
            _widgetRecordProvider: widgetsRecordProvider,
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
                          name: "DIV_ListSubdivisions",
                        },
                        _widgetRecordProvider: widgetsRecordProvider,
                        _dependencies: [
                          asPrimitiveValue(
                            model.variables.assembleAttendeeSubdivisionList_LocalVar.localityDetailAttr.assembleAttendeeSubdivisionListAttr.getCurrent(
                              callContext.iterationContext,
                            ),
                          ),
                        ],
                      },
                      React.createElement(
                        Connect2_Assemble_MUI_Assemble_AssembleEventDetail_AttendeeSubdivision_mvc_view,
                        {
                          inputs: {
                            AssembleAttendeeSubdivision:
                              Connect2_Assemble_MUIModel.AssembleAttendeeSubdivisionRecord.fromStructure(
                                model.variables.assembleAttendeeSubdivisionList_LocalVar.localityDetailAttr.assembleAttendeeSubdivisionListAttr.getCurrent(
                                  callContext.iterationContext,
                                ),
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
                                    "Assemble/AssembleEventDetail_AttendeeSubdivision NavigateTo_ShareObject",
                                  );
                                  controller.navigateTo_ShareObject$Action(
                                    shareObjectTypeIdIn,
                                    objectIdIn,
                                    in_IsExternalSharingIn,
                                    controller.callContext(eventHandlerContext),
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
                                    "Assemble/AssembleEventDetail_AttendeeSubdivision NavigateTo_HouseholdCarousel",
                                  );
                                  controller.navigateTo_HouseholdCarousel$Action(
                                    itemPositionIn,
                                    selectedHouseholdIdIn,
                                    controller.callContext(eventHandlerContext),
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
                            uuid: "11",
                            alias: "3",
                          },
                          _widgetRecordProvider: widgetsRecordProvider,
                          _dependencies: [],
                        },
                      ),
                    ),
                  ];
                },
                callContext,
                idService,
                "1",
              ),
            },
            _dependencies: [],
          }),
        ),
      );
    };
    return View;
  })(OSView.BaseView.BaseWebBlock);

  return View;
});
define("Connect2_Assemble_MUI.Assemble.AssembleEventDetail_LocalitySubdivisionList.mvc$controller", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_Assemble_MUI.model",
  "Connect2_Assemble_MUI.controller",
  "Connect2_Assemble_CS.model",
  "APIDomain_Directory_IS.model",
  "Connect2_Assemble_MUI.languageResources",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_LocalitySubdivisionList.mvc$debugger",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_LocalitySubdivisionList.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS",
  "Connect2_Assemble_MUI.model$LocalityDetailsBooleanRecord",
  "Connect2_Assemble_MUI.model$AssembleAttendeeSubdivisionRecord",
  "Connect2_Assemble_CS.model$AssembleAttendeeSubdivisionRec",
  "Connect2_Assemble_MUI.referencesHealth",
  "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS",
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
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_LocalitySubdivisionList_mvc_Debugger,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_LocalitySubdivisionList_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS,
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
    Controller.prototype._handler_OnClickToggleLocalitiesList$Action =
      function (callContext) {
        var varBag = {};
        var model = this.model;
        var controller = this.controller;
        var idService = this.idService;
        varBag.model = model;
        varBag.idService = idService;
        controller.ensureControllerAlive("Handler_OnClickToggleLocalitiesList");
        callContext = controller.callContext(callContext);
        varBag.callContext = callContext;
        try {
          OutSystemsDebugger.push(
            "4YvUCWT53U+6BrZWsVWc3Q:piOQIIDDSEi4QTPPKEyOmw:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.R2Wp0_sw+0yXQujVu68wYw/ClientActions.piOQIIDDSEi4QTPPKEyOmw:JIgGHxqOAU3h1JGKnjzV8Q",
            "Connect2_Assemble_MUI",
            "Handler_OnClickToggleLocalitiesList",
            "NRFlows.ClientScreenActionFlow",
            callContext.id,
            varBag,
          );
          OutSystemsDebugger.handleBreakpoint(
            "4YvUCWT53U+6BrZWsVWc3Q:VmYNNOuwrk6t9mneRA4dBg",
            callContext.id,
          );
          OutSystemsDebugger.handleBreakpoint(
            "4YvUCWT53U+6BrZWsVWc3Q:yTfc8n3dXEmdfzJh4gGUXQ",
            callContext.id,
          );
          // AssembleAttendeeSubdivisionList_Local.IsSelected = notAssembleAttendeeSubdivisionList_Local.IsSelected
          model.variables.assembleAttendeeSubdivisionList_LocalVar.isSelectedAttr =
            !model.variables.assembleAttendeeSubdivisionList_LocalVar
              .isSelectedAttr;
          OutSystemsDebugger.handleBreakpoint(
            "4YvUCWT53U+6BrZWsVWc3Q:Xg7J_IJfm0S1gTABp_rrMg",
            callContext.id,
          );
        } catch (ex) {
          OutSystemsDebugger.handleException(ex, callContext.id);
          throw ex;
        } finally {
          OutSystemsDebugger.pop(
            "4YvUCWT53U+6BrZWsVWc3Q:piOQIIDDSEi4QTPPKEyOmw",
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
      varBag.callContext = callContext;
      varBag.wasCurrentViewRestoredFromCacheJSResult =
        wasCurrentViewRestoredFromCacheJSResult;
      try {
        OutSystemsDebugger.push(
          "4YvUCWT53U+6BrZWsVWc3Q:VT79+WmaYEm39NLZou7rRg:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.R2Wp0_sw+0yXQujVu68wYw/ClientActions.VT79+WmaYEm39NLZou7rRg:rHoCoob6kzcVpQgCjBSr5w",
          "Connect2_Assemble_MUI",
          "OnReady",
          "NRFlows.ClientScreenActionFlow",
          callContext.id,
          varBag,
        );
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:OazUvPekC0erW4BHTs7JfA",
          callContext.id,
        );
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:Mcgs48TM30ypAEieM4OvoQ",
          callContext.id,
        );
        wasCurrentViewRestoredFromCacheJSResult.value =
          controller.safeExecuteJSNode(
            Connect2_Assemble_MUI_Assemble_AssembleEventDetail_LocalitySubdivisionList_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS,
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
                  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_LocalitySubdivisionList.OnReady$wasCurrentViewRestoredFromCacheJSResult",
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
        // Check if WasCurrentViewRestoredFromCache FromCache
        if (
          OutSystemsDebugger.handleBreakpoint(
            "4YvUCWT53U+6BrZWsVWc3Q:K24lusWP0EalUSp9liJcIQ",
            callContext.id,
          ) &&
          wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut === true
        ) {
          OutSystemsDebugger.handleBreakpoint(
            "4YvUCWT53U+6BrZWsVWc3Q:OYrhOb0dckWvQxr7FX0RfA",
            callContext.id,
          );
        } else {
          OutSystemsDebugger.handleBreakpoint(
            "4YvUCWT53U+6BrZWsVWc3Q:_v6EF4rAmk6VpW7BxdZ2UQ",
            callContext.id,
          );
          // AssembleAttendeeSubdivisionList_Local = AssembleAttendeeSubdivisionList
          model.variables.assembleAttendeeSubdivisionList_LocalVar =
            model.variables.assembleAttendeeSubdivisionListIn;
          OutSystemsDebugger.handleBreakpoint(
            "4YvUCWT53U+6BrZWsVWc3Q:OYrhOb0dckWvQxr7FX0RfA",
            callContext.id,
          );
        }
      } catch (ex) {
        OutSystemsDebugger.handleException(ex, callContext.id);
        throw ex;
      } finally {
        OutSystemsDebugger.pop(
          "4YvUCWT53U+6BrZWsVWc3Q:VT79+WmaYEm39NLZou7rRg",
          callContext.id,
        );
      }
    };
    Controller.registerVariableGroupType(
      "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_LocalitySubdivisionList.OnReady$wasCurrentViewRestoredFromCacheJSResult",
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

    Controller.prototype.handler_OnClickToggleLocalitiesList$Action = function (
      callContext,
    ) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(
        controller._handler_OnClickToggleLocalitiesList$Action,
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
    Controller.prototype.navigateTo_HouseholdCarousel$Action = function () {
      return Promise.resolve();
    };
    Controller.prototype.navigateTo_ShareObject$Action = function () {
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
        "4YvUCWT53U+6BrZWsVWc3Q:R2Wp0_sw+0yXQujVu68wYw:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.R2Wp0_sw+0yXQujVu68wYw:Zrg1_2AYVmk8mw8qdfQFeA",
        "Connect2_Assemble_MUI",
        "AssembleEventDetail_LocalitySubdivisionList",
        "NRNodes.WebBlock",
        callContext.id,
        varBag,
      );
    };
    Controller.prototype.popDebuggerContext = function (callContext) {
      OutSystemsDebugger.pop(
        "4YvUCWT53U+6BrZWsVWc3Q:R2Wp0_sw+0yXQujVu68wYw",
        callContext.id,
      );
      OutSystemsDebugger.pop(
        "4YvUCWT53U+6BrZWsVWc3Q:n+VQoM4mfUCcC1ucCtOSYA",
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
            "Assemble/AssembleEventDetail_LocalitySubdivisionList On Ready",
          );
          return controller.onReady$Action(callContext);
        },
        function () {
          controller.popDebuggerContext(callContext);
        },
      );
    };
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
define("Connect2_Assemble_MUI.Assemble.AssembleEventDetail_LocalitySubdivisionList.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", [], function () {
  return function ($parameters, $actions, $roles, $public) {
    $parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
  };
});

define("Connect2_Assemble_MUI.Assemble.AssembleEventDetail_LocalitySubdivisionList.mvc$debugger", [
  "exports",
  "OutSystems/ClientRuntime/Debugger",
  "OutSystems/ClientRuntime/Main",
], function (exports, Debugger, OutSystems) {
  var OS = OutSystems.Internal;
  var metaInfo = {
    Mcgs48TM30ypAEieM4OvoQ: {
      getter: function (varBag, idService) {
        return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
      },
    },
    TB5M_USvNUqmvmdEz5l4UQ: {
      getter: function (varBag, idService) {
        return varBag.model.variables.assembleAttendeeSubdivisionList_LocalVar;
      },
    },
    "p8nQo5cdIE+MoAHd7p+Qsw": {
      getter: function (varBag, idService) {
        return varBag.model.variables.assembleAttendeeSubdivisionListIn;
      },
    },
    "70b5+0kABUW56ldjJHHwHQ": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("DIV_Locality_Header"));
        })(varBag.model, idService);
      },
    },
    LrlVveyZ1Uqa5nF45rpsHg: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Label"));
        })(varBag.model, idService);
      },
    },
    "IRWnTlikSEiWtqUlM+GmZA": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("ImagePlaceholder"));
        })(varBag.model, idService);
      },
    },
    "0vvrNcYlWk2DQxeHF5PLtw": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Placeholder_Icon"));
        })(varBag.model, idService);
      },
    },
    "63TLCY0lVU2r07VGFsxgGA": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Title_Placeholder"));
        })(varBag.model, idService);
      },
    },
    hQaRWChYtEy9sqvOHUVaiQ: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Description_Placeholder"));
        })(varBag.model, idService);
      },
    },
    Wt3UbJVmG0e5e5PwPaGTmQ: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Action_Placeholder"));
        })(varBag.model, idService);
      },
    },
    "0kTJMVdMVUat8cskFcJT+Q": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(
            idService.getId("DIV_ToggleSubsdivisionList"),
          );
        })(varBag.model, idService);
      },
    },
    "1ajiSZz5kkWabe0sCZB7cQ": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(
            idService.getId("DIV_LocalitySubdivisions_List"),
          );
        })(varBag.model, idService);
      },
    },
    LlKGd47TNUSzTyirJFAvrw: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("DIV_ListSubdivisions"));
        })(varBag.model, idService);
      },
    },
  };
  OutSystemsDebugger.registerMetaInfo(metaInfo);
});
