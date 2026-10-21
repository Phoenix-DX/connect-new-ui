define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_ContactForm.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "NavigationHandler.controller", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_Email.model", "Connect2_OrbitMobile_MUI.controller", "NavigationHandler.controller$PreventNavigation", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$NavigationHandler", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "UBT_Email.model$OrbitEmailInformationRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBT_Email", "Connect2_OrbitMobile_MUI.model$AuditPayload_ContactHelpdeskRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ContactHelpdesk", "Connect2_OrbitMobile_MUI.model$AuditPayload_EmailHostRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_EmailHost"], function (OutSystems, Connect2_OrbitMobile_MUIModel, NavigationHandlerController, UBT_AppManagerModel, UBT_AppManagerController, UBT_EmailModel, Connect2_OrbitMobile_MUIController) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("UserSubject", "userSubjectVar", "UserSubject", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("Message", "messageVar", "Message", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("UserFullName", "userFullNameVar", "UserFullName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("IsSubmitting", "isSubmittingVar", "IsSubmitting", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("CharactersCounter", "charactersCounterVar", "CharactersCounter", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("MessageMaxLength", "messageMaxLengthVar", "MessageMaxLength", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(1000);
}, false), 
this.attr("PreviousMessage", "previousMessageVar", "PreviousMessage", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("LineCount", "lineCountVar", "LineCount", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("In_EventId", "in_EventIdIn", "In_EventId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_EventIdInDataFetchStatus", "_in_EventIdInDataFetchStatus", "_in_EventIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_MilestoneId", "in_MilestoneIdIn", "In_MilestoneId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_MilestoneIdInDataFetchStatus", "_in_MilestoneIdInDataFetchStatus", "_in_MilestoneIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_TargetMemberId", "in_TargetMemberIdIn", "In_TargetMemberId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_TargetMemberIdInDataFetchStatus", "_in_TargetMemberIdInDataFetchStatus", "_in_TargetMemberIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_IsContactHelpdesk", "in_IsContactHelpdeskIn", "In_IsContactHelpdesk", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsContactHelpdeskInDataFetchStatus", "_in_IsContactHelpdeskInDataFetchStatus", "_in_IsContactHelpdeskInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_Subject", "in_SubjectIn", "In_Subject", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_SubjectInDataFetchStatus", "_in_SubjectInDataFetchStatus", "_in_SubjectInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_EventName", "in_EventNameIn", "In_EventName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_EventNameInDataFetchStatus", "_in_EventNameInDataFetchStatus", "_in_EventNameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_HostName", "in_HostNameIn", "In_HostName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_HostNameInDataFetchStatus", "_in_HostNameInDataFetchStatus", "_in_HostNameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_HostEmail", "in_HostEmailIn", "In_HostEmail", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_HostEmailInDataFetchStatus", "_in_HostEmailInDataFetchStatus", "_in_HostEmailInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_MilestoneName", "in_MilestoneNameIn", "In_MilestoneName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_MilestoneNameInDataFetchStatus", "_in_MilestoneNameInDataFetchStatus", "_in_MilestoneNameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_FormattedDateTime", "in_FormattedDateTimeIn", "In_FormattedDateTime", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_FormattedDateTimeInDataFetchStatus", "_in_FormattedDateTimeInDataFetchStatus", "_in_FormattedDateTimeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
return {
Form: OS.Model.ValidationWidgetRecord,
TextArea_In_Subject: OS.Model.ValidationWidgetRecord,
Input_Subject: OS.Model.ValidationWidgetRecord,
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

if("In_MilestoneId" in inputs) {
this.variables.in_MilestoneIdIn = inputs.In_MilestoneId;
if("_in_MilestoneIdInDataFetchStatus" in inputs) {
this.variables._in_MilestoneIdInDataFetchStatus = inputs._in_MilestoneIdInDataFetchStatus;
}

}

if("In_TargetMemberId" in inputs) {
this.variables.in_TargetMemberIdIn = inputs.In_TargetMemberId;
if("_in_TargetMemberIdInDataFetchStatus" in inputs) {
this.variables._in_TargetMemberIdInDataFetchStatus = inputs._in_TargetMemberIdInDataFetchStatus;
}

}

if("In_IsContactHelpdesk" in inputs) {
this.variables.in_IsContactHelpdeskIn = inputs.In_IsContactHelpdesk;
if("_in_IsContactHelpdeskInDataFetchStatus" in inputs) {
this.variables._in_IsContactHelpdeskInDataFetchStatus = inputs._in_IsContactHelpdeskInDataFetchStatus;
}

}

if("In_Subject" in inputs) {
this.variables.in_SubjectIn = inputs.In_Subject;
if("_in_SubjectInDataFetchStatus" in inputs) {
this.variables._in_SubjectInDataFetchStatus = inputs._in_SubjectInDataFetchStatus;
}

}

if("In_EventName" in inputs) {
this.variables.in_EventNameIn = inputs.In_EventName;
if("_in_EventNameInDataFetchStatus" in inputs) {
this.variables._in_EventNameInDataFetchStatus = inputs._in_EventNameInDataFetchStatus;
}

}

if("In_HostName" in inputs) {
this.variables.in_HostNameIn = inputs.In_HostName;
if("_in_HostNameInDataFetchStatus" in inputs) {
this.variables._in_HostNameInDataFetchStatus = inputs._in_HostNameInDataFetchStatus;
}

}

if("In_HostEmail" in inputs) {
this.variables.in_HostEmailIn = inputs.In_HostEmail;
if("_in_HostEmailInDataFetchStatus" in inputs) {
this.variables._in_HostEmailInDataFetchStatus = inputs._in_HostEmailInDataFetchStatus;
}

}

if("In_MilestoneName" in inputs) {
this.variables.in_MilestoneNameIn = inputs.In_MilestoneName;
if("_in_MilestoneNameInDataFetchStatus" in inputs) {
this.variables._in_MilestoneNameInDataFetchStatus = inputs._in_MilestoneNameInDataFetchStatus;
}

}

if("In_FormattedDateTime" in inputs) {
this.variables.in_FormattedDateTimeIn = inputs.In_FormattedDateTime;
if("_in_FormattedDateTimeInDataFetchStatus" in inputs) {
this.variables._in_FormattedDateTimeInDataFetchStatus = inputs._in_FormattedDateTimeInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Orbit_ScreenBlocks.ScreenBlock_ContactForm");
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_ContactForm.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "NavigationHandler.controller", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_Email.model", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_ContactForm.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_ContactForm.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$view", "Connect2_LegacyShared.Reusable.InputCounter.mvc$view", "OutSystemsUI_2_23.Utilities.DEPRECATED_ButtonLoading.mvc$view", "NavigationHandler.ConfirmationDialogs.NavigationConfirmationDialog.mvc$view", "NavigationHandler.controller$PreventNavigation", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$NavigationHandler", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "UBT_Email.model$OrbitEmailInformationRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBT_Email", "Connect2_OrbitMobile_MUI.model$AuditPayload_ContactHelpdeskRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ContactHelpdesk", "Connect2_OrbitMobile_MUI.model$AuditPayload_EmailHostRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_EmailHost"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, NavigationHandlerController, UBT_AppManagerModel, UBT_AppManagerController, UBT_EmailModel, React, OSView, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_ContactForm_mvc_model, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_ContactForm_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, OSWidgets, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_LegacyShared_Reusable_InputCounter_mvc_view, OutSystemsUI_2_23_Utilities_DEPRECATED_ButtonLoading_mvc_view, NavigationHandler_ConfirmationDialogs_NavigationConfirmationDialog_mvc_view) {
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
        View.displayName = "Orbit_ScreenBlocks.ScreenBlock_ContactForm";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_LegacyShared_Reusable_InputCounter_mvc_view, OutSystemsUI_2_23_Utilities_DEPRECATED_ButtonLoading_mvc_view, NavigationHandler_ConfirmationDialogs_NavigationConfirmationDialog_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_ContactForm_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_ContactForm_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, {
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
return [React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("vtz0rA2_30mgoN6vBW848g.Value"), function () {
return ("Contact " + ((model.variables.in_IsContactHelpdeskIn) ? ("Orbit Helpdesk") : ("Host")));
}, function () {
return model.variables.in_IsContactHelpdeskIn;
}),
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsContactHelpdeskInDataFetchStatus)
})];
}),
headerRight: PlaceholderContent.Empty,
headerContent: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Form, {
_validationProps: {
validationService: validationService
},
gridProperties: {
classes: "OSFillParent"
},
style: "form card orbit-contact-form",
_idProps: {
service: idService,
name: "Form"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.in_IsContactHelpdeskIn, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
mandatory: false,
targetWidget: "TextArea_In_Subject",
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Subject"), React.createElement(OSWidgets.TextArea, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form")
},
enabled: false,
extendedProperties: {
rows: (model.variables.lineCountVar).toString()
},
gridProperties: {
classes: "OSFillParent"
},
mandatory: false,
maxLength: 200,
style: "form-control",
textLines: 1,
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.in_SubjectIn, function (value) {
model.variables.in_SubjectIn = value;
}),
_idProps: {
service: idService,
name: "TextArea_In_Subject"
},
_widgetRecordProvider: widgetsRecordProvider,
variable_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SubjectInDataFetchStatus)
}))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "flex-center-vertical full-width font-size-1-1em",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-mail color-orbit-primary-7",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
style: "margin-left-base",
text: ["To:"],
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "margin-left-xs bold",
value: model.variables.in_HostNameIn,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HostNameInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
mandatory: true,
targetWidget: "Input_Subject",
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Subject"), React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form")
},
enabled: true,
extendedEvents: {
onBlur: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_ContactForm/Input_Subject onblur");
controller.onBlur_InputSubject$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: true,
maxLength: 100,
onChange: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_ContactForm/Input_Subject OnChange");
controller.onChange_InputSubject$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
prompt: "Subject",
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.userSubjectVar, function (value) {
model.variables.userSubjectVar = value;
}),
_idProps: {
service: idService,
name: "Input_Subject"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(Connect2_LegacyShared_Reusable_InputCounter_mvc_view, {
inputs: {
InputId: idService.getId("Input_Subject")
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form")
},
_idProps: {
service: idService,
uuid: "15",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
mandatory: true,
targetWidget: "TextArea_Message",
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("dWOvwpza606lLCU7L_zSpw.Value"), function () {
return ((model.variables.in_IsContactHelpdeskIn) ? ("Your inquiry") : ("Message"));
}, function () {
return model.variables.in_IsContactHelpdeskIn;
}),
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsContactHelpdeskInDataFetchStatus)
})), React.createElement(OSWidgets.TextArea, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form")
},
enabled: true,
extendedEvents: {
onBlur: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_ContactForm/TextArea_Message onblur");
controller.onBlur_TextAreaMessage$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
onKeyDown: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_ContactForm/TextArea_Message onkeydown");
controller.onKeyDown_TextAreaMessage$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
onKeyUp: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_ContactForm/TextArea_Message onkeyup");
controller.onKeyUp_TextAreaMessage$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
extendedProperties: {
autoComplete: "off"
},
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_ContactForm/TextArea_Message OnChange");
controller.onChange_TextAreaMessage$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
prompt: model.getCachedValue(idService.getId("TextArea_Message.Prompt"), function () {
return ((model.variables.in_IsContactHelpdeskIn) ? ("Tell us how we can help you") : ("Type message here..."));
}, function () {
return model.variables.in_IsContactHelpdeskIn;
}),
style: "form-control",
textLines: 3,
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.messageVar, function (value) {
model.variables.messageVar = value;
}),
_idProps: {
service: idService,
name: "TextArea_Message"
},
_widgetRecordProvider: widgetsRecordProvider,
prompt_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsContactHelpdeskInDataFetchStatus)
}), React.createElement(Connect2_LegacyShared_Reusable_InputCounter_mvc_view, {
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
validationParentId: idService.getId("Form")
},
_idProps: {
service: idService,
uuid: "20",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUI_2_23_Utilities_DEPRECATED_ButtonLoading_mvc_view, {
inputs: {
IsLoading: model.variables.isSubmittingVar,
ExtendedClass: "full-width"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form")
},
_idProps: {
service: idService,
uuid: "22",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: true,
isDefault: true,
onClick: function () {
_this.validateWidget(idService.getId("Form"));
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks/ScreenBlock_ContactForm/Button OnClick");
return controller.onClick_Submit$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});

;
},
style: "btn btn-primary full-width",
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("StRUCcKAB0KnJ_L5oPyM9A.Value"), function () {
return ((model.variables.in_IsContactHelpdeskIn) ? ("Submit") : ("Send Email"));
}, function () {
return model.variables.in_IsContactHelpdeskIn;
}),
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsContactHelpdeskInDataFetchStatus)
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables._in_IsContactHelpdeskInDataFetchStatus), asPrimitiveValue(model.variables.in_IsContactHelpdeskIn)]
})))];
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
style: "orbit-confirm-popup backwards-compatibility",
visible: true,
_idProps: {
service: idService,
uuid: "27"
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
controller.navigationHandlerNavigation$Action(navigationEventIn, controller.callContext(eventHandlerContext));
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
uuid: "28",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
dialogHeader: new PlaceholderContent(function () {
return ["Confirm Discard Changes"];
}),
dialogBody: new PlaceholderContent(function () {
return ["Are you sure you want to discard this message?"];
}),
buttonLabel_Confirm: new PlaceholderContent(function () {
return ["Yes"];
}),
buttonLabel_Dismiss: new PlaceholderContent(function () {
return ["Cancel"];
})
},
_dependencies: []
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_ContactForm.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "NavigationHandler.controller", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_Email.model", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_ContactForm.mvc$debugger", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_ContactForm.mvc$controller.OnInitialize.GetTextAreaLineHeightJS", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_ContactForm.mvc$controller.OnClick_Submit.ScheduleFeedbackMessageAfterTransitionJS", "NavigationHandler.controller$PreventNavigation", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$NavigationHandler", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "UBT_Email.model$OrbitEmailInformationRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBT_Email", "Connect2_OrbitMobile_MUI.model$AuditPayload_ContactHelpdeskRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ContactHelpdesk", "Connect2_OrbitMobile_MUI.model$AuditPayload_EmailHostRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_EmailHost"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, NavigationHandlerController, UBT_AppManagerModel, UBT_AppManagerController, UBT_EmailModel, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_ContactForm_mvc_Debugger, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_ContactForm_mvc_controller_OnInitialize_GetTextAreaLineHeightJS, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_ContactForm_mvc_controller_OnClick_Submit_ScheduleFeedbackMessageAfterTransitionJS) {
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
Controller.prototype.sendContactEmail$ServerAction = function (isContactHelpdeskIn, eventIdIn, milestoneIdIn, targetMemberIdIn, subjectIn, userSubjectIn, messageIn, emailInfoIn, callContext) {
var controller = this.controller;
var inputs = {
IsContactHelpdesk: OS.DataConversion.ServerDataConverter.to(isContactHelpdeskIn, OS.DataTypes.DataTypes.Boolean),
EventId: OS.DataConversion.ServerDataConverter.to(eventIdIn, OS.DataTypes.DataTypes.LongInteger),
MilestoneId: OS.DataConversion.ServerDataConverter.to(milestoneIdIn, OS.DataTypes.DataTypes.Text),
TargetMemberId: OS.DataConversion.ServerDataConverter.to(targetMemberIdIn, OS.DataTypes.DataTypes.LongInteger),
Subject: OS.DataConversion.ServerDataConverter.to(subjectIn, OS.DataTypes.DataTypes.Text),
UserSubject: OS.DataConversion.ServerDataConverter.to(userSubjectIn, OS.DataTypes.DataTypes.Text),
Message: OS.DataConversion.ServerDataConverter.to(messageIn, OS.DataTypes.DataTypes.Text),
EmailInfo: OS.DataConversion.ServerDataConverter.to(emailInfoIn, OS.DataTypes.DataTypes.Record)
};
return controller.callServerAction("SendContactEmail", "screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_ContactForm/ActionSendContactEmail", "1IXCj0Dy31NbV9HfVKiKYg", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_ContactForm$rssespaceconnect2_orbitmobile_bl_ActionSendContactEmail"))();
executeServerActionResult.isSuccessOut = OS.DataConversion.ServerDataConverter.from(outputs.IsSuccess, OS.DataTypes.DataTypes.Boolean);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_ContactForm$rssespaceconnect2_orbitmobile_bl_ActionSendContactEmail", [{
name: "IsSuccess",
attrName: "isSuccessOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return true;
}
}]);

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._validateEmptyFields$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ValidateEmptyFields");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:kGLZF3nNUUq9CQXNgmszcg:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.sdg7sxdPPkCiitLoXqfhcw/ClientActions.kGLZF3nNUUq9CQXNgmszcg:AHesxENiRjIKaRUsZ2pznA", "Connect2_OrbitMobile_MUI", "ValidateEmptyFields", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ddn4zx+l8EOmMTgn_UdkEA", callContext.id);
// Has message?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nOEB9AdOjE+wrfeYtjYn6A", callContext.id) && ((OS.BuiltinFunctions.trim(model.variables.messageVar)) !== ("")))) {
// Set Valid Widget
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9D8O+QwC0U2hEzA5QPpxVQ", callContext.id);
// TextArea_Message.Valid = True
model.widgets.get(idService.getId("TextArea_Message")).validAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9D8O+QwC0U2hEzA5QPpxVQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// TextArea_Message.ValidationMessage = ""
model.widgets.get(idService.getId("TextArea_Message")).validationMessageAttr = "";
} else {
// Set Invalid Widget
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CSPCv7DXK0ue4f21wEEUYg", callContext.id);
// TextArea_Message.Valid = False
model.widgets.get(idService.getId("TextArea_Message")).validAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CSPCv7DXK0ue4f21wEEUYg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// TextArea_Message.ValidationMessage = "Required field!"
model.widgets.get(idService.getId("TextArea_Message")).validationMessageAttr = "Required field!";
}

// Is Contact Host?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LoA+Pt0JxEKH+vuGkNjSXw", callContext.id) && !(model.variables.in_IsContactHelpdeskIn))) {
// Has subject?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Q6lbPEX7sEaCWJY5zA_lvA", callContext.id) && ((OS.BuiltinFunctions.trim(model.variables.userSubjectVar)) !== ("")))) {
// Set Valid Widget
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:iq7tZO_RlE69CRI+n6LUkw", callContext.id);
// Input_Subject.Valid = True
model.widgets.get(idService.getId("Input_Subject")).validAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:iq7tZO_RlE69CRI+n6LUkw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Input_Subject.ValidationMessage = ""
model.widgets.get(idService.getId("Input_Subject")).validationMessageAttr = "";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:S73f_SA5ukOTfZsrwr8GpA", callContext.id);
} else {
// Set Invalid Widget
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:A3wTW5pS+kygsFycX8P3jA", callContext.id);
// Input_Subject.Valid = False
model.widgets.get(idService.getId("Input_Subject")).validAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:A3wTW5pS+kygsFycX8P3jA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Input_Subject.ValidationMessage = "Required field!"
model.widgets.get(idService.getId("Input_Subject")).validationMessageAttr = "Required field!";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:S73f_SA5ukOTfZsrwr8GpA", callContext.id);
}

} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GO08D4QzDkuX2j_pnOL5tA", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:kGLZF3nNUUq9CQXNgmszcg", callContext.id);
}

};
Controller.prototype._onChange_TextAreaMessage$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnChange_TextAreaMessage");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:E+1QGYaJ3UCMSNtwwwhYgQ:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.sdg7sxdPPkCiitLoXqfhcw/ClientActions.E+1QGYaJ3UCMSNtwwwhYgQ:l9MHAgQKmOi_+L8qr9AeGg", "Connect2_OrbitMobile_MUI", "OnChange_TextAreaMessage", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QM3HI7HNKEe18hgHBouWNw", callContext.id);
// Has message?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:G4gRZ4ZiAkaL7i396eIn9g", callContext.id) && ((OS.BuiltinFunctions.trim(model.variables.messageVar)) !== ("")))) {
// Set Valid Widget
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ZWJUjdRTkkqdb2GQlnH5_Q", callContext.id);
// TextArea_Message.Valid = True
model.widgets.get(idService.getId("TextArea_Message")).validAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ZWJUjdRTkkqdb2GQlnH5_Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// TextArea_Message.ValidationMessage = ""
model.widgets.get(idService.getId("TextArea_Message")).validationMessageAttr = "";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ys+kBp6HR0mfh9YDGMY6LQ", callContext.id);
} else {
// Set Invalid Widget
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jmLGm3ne9ECPD95g5hMqNA", callContext.id);
// TextArea_Message.Valid = False
model.widgets.get(idService.getId("TextArea_Message")).validAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jmLGm3ne9ECPD95g5hMqNA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// TextArea_Message.ValidationMessage = "Required field!"
model.widgets.get(idService.getId("TextArea_Message")).validationMessageAttr = "Required field!";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ys+kBp6HR0mfh9YDGMY6LQ", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:E+1QGYaJ3UCMSNtwwwhYgQ", callContext.id);
}

};
Controller.prototype._onKeyUp_TextAreaMessage$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnKeyUp_TextAreaMessage");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:_jIsNo3s3E2jT_YTn6Bf1Q:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.sdg7sxdPPkCiitLoXqfhcw/ClientActions._jIsNo3s3E2jT_YTn6Bf1Q:YyrX_IpB3rnqKQfpDi7b3A", "Connect2_OrbitMobile_MUI", "OnKeyUp_TextAreaMessage", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YT9K5t7uBUidp1+ZvA+gVw", callContext.id);
// Reached Max Length?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tlLNFT8huUSA86BXNHe1lw", callContext.id) && OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.length(model.variables.messageVar)).gte(model.variables.messageMaxLengthVar))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:H6+u1SU520GcApQ8MnMNTg", callContext.id);
// Message = PreviousMessage
model.variables.messageVar = model.variables.previousMessageVar;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:AE1rg_v0J0C6MdFHEE+gDA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TJ27p9LQbUWvBVJcMH3XHA", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:_jIsNo3s3E2jT_YTn6Bf1Q", callContext.id);
}

};
Controller.prototype._onKeyDown_TextAreaMessage$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnKeyDown_TextAreaMessage");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:lWZLOCEuTkOCbyEoN7PUrA:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.sdg7sxdPPkCiitLoXqfhcw/ClientActions.lWZLOCEuTkOCbyEoN7PUrA:3frKZX1x0XXcU7WPL5Duvw", "Connect2_OrbitMobile_MUI", "OnKeyDown_TextAreaMessage", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4g0Rvicut0azinOfYYIMug", callContext.id);
// PreviousMesage
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:iyypBkP1GEm2naVi4_mPqQ", callContext.id);
// PreviousMessage = Message
model.variables.previousMessageVar = model.variables.messageVar;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dCAv5tz0x02Q+wokXaDLDw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:lWZLOCEuTkOCbyEoN7PUrA", callContext.id);
}

};
Controller.prototype._navigationHandlerNavigation$Action = function (navigationEventIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("NavigationHandlerNavigation");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_ContactForm.NavigationHandlerNavigation$vars"))());
vars.value.navigationEventInLocal = navigationEventIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Vfv9QSKYEU6F9CU5RG2sQQ:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.sdg7sxdPPkCiitLoXqfhcw/ClientActions.Vfv9QSKYEU6F9CU5RG2sQQ:SvKnV4qYXc5RXtQ65673rw", "Connect2_OrbitMobile_MUI", "NavigationHandlerNavigation", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:szSSMoAxOUui9u8z9h4dzA", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tBJiae+e0UWUbUnYhglB0A", callContext.id) && model.variables.in_IsContactHelpdeskIn)) {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:446cp5XiVEqA6RmymjogOw", callContext.id) && !(((model.variables.messageVar) !== (""))))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pFa9sDcF6UGiLwljX7mOLg", callContext.id);
return ;

}

} else {
// Any field has data?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PAMdSFFknUm27Arp+vZ1KA", callContext.id) && !((((model.variables.userSubjectVar) !== ("")) || ((model.variables.messageVar) !== ("")))))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ufDa+AGfiE6tPS8uJRqhcQ", callContext.id);
return ;

}

}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VLnfu6m_f026xNI5MFpu4w", callContext.id);
// Execute Action: PreventNavigation
NavigationHandlerController.default.preventNavigation$Action(vars.value.navigationEventInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:hiI57UiWO06k0gReUJe1bw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Vfv9QSKYEU6F9CU5RG2sQQ", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_ContactForm.NavigationHandlerNavigation$vars", [{
name: "NavigationEvent",
attrName: "navigationEventInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._onInitialize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
var getTextAreaLineHeightJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getTextAreaLineHeightJSResult = getTextAreaLineHeightJSResult;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:ygAPgaK9jEWqbHGlQh6G8A:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.sdg7sxdPPkCiitLoXqfhcw/ClientActions.ygAPgaK9jEWqbHGlQh6G8A:+YYHQ2LIEDSlooj1Zl9feQ", "Connect2_OrbitMobile_MUI", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Ffrkfb00DEyeRJJQCQOG4A", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1U7JZGQKh0ymq_n9SRCafw", callContext.id);
getTextAreaLineHeightJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_ContactForm_mvc_controller_OnInitialize_GetTextAreaLineHeightJS, "GetTextAreaLineHeight", "OnInitialize", {
In_Subject: OS.DataConversion.JSNodeParamConverter.to(model.variables.in_SubjectIn, OS.DataTypes.DataTypes.Text),
In_FontSize: OS.DataConversion.JSNodeParamConverter.to(10, OS.DataTypes.DataTypes.Integer),
Out_LineCount: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_ContactForm.OnInitialize$getTextAreaLineHeightJSResult"))();
jsNodeResult.out_LineCountOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Out_LineCount, OS.DataTypes.DataTypes.Integer);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uiUf4ntOv06fSiJgYCqSuQ", callContext.id);
// LineCount = GetTextAreaLineHeight.Out_LineCount
model.variables.lineCountVar = getTextAreaLineHeightJSResult.value.out_LineCountOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:z2DRevBfRU2_Jl_jsS03Zg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:ygAPgaK9jEWqbHGlQh6G8A", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_ContactForm.OnInitialize$getTextAreaLineHeightJSResult", [{
name: "Out_LineCount",
attrName: "out_LineCountOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
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
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:R4wZiBzj8UKnoeTa6+F+Tg:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.sdg7sxdPPkCiitLoXqfhcw/ClientActions.R4wZiBzj8UKnoeTa6+F+Tg:Y9JKf7WstqYQAlzIyQhKXg", "Connect2_OrbitMobile_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:U80YhDdimEir2HcvaQWpjQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:g5NqKdnewkKPKjXf_8F9Cw", callContext.id);
// Execute Action: AppManager_GetCachedUserInfo
appManager_GetCachedUserInfoVar.value = UBT_AppManagerController.default.appManager_GetCachedUserInfo$Action(callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UOZD3nBdf0+DzkZiXCh6rg", callContext.id);
// UserFullName = AppManager_GetCachedUserInfo.UserInformation.FirstName + " " + AppManager_GetCachedUserInfo.UserInformation.LastName
model.variables.userFullNameVar = ((appManager_GetCachedUserInfoVar.value.userInformationOut.firstNameAttr + " ") + appManager_GetCachedUserInfoVar.value.userInformationOut.lastNameAttr);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CILLWOqPuUqzGuYKiBLP+w", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:R4wZiBzj8UKnoeTa6+F+Tg", callContext.id);
}

};
Controller.prototype._onBlur_TextAreaMessage$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnBlur_TextAreaMessage");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Bq_KpUPEYE+iiEPCSZO46w:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.sdg7sxdPPkCiitLoXqfhcw/ClientActions.Bq_KpUPEYE+iiEPCSZO46w:3Aqrwtz38DawgROfdrtdMA", "Connect2_OrbitMobile_MUI", "OnBlur_TextAreaMessage", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QPMGsOvdzkup3ZPz07RXzQ", callContext.id);
// Has no message?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JGi9C2N7MUq2j+eOnQNfuw", callContext.id) && (OS.BuiltinFunctions.trim(model.variables.messageVar) === ""))) {
// Set Invalid Widget
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:aMWChawPhU6sDmtvoAKFZA", callContext.id);
// TextArea_Message.Valid = False
model.widgets.get(idService.getId("TextArea_Message")).validAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:aMWChawPhU6sDmtvoAKFZA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// TextArea_Message.ValidationMessage = "Required field!"
model.widgets.get(idService.getId("TextArea_Message")).validationMessageAttr = "Required field!";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CrNlhpQ9E0W5f5cKklN2iw", callContext.id);
} else {
// Set Valid Widget
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gd_xT0Z2_ECW4ZoIv_quUQ", callContext.id);
// TextArea_Message.Valid = True
model.widgets.get(idService.getId("TextArea_Message")).validAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gd_xT0Z2_ECW4ZoIv_quUQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// TextArea_Message.ValidationMessage = ""
model.widgets.get(idService.getId("TextArea_Message")).validationMessageAttr = "";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CrNlhpQ9E0W5f5cKklN2iw", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Bq_KpUPEYE+iiEPCSZO46w", callContext.id);
}

};
Controller.prototype._onClick_Submit$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_Submit");
callContext = controller.callContext(callContext);
var sendContactEmailVar = new OS.DataTypes.VariableHolder();
var appManager_GetCachedUserInfoVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.sendContactEmailVar = sendContactEmailVar;
varBag.appManager_GetCachedUserInfoVar = appManager_GetCachedUserInfoVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:8oTSvvrXwk6Glb1hCofq4w:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.sdg7sxdPPkCiitLoXqfhcw/ClientActions.8oTSvvrXwk6Glb1hCofq4w:nh1xx0jnjQIPZ6oGeCuKZg", "Connect2_OrbitMobile_MUI", "OnClick_Submit", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ScCLL5DUK0iFRr86WNloLA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Is not submitting?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7mOT4DD98U+2zL3lQO0qvA", callContext.id) && !(model.variables.isSubmittingVar))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:y0zZ8Tqcwk6l_hdsuGnihA", callContext.id);
// Execute Action: ValidateEmptyFields
controller._validateEmptyFields$Action(callContext);
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BZk07kBFv0COGVKI+bsiew", callContext.id) && model.widgets.get(idService.getId("Form")).validAttr)) {
// Set IsSubmitting to True
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6KYTzAadkk2d0x19NwmxGQ", callContext.id);
// IsSubmitting = True
model.variables.isSubmittingVar = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:B6pv8bbAUkqbBCrJhdmOHw", callContext.id);
// Execute Action: AppManager_GetCachedUserInfo
appManager_GetCachedUserInfoVar.value = UBT_AppManagerController.default.appManager_GetCachedUserInfo$Action(callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nSkOTW7TA0qht+uNCK+kKg", callContext.id);
// Execute Action: SendContactEmail
model.flush();
return controller.sendContactEmail$ServerAction(model.variables.in_IsContactHelpdeskIn, model.variables.in_EventIdIn, model.variables.in_MilestoneIdIn, model.variables.in_TargetMemberIdIn, model.variables.in_SubjectIn, model.variables.userSubjectVar, model.variables.messageVar, function () {
var rec = new UBT_EmailModel.OrbitEmailInformationRec();
rec.eventNameAttr = model.variables.in_EventNameIn;
rec.senderFullNameAttr = model.variables.userFullNameVar;
rec.hostNameAttr = model.variables.in_HostNameIn;
rec.hostEmailAttr = model.variables.in_HostEmailIn;
rec.milestoneNameAttr = model.variables.in_MilestoneNameIn;
rec.formattedDateTimeAttr = model.variables.in_FormattedDateTimeIn;
return rec;
}(), callContext).then(function (value) {
sendContactEmailVar.value = value;
}).then(function () {
// Set IsSubmitting to False
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:l7YiGgQr0EaixnQMMztQ+w", callContext.id);
// IsSubmitting = False
model.variables.isSubmittingVar = false;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jE6vGhcgkUCvkQKiUBtWXQ", callContext.id) && sendContactEmailVar.value.isSuccessOut)) {
// Empty Vars
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Gux0Q5H8B06prp3v3Y3LMA", callContext.id);
// Message = ""
model.variables.messageVar = "";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Gux0Q5H8B06prp3v3Y3LMA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// CharactersCounter = 0
model.variables.charactersCounterVar = 0;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Gux0Q5H8B06prp3v3Y3LMA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// In_Subject = ""
model.variables.in_SubjectIn = "";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Gux0Q5H8B06prp3v3Y3LMA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// UserSubject = ""
model.variables.userSubjectVar = "";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:HAm3zPxUGEuAlBWt8i3gdA", callContext.id);
controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_ScreenBlock_ContactForm_mvc_controller_OnClick_Submit_ScheduleFeedbackMessageAfterTransitionJS, "ScheduleFeedbackMessageAfterTransition", "OnClick_Submit", {
Message: OS.DataConversion.JSNodeParamConverter.to("Your email has been sent.", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oRYPydmIgUWcxqSfFzH0uQ", callContext.id);
// Trigger Event: Submitted
return controller.submitted$Action(callContext).then(function () {
// Is Contact Helpdesk?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9976N+z_p0Sa_rx75GUpJQ", callContext.id) && model.variables.in_IsContactHelpdeskIn)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:HFNxl9krV02eDEiuowR48A", callContext.id);
// Execute Action: OnApplicationEvent_ContactHelpdesk
model.flush();
return Connect2_OrbitMobile_MUIController.default.onApplicationEvent_ContactHelpdesk$Action(function () {
var rec = new Connect2_OrbitMobile_MUIModel.AuditPayload_ContactHelpdeskRec();
rec.eventIdAttr = model.variables.in_EventIdIn;
rec.eventTitleAttr = model.variables.in_EventNameIn;
rec.subjectAttr = model.variables.in_SubjectIn;
rec.messageAttr = model.variables.messageVar;
return rec;
}(), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bfRHcJ_X5E6WyiTGv1iObg", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zdpR87q8FU686uKK7JrRWg", callContext.id);
// Execute Action: OnApplicationEvent_EmailHost
model.flush();
return Connect2_OrbitMobile_MUIController.default.onApplicationEvent_EmailHost$Action(function () {
var rec = new Connect2_OrbitMobile_MUIModel.AuditPayload_EmailHostRec();
rec.milestoneIdAttr = model.variables.in_MilestoneIdIn;
rec.eventIdAttr = model.variables.in_EventIdIn;
rec.eventTitleAttr = model.variables.in_EventNameIn;
rec.subjectAttr = model.variables.userSubjectVar;
rec.hostNameAttr = model.variables.in_HostNameIn;
rec.messageAttr = model.variables.messageVar;
return rec;
}(), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bfRHcJ_X5E6WyiTGv1iObg", callContext.id);
});
}

});
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:FEWH9nnALEO2NFrXERJCrw", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("There is currently no helpdesk email associated with this event, please try to contact us later. If your inquiry is urgent please contact your local Orbit Coordinator.", /*Info*/ 0);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:icDd74yDhEyeliXHnrPvsQ", callContext.id);
}

});
});
} else {
// Set IsSubmitting to False
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ACDtfdMim0invnxDTLNaDg", callContext.id);
// IsSubmitting = False
model.variables.isSubmittingVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QALJXu3zWEqOkDYkBklJ9w", callContext.id);
}

});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CusL9zbnQ0ulnJjaiRjRHg", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:8oTSvvrXwk6Glb1hCofq4w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:8oTSvvrXwk6Glb1hCofq4w", callContext.id);
throw ex;

});
};
Controller.prototype._onChange_InputSubject$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnChange_InputSubject");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:CBhzwijid0iVQ3YvO0ItUw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.sdg7sxdPPkCiitLoXqfhcw/ClientActions.CBhzwijid0iVQ3YvO0ItUw:03rZiyzg7ChfEBEHz375gw", "Connect2_OrbitMobile_MUI", "OnChange_InputSubject", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:13l4hmSnLkqLNScHcG2o+g", callContext.id);
// Has subject?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TbqEntaUhECBX9NN6kVtzg", callContext.id) && ((OS.BuiltinFunctions.trim(model.variables.userSubjectVar)) !== ("")))) {
// Set Valid Widget
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RqclXY5RkU+IDF1p2Y7k0Q", callContext.id);
// Input_Subject.Valid = True
model.widgets.get(idService.getId("Input_Subject")).validAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RqclXY5RkU+IDF1p2Y7k0Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Input_Subject.ValidationMessage = ""
model.widgets.get(idService.getId("Input_Subject")).validationMessageAttr = "";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+Kdk4x0rs0G0Q3YEgDjr5g", callContext.id);
} else {
// Set Invalid Widget
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Z_WXgm14MUa5osx4_JviHg", callContext.id);
// Input_Subject.Valid = False
model.widgets.get(idService.getId("Input_Subject")).validAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Z_WXgm14MUa5osx4_JviHg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Input_Subject.ValidationMessage = "Required field!"
model.widgets.get(idService.getId("Input_Subject")).validationMessageAttr = "Required field!";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+Kdk4x0rs0G0Q3YEgDjr5g", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:CBhzwijid0iVQ3YvO0ItUw", callContext.id);
}

};
Controller.prototype._onBlur_InputSubject$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnBlur_InputSubject");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:8+EnxsDx7UmbJvmMHtD03g:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.sdg7sxdPPkCiitLoXqfhcw/ClientActions.8+EnxsDx7UmbJvmMHtD03g:89TkNHAgYPfA3mPQ4Q4A+Q", "Connect2_OrbitMobile_MUI", "OnBlur_InputSubject", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nv5p+_c4lE+QiOSBmsABjA", callContext.id);
// Has subject?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xrtKMr22zkyFxjWDrU2y7w", callContext.id) && ((OS.BuiltinFunctions.trim(model.variables.userSubjectVar)) !== ("")))) {
// Set Valid Widget
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WuR1DlVahE+10UJvMcurLw", callContext.id);
// Input_Subject.Valid = True
model.widgets.get(idService.getId("Input_Subject")).validAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WuR1DlVahE+10UJvMcurLw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Input_Subject.ValidationMessage = ""
model.widgets.get(idService.getId("Input_Subject")).validationMessageAttr = "";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1Ky63poaQ0ajZATLZNIQJA", callContext.id);
} else {
// Set Invalid Widget
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ncJiubpUPUOskOr84DK5uQ", callContext.id);
// Input_Subject.Valid = False
model.widgets.get(idService.getId("Input_Subject")).validAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ncJiubpUPUOskOr84DK5uQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Input_Subject.ValidationMessage = "Required field!"
model.widgets.get(idService.getId("Input_Subject")).validationMessageAttr = "Required field!";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1Ky63poaQ0ajZATLZNIQJA", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:8+EnxsDx7UmbJvmMHtD03g", callContext.id);
}

};

Controller.prototype.validateEmptyFields$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._validateEmptyFields$Action, callContext);

};
Controller.prototype.onChange_TextAreaMessage$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onChange_TextAreaMessage$Action, callContext);

};
Controller.prototype.onKeyUp_TextAreaMessage$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onKeyUp_TextAreaMessage$Action, callContext);

};
Controller.prototype.onKeyDown_TextAreaMessage$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onKeyDown_TextAreaMessage$Action, callContext);

};
Controller.prototype.navigationHandlerNavigation$Action = function (navigationEventIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._navigationHandlerNavigation$Action, callContext, navigationEventIn);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onBlur_TextAreaMessage$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onBlur_TextAreaMessage$Action, callContext);

};
Controller.prototype.onClick_Submit$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_Submit$Action, callContext);

};
Controller.prototype.onChange_InputSubject$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onChange_InputSubject$Action, callContext);

};
Controller.prototype.onBlur_InputSubject$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onBlur_InputSubject$Action, callContext);

};
Controller.prototype.submitted$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:YqF_ecsKt0e5VFTRsjye5A:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A:QgY6d2StgdXP5HfjADqGwg", "Connect2_OrbitMobile_MUI", "Orbit_ScreenBlocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:sdg7sxdPPkCiitLoXqfhcw:/NRWebFlows.YqF_ecsKt0e5VFTRsjye5A/NodesShownInESpaceTree.sdg7sxdPPkCiitLoXqfhcw:g9F8QhNJ5ezTRFK9+6gDgw", "Connect2_OrbitMobile_MUI", "ScreenBlock_ContactForm", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:sdg7sxdPPkCiitLoXqfhcw", callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:YqF_ecsKt0e5VFTRsjye5A", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_ContactForm On Initialize");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks/ScreenBlock_ContactForm On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
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
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_ContactForm.mvc$controller.OnInitialize.GetTextAreaLineHeightJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var bD = document.querySelector("body");
if(bD && ($parameters.In_Subject !== "")){
    var inputWidth = bD.clientWidth - 20;
    var subject = $parameters.In_Subject;
    $parameters.Out_LineCount = Math.ceil((subject.length * $parameters.In_FontSize) / inputWidth);
}
};
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_ContactForm.mvc$controller.OnClick_Submit.ScheduleFeedbackMessageAfterTransitionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.setTimeout(function() {
    $public.FeedbackMessage.showFeedbackMessage($parameters.Message, 1);
}, 500);
};
});

define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks.ScreenBlock_ContactForm.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"yQmmGuiCj062sT12MEVm2Q": {
getter: function (varBag, idService) {
return varBag.vars.value.navigationEventInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"1U7JZGQKh0ymq_n9SRCafw": {
getter: function (varBag, idService) {
return varBag.getTextAreaLineHeightJSResult.value;
}
},
"g5NqKdnewkKPKjXf_8F9Cw": {
getter: function (varBag, idService) {
return varBag.appManager_GetCachedUserInfoVar.value;
}
},
"nSkOTW7TA0qht+uNCK+kKg": {
getter: function (varBag, idService) {
return varBag.sendContactEmailVar.value;
}
},
"B6pv8bbAUkqbBCrJhdmOHw": {
getter: function (varBag, idService) {
return varBag.appManager_GetCachedUserInfoVar.value;
}
},
"HAm3zPxUGEuAlBWt8i3gdA": {
getter: function (varBag, idService) {
return varBag.scheduleFeedbackMessageAfterTransitionJSResult.value;
}
},
"9myV08PPp0+DQxcL5s+NBw": {
getter: function (varBag, idService) {
return varBag.model.variables.userSubjectVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Ai4NRFtQY0i8aiCugxcM4w": {
getter: function (varBag, idService) {
return varBag.model.variables.messageVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ugFoyMgWIUaoc4VKz+NIhw": {
getter: function (varBag, idService) {
return varBag.model.variables.userFullNameVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"qr0+kUDU60OhGWcUOz_lKA": {
getter: function (varBag, idService) {
return varBag.model.variables.isSubmittingVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"tdzuBHdvckmKWC01MFKClw": {
getter: function (varBag, idService) {
return varBag.model.variables.charactersCounterVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"zrJefrIlMEuV6xJ6Mb5iaQ": {
getter: function (varBag, idService) {
return varBag.model.variables.messageMaxLengthVar;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"Nr6jCSg9qE6j+8Ciw1lEZA": {
getter: function (varBag, idService) {
return varBag.model.variables.previousMessageVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ZqFP_4NHKky8dbMlOiBcKQ": {
getter: function (varBag, idService) {
return varBag.model.variables.lineCountVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"sqs1TTJiuUC2fLi2iia0XQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"W11D2ruj_kKi3_tif+qnPQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MilestoneIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"44MMI+LM2EeEqm_Fni54hw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_TargetMemberIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"kGoFi2NsY0GJ2VczGVZtXg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsContactHelpdeskIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"A3guGT+ID0SbRkzc63ypjQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_SubjectIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"QbmNNIzkwEyiEM6WpG5lng": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"uDv+_rt8FEC7oX3ht4fDQg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HostNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"HenVL2IKfEycfwG2sHRbdA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HostEmailIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ref959zgSEq7zjdmyphfwg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MilestoneNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"k7FkfH73yECLsBCq6RjHsQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_FormattedDateTimeIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"G3Q44TU4DEK47OkfBfr2Pw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"Rcd9hA5e90OMTP4Gi2Ixmw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"pkkrqf_0VEmuKTTv+IXEig": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderLeft"));
})(varBag.model, idService);
}
},
"lsI3BpYf8E67QpA8e3DrzQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"baHfcIOBaECaqMctsduB6A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderRight"));
})(varBag.model, idService);
}
},
"eqyrHRFpDk6fE2VKjlUfYg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"GPJ1VI7ID0KyzUNLLIeZUA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"AbgE653mP0ajkRxH9IDx4Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Form"));
})(varBag.model, idService);
}
},
"gcWsHbjnkUGKCaN_abvmNA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsContactHelpdesk"));
})(varBag.model, idService);
}
},
"GVB04AvSdEaAqemUgRggcA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TextArea_In_Subject"));
})(varBag.model, idService);
}
},
"K1IvGudpzkunvofbveR3Jw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_Subject"));
})(varBag.model, idService);
}
},
"9ZJ8k7YqX0K4LVeIiDV2sg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TextArea_Message"));
})(varBag.model, idService);
}
},
"GFnISDIguUKYyfuv1zgjQw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Button"));
})(varBag.model, idService);
}
},
"Y__gX0iUoUqsmEeu7_Hg5g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomBar"));
})(varBag.model, idService);
}
},
"VB81nVMFjEybOIyTcOrfhQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomBar"));
})(varBag.model, idService);
}
},
"4fpLvbaKBE+QFI3osyvehw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
},
"SmQqQXqDNEmgL7jdJqPHIw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
},
"Wfgw2pJRvU67p8iFPAe7DQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DialogHeader"));
})(varBag.model, idService);
}
},
"G7nq_dUISEWpMR3Vq1RxNQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DialogBody"));
})(varBag.model, idService);
}
},
"j5tb3PFHK0Wdsl+ntHH5ig": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ButtonLabel_Confirm"));
})(varBag.model, idService);
}
},
"5+OGMVCJ+0uqwncUSVkDUA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ButtonLabel_Dismiss"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
