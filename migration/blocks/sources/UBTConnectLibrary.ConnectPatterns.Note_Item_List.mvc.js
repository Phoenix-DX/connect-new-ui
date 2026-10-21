define("UBTConnectLibrary.ConnectPatterns.Note_Item_List.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.ConnectPatterns.Note_Item.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnectLibrary.ConnectPatterns.Popup.mvc$model", "UBTConnectLibrary.ConnectPatterns.CircleButton.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$model", "UBTConnectLibrary.ConnectPatterns.Button.mvc$model", "UBTConnectLibrary.model$Note_ItemList", "UBTConnectLibrary.model$NotesRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$ButtonOptionsRec", "UBTConnectLibrary.model$Note_ItemRec"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_ConnectPatterns_Note_Item_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel, UBTConnectLibrary_ConnectPatterns_Popup_mvcModel, UBTConnectLibrary_ConnectPatterns_CircleButton_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel, UBTConnectLibrary_ConnectPatterns_Button_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("ShortList", "shortListVar", "ShortList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.Note_ItemList());
}, false, UBTConnectLibraryModel.Note_ItemList), 
this.attr("ShowNotesTotal", "showNotesTotalVar", "ShowNotesTotal", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsConfirmationDeleteOpen", "isConfirmationDeleteOpenVar", "IsConfirmationDeleteOpen", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("Delete_NoteId", "delete_NoteIdVar", "Delete_NoteId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("Notes", "notesIn", "Notes", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.NotesRec());
}, false, UBTConnectLibraryModel.NotesRec), 
this.attr("_notesInDataFetchStatus", "_notesInDataFetchStatus", "_notesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_EditingNoteId", "in_EditingNoteIdIn", "In_EditingNoteId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_EditingNoteIdInDataFetchStatus", "_in_EditingNoteIdInDataFetchStatus", "_in_EditingNoteIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (((((((UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_Note_Item_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Popup_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_CircleButton_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Button_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("Notes" in inputs) {
this.variables.notesIn = inputs.Notes;
if("_notesInDataFetchStatus" in inputs) {
this.variables._notesInDataFetchStatus = inputs._notesInDataFetchStatus;
}

}

if("In_EditingNoteId" in inputs) {
this.variables.in_EditingNoteIdIn = inputs.In_EditingNoteId;
if("_in_EditingNoteIdInDataFetchStatus" in inputs) {
this.variables._in_EditingNoteIdInDataFetchStatus = inputs._in_EditingNoteIdInDataFetchStatus;
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
return new OS.Model.ModelFactory(Model, "ConnectPatterns.Note_Item_List");
});
define("UBTConnectLibrary.ConnectPatterns.Note_Item_List.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.Note_Item_List.mvc$model", "UBTConnectLibrary.ConnectPatterns.Note_Item_List.mvc$controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.Note_Item.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Popup.mvc$view", "UBTConnectLibrary.ConnectPatterns.CircleButton.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "UBTConnectLibrary.ConnectPatterns.Button.mvc$view", "UBTConnectLibrary.model$Note_ItemList", "UBTConnectLibrary.model$NotesRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$ButtonOptionsRec", "UBTConnectLibrary.model$Note_ItemRec"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_Note_Item_List_mvc_model, UBTConnectLibrary_ConnectPatterns_Note_Item_List_mvc_controller, UBTConnectLibraryClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_Note_Item_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_Popup_mvc_view, UBTConnectLibrary_ConnectPatterns_CircleButton_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_ConnectPatterns_Button_mvc_view) {
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
        View.displayName = "ConnectPatterns.Note_Item_List";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_Note_Item_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_Popup_mvc_view, UBTConnectLibrary_ConnectPatterns_CircleButton_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_ConnectPatterns_Button_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectPatterns_Note_Item_List_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectPatterns_Note_Item_List_mvc_controller;
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
Options: model.getCachedValue(idService.getId("Pe0zoTrC8UimpJQ1GABzNw.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.backgroundAttr = function () {
var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
rec.backgroundColorAttr = ((model.variables.in_ShowPreviewOnlyIn) ? (UBTConnectLibraryModel.staticEntities.uBT_Color.neutral2) : (UBTConnectLibraryModel.staticEntities.uBT_Color.neutral0));
return rec;
}();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.generalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.small;
return rec;
}();
rec.marginSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.bottomSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.extraSmall;
return rec;
}();
rec.borderOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.BorderOptionsRec();
rec.radiusAttr = function () {
var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
rec.generalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Shape.soft;
return rec;
}();
return rec;
}();
rec.heightOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.SizeOptionsRec();
rec.minAttr = "88px";
return rec;
}();
return rec;
}();
}, function () {
return model.variables.in_ShowPreviewOnlyIn;
}),
_optionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ShowPreviewOnlyInDataFetchStatus)
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
return [$if((model.variables.showNotesTotalVar && model.variables.in_ShowPreviewOnlyIn), false, this, function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.shortListVar,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Note_Item_mvc_view, {
inputs: {
In_Note: model.variables.shortListVar.getCurrent(callContext.iterationContext).noteAttr,
IsEditing: model.variables.shortListVar.getCurrent(callContext.iterationContext).idAttr.equals(model.variables.in_EditingNoteIdIn),
_isEditingInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EditingNoteIdInDataFetchStatus),
In_NoteId: model.variables.shortListVar.getCurrent(callContext.iterationContext).idAttr,
DateCreatedUtc: model.variables.shortListVar.getCurrent(callContext.iterationContext).dateCreatedUtcAttr,
DateEditedUtc: model.variables.shortListVar.getCurrent(callContext.iterationContext).dateEditedUtcAttr,
IsDimmed: (!(model.variables.in_EditingNoteIdIn.equals(OS.BuiltinFunctions.integerToLongInteger(0))) && !(model.variables.shortListVar.getCurrent(callContext.iterationContext).idAttr.equals(model.variables.in_EditingNoteIdIn))),
_isDimmedInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EditingNoteIdInDataFetchStatus),
In_SearchString: model.variables.in_SearchStringIn,
_in_SearchStringInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SearchStringInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onSaveEditRequested$Action: function (noteIdIn, out_NoteIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Note_Item OnSaveEditRequested");
controller.onSaveEditRequested$Action(noteIdIn, out_NoteIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
onCancelEditRequested$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Note_Item OnCancelEditRequested");
controller.onCancelEditRequested$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
onDeleteRequested$Action: function (noteIdIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Note_Item OnDeleteRequested");
controller.handler_OnDeleteRequested$Action(noteIdIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
onEditRequested$Action: function (noteIdIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Note_Item OnEditRequested");
controller.onEditRequested$Action(noteIdIn, controller.callContext(eventHandlerContext));
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
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables.in_SearchStringIn), asPrimitiveValue(model.variables._in_SearchStringInDataFetchStatus), asPrimitiveValue(model.variables._in_EditingNoteIdInDataFetchStatus), asPrimitiveValue(model.variables.in_EditingNoteIdIn)]
}), $if(model.variables.in_EditingNoteIdIn.equals(OS.BuiltinFunctions.integerToLongInteger(0)), false, this, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_Text: model.getCachedValue(idService.getId("wXaE5FEXj0W_l3mUrvouSA.In_Text"), function () {
return ((model.variables.notesIn.note_Item_ListAttr.isEmpty) ? ("") : (((("Show all notes " + "(") + (model.variables.notesIn.totalAttr).toString()) + ")")));
}, function () {
return model.variables.notesIn.note_Item_ListAttr.isEmpty;
}, function () {
return model.variables.notesIn.totalAttr;
}),
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._notesInDataFetchStatus),
In_HighlightOptions: model.getCachedValue(idService.getId("wXaE5FEXj0W_l3mUrvouSA.In_HighlightOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
return rec;
}();
}),
In_TextOptions: model.getCachedValue(idService.getId("wXaE5FEXj0W_l3mUrvouSA.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.cyanDark;
rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.doubleExtraSmall;
rec.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
In_PaddingOptions: model.getCachedValue(idService.getId("wXaE5FEXj0W_l3mUrvouSA.In_PaddingOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.topSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.small;
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
clicked$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "BasePatterns/CustomText Clicked");
controller.onShowAllNotes$Action(controller.callContext(eventHandlerContext));
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
_dependencies: []
})];
}, function () {
return [];
})];
}, function () {
return [$if(!(model.variables.notesIn.note_Item_ListAttr.isEmpty), false, this, function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.notesIn.note_Item_ListAttr,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._notesInDataFetchStatus),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Note_Item_mvc_view, {
inputs: {
IsDimmed: (!(model.variables.in_EditingNoteIdIn.equals(OS.BuiltinFunctions.integerToLongInteger(0))) && !(model.variables.notesIn.note_Item_ListAttr.getCurrent(callContext.iterationContext).idAttr.equals(model.variables.in_EditingNoteIdIn))),
_isDimmedInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EditingNoteIdInDataFetchStatus, model.variables._notesInDataFetchStatus),
DateCreatedUtc: model.variables.notesIn.note_Item_ListAttr.getCurrent(callContext.iterationContext).dateCreatedUtcAttr,
_dateCreatedUtcInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._notesInDataFetchStatus),
In_Note: model.variables.notesIn.note_Item_ListAttr.getCurrent(callContext.iterationContext).noteAttr,
_in_NoteInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._notesInDataFetchStatus),
In_SearchString: model.variables.in_SearchStringIn,
_in_SearchStringInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SearchStringInDataFetchStatus),
In_NoteId: model.variables.notesIn.note_Item_ListAttr.getCurrent(callContext.iterationContext).idAttr,
_in_NoteIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._notesInDataFetchStatus),
DateEditedUtc: model.variables.notesIn.note_Item_ListAttr.getCurrent(callContext.iterationContext).dateEditedUtcAttr,
_dateEditedUtcInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._notesInDataFetchStatus),
IsEditing: (!(model.variables.in_EditingNoteIdIn.equals(OS.BuiltinFunctions.integerToLongInteger(0))) && model.variables.notesIn.note_Item_ListAttr.getCurrent(callContext.iterationContext).idAttr.equals(model.variables.in_EditingNoteIdIn)),
_isEditingInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EditingNoteIdInDataFetchStatus, model.variables._notesInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onDeleteRequested$Action: function (noteIdIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Note_Item OnDeleteRequested");
controller.handler_OnDeleteRequested$Action(noteIdIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
onCancelEditRequested$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Note_Item OnCancelEditRequested");
controller.onCancelEditRequested$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
onSaveEditRequested$Action: function (noteIdIn, out_NoteIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Note_Item OnSaveEditRequested");
controller.onSaveEditRequested$Action(noteIdIn, out_NoteIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
onEditRequested$Action: function (noteIdIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Note_Item OnEditRequested");
controller.onEditRequested$Action(noteIdIn, controller.callContext(eventHandlerContext));
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
uuid: "5",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, callContext, idService, "2")
},
_dependencies: [asPrimitiveValue(model.variables.in_SearchStringIn), asPrimitiveValue(model.variables._in_SearchStringInDataFetchStatus), asPrimitiveValue(model.variables._notesInDataFetchStatus), asPrimitiveValue(model.variables._in_EditingNoteIdInDataFetchStatus), asPrimitiveValue(model.variables.in_EditingNoteIdIn)]
})];
}, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("oJaOuSKlb0yBBiKnODSNvQ.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.displayOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
rec.displayAttr = UBTConnectLibraryModel.staticEntities.uBT_Display.flex;
rec.alignItemsAttr = UBTConnectLibraryModel.staticEntities.uBT_AlignItems.center;
rec.justifyContentAttr = UBTConnectLibraryModel.staticEntities.uBT_JustifyContent.flexEnd;
rec.flexDirectionAttr = UBTConnectLibraryModel.staticEntities.uBT_FlexDirection.column;
return rec;
}();
rec.heightOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.SizeOptionsRec();
rec.minAttr = "80px";
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
uuid: "6",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_Text: "Your notes will appear here.",
In_TextOptions: model.getCachedValue(idService.getId("TeYrfmVlA0WXWcAmcWl1GA.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral7;
rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.doubleExtraSmall;
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
uuid: "7",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
})];
})];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.notesIn.totalAttr), asPrimitiveValue(model.variables.notesIn.note_Item_ListAttr), asPrimitiveValue(model.variables.in_SearchStringIn), asPrimitiveValue(model.variables.in_EditingNoteIdIn), asPrimitiveValue(model.variables.shortListVar), asPrimitiveValue(model.variables._notesInDataFetchStatus), asPrimitiveValue(model.variables._in_SearchStringInDataFetchStatus), asPrimitiveValue(model.variables._in_EditingNoteIdInDataFetchStatus), asPrimitiveValue(model.variables._in_ShowPreviewOnlyInDataFetchStatus), asPrimitiveValue(model.variables.in_ShowPreviewOnlyIn), asPrimitiveValue(model.variables.showNotesTotalVar)]
}), React.createElement(UBTConnectLibrary_ConnectPatterns_Popup_mvc_view, {
inputs: {
isOpen: model.variables.isConfirmationDeleteOpenVar,
Title: "Delete note?",
In_HasTopHeader: true
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
name: "DeleteConfirmationPopup",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
topHeader: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-bottom-m",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_ConnectPatterns_CircleButton_mvc_view, {
inputs: {
BackgroundColorId: UBTConnectLibraryModel.staticEntities.uBT_Color.cyanLightest,
SizeId: UBTConnectLibraryModel.staticEntities.uBT_AvatarSize.small_40
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
uuid: "10",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_ColorId: UBTConnectLibraryModel.staticEntities.uBT_Color.primary,
In_IconId: UBTConnectLibraryModel.staticEntities.uBT_Icons.delete
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
uuid: "11",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
badge: PlaceholderContent.Empty
},
_dependencies: []
}))];
}),
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-align-center",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Are you sure you want to delete this"), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-align-center",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, "note? This action can\'t be undone.")];
}),
footer: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
inputs: {
ColumnOptions: model.getCachedValue(idService.getId("tpbgmGfKV0i9JcOm7JlFRw.ColumnOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
rec.spacingSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.small;
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
uuid: "14",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
left: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Button_mvc_view, {
inputs: {
In_ButtonOptions: model.getCachedValue(idService.getId("hheBlsBJDEuFLQ27VF1zRg.In_ButtonOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ButtonOptionsRec();
rec.uBT_ButtonSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_ButtonSize.small;
rec.uBT_ButtonTypeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_ButtonType.scondary;
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_OnClick$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Button Event_OnClick");
controller.cancleButton_OnClick$Action(controller.callContext(eventHandlerContext));
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
uuid: "15",
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return ["cancel"];
})
},
_dependencies: []
})];
}),
right: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Button_mvc_view, {
inputs: {
In_ButtonOptions: model.getCachedValue(idService.getId("Yx_8okGFLUC5XYR60clzvg.In_ButtonOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ButtonOptionsRec();
rec.uBT_ButtonSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_ButtonSize.small;
rec.uBT_ButtonTypeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_ButtonType.primary;
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_OnClick$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Button Event_OnClick");
return controller.deleteButton_OnClick$Action(controller.callContext(eventHandlerContext));
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
uuid: "16",
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return ["Delete"];
})
},
_dependencies: []
})];
})
},
_dependencies: []
})];
})
},
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnectLibrary.ConnectPatterns.Note_Item_List.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectPatterns.Note_Item_List.mvc$debugger", "UBTConnectLibrary.model$Note_ItemList", "UBTConnectLibrary.model$NotesRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$ButtonOptionsRec", "UBTConnectLibrary.model$Note_ItemRec"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectPatterns_Note_Item_List_mvc_Debugger) {
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
Controller.prototype._handler_OnDeleteRequested$Action = function (noteIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_OnDeleteRequested");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.ConnectPatterns.Note_Item_List.Handler_OnDeleteRequested$vars"))());
vars.value.noteIdInLocal = noteIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:0_ZAGT8PDEafzdoRcVc4aQ:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree._PsM5SpBIk6dMDC8wE4IeQ/ClientActions.0_ZAGT8PDEafzdoRcVc4aQ:fR7IIcbIF+JONYrYfr6isg", "UBTConnectLibrary", "Handler_OnDeleteRequested", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:akx1ItHiukOu86Oc7OFqUw", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:zDID8D5xLkGyZhY89XVmDQ", callContext.id);
// Execute Action: ToggleDeleteConfirmationPopup
controller._toggleDeleteConfirmationPopup$Action(callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:9DtvFhg6Z0a4LTfv2Aejvg", callContext.id);
// Delete_NoteId = NoteId
model.variables.delete_NoteIdVar = vars.value.noteIdInLocal;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:CUMlSVdbakuruIYyVgq+Kg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:0_ZAGT8PDEafzdoRcVc4aQ", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnectLibrary.ConnectPatterns.Note_Item_List.Handler_OnDeleteRequested$vars", [{
name: "NoteId",
attrName: "noteIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Controller.prototype._toggleDeleteConfirmationPopup$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ToggleDeleteConfirmationPopup");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:UwupIyX1kUmPVwlSjWW5Ug:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree._PsM5SpBIk6dMDC8wE4IeQ/ClientActions.UwupIyX1kUmPVwlSjWW5Ug:gidhWj+ew1iwNvK3KDL62Q", "UBTConnectLibrary", "ToggleDeleteConfirmationPopup", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:iGL59nuCmkiIq1P0MD4iDA", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:7znlZnhAUUGbuGhNB+mjYQ", callContext.id);
// IsConfirmationDeleteOpen = notIsConfirmationDeleteOpen
model.variables.isConfirmationDeleteOpenVar = !(model.variables.isConfirmationDeleteOpenVar);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:a1+RfRPu4EG5Mn+qPVIjqA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:UwupIyX1kUmPVwlSjWW5Ug", callContext.id);
}

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
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:O71tVUMGbE+qm6sEo+4Q0Q:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree._PsM5SpBIk6dMDC8wE4IeQ/ClientActions.O71tVUMGbE+qm6sEo+4Q0Q:BucpvtcNgEVdCFt8Ma7KLQ", "UBTConnectLibrary", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:uwkNxlQUNEOUE23xt74HVA", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:OZEQSj76DkqhCuglatzq8g", callContext.id) && model.variables.in_EditingNoteIdIn.equals(OS.BuiltinFunctions.integerToLongInteger(0)))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:qkx9vyZXuUaPLoP0FLwhzw", callContext.id);
// Execute Action: ShowNotesTotal2
controller._showNotesTotal$Action(callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:uYm3dBKOu0yXl55VH2fzIQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:uYm3dBKOu0yXl55VH2fzIQ", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:O71tVUMGbE+qm6sEo+4Q0Q", callContext.id);
}

};
Controller.prototype._deleteButton_OnClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("DeleteButton_OnClick");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:7lUAkrZNqEieXNlpZaG7Ew:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree._PsM5SpBIk6dMDC8wE4IeQ/ClientActions.7lUAkrZNqEieXNlpZaG7Ew:Nh2Zc0u5FXx3fkUAs6aB4g", "UBTConnectLibrary", "DeleteButton_OnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:nO5+lLHdSUm0dAETI+rsFw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ufA1RQyG60uDldsIqa6dTg", callContext.id);
// Execute Action: ToggleDeleteConfirmationPopup
controller._toggleDeleteConfirmationPopup$Action(callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:qEj+YEeV_EG_Ybm7sqmgcA", callContext.id);
// Trigger Event: OnDeleteRequested
return controller.onDeleteRequested$Action(model.variables.delete_NoteIdVar, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:tLQXNe4mE060kM1QpkwDfw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:7lUAkrZNqEieXNlpZaG7Ew", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:7lUAkrZNqEieXNlpZaG7Ew", callContext.id);
throw ex;

});
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
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:dmSMmMCZ4EeuEXLCdpTx5Q:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree._PsM5SpBIk6dMDC8wE4IeQ/ClientActions.dmSMmMCZ4EeuEXLCdpTx5Q:KhzUrvyFhHvtbwmm0RWzRA", "UBTConnectLibrary", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:k2JG42YhxUmLOl0GNGiCiA", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:dI7uCJg9QkydTuBw4OE3vw", callContext.id);
// Execute Action: Show_NotesTotal
controller._showNotesTotal$Action(callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:7vmND8iYJUiS0YsQsqx48Q", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:dmSMmMCZ4EeuEXLCdpTx5Q", callContext.id);
}

};
Controller.prototype._cancleButton_OnClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("CancleButton_OnClick");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:Arhb110Hkk6gLvMFhv8aTQ:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree._PsM5SpBIk6dMDC8wE4IeQ/ClientActions.Arhb110Hkk6gLvMFhv8aTQ:GpI_BygqPsiZhuvNfmj75A", "UBTConnectLibrary", "CancleButton_OnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:iod9O+AqakuTgTKZ3duORg", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:RwYzoMsDAkKRN7oCOckOxg", callContext.id);
// Execute Action: ToggleDeleteConfirmationPopup
controller._toggleDeleteConfirmationPopup$Action(callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:oQJHvKdLrkWHN8sjiBhrSQ", callContext.id);
// Delete_NoteId = 0
model.variables.delete_NoteIdVar = OS.BuiltinFunctions.integerToLongInteger(0);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:KDp_OC3GD0G+4bIh8ye6cQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:Arhb110Hkk6gLvMFhv8aTQ", callContext.id);
}

};
Controller.prototype._showNotesTotal$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ShowNotesTotal");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:7td08SETski21MOqqkxonQ:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree._PsM5SpBIk6dMDC8wE4IeQ/ClientActions.7td08SETski21MOqqkxonQ:WG0rUhkahL_ESEJ3D+YCzw", "UBTConnectLibrary", "ShowNotesTotal", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:xo3IsWZkFEaFGPHIcc6fnw", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:8ftDy0UkFkyU7t3eS0MGAw", callContext.id);
// ShowNotesTotal = Notes.Total > 2 or Notes.Note_Item_List.Length > 2
model.variables.showNotesTotalVar = ((model.variables.notesIn.totalAttr > 2) || (model.variables.notesIn.note_Item_ListAttr.length > 2));
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ySR81tfhZEG41B3_0cyXwA", callContext.id);
// Execute Action: ListClear
OS.SystemActions.listClear(model.variables.shortListVar, callContext);
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:dhPtBGa97ESrVkAIgKqG+A", callContext.id) && model.variables.showNotesTotalVar)) {
// Foreach Notes.Note_Item_List
callContext.iterationContext.registerIterationStart(model.variables.notesIn.note_Item_ListAttr);
try {var note_Item_ListIterator = callContext.iterationContext.getIterator(model.variables.notesIn.note_Item_ListAttr);
var note_Item_ListIndexMax = 2;
var note_Item_ListIndex = 0;
while (((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:dNyEiE34rUW_pEFPiGlzow", callContext.id) && (note_Item_ListIndex < model.variables.notesIn.note_Item_ListAttr.length)) && (note_Item_ListIndexMax > 0))) {
note_Item_ListIterator.currentRowNumber = note_Item_ListIndex;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:bEnHdvyYokyLfsru8RaVBA", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(model.variables.shortListVar, model.variables.notesIn.note_Item_ListAttr.getItem(note_Item_ListIndex.valueOf()), callContext);
note_Item_ListIndexMax--;
note_Item_ListIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.notesIn.note_Item_ListAttr);
}

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:LF6+pj9d5EuN5tTu1swFag", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:LF6+pj9d5EuN5tTu1swFag", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:7td08SETski21MOqqkxonQ", callContext.id);
}

};

Controller.prototype.handler_OnDeleteRequested$Action = function (noteIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_OnDeleteRequested$Action, callContext, noteIdIn);

};
Controller.prototype.toggleDeleteConfirmationPopup$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._toggleDeleteConfirmationPopup$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.deleteButton_OnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._deleteButton_OnClick$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.cancleButton_OnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._cancleButton_OnClick$Action, callContext);

};
Controller.prototype.showNotesTotal$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._showNotesTotal$Action, callContext);

};
Controller.prototype.onCancelEditRequested$Action = function () {
return Promise.resolve();
};
Controller.prototype.onSaveEditRequested$Action = function () {
return Promise.resolve();
};
Controller.prototype.onDeleteRequested$Action = function () {
return Promise.resolve();
};
Controller.prototype.onShowAllNotes$Action = function () {
return Promise.resolve();
};
Controller.prototype.onEditRequested$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g:3o_94888UGa0qaomZFOpnQ", "UBTConnectLibrary", "ConnectPatterns", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:_PsM5SpBIk6dMDC8wE4IeQ:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree._PsM5SpBIk6dMDC8wE4IeQ:f10ebwQ99PVlpPk1YBxl3w", "UBTConnectLibrary", "Note_Item_List", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:_PsM5SpBIk6dMDC8wE4IeQ", callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "ConnectPatterns/Note_Item_List On Initialize");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "ConnectPatterns/Note_Item_List On Parameters Changed");
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

define("UBTConnectLibrary.ConnectPatterns.Note_Item_List.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"KuE__GS4xUu89O9XcZx0Sg": {
getter: function (varBag, idService) {
return varBag.vars.value.noteIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"lqPGGAecvkOmm8BdqdaV3g": {
getter: function (varBag, idService) {
return varBag.model.variables.shortListVar;
}
},
"VvDtwzL+j0a2OjbrFD2czA": {
getter: function (varBag, idService) {
return varBag.model.variables.showNotesTotalVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"bN3Kl45_9ECDdfdUK2Qscg": {
getter: function (varBag, idService) {
return varBag.model.variables.isConfirmationDeleteOpenVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"4t0CNHGHH02ZUWQVvnZZkA": {
getter: function (varBag, idService) {
return varBag.model.variables.delete_NoteIdVar;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"ZDmp+Ggm0U+l3IVXqGL+1g": {
getter: function (varBag, idService) {
return varBag.model.variables.notesIn;
}
},
"RjPAfxWlfk6vcOLw8ygsHQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EditingNoteIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"9NR6TCKlDkS+g32OduGy9Q": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ShowPreviewOnlyIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Rd8Qj9P1TEyADlpVOir7HA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_SearchStringIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"sFkwtxsFlk+pPG2_QdarnQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"TLWE70zl2kGSGLJOdAEuCQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasNotes"));
})(varBag.model, idService);
}
},
"OU0YXw2eLUWtLVXRbyyHCQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"0a93TG_Z6UCe_zoyWynE0g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DeleteConfirmationPopup"));
})(varBag.model, idService);
}
},
"RJD2un75sEunpYim+9jH_A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TopHeader"));
})(varBag.model, idService);
}
},
"rY0TgEFbYUyVitpyHPT74Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"1IaxrI6JIUC+pi6yZN7p5w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Badge"));
})(varBag.model, idService);
}
},
"N38JLhMVSEW9zFdBGAON2w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"jBWnQfWi5Uiir20Z8nKj8Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Footer"));
})(varBag.model, idService);
}
},
"2JLboMuQYEW_aIuPt3kFZw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"YsMmcQfaJEC4L3RI0dyysg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"QRHPpzQli06ZF37BhGBtMw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"8jGgvijSx0mJUIK7jP1HYw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
