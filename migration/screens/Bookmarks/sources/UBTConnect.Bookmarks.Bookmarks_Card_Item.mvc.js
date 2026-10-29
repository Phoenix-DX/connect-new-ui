define("UBTConnect.Bookmarks.Bookmarks_Card_Item.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Bookmarks_CS.model", "UBTConnectLibrary.model", "UBTConnectLibrary.ConnectPatterns.ItemCard_WithNotes.mvc$model", "UBTConnect_Utils.CW_Notes.NoteListActions.mvc$model", "UBTConnect.App_Common_Blocks.ItemCardActions.mvc$model", "UBTConnect_Utils.CW_Notes.NotesSheet.mvc$model", "UBTConnect.controller$Get_NoteCategoryId_ByBookmarkCategoryId", "Connect_Bookmarks_CS.model$UI_Bookmark_CardItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Bookmarks_CS", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnectLibrary.model$NotesRec", "UBTConnectLibrary.model$Note_ItemRec", "UBTConnect.model$Note_ItemList", "UBTConnectLibrary.model$ActionBarOptionsRec"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Bookmarks_CSModel, UBTConnectLibraryModel, UBTConnectLibrary_ConnectPatterns_ItemCard_WithNotes_mvcModel, UBTConnect_Utils_CW_Notes_NoteListActions_mvcModel, UBTConnect_App_Common_Blocks_ItemCardActions_mvcModel, UBTConnect_Utils_CW_Notes_NotesSheet_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsAddNote", "isAddNoteVar", "IsAddNote", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("Bookmark_CardItem", "bookmark_CardItemIn", "Bookmark_CardItem", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Bookmarks_CSModel.UI_Bookmark_CardItemRec());
}, false, Connect_Bookmarks_CSModel.UI_Bookmark_CardItemRec), 
this.attr("_bookmark_CardItemInDataFetchStatus", "_bookmark_CardItemInDataFetchStatus", "_bookmark_CardItemInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (((UBTConnectLibrary_ConnectPatterns_ItemCard_WithNotes_mvcModel.hasValidationWidgets || UBTConnect_Utils_CW_Notes_NoteListActions_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_Blocks_ItemCardActions_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_Notes_NotesSheet_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("Bookmark_CardItem" in inputs) {
this.variables.bookmark_CardItemIn = inputs.Bookmark_CardItem;
if("_bookmark_CardItemInDataFetchStatus" in inputs) {
this.variables._bookmark_CardItemInDataFetchStatus = inputs._bookmark_CardItemInDataFetchStatus;
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
return new OS.Model.ModelFactory(Model, "Bookmarks.Bookmarks_Card_Item");
});
define("UBTConnect.Bookmarks.Bookmarks_Card_Item.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Bookmarks_CS.model", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Bookmarks.Bookmarks_Card_Item.mvc$model", "UBTConnect.Bookmarks.Bookmarks_Card_Item.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.ConnectPatterns.ItemCard_WithNotes.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect_Utils.CW_Notes.NoteListActions.mvc$view", "UBTConnect.App_Common_Blocks.ItemCardActions.mvc$view", "UBTConnect_Utils.CW_Notes.NotesSheet.mvc$view", "UBTConnect.controller$Get_NoteCategoryId_ByBookmarkCategoryId", "Connect_Bookmarks_CS.model$UI_Bookmark_CardItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Bookmarks_CS", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnectLibrary.model$NotesRec", "UBTConnectLibrary.model$Note_ItemRec", "UBTConnect.model$Note_ItemList", "UBTConnectLibrary.model$ActionBarOptionsRec"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Bookmarks_CSModel, UBTConnectLibraryModel, React, OSView, UBTConnect_Bookmarks_Bookmarks_Card_Item_mvc_model, UBTConnect_Bookmarks_Bookmarks_Card_Item_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_ConnectPatterns_ItemCard_WithNotes_mvc_view, OSWidgets, UBTConnect_Utils_CW_Notes_NoteListActions_mvc_view, UBTConnect_App_Common_Blocks_ItemCardActions_mvc_view, UBTConnect_Utils_CW_Notes_NotesSheet_mvc_view) {
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
        View.displayName = "Bookmarks.Bookmarks_Card_Item";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_ItemCard_WithNotes_mvc_view, UBTConnect_Utils_CW_Notes_NoteListActions_mvc_view, UBTConnect_App_Common_Blocks_ItemCardActions_mvc_view, UBTConnect_Utils_CW_Notes_NotesSheet_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Bookmarks_Bookmarks_Card_Item_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Bookmarks_Bookmarks_Card_Item_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_ConnectPatterns_ItemCard_WithNotes_mvc_view, {
inputs: {
In_ChannelName: model.variables.bookmark_CardItemIn.channelNameAttr,
_in_ChannelNameInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._bookmark_CardItemInDataFetchStatus),
AvatarImage: model.getCachedValue(idService.getId("sTtt_Tn8ike33ewmBiMttg.AvatarImage"), function () {
return function () {
var rec = new UBTConnectLibraryModel.AvatarImageRec();
rec.uRLAttr = model.variables.bookmark_CardItemIn.bookmark_Card_ContentAttr.sourceHeaderAttr.imageURLAttr;
rec.fallbackOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.AvatarImageFallbackoptionsRec();
rec.initialsAttr = model.variables.bookmark_CardItemIn.bookmark_Card_ContentAttr.sourceHeaderAttr.initialsAttr;
rec.iconIdAttr = model.variables.bookmark_CardItemIn.bookmark_Card_ContentAttr.sourceHeaderAttr.iconIdAttr;
return rec;
}();
return rec;
}();
}, function () {
return model.variables.bookmark_CardItemIn.bookmark_Card_ContentAttr.sourceHeaderAttr.imageURLAttr;
}, function () {
return model.variables.bookmark_CardItemIn.bookmark_Card_ContentAttr.sourceHeaderAttr.initialsAttr;
}, function () {
return model.variables.bookmark_CardItemIn.bookmark_Card_ContentAttr.sourceHeaderAttr.iconIdAttr;
}),
_avatarImageInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._bookmark_CardItemInDataFetchStatus),
In_Subtitle: model.variables.bookmark_CardItemIn.bookmark_Card_ContentAttr.subtitleAttr,
_in_SubtitleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._bookmark_CardItemInDataFetchStatus),
In_Label: model.variables.bookmark_CardItemIn.bookmark_Card_ContentAttr.sourceHeaderAttr.labelAttr,
_in_LabelInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._bookmark_CardItemInDataFetchStatus),
In_Title: model.variables.bookmark_CardItemIn.bookmark_Card_ContentAttr.titleAttr,
_in_TitleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._bookmark_CardItemInDataFetchStatus),
In_PublishedAt: model.variables.bookmark_CardItemIn.publishedAtAttr,
_in_PublishedAtInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._bookmark_CardItemInDataFetchStatus),
In_TotalNotes: (model.variables.bookmark_CardItemIn.bookmark_Card_ContentAttr.notesAttr.totalAttr).toString(),
_in_TotalNotesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._bookmark_CardItemInDataFetchStatus),
In_SearchString: model.variables.in_SearchStringIn,
_in_SearchStringInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SearchStringInDataFetchStatus),
In_ChannelLogo: model.variables.bookmark_CardItemIn.channelLogoAttr,
_in_ChannelLogoInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._bookmark_CardItemInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onClickTotalNotesIcon$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/ItemCard_WithNotes OnClickTotalNotesIcon");
controller.openNoteSheet$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
onClickItemCard$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/ItemCard_WithNotes OnClickItemCard");
controller.onClickCardItem$Action(controller.callContext(eventHandlerContext));
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
notes: new PlaceholderContent(function () {
return [$if(!(model.variables.bookmark_CardItemIn.bookmark_Card_ContentAttr.notesAttr.note_Item_ListAttr.isEmpty), false, this, function () {
return [React.createElement(UBTConnect_Utils_CW_Notes_NoteListActions_mvc_view, {
inputs: {
In_ItemId: OS.BuiltinFunctions.longIntegerToText(model.variables.bookmark_CardItemIn.itemIdAttr),
_in_ItemIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._bookmark_CardItemInDataFetchStatus),
In_NoteCategoryId: model.getCachedValue(idService.getId("0w3bHNdGzEqTWOkAiZAbWg.In_NoteCategoryId"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectController.default.get_NoteCategoryId_ByBookmarkCategoryId$Action(model.variables.bookmark_CardItemIn.bookmarkCategoryIdAttr, callContext).out_NoteCategoryIdOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.bookmark_CardItemIn.bookmarkCategoryIdAttr;
}),
_in_NoteCategoryIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._bookmark_CardItemInDataFetchStatus),
Notes: model.variables.bookmark_CardItemIn.bookmark_Card_ContentAttr.notesAttr,
_notesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._bookmark_CardItemInDataFetchStatus),
In_ShowPreviewOnly: true
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onSaveEditNote$Action: function (notesIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_Notes/NoteListActions OnSaveEditNote");
controller.handler_OnNotesChanged$Action(notesIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
on_NoteDeleted$Action: function (noteIdIn, isLastNoteDeletedIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_Notes/NoteListActions On_NoteDeleted");
controller.handler_OnNoteDeleted$Action(noteIdIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
on_ShowAllNotesRequested$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_Notes/NoteListActions On_ShowAllNotesRequested");
controller.openNoteSheet$Action(controller.callContext(eventHandlerContext));
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
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
})];
}),
actions: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_App_Common_Blocks_ItemCardActions_mvc_view, {
inputs: {
ActionBarOptions: model.getCachedValue(idService.getId("qSZ6o_UgfEivIWLOGUzeLA.ActionBarOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ActionBarOptionsRec();
rec.showUnbookmarkAttr = true;
rec.showAddNoteAttr = true;
rec.showShareAttr = false;
return rec;
}();
}),
ObjectId: OS.BuiltinFunctions.longIntegerToText(model.variables.bookmark_CardItemIn.itemIdAttr),
_objectIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._bookmark_CardItemInDataFetchStatus),
BookmarkType: model.variables.bookmark_CardItemIn.bookmarkCategoryIdAttr,
_bookmarkTypeInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._bookmark_CardItemInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_AddNote$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Common_Blocks/ItemCardActions Event_AddNote");
controller.openNoteSheet$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
event_ItemUnbookmarked$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Common_Blocks/ItemCardActions Event_ItemUnbookmarked");
controller.item_Unbookmarked$Action(controller.callContext(eventHandlerContext));
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
uuid: "2",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables._bookmark_CardItemInDataFetchStatus), asPrimitiveValue(model.variables.bookmark_CardItemIn.bookmarkCategoryIdAttr), asPrimitiveValue(model.variables.bookmark_CardItemIn.itemIdAttr), asPrimitiveValue(model.variables.bookmark_CardItemIn.bookmark_Card_ContentAttr.notesAttr)]
}), $if(false, false, this, function () {
return [];
}, function () {
return [React.createElement(UBTConnect_Utils_CW_Notes_NotesSheet_mvc_view, {
inputs: {
In_ItemId: OS.BuiltinFunctions.longIntegerToText(model.variables.bookmark_CardItemIn.itemIdAttr),
_in_ItemIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._bookmark_CardItemInDataFetchStatus),
In_Notes: model.variables.bookmark_CardItemIn.bookmark_Card_ContentAttr.notesAttr,
_in_NotesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._bookmark_CardItemInDataFetchStatus),
In_NoteCategoryId: model.getCachedValue(idService.getId("cbB2uhywika3GUnoFr1Clw.In_NoteCategoryId"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectController.default.get_NoteCategoryId_ByBookmarkCategoryId$Action(model.variables.bookmark_CardItemIn.bookmarkCategoryIdAttr, callContext).out_NoteCategoryIdOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.bookmark_CardItemIn.bookmarkCategoryIdAttr;
}),
_in_NoteCategoryIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._bookmark_CardItemInDataFetchStatus),
In_IsOpen: model.variables.isAddNoteVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
on_NoteDeleted$Action: function (noteIdIn, wasLastNoteIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_Notes/NotesSheet On_NoteDeleted");
controller.handler_OnNoteDeleted$Action(noteIdIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
on_NoteSheet_Closed$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_Notes/NotesSheet On_NoteSheet_Closed");
controller.handler_NoteSheet_Closed$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
on_NotesChanged$Action: function (new_NotesIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_Notes/NotesSheet On_NotesChanged");
controller.handler_OnNotesChanged$Action(new_NotesIn, controller.callContext(eventHandlerContext));
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
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.Bookmarks.Bookmarks_Card_Item.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Bookmarks_CS.model", "UBTConnectLibrary.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Bookmarks.Bookmarks_Card_Item.mvc$debugger", "UBTConnect.controller$Get_NoteCategoryId_ByBookmarkCategoryId", "Connect_Bookmarks_CS.model$UI_Bookmark_CardItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Bookmarks_CS", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnectLibrary.model$NotesRec", "UBTConnectLibrary.model$Note_ItemRec", "UBTConnect.model$Note_ItemList", "UBTConnectLibrary.model$ActionBarOptionsRec"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Bookmarks_CSModel, UBTConnectLibraryModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Bookmarks_Bookmarks_Card_Item_mvc_Debugger) {
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
Controller.prototype._handler_NoteSheet_Closed$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_NoteSheet_Closed");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:qVzNKel0IUeILO_5leqTSQ:/NRWebFlows.kStR2ohBzUir2kDhfuOSLg/NodesShownInESpaceTree.3XqhA0Ch50OMwGPCBILznw/ClientActions.qVzNKel0IUeILO_5leqTSQ:yrXzhvdtp5DpcjfXhdhEjA", "UBTConnect", "Handler_NoteSheet_Closed", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2Qe8ObayuEKBqVRmzA07ng", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GQ4tr0+74EmeKbg3BiY36g", callContext.id);
// IsAddNote = False
model.variables.isAddNoteVar = false;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VHnA1hlTJEaqZ6TD7w0kAw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:qVzNKel0IUeILO_5leqTSQ", callContext.id);
}

};
Controller.prototype._handler_OnNoteDeleted$Action = function (noteIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_OnNoteDeleted");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Bookmarks.Bookmarks_Card_Item.Handler_OnNoteDeleted$vars"))());
vars.value.noteIdInLocal = noteIdIn;
var listIndexOfVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.listIndexOfVar = listIndexOfVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:jorLRurAjk6KcloyDkINgQ:/NRWebFlows.kStR2ohBzUir2kDhfuOSLg/NodesShownInESpaceTree.3XqhA0Ch50OMwGPCBILznw/ClientActions.jorLRurAjk6KcloyDkINgQ:ERTTkhDWt9XjKl2qYUHdCQ", "UBTConnect", "Handler_OnNoteDeleted", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Txh5bQ6H40iKP0MrgxfJWQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jm8dlu48W02XatK3qFz3Ig", callContext.id);
// Execute Action: ListIndexOf
listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.bookmark_CardItemIn.bookmark_Card_ContentAttr.notesAttr.note_Item_ListAttr, function (p) {
return p.idAttr.equals(vars.value.noteIdInLocal);
}, callContext);

if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:65cGagGWME+0lxqYLnv8vg", callContext.id) && ((listIndexOfVar.value.positionOut) !== (-1)))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VMUH2R2i+kyyRwD6CsMvlA", callContext.id);
// Execute Action: ListRemove
OS.SystemActions.listRemove(model.variables.bookmark_CardItemIn.bookmark_Card_ContentAttr.notesAttr.note_Item_ListAttr, listIndexOfVar.value.positionOut, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ltkZndVIw0mWtgmh1SYw6Q", callContext.id);
// Bookmark_CardItem.Bookmark_Card_Content.Notes.Total = Bookmark_CardItem.Bookmark_Card_Content.Notes.Note_Item_List.Length
model.variables.bookmark_CardItemIn.bookmark_Card_ContentAttr.notesAttr.totalAttr = model.variables.bookmark_CardItemIn.bookmark_Card_ContentAttr.notesAttr.note_Item_ListAttr.length;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:88jGdTIddUOA9J3ujjWXSA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UyTA6SrPtEe3LeP2bmYnBg", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:jorLRurAjk6KcloyDkINgQ", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Bookmarks.Bookmarks_Card_Item.Handler_OnNoteDeleted$vars", [{
name: "NoteId",
attrName: "noteIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Controller.prototype._handler_OnNotesChanged$Action = function (new_NotesIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_OnNotesChanged");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Bookmarks.Bookmarks_Card_Item.Handler_OnNotesChanged$vars"))());
vars.value.new_NotesInLocal = new_NotesIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:9986vuTNiEug+DaqHcJLCQ:/NRWebFlows.kStR2ohBzUir2kDhfuOSLg/NodesShownInESpaceTree.3XqhA0Ch50OMwGPCBILznw/ClientActions.9986vuTNiEug+DaqHcJLCQ:lbqTf8ZD1jiG9wTS09niiQ", "UBTConnect", "Handler_OnNotesChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BQ2x3TskR0aD6VzGk0v04Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pgPR6DaAAEC27zQnEUKiSA", callContext.id);
// Bookmark_CardItem.Bookmark_Card_Content.Notes = New_Notes
model.variables.bookmark_CardItemIn.bookmark_Card_ContentAttr.notesAttr = vars.value.new_NotesInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Ix7ki6T18UCCIyATYki20w", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:9986vuTNiEug+DaqHcJLCQ", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Bookmarks.Bookmarks_Card_Item.Handler_OnNotesChanged$vars", [{
name: "New_Notes",
attrName: "new_NotesInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectLibraryModel.NotesRec();
},
complexType: UBTConnectLibraryModel.NotesRec
}]);
Controller.prototype._openNoteSheet$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OpenNoteSheet");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:lWgA7+WacUKXpNj+BvUahQ:/NRWebFlows.kStR2ohBzUir2kDhfuOSLg/NodesShownInESpaceTree.3XqhA0Ch50OMwGPCBILznw/ClientActions.lWgA7+WacUKXpNj+BvUahQ:6fdwqQuO0_6sgPKhOsWLWg", "UBTConnect", "OpenNoteSheet", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:C4NH0mwmxESGMLFrzBJs5Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TpkwPdP9qEWTwez6doyTpg", callContext.id);
// IsAddNote = True
model.variables.isAddNoteVar = true;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LXVxUHLicU2F_rLc4zbH9w", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:lWgA7+WacUKXpNj+BvUahQ", callContext.id);
}

};

Controller.prototype.handler_NoteSheet_Closed$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_NoteSheet_Closed$Action, callContext);

};
Controller.prototype.handler_OnNoteDeleted$Action = function (noteIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_OnNoteDeleted$Action, callContext, noteIdIn);

};
Controller.prototype.handler_OnNotesChanged$Action = function (new_NotesIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_OnNotesChanged$Action, callContext, new_NotesIn);

};
Controller.prototype.openNoteSheet$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._openNoteSheet$Action, callContext);

};
Controller.prototype.onClickCardItem$Action = function () {
return Promise.resolve();
};
Controller.prototype.item_Unbookmarked$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:kStR2ohBzUir2kDhfuOSLg:/NRWebFlows.kStR2ohBzUir2kDhfuOSLg:JSKfj0CjfVbkU+WuEIFgoA", "UBTConnect", "Bookmarks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:3XqhA0Ch50OMwGPCBILznw:/NRWebFlows.kStR2ohBzUir2kDhfuOSLg/NodesShownInESpaceTree.3XqhA0Ch50OMwGPCBILznw:XS+4XTlC35myFdghReQjJg", "UBTConnect", "Bookmarks_Card_Item", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:3XqhA0Ch50OMwGPCBILznw", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:kStR2ohBzUir2kDhfuOSLg", callContext.id);
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

define("UBTConnect.Bookmarks.Bookmarks_Card_Item.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"AezY2UOVTUibCQUhEWZWNw": {
getter: function (varBag, idService) {
return varBag.vars.value.noteIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"jm8dlu48W02XatK3qFz3Ig": {
getter: function (varBag, idService) {
return varBag.listIndexOfVar.value;
}
},
"UgNeCFGzQkuqm+0lsXD9Qw": {
getter: function (varBag, idService) {
return varBag.vars.value.new_NotesInLocal;
}
},
"PKMqjjJL20mqEx7nZOT5UQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isAddNoteVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"1iQ1KLj1pEeiVBm6Ddt+xQ": {
getter: function (varBag, idService) {
return varBag.model.variables.bookmark_CardItemIn;
}
},
"IrcvXB7PlkmGCnbiZ+MOVg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_SearchStringIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"HMqPoTOXZk+qcz7Jdy0Qtw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Notes"));
})(varBag.model, idService);
}
},
"4DX6WT_RuUe1FdvfXX3_iQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasNotes"));
})(varBag.model, idService);
}
},
"y7WjdtVd702WFPk4Ng4Hig": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Actions"));
})(varBag.model, idService);
}
},
"U0VYvOpQcE2ZwXylaT1umg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HideInServiceStudio_BottomSheet"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
