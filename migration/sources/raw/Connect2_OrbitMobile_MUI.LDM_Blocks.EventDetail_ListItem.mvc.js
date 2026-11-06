define("Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_ListItem.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_IS.model", "Connect2_LegacyShared.controller", "UBTConnect_Utils.model", "OutSystemsUI_2_23.controller", "Connect2_LegacyShared.Reusable.Person_Contact_Options.mvc$model", "Connect2_OrbitMobile_IS.model$DetailGuestItemRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_LegacyShared.controller$FlipHouseholdName", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.model$ContactPopupDataRec", "OutSystemsUI_2_23.controller$GetNetworkStatus", "Connect2_OrbitMobile_MUI.referencesHealth$OutSystemsUI_2_23", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_ISModel, Connect2_LegacySharedController, UBTConnect_UtilsModel, OutSystemsUI_2_23Controller, Connect2_LegacyShared_Reusable_Person_Contact_Options_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("In_MaxPhotoWidth", "in_MaxPhotoWidthIn", "In_MaxPhotoWidth", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 100;
}, false), 
this.attr("_in_MaxPhotoWidthInDataFetchStatus", "_in_MaxPhotoWidthInDataFetchStatus", "_in_MaxPhotoWidthInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_MaxPhotoHeight", "in_MaxPhotoHeightIn", "In_MaxPhotoHeight", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 55;
}, false), 
this.attr("_in_MaxPhotoHeightInDataFetchStatus", "_in_MaxPhotoHeightInDataFetchStatus", "_in_MaxPhotoHeightInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_HasBottomBorder", "in_HasBottomBorderIn", "In_HasBottomBorder", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("_in_HasBottomBorderInDataFetchStatus", "_in_HasBottomBorderInDataFetchStatus", "_in_HasBottomBorderInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("IsHosting", "isHostingIn", "IsHosting", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isHostingInDataFetchStatus", "_isHostingInDataFetchStatus", "_isHostingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Guest", "guestIn", "Guest", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.DetailGuestItemRec());
}, false, Connect2_OrbitMobile_ISModel.DetailGuestItemRec), 
this.attr("_guestInDataFetchStatus", "_guestInDataFetchStatus", "_guestInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("In_MaxPhotoWidth" in inputs) {
this.variables.in_MaxPhotoWidthIn = inputs.In_MaxPhotoWidth;
if("_in_MaxPhotoWidthInDataFetchStatus" in inputs) {
this.variables._in_MaxPhotoWidthInDataFetchStatus = inputs._in_MaxPhotoWidthInDataFetchStatus;
}

}

if("In_MaxPhotoHeight" in inputs) {
this.variables.in_MaxPhotoHeightIn = inputs.In_MaxPhotoHeight;
if("_in_MaxPhotoHeightInDataFetchStatus" in inputs) {
this.variables._in_MaxPhotoHeightInDataFetchStatus = inputs._in_MaxPhotoHeightInDataFetchStatus;
}

}

if("In_HasBottomBorder" in inputs) {
this.variables.in_HasBottomBorderIn = inputs.In_HasBottomBorder;
if("_in_HasBottomBorderInDataFetchStatus" in inputs) {
this.variables._in_HasBottomBorderInDataFetchStatus = inputs._in_HasBottomBorderInDataFetchStatus;
}

}

if("IsHosting" in inputs) {
this.variables.isHostingIn = inputs.IsHosting;
if("_isHostingInDataFetchStatus" in inputs) {
this.variables._isHostingInDataFetchStatus = inputs._isHostingInDataFetchStatus;
}

}

if("Guest" in inputs) {
this.variables.guestIn = inputs.Guest;
if("_guestInDataFetchStatus" in inputs) {
this.variables._guestInDataFetchStatus = inputs._guestInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "LDM_Blocks.EventDetail_ListItem");
});
define("Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_ListItem.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_LegacyShared.controller", "UBTConnect_Utils.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_ListItem.mvc$model", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_ListItem.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Reusable.Person_Contact_Options.mvc$view", "Connect2_OrbitMobile_IS.model$DetailGuestItemRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_LegacyShared.controller$FlipHouseholdName", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.model$ContactPopupDataRec", "OutSystemsUI_2_23.controller$GetNetworkStatus", "Connect2_OrbitMobile_MUI.referencesHealth$OutSystemsUI_2_23", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_LegacySharedController, UBTConnect_UtilsModel, OutSystemsUI_2_23Controller, React, OSView, Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_ListItem_mvc_model, Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_ListItem_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets, Connect2_LegacyShared_Reusable_Person_Contact_Options_mvc_view) {
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
        View.displayName = "LDM_Blocks.EventDetail_ListItem";
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
                return Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_ListItem_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_ListItem_mvc_controller;
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
gridProperties: {
classes: "OSInline"
},
style: "event-detail-list-item",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_Blocks/EventDetail_ListItem/Container onclick");
return controller.onClick_Item$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
style: "event-detail-list-item-main",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if((model.variables.guestIn.signedURLAttr === ""), false, this, function () {
return [$if(false, false, this, function () {
return [];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: (((("min-width: " + (model.variables.in_MaxPhotoWidthIn).toString()) + "px; min-height: ") + (model.variables.in_MaxPhotoHeightIn).toString()) + "px;")
},
style: "event-detail-photo-blank",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
extendedProperties: {
style: (("height: " + (model.variables.in_MaxPhotoHeightIn).toString()) + "px;")
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.User_rectangle.png"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: (((((((((("width: " + (model.variables.in_MaxPhotoWidthIn).toString()) + "px; \r\nmin-width: ") + (model.variables.in_MaxPhotoWidthIn).toString()) + "px; \r\nheight: ") + (model.variables.in_MaxPhotoHeightIn).toString()) + "px; \r\nmin-height: ") + (model.variables.in_MaxPhotoHeightIn).toString()) + "px;\r\nbackground-image: url(\'") + model.variables.guestIn.signedURLAttr) + "\');")
},
style: "event-detail-photo",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
className: model.getCachedValue(idService.getId("hJVv0QcCVE6N4mKkxrRlTw.class"), function () {
return ("event-detail-list-item-info" + ((model.variables.in_HasBottomBorderIn) ? (" border-bottom-neutral-4") : ("")));
}, function () {
return model.variables.in_HasBottomBorderIn;
}),
style: (("min-height: " + (model.variables.in_MaxPhotoHeightIn).toString()) + "px;")
},
style: "event-detail-list-item-info",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "event-detail-list-item-info-text",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "bold font-size-0-9em",
value: model.variables.guestIn.householderNameAttr,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._guestInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: ((model.variables.guestIn.localityNameAttr) !== ("")),
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._guestInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
style: "font-size-0-8em text-neutral-7",
value: model.variables.guestIn.localityNameAttr,
_idProps: {
service: idService,
name: "LocalityName"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._guestInDataFetchStatus)
})), $if(model.variables.isHostingIn, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: (model.variables.guestIn.adultsAttr.gt(OS.BuiltinFunctions.integerToLongInteger(0)) || model.variables.guestIn.childrenAttr.gt(OS.BuiltinFunctions.integerToLongInteger(0))),
_idProps: {
service: idService,
name: "AdultsChildren"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._guestInDataFetchStatus)
}, $if(model.variables.guestIn.adultsAttr.gt(OS.BuiltinFunctions.integerToLongInteger(0)), false, this, function () {
return [React.createElement(OSWidgets.Expression, {
gridProperties: {
marginLeft: "0"
},
style: "font-size-0-8em text-neutral-7",
value: model.getCachedValue(idService.getId("xx_Adults.Value"), function () {
return (OS.BuiltinFunctions.longIntegerToText(model.variables.guestIn.adultsAttr) + ((model.variables.guestIn.adultsAttr.gt(OS.BuiltinFunctions.integerToLongInteger(1))) ? (" Adults") : (" Adult")));
}, function () {
return model.variables.guestIn.adultsAttr;
}),
_idProps: {
service: idService,
name: "xx_Adults"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._guestInDataFetchStatus)
})];
}, function () {
return [];
}), $if(model.variables.guestIn.childrenAttr.gt(OS.BuiltinFunctions.integerToLongInteger(0)), false, this, function () {
return [React.createElement(OSWidgets.Expression, {
gridProperties: {
marginLeft: "0"
},
style: "font-size-0-8em text-neutral-7",
value: model.getCachedValue(idService.getId("comma.Value"), function () {
return ((model.variables.guestIn.adultsAttr.gt(OS.BuiltinFunctions.integerToLongInteger(0))) ? (", ") : (""));
}, function () {
return model.variables.guestIn.adultsAttr;
}),
_idProps: {
service: idService,
name: "comma"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._guestInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
marginLeft: "0"
},
style: "font-size-0-8em text-neutral-7",
value: model.getCachedValue(idService.getId("xx_Children.Value"), function () {
return (OS.BuiltinFunctions.longIntegerToText(model.variables.guestIn.childrenAttr) + ((model.variables.guestIn.childrenAttr.gt(OS.BuiltinFunctions.integerToLongInteger(1))) ? (" Children") : (" Child")));
}, function () {
return model.variables.guestIn.childrenAttr;
}),
_idProps: {
service: idService,
name: "xx_Children"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._guestInDataFetchStatus)
})];
}, function () {
return [];
}))];
}, function () {
return [];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: ((model.variables.guestIn.includingAttr) !== ("")),
_idProps: {
service: idService,
name: "Including"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._guestInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
style: "font-size-0-8em text-neutral-7",
value: ("Including: " + model.variables.guestIn.includingAttr),
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._guestInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: ((model.variables.guestIn.nonAttendingAttr) !== ("")),
_idProps: {
service: idService,
name: "NonAttending"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._guestInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
style: "font-size-0-8em text-neutral-7",
value: ("Not Attending: " + model.variables.guestIn.nonAttendingAttr),
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._guestInDataFetchStatus)
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "padding-left-xs",
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_LegacyShared_Reusable_Person_Contact_Options_mvc_view, {
inputs: {
Phone: ((model.variables.guestIn.homePhoneAttr + model.variables.guestIn.mobilePhoneAttr) + model.variables.guestIn.workPhoneAttr),
_phoneInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._guestInDataFetchStatus),
EmailAddress: model.variables.guestIn.emailAttr,
_emailAddressInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._guestInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
callClicked$Action: function (phoneNumberIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Reusable/Person_Contact_Options CallClicked");
return controller.onHandle_CallClicked$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
emailClicked$Action: function (emailIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Reusable/Person_Contact_Options EmailClicked");
return controller.onHandle_EmailClicked$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "19",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Icon, {
extendedProperties: {
style: model.getCachedValue(idService.getId("HFk2MRI7IES3Hic_srFx6A.style"), function () {
return ((!(model.variables.guestIn.householdDisplayAttr)) ? ("visibility: hidden;") : (""));
}, function () {
return model.variables.guestIn.householdDisplayAttr;
})
},
icon: "angle-right",
iconSize: /*FontSize*/ 0,
style: "icon event-detail-list-item-info-icon",
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
})))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_ListItem.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_LegacyShared.controller", "UBTConnect_Utils.model", "OutSystemsUI_2_23.controller", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_ListItem.mvc$debugger", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_ListItem.mvc$controller.OnHandle_CallClicked.GetLocalityNameJS", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_ListItem.mvc$controller.OnHandle_EmailClicked.GetLocalityNameJS", "Connect2_OrbitMobile_IS.model$DetailGuestItemRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_LegacyShared.controller$FlipHouseholdName", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.model$ContactPopupDataRec", "OutSystemsUI_2_23.controller$GetNetworkStatus", "Connect2_OrbitMobile_MUI.referencesHealth$OutSystemsUI_2_23", "UBTConnect_Utils.model$UI_ContactByMessage_WrapperDataRec"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_LegacySharedController, UBTConnect_UtilsModel, OutSystemsUI_2_23Controller, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_ListItem_mvc_Debugger, Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_ListItem_mvc_controller_OnHandle_CallClicked_GetLocalityNameJS, Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_ListItem_mvc_controller_OnHandle_EmailClicked_GetLocalityNameJS) {
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
Controller.prototype._onHandle_CallClicked$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_CallClicked");
callContext = controller.callContext(callContext);
var getLocalityNameJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getLocalityNameJSResult = getLocalityNameJSResult;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:rwPKKJdiNEaZZ9bx_zXSKA:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ/NodesShownInESpaceTree.TkwtNRrpHkSYknrQi19Vqg/ClientActions.rwPKKJdiNEaZZ9bx_zXSKA:66a4QT_5ZIMDzCzAYzxzPw", "Connect2_OrbitMobile_MUI", "OnHandle_CallClicked", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CM5iOSSpRUi9TIcKSRUEmg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5pUnXmU2GE6XrK_ARAhJIw", callContext.id);
getLocalityNameJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_ListItem_mvc_controller_OnHandle_CallClicked_GetLocalityNameJS, "GetLocalityName", "OnHandle_CallClicked", {
JS_Locality: OS.DataConversion.JSNodeParamConverter.to(model.variables.guestIn.localityNameAttr, OS.DataTypes.DataTypes.Text),
JS_LocalityName: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_ListItem.OnHandle_CallClicked$getLocalityNameJSResult"))();
jsNodeResult.jS_LocalityNameOut = OS.DataConversion.JSNodeParamConverter.from($parameters.JS_LocalityName, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YykINzzxIUKLOzJ0oxslHg", callContext.id);
// Trigger Event: OnClick_PhoneCall
return controller.onClick_PhoneCall$Action(function () {
var rec = new UBTConnect_UtilsModel.ContactByPhonePopupDataRec();
rec.contactPopupDataAttr = function () {
var rec = new UBTConnect_UtilsModel.ContactPopupDataRec();
rec.imageURLAttr = model.variables.guestIn.signedURLAttr;
rec.entityTypeIdAttr = Connect2_OrbitMobile_MUIModel.staticEntities.connect_Entity2.household;
rec.nameAttr = OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_LegacySharedController.default.flipHouseholdName$Action(model.variables.guestIn.householderNameAttr, callContext).out_HouseholdNameFixedOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
rec.localityAttr = getLocalityNameJSResult.value.jS_LocalityNameOut;
rec.timezoneNameAttr = model.variables.guestIn.timezoneAttr.timezoneLabelAttr;
rec.timezoneOffsetAttr = OS.BuiltinFunctions.longIntegerToInteger(model.variables.guestIn.timezoneAttr.offsetSecondsAttr);
rec.showPopupAttr = true;
rec.countryNameAttr = model.variables.guestIn.countryNameAttr;
return rec;
}();
rec.mobilePhoneAttr = model.variables.guestIn.mobilePhoneAttr;
rec.homePhoneAttr = model.variables.guestIn.homePhoneAttr;
rec.workPhoneAttr = model.variables.guestIn.workPhoneAttr;
return rec;
}(), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vPmbybCQlkq5nXtqdnxLZg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:rwPKKJdiNEaZZ9bx_zXSKA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:rwPKKJdiNEaZZ9bx_zXSKA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_ListItem.OnHandle_CallClicked$getLocalityNameJSResult", [{
name: "JS_LocalityName",
attrName: "jS_LocalityNameOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onClick_Item$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_Item");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:8Z9PgaiGvEa8vEmKSlClpg:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ/NodesShownInESpaceTree.TkwtNRrpHkSYknrQi19Vqg/ClientActions.8Z9PgaiGvEa8vEmKSlClpg:btwGwklrQyXX0kzDuBEs3w", "Connect2_OrbitMobile_MUI", "OnClick_Item", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:I2BZl9tSlkqXxFvAQBxx+w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PsMS3eZ61U+pvUmFU8IkQQ", callContext.id);
// Trigger Event: Clicked
return controller.clicked$Action(model.variables.guestIn.householdDisplayAttr, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:cOy+HN0k1UmiWNAbzjt1rQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:8Z9PgaiGvEa8vEmKSlClpg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:8Z9PgaiGvEa8vEmKSlClpg", callContext.id);
throw ex;

});
};
Controller.prototype._onHandle_EmailClicked$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_EmailClicked");
callContext = controller.callContext(callContext);
var flipHouseholdNameVar = new OS.DataTypes.VariableHolder();
var getNetworkStatusVar = new OS.DataTypes.VariableHolder();
var getLocalityNameJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.flipHouseholdNameVar = flipHouseholdNameVar;
varBag.getNetworkStatusVar = getNetworkStatusVar;
varBag.getLocalityNameJSResult = getLocalityNameJSResult;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:zz8I_dAHEU6VhcWPfP350g:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ/NodesShownInESpaceTree.TkwtNRrpHkSYknrQi19Vqg/ClientActions.zz8I_dAHEU6VhcWPfP350g:2kM6ga2SJFH9gL+os4LROg", "Connect2_OrbitMobile_MUI", "OnHandle_EmailClicked", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6sdOtORjFE2MK9MAmwqcvQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Sns7J8dQwkOWb63anWt5Ew", callContext.id);
// Execute Action: GetNetworkStatus
getNetworkStatusVar.value = OutSystemsUI_2_23Controller.default.getNetworkStatus$Action(callContext);

// IsOnline?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:w4TszFxcAkGtDnyU5FI95A", callContext.id) && getNetworkStatusVar.value.isOnlineOut)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tt4mEOa30U+qcYNOLmTxog", callContext.id);
// Execute Action: FlipHouseholdName
flipHouseholdNameVar.value = Connect2_LegacySharedController.default.flipHouseholdName$Action(model.variables.guestIn.householderNameAttr, callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:S+85d860EU+kNBGjWovf7Q", callContext.id);
getLocalityNameJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_ListItem_mvc_controller_OnHandle_EmailClicked_GetLocalityNameJS, "GetLocalityName", "OnHandle_EmailClicked", {
JS_Locality: OS.DataConversion.JSNodeParamConverter.to(model.variables.guestIn.localityNameAttr, OS.DataTypes.DataTypes.Text),
JS_LocalityName: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_ListItem.OnHandle_EmailClicked$getLocalityNameJSResult"))();
jsNodeResult.jS_LocalityNameOut = OS.DataConversion.JSNodeParamConverter.from($parameters.JS_LocalityName, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jZ_9k4bmb0qgft31SPjWew", callContext.id);
// Trigger Event: OnClick_Message
return controller.onClick_Message$Action(function () {
var rec = new UBTConnect_UtilsModel.UI_ContactByMessage_WrapperDataRec();
rec.emailAttr = model.variables.guestIn.emailAttr;
rec.phoneAttr = model.variables.guestIn.mobilePhoneAttr;
rec.contactPopupDataAttr = function () {
var rec = new UBTConnect_UtilsModel.ContactPopupDataRec();
rec.imageURLAttr = model.variables.guestIn.signedURLAttr;
rec.entityTypeIdAttr = Connect2_OrbitMobile_MUIModel.staticEntities.connect_Entity2.household;
rec.nameAttr = flipHouseholdNameVar.value.out_HouseholdNameFixedOut;
rec.localityAttr = getLocalityNameJSResult.value.jS_LocalityNameOut;
rec.timezoneNameAttr = model.variables.guestIn.timezoneAttr.timezoneLabelAttr;
rec.timezoneOffsetAttr = OS.BuiltinFunctions.longIntegerToInteger(model.variables.guestIn.timezoneAttr.offsetSecondsAttr);
rec.showPopupAttr = true;
rec.countryNameAttr = model.variables.guestIn.countryNameAttr;
return rec;
}();
return rec;
}(), model.variables.guestIn.countryNameAttr, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4FTpMDtMCkS1+fIsLOTvcA", callContext.id);
});
} else {
// Network
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gsL6jIaKpki+HiSFt_9nDg", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("Please check your network connection and try again", /*Info*/ 0);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4FCGsiRlfUSIRiEmIW5teA", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:zz8I_dAHEU6VhcWPfP350g", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:zz8I_dAHEU6VhcWPfP350g", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_ListItem.OnHandle_EmailClicked$getLocalityNameJSResult", [{
name: "JS_LocalityName",
attrName: "jS_LocalityNameOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);

Controller.prototype.onHandle_CallClicked$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_CallClicked$Action, callContext);

};
Controller.prototype.onClick_Item$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_Item$Action, callContext);

};
Controller.prototype.onHandle_EmailClicked$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_EmailClicked$Action, callContext);

};
Controller.prototype.onClick_PhoneCall$Action = function () {
return Promise.resolve();
};
Controller.prototype.clicked$Action = function () {
return Promise.resolve();
};
Controller.prototype.onClick_Message$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:u4BC4QhydUm9ABIHkrjpQQ:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ:_P7gfhFmARrzYcq0IncBSg", "Connect2_OrbitMobile_MUI", "LDM_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:TkwtNRrpHkSYknrQi19Vqg:/NRWebFlows.u4BC4QhydUm9ABIHkrjpQQ/NodesShownInESpaceTree.TkwtNRrpHkSYknrQi19Vqg:_d7ppDYsB_JiYabZv_1lwQ", "Connect2_OrbitMobile_MUI", "EventDetail_ListItem", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:TkwtNRrpHkSYknrQi19Vqg", callContext.id);
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
define("Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_ListItem.mvc$controller.OnHandle_CallClicked.GetLocalityNameJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.JS_LocalityName = $parameters.JS_Locality.replace(/\s*\([^)]*\)/, "");
};
});
define("Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_ListItem.mvc$controller.OnHandle_EmailClicked.GetLocalityNameJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.JS_LocalityName = $parameters.JS_Locality.replace(/\s*\([^)]*\)/, "");
};
});

define("Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_ListItem.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"5pUnXmU2GE6XrK_ARAhJIw": {
getter: function (varBag, idService) {
return varBag.getLocalityNameJSResult.value;
}
},
"tt4mEOa30U+qcYNOLmTxog": {
getter: function (varBag, idService) {
return varBag.flipHouseholdNameVar.value;
}
},
"Sns7J8dQwkOWb63anWt5Ew": {
getter: function (varBag, idService) {
return varBag.getNetworkStatusVar.value;
}
},
"S+85d860EU+kNBGjWovf7Q": {
getter: function (varBag, idService) {
return varBag.getLocalityNameJSResult.value;
}
},
"X7XpLqGTWkuKUq6t7Q3oJw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MaxPhotoWidthIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"kZg2Z6+uMEO9mswkcldfFw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MaxPhotoHeightIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"Hb1PJaBT90mxMzoHzxLJhg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HasBottomBorderIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"oTE+tXjzMUmdtfBq+r27JQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isHostingIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"QQrYyFsBNkiaJci2Xpc6aw": {
getter: function (varBag, idService) {
return varBag.model.variables.guestIn;
}
},
"lGGRLIA1o0+9YSgYh4A3Aw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasPhoto"));
})(varBag.model, idService);
}
},
"VXxeTrsndEe5FlxhqJuhfw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("LocalityName"));
})(varBag.model, idService);
}
},
"Qs0UA6pa1Um1PGUG_jk1bg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("IsHost"));
})(varBag.model, idService);
}
},
"YAwG5Iv0lkG_67c_rEgluQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("AdultsChildren"));
})(varBag.model, idService);
}
},
"FUj5bCzcY0iw1pye8dCaow": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasAdults"));
})(varBag.model, idService);
}
},
"nFX6nmHAGEi50tjB8bJ8WA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("xx_Adults"));
})(varBag.model, idService);
}
},
"aJqAdEeVq0+6Zi2wW3PwYQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasChildren"));
})(varBag.model, idService);
}
},
"BatJG+CcZEKhE2Qcw6GH_g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("comma"));
})(varBag.model, idService);
}
},
"cY+g6tBO7Ue2LCFRpxGzHw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("xx_Children"));
})(varBag.model, idService);
}
},
"BmVK2PYXuUewu1k+N4Qrqg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Including"));
})(varBag.model, idService);
}
},
"X0mY4S1HU0SMnv9qFmD5pw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("NonAttending"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
