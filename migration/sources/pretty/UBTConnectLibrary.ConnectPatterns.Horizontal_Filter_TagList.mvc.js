define("UBTConnectLibrary.ConnectPatterns.Horizontal_Filter_TagList.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnectLibrary.ConnectPatterns.TagToggle.mvc$model", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$TagList", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$TagRec"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, UBTConnectLibrary_ConnectPatterns_TagToggle_mvcModel) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("MainContainerClass", "mainContainerClassVar", "MainContainerClass", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "ubt-tag-list";
                }, false),
                this.attr("SelectedTagId", "selectedTagIdVar", "SelectedTagId", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("CurrentListIndex", "currentListIndexVar", "CurrentListIndex", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 0;
                }, false),
                this.attr("In_TagToggleList", "in_TagToggleListIn", "In_TagToggleList", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                    return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.TagList());
                }, false, UBTConnectLibraryModel.TagList),
                this.attr("_in_TagToggleListInDataFetchStatus", "_in_TagToggleListInDataFetchStatus", "_in_TagToggleListInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_IsSingleSelection", "in_IsSingleSelectionIn", "In_IsSingleSelection", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_IsSingleSelectionInDataFetchStatus", "_in_IsSingleSelectionInDataFetchStatus", "_in_IsSingleSelectionInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_IsMandatorySelection", "in_IsMandatorySelectionIn", "In_IsMandatorySelection", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_IsMandatorySelectionInDataFetchStatus", "_in_IsMandatorySelectionInDataFetchStatus", "_in_IsMandatorySelectionInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_HorizontalPadding", "in_HorizontalPaddingIn", "In_HorizontalPadding", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_in_HorizontalPaddingInDataFetchStatus", "_in_HorizontalPaddingInDataFetchStatus", "_in_HorizontalPaddingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("ExtendedClasses", "extendedClassesIn", "ExtendedClasses", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_extendedClassesInDataFetchStatus", "_extendedClassesInDataFetchStatus", "_extendedClassesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("isEnabled", "isEnabledIn", "isEnabled", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return true;
                }, false),
                this.attr("_isEnabledInDataFetchStatus", "_isEnabledInDataFetchStatus", "_isEnabledInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("In_TagsLoading", "in_TagsLoadingIn", "In_TagsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_in_TagsLoadingInDataFetchStatus", "_in_TagsLoadingInDataFetchStatus", "_in_TagsLoadingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                    Model._hasValidationWidgetsValue = ((UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_TagToggle_mvcModel.hasValidationWidgets);
                }

                return Model._hasValidationWidgetsValue;
            }
        });

        Model.prototype.setInputs = function(inputs) {
            if ("In_TagToggleList" in inputs) {
                this.variables.in_TagToggleListIn = inputs.In_TagToggleList;
                if ("_in_TagToggleListInDataFetchStatus" in inputs) {
                    this.variables._in_TagToggleListInDataFetchStatus = inputs._in_TagToggleListInDataFetchStatus;
                }

            }

            if ("In_IsSingleSelection" in inputs) {
                this.variables.in_IsSingleSelectionIn = inputs.In_IsSingleSelection;
                if ("_in_IsSingleSelectionInDataFetchStatus" in inputs) {
                    this.variables._in_IsSingleSelectionInDataFetchStatus = inputs._in_IsSingleSelectionInDataFetchStatus;
                }

            }

            if ("In_IsMandatorySelection" in inputs) {
                this.variables.in_IsMandatorySelectionIn = inputs.In_IsMandatorySelection;
                if ("_in_IsMandatorySelectionInDataFetchStatus" in inputs) {
                    this.variables._in_IsMandatorySelectionInDataFetchStatus = inputs._in_IsMandatorySelectionInDataFetchStatus;
                }

            }

            if ("In_HorizontalPadding" in inputs) {
                this.variables.in_HorizontalPaddingIn = inputs.In_HorizontalPadding;
                if ("_in_HorizontalPaddingInDataFetchStatus" in inputs) {
                    this.variables._in_HorizontalPaddingInDataFetchStatus = inputs._in_HorizontalPaddingInDataFetchStatus;
                }

            }

            if ("ExtendedClasses" in inputs) {
                this.variables.extendedClassesIn = inputs.ExtendedClasses;
                if ("_extendedClassesInDataFetchStatus" in inputs) {
                    this.variables._extendedClassesInDataFetchStatus = inputs._extendedClassesInDataFetchStatus;
                }

            }

            if ("isEnabled" in inputs) {
                this.variables.isEnabledIn = inputs.isEnabled;
                if ("_isEnabledInDataFetchStatus" in inputs) {
                    this.variables._isEnabledInDataFetchStatus = inputs._isEnabledInDataFetchStatus;
                }

            }

            if ("In_TagsLoading" in inputs) {
                this.variables.in_TagsLoadingIn = inputs.In_TagsLoading;
                if ("_in_TagsLoadingInDataFetchStatus" in inputs) {
                    this.variables._in_TagsLoadingInDataFetchStatus = inputs._in_TagsLoadingInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "ConnectPatterns.Horizontal_Filter_TagList");
});
define("UBTConnectLibrary.ConnectPatterns.Horizontal_Filter_TagList.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.Horizontal_Filter_TagList.mvc$model", "UBTConnectLibrary.ConnectPatterns.Horizontal_Filter_TagList.mvc$controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnectLibrary.ConnectPatterns.TagToggle.mvc$view", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$TagList", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$TagRec"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_Horizontal_Filter_TagList_mvc_model, UBTConnectLibrary_ConnectPatterns_Horizontal_Filter_TagList_mvc_controller, UBTConnectLibraryClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_ConnectPatterns_TagToggle_mvc_view) {
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
        View.displayName = "ConnectPatterns.Horizontal_Filter_TagList";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_ConnectPatterns_TagToggle_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_Horizontal_Filter_TagList_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_Horizontal_Filter_TagList_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                inputs: {
                    Options: model.getCachedValue(idService.getId("x+OwX4uXXk2PoQP9enNPtQ.Options"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                            rec.paddingSizeAttr = function() {
                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                rec.verticalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.extraSmall;
                                return rec;
                            }();
                            rec.displayOptionsAttr = function() {
                                var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
                                return rec;
                            }();
                            return rec;
                        }();
                    }),
                    ExtendedClasses: "horizontal-tabs-filter-container"
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
                    content: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                            inputs: {
                                Options: model.getCachedValue(idService.getId("JWvV1DGXSEOoi6F2OifvdA.Options"), function() {
                                    return function() {
                                        var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
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
                                    return [React.createElement(OSWidgets.Placeholder, {
                                        align: /*Default*/ 0,
                                        content: _this.props.placeholders.filter,
                                        style: "horizontal-tabs-filter",
                                        _idProps: {
                                            service: idService,
                                            name: "Filter"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })];
                                })
                            }
                        }), React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
                            inputs: {
                                In_IsLoading: model.variables.in_TagsLoadingIn,
                                _in_IsLoadingInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_TagsLoadingInDataFetchStatus)
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
                            placeholders: {
                                placeholder_LoadingSection: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.List, {
                                        animateItems: true,
                                        extendedProperties: {
                                            "disable-virtualization": "True"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mode: /*Default*/ 0,
                                        source: model.variables.in_TagToggleListIn,
                                        style: model.getCachedValue(idService.getId("kL5fqGW4oESuMsqWYv_Ysw.Style"), function() {
                                            return (OutSystemsDebugger.handleFunctionCall(function() {
                                                return UBTConnectLibraryController.default.formatClasses$Action(OutSystemsDebugger.handleFunctionCall(function() {
                                                    return UBTConnectLibraryController.default.formatClasses$Action("list list-group list-horizontal--gap-xs horizontal-tabs-list", model.variables.mainContainerClassVar, callContext).classesOutOut;
                                                }, OS.DataTypes.DataTypes.Text, callContext.id), model.variables.extendedClassesIn, callContext).classesOutOut;
                                            }, OS.DataTypes.DataTypes.Text, callContext.id) + ((((model.variables.in_HorizontalPaddingIn) !== (OS.BuiltinFunctions.nullTextIdentifier()))) ? ((" padding-x-" + model.variables.in_HorizontalPaddingIn)) : ("")));
                                        }, function() {
                                            return model.variables.mainContainerClassVar;
                                        }, function() {
                                            return model.variables.extendedClassesIn;
                                        }, function() {
                                            return model.variables.in_HorizontalPaddingIn;
                                        }),
                                        tag: "div",
                                        _idProps: {
                                            service: idService,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_TagToggleListInDataFetchStatus),
                                        style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassesInDataFetchStatus, model.variables._in_HorizontalPaddingInDataFetchStatus),
                                        placeholders: {
                                            content: new IteratorPlaceholderContent(function(idService, callContext) {
                                                return [React.createElement(UBTConnectLibrary_ConnectPatterns_TagToggle_mvc_view, {
                                                    inputs: {
                                                        Tag: model.variables.in_TagToggleListIn.getCurrent(callContext.iterationContext),
                                                        _tagInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_TagToggleListInDataFetchStatus),
                                                        isEnabled: (model.variables.isEnabledIn && model.variables.in_TagToggleListIn.getCurrent(callContext.iterationContext).enabledAttr),
                                                        _isEnabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isEnabledInDataFetchStatus, model.variables._in_TagToggleListInDataFetchStatus)
                                                    },
                                                    events: {
                                                        _handleError: function(ex) {
                                                            controller.handleError(ex);
                                                        },
                                                        event_Click$Action: function(event_IsSelectedIn) {
                                                            return Promise.resolve().then(function() {
                                                                var eventHandlerContext = callContext.clone();
                                                                return OS.Flow.tryFinally(function() {
                                                                    var varBag = {};
                                                                    controller.pushDebuggerContext(eventHandlerContext);

                                                                    OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/TagToggle Event_Click");
                                                                    return controller.tagToggleToggle$Action(event_IsSelectedIn, model.variables.in_TagToggleListIn.getCurrentRowNumber(callContext.iterationContext), model.variables.in_TagToggleListIn.getCurrent(callContext.iterationContext).enabledAttr, controller.callContext(eventHandlerContext));
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
                                                        uuid: "5",
                                                        alias: "4"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    _dependencies: []
                                                })];
                                            }, callContext, idService, "1")
                                        },
                                        _dependencies: [asPrimitiveValue(model.variables.isEnabledIn), asPrimitiveValue(model.variables._isEnabledInDataFetchStatus), asPrimitiveValue(model.variables._in_TagToggleListInDataFetchStatus)]
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.isEnabledIn), asPrimitiveValue(model.variables.in_HorizontalPaddingIn), asPrimitiveValue(model.variables.extendedClassesIn), asPrimitiveValue(model.variables.mainContainerClassVar), asPrimitiveValue(model.variables._isEnabledInDataFetchStatus), asPrimitiveValue(model.variables._in_HorizontalPaddingInDataFetchStatus), asPrimitiveValue(model.variables._extendedClassesInDataFetchStatus), asPrimitiveValue(model.variables._in_TagToggleListInDataFetchStatus), asPrimitiveValue(model.variables.in_TagToggleListIn)]
                        })];
                    })
                }
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnectLibrary.ConnectPatterns.Horizontal_Filter_TagList.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectPatterns.Horizontal_Filter_TagList.mvc$debugger", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$TagList", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$TagRec"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectPatterns_Horizontal_Filter_TagList_mvc_Debugger) {
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
        Controller.prototype._tagToggleToggle$Action = function(isSelectedIn, listIndexIn, isTagEnabledIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("TagToggleToggle");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("UBTConnectLibrary.ConnectPatterns.Horizontal_Filter_TagList.TagToggleToggle$vars"))());
            vars.value.isSelectedInLocal = isSelectedIn;
            vars.value.listIndexInLocal = listIndexIn;
            vars.value.isTagEnabledInLocal = isTagEnabledIn;
            var listFilter_SelectedVar = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.vars = vars;
            varBag.listFilter_SelectedVar = listFilter_SelectedVar;
            OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:3xfCSylswUOt7smX596+Xg:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.2Xb5i3ZENEqPz+9FJSmdVA/ClientActions.3xfCSylswUOt7smX596+Xg:JIe1WbVj69du8CyqNkxXWA", "UBTConnectLibrary", "TagToggleToggle", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:TtW3MSkbDkSxVnyQVbS1Zg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                return OS.Flow.executeSequence(function() {
                    if ((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:M2RSYH5y8kqpcyGBqCIk2w", callContext.id) && (model.variables.in_IsSingleSelectionIn && (vars.value.listIndexInLocal === model.variables.currentListIndexVar)))) {
                        OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:g7KlVYZVGUmO0KWrTr9Glg", callContext.id);
                    } else {
                        OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:TqaskrbfnEKjfno4uOm0og", callContext.id);
                        // CurrentListIndex = ListIndex
                        model.variables.currentListIndexVar = vars.value.listIndexInLocal;
                        return OS.Flow.executeSequence(function() {
                            if ((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:tCRuWdgn3ECzAdjLhSVYsQ", callContext.id) && vars.value.isTagEnabledInLocal)) {
                                if ((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Px8HFpWhmE+uzn_ckBWr5A", callContext.id) && vars.value.isSelectedInLocal)) {
                                    // Is mandatory selection?
                                    if ((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:lXrQx4RYvkeLjQRb9fOnUQ", callContext.id) && model.variables.in_IsMandatorySelectionIn)) {
                                        OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:QFqv2u0GhEym9nq_eHZzlg", callContext.id);
                                        // Execute Action: ListFilter_Selected
                                        listFilter_SelectedVar.value = OS.SystemActions.listFilter(model.variables.in_TagToggleListIn, function(p) {
                                            return p.isSelectedAttr;
                                        }, callContext);

                                        // Has more than 1 selected tag?
                                        if ((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:AnIQF2_GEkyXlqYFEKV6kQ", callContext.id) && !((listFilter_SelectedVar.value.filteredListOut.length > 1)))) {
                                            OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:iRJVbPXDzke05kG0MRAxvQ", callContext.id);
                                            return OS.Flow.returnAsync();

                                        }

                                    }

                                }

                                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:0YozuPq3GUSaKwa+J2ps8w", callContext.id);
                                // In_TagToggleList[ListIndex].IsSelected = notIsSelected
                                model.variables.in_TagToggleListIn.getItem(vars.value.listIndexInLocal).isSelectedAttr = !(vars.value.isSelectedInLocal);
                                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:0YozuPq3GUSaKwa+J2ps8w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                                // SelectedTagId = In_TagToggleList[ListIndex].Identifier
                                model.variables.selectedTagIdVar = model.variables.in_TagToggleListIn.getItem(vars.value.listIndexInLocal).identifierAttr;
                                // Single selection only?
                                if ((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:xZ4QLGmLJEiqubmKfZF+3A", callContext.id) && (model.variables.in_IsSingleSelectionIn && model.variables.in_TagToggleListIn.getCurrent(callContext.iterationContext).isSelectedAttr))) {
                                    // Foreach In_TagToggleList
                                    callContext.iterationContext.registerIterationStart(model.variables.in_TagToggleListIn);
                                    try {
                                        var in_TagToggleListIterator = callContext.iterationContext.getIterator(model.variables.in_TagToggleListIn);
                                        var in_TagToggleListIndex = 0;
                                        while ((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:riLQvSs97UKPea1iqK4otQ", callContext.id) && (in_TagToggleListIndex < model.variables.in_TagToggleListIn.length))) {
                                            in_TagToggleListIterator.currentRowNumber = in_TagToggleListIndex;
                                            if ((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:10VKzodAxUuB2RdHr7slQg", callContext.id) && ((model.variables.in_TagToggleListIn.getItem(in_TagToggleListIndex.valueOf()).identifierAttr) !== (model.variables.selectedTagIdVar)))) {
                                                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:3JyU4Som00ywkW4HMJjX7A", callContext.id);
                                                // In_TagToggleList.Current.IsSelected = False
                                                model.variables.in_TagToggleListIn.getItem(in_TagToggleListIndex.valueOf()).isSelectedAttr = false;
                                            }

                                            in_TagToggleListIndex++;
                                        }

                                    } finally {
                                        callContext.iterationContext.registerIterationEnd(model.variables.in_TagToggleListIn);
                                    }

                                }

                                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:3T4+Qu7qjUSqT6Muw_oe5w", callContext.id);
                                // Trigger Event: Changed
                                return controller.changed$Action(model.variables.in_TagToggleListIn, callContext).then(function() {
                                    OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:JuKbqqFM9E22SEgE7Ds58g", callContext.id);
                                });
                            } else {
                                OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:9nw+vlZcKkazUqqSAQ1vsg", callContext.id);
                            }

                        });
                    }

                });
            }).then(function(res) {
                OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:3xfCSylswUOt7smX596+Xg", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:3xfCSylswUOt7smX596+Xg", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("UBTConnectLibrary.ConnectPatterns.Horizontal_Filter_TagList.TagToggleToggle$vars", [{
            name: "IsSelected",
            attrName: "isSelectedInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "ListIndex",
            attrName: "listIndexInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Integer,
            defaultValue: function() {
                return 0;
            }
        }, {
            name: "IsTagEnabled",
            attrName: "isTagEnabledInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);

        Controller.prototype.tagToggleToggle$Action = function(isSelectedIn, listIndexIn, isTagEnabledIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._tagToggleToggle$Action, callContext, isSelectedIn, listIndexIn, isTagEnabledIn);

        };
        Controller.prototype.changed$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g:Y06DhYqVkffzqTnycnKUGw", "UBTConnectLibrary", "ConnectPatterns", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:2Xb5i3ZENEqPz+9FJSmdVA:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.2Xb5i3ZENEqPz+9FJSmdVA:FwpnxKvUTQoOvhOqIk1uLg", "UBTConnectLibrary", "Horizontal_Filter_TagList", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:2Xb5i3ZENEqPz+9FJSmdVA", callContext.id);
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

define("UBTConnectLibrary.ConnectPatterns.Horizontal_Filter_TagList.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "qBjxbJfsI020rpcKFt9vEQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isSelectedInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "tgTLHtZq0U2b4OuFVNkUzQ": {
            getter: function(varBag, idService) {
                return varBag.vars.value.listIndexInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "9KQWrq3WW0iYf+hPate60Q": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isTagEnabledInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "QFqv2u0GhEym9nq_eHZzlg": {
            getter: function(varBag, idService) {
                return varBag.listFilter_SelectedVar.value;
            }
        },
        "jSxDZC4LhU6Q8iepVvrHxg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.mainContainerClassVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "A4msAMX2DUWIYkbBWkwJaw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.selectedTagIdVar;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "hpHMdhOAg0S_W6Myzwje4w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.currentListIndexVar;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "fFk6k44p6UaVbj1hE5UtzQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_TagToggleListIn;
            }
        },
        "BrhwMwPmNE2DdSOSape+UA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_IsSingleSelectionIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "HkTuja2glE6VkpjbyRzEJg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_IsMandatorySelectionIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "RoVM7MOTtEuVVFY678VqEA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_HorizontalPaddingIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "exQQw9BNpEKXHztvVRfcjA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.extendedClassesIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "hJbsQVtNgk6V4+sefvXwmw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isEnabledIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "plhZOQRPlEe2Qd6p7Ba4iQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.in_TagsLoadingIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "mpgYfRVHJECc8Ujw2AqIjw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "1Lgsp3d_t0Kfrvidxu7QaQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        },
        "06PYxqjoY02SH_ChFT886Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Filter"));
                })(varBag.model, idService);
            }
        },
        "LzPp_7GDdkmTbylrpyNh6Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});