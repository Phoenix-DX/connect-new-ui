define("UBTConnect.Directory_Caroussel.EntitiesCarousel_Element.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect.Directory_Caroussel.EntitiesCarouse_lSupperMeetingDetails.mvc$model", "UBTConnect.Directory_Caroussel.CarouselTag.mvc$model", "UBTConnect.Directory_Caroussel.EntitiesCarousel_HouseholdDetails.mvc$model", "UBTConnect.controller$Get_IsInsideRenderBuffer"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_Directory_Caroussel_EntitiesCarouse_lSupperMeetingDetails_mvcModel, UBTConnect_Directory_Caroussel_CarouselTag_mvcModel, UBTConnect_Directory_Caroussel_EntitiesCarousel_HouseholdDetails_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsInsideRenderBuffer", "isInsideRenderBufferVar", "IsInsideRenderBuffer", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsSinglePassRender", "isSinglePassRenderVar", "IsSinglePassRender", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("IsRenderCurrentElement", "isRenderCurrentElementVar", "IsRenderCurrentElement", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsSkeletonOnly", "isSkeletonOnlyVar", "IsSkeletonOnly", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("In_ConnectEntityTypeId", "in_ConnectEntityTypeIdIn", "In_ConnectEntityTypeId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_ConnectEntityTypeIdInDataFetchStatus", "_in_ConnectEntityTypeIdInDataFetchStatus", "_in_ConnectEntityTypeIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_EntityId", "in_EntityIdIn", "In_EntityId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_EntityIdInDataFetchStatus", "_in_EntityIdInDataFetchStatus", "_in_EntityIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_CarouselLength", "in_CarouselLengthIn", "In_CarouselLength", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("_in_CarouselLengthInDataFetchStatus", "_in_CarouselLengthInDataFetchStatus", "_in_CarouselLengthInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_Index_ActiveElement", "in_Index_ActiveElementIn", "In_Index_ActiveElement", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("_in_Index_ActiveElementInDataFetchStatus", "_in_Index_ActiveElementInDataFetchStatus", "_in_Index_ActiveElementInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_Index_NextActiveElement", "in_Index_NextActiveElementIn", "In_Index_NextActiveElement", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("_in_Index_NextActiveElementInDataFetchStatus", "_in_Index_NextActiveElementInDataFetchStatus", "_in_Index_NextActiveElementInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_Index_CurrentElement", "in_Index_CurrentElementIn", "In_Index_CurrentElement", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("_in_Index_CurrentElementInDataFetchStatus", "_in_Index_CurrentElementInDataFetchStatus", "_in_Index_CurrentElementInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_RenderBuffer", "in_RenderBufferIn", "In_RenderBuffer", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("_in_RenderBufferInDataFetchStatus", "_in_RenderBufferInDataFetchStatus", "_in_RenderBufferInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = ((UBTConnect_Directory_Caroussel_EntitiesCarouse_lSupperMeetingDetails_mvcModel.hasValidationWidgets || UBTConnect_Directory_Caroussel_CarouselTag_mvcModel.hasValidationWidgets) || UBTConnect_Directory_Caroussel_EntitiesCarousel_HouseholdDetails_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_ConnectEntityTypeId" in inputs) {
this.variables.in_ConnectEntityTypeIdIn = inputs.In_ConnectEntityTypeId;
if("_in_ConnectEntityTypeIdInDataFetchStatus" in inputs) {
this.variables._in_ConnectEntityTypeIdInDataFetchStatus = inputs._in_ConnectEntityTypeIdInDataFetchStatus;
}

}

if("In_EntityId" in inputs) {
this.variables.in_EntityIdIn = inputs.In_EntityId;
if("_in_EntityIdInDataFetchStatus" in inputs) {
this.variables._in_EntityIdInDataFetchStatus = inputs._in_EntityIdInDataFetchStatus;
}

}

if("In_CarouselLength" in inputs) {
this.variables.in_CarouselLengthIn = inputs.In_CarouselLength;
if("_in_CarouselLengthInDataFetchStatus" in inputs) {
this.variables._in_CarouselLengthInDataFetchStatus = inputs._in_CarouselLengthInDataFetchStatus;
}

}

if("In_Index_ActiveElement" in inputs) {
this.variables.in_Index_ActiveElementIn = inputs.In_Index_ActiveElement;
if("_in_Index_ActiveElementInDataFetchStatus" in inputs) {
this.variables._in_Index_ActiveElementInDataFetchStatus = inputs._in_Index_ActiveElementInDataFetchStatus;
}

}

if("In_Index_NextActiveElement" in inputs) {
this.variables.in_Index_NextActiveElementIn = inputs.In_Index_NextActiveElement;
if("_in_Index_NextActiveElementInDataFetchStatus" in inputs) {
this.variables._in_Index_NextActiveElementInDataFetchStatus = inputs._in_Index_NextActiveElementInDataFetchStatus;
}

}

if("In_Index_CurrentElement" in inputs) {
this.variables.in_Index_CurrentElementIn = inputs.In_Index_CurrentElement;
if("_in_Index_CurrentElementInDataFetchStatus" in inputs) {
this.variables._in_Index_CurrentElementInDataFetchStatus = inputs._in_Index_CurrentElementInDataFetchStatus;
}

}

if("In_RenderBuffer" in inputs) {
this.variables.in_RenderBufferIn = inputs.In_RenderBuffer;
if("_in_RenderBufferInDataFetchStatus" in inputs) {
this.variables._in_RenderBufferInDataFetchStatus = inputs._in_RenderBufferInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Directory_Caroussel.EntitiesCarousel_Element");
});
define("UBTConnect.Directory_Caroussel.EntitiesCarousel_Element.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Caroussel.EntitiesCarousel_Element.mvc$model", "UBTConnect.Directory_Caroussel.EntitiesCarousel_Element.mvc$controller", "UBTConnect.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnect.Directory_Caroussel.EntitiesCarouse_lSupperMeetingDetails.mvc$view", "UBTConnect.Directory_Caroussel.CarouselTag.mvc$view", "UBTConnect.Directory_Caroussel.EntitiesCarousel_HouseholdDetails.mvc$view", "UBTConnect.controller$Get_IsInsideRenderBuffer"], function (OutSystems, UBTConnectModel, UBTConnectController, React, OSView, UBTConnect_Directory_Caroussel_EntitiesCarousel_Element_mvc_model, UBTConnect_Directory_Caroussel_EntitiesCarousel_Element_mvc_controller, UBTConnectClientVariables, OSWidgets, UBTConnect_Directory_Caroussel_EntitiesCarouse_lSupperMeetingDetails_mvc_view, UBTConnect_Directory_Caroussel_CarouselTag_mvc_view, UBTConnect_Directory_Caroussel_EntitiesCarousel_HouseholdDetails_mvc_view) {
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
        View.displayName = "Directory_Caroussel.EntitiesCarousel_Element";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_Directory_Caroussel_EntitiesCarouse_lSupperMeetingDetails_mvc_view, UBTConnect_Directory_Caroussel_CarouselTag_mvc_view, UBTConnect_Directory_Caroussel_EntitiesCarousel_HouseholdDetails_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Directory_Caroussel_EntitiesCarousel_Element_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Directory_Caroussel_EntitiesCarousel_Element_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(model.variables.isRenderCurrentElementVar, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if((model.variables.in_ConnectEntityTypeIdIn === UBTConnectModel.staticEntities.connect_Entity.supperMeetings_aka_Subdivisions), false, this, function () {
return [React.createElement(UBTConnect_Directory_Caroussel_EntitiesCarouse_lSupperMeetingDetails_mvc_view, {
inputs: {
In_SubdivisionId: model.variables.in_EntityIdIn,
_in_SubdivisionIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EntityIdInDataFetchStatus)
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
placeholder_CarouselTag: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Directory_Caroussel_CarouselTag_mvc_view, {
inputs: {
In_TotalItems: model.variables.in_CarouselLengthIn,
_in_TotalItemsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_CarouselLengthInDataFetchStatus),
In_IndexCurrentItem: model.variables.in_Index_CurrentElementIn,
_in_IndexCurrentItemInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_Index_CurrentElementInDataFetchStatus)
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
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_Index_CurrentElementIn), asPrimitiveValue(model.variables._in_Index_CurrentElementInDataFetchStatus), asPrimitiveValue(model.variables._in_CarouselLengthInDataFetchStatus), asPrimitiveValue(model.variables.in_CarouselLengthIn)]
})];
}, function () {
return [];
}), $if((model.variables.in_ConnectEntityTypeIdIn === UBTConnectModel.staticEntities.connect_Entity.household), false, this, function () {
return [React.createElement(UBTConnect_Directory_Caroussel_EntitiesCarousel_HouseholdDetails_mvc_view, {
inputs: {
In_HouseholdId: model.variables.in_EntityIdIn,
_in_HouseholdIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EntityIdInDataFetchStatus),
In_IsSkeletonOnly: model.variables.isSkeletonOnlyVar
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Caroussel/EntitiesCarousel_HouseholdDetails Event_SetHeader");
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
uuid: "3",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_CarouselTag: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Directory_Caroussel_CarouselTag_mvc_view, {
inputs: {
In_TotalItems: model.variables.in_CarouselLengthIn,
_in_TotalItemsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_CarouselLengthInDataFetchStatus),
In_IndexCurrentItem: model.variables.in_Index_CurrentElementIn,
_in_IndexCurrentItemInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_Index_CurrentElementInDataFetchStatus)
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
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_Index_CurrentElementIn), asPrimitiveValue(model.variables._in_Index_CurrentElementInDataFetchStatus), asPrimitiveValue(model.variables._in_CarouselLengthInDataFetchStatus), asPrimitiveValue(model.variables.in_CarouselLengthIn)]
})];
}, function () {
return [];
}))];
}, function () {
return [];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.Directory_Caroussel.EntitiesCarousel_Element.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Caroussel.EntitiesCarousel_Element.mvc$debugger", "UBTConnect.controller$Get_IsInsideRenderBuffer"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Caroussel_EntitiesCarousel_Element_mvc_Debugger) {
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
Controller.prototype._screenEvent_OnReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ScreenEvent_OnReady");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:oxWkHjVEFUqxXw9oxo__Ow:/NRWebFlows.3kpgKiDrmECLIcldYvdd+A/NodesShownInESpaceTree.vSKr98W4AU+yPD8PsfbrrQ/ClientActions.oxWkHjVEFUqxXw9oxo__Ow:1S15k0MMPRavoUPyFP6ubg", "UBTConnect", "ScreenEvent_OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qwR7hd9eH0CcXu_6jw8YeA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cAzCsEv7R0m71U222xLvUA", callContext.id);
// Execute Action: ScreenEvent_OnParametersChanged
controller._screenEvent_OnParametersChanged$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9WT4kNONQUWxxYxAm1CXog", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:oxWkHjVEFUqxXw9oxo__Ow", callContext.id);
}

};
Controller.prototype._screenEvent_OnParametersChanged$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ScreenEvent_OnParametersChanged");
callContext = controller.callContext(callContext);
var get_IsInsideRenderBuffer_ActiveElementVar = new OS.DataTypes.VariableHolder();
var get_IsInsideRenderBuffer_NextActiveElementVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.get_IsInsideRenderBuffer_ActiveElementVar = get_IsInsideRenderBuffer_ActiveElementVar;
varBag.get_IsInsideRenderBuffer_NextActiveElementVar = get_IsInsideRenderBuffer_NextActiveElementVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:lcf2KO9iREGuI1j3GPe7UQ:/NRWebFlows.3kpgKiDrmECLIcldYvdd+A/NodesShownInESpaceTree.vSKr98W4AU+yPD8PsfbrrQ/ClientActions.lcf2KO9iREGuI1j3GPe7UQ:Mmw_RKf3acy_3dEEZZM60Q", "UBTConnect", "ScreenEvent_OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PxCTbFOUW062h_nuphjdFg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:m7SHYNlEdkq5sqsRoKV7AQ", callContext.id);
// Execute Action: Get_IsInsideRenderBuffer_ActiveElement
get_IsInsideRenderBuffer_ActiveElementVar.value = UBTConnectController.default.get_IsInsideRenderBuffer$Action(model.variables.in_RenderBufferIn, model.variables.in_Index_CurrentElementIn, model.variables.in_Index_ActiveElementIn, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YCm0a60BQU6c5AtHMRWn6g", callContext.id);
// Execute Action: Get_IsInsideRenderBuffer_NextActiveElement
get_IsInsideRenderBuffer_NextActiveElementVar.value = UBTConnectController.default.get_IsInsideRenderBuffer$Action(model.variables.in_RenderBufferIn, model.variables.in_Index_CurrentElementIn, model.variables.in_Index_NextActiveElementIn, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GZGOw+XQu0WfAxgtTz_sIw", callContext.id);
// IsInsideRenderBuffer = Get_IsInsideRenderBuffer_ActiveElement.IsInsideRenderBuffer or Get_IsInsideRenderBuffer_NextActiveElement.IsInsideRenderBuffer
model.variables.isInsideRenderBufferVar = (get_IsInsideRenderBuffer_ActiveElementVar.value.isInsideRenderBufferOut || get_IsInsideRenderBuffer_NextActiveElementVar.value.isInsideRenderBufferOut);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GZGOw+XQu0WfAxgtTz_sIw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// IsSkeletonOnly = notGet_IsInsideRenderBuffer_ActiveElement.IsInsideRenderBuffer
model.variables.isSkeletonOnlyVar = !(get_IsInsideRenderBuffer_ActiveElementVar.value.isInsideRenderBufferOut);
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:J19L609NX0+qwKI+l2rUDQ", callContext.id) && model.variables.isSinglePassRenderVar)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PMp4hPOWAUy1A50lC0_jZA", callContext.id);
// IsRenderCurrentElement = IsRenderCurrentElement or IsInsideRenderBuffer
model.variables.isRenderCurrentElementVar = (model.variables.isRenderCurrentElementVar || model.variables.isInsideRenderBufferVar);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SP6bfDmHL0yKI91SSmy0vg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CTkROC87JkiMkj5LgpHQdA", callContext.id);
// IsRenderCurrentElement = IsInsideRenderBuffer
model.variables.isRenderCurrentElementVar = model.variables.isInsideRenderBufferVar;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SP6bfDmHL0yKI91SSmy0vg", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:lcf2KO9iREGuI1j3GPe7UQ", callContext.id);
}

};

Controller.prototype.screenEvent_OnReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._screenEvent_OnReady$Action, callContext);

};
Controller.prototype.screenEvent_OnParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._screenEvent_OnParametersChanged$Action, callContext);

};
Controller.prototype.event_SetHeader$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:3kpgKiDrmECLIcldYvdd+A:/NRWebFlows.3kpgKiDrmECLIcldYvdd+A:uGYi+UeKE4QciHgKGLa3sw", "UBTConnect", "Directory_Caroussel", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:vSKr98W4AU+yPD8PsfbrrQ:/NRWebFlows.3kpgKiDrmECLIcldYvdd+A/NodesShownInESpaceTree.vSKr98W4AU+yPD8PsfbrrQ:y_Drd40jYAsvBLVecaa1jQ", "UBTConnect", "EntitiesCarousel_Element", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:vSKr98W4AU+yPD8PsfbrrQ", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:3kpgKiDrmECLIcldYvdd+A", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Caroussel/EntitiesCarousel_Element On Ready");
return controller.screenEvent_OnReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Caroussel/EntitiesCarousel_Element On Parameters Changed");
return controller.screenEvent_OnParametersChanged$Action(callContext);

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

define("UBTConnect.Directory_Caroussel.EntitiesCarousel_Element.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"m7SHYNlEdkq5sqsRoKV7AQ": {
getter: function (varBag, idService) {
return varBag.get_IsInsideRenderBuffer_ActiveElementVar.value;
}
},
"YCm0a60BQU6c5AtHMRWn6g": {
getter: function (varBag, idService) {
return varBag.get_IsInsideRenderBuffer_NextActiveElementVar.value;
}
},
"_gRiTS779ECTdtjtFRYzBQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isInsideRenderBufferVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"vro0ZTkAvEOEtx5Gb+LNIg": {
getter: function (varBag, idService) {
return varBag.model.variables.isSinglePassRenderVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Yrzwb9HZ0ESiZ9Otun_yyg": {
getter: function (varBag, idService) {
return varBag.model.variables.isRenderCurrentElementVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"5dhoNyahDUGujUkDwvPMiA": {
getter: function (varBag, idService) {
return varBag.model.variables.isSkeletonOnlyVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Z63VuD8nFEOPcDq8DJa9iw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ConnectEntityTypeIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"96TiRIF3Jk+6CEnsp1RURw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EntityIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"z4VuQV6eE0OGwBf_RhoVuQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_CarouselLengthIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"Kq_QFPavw0yrcUbC6hw7Rg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_Index_ActiveElementIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"oLP3QQ2ddkChLF_acQWh5w": {
getter: function (varBag, idService) {
return varBag.model.variables.in_Index_NextActiveElementIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"q2z0q71ty0SO9ijNCVQvxQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_Index_CurrentElementIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"fwUAPARxmk2L9_xJGhkLQw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_RenderBufferIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"zTC6o0gQFUuk13s9J_PTww": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("IsSubdivisions"));
})(varBag.model, idService);
}
},
"SOAyzBPKb0enNI8Ekjhh_w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_CarouselTag"));
})(varBag.model, idService);
}
},
"SJIbGin7c0ek+6IQPUNGtg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("IsHousehold"));
})(varBag.model, idService);
}
},
"3I7tu4oN_EmXt3TpYXUIhg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_CarouselTag"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
