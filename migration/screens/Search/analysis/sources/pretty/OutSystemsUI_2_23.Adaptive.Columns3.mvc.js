define("OutSystemsUI_2_23.Adaptive.Columns3.mvc$model", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model"], function(OutSystems, OutSystemsUI_2_23Model) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("GutterSize", "gutterSizeIn", "GutterSize", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return OutSystemsUI_2_23Model.staticEntities.gutterSize.base;
                }, false),
                this.attr("_gutterSizeInDataFetchStatus", "_gutterSizeInDataFetchStatus", "_gutterSizeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("TabletBehavior", "tabletBehaviorIn", "TabletBehavior", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return OutSystemsUI_2_23Model.staticEntities.breakColumns.none;
                }, false),
                this.attr("_tabletBehaviorInDataFetchStatus", "_tabletBehaviorInDataFetchStatus", "_tabletBehaviorInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("PhoneBehavior", "phoneBehaviorIn", "PhoneBehavior", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return OutSystemsUI_2_23Model.staticEntities.breakColumns.none;
                }, false),
                this.attr("_phoneBehaviorInDataFetchStatus", "_phoneBehaviorInDataFetchStatus", "_phoneBehaviorInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            if ("GutterSize" in inputs) {
                this.variables.gutterSizeIn = inputs.GutterSize;
                if ("_gutterSizeInDataFetchStatus" in inputs) {
                    this.variables._gutterSizeInDataFetchStatus = inputs._gutterSizeInDataFetchStatus;
                }

            }

            if ("TabletBehavior" in inputs) {
                this.variables.tabletBehaviorIn = inputs.TabletBehavior;
                if ("_tabletBehaviorInDataFetchStatus" in inputs) {
                    this.variables._tabletBehaviorInDataFetchStatus = inputs._tabletBehaviorInDataFetchStatus;
                }

            }

            if ("PhoneBehavior" in inputs) {
                this.variables.phoneBehaviorIn = inputs.PhoneBehavior;
                if ("_phoneBehaviorInDataFetchStatus" in inputs) {
                    this.variables._phoneBehaviorInDataFetchStatus = inputs._phoneBehaviorInDataFetchStatus;
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
    return new OS.Model.ModelFactory(Model, "Adaptive.Columns3");
});
define("OutSystemsUI_2_23.Adaptive.Columns3.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI_2_23.Adaptive.Columns3.mvc$model", "OutSystemsUI_2_23.Adaptive.Columns3.mvc$controller", "OutSystems/ReactWidgets/Main"], function(OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, OutSystemsUI_2_23_Adaptive_Columns3_mvc_model, OutSystemsUI_2_23_Adaptive_Columns3_mvc_controller, OSWidgets) {
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
        View.displayName = "Adaptive.Columns3";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return OutSystemsUI_2_23_Adaptive_Columns3_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return OutSystemsUI_2_23_Adaptive_Columns3_mvc_controller;
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
                style: ((((((("columns columns3 " + model.variables.gutterSizeIn) + " tablet-") + model.variables.tabletBehaviorIn) + " phone-") + model.variables.phoneBehaviorIn) + " ") + model.variables.extendedClassIn),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._gutterSizeInDataFetchStatus, model.variables._tabletBehaviorInDataFetchStatus, model.variables._phoneBehaviorInDataFetchStatus, model.variables._extendedClassInDataFetchStatus)
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.column1,
                style: "columns-item",
                _idProps: {
                    service: idService,
                    name: "Column1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.column2,
                style: "columns-item",
                _idProps: {
                    service: idService,
                    name: "Column2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.column3,
                style: "columns-item",
                _idProps: {
                    service: idService,
                    name: "Column3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("OutSystemsUI_2_23.Adaptive.Columns3.mvc$controller", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.languageResources", "OutSystemsUI_2_23.Adaptive.Columns3.mvc$translationsResources", "OutSystemsUI_2_23.Adaptive.Columns3.mvc$debugger"], function(OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, OutSystemsUI_2_23LanguageResources, OutSystemsUI_2_23_Adaptive_Columns3_mvc_TranslationsResources, OutSystemsUI_2_23_Adaptive_Columns3_mvc_Debugger) {
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
        Controller.prototype.translationResources = OutSystemsUI_2_23_Adaptive_Columns3_mvc_TranslationsResources;
        // Server Actions

        // Aggregates and Data Actions

        Controller.prototype.dataFetchActionNames = [];
        // Client Actions


        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:9GgB6wiQjkOC68Dd0FW6zQ:/NRWebFlows.9GgB6wiQjkOC68Dd0FW6zQ:c+cE6xHUcAGaZjT3hFmIag", "OutSystemsUI_2_23", "Adaptive", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("gbhv1Xg5lEm7VVKTeHGMQw:hcGhx1ntzkSPeOupQ9d94Q:/NRWebFlows.9GgB6wiQjkOC68Dd0FW6zQ/NodesShownInESpaceTree.hcGhx1ntzkSPeOupQ9d94Q:m2lzlJVbSPj3zEzlt1nm8g", "OutSystemsUI_2_23", "Columns3", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:hcGhx1ntzkSPeOupQ9d94Q", callContext.id);
            OutSystemsDebugger.pop("gbhv1Xg5lEm7VVKTeHGMQw:9GgB6wiQjkOC68Dd0FW6zQ", callContext.id);
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
            return OutSystemsUI_2_23Controller.default.defaultTimeout;
        };
        return Controller;
    })(OS.Controller.BaseViewController);
    return new OS.Controller.ControllerFactory(Controller, OutSystemsUI_2_23LanguageResources);
});

define("OutSystemsUI_2_23.Adaptive.Columns3.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "BkDP83aIjE6ug1GyBVoe1w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.gutterSizeIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "zodrG2qcgkKrC7nweGcjXw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.tabletBehaviorIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "0yzajLuOxUyNyl5yY4unZw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.phoneBehaviorIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "Q0sBCQiwPESz4p1D6RSnjw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.extendedClassIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "Dq3BIpqyy0mJK07TntH03Q": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Column1"));
                })(varBag.model, idService);
            }
        },
        "BKQVSji3v06fUoOS1CZf4A": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Column2"));
                })(varBag.model, idService);
            }
        },
        "Tudwc5w_rUOGom3OXPncUw": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Column3"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});
define("OutSystemsUI_2_23.Adaptive.Columns3.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});