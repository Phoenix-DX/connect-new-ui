define("UBTConnectLibrary.ConnectPatterns.CircleButton_WithLabel.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.ConnectPatterns.CircleButton.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.controller$GetClasses_AvatarSize", "UBTConnectLibrary.model$AvatarIconOptionsRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_ConnectPatterns_CircleButton_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("MainContainerClass", "mainContainerClassVar", "MainContainerClass", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "ubt-icon-button";
                }, false),
                this.attr("SizeId", "sizeIdIn", "SizeId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_sizeIdInDataFetchStatus", "_sizeIdInDataFetchStatus", "_sizeIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("BackgroundColorId", "backgroundColorIdIn", "BackgroundColorId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_backgroundColorIdInDataFetchStatus", "_backgroundColorIdInDataFetchStatus", "_backgroundColorIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("BorderColorId", "borderColorIdIn", "BorderColorId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_borderColorIdInDataFetchStatus", "_borderColorIdInDataFetchStatus", "_borderColorIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("ExtendedClasses", "extendedClassesIn", "ExtendedClasses", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_extendedClassesInDataFetchStatus", "_extendedClassesInDataFetchStatus", "_extendedClassesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("IsProcessing", "isProcessingIn", "IsProcessing", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_isProcessingInDataFetchStatus", "_isProcessingInDataFetchStatus", "_isProcessingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("PaddingSize", "paddingSizeIn", "PaddingSize", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return UBTConnectLibraryModel.staticEntities.uBT_Size.small;
                }, false),
                this.attr("_paddingSizeInDataFetchStatus", "_paddingSizeInDataFetchStatus", "_paddingSizeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_BadgeIcon", "in_BadgeIconIn", "In_BadgeIcon", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.AvatarIconOptionsRec());
                }, false, UBTConnectLibraryModel.AvatarIconOptionsRec),
                this.attr("_in_BadgeIconInDataFetchStatus", "_in_BadgeIconInDataFetchStatus", "_in_BadgeIconInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = (UBTConnectLibrary_ConnectPatterns_CircleButton_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("SizeId" in inputs) {
                this.variables.sizeIdIn = inputs.SizeId;
                if ("_sizeIdInDataFetchStatus" in inputs) {
                    this.variables._sizeIdInDataFetchStatus = inputs._sizeIdInDataFetchStatus;
                }

            }

            if ("BackgroundColorId" in inputs) {
                this.variables.backgroundColorIdIn = inputs.BackgroundColorId;
                if ("_backgroundColorIdInDataFetchStatus" in inputs) {
                    this.variables._backgroundColorIdInDataFetchStatus = inputs._backgroundColorIdInDataFetchStatus;
                }

            }

            if ("BorderColorId" in inputs) {
                this.variables.borderColorIdIn = inputs.BorderColorId;
                if ("_borderColorIdInDataFetchStatus" in inputs) {
                    this.variables._borderColorIdInDataFetchStatus = inputs._borderColorIdInDataFetchStatus;
                }

            }

            if ("ExtendedClasses" in inputs) {
                this.variables.extendedClassesIn = inputs.ExtendedClasses;
                if ("_extendedClassesInDataFetchStatus" in inputs) {
                    this.variables._extendedClassesInDataFetchStatus = inputs._extendedClassesInDataFetchStatus;
                }

            }

            if ("IsProcessing" in inputs) {
                this.variables.isProcessingIn = inputs.IsProcessing;
                if ("_isProcessingInDataFetchStatus" in inputs) {
                    this.variables._isProcessingInDataFetchStatus = inputs._isProcessingInDataFetchStatus;
                }

            }

            if ("PaddingSize" in inputs) {
                this.variables.paddingSizeIn = inputs.PaddingSize;
                if ("_paddingSizeInDataFetchStatus" in inputs) {
                    this.variables._paddingSizeInDataFetchStatus = inputs._paddingSizeInDataFetchStatus;
                }

            }

            if ("In_BadgeIcon" in inputs) {
                this.variables.in_BadgeIconIn = inputs.In_BadgeIcon;
                if ("_in_BadgeIconInDataFetchStatus" in inputs) {
                    this.variables._in_BadgeIconInDataFetchStatus = inputs._in_BadgeIconInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "ConnectPatterns.CircleButton_WithLabel");
});
define("UBTConnectLibrary.ConnectPatterns.CircleButton_WithLabel.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.CircleButton_WithLabel.mvc$model", "UBTConnectLibrary.ConnectPatterns.CircleButton_WithLabel.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.CircleButton.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.controller$GetClasses_AvatarSize", "UBTConnectLibrary.model$AvatarIconOptionsRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_CircleButton_WithLabel_mvc_model, UBTConnectLibrary_ConnectPatterns_CircleButton_WithLabel_mvc_controller, UBTConnectLibraryClientVariables, OSWidgets, UBTConnectLibrary_ConnectPatterns_CircleButton_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view) {
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
        View.displayName = "ConnectPatterns.CircleButton_WithLabel";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_CircleButton_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_CircleButton_WithLabel_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_CircleButton_WithLabel_mvc_controller;
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
                extendedEvents: {
                    onClick: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/CircleButton_WithLabel/Container onclick");
                                return controller.action_OnClick$Action(controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });
                        });;
                    }
                },
                gridProperties: {
                    classes: "OSInline"
                },
                style: model.getCachedValue(idService.getId("EWWa4RJKV0eKGTfxq7CXhA.Style"), function() {
                    return OutSystemsDebugger.handleFunctionCall(function() {
                        return UBTConnectLibraryController.default.formatClasses$Action(OutSystemsDebugger.handleFunctionCall(function() {
                            return UBTConnectLibraryController.default.formatClasses$Action(OutSystemsDebugger.handleFunctionCall(function() {
                                return UBTConnectLibraryController.default.formatClasses$Action(model.variables.mainContainerClassVar, model.variables.extendedClassesIn, callContext).classesOutOut;
                            }, OS.DataTypes.DataTypes.Text, callContext.id), "inline-block", callContext).classesOutOut;
                        }, OS.DataTypes.DataTypes.Text, callContext.id), OutSystemsDebugger.handleFunctionCall(function() {
                            return UBTConnectLibraryController.default.getClasses_AvatarSize$Action(model.variables.sizeIdIn, callContext).classesOutOut;
                        }, OS.DataTypes.DataTypes.Text, callContext.id), callContext).classesOutOut;
                    }, OS.DataTypes.DataTypes.Text, callContext.id);
                }, function() {
                    return model.variables.mainContainerClassVar;
                }, function() {
                    return model.variables.extendedClassesIn;
                }, function() {
                    return model.variables.sizeIdIn;
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassesInDataFetchStatus, model.variables._sizeIdInDataFetchStatus)
            }, React.createElement(UBTConnectLibrary_ConnectPatterns_CircleButton_mvc_view, {
                inputs: {
                    IsProcessing: model.variables.isProcessingIn,
                    _isProcessingInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isProcessingInDataFetchStatus),
                    BorderColorId: model.variables.borderColorIdIn,
                    _borderColorIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._borderColorIdInDataFetchStatus),
                    SizeId: model.variables.sizeIdIn,
                    _sizeIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._sizeIdInDataFetchStatus),
                    BackgroundColorId: model.variables.backgroundColorIdIn,
                    _backgroundColorIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._backgroundColorIdInDataFetchStatus),
                    PaddingSize: model.variables.paddingSizeIn,
                    _paddingSizeInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._paddingSizeInDataFetchStatus)
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
                    icon: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.icon,
                            _idProps: {
                                service: idService,
                                name: "Icon"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }),
                    badge: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.badge,
                            style: "ubt-icon-button__badge",
                            _idProps: {
                                service: idService,
                                name: "Badge"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    })
                }
            }), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                inputs: {
                    Options: model.getCachedValue(idService.getId("w_W5RpXSBUSbedeqZeHtBw.Options"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                            rec.marginSizeAttr = function() {
                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                rec.topSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.small;
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
                    uuid: "4",
                    alias: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    content: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.text,
                            style: (model.variables.mainContainerClassVar + "__text-container"),
                            _idProps: {
                                service: idService,
                                name: "Text"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    })
                }
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnectLibrary.ConnectPatterns.CircleButton_WithLabel.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectPatterns.CircleButton_WithLabel.mvc$debugger", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.controller$GetClasses_AvatarSize", "UBTConnectLibrary.model$AvatarIconOptionsRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectPatterns_CircleButton_WithLabel_mvc_Debugger) {
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
        Controller.prototype._action_OnClick$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Action_OnClick");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:Ufw7fkYm5ki2sFuQPW9xiw:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.GXkbM_4C4U6HoqwQJQbhLA/ClientActions.Ufw7fkYm5ki2sFuQPW9xiw:7wxuOk8sAnOZjdR7+HQHyQ", "UBTConnectLibrary", "Action_OnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:BiKOgRgjJkCVVR0QKmmxfQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:nXgBAPY8_kagp7_oZLhrCg", callContext.id);
                // Trigger Event: OnClick
                return controller.onClick$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:2MwNzV_Lp0SKYDBO46FBzA", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:Ufw7fkYm5ki2sFuQPW9xiw", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:Ufw7fkYm5ki2sFuQPW9xiw", callContext.id);
                throw ex;

            });
        };

        Controller.prototype.action_OnClick$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._action_OnClick$Action, callContext);

        };
        Controller.prototype.onClick$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g:Y06DhYqVkffzqTnycnKUGw", "UBTConnectLibrary", "ConnectPatterns", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:GXkbM_4C4U6HoqwQJQbhLA:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.GXkbM_4C4U6HoqwQJQbhLA:udU75m2Gmh3U+hnJUOnV5g", "UBTConnectLibrary", "CircleButton_WithLabel", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:GXkbM_4C4U6HoqwQJQbhLA", callContext.id);
            OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g", callContext.id);
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
            return UBTConnectLibraryController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnectLibraryLanguageResources);
});

define("UBTConnectLibrary.ConnectPatterns.CircleButton_WithLabel.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "oghl+gnVckyTVw_QgfWPfA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.mainContainerClassVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "hv0t70+btUioP8wpjWsabg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.sizeIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "HDlsIRlIXkaovBucUBf3Tg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.backgroundColorIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "NrSijT0k20OvypLskynRPA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.borderColorIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "3ayIhvydAUCkdUXEZGPpcA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.extendedClassesIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "wANtJbA9+0yGcfYnwAiPDQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isProcessingIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "zL6EfWFtoUy16yWIWuutYA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.paddingSizeIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "Z_4fTyI4vEG5fPHUD+MYlw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_BadgeIconIn;
            }
        },
        "dOUhiWKjT0ahbGQ7J5Z1nA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Icon"));
                })(varBag.model, idService);
            }
        },
        "0Q0sdK8ntkeEndKRuoBcFw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Icon"));
                })(varBag.model, idService);
            }
        },
        "M8Gk+K7Qg0+UscYOrBnPyA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Badge"));
                })(varBag.model, idService);
            }
        },
        "D+ttoM7raEyM4HvwoMjSJQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Badge"));
                })(varBag.model, idService);
            }
        },
        "Yz2FM7hwSEqJtE7lpYnoJQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "MUNv0K4ohU6NxMV1NtRDlg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Text"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});