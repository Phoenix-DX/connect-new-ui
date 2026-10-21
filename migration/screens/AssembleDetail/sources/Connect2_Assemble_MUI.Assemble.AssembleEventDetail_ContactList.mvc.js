define("Connect2_Assemble_MUI.Assemble.AssembleEventDetail_ContactList.mvc$model", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_Assemble_MUI.model",
  "Connect2_Assemble_CS.model",
  "APIDomain_Directory_IS.model",
  "Connect2_LegacyShared.model",
  "MemoryClientCache.model",
  "Connect2_LegacyShared.controller",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_Contact.mvc$model",
  "Connect2_Assemble_CS.model$AssembleEventContactRec",
  "Connect2_Assemble_MUI.referencesHealth",
  "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS",
  "Connect2_Assemble_MUI.model$AssembleEventContactList",
  "Connect2_Assemble_MUI.model$TextLongIntegerRecord",
  "Connect2_Assemble_CS.model$AssembleAttendeeGuestRec",
  "APIDomain_Directory_IS.model$PhotoURLRec",
  "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS",
  "Connect2_LegacyShared.model$MemberContactWithTimezoneRec",
  "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared",
  "Connect2_Assemble_MUI.model$AssembleEventContact2List",
  "MemoryClientCache.model$MemoryCacheResultRec",
  "Connect2_Assemble_MUI.referencesHealth$MemoryClientCache",
  "Connect2_LegacyShared.controller$GetCacheableMemberContactList",
], function (
  OutSystems,
  Connect2_Assemble_MUIModel,
  Connect2_Assemble_CSModel,
  APIDomain_Directory_ISModel,
  Connect2_LegacySharedModel,
  MemoryClientCacheModel,
  Connect2_LegacySharedController,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_Contact_mvcModel,
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
          "AssembleEventContactList",
          "assembleEventContactListVar",
          "AssembleEventContactList",
          true,
          false,
          OS.DataTypes.DataTypes.RecordList,
          function () {
            return OS.DataTypes.ImmutableBase.getData(
              new Connect2_Assemble_MUIModel.AssembleEventContactList(),
            );
          },
          false,
          Connect2_Assemble_MUIModel.AssembleEventContactList,
        ),
        this.attr(
          "IsDataFetched",
          "isDataFetchedVar",
          "IsDataFetched",
          true,
          false,
          OS.DataTypes.DataTypes.Boolean,
          function () {
            return false;
          },
          false,
        ),
        this.attr(
          "AssembleEventContactIdList",
          "assembleEventContactIdListIn",
          "AssembleEventContactIdList",
          true,
          false,
          OS.DataTypes.DataTypes.RecordList,
          function () {
            return OS.DataTypes.ImmutableBase.getData(
              new OS.DataTypes.LongIntegerList(),
            );
          },
          false,
          OS.DataTypes.LongIntegerList,
        ),
        this.attr(
          "_assembleEventContactIdListInDataFetchStatus",
          "_assembleEventContactIdListInDataFetchStatus",
          "_assembleEventContactIdListInDataFetchStatus",
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
            Connect2_Assemble_MUI_Assemble_AssembleEventDetail_Contact_mvcModel.hasValidationWidgets;
        }

        return Model._hasValidationWidgetsValue;
      },
    });

    Model.prototype.setInputs = function (inputs) {
      if ("AssembleEventContactIdList" in inputs) {
        this.variables.assembleEventContactIdListIn =
          inputs.AssembleEventContactIdList;
        if ("_assembleEventContactIdListInDataFetchStatus" in inputs) {
          this.variables._assembleEventContactIdListInDataFetchStatus =
            inputs._assembleEventContactIdListInDataFetchStatus;
        }
      }
    };
    return Model;
  })(OS.Model.BaseViewModel);
  return new OS.Model.ModelFactory(
    Model,
    "Assemble.AssembleEventDetail_ContactList",
  );
});
define("Connect2_Assemble_MUI.Assemble.AssembleEventDetail_ContactList.mvc$view", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_Assemble_MUI.model",
  "Connect2_Assemble_MUI.controller",
  "Connect2_Assemble_CS.model",
  "APIDomain_Directory_IS.model",
  "Connect2_LegacyShared.model",
  "MemoryClientCache.model",
  "Connect2_LegacyShared.controller",
  "react",
  "OutSystems/ReactView/Main",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_ContactList.mvc$model",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_ContactList.mvc$controller",
  "OutSystems/ReactWidgets/Main",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_Contact.mvc$view",
  "Connect2_Assemble_CS.model$AssembleEventContactRec",
  "Connect2_Assemble_MUI.referencesHealth",
  "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS",
  "Connect2_Assemble_MUI.model$AssembleEventContactList",
  "Connect2_Assemble_MUI.model$TextLongIntegerRecord",
  "Connect2_Assemble_CS.model$AssembleAttendeeGuestRec",
  "APIDomain_Directory_IS.model$PhotoURLRec",
  "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS",
  "Connect2_LegacyShared.model$MemberContactWithTimezoneRec",
  "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared",
  "Connect2_Assemble_MUI.model$AssembleEventContact2List",
  "MemoryClientCache.model$MemoryCacheResultRec",
  "Connect2_Assemble_MUI.referencesHealth$MemoryClientCache",
  "Connect2_LegacyShared.controller$GetCacheableMemberContactList",
], function (
  OutSystems,
  Connect2_Assemble_MUIModel,
  Connect2_Assemble_MUIController,
  Connect2_Assemble_CSModel,
  APIDomain_Directory_ISModel,
  Connect2_LegacySharedModel,
  MemoryClientCacheModel,
  Connect2_LegacySharedController,
  React,
  OSView,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_ContactList_mvc_model,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_ContactList_mvc_controller,
  OSWidgets,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_Contact_mvc_view,
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
    View.displayName = "Assemble.AssembleEventDetail_ContactList";
    View.getCssDependencies = function () {
      return ["css/OutSystemsReactWidgets.css"];
    };
    View.getJsDependencies = function () {
      return [];
    };
    View.getBlocks = function () {
      return [
        Connect2_Assemble_MUI_Assemble_AssembleEventDetail_Contact_mvc_view,
      ];
    };
    Object.defineProperty(View.prototype, "modelFactory", {
      get: function () {
        return Connect2_Assemble_MUI_Assemble_AssembleEventDetail_ContactList_mvc_model;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(View.prototype, "controllerFactory", {
      get: function () {
        return Connect2_Assemble_MUI_Assemble_AssembleEventDetail_ContactList_mvc_controller;
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
        React.createElement(OSWidgets.List, {
          animateItems: true,
          gridProperties: {
            classes: "OSFillParent",
          },
          mode: /*Default*/ 0,
          source: model.variables.assembleEventContactListVar,
          style: "list list-group",
          tag: "div",
          _idProps: {
            service: idService,
            uuid: "0",
          },
          _widgetRecordProvider: widgetsRecordProvider,
          placeholders: {
            content: new IteratorPlaceholderContent(
              function (idService, callContext) {
                return [
                  React.createElement(
                    Connect2_Assemble_MUI_Assemble_AssembleEventDetail_Contact_mvc_view,
                    {
                      inputs: {
                        AssembleEventContact:
                          model.variables.assembleEventContactListVar.getCurrent(
                            callContext.iterationContext,
                          ),
                        IsDataFetched: model.variables.isDataFetchedVar,
                      },
                      events: {
                        _handleError: function (ex) {
                          controller.handleError(ex);
                        },
                        navigateTo_EmailContact$Action: function (
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
                                "Assemble/AssembleEventDetail_Contact NavigateTo_EmailContact",
                              );
                              controller.emailContact$Action(
                                event_AvatarURLIn,
                                event_ContactNameIn,
                                event_ContactSurnameIn,
                                event_ContactLocalityIn,
                                event_ContactCountryIn,
                                event_EmailToIn,
                                event_MemberIdIn,
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
                        navigateTo_Household$Action: function (householdIdIn) {
                          var eventHandlerContext = callContext.clone();
                          return OS.Flow.tryFinally(
                            function () {
                              var varBag = {};
                              controller.pushDebuggerContext(
                                eventHandlerContext,
                              );

                              OutSystemsDebugger.setThreadStartName(
                                eventHandlerContext.id,
                                "Assemble/AssembleEventDetail_Contact NavigateTo_Household",
                              );
                              controller.navigateTo_Household$Action(
                                householdIdIn,
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
                        uuid: "1",
                        alias: "1",
                      },
                      _widgetRecordProvider: widgetsRecordProvider,
                      _dependencies: [],
                    },
                  ),
                ];
              },
              callContext,
              idService,
              "1",
            ),
          },
          _dependencies: [asPrimitiveValue(model.variables.isDataFetchedVar)],
        }),
      );
    };
    return View;
  })(OSView.BaseView.BaseWebBlock);

  return View;
});
define("Connect2_Assemble_MUI.Assemble.AssembleEventDetail_ContactList.mvc$controller", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_Assemble_MUI.model",
  "Connect2_Assemble_MUI.controller",
  "Connect2_Assemble_CS.model",
  "APIDomain_Directory_IS.model",
  "Connect2_LegacyShared.model",
  "MemoryClientCache.model",
  "Connect2_LegacyShared.controller",
  "Connect2_Assemble_MUI.languageResources",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_ContactList.mvc$debugger",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_ContactList.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS",
  "Connect2_Assemble_CS.model$AssembleEventContactRec",
  "Connect2_Assemble_MUI.referencesHealth",
  "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS",
  "Connect2_Assemble_MUI.model$AssembleEventContactList",
  "Connect2_Assemble_MUI.model$TextLongIntegerRecord",
  "Connect2_Assemble_CS.model$AssembleAttendeeGuestRec",
  "APIDomain_Directory_IS.model$PhotoURLRec",
  "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS",
  "Connect2_LegacyShared.model$MemberContactWithTimezoneRec",
  "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared",
  "Connect2_Assemble_MUI.model$AssembleEventContact2List",
  "MemoryClientCache.model$MemoryCacheResultRec",
  "Connect2_Assemble_MUI.referencesHealth$MemoryClientCache",
  "Connect2_LegacyShared.controller$GetCacheableMemberContactList",
], function (
  OutSystems,
  Connect2_Assemble_MUIModel,
  Connect2_Assemble_MUIController,
  Connect2_Assemble_CSModel,
  APIDomain_Directory_ISModel,
  Connect2_LegacySharedModel,
  MemoryClientCacheModel,
  Connect2_LegacySharedController,
  Connect2_Assemble_MUILanguageResources,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_ContactList_mvc_Debugger,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_ContactList_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS,
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
    Controller.prototype._onReady$Action = function (callContext) {
      var varBag = {};
      var model = this.model;
      var controller = this.controller;
      var idService = this.idService;
      varBag.model = model;
      varBag.idService = idService;
      controller.ensureControllerAlive("OnReady");
      callContext = controller.callContext(callContext);
      var vars = new OS.DataTypes.VariableHolder(
        new (controller.constructor.getVariableGroupType(
          "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_ContactList.OnReady$vars",
        ))(),
      );
      var getCacheableMemberContactListVar = new OS.DataTypes.VariableHolder();
      var wasCurrentViewRestoredFromCacheJSResult =
        new OS.DataTypes.VariableHolder();
      varBag.callContext = callContext;
      varBag.vars = vars;
      varBag.getCacheableMemberContactListVar =
        getCacheableMemberContactListVar;
      varBag.wasCurrentViewRestoredFromCacheJSResult =
        wasCurrentViewRestoredFromCacheJSResult;
      OutSystemsDebugger.push(
        "4YvUCWT53U+6BrZWsVWc3Q:22h6fVvYb0OHu3Js4dlkhA:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.iX3FuV3E+UaXx+Q8_HFNZA/ClientActions.22h6fVvYb0OHu3Js4dlkhA:dVk9KXop6_Uxy0HdvQGUCA",
        "Connect2_Assemble_MUI",
        "OnReady",
        "NRFlows.ClientScreenActionFlow",
        callContext.id,
        varBag,
      );
      OutSystemsDebugger.handleBreakpoint(
        "4YvUCWT53U+6BrZWsVWc3Q:xTfDSqffHkm32UUYYKQz+g",
        callContext.id,
      );
      return OS.Flow.executeAsyncFlow(function () {
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:u6SL4yRU70esHciHqJWRAQ",
          callContext.id,
        );
        wasCurrentViewRestoredFromCacheJSResult.value =
          controller.safeExecuteJSNode(
            Connect2_Assemble_MUI_Assemble_AssembleEventDetail_ContactList_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS,
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
                  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_ContactList.OnReady$wasCurrentViewRestoredFromCacheJSResult",
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
        return OS.Flow.executeSequence(function () {
          if (
            OutSystemsDebugger.handleBreakpoint(
              "4YvUCWT53U+6BrZWsVWc3Q:jUmNCPBI80mvtZ_OYady0g",
              callContext.id,
            ) &&
            wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut === true
          ) {
            OutSystemsDebugger.handleBreakpoint(
              "4YvUCWT53U+6BrZWsVWc3Q:EmoZQJHrC0ejKf5cxJ0HSA",
              callContext.id,
            );
          } else {
            // Foreach AssembleEventContactIdList
            callContext.iterationContext.registerIterationStart(
              model.variables.assembleEventContactIdListIn,
            );
            try {
              var assembleEventContactIdListIterator =
                callContext.iterationContext.getIterator(
                  model.variables.assembleEventContactIdListIn,
                );
              var assembleEventContactIdListIndex = 0;
              while (
                OutSystemsDebugger.handleBreakpoint(
                  "4YvUCWT53U+6BrZWsVWc3Q:ilGGhLUIHEG9PGRY3O_5JA",
                  callContext.id,
                ) &&
                assembleEventContactIdListIndex <
                  model.variables.assembleEventContactIdListIn.length
              ) {
                assembleEventContactIdListIterator.currentRowNumber =
                  assembleEventContactIdListIndex;
                OutSystemsDebugger.handleBreakpoint(
                  "4YvUCWT53U+6BrZWsVWc3Q:nNzkFeGdfkC9o08Fc1o0sA",
                  callContext.id,
                );
                // Execute Action: ListAppend
                OS.SystemActions.listAppend(
                  model.variables.assembleEventContactListVar,
                  vars.value.assembleEventContactVar,
                  callContext,
                );
                assembleEventContactIdListIndex++;
              }
            } finally {
              callContext.iterationContext.registerIterationEnd(
                model.variables.assembleEventContactIdListIn,
              );
            }

            OutSystemsDebugger.handleBreakpoint(
              "4YvUCWT53U+6BrZWsVWc3Q:aca3PLk0YUOHeRowj2rcPQ",
              callContext.id,
            );
            // Execute Action: GetCacheableMemberContactList
            model.flush();
            return Connect2_LegacySharedController.default
              .getCacheableMemberContactList$Action(
                model.variables.assembleEventContactIdListIn,
                callContext,
              )
              .then(function (value) {
                getCacheableMemberContactListVar.value = value;
              })
              .then(function () {
                OutSystemsDebugger.handleBreakpoint(
                  "4YvUCWT53U+6BrZWsVWc3Q:Gmh1bp4M9k6Qyq6JSlVqzA",
                  callContext.id,
                );
                // AssembleEventContactList = GetCacheableMemberContactList.MemberContactList
                model.variables.assembleEventContactListVar =
                  OS.DataConversion.JSConversions.typeConvertRecordList(
                    getCacheableMemberContactListVar.value.memberContactListOut,
                    new Connect2_Assemble_MUIModel.AssembleEventContactList(),
                    function (source, target) {
                      target.emailAttr = source.emailAttr;
                      target.countryCodeAttr = source.countryCodeAttr;
                      target.localityIdAttr = source.localityIdAttr;
                      target.householdIdAttr = source.householdIdAttr;
                      target.timezoneAttr = source.timezoneAttr;
                      target.contactDetailsAttr.idAttr =
                        source.contactDetailsAttr.idAttr;
                      target.contactDetailsAttr.nameAttr =
                        source.contactDetailsAttr.nameAttr;
                      target.contactDetailsAttr.locationAttr =
                        source.contactDetailsAttr.locationAttr;
                      target.contactDetailsAttr.isDisabledAttr =
                        source.contactDetailsAttr.isDisabledAttr;
                      target.contactDetailsAttr.isBookmarkedAttr =
                        source.contactDetailsAttr.isBookmarkedAttr;
                      target.contactDetailsAttr.avatarURLAttr =
                        source.contactDetailsAttr.avatarURLAttr;
                      target.mobilePhoneNumberAttr =
                        source.mobilePhoneNumberAttr;
                      target.homePhoneNumberAttr = source.homePhoneNumberAttr;
                      target.workPhoneNumberAttr = source.workPhoneNumberAttr;
                      target.localityNameAttr = source.localityNameAttr;
                      target.countryNameAttr = source.countryNameAttr;
                      return target;
                    },
                  );
                OutSystemsDebugger.handleBreakpoint(
                  "4YvUCWT53U+6BrZWsVWc3Q:EfDn+uzH0EGKjgvprewH_g",
                  callContext.id,
                );
                // IsDataFetched = True
                model.variables.isDataFetchedVar = true;
                OutSystemsDebugger.handleBreakpoint(
                  "4YvUCWT53U+6BrZWsVWc3Q:fxqnDYcDP0ikyo369z53zA",
                  callContext.id,
                );
              });
          }
        });
      })
        .then(function (res) {
          OutSystemsDebugger.pop(
            "4YvUCWT53U+6BrZWsVWc3Q:22h6fVvYb0OHu3Js4dlkhA",
            callContext.id,
          );
          return res;
        })
        .catch(function (ex) {
          OutSystemsDebugger.handleException(ex, callContext.id);
          OutSystemsDebugger.pop(
            "4YvUCWT53U+6BrZWsVWc3Q:22h6fVvYb0OHu3Js4dlkhA",
            callContext.id,
          );
          throw ex;
        });
    };
    Controller.registerVariableGroupType(
      "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_ContactList.OnReady$vars",
      [
        {
          name: "AssembleEventContact",
          attrName: "assembleEventContactVar",
          mandatory: false,
          dataType: OS.DataTypes.DataTypes.Record,
          defaultValue: function () {
            return new Connect2_Assemble_CSModel.AssembleEventContactRec();
          },
          complexType: Connect2_Assemble_CSModel.AssembleEventContactRec,
        },
      ],
    );
    Controller.registerVariableGroupType(
      "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_ContactList.OnReady$wasCurrentViewRestoredFromCacheJSResult",
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

    Controller.prototype.onReady$Action = function (callContext) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(
        controller._onReady$Action,
        callContext,
      );
    };
    Controller.prototype.emailContact$Action = function () {
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
        "4YvUCWT53U+6BrZWsVWc3Q:iX3FuV3E+UaXx+Q8_HFNZA:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.iX3FuV3E+UaXx+Q8_HFNZA:_Ffa+Dk7Xaed9+LAm4fNwQ",
        "Connect2_Assemble_MUI",
        "AssembleEventDetail_ContactList",
        "NRNodes.WebBlock",
        callContext.id,
        varBag,
      );
    };
    Controller.prototype.popDebuggerContext = function (callContext) {
      OutSystemsDebugger.pop(
        "4YvUCWT53U+6BrZWsVWc3Q:iX3FuV3E+UaXx+Q8_HFNZA",
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
            "Assemble/AssembleEventDetail_ContactList On Ready",
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
define("Connect2_Assemble_MUI.Assemble.AssembleEventDetail_ContactList.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", [], function () {
  return function ($parameters, $actions, $roles, $public) {
    $parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
  };
});

define("Connect2_Assemble_MUI.Assemble.AssembleEventDetail_ContactList.mvc$debugger", [
  "exports",
  "OutSystems/ClientRuntime/Debugger",
  "OutSystems/ClientRuntime/Main",
], function (exports, Debugger, OutSystems) {
  var OS = OutSystems.Internal;
  var metaInfo = {
    "M+FBHC4qqUyFNe90nhNNtw": {
      getter: function (varBag, idService) {
        return varBag.vars.value.assembleEventContactVar;
      },
    },
    aca3PLk0YUOHeRowj2rcPQ: {
      getter: function (varBag, idService) {
        return varBag.getCacheableMemberContactListVar.value;
      },
    },
    u6SL4yRU70esHciHqJWRAQ: {
      getter: function (varBag, idService) {
        return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
      },
    },
    "9vfT_TT050WvrMw_EvLOXQ": {
      getter: function (varBag, idService) {
        return varBag.model.variables.assembleEventContactListVar;
      },
    },
    "7dxcBSHbLE6GO4vUXsjO0w": {
      getter: function (varBag, idService) {
        return varBag.model.variables.isDataFetchedVar;
      },
      dataType: OS.DataTypes.DataTypes.Boolean,
    },
    "3VAoRwFIP0aJSxBqNtbc8w": {
      getter: function (varBag, idService) {
        return varBag.model.variables.assembleEventContactIdListIn;
      },
    },
  };
  OutSystemsDebugger.registerMetaInfo(metaInfo);
});
