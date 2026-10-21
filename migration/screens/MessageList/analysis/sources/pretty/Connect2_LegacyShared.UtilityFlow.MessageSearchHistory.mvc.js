define("Connect2_LegacyShared.UtilityFlow.MessageSearchHistory.mvc$model", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_LegacyShared.model",
  "Connect2_LegacyShared.controller",
  "Connect2_LegacyShared.entities",
  "Connect2_LegacyShared.controller$LocalSearchHistory_Update",
  "Connect2_LegacyShared.model$LocalSearchHistoryRecordList",
  "Connect2_LegacyShared.model$LocalSearchHistoryRec",
], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedEntities) {
  var OS = OutSystems.Internal;
  var GetFilteredUserSearchHistoryAggrRec = (function (_super) {
    __extends(GetFilteredUserSearchHistoryAggrRec, _super);
    function GetFilteredUserSearchHistoryAggrRec(defaults) {
      _super.apply(this, arguments);
    }
    GetFilteredUserSearchHistoryAggrRec.RecordListType = Connect2_LegacySharedModel.LocalSearchHistoryRecordList;
    GetFilteredUserSearchHistoryAggrRec.init();
    return GetFilteredUserSearchHistoryAggrRec;
  })(OS.Model.AggregateRecord);

  var VariablesRecord = (function (_super) {
    __extends(VariablesRecord, _super);
    function VariablesRecord(defaults) {
      _super.apply(this, arguments);
    }
    VariablesRecord.attributesToDeclare = function () {
      return [
        this.attr(
          "MaxRecords",
          "maxRecordsVar",
          "MaxRecords",
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return 5;
          },
          false,
        ),
        this.attr(
          "SearchString",
          "searchStringIn",
          "SearchString",
          true,
          false,
          OS.DataTypes.DataTypes.Text,
          function () {
            return "";
          },
          false,
        ),
        this.attr(
          "_searchStringInDataFetchStatus",
          "_searchStringInDataFetchStatus",
          "_searchStringInDataFetchStatus",
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return /*Fetched*/ 1;
          },
          false,
        ),
        this.attr(
          "ShowOnlyOnCorrectTerm",
          "showOnlyOnCorrectTermIn",
          "ShowOnlyOnCorrectTerm",
          true,
          false,
          OS.DataTypes.DataTypes.Boolean,
          function () {
            return true;
          },
          false,
        ),
        this.attr(
          "_showOnlyOnCorrectTermInDataFetchStatus",
          "_showOnlyOnCorrectTermInDataFetchStatus",
          "_showOnlyOnCorrectTermInDataFetchStatus",
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return /*Fetched*/ 1;
          },
          false,
        ),
        this.attr(
          "HasBottomBorder",
          "hasBottomBorderIn",
          "HasBottomBorder",
          true,
          false,
          OS.DataTypes.DataTypes.Boolean,
          function () {
            return false;
          },
          false,
        ),
        this.attr(
          "_hasBottomBorderInDataFetchStatus",
          "_hasBottomBorderInDataFetchStatus",
          "_hasBottomBorderInDataFetchStatus",
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return /*Fetched*/ 1;
          },
          false,
        ),
        this.attr(
          "RecentSearchTypeId",
          "recentSearchTypeIdIn",
          "RecentSearchTypeId",
          true,
          false,
          OS.DataTypes.DataTypes.Text,
          function () {
            return "";
          },
          false,
        ),
        this.attr(
          "_recentSearchTypeIdInDataFetchStatus",
          "_recentSearchTypeIdInDataFetchStatus",
          "_recentSearchTypeIdInDataFetchStatus",
          true,
          false,
          OS.DataTypes.DataTypes.Integer,
          function () {
            return /*Fetched*/ 1;
          },
          false,
        ),
        this.attr(
          "GetFilteredUserSearchHistory",
          "getFilteredUserSearchHistoryAggr",
          "getFilteredUserSearchHistoryAggr",
          true,
          true,
          OS.DataTypes.DataTypes.Record,
          function () {
            return OS.DataTypes.ImmutableBase.getData(new GetFilteredUserSearchHistoryAggrRec());
          },
          true,
          GetFilteredUserSearchHistoryAggrRec,
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
    Object.defineProperty(Model, "hasValidationWidgets", {
      enumerable: true,
      configurable: true,
      get: function () {
        return false;
      },
    });

    Model.prototype.setInputs = function (inputs) {
      if ("SearchString" in inputs) {
        this.variables.searchStringIn = inputs.SearchString;
        if ("_searchStringInDataFetchStatus" in inputs) {
          this.variables._searchStringInDataFetchStatus = inputs._searchStringInDataFetchStatus;
        }
      }

      if ("ShowOnlyOnCorrectTerm" in inputs) {
        this.variables.showOnlyOnCorrectTermIn = inputs.ShowOnlyOnCorrectTerm;
        if ("_showOnlyOnCorrectTermInDataFetchStatus" in inputs) {
          this.variables._showOnlyOnCorrectTermInDataFetchStatus = inputs._showOnlyOnCorrectTermInDataFetchStatus;
        }
      }

      if ("HasBottomBorder" in inputs) {
        this.variables.hasBottomBorderIn = inputs.HasBottomBorder;
        if ("_hasBottomBorderInDataFetchStatus" in inputs) {
          this.variables._hasBottomBorderInDataFetchStatus = inputs._hasBottomBorderInDataFetchStatus;
        }
      }

      if ("RecentSearchTypeId" in inputs) {
        this.variables.recentSearchTypeIdIn = inputs.RecentSearchTypeId;
        if ("_recentSearchTypeIdInDataFetchStatus" in inputs) {
          this.variables._recentSearchTypeIdInDataFetchStatus = inputs._recentSearchTypeIdInDataFetchStatus;
        }
      }
    };
    return Model;
  })(OS.Model.BaseViewModel);
  return new OS.Model.ModelFactory(Model, "UtilityFlow.MessageSearchHistory");
});
define("Connect2_LegacyShared.UtilityFlow.MessageSearchHistory.mvc$view", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_LegacyShared.model",
  "Connect2_LegacyShared.controller",
  "Connect2_LegacyShared.entities",
  "react",
  "OutSystems/ReactView/Main",
  "Connect2_LegacyShared.UtilityFlow.MessageSearchHistory.mvc$model",
  "Connect2_LegacyShared.UtilityFlow.MessageSearchHistory.mvc$controller",
  "Connect2_LegacyShared.clientVariables",
  "OutSystems/ReactWidgets/Main",
  "Connect2_LegacyShared.controller$LocalSearchHistory_Update",
  "Connect2_LegacyShared.model$LocalSearchHistoryRecordList",
  "Connect2_LegacyShared.model$LocalSearchHistoryRec",
], function (
  OutSystems,
  Connect2_LegacySharedModel,
  Connect2_LegacySharedController,
  Connect2_LegacySharedEntities,
  React,
  OSView,
  Connect2_LegacyShared_UtilityFlow_MessageSearchHistory_mvc_model,
  Connect2_LegacyShared_UtilityFlow_MessageSearchHistory_mvc_controller,
  Connect2_LegacySharedClientVariables,
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
    View.displayName = "UtilityFlow.MessageSearchHistory";
    View.getCssDependencies = function () {
      return ["css/OutSystemsReactWidgets.css"];
    };
    View.getJsDependencies = function () {
      return [];
    };
    View.getBlocks = function () {
      return [];
    };
    Object.defineProperty(View.prototype, "modelFactory", {
      get: function () {
        return Connect2_LegacyShared_UtilityFlow_MessageSearchHistory_mvc_model;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(View.prototype, "controllerFactory", {
      get: function () {
        return Connect2_LegacyShared_UtilityFlow_MessageSearchHistory_mvc_controller;
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
          !model.variables.getFilteredUserSearchHistoryAggr.listOut.isEmpty,
          false,
          this,
          function () {
            return [
              React.createElement(OSWidgets.List, {
                animateItems: false,
                gridProperties: {
                  classes: "OSFillParent",
                },
                mode: /*Default*/ 0,
                source: model.variables.getFilteredUserSearchHistoryAggr.listOut,
                style: "list list-group",
                tag: "div",
                _idProps: {
                  service: idService,
                  name: "Search_History_List",
                },
                _widgetRecordProvider: widgetsRecordProvider,
                source_dataFetchStatus: OS.Model.calculateDataFetchStatus(
                  model.variables.getFilteredUserSearchHistoryAggr.dataFetchStatusAttr,
                ),
                placeholders: {
                  content: new IteratorPlaceholderContent(
                    function (idService, callContext) {
                      return [
                        React.createElement(
                          OSWidgets.Container,
                          {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedEvents: {
                              onClick: function () {
                                return Promise.resolve().then(function () {
                                  var eventHandlerContext = callContext.clone();
                                  return OS.Flow.tryFinally(
                                    function () {
                                      var varBag = {};
                                      controller.pushDebuggerContext(eventHandlerContext);

                                      OutSystemsDebugger.setThreadStartName(
                                        eventHandlerContext.id,
                                        "UtilityFlow/MessageSearchHistory/Search_History_List_Item onclick",
                                      );
                                      return controller.onClick_Search_History_List_Item$Action(
                                        model.variables.getFilteredUserSearchHistoryAggr.listOut.getCurrent(
                                          callContext.iterationContext,
                                        ).localSearchHistoryAttr.idAttr,
                                        model.variables.getFilteredUserSearchHistoryAggr.listOut.getCurrent(
                                          callContext.iterationContext,
                                        ).localSearchHistoryAttr.searchedStringAttr,
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
                            extendedProperties: {
                              className: model.getCachedValue(
                                idService.getId("Search_History_List_Item.class"),
                                function () {
                                  return (
                                    "search-history-item" +
                                    (model.variables.hasBottomBorderIn ? " border-bottom-neutral-2" : "")
                                  );
                                },
                                function () {
                                  return model.variables.hasBottomBorderIn;
                                },
                              ),
                            },
                            style: "search-history-item",
                            visible: true,
                            _idProps: {
                              service: idService,
                              name: "Search_History_List_Item",
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: [
                              asPrimitiveValue(model.variables.getFilteredUserSearchHistoryAggr.dataFetchStatusAttr),
                              asPrimitiveValue(
                                model.variables.getFilteredUserSearchHistoryAggr.listOut.getCurrent(
                                  callContext.iterationContext,
                                ).localSearchHistoryAttr.searchedStringAttr,
                              ),
                            ],
                          },
                          React.createElement(OSWidgets.Icon, {
                            icon: "flag",
                            iconSize: /*FontSize*/ 0,
                            style: "icon icon-history text-neutral-6",
                            visible: true,
                            _idProps: {
                              service: idService,
                              uuid: "2",
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                          }),
                          React.createElement(OSWidgets.Expression, {
                            style: "margin-left-base truncate-data-span",
                            value: model.variables.getFilteredUserSearchHistoryAggr.listOut.getCurrent(
                              callContext.iterationContext,
                            ).localSearchHistoryAttr.searchedStringAttr,
                            _idProps: {
                              service: idService,
                              uuid: "3",
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            value_dataFetchStatus: OS.Model.calculateDataFetchStatus(
                              model.variables.getFilteredUserSearchHistoryAggr.dataFetchStatusAttr,
                            ),
                          }),
                        ),
                      ];
                    },
                    callContext,
                    idService,
                    "1",
                  ),
                },
                _dependencies: [
                  asPrimitiveValue(model.variables.getFilteredUserSearchHistoryAggr.dataFetchStatusAttr),
                  asPrimitiveValue(model.variables._hasBottomBorderInDataFetchStatus),
                  asPrimitiveValue(model.variables.hasBottomBorderIn),
                ],
              }),
            ];
          },
          function () {
            return [];
          },
        ),
      );
    };
    return View;
  })(OSView.BaseView.BaseWebBlock);

  return View;
});
define("Connect2_LegacyShared.UtilityFlow.MessageSearchHistory.mvc$controller", [
  "OutSystems/ClientRuntime/Main",
  "Connect2_LegacyShared.model",
  "Connect2_LegacyShared.controller",
  "Connect2_LegacyShared.entities",
  "Connect2_LegacyShared.languageResources",
  "Connect2_LegacyShared.clientVariables",
  "Connect2_LegacyShared.UtilityFlow.MessageSearchHistory.mvc$debugger",
  "Connect2_LegacyShared.controller$LocalSearchHistory_Update",
  "Connect2_LegacyShared.model$LocalSearchHistoryRecordList",
  "Connect2_LegacyShared.model$LocalSearchHistoryRec",
], function (
  OutSystems,
  Connect2_LegacySharedModel,
  Connect2_LegacySharedController,
  Connect2_LegacySharedEntities,
  Connect2_LegacySharedLanguageResources,
  Connect2_LegacySharedClientVariables,
  Connect2_LegacyShared_UtilityFlow_MessageSearchHistory_mvc_Debugger,
) {
  var OS = OutSystems.Internal;
  var Controller = (function (_super) {
    __extends(Controller, _super);
    function Controller() {
      _super.apply(this, arguments);
      var controller = this.controller;
      this.clientActionProxies = {};
      this.dataFetchDependenciesOriginal = {
        getFilteredUserSearchHistory$AggrRefresh: 0,
      };
      this.dataFetchDependentsGraph = {
        getFilteredUserSearchHistory$AggrRefresh: [],
      };
      this.shouldSendClientVarsToDataSources = false;
    }
    // Server Actions

    // Aggregates and Data Actions
    Controller.prototype.getFilteredUserSearchHistory$AggrRefresh = function (maxRecords) {
      var model = this.model;
      var controller = this.controller;
      var callContext = controller.callContext();

      var executeQuery = null;
      if (OS.NativeHelper.isRunningOnNative()) {
        executeQuery = function () {
          var targetListType = Connect2_LegacySharedModel.LocalSearchHistoryRecordList;
          var result = {
            list: null,
            count: OS.DataTypes.LongInteger.defaultValue,
          };
          var countArgsList = new OS.Entities.QueryArgumentsList();
          if (!maxRecords) {
            maxRecords = model.variables.maxRecordsVar;
          }

          var qpinUserId = OS.BuiltinFunctions.getUserId();
          var qpstRecentSearchTypeId = model.variables.recentSearchTypeIdIn;
          var qpstSearchString = model.variables.searchStringIn;
          var qpboShowOnlyOnCorrectTerm = model.variables.showOnlyOnCorrectTermIn;

          var optimizeSelect = false;
          var selectSql = "";
          var fromAndWhereSql = "";
          var groupByAndHavingSql = "";
          var orderBySql = "";
          var argsList = new OS.Entities.QueryArgumentsList();

          selectSql += "SELECT ";
          if (optimizeSelect) {
            selectSql +=
              '"ENLocalSearchHistory"."Id" o0, NULL o1, "ENLocalSearchHistory"."SearchedString" o2, NULL o3, NULL o4';
          } else {
            selectSql +=
              '"ENLocalSearchHistory"."Id" o0, "ENLocalSearchHistory"."UserId" o1, "ENLocalSearchHistory"."SearchedString" o2, "ENLocalSearchHistory"."CreatedOn" o3, "ENLocalSearchHistory"."RecentSearchTypeId" o4';
          }
          fromAndWhereSql += ' FROM "MAIN"."OSUSR_b3n_LocalSearchHistory" "ENLocalSearchHistory"';
          fromAndWhereSql += " WHERE ";
          if (qpinUserId != 0) {
            fromAndWhereSql +=
              '(("ENLocalSearchHistory"."UserId" = :qpinUserId) AND ("ENLocalSearchHistory"."UserId" IS NOT NULL))';
            argsList.add("qpinUserId", /*INTEGER*/ 3, qpinUserId);
          } else {
            fromAndWhereSql += '("ENLocalSearchHistory"."UserId" IS NULL)';
          }
          fromAndWhereSql +=
            " AND ((NOT (:qpboShowOnlyOnCorrectTerm = 1)) OR ((\"ENLocalSearchHistory\".\"SearchedString\" LIKE (('%' || :qpstSearchString) || '%')) AND (:qpstSearchString <> ''))) AND ";
          argsList.add("qpboShowOnlyOnCorrectTerm", /*BOOLEAN*/ 2, qpboShowOnlyOnCorrectTerm);
          argsList.add("qpstSearchString", /*TEXT*/ 0, qpstSearchString);
          if (qpstRecentSearchTypeId.trim() !== "") {
            fromAndWhereSql +=
              '(("ENLocalSearchHistory"."RecentSearchTypeId" = :qpstRecentSearchTypeId) AND ("ENLocalSearchHistory"."RecentSearchTypeId" IS NOT NULL))';
            argsList.add("qpstRecentSearchTypeId", /*TEXT*/ 0, qpstRecentSearchTypeId);
          } else {
            fromAndWhereSql += '("ENLocalSearchHistory"."RecentSearchTypeId" IS NULL)';
          }
          orderBySql += ' ORDER BY "ENLocalSearchHistory"."CreatedOn" DESC ';
          if (maxRecords > 0) {
            orderBySql += " LIMIT ";
            orderBySql += maxRecords;
          }
          var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

          return OS.Entities.webSQLStorageInstance
            .executeQuery(
              sql,
              Connect2_LegacySharedModel.LocalSearchHistoryRecordList,
              function (rec, r) {
                var indexRef = {
                  value: 0,
                };
                var attrOrder = ["localSearchHistoryAttr"];
                return OS.DataConversion.LocalStorageConverter.from(
                  r,
                  targetListType.getItemType(),
                  indexRef,
                  attrOrder,
                );
              },
              argsList,
            )
            .then(function (resultList) {
              result.list = resultList;
            })
            .then(function () {})
            .then(function () {
              return result;
            });
        };
      } else {
        executeQuery = function () {
          if (!maxRecords) {
            maxRecords = model.variables.maxRecordsVar;
          }

          return new Promise(function (resolve, reject) {
            require(["Connect2_LegacyShared.aggregates.IDB"], function (Connect2_LegacySharedAggregates_IDB) {
              return Connect2_LegacySharedAggregates_IDB.executeUtilityFlow_MessageSearchHistory$Block$getFilteredUserSearchHistoryAggr(
                OS.BuiltinFunctions.getUserId(),
                model.variables.recentSearchTypeIdIn,
                model.variables.searchStringIn,
                model.variables.showOnlyOnCorrectTermIn,
                maxRecords,
              )
                .then(function (result) {
                  resolve(result);
                })
                .catch(function (e) {
                  reject(e);
                });
            });
          });
        };
      }

      return OS.Flow.tryFinally(
        function () {
          var varBag = {};
          controller.pushDebuggerContext(callContext);

          OutSystemsDebugger.push(
            "DjcSN7X3Kkyt49iAAhnv1A:Jf6IxMH6IEKSAOaRNu7ieQ:/NRWebFlows.neCrYMU60UKWaH9tMEB7ww/NodesShownInESpaceTree.wjQCRODKrUWQZ8nBSmtLew/ScreenDataSets.Jf6IxMH6IEKSAOaRNu7ieQ:LaZvyvVpZB539XO8lZKLcg",
            "Connect2_LegacyShared",
            "GetFilteredUserSearchHistory",
            "NRNodes.WebScreenDataSet",
            callContext.id,
            varBag,
          );
          OutSystemsDebugger.setThreadStartName(
            callContext.id,
            "UtilityFlow/MessageSearchHistory/GetFilteredUserSearchHistory",
          );
          return controller.executeScreenClientAggregate(
            executeQuery,
            function () {
              return model.variables.getFilteredUserSearchHistoryAggr;
            },
            function () {
              OutSystemsDebugger.setThreadStartName(
                callContext.id,
                "UtilityFlow/MessageSearchHistory/GetFilteredUserSearchHistory On After Fetch",
              );
              return controller._onAfterFetch_GetFilteredUserSearchHistory$Action(controller.callContext(callContext));
            },
          );
        },
        function () {
          OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:Jf6IxMH6IEKSAOaRNu7ieQ", callContext.id);
          controller.popDebuggerContext(callContext);
        },
      );
    };

    Controller.prototype.dataFetchActionNames = ["getFilteredUserSearchHistory$AggrRefresh"];
    // Client Actions
    Controller.prototype._onDestroy$Action = function (callContext) {
      var varBag = {};
      var model = this.model;
      var controller = this.controller;
      var idService = this.idService;
      varBag.model = model;
      varBag.idService = idService;
      controller.ensureControllerAlive("OnDestroy");
      callContext = controller.callContext(callContext);
      varBag.callContext = callContext;
      try {
        OutSystemsDebugger.push(
          "DjcSN7X3Kkyt49iAAhnv1A:x0GaAW6fG0C_HOqA0m_jxg:/NRWebFlows.neCrYMU60UKWaH9tMEB7ww/NodesShownInESpaceTree.wjQCRODKrUWQZ8nBSmtLew/ClientActions.x0GaAW6fG0C_HOqA0m_jxg:uilx5P1N4FLbHfe4M_EdVg",
          "Connect2_LegacyShared",
          "OnDestroy",
          "NRFlows.ClientScreenActionFlow",
          callContext.id,
          varBag,
        );
        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:hXW_fG2AP0y0zbpvEVGGZA", callContext.id);
        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:pni+R9HxoUGbcdAnEePs2A", callContext.id);
      } catch (ex) {
        OutSystemsDebugger.handleException(ex, callContext.id);
        throw ex;
      } finally {
        OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:x0GaAW6fG0C_HOqA0m_jxg", callContext.id);
      }
    };
    Controller.prototype._onAfterFetch_GetFilteredUserSearchHistory$Action = function (callContext) {
      var varBag = {};
      var model = this.model;
      var controller = this.controller;
      var idService = this.idService;
      varBag.model = model;
      varBag.idService = idService;
      controller.ensureControllerAlive("OnAfterFetch_GetFilteredUserSearchHistory");
      callContext = controller.callContext(callContext);
      varBag.callContext = callContext;
      OutSystemsDebugger.push(
        "DjcSN7X3Kkyt49iAAhnv1A:aA1pXUnzlkubyUO3Q1xfzA:/NRWebFlows.neCrYMU60UKWaH9tMEB7ww/NodesShownInESpaceTree.wjQCRODKrUWQZ8nBSmtLew/ClientActions.aA1pXUnzlkubyUO3Q1xfzA:lJwXqlCp4_XCeAB0xTAhnA",
        "Connect2_LegacyShared",
        "OnAfterFetch_GetFilteredUserSearchHistory",
        "NRFlows.ClientScreenActionFlow",
        callContext.id,
        varBag,
      );
      OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:1Gei_DDUWUmmA_6m4ud_OQ", callContext.id);
      return OS.Flow.executeAsyncFlow(function () {
        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:kyX_doh4pUq3jqeRVtvJVw", callContext.id);
        // Trigger Event: ResultsFound
        return controller
          .resultsFound$Action(!model.variables.getFilteredUserSearchHistoryAggr.listOut.isEmpty, callContext)
          .then(function () {
            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:aEUW5KYmBkqnJ4Q55uwhyQ", callContext.id);
          });
      })
        .then(function (res) {
          OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:aA1pXUnzlkubyUO3Q1xfzA", callContext.id);
          return res;
        })
        .catch(function (ex) {
          OutSystemsDebugger.handleException(ex, callContext.id);
          OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:aA1pXUnzlkubyUO3Q1xfzA", callContext.id);
          throw ex;
        });
    };
    Controller.prototype._onParametersChanged$Action = function (callContext) {
      var varBag = {};
      var model = this.model;
      var controller = this.controller;
      var idService = this.idService;
      varBag.model = model;
      varBag.idService = idService;
      controller.ensureControllerAlive("OnParametersChanged");
      callContext = controller.callContext(callContext);
      varBag.callContext = callContext;
      OutSystemsDebugger.push(
        "DjcSN7X3Kkyt49iAAhnv1A:iyfGvijj+kyqqcbQ6QjhIg:/NRWebFlows.neCrYMU60UKWaH9tMEB7ww/NodesShownInESpaceTree.wjQCRODKrUWQZ8nBSmtLew/ClientActions.iyfGvijj+kyqqcbQ6QjhIg:hRla2ASUB63jxTNKmcq_1w",
        "Connect2_LegacyShared",
        "OnParametersChanged",
        "NRFlows.ClientScreenActionFlow",
        callContext.id,
        varBag,
      );
      OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:QMZlIsKAW06XoesSFuVsyA", callContext.id);
      return OS.Flow.executeAsyncFlow(function () {
        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:eIseBiQhP0itjkFDS8+9yA", callContext.id);
        // Refresh Query: GetFilteredUserSearchHistory
        var result = controller.getFilteredUserSearchHistory$AggrRefresh(model.variables.maxRecordsVar, 0, callContext);
        model.flush();
        return result.then(function () {
          OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:qB7n7_8LokCUDyCJOnI8BA", callContext.id);
        });
      })
        .then(function (res) {
          OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:iyfGvijj+kyqqcbQ6QjhIg", callContext.id);
          return res;
        })
        .catch(function (ex) {
          OutSystemsDebugger.handleException(ex, callContext.id);
          OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:iyfGvijj+kyqqcbQ6QjhIg", callContext.id);
          throw ex;
        });
    };
    Controller.prototype._onClick_Search_History_List_Item$Action = function (
      localSearchHistoryIdIn,
      selectedItemStringIn,
      callContext,
    ) {
      var varBag = {};
      var model = this.model;
      var controller = this.controller;
      var idService = this.idService;
      varBag.model = model;
      varBag.idService = idService;
      controller.ensureControllerAlive("OnClick_Search_History_List_Item");
      callContext = controller.callContext(callContext);
      var vars = new OS.DataTypes.VariableHolder(
        new (controller.constructor.getVariableGroupType(
          "Connect2_LegacyShared.UtilityFlow.MessageSearchHistory.OnClick_Search_History_List_Item$vars",
        ))(),
      );
      vars.value.localSearchHistoryIdInLocal = localSearchHistoryIdIn;
      vars.value.selectedItemStringInLocal = selectedItemStringIn;
      varBag.callContext = callContext;
      varBag.vars = vars;
      OutSystemsDebugger.push(
        "DjcSN7X3Kkyt49iAAhnv1A:oLID6jkN3Ueq3z0OAQdqow:/NRWebFlows.neCrYMU60UKWaH9tMEB7ww/NodesShownInESpaceTree.wjQCRODKrUWQZ8nBSmtLew/ClientActions.oLID6jkN3Ueq3z0OAQdqow:Dwpgi4XXVkz3FpIbAS4Peg",
        "Connect2_LegacyShared",
        "OnClick_Search_History_List_Item",
        "NRFlows.ClientScreenActionFlow",
        callContext.id,
        varBag,
      );
      OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:_wWu_HHCAE2b1TDHeFEkmg", callContext.id);
      return OS.Flow.executeAsyncFlow(function () {
        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:gtI6q7A_r0C0fspFcvnJrQ", callContext.id);
        // Execute Action: LocalSearchHistory_Update
        model.flush();
        return Connect2_LegacySharedController.default
          .localSearchHistory_Update$Action(vars.value.localSearchHistoryIdInLocal, callContext)
          .then(function () {
            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:e_JzAaYPckehKB+_BXnD1g", callContext.id);
            // Trigger Event: SelectedItem
            return controller.selectedItem$Action(vars.value.selectedItemStringInLocal, callContext);
          })
          .then(function () {
            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:5o8jiTCQfE2lznvGIoE3mQ", callContext.id);
          });
      })
        .then(function (res) {
          OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:oLID6jkN3Ueq3z0OAQdqow", callContext.id);
          return res;
        })
        .catch(function (ex) {
          OutSystemsDebugger.handleException(ex, callContext.id);
          OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:oLID6jkN3Ueq3z0OAQdqow", callContext.id);
          throw ex;
        });
    };
    Controller.registerVariableGroupType(
      "Connect2_LegacyShared.UtilityFlow.MessageSearchHistory.OnClick_Search_History_List_Item$vars",
      [
        {
          name: "LocalSearchHistoryId",
          attrName: "localSearchHistoryIdInLocal",
          mandatory: true,
          dataType: OS.DataTypes.DataTypes.LongInteger,
          defaultValue: function () {
            return OS.DataTypes.LongInteger.defaultValue;
          },
        },
        {
          name: "SelectedItemString",
          attrName: "selectedItemStringInLocal",
          mandatory: true,
          dataType: OS.DataTypes.DataTypes.Text,
          defaultValue: function () {
            return "";
          },
        },
      ],
    );

    Controller.prototype.onDestroy$Action = function (callContext) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);
    };
    Controller.prototype.onAfterFetch_GetFilteredUserSearchHistory$Action = function (callContext) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(
        controller._onAfterFetch_GetFilteredUserSearchHistory$Action,
        callContext,
      );
    };
    Controller.prototype.onParametersChanged$Action = function (callContext) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);
    };
    Controller.prototype.onClick_Search_History_List_Item$Action = function (
      localSearchHistoryIdIn,
      selectedItemStringIn,
      callContext,
    ) {
      var controller = this.controller;
      return controller.safeExecuteClientAction(
        controller._onClick_Search_History_List_Item$Action,
        callContext,
        localSearchHistoryIdIn,
        selectedItemStringIn,
      );
    };
    Controller.prototype.selectedItem$Action = function () {
      return Promise.resolve();
    };
    Controller.prototype.resultsFound$Action = function () {
      return Promise.resolve();
    };

    // Event Handler Actions
    Controller.prototype.pushDebuggerContext = function (callContext) {
      var varBag = {};
      OutSystemsDebugger.push(
        "DjcSN7X3Kkyt49iAAhnv1A:neCrYMU60UKWaH9tMEB7ww:/NRWebFlows.neCrYMU60UKWaH9tMEB7ww:HmK6JVBPAh3PGMsAXRw11Q",
        "Connect2_LegacyShared",
        "UtilityFlow",
        "NRFlows.WebFlow",
        callContext.id,
        varBag,
      );
      OutSystemsDebugger.push(
        "DjcSN7X3Kkyt49iAAhnv1A:wjQCRODKrUWQZ8nBSmtLew:/NRWebFlows.neCrYMU60UKWaH9tMEB7ww/NodesShownInESpaceTree.wjQCRODKrUWQZ8nBSmtLew:U+HlLzOsds1yfmKkig_E9Q",
        "Connect2_LegacyShared",
        "MessageSearchHistory",
        "NRNodes.WebBlock",
        callContext.id,
        varBag,
      );
    };
    Controller.prototype.popDebuggerContext = function (callContext) {
      OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:wjQCRODKrUWQZ8nBSmtLew", callContext.id);
      OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:neCrYMU60UKWaH9tMEB7ww", callContext.id);
    };
    Controller.prototype.onInitializeEventHandler = null;
    Controller.prototype.onReadyEventHandler = null;
    Controller.prototype.onRenderEventHandler = null;
    Controller.prototype.onDestroyEventHandler = function (callContext) {
      var controller = this.controller;
      var model = this.model;
      var idService = this.idService;

      return OS.Flow.tryFinally(
        function () {
          var varBag = {};
          controller.pushDebuggerContext(callContext);

          OutSystemsDebugger.setThreadStartName(callContext.id, "UtilityFlow/MessageSearchHistory On Destroy");
          return controller.onDestroy$Action(callContext);
        },
        function () {
          controller.popDebuggerContext(callContext);
        },
      );
    };
    Controller.prototype.onParametersChangedEventHandler = function (callContext) {
      var controller = this.controller;
      var model = this.model;
      var idService = this.idService;

      return OS.Flow.tryFinally(
        function () {
          var varBag = {};
          controller.pushDebuggerContext(callContext);

          OutSystemsDebugger.setThreadStartName(
            callContext.id,
            "UtilityFlow/MessageSearchHistory On Parameters Changed",
          );
          return controller.onParametersChanged$Action(callContext);
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
      return Connect2_LegacySharedController.default.defaultTimeout;
    };
    return Controller;
  })(OS.Controller.BaseViewController);
  return new OS.Controller.ControllerFactory(Controller, Connect2_LegacySharedLanguageResources);
});

define("Connect2_LegacyShared.UtilityFlow.MessageSearchHistory.mvc$debugger", [
  "exports",
  "OutSystems/ClientRuntime/Debugger",
  "OutSystems/ClientRuntime/Main",
], function (exports, Debugger, OutSystems) {
  var OS = OutSystems.Internal;
  var metaInfo = {
    YcFJwlSh70ujCip4Y2F9EQ: {
      getter: function (varBag, idService) {
        return varBag.vars.value.localSearchHistoryIdInLocal;
      },
      dataType: OS.DataTypes.DataTypes.LongInteger,
    },
    "4yAycBof3Ui6s8AXDunBNA": {
      getter: function (varBag, idService) {
        return varBag.vars.value.selectedItemStringInLocal;
      },
      dataType: OS.DataTypes.DataTypes.Text,
    },
    "_GANj3rl+E2aJjmOq+001w": {
      getter: function (varBag, idService) {
        return varBag.model.variables.maxRecordsVar;
      },
      dataType: OS.DataTypes.DataTypes.Integer,
    },
    EDzBBLGGXk21jihWtzugag: {
      getter: function (varBag, idService) {
        return varBag.model.variables.searchStringIn;
      },
      dataType: OS.DataTypes.DataTypes.Text,
    },
    DcVsNLjuiEa0Y69o8rDoqg: {
      getter: function (varBag, idService) {
        return varBag.model.variables.showOnlyOnCorrectTermIn;
      },
      dataType: OS.DataTypes.DataTypes.Boolean,
    },
    lk54Jr2yW0GnA0dOFAC3_Q: {
      getter: function (varBag, idService) {
        return varBag.model.variables.hasBottomBorderIn;
      },
      dataType: OS.DataTypes.DataTypes.Boolean,
    },
    "rds+WZxCck2V3YSJHtMUfg": {
      getter: function (varBag, idService) {
        return varBag.model.variables.recentSearchTypeIdIn;
      },
      dataType: OS.DataTypes.DataTypes.Text,
    },
    Jf6IxMH6IEKSAOaRNu7ieQ: {
      getter: function (varBag, idService) {
        return varBag.model.variables.getFilteredUserSearchHistoryAggr;
      },
    },
    "7WR+_r3VoUqRIW8WQI9J+Q": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("HasResults"));
        })(varBag.model, idService);
      },
    },
    "2alQFhnsTE2rYHVQ02MRNQ": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Search_History_List"));
        })(varBag.model, idService);
      },
    },
    "u0XBenDNoUK_cvSOF4LZ+w": {
      getter: function (varBag, idService) {
        return (function (model, idService) {
          return model.widgets.get(idService.getId("Search_History_List_Item"));
        })(varBag.model, idService);
      },
    },
  };
  OutSystemsDebugger.registerMetaInfo(metaInfo);
});
