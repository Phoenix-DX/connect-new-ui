define("Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_HostCard.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.Reusable.Person_Contact_Options.mvc$model", "Connect2_LegacyShared.controller$FlipHouseholdName", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_LegacySharedController, Connect2_LegacyShared_Reusable_Person_Contact_Options_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("In_IsAssigned", "in_IsAssignedIn", "In_IsAssigned", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsAssignedInDataFetchStatus", "_in_IsAssignedInDataFetchStatus", "_in_IsAssignedInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_HostURL", "in_HostURLIn", "In_HostURL", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_HostURLInDataFetchStatus", "_in_HostURLInDataFetchStatus", "_in_HostURLInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_HostName", "in_HostNameIn", "In_HostName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_HostNameInDataFetchStatus", "_in_HostNameInDataFetchStatus", "_in_HostNameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_Address", "in_AddressIn", "In_Address", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_AddressInDataFetchStatus", "_in_AddressInDataFetchStatus", "_in_AddressInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_IsHost", "in_IsHostIn", "In_IsHost", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsHostInDataFetchStatus", "_in_IsHostInDataFetchStatus", "_in_IsHostInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_Phone", "in_PhoneIn", "In_Phone", true, false, OS.DataTypes.DataTypes.PhoneNumber, function () {
return "";
}, false), 
this.attr("_in_PhoneInDataFetchStatus", "_in_PhoneInDataFetchStatus", "_in_PhoneInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("MaxPhotoWidth", "maxPhotoWidthIn", "MaxPhotoWidth", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 100;
}, false), 
this.attr("_maxPhotoWidthInDataFetchStatus", "_maxPhotoWidthInDataFetchStatus", "_maxPhotoWidthInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("MaxPhotoHeight", "maxPhotoHeightIn", "MaxPhotoHeight", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 55;
}, false), 
this.attr("_maxPhotoHeightInDataFetchStatus", "_maxPhotoHeightInDataFetchStatus", "_maxPhotoHeightInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("HouseholdDisplay", "householdDisplayIn", "HouseholdDisplay", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_householdDisplayInDataFetchStatus", "_householdDisplayInDataFetchStatus", "_householdDisplayInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_HostEmail", "in_HostEmailIn", "In_HostEmail", true, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, false), 
this.attr("_in_HostEmailInDataFetchStatus", "_in_HostEmailInDataFetchStatus", "_in_HostEmailInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = Connect2_LegacyShared_Reusable_Person_Contact_Options_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_IsAssigned" in inputs) {
this.variables.in_IsAssignedIn = inputs.In_IsAssigned;
if("_in_IsAssignedInDataFetchStatus" in inputs) {
this.variables._in_IsAssignedInDataFetchStatus = inputs._in_IsAssignedInDataFetchStatus;
}

}

if("In_HostURL" in inputs) {
this.variables.in_HostURLIn = inputs.In_HostURL;
if("_in_HostURLInDataFetchStatus" in inputs) {
this.variables._in_HostURLInDataFetchStatus = inputs._in_HostURLInDataFetchStatus;
}

}

if("In_HostName" in inputs) {
this.variables.in_HostNameIn = inputs.In_HostName;
if("_in_HostNameInDataFetchStatus" in inputs) {
this.variables._in_HostNameInDataFetchStatus = inputs._in_HostNameInDataFetchStatus;
}

}

if("In_Address" in inputs) {
this.variables.in_AddressIn = inputs.In_Address;
if("_in_AddressInDataFetchStatus" in inputs) {
this.variables._in_AddressInDataFetchStatus = inputs._in_AddressInDataFetchStatus;
}

}

if("In_IsHost" in inputs) {
this.variables.in_IsHostIn = inputs.In_IsHost;
if("_in_IsHostInDataFetchStatus" in inputs) {
this.variables._in_IsHostInDataFetchStatus = inputs._in_IsHostInDataFetchStatus;
}

}

if("In_Phone" in inputs) {
this.variables.in_PhoneIn = inputs.In_Phone;
if("_in_PhoneInDataFetchStatus" in inputs) {
this.variables._in_PhoneInDataFetchStatus = inputs._in_PhoneInDataFetchStatus;
}

}

if("MaxPhotoWidth" in inputs) {
this.variables.maxPhotoWidthIn = inputs.MaxPhotoWidth;
if("_maxPhotoWidthInDataFetchStatus" in inputs) {
this.variables._maxPhotoWidthInDataFetchStatus = inputs._maxPhotoWidthInDataFetchStatus;
}

}

if("MaxPhotoHeight" in inputs) {
this.variables.maxPhotoHeightIn = inputs.MaxPhotoHeight;
if("_maxPhotoHeightInDataFetchStatus" in inputs) {
this.variables._maxPhotoHeightInDataFetchStatus = inputs._maxPhotoHeightInDataFetchStatus;
}

}

if("HouseholdDisplay" in inputs) {
this.variables.householdDisplayIn = inputs.HouseholdDisplay;
if("_householdDisplayInDataFetchStatus" in inputs) {
this.variables._householdDisplayInDataFetchStatus = inputs._householdDisplayInDataFetchStatus;
}

}

if("In_HostEmail" in inputs) {
this.variables.in_HostEmailIn = inputs.In_HostEmail;
if("_in_HostEmailInDataFetchStatus" in inputs) {
this.variables._in_HostEmailInDataFetchStatus = inputs._in_HostEmailInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "LDM_Blocks.EventDetail_HostCard");
});
define("Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_HostCard.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_HostCard.mvc$model", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_HostCard.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Reusable.Person_Contact_Options.mvc$view", "Connect2_LegacyShared.controller$FlipHouseholdName", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_LegacySharedController, React, OSView, Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_HostCard_mvc_model, Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_HostCard_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets, Connect2_LegacyShared_Reusable_Person_Contact_Options_mvc_view) {
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
        View.displayName = "LDM_Blocks.EventDetail_HostCard";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Reusable_Person_Contact_Options_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_HostCard_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_HostCard_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "event-detail-hostcard",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "event-detail-hostcard-content",
visible: !((model.variables.in_IsHostIn && !(model.variables.in_IsAssignedIn))),
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsHostInDataFetchStatus, model.variables._in_IsAssignedInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/EventDetail_HostCard/Container onclick");
controller.hostInformation$Action(model.variables.householdDisplayIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
style: "event-detail-hostcard-host",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "event-detail-hostcard-content-photo",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.in_IsAssignedIn, false, this, function () {
return [$if(((model.variables.in_HostURLIn) !== ("")), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: ((((((((((("width: " + (model.variables.maxPhotoWidthIn).toString()) + "px; min-width: ") + (model.variables.maxPhotoWidthIn).toString()) + "px; height: ") + (model.variables.maxPhotoHeightIn).toString()) + "px; min-height: ") + (model.variables.maxPhotoHeightIn).toString()) + "px; ") + "background-image: url(\'") + model.variables.in_HostURLIn) + "\');")
},
style: "event-detail-photo",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: (((("width: " + (model.variables.maxPhotoWidthIn).toString()) + "px; height: ") + (model.variables.maxPhotoHeightIn).toString()) + "px;")
},
style: "event-detail-photo-blank",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "users",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: (((("width: " + (model.variables.maxPhotoWidthIn).toString()) + "px; height: ") + (model.variables.maxPhotoHeightIn).toString()) + "px;")
},
style: "event-detail-photo-blank",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "users",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: model.getCachedValue(idService.getId("eA1sTNKPXE6UE_BEuQglVg.style"), function () {
return ((model.variables.in_IsAssignedIn) ? (((((model.variables.in_AddressIn) !== (""))) ? ("border-bottom: 1px solid var(--color-neutral-3);") : (""))) : (""));
}, function () {
return model.variables.in_IsAssignedIn;
}, function () {
return model.variables.in_AddressIn;
})
},
gridProperties: {
classes: "OSInline"
},
style: "event-detail-hostcard-content-info",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "event-detail-hostcard-content-info-title",
value: "Host",
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "event-detail-hostcard-content-info-name",
value: model.getCachedValue(idService.getId("Dm_mB7A1Pkajmz+hkVw3lA.Value"), function () {
return ((model.variables.in_IsAssignedIn) ? (((((model.variables.in_HostNameIn) !== (""))) ? (model.variables.in_HostNameIn) : ("Your Host"))) : ("Host Allocation Pending"));
}, function () {
return model.variables.in_IsAssignedIn;
}, function () {
return model.variables.in_HostNameIn;
}),
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsAssignedInDataFetchStatus, model.variables._in_HostNameInDataFetchStatus)
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_LegacyShared_Reusable_Person_Contact_Options_mvc_view, {
inputs: {
EmailAddress: model.variables.in_HostEmailIn,
_emailAddressInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HostEmailInDataFetchStatus),
Phone: model.variables.in_PhoneIn,
_phoneInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_PhoneInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
emailClicked$Action: function (emailIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Reusable/Person_Contact_Options EmailClicked");
controller.navigateToEmail_Household$Action(OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_LegacySharedController.default.flipHouseholdName$Action(model.variables.in_HostNameIn, callContext).out_HouseholdNameFixedOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), model.variables.in_HostNameIn, emailIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
callClicked$Action: function (phoneNumberIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Reusable/Person_Contact_Options CallClicked");
controller.callPhone$Action(controller.callContext(eventHandlerContext));
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
uuid: "13",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/EventDetail_HostCard/Container onclick");
controller.hostInformation$Action(model.variables.householdDisplayIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
style: "event-detail-icon-arrow",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "angle-right",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: model.variables.householdDisplayIn,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._householdDisplayInDataFetchStatus)
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "event-detail-hostcard-address",
visible: model.variables.in_IsAssignedIn,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsAssignedInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "event-detail-hostcard-address-top",
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/EventDetail_HostCard/Container onclick");
controller.address$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
gridProperties: {
classes: "OSInline"
},
style: "event-detail-hostcard-address-info",
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "event-detail-hostcard-address-info-title",
value: model.variables.in_AddressIn,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_AddressInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "event-detail-hostcard-address-button",
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
isDefault: false,
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/EventDetail_HostCard/Button OnClick");
controller.address$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "btn btn-primary",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/EventDetail_HostCard/Icon onclick");
controller.address$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
icon: "map-marker",
iconSize: /*FontSize*/ 0,
style: "icon event-detail-hostcard-address-icon",
visible: true,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}), "Directions"))))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_HostCard.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_LegacyShared.controller", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_HostCard.mvc$debugger", "Connect2_LegacyShared.controller$FlipHouseholdName", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_LegacySharedController, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_HostCard_mvc_Debugger) {
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

Controller.prototype.address$Action = function () {
return Promise.resolve();
};
Controller.prototype.hostInformation$Action = function () {
return Promise.resolve();
};
Controller.prototype.callPhone$Action = function () {
return Promise.resolve();
};
Controller.prototype.navigateToEmail_Household$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:u4BC4QhydUm9ABIHkrjpQQ:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ:_P7gfhFmARrzYcq0IncBSg", "Connect2_OrbitMobile_MUI", "LDM_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:W0FwH5E7TEuZhnquVp2DWg:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ/NodesShownInESpaceTree.W0FwH5E7TEuZhnquVp2DWg:5m3Bgy7w0fODsClCpgtW0w", "Connect2_OrbitMobile_MUI", "EventDetail_HostCard", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:W0FwH5E7TEuZhnquVp2DWg", callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:u4BC4QhydUm9ABIHkrjpQQ", callContext.id);
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

define("Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_HostCard.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"G06QBr6kD0ighGYiEgAKcg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsAssignedIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"M2T3SGRww0mMgxQCVqUzvQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HostURLIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"c206pzSCo0moTOb9ivy53Q": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HostNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"b_rK0Rly6UqVTWuJC2bc5w": {
getter: function (varBag, idService) {
return varBag.model.variables.in_AddressIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"a9P6aeviqkC6bKYiDfa2jw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsHostIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"WBXCKWCvokmggJUNf1jIHw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_PhoneIn;
},
dataType: OS.DataTypes.DataTypes.PhoneNumber
},
"ty5MzECivUaVfSTQeAnJCA": {
getter: function (varBag, idService) {
return varBag.model.variables.maxPhotoWidthIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"nJkLiQp7vUeyIcqQ8327rg": {
getter: function (varBag, idService) {
return varBag.model.variables.maxPhotoHeightIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"EOkbxdF7eES3GCIzf7tCzA": {
getter: function (varBag, idService) {
return varBag.model.variables.householdDisplayIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"OjkrnIb0c0K94nv692CRMw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HostEmailIn;
},
dataType: OS.DataTypes.DataTypes.Email
},
"rYTrvqTRmE+JRisZGQOsQg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("IsAssigned"));
})(varBag.model, idService);
}
},
"kHw1J1zfhkKVjpLvuEAGXg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasURL"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
