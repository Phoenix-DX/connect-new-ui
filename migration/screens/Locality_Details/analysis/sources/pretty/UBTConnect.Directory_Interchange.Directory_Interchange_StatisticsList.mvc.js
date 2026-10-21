define('UBTConnect.Directory_Interchange.Directory_Interchange_StatisticsList.mvc$model', [
  'OutSystems/ClientRuntime/Main',
  'UBTConnect.model',
  'Connect_Subdivision_CS.model',
  'UBTConnectLibrary.model',
  'UBTConnect_Utils.model',
  'UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model',
  'UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model',
  'UBTConnectLibrary.ConnectCorePatterns.Statistics_ListItem.mvc$model',
  'UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc$model',
  'UBTConnect.Directory_CommonBlocks.Directory_EmptyState.mvc$model',
  'Connect_Subdivision_CS.model$UI_InterchangeRec',
  'UBTConnect.referencesHealth',
  'UBTConnect.referencesHealth$Connect_Subdivision_CS',
  'UBTConnect.model$UI_InterchangeList',
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
  'UBTConnectLibrary.model$StatisticsOptionsRec',
  'UBTConnect.model$TextTextUBT_ColorIdentifierUBT_Icons2IdentifierRecordList',
  'UBTConnect_Utils.model$ContactPopUp_OverrideOptionsRec',
  'UBTConnect.referencesHealth$UBTConnect_Utils',
  'UBTConnectLibrary.model$ActionsMenuEnableOptionsRec',
], function (
  OutSystems,
  UBTConnectModel,
  Connect_Subdivision_CSModel,
  UBTConnectLibraryModel,
  UBTConnect_UtilsModel,
  UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel,
  UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel,
  UBTConnectLibrary_ConnectCorePatterns_Statistics_ListItem_mvcModel,
  UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvcModel,
  UBTConnect_Directory_CommonBlocks_Directory_EmptyState_mvcModel,
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
          'In_IsLoading',
          'in_IsLoadingIn',
          'In_IsLoading',
          true,
          false,
          OS.DataTypes.DataTypes.Boolean,
          function () {
            return false;
          },
          false,
        ),
        this.attr(
          '_in_IsLoadingInDataFetchStatus',
          '_in_IsLoadingInDataFetchStatus',
          '_in_IsLoadingInDataFetchStatus',
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return /*Fetched*/ 1;
          },
          false,
        ),
        this.attr(
          'In_ShowSubtitle',
          'in_ShowSubtitleIn',
          'In_ShowSubtitle',
          true,
          false,
          OS.DataTypes.DataTypes.Boolean,
          function () {
            return false;
          },
          false,
        ),
        this.attr(
          '_in_ShowSubtitleInDataFetchStatus',
          '_in_ShowSubtitleInDataFetchStatus',
          '_in_ShowSubtitleInDataFetchStatus',
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return /*Fetched*/ 1;
          },
          false,
        ),
        this.attr(
          'In_HighlightWords',
          'in_HighlightWordsIn',
          'In_HighlightWords',
          true,
          false,
          OS.DataTypes.DataTypes.Text,
          function () {
            return '';
          },
          false,
        ),
        this.attr(
          '_in_HighlightWordsInDataFetchStatus',
          '_in_HighlightWordsInDataFetchStatus',
          '_in_HighlightWordsInDataFetchStatus',
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return /*Fetched*/ 1;
          },
          false,
        ),
        this.attr(
          'In_InterchangeList',
          'in_InterchangeListIn',
          'In_InterchangeList',
          true,
          false,
          OS.DataTypes.DataTypes.RecordList,
          function () {
            return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_InterchangeList());
          },
          false,
          UBTConnectModel.UI_InterchangeList,
        ),
        this.attr(
          '_in_InterchangeListInDataFetchStatus',
          '_in_InterchangeListInDataFetchStatus',
          '_in_InterchangeListInDataFetchStatus',
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
    Object.defineProperty(Model, 'hasValidationWidgets', {
      enumerable: true,
      configurable: true,
      get: function () {
        if (Model._hasValidationWidgetsValue === undefined) {
          Model._hasValidationWidgetsValue =
            UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets ||
            UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets ||
            UBTConnectLibrary_ConnectCorePatterns_Statistics_ListItem_mvcModel.hasValidationWidgets ||
            UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvcModel.hasValidationWidgets ||
            UBTConnect_Directory_CommonBlocks_Directory_EmptyState_mvcModel.hasValidationWidgets;
        }

        return Model._hasValidationWidgetsValue;
      },
    });

    Model.prototype.setInputs = function (inputs) {
      if ('In_IsLoading' in inputs) {
        this.variables.in_IsLoadingIn = inputs.In_IsLoading;
        if ('_in_IsLoadingInDataFetchStatus' in inputs) {
          this.variables._in_IsLoadingInDataFetchStatus = inputs._in_IsLoadingInDataFetchStatus;
        }
      }

      if ('In_ShowSubtitle' in inputs) {
        this.variables.in_ShowSubtitleIn = inputs.In_ShowSubtitle;
        if ('_in_ShowSubtitleInDataFetchStatus' in inputs) {
          this.variables._in_ShowSubtitleInDataFetchStatus = inputs._in_ShowSubtitleInDataFetchStatus;
        }
      }

      if ('In_HighlightWords' in inputs) {
        this.variables.in_HighlightWordsIn = inputs.In_HighlightWords;
        if ('_in_HighlightWordsInDataFetchStatus' in inputs) {
          this.variables._in_HighlightWordsInDataFetchStatus = inputs._in_HighlightWordsInDataFetchStatus;
        }
      }

      if ('In_InterchangeList' in inputs) {
        this.variables.in_InterchangeListIn = inputs.In_InterchangeList;
        if ('_in_InterchangeListInDataFetchStatus' in inputs) {
          this.variables._in_InterchangeListInDataFetchStatus = inputs._in_InterchangeListInDataFetchStatus;
        }
      }
    };
    return Model;
  })(OS.Model.BaseViewModel);
  return new OS.Model.ModelFactory(Model, 'Directory_Interchange.Directory_Interchange_StatisticsList');
});
define('UBTConnect.Directory_Interchange.Directory_Interchange_StatisticsList.mvc$view', [
  'OutSystems/ClientRuntime/Main',
  'UBTConnect.model',
  'UBTConnect.controller',
  'Connect_Subdivision_CS.model',
  'UBTConnectLibrary.model',
  'UBTConnect_Utils.model',
  'react',
  'OutSystems/ReactView/Main',
  'UBTConnect.Directory_Interchange.Directory_Interchange_StatisticsList.mvc$model',
  'UBTConnect.Directory_Interchange.Directory_Interchange_StatisticsList.mvc$controller',
  'UBTConnect.clientVariables',
  'UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view',
  'OutSystems/ReactWidgets/Main',
  'UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view',
  'UBTConnectLibrary.ConnectCorePatterns.Statistics_ListItem.mvc$view',
  'UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc$view',
  'UBTConnect.Directory_CommonBlocks.Directory_EmptyState.mvc$view',
  'Connect_Subdivision_CS.model$UI_InterchangeRec',
  'UBTConnect.referencesHealth',
  'UBTConnect.referencesHealth$Connect_Subdivision_CS',
  'UBTConnect.model$UI_InterchangeList',
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
  'UBTConnectLibrary.model$StatisticsOptionsRec',
  'UBTConnect.model$TextTextUBT_ColorIdentifierUBT_Icons2IdentifierRecordList',
  'UBTConnect_Utils.model$ContactPopUp_OverrideOptionsRec',
  'UBTConnect.referencesHealth$UBTConnect_Utils',
  'UBTConnectLibrary.model$ActionsMenuEnableOptionsRec',
], function (
  OutSystems,
  UBTConnectModel,
  UBTConnectController,
  Connect_Subdivision_CSModel,
  UBTConnectLibraryModel,
  UBTConnect_UtilsModel,
  React,
  OSView,
  UBTConnect_Directory_Interchange_Directory_Interchange_StatisticsList_mvc_model,
  UBTConnect_Directory_Interchange_Directory_Interchange_StatisticsList_mvc_controller,
  UBTConnectClientVariables,
  UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view,
  OSWidgets,
  UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view,
  UBTConnectLibrary_ConnectCorePatterns_Statistics_ListItem_mvc_view,
  UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvc_view,
  UBTConnect_Directory_CommonBlocks_Directory_EmptyState_mvc_view,
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
    View.displayName = 'Directory_Interchange.Directory_Interchange_StatisticsList';
    View.getCssDependencies = function () {
      return ['css/OutSystemsReactWidgets.css'];
    };
    View.getJsDependencies = function () {
      return [];
    };
    View.getBlocks = function () {
      return [
        UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view,
        UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view,
        UBTConnectLibrary_ConnectCorePatterns_Statistics_ListItem_mvc_view,
        UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvc_view,
        UBTConnect_Directory_CommonBlocks_Directory_EmptyState_mvc_view,
      ];
    };
    Object.defineProperty(View.prototype, 'modelFactory', {
      get: function () {
        return UBTConnect_Directory_Interchange_Directory_Interchange_StatisticsList_mvc_model;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(View.prototype, 'controllerFactory', {
      get: function () {
        return UBTConnect_Directory_Interchange_Directory_Interchange_StatisticsList_mvc_controller;
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
            Options: model.getCachedValue(idService.getId('T04BLi5mDkW1K76CS62rkw.Options'), function () {
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
            uuid: '0',
            alias: '1',
          },
          _widgetRecordProvider: widgetsRecordProvider,
          placeholders: {
            content: new PlaceholderContent(function () {
              return [
                React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                  inputs: {
                    In_IsLoading: model.variables.in_IsLoadingIn,
                    _in_IsLoadingInDataFetchStatus: OS.Model.calculateDataFetchStatus(
                      model.variables._in_IsLoadingInDataFetchStatus,
                    ),
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
                  placeholders: {
                    placeholder_LoadingSection: new PlaceholderContent(function () {
                      return [
                        React.createElement(OSWidgets.List, {
                          animateItems: true,
                          gridProperties: {
                            classes: 'OSFillParent',
                          },
                          mode: /*Default*/ 0,
                          source: model.variables.in_InterchangeListIn,
                          style: 'list list-group list--gap-s',
                          tag: 'div',
                          _idProps: {
                            service: idService,
                            uuid: '2',
                          },
                          _widgetRecordProvider: widgetsRecordProvider,
                          source_dataFetchStatus: OS.Model.calculateDataFetchStatus(
                            model.variables._in_InterchangeListInDataFetchStatus,
                          ),
                          placeholders: {
                            content: new IteratorPlaceholderContent(
                              function (idService, callContext) {
                                return [
                                  React.createElement(
                                    UBTConnectLibrary_ConnectCorePatterns_Statistics_ListItem_mvc_view,
                                    {
                                      inputs: {
                                        In_HasActionsMenu: true,
                                        In_HighlightWords: model.variables.in_HighlightWordsIn,
                                        _in_HighlightWordsInDataFetchStatus: OS.Model.calculateDataFetchStatus(
                                          model.variables._in_HighlightWordsInDataFetchStatus,
                                        ),
                                        In_ExtendedClasses: model.getCachedValue(
                                          idService.getId('QzDjBT+wikWaIlZXP5rEXA.In_ExtendedClasses'),
                                          function () {
                                            return model.variables.in_InterchangeListIn.getCurrent(
                                              callContext.iterationContext,
                                            ).isBookmarkedAttr
                                              ? 'ubt-statistics-item__bookmarked'
                                              : '';
                                          },
                                          function () {
                                            return model.variables.in_InterchangeListIn.getCurrent(
                                              callContext.iterationContext,
                                            ).isBookmarkedAttr;
                                          },
                                        ),
                                        _in_ExtendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(
                                          model.variables._in_InterchangeListInDataFetchStatus,
                                        ),
                                        In_StatisticsOptions: model.variables.in_InterchangeListIn.getCurrent(
                                          callContext.iterationContext,
                                        ).interchangeStatisticsAttr,
                                        _in_StatisticsOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(
                                          model.variables._in_InterchangeListInDataFetchStatus,
                                        ),
                                        In_ShowSubtitle: model.variables.in_ShowSubtitleIn,
                                        _in_ShowSubtitleInDataFetchStatus: OS.Model.calculateDataFetchStatus(
                                          model.variables._in_ShowSubtitleInDataFetchStatus,
                                        ),
                                      },
                                      events: {
                                        _handleError: function (ex) {
                                          controller.handleError(ex);
                                        },
                                        event_Clicked$Action: function () {
                                          return Promise.resolve().then(function () {
                                            var eventHandlerContext = callContext.clone();
                                            return OS.Flow.tryFinally(
                                              function () {
                                                var varBag = {};
                                                controller.pushDebuggerContext(eventHandlerContext);

                                                OutSystemsDebugger.setThreadStartName(
                                                  eventHandlerContext.id,
                                                  'ConnectCorePatterns/Statistics_ListItem Event_Clicked',
                                                );
                                                return controller.handler_Clicked$Action(
                                                  model.variables.in_InterchangeListIn.getCurrent(
                                                    callContext.iterationContext,
                                                  ).interchangeLocalityIdAttr,
                                                  model.variables.in_InterchangeListIn.getCurrent(
                                                    callContext.iterationContext,
                                                  ).interchangeCountryNameAttr,
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
                                        uuid: '3',
                                        alias: '3',
                                      },
                                      _widgetRecordProvider: widgetsRecordProvider,
                                      placeholders: {
                                        actionsMenu: new PlaceholderContent(function () {
                                          return [
                                            React.createElement(
                                              UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvc_view,
                                              {
                                                inputs: {
                                                  EntityType: UBTConnectModel.staticEntities.connect_Entity.interchange,
                                                  EntityId: model.variables.in_InterchangeListIn.getCurrent(
                                                    callContext.iterationContext,
                                                  ).interchangeLocalityIdAttr,
                                                  _entityIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(
                                                    model.variables._in_InterchangeListInDataFetchStatus,
                                                  ),
                                                  IsEnabled: true,
                                                  EnableOptions: model.getCachedValue(
                                                    idService.getId('JHfiHwrJU02BdHwccv6jDA.EnableOptions'),
                                                    function () {
                                                      return (function () {
                                                        var rec =
                                                          new UBTConnectLibraryModel.ActionsMenuEnableOptionsRec();
                                                        rec.enableBookmarkAttr = true;
                                                        rec.enableNotesAttr = true;
                                                        return rec;
                                                      })();
                                                    },
                                                  ),
                                                  ContactPopUp_OverrideOptions: model.getCachedValue(
                                                    idService.getId(
                                                      'JHfiHwrJU02BdHwccv6jDA.ContactPopUp_OverrideOptions',
                                                    ),
                                                    function () {
                                                      return (function () {
                                                        var rec =
                                                          new UBTConnect_UtilsModel.ContactPopUp_OverrideOptionsRec();
                                                        rec.nameAttr = model.variables.in_InterchangeListIn.getCurrent(
                                                          callContext.iterationContext,
                                                        ).interchangeStatisticsAttr.titleAttr;
                                                        return rec;
                                                      })();
                                                    },
                                                    function () {
                                                      return model.variables.in_InterchangeListIn.getCurrent(
                                                        callContext.iterationContext,
                                                      ).interchangeStatisticsAttr.titleAttr;
                                                    },
                                                  ),
                                                  _contactPopUp_OverrideOptionsInDataFetchStatus:
                                                    OS.Model.calculateDataFetchStatus(
                                                      model.variables._in_InterchangeListInDataFetchStatus,
                                                    ),
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
                                                  uuid: '4',
                                                  alias: '4',
                                                },
                                                _widgetRecordProvider: widgetsRecordProvider,
                                                _dependencies: [],
                                              },
                                            ),
                                          ];
                                        }),
                                      },
                                      _dependencies: [
                                        asPrimitiveValue(model.variables._in_InterchangeListInDataFetchStatus),
                                        asPrimitiveValue(
                                          model.variables.in_InterchangeListIn.getCurrent(callContext.iterationContext)
                                            .interchangeStatisticsAttr.titleAttr,
                                        ),
                                        asPrimitiveValue(
                                          model.variables.in_InterchangeListIn.getCurrent(callContext.iterationContext)
                                            .interchangeLocalityIdAttr,
                                        ),
                                      ],
                                    },
                                  ),
                                ];
                              },
                              callContext,
                              idService,
                              '1',
                            ),
                          },
                          _dependencies: [
                            asPrimitiveValue(model.variables.in_ShowSubtitleIn),
                            asPrimitiveValue(model.variables._in_ShowSubtitleInDataFetchStatus),
                            asPrimitiveValue(model.variables._in_InterchangeListInDataFetchStatus),
                            asPrimitiveValue(model.variables._in_HighlightWordsInDataFetchStatus),
                            asPrimitiveValue(model.variables.in_HighlightWordsIn),
                          ],
                        }),
                      ];
                    }),
                  },
                  _dependencies: [
                    asPrimitiveValue(model.variables.in_ShowSubtitleIn),
                    asPrimitiveValue(model.variables.in_HighlightWordsIn),
                    asPrimitiveValue(model.variables._in_ShowSubtitleInDataFetchStatus),
                    asPrimitiveValue(model.variables._in_HighlightWordsInDataFetchStatus),
                    asPrimitiveValue(model.variables._in_InterchangeListInDataFetchStatus),
                    asPrimitiveValue(model.variables.in_InterchangeListIn),
                  ],
                }),
                $if(
                  model.variables.in_InterchangeListIn.isEmpty && !model.variables.in_IsLoadingIn,
                  false,
                  this,
                  function () {
                    return [
                      React.createElement(UBTConnect_Directory_CommonBlocks_Directory_EmptyState_mvc_view, {
                        inputs: {
                          EntityTypeId: UBTConnectModel.staticEntities.connect_Entity.interchange,
                          Location: 'in this locality',
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
                          uuid: '5',
                          alias: '5',
                        },
                        _widgetRecordProvider: widgetsRecordProvider,
                        _dependencies: [],
                      }),
                    ];
                  },
                  function () {
                    return [];
                  },
                ),
              ];
            }),
          },
          _dependencies: [
            asPrimitiveValue(model.variables.in_ShowSubtitleIn),
            asPrimitiveValue(model.variables.in_HighlightWordsIn),
            asPrimitiveValue(model.variables.in_InterchangeListIn),
            asPrimitiveValue(model.variables._in_ShowSubtitleInDataFetchStatus),
            asPrimitiveValue(model.variables._in_HighlightWordsInDataFetchStatus),
            asPrimitiveValue(model.variables._in_InterchangeListInDataFetchStatus),
            asPrimitiveValue(model.variables._in_IsLoadingInDataFetchStatus),
            asPrimitiveValue(model.variables.in_IsLoadingIn),
          ],
        }),
      );
    };
    return View;
  })(OSView.BaseView.BaseWebBlock);

  return View;
});
define('UBTConnect.Directory_Interchange.Directory_Interchange_StatisticsList.mvc$controller', [
  'OutSystems/ClientRuntime/Main',
  'UBTConnect.model',
  'UBTConnect.controller',
  'Connect_Subdivision_CS.model',
  'UBTConnectLibrary.model',
  'UBTConnect_Utils.model',
  'UBTConnect.languageResources',
  'UBTConnect.clientVariables',
  'UBTConnect.Directory_Interchange.Directory_Interchange_StatisticsList.mvc$debugger',
  'Connect_Subdivision_CS.model$UI_InterchangeRec',
  'UBTConnect.referencesHealth',
  'UBTConnect.referencesHealth$Connect_Subdivision_CS',
  'UBTConnect.model$UI_InterchangeList',
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
  'UBTConnectLibrary.model$StatisticsOptionsRec',
  'UBTConnect.model$TextTextUBT_ColorIdentifierUBT_Icons2IdentifierRecordList',
  'UBTConnect_Utils.model$ContactPopUp_OverrideOptionsRec',
  'UBTConnect.referencesHealth$UBTConnect_Utils',
  'UBTConnectLibrary.model$ActionsMenuEnableOptionsRec',
], function (
  OutSystems,
  UBTConnectModel,
  UBTConnectController,
  Connect_Subdivision_CSModel,
  UBTConnectLibraryModel,
  UBTConnect_UtilsModel,
  UBTConnectLanguageResources,
  UBTConnectClientVariables,
  UBTConnect_Directory_Interchange_Directory_Interchange_StatisticsList_mvc_Debugger,
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
    Controller.prototype._handler_Clicked$Action = function (
      interchangeLocalityIdIn,
      interchangeCountryNameIn,
      callContext,
    ) {
      var varBag = {};
      var model = this.model;
      var controller = this.controller;
      var idService = this.idService;
      varBag.model = model;
      varBag.idService = idService;
      controller.ensureControllerAlive('Handler_Clicked');
      callContext = controller.callContext(callContext);
      var vars = new OS.DataTypes.VariableHolder(
        new (controller.constructor.getVariableGroupType(
          'UBTConnect.Directory_Interchange.Directory_Interchange_StatisticsList.Handler_Clicked$vars',
        ))(),
      );
      vars.value.interchangeLocalityIdInLocal = interchangeLocalityIdIn;
      vars.value.interchangeCountryNameInLocal = interchangeCountryNameIn;
      varBag.callContext = callContext;
      varBag.vars = vars;
      OutSystemsDebugger.push(
        'ZK4RCP5OdEuntYI2VRpwBA:0x5S__FfA0mcPEyCHc+1dQ:/NRWebFlows.XBksuv9v80qDk9x9+8qI1g/NodesShownInESpaceTree.lc+cHjaFO0mKv3y0xAsOpw/ClientActions.0x5S__FfA0mcPEyCHc+1dQ:1xvn1HzrdMYSq_MdYDC5HA',
        'UBTConnect',
        'Handler_Clicked',
        'NRFlows.ClientScreenActionFlow',
        callContext.id,
        varBag,
      );
      OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:cd5vqOOgP0WYfRwxoicbOw', callContext.id);
      return OS.Flow.executeAsyncFlow(function () {
        return OS.Flow.executeSequence(function () {
          if (
            OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:KfMhDkWD+kKnvTUaPmiHIQ', callContext.id) &&
            model.variables.in_IsLoadingIn
          ) {
            OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:tiuGJO0BNEqFd8sZxvakEg', callContext.id);
          } else {
            OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:RWFzNr5bbEmLkpeTWy1U6Q', callContext.id);
            // Trigger Event: Event_NavigateToLocality
            return controller
              .event_NavigateToLocality$Action(
                vars.value.interchangeLocalityIdInLocal,
                vars.value.interchangeCountryNameInLocal,
                callContext,
              )
              .then(function () {
                OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:tiuGJO0BNEqFd8sZxvakEg', callContext.id);
              });
          }
        });
      })
        .then(function (res) {
          OutSystemsDebugger.pop('ZK4RCP5OdEuntYI2VRpwBA:0x5S__FfA0mcPEyCHc+1dQ', callContext.id);
          return res;
        })
        .catch(function (ex) {
          OutSystemsDebugger.handleException(ex, callContext.id);
          OutSystemsDebugger.pop('ZK4RCP5OdEuntYI2VRpwBA:0x5S__FfA0mcPEyCHc+1dQ', callContext.id);
          throw ex;
        });
    };
    Controller.registerVariableGroupType(
      'UBTConnect.Directory_Interchange.Directory_Interchange_StatisticsList.Handler_Clicked$vars',
      [
        {
          name: 'InterchangeLocalityId',
          attrName: 'interchangeLocalityIdInLocal',
          mandatory: true,
          dataType: OS.DataTypes.DataTypes.LongInteger,
          defaultValue: function () {
            return OS.DataTypes.LongInteger.defaultValue;
          },
        },
        {
          name: 'InterchangeCountryName',
          attrName: 'interchangeCountryNameInLocal',
          mandatory: true,
          dataType: OS.DataTypes.DataTypes.Text,
          defaultValue: function () {
            return '';
          },
        },
      ],
    );

    Controller.prototype.handler_Clicked$Action = function (
      interchangeLocalityIdIn,
      interchangeCountryNameIn,
      callContext,
    ) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(
        controller._handler_Clicked$Action,
        callContext,
        interchangeLocalityIdIn,
        interchangeCountryNameIn,
      );
    };
    Controller.prototype.event_NavigateToLocality$Action = function () {
      return Promise.resolve();
    };

    // Event Handler Actions
    Controller.prototype.pushDebuggerContext = function (callContext) {
      var varBag = {};
      OutSystemsDebugger.push(
        'ZK4RCP5OdEuntYI2VRpwBA:XBksuv9v80qDk9x9+8qI1g:/NRWebFlows.XBksuv9v80qDk9x9+8qI1g:5iT2hdfHzA62kIyYpoSLcQ',
        'UBTConnect',
        'Directory_Interchange',
        'NRFlows.WebFlow',
        callContext.id,
        varBag,
      );
      OutSystemsDebugger.push(
        'ZK4RCP5OdEuntYI2VRpwBA:lc+cHjaFO0mKv3y0xAsOpw:/NRWebFlows.XBksuv9v80qDk9x9+8qI1g/NodesShownInESpaceTree.lc+cHjaFO0mKv3y0xAsOpw:F9HyLcUZTuO40vzDCy7YzQ',
        'UBTConnect',
        'Directory_Interchange_StatisticsList',
        'NRNodes.WebBlock',
        callContext.id,
        varBag,
      );
    };
    Controller.prototype.popDebuggerContext = function (callContext) {
      OutSystemsDebugger.pop('ZK4RCP5OdEuntYI2VRpwBA:lc+cHjaFO0mKv3y0xAsOpw', callContext.id);
      OutSystemsDebugger.pop('ZK4RCP5OdEuntYI2VRpwBA:XBksuv9v80qDk9x9+8qI1g', callContext.id);
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
      return UBTConnectController.default.defaultTimeout;
    };
    return Controller;
  })(OS.Controller.BaseViewController);
  return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});

define('UBTConnect.Directory_Interchange.Directory_Interchange_StatisticsList.mvc$debugger', [
  'exports',
  'OutSystems/ClientRuntime/Debugger',
  'OutSystems/ClientRuntime/Main',
], function (exports, Debugger, OutSystems) {
  var OS = OutSystems.Internal;
  var metaInfo = {
    O6TGORfQ2k2pGr1xGOZvJA: {
      getter: function (varBag, idService) {
        return varBag.vars.value.interchangeLocalityIdInLocal;
      },
      dataType: OS.DataTypes.DataTypes.LongInteger,
    },
    'l7yNgp8HZEWZ4oelR6FW+w': {
      getter: function (varBag, idService) {
        return varBag.vars.value.interchangeCountryNameInLocal;
      },
      dataType: OS.DataTypes.DataTypes.Text,
    },
    qw8Xm1h7G0CWHIdhJu8YgA: {
      getter: function (varBag, idService) {
        return varBag.model.variables.in_IsLoadingIn;
      },
      dataType: OS.DataTypes.DataTypes.Boolean,
    },
    l4HghLTA3kmHSqCgY3SJoQ: {
      getter: function (varBag, idService) {
        return varBag.model.variables.in_ShowSubtitleIn;
      },
      dataType: OS.DataTypes.DataTypes.Boolean,
    },
    c5FjvOUlbkGeGMkwHOkC3g: {
      getter: function (varBag, idService) {
        return varBag.model.variables.in_HighlightWordsIn;
      },
      dataType: OS.DataTypes.DataTypes.Text,
    },
    'W+UFzlbMjUeJfm6ZTGpRPQ': {
      getter: function (varBag, idService) {
        return varBag.model.variables.in_InterchangeListIn;
      },
    },
    Dy0UmQdZYEiqDHbVH6jePQ: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId('Content'));
        })(varBag.model, idService);
      },
    },
    '9xcewdgVnk+pWQG99TmCSg': {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId('Placeholder_LoadingSection'));
        })(varBag.model, idService);
      },
    },
    rb9SJ0nYqEyQtNRvfk8ofw: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId('ActionsMenu'));
        })(varBag.model, idService);
      },
    },
  };
  OutSystemsDebugger.registerMetaInfo(metaInfo);
});
