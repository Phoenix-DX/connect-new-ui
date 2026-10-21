define("UBTConnectLibrary.ConnectCorePatterns.NonMember_ListItem.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.BasePatterns.Columns_Three.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibrary_BasePatterns_Columns_Three_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("Title", "titleIn", "Title", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("isEnabled", "isEnabledIn", "isEnabled", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return true;
                }, false),
                this.attr("_isEnabledInDataFetchStatus", "_isEnabledInDataFetchStatus", "_isEnabledInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("DeceasedCaption", "deceasedCaptionIn", "DeceasedCaption", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_deceasedCaptionInDataFetchStatus", "_deceasedCaptionInDataFetchStatus", "_deceasedCaptionInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("LifeCycleText_Italic", "lifeCycleText_ItalicIn", "LifeCycleText_Italic", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_lifeCycleText_ItalicInDataFetchStatus", "_lifeCycleText_ItalicInDataFetchStatus", "_lifeCycleText_ItalicInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("MarriedCaption", "marriedCaptionIn", "MarriedCaption", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_marriedCaptionInDataFetchStatus", "_marriedCaptionInDataFetchStatus", "_marriedCaptionInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("MarriedPartnerTakenText", "marriedPartnerTakenTextIn", "MarriedPartnerTakenText", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_marriedPartnerTakenTextInDataFetchStatus", "_marriedPartnerTakenTextInDataFetchStatus", "_marriedPartnerTakenTextInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("MarriageHighlightText", "marriageHighlightTextIn", "MarriageHighlightText", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_marriageHighlightTextInDataFetchStatus", "_marriageHighlightTextInDataFetchStatus", "_marriageHighlightTextInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = (UBTConnectLibrary_BasePatterns_Columns_Three_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("Title" in inputs) {
                this.variables.titleIn = inputs.Title;
                if ("_titleInDataFetchStatus" in inputs) {
                    this.variables._titleInDataFetchStatus = inputs._titleInDataFetchStatus;
                }

            }

            if ("isEnabled" in inputs) {
                this.variables.isEnabledIn = inputs.isEnabled;
                if ("_isEnabledInDataFetchStatus" in inputs) {
                    this.variables._isEnabledInDataFetchStatus = inputs._isEnabledInDataFetchStatus;
                }

            }

            if ("DeceasedCaption" in inputs) {
                this.variables.deceasedCaptionIn = inputs.DeceasedCaption;
                if ("_deceasedCaptionInDataFetchStatus" in inputs) {
                    this.variables._deceasedCaptionInDataFetchStatus = inputs._deceasedCaptionInDataFetchStatus;
                }

            }

            if ("LifeCycleText_Italic" in inputs) {
                this.variables.lifeCycleText_ItalicIn = inputs.LifeCycleText_Italic;
                if ("_lifeCycleText_ItalicInDataFetchStatus" in inputs) {
                    this.variables._lifeCycleText_ItalicInDataFetchStatus = inputs._lifeCycleText_ItalicInDataFetchStatus;
                }

            }

            if ("MarriedCaption" in inputs) {
                this.variables.marriedCaptionIn = inputs.MarriedCaption;
                if ("_marriedCaptionInDataFetchStatus" in inputs) {
                    this.variables._marriedCaptionInDataFetchStatus = inputs._marriedCaptionInDataFetchStatus;
                }

            }

            if ("MarriedPartnerTakenText" in inputs) {
                this.variables.marriedPartnerTakenTextIn = inputs.MarriedPartnerTakenText;
                if ("_marriedPartnerTakenTextInDataFetchStatus" in inputs) {
                    this.variables._marriedPartnerTakenTextInDataFetchStatus = inputs._marriedPartnerTakenTextInDataFetchStatus;
                }

            }

            if ("MarriageHighlightText" in inputs) {
                this.variables.marriageHighlightTextIn = inputs.MarriageHighlightText;
                if ("_marriageHighlightTextInDataFetchStatus" in inputs) {
                    this.variables._marriageHighlightTextInDataFetchStatus = inputs._marriageHighlightTextInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "ConnectCorePatterns.NonMember_ListItem");
});
define("UBTConnectLibrary.ConnectCorePatterns.NonMember_ListItem.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectCorePatterns.NonMember_ListItem.mvc$model", "UBTConnectLibrary.ConnectCorePatterns.NonMember_ListItem.mvc$controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.BasePatterns.Columns_Three.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectCorePatterns_NonMember_ListItem_mvc_model, UBTConnectLibrary_ConnectCorePatterns_NonMember_ListItem_mvc_controller, UBTConnectLibraryClientVariables, UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_CustomText_mvc_view) {
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
        View.displayName = "ConnectCorePatterns.NonMember_ListItem";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectCorePatterns_NonMember_ListItem_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectCorePatterns_NonMember_ListItem_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, {
                inputs: {
                    ColumnOptions: model.getCachedValue(idService.getId("DvvYRrFtAECQ71KXEJk9bA.ColumnOptions"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
                            rec.columnBehaviourAttr = UBTConnectLibraryModel.staticEntities.uBT_ColumnBehaviour.expandMiddle;
                            rec.spacingSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.base;
                            rec.verticalAlignAttr = UBTConnectLibraryModel.staticEntities.uBT_VerticalAlign.center;
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
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    left: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedEvents: {
                                onClick: function() {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return OS.Flow.tryFinally(function() {
                                            var varBag = {};
                                            controller.pushDebuggerContext(eventHandlerContext);

                                            OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/NonMember_ListItem/Container onclick");
                                            return controller.onClick$Action(controller.callContext(eventHandlerContext));
                                        }, function() {
                                            controller.popDebuggerContext(eventHandlerContext);
                                        });
                                    });;
                                }
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.placeholder_Left,
                            _idProps: {
                                service: idService,
                                name: "Placeholder_Left"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))];
                    }),
                    middle: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedEvents: {
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    return OS.Flow.tryFinally(function() {
                                        var varBag = {};
                                        controller.pushDebuggerContext(eventHandlerContext);

                                        OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/NonMember_ListItem/Container onclick");
                                        controller.onClickPerson$Action(controller.callContext(eventHandlerContext));
                                    }, function() {
                                        controller.popDebuggerContext(eventHandlerContext);
                                    });

                                    ;
                                }
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                            inputs: {
                                In_Text: model.variables.titleIn,
                                _in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleInDataFetchStatus),
                                In_TextOptions: model.getCachedValue(idService.getId("rxK29SUNdEG3LjA27vvWHQ.In_TextOptions"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                        rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral9;
                                        rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.base;
                                        rec.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.semiBold;
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
                                uuid: "5",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            visible: ((model.variables.deceasedCaptionIn) !== ("")),
                            _idProps: {
                                service: idService,
                                uuid: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._deceasedCaptionInDataFetchStatus)
                        }, React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                            inputs: {
                                In_TextOptions: model.getCachedValue(idService.getId("7ifVHiP6RkKbrfcNc2ND_A.In_TextOptions"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                        rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral7;
                                        rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.extraSmall;
                                        rec.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.regular;
                                        rec.isItalicAttr = model.variables.lifeCycleText_ItalicIn;
                                        return rec;
                                    }();
                                }, function() {
                                    return model.variables.lifeCycleText_ItalicIn;
                                }),
                                _in_TextOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._lifeCycleText_ItalicInDataFetchStatus),
                                In_Text: model.variables.deceasedCaptionIn,
                                _in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._deceasedCaptionInDataFetchStatus)
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
                                uuid: "7",
                                alias: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            visible: ((model.variables.marriedCaptionIn) !== ("")),
                            _idProps: {
                                service: idService,
                                uuid: "8"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._marriedCaptionInDataFetchStatus)
                        }, React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                            inputs: {
                                In_TextOptions: model.getCachedValue(idService.getId("HpRumpoVbkqqkRDQHxlYvg.In_TextOptions"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                        rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.cyanDarkest;
                                        rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.extraSmall;
                                        return rec;
                                    }();
                                }),
                                In_Text: model.variables.marriedCaptionIn,
                                _in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._marriedCaptionInDataFetchStatus),
                                In_HighlightOptions: model.getCachedValue(idService.getId("HpRumpoVbkqqkRDQHxlYvg.In_HighlightOptions"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                        rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.cyanDarkest;
                                        rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.extraSmall;
                                        rec.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.semiBold;
                                        return rec;
                                    }();
                                }),
                                In_HighlightWords: model.variables.marriageHighlightTextIn,
                                _in_HighlightWordsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._marriageHighlightTextInDataFetchStatus)
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
                                uuid: "9",
                                alias: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }), $if(((model.variables.marriedPartnerTakenTextIn) !== ("")), false, this, function() {
                            return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
                                inputs: {
                                    In_Text: model.variables.marriedPartnerTakenTextIn,
                                    _in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._marriedPartnerTakenTextInDataFetchStatus),
                                    In_TextOptions: model.getCachedValue(idService.getId("ayjk7Aoejkagw7H1Aa5aTg.In_TextOptions"), function() {
                                        return function() {
                                            var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                            rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.cyanDarkest;
                                            rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.extraSmall;
                                            rec.isItalicAttr = true;
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
                                    alias: "5"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            })];
                        }, function() {
                            return [];
                        })))];
                    }),
                    right: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.actions,
                            _idProps: {
                                service: idService,
                                name: "Actions"
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
define("UBTConnectLibrary.ConnectCorePatterns.NonMember_ListItem.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectCorePatterns.NonMember_ListItem.mvc$debugger", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectCorePatterns_NonMember_ListItem_mvc_Debugger) {
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
        Controller.prototype._onClick$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnClick");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:cRgV8TgyFk+5UsapfadMpA:/NRWebFlows.7WP6eMpZLUWcKuZ3c_pmbg/NodesShownInESpaceTree.dNcbndXdxEyeQNZgJooP2g/ClientActions.cRgV8TgyFk+5UsapfadMpA:E0px2hjvAN7xidtGbuEcqg", "UBTConnectLibrary", "OnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:4Wz4YjBLH0q7JxWwm12MwA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:qcR81yoSWki9QUrA+SgONQ", callContext.id) && model.variables.isEnabledIn)) {
                        OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:VtAAN1Hwc0+lyA37+u3q+g", callContext.id);
                        // Trigger Event: OnClickPerson
                        return controller.onClickPerson$Action(callContext).then(function() {
                            OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:UWJUb6_lPUyuaqNZUUCDig", callContext.id);
                        });
                    } else {
                        OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:UWJUb6_lPUyuaqNZUUCDig", callContext.id);
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:cRgV8TgyFk+5UsapfadMpA", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:cRgV8TgyFk+5UsapfadMpA", callContext.id);
                throw ex;

            });
        };

        Controller.prototype.onClick$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onClick$Action, callContext);

        };
        Controller.prototype.onClickPerson$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:7WP6eMpZLUWcKuZ3c_pmbg:/NRWebFlows.7WP6eMpZLUWcKuZ3c_pmbg:oyDD4nRcBfstlKKpUR3Bug", "UBTConnectLibrary", "ConnectCorePatterns", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:dNcbndXdxEyeQNZgJooP2g:/NRWebFlows.7WP6eMpZLUWcKuZ3c_pmbg/NodesShownInESpaceTree.dNcbndXdxEyeQNZgJooP2g:d2nHJODxVGMRb1z1BrUVew", "UBTConnectLibrary", "NonMember_ListItem", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:dNcbndXdxEyeQNZgJooP2g", callContext.id);
            OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:7WP6eMpZLUWcKuZ3c_pmbg", callContext.id);
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

define("UBTConnectLibrary.ConnectCorePatterns.NonMember_ListItem.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "K9YXq3EX306VUtYsXekRFQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.titleIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "dIBPFmjNJUKaQ_P8hgUOqg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isEnabledIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "Nr7Cy+qkJkmEraSng1JFLA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.deceasedCaptionIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "h83gWPHfykCCJLgkyT9icQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.lifeCycleText_ItalicIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "Em1xbmBKDEeVcZNeds6PWg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.marriedCaptionIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "9pHQNDk3g0aKwuGZsvWh+w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.marriedPartnerTakenTextIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "sVKUhUTjpkWHpQeL0f8BDA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.marriageHighlightTextIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "aRs+woDOn0SKl2us9PvnEQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Left"));
                })(varBag.model, idService);
            }
        },
        "MJbIigS+tkOuBuLSMN+uWw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_Left"));
                })(varBag.model, idService);
            }
        },
        "zunjyVGKnk+jDA78++shGw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Middle"));
                })(varBag.model, idService);
            }
        },
        "I77gLp1mGkSspLu6S4T9Zw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Right"));
                })(varBag.model, idService);
            }
        },
        "KWvFs0wgNEuYokFqY0XUsQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Actions"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});