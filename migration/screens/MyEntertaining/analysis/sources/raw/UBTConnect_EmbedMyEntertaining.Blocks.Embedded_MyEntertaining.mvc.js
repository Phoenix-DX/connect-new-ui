define("UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect_EmbedMyEntertaining.model", "UBTConnectLibrary.model", "UBTJavaScriptUtils.controller", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.ConnectPatterns.LazyImage.mvc$model", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect_EmbedMyEntertaining.referencesHealth", "UBTConnect_EmbedMyEntertaining.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnectLibrary.model$ImageBorderOptionsRec", "UBTJavaScriptUtils.controller$JSUtils_Console_Log", "UBTConnect_EmbedMyEntertaining.referencesHealth$UBTJavaScriptUtils"], function (OutSystems, UBTConnect_EmbedMyEntertainingModel, UBTConnectLibraryModel, UBTJavaScriptUtilsController, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_ConnectPatterns_LazyImage_mvcModel) {
var OS = OutSystems.Internal;

var GetEntertainingConfigDataActRec = (function (_super) {
__extends(GetEntertainingConfigDataActRec, _super);
function GetEntertainingConfigDataActRec(defaults) {
_super.apply(this, arguments);
}
GetEntertainingConfigDataActRec.attributesToDeclare = function () {
return [
this.attr("Token", "tokenOut", "Token", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseURL", "baseURLOut", "BaseURL", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("B2CClientId", "b2CClientIdOut", "B2CClientId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("B2CPolicy", "b2CPolicyOut", "B2CPolicy", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetEntertainingConfigDataActRec.init();
return GetEntertainingConfigDataActRec;
})(OS.Model.DataSourceRecord);

var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("isLoading", "isLoadingVar", "isLoading", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("MessageListener", "messageListenerVar", "MessageListener", true, false, OS.DataTypes.DataTypes.Object, function () {
return null;
}, false), 
this.attr("RefreshIntervalId", "refreshIntervalIdVar", "RefreshIntervalId", true, false, OS.DataTypes.DataTypes.Object, function () {
return null;
}, false), 
this.attr("LoadingList", "loadingListVar", "LoadingList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, false, OS.DataTypes.TextList), 
this.attr("MaxLoadingItems", "maxLoadingItemsVar", "MaxLoadingItems", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 5;
}, false), 
this.attr("ResumeListener", "resumeListenerVar", "ResumeListener", true, false, OS.DataTypes.DataTypes.Object, function () {
return null;
}, false), 
this.attr("View", "viewIn", "View", true, false, OS.DataTypes.DataTypes.Text, function () {
return "timeline";
}, false), 
this.attr("_viewInDataFetchStatus", "_viewInDataFetchStatus", "_viewInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Theme", "themeIn", "Theme", true, false, OS.DataTypes.DataTypes.Text, function () {
return "light";
}, false), 
this.attr("_themeInDataFetchStatus", "_themeInDataFetchStatus", "_themeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Sources", "sourcesIn", "Sources", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_sourcesInDataFetchStatus", "_sourcesInDataFetchStatus", "_sourcesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("B2CTenant", "b2CTenantIn", "B2CTenant", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_b2CTenantInDataFetchStatus", "_b2CTenantInDataFetchStatus", "_b2CTenantInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("GetEntertainingConfig", "getEntertainingConfigDataAct", "getEntertainingConfigDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetEntertainingConfigDataActRec());
}, true, GetEntertainingConfigDataActRec)
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
Model._hasValidationWidgetsValue = ((UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_LazyImage_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("View" in inputs) {
this.variables.viewIn = inputs.View;
if("_viewInDataFetchStatus" in inputs) {
this.variables._viewInDataFetchStatus = inputs._viewInDataFetchStatus;
}

}

if("Theme" in inputs) {
this.variables.themeIn = inputs.Theme;
if("_themeInDataFetchStatus" in inputs) {
this.variables._themeInDataFetchStatus = inputs._themeInDataFetchStatus;
}

}

if("Sources" in inputs) {
this.variables.sourcesIn = inputs.Sources;
if("_sourcesInDataFetchStatus" in inputs) {
this.variables._sourcesInDataFetchStatus = inputs._sourcesInDataFetchStatus;
}

}

if("B2CTenant" in inputs) {
this.variables.b2CTenantIn = inputs.B2CTenant;
if("_b2CTenantInDataFetchStatus" in inputs) {
this.variables._b2CTenantInDataFetchStatus = inputs._b2CTenantInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Blocks.Embedded_MyEntertaining");
});
define("UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect_EmbedMyEntertaining.model", "UBTConnect_EmbedMyEntertaining.controller", "UBTConnectLibrary.model", "UBTJavaScriptUtils.controller", "react", "OutSystems/ReactView/Main", "UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.mvc$model", "UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.mvc$controller", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.ConnectPatterns.LazyImage.mvc$view", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect_EmbedMyEntertaining.referencesHealth", "UBTConnect_EmbedMyEntertaining.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnectLibrary.model$ImageBorderOptionsRec", "UBTJavaScriptUtils.controller$JSUtils_Console_Log", "UBTConnect_EmbedMyEntertaining.referencesHealth$UBTJavaScriptUtils"], function (OutSystems, UBTConnect_EmbedMyEntertainingModel, UBTConnect_EmbedMyEntertainingController, UBTConnectLibraryModel, UBTJavaScriptUtilsController, React, OSView, UBTConnect_EmbedMyEntertaining_Blocks_Embedded_MyEntertaining_mvc_model, UBTConnect_EmbedMyEntertaining_Blocks_Embedded_MyEntertaining_mvc_controller, OSWidgets, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_LazyImage_mvc_view) {
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
        View.displayName = "Blocks.Embedded_MyEntertaining";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_LazyImage_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_EmbedMyEntertaining_Blocks_Embedded_MyEntertaining_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_EmbedMyEntertaining_Blocks_Embedded_MyEntertaining_mvc_controller;
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
style: model.getCachedValue(idService.getId("connect2entertaining.Style"), function () {
return ("overflow-hidden " + ((model.variables.isLoadingVar) ? ("display-none") : ("")));
}, function () {
return model.variables.isLoadingVar;
}),
visible: true,
_idProps: {
service: idService,
name: "connect2entertaining"
},
_widgetRecordProvider: widgetsRecordProvider
}), $if(model.variables.isLoadingVar, false, this, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
inputs: {
In_IsLoading: true
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
placeholders: {
placeholder_LoadingSection: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("FDGclPCCvUiLuHuJZ9VGhg.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.backgroundAttr = function () {
var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
rec.backgroundColorAttr = UBTConnect_EmbedMyEntertainingModel.staticEntities.uBT_Color.neutral0;
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
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.loadingListVar,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("aqNleYng50WtXSTAWpwiqg.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.marginSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.generalSizeIdAttr = UBTConnect_EmbedMyEntertainingModel.staticEntities.uBT_Size.base;
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
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_LazyImage_mvc_view, {
inputs: {
In_BorderOptions: model.getCachedValue(idService.getId("eQZTqLhVwEinq67nqQPz+w.In_BorderOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ImageBorderOptionsRec();
rec.borderRadiusAttr = UBTConnect_EmbedMyEntertainingModel.staticEntities.uBT_Shape.soft;
return rec;
}();
}),
FallbackOptions: model.getCachedValue(idService.getId("eQZTqLhVwEinq67nqQPz+w.FallbackOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.AvatarImageFallbackoptionsRec();
rec.iconIdAttr = UBTConnect_EmbedMyEntertainingModel.staticEntities.uBT_Icons.widgetsFill;
rec.fontSizeAttr = UBTConnect_EmbedMyEntertainingModel.staticEntities.uBT_FontSize.display;
return rec;
}();
}),
In_ImageSize: model.getCachedValue(idService.getId("eQZTqLhVwEinq67nqQPz+w.In_ImageSize"), function () {
return function () {
var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
rec.widthAttr = UBTConnect_EmbedMyEntertainingModel.staticEntities.uBT_ImageSize.fullWidth_100_Percent;
return rec;
}();
}),
FallbackPadding: model.getCachedValue(idService.getId("eQZTqLhVwEinq67nqQPz+w.FallbackPadding"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.generalSizeIdAttr = UBTConnect_EmbedMyEntertainingModel.staticEntities.uBT_Size.doubleExtraLarge;
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
_dependencies: []
})];
})
},
_dependencies: []
})];
}, callContext, idService, "1")
},
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.loadingListVar)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.loadingListVar)]
})];
}, function () {
return [];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect_EmbedMyEntertaining.model", "UBTConnect_EmbedMyEntertaining.controller", "UBTConnectLibrary.model", "UBTJavaScriptUtils.controller", "UBTConnect_EmbedMyEntertaining.languageResources", "UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.mvc$debugger", "UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.mvc$controller.ScreenEvent_OnDestroy.CleanupCalendarJS", "UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.mvc$controller.Action_SetSources.ApplySourcesJS", "UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.mvc$controller.Action_SetToken.SetEntertainingTokenJS", "UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.mvc$controller.OnAfterFetch_GetEntertainingConfig.InitializeCalendarJS", "UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.mvc$controller.Action_RefreshToken.RefreshEmbedTokenJS", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect_EmbedMyEntertaining.referencesHealth", "UBTConnect_EmbedMyEntertaining.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnectLibrary.model$ImageBorderOptionsRec", "UBTJavaScriptUtils.controller$JSUtils_Console_Log", "UBTConnect_EmbedMyEntertaining.referencesHealth$UBTJavaScriptUtils"], function (OutSystems, UBTConnect_EmbedMyEntertainingModel, UBTConnect_EmbedMyEntertainingController, UBTConnectLibraryModel, UBTJavaScriptUtilsController, UBTConnect_EmbedMyEntertainingLanguageResources, UBTConnect_EmbedMyEntertaining_Blocks_Embedded_MyEntertaining_mvc_Debugger, UBTConnect_EmbedMyEntertaining_Blocks_Embedded_MyEntertaining_mvc_controller_ScreenEvent_OnDestroy_CleanupCalendarJS, UBTConnect_EmbedMyEntertaining_Blocks_Embedded_MyEntertaining_mvc_controller_Action_SetSources_ApplySourcesJS, UBTConnect_EmbedMyEntertaining_Blocks_Embedded_MyEntertaining_mvc_controller_Action_SetToken_SetEntertainingTokenJS, UBTConnect_EmbedMyEntertaining_Blocks_Embedded_MyEntertaining_mvc_controller_OnAfterFetch_GetEntertainingConfig_InitializeCalendarJS, UBTConnect_EmbedMyEntertaining_Blocks_Embedded_MyEntertaining_mvc_controller_Action_RefreshToken_RefreshEmbedTokenJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
action_OnReady$Action: function () {
return controller.executeActionInsideJSNode(controller._action_OnReady$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Action_OnReady");
},
action_OnAuthenticated$Action: function () {
return controller.executeActionInsideJSNode(controller._action_OnAuthenticated$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Action_OnAuthenticated");
},
action_OnComplete$Action: function (statusIn, totalIn) {
statusIn = (statusIn === undefined) ? "" : statusIn;
totalIn = (totalIn === undefined) ? "" : totalIn;
return controller.executeActionInsideJSNode(controller._action_OnComplete$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(statusIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(totalIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Action_OnComplete");
},
action_OnError$Action: function (messageIn) {
messageIn = (messageIn === undefined) ? "" : messageIn;
return controller.executeActionInsideJSNode(controller._action_OnError$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(messageIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Action_OnError");
},
action_OnNavBack$Action: function () {
return controller.executeActionInsideJSNode(controller._action_OnNavBack$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Action_OnNavBack");
},
action_OnOpenMap$Action: function (latIn, lngIn, labelIn) {
latIn = (latIn === undefined) ? "" : latIn;
lngIn = (lngIn === undefined) ? "" : lngIn;
labelIn = (labelIn === undefined) ? "" : labelIn;
return controller.executeActionInsideJSNode(controller._action_OnOpenMap$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(latIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(lngIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(labelIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Action_OnOpenMap");
},
action_SetMessageListener$Action: function (listenerIn) {
listenerIn = (listenerIn === undefined) ? null : listenerIn;
return controller.executeActionInsideJSNode(controller._action_SetMessageListener$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(listenerIn, OS.DataTypes.DataTypes.Object)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Action_SetMessageListener");
},
action_RefreshToken$Action: function () {
return controller.executeActionInsideJSNode(controller._action_RefreshToken$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Action_RefreshToken");
},
action_SetRefreshInterval$Action: function (intervalIdIn) {
intervalIdIn = (intervalIdIn === undefined) ? null : intervalIdIn;
return controller.executeActionInsideJSNode(controller._action_SetRefreshInterval$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(intervalIdIn, OS.DataTypes.DataTypes.Object)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Action_SetRefreshInterval");
},
action_SetResumeListener$Action: function (listenerIn) {
listenerIn = (listenerIn === undefined) ? null : listenerIn;
return controller.executeActionInsideJSNode(controller._action_SetResumeListener$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(listenerIn, OS.DataTypes.DataTypes.Object)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Action_SetResumeListener");
}
};
this.dataFetchDependenciesOriginal = {
getEntertainingConfig$DataActRefresh: 0
};
this.dataFetchDependentsGraph = {
getEntertainingConfig$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions
Controller.prototype.appManager_Get_UserIdToken$ServerAction = function (espaceNameIn, callContext) {
var controller = this.controller;
var inputs = {
EspaceName: OS.DataConversion.ServerDataConverter.to(espaceNameIn, OS.DataTypes.DataTypes.Text)
};
return controller.callServerAction("AppManager_Get_UserIdToken", "screenservices/UBTConnect_EmbedMyEntertaining/Blocks/Embedded_MyEntertaining/ActionAppManager_Get_UserIdToken", "0aXarRl7GllpMUhMoH_t9w", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining$rssespaceubt_appmanager_cs_ActionAppManager_Get_UserIdToken"))();
executeServerActionResult.idTokenOut = OS.DataConversion.ServerDataConverter.from(outputs.IdToken, OS.DataTypes.DataTypes.Text);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining$rssespaceubt_appmanager_cs_ActionAppManager_Get_UserIdToken", [{
name: "IdToken",
attrName: "idTokenOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);

// Aggregates and Data Actions
Controller.prototype.getEntertainingConfig$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("ACDBfnTIv0CUD+CXJHudLg:54rrN6sQzk6q_nSF1kkvng:/NRWebFlows.1K4x3zRe7EmqzrGYLHmosg/NodesShownInESpaceTree.pUFusax9kkCG9mFy6SB2Ig/DataActions.54rrN6sQzk6q_nSF1kkvng:biX6NDaXRhGsB4rzhdMApQ", "UBTConnect_EmbedMyEntertaining", "GetEntertainingConfig", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Blocks/Embedded_MyEntertaining/GetEntertainingConfig");
return controller.callDataAction("DataActionGetEntertainingConfig", "screenservices/UBTConnect_EmbedMyEntertaining/Blocks/Embedded_MyEntertaining/DataActionGetEntertainingConfig", "gwvwhZCUVyjHHiojXlEJCg", function (b) {
model.variables.getEntertainingConfigDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getEntertainingConfigDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getEntertainingConfigDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "Blocks/Embedded_MyEntertaining/GetEntertainingConfig On After Fetch");
return controller._onAfterFetch_GetEntertainingConfig$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("ACDBfnTIv0CUD+CXJHudLg:54rrN6sQzk6q_nSF1kkvng", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getEntertainingConfig$DataActRefresh"];
// Client Actions
Controller.prototype._screenEvent_OnParametersChanged$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ScreenEvent_OnParametersChanged");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ACDBfnTIv0CUD+CXJHudLg:Ae8dAeYqDEOnX9jwkMniAw:/NRWebFlows.1K4x3zRe7EmqzrGYLHmosg/NodesShownInESpaceTree.pUFusax9kkCG9mFy6SB2Ig/ClientActions.Ae8dAeYqDEOnX9jwkMniAw:RoR2UoNTCVUE40SKdOVguQ", "UBTConnect_EmbedMyEntertaining", "ScreenEvent_OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:HSCeYppYoUeEBjKVI84daA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:i6b+cAocG0maSh0ocHVUag", callContext.id);
// Execute Action: Action_SetSources
controller._action_SetSources$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:YJpHe2N2FkWEMXrYzmXs5w", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ACDBfnTIv0CUD+CXJHudLg:Ae8dAeYqDEOnX9jwkMniAw", callContext.id);
}

};
Controller.prototype._screenEvent_OnDestroy$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ScreenEvent_OnDestroy");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ACDBfnTIv0CUD+CXJHudLg:SomYEeug30C+Z8dpJFIOeA:/NRWebFlows.1K4x3zRe7EmqzrGYLHmosg/NodesShownInESpaceTree.pUFusax9kkCG9mFy6SB2Ig/ClientActions.SomYEeug30C+Z8dpJFIOeA:rdRuzoB5SLrdRAwPAdBUMA", "UBTConnect_EmbedMyEntertaining", "ScreenEvent_OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:XVq5LRW0l0WFs1J1Yhy7JA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:eo9CDdEkEkmGh49ZAQT0OA", callContext.id);
controller.safeExecuteJSNode(UBTConnect_EmbedMyEntertaining_Blocks_Embedded_MyEntertaining_mvc_controller_ScreenEvent_OnDestroy_CleanupCalendarJS, "CleanupCalendar", "ScreenEvent_OnDestroy", {
RefreshIntervalId: OS.DataConversion.JSNodeParamConverter.to(model.variables.refreshIntervalIdVar, OS.DataTypes.DataTypes.Object),
MessageListener: OS.DataConversion.JSNodeParamConverter.to(model.variables.messageListenerVar, OS.DataTypes.DataTypes.Object),
ResumeListener: OS.DataConversion.JSNodeParamConverter.to(model.variables.resumeListenerVar, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:+qQXyjCOnk+KXAeSMhRtoQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ACDBfnTIv0CUD+CXJHudLg:SomYEeug30C+Z8dpJFIOeA", callContext.id);
}

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
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.ScreenEvent_OnInitialize$vars"))());
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ACDBfnTIv0CUD+CXJHudLg:bebMP0fi5U+W1vQKIY5dwg:/NRWebFlows.1K4x3zRe7EmqzrGYLHmosg/NodesShownInESpaceTree.pUFusax9kkCG9mFy6SB2Ig/ClientActions.bebMP0fi5U+W1vQKIY5dwg:9xu3L6KefBsOrKDxb+2qrQ", "UBTConnect_EmbedMyEntertaining", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:zq8gk3PQvUStWQlc6FAITw", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:PG8yg5sHU0+_42HFWQFBKw", callContext.id) && model.variables.loadingListVar.isEmpty)) {
while ((OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:3RSRdtWcaE2n4OnF8JOMbQ", callContext.id) && (vars.value.currLoadingItemVar < model.variables.maxLoadingItemsVar))) {
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:_9cEjWgLskW_4oCROxB1Dg", callContext.id);
// CurrLoadingItem = CurrLoadingItem + 1
vars.value.currLoadingItemVar = (vars.value.currLoadingItemVar + 1);
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:zOnymozAEUiRvwrimw2RJw", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(model.variables.loadingListVar, ("Loading " + (vars.value.currLoadingItemVar).toString()), callContext);
}

OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:1+Qz_Mp9kEGoCILMsEUEIQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:63yBPX_N9k2hS2mY0cdK0w", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ACDBfnTIv0CUD+CXJHudLg:bebMP0fi5U+W1vQKIY5dwg", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.ScreenEvent_OnInitialize$vars", [{
name: "CurrLoadingItem",
attrName: "currLoadingItemVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._action_SetRefreshInterval$Action = function (intervalIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_SetRefreshInterval");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.Action_SetRefreshInterval$vars"))());
vars.value.intervalIdInLocal = intervalIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ACDBfnTIv0CUD+CXJHudLg:ugqtQ2t6cUmS5tQD6ad_Sw:/NRWebFlows.1K4x3zRe7EmqzrGYLHmosg/NodesShownInESpaceTree.pUFusax9kkCG9mFy6SB2Ig/ClientActions.ugqtQ2t6cUmS5tQD6ad_Sw:9Apr6obGbXEDCAe0aryEeQ", "UBTConnect_EmbedMyEntertaining", "Action_SetRefreshInterval", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:6xsr4lTkFUeDI7CjPq2zTQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:xb581IXj+kqaJKmHzJwM6A", callContext.id);
// RefreshIntervalId = IntervalId
model.variables.refreshIntervalIdVar = vars.value.intervalIdInLocal;
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:8Cb7XM9HFEG6RbdetBd10Q", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ACDBfnTIv0CUD+CXJHudLg:ugqtQ2t6cUmS5tQD6ad_Sw", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.Action_SetRefreshInterval$vars", [{
name: "IntervalId",
attrName: "intervalIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._action_SetSources$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_SetSources");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ACDBfnTIv0CUD+CXJHudLg:788yYb68pU+iPObtbFmN2w:/NRWebFlows.1K4x3zRe7EmqzrGYLHmosg/NodesShownInESpaceTree.pUFusax9kkCG9mFy6SB2Ig/ClientActions.788yYb68pU+iPObtbFmN2w:kvfjytNcDftXuHZRECLYlw", "UBTConnect_EmbedMyEntertaining", "Action_SetSources", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:pauKTqYuJEWATVSvN8wXkA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:VXftBWXwZEqxYlNNnZ+6wg", callContext.id);
controller.safeExecuteJSNode(UBTConnect_EmbedMyEntertaining_Blocks_Embedded_MyEntertaining_mvc_controller_Action_SetSources_ApplySourcesJS, "ApplySources", "Action_SetSources", {
SourceFilter: OS.DataConversion.JSNodeParamConverter.to(model.variables.sourcesIn, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:gKb4MuVjPEGN1MnCw81AZg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ACDBfnTIv0CUD+CXJHudLg:788yYb68pU+iPObtbFmN2w", callContext.id);
}

};
Controller.prototype._action_OnComplete$Action = function (statusIn, totalIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_OnComplete");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.Action_OnComplete$vars"))());
vars.value.statusInLocal = statusIn;
vars.value.totalInLocal = totalIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("ACDBfnTIv0CUD+CXJHudLg:t3pjYdF1ZkGbdzZ0bxTriw:/NRWebFlows.1K4x3zRe7EmqzrGYLHmosg/NodesShownInESpaceTree.pUFusax9kkCG9mFy6SB2Ig/ClientActions.t3pjYdF1ZkGbdzZ0bxTriw:SP7V6oRjh2aIs+HnRF_RvQ", "UBTConnect_EmbedMyEntertaining", "Action_OnComplete", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:Oormt7fuYUmi3q1zoWjO9w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:hwrpEa3C6kiRfcuUzoD1YQ", callContext.id);
// isLoading = False
model.variables.isLoadingVar = false;
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:C6invYAx2UemYhoUhB9FXA", callContext.id);
// Trigger Event: OnComplete
return controller.onComplete$Action(vars.value.statusInLocal, vars.value.totalInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:e_72YhSN0ka08r2EZRxmRw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ACDBfnTIv0CUD+CXJHudLg:t3pjYdF1ZkGbdzZ0bxTriw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ACDBfnTIv0CUD+CXJHudLg:t3pjYdF1ZkGbdzZ0bxTriw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.Action_OnComplete$vars", [{
name: "Status",
attrName: "statusInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Total",
attrName: "totalInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._action_SetToken$Action = function (tokenIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_SetToken");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.Action_SetToken$vars"))());
vars.value.tokenInLocal = tokenIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ACDBfnTIv0CUD+CXJHudLg:GvyUY3PrAk6F1J9Ol2gMvA:/NRWebFlows.1K4x3zRe7EmqzrGYLHmosg/NodesShownInESpaceTree.pUFusax9kkCG9mFy6SB2Ig/ClientActions.GvyUY3PrAk6F1J9Ol2gMvA:Tc6huBePwrGuW6ACp7UIyw", "UBTConnect_EmbedMyEntertaining", "Action_SetToken", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:NwglIlzFBUWJBU7XI2Isjw", callContext.id);
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:2g1YVxtJzEC4R0jZ6Fv70Q", callContext.id);
controller.safeExecuteJSNode(UBTConnect_EmbedMyEntertaining_Blocks_Embedded_MyEntertaining_mvc_controller_Action_SetToken_SetEntertainingTokenJS, "SetEntertainingToken", "Action_SetToken", {
Token: OS.DataConversion.JSNodeParamConverter.to(vars.value.tokenInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:nX1GrHHIB0Ke15m6feyF5A", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ACDBfnTIv0CUD+CXJHudLg:GvyUY3PrAk6F1J9Ol2gMvA", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.Action_SetToken$vars", [{
name: "Token",
attrName: "tokenInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._action_SetResumeListener$Action = function (listenerIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_SetResumeListener");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.Action_SetResumeListener$vars"))());
vars.value.listenerInLocal = listenerIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ACDBfnTIv0CUD+CXJHudLg:4nNHamjcSkq3wbaZgRiwuA:/NRWebFlows.1K4x3zRe7EmqzrGYLHmosg/NodesShownInESpaceTree.pUFusax9kkCG9mFy6SB2Ig/ClientActions.4nNHamjcSkq3wbaZgRiwuA:WZHmDVyV4xF087VTYqySxg", "UBTConnect_EmbedMyEntertaining", "Action_SetResumeListener", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:FSMobMKv3UGJobZg2x_JNw", callContext.id);
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:uxTB+kQW5EyFlLDGvRoeuw", callContext.id);
// ResumeListener = Listener
model.variables.resumeListenerVar = vars.value.listenerInLocal;
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:oBCofFOmpEai2KTP7mU_Xg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ACDBfnTIv0CUD+CXJHudLg:4nNHamjcSkq3wbaZgRiwuA", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.Action_SetResumeListener$vars", [{
name: "Listener",
attrName: "listenerInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._action_OnReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_OnReady");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ACDBfnTIv0CUD+CXJHudLg:yR28dZGlkEyaIB59FsVSsA:/NRWebFlows.1K4x3zRe7EmqzrGYLHmosg/NodesShownInESpaceTree.pUFusax9kkCG9mFy6SB2Ig/ClientActions.yR28dZGlkEyaIB59FsVSsA:NbbKqSXecxDJg42WGMgPZA", "UBTConnect_EmbedMyEntertaining", "Action_OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:Mm4nj+8iVk66hgKTjX8yBQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:+OHldP5iOEuGY3i5Wx1r5w", callContext.id);
// Trigger Event: OnReady
return controller.onReady$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:c5nXpeB_f0iV4DSclEF1_g", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ACDBfnTIv0CUD+CXJHudLg:yR28dZGlkEyaIB59FsVSsA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ACDBfnTIv0CUD+CXJHudLg:yR28dZGlkEyaIB59FsVSsA", callContext.id);
throw ex;

});
};
Controller.prototype._action_OnOpenMap$Action = function (latIn, lngIn, labelIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_OnOpenMap");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.Action_OnOpenMap$vars"))());
vars.value.latInLocal = latIn;
vars.value.lngInLocal = lngIn;
vars.value.labelInLocal = labelIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("ACDBfnTIv0CUD+CXJHudLg:oFnzlwbSfEqctSD+n4VVDw:/NRWebFlows.1K4x3zRe7EmqzrGYLHmosg/NodesShownInESpaceTree.pUFusax9kkCG9mFy6SB2Ig/ClientActions.oFnzlwbSfEqctSD+n4VVDw:K7gHKC5+315IPQmSvGRKRA", "UBTConnect_EmbedMyEntertaining", "Action_OnOpenMap", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:3RoBoq1ZiUGDPz1ZGFlIdA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:Wg3IMq6ApEu6jZzuhAfWXQ", callContext.id);
// Trigger Event: OnOpenMap
return controller.onOpenMap$Action(vars.value.latInLocal, vars.value.lngInLocal, vars.value.labelInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:Y65rzAyHNUGdc6me1KjuoA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ACDBfnTIv0CUD+CXJHudLg:oFnzlwbSfEqctSD+n4VVDw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ACDBfnTIv0CUD+CXJHudLg:oFnzlwbSfEqctSD+n4VVDw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.Action_OnOpenMap$vars", [{
name: "Lat",
attrName: "latInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Lng",
attrName: "lngInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Label",
attrName: "labelInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._action_SetMessageListener$Action = function (listenerIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_SetMessageListener");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.Action_SetMessageListener$vars"))());
vars.value.listenerInLocal = listenerIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ACDBfnTIv0CUD+CXJHudLg:JYL8nPfnJkyf4O7zIWve8w:/NRWebFlows.1K4x3zRe7EmqzrGYLHmosg/NodesShownInESpaceTree.pUFusax9kkCG9mFy6SB2Ig/ClientActions.JYL8nPfnJkyf4O7zIWve8w:Sv+PxrAs_ae5WcnCZwWZmQ", "UBTConnect_EmbedMyEntertaining", "Action_SetMessageListener", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:2xG6e7HI00OSwy5LPHI8_A", callContext.id);
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:NZczNPA4MkyK3S_4ZOKvYw", callContext.id);
// MessageListener = Listener
model.variables.messageListenerVar = vars.value.listenerInLocal;
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:sTMVu5XOBEmupnNWdDnTAw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ACDBfnTIv0CUD+CXJHudLg:JYL8nPfnJkyf4O7zIWve8w", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.Action_SetMessageListener$vars", [{
name: "Listener",
attrName: "listenerInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._action_OnNavBack$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_OnNavBack");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ACDBfnTIv0CUD+CXJHudLg:UUvTnyB4eUqi+uLQvKA+JQ:/NRWebFlows.1K4x3zRe7EmqzrGYLHmosg/NodesShownInESpaceTree.pUFusax9kkCG9mFy6SB2Ig/ClientActions.UUvTnyB4eUqi+uLQvKA+JQ:1e8eUoWTD8saP77nop3h_g", "UBTConnect_EmbedMyEntertaining", "Action_OnNavBack", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:W28jcqM0QkqR+T3zCsHjCw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:sVDVpEtz7E6g0RTRPRdqvA", callContext.id);
// Trigger Event: OnNavBack
return controller.onNavBack$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:GLGLHB3ZJ06AsMwIrsnMTg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ACDBfnTIv0CUD+CXJHudLg:UUvTnyB4eUqi+uLQvKA+JQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ACDBfnTIv0CUD+CXJHudLg:UUvTnyB4eUqi+uLQvKA+JQ", callContext.id);
throw ex;

});
};
Controller.prototype._action_OnAuthenticated$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_OnAuthenticated");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ACDBfnTIv0CUD+CXJHudLg:pW8yoDK_GUS6jDd3PpdCdw:/NRWebFlows.1K4x3zRe7EmqzrGYLHmosg/NodesShownInESpaceTree.pUFusax9kkCG9mFy6SB2Ig/ClientActions.pW8yoDK_GUS6jDd3PpdCdw:y8N4+jGXEPJVMK9D10X7TQ", "UBTConnect_EmbedMyEntertaining", "Action_OnAuthenticated", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:QfPJ4WyjNkOzpvoOEg0DqA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:s_KHYk0ggEOFFN8xY5XVwg", callContext.id);
// Trigger Event: OnAuthenticated
return controller.onAuthenticated$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:7QWsbbhWL02Id+1IK0UG+g", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ACDBfnTIv0CUD+CXJHudLg:pW8yoDK_GUS6jDd3PpdCdw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ACDBfnTIv0CUD+CXJHudLg:pW8yoDK_GUS6jDd3PpdCdw", callContext.id);
throw ex;

});
};
Controller.prototype._onAfterFetch_GetEntertainingConfig$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnAfterFetch_GetEntertainingConfig");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ACDBfnTIv0CUD+CXJHudLg:aiEroe1B4EaUxcM4r1js7w:/NRWebFlows.1K4x3zRe7EmqzrGYLHmosg/NodesShownInESpaceTree.pUFusax9kkCG9mFy6SB2Ig/ClientActions.aiEroe1B4EaUxcM4r1js7w:zRqM5sUAcdD5yIdHI0vppA", "UBTConnect_EmbedMyEntertaining", "OnAfterFetch_GetEntertainingConfig", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:B6h4W8zkjkOf43BUKHSqbw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:kjFEpoES7kirHCpm9ufqeA", callContext.id);
// Execute Action: RequireScript
model.flush();
return OS.SystemActions.requireScript((model.variables.getEntertainingConfigDataAct.baseURLOut + "/embed-entertaining.js"), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:EK6HdpAweUyBLX7DtKWRJA", callContext.id);
// Execute Action: Action_SetToken
controller._action_SetToken$Action(model.variables.getEntertainingConfigDataAct.tokenOut, callContext);
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:qtvecuMOV0Cx_OK7NBuv2Q", callContext.id);
controller.safeExecuteJSNode(UBTConnect_EmbedMyEntertaining_Blocks_Embedded_MyEntertaining_mvc_controller_OnAfterFetch_GetEntertainingConfig_InitializeCalendarJS, "InitializeCalendar", "OnAfterFetch_GetEntertainingConfig", {
Sources: OS.DataConversion.JSNodeParamConverter.to(model.variables.sourcesIn, OS.DataTypes.DataTypes.Text),
MessageListener: OS.DataConversion.JSNodeParamConverter.to(model.variables.messageListenerVar, OS.DataTypes.DataTypes.Object),
View: OS.DataConversion.JSNodeParamConverter.to(model.variables.viewIn, OS.DataTypes.DataTypes.Text),
ResumeListener: OS.DataConversion.JSNodeParamConverter.to(model.variables.resumeListenerVar, OS.DataTypes.DataTypes.Object),
B2CTenant: OS.DataConversion.JSNodeParamConverter.to(model.variables.b2CTenantIn, OS.DataTypes.DataTypes.Text),
B2CPolicy: OS.DataConversion.JSNodeParamConverter.to(model.variables.getEntertainingConfigDataAct.b2CPolicyOut, OS.DataTypes.DataTypes.Text),
Theme: OS.DataConversion.JSNodeParamConverter.to(model.variables.themeIn, OS.DataTypes.DataTypes.Text),
RefreshIntervalId: OS.DataConversion.JSNodeParamConverter.to(model.variables.refreshIntervalIdVar, OS.DataTypes.DataTypes.Object),
BaseURL: OS.DataConversion.JSNodeParamConverter.to(model.variables.getEntertainingConfigDataAct.baseURLOut, OS.DataTypes.DataTypes.Text),
ContainerId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("connect2entertaining"), OS.DataTypes.DataTypes.Text),
B2CClientId: OS.DataConversion.JSNodeParamConverter.to(model.variables.getEntertainingConfigDataAct.b2CClientIdOut, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {
JSUtils_Console_Log: UBTJavaScriptUtilsController.default.getClientActionProxies(controller).jSUtils_Console_Log$Action,
Action_OnReady: controller.clientActionProxies.action_OnReady$Action,
Action_OnAuthenticated: controller.clientActionProxies.action_OnAuthenticated$Action,
Action_OnComplete: controller.clientActionProxies.action_OnComplete$Action,
Action_OnError: controller.clientActionProxies.action_OnError$Action,
Action_OnNavBack: controller.clientActionProxies.action_OnNavBack$Action,
Action_OnOpenMap: controller.clientActionProxies.action_OnOpenMap$Action,
Action_SetMessageListener: controller.clientActionProxies.action_SetMessageListener$Action,
Action_RefreshToken: controller.clientActionProxies.action_RefreshToken$Action,
Action_SetRefreshInterval: controller.clientActionProxies.action_SetRefreshInterval$Action,
Action_SetResumeListener: controller.clientActionProxies.action_SetResumeListener$Action
}, {});
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:cFWLCQdS10GsFr7oPGczCA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ACDBfnTIv0CUD+CXJHudLg:aiEroe1B4EaUxcM4r1js7w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ACDBfnTIv0CUD+CXJHudLg:aiEroe1B4EaUxcM4r1js7w", callContext.id);
throw ex;

});
};
Controller.prototype._action_OnError$Action = function (messageIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_OnError");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.Action_OnError$vars"))());
vars.value.messageInLocal = messageIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("ACDBfnTIv0CUD+CXJHudLg:0sZCruxIv0mCJ5MdsM__DA:/NRWebFlows.1K4x3zRe7EmqzrGYLHmosg/NodesShownInESpaceTree.pUFusax9kkCG9mFy6SB2Ig/ClientActions.0sZCruxIv0mCJ5MdsM__DA:4ybcHBQi_xqVFiRKqBvp+w", "UBTConnect_EmbedMyEntertaining", "Action_OnError", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:FGW8w9O05Ua5gcp6IqusCg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:VyN+F4wzKk+W1aaXQZoLqA", callContext.id);
// Trigger Event: OnError
return controller.onError$Action(vars.value.messageInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:AKUv1z6J706i2Zdeag3Jtg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ACDBfnTIv0CUD+CXJHudLg:0sZCruxIv0mCJ5MdsM__DA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ACDBfnTIv0CUD+CXJHudLg:0sZCruxIv0mCJ5MdsM__DA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.Action_OnError$vars", [{
name: "Message",
attrName: "messageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._action_RefreshToken$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_RefreshToken");
callContext = controller.callContext(callContext);
var appManager_Get_UserIdTokenVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.appManager_Get_UserIdTokenVar = appManager_Get_UserIdTokenVar;
OutSystemsDebugger.push("ACDBfnTIv0CUD+CXJHudLg:ru8T37Ap1USjYh146e82PQ:/NRWebFlows.1K4x3zRe7EmqzrGYLHmosg/NodesShownInESpaceTree.pUFusax9kkCG9mFy6SB2Ig/ClientActions.ru8T37Ap1USjYh146e82PQ:8f+QJdPj5jqct2GzznB1dA", "UBTConnect_EmbedMyEntertaining", "Action_RefreshToken", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:85yTfbkuGESEP3K1XWn4gw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:6lUWFV817UCEF7KvXTwbHQ", callContext.id);
// Execute Action: AppManager_Get_UserIdToken
model.flush();
return controller.appManager_Get_UserIdToken$ServerAction("", callContext).then(function (value) {
appManager_Get_UserIdTokenVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:LBTETW+VIk2r1O1j0BYGsQ", callContext.id);
// Execute Action: Action_SetToken
controller._action_SetToken$Action(appManager_Get_UserIdTokenVar.value.idTokenOut, callContext);
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:KD4JQlNLtk2jvOasPkllVQ", callContext.id);
controller.safeExecuteJSNode(UBTConnect_EmbedMyEntertaining_Blocks_Embedded_MyEntertaining_mvc_controller_Action_RefreshToken_RefreshEmbedTokenJS, "RefreshEmbedToken", "Action_RefreshToken", {
IdToken: OS.DataConversion.JSNodeParamConverter.to(appManager_Get_UserIdTokenVar.value.idTokenOut, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("ACDBfnTIv0CUD+CXJHudLg:_Do6_mVjFEWU1SVuyN4Jng", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ACDBfnTIv0CUD+CXJHudLg:ru8T37Ap1USjYh146e82PQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ACDBfnTIv0CUD+CXJHudLg:ru8T37Ap1USjYh146e82PQ", callContext.id);
throw ex;

});
};

Controller.prototype.screenEvent_OnParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._screenEvent_OnParametersChanged$Action, callContext);

};
Controller.prototype.screenEvent_OnDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._screenEvent_OnDestroy$Action, callContext);

};
Controller.prototype.screenEvent_OnInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._screenEvent_OnInitialize$Action, callContext);

};
Controller.prototype.action_SetRefreshInterval$Action = function (intervalIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_SetRefreshInterval$Action, callContext, intervalIdIn);

};
Controller.prototype.action_SetSources$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_SetSources$Action, callContext);

};
Controller.prototype.action_OnComplete$Action = function (statusIn, totalIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_OnComplete$Action, callContext, statusIn, totalIn);

};
Controller.prototype.action_SetToken$Action = function (tokenIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_SetToken$Action, callContext, tokenIn);

};
Controller.prototype.action_SetResumeListener$Action = function (listenerIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_SetResumeListener$Action, callContext, listenerIn);

};
Controller.prototype.action_OnReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_OnReady$Action, callContext);

};
Controller.prototype.action_OnOpenMap$Action = function (latIn, lngIn, labelIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_OnOpenMap$Action, callContext, latIn, lngIn, labelIn);

};
Controller.prototype.action_SetMessageListener$Action = function (listenerIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_SetMessageListener$Action, callContext, listenerIn);

};
Controller.prototype.action_OnNavBack$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_OnNavBack$Action, callContext);

};
Controller.prototype.action_OnAuthenticated$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_OnAuthenticated$Action, callContext);

};
Controller.prototype.onAfterFetch_GetEntertainingConfig$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onAfterFetch_GetEntertainingConfig$Action, callContext);

};
Controller.prototype.action_OnError$Action = function (messageIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_OnError$Action, callContext, messageIn);

};
Controller.prototype.action_RefreshToken$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_RefreshToken$Action, callContext);

};
Controller.prototype.onReady$Action = function () {
return Promise.resolve();
};
Controller.prototype.onNavBack$Action = function () {
return Promise.resolve();
};
Controller.prototype.onAuthenticated$Action = function () {
return Promise.resolve();
};
Controller.prototype.onOpenMap$Action = function () {
return Promise.resolve();
};
Controller.prototype.onComplete$Action = function () {
return Promise.resolve();
};
Controller.prototype.onError$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ACDBfnTIv0CUD+CXJHudLg:1K4x3zRe7EmqzrGYLHmosg:/NRWebFlows.1K4x3zRe7EmqzrGYLHmosg:hvLv3lpmYtwoYmMHyFgf5g", "UBTConnect_EmbedMyEntertaining", "Blocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ACDBfnTIv0CUD+CXJHudLg:pUFusax9kkCG9mFy6SB2Ig:/NRWebFlows.1K4x3zRe7EmqzrGYLHmosg/NodesShownInESpaceTree.pUFusax9kkCG9mFy6SB2Ig:FyTAivu3k5_9wjI3l28j4w", "UBTConnect_EmbedMyEntertaining", "Embedded_MyEntertaining", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ACDBfnTIv0CUD+CXJHudLg:pUFusax9kkCG9mFy6SB2Ig", callContext.id);
OutSystemsDebugger.pop("ACDBfnTIv0CUD+CXJHudLg:1K4x3zRe7EmqzrGYLHmosg", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Blocks/Embedded_MyEntertaining On Initialize");
return controller.screenEvent_OnInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Blocks/Embedded_MyEntertaining On Destroy");
return controller.screenEvent_OnDestroy$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Blocks/Embedded_MyEntertaining On Parameters Changed");
return controller.screenEvent_OnParametersChanged$Action(callContext);

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
return UBTConnect_EmbedMyEntertainingController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnect_EmbedMyEntertainingLanguageResources);
});
define("UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.mvc$controller.ScreenEvent_OnDestroy.CleanupCalendarJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if ($parameters.MessageListener) {
    window.removeEventListener('message', $parameters.MessageListener);
}
if ($parameters.RefreshIntervalId) {
    clearInterval($parameters.RefreshIntervalId);
}
if ($parameters.ResumeListener) {
    document.removeEventListener('resume', $parameters.ResumeListener);
    document.removeEventListener('visibilitychange', $parameters.ResumeListener);
}
if (window.Connect2Entertaining && window.Connect2Entertaining.embed.isConfigured()) {
    window.Connect2Entertaining.embed.destroy();
}
};
});
define("UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.mvc$controller.Action_SetSources.ApplySourcesJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if (window.Connect2Entertaining && window.Connect2Entertaining.embed.isConfigured()) {
    window.Connect2Entertaining.embed.setSources($parameters.SourceFilter || null);
}
};
});
define("UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.mvc$controller.Action_SetToken.SetEntertainingTokenJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.__ubtEntertainingToken = $parameters.Token;
};
});
define("UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.mvc$controller.OnAfterFetch_GetEntertainingConfig.InitializeCalendarJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if (window.Connect2Entertaining && window.Connect2Entertaining.embed.isConfigured()) {
    window.Connect2Entertaining.embed.destroy();
}
if ($parameters.MessageListener) {
    window.removeEventListener('message', $parameters.MessageListener);
}
if ($parameters.RefreshIntervalId) {
    clearInterval($parameters.RefreshIntervalId);
}
if ($parameters.ResumeListener) {
    document.removeEventListener('resume', $parameters.ResumeListener);
    document.removeEventListener('visibilitychange', $parameters.ResumeListener);
}

Connect2Entertaining.embed.init({
    baseUrl: $parameters.BaseURL,
    containerId: $parameters.ContainerId,
    view: $parameters.View,
    theme: $parameters.Theme,
    height: '100%',
    autoResize: false,
    sources: $parameters.Sources || null,
    getIdToken: function () { return window.__ubtEntertainingToken; },
    b2cTenants: $parameters.B2CTenant,
    b2cClientIds: $parameters.B2CClientId,
    b2cPolicy: $parameters.B2CPolicy,
    onReady: function () {
        $actions.JSUtils_Console_Log('My Entertaining embed ready');
        $actions.Action_OnReady();
    },
    onAuthenticated: function () {
        $actions.JSUtils_Console_Log('My Entertaining session authenticated');
        $actions.Action_OnAuthenticated();
    },
    onComplete: function (data) {
        var status = (data && data.status) || '';
        var total = (data && data.total != null) ? '' + data.total : '';
        $actions.JSUtils_Console_Log('My Entertaining load complete: ' + status + ' (' + total + ' occurrences)');
        $actions.Action_OnComplete(status, total);
    },
    onResize: function (height) {
        // autoResize is false by design (avoids double scrollbar in the mobile shell) - ignore
    },
    onError: function (error) {
        var message = (error && (error.message || error.type)) || 'Unknown error';
        $actions.JSUtils_Console_Log('My Entertaining error: ' + message);
        $actions.Action_OnError(message);
    },
    onNavBack: function () {
        $actions.Action_OnNavBack();
    }
});

var baseUrl = $parameters.BaseURL;
var messageListener = function (event) {
    if (event.origin !== baseUrl) return;
    var data = event.data || {};

    if (data.type === 'embed:open-map') {
        $actions.Action_OnOpenMap('' + data.lat, '' + data.lng, data.label || '');
    }

    if (data.type === 'events:loaded' && data.failedSources && data.failedSources.length) {
        $actions.JSUtils_Console_Log('Some calendar sources failed: ' + data.failedSources.join(', '));
    }
};
window.addEventListener('message', messageListener);
$actions.Action_SetMessageListener(messageListener);

var refreshIntervalId = setInterval(function () {
    $actions.Action_RefreshToken();
}, 10 * 60 * 1000);
$actions.Action_SetRefreshInterval(refreshIntervalId);

var resumeListener = function () {
    if (document.hidden) return;
    $actions.Action_RefreshToken();
};
document.addEventListener('resume', resumeListener, false);
document.addEventListener('visibilitychange', resumeListener);
$actions.Action_SetResumeListener(resumeListener);
};
});
define("UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.mvc$controller.Action_RefreshToken.RefreshEmbedTokenJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if (window.Connect2Entertaining && window.Connect2Entertaining.embed.isConfigured()) {
    window.Connect2Entertaining.embed.refreshToken($parameters.IdToken);
}
};
});

define("UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"eo9CDdEkEkmGh49ZAQT0OA": {
getter: function (varBag, idService) {
return varBag.cleanupCalendarJSResult.value;
}
},
"2d7jCRxyvEOadPtiClzbOA": {
getter: function (varBag, idService) {
return varBag.vars.value.currLoadingItemVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"y9PqB5Cjq0mAwl5YHvvmzA": {
getter: function (varBag, idService) {
return varBag.vars.value.intervalIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"VXftBWXwZEqxYlNNnZ+6wg": {
getter: function (varBag, idService) {
return varBag.applySourcesJSResult.value;
}
},
"yhLAoXsTHkOs765RoZeSgg": {
getter: function (varBag, idService) {
return varBag.vars.value.statusInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"uIzLsEaAcU24Weoo1pDpew": {
getter: function (varBag, idService) {
return varBag.vars.value.totalInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"lQrAnqH2+UKpBmRvNl_6DA": {
getter: function (varBag, idService) {
return varBag.vars.value.tokenInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"2g1YVxtJzEC4R0jZ6Fv70Q": {
getter: function (varBag, idService) {
return varBag.setEntertainingTokenJSResult.value;
}
},
"gWK5oKkJ6kCmpLEpqZKO5g": {
getter: function (varBag, idService) {
return varBag.vars.value.listenerInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"F5EDpxatGUyWOVcdrukELQ": {
getter: function (varBag, idService) {
return varBag.vars.value.latInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"k3sgGc2S_0GR9yiKXYqeRQ": {
getter: function (varBag, idService) {
return varBag.vars.value.lngInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"faYBrL9ngkSyVhYVYoiT5Q": {
getter: function (varBag, idService) {
return varBag.vars.value.labelInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"2XU+0KesTESusFypRalCbg": {
getter: function (varBag, idService) {
return varBag.vars.value.listenerInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"qtvecuMOV0Cx_OK7NBuv2Q": {
getter: function (varBag, idService) {
return varBag.initializeCalendarJSResult.value;
}
},
"faVbsNzzWEWwblHnzPSAKw": {
getter: function (varBag, idService) {
return varBag.vars.value.messageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"6lUWFV817UCEF7KvXTwbHQ": {
getter: function (varBag, idService) {
return varBag.appManager_Get_UserIdTokenVar.value;
}
},
"KD4JQlNLtk2jvOasPkllVQ": {
getter: function (varBag, idService) {
return varBag.refreshEmbedTokenJSResult.value;
}
},
"qP5bLMdTz06I5PJytWTuYQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isLoadingVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"sRupHZNtDESvOh4lvk6efA": {
getter: function (varBag, idService) {
return varBag.model.variables.messageListenerVar;
},
dataType: OS.DataTypes.DataTypes.Object
},
"E07eWMMuskmfOgi3LtFXPA": {
getter: function (varBag, idService) {
return varBag.model.variables.refreshIntervalIdVar;
},
dataType: OS.DataTypes.DataTypes.Object
},
"5Mp1CE9HBUuPLbFJUyQtJw": {
getter: function (varBag, idService) {
return varBag.model.variables.loadingListVar;
}
},
"jifrRErg1EarbTOmK6zOOA": {
getter: function (varBag, idService) {
return varBag.model.variables.maxLoadingItemsVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"Mzf4z31OkkWXOni6wY_0ZA": {
getter: function (varBag, idService) {
return varBag.model.variables.resumeListenerVar;
},
dataType: OS.DataTypes.DataTypes.Object
},
"oxStrwLZkECCd15pgRZyYA": {
getter: function (varBag, idService) {
return varBag.model.variables.viewIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"grCinYcbpkqH6E3_ckzZhQ": {
getter: function (varBag, idService) {
return varBag.model.variables.themeIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"A_4fdNOkq0e9H4KQ8n5nAA": {
getter: function (varBag, idService) {
return varBag.model.variables.sourcesIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"EVLkJjGwy0mvnOFhLO+vCg": {
getter: function (varBag, idService) {
return varBag.model.variables.b2CTenantIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"54rrN6sQzk6q_nSF1kkvng": {
getter: function (varBag, idService) {
return varBag.model.variables.getEntertainingConfigDataAct;
}
},
"P+gwMBMNJEiBVFSAKlhV0w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("connect2entertaining"));
})(varBag.model, idService);
}
},
"6Y3xXm8Ikk63g+R_PzYtwg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
})(varBag.model, idService);
}
},
"ni86qcYFqE248dXphOai+w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"+N4rpStcrEKHC3vKqw2o9w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
