define("Connect2_Assemble_MUI.Assemble.AssembleEventDetail_Contact.mvc$model", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_Assemble_MUI.model",
  "UBTConnect_Utils.model",
  "Connect2_Assemble_CS.model",
  "Connect2_LegacyShared.controller",
  "UBTConnect_Utils.controller",
  "Connect2_Assemble_MUI.controller",
  "Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Image.mvc$model",
  "Connect2_LegacyShared.Reusable.Person_Contact_Options.mvc$model",
  "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy.mvc$model",
  "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc$model",
  "UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc$model",
  "UBTConnect_Utils.model$ContactByPhonePopupDataRec",
  "Connect2_Assemble_MUI.referencesHealth",
  "Connect2_Assemble_MUI.referencesHealth$UBTConnect_Utils",
  "UBTConnect_Utils.model$ContactPopupDataRec",
  "Connect2_Assemble_CS.model$AssembleEventContactRec",
  "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS",
  "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec",
  "Connect2_LegacyShared.controller$GetCacheableSignedPhotoURL",
  "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared",
  "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp",
  "Connect2_Assemble_MUI.controller$HasAccessToRegion",
], function (
  OutSystems,
  Connect2_Assemble_MUIModel,
  UBTConnect_UtilsModel,
  Connect2_Assemble_CSModel,
  Connect2_LegacySharedController,
  UBTConnect_UtilsController,
  Connect2_Assemble_MUIController,
  Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Image_mvcModel,
  Connect2_LegacyShared_Reusable_Person_Contact_Options_mvcModel,
  UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvcModel,
  UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvcModel,
  UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvcModel,
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
          "UnavailableContactValue",
          "unavailableContactValueVar",
          "UnavailableContactValue",
          true,
          false,
          OS.DataTypes.DataTypes.Text,
          function () {
            return "Unavailable";
          },
          false,
        ),
        this.attr(
          "CallPopup",
          "callPopupVar",
          "CallPopup",
          true,
          false,
          OS.DataTypes.DataTypes.Record,
          function () {
            return OS.DataTypes.ImmutableBase.getData(
              new UBTConnect_UtilsModel.ContactByPhonePopupDataRec(),
            );
          },
          false,
          UBTConnect_UtilsModel.ContactByPhonePopupDataRec,
        ),
        this.attr(
          "ContactPopupData",
          "contactPopupDataVar",
          "ContactPopupData",
          true,
          false,
          OS.DataTypes.DataTypes.Record,
          function () {
            return OS.DataTypes.ImmutableBase.getData(
              new UBTConnect_UtilsModel.ContactPopupDataRec(),
            );
          },
          false,
          UBTConnect_UtilsModel.ContactPopupDataRec,
        ),
        this.attr(
          "IsDataFetched",
          "isDataFetchedIn",
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
          "_isDataFetchedInDataFetchStatus",
          "_isDataFetchedInDataFetchStatus",
          "_isDataFetchedInDataFetchStatus",
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return /*Fetched*/ 1;
          },
          false,
        ),
        this.attr(
          "AssembleEventContact",
          "assembleEventContactIn",
          "AssembleEventContact",
          true,
          false,
          OS.DataTypes.DataTypes.Record,
          function () {
            return OS.DataTypes.ImmutableBase.getData(
              new Connect2_Assemble_CSModel.AssembleEventContactRec(),
            );
          },
          false,
          Connect2_Assemble_CSModel.AssembleEventContactRec,
        ),
        this.attr(
          "_assembleEventContactInDataFetchStatus",
          "_assembleEventContactInDataFetchStatus",
          "_assembleEventContactInDataFetchStatus",
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
            Connect2_LegacyShared_Reusable_Person_Contact_Options_mvcModel.hasValidationWidgets ||
            UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvcModel.hasValidationWidgets ||
            UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvcModel.hasValidationWidgets ||
            UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvcModel.hasValidationWidgets;
        }

        return Model._hasValidationWidgetsValue;
      },
    });

    Model.prototype.setInputs = function (inputs) {
      if ("IsDataFetched" in inputs) {
        this.variables.isDataFetchedIn = inputs.IsDataFetched;
        if ("_isDataFetchedInDataFetchStatus" in inputs) {
          this.variables._isDataFetchedInDataFetchStatus =
            inputs._isDataFetchedInDataFetchStatus;
        }
      }

      if ("AssembleEventContact" in inputs) {
        this.variables.assembleEventContactIn = inputs.AssembleEventContact;
        if ("_assembleEventContactInDataFetchStatus" in inputs) {
          this.variables._assembleEventContactInDataFetchStatus =
            inputs._assembleEventContactInDataFetchStatus;
        }
      }
    };
    return Model;
  })(OS.Model.BaseViewModel);
  return new OS.Model.ModelFactory(
    Model,
    "Assemble.AssembleEventDetail_Contact",
  );
});
define("Connect2_Assemble_MUI.Assemble.AssembleEventDetail_Contact.mvc$view", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_Assemble_MUI.model",
  "Connect2_Assemble_MUI.controller",
  "UBTConnect_Utils.model",
  "Connect2_Assemble_CS.model",
  "Connect2_LegacyShared.controller",
  "UBTConnect_Utils.controller",
  "react",
  "OutSystems/ReactView/Main",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_Contact.mvc$model",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_Contact.mvc$controller",
  "OutSystems/ReactWidgets/Main",
  "Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Image.mvc$view",
  "Connect2_LegacyShared.Reusable.Person_Contact_Options.mvc$view",
  "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy.mvc$view",
  "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc$view",
  "UBTConnect_Utils.CW_CTA_PopUps.ContactByMessage_Wrapper.mvc$view",
  "UBTConnect_Utils.model$ContactByPhonePopupDataRec",
  "Connect2_Assemble_MUI.referencesHealth",
  "Connect2_Assemble_MUI.referencesHealth$UBTConnect_Utils",
  "UBTConnect_Utils.model$ContactPopupDataRec",
  "Connect2_Assemble_CS.model$AssembleEventContactRec",
  "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS",
  "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec",
  "Connect2_LegacyShared.controller$GetCacheableSignedPhotoURL",
  "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared",
  "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp",
  "Connect2_Assemble_MUI.controller$HasAccessToRegion",
], function (
  OutSystems,
  Connect2_Assemble_MUIModel,
  Connect2_Assemble_MUIController,
  UBTConnect_UtilsModel,
  Connect2_Assemble_CSModel,
  Connect2_LegacySharedController,
  UBTConnect_UtilsController,
  React,
  OSView,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_Contact_mvc_model,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_Contact_mvc_controller,
  OSWidgets,
  Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Image_mvc_view,
  Connect2_LegacyShared_Reusable_Person_Contact_Options_mvc_view,
  UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view,
  UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvc_view,
  UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvc_view,
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
    View.displayName = "Assemble.AssembleEventDetail_Contact";
    View.getCssDependencies = function () {
      return ["css/OutSystemsReactWidgets.css"];
    };
    View.getJsDependencies = function () {
      return [];
    };
    View.getBlocks = function () {
      return [
        Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Image_mvc_view,
        Connect2_LegacyShared_Reusable_Person_Contact_Options_mvc_view,
        UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view,
        UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvc_view,
        UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvc_view,
      ];
    };
    Object.defineProperty(View.prototype, "modelFactory", {
      get: function () {
        return Connect2_Assemble_MUI_Assemble_AssembleEventDetail_Contact_mvc_model;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(View.prototype, "controllerFactory", {
      get: function () {
        return Connect2_Assemble_MUI_Assemble_AssembleEventDetail_Contact_mvc_controller;
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
            style: "padding-y-s",
            visible: true,
            _idProps: {
              service: idService,
              name: "Div_EventContacts__Content__HostContact",
            },
            _widgetRecordProvider: widgetsRecordProvider,
          },
          React.createElement(
            Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Image_mvc_view,
            {
              inputs: {
                In_SignedURL:
                  model.variables.assembleEventContactIn.contactDetailsAttr
                    .avatarURLAttr.signedURLAttr,
                _in_SignedURLInDataFetchStatus:
                  OS.Model.calculateDataFetchStatus(
                    model.variables._assembleEventContactInDataFetchStatus,
                  ),
                In_IsRoundImage: true,
                IsLoading: !model.variables.isDataFetchedIn,
                _isLoadingInDataFetchStatus: OS.Model.calculateDataFetchStatus(
                  model.variables._isDataFetchedInDataFetchStatus,
                ),
                In_Type:
                  model.variables.assembleEventContactIn.contactDetailsAttr
                    .avatarURLAttr.typeAttr,
                _in_TypeInDataFetchStatus: OS.Model.calculateDataFetchStatus(
                  model.variables._assembleEventContactInDataFetchStatus,
                ),
                In_Path:
                  model.variables.assembleEventContactIn.contactDetailsAttr
                    .avatarURLAttr.pathAttr,
                _in_PathInDataFetchStatus: OS.Model.calculateDataFetchStatus(
                  model.variables._assembleEventContactInDataFetchStatus,
                ),
                In_Bucket:
                  model.variables.assembleEventContactIn.contactDetailsAttr
                    .avatarURLAttr.bucketAttr,
                _in_BucketInDataFetchStatus: OS.Model.calculateDataFetchStatus(
                  model.variables._assembleEventContactInDataFetchStatus,
                ),
              },
              events: {
                _handleError: function (ex) {
                  controller.handleError(ex);
                },
                onClick_Item$Action: function () {
                  return Promise.resolve().then(function () {
                    var eventHandlerContext = callContext.clone();
                    return OS.Flow.tryFinally(
                      function () {
                        var varBag = {};
                        controller.pushDebuggerContext(eventHandlerContext);

                        OutSystemsDebugger.setThreadStartName(
                          eventHandlerContext.id,
                          "NewConnect_Utilities/NC_Result_Item__Image OnClick_Item",
                        );
                        return controller.handler_OnClickHostContact$Action(
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
                name: "Block_HostContact",
                alias: "1",
              },
              _widgetRecordProvider: widgetsRecordProvider,
              placeholders: {
                label: PlaceholderContent.Empty,
                imagePlaceholder: PlaceholderContent.Empty,
                title_Placeholder: new PlaceholderContent(function () {
                  return [
                    React.createElement(OSWidgets.Expression, {
                      value:
                        model.variables.assembleEventContactIn
                          .contactDetailsAttr.nameAttr,
                      _idProps: {
                        service: idService,
                        uuid: "2",
                      },
                      _widgetRecordProvider: widgetsRecordProvider,
                      value_dataFetchStatus: OS.Model.calculateDataFetchStatus(
                        model.variables._assembleEventContactInDataFetchStatus,
                      ),
                    }),
                  ];
                }),
                description_Placeholder: new PlaceholderContent(function () {
                  return [
                    React.createElement(OSWidgets.Expression, {
                      value:
                        model.variables.assembleEventContactIn
                          .contactDetailsAttr.locationAttr,
                      _idProps: {
                        service: idService,
                        uuid: "3",
                      },
                      _widgetRecordProvider: widgetsRecordProvider,
                      value_dataFetchStatus: OS.Model.calculateDataFetchStatus(
                        model.variables._assembleEventContactInDataFetchStatus,
                      ),
                    }),
                  ];
                }),
                action_Placeholder: new PlaceholderContent(function () {
                  return [
                    React.createElement(
                      Connect2_LegacyShared_Reusable_Person_Contact_Options_mvc_view,
                      {
                        inputs: {
                          Phone: model.getCachedValue(
                            idService.getId("9dq8S+CTeEKOzh9R5OYL8A.Phone"),
                            function () {
                              return model.variables.assembleEventContactIn
                                .mobilePhoneNumberAttr !== ""
                                ? model.variables.assembleEventContactIn
                                    .mobilePhoneNumberAttr
                                : model.variables.assembleEventContactIn
                                      .homePhoneNumberAttr !== ""
                                  ? model.variables.assembleEventContactIn
                                      .homePhoneNumberAttr
                                  : model.variables.assembleEventContactIn
                                        .workPhoneNumberAttr !== ""
                                    ? model.variables.assembleEventContactIn
                                        .workPhoneNumberAttr
                                    : model.variables
                                        .unavailableContactValueVar;
                            },
                            function () {
                              return model.variables.assembleEventContactIn
                                .mobilePhoneNumberAttr;
                            },
                            function () {
                              return model.variables.assembleEventContactIn
                                .homePhoneNumberAttr;
                            },
                            function () {
                              return model.variables.assembleEventContactIn
                                .workPhoneNumberAttr;
                            },
                            function () {
                              return model.variables.unavailableContactValueVar;
                            },
                          ),
                          _phoneInDataFetchStatus:
                            OS.Model.calculateDataFetchStatus(
                              model.variables
                                ._assembleEventContactInDataFetchStatus,
                            ),
                          EmailAddress: model.getCachedValue(
                            idService.getId(
                              "9dq8S+CTeEKOzh9R5OYL8A.EmailAddress",
                            ),
                            function () {
                              return model.variables.assembleEventContactIn
                                .emailAttr !== ""
                                ? model.variables.assembleEventContactIn
                                    .emailAttr
                                : model.variables.unavailableContactValueVar;
                            },
                            function () {
                              return model.variables.assembleEventContactIn
                                .emailAttr;
                            },
                            function () {
                              return model.variables.unavailableContactValueVar;
                            },
                          ),
                          _emailAddressInDataFetchStatus:
                            OS.Model.calculateDataFetchStatus(
                              model.variables
                                ._assembleEventContactInDataFetchStatus,
                            ),
                        },
                        events: {
                          _handleError: function (ex) {
                            controller.handleError(ex);
                          },
                          callClicked$Action: function (phoneNumberIn) {
                            return Promise.resolve().then(function () {
                              var eventHandlerContext = callContext.clone();
                              return OS.Flow.tryFinally(
                                function () {
                                  var varBag = {};
                                  controller.pushDebuggerContext(
                                    eventHandlerContext,
                                  );

                                  OutSystemsDebugger.setThreadStartName(
                                    eventHandlerContext.id,
                                    "Reusable/Person_Contact_Options CallClicked",
                                  );
                                  return controller.handler_OptionsCall$Action(
                                    phoneNumberIn,
                                    controller.callContext(eventHandlerContext),
                                  );
                                },
                                function () {
                                  controller.popDebuggerContext(
                                    eventHandlerContext,
                                  );
                                },
                              );
                            });
                          },
                          emailClicked$Action: function (emailIn) {
                            return Promise.resolve().then(function () {
                              var eventHandlerContext = callContext.clone();
                              return OS.Flow.tryFinally(
                                function () {
                                  var varBag = {};
                                  controller.pushDebuggerContext(
                                    eventHandlerContext,
                                  );

                                  OutSystemsDebugger.setThreadStartName(
                                    eventHandlerContext.id,
                                    "Reusable/Person_Contact_Options EmailClicked",
                                  );
                                  return controller.handler_ContactByMessage$Action(
                                    controller.callContext(eventHandlerContext),
                                  );
                                },
                                function () {
                                  controller.popDebuggerContext(
                                    eventHandlerContext,
                                  );
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
                          uuid: "4",
                          alias: "2",
                        },
                        _widgetRecordProvider: widgetsRecordProvider,
                        _dependencies: [],
                      },
                    ),
                  ];
                }),
              },
              _dependencies: [
                asPrimitiveValue(model.variables.unavailableContactValueVar),
                asPrimitiveValue(
                  model.variables._assembleEventContactInDataFetchStatus,
                ),
                asPrimitiveValue(
                  model.variables.assembleEventContactIn.emailAttr,
                ),
                asPrimitiveValue(
                  model.variables.assembleEventContactIn.workPhoneNumberAttr,
                ),
                asPrimitiveValue(
                  model.variables.assembleEventContactIn.homePhoneNumberAttr,
                ),
                asPrimitiveValue(
                  model.variables.assembleEventContactIn.mobilePhoneNumberAttr,
                ),
                asPrimitiveValue(
                  model.variables.assembleEventContactIn.contactDetailsAttr
                    .locationAttr,
                ),
                asPrimitiveValue(
                  model.variables.assembleEventContactIn.contactDetailsAttr
                    .nameAttr,
                ),
              ],
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
                alias: "3",
              },
              _widgetRecordProvider: widgetsRecordProvider,
              _dependencies: [],
            },
          ),
          React.createElement(
            UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvc_view,
            {
              inputs: {
                In_CallPopupData: model.variables.callPopupVar,
              },
              events: {
                _handleError: function (ex) {
                  controller.handleError(ex);
                },
                event_Call$Action: function (event_NumberIn) {
                  var eventHandlerContext = callContext.clone();
                  return OS.Flow.tryFinally(
                    function () {
                      var varBag = {};
                      controller.pushDebuggerContext(eventHandlerContext);

                      OutSystemsDebugger.setThreadStartName(
                        eventHandlerContext.id,
                        "CW_CTA_PopUps/ContactPopup_ByPhone Event_Call",
                      );
                      controller.contactByPhonePopupEvent_Cancel$Action(
                        controller.callContext(eventHandlerContext),
                      );
                    },
                    function () {
                      controller.popDebuggerContext(eventHandlerContext);
                    },
                  );
                },
                event_Cancel$Action: function () {
                  var eventHandlerContext = callContext.clone();
                  return OS.Flow.tryFinally(
                    function () {
                      var varBag = {};
                      controller.pushDebuggerContext(eventHandlerContext);

                      OutSystemsDebugger.setThreadStartName(
                        eventHandlerContext.id,
                        "CW_CTA_PopUps/ContactPopup_ByPhone Event_Cancel",
                      );
                      controller.contactByPhonePopupEvent_Cancel$Action(
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
                uuid: "6",
                alias: "4",
              },
              _widgetRecordProvider: widgetsRecordProvider,
              _dependencies: [],
            },
          ),
          React.createElement(
            UBTConnect_Utils_CW_CTA_PopUps_ContactByMessage_Wrapper_mvc_view,
            {
              inputs: {
                In_ContactPopupData: model.getCachedValue(
                  idService.getId("Cduy+UxuhkW8qE7E0fcRIg.In_ContactPopupData"),
                  function () {
                    return (function () {
                      var rec =
                        new UBTConnect_UtilsModel.UI_ContactByMessage_WrapperDataRec();
                      rec.emailAttr =
                        model.variables.assembleEventContactIn.emailAttr;
                      rec.phoneAttr =
                        model.variables.assembleEventContactIn.mobilePhoneNumberAttr;
                      rec.contactPopupDataAttr =
                        model.variables.contactPopupDataVar;
                      return rec;
                    })();
                  },
                  function () {
                    return model.variables.assembleEventContactIn.emailAttr;
                  },
                  function () {
                    return model.variables.assembleEventContactIn
                      .mobilePhoneNumberAttr;
                  },
                  function () {
                    return model.variables.contactPopupDataVar;
                  },
                ),
                _in_ContactPopupDataInDataFetchStatus:
                  OS.Model.calculateDataFetchStatus(
                    model.variables._assembleEventContactInDataFetchStatus,
                  ),
              },
              events: {
                _handleError: function (ex) {
                  controller.handleError(ex);
                },
                event_Cancel$Action: function () {
                  var eventHandlerContext = callContext.clone();
                  return OS.Flow.tryFinally(
                    function () {
                      var varBag = {};
                      controller.pushDebuggerContext(eventHandlerContext);

                      OutSystemsDebugger.setThreadStartName(
                        eventHandlerContext.id,
                        "CW_CTA_PopUps/ContactByMessage_Wrapper Event_Cancel",
                      );
                      controller.handler_ContactByMessage_Cancel$Action(
                        controller.callContext(eventHandlerContext),
                      );
                    },
                    function () {
                      controller.popDebuggerContext(eventHandlerContext);
                    },
                  );
                },
                event_Email$Action: function () {
                  return Promise.resolve().then(function () {
                    var eventHandlerContext = callContext.clone();
                    return OS.Flow.tryFinally(
                      function () {
                        var varBag = {};
                        controller.pushDebuggerContext(eventHandlerContext);

                        OutSystemsDebugger.setThreadStartName(
                          eventHandlerContext.id,
                          "CW_CTA_PopUps/ContactByMessage_Wrapper Event_Email",
                        );
                        return controller.handler_ContactByEmail$Action(
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
                uuid: "7",
                alias: "5",
              },
              _widgetRecordProvider: widgetsRecordProvider,
              _dependencies: [],
            },
          ),
        ),
      );
    };
    return View;
  })(OSView.BaseView.BaseWebBlock);

  return View;
});
define("Connect2_Assemble_MUI.Assemble.AssembleEventDetail_Contact.mvc$controller", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_Assemble_MUI.model",
  "Connect2_Assemble_MUI.controller",
  "UBTConnect_Utils.model",
  "Connect2_Assemble_CS.model",
  "Connect2_LegacyShared.controller",
  "UBTConnect_Utils.controller",
  "Connect2_Assemble_MUI.languageResources",
  "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_Contact.mvc$debugger",
  "UBTConnect_Utils.model$ContactByPhonePopupDataRec",
  "Connect2_Assemble_MUI.referencesHealth",
  "Connect2_Assemble_MUI.referencesHealth$UBTConnect_Utils",
  "UBTConnect_Utils.model$ContactPopupDataRec",
  "Connect2_Assemble_CS.model$AssembleEventContactRec",
  "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS",
  "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec",
  "Connect2_LegacyShared.controller$GetCacheableSignedPhotoURL",
  "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared",
  "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp",
  "Connect2_Assemble_MUI.controller$HasAccessToRegion",
], function (
  OutSystems,
  Connect2_Assemble_MUIModel,
  Connect2_Assemble_MUIController,
  UBTConnect_UtilsModel,
  Connect2_Assemble_CSModel,
  Connect2_LegacySharedController,
  UBTConnect_UtilsController,
  Connect2_Assemble_MUILanguageResources,
  Connect2_Assemble_MUI_Assemble_AssembleEventDetail_Contact_mvc_Debugger,
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
    Controller.prototype._handler_ContactByMessage$Action = function (
      callContext,
    ) {
      var varBag = {};
      var model = this.model;
      var controller = this.controller;
      var idService = this.idService;
      varBag.model = model;
      varBag.idService = idService;
      controller.ensureControllerAlive("Handler_ContactByMessage");
      callContext = controller.callContext(callContext);
      var getCacheableSignedPhotoURLVar = new OS.DataTypes.VariableHolder();
      varBag.callContext = callContext;
      varBag.getCacheableSignedPhotoURLVar = getCacheableSignedPhotoURLVar;
      OutSystemsDebugger.push(
        "4YvUCWT53U+6BrZWsVWc3Q:jyA1JEgu3EOrZ3R8md5quw:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.n_qkwC2ikUG_KPo2eYiWyQ/ClientActions.jyA1JEgu3EOrZ3R8md5quw:x_kX3bs5UL_mstZbyK3uOQ",
        "Connect2_Assemble_MUI",
        "Handler_ContactByMessage",
        "NRFlows.ClientScreenActionFlow",
        callContext.id,
        varBag,
      );
      OutSystemsDebugger.handleBreakpoint(
        "4YvUCWT53U+6BrZWsVWc3Q:oC20FEPqaEmIhDY+rb0aFQ",
        callContext.id,
      );
      return OS.Flow.executeAsyncFlow(function () {
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:4N5n27rl0k2WaDCGc+63bA",
          callContext.id,
        );
        // ContactPopupData.IsAvatarImage = True
        model.variables.contactPopupDataVar.isAvatarImageAttr = true;
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:4N5n27rl0k2WaDCGc+63bA",
          callContext.id,
          OutSystemsDebugger.BreakpointType.BetweenAssignments,
          "2",
        );
        // ContactPopupData.Name = AssembleEventContact.ContactDetails.Name
        model.variables.contactPopupDataVar.nameAttr =
          model.variables.assembleEventContactIn.contactDetailsAttr.nameAttr;
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:4N5n27rl0k2WaDCGc+63bA",
          callContext.id,
          OutSystemsDebugger.BreakpointType.BetweenAssignments,
          "3",
        );
        // ContactPopupData.Locality = AssembleEventContact.LocalityName
        model.variables.contactPopupDataVar.localityAttr =
          model.variables.assembleEventContactIn.localityNameAttr;
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:4N5n27rl0k2WaDCGc+63bA",
          callContext.id,
          OutSystemsDebugger.BreakpointType.BetweenAssignments,
          "4",
        );
        // ContactPopupData.TimezoneName = AssembleEventContact.Timezone.TimezoneLabel
        model.variables.contactPopupDataVar.timezoneNameAttr =
          model.variables.assembleEventContactIn.timezoneAttr.timezoneLabelAttr;
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:4N5n27rl0k2WaDCGc+63bA",
          callContext.id,
          OutSystemsDebugger.BreakpointType.BetweenAssignments,
          "5",
        );
        // ContactPopupData.TimezoneOffset = AssembleEventContact.Timezone.OffsetSeconds
        model.variables.contactPopupDataVar.timezoneOffsetAttr =
          OS.BuiltinFunctions.longIntegerToInteger(
            model.variables.assembleEventContactIn.timezoneAttr
              .offsetSecondsAttr,
          );
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:4N5n27rl0k2WaDCGc+63bA",
          callContext.id,
          OutSystemsDebugger.BreakpointType.BetweenAssignments,
          "6",
        );
        // ContactPopupData.IsLoading = True
        model.variables.contactPopupDataVar.isLoadingAttr = true;
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:4N5n27rl0k2WaDCGc+63bA",
          callContext.id,
          OutSystemsDebugger.BreakpointType.BetweenAssignments,
          "7",
        );
        // ContactPopupData.CountryName = AssembleEventContact.CountryName
        model.variables.contactPopupDataVar.countryNameAttr =
          model.variables.assembleEventContactIn.countryNameAttr;
        return OS.Flow.executeSequence(function () {
          if (
            OutSystemsDebugger.handleBreakpoint(
              "4YvUCWT53U+6BrZWsVWc3Q:hMaMBa4pq0uXGo844ZrIFg",
              callContext.id,
            ) &&
            model.variables.assembleEventContactIn.contactDetailsAttr
              .avatarURLAttr.signedURLAttr === ""
          ) {
            OutSystemsDebugger.handleBreakpoint(
              "4YvUCWT53U+6BrZWsVWc3Q:0UDsibO2QUORgl9iqGPhzg",
              callContext.id,
            );
            // Execute Action: GetCacheableSignedPhotoURL
            model.flush();
            return Connect2_LegacySharedController.default
              .getCacheableSignedPhotoURL$Action(
                model.variables.assembleEventContactIn.contactDetailsAttr
                  .avatarURLAttr.bucketAttr,
                model.variables.assembleEventContactIn.contactDetailsAttr
                  .avatarURLAttr.pathAttr,
                model.variables.assembleEventContactIn.contactDetailsAttr
                  .avatarURLAttr.typeAttr,
                callContext,
              )
              .then(function (value) {
                getCacheableSignedPhotoURLVar.value = value;
              })
              .then(function () {
                OutSystemsDebugger.handleBreakpoint(
                  "4YvUCWT53U+6BrZWsVWc3Q:I1w0_G7Wg0mxHHs_BE3g1A",
                  callContext.id,
                );
                // AssembleEventContact.ContactDetails.AvatarURL.SignedURL = GetCacheableSignedPhotoURL.URL
                model.variables.assembleEventContactIn.contactDetailsAttr.avatarURLAttr.signedURLAttr =
                  getCacheableSignedPhotoURLVar.value.uRLOut;
              });
          }
        }).then(function () {
          OutSystemsDebugger.handleBreakpoint(
            "4YvUCWT53U+6BrZWsVWc3Q:c6oYpPtAkE6YyHU4fmlEYA",
            callContext.id,
          );
          // ContactPopupData.ShowPopup = True
          model.variables.contactPopupDataVar.showPopupAttr = true;
          OutSystemsDebugger.handleBreakpoint(
            "4YvUCWT53U+6BrZWsVWc3Q:c6oYpPtAkE6YyHU4fmlEYA",
            callContext.id,
            OutSystemsDebugger.BreakpointType.BetweenAssignments,
            "2",
          );
          // ContactPopupData.ImageURL = AssembleEventContact.ContactDetails.AvatarURL.SignedURL
          model.variables.contactPopupDataVar.imageURLAttr =
            model.variables.assembleEventContactIn.contactDetailsAttr.avatarURLAttr.signedURLAttr;
          OutSystemsDebugger.handleBreakpoint(
            "4YvUCWT53U+6BrZWsVWc3Q:c6oYpPtAkE6YyHU4fmlEYA",
            callContext.id,
            OutSystemsDebugger.BreakpointType.BetweenAssignments,
            "3",
          );
          // ContactPopupData.IsLoading = False
          model.variables.contactPopupDataVar.isLoadingAttr = false;
          OutSystemsDebugger.handleBreakpoint(
            "4YvUCWT53U+6BrZWsVWc3Q:gnzSYLXozE2+gbRk+YhaPQ",
            callContext.id,
          );
        });
      })
        .then(function (res) {
          OutSystemsDebugger.pop(
            "4YvUCWT53U+6BrZWsVWc3Q:jyA1JEgu3EOrZ3R8md5quw",
            callContext.id,
          );
          return res;
        })
        .catch(function (ex) {
          OutSystemsDebugger.handleException(ex, callContext.id);
          OutSystemsDebugger.pop(
            "4YvUCWT53U+6BrZWsVWc3Q:jyA1JEgu3EOrZ3R8md5quw",
            callContext.id,
          );
          throw ex;
        });
    };
    Controller.prototype._handler_ContactByEmail$Action = function (
      callContext,
    ) {
      var varBag = {};
      var model = this.model;
      var controller = this.controller;
      var idService = this.idService;
      varBag.model = model;
      varBag.idService = idService;
      controller.ensureControllerAlive("Handler_ContactByEmail");
      callContext = controller.callContext(callContext);
      var getCacheableSignedPhotoURLVar = new OS.DataTypes.VariableHolder();
      varBag.callContext = callContext;
      varBag.getCacheableSignedPhotoURLVar = getCacheableSignedPhotoURLVar;
      OutSystemsDebugger.push(
        "4YvUCWT53U+6BrZWsVWc3Q:ZQnnaOALuE6_mmBYLfntaA:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.n_qkwC2ikUG_KPo2eYiWyQ/ClientActions.ZQnnaOALuE6_mmBYLfntaA:okaQzyHe1WcXPyVqVI0G+g",
        "Connect2_Assemble_MUI",
        "Handler_ContactByEmail",
        "NRFlows.ClientScreenActionFlow",
        callContext.id,
        varBag,
      );
      OutSystemsDebugger.handleBreakpoint(
        "4YvUCWT53U+6BrZWsVWc3Q:J8kh2g63Q0u3iL+InM2Npg",
        callContext.id,
      );
      return OS.Flow.executeAsyncFlow(function () {
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:diHBUGRLJ0aTsa4TNvINbQ",
          callContext.id,
        );
        // Execute Action: Handler_ContactByMessage_Cancel
        controller._handler_ContactByMessage_Cancel$Action(callContext);
        return OS.Flow.executeSequence(function () {
          if (
            OutSystemsDebugger.handleBreakpoint(
              "4YvUCWT53U+6BrZWsVWc3Q:Y2_qr9RDP0WikgpCUOZz7w",
              callContext.id,
            ) &&
            model.variables.assembleEventContactIn.emailAttr ===
              model.variables.unavailableContactValueVar
          ) {
            OutSystemsDebugger.handleBreakpoint(
              "4YvUCWT53U+6BrZWsVWc3Q:LPzoI9q_kEOWKOGqSuoYeg",
              callContext.id,
            );
            OS.FeedbackMessageService.showFeedbackMessage(
              "Unfortunately, Email is not available",
              /*Info*/ 0,
            );
            OutSystemsDebugger.handleBreakpoint(
              "4YvUCWT53U+6BrZWsVWc3Q:OE8uSU1Gr0K02fSCuoUEWw",
              callContext.id,
            );
          } else {
            OutSystemsDebugger.handleBreakpoint(
              "4YvUCWT53U+6BrZWsVWc3Q:CQJt7DkVdUyXHh55jlDk_Q",
              callContext.id,
            );
            // Execute Action: GetCacheableSignedPhotoURL
            model.flush();
            return Connect2_LegacySharedController.default
              .getCacheableSignedPhotoURL$Action(
                model.variables.assembleEventContactIn.contactDetailsAttr
                  .avatarURLAttr.bucketAttr,
                model.variables.assembleEventContactIn.contactDetailsAttr
                  .avatarURLAttr.pathAttr,
                model.variables.assembleEventContactIn.contactDetailsAttr
                  .avatarURLAttr.typeAttr,
                callContext,
              )
              .then(function (value) {
                getCacheableSignedPhotoURLVar.value = value;
              })
              .then(function () {
                OutSystemsDebugger.handleBreakpoint(
                  "4YvUCWT53U+6BrZWsVWc3Q:bh7vAAWWT0CpAynZCwKhlg",
                  callContext.id,
                );
                // Trigger Event: NavigateTo_EmailContact
                return controller.navigateTo_EmailContact$Action(
                  getCacheableSignedPhotoURLVar.value.uRLOut,
                  model.variables.assembleEventContactIn.contactDetailsAttr
                    .nameAttr,
                  "",
                  model.variables.assembleEventContactIn.localityNameAttr,
                  model.variables.assembleEventContactIn.countryNameAttr,
                  model.variables.assembleEventContactIn.emailAttr,
                  model.variables.assembleEventContactIn.contactDetailsAttr
                    .idAttr,
                  callContext,
                );
              })
              .then(function () {
                OutSystemsDebugger.handleBreakpoint(
                  "4YvUCWT53U+6BrZWsVWc3Q:OE8uSU1Gr0K02fSCuoUEWw",
                  callContext.id,
                );
              });
          }
        });
      })
        .then(function (res) {
          OutSystemsDebugger.pop(
            "4YvUCWT53U+6BrZWsVWc3Q:ZQnnaOALuE6_mmBYLfntaA",
            callContext.id,
          );
          return res;
        })
        .catch(function (ex) {
          OutSystemsDebugger.handleException(ex, callContext.id);
          OutSystemsDebugger.pop(
            "4YvUCWT53U+6BrZWsVWc3Q:ZQnnaOALuE6_mmBYLfntaA",
            callContext.id,
          );
          throw ex;
        });
    };
    Controller.prototype._handler_ContactByMessage_Cancel$Action = function (
      callContext,
    ) {
      var varBag = {};
      var model = this.model;
      var controller = this.controller;
      var idService = this.idService;
      varBag.model = model;
      varBag.idService = idService;
      controller.ensureControllerAlive("Handler_ContactByMessage_Cancel");
      callContext = controller.callContext(callContext);
      varBag.callContext = callContext;
      try {
        OutSystemsDebugger.push(
          "4YvUCWT53U+6BrZWsVWc3Q:DDgca+MS3UWURkBIbhH77Q:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.n_qkwC2ikUG_KPo2eYiWyQ/ClientActions.DDgca+MS3UWURkBIbhH77Q:v5OuWY4D4fQShXyIrlf_9A",
          "Connect2_Assemble_MUI",
          "Handler_ContactByMessage_Cancel",
          "NRFlows.ClientScreenActionFlow",
          callContext.id,
          varBag,
        );
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:fCvOQRjiG0qnePRNprTeQA",
          callContext.id,
        );
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:pRCb6mC8sEqHP8KR8sqEZw",
          callContext.id,
        );
        // ContactPopupData.ShowPopup = False
        model.variables.contactPopupDataVar.showPopupAttr = false;
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:Mm+DQ1fWJEWUbCgOxKvh2Q",
          callContext.id,
        );
      } catch (ex) {
        OutSystemsDebugger.handleException(ex, callContext.id);
        throw ex;
      } finally {
        OutSystemsDebugger.pop(
          "4YvUCWT53U+6BrZWsVWc3Q:DDgca+MS3UWURkBIbhH77Q",
          callContext.id,
        );
      }
    };
    Controller.prototype._handler_OnClickHostContact$Action = function (
      callContext,
    ) {
      var varBag = {};
      var model = this.model;
      var controller = this.controller;
      var idService = this.idService;
      varBag.model = model;
      varBag.idService = idService;
      controller.ensureControllerAlive("Handler_OnClickHostContact");
      callContext = controller.callContext(callContext);
      var hasAccessToRegionVar = new OS.DataTypes.VariableHolder();
      varBag.callContext = callContext;
      varBag.hasAccessToRegionVar = hasAccessToRegionVar;
      OutSystemsDebugger.push(
        "4YvUCWT53U+6BrZWsVWc3Q:atqPnGWFr0i95bmHAQEprA:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.n_qkwC2ikUG_KPo2eYiWyQ/ClientActions.atqPnGWFr0i95bmHAQEprA:RqnXA3n6S7roSHnI0SkLYQ",
        "Connect2_Assemble_MUI",
        "Handler_OnClickHostContact",
        "NRFlows.ClientScreenActionFlow",
        callContext.id,
        varBag,
      );
      OutSystemsDebugger.handleBreakpoint(
        "4YvUCWT53U+6BrZWsVWc3Q:InaKPpmp7k28ui7xepA0cw",
        callContext.id,
      );
      return OS.Flow.executeAsyncFlow(function () {
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:hJcg4MyTrE6h14CXhkf7Ng",
          callContext.id,
        );
        // Execute Action: HasAccessToRegion
        model.flush();
        return Connect2_Assemble_MUIController.default
          .hasAccessToRegion$Action(
            model.variables.assembleEventContactIn.countryCodeAttr,
            model.variables.assembleEventContactIn.localityIdAttr,
            callContext,
          )
          .then(function (value) {
            hasAccessToRegionVar.value = value;
          })
          .then(function () {
            return OS.Flow.executeSequence(function () {
              if (
                OutSystemsDebugger.handleBreakpoint(
                  "4YvUCWT53U+6BrZWsVWc3Q:eFBu_mujqkSIhKf0vjIEhQ",
                  callContext.id,
                ) &&
                !hasAccessToRegionVar.value.hasAccessOut
              ) {
                OutSystemsDebugger.handleBreakpoint(
                  "4YvUCWT53U+6BrZWsVWc3Q:AQ2fvybwmkq42TwwBhhFWw",
                  callContext.id,
                );
                // Execute Action: App_Subscription_ShowUpgradePopUp
                model.flush();
                return UBTConnect_UtilsController.default
                  .app_Subscription_ShowUpgradePopUp$Action(callContext)
                  .then(function () {
                    OutSystemsDebugger.handleBreakpoint(
                      "4YvUCWT53U+6BrZWsVWc3Q:r4IQCHlo8EG43UoJUuvlUQ",
                      callContext.id,
                    );
                  });
              } else {
                OutSystemsDebugger.handleBreakpoint(
                  "4YvUCWT53U+6BrZWsVWc3Q:yycarlz8vEifNawlXPgXBQ",
                  callContext.id,
                );
                // Trigger Event: NavigateTo_Household
                return controller
                  .navigateTo_Household$Action(
                    model.variables.assembleEventContactIn.householdIdAttr,
                    callContext,
                  )
                  .then(function () {
                    OutSystemsDebugger.handleBreakpoint(
                      "4YvUCWT53U+6BrZWsVWc3Q:MR6XA1WN10CdE+lO6Mhjsw",
                      callContext.id,
                    );
                  });
              }
            });
          });
      })
        .then(function (res) {
          OutSystemsDebugger.pop(
            "4YvUCWT53U+6BrZWsVWc3Q:atqPnGWFr0i95bmHAQEprA",
            callContext.id,
          );
          return res;
        })
        .catch(function (ex) {
          OutSystemsDebugger.handleException(ex, callContext.id);
          OutSystemsDebugger.pop(
            "4YvUCWT53U+6BrZWsVWc3Q:atqPnGWFr0i95bmHAQEprA",
            callContext.id,
          );
          throw ex;
        });
    };
    Controller.prototype._contactByPhonePopupEvent_Cancel$Action = function (
      callContext,
    ) {
      var varBag = {};
      var model = this.model;
      var controller = this.controller;
      var idService = this.idService;
      varBag.model = model;
      varBag.idService = idService;
      controller.ensureControllerAlive("ContactByPhonePopupEvent_Cancel");
      callContext = controller.callContext(callContext);
      varBag.callContext = callContext;
      try {
        OutSystemsDebugger.push(
          "4YvUCWT53U+6BrZWsVWc3Q:uYTAqFGFfEKyqB2KV36Rpw:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.n_qkwC2ikUG_KPo2eYiWyQ/ClientActions.uYTAqFGFfEKyqB2KV36Rpw:cGE0JYFgRztHYUBUID3f+A",
          "Connect2_Assemble_MUI",
          "ContactByPhonePopupEvent_Cancel",
          "NRFlows.ClientScreenActionFlow",
          callContext.id,
          varBag,
        );
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:tCtoq4KPVkmYfBX6CzFyKw",
          callContext.id,
        );
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:C8n3rGYfG0WFjGTihhz6jA",
          callContext.id,
        );
        // CallPopup.ContactPopupData.ShowPopup = False
        model.variables.callPopupVar.contactPopupDataAttr.showPopupAttr = false;
        OutSystemsDebugger.handleBreakpoint(
          "4YvUCWT53U+6BrZWsVWc3Q:iiGbI2b8CkyV396Uc9rN6g",
          callContext.id,
        );
      } catch (ex) {
        OutSystemsDebugger.handleException(ex, callContext.id);
        throw ex;
      } finally {
        OutSystemsDebugger.pop(
          "4YvUCWT53U+6BrZWsVWc3Q:uYTAqFGFfEKyqB2KV36Rpw",
          callContext.id,
        );
      }
    };
    Controller.prototype._handler_OptionsCall$Action = function (
      phoneNumberToCallIn,
      callContext,
    ) {
      var varBag = {};
      var model = this.model;
      var controller = this.controller;
      var idService = this.idService;
      varBag.model = model;
      varBag.idService = idService;
      controller.ensureControllerAlive("Handler_OptionsCall");
      callContext = controller.callContext(callContext);
      var vars = new OS.DataTypes.VariableHolder(
        new (controller.constructor.getVariableGroupType(
          "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_Contact.Handler_OptionsCall$vars",
        ))(),
      );
      vars.value.phoneNumberToCallInLocal = phoneNumberToCallIn;
      var getCacheableSignedPhotoURLVar = new OS.DataTypes.VariableHolder();
      varBag.callContext = callContext;
      varBag.vars = vars;
      varBag.getCacheableSignedPhotoURLVar = getCacheableSignedPhotoURLVar;
      OutSystemsDebugger.push(
        "4YvUCWT53U+6BrZWsVWc3Q:9+lXxPGrk0+ValdjLuxtaA:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.n_qkwC2ikUG_KPo2eYiWyQ/ClientActions.9+lXxPGrk0+ValdjLuxtaA:im+dShEq9aoIzuX7751ACg",
        "Connect2_Assemble_MUI",
        "Handler_OptionsCall",
        "NRFlows.ClientScreenActionFlow",
        callContext.id,
        varBag,
      );
      OutSystemsDebugger.handleBreakpoint(
        "4YvUCWT53U+6BrZWsVWc3Q:8sxh9L6oK0eN7huvm2qGDA",
        callContext.id,
      );
      return OS.Flow.executeAsyncFlow(function () {
        return OS.Flow.executeSequence(function () {
          if (
            OutSystemsDebugger.handleBreakpoint(
              "4YvUCWT53U+6BrZWsVWc3Q:LYFc1rjDfE2N3QJCROV81w",
              callContext.id,
            ) &&
            vars.value.phoneNumberToCallInLocal ===
              model.variables.unavailableContactValueVar
          ) {
            OutSystemsDebugger.handleBreakpoint(
              "4YvUCWT53U+6BrZWsVWc3Q:QS5cezg5QkaHjEbWZRMMMQ",
              callContext.id,
            );
            OS.FeedbackMessageService.showFeedbackMessage(
              "Unfortunately, Phone Number is not available",
              /*Info*/ 0,
            );
            OutSystemsDebugger.handleBreakpoint(
              "4YvUCWT53U+6BrZWsVWc3Q:2OJ2ccfWEkaSpWLpuO361g",
              callContext.id,
            );
          } else {
            OutSystemsDebugger.handleBreakpoint(
              "4YvUCWT53U+6BrZWsVWc3Q:gXKCJB1SakWFgtEcnYPGLQ",
              callContext.id,
            );
            // CallPopup.ContactPopupData.IsAvatarImage = True
            model.variables.callPopupVar.contactPopupDataAttr.isAvatarImageAttr = true;
            OutSystemsDebugger.handleBreakpoint(
              "4YvUCWT53U+6BrZWsVWc3Q:gXKCJB1SakWFgtEcnYPGLQ",
              callContext.id,
              OutSystemsDebugger.BreakpointType.BetweenAssignments,
              "2",
            );
            // CallPopup.ContactPopupData.Name = AssembleEventContact.ContactDetails.Name
            model.variables.callPopupVar.contactPopupDataAttr.nameAttr =
              model.variables.assembleEventContactIn.contactDetailsAttr.nameAttr;
            OutSystemsDebugger.handleBreakpoint(
              "4YvUCWT53U+6BrZWsVWc3Q:gXKCJB1SakWFgtEcnYPGLQ",
              callContext.id,
              OutSystemsDebugger.BreakpointType.BetweenAssignments,
              "3",
            );
            // CallPopup.ContactPopupData.Locality = AssembleEventContact.LocalityName
            model.variables.callPopupVar.contactPopupDataAttr.localityAttr =
              model.variables.assembleEventContactIn.localityNameAttr;
            OutSystemsDebugger.handleBreakpoint(
              "4YvUCWT53U+6BrZWsVWc3Q:gXKCJB1SakWFgtEcnYPGLQ",
              callContext.id,
              OutSystemsDebugger.BreakpointType.BetweenAssignments,
              "4",
            );
            // CallPopup.ContactPopupData.TimezoneName = AssembleEventContact.Timezone.TimezoneLabel
            model.variables.callPopupVar.contactPopupDataAttr.timezoneNameAttr =
              model.variables.assembleEventContactIn.timezoneAttr.timezoneLabelAttr;
            OutSystemsDebugger.handleBreakpoint(
              "4YvUCWT53U+6BrZWsVWc3Q:gXKCJB1SakWFgtEcnYPGLQ",
              callContext.id,
              OutSystemsDebugger.BreakpointType.BetweenAssignments,
              "5",
            );
            // CallPopup.ContactPopupData.TimezoneOffset = AssembleEventContact.Timezone.OffsetSeconds
            model.variables.callPopupVar.contactPopupDataAttr.timezoneOffsetAttr =
              OS.BuiltinFunctions.longIntegerToInteger(
                model.variables.assembleEventContactIn.timezoneAttr
                  .offsetSecondsAttr,
              );
            OutSystemsDebugger.handleBreakpoint(
              "4YvUCWT53U+6BrZWsVWc3Q:gXKCJB1SakWFgtEcnYPGLQ",
              callContext.id,
              OutSystemsDebugger.BreakpointType.BetweenAssignments,
              "6",
            );
            // CallPopup.ContactPopupData.IsLoading = True
            model.variables.callPopupVar.contactPopupDataAttr.isLoadingAttr = true;
            OutSystemsDebugger.handleBreakpoint(
              "4YvUCWT53U+6BrZWsVWc3Q:gXKCJB1SakWFgtEcnYPGLQ",
              callContext.id,
              OutSystemsDebugger.BreakpointType.BetweenAssignments,
              "7",
            );
            // CallPopup.MobilePhone = AssembleEventContact.MobilePhoneNumber
            model.variables.callPopupVar.mobilePhoneAttr =
              model.variables.assembleEventContactIn.mobilePhoneNumberAttr;
            OutSystemsDebugger.handleBreakpoint(
              "4YvUCWT53U+6BrZWsVWc3Q:gXKCJB1SakWFgtEcnYPGLQ",
              callContext.id,
              OutSystemsDebugger.BreakpointType.BetweenAssignments,
              "8",
            );
            // CallPopup.HomePhone = AssembleEventContact.HomePhoneNumber
            model.variables.callPopupVar.homePhoneAttr =
              model.variables.assembleEventContactIn.homePhoneNumberAttr;
            OutSystemsDebugger.handleBreakpoint(
              "4YvUCWT53U+6BrZWsVWc3Q:gXKCJB1SakWFgtEcnYPGLQ",
              callContext.id,
              OutSystemsDebugger.BreakpointType.BetweenAssignments,
              "9",
            );
            // CallPopup.WorkPhone = AssembleEventContact.WorkPhoneNumber
            model.variables.callPopupVar.workPhoneAttr =
              model.variables.assembleEventContactIn.workPhoneNumberAttr;
            OutSystemsDebugger.handleBreakpoint(
              "4YvUCWT53U+6BrZWsVWc3Q:gXKCJB1SakWFgtEcnYPGLQ",
              callContext.id,
              OutSystemsDebugger.BreakpointType.BetweenAssignments,
              "10",
            );
            // CallPopup.ContactPopupData.CountryName = AssembleEventContact.CountryName
            model.variables.callPopupVar.contactPopupDataAttr.countryNameAttr =
              model.variables.assembleEventContactIn.countryNameAttr;
            return OS.Flow.executeSequence(function () {
              if (
                OutSystemsDebugger.handleBreakpoint(
                  "4YvUCWT53U+6BrZWsVWc3Q:2bt2YYW0zkGFMNPMLRt0Tg",
                  callContext.id,
                ) &&
                model.variables.assembleEventContactIn.contactDetailsAttr
                  .avatarURLAttr.signedURLAttr === ""
              ) {
                OutSystemsDebugger.handleBreakpoint(
                  "4YvUCWT53U+6BrZWsVWc3Q:r4b8Yo8ul0q+7c3ZyYkYIQ",
                  callContext.id,
                );
                // Execute Action: GetCacheableSignedPhotoURL
                model.flush();
                return Connect2_LegacySharedController.default
                  .getCacheableSignedPhotoURL$Action(
                    model.variables.assembleEventContactIn.contactDetailsAttr
                      .avatarURLAttr.bucketAttr,
                    model.variables.assembleEventContactIn.contactDetailsAttr
                      .avatarURLAttr.pathAttr,
                    model.variables.assembleEventContactIn.contactDetailsAttr
                      .avatarURLAttr.typeAttr,
                    callContext,
                  )
                  .then(function (value) {
                    getCacheableSignedPhotoURLVar.value = value;
                  })
                  .then(function () {
                    OutSystemsDebugger.handleBreakpoint(
                      "4YvUCWT53U+6BrZWsVWc3Q:A7vWOWmZ0UyRwQtcM1G7RQ",
                      callContext.id,
                    );
                    // AssembleEventContact.ContactDetails.AvatarURL.SignedURL = GetCacheableSignedPhotoURL.URL
                    model.variables.assembleEventContactIn.contactDetailsAttr.avatarURLAttr.signedURLAttr =
                      getCacheableSignedPhotoURLVar.value.uRLOut;
                  });
              }
            }).then(function () {
              OutSystemsDebugger.handleBreakpoint(
                "4YvUCWT53U+6BrZWsVWc3Q:n697L8GkNEOuSNpFEwrmsQ",
                callContext.id,
              );
              // CallPopup.ContactPopupData.ImageURL = AssembleEventContact.ContactDetails.AvatarURL.SignedURL
              model.variables.callPopupVar.contactPopupDataAttr.imageURLAttr =
                model.variables.assembleEventContactIn.contactDetailsAttr.avatarURLAttr.signedURLAttr;
              OutSystemsDebugger.handleBreakpoint(
                "4YvUCWT53U+6BrZWsVWc3Q:n697L8GkNEOuSNpFEwrmsQ",
                callContext.id,
                OutSystemsDebugger.BreakpointType.BetweenAssignments,
                "2",
              );
              // CallPopup.ContactPopupData.ShowPopup = True
              model.variables.callPopupVar.contactPopupDataAttr.showPopupAttr = true;
              OutSystemsDebugger.handleBreakpoint(
                "4YvUCWT53U+6BrZWsVWc3Q:n697L8GkNEOuSNpFEwrmsQ",
                callContext.id,
                OutSystemsDebugger.BreakpointType.BetweenAssignments,
                "3",
              );
              // CallPopup.ContactPopupData.IsLoading = False
              model.variables.callPopupVar.contactPopupDataAttr.isLoadingAttr = false;
              OutSystemsDebugger.handleBreakpoint(
                "4YvUCWT53U+6BrZWsVWc3Q:wjXRMsyUME60g5f49tbQSg",
                callContext.id,
              );
            });
          }
        });
      })
        .then(function (res) {
          OutSystemsDebugger.pop(
            "4YvUCWT53U+6BrZWsVWc3Q:9+lXxPGrk0+ValdjLuxtaA",
            callContext.id,
          );
          return res;
        })
        .catch(function (ex) {
          OutSystemsDebugger.handleException(ex, callContext.id);
          OutSystemsDebugger.pop(
            "4YvUCWT53U+6BrZWsVWc3Q:9+lXxPGrk0+ValdjLuxtaA",
            callContext.id,
          );
          throw ex;
        });
    };
    Controller.registerVariableGroupType(
      "Connect2_Assemble_MUI.Assemble.AssembleEventDetail_Contact.Handler_OptionsCall$vars",
      [
        {
          name: "PhoneNumberToCall",
          attrName: "phoneNumberToCallInLocal",
          mandatory: true,
          dataType: OS.DataTypes.DataTypes.Text,
          defaultValue: function () {
            return "";
          },
        },
      ],
    );

    Controller.prototype.handler_ContactByMessage$Action = function (
      callContext,
    ) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(
        controller._handler_ContactByMessage$Action,
        callContext,
      );
    };
    Controller.prototype.handler_ContactByEmail$Action = function (
      callContext,
    ) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(
        controller._handler_ContactByEmail$Action,
        callContext,
      );
    };
    Controller.prototype.handler_ContactByMessage_Cancel$Action = function (
      callContext,
    ) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(
        controller._handler_ContactByMessage_Cancel$Action,
        callContext,
      );
    };
    Controller.prototype.handler_OnClickHostContact$Action = function (
      callContext,
    ) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(
        controller._handler_OnClickHostContact$Action,
        callContext,
      );
    };
    Controller.prototype.contactByPhonePopupEvent_Cancel$Action = function (
      callContext,
    ) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(
        controller._contactByPhonePopupEvent_Cancel$Action,
        callContext,
      );
    };
    Controller.prototype.handler_OptionsCall$Action = function (
      phoneNumberToCallIn,
      callContext,
    ) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(
        controller._handler_OptionsCall$Action,
        callContext,
        phoneNumberToCallIn,
      );
    };
    Controller.prototype.navigateTo_EmailContact$Action = function () {
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
        "4YvUCWT53U+6BrZWsVWc3Q:n_qkwC2ikUG_KPo2eYiWyQ:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.n_qkwC2ikUG_KPo2eYiWyQ:EU0rStJwxhpRbk_Vg2wm4A",
        "Connect2_Assemble_MUI",
        "AssembleEventDetail_Contact",
        "NRNodes.WebBlock",
        callContext.id,
        varBag,
      );
    };
    Controller.prototype.popDebuggerContext = function (callContext) {
      OutSystemsDebugger.pop(
        "4YvUCWT53U+6BrZWsVWc3Q:n_qkwC2ikUG_KPo2eYiWyQ",
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

define("Connect2_Assemble_MUI.Assemble.AssembleEventDetail_Contact.mvc$debugger", [
  "exports",
  "OutSystems/ClientRuntime/Debugger",
  "OutSystems/ClientRuntime/Main",
], function (exports, Debugger, OutSystems) {
  var OS = OutSystems.Internal;
  var metaInfo = {
    "0UDsibO2QUORgl9iqGPhzg": {
      getter: function (varBag, idService) {
        return varBag.getCacheableSignedPhotoURLVar.value;
      },
    },
    CQJt7DkVdUyXHh55jlDk_Q: {
      getter: function (varBag, idService) {
        return varBag.getCacheableSignedPhotoURLVar.value;
      },
    },
    hJcg4MyTrE6h14CXhkf7Ng: {
      getter: function (varBag, idService) {
        return varBag.hasAccessToRegionVar.value;
      },
    },
    "w7NwcUB0+Ui42Fwo30zE1g": {
      getter: function (varBag, idService) {
        return varBag.vars.value.phoneNumberToCallInLocal;
      },
      dataType: OS.DataTypes.DataTypes.Text,
    },
    "r4b8Yo8ul0q+7c3ZyYkYIQ": {
      getter: function (varBag, idService) {
        return varBag.getCacheableSignedPhotoURLVar.value;
      },
    },
    "62ytVxErT0WZqurO5Ivw7g": {
      getter: function (varBag, idService) {
        return varBag.model.variables.unavailableContactValueVar;
      },
      dataType: OS.DataTypes.DataTypes.Text,
    },
    zkaIPwO5JUCqA5pByCrcag: {
      getter: function (varBag, idService) {
        return varBag.model.variables.callPopupVar;
      },
    },
    c7chIAuqRkOFlIOeHYkuKw: {
      getter: function (varBag, idService) {
        return varBag.model.variables.contactPopupDataVar;
      },
    },
    yzGi4xZxEkmo3rqN4GTO3A: {
      getter: function (varBag, idService) {
        return varBag.model.variables.isDataFetchedIn;
      },
      dataType: OS.DataTypes.DataTypes.Boolean,
    },
    Q1tYwSLOYU2yyjigh6q4CQ: {
      getter: function (varBag, idService) {
        return varBag.model.variables.assembleEventContactIn;
      },
    },
    "2tOEhk+yMkS4B44B5shynA": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(
            idService.getId("Div_EventContacts__Content__HostContact"),
          );
        })(varBag.model, idService);
      },
    },
    "Z5wTlYupR0K7QSGlzF0+rg": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Block_HostContact"));
        })(varBag.model, idService);
      },
    },
    "1gpxch1XX0GFb_ZvyWSjKA": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Label"));
        })(varBag.model, idService);
      },
    },
    GhOh7wFQXEqdE3Nc4KdYRw: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("ImagePlaceholder"));
        })(varBag.model, idService);
      },
    },
    ySIv6WpxVUuAmv5xHtV3dQ: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Title_Placeholder"));
        })(varBag.model, idService);
      },
    },
    EhoSAs4Y0kSeXjE3vVFMYw: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Description_Placeholder"));
        })(varBag.model, idService);
      },
    },
    eJRFI83HmkmqHz4eGd5v6A: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Action_Placeholder"));
        })(varBag.model, idService);
      },
    },
    "C_HyK2KMKUmp+3bqOq+l1w": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("FreeSubscriptionAlert"));
        })(varBag.model, idService);
      },
    },
  };
  OutSystemsDebugger.registerMetaInfo(metaInfo);
});
