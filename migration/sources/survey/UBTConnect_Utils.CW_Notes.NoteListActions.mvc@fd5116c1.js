define("UBTConnect_Utils.CW_Notes.NoteListActions.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnectLibrary.model", "UBTConnect_Utils.controller", "UBTConnect_Notes_MCS.controller", "UBTConnectLibrary.ConnectPatterns.Note_Item_List.mvc$model", "UBTConnectLibrary.model$NotesRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$Note_ItemRec", "UBTConnect_Utils.model$Note_ItemList", "UBTConnect_Utils.controller$Note_SendFeedbackMessages", "UBTConnect_Notes_MCS.controller$CreateOrUpdate_LocalNote", "UBTConnect_Utils.referencesHealth$UBTConnect_Notes_MCS", "UBTConnect_Notes_MCS.controller$Delete_LocalNoteByNoteId"], function (OutSystems, UBTConnect_UtilsModel, UBTConnectLibraryModel, UBTConnect_UtilsController, UBTConnect_Notes_MCSController, UBTConnectLibrary_ConnectPatterns_Note_Item_List_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("EditingNoteId", "editingNoteIdVar", "EditingNoteId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(0);
}, false), 
this.attr("NotesData", "notesDataVar", "NotesData", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.NotesRec());
}, false, UBTConnectLibraryModel.NotesRec), 
this.attr("In_ItemId", "in_ItemIdIn", "In_ItemId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_ItemIdInDataFetchStatus", "_in_ItemIdInDataFetchStatus", "_in_ItemIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_NoteCategoryId", "in_NoteCategoryIdIn", "In_NoteCategoryId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_NoteCategoryIdInDataFetchStatus", "_in_NoteCategoryIdInDataFetchStatus", "_in_NoteCategoryIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Notes", "notesIn", "Notes", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.NotesRec());
}, false, UBTConnectLibraryModel.NotesRec), 
this.attr("_notesInDataFetchStatus", "_notesInDataFetchStatus", "_notesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ShowPreviewOnly", "in_ShowPreviewOnlyIn", "In_ShowPreviewOnly", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_ShowPreviewOnlyInDataFetchStatus", "_in_ShowPreviewOnlyInDataFetchStatus", "_in_ShowPreviewOnlyInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_SearchString", "in_SearchStringIn", "In_SearchString", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_SearchStringInDataFetchStatus", "_in_SearchStringInDataFetchStatus", "_in_SearchStringInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = UBTConnectLibrary_ConnectPatterns_Note_Item_List_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_ItemId" in inputs) {
this.variables.in_ItemIdIn = inputs.In_ItemId;
if("_in_ItemIdInDataFetchStatus" in inputs) {
this.variables._in_ItemIdInDataFetchStatus = inputs._in_ItemIdInDataFetchStatus;
}

}

if("In_NoteCategoryId" in inputs) {
this.variables.in_NoteCategoryIdIn = inputs.In_NoteCategoryId;
if("_in_NoteCategoryIdInDataFetchStatus" in inputs) {
this.variables._in_NoteCategoryIdInDataFetchStatus = inputs._in_NoteCategoryIdInDataFetchStatus;
}

}

if("Notes" in inputs) {
this.variables.notesIn = inputs.Notes;
if("_notesInDataFetchStatus" in inputs) {
this.variables._notesInDataFetchStatus = inputs._notesInDataFetchStatus;
}

}

if("In_ShowPreviewOnly" in inputs) {
this.variables.in_ShowPreviewOnlyIn = inputs.In_ShowPreviewOnly;
if("_in_ShowPreviewOnlyInDataFetchStatus" in inputs) {
this.variables._in_ShowPreviewOnlyInDataFetchStatus = inputs._in_ShowPreviewOnlyInDataFetchStatus;
}

}

if("In_SearchString" in inputs) {
this.variables.in_SearchStringIn = inputs.In_SearchString;
if("_in_SearchStringInDataFetchStatus" in inputs) {
this.variables._in_SearchStringInDataFetchStatus = inputs._in_SearchStringInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "CW_Notes.NoteListActions");
});
define("UBTConnect_Utils.CW_Notes.NoteListActions.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnectLibrary.model", "UBTConnect_Notes_MCS.controller", "react", "OutSystems/ReactView/Main", "UBTConnect_Utils.CW_Notes.NoteListActions.mvc$model", "UBTConnect_Utils.CW_Notes.NoteListActions.mvc$controller", "UBTConnect_Utils.clientVariables", "UBTConnectLibrary.ConnectPatterns.Note_Item_List.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.model$NotesRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$Note_ItemRec", "UBTConnect_Utils.model$Note_ItemList", "UBTConnect_Utils.controller$Note_SendFeedbackMessages", "UBTConnect_Notes_MCS.controller$CreateOrUpdate_LocalNote", "UBTConnect_Utils.referencesHealth$UBTConnect_Notes_MCS", "UBTConnect_Notes_MCS.controller$Delete_LocalNoteByNoteId"], function (OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnectLibraryModel, UBTConnect_Notes_MCSController, React, OSView, UBTConnect_Utils_CW_Notes_NoteListActions_mvc_model, UBTConnect_Utils_CW_Notes_NoteListActions_mvc_controller, UBTConnect_UtilsClientVariables, UBTConnectLibrary_ConnectPatterns_Note_Item_List_mvc_view, OSWidgets) {
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
        View.displayName = "CW_Notes.NoteListActions";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_Note_Item_List_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Utils_CW_Notes_NoteListActions_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Utils_CW_Notes_NoteListActions_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_ConnectPatterns_Note_Item_List_mvc_view, {
inputs: {
In_ShowPreviewOnly: model.variables.in_ShowPreviewOnlyIn,
_in_ShowPreviewOnlyInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ShowPreviewOnlyInDataFetchStatus),
In_SearchString: model.variables.in_SearchStringIn,
_in_SearchStringInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SearchStringInDataFetchStatus),
In_EditingNoteId: model.variables.editingNoteIdVar,
Notes: model.variables.notesDataVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onShowAllNotes$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Note_Item_List OnShowAllNotes");
controller.on_ShowAllNotesRequested$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
onDeleteRequested$Action: function (noteIdIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Note_Item_List OnDeleteRequested");
return controller.handler_OnDeleteNoteRequested$Action(noteIdIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
onEditRequested$Action: function (noteIdIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Note_Item_List OnEditRequested");
return controller.handler_OnEditingRequested$Action(noteIdIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
onCancelEditRequested$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Note_Item_List OnCancelEditRequested");
return controller.handler_OnCancelEditRequested$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
onSaveEditRequested$Action: function (noteIdIn, out_NoteIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Note_Item_List OnSaveEditRequested");
return controller.handler_OnSaveEditRequested$Action(noteIdIn, out_NoteIn, controller.callContext(eventHandlerContext));
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
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect_Utils.CW_Notes.NoteListActions.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnectLibrary.model", "UBTConnect_Notes_MCS.controller", "UBTConnect_Utils.languageResources", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.CW_Notes.NoteListActions.mvc$debugger", "UBTConnectLibrary.model$NotesRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$Note_ItemRec", "UBTConnect_Utils.model$Note_ItemList", "UBTConnect_Utils.controller$Note_SendFeedbackMessages", "UBTConnect_Notes_MCS.controller$CreateOrUpdate_LocalNote", "UBTConnect_Utils.referencesHealth$UBTConnect_Notes_MCS", "UBTConnect_Notes_MCS.controller$Delete_LocalNoteByNoteId"], function (OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnectLibraryModel, UBTConnect_Notes_MCSController, UBTConnect_UtilsLanguageResources, UBTConnect_UtilsClientVariables, UBTConnect_Utils_CW_Notes_NoteListActions_mvc_Debugger) {
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
Controller.prototype.updateNote$ServerAction = function (noteIdIn, noteIn, callContext) {
var controller = this.controller;
var inputs = {
NoteId: OS.DataConversion.ServerDataConverter.to(noteIdIn, OS.DataTypes.DataTypes.LongInteger),
Note: OS.DataConversion.ServerDataConverter.to(noteIn, OS.DataTypes.DataTypes.Text)
};
return controller.callServerAction("UpdateNote", "screenservices/UBTConnect_Utils/CW_Notes/NoteListActions/ServiceAPIUpdateNote", "WzdUCZWLgXIeroQfoj_lJQ", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("UBTConnect_Utils.CW_Notes.NoteListActions$ServiceAPIUpdateNote"))();
executeServerActionResult.successOut = OS.DataConversion.ServerDataConverter.from(outputs.success, OS.DataTypes.DataTypes.Boolean);
executeServerActionResult.isNotFoundOut = OS.DataConversion.ServerDataConverter.from(outputs.IsNotFound, OS.DataTypes.DataTypes.Boolean);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("UBTConnect_Utils.CW_Notes.NoteListActions$ServiceAPIUpdateNote", [{
name: "success",
attrName: "successOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "IsNotFound",
attrName: "isNotFoundOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype.deleteNoteByNoteId$ServerAction = function (noteIdIn, callContext) {
var controller = this.controller;
var inputs = {
NoteId: OS.DataConversion.ServerDataConverter.to(noteIdIn, OS.DataTypes.DataTypes.LongInteger)
};
return controller.callServerAction("DeleteNoteByNoteId", "screenservices/UBTConnect_Utils/CW_Notes/NoteListActions/ServiceAPIDeleteNoteByNoteId", "mSIepZCjFNGITpCrwzO8mQ", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("UBTConnect_Utils.CW_Notes.NoteListActions$ServiceAPIDeleteNoteByNoteId"))();
executeServerActionResult.successOut = OS.DataConversion.ServerDataConverter.from(outputs.Success, OS.DataTypes.DataTypes.Boolean);
executeServerActionResult.wasFoundOut = OS.DataConversion.ServerDataConverter.from(outputs.WasFound, OS.DataTypes.DataTypes.Boolean);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("UBTConnect_Utils.CW_Notes.NoteListActions$ServiceAPIDeleteNoteByNoteId", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "WasFound",
attrName: "wasFoundOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._handler_OnCancelEditRequested$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_OnCancelEditRequested");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:EsVWSK1ipkasYvMgQhmP+Q:/NRWebFlows.4SPMb9EXFkG4E6LhSCJZjQ/NodesShownInESpaceTree.FfUDWRtd5UemqzxRT2Ok5Q/ClientActions.EsVWSK1ipkasYvMgQhmP+Q:r2qE7ru8ajdiNEzUStjpsQ", "UBTConnect_Utils", "Handler_OnCancelEditRequested", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:+LuH4pIFBUK5ZX5nqYaJMg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:8psuwZJ850qjgmDDcMajTQ", callContext.id);
// EditingNoteId = 0
model.variables.editingNoteIdVar = OS.BuiltinFunctions.integerToLongInteger(0);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:anyk0lZzWkW_DJnHgPcQYA", callContext.id);
// Trigger Event: On_EditingStateChanged
return controller.on_EditingStateChanged$Action(false, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:FngM8W7HC0a0+4PPe1RIkg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:EsVWSK1ipkasYvMgQhmP+Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:EsVWSK1ipkasYvMgQhmP+Q", callContext.id);
throw ex;

});
};
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
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:qG_rakwExkSqKfM837GbMA:/NRWebFlows.4SPMb9EXFkG4E6LhSCJZjQ/NodesShownInESpaceTree.FfUDWRtd5UemqzxRT2Ok5Q/ClientActions.qG_rakwExkSqKfM837GbMA:YnyHFn9mnwc8oLWH_zugyw", "UBTConnect_Utils", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:u800s89N3E+SJMcOTTI4fQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:8iYnWaMyokOFQYOV3w_Mfw", callContext.id);
// Execute Action: Set_NotesData
controller._set_NotesData$Action(callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:H9PU5nvk0kGj_v8V+lWuzQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:qG_rakwExkSqKfM837GbMA", callContext.id);
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
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:xaaHhtL3SEaBINvcWXNQiA:/NRWebFlows.4SPMb9EXFkG4E6LhSCJZjQ/NodesShownInESpaceTree.FfUDWRtd5UemqzxRT2Ok5Q/ClientActions.xaaHhtL3SEaBINvcWXNQiA:_c0YcLBladoaVqqO9QOFtw", "UBTConnect_Utils", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:LmZveiED5U69qSj84ZU9PA", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ZxJk4Xx1NkizEwEYmQ6_nA", callContext.id);
// Execute Action: Set_NotesData
controller._set_NotesData$Action(callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:41iihO0yn029FzsKzGU5XQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:xaaHhtL3SEaBINvcWXNQiA", callContext.id);
}

};
Controller.prototype._handler_OnSaveEditRequested$Action = function (noteIdIn, out_NoteIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_OnSaveEditRequested");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.CW_Notes.NoteListActions.Handler_OnSaveEditRequested$vars"))());
vars.value.noteIdInLocal = noteIdIn;
vars.value.out_NoteInLocal = out_NoteIn;
var userExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var updateNoteVar = new OS.DataTypes.VariableHolder();
var listIndexOf2Var = new OS.DataTypes.VariableHolder();
var createOrUpdate_LocalNoteVar = new OS.DataTypes.VariableHolder();
var listIndexOfVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.userExceptionVar = userExceptionVar;
varBag.updateNoteVar = updateNoteVar;
varBag.listIndexOf2Var = listIndexOf2Var;
varBag.createOrUpdate_LocalNoteVar = createOrUpdate_LocalNoteVar;
varBag.listIndexOfVar = listIndexOfVar;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:USM9jBsid0CdV+Q5vwHnGg:/NRWebFlows.4SPMb9EXFkG4E6LhSCJZjQ/NodesShownInESpaceTree.FfUDWRtd5UemqzxRT2Ok5Q/ClientActions.USM9jBsid0CdV+Q5vwHnGg:_8Ri9+Ei_kOPLXwbnucJXA", "UBTConnect_Utils", "Handler_OnSaveEditRequested", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:GzM5mMhnrEu+hAvafjrVjw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:r0M6NKkFikOIpUCW6qZWnA", callContext.id);
// Execute Action: UpdateNote
model.flush();
return controller.updateNote$ServerAction(vars.value.noteIdInLocal, vars.value.out_NoteInLocal, callContext).then(function (value) {
updateNoteVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Umvi6HefhkG3eWRcMPCiIQ", callContext.id) && updateNoteVar.value.successOut)) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:aSb+L7NlR0KMBNwwVKS2JA", callContext.id);
// EditedAt = CurrDateTime
vars.value.editedAtVar = OS.BuiltinFunctions.currDateTime();
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:VQu5zgjkx0yOKVquZP_FGQ", callContext.id);
// Execute Action: ListIndexOf
listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.notesDataVar.note_Item_ListAttr, function (p) {
return p.idAttr.equals(vars.value.noteIdInLocal);
}, callContext);

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:QsreeGuYgUKSR+A3cKunDg", callContext.id);
// EditingNoteId = 0
model.variables.editingNoteIdVar = OS.BuiltinFunctions.integerToLongInteger(0);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:QsreeGuYgUKSR+A3cKunDg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// NewNotes = NotesData
vars.value.newNotesVar = model.variables.notesDataVar;
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:EpW+uWYGP0Wz9SuRhgtUeA", callContext.id) && ((listIndexOfVar.value.positionOut) !== (-1)))) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:FxXYO7mRB0igkJwhpE2dxw", callContext.id);
// Execute Action: CreateOrUpdate_LocalNote
model.flush();
return UBTConnect_Notes_MCSController.default.createOrUpdate_LocalNote$Action(vars.value.noteIdInLocal, model.variables.in_NoteCategoryIdIn, OS.BuiltinFunctions.longIntegerToText(model.variables.in_ItemIdIn), model.variables.notesDataVar.note_Item_ListAttr.getItem(listIndexOfVar.value.positionOut).dateCreatedUtcAttr, vars.value.editedAtVar, callContext).then(function (value) {
createOrUpdate_LocalNoteVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:sBMBhArtcUG0CzUnWr2oXQ", callContext.id);
// NewNotes.Note_Item_List[ListIndexOf.Position].Note = Out_Note
vars.value.newNotesVar.note_Item_ListAttr.getItem(listIndexOfVar.value.positionOut).noteAttr = vars.value.out_NoteInLocal;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:sBMBhArtcUG0CzUnWr2oXQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// NewNotes.Note_Item_List[ListIndexOf.Position].DateEditedUtc = EditedAt
vars.value.newNotesVar.note_Item_ListAttr.getItem(listIndexOfVar.value.positionOut).dateEditedUtcAttr = vars.value.editedAtVar;
});
}

}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:4qzj_A_seEGGOhUD+nWHkA", callContext.id);
// Trigger Event: OnSaveEditNote
return controller.onSaveEditNote$Action(vars.value.newNotesVar, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:bP1nPkwNJECX9HcUUY5I+w", callContext.id);
// Trigger Event: On_EditingStateChanged
return controller.on_EditingStateChanged$Action(false, callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:GAEj0zrOJECd27JApX4Drg", callContext.id);
// Execute Action: Note_SendFeedbackMessages2
UBTConnect_UtilsController.default.note_SendFeedbackMessages$Action(UBTConnect_UtilsModel.staticEntities.noteActionType.edit, true, false, callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:A4p2brlPDk2gRwTLueFISg", callContext.id);
});
});
} else {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ntqj75VOYEG3D6rhiD8qHg", callContext.id) && updateNoteVar.value.isNotFoundOut)) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:cbx4KDY+f0uZ1t9ODZvDmw", callContext.id);
// Execute Action: ListIndexOf2
listIndexOf2Var.value = OS.SystemActions.listIndexOf(model.variables.notesDataVar.note_Item_ListAttr, function (p) {
return p.idAttr.equals(vars.value.noteIdInLocal);
}, callContext);

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:i8EyZQaCQkeON5_EjITnlw", callContext.id);
// Execute Action: Delete_LocalNoteByNoteId
model.flush();
return UBTConnect_Notes_MCSController.default.delete_LocalNoteByNoteId$Action(vars.value.noteIdInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:BxRcsz3G_EK6TKdlB57AUg", callContext.id);
// EditingNoteId = 0
model.variables.editingNoteIdVar = OS.BuiltinFunctions.integerToLongInteger(0);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:BxRcsz3G_EK6TKdlB57AUg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// NewNotes = NotesData
vars.value.newNotesVar = model.variables.notesDataVar;
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:BBZm6CKpuUm3161pFbUOvA", callContext.id) && ((listIndexOf2Var.value.positionOut) !== (-1)))) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:yUkGbODvDU6JnEMnxQ2Rug", callContext.id);
// Execute Action: ListRemove
OS.SystemActions.listRemove(vars.value.newNotesVar.note_Item_ListAttr, listIndexOf2Var.value.positionOut, callContext);
}

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:V6wCTiOOG0myy06fVuivGw", callContext.id);
// Trigger Event: OnSaveEditNote2
return controller.onSaveEditNote$Action(vars.value.newNotesVar, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:rWKe+rXnqkCnW+2yfbDytQ", callContext.id);
// Trigger Event: On_EditingStateChanged2
return controller.on_EditingStateChanged$Action(false, callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:TbYYLqqHQUGgGf3jZVR3mw", callContext.id);
// Execute Action: Note_SendFeedbackMessages3
UBTConnect_UtilsController.default.note_SendFeedbackMessages$Action(UBTConnect_UtilsModel.staticEntities.noteActionType.edit, false, true, callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:YEMlk9GjiUeCFsVR6CaHbw", callContext.id);
});
});
} else {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:AYAkoD882UOUkvLBsjOUZw", callContext.id);
// Execute Action: Note_SendFeedbackMessages
UBTConnect_UtilsController.default.note_SendFeedbackMessages$Action(UBTConnect_UtilsModel.staticEntities.noteActionType.edit, false, false, callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:XbC0cf4JWUWnyFmPQRHASw", callContext.id);
}

});
}

});
});
}).catch(function (ex) {
OS.Logger.trace("NoteListActions.Handler_OnSaveEditRequested", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: UserException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.UserException)) {
OS.Logger.error(null, ex);
userExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(userExceptionVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:u7AdAcXlMUy5Hs9m1Idqmw", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:aMqFyq6vPUmkX8CUw0ijrw", callContext.id);
// Execute Action: Note_SendFeedbackMessages4
UBTConnect_UtilsController.default.note_SendFeedbackMessages$Action(UBTConnect_UtilsModel.staticEntities.noteActionType.edit, false, false, callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:PhYMqDehrkihuG6IO2H4jQ", callContext.id);
return OS.Flow.returnAsync();

});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:USM9jBsid0CdV+Q5vwHnGg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:USM9jBsid0CdV+Q5vwHnGg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect_Utils.CW_Notes.NoteListActions.Handler_OnSaveEditRequested$vars", [{
name: "NoteId",
attrName: "noteIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "Out_Note",
attrName: "out_NoteInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "NewNotes",
attrName: "newNotesVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectLibraryModel.NotesRec();
},
complexType: UBTConnectLibraryModel.NotesRec
}, {
name: "EditedAt",
attrName: "editedAtVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}]);
Controller.prototype._set_NotesData$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Set_NotesData");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:eoC_kCMr302uex8NEexNEQ:/NRWebFlows.4SPMb9EXFkG4E6LhSCJZjQ/NodesShownInESpaceTree.FfUDWRtd5UemqzxRT2Ok5Q/ClientActions.eoC_kCMr302uex8NEexNEQ:y18pMHaQOKRvAnHtkCZeUQ", "UBTConnect_Utils", "Set_NotesData", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:YTmW19PTxUiefSUvM2C31g", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:KCTgewdVO0WSgk1ywiMSKQ", callContext.id);
// NotesData = Notes
model.variables.notesDataVar = model.variables.notesIn;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:QEYpeUQGBEGBH4CwVqaDSQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:eoC_kCMr302uex8NEexNEQ", callContext.id);
}

};
Controller.prototype._handler_OnDeleteNoteRequested$Action = function (noteIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_OnDeleteNoteRequested");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.CW_Notes.NoteListActions.Handler_OnDeleteNoteRequested$vars"))());
vars.value.noteIdInLocal = noteIdIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var deleteNoteByNoteIdVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.deleteNoteByNoteIdVar = deleteNoteByNoteIdVar;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:afWLphKLxka7ese7_ZpVlQ:/NRWebFlows.4SPMb9EXFkG4E6LhSCJZjQ/NodesShownInESpaceTree.FfUDWRtd5UemqzxRT2Ok5Q/ClientActions.afWLphKLxka7ese7_ZpVlQ:QenSBG8QcVGyVOLXBhHzkg", "UBTConnect_Utils", "Handler_OnDeleteNoteRequested", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:2jQPRsalJUig2HuruNUimA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:EBX2j3c4tkuljrnfDmGdXA", callContext.id);
// Execute Action: DeleteNoteByNoteId
model.flush();
return controller.deleteNoteByNoteId$ServerAction(vars.value.noteIdInLocal, callContext).then(function (value) {
deleteNoteByNoteIdVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:w0RX+gKXDUeWfQCJWjctig", callContext.id) && deleteNoteByNoteIdVar.value.successOut)) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:a6MsTua82kSd1679syQIJw", callContext.id);
// Execute Action: Delete_LocalNoteByNoteId
model.flush();
return UBTConnect_Notes_MCSController.default.delete_LocalNoteByNoteId$Action(vars.value.noteIdInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:H_cb03ZhSkOa7QSxwHFijg", callContext.id);
// Trigger Event: On_NoteDeleted
return controller.on_NoteDeleted$Action(vars.value.noteIdInLocal, (model.variables.notesIn.note_Item_ListAttr.length === 1), callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:HE+NgJH7l0Ou5kbB7POGXg", callContext.id);
// Execute Action: Note_SendFeedbackMessages2
UBTConnect_UtilsController.default.note_SendFeedbackMessages$Action(UBTConnect_UtilsModel.staticEntities.noteActionType.delete, true, false, callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:83NG4VmsWEmlQyahV_xuIg", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:GNpNk0c4EUiSEuV10deJjQ", callContext.id);
// Execute Action: Note_SendFeedbackMessages3
UBTConnect_UtilsController.default.note_SendFeedbackMessages$Action(UBTConnect_UtilsModel.staticEntities.noteActionType.delete, false, false, callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:PckZVJyo2EGZcBBoeXYHOA", callContext.id);
}

});
});
}).catch(function (ex) {
OS.Logger.trace("NoteListActions.Handler_OnDeleteNoteRequested", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:kacWKjt6jEazf1f4C+_hUQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:bRQ8VP3nckulE1PzNynJrQ", callContext.id);
// Execute Action: Note_SendFeedbackMessages4
UBTConnect_UtilsController.default.note_SendFeedbackMessages$Action(UBTConnect_UtilsModel.staticEntities.noteActionType.delete, false, false, callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:qTDGvGaU2E+g6ArTCAEXQQ", callContext.id);
return OS.Flow.returnAsync();

});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:afWLphKLxka7ese7_ZpVlQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:afWLphKLxka7ese7_ZpVlQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect_Utils.CW_Notes.NoteListActions.Handler_OnDeleteNoteRequested$vars", [{
name: "NoteId",
attrName: "noteIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Controller.prototype._handler_OnEditingRequested$Action = function (noteIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_OnEditingRequested");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.CW_Notes.NoteListActions.Handler_OnEditingRequested$vars"))());
vars.value.noteIdInLocal = noteIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:YXu3+K9X30S_7ynWor8e9A:/NRWebFlows.4SPMb9EXFkG4E6LhSCJZjQ/NodesShownInESpaceTree.FfUDWRtd5UemqzxRT2Ok5Q/ClientActions.YXu3+K9X30S_7ynWor8e9A:HvNfcf+NNudB_agJFoSECQ", "UBTConnect_Utils", "Handler_OnEditingRequested", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:IjeyFKwAuU2gTloyBbeEAg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:F57+athsAkyeCrsALJgN4A", callContext.id);
// EditingNoteId = NoteId
model.variables.editingNoteIdVar = vars.value.noteIdInLocal;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:S0Wb0oqV4EuUlI7woCihLg", callContext.id);
// Trigger Event: On_EditingStateChanged
return controller.on_EditingStateChanged$Action(true, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:5LU_Qg9WsUatxyBfeKbTsA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:YXu3+K9X30S_7ynWor8e9A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:YXu3+K9X30S_7ynWor8e9A", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect_Utils.CW_Notes.NoteListActions.Handler_OnEditingRequested$vars", [{
name: "NoteId",
attrName: "noteIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);

Controller.prototype.handler_OnCancelEditRequested$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_OnCancelEditRequested$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.handler_OnSaveEditRequested$Action = function (noteIdIn, out_NoteIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_OnSaveEditRequested$Action, callContext, noteIdIn, out_NoteIn);

};
Controller.prototype.set_NotesData$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._set_NotesData$Action, callContext);

};
Controller.prototype.handler_OnDeleteNoteRequested$Action = function (noteIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_OnDeleteNoteRequested$Action, callContext, noteIdIn);

};
Controller.prototype.handler_OnEditingRequested$Action = function (noteIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_OnEditingRequested$Action, callContext, noteIdIn);

};
Controller.prototype.onSaveEditNote$Action = function () {
return Promise.resolve();
};
Controller.prototype.on_EditingStateChanged$Action = function () {
return Promise.resolve();
};
Controller.prototype.on_NoteDeleted$Action = function () {
return Promise.resolve();
};
Controller.prototype.on_ShowAllNotesRequested$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:4SPMb9EXFkG4E6LhSCJZjQ:/NRWebFlows.4SPMb9EXFkG4E6LhSCJZjQ:0RaEk5LY0p_YzKaIrKKzSA", "UBTConnect_Utils", "CW_Notes", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:FfUDWRtd5UemqzxRT2Ok5Q:/NRWebFlows.4SPMb9EXFkG4E6LhSCJZjQ/NodesShownInESpaceTree.FfUDWRtd5UemqzxRT2Ok5Q:dsvfCuF_mX8_LWEw_ne2Rw", "UBTConnect_Utils", "NoteListActions", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:FfUDWRtd5UemqzxRT2Ok5Q", callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:4SPMb9EXFkG4E6LhSCJZjQ", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "CW_Notes/NoteListActions On Initialize");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "CW_Notes/NoteListActions On Parameters Changed");
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
return UBTConnect_UtilsController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnect_UtilsLanguageResources);
});

define("UBTConnect_Utils.CW_Notes.NoteListActions.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"mYl72VQvQkSsk_8y4mpeog": {
getter: function (varBag, idService) {
return varBag.vars.value.newNotesVar;
}
},
"8R1ZqGSdCUa6FxrcIgAlnA": {
getter: function (varBag, idService) {
return varBag.vars.value.editedAtVar;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"yMDkfWgjnEGixJtwoyOu3A": {
getter: function (varBag, idService) {
return varBag.vars.value.noteIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"1NgogzuiJka6aPc1m3gllA": {
getter: function (varBag, idService) {
return varBag.vars.value.out_NoteInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"u7AdAcXlMUy5Hs9m1Idqmw": {
getter: function (varBag, idService) {
return varBag.userExceptionVar.value;
}
},
"r0M6NKkFikOIpUCW6qZWnA": {
getter: function (varBag, idService) {
return varBag.updateNoteVar.value;
}
},
"cbx4KDY+f0uZ1t9ODZvDmw": {
getter: function (varBag, idService) {
return varBag.listIndexOf2Var.value;
}
},
"FxXYO7mRB0igkJwhpE2dxw": {
getter: function (varBag, idService) {
return varBag.createOrUpdate_LocalNoteVar.value;
}
},
"VQu5zgjkx0yOKVquZP_FGQ": {
getter: function (varBag, idService) {
return varBag.listIndexOfVar.value;
}
},
"zfQg+KN1oUKhyZODy4pLTQ": {
getter: function (varBag, idService) {
return varBag.vars.value.noteIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"kacWKjt6jEazf1f4C+_hUQ": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"EBX2j3c4tkuljrnfDmGdXA": {
getter: function (varBag, idService) {
return varBag.deleteNoteByNoteIdVar.value;
}
},
"zjXYWkgBNEKZjYgcoZw+ZQ": {
getter: function (varBag, idService) {
return varBag.vars.value.noteIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"iJ62Az47N0ScBvAb+BLFcQ": {
getter: function (varBag, idService) {
return varBag.model.variables.editingNoteIdVar;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"9lm2dcM3N0epo5XSlVJqlw": {
getter: function (varBag, idService) {
return varBag.model.variables.notesDataVar;
}
},
"fVVRuwMaxkS+fGjrzUaeHQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ItemIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"ak2Oc+vdsUOgs1nx3bJYmg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_NoteCategoryIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"hjonpphDkUy997J6c2flGQ": {
getter: function (varBag, idService) {
return varBag.model.variables.notesIn;
}
},
"ZfSeBjHWikKZZ2A6JuRIdw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ShowPreviewOnlyIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"V+1RKyNp40aMdE38qMG_vQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_SearchStringIn;
},
dataType: OS.DataTypes.DataTypes.Text
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
