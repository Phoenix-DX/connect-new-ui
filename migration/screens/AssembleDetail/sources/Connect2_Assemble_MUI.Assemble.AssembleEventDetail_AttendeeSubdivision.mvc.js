define("Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision.mvc$model", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_Assemble_MUI.model",
  "UBTConnect_Utils.controller",
  "Connect2_Sharing_CS.model",
  "Connect2_LegacyShared.model",
  "Connect2_Assemble_MUI.controller",
  "NavigationHandler.controller",
  "Connect2_Assemble_CS.model",
  "MemoryClientCache.model",
  "Connect2_LegacyShared.controller",
  "APIDomain_Directory_IS.model",
  "Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Image.mvc$model",
  "Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item_Badge.mvc$model",
  "NavigationHandler.ScrollAnchors.ScrollAnchor.mvc$model",
  "Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Tag.mvc$model",
  "Connect2_LegacyShared.Share.ContextMenu.mvc$model",
  "Connect2_LegacyShared.NewConnect_Skeleton.NC_Result_Item__Image__Skeleton.mvc$model",
  "Connect2_LegacyShared.MyBookmarks.BookmarkNoteAddEdit.mvc$model",
  "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy.mvc$model",
  "UBTConnect_Utils.CW_Share.ShareSheet.mvc$model",
  "UBTConnect_Utils.CW_Share.ShareableObject_Generic.mvc$model",
  "UBTConnect_Utils.controller$GetHasBookmarNote",
  "Connect2_Assemble_MUI.referencesHealth",
  "Connect2_Assemble_MUI.referencesHealth$UBTConnect_Utils",
  "Connect2_Assemble_MUI.model$AssembleAttendeeSubdivisionBooleanRecord",
  "Connect2_Sharing_CS.model$UI_ShareableObject_GenericRec",
  "Connect2_Assemble_MUI.referencesHealth$Connect2_Sharing_CS",
  "Connect2_Assemble_MUI.model$AssembleAttendeeSubdivisionRecord",
  "Connect2_LegacyShared.model$BookmarkNoteRec",
  "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared",
  "Connect2_Assemble_MUI.controller$MaybeDisplaySubscriptionPopup",
  "NavigationHandler.controller$RememberFocusedScrollAnchor",
  "Connect2_Assemble_MUI.referencesHealth$NavigationHandler",
  "NavigationHandler.controller$SetPreloadObject",
  "Connect2_Assemble_CS.model$AssembleAttendeeGuestRec",
  "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS",
  "Connect2_Assemble_MUI.model$AssembleAttendeeGuestList",
  "Connect2_LegacyShared.model$HouseholdCarouselPreloadingRec",
  "Connect2_LegacyShared.model$CacheableSubdivisionInformationRec",
  "MemoryClientCache.model$MemoryCacheResultRec",
  "Connect2_Assemble_MUI.referencesHealth$MemoryClientCache",
  "Connect2_LegacyShared.controller$GetCacheableSubdivision_V2",
  "APIDomain_Directory_IS.model$LocalityHouseholdsResultItemRec",
  "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS",
  "Connect2_Assemble_MUI.model$LocalityHouseholdsResultItemList",
  "APIDomain_Directory_IS.model$PhotoURLRec",
  "Connect2_Assemble_CS.model$AssembleAttendeeSubdivisionRec",
  "Connect2_Assemble_MUI.controller$ToggleBookmarkItem",
  "NavigationHandler.controller$ConfirmAction",
  "Connect2_LegacyShared.controller$FlipHouseholdName",
  "UBTConnect_Utils.controller$GetHasExtendedShare",
  "Connect2_LegacyShared.model$LocalBookmarkRec",
  "Connect2_Assemble_MUI.model$LocalBookmarkList",
  "Connect2_LegacyShared.controller$GetLocalBookmarksByObjectType",
], function (
  OutSystems,
  Connect2_Assemble_MUIModel,
  UBTConnect_UtilsController,
  Connect2_Sharing_CSModel,
  Connect2_LegacySharedModel,
  Connect2_Assemble_MUIController,
  NavigationHandlerController,
  Connect2_Assemble_CSModel,
  MemoryClientCacheModel,
  Connect2_LegacySharedController,
  APIDomain_Directory_ISModel,
  Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Image_mvcModel,
  Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item_Badge_mvcModel,
  NavigationHandler_ScrollAnchors_ScrollAnchor_mvcModel,
  Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Tag_mvcModel,
  Connect2_LegacyShared_Share_ContextMenu_mvcModel,
  Connect2_LegacyShared_NewConnect_Skeleton_NC_Result_Item__Image__Skeleton_mvcModel,
  Connect2_LegacyShared_MyBookmarks_BookmarkNoteAddEdit_mvcModel,
  UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvcModel,
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
          "AssembleAttendeeSubdivision_Local",
          "assembleAttendeeSubdivision_LocalVar",
          "AssembleAttendeeSubdivision_Local",
          true,
          false,
          OS.DataTypes.DataTypes.Record,
          function () {
            return OS.DataTypes.ImmutableBase.getData(
              new Connect2_Assemble_MUIModel.AssembleAttendeeSubdivisionBooleanRecord(),
            );
          },
          false,
          Connect2_Assemble_MUIModel.AssembleAttendeeSubdivisionBooleanRecord,
        ),
        this.attr(
          "BookmarkNote",
          "bookmarkNoteVar",
          "BookmarkNote",
          true,
          false,
          OS.DataTypes.DataTypes.Text,
          function () {
            return "";
          },
          false,
        ),
        this.attr(
          "CountryCode",
          "countryCodeVar",
          "CountryCode",
          true,
          false,
          OS.DataTypes.DataTypes.Text,
          function () {
            return "";
          },
          false,
        ),
        this.attr(
          "LocalityId",
          "localityIdVar",
          "LocalityId",
          true,
          false,
          OS.DataTypes.DataTypes.LongInteger,
          function () {
            return OS.DataTypes.LongInteger.defaultValue;
          },
          false,
        ),
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
          "ShareableObject_Generic",
          "shareableObject_GenericVar",
          "ShareableObject_Generic",
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
          "AssembleAttendeeSubdivision",
          "assembleAttendeeSubdivisionIn",
          "AssembleAttendeeSubdivision",
          true,
          false,
          OS.DataTypes.DataTypes.Record,
          function () {
            return OS.DataTypes.ImmutableBase.getData(
              new Connect2_Assemble_MUIModel.AssembleAttendeeSubdivisionRecord(),
            );
          },
          false,
          Connect2_Assemble_MUIModel.AssembleAttendeeSubdivisionRecord,
        ),
        this.attr(
          "_assembleAttendeeSubdivisionInDataFetchStatus",
          "_assembleAttendeeSubdivisionInDataFetchStatus",
          "_assembleAttendeeSubdivisionInDataFetchStatus",
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
            NavigationHandler_ScrollAnchors_ScrollAnchor_mvcModel.hasValidationWidgets ||
            Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Tag_mvcModel.hasValidationWidgets ||
            Connect2_LegacyShared_Share_ContextMenu_mvcModel.hasValidationWidgets ||
            Connect2_LegacyShared_NewConnect_Skeleton_NC_Result_Item__Image__Skeleton_mvcModel.hasValidationWidgets ||
            Connect2_LegacyShared_MyBookmarks_BookmarkNoteAddEdit_mvcModel.hasValidationWidgets ||
            UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvcModel.hasValidationWidgets ||
            UBTConnect_Utils_CW_Share_ShareSheet_mvcModel.hasValidationWidgets ||
            UBTConnect_Utils_CW_Share_ShareableObject_Generic_mvcModel.hasValidationWidgets;
        }

        return Model._hasValidationWidgetsValue;
      },
    });

    Model.prototype.setInputs = function (inputs) {
      if ("AssembleAttendeeSubdivision" in inputs) {
        this.variables.assembleAttendeeSubdivisionIn =
          inputs.AssembleAttendeeSubdivision;
        if ("_assembleAttendeeSubdivisionInDataFetchStatus" in inputs) {
          this.variables._assembleAttendeeSubdivisionInDataFetchStatus =
            inputs._assembleAttendeeSubdivisionInDataFetchStatus;
        }
      }
    };
    return Model;
  })(OS.Model.BaseViewModel);
  return new OS.Model.ModelFactory(
    Model,
    "Assemble.AssembleEventDetail_AttendeeSubdivision",
  );
});
define("Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision.mvc$view", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_Assemble_MUI.model",
  "Connect2_Assemble_MUI.controller",
  "UBTConnect_Utils.controller",
  "Connect2_Sharing_CS.model",
  "Connect2_LegacyShared.model",
  "NavigationHandler.controller",
  "Connect2_Assemble_CS.model",
  "MemoryClientCache.model",
  "Connect2_LegacyShared.controller",
  "APIDomain_Directory_IS.model",
  "react",
  "OutSystems/ReactView/Main",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision.mvc$model",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision.mvc$controller",
  "OutSystems/ReactWidgets/Main",
  "Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Image.mvc$view",
  "Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item_Badge.mvc$view",
  "NavigationHandler.ScrollAnchors.ScrollAnchor.mvc$view",
  "Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Tag.mvc$view",
  "Connect2_LegacyShared.Share.ContextMenu.mvc$view",
  "Connect2_LegacyShared.NewConnect_Skeleton.NC_Result_Item__Image__Skeleton.mvc$view",
  "Connect2_LegacyShared.MyBookmarks.BookmarkNoteAddEdit.mvc$view",
  "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy.mvc$view",
  "UBTConnect_Utils.CW_Share.ShareSheet.mvc$view",
  "UBTConnect_Utils.CW_Share.ShareableObject_Generic.mvc$view",
  "UBTConnect_Utils.controller$GetHasBookmarNote",
  "Connect2_Assemble_MUI.referencesHealth",
  "Connect2_Assemble_MUI.referencesHealth$UBTConnect_Utils",
  "Connect2_Assemble_MUI.model$AssembleAttendeeSubdivisionBooleanRecord",
  "Connect2_Sharing_CS.model$UI_ShareableObject_GenericRec",
  "Connect2_Assemble_MUI.referencesHealth$Connect2_Sharing_CS",
  "Connect2_Assemble_MUI.model$AssembleAttendeeSubdivisionRecord",
  "Connect2_LegacyShared.model$BookmarkNoteRec",
  "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared",
  "Connect2_Assemble_MUI.controller$MaybeDisplaySubscriptionPopup",
  "NavigationHandler.controller$RememberFocusedScrollAnchor",
  "Connect2_Assemble_MUI.referencesHealth$NavigationHandler",
  "NavigationHandler.controller$SetPreloadObject",
  "Connect2_Assemble_CS.model$AssembleAttendeeGuestRec",
  "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS",
  "Connect2_Assemble_MUI.model$AssembleAttendeeGuestList",
  "Connect2_LegacyShared.model$HouseholdCarouselPreloadingRec",
  "Connect2_LegacyShared.model$CacheableSubdivisionInformationRec",
  "MemoryClientCache.model$MemoryCacheResultRec",
  "Connect2_Assemble_MUI.referencesHealth$MemoryClientCache",
  "Connect2_LegacyShared.controller$GetCacheableSubdivision_V2",
  "APIDomain_Directory_IS.model$LocalityHouseholdsResultItemRec",
  "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS",
  "Connect2_Assemble_MUI.model$LocalityHouseholdsResultItemList",
  "APIDomain_Directory_IS.model$PhotoURLRec",
  "Connect2_Assemble_CS.model$AssembleAttendeeSubdivisionRec",
  "Connect2_Assemble_MUI.controller$ToggleBookmarkItem",
  "NavigationHandler.controller$ConfirmAction",
  "Connect2_LegacyShared.controller$FlipHouseholdName",
  "UBTConnect_Utils.controller$GetHasExtendedShare",
  "Connect2_LegacyShared.model$LocalBookmarkRec",
  "Connect2_Assemble_MUI.model$LocalBookmarkList",
  "Connect2_LegacyShared.controller$GetLocalBookmarksByObjectType",
], function (
  OutSystems,
  Connect2_Assemble_MUIModel,
  Connect2_Assemble_MUIController,
  UBTConnect_UtilsController,
  Connect2_Sharing_CSModel,
  Connect2_LegacySharedModel,
  NavigationHandlerController,
  Connect2_Assemble_CSModel,
  MemoryClientCacheModel,
  Connect2_LegacySharedController,
  APIDomain_Directory_ISModel,
  React,
  OSView,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_AttendeeSubdivision_mvc_model,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_AttendeeSubdivision_mvc_controller,
  OSWidgets,
  Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Image_mvc_view,
  Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item_Badge_mvc_view,
  NavigationHandler_ScrollAnchors_ScrollAnchor_mvc_view,
  Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Tag_mvc_view,
  Connect2_LegacyShared_Share_ContextMenu_mvc_view,
  Connect2_LegacyShared_NewConnect_Skeleton_NC_Result_Item__Image__Skeleton_mvc_view,
  Connect2_LegacyShared_MyBookmarks_BookmarkNoteAddEdit_mvc_view,
  UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view,
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
    View.displayName = "Assemble.AssembleEventDetail_AttendeeSubdivision";
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
        NavigationHandler_ScrollAnchors_ScrollAnchor_mvc_view,
        Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Tag_mvc_view,
        Connect2_LegacyShared_Share_ContextMenu_mvc_view,
        Connect2_LegacyShared_NewConnect_Skeleton_NC_Result_Item__Image__Skeleton_mvc_view,
        Connect2_LegacyShared_MyBookmarks_BookmarkNoteAddEdit_mvc_view,
        UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view,
        UBTConnect_Utils_CW_Share_ShareSheet_mvc_view,
        UBTConnect_Utils_CW_Share_ShareableObject_Generic_mvc_view,
      ];
    };
    Object.defineProperty(View.prototype, "modelFactory", {
      get: function () {
        return Connect2_Assemble_MUI_Assemble_AssembleEventDetail_AttendeeSubdivision_mvc_model;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(View.prototype, "controllerFactory", {
      get: function () {
        return Connect2_Assemble_MUI_Assemble_AssembleEventDetail_AttendeeSubdivision_mvc_controller;
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
            style: "padding-bottom-s padding-left-base",
            visible: true,
            _idProps: {
              service: idService,
              name: "DIV_SubdivisionHousehold",
            },
            _widgetRecordProvider: widgetsRecordProvider,
          },
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
                        "Assemble/AssembleEventDetail_AttendeeSubdivision/DIV_SubdivisionHousehold_Header onclick",
                      );
                      controller.handler_OnClickToggleSubsdivisionList$Action(
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
                idService.getId("DIV_SubdivisionHousehold_Header.Style"),
                function () {
                  return (
                    "list-sticky-records__sticky-record " +
                    (model.variables.assembleAttendeeSubdivision_LocalVar
                      .isSelectedAttr
                      ? "list-sticky-records__sticky-record--active"
                      : "")
                  );
                },
                function () {
                  return model.variables.assembleAttendeeSubdivision_LocalVar
                    .isSelectedAttr;
                },
              ),
              visible: true,
              _idProps: {
                service: idService,
                name: "DIV_SubdivisionHousehold_Header",
              },
              _widgetRecordProvider: widgetsRecordProvider,
            },
            React.createElement(
              Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Image_mvc_view,
              {
                inputs: {
                  In_IsRoundImage: true,
                  ShowPlaceholderForImage: true,
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
                  uuid: "2",
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
                            uuid: "3",
                            alias: "2",
                          },
                          _widgetRecordProvider: widgetsRecordProvider,
                          placeholders: {
                            placeholder_Icon: new PlaceholderContent(
                              function () {
                                return [
                                  React.createElement(OSWidgets.Icon, {
                                    icon: "flag",
                                    iconSize: /*FontSize*/ 0,
                                    style:
                                      "icon connect-icon-groups font-size-h4 text-neutral-6",
                                    visible: true,
                                    _idProps: {
                                      service: idService,
                                      uuid: "4",
                                    },
                                    _widgetRecordProvider:
                                      widgetsRecordProvider,
                                  }),
                                ];
                              },
                            ),
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
                          model.variables.assembleAttendeeSubdivision_LocalVar
                            .assembleAttendeeSubdivisionAttr.nameAttr,
                        _idProps: {
                          service: idService,
                          uuid: "5",
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
                          model.variables.assembleAttendeeSubdivision_LocalVar
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
                                  uuid: "7",
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
                                  uuid: "8",
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
                    model.variables.assembleAttendeeSubdivision_LocalVar
                      .isSelectedAttr,
                  ),
                  asPrimitiveValue(
                    model.variables.assembleAttendeeSubdivision_LocalVar
                      .assembleAttendeeSubdivisionAttr.nameAttr,
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
                model.variables.assembleAttendeeSubdivision_LocalVar
                  .isSelectedAttr,
              _idProps: {
                service: idService,
                name: "DIV_SubdivisionHousehold_List",
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
                model.variables.assembleAttendeeSubdivision_LocalVar
                  .assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr,
              style: "list list-group",
              tag: "div",
              _idProps: {
                service: idService,
                name: "List_SubdivisionHousehold",
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
                          style: "padding-y-base padding-x-s",
                          visible: true,
                          _idProps: {
                            service: idService,
                            uuid: "11",
                          },
                          _widgetRecordProvider: widgetsRecordProvider,
                          _dependencies: [
                            asPrimitiveValue(
                              model.variables.assembleAttendeeSubdivision_LocalVar.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr.getCurrent(
                                callContext.iterationContext,
                              ).isBookmarkedAttr,
                            ),
                            asPrimitiveValue(
                              model.variables.assembleAttendeeSubdivision_LocalVar.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr.getCurrent(
                                callContext.iterationContext,
                              ).isDisabledAttr,
                            ),
                            asPrimitiveValue(
                              model.variables.assembleAttendeeSubdivision_LocalVar.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr.getCurrent(
                                callContext.iterationContext,
                              ).locationAttr,
                            ),
                            asPrimitiveValue(
                              model.variables.assembleAttendeeSubdivision_LocalVar.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr.getCurrent(
                                callContext.iterationContext,
                              ).nameAttr,
                            ),
                            asPrimitiveValue(
                              model.variables.assembleAttendeeSubdivision_LocalVar.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr.getCurrent(
                                callContext.iterationContext,
                              ).avatarURLAttr.signedURLAttr,
                            ),
                            asPrimitiveValue(
                              model.variables.assembleAttendeeSubdivision_LocalVar.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr.getCurrent(
                                callContext.iterationContext,
                              ).avatarURLAttr.pathAttr,
                            ),
                            asPrimitiveValue(
                              model.variables.assembleAttendeeSubdivision_LocalVar.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr.getCurrent(
                                callContext.iterationContext,
                              ).avatarURLAttr.typeAttr,
                            ),
                            asPrimitiveValue(
                              model.variables.assembleAttendeeSubdivision_LocalVar.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr.getCurrent(
                                callContext.iterationContext,
                              ).avatarURLAttr.bucketAttr,
                            ),
                            asPrimitiveValue(
                              model.variables.assembleAttendeeSubdivision_LocalVar.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr.getCurrent(
                                callContext.iterationContext,
                              ).idAttr,
                            ),
                          ],
                        },
                        $if(
                          !model.variables.assembleAttendeeSubdivision_LocalVar.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr
                            .getCurrent(callContext.iterationContext)
                            .idAttr.equals(
                              OS.BuiltinFunctions.integerToLongInteger(
                                OS.BuiltinFunctions.nullIdentifier(),
                              ),
                            ),
                          false,
                          this,
                          function () {
                            return [
                              React.createElement(
                                NavigationHandler_ScrollAnchors_ScrollAnchor_mvc_view,
                                {
                                  inputs: {
                                    Id: OS.BuiltinFunctions.longIntegerToText(
                                      model.variables.assembleAttendeeSubdivision_LocalVar.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr.getCurrent(
                                        callContext.iterationContext,
                                      ).idAttr,
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
                                    uuid: "12",
                                    alias: "3",
                                  },
                                  _widgetRecordProvider: widgetsRecordProvider,
                                  _dependencies: [],
                                },
                              ),
                              React.createElement(
                                Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Image_mvc_view,
                                {
                                  inputs: {
                                    In_Bucket:
                                      model.variables.assembleAttendeeSubdivision_LocalVar.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr.getCurrent(
                                        callContext.iterationContext,
                                      ).avatarURLAttr.bucketAttr,
                                    In_ImageHeight: 45,
                                    In_Type:
                                      model.variables.assembleAttendeeSubdivision_LocalVar.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr.getCurrent(
                                        callContext.iterationContext,
                                      ).avatarURLAttr.typeAttr,
                                    ShowPlaceholderForImage: false,
                                    In_Path:
                                      model.variables.assembleAttendeeSubdivision_LocalVar.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr.getCurrent(
                                        callContext.iterationContext,
                                      ).avatarURLAttr.pathAttr,
                                    In_SignedURL:
                                      model.variables.assembleAttendeeSubdivision_LocalVar.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr.getCurrent(
                                        callContext.iterationContext,
                                      ).avatarURLAttr.signedURLAttr,
                                    In_ResultItemVisualWidth: 67,
                                  },
                                  events: {
                                    _handleError: function (ex) {
                                      controller.handleError(ex);
                                    },
                                    onClick_Item$Action: function () {
                                      return Promise.resolve().then(
                                        function () {
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
                                                "NewConnect_Utilities/NC_Result_Item__Image OnClick_Item",
                                              );
                                              return controller.handler_OnClickHousehold$Action(
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
                                      );
                                    },
                                  },
                                  _validationProps: {
                                    validationService: validationService,
                                  },
                                  _idProps: {
                                    service: idService,
                                    uuid: "13",
                                    alias: "4",
                                  },
                                  _widgetRecordProvider: widgetsRecordProvider,
                                  placeholders: {
                                    label: PlaceholderContent.Empty,
                                    imagePlaceholder: PlaceholderContent.Empty,
                                    title_Placeholder: new PlaceholderContent(
                                      function () {
                                        return [
                                          React.createElement(
                                            OSWidgets.Expression,
                                            {
                                              style: "font-size-s",
                                              value:
                                                model.variables.assembleAttendeeSubdivision_LocalVar.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr.getCurrent(
                                                  callContext.iterationContext,
                                                ).nameAttr,
                                              _idProps: {
                                                service: idService,
                                                uuid: "14",
                                              },
                                              _widgetRecordProvider:
                                                widgetsRecordProvider,
                                            },
                                          ),
                                        ];
                                      },
                                    ),
                                    description_Placeholder:
                                      new PlaceholderContent(function () {
                                        return [
                                          React.createElement(
                                            Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Tag_mvc_view,
                                            {
                                              inputs: {},
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
                                                uuid: "15",
                                                alias: "5",
                                              },
                                              _widgetRecordProvider:
                                                widgetsRecordProvider,
                                              placeholders: {
                                                label: new PlaceholderContent(
                                                  function () {
                                                    return [
                                                      React.createElement(
                                                        OSWidgets.Expression,
                                                        {
                                                          value:
                                                            model.variables.assembleAttendeeSubdivision_LocalVar.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr.getCurrent(
                                                              callContext.iterationContext,
                                                            ).locationAttr,
                                                          _idProps: {
                                                            service: idService,
                                                            uuid: "16",
                                                          },
                                                          _widgetRecordProvider:
                                                            widgetsRecordProvider,
                                                        },
                                                      ),
                                                    ];
                                                  },
                                                ),
                                              },
                                              _dependencies: [
                                                asPrimitiveValue(
                                                  model.variables.assembleAttendeeSubdivision_LocalVar.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr.getCurrent(
                                                    callContext.iterationContext,
                                                  ).locationAttr,
                                                ),
                                              ],
                                            },
                                          ),
                                        ];
                                      }),
                                    action_Placeholder: new PlaceholderContent(
                                      function () {
                                        return [
                                          React.createElement(
                                            OSWidgets.Container,
                                            {
                                              align: /*Default*/ 0,
                                              animate: false,
                                              style: "margin-left-base",
                                              visible: true,
                                              _idProps: {
                                                service: idService,
                                                uuid: "17",
                                              },
                                              _widgetRecordProvider:
                                                widgetsRecordProvider,
                                            },
                                            React.createElement(
                                              Connect2_LegacyShared_Share_ContextMenu_mvc_view,
                                              {
                                                inputs: {
                                                  IsRecordAvailable:
                                                    !model.variables.assembleAttendeeSubdivision_LocalVar.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr.getCurrent(
                                                      callContext.iterationContext,
                                                    ).isDisabledAttr,
                                                  IsBookmarked:
                                                    model.variables.assembleAttendeeSubdivision_LocalVar.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr.getCurrent(
                                                      callContext.iterationContext,
                                                    ).isBookmarkedAttr,
                                                },
                                                events: {
                                                  _handleError: function (ex) {
                                                    controller.handleError(ex);
                                                  },
                                                  bookmarkButtonClicked$Action:
                                                    function (
                                                      isItemBookmarkedIn,
                                                    ) {
                                                      return Promise.resolve().then(
                                                        function () {
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
                                                                "Share/ContextMenu BookmarkButtonClicked",
                                                              );
                                                              return controller.handler_OnClickBookmarkButton$Action(
                                                                isItemBookmarkedIn,
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
                                                      );
                                                    },
                                                  shareProfileToOthers$Action:
                                                    function () {
                                                      return Promise.resolve().then(
                                                        function () {
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
                                                                "Share/ContextMenu ShareProfileToOthers",
                                                              );
                                                              return controller.handler_OnShareToOthers$Action(
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
                                                      );
                                                    },
                                                  shareProfileToConnect$Action:
                                                    function () {
                                                      return Promise.resolve().then(
                                                        function () {
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
                                                                "Share/ContextMenu ShareProfileToConnect",
                                                              );
                                                              return controller.handler_OnClickShareConnect$Action(
                                                                Connect2_Assemble_MUIModel
                                                                  .staticEntities
                                                                  .type_ShareObject
                                                                  .household,
                                                                model.variables.assembleAttendeeSubdivision_LocalVar.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr.getCurrent(
                                                                  callContext.iterationContext,
                                                                ).idAttr,
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
                                                      );
                                                    },
                                                },
                                                _validationProps: {
                                                  validationService:
                                                    validationService,
                                                },
                                                _idProps: {
                                                  service: idService,
                                                  uuid: "18",
                                                  alias: "6",
                                                },
                                                _widgetRecordProvider:
                                                  widgetsRecordProvider,
                                                placeholders: {
                                                  anchorPlaceHolder:
                                                    new PlaceholderContent(
                                                      function () {
                                                        return [
                                                          React.createElement(
                                                            OSWidgets.Icon,
                                                            {
                                                              icon: "ellipsis-h",
                                                              iconSize: /*FontSize*/ 0,
                                                              style: "icon ",
                                                              visible: true,
                                                              _idProps: {
                                                                service:
                                                                  idService,
                                                                uuid: "19",
                                                              },
                                                              _widgetRecordProvider:
                                                                widgetsRecordProvider,
                                                            },
                                                          ),
                                                        ];
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
                                      model.variables.assembleAttendeeSubdivision_LocalVar.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr.getCurrent(
                                        callContext.iterationContext,
                                      ).idAttr,
                                    ),
                                    asPrimitiveValue(
                                      model.variables.assembleAttendeeSubdivision_LocalVar.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr.getCurrent(
                                        callContext.iterationContext,
                                      ).isBookmarkedAttr,
                                    ),
                                    asPrimitiveValue(
                                      model.variables.assembleAttendeeSubdivision_LocalVar.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr.getCurrent(
                                        callContext.iterationContext,
                                      ).isDisabledAttr,
                                    ),
                                    asPrimitiveValue(
                                      model.variables.assembleAttendeeSubdivision_LocalVar.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr.getCurrent(
                                        callContext.iterationContext,
                                      ).locationAttr,
                                    ),
                                    asPrimitiveValue(
                                      model.variables.assembleAttendeeSubdivision_LocalVar.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr.getCurrent(
                                        callContext.iterationContext,
                                      ).nameAttr,
                                    ),
                                  ],
                                },
                              ),
                            ];
                          },
                          function () {
                            return [
                              React.createElement(
                                Connect2_LegacyShared_NewConnect_Skeleton_NC_Result_Item__Image__Skeleton_mvc_view,
                                {
                                  inputs: {
                                    In_ImageHeight: 45,
                                    In_ResultItemVisualWidth: 67,
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
                                    uuid: "20",
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
        ),
        $if(
          OutSystemsDebugger.handleFunctionCall(
            function () {
              return UBTConnect_UtilsController.default.getHasBookmarNote$Action(
                callContext,
              ).hasBookmarkNoteAccessOut;
            },
            OS.DataTypes.DataTypes.Boolean,
            callContext.id,
          ),
          false,
          this,
          function () {
            return [
              React.createElement(
                Connect2_LegacyShared_MyBookmarks_BookmarkNoteAddEdit_mvc_view,
                {
                  inputs: {},
                  events: {
                    _handleError: function (ex) {
                      controller.handleError(ex);
                    },
                    save_Note$Action: function (bookmarkNoteIn) {
                      var eventHandlerContext = callContext.clone();
                      return OS.Flow.tryFinally(
                        function () {
                          var varBag = {};
                          controller.pushDebuggerContext(eventHandlerContext);

                          OutSystemsDebugger.setThreadStartName(
                            eventHandlerContext.id,
                            "MyBookmarks/BookmarkNoteAddEdit Save_Note",
                          );
                          controller.handler_OnAddBookmarkNote$Action(
                            bookmarkNoteIn.noteAttr,
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
                    name: "Bookmark_Note",
                    alias: "8",
                  },
                  _widgetRecordProvider: widgetsRecordProvider,
                  _dependencies: [],
                },
              ),
            ];
          },
          function () {
            return [];
          },
        ),
        React.createElement(
          UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view,
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
              name: "FreeSubscriptionAlert",
              alias: "9",
            },
            _widgetRecordProvider: widgetsRecordProvider,
            _dependencies: [],
          },
        ),
        React.createElement(UBTConnect_Utils_CW_Share_ShareSheet_mvc_view, {
          inputs: {
            In_ShareableObjectId: model.variables.shareableObjectIdVar,
            In_ShareObjectTypeId:
              Connect2_Assemble_MUIModel.staticEntities.type_ShareObject
                .household,
            In_IsLegacy: true,
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
            uuid: "23",
            alias: "10",
          },
          _widgetRecordProvider: widgetsRecordProvider,
          placeholders: {
            placeholder_ShareableObject: new PlaceholderContent(function () {
              return [
                $if(
                  model.variables.shareableObjectIdVar !==
                    OS.BuiltinFunctions.nullTextIdentifier(),
                  false,
                  this,
                  function () {
                    return [
                      React.createElement(
                        UBTConnect_Utils_CW_Share_ShareableObject_Generic_mvc_view,
                        {
                          inputs: {
                            In_ShareableObject:
                              model.variables.shareableObject_GenericVar,
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
                            alias: "11",
                          },
                          _widgetRecordProvider: widgetsRecordProvider,
                          _dependencies: [],
                        },
                      ),
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
            asPrimitiveValue(model.variables.shareableObject_GenericVar),
            asPrimitiveValue(model.variables.shareableObjectIdVar),
          ],
        }),
      );
    };
    return View;
  })(OSView.BaseView.BaseWebBlock);

  return View;
});
define("Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision.mvc$controller", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_Assemble_MUI.model",
  "Connect2_Assemble_MUI.controller",
  "UBTConnect_Utils.controller",
  "Connect2_Sharing_CS.model",
  "Connect2_LegacyShared.model",
  "NavigationHandler.controller",
  "Connect2_Assemble_CS.model",
  "MemoryClientCache.model",
  "Connect2_LegacyShared.controller",
  "APIDomain_Directory_IS.model",
  "Connect2_Assemble_MUI.languageResources",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision.mvc$debugger",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS",
  "UBTConnect_Utils.controller$GetHasBookmarNote",
  "Connect2_Assemble_MUI.referencesHealth",
  "Connect2_Assemble_MUI.referencesHealth$UBTConnect_Utils",
  "Connect2_Assemble_MUI.model$AssembleAttendeeSubdivisionBooleanRecord",
  "Connect2_Sharing_CS.model$UI_ShareableObject_GenericRec",
  "Connect2_Assemble_MUI.referencesHealth$Connect2_Sharing_CS",
  "Connect2_Assemble_MUI.model$AssembleAttendeeSubdivisionRecord",
  "Connect2_LegacyShared.model$BookmarkNoteRec",
  "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared",
  "Connect2_Assemble_MUI.controller$MaybeDisplaySubscriptionPopup",
  "NavigationHandler.controller$RememberFocusedScrollAnchor",
  "Connect2_Assemble_MUI.referencesHealth$NavigationHandler",
  "NavigationHandler.controller$SetPreloadObject",
  "Connect2_Assemble_CS.model$AssembleAttendeeGuestRec",
  "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS",
  "Connect2_Assemble_MUI.model$AssembleAttendeeGuestList",
  "Connect2_LegacyShared.model$HouseholdCarouselPreloadingRec",
  "Connect2_LegacyShared.model$CacheableSubdivisionInformationRec",
  "MemoryClientCache.model$MemoryCacheResultRec",
  "Connect2_Assemble_MUI.referencesHealth$MemoryClientCache",
  "Connect2_LegacyShared.controller$GetCacheableSubdivision_V2",
  "APIDomain_Directory_IS.model$LocalityHouseholdsResultItemRec",
  "Connect2_Assemble_MUI.referencesHealth$APIDomain_Directory_IS",
  "Connect2_Assemble_MUI.model$LocalityHouseholdsResultItemList",
  "APIDomain_Directory_IS.model$PhotoURLRec",
  "Connect2_Assemble_CS.model$AssembleAttendeeSubdivisionRec",
  "Connect2_Assemble_MUI.controller$ToggleBookmarkItem",
  "NavigationHandler.controller$ConfirmAction",
  "Connect2_LegacyShared.controller$FlipHouseholdName",
  "UBTConnect_Utils.controller$GetHasExtendedShare",
  "Connect2_LegacyShared.model$LocalBookmarkRec",
  "Connect2_Assemble_MUI.model$LocalBookmarkList",
  "Connect2_LegacyShared.controller$GetLocalBookmarksByObjectType",
], function (
  OutSystems,
  Connect2_Assemble_MUIModel,
  Connect2_Assemble_MUIController,
  UBTConnect_UtilsController,
  Connect2_Sharing_CSModel,
  Connect2_LegacySharedModel,
  NavigationHandlerController,
  Connect2_Assemble_CSModel,
  MemoryClientCacheModel,
  Connect2_LegacySharedController,
  APIDomain_Directory_ISModel,
  Connect2_Assemble_MUILanguageResources,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_AttendeeSubdivision_mvc_Debugger,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_AttendeeSubdivision_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS,
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
    Controller.prototype._handler_OnClickHousehold$Action = function (
      callContext,
    ) {
      var varBag = {};
      var model = this.model;
      var controller = this.controller;
      var idService = this.idService;
      varBag.model = model;
      varBag.idService = idService;
      controller.ensureControllerAlive("Handler_OnClickHousehold");
      callContext = controller.callContext(callContext);
      var vars = new OS.DataTypes.VariableHolder(
        new (controller.constructor.getVariableGroupType(
          "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision.Handler_OnClickHousehold$vars",
        ))(),
      );
      var maybeDisplaySubscriptionPopup2Var = new OS.DataTypes.VariableHolder();
      varBag.callContext = callContext;
      varBag.vars = vars;
      varBag.maybeDisplaySubscriptionPopup2Var =
        maybeDisplaySubscriptionPopup2Var;
      OutSystemsDebugger.push(
        "4YvUCWT53U+6BrZWsVWc3Q:L_Q3BYphNE2OKYzZ3NG_qg:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.r2J7jRf41UqGbr67L5lP6w/ClientActions.L_Q3BYphNE2OKYzZ3NG_qg:Ln7MGT7eh40Z1Cq90TcG3w",
        "Connect2_Assemble_MUI",
        "Handler_OnClickHousehold",
        "NRFlows.ClientScreenActionFlow",
        callContext.id,
        varBag,
      );
      OutSystemsDebugger.handleBreakpoint(
        "4YvUCWT53U+6BrZWsVWc3Q:sZGzWUyuuEKW+tTRv+ZOqw",
        callContext.id,
      );
      return OS.Flow.executeAsyncFlow(function () {
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:J6blEh_uoE+daQA18jKFsw",
          callContext.id,
        );
        // Execute Action: MaybeDisplaySubscriptionPopup2
        model.flush();
        return Connect2_Assemble_MUIController.default
          .maybeDisplaySubscriptionPopup$Action(
            model.variables.countryCodeVar,
            model.variables.localityIdVar,
            idService.getId("FreeSubscriptionAlert"),
            callContext,
          )
          .then(function (value) {
            maybeDisplaySubscriptionPopup2Var.value = value;
          })
          .then(function () {
            return OS.Flow.executeSequence(function () {
              if (
                OutSystemsDebugger.handleBreakpoint(
                  "4YvUCWT53U+6BrZWsVWc3Q:25Kv_xZpj0q6N96ZhE9dcw",
                  callContext.id,
                ) &&
                maybeDisplaySubscriptionPopup2Var.value.isDisplayedPopupOut
              ) {
                OutSystemsDebugger.handleBreakpoint(
                  "4YvUCWT53U+6BrZWsVWc3Q:c_caNII2Mk6ajaentPGUVQ",
                  callContext.id,
                );
              } else {
                OutSystemsDebugger.handleBreakpoint(
                  "4YvUCWT53U+6BrZWsVWc3Q:080bHYJt0UyP6tzUaV80ww",
                  callContext.id,
                );
                // Execute Action: RememberFocusedScrollAnchor
                NavigationHandlerController.default.rememberFocusedScrollAnchor$Action(
                  idService.getId("List_SubdivisionHousehold"),
                  model.variables.assembleAttendeeSubdivision_LocalVar.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr.getCurrentRowNumber(
                    callContext.iterationContext,
                  ),
                  OS.BuiltinFunctions.longIntegerToText(
                    model.variables.assembleAttendeeSubdivision_LocalVar.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr.getCurrent(
                      callContext.iterationContext,
                    ).idAttr,
                  ),
                  callContext,
                );
                OutSystemsDebugger.handleBreakpoint(
                  "4YvUCWT53U+6BrZWsVWc3Q:8cRbUH+cV0SjKBs90klIeQ",
                  callContext.id,
                );
                // HouseholdIdList = AssembleAttendeeSubdivision_Local.AssembleAttendeeSubdivision.SubdivisionHouseholdList
                vars.value.householdIdListVar =
                  OS.DataConversion.JSConversions.typeConvertRecordList(
                    model.variables.assembleAttendeeSubdivision_LocalVar
                      .assembleAttendeeSubdivisionAttr
                      .subdivisionHouseholdListAttr,
                    new OS.DataTypes.LongIntegerList(),
                    function (source, target) {
                      target = source.idAttr;
                      return target;
                    },
                  );
                OutSystemsDebugger.handleBreakpoint(
                  "4YvUCWT53U+6BrZWsVWc3Q:AUrwiuRA00e4dGHMknqSXQ",
                  callContext.id,
                );
                // Execute Action: SetPreloadObject2
                NavigationHandlerController.default.setPreloadObject$Action(
                  OS.BuiltinFunctions.toObject(vars.value.householdIdListVar),
                  callContext,
                );
                OutSystemsDebugger.handleBreakpoint(
                  "4YvUCWT53U+6BrZWsVWc3Q:9N089dZnBEWDldIF4D5MOQ",
                  callContext.id,
                );
                // Trigger Event: NavigateTo_HouseholdCarouselCarousel
                return controller
                  .navigateTo_HouseholdCarousel$Action(
                    model.variables.assembleAttendeeSubdivision_LocalVar.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr.getCurrentRowNumber(
                      callContext.iterationContext,
                    ),
                    model.variables.assembleAttendeeSubdivision_LocalVar.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr.getCurrent(
                      callContext.iterationContext,
                    ).idAttr,
                    callContext,
                  )
                  .then(function () {
                    OutSystemsDebugger.handleBreakpoint(
                      "4YvUCWT53U+6BrZWsVWc3Q:10h5gGClr0CX1VF9KhOfZA",
                      callContext.id,
                    );
                  });
              }
            });
          });
      })
        .then(function (res) {
          OutSystemsDebugger.pop(
            "4YvUCWT53U+6BrZWsVWc3Q:L_Q3BYphNE2OKYzZ3NG_qg",
            callContext.id,
          );
          return res;
        })
        .catch(function (ex) {
          OutSystemsDebugger.handleException(ex, callContext.id);
          OutSystemsDebugger.pop(
            "4YvUCWT53U+6BrZWsVWc3Q:L_Q3BYphNE2OKYzZ3NG_qg",
            callContext.id,
          );
          throw ex;
        });
    };
    Controller.registerVariableGroupType(
      "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision.Handler_OnClickHousehold$vars",
      [
        {
          name: "HouseholdCarouselPreloading",
          attrName: "householdCarouselPreloadingVar",
          mandatory: false,
          dataType: OS.DataTypes.DataTypes.Record,
          defaultValue: function () {
            return new Connect2_LegacySharedModel.HouseholdCarouselPreloadingRec();
          },
          complexType:
            Connect2_LegacySharedModel.HouseholdCarouselPreloadingRec,
        },
        {
          name: "HouseholdIdList",
          attrName: "householdIdListVar",
          mandatory: false,
          dataType: OS.DataTypes.DataTypes.RecordList,
          defaultValue: function () {
            return new OS.DataTypes.LongIntegerList();
          },
          complexType: OS.DataTypes.LongIntegerList,
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
      controller.ensureControllerAlive("OnReady");
      callContext = controller.callContext(callContext);
      var getCacheableSubdivision_V2Var = new OS.DataTypes.VariableHolder();
      var wasCurrentViewRestoredFromCacheJSResult =
        new OS.DataTypes.VariableHolder();
      varBag.callContext = callContext;
      varBag.getCacheableSubdivision_V2Var = getCacheableSubdivision_V2Var;
      varBag.wasCurrentViewRestoredFromCacheJSResult =
        wasCurrentViewRestoredFromCacheJSResult;
      OutSystemsDebugger.push(
        "4YvUCWT53U+6BrZWsVWc3Q:noYeCHdQ2ES7BDiU_BCCxg:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.r2J7jRf41UqGbr67L5lP6w/ClientActions.noYeCHdQ2ES7BDiU_BCCxg:AfbAyCNZ4yZJbFAsqA73Hg",
        "Connect2_Assemble_MUI",
        "OnReady",
        "NRFlows.ClientScreenActionFlow",
        callContext.id,
        varBag,
      );
      OutSystemsDebugger.handleBreakpoint(
        "4YvUCWT53U+6BrZWsVWc3Q:hk6H4ci8jESWQKoUK8iJWw",
        callContext.id,
      );
      return OS.Flow.executeAsyncFlow(function () {
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:ISlzqsnSj0aUC9AqQ3wfoQ",
          callContext.id,
        );
        wasCurrentViewRestoredFromCacheJSResult.value =
          controller.safeExecuteJSNode(
            Connect2_Assemble_MUI_Assemble_AssembleEventDetail_AttendeeSubdivision_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS,
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
                  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision.OnReady$wasCurrentViewRestoredFromCacheJSResult",
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
              "4YvUCWT53U+6BrZWsVWc3Q:eqHk8VgPBECO2Q4ulNYtGA",
              callContext.id,
            ) &&
            wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut === true
          ) {
            // >>
            OutSystemsDebugger.handleBreakpoint(
              "4YvUCWT53U+6BrZWsVWc3Q:vYvJodCWzUKjiZiTsrTo5g",
              callContext.id,
            );
            // <<
            OutSystemsDebugger.handleBreakpoint(
              "4YvUCWT53U+6BrZWsVWc3Q:AZDubNXB8kq7tk1sl29oyQ",
              callContext.id,
            );
          } else {
            OutSystemsDebugger.handleBreakpoint(
              "4YvUCWT53U+6BrZWsVWc3Q:WV3VHPntoEOR5XsxQfX71Q",
              callContext.id,
            );
            // AssembleAttendeeSubdivision_Local = AssembleAttendeeSubdivision.AssembleAttendeeSubdivision
            model.variables.assembleAttendeeSubdivision_LocalVar =
              OS.DataConversion.JSConversions.typeConvertRecord(
                model.variables.assembleAttendeeSubdivisionIn
                  .assembleAttendeeSubdivisionAttr,
                new Connect2_Assemble_MUIModel.AssembleAttendeeSubdivisionBooleanRecord(),
                function (source, target) {
                  target.assembleAttendeeSubdivisionAttr.idAttr = source.idAttr;
                  target.assembleAttendeeSubdivisionAttr.nameAttr =
                    source.nameAttr;
                  target.assembleAttendeeSubdivisionAttr.householdCountAttr =
                    source.householdCountAttr;
                  target.assembleAttendeeSubdivisionAttr.localityIdAttr =
                    source.localityIdAttr;
                  target.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr =
                    source.subdivisionHouseholdListAttr;
                  target.isSelectedAttr = false;
                  return target;
                },
              );
            OutSystemsDebugger.handleBreakpoint(
              "4YvUCWT53U+6BrZWsVWc3Q:BgEbe6Lxj0Gbdqf2vNAt4Q",
              callContext.id,
            );
            // Execute Action: BuildSkeletonList
            controller._buildSkeletonList$Action(callContext);
            OutSystemsDebugger.handleBreakpoint(
              "4YvUCWT53U+6BrZWsVWc3Q:+EjpC3e2m0Spiq_9AEmNuA",
              callContext.id,
            );
            // Execute Action: GetCacheableSubdivision_V2
            model.flush();
            return Connect2_LegacySharedController.default
              .getCacheableSubdivision_V2$Action(
                model.variables.assembleAttendeeSubdivision_LocalVar
                  .assembleAttendeeSubdivisionAttr.idAttr,
                callContext,
              )
              .then(function (value) {
                getCacheableSubdivision_V2Var.value = value;
              })
              .then(function () {
                OutSystemsDebugger.handleBreakpoint(
                  "4YvUCWT53U+6BrZWsVWc3Q:g8cXGs_HskS3b8bugNCVoQ",
                  callContext.id,
                );
                // AssembleAttendeeSubdivision_Local.AssembleAttendeeSubdivision.SubdivisionHouseholdList = GetCacheableSubdivision_V2.SubdivisionInformation.HouseholdListResponse
                model.variables.assembleAttendeeSubdivision_LocalVar.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr =
                  OS.DataConversion.JSConversions.typeConvertRecordList(
                    getCacheableSubdivision_V2Var.value
                      .subdivisionInformationOut.householdListResponseAttr,
                    new Connect2_Assemble_MUIModel.AssembleAttendeeGuestList(),
                    function (source, target) {
                      target.idAttr = source.idAttr;
                      target.nameAttr = source.nameAttr;
                      target.familyNamesAttr = source.familyAttr;
                      target.locationAttr = source.locationAttr;
                      target.isBookmarkedAttr = source.isBookmarkedAttr;
                      target.avatarURLAttr = (function () {
                        var rec = new APIDomain_Directory_ISModel.PhotoURLRec();
                        rec.bucketAttr = source.photo340Attr.bucketAttr;
                        rec.pathAttr = source.photo340Attr.pathAttr;
                        rec.typeAttr = source.photo340Attr.typeAttr;
                        rec.signedURLAttr = source.photo340Attr.signedURLAttr;
                        return rec;
                      })();
                      return target;
                    },
                  );
                OutSystemsDebugger.handleBreakpoint(
                  "4YvUCWT53U+6BrZWsVWc3Q:g8cXGs_HskS3b8bugNCVoQ",
                  callContext.id,
                  OutSystemsDebugger.BreakpointType.BetweenAssignments,
                  "2",
                );
                // CountryCode = GetCacheableSubdivision_V2.SubdivisionInformation.Subdivision.Locality.Country.Code
                model.variables.countryCodeVar =
                  getCacheableSubdivision_V2Var.value.subdivisionInformationOut.subdivisionAttr.localityAttr.countryAttr.codeAttr;
                OutSystemsDebugger.handleBreakpoint(
                  "4YvUCWT53U+6BrZWsVWc3Q:g8cXGs_HskS3b8bugNCVoQ",
                  callContext.id,
                  OutSystemsDebugger.BreakpointType.BetweenAssignments,
                  "3",
                );
                // LocalityId = GetCacheableSubdivision_V2.SubdivisionInformation.Subdivision.Locality.Id
                model.variables.localityIdVar =
                  getCacheableSubdivision_V2Var.value.subdivisionInformationOut.subdivisionAttr.localityAttr.idAttr;
              });
          }
        }).then(function () {
          OutSystemsDebugger.handleBreakpoint(
            "4YvUCWT53U+6BrZWsVWc3Q:876gzXFCE0GzzPeE02JerA",
            callContext.id,
          );
          // Execute Action: Set_SelectedAssembleAttendeeListBookmarks
          return controller
            ._set_SelectedAssembleAttendeeListBookmarks$Action(callContext)
            .then(function () {
              OutSystemsDebugger.handleBreakpoint(
                "4YvUCWT53U+6BrZWsVWc3Q:++qkdk4i9U6IAKnyf0BZuw",
                callContext.id,
              );
            });
        });
      })
        .then(function (res) {
          OutSystemsDebugger.pop(
            "4YvUCWT53U+6BrZWsVWc3Q:noYeCHdQ2ES7BDiU_BCCxg",
            callContext.id,
          );
          return res;
        })
        .catch(function (ex) {
          OutSystemsDebugger.handleException(ex, callContext.id);
          OutSystemsDebugger.pop(
            "4YvUCWT53U+6BrZWsVWc3Q:noYeCHdQ2ES7BDiU_BCCxg",
            callContext.id,
          );
          throw ex;
        });
    };
    Controller.registerVariableGroupType(
      "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision.OnReady$wasCurrentViewRestoredFromCacheJSResult",
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
    Controller.prototype._handler_OnClickToggleSubsdivisionList$Action =
      function (callContext) {
        var varBag = {};
        var model = this.model;
        var controller = this.controller;
        var idService = this.idService;
        varBag.model = model;
        varBag.idService = idService;
        controller.ensureControllerAlive(
          "Handler_OnClickToggleSubsdivisionList",
        );
        callContext = controller.callContext(callContext);
        varBag.callContext = callContext;
        try {
          OutSystemsDebugger.push(
            "4YvUCWT53U+6BrZWsVWc3Q:HS38KMfuokOrqh8GqLj8rg:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.r2J7jRf41UqGbr67L5lP6w/ClientActions.HS38KMfuokOrqh8GqLj8rg:xq8kiFQ9ENeMhQTAD6o8Rw",
            "Connect2_Assemble_MUI",
            "Handler_OnClickToggleSubsdivisionList",
            "NRFlows.ClientScreenActionFlow",
            callContext.id,
            varBag,
          );
          OutSystemsDebugger.handleBreakpoint(
            "4YvUCWT53U+6BrZWsVWc3Q:Yy_BVElpREWu_pkLupibXQ",
            callContext.id,
          );
          OutSystemsDebugger.handleBreakpoint(
            "4YvUCWT53U+6BrZWsVWc3Q:J39tb3Wv4kiuDpYMBRI71w",
            callContext.id,
          );
          // AssembleAttendeeSubdivision_Local.IsSelected = notAssembleAttendeeSubdivision_Local.IsSelected
          model.variables.assembleAttendeeSubdivision_LocalVar.isSelectedAttr =
            !model.variables.assembleAttendeeSubdivision_LocalVar
              .isSelectedAttr;
          OutSystemsDebugger.handleBreakpoint(
            "4YvUCWT53U+6BrZWsVWc3Q:fJQKterll0apIh939eX3xw",
            callContext.id,
          );
        } catch (ex) {
          OutSystemsDebugger.handleException(ex, callContext.id);
          throw ex;
        } finally {
          OutSystemsDebugger.pop(
            "4YvUCWT53U+6BrZWsVWc3Q:HS38KMfuokOrqh8GqLj8rg",
            callContext.id,
          );
        }
      };
    Controller.prototype._handler_OnClickBookmarkButton$Action = function (
      isItemBookmarkedIn,
      callContext,
    ) {
      var varBag = {};
      var model = this.model;
      var controller = this.controller;
      var idService = this.idService;
      varBag.model = model;
      varBag.idService = idService;
      controller.ensureControllerAlive("Handler_OnClickBookmarkButton");
      callContext = controller.callContext(callContext);
      var vars = new OS.DataTypes.VariableHolder(
        new (controller.constructor.getVariableGroupType(
          "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision.Handler_OnClickBookmarkButton$vars",
        ))(),
      );
      vars.value.isItemBookmarkedInLocal = isItemBookmarkedIn;
      var maybeDisplaySubscriptionPopupVar = new OS.DataTypes.VariableHolder();
      var toggleBookmarkItemVar = new OS.DataTypes.VariableHolder();
      var confirmActionVar = new OS.DataTypes.VariableHolder();
      varBag.callContext = callContext;
      varBag.vars = vars;
      varBag.maybeDisplaySubscriptionPopupVar =
        maybeDisplaySubscriptionPopupVar;
      varBag.toggleBookmarkItemVar = toggleBookmarkItemVar;
      varBag.confirmActionVar = confirmActionVar;
      OutSystemsDebugger.push(
        "4YvUCWT53U+6BrZWsVWc3Q:sfkmeW_PcEuWBwuArtMGYw:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.r2J7jRf41UqGbr67L5lP6w/ClientActions.sfkmeW_PcEuWBwuArtMGYw:5gjTfXqc6yflr3CdTi6Hjg",
        "Connect2_Assemble_MUI",
        "Handler_OnClickBookmarkButton",
        "NRFlows.ClientScreenActionFlow",
        callContext.id,
        varBag,
      );
      OutSystemsDebugger.handleBreakpoint(
        "4YvUCWT53U+6BrZWsVWc3Q:GYhWnRG6JEqaPrbdSu9M9w",
        callContext.id,
      );
      return OS.Flow.executeAsyncFlow(function () {
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:1aPhPpdo+USYm72ttPE5Jw",
          callContext.id,
        );
        // Execute Action: MaybeDisplaySubscriptionPopup
        model.flush();
        return Connect2_Assemble_MUIController.default
          .maybeDisplaySubscriptionPopup$Action(
            model.variables.countryCodeVar,
            model.variables.localityIdVar,
            idService.getId("FreeSubscriptionAlert"),
            callContext,
          )
          .then(function (value) {
            maybeDisplaySubscriptionPopupVar.value = value;
          })
          .then(function () {
            return OS.Flow.executeSequence(function () {
              if (
                OutSystemsDebugger.handleBreakpoint(
                  "4YvUCWT53U+6BrZWsVWc3Q:8sPx_L5DUE+cVBKqyTy8XA",
                  callContext.id,
                ) &&
                maybeDisplaySubscriptionPopupVar.value.isDisplayedPopupOut
              ) {
                OutSystemsDebugger.handleBreakpoint(
                  "4YvUCWT53U+6BrZWsVWc3Q:fV_VxZX2JkS_h1YElFa0ZQ",
                  callContext.id,
                );
              } else {
                return OS.Flow.executeSequence(function () {
                  if (
                    OutSystemsDebugger.handleBreakpoint(
                      "4YvUCWT53U+6BrZWsVWc3Q:mls+emAeAEKjcv+lQ7wIEg",
                      callContext.id,
                    ) &&
                    !model.variables.assembleAttendeeSubdivision_LocalVar.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr.getCurrent(
                      callContext.iterationContext,
                    ).isBookmarkedAttr
                  ) {
                    OutSystemsDebugger.handleBreakpoint(
                      "4YvUCWT53U+6BrZWsVWc3Q:aHVwkRnPRkiRmRyXM1IV9Q",
                      callContext.id,
                    );
                    // Execute Action: ConfirmAction
                    model.flush();
                    return NavigationHandlerController.default
                      .confirmAction$Action(
                        idService.getId("Bookmark_Note"),
                        callContext,
                      )
                      .then(function (value) {
                        confirmActionVar.value = value;
                      })
                      .then(function () {
                        if (
                          OutSystemsDebugger.handleBreakpoint(
                            "4YvUCWT53U+6BrZWsVWc3Q:iH8zxLIPEEi7bdquKbVQ9A",
                            callContext.id,
                          ) &&
                          confirmActionVar.value.isConfirmedOut
                        ) {
                          OutSystemsDebugger.handleBreakpoint(
                            "4YvUCWT53U+6BrZWsVWc3Q:8JT5EHV4J0+e_5d8XiJ48A",
                            callContext.id,
                          );
                          // BookmarkNote = Trim
                          model.variables.bookmarkNoteVar =
                            OS.BuiltinFunctions.trim(
                              model.variables.bookmarkNoteVar,
                            );
                        }
                      });
                  }
                }).then(function () {
                  OutSystemsDebugger.handleBreakpoint(
                    "4YvUCWT53U+6BrZWsVWc3Q:Cq0LjGFL6kqJlpSbXhlOqA",
                    callContext.id,
                  );
                  // Execute Action: ToggleBookmarkItem
                  model.flush();
                  return Connect2_Assemble_MUIController.default
                    .toggleBookmarkItem$Action(
                      model.variables.assembleAttendeeSubdivision_LocalVar.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr.getCurrent(
                        callContext.iterationContext,
                      ).isBookmarkedAttr,
                      Connect2_Assemble_MUIModel.staticEntities
                        .myBookmarks_ObjectType.contact,
                      model.variables.assembleAttendeeSubdivision_LocalVar.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr.getCurrent(
                        callContext.iterationContext,
                      ).idAttr,
                      Connect2_Assemble_MUIModel.staticEntities
                        .myBookmarks_Group.contacts,
                      model.variables.bookmarkNoteVar,
                      callContext,
                    )
                    .then(function (value) {
                      toggleBookmarkItemVar.value = value;
                    })
                    .then(function () {
                      OutSystemsDebugger.handleBreakpoint(
                        "4YvUCWT53U+6BrZWsVWc3Q:pRDTT9cwrUmrIPYUxOTc8A",
                        callContext.id,
                      );
                      // AssembleAttendeeSubdivision_Local.AssembleAttendeeSubdivision.SubdivisionHouseholdList.Current.IsBookmarked = notIsItemBookmarked
                      model.variables.assembleAttendeeSubdivision_LocalVar.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr.getCurrent(
                        callContext.iterationContext,
                      ).isBookmarkedAttr = !vars.value.isItemBookmarkedInLocal;
                      OutSystemsDebugger.handleBreakpoint(
                        "4YvUCWT53U+6BrZWsVWc3Q:ThfwyLIE_ku9znbs_IYCeQ",
                        callContext.id,
                      );
                      // BookmarkNote = ""
                      model.variables.bookmarkNoteVar = "";
                      OutSystemsDebugger.handleBreakpoint(
                        "4YvUCWT53U+6BrZWsVWc3Q:8qIYk+q1nki_+QVfI_dsig",
                        callContext.id,
                      );
                    });
                });
              }
            });
          });
      })
        .then(function (res) {
          OutSystemsDebugger.pop(
            "4YvUCWT53U+6BrZWsVWc3Q:sfkmeW_PcEuWBwuArtMGYw",
            callContext.id,
          );
          return res;
        })
        .catch(function (ex) {
          OutSystemsDebugger.handleException(ex, callContext.id);
          OutSystemsDebugger.pop(
            "4YvUCWT53U+6BrZWsVWc3Q:sfkmeW_PcEuWBwuArtMGYw",
            callContext.id,
          );
          throw ex;
        });
    };
    Controller.registerVariableGroupType(
      "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision.Handler_OnClickBookmarkButton$vars",
      [
        {
          name: "IsItemBookmarked",
          attrName: "isItemBookmarkedInLocal",
          mandatory: true,
          dataType: OS.DataTypes.DataTypes.Boolean,
          defaultValue: function () {
            return false;
          },
        },
      ],
    );
    Controller.prototype._handler_OnClickShareConnect$Action = function (
      shareObjectTypeIdIn,
      objectIdIn,
      callContext,
    ) {
      var varBag = {};
      var model = this.model;
      var controller = this.controller;
      var idService = this.idService;
      varBag.model = model;
      varBag.idService = idService;
      controller.ensureControllerAlive("Handler_OnClickShareConnect");
      callContext = controller.callContext(callContext);
      var vars = new OS.DataTypes.VariableHolder(
        new (controller.constructor.getVariableGroupType(
          "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision.Handler_OnClickShareConnect$vars",
        ))(),
      );
      vars.value.shareObjectTypeIdInLocal = shareObjectTypeIdIn;
      vars.value.objectIdInLocal = objectIdIn;
      var maybeDisplaySubscriptionPopupVar = new OS.DataTypes.VariableHolder();
      varBag.callContext = callContext;
      varBag.vars = vars;
      varBag.maybeDisplaySubscriptionPopupVar =
        maybeDisplaySubscriptionPopupVar;
      OutSystemsDebugger.push(
        "4YvUCWT53U+6BrZWsVWc3Q:FVVmiuiZNUK2t1Nm3lUnkA:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.r2J7jRf41UqGbr67L5lP6w/ClientActions.FVVmiuiZNUK2t1Nm3lUnkA:zR+Lr33qlPyZvkyhsB6yug",
        "Connect2_Assemble_MUI",
        "Handler_OnClickShareConnect",
        "NRFlows.ClientScreenActionFlow",
        callContext.id,
        varBag,
      );
      OutSystemsDebugger.handleBreakpoint(
        "4YvUCWT53U+6BrZWsVWc3Q:uXXIGzzwD02+152geae_eQ",
        callContext.id,
      );
      return OS.Flow.executeAsyncFlow(function () {
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:4+XSA4RBs0ii+UVKkhBfbw",
          callContext.id,
        );
        // Execute Action: MaybeDisplaySubscriptionPopup
        model.flush();
        return Connect2_Assemble_MUIController.default
          .maybeDisplaySubscriptionPopup$Action(
            model.variables.countryCodeVar,
            model.variables.localityIdVar,
            idService.getId("FreeSubscriptionAlert"),
            callContext,
          )
          .then(function (value) {
            maybeDisplaySubscriptionPopupVar.value = value;
          })
          .then(function () {
            return OS.Flow.executeSequence(function () {
              if (
                OutSystemsDebugger.handleBreakpoint(
                  "4YvUCWT53U+6BrZWsVWc3Q:wOZAyOxNF0+gEXrp2Siokg",
                  callContext.id,
                ) &&
                maybeDisplaySubscriptionPopupVar.value.isDisplayedPopupOut
              ) {
                OutSystemsDebugger.handleBreakpoint(
                  "4YvUCWT53U+6BrZWsVWc3Q:UKOmIsKvck6c5icIxNPp4g",
                  callContext.id,
                );
              } else {
                return OS.Flow.executeSequence(function () {
                  if (
                    OutSystemsDebugger.handleBreakpoint(
                      "4YvUCWT53U+6BrZWsVWc3Q:u3baaFiHzkuFqOjv8R9Wiw",
                      callContext.id,
                    ) &&
                    OutSystemsDebugger.handleFunctionCall(
                      function () {
                        return UBTConnect_UtilsController.default.getHasExtendedShare$Action(
                          callContext,
                        ).hasExtendedShareOut;
                      },
                      OS.DataTypes.DataTypes.Boolean,
                      callContext.id,
                    )
                  ) {
                    OutSystemsDebugger.handleBreakpoint(
                      "4YvUCWT53U+6BrZWsVWc3Q:aakyToSTzUefSlFgw0p51Q",
                      callContext.id,
                    );
                    // ShareableObjectId = AssembleAttendeeSubdivision_Local.AssembleAttendeeSubdivision.SubdivisionHouseholdList.Current.Id
                    model.variables.shareableObjectIdVar =
                      OS.BuiltinFunctions.longIntegerToText(
                        model.variables.assembleAttendeeSubdivision_LocalVar.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr.getCurrent(
                          callContext.iterationContext,
                        ).idAttr,
                      );
                    OutSystemsDebugger.handleBreakpoint(
                      "4YvUCWT53U+6BrZWsVWc3Q:aakyToSTzUefSlFgw0p51Q",
                      callContext.id,
                      OutSystemsDebugger.BreakpointType.BetweenAssignments,
                      "2",
                    );
                    // ShareableObject_Generic = AssembleAttendeeSubdivision_Local.AssembleAttendeeSubdivision.SubdivisionHouseholdList.Current
                    model.variables.shareableObject_GenericVar =
                      OS.DataConversion.JSConversions.typeConvertRecord(
                        model.variables.assembleAttendeeSubdivision_LocalVar.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr.getCurrent(
                          callContext.iterationContext,
                        ),
                        new Connect2_Sharing_CSModel.UI_ShareableObject_GenericRec(),
                        function (source, target) {
                          target.connectEntityTypeIdAttr =
                            Connect2_Assemble_MUIModel.staticEntities.connect_Entity2.household;
                          target.idAttr = model.variables.shareableObjectIdVar;
                          target.signedURLAttr =
                            source.avatarURLAttr.signedURLAttr;
                          target.titleAttr =
                            OutSystemsDebugger.handleFunctionCall(
                              function () {
                                return Connect2_LegacySharedController.default.flipHouseholdName$Action(
                                  source.nameAttr,
                                  callContext,
                                ).out_HouseholdNameFixedOut;
                              },
                              OS.DataTypes.DataTypes.Text,
                              callContext.id,
                            );
                          target.subtitleAttr = source.familyNamesAttr;
                          target.locationAttr = source.locationAttr;
                          return target;
                        },
                      );
                    OutSystemsDebugger.handleBreakpoint(
                      "4YvUCWT53U+6BrZWsVWc3Q:aakyToSTzUefSlFgw0p51Q",
                      callContext.id,
                      OutSystemsDebugger.BreakpointType.BetweenAssignments,
                      "3",
                    );
                    // IsShareOpen = True
                    model.variables.isShareOpenVar = true;
                    OutSystemsDebugger.handleBreakpoint(
                      "4YvUCWT53U+6BrZWsVWc3Q:6Gq90xI9k0yxKQgYGmJ8LA",
                      callContext.id,
                    );
                  } else {
                    OutSystemsDebugger.handleBreakpoint(
                      "4YvUCWT53U+6BrZWsVWc3Q:1JkQlA_tZUGlLZfPOvNAcw",
                      callContext.id,
                    );
                    // Trigger Event: NavigateTo_ShareObject
                    return controller
                      .navigateTo_ShareObject$Action(
                        vars.value.shareObjectTypeIdInLocal,
                        vars.value.objectIdInLocal,
                        false,
                        callContext,
                      )
                      .then(function () {
                        OutSystemsDebugger.handleBreakpoint(
                          "4YvUCWT53U+6BrZWsVWc3Q:6Gq90xI9k0yxKQgYGmJ8LA",
                          callContext.id,
                        );
                      });
                  }
                });
              }
            });
          });
      })
        .then(function (res) {
          OutSystemsDebugger.pop(
            "4YvUCWT53U+6BrZWsVWc3Q:FVVmiuiZNUK2t1Nm3lUnkA",
            callContext.id,
          );
          return res;
        })
        .catch(function (ex) {
          OutSystemsDebugger.handleException(ex, callContext.id);
          OutSystemsDebugger.pop(
            "4YvUCWT53U+6BrZWsVWc3Q:FVVmiuiZNUK2t1Nm3lUnkA",
            callContext.id,
          );
          throw ex;
        });
    };
    Controller.registerVariableGroupType(
      "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision.Handler_OnClickShareConnect$vars",
      [
        {
          name: "ShareObjectTypeId",
          attrName: "shareObjectTypeIdInLocal",
          mandatory: true,
          dataType: OS.DataTypes.DataTypes.Text,
          defaultValue: function () {
            return "";
          },
        },
        {
          name: "ObjectId",
          attrName: "objectIdInLocal",
          mandatory: true,
          dataType: OS.DataTypes.DataTypes.LongInteger,
          defaultValue: function () {
            return OS.DataTypes.LongInteger.defaultValue;
          },
        },
      ],
    );
    Controller.prototype._handler_OnAddBookmarkNote$Action = function (
      noteIn,
      callContext,
    ) {
      var varBag = {};
      var model = this.model;
      var controller = this.controller;
      var idService = this.idService;
      varBag.model = model;
      varBag.idService = idService;
      controller.ensureControllerAlive("Handler_OnAddBookmarkNote");
      callContext = controller.callContext(callContext);
      var vars = new OS.DataTypes.VariableHolder(
        new (controller.constructor.getVariableGroupType(
          "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision.Handler_OnAddBookmarkNote$vars",
        ))(),
      );
      vars.value.noteInLocal = noteIn;
      varBag.callContext = callContext;
      varBag.vars = vars;
      try {
        OutSystemsDebugger.push(
          "4YvUCWT53U+6BrZWsVWc3Q:f6wYtOmc8UKxp0ES3zK_KQ:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.r2J7jRf41UqGbr67L5lP6w/ClientActions.f6wYtOmc8UKxp0ES3zK_KQ:XvgWubXiFhaPAlAYaxL8Lg",
          "Connect2_Assemble_MUI",
          "Handler_OnAddBookmarkNote",
          "NRFlows.ClientScreenActionFlow",
          callContext.id,
          varBag,
        );
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:XveC5W_mO0S07_DiRAd2Dg",
          callContext.id,
        );
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:0PSVAZzGNUCm2XgOMBwLGQ",
          callContext.id,
        );
        // BookmarkNote = Note
        model.variables.bookmarkNoteVar = vars.value.noteInLocal;
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:eWdcXIKGG0+5KMcGoaslww",
          callContext.id,
        );
      } catch (ex) {
        OutSystemsDebugger.handleException(ex, callContext.id);
        throw ex;
      } finally {
        OutSystemsDebugger.pop(
          "4YvUCWT53U+6BrZWsVWc3Q:f6wYtOmc8UKxp0ES3zK_KQ",
          callContext.id,
        );
      }
    };
    Controller.registerVariableGroupType(
      "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision.Handler_OnAddBookmarkNote$vars",
      [
        {
          name: "Note",
          attrName: "noteInLocal",
          mandatory: true,
          dataType: OS.DataTypes.DataTypes.Text,
          defaultValue: function () {
            return "";
          },
        },
      ],
    );
    Controller.prototype._set_SelectedAssembleAttendeeListBookmarks$Action =
      function (callContext) {
        var varBag = {};
        var model = this.model;
        var controller = this.controller;
        var idService = this.idService;
        varBag.model = model;
        varBag.idService = idService;
        controller.ensureControllerAlive(
          "Set_SelectedAssembleAttendeeListBookmarks",
        );
        callContext = controller.callContext(callContext);
        var listIndexOfVar = new OS.DataTypes.VariableHolder();
        var getLocalBookmarksByObjectTypeVar =
          new OS.DataTypes.VariableHolder();
        varBag.callContext = callContext;
        varBag.listIndexOfVar = listIndexOfVar;
        varBag.getLocalBookmarksByObjectTypeVar =
          getLocalBookmarksByObjectTypeVar;
        OutSystemsDebugger.push(
          "4YvUCWT53U+6BrZWsVWc3Q:IQquyR2_j0aiQFA5CHjhcQ:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.r2J7jRf41UqGbr67L5lP6w/ClientActions.IQquyR2_j0aiQFA5CHjhcQ:oMqCskycAJ0beUDf5zkuIQ",
          "Connect2_Assemble_MUI",
          "Set_SelectedAssembleAttendeeListBookmarks",
          "NRFlows.ClientScreenActionFlow",
          callContext.id,
          varBag,
        );
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:LZV3583TQ02yapCLmIh0_w",
          callContext.id,
        );
        return OS.Flow.executeAsyncFlow(function () {
          OutSystemsDebugger.handleBreakpoint(
            "4YvUCWT53U+6BrZWsVWc3Q:3axhtE6mVEyNlAf2Lxcxjw",
            callContext.id,
          );
          // Execute Action: GetLocalBookmarksByObjectType
          model.flush();
          return Connect2_LegacySharedController.default
            .getLocalBookmarksByObjectType$Action(
              Connect2_Assemble_MUIModel.staticEntities.myBookmarks_ObjectType
                .contact,
              callContext,
            )
            .then(function (value) {
              getLocalBookmarksByObjectTypeVar.value = value;
            })
            .then(function () {
              // Foreach AssembleAttendeeSubdivision_Local.AssembleAttendeeSubdivision.SubdivisionHouseholdList
              callContext.iterationContext.registerIterationStart(
                model.variables.assembleAttendeeSubdivision_LocalVar
                  .assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr,
              );
            })
            .then(function () {
              try {
                var subdivisionHouseholdListIterator =
                  callContext.iterationContext.getIterator(
                    model.variables.assembleAttendeeSubdivision_LocalVar
                      .assembleAttendeeSubdivisionAttr
                      .subdivisionHouseholdListAttr,
                  );
                var subdivisionHouseholdListIndex = 0;
                while (
                  OutSystemsDebugger.handleBreakpoint(
                    "4YvUCWT53U+6BrZWsVWc3Q:OtgqE+tC80iQUqpcetU7eA",
                    callContext.id,
                  ) &&
                  subdivisionHouseholdListIndex <
                    model.variables.assembleAttendeeSubdivision_LocalVar
                      .assembleAttendeeSubdivisionAttr
                      .subdivisionHouseholdListAttr.length
                ) {
                  subdivisionHouseholdListIterator.currentRowNumber =
                    subdivisionHouseholdListIndex;
                  OutSystemsDebugger.handleBreakpoint(
                    "4YvUCWT53U+6BrZWsVWc3Q:N0hfKrDgv0q4KDsk4u6YOw",
                    callContext.id,
                  );
                  // Execute Action: ListIndexOf
                  listIndexOfVar.value = OS.SystemActions.listIndexOf(
                    getLocalBookmarksByObjectTypeVar.value.myBookmarksListOut,
                    function (p) {
                      return p.objectIdAttr.equals(
                        model.variables.assembleAttendeeSubdivision_LocalVar.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr.getItem(
                          subdivisionHouseholdListIndex.valueOf(),
                        ).idAttr,
                      );
                    },
                    callContext,
                  );

                  OutSystemsDebugger.handleBreakpoint(
                    "4YvUCWT53U+6BrZWsVWc3Q:z9xCrJt5sk+HIcricRwLBQ",
                    callContext.id,
                  );
                  // AssembleAttendeeSubdivision_Local.AssembleAttendeeSubdivision.SubdivisionHouseholdList.Current.IsBookmarked = ListIndexOf.Position <> -1
                  model.variables.assembleAttendeeSubdivision_LocalVar.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr.getItem(
                    subdivisionHouseholdListIndex.valueOf(),
                  ).isBookmarkedAttr = listIndexOfVar.value.positionOut !== -1;
                  subdivisionHouseholdListIndex++;
                }
              } finally {
                callContext.iterationContext.registerIterationEnd(
                  model.variables.assembleAttendeeSubdivision_LocalVar
                    .assembleAttendeeSubdivisionAttr
                    .subdivisionHouseholdListAttr,
                );
              }

              OutSystemsDebugger.handleBreakpoint(
                "4YvUCWT53U+6BrZWsVWc3Q:RWZ7Uch1D0m17V2n7bS4IQ",
                callContext.id,
              );
            });
        })
          .then(function (res) {
            OutSystemsDebugger.pop(
              "4YvUCWT53U+6BrZWsVWc3Q:IQquyR2_j0aiQFA5CHjhcQ",
              callContext.id,
            );
            return res;
          })
          .catch(function (ex) {
            OutSystemsDebugger.handleException(ex, callContext.id);
            OutSystemsDebugger.pop(
              "4YvUCWT53U+6BrZWsVWc3Q:IQquyR2_j0aiQFA5CHjhcQ",
              callContext.id,
            );
            throw ex;
          });
      };
    Controller.prototype._handler_OnShareToOthers$Action = function (
      callContext,
    ) {
      var varBag = {};
      var model = this.model;
      var controller = this.controller;
      var idService = this.idService;
      varBag.model = model;
      varBag.idService = idService;
      controller.ensureControllerAlive("Handler_OnShareToOthers");
      callContext = controller.callContext(callContext);
      var maybeDisplaySubscriptionPopupVar = new OS.DataTypes.VariableHolder();
      varBag.callContext = callContext;
      varBag.maybeDisplaySubscriptionPopupVar =
        maybeDisplaySubscriptionPopupVar;
      OutSystemsDebugger.push(
        "4YvUCWT53U+6BrZWsVWc3Q:vj461VzEzEqKkYcpNeC_7A:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.r2J7jRf41UqGbr67L5lP6w/ClientActions.vj461VzEzEqKkYcpNeC_7A:nFZdyfY_DmI7B3u9+uP4Lw",
        "Connect2_Assemble_MUI",
        "Handler_OnShareToOthers",
        "NRFlows.ClientScreenActionFlow",
        callContext.id,
        varBag,
      );
      OutSystemsDebugger.handleBreakpoint(
        "4YvUCWT53U+6BrZWsVWc3Q:jcdr1VDaaEO+lOMGAbUD3Q",
        callContext.id,
      );
      return OS.Flow.executeAsyncFlow(function () {
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:kDe2PoImiE+_W+Vpgn1tlg",
          callContext.id,
        );
        // Execute Action: MaybeDisplaySubscriptionPopup
        model.flush();
        return Connect2_Assemble_MUIController.default
          .maybeDisplaySubscriptionPopup$Action(
            model.variables.countryCodeVar,
            model.variables.localityIdVar,
            idService.getId("FreeSubscriptionAlert"),
            callContext,
          )
          .then(function (value) {
            maybeDisplaySubscriptionPopupVar.value = value;
          })
          .then(function () {
            return OS.Flow.executeSequence(function () {
              if (
                OutSystemsDebugger.handleBreakpoint(
                  "4YvUCWT53U+6BrZWsVWc3Q:O3O3Q2xWJ0OhN3KOno5tSQ",
                  callContext.id,
                ) &&
                maybeDisplaySubscriptionPopupVar.value.isDisplayedPopupOut
              ) {
                OutSystemsDebugger.handleBreakpoint(
                  "4YvUCWT53U+6BrZWsVWc3Q:0wRbF58QP0uQN6dRFEq5oQ",
                  callContext.id,
                );
              } else {
                OutSystemsDebugger.handleBreakpoint(
                  "4YvUCWT53U+6BrZWsVWc3Q:F0iggbMI0Uug4Ojg4FFZ5A",
                  callContext.id,
                );
                // Trigger Event: NavigateTo_ShareToOthers
                return controller
                  .navigateTo_ShareObject$Action(
                    Connect2_Assemble_MUIModel.staticEntities.type_ShareObject
                      .household,
                    model.variables.assembleAttendeeSubdivision_LocalVar.assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr.getCurrent(
                      callContext.iterationContext,
                    ).idAttr,
                    true,
                    callContext,
                  )
                  .then(function () {
                    OutSystemsDebugger.handleBreakpoint(
                      "4YvUCWT53U+6BrZWsVWc3Q:48x8oH5qyUy0wFjSnpn5QA",
                      callContext.id,
                    );
                  });
              }
            });
          });
      })
        .then(function (res) {
          OutSystemsDebugger.pop(
            "4YvUCWT53U+6BrZWsVWc3Q:vj461VzEzEqKkYcpNeC_7A",
            callContext.id,
          );
          return res;
        })
        .catch(function (ex) {
          OutSystemsDebugger.handleException(ex, callContext.id);
          OutSystemsDebugger.pop(
            "4YvUCWT53U+6BrZWsVWc3Q:vj461VzEzEqKkYcpNeC_7A",
            callContext.id,
          );
          throw ex;
        });
    };
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
          "4YvUCWT53U+6BrZWsVWc3Q:U5XF4bvhmEG3xP8ThKesgA:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.r2J7jRf41UqGbr67L5lP6w/ClientActions.U5XF4bvhmEG3xP8ThKesgA:URXg0gXaZva8AhK9C5hQ2A",
          "Connect2_Assemble_MUI",
          "Handler_CloseShareSheet",
          "NRFlows.ClientScreenActionFlow",
          callContext.id,
          varBag,
        );
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:AkRu9iQkd0i_4N58uD1e3Q",
          callContext.id,
        );
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:k+x+nxDBQk6AocmwPtAxYA",
          callContext.id,
        );
        // IsShareOpen = False
        model.variables.isShareOpenVar = false;
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:k+x+nxDBQk6AocmwPtAxYA",
          callContext.id,
          OutSystemsDebugger.BreakpointType.BetweenAssignments,
          "2",
        );
        // ShareableObjectId = ""
        model.variables.shareableObjectIdVar = "";
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:gd4XJZpTYkW23+s_ZGVQlw",
          callContext.id,
        );
      } catch (ex) {
        OutSystemsDebugger.handleException(ex, callContext.id);
        throw ex;
      } finally {
        OutSystemsDebugger.pop(
          "4YvUCWT53U+6BrZWsVWc3Q:U5XF4bvhmEG3xP8ThKesgA",
          callContext.id,
        );
      }
    };
    Controller.prototype._buildSkeletonList$Action = function (callContext) {
      var varBag = {};
      var model = this.model;
      var controller = this.controller;
      var idService = this.idService;
      varBag.model = model;
      varBag.idService = idService;
      controller.ensureControllerAlive("BuildSkeletonList");
      callContext = controller.callContext(callContext);
      var vars = new OS.DataTypes.VariableHolder(
        new (controller.constructor.getVariableGroupType(
          "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision.BuildSkeletonList$vars",
        ))(),
      );
      varBag.callContext = callContext;
      varBag.vars = vars;
      try {
        OutSystemsDebugger.push(
          "4YvUCWT53U+6BrZWsVWc3Q:1keM+9H9wUiPCo05mDIgYQ:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.r2J7jRf41UqGbr67L5lP6w/ClientActions.1keM+9H9wUiPCo05mDIgYQ:sU9Tnu5Gt6QbnQO6VlgoQA",
          "Connect2_Assemble_MUI",
          "BuildSkeletonList",
          "NRFlows.ClientScreenActionFlow",
          callContext.id,
          varBag,
        );
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:NZe++AcI50ium9b5VvtwcQ",
          callContext.id,
        );
        while (
          OutSystemsDebugger.handleBreakpoint(
            "4YvUCWT53U+6BrZWsVWc3Q:dGXg_7_Ug0+ZYhSCF+dBpQ",
            callContext.id,
          ) &&
          OS.BuiltinFunctions.integerToLongInteger(vars.value.iteratorVar).lt(
            model.variables.assembleAttendeeSubdivisionIn
              .assembleAttendeeSubdivisionAttr.householdCountAttr,
          )
        ) {
          OutSystemsDebugger.handleBreakpoint(
            "4YvUCWT53U+6BrZWsVWc3Q:8UGP_+zZU0ySBHP4EZhygQ",
            callContext.id,
          );
          // Execute Action: ListAppend
          OS.SystemActions.listAppend(
            model.variables.assembleAttendeeSubdivision_LocalVar
              .assembleAttendeeSubdivisionAttr.subdivisionHouseholdListAttr,
            (function () {
              var rec =
                new Connect2_Assemble_CSModel.AssembleAttendeeGuestRec();
              rec.idAttr = OS.BuiltinFunctions.integerToLongInteger(
                OS.BuiltinFunctions.nullIdentifier(),
              );
              return rec;
            })(),
            callContext,
          );
          OutSystemsDebugger.handleBreakpoint(
            "4YvUCWT53U+6BrZWsVWc3Q:FgH7GSee0EyYl1X1SfOZ7Q",
            callContext.id,
          );
          // Iterator = Iterator + 1
          vars.value.iteratorVar = vars.value.iteratorVar + 1;
        }

        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:LOppmVGgU0m10TrkHBnyJg",
          callContext.id,
        );
      } catch (ex) {
        OutSystemsDebugger.handleException(ex, callContext.id);
        throw ex;
      } finally {
        OutSystemsDebugger.pop(
          "4YvUCWT53U+6BrZWsVWc3Q:1keM+9H9wUiPCo05mDIgYQ",
          callContext.id,
        );
      }
    };
    Controller.registerVariableGroupType(
      "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision.BuildSkeletonList$vars",
      [
        {
          name: "Iterator",
          attrName: "iteratorVar",
          mandatory: false,
          dataType: OS.DataTypes.DataTypes.Integer,
          defaultValue: function () {
            return 0;
          },
        },
      ],
    );

    Controller.prototype.handler_OnClickHousehold$Action = function (
      callContext,
    ) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(
        controller._handler_OnClickHousehold$Action,
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
    Controller.prototype.handler_OnClickToggleSubsdivisionList$Action =
      function (callContext) {
        var controller = this.controller;
        return controller.safeExecuteClientAction(
          controller._handler_OnClickToggleSubsdivisionList$Action,
          callContext,
        );
      };
    Controller.prototype.handler_OnClickBookmarkButton$Action = function (
      isItemBookmarkedIn,
      callContext,
    ) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(
        controller._handler_OnClickBookmarkButton$Action,
        callContext,
        isItemBookmarkedIn,
      );
    };
    Controller.prototype.handler_OnClickShareConnect$Action = function (
      shareObjectTypeIdIn,
      objectIdIn,
      callContext,
    ) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(
        controller._handler_OnClickShareConnect$Action,
        callContext,
        shareObjectTypeIdIn,
        objectIdIn,
      );
    };
    Controller.prototype.handler_OnAddBookmarkNote$Action = function (
      noteIn,
      callContext,
    ) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(
        controller._handler_OnAddBookmarkNote$Action,
        callContext,
        noteIn,
      );
    };
    Controller.prototype.set_SelectedAssembleAttendeeListBookmarks$Action =
      function (callContext) {
        var controller = this.controller;
        return controller.safeExecuteClientAction(
          controller._set_SelectedAssembleAttendeeListBookmarks$Action,
          callContext,
        );
      };
    Controller.prototype.handler_OnShareToOthers$Action = function (
      callContext,
    ) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(
        controller._handler_OnShareToOthers$Action,
        callContext,
      );
    };
    Controller.prototype.handler_CloseShareSheet$Action = function (
      callContext,
    ) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(
        controller._handler_CloseShareSheet$Action,
        callContext,
      );
    };
    Controller.prototype.buildSkeletonList$Action = function (callContext) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(
        controller._buildSkeletonList$Action,
        callContext,
      );
    };
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
        "4YvUCWT53U+6BrZWsVWc3Q:r2J7jRf41UqGbr67L5lP6w:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.r2J7jRf41UqGbr67L5lP6w:OtFtE547QPU6ll__YgSBMQ",
        "Connect2_Assemble_MUI",
        "AssembleEventDetail_AttendeeSubdivision",
        "NRNodes.WebBlock",
        callContext.id,
        varBag,
      );
    };
    Controller.prototype.popDebuggerContext = function (callContext) {
      OutSystemsDebugger.pop(
        "4YvUCWT53U+6BrZWsVWc3Q:r2J7jRf41UqGbr67L5lP6w",
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
            "Assemble/AssembleEventDetail_AttendeeSubdivision On Ready",
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
    Controller.prototype.onParametersChangedEventHandler = function (
      callContext,
    ) {
      var controller = this.controller;
      var model = this.model;
      var idService = this.idService;

      return OS.Flow.tryFinally(
        function () {
          var varBag = {};
          controller.pushDebuggerContext(callContext);

          OutSystemsDebugger.setThreadStartName(
            callContext.id,
            "Assemble/AssembleEventDetail_AttendeeSubdivision On Parameters Changed",
          );
          return controller.set_SelectedAssembleAttendeeListBookmarks$Action(
            callContext,
          );
        },
        function () {
          controller.popDebuggerContext(callContext);
        },
      );
    };
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
define("Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", [], function () {
  return function ($parameters, $actions, $roles, $public) {
    $parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
  };
});

define("Connect2_Assemble_MUI.Assemble.AssembleEventDetail_AttendeeSubdivision.mvc$debugger", [
  "exports",
  "OutSystems/ClientRuntime/Debugger",
  "OutSystems/ClientRuntime/Main",
], function (exports, Debugger, OutSystems) {
  var OS = OutSystems.Internal;
  var metaInfo = {
    nygPRnsrNESO3cOeNlTUpw: {
      getter: function (varBag, idService) {
        return varBag.vars.value.householdCarouselPreloadingVar;
      },
    },
    "2fNjxjCzWEOrwg6a1_jM8A": {
      getter: function (varBag, idService) {
        return varBag.vars.value.householdIdListVar;
      },
    },
    "J6blEh_uoE+daQA18jKFsw": {
      getter: function (varBag, idService) {
        return varBag.maybeDisplaySubscriptionPopup2Var.value;
      },
    },
    "+EjpC3e2m0Spiq_9AEmNuA": {
      getter: function (varBag, idService) {
        return varBag.getCacheableSubdivision_V2Var.value;
      },
    },
    ISlzqsnSj0aUC9AqQ3wfoQ: {
      getter: function (varBag, idService) {
        return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
      },
    },
    rWPNxDIcw06T7NsyM0KSZA: {
      getter: function (varBag, idService) {
        return varBag.vars.value.isItemBookmarkedInLocal;
      },
      dataType: OS.DataTypes.DataTypes.Boolean,
    },
    "1aPhPpdo+USYm72ttPE5Jw": {
      getter: function (varBag, idService) {
        return varBag.maybeDisplaySubscriptionPopupVar.value;
      },
    },
    Cq0LjGFL6kqJlpSbXhlOqA: {
      getter: function (varBag, idService) {
        return varBag.toggleBookmarkItemVar.value;
      },
    },
    aHVwkRnPRkiRmRyXM1IV9Q: {
      getter: function (varBag, idService) {
        return varBag.confirmActionVar.value;
      },
    },
    rFBXAnFFOUyiHtvtIvF_6A: {
      getter: function (varBag, idService) {
        return varBag.vars.value.shareObjectTypeIdInLocal;
      },
      dataType: OS.DataTypes.DataTypes.Text,
    },
    dhq6wVpV4kqtl5vxtaao_w: {
      getter: function (varBag, idService) {
        return varBag.vars.value.objectIdInLocal;
      },
      dataType: OS.DataTypes.DataTypes.LongInteger,
    },
    "4+XSA4RBs0ii+UVKkhBfbw": {
      getter: function (varBag, idService) {
        return varBag.maybeDisplaySubscriptionPopupVar.value;
      },
    },
    "w_C1j823IUeyOvhC4C+7sA": {
      getter: function (varBag, idService) {
        return varBag.vars.value.noteInLocal;
      },
      dataType: OS.DataTypes.DataTypes.Text,
    },
    N0hfKrDgv0q4KDsk4u6YOw: {
      getter: function (varBag, idService) {
        return varBag.listIndexOfVar.value;
      },
    },
    "3axhtE6mVEyNlAf2Lxcxjw": {
      getter: function (varBag, idService) {
        return varBag.getLocalBookmarksByObjectTypeVar.value;
      },
    },
    "kDe2PoImiE+_W+Vpgn1tlg": {
      getter: function (varBag, idService) {
        return varBag.maybeDisplaySubscriptionPopupVar.value;
      },
    },
    JaQQc1Nr3UKPDxIiuHzEOw: {
      getter: function (varBag, idService) {
        return varBag.vars.value.iteratorVar;
      },
      dataType: OS.DataTypes.DataTypes.Integer,
    },
    "xJjmq+rbnUOD9wH53W2Hug": {
      getter: function (varBag, idService) {
        return varBag.model.variables.assembleAttendeeSubdivision_LocalVar;
      },
    },
    fl2Ik6nXCEWbbUWtOAF3RQ: {
      getter: function (varBag, idService) {
        return varBag.model.variables.bookmarkNoteVar;
      },
      dataType: OS.DataTypes.DataTypes.Text,
    },
    "r5w3LMDS50+AKj7uaDFkTg": {
      getter: function (varBag, idService) {
        return varBag.model.variables.countryCodeVar;
      },
      dataType: OS.DataTypes.DataTypes.Text,
    },
    C30fmYUebUKdzakK20IlSw: {
      getter: function (varBag, idService) {
        return varBag.model.variables.localityIdVar;
      },
      dataType: OS.DataTypes.DataTypes.LongInteger,
    },
    "37dMsal8ikqgKuUAun5WPw": {
      getter: function (varBag, idService) {
        return varBag.model.variables.isShareOpenVar;
      },
      dataType: OS.DataTypes.DataTypes.Boolean,
    },
    "A+K7JrbgI0ew+RM6qva9ZQ": {
      getter: function (varBag, idService) {
        return varBag.model.variables.shareableObjectIdVar;
      },
      dataType: OS.DataTypes.DataTypes.Text,
    },
    jtGchLLcD0ebV9Q9wXh0Tg: {
      getter: function (varBag, idService) {
        return varBag.model.variables.shareableObject_GenericVar;
      },
    },
    "1V8DzYhzUUOc6zdbnXGziw": {
      getter: function (varBag, idService) {
        return varBag.model.variables.assembleAttendeeSubdivisionIn;
      },
    },
    "9A8t0YCB8E6Hrr_wcM07+w": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("DIV_SubdivisionHousehold"));
        })(varBag.model, idService);
      },
    },
    Jb4BU6nRGUaZe9d8odiSpg: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(
            idService.getId("DIV_SubdivisionHousehold_Header"),
          );
        })(varBag.model, idService);
      },
    },
    "tBZU50SpFEKgT+pilEBcmg": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Label"));
        })(varBag.model, idService);
      },
    },
    Xg9pSpqpBU6HTyUzCJJ64A: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("ImagePlaceholder"));
        })(varBag.model, idService);
      },
    },
    DAeYURaiUEmPOdjTa0LZmA: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Placeholder_Icon"));
        })(varBag.model, idService);
      },
    },
    k0AvOo8A3UWFEkGb5b6DWQ: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Title_Placeholder"));
        })(varBag.model, idService);
      },
    },
    zC4AfKVNSUun3_0IYV9gNA: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Description_Placeholder"));
        })(varBag.model, idService);
      },
    },
    AYQ9VHHsmEu9PTsFxuTqiQ: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Action_Placeholder"));
        })(varBag.model, idService);
      },
    },
    y9Nb7ydSKEu6ox33AybfVg: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(
            idService.getId("DIV_ToggleSubsdivisionList"),
          );
        })(varBag.model, idService);
      },
    },
    Ng9dLfxh7E6i2IQQs75U0A: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(
            idService.getId("DIV_SubdivisionHousehold_List"),
          );
        })(varBag.model, idService);
      },
    },
    RqMn6nM9gESeTS2_GlCHeA: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(
            idService.getId("List_SubdivisionHousehold"),
          );
        })(varBag.model, idService);
      },
    },
    "JhXkZPCGdUy5QXjOb+liVQ": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Label"));
        })(varBag.model, idService);
      },
    },
    QBMUq6WIGkO8nm5JYLlGdA: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("ImagePlaceholder"));
        })(varBag.model, idService);
      },
    },
    "AO0c_FSB5U+j7OVB+923Yw": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Title_Placeholder"));
        })(varBag.model, idService);
      },
    },
    IWu_0kxdKU2nS69m9Fwuzw: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Description_Placeholder"));
        })(varBag.model, idService);
      },
    },
    "FxSPfl6PrUCuCciZ4GE+Sw": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Label"));
        })(varBag.model, idService);
      },
    },
    JcnmDTTZnE6rSCvRTv8tBw: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Action_Placeholder"));
        })(varBag.model, idService);
      },
    },
    "_eXthkAFpUO4O+2zhOEaQw": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("AnchorPlaceHolder"));
        })(varBag.model, idService);
      },
    },
    "4px+vPM4TEuOOG5aj8i4Yw": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("WaitingforFF"));
        })(varBag.model, idService);
      },
    },
    tJD09SJAL0a1UE7mwAuIfw: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Bookmark_Note"));
        })(varBag.model, idService);
      },
    },
    jQ8G_6NDo0mZmwL19fIk5A: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("FreeSubscriptionAlert"));
        })(varBag.model, idService);
      },
    },
    G1JXZCUmW0yKdcdoTmUV0w: {
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
