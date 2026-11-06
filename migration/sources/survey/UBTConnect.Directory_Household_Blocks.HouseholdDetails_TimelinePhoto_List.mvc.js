define("UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto_List.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "Connect_Household_CS.model", "UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto.mvc$model", "Connect_Household_CS.model$UI_HouseholdTimelineImagesRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnect.model$UI_HouseholdTimelineImagesList"], function (OutSystems, UBTConnectModel, Connect_Household_CSModel, UBTConnect_Directory_Household_Blocks_HouseholdDetails_TimelinePhoto_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("In_HouseholdTimelineImages", "in_HouseholdTimelineImagesIn", "In_HouseholdTimelineImages", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_HouseholdTimelineImagesList());
}, false, UBTConnectModel.UI_HouseholdTimelineImagesList), 
this.attr("_in_HouseholdTimelineImagesInDataFetchStatus", "_in_HouseholdTimelineImagesInDataFetchStatus", "_in_HouseholdTimelineImagesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = UBTConnect_Directory_Household_Blocks_HouseholdDetails_TimelinePhoto_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_HouseholdTimelineImages" in inputs) {
this.variables.in_HouseholdTimelineImagesIn = inputs.In_HouseholdTimelineImages;
if("_in_HouseholdTimelineImagesInDataFetchStatus" in inputs) {
this.variables._in_HouseholdTimelineImagesInDataFetchStatus = inputs._in_HouseholdTimelineImagesInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Directory_Household_Blocks.HouseholdDetails_TimelinePhoto_List");
});
define("UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto_List.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Household_CS.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto_List.mvc$model", "UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto_List.mvc$controller", "UBTConnect.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto.mvc$view", "Connect_Household_CS.model$UI_HouseholdTimelineImagesRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnect.model$UI_HouseholdTimelineImagesList"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Household_CSModel, React, OSView, UBTConnect_Directory_Household_Blocks_HouseholdDetails_TimelinePhoto_List_mvc_model, UBTConnect_Directory_Household_Blocks_HouseholdDetails_TimelinePhoto_List_mvc_controller, UBTConnectClientVariables, OSWidgets, UBTConnect_Directory_Household_Blocks_HouseholdDetails_TimelinePhoto_mvc_view) {
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
        View.displayName = "Directory_Household_Blocks.HouseholdDetails_TimelinePhoto_List";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_Directory_Household_Blocks_HouseholdDetails_TimelinePhoto_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Directory_Household_Blocks_HouseholdDetails_TimelinePhoto_List_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Directory_Household_Blocks_HouseholdDetails_TimelinePhoto_List_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": "True"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.in_HouseholdTimelineImagesIn,
style: "Household_GalleryCard-list list list-group list-horizontal--gap-xs",
tag: "div",
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HouseholdTimelineImagesInDataFetchStatus),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(UBTConnect_Directory_Household_Blocks_HouseholdDetails_TimelinePhoto_mvc_view, {
inputs: {
Label: model.variables.in_HouseholdTimelineImagesIn.getCurrent(callContext.iterationContext).labelAttr,
_labelInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HouseholdTimelineImagesInDataFetchStatus),
In_CardTypeId: UBTConnectModel.staticEntities.uBT_ImageCardType.gallery,
In_BackgroundURL: model.variables.in_HouseholdTimelineImagesIn.getCurrent(callContext.iterationContext).signedURLAttr,
_in_BackgroundURLInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HouseholdTimelineImagesInDataFetchStatus),
IsSelected: model.variables.in_HouseholdTimelineImagesIn.getCurrent(callContext.iterationContext).isCurrentAttr,
_isSelectedInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HouseholdTimelineImagesInDataFetchStatus),
Date: model.variables.in_HouseholdTimelineImagesIn.getCurrent(callContext.iterationContext).dateAttr,
_dateInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HouseholdTimelineImagesInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
selected$Action: function (dateIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Household_Blocks/HouseholdDetails_TimelinePhoto Selected");
controller.event_DateSelected$Action(dateIn, controller.callContext(eventHandlerContext));
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
uuid: "1",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables._in_HouseholdTimelineImagesInDataFetchStatus)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto_List.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Household_CS.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto_List.mvc$debugger", "Connect_Household_CS.model$UI_HouseholdTimelineImagesRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnect.model$UI_HouseholdTimelineImagesList"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Household_CSModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Household_Blocks_HouseholdDetails_TimelinePhoto_List_mvc_Debugger) {
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

Controller.prototype.event_DateSelected$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:AYMEjs49fE+urBzl2Bc2lQ:/NRWebFlows.AYMEjs49fE+urBzl2Bc2lQ:uCNLUKQMufTVXdBiwtGWyw", "UBTConnect", "Directory_Household_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Kb+LyeIGkEOoXEDTCZM4cA:/NRWebFlows.AYMEjs49fE+urBzl2Bc2lQ/NodesShownInESpaceTree.Kb+LyeIGkEOoXEDTCZM4cA:ZLRTHFmTVQZo3VSB60_O+A", "UBTConnect", "HouseholdDetails_TimelinePhoto_List", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Kb+LyeIGkEOoXEDTCZM4cA", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:AYMEjs49fE+urBzl2Bc2lQ", callContext.id);
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

define("UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto_List.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"Yym+vRr32kOaHhbvOPA8yQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HouseholdTimelineImagesIn;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
