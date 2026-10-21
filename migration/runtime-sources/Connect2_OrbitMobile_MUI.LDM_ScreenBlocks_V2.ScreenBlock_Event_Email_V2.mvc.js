define("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_Event_Email_V2.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "UBT_AppManager.model", "UBTConnect_Utils.model", "NavigationHandler.controller", "Connect2_LegacyShared.controller", "UBT_Email.model", "Connect2_OrbitMobile_MUI.controller", "OutSystemsUI_2_23.controller", "UBT_AppManager.controller", "Connect2_OrbitMobile_BL.model", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBT_AppManager", "Connect2_OrbitMobile_MUI.model$EmailHouseholdEventRec", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.model$ContactPopupDataRec", "NavigationHandler.controller$PreventNavigation", "Connect2_OrbitMobile_MUI.referencesHealth$NavigationHandler", "NavigationHandler.controller$AllowUpcomingNavigation", "Connect2_LegacyShared.controller$zOnApplicationEvent_Wrapper", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "UBT_Email.model$UserContactRequestRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBT_Email", "Connect2_OrbitMobile_MUI.controller$AddAuditEventDetailEvent", "OutSystemsUI_2_23.controller$GetNetworkStatus", "Connect2_OrbitMobile_MUI.referencesHealth$OutSystemsUI_2_23", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "Connect2_OrbitMobile_BL.model$HostDetailsRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL"], function (OutSystems, Connect2_OrbitMobile_MUIModel, UBT_AppManagerModel, UBTConnect_UtilsModel, NavigationHandlerController, Connect2_LegacySharedController, UBT_EmailModel, Connect2_OrbitMobile_MUIController, OutSystemsUI_2_23Controller, UBT_AppManagerController, Connect2_OrbitMobile_BLModel) {
var OS = OutSystems.Internal;

var GetCoordinatorDetailsDataActRec = (function (_super) {
__extends(GetCoordinatorDetailsDataActRec, _super);
function GetCoordinatorDetailsDataActRec(defaults) {
_super.apply(this, arguments);
}
GetCoordinatorDetailsDataActRec.attributesToDeclare = function () {
return [
this.attr("Out_CoordinatorDetails", "out_CoordinatorDetailsOut", "Out_CoordinatorDetails", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.HostDetailsRec());
}, true, Connect2_OrbitMobile_BLModel.HostDetailsRec), 
this.attr("Out_HasContent", "out_HasContentOut", "Out_HasContent", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("EventName", "eventNameOut", "EventName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetCoordinatorDetailsDataActRec.init();
return GetCoordinatorDetailsDataActRec;
})(OS.Model.DataSourceRecord);

var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Message", "messageVar", "Message", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("IsSending", "isSendingVar", "IsSending", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("UserInfo", "userInfoVar", "UserInfo", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBT_AppManagerModel.AppManager_CachedUserInfoRec());
}, false, UBT_AppManagerModel.AppManager_CachedUserInfoRec), 
this.attr("EmailEvent", "emailEventVar", "EmailEvent", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.EmailHouseholdEventRec());
}, false, Connect2_OrbitMobile_MUIModel.EmailHouseholdEventRec), 
this.attr("CancelPopupBox", "cancelPopupBoxVar", "CancelPopupBox", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("DefaultEventName", "defaultEventNameVar", "DefaultEventName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "LDM Event";
}, false), 
this.attr("Subject", "subjectVar", "Subject", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("IsFetching", "isFetchingVar", "IsFetching", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("CallPopupData", "callPopupDataVar", "CallPopupData", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ContactByPhonePopupDataRec());
}, false, UBTConnect_UtilsModel.ContactByPhonePopupDataRec), 
this.attr("In_EventId", "in_EventIdIn", "In_EventId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_EventIdInDataFetchStatus", "_in_EventIdInDataFetchStatus", "_in_EventIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_IsMessageGuest", "in_IsMessageGuestIn", "In_IsMessageGuest", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsMessageGuestInDataFetchStatus", "_in_IsMessageGuestInDataFetchStatus", "_in_IsMessageGuestInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_IsContactOrganiser", "in_IsContactOrganiserIn", "In_IsContactOrganiser", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsContactOrganiserInDataFetchStatus", "_in_IsContactOrganiserInDataFetchStatus", "_in_IsContactOrganiserInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_EventHostId", "in_EventHostIdIn", "In_EventHostId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_EventHostIdInDataFetchStatus", "_in_EventHostIdInDataFetchStatus", "_in_EventHostIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("EventDate", "eventDateIn", "EventDate", true, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, false), 
this.attr("_eventDateInDataFetchStatus", "_eventDateInDataFetchStatus", "_eventDateInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("EventLocality", "eventLocalityIn", "EventLocality", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_eventLocalityInDataFetchStatus", "_eventLocalityInDataFetchStatus", "_eventLocalityInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("GetCoordinatorDetails", "getCoordinatorDetailsDataAct", "getCoordinatorDetailsDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetCoordinatorDetailsDataActRec());
}, true, GetCoordinatorDetailsDataActRec)
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
return {
ContactOrganiser_Form: OS.Model.ValidationWidgetRecord,
Input_From: OS.Model.ValidationWidgetRecord,
Input_To: OS.Model.ValidationWidgetRecord,
TextArea_Subject: OS.Model.ValidationWidgetRecord,
TextArea_Message: OS.Model.ValidationWidgetRecord
};
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
return true;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_EventId" in inputs) {
this.variables.in_EventIdIn = inputs.In_EventId;
if("_in_EventIdInDataFetchStatus" in inputs) {
this.variables._in_EventIdInDataFetchStatus = inputs._in_EventIdInDataFetchStatus;
}

}

if("In_IsMessageGuest" in inputs) {
this.variables.in_IsMessageGuestIn = inputs.In_IsMessageGuest;
if("_in_IsMessageGuestInDataFetchStatus" in inputs) {
this.variables._in_IsMessageGuestInDataFetchStatus = inputs._in_IsMessageGuestInDataFetchStatus;
}

}

if("In_IsContactOrganiser" in inputs) {
this.variables.in_IsContactOrganiserIn = inputs.In_IsContactOrganiser;
if("_in_IsContactOrganiserInDataFetchStatus" in inputs) {
this.variables._in_IsContactOrganiserInDataFetchStatus = inputs._in_IsContactOrganiserInDataFetchStatus;
}

}

if("In_EventHostId" in inputs) {
this.variables.in_EventHostIdIn = inputs.In_EventHostId;
if("_in_EventHostIdInDataFetchStatus" in inputs) {
this.variables._in_EventHostIdInDataFetchStatus = inputs._in_EventHostIdInDataFetchStatus;
}

}

if("EventDate" in inputs) {
this.variables.eventDateIn = inputs.EventDate;
if("_eventDateInDataFetchStatus" in inputs) {
this.variables._eventDateInDataFetchStatus = inputs._eventDateInDataFetchStatus;
}

}

if("EventLocality" in inputs) {
this.variables.eventLocalityIn = inputs.EventLocality;
if("_eventLocalityInDataFetchStatus" in inputs) {
this.variables._eventLocalityInDataFetchStatus = inputs._eventLocalityInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "LDM_ScreenBlocks_V2.ScreenBlock_Event_Email_V2");
});
define("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_Event_Email_V2.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "UBT_AppManager.model", "UBTConnect_Utils.model", "NavigationHandler.controller", "Connect2_LegacyShared.controller", "UBT_Email.model", "OutSystemsUI_2_23.controller", "UBT_AppManager.controller", "Connect2_OrbitMobile_BL.model", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_Event_Email_V2.mvc$model", "Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_Event_Email_V2.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_LegacyShared.Layout.Layout.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$view", "Connect2_LegacyShared.Reusable.InputCounter.mvc$view", "Connect2_OrbitMobile_MUI.UtilityFlow.ErrorScreen.mvc$view", "Connect2_LegacyShared.Widgets.NetworkWarning.mvc$view", "NavigationHandler.ConfirmationDialogs.NavigationConfirmationDialog.mvc$view", "UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc$view", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBT_AppManager", "Connect2_OrbitMobile_MUI.model$EmailHouseholdEventRec", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.model$ContactPopupDataRec", "NavigationHandler.controller$PreventNavigation", "Connect2_OrbitMobile_MUI.referencesHealth$NavigationHandler", "NavigationHandler.controller$AllowUpcomingNavigation", "Connect2_LegacyShared.controller$zOnApplicationEvent_Wrapper", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "UBT_Email.model$UserContactRequestRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBT_Email", "Connect2_OrbitMobile_MUI.controller$AddAuditEventDetailEvent", "OutSystemsUI_2_23.controller$GetNetworkStatus", "Connect2_OrbitMobile_MUI.referencesHealth$OutSystemsUI_2_23", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "Connect2_OrbitMobile_BL.model$HostDetailsRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, UBT_AppManagerModel, UBTConnect_UtilsModel, NavigationHandlerController, Connect2_LegacySharedController, UBT_EmailModel, OutSystemsUI_2_23Controller, UBT_AppManagerController, Connect2_OrbitMobile_BLModel, React, OSView, Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_Event_Email_V2_mvc_model, Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_Event_Email_V2_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, Connect2_LegacyShared_Layout_Layout_mvc_view, OSWidgets, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_LegacyShared_Reusable_InputCounter_mvc_view, Connect2_OrbitMobile_MUI_UtilityFlow_ErrorScreen_mvc_view, Connect2_LegacyShared_Widgets_NetworkWarning_mvc_view, NavigationHandler_ConfirmationDialogs_NavigationConfirmationDialog_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvc_view) {
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
        View.displayName = "LDM_ScreenBlocks_V2.ScreenBlock_Event_Email_V2";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_Event_Email_V2.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Layout_Layout_mvc_view, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_LegacyShared_Reusable_InputCounter_mvc_view, Connect2_OrbitMobile_MUI_UtilityFlow_ErrorScreen_mvc_view, Connect2_LegacyShared_Widgets_NetworkWarning_mvc_view, NavigationHandler_ConfirmationDialogs_NavigationConfirmationDialog_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_Event_Email_V2_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_Event_Email_V2_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_LegacyShared_Layout_Layout_mvc_view, {
inputs: {},
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
menu: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.menu,
_idProps: {
service: idService,
name: "Menu"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
headerLeft: new PlaceholderContent(function () {
return [React.createElement(Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, {
inputs: {
MenuAction: Connect2_OrbitMobile_MUIModel.staticEntities.menuAction.auto
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
uuid: "2",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-align-center",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: "text-transform: capitalize"
},
value: "Contact Event Coordinator",
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
headerRight: PlaceholderContent.Empty,
headerContent: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [$if(!(model.variables.getCoordinatorDetailsDataAct.hasFetchErrorAttr), false, this, function () {
return [$if(!(model.variables.isFetchingVar), false, this, function () {
return [$if(model.variables.getCoordinatorDetailsDataAct.out_HasContentOut, false, this, function () {
return [React.createElement(OSWidgets.Form, {
_validationProps: {
validationService: validationService
},
gridProperties: {
classes: "OSFillParent"
},
style: "form card contact-organiser-form",
_idProps: {
service: idService,
name: "ContactOrganiser_Form"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 0px;"
},
style: "contact-organiser-form-cont",
visible: true,
_idProps: {
service: idService,
name: "Cont_From"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
mandatory: true,
style: "contact-organiser-form-cont-label",
targetWidget: "Input_From",
_idProps: {
service: idService,
name: "Label_From"
},
_widgetRecordProvider: widgetsRecordProvider
}, "From:"), React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("ContactOrganiser_Form")
},
enabled: false,
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Email*/ 7,
mandatory: true,
maxLength: 100,
prompt: "Sender",
style: "form-control contact-organiser-form-cont-input",
variable: model.createVariable(OS.DataTypes.DataTypes.Email, model.variables.userInfoVar.emailAttr, function (value) {
model.variables.userInfoVar.emailAttr = value;
}),
_idProps: {
service: idService,
name: "Input_From"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 10px;"
},
style: "contact-organiser-form-cont",
visible: true,
_idProps: {
service: idService,
name: "Cont_To"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
mandatory: true,
style: "contact-organiser-form-cont-label",
targetWidget: "Input_To",
_idProps: {
service: idService,
name: "Label_To"
},
_widgetRecordProvider: widgetsRecordProvider
}, "To:"), React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("ContactOrganiser_Form")
},
enabled: false,
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: true,
maxLength: 100,
prompt: "Destination",
style: "form-control contact-organiser-form-cont-input",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.getCoordinatorDetailsDataAct.out_CoordinatorDetailsOut.getCoordinatorDetailsResponseAttr.coordinatorNameAttr, function (value) {
model.variables.getCoordinatorDetailsDataAct.out_CoordinatorDetailsOut.getCoordinatorDetailsResponseAttr.coordinatorNameAttr = value;
}),
_idProps: {
service: idService,
name: "Input_To"
},
_widgetRecordProvider: widgetsRecordProvider,
variable_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getCoordinatorDetailsDataAct.dataFetchStatusAttr)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 10px;"
},
style: "contact-organiser-form-cont",
visible: true,
_idProps: {
service: idService,
name: "Cont_Subject"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
mandatory: true,
style: "contact-organiser-form-cont-label",
targetWidget: "TextArea_Subject",
_idProps: {
service: idService,
name: "Label_Subject"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Subject:"), React.createElement(OSWidgets.TextArea, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("ContactOrganiser_Form")
},
enabled: false,
gridProperties: {
classes: "OSFillParent"
},
mandatory: true,
maxLength: 500,
prompt: "Email\'s subject",
style: "form-control contact-organiser-form-cont-input",
textLines: 2,
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.subjectVar, function (value) {
model.variables.subjectVar = value;
}),
_idProps: {
service: idService,
name: "TextArea_Subject"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-top: 10px;"
},
style: "contact-organiser-form-cont",
visible: true,
_idProps: {
service: idService,
name: "Cont_Message"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
mandatory: true,
style: "contact-organiser-form-cont-label",
targetWidget: "TextArea_Message",
_idProps: {
service: idService,
name: "Label_Message"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Message:"), React.createElement(OSWidgets.TextArea, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("ContactOrganiser_Form")
},
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
mandatory: true,
maxLength: 1000,
onChange: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_ScreenBlocks_V2/ScreenBlock_Event_Email_V2/TextArea_Message OnChange");
controller.onChange_Message$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
prompt: "Your message here...",
style: "form-control contact-organiser-form-cont-input textarea-message",
textLines: 5,
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.messageVar, function (value) {
model.variables.messageVar = value;
}),
_idProps: {
service: idService,
name: "TextArea_Message"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(Connect2_LegacyShared_Reusable_InputCounter_mvc_view, {
inputs: {
InputId: idService.getId("TextArea_Message")
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("ContactOrganiser_Form")
},
_idProps: {
service: idService,
uuid: "18",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-align-center margin-top-m",
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
isDefault: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_ScreenBlocks_V2/ScreenBlock_Event_Email_V2/Button_Submit OnClick");
return controller.onSubmit_Email$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
style: "btn btn-secondary blue-gradient-button",
visible: true,
_idProps: {
service: idService,
name: "Button_Submit"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Submit")), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-align-center margin-top-xl",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
style: "height: 40px;"
},
isDefault: true,
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LDM_ScreenBlocks_V2/ScreenBlock_Event_Email_V2/Button OnClick");
controller.onClick_Call$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "btn btn-secondary blue-gradient-button",
visible: true,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "phone",
iconSize: /*FontSize*/ 0,
style: "icon font-size-1-25em",
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
style: "margin margin-left5",
text: ["or Call us Directly"],
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}))))];
}, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_UtilityFlow_ErrorScreen_mvc_view, {
inputs: {
In_ErrorMessage: "No Event Organiser information.",
In_MatchMainContentHeight: true
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
uuid: "25",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "list-updating-cont",
visible: true,
_idProps: {
service: idService,
name: "MarkReadLoading"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "list-updating",
visible: true,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})];
}, function () {
return [React.createElement(Connect2_LegacyShared_Widgets_NetworkWarning_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
tryAgain$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Widgets/NetworkWarning TryAgain");
return controller.onHandle_NetworkWarningTryAgain$Action(controller.callContext(eventHandlerContext));
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
uuid: "28",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}), $if(model.variables.callPopupDataVar.contactPopupDataAttr.showPopupAttr, false, this, function () {
return [];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "backwards-compatibility",
visible: true,
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(NavigationHandler_ConfirmationDialogs_NavigationConfirmationDialog_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
navigation$Action: function (navigationEventIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConfirmationDialogs/NavigationConfirmationDialog Navigation");
controller.navigationConfirmationDialogNavigation$Action(navigationEventIn, controller.callContext(eventHandlerContext));
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
uuid: "30",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
dialogHeader: new PlaceholderContent(function () {
return ["Confirm"];
}),
dialogBody: new PlaceholderContent(function () {
return ["Are you sure you want to discard the changes?"];
}),
buttonLabel_Confirm: new PlaceholderContent(function () {
return ["Confirm"];
}),
buttonLabel_Dismiss: new PlaceholderContent(function () {
return ["Cancel"];
})
},
_dependencies: []
}))];
}), React.createElement(UBTConnect_Utils_CW_CTA_PopUps_ContactPopup_ByPhone_mvc_view, {
inputs: {
In_CallPopupData: model.variables.callPopupDataVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_Call$Action: function (event_NumberIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_CTA_PopUps/ContactPopup_ByPhone Event_Call");
controller.onHandle_ContactByPhonePopupEvent_Call$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
event_Cancel$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_CTA_PopUps/ContactPopup_ByPhone Event_Cancel");
controller.onHandle_ContactByPhonePopupEvent_Cancel$Action(controller.callContext(eventHandlerContext));
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
uuid: "31",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
bottomBar: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.bottomBar,
_idProps: {
service: idService,
name: "BottomBar"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
commonUI_Elements: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.commonUI_Elements,
_idProps: {
service: idService,
name: "CommonUI_Elements"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
}
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "backwards-compatibility",
visible: true,
_idProps: {
service: idService,
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_Event_Email_V2.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "UBT_AppManager.model", "UBTConnect_Utils.model", "NavigationHandler.controller", "Connect2_LegacyShared.controller", "UBT_Email.model", "OutSystemsUI_2_23.controller", "UBT_AppManager.controller", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_Event_Email_V2.mvc$debugger", "Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_Event_Email_V2.mvc$controller.OnSubmit_Email.ScheduleFeedbackMessageAfterTransitionJS", "Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_Event_Email_V2.mvc$controller.OnInitialize.WasCurrentViewRestoredFromCacheJS", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBT_AppManager", "Connect2_OrbitMobile_MUI.model$EmailHouseholdEventRec", "UBTConnect_Utils.model$ContactByPhonePopupDataRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.model$ContactPopupDataRec", "NavigationHandler.controller$PreventNavigation", "Connect2_OrbitMobile_MUI.referencesHealth$NavigationHandler", "NavigationHandler.controller$AllowUpcomingNavigation", "Connect2_LegacyShared.controller$zOnApplicationEvent_Wrapper", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "UBT_Email.model$UserContactRequestRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBT_Email", "Connect2_OrbitMobile_MUI.controller$AddAuditEventDetailEvent", "OutSystemsUI_2_23.controller$GetNetworkStatus", "Connect2_OrbitMobile_MUI.referencesHealth$OutSystemsUI_2_23", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "Connect2_OrbitMobile_BL.model$HostDetailsRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, UBT_AppManagerModel, UBTConnect_UtilsModel, NavigationHandlerController, Connect2_LegacySharedController, UBT_EmailModel, OutSystemsUI_2_23Controller, UBT_AppManagerController, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_Event_Email_V2_mvc_Debugger, Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_Event_Email_V2_mvc_controller_OnSubmit_Email_ScheduleFeedbackMessageAfterTransitionJS, Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_Event_Email_V2_mvc_controller_OnInitialize_WasCurrentViewRestoredFromCacheJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
getCoordinatorDetails$DataActRefresh: -1
};
this.dataFetchDependentsGraph = {
getCoordinatorDetails$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions
Controller.prototype.eventContact$ServerAction = function (userContactRequestIn, callContext) {
var controller = this.controller;
var inputs = {
UserContactRequest: OS.DataConversion.ServerDataConverter.to(userContactRequestIn, OS.DataTypes.DataTypes.Record)
};
return controller.callServerAction("EventContact", "screenservices/Connect2_OrbitMobile_MUI/LDM_ScreenBlocks_V2/ScreenBlock_Event_Email_V2/ActionEventContact", "8+ysbxajwlRrx2Im_aESeQ", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
});
};

// Aggregates and Data Actions
Controller.prototype.getCoordinatorDetails$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:HRhPONJVBkK8K9fPgwY+iQ:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.L0CkEKC7u0+MnhZ6jeonEg/DataActions.HRhPONJVBkK8K9fPgwY+iQ:puKZKqy30VkXAeCG2zgmVA", "Connect2_OrbitMobile_MUI", "GetCoordinatorDetails", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_ScreenBlocks_V2/ScreenBlock_Event_Email_V2/GetCoordinatorDetails");
return controller.callDataAction("DataActionGetCoordinatorDetails", "screenservices/Connect2_OrbitMobile_MUI/LDM_ScreenBlocks_V2/ScreenBlock_Event_Email_V2/DataActionGetCoordinatorDetails", "PFkB9c+AJ7ZB4YKOJ0EkTA", function (b) {
model.variables.getCoordinatorDetailsDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getCoordinatorDetailsDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getCoordinatorDetailsDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_ScreenBlocks_V2/ScreenBlock_Event_Email_V2/GetCoordinatorDetails On After Fetch");
controller._onAfterFetch_GetCoordinatorDetails$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:HRhPONJVBkK8K9fPgwY+iQ", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getCoordinatorDetails$DataActRefresh"];
// Client Actions
Controller.prototype._onChange_Message$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnChange_Message");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:tWPzAYDkSkuQQ7GgLlukfg:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.L0CkEKC7u0+MnhZ6jeonEg/ClientActions.tWPzAYDkSkuQQ7GgLlukfg:7IwomFl6jFdIBk2oxQmXlg", "Connect2_OrbitMobile_MUI", "OnChange_Message", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+Yys4nd1eUaCPf71ZoWaTw", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Q5x5JeUF6kqclz8sFzWKiQ", callContext.id) && ((OS.BuiltinFunctions.trim(model.variables.messageVar)) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9kWCLcyC3U+E6qNW6AmNAA", callContext.id);
// TextArea_Message.Valid = True
model.widgets.get(idService.getId("TextArea_Message")).validAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9kWCLcyC3U+E6qNW6AmNAA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// TextArea_Message.ValidationMessage = ""
model.widgets.get(idService.getId("TextArea_Message")).validationMessageAttr = "";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:j+q5WDvVWkqPImsHsGHa5w", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:hj++i65bS02xWsvQt1dCdA", callContext.id);
// TextArea_Message.Valid = False
model.widgets.get(idService.getId("TextArea_Message")).validAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:hj++i65bS02xWsvQt1dCdA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// TextArea_Message.ValidationMessage = "Required Field!"
model.widgets.get(idService.getId("TextArea_Message")).validationMessageAttr = "Required Field!";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:j+q5WDvVWkqPImsHsGHa5w", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:tWPzAYDkSkuQQ7GgLlukfg", callContext.id);
}

};
Controller.prototype._refreshGetCoordinatorDetails$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("RefreshGetCoordinatorDetails");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:OiunB50wI0SAZq+DRkn4xg:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.L0CkEKC7u0+MnhZ6jeonEg/ClientActions.OiunB50wI0SAZq+DRkn4xg:TuhRbxA0lueu5UbfT2Q2dw", "Connect2_OrbitMobile_MUI", "RefreshGetCoordinatorDetails", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1j_MAV0Bjk6VJJD7UrBfew", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jdQYGpbZdkmj53_oQ19wSA", callContext.id);
// IsFetching = True
model.variables.isFetchingVar = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Un7kEm1TvEywCh3Cq8xZQQ", callContext.id);
// Refresh Query: GetCoordinatorDetails
var result = controller.getCoordinatorDetails$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bkqz6HtmhESgChVXJmj11w", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:OiunB50wI0SAZq+DRkn4xg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:OiunB50wI0SAZq+DRkn4xg", callContext.id);
throw ex;

});
};
Controller.prototype._onDestroy$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:ZigSClLXykKearp2C7rQ0w:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.L0CkEKC7u0+MnhZ6jeonEg/ClientActions.ZigSClLXykKearp2C7rQ0w:mevuBgk+pH9KO0WhcmZtSg", "Connect2_OrbitMobile_MUI", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6CnxVYi5H0iFm8rLyxl_iA", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:20W3ZfY98kOXmrA8wwH6dw", callContext.id);
// CancelPopupBox = False
model.variables.cancelPopupBoxVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jdusAH7Z+U60h6rT9cW6Zw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:ZigSClLXykKearp2C7rQ0w", callContext.id);
}

};
Controller.prototype._onHandle_NetworkWarningTryAgain$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_NetworkWarningTryAgain");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Y7JBC6woB0m8lFgVPOxtuA:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.L0CkEKC7u0+MnhZ6jeonEg/ClientActions.Y7JBC6woB0m8lFgVPOxtuA:M1S2CRkwS5QCPMhgpbWoFg", "Connect2_OrbitMobile_MUI", "OnHandle_NetworkWarningTryAgain", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wNle4USdIE2v3WMIcX+tMw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qd0e7gLRPki1cY23BgYXUQ", callContext.id);
// Execute Action: RefreshGetCoordinatorDetails
return controller._refreshGetCoordinatorDetails$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jWFa7SfoIEWvuuCcbDKQEw", callContext.id);
// IsFetching = False
model.variables.isFetchingVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+IcG5z1NzkGPce5UwYlw1g", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Y7JBC6woB0m8lFgVPOxtuA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Y7JBC6woB0m8lFgVPOxtuA", callContext.id);
throw ex;

});
};
Controller.prototype._navigationConfirmationDialogNavigation$Action = function (navigationEventIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("NavigationConfirmationDialogNavigation");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_Event_Email_V2.NavigationConfirmationDialogNavigation$vars"))());
vars.value.navigationEventInLocal = navigationEventIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:0DgbDqDh9kSFTXr73VNaVQ:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.L0CkEKC7u0+MnhZ6jeonEg/ClientActions.0DgbDqDh9kSFTXr73VNaVQ:qAigaYF3gNDfDyhqc1U_YA", "Connect2_OrbitMobile_MUI", "NavigationConfirmationDialogNavigation", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_zFE3rjf6EuiIlC9Jiaf+Q", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IX9Iv_Of1kesVlN8RRVpQQ", callContext.id) && ((OS.BuiltinFunctions.trim(model.variables.messageVar)) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qu0Hmyg3wEOPcskmsEnFAw", callContext.id);
// Execute Action: PreventNavigation
NavigationHandlerController.default.preventNavigation$Action(vars.value.navigationEventInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8Db0f5GH80ePfJAJjJPzdg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8Db0f5GH80ePfJAJjJPzdg", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:0DgbDqDh9kSFTXr73VNaVQ", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_Event_Email_V2.NavigationConfirmationDialogNavigation$vars", [{
name: "NavigationEvent",
attrName: "navigationEventInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._onClick_Call$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_Call");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:FTg5VY8cp06hPkvsDXtXzg:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.L0CkEKC7u0+MnhZ6jeonEg/ClientActions.FTg5VY8cp06hPkvsDXtXzg:j0WFGpd1eUYeMHFB9hIkfg", "Connect2_OrbitMobile_MUI", "OnClick_Call", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:iLzUpcjzWUCJtxl4zNrwnQ", callContext.id);
// Has Phone Number
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Y8izXEF6+UqMjaoMLjs9bw", callContext.id) && ((model.variables.getCoordinatorDetailsDataAct.out_CoordinatorDetailsOut.getCoordinatorDetailsResponseAttr.coordinatorPhoneNumberAttr) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lDKXFq_li0+UcvoTURbNlA", callContext.id);
// CallPopupData.ContactPopupData.ImageURL = Images.LDM_Logo.URL
model.variables.callPopupDataVar.contactPopupDataAttr.imageURLAttr = OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_OrbitMobile_MUI.LDM_Logo.svg");
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lDKXFq_li0+UcvoTURbNlA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// CallPopupData.ContactPopupData.IsAvatarImage = False
model.variables.callPopupDataVar.contactPopupDataAttr.isAvatarImageAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lDKXFq_li0+UcvoTURbNlA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// CallPopupData.ContactPopupData.Name = Trim
model.variables.callPopupDataVar.contactPopupDataAttr.nameAttr = OS.BuiltinFunctions.trim(model.variables.getCoordinatorDetailsDataAct.out_CoordinatorDetailsOut.getCoordinatorDetailsResponseAttr.coordinatorNameAttr);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lDKXFq_li0+UcvoTURbNlA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// CallPopupData.ContactPopupData.Locality = GetCoordinatorDetails.Out_CoordinatorDetails.GetCoordinatorDetailsResponse.LocalityName
model.variables.callPopupDataVar.contactPopupDataAttr.localityAttr = model.variables.getCoordinatorDetailsDataAct.out_CoordinatorDetailsOut.getCoordinatorDetailsResponseAttr.localityNameAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lDKXFq_li0+UcvoTURbNlA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// CallPopupData.ContactPopupData.TimezoneName = GetCoordinatorDetails.Out_CoordinatorDetails.GetCoordinatorDetailsResponse.Timezone.TimezoneLabel
model.variables.callPopupDataVar.contactPopupDataAttr.timezoneNameAttr = model.variables.getCoordinatorDetailsDataAct.out_CoordinatorDetailsOut.getCoordinatorDetailsResponseAttr.timezoneAttr.timezoneLabelAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lDKXFq_li0+UcvoTURbNlA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// CallPopupData.ContactPopupData.TimezoneOffset = GetCoordinatorDetails.Out_CoordinatorDetails.GetCoordinatorDetailsResponse.Timezone.OffsetSeconds
model.variables.callPopupDataVar.contactPopupDataAttr.timezoneOffsetAttr = OS.BuiltinFunctions.longIntegerToInteger(model.variables.getCoordinatorDetailsDataAct.out_CoordinatorDetailsOut.getCoordinatorDetailsResponseAttr.timezoneAttr.offsetSecondsAttr);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lDKXFq_li0+UcvoTURbNlA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
// CallPopupData.ContactPopupData.ShowPopup = True
model.variables.callPopupDataVar.contactPopupDataAttr.showPopupAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lDKXFq_li0+UcvoTURbNlA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "8");
// CallPopupData.ContactPopupData.DisplayContactNumber = GetCoordinatorDetails.Out_CoordinatorDetails.GetCoordinatorDetailsResponse.CoordinatorPhoneNumber
model.variables.callPopupDataVar.contactPopupDataAttr.displayContactNumberAttr = model.variables.getCoordinatorDetailsDataAct.out_CoordinatorDetailsOut.getCoordinatorDetailsResponseAttr.coordinatorPhoneNumberAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lDKXFq_li0+UcvoTURbNlA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "9");
// CallPopupData.Phone = GetCoordinatorDetails.Out_CoordinatorDetails.GetCoordinatorDetailsResponse.CoordinatorPhoneNumber
model.variables.callPopupDataVar.phoneAttr = model.variables.getCoordinatorDetailsDataAct.out_CoordinatorDetailsOut.getCoordinatorDetailsResponseAttr.coordinatorPhoneNumberAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lDKXFq_li0+UcvoTURbNlA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "10");
// CallPopupData.ContactPopupData.CountryName = GetCoordinatorDetails.Out_CoordinatorDetails.GetCoordinatorDetailsResponse.CountryName
model.variables.callPopupDataVar.contactPopupDataAttr.countryNameAttr = model.variables.getCoordinatorDetailsDataAct.out_CoordinatorDetailsOut.getCoordinatorDetailsResponseAttr.countryNameAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lcszjhFpHkmLZOXe92IzGQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:EbsPCyo_ikaLWnFdOvA3Fg", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("Phone number is not available", /*Info*/ 0);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ATp3JdzhNk6+v0fPrNG_nA", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:FTg5VY8cp06hPkvsDXtXzg", callContext.id);
}

};
Controller.prototype._onAfterFetch_GetCoordinatorDetails$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnAfterFetch_GetCoordinatorDetails");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:YpmhWbgcAUyId4_9enQ+Cw:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.L0CkEKC7u0+MnhZ6jeonEg/ClientActions.YpmhWbgcAUyId4_9enQ+Cw:24OCEbWe0LLbINNmyINMZQ", "Connect2_OrbitMobile_MUI", "OnAfterFetch_GetCoordinatorDetails", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qkRWmI6_mEyJy96pH6Crww", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:T+RrJ4Nwu0aqn+tdzP+mSg", callContext.id);
// DefaultEventName = GetCoordinatorDetails.EventName
model.variables.defaultEventNameVar = model.variables.getCoordinatorDetailsDataAct.eventNameOut;
// Set Subject
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6pVoHnqXS0CEg1wLtG65DA", callContext.id);
// Subject = DefaultEventName + " - " + DateTimeToDate
model.variables.subjectVar = ((model.variables.defaultEventNameVar + " - ") + OS.BuiltinFunctions.dateToText(OS.BuiltinFunctions.dateTimeToDate(model.variables.getCoordinatorDetailsDataAct.out_CoordinatorDetailsOut.getCoordinatorDetailsResponseAttr.eventDateAttr)));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NqjyYWpL2kCRfULg2vY1jg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:YpmhWbgcAUyId4_9enQ+Cw", callContext.id);
}

};
Controller.prototype._onSubmit_Email$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnSubmit_Email");
callContext = controller.callContext(callContext);
var emailEventSerializeVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.emailEventSerializeVar = emailEventSerializeVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:ksLMfTYi_UWxSeWuxUNYRQ:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.L0CkEKC7u0+MnhZ6jeonEg/ClientActions.ksLMfTYi_UWxSeWuxUNYRQ:QjOFrl69TYCP9g8D5BUchA", "Connect2_OrbitMobile_MUI", "OnSubmit_Email", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:a34sDufIJ0e9pvNnTXLpTQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// IsOnline
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YUOyg6ndTkSx1nUMeJT8WQ", callContext.id) && OutSystemsDebugger.handleFunctionCall(function () {
return OutSystemsUI_2_23Controller.default.getNetworkStatus$Action(callContext).isOnlineOut;
}, OS.DataTypes.DataTypes.Boolean, callContext.id))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JCBJUnujxk6_818xZdNhzg", callContext.id);
// Execute Action: OnChange_Message
controller._onChange_Message$Action(callContext);
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:v1Cb5ldnb02lJN96en4vlg", callContext.id) && model.widgets.get(idService.getId("ContactOrganiser_Form")).validAttr)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LZAeff5GB02trEh7kYfB3w", callContext.id);
// IsSending = True
model.variables.isSendingVar = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5EFvnU_0qEeSKYQ0GK8q3A", callContext.id);
// Execute Action: EventContactEmail
model.flush();
return controller.eventContact$ServerAction(function () {
var rec = new UBT_EmailModel.UserContactRequestRec();
rec.emailToAttr = model.variables.getCoordinatorDetailsDataAct.out_CoordinatorDetailsOut.getCoordinatorDetailsResponseAttr.coordinatorEmailAttr;
rec.contactMemberAttr = model.variables.getCoordinatorDetailsDataAct.out_CoordinatorDetailsOut.getCoordinatorDetailsResponseAttr.coordinatorNameAttr;
rec.firstNameSenderAttr = model.variables.userInfoVar.firstNameAttr;
rec.lastNameSenderAttr = model.variables.userInfoVar.lastNameAttr;
rec.subjectAttr = model.variables.subjectVar;
rec.messageAttr = model.variables.messageVar;
rec.firstNameAttr = model.variables.getCoordinatorDetailsDataAct.out_CoordinatorDetailsOut.getCoordinatorDetailsResponseAttr.coordinatorNameAttr;
rec.emailFromAttr = model.variables.userInfoVar.emailAttr;
rec.senderPhoneAttr = model.variables.userInfoVar.phoneAttr;
rec.senderLocalityAttr = model.variables.userInfoVar.localityAttr;
return rec;
}(), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:K4HKy1UojUmIswhTRcBHoQ", callContext.id);
// Execute Action: AddAuditEventDetailEvent
model.flush();
return Connect2_OrbitMobile_MUIController.default.addAuditEventDetailEvent$Action(Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_LDM.myTimelineCoordinatorEmailed, OS.DataTypes.LongInteger.defaultValue, "", model.variables.eventDateIn, model.variables.eventLocalityIn, callContext);
}).then(function () {
// Set EmailEvent
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QVo90m14AE++CqiAGhXpUg", callContext.id);
// EmailEvent.EmailTo = GetCoordinatorDetails.Out_CoordinatorDetails.GetCoordinatorDetailsResponse.CoordinatorEmail
model.variables.emailEventVar.emailToAttr = model.variables.getCoordinatorDetailsDataAct.out_CoordinatorDetailsOut.getCoordinatorDetailsResponseAttr.coordinatorEmailAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QVo90m14AE++CqiAGhXpUg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// EmailEvent.NameOfSender = UserInfo.LastName + ", " + UserInfo.FirstName
model.variables.emailEventVar.nameOfSenderAttr = ((model.variables.userInfoVar.lastNameAttr + ", ") + model.variables.userInfoVar.firstNameAttr);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:T5NqesjAH0uxIX0k_4eNHw", callContext.id);
// JSON Serialize: EmailEventSerialize
emailEventSerializeVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.emailEventVar, false, false);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:t4HnRaYSSU+Y_yQ8jsUTIQ", callContext.id);
// Execute Action: zOnApplicationEvent_Wrapper
model.flush();
return Connect2_LegacySharedController.default.zOnApplicationEvent_Wrapper$Action(((model.variables.in_IsMessageGuestIn) ? (Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_LDM.hostMessageGuest) : (((model.variables.in_IsContactOrganiserIn) ? (Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_LDM.contactEventOrganiser) : (OS.BuiltinFunctions.textToIdentifier(Connect2_OrbitMobile_MUIModel.staticEntities.applicationEvents_Directory.emailHousehold))))), emailEventSerializeVar.value.jSONOut, callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:m2fIxdACMkSIYMEcKCxANA", callContext.id);
controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_Event_Email_V2_mvc_controller_OnSubmit_Email_ScheduleFeedbackMessageAfterTransitionJS, "ScheduleFeedbackMessageAfterTransition", "OnSubmit_Email", {
Message: OS.DataConversion.JSNodeParamConverter.to("Your message has been sent.", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
// Exit
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7PKeo63yHEitB78aRg0jeg", callContext.id);
// IsSending = False
model.variables.isSendingVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7PKeo63yHEitB78aRg0jeg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Message = ""
model.variables.messageVar = "";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PZ0IJdoInUOQAC5uIl1ZOw", callContext.id);
// Execute Action: AllowUpcomingNavigation
NavigationHandlerController.default.allowUpcomingNavigation$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yEuo3u5KCUO8kgWCcxe88A", callContext.id);
// Destination: (PreviousScreen)
return OS.Flow.returnAsync(OS.Navigation.navigateBack(null, callContext, true));
});
} else {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ox5lrM1EX0yyma1xIXEQNw", callContext.id) && (OS.BuiltinFunctions.trim(model.variables.messageVar) === OS.BuiltinFunctions.nullTextIdentifier()))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_nRSnGGiekGgBPWFW0FVRw", callContext.id);
// Message = ""
model.variables.messageVar = "";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:D4g4o8n_Ik2iZJafP6ybOg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:D4g4o8n_Ik2iZJafP6ybOg", callContext.id);
}

}

});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:unjDOussFEWzicYu29klDg", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("You cannot send emails without a network connection.", /*Info*/ 0);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:eK_1jgiVqEySfVlyG1KK9Q", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:ksLMfTYi_UWxSeWuxUNYRQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:ksLMfTYi_UWxSeWuxUNYRQ", callContext.id);
throw ex;

});
};
Controller.prototype._onInitialize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
var wasCurrentViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.wasCurrentViewRestoredFromCacheJSResult = wasCurrentViewRestoredFromCacheJSResult;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:pdJohHOGD0K5lnU_UKhylA:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.L0CkEKC7u0+MnhZ6jeonEg/ClientActions.pdJohHOGD0K5lnU_UKhylA:z3rSfHMgoOnsbsV2fVEJWw", "Connect2_OrbitMobile_MUI", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:P+_GCl8mZESncVFKv8sJkA", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:M74hHxnfJkCec_B8yCnOOg", callContext.id);
wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_LDM_ScreenBlocks_V2_ScreenBlock_Event_Email_V2_mvc_controller_OnInitialize_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnInitialize", {
FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_Event_Email_V2.OnInitialize$wasCurrentViewRestoredFromCacheJSResult"))();
jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pcEf29P_fEWQSo1IfIo6uw", callContext.id) && wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:J3z8N06LiEmtJ3l_GhIg8A", callContext.id);
// Message = ""
model.variables.messageVar = "";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VPsXpFmgSUmgH3aE8QWlSg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VPsXpFmgSUmgH3aE8QWlSg", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:pdJohHOGD0K5lnU_UKhylA", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_Event_Email_V2.OnInitialize$wasCurrentViewRestoredFromCacheJSResult", [{
name: "FromCache",
attrName: "fromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._onHandle_ContactByPhonePopupEvent_Cancel$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_ContactByPhonePopupEvent_Cancel");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:T_NQv26CmUOoJN702YhmLA:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.L0CkEKC7u0+MnhZ6jeonEg/ClientActions.T_NQv26CmUOoJN702YhmLA:I0zxSY5bmp0XE10gYCT5zg", "Connect2_OrbitMobile_MUI", "OnHandle_ContactByPhonePopupEvent_Cancel", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Gwr7yhiLSE+xNPFH7XwjhA", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WZevm+pLnEihEg5Vd6SeDA", callContext.id);
// CallPopupData.ContactPopupData.ShowPopup = False
model.variables.callPopupDataVar.contactPopupDataAttr.showPopupAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dptWwvH7tUmOWpn1cMiEvg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:T_NQv26CmUOoJN702YhmLA", callContext.id);
}

};
Controller.prototype._onHandle_ContactByPhonePopupEvent_Call$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_ContactByPhonePopupEvent_Call");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:KtrAxburFUqZJoXlPGAi7A:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.L0CkEKC7u0+MnhZ6jeonEg/ClientActions.KtrAxburFUqZJoXlPGAi7A:QKkRCz5U8t+9SvTXQ75plw", "Connect2_OrbitMobile_MUI", "OnHandle_ContactByPhonePopupEvent_Call", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DV0teCkx6EeCCgktgDwSng", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oO+DoorsR0yGFJMDUx6ezg", callContext.id);
// Execute Action: OnHandle_ContactByPhonePopupEvent_Cancel
controller._onHandle_ContactByPhonePopupEvent_Cancel$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6Y9M3bOewEyI1BX8QI34VA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:KtrAxburFUqZJoXlPGAi7A", callContext.id);
}

};
Controller.prototype._onReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var appManager_GetCachedUserInfoVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.appManager_GetCachedUserInfoVar = appManager_GetCachedUserInfoVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:RnKD+r4crk+eh1fBD+3bGg:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.L0CkEKC7u0+MnhZ6jeonEg/ClientActions.RnKD+r4crk+eh1fBD+3bGg:GxJkL7uqs78rFcG0BmV9Mw", "Connect2_OrbitMobile_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Vo5qIR+Atkq9e+4+u8A9gw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Has null eventId?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zcpVxWvLl0CIHkaNqp+mkw", callContext.id) && ((OS.BuiltinFunctions.longIntegerToText(model.variables.in_EventIdIn) === OS.BuiltinFunctions.nullTextIdentifier()) && (OS.BuiltinFunctions.longIntegerToText(model.variables.in_EventHostIdIn) === OS.BuiltinFunctions.nullTextIdentifier())))) {
// Set HasContent to Fasle
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gMQp8DRZpk6DyH3dzVLEMg", callContext.id);
// GetCoordinatorDetails.Out_HasContent = False
model.variables.getCoordinatorDetailsDataAct.out_HasContentOut = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CuZbP19uIkeBtS421u8gHw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:b1LhykCxJEybjkY46tZlKw", callContext.id);
// Execute Action: RefreshGetCoordinatorDetails
return controller._refreshGetCoordinatorDetails$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2Q9yIi4ZfkmJjKptADMkgg", callContext.id);
// Execute Action: AppManager_GetCachedUserInfo
appManager_GetCachedUserInfoVar.value = UBT_AppManagerController.default.appManager_GetCachedUserInfo$Action(callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6leZ6j6kl0qM03TLwa_2HQ", callContext.id);
// UserInfo = AppManager_GetCachedUserInfo.UserInformation
model.variables.userInfoVar = appManager_GetCachedUserInfoVar.value.userInformationOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:m3c_CApEzUCz0VHf8Zpbog", callContext.id);
// IsFetching = False
model.variables.isFetchingVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ypV0DmWKCkSQCX+G94OoMg", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:RnKD+r4crk+eh1fBD+3bGg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:RnKD+r4crk+eh1fBD+3bGg", callContext.id);
throw ex;

});
};

Controller.prototype.onChange_Message$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onChange_Message$Action, callContext);

};
Controller.prototype.refreshGetCoordinatorDetails$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._refreshGetCoordinatorDetails$Action, callContext);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.onHandle_NetworkWarningTryAgain$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_NetworkWarningTryAgain$Action, callContext);

};
Controller.prototype.navigationConfirmationDialogNavigation$Action = function (navigationEventIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._navigationConfirmationDialogNavigation$Action, callContext, navigationEventIn);

};
Controller.prototype.onClick_Call$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_Call$Action, callContext);

};
Controller.prototype.onAfterFetch_GetCoordinatorDetails$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onAfterFetch_GetCoordinatorDetails$Action, callContext);

};
Controller.prototype.onSubmit_Email$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onSubmit_Email$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.onHandle_ContactByPhonePopupEvent_Cancel$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ContactByPhonePopupEvent_Cancel$Action, callContext);

};
Controller.prototype.onHandle_ContactByPhonePopupEvent_Call$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ContactByPhonePopupEvent_Call$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:gsadKUxZz0+omagmDt0wFQ:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ:TG3hGul8Bx_v2kAU82Nhuw", "Connect2_OrbitMobile_MUI", "LDM_ScreenBlocks_V2", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:L0CkEKC7u0+MnhZ6jeonEg:/NRWebFlows.gsadKUxZz0+omagmDt0wFQ/NodesShownInESpaceTree.L0CkEKC7u0+MnhZ6jeonEg:MUXLG5fkxBmVjG63u0wn+g", "Connect2_OrbitMobile_MUI", "ScreenBlock_Event_Email_V2", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:L0CkEKC7u0+MnhZ6jeonEg", callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:gsadKUxZz0+omagmDt0wFQ", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_ScreenBlocks_V2/ScreenBlock_Event_Email_V2 On Initialize");
return controller.onInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_ScreenBlocks_V2/ScreenBlock_Event_Email_V2 On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "LDM_ScreenBlocks_V2/ScreenBlock_Event_Email_V2 On Destroy");
return controller.onDestroy$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
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
define("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_Event_Email_V2.mvc$controller.OnSubmit_Email.ScheduleFeedbackMessageAfterTransitionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.setTimeout(function() {
    $public.FeedbackMessage.showFeedbackMessage($parameters.Message, 1);
}, 500);
};
});
define("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_Event_Email_V2.mvc$controller.OnInitialize.WasCurrentViewRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
};
});

define("Connect2_OrbitMobile_MUI.LDM_ScreenBlocks_V2.ScreenBlock_Event_Email_V2.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"QgoRjr3brUicJKqdMO+aKQ": {
getter: function (varBag, idService) {
return varBag.vars.value.navigationEventInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"T5NqesjAH0uxIX0k_4eNHw": {
getter: function (varBag, idService) {
return varBag.emailEventSerializeVar.value;
}
},
"m2fIxdACMkSIYMEcKCxANA": {
getter: function (varBag, idService) {
return varBag.scheduleFeedbackMessageAfterTransitionJSResult.value;
}
},
"M74hHxnfJkCec_B8yCnOOg": {
getter: function (varBag, idService) {
return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
}
},
"2Q9yIi4ZfkmJjKptADMkgg": {
getter: function (varBag, idService) {
return varBag.appManager_GetCachedUserInfoVar.value;
}
},
"QRG0jKN42kuej4eKOhNkFQ": {
getter: function (varBag, idService) {
return varBag.model.variables.messageVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"RPOVDnMhR06y8WPv1mU9ig": {
getter: function (varBag, idService) {
return varBag.model.variables.isSendingVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"SApfbIamiESfZc33rSvXmw": {
getter: function (varBag, idService) {
return varBag.model.variables.userInfoVar;
}
},
"UYYM3cY7OUGySW+cn_yC1w": {
getter: function (varBag, idService) {
return varBag.model.variables.emailEventVar;
}
},
"MZZYIlE1QEaqdad1sPbYew": {
getter: function (varBag, idService) {
return varBag.model.variables.cancelPopupBoxVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"4oU8alKj2U2GZxaq0FlctQ": {
getter: function (varBag, idService) {
return varBag.model.variables.defaultEventNameVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"onJTjr7_Z0eBVhC0xR6NnQ": {
getter: function (varBag, idService) {
return varBag.model.variables.subjectVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"EHA2fM2o6UiOw0FqdFFNLg": {
getter: function (varBag, idService) {
return varBag.model.variables.isFetchingVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"kccez9sxDEW7lMraPMLErw": {
getter: function (varBag, idService) {
return varBag.model.variables.callPopupDataVar;
}
},
"VcvaYm1mik6RYFHxFwn6lQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"v_C+KI7qd0ypnGmprxNxpQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsMessageGuestIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"NBgrI_Ksdk6lU3_rjbW5gQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsContactOrganiserIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"OajrBpCLf02LiKGf2boqAw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventHostIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"u8sztheJsU+SBLOj_CuvDg": {
getter: function (varBag, idService) {
return varBag.model.variables.eventDateIn;
},
dataType: OS.DataTypes.DataTypes.Date
},
"5whZiTMTe0GXSclU6S8lcA": {
getter: function (varBag, idService) {
return varBag.model.variables.eventLocalityIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"HRhPONJVBkK8K9fPgwY+iQ": {
getter: function (varBag, idService) {
return varBag.model.variables.getCoordinatorDetailsDataAct;
}
},
"osFC7BHTK02PgnLCIBBlkA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"1JabqEzNMUy_PbWPvli52g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"lJg4Nc4gXESXVDnaiVlgRw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderLeft"));
})(varBag.model, idService);
}
},
"XIQfJ9Wt5EWrjklyLH9p6Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"2qlivDdkiESXMzXGdNNqpw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderRight"));
})(varBag.model, idService);
}
},
"T2NVNjfTkUqAhMzGRsg9kQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"fZ0hcQYNbUyH2e8p+FBI4w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"JIRNzUyq10uvAMaWkfXHZw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasNoError"));
})(varBag.model, idService);
}
},
"WNgGRrHpok+YD5XrG1FolA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("IsDataFetched"));
})(varBag.model, idService);
}
},
"DSiK4+HvLEaq4fadcEZz8g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasContent"));
})(varBag.model, idService);
}
},
"T+B688jF50+EsluH6rz+aA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ContactOrganiser_Form"));
})(varBag.model, idService);
}
},
"Wz+6k+pIRk2yp3uoBX+DEQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Cont_From"));
})(varBag.model, idService);
}
},
"rT6yuDLS7kyOlBEr803HdQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Label_From"));
})(varBag.model, idService);
}
},
"BIBREUfdNUyVWgWSBwp6FQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_From"));
})(varBag.model, idService);
}
},
"8HqfR8SEZ0mFMtwppW6UPA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Cont_To"));
})(varBag.model, idService);
}
},
"thd9oCvIO0mP_8ZQF6Hk9Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Label_To"));
})(varBag.model, idService);
}
},
"m4g01MTRgEqeEEKtsR98Og": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_To"));
})(varBag.model, idService);
}
},
"nVSvMnWRVUy5t+7aeLAcWA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Cont_Subject"));
})(varBag.model, idService);
}
},
"o3hRw2uMTU2QYqTDOL4lVA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Label_Subject"));
})(varBag.model, idService);
}
},
"YWaGQt8LmEeyfvTBFK1oaA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TextArea_Subject"));
})(varBag.model, idService);
}
},
"EgiAkLOAXkuIDcnzX0xkiA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Cont_Message"));
})(varBag.model, idService);
}
},
"d1wP7a61mEuQOU2RPg7Smg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Label_Message"));
})(varBag.model, idService);
}
},
"oTSaswmhtkmaLXjL_MXgaw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TextArea_Message"));
})(varBag.model, idService);
}
},
"ah17cBo5C0iv4_0x4MA5XQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Button_Submit"));
})(varBag.model, idService);
}
},
"VgrGLx_Y40SiT7Xb_SeWtw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MarkReadLoading"));
})(varBag.model, idService);
}
},
"qCEQBJJZB0KfSBIowNwoiA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ShowCallInfo_ShowCallPopup"));
})(varBag.model, idService);
}
},
"tfuloLO7TEiJf30PdWdlBg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DialogHeader"));
})(varBag.model, idService);
}
},
"OgbMaStNzUidMYT+kAdw2w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DialogBody"));
})(varBag.model, idService);
}
},
"RxjhwPEel0+2rPza4ESYTQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ButtonLabel_Confirm"));
})(varBag.model, idService);
}
},
"UC+4+tHwUU6JGDkBWueJfw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ButtonLabel_Dismiss"));
})(varBag.model, idService);
}
},
"ODGtjRt2DEmi1ZNPlskXVw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomBar"));
})(varBag.model, idService);
}
},
"MiEIhuFGz0WNJDcsioXC8g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomBar"));
})(varBag.model, idService);
}
},
"QpU5ygeNGEq3kgC1uks5zA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
},
"NTadf81yR0+mDEPQ9GXRvg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
