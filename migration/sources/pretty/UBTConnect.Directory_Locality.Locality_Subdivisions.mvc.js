define('UBTConnect.Directory_Locality.Locality_Subdivisions.mvc$model', [
  'OutSystems/ClientRuntime/Main',
  'UBTConnect.model',
  'Connect_Subdivision_CS.model',
  'UBTConnectLibrary.model',
  'UBTConnect.controller',
  'UBTConnect_Utils.controller',
  'NavigationHandler.controller',
  'UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model',
  'UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model',
  'UBTConnect.Directory_CommonBlocks.Directory_EmptyState.mvc$model',
  'UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.mvc$model',
  'UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$model',
  'UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content.mvc$model',
  'Connect_Subdivision_CS.model$UI_Subdivision_CardRec',
  'UBTConnect.referencesHealth',
  'UBTConnect.referencesHealth$Connect_Subdivision_CS',
  'UBTConnect.model$UI_Subdivision_CardList',
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
  'UBTConnectLibrary.model$LazyImageSizeRec',
  'Connect_Subdivision_CS.model$UI_Subdivision_Card_ContentRec',
  'UBTConnect.controller$GetSkeletonList_UI_SubdivisionCard',
  'UBTConnect_Utils.controller$GetHasCarouselEnabled',
  'UBTConnect.referencesHealth$UBTConnect_Utils',
  'NavigationHandler.controller$SetPreloadObject',
  'UBTConnect.referencesHealth$NavigationHandler',
  'UBTConnect.model$PreloadedSupperMeetingsRec',
], function (
  OutSystems,
  UBTConnectModel,
  Connect_Subdivision_CSModel,
  UBTConnectLibraryModel,
  UBTConnectController,
  UBTConnect_UtilsController,
  NavigationHandlerController,
  UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel,
  UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel,
  UBTConnect_Directory_CommonBlocks_Directory_EmptyState_mvcModel,
  UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvcModel,
  UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel,
  UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_mvcModel,
) {
  var OS = OutSystems.Internal;

  var Get_Subdivision_ListDataActRec = (function (_super) {
    __extends(Get_Subdivision_ListDataActRec, _super);
    function Get_Subdivision_ListDataActRec(defaults) {
      _super.apply(this, arguments);
    }
    Get_Subdivision_ListDataActRec.attributesToDeclare = function () {
      return [
        this.attr(
          'Out_Subdivision_Card_List',
          'out_Subdivision_Card_ListOut',
          'Out_Subdivision_Card_List',
          true,
          false,
          OS.DataTypes.DataTypes.RecordList,
          function () {
            return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_Subdivision_CardList());
          },
          true,
          UBTConnectModel.UI_Subdivision_CardList,
        ),
      ].concat(_super.attributesToDeclare.call(this));
    };
    Get_Subdivision_ListDataActRec.fromStructure = function (str) {
      return new Get_Subdivision_ListDataActRec(
        new Get_Subdivision_ListDataActRec.RecordClass({
          out_Subdivision_Card_ListOut: OS.DataTypes.ImmutableBase.getData(str),
        }),
      );
    };
    Get_Subdivision_ListDataActRec.init();
    return Get_Subdivision_ListDataActRec;
  })(OS.Model.DataSourceRecord);

  var VariablesRecord = (function (_super) {
    __extends(VariablesRecord, _super);
    function VariablesRecord(defaults) {
      _super.apply(this, arguments);
    }
    VariablesRecord.attributesToDeclare = function () {
      return [
        this.attr(
          'GetSubdivisions_StartIndex',
          'getSubdivisions_StartIndexVar',
          'GetSubdivisions_StartIndex',
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return 0;
          },
          false,
        ),
        this.attr(
          'GetSubdivisions_Offset',
          'getSubdivisions_OffsetVar',
          'GetSubdivisions_Offset',
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return 20;
          },
          false,
        ),
        this.attr(
          'Subdivision_Card_List',
          'subdivision_Card_ListVar',
          'Subdivision_Card_List',
          true,
          false,
          OS.DataTypes.DataTypes.RecordList,
          function () {
            return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_Subdivision_CardList());
          },
          false,
          UBTConnectModel.UI_Subdivision_CardList,
        ),
        this.attr(
          'Subdivision_Card_List_IsLoading',
          'subdivision_Card_List_IsLoadingVar',
          'Subdivision_Card_List_IsLoading',
          true,
          false,
          OS.DataTypes.DataTypes.Boolean,
          function () {
            return true;
          },
          false,
        ),
        this.attr(
          'IsPaginated',
          'isPaginatedVar',
          'IsPaginated',
          true,
          false,
          OS.DataTypes.DataTypes.Boolean,
          function () {
            return false;
          },
          false,
        ),
        this.attr(
          'LocalityId',
          'localityIdIn',
          'LocalityId',
          true,
          false,
          OS.DataTypes.DataTypes.LongInteger,
          function () {
            return OS.DataTypes.LongInteger.defaultValue;
          },
          false,
        ),
        this.attr(
          '_localityIdInDataFetchStatus',
          '_localityIdInDataFetchStatus',
          '_localityIdInDataFetchStatus',
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return /*Fetched*/ 1;
          },
          false,
        ),
        this.attr(
          'Get_Subdivision_List',
          'get_Subdivision_ListDataAct',
          'get_Subdivision_ListDataAct',
          true,
          true,
          OS.DataTypes.DataTypes.Record,
          function () {
            return OS.DataTypes.ImmutableBase.getData(new Get_Subdivision_ListDataActRec());
          },
          true,
          Get_Subdivision_ListDataActRec,
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
            UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets ||
            UBTConnect_Directory_CommonBlocks_Directory_EmptyState_mvcModel.hasValidationWidgets ||
            UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvcModel.hasValidationWidgets ||
            UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel.hasValidationWidgets ||
            UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_mvcModel.hasValidationWidgets;
        }

        return Model._hasValidationWidgetsValue;
      },
    });

    Model.prototype.setInputs = function (inputs) {
      if ('LocalityId' in inputs) {
        this.variables.localityIdIn = inputs.LocalityId;
        if ('_localityIdInDataFetchStatus' in inputs) {
          this.variables._localityIdInDataFetchStatus = inputs._localityIdInDataFetchStatus;
        }
      }
    };
    return Model;
  })(OS.Model.BaseViewModel);
  return new OS.Model.ModelFactory(Model, 'Directory_Locality.Locality_Subdivisions');
});
define('UBTConnect.Directory_Locality.Locality_Subdivisions.mvc$view', [
  'OutSystems/ClientRuntime/Main',
  'UBTConnect.model',
  'UBTConnect.controller',
  'Connect_Subdivision_CS.model',
  'UBTConnectLibrary.model',
  'UBTConnect_Utils.controller',
  'NavigationHandler.controller',
  'react',
  'OutSystems/ReactView/Main',
  'UBTConnect.Directory_Locality.Locality_Subdivisions.mvc$model',
  'UBTConnect.Directory_Locality.Locality_Subdivisions.mvc$controller',
  'UBTConnect.clientVariables',
  'UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view',
  'OutSystems/ReactWidgets/Main',
  'UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view',
  'UBTConnect.Directory_CommonBlocks.Directory_EmptyState.mvc$view',
  'UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.mvc$view',
  'UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$view',
  'UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content.mvc$view',
  'Connect_Subdivision_CS.model$UI_Subdivision_CardRec',
  'UBTConnect.referencesHealth',
  'UBTConnect.referencesHealth$Connect_Subdivision_CS',
  'UBTConnect.model$UI_Subdivision_CardList',
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
  'UBTConnectLibrary.model$LazyImageSizeRec',
  'Connect_Subdivision_CS.model$UI_Subdivision_Card_ContentRec',
  'UBTConnect.controller$GetSkeletonList_UI_SubdivisionCard',
  'UBTConnect_Utils.controller$GetHasCarouselEnabled',
  'UBTConnect.referencesHealth$UBTConnect_Utils',
  'NavigationHandler.controller$SetPreloadObject',
  'UBTConnect.referencesHealth$NavigationHandler',
  'UBTConnect.model$PreloadedSupperMeetingsRec',
], function (
  OutSystems,
  UBTConnectModel,
  UBTConnectController,
  Connect_Subdivision_CSModel,
  UBTConnectLibraryModel,
  UBTConnect_UtilsController,
  NavigationHandlerController,
  React,
  OSView,
  UBTConnect_Directory_Locality_Locality_Subdivisions_mvc_model,
  UBTConnect_Directory_Locality_Locality_Subdivisions_mvc_controller,
  UBTConnectClientVariables,
  UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view,
  OSWidgets,
  UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view,
  UBTConnect_Directory_CommonBlocks_Directory_EmptyState_mvc_view,
  UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvc_view,
  UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view,
  UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_mvc_view,
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
    View.displayName = 'Directory_Locality.Locality_Subdivisions';
    View.getCssDependencies = function () {
      return ['css/OutSystemsReactWidgets.css'];
    };
    View.getJsDependencies = function () {
      return [];
    };
    View.getBlocks = function () {
      return [
        UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view,
        UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view,
        UBTConnect_Directory_CommonBlocks_Directory_EmptyState_mvc_view,
        UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvc_view,
        UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view,
        UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_mvc_view,
      ];
    };
    Object.defineProperty(View.prototype, 'modelFactory', {
      get: function () {
        return UBTConnect_Directory_Locality_Locality_Subdivisions_mvc_model;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(View.prototype, 'controllerFactory', {
      get: function () {
        return UBTConnect_Directory_Locality_Locality_Subdivisions_mvc_controller;
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
            In_IsLoading: model.variables.subdivision_Card_List_IsLoadingVar,
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
                React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                  inputs: {
                    Options: model.getCachedValue(idService.getId('Block_SubdivisionListWrapper.Options'), function () {
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
                    name: 'Block_SubdivisionListWrapper',
                    alias: '2',
                  },
                  _widgetRecordProvider: widgetsRecordProvider,
                  placeholders: {
                    content: new PlaceholderContent(function () {
                      return [
                        $if(
                          model.variables.subdivision_Card_ListVar.isEmpty &&
                            !model.variables.subdivision_Card_List_IsLoadingVar,
                          false,
                          this,
                          function () {
                            return [
                              React.createElement(UBTConnect_Directory_CommonBlocks_Directory_EmptyState_mvc_view, {
                                inputs: {
                                  EntityTypeId:
                                    UBTConnectModel.staticEntities.connect_Entity.supperMeetings_aka_Subdivisions,
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
                                  name: 'EmptyState',
                                  alias: '3',
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: [],
                              }),
                            ];
                          },
                          function () {
                            return [
                              React.createElement(OSWidgets.List, {
                                animateItems: true,
                                gridProperties: {
                                  classes: 'OSFillParent',
                                },
                                mode: /*Default*/ 0,
                                onScrollEnding: function () {
                                  return Promise.resolve().then(function () {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(
                                      function () {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);

                                        OutSystemsDebugger.setThreadStartName(
                                          eventHandlerContext.id,
                                          'Directory_Locality/Locality_Subdivisions/Subdivision_List OnScrollEnding',
                                        );
                                        return controller.onScrollEnding_RefreshSubdivisions$Action(
                                          controller.callContext(eventHandlerContext),
                                        );
                                      },
                                      function () {
                                        controller.popDebuggerContext(eventHandlerContext);
                                      },
                                    );
                                  });
                                },
                                source: model.variables.subdivision_Card_ListVar,
                                style: 'list list-group list--gap-s',
                                tag: 'div',
                                _idProps: {
                                  service: idService,
                                  name: 'Subdivision_List',
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
                                              uuid: '4',
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: [
                                              asPrimitiveValue(
                                                model.variables.subdivision_Card_ListVar.getCurrent(
                                                  callContext.iterationContext,
                                                ).subdivision_Card_ContentAttr,
                                              ),
                                              asPrimitiveValue(
                                                model.variables.subdivision_Card_ListVar.getCurrent(
                                                  callContext.iterationContext,
                                                ).subdivisionIdAttr,
                                              ),
                                            ],
                                          },
                                          React.createElement(
                                            UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvc_view,
                                            {
                                              inputs: {
                                                In_CardTypeId: UBTConnectModel.staticEntities.uBT_ImageCardType.list,
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
                                                      controller.onClick_NavigateToSubdivision$Action(
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
                                                uuid: '5',
                                                alias: '4',
                                              },
                                              _widgetRecordProvider: widgetsRecordProvider,
                                              placeholders: {
                                                lazyImage_Placeholder: new PlaceholderContent(function () {
                                                  return [
                                                    React.createElement(
                                                      UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view,
                                                      {
                                                        inputs: {
                                                          EntityType:
                                                            UBTConnectModel.staticEntities.connect_Entity
                                                              .supperMeetings_aka_Subdivisions,
                                                          ImageSize: model.getCachedValue(
                                                            idService.getId('3D8Zrj3Vs06yNsEWw9Pcpw.ImageSize'),
                                                            function () {
                                                              return (function () {
                                                                var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
                                                                rec.widthAttr =
                                                                  UBTConnectModel.staticEntities.uBT_ImageSize.maxWidth_100vw;
                                                                return rec;
                                                              })();
                                                            },
                                                          ),
                                                          EntityId: OS.BuiltinFunctions.longIntegerToText(
                                                            model.variables.subdivision_Card_ListVar.getCurrent(
                                                              callContext.iterationContext,
                                                            ).subdivisionIdAttr,
                                                          ),
                                                          HasErrorMessage: true,
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
                                                          uuid: '6',
                                                          alias: '5',
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        _dependencies: [],
                                                      },
                                                    ),
                                                  ];
                                                }),
                                                placeholder_ImageTag: PlaceholderContent.Empty,
                                                avatarList: PlaceholderContent.Empty,
                                                placeholder_Content: new PlaceholderContent(function () {
                                                  return [
                                                    React.createElement(
                                                      UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_mvc_view,
                                                      {
                                                        inputs: {
                                                          In_Subdivision_CardContent:
                                                            model.variables.subdivision_Card_ListVar.getCurrent(
                                                              callContext.iterationContext,
                                                            ).subdivision_Card_ContentAttr,
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
                                                asPrimitiveValue(
                                                  model.variables.subdivision_Card_ListVar.getCurrent(
                                                    callContext.iterationContext,
                                                  ).subdivision_Card_ContentAttr,
                                                ),
                                                asPrimitiveValue(
                                                  model.variables.subdivision_Card_ListVar.getCurrent(
                                                    callContext.iterationContext,
                                                  ).subdivisionIdAttr,
                                                ),
                                              ],
                                            },
                                          ),
                                        ),
                                      ];
                                    },
                                    callContext,
                                    idService,
                                    '1',
                                  ),
                                },
                                _dependencies: [],
                              }),
                            ];
                          },
                        ),
                      ];
                    }),
                  },
                  _dependencies: [
                    asPrimitiveValue(model.variables.subdivision_Card_List_IsLoadingVar),
                    asPrimitiveValue(model.variables.subdivision_Card_ListVar),
                  ],
                }),
              ];
            }),
          },
          _dependencies: [
            asPrimitiveValue(model.variables.subdivision_Card_List_IsLoadingVar),
            asPrimitiveValue(model.variables.subdivision_Card_ListVar),
          ],
        }),
      );
    };
    return View;
  })(OSView.BaseView.BaseWebBlock);

  return View;
});
define('UBTConnect.Directory_Locality.Locality_Subdivisions.mvc$controller', [
  'OutSystems/ClientRuntime/Main',
  'UBTConnect.model',
  'UBTConnect.controller',
  'Connect_Subdivision_CS.model',
  'UBTConnectLibrary.model',
  'UBTConnect_Utils.controller',
  'NavigationHandler.controller',
  'UBTConnect.languageResources',
  'UBTConnect.clientVariables',
  'UBTConnect.Directory_Locality.Locality_Subdivisions.mvc$debugger',
  'UBTConnect.Directory_Locality.Locality_Subdivisions.mvc$controller.ScreenEvent_OnReady.IsViewRestoredFromCacheJS',
  'Connect_Subdivision_CS.model$UI_Subdivision_CardRec',
  'UBTConnect.referencesHealth',
  'UBTConnect.referencesHealth$Connect_Subdivision_CS',
  'UBTConnect.model$UI_Subdivision_CardList',
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
  'UBTConnectLibrary.model$LazyImageSizeRec',
  'Connect_Subdivision_CS.model$UI_Subdivision_Card_ContentRec',
  'UBTConnect.controller$GetSkeletonList_UI_SubdivisionCard',
  'UBTConnect_Utils.controller$GetHasCarouselEnabled',
  'UBTConnect.referencesHealth$UBTConnect_Utils',
  'NavigationHandler.controller$SetPreloadObject',
  'UBTConnect.referencesHealth$NavigationHandler',
  'UBTConnect.model$PreloadedSupperMeetingsRec',
], function (
  OutSystems,
  UBTConnectModel,
  UBTConnectController,
  Connect_Subdivision_CSModel,
  UBTConnectLibraryModel,
  UBTConnect_UtilsController,
  NavigationHandlerController,
  UBTConnectLanguageResources,
  UBTConnectClientVariables,
  UBTConnect_Directory_Locality_Locality_Subdivisions_mvc_Debugger,
  UBTConnect_Directory_Locality_Locality_Subdivisions_mvc_controller_ScreenEvent_OnReady_IsViewRestoredFromCacheJS,
) {
  var OS = OutSystems.Internal;
  var Controller = (function (_super) {
    __extends(Controller, _super);
    function Controller() {
      _super.apply(this, arguments);
      var controller = this.controller;
      this.clientActionProxies = {};
      this.dataFetchDependenciesOriginal = {
        get_Subdivision_List$DataActRefresh: -1,
      };
      this.dataFetchDependentsGraph = {
        get_Subdivision_List$DataActRefresh: [],
      };
      this.shouldSendClientVarsToDataSources = false;
    }
    // Server Actions

    // Aggregates and Data Actions
    Controller.prototype.get_Subdivision_List$DataActRefresh = function (callContext) {
      var model = this.model;
      var controller = this.controller;
      var callContext = controller.callContext(callContext);
      return OS.Flow.tryFinally(
        function () {
          var varBag = {};
          controller.pushDebuggerContext(callContext);

          OutSystemsDebugger.push(
            'ZK4RCP5OdEuntYI2VRpwBA:byh4z68qVkOJ3BCFTEB57A:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.cvXKi07rbkqrhpgeDJd8rQ/DataActions.byh4z68qVkOJ3BCFTEB57A:7rsbnTGXj7BvnBDLowPM4w',
            'UBTConnect',
            'Get_Subdivision_List',
            'NRFlows.DataScreenActionFlow',
            callContext.id,
            varBag,
          );
          OutSystemsDebugger.setThreadStartName(
            callContext.id,
            'Directory_Locality/Locality_Subdivisions/Get_Subdivision_List',
          );
          return controller
            .callDataAction(
              'DataActionGet_Subdivision_List',
              'screenservices/UBTConnect/Directory_Locality/Locality_Subdivisions/DataActionGet_Subdivision_List',
              'VhZzNw19PYqeJxRVF_B+lg',
              function (b) {
                model.variables.get_Subdivision_ListDataAct.dataFetchStatusAttr = b;
              },
              function (json) {
                model.variables.get_Subdivision_ListDataAct.replaceWith(
                  OS.DataConversion.ServerDataConverter.from(
                    json,
                    model.variables.get_Subdivision_ListDataAct.constructor,
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
                'Directory_Locality/Locality_Subdivisions/Get_Subdivision_List On After Fetch',
              );
              controller._onAfterFetch_Get_Subdivision_List$Action(controller.callContext(callContext));
            });
        },
        function () {
          OutSystemsDebugger.pop('ZK4RCP5OdEuntYI2VRpwBA:byh4z68qVkOJ3BCFTEB57A', callContext.id);
          controller.popDebuggerContext(callContext);
        },
      );
    };

    Controller.prototype.dataFetchActionNames = ['get_Subdivision_List$DataActRefresh'];
    // Client Actions
    Controller.prototype._onAfterFetch_Get_Subdivision_List$Action = function (callContext) {
      var varBag = {};
      var model = this.model;
      var controller = this.controller;
      var idService = this.idService;
      varBag.model = model;
      varBag.idService = idService;
      controller.ensureControllerAlive('OnAfterFetch_Get_Subdivision_List');
      callContext = controller.callContext(callContext);
      varBag.callContext = callContext;
      try {
        OutSystemsDebugger.push(
          'ZK4RCP5OdEuntYI2VRpwBA:0_j0fQJAMEuvhHzZze0O2g:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.cvXKi07rbkqrhpgeDJd8rQ/ClientActions.0_j0fQJAMEuvhHzZze0O2g:Wfws1E4_F9jNqtFBhalF6A',
          'UBTConnect',
          'OnAfterFetch_Get_Subdivision_List',
          'NRFlows.ClientScreenActionFlow',
          callContext.id,
          varBag,
        );
        OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:zyf2vnDus0Oimdj5StnnwA', callContext.id);
        if (
          OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:Crm9iHW+VkCLnpTZKcbnWw', callContext.id) &&
          model.variables.subdivision_Card_List_IsLoadingVar
        ) {
          OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:766G6TQFj0qSOAdLnfXNmA', callContext.id);
          // Subdivision_Card_List_IsLoading = False
          model.variables.subdivision_Card_List_IsLoadingVar = false;
          OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:UUwNOYVI7ECLfdFNQKAGTg', callContext.id);
          // Execute Action: ListClear
          OS.SystemActions.listClear(model.variables.subdivision_Card_ListVar, callContext);
        }

        OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:1jlhz1AUYU2phaE5RxW6CA', callContext.id);
        // Execute Action: ListAppendAll
        OS.SystemActions.listAppendAll(
          model.variables.subdivision_Card_ListVar,
          model.variables.get_Subdivision_ListDataAct.out_Subdivision_Card_ListOut,
          callContext,
        );
        OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:pWPaI1TDx020S+OkMi7cmw', callContext.id);
      } catch (ex) {
        OutSystemsDebugger.handleException(ex, callContext.id);
        throw ex;
      } finally {
        OutSystemsDebugger.pop('ZK4RCP5OdEuntYI2VRpwBA:0_j0fQJAMEuvhHzZze0O2g', callContext.id);
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
      var getSkeletonList_UI_SubdivisionCardVar = new OS.DataTypes.VariableHolder();
      var isViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
      varBag.callContext = callContext;
      varBag.getSkeletonList_UI_SubdivisionCardVar = getSkeletonList_UI_SubdivisionCardVar;
      varBag.isViewRestoredFromCacheJSResult = isViewRestoredFromCacheJSResult;
      OutSystemsDebugger.push(
        'ZK4RCP5OdEuntYI2VRpwBA:+LF_rYkFsU2ev2ncXxscxA:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.cvXKi07rbkqrhpgeDJd8rQ/ClientActions.+LF_rYkFsU2ev2ncXxscxA:G7yklZhJIacTxChN9hrkZg',
        'UBTConnect',
        'ScreenEvent_OnReady',
        'NRFlows.ClientScreenActionFlow',
        callContext.id,
        varBag,
      );
      OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:ZGm9wHR69ki38cguUw5xCg', callContext.id);
      return OS.Flow.executeAsyncFlow(function () {
        OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:YEbLTPCNw0aJ6SFP4ilFBQ', callContext.id);
        isViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(
          UBTConnect_Directory_Locality_Locality_Subdivisions_mvc_controller_ScreenEvent_OnReady_IsViewRestoredFromCacheJS,
          'IsViewRestoredFromCache',
          'ScreenEvent_OnReady',
          {
            IsRestoredFromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
          },
          function ($parameters) {
            var jsNodeResult = new (controller.constructor.getVariableGroupType(
              'UBTConnect.Directory_Locality.Locality_Subdivisions.ScreenEvent_OnReady$isViewRestoredFromCacheJSResult',
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
            OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:M3eSiL7gQEGRAsLM+g69Vg', callContext.id) &&
            isViewRestoredFromCacheJSResult.value.isRestoredFromCacheOut === true
          ) {
            OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:w2R8kr6o10CuIlIcbVTHSw', callContext.id);
          } else {
            OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:2InoRILd_U2QKjBOXmpTnA', callContext.id);
            // Execute Action: GetSkeletonList_UI_SubdivisionCard
            getSkeletonList_UI_SubdivisionCardVar.value =
              UBTConnectController.default.getSkeletonList_UI_SubdivisionCard$Action(10, callContext);

            OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:vLMOrhDi_0qi65pHo+HH8w', callContext.id);
            // Subdivision_Card_List = GetSkeletonList_UI_SubdivisionCard.UI_SubdivisionHouseholds
            model.variables.subdivision_Card_ListVar =
              getSkeletonList_UI_SubdivisionCardVar.value.uI_SubdivisionHouseholdsOut;
            OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:aSm1sPv7u0GCPR4LkknxeQ', callContext.id);
            // Refresh Query: Get_Subdivision_List
            var result = controller.get_Subdivision_List$DataActRefresh(callContext);
            model.flush();
            return result.then(function () {
              OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:dGDSx9VRBkOsaRxW6OgRsg', callContext.id);
            });
          }
        });
      })
        .then(function (res) {
          OutSystemsDebugger.pop('ZK4RCP5OdEuntYI2VRpwBA:+LF_rYkFsU2ev2ncXxscxA', callContext.id);
          return res;
        })
        .catch(function (ex) {
          OutSystemsDebugger.handleException(ex, callContext.id);
          OutSystemsDebugger.pop('ZK4RCP5OdEuntYI2VRpwBA:+LF_rYkFsU2ev2ncXxscxA', callContext.id);
          throw ex;
        });
    };
    Controller.registerVariableGroupType(
      'UBTConnect.Directory_Locality.Locality_Subdivisions.ScreenEvent_OnReady$isViewRestoredFromCacheJSResult',
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
    Controller.prototype._onClick_NavigateToSubdivision$Action = function (callContext) {
      var varBag = {};
      var model = this.model;
      var controller = this.controller;
      var idService = this.idService;
      varBag.model = model;
      varBag.idService = idService;
      controller.ensureControllerAlive('OnClick_NavigateToSubdivision');
      callContext = controller.callContext(callContext);
      var vars = new OS.DataTypes.VariableHolder(
        new (controller.constructor.getVariableGroupType(
          'UBTConnect.Directory_Locality.Locality_Subdivisions.OnClick_NavigateToSubdivision$vars',
        ))(),
      );
      var getHasCarouselEnabledVar = new OS.DataTypes.VariableHolder();
      varBag.callContext = callContext;
      varBag.vars = vars;
      varBag.getHasCarouselEnabledVar = getHasCarouselEnabledVar;
      try {
        OutSystemsDebugger.push(
          'ZK4RCP5OdEuntYI2VRpwBA:yGeYsT7HZk2+hIsCL6D5xw:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.cvXKi07rbkqrhpgeDJd8rQ/ClientActions.yGeYsT7HZk2+hIsCL6D5xw:6fFRodxYW0fZTaN_MDDWJQ',
          'UBTConnect',
          'OnClick_NavigateToSubdivision',
          'NRFlows.ClientScreenActionFlow',
          callContext.id,
          varBag,
        );
        OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:wzgsBJxShEeS7L+QyBWqAg', callContext.id);
        OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:NvTTY26uI02RBFU_CzoGNA', callContext.id);
        // Execute Action: GetHasCarouselEnabled
        getHasCarouselEnabledVar.value = UBTConnect_UtilsController.default.getHasCarouselEnabled$Action(callContext);

        if (
          OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:tmDOWZJtokWy2q5wKGZEHA', callContext.id) &&
          getHasCarouselEnabledVar.value.hasCarouselEnabledOut
        ) {
          OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:VcI4lju5fEKDhAeZuAv2xA', callContext.id);
          // PreloadedSupperMeetings.SupperMeetingIds = Get_Subdivision_List.Out_Subdivision_Card_List
          vars.value.preloadedSupperMeetingsVar.supperMeetingIdsAttr =
            OS.DataConversion.JSConversions.typeConvertRecordList(
              model.variables.get_Subdivision_ListDataAct.out_Subdivision_Card_ListOut,
              new OS.DataTypes.LongIntegerList(),
              function (source, target) {
                target = source.subdivisionIdAttr;
                return target;
              },
            );
          OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:whF69Ku0B0S+ShYssQw8bg', callContext.id);
          // Execute Action: SetPreloadObject
          NavigationHandlerController.default.setPreloadObject$Action(
            OS.BuiltinFunctions.toObject(vars.value.preloadedSupperMeetingsVar),
            callContext,
          );
          OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:UsENmzmhAkWMXiMxwsgl1g', callContext.id);
          // Destination: /UBTConnect/SupperMeeting_Carousel
          return OS.Navigation.navigateTo(
            OS.Navigation.generateScreenURL('/UBTConnect/SupperMeeting_Carousel', {
              In_StartingSupperMeetingId: OS.DataConversion.ServerDataConverter.asString(
                model.variables.subdivision_Card_ListVar.getCurrent(callContext.iterationContext).subdivisionIdAttr,
                OS.DataTypes.DataTypes.LongInteger,
              ),
            }),
            OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
            callContext,
            true,
          );
        } else {
          OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:au5rs7EVZkCQS1XBAPArGw', callContext.id);
          // Destination: /UBTConnect/SupperMeeting_Details
          return OS.Navigation.navigateTo(
            OS.Navigation.generateScreenURL('/UBTConnect/SupperMeeting_Details', {
              In_SubdivsionId: OS.DataConversion.ServerDataConverter.asString(
                model.variables.subdivision_Card_ListVar.getCurrent(callContext.iterationContext).subdivisionIdAttr,
                OS.DataTypes.DataTypes.LongInteger,
              ),
            }),
            OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
            callContext,
            true,
          );
        }
      } catch (ex) {
        OutSystemsDebugger.handleException(ex, callContext.id);
        throw ex;
      } finally {
        OutSystemsDebugger.pop('ZK4RCP5OdEuntYI2VRpwBA:yGeYsT7HZk2+hIsCL6D5xw', callContext.id);
      }
    };
    Controller.registerVariableGroupType(
      'UBTConnect.Directory_Locality.Locality_Subdivisions.OnClick_NavigateToSubdivision$vars',
      [
        {
          name: 'PreloadedSupperMeetings',
          attrName: 'preloadedSupperMeetingsVar',
          mandatory: false,
          dataType: OS.DataTypes.DataTypes.Record,
          defaultValue: function () {
            return new UBTConnectModel.PreloadedSupperMeetingsRec();
          },
          complexType: UBTConnectModel.PreloadedSupperMeetingsRec,
        },
      ],
    );
    Controller.prototype._onScrollEnding_RefreshSubdivisions$Action = function (callContext) {
      var varBag = {};
      var model = this.model;
      var controller = this.controller;
      var idService = this.idService;
      varBag.model = model;
      varBag.idService = idService;
      controller.ensureControllerAlive('OnScrollEnding_RefreshSubdivisions');
      callContext = controller.callContext(callContext);
      var vars = new OS.DataTypes.VariableHolder(
        new (controller.constructor.getVariableGroupType(
          'UBTConnect.Directory_Locality.Locality_Subdivisions.OnScrollEnding_RefreshSubdivisions$vars',
        ))(),
      );
      varBag.callContext = callContext;
      varBag.vars = vars;
      OutSystemsDebugger.push(
        'ZK4RCP5OdEuntYI2VRpwBA:4P36wJIClEusUZDXCOy0dg:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.cvXKi07rbkqrhpgeDJd8rQ/ClientActions.4P36wJIClEusUZDXCOy0dg:GxG9843mHDjgXXphgSH3vA',
        'UBTConnect',
        'OnScrollEnding_RefreshSubdivisions',
        'NRFlows.ClientScreenActionFlow',
        callContext.id,
        varBag,
      );
      OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:D5tddhK8_UmdlMArwEWEhw', callContext.id);
      return OS.Flow.executeAsyncFlow(function () {
        return OS.Flow.executeSequence(function () {
          if (
            OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:zPm4pW1r5kqr5JVXiWszUg', callContext.id) &&
            model.variables.isPaginatedVar
          ) {
            return OS.Flow.executeSequence(function () {
              if (
                OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:7mbEDTbHxUu6LAXsXxp2Cg', callContext.id) &&
                model.variables.get_Subdivision_ListDataAct.isDataFetchedAttr
              ) {
                return OS.Flow.executeSequence(function () {
                  if (
                    OutSystemsDebugger.handleBreakpoint(
                      'ZK4RCP5OdEuntYI2VRpwBA:QuMRCHYx9024tTFThdM_HQ',
                      callContext.id,
                    ) &&
                    model.variables.get_Subdivision_ListDataAct.out_Subdivision_Card_ListOut.length >=
                      model.variables.getSubdivisions_OffsetVar
                  ) {
                    // MaxRecords += IncrementRecords
                    OutSystemsDebugger.handleBreakpoint(
                      'ZK4RCP5OdEuntYI2VRpwBA:tXOuGrqlUEWzg1oqavOXZg',
                      callContext.id,
                    );
                    // GetSubdivisions_StartIndex = GetSubdivisions_StartIndex + GetSubdivisions_Offset
                    model.variables.getSubdivisions_StartIndexVar =
                      model.variables.getSubdivisions_StartIndexVar + model.variables.getSubdivisions_OffsetVar;
                    OutSystemsDebugger.handleBreakpoint(
                      'ZK4RCP5OdEuntYI2VRpwBA:zklZp+vpPkea5N4FvrRkeA',
                      callContext.id,
                    );
                    // Refresh Query: Get_Subdivision_List
                    var result = controller.get_Subdivision_List$DataActRefresh(callContext);
                    model.flush();
                    return result.then(function () {
                      OutSystemsDebugger.handleBreakpoint(
                        'ZK4RCP5OdEuntYI2VRpwBA:Z4uf_i+3ekKd9XVXo1eGAw',
                        callContext.id,
                      );
                    });
                  } else {
                    OutSystemsDebugger.handleBreakpoint(
                      'ZK4RCP5OdEuntYI2VRpwBA:OFd0c29VVkqWDSGnhdAMMQ',
                      callContext.id,
                    );
                  }
                });
              } else {
                OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:LEoiujCibke_qXU3HSxXrQ', callContext.id);
              }
            });
          } else {
            OutSystemsDebugger.handleBreakpoint('ZK4RCP5OdEuntYI2VRpwBA:PBJSpiNDg0et5p+tYHZMww', callContext.id);
          }
        });
      })
        .then(function (res) {
          OutSystemsDebugger.pop('ZK4RCP5OdEuntYI2VRpwBA:4P36wJIClEusUZDXCOy0dg', callContext.id);
          return res;
        })
        .catch(function (ex) {
          OutSystemsDebugger.handleException(ex, callContext.id);
          OutSystemsDebugger.pop('ZK4RCP5OdEuntYI2VRpwBA:4P36wJIClEusUZDXCOy0dg', callContext.id);
          throw ex;
        });
    };
    Controller.registerVariableGroupType(
      'UBTConnect.Directory_Locality.Locality_Subdivisions.OnScrollEnding_RefreshSubdivisions$vars',
      [
        {
          name: 'IncrementRecords',
          attrName: 'incrementRecordsVar',
          mandatory: false,
          dataType: OS.DataTypes.DataTypes.Integer,
          defaultValue: function () {
            return 20;
          },
        },
      ],
    );

    Controller.prototype.onAfterFetch_Get_Subdivision_List$Action = function (callContext) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(controller._onAfterFetch_Get_Subdivision_List$Action, callContext);
    };
    Controller.prototype.screenEvent_OnReady$Action = function (callContext) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(controller._screenEvent_OnReady$Action, callContext);
    };
    Controller.prototype.onClick_NavigateToSubdivision$Action = function (callContext) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(controller._onClick_NavigateToSubdivision$Action, callContext);
    };
    Controller.prototype.onScrollEnding_RefreshSubdivisions$Action = function (callContext) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(controller._onScrollEnding_RefreshSubdivisions$Action, callContext);
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
        'ZK4RCP5OdEuntYI2VRpwBA:cvXKi07rbkqrhpgeDJd8rQ:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.cvXKi07rbkqrhpgeDJd8rQ:A5Lo2gLeCw1wl8z68p7K4w',
        'UBTConnect',
        'Locality_Subdivisions',
        'NRNodes.WebBlock',
        callContext.id,
        varBag,
      );
    };
    Controller.prototype.popDebuggerContext = function (callContext) {
      OutSystemsDebugger.pop('ZK4RCP5OdEuntYI2VRpwBA:cvXKi07rbkqrhpgeDJd8rQ', callContext.id);
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

          OutSystemsDebugger.setThreadStartName(callContext.id, 'Directory_Locality/Locality_Subdivisions On Ready');
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
define('UBTConnect.Directory_Locality.Locality_Subdivisions.mvc$controller.ScreenEvent_OnReady.IsViewRestoredFromCacheJS', [], function () {
  return function ($parameters, $actions, $roles, $public) {
    $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache();
  };
});

define('UBTConnect.Directory_Locality.Locality_Subdivisions.mvc$debugger', [
  'exports',
  'OutSystems/ClientRuntime/Debugger',
  'OutSystems/ClientRuntime/Main',
], function (exports, Debugger, OutSystems) {
  var OS = OutSystems.Internal;
  var metaInfo = {
    '2InoRILd_U2QKjBOXmpTnA': {
      getter: function (varBag, idService) {
        return varBag.getSkeletonList_UI_SubdivisionCardVar.value;
      },
    },
    YEbLTPCNw0aJ6SFP4ilFBQ: {
      getter: function (varBag, idService) {
        return varBag.isViewRestoredFromCacheJSResult.value;
      },
    },
    bBiiybGYvkaWP1eGy2MPxw: {
      getter: function (varBag, idService) {
        return varBag.vars.value.preloadedSupperMeetingsVar;
      },
    },
    NvTTY26uI02RBFU_CzoGNA: {
      getter: function (varBag, idService) {
        return varBag.getHasCarouselEnabledVar.value;
      },
    },
    s5f2eM3PzU2onEFks6tdPw: {
      getter: function (varBag, idService) {
        return varBag.vars.value.incrementRecordsVar;
      },
      dataType: OS.DataTypes.DataTypes.Integer,
    },
    '9CIBbjZAekaNZd8Di0P5fw': {
      getter: function (varBag, idService) {
        return varBag.model.variables.getSubdivisions_StartIndexVar;
      },
      dataType: OS.DataTypes.DataTypes.Integer,
    },
    t9ndozUsekSoDWQNxx4LoQ: {
      getter: function (varBag, idService) {
        return varBag.model.variables.getSubdivisions_OffsetVar;
      },
      dataType: OS.DataTypes.DataTypes.Integer,
    },
    'PHKqBj1CkkqhnRv+ubsh2w': {
      getter: function (varBag, idService) {
        return varBag.model.variables.subdivision_Card_ListVar;
      },
    },
    '0vJKBJ4FbU2E2BYp5voCdw': {
      getter: function (varBag, idService) {
        return varBag.model.variables.subdivision_Card_List_IsLoadingVar;
      },
      dataType: OS.DataTypes.DataTypes.Boolean,
    },
    h_oK1k56QkCfbI8wt9fODw: {
      getter: function (varBag, idService) {
        return varBag.model.variables.isPaginatedVar;
      },
      dataType: OS.DataTypes.DataTypes.Boolean,
    },
    '7EeIXZeIYk+mTylX2F0wdA': {
      getter: function (varBag, idService) {
        return varBag.model.variables.localityIdIn;
      },
      dataType: OS.DataTypes.DataTypes.LongInteger,
    },
    byh4z68qVkOJ3BCFTEB57A: {
      getter: function (varBag, idService) {
        return varBag.model.variables.get_Subdivision_ListDataAct;
      },
    },
    '1jpamo6wgkm3pxKbFNqxYg': {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId('Placeholder_LoadingSection'));
        })(varBag.model, idService);
      },
    },
    wQ7b5pFY4EeeQRY8ptH6gg: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId('Block_SubdivisionListWrapper'));
        })(varBag.model, idService);
      },
    },
    '4_wW8fASlUOz5zwAxUOvlA': {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId('Content'));
        })(varBag.model, idService);
      },
    },
    '0m7rTkA9bEaLomfNR_JkFA': {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId('Empty'));
        })(varBag.model, idService);
      },
    },
    ESXrCauqo0StyTfKPEuytg: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId('EmptyState'));
        })(varBag.model, idService);
      },
    },
    '0HgaTnx27EiDkouZiaDC3g': {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId('Subdivision_List'));
        })(varBag.model, idService);
      },
    },
    'T6wVntJg9U+_hVdbWw_4Ww': {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId('LazyImage_Placeholder'));
        })(varBag.model, idService);
      },
    },
    PqQ3_ETV3kyj45BLzGv1oQ: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId('Placeholder_ImageTag'));
        })(varBag.model, idService);
      },
    },
    VZbhHCew30G4O560UNvyJA: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId('AvatarList'));
        })(varBag.model, idService);
      },
    },
    gGJzPuPB10azhOO33xEcXg: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId('Placeholder_Content'));
        })(varBag.model, idService);
      },
    },
  };
  OutSystemsDebugger.registerMetaInfo(metaInfo);
});
