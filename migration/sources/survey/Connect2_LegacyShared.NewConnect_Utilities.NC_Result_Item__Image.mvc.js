define("Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Image.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.controller$GetCacheableSignedPhotoURL"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController) {
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
this.attr("ShowPlaceholderForImage", "showPlaceholderForImageIn", "ShowPlaceholderForImage", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_showPlaceholderForImageInDataFetchStatus", "_showPlaceholderForImageInDataFetchStatus", "_showPlaceholderForImageInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_IsRoundImage", "in_IsRoundImageIn", "In_IsRoundImage", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsRoundImageInDataFetchStatus", "_in_IsRoundImageInDataFetchStatus", "_in_IsRoundImageInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ImageHeight", "in_ImageHeightIn", "In_ImageHeight", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 40;
}, false), 
this.attr("_in_ImageHeightInDataFetchStatus", "_in_ImageHeightInDataFetchStatus", "_in_ImageHeightInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ResultType", "in_ResultTypeIn", "In_ResultType", true, false, OS.DataTypes.DataTypes.Integer, function () {
return OS.BuiltinFunctions.nullIdentifier();
}, false), 
this.attr("_in_ResultTypeInDataFetchStatus", "_in_ResultTypeInDataFetchStatus", "_in_ResultTypeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ResultItemVisualWidth", "in_ResultItemVisualWidthIn", "In_ResultItemVisualWidth", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 40;
}, false), 
this.attr("_in_ResultItemVisualWidthInDataFetchStatus", "_in_ResultItemVisualWidthInDataFetchStatus", "_in_ResultItemVisualWidthInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_SignedURL", "in_SignedURLIn", "In_SignedURL", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_SignedURLInDataFetchStatus", "_in_SignedURLInDataFetchStatus", "_in_SignedURLInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
this.attr("In_BorderRadius", "in_BorderRadiusIn", "In_BorderRadius", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("_in_BorderRadiusInDataFetchStatus", "_in_BorderRadiusInDataFetchStatus", "_in_BorderRadiusInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("IsLoading", "isLoadingIn", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_IsReverseImageAndContent", "in_IsReverseImageAndContentIn", "In_IsReverseImageAndContent", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsReverseImageAndContentInDataFetchStatus", "_in_IsReverseImageAndContentInDataFetchStatus", "_in_IsReverseImageAndContentInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("ShowPlaceholderForImage" in inputs) {
this.variables.showPlaceholderForImageIn = inputs.ShowPlaceholderForImage;
if("_showPlaceholderForImageInDataFetchStatus" in inputs) {
this.variables._showPlaceholderForImageInDataFetchStatus = inputs._showPlaceholderForImageInDataFetchStatus;
}

}

if("In_IsRoundImage" in inputs) {
this.variables.in_IsRoundImageIn = inputs.In_IsRoundImage;
if("_in_IsRoundImageInDataFetchStatus" in inputs) {
this.variables._in_IsRoundImageInDataFetchStatus = inputs._in_IsRoundImageInDataFetchStatus;
}

}

if("In_ImageHeight" in inputs) {
this.variables.in_ImageHeightIn = inputs.In_ImageHeight;
if("_in_ImageHeightInDataFetchStatus" in inputs) {
this.variables._in_ImageHeightInDataFetchStatus = inputs._in_ImageHeightInDataFetchStatus;
}

}

if("In_ResultType" in inputs) {
this.variables.in_ResultTypeIn = inputs.In_ResultType;
if("_in_ResultTypeInDataFetchStatus" in inputs) {
this.variables._in_ResultTypeInDataFetchStatus = inputs._in_ResultTypeInDataFetchStatus;
}

}

if("In_ResultItemVisualWidth" in inputs) {
this.variables.in_ResultItemVisualWidthIn = inputs.In_ResultItemVisualWidth;
if("_in_ResultItemVisualWidthInDataFetchStatus" in inputs) {
this.variables._in_ResultItemVisualWidthInDataFetchStatus = inputs._in_ResultItemVisualWidthInDataFetchStatus;
}

}

if("In_SignedURL" in inputs) {
this.variables.in_SignedURLIn = inputs.In_SignedURL;
if("_in_SignedURLInDataFetchStatus" in inputs) {
this.variables._in_SignedURLInDataFetchStatus = inputs._in_SignedURLInDataFetchStatus;
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

if("In_BorderRadius" in inputs) {
this.variables.in_BorderRadiusIn = inputs.In_BorderRadius;
if("_in_BorderRadiusInDataFetchStatus" in inputs) {
this.variables._in_BorderRadiusInDataFetchStatus = inputs._in_BorderRadiusInDataFetchStatus;
}

}

if("IsLoading" in inputs) {
this.variables.isLoadingIn = inputs.IsLoading;
if("_isLoadingInDataFetchStatus" in inputs) {
this.variables._isLoadingInDataFetchStatus = inputs._isLoadingInDataFetchStatus;
}

}

if("In_IsReverseImageAndContent" in inputs) {
this.variables.in_IsReverseImageAndContentIn = inputs.In_IsReverseImageAndContent;
if("_in_IsReverseImageAndContentInDataFetchStatus" in inputs) {
this.variables._in_IsReverseImageAndContentInDataFetchStatus = inputs._in_IsReverseImageAndContentInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "NewConnect_Utilities.NC_Result_Item__Image");
});
define("Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Image.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Image.mvc$model", "Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Image.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.controller$GetCacheableSignedPhotoURL"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, React, OSView, Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Image_mvc_model, Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Image_mvc_controller, Connect2_LegacySharedClientVariables, OSWidgets) {
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
        View.displayName = "NewConnect_Utilities.NC_Result_Item__Image";
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
                return Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Image_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Image_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.label,
_idProps: {
service: idService,
name: "Label"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "NewConnect_Utilities/NC_Result_Item__Image/Result_Item onclick");
return controller.onClick_Result_Item$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
extendedProperties: {
style: "",
"data-item": model.variables.htmlDataItemIn
},
style: model.getCachedValue(idService.getId("Result_Item.Style"), function () {
return (("display-flex align-items-center gap-base " + ((model.variables.in_IsReverseImageAndContentIn) ? ("flex-direction-row-reverse ") : (""))) + model.variables.customClassIn);
}, function () {
return model.variables.in_IsReverseImageAndContentIn;
}, function () {
return model.variables.customClassIn;
}),
visible: true,
_idProps: {
service: idService,
name: "Result_Item"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsReverseImageAndContentInDataFetchStatus, model.variables._customClassInDataFetchStatus)
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "NewConnect_Utilities/NC_Result_Item__Image/Container onclick");
return controller.onClick_Result_Item$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
extendedProperties: {
style: (("min-width: " + (model.variables.in_ResultItemVisualWidthIn).toString()) + "px")
},
gridProperties: {
classes: "OSInline"
},
style: "result-item__visual",
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
style: "center display-flex",
_idProps: {
service: idService,
name: "ImagePlaceholder"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "center display-flex",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.isLoadingIn, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: model.getCachedValue(idService.getId("5gTbx+daNUeVsYrjHFFp7A.style"), function () {
return ((("height: " + (model.variables.in_ImageHeightIn).toString()) + "px;") + ((model.variables.in_IsRoundImageIn) ? ((("width: " + (model.variables.in_ImageHeightIn).toString()) + "px;")) : ((("border-radius: " + (model.variables.in_BorderRadiusIn).toString()) + "px; "))));
}, function () {
return model.variables.in_ImageHeightIn;
}, function () {
return model.variables.in_IsRoundImageIn;
}, function () {
return model.variables.in_BorderRadiusIn;
})
},
style: model.getCachedValue(idService.getId("5gTbx+daNUeVsYrjHFFp7A.Style"), function () {
return ("skeleton-item " + ((model.variables.in_IsRoundImageIn) ? ("border-radius-circle") : ("")));
}, function () {
return model.variables.in_IsRoundImageIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsRoundImageInDataFetchStatus)
})];
}, function () {
return [$if(((model.variables.in_SignedURLIn) !== ("")), false, this, function () {
return [React.createElement(OSWidgets.Image, {
extendedProperties: {
"data-error-placeholder-src": model.getCachedValue(idService.getId("Result_Item_Photo.data-error-placeholder-src"), function () {
return (((model.variables.in_ResultTypeIn === Connect2_LegacySharedModel.staticEntities.resultListType.subdivision)) ? (((model.variables.in_IsRoundImageIn) ? (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.no_division_square.png")) : (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.no_division_rectangle.png")))) : (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.User_rectangle.png")));
}, function () {
return model.variables.in_ResultTypeIn;
}, function () {
return model.variables.in_IsRoundImageIn;
}),
style: model.getCachedValue(idService.getId("Result_Item_Photo.style"), function () {
return ((("height: " + (model.variables.in_ImageHeightIn).toString()) + "px;") + ((model.variables.in_IsRoundImageIn) ? ((("width: " + (model.variables.in_ImageHeightIn).toString()) + "px;")) : ((("border-radius: " + (model.variables.in_BorderRadiusIn).toString()) + "px; "))));
}, function () {
return model.variables.in_ImageHeightIn;
}, function () {
return model.variables.in_IsRoundImageIn;
}, function () {
return model.variables.in_BorderRadiusIn;
})
},
style: model.getCachedValue(idService.getId("Result_Item_Photo.Style"), function () {
return ((model.variables.in_IsRoundImageIn) ? ("img-circle img-cover img-cover--top-center") : (""));
}, function () {
return model.variables.in_IsRoundImageIn;
}),
type: /*External*/ 1,
url: model.variables.in_SignedURLIn,
_idProps: {
service: idService,
name: "Result_Item_Photo"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsRoundImageInDataFetchStatus),
url_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SignedURLInDataFetchStatus)
})];
}, function () {
return [React.createElement(OSWidgets.Image, {
extendedProperties: {
"data-error-placeholder-src": model.getCachedValue(idService.getId("Result_Item_Default_NoData.data-error-placeholder-src"), function () {
return (((model.variables.in_ResultTypeIn === Connect2_LegacySharedModel.staticEntities.resultListType.subdivision)) ? (((model.variables.in_IsRoundImageIn) ? (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.no_division_square.png")) : (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.no_division_rectangle.png")))) : (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.User_rectangle.png")));
}, function () {
return model.variables.in_ResultTypeIn;
}, function () {
return model.variables.in_IsRoundImageIn;
}),
style: model.getCachedValue(idService.getId("Result_Item_Default_NoData.style"), function () {
return ((("height: " + (model.variables.in_ImageHeightIn).toString()) + "px;") + ((model.variables.in_IsRoundImageIn) ? ((("width: " + (model.variables.in_ImageHeightIn).toString()) + "px;")) : ((("border-radius: " + (model.variables.in_BorderRadiusIn).toString()) + "px; "))));
}, function () {
return model.variables.in_ImageHeightIn;
}, function () {
return model.variables.in_IsRoundImageIn;
}, function () {
return model.variables.in_BorderRadiusIn;
})
},
style: model.getCachedValue(idService.getId("Result_Item_Default_NoData.Style"), function () {
return ((model.variables.in_IsRoundImageIn) ? ("img-circle img-cover img-cover--top-center") : (""));
}, function () {
return model.variables.in_IsRoundImageIn;
}),
type: /*External*/ 1,
url: model.getCachedValue(idService.getId("Result_Item_Default_NoData.Url"), function () {
return (((model.variables.in_ResultTypeIn === Connect2_LegacySharedModel.staticEntities.resultListType.subdivision)) ? (((model.variables.in_IsRoundImageIn) ? (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.no_division_square.png")) : (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.no_division_rectangle.png")))) : (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.User_rectangle.png")));
}, function () {
return model.variables.in_ResultTypeIn;
}, function () {
return model.variables.in_IsRoundImageIn;
}),
_idProps: {
service: idService,
name: "Result_Item_Default_NoData"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsRoundImageInDataFetchStatus),
url_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ResultTypeInDataFetchStatus, model.variables._in_IsRoundImageInDataFetchStatus)
})];
})];
}))];
})), $if(model.variables.isLoadingIn, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: (("height: " + (model.variables.in_ImageHeightIn).toString()) + "px")
},
style: "skeleton-item display-flex align-items-center justify-content-space-between flex1 border-radius-soft",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex align-items-center justify-content-space-between flex1",
visible: true,
_idProps: {
service: idService,
uuid: "9"
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "NewConnect_Utilities/NC_Result_Item__Image/Result_Item_Text_Cont onclick");
return controller.onClick_Result_Item$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
visible: true,
_idProps: {
service: idService,
name: "Result_Item_Text_Cont"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.title_Placeholder,
style: "font-semi-bold",
_idProps: {
service: idService,
name: "Title_Placeholder"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.description_Placeholder,
style: "font-size-xs text-neutral-7",
_idProps: {
service: idService,
name: "Description_Placeholder"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.action_Placeholder,
style: "",
_idProps: {
service: idService,
name: "Action_Placeholder"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Image.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "Connect2_LegacyShared.languageResources", "Connect2_LegacyShared.clientVariables", "Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Image.mvc$debugger", "Connect2_LegacyShared.controller$GetCacheableSignedPhotoURL"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, Connect2_LegacySharedLanguageResources, Connect2_LegacySharedClientVariables, Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Image_mvc_Debugger) {
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
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:wki8fjk1v0y3+bRA_kYZjQ:/NRWebFlows.wx5XeNqAakmtpZYvs3tr_Q/NodesShownInESpaceTree.4x5CyFiSIUGCvz7xXQzdXg/ClientActions.wki8fjk1v0y3+bRA_kYZjQ:xMhytJnd5O3_r+6taMiICg", "Connect2_LegacyShared", "LoadPhotoAsync", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:iScbaE5ockWKWK69x1e5fA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:mNDpn1aAMEy5bbL4iprY4A", callContext.id) && (model.variables.in_SignedURLIn === ""))) {
// Is image already signed?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:SlYfdMU26EyetiWYgRmx2Q", callContext.id) && (((((model.variables.in_BucketIn === model.variables.last_BucketVar) && (model.variables.in_PathIn === model.variables.last_PathVar)) && (model.variables.in_TypeIn === model.variables.last_TypeVar)) && (model.variables.in_SignedURLIn === "")) && ((model.variables.last_SignedURLVar) !== (""))))) {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:YLKXoAA4B0mzHKO1CeSPuw", callContext.id);
// In_SignedURL = Last_SignedURL
model.variables.in_SignedURLIn = model.variables.last_SignedURLVar;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:0SZkJxFl+0+dKmWhsOE8Ow", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:AYBdUJNpvEegvxL8_bEFgw", callContext.id);
// Execute Action: GetCacheableSignedPhotoURL
model.flush();
return Connect2_LegacySharedController.default.getCacheableSignedPhotoURL$Action(model.variables.in_BucketIn, model.variables.in_PathIn, model.variables.in_TypeIn, callContext).then(function (value) {
getCacheableSignedPhotoURLVar.value = value;
}).then(function () {
// Set Loaded Info
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:80p0_pBoF0m5Ye9NJL6dQg", callContext.id);
// Last_Bucket = In_Bucket
model.variables.last_BucketVar = model.variables.in_BucketIn;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:80p0_pBoF0m5Ye9NJL6dQg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Last_Path = In_Path
model.variables.last_PathVar = model.variables.in_PathIn;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:80p0_pBoF0m5Ye9NJL6dQg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Last_Type = In_Type
model.variables.last_TypeVar = model.variables.in_TypeIn;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:80p0_pBoF0m5Ye9NJL6dQg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// In_SignedURL = GetCacheableSignedPhotoURL.URL
model.variables.in_SignedURLIn = getCacheableSignedPhotoURLVar.value.uRLOut;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:80p0_pBoF0m5Ye9NJL6dQg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// Last_SignedURL = In_SignedURL
model.variables.last_SignedURLVar = model.variables.in_SignedURLIn;
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:aTtXoFvhykWlYwWb+EMLrg", callContext.id);
});
}

});
} else {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:mcgVh74muU2vOc7Pwx+MBQ", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:wki8fjk1v0y3+bRA_kYZjQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:wki8fjk1v0y3+bRA_kYZjQ", callContext.id);
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
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:lwWI0ij3TUiuwZ1ogJvenA:/NRWebFlows.wx5XeNqAakmtpZYvs3tr_Q/NodesShownInESpaceTree.4x5CyFiSIUGCvz7xXQzdXg/ClientActions.lwWI0ij3TUiuwZ1ogJvenA:lSQPSBPDHmS4_Ob_4mBvEw", "Connect2_LegacyShared", "OnClick_Result_Item", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:FHERAM7BdkmZ+E15a5THtA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:9H67xL6Vhk2ABaJocIQVCA", callContext.id);
// Trigger Event: OnClick_Item
return controller.onClick_Item$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("DjcSN7X3Kkyt49iAAhnv1A:rAxPV70nzkC2+hFQ0+gL7Q", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:lwWI0ij3TUiuwZ1ogJvenA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:lwWI0ij3TUiuwZ1ogJvenA", callContext.id);
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
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:wx5XeNqAakmtpZYvs3tr_Q:/NRWebFlows.wx5XeNqAakmtpZYvs3tr_Q:L7MzDwd4oJkt5Vso1m_eUg", "Connect2_LegacyShared", "NewConnect_Utilities", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("DjcSN7X3Kkyt49iAAhnv1A:4x5CyFiSIUGCvz7xXQzdXg:/NRWebFlows.wx5XeNqAakmtpZYvs3tr_Q/NodesShownInESpaceTree.4x5CyFiSIUGCvz7xXQzdXg:AzuLKcZajPs2Tw77P+dKXg", "Connect2_LegacyShared", "NC_Result_Item__Image", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:4x5CyFiSIUGCvz7xXQzdXg", callContext.id);
OutSystemsDebugger.pop("DjcSN7X3Kkyt49iAAhnv1A:wx5XeNqAakmtpZYvs3tr_Q", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "NewConnect_Utilities/NC_Result_Item__Image On Ready");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "NewConnect_Utilities/NC_Result_Item__Image On Parameters Changed");
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

define("Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Image.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"AYBdUJNpvEegvxL8_bEFgw": {
getter: function (varBag, idService) {
return varBag.getCacheableSignedPhotoURLVar.value;
}
},
"De8RfLMPJUWdO0dgvsAfpA": {
getter: function (varBag, idService) {
return varBag.model.variables.last_BucketVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"QOIPTp_pa06g0wUU5c82_Q": {
getter: function (varBag, idService) {
return varBag.model.variables.last_PathVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"kzcRjLyoZUiYzaYbKqW6Cw": {
getter: function (varBag, idService) {
return varBag.model.variables.last_TypeVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"mbZE9I+Q_EClL6IPL2fx6g": {
getter: function (varBag, idService) {
return varBag.model.variables.last_SignedURLVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"tSmfmUZGn0OT7yjvKNuZDA": {
getter: function (varBag, idService) {
return varBag.model.variables.showPlaceholderForImageIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"eYOi5r+2KEiP2BnZoCkkqw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsRoundImageIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"uBcl3GEylU+ZXXafOhKEng": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ImageHeightIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"LNZKgNf+4kilCOx1hebB7Q": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ResultTypeIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"5a2nMivtIkaL2i9BJOcUzw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ResultItemVisualWidthIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"1RS2T9tt00yHJsX8uTx9Qg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_SignedURLIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"WoPu2_36U0SOpPwQ9yMNog": {
getter: function (varBag, idService) {
return varBag.model.variables.customClassIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"IPgi6pLVYEOrsIY64hAuRA": {
getter: function (varBag, idService) {
return varBag.model.variables.htmlDataItemIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"LERF3ds+Kkitg7ac2mw6SA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_BucketIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Fx1KRCXPjkeb6K8Osotstg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_PathIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"pSa999Q7UkCCyArEGOSTUg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_TypeIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"6omxHx+bFE2eQIHVeu3dSw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_BorderRadiusIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"CFckgfnhYkSPjK5mtreuQA": {
getter: function (varBag, idService) {
return varBag.model.variables.isLoadingIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"JpaeGxo+Qk+77o5F_6vYRw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsReverseImageAndContentIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"jNgB+Iijd0OXIjpDuspBCQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Label"));
})(varBag.model, idService);
}
},
"iZVRW9w+uUy+vd4Zg_iZLg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Result_Item"));
})(varBag.model, idService);
}
},
"LWpV+UYwBEiwhX4aiV2Liw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_ShowPlaceholderForImage"));
})(varBag.model, idService);
}
},
"LX9lt3G6jkeAOVE3Bu0UpA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ImagePlaceholder"));
})(varBag.model, idService);
}
},
"HMgS3vC81USqZZHpSeTGUg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasSignedURL"));
})(varBag.model, idService);
}
},
"WYL3j7OV2UyZaQxGzcXW9Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Result_Item_Photo"));
})(varBag.model, idService);
}
},
"RjluZCaTLUSsNOx1XsHEFg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Result_Item_Default_NoData"));
})(varBag.model, idService);
}
},
"t_vzKlIizkCFTekaBf8QzA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Result_Item_Text_Cont"));
})(varBag.model, idService);
}
},
"pd50ErtWTUanzrnJSrTClg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title_Placeholder"));
})(varBag.model, idService);
}
},
"NIeid2u4_ku0eGIuQJAW+g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Description_Placeholder"));
})(varBag.model, idService);
}
},
"kF1xG3VRmkq9K427wckUKA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Action_Placeholder"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
