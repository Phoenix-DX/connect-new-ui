define("UBTConnect.ContactFlow.ContactByEmailOneSchoolGlobal.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "Connect_Communication_CS.model", "UBTConnectLibrary.model", "Connect2_LegacyShared.controller", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$model", "UBTConnect.ContactFlow.ContactByEmailForm.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "Connect_Communication_CS.model$UI_ContactByEmailFormRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Communication_CS", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "Connect2_LegacyShared.controller$zOnApplicationEvent_Wrapper", "UBTConnect.referencesHealth$Connect2_LegacyShared"], function (OutSystems, UBTConnectModel, Connect_Communication_CSModel, UBTConnectLibraryModel, Connect2_LegacySharedController, UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel, UBTConnect_ContactFlow_ContactByEmailForm_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel) {
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
this.attr("In_EmailTo", "in_EmailToIn", "In_EmailTo", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_EmailToInDataFetchStatus", "_in_EmailToInDataFetchStatus", "_in_EmailToInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ContactName", "in_ContactNameIn", "In_ContactName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_ContactNameInDataFetchStatus", "_in_ContactNameInDataFetchStatus", "_in_ContactNameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("In_EmailTo" in inputs) {
this.variables.in_EmailToIn = OS.DataConversion.ServerDataConverter.from(inputs.In_EmailTo, OS.DataTypes.DataTypes.Text);
}

if("In_ContactName" in inputs) {
this.variables.in_ContactNameIn = OS.DataConversion.ServerDataConverter.from(inputs.In_ContactName, OS.DataTypes.DataTypes.Text);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "ContactFlow.ContactByEmailOneSchoolGlobal");
});
define("UBTConnect.ContactFlow.ContactByEmailOneSchoolGlobal.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Communication_CS.model", "UBTConnectLibrary.model", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.ContactFlow.ContactByEmailOneSchoolGlobal.mvc$model", "UBTConnect.ContactFlow.ContactByEmailOneSchoolGlobal.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.ContactFlow.ContactByEmailForm.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "Connect_Communication_CS.model$UI_ContactByEmailFormRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Communication_CS", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "Connect2_LegacyShared.controller$zOnApplicationEvent_Wrapper", "UBTConnect.referencesHealth$Connect2_LegacyShared"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Communication_CSModel, UBTConnectLibraryModel, Connect2_LegacySharedController, React, OSView, UBTConnect_ContactFlow_ContactByEmailOneSchoolGlobal_mvc_model, UBTConnect_ContactFlow_ContactByEmailOneSchoolGlobal_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, OSWidgets, UBTConnect_ContactFlow_ContactByEmailForm_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view) {
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
        View.displayName = "ContactFlow.ContactByEmailOneSchoolGlobal";
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
                return UBTConnect_ContactFlow_ContactByEmailOneSchoolGlobal_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_ContactFlow_ContactByEmailOneSchoolGlobal_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "ContactByEmailOneSchoolGlobal";
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
In_Subject: "",
In_SubjectPlaceholder: "Add a subject",
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
ExtendedClasses: "contact-by-email__header",
Options: model.getCachedValue(idService.getId("ko21k65lrkymoWOvZ_0bFA.Options"), function () {
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
url: OS.Navigation.VersionedURL.getVersionedUrl("img/UBTConnectLibrary.OneSchoolGlobal.svg"),
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("iL39QPPM9kW2gaT1KwbP8Q.Options"), function () {
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
Options: model.getCachedValue(idService.getId("Mn8L_qRv_k6vdGAx1s74nA.Options"), function () {
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
value: " ",
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
_dependencies: [asPrimitiveValue(model.variables.in_ContactNameIn)]
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_ContactNameIn)]
})];
}),
bottom: PlaceholderContent.Empty,
placeholder_CommonUI_Inside_Layout: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.in_ContactNameIn), asPrimitiveValue(model.variables.isLoadingVar)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("UBTConnect.ContactFlow.ContactByEmailOneSchoolGlobal.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Communication_CS.model", "UBTConnectLibrary.model", "Connect2_LegacyShared.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.ContactFlow.ContactByEmailOneSchoolGlobal.mvc$debugger", "UBTConnect.ContactFlow.controller", "UBTConnect.ContactFlow.ContactByEmailOneSchoolGlobal.mvc$controller.Handler_SubmitForm.ScheduleFeedbackMessageAfterTransitionJS", "Connect_Communication_CS.model$UI_ContactByEmailFormRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Communication_CS", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "Connect2_LegacyShared.controller$zOnApplicationEvent_Wrapper", "UBTConnect.referencesHealth$Connect2_LegacyShared"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Communication_CSModel, UBTConnectLibraryModel, Connect2_LegacySharedController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_ContactFlow_ContactByEmailOneSchoolGlobal_mvc_Debugger, _flow_UBTConnect_ContactFlowController, UBTConnect_ContactFlow_ContactByEmailOneSchoolGlobal_mvc_controller_Handler_SubmitForm_ScheduleFeedbackMessageAfterTransitionJS) {
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
Controller.prototype.sendContactMemberEmail$ServerAction = function (in_UI_ContactByEmailFormIn, callContext) {
var controller = this.controller;
var inputs = {
In_UI_ContactByEmailForm: OS.DataConversion.ServerDataConverter.to(in_UI_ContactByEmailFormIn, OS.DataTypes.DataTypes.Record)
};
return controller.callServerAction("SendContactMemberEmail", "screenservices/UBTConnect/ContactFlow/ContactByEmailOneSchoolGlobal/ServiceAPISendContactMemberEmail", "kOLBjpp9AhIYIaVHkECoxw", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
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
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:vwEtJTMFc0yKgy8CcYUS0w:/NRWebFlows.44k9sr6oZUWsIXFdGfOLuw/NodesShownInESpaceTree.TxT0nigLb0aZvI_F9PClrw/ClientActions.vwEtJTMFc0yKgy8CcYUS0w:IvnaMkhU5qTiC7+qkrR9AA", "UBTConnect", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ENjZsR0y6UqOh3odh5tX0w", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:W07mJrlTrkSILPzBMGRV1A", callContext.id);
// ContactByEmailForm.ContactMember = In_ContactName
model.variables.contactByEmailFormVar.contactMemberAttr = model.variables.in_ContactNameIn;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:W07mJrlTrkSILPzBMGRV1A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByEmailForm.EmailTo = In_EmailTo
model.variables.contactByEmailFormVar.emailToAttr = model.variables.in_EmailToIn;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:W07mJrlTrkSILPzBMGRV1A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ContactByEmailForm.FirstName = In_ContactName
model.variables.contactByEmailFormVar.firstNameAttr = model.variables.in_ContactNameIn;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4eHhpVA9V0a31aXK+4KBag", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:vwEtJTMFc0yKgy8CcYUS0w", callContext.id);
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
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.ContactFlow.ContactByEmailOneSchoolGlobal.Handler_SubmitForm$vars"))());
vars.value.event_SubjectInLocal = event_SubjectIn;
vars.value.event_MessageInLocal = event_MessageIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Ny4Z22vCpE6Q03U1tvLggQ:/NRWebFlows.44k9sr6oZUWsIXFdGfOLuw/NodesShownInESpaceTree.TxT0nigLb0aZvI_F9PClrw/ClientActions.Ny4Z22vCpE6Q03U1tvLggQ:Gr1gVxPdkfrP4wKoiHVUjg", "UBTConnect", "Handler_SubmitForm", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9xe6vGjGAketKAFqeDCZyg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:frbkZ07VmEe0CHKurZI56A", callContext.id);
// IsLoading = True
model.variables.isLoadingVar = true;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:o1cO5UcX70+amBr7w7SZAw", callContext.id);
// ContactByEmailForm.Subject = Event_Subject
model.variables.contactByEmailFormVar.subjectAttr = vars.value.event_SubjectInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:o1cO5UcX70+amBr7w7SZAw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByEmailForm.Message = Event_Message
model.variables.contactByEmailFormVar.messageAttr = vars.value.event_MessageInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JY7ZZKwhfEixQAllvyeM9w", callContext.id);
// Execute Action: SendContactMemberEmail
model.flush();
return controller.sendContactMemberEmail$ServerAction(model.variables.contactByEmailFormVar, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6MkmD0YNuUifB5crwlDA7A", callContext.id);
// Execute Action: zOnApplicationEvent_Wrapper
model.flush();
return Connect2_LegacySharedController.default.zOnApplicationEvent_Wrapper$Action(UBTConnectModel.staticEntities.applicationEvents_Directory.emailHousehold, "", callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:aQDzWy+BoU6FM3TR8rduCg", callContext.id);
controller.safeExecuteJSNode(UBTConnect_ContactFlow_ContactByEmailOneSchoolGlobal_mvc_controller_Handler_SubmitForm_ScheduleFeedbackMessageAfterTransitionJS, "ScheduleFeedbackMessageAfterTransition", "Handler_SubmitForm", {
Message: OS.DataConversion.JSNodeParamConverter.to("Your message has been sent.", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_YUtf3wekUyQAggRp5a6cA", callContext.id);
// Destination: (PreviousScreen)
return OS.Flow.returnAsync(OS.Navigation.navigateBack(null, callContext, true));
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Ny4Z22vCpE6Q03U1tvLggQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Ny4Z22vCpE6Q03U1tvLggQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.ContactFlow.ContactByEmailOneSchoolGlobal.Handler_SubmitForm$vars", [{
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
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:TxT0nigLb0aZvI_F9PClrw:/NRWebFlows.44k9sr6oZUWsIXFdGfOLuw/NodesShownInESpaceTree.TxT0nigLb0aZvI_F9PClrw:f5OuQJ8Tv5qSoQ5KQKlI6A", "UBTConnect", "ContactByEmailOneSchoolGlobal", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:TxT0nigLb0aZvI_F9PClrw", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:44k9sr6oZUWsIXFdGfOLuw", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "ContactFlow/ContactByEmailOneSchoolGlobal On Initialize");
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
define("UBTConnect.ContactFlow.ContactByEmailOneSchoolGlobal.mvc$controller.Handler_SubmitForm.ScheduleFeedbackMessageAfterTransitionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.setTimeout(function() {
    $public.FeedbackMessage.showFeedbackMessage($parameters.Message, 1);
}, 500);
};
});

define("UBTConnect.ContactFlow.ContactByEmailOneSchoolGlobal.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"O0dfFIEmUEKwbBgWBL+cMA": {
getter: function (varBag, idService) {
return varBag.vars.value.event_SubjectInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"E6vuSKBdD0a+kfgjfc605Q": {
getter: function (varBag, idService) {
return varBag.vars.value.event_MessageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"aQDzWy+BoU6FM3TR8rduCg": {
getter: function (varBag, idService) {
return varBag.scheduleFeedbackMessageAfterTransitionJSResult.value;
}
},
"gLNM2fFsNkelTr3QuvCG3Q": {
getter: function (varBag, idService) {
return varBag.model.variables.isLoadingVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"nr3OG5KRdEaZV+ot_qzykA": {
getter: function (varBag, idService) {
return varBag.model.variables.contactByEmailFormVar;
}
},
"Yvmot5NgGky6pfimNcu_6w": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EmailToIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"vwSE2WtbW0uZsGIPtDqNRQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ContactNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"BqbyPaLfiE2QxKN9gt+YPg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Title"));
})(varBag.model, idService);
}
},
"vGi1Vmo+WkCgd0hWIeZGnA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Right"));
})(varBag.model, idService);
}
},
"ZSRpTqJRrUGsGSbs53HWQg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"uaDXtux5zEu4t5h7KEuCqQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"FE9Va6z8qU6o3r0ZZi_cDQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_ContactCard"));
})(varBag.model, idService);
}
},
"4G6TCtKonUS3SvzojifPMg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"H4w777dX70euzWg1ntwAOA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"Kgf7u+qCeEO7zt0bmLV5Kg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"6_6_7K6hO0KcUA4xh7mndg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
},
"CnU_DQQYiEGh24Ld1BmyNw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
