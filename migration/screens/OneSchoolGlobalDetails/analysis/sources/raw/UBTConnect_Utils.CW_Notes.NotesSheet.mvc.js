define("UBTConnect_Utils.CW_Notes.NotesSheet.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnectLibrary.model", "Connect_Notes_CS.model", "UBTConnect_Utils.controller", "UBTConnect_Notes_MCS.controller", "UBTJavaScriptUtils.controller", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$model", "UBTConnect_Utils.CW_Notes.NoteListActions.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.ConnectPatterns.AddNote.mvc$model", "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$model", "UBTConnectLibrary.model$NotesRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$Note_ItemRec", "UBTConnect_Utils.model$Note_ItemList", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "Connect_Notes_CS.model$UI_Note_AddedRec", "UBTConnect_Utils.referencesHealth$Connect_Notes_CS", "UBTConnect_Utils.controller$Note_SendFeedbackMessages", "UBTConnect_Notes_MCS.controller$Create_LocalNote", "UBTConnect_Utils.referencesHealth$UBTConnect_Notes_MCS", "UBTJavaScriptUtils.controller$ScreenModel_Flush", "UBTConnect_Utils.referencesHealth$UBTJavaScriptUtils", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect_Utils.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetClose", "OutSystemsUI_2_23.controller$BottomSheetOpen"], function (OutSystems, UBTConnect_UtilsModel, UBTConnectLibraryModel, Connect_Notes_CSModel, UBTConnect_UtilsController, UBTConnect_Notes_MCSController, UBTJavaScriptUtilsController, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTConnectLibrary_ConnectPatterns_BottomSheet_mvcModel, UBTConnect_Utils_CW_Notes_NoteListActions_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_ConnectPatterns_AddNote_mvcModel, NavigationHandler_NavigationHandler_BackNavigationHandler_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("BottomSheetId", "bottomSheetIdVar", "BottomSheetId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("IsEditing", "isEditingVar", "IsEditing", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsSheetOpen", "isSheetOpenVar", "IsSheetOpen", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("NoteText", "noteTextVar", "NoteText", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("IsSubmittingNote", "isSubmittingNoteVar", "IsSubmittingNote", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("In_IsOpen", "in_IsOpenIn", "In_IsOpen", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsOpenInDataFetchStatus", "_in_IsOpenInDataFetchStatus", "_in_IsOpenInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ExtendedClasses", "extendedClassesIn", "ExtendedClasses", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_extendedClassesInDataFetchStatus", "_extendedClassesInDataFetchStatus", "_extendedClassesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ItemId", "in_ItemIdIn", "In_ItemId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
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
this.attr("In_Notes", "in_NotesIn", "In_Notes", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.NotesRec());
}, false, UBTConnectLibraryModel.NotesRec), 
this.attr("_in_NotesInDataFetchStatus", "_in_NotesInDataFetchStatus", "_in_NotesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = ((((UBTConnectLibrary_ConnectPatterns_BottomSheet_mvcModel.hasValidationWidgets || UBTConnect_Utils_CW_Notes_NoteListActions_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_AddNote_mvcModel.hasValidationWidgets) || NavigationHandler_NavigationHandler_BackNavigationHandler_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_IsOpen" in inputs) {
this.variables.in_IsOpenIn = inputs.In_IsOpen;
if("_in_IsOpenInDataFetchStatus" in inputs) {
this.variables._in_IsOpenInDataFetchStatus = inputs._in_IsOpenInDataFetchStatus;
}

}

if("ExtendedClasses" in inputs) {
this.variables.extendedClassesIn = inputs.ExtendedClasses;
if("_extendedClassesInDataFetchStatus" in inputs) {
this.variables._extendedClassesInDataFetchStatus = inputs._extendedClassesInDataFetchStatus;
}

}

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

if("In_Notes" in inputs) {
this.variables.in_NotesIn = inputs.In_Notes;
if("_in_NotesInDataFetchStatus" in inputs) {
this.variables._in_NotesInDataFetchStatus = inputs._in_NotesInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "CW_Notes.NotesSheet");
});
define("UBTConnect_Utils.CW_Notes.NotesSheet.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnectLibrary.model", "Connect_Notes_CS.model", "UBTConnect_Notes_MCS.controller", "UBTJavaScriptUtils.controller", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "UBTConnect_Utils.CW_Notes.NotesSheet.mvc$model", "UBTConnect_Utils.CW_Notes.NotesSheet.mvc$controller", "UBTConnect_Utils.clientVariables", "UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect_Utils.CW_Notes.NoteListActions.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.ConnectPatterns.AddNote.mvc$view", "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$view", "UBTConnectLibrary.model$NotesRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$Note_ItemRec", "UBTConnect_Utils.model$Note_ItemList", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "Connect_Notes_CS.model$UI_Note_AddedRec", "UBTConnect_Utils.referencesHealth$Connect_Notes_CS", "UBTConnect_Utils.controller$Note_SendFeedbackMessages", "UBTConnect_Notes_MCS.controller$Create_LocalNote", "UBTConnect_Utils.referencesHealth$UBTConnect_Notes_MCS", "UBTJavaScriptUtils.controller$ScreenModel_Flush", "UBTConnect_Utils.referencesHealth$UBTJavaScriptUtils", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect_Utils.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetClose", "OutSystemsUI_2_23.controller$BottomSheetOpen"], function (OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnectLibraryModel, Connect_Notes_CSModel, UBTConnect_Notes_MCSController, UBTJavaScriptUtilsController, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, UBTConnect_Utils_CW_Notes_NotesSheet_mvc_model, UBTConnect_Utils_CW_Notes_NotesSheet_mvc_controller, UBTConnect_UtilsClientVariables, UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_view, OSWidgets, UBTConnect_Utils_CW_Notes_NoteListActions_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_AddNote_mvc_view, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view) {
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
        View.displayName = "CW_Notes.NotesSheet";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/UBTConnect_Utils.CW_Notes.NotesSheet.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_view, UBTConnect_Utils_CW_Notes_NoteListActions_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_AddNote_mvc_view, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Utils_CW_Notes_NotesSheet_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Utils_CW_Notes_NotesSheet_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(model.variables.isSheetOpenVar, false, this, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_view, {
inputs: {
Title: "Note",
ExtendedClasses: model.variables.extendedClassesIn,
_extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassesInDataFetchStatus),
ShowHeader: true,
FooterHeight: "72px"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onToggle$Action: function (isOpenIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/BottomSheet OnToggle");
return controller.bottomSheetOnToggle$Action(isOpenIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
initialized$Action: function (idIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/BottomSheet Initialized");
controller.bottomSheet_Initialized$Action(idIn, controller.callContext(eventHandlerContext));
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
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Utils_CW_Notes_NoteListActions_mvc_view, {
inputs: {
Notes: model.variables.in_NotesIn,
_notesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_NotesInDataFetchStatus),
In_ItemId: model.variables.in_ItemIdIn,
_in_ItemIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ItemIdInDataFetchStatus),
In_ShowPreviewOnly: false,
In_NoteCategoryId: model.variables.in_NoteCategoryIdIn,
_in_NoteCategoryIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_NoteCategoryIdInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
on_NoteDeleted$Action: function (noteIdIn, isLastNoteDeletedIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_Notes/NoteListActions On_NoteDeleted");
controller.on_NoteDeleted$Action(noteIdIn, isLastNoteDeletedIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
on_EditingStateChanged$Action: function (isEditingIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_Notes/NoteListActions On_EditingStateChanged");
controller.handler_OnEditingStateChanged$Action(isEditingIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
onSaveEditNote$Action: function (notesIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_Notes/NoteListActions OnSaveEditNote");
return controller.handler_OnSaveEditNote$Action(notesIn, controller.callContext(eventHandlerContext));
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
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
footer: new PlaceholderContent(function () {
return [$if(model.variables.isEditingVar, false, this, function () {
return [];
}, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("Y4POMOhxEE2L6Y3qHhxbBg.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.backgroundAttr = function () {
var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
return rec;
}();
return rec;
}();
}),
ExtendedClasses: "notes-sheet-footer"
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
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_AddNote_mvc_view, {
inputs: {
In_Note: model.variables.noteTextVar,
IsSubmitting: model.variables.isSubmittingNoteVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onSubmitRequested$Action: function (noteIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/AddNote OnSubmitRequested");
return controller.handler_OnSubmitNote$Action(noteIn, controller.callContext(eventHandlerContext));
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
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.isSubmittingNoteVar), asPrimitiveValue(model.variables.noteTextVar)]
})];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.isSubmittingNoteVar), asPrimitiveValue(model.variables.noteTextVar), asPrimitiveValue(model.variables.isEditingVar), asPrimitiveValue(model.variables.in_NoteCategoryIdIn), asPrimitiveValue(model.variables.in_ItemIdIn), asPrimitiveValue(model.variables._in_NoteCategoryIdInDataFetchStatus), asPrimitiveValue(model.variables._in_ItemIdInDataFetchStatus), asPrimitiveValue(model.variables._in_NotesInDataFetchStatus), asPrimitiveValue(model.variables.in_NotesIn)]
})];
}, function () {
return [];
}), $if(model.variables.isSheetOpenVar, false, this, function () {
return [React.createElement(NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
backNavigation$Action: function (backNavigationEventIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "NavigationHandler/BackNavigationHandler BackNavigation");
controller.backNavigationHandlerBackNavigation$Action(backNavigationEventIn, controller.callContext(eventHandlerContext));
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
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect_Utils.CW_Notes.NotesSheet.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnectLibrary.model", "Connect_Notes_CS.model", "UBTConnect_Notes_MCS.controller", "UBTJavaScriptUtils.controller", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTConnect_Utils.languageResources", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.CW_Notes.NotesSheet.mvc$debugger", "UBTConnect_Utils.CW_Notes.NotesSheet.mvc$controller.OnParametersChanged.DelaySetIsOpenJS", "UBTConnectLibrary.model$NotesRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$Note_ItemRec", "UBTConnect_Utils.model$Note_ItemList", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "Connect_Notes_CS.model$UI_Note_AddedRec", "UBTConnect_Utils.referencesHealth$Connect_Notes_CS", "UBTConnect_Utils.controller$Note_SendFeedbackMessages", "UBTConnect_Notes_MCS.controller$Create_LocalNote", "UBTConnect_Utils.referencesHealth$UBTConnect_Notes_MCS", "UBTJavaScriptUtils.controller$ScreenModel_Flush", "UBTConnect_Utils.referencesHealth$UBTJavaScriptUtils", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect_Utils.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetClose", "OutSystemsUI_2_23.controller$BottomSheetOpen"], function (OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnectLibraryModel, Connect_Notes_CSModel, UBTConnect_Notes_MCSController, UBTJavaScriptUtilsController, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTConnect_UtilsLanguageResources, UBTConnect_UtilsClientVariables, UBTConnect_Utils_CW_Notes_NotesSheet_mvc_Debugger, UBTConnect_Utils_CW_Notes_NotesSheet_mvc_controller_OnParametersChanged_DelaySetIsOpenJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
action_SetBottomSheetOpen$Action: function (in_ValueIn) {
in_ValueIn = (in_ValueIn === undefined) ? false : in_ValueIn;
return controller.executeActionInsideJSNode(controller._action_SetBottomSheetOpen$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_ValueIn, OS.DataTypes.DataTypes.Boolean)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Action_SetBottomSheetOpen");
}
};
this.dataFetchDependenciesOriginal = {};
this.dataFetchDependentsGraph = {};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions
Controller.prototype.addNote$ServerAction = function (noteCategoryIdIn, itemIdIn, noteIn, callContext) {
var controller = this.controller;
var inputs = {
NoteCategoryId: OS.DataConversion.ServerDataConverter.to(noteCategoryIdIn, OS.DataTypes.DataTypes.Text),
ItemId: OS.DataConversion.ServerDataConverter.to(itemIdIn, OS.DataTypes.DataTypes.Text),
Note: OS.DataConversion.ServerDataConverter.to(noteIn, OS.DataTypes.DataTypes.Text)
};
return controller.callServerAction("AddNote", "screenservices/UBTConnect_Utils/CW_Notes/NotesSheet/ServiceAPIAddNote", "hjlAOuRcoakr8q7d_9rZPA", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("UBTConnect_Utils.CW_Notes.NotesSheet$ServiceAPIAddNote"))();
executeServerActionResult.successOut = OS.DataConversion.ServerDataConverter.from(outputs.Success, OS.DataTypes.DataTypes.Boolean);
executeServerActionResult.note_AddedOut = OS.DataConversion.ServerDataConverter.from(outputs.Note_Added, Connect_Notes_CSModel.UI_Note_AddedRec);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("UBTConnect_Utils.CW_Notes.NotesSheet$ServiceAPIAddNote", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Note_Added",
attrName: "note_AddedOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect_Notes_CSModel.UI_Note_AddedRec();
},
complexType: Connect_Notes_CSModel.UI_Note_AddedRec
}]);

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._handler_OnSubmitNote$Action = function (in_NoteIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_OnSubmitNote");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.CW_Notes.NotesSheet.Handler_OnSubmitNote$vars"))());
vars.value.in_NoteInLocal = in_NoteIn;
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var userExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var addNoteVar = new OS.DataTypes.VariableHolder();
var create_LocalNoteVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.communicationExceptionVar = communicationExceptionVar;
varBag.userExceptionVar = userExceptionVar;
varBag.addNoteVar = addNoteVar;
varBag.create_LocalNoteVar = create_LocalNoteVar;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:W5egEFWvqkSy2JfY1mGLwg:/NRWebFlows.4SPMb9EXFkG4E6LhSCJZjQ/NodesShownInESpaceTree.dovFuu7h1Uajpqu__iWf8A/ClientActions.W5egEFWvqkSy2JfY1mGLwg:ZivhKZBinDbEnADAeDnFVw", "UBTConnect_Utils", "Handler_OnSubmitNote", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:t6oQ2qMuTUy+eEVRdyInOg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:M3iliMmZHE2ZA54acR_e3g", callContext.id);
// IsSubmittingNote = True
model.variables.isSubmittingNoteVar = true;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:U4HBGUIatECruczwGbHQVg", callContext.id);
// NoteText = In_Note
model.variables.noteTextVar = vars.value.in_NoteInLocal;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:LRjcDnF6P0a_OTkIZWrOVg", callContext.id);
// Execute Action: AddNote
model.flush();
return controller.addNote$ServerAction(model.variables.in_NoteCategoryIdIn, model.variables.in_ItemIdIn, vars.value.in_NoteInLocal, callContext).then(function (value) {
addNoteVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:8GuHjU3sRU2ffeJ56Nn68Q", callContext.id) && addNoteVar.value.successOut)) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:XW1IOrI3YkqlnjW2Qw30tw", callContext.id);
// NoteText = ""
model.variables.noteTextVar = "";
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:_d0HkNF98kuDyWC2j5P0RQ", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(vars.value.new_NotesVar.note_Item_ListAttr, OS.DataConversion.JSConversions.typeConvertRecord(addNoteVar.value.note_AddedOut, new UBTConnectLibraryModel.Note_ItemRec(), function (source, target) {
target.idAttr = source.idAttr;
target.noteAttr = vars.value.in_NoteInLocal;
target.dateCreatedUtcAttr = source.dateCreatedUtcAttr;
target.dateEditedUtcAttr = source.dateEditedUtcAttr;
return target;
}), callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:1FcC9GvdBki+_qyaBvRYnQ", callContext.id);
// Execute Action: Create_LocalNote
model.flush();
return UBTConnect_Notes_MCSController.default.create_LocalNote$Action(addNoteVar.value.note_AddedOut.idAttr, model.variables.in_NoteCategoryIdIn, model.variables.in_ItemIdIn, addNoteVar.value.note_AddedOut.dateCreatedUtcAttr, addNoteVar.value.note_AddedOut.dateEditedUtcAttr, callContext).then(function (value) {
create_LocalNoteVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:t0CvJirHoE63YP92_rx6Ng", callContext.id);
// New_Notes.Total = In_Notes.Total + 1
vars.value.new_NotesVar.totalAttr = (model.variables.in_NotesIn.totalAttr + 1);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:JJhj9oXkr0elHcx6EYytPw", callContext.id);
// Execute Action: ListAppendAll
OS.SystemActions.listAppendAll(vars.value.new_NotesVar.note_Item_ListAttr, model.variables.in_NotesIn.note_Item_ListAttr, callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:YzG0zRAcckuwjWL30N3FkQ", callContext.id);
// Trigger Event: On_NotesChanged
return controller.on_NotesChanged$Action(vars.value.new_NotesVar, callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:kgROk3dyt0meXwBm9E2h3g", callContext.id);
// Execute Action: Note_SendFeedbackMessages
UBTConnect_UtilsController.default.note_SendFeedbackMessages$Action(UBTConnect_UtilsModel.staticEntities.noteActionType.add, true, false, callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:auHZ2Hg2akGzv3_hw7WjsQ", callContext.id);
// IsSubmittingNote = False
model.variables.isSubmittingNoteVar = false;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Hc7Mfunw7kK_VlM39iENIQ", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:czCGIQSV0EOHVnsdKtRzgg", callContext.id);
// Execute Action: Note_SendFeedbackMessages3
UBTConnect_UtilsController.default.note_SendFeedbackMessages$Action(UBTConnect_UtilsModel.staticEntities.noteActionType.add, false, false, callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:bLYS0NIJLUWghtqwxU2sDw", callContext.id);
// IsSubmittingNote = False
model.variables.isSubmittingNoteVar = false;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Jkd588+Qi0WE03I3Atq22Q", callContext.id);
}

});
});
}).catch(function (ex) {
OS.Logger.trace("NotesSheet.Handler_OnSubmitNote", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(communicationExceptionVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:YtkENjalbE+btJJZF1zGzQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:obvNB_e+90KB9toq1UkX6A", callContext.id);
// IsSubmittingNote = False
model.variables.isSubmittingNoteVar = false;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:hgTL9gdPpk6CG9ET+A9Xqg", callContext.id);
// Raise Error: CommunicationError
throw new OS.Exceptions.Exceptions.UserException("UBTConnect_Utils.CommunicationError", "NoteCommunicationError");
});
}

// Handle Error: UserException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.UserException)) {
OS.Logger.error(null, ex);
userExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(userExceptionVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:PlWB_VX5FkCnGTPdpl09Hg", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:T54XVT16REOHPVPldn7L+g", callContext.id);
// Execute Action: Note_SendFeedbackMessages2
UBTConnect_UtilsController.default.note_SendFeedbackMessages$Action(UBTConnect_UtilsModel.staticEntities.noteActionType.add, false, false, callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:6tQb8hJ7dkWtG9YgCQaDpg", callContext.id);
// IsSubmittingNote = False
model.variables.isSubmittingNoteVar = false;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:pJVSwtk4z0uMzw15oSzRpw", callContext.id);
return OS.Flow.returnAsync();

});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:W5egEFWvqkSy2JfY1mGLwg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:W5egEFWvqkSy2JfY1mGLwg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect_Utils.CW_Notes.NotesSheet.Handler_OnSubmitNote$vars", [{
name: "In_Note",
attrName: "in_NoteInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "New_Notes",
attrName: "new_NotesVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectLibraryModel.NotesRec();
},
complexType: UBTConnectLibraryModel.NotesRec
}]);
Controller.prototype._backNavigationHandlerBackNavigation$Action = function (backNavigationEventIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("BackNavigationHandlerBackNavigation");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.CW_Notes.NotesSheet.BackNavigationHandlerBackNavigation$vars"))());
vars.value.backNavigationEventInLocal = backNavigationEventIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:DW26JbarBUShpZZ4XhqOYw:/NRWebFlows.4SPMb9EXFkG4E6LhSCJZjQ/NodesShownInESpaceTree.dovFuu7h1Uajpqu__iWf8A/ClientActions.DW26JbarBUShpZZ4XhqOYw:st1h3FJAhhJdrYEzOd6WDQ", "UBTConnect_Utils", "BackNavigationHandlerBackNavigation", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:e3nnN99aqk2qUtbuK_a89Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:_k3cnPJc1kOqbU524dGKmQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:DW26JbarBUShpZZ4XhqOYw", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect_Utils.CW_Notes.NotesSheet.BackNavigationHandlerBackNavigation$vars", [{
name: "BackNavigationEvent",
attrName: "backNavigationEventInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._bottomSheetOnToggle$Action = function (isOpenIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("BottomSheetOnToggle");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.CW_Notes.NotesSheet.BottomSheetOnToggle$vars"))());
vars.value.isOpenInLocal = isOpenIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:bk_XPleaOUawJu4S0kVMvQ:/NRWebFlows.4SPMb9EXFkG4E6LhSCJZjQ/NodesShownInESpaceTree.dovFuu7h1Uajpqu__iWf8A/ClientActions.bk_XPleaOUawJu4S0kVMvQ:PMHAfO2TGLHqU0JMpBPSjQ", "UBTConnect_Utils", "BottomSheetOnToggle", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:RyjqQf7suU2pXyGmE1nu3g", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:wJgMkV99M0OEUpWg6buzFg", callContext.id);
// IsSheetOpen = IsOpen
model.variables.isSheetOpenVar = vars.value.isOpenInLocal;
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:IMXdb8WUyUeQ0n122FhycQ", callContext.id) && ((vars.value.isOpenInLocal === false) && (model.variables.in_IsOpenIn === true)))) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:xnYZHKCCk0eE8FM0By5QQA", callContext.id);
// Execute Action: Handler_OnNoteSheet_Closed
return controller._handler_OnNoteSheet_Closed$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:So8g63dcXUmSL11N6sBQMg", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:bFSpAxgXi0mghDGpGGZ43A", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:bk_XPleaOUawJu4S0kVMvQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:bk_XPleaOUawJu4S0kVMvQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect_Utils.CW_Notes.NotesSheet.BottomSheetOnToggle$vars", [{
name: "IsOpen",
attrName: "isOpenInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._bottomSheet_Initialized$Action = function (idIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("BottomSheet_Initialized");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.CW_Notes.NotesSheet.BottomSheet_Initialized$vars"))());
vars.value.idInLocal = idIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:jhXrZr63ZEO2EYhIY7oQFw:/NRWebFlows.4SPMb9EXFkG4E6LhSCJZjQ/NodesShownInESpaceTree.dovFuu7h1Uajpqu__iWf8A/ClientActions.jhXrZr63ZEO2EYhIY7oQFw:xUKZJnQ66m0YZKWZp+tdcA", "UBTConnect_Utils", "BottomSheet_Initialized", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:ImFuRSxRakCbCYp7W3UA+A", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:AneCnpnqvU6WPPu4LCvPsg", callContext.id);
// BottomSheetId = Id
model.variables.bottomSheetIdVar = vars.value.idInLocal;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:GycUmpN3H0mLATpoz7dv8A", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:jhXrZr63ZEO2EYhIY7oQFw", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect_Utils.CW_Notes.NotesSheet.BottomSheet_Initialized$vars", [{
name: "Id",
attrName: "idInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
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
var bottomSheetCloseVar = new OS.DataTypes.VariableHolder();
var bottomSheetOpenVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.bottomSheetCloseVar = bottomSheetCloseVar;
varBag.bottomSheetOpenVar = bottomSheetOpenVar;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:M7ELec41WE6p38XucSbUvg:/NRWebFlows.4SPMb9EXFkG4E6LhSCJZjQ/NodesShownInESpaceTree.dovFuu7h1Uajpqu__iWf8A/ClientActions.M7ELec41WE6p38XucSbUvg:zsTAKp0hKHdy4PZ0+k7xZg", "UBTConnect_Utils", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:V4WYj1HdMUGm8yWD+A6Z_w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:GWuzNIRRb0WnXBXHZ9A04A", callContext.id) && ((model.variables.in_IsOpenIn) !== (model.variables.isSheetOpenVar)))) {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:YfgVFVNlVUqXpq3UxjN_Nw", callContext.id) && model.variables.in_IsOpenIn)) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:TXXJdsaffU66OUOphLrT5Q", callContext.id);
// Execute Action: Action_SetBottomSheetOpen
controller._action_SetBottomSheetOpen$Action(true, callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:DBdnMmI6AkGf2BckE1j_iw", callContext.id);
// Execute Action: ScreenModel_Flush
model.flush();
return UBTJavaScriptUtilsController.default.screenModel_Flush$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:zapJgp6hFUWwX6ppMUM5Gw", callContext.id);
// Execute Action: BottomSheetOpen
bottomSheetOpenVar.value = OutSystemsUI_2_23Controller.default.bottomSheetOpen$Action(model.variables.bottomSheetIdVar, callContext);

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:16CwmG0n50+Tecv3EmSP0w", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:edrZMtCgXEmLMZEUb_Sg3w", callContext.id);
controller.safeExecuteJSNode(UBTConnect_Utils_CW_Notes_NotesSheet_mvc_controller_OnParametersChanged_DelaySetIsOpenJS, "DelaySetIsOpen", "OnParametersChanged", {
In_SheetElementId: OS.DataConversion.JSNodeParamConverter.to(model.variables.bottomSheetIdVar, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {
Action_SetBottomSheetOpen: controller.clientActionProxies.action_SetBottomSheetOpen$Action
}, {});
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:SZC0ZjVGzUmdBNFO7s34sA", callContext.id);
// Execute Action: BottomSheetClose
bottomSheetCloseVar.value = OutSystemsUI_2_23Controller.default.bottomSheetClose$Action(model.variables.bottomSheetIdVar, callContext);

OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:dRuQuyf_W0a0FNaEPtDK5w", callContext.id);
}

});
} else {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:N1UzORuF_k6mU0CT1E4L8g", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:M7ELec41WE6p38XucSbUvg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:M7ELec41WE6p38XucSbUvg", callContext.id);
throw ex;

});
};
Controller.prototype._handler_OnEditingStateChanged$Action = function (in_IsEditingIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_OnEditingStateChanged");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.CW_Notes.NotesSheet.Handler_OnEditingStateChanged$vars"))());
vars.value.in_IsEditingInLocal = in_IsEditingIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:5MZNkXvtKUqojaNDGF1O3Q:/NRWebFlows.4SPMb9EXFkG4E6LhSCJZjQ/NodesShownInESpaceTree.dovFuu7h1Uajpqu__iWf8A/ClientActions.5MZNkXvtKUqojaNDGF1O3Q:vdxowjcRLZwbrsOhtjNk3w", "UBTConnect_Utils", "Handler_OnEditingStateChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:GirVe61KG0iZmMEQpsa9qA", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:cYbNOJ5Tk0eXA0V7256b9g", callContext.id);
// IsEditing = In_IsEditing
model.variables.isEditingVar = vars.value.in_IsEditingInLocal;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:jsOM4lbt+kCS+eG_MQNTtQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:5MZNkXvtKUqojaNDGF1O3Q", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect_Utils.CW_Notes.NotesSheet.Handler_OnEditingStateChanged$vars", [{
name: "In_IsEditing",
attrName: "in_IsEditingInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._handler_OnSaveEditNote$Action = function (notesIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_OnSaveEditNote");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.CW_Notes.NotesSheet.Handler_OnSaveEditNote$vars"))());
vars.value.notesInLocal = notesIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:6iV0lfmiHEevl9sRMJoBBw:/NRWebFlows.4SPMb9EXFkG4E6LhSCJZjQ/NodesShownInESpaceTree.dovFuu7h1Uajpqu__iWf8A/ClientActions.6iV0lfmiHEevl9sRMJoBBw:gnkYes_svD2xuVNo7SrOuA", "UBTConnect_Utils", "Handler_OnSaveEditNote", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:r9BGW05NmkGdph9JXI1FYg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:llbuh3_vSEmdpIiLoq1k9g", callContext.id);
// Trigger Event: On_NotesChanged
return controller.on_NotesChanged$Action(vars.value.notesInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:sk0DQQBfA0q3JwQU8HQzxw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:6iV0lfmiHEevl9sRMJoBBw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:6iV0lfmiHEevl9sRMJoBBw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect_Utils.CW_Notes.NotesSheet.Handler_OnSaveEditNote$vars", [{
name: "Notes",
attrName: "notesInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectLibraryModel.NotesRec();
},
complexType: UBTConnectLibraryModel.NotesRec
}]);
Controller.prototype._action_SetBottomSheetOpen$Action = function (in_ValueIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_SetBottomSheetOpen");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_Utils.CW_Notes.NotesSheet.Action_SetBottomSheetOpen$vars"))());
vars.value.in_ValueInLocal = in_ValueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:9d5B1bpDqUuNoZH0dOwWKQ:/NRWebFlows.4SPMb9EXFkG4E6LhSCJZjQ/NodesShownInESpaceTree.dovFuu7h1Uajpqu__iWf8A/ClientActions.9d5B1bpDqUuNoZH0dOwWKQ:wSdZwU3Edc8cEC2UHOi9zQ", "UBTConnect_Utils", "Action_SetBottomSheetOpen", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:TL8gOanp6Uu+O8JHe20IWg", callContext.id);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:R+HmlDb5B0K8HKibYCK2oA", callContext.id);
// IsSheetOpen = In_Value
model.variables.isSheetOpenVar = vars.value.in_ValueInLocal;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:E8VnF7m6xk6QLI4JdyAeog", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:9d5B1bpDqUuNoZH0dOwWKQ", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect_Utils.CW_Notes.NotesSheet.Action_SetBottomSheetOpen$vars", [{
name: "In_Value",
attrName: "in_ValueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._handler_OnNoteSheet_Closed$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_OnNoteSheet_Closed");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:x0gP8kOJ+k6s6wptwJ_5qQ:/NRWebFlows.4SPMb9EXFkG4E6LhSCJZjQ/NodesShownInESpaceTree.dovFuu7h1Uajpqu__iWf8A/ClientActions.x0gP8kOJ+k6s6wptwJ_5qQ:jAhzmlpcgoIAyDvPOt_DaQ", "UBTConnect_Utils", "Handler_OnNoteSheet_Closed", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:6v6kD6qgrEiDwJNCATqwwA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:eVks4t4asEiBAiCzU_zn1A", callContext.id);
// IsEditing = False
model.variables.isEditingVar = false;
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:mPItfZ2u50yzwkHQd5UrUQ", callContext.id);
// Trigger Event: On_NoteSheet_Closed
return controller.on_NoteSheet_Closed$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:wrOV_tcWAEe981hlDMebVQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:x0gP8kOJ+k6s6wptwJ_5qQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:x0gP8kOJ+k6s6wptwJ_5qQ", callContext.id);
throw ex;

});
};

Controller.prototype.handler_OnSubmitNote$Action = function (in_NoteIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_OnSubmitNote$Action, callContext, in_NoteIn);

};
Controller.prototype.backNavigationHandlerBackNavigation$Action = function (backNavigationEventIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._backNavigationHandlerBackNavigation$Action, callContext, backNavigationEventIn);

};
Controller.prototype.bottomSheetOnToggle$Action = function (isOpenIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._bottomSheetOnToggle$Action, callContext, isOpenIn);

};
Controller.prototype.bottomSheet_Initialized$Action = function (idIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._bottomSheet_Initialized$Action, callContext, idIn);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.handler_OnEditingStateChanged$Action = function (in_IsEditingIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_OnEditingStateChanged$Action, callContext, in_IsEditingIn);

};
Controller.prototype.handler_OnSaveEditNote$Action = function (notesIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_OnSaveEditNote$Action, callContext, notesIn);

};
Controller.prototype.action_SetBottomSheetOpen$Action = function (in_ValueIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_SetBottomSheetOpen$Action, callContext, in_ValueIn);

};
Controller.prototype.handler_OnNoteSheet_Closed$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_OnNoteSheet_Closed$Action, callContext);

};
Controller.prototype.on_NotesChanged$Action = function () {
return Promise.resolve();
};
Controller.prototype.on_NoteSheet_Closed$Action = function () {
return Promise.resolve();
};
Controller.prototype.on_NoteDeleted$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:4SPMb9EXFkG4E6LhSCJZjQ:/NRWebFlows.4SPMb9EXFkG4E6LhSCJZjQ:sFzoW3bRc+2i8CkiQ6zxIA", "UBTConnect_Utils", "CW_Notes", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:dovFuu7h1Uajpqu__iWf8A:/NRWebFlows.4SPMb9EXFkG4E6LhSCJZjQ/NodesShownInESpaceTree.dovFuu7h1Uajpqu__iWf8A:ZZzv9re8vb4or3sFsSO6uw", "UBTConnect_Utils", "NotesSheet", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:dovFuu7h1Uajpqu__iWf8A", callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:4SPMb9EXFkG4E6LhSCJZjQ", callContext.id);
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

OutSystemsDebugger.setThreadStartName(callContext.id, "CW_Notes/NotesSheet On Parameters Changed");
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
define("UBTConnect_Utils.CW_Notes.NotesSheet.mvc$controller.OnParametersChanged.DelaySetIsOpenJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const sheetElement = document.getElementById($parameters.In_SheetElementId)?.querySelector(".osui-bottom-sheet");


function transitionEndHandler() {
    $actions.Action_SetBottomSheetOpen(false);
    if(sheetElement) {
        sheetElement.removeEventListener("transitionend", transitionEndHandler);
    }
}

if(sheetElement) {
    sheetElement.addEventListener("transitionend", transitionEndHandler);
}
};
});

define("UBTConnect_Utils.CW_Notes.NotesSheet.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"aWhMvlJedEuN0QwQgpm1lw": {
getter: function (varBag, idService) {
return varBag.vars.value.new_NotesVar;
}
},
"dOvYz2+pQE+dyp0q0kb3Ig": {
getter: function (varBag, idService) {
return varBag.vars.value.in_NoteInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"YtkENjalbE+btJJZF1zGzQ": {
getter: function (varBag, idService) {
return varBag.communicationExceptionVar.value;
}
},
"PlWB_VX5FkCnGTPdpl09Hg": {
getter: function (varBag, idService) {
return varBag.userExceptionVar.value;
}
},
"LRjcDnF6P0a_OTkIZWrOVg": {
getter: function (varBag, idService) {
return varBag.addNoteVar.value;
}
},
"1FcC9GvdBki+_qyaBvRYnQ": {
getter: function (varBag, idService) {
return varBag.create_LocalNoteVar.value;
}
},
"jminjCFNWEy5H_UiqjiEtw": {
getter: function (varBag, idService) {
return varBag.vars.value.backNavigationEventInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"edmx8iheM0G7hnLhPzqHCg": {
getter: function (varBag, idService) {
return varBag.vars.value.isOpenInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Be3TMBgbdUK_OWhkRtDJrw": {
getter: function (varBag, idService) {
return varBag.vars.value.idInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"SZC0ZjVGzUmdBNFO7s34sA": {
getter: function (varBag, idService) {
return varBag.bottomSheetCloseVar.value;
}
},
"zapJgp6hFUWwX6ppMUM5Gw": {
getter: function (varBag, idService) {
return varBag.bottomSheetOpenVar.value;
}
},
"edrZMtCgXEmLMZEUb_Sg3w": {
getter: function (varBag, idService) {
return varBag.delaySetIsOpenJSResult.value;
}
},
"TcKdRjoer02UbGQEj_Iq8Q": {
getter: function (varBag, idService) {
return varBag.vars.value.in_IsEditingInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"wMfGloSAS0mem781ZAdP2w": {
getter: function (varBag, idService) {
return varBag.vars.value.notesInLocal;
}
},
"EvSO7w999kuhtJfMlEX2rA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_ValueInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"nJq25TnvwUujszjfPKJExA": {
getter: function (varBag, idService) {
return varBag.model.variables.bottomSheetIdVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"7R0qWY_sMkOttafZNB0olQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isEditingVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"nJi+xfaqv0O+Gx9tAyTgRg": {
getter: function (varBag, idService) {
return varBag.model.variables.isSheetOpenVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Dk9tErAKokGOz4Gk371bdA": {
getter: function (varBag, idService) {
return varBag.model.variables.noteTextVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"O5U3sV_1cE6dfGKC6n0Uxg": {
getter: function (varBag, idService) {
return varBag.model.variables.isSubmittingNoteVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"nGzWAB9NmUKJb1LHnhVLWw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsOpenIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"qxuvgm_SzUqkBcBq4bxBGA": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassesIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"hdYPGUJudkK0sYSorQu+Ig": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ItemIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"5_5Z2_6u+EqP1S+K3dipXw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_NoteCategoryIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"HbtG4pm9yUWTEWPcUoTO2A": {
getter: function (varBag, idService) {
return varBag.model.variables.in_NotesIn;
}
},
"FphdaMStQEq8R+iNq8tA+A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"W8pisJRbgkOLP3QjrxkIcg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Footer"));
})(varBag.model, idService);
}
},
"J0OTpNi_40GgQptWOPwNgQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
