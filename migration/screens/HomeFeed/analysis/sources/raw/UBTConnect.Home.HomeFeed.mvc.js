define("UBTConnect.Home.HomeFeed.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "Connect_Updates_CS.model", "Connect2_Sharing_CS.model", "UBTConnectLibrary.model", "Connect_Geography_CS.model", "UBTConnectLibrary.Layouts.Layout_HomePage.mvc$model", "UBTConnect.App_Common.AppLogo_White.mvc$model", "UBTConnect.App_Common_Blocks.App_NotificationIcon.mvc$model", "UBTConnect.Home.Section_FeedWrapper.mvc$model", "UBTConnect.Home.FeedBlock_Services.mvc$model", "UBTConnect.Home.FeedBlock_CommunityPopulation.mvc$model", "UBTConnect.Home.FeedBlock_Updates.mvc$model", "UBTConnect.Home.Feed_Embeded.mvc$model", "UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_ExitConfirmation.mvc$model", "UBTConnect.App_Common.BottomBarMenu.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "UBTConnect_Utils.CW_Share.ShareSheet.mvc$model", "UBTConnectLibrary.ConnectCorePatterns.Update_ListItem.mvc$model", "UBTConnect_Utils.CW_Share.ShareableObject_Generic.mvc$model", "Connect_Updates_CS.model$UI_UpdateItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Updates_CS", "Connect2_Sharing_CS.model$UI_ShareableObject_GenericRec", "UBTConnect.referencesHealth$Connect2_Sharing_CS", "UBTConnect.model$TextGender2IdentifierRecordList", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "Connect_Geography_CS.model$UI_CommunityStatisticsRec", "UBTConnect.referencesHealth$Connect_Geography_CS"], function (OutSystems, UBTConnectModel, Connect_Updates_CSModel, Connect2_Sharing_CSModel, UBTConnectLibraryModel, Connect_Geography_CSModel, UBTConnectLibrary_Layouts_Layout_HomePage_mvcModel, UBTConnect_App_Common_AppLogo_White_mvcModel, UBTConnect_App_Common_Blocks_App_NotificationIcon_mvcModel, UBTConnect_Home_Section_FeedWrapper_mvcModel, UBTConnect_Home_FeedBlock_Services_mvcModel, UBTConnect_Home_FeedBlock_CommunityPopulation_mvcModel, UBTConnect_Home_FeedBlock_Updates_mvcModel, UBTConnect_Home_Feed_Embeded_mvcModel, UBTConnect_App_Common_Blocks_PopupDialogs_Dialog_ExitConfirmation_mvcModel, UBTConnect_App_Common_BottomBarMenu_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel, UBTConnect_Utils_CW_Share_ShareSheet_mvcModel, UBTConnectLibrary_ConnectCorePatterns_Update_ListItem_mvcModel, UBTConnect_Utils_CW_Share_ShareableObject_Generic_mvcModel) {
var OS = OutSystems.Internal;

var GetCommunityStatisticsDataActRec = (function (_super) {
__extends(GetCommunityStatisticsDataActRec, _super);
function GetCommunityStatisticsDataActRec(defaults) {
_super.apply(this, arguments);
}
GetCommunityStatisticsDataActRec.attributesToDeclare = function () {
return [
this.attr("Out_CommunityStatistics", "out_CommunityStatisticsOut", "Out_CommunityStatistics", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Geography_CSModel.UI_CommunityStatisticsRec());
}, true, Connect_Geography_CSModel.UI_CommunityStatisticsRec)
].concat(_super.attributesToDeclare.call(this));
};
GetCommunityStatisticsDataActRec.fromStructure = function (str) {
return new GetCommunityStatisticsDataActRec(new GetCommunityStatisticsDataActRec.RecordClass({
out_CommunityStatisticsOut: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetCommunityStatisticsDataActRec.init();
return GetCommunityStatisticsDataActRec;
})(OS.Model.DataSourceRecord);

var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("HasUpdates", "hasUpdatesVar", "HasUpdates", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("IsScreenInitialized", "isScreenInitializedVar", "IsScreenInitialized", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("ShareableUpdateItem", "shareableUpdateItemVar", "ShareableUpdateItem", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Updates_CSModel.UI_UpdateItemRec());
}, false, Connect_Updates_CSModel.UI_UpdateItemRec), 
this.attr("IsShareOpen", "isShareOpenVar", "IsShareOpen", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("ShareableObjectId", "shareableObjectIdVar", "ShareableObjectId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("ShareObjectTypeId", "shareObjectTypeIdVar", "ShareObjectTypeId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("ShareableFeedItem", "shareableFeedItemVar", "ShareableFeedItem", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_Sharing_CSModel.UI_ShareableObject_GenericRec());
}, false, Connect2_Sharing_CSModel.UI_ShareableObject_GenericRec), 
this.attr("GetCommunityStatistics", "getCommunityStatisticsDataAct", "getCommunityStatisticsDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetCommunityStatisticsDataActRec());
}, true, GetCommunityStatisticsDataActRec)
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
Model._hasValidationWidgetsValue = (((((((((((((UBTConnectLibrary_Layouts_Layout_HomePage_mvcModel.hasValidationWidgets || UBTConnect_App_Common_AppLogo_White_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_Blocks_App_NotificationIcon_mvcModel.hasValidationWidgets) || UBTConnect_Home_Section_FeedWrapper_mvcModel.hasValidationWidgets) || UBTConnect_Home_FeedBlock_Services_mvcModel.hasValidationWidgets) || UBTConnect_Home_FeedBlock_CommunityPopulation_mvcModel.hasValidationWidgets) || UBTConnect_Home_FeedBlock_Updates_mvcModel.hasValidationWidgets) || UBTConnect_Home_Feed_Embeded_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_Blocks_PopupDialogs_Dialog_ExitConfirmation_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_BottomBarMenu_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_Share_ShareSheet_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectCorePatterns_Update_ListItem_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_Share_ShareableObject_Generic_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Home.HomeFeed");
});
define("UBTConnect.Home.HomeFeed.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Updates_CS.model", "Connect2_Sharing_CS.model", "UBTConnectLibrary.model", "Connect_Geography_CS.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Home.HomeFeed.mvc$model", "UBTConnect.Home.HomeFeed.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.Layouts.Layout_HomePage.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.App_Common.AppLogo_White.mvc$view", "UBTConnect.App_Common_Blocks.App_NotificationIcon.mvc$view", "UBTConnect.Home.Section_FeedWrapper.mvc$view", "UBTConnect.Home.FeedBlock_Services.mvc$view", "UBTConnect.Home.FeedBlock_CommunityPopulation.mvc$view", "UBTConnect.Home.FeedBlock_Updates.mvc$view", "UBTConnect.Home.Feed_Embeded.mvc$view", "UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_ExitConfirmation.mvc$view", "UBTConnect.App_Common.BottomBarMenu.mvc$view", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "UBTConnect_Utils.CW_Share.ShareSheet.mvc$view", "UBTConnectLibrary.ConnectCorePatterns.Update_ListItem.mvc$view", "UBTConnect_Utils.CW_Share.ShareableObject_Generic.mvc$view", "Connect_Updates_CS.model$UI_UpdateItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Updates_CS", "Connect2_Sharing_CS.model$UI_ShareableObject_GenericRec", "UBTConnect.referencesHealth$Connect2_Sharing_CS", "UBTConnect.model$TextGender2IdentifierRecordList", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "Connect_Geography_CS.model$UI_CommunityStatisticsRec", "UBTConnect.referencesHealth$Connect_Geography_CS"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Updates_CSModel, Connect2_Sharing_CSModel, UBTConnectLibraryModel, Connect_Geography_CSModel, React, OSView, UBTConnect_Home_HomeFeed_mvc_model, UBTConnect_Home_HomeFeed_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_Layouts_Layout_HomePage_mvc_view, OSWidgets, UBTConnect_App_Common_AppLogo_White_mvc_view, UBTConnect_App_Common_Blocks_App_NotificationIcon_mvc_view, UBTConnect_Home_Section_FeedWrapper_mvc_view, UBTConnect_Home_FeedBlock_Services_mvc_view, UBTConnect_Home_FeedBlock_CommunityPopulation_mvc_view, UBTConnect_Home_FeedBlock_Updates_mvc_view, UBTConnect_Home_Feed_Embeded_mvc_view, UBTConnect_App_Common_Blocks_PopupDialogs_Dialog_ExitConfirmation_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, UBTConnect_Utils_CW_Share_ShareSheet_mvc_view, UBTConnectLibrary_ConnectCorePatterns_Update_ListItem_mvc_view, UBTConnect_Utils_CW_Share_ShareableObject_Generic_mvc_view) {
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
        View.displayName = "Home.HomeFeed";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_Layouts_Layout_HomePage_mvc_view, UBTConnect_App_Common_AppLogo_White_mvc_view, UBTConnect_App_Common_Blocks_App_NotificationIcon_mvc_view, UBTConnect_Home_Section_FeedWrapper_mvc_view, UBTConnect_Home_FeedBlock_Services_mvc_view, UBTConnect_Home_FeedBlock_CommunityPopulation_mvc_view, UBTConnect_Home_FeedBlock_Updates_mvc_view, UBTConnect_Home_Feed_Embeded_mvc_view, UBTConnect_App_Common_Blocks_PopupDialogs_Dialog_ExitConfirmation_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, UBTConnect_Utils_CW_Share_ShareSheet_mvc_view, UBTConnectLibrary_ConnectCorePatterns_Update_ListItem_mvc_view, UBTConnect_Utils_CW_Share_ShareableObject_Generic_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Home_HomeFeed_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Home_HomeFeed_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "HomeFeed";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_Layouts_Layout_HomePage_mvc_view, {
inputs: {
SVGHeight: "260px",
ContentBackgroundColor: UBTConnectModel.staticEntities.uBT_Color.neutral4
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onSearchClick$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Layouts/Layout_HomePage OnSearchClick");
controller.onClick_Search$Action(controller.callContext(eventHandlerContext));
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
placeholder_Header_Title: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_App_Common_AppLogo_White_mvc_view, {
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
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
placeholder_Header_Right: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_App_Common_Blocks_App_NotificationIcon_mvc_view, {
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
uuid: "2",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
headerContent: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Home_Section_FeedWrapper_mvc_view, {
inputs: {
MarginTopSizeId: UBTConnectModel.staticEntities.uBT_Size.base,
isTransparentBackground: true,
ShowHeader: false,
showViewAll: false
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
name: "Section_Services",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Home_FeedBlock_Services_mvc_view, {
inputs: {
ForceAddService: false
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
_dependencies: []
})];
})
},
_dependencies: []
}), $if(true, false, this, function () {
return [React.createElement(UBTConnect_Home_Section_FeedWrapper_mvc_view, {
inputs: {
isTransparentBackground: true,
showViewAll: false,
ShowHeader: false
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
name: "Section_CommunityPopulation",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Home_FeedBlock_CommunityPopulation_mvc_view, {
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
}, function () {
return [];
}), $if(model.variables.hasUpdatesVar, false, this, function () {
return [React.createElement(UBTConnect_Home_Section_FeedWrapper_mvc_view, {
inputs: {
isTransparentBackground: false,
Title: "Updates",
showViewAll: true,
ShowHeader: true,
MarginTopSizeId: UBTConnectModel.staticEntities.uBT_Size.small
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onClick_ViewAll$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Home/Section_FeedWrapper OnClick_ViewAll");
controller.section_UpdatesOnClick_ViewAll$Action(controller.callContext(eventHandlerContext));
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
name: "Section_Updates",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Home_FeedBlock_Updates_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_NoUpdates$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Home/FeedBlock_Updates Event_NoUpdates");
controller.handler_NoUpdates$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
event_Share$Action: function (event_UpdateItemIdIn, event_ShareableUpdateItemIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Home/FeedBlock_Updates Event_Share");
controller.handler_ShareUpdate$Action(event_UpdateItemIdIn, event_ShareableUpdateItemIn, controller.callContext(eventHandlerContext));
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
uuid: "8",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
})];
}, function () {
return [];
}), React.createElement(UBTConnect_Home_Feed_Embeded_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_Share$Action: function (event_ShareIdIn, event_FeedItemTitleIn, event_FeedItemSubtitleIn, event_FeedItemImageURLIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Home/Feed_Embeded Event_Share");
controller.handler_ShareFeed$Action(event_ShareIdIn, event_FeedItemTitleIn, event_FeedItemSubtitleIn, event_FeedItemImageURLIn, controller.callContext(eventHandlerContext));
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
uuid: "9",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), $if(model.variables.isScreenInitializedVar, false, this, function () {
return [React.createElement(UBTConnect_App_Common_Blocks_PopupDialogs_Dialog_ExitConfirmation_mvc_view, {
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
uuid: "10",
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
})];
}),
bottom: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_App_Common_BottomBarMenu_mvc_view, {
inputs: {
ActiveItem: UBTConnectModel.staticEntities.connect_BottomBar_Items.home,
isRootPage: true
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
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
placeholder_CommonUI_Inside_Layout: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, {
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
uuid: "12",
alias: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.isScreenInitializedVar), asPrimitiveValue(model.variables.hasUpdatesVar)]
}), $if(true, false, this, function () {
return [React.createElement(UBTConnect_Utils_CW_Share_ShareSheet_mvc_view, {
inputs: {
In_ShareableObjectId: model.variables.shareableObjectIdVar,
In_IsOpen: model.variables.isShareOpenVar,
In_ShareObjectTypeId: model.variables.shareObjectTypeIdVar,
In_UpdateType: model.getCachedValue(idService.getId("IfjjxIap1kGsyOYrYcaLDg.In_UpdateType"), function () {
return (((model.variables.shareObjectTypeIdVar === UBTConnectModel.staticEntities.type_ShareObject.update)) ? (model.variables.shareableUpdateItemVar.updateItemTypeIdAttr) : (""));
}, function () {
return model.variables.shareObjectTypeIdVar;
}, function () {
return model.variables.shareableUpdateItemVar.updateItemTypeIdAttr;
}),
In_UpdateDate: model.getCachedValue(idService.getId("IfjjxIap1kGsyOYrYcaLDg.In_UpdateDate"), function () {
return (((model.variables.shareObjectTypeIdVar === UBTConnectModel.staticEntities.type_ShareObject.update)) ? (model.variables.shareableUpdateItemVar.dateAttr) : (OS.BuiltinFunctions.nullDate()));
}, function () {
return model.variables.shareObjectTypeIdVar;
}, function () {
return model.variables.shareableUpdateItemVar.dateAttr;
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_ClosedShareSheet$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_Share/ShareSheet Event_ClosedShareSheet");
controller.handler_CloseShareSheet$Action(controller.callContext(eventHandlerContext));
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
uuid: "13",
alias: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_ShareableObject: new PlaceholderContent(function () {
return [$if((model.variables.shareObjectTypeIdVar === UBTConnectModel.staticEntities.type_ShareObject.update), false, this, function () {
return [React.createElement(UBTConnectLibrary_ConnectCorePatterns_Update_ListItem_mvc_view, {
inputs: {
In_ParentsNames: model.variables.shareableUpdateItemVar.parentsNamesAttr,
IsEnabled: false,
In_InitialsList: model.getCachedValue(idService.getId("0wwUavVylECnt88YQ0dtVQ.In_InitialsList"), function () {
return function () {
var list = new UBTConnectModel.TextGender2IdentifierRecordList();
list.pushAll([function () {
var rec = new UBTConnectModel.TextGender2IdentifierRecord();
rec.genderAttr = model.variables.shareableUpdateItemVar.genderIdAttr;
return rec;
}()]);
return list;
}();
}, function () {
return model.variables.shareableUpdateItemVar.genderIdAttr;
}),
In_Type_UpdateFeedItem: model.variables.shareableUpdateItemVar.updateItemTypeIdAttr,
HasBorderBottom: false,
In_BirthType: model.variables.shareableUpdateItemVar.birthTypeAttr,
ShowImage: false,
IgnoreReadBackground: true,
In_Name: model.variables.shareableUpdateItemVar.nameAttr,
In_IsRead: false,
In_Location: model.variables.shareableUpdateItemVar.locationStringAttr,
In_Date: model.variables.shareableUpdateItemVar.dateAttr
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
alias: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), $if((model.variables.shareObjectTypeIdVar === UBTConnectModel.staticEntities.type_ShareObject.feed), false, this, function () {
return [React.createElement(UBTConnect_Utils_CW_Share_ShareableObject_Generic_mvc_view, {
inputs: {
In_ShareableObject: model.variables.shareableFeedItemVar
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
alias: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.shareableFeedItemVar), asPrimitiveValue(model.variables.shareableUpdateItemVar.dateAttr), asPrimitiveValue(model.variables.shareableUpdateItemVar.locationStringAttr), asPrimitiveValue(model.variables.shareableUpdateItemVar.nameAttr), asPrimitiveValue(model.variables.shareableUpdateItemVar.birthTypeAttr), asPrimitiveValue(model.variables.shareableUpdateItemVar.updateItemTypeIdAttr), asPrimitiveValue(model.variables.shareableUpdateItemVar.genderIdAttr), asPrimitiveValue(model.variables.shareableUpdateItemVar.parentsNamesAttr), asPrimitiveValue(model.variables.shareObjectTypeIdVar)]
})];
}, function () {
return [];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("UBTConnect.Home.HomeFeed.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Updates_CS.model", "Connect2_Sharing_CS.model", "UBTConnectLibrary.model", "Connect_Geography_CS.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Home.HomeFeed.mvc$debugger", "UBTConnect.Home.controller", "UBTConnect.Home.HomeFeed.mvc$controller.ScreenEvent_OnReady.IsRestoredFromCacheJS", "Connect_Updates_CS.model$UI_UpdateItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Updates_CS", "Connect2_Sharing_CS.model$UI_ShareableObject_GenericRec", "UBTConnect.referencesHealth$Connect2_Sharing_CS", "UBTConnect.model$TextGender2IdentifierRecordList", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "Connect_Geography_CS.model$UI_CommunityStatisticsRec", "UBTConnect.referencesHealth$Connect_Geography_CS"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Updates_CSModel, Connect2_Sharing_CSModel, UBTConnectLibraryModel, Connect_Geography_CSModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Home_HomeFeed_mvc_Debugger, _flow_UBTConnect_HomeController, UBTConnect_Home_HomeFeed_mvc_controller_ScreenEvent_OnReady_IsRestoredFromCacheJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
getCommunityStatistics$DataActRefresh: -1
};
this.dataFetchDependentsGraph = {
getCommunityStatistics$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions
Controller.prototype.getCommunityStatistics$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:uGyhekOyn0K9JQ+e6CmvRQ:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.Dqq8_XA8Bku0HJ104S2EwQ/DataActions.uGyhekOyn0K9JQ+e6CmvRQ:Z2d8qE124PPvKmgjGS9MPg", "UBTConnect", "GetCommunityStatistics", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Home/HomeFeed/GetCommunityStatistics");
return controller.callDataAction("DataActionGetCommunityStatistics", "screenservices/UBTConnect/Home/HomeFeed/DataActionGetCommunityStatistics", "WEbiZcexFuzyELbRsdqeIw", function (b) {
model.variables.getCommunityStatisticsDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getCommunityStatisticsDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getCommunityStatisticsDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false);

}, function () {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:uGyhekOyn0K9JQ+e6CmvRQ", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getCommunityStatistics$DataActRefresh"];
// Client Actions
Controller.prototype._section_UpdatesOnClick_ViewAll$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Section_UpdatesOnClick_ViewAll");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:J2ucU+Rov0CVjaXyJ1DCZQ:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.Dqq8_XA8Bku0HJ104S2EwQ/ClientActions.J2ucU+Rov0CVjaXyJ1DCZQ:DY6KZ6jvAl57gRnS2PqXPw", "UBTConnect", "Section_UpdatesOnClick_ViewAll", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:y0sCy3qFSEi3LUo2ZB8E9w", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ND2WKqmSx0CV0TKj5GgNKA", callContext.id);
// Destination: /UBTConnect/Updates_SingleList
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/Updates_SingleList", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:J2ucU+Rov0CVjaXyJ1DCZQ", callContext.id);
}

};
Controller.prototype._onClick_Search$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_Search");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Eg+8ramqJ0G_UhsAHXwDhg:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.Dqq8_XA8Bku0HJ104S2EwQ/ClientActions.Eg+8ramqJ0G_UhsAHXwDhg:KPfWERnxaHjBQd0Yp3nLBQ", "UBTConnect", "OnClick_Search", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8ejYH6c2G0uh4af3wcdwrw", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wavSilSJok+wMdpSqKfV5g", callContext.id);
// Destination: /UBTConnect/Search
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/Search", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Eg+8ramqJ0G_UhsAHXwDhg", callContext.id);
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
var isRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.isRestoredFromCacheJSResult = isRestoredFromCacheJSResult;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:P99Ir5dx1ES3M7OoJI7fqA:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.Dqq8_XA8Bku0HJ104S2EwQ/ClientActions.P99Ir5dx1ES3M7OoJI7fqA:5WulWHief__rGlGIdOkHbA", "UBTConnect", "ScreenEvent_OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gRlZgZt7REWAC_eFboKIBQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rm2m7KRYS0u2prlndCoeXA", callContext.id);
// IsScreenInitialized = True
model.variables.isScreenInitializedVar = true;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IbrHHe43LEmfYh0UhTLj8g", callContext.id);
isRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(UBTConnect_Home_HomeFeed_mvc_controller_ScreenEvent_OnReady_IsRestoredFromCacheJS, "IsRestoredFromCache", "ScreenEvent_OnReady", {
IsRestoredFromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnect.Home.HomeFeed.ScreenEvent_OnReady$isRestoredFromCacheJSResult"))();
jsNodeResult.isRestoredFromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsRestoredFromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8_y8YuzPSEWU1ZgPqlRTXQ", callContext.id) && isRestoredFromCacheJSResult.value.isRestoredFromCacheOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:v0IB0FswQ0uOMA4df9M8Zw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fb4OdNH+r0arv8jOHW+CHw", callContext.id);
// Refresh Query: GetCommunityStatistics
var result = controller.getCommunityStatistics$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SDeOKv49DkODlnIm1zaOGg", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:P99Ir5dx1ES3M7OoJI7fqA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:P99Ir5dx1ES3M7OoJI7fqA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Home.HomeFeed.ScreenEvent_OnReady$isRestoredFromCacheJSResult", [{
name: "IsRestoredFromCache",
attrName: "isRestoredFromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._handler_NoUpdates$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_NoUpdates");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:67lOr31QXUiShr0DaIsB+w:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.Dqq8_XA8Bku0HJ104S2EwQ/ClientActions.67lOr31QXUiShr0DaIsB+w:CvDKJBcOcDKXvcI1x7Wxpg", "UBTConnect", "Handler_NoUpdates", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:iW817z7eI0C01mJv_P7VIg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:appqS3BAD02OyoisAl9sRA", callContext.id);
// HasUpdates = False
model.variables.hasUpdatesVar = false;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:l4cHAt7ncEmN4rH9r7P9DA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:67lOr31QXUiShr0DaIsB+w", callContext.id);
}

};
Controller.prototype._handler_ShareFeed$Action = function (event_ShareIdIn, event_FeedItemTitleIn, event_FeedItemSubtitleIn, event_FeedItemImageURLIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_ShareFeed");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Home.HomeFeed.Handler_ShareFeed$vars"))());
vars.value.event_ShareIdInLocal = event_ShareIdIn;
vars.value.event_FeedItemTitleInLocal = event_FeedItemTitleIn;
vars.value.event_FeedItemSubtitleInLocal = event_FeedItemSubtitleIn;
vars.value.event_FeedItemImageURLInLocal = event_FeedItemImageURLIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:7kIfySdxzUOU+L0+gKJlCw:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.Dqq8_XA8Bku0HJ104S2EwQ/ClientActions.7kIfySdxzUOU+L0+gKJlCw:3DXN4hNv901pVc14oaN+9g", "UBTConnect", "Handler_ShareFeed", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YDDUD0FDcEOlZAxtz4VjzA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WAvnS3apHUyrYRbFfzNu1w", callContext.id);
// ShareObjectTypeId = Feed
model.variables.shareObjectTypeIdVar = UBTConnectModel.staticEntities.type_ShareObject.feed;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WAvnS3apHUyrYRbFfzNu1w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ShareableObjectId = Event_ShareId
model.variables.shareableObjectIdVar = vars.value.event_ShareIdInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WAvnS3apHUyrYRbFfzNu1w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// IsShareOpen = True
model.variables.isShareOpenVar = true;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WAvnS3apHUyrYRbFfzNu1w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ShareableFeedItem.ConnectEntityTypeId = FeedItem
model.variables.shareableFeedItemVar.connectEntityTypeIdAttr = UBTConnectModel.staticEntities.connect_Entity.feedItem;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WAvnS3apHUyrYRbFfzNu1w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// ShareableFeedItem.SignedURL = Event_FeedItemImageURL
model.variables.shareableFeedItemVar.signedURLAttr = vars.value.event_FeedItemImageURLInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WAvnS3apHUyrYRbFfzNu1w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// ShareableFeedItem.Title = Event_FeedItemTitle
model.variables.shareableFeedItemVar.titleAttr = vars.value.event_FeedItemTitleInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WAvnS3apHUyrYRbFfzNu1w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
// ShareableFeedItem.Subtitle = Event_FeedItemSubtitle
model.variables.shareableFeedItemVar.subtitleAttr = vars.value.event_FeedItemSubtitleInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Zp1cQVUpS0WPLsiN9M5k1A", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:7kIfySdxzUOU+L0+gKJlCw", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Home.HomeFeed.Handler_ShareFeed$vars", [{
name: "Event_ShareId",
attrName: "event_ShareIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Event_FeedItemTitle",
attrName: "event_FeedItemTitleInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Event_FeedItemSubtitle",
attrName: "event_FeedItemSubtitleInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Event_FeedItemImageURL",
attrName: "event_FeedItemImageURLInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._handler_CloseShareSheet$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_CloseShareSheet");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:MCLIyi71uUS2UF9s6xwp3w:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.Dqq8_XA8Bku0HJ104S2EwQ/ClientActions.MCLIyi71uUS2UF9s6xwp3w:JIWVhat50UHeo915H18J1A", "UBTConnect", "Handler_CloseShareSheet", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Cw81rGgU+EWsMVK3xEZlXQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GvmbJ5KvakuAdrxVyPjzuQ", callContext.id);
// IsShareOpen = False
model.variables.isShareOpenVar = false;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FN3+6T6SuU61dGLfsPqq9w", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:MCLIyi71uUS2UF9s6xwp3w", callContext.id);
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
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:fZDx4YQgCE2iHUg56CRd+Q:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.Dqq8_XA8Bku0HJ104S2EwQ/ClientActions.fZDx4YQgCE2iHUg56CRd+Q:QHLPchCJTwBqjR3ZuwjZVg", "UBTConnect", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PcIDVjOPbEiY3iUTcyzqRg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YB1n+TCY00CdFwZULiK6+A", callContext.id);
// IsScreenInitialized = False
model.variables.isScreenInitializedVar = false;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1YOEchwoXki95z680OeL7A", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:fZDx4YQgCE2iHUg56CRd+Q", callContext.id);
}

};
Controller.prototype._handler_ShareUpdate$Action = function (event_UpdateItemIdIn, event_ShareableUpdateItemIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_ShareUpdate");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Home.HomeFeed.Handler_ShareUpdate$vars"))());
vars.value.event_UpdateItemIdInLocal = event_UpdateItemIdIn;
vars.value.event_ShareableUpdateItemInLocal = event_ShareableUpdateItemIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:jzng5ndeSUOPvUKiEjRiOQ:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.Dqq8_XA8Bku0HJ104S2EwQ/ClientActions.jzng5ndeSUOPvUKiEjRiOQ:lzK6MSHp3pofw3kurdmFYQ", "UBTConnect", "Handler_ShareUpdate", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_xkqKdcfl0yrockZiUZ07Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Ht3KP_UNkU21u2OyLQDzHA", callContext.id);
// ShareObjectTypeId = Update
model.variables.shareObjectTypeIdVar = UBTConnectModel.staticEntities.type_ShareObject.update;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Ht3KP_UNkU21u2OyLQDzHA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ShareableObjectId = Event_ShareableUpdateItem.MemberId
model.variables.shareableObjectIdVar = vars.value.event_ShareableUpdateItemInLocal.memberIdAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Ht3KP_UNkU21u2OyLQDzHA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ShareableUpdateItem = Event_ShareableUpdateItem
model.variables.shareableUpdateItemVar = vars.value.event_ShareableUpdateItemInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Ht3KP_UNkU21u2OyLQDzHA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// IsShareOpen = True
model.variables.isShareOpenVar = true;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SEFA+Oxg_UizFOon_C62hA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:jzng5ndeSUOPvUKiEjRiOQ", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Home.HomeFeed.Handler_ShareUpdate$vars", [{
name: "Event_UpdateItemId",
attrName: "event_UpdateItemIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "Event_ShareableUpdateItem",
attrName: "event_ShareableUpdateItemInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect_Updates_CSModel.UI_UpdateItemRec();
},
complexType: Connect_Updates_CSModel.UI_UpdateItemRec
}]);

Controller.prototype.section_UpdatesOnClick_ViewAll$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._section_UpdatesOnClick_ViewAll$Action, callContext);

};
Controller.prototype.onClick_Search$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_Search$Action, callContext);

};
Controller.prototype.screenEvent_OnReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._screenEvent_OnReady$Action, callContext);

};
Controller.prototype.handler_NoUpdates$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_NoUpdates$Action, callContext);

};
Controller.prototype.handler_ShareFeed$Action = function (event_ShareIdIn, event_FeedItemTitleIn, event_FeedItemSubtitleIn, event_FeedItemImageURLIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_ShareFeed$Action, callContext, event_ShareIdIn, event_FeedItemTitleIn, event_FeedItemSubtitleIn, event_FeedItemImageURLIn);

};
Controller.prototype.handler_CloseShareSheet$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_CloseShareSheet$Action, callContext);

};
Controller.prototype.screenEvent_OnInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._screenEvent_OnInitialize$Action, callContext);

};
Controller.prototype.handler_ShareUpdate$Action = function (event_UpdateItemIdIn, event_ShareableUpdateItemIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_ShareUpdate$Action, callContext, event_UpdateItemIdIn, event_ShareableUpdateItemIn);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:9o650LFgPEKO3jEzGxssNw:/NRWebFlows.9o650LFgPEKO3jEzGxssNw:9fwzOG+yQfV_SOU4v_xngw", "UBTConnect", "Home", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Dqq8_XA8Bku0HJ104S2EwQ:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.Dqq8_XA8Bku0HJ104S2EwQ:yXyF3TSw3BMBV9_Wa8StWg", "UBTConnect", "HomeFeed", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Dqq8_XA8Bku0HJ104S2EwQ", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:9o650LFgPEKO3jEzGxssNw", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Home/HomeFeed On Initialize");
return controller.screenEvent_OnInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Home/HomeFeed On Ready");
return controller.screenEvent_OnReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return _flow_UBTConnect_HomeController.default.handleError(ex, this.callContext());
};
Controller.checkPermissions = function () {
OS.RolesInfo.checkRegistered();
};
Controller.prototype.getDefaultTimeout = function () {
return UBTConnectController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});
define("UBTConnect.Home.HomeFeed.mvc$controller.ScreenEvent_OnReady.IsRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
};
});

define("UBTConnect.Home.HomeFeed.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"IbrHHe43LEmfYh0UhTLj8g": {
getter: function (varBag, idService) {
return varBag.isRestoredFromCacheJSResult.value;
}
},
"0m1IE6lH+UC20e4BZuFO+Q": {
getter: function (varBag, idService) {
return varBag.vars.value.event_ShareIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"FhYkg5gPsUKn52BjqVsBAA": {
getter: function (varBag, idService) {
return varBag.vars.value.event_FeedItemTitleInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"_bDHZl1HWUq9pDEoMrseUg": {
getter: function (varBag, idService) {
return varBag.vars.value.event_FeedItemSubtitleInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"DPTJv1sG0ECLWOnqUPRqYA": {
getter: function (varBag, idService) {
return varBag.vars.value.event_FeedItemImageURLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"nXDWn8L7rUSndeEe5ZMHkw": {
getter: function (varBag, idService) {
return varBag.vars.value.event_UpdateItemIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"ZbGqB3aJTEyHF9udIk3GRQ": {
getter: function (varBag, idService) {
return varBag.vars.value.event_ShareableUpdateItemInLocal;
}
},
"gJQV2MDQRkuyx72H4Sf5VA": {
getter: function (varBag, idService) {
return varBag.model.variables.hasUpdatesVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"CD6Slw+vB025uaaEyptnwQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isScreenInitializedVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"14ZIA3E0fECRwpc6WC3Jfw": {
getter: function (varBag, idService) {
return varBag.model.variables.shareableUpdateItemVar;
}
},
"C+lNR6laSUGtX5B10oy5gA": {
getter: function (varBag, idService) {
return varBag.model.variables.isShareOpenVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"ITVjYibWMUOjdRAof_ie9A": {
getter: function (varBag, idService) {
return varBag.model.variables.shareableObjectIdVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"32Ix+0m2n06KZ6rxUBNr2Q": {
getter: function (varBag, idService) {
return varBag.model.variables.shareObjectTypeIdVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"xVe6Xt7wgE+XOYt2wbTQeg": {
getter: function (varBag, idService) {
return varBag.model.variables.shareableFeedItemVar;
}
},
"uGyhekOyn0K9JQ+e6CmvRQ": {
getter: function (varBag, idService) {
return varBag.model.variables.getCommunityStatisticsDataAct;
}
},
"6kq11cXJK0aHrzcBRQlQOw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Title"));
})(varBag.model, idService);
}
},
"kIyEpYByvU62Cy13s06AJg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Right"));
})(varBag.model, idService);
}
},
"CTrpSugZqEy5Ndhyu6EVPA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"TfDVAcuE4UyRITBAzDkUSg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"16pvGZpGt0OlQUoHYlWmyA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Section_Services"));
})(varBag.model, idService);
}
},
"tnCC0M7JvE+90+lZievFCA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"KKxV81ewoUKrJCKwdHIAPg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Section_CommunityPopulation"));
})(varBag.model, idService);
}
},
"60RtR872xEmvgFglnwz2hQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"XOtB+haS4UOUxqH2Lv6lMQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Section_Updates"));
})(varBag.model, idService);
}
},
"ef8TWOJYAEKCM97gtEd9PQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"U_V7qWcW0EGB+TQPAOgVMw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
},
"YFYwt2c6NkKs0B8aXihc1g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
})(varBag.model, idService);
}
},
"JoYxvk5TJU24TQ+M7FSZ+Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HideInServiceStudio"));
})(varBag.model, idService);
}
},
"aEq1zfW6NkKAv2644qk5rw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_ShareableObject"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
