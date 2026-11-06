define("UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "Connect_Household_CS.model", "UBTConnect.controller", "UBTConnect.Directory_Household_Blocks.Household_GalleryCard_List.mvc$model", "Connect_Household_CS.model$UI_SubdivisionHouseholdRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnect.model$UI_SubdivisionHouseholdList", "UBTConnect.controller$GetSkeletonList_UI_SubdivisionHousehold"], function (OutSystems, UBTConnectModel, Connect_Household_CSModel, UBTConnectController, UBTConnect_Directory_Household_Blocks_Household_GalleryCard_List_mvcModel) {
var OS = OutSystems.Internal;

var GetSubdivisionHouseholdsDataActRec = (function (_super) {
__extends(GetSubdivisionHouseholdsDataActRec, _super);
function GetSubdivisionHouseholdsDataActRec(defaults) {
_super.apply(this, arguments);
}
GetSubdivisionHouseholdsDataActRec.attributesToDeclare = function () {
return [
this.attr("Household_GalleryCard_List", "household_GalleryCard_ListOut", "Household_GalleryCard_List", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_SubdivisionHouseholdList());
}, true, UBTConnectModel.UI_SubdivisionHouseholdList)
].concat(_super.attributesToDeclare.call(this));
};
GetSubdivisionHouseholdsDataActRec.fromStructure = function (str) {
return new GetSubdivisionHouseholdsDataActRec(new GetSubdivisionHouseholdsDataActRec.RecordClass({
household_GalleryCard_ListOut: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetSubdivisionHouseholdsDataActRec.init();
return GetSubdivisionHouseholdsDataActRec;
})(OS.Model.DataSourceRecord);

var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("In_SubdivisionId", "in_SubdivisionIdIn", "In_SubdivisionId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_SubdivisionIdInDataFetchStatus", "_in_SubdivisionIdInDataFetchStatus", "_in_SubdivisionIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("GetSubdivisionHouseholds", "getSubdivisionHouseholdsDataAct", "getSubdivisionHouseholdsDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetSubdivisionHouseholdsDataActRec());
}, true, GetSubdivisionHouseholdsDataActRec)
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
Model._hasValidationWidgetsValue = UBTConnect_Directory_Household_Blocks_Household_GalleryCard_List_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_SubdivisionId" in inputs) {
this.variables.in_SubdivisionIdIn = inputs.In_SubdivisionId;
if("_in_SubdivisionIdInDataFetchStatus" in inputs) {
this.variables._in_SubdivisionIdInDataFetchStatus = inputs._in_SubdivisionIdInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Directory_SupperMeetings.SupperMeeting_HouseholdList");
});
define("UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Household_CS.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc$model", "UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc$controller", "UBTConnect.clientVariables", "UBTConnect.Directory_Household_Blocks.Household_GalleryCard_List.mvc$view", "OutSystems/ReactWidgets/Main", "Connect_Household_CS.model$UI_SubdivisionHouseholdRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnect.model$UI_SubdivisionHouseholdList", "UBTConnect.controller$GetSkeletonList_UI_SubdivisionHousehold"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Household_CSModel, React, OSView, UBTConnect_Directory_SupperMeetings_SupperMeeting_HouseholdList_mvc_model, UBTConnect_Directory_SupperMeetings_SupperMeeting_HouseholdList_mvc_controller, UBTConnectClientVariables, UBTConnect_Directory_Household_Blocks_Household_GalleryCard_List_mvc_view, OSWidgets) {
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
        View.displayName = "Directory_SupperMeetings.SupperMeeting_HouseholdList";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_Directory_Household_Blocks_Household_GalleryCard_List_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Directory_SupperMeetings_SupperMeeting_HouseholdList_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Directory_SupperMeetings_SupperMeeting_HouseholdList_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnect_Directory_Household_Blocks_Household_GalleryCard_List_mvc_view, {
inputs: {
In_IsLoading: !(model.variables.getSubdivisionHouseholdsDataAct.isDataFetchedAttr),
In_Household_GalleryCard_List: model.variables.getSubdivisionHouseholdsDataAct.household_GalleryCard_ListOut,
_in_Household_GalleryCard_ListInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getSubdivisionHouseholdsDataAct.dataFetchStatusAttr)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_OnClick_Household_GalleryCard$Action: function (event_HouseholdIdIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Household_Blocks/Household_GalleryCard_List Event_OnClick_Household_GalleryCard");
controller.event_OnClick_Household$Action(event_HouseholdIdIn, OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getSubdivisionHouseholdsDataAct.household_GalleryCard_ListOut, new OS.DataTypes.LongIntegerList(), function (source, target) {
target = source.householdIdAttr;
return target;
}), controller.callContext(eventHandlerContext));
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Household_CS.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc$debugger", "UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc$controller.OnReady.IsViewRestoredFromCacheJS", "Connect_Household_CS.model$UI_SubdivisionHouseholdRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnect.model$UI_SubdivisionHouseholdList", "UBTConnect.controller$GetSkeletonList_UI_SubdivisionHousehold"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Household_CSModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_SupperMeetings_SupperMeeting_HouseholdList_mvc_Debugger, UBTConnect_Directory_SupperMeetings_SupperMeeting_HouseholdList_mvc_controller_OnReady_IsViewRestoredFromCacheJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
getSubdivisionHouseholds$DataActRefresh: -1
};
this.dataFetchDependentsGraph = {
getSubdivisionHouseholds$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions
Controller.prototype.getSubdivisionHouseholds$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:QF77K78O+E+oUYz6yfMs4g:/NRWebFlows.E53piema20KUP3HqQIZR6A/NodesShownInESpaceTree.5QVlutaqvEi00Aj17rNDFw/DataActions.QF77K78O+E+oUYz6yfMs4g:a9xbj_ONm2eluvDI1DpsJA", "UBTConnect", "GetSubdivisionHouseholds", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_SupperMeetings/SupperMeeting_HouseholdList/GetSubdivisionHouseholds");
return controller.callDataAction("DataActionGetSubdivisionHouseholds", "screenservices/UBTConnect/Directory_SupperMeetings/SupperMeeting_HouseholdList/DataActionGetSubdivisionHouseholds", "1qTne4C74ny2LUVVcPf2bw", function (b) {
model.variables.getSubdivisionHouseholdsDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getSubdivisionHouseholdsDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getSubdivisionHouseholdsDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false);

}, function () {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:QF77K78O+E+oUYz6yfMs4g", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getSubdivisionHouseholds$DataActRefresh"];
// Client Actions
Controller.prototype._onReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var getSkeletonList_UI_SubdivisionHouseholdVar = new OS.DataTypes.VariableHolder();
var isViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getSkeletonList_UI_SubdivisionHouseholdVar = getSkeletonList_UI_SubdivisionHouseholdVar;
varBag.isViewRestoredFromCacheJSResult = isViewRestoredFromCacheJSResult;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:WaPWx1AhaUqF1SpxXKqVDw:/NRWebFlows.E53piema20KUP3HqQIZR6A/NodesShownInESpaceTree.5QVlutaqvEi00Aj17rNDFw/ClientActions.WaPWx1AhaUqF1SpxXKqVDw:_AByDo3nHKm1tCPOpCI62A", "UBTConnect", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7oW76+6GmUOhUt40Mwx2eg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cDGjn8mAFkix08LQGfU3jA", callContext.id);
isViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(UBTConnect_Directory_SupperMeetings_SupperMeeting_HouseholdList_mvc_controller_OnReady_IsViewRestoredFromCacheJS, "IsViewRestoredFromCache", "OnReady", {
IsRestoredFromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.OnReady$isViewRestoredFromCacheJSResult"))();
jsNodeResult.isRestoredFromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsRestoredFromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
// Check if IsViewRestoredFromCache IsRestoredFromCache
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TRT++o9++ki55fwk0WBBrw", callContext.id) && isViewRestoredFromCacheJSResult.value.isRestoredFromCacheOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vki4Jvd7mEeoUx1DvSC9FA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vXHxEMIuUEGmnuNJ_Nkrvg", callContext.id);
// Execute Action: GetSkeletonList_UI_SubdivisionHousehold
getSkeletonList_UI_SubdivisionHouseholdVar.value = UBTConnectController.default.getSkeletonList_UI_SubdivisionHousehold$Action(4, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xbvgQeDZFU2DHNE6arErEg", callContext.id);
// GetSubdivisionHouseholds.Household_GalleryCard_List = GetSkeletonList_UI_SubdivisionHousehold.UI_SubdivisionHouseholds
model.variables.getSubdivisionHouseholdsDataAct.household_GalleryCard_ListOut = getSkeletonList_UI_SubdivisionHouseholdVar.value.uI_SubdivisionHouseholdsOut;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cHIgVPWzREyaM_NYlvgH3A", callContext.id);
// Refresh Query: GetSubdivisionHouseholds
var result = controller.getSubdivisionHouseholds$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:U4IQn8rdBkya6vM8ascgFA", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:WaPWx1AhaUqF1SpxXKqVDw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:WaPWx1AhaUqF1SpxXKqVDw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.OnReady$isViewRestoredFromCacheJSResult", [{
name: "IsRestoredFromCache",
attrName: "isRestoredFromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);

Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.event_OnClick_Household$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:E53piema20KUP3HqQIZR6A:/NRWebFlows.E53piema20KUP3HqQIZR6A:zbxcFH+tyRwg__bC3mWnVg", "UBTConnect", "Directory_SupperMeetings", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:5QVlutaqvEi00Aj17rNDFw:/NRWebFlows.E53piema20KUP3HqQIZR6A/NodesShownInESpaceTree.5QVlutaqvEi00Aj17rNDFw:zbqlFw+_nP20mwJlARFoIw", "UBTConnect", "SupperMeeting_HouseholdList", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:5QVlutaqvEi00Aj17rNDFw", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:E53piema20KUP3HqQIZR6A", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_SupperMeetings/SupperMeeting_HouseholdList On Ready");
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
return UBTConnectController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});
define("UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc$controller.OnReady.IsViewRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
};
});

define("UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"vXHxEMIuUEGmnuNJ_Nkrvg": {
getter: function (varBag, idService) {
return varBag.getSkeletonList_UI_SubdivisionHouseholdVar.value;
}
},
"cDGjn8mAFkix08LQGfU3jA": {
getter: function (varBag, idService) {
return varBag.isViewRestoredFromCacheJSResult.value;
}
},
"v7jtAlTe1UmHovxNtxdGFQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_SubdivisionIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"QF77K78O+E+oUYz6yfMs4g": {
getter: function (varBag, idService) {
return varBag.model.variables.getSubdivisionHouseholdsDataAct;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
