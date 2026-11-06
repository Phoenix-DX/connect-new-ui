define("UBTConnectLibrary.BasePatterns.CustomText.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.ConnectPatterns.HighlightSearch.mvc$model", "UBTConnectLibrary.ConnectPatterns.IconInline_Internal.mvc$model", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.controller$GetClasses_Text", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.controller$GetSpacingOptions", "UBTConnectLibrary.model$InlineIconRec"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_ConnectPatterns_HighlightSearch_mvcModel, UBTConnectLibrary_ConnectPatterns_IconInline_Internal_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("In_Text", "in_TextIn", "In_Text", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_TextInDataFetchStatus", "_in_TextInDataFetchStatus", "_in_TextInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_TextOptions", "in_TextOptionsIn", "In_TextOptions", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.TextOptionsRec());
                }, false, UBTConnectLibraryModel.TextOptionsRec),
                this.attr("_in_TextOptionsInDataFetchStatus", "_in_TextOptionsInDataFetchStatus", "_in_TextOptionsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_PaddingOptions", "in_PaddingOptionsIn", "In_PaddingOptions", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.SpacingOptionsRec());
                }, false, UBTConnectLibraryModel.SpacingOptionsRec),
                this.attr("_in_PaddingOptionsInDataFetchStatus", "_in_PaddingOptionsInDataFetchStatus", "_in_PaddingOptionsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_HighlightWords", "in_HighlightWordsIn", "In_HighlightWords", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_HighlightWordsInDataFetchStatus", "_in_HighlightWordsInDataFetchStatus", "_in_HighlightWordsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_HighlightOptions", "in_HighlightOptionsIn", "In_HighlightOptions", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.TextOptionsRec());
                }, false, UBTConnectLibraryModel.TextOptionsRec),
                this.attr("_in_HighlightOptionsInDataFetchStatus", "_in_HighlightOptionsInDataFetchStatus", "_in_HighlightOptionsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("ExtendedClasses", "extendedClassesIn", "ExtendedClasses", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_extendedClassesInDataFetchStatus", "_extendedClassesInDataFetchStatus", "_extendedClassesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("FitContent", "fitContentIn", "FitContent", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_fitContentInDataFetchStatus", "_fitContentInDataFetchStatus", "_fitContentInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("InJustifyText", "inJustifyTextIn", "InJustifyText", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_inJustifyTextInDataFetchStatus", "_inJustifyTextInDataFetchStatus", "_inJustifyTextInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("NoWrap", "noWrapIn", "NoWrap", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_noWrapInDataFetchStatus", "_noWrapInDataFetchStatus", "_noWrapInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("InlineIcon", "inlineIconIn", "InlineIcon", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.InlineIconRec());
                }, false, UBTConnectLibraryModel.InlineIconRec),
                this.attr("_inlineIconInDataFetchStatus", "_inlineIconInDataFetchStatus", "_inlineIconInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = (UBTConnectLibrary_ConnectPatterns_HighlightSearch_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_IconInline_Internal_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_Text" in inputs) {
                this.variables.in_TextIn = inputs.In_Text;
                if ("_in_TextInDataFetchStatus" in inputs) {
                    this.variables._in_TextInDataFetchStatus = inputs._in_TextInDataFetchStatus;
                }

            }

            if ("In_TextOptions" in inputs) {
                this.variables.in_TextOptionsIn = inputs.In_TextOptions;
                if ("_in_TextOptionsInDataFetchStatus" in inputs) {
                    this.variables._in_TextOptionsInDataFetchStatus = inputs._in_TextOptionsInDataFetchStatus;
                }

            }

            if ("In_PaddingOptions" in inputs) {
                this.variables.in_PaddingOptionsIn = inputs.In_PaddingOptions;
                if ("_in_PaddingOptionsInDataFetchStatus" in inputs) {
                    this.variables._in_PaddingOptionsInDataFetchStatus = inputs._in_PaddingOptionsInDataFetchStatus;
                }

            }

            if ("In_HighlightWords" in inputs) {
                this.variables.in_HighlightWordsIn = inputs.In_HighlightWords;
                if ("_in_HighlightWordsInDataFetchStatus" in inputs) {
                    this.variables._in_HighlightWordsInDataFetchStatus = inputs._in_HighlightWordsInDataFetchStatus;
                }

            }

            if ("In_HighlightOptions" in inputs) {
                this.variables.in_HighlightOptionsIn = inputs.In_HighlightOptions;
                if ("_in_HighlightOptionsInDataFetchStatus" in inputs) {
                    this.variables._in_HighlightOptionsInDataFetchStatus = inputs._in_HighlightOptionsInDataFetchStatus;
                }

            }

            if ("ExtendedClasses" in inputs) {
                this.variables.extendedClassesIn = inputs.ExtendedClasses;
                if ("_extendedClassesInDataFetchStatus" in inputs) {
                    this.variables._extendedClassesInDataFetchStatus = inputs._extendedClassesInDataFetchStatus;
                }

            }

            if ("FitContent" in inputs) {
                this.variables.fitContentIn = inputs.FitContent;
                if ("_fitContentInDataFetchStatus" in inputs) {
                    this.variables._fitContentInDataFetchStatus = inputs._fitContentInDataFetchStatus;
                }

            }

            if ("InJustifyText" in inputs) {
                this.variables.inJustifyTextIn = inputs.InJustifyText;
                if ("_inJustifyTextInDataFetchStatus" in inputs) {
                    this.variables._inJustifyTextInDataFetchStatus = inputs._inJustifyTextInDataFetchStatus;
                }

            }

            if ("NoWrap" in inputs) {
                this.variables.noWrapIn = inputs.NoWrap;
                if ("_noWrapInDataFetchStatus" in inputs) {
                    this.variables._noWrapInDataFetchStatus = inputs._noWrapInDataFetchStatus;
                }

            }

            if ("InlineIcon" in inputs) {
                this.variables.inlineIconIn = inputs.InlineIcon;
                if ("_inlineIconInDataFetchStatus" in inputs) {
                    this.variables._inlineIconInDataFetchStatus = inputs._inlineIconInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "BasePatterns.CustomText");
});
define("UBTConnectLibrary.BasePatterns.CustomText.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.HighlightSearch.mvc$view", "UBTConnectLibrary.ConnectPatterns.IconInline_Internal.mvc$view", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.controller$GetClasses_Text", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.controller$GetSpacingOptions", "UBTConnectLibrary.model$InlineIconRec"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_BasePatterns_CustomText_mvc_model, UBTConnectLibrary_BasePatterns_CustomText_mvc_controller, UBTConnectLibraryClientVariables, OSWidgets, UBTConnectLibrary_ConnectPatterns_HighlightSearch_mvc_view, UBTConnectLibrary_ConnectPatterns_IconInline_Internal_mvc_view) {
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
        View.displayName = "BasePatterns.CustomText";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_HighlightSearch_mvc_view, UBTConnectLibrary_ConnectPatterns_IconInline_Internal_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_BasePatterns_CustomText_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_BasePatterns_CustomText_mvc_controller;
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
                        var eventHandlerContext = callContext.clone();
                        return OS.Flow.tryFinally(function() {
                            var varBag = {};
                            controller.pushDebuggerContext(eventHandlerContext);

                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "BasePatterns/CustomText/Container onclick");
                            controller.clicked$Action(controller.callContext(eventHandlerContext));
                        }, function() {
                            controller.popDebuggerContext(eventHandlerContext);
                        });

                        ;
                    }
                },
                style: model.getCachedValue(idService.getId("AgomVlnJ8UmotMHrCCzjiA.Style"), function() {
                    return OutSystemsDebugger.handleFunctionCall(function() {
                        return UBTConnectLibraryController.default.formatClasses$Action(OutSystemsDebugger.handleFunctionCall(function() {
                            return UBTConnectLibraryController.default.formatClasses$Action(OutSystemsDebugger.handleFunctionCall(function() {
                                return UBTConnectLibraryController.default.formatClasses$Action(OutSystemsDebugger.handleFunctionCall(function() {
                                    return UBTConnectLibraryController.default.formatClasses$Action(OutSystemsDebugger.handleFunctionCall(function() {
                                        return UBTConnectLibraryController.default.formatClasses$Action(OutSystemsDebugger.handleFunctionCall(function() {
                                            return UBTConnectLibraryController.default.getClasses_Text$Action(model.variables.in_TextOptionsIn, callContext).classesOut;
                                        }, OS.DataTypes.DataTypes.Text, callContext.id), model.variables.extendedClassesIn, callContext).classesOutOut;
                                    }, OS.DataTypes.DataTypes.Text, callContext.id), ((model.variables.fitContentIn) ? ("ubt-with-fit-content") : ("")), callContext).classesOutOut;
                                }, OS.DataTypes.DataTypes.Text, callContext.id), OutSystemsDebugger.handleFunctionCall(function() {
                                    return UBTConnectLibraryController.default.getSpacingOptions$Action("padding", model.variables.in_PaddingOptionsIn, callContext).classesOut;
                                }, OS.DataTypes.DataTypes.Text, callContext.id), callContext).classesOutOut;
                            }, OS.DataTypes.DataTypes.Text, callContext.id), ((model.variables.inJustifyTextIn) ? ("text-justify") : ("")), callContext).classesOutOut;
                        }, OS.DataTypes.DataTypes.Text, callContext.id), ((model.variables.noWrapIn) ? ("text-no-wrap") : ("")), callContext).classesOutOut;
                    }, OS.DataTypes.DataTypes.Text, callContext.id);
                }, function() {
                    return model.variables.in_TextOptionsIn;
                }, function() {
                    return model.variables.extendedClassesIn;
                }, function() {
                    return model.variables.fitContentIn;
                }, function() {
                    return model.variables.in_PaddingOptionsIn;
                }, function() {
                    return model.variables.inJustifyTextIn;
                }, function() {
                    return model.variables.noWrapIn;
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_TextOptionsInDataFetchStatus, model.variables._extendedClassesInDataFetchStatus, model.variables._fitContentInDataFetchStatus, model.variables._in_PaddingOptionsInDataFetchStatus, model.variables._inJustifyTextInDataFetchStatus, model.variables._noWrapInDataFetchStatus)
            }, $if(((model.variables.in_HighlightWordsIn) !== ("")), false, this, function() {
                return [React.createElement(UBTConnectLibrary_ConnectPatterns_HighlightSearch_mvc_view, {
                    inputs: {
                        Text: model.variables.in_TextIn,
                        _textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_TextInDataFetchStatus),
                        SearchTerms: model.variables.in_HighlightWordsIn,
                        _searchTermsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HighlightWordsInDataFetchStatus),
                        StopWords: "and in",
                        InlineIcon: model.variables.inlineIconIn,
                        _inlineIconInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._inlineIconInDataFetchStatus),
                        HighlightClasses: model.getCachedValue(idService.getId("Ur1gPF28aEiybtK3ZTbyJQ.HighlightClasses"), function() {
                            return OutSystemsDebugger.handleFunctionCall(function() {
                                return UBTConnectLibraryController.default.getClasses_Text$Action(model.variables.in_HighlightOptionsIn, callContext).classesOut;
                            }, OS.DataTypes.DataTypes.Text, callContext.id);
                        }, function() {
                            return model.variables.in_HighlightOptionsIn;
                        }),
                        _highlightClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HighlightOptionsInDataFetchStatus)
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
                    _dependencies: []
                })];
            }, function() {
                return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconInline_Internal_mvc_view, {
                    inputs: {
                        InlineIcon: model.variables.inlineIconIn,
                        _inlineIconInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._inlineIconInDataFetchStatus)
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
                    _dependencies: []
                }), React.createElement(OSWidgets.Expression, {
                    gridProperties: {
                        marginLeft: "0"
                    },
                    value: model.variables.in_TextIn,
                    _idProps: {
                        service: idService,
                        uuid: "3"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_TextInDataFetchStatus)
                })];
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnectLibrary.BasePatterns.CustomText.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.BasePatterns.CustomText.mvc$debugger", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.controller$GetClasses_Text", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.controller$GetSpacingOptions", "UBTConnectLibrary.model$InlineIconRec"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_BasePatterns_CustomText_mvc_Debugger) {
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

        Controller.prototype.clicked$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:nUarfIVtc0ih3v4IkobvXA:/NRWebFlows.nUarfIVtc0ih3v4IkobvXA:vOjDm7VDpdsBscQEPpIuaQ", "UBTConnectLibrary", "BasePatterns", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:wECcFhHLv02ugxYDxNU9Gg:/NRWebFlows.nUarfIVtc0ih3v4IkobvXA/NodesShownInESpaceTree.wECcFhHLv02ugxYDxNU9Gg:yZ49BSWPuPOPIpRXQgc49A", "UBTConnectLibrary", "CustomText", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:wECcFhHLv02ugxYDxNU9Gg", callContext.id);
            OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:nUarfIVtc0ih3v4IkobvXA", callContext.id);
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

define("UBTConnectLibrary.BasePatterns.CustomText.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "_OWsgg2I3UurxupeLgL5LA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_TextIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "yulPRHlHAECjjaUx2bmt8g": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_TextOptionsIn;
            }
        },
        "snf2zEywTU6OKeUwL+KRdw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_PaddingOptionsIn;
            }
        },
        "cx02cdT2fUaquZtINkKHzA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_HighlightWordsIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "PWgbwpKiE0ejT9riL3Zzdg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_HighlightOptionsIn;
            }
        },
        "IduMu59qXEaNQY7HYk0j7A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.extendedClassesIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "ogqAZYFh8Ea6+aqCFpu32A": {
            getter: function(varBag, idService) {
                return varBag.model.variables.fitContentIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "qusnaadNbUi9a0VeU__dow": {
            getter: function(varBag, idService) {
                return varBag.model.variables.inJustifyTextIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "_ziKGObikUaxYbukvygZQw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.noWrapIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "MJdN4PGOwUuCnfjjGrK_wg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.inlineIconIn;
            }
        },
        "y2PMMb9snk2r7qJUwMU2jw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("If_HasHighlightWords"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});