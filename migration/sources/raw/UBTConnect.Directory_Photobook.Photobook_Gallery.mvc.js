define("UBTConnect.Directory_Photobook.Photobook_Gallery.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnect.Directory_Photobook.Photobook_Options_Bottom.mvc$model", "UBTConnect.Directory_Photobook.Photobook_Gallery_Item.mvc$model", "OutSystemsUI_2_23.Utilities.TouchEvents.mvc$model", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnect.model$SelectedHouseholdRec"], function (OutSystems, UBTConnectModel, UBTConnectLibraryModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnect_Directory_Photobook_Photobook_Options_Bottom_mvcModel, UBTConnect_Directory_Photobook_Photobook_Gallery_Item_mvcModel, OutSystemsUI_2_23_Utilities_TouchEvents_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("SelectedPosition", "selectedPositionVar", "SelectedPosition", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("MainContainerClass", "mainContainerClassVar", "MainContainerClass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "photobook-gallery";
}, false), 
this.attr("In_LocalityHouseholdIds", "in_LocalityHouseholdIdsIn", "In_LocalityHouseholdIds", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.LongIntegerList());
}, false, OS.DataTypes.LongIntegerList), 
this.attr("_in_LocalityHouseholdIdsInDataFetchStatus", "_in_LocalityHouseholdIdsInDataFetchStatus", "_in_LocalityHouseholdIdsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_SelectedPosition", "in_SelectedPositionIn", "In_SelectedPosition", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("_in_SelectedPositionInDataFetchStatus", "_in_SelectedPositionInDataFetchStatus", "_in_SelectedPositionInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_IsShow", "in_IsShowIn", "In_IsShow", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsShowInDataFetchStatus", "_in_IsShowInDataFetchStatus", "_in_IsShowInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (((UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets || UBTConnect_Directory_Photobook_Photobook_Options_Bottom_mvcModel.hasValidationWidgets) || UBTConnect_Directory_Photobook_Photobook_Gallery_Item_mvcModel.hasValidationWidgets) || OutSystemsUI_2_23_Utilities_TouchEvents_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_LocalityHouseholdIds" in inputs) {
this.variables.in_LocalityHouseholdIdsIn = inputs.In_LocalityHouseholdIds;
if("_in_LocalityHouseholdIdsInDataFetchStatus" in inputs) {
this.variables._in_LocalityHouseholdIdsInDataFetchStatus = inputs._in_LocalityHouseholdIdsInDataFetchStatus;
}

}

if("In_SelectedPosition" in inputs) {
this.variables.in_SelectedPositionIn = inputs.In_SelectedPosition;
if("_in_SelectedPositionInDataFetchStatus" in inputs) {
this.variables._in_SelectedPositionInDataFetchStatus = inputs._in_SelectedPositionInDataFetchStatus;
}

}

if("In_IsShow" in inputs) {
this.variables.in_IsShowIn = inputs.In_IsShow;
if("_in_IsShowInDataFetchStatus" in inputs) {
this.variables._in_IsShowInDataFetchStatus = inputs._in_IsShowInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Directory_Photobook.Photobook_Gallery");
});
define("UBTConnect.Directory_Photobook.Photobook_Gallery.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Photobook.Photobook_Gallery.mvc$model", "UBTConnect.Directory_Photobook.Photobook_Gallery.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.Directory_Photobook.Photobook_Options_Bottom.mvc$view", "UBTConnect.Directory_Photobook.Photobook_Gallery_Item.mvc$view", "OutSystemsUI_2_23.Utilities.TouchEvents.mvc$view", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnect.model$SelectedHouseholdRec"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, React, OSView, UBTConnect_Directory_Photobook_Photobook_Gallery_mvc_model, UBTConnect_Directory_Photobook_Photobook_Gallery_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnect_Directory_Photobook_Photobook_Options_Bottom_mvc_view, UBTConnect_Directory_Photobook_Photobook_Gallery_Item_mvc_view, OutSystemsUI_2_23_Utilities_TouchEvents_mvc_view) {
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
        View.displayName = "Directory_Photobook.Photobook_Gallery";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnect_Directory_Photobook_Photobook_Options_Bottom_mvc_view, UBTConnect_Directory_Photobook_Photobook_Gallery_Item_mvc_view, OutSystemsUI_2_23_Utilities_TouchEvents_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Directory_Photobook_Photobook_Gallery_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Directory_Photobook_Photobook_Gallery_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("Household_Gallery_Cont.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.marginSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
return rec;
}();
rec.displayOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
rec.displayAttr = UBTConnectModel.staticEntities.uBT_Display.flex;
rec.alignItemsAttr = UBTConnectModel.staticEntities.uBT_AlignItems.center;
rec.flexDirectionAttr = UBTConnectModel.staticEntities.uBT_FlexDirection.column;
return rec;
}();
rec.visibilityAttr = ((model.variables.in_IsShowIn) ? (UBTConnectModel.staticEntities.uBT_Visibility.visible) : (UBTConnectModel.staticEntities.uBT_Visibility.hidden));
return rec;
}();
}, function () {
return model.variables.in_IsShowIn;
}),
_optionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsShowInDataFetchStatus),
ExtendedClasses: model.variables.mainContainerClassVar
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
name: "Household_Gallery_Cont",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Directory_Photobook_Photobook_Options_Bottom_mvc_view, {
inputs: {
In_IsShow: model.variables.in_IsShowIn,
_in_IsShowInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsShowInDataFetchStatus),
In_MainContainerClass: model.variables.mainContainerClassVar,
In_CurrentPosition: model.variables.selectedPositionVar,
In_TotalHouseholds: model.variables.in_LocalityHouseholdIdsIn.length,
_in_TotalHouseholdsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_LocalityHouseholdIdsInDataFetchStatus)
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
}), React.createElement(OSWidgets.List, {
animateItems: true,
extendedEvents: {
"componentdidmount": function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Photobook/Photobook_Gallery/Photobook_Gallery_List componentdidmount");
controller.scrollSelectedIntoPosition$Action(true, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
extendedProperties: {
"disable-virtualization": "True"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.in_LocalityHouseholdIdsIn,
style: (("list list-group " + model.variables.mainContainerClassVar) + "--list"),
tag: "div",
_idProps: {
service: idService,
name: "Photobook_Gallery_List"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_LocalityHouseholdIdsInDataFetchStatus),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(UBTConnect_Directory_Photobook_Photobook_Gallery_Item_mvc_view, {
inputs: {
In_IsActive: (model.variables.selectedPositionVar === model.variables.in_LocalityHouseholdIdsIn.getCurrentRowNumber(callContext.iterationContext)),
_in_IsActiveInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_LocalityHouseholdIdsInDataFetchStatus),
In_TargetSubClass: (model.variables.mainContainerClassVar + "--item"),
In_HouseholdId: model.variables.in_LocalityHouseholdIdsIn.getCurrent(callContext.iterationContext),
_in_HouseholdIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_LocalityHouseholdIdsInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
clicked$Action: function (event_HouseholdIdIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Photobook/Photobook_Gallery_Item Clicked");
return controller.handler_ClickedHousehold$Action(function () {
var rec = new UBTConnectModel.SelectedHouseholdRec();
rec.idAttr = event_HouseholdIdIn;
rec.positionAttr = model.variables.in_LocalityHouseholdIdsIn.getCurrentRowNumber(callContext.iterationContext);
return rec;
}(), controller.callContext(eventHandlerContext));
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
uuid: "3",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables.mainContainerClassVar), asPrimitiveValue(model.variables._in_LocalityHouseholdIdsInDataFetchStatus), asPrimitiveValue(model.variables.selectedPositionVar)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_LocalityHouseholdIdsIn), asPrimitiveValue(model.variables.selectedPositionVar), asPrimitiveValue(model.variables.mainContainerClassVar), asPrimitiveValue(model.variables._in_LocalityHouseholdIdsInDataFetchStatus), asPrimitiveValue(model.variables._in_IsShowInDataFetchStatus), asPrimitiveValue(model.variables.in_IsShowIn)]
}), React.createElement(OutSystemsUI_2_23_Utilities_TouchEvents_mvc_view, {
inputs: {
WidgetId: idService.getId("Photobook_Gallery_List"),
PreventDefaults: false
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
end$Action: function (xIn, yIn, offsetXIn, offsetYIn, timeTakenIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Utilities2/TouchEvents End");
controller.listTouchEnd$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
start$Action: function (xIn, yIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Utilities2/TouchEvents Start");
controller.listTouchStart$Action(controller.callContext(eventHandlerContext));
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
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.Directory_Photobook.Photobook_Gallery.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Photobook.Photobook_Gallery.mvc$debugger", "UBTConnect.Directory_Photobook.Photobook_Gallery.mvc$controller.ScrollSelectedIntoPosition.ScrollIntoPositionJS", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnect.model$SelectedHouseholdRec"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Photobook_Photobook_Gallery_mvc_Debugger, UBTConnect_Directory_Photobook_Photobook_Gallery_mvc_controller_ScrollSelectedIntoPosition_ScrollIntoPositionJS) {
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
Controller.prototype._checkIfScrollIsNeeded$Action = function (targetPositionIn, forceScrollIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("CheckIfScrollIsNeeded");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Gallery.CheckIfScrollIsNeeded$vars"))());
vars.value.targetPositionInLocal = targetPositionIn;
vars.value.forceScrollInLocal = forceScrollIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:snPECgciu0K8QeayPPt5sw:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.5pdOqwse702emJPwQNlrDA/ClientActions.snPECgciu0K8QeayPPt5sw:vcE2AJ3GhczTQetTbu26gw", "UBTConnect", "CheckIfScrollIsNeeded", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:twGxiO7Vn06vylyvXdsKEg", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SZ+BqNXrGk+goooJTvp8Xg", callContext.id) && !(vars.value.forceScrollInLocal))) {
// Already Selected?
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hJJB+A_S_0iy6vP1IoerSw", callContext.id) && (vars.value.targetPositionInLocal === model.variables.selectedPositionVar))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zlqCveRPrUSUL9Qg4Swv0g", callContext.id);
return ;

}

}

// Set new Selected
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mwTSFm_9lUGpdQVoQ1blGA", callContext.id);
// SelectedPosition = TargetPosition
model.variables.selectedPositionVar = vars.value.targetPositionInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LZPDVI8nx0mn6ACzpoS9iA", callContext.id);
// Execute Action: ScrollSelectedIntoPosition
controller._scrollSelectedIntoPosition$Action(false, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5_6o1ka+Lkel6IfyQ2p6VQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:snPECgciu0K8QeayPPt5sw", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Gallery.CheckIfScrollIsNeeded$vars", [{
name: "TargetPosition",
attrName: "targetPositionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "ForceScroll",
attrName: "forceScrollInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._handler_ClickedHousehold$Action = function (clickedHouseholdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_ClickedHousehold");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Gallery.Handler_ClickedHousehold$vars"))());
vars.value.clickedHouseholdInLocal = clickedHouseholdIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:QSUKIAUrzECN8rFL9EAhPA:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.5pdOqwse702emJPwQNlrDA/ClientActions.QSUKIAUrzECN8rFL9EAhPA:HwpBJ7LTXC5asHteRXha7w", "UBTConnect", "Handler_ClickedHousehold", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:n85vLxZgqEGupiKstZu_iA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zSYXowZ9TE6sVjxYoBSWGQ", callContext.id);
// Execute Action: CheckIfScrollIsNeeded
controller._checkIfScrollIsNeeded$Action(vars.value.clickedHouseholdInLocal.positionAttr, false, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:yAnB0Uk2NECSWw3q0N4iOw", callContext.id);
// Trigger Event: Clicked
return controller.clicked$Action(function () {
var rec = new UBTConnectModel.SelectedHouseholdRec();
rec.idAttr = vars.value.clickedHouseholdInLocal.idAttr;
rec.positionAttr = model.variables.selectedPositionVar;
return rec;
}(), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ev8aA1nNxUGAI1Jm_B2Iow", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:QSUKIAUrzECN8rFL9EAhPA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:QSUKIAUrzECN8rFL9EAhPA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Gallery.Handler_ClickedHousehold$vars", [{
name: "ClickedHousehold",
attrName: "clickedHouseholdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectModel.SelectedHouseholdRec();
},
complexType: UBTConnectModel.SelectedHouseholdRec
}]);
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
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:WfuWKyVMVU6pyjDsnD1QAA:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.5pdOqwse702emJPwQNlrDA/ClientActions.WfuWKyVMVU6pyjDsnD1QAA:q68nAFd5HqYK9JCTE4pY3g", "UBTConnect", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Sd7BJpdQoUuDOmbbJgFxsg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:06xXo45aOEWhCw_UmZ5f2w", callContext.id);
// Execute Action: CheckIfScrollIsNeeded
controller._checkIfScrollIsNeeded$Action(model.variables.in_SelectedPositionIn, !(model.variables.in_IsShowIn), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Q3VpNZhKOECs+Avf7FBj9A", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:WfuWKyVMVU6pyjDsnD1QAA", callContext.id);
}

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
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Om0eUlzx0UGTVXglSMZT+A:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.5pdOqwse702emJPwQNlrDA/ClientActions.Om0eUlzx0UGTVXglSMZT+A:OWC67CUuId2OKoOV+s_4RQ", "UBTConnect", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Eqt6oR+rMEiLWvCfEGBxEg", callContext.id);
// Set Selected Position
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8V+1rIDD6k+PG5fZst66Qw", callContext.id);
// SelectedPosition = In_SelectedPosition
model.variables.selectedPositionVar = model.variables.in_SelectedPositionIn;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:F7223Ig2cECNRFp5GDabhQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Om0eUlzx0UGTVXglSMZT+A", callContext.id);
}

};
Controller.prototype._scrollSelectedIntoPosition$Action = function (isInstantScrollIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ScrollSelectedIntoPosition");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Gallery.ScrollSelectedIntoPosition$vars"))());
vars.value.isInstantScrollInLocal = isInstantScrollIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:GIUnYb4Vp06piemkit9RWA:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.5pdOqwse702emJPwQNlrDA/ClientActions.GIUnYb4Vp06piemkit9RWA:DNdVj9Zsq7O8gzMkMlaFBg", "UBTConnect", "ScrollSelectedIntoPosition", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:y670bpoF_UKNUf6k4318Rg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:B+U_CJE_tEyQKGlOGyAN3A", callContext.id);
controller.safeExecuteJSNode(UBTConnect_Directory_Photobook_Photobook_Gallery_mvc_controller_ScrollSelectedIntoPosition_ScrollIntoPositionJS, "ScrollIntoPosition", "ScrollSelectedIntoPosition", {
MainContainerClass: OS.DataConversion.JSNodeParamConverter.to(model.variables.mainContainerClassVar, OS.DataTypes.DataTypes.Text),
IsInstantScroll: OS.DataConversion.JSNodeParamConverter.to(vars.value.isInstantScrollInLocal, OS.DataTypes.DataTypes.Boolean),
ScrollableContainerId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Photobook_Gallery_List"), OS.DataTypes.DataTypes.Text),
ElementSubClass: OS.DataConversion.JSNodeParamConverter.to((model.variables.mainContainerClassVar + "--item"), OS.DataTypes.DataTypes.Text),
SelectedItemPosition: OS.DataConversion.JSNodeParamConverter.to(OS.BuiltinFunctions.integerToLongInteger((model.variables.selectedPositionVar + 1)), OS.DataTypes.DataTypes.LongInteger)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XOwUcMRr_0eztlsCwa7N+Q", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:GIUnYb4Vp06piemkit9RWA", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Gallery.ScrollSelectedIntoPosition$vars", [{
name: "IsInstantScroll",
attrName: "isInstantScrollInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);

Controller.prototype.checkIfScrollIsNeeded$Action = function (targetPositionIn, forceScrollIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._checkIfScrollIsNeeded$Action, callContext, targetPositionIn, forceScrollIn);

};
Controller.prototype.handler_ClickedHousehold$Action = function (clickedHouseholdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_ClickedHousehold$Action, callContext, clickedHouseholdIn);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.scrollSelectedIntoPosition$Action = function (isInstantScrollIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._scrollSelectedIntoPosition$Action, callContext, isInstantScrollIn);

};
Controller.prototype.clicked$Action = function () {
return Promise.resolve();
};
Controller.prototype.listTouchStart$Action = function () {
return Promise.resolve();
};
Controller.prototype.listTouchEnd$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:8oQxJd3P8Uyxf_ey5QuLaQ:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ:2C839kPvosckW+xI1T0rUw", "UBTConnect", "Directory_Photobook", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:5pdOqwse702emJPwQNlrDA:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.5pdOqwse702emJPwQNlrDA:1fOudH_mu1s_QgHvLt3fIA", "UBTConnect", "Photobook_Gallery", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:5pdOqwse702emJPwQNlrDA", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:8oQxJd3P8Uyxf_ey5QuLaQ", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Photobook/Photobook_Gallery On Initialize");
return controller.onInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Photobook/Photobook_Gallery On Parameters Changed");
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
define("UBTConnect.Directory_Photobook.Photobook_Gallery.mvc$controller.ScrollSelectedIntoPosition.ScrollIntoPositionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const scrollableList = document.getElementById($parameters.ScrollableContainerId);
if(scrollableList){
    const targetEle = document.querySelectorAll("." + $parameters.MainContainerClass + " .OSBlockWidget:has(." + $parameters.ElementSubClass + ")")[0];
    const itemPosition = $parameters.SelectedItemPosition;
    if(targetEle && itemPosition){
        const eleStats = {
            rect: targetEle.getBoundingClientRect(),
            styles: window.getComputedStyle(targetEle)
        }
        const eleValues = {
            marginLeft: parseFloat(eleStats.styles.marginLeft),
            marginRight: parseFloat(eleStats.styles.marginRight)
        }
        const eleWidth = eleStats.rect.width + eleValues.marginLeft + eleValues.marginRight;

        const scrollAmount = (itemPosition * eleWidth) - ((eleValues.marginRight / 2) + (eleWidth / 2));

        scrollableList.scroll(
            {
                left: scrollAmount,
                behavior: $parameters.IsInstantScroll ? "instant" : "smooth"
            }
        );
    }
}
};
});

define("UBTConnect.Directory_Photobook.Photobook_Gallery.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"uuMVFv6ib0mggqrVtpYNAg": {
getter: function (varBag, idService) {
return varBag.vars.value.targetPositionInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"j+iLXQGXMk+H2+h+6jgaFw": {
getter: function (varBag, idService) {
return varBag.vars.value.forceScrollInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"S0hhOG0tuUOmzWGs7vOXoQ": {
getter: function (varBag, idService) {
return varBag.vars.value.clickedHouseholdInLocal;
}
},
"E23ePJ_5PkaiRwVkkHQJyA": {
getter: function (varBag, idService) {
return varBag.vars.value.isInstantScrollInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"B+U_CJE_tEyQKGlOGyAN3A": {
getter: function (varBag, idService) {
return varBag.scrollIntoPositionJSResult.value;
}
},
"7lMxqLfPyU2Zg0PbbCq+og": {
getter: function (varBag, idService) {
return varBag.model.variables.selectedPositionVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"sQvnl7EyrEi+T1024PiNyQ": {
getter: function (varBag, idService) {
return varBag.model.variables.mainContainerClassVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"vpJldksr40W4Okpa_7sagg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_LocalityHouseholdIdsIn;
}
},
"1MHf77BoWUCUwXWHUapY6w": {
getter: function (varBag, idService) {
return varBag.model.variables.in_SelectedPositionIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"+YBx5NnhWkiZDxB7t8feqw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsShowIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"b3jpbj5RSUuOOJQQ5z0r8w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Household_Gallery_Cont"));
})(varBag.model, idService);
}
},
"2C_nqxMy6Uerm1fAicpn2A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"lT51LJoE7Uy8LV801kCkrQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Photobook_Gallery_List"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
