define("Connect2_LegacyShared.MyNotifications.MessageImage.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.model", "UBTConnect_Utils.controller", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "Connect2_LegacyShared.MyNotifications.AvatarImage.mvc$model", "UBTConnectLibrary.controller$FormatClasses", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.controller$GetClasses_AvatarSize", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnect_Utils.controller$Cache_SignedImageURL_Get", "Connect2_LegacyShared.referencesHealth$UBTConnect_Utils"], function(OutSystems, Connect2_LegacySharedModel, UBTConnectLibraryController, UBTConnectLibraryModel, UBTConnect_UtilsController, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, Connect2_LegacyShared_MyNotifications_AvatarImage_mvcModel) {
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
                this.attr("MainContainerClass", "mainContainerClassVar", "MainContainerClass", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "ubt-avatar-image";
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
                }, false),
                this.attr("In_SizeId", "in_SizeIdIn", "In_SizeId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_SizeIdInDataFetchStatus", "_in_SizeIdInDataFetchStatus", "_in_SizeIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_BorderRadius", "in_BorderRadiusIn", "In_BorderRadius", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return Connect2_LegacySharedModel.staticEntities.uBT_Shape.circle;
                }, false),
                this.attr("_in_BorderRadiusInDataFetchStatus", "_in_BorderRadiusInDataFetchStatus", "_in_BorderRadiusInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
        Model._hasValidationWidgetsValue = undefined;
        Object.defineProperty(Model, "hasValidationWidgets", {
            enumerable: true,
            configurable: true,
            get: function() {
                if ((Model._hasValidationWidgetsValue === undefined)) {
                    Model._hasValidationWidgetsValue = (UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets || Connect2_LegacyShared_MyNotifications_AvatarImage_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
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

            if ("In_SizeId" in inputs) {
                this.variables.in_SizeIdIn = inputs.In_SizeId;
                if ("_in_SizeIdInDataFetchStatus" in inputs) {
                    this.variables._in_SizeIdInDataFetchStatus = inputs._in_SizeIdInDataFetchStatus;
                }

            }

            if ("In_BorderRadius" in inputs) {
                this.variables.in_BorderRadiusIn = inputs.In_BorderRadius;
                if ("_in_BorderRadiusInDataFetchStatus" in inputs) {
                    this.variables._in_BorderRadiusInDataFetchStatus = inputs._in_BorderRadiusInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "MyNotifications.MessageImage");
});
define("Connect2_LegacyShared.MyNotifications.MessageImage.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "UBTConnectLibrary.controller", "UBTConnectLibrary.model", "UBTConnect_Utils.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.MyNotifications.MessageImage.mvc$model", "Connect2_LegacyShared.MyNotifications.MessageImage.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "Connect2_LegacyShared.MyNotifications.AvatarImage.mvc$view", "UBTConnectLibrary.controller$FormatClasses", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.controller$GetClasses_AvatarSize", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnect_Utils.controller$Cache_SignedImageURL_Get", "Connect2_LegacyShared.referencesHealth$UBTConnect_Utils"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, UBTConnectLibraryController, UBTConnectLibraryModel, UBTConnect_UtilsController, React, OSView, Connect2_LegacyShared_MyNotifications_MessageImage_mvc_model, Connect2_LegacyShared_MyNotifications_MessageImage_mvc_controller, Connect2_LegacySharedClientVariables, OSWidgets, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, Connect2_LegacyShared_MyNotifications_AvatarImage_mvc_view) {
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
        View.displayName = "MyNotifications.MessageImage";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, Connect2_LegacyShared_MyNotifications_AvatarImage_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return Connect2_LegacyShared_MyNotifications_MessageImage_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_LegacyShared_MyNotifications_MessageImage_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(model.variables.isFetchingUserPhotoVar, false, this, function() {
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
                    return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                        inputs: {
                            ExtendedClasses: model.getCachedValue(idService.getId("PMuS1AduDkWCVu+Q_GK6Xg.ExtendedClasses"), function() {
                                return OutSystemsDebugger.handleFunctionCall(function() {
                                    return UBTConnectLibraryController.default.formatClasses$Action(OutSystemsDebugger.handleFunctionCall(function() {
                                        return UBTConnectLibraryController.default.formatClasses$Action(model.variables.mainContainerClassVar, "inline-block", callContext).classesOutOut;
                                    }, OS.DataTypes.DataTypes.Text, callContext.id), OutSystemsDebugger.handleFunctionCall(function() {
                                        return UBTConnectLibraryController.default.getClasses_AvatarSize$Action(model.variables.in_SizeIdIn, callContext).classesOutOut;
                                    }, OS.DataTypes.DataTypes.Text, callContext.id), callContext).classesOutOut;
                                }, OS.DataTypes.DataTypes.Text, callContext.id);
                            }, function() {
                                return model.variables.mainContainerClassVar;
                            }, function() {
                                return model.variables.in_SizeIdIn;
                            }),
                            _extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SizeIdInDataFetchStatus),
                            Options: model.getCachedValue(idService.getId("PMuS1AduDkWCVu+Q_GK6Xg.Options"), function() {
                                return function() {
                                    var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                    rec.borderOptionsAttr = function() {
                                        var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                        rec.colorAttr = Connect2_LegacySharedModel.staticEntities.uBT_Color.neutral5;
                                        rec.sizeAttr = function() {
                                            var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                            rec.generalSizeIdAttr = Connect2_LegacySharedModel.staticEntities.uBT_Size.small;
                                            return rec;
                                        }();
                                        rec.radiusAttr = function() {
                                            var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
                                            rec.generalSizeIdAttr = model.variables.in_BorderRadiusIn;
                                            return rec;
                                        }();
                                        return rec;
                                    }();
                                    rec.isSkeletonElementAttr = true;
                                    return rec;
                                }();
                            }, function() {
                                return model.variables.in_BorderRadiusIn;
                            }),
                            _optionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_BorderRadiusInDataFetchStatus)
                        },
                        events: {
                            _handleError: function(ex) {
                                controller.handleError(ex);
                            }
                        },
                        _validationProps: {
                            validationService: validationService
                        },
                        _idProps: {
                            service: idService,
                            uuid: "1",
                            alias: "1"
                        },
                        _widgetRecordProvider: widgetsRecordProvider,
                        placeholders: {
                            content: new PlaceholderContent(function() {
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
                            })
                        },
                        _dependencies: []
                    })];
                }, function() {
                    return [React.createElement(Connect2_LegacyShared_MyNotifications_AvatarImage_mvc_view, {
                        inputs: {
                            In_AvatarImage: model.getCachedValue(idService.getId("TziICoS9s0iQbXhhDLR4dQ.In_AvatarImage"), function() {
                                return function() {
                                    var rec = new UBTConnectLibraryModel.AvatarImageRec();
                                    rec.uRLAttr = model.variables.userPhotoURLVar;
                                    return rec;
                                }();
                            }, function() {
                                return model.variables.userPhotoURLVar;
                            }),
                            In_SizeId: Connect2_LegacySharedModel.staticEntities.uBT_AvatarSize.base_52
                        },
                        events: {
                            _handleError: function(ex) {
                                controller.handleError(ex);
                            }
                        },
                        _validationProps: {
                            validationService: validationService
                        },
                        _idProps: {
                            service: idService,
                            uuid: "3",
                            alias: "2"
                        },
                        _widgetRecordProvider: widgetsRecordProvider,
                        _dependencies: []
                    })];
                })];
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("Connect2_LegacyShared.MyNotifications.MessageImage.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "UBTConnectLibrary.controller", "UBTConnectLibrary.model", "UBTConnect_Utils.controller", "Connect2_LegacyShared.languageResources", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.MyNotifications.MessageImage.mvc$debugger", "UBTConnectLibrary.controller$FormatClasses", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.controller$GetClasses_AvatarSize", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnect_Utils.controller$Cache_SignedImageURL_Get", "Connect2_LegacyShared.referencesHealth$UBTConnect_Utils"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, UBTConnectLibraryController, UBTConnectLibraryModel, UBTConnect_UtilsController, Connect2_LegacySharedLanguageResources, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_MyNotifications_MessageImage_mvc_Debugger) {
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
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:5thutF55Rk6EtbHr2cAlUg:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.wpNaxUZn5UqadQ8dPEkSQw/ClientActions.5thutF55Rk6EtbHr2cAlUg:8ZoWFP2Wq_3wpo+kl76c0w", "Connect2_LegacyShared", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:KsDlVE2wXE6gYufvKHHwlg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Gtx9+sus0UeX3AdoDwH2Cg", callContext.id) && (((model.variables.iconURLIn === "") && ((model.variables.userIdIn) !== (OS.BuiltinFunctions.nullIdentifier()))) && (model.variables.userPhotoURLVar === "")))) {
                        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:6tgPEusYJ0SCqdS2B+Nxhw", callContext.id);
                        // IsFetchingUserPhoto = True
                        model.variables.isFetchingUserPhotoVar = true;
                        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:c3245stRXUG5swft4BOuVw", callContext.id);
                        // Execute Action: Cache_SignedImageURL_Get
                        model.flush();
                        return UBTConnect_UtilsController.default.cache_SignedImageURL_Get$Action(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.textToInteger(model.variables.memberIdIn)), Connect2_LegacySharedModel.staticEntities.connect_Entity.member, Connect2_LegacySharedModel.staticEntities.imageSize.small, callContext).then(function(value) {
                            cache_SignedImageURL_GetVar.value = value;
                        }).then(function() {
                            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:i7MQjWiFYkWPGB_Mt_mUzg", callContext.id);
                            // UserPhotoURL = Cache_SignedImageURL_Get.URL
                            model.variables.userPhotoURLVar = cache_SignedImageURL_GetVar.value.uRLOut;
                            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:TD4w7LjTXECB29OTDIbwPA", callContext.id);
                            // IsFetchingUserPhoto = False
                            model.variables.isFetchingUserPhotoVar = false;
                            OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:gtH_ayLKeESPFdHhAr+hIg", callContext.id);
                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:gtH_ayLKeESPFdHhAr+hIg", callContext.id);
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:5thutF55Rk6EtbHr2cAlUg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:5thutF55Rk6EtbHr2cAlUg", callContext.id);
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
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:iKTaVBbqsE2TV8kygBm0tA:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA:onAHT9qiHrNmY0cVEPYIJg", "Connect2_LegacyShared", "MyNotifications", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:wpNaxUZn5UqadQ8dPEkSQw:/NRWebFlows.iKTaVBbqsE2TV8kygBm0tA/NodesShownInESpaceTree.wpNaxUZn5UqadQ8dPEkSQw:ggZRq9uHzPO42ppVZ1hwTg", "Connect2_LegacyShared", "MessageImage", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:wpNaxUZn5UqadQ8dPEkSQw", callContext.id);
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "MyNotifications/MessageImage On Ready");
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

define("Connect2_LegacyShared.MyNotifications.MessageImage.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "c3245stRXUG5swft4BOuVw": {
            getter: function(varBag, idService) {
                return varBag.cache_SignedImageURL_GetVar.value;
            }
        },
        "rsIw8t0IL0aA8t5X79Qg0g": {
            getter: function(varBag, idService) {
                return varBag.model.variables.userPhotoURLVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "zIqBj5Kb_EW53+5_Qkjvpg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isFetchingUserPhotoVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "hx4PnezB+kGQPS2bOu9cBA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.mainContainerClassVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "6CKlgkpikEOlFQtM_Ys2ig": {
            getter: function(varBag, idService) {
                return varBag.model.variables.iconURLIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "PQhwfKiYJUusZoVwBAKFXA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.userIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "alLHvK0Dn0e0idtldZhnig": {
            getter: function(varBag, idService) {
                return varBag.model.variables.memberIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "Mi7ch2dmfkq+yHkQYZqN_A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_SizeIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "vLMsLn_1Qki501G5nXoONg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_BorderRadiusIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "_Bm8947uYk618+Ja2JTpEw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("FetchingPhoto"));
                })(varBag.model, idService);
            }
        },
        "KqHSQswmt0KBTKAbYvm20A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Message_List_Item_Image_Fetching"));
                })(varBag.model, idService);
            }
        },
        "gDJG7nsmOkyl0Gy4JMtqEA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("HasFetchedAndNotFound"));
                })(varBag.model, idService);
            }
        },
        "TTRMUrmv8kGQ7UnND3Pnpg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "uEnppEc+VEeAN3Q8OdCK0g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Message_List_Item_Image"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});