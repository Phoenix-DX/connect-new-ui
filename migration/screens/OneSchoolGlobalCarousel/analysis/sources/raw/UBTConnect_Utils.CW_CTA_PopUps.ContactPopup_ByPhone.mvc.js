define("UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup.mvc$model", "UBTConnect_Utils.model$ContactPopupButtonTextRecordList", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnect_Utils.model$ContactPopupButtonList", "UBTConnect_Utils.model$ContactPopupButtonTextRecord", "UBTConnect_Utils.model$ContactPopupButtonRec"], function (OutSystems, UBTConnect_UtilsModel, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("ContactPopupButtons", "contactPopupButtonsVar", "ContactPopupButtons", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactPopupButtonTextRecordList());
}, false, UBTConnect_UtilsModel.ContactPopupButtonTextRecordList), 
this.attr("In_CallPopupData", "in_CallPopupDataIn", "In_CallPopupData", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactByPhonePopupDataRec());
}, false, UBTConnect_UtilsModel.ContactByPhonePopupDataRec), 
this.attr("_in_CallPopupDataInDataFetchStatus", "_in_CallPopupDataInDataFetchStatus", "_in_CallPopupDataInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ImageSizeId", "in_ImageSizeIdIn", "In_ImageSizeId", true, false, OS.DataTypes.DataTypes.Text, function () {
return UBTConnect_UtilsModel.staticEntities.uBT_ImageSize.extraLarge_100;
}, false), 
this.attr("_in_ImageSizeIdInDataFetchStatus", "_in_ImageSizeIdInDataFetchStatus", "_in_ImageSizeIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_CallPopupData" in inputs) {
this.variables.in_CallPopupDataIn = inputs.In_CallPopupData;
if("_in_CallPopupDataInDataFetchStatus" in inputs) {
this.variables._in_CallPopupDataInDataFetchStatus = inputs._in_CallPopupDataInDataFetchStatus;
}

}

if("In_ImageSizeId" in inputs) {
this.variables.in_ImageSizeIdIn = inputs.In_ImageSizeId;
if("_in_ImageSizeIdInDataFetchStatus" in inputs) {
this.variables._in_ImageSizeIdInDataFetchStatus = inputs._in_ImageSizeIdInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "CW_CTA_PopUps.ContactPopup_ByPhone");
});
define("UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "react", "OutSystems/ReactView/Main", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc$model", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc$controller", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect_Utils.model$ContactPopupButtonTextRecordList", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnect_Utils.model$ContactPopupButtonList", "UBTConnect_Utils.model$ContactPopupButtonTextRecord", "UBTConnect_Utils.model$ContactPopupButtonRec"], function (OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, React, OSView, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvc_model, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvc_controller, UBTConnect_UtilsClientVariables, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_mvc_view, OSWidgets) {
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
        View.displayName = "CW_CTA_PopUps.ContactPopup_ByPhone";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_mvc_view, {
inputs: {
In_ContactPopupData: model.getCachedValue(idService.getId("MqLFzPQtEkGeDc1AqKQVVg.In_ContactPopupData"), function () {
return OS.DataConversion.JSConversions.typeConvertRecord(model.variables.in_CallPopupDataIn, new UBTConnect_UtilsModel.ContactPopupDataRec(), function (source, target) {
target = source.contactPopupDataAttr;
return target;
});
}, function () {
return model.variables.in_CallPopupDataIn;
}),
_in_ContactPopupDataInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_CallPopupDataInDataFetchStatus),
In_ImageSizeId: model.variables.in_ImageSizeIdIn,
_in_ImageSizeIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ImageSizeIdInDataFetchStatus),
In_ContactPopupButtons: model.getCachedValue(idService.getId("MqLFzPQtEkGeDc1AqKQVVg.In_ContactPopupButtons"), function () {
return OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.contactPopupButtonsVar, new UBTConnect_UtilsModel.ContactPopupButtonList(), function (source, target) {
target = source.contactPopupButtonAttr;
return target;
});
}, function () {
return model.variables.contactPopupButtonsVar;
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_Clicked$Action: function (event_IdIn, event_RowNumberIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_CTA_PopUps/ContactPopup Event_Clicked");
return controller.onClick_CallButton$Action(event_RowNumberIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
event_Cancel$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_CTA_PopUps/ContactPopup Event_Cancel");
controller.event_Cancel$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
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
define("UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.languageResources", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc$debugger", "UBTConnect_Utils.model$ContactPopupButtonTextRecordList", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnect_Utils.model$ContactPopupButtonList", "UBTConnect_Utils.model$ContactPopupButtonTextRecord", "UBTConnect_Utils.model$ContactPopupButtonRec"], function (OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsLanguageResources, UBTConnect_UtilsClientVariables, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvc_Debugger) {
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
Controller.prototype._onInitialize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:SZ_PSNZB_0WrePgpigdhVg:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg/NodesShownInESpaceTree.iEjyfVVCok6enJ7AHkowwQ/ClientActions.SZ_PSNZB_0WrePgpigdhVg:njOnaVxiPA+Aem7Br4N1hA", "UBTConnect_Utils", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:9tVHmk7SM0qqxxnvsojsTg", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:EMrU33e+VkS3y+vN8ApnWw", callContext.id);
// Execute Action: Action_SetContactPopupButtons
controller._action_SetContactPopupButtons$Action(callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:kh9SccRQkk2DjKbNPBXDlg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:SZ_PSNZB_0WrePgpigdhVg", callContext.id);
}

};
Controller.prototype._action_SetContactPopupButtons$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_SetContactPopupButtons");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:IXLQgfM9F0ONAsZfL++WnA:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg/NodesShownInESpaceTree.iEjyfVVCok6enJ7AHkowwQ/ClientActions.IXLQgfM9F0ONAsZfL++WnA:V5bYnZllLSWoFUpOr2Y+KA", "UBTConnect_Utils", "Action_SetContactPopupButtons", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:sCBHBBhwj0CJBJeuBAvRtw", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Kon78sV4+EGzrLF36GSWbw", callContext.id) && (model.variables.in_CallPopupDataIn.contactPopupDataAttr.actionNameAttr === ""))) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:MZ0T4fl6akOTerNVChUy0g", callContext.id);
// In_CallPopupData.ContactPopupData.ActionName = "Call"
model.variables.in_CallPopupDataIn.contactPopupDataAttr.actionNameAttr = "Call";
}

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:bCQB_7_DJkaYM8A2q0aNuw", callContext.id);
// Execute Action: ListClear
OS.SystemActions.listClear(model.variables.contactPopupButtonsVar, callContext);
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ONCLunlnME+rubLZ7ohKMg", callContext.id) && ((model.variables.in_CallPopupDataIn.phoneAttr) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:zAKDO8qqbEOkrXBlCVODEQ", callContext.id);
// Execute Action: ListAppend_GenericPhone
OS.SystemActions.listAppend(model.variables.contactPopupButtonsVar, function () {
var rec = new UBTConnect_UtilsModel.ContactPopupButtonTextRecord();
rec.contactPopupButtonAttr = function () {
var rec = new UBTConnect_UtilsModel.ContactPopupButtonRec();
rec.idAttr = "0";
rec.labelAttr = "Call";
return rec;
}();
rec.numberAttr = model.variables.in_CallPopupDataIn.phoneAttr;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:k_QiXmpx9UCqhbg7IAdZlw", callContext.id);
} else {
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:JVAHQcBsK0a9ZR+eQQsffg", callContext.id) && ((model.variables.in_CallPopupDataIn.mobilePhoneAttr) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:TKhRLLYAOEavImN26tRWXw", callContext.id);
// Execute Action: ListAppend_Mobile
OS.SystemActions.listAppend(model.variables.contactPopupButtonsVar, function () {
var rec = new UBTConnect_UtilsModel.ContactPopupButtonTextRecord();
rec.contactPopupButtonAttr = function () {
var rec = new UBTConnect_UtilsModel.ContactPopupButtonRec();
rec.idAttr = "1";
rec.uBT_IconIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.callFill;
rec.labelAttr = "Mobile";
return rec;
}();
rec.numberAttr = model.variables.in_CallPopupDataIn.mobilePhoneAttr;
return rec;
}(), callContext);
}

if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:WPp6dYgc10CJZNAY8z6TTg", callContext.id) && ((model.variables.in_CallPopupDataIn.homePhoneAttr) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:VMzqRzpqHEK4+X4C88etBg", callContext.id);
// Execute Action: ListAppend_Home
OS.SystemActions.listAppend(model.variables.contactPopupButtonsVar, function () {
var rec = new UBTConnect_UtilsModel.ContactPopupButtonTextRecord();
rec.contactPopupButtonAttr = function () {
var rec = new UBTConnect_UtilsModel.ContactPopupButtonRec();
rec.idAttr = "2";
rec.uBT_IconIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.homeFill;
rec.labelAttr = "Home";
return rec;
}();
rec.numberAttr = model.variables.in_CallPopupDataIn.homePhoneAttr;
return rec;
}(), callContext);
}

if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:KgTHw_7Al0uKlnD_XPYk2w", callContext.id) && ((model.variables.in_CallPopupDataIn.workPhoneAttr) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:CDqJ4Akd50OOYXprvV5flQ", callContext.id);
// Execute Action: ListAppend_Work
OS.SystemActions.listAppend(model.variables.contactPopupButtonsVar, function () {
var rec = new UBTConnect_UtilsModel.ContactPopupButtonTextRecord();
rec.contactPopupButtonAttr = function () {
var rec = new UBTConnect_UtilsModel.ContactPopupButtonRec();
rec.idAttr = "3";
rec.uBT_IconIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.enterprise;
rec.labelAttr = "Work";
return rec;
}();
rec.numberAttr = model.variables.in_CallPopupDataIn.workPhoneAttr;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:2newkmhLRkefF2XrFuJ2Kw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:2newkmhLRkefF2XrFuJ2Kw", callContext.id);
}

}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:IXLQgfM9F0ONAsZfL++WnA", callContext.id);
}

};
Controller.prototype._onClick_CallButton$Action = function (event_RowNumberIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_CallButton");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.OnClick_CallButton$vars"))());
vars.value.event_RowNumberInLocal = event_RowNumberIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:7ihNuihkpEacjGyR+zZHNQ:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg/NodesShownInESpaceTree.iEjyfVVCok6enJ7AHkowwQ/ClientActions.7ihNuihkpEacjGyR+zZHNQ:8zeHZ+CfY8uM4FM1RREVRg", "UBTConnect_Utils", "OnClick_CallButton", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:1JpEZkMiTkO4BOct+33I_g", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:A8RUMzMUz0iNoKwwmF7GCg", callContext.id);
// Trigger Event: Event_Call
return controller.event_Call$Action(model.variables.contactPopupButtonsVar.getItem(vars.value.event_RowNumberInLocal).numberAttr, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:qLCvu+F3QkSfVoAsChOj0Q", callContext.id);
// Destination: /UBTConnect_Utils/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(("tel:" + model.variables.contactPopupButtonsVar.getItem(vars.value.event_RowNumberInLocal).numberAttr), {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:7ihNuihkpEacjGyR+zZHNQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:7ihNuihkpEacjGyR+zZHNQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.OnClick_CallButton$vars", [{
name: "Event_RowNumber",
attrName: "event_RowNumberInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._onParametersChanged$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:ZANC_k8i0E+SVBQlwOv6aQ:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg/NodesShownInESpaceTree.iEjyfVVCok6enJ7AHkowwQ/ClientActions.ZANC_k8i0E+SVBQlwOv6aQ:7+cgjX4Erzj9U4BtsIuqYQ", "UBTConnect_Utils", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:tbQ1WACziUm4zgedPfCI7A", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Oi7RD382Lk+42jL8HK3xtg", callContext.id) && model.variables.in_CallPopupDataIn.contactPopupDataAttr.showPopupAttr)) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:BhOJ2L55X0Wtuo5Ppk+4gw", callContext.id);
// Execute Action: Action_SetContactPopupButtons
controller._action_SetContactPopupButtons$Action(callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:AzN3meJ+aEyvrAL7pGRR3g", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:AzN3meJ+aEyvrAL7pGRR3g", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:ZANC_k8i0E+SVBQlwOv6aQ", callContext.id);
}

};

Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.action_SetContactPopupButtons$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_SetContactPopupButtons$Action, callContext);

};
Controller.prototype.onClick_CallButton$Action = function (event_RowNumberIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_CallButton$Action, callContext, event_RowNumberIn);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.event_Call$Action = function () {
return Promise.resolve();
};
Controller.prototype.event_Cancel$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:40BOH8zZHka5ciwmYfvqVg:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg:9C3kcfT08imn_yT0sR8WzQ", "UBTConnect_Utils", "CW_CTA_PopUps", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:iEjyfVVCok6enJ7AHkowwQ:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg/NodesShownInESpaceTree.iEjyfVVCok6enJ7AHkowwQ:5npqC_o5hXPJdrw6U0Wl0g", "UBTConnect_Utils", "ContactPopup_ByPhone", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:iEjyfVVCok6enJ7AHkowwQ", callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:40BOH8zZHka5ciwmYfvqVg", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "CW_CTA_PopUps/ContactPopup_ByPhone On Initialize");
return controller.onInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "CW_CTA_PopUps/ContactPopup_ByPhone On Parameters Changed");
return controller.onParametersChanged$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.handleError = function (ex) {
return controller.handleError(ex);
};
Controller.checkPermissions = function () {
};
Controller.prototype.getDefaultTimeout = function () {
return UBTConnect_UtilsController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnect_UtilsLanguageResources);
});

define("UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"W3dVTvSFxEK8eUl6lyHXDA": {
getter: function (varBag, idService) {
return varBag.vars.value.event_RowNumberInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"XQhnNISejkyrDhBpC1xmBg": {
getter: function (varBag, idService) {
return varBag.model.variables.contactPopupButtonsVar;
}
},
"nZ53okGxiky96MBkPV3Gzw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_CallPopupDataIn;
}
},
"LupZ272H+EuxFPVw+Givfg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ImageSizeIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
