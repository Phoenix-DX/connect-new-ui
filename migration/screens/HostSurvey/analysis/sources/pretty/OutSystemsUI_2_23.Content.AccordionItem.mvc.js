define("OutSystemsUI_2_23.Content.AccordionItem.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.model$AccordionItem_InternalConfigsRec", "OutSystemsUI_2_23.controller$AccordionItemDestroy", "OutSystemsUI_2_23.controller$AccordionItemChangeTextProperty", "OutSystemsUI_2_23.controller$AccordionItemChangeBooleanProperty", "OutSystemsUI_2_23.controller$AccordionItemInitialize", "OutSystemsUI_2_23.controller$LogEvent", "OutSystemsUI_2_23.controller$GenerateUniqueId", "OutSystemsUI_2_23.controller$AccordionItemCreate", "OutSystemsUI_2_23.controller$AccordionItemRegisterCallback"], function(OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("InternalConfigs", "internalConfigsVar", "InternalConfigs", true, false, OS.DataTypes.DataTypes.Record, function() {
                    return OS.DataTypes.ImmutableBase.getData(new OutSystemsUI_2_23Model.AccordionItem_InternalConfigsRec());
                }, false, OutSystemsUI_2_23Model.AccordionItem_InternalConfigsRec),
                this.attr("StartsExpanded", "startsExpandedIn", "StartsExpanded", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_startsExpandedInDataFetchStatus", "_startsExpandedInDataFetchStatus", "_startsExpandedInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("Icon", "iconIn", "Icon", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return OutSystemsUI_2_23Model.staticEntities.accordionIconType.caret;
                }, false),
                this.attr("_iconInDataFetchStatus", "_iconInDataFetchStatus", "_iconInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("IconPosition", "iconPositionIn", "IconPosition", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return OutSystemsUI_2_23Model.staticEntities.accordionIconPosition.right;
                }, false),
                this.attr("_iconPositionInDataFetchStatus", "_iconPositionInDataFetchStatus", "_iconPositionInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("IsDisabled", "isDisabledIn", "IsDisabled", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_isDisabledInDataFetchStatus", "_isDisabledInDataFetchStatus", "_isDisabledInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            if ("StartsExpanded" in inputs) {
                this.variables.startsExpandedIn = inputs.StartsExpanded;
                if ("_startsExpandedInDataFetchStatus" in inputs) {
                    this.variables._startsExpandedInDataFetchStatus = inputs._startsExpandedInDataFetchStatus;
                }

            }

            if ("Icon" in inputs) {
                this.variables.iconIn = inputs.Icon;
                if ("_iconInDataFetchStatus" in inputs) {
                    this.variables._iconInDataFetchStatus = inputs._iconInDataFetchStatus;
                }

            }

            if ("IconPosition" in inputs) {
                this.variables.iconPositionIn = inputs.IconPosition;
                if ("_iconPositionInDataFetchStatus" in inputs) {
                    this.variables._iconPositionInDataFetchStatus = inputs._iconPositionInDataFetchStatus;
                }

            }

            if ("IsDisabled" in inputs) {
                this.variables.isDisabledIn = inputs.IsDisabled;
                if ("_isDisabledInDataFetchStatus" in inputs) {
                    this.variables._isDisabledInDataFetchStatus = inputs._isDisabledInDataFetchStatus;
                }

            }

            if ("ExtendedClass" in inputs) {
                this.variables.extendedClassIn = inputs.ExtendedClass;
                if ("_extendedClassInDataFetchStatus" in inputs) {
                    this.variables._extendedClassInDataFetchStatus = inputs._extendedClassInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "Content.AccordionItem");
});
define("OutSystemsUI_2_23.Content.AccordionItem.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI_2_23.Content.AccordionItem.mvc$model", "OutSystemsUI_2_23.Content.AccordionItem.mvc$controller", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.model$AccordionItem_InternalConfigsRec", "OutSystemsUI_2_23.controller$AccordionItemDestroy", "OutSystemsUI_2_23.controller$AccordionItemChangeTextProperty", "OutSystemsUI_2_23.controller$AccordionItemChangeBooleanProperty", "OutSystemsUI_2_23.controller$AccordionItemInitialize", "OutSystemsUI_2_23.controller$LogEvent", "OutSystemsUI_2_23.controller$GenerateUniqueId", "OutSystemsUI_2_23.controller$AccordionItemCreate", "OutSystemsUI_2_23.controller$AccordionItemRegisterCallback"], function(OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, OutSystemsUI_2_23_Content_AccordionItem_mvc_model, OutSystemsUI_2_23_Content_AccordionItem_mvc_controller, OSWidgets) {
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
        View.displayName = "Content.AccordionItem";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/OutSystemsUI_2_23.OutSystemsUI.js"];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return OutSystemsUI_2_23_Content_AccordionItem_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return OutSystemsUI_2_23_Content_AccordionItem_mvc_controller;
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
                extendedProperties: {
                    name: model.variables.internalConfigsVar.uniqueIdAttr
                },
                style: "osui-accordion-item",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "AccordionItem"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "osui-accordion-item__title",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "TitleWrapper"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.title,
                style: "osui-accordion-item__title__placeholder",
                _idProps: {
                    service: idService,
                    name: "Title"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "osui-accordion-item__icon",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.customIcon,
                style: "osui-accordion-item__icon placeholder-empty",
                _idProps: {
                    service: idService,
                    name: "CustomIcon"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), $if(false, false, this, function() {
                return [];
            }, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    style: "osui-accordion-item__content",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "ContentWrapper"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Placeholder, {
                    align: /*Default*/ 0,
                    content: _this.props.placeholders.content,
                    _idProps: {
                        service: idService,
                        name: "Content"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }))];
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("OutSystemsUI_2_23.Content.AccordionItem.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.languageResources", "OutSystemsUI_2_23.Content.AccordionItem.mvc$translationsResources", "OutSystemsUI_2_23.Content.AccordionItem.mvc$debugger", "OutSystemsUI_2_23.Content.AccordionItem.mvc$controller.RegisterCallbacks.GetActionReferenceJS", "OutSystemsUI_2_23.model$AccordionItem_InternalConfigsRec", "OutSystemsUI_2_23.controller$AccordionItemDestroy", "OutSystemsUI_2_23.controller$AccordionItemChangeTextProperty", "OutSystemsUI_2_23.controller$AccordionItemChangeBooleanProperty", "OutSystemsUI_2_23.controller$AccordionItemInitialize", "OutSystemsUI_2_23.controller$LogEvent", "OutSystemsUI_2_23.controller$GenerateUniqueId", "OutSystemsUI_2_23.controller$AccordionItemCreate", "OutSystemsUI_2_23.controller$AccordionItemRegisterCallback"], function(OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, OutSystemsUI_2_23LanguageResources, OutSystemsUI_2_23_Content_AccordionItem_mvc_TranslationsResources, OutSystemsUI_2_23_Content_AccordionItem_mvc_Debugger, OutSystemsUI_2_23_Content_AccordionItem_mvc_controller_RegisterCallbacks_GetActionReferenceJS) {
    var OS = OutSystems.Internal;
    var Controller = (function(_super) {
        __extends(Controller, _super);

        function Controller() {
            _super.apply(this, arguments);
            var controller = this.controller;
            this.clientActionProxies = {
                initializedHandler$Action: function(accordionItemIdIn) {
                    accordionItemIdIn = (accordionItemIdIn === undefined) ? "" : accordionItemIdIn;
                    return controller.executeActionInsideJSNode(controller._initializedHandler$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(accordionItemIdIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "InitializedHandler");
                },
                triggerToggleClick$Action: function(accordionItemIdIn, isExpandedIn) {
                    accordionItemIdIn = (accordionItemIdIn === undefined) ? "" : accordionItemIdIn;
                    isExpandedIn = (isExpandedIn === undefined) ? false : isExpandedIn;
                    return controller.executeActionInsideJSNode(controller._triggerToggleClick$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(accordionItemIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(isExpandedIn, OS.DataTypes.DataTypes.Boolean)), controller.callContext(), function(actionResults) {
                        return {};
                    }, function() {
                        return;
                    }, "TriggerToggleClick");
                }
            };
            this.dataFetchDependenciesOriginal = {};
            this.dataFetchDependentsGraph = {};
            this.shouldSendClientVarsToDataSources = false;
        }
        Controller.prototype.translationResources = OutSystemsUI_2_23_Content_AccordionItem_mvc_TranslationsResources;
        // Server Actions

        // Aggregates and Data Actions

        Controller.prototype.dataFetchActionNames = [];
        // Client Actions
        Controller.prototype._onDestroy$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnDestroy");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:tZ+QHzqC2EClpnCEIKv+nw:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.5hlIE5odtkCvcC20fMoelA/ClientActions.tZ+QHzqC2EClpnCEIKv+nw:YtoU_PeH_6iRjUmrNaO+lQ", "OutSystemsUI_2_23", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:FnL0BTKJD0W0wxMavF6RcQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:M7cY2vUBKka8qQribM_12A", callContext.id);
                // Execute Action: AccordionItemDestroy
                OutSystemsUI_2_23Controller.default.accordionItemDestroy$Action(model.variables.internalConfigsVar.uniqueIdAttr, callContext);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:MmbU5YzUc0+x9s2CAyDd3w", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:tZ+QHzqC2EClpnCEIKv+nw", callContext.id);
            }

        };
        Controller.prototype._triggerToggleClick$Action = function(accordionItemIdIn, isExpandedIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("TriggerToggleClick");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Content.AccordionItem.TriggerToggleClick$vars"))());
            vars.value.accordionItemIdInLocal = accordionItemIdIn;
            vars.value.isExpandedInLocal = isExpandedIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:c_sNJOo86kWYpoNpxA4nVQ:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.5hlIE5odtkCvcC20fMoelA/ClientActions.c_sNJOo86kWYpoNpxA4nVQ:Y4T+RF8sz+URJ6nE5iKjnw", "OutSystemsUI_2_23", "TriggerToggleClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:PyHkoxfRd0yi4E440ratzg", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:w0GJ1JmvyUSo4NjmJBG6Fw", callContext.id);
                // Trigger Event: OnToggle
                return controller.onToggle$Action(vars.value.accordionItemIdInLocal, vars.value.isExpandedInLocal, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:9uuvPzXqcE20esG8z4xRBQ", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:c_sNJOo86kWYpoNpxA4nVQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:c_sNJOo86kWYpoNpxA4nVQ", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("OutSystemsUI_2_23.Content.AccordionItem.TriggerToggleClick$vars", [{
            name: "AccordionItemId",
            attrName: "accordionItemIdInLocal",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "IsExpanded",
            attrName: "isExpandedInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.prototype._initializedHandler$Action = function(accordionItemIdIn, callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("InitializedHandler");
            callContext = controller.callContext(callContext);
            var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Content.AccordionItem.InitializedHandler$vars"))());
            vars.value.accordionItemIdInLocal = accordionItemIdIn;
            varBag.callContext = callContext;
            varBag.vars = vars;
            OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:Xs0BiIstikCHWx+3lhpfEQ:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.5hlIE5odtkCvcC20fMoelA/ClientActions.Xs0BiIstikCHWx+3lhpfEQ:dAyHK7jI3+cBeo82PoS8pw", "OutSystemsUI_2_23", "InitializedHandler", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
            OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:+61O8kEYtUqLSMNsuLOjRA", callContext.id);
            return OS.Flow.executeAsyncFlow(function() {
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:hTZbmrC_WU6GiUfn1QrQjQ", callContext.id);
                // Trigger Event: Initialized
                return controller.initialized$Action(vars.value.accordionItemIdInLocal, callContext).then(function() {
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:VWQPm76cLE2onUggG_hVng", callContext.id);
                });
            }).then(function(res) {
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:Xs0BiIstikCHWx+3lhpfEQ", callContext.id);
                return res;

            }).catch(function(ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:Xs0BiIstikCHWx+3lhpfEQ", callContext.id);
                throw ex;

            });
        };
        Controller.registerVariableGroupType("OutSystemsUI_2_23.Content.AccordionItem.InitializedHandler$vars", [{
            name: "AccordionItemId",
            attrName: "accordionItemIdInLocal",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.prototype._onParametersChanged$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnParametersChanged");
            callContext = controller.callContext(callContext);
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:jUoMu8po+kK4buTWRMRURA:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.5hlIE5odtkCvcC20fMoelA/ClientActions.jUoMu8po+kK4buTWRMRURA:52x4e1uuNcFAPOt1tJXO7w", "OutSystemsUI_2_23", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:UcLt9Q6S70i2v9wxUYvl3g", callContext.id);
                // IsDisabled?
                if ((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:TDZGBHofaESPainXC+Q+tQ", callContext.id) && ((model.variables.isDisabledIn) !== (model.variables.internalConfigsVar.isDisabledAttr)))) {
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:empwUrD4fUy8dE0Joblpbg", callContext.id);
                    // InternalConfigs.IsDisabled = IsDisabled
                    model.variables.internalConfigsVar.isDisabledAttr = model.variables.isDisabledIn;
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:hm_6ITjHU0SrdbaPOLsvQg", callContext.id);
                    // Execute Action: Update_IsDisabled
                    OutSystemsUI_2_23Controller.default.accordionItemChangeBooleanProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "IsDisabled", model.variables.isDisabledIn, callContext);
                }

                // IsExpanded?
                if ((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:FVj8rUv8akOUNd138zQ8dQ", callContext.id) && ((model.variables.startsExpandedIn) !== (model.variables.internalConfigsVar.startsExpandedAttr)))) {
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:FtAKkd6HAUq5iB45CU7X2g", callContext.id);
                    // InternalConfigs.StartsExpanded = StartsExpanded
                    model.variables.internalConfigsVar.startsExpandedAttr = model.variables.startsExpandedIn;
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:UaaK3sJT906jyw5u0QWHLQ", callContext.id);
                    // Execute Action: Update_StartsExpanded
                    OutSystemsUI_2_23Controller.default.accordionItemChangeBooleanProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "IsExpanded", model.variables.startsExpandedIn, callContext);
                }

                // Icon?
                if ((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:pDL5Y7jZUEatBxZ41t7Nxg", callContext.id) && ((model.variables.iconIn) !== (model.variables.internalConfigsVar.iconAttr)))) {
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:KoLX7+_7Bkq9qSpx4mPbNA", callContext.id);
                    // InternalConfigs.Icon = Icon
                    model.variables.internalConfigsVar.iconAttr = model.variables.iconIn;
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:bi_WFxcSM0K3VABl6rHAkg", callContext.id);
                    // Execute Action: Update_Icon
                    OutSystemsUI_2_23Controller.default.accordionItemChangeTextProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "Icon", model.variables.internalConfigsVar.iconAttr, callContext);
                }

                // Icon Position?
                if ((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:ruP7DZoe9EO7h0q02DqIzQ", callContext.id) && ((model.variables.internalConfigsVar.iconPositionAttr) !== (model.variables.iconPositionIn)))) {
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:KWO1OysfykGwRJ9kx3R0ZA", callContext.id);
                    // InternalConfigs.IconPosition = IconPosition
                    model.variables.internalConfigsVar.iconPositionAttr = model.variables.iconPositionIn;
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:SnI6cgFJakaYYz4J1e5OIg", callContext.id);
                    // Execute Action: Update_IconPosition
                    OutSystemsUI_2_23Controller.default.accordionItemChangeTextProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "IconPosition", model.variables.iconPositionIn, callContext);
                }

                // ExtendedClass?
                if ((OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:IWOPLKHFiESbMBCZnlxoRw", callContext.id) && ((model.variables.internalConfigsVar.extendedClassAttr) !== (model.variables.extendedClassIn)))) {
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:OKl01YeitUusY0OT9_J5wQ", callContext.id);
                    // InternalConfigs.ExtendedClass = ExtendedClass
                    model.variables.internalConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:mCmjDodFU02ZyFzrjcN7Mg", callContext.id);
                    // Execute Action: Update_ExtendedClass
                    OutSystemsUI_2_23Controller.default.accordionItemChangeTextProperty$Action(model.variables.internalConfigsVar.uniqueIdAttr, "ExtendedClass", model.variables.internalConfigsVar.extendedClassAttr, callContext);
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:s6o3lV8PLEKnodqbGEwhbA", callContext.id);
                } else {
                    OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:s6o3lV8PLEKnodqbGEwhbA", callContext.id);
                }

            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:jUoMu8po+kK4buTWRMRURA", callContext.id);
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
            varBag.callContext = callContext;
            try {
                OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:IW9rvMm5VkKjDuZ31HuywQ:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.5hlIE5odtkCvcC20fMoelA/ClientActions.IW9rvMm5VkKjDuZ31HuywQ:O0_NdDEBIAWHuPTxKT1UUg", "OutSystemsUI_2_23", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:Nh4ftiCWxU+XPYA4AAIzTA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:JWWuQWLcpUGMTg6xvP3WOA", callContext.id);
                // Execute Action: AccordionItemInitialize
                OutSystemsUI_2_23Controller.default.accordionItemInitialize$Action(model.variables.internalConfigsVar.uniqueIdAttr, callContext);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:64R_8Sp55Ua9u7s2jlyrxw", callContext.id);
                // Execute Action: LogEnd
                OutSystemsUI_2_23Controller.default.logEvent$Action(OutSystemsUI_2_23Model.staticEntities.logType.general, "Accordion Item created", callContext);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:0j+fWgkBrUWvJ7qTnR6IvQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:IW9rvMm5VkKjDuZ31HuywQ", callContext.id);
            }

        };
        Controller.prototype._onInitialize$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("OnInitialize");
            callContext = controller.callContext(callContext);
            var generateUniqueIdVar = new OS.DataTypes.VariableHolder();
            var serialize_configsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
            varBag.callContext = callContext;
            varBag.generateUniqueIdVar = generateUniqueIdVar;
            varBag.serialize_configsVar = serialize_configsVar;
            try {
                OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:dTVfzzD8Z0GgmsIHyY8P2g:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.5hlIE5odtkCvcC20fMoelA/ClientActions.dTVfzzD8Z0GgmsIHyY8P2g:NgQVaXCk5J8TvyAnxShZKA", "OutSystemsUI_2_23", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:JtxfbrbpRUiuM6v6ugkBUQ", callContext.id);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:sc+L1_i7kUCz2ws473Pgsg", callContext.id);
                // Execute Action: LogStart
                OutSystemsUI_2_23Controller.default.logEvent$Action(OutSystemsUI_2_23Model.staticEntities.logType.general, "Going to create Accordion Item", callContext);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:dZInIKYPT0qXwXfdWy3X+w", callContext.id);
                // Execute Action: GenerateUniqueId
                generateUniqueIdVar.value = OutSystemsUI_2_23Controller.default.generateUniqueId$Action(model.variables.internalConfigsVar.uniqueIdAttr, callContext);

                // Set Internal Configs
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:huZfeOQ8Y0Cggbpu6otPug", callContext.id);
                // InternalConfigs.UniqueId = GenerateUniqueId.Unique_ID
                model.variables.internalConfigsVar.uniqueIdAttr = generateUniqueIdVar.value.unique_IDOut;
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:huZfeOQ8Y0Cggbpu6otPug", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
                // InternalConfigs.StartsExpanded = StartsExpanded
                model.variables.internalConfigsVar.startsExpandedAttr = model.variables.startsExpandedIn;
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:huZfeOQ8Y0Cggbpu6otPug", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
                // InternalConfigs.IsDisabled = IsDisabled
                model.variables.internalConfigsVar.isDisabledAttr = model.variables.isDisabledIn;
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:huZfeOQ8Y0Cggbpu6otPug", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
                // InternalConfigs.ExtendedClass = ExtendedClass
                model.variables.internalConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:huZfeOQ8Y0Cggbpu6otPug", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
                // InternalConfigs.IconPosition = IconPosition
                model.variables.internalConfigsVar.iconPositionAttr = model.variables.iconPositionIn;
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:huZfeOQ8Y0Cggbpu6otPug", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
                // InternalConfigs.Icon = Icon
                model.variables.internalConfigsVar.iconAttr = model.variables.iconIn;
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:UAbmCqQL7EeF4tm7pxCtRA", callContext.id);
                // JSON Serialize: Serialize_configs
                serialize_configsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.internalConfigsVar, true, false);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:y8MdYLdP9U296qsCzSBqEQ", callContext.id);
                // Execute Action: AccordionItemCreate
                OutSystemsUI_2_23Controller.default.accordionItemCreate$Action(model.variables.internalConfigsVar.uniqueIdAttr, serialize_configsVar.value.jSONOut, callContext);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:IcJyxVGnYkObl+V8TiMShA", callContext.id);
                // Execute Action: RegisterCallbacks
                controller._registerCallbacks$Action(callContext);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:N7unZvsILE+Gf_CkMbD_eg", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:dTVfzzD8Z0GgmsIHyY8P2g", callContext.id);
            }

        };
        Controller.prototype._registerCallbacks$Action = function(callContext) {
            var varBag = {};
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            varBag.model = model;
            varBag.idService = idService;
            controller.ensureControllerAlive("RegisterCallbacks");
            callContext = controller.callContext(callContext);
            var getActionReferenceJSResult = new OS.DataTypes.VariableHolder();
            varBag.callContext = callContext;
            varBag.getActionReferenceJSResult = getActionReferenceJSResult;
            try {
                OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:fMtB8u3ePE+3jMZz99s1aA:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.5hlIE5odtkCvcC20fMoelA/ClientActions.fMtB8u3ePE+3jMZz99s1aA:OQhGyqiulS9e4NQBIu465Q", "OutSystemsUI_2_23", "RegisterCallbacks", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:6j9YbP5_xkiLypb6qrHoBA", callContext.id);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:2z+O_2lxZ06_BWrmb6IDPA", callContext.id);
                getActionReferenceJSResult.value = controller.safeExecuteJSNode(OutSystemsUI_2_23_Content_AccordionItem_mvc_controller_RegisterCallbacks_GetActionReferenceJS, "GetActionReference", "RegisterCallbacks", {
                    IntializedHandler: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object),
                    OnToggleHandler: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
                }, function($parameters) {
                    var jsNodeResult = new(controller.constructor.getVariableGroupType("OutSystemsUI_2_23.Content.AccordionItem.RegisterCallbacks$getActionReferenceJSResult"))();
                    jsNodeResult.intializedHandlerOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IntializedHandler, OS.DataTypes.DataTypes.Object);
                    jsNodeResult.onToggleHandlerOut = OS.DataConversion.JSNodeParamConverter.from($parameters.OnToggleHandler, OS.DataTypes.DataTypes.Object);
                    return jsNodeResult;
                }, {
                    InitializedHandler: controller.clientActionProxies.initializedHandler$Action,
                    TriggerToggleClick: controller.clientActionProxies.triggerToggleClick$Action
                }, {});
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:yK3QgEWFzUOrJAqJ26FIUA", callContext.id);
                // Execute Action: AccordionItemRegisterInitializedCallback
                OutSystemsUI_2_23Controller.default.accordionItemRegisterCallback$Action(model.variables.internalConfigsVar.uniqueIdAttr, OutSystemsUI_2_23Model.staticEntities.registeredCallbackEvents.initialized, getActionReferenceJSResult.value.intializedHandlerOut, callContext);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:aKpFLm9C60SsnkCBKeGvKA", callContext.id);
                // Execute Action: AccordionItemRegisterOnToggleCallback
                OutSystemsUI_2_23Controller.default.accordionItemRegisterCallback$Action(model.variables.internalConfigsVar.uniqueIdAttr, OutSystemsUI_2_23Model.staticEntities.registeredCallbackEvents.onToggle, getActionReferenceJSResult.value.onToggleHandlerOut, callContext);
                OutSystemsDebugger.handleBreakpoint("gbhv1Xg5lEm7VVKTeHGMQw:MtuP9Ix36E2XLGmbPrpOEQ", callContext.id);
            } catch (ex) {
                OutSystemsDebugger.handleException(ex, callContext.id);
                throw ex;
            } finally {
                OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:fMtB8u3ePE+3jMZz99s1aA", callContext.id);
            }

        };
        Controller.registerVariableGroupType("OutSystemsUI_2_23.Content.AccordionItem.RegisterCallbacks$getActionReferenceJSResult", [{
            name: "IntializedHandler",
            attrName: "intializedHandlerOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
            }
        }, {
            name: "OnToggleHandler",
            attrName: "onToggleHandlerOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
            }
        }]);

        Controller.prototype.onDestroy$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

        };
        Controller.prototype.triggerToggleClick$Action = function(accordionItemIdIn, isExpandedIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._triggerToggleClick$Action, callContext, accordionItemIdIn, isExpandedIn);

        };
        Controller.prototype.initializedHandler$Action = function(accordionItemIdIn, callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._initializedHandler$Action, callContext, accordionItemIdIn);

        };
        Controller.prototype.onParametersChanged$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

        };
        Controller.prototype.onReady$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

        };
        Controller.prototype.onInitialize$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

        };
        Controller.prototype.registerCallbacks$Action = function(callContext) {
            var controller = this.controller;
            return controller.safeExecuteClientAction(controller._registerCallbacks$Action, callContext);

        };
        Controller.prototype.onToggle$Action = function() {
            return Promise.resolve();
        };
        Controller.prototype.initialized$Action = function() {
            return Promise.resolve();
        };

        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:I9m14fELdkiW+b3sqQ+k7Q:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q:AUjgzFQezVYFy+ax1Bu5WA", "OutSystemsUI_2_23", "Content", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:5hlIE5odtkCvcC20fMoelA:/NRWebFlows.I9m14fELdkiW+b3sqQ+k7Q/NodesShownInESpaceTree.5hlIE5odtkCvcC20fMoelA:483dtmYGZ1S4t0zyWLUe4Q", "OutSystemsUI_2_23", "AccordionItem", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:5hlIE5odtkCvcC20fMoelA", callContext.id);
            OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:I9m14fELdkiW+b3sqQ+k7Q", callContext.id);
        };
        Controller.prototype.onInitializeEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Content/AccordionItem On Initialize");
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

                OutSystemsDebugger.setThreadStartName(callContext.id, "Content/AccordionItem On Ready");
                return controller.onReady$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onRenderEventHandler = null;
        Controller.prototype.onDestroyEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Content/AccordionItem On Destroy");
                return controller.onDestroy$Action(callContext);

            }, function() {
                controller.popDebuggerContext(callContext);

            });

        };
        Controller.prototype.onParametersChangedEventHandler = function(callContext) {
            var controller = this.controller;
            var model = this.model;
            var idService = this.idService;

            return OS.Flow.tryFinally(function() {
                var varBag = {};
                controller.pushDebuggerContext(callContext);

                OutSystemsDebugger.setThreadStartName(callContext.id, "Content/AccordionItem On Parameters Changed");
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
            return OutSystemsUI_2_23Controller.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, OutSystemsUI_2_23LanguageResources);
});
define("OutSystemsUI_2_23.Content.AccordionItem.mvc$controller.RegisterCallbacks.GetActionReferenceJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.IntializedHandler = $actions.InitializedHandler;
        $parameters.OnToggleHandler = $actions.TriggerToggleClick;
    };
});

define("OutSystemsUI_2_23.Content.AccordionItem.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "H08vmonypUitD6C3egMfPw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.accordionItemIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "qJk_O_o7nU2IK92a4xaZZA": {
            getter: function(varBag, idService) {
                return varBag.vars.value.isExpandedInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "uJbik6ovtEqzCTscY581pw": {
            getter: function(varBag, idService) {
                return varBag.vars.value.accordionItemIdInLocal;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "dZInIKYPT0qXwXfdWy3X+w": {
            getter: function(varBag, idService) {
                return varBag.generateUniqueIdVar.value;
            }
        },
        "UAbmCqQL7EeF4tm7pxCtRA": {
            getter: function(varBag, idService) {
                return varBag.serialize_configsVar.value;
            }
        },
        "2z+O_2lxZ06_BWrmb6IDPA": {
            getter: function(varBag, idService) {
                return varBag.getActionReferenceJSResult.value;
            }
        },
        "Xb+6ZcNylE2Ge5kBIZfZ+Q": {
            getter: function(varBag, idService) {
                return varBag.model.variables.internalConfigsVar;
            }
        },
        "wjU6AWV0jU2_QGq74tfYYQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.startsExpandedIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "BT_r69VTxU2U6JEX6RqsAw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.iconIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "XFHGVIqEgE2zNrXIcaaZpQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.iconPositionIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "KUlO8ZnV1kOO9LxL49JJfg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isDisabledIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "mu3q3oahGU2kjpJHi8yZAQ": {
            getter: function(varBag, idService) {
                return varBag.model.variables.extendedClassIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "SgAwAJE2uUiKUMKfjxenxQ": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("AccordionItem"));
                })(varBag.model, idService);
            }
        },
        "tFVPCR6JG0aEEmyslUD8WA": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("TitleWrapper"));
                })(varBag.model, idService);
            }
        },
        "iHw_tG28+UuQo2g0K7zr0Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Title"));
                })(varBag.model, idService);
            }
        },
        "UNiUMl1TJEaGQyAzv1Al7g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("CustomIcon"));
                })(varBag.model, idService);
            }
        },
        "f7vVjd288UyV1wEaHEOW_Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("ContentWrapper"));
                })(varBag.model, idService);
            }
        },
        "YysPsPm58EW7TdZPLZVD8Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Content"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("OutSystemsUI_2_23.Content.AccordionItem.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});