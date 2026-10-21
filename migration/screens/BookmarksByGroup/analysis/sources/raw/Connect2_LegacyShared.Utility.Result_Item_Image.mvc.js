define("Connect2_LegacyShared.Utility.Result_Item_Image.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.controller$GetCacheableSignedPhotoURL"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Last_Bucket", "last_BucketVar", "Last_Bucket", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("Last_Path", "last_PathVar", "Last_Path", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("Last_Type", "last_TypeVar", "Last_Type", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("Last_SignedURL", "last_SignedURLVar", "Last_SignedURL", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("In_ShowDescription", "in_ShowDescriptionIn", "In_ShowDescription", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_ShowDescriptionInDataFetchStatus", "_in_ShowDescriptionInDataFetchStatus", "_in_ShowDescriptionInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ShowPlaceholderForImage", "showPlaceholderForImageIn", "ShowPlaceholderForImage", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_showPlaceholderForImageInDataFetchStatus", "_showPlaceholderForImageInDataFetchStatus", "_showPlaceholderForImageInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ShowTag", "in_ShowTagIn", "In_ShowTag", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_ShowTagInDataFetchStatus", "_in_ShowTagInDataFetchStatus", "_in_ShowTagInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_HasAction", "in_HasActionIn", "In_HasAction", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_HasActionInDataFetchStatus", "_in_HasActionInDataFetchStatus", "_in_HasActionInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_IsRoundImage", "in_IsRoundImageIn", "In_IsRoundImage", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsRoundImageInDataFetchStatus", "_in_IsRoundImageInDataFetchStatus", "_in_IsRoundImageInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_BackgroundColor", "in_BackgroundColorIn", "In_BackgroundColor", true, false, OS.DataTypes.DataTypes.Text, function () {
return "var(--color-neutral-0)";
}, false), 
this.attr("_in_BackgroundColorInDataFetchStatus", "_in_BackgroundColorInDataFetchStatus", "_in_BackgroundColorInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_Diameter", "in_DiameterIn", "In_Diameter", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 70;
}, false), 
this.attr("_in_DiameterInDataFetchStatus", "_in_DiameterInDataFetchStatus", "_in_DiameterInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ResultType", "in_ResultTypeIn", "In_ResultType", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("_in_ResultTypeInDataFetchStatus", "_in_ResultTypeInDataFetchStatus", "_in_ResultTypeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_Bucket", "in_BucketIn", "In_Bucket", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_BucketInDataFetchStatus", "_in_BucketInDataFetchStatus", "_in_BucketInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_Path", "in_PathIn", "In_Path", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_PathInDataFetchStatus", "_in_PathInDataFetchStatus", "_in_PathInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_Type", "in_TypeIn", "In_Type", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_TypeInDataFetchStatus", "_in_TypeInDataFetchStatus", "_in_TypeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_SignedURL", "in_SignedURLIn", "In_SignedURL", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_SignedURLInDataFetchStatus", "_in_SignedURLInDataFetchStatus", "_in_SignedURLInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_HasPadding", "in_HasPaddingIn", "In_HasPadding", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("_in_HasPaddingInDataFetchStatus", "_in_HasPaddingInDataFetchStatus", "_in_HasPaddingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_HasBorder", "in_HasBorderIn", "In_HasBorder", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("_in_HasBorderInDataFetchStatus", "_in_HasBorderInDataFetchStatus", "_in_HasBorderInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_IsNavigationLoading", "in_IsNavigationLoadingIn", "In_IsNavigationLoading", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsNavigationLoadingInDataFetchStatus", "_in_IsNavigationLoadingInDataFetchStatus", "_in_IsNavigationLoadingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("CustomClass", "customClassIn", "CustomClass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_customClassInDataFetchStatus", "_customClassInDataFetchStatus", "_customClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("HtmlDataItem", "htmlDataItemIn", "HtmlDataItem", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_htmlDataItemInDataFetchStatus", "_htmlDataItemInDataFetchStatus", "_htmlDataItemInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ItemHeight", "itemHeightIn", "ItemHeight", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_itemHeightInDataFetchStatus", "_itemHeightInDataFetchStatus", "_itemHeightInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
return false;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_ShowDescription" in inputs) {
this.variables.in_ShowDescriptionIn = inputs.In_ShowDescription;
if("_in_ShowDescriptionInDataFetchStatus" in inputs) {
this.variables._in_ShowDescriptionInDataFetchStatus = inputs._in_ShowDescriptionInDataFetchStatus;
}

}

if("ShowPlaceholderForImage" in inputs) {
this.variables.showPlaceholderForImageIn = inputs.ShowPlaceholderForImage;
if("_showPlaceholderForImageInDataFetchStatus" in inputs) {
this.variables._showPlaceholderForImageInDataFetchStatus = inputs._showPlaceholderForImageInDataFetchStatus;
}

}

if("In_ShowTag" in inputs) {
this.variables.in_ShowTagIn = inputs.In_ShowTag;
if("_in_ShowTagInDataFetchStatus" in inputs) {
this.variables._in_ShowTagInDataFetchStatus = inputs._in_ShowTagInDataFetchStatus;
}

}

if("In_HasAction" in inputs) {
this.variables.in_HasActionIn = inputs.In_HasAction;
if("_in_HasActionInDataFetchStatus" in inputs) {
this.variables._in_HasActionInDataFetchStatus = inputs._in_HasActionInDataFetchStatus;
}

}

if("In_IsRoundImage" in inputs) {
this.variables.in_IsRoundImageIn = inputs.In_IsRoundImage;
if("_in_IsRoundImageInDataFetchStatus" in inputs) {
this.variables._in_IsRoundImageInDataFetchStatus = inputs._in_IsRoundImageInDataFetchStatus;
}

}

if("In_BackgroundColor" in inputs) {
this.variables.in_BackgroundColorIn = inputs.In_BackgroundColor;
if("_in_BackgroundColorInDataFetchStatus" in inputs) {
this.variables._in_BackgroundColorInDataFetchStatus = inputs._in_BackgroundColorInDataFetchStatus;
}

}

if("In_Diameter" in inputs) {
this.variables.in_DiameterIn = inputs.In_Diameter;
if("_in_DiameterInDataFetchStatus" in inputs) {
this.variables._in_DiameterInDataFetchStatus = inputs._in_DiameterInDataFetchStatus;
}

}

if("In_ResultType" in inputs) {
this.variables.in_ResultTypeIn = inputs.In_ResultType;
if("_in_ResultTypeInDataFetchStatus" in inputs) {
this.variables._in_ResultTypeInDataFetchStatus = inputs._in_ResultTypeInDataFetchStatus;
}

}

if("In_Bucket" in inputs) {
this.variables.in_BucketIn = inputs.In_Bucket;
if("_in_BucketInDataFetchStatus" in inputs) {
this.variables._in_BucketInDataFetchStatus = inputs._in_BucketInDataFetchStatus;
}

}

if("In_Path" in inputs) {
this.variables.in_PathIn = inputs.In_Path;
if("_in_PathInDataFetchStatus" in inputs) {
this.variables._in_PathInDataFetchStatus = inputs._in_PathInDataFetchStatus;
}

}

if("In_Type" in inputs) {
this.variables.in_TypeIn = inputs.In_Type;
if("_in_TypeInDataFetchStatus" in inputs) {
this.variables._in_TypeInDataFetchStatus = inputs._in_TypeInDataFetchStatus;
}

}

if("In_SignedURL" in inputs) {
this.variables.in_SignedURLIn = inputs.In_SignedURL;
if("_in_SignedURLInDataFetchStatus" in inputs) {
this.variables._in_SignedURLInDataFetchStatus = inputs._in_SignedURLInDataFetchStatus;
}

}

if("In_HasPadding" in inputs) {
this.variables.in_HasPaddingIn = inputs.In_HasPadding;
if("_in_HasPaddingInDataFetchStatus" in inputs) {
this.variables._in_HasPaddingInDataFetchStatus = inputs._in_HasPaddingInDataFetchStatus;
}

}

if("In_HasBorder" in inputs) {
this.variables.in_HasBorderIn = inputs.In_HasBorder;
if("_in_HasBorderInDataFetchStatus" in inputs) {
this.variables._in_HasBorderInDataFetchStatus = inputs._in_HasBorderInDataFetchStatus;
}

}

if("In_IsNavigationLoading" in inputs) {
this.variables.in_IsNavigationLoadingIn = inputs.In_IsNavigationLoading;
if("_in_IsNavigationLoadingInDataFetchStatus" in inputs) {
this.variables._in_IsNavigationLoadingInDataFetchStatus = inputs._in_IsNavigationLoadingInDataFetchStatus;
}

}

if("CustomClass" in inputs) {
this.variables.customClassIn = inputs.CustomClass;
if("_customClassInDataFetchStatus" in inputs) {
this.variables._customClassInDataFetchStatus = inputs._customClassInDataFetchStatus;
}

}

if("HtmlDataItem" in inputs) {
this.variables.htmlDataItemIn = inputs.HtmlDataItem;
if("_htmlDataItemInDataFetchStatus" in inputs) {
this.variables._htmlDataItemInDataFetchStatus = inputs._htmlDataItemInDataFetchStatus;
}

}

if("ItemHeight" in inputs) {
this.variables.itemHeightIn = inputs.ItemHeight;
if("_itemHeightInDataFetchStatus" in inputs) {
this.variables._itemHeightInDataFetchStatus = inputs._itemHeightInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Utility.Result_Item_Image");
});
define("Connect2_LegacyShared.Utility.Result_Item_Image.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.Utility.Result_Item_Image.mvc$model", "Connect2_LegacyShared.Utility.Result_Item_Image.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.controller$GetCacheableSignedPhotoURL"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, React, OSView, Connect2_LegacyShared_Utility_Result_Item_Image_mvc_model, Connect2_LegacyShared_Utility_Result_Item_Image_mvc_controller, Connect2_LegacySharedClientVariables, OSWidgets) {
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
        View.displayName = "Utility.Result_Item_Image";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_LegacyShared_Utility_Result_Item_Image_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_LegacyShared_Utility_Result_Item_Image_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: model.getCachedValue(idService.getId("Result_Item.style"), function () {
return ((model.variables.in_IsNavigationLoadingIn) ? ("") : ((("background-color: " + model.variables.in_BackgroundColorIn) + ";")));
}, function () {
return model.variables.in_IsNavigationLoadingIn;
}, function () {
return model.variables.in_BackgroundColorIn;
}),
className: model.getCachedValue(idService.getId("Result_Item.class"), function () {
return (((("image-item result-item " + ((model.variables.in_HasPaddingIn) ? (" padding-y-m padding-x-base") : (" no-padding"))) + ((model.variables.in_HasBorderIn) ? (" border-bottom border-bottom-neutral-4") : (" no-border"))) + ((model.variables.in_IsNavigationLoadingIn) ? (" loading-item") : (""))) + ((((model.variables.customClassIn) !== (OS.BuiltinFunctions.nullTextIdentifier()))) ? ((" " + model.variables.customClassIn)) : (model.variables.customClassIn)));
}, function () {
return model.variables.in_HasPaddingIn;
}, function () {
return model.variables.in_HasBorderIn;
}, function () {
return model.variables.in_IsNavigationLoadingIn;
}, function () {
return model.variables.customClassIn;
}),
"data-item": model.variables.htmlDataItemIn
},
visible: true,
_idProps: {
service: idService,
name: "Result_Item"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "result-item-top-content",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Utility/Result_Item_Image/Container onclick");
return controller.onClick_Result_Item$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
gridProperties: {
classes: "OSInline"
},
style: "result-item_visual",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.showPlaceholderForImageIn, false, this, function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.imagePlaceholder,
_idProps: {
service: idService,
name: "ImagePlaceholder"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [$if(((model.variables.in_SignedURLIn) !== ("")), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: model.getCachedValue(idService.getId("52Ev2SDfrkCPWLZhJf82rQ.style"), function () {
return ((model.variables.in_IsRoundImageIn) ? ((((("width: " + (model.variables.in_DiameterIn).toString()) + "px; height: ") + (model.variables.in_DiameterIn).toString()) + "px;")) : (""));
}, function () {
return model.variables.in_IsRoundImageIn;
}, function () {
return model.variables.in_DiameterIn;
}),
className: model.getCachedValue(idService.getId("52Ev2SDfrkCPWLZhJf82rQ.class"), function () {
return ((model.variables.in_IsRoundImageIn) ? ("photo-cropper") : (""));
}, function () {
return model.variables.in_IsRoundImageIn;
})
},
style: "photo-cropper",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
extendedProperties: {
className: model.getCachedValue(idService.getId("Result_Item_Photo.class"), function () {
return ((model.variables.in_IsRoundImageIn) ? (" round-photo") : (""));
}, function () {
return model.variables.in_IsRoundImageIn;
}),
"data-error-placeholder-src": model.getCachedValue(idService.getId("Result_Item_Photo.data-error-placeholder-src"), function () {
return (((model.variables.in_ResultTypeIn === Connect2_LegacySharedModel.staticEntities.resultListType.subdivision)) ? (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.no_division_rectangle.png")) : (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.User_rectangle.png")));
}, function () {
return model.variables.in_ResultTypeIn;
})
},
style: "result-image",
type: /*External*/ 1,
url: model.variables.in_SignedURLIn,
_idProps: {
service: idService,
name: "Result_Item_Photo"
},
_widgetRecordProvider: widgetsRecordProvider,
url_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SignedURLInDataFetchStatus)
}))];
}, function () {
return [$if((model.variables.in_ResultTypeIn === Connect2_LegacySharedModel.staticEntities.resultListType.subdivision), false, this, function () {
return [React.createElement(OSWidgets.Image, {
extendedProperties: {
className: model.getCachedValue(idService.getId("Division_default_img.class"), function () {
return ((model.variables.in_IsRoundImageIn) ? ("result-image-round") : ("full-width"));
}, function () {
return model.variables.in_IsRoundImageIn;
}),
style: model.getCachedValue(idService.getId("Division_default_img.style"), function () {
return ((model.variables.in_IsRoundImageIn) ? ((((("width: " + (model.variables.in_DiameterIn).toString()) + "px; height: ") + (model.variables.in_DiameterIn).toString()) + "px;")) : (""));
}, function () {
return model.variables.in_IsRoundImageIn;
}, function () {
return model.variables.in_DiameterIn;
})
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.no_division_rectangle.png"),
style: "result-image full-",
type: /*Static*/ 0,
_idProps: {
service: idService,
name: "Division_default_img"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Image, {
extendedProperties: {
className: model.getCachedValue(idService.getId("Result_Item_Default_NoData.class"), function () {
return ((model.variables.in_IsRoundImageIn) ? ("result-image-round") : ("full-width"));
}, function () {
return model.variables.in_IsRoundImageIn;
}),
style: model.getCachedValue(idService.getId("Result_Item_Default_NoData.style"), function () {
return ((model.variables.in_IsRoundImageIn) ? ((((("width: " + (model.variables.in_DiameterIn).toString()) + "px; height: ") + (model.variables.in_DiameterIn).toString()) + "px;")) : (""));
}, function () {
return model.variables.in_IsRoundImageIn;
}, function () {
return model.variables.in_DiameterIn;
})
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.User_rectangle.png"),
style: "result-image full-width",
type: /*Static*/ 0,
_idProps: {
service: idService,
name: "Result_Item_Default_NoData"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})];
})];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "result-item_content",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Utility/Result_Item_Image/Result_Item_Text_Cont onclick");
return controller.onClick_Result_Item$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
extendedProperties: {
style: model.getCachedValue(idService.getId("Result_Item_Text_Cont.style"), function () {
return ((((model.variables.itemHeightIn) !== (""))) ? (((" min-height: " + model.variables.itemHeightIn) + ";")) : (""));
}, function () {
return model.variables.itemHeightIn;
})
},
style: "result-item_text-content",
visible: true,
_idProps: {
service: idService,
name: "Result_Item_Text_Cont"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.title_Placeholder,
_idProps: {
service: idService,
name: "Title_Placeholder"
},
_widgetRecordProvider: widgetsRecordProvider
}), $if(model.variables.in_ShowDescriptionIn, false, this, function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.description_Placeholder,
_idProps: {
service: idService,
name: "Description_Placeholder"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
}), $if(model.variables.in_ShowTagIn, false, this, function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.tag_Placeholder,
_idProps: {
service: idService,
name: "Tag_Placeholder"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
})), $if(model.variables.in_HasActionIn, false, this, function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.result_Item_Placeholder,
style: "result-item_placeholder",
_idProps: {
service: idService,
name: "Result_Item_Placeholder"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "result-item-bottom-content",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.bookmarkNote,
_idProps: {
service: idService,
name: "BookmarkNote"
},
_widgetRecordProvider: widgetsRecordProvider
}))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_LegacyShared.Utility.Result_Item_Image.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.languageResources", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.Utility.Result_Item_Image.mvc$debugger", "Connect2_LegacyShared.controller$GetCacheableSignedPhotoURL"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedLanguageResources, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_Utility_Result_Item_Image_mvc_Debugger) {
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
Controller.prototype._loadPhotoAsync$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("LoadPhotoAsync");
callContext = controller.callContext(callContext);
var getCacheableSignedPhotoURLVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getCacheableSignedPhotoURLVar = getCacheableSignedPhotoURLVar;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:RhPLYVOqdk+ooW0_z0+FlA:/NRWebFlows.gVAcruMrmEKn5YhRe8dMaw/NodesShownInESpaceTree.1lLB8KHwt0iwlT2za9umoQ/ClientActions.RhPLYVOqdk+ooW0_z0+FlA:ymxKm_JmSvSzJ2WKrhKiUQ", "Connect2_LegacyShared", "LoadPhotoAsync", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Or6DRVOsl06Ff_y_8Zag5w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:_eq5aBqMmUGRnMIH0T0zEw", callContext.id) && (model.variables.in_SignedURLIn === ""))) {
// Is image already signed?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:uugyEHKCIEijg4otsGB7jQ", callContext.id) && (((((model.variables.in_BucketIn === model.variables.last_BucketVar) && (model.variables.in_PathIn === model.variables.last_PathVar)) && (model.variables.in_TypeIn === model.variables.last_TypeVar)) && (model.variables.in_SignedURLIn === "")) && ((model.variables.last_SignedURLVar) !== (""))))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Z+re4uPfr0+CQQ6VTtK_Mw", callContext.id);
// In_SignedURL = Last_SignedURL
model.variables.in_SignedURLIn = model.variables.last_SignedURLVar;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:7HyNAJD9ikilbNN2dxCVVA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:hPVlRqur20GhZDiEMzP0_g", callContext.id);
// Execute Action: GetCacheableSignedPhotoURL
model.flush();
return Connect2_LegacySharedController.default.getCacheableSignedPhotoURL$Action(model.variables.in_BucketIn, model.variables.in_PathIn, model.variables.in_TypeIn, callContext).then(function (value) {
getCacheableSignedPhotoURLVar.value = value;
}).then(function () {
// Set Loaded Info
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:RKE9dG1id0yFiSZc5FXeOw", callContext.id);
// Last_Bucket = In_Bucket
model.variables.last_BucketVar = model.variables.in_BucketIn;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:RKE9dG1id0yFiSZc5FXeOw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Last_Path = In_Path
model.variables.last_PathVar = model.variables.in_PathIn;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:RKE9dG1id0yFiSZc5FXeOw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Last_Type = In_Type
model.variables.last_TypeVar = model.variables.in_TypeIn;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:RKE9dG1id0yFiSZc5FXeOw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// In_SignedURL = GetCacheableSignedPhotoURL.URL
model.variables.in_SignedURLIn = getCacheableSignedPhotoURLVar.value.uRLOut;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:RKE9dG1id0yFiSZc5FXeOw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// Last_SignedURL = In_SignedURL
model.variables.last_SignedURLVar = model.variables.in_SignedURLIn;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:dHSlWH8LMEaDcGTH9cWFxw", callContext.id);
});
}

});
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:dZun_oHmEUmU+PpTmIDxnw", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:RhPLYVOqdk+ooW0_z0+FlA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:RhPLYVOqdk+ooW0_z0+FlA", callContext.id);
throw ex;

});
};
Controller.prototype._onClick_Result_Item$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_Result_Item");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:G07luRXlp0CO3QDOnDW+nw:/NRWebFlows.gVAcruMrmEKn5YhRe8dMaw/NodesShownInESpaceTree.1lLB8KHwt0iwlT2za9umoQ/ClientActions.G07luRXlp0CO3QDOnDW+nw:l0PGEU30GamRxAueeMpPJg", "Connect2_LegacyShared", "OnClick_Result_Item", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:amQABVA_f06TcvjDjO42TA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:Lczy5SdvWU+NAvX5U9zi+Q", callContext.id);
// Trigger Event: OnClick_Item
return controller.onClick_Item$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:6d0CxPHn2UmxgWxXF01vQg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:G07luRXlp0CO3QDOnDW+nw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:G07luRXlp0CO3QDOnDW+nw", callContext.id);
throw ex;

});
};

Controller.prototype.loadPhotoAsync$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._loadPhotoAsync$Action, callContext);

};
Controller.prototype.onClick_Result_Item$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_Result_Item$Action, callContext);

};
Controller.prototype.onClick_Item$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:gVAcruMrmEKn5YhRe8dMaw:/NRWebFlows.gVAcruMrmEKn5YhRe8dMaw:y4OEvNt9FV7g_od25DYkmA", "Connect2_LegacyShared", "Utility", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:1lLB8KHwt0iwlT2za9umoQ:/NRWebFlows.gVAcruMrmEKn5YhRe8dMaw/NodesShownInESpaceTree.1lLB8KHwt0iwlT2za9umoQ:3IAy79Pew1_C53iwLKYi8Q", "Connect2_LegacyShared", "Result_Item_Image", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:1lLB8KHwt0iwlT2za9umoQ", callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:gVAcruMrmEKn5YhRe8dMaw", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Utility/Result_Item_Image On Ready");
return controller.loadPhotoAsync$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Utility/Result_Item_Image On Parameters Changed");
return controller.loadPhotoAsync$Action(callContext);

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
return Connect2_LegacySharedController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, Connect2_LegacySharedLanguageResources);
});

define("Connect2_LegacyShared.Utility.Result_Item_Image.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"hPVlRqur20GhZDiEMzP0_g": {
getter: function (varBag, idService) {
return varBag.getCacheableSignedPhotoURLVar.value;
}
},
"wwdgdv4cXE6csyackMyOeA": {
getter: function (varBag, idService) {
return varBag.model.variables.last_BucketVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"dOlB7TcHfECdR9q50PIrcg": {
getter: function (varBag, idService) {
return varBag.model.variables.last_PathVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"JMFEqJPi20qW7_SaCzJRaA": {
getter: function (varBag, idService) {
return varBag.model.variables.last_TypeVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"bl5sCmZNPEaxB5Y2jZ28yg": {
getter: function (varBag, idService) {
return varBag.model.variables.last_SignedURLVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"zv76OLFyBE6+ov9TCBptCA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ShowDescriptionIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"sr6sTR62SUiilhNNDKbebw": {
getter: function (varBag, idService) {
return varBag.model.variables.showPlaceholderForImageIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"k6ghYPsX706doyOFUdOqaQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ShowTagIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"fAJ3RzJwzU+RmsNFK1drlQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HasActionIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"oVWrCr_0bEa_yGi2MeA1Tw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsRoundImageIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"wTzIlSgMnUaSH3m2eu2tHw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_BackgroundColorIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"yh0B5qhVz0+8FgIsMHCKRQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_DiameterIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"lK6btTIEkEqYPCmlQR5RRg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ResultTypeIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"zEsPqwUWHUir3UftdXi2EQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_BucketIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"HiKltaivoEuVZiqA7Psfhg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_PathIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"4iqSl_Gmo0OWE620fAkwyw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_TypeIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"_6+_Jdxdgkm5kaad94bzkg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_SignedURLIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"As7vKB68lU2_rMSs+ef9mw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HasPaddingIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"LvJ9umaJQ0ed+mKaW0q5Ew": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HasBorderIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"jn0me9Qp4UmThxAXnlKVSg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsNavigationLoadingIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"nADV_pU70U+nZqMyU7qTlA": {
getter: function (varBag, idService) {
return varBag.model.variables.customClassIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"cUbDGQf1h0WM9KLboTP5+g": {
getter: function (varBag, idService) {
return varBag.model.variables.htmlDataItemIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"dVW8fQl8SESmJGtKn8XoIQ": {
getter: function (varBag, idService) {
return varBag.model.variables.itemHeightIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"+YNPsbwzm0mOP79oA_riAg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Result_Item"));
})(varBag.model, idService);
}
},
"Zfy1hsAUAEOv4akaEKGYqw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_ShowPlaceholderForImage"));
})(varBag.model, idService);
}
},
"p+HxBeFa4kSt_CGUPvAZzw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ImagePlaceholder"));
})(varBag.model, idService);
}
},
"l13ERcARu0yDgjKYZBHVbA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasSignedURL"));
})(varBag.model, idService);
}
},
"bw+wFv7uTUCKaGLH0fEQaQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Result_Item_Photo"));
})(varBag.model, idService);
}
},
"EO6dBBh0d0qk2l6emTIp9g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("IsSubdivision"));
})(varBag.model, idService);
}
},
"Yq96iL449UuimjHT83ZBWw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Division_default_img"));
})(varBag.model, idService);
}
},
"E0_0RzFvwkCrJVEkb3KPag": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Result_Item_Default_NoData"));
})(varBag.model, idService);
}
},
"xP7ECezxmEufroWuNknb_g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Result_Item_Text_Cont"));
})(varBag.model, idService);
}
},
"2MqTOtb1sEi1kTOtcVuu8Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title_Placeholder"));
})(varBag.model, idService);
}
},
"Q9wT7NtCJkiHCSY_ErXCuQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ShowDescription2"));
})(varBag.model, idService);
}
},
"qKX40vEzhEaKN_2kwz+2jw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Description_Placeholder"));
})(varBag.model, idService);
}
},
"aymgQyNS3US_2yAs5SAvWg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ShowTag2"));
})(varBag.model, idService);
}
},
"mA39cW1G70ug0xKAgl50uw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Tag_Placeholder"));
})(varBag.model, idService);
}
},
"aGNiwp364Uq_Lo5lfzz4wg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("IsToShowPlaceholder"));
})(varBag.model, idService);
}
},
"mG6UG5etfkmqzbO69l08gg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Result_Item_Placeholder"));
})(varBag.model, idService);
}
},
"0WmnmCYeK0uVvdmJjhqePg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BookmarkNote"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
