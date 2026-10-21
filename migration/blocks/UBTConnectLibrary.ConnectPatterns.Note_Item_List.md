# UBTConnectLibrary.ConnectPatterns.Note_Item_List

- Kind: shared; build screens using it: HouseholdCarousel, HouseholdDetails, Household_Relations, Locality_Details, Notes, OneSchoolGlobalDetails, Profile, SupperMeeting_Carousel, SupperMeeting_Details
- Compiled source: `migration/blocks/sources/UBTConnectLibrary.ConnectPatterns.Note_Item_List.mvc.js`
- Child blocks: UBTConnectLibrary.BasePatterns.Columns_Two, UBTConnectLibrary.BasePatterns.CustomContainer, UBTConnectLibrary.BasePatterns.CustomText, UBTConnectLibrary.ConnectPatterns.Button, UBTConnectLibrary.ConnectPatterns.CircleButton, UBTConnectLibrary.ConnectPatterns.Icon, UBTConnectLibrary.ConnectPatterns.Note_Item, UBTConnectLibrary.ConnectPatterns.Popup (queue: UBTConnectLibrary.ConnectPatterns.Note_Item, UBTConnectLibrary.ConnectPatterns.Popup)

## Inputs

(none found)

## Captured DOM variants (0 distinct, 0 instances)


## Compiled view (debugger lines removed)

```js
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
controller.onShowAllNotes$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
```
(… 427 more lines in `migration/blocks/sources/UBTConnectLibrary.ConnectPatterns.Note_Item_List.mvc.js`)
