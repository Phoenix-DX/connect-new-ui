define("UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_IconText.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary"], function (OutSystems, UBTConnectModel, UBTConnectLibraryModel, UBTConnectLibrary_ConnectPatterns_IconText_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("In_Text", "in_TextIn", "In_Text", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_TextInDataFetchStatus", "_in_TextInDataFetchStatus", "_in_TextInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_FontSize", "in_FontSizeIn", "In_FontSize", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_FontSizeInDataFetchStatus", "_in_FontSizeInDataFetchStatus", "_in_FontSizeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_UBT_IconId", "in_UBT_IconIdIn", "In_UBT_IconId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_UBT_IconIdInDataFetchStatus", "_in_UBT_IconIdInDataFetchStatus", "_in_UBT_IconIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_UBT_ColorId", "in_UBT_ColorIdIn", "In_UBT_ColorId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_UBT_ColorIdInDataFetchStatus", "_in_UBT_ColorIdInDataFetchStatus", "_in_UBT_ColorIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (UBTConnectLibrary_ConnectPatterns_IconText_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_Text" in inputs) {
this.variables.in_TextIn = inputs.In_Text;
if("_in_TextInDataFetchStatus" in inputs) {
this.variables._in_TextInDataFetchStatus = inputs._in_TextInDataFetchStatus;
}

}

if("In_FontSize" in inputs) {
this.variables.in_FontSizeIn = inputs.In_FontSize;
if("_in_FontSizeInDataFetchStatus" in inputs) {
this.variables._in_FontSizeInDataFetchStatus = inputs._in_FontSizeInDataFetchStatus;
}

}

if("In_UBT_IconId" in inputs) {
this.variables.in_UBT_IconIdIn = inputs.In_UBT_IconId;
if("_in_UBT_IconIdInDataFetchStatus" in inputs) {
this.variables._in_UBT_IconIdInDataFetchStatus = inputs._in_UBT_IconIdInDataFetchStatus;
}

}

if("In_UBT_ColorId" in inputs) {
this.variables.in_UBT_ColorIdIn = inputs.In_UBT_ColorId;
if("_in_UBT_ColorIdInDataFetchStatus" in inputs) {
this.variables._in_UBT_ColorIdInDataFetchStatus = inputs._in_UBT_ColorIdInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Directory_SupperMeetings.SupperMeeting_ImageCard_Content_IconText");
});
define("UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_IconText.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_IconText.mvc$model", "UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_IconText.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, React, OSView, UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_IconText_mvc_model, UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_IconText_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view) {
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
        View.displayName = "Directory_SupperMeetings.SupperMeeting_ImageCard_Content_IconText";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_IconText_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_IconText_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
inputs: {
SpacingSize: UBTConnectModel.staticEntities.uBT_Size.extraSmall,
Text: model.variables.in_TextIn,
_textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_TextInDataFetchStatus),
TextOptions: model.getCachedValue(idService.getId("UmMqiZ4ygkKbeyVLPBXxxQ.TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.fontSizeAttr = model.variables.in_FontSizeIn;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}, function () {
return model.variables.in_FontSizeIn;
}),
_textOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_FontSizeInDataFetchStatus)
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
icon: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_ColorId: model.variables.in_UBT_ColorIdIn,
_in_ColorIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_UBT_ColorIdInDataFetchStatus),
In_IconId: model.variables.in_UBT_IconIdIn,
_in_IconIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_UBT_IconIdInDataFetchStatus),
In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.nonStandard_16
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
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_UBT_IconIdIn), asPrimitiveValue(model.variables._in_UBT_IconIdInDataFetchStatus), asPrimitiveValue(model.variables._in_UBT_ColorIdInDataFetchStatus), asPrimitiveValue(model.variables.in_UBT_ColorIdIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_IconText.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_IconText.mvc$debugger", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_IconText_mvc_Debugger) {
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
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:E53piema20KUP3HqQIZR6A:/NRWebFlows.E53piema20KUP3HqQIZR6A:zbxcFH+tyRwg__bC3mWnVg", "UBTConnect", "Directory_SupperMeetings", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:9Fj8dGuYn0aeE2oJe2F82A:/NRWebFlows.E53piema20KUP3HqQIZR6A/NodesShownInESpaceTree.9Fj8dGuYn0aeE2oJe2F82A:2J4wap2DKs14Uhg_J0wMZA", "UBTConnect", "SupperMeeting_ImageCard_Content_IconText", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:9Fj8dGuYn0aeE2oJe2F82A", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:E53piema20KUP3HqQIZR6A", callContext.id);
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

define("UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_IconText.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"uS+gxq_Sn0i3jetsSki0PA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_TextIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"tE9PM6vBY0udqwgyqNmBKQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_FontSizeIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"j4EwE29N106ozIkdiAzVqg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_UBT_IconIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"dIrAvkMxrUKJDsfy+uPAmw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_UBT_ColorIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"AI0Rk_9uIk2x3vDdQZAMGQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
