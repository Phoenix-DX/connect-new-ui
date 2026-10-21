define("UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "Connect_Communication_CS.model", "Connect2_OrbitMobile_MUI.model", "UBTConnectLibrary.model", "Connect2_OrbitMobile_MUI.controller", "UBT_AppManager.model", "UBT_AppManager.controller", "Connect2_LegacyShared.controller", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$model", "UBTConnect.ContactFlow.ContactByEmailForm.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "Connect_Communication_CS.model$UI_ContactByEmailFormRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Communication_CS", "Connect2_OrbitMobile_MUI.model$EmailHouseholdEventRec", "UBTConnect.referencesHealth$Connect2_OrbitMobile_MUI", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "Connect2_OrbitMobile_MUI.controller$AddAuditEventDetailEvent", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "UBTConnect.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "Connect2_LegacyShared.controller$zOnApplicationEvent_Wrapper", "UBTConnect.referencesHealth$Connect2_LegacyShared"], function (OutSystems, UBTConnectModel, Connect_Communication_CSModel, Connect2_OrbitMobile_MUIModel, UBTConnectLibraryModel, Connect2_OrbitMobile_MUIController, UBT_AppManagerModel, UBT_AppManagerController, Connect2_LegacySharedController, UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel, UBTConnect_ContactFlow_ContactByEmailForm_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel) {
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
this.attr("EmailEvent", "emailEventVar", "EmailEvent", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.EmailHouseholdEventRec());
}, false, Connect2_OrbitMobile_MUIModel.EmailHouseholdEventRec), 
this.attr("In_AvatarURL", "in_AvatarURLIn", "In_AvatarURL", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_AvatarURLInDataFetchStatus", "_in_AvatarURLInDataFetchStatus", "_in_AvatarURLInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ContactName", "in_ContactNameIn", "In_ContactName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_ContactNameInDataFetchStatus", "_in_ContactNameInDataFetchStatus", "_in_ContactNameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_EmailTo", "in_EmailToIn", "In_EmailTo", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_EmailToInDataFetchStatus", "_in_EmailToInDataFetchStatus", "_in_EmailToInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_Subject", "in_SubjectIn", "In_Subject", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_SubjectInDataFetchStatus", "_in_SubjectInDataFetchStatus", "_in_SubjectInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_EventDate", "in_EventDateIn", "In_EventDate", true, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, false), 
this.attr("_in_EventDateInDataFetchStatus", "_in_EventDateInDataFetchStatus", "_in_EventDateInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_EventLocality", "in_EventLocalityIn", "In_EventLocality", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_EventLocalityInDataFetchStatus", "_in_EventLocalityInDataFetchStatus", "_in_EventLocalityInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("In_AvatarURL" in inputs) {
this.variables.in_AvatarURLIn = OS.DataConversion.ServerDataConverter.from(inputs.In_AvatarURL, OS.DataTypes.DataTypes.Text);
}

if("In_ContactName" in inputs) {
this.variables.in_ContactNameIn = OS.DataConversion.ServerDataConverter.from(inputs.In_ContactName, OS.DataTypes.DataTypes.Text);
}

if("In_EmailTo" in inputs) {
this.variables.in_EmailToIn = OS.DataConversion.ServerDataConverter.from(inputs.In_EmailTo, OS.DataTypes.DataTypes.Text);
}

if("In_Subject" in inputs) {
this.variables.in_SubjectIn = OS.DataConversion.ServerDataConverter.from(inputs.In_Subject, OS.DataTypes.DataTypes.Text);
}

if("In_EventDate" in inputs) {
this.variables.in_EventDateIn = OS.DataConversion.ServerDataConverter.from(inputs.In_EventDate, OS.DataTypes.DataTypes.Date);
}

if("In_EventLocality" in inputs) {
this.variables.in_EventLocalityIn = OS.DataConversion.ServerDataConverter.from(inputs.In_EventLocality, OS.DataTypes.DataTypes.Text);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "ContactFlow.ContactByEmailLDMCoordinator");
});
define("UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Communication_CS.model", "Connect2_OrbitMobile_MUI.model", "UBTConnectLibrary.model", "Connect2_OrbitMobile_MUI.controller", "UBT_AppManager.model", "UBT_AppManager.controller", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc$model", "UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.ContactFlow.ContactByEmailForm.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "Connect_Communication_CS.model$UI_ContactByEmailFormRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Communication_CS", "Connect2_OrbitMobile_MUI.model$EmailHouseholdEventRec", "UBTConnect.referencesHealth$Connect2_OrbitMobile_MUI", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "Connect2_OrbitMobile_MUI.controller$AddAuditEventDetailEvent", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "UBTConnect.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "Connect2_LegacyShared.controller$zOnApplicationEvent_Wrapper", "UBTConnect.referencesHealth$Connect2_LegacyShared"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Communication_CSModel, Connect2_OrbitMobile_MUIModel, UBTConnectLibraryModel, Connect2_OrbitMobile_MUIController, UBT_AppManagerModel, UBT_AppManagerController, Connect2_LegacySharedController, React, OSView, UBTConnect_ContactFlow_ContactByEmailLDMCoordinator_mvc_model, UBTConnect_ContactFlow_ContactByEmailLDMCoordinator_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, OSWidgets, UBTConnect_ContactFlow_ContactByEmailForm_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view) {
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
        View.displayName = "ContactFlow.ContactByEmailLDMCoordinator";
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
                return UBTConnect_ContactFlow_ContactByEmailLDMCoordinator_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_ContactFlow_ContactByEmailLDMCoordinator_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "ContactByEmailLDMCoordinator";
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
IsLoading: model.variables.isLoadingVar
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
Options: model.getCachedValue(idService.getId("9JiHnv+sfUWdlj2F+TCg6g.Options"), function () {
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
return [$if(false, false, this, function () {
return [];
}, function () {
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
url: model.variables.in_AvatarURLIn,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("X4NpTtTg6EWI4qSMuKrDug.Options"), function () {
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
value: model.variables.in_ContactNameIn,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_ContactNameIn)]
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("2IsShxqyOUKNvxIFSB9QSQ.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.extraSmall;
return rec;
}();
rec.textOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral7;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.extraSmall;
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
uuid: "9",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "LDM Event Coordinator",
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_ContactNameIn), asPrimitiveValue(model.variables.in_AvatarURLIn)]
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_ContactNameIn), asPrimitiveValue(model.variables.in_AvatarURLIn)]
})];
}),
bottom: PlaceholderContent.Empty,
placeholder_CommonUI_Inside_Layout: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.in_ContactNameIn), asPrimitiveValue(model.variables.in_AvatarURLIn), asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.in_SubjectIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Communication_CS.model", "Connect2_OrbitMobile_MUI.model", "UBTConnectLibrary.model", "Connect2_OrbitMobile_MUI.controller", "UBT_AppManager.model", "UBT_AppManager.controller", "Connect2_LegacyShared.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc$debugger", "UBTConnect.ContactFlow.controller", "UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc$controller.Handler_SubmitForm.ScheduleFeedbackMessageAfterTransitionJS", "Connect_Communication_CS.model$UI_ContactByEmailFormRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Communication_CS", "Connect2_OrbitMobile_MUI.model$EmailHouseholdEventRec", "UBTConnect.referencesHealth$Connect2_OrbitMobile_MUI", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "Connect2_OrbitMobile_MUI.controller$AddAuditEventDetailEvent", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "UBTConnect.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "Connect2_LegacyShared.controller$zOnApplicationEvent_Wrapper", "UBTConnect.referencesHealth$Connect2_LegacyShared"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Communication_CSModel, Connect2_OrbitMobile_MUIModel, UBTConnectLibraryModel, Connect2_OrbitMobile_MUIController, UBT_AppManagerModel, UBT_AppManagerController, Connect2_LegacySharedController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_ContactFlow_ContactByEmailLDMCoordinator_mvc_Debugger, _flow_UBTConnect_ContactFlowController, UBTConnect_ContactFlow_ContactByEmailLDMCoordinator_mvc_controller_Handler_SubmitForm_ScheduleFeedbackMessageAfterTransitionJS) {
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
Controller.prototype.sendContactLDMCoordinatorEmail$ServerAction = function (in_UI_ContactByEmailFormIn, callContext) {
var controller = this.controller;
var inputs = {
In_UI_ContactByEmailForm: OS.DataConversion.ServerDataConverter.to(in_UI_ContactByEmailFormIn, OS.DataTypes.DataTypes.Record)
};
return controller.callServerAction("SendContactLDMCoordinatorEmail", "screenservices/UBTConnect/ContactFlow/ContactByEmailLDMCoordinator/ServiceAPISendContactLDMCoordinatorEmail", "ud8PxXDINL064p3sf+bHqQ", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
});
};

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
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:C58W4Ii910y5OoV8lQvzsg:/NRWebFlows.44k9sr6oZUWsIXFdGfOLuw/NodesShownInESpaceTree.8YDxAdm880KdnakXLAltow/ClientActions.C58W4Ii910y5OoV8lQvzsg:aMGT3CUUBXIXq2Qv0nkkLA", "UBTConnect", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:l8CpZQzHxU26pIJ0EJOSnQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cDQwxPMpTk++nZP6UiuNUw", callContext.id);
// ContactByEmailForm.FirstName = In_ContactName
model.variables.contactByEmailFormVar.firstNameAttr = model.variables.in_ContactNameIn;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cDQwxPMpTk++nZP6UiuNUw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByEmailForm.ContactMember = In_ContactName
model.variables.contactByEmailFormVar.contactMemberAttr = model.variables.in_ContactNameIn;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cDQwxPMpTk++nZP6UiuNUw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ContactByEmailForm.EmailTo = In_EmailTo
model.variables.contactByEmailFormVar.emailToAttr = model.variables.in_EmailToIn;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cDQwxPMpTk++nZP6UiuNUw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ContactByEmailForm.Subject = In_Subject
model.variables.contactByEmailFormVar.subjectAttr = model.variables.in_SubjectIn;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AaVz+SoaMkybdliC51Oimg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:C58W4Ii910y5OoV8lQvzsg", callContext.id);
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
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.Handler_SubmitForm$vars"))());
vars.value.event_SubjectInLocal = event_SubjectIn;
vars.value.event_MessageInLocal = event_MessageIn;
var appManager_GetCachedUserInfoVar = new OS.DataTypes.VariableHolder();
var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.appManager_GetCachedUserInfoVar = appManager_GetCachedUserInfoVar;
varBag.jSONSerialize1Var = jSONSerialize1Var;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:pxLE6fpB5UOkAI_GoXwACA:/NRWebFlows.44k9sr6oZUWsIXFdGfOLuw/NodesShownInESpaceTree.8YDxAdm880KdnakXLAltow/ClientActions.pxLE6fpB5UOkAI_GoXwACA:yJVvGDZ7e8lbjRypD4t0uQ", "UBTConnect", "Handler_SubmitForm", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vzmd3fQhFkmt8xQYgfdcaA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Sg5ttqdZO0mrk21N4QSQhw", callContext.id);
// IsLoading = True
model.variables.isLoadingVar = true;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kD5jN2oQbk6pYkYZg0yagQ", callContext.id);
// ContactByEmailForm.Subject = Event_Subject
model.variables.contactByEmailFormVar.subjectAttr = vars.value.event_SubjectInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kD5jN2oQbk6pYkYZg0yagQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByEmailForm.Message = Event_Message
model.variables.contactByEmailFormVar.messageAttr = vars.value.event_MessageInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5o1y2pS490KuEImznJeOYA", callContext.id);
// Execute Action: SendContactLDMCoordinatorEmail
model.flush();
return controller.sendContactLDMCoordinatorEmail$ServerAction(model.variables.contactByEmailFormVar, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:b+kTp8o3REGwVolzNNykRA", callContext.id);
// Execute Action: AppManager_GetCachedUserInfo
appManager_GetCachedUserInfoVar.value = UBT_AppManagerController.default.appManager_GetCachedUserInfo$Action(callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:y8IzGuGOzECfHJk+puznyA", callContext.id);
// EmailEvent.EmailTo = ContactByEmailForm.EmailTo
model.variables.emailEventVar.emailToAttr = model.variables.contactByEmailFormVar.emailToAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:y8IzGuGOzECfHJk+puznyA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// EmailEvent.NameOfSender = AppManager_GetCachedUserInfo.UserInformation.LastName + ", " + AppManager_GetCachedUserInfo.UserInformation.FirstName
model.variables.emailEventVar.nameOfSenderAttr = ((appManager_GetCachedUserInfoVar.value.userInformationOut.lastNameAttr + ", ") + appManager_GetCachedUserInfoVar.value.userInformationOut.firstNameAttr);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:shdbXqTNskmwiJIr++gqGg", callContext.id);
// Execute Action: AddAuditEventDetailEvent
model.flush();
return Connect2_OrbitMobile_MUIController.default.addAuditEventDetailEvent$Action(UBTConnectModel.staticEntities.lDMApplicationEvent.myTimelineCoordinatorEmailed, OS.DataTypes.LongInteger.defaultValue, "", model.variables.in_EventDateIn, model.variables.in_EventLocalityIn, callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:J_EhgeL8BkCx+ry1F2GbYA", callContext.id);
// JSON Serialize: JSONSerialize1
jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.emailEventVar, false, false);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IgDarCm+LUue1jd4hR_bVw", callContext.id);
// Execute Action: zOnApplicationEvent_Wrapper
model.flush();
return Connect2_LegacySharedController.default.zOnApplicationEvent_Wrapper$Action(UBTConnectModel.staticEntities.lDMApplicationEvent.myTimelineCoordinatorEmailed, jSONSerialize1Var.value.jSONOut, callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:M5tyGaoMN0qCeLW+FOy60A", callContext.id);
controller.safeExecuteJSNode(UBTConnect_ContactFlow_ContactByEmailLDMCoordinator_mvc_controller_Handler_SubmitForm_ScheduleFeedbackMessageAfterTransitionJS, "ScheduleFeedbackMessageAfterTransition", "Handler_SubmitForm", {
Message: OS.DataConversion.JSNodeParamConverter.to("Your message has been sent.", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NlcKdZXlIkmEs9BxAb7D4Q", callContext.id);
// Destination: (PreviousScreen)
return OS.Flow.returnAsync(OS.Navigation.navigateBack(null, callContext, true));
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:pxLE6fpB5UOkAI_GoXwACA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:pxLE6fpB5UOkAI_GoXwACA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.Handler_SubmitForm$vars", [{
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
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:8YDxAdm880KdnakXLAltow:/NRWebFlows.44k9sr6oZUWsIXFdGfOLuw/NodesShownInESpaceTree.8YDxAdm880KdnakXLAltow:j9i1KVxoIkTLEV9z0Ndx3Q", "UBTConnect", "ContactByEmailLDMCoordinator", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:8YDxAdm880KdnakXLAltow", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:44k9sr6oZUWsIXFdGfOLuw", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "ContactFlow/ContactByEmailLDMCoordinator On Initialize");
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
define("UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc$controller.Handler_SubmitForm.ScheduleFeedbackMessageAfterTransitionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.setTimeout(function() {
    $public.FeedbackMessage.showFeedbackMessage($parameters.Message, 1);
}, 500);
};
});

define("UBTConnect.ContactFlow.ContactByEmailLDMCoordinator.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"nmLiT096AkqQnN3DXpa33A": {
getter: function (varBag, idService) {
return varBag.vars.value.event_SubjectInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"05RlGBQZqUKrAo4rnUP7QA": {
getter: function (varBag, idService) {
return varBag.vars.value.event_MessageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"b+kTp8o3REGwVolzNNykRA": {
getter: function (varBag, idService) {
return varBag.appManager_GetCachedUserInfoVar.value;
}
},
"J_EhgeL8BkCx+ry1F2GbYA": {
getter: function (varBag, idService) {
return varBag.jSONSerialize1Var.value;
}
},
"M5tyGaoMN0qCeLW+FOy60A": {
getter: function (varBag, idService) {
return varBag.scheduleFeedbackMessageAfterTransitionJSResult.value;
}
},
"VRNWN9XGP0i84Kd_wLo5Dg": {
getter: function (varBag, idService) {
return varBag.model.variables.isLoadingVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"_r2a_vqaz0qM2NJxUfP6hA": {
getter: function (varBag, idService) {
return varBag.model.variables.contactByEmailFormVar;
}
},
"zqu_5xBW_0KaYiYbKEYw7Q": {
getter: function (varBag, idService) {
return varBag.model.variables.emailEventVar;
}
},
"X9lEOzPT8kKVuy3gcFZh4A": {
getter: function (varBag, idService) {
return varBag.model.variables.in_AvatarURLIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"fKQuHBcAEUu3xEIAQxsu2A": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ContactNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"fg59eJfkcEiVX2CbB41VIA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EmailToIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"nKDcz9A8d0e+NpnZ5zMfmA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_SubjectIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"AS2l4B_pLEuwwECaeB4Fqg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventDateIn;
},
dataType: OS.DataTypes.DataTypes.Date
},
"Q2td2ioE5U+lyGRuyi46OA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventLocalityIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"hiK6dKe6NEiEXDI_LuHvzg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Title"));
})(varBag.model, idService);
}
},
"kU9dJqWYpU6eBr88KOSO5Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Right"));
})(varBag.model, idService);
}
},
"upPBGAyLVUKUlkKHc0dUQQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"0uqPBrBUfk+tThqpsmcOOw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"OBB9FxM_eEudpsLW+mezRQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_ContactCard"));
})(varBag.model, idService);
}
},
"bgp_YyMvn0eMV+m3OKkbwA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"2QschyhsqEO8CKGX9advhw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"p0d5mKYdAk+lHE2M1a+dXA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"MTxPIdT_VUyqMskSTCAzDg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
},
"tPAoKl86xkC+5V6sfLX+mw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
