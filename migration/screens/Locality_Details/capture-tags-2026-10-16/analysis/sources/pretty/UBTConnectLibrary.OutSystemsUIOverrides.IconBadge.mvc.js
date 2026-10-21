define("UBTConnectLibrary.OutSystemsUIOverrides.IconBadge.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.OutSystemsUIOverrides.Badge.mvc$model"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibrary_OutSystemsUIOverrides_Badge_mvcModel) {
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
        Model._hasValidationWidgetsValue = undefined;
        Object.defineProperty(Model, "hasValidationWidgets", {
            enumerable: true,
            configurable: true,
            get: function() {
                if ((Model._hasValidationWidgetsValue === undefined)) {
                    Model._hasValidationWidgetsValue = UBTConnectLibrary_OutSystemsUIOverrides_Badge_mvcModel.hasValidationWidgets;
                }

                return Model._hasValidationWidgetsValue;
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
    return new OS.Model.ModelFactory(Model, "OutSystemsUIOverrides.IconBadge");
});
define("UBTConnectLibrary.OutSystemsUIOverrides.IconBadge.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.OutSystemsUIOverrides.IconBadge.mvc$model", "UBTConnectLibrary.OutSystemsUIOverrides.IconBadge.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.OutSystemsUIOverrides.Badge.mvc$view"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_OutSystemsUIOverrides_IconBadge_mvc_model, UBTConnectLibrary_OutSystemsUIOverrides_IconBadge_mvc_controller, UBTConnectLibraryClientVariables, OSWidgets, UBTConnectLibrary_OutSystemsUIOverrides_Badge_mvc_view) {
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
        View.displayName = "OutSystemsUIOverrides.IconBadge";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_OutSystemsUIOverrides_Badge_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_OutSystemsUIOverrides_IconBadge_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_OutSystemsUIOverrides_IconBadge_mvc_controller;
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
                style: (("icon-badge" + " ") + model.variables.extendedClassIn),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassInDataFetchStatus)
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.icon,
                _idProps: {
                    service: idService,
                    name: "Icon"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(UBTConnectLibrary_OutSystemsUIOverrides_Badge_mvc_view, {
                inputs: {
                    MaxNumber: model.variables.maxNumberIn,
                    _maxNumberInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._maxNumberInDataFetchStatus),
                    Color: model.variables.colorIn,
                    _colorInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._colorInDataFetchStatus),
                    Number: model.variables.numberIn,
                    _numberInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._numberInDataFetchStatus),
                    IsLight: model.variables.isLightIn,
                    _isLightInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isLightInDataFetchStatus)
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
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);

    return View;
});
define("UBTConnectLibrary.OutSystemsUIOverrides.IconBadge.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.OutSystemsUIOverrides.IconBadge.mvc$debugger"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_OutSystemsUIOverrides_IconBadge_mvc_Debugger) {
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
            OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:EbM2NUKuBkm5UiPG4pGmQA:/NRWebFlows.8rwYXMzF2UmYfFoe_h02PQ/NodesShownInESpaceTree.EbM2NUKuBkm5UiPG4pGmQA:mFvbXutZsrlvXju9docBYA", "UBTConnectLibrary", "IconBadge", "NRNodes.WebBlock", callContext.id, varBag);
        };
        Controller.prototype.popDebuggerContext = function(callContext) {
            OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:EbM2NUKuBkm5UiPG4pGmQA", callContext.id);
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

define("UBTConnectLibrary.OutSystemsUIOverrides.IconBadge.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function(exports, Debugger, OutSystems) {
    var OS = OutSystems.Internal;
    var metaInfo = {
        "eC5UpCGcaUCQLCRStDlw2w": {
            getter: function(varBag, idService) {
                return varBag.model.variables.numberIn;
            },
            dataType: OS.DataTypes.DataTypes.LongInteger
        },
        "Hojk3fplUUORlNEs+dWfZA": {
            getter: function(varBag, idService) {
                return varBag.model.variables.colorIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "ZhR3zQQRHU+6XVrer+wLzg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.isLightIn;
            },
            dataType: OS.DataTypes.DataTypes.Boolean
        },
        "E_apEeAQgkWc+r3wA70Oyw": {
            getter: function(varBag, idService) {
                return varBag.model.variables.extendedClassIn;
            },
            dataType: OS.DataTypes.DataTypes.Text
        },
        "2JFLXbm5Y0+nI4NQAYnjyg": {
            getter: function(varBag, idService) {
                return varBag.model.variables.maxNumberIn;
            },
            dataType: OS.DataTypes.DataTypes.Integer
        },
        "QtBdx4jnB0GMupBfo0rn6g": {
            getter: function(varBag, idService) {
                return (function(model, idService) {
                    return model.widgets.get(idService.getId("Icon"));
                })(varBag.model, idService);
            }
        }
    };
    OutSystemsDebugger.registerMetaInfo(metaInfo);
});