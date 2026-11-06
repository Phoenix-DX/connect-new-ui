define("UBTConnect.ContactFlow.ContactByEmailForm.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "NavigationHandler.controller", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ButtonOptionsRec", "NavigationHandler.controller$AllowUpcomingNavigation", "UBTConnect.referencesHealth$NavigationHandler", "NavigationHandler.controller$PreventNavigation"], function (OutSystems, UBTConnectModel, UBTConnectLibraryModel, NavigationHandlerController) {
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
this.attr("IsLoading", "isLoadingIn", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_SubjectPlaceholder", "in_SubjectPlaceholderIn", "In_SubjectPlaceholder", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_SubjectPlaceholderInDataFetchStatus", "_in_SubjectPlaceholderInDataFetchStatus", "_in_SubjectPlaceholderInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_MessagePlaceholder", "in_MessagePlaceholderIn", "In_MessagePlaceholder", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_MessagePlaceholderInDataFetchStatus", "_in_MessagePlaceholderInDataFetchStatus", "_in_MessagePlaceholderInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_Subject", "in_SubjectIn", "In_Subject", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_SubjectInDataFetchStatus", "_in_SubjectInDataFetchStatus", "_in_SubjectInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_UseDynamicTextAreaSubject", "in_UseDynamicTextAreaSubjectIn", "In_UseDynamicTextAreaSubject", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_UseDynamicTextAreaSubjectInDataFetchStatus", "_in_UseDynamicTextAreaSubjectInDataFetchStatus", "_in_UseDynamicTextAreaSubjectInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_MessageLabel", "in_MessageLabelIn", "In_MessageLabel", true, false, OS.DataTypes.DataTypes.Text, function () {
return "Message";
}, false), 
this.attr("_in_MessageLabelInDataFetchStatus", "_in_MessageLabelInDataFetchStatus", "_in_MessageLabelInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Form1: OS.Model.ValidationWidgetRecord,
TextArea_Subject: OS.Model.ValidationWidgetRecord,
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
if("IsLoading" in inputs) {
this.variables.isLoadingIn = inputs.IsLoading;
if("_isLoadingInDataFetchStatus" in inputs) {
this.variables._isLoadingInDataFetchStatus = inputs._isLoadingInDataFetchStatus;
}

}

if("In_SubjectPlaceholder" in inputs) {
this.variables.in_SubjectPlaceholderIn = inputs.In_SubjectPlaceholder;
if("_in_SubjectPlaceholderInDataFetchStatus" in inputs) {
this.variables._in_SubjectPlaceholderInDataFetchStatus = inputs._in_SubjectPlaceholderInDataFetchStatus;
}

}

if("In_MessagePlaceholder" in inputs) {
this.variables.in_MessagePlaceholderIn = inputs.In_MessagePlaceholder;
if("_in_MessagePlaceholderInDataFetchStatus" in inputs) {
this.variables._in_MessagePlaceholderInDataFetchStatus = inputs._in_MessagePlaceholderInDataFetchStatus;
}

}

if("In_Subject" in inputs) {
this.variables.in_SubjectIn = inputs.In_Subject;
if("_in_SubjectInDataFetchStatus" in inputs) {
this.variables._in_SubjectInDataFetchStatus = inputs._in_SubjectInDataFetchStatus;
}

}

if("In_UseDynamicTextAreaSubject" in inputs) {
this.variables.in_UseDynamicTextAreaSubjectIn = inputs.In_UseDynamicTextAreaSubject;
if("_in_UseDynamicTextAreaSubjectInDataFetchStatus" in inputs) {
this.variables._in_UseDynamicTextAreaSubjectInDataFetchStatus = inputs._in_UseDynamicTextAreaSubjectInDataFetchStatus;
}

}

if("In_MessageLabel" in inputs) {
this.variables.in_MessageLabelIn = inputs.In_MessageLabel;
if("_in_MessageLabelInDataFetchStatus" in inputs) {
this.variables._in_MessageLabelInDataFetchStatus = inputs._in_MessageLabelInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "ContactFlow.ContactByEmailForm");
});
define("UBTConnect.ContactFlow.ContactByEmailForm.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.ContactFlow.ContactByEmailForm.mvc$model", "UBTConnect.ContactFlow.ContactByEmailForm.mvc$controller", "UBTConnect.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.ConnectPatterns.DynamicTextArea.mvc$view", "UBTConnectLibrary.ConnectPatterns.InputCounter.mvc$view", "UBTConnectLibrary.ConnectPatterns.TextArea_WithCounter.mvc$view", "UBTConnectLibrary.ConnectPatterns.FixedFooter.mvc$view", "OutSystemsUI_2_23.Utilities.ButtonLoading.mvc$view", "UBTConnect_Utils.CW_Common.Button.mvc$view", "UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_Navigation.mvc$view", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ButtonOptionsRec", "NavigationHandler.controller$AllowUpcomingNavigation", "UBTConnect.referencesHealth$NavigationHandler", "NavigationHandler.controller$PreventNavigation"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, NavigationHandlerController, React, OSView, UBTConnect_ContactFlow_ContactByEmailForm_mvc_model, UBTConnect_ContactFlow_ContactByEmailForm_mvc_controller, UBTConnectClientVariables, OSWidgets, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_DynamicTextArea_mvc_view, UBTConnectLibrary_ConnectPatterns_InputCounter_mvc_view, UBTConnectLibrary_ConnectPatterns_TextArea_WithCounter_mvc_view, UBTConnectLibrary_ConnectPatterns_FixedFooter_mvc_view, OutSystemsUI_2_23_Utilities_ButtonLoading_mvc_view, UBTConnect_Utils_CW_Common_Button_mvc_view, UBTConnect_App_Common_Blocks_PopupDialogs_Dialog_Navigation_mvc_view) {
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
        View.displayName = "ContactFlow.ContactByEmailForm";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_DynamicTextArea_mvc_view, UBTConnectLibrary_ConnectPatterns_InputCounter_mvc_view, UBTConnectLibrary_ConnectPatterns_TextArea_WithCounter_mvc_view, UBTConnectLibrary_ConnectPatterns_FixedFooter_mvc_view, OutSystemsUI_2_23_Utilities_ButtonLoading_mvc_view, UBTConnect_Utils_CW_Common_Button_mvc_view, UBTConnect_App_Common_Blocks_PopupDialogs_Dialog_Navigation_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_ContactFlow_ContactByEmailForm_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_ContactFlow_ContactByEmailForm_mvc_controller;
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
visible: true,
_idProps: {
service: idService,
name: "Div_Content"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("lxT47mpyiECr28GDvoXkuA.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
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
uuid: "1",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("sGeXMvNVn0Sf5Yzd0wg98A.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
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
uuid: "2",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_ContactCard,
_idProps: {
service: idService,
name: "Placeholder_ContactCard"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
}
}), React.createElement(OSWidgets.Form, {
_validationProps: {
validationService: validationService
},
gridProperties: {
classes: "OSFillParent"
},
style: "form",
_idProps: {
service: idService,
name: "Form1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
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
targetWidget: "Input_Subject",
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Subject"), $if(model.variables.in_UseDynamicTextAreaSubjectIn, false, this, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("a3FuMEu5aka29LDbd9IMww.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.textOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
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
validationService: validationService,
validationParentId: idService.getId("Form1")
},
_idProps: {
service: idService,
uuid: "7",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_DynamicTextArea_mvc_view, {
inputs: {
In_IsBounded: true,
In_Text: model.variables.subjectVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form1")
},
_idProps: {
service: idService,
uuid: "8",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_TextArea: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.TextArea, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form1")
},
enabled: ((model.variables.in_SubjectIn === "") && !(model.variables.isLoadingIn)),
gridProperties: {
classes: "OSFillParent"
},
mandatory: false,
maxLength: 100,
style: "form-control",
textLines: 1,
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.subjectVar, function (value) {
model.variables.subjectVar = value;
}),
_idProps: {
service: idService,
name: "TextArea_Subject"
},
_widgetRecordProvider: widgetsRecordProvider,
enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SubjectInDataFetchStatus, model.variables._isLoadingInDataFetchStatus)
})];
})
},
_dependencies: [asPrimitiveValue(model.variables._isLoadingInDataFetchStatus), asPrimitiveValue(model.variables._in_SubjectInDataFetchStatus), asPrimitiveValue(model.variables.isLoadingIn), asPrimitiveValue(model.variables.in_SubjectIn), asPrimitiveValue(model.variables.subjectVar)]
}), $if(((model.variables.in_SubjectIn) !== ("")), false, this, function () {
return [];
}, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_InputCounter_mvc_view, {
inputs: {
In_InputId: idService.getId("TextArea_Subject"),
In_InitialLength: 0
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form1")
},
_idProps: {
service: idService,
uuid: "10",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables._isLoadingInDataFetchStatus), asPrimitiveValue(model.variables._in_SubjectInDataFetchStatus), asPrimitiveValue(model.variables.isLoadingIn), asPrimitiveValue(model.variables.in_SubjectIn), asPrimitiveValue(model.variables.subjectVar)]
})];
}, function () {
return [React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form1")
},
enabled: ((model.variables.in_SubjectIn === "") && !(model.variables.isLoadingIn)),
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: false,
maxLength: 100,
prompt: model.variables.in_SubjectPlaceholderIn,
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.subjectVar, function (value) {
model.variables.subjectVar = value;
}),
_idProps: {
service: idService,
name: "Input_Subject"
},
_widgetRecordProvider: widgetsRecordProvider,
enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SubjectInDataFetchStatus, model.variables._isLoadingInDataFetchStatus),
prompt_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SubjectPlaceholderInDataFetchStatus)
}), $if(((model.variables.in_SubjectIn) !== ("")), false, this, function () {
return [];
}, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_InputCounter_mvc_view, {
inputs: {
In_InputId: idService.getId("Input_Subject"),
In_InitialLength: 0
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form1")
},
_idProps: {
service: idService,
uuid: "12",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_ConnectPatterns_TextArea_WithCounter_mvc_view, {
inputs: {
In_InitialLength: 0
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form1")
},
_idProps: {
service: idService,
uuid: "14",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Input: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
mandatory: false,
targetWidget: "TextArea_Message",
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.in_MessageLabelIn,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MessageLabelInDataFetchStatus)
})), React.createElement(OSWidgets.TextArea, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form1")
},
enabled: !(model.variables.isLoadingIn),
gridProperties: {
classes: "OSFillParent"
},
mandatory: false,
maxLength: 1000,
prompt: model.variables.in_MessagePlaceholderIn,
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
enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isLoadingInDataFetchStatus),
prompt_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MessagePlaceholderInDataFetchStatus)
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.isLoadingIn), asPrimitiveValue(model.variables.in_MessagePlaceholderIn), asPrimitiveValue(model.variables.messageVar), asPrimitiveValue(model.variables._isLoadingInDataFetchStatus), asPrimitiveValue(model.variables._in_MessagePlaceholderInDataFetchStatus), asPrimitiveValue(model.variables._in_MessageLabelInDataFetchStatus), asPrimitiveValue(model.variables.in_MessageLabelIn)]
})))];
})
}
})), React.createElement(UBTConnectLibrary_ConnectPatterns_FixedFooter_mvc_view, {
inputs: {
useBottomBar: false,
ContentContainerId: idService.getId("Div_Content"),
ExpectedFooterHeight: "calc(2 * var(--space-base) + var(--ubt-button-height-m))"
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
uuid: "18",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("E3eeaIGpykqPt7SASikW5A.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.backgroundAttr = function () {
var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
return rec;
}();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
return rec;
}();
rec.shadowIdAttr = UBTConnectModel.staticEntities.uBT_Shadow.extraSmallTop;
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
uuid: "19",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OutSystemsUI_2_23_Utilities_ButtonLoading_mvc_view, {
inputs: {
IsLoading: model.variables.isLoadingIn,
_isLoadingInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isLoadingInDataFetchStatus)
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
uuid: "20",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Utils_CW_Common_Button_mvc_view, {
inputs: {
ButtonText: "Send",
IsDisabled: !((((model.variables.subjectVar) !== ("")) && ((model.variables.messageVar) !== (""))))
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
buttonOnClick$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_Common/Button buttonOnClick");
return controller.onClick_SubmitForm$Action(controller.callContext(eventHandlerContext));
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
uuid: "21",
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.messageVar), asPrimitiveValue(model.variables.subjectVar)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.messageVar), asPrimitiveValue(model.variables.subjectVar), asPrimitiveValue(model.variables._isLoadingInDataFetchStatus), asPrimitiveValue(model.variables.isLoadingIn)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.messageVar), asPrimitiveValue(model.variables.subjectVar), asPrimitiveValue(model.variables._isLoadingInDataFetchStatus), asPrimitiveValue(model.variables.isLoadingIn)]
}), $if((((model.variables.subjectVar) !== (model.variables.in_SubjectIn)) || ((OS.BuiltinFunctions.trim(model.variables.messageVar)) !== (""))), false, this, function () {
return [React.createElement(UBTConnect_App_Common_Blocks_PopupDialogs_Dialog_Navigation_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_OnBackNavigation$Action: function (event_NavigationEventIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Common_Blocks_PopupDialogs/Dialog_Navigation Event_OnBackNavigation");
controller.onBackNavigation_PreventNavigation$Action(event_NavigationEventIn, controller.callContext(eventHandlerContext));
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
uuid: "22",
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Header: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "Delete message?",
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
placeholder_Body: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "Are you sure you want to delete this message?",
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: []
})];
}, function () {
return [];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.ContactFlow.ContactByEmailForm.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "NavigationHandler.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.ContactFlow.ContactByEmailForm.mvc$debugger", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ButtonOptionsRec", "NavigationHandler.controller$AllowUpcomingNavigation", "UBTConnect.referencesHealth$NavigationHandler", "NavigationHandler.controller$PreventNavigation"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, NavigationHandlerController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_ContactFlow_ContactByEmailForm_mvc_Debugger) {
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
Controller.prototype._onClick_SubmitForm$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_SubmitForm");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Ye6JNeqDzEOXS5lAG9VoTw:/NRWebFlows.44k9sr6oZUWsIXFdGfOLuw/NodesShownInESpaceTree.G1Pueo6JZUuGQdY9jSzQUw/ClientActions.Ye6JNeqDzEOXS5lAG9VoTw:GLGMjPqM5sCH2EOBlUsdBA", "UBTConnect", "OnClick_SubmitForm", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:muDCp1CcAEO1Ip_SbUD04Q", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kdUx7Cs4_kKF4ywcsiY9rA", callContext.id);
// Execute Action: AllowUpcomingNavigation
NavigationHandlerController.default.allowUpcomingNavigation$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zmUmuc3Q_kW4YJTq1TQHJw", callContext.id);
// Trigger Event: Event_SubmitForm
return controller.event_SubmitForm$Action(model.variables.subjectVar, model.variables.messageVar, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XsFMUfaq5kicQgoR7co06Q", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Ye6JNeqDzEOXS5lAG9VoTw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Ye6JNeqDzEOXS5lAG9VoTw", callContext.id);
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
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:6axqfEvu_k2YzgYuaMH32w:/NRWebFlows.44k9sr6oZUWsIXFdGfOLuw/NodesShownInESpaceTree.G1Pueo6JZUuGQdY9jSzQUw/ClientActions.6axqfEvu_k2YzgYuaMH32w:MdQsJAEJU24UVgGN4JXtjg", "UBTConnect", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5LpKwDmbO0GK+vL8LIto1A", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_pkdsDfeIUG0gfok_VhHMA", callContext.id);
// Subject = In_Subject
model.variables.subjectVar = model.variables.in_SubjectIn;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2RWWT6Rnzk2eW3eSL8QaAQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:6axqfEvu_k2YzgYuaMH32w", callContext.id);
}

};
Controller.prototype._onBackNavigation_PreventNavigation$Action = function (event_NavigationEventIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnBackNavigation_PreventNavigation");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.ContactFlow.ContactByEmailForm.OnBackNavigation_PreventNavigation$vars"))());
vars.value.event_NavigationEventInLocal = event_NavigationEventIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:lCxByyMDt0O4Ht8sqVk_2g:/NRWebFlows.44k9sr6oZUWsIXFdGfOLuw/NodesShownInESpaceTree.G1Pueo6JZUuGQdY9jSzQUw/ClientActions.lCxByyMDt0O4Ht8sqVk_2g:v2JLc4Fa+teiF6GP6WrGSA", "UBTConnect", "OnBackNavigation_PreventNavigation", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FmU2KVTYgE+HeR_MWrtH4g", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+MO54eDWe0a4M2ZsFjUtAg", callContext.id);
// Execute Action: PreventNavigation
NavigationHandlerController.default.preventNavigation$Action(vars.value.event_NavigationEventInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZFnyJoTmJkCzJ3JZ0YPv_g", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:lCxByyMDt0O4Ht8sqVk_2g", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.ContactFlow.ContactByEmailForm.OnBackNavigation_PreventNavigation$vars", [{
name: "Event_NavigationEvent",
attrName: "event_NavigationEventInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);

Controller.prototype.onClick_SubmitForm$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_SubmitForm$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.onBackNavigation_PreventNavigation$Action = function (event_NavigationEventIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onBackNavigation_PreventNavigation$Action, callContext, event_NavigationEventIn);

};
Controller.prototype.event_SubmitForm$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:44k9sr6oZUWsIXFdGfOLuw:/NRWebFlows.44k9sr6oZUWsIXFdGfOLuw:06ULszUsjYTPVWsvtfNAow", "UBTConnect", "ContactFlow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:G1Pueo6JZUuGQdY9jSzQUw:/NRWebFlows.44k9sr6oZUWsIXFdGfOLuw/NodesShownInESpaceTree.G1Pueo6JZUuGQdY9jSzQUw:hTnJ7+Xt8poegmg8d2vvlQ", "UBTConnect", "ContactByEmailForm", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:G1Pueo6JZUuGQdY9jSzQUw", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:44k9sr6oZUWsIXFdGfOLuw", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "ContactFlow/ContactByEmailForm On Initialize");
return controller.onInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
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
return UBTConnectController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});

define("UBTConnect.ContactFlow.ContactByEmailForm.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"FKMTu6_r5Uim_TJe2Vl15w": {
getter: function (varBag, idService) {
return varBag.vars.value.event_NavigationEventInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"hGhOKiLF5kC_S0_2I2LAsQ": {
getter: function (varBag, idService) {
return varBag.model.variables.subjectVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"4_YEFQdlqUGNDDSfS9L4MA": {
getter: function (varBag, idService) {
return varBag.model.variables.messageVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Yw99PEC2ekOcEfdmh2HMCQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isLoadingIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"I9shHQ1O506qKdR0dWI0xA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_SubjectPlaceholderIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"iddp85hhJkW+Bme57jkmHA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MessagePlaceholderIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"aj6fJOxvf0qhryjH9dZ+VQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_SubjectIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Rr89VAYH6EColOgcQERQLQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_UseDynamicTextAreaSubjectIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"VYEYQdUPLUCJy+190zyu4Q": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MessageLabelIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"cf0gIKSCCEOEW6cpc_B5lA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Div_Content"));
})(varBag.model, idService);
}
},
"W79NB1oNPEOPADnINHaiIA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"1apYmD_AQEOIOJOc+nNygQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"NYBfZlTJQUG9QB5o_fufrw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_ContactCard"));
})(varBag.model, idService);
}
},
"0ENilhtBqUqN9elGloIHyQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Form1"));
})(varBag.model, idService);
}
},
"v+ApuQqUckuWHSXMg1q_dw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"o0lRUNnUzE62gIGok6TnIg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_TextArea"));
})(varBag.model, idService);
}
},
"2HGFfgstkUqldnjHW0062A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TextArea_Subject"));
})(varBag.model, idService);
}
},
"Rohz_lWKIkeXLi9kKoL15w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasSubject"));
})(varBag.model, idService);
}
},
"n1EtMMJaZUazvQxBUW4e5A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_Subject"));
})(varBag.model, idService);
}
},
"Vn1EnbStcUib6iXJX3rHOA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasSubject2"));
})(varBag.model, idService);
}
},
"bOFZDi9E50e82PC+8nFpgw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Input"));
})(varBag.model, idService);
}
},
"aM0+rWsWZkWwODGuwFPVRw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TextArea_Message"));
})(varBag.model, idService);
}
},
"BLso6cHVwkCsyO4AwKyLtw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"6QHrDszXg0i4x9R1SqTKeg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"6Z_2SKVCVUGD6KoAo4974w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Button"));
})(varBag.model, idService);
}
},
"jxozHNtGqE+2id7TvmEgqw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header"));
})(varBag.model, idService);
}
},
"pLJWz9GmCEObPKCLa8F4_Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Body"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
