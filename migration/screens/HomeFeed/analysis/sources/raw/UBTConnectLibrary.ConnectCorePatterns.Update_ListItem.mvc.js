define("UBTConnectLibrary.ConnectCorePatterns.Update_ListItem.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.BasePatterns.Columns_Three.mvc$model", "UBTConnectLibrary.ConnectPatterns.AvatarDouble.mvc$model", "UBTConnectLibrary.ConnectPatterns.AvatarImage.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$model", "UBTConnectLibrary.ConnectPatterns.TagContent.mvc$model", "UBTConnectLibrary.ConnectCorePatterns.ContextMenu.mvc$model", "UBTConnectLibrary.controller$GetBackgroundColor_IsRead", "UBTConnectLibrary.controller$Get_BackgroundColor_Avatar_UpdateItem", "UBTConnectLibrary.controller$Get_FontColor_Avatar_UpdateItem", "UBTConnectLibrary.model$TextGenderIdentifierRecordList", "UBTConnectLibrary.controller$Get_FontColor_Tag_UpdateItem", "UBTConnectLibrary.controller$Get_BackgroundColor_Tag_UpdateItem", "UBTConnectLibrary.model$WeekdayLabelTypeRec", "UBTConnectLibrary.controller$FormatConnectDate_WithYear", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ContextMenuOptionsRec", "UBTConnectLibrary.model$TextBooleanRecord", "UBTConnectLibrary.model$TextBoolean1Record"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_BasePatterns_Columns_Three_mvcModel, UBTConnectLibrary_ConnectPatterns_AvatarDouble_mvcModel, UBTConnectLibrary_ConnectPatterns_AvatarImage_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel, UBTConnectLibrary_ConnectPatterns_IconText_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel, UBTConnectLibrary_ConnectPatterns_TagContent_mvcModel, UBTConnectLibrary_ConnectCorePatterns_ContextMenu_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("MainContainerClass", "mainContainerClassVar", "MainContainerClass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "ubt-update-item";
}, false), 
this.attr("In_Type_UpdateFeedItem", "in_Type_UpdateFeedItemIn", "In_Type_UpdateFeedItem", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_Type_UpdateFeedItemInDataFetchStatus", "_in_Type_UpdateFeedItemInDataFetchStatus", "_in_Type_UpdateFeedItemInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_AvatarImageURL", "in_AvatarImageURLIn", "In_AvatarImageURL", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_AvatarImageURLInDataFetchStatus", "_in_AvatarImageURLInDataFetchStatus", "_in_AvatarImageURLInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ShowImage", "showImageIn", "ShowImage", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("_showImageInDataFetchStatus", "_showImageInDataFetchStatus", "_showImageInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_InitialsList", "in_InitialsListIn", "In_InitialsList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.TextGenderIdentifierRecordList());
}, false, UBTConnectLibraryModel.TextGenderIdentifierRecordList), 
this.attr("_in_InitialsListInDataFetchStatus", "_in_InitialsListInDataFetchStatus", "_in_InitialsListInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_Name", "in_NameIn", "In_Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_NameInDataFetchStatus", "_in_NameInDataFetchStatus", "_in_NameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_Date", "in_DateIn", "In_Date", true, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, false), 
this.attr("_in_DateInDataFetchStatus", "_in_DateInDataFetchStatus", "_in_DateInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_Location", "in_LocationIn", "In_Location", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_LocationInDataFetchStatus", "_in_LocationInDataFetchStatus", "_in_LocationInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_IsRead", "in_IsReadIn", "In_IsRead", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsReadInDataFetchStatus", "_in_IsReadInDataFetchStatus", "_in_IsReadInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("IsEnabled", "isEnabledIn", "IsEnabled", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("_isEnabledInDataFetchStatus", "_isEnabledInDataFetchStatus", "_isEnabledInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("HasBorderBottom", "hasBorderBottomIn", "HasBorderBottom", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("_hasBorderBottomInDataFetchStatus", "_hasBorderBottomInDataFetchStatus", "_hasBorderBottomInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ParentsNames", "in_ParentsNamesIn", "In_ParentsNames", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_ParentsNamesInDataFetchStatus", "_in_ParentsNamesInDataFetchStatus", "_in_ParentsNamesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_BirthType", "in_BirthTypeIn", "In_BirthType", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_BirthTypeInDataFetchStatus", "_in_BirthTypeInDataFetchStatus", "_in_BirthTypeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("PaddingSizeId", "paddingSizeIdIn", "PaddingSizeId", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.SpacingOptionsRec());
}, false, UBTConnectLibraryModel.SpacingOptionsRec), 
this.attr("_paddingSizeIdInDataFetchStatus", "_paddingSizeIdInDataFetchStatus", "_paddingSizeIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("IgnoreReadBackground", "ignoreReadBackgroundIn", "IgnoreReadBackground", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_ignoreReadBackgroundInDataFetchStatus", "_ignoreReadBackgroundInDataFetchStatus", "_ignoreReadBackgroundInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_HasShare", "in_HasShareIn", "In_HasShare", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_HasShareInDataFetchStatus", "_in_HasShareInDataFetchStatus", "_in_HasShareInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (((((((((UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_Columns_Three_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_AvatarDouble_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_AvatarImage_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_IconText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_TagContent_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectCorePatterns_ContextMenu_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_Type_UpdateFeedItem" in inputs) {
this.variables.in_Type_UpdateFeedItemIn = inputs.In_Type_UpdateFeedItem;
if("_in_Type_UpdateFeedItemInDataFetchStatus" in inputs) {
this.variables._in_Type_UpdateFeedItemInDataFetchStatus = inputs._in_Type_UpdateFeedItemInDataFetchStatus;
}

}

if("In_AvatarImageURL" in inputs) {
this.variables.in_AvatarImageURLIn = inputs.In_AvatarImageURL;
if("_in_AvatarImageURLInDataFetchStatus" in inputs) {
this.variables._in_AvatarImageURLInDataFetchStatus = inputs._in_AvatarImageURLInDataFetchStatus;
}

}

if("ShowImage" in inputs) {
this.variables.showImageIn = inputs.ShowImage;
if("_showImageInDataFetchStatus" in inputs) {
this.variables._showImageInDataFetchStatus = inputs._showImageInDataFetchStatus;
}

}

if("In_InitialsList" in inputs) {
this.variables.in_InitialsListIn = inputs.In_InitialsList;
if("_in_InitialsListInDataFetchStatus" in inputs) {
this.variables._in_InitialsListInDataFetchStatus = inputs._in_InitialsListInDataFetchStatus;
}

}

if("In_Name" in inputs) {
this.variables.in_NameIn = inputs.In_Name;
if("_in_NameInDataFetchStatus" in inputs) {
this.variables._in_NameInDataFetchStatus = inputs._in_NameInDataFetchStatus;
}

}

if("In_Date" in inputs) {
this.variables.in_DateIn = inputs.In_Date;
if("_in_DateInDataFetchStatus" in inputs) {
this.variables._in_DateInDataFetchStatus = inputs._in_DateInDataFetchStatus;
}

}

if("In_Location" in inputs) {
this.variables.in_LocationIn = inputs.In_Location;
if("_in_LocationInDataFetchStatus" in inputs) {
this.variables._in_LocationInDataFetchStatus = inputs._in_LocationInDataFetchStatus;
}

}

if("In_IsRead" in inputs) {
this.variables.in_IsReadIn = inputs.In_IsRead;
if("_in_IsReadInDataFetchStatus" in inputs) {
this.variables._in_IsReadInDataFetchStatus = inputs._in_IsReadInDataFetchStatus;
}

}

if("IsEnabled" in inputs) {
this.variables.isEnabledIn = inputs.IsEnabled;
if("_isEnabledInDataFetchStatus" in inputs) {
this.variables._isEnabledInDataFetchStatus = inputs._isEnabledInDataFetchStatus;
}

}

if("HasBorderBottom" in inputs) {
this.variables.hasBorderBottomIn = inputs.HasBorderBottom;
if("_hasBorderBottomInDataFetchStatus" in inputs) {
this.variables._hasBorderBottomInDataFetchStatus = inputs._hasBorderBottomInDataFetchStatus;
}

}

if("In_ParentsNames" in inputs) {
this.variables.in_ParentsNamesIn = inputs.In_ParentsNames;
if("_in_ParentsNamesInDataFetchStatus" in inputs) {
this.variables._in_ParentsNamesInDataFetchStatus = inputs._in_ParentsNamesInDataFetchStatus;
}

}

if("In_BirthType" in inputs) {
this.variables.in_BirthTypeIn = inputs.In_BirthType;
if("_in_BirthTypeInDataFetchStatus" in inputs) {
this.variables._in_BirthTypeInDataFetchStatus = inputs._in_BirthTypeInDataFetchStatus;
}

}

if("PaddingSizeId" in inputs) {
this.variables.paddingSizeIdIn = inputs.PaddingSizeId;
if("_paddingSizeIdInDataFetchStatus" in inputs) {
this.variables._paddingSizeIdInDataFetchStatus = inputs._paddingSizeIdInDataFetchStatus;
}

}

if("IgnoreReadBackground" in inputs) {
this.variables.ignoreReadBackgroundIn = inputs.IgnoreReadBackground;
if("_ignoreReadBackgroundInDataFetchStatus" in inputs) {
this.variables._ignoreReadBackgroundInDataFetchStatus = inputs._ignoreReadBackgroundInDataFetchStatus;
}

}

if("In_HasShare" in inputs) {
this.variables.in_HasShareIn = inputs.In_HasShare;
if("_in_HasShareInDataFetchStatus" in inputs) {
this.variables._in_HasShareInDataFetchStatus = inputs._in_HasShareInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "ConnectCorePatterns.Update_ListItem");
});
define("UBTConnectLibrary.ConnectCorePatterns.Update_ListItem.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectCorePatterns.Update_ListItem.mvc$model", "UBTConnectLibrary.ConnectCorePatterns.Update_ListItem.mvc$controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.Columns_Three.mvc$view", "UBTConnectLibrary.ConnectPatterns.AvatarDouble.mvc$view", "UBTConnectLibrary.ConnectPatterns.AvatarImage.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "UBTConnectLibrary.ConnectPatterns.TagContent.mvc$view", "UBTConnectLibrary.ConnectCorePatterns.ContextMenu.mvc$view", "UBTConnectLibrary.controller$GetBackgroundColor_IsRead", "UBTConnectLibrary.controller$Get_BackgroundColor_Avatar_UpdateItem", "UBTConnectLibrary.controller$Get_FontColor_Avatar_UpdateItem", "UBTConnectLibrary.model$TextGenderIdentifierRecordList", "UBTConnectLibrary.controller$Get_FontColor_Tag_UpdateItem", "UBTConnectLibrary.controller$Get_BackgroundColor_Tag_UpdateItem", "UBTConnectLibrary.model$WeekdayLabelTypeRec", "UBTConnectLibrary.controller$FormatConnectDate_WithYear", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ContextMenuOptionsRec", "UBTConnectLibrary.model$TextBooleanRecord", "UBTConnectLibrary.model$TextBoolean1Record"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectCorePatterns_Update_ListItem_mvc_model, UBTConnectLibrary_ConnectCorePatterns_Update_ListItem_mvc_controller, UBTConnectLibraryClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, UBTConnectLibrary_ConnectPatterns_AvatarDouble_mvc_view, UBTConnectLibrary_ConnectPatterns_AvatarImage_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_ConnectPatterns_TagContent_mvc_view, UBTConnectLibrary_ConnectCorePatterns_ContextMenu_mvc_view) {
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
        View.displayName = "ConnectCorePatterns.Update_ListItem";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, UBTConnectLibrary_ConnectPatterns_AvatarDouble_mvc_view, UBTConnectLibrary_ConnectPatterns_AvatarImage_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_ConnectPatterns_TagContent_mvc_view, UBTConnectLibrary_ConnectCorePatterns_ContextMenu_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectCorePatterns_Update_ListItem_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectCorePatterns_Update_ListItem_mvc_controller;
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
ExtendedClasses: model.getCachedValue(idService.getId("k2aVxG0AjEiBTIPbRKrdPQ.ExtendedClasses"), function () {
return (model.variables.mainContainerClassVar + ((model.variables.in_IsReadIn) ? ("") : (((" " + model.variables.mainContainerClassVar) + "--unread"))));
}, function () {
return model.variables.mainContainerClassVar;
}, function () {
return model.variables.in_IsReadIn;
}),
_extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsReadInDataFetchStatus),
Options: model.getCachedValue(idService.getId("k2aVxG0AjEiBTIPbRKrdPQ.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.backgroundAttr = function () {
var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
rec.backgroundColorAttr = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.getBackgroundColor_IsRead$Action((model.variables.in_IsReadIn || model.variables.ignoreReadBackgroundIn), callContext).out_BackgroundColorOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
return rec;
}();
rec.paddingSizeAttr = model.variables.paddingSizeIdIn;
rec.borderOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.BorderOptionsRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral3;
rec.sizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.bottomSizeIdAttr = ((model.variables.hasBorderBottomIn) ? (UBTConnectLibraryModel.staticEntities.uBT_Size.small) : (OS.BuiltinFunctions.nullTextIdentifier()));
return rec;
}();
return rec;
}();
return rec;
}();
}, function () {
return model.variables.in_IsReadIn;
}, function () {
return model.variables.ignoreReadBackgroundIn;
}, function () {
return model.variables.paddingSizeIdIn;
}, function () {
return model.variables.hasBorderBottomIn;
}),
_optionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsReadInDataFetchStatus, model.variables._ignoreReadBackgroundInDataFetchStatus, model.variables._paddingSizeIdInDataFetchStatus, model.variables._hasBorderBottomInDataFetchStatus)
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "BasePatterns/CustomContainer Clicked");
controller.onClick$Action(controller.callContext(eventHandlerContext));
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
return [$if(model.variables.showImageIn, false, this, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, {
inputs: {
ColumnOptions: model.getCachedValue(idService.getId("j5bnFuddiEODXI710GA5QQ.ColumnOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
rec.columnBehaviourAttr = UBTConnectLibraryModel.staticEntities.uBT_ColumnBehaviour.expandMiddle;
rec.spacingSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.small;
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
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "Update_Visual"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(((model.variables.in_Type_UpdateFeedItemIn === UBTConnectLibraryModel.staticEntities.connect_UpdateTypeId.birth) && (model.variables.in_InitialsListIn.length > 1)), false, this, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_AvatarDouble_mvc_view, {
inputs: {
In_SizeId: UBTConnectLibraryModel.staticEntities.uBT_AvatarSize.large_65,
In_FirstAvatarImage: model.getCachedValue(idService.getId("xh2TpJb6p02vVW__iwYLIA.In_FirstAvatarImage"), function () {
return function () {
var rec = new UBTConnectLibraryModel.AvatarImageRec();
rec.fallbackOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.AvatarImageFallbackoptionsRec();
rec.initialsAttr = model.variables.in_InitialsListIn.getItem(0).initialsAttr;
rec.backgroundColorAttr = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.get_BackgroundColor_Avatar_UpdateItem$Action(model.variables.in_Type_UpdateFeedItemIn, model.variables.in_InitialsListIn.getItem(0).genderAttr, callContext).out_BackgroundColorOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
rec.fontColorAttr = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.get_FontColor_Avatar_UpdateItem$Action(model.variables.in_Type_UpdateFeedItemIn, model.variables.in_InitialsListIn.getItem(0).genderAttr, callContext).out_FontColorOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
return rec;
}();
return rec;
}();
}, function () {
return model.variables.in_InitialsListIn.getItem(0).initialsAttr;
}, function () {
return model.variables.in_Type_UpdateFeedItemIn;
}, function () {
return model.variables.in_InitialsListIn.getItem(0).genderAttr;
}),
_in_FirstAvatarImageInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_InitialsListInDataFetchStatus, model.variables._in_Type_UpdateFeedItemInDataFetchStatus),
In_SecondAvatarImage: model.getCachedValue(idService.getId("xh2TpJb6p02vVW__iwYLIA.In_SecondAvatarImage"), function () {
return function () {
var rec = new UBTConnectLibraryModel.AvatarImageRec();
rec.fallbackOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.AvatarImageFallbackoptionsRec();
rec.initialsAttr = model.variables.in_InitialsListIn.getItem(1).initialsAttr;
rec.backgroundColorAttr = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.get_BackgroundColor_Avatar_UpdateItem$Action(model.variables.in_Type_UpdateFeedItemIn, model.variables.in_InitialsListIn.getItem(1).genderAttr, callContext).out_BackgroundColorOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
rec.fontColorAttr = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.get_FontColor_Avatar_UpdateItem$Action(model.variables.in_Type_UpdateFeedItemIn, model.variables.in_InitialsListIn.getItem(1).genderAttr, callContext).out_FontColorOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
return rec;
}();
return rec;
}();
}, function () {
return model.variables.in_InitialsListIn.getItem(1).initialsAttr;
}, function () {
return model.variables.in_Type_UpdateFeedItemIn;
}, function () {
return model.variables.in_InitialsListIn.getItem(1).genderAttr;
}),
_in_SecondAvatarImageInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_InitialsListInDataFetchStatus, model.variables._in_Type_UpdateFeedItemInDataFetchStatus)
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
}, function () {
return [$if(((model.variables.in_AvatarImageURLIn) !== ("")), false, this, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_AvatarImage_mvc_view, {
inputs: {
In_SizeId: UBTConnectLibraryModel.staticEntities.uBT_AvatarSize.large_65,
In_AvatarImage: model.getCachedValue(idService.getId("+SAlhVSyc0ifShj7g9Ejow.In_AvatarImage"), function () {
return function () {
var rec = new UBTConnectLibraryModel.AvatarImageRec();
rec.uRLAttr = model.variables.in_AvatarImageURLIn;
return rec;
}();
}, function () {
return model.variables.in_AvatarImageURLIn;
}),
_in_AvatarImageInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_AvatarImageURLInDataFetchStatus)
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
}, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_AvatarImage_mvc_view, {
inputs: {
In_AvatarImage: model.getCachedValue(idService.getId("LLhFM0CPFEe2mECnMrgJug.In_AvatarImage"), function () {
return function () {
var rec = new UBTConnectLibraryModel.AvatarImageRec();
rec.fallbackOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.AvatarImageFallbackoptionsRec();
rec.initialsAttr = model.variables.in_InitialsListIn.getCurrent(callContext.iterationContext).initialsAttr;
rec.backgroundColorAttr = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.get_BackgroundColor_Avatar_UpdateItem$Action(model.variables.in_Type_UpdateFeedItemIn, model.variables.in_InitialsListIn.getCurrent(callContext.iterationContext).genderAttr, callContext).out_BackgroundColorOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
rec.fontColorAttr = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.get_FontColor_Avatar_UpdateItem$Action(model.variables.in_Type_UpdateFeedItemIn, model.variables.in_InitialsListIn.getCurrent(callContext.iterationContext).genderAttr, callContext).out_FontColorOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
return rec;
}();
return rec;
}();
}, function () {
return model.variables.in_InitialsListIn.getCurrent(callContext.iterationContext).initialsAttr;
}, function () {
return model.variables.in_Type_UpdateFeedItemIn;
}, function () {
return model.variables.in_InitialsListIn.getCurrent(callContext.iterationContext).genderAttr;
}),
_in_AvatarImageInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_InitialsListInDataFetchStatus, model.variables._in_Type_UpdateFeedItemInDataFetchStatus),
In_SizeId: UBTConnectLibraryModel.staticEntities.uBT_AvatarSize.large_65
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
})];
}))];
}),
middle: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "Update_Name"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_Text: model.variables.in_NameIn,
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_NameInDataFetchStatus),
In_TextOptions: model.getCachedValue(idService.getId("Os0DaYE0C0G5a1iZM7gLbQ.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.semiBold;
rec.isItalicAttr = (((model.variables.in_Type_UpdateFeedItemIn === UBTConnectLibraryModel.staticEntities.connect_UpdateTypeId.taken)) ? (true) : (false));
return rec;
}();
}, function () {
return model.variables.in_Type_UpdateFeedItemIn;
}),
_in_TextOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_Type_UpdateFeedItemInDataFetchStatus)
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
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "Update_Location"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
inputs: {
Text: model.getCachedValue(idService.getId("SOh79KWUZ0y5ENYINsfgpg.Text"), function () {
return (model.variables.in_LocationIn + ((((model.variables.in_ParentsNamesIn) !== (""))) ? ((" - " + model.variables.in_ParentsNamesIn)) : ("")));
}, function () {
return model.variables.in_LocationIn;
}, function () {
return model.variables.in_ParentsNamesIn;
}),
_textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_LocationInDataFetchStatus, model.variables._in_ParentsNamesInDataFetchStatus),
TextOptions: model.getCachedValue(idService.getId("SOh79KWUZ0y5ENYINsfgpg.TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral7;
rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.doubleExtraSmall;
rec.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
ExtendedClasses: "text-neutral-7 font-size-xxs"
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
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_ColorId: UBTConnectLibraryModel.staticEntities.uBT_Color.neutral8,
In_SizeId: UBTConnectLibraryModel.staticEntities.uBT_IconSize.small_12,
In_IconId: UBTConnectLibraryModel.staticEntities.uBT_Icons.locationOnFill
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
_dependencies: []
})];
})
},
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "Update_TypeAndDate"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
inputs: {
ColumnOptions: model.getCachedValue(idService.getId("O58s_095MEaLISrLLiA2jw.ColumnOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
rec.columnBehaviourAttr = UBTConnectLibraryModel.staticEntities.uBT_ColumnBehaviour.reduceFirst;
rec.spacingSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.extraSmall;
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
uuid: "12",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
left: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_TagContent_mvc_view, {
inputs: {
Text: model.getCachedValue(idService.getId("TypeAndDate_Type.Text"), function () {
return ((((model.variables.in_Type_UpdateFeedItemIn === UBTConnectLibraryModel.staticEntities.connect_UpdateTypeId.birth) && ((model.variables.in_BirthTypeIn) !== ("")))) ? (model.variables.in_BirthTypeIn) : (model.variables.in_Type_UpdateFeedItemIn));
}, function () {
return model.variables.in_Type_UpdateFeedItemIn;
}, function () {
return model.variables.in_BirthTypeIn;
}),
_textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_Type_UpdateFeedItemInDataFetchStatus, model.variables._in_BirthTypeInDataFetchStatus),
TextColorId: model.getCachedValue(idService.getId("TypeAndDate_Type.TextColorId"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.get_FontColor_Tag_UpdateItem$Action(model.variables.in_Type_UpdateFeedItemIn, model.variables.in_InitialsListIn, callContext).fontColorOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.in_Type_UpdateFeedItemIn;
}, function () {
return model.variables.in_InitialsListIn;
}),
_textColorIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_Type_UpdateFeedItemInDataFetchStatus, model.variables._in_InitialsListInDataFetchStatus),
BackgroundColorId: model.getCachedValue(idService.getId("TypeAndDate_Type.BackgroundColorId"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.get_BackgroundColor_Tag_UpdateItem$Action(model.variables.in_Type_UpdateFeedItemIn, model.variables.in_InitialsListIn, callContext).out_BackgroundColorOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.in_Type_UpdateFeedItemIn;
}, function () {
return model.variables.in_InitialsListIn;
}),
_backgroundColorIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_Type_UpdateFeedItemInDataFetchStatus, model.variables._in_InitialsListInDataFetchStatus)
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
name: "TypeAndDate_Type",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
right: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_TextOptions: model.getCachedValue(idService.getId("CsHDWhvEPEukJrpYEpATng.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral8;
rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.extraSmall;
rec.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
In_Text: model.getCachedValue(idService.getId("CsHDWhvEPEukJrpYEpATng.In_Text"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatConnectDate_WithYear$Action(model.variables.in_DateIn, callContext).out_FormattedDateOut;
}, OS.DataTypes.DataTypes.Record, callContext.id).longLabelAttr;
}, function () {
return model.variables.in_DateIn;
}),
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_DateInDataFetchStatus)
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
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_DateIn), asPrimitiveValue(model.variables.in_InitialsListIn), asPrimitiveValue(model.variables._in_DateInDataFetchStatus), asPrimitiveValue(model.variables._in_InitialsListInDataFetchStatus), asPrimitiveValue(model.variables._in_BirthTypeInDataFetchStatus), asPrimitiveValue(model.variables._in_Type_UpdateFeedItemInDataFetchStatus), asPrimitiveValue(model.variables.in_BirthTypeIn), asPrimitiveValue(model.variables.in_Type_UpdateFeedItemIn)]
}))];
}),
right: new PlaceholderContent(function () {
return [$if(model.variables.isEnabledIn, false, this, function () {
return [React.createElement(UBTConnectLibrary_ConnectCorePatterns_ContextMenu_mvc_view, {
inputs: {
In_ContextMenuOptions: model.getCachedValue(idService.getId("OCI1d_ay1k6rENcl995Mbg.In_ContextMenuOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContextMenuOptionsRec();
rec.hasSendGiftAttr = false;
rec.hasMarkAsReadAttr = !(model.variables.in_IsReadIn);
rec.hasMarkAsUnreadAttr = model.variables.in_IsReadIn;
rec.hasShareAttr = model.variables.in_HasShareIn;
rec.editAttr = function () {
var rec = new UBTConnectLibraryModel.TextBooleanRecord();
rec.hasEditAttr = false;
return rec;
}();
return rec;
}();
}, function () {
return model.variables.in_IsReadIn;
}, function () {
return model.variables.in_HasShareIn;
}),
_in_ContextMenuOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsReadInDataFetchStatus, model.variables._in_HasShareInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_MarkAsUnread$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/ContextMenu Event_MarkAsUnread");
controller.event_MarkAsUnread$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
event_MarkAsRead$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/ContextMenu Event_MarkAsRead");
controller.event_MarkAsRead$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
event_SendGift$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/ContextMenu Event_SendGift");
controller.event_SendGift$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
event_Share$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/ContextMenu Event_Share");
controller.event_Share$Action(controller.callContext(eventHandlerContext));
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
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_HasShareIn), asPrimitiveValue(model.variables.in_IsReadIn), asPrimitiveValue(model.variables.isEnabledIn), asPrimitiveValue(model.variables.in_DateIn), asPrimitiveValue(model.variables.in_BirthTypeIn), asPrimitiveValue(model.variables.in_ParentsNamesIn), asPrimitiveValue(model.variables.in_LocationIn), asPrimitiveValue(model.variables.in_NameIn), asPrimitiveValue(model.variables.in_AvatarImageURLIn), asPrimitiveValue(model.variables._in_HasShareInDataFetchStatus), asPrimitiveValue(model.variables._in_IsReadInDataFetchStatus), asPrimitiveValue(model.variables._isEnabledInDataFetchStatus), asPrimitiveValue(model.variables._in_DateInDataFetchStatus), asPrimitiveValue(model.variables._in_BirthTypeInDataFetchStatus), asPrimitiveValue(model.variables._in_ParentsNamesInDataFetchStatus), asPrimitiveValue(model.variables._in_LocationInDataFetchStatus), asPrimitiveValue(model.variables._in_NameInDataFetchStatus), asPrimitiveValue(model.variables._in_AvatarImageURLInDataFetchStatus), asPrimitiveValue(model.variables._in_InitialsListInDataFetchStatus), asPrimitiveValue(model.variables._in_Type_UpdateFeedItemInDataFetchStatus), asPrimitiveValue(model.variables.in_InitialsListIn), asPrimitiveValue(model.variables.in_Type_UpdateFeedItemIn)]
})];
}, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
inputs: {
ColumnOptions: model.getCachedValue(idService.getId("rN9gRnSFHEmHhgAtoCpShg.ColumnOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
rec.columnBehaviourAttr = UBTConnectLibraryModel.staticEntities.uBT_ColumnBehaviour.reduceLast;
rec.spacingSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.small;
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
uuid: "16",
alias: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
left: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "Update_Name2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_TextOptions: model.getCachedValue(idService.getId("GU12ZwpH3EOwmzCjbOlImg.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.semiBold;
rec.isItalicAttr = (((model.variables.in_Type_UpdateFeedItemIn === UBTConnectLibraryModel.staticEntities.connect_UpdateTypeId.taken)) ? (true) : (false));
return rec;
}();
}, function () {
return model.variables.in_Type_UpdateFeedItemIn;
}),
_in_TextOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_Type_UpdateFeedItemInDataFetchStatus),
In_Text: model.variables.in_NameIn,
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_NameInDataFetchStatus)
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
uuid: "18",
alias: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "Update_Location2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
inputs: {
TextOptions: model.getCachedValue(idService.getId("LQUwfxo8VEa+Ay560aAPmA.TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral7;
rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.doubleExtraSmall;
rec.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
Text: model.getCachedValue(idService.getId("LQUwfxo8VEa+Ay560aAPmA.Text"), function () {
return (model.variables.in_LocationIn + ((((model.variables.in_ParentsNamesIn) !== (""))) ? ((" - " + model.variables.in_ParentsNamesIn)) : ("")));
}, function () {
return model.variables.in_LocationIn;
}, function () {
return model.variables.in_ParentsNamesIn;
}),
_textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_LocationInDataFetchStatus, model.variables._in_ParentsNamesInDataFetchStatus),
ExtendedClasses: "text-neutral-7 font-size-xxs"
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
uuid: "20",
alias: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_ColorId: UBTConnectLibraryModel.staticEntities.uBT_Color.neutral8,
In_IconId: UBTConnectLibraryModel.staticEntities.uBT_Icons.locationOnFill,
In_SizeId: UBTConnectLibraryModel.staticEntities.uBT_IconSize.small_12
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
uuid: "21",
alias: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "Update_TypeAndDate2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
inputs: {
ColumnOptions: model.getCachedValue(idService.getId("zRxQ3Y4F1kKf2XPKRSOShA.ColumnOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
rec.columnBehaviourAttr = UBTConnectLibraryModel.staticEntities.uBT_ColumnBehaviour.reduceFirst;
rec.spacingSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.extraSmall;
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
uuid: "23",
alias: "17"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
left: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_TagContent_mvc_view, {
inputs: {
Text: model.getCachedValue(idService.getId("TypeAndDate_Type2.Text"), function () {
return ((((model.variables.in_Type_UpdateFeedItemIn === UBTConnectLibraryModel.staticEntities.connect_UpdateTypeId.birth) && ((model.variables.in_BirthTypeIn) !== ("")))) ? (model.variables.in_BirthTypeIn) : (model.variables.in_Type_UpdateFeedItemIn));
}, function () {
return model.variables.in_Type_UpdateFeedItemIn;
}, function () {
return model.variables.in_BirthTypeIn;
}),
_textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_Type_UpdateFeedItemInDataFetchStatus, model.variables._in_BirthTypeInDataFetchStatus),
BackgroundColorId: model.getCachedValue(idService.getId("TypeAndDate_Type2.BackgroundColorId"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.get_BackgroundColor_Tag_UpdateItem$Action(model.variables.in_Type_UpdateFeedItemIn, model.variables.in_InitialsListIn, callContext).out_BackgroundColorOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.in_Type_UpdateFeedItemIn;
}, function () {
return model.variables.in_InitialsListIn;
}),
_backgroundColorIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_Type_UpdateFeedItemInDataFetchStatus, model.variables._in_InitialsListInDataFetchStatus),
TextColorId: model.getCachedValue(idService.getId("TypeAndDate_Type2.TextColorId"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.get_FontColor_Tag_UpdateItem$Action(model.variables.in_Type_UpdateFeedItemIn, model.variables.in_InitialsListIn, callContext).fontColorOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.in_Type_UpdateFeedItemIn;
}, function () {
return model.variables.in_InitialsListIn;
}),
_textColorIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_Type_UpdateFeedItemInDataFetchStatus, model.variables._in_InitialsListInDataFetchStatus)
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
name: "TypeAndDate_Type2",
alias: "18"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
right: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_Text: model.getCachedValue(idService.getId("UD6Ak1p5nU+w1yQOzXdoeg.In_Text"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatConnectDate_WithYear$Action(model.variables.in_DateIn, callContext).out_FormattedDateOut;
}, OS.DataTypes.DataTypes.Record, callContext.id).longLabelAttr;
}, function () {
return model.variables.in_DateIn;
}),
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_DateInDataFetchStatus),
In_TextOptions: model.getCachedValue(idService.getId("UD6Ak1p5nU+w1yQOzXdoeg.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral8;
rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.extraSmall;
rec.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.semiBold;
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
uuid: "25",
alias: "19"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_DateIn), asPrimitiveValue(model.variables.in_InitialsListIn), asPrimitiveValue(model.variables._in_DateInDataFetchStatus), asPrimitiveValue(model.variables._in_InitialsListInDataFetchStatus), asPrimitiveValue(model.variables._in_BirthTypeInDataFetchStatus), asPrimitiveValue(model.variables._in_Type_UpdateFeedItemInDataFetchStatus), asPrimitiveValue(model.variables.in_BirthTypeIn), asPrimitiveValue(model.variables.in_Type_UpdateFeedItemIn)]
}))];
}),
right: new PlaceholderContent(function () {
return [$if(model.variables.isEnabledIn, false, this, function () {
return [React.createElement(UBTConnectLibrary_ConnectCorePatterns_ContextMenu_mvc_view, {
inputs: {
In_ContextMenuOptions: model.getCachedValue(idService.getId("Nlt85gpS2EmGuOxVmd2mIg.In_ContextMenuOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContextMenuOptionsRec();
rec.hasMarkAsReadAttr = !(model.variables.in_IsReadIn);
rec.hasMarkAsUnreadAttr = model.variables.in_IsReadIn;
rec.hasShareAttr = model.variables.in_HasShareIn;
return rec;
}();
}, function () {
return model.variables.in_IsReadIn;
}, function () {
return model.variables.in_HasShareIn;
}),
_in_ContextMenuOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsReadInDataFetchStatus, model.variables._in_HasShareInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_MarkAsUnread$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/ContextMenu Event_MarkAsUnread");
controller.event_MarkAsUnread$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
event_MarkAsRead$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/ContextMenu Event_MarkAsRead");
controller.event_MarkAsRead$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
event_SendGift$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/ContextMenu Event_SendGift");
controller.event_SendGift$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
event_Share$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/ContextMenu Event_Share");
controller.event_Share$Action(controller.callContext(eventHandlerContext));
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
uuid: "26",
alias: "20"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_HasShareIn), asPrimitiveValue(model.variables.in_IsReadIn), asPrimitiveValue(model.variables.isEnabledIn), asPrimitiveValue(model.variables.in_DateIn), asPrimitiveValue(model.variables.in_InitialsListIn), asPrimitiveValue(model.variables.in_BirthTypeIn), asPrimitiveValue(model.variables.in_ParentsNamesIn), asPrimitiveValue(model.variables.in_LocationIn), asPrimitiveValue(model.variables.in_NameIn), asPrimitiveValue(model.variables._in_HasShareInDataFetchStatus), asPrimitiveValue(model.variables._in_IsReadInDataFetchStatus), asPrimitiveValue(model.variables._isEnabledInDataFetchStatus), asPrimitiveValue(model.variables._in_DateInDataFetchStatus), asPrimitiveValue(model.variables._in_InitialsListInDataFetchStatus), asPrimitiveValue(model.variables._in_BirthTypeInDataFetchStatus), asPrimitiveValue(model.variables._in_ParentsNamesInDataFetchStatus), asPrimitiveValue(model.variables._in_LocationInDataFetchStatus), asPrimitiveValue(model.variables._in_NameInDataFetchStatus), asPrimitiveValue(model.variables._in_Type_UpdateFeedItemInDataFetchStatus), asPrimitiveValue(model.variables.in_Type_UpdateFeedItemIn)]
})];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_HasShareIn), asPrimitiveValue(model.variables.in_IsReadIn), asPrimitiveValue(model.variables.isEnabledIn), asPrimitiveValue(model.variables.in_DateIn), asPrimitiveValue(model.variables.in_BirthTypeIn), asPrimitiveValue(model.variables.in_ParentsNamesIn), asPrimitiveValue(model.variables.in_LocationIn), asPrimitiveValue(model.variables.in_NameIn), asPrimitiveValue(model.variables.in_AvatarImageURLIn), asPrimitiveValue(model.variables.in_InitialsListIn), asPrimitiveValue(model.variables.in_Type_UpdateFeedItemIn), asPrimitiveValue(model.variables._in_HasShareInDataFetchStatus), asPrimitiveValue(model.variables._in_IsReadInDataFetchStatus), asPrimitiveValue(model.variables._isEnabledInDataFetchStatus), asPrimitiveValue(model.variables._in_DateInDataFetchStatus), asPrimitiveValue(model.variables._in_BirthTypeInDataFetchStatus), asPrimitiveValue(model.variables._in_ParentsNamesInDataFetchStatus), asPrimitiveValue(model.variables._in_LocationInDataFetchStatus), asPrimitiveValue(model.variables._in_NameInDataFetchStatus), asPrimitiveValue(model.variables._in_AvatarImageURLInDataFetchStatus), asPrimitiveValue(model.variables._in_InitialsListInDataFetchStatus), asPrimitiveValue(model.variables._in_Type_UpdateFeedItemInDataFetchStatus), asPrimitiveValue(model.variables._showImageInDataFetchStatus), asPrimitiveValue(model.variables.showImageIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnectLibrary.ConnectCorePatterns.Update_ListItem.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectCorePatterns.Update_ListItem.mvc$debugger", "UBTConnectLibrary.controller$GetBackgroundColor_IsRead", "UBTConnectLibrary.controller$Get_BackgroundColor_Avatar_UpdateItem", "UBTConnectLibrary.controller$Get_FontColor_Avatar_UpdateItem", "UBTConnectLibrary.model$TextGenderIdentifierRecordList", "UBTConnectLibrary.controller$Get_FontColor_Tag_UpdateItem", "UBTConnectLibrary.controller$Get_BackgroundColor_Tag_UpdateItem", "UBTConnectLibrary.model$WeekdayLabelTypeRec", "UBTConnectLibrary.controller$FormatConnectDate_WithYear", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ContextMenuOptionsRec", "UBTConnectLibrary.model$TextBooleanRecord", "UBTConnectLibrary.model$TextBoolean1Record"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectCorePatterns_Update_ListItem_mvc_Debugger) {
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

Controller.prototype.onClick$Action = function () {
return Promise.resolve();
};
Controller.prototype.event_SendGift$Action = function () {
return Promise.resolve();
};
Controller.prototype.event_MarkAsRead$Action = function () {
return Promise.resolve();
};
Controller.prototype.event_Share$Action = function () {
return Promise.resolve();
};
Controller.prototype.event_MarkAsUnread$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:7WP6eMpZLUWcKuZ3c_pmbg:/NRWebFlows.7WP6eMpZLUWcKuZ3c_pmbg:oyDD4nRcBfstlKKpUR3Bug", "UBTConnectLibrary", "ConnectCorePatterns", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:WyoxDD+5y0SxB_pXK1fPOg:/NRWebFlows.7WP6eMpZLUWcKuZ3c_pmbg/NodesShownInESpaceTree.WyoxDD+5y0SxB_pXK1fPOg:jGm7ES3VtAh0me_AQIFI9Q", "UBTConnectLibrary", "Update_ListItem", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:WyoxDD+5y0SxB_pXK1fPOg", callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:7WP6eMpZLUWcKuZ3c_pmbg", callContext.id);
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

define("UBTConnectLibrary.ConnectCorePatterns.Update_ListItem.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"67VIkiO4YUmXH2qWj+sW9Q": {
getter: function (varBag, idService) {
return varBag.model.variables.mainContainerClassVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"bksGvm1FykingoBc6Y2sGg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_Type_UpdateFeedItemIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"n6erE8E5yE2Ge1A9_k_OCQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_AvatarImageURLIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"5wAqATrTmEqGC4CPTjiPbQ": {
getter: function (varBag, idService) {
return varBag.model.variables.showImageIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"5aBb3+58O0+iqjYfqDdM5Q": {
getter: function (varBag, idService) {
return varBag.model.variables.in_InitialsListIn;
}
},
"X21XWeWycUCffxg6FUSoDw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_NameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"3oEHgcQBzU6j2FJkYvcQGw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_DateIn;
},
dataType: OS.DataTypes.DataTypes.Date
},
"peY4PmUNYk+HXWaIpYgEnw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_LocationIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"GTqBcRMiN0eXpDOWDm7uKg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsReadIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"7dX3BXtZQUy_TeTicSJfIg": {
getter: function (varBag, idService) {
return varBag.model.variables.isEnabledIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"le0IW6_ER0CJuxb4at9OrA": {
getter: function (varBag, idService) {
return varBag.model.variables.hasBorderBottomIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"14R80axlcUKMthxP6b+qlw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ParentsNamesIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"JgFqUZWUX0G7vW7yzbDqEA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_BirthTypeIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"8igeqmbL0EOGsxR+TVgWsw": {
getter: function (varBag, idService) {
return varBag.model.variables.paddingSizeIdIn;
}
},
"+gnT2b7pk0SG3U8ldxJrag": {
getter: function (varBag, idService) {
return varBag.model.variables.ignoreReadBackgroundIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"FtXS2IfWkUqIBcV_UfgEpw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HasShareIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"w4XxBqzKZUqMsN7xjjuC9g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"ekEp_ap_vUGs0CyStPK6Mg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"Y9M6uMU4_Eqtfjq+tG7R6w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Update_Visual"));
})(varBag.model, idService);
}
},
"h0H8RDn6V0a_nVXSp1ZOjA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BirthOfTwins"));
})(varBag.model, idService);
}
},
"Wa3_o_4AfUKJD13a1MvtKA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasImageURL"));
})(varBag.model, idService);
}
},
"YSNOSGXOnUCbjgr1Q5pi1g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Middle"));
})(varBag.model, idService);
}
},
"7DlbOvd5UE6kPuDG69ObIQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Update_Name"));
})(varBag.model, idService);
}
},
"Bq8ni6f_Nke7QQ7j0uq1yg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Update_Location"));
})(varBag.model, idService);
}
},
"EbIqqJkEkkurccl4wTURxQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"31s_PTLNi0uDfoVrGiatDQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Update_TypeAndDate"));
})(varBag.model, idService);
}
},
"m_5BNrXM7kKMv+iPJR3w2Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"9DljvY7uL0m5NNFxjI1wsg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TypeAndDate_Type"));
})(varBag.model, idService);
}
},
"FoR2CaUbH0ynp4+6DVQcFw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"ZuPxJ7S9MkW650EyMp6_6Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"Pw1HPkXHx0m+ZsA9IieArw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"Y82S0_ALpkaWlCoNOOgzWg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Update_Name2"));
})(varBag.model, idService);
}
},
"us8VtnsMYkazie_8ZDXyIQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Update_Location2"));
})(varBag.model, idService);
}
},
"yi89GYDGjk+PYAfrqpGhqQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"e4Ec6Bgnxk+2tHOkC7B0sg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Update_TypeAndDate2"));
})(varBag.model, idService);
}
},
"wgNY6lDMcEKQyQz30EP1vw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"jjfsvCv3PEGYSYVYduC_sQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TypeAndDate_Type2"));
})(varBag.model, idService);
}
},
"W2tFEhBzJ0uIfAxKCqsLcg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"vp8LX0z94EKwBP_rnyDK8A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
