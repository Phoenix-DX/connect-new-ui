define("UBTConnect.Directory_SupperMeetings.SupperMeeting_Carousel.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "NavigationHandler.controller", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnect.Directory_Caroussel.EntitiesCarousel.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "UBTConnect.model$PreloadedSupperMeetingsRec", "UBTConnect.model$EntitiesCarousel_ItemList", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "NavigationHandler.controller$AssignFromObject", "UBTConnect.referencesHealth$NavigationHandler", "NavigationHandler.controller$GetPreloadObject", "UBTConnect.model$EntitiesCarousel_ItemRec"], function (OutSystems, UBTConnectModel, UBTConnectLibraryModel, NavigationHandlerController, UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel, UBTConnect_Directory_Caroussel_EntitiesCarousel_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("SupperMeetingsIdList", "supperMeetingsIdListVar", "SupperMeetingsIdList", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.PreloadedSupperMeetingsRec());
}, false, UBTConnectModel.PreloadedSupperMeetingsRec), 
this.attr("StartingPosition", "startingPositionVar", "StartingPosition", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("EntitieslCarousel_Items", "entitieslCarousel_ItemsVar", "EntitieslCarousel_Items", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.EntitiesCarousel_ItemList());
}, false, UBTConnectModel.EntitiesCarousel_ItemList), 
this.attr("In_StartingSupperMeetingId", "in_StartingSupperMeetingIdIn", "In_StartingSupperMeetingId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_StartingSupperMeetingIdInDataFetchStatus", "_in_StartingSupperMeetingIdInDataFetchStatus", "_in_StartingSupperMeetingIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (((UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets) || UBTConnect_Directory_Caroussel_EntitiesCarousel_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_StartingSupperMeetingId" in inputs) {
this.variables.in_StartingSupperMeetingIdIn = OS.DataConversion.ServerDataConverter.from(inputs.In_StartingSupperMeetingId, OS.DataTypes.DataTypes.LongInteger);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Directory_SupperMeetings.SupperMeeting_Carousel");
});
define("UBTConnect.Directory_SupperMeetings.SupperMeeting_Carousel.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_SupperMeetings.SupperMeeting_Carousel.mvc$model", "UBTConnect.Directory_SupperMeetings.SupperMeeting_Carousel.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnect.Directory_Caroussel.EntitiesCarousel.mvc$view", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "UBTConnect.model$PreloadedSupperMeetingsRec", "UBTConnect.model$EntitiesCarousel_ItemList", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "NavigationHandler.controller$AssignFromObject", "UBTConnect.referencesHealth$NavigationHandler", "NavigationHandler.controller$GetPreloadObject", "UBTConnect.model$EntitiesCarousel_ItemRec"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, NavigationHandlerController, React, OSView, UBTConnect_Directory_SupperMeetings_SupperMeeting_Carousel_mvc_model, UBTConnect_Directory_SupperMeetings_SupperMeeting_Carousel_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnect_Directory_Caroussel_EntitiesCarousel_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view) {
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
        View.displayName = "Directory_SupperMeetings.SupperMeeting_Carousel";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnect_Directory_Caroussel_EntitiesCarousel_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Directory_SupperMeetings_SupperMeeting_Carousel_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Directory_SupperMeetings_SupperMeeting_Carousel_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "SupperMeeting_Carousel";
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
In_AlignTitleLeft: false
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
In_TextOptions: model.getCachedValue(idService.getId("8wCjt5ymhUmvZPXUCr+0nA.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
return rec;
}();
}),
In_Text: "Supper Meeting"
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
return [React.createElement(UBTConnect_Directory_Caroussel_EntitiesCarousel_mvc_view, {
inputs: {
In_ConnectEntityTypeId: UBTConnectModel.staticEntities.connect_Entity.supperMeetings_aka_Subdivisions,
In_StartingPosition: model.variables.startingPositionVar,
In_EntitiesCarousel_Items: model.variables.entitieslCarousel_ItemsVar
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
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
bottom: PlaceholderContent.Empty,
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
uuid: "3",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.entitieslCarousel_ItemsVar), asPrimitiveValue(model.variables.startingPositionVar)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("UBTConnect.Directory_SupperMeetings.SupperMeeting_Carousel.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "NavigationHandler.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_SupperMeetings.SupperMeeting_Carousel.mvc$debugger", "UBTConnect.Directory_SupperMeetings.controller", "UBTConnect.model$PreloadedSupperMeetingsRec", "UBTConnect.model$EntitiesCarousel_ItemList", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "NavigationHandler.controller$AssignFromObject", "UBTConnect.referencesHealth$NavigationHandler", "NavigationHandler.controller$GetPreloadObject", "UBTConnect.model$EntitiesCarousel_ItemRec"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, NavigationHandlerController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_SupperMeetings_SupperMeeting_Carousel_mvc_Debugger, _flow_UBTConnect_Directory_SupperMeetingsController) {
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
Controller.prototype._screenEvent_OnInitialize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ScreenEvent_OnInitialize");
callContext = controller.callContext(callContext);
var listIndexOfVar = new OS.DataTypes.VariableHolder();
var assignFromObjectVar = new OS.DataTypes.VariableHolder();
var getPreloadObjectVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.listIndexOfVar = listIndexOfVar;
varBag.assignFromObjectVar = assignFromObjectVar;
varBag.getPreloadObjectVar = getPreloadObjectVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:h7jQfLSRoUGWL4xZfQDwNA:/NRWebFlows.E53piema20KUP3HqQIZR6A/NodesShownInESpaceTree.5zQGFk5TMUOF95sooV+QvQ/ClientActions.h7jQfLSRoUGWL4xZfQDwNA:xlmYvPqzOYIHQ0oGOmFBkw", "UBTConnect", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YxJl02zJCk2J_XxKvjNnDQ", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:swLK7ABjRk+5auQCtB7CtA", callContext.id) && model.variables.supperMeetingsIdListVar.supperMeetingIdsAttr.isEmpty)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6LN6tzqlZkqwhhrekmsikA", callContext.id);
// Execute Action: GetPreloadObject
getPreloadObjectVar.value = NavigationHandlerController.default.getPreloadObject$Action(callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:B5XXPPmUFU6vO6Fwpso4dA", callContext.id);
// Execute Action: AssignFromObject
assignFromObjectVar.value = NavigationHandlerController.default.assignFromObject$Action(OS.BuiltinFunctions.toObject(model.variables.supperMeetingsIdListVar), getPreloadObjectVar.value.preloadOut, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LL0hAUOaIUaJGPHtNU8gdQ", callContext.id);
// Execute Action: ListIndexOf
listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.supperMeetingsIdListVar.supperMeetingIdsAttr, function (p) {
return p.equals(model.variables.in_StartingSupperMeetingIdIn);
}, callContext);

if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dP3MMveJLE+mv83nztXePg", callContext.id) && ((listIndexOfVar.value.positionOut) !== (-1)))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5vSvyaUvw0GbJcUP5QUayw", callContext.id);
// StartingPosition = ListIndexOf.Position
model.variables.startingPositionVar = listIndexOfVar.value.positionOut;
}

// Foreach SupperMeetingsIdList.SupperMeetingIds
callContext.iterationContext.registerIterationStart(model.variables.supperMeetingsIdListVar.supperMeetingIdsAttr);
try {var supperMeetingIdsIterator = callContext.iterationContext.getIterator(model.variables.supperMeetingsIdListVar.supperMeetingIdsAttr);
var supperMeetingIdsIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bBuLkbodekCfxAuedO2TOw", callContext.id) && (supperMeetingIdsIndex < model.variables.supperMeetingsIdListVar.supperMeetingIdsAttr.length))) {
supperMeetingIdsIterator.currentRowNumber = supperMeetingIdsIndex;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qtsXO6Rc6Ee__+qh7eM6sQ", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(model.variables.entitieslCarousel_ItemsVar, function () {
var rec = new UBTConnectModel.EntitiesCarousel_ItemRec();
rec.entityIdAttr = OS.BuiltinFunctions.longIntegerToText(OS.BuiltinFunctions.textToLongInteger(OS.BuiltinFunctions.longIntegerToText(model.variables.supperMeetingsIdListVar.supperMeetingIdsAttr.getItem(supperMeetingIdsIndex.valueOf()))));
return rec;
}(), callContext);
supperMeetingIdsIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.supperMeetingsIdListVar.supperMeetingIdsAttr);
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4DOnAosEYUGs_i+YBZDEbQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:H_OgFHqN5UiiMMf49on+jQ", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:h7jQfLSRoUGWL4xZfQDwNA", callContext.id);
}

};

Controller.prototype.screenEvent_OnInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._screenEvent_OnInitialize$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:E53piema20KUP3HqQIZR6A:/NRWebFlows.E53piema20KUP3HqQIZR6A:zbxcFH+tyRwg__bC3mWnVg", "UBTConnect", "Directory_SupperMeetings", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:5zQGFk5TMUOF95sooV+QvQ:/NRWebFlows.E53piema20KUP3HqQIZR6A/NodesShownInESpaceTree.5zQGFk5TMUOF95sooV+QvQ:tvk+4H_ZpmsWZzjoUzCsUg", "UBTConnect", "SupperMeeting_Carousel", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:5zQGFk5TMUOF95sooV+QvQ", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:E53piema20KUP3HqQIZR6A", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_SupperMeetings/SupperMeeting_Carousel On Initialize");
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
return _flow_UBTConnect_Directory_SupperMeetingsController.default.handleError(ex, this.callContext());
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

define("UBTConnect.Directory_SupperMeetings.SupperMeeting_Carousel.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"LL0hAUOaIUaJGPHtNU8gdQ": {
getter: function (varBag, idService) {
return varBag.listIndexOfVar.value;
}
},
"B5XXPPmUFU6vO6Fwpso4dA": {
getter: function (varBag, idService) {
return varBag.assignFromObjectVar.value;
}
},
"6LN6tzqlZkqwhhrekmsikA": {
getter: function (varBag, idService) {
return varBag.getPreloadObjectVar.value;
}
},
"1P2TXCGEykefktq1aUPPBg": {
getter: function (varBag, idService) {
return varBag.model.variables.supperMeetingsIdListVar;
}
},
"pptgvb3oQ0+J+qEWs1QZcQ": {
getter: function (varBag, idService) {
return varBag.model.variables.startingPositionVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"FPrL154Ub0yelYiwjcyOWA": {
getter: function (varBag, idService) {
return varBag.model.variables.entitieslCarousel_ItemsVar;
}
},
"yTLMqpnEWESlBR+ao88ovQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_StartingSupperMeetingIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"NNislhGI2E+eKvnAKQk0SQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Title"));
})(varBag.model, idService);
}
},
"8Q7nY56C90ChIOjPLCFlLA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Right"));
})(varBag.model, idService);
}
},
"yV_TIctez0iuBmHxN1bJCA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"gLAz_1rmYUOsnKHaZyxTIg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"ZTaJRYltMES7DzxylDdEnQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
},
"qZc2o1sdjU+2RfWCiK2uAg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
