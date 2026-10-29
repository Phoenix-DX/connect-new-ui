define("UBTConnect.Home.Section_FeedWrapper.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "UBTConnect.App_Common_Blocks.Section.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$InlineIconRec"], function(OutSystems, UBTConnectModel, UBTConnectLibraryModel, UBTConnect_App_Common_Blocks_Section_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel, UBTConnectLibrary_ConnectPatterns_IconText_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("isTransparentBackground", "isTransparentBackgroundIn", "isTransparentBackground", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_isTransparentBackgroundInDataFetchStatus", "_isTransparentBackgroundInDataFetchStatus", "_isTransparentBackgroundInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("ShowHeader", "showHeaderIn", "ShowHeader", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return true;
                }, false),
                this.attr("_showHeaderInDataFetchStatus", "_showHeaderInDataFetchStatus", "_showHeaderInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("showViewAll", "showViewAllIn", "showViewAll", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return true;
                }, false),
                this.attr("_showViewAllInDataFetchStatus", "_showViewAllInDataFetchStatus", "_showViewAllInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("Title", "titleIn", "Title", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("MarginTopSizeId", "marginTopSizeIdIn", "MarginTopSizeId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_marginTopSizeIdInDataFetchStatus", "_marginTopSizeIdInDataFetchStatus", "_marginTopSizeIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = (((((UBTConnect_App_Common_Blocks_Section_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_IconText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("isTransparentBackground" in inputs) {
                this.variables.isTransparentBackgroundIn = inputs.isTransparentBackground;
                if ("_isTransparentBackgroundInDataFetchStatus" in inputs) {
                    this.variables._isTransparentBackgroundInDataFetchStatus = inputs._isTransparentBackgroundInDataFetchStatus;
                }

            }

            if ("ShowHeader" in inputs) {
                this.variables.showHeaderIn = inputs.ShowHeader;
                if ("_showHeaderInDataFetchStatus" in inputs) {
                    this.variables._showHeaderInDataFetchStatus = inputs._showHeaderInDataFetchStatus;
                }

            }

            if ("showViewAll" in inputs) {
                this.variables.showViewAllIn = inputs.showViewAll;
                if ("_showViewAllInDataFetchStatus" in inputs) {
                    this.variables._showViewAllInDataFetchStatus = inputs._showViewAllInDataFetchStatus;
                }

            }

            if ("Title" in inputs) {
                this.variables.titleIn = inputs.Title;
                if ("_titleInDataFetchStatus" in inputs) {
                    this.variables._titleInDataFetchStatus = inputs._titleInDataFetchStatus;
                }

            }

            if ("MarginTopSizeId" in inputs) {
                this.variables.marginTopSizeIdIn = inputs.MarginTopSizeId;
                if ("_marginTopSizeIdInDataFetchStatus" in inputs) {
                    this.variables._marginTopSizeIdInDataFetchStatus = inputs._marginTopSizeIdInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Home.Section_FeedWrapper");
});
define("UBTConnect.Home.Section_FeedWrapper.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Home.Section_FeedWrapper.mvc$model", "UBTConnect.Home.Section_FeedWrapper.mvc$controller", "UBTConnect.clientVariables", "UBTConnect.App_Common_Blocks.Section.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$InlineIconRec"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, React, OSView, UBTConnect_Home_Section_FeedWrapper_mvc_model, UBTConnect_Home_Section_FeedWrapper_mvc_controller, UBTConnectClientVariables, UBTConnect_App_Common_Blocks_Section_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view) {
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
        View.displayName = "Home.Section_FeedWrapper";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_App_Common_Blocks_Section_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Home_Section_FeedWrapper_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Home_Section_FeedWrapper_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnect_App_Common_Blocks_Section_mvc_view, {
                inputs: {
                    MarginTopSizeId: model.variables.marginTopSizeIdIn,
                    _marginTopSizeIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._marginTopSizeIdInDataFetchStatus),
                    isTransparentBackground: model.variables.isTransparentBackgroundIn,
                    _isTransparentBackgroundInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isTransparentBackgroundInDataFetchStatus)
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
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    header: new PlaceholderContent(function() {
                        return [$if(model.variables.showHeaderIn, false, this, function() {
                            return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                inputs: {
                                    Options: model.getCachedValue(idService.getId("PccyX40XYkysiOjbPj0+Rw.Options"), function() {
                                        return function() {
                                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                            rec.marginSizeAttr = function() {
                                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                                rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
                                                return rec;
                                            }();
                                            return rec;
                                        }();
                                    })
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
                                    alias: "2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    content: new PlaceholderContent(function() {
                                        return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
                                            inputs: {
                                                ColumnOptions: model.getCachedValue(idService.getId("cB7f8Fx0W0upVcK__Z7atg.ColumnOptions"), function() {
                                                    return function() {
                                                        var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
                                                        rec.columnBehaviourAttr = UBTConnectModel.staticEntities.uBT_ColumnBehaviour.reduceLast;
                                                        return rec;
                                                    }();
                                                })
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
                                                uuid: "2",
                                                alias: "3"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            placeholders: {
                                                left: new PlaceholderContent(function() {
                                                    return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                                        inputs: {
                                                            In_TextOptions: model.getCachedValue(idService.getId("CpqpbXPmzE20X68+JX8YNA.In_TextOptions"), function() {
                                                                return function() {
                                                                    var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                                    rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral9;
                                                                    rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.base;
                                                                    rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
                                                                    return rec;
                                                                }();
                                                            }),
                                                            In_Text: model.variables.titleIn,
                                                            _in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleInDataFetchStatus)
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
                                                            alias: "4"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                        _dependencies: []
                                                    })];
                                                }),
                                                right: new PlaceholderContent(function() {
                                                    return [$if(model.variables.showViewAllIn, false, this, function() {
                                                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
                                                            inputs: {
                                                                Text: "View all",
                                                                IsIconOnRight: true,
                                                                SpacingSize: UBTConnectModel.staticEntities.uBT_Size.base,
                                                                TextOptions: model.getCachedValue(idService.getId("CxhTZHV5tkKLQQUk9eO6uw.TextOptions"), function() {
                                                                    return function() {
                                                                        var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                                        rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral7;
                                                                        rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.extraSmall;
                                                                        rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
                                                                        rec.isUnderlinedAttr = true;
                                                                        return rec;
                                                                    }();
                                                                })
                                                            },
                                                            events: {
                                                                _handleError: function(ex) {
                                                                    controller.handleError(ex);
                                                                },
                                                                clicked$Action: function() {
                                                                    return Promise.resolve().then(function() {
                                                                        var eventHandlerContext = callContext.clone();
                                                                        return OS.Flow.tryFinally(function() {
                                                                            var varBag = {};
                                                                            controller.pushDebuggerContext(eventHandlerContext);

                                                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/IconText Clicked");
                                                                            return controller.onClick_ViewAll2$Action(controller.callContext(eventHandlerContext));
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
                                                                alias: "5"
                                                            },
                                                            _widgetRecordProvider: widgetsRecordProvider,
                                                            placeholders: {
                                                                icon: new PlaceholderContent(function() {
                                                                    return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                                                        inputs: {
                                                                            In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.arrowRightAlt,
                                                                            In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral8,
                                                                            In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.medium_20
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
                                                                            alias: "6"
                                                                        },
                                                                        _widgetRecordProvider: widgetsRecordProvider,
                                                                        _dependencies: []
                                                                    })];
                                                                })
                                                            },
                                                            _dependencies: []
                                                        })];
                                                    }, function() {
                                                        return [];
                                                    })];
                                                })
                                            },
                                            _dependencies: [asPrimitiveValue(model.variables.showViewAllIn), asPrimitiveValue(model.variables._showViewAllInDataFetchStatus), asPrimitiveValue(model.variables._titleInDataFetchStatus), asPrimitiveValue(model.variables.titleIn)]
                                        })];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(model.variables.showViewAllIn), asPrimitiveValue(model.variables._showViewAllInDataFetchStatus), asPrimitiveValue(model.variables._titleInDataFetchStatus), asPrimitiveValue(model.variables.titleIn)]
                            })];
                        }, function() {
                            return [];
                        })];
                    }),
                    content: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.content,
                            _idProps: {
                                service: idService,
                                name: "Content"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    })
                }
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect.Home.Section_FeedWrapper.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Home.Section_FeedWrapper.mvc$debugger", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$InlineIconRec"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Home_Section_FeedWrapper_mvc_Debugger) {
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
        Controller.prototype._onClick_ViewAll2$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick_ViewAll2");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:7jK1B0BRTEirLUkpVznw1g:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.UltG_aJyakOHq2wBNEn6RQ/ClientActions.7jK1B0BRTEirLUkpVznw1g:nWnW4sUF1pVu5xzltWXivQ", "UBTConnect", "OnClick_ViewAll2", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:m6sd+yCCr0CRevEQ3u_Rog", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fAZKuG+znECQ2k070PIOrg", callContext.id);
                // Trigger Event: OnClick_ViewAll
                return controller.onClick_ViewAll$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pN5oeawyOEqsKM+h_x1FKQ", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:7jK1B0BRTEirLUkpVznw1g", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:7jK1B0BRTEirLUkpVznw1g", callContext.id);
                throw ex;

            });
        };

        Controller.prototype.onClick_ViewAll2$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick_ViewAll2$Action, callContext);

        };
        Controller.prototype.onClick_ViewAll$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:9o650LFgPEKO3jEzGxssNw:/NRWebFlows.9o650LFgPEKO3jEzGxssNw:9fwzOG+yQfV_SOU4v_xngw", "UBTConnect", "Home", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:UltG_aJyakOHq2wBNEn6RQ:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.UltG_aJyakOHq2wBNEn6RQ:xobUxt6W+jp_FjAUewakbA", "UBTConnect", "Section_FeedWrapper", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:UltG_aJyakOHq2wBNEn6RQ", callContext.id);
            OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:9o650LFgPEKO3jEzGxssNw", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = null;
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = null;
        Controller.prototype.onParametersChangedEventHandler = null;
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

define("UBTConnect.Home.Section_FeedWrapper.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "OMA2RtcPr0ynDOZIwvnNTg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isTransparentBackgroundIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "ysx1QhngXkOHLNkZLZhiLA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.showHeaderIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "4nr6jIIEu0yLONfgAtmGJg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.showViewAllIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "LvV7buIbQUmy7FTOhnbj9w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.titleIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "Vmqa8YRC1EG9AXm87AIphg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.marginTopSizeIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "CkxaSowsxUqOFhvUSkOgqQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Header"));
                })(varBag.model, idService);
            }
        },
        "NlUCPsL3s0+UiVxuJQ67eQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ShowHeader2"));
                })(varBag.model, idService);
            }
        },
        "gBqUpK51WkmD74FNXBBFyA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "vKLEvEYK40+lMW3kDAgU+A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Left"));
                })(varBag.model, idService);
            }
        },
        "dBdNFZtju0irQKHjEFbF1w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Right"));
                })(varBag.model, idService);
            }
        },
        "tKMrHjjbeEm2C3Wx7wkhDQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ShowViewAll2"));
                })(varBag.model, idService);
            }
        },
        "MqeIhPBIGE+QFKxdIIZIjQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Icon"));
                })(varBag.model, idService);
            }
        },
        "sr5Iuwp0BUOeTAOkEd1Phw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "GFYxuM69U0Kz7H591lhLnQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});