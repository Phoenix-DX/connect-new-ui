define('UBTConnect.Directory_OneSchoolGlobal_Blocks.OneSchoolGlobal_List.mvc$model', [
  'OutSystems/ClientRuntime/Main',
  'UBTConnect.model',
  'Connect_CommunityBusiness_CS.model',
  'UBTConnectLibrary.model',
  'UBTConnect_Utils.model',
  'UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model',
  'UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.mvc$model',
  'UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$model',
  'UBTConnectLibrary.ConnectPatterns.ImageCard__Content.mvc$model',
  'UBTConnectLibrary.ConnectPatterns.StopPropagationHelper.mvc$model',
  'UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc$model',
  'Connect_CommunityBusiness_CS.model$UI_OneSchool_CardRec',
  'UBTConnect.referencesHealth',
  'UBTConnect.referencesHealth$Connect_CommunityBusiness_CS',
  'UBTConnect.model$UI_OneSchool_CardList',
  'UBTConnectLibrary.model$LazyImageSizeRec',
  'UBTConnect.referencesHealth$UBTConnectLibrary',
  'UBTConnect_Utils.model$ContactPopUp_OverrideOptionsRec',
  'UBTConnect.referencesHealth$UBTConnect_Utils',
  'UBTConnectLibrary.model$ActionsMenuEnableOptionsRec',
], function (
  OutSystems,
  UBTConnectModel,
  Connect_CommunityBusiness_CSModel,
  UBTConnectLibraryModel,
  UBTConnect_UtilsModel,
  UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel,
  UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvcModel,
  UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel,
  UBTConnectLibrary_ConnectPatterns_ImageCard__Content_mvcModel,
  UBTConnectLibrary_ConnectPatterns_StopPropagationHelper_mvcModel,
  UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvcModel,
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
          'OneSchoolList',
          'oneSchoolListIn',
          'OneSchoolList',
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
          '_oneSchoolListInDataFetchStatus',
          '_oneSchoolListInDataFetchStatus',
          '_oneSchoolListInDataFetchStatus',
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
            UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets ||
            UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvcModel.hasValidationWidgets ||
            UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel.hasValidationWidgets ||
            UBTConnectLibrary_ConnectPatterns_ImageCard__Content_mvcModel.hasValidationWidgets ||
            UBTConnectLibrary_ConnectPatterns_StopPropagationHelper_mvcModel.hasValidationWidgets ||
            UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvcModel.hasValidationWidgets;
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

      if ('OneSchoolList' in inputs) {
        this.variables.oneSchoolListIn = inputs.OneSchoolList;
        if ('_oneSchoolListInDataFetchStatus' in inputs) {
          this.variables._oneSchoolListInDataFetchStatus = inputs._oneSchoolListInDataFetchStatus;
        }
      }
    };
    return Model;
  })(OS.Model.BaseViewModel);
  return new OS.Model.ModelFactory(Model, 'Directory_OneSchoolGlobal_Blocks.OneSchoolGlobal_List');
});
define('UBTConnect.Directory_OneSchoolGlobal_Blocks.OneSchoolGlobal_List.mvc$view', [
  'OutSystems/ClientRuntime/Main',
  'UBTConnect.model',
  'UBTConnect.controller',
  'Connect_CommunityBusiness_CS.model',
  'UBTConnectLibrary.model',
  'UBTConnect_Utils.model',
  'react',
  'OutSystems/ReactView/Main',
  'UBTConnect.Directory_OneSchoolGlobal_Blocks.OneSchoolGlobal_List.mvc$model',
  'UBTConnect.Directory_OneSchoolGlobal_Blocks.OneSchoolGlobal_List.mvc$controller',
  'UBTConnect.clientVariables',
  'UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view',
  'OutSystems/ReactWidgets/Main',
  'UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.mvc$view',
  'UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$view',
  'UBTConnectLibrary.ConnectPatterns.ImageCard__Content.mvc$view',
  'UBTConnectLibrary.ConnectPatterns.StopPropagationHelper.mvc$view',
  'UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc$view',
  'Connect_CommunityBusiness_CS.model$UI_OneSchool_CardRec',
  'UBTConnect.referencesHealth',
  'UBTConnect.referencesHealth$Connect_CommunityBusiness_CS',
  'UBTConnect.model$UI_OneSchool_CardList',
  'UBTConnectLibrary.model$LazyImageSizeRec',
  'UBTConnect.referencesHealth$UBTConnectLibrary',
  'UBTConnect_Utils.model$ContactPopUp_OverrideOptionsRec',
  'UBTConnect.referencesHealth$UBTConnect_Utils',
  'UBTConnectLibrary.model$ActionsMenuEnableOptionsRec',
], function (
  OutSystems,
  UBTConnectModel,
  UBTConnectController,
  Connect_CommunityBusiness_CSModel,
  UBTConnectLibraryModel,
  UBTConnect_UtilsModel,
  React,
  OSView,
  UBTConnect_Directory_OneSchoolGlobal_Blocks_OneSchoolGlobal_List_mvc_model,
  UBTConnect_Directory_OneSchoolGlobal_Blocks_OneSchoolGlobal_List_mvc_controller,
  UBTConnectClientVariables,
  UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view,
  OSWidgets,
  UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvc_view,
  UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view,
  UBTConnectLibrary_ConnectPatterns_ImageCard__Content_mvc_view,
  UBTConnectLibrary_ConnectPatterns_StopPropagationHelper_mvc_view,
  UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvc_view,
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
    View.displayName = 'Directory_OneSchoolGlobal_Blocks.OneSchoolGlobal_List';
    View.getCssDependencies = function () {
      return ['css/OutSystemsReactWidgets.css'];
    };
    View.getJsDependencies = function () {
      return [];
    };
    View.getBlocks = function () {
      return [
        UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view,
        UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvc_view,
        UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view,
        UBTConnectLibrary_ConnectPatterns_ImageCard__Content_mvc_view,
        UBTConnectLibrary_ConnectPatterns_StopPropagationHelper_mvc_view,
        UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvc_view,
      ];
    };
    Object.defineProperty(View.prototype, 'modelFactory', {
      get: function () {
        return UBTConnect_Directory_OneSchoolGlobal_Blocks_OneSchoolGlobal_List_mvc_model;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(View.prototype, 'controllerFactory', {
      get: function () {
        return UBTConnect_Directory_OneSchoolGlobal_Blocks_OneSchoolGlobal_List_mvc_controller;
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
            uuid: '0',
            alias: '1',
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
                  onScrollEnding: function () {
                    var eventHandlerContext = callContext.clone();
                    return OS.Flow.tryFinally(
                      function () {
                        var varBag = {};
                        controller.pushDebuggerContext(eventHandlerContext);

                        OutSystemsDebugger.setThreadStartName(
                          eventHandlerContext.id,
                          'Directory_OneSchoolGlobal_Blocks/OneSchoolGlobal_List/List OnScrollEnding',
                        );
                        controller.event_ScrollEnding$Action(controller.callContext(eventHandlerContext));
                      },
                      function () {
                        controller.popDebuggerContext(eventHandlerContext);
                      },
                    );
                  },
                  source: model.variables.oneSchoolListIn,
                  style: 'list list-group list--gap-s',
                  tag: 'div',
                  _idProps: {
                    service: idService,
                    uuid: '1',
                  },
                  _widgetRecordProvider: widgetsRecordProvider,
                  source_dataFetchStatus: OS.Model.calculateDataFetchStatus(
                    model.variables._oneSchoolListInDataFetchStatus,
                  ),
                  placeholders: {
                    content: new IteratorPlaceholderContent(
                      function (idService, callContext) {
                        return [
                          React.createElement(UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvc_view, {
                            inputs: {
                              In_ShowAvatarList: false,
                              In_ExtendedClass: 'padding-bottom-s',
                              In_CardTypeId: UBTConnectModel.staticEntities.uBT_ImageCardType.list,
                              In_BookmarkModifier: 'bookmark--rounded',
                            },
                            events: {
                              _handleError: function (ex) {
                                controller.handleError(ex);
                              },
                              event_Click$Action: function () {
                                var eventHandlerContext = callContext.clone();
                                return OS.Flow.tryFinally(
                                  function () {
                                    var varBag = {};
                                    controller.pushDebuggerContext(eventHandlerContext);

                                    OutSystemsDebugger.setThreadStartName(
                                      eventHandlerContext.id,
                                      'ConnectCorePatterns/ImageCard_LazyLoading Event_Click',
                                    );
                                    controller.event_OnClick$Action(
                                      model.variables.oneSchoolListIn.getCurrent(callContext.iterationContext)
                                        .communityBusinessIdAttr,
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
                              uuid: '2',
                              alias: '2',
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                              lazyImage_Placeholder: new PlaceholderContent(function () {
                                return [
                                  React.createElement(
                                    OSWidgets.Container,
                                    {
                                      align: /*Default*/ 0,
                                      animate: false,
                                      visible: true,
                                      _idProps: {
                                        service: idService,
                                        uuid: '3',
                                      },
                                      _widgetRecordProvider: widgetsRecordProvider,
                                    },
                                    React.createElement(UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, {
                                      inputs: {
                                        EntityId: OS.BuiltinFunctions.longIntegerToText(
                                          model.variables.oneSchoolListIn.getCurrent(callContext.iterationContext)
                                            .communityBusinessIdAttr,
                                        ),
                                        _entityIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(
                                          model.variables._oneSchoolListInDataFetchStatus,
                                        ),
                                        ImageURL: model.variables.oneSchoolListIn.getCurrent(
                                          callContext.iterationContext,
                                        ).signedURLAttr,
                                        _imageURLInDataFetchStatus: OS.Model.calculateDataFetchStatus(
                                          model.variables._oneSchoolListInDataFetchStatus,
                                        ),
                                        HasErrorMessage: true,
                                        ImageSize: model.getCachedValue(
                                          idService.getId('XIzC62wyPU2CBLruMa+euA.ImageSize'),
                                          function () {
                                            return (function () {
                                              var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
                                              rec.widthAttr =
                                                UBTConnectModel.staticEntities.uBT_ImageSize.maxWidth_100vw;
                                              return rec;
                                            })();
                                          },
                                        ),
                                        EntityType: UBTConnectModel.staticEntities.connect_Entity.oneSchoolGlobal,
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
                                        alias: '3',
                                      },
                                      _widgetRecordProvider: widgetsRecordProvider,
                                      _dependencies: [],
                                    }),
                                  ),
                                ];
                              }),
                              placeholder_ImageTag: PlaceholderContent.Empty,
                              avatarList: PlaceholderContent.Empty,
                              placeholder_Content: new PlaceholderContent(function () {
                                return [
                                  React.createElement(UBTConnectLibrary_ConnectPatterns_ImageCard__Content_mvc_view, {
                                    inputs: {
                                      In_Title: model.variables.oneSchoolListIn.getCurrent(callContext.iterationContext)
                                        .oneSchool_Card_ContentAttr.nameAttr,
                                      _in_TitleInDataFetchStatus: OS.Model.calculateDataFetchStatus(
                                        model.variables._oneSchoolListInDataFetchStatus,
                                      ),
                                      In_Subtitle: model.variables.oneSchoolListIn.getCurrent(
                                        callContext.iterationContext,
                                      ).oneSchool_Card_ContentAttr.localityNameAttr,
                                      _in_SubtitleInDataFetchStatus: OS.Model.calculateDataFetchStatus(
                                        model.variables._oneSchoolListInDataFetchStatus,
                                      ),
                                      In_ShowSubtitle: true,
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
                                      alias: '4',
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    placeholders: {
                                      placeholder_TopSectionContent: PlaceholderContent.Empty,
                                      placeholder_BottomSectionContent: new PlaceholderContent(function () {
                                        return [
                                          React.createElement(
                                            UBTConnectLibrary_ConnectPatterns_StopPropagationHelper_mvc_view,
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
                                                uuid: '6',
                                                alias: '5',
                                              },
                                              _widgetRecordProvider: widgetsRecordProvider,
                                              placeholders: {
                                                content: new PlaceholderContent(function () {
                                                  return [
                                                    React.createElement(
                                                      UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvc_view,
                                                      {
                                                        inputs: {
                                                          EntityType:
                                                            UBTConnectModel.staticEntities.connect_Entity
                                                              .oneSchoolGlobal,
                                                          EntityId: model.variables.oneSchoolListIn.getCurrent(
                                                            callContext.iterationContext,
                                                          ).communityBusinessIdAttr,
                                                          _entityIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(
                                                            model.variables._oneSchoolListInDataFetchStatus,
                                                          ),
                                                          ContactPopUp_OverrideOptions: model.getCachedValue(
                                                            idService.getId(
                                                              'gXvt_HaZh0C1kiyF7j2GaA.ContactPopUp_OverrideOptions',
                                                            ),
                                                            function () {
                                                              return (function () {
                                                                var rec =
                                                                  new UBTConnect_UtilsModel.ContactPopUp_OverrideOptionsRec();
                                                                rec.imageURLAttr =
                                                                  model.variables.oneSchoolListIn.getCurrent(
                                                                    callContext.iterationContext,
                                                                  ).signedURLAttr;
                                                                rec.nameAttr = OS.BuiltinFunctions.trim(
                                                                  model.variables.oneSchoolListIn.getCurrent(
                                                                    callContext.iterationContext,
                                                                  ).oneSchool_Card_ContentAttr.nameAttr,
                                                                );
                                                                return rec;
                                                              })();
                                                            },
                                                            function () {
                                                              return model.variables.oneSchoolListIn.getCurrent(
                                                                callContext.iterationContext,
                                                              ).signedURLAttr;
                                                            },
                                                            function () {
                                                              return model.variables.oneSchoolListIn.getCurrent(
                                                                callContext.iterationContext,
                                                              ).oneSchool_Card_ContentAttr.nameAttr;
                                                            },
                                                          ),
                                                          _contactPopUp_OverrideOptionsInDataFetchStatus:
                                                            OS.Model.calculateDataFetchStatus(
                                                              model.variables._oneSchoolListInDataFetchStatus,
                                                            ),
                                                          EnableOptions: model.getCachedValue(
                                                            idService.getId('gXvt_HaZh0C1kiyF7j2GaA.EnableOptions'),
                                                            function () {
                                                              return (function () {
                                                                var rec =
                                                                  new UBTConnectLibraryModel.ActionsMenuEnableOptionsRec();
                                                                rec.enableNotesAttr = true;
                                                                return rec;
                                                              })();
                                                            },
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
                                                          uuid: '7',
                                                          alias: '6',
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        _dependencies: [],
                                                      },
                                                    ),
                                                  ];
                                                }),
                                              },
                                              _dependencies: [
                                                asPrimitiveValue(model.variables._oneSchoolListInDataFetchStatus),
                                                asPrimitiveValue(
                                                  model.variables.oneSchoolListIn.getCurrent(
                                                    callContext.iterationContext,
                                                  ).oneSchool_Card_ContentAttr.nameAttr,
                                                ),
                                                asPrimitiveValue(
                                                  model.variables.oneSchoolListIn.getCurrent(
                                                    callContext.iterationContext,
                                                  ).signedURLAttr,
                                                ),
                                                asPrimitiveValue(
                                                  model.variables.oneSchoolListIn.getCurrent(
                                                    callContext.iterationContext,
                                                  ).communityBusinessIdAttr,
                                                ),
                                              ],
                                            },
                                          ),
                                        ];
                                      }),
                                    },
                                    _dependencies: [
                                      asPrimitiveValue(model.variables._oneSchoolListInDataFetchStatus),
                                      asPrimitiveValue(
                                        model.variables.oneSchoolListIn.getCurrent(callContext.iterationContext)
                                          .oneSchool_Card_ContentAttr.nameAttr,
                                      ),
                                      asPrimitiveValue(
                                        model.variables.oneSchoolListIn.getCurrent(callContext.iterationContext)
                                          .signedURLAttr,
                                      ),
                                      asPrimitiveValue(
                                        model.variables.oneSchoolListIn.getCurrent(callContext.iterationContext)
                                          .communityBusinessIdAttr,
                                      ),
                                    ],
                                  }),
                                ];
                              }),
                            },
                            _dependencies: [
                              asPrimitiveValue(model.variables._oneSchoolListInDataFetchStatus),
                              asPrimitiveValue(
                                model.variables.oneSchoolListIn.getCurrent(callContext.iterationContext)
                                  .oneSchool_Card_ContentAttr.localityNameAttr,
                              ),
                              asPrimitiveValue(
                                model.variables.oneSchoolListIn.getCurrent(callContext.iterationContext)
                                  .oneSchool_Card_ContentAttr.nameAttr,
                              ),
                              asPrimitiveValue(
                                model.variables.oneSchoolListIn.getCurrent(callContext.iterationContext).signedURLAttr,
                              ),
                              asPrimitiveValue(
                                model.variables.oneSchoolListIn.getCurrent(callContext.iterationContext)
                                  .communityBusinessIdAttr,
                              ),
                            ],
                          }),
                        ];
                      },
                      callContext,
                      idService,
                      '1',
                    ),
                  },
                  _dependencies: [asPrimitiveValue(model.variables._oneSchoolListInDataFetchStatus)],
                }),
              ];
            }),
          },
          _dependencies: [
            asPrimitiveValue(model.variables._oneSchoolListInDataFetchStatus),
            asPrimitiveValue(model.variables.oneSchoolListIn),
          ],
        }),
      );
    };
    return View;
  })(OSView.BaseView.BaseWebBlock);

  return View;
});
define('UBTConnect.Directory_OneSchoolGlobal_Blocks.OneSchoolGlobal_List.mvc$controller', [
  'OutSystems/ClientRuntime/Main',
  'UBTConnect.model',
  'UBTConnect.controller',
  'Connect_CommunityBusiness_CS.model',
  'UBTConnectLibrary.model',
  'UBTConnect_Utils.model',
  'UBTConnect.languageResources',
  'UBTConnect.clientVariables',
  'UBTConnect.Directory_OneSchoolGlobal_Blocks.OneSchoolGlobal_List.mvc$debugger',
  'Connect_CommunityBusiness_CS.model$UI_OneSchool_CardRec',
  'UBTConnect.referencesHealth',
  'UBTConnect.referencesHealth$Connect_CommunityBusiness_CS',
  'UBTConnect.model$UI_OneSchool_CardList',
  'UBTConnectLibrary.model$LazyImageSizeRec',
  'UBTConnect.referencesHealth$UBTConnectLibrary',
  'UBTConnect_Utils.model$ContactPopUp_OverrideOptionsRec',
  'UBTConnect.referencesHealth$UBTConnect_Utils',
  'UBTConnectLibrary.model$ActionsMenuEnableOptionsRec',
], function (
  OutSystems,
  UBTConnectModel,
  UBTConnectController,
  Connect_CommunityBusiness_CSModel,
  UBTConnectLibraryModel,
  UBTConnect_UtilsModel,
  UBTConnectLanguageResources,
  UBTConnectClientVariables,
  UBTConnect_Directory_OneSchoolGlobal_Blocks_OneSchoolGlobal_List_mvc_Debugger,
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

    Controller.prototype.event_ScrollEnding$Action = function () {
      return Promise.resolve();
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
        'ZK4RCP5OdEuntYI2VRpwBA:PLRguehoL0OQIU6lP3KoWQ:/NRWebFlows.PLRguehoL0OQIU6lP3KoWQ:eliye14fJz3M6MULnv0Lag',
        'UBTConnect',
        'Directory_OneSchoolGlobal_Blocks',
        'NRFlows.WebFlow',
        callContext.id,
        varBag,
      );
      OutSystemsDebugger.push(
        'ZK4RCP5OdEuntYI2VRpwBA:I318xUsEQEWwH9x7gXh4Xw:/NRWebFlows.PLRguehoL0OQIU6lP3KoWQ/NodesShownInESpaceTree.I318xUsEQEWwH9x7gXh4Xw:KKoXG+Cwhzv5SQnESMAm2g',
        'UBTConnect',
        'OneSchoolGlobal_List',
        'NRNodes.WebBlock',
        callContext.id,
        varBag,
      );
    };
    Controller.prototype.popDebuggerContext = function (callContext) {
      OutSystemsDebugger.pop('ZK4RCP5OdEuntYI2VRpwBA:I318xUsEQEWwH9x7gXh4Xw', callContext.id);
      OutSystemsDebugger.pop('ZK4RCP5OdEuntYI2VRpwBA:PLRguehoL0OQIU6lP3KoWQ', callContext.id);
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

define('UBTConnect.Directory_OneSchoolGlobal_Blocks.OneSchoolGlobal_List.mvc$debugger', [
  'exports',
  'OutSystems/ClientRuntime/Debugger',
  'OutSystems/ClientRuntime/Main',
], function (exports, Debugger, OutSystems) {
  var OS = OutSystems.Internal;
  var metaInfo = {
    'sfhvYTzXlkmmT7f7y87+MA': {
      getter: function (varBag, idService) {
        return varBag.model.variables.in_IsLoadingIn;
      },
      dataType: OS.DataTypes.DataTypes.Boolean,
    },
    BmyBqtgchU2CYytmQSjTaQ: {
      getter: function (varBag, idService) {
        return varBag.model.variables.oneSchoolListIn;
      },
    },
    CKO8klyuQUyl6Qca2N7i3A: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId('Placeholder_LoadingSection'));
        })(varBag.model, idService);
      },
    },
    '9sMRr3r8_Eafs6vRbEM6rg': {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId('LazyImage_Placeholder'));
        })(varBag.model, idService);
      },
    },
    KbyalUkJr0Wpd4GbmuEhwA: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId('Placeholder_ImageTag'));
        })(varBag.model, idService);
      },
    },
    Xn2EPB5P8UC9yvG6rq_4qw: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId('AvatarList'));
        })(varBag.model, idService);
      },
    },
    kaxG3m5a00eGGjc7rffOUA: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId('Placeholder_Content'));
        })(varBag.model, idService);
      },
    },
    'JfCmC4W7h0uq+o+irLWKyA': {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId('Placeholder_TopSectionContent'));
        })(varBag.model, idService);
      },
    },
    o_aIloapK0OFBHI2ATK6Tg: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId('Placeholder_BottomSectionContent'));
        })(varBag.model, idService);
      },
    },
    'e+vVnv2Xxkyn6SS5U16nZQ': {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId('Content'));
        })(varBag.model, idService);
      },
    },
  };
  OutSystemsDebugger.registerMetaInfo(metaInfo);
});
