define("Connect2_Assemble_MUI.Assemble.AssembleEventDetail.mvc$model", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_Assemble_MUI.model",
  "Connect2_Assemble_CS.model",
  "APIDomain_Directory_IS.model",
  "Connect2_Assemble_MUI.controller",
  "Connect2_LegacyShared.controller",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail__Error.mvc$model",
  "Connect2_Assemble_MUI.AssembleSkeleton.AssembleSummaryDetailHeader_Skeleton.mvc$model",
  "Connect2_LegacyShared.NewConnect_Skeleton.NC_Card_Item_Text__Skeleton.mvc$model",
  "Connect2_Assemble_MUI.Assemble.AssembleSummaryCard.mvc$model",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_Section.mvc$model",
  "Connect2_LegacyShared.Utility.ShowMoreShowLessContainer.mvc$model",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivisionList_Skelet.mvc$model",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_LocalitiesList.mvc$model",
  "Connect2_LegacyShared.NewConnect_Skeleton.NC_Result_Item__Image__Skeleton.mvc$model",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_ContactList.mvc$model",
  "Connect2_Assemble_CS.model$AssembleEventSummaryRec",
  "Connect2_Assemble_MUI.referencesHealth",
  "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS",
  "Connect2_Assemble_CS.model$AssembleEventTypeRec",
  "Connect2_Assemble_CS.model$LocalityDetailsRec",
  "Connect2_Assemble_MUI.model$LocalityDetailsList",
  "Connect2_Assemble_CS.model$AssembleAttendeeSubdivisionRec",
  "Connect2_Assemble_MUI.model$AssembleAttendeeSubdivisionList",
  "Connect2_Assemble_CS.model$AssembleAttendeeGuestRec",
  "Connect2_Assemble_MUI.model$AssembleAttendeeGuestList",
  "APIDomain_Directory_IS.model$PhotoURLRec",
  "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS",
  "Connect2_Assemble_MUI.controller$GetIANATimezone",
  "Connect2_Assemble_MUI.controller$OffsetDateTimeByUserUTCOffset",
  "Connect2_LegacyShared.controller$ShowUnknownErrorMessage",
  "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared",
  "Connect2_Assemble_MUI.controller$GetUnavailableEventErrorMessage",
  "Connect2_Assemble_CS.model$AssembleEventRec",
], function (
  OutSystems,
  Connect2_Assemble_MUIModel,
  Connect2_Assemble_CSModel,
  APIDomain_Directory_ISModel,
  Connect2_Assemble_MUIController,
  Connect2_LegacySharedController,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail__Error_mvcModel,
  Connect2_Assemble_MUI_AssembleSkeleton_AssembleSummaryDetailHeader_Skeleton_mvcModel,
  Connect2_LegacyShared_NewConnect_Skeleton_NC_Card_Item_Text__Skeleton_mvcModel,
  Connect2_Assemble_MUI_Assemble_AssembleSummaryCard_mvcModel,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_Section_mvcModel,
  Connect2_LegacyShared_Utility_ShowMoreShowLessContainer_mvcModel,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_AttendeeSubdivisionList_Skelet_mvcModel,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_LocalitiesList_mvcModel,
  Connect2_LegacyShared_NewConnect_Skeleton_NC_Result_Item__Image__Skeleton_mvcModel,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_ContactList_mvcModel,
) {
  var OS = OutSystems.Internal;

  var GetAssembleEventDataActRec = (function (_super) {
    __extends(GetAssembleEventDataActRec, _super);
    function GetAssembleEventDataActRec(defaults) {
      _super.apply(this, arguments);
    }
    GetAssembleEventDataActRec.attributesToDeclare = function () {
      return [
        this.attr(
          "AssembleEvent",
          "assembleEventOut",
          "AssembleEvent",
          true,
          false,
          OS.DataTypes.DataTypes.Record,
          function () {
            return OS.DataTypes.ImmutableBase.getData(
              new Connect2_Assemble_CSModel.AssembleEventRec(),
            );
          },
          true,
          Connect2_Assemble_CSModel.AssembleEventRec,
        ),
        this.attr(
          "IsNotFound",
          "isNotFoundOut",
          "IsNotFound",
          true,
          false,
          OS.DataTypes.DataTypes.Boolean,
          function () {
            return false;
          },
          true,
        ),
      ].concat(_super.attributesToDeclare.call(this));
    };
    GetAssembleEventDataActRec.init();
    return GetAssembleEventDataActRec;
  })(OS.Model.DataSourceRecord);

  var VariablesRecord = (function (_super) {
    __extends(VariablesRecord, _super);
    function VariablesRecord(defaults) {
      _super.apply(this, arguments);
    }
    VariablesRecord.attributesToDeclare = function () {
      return [
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
          "DeviceTimezone",
          "deviceTimezoneVar",
          "DeviceTimezone",
          true,
          false,
          OS.DataTypes.DataTypes.Text,
          function () {
            return "";
          },
          false,
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
          "GetAssembleEvent",
          "getAssembleEventDataAct",
          "getAssembleEventDataAct",
          true,
          true,
          OS.DataTypes.DataTypes.Record,
          function () {
            return OS.DataTypes.ImmutableBase.getData(
              new GetAssembleEventDataActRec(),
            );
          },
          true,
          GetAssembleEventDataActRec,
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
            Connect2_Assemble_MUI_Assemble_AssembleEventDetail__Error_mvcModel.hasValidationWidgets ||
            Connect2_Assemble_MUI_AssembleSkeleton_AssembleSummaryDetailHeader_Skeleton_mvcModel.hasValidationWidgets ||
            Connect2_LegacyShared_NewConnect_Skeleton_NC_Card_Item_Text__Skeleton_mvcModel.hasValidationWidgets ||
            Connect2_Assemble_MUI_Assemble_AssembleSummaryCard_mvcModel.hasValidationWidgets ||
            Connect2_Assemble_MUI_Assemble_AssembleEventDetail_Section_mvcModel.hasValidationWidgets ||
            Connect2_LegacyShared_Utility_ShowMoreShowLessContainer_mvcModel.hasValidationWidgets ||
            Connect2_Assemble_MUI_Assemble_AssembleEventDetail_AttendeeSubdivisionList_Skelet_mvcModel.hasValidationWidgets ||
            Connect2_Assemble_MUI_Assemble_AssembleEventDetail_LocalitiesList_mvcModel.hasValidationWidgets ||
            Connect2_LegacyShared_NewConnect_Skeleton_NC_Result_Item__Image__Skeleton_mvcModel.hasValidationWidgets ||
            Connect2_Assemble_MUI_Assemble_AssembleEventDetail_ContactList_mvcModel.hasValidationWidgets;
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
    };
    return Model;
  })(OS.Model.BaseViewModel);
  return new OS.Model.ModelFactory(Model, "Assemble.AssembleEventDetail");
});
define("Connect2_Assemble_MUI.Assemble.AssembleEventDetail.mvc$view", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_Assemble_MUI.model",
  "Connect2_Assemble_MUI.controller",
  "Connect2_Assemble_CS.model",
  "APIDomain_Directory_IS.model",
  "Connect2_LegacyShared.controller",
  "react",
  "OutSystems/ReactView/Main",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail.mvc$model",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail.mvc$controller",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail__Error.mvc$view",
  "OutSystems/ReactWidgets/Main",
  "Connect2_Assemble_MUI.AssembleSkeleton.AssembleSummaryDetailHeader_Skeleton.mvc$view",
  "Connect2_LegacyShared.NewConnect_Skeleton.NC_Card_Item_Text__Skeleton.mvc$view",
  "Connect2_Assemble_MUI.Assemble.AssembleSummaryCard.mvc$view",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_Section.mvc$view",
  "Connect2_LegacyShared.Utility.ShowMoreShowLessContainer.mvc$view",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivisionList_Skelet.mvc$view",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_LocalitiesList.mvc$view",
  "Connect2_LegacyShared.NewConnect_Skeleton.NC_Result_Item__Image__Skeleton.mvc$view",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_ContactList.mvc$view",
  "Connect2_Assemble_CS.model$AssembleEventSummaryRec",
  "Connect2_Assemble_MUI.referencesHealth",
  "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS",
  "Connect2_Assemble_CS.model$AssembleEventTypeRec",
  "Connect2_Assemble_CS.model$LocalityDetailsRec",
  "Connect2_Assemble_MUI.model$LocalityDetailsList",
  "Connect2_Assemble_CS.model$AssembleAttendeeSubdivisionRec",
  "Connect2_Assemble_MUI.model$AssembleAttendeeSubdivisionList",
  "Connect2_Assemble_CS.model$AssembleAttendeeGuestRec",
  "Connect2_Assemble_MUI.model$AssembleAttendeeGuestList",
  "APIDomain_Directory_IS.model$PhotoURLRec",
  "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS",
  "Connect2_Assemble_MUI.controller$GetIANATimezone",
  "Connect2_Assemble_MUI.controller$OffsetDateTimeByUserUTCOffset",
  "Connect2_LegacyShared.controller$ShowUnknownErrorMessage",
  "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared",
  "Connect2_Assemble_MUI.controller$GetUnavailableEventErrorMessage",
  "Connect2_Assemble_CS.model$AssembleEventRec",
], function (
  OutSystems,
  Connect2_Assemble_MUIModel,
  Connect2_Assemble_MUIController,
  Connect2_Assemble_CSModel,
  APIDomain_Directory_ISModel,
  Connect2_LegacySharedController,
  React,
  OSView,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_mvc_model,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_mvc_controller,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail__Error_mvc_view,
  OSWidgets,
  Connect2_Assemble_MUI_AssembleSkeleton_AssembleSummaryDetailHeader_Skeleton_mvc_view,
  Connect2_LegacyShared_NewConnect_Skeleton_NC_Card_Item_Text__Skeleton_mvc_view,
  Connect2_Assemble_MUI_Assemble_AssembleSummaryCard_mvc_view,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_Section_mvc_view,
  Connect2_LegacyShared_Utility_ShowMoreShowLessContainer_mvc_view,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_AttendeeSubdivisionList_Skelet_mvc_view,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_LocalitiesList_mvc_view,
  Connect2_LegacyShared_NewConnect_Skeleton_NC_Result_Item__Image__Skeleton_mvc_view,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_ContactList_mvc_view,
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
    View.displayName = "Assemble.AssembleEventDetail";
    View.getCssDependencies = function () {
      return ["css/OutSystemsReactWidgets.css"];
    };
    View.getJsDependencies = function () {
      return [];
    };
    View.getBlocks = function () {
      return [
        Connect2_Assemble_MUI_Assemble_AssembleEventDetail__Error_mvc_view,
        Connect2_Assemble_MUI_AssembleSkeleton_AssembleSummaryDetailHeader_Skeleton_mvc_view,
        Connect2_LegacyShared_NewConnect_Skeleton_NC_Card_Item_Text__Skeleton_mvc_view,
        Connect2_Assemble_MUI_Assemble_AssembleSummaryCard_mvc_view,
        Connect2_Assemble_MUI_Assemble_AssembleEventDetail_Section_mvc_view,
        Connect2_LegacyShared_Utility_ShowMoreShowLessContainer_mvc_view,
        Connect2_Assemble_MUI_Assemble_AssembleEventDetail_AttendeeSubdivisionList_Skelet_mvc_view,
        Connect2_Assemble_MUI_Assemble_AssembleEventDetail_LocalitiesList_mvc_view,
        Connect2_LegacyShared_NewConnect_Skeleton_NC_Result_Item__Image__Skeleton_mvc_view,
        Connect2_Assemble_MUI_Assemble_AssembleEventDetail_ContactList_mvc_view,
      ];
    };
    Object.defineProperty(View.prototype, "modelFactory", {
      get: function () {
        return Connect2_Assemble_MUI_Assemble_AssembleEventDetail_mvc_model;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(View.prototype, "controllerFactory", {
      get: function () {
        return Connect2_Assemble_MUI_Assemble_AssembleEventDetail_mvc_controller;
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
        $if(
          model.variables.getAssembleEventDataAct.isNotFoundOut ||
            model.variables.getAssembleEventDataAct.assembleEventOut
              .assembleEventSummaryAttr.isUnavailableAttr,
          false,
          this,
          function () {
            return [
              React.createElement(
                Connect2_Assemble_MUI_Assemble_AssembleEventDetail__Error_mvc_view,
                {
                  inputs: {
                    Subtitle:
                      "This meeting might have been deleted or rescheduled, tap the Assemble icon on the bottom bar to refresh the page.",
                    Title: "Meeting not found",
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
                    uuid: "0",
                    alias: "1",
                  },
                  _widgetRecordProvider: widgetsRecordProvider,
                  placeholders: {
                    icon: new PlaceholderContent(function () {
                      return [
                        React.createElement(OSWidgets.Icon, {
                          icon: "flag",
                          iconSize: /*Twotimes*/ 1,
                          style: "icon connect-icon-search-off",
                          visible: true,
                          _idProps: {
                            service: idService,
                            uuid: "1",
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
          },
          function () {
            return [
              React.createElement(
                OSWidgets.Container,
                {
                  align: /*Default*/ 0,
                  animate: false,
                  style: "assemble-detail-content",
                  visible: true,
                  _idProps: {
                    service: idService,
                    uuid: "2",
                  },
                  _widgetRecordProvider: widgetsRecordProvider,
                },
                React.createElement(
                  OSWidgets.Container,
                  {
                    align: /*Default*/ 0,
                    animate: false,
                    visible: true,
                    _idProps: {
                      service: idService,
                      name: "DIV_DetailCard",
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                  },
                  $if(
                    !model.variables.isDataFetchedVar &&
                      model.variables.getAssembleEventDataAct.assembleEventOut
                        .assembleEventSummaryAttr.eventIdAttr ===
                        OS.BuiltinFunctions.nullTextIdentifier(),
                    false,
                    this,
                    function () {
                      return [
                        React.createElement(
                          Connect2_Assemble_MUI_AssembleSkeleton_AssembleSummaryDetailHeader_Skeleton_mvc_view,
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
                              uuid: "4",
                              alias: "2",
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                              placeholder_Image: new PlaceholderContent(
                                function () {
                                  return [
                                    React.createElement(
                                      Connect2_LegacyShared_NewConnect_Skeleton_NC_Card_Item_Text__Skeleton_mvc_view,
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
                                          uuid: "5",
                                          alias: "3",
                                        },
                                        _widgetRecordProvider:
                                          widgetsRecordProvider,
                                        _dependencies: [],
                                      },
                                    ),
                                  ];
                                },
                              ),
                              placeholder_SubtitleTop: new PlaceholderContent(
                                function () {
                                  return [
                                    React.createElement(
                                      OSWidgets.Container,
                                      {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        gridProperties: {
                                          classes: "ThemeGrid_Width9",
                                        },
                                        visible: true,
                                        _idProps: {
                                          service: idService,
                                          uuid: "6",
                                        },
                                        _widgetRecordProvider:
                                          widgetsRecordProvider,
                                      },
                                      React.createElement(
                                        Connect2_LegacyShared_NewConnect_Skeleton_NC_Card_Item_Text__Skeleton_mvc_view,
                                        {
                                          inputs: {
                                            ExtendedClass:
                                              "border-radius-bottom-none",
                                          },
                                          events: {
                                            _handleError: function (ex) {
                                              controller.handleError(ex);
                                            },
                                          },
                                          _validationProps: {
                                            validationService:
                                              validationService,
                                          },
                                          _idProps: {
                                            service: idService,
                                            uuid: "7",
                                            alias: "4",
                                          },
                                          _widgetRecordProvider:
                                            widgetsRecordProvider,
                                          _dependencies: [],
                                        },
                                      ),
                                    ),
                                  ];
                                },
                              ),
                              placeholder_Title: new PlaceholderContent(
                                function () {
                                  return [
                                    React.createElement(
                                      OSWidgets.Container,
                                      {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        gridProperties: {
                                          classes: "ThemeGrid_Width9",
                                        },
                                        visible: true,
                                        _idProps: {
                                          service: idService,
                                          uuid: "8",
                                        },
                                        _widgetRecordProvider:
                                          widgetsRecordProvider,
                                      },
                                      React.createElement(
                                        Connect2_LegacyShared_NewConnect_Skeleton_NC_Card_Item_Text__Skeleton_mvc_view,
                                        {
                                          inputs: {
                                            ExtendedClass:
                                              "border-radius-top-none border-radius-bottom-none",
                                          },
                                          events: {
                                            _handleError: function (ex) {
                                              controller.handleError(ex);
                                            },
                                          },
                                          _validationProps: {
                                            validationService:
                                              validationService,
                                          },
                                          _idProps: {
                                            service: idService,
                                            uuid: "9",
                                            alias: "5",
                                          },
                                          _widgetRecordProvider:
                                            widgetsRecordProvider,
                                          _dependencies: [],
                                        },
                                      ),
                                    ),
                                  ];
                                },
                              ),
                              placeholder_Subtitle_Bottom:
                                new PlaceholderContent(function () {
                                  return [
                                    React.createElement(
                                      OSWidgets.Container,
                                      {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        gridProperties: {
                                          classes: "ThemeGrid_Width9",
                                        },
                                        style: "",
                                        visible: true,
                                        _idProps: {
                                          service: idService,
                                          uuid: "10",
                                        },
                                        _widgetRecordProvider:
                                          widgetsRecordProvider,
                                      },
                                      React.createElement(
                                        Connect2_LegacyShared_NewConnect_Skeleton_NC_Card_Item_Text__Skeleton_mvc_view,
                                        {
                                          inputs: {
                                            ExtendedClass:
                                              "border-radius-top-none",
                                          },
                                          events: {
                                            _handleError: function (ex) {
                                              controller.handleError(ex);
                                            },
                                          },
                                          _validationProps: {
                                            validationService:
                                              validationService,
                                          },
                                          _idProps: {
                                            service: idService,
                                            uuid: "11",
                                            alias: "6",
                                          },
                                          _widgetRecordProvider:
                                            widgetsRecordProvider,
                                          _dependencies: [],
                                        },
                                      ),
                                    ),
                                  ];
                                }),
                              placeholder_Right: PlaceholderContent.Empty,
                              placeholder_Location: PlaceholderContent.Empty,
                            },
                            _dependencies: [],
                          },
                        ),
                      ];
                    },
                    function () {
                      return [
                        React.createElement(
                          Connect2_Assemble_MUI_Assemble_AssembleSummaryCard_mvc_view,
                          {
                            inputs: {
                              AssembleEventSummary:
                                model.variables.getAssembleEventDataAct
                                  .assembleEventOut.assembleEventSummaryAttr,
                              _assembleEventSummaryInDataFetchStatus:
                                OS.Model.calculateDataFetchStatus(
                                  model.variables.getAssembleEventDataAct
                                    .dataFetchStatusAttr,
                                ),
                              IsListItem: false,
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
                              uuid: "12",
                              alias: "7",
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: [],
                          },
                        ),
                      ];
                    },
                  ),
                ),
                React.createElement(
                  OSWidgets.Container,
                  {
                    align: /*Default*/ 0,
                    animate: false,
                    style: "padding-x-base",
                    visible: true,
                    _idProps: {
                      service: idService,
                      name: "DIV_Content",
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                  },
                  React.createElement(
                    Connect2_Assemble_MUI_Assemble_AssembleEventDetail_Section_mvc_view,
                    {
                      inputs: {
                        IsLoading: !model.variables.isDataFetchedVar,
                        IsVisible:
                          model.variables.getAssembleEventDataAct
                            .assembleEventOut.assembleEventSummaryAttr
                            .notesAttr !== "" ||
                          !model.variables.isDataFetchedVar,
                        _isVisibleInDataFetchStatus:
                          OS.Model.calculateDataFetchStatus(
                            model.variables.getAssembleEventDataAct
                              .dataFetchStatusAttr,
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
                        name: "Section_MeetingNotes",
                        alias: "8",
                      },
                      _widgetRecordProvider: widgetsRecordProvider,
                      placeholders: {
                        placeholder_Header: new PlaceholderContent(function () {
                          return [
                            React.createElement(
                              OSWidgets.Container,
                              {
                                align: /*Default*/ 0,
                                animate: false,
                                visible: true,
                                _idProps: {
                                  service: idService,
                                  name: "DIV_MeetingNotes__Title",
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                              },
                              "Meeting Note",
                            ),
                          ];
                        }),
                        placeholder_Content__Loading: new PlaceholderContent(
                          function () {
                            return [
                              React.createElement(
                                OSWidgets.Container,
                                {
                                  align: /*Default*/ 0,
                                  animate: false,
                                  style: "padding-y-s",
                                  visible: true,
                                  _idProps: {
                                    service: idService,
                                    uuid: "16",
                                  },
                                  _widgetRecordProvider: widgetsRecordProvider,
                                },
                                React.createElement(
                                  Connect2_LegacyShared_NewConnect_Skeleton_NC_Card_Item_Text__Skeleton_mvc_view,
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
                                      uuid: "17",
                                      alias: "9",
                                    },
                                    _widgetRecordProvider:
                                      widgetsRecordProvider,
                                    _dependencies: [],
                                  },
                                ),
                              ),
                            ];
                          },
                        ),
                        placeholder_Content: new PlaceholderContent(
                          function () {
                            return [
                              React.createElement(
                                OSWidgets.Container,
                                {
                                  align: /*Default*/ 0,
                                  animate: false,
                                  style: "margin-top-xs",
                                  visible: true,
                                  _idProps: {
                                    service: idService,
                                    name: "Div_EventNotes__Content",
                                  },
                                  _widgetRecordProvider: widgetsRecordProvider,
                                },
                                React.createElement(
                                  Connect2_LegacyShared_Utility_ShowMoreShowLessContainer_mvc_view,
                                  {
                                    inputs: {
                                      SectionHeaderId: idService.getId(
                                        "DIV_MeetingNotes__Title",
                                      ),
                                      MaximumNumberOfLines: 3,
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
                                      uuid: "19",
                                      alias: "10",
                                    },
                                    _widgetRecordProvider:
                                      widgetsRecordProvider,
                                    placeholders: {
                                      placeholder_Content:
                                        new PlaceholderContent(function () {
                                          return [
                                            React.createElement(
                                              OSWidgets.Expression,
                                              {
                                                value:
                                                  model.variables
                                                    .getAssembleEventDataAct
                                                    .assembleEventOut
                                                    .assembleEventSummaryAttr
                                                    .notesAttr,
                                                _idProps: {
                                                  service: idService,
                                                  uuid: "20",
                                                },
                                                _widgetRecordProvider:
                                                  widgetsRecordProvider,
                                                value_dataFetchStatus:
                                                  OS.Model.calculateDataFetchStatus(
                                                    model.variables
                                                      .getAssembleEventDataAct
                                                      .dataFetchStatusAttr,
                                                  ),
                                              },
                                            ),
                                          ];
                                        }),
                                      showMoreLabel: new PlaceholderContent(
                                        function () {
                                          return ["Read more"];
                                        },
                                      ),
                                      showLessLabel: new PlaceholderContent(
                                        function () {
                                          return ["Show less"];
                                        },
                                      ),
                                    },
                                    _dependencies: [
                                      asPrimitiveValue(
                                        model.variables.getAssembleEventDataAct
                                          .dataFetchStatusAttr,
                                      ),
                                      asPrimitiveValue(
                                        model.variables.getAssembleEventDataAct
                                          .assembleEventOut
                                          .assembleEventSummaryAttr.notesAttr,
                                      ),
                                    ],
                                  },
                                ),
                              ),
                            ];
                          },
                        ),
                      },
                      _dependencies: [
                        asPrimitiveValue(
                          model.variables.getAssembleEventDataAct
                            .dataFetchStatusAttr,
                        ),
                        asPrimitiveValue(
                          model.variables.getAssembleEventDataAct
                            .assembleEventOut.assembleEventSummaryAttr
                            .notesAttr,
                        ),
                      ],
                    },
                  ),
                  React.createElement(
                    Connect2_Assemble_MUI_Assemble_AssembleEventDetail_Section_mvc_view,
                    {
                      inputs: {
                        IsVisible:
                          !model.variables.isDataFetchedVar ||
                          !model.variables.getAssembleEventDataAct
                            .assembleEventOut
                            .assembleAttendeeSubdivisionListAttr.isEmpty ||
                          !model.variables.getAssembleEventDataAct
                            .assembleEventOut
                            .assembleSpecialAttendeeSubdivisionListAttr
                            .isEmpty ||
                          !model.variables.getAssembleEventDataAct
                            .assembleEventOut
                            .assembleAttendeeSpecialGuestListAttr.isEmpty,
                        _isVisibleInDataFetchStatus:
                          OS.Model.calculateDataFetchStatus(
                            model.variables.getAssembleEventDataAct
                              .dataFetchStatusAttr,
                          ),
                        IsLoading: !model.variables.isDataFetchedVar,
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
                        name: "Section_Attendees",
                        alias: "11",
                      },
                      _widgetRecordProvider: widgetsRecordProvider,
                      placeholders: {
                        placeholder_Header: new PlaceholderContent(function () {
                          return ["Meeting Attendees"];
                        }),
                        placeholder_Content__Loading: new PlaceholderContent(
                          function () {
                            return [
                              React.createElement(
                                OSWidgets.Container,
                                {
                                  align: /*Default*/ 0,
                                  animate: false,
                                  style: "padding-y-s",
                                  visible: true,
                                  _idProps: {
                                    service: idService,
                                    uuid: "22",
                                  },
                                  _widgetRecordProvider: widgetsRecordProvider,
                                },
                                React.createElement(
                                  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_AttendeeSubdivisionList_Skelet_mvc_view,
                                  {
                                    inputs: {
                                      SkeletonListLength: 2,
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
                                      uuid: "23",
                                      alias: "12",
                                    },
                                    _widgetRecordProvider:
                                      widgetsRecordProvider,
                                    _dependencies: [],
                                  },
                                ),
                                React.createElement(
                                  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_AttendeeSubdivisionList_Skelet_mvc_view,
                                  {
                                    inputs: {
                                      SkeletonListLength: 2,
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
                                      uuid: "24",
                                      alias: "13",
                                    },
                                    _widgetRecordProvider:
                                      widgetsRecordProvider,
                                    _dependencies: [],
                                  },
                                ),
                              ),
                            ];
                          },
                        ),
                        placeholder_Content: new PlaceholderContent(
                          function () {
                            return [
                              React.createElement(
                                OSWidgets.Container,
                                {
                                  align: /*Default*/ 0,
                                  animate: true,
                                  visible:
                                    !model.variables.getAssembleEventDataAct
                                      .assembleEventOut
                                      .assembleAttendeeSubdivisionListAttr
                                      .isEmpty,
                                  _idProps: {
                                    service: idService,
                                    name: "DIV_SubdivisionAttendee__Content",
                                  },
                                  _widgetRecordProvider: widgetsRecordProvider,
                                  visible_dataFetchStatus:
                                    OS.Model.calculateDataFetchStatus(
                                      model.variables.getAssembleEventDataAct
                                        .dataFetchStatusAttr,
                                    ),
                                },
                                React.createElement(
                                  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_LocalitiesList_mvc_view,
                                  {
                                    inputs: {
                                      AssembleAttendeeSubdivisionList:
                                        model.variables.getAssembleEventDataAct
                                          .assembleEventOut
                                          .assembleAttendeeSubdivisionListAttr,
                                      _assembleAttendeeSubdivisionListInDataFetchStatus:
                                        OS.Model.calculateDataFetchStatus(
                                          model.variables
                                            .getAssembleEventDataAct
                                            .dataFetchStatusAttr,
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
                                        var eventHandlerContext =
                                          callContext.clone();
                                        return OS.Flow.tryFinally(
                                          function () {
                                            var varBag = {};
                                            controller.pushDebuggerContext(
                                              eventHandlerContext,
                                            );

                                            OutSystemsDebugger.setThreadStartName(
                                              eventHandlerContext.id,
                                              "Assemble/AssembleEventDetail_LocalitiesList NavigateTo_ShareObject",
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
                                      navigateTo_HouseholdCarousel$Action:
                                        function (
                                          itemPositionIn,
                                          selectedHouseholdIdIn,
                                        ) {
                                          var eventHandlerContext =
                                            callContext.clone();
                                          return OS.Flow.tryFinally(
                                            function () {
                                              var varBag = {};
                                              controller.pushDebuggerContext(
                                                eventHandlerContext,
                                              );

                                              OutSystemsDebugger.setThreadStartName(
                                                eventHandlerContext.id,
                                                "Assemble/AssembleEventDetail_LocalitiesList NavigateTo_HouseholdCarousel",
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
                                      uuid: "26",
                                      alias: "14",
                                    },
                                    _widgetRecordProvider:
                                      widgetsRecordProvider,
                                    placeholders: {
                                      header: new PlaceholderContent(
                                        function () {
                                          return ["Host Locality"];
                                        },
                                      ),
                                    },
                                    _dependencies: [],
                                  },
                                ),
                              ),
                              React.createElement(
                                OSWidgets.Container,
                                {
                                  align: /*Default*/ 0,
                                  animate: true,
                                  visible:
                                    !model.variables.getAssembleEventDataAct
                                      .assembleEventOut
                                      .assembleSpecialAttendeeSubdivisionListAttr
                                      .isEmpty,
                                  _idProps: {
                                    service: idService,
                                    name: "DIV_SubdivisionSpecialAttendee__Content",
                                  },
                                  _widgetRecordProvider: widgetsRecordProvider,
                                  visible_dataFetchStatus:
                                    OS.Model.calculateDataFetchStatus(
                                      model.variables.getAssembleEventDataAct
                                        .dataFetchStatusAttr,
                                    ),
                                },
                                React.createElement(
                                  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_LocalitiesList_mvc_view,
                                  {
                                    inputs: {
                                      AssembleAttendeeSubdivisionList:
                                        model.variables.getAssembleEventDataAct
                                          .assembleEventOut
                                          .assembleSpecialAttendeeSubdivisionListAttr,
                                      _assembleAttendeeSubdivisionListInDataFetchStatus:
                                        OS.Model.calculateDataFetchStatus(
                                          model.variables
                                            .getAssembleEventDataAct
                                            .dataFetchStatusAttr,
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
                                        var eventHandlerContext =
                                          callContext.clone();
                                        return OS.Flow.tryFinally(
                                          function () {
                                            var varBag = {};
                                            controller.pushDebuggerContext(
                                              eventHandlerContext,
                                            );

                                            OutSystemsDebugger.setThreadStartName(
                                              eventHandlerContext.id,
                                              "Assemble/AssembleEventDetail_LocalitiesList NavigateTo_ShareObject",
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
                                      navigateTo_HouseholdCarousel$Action:
                                        function (
                                          itemPositionIn,
                                          selectedHouseholdIdIn,
                                        ) {
                                          var eventHandlerContext =
                                            callContext.clone();
                                          return OS.Flow.tryFinally(
                                            function () {
                                              var varBag = {};
                                              controller.pushDebuggerContext(
                                                eventHandlerContext,
                                              );

                                              OutSystemsDebugger.setThreadStartName(
                                                eventHandlerContext.id,
                                                "Assemble/AssembleEventDetail_LocalitiesList NavigateTo_HouseholdCarousel",
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
                                      uuid: "28",
                                      alias: "15",
                                    },
                                    _widgetRecordProvider:
                                      widgetsRecordProvider,
                                    placeholders: {
                                      header: new PlaceholderContent(
                                        function () {
                                          return ["Interchange Meetings"];
                                        },
                                      ),
                                    },
                                    _dependencies: [],
                                  },
                                ),
                              ),
                            ];
                          },
                        ),
                      },
                      _dependencies: [
                        asPrimitiveValue(
                          model.variables.getAssembleEventDataAct
                            .dataFetchStatusAttr,
                        ),
                        asPrimitiveValue(
                          model.variables.getAssembleEventDataAct
                            .assembleEventOut
                            .assembleSpecialAttendeeSubdivisionListAttr,
                        ),
                        asPrimitiveValue(
                          model.variables.getAssembleEventDataAct
                            .assembleEventOut
                            .assembleAttendeeSubdivisionListAttr,
                        ),
                      ],
                    },
                  ),
                  React.createElement(
                    Connect2_Assemble_MUI_Assemble_AssembleEventDetail_Section_mvc_view,
                    {
                      inputs: {
                        IsVisible:
                          !model.variables.getAssembleEventDataAct
                            .assembleEventOut.gSMContactListAttr.isEmpty ||
                          !model.variables.isDataFetchedVar,
                        _isVisibleInDataFetchStatus:
                          OS.Model.calculateDataFetchStatus(
                            model.variables.getAssembleEventDataAct
                              .dataFetchStatusAttr,
                          ),
                        IsLoading: !model.variables.isDataFetchedVar,
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
                        name: "Section_GSMContacts",
                        alias: "16",
                      },
                      _widgetRecordProvider: widgetsRecordProvider,
                      placeholders: {
                        placeholder_Header: new PlaceholderContent(function () {
                          return [" GMS Local Contact"];
                        }),
                        placeholder_Content__Loading: new PlaceholderContent(
                          function () {
                            return [
                              React.createElement(
                                OSWidgets.Container,
                                {
                                  align: /*Default*/ 0,
                                  animate: false,
                                  style: "padding-y-s",
                                  visible: true,
                                  _idProps: {
                                    service: idService,
                                    uuid: "30",
                                  },
                                  _widgetRecordProvider: widgetsRecordProvider,
                                },
                                React.createElement(
                                  Connect2_LegacyShared_NewConnect_Skeleton_NC_Result_Item__Image__Skeleton_mvc_view,
                                  {
                                    inputs: {
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
                                      uuid: "31",
                                      alias: "17",
                                    },
                                    _widgetRecordProvider:
                                      widgetsRecordProvider,
                                    _dependencies: [],
                                  },
                                ),
                              ),
                            ];
                          },
                        ),
                        placeholder_Content: new PlaceholderContent(
                          function () {
                            return [
                              React.createElement(
                                OSWidgets.Container,
                                {
                                  align: /*Default*/ 0,
                                  animate: false,
                                  style: "margin-top-xs",
                                  visible: true,
                                  _idProps: {
                                    service: idService,
                                    name: "Div_EventContacts__Content",
                                  },
                                  _widgetRecordProvider: widgetsRecordProvider,
                                },
                                React.createElement(
                                  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_ContactList_mvc_view,
                                  {
                                    inputs: {
                                      AssembleEventContactIdList:
                                        model.variables.getAssembleEventDataAct
                                          .assembleEventOut.gSMContactListAttr,
                                      _assembleEventContactIdListInDataFetchStatus:
                                        OS.Model.calculateDataFetchStatus(
                                          model.variables
                                            .getAssembleEventDataAct
                                            .dataFetchStatusAttr,
                                        ),
                                    },
                                    events: {
                                      _handleError: function (ex) {
                                        controller.handleError(ex);
                                      },
                                      emailContact$Action: function (
                                        event_AvatarURLIn,
                                        event_ContactNameIn,
                                        event_ContactSurnameIn,
                                        event_ContactLocalityIn,
                                        event_ContactCountryIn,
                                        event_EmailToIn,
                                        event_MemberIdIn,
                                      ) {
                                        var eventHandlerContext =
                                          callContext.clone();
                                        return OS.Flow.tryFinally(
                                          function () {
                                            var varBag = {};
                                            controller.pushDebuggerContext(
                                              eventHandlerContext,
                                            );

                                            OutSystemsDebugger.setThreadStartName(
                                              eventHandlerContext.id,
                                              "Assemble/AssembleEventDetail_ContactList EmailContact",
                                            );
                                            controller.navigateto_EmailContact$Action(
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
                                      navigateTo_Household$Action: function (
                                        householdIdIn,
                                      ) {
                                        var eventHandlerContext =
                                          callContext.clone();
                                        return OS.Flow.tryFinally(
                                          function () {
                                            var varBag = {};
                                            controller.pushDebuggerContext(
                                              eventHandlerContext,
                                            );

                                            OutSystemsDebugger.setThreadStartName(
                                              eventHandlerContext.id,
                                              "Assemble/AssembleEventDetail_ContactList NavigateTo_Household",
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
                                    },
                                    _validationProps: {
                                      validationService: validationService,
                                    },
                                    _idProps: {
                                      service: idService,
                                      uuid: "33",
                                      alias: "18",
                                    },
                                    _widgetRecordProvider:
                                      widgetsRecordProvider,
                                    _dependencies: [],
                                  },
                                ),
                              ),
                            ];
                          },
                        ),
                      },
                      _dependencies: [
                        asPrimitiveValue(
                          model.variables.getAssembleEventDataAct
                            .dataFetchStatusAttr,
                        ),
                        asPrimitiveValue(
                          model.variables.getAssembleEventDataAct
                            .assembleEventOut.gSMContactListAttr,
                        ),
                      ],
                    },
                  ),
                ),
              ),
            ];
          },
        ),
      );
    };
    return View;
  })(OSView.BaseView.BaseWebBlock);

  return View;
});
define("Connect2_Assemble_MUI.Assemble.AssembleEventDetail.mvc$controller", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_Assemble_MUI.model",
  "Connect2_Assemble_MUI.controller",
  "Connect2_Assemble_CS.model",
  "APIDomain_Directory_IS.model",
  "Connect2_LegacyShared.controller",
  "Connect2_Assemble_MUI.languageResources",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail.mvc$debugger",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS",
  "Connect2_Assemble_CS.model$AssembleEventSummaryRec",
  "Connect2_Assemble_MUI.referencesHealth",
  "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS",
  "Connect2_Assemble_CS.model$AssembleEventTypeRec",
  "Connect2_Assemble_CS.model$LocalityDetailsRec",
  "Connect2_Assemble_MUI.model$LocalityDetailsList",
  "Connect2_Assemble_CS.model$AssembleAttendeeSubdivisionRec",
  "Connect2_Assemble_MUI.model$AssembleAttendeeSubdivisionList",
  "Connect2_Assemble_CS.model$AssembleAttendeeGuestRec",
  "Connect2_Assemble_MUI.model$AssembleAttendeeGuestList",
  "APIDomain_Directory_IS.model$PhotoURLRec",
  "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS",
  "Connect2_Assemble_MUI.controller$GetIANATimezone",
  "Connect2_Assemble_MUI.controller$OffsetDateTimeByUserUTCOffset",
  "Connect2_LegacyShared.controller$ShowUnknownErrorMessage",
  "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared",
  "Connect2_Assemble_MUI.controller$GetUnavailableEventErrorMessage",
  "Connect2_Assemble_CS.model$AssembleEventRec",
], function (
  OutSystems,
  Connect2_Assemble_MUIModel,
  Connect2_Assemble_MUIController,
  Connect2_Assemble_CSModel,
  APIDomain_Directory_ISModel,
  Connect2_LegacySharedController,
  Connect2_Assemble_MUILanguageResources,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_mvc_Debugger,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS,
) {
  var OS = OutSystems.Internal;
  var Controller = (function (_super) {
    __extends(Controller, _super);
    function Controller() {
      _super.apply(this, arguments);
      var controller = this.controller;
      this.clientActionProxies = {};
      this.dataFetchDependenciesOriginal = {
        getAssembleEvent$DataActRefresh: -1,
      };
      this.dataFetchDependentsGraph = {
        getAssembleEvent$DataActRefresh: [],
      };
      this.shouldSendClientVarsToDataSources = false;
    }
    // Server Actions

    // Aggregates and Data Actions
    Controller.prototype.getAssembleEvent$DataActRefresh = function (
      callContext,
    ) {
      var model = this.model;
      var controller = this.controller;
      var callContext = controller.callContext(callContext);
      return OS.Flow.tryFinally(
        function () {
          var varBag = {};
          controller.pushDebuggerContext(callContext);

          OutSystemsDebugger.push(
            "4YvUCWT53U+6BrZWsVWc3Q:ZWQMYl8xw06XNrdCsOc6BQ:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.5nDF9_Pe0kazZlIycX5xyQ/DataActions.ZWQMYl8xw06XNrdCsOc6BQ:efrF1rrxwoSvQSyHCf+o4g",
            "Connect2_Assemble_MUI",
            "GetAssembleEvent",
            "NRFlows.DataScreenActionFlow",
            callContext.id,
            varBag,
          );
          OutSystemsDebugger.setThreadStartName(
            callContext.id,
            "Assemble/AssembleEventDetail/GetAssembleEvent",
          );
          return controller
            .callDataAction(
              "DataActionGetAssembleEvent",
              "screenservices/Connect2_Assemble_MUI/Assemble/AssembleEventDetail/DataActionGetAssembleEvent",
              "iMDDdInW3Pe9Yl3ll82UrA",
              function (b) {
                model.variables.getAssembleEventDataAct.dataFetchStatusAttr = b;
              },
              function (json) {
                model.variables.getAssembleEventDataAct.replaceWith(
                  OS.DataConversion.ServerDataConverter.from(
                    json,
                    model.variables.getAssembleEventDataAct.constructor,
                  ),
                );
              },
              undefined,
              OutSystemsDebugger.getRequestHeaders(callContext.id),
              function (json, headers) {
                OutSystemsDebugger.processResponseHeaders(
                  callContext.id,
                  headers,
                );
              },
              callContext,
              undefined,
              false,
            )
            .then(function () {
              OutSystemsDebugger.setThreadStartName(
                callContext.id,
                "Assemble/AssembleEventDetail/GetAssembleEvent On After Fetch",
              );
              return controller._getAssembleEvent_OnAfterFetch$Action(
                controller.callContext(callContext),
              );
            });
        },
        function () {
          OutSystemsDebugger.pop(
            "4YvUCWT53U+6BrZWsVWc3Q:ZWQMYl8xw06XNrdCsOc6BQ",
            callContext.id,
          );
          controller.popDebuggerContext(callContext);
        },
      );
    };

    Controller.prototype.dataFetchActionNames = [
      "getAssembleEvent$DataActRefresh",
    ];
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
      var getIANATimezoneVar = new OS.DataTypes.VariableHolder();
      varBag.callContext = callContext;
      varBag.getIANATimezoneVar = getIANATimezoneVar;
      try {
        OutSystemsDebugger.push(
          "4YvUCWT53U+6BrZWsVWc3Q:Yl+IJqYNLk6CTq8_yv2TBg:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.5nDF9_Pe0kazZlIycX5xyQ/ClientActions.Yl+IJqYNLk6CTq8_yv2TBg:cECMZUVBHI0+4VRlU2CVQg",
          "Connect2_Assemble_MUI",
          "OnInitialize",
          "NRFlows.ClientScreenActionFlow",
          callContext.id,
          varBag,
        );
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:cEZpJ0vjt0aVZstPJSq3vw",
          callContext.id,
        );
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:zo3TOFIoWEGooxvNatz8HQ",
          callContext.id,
        );
        // Execute Action: GetIANATimezone
        getIANATimezoneVar.value =
          Connect2_Assemble_MUIController.default.getIANATimezone$Action(
            callContext,
          );

        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:lREwH3xTSk2XkMTTQEO4mA",
          callContext.id,
        );
        // DeviceTimezone = GetIANATimezone.IANATimeZone
        model.variables.deviceTimezoneVar =
          getIANATimezoneVar.value.iANATimeZoneOut;
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:PxJKozD3zkG2WmhLhKATPQ",
          callContext.id,
        );
      } catch (ex) {
        OutSystemsDebugger.handleException(ex, callContext.id);
        throw ex;
      } finally {
        OutSystemsDebugger.pop(
          "4YvUCWT53U+6BrZWsVWc3Q:Yl+IJqYNLk6CTq8_yv2TBg",
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
      OutSystemsDebugger.push(
        "4YvUCWT53U+6BrZWsVWc3Q:po_EJiI_tEqPzDDLs7dW+A:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.5nDF9_Pe0kazZlIycX5xyQ/ClientActions.po_EJiI_tEqPzDDLs7dW+A:L2nlchXObj6p1uSDBV5V3A",
        "Connect2_Assemble_MUI",
        "OnReady",
        "NRFlows.ClientScreenActionFlow",
        callContext.id,
        varBag,
      );
      OutSystemsDebugger.handleBreakpoint(
        "4YvUCWT53U+6BrZWsVWc3Q:idxKjE5ZqEWAY44+Y4blvQ",
        callContext.id,
      );
      return OS.Flow.executeAsyncFlow(function () {
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:CrUUY35gXEiu2d77uoX3SQ",
          callContext.id,
        );
        wasCurrentViewRestoredFromCacheJSResult.value =
          controller.safeExecuteJSNode(
            Connect2_Assemble_MUI_Assemble_AssembleEventDetail_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS,
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
                  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail.OnReady$wasCurrentViewRestoredFromCacheJSResult",
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
              "4YvUCWT53U+6BrZWsVWc3Q:I2YwR_NhLkaYoDNhcJqIwQ",
              callContext.id,
            ) &&
            wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut ===
              true &&
            model.variables.getAssembleEventDataAct.isDataFetchedAttr
          ) {
            OutSystemsDebugger.handleBreakpoint(
              "4YvUCWT53U+6BrZWsVWc3Q:xS74V9vkw0COxAef282lsw",
              callContext.id,
            );
          } else {
            OutSystemsDebugger.handleBreakpoint(
              "4YvUCWT53U+6BrZWsVWc3Q:7GiRtvaRvki6DMveg1j9QA",
              callContext.id,
            );
            // Refresh Query: GetAssembleEvent
            var result =
              controller.getAssembleEvent$DataActRefresh(callContext);
            model.flush();
            return result.then(function () {
              OutSystemsDebugger.handleBreakpoint(
                "4YvUCWT53U+6BrZWsVWc3Q:_Ps2RxsLWU+6TNgMEcnFlA",
                callContext.id,
              );
            });
          }
        });
      })
        .then(function (res) {
          OutSystemsDebugger.pop(
            "4YvUCWT53U+6BrZWsVWc3Q:po_EJiI_tEqPzDDLs7dW+A",
            callContext.id,
          );
          return res;
        })
        .catch(function (ex) {
          OutSystemsDebugger.handleException(ex, callContext.id);
          OutSystemsDebugger.pop(
            "4YvUCWT53U+6BrZWsVWc3Q:po_EJiI_tEqPzDDLs7dW+A",
            callContext.id,
          );
          throw ex;
        });
    };
    Controller.registerVariableGroupType(
      "Connect2_Assemble_MUI.Assemble.AssembleEventDetail.OnReady$wasCurrentViewRestoredFromCacheJSResult",
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
    Controller.prototype._getAssembleEvent_OnAfterFetch$Action = function (
      callContext,
    ) {
      var varBag = {};
      var model = this.model;
      var controller = this.controller;
      var idService = this.idService;
      varBag.model = model;
      varBag.idService = idService;
      controller.ensureControllerAlive("GetAssembleEvent_OnAfterFetch");
      callContext = controller.callContext(callContext);
      var offsetDateTimeByUserUTCOffsetVar = new OS.DataTypes.VariableHolder();
      varBag.callContext = callContext;
      varBag.offsetDateTimeByUserUTCOffsetVar =
        offsetDateTimeByUserUTCOffsetVar;
      OutSystemsDebugger.push(
        "4YvUCWT53U+6BrZWsVWc3Q:2H6LehYmMkqTn5RZkfiRXg:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.5nDF9_Pe0kazZlIycX5xyQ/ClientActions.2H6LehYmMkqTn5RZkfiRXg:yU5KWm+KUICJYL5RmawrXg",
        "Connect2_Assemble_MUI",
        "GetAssembleEvent_OnAfterFetch",
        "NRFlows.ClientScreenActionFlow",
        callContext.id,
        varBag,
      );
      OutSystemsDebugger.handleBreakpoint(
        "4YvUCWT53U+6BrZWsVWc3Q:U3DgfKCG+kOjPQN9BcaVjA",
        callContext.id,
      );
      return OS.Flow.executeAsyncFlow(function () {
        return OS.Flow.executeSequence(function () {
          if (
            OutSystemsDebugger.handleBreakpoint(
              "4YvUCWT53U+6BrZWsVWc3Q:93H2NxH6ZkWY_jo0GoAMwg",
              callContext.id,
            ) &&
            model.variables.getAssembleEventDataAct.assembleEventOut
              .assembleEventSummaryAttr.isUnavailableAttr
          ) {
            OutSystemsDebugger.handleBreakpoint(
              "4YvUCWT53U+6BrZWsVWc3Q:ynVS+ldQFUK7W4gigCYDRA",
              callContext.id,
            );
            // Execute Action: ShowUnknownErrorMessage
            Connect2_LegacySharedController.default.showUnknownErrorMessage$Action(
              OutSystemsDebugger.handleFunctionCall(
                function () {
                  return Connect2_Assemble_MUIController.default.getUnavailableEventErrorMessage$Action(
                    callContext,
                  ).messageOut;
                },
                OS.DataTypes.DataTypes.Text,
                callContext.id,
              ),
              OutSystemsDebugger.handleFunctionCall(
                function () {
                  return Connect2_Assemble_MUIController.default.getUnavailableEventErrorMessage$Action(
                    callContext,
                  ).messageOut;
                },
                OS.DataTypes.DataTypes.Text,
                callContext.id,
              ),
              callContext,
            );
            OutSystemsDebugger.handleBreakpoint(
              "4YvUCWT53U+6BrZWsVWc3Q:jgmEUJMLwUySeS7VL0+H0g",
              callContext.id,
            );
          } else {
            OutSystemsDebugger.handleBreakpoint(
              "4YvUCWT53U+6BrZWsVWc3Q:goFSq1DxMUGdIC8aK+yPNA",
              callContext.id,
            );
            // Execute Action: OffsetDateTimeByUserUTCOffset
            offsetDateTimeByUserUTCOffsetVar.value =
              Connect2_Assemble_MUIController.default.offsetDateTimeByUserUTCOffset$Action(
                model.variables.getAssembleEventDataAct.assembleEventOut
                  .assembleEventSummaryAttr.dateTimeAttr,
                false,
                callContext,
              );

            OutSystemsDebugger.handleBreakpoint(
              "4YvUCWT53U+6BrZWsVWc3Q:jpXW5mJsjEuK8gJL0_pVLQ",
              callContext.id,
            );
            // GetAssembleEvent.AssembleEvent.AssembleEventSummary.DateTime = OffsetDateTimeByUserUTCOffset.ConvertedDateTime
            model.variables.getAssembleEventDataAct.assembleEventOut.assembleEventSummaryAttr.dateTimeAttr =
              offsetDateTimeByUserUTCOffsetVar.value.convertedDateTimeOut;
            // UpdateDateTime
            if (
              OutSystemsDebugger.handleBreakpoint(
                "4YvUCWT53U+6BrZWsVWc3Q:nBoDRn_JKUW_RoSlX_KbGA",
                callContext.id,
              ) &&
              model.variables.getAssembleEventDataAct.assembleEventOut.assembleEventSummaryAttr.dateTimeAttr.equals(
                OS.BuiltinFunctions.nullDate(),
              )
            ) {
              OutSystemsDebugger.handleBreakpoint(
                "4YvUCWT53U+6BrZWsVWc3Q:_GOzxO2pX0SMy6PS4f7gng",
                callContext.id,
              );
              // GetAssembleEvent.AssembleEvent.AssembleEventSummary.DateTime = Start
              model.variables.getAssembleEventDataAct.assembleEventOut.assembleEventSummaryAttr.dateTimeAttr =
                model.variables.startIn;
            }

            OutSystemsDebugger.handleBreakpoint(
              "4YvUCWT53U+6BrZWsVWc3Q:Id2tNPq+P02NvMXnM6_pOQ",
              callContext.id,
            );
            // Trigger Event: UpdateTitle
            return controller
              .updateTitle$Action(
                model.variables.getAssembleEventDataAct.assembleEventOut
                  .assembleEventSummaryAttr.assembleEventTypeAttr.titleAttr,
                callContext,
              )
              .then(function () {
                OutSystemsDebugger.handleBreakpoint(
                  "4YvUCWT53U+6BrZWsVWc3Q:lJjG_VXv0EK6oiLz4OkPzA",
                  callContext.id,
                );
                // IsDataFetched = True
                model.variables.isDataFetchedVar = true;
                OutSystemsDebugger.handleBreakpoint(
                  "4YvUCWT53U+6BrZWsVWc3Q:z8NIFKxhTUuuI6EZIKgpIQ",
                  callContext.id,
                );
              });
          }
        });
      })
        .then(function (res) {
          OutSystemsDebugger.pop(
            "4YvUCWT53U+6BrZWsVWc3Q:2H6LehYmMkqTn5RZkfiRXg",
            callContext.id,
          );
          return res;
        })
        .catch(function (ex) {
          OutSystemsDebugger.handleException(ex, callContext.id);
          OutSystemsDebugger.pop(
            "4YvUCWT53U+6BrZWsVWc3Q:2H6LehYmMkqTn5RZkfiRXg",
            callContext.id,
          );
          throw ex;
        });
    };

    Controller.prototype.onInitialize$Action = function (callContext) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(
        controller._onInitialize$Action,
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
    Controller.prototype.getAssembleEvent_OnAfterFetch$Action = function (
      callContext,
    ) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(
        controller._getAssembleEvent_OnAfterFetch$Action,
        callContext,
      );
    };
    Controller.prototype.navigateTo_Household$Action = function () {
      return Promise.resolve();
    };
    Controller.prototype.eventNotFound$Action = function () {
      return Promise.resolve();
    };
    Controller.prototype.navigateTo_HouseholdCarousel$Action = function () {
      return Promise.resolve();
    };
    Controller.prototype.navigateTo_ShareObject$Action = function () {
      return Promise.resolve();
    };
    Controller.prototype.navigateto_EmailContact$Action = function () {
      return Promise.resolve();
    };
    Controller.prototype.updateTitle$Action = function () {
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
        "4YvUCWT53U+6BrZWsVWc3Q:5nDF9_Pe0kazZlIycX5xyQ:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.5nDF9_Pe0kazZlIycX5xyQ:OZOlyQarnrR5jQdyQqCi2Q",
        "Connect2_Assemble_MUI",
        "AssembleEventDetail",
        "NRNodes.WebBlock",
        callContext.id,
        varBag,
      );
    };
    Controller.prototype.popDebuggerContext = function (callContext) {
      OutSystemsDebugger.pop(
        "4YvUCWT53U+6BrZWsVWc3Q:5nDF9_Pe0kazZlIycX5xyQ",
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
            "Assemble/AssembleEventDetail On Initialize",
          );
          return controller.onInitialize$Action(callContext);
        },
        function () {
          controller.popDebuggerContext(callContext);
        },
      );
    };
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
            "Assemble/AssembleEventDetail On Ready",
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
define("Connect2_Assemble_MUI.Assemble.AssembleEventDetail.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", [], function () {
  return function ($parameters, $actions, $roles, $public) {
    $parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
  };
});

define("Connect2_Assemble_MUI.Assemble.AssembleEventDetail.mvc$debugger", [
  "exports",
  "OutSystems/ClientRuntime/Debugger",
  "OutSystems/ClientRuntime/Main",
], function (exports, Debugger, OutSystems) {
  var OS = OutSystems.Internal;
  var metaInfo = {
    zo3TOFIoWEGooxvNatz8HQ: {
      getter: function (varBag, idService) {
        return varBag.getIANATimezoneVar.value;
      },
    },
    CrUUY35gXEiu2d77uoX3SQ: {
      getter: function (varBag, idService) {
        return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
      },
    },
    "goFSq1DxMUGdIC8aK+yPNA": {
      getter: function (varBag, idService) {
        return varBag.offsetDateTimeByUserUTCOffsetVar.value;
      },
    },
    "CzX0T7NkvkaaMZBPc0+byw": {
      getter: function (varBag, idService) {
        return varBag.model.variables.isDataFetchedVar;
      },
      dataType: OS.DataTypes.DataTypes.Boolean,
    },
    baqBecKjL02HdtmRDigbbA: {
      getter: function (varBag, idService) {
        return varBag.model.variables.deviceTimezoneVar;
      },
      dataType: OS.DataTypes.DataTypes.Text,
    },
    "bq_k1j+n9EaTyIJCBUqTyg": {
      getter: function (varBag, idService) {
        return varBag.model.variables.eventIdIn;
      },
      dataType: OS.DataTypes.DataTypes.Text,
    },
    "HHvHT+twekGDlxFt7TdKcQ": {
      getter: function (varBag, idService) {
        return varBag.model.variables.seriesIdIn;
      },
      dataType: OS.DataTypes.DataTypes.Text,
    },
    "iRgvXhttNky764e9v+2m_A": {
      getter: function (varBag, idService) {
        return varBag.model.variables.startIn;
      },
      dataType: OS.DataTypes.DataTypes.DateTime,
    },
    ZWQMYl8xw06XNrdCsOc6BQ: {
      getter: function (varBag, idService) {
        return varBag.model.variables.getAssembleEventDataAct;
      },
    },
    Yz1MitVq3UaMRrev4kallQ: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Icon"));
        })(varBag.model, idService);
      },
    },
    p_c3IAq1qUW9ZKiUTrFZig: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("DIV_DetailCard"));
        })(varBag.model, idService);
      },
    },
    "gPSALsU6zk2Wi5f+nLt3JA": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Placeholder_Image"));
        })(varBag.model, idService);
      },
    },
    "1_2bvf3t4kKzfAUoSPay5w": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Placeholder_SubtitleTop"));
        })(varBag.model, idService);
      },
    },
    nAp_sEW5EEubDBFAvQfTVA: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Placeholder_Title"));
        })(varBag.model, idService);
      },
    },
    "0CPgsdsnNUqRBo_71w7tgw": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(
            idService.getId("Placeholder_Subtitle_Bottom"),
          );
        })(varBag.model, idService);
      },
    },
    "T9mhzKHMKk+DIY0F+GEfig": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Placeholder_Right"));
        })(varBag.model, idService);
      },
    },
    "cJLMRKR_tEmSlTT5Yio+UA": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Placeholder_Location"));
        })(varBag.model, idService);
      },
    },
    Dvqul7ynz0WlV8BxXP7i5A: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("DIV_Content"));
        })(varBag.model, idService);
      },
    },
    "0KXWPsTZnEOu6pMJqraTuw": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Section_MeetingNotes"));
        })(varBag.model, idService);
      },
    },
    "A+6CHVx3R0C0wrWTXzxWZQ": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Placeholder_Header"));
        })(varBag.model, idService);
      },
    },
    "JLynmGGUaU6Dfz+VhM_q5A": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("DIV_MeetingNotes__Title"));
        })(varBag.model, idService);
      },
    },
    L9zFEHRH9UioSd01TSDlSg: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(
            idService.getId("Placeholder_Content__Loading"),
          );
        })(varBag.model, idService);
      },
    },
    "+aBKvMMtIkqLYXF8F7Me_w": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Placeholder_Content"));
        })(varBag.model, idService);
      },
    },
    VjCyGISpW0ulRchO8ffxEQ: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Div_EventNotes__Content"));
        })(varBag.model, idService);
      },
    },
    PwDU0a6m70e1LCI8SCNEjg: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Placeholder_Content"));
        })(varBag.model, idService);
      },
    },
    EeJTzpFEiUGZV0I_U2KksQ: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("ShowMoreLabel"));
        })(varBag.model, idService);
      },
    },
    DzGLLNxiI0ubDijF77qlzw: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("ShowLessLabel"));
        })(varBag.model, idService);
      },
    },
    "3MluLZhJsEu861xazkp7AA": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Section_Attendees"));
        })(varBag.model, idService);
      },
    },
    "aRKfYpVABEi8OlH+_18YBA": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Placeholder_Header"));
        })(varBag.model, idService);
      },
    },
    NlMHf6ga8E2bxR0omAZatg: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(
            idService.getId("Placeholder_Content__Loading"),
          );
        })(varBag.model, idService);
      },
    },
    sAsMA8C8mkKWQVUBwB8jmA: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Placeholder_Content"));
        })(varBag.model, idService);
      },
    },
    BDt1z34mOUuP4qDvAcpM0Q: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(
            idService.getId("DIV_SubdivisionAttendee__Content"),
          );
        })(varBag.model, idService);
      },
    },
    g56ePhzwgEOxxAV_S5S6aw: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Header"));
        })(varBag.model, idService);
      },
    },
    V9TmIapiqkaQKxUAE2Rlsw: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(
            idService.getId("DIV_SubdivisionSpecialAttendee__Content"),
          );
        })(varBag.model, idService);
      },
    },
    Dq5oUR1kPEq5WeHpL5PICA: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Header"));
        })(varBag.model, idService);
      },
    },
    oZf8nD_YrUCGCzxJ21NtfA: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Section_GSMContacts"));
        })(varBag.model, idService);
      },
    },
    "fkQAUnN6uUi+l3zV1lqIPQ": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Placeholder_Header"));
        })(varBag.model, idService);
      },
    },
    NwHuVLLhlkivPHo4Lyze6w: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(
            idService.getId("Placeholder_Content__Loading"),
          );
        })(varBag.model, idService);
      },
    },
    "+84pLdDHjEikRzXwc2XzYg": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Placeholder_Content"));
        })(varBag.model, idService);
      },
    },
    "sSRIloAUGE6rMyXFE1+ZqA": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(
            idService.getId("Div_EventContacts__Content"),
          );
        })(varBag.model, idService);
      },
    },
  };
  OutSystemsDebugger.registerMetaInfo(metaInfo);
});
