define("Connect2_LegacyShared.MyNotifications.MessageList_Filter.mvc$model", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_LegacyShared.model",
], function (OutSystems, Connect2_LegacySharedModel) {
  var OS = OutSystems.Internal;

  var VariablesRecord = (function (_super) {
    __extends(VariablesRecord, _super);
    function VariablesRecord(defaults) {
      _super.apply(this, arguments);
    }
    VariablesRecord.attributesToDeclare = function () {
      return [
        this.attr(
          "Filter_OrderASC",
          "filter_OrderASCIn",
          "Filter_OrderASC",
          true,
          false,
          OS.DataTypes.DataTypes.Boolean,
          function () {
            return false;
          },
          false,
        ),
        this.attr(
          "_filter_OrderASCInDataFetchStatus",
          "_filter_OrderASCInDataFetchStatus",
          "_filter_OrderASCInDataFetchStatus",
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return /*Fetched*/ 1;
          },
          false,
        ),
        this.attr(
          "Filter_OrderDESC",
          "filter_OrderDESCIn",
          "Filter_OrderDESC",
          true,
          false,
          OS.DataTypes.DataTypes.Boolean,
          function () {
            return false;
          },
          false,
        ),
        this.attr(
          "_filter_OrderDESCInDataFetchStatus",
          "_filter_OrderDESCInDataFetchStatus",
          "_filter_OrderDESCInDataFetchStatus",
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
      return {
        NewToOld_Checkbox: OS.Model.ValidationWidgetRecord,
        OldToNew_Checkbox: OS.Model.ValidationWidgetRecord,
      };
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
    Object.defineProperty(Model, "hasValidationWidgets", {
      enumerable: true,
      configurable: true,
      get: function () {
        return true;
      },
    });

    Model.prototype.setInputs = function (inputs) {
      if ("Filter_OrderASC" in inputs) {
        this.variables.filter_OrderASCIn = inputs.Filter_OrderASC;
        if ("_filter_OrderASCInDataFetchStatus" in inputs) {
          this.variables._filter_OrderASCInDataFetchStatus = inputs._filter_OrderASCInDataFetchStatus;
        }
      }

      if ("Filter_OrderDESC" in inputs) {
        this.variables.filter_OrderDESCIn = inputs.Filter_OrderDESC;
        if ("_filter_OrderDESCInDataFetchStatus" in inputs) {
          this.variables._filter_OrderDESCInDataFetchStatus = inputs._filter_OrderDESCInDataFetchStatus;
        }
      }
    };
    return Model;
  })(OS.Model.BaseViewModel);
  return new OS.Model.ModelFactory(Model, "MyNotifications.MessageList_Filter");
});
define("Connect2_LegacyShared.MyNotifications.MessageList_Filter.mvc$view", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_LegacyShared.model",
  "Connect2_LegacyShared.controller",
  "react",
  "OutSystems/ReactView/Main",
  "Connect2_LegacyShared.MyNotifications.MessageList_Filter.mvc$model",
  "Connect2_LegacyShared.MyNotifications.MessageList_Filter.mvc$controller",
  "Connect2_LegacyShared.clientVariables",
  "OutSystems/ReactWidgets/Main",
  "Connect2_LegacyShared.MyNotifications.MessageFilterGroup.mvc$view",
  "Connect2_LegacyShared.MyNotifications.MessageFilterItem.mvc$view",
  "Connect2_LegacyShared.Reusable.CircledCheckbox.mvc$view",
  "Connect2_LegacyShared.Reusable.TwoButtonsAligned.mvc$view",
], function (
  OutSystems,
  Connect2_LegacySharedModel,
  Connect2_LegacySharedController,
  React,
  OSView,
  Connect2_LegacyShared_MyNotifications_MessageList_Filter_mvc_model,
  Connect2_LegacyShared_MyNotifications_MessageList_Filter_mvc_controller,
  Connect2_LegacySharedClientVariables,
  OSWidgets,
  Connect2_LegacyShared_MyNotifications_MessageFilterGroup_mvc_view,
  Connect2_LegacyShared_MyNotifications_MessageFilterItem_mvc_view,
  Connect2_LegacyShared_Reusable_CircledCheckbox_mvc_view,
  Connect2_LegacyShared_Reusable_TwoButtonsAligned_mvc_view,
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
    View.displayName = "MyNotifications.MessageList_Filter";
    View.getCssDependencies = function () {
      return ["css/OutSystemsReactWidgets.css"];
    };
    View.getJsDependencies = function () {
      return [];
    };
    View.getBlocks = function () {
      return [
        Connect2_LegacyShared_MyNotifications_MessageFilterGroup_mvc_view,
        Connect2_LegacyShared_MyNotifications_MessageFilterItem_mvc_view,
        Connect2_LegacyShared_Reusable_CircledCheckbox_mvc_view,
        Connect2_LegacyShared_Reusable_TwoButtonsAligned_mvc_view,
      ];
    };
    Object.defineProperty(View.prototype, "modelFactory", {
      get: function () {
        return Connect2_LegacyShared_MyNotifications_MessageList_Filter_mvc_model;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(View.prototype, "controllerFactory", {
      get: function () {
        return Connect2_LegacyShared_MyNotifications_MessageList_Filter_mvc_controller;
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
            style: "full-width full-height",
            visible: true,
            _idProps: {
              service: idService,
              uuid: "0",
            },
            _widgetRecordProvider: widgetsRecordProvider,
          },
          React.createElement(Connect2_LegacyShared_MyNotifications_MessageFilterGroup_mvc_view, {
            inputs: {
              Title: "Sort",
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
              name: "Sort_Group",
              alias: "1",
            },
            _widgetRecordProvider: widgetsRecordProvider,
            placeholders: {
              message_Filter_Item_Placeholder: new PlaceholderContent(function () {
                return [
                  React.createElement(Connect2_LegacyShared_MyNotifications_MessageFilterItem_mvc_view, {
                    inputs: {
                      Title: "Newest to Oldest",
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
                      name: "Sort_NewToOld",
                      alias: "2",
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    placeholders: {
                      message_Filter_Item_Placeholder: new PlaceholderContent(function () {
                        return [
                          React.createElement(Connect2_LegacyShared_Reusable_CircledCheckbox_mvc_view, {
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
                              alias: "3",
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                              checkboxPlaceholder: new PlaceholderContent(function () {
                                return [
                                  React.createElement(OSWidgets.Checkbox, {
                                    _validationProps: {
                                      validationService: validationService,
                                    },
                                    enabled: true,
                                    extendedProperties: {
                                      type: "radio",
                                    },
                                    onChange: function () {
                                      var eventHandlerContext = callContext.clone();
                                      return OS.Flow.tryFinally(
                                        function () {
                                          var varBag = {};
                                          controller.pushDebuggerContext(eventHandlerContext);

                                          OutSystemsDebugger.setThreadStartName(
                                            eventHandlerContext.id,
                                            "MyNotifications/MessageList_Filter/NewToOld_Checkbox OnChange",
                                          );
                                          controller.messageSort$Action(
                                            false,
                                            controller.callContext(eventHandlerContext),
                                          );
                                        },
                                        function () {
                                          controller.popDebuggerContext(eventHandlerContext);
                                        },
                                      );
                                    },
                                    style: "checkbox",
                                    variable: model.createVariable(
                                      OS.DataTypes.DataTypes.Boolean,
                                      model.variables.filter_OrderDESCIn,
                                      function (value) {
                                        model.variables.filter_OrderDESCIn = value;
                                      },
                                    ),
                                    _idProps: {
                                      service: idService,
                                      name: "NewToOld_Checkbox",
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    variable_dataFetchStatus: OS.Model.calculateDataFetchStatus(
                                      model.variables._filter_OrderDESCInDataFetchStatus,
                                    ),
                                  }),
                                ];
                              }),
                            },
                            _dependencies: [
                              asPrimitiveValue(model.variables._filter_OrderDESCInDataFetchStatus),
                              asPrimitiveValue(model.variables.filter_OrderDESCIn),
                            ],
                          }),
                        ];
                      }),
                    },
                    _dependencies: [
                      asPrimitiveValue(model.variables._filter_OrderDESCInDataFetchStatus),
                      asPrimitiveValue(model.variables.filter_OrderDESCIn),
                    ],
                  }),
                  React.createElement(Connect2_LegacyShared_MyNotifications_MessageFilterItem_mvc_view, {
                    inputs: {
                      Title: "Oldest to Newest",
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
                      name: "Sort_OldToNew",
                      alias: "4",
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    placeholders: {
                      message_Filter_Item_Placeholder: new PlaceholderContent(function () {
                        return [
                          React.createElement(Connect2_LegacyShared_Reusable_CircledCheckbox_mvc_view, {
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
                              uuid: "6",
                              alias: "5",
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                              checkboxPlaceholder: new PlaceholderContent(function () {
                                return [
                                  React.createElement(OSWidgets.Checkbox, {
                                    _validationProps: {
                                      validationService: validationService,
                                    },
                                    enabled: true,
                                    extendedProperties: {
                                      type: "radio",
                                    },
                                    onChange: function () {
                                      var eventHandlerContext = callContext.clone();
                                      return OS.Flow.tryFinally(
                                        function () {
                                          var varBag = {};
                                          controller.pushDebuggerContext(eventHandlerContext);

                                          OutSystemsDebugger.setThreadStartName(
                                            eventHandlerContext.id,
                                            "MyNotifications/MessageList_Filter/OldToNew_Checkbox OnChange",
                                          );
                                          controller.messageSort$Action(
                                            true,
                                            controller.callContext(eventHandlerContext),
                                          );
                                        },
                                        function () {
                                          controller.popDebuggerContext(eventHandlerContext);
                                        },
                                      );
                                    },
                                    style: "checkbox",
                                    variable: model.createVariable(
                                      OS.DataTypes.DataTypes.Boolean,
                                      model.variables.filter_OrderASCIn,
                                      function (value) {
                                        model.variables.filter_OrderASCIn = value;
                                      },
                                    ),
                                    _idProps: {
                                      service: idService,
                                      name: "OldToNew_Checkbox",
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider,
                                    variable_dataFetchStatus: OS.Model.calculateDataFetchStatus(
                                      model.variables._filter_OrderASCInDataFetchStatus,
                                    ),
                                  }),
                                ];
                              }),
                            },
                            _dependencies: [
                              asPrimitiveValue(model.variables._filter_OrderASCInDataFetchStatus),
                              asPrimitiveValue(model.variables.filter_OrderASCIn),
                            ],
                          }),
                        ];
                      }),
                    },
                    _dependencies: [
                      asPrimitiveValue(model.variables._filter_OrderASCInDataFetchStatus),
                      asPrimitiveValue(model.variables.filter_OrderASCIn),
                    ],
                  }),
                ];
              }),
            },
            _dependencies: [
              asPrimitiveValue(model.variables.filter_OrderASCIn),
              asPrimitiveValue(model.variables._filter_OrderASCInDataFetchStatus),
              asPrimitiveValue(model.variables._filter_OrderDESCInDataFetchStatus),
              asPrimitiveValue(model.variables.filter_OrderDESCIn),
            ],
          }),
          React.createElement(
            OSWidgets.Container,
            {
              align: /*Default*/ 0,
              animate: false,
              style: "stick-to-bottom ",
              visible: true,
              _idProps: {
                service: idService,
                uuid: "8",
              },
              _widgetRecordProvider: widgetsRecordProvider,
            },
            React.createElement(Connect2_LegacyShared_Reusable_TwoButtonsAligned_mvc_view, {
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
                uuid: "9",
                alias: "6",
              },
              _widgetRecordProvider: widgetsRecordProvider,
              placeholders: {
                left: new PlaceholderContent(function () {
                  return [
                    React.createElement(
                      OSWidgets.Button,
                      {
                        enabled: true,
                        isDefault: false,
                        onClick: function () {
                          var eventHandlerContext = callContext.clone();
                          return OS.Flow.tryFinally(
                            function () {
                              var varBag = {};
                              controller.pushDebuggerContext(eventHandlerContext);

                              OutSystemsDebugger.setThreadStartName(
                                eventHandlerContext.id,
                                "MyNotifications/MessageList_Filter/Button OnClick",
                              );
                              controller.resetFilters$Action(controller.callContext(eventHandlerContext));
                            },
                            function () {
                              controller.popDebuggerContext(eventHandlerContext);
                            },
                          );
                        },
                        style: "btn full-width",
                        visible: true,
                        _idProps: {
                          service: idService,
                          uuid: "10",
                        },
                        _widgetRecordProvider: widgetsRecordProvider,
                      },
                      "Reset",
                    ),
                  ];
                }),
                right: new PlaceholderContent(function () {
                  return [
                    React.createElement(
                      OSWidgets.Button,
                      {
                        enabled: true,
                        isDefault: false,
                        onClick: function () {
                          var eventHandlerContext = callContext.clone();
                          return OS.Flow.tryFinally(
                            function () {
                              var varBag = {};
                              controller.pushDebuggerContext(eventHandlerContext);

                              OutSystemsDebugger.setThreadStartName(
                                eventHandlerContext.id,
                                "MyNotifications/MessageList_Filter/Button OnClick",
                              );
                              controller.applyFilters$Action(controller.callContext(eventHandlerContext));
                            },
                            function () {
                              controller.popDebuggerContext(eventHandlerContext);
                            },
                          );
                        },
                        style: "btn btn-primary full-width",
                        visible: true,
                        _idProps: {
                          service: idService,
                          uuid: "11",
                        },
                        _widgetRecordProvider: widgetsRecordProvider,
                      },
                      "Apply",
                    ),
                  ];
                }),
              },
              _dependencies: [],
            }),
          ),
        ),
      );
    };
    return View;
  })(OSView.BaseView.BaseWebBlock);

  return View;
});
define("Connect2_LegacyShared.MyNotifications.MessageList_Filter.mvc$controller", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_LegacyShared.model",
  "Connect2_LegacyShared.controller",
  "Connect2_LegacyShared.languageResources",
  "Connect2_LegacyShared.clientVariables",
  "Connect2_LegacyShared.MyNotifications.MessageList_Filter.mvc$debugger",
], function (
  OutSystems,
  Connect2_LegacySharedModel,
  Connect2_LegacySharedController,
  Connect2_LegacySharedLanguageResources,
  Connect2_LegacySharedClientVariables,
  Connect2_LegacyShared_MyNotifications_MessageList_Filter_mvc_Debugger,
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

    Controller.prototype.resetFilters$Action = function () {
      return Promise.resolve();
    };
    Controller.prototype.applyFilters$Action = function () {
      return Promise.resolve();
    };
    Controller.prototype.messageSort$Action = function () {
      return Promise.resolve();
    };

    // Event Handler Actions
    Controller.prototype.pushDebuggerContext = function (callContext) {
      var varBag = {};
      OutSystemsDebugger.push(
        "DjcSN7X3Kkyt49iAAhnv1A:iKTaVBbqsE2TV8kygBm0tA:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA:JDVFsscJB_uWX_OdVOax1A",
        "Connect2_LegacyShared",
        "MyNotifications",
        "NRFlows.WebFlow",
        callContext.id,
        varBag,
      );
      OutSystemsDebugger.push(
        "DjcSN7X3Kkyt49iAAhnv1A:K0Xy3OX4XEak++95ean5rg:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.K0Xy3OX4XEak++95ean5rg:K3jPU263CvifNDlXhz5d2g",
        "Connect2_LegacyShared",
        "MessageList_Filter",
        "NRNodes.WebBlock",
        callContext.id,
        varBag,
      );
    };
    Controller.prototype.popDebuggerContext = function (callContext) {
      OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:K0Xy3OX4XEak++95ean5rg", callContext.id);
      OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:iKTaVBbqsE2TV8kygBm0tA", callContext.id);
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
      return Connect2_LegacySharedController.default.defaultTimeout;
    };
    return Controller;
  })(OS.Controller.BaseViewController);
  return new OS.Controller.ControllerFactory(Controller, Connect2_LegacySharedLanguageResources);
});

define("Connect2_LegacyShared.MyNotifications.MessageList_Filter.mvc$debugger", [
  "exports",
  "OutSystems/ClientRuntime/Debugger",
  "OutSystems/ClientRuntime/Main",
], function (exports, Debugger, OutSystems) {
  var OS = OutSystems.Internal;
  var metaInfo = {
    "5jnVvS7Ezkyzw1YQEn_QIQ": {
      getter: function (varBag, idService) {
        return varBag.model.variables.filter_OrderASCIn;
      },
      dataType: OS.DataTypes.DataTypes.Boolean,
    },
    "38ooZ956rUebTO8ZLdn3+A": {
      getter: function (varBag, idService) {
        return varBag.model.variables.filter_OrderDESCIn;
      },
      dataType: OS.DataTypes.DataTypes.Boolean,
    },
    "dx64ypowJUOTsi54Igg2+Q": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Sort_Group"));
        })(varBag.model, idService);
      },
    },
    "44b1nOtde0abLorCdbyorw": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Message_Filter_Item_Placeholder"));
        })(varBag.model, idService);
      },
    },
    uyIXpSP8SkyMYqftp72XKg: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Sort_NewToOld"));
        })(varBag.model, idService);
      },
    },
    mEiZaVi24EaEg8quMqIb9g: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Message_Filter_Item_Placeholder"));
        })(varBag.model, idService);
      },
    },
    nDuI_NaTLUWwGucBsZh2Jw: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("CheckboxPlaceholder"));
        })(varBag.model, idService);
      },
    },
    rxzFVINExECCkAcdQ7M4_g: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("NewToOld_Checkbox"));
        })(varBag.model, idService);
      },
    },
    "2eQlwVc38UushkAVzzceRg": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Sort_OldToNew"));
        })(varBag.model, idService);
      },
    },
    qr84Yrm260yhf697Ld4fcw: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Message_Filter_Item_Placeholder"));
        })(varBag.model, idService);
      },
    },
    "atOvmtAYD0CY+67YIj0lkg": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("CheckboxPlaceholder"));
        })(varBag.model, idService);
      },
    },
    "bBe7lqmNLk2+nZys3Cg2zA": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("OldToNew_Checkbox"));
        })(varBag.model, idService);
      },
    },
    "hchRUZoOs0+Y4spRDVwmNg": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Left"));
        })(varBag.model, idService);
      },
    },
    S5O1ZEE4Ek6LVU6fjj87Rw: {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Right"));
        })(varBag.model, idService);
      },
    },
  };
  OutSystemsDebugger.registerMetaInfo(metaInfo);
});
