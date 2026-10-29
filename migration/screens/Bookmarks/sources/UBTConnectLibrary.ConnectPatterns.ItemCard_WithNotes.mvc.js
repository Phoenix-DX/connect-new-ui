define("UBTConnectLibrary.ConnectPatterns.ItemCard_WithNotes.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$model", "UBTConnectLibrary.ConnectPatterns.AvatarImage.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnectLibrary.ConnectPatterns.LazyImage.mvc$model", "UBTConnectLibrary.controller$PreetyFormatDate", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$ImageBorderOptionsRec"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel, UBTConnectLibrary_ConnectPatterns_AvatarImage_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel, UBTConnectLibrary_ConnectPatterns_IconText_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, UBTConnectLibrary_ConnectPatterns_LazyImage_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("In_Title", "in_TitleIn", "In_Title", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_TitleInDataFetchStatus", "_in_TitleInDataFetchStatus", "_in_TitleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_Subtitle", "in_SubtitleIn", "In_Subtitle", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_SubtitleInDataFetchStatus", "_in_SubtitleInDataFetchStatus", "_in_SubtitleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_TotalNotes", "in_TotalNotesIn", "In_TotalNotes", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_TotalNotesInDataFetchStatus", "_in_TotalNotesInDataFetchStatus", "_in_TotalNotesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_Label", "in_LabelIn", "In_Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_LabelInDataFetchStatus", "_in_LabelInDataFetchStatus", "_in_LabelInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("AvatarImage", "avatarImageIn", "AvatarImage", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.AvatarImageRec());
}, false, UBTConnectLibraryModel.AvatarImageRec), 
this.attr("_avatarImageInDataFetchStatus", "_avatarImageInDataFetchStatus", "_avatarImageInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_SearchString", "in_SearchStringIn", "In_SearchString", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_SearchStringInDataFetchStatus", "_in_SearchStringInDataFetchStatus", "_in_SearchStringInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ChannelName", "in_ChannelNameIn", "In_ChannelName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_ChannelNameInDataFetchStatus", "_in_ChannelNameInDataFetchStatus", "_in_ChannelNameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ChannelLogo", "in_ChannelLogoIn", "In_ChannelLogo", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_ChannelLogoInDataFetchStatus", "_in_ChannelLogoInDataFetchStatus", "_in_ChannelLogoInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_PublishedAt", "in_PublishedAtIn", "In_PublishedAt", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, false), 
this.attr("_in_PublishedAtInDataFetchStatus", "_in_PublishedAtInDataFetchStatus", "_in_PublishedAtInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = ((((((UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_AvatarImage_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_IconText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_LazyImage_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_Title" in inputs) {
this.variables.in_TitleIn = inputs.In_Title;
if("_in_TitleInDataFetchStatus" in inputs) {
this.variables._in_TitleInDataFetchStatus = inputs._in_TitleInDataFetchStatus;
}

}

if("In_Subtitle" in inputs) {
this.variables.in_SubtitleIn = inputs.In_Subtitle;
if("_in_SubtitleInDataFetchStatus" in inputs) {
this.variables._in_SubtitleInDataFetchStatus = inputs._in_SubtitleInDataFetchStatus;
}

}

if("In_TotalNotes" in inputs) {
this.variables.in_TotalNotesIn = inputs.In_TotalNotes;
if("_in_TotalNotesInDataFetchStatus" in inputs) {
this.variables._in_TotalNotesInDataFetchStatus = inputs._in_TotalNotesInDataFetchStatus;
}

}

if("In_Label" in inputs) {
this.variables.in_LabelIn = inputs.In_Label;
if("_in_LabelInDataFetchStatus" in inputs) {
this.variables._in_LabelInDataFetchStatus = inputs._in_LabelInDataFetchStatus;
}

}

if("AvatarImage" in inputs) {
this.variables.avatarImageIn = inputs.AvatarImage;
if("_avatarImageInDataFetchStatus" in inputs) {
this.variables._avatarImageInDataFetchStatus = inputs._avatarImageInDataFetchStatus;
}

}

if("In_SearchString" in inputs) {
this.variables.in_SearchStringIn = inputs.In_SearchString;
if("_in_SearchStringInDataFetchStatus" in inputs) {
this.variables._in_SearchStringInDataFetchStatus = inputs._in_SearchStringInDataFetchStatus;
}

}

if("In_ChannelName" in inputs) {
this.variables.in_ChannelNameIn = inputs.In_ChannelName;
if("_in_ChannelNameInDataFetchStatus" in inputs) {
this.variables._in_ChannelNameInDataFetchStatus = inputs._in_ChannelNameInDataFetchStatus;
}

}

if("In_ChannelLogo" in inputs) {
this.variables.in_ChannelLogoIn = inputs.In_ChannelLogo;
if("_in_ChannelLogoInDataFetchStatus" in inputs) {
this.variables._in_ChannelLogoInDataFetchStatus = inputs._in_ChannelLogoInDataFetchStatus;
}

}

if("In_PublishedAt" in inputs) {
this.variables.in_PublishedAtIn = inputs.In_PublishedAt;
if("_in_PublishedAtInDataFetchStatus" in inputs) {
this.variables._in_PublishedAtInDataFetchStatus = inputs._in_PublishedAtInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "ConnectPatterns.ItemCard_WithNotes");
});
define("UBTConnectLibrary.ConnectPatterns.ItemCard_WithNotes.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.ItemCard_WithNotes.mvc$model", "UBTConnectLibrary.ConnectPatterns.ItemCard_WithNotes.mvc$controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "UBTConnectLibrary.ConnectPatterns.AvatarImage.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.ConnectPatterns.LazyImage.mvc$view", "UBTConnectLibrary.controller$PreetyFormatDate", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$ImageBorderOptionsRec"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_ItemCard_WithNotes_mvc_model, UBTConnectLibrary_ConnectPatterns_ItemCard_WithNotes_mvc_controller, UBTConnectLibraryClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_ConnectPatterns_AvatarImage_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectPatterns_LazyImage_mvc_view) {
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
        View.displayName = "ConnectPatterns.ItemCard_WithNotes";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_ConnectPatterns_AvatarImage_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectPatterns_LazyImage_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectPatterns_ItemCard_WithNotes_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectPatterns_ItemCard_WithNotes_mvc_controller;
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
Options: model.getCachedValue(idService.getId("Rg+kJ_UDrU+o4i3PPLdy+w.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.backgroundAttr = function () {
var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
rec.backgroundColorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral0;
return rec;
}();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.horizontalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.base;
rec.topSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.base;
rec.bottomSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.small;
return rec;
}();
rec.borderOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.BorderOptionsRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral3;
rec.sizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.generalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.small;
return rec;
}();
rec.radiusAttr = function () {
var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
rec.generalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Shape.medium;
return rec;
}();
return rec;
}();
rec.displayOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
rec.displayAttr = UBTConnectLibraryModel.staticEntities.uBT_Display.flex;
rec.flexDirectionAttr = UBTConnectLibraryModel.staticEntities.uBT_FlexDirection.column;
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
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("6RUwR21Q1U+SYI2FCtGGNQ.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.bottomSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.small;
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
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("Y8PVsNsDO0qcc+eGegFmbw.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.displayOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
rec.displayAttr = UBTConnectLibraryModel.staticEntities.uBT_Display.flex;
rec.alignItemsAttr = UBTConnectLibraryModel.staticEntities.uBT_AlignItems.center;
rec.justifyContentAttr = UBTConnectLibraryModel.staticEntities.uBT_JustifyContent.spaceBetween;
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
uuid: "2",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
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
uuid: "3",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: PlaceholderContent.Empty
},
_dependencies: []
})];
})
},
_dependencies: []
}), React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
inputs: {
ColumnOptions: model.getCachedValue(idService.getId("PPHAhUHQjUC2OlWwBrYivw.ColumnOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
rec.columnBehaviourAttr = UBTConnectLibraryModel.staticEntities.uBT_ColumnBehaviour.reduceLast;
rec.columnSizesAttr = function () {
var rec = new UBTConnectLibraryModel.IntegerIntegerIntegerRecord();
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
uuid: "4",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
left: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("vQ3d682oxUSjDbCTjnkDew.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.displayOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
rec.displayAttr = UBTConnectLibraryModel.staticEntities.uBT_Display.inlineFlex;
rec.alignItemsAttr = UBTConnectLibraryModel.staticEntities.uBT_AlignItems.center;
return rec;
}();
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "BasePatterns/CustomContainer Clicked");
controller.onClickItemCard$Action(controller.callContext(eventHandlerContext));
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
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_AvatarImage_mvc_view, {
inputs: {
In_SizeId: UBTConnectLibraryModel.staticEntities.uBT_AvatarSize.doubleExtraSmall_20,
In_BorderRadius: UBTConnectLibraryModel.staticEntities.uBT_Shape.circle,
In_AvatarImage: model.getCachedValue(idService.getId("0T7ySWo_W0KsMIuvsmCHDw.In_AvatarImage"), function () {
return function () {
var rec = new UBTConnectLibraryModel.AvatarImageRec();
rec.uRLAttr = model.variables.avatarImageIn.uRLAttr;
rec.fallbackOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.AvatarImageFallbackoptionsRec();
rec.initialsAttr = model.variables.avatarImageIn.fallbackOptionsAttr.initialsAttr;
rec.sVGAttr = model.variables.avatarImageIn.fallbackOptionsAttr.sVGAttr;
rec.iconIdAttr = model.variables.avatarImageIn.fallbackOptionsAttr.iconIdAttr;
rec.backgroundColorAttr = ((((model.variables.avatarImageIn.fallbackOptionsAttr.initialsAttr) !== (""))) ? (UBTConnectLibraryModel.staticEntities.uBT_Color.cyanDark) : (UBTConnectLibraryModel.staticEntities.uBT_Color.neutral0));
rec.fontColorAttr = ((((model.variables.avatarImageIn.fallbackOptionsAttr.initialsAttr) !== (""))) ? (UBTConnectLibraryModel.staticEntities.uBT_Color.neutral0) : (UBTConnectLibraryModel.staticEntities.uBT_Color.neutral10));
rec.borderColorAttr = ((((model.variables.avatarImageIn.fallbackOptionsAttr.initialsAttr) !== (""))) ? (UBTConnectLibraryModel.staticEntities.uBT_Color.neutral5) : (UBTConnectLibraryModel.staticEntities.uBT_Color.neutral0));
rec.borderSizeAttr = ((((model.variables.avatarImageIn.fallbackOptionsAttr.initialsAttr) !== (""))) ? (UBTConnectLibraryModel.staticEntities.uBT_Size.small) : (model.variables.avatarImageIn.fallbackOptionsAttr.borderSizeAttr));
return rec;
}();
return rec;
}();
}, function () {
return model.variables.avatarImageIn.uRLAttr;
}, function () {
return model.variables.avatarImageIn.fallbackOptionsAttr.initialsAttr;
}, function () {
return model.variables.avatarImageIn.fallbackOptionsAttr.sVGAttr;
}, function () {
return model.variables.avatarImageIn.fallbackOptionsAttr.iconIdAttr;
}, function () {
return model.variables.avatarImageIn.fallbackOptionsAttr.borderSizeAttr;
}),
_in_AvatarImageInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._avatarImageInDataFetchStatus)
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
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_HighlightOptions: model.getCachedValue(idService.getId("FmV3TnCvN0qHY4w4nxq+CA.In_HighlightOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.primary;
rec.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
In_Text: model.variables.in_LabelIn,
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_LabelInDataFetchStatus),
In_TextOptions: model.getCachedValue(idService.getId("FmV3TnCvN0qHY4w4nxq+CA.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral10;
rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.extraSmall;
rec.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
In_HighlightWords: model.getCachedValue(idService.getId("FmV3TnCvN0qHY4w4nxq+CA.In_HighlightWords"), function () {
return ((((model.variables.in_SearchStringIn) !== (""))) ? (model.variables.in_SearchStringIn) : (""));
}, function () {
return model.variables.in_SearchStringIn;
}),
_in_HighlightWordsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SearchStringInDataFetchStatus),
In_PaddingOptions: model.getCachedValue(idService.getId("FmV3TnCvN0qHY4w4nxq+CA.In_PaddingOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.leftSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.extraSmall;
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
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_SearchStringIn), asPrimitiveValue(model.variables.in_LabelIn), asPrimitiveValue(model.variables._in_SearchStringInDataFetchStatus), asPrimitiveValue(model.variables._in_LabelInDataFetchStatus), asPrimitiveValue(model.variables._avatarImageInDataFetchStatus), asPrimitiveValue(model.variables.avatarImageIn.fallbackOptionsAttr.borderSizeAttr), asPrimitiveValue(model.variables.avatarImageIn.fallbackOptionsAttr.iconIdAttr), asPrimitiveValue(model.variables.avatarImageIn.fallbackOptionsAttr.sVGAttr), asPrimitiveValue(model.variables.avatarImageIn.fallbackOptionsAttr.initialsAttr), asPrimitiveValue(model.variables.avatarImageIn.uRLAttr)]
})];
}),
right: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("1NKpWyENwk+SZEtPRzFfPw.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.displayOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
rec.displayAttr = UBTConnectLibraryModel.staticEntities.uBT_Display.flex;
rec.alignItemsAttr = UBTConnectLibraryModel.staticEntities.uBT_AlignItems.flexEnd;
rec.flexDirectionAttr = UBTConnectLibraryModel.staticEntities.uBT_FlexDirection.row;
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
uuid: "8",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
inputs: {
SpacingSize: UBTConnectLibraryModel.staticEntities.uBT_Size.extraSmall,
Text: model.getCachedValue(idService.getId("63CVZCH8AEqnjAF6SUK4+A.Text"), function () {
return (((OS.BuiltinFunctions.textToInteger(model.variables.in_TotalNotesIn) === 0)) ? ("") : ((((OS.BuiltinFunctions.textToInteger(model.variables.in_TotalNotesIn) > 9)) ? ("9+") : (model.variables.in_TotalNotesIn))));
}, function () {
return model.variables.in_TotalNotesIn;
}),
_textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_TotalNotesInDataFetchStatus),
TextOptions: model.getCachedValue(idService.getId("63CVZCH8AEqnjAF6SUK4+A.TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral7;
rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.doubleExtraSmall;
rec.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
IsIconOnRight: false
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/IconText Clicked");
controller.onClickTotalNotesIcon$Action(controller.callContext(eventHandlerContext));
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
uuid: "9",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_SizeId: UBTConnectLibraryModel.staticEntities.uBT_IconSize.nonStandard_16,
In_IconId: UBTConnectLibraryModel.staticEntities.uBT_Icons.listAltFill,
In_ColorId: UBTConnectLibraryModel.staticEntities.uBT_Color.neutral7
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
_dependencies: []
})];
})
},
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables._in_TotalNotesInDataFetchStatus), asPrimitiveValue(model.variables.in_TotalNotesIn)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_TotalNotesIn), asPrimitiveValue(model.variables.in_SearchStringIn), asPrimitiveValue(model.variables.in_LabelIn), asPrimitiveValue(model.variables._in_TotalNotesInDataFetchStatus), asPrimitiveValue(model.variables._in_SearchStringInDataFetchStatus), asPrimitiveValue(model.variables._in_LabelInDataFetchStatus), asPrimitiveValue(model.variables._avatarImageInDataFetchStatus), asPrimitiveValue(model.variables.avatarImageIn.fallbackOptionsAttr.borderSizeAttr), asPrimitiveValue(model.variables.avatarImageIn.fallbackOptionsAttr.iconIdAttr), asPrimitiveValue(model.variables.avatarImageIn.fallbackOptionsAttr.sVGAttr), asPrimitiveValue(model.variables.avatarImageIn.fallbackOptionsAttr.initialsAttr), asPrimitiveValue(model.variables.avatarImageIn.uRLAttr)]
}), $if(((((model.variables.in_ChannelNameIn) !== ("")) && ((model.variables.in_ChannelLogoIn) !== (""))) && !(model.variables.in_PublishedAtIn.equals(OS.BuiltinFunctions.nullDate()))), false, this, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
inputs: {
ColumnOptions: model.getCachedValue(idService.getId("ewV3eH4tcEm3LU+u0a8EUg.ColumnOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
rec.columnBehaviourAttr = UBTConnectLibraryModel.staticEntities.uBT_ColumnBehaviour.reduceFirst;
rec.spacingSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.base;
rec.verticalAlignAttr = UBTConnectLibraryModel.staticEntities.uBT_VerticalAlign.center;
return rec;
}();
}),
ExtendedClasses: "margin-top-s"
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
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
left: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_LazyImage_mvc_view, {
inputs: {
ImageURL: model.variables.in_ChannelLogoIn,
_imageURLInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ChannelLogoInDataFetchStatus),
FallbackOptions: model.getCachedValue(idService.getId("0a95I5lCIE+r3aWRyvqGFA.FallbackOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.AvatarImageFallbackoptionsRec();
return rec;
}();
}),
In_ImageSize: model.getCachedValue(idService.getId("0a95I5lCIE+r3aWRyvqGFA.In_ImageSize"), function () {
return function () {
var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
rec.heightAttr = UBTConnectLibraryModel.staticEntities.uBT_ImageSize.base_52;
rec.widthAttr = UBTConnectLibraryModel.staticEntities.uBT_ImageSize.fullHeight_100_Percent;
return rec;
}();
}),
ExtendedClass: "ubt-avatar-image"
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
alias: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
right: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_HighlightOptions: model.getCachedValue(idService.getId("GcwvzwyTGkq3NjCgbJqsuA.In_HighlightOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.primary;
rec.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
In_HighlightWords: model.getCachedValue(idService.getId("GcwvzwyTGkq3NjCgbJqsuA.In_HighlightWords"), function () {
return ((((model.variables.in_SearchStringIn) !== (""))) ? (model.variables.in_SearchStringIn) : (""));
}, function () {
return model.variables.in_SearchStringIn;
}),
_in_HighlightWordsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SearchStringInDataFetchStatus),
In_Text: model.variables.in_ChannelNameIn,
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ChannelNameInDataFetchStatus),
In_TextOptions: model.getCachedValue(idService.getId("GcwvzwyTGkq3NjCgbJqsuA.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.small;
rec.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.semiBold;
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
controller.onClickItemCard$Action(controller.callContext(eventHandlerContext));
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
uuid: "13",
alias: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_Text: model.getCachedValue(idService.getId("uMnXOhm+pUWIDrwjOUVZkQ.In_Text"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.preetyFormatDate$Action(model.variables.in_PublishedAtIn, callContext).prettyDateOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.in_PublishedAtIn;
}),
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_PublishedAtInDataFetchStatus),
In_TextOptions: model.getCachedValue(idService.getId("uMnXOhm+pUWIDrwjOUVZkQ.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral7;
rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.extraSmall;
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
controller.onClickItemCard$Action(controller.callContext(eventHandlerContext));
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
uuid: "14",
alias: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_PublishedAtIn), asPrimitiveValue(model.variables.in_ChannelNameIn), asPrimitiveValue(model.variables.in_SearchStringIn), asPrimitiveValue(model.variables._in_PublishedAtInDataFetchStatus), asPrimitiveValue(model.variables._in_ChannelNameInDataFetchStatus), asPrimitiveValue(model.variables._in_SearchStringInDataFetchStatus), asPrimitiveValue(model.variables._in_ChannelLogoInDataFetchStatus), asPrimitiveValue(model.variables.in_ChannelLogoIn)]
})];
}, function () {
return [];
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("SpIWXDLDBkibGfB+fv8Kiw.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.marginSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
return rec;
}();
return rec;
}();
}),
ExtendedClasses: "margin-top-s"
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
uuid: "15",
alias: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_HighlightWords: model.getCachedValue(idService.getId("1RoFs2X_MkKNksm_DApxrA.In_HighlightWords"), function () {
return ((((model.variables.in_SearchStringIn) !== (""))) ? (model.variables.in_SearchStringIn) : (""));
}, function () {
return model.variables.in_SearchStringIn;
}),
_in_HighlightWordsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SearchStringInDataFetchStatus),
In_HighlightOptions: model.getCachedValue(idService.getId("1RoFs2X_MkKNksm_DApxrA.In_HighlightOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.primary;
rec.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
In_TextOptions: model.getCachedValue(idService.getId("1RoFs2X_MkKNksm_DApxrA.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.small;
rec.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
In_Text: model.variables.in_TitleIn,
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_TitleInDataFetchStatus)
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
controller.onClickItemCard$Action(controller.callContext(eventHandlerContext));
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
uuid: "16",
alias: "17"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_Text: model.variables.in_SubtitleIn,
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SubtitleInDataFetchStatus),
In_TextOptions: model.getCachedValue(idService.getId("nrGn51OV60KxVH0SlUZ7xg.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral7;
rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.extraSmall;
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
controller.onClickItemCard$Action(controller.callContext(eventHandlerContext));
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
uuid: "17",
alias: "18"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_SubtitleIn), asPrimitiveValue(model.variables.in_TitleIn), asPrimitiveValue(model.variables._in_SubtitleInDataFetchStatus), asPrimitiveValue(model.variables._in_TitleInDataFetchStatus), asPrimitiveValue(model.variables._in_SearchStringInDataFetchStatus), asPrimitiveValue(model.variables.in_SearchStringIn)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_SubtitleIn), asPrimitiveValue(model.variables.in_TitleIn), asPrimitiveValue(model.variables.in_PublishedAtIn), asPrimitiveValue(model.variables.in_ChannelLogoIn), asPrimitiveValue(model.variables.in_ChannelNameIn), asPrimitiveValue(model.variables.in_TotalNotesIn), asPrimitiveValue(model.variables.in_SearchStringIn), asPrimitiveValue(model.variables.in_LabelIn), asPrimitiveValue(model.variables._in_SubtitleInDataFetchStatus), asPrimitiveValue(model.variables._in_TitleInDataFetchStatus), asPrimitiveValue(model.variables._in_PublishedAtInDataFetchStatus), asPrimitiveValue(model.variables._in_ChannelLogoInDataFetchStatus), asPrimitiveValue(model.variables._in_ChannelNameInDataFetchStatus), asPrimitiveValue(model.variables._in_TotalNotesInDataFetchStatus), asPrimitiveValue(model.variables._in_SearchStringInDataFetchStatus), asPrimitiveValue(model.variables._in_LabelInDataFetchStatus), asPrimitiveValue(model.variables._avatarImageInDataFetchStatus), asPrimitiveValue(model.variables.avatarImageIn.fallbackOptionsAttr.borderSizeAttr), asPrimitiveValue(model.variables.avatarImageIn.fallbackOptionsAttr.iconIdAttr), asPrimitiveValue(model.variables.avatarImageIn.fallbackOptionsAttr.sVGAttr), asPrimitiveValue(model.variables.avatarImageIn.fallbackOptionsAttr.initialsAttr), asPrimitiveValue(model.variables.avatarImageIn.uRLAttr)]
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("JcVaAn4NukqNDTYe6HL+mw.Options"), function () {
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
uuid: "18",
alias: "19"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.notes,
_idProps: {
service: idService,
name: "Notes"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
}
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
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
uuid: "20",
alias: "20"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.actions,
style: "bookmark_note_card__actions",
_idProps: {
service: idService,
name: "Actions"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
}
})];
})
}
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnectLibrary.ConnectPatterns.ItemCard_WithNotes.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectPatterns.ItemCard_WithNotes.mvc$debugger", "UBTConnectLibrary.controller$PreetyFormatDate", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$ImageBorderOptionsRec"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectPatterns_ItemCard_WithNotes_mvc_Debugger) {
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

Controller.prototype.onClickTotalNotesIcon$Action = function () {
return Promise.resolve();
};
Controller.prototype.onClickItemCard$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g:Y06DhYqVkffzqTnycnKUGw", "UBTConnectLibrary", "ConnectPatterns", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:Rrbeeg6J_keHbxIvVuEVng:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree.Rrbeeg6J_keHbxIvVuEVng:pslIJoTZHl2G5sSJ3uDzTw", "UBTConnectLibrary", "ItemCard_WithNotes", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:Rrbeeg6J_keHbxIvVuEVng", callContext.id);
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

define("UBTConnectLibrary.ConnectPatterns.ItemCard_WithNotes.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"QQk7nlZ0iU6pqTMzhXwHjg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_TitleIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"UMhymwqIWkSz3iBWdQRZFg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_SubtitleIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"WhwqSQMK3kWZUzQ6GeClMg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_TotalNotesIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"0h3zd7at4UyXt3aacKMsmg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_LabelIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"GNbeg7Jngk+20ppNOOXPGA": {
getter: function (varBag, idService) {
return varBag.model.variables.avatarImageIn;
}
},
"BfuEXghfMEir2Jy7SxYpEA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_SearchStringIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"JvSIxGc3tESeeinV1sLBGA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ChannelNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"o6Ti+qM+3kC0G+gmpxLpAg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ChannelLogoIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"EBRZ1SCLJUifoSGBBSRtBw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_PublishedAtIn;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"qu371+aLRUOJMk3oS3P5Ew": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"R3CVIn3swEiVaRIux9B+0Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"68YenXOTEk214sRyrCkbpA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"Rfd2C5jv10modmORfkTslw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"e5yFMbQxg0ahU9KM5Br9Zg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"wBn7STqyUUmfviAh4osu4Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"Wr9ptV1JTEWA8sWoUTtqUw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"GW6lOWAPFECsbTKltaJMNA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"zN83lh7vg0OZ4EJAbh466Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"UCKMXb8Qe0K4y9eYmVf0iw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"d2FasCpGr06t+fOB51VTYw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"CRFoRlq3tUKZvHxdeU5pWw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"OLpYJ+Dsi0CDNcX4FNFTbQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"4tCWshFrr0WjdmFgg6w3_Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Notes"));
})(varBag.model, idService);
}
},
"qGI9Ymgrq0yVDjTrDWM4dQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"L7Iz_fdvnkajRqf7dj3Wmg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Actions"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
