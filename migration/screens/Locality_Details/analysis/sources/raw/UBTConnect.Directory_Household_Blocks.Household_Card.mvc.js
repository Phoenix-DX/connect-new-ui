define("UBTConnect.Directory_Household_Blocks.Household_Card.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "Connect_Household_CS.model", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.mvc$model", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$model", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnect_Utils.CW_Image.UBT_LazyImage_List.mvc$model", "UBTConnectLibrary.ConnectPatterns.ImageCard__Content.mvc$model", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "Connect_Household_CS.model$UI_LocalityHouseholdRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect_Utils.model$LazyImageRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$LazyImageList", "UBTConnectLibrary.model$TextOptionsRec"], function (OutSystems, UBTConnectModel, Connect_Household_CSModel, UBTConnectLibraryModel, UBTConnect_UtilsModel, UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvcModel, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, UBTConnect_Utils_CW_Image_UBT_LazyImage_List_mvcModel, UBTConnectLibrary_ConnectPatterns_ImageCard__Content_mvcModel, UBTConnectLibrary_ConnectPatterns_IconText_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel) {
var OS = OutSystems.Internal;

var GetMembersDataActRec = (function (_super) {
__extends(GetMembersDataActRec, _super);
function GetMembersDataActRec(defaults) {
_super.apply(this, arguments);
}
GetMembersDataActRec.attributesToDeclare = function () {
return [
this.attr("HouseholdMembers", "householdMembersOut", "HouseholdMembers", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.LazyImageList());
}, true, UBTConnectModel.LazyImageList), 
this.attr("VisibleAvatars", "visibleAvatarsOut", "VisibleAvatars", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetMembersDataActRec.init();
return GetMembersDataActRec;
})(OS.Model.DataSourceRecord);

var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Household", "householdIn", "Household", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Household_CSModel.UI_LocalityHouseholdRec());
}, false, Connect_Household_CSModel.UI_LocalityHouseholdRec), 
this.attr("_householdInDataFetchStatus", "_householdInDataFetchStatus", "_householdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("GetMembers", "getMembersDataAct", "getMembersDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetMembersDataActRec());
}, true, GetMembersDataActRec)
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
Model._hasValidationWidgetsValue = ((((((UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvcModel.hasValidationWidgets || UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_Image_UBT_LazyImage_List_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_ImageCard__Content_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_IconText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("Household" in inputs) {
this.variables.householdIn = inputs.Household;
if("_householdInDataFetchStatus" in inputs) {
this.variables._householdInDataFetchStatus = inputs._householdInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Directory_Household_Blocks.Household_Card");
});
define("UBTConnect.Directory_Household_Blocks.Household_Card.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Household_CS.model", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Household_Blocks.Household_Card.mvc$model", "UBTConnect.Directory_Household_Blocks.Household_Card.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$view", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnect_Utils.CW_Image.UBT_LazyImage_List.mvc$view", "UBTConnectLibrary.ConnectPatterns.ImageCard__Content.mvc$view", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "Connect_Household_CS.model$UI_LocalityHouseholdRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect_Utils.model$LazyImageRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$LazyImageList", "UBTConnectLibrary.model$TextOptionsRec"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Household_CSModel, UBTConnectLibraryModel, UBTConnect_UtilsModel, React, OSView, UBTConnect_Directory_Household_Blocks_Household_Card_mvc_model, UBTConnect_Directory_Household_Blocks_Household_Card_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvc_view, OSWidgets, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_List_mvc_view, UBTConnectLibrary_ConnectPatterns_ImageCard__Content_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view) {
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
        View.displayName = "Directory_Household_Blocks.Household_Card";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_List_mvc_view, UBTConnectLibrary_ConnectPatterns_ImageCard__Content_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Directory_Household_Blocks_Household_Card_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Directory_Household_Blocks_Household_Card_mvc_controller;
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
In_CardTypeId: UBTConnectModel.staticEntities.uBT_ImageCardType.list,
In_BookmarkModifier: "bookmark--rounded",
In_ShowAvatarList: true,
In_ExtendedClass: "padding-bottom-s",
In_IsBookmarked: model.variables.householdIn.isBookmarkedAttr,
_in_IsBookmarkedInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._householdInDataFetchStatus)
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
controller.event_OnClickHousehold$Action(model.variables.householdIn.householdIdAttr, controller.callContext(eventHandlerContext));
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
lazyImage_Placeholder: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, {
inputs: {
HasErrorMessage: true,
EntityType: UBTConnectModel.staticEntities.connect_Entity.household,
ImageSize: model.getCachedValue(idService.getId("Pmd3_TVTKEeiWA6G13XPJQ.ImageSize"), function () {
return function () {
var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
rec.widthAttr = UBTConnectModel.staticEntities.uBT_ImageSize.maxWidth_100vw;
return rec;
}();
}),
EntityId: OS.BuiltinFunctions.longIntegerToText(model.variables.householdIn.householdIdAttr),
_entityIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._householdInDataFetchStatus)
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
avatarList: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
inputs: {
In_IsLoading: !(model.variables.getMembersDataAct.isDataFetchedAttr)
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
placeholder_LoadingSection: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Utils_CW_Image_UBT_LazyImage_List_mvc_view, {
inputs: {
MaxLimit: model.variables.getMembersDataAct.visibleAvatarsOut,
_maxLimitInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getMembersDataAct.dataFetchStatusAttr),
Items: model.variables.getMembersDataAct.householdMembersOut,
_itemsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getMembersDataAct.dataFetchStatusAttr),
InvertOrder: true,
ImageSize: model.getCachedValue(idService.getId("m2k4NQ97O0iDGr_ZRAlvsg.ImageSize"), function () {
return function () {
var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
rec.heightAttr = UBTConnectModel.staticEntities.uBT_ImageSize.small_40;
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
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.getMembersDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getMembersDataAct.householdMembersOut), asPrimitiveValue(model.variables.getMembersDataAct.visibleAvatarsOut)]
})];
}),
placeholder_Content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_ImageCard__Content_mvc_view, {
inputs: {
In_ShowSubtitle: ((model.variables.householdIn.childrenNamesAttr) !== ("")),
_in_ShowSubtitleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._householdInDataFetchStatus),
In_Title: model.variables.householdIn.householdNameAttr,
_in_TitleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._householdInDataFetchStatus),
In_Subtitle: model.variables.householdIn.childrenNamesAttr,
_in_SubtitleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._householdInDataFetchStatus)
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
placeholder_TopSectionContent: PlaceholderContent.Empty,
placeholder_BottomSectionContent: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
inputs: {
Text: ((model.variables.householdIn.localityNameAttr + ", ") + model.variables.householdIn.countryNameAttr),
_textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._householdInDataFetchStatus),
SpacingSize: UBTConnectModel.staticEntities.uBT_Size.extraSmall,
TextOptions: model.getCachedValue(idService.getId("8aESvj4iwEWLilA43otUAA.TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral7;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.extraSmall;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
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
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.homePinFill,
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral7,
In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.small_12
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
})];
})
},
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables._householdInDataFetchStatus), asPrimitiveValue(model.variables.householdIn.countryNameAttr), asPrimitiveValue(model.variables.householdIn.localityNameAttr)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.getMembersDataAct.householdMembersOut), asPrimitiveValue(model.variables.getMembersDataAct.visibleAvatarsOut), asPrimitiveValue(model.variables.getMembersDataAct.isDataFetchedAttr), asPrimitiveValue(model.variables.getMembersDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables._householdInDataFetchStatus), asPrimitiveValue(model.variables.householdIn.countryNameAttr), asPrimitiveValue(model.variables.householdIn.localityNameAttr), asPrimitiveValue(model.variables.householdIn.householdNameAttr), asPrimitiveValue(model.variables.householdIn.childrenNamesAttr), asPrimitiveValue(model.variables.householdIn.householdIdAttr)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.Directory_Household_Blocks.Household_Card.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Household_CS.model", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Household_Blocks.Household_Card.mvc$debugger", "UBTConnect.Directory_Household_Blocks.Household_Card.mvc$controller.OnReady.IsViewRestoredFromCacheJS", "Connect_Household_CS.model$UI_LocalityHouseholdRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect_Utils.model$LazyImageRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$LazyImageList", "UBTConnectLibrary.model$TextOptionsRec"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Household_CSModel, UBTConnectLibraryModel, UBTConnect_UtilsModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Household_Blocks_Household_Card_mvc_Debugger, UBTConnect_Directory_Household_Blocks_Household_Card_mvc_controller_OnReady_IsViewRestoredFromCacheJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
getMembers$DataActRefresh: -1
};
this.dataFetchDependentsGraph = {
getMembers$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions
Controller.prototype.getMembers$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:mIIRU3Ci9kqdd23wRvVSnA:/NRWebFlows.AYMEjs49fE+urBzl2Bc2lQ/NodesShownInESpaceTree.5aLo5B7osE2MNi9h_DivZQ/DataActions.mIIRU3Ci9kqdd23wRvVSnA:qBJNJLlWOn4rtoDcuXxPVQ", "UBTConnect", "GetMembers", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Household_Blocks/Household_Card/GetMembers");
return controller.callDataAction("DataActionGetMembers", "screenservices/UBTConnect/Directory_Household_Blocks/Household_Card/DataActionGetMembers", "qKpBQi5mo7+0MLT9WkxEbA", function (b) {
model.variables.getMembersDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getMembersDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getMembersDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false);

}, function () {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:mIIRU3Ci9kqdd23wRvVSnA", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getMembers$DataActRefresh"];
// Client Actions
Controller.prototype._onParametersChanged$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:qplCvhU4rUuc2BsNDqhWOw:/NRWebFlows.AYMEjs49fE+urBzl2Bc2lQ/NodesShownInESpaceTree.5aLo5B7osE2MNi9h_DivZQ/ClientActions.qplCvhU4rUuc2BsNDqhWOw:ApDANkuPMHa5z0i27ZC+kQ", "UBTConnect", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2W+RnVTGVUi7sYqKGJDU8w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JIhQqgFCsUKdnAR32laxfg", callContext.id);
// Execute Action: OnReady
return controller._onReady$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MskMqarwTkinnOTUa79SkA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:qplCvhU4rUuc2BsNDqhWOw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:qplCvhU4rUuc2BsNDqhWOw", callContext.id);
throw ex;

});
};
Controller.prototype._onReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var isViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.isViewRestoredFromCacheJSResult = isViewRestoredFromCacheJSResult;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:KkS8+KOhcE+dIksGFFh3Eg:/NRWebFlows.AYMEjs49fE+urBzl2Bc2lQ/NodesShownInESpaceTree.5aLo5B7osE2MNi9h_DivZQ/ClientActions.KkS8+KOhcE+dIksGFFh3Eg:gD0lMKaj0iADA1rJ4HDdbA", "UBTConnect", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DOQSkZV7bUmSpAH1VWWQYg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:h4GPkAq1506DJS2roHRmrA", callContext.id);
isViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(UBTConnect_Directory_Household_Blocks_Household_Card_mvc_controller_OnReady_IsViewRestoredFromCacheJS, "IsViewRestoredFromCache", "OnReady", {
IsRestoredFromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Household_Blocks.Household_Card.OnReady$isViewRestoredFromCacheJSResult"))();
jsNodeResult.isRestoredFromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsRestoredFromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
// Check if IsViewRestoredFromCache IsRestoredFromCache
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:iIdXIifNGUGFx6Rlo+VqsA", callContext.id) && (isViewRestoredFromCacheJSResult.value.isRestoredFromCacheOut === true))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4aBIGsWlCkKesYMvsVR+mA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Bks6JW0Ov0y_6aJaWmrUeQ", callContext.id);
// Execute Action: ListClear
OS.SystemActions.listClear(model.variables.getMembersDataAct.householdMembersOut, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_fcICC6H00eNJZHrPpAYWw", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(model.variables.getMembersDataAct.householdMembersOut, function () {
var rec = new UBTConnect_UtilsModel.LazyImageRec();
rec.entityIdAttr = "";
rec.entityTypeAttr = UBTConnectModel.staticEntities.connect_Entity.member;
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MghCCIBVFESdELaPIhx1iQ", callContext.id);
// Execute Action: ListAppend2
OS.SystemActions.listAppend(model.variables.getMembersDataAct.householdMembersOut, function () {
var rec = new UBTConnect_UtilsModel.LazyImageRec();
rec.entityIdAttr = "";
rec.entityTypeAttr = UBTConnectModel.staticEntities.connect_Entity.member;
return rec;
}(), callContext);
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Ngib3RQsIUChnjwHvspKvg", callContext.id) && model.variables.householdIn.householdIdAttr.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nkACvYgD0UaHW4AVu75q1Q", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:OjySxpovokCles6oPTfidQ", callContext.id);
// Refresh Query: GetMembers
var result = controller.getMembers$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IqMhbM9GgUmterllgUIdww", callContext.id);
});
}

});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:KkS8+KOhcE+dIksGFFh3Eg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:KkS8+KOhcE+dIksGFFh3Eg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Directory_Household_Blocks.Household_Card.OnReady$isViewRestoredFromCacheJSResult", [{
name: "IsRestoredFromCache",
attrName: "isRestoredFromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);

Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.event_OnClickHousehold$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:AYMEjs49fE+urBzl2Bc2lQ:/NRWebFlows.AYMEjs49fE+urBzl2Bc2lQ:uCNLUKQMufTVXdBiwtGWyw", "UBTConnect", "Directory_Household_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:5aLo5B7osE2MNi9h_DivZQ:/NRWebFlows.AYMEjs49fE+urBzl2Bc2lQ/NodesShownInESpaceTree.5aLo5B7osE2MNi9h_DivZQ:5YcQJRGeeIveoO4U82ag9w", "UBTConnect", "Household_Card", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:5aLo5B7osE2MNi9h_DivZQ", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:AYMEjs49fE+urBzl2Bc2lQ", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Household_Blocks/Household_Card On Ready");
return controller.onReady$Action(callContext);

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

OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Household_Blocks/Household_Card On Parameters Changed");
return controller.onParametersChanged$Action(callContext);

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
return UBTConnectController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});
define("UBTConnect.Directory_Household_Blocks.Household_Card.mvc$controller.OnReady.IsViewRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
};
});

define("UBTConnect.Directory_Household_Blocks.Household_Card.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"h4GPkAq1506DJS2roHRmrA": {
getter: function (varBag, idService) {
return varBag.isViewRestoredFromCacheJSResult.value;
}
},
"iCBdH91PX0S4oQkOtI38tA": {
getter: function (varBag, idService) {
return varBag.model.variables.householdIn;
}
},
"mIIRU3Ci9kqdd23wRvVSnA": {
getter: function (varBag, idService) {
return varBag.model.variables.getMembersDataAct;
}
},
"2IzUUvNyuUqav0ss0ReF_g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("LazyImage_Placeholder"));
})(varBag.model, idService);
}
},
"ExW82jhR5EGK_U+wCaYLLg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_ImageTag"));
})(varBag.model, idService);
}
},
"PIO9SFkT5EiRvthcId4LyA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("AvatarList"));
})(varBag.model, idService);
}
},
"vYYxPMdSt06yeigZjHjOAw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
})(varBag.model, idService);
}
},
"05cG52Q5L0quLfKj3TXXgA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Content"));
})(varBag.model, idService);
}
},
"+ViEnHAmkkmWeyv3QFSiEg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_TopSectionContent"));
})(varBag.model, idService);
}
},
"2MAnsw8F3k27mTvy_dGBJA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_BottomSectionContent"));
})(varBag.model, idService);
}
},
"6m913LwtkUGh8OLvZx0r1g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
