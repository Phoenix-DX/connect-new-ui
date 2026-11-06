define("UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.controller$GetClasses_ImageCard", "UBTConnectLibrary.controller$GetClasses_BackgroundImageSize", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.controller$GetBorderOptions_ImageCard", "UBTConnectLibrary.controller$GetTextOptions_ImageCard", "UBTConnectLibrary.controller$GetSpacingOptions_ImageCardContent"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("MainContainerClass", "mainContainerClassVar", "MainContainerClass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "ubt-image-card";
}, false), 
this.attr("BorderOptions", "borderOptionsVar", "BorderOptions", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.BorderOptionsRec());
}, false, UBTConnectLibraryModel.BorderOptionsRec), 
this.attr("ContentSpacingOptions", "contentSpacingOptionsVar", "ContentSpacingOptions", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.SpacingOptionsRec());
}, false, UBTConnectLibraryModel.SpacingOptionsRec), 
this.attr("TextOptions", "textOptionsVar", "TextOptions", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.TextOptionsRec());
}, false, UBTConnectLibraryModel.TextOptionsRec), 
this.attr("In_CardTypeId", "in_CardTypeIdIn", "In_CardTypeId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_CardTypeIdInDataFetchStatus", "_in_CardTypeIdInDataFetchStatus", "_in_CardTypeIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ItemsPerRow", "in_ItemsPerRowIn", "In_ItemsPerRow", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("_in_ItemsPerRowInDataFetchStatus", "_in_ItemsPerRowInDataFetchStatus", "_in_ItemsPerRowInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ShowAvatarList", "in_ShowAvatarListIn", "In_ShowAvatarList", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_ShowAvatarListInDataFetchStatus", "_in_ShowAvatarListInDataFetchStatus", "_in_ShowAvatarListInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ExtendedClass", "in_ExtendedClassIn", "In_ExtendedClass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_ExtendedClassInDataFetchStatus", "_in_ExtendedClassInDataFetchStatus", "_in_ExtendedClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_IsBookmarked", "in_IsBookmarkedIn", "In_IsBookmarked", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsBookmarkedInDataFetchStatus", "_in_IsBookmarkedInDataFetchStatus", "_in_IsBookmarkedInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_BookmarkModifier", "in_BookmarkModifierIn", "In_BookmarkModifier", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_BookmarkModifierInDataFetchStatus", "_in_BookmarkModifierInDataFetchStatus", "_in_BookmarkModifierInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_CardTypeId" in inputs) {
this.variables.in_CardTypeIdIn = inputs.In_CardTypeId;
if("_in_CardTypeIdInDataFetchStatus" in inputs) {
this.variables._in_CardTypeIdInDataFetchStatus = inputs._in_CardTypeIdInDataFetchStatus;
}

}

if("In_ItemsPerRow" in inputs) {
this.variables.in_ItemsPerRowIn = inputs.In_ItemsPerRow;
if("_in_ItemsPerRowInDataFetchStatus" in inputs) {
this.variables._in_ItemsPerRowInDataFetchStatus = inputs._in_ItemsPerRowInDataFetchStatus;
}

}

if("In_ShowAvatarList" in inputs) {
this.variables.in_ShowAvatarListIn = inputs.In_ShowAvatarList;
if("_in_ShowAvatarListInDataFetchStatus" in inputs) {
this.variables._in_ShowAvatarListInDataFetchStatus = inputs._in_ShowAvatarListInDataFetchStatus;
}

}

if("In_ExtendedClass" in inputs) {
this.variables.in_ExtendedClassIn = inputs.In_ExtendedClass;
if("_in_ExtendedClassInDataFetchStatus" in inputs) {
this.variables._in_ExtendedClassInDataFetchStatus = inputs._in_ExtendedClassInDataFetchStatus;
}

}

if("In_IsBookmarked" in inputs) {
this.variables.in_IsBookmarkedIn = inputs.In_IsBookmarked;
if("_in_IsBookmarkedInDataFetchStatus" in inputs) {
this.variables._in_IsBookmarkedInDataFetchStatus = inputs._in_IsBookmarkedInDataFetchStatus;
}

}

if("In_BookmarkModifier" in inputs) {
this.variables.in_BookmarkModifierIn = inputs.In_BookmarkModifier;
if("_in_BookmarkModifierInDataFetchStatus" in inputs) {
this.variables._in_BookmarkModifierInDataFetchStatus = inputs._in_BookmarkModifierInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "ConnectCorePatterns.ImageCard_LazyLoading");
});
define("UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.mvc$model", "UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.mvc$controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.controller$GetClasses_ImageCard", "UBTConnectLibrary.controller$GetClasses_BackgroundImageSize", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.controller$GetBorderOptions_ImageCard", "UBTConnectLibrary.controller$GetTextOptions_ImageCard", "UBTConnectLibrary.controller$GetSpacingOptions_ImageCardContent"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvc_model, UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvc_controller, UBTConnectLibraryClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets) {
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
        View.displayName = "ConnectCorePatterns.ImageCard_LazyLoading";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvc_controller;
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
ExtendedClasses: model.getCachedValue(idService.getId("_DTuPC_e9EiMin7jPF4pag.ExtendedClasses"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.getClasses_ImageCard$Action(model.variables.mainContainerClassVar, model.variables.in_CardTypeIdIn, UBTConnectLibraryModel.staticEntities.uBT_AvatarSize.small_40, model.variables.in_ShowAvatarListIn, model.variables.in_ExtendedClassIn, callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.mainContainerClassVar;
}, function () {
return model.variables.in_CardTypeIdIn;
}, function () {
return model.variables.in_ShowAvatarListIn;
}, function () {
return model.variables.in_ExtendedClassIn;
}),
_extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_CardTypeIdInDataFetchStatus, model.variables._in_ShowAvatarListInDataFetchStatus, model.variables._in_ExtendedClassInDataFetchStatus),
Options: model.getCachedValue(idService.getId("_DTuPC_e9EiMin7jPF4pag.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.backgroundAttr = function () {
var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
rec.backgroundColorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral0;
return rec;
}();
rec.borderOptionsAttr = model.variables.borderOptionsVar;
rec.textOptionsAttr = model.variables.textOptionsVar;
return rec;
}();
}, function () {
return model.variables.borderOptionsVar;
}, function () {
return model.variables.textOptionsVar;
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
controller.event_Click$Action(controller.callContext(eventHandlerContext));
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
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("ImageWrapper.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.borderOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.BorderOptionsRec();
rec.radiusAttr = function () {
var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
rec.topLeftIdAttr = model.variables.borderOptionsVar.radiusAttr.generalSizeIdAttr;
rec.topRightIdAttr = model.variables.borderOptionsVar.radiusAttr.generalSizeIdAttr;
return rec;
}();
return rec;
}();
rec.displayOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
rec.displayAttr = UBTConnectLibraryModel.staticEntities.uBT_Display.flex;
rec.alignItemsAttr = UBTConnectLibraryModel.staticEntities.uBT_AlignItems.flexStart;
rec.justifyContentAttr = UBTConnectLibraryModel.staticEntities.uBT_JustifyContent.center;
return rec;
}();
rec.isSkeletonElementAttr = true;
return rec;
}();
}, function () {
return model.variables.borderOptionsVar.radiusAttr.generalSizeIdAttr;
}),
ExtendedClasses: model.getCachedValue(idService.getId("ImageWrapper.ExtendedClasses"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatClasses$Action(OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatClasses$Action(OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatClasses$Action((model.variables.mainContainerClassVar + "__background-image"), OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.getClasses_BackgroundImageSize$Action(model.variables.in_CardTypeIdIn, model.variables.in_ItemsPerRowIn, callContext).classesOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatClasses$Action(((model.variables.in_IsBookmarkedIn) ? ((model.variables.mainContainerClassVar + "__bookmarked")) : ("")), model.variables.in_BookmarkModifierIn, callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), "position-relative", callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.mainContainerClassVar;
}, function () {
return model.variables.in_CardTypeIdIn;
}, function () {
return model.variables.in_ItemsPerRowIn;
}, function () {
return model.variables.in_IsBookmarkedIn;
}, function () {
return model.variables.in_BookmarkModifierIn;
}),
_extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_CardTypeIdInDataFetchStatus, model.variables._in_ItemsPerRowInDataFetchStatus, model.variables._in_IsBookmarkedInDataFetchStatus, model.variables._in_BookmarkModifierInDataFetchStatus)
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
name: "ImageWrapper",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.lazyImage_Placeholder,
style: (model.variables.mainContainerClassVar + "--lazy-image-placeholder "),
_idProps: {
service: idService,
name: "LazyImage_Placeholder"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_ImageTag,
style: "position-absolute absolute-bottom-right padding-s",
_idProps: {
service: idService,
name: "Placeholder_ImageTag"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
}
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: model.variables.in_ShowAvatarListIn,
_idProps: {
service: idService,
name: "DIV_AvatarListWrapper"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ShowAvatarListInDataFetchStatus)
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.avatarList,
style: (model.variables.mainContainerClassVar + "__avatar-list"),
_idProps: {
service: idService,
name: "AvatarList"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("JslMbluJYEOfoXBiCOV2tw.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = model.variables.contentSpacingOptionsVar;
rec.textOptionsAttr = model.variables.textOptionsVar;
return rec;
}();
}, function () {
return model.variables.contentSpacingOptionsVar;
}, function () {
return model.variables.textOptionsVar;
}),
ExtendedClasses: (((((model.variables.mainContainerClassVar + "__content") + " ") + model.variables.mainContainerClassVar) + "__content--type-") + model.variables.in_CardTypeIdIn),
_extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_CardTypeIdInDataFetchStatus)
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
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_Content,
_idProps: {
service: idService,
name: "Placeholder_Content"
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
define("UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.mvc$debugger", "UBTConnectLibrary.controller$GetClasses_ImageCard", "UBTConnectLibrary.controller$GetClasses_BackgroundImageSize", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.controller$GetBorderOptions_ImageCard", "UBTConnectLibrary.controller$GetTextOptions_ImageCard", "UBTConnectLibrary.controller$GetSpacingOptions_ImageCardContent"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvc_Debugger) {
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
Controller.prototype._onInitialize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
var getBorderOptions_ImageCardVar = new OS.DataTypes.VariableHolder();
var getTextOptions_ImageCardVar = new OS.DataTypes.VariableHolder();
var getSpacingOptions_ImageCardContentVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getBorderOptions_ImageCardVar = getBorderOptions_ImageCardVar;
varBag.getTextOptions_ImageCardVar = getTextOptions_ImageCardVar;
varBag.getSpacingOptions_ImageCardContentVar = getSpacingOptions_ImageCardContentVar;
try {OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:92IRp5Q0WUy2RCxpwjcK4w:/NRWebFlows.7WP6eMpZLUWcKuZ3c_pmbg/NodesShownInESpaceTree.L2R9hjEU+EWKQq8HnRW3gA/ClientActions.92IRp5Q0WUy2RCxpwjcK4w:Y3w3YsoQYl9M7ueM956tuA", "UBTConnectLibrary", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:r_E20hWM2UKKnqEM_Dhfig", callContext.id);
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:66fWqpnWNUW35ag9uFo4Gw", callContext.id);
// Execute Action: GetBorderOptions_ImageCard
getBorderOptions_ImageCardVar.value = UBTConnectLibraryController.default.getBorderOptions_ImageCard$Action(model.variables.in_CardTypeIdIn, callContext);

// BorderOptions
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:PIgQSf5g5UC1XbDyYcU82A", callContext.id);
// BorderOptions = GetBorderOptions_ImageCard.BorderOptions
model.variables.borderOptionsVar = getBorderOptions_ImageCardVar.value.borderOptionsOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:wEza9uAxaEmUP3HkKpWKyw", callContext.id);
// Execute Action: GetSpacingOptions_ImageCardContent
getSpacingOptions_ImageCardContentVar.value = UBTConnectLibraryController.default.getSpacingOptions_ImageCardContent$Action(model.variables.in_CardTypeIdIn, callContext);

// ContentSpacingOptions
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:+sSA6DJbeUWDdkMoGeWRDQ", callContext.id);
// ContentSpacingOptions = GetSpacingOptions_ImageCardContent.SpacingOptions
model.variables.contentSpacingOptionsVar = getSpacingOptions_ImageCardContentVar.value.spacingOptionsOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:Fy+32EpyPEiFwwbsmE+XmA", callContext.id);
// Execute Action: GetTextOptions_ImageCard
getTextOptions_ImageCardVar.value = UBTConnectLibraryController.default.getTextOptions_ImageCard$Action(model.variables.in_CardTypeIdIn, callContext);

OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:sPSBErl4OkObDFj0aTb1ag", callContext.id);
// TextOptions = GetTextOptions_ImageCard.TextOptions
model.variables.textOptionsVar = getTextOptions_ImageCardVar.value.textOptionsOut;
OutSystemsDebugger.handleBreakpoint("lAQ0zS6tEEyl6BBIK9yo1A:9dRx_Y_SqUKkM5VmPRo7DA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:92IRp5Q0WUy2RCxpwjcK4w", callContext.id);
}

};

Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.event_Click$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:7WP6eMpZLUWcKuZ3c_pmbg:/NRWebFlows.7WP6eMpZLUWcKuZ3c_pmbg:oyDD4nRcBfstlKKpUR3Bug", "UBTConnectLibrary", "ConnectCorePatterns", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:L2R9hjEU+EWKQq8HnRW3gA:/NRWebFlows.7WP6eMpZLUWcKuZ3c_pmbg/NodesShownInESpaceTree.L2R9hjEU+EWKQq8HnRW3gA:Z7taQajbqVsHR8LCo5AdMQ", "UBTConnectLibrary", "ImageCard_LazyLoading", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:L2R9hjEU+EWKQq8HnRW3gA", callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:7WP6eMpZLUWcKuZ3c_pmbg", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "ConnectCorePatterns/ImageCard_LazyLoading On Initialize");
return controller.onInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
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

define("UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"66fWqpnWNUW35ag9uFo4Gw": {
getter: function (varBag, idService) {
return varBag.getBorderOptions_ImageCardVar.value;
}
},
"Fy+32EpyPEiFwwbsmE+XmA": {
getter: function (varBag, idService) {
return varBag.getTextOptions_ImageCardVar.value;
}
},
"wEza9uAxaEmUP3HkKpWKyw": {
getter: function (varBag, idService) {
return varBag.getSpacingOptions_ImageCardContentVar.value;
}
},
"1_21qoS5ykODBH6tV6BlSA": {
getter: function (varBag, idService) {
return varBag.model.variables.mainContainerClassVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"WF8q1DXHUUS3dve4e9UICQ": {
getter: function (varBag, idService) {
return varBag.model.variables.borderOptionsVar;
}
},
"zSE3iAojO0CkZ6nhgL6tVw": {
getter: function (varBag, idService) {
return varBag.model.variables.contentSpacingOptionsVar;
}
},
"n3tjC9MTZEeorhIlcnzmJw": {
getter: function (varBag, idService) {
return varBag.model.variables.textOptionsVar;
}
},
"2VtWSeCHdU+scjZ+yApSug": {
getter: function (varBag, idService) {
return varBag.model.variables.in_CardTypeIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"p0vdvl8qAkKBdcymwFjShQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ItemsPerRowIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"qpNijRcFakCI3e3BLByZDw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ShowAvatarListIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"LsEhTayE00SBR9VHivCXCQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ExtendedClassIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"16_HPJsg5UaBIPjxS3O9kg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsBookmarkedIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"HO7Ysvlj7Uq4vqe2ub5mhA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_BookmarkModifierIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"QjBXCOLbck+8syabCNkmXQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"O5iUxBXbtE+8UL6heOpNXw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ImageWrapper"));
})(varBag.model, idService);
}
},
"lCEwlKhISka8ZqyafPfgmg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"6XHuUq85tEacRX5VrV8D2w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("LazyImage_Placeholder"));
})(varBag.model, idService);
}
},
"CJU98uH+i02FiPQ+JyO5mQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_ImageTag"));
})(varBag.model, idService);
}
},
"_BwT3IHg4U+O1YPvUq4_vQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DIV_AvatarListWrapper"));
})(varBag.model, idService);
}
},
"gQVCsdKGUkePDZmT0nKmWg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("AvatarList"));
})(varBag.model, idService);
}
},
"1T6TeWwKDk+hLsyGHP5IMQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"yiaMj36R00asLULao+6jyg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Content"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
