define("UBTConnect.Notes.Notes.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "Connect_Notes_CS.model", "UBTConnect.controller", "UBTJavaScriptUtils.controller", "NavigationHandler.controller", "UBTConnectLibrary.Layouts.Layout_MainPages_FixedTitle.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnect.App_Common_Blocks.App_NotificationIcon.mvc$model", "UBTConnectLibrary.ConnectPatterns.Input.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.ConnectPatterns.Horizontal_Filter_TagList.mvc$model", "UBTConnect.App_CommonBlocks_Filter.FilterSheet_Icon_Label.mvc$model", "UBTConnect.Notes.NoteCard_List.mvc$model", "UBTConnect.App_Common.BottomBarMenu.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "UBTConnect.Notes.Notes_FilterSheet.mvc$model", "UBTConnectLibrary.model$TagRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$TagList", "Connect_Notes_CS.model$Notes_FilterRec", "UBTConnect.referencesHealth$Connect_Notes_CS", "Connect_Notes_CS.model$UI_Note_CardItemRec", "UBTConnect.model$UI_Note_CardItemList", "UBTConnectLibrary.model$SearchInputRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "Connect_Notes_CS.model$UI_Note_CardContentRec", "Connect_Notes_CS.model$UI_NoteCard_SourceHeaderRec", "UBTConnectLibrary.model$NotesRec", "UBTConnectLibrary.model$Note_ItemRec", "UBTConnect.model$Note_ItemList", "UBTConnect.controller$ScrollTop", "UBTConnect.controller$GetNotes_Pills", "UBTConnect.controller$GetNotes_FilterYear", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "NavigationHandler.controller$SetPreloadObject", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect.model$SwipeActionLongIntegerRecordList", "UBTConnect.model$CarouselPreloadedHouseholdsRec", "UBTConnect.model$PreloadedCarouselRec", "Connect_Notes_CS.model$UI_NotesRec"], function (OutSystems, UBTConnectModel, UBTConnectLibraryModel, Connect_Notes_CSModel, UBTConnectController, UBTJavaScriptUtilsController, NavigationHandlerController, UBTConnectLibrary_Layouts_Layout_MainPages_FixedTitle_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, UBTConnect_App_Common_Blocks_App_NotificationIcon_mvcModel, UBTConnectLibrary_ConnectPatterns_Input_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_ConnectPatterns_Horizontal_Filter_TagList_mvcModel, UBTConnect_App_CommonBlocks_Filter_FilterSheet_Icon_Label_mvcModel, UBTConnect_Notes_NoteCard_List_mvcModel, UBTConnect_App_Common_BottomBarMenu_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel, UBTConnect_Notes_Notes_FilterSheet_mvcModel) {
var OS = OutSystems.Internal;

var GetNotesDataActRec = (function (_super) {
__extends(GetNotesDataActRec, _super);
function GetNotesDataActRec(defaults) {
_super.apply(this, arguments);
}
GetNotesDataActRec.attributesToDeclare = function () {
return [
this.attr("Out_Notes", "out_NotesOut", "Out_Notes", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Notes_CSModel.UI_NotesRec());
}, true, Connect_Notes_CSModel.UI_NotesRec)
].concat(_super.attributesToDeclare.call(this));
};
GetNotesDataActRec.fromStructure = function (str) {
return new GetNotesDataActRec(new GetNotesDataActRec.RecordClass({
out_NotesOut: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetNotesDataActRec.init();
return GetNotesDataActRec;
})(OS.Model.DataSourceRecord);

var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("HeaderIsScrolled", "headerIsScrolledVar", "HeaderIsScrolled", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("Note_Pills", "note_PillsVar", "Note_Pills", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.TagList());
}, false, UBTConnectModel.TagList), 
this.attr("Notes_Filter", "notes_FilterVar", "Notes_Filter", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Notes_CSModel.Notes_FilterRec());
}, false, Connect_Notes_CSModel.Notes_FilterRec), 
this.attr("HasFiltersApplied", "hasFiltersAppliedVar", "HasFiltersApplied", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("Filter_BottomSheetId", "filter_BottomSheetIdVar", "Filter_BottomSheetId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("BottomSheetId_Filter_IsLoaded", "bottomSheetId_Filter_IsLoadedVar", "BottomSheetId_Filter_IsLoaded", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("BottomSheetId_Filter_ShowSubscriptionOnClick", "bottomSheetId_Filter_ShowSubscriptionOnClickVar", "BottomSheetId_Filter_ShowSubscriptionOnClick", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("Years", "yearsVar", "Years", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, false, OS.DataTypes.TextList), 
this.attr("PageSize", "pageSizeVar", "PageSize", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 20;
}, false), 
this.attr("PageNumber", "pageNumberVar", "PageNumber", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 1;
}, false), 
this.attr("MaxRecords", "maxRecordsVar", "MaxRecords", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("Notes_List", "notes_ListVar", "Notes_List", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_Note_CardItemList());
}, false, UBTConnectModel.UI_Note_CardItemList), 
this.attr("ResetPillsValue", "resetPillsValueVar", "ResetPillsValue", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("PillsLoaded", "pillsLoadedVar", "PillsLoaded", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("Notes_Loading", "notes_LoadingVar", "Notes_Loading", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("GetNotes", "getNotesDataAct", "getNotesDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetNotesDataActRec());
}, true, GetNotesDataActRec)
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
Model._hasValidationWidgetsValue = ((((((((((UBTConnectLibrary_Layouts_Layout_MainPages_FixedTitle_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_Blocks_App_NotificationIcon_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Input_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Horizontal_Filter_TagList_mvcModel.hasValidationWidgets) || UBTConnect_App_CommonBlocks_Filter_FilterSheet_Icon_Label_mvcModel.hasValidationWidgets) || UBTConnect_Notes_NoteCard_List_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_BottomBarMenu_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets) || UBTConnect_Notes_Notes_FilterSheet_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Notes.Notes");
});
define("UBTConnect.Notes.Notes.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "Connect_Notes_CS.model", "UBTJavaScriptUtils.controller", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Notes.Notes.mvc$model", "UBTConnect.Notes.Notes.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.Layouts.Layout_MainPages_FixedTitle.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnect.App_Common_Blocks.App_NotificationIcon.mvc$view", "UBTConnectLibrary.ConnectPatterns.Input.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.ConnectPatterns.Horizontal_Filter_TagList.mvc$view", "UBTConnect.App_CommonBlocks_Filter.FilterSheet_Icon_Label.mvc$view", "UBTConnect.Notes.NoteCard_List.mvc$view", "UBTConnect.App_Common.BottomBarMenu.mvc$view", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "UBTConnect.Notes.Notes_FilterSheet.mvc$view", "UBTConnectLibrary.model$TagRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$TagList", "Connect_Notes_CS.model$Notes_FilterRec", "UBTConnect.referencesHealth$Connect_Notes_CS", "Connect_Notes_CS.model$UI_Note_CardItemRec", "UBTConnect.model$UI_Note_CardItemList", "UBTConnectLibrary.model$SearchInputRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "Connect_Notes_CS.model$UI_Note_CardContentRec", "Connect_Notes_CS.model$UI_NoteCard_SourceHeaderRec", "UBTConnectLibrary.model$NotesRec", "UBTConnectLibrary.model$Note_ItemRec", "UBTConnect.model$Note_ItemList", "UBTConnect.controller$ScrollTop", "UBTConnect.controller$GetNotes_Pills", "UBTConnect.controller$GetNotes_FilterYear", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "NavigationHandler.controller$SetPreloadObject", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect.model$SwipeActionLongIntegerRecordList", "UBTConnect.model$CarouselPreloadedHouseholdsRec", "UBTConnect.model$PreloadedCarouselRec", "Connect_Notes_CS.model$UI_NotesRec"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, Connect_Notes_CSModel, UBTJavaScriptUtilsController, NavigationHandlerController, React, OSView, UBTConnect_Notes_Notes_mvc_model, UBTConnect_Notes_Notes_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_Layouts_Layout_MainPages_FixedTitle_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnect_App_Common_Blocks_App_NotificationIcon_mvc_view, UBTConnectLibrary_ConnectPatterns_Input_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_Horizontal_Filter_TagList_mvc_view, UBTConnect_App_CommonBlocks_Filter_FilterSheet_Icon_Label_mvc_view, UBTConnect_Notes_NoteCard_List_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, UBTConnect_Notes_Notes_FilterSheet_mvc_view) {
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
        View.displayName = "Notes.Notes";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_Layouts_Layout_MainPages_FixedTitle_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnect_App_Common_Blocks_App_NotificationIcon_mvc_view, UBTConnectLibrary_ConnectPatterns_Input_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_Horizontal_Filter_TagList_mvc_view, UBTConnect_App_CommonBlocks_Filter_FilterSheet_Icon_Label_mvc_view, UBTConnect_Notes_NoteCard_List_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, UBTConnect_Notes_Notes_FilterSheet_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Notes_Notes_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Notes_Notes_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "Notes";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_Layouts_Layout_MainPages_FixedTitle_mvc_view, {
inputs: {
isGrayBackground: true
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onHeaderScrolled$Action: function (event_IsHeaderScrolledIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Layouts/Layout_MainPages_FixedTitle OnHeaderScrolled");
controller.handler_OnHeaderScrolled$Action(event_IsHeaderScrolledIn, controller.callContext(eventHandlerContext));
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
placeholder_Header_Title: new PlaceholderContent(function () {
return ["My Notes"];
}),
placeholder_Header_Right: new PlaceholderContent(function () {
return [$if(model.variables.headerIsScrolledVar, false, this, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral0,
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.search
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
click$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Icon Click");
controller.iconClick_SearchIcon$Action(controller.callContext(eventHandlerContext));
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
}), React.createElement(UBTConnect_App_Common_Blocks_App_NotificationIcon_mvc_view, {
inputs: {},
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
placeholder_Header_Input: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Input_mvc_view, {
inputs: {
In_Options: model.getCachedValue(idService.getId("5F6dfu+8n0edcHf_XT1mdA.In_Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SearchInputRec();
rec.maxLengthAttr = 50;
rec.searchPromptAttr = "Search";
rec.debounce_DelayMSAttr = 200;
rec.borderRadiusAttr = UBTConnectModel.staticEntities.shape.rounded;
rec.enableAutocompleteHTMLAttr = false;
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_ClearString$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Input Event_ClearString");
return controller.handler_SearchOnClear$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
event_OnChange$Action: function (event_CurrentStringIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Input Event_OnChange");
return controller.handler_SearchOnChange$Action(event_CurrentStringIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
event_Submit$Action: function (event_SubmittedStringIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Input Event_Submit");
return controller.handler_SearchOnSubmit$Action(controller.callContext(eventHandlerContext));
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
}),
placeholder_Header_Input_Icon: PlaceholderContent.Empty,
headerContent: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("Filter_Pills.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.extraSmall;
rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
return rec;
}();
rec.marginSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
return rec;
}();
rec.displayOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
return rec;
}();
return rec;
}();
}),
ExtendedClasses: "background-neutral-0"
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
name: "Filter_Pills",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Horizontal_Filter_TagList_mvc_view, {
inputs: {
In_IsSingleSelection: true,
In_TagsLoading: !(model.variables.pillsLoadedVar),
In_TagToggleList: model.variables.note_PillsVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
changed$Action: function (updatedTagListIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Horizontal_Filter_TagList Changed");
return controller.handler_OnClickPill$Action(updatedTagListIn, controller.callContext(eventHandlerContext));
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
uuid: "5",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
filter: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_App_CommonBlocks_Filter_FilterSheet_Icon_Label_mvc_view, {
inputs: {
ShowSubscriptionOnClick: model.variables.bottomSheetId_Filter_ShowSubscriptionOnClickVar,
HaveFiltersApplied: model.variables.hasFiltersAppliedVar,
BottomSheetId: model.variables.filter_BottomSheetIdVar,
isLoaded: true
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
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.filter_BottomSheetIdVar), asPrimitiveValue(model.variables.hasFiltersAppliedVar), asPrimitiveValue(model.variables.bottomSheetId_Filter_ShowSubscriptionOnClickVar)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.filter_BottomSheetIdVar), asPrimitiveValue(model.variables.hasFiltersAppliedVar), asPrimitiveValue(model.variables.bottomSheetId_Filter_ShowSubscriptionOnClickVar), asPrimitiveValue(model.variables.note_PillsVar), asPrimitiveValue(model.variables.pillsLoadedVar)]
})];
}),
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Notes_NoteCard_List_mvc_view, {
inputs: {
In_IsLoading: model.variables.notes_LoadingVar,
In_Notes: model.variables.notes_ListVar,
In_SearchString: model.variables.notes_FilterVar.searchTermAttr
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onClick_NoteCardItem$Action: function (objectIdIn, objectId2In, noteCategoryTypeIdIn, hasDetailAccessIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Notes/NoteCard_List OnClick_NoteCardItem");
controller.handler_OnClickNoteCardItem$Action(objectIdIn, objectId2In, noteCategoryTypeIdIn, hasDetailAccessIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
onLoadMore$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Notes/NoteCard_List OnLoadMore");
return controller.notes_CardListOnLoadMore$Action(controller.callContext(eventHandlerContext));
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
}),
bottom: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_App_Common_BottomBarMenu_mvc_view, {
inputs: {},
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
_dependencies: []
})];
}),
placeholder_CommonUI_Inside_Layout: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, {
inputs: {},
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
})
},
_dependencies: [asPrimitiveValue(model.variables.notes_FilterVar.searchTermAttr), asPrimitiveValue(model.variables.notes_ListVar), asPrimitiveValue(model.variables.notes_LoadingVar), asPrimitiveValue(model.variables.filter_BottomSheetIdVar), asPrimitiveValue(model.variables.hasFiltersAppliedVar), asPrimitiveValue(model.variables.bottomSheetId_Filter_ShowSubscriptionOnClickVar), asPrimitiveValue(model.variables.note_PillsVar), asPrimitiveValue(model.variables.pillsLoadedVar), asPrimitiveValue(model.variables.headerIsScrolledVar)]
}), $if(false, false, this, function () {
return [];
}, function () {
return [React.createElement(UBTConnect_Notes_Notes_FilterSheet_mvc_view, {
inputs: {
In_FilterNotes: model.variables.notes_FilterVar,
In_YearsOptions: model.variables.yearsVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
sheetInilialized$Action: function (sheetIdIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Notes/Notes_FilterSheet SheetInilialized");
controller.handler_FilterSheetSheetInilialized$Action(sheetIdIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
loaded$Action: function (showSubscriptionOnClickIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Notes/Notes_FilterSheet Loaded");
controller.handler_FilterSheetLoaded$Action(showSubscriptionOnClickIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
applyFilters$Action: function (event_Filter_NotesIn, event_HasFiltersAppliedIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Notes/Notes_FilterSheet ApplyFilters");
return controller.handler_ApplyFilters$Action(event_Filter_NotesIn, event_HasFiltersAppliedIn, controller.callContext(eventHandlerContext));
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
uuid: "10",
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("UBTConnect.Notes.Notes.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "Connect_Notes_CS.model", "UBTJavaScriptUtils.controller", "NavigationHandler.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Notes.Notes.mvc$debugger", "UBTConnect.Notes.controller", "UBTConnect.Notes.Notes.mvc$controller.ScreenEvent_OnInitialize.CheckRestoredJS", "UBTConnectLibrary.model$TagRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$TagList", "Connect_Notes_CS.model$Notes_FilterRec", "UBTConnect.referencesHealth$Connect_Notes_CS", "Connect_Notes_CS.model$UI_Note_CardItemRec", "UBTConnect.model$UI_Note_CardItemList", "UBTConnectLibrary.model$SearchInputRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "Connect_Notes_CS.model$UI_Note_CardContentRec", "Connect_Notes_CS.model$UI_NoteCard_SourceHeaderRec", "UBTConnectLibrary.model$NotesRec", "UBTConnectLibrary.model$Note_ItemRec", "UBTConnect.model$Note_ItemList", "UBTConnect.controller$ScrollTop", "UBTConnect.controller$GetNotes_Pills", "UBTConnect.controller$GetNotes_FilterYear", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "NavigationHandler.controller$SetPreloadObject", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect.model$SwipeActionLongIntegerRecordList", "UBTConnect.model$CarouselPreloadedHouseholdsRec", "UBTConnect.model$PreloadedCarouselRec", "Connect_Notes_CS.model$UI_NotesRec"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, Connect_Notes_CSModel, UBTJavaScriptUtilsController, NavigationHandlerController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Notes_Notes_mvc_Debugger, _flow_UBTConnect_NotesController, UBTConnect_Notes_Notes_mvc_controller_ScreenEvent_OnInitialize_CheckRestoredJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
getNotes$DataActRefresh: -1
};
this.dataFetchDependentsGraph = {
getNotes$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions
Controller.prototype.getNotes$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:pSbHrxUcRkO5hH0g8kn4UA:/NRWebFlows.2DlYrQQBWkK7ftgdGmwqyg/NodesShownInESpaceTree.KuZaKSMlaEijTD5vqwT8EA/DataActions.pSbHrxUcRkO5hH0g8kn4UA:HFAi8MbyWrOtZxJMpPZFfw", "UBTConnect", "GetNotes", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Notes/Notes/GetNotes");
return controller.callDataAction("DataActionGetNotes", "screenservices/UBTConnect/Notes/Notes/DataActionGetNotes", "htrrRcJSvmk2dPJjI+YmQQ", function (b) {
model.variables.getNotesDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getNotesDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getNotesDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "Notes/Notes/GetNotes On After Fetch");
return controller._getNotesOnAfterFetch$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:pSbHrxUcRkO5hH0g8kn4UA", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getNotes$DataActRefresh"];
// Client Actions
Controller.prototype._handler_OnHeaderScrolled$Action = function (event_IsHeaderScrolledIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_OnHeaderScrolled");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Notes.Notes.Handler_OnHeaderScrolled$vars"))());
vars.value.event_IsHeaderScrolledInLocal = event_IsHeaderScrolledIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:JLZIBXQrMEmjPzEjgQV6+A:/NRWebFlows.2DlYrQQBWkK7ftgdGmwqyg/NodesShownInESpaceTree.KuZaKSMlaEijTD5vqwT8EA/ClientActions.JLZIBXQrMEmjPzEjgQV6+A:IdHMVMLrtMzDLq5DvmvDfA", "UBTConnect", "Handler_OnHeaderScrolled", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PAbHHj6lQUqDb85Z5bPFuQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Kcziqgi6qEuGfBK_+fM6NA", callContext.id);
// HeaderIsScrolled = Event_IsHeaderScrolled
model.variables.headerIsScrolledVar = vars.value.event_IsHeaderScrolledInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:D9wEqvz70k20WH9VqIfqUw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:JLZIBXQrMEmjPzEjgQV6+A", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Notes.Notes.Handler_OnHeaderScrolled$vars", [{
name: "Event_IsHeaderScrolled",
attrName: "event_IsHeaderScrolledInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._handler_SearchOnSubmit$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_SearchOnSubmit");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:gje9DFiQfEGWlP_5tgBK7w:/NRWebFlows.2DlYrQQBWkK7ftgdGmwqyg/NodesShownInESpaceTree.KuZaKSMlaEijTD5vqwT8EA/ClientActions.gje9DFiQfEGWlP_5tgBK7w:GqOtQ7aTHRHmlZgCeZQg1g", "UBTConnect", "Handler_SearchOnSubmit", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:z0ihAd4ZKU2cVScnn1dWDg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QCA8fzIGr0Kkhnt6E0FY1Q", callContext.id);
// Execute Action: Refresh_GetNotes
return controller._refresh_GetNotes$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:O8r_a98LaU6xDU7Mmdsxgw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:gje9DFiQfEGWlP_5tgBK7w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:gje9DFiQfEGWlP_5tgBK7w", callContext.id);
throw ex;

});
};
Controller.prototype._skeletonLoader_Pills$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("SkeletonLoader_Pills");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:dJP8EO11SkS3F8M0bWW9ug:/NRWebFlows.2DlYrQQBWkK7ftgdGmwqyg/NodesShownInESpaceTree.KuZaKSMlaEijTD5vqwT8EA/ClientActions.dJP8EO11SkS3F8M0bWW9ug:pTviOJHwgy2ftags_KvUbQ", "UBTConnect", "SkeletonLoader_Pills", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6qr+wky4vUC4R+4O26QTwA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WvysrH1CSkip4vqeG9hxkA", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(model.variables.note_PillsVar, function () {
var rec = new UBTConnectLibraryModel.TagRec();
rec.textAttr = "All";
rec.identifierAttr = "All";
rec.isSelectedAttr = false;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DzA0cknQjEChnQgc6m1g2Q", callContext.id);
// Execute Action: ListAppend2
OS.SystemActions.listAppend(model.variables.note_PillsVar, function () {
var rec = new UBTConnectLibraryModel.TagRec();
rec.textAttr = "Dumyy size";
rec.identifierAttr = "Dumyy size";
rec.isSelectedAttr = false;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MFteE5dXI0ewCeHjcK_wZw", callContext.id);
// Execute Action: ListAppend3
OS.SystemActions.listAppend(model.variables.note_PillsVar, function () {
var rec = new UBTConnectLibraryModel.TagRec();
rec.textAttr = "Dumyy size";
rec.identifierAttr = "Dumyy size";
rec.isSelectedAttr = false;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XBtUsLTldkm3zBT+u1CDOw", callContext.id);
// Execute Action: ListAppend4
OS.SystemActions.listAppend(model.variables.note_PillsVar, function () {
var rec = new UBTConnectLibraryModel.TagRec();
rec.textAttr = "Dumyy size";
rec.identifierAttr = "Dumyy size";
rec.isSelectedAttr = false;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:e6xkQDOpWk2g_DMw4Tsrvg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:dJP8EO11SkS3F8M0bWW9ug", callContext.id);
}

};
Controller.prototype._getNotesOnAfterFetch$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("GetNotesOnAfterFetch");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:zligUi53VEus5Cf2j8ookg:/NRWebFlows.2DlYrQQBWkK7ftgdGmwqyg/NodesShownInESpaceTree.KuZaKSMlaEijTD5vqwT8EA/ClientActions.zligUi53VEus5Cf2j8ookg:qo1y++JBvdDWwoyyFlCa9A", "UBTConnect", "GetNotesOnAfterFetch", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:V0c5X4az9UOZHPvfJmCAgA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8jG+qe5kukaCSTZBak22Sw", callContext.id) && (model.variables.pageNumberVar === 1))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2GTzMmKnIUOpM1BAfO8SPA", callContext.id);
// MaxRecords = GetNotes.Out_Notes.Total
model.variables.maxRecordsVar = model.variables.getNotesDataAct.out_NotesOut.totalAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Vzl6m0RVDUuyhKQ2Et9m3Q", callContext.id);
// Notes_List = GetNotes.Out_Notes.NoteCardItem_List
model.variables.notes_ListVar = model.variables.getNotesDataAct.out_NotesOut.noteCardItem_ListAttr;
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:e2B46_8U5kahH5xJ9zpTVw", callContext.id) && model.variables.resetPillsValueVar)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7hc2J6lFA0qeP+Ymr9OjHQ", callContext.id);
// Execute Action: ResetPillsVallues
return controller._resetPillsVallues$Action(callContext);
}

}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eJVju2dct0C33tWPP80tCA", callContext.id);
// PillsLoaded = True
model.variables.pillsLoadedVar = true;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eJVju2dct0C33tWPP80tCA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ResetPillsValue = False
model.variables.resetPillsValueVar = false;
});
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QIFzfKzv9UmhMkz7gzlamQ", callContext.id);
// Execute Action: ListAppendAll
OS.SystemActions.listAppendAll(model.variables.notes_ListVar, model.variables.getNotesDataAct.out_NotesOut.noteCardItem_ListAttr, callContext);
}

}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2himRKVZ_ku_daENwYdL3g", callContext.id);
// Notes_Loading = False
model.variables.notes_LoadingVar = false;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oqOSlBpvkEGfUGMu4hoCUQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:zligUi53VEus5Cf2j8ookg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:zligUi53VEus5Cf2j8ookg", callContext.id);
throw ex;

});
};
Controller.prototype._handler_OnClickPill$Action = function (updatedTagListIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_OnClickPill");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Notes.Notes.Handler_OnClickPill$vars"))());
vars.value.updatedTagListInLocal = updatedTagListIn.clone();
var listFilterPillsBySelectedVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.listFilterPillsBySelectedVar = listFilterPillsBySelectedVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:fhWeU9+940OMwUFM01uoWw:/NRWebFlows.2DlYrQQBWkK7ftgdGmwqyg/NodesShownInESpaceTree.KuZaKSMlaEijTD5vqwT8EA/ClientActions.fhWeU9+940OMwUFM01uoWw:9kO+zGSd1rn0ofXCkQ0G3w", "UBTConnect", "Handler_OnClickPill", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CgdfPeDW2Ua5EwMft0T56Q", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oWMQz_eZokWOtAxGaB8cyg", callContext.id);
// Execute Action: ListFilterPillsBySelected
listFilterPillsBySelectedVar.value = OS.SystemActions.listFilter(vars.value.updatedTagListInLocal, function (p) {
return p.isSelectedAttr;
}, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BbEdduAilUe8lunJ0sKhig", callContext.id);
// Notes_Filter.NoteCategoryId = TextToIdentifier
model.variables.notes_FilterVar.noteCategoryIdAttr = OS.BuiltinFunctions.textToIdentifier(listFilterPillsBySelectedVar.value.filteredListOut.getCurrent(callContext.iterationContext).identifierAttr);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HMalUrVnhkm1q_aHVbwH3w", callContext.id);
// PageNumber = 1
model.variables.pageNumberVar = 1;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZzOiJyar2kSSi2lxMt6GgA", callContext.id);
// ResetPillsValue = False
model.variables.resetPillsValueVar = false;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YFk3MmK1TkO3ThBfQvzTMQ", callContext.id);
// Execute Action: Refresh_GetNotes
return controller._refresh_GetNotes$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tSQOOlOEekuPRLhjkNfRxQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:fhWeU9+940OMwUFM01uoWw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:fhWeU9+940OMwUFM01uoWw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Notes.Notes.Handler_OnClickPill$vars", [{
name: "UpdatedTagList",
attrName: "updatedTagListInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnectModel.TagList();
},
complexType: UBTConnectModel.TagList
}]);
Controller.prototype._skeletonLoader_Notes$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("SkeletonLoader_Notes");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:uAnpWKYZyEugZ1Zp3F8bYg:/NRWebFlows.2DlYrQQBWkK7ftgdGmwqyg/NodesShownInESpaceTree.KuZaKSMlaEijTD5vqwT8EA/ClientActions.uAnpWKYZyEugZ1Zp3F8bYg:D4_YplCpZ6bWm4Sg+93fdQ", "UBTConnect", "SkeletonLoader_Notes", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Sb9hdjYpTUC7yT_I1IuIJQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bySBgHvbAkaIZ_TS19aXBA", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(model.variables.notes_ListVar, function () {
var rec = new Connect_Notes_CSModel.UI_Note_CardItemRec();
rec.noteCardContentAttr = function () {
var rec = new Connect_Notes_CSModel.UI_Note_CardContentRec();
rec.titleAttr = "Dumyy Dummy Dummy Dummy";
rec.subtitleAttr = "Dummy Dummy";
return rec;
}();
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:F2ymuDvT1E+SqScl+SdeeQ", callContext.id);
// Execute Action: ListAppend2
OS.SystemActions.listAppend(model.variables.notes_ListVar, function () {
var rec = new Connect_Notes_CSModel.UI_Note_CardItemRec();
rec.noteCardContentAttr = function () {
var rec = new Connect_Notes_CSModel.UI_Note_CardContentRec();
rec.titleAttr = "Dumyy size";
rec.subtitleAttr = "Dumyy size";
return rec;
}();
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fHSlKNWdkUecHrDuSKI+ng", callContext.id);
// Execute Action: ListAppend3
OS.SystemActions.listAppend(model.variables.notes_ListVar, function () {
var rec = new Connect_Notes_CSModel.UI_Note_CardItemRec();
rec.noteCardContentAttr = function () {
var rec = new Connect_Notes_CSModel.UI_Note_CardContentRec();
rec.titleAttr = "Dumyy size";
rec.subtitleAttr = "Dumyy size";
return rec;
}();
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tYdozyM7wUqOVUPgcIP_EA", callContext.id);
// Execute Action: ListAppend4
OS.SystemActions.listAppend(model.variables.notes_ListVar, function () {
var rec = new Connect_Notes_CSModel.UI_Note_CardItemRec();
rec.noteCardContentAttr = function () {
var rec = new Connect_Notes_CSModel.UI_Note_CardContentRec();
rec.titleAttr = "Dumyy size";
rec.subtitleAttr = "Dumyy size";
return rec;
}();
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3T5LdCnXgkya9jsn7UjmlQ", callContext.id);
// Execute Action: ListAppend5
OS.SystemActions.listAppend(model.variables.notes_ListVar, function () {
var rec = new Connect_Notes_CSModel.UI_Note_CardItemRec();
rec.noteCardContentAttr = function () {
var rec = new Connect_Notes_CSModel.UI_Note_CardContentRec();
rec.titleAttr = "Dumyy size";
rec.subtitleAttr = "Dumyy size";
return rec;
}();
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:W71lgstx_UC4m+MGkKwUsQ", callContext.id);
// Execute Action: ListAppend6
OS.SystemActions.listAppend(model.variables.notes_ListVar, function () {
var rec = new Connect_Notes_CSModel.UI_Note_CardItemRec();
rec.noteCardContentAttr = function () {
var rec = new Connect_Notes_CSModel.UI_Note_CardContentRec();
rec.titleAttr = "Dumyy size";
rec.subtitleAttr = "Dumyy size";
return rec;
}();
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uaZ3uCmjMkyEa8ZNkzDVeA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:uAnpWKYZyEugZ1Zp3F8bYg", callContext.id);
}

};
Controller.prototype._handler_FilterSheetLoaded$Action = function (showSubscriptionOnClickIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_FilterSheetLoaded");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Notes.Notes.Handler_FilterSheetLoaded$vars"))());
vars.value.showSubscriptionOnClickInLocal = showSubscriptionOnClickIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:xI06WU0UrUaEndtG0I56PQ:/NRWebFlows.2DlYrQQBWkK7ftgdGmwqyg/NodesShownInESpaceTree.KuZaKSMlaEijTD5vqwT8EA/ClientActions.xI06WU0UrUaEndtG0I56PQ:bPD2JOPqZ8tHFxl6kb6png", "UBTConnect", "Handler_FilterSheetLoaded", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vmuKmAw44UOwRIa8SoRalg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sXKXnzgm0Uu+cjcMWTldpw", callContext.id);
// BottomSheetId_Filter_IsLoaded = True
model.variables.bottomSheetId_Filter_IsLoadedVar = true;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PqmLlgOlNEqy7mpm2mJ0VQ", callContext.id);
// BottomSheetId_Filter_ShowSubscriptionOnClick = ShowSubscriptionOnClick
model.variables.bottomSheetId_Filter_ShowSubscriptionOnClickVar = vars.value.showSubscriptionOnClickInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:42QLEYkAnky2Bg6NPNzV6g", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:xI06WU0UrUaEndtG0I56PQ", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Notes.Notes.Handler_FilterSheetLoaded$vars", [{
name: "ShowSubscriptionOnClick",
attrName: "showSubscriptionOnClickInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._refresh_GetNotes$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Refresh_GetNotes");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:qVOsXJl+ek27L+hP9IH7Sw:/NRWebFlows.2DlYrQQBWkK7ftgdGmwqyg/NodesShownInESpaceTree.KuZaKSMlaEijTD5vqwT8EA/ClientActions.qVOsXJl+ek27L+hP9IH7Sw:5n8Is0qZvul1Z5kQat7SPw", "UBTConnect", "Refresh_GetNotes", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KG8BVXoBTEiuzk2FTK09MA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rojMrEHR5EKLWMmBfbJjNg", callContext.id);
// Notes_Loading = True
model.variables.notes_LoadingVar = true;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:azW8GBXogki71GUyRmGozA", callContext.id);
// Refresh Query: GetNotes
var result = controller.getNotes$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:k0rhQvZ_8kq8dmpNSZjL6g", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:qVOsXJl+ek27L+hP9IH7Sw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:qVOsXJl+ek27L+hP9IH7Sw", callContext.id);
throw ex;

});
};
Controller.prototype._notes_CardListOnLoadMore$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Notes_CardListOnLoadMore");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:RlBdgPTxw06xy3VVHsBreQ:/NRWebFlows.2DlYrQQBWkK7ftgdGmwqyg/NodesShownInESpaceTree.KuZaKSMlaEijTD5vqwT8EA/ClientActions.RlBdgPTxw06xy3VVHsBreQ:VLkaa4lA5ox7JnNh7HizvA", "UBTConnect", "Notes_CardListOnLoadMore", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VZCw8Eqk9ESUCbE0vaC8eA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MnlGExX5QEe9xx3+dPCwfw", callContext.id) && (!(model.variables.getNotesDataAct.out_NotesOut.noteCardItem_ListAttr.isEmpty) && OS.BuiltinFunctions.integerToLongInteger(model.variables.getNotesDataAct.out_NotesOut.noteCardItem_ListAttr.length).lt(model.variables.maxRecordsVar)))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xYdd3ZV7oUqt1YuyJ1nuqQ", callContext.id);
// PageNumber = PageNumber + 1
model.variables.pageNumberVar = (model.variables.pageNumberVar + 1);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QOse32CxSE+YdrowcFLbDw", callContext.id);
// Execute Action: Refresh_GetNotes
return controller._refresh_GetNotes$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:C763mutUf0G5FHj1xDLpaw", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:A13WjHWCHUKYheLr7IMwpg", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:RlBdgPTxw06xy3VVHsBreQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:RlBdgPTxw06xy3VVHsBreQ", callContext.id);
throw ex;

});
};
Controller.prototype._handler_FilterSheetSheetInilialized$Action = function (sheetIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_FilterSheetSheetInilialized");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Notes.Notes.Handler_FilterSheetSheetInilialized$vars"))());
vars.value.sheetIdInLocal = sheetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:In0hgi11+0q2b12sDcBeWg:/NRWebFlows.2DlYrQQBWkK7ftgdGmwqyg/NodesShownInESpaceTree.KuZaKSMlaEijTD5vqwT8EA/ClientActions.In0hgi11+0q2b12sDcBeWg:ykorultPBAJ6ybjXvTtkig", "UBTConnect", "Handler_FilterSheetSheetInilialized", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:34tKtbkzeUqfhv926kysUA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2iiieVniXUmjZ63G8CHv6Q", callContext.id);
// Filter_BottomSheetId = SheetId
model.variables.filter_BottomSheetIdVar = vars.value.sheetIdInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_33Fl7cwJ060WGlE_YefLg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:In0hgi11+0q2b12sDcBeWg", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Notes.Notes.Handler_FilterSheetSheetInilialized$vars", [{
name: "SheetId",
attrName: "sheetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._iconClick_SearchIcon$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("IconClick_SearchIcon");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:f_5hkMPQaEuWV1adbFKkgA:/NRWebFlows.2DlYrQQBWkK7ftgdGmwqyg/NodesShownInESpaceTree.KuZaKSMlaEijTD5vqwT8EA/ClientActions.f_5hkMPQaEuWV1adbFKkgA:s9utoz94coIluBfqU7V6JQ", "UBTConnect", "IconClick_SearchIcon", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:M6jciD1naUSm1sqCKpaAgg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tzleps0K0UWI9nCAc1fvhA", callContext.id);
// Execute Action: ScrollTop
UBTConnectController.default.scrollTop$Action(".active-screen", "instant", callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GZXXoS_lbEu6JCAQqaJO9w", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:f_5hkMPQaEuWV1adbFKkgA", callContext.id);
}

};
Controller.prototype._handler_SearchOnClear$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_SearchOnClear");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:85Sjkp2x_kGdiynC1H5W5A:/NRWebFlows.2DlYrQQBWkK7ftgdGmwqyg/NodesShownInESpaceTree.KuZaKSMlaEijTD5vqwT8EA/ClientActions.85Sjkp2x_kGdiynC1H5W5A:8TBrp0x7IrM_qWaoDqfssw", "UBTConnect", "Handler_SearchOnClear", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zhxRtWuVsE6Sv74yorU5fQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UyfGborvLk+ccflTKtwwHA", callContext.id);
// Notes_Filter.SearchTerm = ""
model.variables.notes_FilterVar.searchTermAttr = "";
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_swYk5l2rkG10KhbZ8n_og", callContext.id);
// Execute Action: Refresh_GetNotes
return controller._refresh_GetNotes$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:H5t6pYjwek2dTrVL51+BqQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:85Sjkp2x_kGdiynC1H5W5A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:85Sjkp2x_kGdiynC1H5W5A", callContext.id);
throw ex;

});
};
Controller.prototype._handler_SearchOnChange$Action = function (currentStringIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_SearchOnChange");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Notes.Notes.Handler_SearchOnChange$vars"))());
vars.value.currentStringInLocal = currentStringIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:DnD8ruK990qFgOzPxD5K0A:/NRWebFlows.2DlYrQQBWkK7ftgdGmwqyg/NodesShownInESpaceTree.KuZaKSMlaEijTD5vqwT8EA/ClientActions.DnD8ruK990qFgOzPxD5K0A:fQK_UxRxoOW9e3aZER1X5Q", "UBTConnect", "Handler_SearchOnChange", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NFHvXFtdcE6RFvwSavzaBw", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oyH+o5_7V0eyIq0KK7DBMg", callContext.id);
// Notes_Filter.SearchTerm = CurrentString
model.variables.notes_FilterVar.searchTermAttr = vars.value.currentStringInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wu8TtLws50+qE34Qgp6K4g", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:DnD8ruK990qFgOzPxD5K0A", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Notes.Notes.Handler_SearchOnChange$vars", [{
name: "CurrentString",
attrName: "currentStringInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._resetPillsVallues$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ResetPillsVallues");
callContext = controller.callContext(callContext);
var getNotes_PillsVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getNotes_PillsVar = getNotes_PillsVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:wUfXu_xYUUaXFBVWYog+GA:/NRWebFlows.2DlYrQQBWkK7ftgdGmwqyg/NodesShownInESpaceTree.KuZaKSMlaEijTD5vqwT8EA/ClientActions.wUfXu_xYUUaXFBVWYog+GA:HIE8BVYeoXeOipslTMNH8Q", "UBTConnect", "ResetPillsVallues", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:X4CSk5UVxEOJUOst39jV5w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:yCkuTp6OUkWwsG574d7Phw", callContext.id);
// Execute Action: GetNotes_Pills
model.flush();
return UBTConnectController.default.getNotes_Pills$Action(model.variables.notes_FilterVar.noteCategoryIdAttr, callContext).then(function (value) {
getNotes_PillsVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5kr9IBnx9UWOqE3qD80wMA", callContext.id);
// Execute Action: ListClear
OS.SystemActions.listClear(model.variables.note_PillsVar, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Rmeq8Fso00aFM9lwXWAzeg", callContext.id);
// Execute Action: ListAppendAll
OS.SystemActions.listAppendAll(model.variables.note_PillsVar, getNotes_PillsVar.value.out_PillsOut, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TVVSLCZYPkafTLC0nPEufw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:wUfXu_xYUUaXFBVWYog+GA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:wUfXu_xYUUaXFBVWYog+GA", callContext.id);
throw ex;

});
};
Controller.prototype._screenEvent_OnInitialize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ScreenEvent_OnInitialize");
callContext = controller.callContext(callContext);
var getNotes_FilterYearVar = new OS.DataTypes.VariableHolder();
var checkRestoredJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getNotes_FilterYearVar = getNotes_FilterYearVar;
varBag.checkRestoredJSResult = checkRestoredJSResult;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:tODmwVF78EyfJ_nQvnY_6Q:/NRWebFlows.2DlYrQQBWkK7ftgdGmwqyg/NodesShownInESpaceTree.KuZaKSMlaEijTD5vqwT8EA/ClientActions.tODmwVF78EyfJ_nQvnY_6Q:TTl4kykhtToeSZqJzz9gWQ", "UBTConnect", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+oVLQLO7H0mdTV4n5x4bSQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wMKEJiGcYEaJWG3dtlj3Jg", callContext.id);
checkRestoredJSResult.value = controller.safeExecuteJSNode(UBTConnect_Notes_Notes_mvc_controller_ScreenEvent_OnInitialize_CheckRestoredJS, "CheckRestored", "ScreenEvent_OnInitialize", {
FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
FromHistory: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnect.Notes.Notes.ScreenEvent_OnInitialize$checkRestoredJSResult"))();
jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.fromHistoryOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromHistory, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:aqqS10AukEeB9cX2tCbDHA", callContext.id) && (checkRestoredJSResult.value.fromCacheOut || checkRestoredJSResult.value.fromHistoryOut))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ParKgTtqI0y5q60ejINNtw", callContext.id);
// PageNumber = 1
model.variables.pageNumberVar = 1;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zvohNiPCZkK8euTAFqu_Iw", callContext.id);
} else {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8kCzO8GGQECNKO7WVsUDww", callContext.id) && model.variables.note_PillsVar.isEmpty)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:z80ukRibQEyLJ4Y2xDOr_Q", callContext.id);
// Execute Action: SkeletonLoader_Pills
controller._skeletonLoader_Pills$Action(callContext);
}

if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Lx0Gmh9bIkG6hPmMTeXXeg", callContext.id) && model.variables.notes_ListVar.isEmpty)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QessX3r4dkSNhfgt5ljJ3Q", callContext.id);
// Execute Action: SkeletonLoader_Notes
controller._skeletonLoader_Notes$Action(callContext);
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6sNaCc_gyUCI+eMYMQicfA", callContext.id);
// Execute Action: GetNotes_FilterYear
getNotes_FilterYearVar.value = UBTConnectController.default.getNotes_FilterYear$Action(callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:g6y4In9ZB0WFCMej5GqxwQ", callContext.id);
// Execute Action: ListClearYears
OS.SystemActions.listClear(model.variables.yearsVar, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hi2Vtqrdv0unbnrwbUzyvg", callContext.id);
// Years = GetNotes_FilterYear.Years
model.variables.yearsVar = getNotes_FilterYearVar.value.yearsOut;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1sJzMiEVxkGNEM7ANCi9ZQ", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:tODmwVF78EyfJ_nQvnY_6Q", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Notes.Notes.ScreenEvent_OnInitialize$checkRestoredJSResult", [{
name: "FromCache",
attrName: "fromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "FromHistory",
attrName: "fromHistoryOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._screenEvent_Ready$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ScreenEvent_Ready");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:69q0yNTWIUOxEf9tTjPCkQ:/NRWebFlows.2DlYrQQBWkK7ftgdGmwqyg/NodesShownInESpaceTree.KuZaKSMlaEijTD5vqwT8EA/ClientActions.69q0yNTWIUOxEf9tTjPCkQ:kr6EkQtmiJI2nBHh2uXm4Q", "UBTConnect", "ScreenEvent_Ready", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1YPV0xqin0audJviGkXppg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:R4KkxKg1kUCy4r59wbRzNw", callContext.id);
// Execute Action: ResetPillsVallues
return controller._resetPillsVallues$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LNUZ_owMukWAHQ_dV68QKg", callContext.id);
// Execute Action: Refresh_GetNotes
return controller._refresh_GetNotes$Action(callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_Wid1l2QokabyMfvWYpTWQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:69q0yNTWIUOxEf9tTjPCkQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:69q0yNTWIUOxEf9tTjPCkQ", callContext.id);
throw ex;

});
};
Controller.prototype._handler_ApplyFilters$Action = function (event_Notes_FilterIn, event_HasFiltersAppliedIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_ApplyFilters");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Notes.Notes.Handler_ApplyFilters$vars"))());
vars.value.event_Notes_FilterInLocal = event_Notes_FilterIn.clone();
vars.value.event_HasFiltersAppliedInLocal = event_HasFiltersAppliedIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:ARpuykQBGES6g_aQs3tLew:/NRWebFlows.2DlYrQQBWkK7ftgdGmwqyg/NodesShownInESpaceTree.KuZaKSMlaEijTD5vqwT8EA/ClientActions.ARpuykQBGES6g_aQs3tLew:AUxNdK1SDFjFgrH17Ym5Eg", "UBTConnect", "Handler_ApplyFilters", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:G13eAW7Ksk239UCAN2Dv4Q", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Nazs+ghbsEOZhvGcQGzARA", callContext.id);
// Notes_Filter.SortByNewest = Event_Notes_Filter.SortByNewest
model.variables.notes_FilterVar.sortByNewestAttr = vars.value.event_Notes_FilterInLocal.sortByNewestAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Nazs+ghbsEOZhvGcQGzARA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Notes_Filter.Years = Event_Notes_Filter.Years
model.variables.notes_FilterVar.yearsAttr = vars.value.event_Notes_FilterInLocal.yearsAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ArteawxPVkGFsa8w7toI8Q", callContext.id);
// HasFiltersApplied = Event_HasFiltersApplied
model.variables.hasFiltersAppliedVar = vars.value.event_HasFiltersAppliedInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3CR0XIekdEq_Y+AvYF_j6Q", callContext.id);
// Execute Action: Refresh_GetNotes
return controller._refresh_GetNotes$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mGEYl33ko0aZjbSPGcJycA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:ARpuykQBGES6g_aQs3tLew", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:ARpuykQBGES6g_aQs3tLew", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Notes.Notes.Handler_ApplyFilters$vars", [{
name: "Event_Notes_Filter",
attrName: "event_Notes_FilterInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect_Notes_CSModel.Notes_FilterRec();
},
complexType: Connect_Notes_CSModel.Notes_FilterRec
}, {
name: "Event_HasFiltersApplied",
attrName: "event_HasFiltersAppliedInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._handler_OnClickNoteCardItem$Action = function (objectIdIn, objectId2In, objectTypeIn, hasDetailAccessIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_OnClickNoteCardItem");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Notes.Notes.Handler_OnClickNoteCardItem$vars"))());
vars.value.objectIdInLocal = objectIdIn;
vars.value.objectId2InLocal = objectId2In;
vars.value.objectTypeInLocal = objectTypeIn;
vars.value.hasDetailAccessInLocal = hasDetailAccessIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:tFLE85YP8UaLEofBaV5tvg:/NRWebFlows.2DlYrQQBWkK7ftgdGmwqyg/NodesShownInESpaceTree.KuZaKSMlaEijTD5vqwT8EA/ClientActions.tFLE85YP8UaLEofBaV5tvg:x61edqB7G7cCAl4dQO9i7g", "UBTConnect", "Handler_OnClickNoteCardItem", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VvaH7AfMl0CgbNency_QRw", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:S0D48dIhvEqjL+v0vPqu8g", callContext.id) && (vars.value.objectTypeInLocal === UBTConnectModel.staticEntities.noteCategory2.household))) {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1OMWa6JYc0uRFQDkjeRAew", callContext.id) && (model.variables.notes_FilterVar.noteCategoryIdAttr === UBTConnectModel.staticEntities.noteCategory2.household))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cPu4W75NbkCo416h5TUItQ", callContext.id);
// HouseholdIdList.CarouselHouseholdItem = Notes_List
vars.value.householdIdListVar.carouselHouseholdItemAttr = OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.notes_ListVar, new UBTConnectModel.SwipeActionLongIntegerRecordList(), function (source, target) {
target.householdAttr = OS.BuiltinFunctions.textToLongInteger(source.itemIdAttr);
return target;
});
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hMsk2hIxN0qFPfFT9kl2fQ", callContext.id);
// Execute Action: SetPreloadObject
NavigationHandlerController.default.setPreloadObject$Action(OS.BuiltinFunctions.toObject(vars.value.householdIdListVar), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:knjsM2JJtU+BDXpzym2JZA", callContext.id);
// Destination: /UBTConnect/HouseholdCarousel
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HouseholdCarousel", {
In_StartingHouseholdId: OS.DataConversion.ServerDataConverter.asString(OS.BuiltinFunctions.textToLongInteger(vars.value.objectIdInLocal), OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gkui7XXRO0ubUO4Bn2ytZg", callContext.id);
// Destination: /UBTConnect/HouseholdDetails
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HouseholdDetails", {
HouseholdId: OS.DataConversion.ServerDataConverter.asString(OS.BuiltinFunctions.textToLongInteger(vars.value.objectIdInLocal), OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
}

} else {
if((vars.value.objectTypeInLocal === UBTConnectModel.staticEntities.noteCategory2.feedItem)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:w21u7Lbc80uWpVn2_XYbPA", callContext.id);
// Destination: /UBTConnect/FeedItemDetail
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/FeedItemDetail", {
FeedItemId: OS.DataConversion.ServerDataConverter.asString(vars.value.objectIdInLocal, OS.DataTypes.DataTypes.Text)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} else {
if((vars.value.objectTypeInLocal === UBTConnectModel.staticEntities.noteCategory2.assembleEvent)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gBp0hk1IekOXo5Hn53_08A", callContext.id);
} else {
if((vars.value.objectTypeInLocal === UBTConnectModel.staticEntities.noteCategory2.interchange)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3ObVSL0wcUawC9V3rBL2BA", callContext.id);
} else {
if((vars.value.objectTypeInLocal === UBTConnectModel.staticEntities.noteCategory2.lDMEvent)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LCRSJDSzJ0qdtK9dPxi+jw", callContext.id);
} else {
if((vars.value.objectTypeInLocal === UBTConnectModel.staticEntities.noteCategory2.locality)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4qFbQxpBlUalZLGpgAhMlw", callContext.id);
} else {
if((vars.value.objectTypeInLocal === UBTConnectModel.staticEntities.noteCategory2.localityContact)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fcK7uTQV1EOZKzRRJr7yVA", callContext.id);
} else {
if((vars.value.objectTypeInLocal === UBTConnectModel.staticEntities.noteCategory2.member)) {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FaF8RniVJUOZRBIm2V14XA", callContext.id) && vars.value.hasDetailAccessInLocal)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FQWWT3CDzUmA_iA+1w3EtQ", callContext.id);
// Destination: /UBTConnect/Household_Relations
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/Household_Relations", {
MemberId: OS.DataConversion.ServerDataConverter.asString(OS.BuiltinFunctions.textToLongInteger(vars.value.objectIdInLocal), OS.DataTypes.DataTypes.LongInteger),
HouseholdId: OS.DataConversion.ServerDataConverter.asString(OS.BuiltinFunctions.textToLongInteger(vars.value.objectId2InLocal), OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:c611Ba1l00ymf2qLtly3BQ", callContext.id);
// Execute Action: FeedbackMessage_AutoClose
UBTJavaScriptUtilsController.default.feedbackMessage_AutoClose$Action("", "This member is no longer available", UBTConnectModel.staticEntities.uBT_MessageType.info, true, "", 0, false, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UuC4CfjJlUqZdVBmptwK6g", callContext.id);
}

} else {
if((vars.value.objectTypeInLocal === UBTConnectModel.staticEntities.noteCategory2.oneSchoolGlobal)) {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:A5l6DQewlkmyBuZh2hJCDg", callContext.id) && (model.variables.notes_FilterVar.noteCategoryIdAttr === UBTConnectModel.staticEntities.noteCategory2.oneSchoolGlobal))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Z26tB_U1t0qph_HG558xPw", callContext.id);
// PreloadedCarousel.CarouselItemIds = Notes_List
vars.value.preloadedCarouselVar.carouselItemIdsAttr = OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.notes_ListVar, new OS.DataTypes.LongIntegerList(), function (source, target) {
target = OS.BuiltinFunctions.textToLongInteger(source.itemIdAttr);
return target;
});
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:f5aae8Yo30mogGJwaMbXrQ", callContext.id);
// Execute Action: SetPreloadObject3
NavigationHandlerController.default.setPreloadObject$Action(OS.BuiltinFunctions.toObject(vars.value.preloadedCarouselVar), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:n9c1xaRRs0WadpcHvnEmcA", callContext.id);
// Destination: /UBTConnect/OneSchoolGlobalCarousel
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/OneSchoolGlobalCarousel", {
In_StartingObjectId: OS.DataConversion.ServerDataConverter.asString(OS.BuiltinFunctions.textToLongInteger(vars.value.objectIdInLocal), OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3UBSopexyEG6hR4GHCPlsg", callContext.id);
// Destination: /UBTConnect/OneSchoolGlobalDetails
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/OneSchoolGlobalDetails", {
In_OneSchoolGlobalId: OS.DataConversion.ServerDataConverter.asString(OS.BuiltinFunctions.textToLongInteger(vars.value.objectIdInLocal), OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
}

} else {
if((vars.value.objectTypeInLocal === UBTConnectModel.staticEntities.noteCategory2.orbitEvent)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JPKMMvUWzUuYBQXmtXGYzw", callContext.id);
} else {
if((vars.value.objectTypeInLocal === UBTConnectModel.staticEntities.noteCategory2.personalEvent)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KlIqWwtNi0a2nF+jPrY3Dg", callContext.id);
} else {
if((vars.value.objectTypeInLocal === UBTConnectModel.staticEntities.noteCategory2.supperMeeting)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1y4wcqRlXUKgzV6wT8NdjQ", callContext.id);
// Destination: /UBTConnect/SupperMeeting_Details
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/SupperMeeting_Details", {
In_SubdivsionId: OS.DataConversion.ServerDataConverter.asString(OS.BuiltinFunctions.textToLongInteger(vars.value.objectIdInLocal), OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} else {
if((vars.value.objectTypeInLocal === UBTConnectModel.staticEntities.noteCategory2.update)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:EQdPUjoZik2lE7atLU9qeA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zv+5zPkkpUyRBHGZeCyfcw", callContext.id);
}

}

}

}

}

}

}

}

}

}

}

}

}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:tFLE85YP8UaLEofBaV5tvg", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Notes.Notes.Handler_OnClickNoteCardItem$vars", [{
name: "ObjectId",
attrName: "objectIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ObjectId2",
attrName: "objectId2InLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ObjectType",
attrName: "objectTypeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "HasDetailAccess",
attrName: "hasDetailAccessInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "HouseholdIdList",
attrName: "householdIdListVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectModel.CarouselPreloadedHouseholdsRec();
},
complexType: UBTConnectModel.CarouselPreloadedHouseholdsRec
}, {
name: "PreloadedCarousel",
attrName: "preloadedCarouselVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectModel.PreloadedCarouselRec();
},
complexType: UBTConnectModel.PreloadedCarouselRec
}]);

Controller.prototype.handler_OnHeaderScrolled$Action = function (event_IsHeaderScrolledIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_OnHeaderScrolled$Action, callContext, event_IsHeaderScrolledIn);

};
Controller.prototype.handler_SearchOnSubmit$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_SearchOnSubmit$Action, callContext);

};
Controller.prototype.skeletonLoader_Pills$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._skeletonLoader_Pills$Action, callContext);

};
Controller.prototype.getNotesOnAfterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._getNotesOnAfterFetch$Action, callContext);

};
Controller.prototype.handler_OnClickPill$Action = function (updatedTagListIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_OnClickPill$Action, callContext, updatedTagListIn);

};
Controller.prototype.skeletonLoader_Notes$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._skeletonLoader_Notes$Action, callContext);

};
Controller.prototype.handler_FilterSheetLoaded$Action = function (showSubscriptionOnClickIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_FilterSheetLoaded$Action, callContext, showSubscriptionOnClickIn);

};
Controller.prototype.refresh_GetNotes$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._refresh_GetNotes$Action, callContext);

};
Controller.prototype.notes_CardListOnLoadMore$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._notes_CardListOnLoadMore$Action, callContext);

};
Controller.prototype.handler_FilterSheetSheetInilialized$Action = function (sheetIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_FilterSheetSheetInilialized$Action, callContext, sheetIdIn);

};
Controller.prototype.iconClick_SearchIcon$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._iconClick_SearchIcon$Action, callContext);

};
Controller.prototype.handler_SearchOnClear$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_SearchOnClear$Action, callContext);

};
Controller.prototype.handler_SearchOnChange$Action = function (currentStringIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_SearchOnChange$Action, callContext, currentStringIn);

};
Controller.prototype.resetPillsVallues$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._resetPillsVallues$Action, callContext);

};
Controller.prototype.screenEvent_OnInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._screenEvent_OnInitialize$Action, callContext);

};
Controller.prototype.screenEvent_Ready$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._screenEvent_Ready$Action, callContext);

};
Controller.prototype.handler_ApplyFilters$Action = function (event_Notes_FilterIn, event_HasFiltersAppliedIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_ApplyFilters$Action, callContext, event_Notes_FilterIn, event_HasFiltersAppliedIn);

};
Controller.prototype.handler_OnClickNoteCardItem$Action = function (objectIdIn, objectId2In, objectTypeIn, hasDetailAccessIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_OnClickNoteCardItem$Action, callContext, objectIdIn, objectId2In, objectTypeIn, hasDetailAccessIn);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:2DlYrQQBWkK7ftgdGmwqyg:/NRWebFlows.2DlYrQQBWkK7ftgdGmwqyg:H6BPPYIIY_GDy0FJgaUDiA", "UBTConnect", "Notes", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:KuZaKSMlaEijTD5vqwT8EA:/NRWebFlows.2DlYrQQBWkK7ftgdGmwqyg/NodesShownInESpaceTree.KuZaKSMlaEijTD5vqwT8EA:oL3MHd_k7cw0_i_HXHlWmg", "UBTConnect", "Notes", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:KuZaKSMlaEijTD5vqwT8EA", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:2DlYrQQBWkK7ftgdGmwqyg", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Notes/Notes On Initialize");
return controller.screenEvent_OnInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Notes/Notes On Ready");
return controller.screenEvent_Ready$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return _flow_UBTConnect_NotesController.default.handleError(ex, this.callContext());
};
Controller.checkPermissions = function () {
OS.RolesInfo.checkRegistered();
};
Controller.prototype.getDefaultTimeout = function () {
return UBTConnectController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});
define("UBTConnect.Notes.Notes.mvc$controller.ScreenEvent_OnInitialize.CheckRestoredJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
//$parameters.FromHistory = $public.Navigation.navigatedFromHistory();
};
});

define("UBTConnect.Notes.Notes.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"_S9DVJJ98UqANSf3md3bTA": {
getter: function (varBag, idService) {
return varBag.vars.value.event_IsHeaderScrolledInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"2cfUSngfykCXzDlY30fZSw": {
getter: function (varBag, idService) {
return varBag.vars.value.updatedTagListInLocal;
}
},
"oWMQz_eZokWOtAxGaB8cyg": {
getter: function (varBag, idService) {
return varBag.listFilterPillsBySelectedVar.value;
}
},
"XuQq+_Q2S0equYT8fHQimw": {
getter: function (varBag, idService) {
return varBag.vars.value.showSubscriptionOnClickInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"bbkNjlcoZUSHpIf_m6AhWA": {
getter: function (varBag, idService) {
return varBag.vars.value.sheetIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"OmFla+JaPEa461nHRGk9OA": {
getter: function (varBag, idService) {
return varBag.vars.value.currentStringInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"yCkuTp6OUkWwsG574d7Phw": {
getter: function (varBag, idService) {
return varBag.getNotes_PillsVar.value;
}
},
"6sNaCc_gyUCI+eMYMQicfA": {
getter: function (varBag, idService) {
return varBag.getNotes_FilterYearVar.value;
}
},
"wMKEJiGcYEaJWG3dtlj3Jg": {
getter: function (varBag, idService) {
return varBag.checkRestoredJSResult.value;
}
},
"GW51y6I7jkms71ToAP8H1Q": {
getter: function (varBag, idService) {
return varBag.vars.value.event_Notes_FilterInLocal;
}
},
"6JvwG0mVWkeCmU+QdJhXqw": {
getter: function (varBag, idService) {
return varBag.vars.value.event_HasFiltersAppliedInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"OySTXt_vF0aAOl8BbFDUjw": {
getter: function (varBag, idService) {
return varBag.vars.value.householdIdListVar;
}
},
"bpzgR6mBV0mL3jmjzXhyxw": {
getter: function (varBag, idService) {
return varBag.vars.value.preloadedCarouselVar;
}
},
"5P11BRAc+Eyp_pbzf0KVZg": {
getter: function (varBag, idService) {
return varBag.vars.value.objectIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"_klduu98eUS04TaUvuBN5g": {
getter: function (varBag, idService) {
return varBag.vars.value.objectId2InLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ApliJ8kuGEiXIeKredqYkQ": {
getter: function (varBag, idService) {
return varBag.vars.value.objectTypeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"FNCM4pq7a0uLOwADtKFtew": {
getter: function (varBag, idService) {
return varBag.vars.value.hasDetailAccessInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"KmMx8oEOokirysbGvNnd3Q": {
getter: function (varBag, idService) {
return varBag.model.variables.headerIsScrolledVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"klotysib80urg+ZnkhZ3gw": {
getter: function (varBag, idService) {
return varBag.model.variables.note_PillsVar;
}
},
"gtFAHgOFcEaz+jr6qtbc0A": {
getter: function (varBag, idService) {
return varBag.model.variables.notes_FilterVar;
}
},
"Hraq6ai1b027p_mTQKPFmw": {
getter: function (varBag, idService) {
return varBag.model.variables.hasFiltersAppliedVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"fCaVeZaNMkKyVwNWYygFFA": {
getter: function (varBag, idService) {
return varBag.model.variables.filter_BottomSheetIdVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"vWdjZcqS5UqKkYBQXac3Gg": {
getter: function (varBag, idService) {
return varBag.model.variables.bottomSheetId_Filter_IsLoadedVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"gIWQTpaWmUy2xcW9q8+mGg": {
getter: function (varBag, idService) {
return varBag.model.variables.bottomSheetId_Filter_ShowSubscriptionOnClickVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"mmZxfAaDaEqLpTEZAFy+TQ": {
getter: function (varBag, idService) {
return varBag.model.variables.yearsVar;
}
},
"m1ihlMbTGkCJgJgNH9IWPw": {
getter: function (varBag, idService) {
return varBag.model.variables.pageSizeVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"JSuWOGkzP0C7T_qzfU6N_w": {
getter: function (varBag, idService) {
return varBag.model.variables.pageNumberVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"1MUYAdT_B0y4VD6cxw+W0Q": {
getter: function (varBag, idService) {
return varBag.model.variables.maxRecordsVar;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"PC+yChGaOU+ahCVtFSYypw": {
getter: function (varBag, idService) {
return varBag.model.variables.notes_ListVar;
}
},
"AtU74mXfm0WlLx6p8uMc9g": {
getter: function (varBag, idService) {
return varBag.model.variables.resetPillsValueVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"2IeG3jH3e0q0OBl009o7tA": {
getter: function (varBag, idService) {
return varBag.model.variables.pillsLoadedVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Hw1IgAvWukyajh1_3DZRKg": {
getter: function (varBag, idService) {
return varBag.model.variables.notes_LoadingVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"pSbHrxUcRkO5hH0g8kn4UA": {
getter: function (varBag, idService) {
return varBag.model.variables.getNotesDataAct;
}
},
"i9HJ16MsL0iGjoA9FwEN8w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Title"));
})(varBag.model, idService);
}
},
"kTwmft9h70qaRc2FCoytHA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Right"));
})(varBag.model, idService);
}
},
"bfKnSdNucUqeqqYEZiXU9Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Input"));
})(varBag.model, idService);
}
},
"SjckLI6zRkKUOykRdwg2jw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Input_Icon"));
})(varBag.model, idService);
}
},
"ao3YIH4wGUGohyS8sJN_Tg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"_T02d3+eREqoF2ii8t7Onw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Filter_Pills"));
})(varBag.model, idService);
}
},
"uw5yti4W9USbNSFT98xcVQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"tDdsOPMnYEuzVojqqOAPsQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Filter"));
})(varBag.model, idService);
}
},
"XISBd4yCZkqZsqPGXXQ13A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"ZI3cOcVld0WgFlQeytdwpA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
},
"QgUWJ60TMkuzrcVIMJx4JQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
})(varBag.model, idService);
}
},
"GzQd7KiF6UimimMp1G+ITA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HideInServiceStudio_BottomSheet"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
