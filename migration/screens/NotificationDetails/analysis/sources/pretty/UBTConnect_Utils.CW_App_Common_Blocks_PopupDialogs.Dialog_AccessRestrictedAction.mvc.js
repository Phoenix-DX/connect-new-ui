define("UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnectLibrary.model", "UBTConnect_Utils.controller", "NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnect_Utils.controller$App_Subscription_NavigateToUpgrade"], function(OutSystems, UBTConnect_UtilsModel, UBTConnectLibraryModel, UBTConnect_UtilsController, NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("In_ExtendedClass", "in_ExtendedClassIn", "In_ExtendedClass", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_ExtendedClassInDataFetchStatus", "_in_ExtendedClassInDataFetchStatus", "_in_ExtendedClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = (((NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_ExtendedClass" in inputs) {
                this.variables.in_ExtendedClassIn = inputs.In_ExtendedClass;
                if ("_in_ExtendedClassInDataFetchStatus" in inputs) {
                    this.variables._in_ExtendedClassInDataFetchStatus = inputs._in_ExtendedClassInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction");
});
define("UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction.mvc$model", "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction.mvc$controller", "UBTConnect_Utils.clientVariables", "OutSystems/ReactWidgets/Main", "NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnect_Utils.controller$App_Subscription_NavigateToUpgrade"], function(OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnectLibraryModel, React, OSView, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_mvc_model, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_mvc_controller, UBTConnect_UtilsClientVariables, OSWidgets, NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view) {
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
        View.displayName = "CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_mvc_controller;
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
                style: ("subscription-pop-up connect-dialog-popup connect-dialog-popup--access-restricted " + model.variables.in_ExtendedClassIn),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ExtendedClassInDataFetchStatus)
            }, React.createElement(NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_view, {
                inputs: {},
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    confirmed$Action: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);

                                OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConfirmationDialogs/ActionConfirmationDialog Confirmed");
                                return controller.upgrade$Action(controller.callContext(eventHandlerContext));
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
                    name: "PopUp",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    dialogHeader: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "text-align-center",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                            inputs: {
                                In_TextOptions: model.getCachedValue(idService.getId("YQ9FZipiH0+h89kxs3WVbA.In_TextOptions"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                        rec.fontSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontSize.base;
                                        rec.fontWeightAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontWeight.semiBold;
                                        return rec;
                                    }();
                                }),
                                In_PaddingOptions: model.getCachedValue(idService.getId("YQ9FZipiH0+h89kxs3WVbA.In_PaddingOptions"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                        rec.bottomSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.small;
                                        return rec;
                                    }();
                                }),
                                In_Text: "Access Restricted"
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
                        }))];
                    }),
                    dialogBody: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                            inputs: {
                                Options: model.getCachedValue(idService.getId("Iconcont.Options"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                        rec.displayOptionsAttr = function() {
                                            var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
                                            rec.displayAttr = UBTConnect_UtilsModel.staticEntities.uBT_Display.flex;
                                            rec.alignItemsAttr = UBTConnect_UtilsModel.staticEntities.uBT_AlignItems.center;
                                            rec.justifyContentAttr = UBTConnect_UtilsModel.staticEntities.uBT_JustifyContent.center;
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
                                name: "Iconcont",
                                alias: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                                        inputs: {
                                            Options: model.getCachedValue(idService.getId("xQDSETfPh0G+nk3ZIjqFeQ.Options"), function() {
                                                return function() {
                                                    var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                                    rec.backgroundAttr = function() {
                                                        var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                                        rec.backgroundColorAttr = UBTConnect_UtilsModel.staticEntities.uBT_Color.primary;
                                                        return rec;
                                                    }();
                                                    rec.borderOptionsAttr = function() {
                                                        var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                                        rec.radiusAttr = function() {
                                                            var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
                                                            rec.generalSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Shape.circle;
                                                            return rec;
                                                        }();
                                                        return rec;
                                                    }();
                                                    rec.displayOptionsAttr = function() {
                                                        var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
                                                        rec.displayAttr = UBTConnect_UtilsModel.staticEntities.uBT_Display.flex;
                                                        rec.alignItemsAttr = UBTConnect_UtilsModel.staticEntities.uBT_AlignItems.center;
                                                        rec.justifyContentAttr = UBTConnect_UtilsModel.staticEntities.uBT_JustifyContent.center;
                                                        return rec;
                                                    }();
                                                    return rec;
                                                }();
                                            }),
                                            ExtendedClasses: "access-restricted-body-icon"
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
                                        placeholders: {
                                            content: new PlaceholderContent(function() {
                                                return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                                    inputs: {
                                                        In_IconId: UBTConnect_UtilsModel.staticEntities.uBT_Icons.lock,
                                                        In_ColorId: UBTConnect_UtilsModel.staticEntities.uBT_Color.neutral0,
                                                        In_SizeId: UBTConnect_UtilsModel.staticEntities.uBT_IconSize.nonStandard_32
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
                                        _dependencies: []
                                    })];
                                })
                            },
                            _dependencies: []
                        }), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                            inputs: {
                                Options: model.getCachedValue(idService.getId("Message.Options"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                        rec.paddingSizeAttr = function() {
                                            var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                            return rec;
                                        }();
                                        rec.marginSizeAttr = function() {
                                            var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                            rec.topSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.base;
                                            rec.bottomSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.base;
                                            return rec;
                                        }();
                                        rec.textOptionsAttr = function() {
                                            var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                            rec.colorAttr = UBTConnect_UtilsModel.staticEntities.uBT_Color.neutral10;
                                            return rec;
                                        }();
                                        rec.displayOptionsAttr = function() {
                                            var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
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
                                name: "Message",
                                alias: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: "",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Expression, {
                                        value: "It looks like this content isn\'t included in your current plan. Upgrade your subscription to access more features and detailed information.",
                                        _idProps: {
                                            service: idService,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }))];
                                })
                            },
                            _dependencies: []
                        })];
                    }),
                    buttonLabel_Confirm: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                            inputs: {
                                Options: model.getCachedValue(idService.getId("LnnJBhDZK0OEJvTColy9Mw.Options"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                                        rec.displayOptionsAttr = function() {
                                            var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
                                            rec.displayAttr = UBTConnect_UtilsModel.staticEntities.uBT_Display.flex;
                                            rec.alignItemsAttr = UBTConnect_UtilsModel.staticEntities.uBT_AlignItems.center;
                                            rec.justifyContentAttr = UBTConnect_UtilsModel.staticEntities.uBT_JustifyContent.center;
                                            rec.flexDirectionAttr = UBTConnect_UtilsModel.staticEntities.uBT_FlexDirection.row;
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
                                uuid: "10",
                                alias: "7"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "11"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                        inputs: {
                                            NoWrap: true,
                                            In_TextOptions: model.getCachedValue(idService.getId("kS2IoSE8p0mK4Va1O77kRA.In_TextOptions"), function() {
                                                return function() {
                                                    var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                                    rec.colorAttr = UBTConnect_UtilsModel.staticEntities.uBT_Color.neutral0;
                                                    rec.fontSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontSize.small;
                                                    rec.fontWeightAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontWeight.semiBold;
                                                    return rec;
                                                }();
                                            }),
                                            In_Text: "Upgrade Subscription"
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
                                            uuid: "12",
                                            alias: "8"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    })), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: "margin-left-s",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "13"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                        inputs: {
                                            In_IconId: UBTConnect_UtilsModel.staticEntities.uBT_Icons.openNew,
                                            In_SizeId: UBTConnect_UtilsModel.staticEntities.uBT_IconSize.nonStandard_16,
                                            In_ColorId: UBTConnect_UtilsModel.staticEntities.uBT_Color.neutral0
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
                                            uuid: "14",
                                            alias: "9"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    }))];
                                })
                            },
                            _dependencies: []
                        })];
                    }),
                    buttonLabel_Dismiss: new PlaceholderContent(function() {
                        return ["Close"];
                    })
                },
                _dependencies: []
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnectLibrary.model", "UBTConnect_Utils.languageResources", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction.mvc$debugger", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnect_Utils.controller$App_Subscription_NavigateToUpgrade"], function(OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnectLibraryModel, UBTConnect_UtilsLanguageResources, UBTConnect_UtilsClientVariables, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_mvc_Debugger) {
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
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:n0IZO2jBQEyAyoPze_PlCw:/NRWebFlows.R5vwMKLVLkuCtlMIOr29Cw/NodesShownInESpaceTree.NyQr_QujukWW700LNNKq2Q/ClientActions.n0IZO2jBQEyAyoPze_PlCw:NlZnlhuwGwZ5+Z+CZ8Rhjw", "UBTConnect_Utils", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:4pZU1xxxHkmkkAYFegKdlA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:rwFmDsc5+kuIOaSb04KAhg", callContext.id);
                // App_SubscriptionPopUp = PopUp.Id
                UBTConnect_UtilsClientVariables.setApp_SubscriptionPopUp(idService.getId("PopUp"));
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:g80IUKmEk0is301eTlQE3A", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:n0IZO2jBQEyAyoPze_PlCw", callContext.id);
            }

        };
        Controller.prototype._upgrade$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("Upgrade");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:iaB8faUWT06Cno0vOHUj2Q:/NRWebFlows.R5vwMKLVLkuCtlMIOr29Cw/NodesShownInESpaceTree.NyQr_QujukWW700LNNKq2Q/ClientActions.iaB8faUWT06Cno0vOHUj2Q:C0J_28PKU__EtrSP+JYajw", "UBTConnect_Utils", "Upgrade", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:s2Rz2zYS+0Kn6hUj4wTKQQ", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:jCGVzbtSikeafSGJHaI7Hw", callContext.id);
                // Execute Action: App_Subscription_NavigateToUpgrade
                model.flush();
                return UBTConnect_UtilsController.default.app_Subscription_NavigateToUpgrade$Action(callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ndxFRWlYM0+ATlIOLhTuzw", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:iaB8faUWT06Cno0vOHUj2Q", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:iaB8faUWT06Cno0vOHUj2Q", callContext.id);
                throw ex;

            });
        };

        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.upgrade$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._upgrade$Action, callContext);

        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:R5vwMKLVLkuCtlMIOr29Cw:/NRWebFlows.R5vwMKLVLkuCtlMIOr29Cw:WUreZLtBKMIK4h7egpH4sw", "UBTConnect_Utils", "CW_App_Common_Blocks_PopupDialogs", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:NyQr_QujukWW700LNNKq2Q:/NRWebFlows.R5vwMKLVLkuCtlMIOr29Cw/NodesShownInESpaceTree.NyQr_QujukWW700LNNKq2Q:B4AbVRTG1TBojt2izLUL4g", "UBTConnect_Utils", "Dialog_AccessRestrictedAction", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:NyQr_QujukWW700LNNKq2Q", callContext.id);
            OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:R5vwMKLVLkuCtlMIOr29Cw", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = null;
        Controller.prototype.onReadyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "CW_App_Common_Blocks_PopupDialogs/Dialog_AccessRestrictedAction On Ready");
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
            return UBTConnect_UtilsController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnect_UtilsLanguageResources);
});

define("UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "b5NYUIu3NUCA0X7qAk9DOQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_ExtendedClassIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "TjGfezFBGEKH2RmHEdok8A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("PopUp"));
                })(varBag.model, idService);
            }
        },
        "UAAQqMqlnk262DsPtarXow": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("DialogHeader"));
                })(varBag.model, idService);
            }
        },
        "+M9Phdx3h06UJXkzY4nLKg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("DialogBody"));
                })(varBag.model, idService);
            }
        },
        "CuJrBMahmESE6jDR+P7ZoQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Iconcont"));
                })(varBag.model, idService);
            }
        },
        "XO6akoxTJ0yMHJcOd1QM4w": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "9iO0En03WUWmMrDhrwA_8Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "gK5ImDHKjU6wU2HyGrKeSQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Message"));
                })(varBag.model, idService);
            }
        },
        "n8b9b7oFZU63_tPBxozCbA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "aCgDPwxMtE6yt99aqLJVIw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ButtonLabel_Confirm"));
                })(varBag.model, idService);
            }
        },
        "LT3pFOtNz0ydrk3GNTwmng": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "ogcL_OMzg0Wzj_k5z_1xNA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ButtonLabel_Dismiss"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});