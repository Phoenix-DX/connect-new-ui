define("UBTConnect.Directory_Household.Household_Relations.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnect.Directory_Household.HouseholdRelations_Block.mvc$model", "UBTConnect.App_Common.BottomBarMenu.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec"], function (OutSystems, UBTConnectModel, UBTConnectLibraryModel, UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel, UBTConnect_Directory_Household_HouseholdRelations_Block_mvcModel, UBTConnect_App_Common_BottomBarMenu_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("PageTitle", "pageTitleVar", "PageTitle", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("HouseholdId", "householdIdIn", "HouseholdId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_householdIdInDataFetchStatus", "_householdIdInDataFetchStatus", "_householdIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("MemberId", "memberIdIn", "MemberId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_memberIdInDataFetchStatus", "_memberIdInDataFetchStatus", "_memberIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = ((((UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets) || UBTConnect_Directory_Household_HouseholdRelations_Block_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_BottomBarMenu_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("HouseholdId" in inputs) {
this.variables.householdIdIn = OS.DataConversion.ServerDataConverter.from(inputs.HouseholdId, OS.DataTypes.DataTypes.LongInteger);
}

if("MemberId" in inputs) {
this.variables.memberIdIn = OS.DataConversion.ServerDataConverter.from(inputs.MemberId, OS.DataTypes.DataTypes.LongInteger);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Directory_Household.Household_Relations");
});
define("UBTConnect.Directory_Household.Household_Relations.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Household.Household_Relations.mvc$model", "UBTConnect.Directory_Household.Household_Relations.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnect.Directory_Household.HouseholdRelations_Block.mvc$view", "UBTConnect.App_Common.BottomBarMenu.mvc$view", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, React, OSView, UBTConnect_Directory_Household_Household_Relations_mvc_model, UBTConnect_Directory_Household_Household_Relations_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnect_Directory_Household_HouseholdRelations_Block_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view) {
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
        View.displayName = "Directory_Household.Household_Relations";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnect_Directory_Household_HouseholdRelations_Block_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Directory_Household_Household_Relations_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Directory_Household_Household_Relations_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "Household_Relations";
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Header_Title: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_Text: model.variables.pageTitleVar,
In_TextOptions: model.getCachedValue(idService.getId("NelfUn+fU0SVw17Zlp7zsQ.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
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
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
placeholder_Header_Right: PlaceholderContent.Empty,
headerContent: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Directory_Household_HouseholdRelations_Block_mvc_view, {
inputs: {
MemberId: model.variables.memberIdIn,
HouseholdId: model.variables.householdIdIn
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
relationsDetails_Fetched$Action: function (relationsTitleIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Household/HouseholdRelations_Block RelationsDetails_Fetched");
controller.handler_OnRelationsDetailsFetched$Action(relationsTitleIn, controller.callContext(eventHandlerContext));
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
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
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
alias: "4"
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
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.householdIdIn), asPrimitiveValue(model.variables.memberIdIn), asPrimitiveValue(model.variables.pageTitleVar)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("UBTConnect.Directory_Household.Household_Relations.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Household.Household_Relations.mvc$debugger", "UBTConnect.Directory_Household.controller", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Household_Household_Relations_mvc_Debugger, _flow_UBTConnect_Directory_HouseholdController) {
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
Controller.prototype._handler_OnRelationsDetailsFetched$Action = function (relationsTitleIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_OnRelationsDetailsFetched");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Household.Household_Relations.Handler_OnRelationsDetailsFetched$vars"))());
vars.value.relationsTitleInLocal = relationsTitleIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:UNxToBlRUUeKuyyLFOBzGQ:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.2oPLN0mGbUq8zG2XTBdH1Q/ClientActions.UNxToBlRUUeKuyyLFOBzGQ:ICdbZ6avzCbooHRCHnUh3w", "UBTConnect", "Handler_OnRelationsDetailsFetched", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PRRKLg5qYESm4L_0CINJcQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5OdgWytQdESFkAd3bh5U9g", callContext.id);
// PageTitle = RelationsTitle
model.variables.pageTitleVar = vars.value.relationsTitleInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ju7fFaj2I0WTolL4T8V7tw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:UNxToBlRUUeKuyyLFOBzGQ", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_Household.Household_Relations.Handler_OnRelationsDetailsFetched$vars", [{
name: "RelationsTitle",
attrName: "relationsTitleInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);

Controller.prototype.handler_OnRelationsDetailsFetched$Action = function (relationsTitleIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_OnRelationsDetailsFetched$Action, callContext, relationsTitleIn);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:UzAQerKaHEuDhnx4QUJtIw:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw:t9nDzAZAuYZJViBgLBCv_w", "UBTConnect", "Directory_Household", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:2oPLN0mGbUq8zG2XTBdH1Q:/NRWebFlows.UzAQerKaHEuDhnx4QUJtIw/NodesShownInESpaceTree.2oPLN0mGbUq8zG2XTBdH1Q:DbdizOXZ+Su424aVra7izg", "UBTConnect", "Household_Relations", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:2oPLN0mGbUq8zG2XTBdH1Q", callContext.id);
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

define("UBTConnect.Directory_Household.Household_Relations.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"x708AbBMXU2IVpsPMl8HQA": {
getter: function (varBag, idService) {
return varBag.vars.value.relationsTitleInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ejYoopCH2k++kAf_8h9KoA": {
getter: function (varBag, idService) {
return varBag.model.variables.pageTitleVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"uVqIkS11pU2GoDHhgD6gEg": {
getter: function (varBag, idService) {
return varBag.model.variables.householdIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"qPgw84yFLUWUngNzruCokQ": {
getter: function (varBag, idService) {
return varBag.model.variables.memberIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"jWQJZKkVVEGTVMW0ODhdeQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Title"));
})(varBag.model, idService);
}
},
"0BlmlBUsdECGU+DmdXOznQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Right"));
})(varBag.model, idService);
}
},
"hyn2rx3Tik2NpeS5varIQA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"E8Gw_K9r40iatvs7szK+ig": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"YClhm5bHIkul3IL9YvJg5Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
},
"nucHC+yagkmU31OCNp7MHw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
