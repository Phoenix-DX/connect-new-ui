define("UBTConnectLibrary.OutSystemsUIOverrides.Badge.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.controller$GetClass_BackgroundColor"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController) {
    var OS = OutSystems.Internal;


    var VariablesRecord = (function(_super) {
        __extends(VariablesRecord, _super);

        function VariablesRecord(defaults) {
            _super.apply(this, arguments);
        }
        VariablesRecord.attributesToDeclare = function() {
            return [
                this.attr("Number", "numberIn", "Number", true, false, OS.DataTypes.DataTypes.LongInteger, function() {
                    return OS.DataTypes.LongInteger.defaultValue;
                }, false),
                this.attr("_numberInDataFetchStatus", "_numberInDataFetchStatus", "_numberInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("Color", "colorIn", "Color", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return UBTConnectLibraryModel.staticEntities.uBT_Color.primary;
                }, false),
                this.attr("_colorInDataFetchStatus", "_colorInDataFetchStatus", "_colorInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("Size", "sizeIn", "Size", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_sizeInDataFetchStatus", "_sizeInDataFetchStatus", "_sizeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("Shape", "shapeIn", "Shape", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return UBTConnectLibraryModel.staticEntities.shape.rounded;
                }, false),
                this.attr("_shapeInDataFetchStatus", "_shapeInDataFetchStatus", "_shapeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("IsLight", "isLightIn", "IsLight", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                    return false;
                }, false),
                this.attr("_isLightInDataFetchStatus", "_isLightInDataFetchStatus", "_isLightInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", true, false, OS.DataTypes.DataTypes.Text, function() {
                    return "";
                }, false),
                this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return /*Fetched*/ 1;
                }, false),
                this.attr("MaxNumber", "maxNumberIn", "MaxNumber", true, false, OS.DataTypes.DataTypes.Integer, function() {
                    return 9;
                }, false),
                this.attr("_maxNumberInDataFetchStatus", "_maxNumberInDataFetchStatus", "_maxNumberInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            if ("Number" in inputs) {
                this.variables.numberIn = inputs.Number;
                if ("_numberInDataFetchStatus" in inputs) {
                    this.variables._numberInDataFetchStatus = inputs._numberInDataFetchStatus;
                }

            }

            if ("Color" in inputs) {
                this.variables.colorIn = inputs.Color;
                if ("_colorInDataFetchStatus" in inputs) {
                    this.variables._colorInDataFetchStatus = inputs._colorInDataFetchStatus;
                }

            }

            if ("Size" in inputs) {
                this.variables.sizeIn = inputs.Size;
                if ("_sizeInDataFetchStatus" in inputs) {
                    this.variables._sizeInDataFetchStatus = inputs._sizeInDataFetchStatus;
                }

            }

            if ("Shape" in inputs) {
                this.variables.shapeIn = inputs.Shape;
                if ("_shapeInDataFetchStatus" in inputs) {
                    this.variables._shapeInDataFetchStatus = inputs._shapeInDataFetchStatus;
                }

            }

            if ("IsLight" in inputs) {
                this.variables.isLightIn = inputs.IsLight;
                if ("_isLightInDataFetchStatus" in inputs) {
                    this.variables._isLightInDataFetchStatus = inputs._isLightInDataFetchStatus;
                }

            }

            if ("ExtendedClass" in inputs) {
                this.variables.extendedClassIn = inputs.ExtendedClass;
                if ("_extendedClassInDataFetchStatus" in inputs) {
                    this.variables._extendedClassInDataFetchStatus = inputs._extendedClassInDataFetchStatus;
                }

            }

            if ("MaxNumber" in inputs) {
                this.variables.maxNumberIn = inputs.MaxNumber;
                if ("_maxNumberInDataFetchStatus" in inputs) {
                    this.variables._maxNumberInDataFetchStatus = inputs._maxNumberInDataFetchStatus;
                }

            }

        };
        return Model;
    })(OS.Model.BaseViewModel);
    return new OS.Model.ModelFactory(Model, "OutSystemsUIOverrides.Badge");
});
define("UBTConnectLibrary.OutSystemsUIOverrides.Badge.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.OutSystemsUIOverrides.Badge.mvc$model", "UBTConnectLibrary.OutSystemsUIOverrides.Badge.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.controller$GetClass_BackgroundColor"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_OutSystemsUIOverrides_Badge_mvc_model, UBTConnectLibrary_OutSystemsUIOverrides_Badge_mvc_controller, UBTConnectLibraryClientVariables, OSWidgets) {
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
        View.displayName = "OutSystemsUIOverrides.Badge";
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
                return UBTConnectLibrary_OutSystemsUIOverrides_Badge_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_OutSystemsUIOverrides_Badge_mvc_controller;
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
                gridProperties: {
                    classes: "OSInline"
                },
                style: model.getCachedValue(idService.getId("fuFCg7LFXU+jKb_YwyJ8WA.Style"), function() {
                    return ((((((("ubt-badge badge" + ((((model.variables.sizeIn) !== (OS.BuiltinFunctions.nullTextIdentifier()))) ? ((" badge-" + model.variables.sizeIn)) : (""))) + " ") + "border-radius-") + model.variables.shapeIn) + ((model.variables.isLightIn) ? (((((" " + OutSystemsDebugger.handleFunctionCall(function() {
                        return UBTConnectLibraryController.default.getClass_BackgroundColor$Action(model.variables.colorIn, callContext).out_ColorClassOut;
                    }, OS.DataTypes.DataTypes.Text, callContext.id)) + "-lightest text-") + model.variables.colorIn) + "-darker")) : ((" " + OutSystemsDebugger.handleFunctionCall(function() {
                        return UBTConnectLibraryController.default.getClass_BackgroundColor$Action(model.variables.colorIn, callContext).out_ColorClassOut;
                    }, OS.DataTypes.DataTypes.Text, callContext.id))))) + " ") + model.variables.extendedClassIn);
                }, function() {
                    return model.variables.sizeIn;
                }, function() {
                    return model.variables.shapeIn;
                }, function() {
                    return model.variables.isLightIn;
                }, function() {
                    return model.variables.colorIn;
                }, function() {
                    return model.variables.extendedClassIn;
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._sizeInDataFetchStatus, model.variables._shapeInDataFetchStatus, model.variables._isLightInDataFetchStatus, model.variables._colorInDataFetchStatus, model.variables._extendedClassInDataFetchStatus)
            }, React.createElement(OSWidgets.Expression, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                value: model.getCachedValue(idService.getId("sJ8LQqlaF0ii0t8lAYgR1A.Value"), function() {
                    return ((model.variables.numberIn.lte(OS.BuiltinFunctions.integerToLongInteger(model.variables.maxNumberIn))) ? (OS.BuiltinFunctions.longIntegerToText(model.variables.numberIn)) : (((model.variables.maxNumberIn).toString() + "+")));
                }, function() {
                    return model.variables.numberIn;
                }, function() {
                    return model.variables.maxNumberIn;
                }),
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._numberInDataFetchStatus, model.variables._maxNumberInDataFetchStatus)
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnectLibrary.OutSystemsUIOverrides.Badge.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.OutSystemsUIOverrides.Badge.mvc$debugger", "UBTConnectLibrary.controller$GetClass_BackgroundColor"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_OutSystemsUIOverrides_Badge_mvc_Debugger) {
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


        // Event Handler Actions
        Controller.prototype.pushDebuggerContext = function(callContext) {
            var varBag = {};
            OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:8rwYXMzF2UmYfFoe_h02PQ:/NRWebFlows.8rwYXMzF2UmYfFoe_h02PQ:1vOi+w4cu2G5lXUGsWVVVw", "UBTConnectLibrary", "OutSystemsUIOverrides", "NRFlows.WebFlow", callContext.id, varBag);
            OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:OUgmFJHSMES53CPZBqUMnw:/NRWebFlows.8rwYXMzF2UmYfFoe_h02PQ/NodesShownInESpaceTree.OUgmFJHSMES53CPZBqUMnw:_OcXXFtesN6323yp70RpCw", "UBTConnectLibrary", "Badge", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:OUgmFJHSMES53CPZBqUMnw", callContext.id);
            OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:8rwYXMzF2UmYfFoe_h02PQ", callContext.id);
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

define("UBTConnectLibrary.OutSystemsUIOverrides.Badge.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "TXvNFdg600KWgErNWhlcKA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.numberIn;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "m0WFVxfSSUydg3_ur9ojCg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.colorIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "nyHgfHePdkylKCTnjrFphg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.sizeIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "x468MVH8vEWTA+7whpDgmw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.shapeIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "gMhmuMjNMUKI7Q+gfVmiDg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isLightIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "tW_Psmy0XEmPJFHXX7FRSA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.extendedClassIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "ASSGmNxjmEaw9K6m7zZD3g": {
            getter: function(varBag, idService) {
                return varBag.model.variables.maxNumberIn;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});