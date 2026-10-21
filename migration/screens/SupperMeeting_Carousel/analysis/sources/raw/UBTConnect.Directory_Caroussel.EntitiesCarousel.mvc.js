define("UBTConnect.Directory_Caroussel.EntitiesCarousel.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.Interaction.Carousel.mvc$model", "UBTConnect.Directory_Caroussel.EntitiesCarousel_Element.mvc$model", "UBTConnect.Directory_Caroussel.EntitiesCarousel_HeaderGenerator.mvc$model", "UBTConnect.model$HeaderListList", "UBTConnect.model$EntitiesCarousel_ItemList", "OutSystemsUI_2_23.model$CarouselItemsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.model$CarouselOptionalConfigsRec", "UBTConnect.model$HeaderListRec", "OutSystemsUI_2_23.model$ErrorMessageRec", "OutSystemsUI_2_23.controller$SetSplideEvent", "OutSystemsUI_2_23.controller$CarouselDisableOnRender", "OutSystemsUI_2_23.model$SplideConfigsRec", "OutSystemsUI_2_23.controller$SetSplideConfigs", "OutSystemsUI_2_23.controller$UnsetSplideEvent"], function (OutSystems, UBTConnectModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, OutSystemsUI_2_23_Interaction_Carousel_mvcModel, UBTConnect_Directory_Caroussel_EntitiesCarousel_Element_mvcModel, UBTConnect_Directory_Caroussel_EntitiesCarousel_HeaderGenerator_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Index_Initial", "index_InitialVar", "Index_Initial", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("Index_ActiveElement", "index_ActiveElementVar", "Index_ActiveElement", true, false, OS.DataTypes.DataTypes.Integer, function () {
return -1;
}, false), 
this.attr("Index_NextActiveElement", "index_NextActiveElementVar", "Index_NextActiveElement", true, false, OS.DataTypes.DataTypes.Integer, function () {
return -1;
}, false), 
this.attr("HeaderList", "headerListVar", "HeaderList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.HeaderListList());
}, false, UBTConnectModel.HeaderListList), 
this.attr("RenderBuffer", "renderBufferVar", "RenderBuffer", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 3;
}, false), 
this.attr("UseMoveHandler", "useMoveHandlerVar", "UseMoveHandler", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("In_EntitiesCarousel_Items", "in_EntitiesCarousel_ItemsIn", "In_EntitiesCarousel_Items", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.EntitiesCarousel_ItemList());
}, false, UBTConnectModel.EntitiesCarousel_ItemList), 
this.attr("_in_EntitiesCarousel_ItemsInDataFetchStatus", "_in_EntitiesCarousel_ItemsInDataFetchStatus", "_in_EntitiesCarousel_ItemsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_StartingPosition", "in_StartingPositionIn", "In_StartingPosition", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("_in_StartingPositionInDataFetchStatus", "_in_StartingPositionInDataFetchStatus", "_in_StartingPositionInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ConnectEntityTypeId", "in_ConnectEntityTypeIdIn", "In_ConnectEntityTypeId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_ConnectEntityTypeIdInDataFetchStatus", "_in_ConnectEntityTypeIdInDataFetchStatus", "_in_ConnectEntityTypeIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = ((OutSystemsUI_2_23_Interaction_Carousel_mvcModel.hasValidationWidgets || UBTConnect_Directory_Caroussel_EntitiesCarousel_Element_mvcModel.hasValidationWidgets) || UBTConnect_Directory_Caroussel_EntitiesCarousel_HeaderGenerator_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_EntitiesCarousel_Items" in inputs) {
this.variables.in_EntitiesCarousel_ItemsIn = inputs.In_EntitiesCarousel_Items;
if("_in_EntitiesCarousel_ItemsInDataFetchStatus" in inputs) {
this.variables._in_EntitiesCarousel_ItemsInDataFetchStatus = inputs._in_EntitiesCarousel_ItemsInDataFetchStatus;
}

}

if("In_StartingPosition" in inputs) {
this.variables.in_StartingPositionIn = inputs.In_StartingPosition;
if("_in_StartingPositionInDataFetchStatus" in inputs) {
this.variables._in_StartingPositionInDataFetchStatus = inputs._in_StartingPositionInDataFetchStatus;
}

}

if("In_ConnectEntityTypeId" in inputs) {
this.variables.in_ConnectEntityTypeIdIn = inputs.In_ConnectEntityTypeId;
if("_in_ConnectEntityTypeIdInDataFetchStatus" in inputs) {
this.variables._in_ConnectEntityTypeIdInDataFetchStatus = inputs._in_ConnectEntityTypeIdInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Directory_Caroussel.EntitiesCarousel");
});
define("UBTConnect.Directory_Caroussel.EntitiesCarousel.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Caroussel.EntitiesCarousel.mvc$model", "UBTConnect.Directory_Caroussel.EntitiesCarousel.mvc$controller", "UBTConnect.clientVariables", "OutSystemsUI_2_23.Interaction.Carousel.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.Directory_Caroussel.EntitiesCarousel_Element.mvc$view", "UBTConnect.Directory_Caroussel.EntitiesCarousel_HeaderGenerator.mvc$view", "UBTConnect.model$HeaderListList", "UBTConnect.model$EntitiesCarousel_ItemList", "OutSystemsUI_2_23.model$CarouselItemsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.model$CarouselOptionalConfigsRec", "UBTConnect.model$HeaderListRec", "OutSystemsUI_2_23.model$ErrorMessageRec", "OutSystemsUI_2_23.controller$SetSplideEvent", "OutSystemsUI_2_23.controller$CarouselDisableOnRender", "OutSystemsUI_2_23.model$SplideConfigsRec", "OutSystemsUI_2_23.controller$SetSplideConfigs", "OutSystemsUI_2_23.controller$UnsetSplideEvent"], function (OutSystems, UBTConnectModel, UBTConnectController, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, UBTConnect_Directory_Caroussel_EntitiesCarousel_mvc_model, UBTConnect_Directory_Caroussel_EntitiesCarousel_mvc_controller, UBTConnectClientVariables, OutSystemsUI_2_23_Interaction_Carousel_mvc_view, OSWidgets, UBTConnect_Directory_Caroussel_EntitiesCarousel_Element_mvc_view, UBTConnect_Directory_Caroussel_EntitiesCarousel_HeaderGenerator_mvc_view) {
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
        View.displayName = "Directory_Caroussel.EntitiesCarousel";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/UBTConnect.Directory_Caroussel.EntitiesCarousel.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [OutSystemsUI_2_23_Interaction_Carousel_mvc_view, UBTConnect_Directory_Caroussel_EntitiesCarousel_Element_mvc_view, UBTConnect_Directory_Caroussel_EntitiesCarousel_HeaderGenerator_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Directory_Caroussel_EntitiesCarousel_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Directory_Caroussel_EntitiesCarousel_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OutSystemsUI_2_23_Interaction_Carousel_mvc_view, {
inputs: {
ExtendedClass: "ubt-entities-carousel",
OptionalConfigs: model.getCachedValue(idService.getId("EntitiesCarousel.OptionalConfigs"), function () {
return function () {
var rec = new OutSystemsUI_2_23Model.CarouselOptionalConfigsRec();
rec.autoPlayAttr = false;
rec.loopAttr = false;
rec.startingPositionAttr = model.variables.index_InitialVar;
return rec;
}();
}, function () {
return model.variables.index_InitialVar;
}),
Navigation: UBTConnectModel.staticEntities.carouselNavigation.none
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
initialized$Action: function (carouselIdIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Interaction/Carousel Initialized");
controller.handler_EntitiesCarousel_Initialized$Action(controller.callContext(eventHandlerContext));
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
name: "EntitiesCarousel",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
carouselItems: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.List, {
animateItems: false,
extendedProperties: {
"disable-virtualization": "True"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.in_EntitiesCarousel_ItemsIn,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EntitiesCarousel_ItemsInDataFetchStatus),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.renderBufferVar), asPrimitiveValue(model.variables.index_ActiveElementVar), asPrimitiveValue(model.variables.in_ConnectEntityTypeIdIn), asPrimitiveValue(model.variables.index_NextActiveElementVar), asPrimitiveValue(model.variables._in_ConnectEntityTypeIdInDataFetchStatus), asPrimitiveValue(model.variables._in_EntitiesCarousel_ItemsInDataFetchStatus), asPrimitiveValue(model.variables.in_EntitiesCarousel_ItemsIn.getCurrent(callContext.iterationContext).entityIdAttr), asPrimitiveValue(model.variables.in_EntitiesCarousel_ItemsIn.length), asPrimitiveValue(model.variables.in_EntitiesCarousel_ItemsIn.getCurrentRowNumber(callContext.iterationContext))]
}, React.createElement(UBTConnect_Directory_Caroussel_EntitiesCarousel_Element_mvc_view, {
inputs: {
In_Index_CurrentElement: model.variables.in_EntitiesCarousel_ItemsIn.getCurrentRowNumber(callContext.iterationContext),
_in_Index_CurrentElementInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EntitiesCarousel_ItemsInDataFetchStatus),
In_Index_NextActiveElement: model.variables.index_NextActiveElementVar,
In_ConnectEntityTypeId: model.variables.in_ConnectEntityTypeIdIn,
_in_ConnectEntityTypeIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ConnectEntityTypeIdInDataFetchStatus),
In_Index_ActiveElement: model.variables.index_ActiveElementVar,
In_RenderBuffer: model.variables.renderBufferVar,
In_CarouselLength: model.variables.in_EntitiesCarousel_ItemsIn.length,
_in_CarouselLengthInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EntitiesCarousel_ItemsInDataFetchStatus),
In_EntityId: model.getCachedValue(idService.getId("Qu_Mamtex0ScY2VWSqo5gQ.In_EntityId"), function () {
return OS.BuiltinFunctions.textToLongInteger(model.variables.in_EntitiesCarousel_ItemsIn.getCurrent(callContext.iterationContext).entityIdAttr);
}, function () {
return model.variables.in_EntitiesCarousel_ItemsIn.getCurrent(callContext.iterationContext).entityIdAttr;
}),
_in_EntityIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EntitiesCarousel_ItemsInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_SetHeader$Action: function (event_HeaderIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Caroussel/EntitiesCarousel_Element Event_SetHeader");
controller.handler_SetHeaderList$Action(event_HeaderIn, model.variables.in_EntitiesCarousel_ItemsIn.getCurrentRowNumber(callContext.iterationContext), controller.callContext(eventHandlerContext));
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
}))];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables.renderBufferVar), asPrimitiveValue(model.variables.index_ActiveElementVar), asPrimitiveValue(model.variables.in_ConnectEntityTypeIdIn), asPrimitiveValue(model.variables.index_NextActiveElementVar), asPrimitiveValue(model.variables._in_ConnectEntityTypeIdInDataFetchStatus), asPrimitiveValue(model.variables._in_EntitiesCarousel_ItemsInDataFetchStatus)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.renderBufferVar), asPrimitiveValue(model.variables.index_ActiveElementVar), asPrimitiveValue(model.variables.in_ConnectEntityTypeIdIn), asPrimitiveValue(model.variables.index_NextActiveElementVar), asPrimitiveValue(model.variables._in_ConnectEntityTypeIdInDataFetchStatus), asPrimitiveValue(model.variables._in_EntitiesCarousel_ItemsInDataFetchStatus), asPrimitiveValue(model.variables.in_EntitiesCarousel_ItemsIn)]
}), React.createElement(UBTConnect_Directory_Caroussel_EntitiesCarousel_HeaderGenerator_mvc_view, {
inputs: {
In_CurrentIndex: model.variables.index_ActiveElementVar,
In_HouseholdCarouselHeaderList: model.variables.headerListVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_SetHeader$Action: function (event_HeaderIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Caroussel/EntitiesCarousel_HeaderGenerator Event_SetHeader");
controller.event_SetHeader$Action(event_HeaderIn, controller.callContext(eventHandlerContext));
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
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.Directory_Caroussel.EntitiesCarousel.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Caroussel.EntitiesCarousel.mvc$debugger", "UBTConnect.Directory_Caroussel.EntitiesCarousel.mvc$controller.Handler_EntitiesCarousel_Initialized.GetSplideCallbacksJS", "UBTConnect.Directory_Caroussel.EntitiesCarousel.mvc$controller.Action_UpdateCarouselInternalPosition.SetInternalPositionJS", "UBTConnect.model$HeaderListList", "UBTConnect.model$EntitiesCarousel_ItemList", "OutSystemsUI_2_23.model$CarouselItemsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.model$CarouselOptionalConfigsRec", "UBTConnect.model$HeaderListRec", "OutSystemsUI_2_23.model$ErrorMessageRec", "OutSystemsUI_2_23.controller$SetSplideEvent", "OutSystemsUI_2_23.controller$CarouselDisableOnRender", "OutSystemsUI_2_23.model$SplideConfigsRec", "OutSystemsUI_2_23.controller$SetSplideConfigs", "OutSystemsUI_2_23.controller$UnsetSplideEvent"], function (OutSystems, UBTConnectModel, UBTConnectController, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Caroussel_EntitiesCarousel_mvc_Debugger, UBTConnect_Directory_Caroussel_EntitiesCarousel_mvc_controller_Handler_EntitiesCarousel_Initialized_GetSplideCallbacksJS, UBTConnect_Directory_Caroussel_EntitiesCarousel_mvc_controller_Action_UpdateCarouselInternalPosition_SetInternalPositionJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
handler_EntitiesCarousel_Moved$Action: function (newIndexIn, previousIndexIn, destinationIndexIn) {
newIndexIn = (newIndexIn === undefined) ? 0 : newIndexIn;
previousIndexIn = (previousIndexIn === undefined) ? 0 : previousIndexIn;
destinationIndexIn = (destinationIndexIn === undefined) ? 0 : destinationIndexIn;
return controller.executeActionInsideJSNode(controller._handler_EntitiesCarousel_Moved$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(newIndexIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(previousIndexIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(destinationIndexIn, OS.DataTypes.DataTypes.Integer)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Handler_EntitiesCarousel_Moved");
},
handler_EntitiesCarousel_Move$Action: function (newIndexIn, previousIndexIn, destinationIndexIn) {
newIndexIn = (newIndexIn === undefined) ? 0 : newIndexIn;
previousIndexIn = (previousIndexIn === undefined) ? 0 : previousIndexIn;
destinationIndexIn = (destinationIndexIn === undefined) ? 0 : destinationIndexIn;
return controller.executeActionInsideJSNode(controller._handler_EntitiesCarousel_Move$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(newIndexIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(previousIndexIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(destinationIndexIn, OS.DataTypes.DataTypes.Integer)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Handler_EntitiesCarousel_Move");
}
};
this.dataFetchDependenciesOriginal = {};
this.dataFetchDependentsGraph = {};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._handler_SetHeaderList$Action = function (event_HeaderIn, event_IndexIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_SetHeaderList");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Caroussel.EntitiesCarousel.Handler_SetHeaderList$vars"))());
vars.value.event_HeaderInLocal = event_HeaderIn;
vars.value.event_IndexInLocal = event_IndexIn;
var listIndexOfVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.listIndexOfVar = listIndexOfVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:VVDECBMqnUKjb8O81hvtLg:/NRWebFlows.3kpgKiDrmECLIcldYvdd+A/NodesShownInESpaceTree.L3B1sce_SEqhZtKwjgW+2w/ClientActions.VVDECBMqnUKjb8O81hvtLg:XHyo1y3NKxkD3HGZGeVRBg", "UBTConnect", "Handler_SetHeaderList", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ui8wlsOdXkOiEtkhSu+gRA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:St1LF+Cqzkq_ANbNfTqzYw", callContext.id);
// Execute Action: ListIndexOf
listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.headerListVar, function (p) {
return (p.indexAttr === vars.value.event_IndexInLocal);
}, callContext);

if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:OpqRU5ntQkOOW4uWP9RirA", callContext.id) && ((listIndexOfVar.value.positionOut) !== (-1)))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gr0B_3yqYUOPJla7bq+vZQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hDkazfSaREOOiOVSD0_MMw", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(model.variables.headerListVar, function () {
var rec = new UBTConnectModel.HeaderListRec();
rec.labelAttr = vars.value.event_HeaderInLocal;
rec.indexAttr = vars.value.event_IndexInLocal;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gr0B_3yqYUOPJla7bq+vZQ", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:VVDECBMqnUKjb8O81hvtLg", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_Caroussel.EntitiesCarousel.Handler_SetHeaderList$vars", [{
name: "Event_Header",
attrName: "event_HeaderInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Event_Index",
attrName: "event_IndexInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._handler_EntitiesCarousel_Moved$Action = function (newIndexIn, previousIndexIn, destinationIndexIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_EntitiesCarousel_Moved");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Caroussel.EntitiesCarousel.Handler_EntitiesCarousel_Moved$vars"))());
vars.value.newIndexInLocal = newIndexIn;
vars.value.previousIndexInLocal = previousIndexIn;
vars.value.destinationIndexInLocal = destinationIndexIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:7LocGa3JI0u9W+umU06RKQ:/NRWebFlows.3kpgKiDrmECLIcldYvdd+A/NodesShownInESpaceTree.L3B1sce_SEqhZtKwjgW+2w/ClientActions.7LocGa3JI0u9W+umU06RKQ:vsRpCA+qu6FwS+r+LAlLNQ", "UBTConnect", "Handler_EntitiesCarousel_Moved", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gcRvz_rnHUe7QZUdt0EFlg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MR3v4PANY0qXjHyz3sIRqQ", callContext.id);
// Index_ActiveElement = newIndex
model.variables.index_ActiveElementVar = vars.value.newIndexInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MR3v4PANY0qXjHyz3sIRqQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Index_NextActiveElement = newIndex
model.variables.index_NextActiveElementVar = vars.value.newIndexInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:EsSamLZI5EWtue8gXVJl_A", callContext.id);
// Trigger Event: Event_Moved
return controller.event_Moved$Action(vars.value.newIndexInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LEPzvdq9UUCwzXqgYFEG8w", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:7LocGa3JI0u9W+umU06RKQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:7LocGa3JI0u9W+umU06RKQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Directory_Caroussel.EntitiesCarousel.Handler_EntitiesCarousel_Moved$vars", [{
name: "newIndex",
attrName: "newIndexInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "previousIndex",
attrName: "previousIndexInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "destinationIndex",
attrName: "destinationIndexInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
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
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:W_m0q85yAUGX_UGOuksgyw:/NRWebFlows.3kpgKiDrmECLIcldYvdd+A/NodesShownInESpaceTree.L3B1sce_SEqhZtKwjgW+2w/ClientActions.W_m0q85yAUGX_UGOuksgyw:GfxZ+DVZcbMiokIr9FaMeA", "UBTConnect", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:F+VcTGrZukOfbJhLJob33A", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lBXc2psKykmk_SAk5N7YwA", callContext.id) && !(((model.variables.index_ActiveElementVar) !== (-1))))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:M5nakYQxRk+uSILewomaIw", callContext.id);
// Index_ActiveElement = In_StartingPosition
model.variables.index_ActiveElementVar = model.variables.in_StartingPositionIn;
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:OceIAr4SlECsIWkplgxEDA", callContext.id);
// Index_Initial = Index_ActiveElement
model.variables.index_InitialVar = model.variables.index_ActiveElementVar;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DwvMlZsuqEOLk2mwaQnRxw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:W_m0q85yAUGX_UGOuksgyw", callContext.id);
}

};
Controller.prototype._handler_EntitiesCarousel_Initialized$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_EntitiesCarousel_Initialized");
callContext = controller.callContext(callContext);
var moveVar = new OS.DataTypes.VariableHolder();
var movedVar = new OS.DataTypes.VariableHolder();
var carouselDisableOnRenderVar = new OS.DataTypes.VariableHolder();
var setSplideConfigsVar = new OS.DataTypes.VariableHolder();
var unsetSplideEventVar = new OS.DataTypes.VariableHolder();
var unsetSplideEvent2Var = new OS.DataTypes.VariableHolder();
var getSplideCallbacksJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.moveVar = moveVar;
varBag.movedVar = movedVar;
varBag.carouselDisableOnRenderVar = carouselDisableOnRenderVar;
varBag.setSplideConfigsVar = setSplideConfigsVar;
varBag.unsetSplideEventVar = unsetSplideEventVar;
varBag.unsetSplideEvent2Var = unsetSplideEvent2Var;
varBag.getSplideCallbacksJSResult = getSplideCallbacksJSResult;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:a80Or81mxU2F_701b27Dxg:/NRWebFlows.3kpgKiDrmECLIcldYvdd+A/NodesShownInESpaceTree.L3B1sce_SEqhZtKwjgW+2w/ClientActions.a80Or81mxU2F_701b27Dxg:nmHiJheiHs9KCqTeiYwccw", "UBTConnect", "Handler_EntitiesCarousel_Initialized", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JE8fc3XTSUa09NDhEOnHOQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jtwmWWfCw0y8Q_XIz17Q5w", callContext.id);
// Execute Action: CarouselDisableOnRender
carouselDisableOnRenderVar.value = OutSystemsUI_2_23Controller.default.carouselDisableOnRender$Action(idService.getId("EntitiesCarousel"), callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BlJPcHBT90qpk0gE2utXXA", callContext.id);
// Execute Action: SetSplideConfigs
setSplideConfigsVar.value = OutSystemsUI_2_23Controller.default.setSplideConfigs$Action(idService.getId("EntitiesCarousel"), function () {
var rec = new OutSystemsUI_2_23Model.SplideConfigsRec();
rec.speedAttr = 0;
rec.fixedHeightAttr = "var(--carousel-slide-custom-height)";
rec.perMoveAttr = 1;
rec.flickPowerAttr = 100;
rec.flickMaxPagesAttr = 1;
rec.waitForTransitionAttr = ((model.variables.useMoveHandlerVar) ? (UBTConnectModel.staticEntities.booleanTypes.false) : (UBTConnectModel.staticEntities.booleanTypes.true));
return rec;
}(), callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NGAVmWElSUCWSqJMoi678A", callContext.id);
getSplideCallbacksJSResult.value = controller.safeExecuteJSNode(UBTConnect_Directory_Caroussel_EntitiesCarousel_mvc_controller_Handler_EntitiesCarousel_Initialized_GetSplideCallbacksJS, "GetSplideCallbacks", "Handler_EntitiesCarousel_Initialized", {
Moved: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object),
Move: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object),
Resize: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Caroussel.EntitiesCarousel.Handler_EntitiesCarousel_Initialized$getSplideCallbacksJSResult"))();
jsNodeResult.movedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Moved, OS.DataTypes.DataTypes.Object);
jsNodeResult.moveOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Move, OS.DataTypes.DataTypes.Object);
jsNodeResult.resizeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Resize, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
Handler_EntitiesCarousel_Moved: controller.clientActionProxies.handler_EntitiesCarousel_Moved$Action,
Handler_EntitiesCarousel_Move: controller.clientActionProxies.handler_EntitiesCarousel_Move$Action
}, {});
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:s0xTjtmDf0aRhBKM1zB0Fg", callContext.id);
// Execute Action: UnsetSplideEvent
unsetSplideEventVar.value = OutSystemsUI_2_23Controller.default.unsetSplideEvent$Action(idService.getId("EntitiesCarousel"), "resize", callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+Vv+twvxlEGZDGuMd4QY4A", callContext.id);
// Execute Action: UnsetSplideEvent2
unsetSplideEvent2Var.value = OutSystemsUI_2_23Controller.default.unsetSplideEvent$Action(idService.getId("EntitiesCarousel"), "resized", callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:b2X4IL4wik6hdH_ubw9U6g", callContext.id);
// Execute Action: Moved
movedVar.value = OutSystemsUI_2_23Controller.default.setSplideEvent$Action(idService.getId("EntitiesCarousel"), "moved", getSplideCallbacksJSResult.value.movedOut, callContext);

if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2yUJN+8cY0GhFx2+G6YhyA", callContext.id) && model.variables.useMoveHandlerVar)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+1MvFlyQ8UuHOfruux5eUA", callContext.id);
// Execute Action: Move
moveVar.value = OutSystemsUI_2_23Controller.default.setSplideEvent$Action(idService.getId("EntitiesCarousel"), "move", getSplideCallbacksJSResult.value.moveOut, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Ix7DZAnynE+m4C6_WjyxbA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Ix7DZAnynE+m4C6_WjyxbA", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:a80Or81mxU2F_701b27Dxg", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_Caroussel.EntitiesCarousel.Handler_EntitiesCarousel_Initialized$getSplideCallbacksJSResult", [{
name: "Moved",
attrName: "movedOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "Move",
attrName: "moveOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "Resize",
attrName: "resizeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._action_UpdateCarouselInternalPosition$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_UpdateCarouselInternalPosition");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:r44OwXngcUaSdvPI_v4GDQ:/NRWebFlows.3kpgKiDrmECLIcldYvdd+A/NodesShownInESpaceTree.L3B1sce_SEqhZtKwjgW+2w/ClientActions.r44OwXngcUaSdvPI_v4GDQ:Fm7Ml5dFFuxJy7RfVEZlKQ", "UBTConnect", "Action_UpdateCarouselInternalPosition", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3zCL9VrsCkGJFJB01xyarw", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:llYQBUgQV0CxcBqpEZLuuA", callContext.id);
controller.safeExecuteJSNode(UBTConnect_Directory_Caroussel_EntitiesCarousel_mvc_controller_Action_UpdateCarouselInternalPosition_SetInternalPositionJS, "SetInternalPosition", "Action_UpdateCarouselInternalPosition", {
InternalPosition: OS.DataConversion.JSNodeParamConverter.to(model.variables.index_ActiveElementVar, OS.DataTypes.DataTypes.Integer),
CarouselWidgetId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("EntitiesCarousel"), OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:idv5d5aKtka1+c+IvkCRkg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:r44OwXngcUaSdvPI_v4GDQ", callContext.id);
}

};
Controller.prototype._handler_EntitiesCarousel_Move$Action = function (newIndexIn, previousIndexIn, destinationIndexIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_EntitiesCarousel_Move");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Caroussel.EntitiesCarousel.Handler_EntitiesCarousel_Move$vars"))());
vars.value.newIndexInLocal = newIndexIn;
vars.value.previousIndexInLocal = previousIndexIn;
vars.value.destinationIndexInLocal = destinationIndexIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:aQ+S6zwZX0GofvEOUt8PLQ:/NRWebFlows.3kpgKiDrmECLIcldYvdd+A/NodesShownInESpaceTree.L3B1sce_SEqhZtKwjgW+2w/ClientActions.aQ+S6zwZX0GofvEOUt8PLQ:2AMk_upt1HbeDWPecXKUQw", "UBTConnect", "Handler_EntitiesCarousel_Move", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Q78eGRypp02GkXTxyEwYTQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cfKwIUr_0kGe0Cr3OsjT2w", callContext.id);
// Index_NextActiveElement = newIndex
model.variables.index_NextActiveElementVar = vars.value.newIndexInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IDSQjXVRP0ma7IA5OEjRjQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:aQ+S6zwZX0GofvEOUt8PLQ", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_Caroussel.EntitiesCarousel.Handler_EntitiesCarousel_Move$vars", [{
name: "newIndex",
attrName: "newIndexInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "previousIndex",
attrName: "previousIndexInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "destinationIndex",
attrName: "destinationIndexInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);

Controller.prototype.handler_SetHeaderList$Action = function (event_HeaderIn, event_IndexIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_SetHeaderList$Action, callContext, event_HeaderIn, event_IndexIn);

};
Controller.prototype.handler_EntitiesCarousel_Moved$Action = function (newIndexIn, previousIndexIn, destinationIndexIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_EntitiesCarousel_Moved$Action, callContext, newIndexIn, previousIndexIn, destinationIndexIn);

};
Controller.prototype.screenEvent_OnInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._screenEvent_OnInitialize$Action, callContext);

};
Controller.prototype.handler_EntitiesCarousel_Initialized$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_EntitiesCarousel_Initialized$Action, callContext);

};
Controller.prototype.action_UpdateCarouselInternalPosition$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_UpdateCarouselInternalPosition$Action, callContext);

};
Controller.prototype.handler_EntitiesCarousel_Move$Action = function (newIndexIn, previousIndexIn, destinationIndexIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_EntitiesCarousel_Move$Action, callContext, newIndexIn, previousIndexIn, destinationIndexIn);

};
Controller.prototype.event_SetHeader$Action = function () {
return Promise.resolve();
};
Controller.prototype.event_Moved$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:3kpgKiDrmECLIcldYvdd+A:/NRWebFlows.3kpgKiDrmECLIcldYvdd+A:uGYi+UeKE4QciHgKGLa3sw", "UBTConnect", "Directory_Caroussel", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:L3B1sce_SEqhZtKwjgW+2w:/NRWebFlows.3kpgKiDrmECLIcldYvdd+A/NodesShownInESpaceTree.L3B1sce_SEqhZtKwjgW+2w:dbzq6kdepdt7kYjcKo+bLQ", "UBTConnect", "EntitiesCarousel", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:L3B1sce_SEqhZtKwjgW+2w", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:3kpgKiDrmECLIcldYvdd+A", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Caroussel/EntitiesCarousel On Initialize");
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
define("UBTConnect.Directory_Caroussel.EntitiesCarousel.mvc$controller.Handler_EntitiesCarousel_Initialized.GetSplideCallbacksJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Moved = $actions.Handler_EntitiesCarousel_Moved;
$parameters.Move = $actions.Handler_EntitiesCarousel_Move;
};
});
define("UBTConnect.Directory_Caroussel.EntitiesCarousel.mvc$controller.Action_UpdateCarouselInternalPosition.SetInternalPositionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const carousel = OutSystems.OSUI.Patterns.CarouselAPI.GetCarouselItemById($parameters.CarouselWidgetId);
if (carousel && carousel.provider) {
    carousel.configs.StartingPosition = $parameters.InternalPosition;//carousel.provider.index;
}
};
});

define("UBTConnect.Directory_Caroussel.EntitiesCarousel.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"nvPB3Q_if0aUoKHRJ_z1HA": {
getter: function (varBag, idService) {
return varBag.vars.value.event_HeaderInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"klErTYyZnUy5HbIiTCh_dQ": {
getter: function (varBag, idService) {
return varBag.vars.value.event_IndexInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"St1LF+Cqzkq_ANbNfTqzYw": {
getter: function (varBag, idService) {
return varBag.listIndexOfVar.value;
}
},
"a0DZcPzwMkGsGM4TGwrxfA": {
getter: function (varBag, idService) {
return varBag.vars.value.newIndexInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"aggBeFPQVEaEHY7sqiD7UQ": {
getter: function (varBag, idService) {
return varBag.vars.value.previousIndexInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"5R5URnOCuEy4vR0xmcyRIg": {
getter: function (varBag, idService) {
return varBag.vars.value.destinationIndexInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"+1MvFlyQ8UuHOfruux5eUA": {
getter: function (varBag, idService) {
return varBag.moveVar.value;
}
},
"b2X4IL4wik6hdH_ubw9U6g": {
getter: function (varBag, idService) {
return varBag.movedVar.value;
}
},
"jtwmWWfCw0y8Q_XIz17Q5w": {
getter: function (varBag, idService) {
return varBag.carouselDisableOnRenderVar.value;
}
},
"BlJPcHBT90qpk0gE2utXXA": {
getter: function (varBag, idService) {
return varBag.setSplideConfigsVar.value;
}
},
"s0xTjtmDf0aRhBKM1zB0Fg": {
getter: function (varBag, idService) {
return varBag.unsetSplideEventVar.value;
}
},
"+Vv+twvxlEGZDGuMd4QY4A": {
getter: function (varBag, idService) {
return varBag.unsetSplideEvent2Var.value;
}
},
"NGAVmWElSUCWSqJMoi678A": {
getter: function (varBag, idService) {
return varBag.getSplideCallbacksJSResult.value;
}
},
"llYQBUgQV0CxcBqpEZLuuA": {
getter: function (varBag, idService) {
return varBag.setInternalPositionJSResult.value;
}
},
"gzxjNXZoF0WBhrOEjoTHjg": {
getter: function (varBag, idService) {
return varBag.vars.value.newIndexInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"v+M4gTcMJEOumNF6JS14xw": {
getter: function (varBag, idService) {
return varBag.vars.value.previousIndexInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"Xjka67OUWUiEtd0Ps+K3wg": {
getter: function (varBag, idService) {
return varBag.vars.value.destinationIndexInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"TDJab4e760yCsv_a3oTjGg": {
getter: function (varBag, idService) {
return varBag.model.variables.index_InitialVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"cTUnHZHF+Ea791rJMg62QQ": {
getter: function (varBag, idService) {
return varBag.model.variables.index_ActiveElementVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"UhCZ0xDDdUiCCJOLcV91og": {
getter: function (varBag, idService) {
return varBag.model.variables.index_NextActiveElementVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"5Fr7osUu9EKCdL+xnjKxGQ": {
getter: function (varBag, idService) {
return varBag.model.variables.headerListVar;
}
},
"es_JyF1_6k2c9GRTt4P+1w": {
getter: function (varBag, idService) {
return varBag.model.variables.renderBufferVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"QYySJsTkO0Ozud6maxBf_g": {
getter: function (varBag, idService) {
return varBag.model.variables.useMoveHandlerVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"4Ip9m0mYkECDrTBqHldAxA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EntitiesCarousel_ItemsIn;
}
},
"9CBEt5IWpkKn5yrdCxkkeQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_StartingPositionIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"bnawdMGSj0q0450cV14rAA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ConnectEntityTypeIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"rf2vDAKImkGMusIg_dJnPA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("EntitiesCarousel"));
})(varBag.model, idService);
}
},
"rLt1KzC8aUm785YqGKdsxg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CarouselItems"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
