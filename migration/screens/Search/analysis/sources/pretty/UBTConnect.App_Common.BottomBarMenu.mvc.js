define("UBTConnect.App_Common.BottomBarMenu.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect_Utils.model", "UBTConnectLibrary.model", "UBTConnect_Utils.controller", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTConnect.controller", "UBTConnectLibrary.controller", "UBTConnect.App_Common.BottomBarContent.mvc$model", "OutSystemsUI_2_23.Navigation.BottomBarItem.mvc$model", "UBTConnect.App_Common_Blocks.App_IconBadge.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnect_Utils.model$BottomBar_ItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$BottomBar_ItemList", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnect_Utils.controller$BottomBar_GetList", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$SetBottomBarActiveElement", "UBTConnect.controller$Directory_Updates_RefreshBottomBarCount", "UBTConnectLibrary.controller$BottomBarSlider_ForceRefresh", "UBTConnect_Utils.controller$Connect_LaunchDarkly_PermissionCheck", "UBTConnect_Utils.controller$GetHasNewBookmarks", "UBTConnect.controller$ScrollTop", "UBTConnect_Utils.controller$GetHasC1DirectoryView"], function(OutSystems, UBTConnectModel, UBTConnect_UtilsModel, UBTConnectLibraryModel, UBTConnect_UtilsController, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTConnectController, UBTConnectLibraryController, UBTConnect_App_Common_BottomBarContent_mvcModel, OutSystemsUI_2_23_Navigation_BottomBarItem_mvcModel, UBTConnect_App_Common_Blocks_App_IconBadge_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("LocalBottomBar_Items", "localBottomBar_ItemsVar", "LocalBottomBar_Items", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.BottomBar_ItemList());
                }, false, UBTConnectModel.BottomBar_ItemList),
                this.attr("Retried", "retriedVar", "Retried", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("ActiveItem", "activeItemIn", "ActiveItem", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_activeItemInDataFetchStatus", "_activeItemInDataFetchStatus", "_activeItemInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("useMapsItems", "useMapsItemsIn", "useMapsItems", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_useMapsItemsInDataFetchStatus", "_useMapsItemsInDataFetchStatus", "_useMapsItemsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("isHouseholder", "isHouseholderIn", "isHouseholder", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_isHouseholderInDataFetchStatus", "_isHouseholderInDataFetchStatus", "_isHouseholderInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("isRootPage", "isRootPageIn", "isRootPage", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_isRootPageInDataFetchStatus", "_isRootPageInDataFetchStatus", "_isRootPageInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = ((((UBTConnect_App_Common_BottomBarContent_mvcModel.hasValidationWidgets || OutSystemsUI_2_23_Navigation_BottomBarItem_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_Blocks_App_IconBadge_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("ActiveItem" in inputs) {
                this.variables.activeItemIn = inputs.ActiveItem;
                if ("_activeItemInDataFetchStatus" in inputs) {
                    this.variables._activeItemInDataFetchStatus = inputs._activeItemInDataFetchStatus;
                }

            }

            if ("useMapsItems" in inputs) {
                this.variables.useMapsItemsIn = inputs.useMapsItems;
                if ("_useMapsItemsInDataFetchStatus" in inputs) {
                    this.variables._useMapsItemsInDataFetchStatus = inputs._useMapsItemsInDataFetchStatus;
                }

            }

            if ("isHouseholder" in inputs) {
                this.variables.isHouseholderIn = inputs.isHouseholder;
                if ("_isHouseholderInDataFetchStatus" in inputs) {
                    this.variables._isHouseholderInDataFetchStatus = inputs._isHouseholderInDataFetchStatus;
                }

            }

            if ("isRootPage" in inputs) {
                this.variables.isRootPageIn = inputs.isRootPage;
                if ("_isRootPageInDataFetchStatus" in inputs) {
                    this.variables._isRootPageInDataFetchStatus = inputs._isRootPageInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "App_Common.BottomBarMenu");
});
define("UBTConnect.App_Common.BottomBarMenu.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.model", "UBTConnectLibrary.model", "UBTConnect_Utils.controller", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Common.BottomBarMenu.mvc$model", "UBTConnect.App_Common.BottomBarMenu.mvc$controller", "UBTConnect.clientVariables", "UBTConnect.App_Common.BottomBarContent.mvc$view", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.Navigation.BottomBarItem.mvc$view", "UBTConnect.App_Common_Blocks.App_IconBadge.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnect_Utils.model$BottomBar_ItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$BottomBar_ItemList", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnect_Utils.controller$BottomBar_GetList", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$SetBottomBarActiveElement", "UBTConnect.controller$Directory_Updates_RefreshBottomBarCount", "UBTConnectLibrary.controller$BottomBarSlider_ForceRefresh", "UBTConnect_Utils.controller$Connect_LaunchDarkly_PermissionCheck", "UBTConnect_Utils.controller$GetHasNewBookmarks", "UBTConnect.controller$ScrollTop", "UBTConnect_Utils.controller$GetHasC1DirectoryView"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsModel, UBTConnectLibraryModel, UBTConnect_UtilsController, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTConnectLibraryController, React, OSView, UBTConnect_App_Common_BottomBarMenu_mvc_model, UBTConnect_App_Common_BottomBarMenu_mvc_controller, UBTConnectClientVariables, UBTConnect_App_Common_BottomBarContent_mvc_view, OSWidgets, OutSystemsUI_2_23_Navigation_BottomBarItem_mvc_view, UBTConnect_App_Common_Blocks_App_IconBadge_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view) {
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
        View.displayName = "App_Common.BottomBarMenu";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_App_Common_BottomBarContent_mvc_view, OutSystemsUI_2_23_Navigation_BottomBarItem_mvc_view, UBTConnect_App_Common_Blocks_App_IconBadge_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_App_Common_BottomBarMenu_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_App_Common_BottomBarMenu_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnect_App_Common_BottomBarContent_mvc_view, {
                inputs: {},
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
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    placeholder_BottomBarItems: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.List, {
                            animateItems: true,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mode: /*Custom*/ 1,
                            source: model.variables.localBottomBar_ItemsVar,
                            style: "list list-group",
                            tag: "div",
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new IteratorPlaceholderContent(function(idService, callContext) {
                                    return [React.createElement(OSWidgets.Link, {
                                        enabled: true,
                                        onClick: function() {
                                            return Promise.resolve().then(function() {
                                                var eventHandlerContext = callContext.clone();
                                                return OS.Flow.tryFinally(function() {
                                                    var varBag = {};
                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Common/BottomBarMenu/Link OnClick");
                                                    return controller.event_BottomBar_Clicked$Action(model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).idAttr, controller.callContext(eventHandlerContext));
                                                }, function() {
                                                    controller.popDebuggerContext(eventHandlerContext);
                                                });
                                            });;
                                        },
                                        style: model.getCachedValue(idService.getId("VuBIpN20pUWN9a+zC6E5CA.Style"), function() {
                                            return (((model.variables.activeItemIn === model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).idAttr)) ? ("active") : (""));
                                        }, function() {
                                            return model.variables.activeItemIn;
                                        }, function() {
                                            return model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).idAttr;
                                        }),
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "2"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._activeItemInDataFetchStatus),
                                        _dependencies: [asPrimitiveValue(model.variables._activeItemInDataFetchStatus), asPrimitiveValue(model.variables.activeItemIn), asPrimitiveValue(UBTConnectClientVariables.getDirectory_Updates_UnreadCount()), asPrimitiveValue(model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).labelAttr), asPrimitiveValue(model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).uBTIconAttr), asPrimitiveValue(model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).uBTIconActiveAttr), asPrimitiveValue(model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).idAttr)]
                                    }, React.createElement(OutSystemsUI_2_23_Navigation_BottomBarItem_mvc_view, {
                                        inputs: {},
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
                                        placeholders: {
                                            icon: new PlaceholderContent(function() {
                                                return [$if((model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).idAttr === UBTConnectModel.staticEntities.connect_BottomBar_Items.updates), false, this, function() {
                                                    return [React.createElement(UBTConnect_App_Common_Blocks_App_IconBadge_mvc_view, {
                                                        inputs: {
                                                            isLoading: false,
                                                            BadgeNumber: OS.BuiltinFunctions.integerToLongInteger(UBTConnectClientVariables.getDirectory_Updates_UnreadCount()),
                                                            MaxNotifications: 9,
                                                            IconId: model.getCachedValue(idService.getId("leGl_MnNWEe8BWf1J8ampg.IconId"), function() {
                                                                return (((model.variables.activeItemIn === model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).idAttr)) ? (model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).uBTIconActiveAttr) : (model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).uBTIconAttr));
                                                            }, function() {
                                                                return model.variables.activeItemIn;
                                                            }, function() {
                                                                return model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).idAttr;
                                                            }, function() {
                                                                return model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).uBTIconActiveAttr;
                                                            }, function() {
                                                                return model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).uBTIconAttr;
                                                            }),
                                                            _iconIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._activeItemInDataFetchStatus),
                                                            IconColor: model.getCachedValue(idService.getId("leGl_MnNWEe8BWf1J8ampg.IconColor"), function() {
                                                                return (((model.variables.activeItemIn === model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).idAttr)) ? (UBTConnectModel.staticEntities.uBT_Color.primary) : (UBTConnectModel.staticEntities.uBT_Color.neutral6));
                                                            }, function() {
                                                                return model.variables.activeItemIn;
                                                            }, function() {
                                                                return model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).idAttr;
                                                            }),
                                                            _iconColorInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._activeItemInDataFetchStatus)
                                                        },
                                                        events: {
                                                            _handleError: function(ex) {
                                                                controller.handleError(ex);
                                                            },
                                                            onClick$Action: function() {
                                                                return Promise.resolve().then(function() {
                                                                    var eventHandlerContext = callContext.clone();
                                                                    return OS.Flow.tryFinally(function() {
                                                                        var varBag = {};
                                                                        controller.pushDebuggerContext(eventHandlerContext);

                                                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Common_Blocks/App_IconBadge OnClick");
                                                                        return controller.event_BottomBar_Clicked$Action(model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).idAttr, controller.callContext(eventHandlerContext));
                                                                    }, function() {
                                                                        controller.popDebuggerContext(eventHandlerContext);
                                                                    });
                                                                });;
                                                            }
                                                        },
                                                        _validationProps: {
                                                            validationService: validationService
                                                        },
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "4",
                                                            alias: "3"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        _dependencies: []
                                                    })];
                                                }, function() {
                                                    return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                                        inputs: {
                                                            In_IconId: model.getCachedValue(idService.getId("omi4vxQA7kSfxkBlUzaebA.In_IconId"), function() {
                                                                return (((model.variables.activeItemIn === model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).idAttr)) ? (model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).uBTIconActiveAttr) : (model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).uBTIconAttr));
                                                            }, function() {
                                                                return model.variables.activeItemIn;
                                                            }, function() {
                                                                return model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).idAttr;
                                                            }, function() {
                                                                return model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).uBTIconActiveAttr;
                                                            }, function() {
                                                                return model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).uBTIconAttr;
                                                            }),
                                                            _in_IconIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._activeItemInDataFetchStatus),
                                                            In_ColorId: model.getCachedValue(idService.getId("omi4vxQA7kSfxkBlUzaebA.In_ColorId"), function() {
                                                                return (((model.variables.activeItemIn === model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).idAttr)) ? (UBTConnectModel.staticEntities.uBT_Color.primary) : (UBTConnectModel.staticEntities.uBT_Color.neutral6));
                                                            }, function() {
                                                                return model.variables.activeItemIn;
                                                            }, function() {
                                                                return model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).idAttr;
                                                            }),
                                                            _in_ColorIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._activeItemInDataFetchStatus),
                                                            In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.base_24
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
                                                            uuid: "5",
                                                            alias: "4"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        _dependencies: []
                                                    })];
                                                })];
                                            }),
                                            text: new PlaceholderContent(function() {
                                                return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                                    inputs: {
                                                        In_TextOptions: model.getCachedValue(idService.getId("nJ8MhZxFNkm6bypJtY5DZA.In_TextOptions"), function() {
                                                            return function() {
                                                                var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                                rec.colorAttr = (((model.variables.activeItemIn === model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).idAttr)) ? (UBTConnectModel.staticEntities.uBT_Color.primary) : (UBTConnectModel.staticEntities.uBT_Color.neutral6));
                                                                rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.extraSmall;
                                                                return rec;
                                                            }();
                                                        }, function() {
                                                            return model.variables.activeItemIn;
                                                        }, function() {
                                                            return model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).idAttr;
                                                        }),
                                                        _in_TextOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._activeItemInDataFetchStatus),
                                                        In_Text: model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).labelAttr
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
                                                        uuid: "6",
                                                        alias: "5"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    _dependencies: []
                                                })];
                                            })
                                        },
                                        _dependencies: [asPrimitiveValue(model.variables._activeItemInDataFetchStatus), asPrimitiveValue(model.variables.activeItemIn), asPrimitiveValue(UBTConnectClientVariables.getDirectory_Updates_UnreadCount()), asPrimitiveValue(model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).labelAttr), asPrimitiveValue(model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).uBTIconAttr), asPrimitiveValue(model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).uBTIconActiveAttr), asPrimitiveValue(model.variables.localBottomBar_ItemsVar.getCurrent(callContext.iterationContext).idAttr)]
                                    }))];
                                }, callContext, idService, "1")
                            },
                            _dependencies: [asPrimitiveValue(UBTConnectClientVariables.getDirectory_Updates_UnreadCount()), asPrimitiveValue(model.variables._activeItemInDataFetchStatus), asPrimitiveValue(model.variables.activeItemIn)]
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(UBTConnectClientVariables.getDirectory_Updates_UnreadCount()), asPrimitiveValue(model.variables._activeItemInDataFetchStatus), asPrimitiveValue(model.variables.activeItemIn), asPrimitiveValue(model.variables.localBottomBar_ItemsVar)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect.App_Common.BottomBarMenu.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.model", "UBTConnectLibrary.model", "UBTConnect_Utils.controller", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTConnectLibrary.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_Common.BottomBarMenu.mvc$debugger", "UBTConnect.App_Common.BottomBarMenu.mvc$controller.OnParametersChanged.Delayed_BottomBarSlider_ForceRefreshJS", "UBTConnect_Utils.model$BottomBar_ItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$BottomBar_ItemList", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnect_Utils.controller$BottomBar_GetList", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$SetBottomBarActiveElement", "UBTConnect.controller$Directory_Updates_RefreshBottomBarCount", "UBTConnectLibrary.controller$BottomBarSlider_ForceRefresh", "UBTConnect_Utils.controller$Connect_LaunchDarkly_PermissionCheck", "UBTConnect_Utils.controller$GetHasNewBookmarks", "UBTConnect.controller$ScrollTop", "UBTConnect_Utils.controller$GetHasC1DirectoryView"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsModel, UBTConnectLibraryModel, UBTConnect_UtilsController, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTConnectLibraryController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_Common_BottomBarMenu_mvc_Debugger, UBTConnect_App_Common_BottomBarMenu_mvc_controller_OnParametersChanged_Delayed_BottomBarSlider_ForceRefreshJS) {
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
        Controller.prototype._onInitialize$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnInitialize");
            callContext = controller.callContext(callContext);
            var bottomBar_GetListVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.bottomBar_GetListVar = bottomBar_GetListVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:8aA4clUQOEO6xKWLEqEBcg:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.dSzNMjNIS0mNfvatsj3j0A/ClientActions.8aA4clUQOEO6xKWLEqEBcg:02YjGRPjCSpAXLkkCemIEQ", "UBTConnect", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:V7Kk42fK_katmSc5zAfqyg", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UbI2b3_2Bk+YH0OEOBrg1g", callContext.id);
                // Execute Action: BottomBar_GetList
                bottomBar_GetListVar.value = UBTConnect_UtilsController.default.bottomBar_GetList$Action(model.variables.useMapsItemsIn, model.variables.isHouseholderIn, callContext);

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pgxjErvbxkKIymCxnDBLJQ", callContext.id);
                // LocalBottomBar_Items = BottomBar_GetList.BottomBar_ItemsList
                model.variables.localBottomBar_ItemsVar = bottomBar_GetListVar.value.bottomBar_ItemsListOut;
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:67letC6gUUe8rRZ494wq0g", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:8aA4clUQOEO6xKWLEqEBcg", callContext.id);
            }

        };
        Controller.prototype._onReady$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnReady");
            callContext = controller.callContext(callContext);
            var setBottomBarActiveElementVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.setBottomBarActiveElementVar = setBottomBarActiveElementVar;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:hcmDvX9rMEivW7nC+dRQZg:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.dSzNMjNIS0mNfvatsj3j0A/ClientActions.hcmDvX9rMEivW7nC+dRQZg:o+ch4B0Z_LAbyuDDvjdxYg", "UBTConnect", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pv9S9iYb6EmpKH1mPLQCJQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pg+rlyUnhkKDcxoxL0__Iw", callContext.id);
                // Execute Action: Directory_Updates_RefreshBottomBarCount
                model.flush();
                return UBTConnectController.default.directory_Updates_RefreshBottomBarCount$Action(false, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:awZKEZVzKkGiiRC3DK0lpA", callContext.id);
                    // Execute Action: SetBottomBarActiveElement
                    setBottomBarActiveElementVar.value = OutSystemsUI_2_23Controller.default.setBottomBarActiveElement$Action(-1, callContext);

                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bJ3mOy806UmCxhFWu+oqVQ", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:hcmDvX9rMEivW7nC+dRQZg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:hcmDvX9rMEivW7nC+dRQZg", callContext.id);
                throw ex;

            });
        };
        Controller.prototype._onParametersChanged$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnParametersChanged");
            callContext = controller.callContext(callContext);
            var listIndexOf_ActiveIconVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.listIndexOf_ActiveIconVar = listIndexOf_ActiveIconVar;
            try {
                OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:6Kasx83930aUe9_1E+pooA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.dSzNMjNIS0mNfvatsj3j0A/ClientActions.6Kasx83930aUe9_1E+pooA:BEcsVXGrb3kA9WN6AIKZ6Q", "UBTConnect", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7h3XbFoSu0aUKSNZRoDmQw", callContext.id);
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2_YTzC98sUeFb5xAslgN+A", callContext.id);
                // Execute Action: ListIndexOf_ActiveIcon
                listIndexOf_ActiveIconVar.value = OS.SystemActions.listIndexOf(model.variables.localBottomBar_ItemsVar, function(p) {
                    return (p.idAttr === model.variables.activeItemIn);
                }, callContext);

                if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xp8DlimJg0mP5QNeswHIlQ", callContext.id) && (model.variables.isHouseholderIn && !(model.variables.retriedVar)))) {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Rph3ERK0I0KOmOdtNwRDMg", callContext.id);
                    // Retried = True
                    model.variables.retriedVar = true;
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:m3N7rbxickOen7ghoUdPSA", callContext.id);
                    // Execute Action: OnInitialize
                    controller._onInitialize$Action(callContext);
                } else {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:t4YCAfYV80Cmdojty_CNoA", callContext.id);
                    // Execute Action: BottomBarSlider_ForceRefresh
                    UBTConnectLibraryController.default.bottomBarSlider_ForceRefresh$Action(callContext);
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2aszVi9pb0CfCSxGVoHXLg", callContext.id) && !(model.variables.useMapsItemsIn))) {
                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Rh7jYLtGL0GbA+W2EHb1Gg", callContext.id);
                        return;

                    }

                }

                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kO3ule_W4Eu0zdoyxiD+zA", callContext.id);
                controller.safeExecuteJSNode(UBTConnect_App_Common_BottomBarMenu_mvc_controller_OnParametersChanged_Delayed_BottomBarSlider_ForceRefreshJS, "Delayed_BottomBarSlider_ForceRefresh", "OnParametersChanged", {
                    ActiveItemIndex: OS.DataConversion.JSNodeParamConverter.to(listIndexOf_ActiveIconVar.value.positionOut, OS.DataTypes.DataTypes.Integer)
                }, function($parameters) {}, {
                    BottomBarSlider_ForceRefresh: UBTConnectLibraryController.default.getClientActionProxies(controller).bottomBarSlider_ForceRefresh$Action
                }, {});
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:23syX3DIIUCeQ57gyIQwPQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:6Kasx83930aUe9_1E+pooA", callContext.id);
            }

        };
        Controller.prototype._event_BottomBar_Clicked$Action = function(in_ItemIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Event_BottomBar_Clicked");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnect.App_Common.BottomBarMenu.Event_BottomBar_Clicked$vars"))());
            vars.value.in_ItemInLocal = in_ItemIn;
            var connect_LaunchDarkly_PermissionCheckVar = new OS.DataTypes.VariableHolder();
            var getHasNewBookmarksVar = new OS.DataTypes.VariableHolder();
            var getHasNewBookmarks2Var = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.connect_LaunchDarkly_PermissionCheckVar = connect_LaunchDarkly_PermissionCheckVar;
            varBag.getHasNewBookmarksVar = getHasNewBookmarksVar;
            varBag.getHasNewBookmarks2Var = getHasNewBookmarks2Var;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:v9TK9hdJG0WBGTLw5RGZ5A:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.dSzNMjNIS0mNfvatsj3j0A/ClientActions.v9TK9hdJG0WBGTLw5RGZ5A:OMOxaTBoJVNcRuY67l1HTQ", "UBTConnect", "Event_BottomBar_Clicked", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IA6+TdAtrEOjt8ol2HSCLA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:v11psPZK3E6eIBOy7aoHvQ", callContext.id) && ((vars.value.in_ItemInLocal === model.variables.activeItemIn) && model.variables.isRootPageIn))) {
                        if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BNU6_2ABIUOyauDR+JtavA", callContext.id) && (vars.value.in_ItemInLocal === UBTConnectModel.staticEntities.connect_BottomBar_Items.bookmarks))) {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7K0vxzEoC02J_IxBC5oDJA", callContext.id);
                            // Execute Action: ScrollTop2
                            UBTConnectController.default.scrollTop$Action(".layout .content", "instant", callContext);
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YUwd6_JhvUWLtCdou7UB7Q", callContext.id);
                        } else {
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1SK_mkg+x0yEm8+6n+bfpw", callContext.id);
                            // Execute Action: ScrollTop
                            UBTConnectController.default.scrollTop$Action(".active-screen", "instant", callContext);
                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CJrz7btdgUe5ff5BzhZ1GA", callContext.id);
                        }

                    } else {
                        return OS.Flow.executeSequence(function() {
                            if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kXW7yNGQH0GC1le5nN_b_Q", callContext.id) && (vars.value.in_ItemInLocal === UBTConnectModel.staticEntities.connect_BottomBar_Items.home))) {
                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:v5PBio7B2EC4KTwAYHBqiA", callContext.id);
                                // Destination: /UBTConnect/HomeFeed
                                return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HomeFeed", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                            } else {
                                return OS.Flow.executeSequence(function() {
                                    if ((vars.value.in_ItemInLocal === UBTConnectModel.staticEntities.connect_BottomBar_Items.directory)) {
                                        if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bwYiUf+r2k6tE+ZglAFIOg", callContext.id) && OutSystemsDebugger.handleFunctionCall(function() {
                                                return UBTConnect_UtilsController.default.getHasC1DirectoryView$Action(callContext).hasC1DirectoryViewOut;
                                            }, OS.DataTypes.DataTypes.Boolean, callContext.id))) {
                                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9PXlXkkKx0C08ljD5wvRvA", callContext.id);
                                            // Destination: /UBTConnect/CountryList
                                            return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/CountryList", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                        } else {
                                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JkpuU3cLekyCEv_oKnhJ+A", callContext.id);
                                            // Destination: /UBTConnect/Locality_Details
                                            return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/Locality_Details", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                        }

                                    } else {
                                        return OS.Flow.executeSequence(function() {
                                            if ((vars.value.in_ItemInLocal === UBTConnectModel.staticEntities.connect_BottomBar_Items.updates)) {
                                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BpoX121VhE21ET+3ABTVrw", callContext.id);
                                                // Destination: /UBTConnect/Updates_SingleList
                                                return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/Updates_SingleList", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                            } else {
                                                return OS.Flow.executeSequence(function() {
                                                    if ((vars.value.in_ItemInLocal === UBTConnectModel.staticEntities.connect_BottomBar_Items.bookmarks)) {
                                                        OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:175oDfVuA0igX8opMMSzuA", callContext.id);
                                                        // Execute Action: Connect_LaunchDarkly_PermissionCheck
                                                        connect_LaunchDarkly_PermissionCheckVar.value = UBTConnect_UtilsController.default.connect_LaunchDarkly_PermissionCheck$Action(UBTConnectModel.staticEntities.launchDarkly_FF.mobileDirectoryBookmarkNote, callContext);

                                                        if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VzpFOfWjlECiRdIQFKk_Aw", callContext.id) && connect_LaunchDarkly_PermissionCheckVar.value.hasAccessOut)) {
                                                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8ryn9X8LFU2zRQMjlvnKRQ", callContext.id);
                                                            // Execute Action: GetHasNewBookmarks2
                                                            getHasNewBookmarks2Var.value = UBTConnect_UtilsController.default.getHasNewBookmarks$Action(callContext);

                                                            if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:yCS+X0n6r06TB93qYZZ8QA", callContext.id) && getHasNewBookmarks2Var.value.out_HasNewBookmarksOut)) {
                                                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uNxNvugLd0KvP42ZJRnW6w", callContext.id);
                                                                // Destination: /UBTConnect/Bookmarks
                                                                return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/Bookmarks", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                                            } else {
                                                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0OPNhIfwYU2KVOAu2mSQ6g", callContext.id);
                                                                // Destination: /UBTConnect/New_MyBookmarks
                                                                return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/New_MyBookmarks", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                                            }

                                                        } else {
                                                            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NQg0FKjbyEulTN2mSkpwbQ", callContext.id);
                                                            // Execute Action: GetHasNewBookmarks
                                                            getHasNewBookmarksVar.value = UBTConnect_UtilsController.default.getHasNewBookmarks$Action(callContext);

                                                            if ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PAcRQwjpb0m8PKfPjqcABg", callContext.id) && getHasNewBookmarksVar.value.out_HasNewBookmarksOut)) {
                                                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0gaGmO7wYUKAeiU7G5RPDg", callContext.id);
                                                                // Destination: /UBTConnect/Bookmarks
                                                                return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/Bookmarks", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                                            } else {
                                                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ycCp5_SZSEmIbTvRX_mwyw", callContext.id);
                                                                // Destination: /UBTConnect/MyBookmarks
                                                                return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/MyBookmarks", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                                            }

                                                        }

                                                    } else {
                                                        return OS.Flow.executeSequence(function() {
                                                            if ((vars.value.in_ItemInLocal === UBTConnectModel.staticEntities.connect_BottomBar_Items.menu)) {
                                                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MHGIMJ7AwkKGJI5rPuRPgw", callContext.id);
                                                                // Destination: /UBTConnect/Menu
                                                                return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/Menu", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                                            } else {
                                                                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oiXU2gNgOEebbi2JWdIDsQ", callContext.id);
                                                                // Trigger Event: BottomBar_Clicked
                                                                return controller.bottomBar_Clicked$Action(vars.value.in_ItemInLocal, callContext).then(function() {
                                                                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:85d8ORon3Um2vKU43Gi1ng", callContext.id);
                                                                });
                                                            }

                                                        });
                                                    }

                                                });
                                            }

                                        });
                                    }

                                });
                            }

                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:v9TK9hdJG0WBGTLw5RGZ5A", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:v9TK9hdJG0WBGTLw5RGZ5A", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnect.App_Common.BottomBarMenu.Event_BottomBar_Clicked$vars", [{
            name: "In_Item",
            attrName: "in_ItemInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

        Controller.prototype.onInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

        };
        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.onParametersChanged$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

        };
        Controller.prototype.event_BottomBar_Clicked$Action = function(in_ItemIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._event_BottomBar_Clicked$Action, callContext, in_ItemIn);

        };
        Controller.prototype.bottomBar_Clicked$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:0eZ+W3SSVk+CJcw1X48PQA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA:mJCG955vpb2MtUitKU2aNA", "UBTConnect", "App_Common", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:dSzNMjNIS0mNfvatsj3j0A:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.dSzNMjNIS0mNfvatsj3j0A:skCU2NAz9+z0C6sN1i+koA", "UBTConnect", "BottomBarMenu", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:dSzNMjNIS0mNfvatsj3j0A", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:0eZ+W3SSVk+CJcw1X48PQA", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "App_Common/BottomBarMenu On Initialize");
                return controller.onInitialize$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onReadyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "App_Common/BottomBarMenu On Ready");
                return controller.onReady$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "App_Common/BottomBarMenu On Parameters Changed");
                return controller.onParametersChanged$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.handleError = function(ex) {
            return controller.handleError(ex);
        };
        Controller.checkPermissions = function() {};
        Controller.prototype.getDefaultTimeout = function() {
            return UBTConnectController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});
define("UBTConnect.App_Common.BottomBarMenu.mvc$controller.OnParametersChanged.Delayed_BottomBarSlider_ForceRefreshJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $public.View.render().then(
            () => {
                if (!document.querySelector(".bottom-bar .list > a.active")) {
                    let bottomBarItems = document.querySelectorAll(".bottom-bar .list > a");
                    if ($parameters.ActiveItemIndex != -1 && bottomBarItems[$parameters.ActiveItemIndex]) {
                        bottomBarItems[$parameters.ActiveItemIndex].classList.add("active");
                    }
                }
                $actions.BottomBarSlider_ForceRefresh();
                let currentActiveElement = document.querySelector(".bottom-bar .list > a.active");
                if (currentActiveElement) {
                    currentActiveElement.classList.remove("active");
                } // This is an ad-hoc fix for first initialization of the map menu
            }
        )
    };
});

define("UBTConnect.App_Common.BottomBarMenu.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "UbI2b3_2Bk+YH0OEOBrg1g": {
            getter: function(varBag, idService) {
                return varBag.bottomBar_GetListVar.value;
            }
        },
        "awZKEZVzKkGiiRC3DK0lpA": {
            getter: function(varBag, idService) {
                return varBag.setBottomBarActiveElementVar.value;
            }
        },
        "2_YTzC98sUeFb5xAslgN+A": {
            getter: function(varBag, idService) {
                return varBag.listIndexOf_ActiveIconVar.value;
            }
        },
        "kO3ule_W4Eu0zdoyxiD+zA": {
            getter: function(varBag, idService) {
                return varBag.delayed_BottomBarSlider_ForceRefreshJSResult.value;
            }
        },
        "sR92jsaVTU27o23agkKMeA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.in_ItemInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "175oDfVuA0igX8opMMSzuA": {
            getter: function(varBag, idService) {
                return varBag.connect_LaunchDarkly_PermissionCheckVar.value;
            }
        },
        "NQg0FKjbyEulTN2mSkpwbQ": {
            getter: function(varBag, idService) {
                return varBag.getHasNewBookmarksVar.value;
            }
        },
        "8ryn9X8LFU2zRQMjlvnKRQ": {
            getter: function(varBag, idService) {
                return varBag.getHasNewBookmarks2Var.value;
            }
        },
        "WGXwu6a3fEGJ5lwbgkmGfQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.localBottomBar_ItemsVar;
            }
        },
        "NV6DDmn5hkqHElQuZiTkxA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.retriedVar;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "vBm4+k80VEOROVzTRXZ_Tw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.activeItemIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "Bgy1ejBO60imuVsXQYKckw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.useMapsItemsIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "0FEDCPsBS02yQ5Qli0UzWA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isHouseholderIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "Yo3f1Q09Ik+e2cvU2H4Ibg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isRootPageIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "ouNXG2tiVkuNkX7ZnLoOsA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_BottomBarItems"));
                })(varBag.model, idService);
            }
        },
        "TYiPlCAMi0uKres5nSmmHw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Icon"));
                })(varBag.model, idService);
            }
        },
        "ya9Tjz68L0K43JRfKVyWMw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_IsUpdates"));
                })(varBag.model, idService);
            }
        },
        "nj6hN19i4EmtEbo1sOMAfw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Text"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});