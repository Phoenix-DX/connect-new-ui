define("UBTConnect.Directory_Caroussel.CarouselTag.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.ConnectPatterns.TagContent.mvc$model"], function (OutSystems, UBTConnectModel, UBTConnectLibrary_ConnectPatterns_TagContent_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("In_IndexCurrentItem", "in_IndexCurrentItemIn", "In_IndexCurrentItem", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("_in_IndexCurrentItemInDataFetchStatus", "_in_IndexCurrentItemInDataFetchStatus", "_in_IndexCurrentItemInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_TotalItems", "in_TotalItemsIn", "In_TotalItems", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("_in_TotalItemsInDataFetchStatus", "_in_TotalItemsInDataFetchStatus", "_in_TotalItemsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = UBTConnectLibrary_ConnectPatterns_TagContent_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_IndexCurrentItem" in inputs) {
this.variables.in_IndexCurrentItemIn = inputs.In_IndexCurrentItem;
if("_in_IndexCurrentItemInDataFetchStatus" in inputs) {
this.variables._in_IndexCurrentItemInDataFetchStatus = inputs._in_IndexCurrentItemInDataFetchStatus;
}

}

if("In_TotalItems" in inputs) {
this.variables.in_TotalItemsIn = inputs.In_TotalItems;
if("_in_TotalItemsInDataFetchStatus" in inputs) {
this.variables._in_TotalItemsInDataFetchStatus = inputs._in_TotalItemsInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Directory_Caroussel.CarouselTag");
});
define("UBTConnect.Directory_Caroussel.CarouselTag.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Caroussel.CarouselTag.mvc$model", "UBTConnect.Directory_Caroussel.CarouselTag.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.ConnectPatterns.TagContent.mvc$view", "OutSystems/ReactWidgets/Main"], function (OutSystems, UBTConnectModel, UBTConnectController, React, OSView, UBTConnect_Directory_Caroussel_CarouselTag_mvc_model, UBTConnect_Directory_Caroussel_CarouselTag_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_ConnectPatterns_TagContent_mvc_view, OSWidgets) {
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
        View.displayName = "Directory_Caroussel.CarouselTag";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_TagContent_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Directory_Caroussel_CarouselTag_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Directory_Caroussel_CarouselTag_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_ConnectPatterns_TagContent_mvc_view, {
inputs: {
BackgroundColorId: UBTConnectModel.staticEntities.uBT_Color.neutral0,
Text: ((((model.variables.in_IndexCurrentItemIn + 1)).toString() + " / ") + (model.variables.in_TotalItemsIn).toString()),
_textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IndexCurrentItemInDataFetchStatus, model.variables._in_TotalItemsInDataFetchStatus)
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
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.Directory_Caroussel.CarouselTag.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Caroussel.CarouselTag.mvc$debugger"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Caroussel_CarouselTag_mvc_Debugger) {
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
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:3kpgKiDrmECLIcldYvdd+A:/NRWebFlows.3kpgKiDrmECLIcldYvdd+A:GUqi42j5JzeF3DYtR7PIbA", "UBTConnect", "Directory_Caroussel", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:eAqiVEr7L0+9Xo_CUdT3JQ:/NRWebFlows.3kpgKiDrmECLIcldYvdd+A/NodesShownInESpaceTree.eAqiVEr7L0+9Xo_CUdT3JQ:BHbE8kz2ricygnBfV6tqUw", "UBTConnect", "CarouselTag", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:eAqiVEr7L0+9Xo_CUdT3JQ", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:3kpgKiDrmECLIcldYvdd+A", callContext.id);
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

define("UBTConnect.Directory_Caroussel.CarouselTag.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"qmsTz8QxfkClYkOZCmLASg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IndexCurrentItemIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"kbkugqVz1kO1IP+LWhu89A": {
getter: function (varBag, idService) {
return varBag.model.variables.in_TotalItemsIn;
},
dataType: OS.DataTypes.DataTypes.Integer
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
