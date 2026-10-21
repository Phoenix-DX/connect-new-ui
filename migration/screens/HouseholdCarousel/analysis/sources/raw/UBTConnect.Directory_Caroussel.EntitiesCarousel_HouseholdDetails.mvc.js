define("UBTConnect.Directory_Caroussel.EntitiesCarousel_HouseholdDetails.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "Connect_Household_CS.model", "APIDomain_Directory_IS.model", "UBTConnect.Directory_Household.HouseholdDetails_Block.mvc$model", "UBTConnect.model$HouseholdPreviewStructureRec", "Connect_Household_CS.model$UI_AccountFormRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "Connect_Household_CS.model$UI_AccountForm_PersonalInformationRec", "UBTConnect.model$TextTextTextCustom_Address_ItemListRecord", "APIDomain_Directory_IS.model$Custom_Address_ItemRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnect.model$Custom_Address_ItemList", "Connect_Household_CS.model$UI_AccountForm_ContactInformationRec", "Connect_Household_CS.model$UI_AccountForm_IdentificationInformationRec"], function (OutSystems, UBTConnectModel, Connect_Household_CSModel, APIDomain_Directory_ISModel, UBTConnect_Directory_Household_HouseholdDetails_Block_mvcModel) {
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
this.attr("In_HouseholdId", "in_HouseholdIdIn", "In_HouseholdId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_HouseholdIdInDataFetchStatus", "_in_HouseholdIdInDataFetchStatus", "_in_HouseholdIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_IsSkeletonOnly", "in_IsSkeletonOnlyIn", "In_IsSkeletonOnly", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsSkeletonOnlyInDataFetchStatus", "_in_IsSkeletonOnlyInDataFetchStatus", "_in_IsSkeletonOnlyInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = UBTConnect_Directory_Household_HouseholdDetails_Block_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_HouseholdId" in inputs) {
this.variables.in_HouseholdIdIn = inputs.In_HouseholdId;
if("_in_HouseholdIdInDataFetchStatus" in inputs) {
this.variables._in_HouseholdIdInDataFetchStatus = inputs._in_HouseholdIdInDataFetchStatus;
}

}

if("In_IsSkeletonOnly" in inputs) {
this.variables.in_IsSkeletonOnlyIn = inputs.In_IsSkeletonOnly;
if("_in_IsSkeletonOnlyInDataFetchStatus" in inputs) {
this.variables._in_IsSkeletonOnlyInDataFetchStatus = inputs._in_IsSkeletonOnlyInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Directory_Caroussel.EntitiesCarousel_HouseholdDetails");
});
define("UBTConnect.Directory_Caroussel.EntitiesCarousel_HouseholdDetails.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Household_CS.model", "APIDomain_Directory_IS.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Caroussel.EntitiesCarousel_HouseholdDetails.mvc$model", "UBTConnect.Directory_Caroussel.EntitiesCarousel_HouseholdDetails.mvc$controller", "UBTConnect.clientVariables", "UBTConnect.Directory_Household.HouseholdDetails_Block.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.model$HouseholdPreviewStructureRec", "Connect_Household_CS.model$UI_AccountFormRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "Connect_Household_CS.model$UI_AccountForm_PersonalInformationRec", "UBTConnect.model$TextTextTextCustom_Address_ItemListRecord", "APIDomain_Directory_IS.model$Custom_Address_ItemRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnect.model$Custom_Address_ItemList", "Connect_Household_CS.model$UI_AccountForm_ContactInformationRec", "Connect_Household_CS.model$UI_AccountForm_IdentificationInformationRec"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Household_CSModel, APIDomain_Directory_ISModel, React, OSView, UBTConnect_Directory_Caroussel_EntitiesCarousel_HouseholdDetails_mvc_model, UBTConnect_Directory_Caroussel_EntitiesCarousel_HouseholdDetails_mvc_controller, UBTConnectClientVariables, UBTConnect_Directory_Household_HouseholdDetails_Block_mvc_view, OSWidgets) {
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
        View.displayName = "Directory_Caroussel.EntitiesCarousel_HouseholdDetails";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_Directory_Household_HouseholdDetails_Block_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Directory_Caroussel_EntitiesCarousel_HouseholdDetails_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Directory_Caroussel_EntitiesCarousel_HouseholdDetails_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnect_Directory_Household_HouseholdDetails_Block_mvc_view, {
inputs: {
HouseholdId: model.variables.in_HouseholdIdIn,
_householdIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HouseholdIdInDataFetchStatus),
In_IsSkeletonOnly: model.variables.in_IsSkeletonOnlyIn,
_in_IsSkeletonOnlyInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsSkeletonOnlyInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
householdDataFetched$Action: function (localityNameIn, countryNameIn, deceasedOrAncestry_ViewIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Household/HouseholdDetails_Block HouseholdDataFetched");
return controller.handler_HouseholdDetails_DataFetched$Action(localityNameIn, countryNameIn, deceasedOrAncestry_ViewIn, controller.callContext(eventHandlerContext));
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_CarouselTag: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_CarouselTag,
_idProps: {
service: idService,
name: "Placeholder_CarouselTag"
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
define("UBTConnect.Directory_Caroussel.EntitiesCarousel_HouseholdDetails.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Household_CS.model", "APIDomain_Directory_IS.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Caroussel.EntitiesCarousel_HouseholdDetails.mvc$debugger", "UBTConnect.model$HouseholdPreviewStructureRec", "Connect_Household_CS.model$UI_AccountFormRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "Connect_Household_CS.model$UI_AccountForm_PersonalInformationRec", "UBTConnect.model$TextTextTextCustom_Address_ItemListRecord", "APIDomain_Directory_IS.model$Custom_Address_ItemRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnect.model$Custom_Address_ItemList", "Connect_Household_CS.model$UI_AccountForm_ContactInformationRec", "Connect_Household_CS.model$UI_AccountForm_IdentificationInformationRec"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Household_CSModel, APIDomain_Directory_ISModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Caroussel_EntitiesCarousel_HouseholdDetails_mvc_Debugger) {
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
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Caroussel.EntitiesCarousel_HouseholdDetails.Handler_HouseholdDetails_DataFetched$vars"))());
vars.value.evt_LocalityNameInLocal = evt_LocalityNameIn;
vars.value.evt_CountryNameInLocal = evt_CountryNameIn;
vars.value.evt_DeceasedOrAncestry_ViewInLocal = evt_DeceasedOrAncestry_ViewIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:f8ujqz1+zEqloDqIkkIEXQ:/NRWebFlows.3kpgKiDrmECLIcldYvdd+A/NodesShownInESpaceTree.kb6mf5icska1DtIjILIC0Q/ClientActions.f8ujqz1+zEqloDqIkkIEXQ:mL7bhgtiOXOvj9rVDvTLpQ", "UBTConnect", "Handler_HouseholdDetails_DataFetched", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lcXgaEOXmUKPALgmkbPQFA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oVGEKRklB0C76m74jQ05LQ", callContext.id);
// LocalityName = Evt_LocalityName
model.variables.localityNameVar = vars.value.evt_LocalityNameInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oVGEKRklB0C76m74jQ05LQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// CountryName = Evt_CountryName
model.variables.countryNameVar = vars.value.evt_CountryNameInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oVGEKRklB0C76m74jQ05LQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// DeceasedOrAncestry_View = Evt_DeceasedOrAncestry_View
model.variables.deceasedOrAncestry_ViewVar = vars.value.evt_DeceasedOrAncestry_ViewInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nyTa+ZsW90u+cQAlDFDWhQ", callContext.id);
// Trigger Event: Event_SetHeader
return controller.event_SetHeader$Action(((vars.value.evt_LocalityNameInLocal + ", ") + vars.value.evt_CountryNameInLocal), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UpXNv_46zESLGKIfcBl1rg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:f8ujqz1+zEqloDqIkkIEXQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:f8ujqz1+zEqloDqIkkIEXQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Directory_Caroussel.EntitiesCarousel_HouseholdDetails.Handler_HouseholdDetails_DataFetched$vars", [{
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
Controller.prototype.event_SetHeader$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:3kpgKiDrmECLIcldYvdd+A:/NRWebFlows.3kpgKiDrmECLIcldYvdd+A:uGYi+UeKE4QciHgKGLa3sw", "UBTConnect", "Directory_Caroussel", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:kb6mf5icska1DtIjILIC0Q:/NRWebFlows.3kpgKiDrmECLIcldYvdd+A/NodesShownInESpaceTree.kb6mf5icska1DtIjILIC0Q:XdKb+OBYjE0GSCsvWeBKBg", "UBTConnect", "EntitiesCarousel_HouseholdDetails", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:kb6mf5icska1DtIjILIC0Q", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:3kpgKiDrmECLIcldYvdd+A", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
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

define("UBTConnect.Directory_Caroussel.EntitiesCarousel_HouseholdDetails.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"UtJKzIiYoUeSN7TRpu0uDw": {
getter: function (varBag, idService) {
return varBag.vars.value.evt_LocalityNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"gSL5YDsPnUyqEOYkrManWw": {
getter: function (varBag, idService) {
return varBag.vars.value.evt_CountryNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"fzHgOq8acEGzgMlD3kI6ng": {
getter: function (varBag, idService) {
return varBag.vars.value.evt_DeceasedOrAncestry_ViewInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"8KCCrIrIo02mW+fpLZWp7w": {
getter: function (varBag, idService) {
return varBag.model.variables.localityNameVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"WWG94gWE9kipyyFR8bZbzg": {
getter: function (varBag, idService) {
return varBag.model.variables.countryNameVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ur72C1AsC0q+ZJ1_DJS5EA": {
getter: function (varBag, idService) {
return varBag.model.variables.deceasedOrAncestry_ViewVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"652mRVIPI0C0bbKQT6rCOw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HouseholdIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"Ozwd9cg59Uyld0G1wARVAw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsSkeletonOnlyIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"+pyRpLYidESTB7q2ZjCrbg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_CarouselTag"));
})(varBag.model, idService);
}
},
"8mpuZGSOpUqvlr5BPtLSlA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_CarouselTag"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
