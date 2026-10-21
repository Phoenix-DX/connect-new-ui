define("UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$model", "UBTConnectLibrary.controller$GetClasses_BackgroundImageSize", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$LazyImageSizeRec"], function (OutSystems, UBTConnectModel, UBTConnectLibraryController, UBTConnectLibraryModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("MainContainerClass", "mainContainerClassVar", "MainContainerClass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "ubt-household-image-card";
}, false), 
this.attr("In_BackgroundURL", "in_BackgroundURLIn", "In_BackgroundURL", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_BackgroundURLInDataFetchStatus", "_in_BackgroundURLInDataFetchStatus", "_in_BackgroundURLInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Label", "labelIn", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_labelInDataFetchStatus", "_labelInDataFetchStatus", "_labelInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Date", "dateIn", "Date", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, false), 
this.attr("_dateInDataFetchStatus", "_dateInDataFetchStatus", "_dateInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_CardTypeId", "in_CardTypeIdIn", "In_CardTypeId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_CardTypeIdInDataFetchStatus", "_in_CardTypeIdInDataFetchStatus", "_in_CardTypeIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("IsSelected", "isSelectedIn", "IsSelected", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isSelectedInDataFetchStatus", "_isSelectedInDataFetchStatus", "_isSelectedInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets || UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_BackgroundURL" in inputs) {
this.variables.in_BackgroundURLIn = inputs.In_BackgroundURL;
if("_in_BackgroundURLInDataFetchStatus" in inputs) {
this.variables._in_BackgroundURLInDataFetchStatus = inputs._in_BackgroundURLInDataFetchStatus;
}

}

if("Label" in inputs) {
this.variables.labelIn = inputs.Label;
if("_labelInDataFetchStatus" in inputs) {
this.variables._labelInDataFetchStatus = inputs._labelInDataFetchStatus;
}

}

if("Date" in inputs) {
this.variables.dateIn = inputs.Date;
if("_dateInDataFetchStatus" in inputs) {
this.variables._dateInDataFetchStatus = inputs._dateInDataFetchStatus;
}

}

if("In_CardTypeId" in inputs) {
this.variables.in_CardTypeIdIn = inputs.In_CardTypeId;
if("_in_CardTypeIdInDataFetchStatus" in inputs) {
this.variables._in_CardTypeIdInDataFetchStatus = inputs._in_CardTypeIdInDataFetchStatus;
}

}

if("IsSelected" in inputs) {
this.variables.isSelectedIn = inputs.IsSelected;
if("_isSelectedInDataFetchStatus" in inputs) {
this.variables._isSelectedInDataFetchStatus = inputs._isSelectedInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Directory_Household_Blocks.HouseholdDetails_TimelinePhoto");
});
define("UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.controller", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto.mvc$model", "UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$view", "UBTConnectLibrary.controller$GetClasses_BackgroundImageSize", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$LazyImageSizeRec"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryController, UBTConnectLibraryModel, React, OSView, UBTConnect_Directory_Household_Blocks_HouseholdDetails_TimelinePhoto_mvc_model, UBTConnect_Directory_Household_Blocks_HouseholdDetails_TimelinePhoto_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view) {
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
        View.displayName = "Directory_Household_Blocks.HouseholdDetails_TimelinePhoto";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Directory_Household_Blocks_HouseholdDetails_TimelinePhoto_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Directory_Household_Blocks_HouseholdDetails_TimelinePhoto_mvc_controller;
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
Options: model.getCachedValue(idService.getId("Block_Image.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.borderOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.BorderOptionsRec();
rec.colorAttr = ((model.variables.isSelectedIn) ? (UBTConnectModel.staticEntities.uBT_Color.primary) : (UBTConnectModel.staticEntities.uBT_Color.neutral3));
rec.sizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
rec.radiusAttr = function () {
var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Shape.soft;
return rec;
}();
return rec;
}();
rec.displayOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
rec.displayAttr = UBTConnectModel.staticEntities.uBT_Display.flex;
rec.alignItemsAttr = UBTConnectModel.staticEntities.uBT_AlignItems.flexStart;
rec.justifyContentAttr = UBTConnectModel.staticEntities.uBT_JustifyContent.center;
return rec;
}();
rec.isSkeletonElementAttr = false;
return rec;
}();
}, function () {
return model.variables.isSelectedIn;
}),
_optionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isSelectedInDataFetchStatus),
ExtendedClasses: model.getCachedValue(idService.getId("Block_Image.ExtendedClasses"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.formatClasses$Action((model.variables.mainContainerClassVar + "__background-image"), OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.getClasses_BackgroundImageSize$Action(model.variables.in_CardTypeIdIn, 0, callContext).classesOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), callContext).classesOutOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.mainContainerClassVar;
}, function () {
return model.variables.in_CardTypeIdIn;
}),
_extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_CardTypeIdInDataFetchStatus)
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
controller.selected$Action(model.variables.dateIn, controller.callContext(eventHandlerContext));
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
name: "Block_Image",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, {
inputs: {
ImageURL: model.variables.in_BackgroundURLIn,
_imageURLInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_BackgroundURLInDataFetchStatus),
In_BorderRadius: UBTConnectModel.staticEntities.uBT_Shape.soft,
ImageSize: model.getCachedValue(idService.getId("9Koet_dRdUmNA8p44v2MZQ.ImageSize"), function () {
return function () {
var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
rec.heightAttr = UBTConnectModel.staticEntities.uBT_ImageSize.large_65;
rec.widthAttr = UBTConnectModel.staticEntities.uBT_ImageSize.auto;
return rec;
}();
}),
EntityId: model.getCachedValue(idService.getId("9Koet_dRdUmNA8p44v2MZQ.EntityId"), function () {
return (OS.BuiltinFunctions.nullIdentifier()).toString();
}),
EntityType: UBTConnectModel.staticEntities.connect_Entity.household
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
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "householdImage_horizontalCard-label",
visible: ((model.variables.in_BackgroundURLIn) !== ("")),
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_BackgroundURLInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: model.variables.labelIn,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._labelInDataFetchStatus)
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.labelIn), asPrimitiveValue(model.variables._labelInDataFetchStatus), asPrimitiveValue(model.variables._in_BackgroundURLInDataFetchStatus), asPrimitiveValue(model.variables.in_BackgroundURLIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.controller", "UBTConnectLibrary.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto.mvc$debugger", "UBTConnectLibrary.controller$GetClasses_BackgroundImageSize", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.controller$FormatClasses", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$LazyImageSizeRec"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryController, UBTConnectLibraryModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Household_Blocks_HouseholdDetails_TimelinePhoto_mvc_Debugger) {
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

Controller.prototype.selected$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:AYMEjs49fE+urBzl2Bc2lQ:/NRWebFlows.AYMEjs49fE+urBzl2Bc2lQ:uCNLUKQMufTVXdBiwtGWyw", "UBTConnect", "Directory_Household_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Mw8ClA8igUWqsG7KsUqOIg:/NRWebFlows.AYMEjs49fE+urBzl2Bc2lQ/NodesShownInESpaceTree.Mw8ClA8igUWqsG7KsUqOIg:PqHCfFic3fYtlvDfzsPuTQ", "UBTConnect", "HouseholdDetails_TimelinePhoto", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Mw8ClA8igUWqsG7KsUqOIg", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:AYMEjs49fE+urBzl2Bc2lQ", callContext.id);
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
return UBTConnectController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});

define("UBTConnect.Directory_Household_Blocks.HouseholdDetails_TimelinePhoto.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"IhOCP7J6M0CT1hH_Y7HACQ": {
getter: function (varBag, idService) {
return varBag.model.variables.mainContainerClassVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"nWJh0FG_RkCUSrrVTRR5Zw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_BackgroundURLIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"9h8ZNLqttEynJgW_y1X0cQ": {
getter: function (varBag, idService) {
return varBag.model.variables.labelIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"RT6_8O6wC0yYB98a71GX2A": {
getter: function (varBag, idService) {
return varBag.model.variables.dateIn;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"MAJhGQu3x0OAQ8Kxkz3Ftg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_CardTypeIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"IFC4t9pzpUCbXeMd4b0i3A": {
getter: function (varBag, idService) {
return varBag.model.variables.isSelectedIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"7yzRGelSiUWYbo9QbQLwsg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Block_Image"));
})(varBag.model, idService);
}
},
"vSd8PCTXPE2f9W+Wqy1hnA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
