define("UBTConnect.Directory_Household_Blocks.Household_GalleryCard.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "Connect_Household_CS.model", "UBTConnectLibrary.model", "UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.mvc$model", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$model", "UBTConnectLibrary.ConnectPatterns.ImageCard__Content.mvc$model", "Connect_Household_CS.model$UI_SubdivisionHouseholdRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnect.referencesHealth$UBTConnectLibrary"], function (OutSystems, UBTConnectModel, Connect_Household_CSModel, UBTConnectLibraryModel, UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvcModel, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel, UBTConnectLibrary_ConnectPatterns_ImageCard__Content_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("SubdivisionHousehold_GalleryCard", "subdivisionHousehold_GalleryCardIn", "SubdivisionHousehold_GalleryCard", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Household_CSModel.UI_SubdivisionHouseholdRec());
}, false, Connect_Household_CSModel.UI_SubdivisionHouseholdRec), 
this.attr("_subdivisionHousehold_GalleryCardInDataFetchStatus", "_subdivisionHousehold_GalleryCardInDataFetchStatus", "_subdivisionHousehold_GalleryCardInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ItemsPerRow", "itemsPerRowIn", "ItemsPerRow", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 2;
}, false), 
this.attr("_itemsPerRowInDataFetchStatus", "_itemsPerRowInDataFetchStatus", "_itemsPerRowInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = ((UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvcModel.hasValidationWidgets || UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_ImageCard__Content_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("SubdivisionHousehold_GalleryCard" in inputs) {
this.variables.subdivisionHousehold_GalleryCardIn = inputs.SubdivisionHousehold_GalleryCard;
if("_subdivisionHousehold_GalleryCardInDataFetchStatus" in inputs) {
this.variables._subdivisionHousehold_GalleryCardInDataFetchStatus = inputs._subdivisionHousehold_GalleryCardInDataFetchStatus;
}

}

if("ItemsPerRow" in inputs) {
this.variables.itemsPerRowIn = inputs.ItemsPerRow;
if("_itemsPerRowInDataFetchStatus" in inputs) {
this.variables._itemsPerRowInDataFetchStatus = inputs._itemsPerRowInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Directory_Household_Blocks.Household_GalleryCard");
});
define("UBTConnect.Directory_Household_Blocks.Household_GalleryCard.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Household_CS.model", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Household_Blocks.Household_GalleryCard.mvc$model", "UBTConnect.Directory_Household_Blocks.Household_GalleryCard.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$view", "UBTConnectLibrary.ConnectPatterns.ImageCard__Content.mvc$view", "Connect_Household_CS.model$UI_SubdivisionHouseholdRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnect.referencesHealth$UBTConnectLibrary"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Household_CSModel, UBTConnectLibraryModel, React, OSView, UBTConnect_Directory_Household_Blocks_Household_GalleryCard_mvc_model, UBTConnect_Directory_Household_Blocks_Household_GalleryCard_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvc_view, OSWidgets, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_ConnectPatterns_ImageCard__Content_mvc_view) {
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
        View.displayName = "Directory_Household_Blocks.Household_GalleryCard";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_ConnectPatterns_ImageCard__Content_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Directory_Household_Blocks_Household_GalleryCard_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Directory_Household_Blocks_Household_GalleryCard_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvc_view, {
inputs: {
In_ItemsPerRow: model.variables.itemsPerRowIn,
_in_ItemsPerRowInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._itemsPerRowInDataFetchStatus),
In_ExtendedClass: "gallery-card",
In_CardTypeId: UBTConnectModel.staticEntities.uBT_ImageCardType.gallery
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_Click$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/ImageCard_LazyLoading Event_Click");
controller.event_OnClick$Action(controller.callContext(eventHandlerContext));
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
name: "Subdivision_Household",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
lazyImage_Placeholder: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, {
inputs: {
EntityType: UBTConnectModel.staticEntities.connect_Entity.household,
ImageSize: model.getCachedValue(idService.getId("Vo23iptpHEaZwGC4nk7+vA.ImageSize"), function () {
return function () {
var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
rec.widthAttr = UBTConnectModel.staticEntities.uBT_ImageSize.halfWidth_50vw;
return rec;
}();
}),
EntityId: OS.BuiltinFunctions.longIntegerToText(model.variables.subdivisionHousehold_GalleryCardIn.householdIdAttr),
_entityIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._subdivisionHousehold_GalleryCardInDataFetchStatus)
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
})];
}),
placeholder_ImageTag: PlaceholderContent.Empty,
avatarList: PlaceholderContent.Empty,
placeholder_Content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_ImageCard__Content_mvc_view, {
inputs: {
In_Subtitle: model.variables.subdivisionHousehold_GalleryCardIn.childrenNamesAttr,
_in_SubtitleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._subdivisionHousehold_GalleryCardInDataFetchStatus),
In_ShowSubtitle: true,
In_Title: model.variables.subdivisionHousehold_GalleryCardIn.householdNameAttr,
_in_TitleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._subdivisionHousehold_GalleryCardInDataFetchStatus)
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
placeholder_TopSectionContent: PlaceholderContent.Empty,
placeholder_BottomSectionContent: PlaceholderContent.Empty
},
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables._subdivisionHousehold_GalleryCardInDataFetchStatus), asPrimitiveValue(model.variables.subdivisionHousehold_GalleryCardIn.householdNameAttr), asPrimitiveValue(model.variables.subdivisionHousehold_GalleryCardIn.childrenNamesAttr), asPrimitiveValue(model.variables.subdivisionHousehold_GalleryCardIn.householdIdAttr)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.Directory_Household_Blocks.Household_GalleryCard.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Household_CS.model", "UBTConnectLibrary.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Household_Blocks.Household_GalleryCard.mvc$debugger", "Connect_Household_CS.model$UI_SubdivisionHouseholdRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnect.referencesHealth$UBTConnectLibrary"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Household_CSModel, UBTConnectLibraryModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Household_Blocks_Household_GalleryCard_mvc_Debugger) {
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
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:AYMEjs49fE+urBzl2Bc2lQ:/NRWebFlows.AYMEjs49fE+urBzl2Bc2lQ:uCNLUKQMufTVXdBiwtGWyw", "UBTConnect", "Directory_Household_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:glOHKCGDCUud8qEIXxcIwA:/NRWebFlows.AYMEjs49fE+urBzl2Bc2lQ/NodesShownInESpaceTree.glOHKCGDCUud8qEIXxcIwA:JU56fZ5z_opm5QsmXlhfaA", "UBTConnect", "Household_GalleryCard", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:glOHKCGDCUud8qEIXxcIwA", callContext.id);
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

define("UBTConnect.Directory_Household_Blocks.Household_GalleryCard.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"YmkQFs6f9ku14VbbXz+yBQ": {
getter: function (varBag, idService) {
return varBag.model.variables.subdivisionHousehold_GalleryCardIn;
}
},
"3xtpRBmTkEKgbTQ54lGWpA": {
getter: function (varBag, idService) {
return varBag.model.variables.itemsPerRowIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"sQtL2IbkHU+2xtwok_NUEg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Subdivision_Household"));
})(varBag.model, idService);
}
},
"b+DGI4HltkmKRuYsTUVjsw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("LazyImage_Placeholder"));
})(varBag.model, idService);
}
},
"g3gcvHzQFU2hZvjlyod27g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_ImageTag"));
})(varBag.model, idService);
}
},
"0u0lA1imDkKbGzXGCsSEMQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("AvatarList"));
})(varBag.model, idService);
}
},
"pCPF0n++q0+CZUJAXSx1NA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Content"));
})(varBag.model, idService);
}
},
"CPPLTTvJTU6O9S6QNcVEog": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_TopSectionContent"));
})(varBag.model, idService);
}
},
"O631aasv1kaZeFHWVHR89A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_BottomSectionContent"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
