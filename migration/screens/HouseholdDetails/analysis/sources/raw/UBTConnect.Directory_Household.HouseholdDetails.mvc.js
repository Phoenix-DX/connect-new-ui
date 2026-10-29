define("UBTConnect.Directory_Household.HouseholdDetails.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "Connect_Household_CS.model", "APIDomain_Directory_IS.model", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$model", "UBTConnect.Directory_Household.HouseholdDetails_Block.mvc$model", "UBTConnect.App_Common.BottomBarMenu.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "UBTConnect.model$HouseholdPreviewStructureRec", "Connect_Household_CS.model$UI_AccountFormRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "Connect_Household_CS.model$UI_AccountForm_PersonalInformationRec", "UBTConnect.model$TextTextTextCustom_Address_ItemListRecord", "APIDomain_Directory_IS.model$Custom_Address_ItemRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnect.model$Custom_Address_ItemList", "Connect_Household_CS.model$UI_AccountForm_ContactInformationRec", "Connect_Household_CS.model$UI_AccountForm_IdentificationInformationRec"], function (OutSystems, UBTConnectModel, Connect_Household_CSModel, APIDomain_Directory_ISModel, UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel, UBTConnect_Directory_Household_HouseholdDetails_Block_mvcModel, UBTConnect_App_Common_BottomBarMenu_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("LocalityName", "localityNameVar", "LocalityName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("CountryName", "countryNameVar", "CountryName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("DeceasedOrAncestry_View", "deceasedOrAncestry_ViewVar", "DeceasedOrAncestry_View", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("HouseholdId", "householdIdIn", "HouseholdId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_householdIdInDataFetchStatus", "_householdIdInDataFetchStatus", "_householdIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (((UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel.hasValidationWidgets || UBTConnect_Directory_Household_HouseholdDetails_Block_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_BottomBarMenu_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("HouseholdId" in inputs) {
this.variables.householdIdIn = OS.DataConversion.ServerDataConverter.from(inputs.HouseholdId, OS.DataTypes.DataTypes.LongInteger);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Directory_Household.HouseholdDetails");
});
define("UBTConnect.Directory_Household.HouseholdDetails.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Household_CS.model", "APIDomain_Directory_IS.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Household.HouseholdDetails.mvc$model", "UBTConnect.Directory_Household.HouseholdDetails.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.Directory_Household.HouseholdDetails_Block.mvc$view", "UBTConnect.App_Common.BottomBarMenu.mvc$view", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "UBTConnect.model$HouseholdPreviewStructureRec", "Connect_Household_CS.model$UI_AccountFormRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "Connect_Household_CS.model$UI_AccountForm_PersonalInformationRec", "UBTConnect.model$TextTextTextCustom_Address_ItemListRecord", "APIDomain_Directory_IS.model$Custom_Address_ItemRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnect.model$Custom_Address_ItemList", "Connect_Household_CS.model$UI_AccountForm_ContactInformationRec", "Connect_Household_CS.model$UI_AccountForm_IdentificationInformationRec"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Household_CSModel, APIDomain_Directory_ISModel, React, OSView, UBTConnect_Directory_Household_HouseholdDetails_mvc_model, UBTConnect_Directory_Household_HouseholdDetails_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, OSWidgets, UBTConnect_Directory_Household_HouseholdDetails_Block_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view) {
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
        View.displayName = "Directory_Household.HouseholdDetails";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, UBTConnect_Directory_Household_HouseholdDetails_Block_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Directory_Household_HouseholdDetails_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Directory_Household_HouseholdDetails_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "HouseholdDetails";
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
In_IsPrimaryColor: false
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
name: "DetailPage",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Header_Title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
style: "font-semi-bold text-neutral-10",
value: model.getCachedValue(idService.getId("zrKXgyNi4k2rmKIhdzm+nA.Value"), function () {
return ((((model.variables.localityNameVar) !== (""))) ? ((model.variables.localityNameVar + ((((model.variables.countryNameVar) !== (""))) ? ((", " + model.variables.countryNameVar)) : ("")))) : (model.variables.countryNameVar));
}, function () {
return model.variables.localityNameVar;
}, function () {
return model.variables.countryNameVar;
}),
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
return [React.createElement(UBTConnect_Directory_Household_HouseholdDetails_Block_mvc_view, {
inputs: {
HouseholdId: model.variables.householdIdIn
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
householdDataFetched$Action: function (localityNameIn, countryNameIn, deceasedOrAncestry_ViewIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Household/HouseholdDetails_Block HouseholdDataFetched");
controller.handler_HouseholdDetails_DataFetched$Action(localityNameIn, countryNameIn, deceasedOrAncestry_ViewIn, controller.callContext(eventHandlerContext));
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
uuid: "2",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_CarouselTag: PlaceholderContent.Empty
},
_dependencies: []
})];
}),
bottom: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_App_Common_BottomBarMenu_mvc_view, {
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
uuid: "3",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
placeholder_CommonUI_Inside_Layout: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, {
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
uuid: "4",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.householdIdIn), asPrimitiveValue(model.variables.countryNameVar), asPrimitiveValue(model.variables.localityNameVar)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("UBTConnect.Directory_Household.HouseholdDetails.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Household_CS.model", "APIDomain_Directory_IS.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Household.HouseholdDetails.mvc$debugger", "UBTConnect.Directory_Household.controller", "UBTConnect.model$HouseholdPreviewStructureRec", "Connect_Household_CS.model$UI_AccountFormRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "Connect_Household_CS.model$UI_AccountForm_PersonalInformationRec", "UBTConnect.model$TextTextTextCustom_Address_ItemListRecord", "APIDomain_Directory_IS.model$Custom_Address_ItemRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnect.model$Custom_Address_ItemList", "Connect_Household_CS.model$UI_AccountForm_ContactInformationRec", "Connect_Household_CS.model$UI_AccountForm_IdentificationInformationRec"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Household_CSModel, APIDomain_Directory_ISModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Household_HouseholdDetails_mvc_Debugger, _flow_UBTConnect_Directory_HouseholdController) {
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
Controller.prototype._handler_HouseholdDetails_DataFetched$Action = function (evt_LocalityNameIn, evt_CountryNameIn, evt_DeceasedOrAncestry_ViewIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_HouseholdDetails_DataFetched");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Household.HouseholdDetails.Handler_HouseholdDetails_DataFetched$vars"))());
vars.value.evt_LocalityNameInLocal = evt_LocalityNameIn;
vars.value.evt_CountryNameInLocal = evt_CountryNameIn;
vars.value.evt_DeceasedOrAncestry_ViewInLocal = evt_DeceasedOrAncestry_ViewIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:uLPuDRX_EEetUqjPBRg4ZA:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.jt1+i56By0e4UBDX9kwIVQ/ClientActions.uLPuDRX_EEetUqjPBRg4ZA:gZ8pPwiyXU5XSY81QwMBwQ", "UBTConnect", "Handler_HouseholdDetails_DataFetched", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kdNFcgf5EEmaVCRAV_PjNQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_4+OXxG2oUyr_kG+Xlb6gQ", callContext.id);
// LocalityName = Evt_LocalityName
model.variables.localityNameVar = vars.value.evt_LocalityNameInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_4+OXxG2oUyr_kG+Xlb6gQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// CountryName = Evt_CountryName
model.variables.countryNameVar = vars.value.evt_CountryNameInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_4+OXxG2oUyr_kG+Xlb6gQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// DeceasedOrAncestry_View = Evt_DeceasedOrAncestry_View
model.variables.deceasedOrAncestry_ViewVar = vars.value.evt_DeceasedOrAncestry_ViewInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uXfvhlKXlkqmDwxs1t_WRg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:uLPuDRX_EEetUqjPBRg4ZA", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_Household.HouseholdDetails.Handler_HouseholdDetails_DataFetched$vars", [{
name: "Evt_LocalityName",
attrName: "evt_LocalityNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Evt_CountryName",
attrName: "evt_CountryNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Evt_DeceasedOrAncestry_View",
attrName: "evt_DeceasedOrAncestry_ViewInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);

Controller.prototype.handler_HouseholdDetails_DataFetched$Action = function (evt_LocalityNameIn, evt_CountryNameIn, evt_DeceasedOrAncestry_ViewIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_HouseholdDetails_DataFetched$Action, callContext, evt_LocalityNameIn, evt_CountryNameIn, evt_DeceasedOrAncestry_ViewIn);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:UzAQerKaHEuDhnx4QUJtIw:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw:t9nDzAZAuYZJViBgLBCv_w", "UBTConnect", "Directory_Household", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:jt1+i56By0e4UBDX9kwIVQ:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.jt1+i56By0e4UBDX9kwIVQ:xKf0pJNT_WRVjPNddbaTOA", "UBTConnect", "HouseholdDetails", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:jt1+i56By0e4UBDX9kwIVQ", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:UzAQerKaHEuDhnx4QUJtIw", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return _flow_UBTConnect_Directory_HouseholdController.default.handleError(ex, this.callContext());
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

define("UBTConnect.Directory_Household.HouseholdDetails.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"qgLeQhZFq0uRjeU6Gm7lkg": {
getter: function (varBag, idService) {
return varBag.vars.value.evt_LocalityNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"bpQMVPZyGEWxCmXDBRxT8A": {
getter: function (varBag, idService) {
return varBag.vars.value.evt_CountryNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Ix4Zp6YCmkmiWuwi7dIvsg": {
getter: function (varBag, idService) {
return varBag.vars.value.evt_DeceasedOrAncestry_ViewInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"5kC43djU+ESeezGta5IQEQ": {
getter: function (varBag, idService) {
return varBag.model.variables.localityNameVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"XPLVX87C1kal11m5Utk7jg": {
getter: function (varBag, idService) {
return varBag.model.variables.countryNameVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"j_YGXH8HgU+ctzedKU0l7Q": {
getter: function (varBag, idService) {
return varBag.model.variables.deceasedOrAncestry_ViewVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"MTsthNwYL0OVNIm58L4rbQ": {
getter: function (varBag, idService) {
return varBag.model.variables.householdIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"wDZsJAsMfUi+GyHKhDCIVw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DetailPage"));
})(varBag.model, idService);
}
},
"HidcCu+EPkWY6YDbLcCzBw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Title"));
})(varBag.model, idService);
}
},
"CDCa1TjJIU2P8WqvkBR5xQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Right"));
})(varBag.model, idService);
}
},
"EwIlnFzdiE2m7Q5_L3_HjA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"JThSM8xBR0qd8ecWEiZeDw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"GOcf31BXI0iuh7PTs3qSmQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_CarouselTag"));
})(varBag.model, idService);
}
},
"r1Jo_TctqkG0fIgr7Khw8g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
},
"ftcxJW99O0WDCVM63xQoCg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
