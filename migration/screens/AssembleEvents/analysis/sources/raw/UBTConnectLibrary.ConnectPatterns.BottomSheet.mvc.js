define("UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTJavaScriptUtils.controller", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "OutSystemsUI_2_23.Interaction.BottomSheet.mvc$model", "UBTConnectLibrary.BasePatterns.Columns_Three.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.controller$GetClass_BackgroundColor", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.controller$GetSpacingOptions", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTJavaScriptUtils.controller$JSUtils_SetStyleProperty", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$UBTJavaScriptUtils", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnectLibrary.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetClose", "OutSystemsUI_2_23.controller$BottomSheetOpen"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTJavaScriptUtilsController, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, OutSystemsUI_2_23_Interaction_BottomSheet_mvcModel, UBTConnectLibrary_BasePatterns_Columns_Three_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("MainContainerClass", "mainContainerClassVar", "MainContainerClass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "ubt-bottom-sheet";
}, false), 
this.attr("Local_isOpen", "local_isOpenVar", "Local_isOpen", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("HideContentWhenClosed", "hideContentWhenClosedVar", "HideContentWhenClosed", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("Title", "titleIn", "Title", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ShowHandlerPreview", "showHandlerPreviewIn", "ShowHandlerPreview", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_showHandlerPreviewInDataFetchStatus", "_showHandlerPreviewInDataFetchStatus", "_showHandlerPreviewInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("HandlerPreviewOffset", "handlerPreviewOffsetIn", "HandlerPreviewOffset", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_handlerPreviewOffsetInDataFetchStatus", "_handlerPreviewOffsetInDataFetchStatus", "_handlerPreviewOffsetInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ShowHeader", "showHeaderIn", "ShowHeader", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("_showHeaderInDataFetchStatus", "_showHeaderInDataFetchStatus", "_showHeaderInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Content_BackgroundColorId", "content_BackgroundColorIdIn", "Content_BackgroundColorId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_content_BackgroundColorIdInDataFetchStatus", "_content_BackgroundColorIdInDataFetchStatus", "_content_BackgroundColorIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Content_Padding", "content_PaddingIn", "Content_Padding", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.SpacingOptionsRec());
}, false, UBTConnectLibraryModel.SpacingOptionsRec), 
this.attr("_content_PaddingInDataFetchStatus", "_content_PaddingInDataFetchStatus", "_content_PaddingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("FooterHeight", "footerHeightIn", "FooterHeight", true, false, OS.DataTypes.DataTypes.Text, function () {
return "0px";
}, false), 
this.attr("_footerHeightInDataFetchStatus", "_footerHeightInDataFetchStatus", "_footerHeightInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ExtendedClasses", "extendedClassesIn", "ExtendedClasses", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_extendedClassesInDataFetchStatus", "_extendedClassesInDataFetchStatus", "_extendedClassesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("isTransparentOverlay", "isTransparentOverlayIn", "isTransparentOverlay", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isTransparentOverlayInDataFetchStatus", "_isTransparentOverlayInDataFetchStatus", "_isTransparentOverlayInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("CloseOnClickOutsite", "closeOnClickOutsiteIn", "CloseOnClickOutsite", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_closeOnClickOutsiteInDataFetchStatus", "_closeOnClickOutsiteInDataFetchStatus", "_closeOnClickOutsiteInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ShowBackButton", "showBackButtonIn", "ShowBackButton", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_showBackButtonInDataFetchStatus", "_showBackButtonInDataFetchStatus", "_showBackButtonInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("IsNotInertWhenClosed", "isNotInertWhenClosedIn", "IsNotInertWhenClosed", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isNotInertWhenClosedInDataFetchStatus", "_isNotInertWhenClosedInDataFetchStatus", "_isNotInertWhenClosedInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("IsHideContentWhenClosed", "isHideContentWhenClosedIn", "IsHideContentWhenClosed", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isHideContentWhenClosedInDataFetchStatus", "_isHideContentWhenClosedInDataFetchStatus", "_isHideContentWhenClosedInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_TouchActionNoneFix", "in_TouchActionNoneFixIn", "In_TouchActionNoneFix", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_TouchActionNoneFixInDataFetchStatus", "_in_TouchActionNoneFixInDataFetchStatus", "_in_TouchActionNoneFixInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (((OutSystemsUI_2_23_Interaction_BottomSheet_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_Columns_Three_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("Title" in inputs) {
this.variables.titleIn = inputs.Title;
if("_titleInDataFetchStatus" in inputs) {
this.variables._titleInDataFetchStatus = inputs._titleInDataFetchStatus;
}

}

if("ShowHandlerPreview" in inputs) {
this.variables.showHandlerPreviewIn = inputs.ShowHandlerPreview;
if("_showHandlerPreviewInDataFetchStatus" in inputs) {
this.variables._showHandlerPreviewInDataFetchStatus = inputs._showHandlerPreviewInDataFetchStatus;
}

}

if("HandlerPreviewOffset" in inputs) {
this.variables.handlerPreviewOffsetIn = inputs.HandlerPreviewOffset;
if("_handlerPreviewOffsetInDataFetchStatus" in inputs) {
this.variables._handlerPreviewOffsetInDataFetchStatus = inputs._handlerPreviewOffsetInDataFetchStatus;
}

}

if("ShowHeader" in inputs) {
this.variables.showHeaderIn = inputs.ShowHeader;
if("_showHeaderInDataFetchStatus" in inputs) {
this.variables._showHeaderInDataFetchStatus = inputs._showHeaderInDataFetchStatus;
}

}

if("Content_BackgroundColorId" in inputs) {
this.variables.content_BackgroundColorIdIn = inputs.Content_BackgroundColorId;
if("_content_BackgroundColorIdInDataFetchStatus" in inputs) {
this.variables._content_BackgroundColorIdInDataFetchStatus = inputs._content_BackgroundColorIdInDataFetchStatus;
}

}

if("Content_Padding" in inputs) {
this.variables.content_PaddingIn = inputs.Content_Padding;
if("_content_PaddingInDataFetchStatus" in inputs) {
this.variables._content_PaddingInDataFetchStatus = inputs._content_PaddingInDataFetchStatus;
}

}

if("FooterHeight" in inputs) {
this.variables.footerHeightIn = inputs.FooterHeight;
if("_footerHeightInDataFetchStatus" in inputs) {
this.variables._footerHeightInDataFetchStatus = inputs._footerHeightInDataFetchStatus;
}

}

if("ExtendedClasses" in inputs) {
this.variables.extendedClassesIn = inputs.ExtendedClasses;
if("_extendedClassesInDataFetchStatus" in inputs) {
this.variables._extendedClassesInDataFetchStatus = inputs._extendedClassesInDataFetchStatus;
}

}

if("isTransparentOverlay" in inputs) {
this.variables.isTransparentOverlayIn = inputs.isTransparentOverlay;
if("_isTransparentOverlayInDataFetchStatus" in inputs) {
this.variables._isTransparentOverlayInDataFetchStatus = inputs._isTransparentOverlayInDataFetchStatus;
}

}

if("CloseOnClickOutsite" in inputs) {
this.variables.closeOnClickOutsiteIn = inputs.CloseOnClickOutsite;
if("_closeOnClickOutsiteInDataFetchStatus" in inputs) {
this.variables._closeOnClickOutsiteInDataFetchStatus = inputs._closeOnClickOutsiteInDataFetchStatus;
}

}

if("ShowBackButton" in inputs) {
this.variables.showBackButtonIn = inputs.ShowBackButton;
if("_showBackButtonInDataFetchStatus" in inputs) {
this.variables._showBackButtonInDataFetchStatus = inputs._showBackButtonInDataFetchStatus;
}

}

if("IsNotInertWhenClosed" in inputs) {
this.variables.isNotInertWhenClosedIn = inputs.IsNotInertWhenClosed;
if("_isNotInertWhenClosedInDataFetchStatus" in inputs) {
this.variables._isNotInertWhenClosedInDataFetchStatus = inputs._isNotInertWhenClosedInDataFetchStatus;
}

}

if("IsHideContentWhenClosed" in inputs) {
this.variables.isHideContentWhenClosedIn = inputs.IsHideContentWhenClosed;
if("_isHideContentWhenClosedInDataFetchStatus" in inputs) {
this.variables._isHideContentWhenClosedInDataFetchStatus = inputs._isHideContentWhenClosedInDataFetchStatus;
}

}

if("In_TouchActionNoneFix" in inputs) {
this.variables.in_TouchActionNoneFixIn = inputs.In_TouchActionNoneFix;
if("_in_TouchActionNoneFixInDataFetchStatus" in inputs) {
this.variables._in_TouchActionNoneFixInDataFetchStatus = inputs._in_TouchActionNoneFixInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "ConnectPatterns.BottomSheet");
});
define("UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTJavaScriptUtils.controller", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$model", "UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystemsUI_2_23.Interaction.BottomSheet.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.Columns_Three.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.controller$GetClass_BackgroundColor", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.controller$GetSpacingOptions", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTJavaScriptUtils.controller$JSUtils_SetStyleProperty", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$UBTJavaScriptUtils", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnectLibrary.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetClose", "OutSystemsUI_2_23.controller$BottomSheetOpen"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTJavaScriptUtilsController, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_model, UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_controller, UBTConnectLibraryClientVariables, OutSystemsUI_2_23_Interaction_BottomSheet_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view) {
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
        View.displayName = "ConnectPatterns.BottomSheet";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [OutSystemsUI_2_23_Interaction_BottomSheet_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OutSystemsUI_2_23_Interaction_BottomSheet_mvc_view, {
inputs: {
Shape: UBTConnectLibraryModel.staticEntities.shape.rounded,
ExtendedClass: model.getCachedValue(idService.getId("BottomSheet_Internal.ExtendedClass"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatClasses$Action(OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatClasses$Action(OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatClasses$Action(OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatClasses$Action(OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatClasses$Action(model.variables.mainContainerClassVar, ((model.variables.showHandlerPreviewIn) ? ((model.variables.mainContainerClassVar + "--handler-preview")) : ("")), callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.getClass_BackgroundColor$Action(model.variables.content_BackgroundColorIdIn, callContext).out_ColorClassOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), ((((OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.getSpacingOptions$Action("padding", model.variables.content_PaddingIn, callContext).classesOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)) !== (""))) ? ("custom-padding") : ("")), callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), model.variables.extendedClassesIn, callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), ((model.variables.isTransparentOverlayIn) ? ((model.variables.mainContainerClassVar + "--transparent-overlay")) : ("")), callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.mainContainerClassVar;
}, function () {
return model.variables.showHandlerPreviewIn;
}, function () {
return model.variables.content_BackgroundColorIdIn;
}, function () {
return model.variables.content_PaddingIn;
}, function () {
return model.variables.extendedClassesIn;
}, function () {
return model.variables.isTransparentOverlayIn;
}),
_extendedClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._showHandlerPreviewInDataFetchStatus, model.variables._content_BackgroundColorIdInDataFetchStatus, model.variables._content_PaddingInDataFetchStatus, model.variables._extendedClassesInDataFetchStatus, model.variables._isTransparentOverlayInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onToggle$Action: function (bottomSheetIdIn, isOpenIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Interaction/BottomSheet OnToggle");
return controller.bottomSheet_InternalOnToggle$Action(isOpenIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
initialized$Action: function (bottomSheetIdIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Interaction/BottomSheet Initialized");
return controller.bottomSheet_InternalInitialized$Action(bottomSheetIdIn, controller.callContext(eventHandlerContext));
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
name: "BottomSheet_Internal",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
topBar: new PlaceholderContent(function () {
return [$if(model.variables.showHeaderIn, false, this, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, {
inputs: {
ColumnOptions: model.getCachedValue(idService.getId("Cvr8V6QrxkG+89VKNTnamQ.ColumnOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
rec.columnBehaviourAttr = UBTConnectLibraryModel.staticEntities.uBT_ColumnBehaviour.expandMiddle;
rec.spacingSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.none;
rec.verticalAlignAttr = UBTConnectLibraryModel.staticEntities.uBT_VerticalAlign.center;
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
return [$if(model.variables.showBackButtonIn, false, this, function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/BottomSheet/Link OnClick");
controller.onBack$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_IconId: UBTConnectLibraryModel.staticEntities.uBT_Icons.arrowLeftAlt,
In_ColorId: model.getCachedValue(idService.getId("lbNeTCM1d0GZty_mcXKnqg.In_ColorId"), function () {
return ((model.variables.showBackButtonIn) ? (UBTConnectLibraryModel.staticEntities.uBT_Color.neutral9) : (UBTConnectLibraryModel.staticEntities.uBT_Color.transparent));
}, function () {
return model.variables.showBackButtonIn;
}),
_in_ColorIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._showBackButtonInDataFetchStatus),
In_SizeId: UBTConnectLibraryModel.staticEntities.uBT_IconSize.medium_20
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
}))];
}, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_ColorId: UBTConnectLibraryModel.staticEntities.uBT_Color.transparent,
In_SizeId: UBTConnectLibraryModel.staticEntities.uBT_IconSize.medium_20,
In_IconId: UBTConnectLibraryModel.staticEntities.uBT_Icons.close
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
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
}),
middle: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_TextOptions: model.getCachedValue(idService.getId("0Wap0xqXiU2hy++M+DSnlQ.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral10;
rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.small;
rec.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
In_Text: model.variables.titleIn,
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleInDataFetchStatus)
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
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
right: new PlaceholderContent(function () {
return [$if(model.variables.local_isOpenVar, false, this, function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/BottomSheet/Link OnClick");
return controller.closeOnClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
style: (model.variables.mainContainerClassVar + "--close-icon"),
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_SizeId: UBTConnectLibraryModel.staticEntities.uBT_IconSize.medium_20,
In_IconId: UBTConnectLibraryModel.staticEntities.uBT_Icons.close
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
}))];
}, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_ColorId: UBTConnectLibraryModel.staticEntities.uBT_Color.transparent,
In_SizeId: UBTConnectLibraryModel.staticEntities.uBT_IconSize.medium_20,
In_IconId: UBTConnectLibraryModel.staticEntities.uBT_Icons.close
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
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.mainContainerClassVar), asPrimitiveValue(model.variables.local_isOpenVar), asPrimitiveValue(model.variables.titleIn), asPrimitiveValue(model.variables._titleInDataFetchStatus), asPrimitiveValue(model.variables._showBackButtonInDataFetchStatus), asPrimitiveValue(model.variables.showBackButtonIn)]
})];
}, function () {
return [];
})];
}),
content: new PlaceholderContent(function () {
return [$if(model.variables.hideContentWhenClosedVar, false, this, function () {
return [];
}, function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.content,
style: model.getCachedValue(idService.getId("Content.Style"), function () {
return ((model.variables.mainContainerClassVar + "--content ") + OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.getSpacingOptions$Action("padding", model.variables.content_PaddingIn, callContext).classesOut;
}, OS.DataTypes.DataTypes.Text, callContext.id));
}, function () {
return model.variables.mainContainerClassVar;
}, function () {
return model.variables.content_PaddingIn;
}),
_idProps: {
service: idService,
name: "Content"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._content_PaddingInDataFetchStatus)
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.footer,
style: (model.variables.mainContainerClassVar + "--footer"),
_idProps: {
service: idService,
name: "Footer"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})];
})
}
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTJavaScriptUtils.controller", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$debugger", "UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$controller.OnReady.CloseOnClickJS", "UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$controller.OnReady.AddTransitionListenerJS", "UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$controller.MaybeHideContentWhenClosed.DelaySetHideWhenClosedJS", "UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$controller.BottomSheet_InternalInitialized.JavaScript2JS", "UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$controller.BottomSheet_InternalInitialized.JavaScript1JS", "UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$controller.RemoveInert.RemoveInertJS", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.controller$GetClass_BackgroundColor", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.controller$GetSpacingOptions", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTJavaScriptUtils.controller$JSUtils_SetStyleProperty", "UBTConnectLibrary.referencesHealth", "UBTConnectLibrary.referencesHealth$UBTJavaScriptUtils", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnectLibrary.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetClose", "OutSystemsUI_2_23.controller$BottomSheetOpen"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTJavaScriptUtilsController, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_Debugger, UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_controller_OnReady_CloseOnClickJS, UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_controller_OnReady_AddTransitionListenerJS, UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_controller_MaybeHideContentWhenClosed_DelaySetHideWhenClosedJS, UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_controller_BottomSheet_InternalInitialized_JavaScript2JS, UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_controller_BottomSheet_InternalInitialized_JavaScript1JS, UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_controller_RemoveInert_RemoveInertJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
removeInert$Action: function () {
return controller.executeActionInsideJSNode(controller._removeInert$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "RemoveInert");
},
setHideContentWhenClosed$Action: function (valueIn) {
valueIn = (valueIn === undefined) ? false : valueIn;
return controller.executeActionInsideJSNode(controller._setHideContentWhenClosed$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(valueIn, OS.DataTypes.DataTypes.Boolean)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "SetHideContentWhenClosed");
}
};
this.dataFetchDependenciesOriginal = {};
this.dataFetchDependentsGraph = {};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._bottomSheet_InternalOnToggle$Action = function (isOpenIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("BottomSheet_InternalOnToggle");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.ConnectPatterns.BottomSheet.BottomSheet_InternalOnToggle$vars"))());
vars.value.isOpenInLocal = isOpenIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:NuGHE3vLS0WRVqavVSM1Gg:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.13ADIsP8vkScKl+VpTVmCA/ClientActions.NuGHE3vLS0WRVqavVSM1Gg:2GlwOkUEJqDuLNaXj3TKyA", "UBTConnectLibrary", "BottomSheet_InternalOnToggle", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:9ZOVVzKtoUmzK+kc3X4zVQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:8cQyPSU0QUCTj1TpHIs2hQ", callContext.id);
// Local_isOpen = IsOpen
model.variables.local_isOpenVar = vars.value.isOpenInLocal;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:X+AAq_pbBEiV7cKOWvDtXQ", callContext.id);
// Trigger Event: OnToggle
return controller.onToggle$Action(model.variables.local_isOpenVar, callContext).then(function () {
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:0UCmtSCEG0qBpJlsaWogfw", callContext.id) && vars.value.isOpenInLocal)) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:pFblKnPovkyk4wRywTB99w", callContext.id);
// Execute Action: SetHideContentWhenClosed
controller._setHideContentWhenClosed$Action(false, callContext);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:fSnONyVafU+3hXH7UahPpw", callContext.id);
// Execute Action: SetHideContentWhenClosed2
controller._setHideContentWhenClosed$Action(model.variables.isHideContentWhenClosedIn, callContext);
}

if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:pYrn0pbZ_0mGmVO4_GyO7g", callContext.id) && (model.variables.isNotInertWhenClosedIn && !(model.variables.local_isOpenVar)))) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:+i7O9xlNi0aR_5_2pCC7tA", callContext.id);
// Execute Action: RemoveInert
controller._removeInert$Action(callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:n__+ABOic0+HmILaXFN0Eg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:n__+ABOic0+HmILaXFN0Eg", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:NuGHE3vLS0WRVqavVSM1Gg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:NuGHE3vLS0WRVqavVSM1Gg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnectLibrary.ConnectPatterns.BottomSheet.BottomSheet_InternalOnToggle$vars", [{
name: "IsOpen",
attrName: "isOpenInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
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
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:HR_zZBVtNUWg7_nDO_tl8Q:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.13ADIsP8vkScKl+VpTVmCA/ClientActions.HR_zZBVtNUWg7_nDO_tl8Q:9oxeEy9yhqNVsb8ZDJn3mQ", "UBTConnectLibrary", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:rG6Vgd+Pp0y7yzB4Ql3Xmw", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:iLnEvcgsJU+ESjzBsLQ7Pw", callContext.id);
// Execute Action: JSUtils_SetStyleProperty
UBTJavaScriptUtilsController.default.jSUtils_SetStyleProperty$Action(idService.getId("BottomSheet_Internal"), "--bottom-sheet--footer-height", model.variables.footerHeightIn, callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:NEQLvdif0EODjJlsU9cCzA", callContext.id);
// Execute Action: JSUtils_SetStyleProperty2
UBTJavaScriptUtilsController.default.jSUtils_SetStyleProperty$Action(idService.getId("BottomSheet_Internal"), "--ubt-bottomsheet-handler-preview--offset", model.variables.handlerPreviewOffsetIn, callContext);
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:9IYu1JJ6uUqZkmfTC0To+Q", callContext.id) && model.variables.closeOnClickOutsiteIn)) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:46YWOPF17kCwn+gqzwRu1A", callContext.id);
controller.safeExecuteJSNode(UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_controller_OnReady_CloseOnClickJS, "CloseOnClick", "OnReady", {
Id: OS.DataConversion.JSNodeParamConverter.to(idService.getId("BottomSheet_Internal"), OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {
BottomSheetClose: OutSystemsUI_2_23Controller.default.getClientActionProxies(controller).bottomSheetClose$Action
}, {});
}

if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:CrMlUUHRxEa7FPHYXbiXQg", callContext.id) && model.variables.isNotInertWhenClosedIn)) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:XkDSRDGCtEaoLNcP1pX07w", callContext.id);
controller.safeExecuteJSNode(UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_controller_OnReady_AddTransitionListenerJS, "AddTransitionListener", "OnReady", {
In_SheetElementId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("BottomSheet_Internal"), OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {
RemoveInert: controller.clientActionProxies.removeInert$Action
}, {});
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:wU0DMi_aXkuDTa7fCrnPng", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:wU0DMi_aXkuDTa7fCrnPng", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:HR_zZBVtNUWg7_nDO_tl8Q", callContext.id);
}

};
Controller.prototype._maybeHideContentWhenClosed$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("MaybeHideContentWhenClosed");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:my3WeQdPCUSKx0ht+_RLrg:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.13ADIsP8vkScKl+VpTVmCA/ClientActions.my3WeQdPCUSKx0ht+_RLrg:y7cQEiN9i_hWq3UVculBJA", "UBTConnectLibrary", "MaybeHideContentWhenClosed", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:E6wM23CFM0ulLzaoisB26Q", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:YuDKvEjJJkaESauM70wPZg", callContext.id) && model.variables.isHideContentWhenClosedIn)) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Bnedf_fhMUSwD3aNMSVjAQ", callContext.id);
controller.safeExecuteJSNode(UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_controller_MaybeHideContentWhenClosed_DelaySetHideWhenClosedJS, "DelaySetHideWhenClosed", "MaybeHideContentWhenClosed", {
In_SheetElementId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("BottomSheet_Internal"), OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {
SetHideContentWhenClosed: controller.clientActionProxies.setHideContentWhenClosed$Action
}, {});
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:N5ko9uya40+zr5eTee361w", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:mCzrAvROoUGi2wYsWun4eQ", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:my3WeQdPCUSKx0ht+_RLrg", callContext.id);
}

};
Controller.prototype._setHideContentWhenClosed$Action = function (valueIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("SetHideContentWhenClosed");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.ConnectPatterns.BottomSheet.SetHideContentWhenClosed$vars"))());
vars.value.valueInLocal = valueIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:34Mus6SDsEy1BauTJPBUOg:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.13ADIsP8vkScKl+VpTVmCA/ClientActions.34Mus6SDsEy1BauTJPBUOg:ByBBLKCS0KQRmPGZ4KjbdQ", "UBTConnectLibrary", "SetHideContentWhenClosed", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:VjQYSSV_fkGHJhw2FbQCzA", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:8B_zWQT7XU6OzVjanpwU9Q", callContext.id);
// HideContentWhenClosed = Value
model.variables.hideContentWhenClosedVar = vars.value.valueInLocal;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:b9kc3bRjq0eHb9420dlOLA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:34Mus6SDsEy1BauTJPBUOg", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnectLibrary.ConnectPatterns.BottomSheet.SetHideContentWhenClosed$vars", [{
name: "Value",
attrName: "valueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._closeOnClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("CloseOnClick");
callContext = controller.callContext(callContext);
var bottomSheetCloseVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.bottomSheetCloseVar = bottomSheetCloseVar;
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:vBn7zGWBs0yvjRqTP1wfUQ:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.13ADIsP8vkScKl+VpTVmCA/ClientActions.vBn7zGWBs0yvjRqTP1wfUQ:atsM_Pk9WHf4q5xzemFbOA", "UBTConnectLibrary", "CloseOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:QH6054BbB0uAOnmDgJhR1A", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:+WmlXtUxa0eEg3W2MWcdNA", callContext.id);
// Execute Action: MaybeHideContentWhenClosed
controller._maybeHideContentWhenClosed$Action(callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:6_JN+iZaNU23Q+_Rp1GVvw", callContext.id);
// Execute Action: BottomSheetClose
bottomSheetCloseVar.value = OutSystemsUI_2_23Controller.default.bottomSheetClose$Action(idService.getId("BottomSheet_Internal"), callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:+_ikvtV5H02K9nHmRhKRdA", callContext.id);
// Trigger Event: OnClose
return controller.onClose$Action(callContext).then(function () {
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:iawKkLEg70GWJJQOF2Q4eA", callContext.id) && model.variables.isNotInertWhenClosedIn)) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Kv4fP_JAMkqcHYeJC12WXw", callContext.id);
// Execute Action: RemoveInert
controller._removeInert$Action(callContext);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:MaNgYGpNcEi2NUoaI2B0Zg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:MaNgYGpNcEi2NUoaI2B0Zg", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:vBn7zGWBs0yvjRqTP1wfUQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:vBn7zGWBs0yvjRqTP1wfUQ", callContext.id);
throw ex;

});
};
Controller.prototype._bottomSheet_InternalInitialized$Action = function (bottomSheetIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("BottomSheet_InternalInitialized");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnectLibrary.ConnectPatterns.BottomSheet.BottomSheet_InternalInitialized$vars"))());
vars.value.bottomSheetIdInLocal = bottomSheetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:kwnZ7oTr2E6ct3XtRtNlqA:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.13ADIsP8vkScKl+VpTVmCA/ClientActions.kwnZ7oTr2E6ct3XtRtNlqA:2isbvzFvAOkbiF33eooMmQ", "UBTConnectLibrary", "BottomSheet_InternalInitialized", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:kQb0DNcsmU+xy23CwULbtQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:SBTY90fgKk+PX3ZDIgLK5w", callContext.id) && model.variables.showHeaderIn)) {
if((OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:1tCqK81S30KYCk2Ce_Jo4w", callContext.id) && model.variables.in_TouchActionNoneFixIn)) {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:7pUJue+6kkWKR7JooTgsiA", callContext.id);
controller.safeExecuteJSNode(UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_controller_BottomSheet_InternalInitialized_JavaScript1JS, "JavaScript1", "BottomSheet_InternalInitialized", {
Id: OS.DataConversion.JSNodeParamConverter.to(vars.value.bottomSheetIdInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {
BottomSheetOpen: OutSystemsUI_2_23Controller.default.getClientActionProxies(controller).bottomSheetOpen$Action
}, {});
} else {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Jwspkuk+OU2uL_3mjCEfmQ", callContext.id);
controller.safeExecuteJSNode(UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_controller_BottomSheet_InternalInitialized_JavaScript2JS, "JavaScript2", "BottomSheet_InternalInitialized", {
Id: OS.DataConversion.JSNodeParamConverter.to(vars.value.bottomSheetIdInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {
BottomSheetOpen: OutSystemsUI_2_23Controller.default.getClientActionProxies(controller).bottomSheetOpen$Action
}, {});
}

}

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:cjl4joJ88UGBgKObL1iApA", callContext.id);
// Trigger Event: Initialized
return controller.initialized$Action(vars.value.bottomSheetIdInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:oCPTL3oOYkys4OEtulbTRw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:kwnZ7oTr2E6ct3XtRtNlqA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:kwnZ7oTr2E6ct3XtRtNlqA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnectLibrary.ConnectPatterns.BottomSheet.BottomSheet_InternalInitialized$vars", [{
name: "BottomSheetId",
attrName: "bottomSheetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._removeInert$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("RemoveInert");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:iP_1+PwUBkSeuMZA_sMa+A:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.13ADIsP8vkScKl+VpTVmCA/ClientActions.iP_1+PwUBkSeuMZA_sMa+A:SnH2_B4o34B3aQtuq7c25A", "UBTConnectLibrary", "RemoveInert", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Cobj4sEDdUyAxqa2_Hy6CA", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:I9h7PCTqF0uH8Un7+Dq6Rg", callContext.id);
controller.safeExecuteJSNode(UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_controller_RemoveInert_RemoveInertJS, "RemoveInert", "RemoveInert", {
In_SheetElementId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("BottomSheet_Internal"), OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:5TMYT3MmrEOq9Y+MWj39hA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:iP_1+PwUBkSeuMZA_sMa+A", callContext.id);
}

};

Controller.prototype.bottomSheet_InternalOnToggle$Action = function (isOpenIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._bottomSheet_InternalOnToggle$Action, callContext, isOpenIn);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.maybeHideContentWhenClosed$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._maybeHideContentWhenClosed$Action, callContext);

};
Controller.prototype.setHideContentWhenClosed$Action = function (valueIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._setHideContentWhenClosed$Action, callContext, valueIn);

};
Controller.prototype.closeOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._closeOnClick$Action, callContext);

};
Controller.prototype.bottomSheet_InternalInitialized$Action = function (bottomSheetIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._bottomSheet_InternalInitialized$Action, callContext, bottomSheetIdIn);

};
Controller.prototype.removeInert$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._removeInert$Action, callContext);

};
Controller.prototype.initialized$Action = function () {
return Promise.resolve();
};
Controller.prototype.onClose$Action = function () {
return Promise.resolve();
};
Controller.prototype.onToggle$Action = function () {
return Promise.resolve();
};
Controller.prototype.onBack$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g:Y06DhYqVkffzqTnycnKUGw", "UBTConnectLibrary", "ConnectPatterns", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:13ADIsP8vkScKl+VpTVmCA:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.13ADIsP8vkScKl+VpTVmCA:Z0Pr0JWnVFlvX2isWJ4+yg", "UBTConnectLibrary", "BottomSheet", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:13ADIsP8vkScKl+VpTVmCA", callContext.id);
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

OutSystemsDebugger.setThreadStartName(callContext.id, "ConnectPatterns/BottomSheet On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
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
define("UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$controller.OnReady.CloseOnClickJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var el = document.getElementById($parameters.Id);
var overlay = el?.querySelector(".osui-bottom-sheet-overlay");

if(overlay) {
    overlay.onclick = function () {
    $actions.BottomSheetClose($parameters.Id);
  };
}
};
});
define("UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$controller.OnReady.AddTransitionListenerJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const sheetElement = document.getElementById($parameters.In_SheetElementId)?.querySelector(".osui-bottom-sheet");

if (sheetElement) {
    sheetElement.addEventListener("transitionend", $actions.RemoveInert);
    sheetElement.inert = false
}
};
});
define("UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$controller.MaybeHideContentWhenClosed.DelaySetHideWhenClosedJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const sheetElement = document.getElementById($parameters.In_SheetElementId)?.querySelector(".osui-bottom-sheet");


function transitionEndHandler() {
    $actions.SetHideContentWhenClosed(true)
    if(sheetElement) {
        sheetElement.removeEventListener("transitionend", transitionEndHandler);
    }
}

if(sheetElement) {
    sheetElement.addEventListener("transitionend", transitionEndHandler);
}
};
});
define("UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$controller.BottomSheet_InternalInitialized.JavaScript2JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
dragHandler = function () {
    var containerId = $parameters.Id;
    var container = document.getElementById(containerId);
    if (!container) return;

    var sheet = container.querySelector('.osui-bottom-sheet');
    // Adjust this selector to whatever your peek/handle element actually is
    var handle = sheet && sheet.querySelector('.osui-bottom-sheet__header');
    if (!sheet || !handle) return;

    // Guard against double-binding if Initialized fires more than once
    if (handle.dataset.dragToOpenBound === 'true') return;
    handle.dataset.dragToOpenBound = 'true';
    handle.style.touchAction = 'none'; // stop the browser's own scroll/pull gestures from competing

    var DRAG_THRESHOLD_PX = 60;       // min upward distance to count as "open"
    var SWIPE_SPEED_THRESHOLD = 0.3;  // px/ms — matches OutSystemsUI's own swipe speed constant

    var startY = 0, startTime = 0, lastY = 0, dragging = false, closedOffset = 0;

    function isOpen() {
        return sheet.classList.contains('osui-bottom-sheet--is-open');
    }

    function currentTranslateY(el) {
        var t = getComputedStyle(el).transform;
        if (!t || t === 'none') return 0;
        return new DOMMatrixReadOnly(t).m42;
    }

    function onPointerDown(evt) {
        if (isOpen()) return; // let the native handler own the open->close drag
        dragging = true;
        startY = lastY = evt.clientY;
        startTime = performance.now();
        closedOffset = currentTranslateY(sheet);
        sheet.style.transition = 'none';
        handle.setPointerCapture(evt.pointerId);
    }

    function onPointerMove(evt) {
        if (!dragging) return;
        var deltaY = evt.clientY - startY;
        lastY = evt.clientY;

        if (deltaY > 0) deltaY = 0; // ignore downward drag while closed
        var next = Math.max(0, closedOffset + deltaY);

        evt.preventDefault();
        sheet.style.transform = 'translateY(' + next + 'px)';
    }

    function onPointerUp() {
        if (!dragging) return;
        dragging = false;
        sheet.style.transition = '';

        var totalDelta = lastY - startY; // negative = moved up
        var speed = Math.abs(totalDelta) / (performance.now() - startTime);
        var shouldOpen = (-totalDelta > DRAG_THRESHOLD_PX) || (totalDelta < 0 && speed > SWIPE_SPEED_THRESHOLD);

        sheet.style.transform = ''; // hand position back to CSS classes either way

        if (shouldOpen) {
            $actions.BottomSheetOpen(containerId);
        }
    }

    handle.addEventListener('pointerdown', onPointerDown, { passive: true });
    handle.addEventListener('pointermove', onPointerMove, { passive: false });
    handle.addEventListener('pointerup', onPointerUp, { passive: true });
    handle.addEventListener('pointercancel', onPointerUp, { passive: true });
};
dragHandler();
};
});
define("UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$controller.BottomSheet_InternalInitialized.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
dragHandler = function () {
    var containerId = $parameters.Id;
    var container = document.getElementById(containerId);
    if (!container) return;

    var sheet = container.querySelector('.osui-bottom-sheet');
    var handle = sheet && sheet.querySelector('.osui-bottom-sheet__header');
    if (!sheet || !handle) return;

    if (handle.dataset.dragToOpenBound === 'true') return;
    handle.dataset.dragToOpenBound = 'true';

    var DRAG_THRESHOLD_PX = 60;       // min upward distance to count as "open"
    var SWIPE_SPEED_THRESHOLD = 0.3;  // px/ms — matches OutSystemsUI's own swipe speed constant

    var startY = 0, startTime = 0, lastY = 0, dragging = false, closedOffset = 0, activePointerId = null;

    function isOpen() {
        return sheet.classList.contains('osui-bottom-sheet--is-open');
    }

    // touch-action must already be correct BEFORE touchdown to be honored by the
    // compositor, so track it off open/closed state transitions, not per-gesture.
    // Only 'none' while closed (so an open-drag beats native scroll); default while
    // open, so a dismiss-swipe (handled entirely by the native component, which never
    // calls preventDefault) never starts on a 'none' element with nothing resolving it.
    function syncTouchAction() {
        handle.style.touchAction = isOpen() ? '' : 'none';
    }
    syncTouchAction();
    new MutationObserver(syncTouchAction).observe(sheet, { attributes: true, attributeFilter: ['class'] });

    function currentTranslateY(el) {
        var t = getComputedStyle(el).transform;
        if (!t || t === 'none') return 0;
        return new DOMMatrixReadOnly(t).m42;
    }

    function onPointerMove(evt) {
        if (!dragging || evt.pointerId !== activePointerId) return;
        var deltaY = evt.clientY - startY;
        lastY = evt.clientY;

        if (deltaY > 0) deltaY = 0; // ignore downward drag while closed
        var next = Math.max(0, closedOffset + deltaY);

        evt.preventDefault();
        sheet.style.transform = 'translateY(' + next + 'px)';
    }

    function endDrag(evt) {
        if (!dragging) return;
        dragging = false;
        sheet.style.transition = '';

        // Only ever attached for the lifetime of one drag — remove them as soon as it ends.
        handle.removeEventListener('pointermove', onPointerMove);
        handle.removeEventListener('pointerup', endDrag);
        handle.removeEventListener('pointercancel', endDrag);

        if (evt && typeof evt.pointerId === 'number') {
            try { handle.releasePointerCapture(evt.pointerId); } catch (e) { /* already released */ }
        }

        var totalDelta = lastY - startY; // negative = moved up
        var speed = Math.abs(totalDelta) / (performance.now() - startTime);
        var shouldOpen = (-totalDelta > DRAG_THRESHOLD_PX) || (totalDelta < 0 && speed > SWIPE_SPEED_THRESHOLD);

        sheet.style.transform = ''; // hand position back to CSS classes either way
        activePointerId = null;

        if (shouldOpen) {
            $actions.BottomSheetOpen(containerId);
        }
    }

    function onPointerDown(evt) {
        if (isOpen() || dragging) return; // let the native handler own the open->close drag

        dragging = true;
        activePointerId = evt.pointerId;
        startY = lastY = evt.clientY;
        startTime = performance.now();
        closedOffset = currentTranslateY(sheet);
        sheet.style.transition = 'none';
        handle.setPointerCapture(evt.pointerId);

        // Non-passive dispatch is only paid for the duration of this actual drag,
        // not for every touch interaction with the header for the component's lifetime.
        handle.addEventListener('pointermove', onPointerMove, { passive: false });
        handle.addEventListener('pointerup', endDrag, { passive: true });
        handle.addEventListener('pointercancel', endDrag, { passive: true });
    }

    handle.addEventListener('pointerdown', onPointerDown, { passive: true });
};
dragHandler();
};
});
define("UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$controller.RemoveInert.RemoveInertJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const sheetElement = document.getElementById($parameters.In_SheetElementId)?.querySelector(".osui-bottom-sheet");

function removeInert() {
    const sheetElement_inside = document.getElementById($parameters.In_SheetElementId)?.querySelector(".osui-bottom-sheet");
    if (sheetElement_inside) {
        sheetElement_inside.inert = false;
    }
}

if (sheetElement) {
    $public.View.render().then(removeInert)
}
};
});

define("UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"VLpEkPfWgk2gWdu16yfW6A": {
getter: function (varBag, idService) {
return varBag.vars.value.isOpenInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"46YWOPF17kCwn+gqzwRu1A": {
getter: function (varBag, idService) {
return varBag.closeOnClickJSResult.value;
}
},
"XkDSRDGCtEaoLNcP1pX07w": {
getter: function (varBag, idService) {
return varBag.addTransitionListenerJSResult.value;
}
},
"Bnedf_fhMUSwD3aNMSVjAQ": {
getter: function (varBag, idService) {
return varBag.delaySetHideWhenClosedJSResult.value;
}
},
"7y2ZxfwCNkuE4jou0tX5WQ": {
getter: function (varBag, idService) {
return varBag.vars.value.valueInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"6_JN+iZaNU23Q+_Rp1GVvw": {
getter: function (varBag, idService) {
return varBag.bottomSheetCloseVar.value;
}
},
"2ATPyrVLuEOmS82_msSMqw": {
getter: function (varBag, idService) {
return varBag.vars.value.bottomSheetIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Jwspkuk+OU2uL_3mjCEfmQ": {
getter: function (varBag, idService) {
return varBag.javaScript2JSResult.value;
}
},
"7pUJue+6kkWKR7JooTgsiA": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"I9h7PCTqF0uH8Un7+Dq6Rg": {
getter: function (varBag, idService) {
return varBag.removeInertJSResult.value;
}
},
"I1UIb9Tv90i2MGXdrSuF2A": {
getter: function (varBag, idService) {
return varBag.model.variables.mainContainerClassVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"NFCZ_k7T70Cy8_1HOcuhtg": {
getter: function (varBag, idService) {
return varBag.model.variables.local_isOpenVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"bZlDCLuqu0SXCKJZJr1xVw": {
getter: function (varBag, idService) {
return varBag.model.variables.hideContentWhenClosedVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"jzLZ3gI9XEW1zUFc7XvH4w": {
getter: function (varBag, idService) {
return varBag.model.variables.titleIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"uAFcuJwHskSQt8U62WZJvA": {
getter: function (varBag, idService) {
return varBag.model.variables.showHandlerPreviewIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Uf6hBqX43kiroE7Qb5oJ8A": {
getter: function (varBag, idService) {
return varBag.model.variables.handlerPreviewOffsetIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"sT8mYv20kEuw4Y7fMh3VQA": {
getter: function (varBag, idService) {
return varBag.model.variables.showHeaderIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"4vcCHilhpEu8GR_stjxpAA": {
getter: function (varBag, idService) {
return varBag.model.variables.content_BackgroundColorIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"+8vxjb2LqU+hHQa3gvE0zg": {
getter: function (varBag, idService) {
return varBag.model.variables.content_PaddingIn;
}
},
"Yx26Keee40W3VN4l5_U9vw": {
getter: function (varBag, idService) {
return varBag.model.variables.footerHeightIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"N1fB5hX4Vk+NZJfDvnaYjQ": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassesIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"yb3LG5HXKUylljA2YGukRA": {
getter: function (varBag, idService) {
return varBag.model.variables.isTransparentOverlayIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"YxSkWJk9QEq+H+lSx8Rvjg": {
getter: function (varBag, idService) {
return varBag.model.variables.closeOnClickOutsiteIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"CnZz7EQWkU+Oo8jli9ZQig": {
getter: function (varBag, idService) {
return varBag.model.variables.showBackButtonIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"pu15blWzbEm31KEstD7fpw": {
getter: function (varBag, idService) {
return varBag.model.variables.isNotInertWhenClosedIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"s4j3FRAC_0azQTxmGij5Gw": {
getter: function (varBag, idService) {
return varBag.model.variables.isHideContentWhenClosedIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"1j6JZ94wzEWfHelqCQn+dQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_TouchActionNoneFixIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"41thvLBMCES+33jI_KQ_4Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomSheet_Internal"));
})(varBag.model, idService);
}
},
"VwOaXSxMJUqKx634LAw1TA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TopBar"));
})(varBag.model, idService);
}
},
"X9LQGSf09UW3SZeJuE1CAg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"nqu4jcJ5JkGaCbsWuew_UQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Middle"));
})(varBag.model, idService);
}
},
"PgrFz0gpUUe_H18Qkg+7xw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"3fyiHj9S8kOd7lwkzdwY0g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"ylpaqoeEFECaHyBwNT5vRg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HideContentWhenSheetClosed"));
})(varBag.model, idService);
}
},
"vv3ZNTIfcUq1uVu17ty7qw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"xEiCbwY1h0OpP7nETdiZuw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Footer"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
