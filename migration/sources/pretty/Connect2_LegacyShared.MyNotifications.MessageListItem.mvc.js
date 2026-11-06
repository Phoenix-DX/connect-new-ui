define("Connect2_LegacyShared.MyNotifications.MessageListItem.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.controller$Cache_SignedImageURL_Get", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnect_Utils"], function(OutSystems, Connect2_LegacySharedModel, UBTConnect_UtilsController) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("UserPhotoURL", "userPhotoURLVar", "UserPhotoURL", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("IsFetchingUserPhoto", "isFetchingUserPhotoVar", "IsFetchingUserPhoto", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("Title", "titleIn", "Title", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("SentFromName", "sentFromNameIn", "SentFromName", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_sentFromNameInDataFetchStatus", "_sentFromNameInDataFetchStatus", "_sentFromNameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("MessageDateTime", "messageDateTimeIn", "MessageDateTime", true, false, OS.DataTypes.DataTypes.DateTime, function() {
                    return OS.DataTypes.DateTime.defaultValue;
                }, false),
                this.attr("_messageDateTimeInDataFetchStatus", "_messageDateTimeInDataFetchStatus", "_messageDateTimeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("IsUrgent", "isUrgentIn", "IsUrgent", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_isUrgentInDataFetchStatus", "_isUrgentInDataFetchStatus", "_isUrgentInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("IconURL", "iconURLIn", "IconURL", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_iconURLInDataFetchStatus", "_iconURLInDataFetchStatus", "_iconURLInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("UserId", "userIdIn", "UserId", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 0;
                }, false),
                this.attr("_userIdInDataFetchStatus", "_userIdInDataFetchStatus", "_userIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("MemberId", "memberIdIn", "MemberId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_memberIdInDataFetchStatus", "_memberIdInDataFetchStatus", "_memberIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false)
            ].concat(_super.attributesToDeclare.call(this));
        };
        VariablesRecord.init();
        return VariablesRecord;
    })(OS.DataTypes.GenericRecord);
    var WidgetsRecord = (function(_super) {
        __extends(WidgetsRecord, _super);

        function WidgetsRecord() {
            _super.apply(this, arguments);
        }
        WidgetsRecord.getWidgetsType = function() {
            return {};
        };

        return WidgetsRecord;
    })(OS.Model.BaseWidgetRecordMap);
    var Model = (function(_super) {
        __extends(Model, _super);

        function Model() {
            _super.apply(this, arguments);
        }
        Model.getVariablesRecordConstructor = function() {
            return VariablesRecord;
        };
        Model.getWidgetsRecordConstructor = function() {
            return WidgetsRecord;
        };
        Object.defineProperty(Model, "hasValidationWidgets", {
            enumerable: true,
            configurable: true,
            get: function() {
                return false;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("Title" in inputs) {
                this.variables.titleIn = inputs.Title;
                if ("_titleInDataFetchStatus" in inputs) {
                    this.variables._titleInDataFetchStatus = inputs._titleInDataFetchStatus;
                }

            }

            if ("SentFromName" in inputs) {
                this.variables.sentFromNameIn = inputs.SentFromName;
                if ("_sentFromNameInDataFetchStatus" in inputs) {
                    this.variables._sentFromNameInDataFetchStatus = inputs._sentFromNameInDataFetchStatus;
                }

            }

            if ("MessageDateTime" in inputs) {
                this.variables.messageDateTimeIn = inputs.MessageDateTime;
                if ("_messageDateTimeInDataFetchStatus" in inputs) {
                    this.variables._messageDateTimeInDataFetchStatus = inputs._messageDateTimeInDataFetchStatus;
                }

            }

            if ("IsUrgent" in inputs) {
                this.variables.isUrgentIn = inputs.IsUrgent;
                if ("_isUrgentInDataFetchStatus" in inputs) {
                    this.variables._isUrgentInDataFetchStatus = inputs._isUrgentInDataFetchStatus;
                }

            }

            if ("IconURL" in inputs) {
                this.variables.iconURLIn = inputs.IconURL;
                if ("_iconURLInDataFetchStatus" in inputs) {
                    this.variables._iconURLInDataFetchStatus = inputs._iconURLInDataFetchStatus;
                }

            }

            if ("UserId" in inputs) {
                this.variables.userIdIn = inputs.UserId;
                if ("_userIdInDataFetchStatus" in inputs) {
                    this.variables._userIdInDataFetchStatus = inputs._userIdInDataFetchStatus;
                }

            }

            if ("MemberId" in inputs) {
                this.variables.memberIdIn = inputs.MemberId;
                if ("_memberIdInDataFetchStatus" in inputs) {
                    this.variables._memberIdInDataFetchStatus = inputs._memberIdInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "MyNotifications.MessageListItem");
});
define("Connect2_LegacyShared.MyNotifications.MessageListItem.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "UBTConnect_Utils.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.MyNotifications.MessageListItem.mvc$model", "Connect2_LegacyShared.MyNotifications.MessageListItem.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnect_Utils.controller$Cache_SignedImageURL_Get", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnect_Utils"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, UBTConnect_UtilsController, React, OSView, Connect2_LegacyShared_MyNotifications_MessageListItem_mvc_model, Connect2_LegacyShared_MyNotifications_MessageListItem_mvc_controller, Connect2_LegacySharedClientVariables, OSWidgets) {
    var OS = OutSystems.Internal;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;


    var View = (function(_super) {
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
        View.prototype.initialize = function() {
            _super.apply(this, arguments);
        };
        View.displayName = "MyNotifications.MessageListItem";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return Connect2_LegacyShared_MyNotifications_MessageListItem_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_LegacyShared_MyNotifications_MessageListItem_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function() {
                return "";
            },
            enumerable: true,
            configurable: true
        });
        View.prototype.internalRender = function() {
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "display-flex full-width align-items-center",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Message_List_Item_Cont"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "width15 display-flex justify-content-center margin-right5",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Message_List_Item_Image_Cont"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $if(((model.variables.iconURLIn) !== (OS.BuiltinFunctions.nullTextIdentifier())), false, this, function() {
                return [React.createElement(OSWidgets.Image, {
                    style: "notification-list-icon-badge",
                    type: /*External*/ 1,
                    url: model.variables.iconURLIn,
                    _idProps: {
                        service: idService,
                        uuid: "2"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    url_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._iconURLInDataFetchStatus)
                })];
            }, function() {
                return [$if(model.variables.isFetchingUserPhotoVar, false, this, function() {
                    return [React.createElement(OSWidgets.Image, {
                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.User_rectangle.png"),
                        style: "notification-list-icon-badge",
                        type: /*Static*/ 0,
                        _idProps: {
                            service: idService,
                            name: "Message_List_Item_Image_Fetching"
                        },
                        _widgetRecordProvider: widgetsRecordProvider
                    })];
                }, function() {
                    return [$if((model.variables.userPhotoURLVar === ""), false, this, function() {
                        return [React.createElement(OSWidgets.Image, {
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.User_rectangle.png"),
                            style: "notification-list-icon-badge",
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                name: "Message_List_Item_Image"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }, function() {
                        return [React.createElement(OSWidgets.Image, {
                            extendedProperties: {
                                "data-error-placeholder-src": OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.ubtlogo.png")
                            },
                            style: "notification-list-icon-badge",
                            type: /*External*/ 1,
                            url: model.variables.userPhotoURLVar,
                            _idProps: {
                                service: idService,
                                name: "Sending_User_Photo"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    })];
                })];
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "width75",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Message_List_Item_Text_Cont"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "bold text-ellipsis",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Message_List_Item_Title_Cont"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Expression, {
                value: model.variables.titleIn,
                _idProps: {
                    service: idService,
                    name: "Message_List_Item_Title"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleInDataFetchStatus)
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "font-size-0-75em text-neutral-6",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Message_List_Item_Info_Cont"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Expression, {
                value: model.getCachedValue(idService.getId("Message_List_Item_Info.Value"), function() {
                    return (((((((model.variables.sentFromNameIn) !== (OS.BuiltinFunctions.nullTextIdentifier()))) ? ((model.variables.sentFromNameIn + " · ")) : ("")) + OS.BuiltinFunctions.formatDateTime(model.variables.messageDateTimeIn, "ddd dd/MM/yyyy")) + " ") + OS.BuiltinFunctions.toLower(OS.BuiltinFunctions.formatDateTime(model.variables.messageDateTimeIn, "h:mm tt")));
                }, function() {
                    return model.variables.sentFromNameIn;
                }, function() {
                    return model.variables.messageDateTimeIn;
                }),
                _idProps: {
                    service: idService,
                    name: "Message_List_Item_Info"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._sentFromNameInDataFetchStatus, model.variables._messageDateTimeInDataFetchStatus)
            }))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                gridProperties: {
                    marginLeft: "0"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Message_List_Item_Icon_Cont"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $if(model.variables.isUrgentIn, false, this, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "margin-bottom: 5px; text-align: center;"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "12"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Icon, {
                    extendedProperties: {
                        style: "background-color: #fff; border-radius: 50px; border-style: solid; border-width: 2px; color: #fc0000; font-size: 12px; height: 20px; padding: 3px 0px 0px 0px; width: 20px;"
                    },
                    icon: "exclamation",
                    iconSize: /*FontSize*/ 0,
                    style: "icon alert-text fa-33",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "Message_List_Item_Icon"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }))];
            }, function() {
                return [];
            }))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("Connect2_LegacyShared.MyNotifications.MessageListItem.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "UBTConnect_Utils.controller", "Connect2_LegacyShared.languageResources", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.MyNotifications.MessageListItem.mvc$debugger", "UBTConnect_Utils.controller$Cache_SignedImageURL_Get", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnect_Utils"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, UBTConnect_UtilsController, Connect2_LegacySharedLanguageResources, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_MyNotifications_MessageListItem_mvc_Debugger) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
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
        Controller.prototype._onReady$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnReady");
            callContext = controller.callContext(callContext);
            var cache_SignedImageURL_GetVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.cache_SignedImageURL_GetVar = cache_SignedImageURL_GetVar;
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:6cpBib7W60CZburKTNyugg:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.vz+thkB9hEKibwZ+Xg8R2w/ClientActions.6cpBib7W60CZburKTNyugg:P2HfBiof38MQnTuenubAQA", "Connect2_LegacyShared", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:QPmS4plsmkS311NE+Lv0gw", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:T73_eqL7ak6+ycDdqnC_gw", callContext.id) && (((model.variables.iconURLIn === "") && ((model.variables.userIdIn) !== (OS.BuiltinFunctions.nullIdentifier()))) && (model.variables.userPhotoURLVar === "")))) {
                        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:5lhSdFdOLkSSh9ZmBD+__w", callContext.id);
                        // IsFetchingUserPhoto = True
                        model.variables.isFetchingUserPhotoVar = true;
                        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:7PA4kJMywU6nj3V+U_CCTQ", callContext.id);
                        // Execute Action: Cache_SignedImageURL_Get
                        model.flush();
                        return UBTConnect_UtilsController.default.cache_SignedImageURL_Get$Action(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.textToInteger(model.variables.memberIdIn)), Connect2_LegacySharedModel.staticEntities.connect_Entity.member, Connect2_LegacySharedModel.staticEntities.imageSize.small, callContext).then(function(value) {
                            cache_SignedImageURL_GetVar.value = value;
                        }).then(function() {
                            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:rW+LHSnq+0KDRFbVc8jcgQ", callContext.id);
                            // UserPhotoURL = Cache_SignedImageURL_Get.URL
                            model.variables.userPhotoURLVar = cache_SignedImageURL_GetVar.value.uRLOut;
                            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:U7f1_Q1nTUmUUh5JDwBe2A", callContext.id);
                            // IsFetchingUserPhoto = False
                            model.variables.isFetchingUserPhotoVar = false;
                            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Jez_jP7oK0Kaq0Hiw1iwSA", callContext.id);
                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Jez_jP7oK0Kaq0Hiw1iwSA", callContext.id);
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:6cpBib7W60CZburKTNyugg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:6cpBib7W60CZburKTNyugg", callContext.id);
                throw ex;

            });
        };

        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:iKTaVBbqsE2TV8kygBm0tA:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA:JDVFsscJB_uWX_OdVOax1A", "Connect2_LegacyShared", "MyNotifications", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:vz+thkB9hEKibwZ+Xg8R2w:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.vz+thkB9hEKibwZ+Xg8R2w:GBkE3zBwFtdpo10uy8rwiA", "Connect2_LegacyShared", "MessageListItem", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:vz+thkB9hEKibwZ+Xg8R2w", callContext.id);
            OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:iKTaVBbqsE2TV8kygBm0tA", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "MyNotifications/MessageListItem On Ready");
                return controller.onReady$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = null;
        Controller.prototype.handleError = function(ex) {
            return controller.handleError(ex);
        };
        Controller.checkPermissions = function() {};
        Controller.prototype.getDefaultTimeout = function() {
            return Connect2_LegacySharedController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, Connect2_LegacySharedLanguageResources);
});

define("Connect2_LegacyShared.MyNotifications.MessageListItem.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "7PA4kJMywU6nj3V+U_CCTQ": {
            getter: function(varBag, idService) {
                return varBag.cache_SignedImageURL_GetVar.value;
            }
        },
        "wZXZtx_bdECByHxJVsjg6g": {
            getter: function(varBag, idService) {
                return varBag.model.variables.userPhotoURLVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "uBq_fFq8cU6YYSUh667nFg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isFetchingUserPhotoVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "cSiKWS0bBkK_0OcjPn1g3A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.titleIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "FeKXhhJYnUGCrzFyvAjtlg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.sentFromNameIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "EDNzRj_r_kmV27Vy7Ci25g": {
            getter: function(varBag, idService) {
                return varBag.model.variables.messageDateTimeIn;
            },
            dataType: OS.DataTypes.DataTypes.DateTime
        },
        "mPi6l3BTREGxHK3FBPETEg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isUrgentIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "3nMsxHA+20Gjbj3xOHZHbw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.iconURLIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "NuEeVLJ_Gkahtbmn8vISIA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.userIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "Fa9yVDCqmkqD__VmaESoUA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.memberIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "gqfLdynlUkCs+wlSBwBEYg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Message_List_Item_Cont"));
                })(varBag.model, idService);
            }
        },
        "xsvrfdcGx0GpOx6khxnNBA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Message_List_Item_Image_Cont"));
                })(varBag.model, idService);
            }
        },
        "862GS_vpAEulSfgzlgpZMg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsIconURLDefined"));
                })(varBag.model, idService);
            }
        },
        "pb_jPo0FVEOF8+tgMkL+dg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("FetchingPhoto"));
                })(varBag.model, idService);
            }
        },
        "+8MwiWW+REqNnPTLJ9IbPQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Message_List_Item_Image_Fetching"));
                })(varBag.model, idService);
            }
        },
        "uGwkboZ7ikSHzZW1u5H7QQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HasFetchedAndNotFound"));
                })(varBag.model, idService);
            }
        },
        "cUWnFCmrikmYjFVvKgBGuQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Message_List_Item_Image"));
                })(varBag.model, idService);
            }
        },
        "o9R3km8iiEOlcKqRg7JL9Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Sending_User_Photo"));
                })(varBag.model, idService);
            }
        },
        "ztVZtSGUHEi0RIbwzwT7Sw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Message_List_Item_Text_Cont"));
                })(varBag.model, idService);
            }
        },
        "j5+1sbAvCUyRzqdFadyNjg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Message_List_Item_Title_Cont"));
                })(varBag.model, idService);
            }
        },
        "e0CmR9lzpUSOnMKFpOoRCA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Message_List_Item_Title"));
                })(varBag.model, idService);
            }
        },
        "XFhERbl+6kydQJU2UvA6+w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Message_List_Item_Info_Cont"));
                })(varBag.model, idService);
            }
        },
        "cnD4b_+0YE6Ll9Qn0xH6Wg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Message_List_Item_Info"));
                })(varBag.model, idService);
            }
        },
        "mNZ8QXzRS0a+NKlp_y4wRA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Message_List_Item_Icon_Cont"));
                })(varBag.model, idService);
            }
        },
        "NaiJNfF9Jkes5vu_UobZ6g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("IsUrgentMessage"));
                })(varBag.model, idService);
            }
        },
        "gq2aYZKdikGsHI8Lz4ekXg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Message_List_Item_Icon"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});