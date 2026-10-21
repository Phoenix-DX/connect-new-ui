define('UBTConnect.Directory_Locality.Locality_OneSchoolGlobal.mvc$model', [
  'OutSystems/ClientRuntime/Main',
  'UBTConnect.model',
  'Connect_CommunityBusiness_CS.model',
  'Connect_Geography_CS.model',
  'UBTConnectLibrary.model',
  'UBTConnect.controller',
  'UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model',
  'UBTConnect.Directory_CommonBlocks.Directory_EmptyState.mvc$model',
  'UBTConnect.Directory_OneSchoolGlobal_Blocks.OneSchoolGlobal_List.mvc$model',
  'Connect_CommunityBusiness_CS.model$UI_OneSchool_CardRec',
  'UBTConnect.referencesHealth',
  'UBTConnect.referencesHealth$Connect_CommunityBusiness_CS',
  'UBTConnect.model$UI_OneSchool_CardList',
  'Connect_Geography_CS.model$UI_LocalityTimezoneRec',
  'UBTConnect.referencesHealth$Connect_Geography_CS',
  'UBTConnectLibrary.model$ContainerOptionsRec',
  'UBTConnect.referencesHealth$UBTConnectLibrary',
  'UBTConnectLibrary.model$BackgroundOptionsRec',
  'UBTConnectLibrary.model$BackgroundImageRec',
  'UBTConnectLibrary.model$SpacingOptionsRec',
  'UBTConnectLibrary.model$BorderOptionsRec',
  'UBTConnectLibrary.model$RadiusOptionsRec',
  'UBTConnectLibrary.model$TextOptionsRec',
  'UBTConnectLibrary.model$DisplayOptionsRec',
  'UBTConnectLibrary.model$SizeOptionsRec',
  'Connect_CommunityBusiness_CS.model$UI_OneSchool_Card_ContentRec',
  'UBTConnect.model$UI_OneSchoolGlobal_ListCardList',
  'UBTConnect.controller$GetSkeletonList_UI_OneSchoolGlobal_ListCard',
], function (
  OutSystems,
  UBTConnectModel,
  Connect_CommunityBusiness_CSModel,
  Connect_Geography_CSModel,
  UBTConnectLibraryModel,
  UBTConnectController,
  UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel,
  UBTConnect_Directory_CommonBlocks_Directory_EmptyState_mvcModel,
  UBTConnect_Directory_OneSchoolGlobal_Blocks_OneSchoolGlobal_List_mvcModel,
) {
  var OS = OutSystems.Internal;

  var Get_OneSchoolGlobal_ListDataActRec = (function (_super) {
    __extends(Get_OneSchoolGlobal_ListDataActRec, _super);
    function Get_OneSchoolGlobal_ListDataActRec(defaults) {
      _super.apply(this, arguments);
    }
    Get_OneSchoolGlobal_ListDataActRec.attributesToDeclare = function () {
      return [
        this.attr(
          'Out_OneSchoolGlobal_List',
          'out_OneSchoolGlobal_ListOut',
          'Out_OneSchoolGlobal_List',
          true,
          false,
          OS.DataTypes.DataTypes.RecordList,
          function () {
            return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_OneSchool_CardList());
          },
          true,
          UBTConnectModel.UI_OneSchool_CardList,
        ),
      ].concat(_super.attributesToDeclare.call(this));
    };
    Get_OneSchoolGlobal_ListDataActRec.fromStructure = function (str) {
      return new Get_OneSchoolGlobal_ListDataActRec(
        new Get_OneSchoolGlobal_ListDataActRec.RecordClass({
          out_OneSchoolGlobal_ListOut: OS.DataTypes.ImmutableBase.getData(str),
        }),
      );
    };
    Get_OneSchoolGlobal_ListDataActRec.init();
    return Get_OneSchoolGlobal_ListDataActRec;
  })(OS.Model.DataSourceRecord);

  var VariablesRecord = (function (_super) {
    __extends(VariablesRecord, _super);
    function VariablesRecord(defaults) {
      _super.apply(this, arguments);
    }
    VariablesRecord.attributesToDeclare = function () {
      return [
        this.attr(
          'GetOneSchoolGlobal_List_StartIndex',
          'getOneSchoolGlobal_List_StartIndexVar',
          'GetOneSchoolGlobal_List_StartIndex',
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return 0;
          },
          false,
        ),
        this.attr(
          'GetOneSchoolGlobal_List_Offset',
          'getOneSchoolGlobal_List_OffsetVar',
          'GetOneSchoolGlobal_List_Offset',
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return 20;
          },
          false,
        ),
        this.attr(
          'Get_OneSchoolGlobal_List_IsLoading',
          'get_OneSchoolGlobal_List_IsLoadingVar',
          'Get_OneSchoolGlobal_List_IsLoading',
          true,
          false,
          OS.DataTypes.DataTypes.Boolean,
          function () {
            return true;
          },
          false,
        ),
        this.attr(
          'Out_OneSchoolGlobal_List2',
          'out_OneSchoolGlobal_List2Var',
          'Out_OneSchoolGlobal_List2',
          true,
          false,
          OS.DataTypes.DataTypes.RecordList,
          function () {
            return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_OneSchool_CardList());
          },
          false,
          UBTConnectModel.UI_OneSchool_CardList,
        ),
        this.attr(
          'In_LocalityId',
          'in_LocalityIdIn',
          'In_LocalityId',
          true,
          false,
          OS.DataTypes.DataTypes.LongInteger,
          function () {
            return OS.DataTypes.LongInteger.defaultValue;
          },
          false,
        ),
        this.attr(
          '_in_LocalityIdInDataFetchStatus',
          '_in_LocalityIdInDataFetchStatus',
          '_in_LocalityIdInDataFetchStatus',
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return /*Fetched*/ 1;
          },
          false,
        ),
        this.attr(
          'In_LocalityTimezoneData',
          'in_LocalityTimezoneDataIn',
          'In_LocalityTimezoneData',
          true,
          false,
          OS.DataTypes.DataTypes.Record,
          function () {
            return OS.DataTypes.ImmutableBase.getData(new Connect_Geography_CSModel.UI_LocalityTimezoneRec());
          },
          false,
          Connect_Geography_CSModel.UI_LocalityTimezoneRec,
        ),
        this.attr(
          '_in_LocalityTimezoneDataInDataFetchStatus',
          '_in_LocalityTimezoneDataInDataFetchStatus',
          '_in_LocalityTimezoneDataInDataFetchStatus',
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return /*Fetched*/ 1;
          },
          false,
        ),
        this.attr(
          'Get_OneSchoolGlobal_List',
          'get_OneSchoolGlobal_ListDataAct',
          'get_OneSchoolGlobal_ListDataAct',
          true,
          true,
          OS.DataTypes.DataTypes.Record,
          function () {
            return OS.DataTypes.ImmutableBase.getData(new Get_OneSchoolGlobal_ListDataActRec());
          },
          true,
          Get_OneSchoolGlobal_ListDataActRec,
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
            UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets ||
            UBTConnect_Directory_CommonBlocks_Directory_EmptyState_mvcModel.hasValidationWidgets ||
            UBTConnect_Directory_OneSchoolGlobal_Blocks_OneSchoolGlobal_List_mvcModel.hasValidationWidgets;
        }

        return Model._hasValidationWidgetsValue;
      },
    });

    Model.prototype.setInputs = function (inputs) {
      if ('In_LocalityId' in inputs) {
        this.variables.in_LocalityIdIn = inputs.In_LocalityId;
        if ('_in_LocalityIdInDataFetchStatus' in inputs) {
          this.variables._in_LocalityIdInDataFetchStatus = inputs._in_LocalityIdInDataFetchStatus;
        }
      }

      if ('In_LocalityTimezoneData' in inputs) {
        this.variables.in_LocalityTimezoneDataIn = inputs.In_LocalityTimezoneData;
        if ('_in_LocalityTimezoneDataInDataFetchStatus' in inputs) {
          this.variables._in_LocalityTimezoneDataInDataFetchStatus = inputs._in_LocalityTimezoneDataInDataFetchStatus;
        }
      }
    };
    return Model;
  })(OS.Model.BaseViewModel);
  return new OS.Model.ModelFactory(Model, 'Directory_Locality.Locality_OneSchoolGlobal');
});
define('UBTConnect.Directory_Locality.Locality_OneSchoolGlobal.mvc$view', [
  'OutSystems/ClientRuntime/Main',
  'UBTConnect.model',
  'UBTConnect.controller',
  'Connect_CommunityBusiness_CS.model',
  'Connect_Geography_CS.model',
  'UBTConnectLibrary.model',
  'react',
  'OutSystems/ReactView/Main',
  'UBTConnect.Directory_Locality.Locality_OneSchoolGlobal.mvc$model',
  'UBTConnect.Directory_Locality.Locality_OneSchoolGlobal.mvc$controller',
  'UBTConnect.clientVariables',
  'UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view',
  'OutSystems/ReactWidgets/Main',
  'UBTConnect.Directory_CommonBlocks.Directory_EmptyState.mvc$view',
  'UBTConnect.Directory_OneSchoolGlobal_Blocks.OneSchoolGlobal_List.mvc$view',
  'Connect_CommunityBusiness_CS.model$UI_OneSchool_CardRec',
  'UBTConnect.referencesHealth',
  'UBTConnect.referencesHealth$Connect_CommunityBusiness_CS',
  'UBTConnect.model$UI_OneSchool_CardList',
  'Connect_Geography_CS.model$UI_LocalityTimezoneRec',
  'UBTConnect.referencesHealth$Connect_Geography_CS',
  'UBTConnectLibrary.model$ContainerOptionsRec',
  'UBTConnect.referencesHealth$UBTConnectLibrary',
  'UBTConnectLibrary.model$BackgroundOptionsRec',
  'UBTConnectLibrary.model$BackgroundImageRec',
  'UBTConnectLibrary.model$SpacingOptionsRec',
  'UBTConnectLibrary.model$BorderOptionsRec',
  'UBTConnectLibrary.model$RadiusOptionsRec',
  'UBTConnectLibrary.model$TextOptionsRec',
  'UBTConnectLibrary.model$DisplayOptionsRec',
  'UBTConnectLibrary.model$SizeOptionsRec',
  'Connect_CommunityBusiness_CS.model$UI_OneSchool_Card_ContentRec',
  'UBTConnect.model$UI_OneSchoolGlobal_ListCardList',
  'UBTConnect.controller$GetSkeletonList_UI_OneSchoolGlobal_ListCard',
], function (
  OutSystems,
  UBTConnectModel,
  UBTConnectController,
  Connect_CommunityBusiness_CSModel,
  Connect_Geography_CSModel,
  UBTConnectLibraryModel,
  React,
  OSView,
  UBTConnect_Directory_Locality_Locality_OneSchoolGlobal_mvc_model,
  UBTConnect_Directory_Locality_Locality_OneSchoolGlobal_mvc_controller,
  UBTConnectClientVariables,
  UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view,
  OSWidgets,
  UBTConnect_Directory_CommonBlocks_Directory_EmptyState_mvc_view,
  UBTConnect_Directory_OneSchoolGlobal_Blocks_OneSchoolGlobal_List_mvc_view,
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
    View.displayName = 'Directory_Locality.Locality_OneSchoolGlobal';
    View.getCssDependencies = function () {
      return ['css/OutSystemsReactWidgets.css'];
    };
    View.getJsDependencies = function () {
      return [];
    };
    View.getBlocks = function () {
      return [
        UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view,
        UBTConnect_Directory_CommonBlocks_Directory_EmptyState_mvc_view,
        UBTConnect_Directory_OneSchoolGlobal_Blocks_OneSchoolGlobal_List_mvc_view,
      ];
    };
    Object.defineProperty(View.prototype, 'modelFactory', {
      get: function () {
        return UBTConnect_Directory_Locality_Locality_OneSchoolGlobal_mvc_model;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(View.prototype, 'controllerFactory', {
      get: function () {
        return UBTConnect_Directory_Locality_Locality_OneSchoolGlobal_mvc_controller;
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
        React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
          inputs: {
            Options: model.getCachedValue(idService.getId('Block_OneSchoolGlobalListWrapper.Options'), function () {
              return (function () {
                var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                rec.backgroundAttr = (function () {
                  var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                  rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
                  return rec;
                })();
                rec.paddingSizeAttr = (function () {
                  var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                  rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
                  rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
                  return rec;
                })();
                return rec;
              })();
            }),
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
            name: 'Block_OneSchoolGlobalListWrapper',
            alias: '1',
          },
          _widgetRecordProvider: widgetsRecordProvider,
          placeholders: {
            content: new PlaceholderContent(function () {
              return [
                $if(
                  model.variables.out_OneSchoolGlobal_List2Var.isEmpty,
                  false,
                  this,
                  function () {
                    return [
                      React.createElement(UBTConnect_Directory_CommonBlocks_Directory_EmptyState_mvc_view, {
                        inputs: {
                          EntityTypeId: UBTConnectModel.staticEntities.connect_Entity.oneSchoolGlobal,
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
                          uuid: '1',
                          alias: '2',
                        },
                        _widgetRecordProvider: widgetsRecordProvider,
                        _dependencies: [],
                      }),
                    ];
                  },
                  function () {
                    return [
                      React.createElement(UBTConnect_Directory_OneSchoolGlobal_Blocks_OneSchoolGlobal_List_mvc_view, {
                        inputs: {
                          In_IsLoading: model.variables.get_OneSchoolGlobal_List_IsLoadingVar,
                          OneSchoolList: model.variables.out_OneSchoolGlobal_List2Var,
                        },
                        events: {
                          _handleError: function (ex) {
                            controller.handleError(ex);
                          },
                          event_OnClick$Action: function (event_OneSchoolGlobalIdIn) {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(
                              function () {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(
                                  eventHandlerContext.id,
                                  'Directory_OneSchoolGlobal_Blocks/OneSchoolGlobal_List Event_OnClick',
                                );
                                controller.event_OnClick$Action(
                                  event_OneSchoolGlobalIdIn,
                                  controller.callContext(eventHandlerContext),
                                );
                              },
                              function () {
                                controller.popDebuggerContext(eventHandlerContext);
                              },
                            );
                          },
                          event_OnClick_Bookmark$Action: function (isBookmarkedIn) {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(
                              function () {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(
                                  eventHandlerContext.id,
                                  'Directory_OneSchoolGlobal_Blocks/OneSchoolGlobal_List Event_OnClick_Bookmark',
                                );
                                controller.event_OnClick_Bookmark$Action(
                                  isBookmarkedIn,
                                  controller.callContext(eventHandlerContext),
                                );
                              },
                              function () {
                                controller.popDebuggerContext(eventHandlerContext);
                              },
                            );
                          },
                          event_ScrollEnding$Action: function () {
                            return Promise.resolve().then(function () {
                              var eventHandlerContext = callContext.clone();
                              return OS.Flow.tryFinally(
                                function () {
                                  var varBag = {};
                                  controller.pushDebuggerContext(eventHandlerContext);

                                  OutSystemsDebugger.setThreadStartName(
                                    eventHandlerContext.id,
                                    'Directory_OneSchoolGlobal_Blocks/OneSchoolGlobal_List Event_ScrollEnding',
                                  );
                                  return controller.handler_OnScrollEnding$Action(
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
                          uuid: '2',
                          alias: '3',
                        },
                        _widgetRecordProvider: widgetsRecordProvider,
                        _dependencies: [],
                      }),
                    ];
                  },
                ),
              ];
            }),
          },
          _dependencies: [
            asPrimitiveValue(model.variables.get_OneSchoolGlobal_List_IsLoadingVar),
            asPrimitiveValue(model.variables.out_OneSchoolGlobal_List2Var),
          ],
        }),
      );
    };
    return View;
  })(OSView.BaseView.BaseWebBlock);

  return View;
});
define('UBTConnect.Directory_Locality.Locality_OneSchoolGlobal.mvc$controller', [
  'OutSystems/ClientRuntime/Main',
  'UBTConnect.model',
  'UBTConnect.controller',
  'Connect_CommunityBusiness_CS.model',
  'Connect_Geography_CS.model',
  'UBTConnectLibrary.model',
  'UBTConnect.languageResources',
  'UBTConnect.clientVariables',
  'UBTConnect.Directory_Locality.Locality_OneSchoolGlobal.mvc$debugger',
  'UBTConnect.Directory_Locality.Locality_OneSchoolGlobal.mvc$controller.ScreenEvent_OnReady.IsViewRestoredFromCacheJS',
  'Connect_CommunityBusiness_CS.model$UI_OneSchool_CardRec',
  'UBTConnect.referencesHealth',
  'UBTConnect.referencesHealth$Connect_CommunityBusiness_CS',
  'UBTConnect.model$UI_OneSchool_CardList',
  'Connect_Geography_CS.model$UI_LocalityTimezoneRec',
  'UBTConnect.referencesHealth$Connect_Geography_CS',
  'UBTConnectLibrary.model$ContainerOptionsRec',
  'UBTConnect.referencesHealth$UBTConnectLibrary',
  'UBTConnectLibrary.model$BackgroundOptionsRec',
  'UBTConnectLibrary.model$BackgroundImageRec',
  'UBTConnectLibrary.model$SpacingOptionsRec',
  'UBTConnectLibrary.model$BorderOptionsRec',
  'UBTConnectLibrary.model$RadiusOptionsRec',
  'UBTConnectLibrary.model$TextOptionsRec',
  'UBTConnectLibrary.model$DisplayOptionsRec',
  'UBTConnectLibrary.model$SizeOptionsRec',
  'Connect_CommunityBusiness_CS.model$UI_OneSchool_Card_ContentRec',
  'UBTConnect.model$UI_OneSchoolGlobal_ListCardList',
  'UBTConnect.controller$GetSkeletonList_UI_OneSchoolGlobal_ListCard',
], function (
  OutSystems,
  UBTConnectModel,
  UBTConnectController,
  Connect_CommunityBusiness_CSModel,
  Connect_Geography_CSModel,
  UBTConnectLibraryModel,
  UBTConnectLanguageResources,
  UBTConnectClientVariables,
  UBTConnect_Directory_Locality_Locality_OneSchoolGlobal_mvc_Debugger,
  UBTConnect_Directory_Locality_Locality_OneSchoolGlobal_mvc_controller_ScreenEvent_OnReady_IsViewRestoredFromCacheJS,
) {
  var OS = OutSystems.Internal;
  var Controller = (function (_super) {
    __extends(Controller, _super);
    function Controller() {
      _super.apply(this, arguments);
      var controller = this.controller;
      this.clientActionProxies = {};
      this.dataFetchDependenciesOriginal = {
        get_OneSchoolGlobal_List$DataActRefresh: -1,
      };
      this.dataFetchDependentsGraph = {
        get_OneSchoolGlobal_List$DataActRefresh: [],
      };
      this.shouldSendClientVarsToDataSources = false;
    }
    // Server Actions

    // Aggregates and Data Actions
    Controller.prototype.get_OneSchoolGlobal_List$DataActRefresh = function (callContext) {
      var model = this.model;
      var controller = this.controller;
      var callContext = controller.callContext(callContext);
      return OS.Flow.tryFinally(
        function () {
          var varBag = {};
          controller.pushDebuggerContext(callContext);

          OutSystemsDebugger.push(
            'ZK4RCP5OdEuntYI2VRpwBA:+B45G+v4iEmCbURusIK3Zg:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.0ESKOpanIEG_YI6v7_v62Q/DataActions.+B45G+v4iEmCbURusIK3Zg:zLJl3g06vIgeeyN3SDtUvw',
            'UBTConnect',
            'Get_OneSchoolGlobal_List',
            'NRFlows.DataScreenActionFlow',
            callContext.id,
            varBag,
          );
          OutSystemsDebugger.setThreadStartName(
            callContext.id,
            'Directory_Locality/Locality_OneSchoolGlobal/Get_OneSchoolGlobal_List',
          );
          return controller
            .callDataAction(
              'DataActionGet_OneSchoolGlobal_List',
              'screenservices/UBTConnect/Directory_Locality/Locality_OneSchoolGlobal/DataActionGet_OneSchoolGlobal_List',
              '9B7hmdYO9rsGL1Zk2Si2_w',
              function (b) {
                model.variables.get_OneSchoolGlobal_ListDataAct.dataFetchStatusAttr = b;
              },
              function (json) {
                model.variables.get_OneSchoolGlobal_ListDataAct.replaceWith(
                  OS.DataConversion.ServerDataConverter.from(
                    json,
                    model.variables.get_OneSchoolGlobal_ListDataAct.constructor,
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
                'Directory_Locality/Locality_OneSchoolGlobal/Get_OneSchoolGlobal_List On After Fetch',
              );
              controller._onAfterFetch_Get_OneSchoolGlobal_List$Action(controller.callContext(callContext));
            });
        },
        function () {
          OutSystemsDebugger.pop('ZK4RCP5OdEuntYI2VRpwBA:+B45G+v4iEmCbURusIK3Zg', callContext.id);
          controller.popDebuggerContext(callContext);
        },
      );
    };

    Controller.prototype.dataFetchActionNames = ['get_OneSchoolGlobal_List$DataActRefresh'];
    // Client Actions
    Controller.prototype._handler_OnScrollEnding$Action = function (callContext) {
      var varBag = {};
      var model = this.model;
      var controller = this.controller;
      var idService = this.idService;
      varBag.model = model;
      varBag.idService = idService;
      controller.ensureControllerAlive('Handler_OnScrollEnding');
      callContext = controller.callContext(callContext);
      varBag.callContext = callContext;
      OutSystemsDebugger.push(
        'ZK4RCP5OdEuntYI2VRpwBA:ZKAeEXKQOEySMXca8c72xw:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.0ESKOpanIEG_YI6v7_v62Q/ClientActions.ZKAeEXKQOEySMXca8c72xw:OO7SsQhN_B+4vNGbspnvgg',
        'UBTConnect',
        'Handler_OnScrollEnding',
        'NRFlows.ClientScreenActionFlow',
        callContext.id,
        varBag,
      );
      OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:vQ0s0J_QRESNfH9eVJgcOQ', callContext.id);
      return OS.Flow.executeAsyncFlow(function () {
        // Is Data Fetched?
        return OS.Flow.executeSequence(function () {
          if (
            OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:AaVyRFFV7EOw_r8NDa9Lqw', callContext.id) &&
            model.variables.get_OneSchoolGlobal_ListDataAct.isDataFetchedAttr
          ) {
            // Needs another call?
            return OS.Flow.executeSequence(function () {
              if (
                OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:4PWwhzQzo0SbilHv8afXQw', callContext.id) &&
                model.variables.get_OneSchoolGlobal_ListDataAct.out_OneSchoolGlobal_ListOut.length >=
                  model.variables.getOneSchoolGlobal_List_OffsetVar
              ) {
                // MaxRecords += IncrementRecords
                OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:DWuQSTEKPk+OhasIc9mUxg', callContext.id);
                // GetOneSchoolGlobal_List_StartIndex = GetOneSchoolGlobal_List_StartIndex + GetOneSchoolGlobal_List_Offset
                model.variables.getOneSchoolGlobal_List_StartIndexVar =
                  model.variables.getOneSchoolGlobal_List_StartIndexVar +
                  model.variables.getOneSchoolGlobal_List_OffsetVar;
                OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:0CRhrXOqnUOLE9pa6seCxA', callContext.id);
                // Refresh Query: Get_OneSchoolGlobal_List
                var result = controller.get_OneSchoolGlobal_List$DataActRefresh(callContext);
                model.flush();
                return result.then(function () {
                  OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:7xa0tl_Ie0uGAY5f1TnbFw', callContext.id);
                });
              } else {
                OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:Z8MlsFbX+UKEBQJ1S1HdJg', callContext.id);
              }
            });
          } else {
            OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:tEm2Tof4+kGt8K21SDTQ8g', callContext.id);
          }
        });
      })
        .then(function (res) {
          OutSystemsDebugger.pop('ZK4RCP5OdEuntYI2VRpwBA:ZKAeEXKQOEySMXca8c72xw', callContext.id);
          return res;
        })
        .catch(function (ex) {
          OutSystemsDebugger.handleException(ex, callContext.id);
          OutSystemsDebugger.pop('ZK4RCP5OdEuntYI2VRpwBA:ZKAeEXKQOEySMXca8c72xw', callContext.id);
          throw ex;
        });
    };
    Controller.prototype._onAfterFetch_Get_OneSchoolGlobal_List$Action = function (callContext) {
      var varBag = {};
      var model = this.model;
      var controller = this.controller;
      var idService = this.idService;
      varBag.model = model;
      varBag.idService = idService;
      controller.ensureControllerAlive('OnAfterFetch_Get_OneSchoolGlobal_List');
      callContext = controller.callContext(callContext);
      varBag.callContext = callContext;
      try {
        OutSystemsDebugger.push(
          'ZK4RCP5OdEuntYI2VRpwBA:x2wWLO2OL0uJFX4Ie2jXmA:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.0ESKOpanIEG_YI6v7_v62Q/ClientActions.x2wWLO2OL0uJFX4Ie2jXmA:eKlIfCns3CFV9TWM4aMQFQ',
          'UBTConnect',
          'OnAfterFetch_Get_OneSchoolGlobal_List',
          'NRFlows.ClientScreenActionFlow',
          callContext.id,
          varBag,
        );
        OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:2wDQ+bZVHEy5Orfcqhog4w', callContext.id);
        // Is Loading?
        if (
          OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:R44SaL+LBkWdPeoHg1WVUw', callContext.id) &&
          model.variables.get_OneSchoolGlobal_List_IsLoadingVar
        ) {
          OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:m7_mmm_DGkmyc+K3PTJjFg', callContext.id);
          // Execute Action: ListClear
          OS.SystemActions.listClear(model.variables.out_OneSchoolGlobal_List2Var, callContext);
          // Set IsLoading to False
          OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:JRsYidwHikG8n2Gvmf5Q9w', callContext.id);
          // Get_OneSchoolGlobal_List_IsLoading = False
          model.variables.get_OneSchoolGlobal_List_IsLoadingVar = false;
        }

        OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:JULd_YCsD0Gv+eP4u_qbqA', callContext.id);
        // Execute Action: ListAppendAll
        OS.SystemActions.listAppendAll(
          model.variables.out_OneSchoolGlobal_List2Var,
          model.variables.get_OneSchoolGlobal_ListDataAct.out_OneSchoolGlobal_ListOut,
          callContext,
        );
        OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:fYYa6KoZfUi1MCQO9wAYlA', callContext.id);
      } catch (ex) {
        OutSystemsDebugger.handleException(ex, callContext.id);
        throw ex;
      } finally {
        OutSystemsDebugger.pop('ZK4RCP5OdEuntYI2VRpwBA:x2wWLO2OL0uJFX4Ie2jXmA', callContext.id);
      }
    };
    Controller.prototype._screenEvent_OnReady$Action = function (callContext) {
      var varBag = {};
      var model = this.model;
      var controller = this.controller;
      var idService = this.idService;
      varBag.model = model;
      varBag.idService = idService;
      controller.ensureControllerAlive('ScreenEvent_OnReady');
      callContext = controller.callContext(callContext);
      var getSkeletonList_UI_OneSchoolGlobal_ListCardVar = new OS.DataTypes.VariableHolder();
      var isViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
      varBag.callContext = callContext;
      varBag.getSkeletonList_UI_OneSchoolGlobal_ListCardVar = getSkeletonList_UI_OneSchoolGlobal_ListCardVar;
      varBag.isViewRestoredFromCacheJSResult = isViewRestoredFromCacheJSResult;
      OutSystemsDebugger.push(
        'ZK4RCP5OdEuntYI2VRpwBA:hOpwaZMhUUCzalUreiWNcg:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.0ESKOpanIEG_YI6v7_v62Q/ClientActions.hOpwaZMhUUCzalUreiWNcg:Le3X+9n4MmYcitqB9RCPAw',
        'UBTConnect',
        'ScreenEvent_OnReady',
        'NRFlows.ClientScreenActionFlow',
        callContext.id,
        varBag,
      );
      OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:Ufq0Y2Mk3EeGvMmnr3VKGg', callContext.id);
      return OS.Flow.executeAsyncFlow(function () {
        OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:3qEljcRPoke8IKScJ5VJFg', callContext.id);
        isViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(
          UBTConnect_Directory_Locality_Locality_OneSchoolGlobal_mvc_controller_ScreenEvent_OnReady_IsViewRestoredFromCacheJS,
          'IsViewRestoredFromCache',
          'ScreenEvent_OnReady',
          {
            IsRestoredFromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
          },
          function ($parameters) {
            var jsNodeResult = new (controller.constructor.getVariableGroupType(
              'UBTConnect.Directory_Locality.Locality_OneSchoolGlobal.ScreenEvent_OnReady$isViewRestoredFromCacheJSResult',
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
            OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:wYv1utwB8EeN38zAgj5upg', callContext.id) &&
            isViewRestoredFromCacheJSResult.value.isRestoredFromCacheOut === true
          ) {
            OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:fd+3pEryR0uNh1_u7RsAww', callContext.id);
          } else {
            OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:igfah8_aRUC6MLLnexcQvg', callContext.id);
            // Execute Action: GetSkeletonList_UI_OneSchoolGlobal_ListCard
            getSkeletonList_UI_OneSchoolGlobal_ListCardVar.value =
              UBTConnectController.default.getSkeletonList_UI_OneSchoolGlobal_ListCard$Action(3, callContext);

            // Set Skeleton UI
            OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:JYUbNSxqzk2dB7AaZSkqOQ', callContext.id);
            // Out_OneSchoolGlobal_List2 = GetSkeletonList_UI_OneSchoolGlobal_ListCard.Out_OneSchoolGlobal_List
            model.variables.out_OneSchoolGlobal_List2Var =
              getSkeletonList_UI_OneSchoolGlobal_ListCardVar.value.out_OneSchoolGlobal_ListOut;
            OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:FiYNH6zaP0S6Mvn83Eb7DQ', callContext.id);
            // Refresh Query: Get_OneSchoolGlobal_List
            var result = controller.get_OneSchoolGlobal_List$DataActRefresh(callContext);
            model.flush();
            return result.then(function () {
              OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:noky9FUXZE6vR92xtB_AwA', callContext.id);
            });
          }
        });
      })
        .then(function (res) {
          OutSystemsDebugger.pop('ZK4RCP5OdEuntYI2VRpwBA:hOpwaZMhUUCzalUreiWNcg', callContext.id);
          return res;
        })
        .catch(function (ex) {
          OutSystemsDebugger.handleException(ex, callContext.id);
          OutSystemsDebugger.pop('ZK4RCP5OdEuntYI2VRpwBA:hOpwaZMhUUCzalUreiWNcg', callContext.id);
          throw ex;
        });
    };
    Controller.registerVariableGroupType(
      'UBTConnect.Directory_Locality.Locality_OneSchoolGlobal.ScreenEvent_OnReady$isViewRestoredFromCacheJSResult',
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

    Controller.prototype.handler_OnScrollEnding$Action = function (callContext) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(controller._handler_OnScrollEnding$Action, callContext);
    };
    Controller.prototype.onAfterFetch_Get_OneSchoolGlobal_List$Action = function (callContext) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(controller._onAfterFetch_Get_OneSchoolGlobal_List$Action, callContext);
    };
    Controller.prototype.screenEvent_OnReady$Action = function (callContext) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(controller._screenEvent_OnReady$Action, callContext);
    };
    Controller.prototype.event_OnClick_Bookmark$Action = function () {
      return Promise.resolve();
    };
    Controller.prototype.event_OnClick$Action = function () {
      return Promise.resolve();
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
        'ZK4RCP5OdEuntYI2VRpwBA:0ESKOpanIEG_YI6v7_v62Q:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.0ESKOpanIEG_YI6v7_v62Q:9OLtKIU0voE81TOtLrIg9A',
        'UBTConnect',
        'Locality_OneSchoolGlobal',
        'NRNodes.WebBlock',
        callContext.id,
        varBag,
      );
    };
    Controller.prototype.popDebuggerContext = function (callContext) {
      OutSystemsDebugger.pop('ZK4RCP5OdEuntYI2VRpwBA:0ESKOpanIEG_YI6v7_v62Q', callContext.id);
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

          OutSystemsDebugger.setThreadStartName(callContext.id, 'Directory_Locality/Locality_OneSchoolGlobal On Ready');
          return controller.screenEvent_OnReady$Action(callContext);
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
define('UBTConnect.Directory_Locality.Locality_OneSchoolGlobal.mvc$controller.ScreenEvent_OnReady.IsViewRestoredFromCacheJS', [], function () {
  return function ($parameters, $actions, $roles, $public) {
    $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache();
  };
});

define('UBTConnect.Directory_Locality.Locality_OneSchoolGlobal.mvc$debugger', [
  'exports',
  'OutSystems/ClientRuntime/Debugger',
  'OutSystems/ClientRuntime/Main',
], function (exports, Debugger, OutSystems) {
  var OS = OutSystems.Internal;
  var metaInfo = {
    igfah8_aRUC6MLLnexcQvg: {
      getter: function (varBag, idService) {
        return varBag.getSkeletonList_UI_OneSchoolGlobal_ListCardVar.value;
      },
    },
    '3qEljcRPoke8IKScJ5VJFg': {
      getter: function (varBag, idService) {
        return varBag.isViewRestoredFromCacheJSResult.value;
      },
    },
    M4bRehBiH02vHgUZYsKwyw: {
      getter: function (varBag, idService) {
        return varBag.model.variables.getOneSchoolGlobal_List_StartIndexVar;
      },
      dataType: OS.DataTypes.DataTypes.Integer,
    },
    Dub66b0S70e8axVfep50Xw: {
      getter: function (varBag, idService) {
        return varBag.model.variables.getOneSchoolGlobal_List_OffsetVar;
      },
      dataType: OS.DataTypes.DataTypes.Integer,
    },
    QgVOz0tza0yHThDR_OKL8w: {
      getter: function (varBag, idService) {
        return varBag.model.variables.get_OneSchoolGlobal_List_IsLoadingVar;
      },
      dataType: OS.DataTypes.DataTypes.Boolean,
    },
    'KYGVLhMuwkeoIP5H1+Xq8g': {
      getter: function (varBag, idService) {
        return varBag.model.variables.out_OneSchoolGlobal_List2Var;
      },
    },
    '1bkZp5YtL0albS1NcAAIbA': {
      getter: function (varBag, idService) {
        return varBag.model.variables.in_LocalityIdIn;
      },
      dataType: OS.DataTypes.DataTypes.LongInteger,
    },
    O_wkJs6RP0GcLoQLyoqiag: {
      getter: function (varBag, idService) {
        return varBag.model.variables.in_LocalityTimezoneDataIn;
      },
    },
    '+B45G+v4iEmCbURusIK3Zg': {
      getter: function (varBag, idService) {
        return varBag.model.variables.get_OneSchoolGlobal_ListDataAct;
      },
    },
    '+GOnjr5+VkqY_lkB4nrCvg': {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId('Block_OneSchoolGlobalListWrapper'));
        })(varBag.model, idService);
      },
    },
    MI1d57dItEyOhdSsPgsyjw: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId('Content'));
        })(varBag.model, idService);
      },
    },
    XC_TSC9lvUGaaVbwyaTp8w: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId('If_IsListEmpty'));
        })(varBag.model, idService);
      },
    },
  };
  OutSystemsDebugger.registerMetaInfo(metaInfo);
});
