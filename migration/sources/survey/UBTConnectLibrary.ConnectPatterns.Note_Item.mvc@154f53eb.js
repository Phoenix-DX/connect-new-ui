define("UBTConnectLibrary.ConnectPatterns.Note_Item.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.controller$GetRelativeTimeTag", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ButtonOptionsRec"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("EdittingNote", "edittingNoteVar", "EdittingNote", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("In_NoteId", "in_NoteIdIn", "In_NoteId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_NoteIdInDataFetchStatus", "_in_NoteIdInDataFetchStatus", "_in_NoteIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_Note", "in_NoteIn", "In_Note", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_NoteInDataFetchStatus", "_in_NoteInDataFetchStatus", "_in_NoteInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("DateCreatedUtc", "dateCreatedUtcIn", "DateCreatedUtc", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, false), 
this.attr("_dateCreatedUtcInDataFetchStatus", "_dateCreatedUtcInDataFetchStatus", "_dateCreatedUtcInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("DateEditedUtc", "dateEditedUtcIn", "DateEditedUtc", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, false), 
this.attr("_dateEditedUtcInDataFetchStatus", "_dateEditedUtcInDataFetchStatus", "_dateEditedUtcInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("IsEditing", "isEditingIn", "IsEditing", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isEditingInDataFetchStatus", "_isEditingInDataFetchStatus", "_isEditingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("IsDimmed", "isDimmedIn", "IsDimmed", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isDimmedInDataFetchStatus", "_isDimmedInDataFetchStatus", "_isDimmedInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
return {
TextArea_EdittingNote: OS.Model.ValidationWidgetRecord
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
if("In_NoteId" in inputs) {
this.variables.in_NoteIdIn = inputs.In_NoteId;
if("_in_NoteIdInDataFetchStatus" in inputs) {
this.variables._in_NoteIdInDataFetchStatus = inputs._in_NoteIdInDataFetchStatus;
}

}

if("In_Note" in inputs) {
this.variables.in_NoteIn = inputs.In_Note;
if("_in_NoteInDataFetchStatus" in inputs) {
this.variables._in_NoteInDataFetchStatus = inputs._in_NoteInDataFetchStatus;
}

}

if("DateCreatedUtc" in inputs) {
this.variables.dateCreatedUtcIn = inputs.DateCreatedUtc;
if("_dateCreatedUtcInDataFetchStatus" in inputs) {
this.variables._dateCreatedUtcInDataFetchStatus = inputs._dateCreatedUtcInDataFetchStatus;
}

}

if("DateEditedUtc" in inputs) {
this.variables.dateEditedUtcIn = inputs.DateEditedUtc;
if("_dateEditedUtcInDataFetchStatus" in inputs) {
this.variables._dateEditedUtcInDataFetchStatus = inputs._dateEditedUtcInDataFetchStatus;
}

}

if("IsEditing" in inputs) {
this.variables.isEditingIn = inputs.IsEditing;
if("_isEditingInDataFetchStatus" in inputs) {
this.variables._isEditingInDataFetchStatus = inputs._isEditingInDataFetchStatus;
}

}

if("IsDimmed" in inputs) {
this.variables.isDimmedIn = inputs.IsDimmed;
if("_isDimmedInDataFetchStatus" in inputs) {
this.variables._isDimmedInDataFetchStatus = inputs._isDimmedInDataFetchStatus;
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
return new OS.Model.ModelFactory(Model, "ConnectPatterns.Note_Item");
});
define("UBTConnectLibrary.ConnectPatterns.Note_Item.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.Note_Item.mvc$model", "UBTConnectLibrary.ConnectPatterns.Note_Item.mvc$controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.ConnectPatterns.TextEllipsis.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.ConnectPatterns.KebabButton_BookmarkNotes.mvc$view", "UBTConnectLibrary.ConnectPatterns.TextArea_WithCounter.mvc$view", "UBTConnectLibrary.ConnectPatterns.Button.mvc$view", "UBTConnectLibrary.controller$GetRelativeTimeTag", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ButtonOptionsRec"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_Note_Item_mvc_model, UBTConnectLibrary_ConnectPatterns_Note_Item_mvc_controller, UBTConnectLibraryClientVariables, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_TextEllipsis_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_KebabButton_BookmarkNotes_mvc_view, UBTConnectLibrary_ConnectPatterns_TextArea_WithCounter_mvc_view, UBTConnectLibrary_ConnectPatterns_Button_mvc_view) {
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
        View.displayName = "ConnectPatterns.Note_Item";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/UBTConnectLibrary.ConnectPatterns.Note_Item.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_TextEllipsis_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_KebabButton_BookmarkNotes_mvc_view, UBTConnectLibrary_ConnectPatterns_TextArea_WithCounter_mvc_view, UBTConnectLibrary_ConnectPatterns_Button_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectPatterns_Note_Item_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectPatterns_Note_Item_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(!(model.variables.isEditingIn), false, this, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
inputs: {
ColumnOptions: model.getCachedValue(idService.getId("aobhaly99kez69ZrI_b3AQ.ColumnOptions"), function () {
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
left: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
inputs: {
ColumnOptions: model.getCachedValue(idService.getId("g_FSJxjklky0edYbnrR2fg.ColumnOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
rec.columnBehaviourAttr = UBTConnectLibraryModel.staticEntities.uBT_ColumnBehaviour.reduceFirst;
return rec;
}();
}),
ExtendedClasses: "padding-top-xs"
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
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_ColorId: UBTConnectLibraryModel.staticEntities.uBT_Color.cyanDark,
In_IconId: UBTConnectLibraryModel.staticEntities.uBT_Icons.listAltFill,
In_ExtendedClasses: model.getCachedValue(idService.getId("LQ8a8gsCGUaCwiXYwl01Uw.In_ExtendedClasses"), function () {
return ((model.variables.isDimmedIn) ? ("note-item-dimmed") : (""));
}, function () {
return model.variables.isDimmedIn;
}),
_in_ExtendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isDimmedInDataFetchStatus)
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
right: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("OYXSa10dyU6WZ37_72hjhQ.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.leftSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.extraSmall;
return rec;
}();
rec.displayOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
rec.displayAttr = UBTConnectLibraryModel.staticEntities.uBT_Display.flex;
rec.flexDirectionAttr = UBTConnectLibraryModel.staticEntities.uBT_FlexDirection.column;
return rec;
}();
rec.widthOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.SizeOptionsRec();
rec.minAttr = "0";
rec.maxAttr = "100%";
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
uuid: "3",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [$if((model.variables.in_SearchStringIn === ""), false, this, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_TextEllipsis_mvc_view, {
inputs: {
Text: model.variables.in_NoteIn,
_textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_NoteInDataFetchStatus),
ExtendedClasses: model.getCachedValue(idService.getId("KqH_zbONlU2B7SXAvXY2ng.ExtendedClasses"), function () {
return ((model.variables.isDimmedIn) ? ("note-item-dimmed text-align-left") : ("text-align-left"));
}, function () {
return model.variables.isDimmedIn;
}),
_extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isDimmedInDataFetchStatus)
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
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
ExtendedClasses: "text-align-left",
In_HighlightOptions: model.getCachedValue(idService.getId("Ze5XufE8v0a_XfGQrCxFVg.In_HighlightOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.primary;
rec.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
In_TextOptions: model.getCachedValue(idService.getId("Ze5XufE8v0a_XfGQrCxFVg.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
return rec;
}();
}),
In_HighlightWords: model.getCachedValue(idService.getId("Ze5XufE8v0a_XfGQrCxFVg.In_HighlightWords"), function () {
return ((((model.variables.in_SearchStringIn) !== (""))) ? (model.variables.in_SearchStringIn) : (""));
}, function () {
return model.variables.in_SearchStringIn;
}),
_in_HighlightWordsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SearchStringInDataFetchStatus),
In_Text: model.variables.in_NoteIn,
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_NoteInDataFetchStatus)
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
uuid: "5",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_Text: model.getCachedValue(idService.getId("RelativeTimeTag.In_Text"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.getRelativeTimeTag$Action(model.variables.dateCreatedUtcIn, model.variables.dateEditedUtcIn, callContext).relativeTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.dateCreatedUtcIn;
}, function () {
return model.variables.dateEditedUtcIn;
}),
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._dateCreatedUtcInDataFetchStatus, model.variables._dateEditedUtcInDataFetchStatus),
In_TextOptions: model.getCachedValue(idService.getId("RelativeTimeTag.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral7;
rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.doubleExtraSmall;
return rec;
}();
}),
ExtendedClasses: model.getCachedValue(idService.getId("RelativeTimeTag.ExtendedClasses"), function () {
return ((model.variables.isDimmedIn) ? ("note-item-dimmed text-align-left") : ("text-align-left"));
}, function () {
return model.variables.isDimmedIn;
}),
_extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isDimmedInDataFetchStatus)
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
name: "RelativeTimeTag",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.dateEditedUtcIn), asPrimitiveValue(model.variables.dateCreatedUtcIn), asPrimitiveValue(model.variables.isDimmedIn), asPrimitiveValue(model.variables.in_NoteIn), asPrimitiveValue(model.variables._dateEditedUtcInDataFetchStatus), asPrimitiveValue(model.variables._dateCreatedUtcInDataFetchStatus), asPrimitiveValue(model.variables._isDimmedInDataFetchStatus), asPrimitiveValue(model.variables._in_NoteInDataFetchStatus), asPrimitiveValue(model.variables._in_SearchStringInDataFetchStatus), asPrimitiveValue(model.variables.in_SearchStringIn)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.dateEditedUtcIn), asPrimitiveValue(model.variables.dateCreatedUtcIn), asPrimitiveValue(model.variables.in_NoteIn), asPrimitiveValue(model.variables.in_SearchStringIn), asPrimitiveValue(model.variables._dateEditedUtcInDataFetchStatus), asPrimitiveValue(model.variables._dateCreatedUtcInDataFetchStatus), asPrimitiveValue(model.variables._in_NoteInDataFetchStatus), asPrimitiveValue(model.variables._in_SearchStringInDataFetchStatus), asPrimitiveValue(model.variables._isDimmedInDataFetchStatus), asPrimitiveValue(model.variables.isDimmedIn)]
})];
}),
right: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_KebabButton_BookmarkNotes_mvc_view, {
inputs: {
isEnable: !(model.variables.isDimmedIn),
_isEnableInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isDimmedInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
delete$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/KebabButton_BookmarkNotes Delete");
controller.onDeleteRequested$Action(model.variables.in_NoteIdIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
edit$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/KebabButton_BookmarkNotes Edit");
return controller.handler_EditRequested$Action(controller.callContext(eventHandlerContext));
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
uuid: "7",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_NoteIdIn), asPrimitiveValue(model.variables.dateEditedUtcIn), asPrimitiveValue(model.variables.dateCreatedUtcIn), asPrimitiveValue(model.variables.in_NoteIn), asPrimitiveValue(model.variables.in_SearchStringIn), asPrimitiveValue(model.variables._dateEditedUtcInDataFetchStatus), asPrimitiveValue(model.variables._dateCreatedUtcInDataFetchStatus), asPrimitiveValue(model.variables._in_NoteInDataFetchStatus), asPrimitiveValue(model.variables._in_SearchStringInDataFetchStatus), asPrimitiveValue(model.variables._isDimmedInDataFetchStatus), asPrimitiveValue(model.variables.isDimmedIn)]
})];
}, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
inputs: {
ColumnOptions: model.getCachedValue(idService.getId("Fjn6ZxssuUeK7lDZI_cMkg.ColumnOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
rec.columnBehaviourAttr = UBTConnectLibraryModel.staticEntities.uBT_ColumnBehaviour.reduceFirst;
rec.spacingSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.extraSmall;
return rec;
}();
}),
ExtendedClasses: "padding-top-xs"
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
uuid: "8",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
left: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_IconId: UBTConnectLibraryModel.staticEntities.uBT_Icons.listAltFill,
In_ColorId: UBTConnectLibraryModel.staticEntities.uBT_Color.cyanDark
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
uuid: "9",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
right: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_TextArea_WithCounter_mvc_view, {
inputs: {
In_InitialLength: model.getCachedValue(idService.getId("NIpi_DXN2Eu712t05RyXlA.In_InitialLength"), function () {
return OS.BuiltinFunctions.length(model.variables.edittingNoteVar);
}, function () {
return model.variables.edittingNoteVar;
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
uuid: "10",
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Input: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.TextArea, {
_validationProps: {
validationService: validationService
},
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
mandatory: false,
maxLength: 100,
style: "form-control",
textLines: 3,
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.edittingNoteVar, function (value) {
model.variables.edittingNoteVar = value;
}),
_idProps: {
service: idService,
name: "TextArea_EdittingNote"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.edittingNoteVar)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.edittingNoteVar)]
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("Rs0zF3zlWkqGi21eVIDmeg.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
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
uuid: "12",
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
inputs: {
ColumnOptions: model.getCachedValue(idService.getId("ubBodUeE6Ea__ZsSMqFoBQ.ColumnOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
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
uuid: "13",
alias: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
left: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Button_mvc_view, {
inputs: {
In_ButtonOptions: model.getCachedValue(idService.getId("Cancel.In_ButtonOptions"), function () {
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
controller.onCancelEditRequested$Action(controller.callContext(eventHandlerContext));
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
name: "Cancel",
alias: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return ["Cancel"];
})
},
_dependencies: []
})];
}),
right: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Button_mvc_view, {
inputs: {
In_IsDisabled: (model.variables.edittingNoteVar === model.variables.in_NoteIn),
_in_IsDisabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_NoteInDataFetchStatus),
In_ButtonOptions: model.getCachedValue(idService.getId("Save.In_ButtonOptions"), function () {
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
return controller.handler_SaveRequested$Action(controller.callContext(eventHandlerContext));
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
name: "Save",
alias: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return ["Save"];
})
},
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables._in_NoteInDataFetchStatus), asPrimitiveValue(model.variables.in_NoteIn), asPrimitiveValue(model.variables.edittingNoteVar)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables._in_NoteInDataFetchStatus), asPrimitiveValue(model.variables.in_NoteIn), asPrimitiveValue(model.variables.edittingNoteVar)]
})];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnectLibrary.ConnectPatterns.Note_Item.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectPatterns.Note_Item.mvc$debugger", "UBTConnectLibrary.controller$GetRelativeTimeTag", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ButtonOptionsRec"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectPatterns_Note_Item_mvc_Debugger) {
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
Controller.prototype._handler_SaveRequested$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_SaveRequested");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:dPuQ0qMoCEKT7ee4xX4H0A:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.5RHyz_7uoEOHMFP8qCGzBQ/ClientActions.dPuQ0qMoCEKT7ee4xX4H0A:B2Z3fGthrI4jMM1yVqvtKA", "UBTConnectLibrary", "Handler_SaveRequested", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:s5oDeApAi02FDtUW4bYINw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:ofsMwbV_+E21A9XN1dkhlg", callContext.id);
// Trigger Event: OnSaveEditRequested
return controller.onSaveEditRequested$Action(model.variables.in_NoteIdIn, model.variables.edittingNoteVar, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:gYa0FeR2S0GQ1hZ6yClckA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:dPuQ0qMoCEKT7ee4xX4H0A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:dPuQ0qMoCEKT7ee4xX4H0A", callContext.id);
throw ex;

});
};
Controller.prototype._handler_EditRequested$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_EditRequested");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:NuT8_f_FR0enbUaVIhdKDg:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.5RHyz_7uoEOHMFP8qCGzBQ/ClientActions.NuT8_f_FR0enbUaVIhdKDg:fXaj8lyrCzdDE0VXp9GmJQ", "UBTConnectLibrary", "Handler_EditRequested", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:FPG32az0EkubIW4htCARbA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:nav3AGiAOkuEb7e22fhLNA", callContext.id);
// EdittingNote = In_Note
model.variables.edittingNoteVar = model.variables.in_NoteIn;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:FtsuZH08TUGZNpSQmkd1cQ", callContext.id);
// Trigger Event: OnEditRequested
return controller.onEditRequested$Action(model.variables.in_NoteIdIn, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Gu_Swjr34kSVSq9e4x4g_A", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:NuT8_f_FR0enbUaVIhdKDg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:NuT8_f_FR0enbUaVIhdKDg", callContext.id);
throw ex;

});
};

Controller.prototype.handler_SaveRequested$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_SaveRequested$Action, callContext);

};
Controller.prototype.handler_EditRequested$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_EditRequested$Action, callContext);

};
Controller.prototype.onEditRequested$Action = function () {
return Promise.resolve();
};
Controller.prototype.onSaveEditRequested$Action = function () {
return Promise.resolve();
};
Controller.prototype.onDeleteRequested$Action = function () {
return Promise.resolve();
};
Controller.prototype.onCancelEditRequested$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g:3o_94888UGa0qaomZFOpnQ", "UBTConnectLibrary", "ConnectPatterns", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:5RHyz_7uoEOHMFP8qCGzBQ:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.5RHyz_7uoEOHMFP8qCGzBQ:h5Gj7BnMLt5qYYdqyevtdg", "UBTConnectLibrary", "Note_Item", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:5RHyz_7uoEOHMFP8qCGzBQ", callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g", callContext.id);
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
return UBTConnectLibraryController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLibraryLanguageResources);
});

define("UBTConnectLibrary.ConnectPatterns.Note_Item.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"uDKzS8egm0W2SCWuh4IO2g": {
getter: function (varBag, idService) {
return varBag.model.variables.edittingNoteVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"zLPhSey1IkSWU6Q8DItwCQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_NoteIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"VGVPPAiFIU2v8d3ImQ24FA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_NoteIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"z8m2i_Os7UaHCNsUmxvTFQ": {
getter: function (varBag, idService) {
return varBag.model.variables.dateCreatedUtcIn;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"bAFZRpneeESO7qtioqdr_A": {
getter: function (varBag, idService) {
return varBag.model.variables.dateEditedUtcIn;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"+T0biAZUb0iaSE13asW5Og": {
getter: function (varBag, idService) {
return varBag.model.variables.isEditingIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"2mJsjbK0ZEKXPflsaoQt3A": {
getter: function (varBag, idService) {
return varBag.model.variables.isDimmedIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"CvOG6dDfB0W9BN9BsoyHZg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_SearchStringIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"+06QhIjihUiNijEoSp_BmQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("IsNormalView"));
})(varBag.model, idService);
}
},
"Yi1mFpmYL0yRcoEDngnqfQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"hmEpMMhfhUaH5Wl8UeQDxQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"MX1rGDL_GkyYc6sLlCo9mw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"X9Vqs9zGNkudoz5hgrJbvA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"KCUts7VHdUukcvZH7Lq9zQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("RelativeTimeTag"));
})(varBag.model, idService);
}
},
"qksKPi4Xn0mInNrT6fRZMw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"Z_8vz3Y2Xk2PJv8E8VoIig": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"MTVQuZ_BDUyvYle7Yi5aZw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"8ofoKg968EWeKU+MFPELyw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Input"));
})(varBag.model, idService);
}
},
"4tOGXnGjF0SUJ40PUkIouw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TextArea_EdittingNote"));
})(varBag.model, idService);
}
},
"q0VFuBNVS06NnziPkpH3rw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"SsMXxuqsnEK3__FkhCzGYg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"qLuNXOtdpEKFPdqoOACrvA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Cancel"));
})(varBag.model, idService);
}
},
"bGpj1sdom0+JegBze5Bazg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"+dFQyWwoW0ep6agFwpjVZg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"lL+SrSYLLEqSIefjgKaDOQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Save"));
})(varBag.model, idService);
}
},
"0xY06cWKhki5JA6hs4Uukg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
