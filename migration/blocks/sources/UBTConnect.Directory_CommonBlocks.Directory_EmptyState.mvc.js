define("UBTConnect.Directory_CommonBlocks.Directory_EmptyState.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect_Utils.controller", "UBTConnectLibrary.ConnectPatterns.EmptyList.mvc$model", "UBTConnect_Utils.controller$GetEntityType_Icon", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils"], function (OutSystems, UBTConnectModel, UBTConnect_UtilsController, UBTConnectLibrary_ConnectPatterns_EmptyList_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("EntityTypeId", "entityTypeIdIn", "EntityTypeId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_entityTypeIdInDataFetchStatus", "_entityTypeIdInDataFetchStatus", "_entityTypeIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Location", "locationIn", "Location", true, false, OS.DataTypes.DataTypes.Text, function () {
return "found nearby";
}, false), 
this.attr("_locationInDataFetchStatus", "_locationInDataFetchStatus", "_locationInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = undefined;
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
if((Model._hasValidationWidgetsValue === undefined)) {
Model._hasValidationWidgetsValue = UBTConnectLibrary_ConnectPatterns_EmptyList_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("EntityTypeId" in inputs) {
this.variables.entityTypeIdIn = inputs.EntityTypeId;
if("_entityTypeIdInDataFetchStatus" in inputs) {
this.variables._entityTypeIdInDataFetchStatus = inputs._entityTypeIdInDataFetchStatus;
}

}

if("Location" in inputs) {
this.variables.locationIn = inputs.Location;
if("_locationInDataFetchStatus" in inputs) {
this.variables._locationInDataFetchStatus = inputs._locationInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Directory_CommonBlocks.Directory_EmptyState");
});
define("UBTConnect.Directory_CommonBlocks.Directory_EmptyState.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_CommonBlocks.Directory_EmptyState.mvc$model", "UBTConnect.Directory_CommonBlocks.Directory_EmptyState.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.ConnectPatterns.EmptyList.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect_Utils.controller$GetEntityType_Icon", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, React, OSView, UBTConnect_Directory_CommonBlocks_Directory_EmptyState_mvc_model, UBTConnect_Directory_CommonBlocks_Directory_EmptyState_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_ConnectPatterns_EmptyList_mvc_view, OSWidgets) {
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
        View.displayName = "Directory_CommonBlocks.Directory_EmptyState";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_EmptyList_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Directory_CommonBlocks_Directory_EmptyState_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Directory_CommonBlocks_Directory_EmptyState_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_ConnectPatterns_EmptyList_mvc_view, {
inputs: {
IconId: model.getCachedValue(idService.getId("ulm9i6TLikagFdG6bUgIWA.IconId"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnect_UtilsController.default.getEntityType_Icon$Action(model.variables.entityTypeIdIn, callContext).iconIdOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.entityTypeIdIn;
}),
_iconIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._entityTypeIdInDataFetchStatus)
},
events: {
_handleError: function (ex) {
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
titlePlaceholder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("Iguwy7SjYkCgnPbZOlnHKw.Value"), function () {
return ((("No " + (((model.variables.entityTypeIdIn === UBTConnectModel.staticEntities.connect_Entity.interchange)) ? ((OS.BuiltinFunctions.toLower(model.variables.entityTypeIdIn) + "s")) : (model.variables.entityTypeIdIn))) + " ") + model.variables.locationIn);
}, function () {
return model.variables.entityTypeIdIn;
}, function () {
return model.variables.locationIn;
}),
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._entityTypeIdInDataFetchStatus, model.variables._locationInDataFetchStatus)
})];
}),
textPlaceholder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("1yaHdchNnEiMdrxyJgRCnw.Value"), function () {
return ((("There doesn\'t seem to be any " + OS.BuiltinFunctions.toLower(model.variables.entityTypeIdIn)) + (((model.variables.entityTypeIdIn === UBTConnectModel.staticEntities.connect_Entity.interchange)) ? ("s") : (""))) + " in");
}, function () {
return model.variables.entityTypeIdIn;
}),
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._entityTypeIdInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "this locality.",
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables._locationInDataFetchStatus), asPrimitiveValue(model.variables._entityTypeIdInDataFetchStatus), asPrimitiveValue(model.variables.locationIn), asPrimitiveValue(model.variables.entityTypeIdIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.Directory_CommonBlocks.Directory_EmptyState.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_CommonBlocks.Directory_EmptyState.mvc$debugger", "UBTConnect_Utils.controller$GetEntityType_Icon", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_CommonBlocks_Directory_EmptyState_mvc_Debugger) {
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


// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:jGNlo9EW9U24MVecsZ_9tQ:/NRWebFlows.jGNlo9EW9U24MVecsZ_9tQ:xsHySUveOqDsgwhujHByfw", "UBTConnect", "Directory_CommonBlocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:NthlWEevF0+IRudDsn2QGQ:/NRWebFlows.jGNlo9EW9U24MVecsZ_9tQ/NodesShownInESpaceTree.NthlWEevF0+IRudDsn2QGQ:tIV16W3Ada6R3u_wLYwWXw", "UBTConnect", "Directory_EmptyState", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:NthlWEevF0+IRudDsn2QGQ", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:jGNlo9EW9U24MVecsZ_9tQ", callContext.id);
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
return UBTConnectController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});

define("UBTConnect.Directory_CommonBlocks.Directory_EmptyState.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"VNUJn4RP506DQcvlnz5snA": {
getter: function (varBag, idService) {
return varBag.model.variables.entityTypeIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"pf5O+obuREib3_uNgp_x9A": {
getter: function (varBag, idService) {
return varBag.model.variables.locationIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Uetd5+fcY0qIJQJDoLnGCw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TitlePlaceholder"));
})(varBag.model, idService);
}
},
"l1bqzwgrGUCKg+di1qe98g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TextPlaceholder"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
