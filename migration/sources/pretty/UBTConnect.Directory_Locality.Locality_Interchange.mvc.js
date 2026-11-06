define('UBTConnect.Directory_Locality.Locality_Interchange.mvc$model', [
  'OutSystems/ClientRuntime/Main',
  'UBTConnect.model',
  'Connect_Subdivision_CS.model',
  'UBTConnectLibrary.model',
  'UBTConnect.controller',
  'UBTConnect_Utils.controller',
  'UBTConnect.Directory_Interchange.Directory_Interchange_StatisticsList.mvc$model',
  'Connect_Subdivision_CS.model$UI_InterchangeRec',
  'UBTConnect.referencesHealth',
  'UBTConnect.referencesHealth$Connect_Subdivision_CS',
  'UBTConnect.model$UI_InterchangeList',
  'UBTConnectLibrary.model$StatisticsOptionsRec',
  'UBTConnect.referencesHealth$UBTConnectLibrary',
  'UBTConnect.model$TextTextUBT_ColorIdentifierUBT_Icons2IdentifierRecordList',
  'UBTConnect.controller$HasAccessToRegion',
  'UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp',
  'UBTConnect.referencesHealth$UBTConnect_Utils',
  'UBTConnect.controller$GetLocalityLabel',
  'UBTConnect.model$TextTextUBT_ColorIdentifierUBT_Icons2IdentifierRecord',
  'UBTConnect.model$UBT_ColorIdentifierUBT_Icons2IdentifierRecord',
  'UBTConnect.controller$GetIconLabel_Interchange_Statistics',
], function (
  OutSystems,
  UBTConnectModel,
  Connect_Subdivision_CSModel,
  UBTConnectLibraryModel,
  UBTConnectController,
  UBTConnect_UtilsController,
  UBTConnect_Directory_Interchange_Directory_Interchange_StatisticsList_mvcModel,
) {
  var OS = OutSystems.Internal;

  var GetInterchangesByLocalityIdDataActRec = (function (_super) {
    __extends(GetInterchangesByLocalityIdDataActRec, _super);
    function GetInterchangesByLocalityIdDataActRec(defaults) {
      _super.apply(this, arguments);
    }
    GetInterchangesByLocalityIdDataActRec.attributesToDeclare = function () {
      return [
        this.attr(
          'Out_InterchangeList',
          'out_InterchangeListOut',
          'Out_InterchangeList',
          true,
          false,
          OS.DataTypes.DataTypes.RecordList,
          function () {
            return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_InterchangeList());
          },
          true,
          UBTConnectModel.UI_InterchangeList,
        ),
      ].concat(_super.attributesToDeclare.call(this));
    };
    GetInterchangesByLocalityIdDataActRec.fromStructure = function (str) {
      return new GetInterchangesByLocalityIdDataActRec(
        new GetInterchangesByLocalityIdDataActRec.RecordClass({
          out_InterchangeListOut: OS.DataTypes.ImmutableBase.getData(str),
        }),
      );
    };
    GetInterchangesByLocalityIdDataActRec.init();
    return GetInterchangesByLocalityIdDataActRec;
  })(OS.Model.DataSourceRecord);

  var VariablesRecord = (function (_super) {
    __extends(VariablesRecord, _super);
    function VariablesRecord(defaults) {
      _super.apply(this, arguments);
    }
    VariablesRecord.attributesToDeclare = function () {
      return [
        this.attr(
          'In_InterchangeLocalityId',
          'in_InterchangeLocalityIdIn',
          'In_InterchangeLocalityId',
          true,
          false,
          OS.DataTypes.DataTypes.LongInteger,
          function () {
            return OS.DataTypes.LongInteger.defaultValue;
          },
          false,
        ),
        this.attr(
          '_in_InterchangeLocalityIdInDataFetchStatus',
          '_in_InterchangeLocalityIdInDataFetchStatus',
          '_in_InterchangeLocalityIdInDataFetchStatus',
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return /*Fetched*/ 1;
          },
          false,
        ),
        this.attr(
          'GetInterchangesByLocalityId',
          'getInterchangesByLocalityIdDataAct',
          'getInterchangesByLocalityIdDataAct',
          true,
          true,
          OS.DataTypes.DataTypes.Record,
          function () {
            return OS.DataTypes.ImmutableBase.getData(new GetInterchangesByLocalityIdDataActRec());
          },
          true,
          GetInterchangesByLocalityIdDataActRec,
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
    Object.defineProperty(Model, 'hasValidationWidgets', {
      enumerable: true,
      configurable: true,
      get: function () {
        if (Model._hasValidationWidgetsValue === undefined) {
          Model._hasValidationWidgetsValue =
            UBTConnect_Directory_Interchange_Directory_Interchange_StatisticsList_mvcModel.hasValidationWidgets;
        }

        return Model._hasValidationWidgetsValue;
      },
    });

    Model.prototype.setInputs = function (inputs) {
      if ('In_InterchangeLocalityId' in inputs) {
        this.variables.in_InterchangeLocalityIdIn = inputs.In_InterchangeLocalityId;
        if ('_in_InterchangeLocalityIdInDataFetchStatus' in inputs) {
          this.variables._in_InterchangeLocalityIdInDataFetchStatus = inputs._in_InterchangeLocalityIdInDataFetchStatus;
        }
      }
    };
    return Model;
  })(OS.Model.BaseViewModel);
  return new OS.Model.ModelFactory(Model, 'Directory_Locality.Locality_Interchange');
});
define('UBTConnect.Directory_Locality.Locality_Interchange.mvc$view', [
  'OutSystems/ClientRuntime/Main',
  'UBTConnect.model',
  'UBTConnect.controller',
  'Connect_Subdivision_CS.model',
  'UBTConnectLibrary.model',
  'UBTConnect_Utils.controller',
  'react',
  'OutSystems/ReactView/Main',
  'UBTConnect.Directory_Locality.Locality_Interchange.mvc$model',
  'UBTConnect.Directory_Locality.Locality_Interchange.mvc$controller',
  'UBTConnect.clientVariables',
  'UBTConnect.Directory_Interchange.Directory_Interchange_StatisticsList.mvc$view',
  'OutSystems/ReactWidgets/Main',
  'Connect_Subdivision_CS.model$UI_InterchangeRec',
  'UBTConnect.referencesHealth',
  'UBTConnect.referencesHealth$Connect_Subdivision_CS',
  'UBTConnect.model$UI_InterchangeList',
  'UBTConnectLibrary.model$StatisticsOptionsRec',
  'UBTConnect.referencesHealth$UBTConnectLibrary',
  'UBTConnect.model$TextTextUBT_ColorIdentifierUBT_Icons2IdentifierRecordList',
  'UBTConnect.controller$HasAccessToRegion',
  'UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp',
  'UBTConnect.referencesHealth$UBTConnect_Utils',
  'UBTConnect.controller$GetLocalityLabel',
  'UBTConnect.model$TextTextUBT_ColorIdentifierUBT_Icons2IdentifierRecord',
  'UBTConnect.model$UBT_ColorIdentifierUBT_Icons2IdentifierRecord',
  'UBTConnect.controller$GetIconLabel_Interchange_Statistics',
], function (
  OutSystems,
  UBTConnectModel,
  UBTConnectController,
  Connect_Subdivision_CSModel,
  UBTConnectLibraryModel,
  UBTConnect_UtilsController,
  React,
  OSView,
  UBTConnect_Directory_Locality_Locality_Interchange_mvc_model,
  UBTConnect_Directory_Locality_Locality_Interchange_mvc_controller,
  UBTConnectClientVariables,
  UBTConnect_Directory_Interchange_Directory_Interchange_StatisticsList_mvc_view,
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
    View.displayName = 'Directory_Locality.Locality_Interchange';
    View.getCssDependencies = function () {
      return ['css/OutSystemsReactWidgets.css'];
    };
    View.getJsDependencies = function () {
      return [];
    };
    View.getBlocks = function () {
      return [UBTConnect_Directory_Interchange_Directory_Interchange_StatisticsList_mvc_view];
    };
    Object.defineProperty(View.prototype, 'modelFactory', {
      get: function () {
        return UBTConnect_Directory_Locality_Locality_Interchange_mvc_model;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(View.prototype, 'controllerFactory', {
      get: function () {
        return UBTConnect_Directory_Locality_Locality_Interchange_mvc_controller;
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
        React.createElement(UBTConnect_Directory_Interchange_Directory_Interchange_StatisticsList_mvc_view, {
          inputs: {
            In_ShowSubtitle: true,
            In_IsLoading:
              model.variables.getInterchangesByLocalityIdDataAct.hasFetchErrorAttr ||
              !model.variables.getInterchangesByLocalityIdDataAct.isDataFetchedAttr,
            In_InterchangeList: model.variables.getInterchangesByLocalityIdDataAct.out_InterchangeListOut,
            _in_InterchangeListInDataFetchStatus: OS.Model.calculateDataFetchStatus(
              model.variables.getInterchangesByLocalityIdDataAct.dataFetchStatusAttr,
            ),
          },
          events: {
            _handleError: function (ex) {
              controller.handleError(ex);
            },
            event_NavigateToLocality$Action: function (localityIdIn, countryNameIn) {
              return Promise.resolve().then(function () {
                var eventHandlerContext = callContext.clone();
                return OS.Flow.tryFinally(
                  function () {
                    var varBag = {};
                    controller.pushDebuggerContext(eventHandlerContext);

                    OutSystemsDebugger.setThreadStartName(
                      eventHandlerContext.id,
                      'Directory_Interchange/Directory_Interchange_StatisticsList Event_NavigateToLocality',
                    );
                    return controller.handler_NavigateToLocality$Action(
                      localityIdIn,
                      countryNameIn,
                      controller.callContext(eventHandlerContext),
                    );
                  },
                  function () {
                    controller.popDebuggerContext(eventHandlerContext);
                  },
                );
              });
            },
          },
          _validationProps: {
            validationService: validationService,
          },
          _idProps: {
            service: idService,
            uuid: '0',
            alias: '1',
          },
          _widgetRecordProvider: widgetsRecordProvider,
          _dependencies: [],
        }),
      );
    };
    return View;
  })(OSView.BaseView.BaseWebBlock);

  return View;
});
define('UBTConnect.Directory_Locality.Locality_Interchange.mvc$controller', [
  'OutSystems/ClientRuntime/Main',
  'UBTConnect.model',
  'UBTConnect.controller',
  'Connect_Subdivision_CS.model',
  'UBTConnectLibrary.model',
  'UBTConnect_Utils.controller',
  'UBTConnect.languageResources',
  'UBTConnect.clientVariables',
  'UBTConnect.Directory_Locality.Locality_Interchange.mvc$debugger',
  'UBTConnect.Directory_Locality.Locality_Interchange.mvc$controller.OnReady.IsViewRestoredFromCacheJS',
  'Connect_Subdivision_CS.model$UI_InterchangeRec',
  'UBTConnect.referencesHealth',
  'UBTConnect.referencesHealth$Connect_Subdivision_CS',
  'UBTConnect.model$UI_InterchangeList',
  'UBTConnectLibrary.model$StatisticsOptionsRec',
  'UBTConnect.referencesHealth$UBTConnectLibrary',
  'UBTConnect.model$TextTextUBT_ColorIdentifierUBT_Icons2IdentifierRecordList',
  'UBTConnect.controller$HasAccessToRegion',
  'UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp',
  'UBTConnect.referencesHealth$UBTConnect_Utils',
  'UBTConnect.controller$GetLocalityLabel',
  'UBTConnect.model$TextTextUBT_ColorIdentifierUBT_Icons2IdentifierRecord',
  'UBTConnect.model$UBT_ColorIdentifierUBT_Icons2IdentifierRecord',
  'UBTConnect.controller$GetIconLabel_Interchange_Statistics',
], function (
  OutSystems,
  UBTConnectModel,
  UBTConnectController,
  Connect_Subdivision_CSModel,
  UBTConnectLibraryModel,
  UBTConnect_UtilsController,
  UBTConnectLanguageResources,
  UBTConnectClientVariables,
  UBTConnect_Directory_Locality_Locality_Interchange_mvc_Debugger,
  UBTConnect_Directory_Locality_Locality_Interchange_mvc_controller_OnReady_IsViewRestoredFromCacheJS,
) {
  var OS = OutSystems.Internal;
  var Controller = (function (_super) {
    __extends(Controller, _super);
    function Controller() {
      _super.apply(this, arguments);
      var controller = this.controller;
      this.clientActionProxies = {};
      this.dataFetchDependenciesOriginal = {
        getInterchangesByLocalityId$DataActRefresh: -1,
      };
      this.dataFetchDependentsGraph = {
        getInterchangesByLocalityId$DataActRefresh: [],
      };
      this.shouldSendClientVarsToDataSources = false;
    }
    // Server Actions

    // Aggregates and Data Actions
    Controller.prototype.getInterchangesByLocalityId$DataActRefresh = function (callContext) {
      var model = this.model;
      var controller = this.controller;
      var callContext = controller.callContext(callContext);
      return OS.Flow.tryFinally(
        function () {
          var varBag = {};
          controller.pushDebuggerContext(callContext);

          OutSystemsDebugger.push(
            'ZK4RCP5OdEuntYI2VRpwBA:mgZ7JKkDJkq6EkrJETkzXA:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.TbBhuhaX+kC5VLCaLi1p7A/DataActions.mgZ7JKkDJkq6EkrJETkzXA:sF+CjafkK8qGQOMjAELgfg',
            'UBTConnect',
            'GetInterchangesByLocalityId',
            'NRFlows.DataScreenActionFlow',
            callContext.id,
            varBag,
          );
          OutSystemsDebugger.setThreadStartName(
            callContext.id,
            'Directory_Locality/Locality_Interchange/GetInterchangesByLocalityId',
          );
          return controller
            .callDataAction(
              'DataActionGetInterchangesByLocalityId',
              'screenservices/UBTConnect/Directory_Locality/Locality_Interchange/DataActionGetInterchangesByLocalityId',
              'lSYnjwRCoeKHk3i5CzFJ+A',
              function (b) {
                model.variables.getInterchangesByLocalityIdDataAct.dataFetchStatusAttr = b;
              },
              function (json) {
                model.variables.getInterchangesByLocalityIdDataAct.replaceWith(
                  OS.DataConversion.ServerDataConverter.from(
                    json,
                    model.variables.getInterchangesByLocalityIdDataAct.constructor,
                  ),
                );
              },
              undefined,
              OutSystemsDebugger.getRequestHeaders(callContext.id),
              function (json, headers) {
                OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
              },
              callContext,
              undefined,
              false,
            )
            .then(function () {
              OutSystemsDebugger.setThreadStartName(
                callContext.id,
                'Directory_Locality/Locality_Interchange/GetInterchangesByLocalityId On After Fetch',
              );
              controller._onAfterFetch_GetInterchangesByLocalityId$Action(controller.callContext(callContext));
            });
        },
        function () {
          OutSystemsDebugger.pop('ZK4RCP5OdEuntYI2VRpwBA:mgZ7JKkDJkq6EkrJETkzXA', callContext.id);
          controller.popDebuggerContext(callContext);
        },
      );
    };

    Controller.prototype.dataFetchActionNames = ['getInterchangesByLocalityId$DataActRefresh'];
    // Client Actions
    Controller.prototype._handler_NavigateToLocality$Action = function (
      in_LocalityIdIn,
      in_CountryNameIn,
      callContext,
    ) {
      var varBag = {};
      var model = this.model;
      var controller = this.controller;
      var idService = this.idService;
      varBag.model = model;
      varBag.idService = idService;
      controller.ensureControllerAlive('Handler_NavigateToLocality');
      callContext = controller.callContext(callContext);
      var vars = new OS.DataTypes.VariableHolder(
        new (controller.constructor.getVariableGroupType(
          'UBTConnect.Directory_Locality.Locality_Interchange.Handler_NavigateToLocality$vars',
        ))(),
      );
      vars.value.in_LocalityIdInLocal = in_LocalityIdIn;
      vars.value.in_CountryNameInLocal = in_CountryNameIn;
      var hasAccessToRegionVar = new OS.DataTypes.VariableHolder();
      var listIndexOfVar = new OS.DataTypes.VariableHolder();
      varBag.callContext = callContext;
      varBag.vars = vars;
      varBag.hasAccessToRegionVar = hasAccessToRegionVar;
      varBag.listIndexOfVar = listIndexOfVar;
      OutSystemsDebugger.push(
        'ZK4RCP5OdEuntYI2VRpwBA:CqEfYKRppU6pMsXMVfceFw:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.TbBhuhaX+kC5VLCaLi1p7A/ClientActions.CqEfYKRppU6pMsXMVfceFw:W+0LEK1_r1fqHXi8hZV7wg',
        'UBTConnect',
        'Handler_NavigateToLocality',
        'NRFlows.ClientScreenActionFlow',
        callContext.id,
        varBag,
      );
      OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:2Gmj+JexlU2QYj6A9vgsWw', callContext.id);
      return OS.Flow.executeAsyncFlow(function () {
        OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:WYl6BalgmUy9EVpySii_0g', callContext.id);
        // Execute Action: HasAccessToRegion
        model.flush();
        return UBTConnectController.default
          .hasAccessToRegion$Action(
            OS.BuiltinFunctions.longIntegerToText(vars.value.in_LocalityIdInLocal),
            vars.value.in_CountryNameInLocal,
            callContext,
          )
          .then(function (value) {
            hasAccessToRegionVar.value = value;
          })
          .then(function () {
            // Check if HasAccessToRegion HasAccess
            return OS.Flow.executeSequence(function () {
              if (
                OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:+cJ9sQzAY0OAjrINupQgDQ', callContext.id) &&
                hasAccessToRegionVar.value.hasAccessOut === true
              ) {
                OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:GpITV_Cp3Euji9d4i1Lbtw', callContext.id);
                // Execute Action: ListIndexOf
                listIndexOfVar.value = OS.SystemActions.listIndexOf(
                  model.variables.getInterchangesByLocalityIdDataAct.out_InterchangeListOut,
                  function (p) {
                    return p.interchangeLocalityIdAttr.equals(vars.value.in_LocalityIdInLocal);
                  },
                  callContext,
                );

                if (
                  OutSystemsDebugger.handleBreakpoint(
                    'ZK4RCP5OdEuntYI2VRpwBA:ixiykunFAkefDvMuzbMt0w',
                    callContext.id,
                  ) &&
                  listIndexOfVar.value.positionOut !== -1
                ) {
                  OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:5QQpEHxZq0WsHoLEOcSZ8Q', callContext.id);
                  // LocalityLabel = GetLocalityLabel(GetInterchangesByLocalityId.Out_InterchangeList[ListIndexOf.Position].InterchangeLocalityName, GetInterchangesByLocalityId.Out_InterchangeList[ListIndexOf.Position].InterchangeCountryName)
                  vars.value.localityLabelVar = OutSystemsDebugger.handleFunctionCall(
                    function () {
                      return UBTConnectController.default.getLocalityLabel$Action(
                        model.variables.getInterchangesByLocalityIdDataAct.out_InterchangeListOut.getItem(
                          listIndexOfVar.value.positionOut,
                        ).interchangeLocalityNameAttr,
                        model.variables.getInterchangesByLocalityIdDataAct.out_InterchangeListOut.getItem(
                          listIndexOfVar.value.positionOut,
                        ).interchangeCountryNameAttr,
                        callContext,
                      ).out_LabelOut;
                    },
                    OS.DataTypes.DataTypes.Text,
                    callContext.id,
                  );
                }

                OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:OWr6TPhbBUWskKsHYr9Wsw', callContext.id);
                // Destination: /UBTConnect/Locality_Details
                return OS.Flow.returnAsync(
                  OS.Navigation.navigateTo(
                    OS.Navigation.generateScreenURL('/UBTConnect/Locality_Details', {
                      PreloadedLocalityLabel: OS.DataConversion.ServerDataConverter.asString(
                        vars.value.localityLabelVar,
                        OS.DataTypes.DataTypes.Text,
                      ),
                      LocalityId: OS.DataConversion.ServerDataConverter.asString(
                        vars.value.in_LocalityIdInLocal,
                        OS.DataTypes.DataTypes.LongInteger,
                      ),
                    }),
                    OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                    callContext,
                    true,
                  ),
                );
              } else {
                OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:FV0aEllom02ZeeXiI9Noag', callContext.id);
                // Execute Action: App_Subscription_ShowUpgradePopUp
                model.flush();
                return UBTConnect_UtilsController.default
                  .app_Subscription_ShowUpgradePopUp$Action(callContext)
                  .then(function () {
                    OutSystemsDebugger.handleBreakpoint(
                      'ZK4RCP5OdEuntYI2VRpwBA:zOdp1b1uZUqf0C6+Qeei7g',
                      callContext.id,
                    );
                  });
              }
            });
          });
      })
        .then(function (res) {
          OutSystemsDebugger.pop('ZK4RCP5OdEuntYI2VRpwBA:CqEfYKRppU6pMsXMVfceFw', callContext.id);
          return res;
        })
        .catch(function (ex) {
          OutSystemsDebugger.handleException(ex, callContext.id);
          OutSystemsDebugger.pop('ZK4RCP5OdEuntYI2VRpwBA:CqEfYKRppU6pMsXMVfceFw', callContext.id);
          throw ex;
        });
    };
    Controller.registerVariableGroupType(
      'UBTConnect.Directory_Locality.Locality_Interchange.Handler_NavigateToLocality$vars',
      [
        {
          name: 'In_LocalityId',
          attrName: 'in_LocalityIdInLocal',
          mandatory: true,
          dataType: OS.DataTypes.DataTypes.LongInteger,
          defaultValue: function () {
            return OS.DataTypes.LongInteger.defaultValue;
          },
        },
        {
          name: 'In_CountryName',
          attrName: 'in_CountryNameInLocal',
          mandatory: true,
          dataType: OS.DataTypes.DataTypes.Text,
          defaultValue: function () {
            return '';
          },
        },
        {
          name: 'LocalityLabel',
          attrName: 'localityLabelVar',
          mandatory: false,
          dataType: OS.DataTypes.DataTypes.Text,
          defaultValue: function () {
            return '';
          },
        },
      ],
    );
    Controller.prototype._onReady$Action = function (callContext) {
      var varBag = {};
      var model = this.model;
      var controller = this.controller;
      var idService = this.idService;
      varBag.model = model;
      varBag.idService = idService;
      controller.ensureControllerAlive('OnReady');
      callContext = controller.callContext(callContext);
      var vars = new OS.DataTypes.VariableHolder(
        new (controller.constructor.getVariableGroupType(
          'UBTConnect.Directory_Locality.Locality_Interchange.OnReady$vars',
        ))(),
      );
      var isViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
      varBag.callContext = callContext;
      varBag.vars = vars;
      varBag.isViewRestoredFromCacheJSResult = isViewRestoredFromCacheJSResult;
      OutSystemsDebugger.push(
        'ZK4RCP5OdEuntYI2VRpwBA:eStCYi+OXkyp0He5oZaIgw:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.TbBhuhaX+kC5VLCaLi1p7A/ClientActions.eStCYi+OXkyp0He5oZaIgw:hoWOjIMr7SRxHyoJCq1d1A',
        'UBTConnect',
        'OnReady',
        'NRFlows.ClientScreenActionFlow',
        callContext.id,
        varBag,
      );
      OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:fN9wiIVL7kifvwWWAdRcnA', callContext.id);
      return OS.Flow.executeAsyncFlow(function () {
        OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:H9soiGWY002rrxbHE6oF2w', callContext.id);
        isViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(
          UBTConnect_Directory_Locality_Locality_Interchange_mvc_controller_OnReady_IsViewRestoredFromCacheJS,
          'IsViewRestoredFromCache',
          'OnReady',
          {
            IsRestoredFromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
          },
          function ($parameters) {
            var jsNodeResult = new (controller.constructor.getVariableGroupType(
              'UBTConnect.Directory_Locality.Locality_Interchange.OnReady$isViewRestoredFromCacheJSResult',
            ))();
            jsNodeResult.isRestoredFromCacheOut = OS.DataConversion.JSNodeParamConverter.from(
              $parameters.IsRestoredFromCache,
              OS.DataTypes.DataTypes.Boolean,
            );
            return jsNodeResult;
          },
          {},
          {},
        );
        // Check if IsViewRestoredFromCache IsRestoredFromCache
        return OS.Flow.executeSequence(function () {
          if (
            OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:G_mgD0oV7U2L4IZ48GjfNg', callContext.id) &&
            isViewRestoredFromCacheJSResult.value.isRestoredFromCacheOut === true
          ) {
            OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:rMPOYwYpj0KR5wnyd9DC7w', callContext.id);
          } else {
            while (
              OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:j0d5+8gy0USGB5l018LggQ', callContext.id) &&
              vars.value.currentItemVar < vars.value.loadingItemsVar
            ) {
              OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:HLoaYzoFLEqpAmsJoPBGDQ', callContext.id);
              // CurrentItem = CurrentItem + 1
              vars.value.currentItemVar = vars.value.currentItemVar + 1;
              OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:J7+cRZeqPkiqX8k5kRQB5Q', callContext.id);
              // Execute Action: ListAppend
              OS.SystemActions.listAppend(
                model.variables.getInterchangesByLocalityIdDataAct.out_InterchangeListOut,
                (function () {
                  var rec = new Connect_Subdivision_CSModel.UI_InterchangeRec();
                  rec.interchangeStatisticsAttr = (function () {
                    var rec = new UBTConnectLibraryModel.StatisticsOptionsRec();
                    rec.titleAttr = 'Loading';
                    rec.subtitleAttr = 'Loading';
                    rec.statisticsAttr = (function () {
                      var list = new UBTConnectModel.TextTextUBT_ColorIdentifierUBT_Icons2IdentifierRecordList();
                      list.pushAll([
                        (function () {
                          var rec = new UBTConnectModel.TextTextUBT_ColorIdentifierUBT_Icons2IdentifierRecord();
                          rec.nameAttr = 'Loading';
                          rec.valueAttr = '11';
                          return rec;
                        })(),
                        (function () {
                          var rec = new UBTConnectModel.TextTextUBT_ColorIdentifierUBT_Icons2IdentifierRecord();
                          rec.nameAttr = 'Loading';
                          rec.valueAttr = '11';
                          return rec;
                        })(),
                        (function () {
                          var rec = new UBTConnectModel.TextTextUBT_ColorIdentifierUBT_Icons2IdentifierRecord();
                          rec.nameAttr = 'Loading';
                          rec.valueAttr = '11';
                          return rec;
                        })(),
                      ]);
                      return list;
                    })();
                    return rec;
                  })();
                  rec.interchangeDistanceAttr = '111';
                  return rec;
                })(),
                callContext,
              );
            }

            OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:xqI4geHt5E229M8wUUk+LA', callContext.id);
            // Refresh Query: GetInterchangesByLocalityId
            var result = controller.getInterchangesByLocalityId$DataActRefresh(callContext);
            model.flush();
            return result.then(function () {
              OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:xMV0l6gfwE24EMifVE1zbQ', callContext.id);
            });
          }
        });
      })
        .then(function (res) {
          OutSystemsDebugger.pop('ZK4RCP5OdEuntYI2VRpwBA:eStCYi+OXkyp0He5oZaIgw', callContext.id);
          return res;
        })
        .catch(function (ex) {
          OutSystemsDebugger.handleException(ex, callContext.id);
          OutSystemsDebugger.pop('ZK4RCP5OdEuntYI2VRpwBA:eStCYi+OXkyp0He5oZaIgw', callContext.id);
          throw ex;
        });
    };
    Controller.registerVariableGroupType('UBTConnect.Directory_Locality.Locality_Interchange.OnReady$vars', [
      {
        name: 'LoadingItems',
        attrName: 'loadingItemsVar',
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Integer,
        defaultValue: function () {
          return 3;
        },
      },
      {
        name: 'CurrentItem',
        attrName: 'currentItemVar',
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Integer,
        defaultValue: function () {
          return 0;
        },
      },
    ]);
    Controller.registerVariableGroupType(
      'UBTConnect.Directory_Locality.Locality_Interchange.OnReady$isViewRestoredFromCacheJSResult',
      [
        {
          name: 'IsRestoredFromCache',
          attrName: 'isRestoredFromCacheOut',
          mandatory: true,
          dataType: OS.DataTypes.DataTypes.Boolean,
          defaultValue: function () {
            return false;
          },
        },
      ],
    );
    Controller.prototype._onAfterFetch_GetInterchangesByLocalityId$Action = function (callContext) {
      var varBag = {};
      var model = this.model;
      var controller = this.controller;
      var idService = this.idService;
      varBag.model = model;
      varBag.idService = idService;
      controller.ensureControllerAlive('OnAfterFetch_GetInterchangesByLocalityId');
      callContext = controller.callContext(callContext);
      varBag.callContext = callContext;
      try {
        OutSystemsDebugger.push(
          'ZK4RCP5OdEuntYI2VRpwBA:CxWB+_TJxEmLBZBcRHf1gg:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.TbBhuhaX+kC5VLCaLi1p7A/ClientActions.CxWB+_TJxEmLBZBcRHf1gg:pX7RVUnh91yfBC6BeukYdw',
          'UBTConnect',
          'OnAfterFetch_GetInterchangesByLocalityId',
          'NRFlows.ClientScreenActionFlow',
          callContext.id,
          varBag,
        );
        OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:hjTa9RCCmUq7EDT_5Gbu0w', callContext.id);
        // Foreach GetInterchangesByLocalityId.Out_InterchangeList
        callContext.iterationContext.registerIterationStart(
          model.variables.getInterchangesByLocalityIdDataAct.out_InterchangeListOut,
        );
        try {
          var out_InterchangeListIterator = callContext.iterationContext.getIterator(
            model.variables.getInterchangesByLocalityIdDataAct.out_InterchangeListOut,
          );
          var out_InterchangeListIndex = 0;
          while (
            OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:bJmhOcwplkmjWsp5+Yj9sQ', callContext.id) &&
            out_InterchangeListIndex < model.variables.getInterchangesByLocalityIdDataAct.out_InterchangeListOut.length
          ) {
            out_InterchangeListIterator.currentRowNumber = out_InterchangeListIndex;
            // Foreach GetInterchangesByLocalityId.Out_InterchangeList.Current.InterchangeStatistics.Statistics
            callContext.iterationContext.registerIterationStart(
              model.variables.getInterchangesByLocalityIdDataAct.out_InterchangeListOut.getItem(
                out_InterchangeListIndex.valueOf(),
              ).interchangeStatisticsAttr.statisticsAttr,
            );
            try {
              var statisticsIterator = callContext.iterationContext.getIterator(
                model.variables.getInterchangesByLocalityIdDataAct.out_InterchangeListOut.getItem(
                  out_InterchangeListIndex.valueOf(),
                ).interchangeStatisticsAttr.statisticsAttr,
              );
              var statisticsIndex = 0;
              while (
                OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:lyj0FRH4CEWQYLN9U0PNhQ', callContext.id) &&
                statisticsIndex <
                  model.variables.getInterchangesByLocalityIdDataAct.out_InterchangeListOut.getItem(
                    out_InterchangeListIndex.valueOf(),
                  ).interchangeStatisticsAttr.statisticsAttr.length
              ) {
                statisticsIterator.currentRowNumber = statisticsIndex;
                OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:3SQAE9TtX0CfTFqZfuoNuA', callContext.id);
                // GetInterchangesByLocalityId.Out_InterchangeList.Current.InterchangeStatistics.Statistics.Current.IconColorId = GetIconLabel_Interchange_Statistics(GetInterchangesByLocalityId.Out_InterchangeList.Current.InterchangeStatistics.Statistics.Current.Name).Color_Id
                model.variables.getInterchangesByLocalityIdDataAct.out_InterchangeListOut
                  .getItem(out_InterchangeListIndex.valueOf())
                  .interchangeStatisticsAttr.statisticsAttr.getItem(statisticsIndex.valueOf()).iconColorIdAttr =
                  OutSystemsDebugger.handleFunctionCall(
                    function () {
                      return UBTConnectController.default.getIconLabel_Interchange_Statistics$Action(
                        model.variables.getInterchangesByLocalityIdDataAct.out_InterchangeListOut
                          .getItem(out_InterchangeListIndex.valueOf())
                          .interchangeStatisticsAttr.statisticsAttr.getItem(statisticsIndex.valueOf()).nameAttr,
                        callContext,
                      ).iconOut;
                    },
                    OS.DataTypes.DataTypes.Record,
                    callContext.id,
                  ).color_IdAttr;
                OutSystemsDebugger.handleBreakpoint(
                  'ZK4RCP5OdEuntYI2VRpwBA:3SQAE9TtX0CfTFqZfuoNuA',
                  callContext.id,
                  OutSystemsDebugger.BreakpointType.BetweenAssignments,
                  '2',
                );
                // GetInterchangesByLocalityId.Out_InterchangeList.Current.InterchangeStatistics.Statistics.Current.IconId = GetIconLabel_Interchange_Statistics(GetInterchangesByLocalityId.Out_InterchangeList.Current.InterchangeStatistics.Statistics.Current.Name).IconId
                model.variables.getInterchangesByLocalityIdDataAct.out_InterchangeListOut
                  .getItem(out_InterchangeListIndex.valueOf())
                  .interchangeStatisticsAttr.statisticsAttr.getItem(statisticsIndex.valueOf()).iconIdAttr =
                  OutSystemsDebugger.handleFunctionCall(
                    function () {
                      return UBTConnectController.default.getIconLabel_Interchange_Statistics$Action(
                        model.variables.getInterchangesByLocalityIdDataAct.out_InterchangeListOut
                          .getItem(out_InterchangeListIndex.valueOf())
                          .interchangeStatisticsAttr.statisticsAttr.getItem(statisticsIndex.valueOf()).nameAttr,
                        callContext,
                      ).iconOut;
                    },
                    OS.DataTypes.DataTypes.Record,
                    callContext.id,
                  ).iconIdAttr;
                statisticsIndex++;
              }
            } finally {
              callContext.iterationContext.registerIterationEnd(
                model.variables.getInterchangesByLocalityIdDataAct.out_InterchangeListOut.getItem(
                  out_InterchangeListIndex.valueOf(),
                ).interchangeStatisticsAttr.statisticsAttr,
              );
            }

            out_InterchangeListIndex++;
          }
        } finally {
          callContext.iterationContext.registerIterationEnd(
            model.variables.getInterchangesByLocalityIdDataAct.out_InterchangeListOut,
          );
        }

        OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:WCyGRatWkkOaJkMbgcxKSQ', callContext.id);
      } catch (ex) {
        OutSystemsDebugger.handleException(ex, callContext.id);
        throw ex;
      } finally {
        OutSystemsDebugger.pop('ZK4RCP5OdEuntYI2VRpwBA:CxWB+_TJxEmLBZBcRHf1gg', callContext.id);
      }
    };

    Controller.prototype.handler_NavigateToLocality$Action = function (in_LocalityIdIn, in_CountryNameIn, callContext) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(
        controller._handler_NavigateToLocality$Action,
        callContext,
        in_LocalityIdIn,
        in_CountryNameIn,
      );
    };
    Controller.prototype.onReady$Action = function (callContext) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(controller._onReady$Action, callContext);
    };
    Controller.prototype.onAfterFetch_GetInterchangesByLocalityId$Action = function (callContext) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(
        controller._onAfterFetch_GetInterchangesByLocalityId$Action,
        callContext,
      );
    };

    // Event Handler Actions
    Controller.prototype.pushDebuggerContext = function (callContext) {
      var varBag = {};
      OutSystemsDebugger.push(
        'ZK4RCP5OdEuntYI2VRpwBA:BmZ1TBE6pkiXu8fkupJ8UQ:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ:FwAkjRuoCVCfL_Y3sNenPQ',
        'UBTConnect',
        'Directory_Locality',
        'NRFlows.WebFlow',
        callContext.id,
        varBag,
      );
      OutSystemsDebugger.push(
        'ZK4RCP5OdEuntYI2VRpwBA:TbBhuhaX+kC5VLCaLi1p7A:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.TbBhuhaX+kC5VLCaLi1p7A:i35H6cYGGZ5JWWpAoFfDJA',
        'UBTConnect',
        'Locality_Interchange',
        'NRNodes.WebBlock',
        callContext.id,
        varBag,
      );
    };
    Controller.prototype.popDebuggerContext = function (callContext) {
      OutSystemsDebugger.pop('ZK4RCP5OdEuntYI2VRpwBA:TbBhuhaX+kC5VLCaLi1p7A', callContext.id);
      OutSystemsDebugger.pop('ZK4RCP5OdEuntYI2VRpwBA:BmZ1TBE6pkiXu8fkupJ8UQ', callContext.id);
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

          OutSystemsDebugger.setThreadStartName(callContext.id, 'Directory_Locality/Locality_Interchange On Ready');
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
      return UBTConnectController.default.defaultTimeout;
    };
    return Controller;
  })(OS.Controller.BaseViewController);
  return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});
define('UBTConnect.Directory_Locality.Locality_Interchange.mvc$controller.OnReady.IsViewRestoredFromCacheJS', [], function () {
  return function ($parameters, $actions, $roles, $public) {
    $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache();
  };
});

define('UBTConnect.Directory_Locality.Locality_Interchange.mvc$debugger', [
  'exports',
  'OutSystems/ClientRuntime/Debugger',
  'OutSystems/ClientRuntime/Main',
], function (exports, Debugger, OutSystems) {
  var OS = OutSystems.Internal;
  var metaInfo = {
    H0fZi_3xQk6hBRfZatiYsg: {
      getter: function (varBag, idService) {
        return varBag.vars.value.localityLabelVar;
      },
      dataType: OS.DataTypes.DataTypes.Text,
    },
    ISpl4JWzn0qgFK5GhhHpvg: {
      getter: function (varBag, idService) {
        return varBag.vars.value.in_LocalityIdInLocal;
      },
      dataType: OS.DataTypes.DataTypes.LongInteger,
    },
    'FldA+yQWP0+utj81jVz6ZQ': {
      getter: function (varBag, idService) {
        return varBag.vars.value.in_CountryNameInLocal;
      },
      dataType: OS.DataTypes.DataTypes.Text,
    },
    WYl6BalgmUy9EVpySii_0g: {
      getter: function (varBag, idService) {
        return varBag.hasAccessToRegionVar.value;
      },
    },
    GpITV_Cp3Euji9d4i1Lbtw: {
      getter: function (varBag, idService) {
        return varBag.listIndexOfVar.value;
      },
    },
    '11GuVkjtyUuACVIVqSES2A': {
      getter: function (varBag, idService) {
        return varBag.vars.value.loadingItemsVar;
      },
      dataType: OS.DataTypes.DataTypes.Integer,
    },
    'Ch+066tt5EG5ARMBrnChEw': {
      getter: function (varBag, idService) {
        return varBag.vars.value.currentItemVar;
      },
      dataType: OS.DataTypes.DataTypes.Integer,
    },
    H9soiGWY002rrxbHE6oF2w: {
      getter: function (varBag, idService) {
        return varBag.isViewRestoredFromCacheJSResult.value;
      },
    },
    IzXx5Pf0PEWXZD1H5z7A7Q: {
      getter: function (varBag, idService) {
        return varBag.model.variables.in_InterchangeLocalityIdIn;
      },
      dataType: OS.DataTypes.DataTypes.LongInteger,
    },
    mgZ7JKkDJkq6EkrJETkzXA: {
      getter: function (varBag, idService) {
        return varBag.model.variables.getInterchangesByLocalityIdDataAct;
      },
    },
  };
  OutSystemsDebugger.registerMetaInfo(metaInfo);
});
