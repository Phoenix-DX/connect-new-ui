define("UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "ApplicationPolicies.model", "ApplicationPolicies_CW.model", "ApplicationPolicies_CW.controller", "UBTJavaScriptUtils.controller", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "OutSystemsUI_2_23.Utilities.Separator.mvc$model", "UBTConnectLibrary.ConnectPatterns.FixedFooter.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnect_Utils.CW_Common.Button.mvc$model", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ButtonOptionsRec", "ApplicationPolicies.model$PolicyAcceptanceDeviceDetailsRec", "UBTConnect.referencesHealth$ApplicationPolicies", "ApplicationPolicies_CW.model$PolicyAcceptanceInformationRec", "UBTConnect.referencesHealth$ApplicationPolicies_CW", "UBTConnect.model$PolicyAcceptanceInformationList", "ApplicationPolicies_CW.controller$CanOpenApplicationPolicyDirectlyViaUrl", "UBTJavaScriptUtils.controller$JSUtils_PageOpenInNewTab", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "ApplicationPolicies_CW.controller$Set_PolicsyIsLoading", "ApplicationPolicies_CW.controller$Get_PolicsyIsLoading", "ApplicationPolicies_CW.controller$OpenApplicationPolicy"], function (OutSystems, UBTConnectModel, UBTConnectLibraryModel, ApplicationPoliciesModel, ApplicationPolicies_CWModel, ApplicationPolicies_CWController, UBTJavaScriptUtilsController, UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel, OutSystemsUI_2_23_Utilities_Separator_mvcModel, UBTConnectLibrary_ConnectPatterns_FixedFooter_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnect_Utils_CW_Common_Button_mvcModel) {
var OS = OutSystems.Internal;

var GetPendingPoliciesDataActRec = (function (_super) {
__extends(GetPendingPoliciesDataActRec, _super);
function GetPendingPoliciesDataActRec(defaults) {
_super.apply(this, arguments);
}
GetPendingPoliciesDataActRec.attributesToDeclare = function () {
return [
this.attr("Policies", "policiesOut", "Policies", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.PolicyAcceptanceInformationList());
}, true, UBTConnectModel.PolicyAcceptanceInformationList)
].concat(_super.attributesToDeclare.call(this));
};
GetPendingPoliciesDataActRec.fromStructure = function (str) {
return new GetPendingPoliciesDataActRec(new GetPendingPoliciesDataActRec.RecordClass({
policiesOut: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetPendingPoliciesDataActRec.init();
return GetPendingPoliciesDataActRec;
})(OS.Model.DataSourceRecord);

var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsAllSelected", "isAllSelectedVar", "IsAllSelected", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("PolicyApplications", "policyApplicationsIn", "PolicyApplications", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, false, OS.DataTypes.TextList), 
this.attr("_policyApplicationsInDataFetchStatus", "_policyApplicationsInDataFetchStatus", "_policyApplicationsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Country", "countryIn", "Country", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_countryInDataFetchStatus", "_countryInDataFetchStatus", "_countryInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ContentBlockId", "contentBlockIdIn", "ContentBlockId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_contentBlockIdInDataFetchStatus", "_contentBlockIdInDataFetchStatus", "_contentBlockIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("GetPendingPolicies", "getPendingPoliciesDataAct", "getPendingPoliciesDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetPendingPoliciesDataActRec());
}, true, GetPendingPoliciesDataActRec)
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
Model._hasValidationWidgetsValue = ((((((UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets) || OutSystemsUI_2_23_Utilities_Separator_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_FixedFooter_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_Common_Button_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("PolicyApplications" in inputs) {
this.variables.policyApplicationsIn = inputs.PolicyApplications;
if("_policyApplicationsInDataFetchStatus" in inputs) {
this.variables._policyApplicationsInDataFetchStatus = inputs._policyApplicationsInDataFetchStatus;
}

}

if("Country" in inputs) {
this.variables.countryIn = inputs.Country;
if("_countryInDataFetchStatus" in inputs) {
this.variables._countryInDataFetchStatus = inputs._countryInDataFetchStatus;
}

}

if("ContentBlockId" in inputs) {
this.variables.contentBlockIdIn = inputs.ContentBlockId;
if("_contentBlockIdInDataFetchStatus" in inputs) {
this.variables._contentBlockIdInDataFetchStatus = inputs._contentBlockIdInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "App_Policies.Policy_Custom_AcceptPendingPolicies");
});
define("UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "ApplicationPolicies.model", "ApplicationPolicies_CW.model", "ApplicationPolicies_CW.controller", "UBTJavaScriptUtils.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc$model", "UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "OutSystemsUI_2_23.Utilities.Separator.mvc$view", "UBTConnectLibrary.ConnectPatterns.FixedFooter.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnect_Utils.CW_Common.Button.mvc$view", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ButtonOptionsRec", "ApplicationPolicies.model$PolicyAcceptanceDeviceDetailsRec", "UBTConnect.referencesHealth$ApplicationPolicies", "ApplicationPolicies_CW.model$PolicyAcceptanceInformationRec", "UBTConnect.referencesHealth$ApplicationPolicies_CW", "UBTConnect.model$PolicyAcceptanceInformationList", "ApplicationPolicies_CW.controller$CanOpenApplicationPolicyDirectlyViaUrl", "UBTJavaScriptUtils.controller$JSUtils_PageOpenInNewTab", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "ApplicationPolicies_CW.controller$Set_PolicsyIsLoading", "ApplicationPolicies_CW.controller$Get_PolicsyIsLoading", "ApplicationPolicies_CW.controller$OpenApplicationPolicy"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, ApplicationPoliciesModel, ApplicationPolicies_CWModel, ApplicationPolicies_CWController, UBTJavaScriptUtilsController, React, OSView, UBTConnect_App_Policies_Policy_Custom_AcceptPendingPolicies_mvc_model, UBTConnect_App_Policies_Policy_Custom_AcceptPendingPolicies_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, OutSystemsUI_2_23_Utilities_Separator_mvc_view, UBTConnectLibrary_ConnectPatterns_FixedFooter_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnect_Utils_CW_Common_Button_mvc_view) {
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
        View.displayName = "App_Policies.Policy_Custom_AcceptPendingPolicies";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, OutSystemsUI_2_23_Utilities_Separator_mvc_view, UBTConnectLibrary_ConnectPatterns_FixedFooter_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnect_Utils_CW_Common_Button_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_App_Policies_Policy_Custom_AcceptPendingPolicies_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_App_Policies_Policy_Custom_AcceptPendingPolicies_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(model.variables.getPendingPoliciesDataAct.isDataFetchedAttr, false, this, function () {
return [$if(!(model.variables.getPendingPoliciesDataAct.policiesOut.isEmpty), false, this, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
inputs: {
ColumnOptions: model.getCachedValue(idService.getId("xeNgDFr3SE6Dtyvd1MSJxQ.ColumnOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
rec.columnBehaviourAttr = UBTConnectModel.staticEntities.uBT_ColumnBehaviour.reduceLast;
rec.flexDirectionAttr = UBTConnectModel.staticEntities.uBT_FlexDirection.column;
return rec;
}();
}),
ExtendedClasses: "ubt-policies--columns"
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
left: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.getPendingPoliciesDataAct.policiesOut,
style: "list list-group ubt-policies--list",
tag: "div",
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getPendingPoliciesDataAct.dataFetchStatusAttr),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex margin-y-xl",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.getPendingPoliciesDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getPendingPoliciesDataAct.policiesOut.getCurrent(callContext.iterationContext).policyInformationAttr.policyTypeNameAttr), asPrimitiveValue(model.variables.getPendingPoliciesDataAct.policiesOut.getCurrent(callContext.iterationContext).policyInformationAttr.applicationNameAttr), asPrimitiveValue(model.variables.getPendingPoliciesDataAct.policiesOut.getCurrent(callContext.iterationContext).isSelectedAttr)]
}, $if(model.variables.getPendingPoliciesDataAct.policiesOut.getCurrent(callContext.iterationContext).isSelectedAttr, false, this, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral0,
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.checkbox
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
click$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Icon Click");
controller.toggleCheckBox$Action(controller.callContext(eventHandlerContext));
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
uuid: "3",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral0,
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.checkboxOutlineBlank
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
click$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Icon Click");
controller.toggleCheckBox$Action(controller.callContext(eventHandlerContext));
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
uuid: "4",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-left-xs white-space-nowrap",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
FitContent: true,
In_Text: (("I agree to the " + model.variables.getPendingPoliciesDataAct.policiesOut.getCurrent(callContext.iterationContext).policyInformationAttr.applicationNameAttr) + " - "),
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getPendingPoliciesDataAct.dataFetchStatusAttr),
In_TextOptions: model.getCachedValue(idService.getId("tl5quQHRb06sGkGGAKi0EQ.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.regular;
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
uuid: "6",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_TextOptions: model.getCachedValue(idService.getId("pXPR42y+80WtulaW999Sfg.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
rec.isUnderlinedAttr = true;
return rec;
}();
}),
In_Text: model.variables.getPendingPoliciesDataAct.policiesOut.getCurrent(callContext.iterationContext).policyInformationAttr.policyTypeNameAttr,
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getPendingPoliciesDataAct.dataFetchStatusAttr),
FitContent: true
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
clicked$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "BasePatterns/CustomText Clicked");
return controller.onClickPolicy$Action(controller.callContext(eventHandlerContext));
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
uuid: "7",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})))];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables.getPendingPoliciesDataAct.dataFetchStatusAttr)]
})];
}),
right: new PlaceholderContent(function () {
return [$if((model.variables.getPendingPoliciesDataAct.policiesOut.length > 1), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ubt-policies--agree-to-all",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUI_2_23_Utilities_Separator_mvc_view, {
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
uuid: "9",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex padding-top-xl",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.isAllSelectedVar, false, this, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.checkbox,
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral0
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
click$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Icon Click");
controller.toggleSelectAllCheckBox$Action(controller.callContext(eventHandlerContext));
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
uuid: "11",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.checkboxOutlineBlank,
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral0
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
click$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Icon Click");
controller.toggleSelectAllCheckBox$Action(controller.callContext(eventHandlerContext));
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
uuid: "12",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-left-xs",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_TextOptions: model.getCachedValue(idService.getId("x49G3_HHBkiY86lohK0ixg.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.regular;
return rec;
}();
}),
FitContent: true,
In_Text: "I agree to all"
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
uuid: "14",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))))];
}, function () {
return [];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.isAllSelectedVar), asPrimitiveValue(model.variables.getPendingPoliciesDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getPendingPoliciesDataAct.policiesOut)]
}), React.createElement(UBTConnectLibrary_ConnectPatterns_FixedFooter_mvc_view, {
inputs: {
useBottomBar: false,
ExpectedFooterHeight: "calc(2 * var(--space-base) + var(--ubt-button-height-m))",
ContentContainerId: model.variables.contentBlockIdIn,
_contentContainerIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._contentBlockIdInDataFetchStatus)
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
uuid: "15",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("2JeRvyIjAEalhzeCmo9+7g.Options"), function () {
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
uuid: "16",
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Utils_CW_Common_Button_mvc_view, {
inputs: {
IsDisabled: !(model.variables.isAllSelectedVar),
ButtonText: "Continue"
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
return controller.continueOnClick$Action(controller.callContext(eventHandlerContext));
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
uuid: "17",
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.isAllSelectedVar)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.isAllSelectedVar)]
})];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "background-blue-lighter text-align-center padding-x-l padding-y-l",
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, "You have accepted all required policies.", React.createElement("br"), "No more policies available to accept.")];
})];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "list-updating",
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "ApplicationPolicies.model", "ApplicationPolicies_CW.model", "ApplicationPolicies_CW.controller", "UBTJavaScriptUtils.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc$debugger", "UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc$controller.ContinueOnClick.GetDeviceInfoJS", "UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc$controller.GetPendingPoliciesOnAfterFetch.WaitJS", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ButtonOptionsRec", "ApplicationPolicies.model$PolicyAcceptanceDeviceDetailsRec", "UBTConnect.referencesHealth$ApplicationPolicies", "ApplicationPolicies_CW.model$PolicyAcceptanceInformationRec", "UBTConnect.referencesHealth$ApplicationPolicies_CW", "UBTConnect.model$PolicyAcceptanceInformationList", "ApplicationPolicies_CW.controller$CanOpenApplicationPolicyDirectlyViaUrl", "UBTJavaScriptUtils.controller$JSUtils_PageOpenInNewTab", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "ApplicationPolicies_CW.controller$Set_PolicsyIsLoading", "ApplicationPolicies_CW.controller$Get_PolicsyIsLoading", "ApplicationPolicies_CW.controller$OpenApplicationPolicy"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, ApplicationPoliciesModel, ApplicationPolicies_CWModel, ApplicationPolicies_CWController, UBTJavaScriptUtilsController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_Policies_Policy_Custom_AcceptPendingPolicies_mvc_Debugger, UBTConnect_App_Policies_Policy_Custom_AcceptPendingPolicies_mvc_controller_ContinueOnClick_GetDeviceInfoJS, UBTConnect_App_Policies_Policy_Custom_AcceptPendingPolicies_mvc_controller_GetPendingPoliciesOnAfterFetch_WaitJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
getPendingPolicies$DataActRefresh: 0
};
this.dataFetchDependentsGraph = {
getPendingPolicies$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions
Controller.prototype.acceptPolicies$ServerAction = function (policiesIn, deviceDetailsIn, callContext) {
var controller = this.controller;
var inputs = {
Policies: OS.DataConversion.ServerDataConverter.to(policiesIn, OS.DataTypes.DataTypes.RecordList),
DeviceDetails: OS.DataConversion.ServerDataConverter.to(deviceDetailsIn, OS.DataTypes.DataTypes.Record)
};
return controller.callServerAction("AcceptPolicies", "screenservices/UBTConnect/App_Policies/Policy_Custom_AcceptPendingPolicies/ActionAcceptPolicies", "D2YKyy2iWgeUDz9orPp+6Q", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
});
};

// Aggregates and Data Actions
Controller.prototype.getPendingPolicies$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:eNJrdtrK0EKgCmimWjH41A:/NRWebFlows.I4M8DfSfs021oL6trUlQgw/NodesShownInESpaceTree.WZiBfQZgIUC9e38ByLpZsQ/DataActions.eNJrdtrK0EKgCmimWjH41A:BVbfULyqU5O9X1wFLYl4WQ", "UBTConnect", "GetPendingPolicies", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "App_Policies/Policy_Custom_AcceptPendingPolicies/GetPendingPolicies");
return controller.callDataAction("DataActionGetPendingPolicies", "screenservices/UBTConnect/App_Policies/Policy_Custom_AcceptPendingPolicies/DataActionGetPendingPolicies", "QLc3naLM6zG6Br+X1H8p9A", function (b) {
model.variables.getPendingPoliciesDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getPendingPoliciesDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getPendingPoliciesDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "App_Policies/Policy_Custom_AcceptPendingPolicies/GetPendingPolicies On After Fetch");
return controller._getPendingPoliciesOnAfterFetch$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:eNJrdtrK0EKgCmimWjH41A", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getPendingPolicies$DataActRefresh"];
// Client Actions
Controller.prototype._toggleSelectAllCheckBox$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ToggleSelectAllCheckBox");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Ft45OU+FZkmo9+FVwtCSyA:/NRWebFlows.I4M8DfSfs021oL6trUlQgw/NodesShownInESpaceTree.WZiBfQZgIUC9e38ByLpZsQ/ClientActions.Ft45OU+FZkmo9+FVwtCSyA:nv9asqEyul656litQ9Aj0g", "UBTConnect", "ToggleSelectAllCheckBox", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eHBv9yNfWUqSnMMwtJoX7A", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TU5XPzvtHUm+RxaeV28C4w", callContext.id);
// IsAllSelected = notIsAllSelected
model.variables.isAllSelectedVar = !(model.variables.isAllSelectedVar);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dELMEYr+pk6dLpo8bhUs6g", callContext.id);
// Execute Action: SelectAllCheckboxOnChange
controller._selectAllCheckboxOnChange$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:aU_PYaN1w02OAQ3jqqWw7g", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Ft45OU+FZkmo9+FVwtCSyA", callContext.id);
}

};
Controller.prototype._onParametersChanged$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:PYCNRsi_AE+Jhmdduc1ihg:/NRWebFlows.I4M8DfSfs021oL6trUlQgw/NodesShownInESpaceTree.WZiBfQZgIUC9e38ByLpZsQ/ClientActions.PYCNRsi_AE+Jhmdduc1ihg:R1l7EhaMs1UADr2SX7bZTw", "UBTConnect", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uTWy_qtPrEOVSXY3DLTWUw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HNWDam6ArES8zPdcLv8rYA", callContext.id);
// Refresh Query: GetPendingPolicies
var result = controller.getPendingPolicies$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4ejbhqtUCEyrOkWttJKEdA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:PYCNRsi_AE+Jhmdduc1ihg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:PYCNRsi_AE+Jhmdduc1ihg", callContext.id);
throw ex;

});
};
Controller.prototype._toggleCheckBox$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ToggleCheckBox");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:RR5_axeLg0OB8B8QC0FYzg:/NRWebFlows.I4M8DfSfs021oL6trUlQgw/NodesShownInESpaceTree.WZiBfQZgIUC9e38ByLpZsQ/ClientActions.RR5_axeLg0OB8B8QC0FYzg:Icio7QE0OlNqVGRU7mrqIw", "UBTConnect", "ToggleCheckBox", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2GUE0_uWWUegfKoAwyY_EQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jDVIfQ9UHEWNjwE6O10bUA", callContext.id);
// GetPendingPolicies.Policies.Current.IsSelected = notGetPendingPolicies.Policies.Current.IsSelected
model.variables.getPendingPoliciesDataAct.policiesOut.getCurrent(callContext.iterationContext).isSelectedAttr = !(model.variables.getPendingPoliciesDataAct.policiesOut.getCurrent(callContext.iterationContext).isSelectedAttr);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ltF+3VPdQ0iF0aZV1iDeQw", callContext.id);
// Execute Action: SelectCheckboxOnChange
controller._selectCheckboxOnChange$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kB3vKX+r3UiEziGmlU85ag", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:RR5_axeLg0OB8B8QC0FYzg", callContext.id);
}

};
Controller.prototype._continueOnClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ContinueOnClick");
callContext = controller.callContext(callContext);
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var listFilterSelectedVar = new OS.DataTypes.VariableHolder();
var getDeviceInfoJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.communicationExceptionVar = communicationExceptionVar;
varBag.listFilterSelectedVar = listFilterSelectedVar;
varBag.getDeviceInfoJSResult = getDeviceInfoJSResult;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:KSj2g6BbPkqCy1pSWmtYkQ:/NRWebFlows.I4M8DfSfs021oL6trUlQgw/NodesShownInESpaceTree.WZiBfQZgIUC9e38ByLpZsQ/ClientActions.KSj2g6BbPkqCy1pSWmtYkQ:UivZc3wnCTSEESLiXzylKg", "UBTConnect", "ContinueOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:x36g68E22k+5mPhu2tYbyw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wSxStPiQokuiatbV2s_GiQ", callContext.id);
// Execute Action: ListFilterSelected
listFilterSelectedVar.value = OS.SystemActions.listFilter(model.variables.getPendingPoliciesDataAct.policiesOut, function (p) {
return p.isSelectedAttr;
}, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XktL2cuk8EakhYPK+kZeyw", callContext.id);
getDeviceInfoJSResult.value = controller.safeExecuteJSNode(UBTConnect_App_Policies_Policy_Custom_AcceptPendingPolicies_mvc_controller_ContinueOnClick_GetDeviceInfoJS, "GetDeviceInfo", "ContinueOnClick", {
UserAgent: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
IsVirtual: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
UniqueId: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Manufacturer: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Model: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Platform: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Serial: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Version: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
CordovaVersion: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
AppVersion: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
NetworkConnectionType: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.ContinueOnClick$getDeviceInfoJSResult"))();
jsNodeResult.userAgentOut = OS.DataConversion.JSNodeParamConverter.from($parameters.UserAgent, OS.DataTypes.DataTypes.Text);
jsNodeResult.isVirtualOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsVirtual, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.uniqueIdOut = OS.DataConversion.JSNodeParamConverter.from($parameters.UniqueId, OS.DataTypes.DataTypes.Text);
jsNodeResult.manufacturerOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Manufacturer, OS.DataTypes.DataTypes.Text);
jsNodeResult.modelOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Model, OS.DataTypes.DataTypes.Text);
jsNodeResult.platformOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Platform, OS.DataTypes.DataTypes.Text);
jsNodeResult.serialOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Serial, OS.DataTypes.DataTypes.Text);
jsNodeResult.versionOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Version, OS.DataTypes.DataTypes.Text);
jsNodeResult.cordovaVersionOut = OS.DataConversion.JSNodeParamConverter.from($parameters.CordovaVersion, OS.DataTypes.DataTypes.Text);
jsNodeResult.appVersionOut = OS.DataConversion.JSNodeParamConverter.from($parameters.AppVersion, OS.DataTypes.DataTypes.Text);
jsNodeResult.networkConnectionTypeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.NetworkConnectionType, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+74j9zraDUKcHO6mNwFLlw", callContext.id);
// Execute Action: AcceptPolicies
model.flush();
return controller.acceptPolicies$ServerAction(OS.DataConversion.JSConversions.typeConvertRecordList(listFilterSelectedVar.value.filteredListOut, new OS.DataTypes.LongIntegerList(), function (source, target) {
target = source.policyInformationAttr.idAttr;
return target;
}), function () {
var rec = new ApplicationPoliciesModel.PolicyAcceptanceDeviceDetailsRec();
rec.uniqueIdAttr = getDeviceInfoJSResult.value.uniqueIdOut;
rec.platformAttr = getDeviceInfoJSResult.value.platformOut;
rec.manufacturerAttr = getDeviceInfoJSResult.value.manufacturerOut;
rec.modelAttr = getDeviceInfoJSResult.value.modelOut;
return rec;
}(), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:deoPhwJHZEirqmonW9Glsw", callContext.id);
// Trigger Event: AcceptedAll
return controller.acceptedAll$Action(callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:koLD14aDV0CwzRDBUH_GLA", callContext.id);
});
}).catch(function (ex) {
OS.Logger.trace("Policy_Custom_AcceptPendingPolicies.ContinueOnClick", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(communicationExceptionVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2KFhISu_rkOfdckmvLGxPg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Ou0N1zVXqk2Xv4bj3Te+zg", callContext.id);
// Trigger Event: NetworkError
return controller.networkError$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LHJ2Lm6Mukm8EMLZAANyLA", callContext.id);
return OS.Flow.returnAsync();

});
});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:KSj2g6BbPkqCy1pSWmtYkQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:KSj2g6BbPkqCy1pSWmtYkQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.ContinueOnClick$getDeviceInfoJSResult", [{
name: "UserAgent",
attrName: "userAgentOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "IsVirtual",
attrName: "isVirtualOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "UniqueId",
attrName: "uniqueIdOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Manufacturer",
attrName: "manufacturerOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Model",
attrName: "modelOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Platform",
attrName: "platformOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Serial",
attrName: "serialOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Version",
attrName: "versionOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "CordovaVersion",
attrName: "cordovaVersionOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "AppVersion",
attrName: "appVersionOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "NetworkConnectionType",
attrName: "networkConnectionTypeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._getPendingPoliciesOnAfterFetch$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("GetPendingPoliciesOnAfterFetch");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:_plJkJu2hka4R15jtOPTbw:/NRWebFlows.I4M8DfSfs021oL6trUlQgw/NodesShownInESpaceTree.WZiBfQZgIUC9e38ByLpZsQ/ClientActions._plJkJu2hka4R15jtOPTbw:ikGtgd5xBDgp55iq6L6arw", "UBTConnect", "GetPendingPoliciesOnAfterFetch", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:T7nemAigsEODEePimjz53g", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:V+_MsEs+kkmTaj9GSwBqGw", callContext.id) && model.variables.getPendingPoliciesDataAct.policiesOut.isEmpty)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Cm9IL+aWcUiALYovPMd2jA", callContext.id);
return controller.safeExecuteAsyncJSNode(UBTConnect_App_Policies_Policy_Custom_AcceptPendingPolicies_mvc_controller_GetPendingPoliciesOnAfterFetch_WaitJS, "Wait", "GetPendingPoliciesOnAfterFetch", {
WaitTimeSeconds: OS.DataConversion.JSNodeParamConverter.to(5, OS.DataTypes.DataTypes.Integer)
}, function ($parameters) {
}, {}, {}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Dat5ehMqeEiqM5gMlXOpmw", callContext.id);
// Trigger Event: AcceptedAll
return controller.acceptedAll$Action(callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YF5E1EIdhEGKmw0gdlMw5Q", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YF5E1EIdhEGKmw0gdlMw5Q", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:_plJkJu2hka4R15jtOPTbw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:_plJkJu2hka4R15jtOPTbw", callContext.id);
throw ex;

});
};
Controller.prototype._selectCheckboxOnChange$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("SelectCheckboxOnChange");
callContext = controller.callContext(callContext);
var listAllSelectedVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.listAllSelectedVar = listAllSelectedVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:D1+moZezzUanAaeLVZ__Ug:/NRWebFlows.I4M8DfSfs021oL6trUlQgw/NodesShownInESpaceTree.WZiBfQZgIUC9e38ByLpZsQ/ClientActions.D1+moZezzUanAaeLVZ__Ug:0SKEZtyrizdwc7Ek1UC7vg", "UBTConnect", "SelectCheckboxOnChange", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FqIAWi18w0K71xkPz6gAdQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CQXYNjM3gkWeXPqJHoUypQ", callContext.id);
// Execute Action: ListAllSelected
listAllSelectedVar.value = OS.SystemActions.listAll(model.variables.getPendingPoliciesDataAct.policiesOut, function (p) {
return p.isSelectedAttr;
}, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DN5oL9Re1EicMgrqOUPaoA", callContext.id);
// IsAllSelected = ListAllSelected.Result
model.variables.isAllSelectedVar = listAllSelectedVar.value.resultOut;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pBF4ZaqGk0eLrEokXCtKhQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:D1+moZezzUanAaeLVZ__Ug", callContext.id);
}

};
Controller.prototype._onClickPolicy$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClickPolicy");
callContext = controller.callContext(callContext);
var canOpenApplicationPolicyDirectlyViaUrlVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.canOpenApplicationPolicyDirectlyViaUrlVar = canOpenApplicationPolicyDirectlyViaUrlVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:JXtHosM6AUCDlw4JE0Q_Ig:/NRWebFlows.I4M8DfSfs021oL6trUlQgw/NodesShownInESpaceTree.WZiBfQZgIUC9e38ByLpZsQ/ClientActions.JXtHosM6AUCDlw4JE0Q_Ig:UGKo8XwFFQOZRRKhDQm1Kg", "UBTConnect", "OnClickPolicy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AO_gTOCbG0mmt28JmYRPOw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5wKZdB8Q9U2Btd3FNIhUhQ", callContext.id);
// Execute Action: CanOpenApplicationPolicyDirectlyViaUrl
canOpenApplicationPolicyDirectlyViaUrlVar.value = ApplicationPolicies_CWController.default.canOpenApplicationPolicyDirectlyViaUrl$Action(callContext);

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zaN4BM7RkEehcfE5xfWDTA", callContext.id) && canOpenApplicationPolicyDirectlyViaUrlVar.value.canOpenDirectlyOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6xvAxPYQuU2FyzvVcTNxwg", callContext.id);
// Execute Action: JSUtils_PageOpenInNewTab
UBTJavaScriptUtilsController.default.jSUtils_PageOpenInNewTab$Action(model.variables.getPendingPoliciesDataAct.policiesOut.getCurrent(callContext.iterationContext).urlAttr, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gZo9J9SdJEaX556__uktRQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+bqvSwOLCE2ahLIcKhyuFw", callContext.id);
// Execute Action: DetailsOnClick
return controller._detailsOnClick$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:faBskcaEqECCW7ajjfSkPQ", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:JXtHosM6AUCDlw4JE0Q_Ig", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:JXtHosM6AUCDlw4JE0Q_Ig", callContext.id);
throw ex;

});
};
Controller.prototype._detailsOnClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("DetailsOnClick");
callContext = controller.callContext(callContext);
var get_PolicsyIsLoadingVar = new OS.DataTypes.VariableHolder();
var openApplicationPolicyVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.get_PolicsyIsLoadingVar = get_PolicsyIsLoadingVar;
varBag.openApplicationPolicyVar = openApplicationPolicyVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:E3YCo2untUm0C2P1t2J7Og:/NRWebFlows.I4M8DfSfs021oL6trUlQgw/NodesShownInESpaceTree.WZiBfQZgIUC9e38ByLpZsQ/ClientActions.E3YCo2untUm0C2P1t2J7Og:5mbXXMtDe+S92Ko97u8Nmw", "UBTConnect", "DetailsOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:RJGjHyoB4kajzdjF3Plqkg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1e_FgMSMOk+PhVIskmmOEw", callContext.id);
// Execute Action: Get_PolicsyIsLoading
get_PolicsyIsLoadingVar.value = ApplicationPolicies_CWController.default.get_PolicsyIsLoading$Action(callContext);

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:abUfxYyI4E+MCoTu4mwOJw", callContext.id) && get_PolicsyIsLoadingVar.value.isLoadingOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8GK+KrZUrE+VhooZ+3ZXEw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:P4iGvs0FqkODtY7VWPj07Q", callContext.id);
// Execute Action: OpenApplicationPolicy
model.flush();
return ApplicationPolicies_CWController.default.openApplicationPolicy$Action(model.variables.getPendingPoliciesDataAct.policiesOut.getCurrent(callContext.iterationContext).urlAttr, model.variables.getPendingPoliciesDataAct.policiesOut.getCurrent(callContext.iterationContext).policyInformationAttr.policyContentFilenameAttr, model.variables.getPendingPoliciesDataAct.policiesOut.getCurrent(callContext.iterationContext).policyInformationAttr.policyContentTypeAttr, callContext).then(function (value) {
openApplicationPolicyVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JtefKBuCUk6V+I814g0rJQ", callContext.id);
// Execute Action: Set_PolicsyIsLoading
ApplicationPolicies_CWController.default.set_PolicsyIsLoading$Action(false, callContext);
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3BRWUbtunk2Vv6Nuvei9oQ", callContext.id) && openApplicationPolicyVar.value.hasFoundNetworkErrorOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9Q0jTCUrvUGljH0l9QMPvQ", callContext.id);
// Trigger Event: NetworkError
return controller.networkError$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FYlRzP7TiUaHpZ8Ghp93iw", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sbzJDctmYk28nQ4YjOmaBg", callContext.id);
}

});
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:E3YCo2untUm0C2P1t2J7Og", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:E3YCo2untUm0C2P1t2J7Og", callContext.id);
throw ex;

});
};
Controller.prototype._selectAllCheckboxOnChange$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("SelectAllCheckboxOnChange");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:B9hT6b52kE+6meQQ9Mhl8w:/NRWebFlows.I4M8DfSfs021oL6trUlQgw/NodesShownInESpaceTree.WZiBfQZgIUC9e38ByLpZsQ/ClientActions.B9hT6b52kE+6meQQ9Mhl8w:cd0jn7kX4pvXAc8gAHDhGA", "UBTConnect", "SelectAllCheckboxOnChange", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:aCLTHCeU50GMciusOWWHIw", callContext.id);
// Foreach GetPendingPolicies.Policies
callContext.iterationContext.registerIterationStart(model.variables.getPendingPoliciesDataAct.policiesOut);
try {var policiesIterator = callContext.iterationContext.getIterator(model.variables.getPendingPoliciesDataAct.policiesOut);
var policiesIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SV56li5DC0GBvkPdE7CqSg", callContext.id) && (policiesIndex < model.variables.getPendingPoliciesDataAct.policiesOut.length))) {
policiesIterator.currentRowNumber = policiesIndex;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4UPENcDmckulCifWJuzq_Q", callContext.id);
// GetPendingPolicies.Policies.Current.IsSelected = IsAllSelected
model.variables.getPendingPoliciesDataAct.policiesOut.getItem(policiesIndex.valueOf()).isSelectedAttr = model.variables.isAllSelectedVar;
policiesIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.getPendingPoliciesDataAct.policiesOut);
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CKV9Pb_Qq0yNCm_JrQWwJA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:B9hT6b52kE+6meQQ9Mhl8w", callContext.id);
}

};

Controller.prototype.toggleSelectAllCheckBox$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._toggleSelectAllCheckBox$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.toggleCheckBox$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._toggleCheckBox$Action, callContext);

};
Controller.prototype.continueOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._continueOnClick$Action, callContext);

};
Controller.prototype.getPendingPoliciesOnAfterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._getPendingPoliciesOnAfterFetch$Action, callContext);

};
Controller.prototype.selectCheckboxOnChange$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._selectCheckboxOnChange$Action, callContext);

};
Controller.prototype.onClickPolicy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClickPolicy$Action, callContext);

};
Controller.prototype.detailsOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._detailsOnClick$Action, callContext);

};
Controller.prototype.selectAllCheckboxOnChange$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._selectAllCheckboxOnChange$Action, callContext);

};
Controller.prototype.networkError$Action = function () {
return Promise.resolve();
};
Controller.prototype.acceptedAll$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:I4M8DfSfs021oL6trUlQgw:/NRWebFlows.I4M8DfSfs021oL6trUlQgw:hPDi7KzhB_mQ0CGAgMZG7A", "UBTConnect", "App_Policies", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:WZiBfQZgIUC9e38ByLpZsQ:/NRWebFlows.I4M8DfSfs021oL6trUlQgw/NodesShownInESpaceTree.WZiBfQZgIUC9e38ByLpZsQ:XkcJaATTOdClsVN6Ub6V1Q", "UBTConnect", "Policy_Custom_AcceptPendingPolicies", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:WZiBfQZgIUC9e38ByLpZsQ", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:I4M8DfSfs021oL6trUlQgw", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "App_Policies/Policy_Custom_AcceptPendingPolicies On Parameters Changed");
return controller.onParametersChanged$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
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
define("UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc$controller.ContinueOnClick.GetDeviceInfoJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.UserAgent = window.navigator.userAgent;

if (window.device && window.device.uuid) {
    // Native device information
    $parameters.IsVirtual = window.device.isVirtual;
    $parameters.UniqueId = window.device.uuid;
    $parameters.Manufacturer = window.device.manufacturer;
    $parameters.Model = window.device.model;
    $parameters.Platform = window.device.platform;
    $parameters.Serial = window.device.serial;
    $parameters.Version = window.device.version;
    $parameters.CordovaVersion = window.device.cordova;
} else {
    // Web device information
    if (window.matchMedia("(display-mode: standalone)").matches) {
        $parameters.Platform = "PWA";
    } else {
        $parameters.Platform = "Web";
    }

    if (window.crypto && window.crypto.randomUUID) {
        $parameters.UniqueId = window.localStorage["UUID"] || (window.localStorage["UUID"] = window.crypto.randomUUID());
    }
}

// Requires AppVersionPlugin
if (window.AppVersion && window.AppVersion.available) {
    $parameters.AppVersion = window.AppVersion.version + "." + window.AppVersion.build;
}

// NetworkInformation plugin
if (window.navigator && window.navigator.connection && (window.navigator.connection.effectiveType || window.navigator.connection.type)) {
    $parameters.NetworkConnectionType = window.navigator.connection.effectiveType || window.navigator.connection.type;
}
};
});
define("UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc$controller.GetPendingPoliciesOnAfterFetch.WaitJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
window.setTimeout($resolve, 1000 * $parameters.WaitTimeSeconds);
});
};
});

define("UBTConnect.App_Policies.Policy_Custom_AcceptPendingPolicies.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"2KFhISu_rkOfdckmvLGxPg": {
getter: function (varBag, idService) {
return varBag.communicationExceptionVar.value;
}
},
"wSxStPiQokuiatbV2s_GiQ": {
getter: function (varBag, idService) {
return varBag.listFilterSelectedVar.value;
}
},
"XktL2cuk8EakhYPK+kZeyw": {
getter: function (varBag, idService) {
return varBag.getDeviceInfoJSResult.value;
}
},
"Cm9IL+aWcUiALYovPMd2jA": {
getter: function (varBag, idService) {
return varBag.waitJSResult.value;
}
},
"CQXYNjM3gkWeXPqJHoUypQ": {
getter: function (varBag, idService) {
return varBag.listAllSelectedVar.value;
}
},
"5wKZdB8Q9U2Btd3FNIhUhQ": {
getter: function (varBag, idService) {
return varBag.canOpenApplicationPolicyDirectlyViaUrlVar.value;
}
},
"1e_FgMSMOk+PhVIskmmOEw": {
getter: function (varBag, idService) {
return varBag.get_PolicsyIsLoadingVar.value;
}
},
"P4iGvs0FqkODtY7VWPj07Q": {
getter: function (varBag, idService) {
return varBag.openApplicationPolicyVar.value;
}
},
"KiIuquIYgkOzviP+LfvLTQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isAllSelectedVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"FLGx_uDOy0WVexlLzCosdw": {
getter: function (varBag, idService) {
return varBag.model.variables.policyApplicationsIn;
}
},
"sFPbAczBOkatjm5SedkTuA": {
getter: function (varBag, idService) {
return varBag.model.variables.countryIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"MCA9agbA6Uee_ybjP5dR5g": {
getter: function (varBag, idService) {
return varBag.model.variables.contentBlockIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"eNJrdtrK0EKgCmimWjH41A": {
getter: function (varBag, idService) {
return varBag.model.variables.getPendingPoliciesDataAct;
}
},
"h9XUK+aLq0C9KJa8ipGLZw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"Za26tuTkN0mQtwiqJMZTPw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"TNEHkrB4wkqWTYh_2eUYfA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"PK9rVXPdc0idpED6xLQcdg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
