define("UBTConnectLibrary.ConnectPatterns.AddNote.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord"], function (OutSystems, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Note", "noteVar", "Note", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("In_Note", "in_NoteIn", "In_Note", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_NoteInDataFetchStatus", "_in_NoteInDataFetchStatus", "_in_NoteInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("IsSubmitting", "isSubmittingIn", "IsSubmitting", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isSubmittingInDataFetchStatus", "_isSubmittingInDataFetchStatus", "_isSubmittingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
return {
TextArea_AddNote: OS.Model.ValidationWidgetRecord
};
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
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
return true;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_Note" in inputs) {
this.variables.in_NoteIn = inputs.In_Note;
if("_in_NoteInDataFetchStatus" in inputs) {
this.variables._in_NoteInDataFetchStatus = inputs._in_NoteInDataFetchStatus;
}

}

if("IsSubmitting" in inputs) {
this.variables.isSubmittingIn = inputs.IsSubmitting;
if("_isSubmittingInDataFetchStatus" in inputs) {
this.variables._isSubmittingInDataFetchStatus = inputs._isSubmittingInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "ConnectPatterns.AddNote");
});
define("UBTConnectLibrary.ConnectPatterns.AddNote.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.AddNote.mvc$model", "UBTConnectLibrary.ConnectPatterns.AddNote.mvc$controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "UBTConnectLibrary.ConnectPatterns.InputCounter.mvc$view", "UBTConnectLibrary.ConnectPatterns.CircleButton_IconPrimary.mvc$view", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_AddNote_mvc_model, UBTConnectLibrary_ConnectPatterns_AddNote_mvc_controller, UBTConnectLibraryClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_ConnectPatterns_InputCounter_mvc_view, UBTConnectLibrary_ConnectPatterns_CircleButton_IconPrimary_mvc_view) {
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
        View.displayName = "ConnectPatterns.AddNote";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_ConnectPatterns_InputCounter_mvc_view, UBTConnectLibrary_ConnectPatterns_CircleButton_IconPrimary_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectPatterns_AddNote_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectPatterns_AddNote_mvc_controller;
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
Options: model.getCachedValue(idService.getId("x41IWFFJB06wTkrosjCt5g.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.horizontalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.base;
rec.topSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.small;
return rec;
}();
rec.borderOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.BorderOptionsRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral3;
rec.sizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.topSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.small;
return rec;
}();
return rec;
}();
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
inputs: {
ColumnOptions: model.getCachedValue(idService.getId("_gdvKhmZXE64OruD2VVwQw.ColumnOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
rec.columnBehaviourAttr = UBTConnectLibraryModel.staticEntities.uBT_ColumnBehaviour.reduceLast;
rec.spacingSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.extraSmall;
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
placeholders: {
left: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.TextArea, {
_validationProps: {
validationService: validationService
},
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
mandatory: false,
maxLength: 150,
prompt: "Add a Note",
style: "form-control note-autogrow",
textLines: 1,
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.noteVar, function (value) {
model.variables.noteVar = value;
}),
_idProps: {
service: idService,
name: "TextArea_AddNote"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(UBTConnectLibrary_ConnectPatterns_InputCounter_mvc_view, {
inputs: {
In_InputId: idService.getId("TextArea_AddNote"),
In_InitialLength: model.getCachedValue(idService.getId("RypxljhR2E2241amQr2+Uw.In_InitialLength"), function () {
return OS.BuiltinFunctions.length(model.variables.noteVar);
}, function () {
return model.variables.noteVar;
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
uuid: "3",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
right: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_CircleButton_IconPrimary_mvc_view, {
inputs: {
IconBackgroundColorId: UBTConnectLibraryModel.staticEntities.uBT_Color.primary,
IconId: UBTConnectLibraryModel.staticEntities.uBT_Icons.send,
IconColorId: UBTConnectLibraryModel.staticEntities.uBT_Color.neutral0,
isEnabled: model.getCachedValue(idService.getId("8PiWQHXMUU69fYIwrUpZnA.isEnabled"), function () {
return (!(model.variables.isSubmittingIn) && ((OS.BuiltinFunctions.trim(model.variables.noteVar)) !== ("")));
}, function () {
return model.variables.isSubmittingIn;
}, function () {
return model.variables.noteVar;
}),
_isEnabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isSubmittingInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onClick$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/CircleButton_IconPrimary OnClick");
return controller.handler_OnSubmitNote$Action(controller.callContext(eventHandlerContext));
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
uuid: "4",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables._isSubmittingInDataFetchStatus), asPrimitiveValue(model.variables.isSubmittingIn), asPrimitiveValue(model.variables.noteVar)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables._isSubmittingInDataFetchStatus), asPrimitiveValue(model.variables.isSubmittingIn), asPrimitiveValue(model.variables.noteVar)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnectLibrary.ConnectPatterns.AddNote.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectPatterns.AddNote.mvc$debugger", "UBTConnectLibrary.ConnectPatterns.AddNote.mvc$controller.OnParametersChanged.JavaScript1JS", "UBTConnectLibrary.ConnectPatterns.AddNote.mvc$controller.OnReady.JavaScript1JS", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectPatterns_AddNote_mvc_Debugger, UBTConnectLibrary_ConnectPatterns_AddNote_mvc_controller_OnParametersChanged_JavaScript1JS, UBTConnectLibrary_ConnectPatterns_AddNote_mvc_controller_OnReady_JavaScript1JS) {
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
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:k0vYNOlDvEyeEzgqWzIo1Q:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.YIQDaAWowEKwO_1rmFJfUQ/ClientActions.k0vYNOlDvEyeEzgqWzIo1Q:rXcdPzeOWUEVrQ447Gfovg", "UBTConnectLibrary", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:hZ7fZD3OW0abWdtoaNz45g", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:LqdWDVAX50GXfaARsX7YWg", callContext.id);
// Note = In_Note
model.variables.noteVar = model.variables.in_NoteIn;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:224LrO_uwk+tk2Z_1ewMig", callContext.id);
controller.safeExecuteJSNode(UBTConnectLibrary_ConnectPatterns_AddNote_mvc_controller_OnParametersChanged_JavaScript1JS, "JavaScript1", "OnParametersChanged", {
TextAreaId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("TextArea_AddNote"), OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:gqp0SSVhNkG44haoNw3Yng", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:k0vYNOlDvEyeEzgqWzIo1Q", callContext.id);
}

};
Controller.prototype._handler_OnSubmitNote$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_OnSubmitNote");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:CIC3bdTFNkahJ_REDwpg2w:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.YIQDaAWowEKwO_1rmFJfUQ/ClientActions.CIC3bdTFNkahJ_REDwpg2w:3fjxRKOrOh2Gnxv2xF4ghg", "UBTConnectLibrary", "Handler_OnSubmitNote", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:fe9yLkN7zk+OFFAAkSivTw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:JJ6XQe+32EG+58_eU1FCAQ", callContext.id);
// Trigger Event: OnSubmitRequested
return controller.onSubmitRequested$Action(model.variables.noteVar, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:s0dRpxKqQkqCG1w1Qt46_Q", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:CIC3bdTFNkahJ_REDwpg2w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:CIC3bdTFNkahJ_REDwpg2w", callContext.id);
throw ex;

});
};
Controller.prototype._onReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:nq6odSmfkk6ZPhwr5hL2Yw:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.YIQDaAWowEKwO_1rmFJfUQ/ClientActions.nq6odSmfkk6ZPhwr5hL2Yw:DAiY7t4oxExoCygreVWGNg", "UBTConnectLibrary", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:rpH6lfxJQkKAV0RkHliXbQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:QN0NEje2f0KoSf7dBIOcYw", callContext.id);
controller.safeExecuteJSNode(UBTConnectLibrary_ConnectPatterns_AddNote_mvc_controller_OnReady_JavaScript1JS, "JavaScript1", "OnReady", {
TextAreaId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("TextArea_AddNote"), OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Fd2BxLNkN0OCfbQi03KtdQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:nq6odSmfkk6ZPhwr5hL2Yw", callContext.id);
}

};

Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.handler_OnSubmitNote$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_OnSubmitNote$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onSubmitRequested$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g:th6DJx0oI5mDufaOXUgceQ", "UBTConnectLibrary", "ConnectPatterns", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:YIQDaAWowEKwO_1rmFJfUQ:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.YIQDaAWowEKwO_1rmFJfUQ:k33gLSWRjyxybB2B12UfPQ", "UBTConnectLibrary", "AddNote", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:YIQDaAWowEKwO_1rmFJfUQ", callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "ConnectPatterns/AddNote On Ready");
return controller.onReady$Action(callContext);

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

OutSystemsDebugger.setThreadStartName(callContext.id, "ConnectPatterns/AddNote On Parameters Changed");
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
return UBTConnectLibraryController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLibraryLanguageResources);
});
define("UBTConnectLibrary.ConnectPatterns.AddNote.mvc$controller.OnParametersChanged.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var el = document.getElementById($parameters.TextAreaId);
if (el && el._autoGrow) {
    setTimeout(el._autoGrow, 0);   // after OutSystems has updated the field's value
}
};
});
define("UBTConnectLibrary.ConnectPatterns.AddNote.mvc$controller.OnReady.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var el = document.getElementById($parameters.TextAreaId);
if (!el || el.dataset.autogrow) { return; }

// Auto-grow: from the field's Text Lines (1 here) up to 6 lines, then scroll inside
function autoGrow() {
    var cs = window.getComputedStyle(el);
    var line = parseFloat(cs.lineHeight);
    if (isNaN(line)) { line = parseFloat(cs.fontSize) * 1.5; }
    var borders = parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth);
    var extra = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom) + borders;
    var minH = line * (el.rows || 1) + extra;
    var maxH = line * 6 + extra;

    el.style.height = 'auto';
    var needed = el.scrollHeight + borders;
    el.style.height = Math.min(Math.max(needed, minH), maxH) + 'px';
    el.style.overflowY = needed > maxH ? 'auto' : 'hidden';

    // If the field sits in a bottom sheet footer, grow (and shrink) the footer with it
    var footer = el.closest('.ubt-bottom-sheet--footer');
    var host = footer && footer.closest('[style*="--bottom-sheet--footer-height"]');
    if (host) {
        if (!host.dataset.footerBase) {
            host.dataset.footerBase =
                parseFloat(getComputedStyle(host).getPropertyValue('--bottom-sheet--footer-height')) || 72;
        }
        var base = parseFloat(host.dataset.footerBase);
        host.style.setProperty('--bottom-sheet--footer-height', base + 'px');   // reset first
        var footerNeeded = footer.scrollHeight;                                   // then measure the content
        host.style.setProperty('--bottom-sheet--footer-height', Math.max(base, footerNeeded) + 'px');
    }
}

el.addEventListener('input', autoGrow);
el.dataset.autogrow = '1';
el._autoGrow = autoGrow;   // lets OnParametersChanged resize the field
autoGrow();
};
});

define("UBTConnectLibrary.ConnectPatterns.AddNote.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"224LrO_uwk+tk2Z_1ewMig": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"QN0NEje2f0KoSf7dBIOcYw": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"MJEk2cryX0+HQWKbzUc+qQ": {
getter: function (varBag, idService) {
return varBag.model.variables.noteVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"h9Xs+x3S0U2izhs5wCnzlQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_NoteIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"sYCRY_2gBEGdkfLEVtNJYg": {
getter: function (varBag, idService) {
return varBag.model.variables.isSubmittingIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"RmCXRQ5WfUmxsm276AbX5g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"iv2+G1_xI0K5Pa_NQC7JFg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"H6f8ReflmkO+lgsFOadhEA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TextArea_AddNote"));
})(varBag.model, idService);
}
},
"rfcyx9JtgkCSvU4KK4rO+w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
