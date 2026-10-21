define("UBTConnect.Home.FeedBlock_Updates.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "UBTJavaScriptUtils.controller", "NavigationHandler.controller", "Connect_Updates_CS.model", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.ConnectCorePatterns.Update_ListItem.mvc$model", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnect.model$CarouselPreloadedHouseholdsRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnect.model$TextGender2IdentifierRecordList", "UBTConnect.model$Updates_CarouselSwipeCallbackParametersLongIntegerBooleanRecordList", "UBTConnect.controller$Directory_Updates_GetCarouselPreloadedHouseholds", "UBTConnect_Utils.controller$GetHasCarouselEnabled", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTJavaScriptUtils.controller$ScreenModel_Flush", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "NavigationHandler.controller$SetPreloadObject", "UBTConnect.referencesHealth$NavigationHandler", "Connect_Updates_CS.model$UI_UpdateItemRec", "UBTConnect.referencesHealth$Connect_Updates_CS", "UBTConnect.model$UI_UpdateItemList", "UBTConnect.model$SwipeActionLongIntegerRecordList", "NavigationHandler.controller$GetPreloadObject", "NavigationHandler.controller$AssignFromObject", "UBTConnect.model$EntitiesCarousel_SwippedItemList", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect_Utils.controller$ShowComingSoonMessage", "UBTConnect_Utils.controller$GetHasExtendedShare"], function (OutSystems, UBTConnectModel, UBTConnectLibraryModel, UBTConnectController, UBTConnect_UtilsController, UBTJavaScriptUtilsController, NavigationHandlerController, Connect_Updates_CSModel, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_ConnectCorePatterns_Update_ListItem_mvcModel, UBTConnectLibrary_ConnectPatterns_IconText_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel) {
var OS = OutSystems.Internal;

var FetchUpdatesDataActRec = (function (_super) {
__extends(FetchUpdatesDataActRec, _super);
function FetchUpdatesDataActRec(defaults) {
_super.apply(this, arguments);
}
FetchUpdatesDataActRec.attributesToDeclare = function () {
return [
this.attr("UI_UpdateItemList", "uI_UpdateItemListOut", "UI_UpdateItemList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_UpdateItemList());
}, true, UBTConnectModel.UI_UpdateItemList)
].concat(_super.attributesToDeclare.call(this));
};
FetchUpdatesDataActRec.fromStructure = function (str) {
return new FetchUpdatesDataActRec(new FetchUpdatesDataActRec.RecordClass({
uI_UpdateItemListOut: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FetchUpdatesDataActRec.init();
return FetchUpdatesDataActRec;
})(OS.Model.DataSourceRecord);

var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("CarouselPreloadedHouseholds", "carouselPreloadedHouseholdsVar", "CarouselPreloadedHouseholds", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.CarouselPreloadedHouseholdsRec());
}, false, UBTConnectModel.CarouselPreloadedHouseholdsRec), 
this.attr("FetchUpdates", "fetchUpdatesDataAct", "fetchUpdatesDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FetchUpdatesDataActRec());
}, true, FetchUpdatesDataActRec)
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
Model._hasValidationWidgetsValue = ((((UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectCorePatterns_Update_ListItem_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_IconText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Home.FeedBlock_Updates");
});
define("UBTConnect.Home.FeedBlock_Updates.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTConnect_Utils.controller", "UBTJavaScriptUtils.controller", "NavigationHandler.controller", "Connect_Updates_CS.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Home.FeedBlock_Updates.mvc$model", "UBTConnect.Home.FeedBlock_Updates.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.ConnectCorePatterns.Update_ListItem.mvc$view", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnect.model$CarouselPreloadedHouseholdsRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnect.model$TextGender2IdentifierRecordList", "UBTConnect.model$Updates_CarouselSwipeCallbackParametersLongIntegerBooleanRecordList", "UBTConnect.controller$Directory_Updates_GetCarouselPreloadedHouseholds", "UBTConnect_Utils.controller$GetHasCarouselEnabled", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTJavaScriptUtils.controller$ScreenModel_Flush", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "NavigationHandler.controller$SetPreloadObject", "UBTConnect.referencesHealth$NavigationHandler", "Connect_Updates_CS.model$UI_UpdateItemRec", "UBTConnect.referencesHealth$Connect_Updates_CS", "UBTConnect.model$UI_UpdateItemList", "UBTConnect.model$SwipeActionLongIntegerRecordList", "NavigationHandler.controller$GetPreloadObject", "NavigationHandler.controller$AssignFromObject", "UBTConnect.model$EntitiesCarousel_SwippedItemList", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect_Utils.controller$ShowComingSoonMessage", "UBTConnect_Utils.controller$GetHasExtendedShare"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTConnect_UtilsController, UBTJavaScriptUtilsController, NavigationHandlerController, Connect_Updates_CSModel, React, OSView, UBTConnect_Home_FeedBlock_Updates_mvc_model, UBTConnect_Home_FeedBlock_Updates_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectCorePatterns_Update_ListItem_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view) {
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
        View.displayName = "Home.FeedBlock_Updates";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectCorePatterns_Update_ListItem_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Home_FeedBlock_Updates_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Home_FeedBlock_Updates_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
inputs: {
In_IsLoading: (!(model.variables.fetchUpdatesDataAct.isDataFetchedAttr) && !(model.variables.fetchUpdatesDataAct.hasFetchErrorAttr))
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
placeholder_LoadingSection: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut,
style: "list list-group home-page--update-list",
tag: "div",
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchUpdatesDataAct.dataFetchStatusAttr),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("N082sxKRgUCC+f9E2WFjgw.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.backgroundAttr = function () {
var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
rec.backgroundColorAttr = ((model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).isReadAttr) ? (OS.BuiltinFunctions.nullTextIdentifier()) : (UBTConnectModel.staticEntities.uBT_Color.cyanLightest));
return rec;
}();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.extraSmall;
rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
return rec;
}();
rec.marginSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
rec.borderOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.BorderOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral3;
rec.sizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
rec.radiusAttr = function () {
var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Shape.large;
return rec;
}();
return rec;
}();
return rec;
}();
}, function () {
return model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).isReadAttr;
}),
_optionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchUpdatesDataAct.dataFetchStatusAttr),
ExtendedClasses: "overflow-hidden"
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
return [React.createElement(UBTConnectLibrary_ConnectCorePatterns_Update_ListItem_mvc_view, {
inputs: {
In_Date: model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).dateAttr,
_in_DateInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchUpdatesDataAct.dataFetchStatusAttr),
IsEnabled: model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).hasAccessAttr,
_isEnabledInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchUpdatesDataAct.dataFetchStatusAttr),
ShowImage: false,
In_BirthType: model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).birthTypeAttr,
_in_BirthTypeInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchUpdatesDataAct.dataFetchStatusAttr),
In_InitialsList: model.getCachedValue(idService.getId("LK1dfOrT7UWHovQsAKMMJQ.In_InitialsList"), function () {
return function () {
var list = new UBTConnectModel.TextGender2IdentifierRecordList();
list.pushAll([function () {
var rec = new UBTConnectModel.TextGender2IdentifierRecord();
rec.genderAttr = model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).genderIdAttr;
return rec;
}()]);
return list;
}();
}, function () {
return model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).genderIdAttr;
}),
_in_InitialsListInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchUpdatesDataAct.dataFetchStatusAttr),
In_IsRead: model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).isReadAttr,
_in_IsReadInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchUpdatesDataAct.dataFetchStatusAttr),
In_ParentsNames: model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).parentsNamesAttr,
_in_ParentsNamesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchUpdatesDataAct.dataFetchStatusAttr),
HasBorderBottom: !(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).hasAccessAttr),
_hasBorderBottomInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchUpdatesDataAct.dataFetchStatusAttr),
PaddingSizeId: model.getCachedValue(idService.getId("LK1dfOrT7UWHovQsAKMMJQ.PaddingSizeId"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.bottomSizeIdAttr = ((model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).hasAccessAttr) ? (OS.BuiltinFunctions.nullTextIdentifier()) : (UBTConnectModel.staticEntities.uBT_Size.small));
return rec;
}();
}, function () {
return model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).hasAccessAttr;
}),
_paddingSizeIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchUpdatesDataAct.dataFetchStatusAttr),
In_HasShare: model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).hasShareAttr,
_in_HasShareInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchUpdatesDataAct.dataFetchStatusAttr),
IgnoreReadBackground: true,
In_Name: model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).nameAttr,
_in_NameInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchUpdatesDataAct.dataFetchStatusAttr),
In_Type_UpdateFeedItem: model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).updateItemTypeIdAttr,
_in_Type_UpdateFeedItemInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchUpdatesDataAct.dataFetchStatusAttr),
In_Location: model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).locationStringAttr,
_in_LocationInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.fetchUpdatesDataAct.dataFetchStatusAttr)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_Share$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/Update_ListItem Event_Share");
return controller.handler__Share$Action(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).updateItemIdAttr, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
event_SendGift$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/Update_ListItem Event_SendGift");
controller.event_SendGift$Action(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).updateItemIdAttr, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
event_MarkAsUnread$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/Update_ListItem Event_MarkAsUnread");
return controller.event_MarkAsUnread$Action(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).updateItemIdAttr, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
onClick$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/Update_ListItem OnClick");
return controller.event_ListItemOnClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
event_MarkAsRead$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectCorePatterns/Update_ListItem Event_MarkAsRead");
return controller.event_MarkAsRead$Action(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).updateItemIdAttr, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
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
_dependencies: []
}), $if(!(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).hasAccessAttr), false, this, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("zQTTxcrCckmMd9ysuIEIzw.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.backgroundAttr = function () {
var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral2;
return rec;
}();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
rec.marginSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
rec.borderOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.BorderOptionsRec();
rec.radiusAttr = function () {
var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Shape.large;
return rec;
}();
return rec;
}();
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
clicked$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "BasePatterns/CustomContainer Clicked");
return controller.onClick_SubscriptionUpgrade$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
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
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
style: "display-inline-block",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
inputs: {
TextOptions: model.getCachedValue(idService.getId("gpqlXRCJakaPRelhff_8DA.TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.blueDark;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.extraSmall;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
Text: "Subscription upgrade required"
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
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.blueDark,
In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.nonStandard_16,
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.lock
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
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
})))];
})
},
_dependencies: []
})];
}, function () {
return [];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.fetchUpdatesDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).updateItemIdAttr), asPrimitiveValue(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).locationStringAttr), asPrimitiveValue(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).updateItemTypeIdAttr), asPrimitiveValue(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).nameAttr), asPrimitiveValue(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).hasShareAttr), asPrimitiveValue(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).parentsNamesAttr), asPrimitiveValue(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).isReadAttr), asPrimitiveValue(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).genderIdAttr), asPrimitiveValue(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).birthTypeAttr), asPrimitiveValue(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).hasAccessAttr), asPrimitiveValue(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).dateAttr)]
})];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables.fetchUpdatesDataAct.dataFetchStatusAttr)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.fetchUpdatesDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.Home.FeedBlock_Updates.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTConnect_Utils.controller", "UBTJavaScriptUtils.controller", "NavigationHandler.controller", "Connect_Updates_CS.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Home.FeedBlock_Updates.mvc$debugger", "UBTConnect.Home.FeedBlock_Updates.mvc$controller.OnInitialize.IsViewRestoredFromCacheJS", "UBTConnect.Home.FeedBlock_Updates.mvc$controller.OnReady.CheckRestoredJS", "UBTConnect.model$CarouselPreloadedHouseholdsRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnect.model$TextGender2IdentifierRecordList", "UBTConnect.model$Updates_CarouselSwipeCallbackParametersLongIntegerBooleanRecordList", "UBTConnect.controller$Directory_Updates_GetCarouselPreloadedHouseholds", "UBTConnect_Utils.controller$GetHasCarouselEnabled", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTJavaScriptUtils.controller$ScreenModel_Flush", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "NavigationHandler.controller$SetPreloadObject", "UBTConnect.referencesHealth$NavigationHandler", "Connect_Updates_CS.model$UI_UpdateItemRec", "UBTConnect.referencesHealth$Connect_Updates_CS", "UBTConnect.model$UI_UpdateItemList", "UBTConnect.model$SwipeActionLongIntegerRecordList", "NavigationHandler.controller$GetPreloadObject", "NavigationHandler.controller$AssignFromObject", "UBTConnect.model$EntitiesCarousel_SwippedItemList", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect_Utils.controller$ShowComingSoonMessage", "UBTConnect_Utils.controller$GetHasExtendedShare"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTConnect_UtilsController, UBTJavaScriptUtilsController, NavigationHandlerController, Connect_Updates_CSModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Home_FeedBlock_Updates_mvc_Debugger, UBTConnect_Home_FeedBlock_Updates_mvc_controller_OnInitialize_IsViewRestoredFromCacheJS, UBTConnect_Home_FeedBlock_Updates_mvc_controller_OnReady_CheckRestoredJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
fetchUpdates$DataActRefresh: 0
};
this.dataFetchDependentsGraph = {
fetchUpdates$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions
Controller.prototype.action_UI_UpdateItem_MarkAsRead$ServerAction = function (updateItemIdIn, callContext) {
var controller = this.controller;
var inputs = {
UpdateItemId: OS.DataConversion.ServerDataConverter.to(updateItemIdIn, OS.DataTypes.DataTypes.LongInteger)
};
return controller.callServerAction("Action_UI_UpdateItem_MarkAsRead", "screenservices/UBTConnect/Home/FeedBlock_Updates/ServiceAPIAction_UI_UpdateItem_MarkAsRead", "8c51s_N5Y36AaVe0DnkJsg", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
});
};
Controller.prototype.action_UI_UpdateItem_MarkAsUnread$ServerAction = function (updateItemIdIn, callContext) {
var controller = this.controller;
var inputs = {
UpdateItemId: OS.DataConversion.ServerDataConverter.to(updateItemIdIn, OS.DataTypes.DataTypes.LongInteger)
};
return controller.callServerAction("Action_UI_UpdateItem_MarkAsUnread", "screenservices/UBTConnect/Home/FeedBlock_Updates/ServiceAPIAction_UI_UpdateItem_MarkAsUnread", "P1t+S8i8Gt4AdEzGwZsuxw", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
});
};

// Aggregates and Data Actions
Controller.prototype.fetchUpdates$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:hUdeWcFjdUCdOh+KbfOK0g:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.jvoKxddIPU2okOLTeUCY0w/DataActions.hUdeWcFjdUCdOh+KbfOK0g:1MhUgsKp+IWhwfK7kqqq2w", "UBTConnect", "FetchUpdates", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Home/FeedBlock_Updates/FetchUpdates");
return controller.callDataAction("DataActionFetchUpdates", "screenservices/UBTConnect/Home/FeedBlock_Updates/DataActionFetchUpdates", "hvYUSMx29O3EpVIb7wJ8Uw", function (b) {
model.variables.fetchUpdatesDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.fetchUpdatesDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.fetchUpdatesDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "Home/FeedBlock_Updates/FetchUpdates On After Fetch");
return controller._fetchUpdatesOnAfterFetch$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:hUdeWcFjdUCdOh+KbfOK0g", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["fetchUpdates$DataActRefresh"];
// Client Actions
Controller.prototype._event_ListItemOnClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Event_ListItemOnClick");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Home.FeedBlock_Updates.Event_ListItemOnClick$vars"))());
var listFilterVar = new OS.DataTypes.VariableHolder();
var directory_Updates_GetCarouselPreloadedHouseholdsVar = new OS.DataTypes.VariableHolder();
var getHasCarouselEnabledVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.listFilterVar = listFilterVar;
varBag.directory_Updates_GetCarouselPreloadedHouseholdsVar = directory_Updates_GetCarouselPreloadedHouseholdsVar;
varBag.getHasCarouselEnabledVar = getHasCarouselEnabledVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:oXJkIv0tI0OLj4rOFmhI6Q:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.jvoKxddIPU2okOLTeUCY0w/ClientActions.oXJkIv0tI0OLj4rOFmhI6Q:GB_UfSL_tZet7lZ8Nd2rBA", "UBTConnect", "Event_ListItemOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JwNhIdzTW0Wgy8zFk+AwSQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jNFWz4f6xkG9trGFPUDqvg", callContext.id) && model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).hasAccessAttr)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eVcaxPFHfkm1V8o77KCQHA", callContext.id);
// Execute Action: Action_UI_UpdateItem_MarkAsRead
model.flush();
return controller.action_UI_UpdateItem_MarkAsRead$ServerAction(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).updateItemIdAttr, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4VuOe3wMakCWkFYyefXVhA", callContext.id);
// Execute Action: ScreenModel_Flush
model.flush();
return UBTJavaScriptUtilsController.default.screenModel_Flush$Action(callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Hah5ZKCpgkWEHpRaNYyJPg", callContext.id);
// Execute Action: GetHasCarouselEnabled
getHasCarouselEnabledVar.value = UBTConnect_UtilsController.default.getHasCarouselEnabled$Action(callContext);

}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:inmKUE0L5E2sK+PMfgG6Hw", callContext.id) && getHasCarouselEnabledVar.value.hasCarouselEnabledOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+z6Gron3_0aMj8LnMzuUWQ", callContext.id);
// TargetHouseholdId = FetchUpdates.UI_UpdateItemList.Current.HouseholdId
vars.value.targetHouseholdIdVar = model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).householdIdAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Ty2kERggTkCLeGre7m_E9A", callContext.id);
// Execute Action: ListFilter
listFilterVar.value = OS.SystemActions.listFilter(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut, function (p) {
return p.hasAccessAttr;
}, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FA6kHg6FZE2fk_13k9JV7Q", callContext.id);
// Execute Action: Directory_Updates_GetCarouselPreloadedHouseholds
directory_Updates_GetCarouselPreloadedHouseholdsVar.value = UBTConnectController.default.directory_Updates_GetCarouselPreloadedHouseholds$Action(OS.DataConversion.JSConversions.typeConvertRecordList(listFilterVar.value.filteredListOut, new UBTConnectModel.Updates_CarouselSwipeCallbackParametersLongIntegerBooleanRecordList(), function (source, target) {
target.householdIdAttr = source.householdIdAttr;
target.isReadAttr = source.isReadAttr;
target.updates_CarouselSwipeCallbackParametersAttr.updateItemIdAttr = source.updateItemIdAttr;
return target;
}), callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jTb4WOmF_EqE9XZsFUgEDQ", callContext.id);
// CarouselPreloadedHouseholds.CarouselHouseholdItem = Directory_Updates_GetCarouselPreloadedHouseholds.Out_CarouselPreloadedHouseholds.CarouselHouseholdItem
model.variables.carouselPreloadedHouseholdsVar.carouselHouseholdItemAttr = directory_Updates_GetCarouselPreloadedHouseholdsVar.value.out_CarouselPreloadedHouseholdsOut.carouselHouseholdItemAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XVQJjXpVJE6gn8kViAAbFg", callContext.id);
// Execute Action: SetPreloadObject
NavigationHandlerController.default.setPreloadObject$Action(OS.BuiltinFunctions.toObject(model.variables.carouselPreloadedHouseholdsVar), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+6i6pB23Q0aCkKqn+YO6UA", callContext.id);
// Destination: /UBTConnect/HouseholdCarousel
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HouseholdCarousel", {
In_StartingHouseholdId: OS.DataConversion.ServerDataConverter.asString(vars.value.targetHouseholdIdVar, OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pAD5Do1py0iMJ2ArG_cX8Q", callContext.id);
// Destination: /UBTConnect/HouseholdDetails
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HouseholdDetails", {
HouseholdId: OS.DataConversion.ServerDataConverter.asString(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).householdIdAttr, OS.DataTypes.DataTypes.LongInteger)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

});
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ECNmFDVZnUGyhZuiy5xQqg", callContext.id);
// Execute Action: OnClick_SubscriptionUpgrade
return controller._onClick_SubscriptionUpgrade$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ccHyp0nXs0yoyWCpDMY4KQ", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:oXJkIv0tI0OLj4rOFmhI6Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:oXJkIv0tI0OLj4rOFmhI6Q", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Home.FeedBlock_Updates.Event_ListItemOnClick$vars", [{
name: "TargetHouseholdId",
attrName: "targetHouseholdIdVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Controller.prototype._event_MarkAsUnread$Action = function (updateItemIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Event_MarkAsUnread");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Home.FeedBlock_Updates.Event_MarkAsUnread$vars"))());
vars.value.updateItemIdInLocal = updateItemIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:djwjJqtT4ES4Iia5i0lgUA:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.jvoKxddIPU2okOLTeUCY0w/ClientActions.djwjJqtT4ES4Iia5i0lgUA:QyDt7Bh1ST+GICk4mM8MTQ", "UBTConnect", "Event_MarkAsUnread", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:a3TY0T+IkkS7kIp2v80kpg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hP+YwxWi7UqSCsedAfcE1Q", callContext.id);
// Execute Action: Action_UI_UpdateItem_MarkAsUnread
model.flush();
return controller.action_UI_UpdateItem_MarkAsUnread$ServerAction(vars.value.updateItemIdInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:R3rYoRdFi0iUQO3JRxjJ5A", callContext.id);
// FetchUpdates.UI_UpdateItemList.Current.IsRead = False
model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).isReadAttr = false;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DFbwf6++KkyF07W+1Yh6Lg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:djwjJqtT4ES4Iia5i0lgUA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:djwjJqtT4ES4Iia5i0lgUA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Home.FeedBlock_Updates.Event_MarkAsUnread$vars", [{
name: "UpdateItemId",
attrName: "updateItemIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Controller.prototype._event_MarkAsRead$Action = function (updateItemIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Event_MarkAsRead");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Home.FeedBlock_Updates.Event_MarkAsRead$vars"))());
vars.value.updateItemIdInLocal = updateItemIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:m810LvNL606nINOlKvLmHg:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.jvoKxddIPU2okOLTeUCY0w/ClientActions.m810LvNL606nINOlKvLmHg:H7OWeGdD4mXjYokEPuqKCg", "UBTConnect", "Event_MarkAsRead", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ydQArVTWzUmGUAlGgohpBw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:htvYLZZrQEqCJwRwF6MlBg", callContext.id);
// Execute Action: Action_UI_UpdateItem_MarkAsRead
model.flush();
return controller.action_UI_UpdateItem_MarkAsRead$ServerAction(vars.value.updateItemIdInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+W0TCRnYdkSoNUNlE1Tq0A", callContext.id);
// FetchUpdates.UI_UpdateItemList.Current.IsRead = True
model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext).isReadAttr = true;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:s6zPmB6o8E+7YniAjXMZcA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:m810LvNL606nINOlKvLmHg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:m810LvNL606nINOlKvLmHg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Home.FeedBlock_Updates.Event_MarkAsRead$vars", [{
name: "UpdateItemId",
attrName: "updateItemIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Controller.prototype._fetchUpdatesOnAfterFetch$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("FetchUpdatesOnAfterFetch");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:B7wlNabmxkGCHcLyMKTFKQ:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.jvoKxddIPU2okOLTeUCY0w/ClientActions.B7wlNabmxkGCHcLyMKTFKQ:r8a2Xzl6q+SgzoEG+3wDZw", "UBTConnect", "FetchUpdatesOnAfterFetch", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Xjre3rrhZESB9WJVDc7lgw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:k9OhcfbXFEWizYx51kOD_Q", callContext.id) && model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.isEmpty)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1o5dy6QMwU+TLkUmPS8bXg", callContext.id);
// Trigger Event: Event_NoUpdates
return controller.event_NoUpdates$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kNaDfD6QfEmp1xC8Uu5jwg", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kNaDfD6QfEmp1xC8Uu5jwg", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:B7wlNabmxkGCHcLyMKTFKQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:B7wlNabmxkGCHcLyMKTFKQ", callContext.id);
throw ex;

});
};
Controller.prototype._event_SendGift$Action = function (updateItemIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Event_SendGift");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Home.FeedBlock_Updates.Event_SendGift$vars"))());
vars.value.updateItemIdInLocal = updateItemIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:RaGgbJE0PUS1zqp+s5XMmg:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.jvoKxddIPU2okOLTeUCY0w/ClientActions.RaGgbJE0PUS1zqp+s5XMmg:YbQjS6K_zr6xb_01bKMCoQ", "UBTConnect", "Event_SendGift", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Boqf9E2WdES312t5Nq4QXg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ja1EdtyKykWdMYnDRr4wyA", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("Send gift", /*Info*/ 0);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7dgZuMCJKEy2D_zgAR3eWQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:RaGgbJE0PUS1zqp+s5XMmg", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Home.FeedBlock_Updates.Event_SendGift$vars", [{
name: "UpdateItemId",
attrName: "updateItemIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Controller.prototype._onInitialize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Home.FeedBlock_Updates.OnInitialize$vars"))());
var getPreloadObjectVar = new OS.DataTypes.VariableHolder();
var listAnyVar = new OS.DataTypes.VariableHolder();
var assignFromObjectVar = new OS.DataTypes.VariableHolder();
var isViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getPreloadObjectVar = getPreloadObjectVar;
varBag.listAnyVar = listAnyVar;
varBag.assignFromObjectVar = assignFromObjectVar;
varBag.isViewRestoredFromCacheJSResult = isViewRestoredFromCacheJSResult;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:hEiwcQBThkOSVgSxgfB_hw:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.jvoKxddIPU2okOLTeUCY0w/ClientActions.hEiwcQBThkOSVgSxgfB_hw:r8hW7OMjj2oE9aPRgEoOnw", "UBTConnect", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WnV_3+c770urk04KBLdTJQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QRGcWtqFfUOtWgmEPQnlQw", callContext.id);
isViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(UBTConnect_Home_FeedBlock_Updates_mvc_controller_OnInitialize_IsViewRestoredFromCacheJS, "IsViewRestoredFromCache", "OnInitialize", {
IsRestoredFromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnect.Home.FeedBlock_Updates.OnInitialize$isViewRestoredFromCacheJSResult"))();
jsNodeResult.isRestoredFromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsRestoredFromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
// Check if IsViewRestoredFromCache IsRestoredFromCache
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6fym9kdLg0mwlpPVW25hcQ", callContext.id) && (isViewRestoredFromCacheJSResult.value.isRestoredFromCacheOut && model.variables.fetchUpdatesDataAct.isDataFetchedAttr))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TI8WRJhtVE+vN+T2ffd8SQ", callContext.id);
// Execute Action: GetPreloadObject
getPreloadObjectVar.value = NavigationHandlerController.default.getPreloadObject$Action(callContext);

if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BAXF0Zphdk6tFA01vjvpdA", callContext.id) && ((getPreloadObjectVar.value.preloadOut) !== (OS.BuiltinFunctions.nullObject())))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:22ZS0NEO0k6+QFOsTuRLAQ", callContext.id);
// Execute Action: AssignFromObject
assignFromObjectVar.value = NavigationHandlerController.default.assignFromObject$Action(OS.BuiltinFunctions.toObject(vars.value.entitiesCarousel_SwippedItemsVar), getPreloadObjectVar.value.preloadOut, callContext);

// Foreach FetchUpdates.UI_UpdateItemList
callContext.iterationContext.registerIterationStart(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut);
try {var uI_UpdateItemListIterator = callContext.iterationContext.getIterator(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut);
var uI_UpdateItemListIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:N2hYh1ruW0C8_5VpdO27bQ", callContext.id) && (uI_UpdateItemListIndex < model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.length))) {
uI_UpdateItemListIterator.currentRowNumber = uI_UpdateItemListIndex;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6J_JlCfo+ECqiPRU36DojQ", callContext.id);
// Execute Action: ListAny
listAnyVar.value = OS.SystemActions.listAny(vars.value.entitiesCarousel_SwippedItemsVar, function (p) {
return OS.BuiltinFunctions.textToLongInteger(p.entityItemIdAttr).equals(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getItem(uI_UpdateItemListIndex.valueOf()).updateItemIdAttr);
}, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:C9D4cZBVRkeOWeHtVIoXSA", callContext.id);
// FetchUpdates.UI_UpdateItemList.Current.IsRead = FetchUpdates.UI_UpdateItemList.Current.IsRead or ListAny.Result
model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getItem(uI_UpdateItemListIndex.valueOf()).isReadAttr = (model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getItem(uI_UpdateItemListIndex.valueOf()).isReadAttr || listAnyVar.value.resultOut);
uI_UpdateItemListIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut);
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CjLKQlv_skGwMXfUbilROw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pC5dUz22bkG9ropW3_yFQA", callContext.id);
}

} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1ePrk_u5bU6OoJO7ottIPA", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:hEiwcQBThkOSVgSxgfB_hw", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Home.FeedBlock_Updates.OnInitialize$vars", [{
name: "EntitiesCarousel_SwippedItems",
attrName: "entitiesCarousel_SwippedItemsVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnectModel.EntitiesCarousel_SwippedItemList();
},
complexType: UBTConnectModel.EntitiesCarousel_SwippedItemList
}]);
Controller.registerVariableGroupType("UBTConnect.Home.FeedBlock_Updates.OnInitialize$isViewRestoredFromCacheJSResult", [{
name: "IsRestoredFromCache",
attrName: "isRestoredFromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._onClick_SubscriptionUpgrade$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_SubscriptionUpgrade");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:v0TJjVtHAEOb1Wt9MFdsrQ:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.jvoKxddIPU2okOLTeUCY0w/ClientActions.v0TJjVtHAEOb1Wt9MFdsrQ:nFmK7ZhkpcFTuPthICJddg", "UBTConnect", "OnClick_SubscriptionUpgrade", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tHdtuFytCUSlbMkuNZlVQw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MWLEirMQq0KU5iz9oOIpuA", callContext.id);
// Execute Action: App_Subscription_ShowUpgradePopUp
model.flush();
return UBTConnect_UtilsController.default.app_Subscription_ShowUpgradePopUp$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SKb1azKJ70WcKfafy62yEw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:v0TJjVtHAEOb1Wt9MFdsrQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:v0TJjVtHAEOb1Wt9MFdsrQ", callContext.id);
throw ex;

});
};
Controller.prototype._handler__Share$Action = function (event_UpdateItemIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler__Share");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Home.FeedBlock_Updates.Handler__Share$vars"))());
vars.value.event_UpdateItemIdInLocal = event_UpdateItemIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:JWQ5tpuv30aXjEqce1nARQ:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.jvoKxddIPU2okOLTeUCY0w/ClientActions.JWQ5tpuv30aXjEqce1nARQ:3+zCX2n4IqDmuuwuJP+iKw", "UBTConnect", "Handler__Share", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:B3lPI3e7VE2DCo+31tV5tg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:a2NahSMCEEyM8zUoAjU3Nw", callContext.id) && OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnect_UtilsController.default.getHasExtendedShare$Action(callContext).hasExtendedShareOut;
}, OS.DataTypes.DataTypes.Boolean, callContext.id))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IUkiq8GggEevjmefzwcCoA", callContext.id);
// Trigger Event: Event_Share
return controller.event_Share$Action(vars.value.event_UpdateItemIdInLocal, model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut.getCurrent(callContext.iterationContext), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+P2rKTPZME+o1IHcXbgDcQ", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uzbHbKCL5UuTJ8o9+idX1w", callContext.id);
// Execute Action: ShowComingSoonMessage
UBTConnect_UtilsController.default.showComingSoonMessage$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UttyT6GiM0ap2ZupxxTGAA", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:JWQ5tpuv30aXjEqce1nARQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:JWQ5tpuv30aXjEqce1nARQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Home.FeedBlock_Updates.Handler__Share$vars", [{
name: "Event_UpdateItemId",
attrName: "event_UpdateItemIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Controller.prototype._onReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Home.FeedBlock_Updates.OnReady$vars"))());
var checkRestoredJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkRestoredJSResult = checkRestoredJSResult;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:lk2VxO_KvUCn8U9qBk39VA:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.jvoKxddIPU2okOLTeUCY0w/ClientActions.lk2VxO_KvUCn8U9qBk39VA:IpTe09yRk_ikxyLaWKe4zg", "UBTConnect", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CXvQjE++nEGxKkwzSEVerA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fMDFbqqwiUaHjbozDH+E2Q", callContext.id);
checkRestoredJSResult.value = controller.safeExecuteJSNode(UBTConnect_Home_FeedBlock_Updates_mvc_controller_OnReady_CheckRestoredJS, "CheckRestored", "OnReady", {
FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
FromHistory: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnect.Home.FeedBlock_Updates.OnReady$checkRestoredJSResult"))();
jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.fromHistoryOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromHistory, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0LLH9V7amkiuIgsDMTrMKQ", callContext.id) && (checkRestoredJSResult.value.fromCacheOut || checkRestoredJSResult.value.fromHistoryOut))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2xjcDvSh5UeAf4KO7jtehA", callContext.id);
} else {
while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:emISzEizdkijVwgFkyzg8A", callContext.id) && (vars.value.currLoadingItemVar < vars.value.maxLoadingItemsVar))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uF5xU5oBg0+K0_kdlGEJLA", callContext.id);
// CurrLoadingItem = CurrLoadingItem + 1
vars.value.currLoadingItemVar = (vars.value.currLoadingItemVar + 1);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:E7Rqa7INBEKN2_HpQZX8VQ", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(model.variables.fetchUpdatesDataAct.uI_UpdateItemListOut, function () {
var rec = new Connect_Updates_CSModel.UI_UpdateItemRec();
rec.updateItemTypeIdAttr = UBTConnectModel.staticEntities.connect_UpdateTypeId.birth;
rec.nameAttr = "Loadin Name";
rec.dateAttr = OS.BuiltinFunctions.currDate();
rec.genderIdAttr = UBTConnectModel.staticEntities.gender2.mALE;
rec.locationStringAttr = "Loadinf Location";
rec.isReadAttr = true;
rec.hasAccessAttr = true;
return rec;
}(), callContext);
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HJUv6fWZ+0aJ3aAy1ULHig", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:lk2VxO_KvUCn8U9qBk39VA", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Home.FeedBlock_Updates.OnReady$vars", [{
name: "MaxLoadingItems",
attrName: "maxLoadingItemsVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 3;
}
}, {
name: "CurrLoadingItem",
attrName: "currLoadingItemVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.registerVariableGroupType("UBTConnect.Home.FeedBlock_Updates.OnReady$checkRestoredJSResult", [{
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

Controller.prototype.event_ListItemOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._event_ListItemOnClick$Action, callContext);

};
Controller.prototype.event_MarkAsUnread$Action = function (updateItemIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._event_MarkAsUnread$Action, callContext, updateItemIdIn);

};
Controller.prototype.event_MarkAsRead$Action = function (updateItemIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._event_MarkAsRead$Action, callContext, updateItemIdIn);

};
Controller.prototype.fetchUpdatesOnAfterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._fetchUpdatesOnAfterFetch$Action, callContext);

};
Controller.prototype.event_SendGift$Action = function (updateItemIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._event_SendGift$Action, callContext, updateItemIdIn);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.onClick_SubscriptionUpgrade$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_SubscriptionUpgrade$Action, callContext);

};
Controller.prototype.handler__Share$Action = function (event_UpdateItemIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler__Share$Action, callContext, event_UpdateItemIdIn);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.event_NoUpdates$Action = function () {
return Promise.resolve();
};
Controller.prototype.event_Share$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:9o650LFgPEKO3jEzGxssNw:/NRWebFlows.9o650LFgPEKO3jEzGxssNw:9fwzOG+yQfV_SOU4v_xngw", "UBTConnect", "Home", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:jvoKxddIPU2okOLTeUCY0w:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.jvoKxddIPU2okOLTeUCY0w:ZgsknhyoUflxJhUHwqZnBg", "UBTConnect", "FeedBlock_Updates", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:jvoKxddIPU2okOLTeUCY0w", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:9o650LFgPEKO3jEzGxssNw", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Home/FeedBlock_Updates On Initialize");
return controller.onInitialize$Action(callContext);

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

OutSystemsDebugger.setThreadStartName(callContext.id, "Home/FeedBlock_Updates On Ready");
return controller.onReady$Action(callContext);

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
define("UBTConnect.Home.FeedBlock_Updates.mvc$controller.OnInitialize.IsViewRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
};
});
define("UBTConnect.Home.FeedBlock_Updates.mvc$controller.OnReady.CheckRestoredJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
//$parameters.FromHistory = $public.Navigation.navigatedFromHistory();
};
});

define("UBTConnect.Home.FeedBlock_Updates.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"3nHFCvHDxkG1CZ2nqzRDNw": {
getter: function (varBag, idService) {
return varBag.vars.value.targetHouseholdIdVar;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"Ty2kERggTkCLeGre7m_E9A": {
getter: function (varBag, idService) {
return varBag.listFilterVar.value;
}
},
"FA6kHg6FZE2fk_13k9JV7Q": {
getter: function (varBag, idService) {
return varBag.directory_Updates_GetCarouselPreloadedHouseholdsVar.value;
}
},
"Hah5ZKCpgkWEHpRaNYyJPg": {
getter: function (varBag, idService) {
return varBag.getHasCarouselEnabledVar.value;
}
},
"O4yzmoi1xECAXOmW87nBUQ": {
getter: function (varBag, idService) {
return varBag.vars.value.updateItemIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"5zP_scGo6ESi4xrr9d2l0A": {
getter: function (varBag, idService) {
return varBag.vars.value.updateItemIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"4oytQCw610aRdyQgEfGnoQ": {
getter: function (varBag, idService) {
return varBag.vars.value.updateItemIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"ru_7aHzq5UO5qNZXZc_OTg": {
getter: function (varBag, idService) {
return varBag.vars.value.entitiesCarousel_SwippedItemsVar;
}
},
"TI8WRJhtVE+vN+T2ffd8SQ": {
getter: function (varBag, idService) {
return varBag.getPreloadObjectVar.value;
}
},
"6J_JlCfo+ECqiPRU36DojQ": {
getter: function (varBag, idService) {
return varBag.listAnyVar.value;
}
},
"22ZS0NEO0k6+QFOsTuRLAQ": {
getter: function (varBag, idService) {
return varBag.assignFromObjectVar.value;
}
},
"QRGcWtqFfUOtWgmEPQnlQw": {
getter: function (varBag, idService) {
return varBag.isViewRestoredFromCacheJSResult.value;
}
},
"Xb9giedTCUGPfvPZWg+F2A": {
getter: function (varBag, idService) {
return varBag.vars.value.event_UpdateItemIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"4rFLGYx9UEaCJo0nXD8jiQ": {
getter: function (varBag, idService) {
return varBag.vars.value.maxLoadingItemsVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"bNolo_Umn0C5Gxwx85wRPw": {
getter: function (varBag, idService) {
return varBag.vars.value.currLoadingItemVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"fMDFbqqwiUaHjbozDH+E2Q": {
getter: function (varBag, idService) {
return varBag.checkRestoredJSResult.value;
}
},
"6Kfzj4+Q+0O1o8nFBM1Efg": {
getter: function (varBag, idService) {
return varBag.model.variables.carouselPreloadedHouseholdsVar;
}
},
"hUdeWcFjdUCdOh+KbfOK0g": {
getter: function (varBag, idService) {
return varBag.model.variables.fetchUpdatesDataAct;
}
},
"tw8paqlkW0O4QuQ6mNQ2Yg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
})(varBag.model, idService);
}
},
"8Q5lj55+O0WvRYaag2p_Rw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"HnXnkWRg6UyNm04Hyx3Qfg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DoesntHaveAccess"));
})(varBag.model, idService);
}
},
"eUyIpFk00k2V3+lOIZppJw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"OLmCpYcLFkumVEJQvYB0Wg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
