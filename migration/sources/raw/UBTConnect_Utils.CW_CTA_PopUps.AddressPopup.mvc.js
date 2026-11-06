define("UBTConnect_Utils.CW_CTA_PopUps.AddressPopup.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup.mvc$model", "UBTConnect_Utils.model$ContactPopupButtonList", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnect_Utils.model$ContactPopupButtonRec"], function (OutSystems, UBTConnect_UtilsModel, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("AddressPopupButtons", "addressPopupButtonsVar", "AddressPopupButtons", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactPopupButtonList());
}, false, UBTConnect_UtilsModel.ContactPopupButtonList), 
this.attr("GoogleMapsId", "googleMapsIdVar", "GoogleMapsId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "Google";
}, false), 
this.attr("MapsId", "mapsIdVar", "MapsId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "Maps";
}, false), 
this.attr("CopyId", "copyIdVar", "CopyId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "Copy";
}, false), 
this.attr("In_ContactPopupData", "in_ContactPopupDataIn", "In_ContactPopupData", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactPopupDataRec());
}, false, UBTConnect_UtilsModel.ContactPopupDataRec), 
this.attr("_in_ContactPopupDataInDataFetchStatus", "_in_ContactPopupDataInDataFetchStatus", "_in_ContactPopupDataInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ShowGoogleMaps", "showGoogleMapsIn", "ShowGoogleMaps", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_showGoogleMapsInDataFetchStatus", "_showGoogleMapsInDataFetchStatus", "_showGoogleMapsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("In_ContactPopupData" in inputs) {
this.variables.in_ContactPopupDataIn = inputs.In_ContactPopupData;
if("_in_ContactPopupDataInDataFetchStatus" in inputs) {
this.variables._in_ContactPopupDataInDataFetchStatus = inputs._in_ContactPopupDataInDataFetchStatus;
}

}

if("ShowGoogleMaps" in inputs) {
this.variables.showGoogleMapsIn = inputs.ShowGoogleMaps;
if("_showGoogleMapsInDataFetchStatus" in inputs) {
this.variables._showGoogleMapsInDataFetchStatus = inputs._showGoogleMapsInDataFetchStatus;
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
return new OS.Model.ModelFactory(Model, "CW_CTA_PopUps.AddressPopup");
});
define("UBTConnect_Utils.CW_CTA_PopUps.AddressPopup.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "react", "OutSystems/ReactView/Main", "UBTConnect_Utils.CW_CTA_PopUps.AddressPopup.mvc$model", "UBTConnect_Utils.CW_CTA_PopUps.AddressPopup.mvc$controller", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect_Utils.model$ContactPopupButtonList", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnect_Utils.model$ContactPopupButtonRec"], function (OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, React, OSView, UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_mvc_model, UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_mvc_controller, UBTConnect_UtilsClientVariables, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_mvc_view, OSWidgets) {
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
        View.displayName = "CW_CTA_PopUps.AddressPopup";
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
                return UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_mvc_controller;
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
In_ContactPopupButtons: model.variables.addressPopupButtonsVar,
In_ContactPopupData: model.variables.in_ContactPopupDataIn,
_in_ContactPopupDataInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ContactPopupDataInDataFetchStatus),
In_ImageSizeId: model.variables.in_ImageSizeIdIn,
_in_ImageSizeIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ImageSizeIdInDataFetchStatus)
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
return controller.onClick_Button$Action(event_IdIn, controller.callContext(eventHandlerContext));
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
define("UBTConnect_Utils.CW_CTA_PopUps.AddressPopup.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.languageResources", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.CW_CTA_PopUps.AddressPopup.mvc$debugger", "UBTConnect_Utils.model$ContactPopupButtonList", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTConnect_Utils.model$ContactPopupButtonRec"], function (OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnect_UtilsLanguageResources, UBTConnect_UtilsClientVariables, UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_mvc_Debugger) {
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
Controller.prototype._screenEvent_OnInitialize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ScreenEvent_OnInitialize");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:pZoyQALakkG_YbzP43eItw:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg/NodesShownInESpaceTree.N3UzwjM5QkOuXkcCsQPYHg/ClientActions.pZoyQALakkG_YbzP43eItw:LZIlZtOcUvLPITazrS6e2g", "UBTConnect_Utils", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ai+VJYMK7kmDgN6tCQnrWQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:uyjhwvYvFUyZve+_u5gIGQ", callContext.id);
// Execute Action: Action_SetAddressPopupButtons
controller._action_SetAddressPopupButtons$Action(callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:cIzYugBX7Eit_KrQs+yyiQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:pZoyQALakkG_YbzP43eItw", callContext.id);
}

};
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
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:t_BLXf9I10qIdLrVrn6bzw:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg/NodesShownInESpaceTree.N3UzwjM5QkOuXkcCsQPYHg/ClientActions.t_BLXf9I10qIdLrVrn6bzw:ne2d2DS2MhIq8jMS_EzMww", "UBTConnect_Utils", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:zCOeOlgAbUa0DMGKUFcMlg", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ItD09fZgD0yDpDThNmz+lA", callContext.id);
// Execute Action: ScreenEvent_OnInitialize
controller._screenEvent_OnInitialize$Action(callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:a8I6S5S+l0m5uX7oEgEJSA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:t_BLXf9I10qIdLrVrn6bzw", callContext.id);
}

};
Controller.prototype._action_SetAddressPopupButtons$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_SetAddressPopupButtons");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:rvhIgN4jxE+5xeswcI1d0Q:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg/NodesShownInESpaceTree.N3UzwjM5QkOuXkcCsQPYHg/ClientActions.rvhIgN4jxE+5xeswcI1d0Q:_cLB5cXfkHFgGO_eDwd+xw", "UBTConnect_Utils", "Action_SetAddressPopupButtons", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:86tLt_2CVEemtOcdZLmTmA", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:KTLOD5vZs0C9U0GgF402_A", callContext.id);
// Execute Action: ListClear
OS.SystemActions.listClear(model.variables.addressPopupButtonsVar, callContext);
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:amdzCIYMakqSWFdoay12iA", callContext.id) && model.variables.showGoogleMapsIn)) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:rgSbcKU+X0SYTJf_VzzOrg", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(model.variables.addressPopupButtonsVar, function () {
var rec = new UBTConnect_UtilsModel.ContactPopupButtonRec();
rec.idAttr = model.variables.googleMapsIdVar;
rec.uBT_IconIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.openNew;
rec.labelAttr = "Open in Google Maps";
return rec;
}(), callContext);
}

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:qPVoQ57b5EeSxiUmjetSEw", callContext.id);
// Execute Action: ListAppendAll
OS.SystemActions.listAppendAll(model.variables.addressPopupButtonsVar, function () {
var list = new UBTConnect_UtilsModel.ContactPopupButtonList();
list.pushAll([function () {
var rec = new UBTConnect_UtilsModel.ContactPopupButtonRec();
rec.idAttr = model.variables.mapsIdVar;
rec.uBT_IconIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.openNew;
rec.labelAttr = "Open in Maps";
return rec;
}(), function () {
var rec = new UBTConnect_UtilsModel.ContactPopupButtonRec();
rec.idAttr = model.variables.copyIdVar;
rec.uBT_IconIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Icons.contentCopy;
rec.labelAttr = "Copy Address";
return rec;
}()]);
return list;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:JabDXWyTD0+MF31f5Mb+gQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:rvhIgN4jxE+5xeswcI1d0Q", callContext.id);
}

};
Controller.prototype._onClick_Button$Action = function (identifierIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_Button");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.CW_CTA_PopUps.AddressPopup.OnClick_Button$vars"))());
vars.value.identifierInLocal = identifierIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:oEC6jZM43ECkPEvzWqMGhg:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg/NodesShownInESpaceTree.N3UzwjM5QkOuXkcCsQPYHg/ClientActions.oEC6jZM43ECkPEvzWqMGhg:5lxnGsBCGSb6hYR3wt5e7A", "UBTConnect_Utils", "OnClick_Button", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:1mbxPdoE1EiywsuwMPUsLg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ywQHaFifR023zrlIs+Kewg", callContext.id) && (vars.value.identifierInLocal === model.variables.googleMapsIdVar))) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:TklAheBcxEypsjZvN57WTg", callContext.id);
// Trigger Event: Event_OpenInGoogleMaps
return controller.event_OpenInGoogleMaps$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:DeGOaA1YOUGLSW2COQXxxg", callContext.id);
});
} else {
return OS.Flow.executeSequence(function () {
if((vars.value.identifierInLocal === model.variables.mapsIdVar)) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:TYZQiNO9WECVXTSgMve8Ng", callContext.id);
// Trigger Event: Event_OpenInMaps
return controller.event_OpenInMaps$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:DeGOaA1YOUGLSW2COQXxxg", callContext.id);
});
} else {
return OS.Flow.executeSequence(function () {
if((vars.value.identifierInLocal === model.variables.copyIdVar)) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:5bEmiXLKT0+IXv6oc9f5wA", callContext.id);
// Trigger Event: Event_CopyAddress
return controller.event_CopyAddress$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:DeGOaA1YOUGLSW2COQXxxg", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:wCqZA9c_e0S7USe85D6HXQ", callContext.id);
}

});
}

});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:oEC6jZM43ECkPEvzWqMGhg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:oEC6jZM43ECkPEvzWqMGhg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect_Utils.CW_CTA_PopUps.AddressPopup.OnClick_Button$vars", [{
name: "Identifier",
attrName: "identifierInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);

Controller.prototype.screenEvent_OnInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._screenEvent_OnInitialize$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.action_SetAddressPopupButtons$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_SetAddressPopupButtons$Action, callContext);

};
Controller.prototype.onClick_Button$Action = function (identifierIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_Button$Action, callContext, identifierIn);

};
Controller.prototype.event_CopyAddress$Action = function () {
return Promise.resolve();
};
Controller.prototype.event_OpenInMaps$Action = function () {
return Promise.resolve();
};
Controller.prototype.event_Cancel$Action = function () {
return Promise.resolve();
};
Controller.prototype.event_OpenInGoogleMaps$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:40BOH8zZHka5ciwmYfvqVg:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg:9C3kcfT08imn_yT0sR8WzQ", "UBTConnect_Utils", "CW_CTA_PopUps", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:N3UzwjM5QkOuXkcCsQPYHg:/NRWebFlows.40BOH8zZHka5ciwmYfvqVg/NodesShownInESpaceTree.N3UzwjM5QkOuXkcCsQPYHg:ML_oGAGBGHbnBt3lfWhCig", "UBTConnect_Utils", "AddressPopup", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:N3UzwjM5QkOuXkcCsQPYHg", callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:40BOH8zZHka5ciwmYfvqVg", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "CW_CTA_PopUps/AddressPopup On Initialize");
return controller.screenEvent_OnInitialize$Action(callContext);

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

OutSystemsDebugger.setThreadStartName(callContext.id, "CW_CTA_PopUps/AddressPopup On Parameters Changed");
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

define("UBTConnect_Utils.CW_CTA_PopUps.AddressPopup.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"r34AhxhhXk+3g5_VPfptog": {
getter: function (varBag, idService) {
return varBag.vars.value.identifierInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"LXRAylGIKEi6Dk4MnjFRCw": {
getter: function (varBag, idService) {
return varBag.model.variables.addressPopupButtonsVar;
}
},
"3M8VROub70Su3Tb75XyExw": {
getter: function (varBag, idService) {
return varBag.model.variables.googleMapsIdVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"gqMrqyT3LkeanQHDnciUZA": {
getter: function (varBag, idService) {
return varBag.model.variables.mapsIdVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Z4ihW3M0eUaVrCdwe49cRg": {
getter: function (varBag, idService) {
return varBag.model.variables.copyIdVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"yg4NiYAeAEeRcY0zVJKLfw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ContactPopupDataIn;
}
},
"8f46ys8YDUat6y7pHaF5Gw": {
getter: function (varBag, idService) {
return varBag.model.variables.showGoogleMapsIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"1h6wVjlboUGd7ix0sVyZ6A": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ImageSizeIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
