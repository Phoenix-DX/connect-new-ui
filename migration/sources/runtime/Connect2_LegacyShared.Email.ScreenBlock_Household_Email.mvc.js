define("Connect2_LegacyShared.Email.ScreenBlock_Household_Email.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_Email.model", "Connect2_LegacyShared.controller", "OutSystemsUI_2_23.controller", "NavigationHandler.controller", "Connect2_LegacyShared.model$EmailHouseholdEventRec", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "UBT_Email.model$UserContactRequestRec", "Connect2_LegacyShared.referencesHealth$UBT_Email", "Connect2_LegacyShared.controller$zOnApplicationEvent_Wrapper", "OutSystemsUI_2_23.controller$GetNetworkStatus", "Connect2_LegacyShared.referencesHealth$OutSystemsUI_2_23", "NavigationHandler.controller$PreventNavigation", "Connect2_LegacyShared.referencesHealth$NavigationHandler"], function (OutSystems, Connect2_LegacySharedModel, UBT_AppManagerModel, UBT_AppManagerController, UBT_EmailModel, Connect2_LegacySharedController, OutSystemsUI_2_23Controller, NavigationHandlerController) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Subject", "subjectVar", "Subject", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("Message", "messageVar", "Message", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("IsChange", "isChangeVar", "IsChange", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsSending", "isSendingVar", "IsSending", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("EmailHouseholdEvent", "emailHouseholdEventVar", "EmailHouseholdEvent", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_LegacySharedModel.EmailHouseholdEventRec());
}, false, Connect2_LegacySharedModel.EmailHouseholdEventRec), 
this.attr("HeaderText", "headerTextVar", "HeaderText", true, false, OS.DataTypes.DataTypes.Text, function () {
return "Member";
}, false), 
this.attr("ShowCancelPopup", "showCancelPopupVar", "ShowCancelPopup", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsEmailSubmitted", "isEmailSubmittedVar", "IsEmailSubmitted", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("In_HouseholdFirstName", "in_HouseholdFirstNameIn", "In_HouseholdFirstName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_HouseholdFirstNameInDataFetchStatus", "_in_HouseholdFirstNameInDataFetchStatus", "_in_HouseholdFirstNameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_HouseholdFullName", "in_HouseholdFullNameIn", "In_HouseholdFullName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_HouseholdFullNameInDataFetchStatus", "_in_HouseholdFullNameInDataFetchStatus", "_in_HouseholdFullNameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("EmailTo", "emailToIn", "EmailTo", true, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, false), 
this.attr("_emailToInDataFetchStatus", "_emailToInDataFetchStatus", "_emailToInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ContactBusinessType", "contactBusinessTypeIn", "ContactBusinessType", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_contactBusinessTypeInDataFetchStatus", "_contactBusinessTypeInDataFetchStatus", "_contactBusinessTypeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("InitialEmailSubject", "initialEmailSubjectIn", "InitialEmailSubject", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_initialEmailSubjectInDataFetchStatus", "_initialEmailSubjectInDataFetchStatus", "_initialEmailSubjectInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Email_Form: OS.Model.ValidationWidgetRecord,
Email_Subject: OS.Model.ValidationWidgetRecord,
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
if("In_HouseholdFirstName" in inputs) {
this.variables.in_HouseholdFirstNameIn = inputs.In_HouseholdFirstName;
if("_in_HouseholdFirstNameInDataFetchStatus" in inputs) {
this.variables._in_HouseholdFirstNameInDataFetchStatus = inputs._in_HouseholdFirstNameInDataFetchStatus;
}

}

if("In_HouseholdFullName" in inputs) {
this.variables.in_HouseholdFullNameIn = inputs.In_HouseholdFullName;
if("_in_HouseholdFullNameInDataFetchStatus" in inputs) {
this.variables._in_HouseholdFullNameInDataFetchStatus = inputs._in_HouseholdFullNameInDataFetchStatus;
}

}

if("EmailTo" in inputs) {
this.variables.emailToIn = inputs.EmailTo;
if("_emailToInDataFetchStatus" in inputs) {
this.variables._emailToInDataFetchStatus = inputs._emailToInDataFetchStatus;
}

}

if("ContactBusinessType" in inputs) {
this.variables.contactBusinessTypeIn = inputs.ContactBusinessType;
if("_contactBusinessTypeInDataFetchStatus" in inputs) {
this.variables._contactBusinessTypeInDataFetchStatus = inputs._contactBusinessTypeInDataFetchStatus;
}

}

if("InitialEmailSubject" in inputs) {
this.variables.initialEmailSubjectIn = inputs.InitialEmailSubject;
if("_initialEmailSubjectInDataFetchStatus" in inputs) {
this.variables._initialEmailSubjectInDataFetchStatus = inputs._initialEmailSubjectInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Email.ScreenBlock_Household_Email");
});
define("Connect2_LegacyShared.Email.ScreenBlock_Household_Email.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_Email.model", "OutSystemsUI_2_23.controller", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.Email.ScreenBlock_Household_Email.mvc$model", "Connect2_LegacyShared.Email.ScreenBlock_Household_Email.mvc$controller", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.Layout.Layout.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$view", "Connect2_LegacyShared.Reusable.InputCounter.mvc$view", "OutSystemsUI_2_23.Utilities.DEPRECATED_ButtonLoading.mvc$view", "NavigationHandler.ConfirmationDialogs.NavigationConfirmationDialog.mvc$view", "Connect2_LegacyShared.model$EmailHouseholdEventRec", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "UBT_Email.model$UserContactRequestRec", "Connect2_LegacyShared.referencesHealth$UBT_Email", "Connect2_LegacyShared.controller$zOnApplicationEvent_Wrapper", "OutSystemsUI_2_23.controller$GetNetworkStatus", "Connect2_LegacyShared.referencesHealth$OutSystemsUI_2_23", "NavigationHandler.controller$PreventNavigation", "Connect2_LegacyShared.referencesHealth$NavigationHandler"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, UBT_AppManagerModel, UBT_AppManagerController, UBT_EmailModel, OutSystemsUI_2_23Controller, NavigationHandlerController, React, OSView, Connect2_LegacyShared_Email_ScreenBlock_Household_Email_mvc_model, Connect2_LegacyShared_Email_ScreenBlock_Household_Email_mvc_controller, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_Layout_Layout_mvc_view, OSWidgets, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_LegacyShared_Reusable_InputCounter_mvc_view, OutSystemsUI_2_23_Utilities_DEPRECATED_ButtonLoading_mvc_view, NavigationHandler_ConfirmationDialogs_NavigationConfirmationDialog_mvc_view) {
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
        View.displayName = "Email.ScreenBlock_Household_Email";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Layout_Layout_mvc_view, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_LegacyShared_Reusable_InputCounter_mvc_view, OutSystemsUI_2_23_Utilities_DEPRECATED_ButtonLoading_mvc_view, NavigationHandler_ConfirmationDialogs_NavigationConfirmationDialog_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_LegacyShared_Email_ScreenBlock_Household_Email_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_LegacyShared_Email_ScreenBlock_Household_Email_mvc_controller;
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
MenuAction: Connect2_LegacySharedModel.staticEntities.menuAction.back
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
value: ("Contact " + model.variables.headerTextVar),
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
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "background-neutral-0 padding-x-base padding-top-xxl",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "inline-flex-center-vertical full-width padding-x-l padding-y-base",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "envelope",
iconSize: /*Twotimes*/ 1,
style: "icon text-primary",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "margin-left-base",
value: ("To: " + model.variables.in_HouseholdFullNameIn),
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HouseholdFullNameInDataFetchStatus)
})), React.createElement(OSWidgets.Form, {
_validationProps: {
validationService: validationService
},
gridProperties: {
classes: "OSFillParent"
},
style: "form card",
_idProps: {
service: idService,
name: "Email_Form"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
mandatory: true,
targetWidget: "Email_Subject",
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Subject"), React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Email_Form")
},
enabled: true,
extendedProperties: {
autoComplete: "off"
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Email/ScreenBlock_Household_Email/Email_Subject OnChange");
controller.onChange_InputSubject$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
prompt: "Subject",
style: model.getCachedValue(idService.getId("Email_Subject.Style"), function () {
return ("form-control" + ((model.widgets.get(idService.getId("Email_Subject")).validAttr) ? ("") : (" field-error-border")));
}, function () {
return model.widgets.get(idService.getId("Email_Subject")).validAttr;
}),
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.subjectVar, function (value) {
model.variables.subjectVar = value;
}),
_idProps: {
service: idService,
name: "Email_Subject"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(Connect2_LegacyShared_Reusable_InputCounter_mvc_view, {
inputs: {
InputId: idService.getId("Email_Subject")
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Email_Form")
},
_idProps: {
service: idService,
uuid: "12",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
mandatory: true,
targetWidget: "TextArea_Message",
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Message"), React.createElement(OSWidgets.TextArea, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Email_Form")
},
enabled: true,
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Email/ScreenBlock_Household_Email/TextArea_Message OnChange");
controller.onChange_InputMessage$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
prompt: "Type message here...",
style: model.getCachedValue(idService.getId("TextArea_Message.Style"), function () {
return ("form-control textarea-message" + ((model.widgets.get(idService.getId("TextArea_Message")).validAttr) ? ("") : (" field-error-border")));
}, function () {
return model.widgets.get(idService.getId("TextArea_Message")).validAttr;
}),
textLines: 6,
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.messageVar, function (value) {
model.variables.messageVar = value;
}),
_idProps: {
service: idService,
name: "TextArea_Message"
},
_widgetRecordProvider: widgetsRecordProvider
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
validationParentId: idService.getId("Email_Form")
},
_idProps: {
service: idService,
uuid: "15",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUI_2_23_Utilities_DEPRECATED_ButtonLoading_mvc_view, {
inputs: {
IsLoading: model.variables.isSendingVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Email_Form")
},
_idProps: {
service: idService,
uuid: "17",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
isDefault: true,
onClick: function () {
_this.validateWidget(idService.getId("Email_Form"));
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Email/ScreenBlock_Household_Email/Button OnClick");
return controller.onSubmit_Email$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});

;
},
style: "btn btn-primary",
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "btn-loading margin-right-s",
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "loading-spinner",
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "btn-label",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, "send email"))];
})
},
_dependencies: []
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "backwards-compatibility",
visible: true,
_idProps: {
service: idService,
uuid: "22"
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
uuid: "23",
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
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_LegacyShared.Email.ScreenBlock_Household_Email.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_Email.model", "OutSystemsUI_2_23.controller", "NavigationHandler.controller", "Connect2_LegacyShared.languageResources", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.Email.ScreenBlock_Household_Email.mvc$debugger", "Connect2_LegacyShared.Email.ScreenBlock_Household_Email.mvc$controller.OnSubmit_Email.ScheduleFeedbackMessageAfterTransitionJS", "Connect2_LegacyShared.Email.ScreenBlock_Household_Email.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", "Connect2_LegacyShared.model$EmailHouseholdEventRec", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_LegacyShared.referencesHealth", "Connect2_LegacyShared.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "UBT_Email.model$UserContactRequestRec", "Connect2_LegacyShared.referencesHealth$UBT_Email", "Connect2_LegacyShared.controller$zOnApplicationEvent_Wrapper", "OutSystemsUI_2_23.controller$GetNetworkStatus", "Connect2_LegacyShared.referencesHealth$OutSystemsUI_2_23", "NavigationHandler.controller$PreventNavigation", "Connect2_LegacyShared.referencesHealth$NavigationHandler"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, UBT_AppManagerModel, UBT_AppManagerController, UBT_EmailModel, OutSystemsUI_2_23Controller, NavigationHandlerController, Connect2_LegacySharedLanguageResources, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_Email_ScreenBlock_Household_Email_mvc_Debugger, Connect2_LegacyShared_Email_ScreenBlock_Household_Email_mvc_controller_OnSubmit_Email_ScheduleFeedbackMessageAfterTransitionJS, Connect2_LegacyShared_Email_ScreenBlock_Household_Email_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS) {
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
Controller.prototype.userContactUser$ServerAction = function (userContactRequestIn, callContext) {
var controller = this.controller;
var inputs = {
UserContactRequest: OS.DataConversion.ServerDataConverter.to(userContactRequestIn, OS.DataTypes.DataTypes.Record)
};
return controller.callServerAction("UserContactUser", "screenservices/Connect2_LegacyShared/Email/ScreenBlock_Household_Email/ActionUserContactUser", "s_5A_GITPR837ajrqRs1RQ", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
});
};

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._onSubmit_Email$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnSubmit_Email");
callContext = controller.callContext(callContext);
var getUserInfoVar = new OS.DataTypes.VariableHolder();
var emailEventSerializeVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.getUserInfoVar = getUserInfoVar;
varBag.emailEventSerializeVar = emailEventSerializeVar;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:p2lgArzdT0GXTV27bqY5fw:/NRWebFlows.XG6gPmyVxkKApH04x20POw/NodesShownInESpaceTree.N61Gq2v+E0iUOjPEukSfzw/ClientActions.p2lgArzdT0GXTV27bqY5fw:T+P4TULlb+712xijE1j66g", "Connect2_LegacyShared", "OnSubmit_Email", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:thPDo7EqVkuFvjqMe2o5gA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:REDLBT+XEECUcRt9K5TDLQ", callContext.id) && ((OS.BuiltinFunctions.trim(model.variables.subjectVar)) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:gXMoWQ2MekyYpbUKM6ptKg", callContext.id);
// Email_Subject.Valid = True
model.widgets.get(idService.getId("Email_Subject")).validAttr = true;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:gXMoWQ2MekyYpbUKM6ptKg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Email_Subject.ValidationMessage = ""
model.widgets.get(idService.getId("Email_Subject")).validationMessageAttr = "";
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:gXMoWQ2MekyYpbUKM6ptKg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// IsChange = True
model.variables.isChangeVar = true;
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:v72Q8233zUO2eZuoYIFs5A", callContext.id);
// Email_Subject.Valid = False
model.widgets.get(idService.getId("Email_Subject")).validAttr = false;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:v72Q8233zUO2eZuoYIFs5A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Email_Subject.ValidationMessage = "Required Field!"
model.widgets.get(idService.getId("Email_Subject")).validationMessageAttr = "Required Field!";
}

if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:p6qIaNYXfUmQv0UuF1dkDA", callContext.id) && ((OS.BuiltinFunctions.trim(model.variables.messageVar)) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:I0ZND6e4ZkKH8Txo_nWCDg", callContext.id);
// TextArea_Message.Valid = True
model.widgets.get(idService.getId("TextArea_Message")).validAttr = true;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:I0ZND6e4ZkKH8Txo_nWCDg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// TextArea_Message.ValidationMessage = ""
model.widgets.get(idService.getId("TextArea_Message")).validationMessageAttr = "";
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:I0ZND6e4ZkKH8Txo_nWCDg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// IsChange = True
model.variables.isChangeVar = true;
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:quW0Y1wFl0KMXabpk6ze5Q", callContext.id);
// TextArea_Message.Valid = False
model.widgets.get(idService.getId("TextArea_Message")).validAttr = false;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:quW0Y1wFl0KMXabpk6ze5Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// TextArea_Message.ValidationMessage = "Required Field!"
model.widgets.get(idService.getId("TextArea_Message")).validationMessageAttr = "Required Field!";
}

// Both fields valid?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:BYJzXVYeGEa_4iLcpqTJPQ", callContext.id) && (((OS.BuiltinFunctions.trim(model.variables.messageVar)) !== (OS.BuiltinFunctions.nullTextIdentifier())) && ((OS.BuiltinFunctions.trim(model.variables.subjectVar)) !== (OS.BuiltinFunctions.nullTextIdentifier()))))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:VWgFvcttf0WwZ5yat_G3gQ", callContext.id);
// IsSending = True
model.variables.isSendingVar = true;
// IsOnline
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:6EoOaCPZJkC0cWo2g_U3gg", callContext.id) && OutSystemsDebugger.handleFunctionCall(function () {
return OutSystemsUI_2_23Controller.default.getNetworkStatus$Action(callContext).isOnlineOut;
}, OS.DataTypes.DataTypes.Boolean, callContext.id))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:z4u3arJP90OAwtZgQNooCQ", callContext.id);
// Execute Action: OnChange_InputSubject
controller._onChange_InputSubject$Action(callContext);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:L3YPziXoHE+vvLjyuOPZhw", callContext.id);
// Execute Action: OnChange_InputMessage
controller._onChange_InputMessage$Action(callContext);
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:xDdcxooM5EWA6hBYxWvqjg", callContext.id) && model.widgets.get(idService.getId("Email_Form")).validAttr)) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:5CWqUqKo8kuzNxJ1iBvzTg", callContext.id);
// IsChange = False
model.variables.isChangeVar = false;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Bj_HcdiHNEKE22kmvXhT+w", callContext.id);
// Execute Action: GetUserInfo
getUserInfoVar.value = UBT_AppManagerController.default.appManager_GetCachedUserInfo$Action(callContext);

OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:J5YjnI_kKkava88Hp7Qtpg", callContext.id);
// Execute Action: UserDirectContactForm
model.flush();
return controller.userContactUser$ServerAction(function () {
var rec = new UBT_EmailModel.UserContactRequestRec();
rec.emailToAttr = model.variables.emailToIn;
rec.contactMemberAttr = model.variables.in_HouseholdFirstNameIn;
rec.firstNameSenderAttr = getUserInfoVar.value.userInformationOut.firstNameAttr;
rec.lastNameSenderAttr = getUserInfoVar.value.userInformationOut.lastNameAttr;
rec.subjectAttr = model.variables.subjectVar;
rec.messageAttr = model.variables.messageVar;
rec.firstNameAttr = model.variables.in_HouseholdFirstNameIn;
rec.emailFromAttr = getUserInfoVar.value.userInformationOut.emailAttr;
rec.senderLocalityAttr = getUserInfoVar.value.userInformationOut.localityAttr;
rec.senderCountryAttr = getUserInfoVar.value.userInformationOut.countryAttr;
return rec;
}(), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:3qaSCxj9pEuilM3bwly1Gg", callContext.id);
// Trigger Event: EmailSubmitted
return controller.emailSubmitted$Action(callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:acoXZTzKHU6BXXXwEqhUGA", callContext.id);
// EmailHouseholdEvent.EmailTo = EmailTo
model.variables.emailHouseholdEventVar.emailToAttr = model.variables.emailToIn;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:acoXZTzKHU6BXXXwEqhUGA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// EmailHouseholdEvent.NameOfSender = GetUserInfo.UserInformation.LastName + ", " + GetUserInfo.UserInformation.FirstName
model.variables.emailHouseholdEventVar.nameOfSenderAttr = ((getUserInfoVar.value.userInformationOut.lastNameAttr + ", ") + getUserInfoVar.value.userInformationOut.firstNameAttr);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:WVTy15gZYEyw_j20epCtBQ", callContext.id);
// JSON Serialize: EmailEventSerialize
emailEventSerializeVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.emailHouseholdEventVar, false, false);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:3BedzyyjMUOO0kVYqThLZg", callContext.id);
// Execute Action: zOnApplicationEvent_Wrapper2
model.flush();
return Connect2_LegacySharedController.default.zOnApplicationEvent_Wrapper$Action(Connect2_LegacySharedModel.staticEntities.applicationEvents_Directory.emailHousehold, emailEventSerializeVar.value.jSONOut, callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:CpH4JxFoIkKVnC+qT0aBfw", callContext.id);
controller.safeExecuteJSNode(Connect2_LegacyShared_Email_ScreenBlock_Household_Email_mvc_controller_OnSubmit_Email_ScheduleFeedbackMessageAfterTransitionJS, "ScheduleFeedbackMessageAfterTransition", "OnSubmit_Email", {
Message: OS.DataConversion.JSNodeParamConverter.to("Your message has been sent.", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:RYeGhvOjpEaKvoItXWwEow", callContext.id);
// IsSending = False
model.variables.isSendingVar = false;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:P26VvwqvEEGN5+nqlSV_RQ", callContext.id);
// IsEmailSubmitted = True
model.variables.isEmailSubmittedVar = true;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:2mAOvLhhA0+alx2buf5G5g", callContext.id);
// Destination: (PreviousScreen)
return OS.Flow.returnAsync(OS.Navigation.navigateBack(null, callContext, true));
});
} else {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:xyEBRyoqOEKQFuYj71megA", callContext.id) && (OS.BuiltinFunctions.trim(model.variables.subjectVar) === OS.BuiltinFunctions.nullTextIdentifier()))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:eT5Fh6FBp0GPvr96z5Rsqw", callContext.id);
// Subject = ""
model.variables.subjectVar = "";
}

if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:mJ6X11w3Ak+o1WOqxJM_PA", callContext.id) && (OS.BuiltinFunctions.trim(model.variables.messageVar) === OS.BuiltinFunctions.nullTextIdentifier()))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:bbJrl_RHiEaeIZuXQQoi7g", callContext.id);
// Message = ""
model.variables.messageVar = "";
}

OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:S+u1jaLPFUSaFrJN8iFPXQ", callContext.id);
// IsSending = False
model.variables.isSendingVar = false;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Dp2uO2okPkK2afIwLh_vzQ", callContext.id);
}

});
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:0VELgTyhcECyCXjQSTWs9A", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("You cannot send emails without a network connection.", /*Error*/ 3);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:OE19XKWruUaF1y4cVY0_PA", callContext.id);
// IsSending = False
model.variables.isSendingVar = false;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Wrn8Vug4_kKDQkWEZJJ+Vw", callContext.id);
}

});
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:RQzKjU_kvkejSN3LGLqMUQ", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:p2lgArzdT0GXTV27bqY5fw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:p2lgArzdT0GXTV27bqY5fw", callContext.id);
throw ex;

});
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
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.Email.ScreenBlock_Household_Email.NavigationHandlerNavigation$vars"))());
vars.value.navigationEventInLocal = navigationEventIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:Qh_WNIPKNEW7TE_qQTm_WQ:/NRWebFlows.XG6gPmyVxkKApH04x20POw/NodesShownInESpaceTree.N61Gq2v+E0iUOjPEukSfzw/ClientActions.Qh_WNIPKNEW7TE_qQTm_WQ:b1RfqW5OpIdZaMjOEQcEMg", "Connect2_LegacyShared", "NavigationHandlerNavigation", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Bc1lReouO0uqQFM5a7EiAA", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:F_DsOrfHPkCOXAjiiyp8OA", callContext.id) && model.variables.isChangeVar)) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Cc_YO0Z4PU2OHc11LvFFZg", callContext.id);
// Execute Action: PreventNavigation
NavigationHandlerController.default.preventNavigation$Action(vars.value.navigationEventInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:3Ly4VpdACU6s86QSrlhWtw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:2Oya3v9W_0iyzwuYXfR7Bg", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:Qh_WNIPKNEW7TE_qQTm_WQ", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_LegacyShared.Email.ScreenBlock_Household_Email.NavigationHandlerNavigation$vars", [{
name: "NavigationEvent",
attrName: "navigationEventInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
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
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:b211RuskmUOtZcPlBliCZQ:/NRWebFlows.XG6gPmyVxkKApH04x20POw/NodesShownInESpaceTree.N61Gq2v+E0iUOjPEukSfzw/ClientActions.b211RuskmUOtZcPlBliCZQ:S8s9hSOAjPYxsJMMMhb2zg", "Connect2_LegacyShared", "OnChange_InputSubject", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:6RzfVT+Prk6n+Wvifx77hQ", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:MdeA_rJukUiB_Dx3QLUnTg", callContext.id) && ((OS.BuiltinFunctions.trim(model.variables.subjectVar)) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:JatRrheNfEi9YMJ625ozxg", callContext.id);
// Email_Subject.Valid = True
model.widgets.get(idService.getId("Email_Subject")).validAttr = true;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:JatRrheNfEi9YMJ625ozxg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Email_Subject.ValidationMessage = ""
model.widgets.get(idService.getId("Email_Subject")).validationMessageAttr = "";
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:JatRrheNfEi9YMJ625ozxg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// IsChange = True
model.variables.isChangeVar = true;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:FPXkUyf6yE6qpfCDKKUaOA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:DjGr64VtDEa2fdAqb+LO0g", callContext.id);
// IsChange = False
model.variables.isChangeVar = false;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:FPXkUyf6yE6qpfCDKKUaOA", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:b211RuskmUOtZcPlBliCZQ", callContext.id);
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
var wasCurrentViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.wasCurrentViewRestoredFromCacheJSResult = wasCurrentViewRestoredFromCacheJSResult;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:89hahznCf0yEDBN_fbkUfw:/NRWebFlows.XG6gPmyVxkKApH04x20POw/NodesShownInESpaceTree.N61Gq2v+E0iUOjPEukSfzw/ClientActions.89hahznCf0yEDBN_fbkUfw:vhlLGnw9i1Wtb6PnwwNdFg", "Connect2_LegacyShared", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:aH_sUSnkBESNTLoZn3RtmA", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:zuq+KxGAR0ajbVqyoAxzuw", callContext.id);
wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_LegacyShared_Email_ScreenBlock_Household_Email_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnReady", {
FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_LegacyShared.Email.ScreenBlock_Household_Email.OnReady$wasCurrentViewRestoredFromCacheJSResult"))();
jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:JJq9OTZpbkS1vlEWVBc8iA", callContext.id) && wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut)) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Fptf7uXQ4kKkaeDQLgTsow", callContext.id);
// ShowCancelPopup = False
model.variables.showCancelPopupVar = false;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Fptf7uXQ4kKkaeDQLgTsow", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Subject = ""
model.variables.subjectVar = "";
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Fptf7uXQ4kKkaeDQLgTsow", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Message = ""
model.variables.messageVar = "";
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Fptf7uXQ4kKkaeDQLgTsow", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// IsChange = False
model.variables.isChangeVar = false;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:zlsuJhv6K0+pieeqwickPQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:zlsuJhv6K0+pieeqwickPQ", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:89hahznCf0yEDBN_fbkUfw", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_LegacyShared.Email.ScreenBlock_Household_Email.OnReady$wasCurrentViewRestoredFromCacheJSResult", [{
name: "FromCache",
attrName: "fromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._onChange_InputMessage$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnChange_InputMessage");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:2kfrqT8YvUiXwTan_OstVw:/NRWebFlows.XG6gPmyVxkKApH04x20POw/NodesShownInESpaceTree.N61Gq2v+E0iUOjPEukSfzw/ClientActions.2kfrqT8YvUiXwTan_OstVw:PUL3dhvRpkqKDLZH99CmVg", "Connect2_LegacyShared", "OnChange_InputMessage", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:R2WNnVzGH0iM39dZZcvj5A", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:4P7kIs1oxUGgD2xZvuSArg", callContext.id) && ((OS.BuiltinFunctions.trim(model.variables.messageVar)) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:l8hKmnKYeEyaGapsysG1QA", callContext.id);
// TextArea_Message.Valid = True
model.widgets.get(idService.getId("TextArea_Message")).validAttr = true;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:l8hKmnKYeEyaGapsysG1QA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// TextArea_Message.ValidationMessage = ""
model.widgets.get(idService.getId("TextArea_Message")).validationMessageAttr = "";
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:l8hKmnKYeEyaGapsysG1QA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// IsChange = True
model.variables.isChangeVar = true;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:3Ff8yq7ey0CXPfvy9U4iUA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:z8wnp+ok0EKcFQh9kQSETQ", callContext.id);
// IsChange = False
model.variables.isChangeVar = false;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:3Ff8yq7ey0CXPfvy9U4iUA", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:2kfrqT8YvUiXwTan_OstVw", callContext.id);
}

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
varBag.callContext = callContext;
try {OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:n3j_y8wklE6jJMzK9soSzQ:/NRWebFlows.XG6gPmyVxkKApH04x20POw/NodesShownInESpaceTree.N61Gq2v+E0iUOjPEukSfzw/ClientActions.n3j_y8wklE6jJMzK9soSzQ:II8wAV400VgrfeVnh8fmDQ", "Connect2_LegacyShared", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:6uoT3hr980WLtyl8CW22NQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:PS5BTuIz6EOh2ALJiMPEVA", callContext.id);
// IsSending = False
model.variables.isSendingVar = false;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:PS5BTuIz6EOh2ALJiMPEVA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Subject = InitialEmailSubject
model.variables.subjectVar = model.variables.initialEmailSubjectIn;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:PS5BTuIz6EOh2ALJiMPEVA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Message = ""
model.variables.messageVar = "";
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:mWT5Tn8gxkmwf7mW1awENQ", callContext.id) && ((model.variables.contactBusinessTypeIn) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:TLOtH22NaUeGrUST+nXrTg", callContext.id) && (model.variables.contactBusinessTypeIn === Connect2_LegacySharedModel.staticEntities.communityBusinessType.oneSchoolGlobal))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:IXps+7STpkaLBsAFNI_inQ", callContext.id);
// HeaderText = "School"
model.variables.headerTextVar = "School";
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:WK2XvdBxaUSQ3oYK+ZQD7g", callContext.id);
} else {
if((model.variables.contactBusinessTypeIn === Connect2_LegacySharedModel.staticEntities.communityBusinessType.campusCo)) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:ydQg3vMIZ0WW9cDifEL5dQ", callContext.id);
// HeaderText = "Store"
model.variables.headerTextVar = "Store";
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:WK2XvdBxaUSQ3oYK+ZQD7g", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:WK2XvdBxaUSQ3oYK+ZQD7g", callContext.id);
}

}

} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:+htHSO8OAEe3HooPpznowg", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:n3j_y8wklE6jJMzK9soSzQ", callContext.id);
}

};

Controller.prototype.onSubmit_Email$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onSubmit_Email$Action, callContext);

};
Controller.prototype.navigationHandlerNavigation$Action = function (navigationEventIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._navigationHandlerNavigation$Action, callContext, navigationEventIn);

};
Controller.prototype.onChange_InputSubject$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onChange_InputSubject$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onChange_InputMessage$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onChange_InputMessage$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.emailSubmitted$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:XG6gPmyVxkKApH04x20POw:/NRWebFlows.XG6gPmyVxkKApH04x20POw:PrVB4BmbOp5wX3AJ6sR7Eg", "Connect2_LegacyShared", "Email", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:N61Gq2v+E0iUOjPEukSfzw:/NRWebFlows.XG6gPmyVxkKApH04x20POw/NodesShownInESpaceTree.N61Gq2v+E0iUOjPEukSfzw:etgjZge8SgkBwwop4d3Rsw", "Connect2_LegacyShared", "ScreenBlock_Household_Email", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:N61Gq2v+E0iUOjPEukSfzw", callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:XG6gPmyVxkKApH04x20POw", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Email/ScreenBlock_Household_Email On Initialize");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Email/ScreenBlock_Household_Email On Ready");
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
return Connect2_LegacySharedController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, Connect2_LegacySharedLanguageResources);
});
define("Connect2_LegacyShared.Email.ScreenBlock_Household_Email.mvc$controller.OnSubmit_Email.ScheduleFeedbackMessageAfterTransitionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.setTimeout(function() {
    $public.FeedbackMessage.showFeedbackMessage($parameters.Message, 1);
}, 500);
};
});
define("Connect2_LegacyShared.Email.ScreenBlock_Household_Email.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
};
});

define("Connect2_LegacyShared.Email.ScreenBlock_Household_Email.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"Bj_HcdiHNEKE22kmvXhT+w": {
getter: function (varBag, idService) {
return varBag.getUserInfoVar.value;
}
},
"WVTy15gZYEyw_j20epCtBQ": {
getter: function (varBag, idService) {
return varBag.emailEventSerializeVar.value;
}
},
"CpH4JxFoIkKVnC+qT0aBfw": {
getter: function (varBag, idService) {
return varBag.scheduleFeedbackMessageAfterTransitionJSResult.value;
}
},
"ECNCoK_85kaM_1jojZnYFQ": {
getter: function (varBag, idService) {
return varBag.vars.value.navigationEventInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"zuq+KxGAR0ajbVqyoAxzuw": {
getter: function (varBag, idService) {
return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
}
},
"EUICyXwkzESK3R3WAKL6sw": {
getter: function (varBag, idService) {
return varBag.model.variables.subjectVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"DRwUCK0v9kqciE5PHeoNoQ": {
getter: function (varBag, idService) {
return varBag.model.variables.messageVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"OEVlzoj4+kGuEwZQ2VU1zg": {
getter: function (varBag, idService) {
return varBag.model.variables.isChangeVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"HMGjF6rgx0+g2EWcvvz0Ig": {
getter: function (varBag, idService) {
return varBag.model.variables.isSendingVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"edCsRm0UvECz8Yg2ds00WA": {
getter: function (varBag, idService) {
return varBag.model.variables.emailHouseholdEventVar;
}
},
"l_h0rCko1EqzAcLXOXhDGA": {
getter: function (varBag, idService) {
return varBag.model.variables.headerTextVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"AeHqwbFW_k27Iul58sPaPw": {
getter: function (varBag, idService) {
return varBag.model.variables.showCancelPopupVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"HzYV4HOGt0Kr7o3bKUL8oQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isEmailSubmittedVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"y8wTmm2a9UCeA3SFJkxesQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HouseholdFirstNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"F1_e9J1Cz0S8CjLCyLYq9g": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HouseholdFullNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"BwRRwCyc70ehBINV7RutEQ": {
getter: function (varBag, idService) {
return varBag.model.variables.emailToIn;
},
dataType: OS.DataTypes.DataTypes.Email
},
"fYnhw88YUUG7YHwlUrsKpw": {
getter: function (varBag, idService) {
return varBag.model.variables.contactBusinessTypeIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"s5HJgsavEk+I23jyPhSULQ": {
getter: function (varBag, idService) {
return varBag.model.variables.initialEmailSubjectIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"sblp0Szts0iLsKqbZehVqA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"lm1G49ZCtEGwd7JSX8DSHQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"FDgN7wT04UOBR6GuQSSSwA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderLeft"));
})(varBag.model, idService);
}
},
"ie8sTecaN0y6h5e5aP6pLA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"2uQUlIRZv02i69UeREp8sA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderRight"));
})(varBag.model, idService);
}
},
"SndK_5ywVkySeInWv4fsXA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"ivJja8hTyEiro08c5q8RKQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"Y0i+a7oV5UK36V_RuF2tBQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Email_Form"));
})(varBag.model, idService);
}
},
"_4X7e6+jvUywSWqh4xWjQA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Email_Subject"));
})(varBag.model, idService);
}
},
"SaR2upcIuEuQsjQzypiCCg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TextArea_Message"));
})(varBag.model, idService);
}
},
"5L7j9Ix6rE6iZcTjIoIaPg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Button"));
})(varBag.model, idService);
}
},
"FJ7qGgZGUUWF0OqOaOysLw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DialogHeader"));
})(varBag.model, idService);
}
},
"YxAaavSGaU+QlIP3yblJqA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DialogBody"));
})(varBag.model, idService);
}
},
"7npz14gEwkO5fGHSvC46KQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ButtonLabel_Confirm"));
})(varBag.model, idService);
}
},
"mzEVbwdDT0yZ6LicZxav8A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ButtonLabel_Dismiss"));
})(varBag.model, idService);
}
},
"maBTr_KM2kqIULQyqtBBmQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomBar"));
})(varBag.model, idService);
}
},
"vx9eX4BfvEmXfw+gQOpctQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomBar"));
})(varBag.model, idService);
}
},
"gG01LK78DkCo5er896ggig": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
},
"68FobqhneU+KBZ1LEsLG7Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
