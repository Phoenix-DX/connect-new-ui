define("UBTConnectLibrary.ConnectCorePatterns.Statistics_ListItem.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnectLibrary.ConnectPatterns.AvatarImage.mvc$model", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$StatisticsOptionsRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel, UBTConnectLibrary_ConnectPatterns_IconText_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, UBTConnectLibrary_ConnectPatterns_AvatarImage_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("MainContainerClass", "mainContainerClassVar", "MainContainerClass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "ubt-statistics-item";
}, false), 
this.attr("In_StatisticsOptions", "in_StatisticsOptionsIn", "In_StatisticsOptions", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.StatisticsOptionsRec());
}, false, UBTConnectLibraryModel.StatisticsOptionsRec), 
this.attr("_in_StatisticsOptionsInDataFetchStatus", "_in_StatisticsOptionsInDataFetchStatus", "_in_StatisticsOptionsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ExtendedClasses", "in_ExtendedClassesIn", "In_ExtendedClasses", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_ExtendedClassesInDataFetchStatus", "_in_ExtendedClassesInDataFetchStatus", "_in_ExtendedClassesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_HighlightWords", "in_HighlightWordsIn", "In_HighlightWords", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_HighlightWordsInDataFetchStatus", "_in_HighlightWordsInDataFetchStatus", "_in_HighlightWordsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ShowSubtitle", "in_ShowSubtitleIn", "In_ShowSubtitle", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_ShowSubtitleInDataFetchStatus", "_in_ShowSubtitleInDataFetchStatus", "_in_ShowSubtitleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_HasActionsMenu", "in_HasActionsMenuIn", "In_HasActionsMenu", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_HasActionsMenuInDataFetchStatus", "_in_HasActionsMenuInDataFetchStatus", "_in_HasActionsMenuInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_HideBorder", "in_HideBorderIn", "In_HideBorder", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_HideBorderInDataFetchStatus", "_in_HideBorderInDataFetchStatus", "_in_HideBorderInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (((((UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_IconText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_AvatarImage_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_StatisticsOptions" in inputs) {
this.variables.in_StatisticsOptionsIn = inputs.In_StatisticsOptions;
if("_in_StatisticsOptionsInDataFetchStatus" in inputs) {
this.variables._in_StatisticsOptionsInDataFetchStatus = inputs._in_StatisticsOptionsInDataFetchStatus;
}

}

if("In_ExtendedClasses" in inputs) {
this.variables.in_ExtendedClassesIn = inputs.In_ExtendedClasses;
if("_in_ExtendedClassesInDataFetchStatus" in inputs) {
this.variables._in_ExtendedClassesInDataFetchStatus = inputs._in_ExtendedClassesInDataFetchStatus;
}

}

if("In_HighlightWords" in inputs) {
this.variables.in_HighlightWordsIn = inputs.In_HighlightWords;
if("_in_HighlightWordsInDataFetchStatus" in inputs) {
this.variables._in_HighlightWordsInDataFetchStatus = inputs._in_HighlightWordsInDataFetchStatus;
}

}

if("In_ShowSubtitle" in inputs) {
this.variables.in_ShowSubtitleIn = inputs.In_ShowSubtitle;
if("_in_ShowSubtitleInDataFetchStatus" in inputs) {
this.variables._in_ShowSubtitleInDataFetchStatus = inputs._in_ShowSubtitleInDataFetchStatus;
}

}

if("In_HasActionsMenu" in inputs) {
this.variables.in_HasActionsMenuIn = inputs.In_HasActionsMenu;
if("_in_HasActionsMenuInDataFetchStatus" in inputs) {
this.variables._in_HasActionsMenuInDataFetchStatus = inputs._in_HasActionsMenuInDataFetchStatus;
}

}

if("In_HideBorder" in inputs) {
this.variables.in_HideBorderIn = inputs.In_HideBorder;
if("_in_HideBorderInDataFetchStatus" in inputs) {
this.variables._in_HideBorderInDataFetchStatus = inputs._in_HideBorderInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "ConnectCorePatterns.Statistics_ListItem");
});
define("UBTConnectLibrary.ConnectCorePatterns.Statistics_ListItem.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectCorePatterns.Statistics_ListItem.mvc$model", "UBTConnectLibrary.ConnectCorePatterns.Statistics_ListItem.mvc$controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.ConnectPatterns.AvatarImage.mvc$view", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$StatisticsOptionsRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectCorePatterns_Statistics_ListItem_mvc_model, UBTConnectLibrary_ConnectCorePatterns_Statistics_ListItem_mvc_controller, UBTConnectLibraryClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectPatterns_AvatarImage_mvc_view) {
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
        View.displayName = "ConnectCorePatterns.Statistics_ListItem";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectPatterns_AvatarImage_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectCorePatterns_Statistics_ListItem_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectCorePatterns_Statistics_ListItem_mvc_controller;
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
Options: model.getCachedValue(idService.getId("+kXEKHNWPE2_4g7MLKp5jg.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.backgroundAttr = function () {
var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
rec.backgroundColorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral0;
return rec;
}();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.verticalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.small;
rec.horizontalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.base;
return rec;
}();
rec.borderOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.BorderOptionsRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral3;
rec.sizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.generalSizeIdAttr = ((model.variables.in_HideBorderIn) ? (UBTConnectLibraryModel.staticEntities.uBT_Size.none) : (UBTConnectLibraryModel.staticEntities.uBT_Size.small));
return rec;
}();
rec.radiusAttr = function () {
var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
rec.generalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Shape.large;
return rec;
}();
return rec;
}();
return rec;
}();
}, function () {
return model.variables.in_HideBorderIn;
}),
_optionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HideBorderInDataFetchStatus),
ExtendedClasses: model.getCachedValue(idService.getId("+kXEKHNWPE2_4g7MLKp5jg.ExtendedClasses"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatClasses$Action(model.variables.mainContainerClassVar, model.variables.in_ExtendedClassesIn, callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.mainContainerClassVar;
}, function () {
return model.variables.in_ExtendedClassesIn;
}),
_extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ExtendedClassesInDataFetchStatus)
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
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/Statistics_ListItem/Container onclick");
controller.event_Clicked$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
inputs: {
ColumnOptions: model.getCachedValue(idService.getId("MGpMFgXfYE+uNFGV0RCQTQ.ColumnOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
rec.columnBehaviourAttr = UBTConnectLibraryModel.staticEntities.uBT_ColumnBehaviour.reduceLast;
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
left: new PlaceholderContent(function () {
return [$if(model.variables.in_ShowSubtitleIn, false, this, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("V+Zfy0ZWnUKBJeguZTsoSw.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.marginSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.bottomSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.extraSmall;
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
uuid: "3",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_Text: model.variables.in_StatisticsOptionsIn.subtitleAttr,
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_StatisticsOptionsInDataFetchStatus),
In_TextOptions: model.getCachedValue(idService.getId("0LfkJjacxkyU+FAGsqCZzA.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral8;
rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.doubleExtraSmall;
return rec;
}();
}),
In_HighlightWords: model.variables.in_HighlightWordsIn,
_in_HighlightWordsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HighlightWordsInDataFetchStatus)
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
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_HighlightWords: model.variables.in_HighlightWordsIn,
_in_HighlightWordsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HighlightWordsInDataFetchStatus),
In_Text: model.variables.in_StatisticsOptionsIn.titleAttr,
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_StatisticsOptionsInDataFetchStatus),
In_TextOptions: model.getCachedValue(idService.getId("bATIdlO17kyvaSFEGXgktg.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.base;
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
uuid: "5",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_HighlightWordsIn), asPrimitiveValue(model.variables._in_HighlightWordsInDataFetchStatus), asPrimitiveValue(model.variables._in_StatisticsOptionsInDataFetchStatus), asPrimitiveValue(model.variables.in_StatisticsOptionsIn.titleAttr), asPrimitiveValue(model.variables.in_StatisticsOptionsIn.subtitleAttr)]
})];
}, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("U6qOuSSvkk6qru7OmuT1Ww.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.marginSizeAttr = function () {
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
uuid: "6",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_HighlightWords: model.variables.in_HighlightWordsIn,
_in_HighlightWordsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HighlightWordsInDataFetchStatus),
In_Text: model.variables.in_StatisticsOptionsIn.titleAttr,
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_StatisticsOptionsInDataFetchStatus),
In_TextOptions: model.getCachedValue(idService.getId("pJVLMMQvn0+5XxTML5zIIw.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.heading6;
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
uuid: "7",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_StatisticsOptionsIn.titleAttr), asPrimitiveValue(model.variables._in_StatisticsOptionsInDataFetchStatus), asPrimitiveValue(model.variables._in_HighlightWordsInDataFetchStatus), asPrimitiveValue(model.variables.in_HighlightWordsIn)]
})];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": "True"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.in_StatisticsOptionsIn.statisticsAttr,
style: model.getCachedValue(idService.getId("TG9IilCQT0ySklldsdpz2Q.Style"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatClasses$Action("list list-group", (model.variables.mainContainerClassVar + "__list"), callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.mainContainerClassVar;
}),
tag: "div",
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_StatisticsOptionsInDataFetchStatus),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables._in_StatisticsOptionsInDataFetchStatus), asPrimitiveValue(model.variables.in_StatisticsOptionsIn.statisticsAttr.getCurrent(callContext.iterationContext).valueAttr), asPrimitiveValue(model.variables.in_StatisticsOptionsIn.statisticsAttr.getCurrent(callContext.iterationContext).iconColorIdAttr), asPrimitiveValue(model.variables.in_StatisticsOptionsIn.statisticsAttr.getCurrent(callContext.iterationContext).nameAttr), asPrimitiveValue(model.variables.in_StatisticsOptionsIn.statisticsAttr.getCurrent(callContext.iterationContext).iconIdAttr)]
}, $if(((model.variables.in_StatisticsOptionsIn.statisticsAttr.getCurrent(callContext.iterationContext).iconIdAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())), false, this, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
inputs: {
TextOptions: model.getCachedValue(idService.getId("gtOZTKsRo0SpZrr4HnvOnA.TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral8;
rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.doubleExtraSmall;
rec.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.regular;
return rec;
}();
}),
Text: model.variables.in_StatisticsOptionsIn.statisticsAttr.getCurrent(callContext.iterationContext).nameAttr,
_textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_StatisticsOptionsInDataFetchStatus)
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
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_ColorId: model.variables.in_StatisticsOptionsIn.statisticsAttr.getCurrent(callContext.iterationContext).iconColorIdAttr,
_in_ColorIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_StatisticsOptionsInDataFetchStatus),
In_IconId: model.variables.in_StatisticsOptionsIn.statisticsAttr.getCurrent(callContext.iterationContext).iconIdAttr,
_in_IconIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_StatisticsOptionsInDataFetchStatus),
In_SizeId: UBTConnectLibraryModel.staticEntities.uBT_IconSize.nonStandard_16
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
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables._in_StatisticsOptionsInDataFetchStatus), asPrimitiveValue(model.variables.in_StatisticsOptionsIn.statisticsAttr.getCurrent(callContext.iterationContext).iconIdAttr), asPrimitiveValue(model.variables.in_StatisticsOptionsIn.statisticsAttr.getCurrent(callContext.iterationContext).iconColorIdAttr)]
})];
}, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_TextOptions: model.getCachedValue(idService.getId("P5wbU6zkDka00PvksJZS2Q.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral8;
rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.doubleExtraSmall;
rec.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.regular;
return rec;
}();
}),
In_Text: model.variables.in_StatisticsOptionsIn.statisticsAttr.getCurrent(callContext.iterationContext).nameAttr,
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_StatisticsOptionsInDataFetchStatus)
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
uuid: "13",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_TextOptions: model.getCachedValue(idService.getId("DCpmllqNe0qwf12M0ObQcA.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.base;
rec.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
In_Text: model.variables.in_StatisticsOptionsIn.statisticsAttr.getCurrent(callContext.iterationContext).valueAttr,
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_StatisticsOptionsInDataFetchStatus)
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
}))];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables._in_StatisticsOptionsInDataFetchStatus)]
}))];
}),
right: new PlaceholderContent(function () {
return [$if(((model.variables.in_StatisticsOptionsIn.avatarURLAttr) !== ("")), false, this, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_AvatarImage_mvc_view, {
inputs: {
In_AvatarImage: model.getCachedValue(idService.getId("yCLIGO5O5UKXwqA3pjOsHQ.In_AvatarImage"), function () {
return function () {
var rec = new UBTConnectLibraryModel.AvatarImageRec();
rec.uRLAttr = model.variables.in_StatisticsOptionsIn.avatarURLAttr;
return rec;
}();
}, function () {
return model.variables.in_StatisticsOptionsIn.avatarURLAttr;
}),
_in_AvatarImageInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_StatisticsOptionsInDataFetchStatus),
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
_dependencies: [asPrimitiveValue(model.variables.mainContainerClassVar), asPrimitiveValue(model.variables.in_HighlightWordsIn), asPrimitiveValue(model.variables.in_StatisticsOptionsIn.avatarURLAttr), asPrimitiveValue(model.variables.in_StatisticsOptionsIn.statisticsAttr), asPrimitiveValue(model.variables.in_StatisticsOptionsIn.titleAttr), asPrimitiveValue(model.variables.in_StatisticsOptionsIn.subtitleAttr), asPrimitiveValue(model.variables._in_HighlightWordsInDataFetchStatus), asPrimitiveValue(model.variables._in_StatisticsOptionsInDataFetchStatus), asPrimitiveValue(model.variables._in_ShowSubtitleInDataFetchStatus), asPrimitiveValue(model.variables.in_ShowSubtitleIn)]
})), $if(model.variables.in_HasActionsMenuIn, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "DIV_Actions"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("PakN9Egua06ItWjQApeKhQ.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.topSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.small;
return rec;
}();
rec.marginSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.topSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.base;
return rec;
}();
rec.borderOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.BorderOptionsRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral3;
rec.sizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.topSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.small;
return rec;
}();
return rec;
}();
return rec;
}();
}),
ExtendedClasses: "ubt-statistics-action-menu"
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
uuid: "17",
alias: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.actionsMenu,
_idProps: {
service: idService,
name: "ActionsMenu"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
}
}))];
}, function () {
return [];
})];
})
}
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnectLibrary.ConnectCorePatterns.Statistics_ListItem.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectCorePatterns.Statistics_ListItem.mvc$debugger", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$StatisticsOptionsRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectCorePatterns_Statistics_ListItem_mvc_Debugger) {
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

Controller.prototype.event_Clicked$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:7WP6eMpZLUWcKuZ3c_pmbg:/NRWebFlows.7WP6eMpZLUWcKuZ3c_pmbg:oyDD4nRcBfstlKKpUR3Bug", "UBTConnectLibrary", "ConnectCorePatterns", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:5yd8M6ICz0SrUQs+a4HnFQ:/NRWebFlows.7WP6eMpZLUWcKuZ3c_pmbg/NodesShownInESpaceTree.5yd8M6ICz0SrUQs+a4HnFQ:rbzwhFHQxk0tk7kNdaBd4Q", "UBTConnectLibrary", "Statistics_ListItem", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:5yd8M6ICz0SrUQs+a4HnFQ", callContext.id);
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

define("UBTConnectLibrary.ConnectCorePatterns.Statistics_ListItem.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"iymQ2fVOVUyIhkAJ5SkRaQ": {
getter: function (varBag, idService) {
return varBag.model.variables.mainContainerClassVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"S6P468Gj1Uy54bTSfdeZLQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_StatisticsOptionsIn;
}
},
"AIOr+T8DLke4_BrqMm8chA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ExtendedClassesIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"j8Db8hIar06yVx7M5zsoug": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HighlightWordsIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"YurQbo376EqpTaUQ7jOxfg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ShowSubtitleIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"47t5zCaj5UK50HGorZ5P8w": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HasActionsMenuIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Au8YMk3w+E+Gcw81F3pBWQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HideBorderIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"CsWpFddnYUGqzcdqIQlIyA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"I2QHy1ZWtkGkVZTg7eTIGA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"LChScHhX_UuhN6eFv7T8yA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasSubtitle"));
})(varBag.model, idService);
}
},
"AcFEdEYaX0We7BFzGQlGgg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"xxFa7V7yxEiWmh9QcG99kw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"MH9S4jVF60WBqmiMRdztig": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Has_Icon"));
})(varBag.model, idService);
}
},
"DlQyE1bbVUm3afbi+mcdUQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"5v9fSC6JYE+5j7QQMrq2sw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"dKUv2EcJGE6vfQVv8QdpBQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasAvatar"));
})(varBag.model, idService);
}
},
"IV_e+RgpuEq+nbcx1+8PuQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DIV_Actions"));
})(varBag.model, idService);
}
},
"egrdNcgXMk61f170IFu9vQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"AhfXmgLPNka0LmEaDwVsqw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ActionsMenu"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
