define("UBTConnect_Utils.CW_Common.Button.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnectLibrary.model", "UBTConnectLibrary.ConnectPatterns.Button.mvc$model", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnectLibrary.model$ButtonOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$TextOptionsRec"], function(OutSystems, UBTConnect_UtilsModel, UBTConnectLibraryModel, UBTConnectLibrary_ConnectPatterns_Button_mvcModel, UBTConnectLibrary_ConnectPatterns_IconText_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("ButtonExtendedClass", "buttonExtendedClassIn", "ButtonExtendedClass", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_buttonExtendedClassInDataFetchStatus", "_buttonExtendedClassInDataFetchStatus", "_buttonExtendedClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("IsDisabled", "isDisabledIn", "IsDisabled", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_isDisabledInDataFetchStatus", "_isDisabledInDataFetchStatus", "_isDisabledInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("IsIconOnRight", "isIconOnRightIn", "IsIconOnRight", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_isIconOnRightInDataFetchStatus", "_isIconOnRightInDataFetchStatus", "_isIconOnRightInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("ButtonText", "buttonTextIn", "ButtonText", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_buttonTextInDataFetchStatus", "_buttonTextInDataFetchStatus", "_buttonTextInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("IconText_SpacingSize", "iconText_SpacingSizeIn", "IconText_SpacingSize", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return UBTConnect_UtilsModel.staticEntities.uBT_Size.extraSmall;
                }, false),
                this.attr("_iconText_SpacingSizeInDataFetchStatus", "_iconText_SpacingSizeInDataFetchStatus", "_iconText_SpacingSizeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("TextExtendedClasses", "textExtendedClassesIn", "TextExtendedClasses", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_textExtendedClassesInDataFetchStatus", "_textExtendedClassesInDataFetchStatus", "_textExtendedClassesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("ButtonOptions", "buttonOptionsIn", "ButtonOptions", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ButtonOptionsRec());
                }, false, UBTConnectLibraryModel.ButtonOptionsRec),
                this.attr("_buttonOptionsInDataFetchStatus", "_buttonOptionsInDataFetchStatus", "_buttonOptionsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("IconId", "iconIdIn", "IconId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_iconIdInDataFetchStatus", "_iconIdInDataFetchStatus", "_iconIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("HideIcon", "hideIconIn", "HideIcon", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_hideIconInDataFetchStatus", "_hideIconInDataFetchStatus", "_hideIconInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = ((UBTConnectLibrary_ConnectPatterns_Button_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_IconText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("ButtonExtendedClass" in inputs) {
                this.variables.buttonExtendedClassIn = inputs.ButtonExtendedClass;
                if ("_buttonExtendedClassInDataFetchStatus" in inputs) {
                    this.variables._buttonExtendedClassInDataFetchStatus = inputs._buttonExtendedClassInDataFetchStatus;
                }

            }

            if ("IsDisabled" in inputs) {
                this.variables.isDisabledIn = inputs.IsDisabled;
                if ("_isDisabledInDataFetchStatus" in inputs) {
                    this.variables._isDisabledInDataFetchStatus = inputs._isDisabledInDataFetchStatus;
                }

            }

            if ("IsIconOnRight" in inputs) {
                this.variables.isIconOnRightIn = inputs.IsIconOnRight;
                if ("_isIconOnRightInDataFetchStatus" in inputs) {
                    this.variables._isIconOnRightInDataFetchStatus = inputs._isIconOnRightInDataFetchStatus;
                }

            }

            if ("ButtonText" in inputs) {
                this.variables.buttonTextIn = inputs.ButtonText;
                if ("_buttonTextInDataFetchStatus" in inputs) {
                    this.variables._buttonTextInDataFetchStatus = inputs._buttonTextInDataFetchStatus;
                }

            }

            if ("IconText_SpacingSize" in inputs) {
                this.variables.iconText_SpacingSizeIn = inputs.IconText_SpacingSize;
                if ("_iconText_SpacingSizeInDataFetchStatus" in inputs) {
                    this.variables._iconText_SpacingSizeInDataFetchStatus = inputs._iconText_SpacingSizeInDataFetchStatus;
                }

            }

            if ("TextExtendedClasses" in inputs) {
                this.variables.textExtendedClassesIn = inputs.TextExtendedClasses;
                if ("_textExtendedClassesInDataFetchStatus" in inputs) {
                    this.variables._textExtendedClassesInDataFetchStatus = inputs._textExtendedClassesInDataFetchStatus;
                }

            }

            if ("ButtonOptions" in inputs) {
                this.variables.buttonOptionsIn = inputs.ButtonOptions;
                if ("_buttonOptionsInDataFetchStatus" in inputs) {
                    this.variables._buttonOptionsInDataFetchStatus = inputs._buttonOptionsInDataFetchStatus;
                }

            }

            if ("IconId" in inputs) {
                this.variables.iconIdIn = inputs.IconId;
                if ("_iconIdInDataFetchStatus" in inputs) {
                    this.variables._iconIdInDataFetchStatus = inputs._iconIdInDataFetchStatus;
                }

            }

            if ("HideIcon" in inputs) {
                this.variables.hideIconIn = inputs.HideIcon;
                if ("_hideIconInDataFetchStatus" in inputs) {
                    this.variables._hideIconInDataFetchStatus = inputs._hideIconInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "CW_Common.Button");
});
define("UBTConnect_Utils.CW_Common.Button.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect_Utils.CW_Common.Button.mvc$model", "UBTConnect_Utils.CW_Common.Button.mvc$controller", "UBTConnect_Utils.clientVariables", "UBTConnectLibrary.ConnectPatterns.Button.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.model$ButtonOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$TextOptionsRec"], function(OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnectLibraryModel, React, OSView, UBTConnect_Utils_CW_Common_Button_mvc_model, UBTConnect_Utils_CW_Common_Button_mvc_controller, UBTConnect_UtilsClientVariables, UBTConnectLibrary_ConnectPatterns_Button_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view) {
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
        View.displayName = "CW_Common.Button";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_Button_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Utils_CW_Common_Button_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Utils_CW_Common_Button_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_ConnectPatterns_Button_mvc_view, {
                inputs: {
                    In_ButtonOptions: model.variables.buttonOptionsIn,
                    _in_ButtonOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._buttonOptionsInDataFetchStatus),
                    In_ExtendedClass: model.variables.buttonExtendedClassIn,
                    _in_ExtendedClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._buttonExtendedClassInDataFetchStatus),
                    In_IsDisabled: model.variables.isDisabledIn,
                    _in_IsDisabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isDisabledInDataFetchStatus)
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    event_OnClick$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Button Event_OnClick");
                            controller.buttonOnClick$Action(controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
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
                    content: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "osui-btn-loading__spinner-animation",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
                            inputs: {
                                Text: model.variables.buttonTextIn,
                                _textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._buttonTextInDataFetchStatus),
                                SpacingSize: model.variables.iconText_SpacingSizeIn,
                                _spacingSizeInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._iconText_SpacingSizeInDataFetchStatus),
                                ExtendedClasses: model.variables.textExtendedClassesIn,
                                _extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._textExtendedClassesInDataFetchStatus),
                                IsIconOnRight: model.variables.isIconOnRightIn,
                                _isIconOnRightInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isIconOnRightInDataFetchStatus)
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
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                icon: new PlaceholderContent(function() {
                                    return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                                        inputs: {
                                            In_Visible: !(model.variables.hideIconIn),
                                            _in_VisibleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hideIconInDataFetchStatus),
                                            In_IconId: model.variables.iconIdIn,
                                            _in_IconIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._iconIdInDataFetchStatus)
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
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.iconIdIn), asPrimitiveValue(model.variables._iconIdInDataFetchStatus), asPrimitiveValue(model.variables._hideIconInDataFetchStatus), asPrimitiveValue(model.variables.hideIconIn)]
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.iconIdIn), asPrimitiveValue(model.variables.hideIconIn), asPrimitiveValue(model.variables.isIconOnRightIn), asPrimitiveValue(model.variables.textExtendedClassesIn), asPrimitiveValue(model.variables.iconText_SpacingSizeIn), asPrimitiveValue(model.variables._iconIdInDataFetchStatus), asPrimitiveValue(model.variables._hideIconInDataFetchStatus), asPrimitiveValue(model.variables._isIconOnRightInDataFetchStatus), asPrimitiveValue(model.variables._textExtendedClassesInDataFetchStatus), asPrimitiveValue(model.variables._iconText_SpacingSizeInDataFetchStatus), asPrimitiveValue(model.variables._buttonTextInDataFetchStatus), asPrimitiveValue(model.variables.buttonTextIn)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnect_Utils.CW_Common.Button.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnectLibrary.model", "UBTConnect_Utils.languageResources", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.CW_Common.Button.mvc$debugger", "UBTConnectLibrary.model$ButtonOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$TextOptionsRec"], function(OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnectLibraryModel, UBTConnect_UtilsLanguageResources, UBTConnect_UtilsClientVariables, UBTConnect_Utils_CW_Common_Button_mvc_Debugger) {
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

        Controller.prototype.buttonOnClick$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:6MpcVSZdhkaV_2_NF3jPjA:/NRWebFlows.6MpcVSZdhkaV_2_NF3jPjA:sF3F3R6OE98GzSGAjT9Myw", "UBTConnect_Utils", "CW_Common", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:4HTxYbuvXkqiFhWS4DDSXg:/NRWebFlows.6MpcVSZdhkaV_2_NF3jPjA/NodesShownInESpaceTree.4HTxYbuvXkqiFhWS4DDSXg:GEAkQtNrMcDikunF5MHw2w", "UBTConnect_Utils", "Button", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:4HTxYbuvXkqiFhWS4DDSXg", callContext.id);
            OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:6MpcVSZdhkaV_2_NF3jPjA", callContext.id);
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
            return UBTConnect_UtilsController.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, UBTConnect_UtilsLanguageResources);
});

define("UBTConnect_Utils.CW_Common.Button.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "mmExYMknn0i+vQ0WnhbQ7g": {
            getter: function(varBag, idService) {
                return varBag.model.variables.buttonExtendedClassIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "CYtCC2b_W0CoF0r9RMH39Q": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isDisabledIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "yQnA7W_n80KisC7nDVWB4Q": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isIconOnRightIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "PrTP7XqR90WKC9wyM5+LnA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.buttonTextIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "JjmInNQjNkKSt4J+2+LQkg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.iconText_SpacingSizeIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "c8ty87sha0q5ojpXc0E8Jg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.textExtendedClassesIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "8rbYI0LHpEaDdMc8t8zzNg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.buttonOptionsIn;
            }
        },
        "h2LXOJF2wkWUFFCV49KlJw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.iconIdIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "F9W8aXSJRkyFdP8bt5fP3w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.hideIconIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "9OFOn8T5J0GCSbDgNB9Eug": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "Pggb3vfRbki1LztokneTNg": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Icon"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});