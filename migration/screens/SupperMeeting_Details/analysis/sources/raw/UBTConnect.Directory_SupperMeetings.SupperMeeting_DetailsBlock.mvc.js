define("UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "Connect_Subdivision_CS.model", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "NavigationHandler.controller", "UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen.mvc$model", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.mvc$model", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$model", "UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content.mvc$model", "UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen_Section.mvc$model", "UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc$model", "UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc$model", "UBTConnect.model$LookupSectionsRec", "UBTConnect.controller$Get_LookupSection", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "Connect_Subdivision_CS.model$UI_Subdivision_Card_ContentRec", "UBTConnect.referencesHealth$Connect_Subdivision_CS", "UBTConnect_Utils.model$ContactPopUp_OverrideOptionsRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnectLibrary.model$ActionsMenuEnableOptionsRec", "UBTConnect_Utils.controller$GetHasCarouselEnabled", "NavigationHandler.controller$SetPreloadObject", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect.model$SwipeActionLongIntegerRecordList", "UBTConnect.model$SwipeActionLongIntegerRecord", "UBTConnect.model$CarouselPreloadedHouseholdsRec", "UBTConnect_Utils.controller$ShowComingSoonMessage", "Connect_Subdivision_CS.model$UI_Screen_SubdivisionDetailsRec", "UBTConnect.controller$GetSkeleton_UI_SubdivisionDetails"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, Connect_Subdivision_CSModel, UBTConnect_UtilsModel, UBTConnect_UtilsController, NavigationHandlerController, UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_mvcModel, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvcModel, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel, UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_mvcModel, UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_Section_mvcModel, UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvcModel, UBTConnect_Directory_SupperMeetings_SupperMeeting_HouseholdList_mvcModel) {
var OS = OutSystems.Internal;

var GetSubdivisionDataActRec = (function (_super) {
__extends(GetSubdivisionDataActRec, _super);
function GetSubdivisionDataActRec(defaults) {
_super.apply(this, arguments);
}
GetSubdivisionDataActRec.attributesToDeclare = function () {
return [
this.attr("Subdivision", "subdivisionOut", "Subdivision", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Subdivision_CSModel.UI_Screen_SubdivisionDetailsRec());
}, true, Connect_Subdivision_CSModel.UI_Screen_SubdivisionDetailsRec)
].concat(_super.attributesToDeclare.call(this));
};
GetSubdivisionDataActRec.fromStructure = function (str) {
return new GetSubdivisionDataActRec(new GetSubdivisionDataActRec.RecordClass({
subdivisionOut: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetSubdivisionDataActRec.init();
return GetSubdivisionDataActRec;
})(OS.Model.DataSourceRecord);

var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("In_SubdivsionId", "in_SubdivsionIdIn", "In_SubdivsionId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_SubdivsionIdInDataFetchStatus", "_in_SubdivsionIdInDataFetchStatus", "_in_SubdivsionIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("GetSubdivision", "getSubdivisionDataAct", "getSubdivisionDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetSubdivisionDataActRec());
}, true, GetSubdivisionDataActRec)
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
Model._hasValidationWidgetsValue = (((((((UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel.hasValidationWidgets) || UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_mvcModel.hasValidationWidgets) || UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_Section_mvcModel.hasValidationWidgets) || UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvcModel.hasValidationWidgets) || UBTConnect_Directory_SupperMeetings_SupperMeeting_HouseholdList_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_SubdivsionId" in inputs) {
this.variables.in_SubdivsionIdIn = inputs.In_SubdivsionId;
if("_in_SubdivsionIdInDataFetchStatus" in inputs) {
this.variables._in_SubdivsionIdInDataFetchStatus = inputs._in_SubdivsionIdInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Directory_SupperMeetings.SupperMeeting_DetailsBlock");
});
define("UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "Connect_Subdivision_CS.model", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc$model", "UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc$controller", "UBTConnect.clientVariables", "UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnectLibrary.ConnectCorePatterns.ImageCard_LazyLoading.mvc$view", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$view", "UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content.mvc$view", "UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen_Section.mvc$view", "UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc$view", "UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc$view", "UBTConnect.model$LookupSectionsRec", "UBTConnect.controller$Get_LookupSection", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "Connect_Subdivision_CS.model$UI_Subdivision_Card_ContentRec", "UBTConnect.referencesHealth$Connect_Subdivision_CS", "UBTConnect_Utils.model$ContactPopUp_OverrideOptionsRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnectLibrary.model$ActionsMenuEnableOptionsRec", "UBTConnect_Utils.controller$GetHasCarouselEnabled", "NavigationHandler.controller$SetPreloadObject", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect.model$SwipeActionLongIntegerRecordList", "UBTConnect.model$SwipeActionLongIntegerRecord", "UBTConnect.model$CarouselPreloadedHouseholdsRec", "UBTConnect_Utils.controller$ShowComingSoonMessage", "Connect_Subdivision_CS.model$UI_Screen_SubdivisionDetailsRec", "UBTConnect.controller$GetSkeleton_UI_SubdivisionDetails"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, Connect_Subdivision_CSModel, UBTConnect_UtilsModel, UBTConnect_UtilsController, NavigationHandlerController, React, OSView, UBTConnect_Directory_SupperMeetings_SupperMeeting_DetailsBlock_mvc_model, UBTConnect_Directory_SupperMeetings_SupperMeeting_DetailsBlock_mvc_controller, UBTConnectClientVariables, UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_mvc_view, UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_Section_mvc_view, UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvc_view, UBTConnect_Directory_SupperMeetings_SupperMeeting_HouseholdList_mvc_view) {
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
        View.displayName = "Directory_SupperMeetings.SupperMeeting_DetailsBlock";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_mvc_view, UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_Section_mvc_view, UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvc_view, UBTConnect_Directory_SupperMeetings_SupperMeeting_HouseholdList_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Directory_SupperMeetings_SupperMeeting_DetailsBlock_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Directory_SupperMeetings_SupperMeeting_DetailsBlock_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_mvc_view, {
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_DetailCard: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
inputs: {
In_IsLoading: !(model.variables.getSubdivisionDataAct.isDataFetchedAttr)
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
placeholder_LoadingSection: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectCorePatterns_ImageCard_LazyLoading_mvc_view, {
inputs: {
In_CardTypeId: UBTConnectModel.staticEntities.uBT_ImageCardType.detail
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
lazyImage_Placeholder: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, {
inputs: {
EntityType: UBTConnectModel.staticEntities.connect_Entity.supperMeetings_aka_Subdivisions,
HasErrorMessage: true,
EntityId: OS.BuiltinFunctions.longIntegerToText(model.variables.getSubdivisionDataAct.subdivisionOut.subdivision_CardAttr.subdivisionIdAttr),
_entityIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getSubdivisionDataAct.dataFetchStatusAttr),
ImageSize: model.getCachedValue(idService.getId("w1kVUIFZT0GwLyL50WuPtQ.ImageSize"), function () {
return function () {
var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
rec.widthAttr = UBTConnectModel.staticEntities.uBT_ImageSize.maxWidth_100vw;
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
}),
placeholder_ImageTag: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_CarouselTag,
_idProps: {
service: idService,
name: "Placeholder_CarouselTag"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
avatarList: PlaceholderContent.Empty,
placeholder_Content: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_mvc_view, {
inputs: {
In_ShowAddress: true,
In_Subdivision_CardContent: model.variables.getSubdivisionDataAct.subdivisionOut.subdivision_CardAttr.subdivision_Card_ContentAttr,
_in_Subdivision_CardContentInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getSubdivisionDataAct.dataFetchStatusAttr)
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
}
})];
})
}
})];
}),
placeholder_CallToAction: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
inputs: {
In_IsLoading: !(model.variables.getSubdivisionDataAct.isDataFetchedAttr)
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
placeholder_LoadingSection: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_Section_mvc_view, {
inputs: {
In_Title: model.getCachedValue(idService.getId("VOvwmc6mKkSQrPDlSne1cw.In_Title"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectController.default.get_LookupSection$Action(false, callContext).out_LookupOut;
}, OS.DataTypes.DataTypes.Record, callContext.id).actionsAttr.pluralAttr;
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
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_SectionContent: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Directory_CommonBlocks_Directory_EntityDetailsActions_mvc_view, {
inputs: {
EntityType: UBTConnectModel.staticEntities.connect_Entity.supperMeetings_aka_Subdivisions,
ContactPopUp_OverrideOptions: model.getCachedValue(idService.getId("Nep7VSJbcE6MIFQjSLd5qg.ContactPopUp_OverrideOptions"), function () {
return function () {
var rec = new UBTConnect_UtilsModel.ContactPopUp_OverrideOptionsRec();
rec.nameAttr = model.variables.getSubdivisionDataAct.subdivisionOut.subdivision_CardAttr.subdivision_Card_ContentAttr.nameAttr;
return rec;
}();
}, function () {
return model.variables.getSubdivisionDataAct.subdivisionOut.subdivision_CardAttr.subdivision_Card_ContentAttr.nameAttr;
}),
_contactPopUp_OverrideOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getSubdivisionDataAct.dataFetchStatusAttr),
EntityId: model.variables.in_SubdivsionIdIn,
_entityIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SubdivsionIdInDataFetchStatus),
EnableOptions: model.getCachedValue(idService.getId("Nep7VSJbcE6MIFQjSLd5qg.EnableOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ActionsMenuEnableOptionsRec();
rec.enableNotesAttr = true;
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
uuid: "9",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_SubdivsionIdIn), asPrimitiveValue(model.variables._in_SubdivsionIdInDataFetchStatus), asPrimitiveValue(model.variables.getSubdivisionDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getSubdivisionDataAct.subdivisionOut.subdivision_CardAttr.subdivision_Card_ContentAttr.nameAttr)]
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_SubdivsionIdIn), asPrimitiveValue(model.variables._in_SubdivsionIdInDataFetchStatus), asPrimitiveValue(model.variables.getSubdivisionDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getSubdivisionDataAct.subdivisionOut.subdivision_CardAttr.subdivision_Card_ContentAttr.nameAttr)]
})];
}),
placeholder_Content: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Directory_SupperMeetings_SupperMeeting_HouseholdList_mvc_view, {
inputs: {
In_SubdivisionId: model.variables.in_SubdivsionIdIn,
_in_SubdivisionIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SubdivsionIdInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_OnClick_Household$Action: function (event_HouseholdIdIn, event_HouseholdIdListIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_SupperMeetings/SupperMeeting_HouseholdList Event_OnClick_Household");
controller.onClick_NavigateToHousehold$Action(event_HouseholdIdIn, event_HouseholdIdListIn, controller.callContext(eventHandlerContext));
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
name: "Block_Household_List",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
}
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "Connect_Subdivision_CS.model", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "NavigationHandler.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc$debugger", "UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc$controller.ScreenEvent_OnReady.Get_IsViewRestoredFromCacheJS", "UBTConnect.model$LookupSectionsRec", "UBTConnect.controller$Get_LookupSection", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "Connect_Subdivision_CS.model$UI_Subdivision_Card_ContentRec", "UBTConnect.referencesHealth$Connect_Subdivision_CS", "UBTConnect_Utils.model$ContactPopUp_OverrideOptionsRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnectLibrary.model$ActionsMenuEnableOptionsRec", "UBTConnect_Utils.controller$GetHasCarouselEnabled", "NavigationHandler.controller$SetPreloadObject", "UBTConnect.referencesHealth$NavigationHandler", "UBTConnect.model$SwipeActionLongIntegerRecordList", "UBTConnect.model$SwipeActionLongIntegerRecord", "UBTConnect.model$CarouselPreloadedHouseholdsRec", "UBTConnect_Utils.controller$ShowComingSoonMessage", "Connect_Subdivision_CS.model$UI_Screen_SubdivisionDetailsRec", "UBTConnect.controller$GetSkeleton_UI_SubdivisionDetails"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, Connect_Subdivision_CSModel, UBTConnect_UtilsModel, UBTConnect_UtilsController, NavigationHandlerController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_SupperMeetings_SupperMeeting_DetailsBlock_mvc_Debugger, UBTConnect_Directory_SupperMeetings_SupperMeeting_DetailsBlock_mvc_controller_ScreenEvent_OnReady_Get_IsViewRestoredFromCacheJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
getSubdivision$DataActRefresh: -1
};
this.dataFetchDependentsGraph = {
getSubdivision$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions
Controller.prototype.getSubdivision$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:MHdm9GsZKU6nTgp+fo7hGg:/NRWebFlows.E53piema20KUP3HqQIZR6A/NodesShownInESpaceTree.Zsv4n8Lfl0qKYt5dZN8qzQ/DataActions.MHdm9GsZKU6nTgp+fo7hGg:LxkKuiCMiic3czE_ELMRew", "UBTConnect", "GetSubdivision", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_SupperMeetings/SupperMeeting_DetailsBlock/GetSubdivision");
return controller.callDataAction("DataActionGetSubdivision", "screenservices/UBTConnect/Directory_SupperMeetings/SupperMeeting_DetailsBlock/DataActionGetSubdivision", "DOCU2rEF78for4KLeWmKwQ", function (b) {
model.variables.getSubdivisionDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getSubdivisionDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getSubdivisionDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false);

}, function () {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:MHdm9GsZKU6nTgp+fo7hGg", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getSubdivision$DataActRefresh"];
// Client Actions
Controller.prototype._onClick_NavigateToHousehold$Action = function (event_HouseholdIdIn, event_HouseholdIdListIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_NavigateToHousehold");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.OnClick_NavigateToHousehold$vars"))());
vars.value.event_HouseholdIdInLocal = event_HouseholdIdIn;
vars.value.event_HouseholdIdListInLocal = event_HouseholdIdListIn.clone();
var getHasCarouselEnabledVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getHasCarouselEnabledVar = getHasCarouselEnabledVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:6x0bChgp+k24czOBHC1EVA:/NRWebFlows.E53piema20KUP3HqQIZR6A/NodesShownInESpaceTree.Zsv4n8Lfl0qKYt5dZN8qzQ/ClientActions.6x0bChgp+k24czOBHC1EVA:fcg0cPEyMMm5XTHhOjKjdQ", "UBTConnect", "OnClick_NavigateToHousehold", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_TuNZ2GycUy1VYJBNCLnNw", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:p+NNuU0hhUq8CJeJ0ARYIA", callContext.id);
// Execute Action: GetHasCarouselEnabled
getHasCarouselEnabledVar.value = UBTConnect_UtilsController.default.getHasCarouselEnabled$Action(callContext);

if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xFbcNoTxIkaAG+8m3VTlEQ", callContext.id) && getHasCarouselEnabledVar.value.hasCarouselEnabledOut)) {
// Foreach Event_HouseholdIdList
callContext.iterationContext.registerIterationStart(vars.value.event_HouseholdIdListInLocal);
try {var event_HouseholdIdListIterator = callContext.iterationContext.getIterator(vars.value.event_HouseholdIdListInLocal);
var event_HouseholdIdListIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oPwLGtqk9kqsj27PwWISWA", callContext.id) && (event_HouseholdIdListIndex < vars.value.event_HouseholdIdListInLocal.length))) {
event_HouseholdIdListIterator.currentRowNumber = event_HouseholdIdListIndex;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fAjdILQXkUOt5O5AREivkg", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(vars.value.preloadedHouseholdsVar.carouselHouseholdItemAttr, function () {
var rec = new UBTConnectModel.SwipeActionLongIntegerRecord();
rec.householdAttr = vars.value.event_HouseholdIdListInLocal.getItem(event_HouseholdIdListIndex.valueOf());
return rec;
}(), callContext);
event_HouseholdIdListIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(vars.value.event_HouseholdIdListInLocal);
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vBUa1b0FcU+6+7GS6r6b4g", callContext.id);
// Execute Action: SetPreloadObject
NavigationHandlerController.default.setPreloadObject$Action(OS.BuiltinFunctions.toObject(vars.value.preloadedHouseholdsVar), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5kl3klBH8UiryblPWSUgqw", callContext.id);
// Destination: /UBTConnect/HouseholdCarousel
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HouseholdCarousel", {
In_StartingHouseholdId: OS.DataConversion.ServerDataConverter.asString(vars.value.event_HouseholdIdInLocal, OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:N92Hlz7Hp0ySgBOXJkPaEw", callContext.id);
// Destination: /UBTConnect/HouseholdDetails
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HouseholdDetails", {
HouseholdId: OS.DataConversion.ServerDataConverter.asString(vars.value.event_HouseholdIdInLocal, OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:6x0bChgp+k24czOBHC1EVA", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.OnClick_NavigateToHousehold$vars", [{
name: "Event_HouseholdId",
attrName: "event_HouseholdIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "Event_HouseholdIdList",
attrName: "event_HouseholdIdListInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OS.DataTypes.LongIntegerList();
},
complexType: OS.DataTypes.LongIntegerList
}, {
name: "PreloadedHouseholds",
attrName: "preloadedHouseholdsVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectModel.CarouselPreloadedHouseholdsRec();
},
complexType: UBTConnectModel.CarouselPreloadedHouseholdsRec
}]);
Controller.prototype._handler_Bookmark$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_Bookmark");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:5jcZJaPFvkC4UnXKD1_i4Q:/NRWebFlows.E53piema20KUP3HqQIZR6A/NodesShownInESpaceTree.Zsv4n8Lfl0qKYt5dZN8qzQ/ClientActions.5jcZJaPFvkC4UnXKD1_i4Q:GRqSGBWjvNVV7Xacz7DE0w", "UBTConnect", "Handler_Bookmark", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:j5PlEpE8LUKnXBlxNRZ6aQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:s+gi5eY4XECITV2JzDXrIA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:5jcZJaPFvkC4UnXKD1_i4Q", callContext.id);
}

};
Controller.prototype._handler_Share$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_Share");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:8u6JlzzzKk66Mabikwp81Q:/NRWebFlows.E53piema20KUP3HqQIZR6A/NodesShownInESpaceTree.Zsv4n8Lfl0qKYt5dZN8qzQ/ClientActions.8u6JlzzzKk66Mabikwp81Q:JRc558OM6+oR2qobHCmiCA", "UBTConnect", "Handler_Share", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Ey3HE55xxkWGrAJjiBHbNw", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:THVzAkRM30yQ93C4c36hAw", callContext.id);
// Execute Action: ShowComingSoonMessage
UBTConnect_UtilsController.default.showComingSoonMessage$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZwDbGp6Ot0mwBo3PctKaYQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:8u6JlzzzKk66Mabikwp81Q", callContext.id);
}

};
Controller.prototype._screenEvent_OnReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ScreenEvent_OnReady");
callContext = controller.callContext(callContext);
var getSkeleton_UI_SubdivisionDetailsVar = new OS.DataTypes.VariableHolder();
var get_IsViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getSkeleton_UI_SubdivisionDetailsVar = getSkeleton_UI_SubdivisionDetailsVar;
varBag.get_IsViewRestoredFromCacheJSResult = get_IsViewRestoredFromCacheJSResult;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:0tzT+6vym0GIKzU14gpfTg:/NRWebFlows.E53piema20KUP3HqQIZR6A/NodesShownInESpaceTree.Zsv4n8Lfl0qKYt5dZN8qzQ/ClientActions.0tzT+6vym0GIKzU14gpfTg:HBjgJS5mIgzYYeEA4KEtcg", "UBTConnect", "ScreenEvent_OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lZL6mI8RwEmbPohw9y65lA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Cu5JTXs5gEeGDWZh8fcAaA", callContext.id);
get_IsViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(UBTConnect_Directory_SupperMeetings_SupperMeeting_DetailsBlock_mvc_controller_ScreenEvent_OnReady_Get_IsViewRestoredFromCacheJS, "Get_IsViewRestoredFromCache", "ScreenEvent_OnReady", {
FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
FromHistory: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.ScreenEvent_OnReady$get_IsViewRestoredFromCacheJSResult"))();
jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.fromHistoryOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromHistory, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
// Is view restored from cache?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:RwWMyeMSXkuYCs+2aXSFtQ", callContext.id) && (get_IsViewRestoredFromCacheJSResult.value.fromCacheOut || get_IsViewRestoredFromCacheJSResult.value.fromHistoryOut))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ltUV_+hhUEmLNp6_r6+fNw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:77agQMbbO0m76CpKNzwiGg", callContext.id);
// Execute Action: GetSkeleton_UI_SubdivisionDetails
getSkeleton_UI_SubdivisionDetailsVar.value = UBTConnectController.default.getSkeleton_UI_SubdivisionDetails$Action(callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BkM2rGFLlk+iG67Z79VbpA", callContext.id);
// GetSubdivision.Subdivision = GetSkeleton_UI_SubdivisionDetails.UI_SubdivisionDetails
model.variables.getSubdivisionDataAct.subdivisionOut = getSkeleton_UI_SubdivisionDetailsVar.value.uI_SubdivisionDetailsOut;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:g+C0g5F4DkSQ3Tdraf1uFw", callContext.id);
// Refresh Query: GetSubdivision
var result = controller.getSubdivision$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MtYaZdoRHU22oU6pHY0rAw", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:0tzT+6vym0GIKzU14gpfTg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:0tzT+6vym0GIKzU14gpfTg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.ScreenEvent_OnReady$get_IsViewRestoredFromCacheJSResult", [{
name: "FromCache",
attrName: "fromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "FromHistory",
attrName: "fromHistoryOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);

Controller.prototype.onClick_NavigateToHousehold$Action = function (event_HouseholdIdIn, event_HouseholdIdListIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_NavigateToHousehold$Action, callContext, event_HouseholdIdIn, event_HouseholdIdListIn);

};
Controller.prototype.handler_Bookmark$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_Bookmark$Action, callContext);

};
Controller.prototype.handler_Share$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_Share$Action, callContext);

};
Controller.prototype.screenEvent_OnReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._screenEvent_OnReady$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:E53piema20KUP3HqQIZR6A:/NRWebFlows.E53piema20KUP3HqQIZR6A:zbxcFH+tyRwg__bC3mWnVg", "UBTConnect", "Directory_SupperMeetings", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Zsv4n8Lfl0qKYt5dZN8qzQ:/NRWebFlows.E53piema20KUP3HqQIZR6A/NodesShownInESpaceTree.Zsv4n8Lfl0qKYt5dZN8qzQ:3M7iOh4fmKBFs9QCC6BvKA", "UBTConnect", "SupperMeeting_DetailsBlock", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Zsv4n8Lfl0qKYt5dZN8qzQ", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:E53piema20KUP3HqQIZR6A", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_SupperMeetings/SupperMeeting_DetailsBlock On Ready");
return controller.screenEvent_OnReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
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
define("UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc$controller.ScreenEvent_OnReady.Get_IsViewRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
};
});

define("UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"U1M7rLBJYE2FAneZeLwwkA": {
getter: function (varBag, idService) {
return varBag.vars.value.preloadedHouseholdsVar;
}
},
"T7Zx9QMKxk2+VKjmCG+LCQ": {
getter: function (varBag, idService) {
return varBag.vars.value.event_HouseholdIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"pDBddYshKky1Q7eoExEH6A": {
getter: function (varBag, idService) {
return varBag.vars.value.event_HouseholdIdListInLocal;
}
},
"p+NNuU0hhUq8CJeJ0ARYIA": {
getter: function (varBag, idService) {
return varBag.getHasCarouselEnabledVar.value;
}
},
"77agQMbbO0m76CpKNzwiGg": {
getter: function (varBag, idService) {
return varBag.getSkeleton_UI_SubdivisionDetailsVar.value;
}
},
"Cu5JTXs5gEeGDWZh8fcAaA": {
getter: function (varBag, idService) {
return varBag.get_IsViewRestoredFromCacheJSResult.value;
}
},
"DiRmWS6Xzk2Qqp9AEtesdQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_SubdivsionIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"MHdm9GsZKU6nTgp+fo7hGg": {
getter: function (varBag, idService) {
return varBag.model.variables.getSubdivisionDataAct;
}
},
"jwFl8KAC1k2toF3Hc+SBAg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_DetailCard"));
})(varBag.model, idService);
}
},
"hCCLATrpG0iYRoLWtqndzg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
})(varBag.model, idService);
}
},
"v5d4DaqI0kKZaZ7hYIbiEQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("LazyImage_Placeholder"));
})(varBag.model, idService);
}
},
"nW8J5N+coUeHgEHH5yELqQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_ImageTag"));
})(varBag.model, idService);
}
},
"jNLdgqKz7kab25UZqKUPjg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_CarouselTag"));
})(varBag.model, idService);
}
},
"8xCIjzEr0UGBbMis5bmtAw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("AvatarList"));
})(varBag.model, idService);
}
},
"Lfvd3FGTIUugSqAFVoL7NQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Content"));
})(varBag.model, idService);
}
},
"XdQpxTL9xUq2AyJMwi_PBA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_CallToAction"));
})(varBag.model, idService);
}
},
"npQFp81ra0S22h0HmdEnXQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
})(varBag.model, idService);
}
},
"tkW3+XnA7k23Bi2ZvJzrdA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_SectionContent"));
})(varBag.model, idService);
}
},
"slbPjdswUku5yXCg0rj0sw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Content"));
})(varBag.model, idService);
}
},
"5RJbnC29kkaENgJYtUpyFA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Block_Household_List"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
