define("Connect2_OrbitMobile_MUI.LDM_Blocks_V2.EventCard_V2.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_IS.model", "UBTConnect_Utils.model", "Connect2_LegacyShared.model", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventCard_Box.mvc$model", "Connect2_OrbitMobile_MUI.LDM_Blocks_V2.EventCard_Info_V2.mvc$model", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventCard_Guests.mvc$model", "Connect2_OrbitMobile_IS.model$EventCalendar_V2Rec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_IS.model$CalendarGuestItem_V2Rec", "Connect2_OrbitMobile_MUI.model$CalendarGuestItem_V2List", "Connect2_OrbitMobile_IS.model$GetTimezoneResponse_V2Rec", "Connect2_OrbitMobile_IS.model$CalendarGuestItemRec", "Connect2_OrbitMobile_MUI.model$CalendarGuestItemList", "Connect2_OrbitMobile_IS.model$GetTimezoneResponseRec", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_LegacyShared.model$PhoneCallInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_ISModel, UBTConnect_UtilsModel, Connect2_LegacySharedModel, Connect2_OrbitMobile_MUI_LDM_Blocks_EventCard_Box_mvcModel, Connect2_OrbitMobile_MUI_LDM_Blocks_V2_EventCard_Info_V2_mvcModel, Connect2_OrbitMobile_MUI_LDM_Blocks_EventCard_Guests_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("In_Event", "in_EventIn", "In_Event", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.EventCalendar_V2Rec());
}, false, Connect2_OrbitMobile_ISModel.EventCalendar_V2Rec), 
this.attr("_in_EventInDataFetchStatus", "_in_EventInDataFetchStatus", "_in_EventInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_IsExpandable", "in_IsExpandableIn", "In_IsExpandable", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsExpandableInDataFetchStatus", "_in_IsExpandableInDataFetchStatus", "_in_IsExpandableInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_RightToLeft", "in_RightToLeftIn", "In_RightToLeft", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_RightToLeftInDataFetchStatus", "_in_RightToLeftInDataFetchStatus", "_in_RightToLeftInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = ((Connect2_OrbitMobile_MUI_LDM_Blocks_EventCard_Box_mvcModel.hasValidationWidgets || Connect2_OrbitMobile_MUI_LDM_Blocks_V2_EventCard_Info_V2_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_LDM_Blocks_EventCard_Guests_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_Event" in inputs) {
this.variables.in_EventIn = inputs.In_Event;
if("_in_EventInDataFetchStatus" in inputs) {
this.variables._in_EventInDataFetchStatus = inputs._in_EventInDataFetchStatus;
}

}

if("In_IsExpandable" in inputs) {
this.variables.in_IsExpandableIn = inputs.In_IsExpandable;
if("_in_IsExpandableInDataFetchStatus" in inputs) {
this.variables._in_IsExpandableInDataFetchStatus = inputs._in_IsExpandableInDataFetchStatus;
}

}

if("In_RightToLeft" in inputs) {
this.variables.in_RightToLeftIn = inputs.In_RightToLeft;
if("_in_RightToLeftInDataFetchStatus" in inputs) {
this.variables._in_RightToLeftInDataFetchStatus = inputs._in_RightToLeftInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "LDM_Blocks_V2.EventCard_V2");
});
define("Connect2_OrbitMobile_MUI.LDM_Blocks_V2.EventCard_V2.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "UBTConnect_Utils.model", "Connect2_LegacyShared.model", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.LDM_Blocks_V2.EventCard_V2.mvc$model", "Connect2_OrbitMobile_MUI.LDM_Blocks_V2.EventCard_V2.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventCard_Box.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_OrbitMobile_MUI.LDM_Blocks_V2.EventCard_Info_V2.mvc$view", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventCard_Guests.mvc$view", "Connect2_OrbitMobile_IS.model$EventCalendar_V2Rec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_IS.model$CalendarGuestItem_V2Rec", "Connect2_OrbitMobile_MUI.model$CalendarGuestItem_V2List", "Connect2_OrbitMobile_IS.model$GetTimezoneResponse_V2Rec", "Connect2_OrbitMobile_IS.model$CalendarGuestItemRec", "Connect2_OrbitMobile_MUI.model$CalendarGuestItemList", "Connect2_OrbitMobile_IS.model$GetTimezoneResponseRec", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_LegacyShared.model$PhoneCallInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, UBTConnect_UtilsModel, Connect2_LegacySharedModel, React, OSView, Connect2_OrbitMobile_MUI_LDM_Blocks_V2_EventCard_V2_mvc_model, Connect2_OrbitMobile_MUI_LDM_Blocks_V2_EventCard_V2_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_LDM_Blocks_EventCard_Box_mvc_view, OSWidgets, Connect2_OrbitMobile_MUI_LDM_Blocks_V2_EventCard_Info_V2_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_EventCard_Guests_mvc_view) {
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
        View.displayName = "LDM_Blocks_V2.EventCard_V2";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_OrbitMobile_MUI_LDM_Blocks_EventCard_Box_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_V2_EventCard_Info_V2_mvc_view, Connect2_OrbitMobile_MUI_LDM_Blocks_EventCard_Guests_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_LDM_Blocks_V2_EventCard_V2_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_LDM_Blocks_V2_EventCard_V2_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_OrbitMobile_MUI_LDM_Blocks_EventCard_Box_mvc_view, {
inputs: {
In_EventType: Connect2_OrbitMobile_MUIModel.staticEntities.eventCategory.lDM
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
cardContents: new PlaceholderContent(function () {
return [React.createElement(Connect2_OrbitMobile_MUI_LDM_Blocks_V2_EventCard_Info_V2_mvc_view, {
inputs: {
In_Event: model.variables.in_EventIn,
_in_EventInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EventInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
cardClicked$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks_V2/EventCard_Info_V2 CardClicked");
controller.eventClicked$Action(model.variables.in_EventIn.eventHostIdAttr, model.variables.in_EventIn.eventIdAttr, controller.callContext(eventHandlerContext));
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
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(Connect2_OrbitMobile_MUI_LDM_Blocks_EventCard_Guests_mvc_view, {
inputs: {
In_RightToLeft: model.variables.in_RightToLeftIn,
_in_RightToLeftInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_RightToLeftInDataFetchStatus),
In_GuestCount: model.variables.in_EventIn.guestCountAttr,
_in_GuestCountInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EventInDataFetchStatus),
In_Guests: model.getCachedValue(idService.getId("Odgiv8AFaUyOeW_ZK+uwrg.In_Guests"), function () {
return OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.in_EventIn.guestsAttr, new Connect2_OrbitMobile_MUIModel.CalendarGuestItemList(), function (source, target) {
target.householderIdAttr = source.householderIdAttr;
target.eventGuestIdAttr = source.eventGuestIdAttr;
target.householderNameAttr = source.householderNameAttr;
target.localityIdAttr = source.localityIdAttr;
target.localityNameAttr = source.localityNameAttr;
target.mobilePhoneAttr = source.mobilePhoneAttr;
target.emailAttr = source.emailAttr;
target.workPhoneAttr = source.workPhoneAttr;
target.countryCodeAttr = source.countryCodeAttr;
target.signedImagePathAttr = source.signedImagePathAttr;
target.recordDisabledAttr = source.recordDisabledAttr;
target.householdDisplayAttr = source.householdDisplayAttr;
target.addressAttr = source.addressAttr;
target.countryNameAttr = source.countryNameAttr;
target.longitudeAttr = source.longitudeAttr;
target.latitudeAttr = source.latitudeAttr;
target.timeZoneAttr.tZNameAttr = source.timeZoneAttr.tZNameAttr;
target.timeZoneAttr.windowsNameAttr = source.timeZoneAttr.windowsNameAttr;
target.timeZoneAttr.offsetSecondsAttr = source.timeZoneAttr.offsetSecondsAttr;
target.timeZoneAttr.abbreviationAttr = source.timeZoneAttr.abbreviationAttr;
target.homePhoneAttr = source.homePhoneAttr;
target.householderSignedImagePathAttr = source.householderSignedImagePathAttr;
target.householderFirstNameAttr = source.householderFirstNameAttr;
return target;
});
}, function () {
return model.variables.in_EventIn.guestsAttr;
}),
_in_GuestsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EventInDataFetchStatus),
In_IsExpandable: model.variables.in_IsExpandableIn,
_in_IsExpandableInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsExpandableInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onClick_Message$Action: function (event_ContactPopupDataIn, event_CountryNameIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/EventCard_Guests OnClick_Message");
controller.onClick_Message$Action(event_ContactPopupDataIn, event_CountryNameIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
householdClicked$Action: function (event_HouseholdIdIn, event_HouseholdNameIn, event_CurrentRowNumberIn, event_LengthIn, event_RecordDisabledIn, isHouseholdDisplayedIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/EventCard_Guests HouseholdClicked");
controller.householdClicked$Action(event_HouseholdIdIn, event_HouseholdNameIn, event_CurrentRowNumberIn, event_LengthIn, model.variables.in_EventIn.eventHostIdAttr, model.variables.in_EventIn.eventIdAttr, event_RecordDisabledIn, model.variables.in_EventIn.hostingAttr, isHouseholdDisplayedIn, OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.in_EventIn.guestsAttr, new OS.DataTypes.LongIntegerList(), function (source, target) {
target = source.householderIdAttr;
return target;
}), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
onClick_PhoneCall$Action: function (event_PhoneCallInfoIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/EventCard_Guests OnClick_PhoneCall");
controller.onClick_PhoneCall$Action(event_PhoneCallInfoIn, controller.callContext(eventHandlerContext));
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
uuid: "2",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_IsExpandableIn), asPrimitiveValue(model.variables.in_RightToLeftIn), asPrimitiveValue(model.variables._in_IsExpandableInDataFetchStatus), asPrimitiveValue(model.variables._in_RightToLeftInDataFetchStatus), asPrimitiveValue(model.variables._in_EventInDataFetchStatus), asPrimitiveValue(model.variables.in_EventIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.LDM_Blocks_V2.EventCard_V2.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "UBTConnect_Utils.model", "Connect2_LegacyShared.model", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.LDM_Blocks_V2.EventCard_V2.mvc$debugger", "Connect2_OrbitMobile_IS.model$EventCalendar_V2Rec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_IS.model$CalendarGuestItem_V2Rec", "Connect2_OrbitMobile_MUI.model$CalendarGuestItem_V2List", "Connect2_OrbitMobile_IS.model$GetTimezoneResponse_V2Rec", "Connect2_OrbitMobile_IS.model$CalendarGuestItemRec", "Connect2_OrbitMobile_MUI.model$CalendarGuestItemList", "Connect2_OrbitMobile_IS.model$GetTimezoneResponseRec", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_LegacyShared.model$PhoneCallInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, UBTConnect_UtilsModel, Connect2_LegacySharedModel, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_LDM_Blocks_V2_EventCard_V2_mvc_Debugger) {
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

Controller.prototype.eventClicked$Action = function () {
return Promise.resolve();
};
Controller.prototype.householdClicked$Action = function () {
return Promise.resolve();
};
Controller.prototype.onClick_Message$Action = function () {
return Promise.resolve();
};
Controller.prototype.onClick_PhoneCall$Action = function () {
return Promise.resolve();
};
Controller.prototype.callPhoneEventCard$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:oOtoNzCVnki0KgXQ86GK9A:/NRWebFlows.oOtoNzCVnki0KgXQ86GK9A:T9MqC0UGSbxvJXLBlJ3h9w", "Connect2_OrbitMobile_MUI", "LDM_Blocks_V2", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:LssjeE6t90SvQAAYBdfdfA:/NRWebFlows.oOtoNzCVnki0KgXQ86GK9A/NodesShownInESpaceTree.LssjeE6t90SvQAAYBdfdfA:uJmcW+rtgKGm_H387_qXdQ", "Connect2_OrbitMobile_MUI", "EventCard_V2", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:LssjeE6t90SvQAAYBdfdfA", callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:oOtoNzCVnki0KgXQ86GK9A", callContext.id);
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
return Connect2_OrbitMobile_MUIController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, Connect2_OrbitMobile_MUILanguageResources);
});

define("Connect2_OrbitMobile_MUI.LDM_Blocks_V2.EventCard_V2.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"B7mSTe5Zok6IXaU+XOsRmA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventIn;
}
},
"LDpQGasBo0WM6iTYBnwTYw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsExpandableIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"w345efg3202UzjCo8ihJIg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_RightToLeftIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Gy5Bozp7FUeA5jE0CoT+HQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CardContents"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
