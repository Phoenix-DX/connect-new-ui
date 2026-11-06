define("UBTConnectLibrary.ConnectPatterns.Button.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.controller$GetClasses_Button", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$ButtonOptionsRec"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("MainContainerClass", "mainContainerClassVar", "MainContainerClass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "ubt-button";
}, false), 
this.attr("In_ButtonOptions", "in_ButtonOptionsIn", "In_ButtonOptions", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.ButtonOptionsRec());
}, false, UBTConnectLibraryModel.ButtonOptionsRec), 
this.attr("_in_ButtonOptionsInDataFetchStatus", "_in_ButtonOptionsInDataFetchStatus", "_in_ButtonOptionsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ExtendedClass", "in_ExtendedClassIn", "In_ExtendedClass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_ExtendedClassInDataFetchStatus", "_in_ExtendedClassInDataFetchStatus", "_in_ExtendedClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_IsDisabled", "in_IsDisabledIn", "In_IsDisabled", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsDisabledInDataFetchStatus", "_in_IsDisabledInDataFetchStatus", "_in_IsDisabledInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false)
].concat(_super.attributesToDeclare.call(this));
};
VariablesRecord.init();
return VariablesRecord;
})(OS.DataTypes.GenericRecord);
var WidgetsRecord = (function (_super) {
__extends(WidgetsRecord, _super);
function WidgetsRecord() {
_super.apply(this, arguments);
}
WidgetsRecord.getWidgetsType = function () {
return {};
};

return WidgetsRecord;
})(OS.Model.BaseWidgetRecordMap);
var Model = (function (_super) {
__extends(Model, _super);
function Model() {
_super.apply(this, arguments);
}
Model.getVariablesRecordConstructor = function () {
return VariablesRecord;
};
Model.getWidgetsRecordConstructor = function () {
return WidgetsRecord;
};
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
return false;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_ButtonOptions" in inputs) {
this.variables.in_ButtonOptionsIn = inputs.In_ButtonOptions;
if("_in_ButtonOptionsInDataFetchStatus" in inputs) {
this.variables._in_ButtonOptionsInDataFetchStatus = inputs._in_ButtonOptionsInDataFetchStatus;
}

}

if("In_ExtendedClass" in inputs) {
this.variables.in_ExtendedClassIn = inputs.In_ExtendedClass;
if("_in_ExtendedClassInDataFetchStatus" in inputs) {
this.variables._in_ExtendedClassInDataFetchStatus = inputs._in_ExtendedClassInDataFetchStatus;
}

}

if("In_IsDisabled" in inputs) {
this.variables.in_IsDisabledIn = inputs.In_IsDisabled;
if("_in_IsDisabledInDataFetchStatus" in inputs) {
this.variables._in_IsDisabledInDataFetchStatus = inputs._in_IsDisabledInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "ConnectPatterns.Button");
});
define("UBTConnectLibrary.ConnectPatterns.Button.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.Button.mvc$model", "UBTConnectLibrary.ConnectPatterns.Button.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.controller$GetClasses_Button", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$ButtonOptionsRec"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_Button_mvc_model, UBTConnectLibrary_ConnectPatterns_Button_mvc_controller, UBTConnectLibraryClientVariables, OSWidgets) {
    var OS = OutSystems.Internal;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;


    var View = (function (_super) {
        __extends(View,_super);
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
        View.displayName = "ConnectPatterns.Button";
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
            get: function () {
                return UBTConnectLibrary_ConnectPatterns_Button_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectPatterns_Button_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Button, {
enabled: !(model.variables.in_IsDisabledIn),
isDefault: false,
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Button/Button OnClick");
controller.event_OnClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: model.getCachedValue(idService.getId("0qoA0AxxxkaE5U9R1p7hrQ.Style"), function () {
return ("btn " + OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatClasses$Action(model.variables.in_ExtendedClassIn, OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatClasses$Action(model.variables.mainContainerClassVar, OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.getClasses_Button$Action(model.variables.in_ButtonOptionsIn.uBT_ButtonSizeIdAttr, model.variables.in_ButtonOptionsIn.uBT_ButtonTypeIdAttr, model.variables.mainContainerClassVar, model.variables.in_IsDisabledIn, model.variables.in_ButtonOptionsIn.uBT_FlexBehaviorAttr, callContext).out_ClassesOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id));
}, function () {
return model.variables.in_ExtendedClassIn;
}, function () {
return model.variables.mainContainerClassVar;
}, function () {
return model.variables.in_ButtonOptionsIn.uBT_ButtonSizeIdAttr;
}, function () {
return model.variables.in_ButtonOptionsIn.uBT_ButtonTypeIdAttr;
}, function () {
return model.variables.in_IsDisabledIn;
}, function () {
return model.variables.in_ButtonOptionsIn.uBT_FlexBehaviorAttr;
}),
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider,
enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsDisabledInDataFetchStatus),
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ExtendedClassInDataFetchStatus, model.variables._in_ButtonOptionsInDataFetchStatus, model.variables._in_IsDisabledInDataFetchStatus)
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.content,
style: (model.variables.mainContainerClassVar + "__content"),
_idProps: {
service: idService,
name: "Content"
},
_widgetRecordProvider: widgetsRecordProvider
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnectLibrary.ConnectPatterns.Button.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectPatterns.Button.mvc$debugger", "UBTConnectLibrary.controller$GetClasses_Button", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$ButtonOptionsRec"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectPatterns_Button_mvc_Debugger) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
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

Controller.prototype.event_OnClick$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g:Y06DhYqVkffzqTnycnKUGw", "UBTConnectLibrary", "ConnectPatterns", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:rdpq_3uLgEW5zIlcYWuSbw:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.rdpq_3uLgEW5zIlcYWuSbw:VWjL1Kl4kePm74luzHSQ3A", "UBTConnectLibrary", "Button", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:rdpq_3uLgEW5zIlcYWuSbw", callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return controller.handleError(ex);
};
Controller.checkPermissions = function () {
};
Controller.prototype.getDefaultTimeout = function () {
return UBTConnectLibraryController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLibraryLanguageResources);
});

define("UBTConnectLibrary.ConnectPatterns.Button.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"1er7OOn+a0CdPtZ+RbWTkw": {
getter: function (varBag, idService) {
return varBag.model.variables.mainContainerClassVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"YfELPGx7hEacPYr2qLdw3A": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ButtonOptionsIn;
}
},
"3f1HHKm6Cku3qBQ3_5hbfA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ExtendedClassIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"IjTKcVohnkmdVDBDjsJTkg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsDisabledIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"MKx86lWi20CC4sRIiwoBPA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
