define("UBTConnect.Directory_Photobook.Photobook_Options_Player.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function (OutSystems, UBTConnectModel, UBTConnectLibraryModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsPlay", "isPlayVar", "IsPlay", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("In_MainContainerClass", "in_MainContainerClassIn", "In_MainContainerClass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_MainContainerClassInDataFetchStatus", "_in_MainContainerClassInDataFetchStatus", "_in_MainContainerClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_IsShow", "in_IsShowIn", "In_IsShow", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsShowInDataFetchStatus", "_in_IsShowInDataFetchStatus", "_in_IsShowInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_IsFinalItem", "in_IsFinalItemIn", "In_IsFinalItem", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsFinalItemInDataFetchStatus", "_in_IsFinalItemInDataFetchStatus", "_in_IsFinalItemInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_MainContainerClass" in inputs) {
this.variables.in_MainContainerClassIn = inputs.In_MainContainerClass;
if("_in_MainContainerClassInDataFetchStatus" in inputs) {
this.variables._in_MainContainerClassInDataFetchStatus = inputs._in_MainContainerClassInDataFetchStatus;
}

}

if("In_IsShow" in inputs) {
this.variables.in_IsShowIn = inputs.In_IsShow;
if("_in_IsShowInDataFetchStatus" in inputs) {
this.variables._in_IsShowInDataFetchStatus = inputs._in_IsShowInDataFetchStatus;
}

}

if("In_IsFinalItem" in inputs) {
this.variables.in_IsFinalItemIn = inputs.In_IsFinalItem;
if("_in_IsFinalItemInDataFetchStatus" in inputs) {
this.variables._in_IsFinalItemInDataFetchStatus = inputs._in_IsFinalItemInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Directory_Photobook.Photobook_Options_Player");
});
define("UBTConnect.Directory_Photobook.Photobook_Options_Player.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Photobook.Photobook_Options_Player.mvc$model", "UBTConnect.Directory_Photobook.Photobook_Options_Player.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, React, OSView, UBTConnect_Directory_Photobook_Photobook_Options_Player_mvc_model, UBTConnect_Directory_Photobook_Photobook_Options_Player_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view) {
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
        View.displayName = "Directory_Photobook.Photobook_Options_Player";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Directory_Photobook_Photobook_Options_Player_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Directory_Photobook_Photobook_Options_Player_mvc_controller;
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
ExtendedClasses: (model.variables.in_MainContainerClassIn + "--player"),
_extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MainContainerClassInDataFetchStatus),
Options: model.getCachedValue(idService.getId("Photobook_Options_Player.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.visibilityAttr = ((model.variables.in_IsShowIn) ? (UBTConnectModel.staticEntities.uBT_Visibility.visible) : (UBTConnectModel.staticEntities.uBT_Visibility.hidden));
return rec;
}();
}, function () {
return model.variables.in_IsShowIn;
}),
_optionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsShowInDataFetchStatus)
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
name: "Photobook_Options_Player",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [$if(model.variables.in_IsFinalItemIn, false, this, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.nonStandard_64,
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.replay,
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral0
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
click$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Icon Click");
return controller.handler_ClickReplay$Action(controller.callContext(eventHandlerContext));
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
name: "Photobook_Options_Replay",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [$if(model.variables.isPlayVar, false, this, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.pause,
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral0,
In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.nonStandard_64
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
click$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Icon Click");
return controller.handler_TogglePlay$Action(false, controller.callContext(eventHandlerContext));
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
name: "Photobook_Options_Pause",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.nonStandard_64,
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral0,
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.playArrow
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
click$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Icon Click");
return controller.handler_TogglePlay$Action(true, controller.callContext(eventHandlerContext));
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
name: "Photobook_Options_Play",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.isPlayVar), asPrimitiveValue(model.variables._in_IsFinalItemInDataFetchStatus), asPrimitiveValue(model.variables.in_IsFinalItemIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.Directory_Photobook.Photobook_Options_Player.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Photobook.Photobook_Options_Player.mvc$debugger", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Photobook_Photobook_Options_Player_mvc_Debugger) {
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
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:4Ne6OIiWKU6Gg7m8iNyOaw:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.UAsph7RVoUiuNK4sE6+Edg/ClientActions.4Ne6OIiWKU6Gg7m8iNyOaw:_y3Cu4ojsMnQ41hKMiv5tA", "UBTConnect", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:iKXLUPBRiUOD4IDxn_TOZA", callContext.id);
// Reached the end?
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NUPS5WdDYEOL4G95e5g+xg", callContext.id) && (model.variables.in_IsFinalItemIn && model.variables.isPlayVar))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wZqCEdDMcEOVO75ETp74bQ", callContext.id);
// IsPlay = False
model.variables.isPlayVar = false;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0olsL6B+wUatQnzl_lncUg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0olsL6B+wUatQnzl_lncUg", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:4Ne6OIiWKU6Gg7m8iNyOaw", callContext.id);
}

};
Controller.prototype._handler_TogglePlay$Action = function (isPlayStateIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_TogglePlay");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Options_Player.Handler_TogglePlay$vars"))());
vars.value.isPlayStateInLocal = isPlayStateIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:85DGR66_MEWhxRKjrhvBiQ:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.UAsph7RVoUiuNK4sE6+Edg/ClientActions.85DGR66_MEWhxRKjrhvBiQ:X3vzw_rmAKhetqUIB6vFNA", "UBTConnect", "Handler_TogglePlay", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ftjs2+Saik2Y3jOae56TzQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Toggle IsPlay
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6mJdJxH9LUiGk6NahWb8mw", callContext.id);
// IsPlay = IsPlayState
model.variables.isPlayVar = vars.value.isPlayStateInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:E6OImVmr7EuUn5+tpBzLqA", callContext.id);
// Trigger Event: Clicked
return controller.clicked$Action(model.variables.isPlayVar, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5+60eSATh0CNx9BAryFj9w", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:85DGR66_MEWhxRKjrhvBiQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:85DGR66_MEWhxRKjrhvBiQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Options_Player.Handler_TogglePlay$vars", [{
name: "IsPlayState",
attrName: "isPlayStateInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._handler_ClickReplay$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_ClickReplay");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:+yvBeZm4tE201FdSoqQ0_Q:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.UAsph7RVoUiuNK4sE6+Edg/ClientActions.+yvBeZm4tE201FdSoqQ0_Q:c5ho7iWs5S2bxLb18FqnIw", "UBTConnect", "Handler_ClickReplay", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:p7jt8QGJOkexsAOEL6l65Q", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mmxqn26VeUacZVvdF42RpA", callContext.id);
// IsPlay = True
model.variables.isPlayVar = true;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:v5SrDO2bn0qCG4M9XUPdqA", callContext.id);
// Trigger Event: Replay
return controller.replay$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TWRyXJntH0SKzaNRGDWW+Q", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:+yvBeZm4tE201FdSoqQ0_Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:+yvBeZm4tE201FdSoqQ0_Q", callContext.id);
throw ex;

});
};

Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.handler_TogglePlay$Action = function (isPlayStateIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_TogglePlay$Action, callContext, isPlayStateIn);

};
Controller.prototype.handler_ClickReplay$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_ClickReplay$Action, callContext);

};
Controller.prototype.replay$Action = function () {
return Promise.resolve();
};
Controller.prototype.clicked$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:8oQxJd3P8Uyxf_ey5QuLaQ:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ:2C839kPvosckW+xI1T0rUw", "UBTConnect", "Directory_Photobook", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:UAsph7RVoUiuNK4sE6+Edg:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.UAsph7RVoUiuNK4sE6+Edg:qnOKde7UrSxFjMuSr8xNUw", "UBTConnect", "Photobook_Options_Player", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:UAsph7RVoUiuNK4sE6+Edg", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:8oQxJd3P8Uyxf_ey5QuLaQ", callContext.id);
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Photobook/Photobook_Options_Player On Parameters Changed");
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

define("UBTConnect.Directory_Photobook.Photobook_Options_Player.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"QWRBFjVp70iUWqJ9UJl3nA": {
getter: function (varBag, idService) {
return varBag.vars.value.isPlayStateInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"6gGDKtZryEiulp0drW31Ug": {
getter: function (varBag, idService) {
return varBag.model.variables.isPlayVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"EpejCq+4oE67n2Mvw2ILkA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MainContainerClassIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"SDmyMaQ3akOBC7KdoTdK9Q": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsShowIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"o42Z3Qq2rEiqrBYaOcEc1g": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsFinalItemIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"V8_bFteuc0miY1UmqODmgA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Photobook_Options_Player"));
})(varBag.model, idService);
}
},
"WbQfmhLV1kShpfTV6Vn1Jg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"rlTP+Lo4IU2A298hI_toYw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsFinalItem"));
})(varBag.model, idService);
}
},
"ToPjSEf8xkKHZfU9QPO37A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Photobook_Options_Replay"));
})(varBag.model, idService);
}
},
"NAo3KDyOy0acxIpTapdQZA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsPlay"));
})(varBag.model, idService);
}
},
"DhngPO3epEm9AA_kJfxa9Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Photobook_Options_Pause"));
})(varBag.model, idService);
}
},
"nm55kcvFQU2kaVHrKA_DLg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Photobook_Options_Play"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
