define("UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "Connect_Communication_CS.model", "UBTConnectLibrary.model", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_Email.model", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$model", "UBTConnect.ContactFlow.ContactByEmailForm.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "Connect_Communication_CS.model$UI_ContactByEmailFormRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Communication_CS", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "UBTConnect.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "UBT_Email.model$OrbitEmailInformationRec", "UBTConnect.referencesHealth$UBT_Email", "Connect2_OrbitMobile_MUI.model$AuditPayload_ContactHelpdeskRec", "UBTConnect.referencesHealth$Connect2_OrbitMobile_MUI", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ContactHelpdesk"], function (OutSystems, UBTConnectModel, Connect_Communication_CSModel, UBTConnectLibraryModel, UBT_AppManagerModel, UBT_AppManagerController, UBT_EmailModel, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel, UBTConnect_ContactFlow_ContactByEmailForm_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("ContactByEmailForm", "contactByEmailFormVar", "ContactByEmailForm", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Communication_CSModel.UI_ContactByEmailFormRec());
}, false, Connect_Communication_CSModel.UI_ContactByEmailFormRec), 
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
this.attr("In_Subject", "in_SubjectIn", "In_Subject", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_SubjectInDataFetchStatus", "_in_SubjectInDataFetchStatus", "_in_SubjectInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_MilestoneTitle", "in_MilestoneTitleIn", "In_MilestoneTitle", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_MilestoneTitleInDataFetchStatus", "_in_MilestoneTitleInDataFetchStatus", "_in_MilestoneTitleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = ((UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel.hasValidationWidgets || UBTConnect_ContactFlow_ContactByEmailForm_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_EventId" in inputs) {
this.variables.in_EventIdIn = OS.DataConversion.ServerDataConverter.from(inputs.In_EventId, OS.DataTypes.DataTypes.LongInteger);
}

if("In_MilestoneId" in inputs) {
this.variables.in_MilestoneIdIn = OS.DataConversion.ServerDataConverter.from(inputs.In_MilestoneId, OS.DataTypes.DataTypes.Text);
}

if("In_TargetMemberId" in inputs) {
this.variables.in_TargetMemberIdIn = OS.DataConversion.ServerDataConverter.from(inputs.In_TargetMemberId, OS.DataTypes.DataTypes.LongInteger);
}

if("In_Subject" in inputs) {
this.variables.in_SubjectIn = OS.DataConversion.ServerDataConverter.from(inputs.In_Subject, OS.DataTypes.DataTypes.Text);
}

if("In_MilestoneTitle" in inputs) {
this.variables.in_MilestoneTitleIn = OS.DataConversion.ServerDataConverter.from(inputs.In_MilestoneTitle, OS.DataTypes.DataTypes.Text);
}

if("In_EventName" in inputs) {
this.variables.in_EventNameIn = OS.DataConversion.ServerDataConverter.from(inputs.In_EventName, OS.DataTypes.DataTypes.Text);
}

if("In_HostName" in inputs) {
this.variables.in_HostNameIn = OS.DataConversion.ServerDataConverter.from(inputs.In_HostName, OS.DataTypes.DataTypes.Text);
}

if("In_HostEmail" in inputs) {
this.variables.in_HostEmailIn = OS.DataConversion.ServerDataConverter.from(inputs.In_HostEmail, OS.DataTypes.DataTypes.Text);
}

if("In_FormattedDateTime" in inputs) {
this.variables.in_FormattedDateTimeIn = OS.DataConversion.ServerDataConverter.from(inputs.In_FormattedDateTime, OS.DataTypes.DataTypes.Text);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "ContactFlow.ContactByEmailOrbitHelpdesk");
});
define("UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Communication_CS.model", "UBTConnectLibrary.model", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_Email.model", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc$model", "UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.ContactFlow.ContactByEmailForm.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "Connect_Communication_CS.model$UI_ContactByEmailFormRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Communication_CS", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "UBTConnect.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "UBT_Email.model$OrbitEmailInformationRec", "UBTConnect.referencesHealth$UBT_Email", "Connect2_OrbitMobile_MUI.model$AuditPayload_ContactHelpdeskRec", "UBTConnect.referencesHealth$Connect2_OrbitMobile_MUI", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ContactHelpdesk"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Communication_CSModel, UBTConnectLibraryModel, UBT_AppManagerModel, UBT_AppManagerController, UBT_EmailModel, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, React, OSView, UBTConnect_ContactFlow_ContactByEmailOrbitHelpdesk_mvc_model, UBTConnect_ContactFlow_ContactByEmailOrbitHelpdesk_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, OSWidgets, UBTConnect_ContactFlow_ContactByEmailForm_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view) {
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
        View.displayName = "ContactFlow.ContactByEmailOrbitHelpdesk";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, UBTConnect_ContactFlow_ContactByEmailForm_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_ContactFlow_ContactByEmailOrbitHelpdesk_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_ContactFlow_ContactByEmailOrbitHelpdesk_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "ContactByEmailOrbitHelpdesk";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, {
inputs: {
In_IsPrimaryColor: true,
In_AlignTitleLeft: true
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
placeholder_Header_Title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "Email",
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
placeholder_Header_Right: PlaceholderContent.Empty,
headerContent: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_ContactFlow_ContactByEmailForm_mvc_view, {
inputs: {
In_MessagePlaceholder: "Add a message",
In_SubjectPlaceholder: "Add a subject",
In_Subject: model.variables.in_SubjectIn,
IsLoading: model.variables.isLoadingVar,
In_UseDynamicTextAreaSubject: true
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_SubmitForm$Action: function (event_SubjectIn, event_MessageIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ContactFlow/ContactByEmailForm Event_SubmitForm");
return controller.handler_SubmitForm$Action(event_SubjectIn, event_MessageIn, controller.callContext(eventHandlerContext));
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
uuid: "2",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_ContactCard: new PlaceholderContent(function () {
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
}, React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("uh2Pv3ckHUqnXlT86SBM4w.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.backgroundAttr = function () {
var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral2;
return rec;
}();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.extraSmall;
return rec;
}();
rec.marginSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
return rec;
}();
return rec;
}();
}),
ExtendedClasses: "contact-by-email__header"
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
uuid: "4",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
style: "contact-by-email__header__img",
type: /*External*/ 1,
url: OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_OrbitMobile_MUI.Orbit_Logo.svg"),
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("aF09vn3M2kGvrfuxfx1nPQ.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.extraSmall;
return rec;
}();
rec.textOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.base;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.bold;
return rec;
}();
return rec;
}();
})
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
uuid: "7",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "Orbit Helpdesk",
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: []
})];
})
},
_dependencies: []
}))];
})
},
_dependencies: []
})];
}),
bottom: PlaceholderContent.Empty,
placeholder_CommonUI_Inside_Layout: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.in_SubjectIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Communication_CS.model", "UBTConnectLibrary.model", "UBT_AppManager.model", "UBT_AppManager.controller", "UBT_Email.model", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc$debugger", "UBTConnect.ContactFlow.controller", "UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc$controller.Handler_SubmitForm.ScheduleFeedbackMessageAfterTransitionJS", "Connect_Communication_CS.model$UI_ContactByEmailFormRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Communication_CS", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "UBTConnect.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "UBT_Email.model$OrbitEmailInformationRec", "UBTConnect.referencesHealth$UBT_Email", "Connect2_OrbitMobile_MUI.model$AuditPayload_ContactHelpdeskRec", "UBTConnect.referencesHealth$Connect2_OrbitMobile_MUI", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_ContactHelpdesk"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Communication_CSModel, UBTConnectLibraryModel, UBT_AppManagerModel, UBT_AppManagerController, UBT_EmailModel, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_ContactFlow_ContactByEmailOrbitHelpdesk_mvc_Debugger, _flow_UBTConnect_ContactFlowController, UBTConnect_ContactFlow_ContactByEmailOrbitHelpdesk_mvc_controller_Handler_SubmitForm_ScheduleFeedbackMessageAfterTransitionJS) {
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
return controller.callServerAction("SendContactEmail", "screenservices/UBTConnect/ContactFlow/ContactByEmailOrbitHelpdesk/ActionSendContactEmail", "1IXCj0Dy31NbV9HfVKiKYg", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk$rssespaceconnect2_orbitmobile_bl_ActionSendContactEmail"))();
executeServerActionResult.isSuccessOut = OS.DataConversion.ServerDataConverter.from(outputs.IsSuccess, OS.DataTypes.DataTypes.Boolean);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk$rssespaceconnect2_orbitmobile_bl_ActionSendContactEmail", [{
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
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:2Lj1Hspi5UGeZVDRH8AL5w:/NRWebFlows.44k9sr6oZUWsIXFdGfOLuw/NodesShownInESpaceTree.5qkeiVDgv0Oy_QrgAbOsTg/ClientActions.2Lj1Hspi5UGeZVDRH8AL5w:up0uCY8JkZGdlP4NRAcWvw", "UBTConnect", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PpX74REY4kS_qwER_hg1CQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xIIO9ze6Akaqm_ZjV7c24w", callContext.id);
// ContactByEmailForm.FirstName = ""
model.variables.contactByEmailFormVar.firstNameAttr = "";
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xIIO9ze6Akaqm_ZjV7c24w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByEmailForm.ContactMember = ""
model.variables.contactByEmailFormVar.contactMemberAttr = "";
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xIIO9ze6Akaqm_ZjV7c24w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ContactByEmailForm.EmailTo = ""
model.variables.contactByEmailFormVar.emailToAttr = "";
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xIIO9ze6Akaqm_ZjV7c24w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ContactByEmailForm.Subject = In_Subject
model.variables.contactByEmailFormVar.subjectAttr = model.variables.in_SubjectIn;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DJNp6r4QEEy4ZdoXBz0IYA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:2Lj1Hspi5UGeZVDRH8AL5w", callContext.id);
}

};
Controller.prototype._handler_SubmitForm$Action = function (event_SubjectIn, event_MessageIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_SubmitForm");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.Handler_SubmitForm$vars"))());
vars.value.event_SubjectInLocal = event_SubjectIn;
vars.value.event_MessageInLocal = event_MessageIn;
var sendContactEmailVar = new OS.DataTypes.VariableHolder();
var appManager_GetCachedUserInfoVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.sendContactEmailVar = sendContactEmailVar;
varBag.appManager_GetCachedUserInfoVar = appManager_GetCachedUserInfoVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:S_jg0kdmpUO3xqhmhIh2gQ:/NRWebFlows.44k9sr6oZUWsIXFdGfOLuw/NodesShownInESpaceTree.5qkeiVDgv0Oy_QrgAbOsTg/ClientActions.S_jg0kdmpUO3xqhmhIh2gQ:WwaIu3iMHv7JQM+arfSOfA", "UBTConnect", "Handler_SubmitForm", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:im4Jv_LxZUmLgGdEYgLEiQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WrKFoyub+kyx11fnRsIgcQ", callContext.id);
// IsLoading = True
model.variables.isLoadingVar = true;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2N3GJsBlzkivAPsgFFcqrw", callContext.id);
// ContactByEmailForm.Subject = Event_Subject
model.variables.contactByEmailFormVar.subjectAttr = vars.value.event_SubjectInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2N3GJsBlzkivAPsgFFcqrw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByEmailForm.Message = Event_Message
model.variables.contactByEmailFormVar.messageAttr = vars.value.event_MessageInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZfNAMzoJvkCUwJZ9+C8GZg", callContext.id);
// Execute Action: AppManager_GetCachedUserInfo
appManager_GetCachedUserInfoVar.value = UBT_AppManagerController.default.appManager_GetCachedUserInfo$Action(callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ise2Zs77xU6qB+3_lLhbqA", callContext.id);
// Execute Action: SendContactEmail
model.flush();
return controller.sendContactEmail$ServerAction(true, model.variables.in_EventIdIn, model.variables.in_MilestoneIdIn, model.variables.in_TargetMemberIdIn, model.variables.contactByEmailFormVar.subjectAttr, "", model.variables.contactByEmailFormVar.messageAttr, function () {
var rec = new UBT_EmailModel.OrbitEmailInformationRec();
rec.eventNameAttr = model.variables.in_EventNameIn;
rec.senderFullNameAttr = ((appManager_GetCachedUserInfoVar.value.userInformationOut.firstNameAttr + " ") + appManager_GetCachedUserInfoVar.value.userInformationOut.lastNameAttr);
rec.hostNameAttr = model.variables.in_HostNameIn;
rec.hostEmailAttr = model.variables.in_HostEmailIn;
rec.milestoneNameAttr = model.variables.in_MilestoneTitleIn;
rec.formattedDateTimeAttr = model.variables.in_FormattedDateTimeIn;
return rec;
}(), callContext).then(function (value) {
sendContactEmailVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0xna8oRBM0StxPl6PFQyiA", callContext.id);
// Execute Action: OnApplicationEvent_ContactHelpdesk
model.flush();
return Connect2_OrbitMobile_MUIController.default.onApplicationEvent_ContactHelpdesk$Action(function () {
var rec = new Connect2_OrbitMobile_MUIModel.AuditPayload_ContactHelpdeskRec();
rec.eventIdAttr = model.variables.in_EventIdIn;
rec.eventTitleAttr = model.variables.in_EventNameIn;
rec.subjectAttr = model.variables.contactByEmailFormVar.subjectAttr;
rec.messageAttr = model.variables.contactByEmailFormVar.messageAttr;
return rec;
}(), callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uaiHeKghxUmmW27HVUE7yQ", callContext.id);
controller.safeExecuteJSNode(UBTConnect_ContactFlow_ContactByEmailOrbitHelpdesk_mvc_controller_Handler_SubmitForm_ScheduleFeedbackMessageAfterTransitionJS, "ScheduleFeedbackMessageAfterTransition", "Handler_SubmitForm", {
Message: OS.DataConversion.JSNodeParamConverter.to("Your message has been sent.", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eJoXd7h1Hk+r0sB13nI5bQ", callContext.id);
// Destination: (PreviousScreen)
return OS.Flow.returnAsync(OS.Navigation.navigateBack(null, callContext, true));
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:S_jg0kdmpUO3xqhmhIh2gQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:S_jg0kdmpUO3xqhmhIh2gQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.Handler_SubmitForm$vars", [{
name: "Event_Subject",
attrName: "event_SubjectInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Event_Message",
attrName: "event_MessageInLocal",
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
Controller.prototype.handler_SubmitForm$Action = function (event_SubjectIn, event_MessageIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_SubmitForm$Action, callContext, event_SubjectIn, event_MessageIn);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:44k9sr6oZUWsIXFdGfOLuw:/NRWebFlows.44k9sr6oZUWsIXFdGfOLuw:06ULszUsjYTPVWsvtfNAow", "UBTConnect", "ContactFlow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:5qkeiVDgv0Oy_QrgAbOsTg:/NRWebFlows.44k9sr6oZUWsIXFdGfOLuw/NodesShownInESpaceTree.5qkeiVDgv0Oy_QrgAbOsTg:E4N5xD8iHEu2HX2cDkGulw", "UBTConnect", "ContactByEmailOrbitHelpdesk", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:5qkeiVDgv0Oy_QrgAbOsTg", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:44k9sr6oZUWsIXFdGfOLuw", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "ContactFlow/ContactByEmailOrbitHelpdesk On Initialize");
return controller.screenEvent_OnInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return _flow_UBTConnect_ContactFlowController.default.handleError(ex, this.callContext());
};
Controller.checkPermissions = function () {
OS.RolesInfo.checkRegistered();
};
Controller.prototype.getDefaultTimeout = function () {
return UBTConnectController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});
define("UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc$controller.Handler_SubmitForm.ScheduleFeedbackMessageAfterTransitionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.setTimeout(function() {
    $public.FeedbackMessage.showFeedbackMessage($parameters.Message, 1);
}, 500);
};
});

define("UBTConnect.ContactFlow.ContactByEmailOrbitHelpdesk.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"079DULqElES4tprQNTY3nA": {
getter: function (varBag, idService) {
return varBag.vars.value.event_SubjectInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"rB_QkyP_2k6LoyTFRqOmuA": {
getter: function (varBag, idService) {
return varBag.vars.value.event_MessageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ise2Zs77xU6qB+3_lLhbqA": {
getter: function (varBag, idService) {
return varBag.sendContactEmailVar.value;
}
},
"ZfNAMzoJvkCUwJZ9+C8GZg": {
getter: function (varBag, idService) {
return varBag.appManager_GetCachedUserInfoVar.value;
}
},
"uaiHeKghxUmmW27HVUE7yQ": {
getter: function (varBag, idService) {
return varBag.scheduleFeedbackMessageAfterTransitionJSResult.value;
}
},
"08iBVi8QVUaMb7f_fg++jQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isLoadingVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"S7zxEyZYC0ypqXZY77jNFQ": {
getter: function (varBag, idService) {
return varBag.model.variables.contactByEmailFormVar;
}
},
"AdADLb_nKESufiTv5rpjTA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"vow4V6Wbx0a258+FQe8ftA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MilestoneIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"TI9HZoFU20O8h75dG2GJuQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_TargetMemberIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"jKevMBUmoECct7X_kYv90w": {
getter: function (varBag, idService) {
return varBag.model.variables.in_SubjectIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"8vp5b4MBtkGSZMwmJYjkXg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MilestoneTitleIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"MwC5+TVIBEi4fef9Njirmw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"PfScYBF+00iQ2CBNMrCwQQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HostNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"+v9dOWZXr0u+K8sjwx4Q4Q": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HostEmailIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"VQnf9HxdBEKAENSGrM2r7Q": {
getter: function (varBag, idService) {
return varBag.model.variables.in_FormattedDateTimeIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"svcNGFZ+mEetftzYgGxR9A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Title"));
})(varBag.model, idService);
}
},
"sROLumXtpEmiL81ccbNHcg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Right"));
})(varBag.model, idService);
}
},
"2kf+QnyY40Gffn2xFG3yyA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"kbzo_oUV1UqTj4_2+jo8qA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"yJKpsTOa3E2+zD91Q15OSg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_ContactCard"));
})(varBag.model, idService);
}
},
"zLfBEObxEkqVHoX_j2OYrQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"jLWsaPIR10Cltr_AeI301g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"AY9aKYRaj0igCWRKKKlFAg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
},
"l_6NFOJdlEuzsQZtZNhH+g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
