define("UBTConnect_Utils.CW_Share.ShareableObject_Generic.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "Connect2_Sharing_CS.model", "UBTConnectLibrary.model", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "Connect2_Sharing_CS.model$UI_ShareableObject_GenericRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect2_Sharing_CS", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function (OutSystems, UBTConnect_UtilsModel, Connect2_Sharing_CSModel, UBTConnectLibraryModel, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_ConnectPatterns_IconText_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("ImageWidth", "imageWidthVar", "ImageWidth", true, false, OS.DataTypes.DataTypes.Text, function () {
return UBTConnect_UtilsModel.staticEntities.uBT_ImageSize.auto;
}, false), 
this.attr("BorderRadius", "borderRadiusVar", "BorderRadius", true, false, OS.DataTypes.DataTypes.Text, function () {
return UBTConnect_UtilsModel.staticEntities.uBT_Shape.medium;
}, false), 
this.attr("In_ShareableObject", "in_ShareableObjectIn", "In_ShareableObject", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_Sharing_CSModel.UI_ShareableObject_GenericRec());
}, false, Connect2_Sharing_CSModel.UI_ShareableObject_GenericRec), 
this.attr("_in_ShareableObjectInDataFetchStatus", "_in_ShareableObjectInDataFetchStatus", "_in_ShareableObjectInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = ((((UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_IconText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_ShareableObject" in inputs) {
this.variables.in_ShareableObjectIn = inputs.In_ShareableObject;
if("_in_ShareableObjectInDataFetchStatus" in inputs) {
this.variables._in_ShareableObjectInDataFetchStatus = inputs._in_ShareableObjectInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "CW_Share.ShareableObject_Generic");
});
define("UBTConnect_Utils.CW_Share.ShareableObject_Generic.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "Connect2_Sharing_CS.model", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect_Utils.CW_Share.ShareableObject_Generic.mvc$model", "UBTConnect_Utils.CW_Share.ShareableObject_Generic.mvc$controller", "UBTConnect_Utils.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "Connect2_Sharing_CS.model$UI_ShareableObject_GenericRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect2_Sharing_CS", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function (OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, Connect2_Sharing_CSModel, UBTConnectLibraryModel, React, OSView, UBTConnect_Utils_CW_Share_ShareableObject_Generic_mvc_model, UBTConnect_Utils_CW_Share_ShareableObject_Generic_mvc_controller, UBTConnect_UtilsClientVariables, OSWidgets, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view) {
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
        View.displayName = "CW_Share.ShareableObject_Generic";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Utils_CW_Share_ShareableObject_Generic_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Utils_CW_Share_ShareableObject_Generic_mvc_controller;
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
style: "shareable-object-generic",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, {
inputs: {
In_BorderRadius: model.variables.borderRadiusVar,
ImageURL: model.variables.in_ShareableObjectIn.signedURLAttr,
_imageURLInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ShareableObjectInDataFetchStatus),
EntityType: model.variables.in_ShareableObjectIn.connectEntityTypeIdAttr,
_entityTypeInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ShareableObjectInDataFetchStatus),
ImageSize: model.getCachedValue(idService.getId("RjLW+GkLPkGUcuW5DUdSBQ.ImageSize"), function () {
return function () {
var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
rec.heightAttr = UBTConnect_UtilsModel.staticEntities.uBT_ImageSize.auto;
rec.widthAttr = model.variables.imageWidthVar;
return rec;
}();
}, function () {
return model.variables.imageWidthVar;
}),
EntityId: model.variables.in_ShareableObjectIn.idAttr,
_entityIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ShareableObjectInDataFetchStatus)
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
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_Share/ShareableObject_Generic/Container onclick");
controller.event_OnClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
style: "text-align-left margin-top-base",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_TextOptions: model.getCachedValue(idService.getId("ahhnmeUJlkWG4WSRtbW94Q.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnect_UtilsModel.staticEntities.uBT_Color.neutral10;
rec.fontSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontSize.small;
rec.fontWeightAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
In_HighlightOptions: model.getCachedValue(idService.getId("ahhnmeUJlkWG4WSRtbW94Q.In_HighlightOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnect_UtilsModel.staticEntities.uBT_Color.primary;
rec.fontWeightAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontWeight.bold;
return rec;
}();
}),
In_Text: model.variables.in_ShareableObjectIn.titleAttr,
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ShareableObjectInDataFetchStatus),
In_HighlightWords: ""
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
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), $if(((model.variables.in_ShareableObjectIn.subtitleAttr) !== ("")), false, this, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_HighlightWords: "",
In_Text: model.variables.in_ShareableObjectIn.subtitleAttr,
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ShareableObjectInDataFetchStatus),
In_HighlightOptions: model.getCachedValue(idService.getId("RaFCE2sVLUeMi8tbgmm7Qg.In_HighlightOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnect_UtilsModel.staticEntities.uBT_Color.primary;
rec.fontWeightAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontWeight.bold;
return rec;
}();
}),
In_TextOptions: model.getCachedValue(idService.getId("RaFCE2sVLUeMi8tbgmm7Qg.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnect_UtilsModel.staticEntities.uBT_Color.neutral7;
rec.fontSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontSize.extraSmall;
rec.fontWeightAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontWeight.regular;
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
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), $if(((model.variables.in_ShareableObjectIn.locationAttr) !== ("")), false, this, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("_OxrM2yDgE+DjYXDU_1m9w.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.topSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.small;
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
uuid: "5",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
inputs: {
Text: model.variables.in_ShareableObjectIn.locationAttr,
_textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ShareableObjectInDataFetchStatus),
TextOptions: model.getCachedValue(idService.getId("G6f6_Yg5s0mL7FkRyQAv9w.TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnect_UtilsModel.staticEntities.uBT_Color.neutral7;
rec.fontSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontSize.extraSmall;
rec.fontWeightAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
SpacingSize: UBTConnect_UtilsModel.staticEntities.uBT_Size.extraSmall
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
icon: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_ColorId: UBTConnect_UtilsModel.staticEntities.uBT_Color.neutral7,
In_SizeId: UBTConnect_UtilsModel.staticEntities.uBT_IconSize.small_12,
In_IconId: UBTConnect_UtilsModel.staticEntities.uBT_Icons.homePinFill
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
})
},
_dependencies: [asPrimitiveValue(model.variables._in_ShareableObjectInDataFetchStatus), asPrimitiveValue(model.variables.in_ShareableObjectIn.locationAttr)]
})];
}, function () {
return [];
}))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect_Utils.CW_Share.ShareableObject_Generic.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "Connect2_Sharing_CS.model", "UBTConnectLibrary.model", "UBTConnect_Utils.languageResources", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.CW_Share.ShareableObject_Generic.mvc$debugger", "Connect2_Sharing_CS.model$UI_ShareableObject_GenericRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$Connect2_Sharing_CS", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function (OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, Connect2_Sharing_CSModel, UBTConnectLibraryModel, UBTConnect_UtilsLanguageResources, UBTConnect_UtilsClientVariables, UBTConnect_Utils_CW_Share_ShareableObject_Generic_mvc_Debugger) {
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

Controller.prototype.event_OnClick$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:pDMoTWIiTkS1lgPdIBVaUg:/NRWebFlows.pDMoTWIiTkS1lgPdIBVaUg:HjSruKDLIyQt9ROE1cl6OA", "UBTConnect_Utils", "CW_Share", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:s3JUSei11UST2wgfNyWSng:/NRWebFlows.pDMoTWIiTkS1lgPdIBVaUg/NodesShownInESpaceTree.s3JUSei11UST2wgfNyWSng:OlrBjUHv8zGSqgWLL_dcoQ", "UBTConnect_Utils", "ShareableObject_Generic", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:s3JUSei11UST2wgfNyWSng", callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:pDMoTWIiTkS1lgPdIBVaUg", callContext.id);
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
return UBTConnect_UtilsController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnect_UtilsLanguageResources);
});

define("UBTConnect_Utils.CW_Share.ShareableObject_Generic.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"dWmTUkbCIUuvjcak2mUUEA": {
getter: function (varBag, idService) {
return varBag.model.variables.imageWidthVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"GnNTUMAJl0yfDt4j3SUwVg": {
getter: function (varBag, idService) {
return varBag.model.variables.borderRadiusVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"x019HsQNWkG7jl+gWHYAxA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ShareableObjectIn;
}
},
"mzYRwCMockGF9QFz5K4ncQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasSubtitle"));
})(varBag.model, idService);
}
},
"sxAHNQKqN0OlHgLwFjxXmg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasLocation"));
})(varBag.model, idService);
}
},
"ps__JP5H4EixcP+12kimRg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"YAKUp2sOb0K1CAiQ7r1gwg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
