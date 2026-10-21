define("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_MyBookmarks.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_IS.model", "Connect2_LegacyShared.controller", "UBTConnect_Utils.controller", "Connect2_MyBookmarks_MUI.controller", "NavigationHandler.controller", "Connect2_LegacyShared.model", "Connect2_LegacyShared.Layout.Layout.mvc$model", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$model", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.MyBookmarks_Card.mvc$model", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.MyBookmarks_Album.mvc$model", "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy.mvc$model", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.NoBookmarks.mvc$model", "Connect2_LegacyShared.Widgets.NetworkWarning.mvc$model", "Connect2_LegacyShared.Reusable.Spinner.mvc$model", "Connect2_MyBookmarks_IS.model$GetGroupSummariesResponseRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_MyBookmarks_IS", "Connect2_MyBookmarks_IS.model$BookmarkItemRec", "Connect2_MyBookmarks_MUI.model$BookmarkItemList", "Connect2_MyBookmarks_IS.model$PhotoDetailsRec", "Connect2_MyBookmarks_IS.model$DetailsJsonRec", "Connect2_LegacyShared.controller$IsTimeoutExceptionMessage", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_LegacyShared.controller$IsRequestFailedExceptionMessage", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "Connect2_MyBookmarks_MUI.referencesHealth$UBTConnect_Utils", "Connect2_MyBookmarks_MUI.controller$GetBookmarkById", "Connect2_MyBookmarks_MUI.controller$SendBookmarkedHiddenFeedbackMessage", "NavigationHandler.controller$SetPreloadObject", "Connect2_MyBookmarks_MUI.referencesHealth$NavigationHandler", "Connect2_LegacyShared.model$CommunityBusinessCarouselPreloadedItemRec", "Connect2_MyBookmarks_MUI.model$CommunityBusinessCarouselPreloadedItemList", "Connect2_LegacyShared.model$HouseholdCarouselPreloadedItemRec", "Connect2_MyBookmarks_MUI.model$HouseholdCarouselPreloadedItemList", "Connect2_LegacyShared.model$HouseholdCarouselPreloadingRec", "Connect2_LegacyShared.model$CommunityBusinessCarouselPreloadingRec"], function (OutSystems, Connect2_MyBookmarks_MUIModel, Connect2_MyBookmarks_ISModel, Connect2_LegacySharedController, UBTConnect_UtilsController, Connect2_MyBookmarks_MUIController, NavigationHandlerController, Connect2_LegacySharedModel, Connect2_LegacyShared_Layout_Layout_mvcModel, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel, Connect2_MyBookmarks_MUI_MyBookmarksFlow_MyBookmarks_Card_mvcModel, Connect2_MyBookmarks_MUI_MyBookmarksFlow_MyBookmarks_Album_mvcModel, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvcModel, Connect2_MyBookmarks_MUI_MyBookmarksFlow_NoBookmarks_mvcModel, Connect2_LegacyShared_Widgets_NetworkWarning_mvcModel, Connect2_LegacyShared_Reusable_Spinner_mvcModel) {
var OS = OutSystems.Internal;

var GetGroupSummariesDataActRec = (function (_super) {
__extends(GetGroupSummariesDataActRec, _super);
function GetGroupSummariesDataActRec(defaults) {
_super.apply(this, arguments);
}
GetGroupSummariesDataActRec.attributesToDeclare = function () {
return [
this.attr("Bookmarks_Contacts", "bookmarks_ContactsOut", "Bookmarks_Contacts", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_ISModel.GetGroupSummariesResponseRec());
}, true, Connect2_MyBookmarks_ISModel.GetGroupSummariesResponseRec), 
this.attr("Bookmarks_Locations", "bookmarks_LocationsOut", "Bookmarks_Locations", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_ISModel.GetGroupSummariesResponseRec());
}, true, Connect2_MyBookmarks_ISModel.GetGroupSummariesResponseRec), 
this.attr("Bookmarks_CommunityBusinesses", "bookmarks_CommunityBusinessesOut", "Bookmarks_CommunityBusinesses", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_ISModel.GetGroupSummariesResponseRec());
}, true, Connect2_MyBookmarks_ISModel.GetGroupSummariesResponseRec), 
this.attr("Bookmarks_AllContacts", "bookmarks_AllContactsOut", "Bookmarks_AllContacts", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_MUIModel.BookmarkItemList());
}, true, Connect2_MyBookmarks_MUIModel.BookmarkItemList), 
this.attr("Bookmarks_AllLocations", "bookmarks_AllLocationsOut", "Bookmarks_AllLocations", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_MUIModel.BookmarkItemList());
}, true, Connect2_MyBookmarks_MUIModel.BookmarkItemList), 
this.attr("Bookmarks_AllCommunityBusiness", "bookmarks_AllCommunityBusinessOut", "Bookmarks_AllCommunityBusiness", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_MUIModel.BookmarkItemList());
}, true, Connect2_MyBookmarks_MUIModel.BookmarkItemList)
].concat(_super.attributesToDeclare.call(this));
};
GetGroupSummariesDataActRec.init();
return GetGroupSummariesDataActRec;
})(OS.Model.DataSourceRecord);

var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("HasBookmarks", "hasBookmarksVar", "HasBookmarks", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsFetchingBookmarks", "isFetchingBookmarksVar", "IsFetchingBookmarks", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("CountSize", "countSizeVar", "CountSize", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 4;
}, false), 
this.attr("Contacts", "contactsVar", "Contacts", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_ISModel.GetGroupSummariesResponseRec());
}, false, Connect2_MyBookmarks_ISModel.GetGroupSummariesResponseRec), 
this.attr("Locations", "locationsVar", "Locations", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_ISModel.GetGroupSummariesResponseRec());
}, false, Connect2_MyBookmarks_ISModel.GetGroupSummariesResponseRec), 
this.attr("CommunityBusinesses", "communityBusinessesVar", "CommunityBusinesses", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_ISModel.GetGroupSummariesResponseRec());
}, false, Connect2_MyBookmarks_ISModel.GetGroupSummariesResponseRec), 
this.attr("AllContacts", "allContactsVar", "AllContacts", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_MUIModel.BookmarkItemList());
}, false, Connect2_MyBookmarks_MUIModel.BookmarkItemList), 
this.attr("AllLocations", "allLocationsVar", "AllLocations", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_MUIModel.BookmarkItemList());
}, false, Connect2_MyBookmarks_MUIModel.BookmarkItemList), 
this.attr("AllCommunityBusiness", "allCommunityBusinessVar", "AllCommunityBusiness", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_MUIModel.BookmarkItemList());
}, false, Connect2_MyBookmarks_MUIModel.BookmarkItemList), 
this.attr("IsNavigationFromHistory", "isNavigationFromHistoryVar", "IsNavigationFromHistory", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("HasNetworkError", "hasNetworkErrorVar", "HasNetworkError", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("GetGroupSummaries", "getGroupSummariesDataAct", "getGroupSummariesDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetGroupSummariesDataActRec());
}, true, GetGroupSummariesDataActRec)
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
Model._hasValidationWidgetsValue = (((((((Connect2_LegacyShared_Layout_Layout_mvcModel.hasValidationWidgets || Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel.hasValidationWidgets) || Connect2_MyBookmarks_MUI_MyBookmarksFlow_MyBookmarks_Card_mvcModel.hasValidationWidgets) || Connect2_MyBookmarks_MUI_MyBookmarksFlow_MyBookmarks_Album_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvcModel.hasValidationWidgets) || Connect2_MyBookmarks_MUI_MyBookmarksFlow_NoBookmarks_mvcModel.hasValidationWidgets) || Connect2_LegacyShared_Widgets_NetworkWarning_mvcModel.hasValidationWidgets) || Connect2_LegacyShared_Reusable_Spinner_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "MyBookmarksFlow.ScreenBlock_MyBookmarks");
});
define("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_MyBookmarks.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.controller", "Connect2_MyBookmarks_IS.model", "Connect2_LegacyShared.controller", "UBTConnect_Utils.controller", "NavigationHandler.controller", "Connect2_LegacyShared.model", "react", "OutSystems/ReactView/Main", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_MyBookmarks.mvc$model", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_MyBookmarks.mvc$controller", "Connect2_LegacyShared.Layout.Layout.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$view", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.MyBookmarks_Card.mvc$view", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.MyBookmarks_Album.mvc$view", "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction_Legacy.mvc$view", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.NoBookmarks.mvc$view", "Connect2_LegacyShared.Widgets.NetworkWarning.mvc$view", "Connect2_LegacyShared.Reusable.Spinner.mvc$view", "Connect2_MyBookmarks_IS.model$GetGroupSummariesResponseRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_MyBookmarks_IS", "Connect2_MyBookmarks_IS.model$BookmarkItemRec", "Connect2_MyBookmarks_MUI.model$BookmarkItemList", "Connect2_MyBookmarks_IS.model$PhotoDetailsRec", "Connect2_MyBookmarks_IS.model$DetailsJsonRec", "Connect2_LegacyShared.controller$IsTimeoutExceptionMessage", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_LegacyShared.controller$IsRequestFailedExceptionMessage", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "Connect2_MyBookmarks_MUI.referencesHealth$UBTConnect_Utils", "Connect2_MyBookmarks_MUI.controller$GetBookmarkById", "Connect2_MyBookmarks_MUI.controller$SendBookmarkedHiddenFeedbackMessage", "NavigationHandler.controller$SetPreloadObject", "Connect2_MyBookmarks_MUI.referencesHealth$NavigationHandler", "Connect2_LegacyShared.model$CommunityBusinessCarouselPreloadedItemRec", "Connect2_MyBookmarks_MUI.model$CommunityBusinessCarouselPreloadedItemList", "Connect2_LegacyShared.model$HouseholdCarouselPreloadedItemRec", "Connect2_MyBookmarks_MUI.model$HouseholdCarouselPreloadedItemList", "Connect2_LegacyShared.model$HouseholdCarouselPreloadingRec", "Connect2_LegacyShared.model$CommunityBusinessCarouselPreloadingRec"], function (OutSystems, Connect2_MyBookmarks_MUIModel, Connect2_MyBookmarks_MUIController, Connect2_MyBookmarks_ISModel, Connect2_LegacySharedController, UBTConnect_UtilsController, NavigationHandlerController, Connect2_LegacySharedModel, React, OSView, Connect2_MyBookmarks_MUI_MyBookmarksFlow_ScreenBlock_MyBookmarks_mvc_model, Connect2_MyBookmarks_MUI_MyBookmarksFlow_ScreenBlock_MyBookmarks_mvc_controller, Connect2_LegacyShared_Layout_Layout_mvc_view, OSWidgets, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_MyBookmarks_MUI_MyBookmarksFlow_MyBookmarks_Card_mvc_view, Connect2_MyBookmarks_MUI_MyBookmarksFlow_MyBookmarks_Album_mvc_view, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view, Connect2_MyBookmarks_MUI_MyBookmarksFlow_NoBookmarks_mvc_view, Connect2_LegacyShared_Widgets_NetworkWarning_mvc_view, Connect2_LegacyShared_Reusable_Spinner_mvc_view) {
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
        View.displayName = "MyBookmarksFlow.ScreenBlock_MyBookmarks";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Layout_Layout_mvc_view, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_MyBookmarks_MUI_MyBookmarksFlow_MyBookmarks_Card_mvc_view, Connect2_MyBookmarks_MUI_MyBookmarksFlow_MyBookmarks_Album_mvc_view, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view, Connect2_MyBookmarks_MUI_MyBookmarksFlow_NoBookmarks_mvc_view, Connect2_LegacyShared_Widgets_NetworkWarning_mvc_view, Connect2_LegacyShared_Reusable_Spinner_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_MyBookmarks_MUI_MyBookmarksFlow_ScreenBlock_MyBookmarks_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_MyBookmarks_MUI_MyBookmarksFlow_ScreenBlock_MyBookmarks_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_LegacyShared_Layout_Layout_mvc_view, {
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
menu: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.menu,
_idProps: {
service: idService,
name: "Menu"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
headerLeft: new PlaceholderContent(function () {
return [React.createElement(Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, {
inputs: {
MenuAction: Connect2_MyBookmarks_MUIModel.staticEntities.menuAction.menu
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
_dependencies: []
})];
}),
title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, "My Bookmarks")];
}),
headerRight: PlaceholderContent.Empty,
headerContent: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [$if((!(model.variables.isFetchingBookmarksVar) || model.variables.isNavigationFromHistoryVar), false, this, function () {
return [$if(!(model.variables.hasNetworkErrorVar), false, this, function () {
return [$if(model.variables.hasBookmarksVar, false, this, function () {
return [$if(!(model.variables.contactsVar.bookmarksAttr.isEmpty), false, this, function () {
return [React.createElement(Connect2_MyBookmarks_MUI_MyBookmarksFlow_MyBookmarks_Card_mvc_view, {
inputs: {
ShowViewAll: model.variables.contactsVar.totalCountAttr.gte(OS.BuiltinFunctions.integerToLongInteger(1)),
ObjectGroup: Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_Group.contacts
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
navigateTo_ViewAll$Action: function (bookmarkGroupIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyBookmarksFlow/MyBookmarks_Card NavigateTo_ViewAll");
return controller.handleNavigateToViewAll$Action(bookmarkGroupIn, controller.callContext(eventHandlerContext));
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
name: "MyBookmarks_Contacts",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_BookmarksContent: new PlaceholderContent(function () {
return [React.createElement(Connect2_MyBookmarks_MUI_MyBookmarksFlow_MyBookmarks_Album_mvc_view, {
inputs: {
BookmarkItemList: model.variables.contactsVar.bookmarksAttr,
BookmarkGroup: Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_Group.contacts
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onHandle_BookmarkedItem$Action: function (event_BookmarkIdIn, event_ItemPositionIn, event_ObjectTypeIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyBookmarksFlow/MyBookmarks_Album OnHandle_BookmarkedItem");
return controller.navigateTo_BookmarkedItem$Action(event_BookmarkIdIn, event_ItemPositionIn, event_ObjectTypeIn, controller.callContext(eventHandlerContext));
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
name: "MyBookmarksAlbum_Contacts",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.contactsVar.bookmarksAttr)]
})];
}, function () {
return [];
}), $if(!(model.variables.locationsVar.bookmarksAttr.isEmpty), false, this, function () {
return [React.createElement(Connect2_MyBookmarks_MUI_MyBookmarksFlow_MyBookmarks_Card_mvc_view, {
inputs: {
ShowViewAll: model.variables.locationsVar.totalCountAttr.gte(OS.BuiltinFunctions.integerToLongInteger(1)),
ObjectGroup: Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_Group.locations
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
navigateTo_ViewAll$Action: function (bookmarkGroupIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyBookmarksFlow/MyBookmarks_Card NavigateTo_ViewAll");
return controller.handleNavigateToViewAll$Action(bookmarkGroupIn, controller.callContext(eventHandlerContext));
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
name: "MyBookmarks_Locations",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_BookmarksContent: new PlaceholderContent(function () {
return [React.createElement(Connect2_MyBookmarks_MUI_MyBookmarksFlow_MyBookmarks_Album_mvc_view, {
inputs: {
BookmarkItemList: model.variables.locationsVar.bookmarksAttr,
BookmarkGroup: Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_Group.locations
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onHandle_BookmarkedItem$Action: function (event_BookmarkIdIn, event_ItemPositionIn, event_ObjectTypeIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyBookmarksFlow/MyBookmarks_Album OnHandle_BookmarkedItem");
return controller.navigateTo_BookmarkedItem$Action(event_BookmarkIdIn, event_ItemPositionIn, event_ObjectTypeIn, controller.callContext(eventHandlerContext));
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
name: "MyBookmarksAlbum_Locations",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.locationsVar.bookmarksAttr)]
})];
}, function () {
return [];
}), $if(!(model.variables.communityBusinessesVar.bookmarksAttr.isEmpty), false, this, function () {
return [React.createElement(Connect2_MyBookmarks_MUI_MyBookmarksFlow_MyBookmarks_Card_mvc_view, {
inputs: {
ShowViewAll: model.variables.communityBusinessesVar.totalCountAttr.gte(OS.BuiltinFunctions.integerToLongInteger(1)),
ObjectGroup: Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_Group.entities
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
navigateTo_ViewAll$Action: function (bookmarkGroupIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyBookmarksFlow/MyBookmarks_Card NavigateTo_ViewAll");
return controller.handleNavigateToViewAll$Action(bookmarkGroupIn, controller.callContext(eventHandlerContext));
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
name: "MyBookmarks_Entities",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_BookmarksContent: new PlaceholderContent(function () {
return [React.createElement(Connect2_MyBookmarks_MUI_MyBookmarksFlow_MyBookmarks_Album_mvc_view, {
inputs: {
BookmarkItemList: model.variables.communityBusinessesVar.bookmarksAttr,
BookmarkGroup: Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_Group.entities
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onHandle_BookmarkedItem$Action: function (event_BookmarkIdIn, event_ItemPositionIn, event_ObjectTypeIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyBookmarksFlow/MyBookmarks_Album OnHandle_BookmarkedItem");
return controller.navigateTo_BookmarkedItem$Action(event_BookmarkIdIn, event_ItemPositionIn, event_ObjectTypeIn, controller.callContext(eventHandlerContext));
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
name: "MyBookmarksAlbum_Entities",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.communityBusinessesVar.bookmarksAttr)]
})];
}, function () {
return [];
}), React.createElement(UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_AccessRestrictedAction_Legacy_mvc_view, {
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
name: "FreeSubscriptionAlert",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [React.createElement(Connect2_MyBookmarks_MUI_MyBookmarksFlow_NoBookmarks_mvc_view, {
inputs: {
IsToDisplay: !(model.variables.hasBookmarksVar)
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
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
titlePlaceholder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "no-bookmark-top-message",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, "You\'ll find your", React.createElement("br"), " bookmarks here")];
}),
textPlaceholder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "no-bookmark-bottom-message",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, "You can get back to a page that\'s", React.createElement("br"), "important to you by adding a bookmark ")];
})
},
_dependencies: []
})];
})];
}, function () {
return [React.createElement(Connect2_LegacyShared_Widgets_NetworkWarning_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
tryAgain$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Widgets/NetworkWarning TryAgain");
return controller.refreshBookmarkData$Action(controller.callContext(eventHandlerContext));
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
uuid: "14",
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
}, function () {
return [React.createElement(Connect2_LegacyShared_Reusable_Spinner_mvc_view, {
inputs: {
ShowLoader: model.variables.isFetchingBookmarksVar
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
})];
}),
bottomBar: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.bottomBar,
_idProps: {
service: idService,
name: "BottomBar"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
commonUI_Elements: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.commonUI_Elements,
_idProps: {
service: idService,
name: "CommonUI_Elements"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
}
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_MyBookmarks.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.controller", "Connect2_MyBookmarks_IS.model", "Connect2_LegacyShared.controller", "UBTConnect_Utils.controller", "NavigationHandler.controller", "Connect2_LegacyShared.model", "Connect2_MyBookmarks_MUI.languageResources", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_MyBookmarks.mvc$debugger", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_MyBookmarks.mvc$controller.OnInitialize.WasCurrentViewRestoredFromCacheJS", "Connect2_MyBookmarks_IS.model$GetGroupSummariesResponseRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_MyBookmarks_IS", "Connect2_MyBookmarks_IS.model$BookmarkItemRec", "Connect2_MyBookmarks_MUI.model$BookmarkItemList", "Connect2_MyBookmarks_IS.model$PhotoDetailsRec", "Connect2_MyBookmarks_IS.model$DetailsJsonRec", "Connect2_LegacyShared.controller$IsTimeoutExceptionMessage", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_LegacyShared.controller$IsRequestFailedExceptionMessage", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "Connect2_MyBookmarks_MUI.referencesHealth$UBTConnect_Utils", "Connect2_MyBookmarks_MUI.controller$GetBookmarkById", "Connect2_MyBookmarks_MUI.controller$SendBookmarkedHiddenFeedbackMessage", "NavigationHandler.controller$SetPreloadObject", "Connect2_MyBookmarks_MUI.referencesHealth$NavigationHandler", "Connect2_LegacyShared.model$CommunityBusinessCarouselPreloadedItemRec", "Connect2_MyBookmarks_MUI.model$CommunityBusinessCarouselPreloadedItemList", "Connect2_LegacyShared.model$HouseholdCarouselPreloadedItemRec", "Connect2_MyBookmarks_MUI.model$HouseholdCarouselPreloadedItemList", "Connect2_LegacyShared.model$HouseholdCarouselPreloadingRec", "Connect2_LegacyShared.model$CommunityBusinessCarouselPreloadingRec"], function (OutSystems, Connect2_MyBookmarks_MUIModel, Connect2_MyBookmarks_MUIController, Connect2_MyBookmarks_ISModel, Connect2_LegacySharedController, UBTConnect_UtilsController, NavigationHandlerController, Connect2_LegacySharedModel, Connect2_MyBookmarks_MUILanguageResources, Connect2_MyBookmarks_MUI_MyBookmarksFlow_ScreenBlock_MyBookmarks_mvc_Debugger, Connect2_MyBookmarks_MUI_MyBookmarksFlow_ScreenBlock_MyBookmarks_mvc_controller_OnInitialize_WasCurrentViewRestoredFromCacheJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
getGroupSummaries$DataActRefresh: -1
};
this.dataFetchDependentsGraph = {
getGroupSummaries$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions
Controller.prototype.getGroupSummaries$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:0_X2IQfSW0GaJtUO6JNSxA:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.cOQRCQyDy0+G0njHq0NeOA/DataActions.0_X2IQfSW0GaJtUO6JNSxA:JzU3SRvfjRaKJTCpcqPauQ", "Connect2_MyBookmarks_MUI", "GetGroupSummaries", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "MyBookmarksFlow/ScreenBlock_MyBookmarks/GetGroupSummaries");
return controller.callDataAction("DataActionGetGroupSummaries", "screenservices/Connect2_MyBookmarks_MUI/MyBookmarksFlow/ScreenBlock_MyBookmarks/DataActionGetGroupSummaries", "Cu_ZBFwLW0k4_kQ1TpMKVA", function (b) {
model.variables.getGroupSummariesDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getGroupSummariesDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getGroupSummariesDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "MyBookmarksFlow/ScreenBlock_MyBookmarks/GetGroupSummaries On After Fetch");
controller._onAfterFetch_GetGroupSummaries$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:0_X2IQfSW0GaJtUO6JNSxA", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getGroupSummaries$DataActRefresh"];
// Client Actions
Controller.prototype._onAfterFetch_GetGroupSummaries$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnAfterFetch_GetGroupSummaries");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:YR7sEsSpnkG_ap3sJpmekA:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.cOQRCQyDy0+G0njHq0NeOA/ClientActions.YR7sEsSpnkG_ap3sJpmekA:MJZ67N+ogy_+khe6ouG++Q", "Connect2_MyBookmarks_MUI", "OnAfterFetch_GetGroupSummaries", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:0j0H9QPQ0U6CAhvnvjkZIQ", callContext.id);
// Set Local Data
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:55A8VHfVP0Sphwfit2Ji9g", callContext.id);
// Contacts = GetGroupSummaries.Bookmarks_Contacts
model.variables.contactsVar = model.variables.getGroupSummariesDataAct.bookmarks_ContactsOut;
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:55A8VHfVP0Sphwfit2Ji9g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Locations = GetGroupSummaries.Bookmarks_Locations
model.variables.locationsVar = model.variables.getGroupSummariesDataAct.bookmarks_LocationsOut;
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:55A8VHfVP0Sphwfit2Ji9g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// CommunityBusinesses = GetGroupSummaries.Bookmarks_CommunityBusinesses
model.variables.communityBusinessesVar = model.variables.getGroupSummariesDataAct.bookmarks_CommunityBusinessesOut;
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:55A8VHfVP0Sphwfit2Ji9g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// AllContacts = GetGroupSummaries.Bookmarks_AllContacts
model.variables.allContactsVar = model.variables.getGroupSummariesDataAct.bookmarks_AllContactsOut;
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:55A8VHfVP0Sphwfit2Ji9g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// AllLocations = GetGroupSummaries.Bookmarks_AllLocations
model.variables.allLocationsVar = model.variables.getGroupSummariesDataAct.bookmarks_AllLocationsOut;
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:55A8VHfVP0Sphwfit2Ji9g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// AllCommunityBusiness = GetGroupSummaries.Bookmarks_AllCommunityBusiness
model.variables.allCommunityBusinessVar = model.variables.getGroupSummariesDataAct.bookmarks_AllCommunityBusinessOut;
// Set Vars
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:66mvxxNtm0y+x6m3xbODeA", callContext.id);
// IsFetchingBookmarks = False
model.variables.isFetchingBookmarksVar = false;
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:66mvxxNtm0y+x6m3xbODeA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// HasBookmarks = notContacts.Bookmarks.Empty or notLocations.Bookmarks.Empty or notCommunityBusinesses.Bookmarks.Empty
model.variables.hasBookmarksVar = ((!(model.variables.contactsVar.bookmarksAttr.isEmpty) || !(model.variables.locationsVar.bookmarksAttr.isEmpty)) || !(model.variables.communityBusinessesVar.bookmarksAttr.isEmpty));
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:66mvxxNtm0y+x6m3xbODeA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// HasNetworkError = False
model.variables.hasNetworkErrorVar = false;
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:b6aLO_oV3UWTDsZ9dbuLcg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:YR7sEsSpnkG_ap3sJpmekA", callContext.id);
}

};
Controller.prototype._clearLocalLists$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ClearLocalLists");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:MxFXKGaFZ0eUHz22siLzIA:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.cOQRCQyDy0+G0njHq0NeOA/ClientActions.MxFXKGaFZ0eUHz22siLzIA:1cNsGZjBcjQf8wYlcC4XDA", "Connect2_MyBookmarks_MUI", "ClearLocalLists", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:Z7xYTL7DOkeYAv+HizOMqQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:+CV68I+wuUmHSrjq6eH91g", callContext.id);
// Execute Action: ListClear_Contacts
OS.SystemActions.listClear(model.variables.contactsVar.bookmarksAttr, callContext);
// Clear_Contacts
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:NVCfmg9zbkqVkniqPnRlfw", callContext.id);
// Contacts.Group = ""
model.variables.contactsVar.groupAttr = "";
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:NVCfmg9zbkqVkniqPnRlfw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Contacts.TotalCount = 0
model.variables.contactsVar.totalCountAttr = OS.BuiltinFunctions.integerToLongInteger(0);
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:3GgLZaIUIk+1zpH22I+dZg", callContext.id);
// Execute Action: ListClear_Locations
OS.SystemActions.listClear(model.variables.locationsVar.bookmarksAttr, callContext);
// Clear_Locations
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:Ul2FkNv+wk2Z9ex9VuPr8w", callContext.id);
// Locations.Group = ""
model.variables.locationsVar.groupAttr = "";
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:Ul2FkNv+wk2Z9ex9VuPr8w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Locations.TotalCount = 0
model.variables.locationsVar.totalCountAttr = OS.BuiltinFunctions.integerToLongInteger(0);
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:SYAibtKbiEi8kes2E8W2Lg", callContext.id);
// Execute Action: ListClear_Entities
OS.SystemActions.listClear(model.variables.communityBusinessesVar.bookmarksAttr, callContext);
// Clear_Entities
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:M8DCFzsICUGjq0xB8bUIRQ", callContext.id);
// CommunityBusinesses.Group = ""
model.variables.communityBusinessesVar.groupAttr = "";
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:M8DCFzsICUGjq0xB8bUIRQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// CommunityBusinesses.TotalCount = 0
model.variables.communityBusinessesVar.totalCountAttr = OS.BuiltinFunctions.integerToLongInteger(0);
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:12dmiMFQ5UqlXtbezeJ_mw", callContext.id);
// Execute Action: ListClear_AllContacts
OS.SystemActions.listClear(model.variables.allContactsVar, callContext);
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:Sm94eiKBEE20D4lFdcD+kg", callContext.id);
// Execute Action: ListClear_AllLocations
OS.SystemActions.listClear(model.variables.allLocationsVar, callContext);
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:Gg4ResuzGka735A6VORXIg", callContext.id);
// Execute Action: ListClear_AllCommunityBusiness
OS.SystemActions.listClear(model.variables.allCommunityBusinessVar, callContext);
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:P0tSEV2DiU+Gs8qOZTyGAQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:MxFXKGaFZ0eUHz22siLzIA", callContext.id);
}

};
Controller.prototype._refreshBookmarkData$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("RefreshBookmarkData");
callContext = controller.callContext(callContext);
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var notRegisteredVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
varBag.callContext = callContext;
varBag.communicationExceptionVar = communicationExceptionVar;
varBag.allExceptionsVar = allExceptionsVar;
varBag.notRegisteredVar = notRegisteredVar;
OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:gj7xKMF_eEqybomMB35WVw:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.cOQRCQyDy0+G0njHq0NeOA/ClientActions.gj7xKMF_eEqybomMB35WVw:IIet+oZ9Ls72v6xQBuR1JQ", "Connect2_MyBookmarks_MUI", "RefreshBookmarkData", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:ddCI8oBHF029hlpGzRtAwQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:TnWdcYR0PEWgNSne1elIMg", callContext.id);
// IsFetchingBookmarks = True
model.variables.isFetchingBookmarksVar = true;
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:FVaY10VKd02_hpyXWvYZQQ", callContext.id);
// Refresh Query: GetGroupSummaries
var result = controller.getGroupSummaries$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:cvjOrOWQu0C72EamY0Lm6A", callContext.id);
});
}).catch(function (ex) {
OS.Logger.trace("ScreenBlock_MyBookmarks.RefreshBookmarkData", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(communicationExceptionVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:VnkyK38lvECiu1U8a50FMg", callContext.id);
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:dVU5p77iaUWKoq8+UcEDbQ", callContext.id);
// IsFetchingBookmarks = False
model.variables.isFetchingBookmarksVar = false;
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:bnx7kHQZGkmJ2oTXsF8Xww", callContext.id);
// HasNetworkError = True
model.variables.hasNetworkErrorVar = true;
if((OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:B_TMwZ1Y10CQG930Rlnfug", callContext.id) && OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_LegacySharedController.default.isRequestFailedExceptionMessage$Action(communicationExceptionVar.value.exceptionMessageAttr, callContext).isRequestFailedExceptionMessageOut;
}, OS.DataTypes.DataTypes.Boolean, callContext.id))) {
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:saWnqZzOCEG1zTHJPqBkNg", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("No internet connection. Please check your network setting and try again…", /*Error*/ 3);
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:sD6wx2cDjUyfDOeLNexA2g", callContext.id);
return OS.Flow.returnAsync();

} else {
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:TeoeE86fKEOnSLZqISwjcA", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage(communicationExceptionVar.value.exceptionMessageAttr, /*Error*/ 3);
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:C8jxO+5u20+mZuB21EeKXA", callContext.id);
return OS.Flow.returnAsync();

}

});
}

// Handle Error: NotRegistered
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.NotRegisteredException)) {
OS.Logger.error(null, ex);
notRegisteredVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(notRegisteredVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:SB68Tv_KbUKuIa5zewihsQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:QRu3t5zRGESXehHwZTp9_A", callContext.id);
// Raise Error: NotRegistered
throw new OS.Exceptions.Exceptions.NotRegisteredException("NotRegistered", notRegisteredVar.value.exceptionMessageAttr);
});
}

// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:qVHiTN16akWYXnw048+ZXA", callContext.id);
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:nl9TBcpEoESjOiR1zYEaXw", callContext.id);
// IsFetchingBookmarks = False
model.variables.isFetchingBookmarksVar = false;
if((OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:LctRA4ilPk2lHK3+ILBIOw", callContext.id) && ((OS.BuiltinFunctions.index(allExceptionsVar.value.exceptionMessageAttr, "distributed transaction", 0, false, false)) !== (-1)))) {
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:60vavFSUdUupjeHHZrNspA", callContext.id);
// Raise Error: UserException1
throw new OS.Exceptions.Exceptions.UserException("Connect2_MyBookmarks_MUI.UserException1", allExceptionsVar.value.exceptionMessageAttr);
} else {
if((OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:vYbGrnsZX0KvoreDHuKZfg", callContext.id) && (OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_LegacySharedController.default.isTimeoutExceptionMessage$Action(allExceptionsVar.value.exceptionMessageAttr, callContext).isTimeoutExceptionMessageOut;
}, OS.DataTypes.DataTypes.Boolean, callContext.id) || OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_LegacySharedController.default.isRequestFailedExceptionMessage$Action(allExceptionsVar.value.exceptionMessageAttr, callContext).isRequestFailedExceptionMessageOut;
}, OS.DataTypes.DataTypes.Boolean, callContext.id)))) {
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:0KHyGeqsck2tVt+e0rcjuw", callContext.id);
// HasNetworkError = True
model.variables.hasNetworkErrorVar = true;
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:Dnmu_dbQB0SJCSdjf6GLXg", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage(allExceptionsVar.value.exceptionMessageAttr, /*Error*/ 3);
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:MpcbsaiIXEqGDOsjV7uZQw", callContext.id);
return OS.Flow.returnAsync();

} else {
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:yHL9s4V6yUKn+5paiK74VA", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage(allExceptionsVar.value.exceptionMessageAttr, /*Error*/ 3);
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:TzIdyaNLXUGf49hlViR03w", callContext.id);
return OS.Flow.returnAsync();

}

}

});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:gj7xKMF_eEqybomMB35WVw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:gj7xKMF_eEqybomMB35WVw", callContext.id);
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
varBag.callContext = callContext;
OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:SlmkT6Ky5UGtVOdgatozXg:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.cOQRCQyDy0+G0njHq0NeOA/ClientActions.SlmkT6Ky5UGtVOdgatozXg:4W79cgSjyrI3Mt_Km8I9Eg", "Connect2_MyBookmarks_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:UNEoXGULaEqsAWr9Kn6IXg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
if((OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:RTYAzmz93kO31RX7ca0Sow", callContext.id) && !(model.variables.isNavigationFromHistoryVar))) {
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:PjoRhgZW90edREhsgc8YEA", callContext.id);
// Execute Action: ClearLocalLists
controller._clearLocalLists$Action(callContext);
}

OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:avf7QslMQk2DFRNIled9Ag", callContext.id);
// Execute Action: RefreshBookmarkData
return controller._refreshBookmarkData$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:LGR6JXZVXkWvs5Z2VSxTrg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:SlmkT6Ky5UGtVOdgatozXg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:SlmkT6Ky5UGtVOdgatozXg", callContext.id);
throw ex;

});
};
Controller.prototype._navigateTo_BookmarkedItem$Action = function (bookmarkIdIn, currentItemPositionIn, objectTypeIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("NavigateTo_BookmarkedItem");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_MyBookmarks.NavigateTo_BookmarkedItem$vars"))());
vars.value.bookmarkIdInLocal = bookmarkIdIn;
vars.value.currentItemPositionInLocal = currentItemPositionIn;
vars.value.objectTypeInLocal = objectTypeIn;
var listIndexOfVar = new OS.DataTypes.VariableHolder();
var getBookmarkByIdVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.listIndexOfVar = listIndexOfVar;
varBag.getBookmarkByIdVar = getBookmarkByIdVar;
OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:a7jdgzfg60e_wLBhS2xSfQ:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.cOQRCQyDy0+G0njHq0NeOA/ClientActions.a7jdgzfg60e_wLBhS2xSfQ:SFqW3GFoc5nuEklsq3_FnA", "Connect2_MyBookmarks_MUI", "NavigateTo_BookmarkedItem", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:d10BUXJ8A0iO9crXTiYB6A", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:dn7Qhfp8ukm5uDXMiur1sg", callContext.id);
// Execute Action: GetBookmarkById
model.flush();
return Connect2_MyBookmarks_MUIController.default.getBookmarkById$Action(vars.value.bookmarkIdInLocal, callContext).then(function (value) {
getBookmarkByIdVar.value = value;
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:DWdJgSKhsUu23tU_yaYfSQ", callContext.id) && (getBookmarkByIdVar.value.out_BookmarkItemOut.objectTypeAttr === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_ObjectType.contact))) {
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:KGAIIObHmk6jIznEeq8Fdg", callContext.id);
// Execute Action: ListIndexOf
listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.allContactsVar, function (p) {
return (p.objectIdAttr === getBookmarkByIdVar.value.out_BookmarkItemOut.objectIdAttr);
}, callContext);

OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:hywCnfiouUW3lCpIcSO7Zw", callContext.id);
// CurrentItemPosition = ListIndexOf.Position
vars.value.currentItemPositionInLocal = listIndexOfVar.value.positionOut;
}

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:SChFUigWxUyhErf5RRaejg", callContext.id) && getBookmarkByIdVar.value.isBookmarkFoundOut)) {
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:VtddlmjdpUOUkOx2+9ujkw", callContext.id);
// SelectedObjectId = TextToLongInteger
vars.value.selectedObjectIdVar = OS.BuiltinFunctions.textToLongInteger(getBookmarkByIdVar.value.out_BookmarkItemOut.objectIdAttr);
// Is Record Not Available?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:UT3c2_oNXkisbb3W1ubrsw", callContext.id) && getBookmarkByIdVar.value.out_BookmarkItemOut.recordNotAvailableAttr)) {
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:fmHgn_tCBEWX9+0WasgTrw", callContext.id);
// Execute Action: SendBookmarkedHiddenFeedbackMessage
Connect2_MyBookmarks_MUIController.default.sendBookmarkedHiddenFeedbackMessage$Action(OS.BuiltinFunctions.textToIdentifier(getBookmarkByIdVar.value.out_BookmarkItemOut.objectTypeAttr), callContext);
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:AltU0k7xl06eONcCm0dM4g", callContext.id);
} else {
// Is Record Enabled?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:bA5vptDZFU2GZXMbnu3XVg", callContext.id) && !(getBookmarkByIdVar.value.out_BookmarkItemOut.recordDisabledAttr))) {
// ObjectType
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:KHwmmffXdk2XAx9MVTBvIg", callContext.id) && (getBookmarkByIdVar.value.out_BookmarkItemOut.objectTypeAttr === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_ObjectType.contact))) {
// Set Preload Info
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:2z8Ml1tynEaHdzqjpueevA", callContext.id);
// HouseholdCarouselPreloading.IsPreloaded = True
vars.value.householdCarouselPreloadingVar.isPreloadedAttr = true;
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:2z8Ml1tynEaHdzqjpueevA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// HouseholdCarouselPreloading.PreloadedCarouselItems = AllContacts
vars.value.householdCarouselPreloadingVar.preloadedCarouselItemsAttr = OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.allContactsVar, new Connect2_MyBookmarks_MUIModel.HouseholdCarouselPreloadedItemList(), function (source, target) {
target.idAttr = OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.textToInteger(source.objectIdAttr));
target.nameAttr = source.titleAttr;
target.isDeceasedAttr = source.detailsJsonAttr.isDeceasedAttr;
target.imageAttr = source.imageAttr;
return target;
});
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:JvtC7iRXQEGSJp4hdja4OA", callContext.id);
// Execute Action: SetPreloadObject_Households
NavigationHandlerController.default.setPreloadObject$Action(OS.BuiltinFunctions.toObject(vars.value.householdCarouselPreloadingVar), callContext);
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:erEYWDi8kEGKtN64HFa9tA", callContext.id);
// Trigger Event: NavigateTo_Households
return controller.navigateTo_Households$Action(vars.value.selectedObjectIdVar, model.variables.contactsVar.totalCountAttr, vars.value.currentItemPositionInLocal, "", OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.allContactsVar, new OS.DataTypes.LongIntegerList(), function (source, target) {
target = OS.BuiltinFunctions.textToLongInteger(source.objectIdAttr);
return target;
}), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:5nfc966sL0iWc9N94j4URQ", callContext.id);
});
} else {
return OS.Flow.executeSequence(function () {
if((getBookmarkByIdVar.value.out_BookmarkItemOut.objectTypeAttr === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_ObjectType.locality)) {
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:65Cly4GH7UKUYM2P+v_c0A", callContext.id);
// Trigger Event: NavigateTo_Locality
return controller.navigateTo_Locality$Action(vars.value.selectedObjectIdVar, getBookmarkByIdVar.value.out_BookmarkItemOut.titleAttr, (((getBookmarkByIdVar.value.out_BookmarkItemOut.objectTypeAttr === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_ObjectType.oneSchoolGlobal)) ? (3) : ((((getBookmarkByIdVar.value.out_BookmarkItemOut.objectTypeAttr === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_ObjectType.campusCo)) ? (4) : (0)))), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:be5H8VWR606cxJ+6O1MkGg", callContext.id);
});
} else {
return OS.Flow.executeSequence(function () {
if((getBookmarkByIdVar.value.out_BookmarkItemOut.objectTypeAttr === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_ObjectType.subdivision)) {
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:sTQ6iPAZEUKJLykdjkOj0w", callContext.id);
// Trigger Event: NavigateTo_Subdivision
return controller.navigateTo_Subdivision$Action(vars.value.selectedObjectIdVar, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:7qJLKXFtRUeX+Liw9MwJrw", callContext.id);
});
} else {
return OS.Flow.executeSequence(function () {
if(((getBookmarkByIdVar.value.out_BookmarkItemOut.objectTypeAttr === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_ObjectType.campusCo) || (getBookmarkByIdVar.value.out_BookmarkItemOut.objectTypeAttr === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_ObjectType.oneSchoolGlobal))) {
// Set Preload Info
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:Bv0ra2+TeUOp0fXqgTBMvw", callContext.id);
// CommunityBusinessCarouselPreloading.IsPreloaded = True
vars.value.communityBusinessCarouselPreloadingVar.isPreloadedAttr = true;
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:Bv0ra2+TeUOp0fXqgTBMvw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// CommunityBusinessCarouselPreloading.PreloadedCarouselItems = AllCommunityBusiness
vars.value.communityBusinessCarouselPreloadingVar.preloadedCarouselItemsAttr = OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.allCommunityBusinessVar, new Connect2_MyBookmarks_MUIModel.CommunityBusinessCarouselPreloadedItemList(), function (source, target) {
target.idAttr = OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.textToInteger(source.objectIdAttr));
target.nameAttr = source.titleAttr;
target.signedURLAttr = source.imageAttr;
target.communityBusinessTypeIdAttr = (((source.objectTypeAttr === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_ObjectType.campusCo)) ? (Connect2_MyBookmarks_MUIModel.staticEntities.communityBusinessType2.campusCo) : ((((source.objectTypeAttr === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_ObjectType.oneSchoolGlobal)) ? (Connect2_MyBookmarks_MUIModel.staticEntities.communityBusinessType2.oneSchoolGlobal) : (OS.BuiltinFunctions.nullTextIdentifier()))));
return target;
});
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:t354_zlZPECCPVo49YH4pQ", callContext.id);
// Execute Action: SetPreloadObject_Entities
NavigationHandlerController.default.setPreloadObject$Action(OS.BuiltinFunctions.toObject(vars.value.communityBusinessCarouselPreloadingVar), callContext);
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:Hkj0wDztwkCNV2e9W0nc2A", callContext.id);
// Trigger Event: NavigateTo_CommunityBusinessCarousel_Campus
return controller.navigateTo_CommunityBusinessCarousel$Action(vars.value.selectedObjectIdVar, vars.value.objectTypeInLocal, model.variables.communityBusinessesVar.totalCountAttr, vars.value.currentItemPositionInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:IYAnPR3g1kmCwigXaGKO+g", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:q6ZwiQ28RkicYsMOu+lxYg", callContext.id);
}

});
}

});
}

});
}

});
} else {
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:WUXzfDKiSEKfOlcF4uc45Q", callContext.id);
// Execute Action: App_Subscription_ShowUpgradePopUp
model.flush();
return UBTConnect_UtilsController.default.app_Subscription_ShowUpgradePopUp$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:dE4T7bZNSEmYz0nOt+_7ow", callContext.id);
});
}

});
}

});
} else {
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:jBoQIZg47UqvKFRHGYZpbA", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("That bookmark isn’t available", /*Error*/ 3);
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:kJgNeMhMJ0GszbdlDHv1Ew", callContext.id);
// Refresh Query: GetGroupSummaries
var result = controller.getGroupSummaries$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:eX7cxs4_eEqD2SzFnkGUuQ", callContext.id);
});
}

});
});
}).then(function (res) {
OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:a7jdgzfg60e_wLBhS2xSfQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:a7jdgzfg60e_wLBhS2xSfQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_MyBookmarks.NavigateTo_BookmarkedItem$vars", [{
name: "BookmarkId",
attrName: "bookmarkIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "CurrentItemPosition",
attrName: "currentItemPositionInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "ObjectType",
attrName: "objectTypeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SelectedObjectId",
attrName: "selectedObjectIdVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "HouseholdCarouselPreloading",
attrName: "householdCarouselPreloadingVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_LegacySharedModel.HouseholdCarouselPreloadingRec();
},
complexType: Connect2_LegacySharedModel.HouseholdCarouselPreloadingRec
}, {
name: "CommunityBusinessCarouselPreloading",
attrName: "communityBusinessCarouselPreloadingVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_LegacySharedModel.CommunityBusinessCarouselPreloadingRec();
},
complexType: Connect2_LegacySharedModel.CommunityBusinessCarouselPreloadingRec
}]);
Controller.prototype._handleNavigateToViewAll$Action = function (bookmarkGroupIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("HandleNavigateToViewAll");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_MyBookmarks.HandleNavigateToViewAll$vars"))());
vars.value.bookmarkGroupInLocal = bookmarkGroupIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:JGSa2Aeek02Yh7pKbh5cVw:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.cOQRCQyDy0+G0njHq0NeOA/ClientActions.JGSa2Aeek02Yh7pKbh5cVw:MiCQ_fEVLA+Z_FV_Mv3M7g", "Connect2_MyBookmarks_MUI", "HandleNavigateToViewAll", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:ez4gQnKYeUKu7SH5Of1x0g", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:xj67NQDGvUmX+Que4aU9xQ", callContext.id);
// Trigger Event: NavigateTo_BookmarkGroup
return controller.navigateTo_BookmarkGroup$Action(vars.value.bookmarkGroupInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:+BZ6nGvg+EOVDp5wNioA1Q", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:JGSa2Aeek02Yh7pKbh5cVw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:JGSa2Aeek02Yh7pKbh5cVw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_MyBookmarks.HandleNavigateToViewAll$vars", [{
name: "BookmarkGroup",
attrName: "bookmarkGroupInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
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
var wasCurrentViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.wasCurrentViewRestoredFromCacheJSResult = wasCurrentViewRestoredFromCacheJSResult;
try {OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:Wcty5CHpXUq61qiyOuke+g:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.cOQRCQyDy0+G0njHq0NeOA/ClientActions.Wcty5CHpXUq61qiyOuke+g:6toj5tOs8C_h8bZXtvVWLQ", "Connect2_MyBookmarks_MUI", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:yLqhnY8Juk6e9ILWAy6u7Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:NrVc8eDsRkaBx6cVspkX_Q", callContext.id);
wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_MyBookmarks_MUI_MyBookmarksFlow_ScreenBlock_MyBookmarks_mvc_controller_OnInitialize_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnInitialize", {
FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_MyBookmarks.OnInitialize$wasCurrentViewRestoredFromCacheJSResult"))();
jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:n3+dA9twEkSAMJTthRRI7g", callContext.id);
// IsNavigationFromHistory = WasCurrentViewRestoredFromCache.FromCache
model.variables.isNavigationFromHistoryVar = wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut;
OutSystemsDebugger.handleBreakpoint("UunlNQ2jyEq6yy9zIw6bHA:pnInsbUf_0C4sArKQQowHw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:Wcty5CHpXUq61qiyOuke+g", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_MyBookmarks.OnInitialize$wasCurrentViewRestoredFromCacheJSResult", [{
name: "FromCache",
attrName: "fromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);

Controller.prototype.onAfterFetch_GetGroupSummaries$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onAfterFetch_GetGroupSummaries$Action, callContext);

};
Controller.prototype.clearLocalLists$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._clearLocalLists$Action, callContext);

};
Controller.prototype.refreshBookmarkData$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._refreshBookmarkData$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.navigateTo_BookmarkedItem$Action = function (bookmarkIdIn, currentItemPositionIn, objectTypeIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._navigateTo_BookmarkedItem$Action, callContext, bookmarkIdIn, currentItemPositionIn, objectTypeIn);

};
Controller.prototype.handleNavigateToViewAll$Action = function (bookmarkGroupIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handleNavigateToViewAll$Action, callContext, bookmarkGroupIn);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.navigateTo_Subdivision$Action = function () {
return Promise.resolve();
};
Controller.prototype.navigateTo_Locality$Action = function () {
return Promise.resolve();
};
Controller.prototype.navigateTo_BookmarkGroup$Action = function () {
return Promise.resolve();
};
Controller.prototype.navigateTo_Households$Action = function () {
return Promise.resolve();
};
Controller.prototype.navigateTo_CommunityBusinessCarousel$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:CBvOGFy8j0+xPUeAWREtQw:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw:9WxoUPdIIKPcyGMtXvfZqg", "Connect2_MyBookmarks_MUI", "MyBookmarksFlow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:cOQRCQyDy0+G0njHq0NeOA:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.cOQRCQyDy0+G0njHq0NeOA:mdEasg5tOrvDULBJfJG+mA", "Connect2_MyBookmarks_MUI", "ScreenBlock_MyBookmarks", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:cOQRCQyDy0+G0njHq0NeOA", callContext.id);
OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:CBvOGFy8j0+xPUeAWREtQw", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "MyBookmarksFlow/ScreenBlock_MyBookmarks On Initialize");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "MyBookmarksFlow/ScreenBlock_MyBookmarks On Ready");
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
return Connect2_MyBookmarks_MUIController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, Connect2_MyBookmarks_MUILanguageResources);
});
define("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_MyBookmarks.mvc$controller.OnInitialize.WasCurrentViewRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
};
});

define("Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_MyBookmarks.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"VnkyK38lvECiu1U8a50FMg": {
getter: function (varBag, idService) {
return varBag.communicationExceptionVar.value;
}
},
"qVHiTN16akWYXnw048+ZXA": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"SB68Tv_KbUKuIa5zewihsQ": {
getter: function (varBag, idService) {
return varBag.notRegisteredVar.value;
}
},
"BF6w1Q9_p0iUa0ehu48QEg": {
getter: function (varBag, idService) {
return varBag.vars.value.selectedObjectIdVar;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"0xWPdCykmEakl7Sjcwy44Q": {
getter: function (varBag, idService) {
return varBag.vars.value.householdCarouselPreloadingVar;
}
},
"ZqHM1ZiroEqRe6ybOGlAfw": {
getter: function (varBag, idService) {
return varBag.vars.value.communityBusinessCarouselPreloadingVar;
}
},
"0fxupzfaVkWFn6RWuFoflA": {
getter: function (varBag, idService) {
return varBag.vars.value.bookmarkIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"7Lw9RsN9_UWBcD8m8D0wPA": {
getter: function (varBag, idService) {
return varBag.vars.value.currentItemPositionInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"Zy6IwjXn2UWO_omwBw_N+w": {
getter: function (varBag, idService) {
return varBag.vars.value.objectTypeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"KGAIIObHmk6jIznEeq8Fdg": {
getter: function (varBag, idService) {
return varBag.listIndexOfVar.value;
}
},
"dn7Qhfp8ukm5uDXMiur1sg": {
getter: function (varBag, idService) {
return varBag.getBookmarkByIdVar.value;
}
},
"KVdVWxSD6kOupYZOIKdR9w": {
getter: function (varBag, idService) {
return varBag.vars.value.bookmarkGroupInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"NrVc8eDsRkaBx6cVspkX_Q": {
getter: function (varBag, idService) {
return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
}
},
"qa5qBolEsEWBlSUfAHr_Kw": {
getter: function (varBag, idService) {
return varBag.model.variables.hasBookmarksVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"_sA8ZKGe0EuZaBZ6w+vCew": {
getter: function (varBag, idService) {
return varBag.model.variables.isFetchingBookmarksVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"SUNFhmcKo0+zExa2tukyxw": {
getter: function (varBag, idService) {
return varBag.model.variables.countSizeVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"UvjSbT8KMUWbcGk0Hf+69g": {
getter: function (varBag, idService) {
return varBag.model.variables.contactsVar;
}
},
"MxbVbLRS2E2LaC7eHgTsHg": {
getter: function (varBag, idService) {
return varBag.model.variables.locationsVar;
}
},
"cNHFXZnUx02joIUJfGJgEg": {
getter: function (varBag, idService) {
return varBag.model.variables.communityBusinessesVar;
}
},
"9QXSmOodCE6lbiL502hd9g": {
getter: function (varBag, idService) {
return varBag.model.variables.allContactsVar;
}
},
"glGpj3YSAUCOXxl012wQbA": {
getter: function (varBag, idService) {
return varBag.model.variables.allLocationsVar;
}
},
"oX7_VAKpJECeI7U+nU+4MQ": {
getter: function (varBag, idService) {
return varBag.model.variables.allCommunityBusinessVar;
}
},
"2T8Hu8yAeEq7aF1cmkXYug": {
getter: function (varBag, idService) {
return varBag.model.variables.isNavigationFromHistoryVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"DPh2epDVLUa9nQ+AO+edcA": {
getter: function (varBag, idService) {
return varBag.model.variables.hasNetworkErrorVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"0_X2IQfSW0GaJtUO6JNSxA": {
getter: function (varBag, idService) {
return varBag.model.variables.getGroupSummariesDataAct;
}
},
"6kpKOJ6UkUiNa9RgdhPErQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"I4o0IAeiP0GB+AHwWrw83w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"TmdSWyByC0+dnUaJ8v2bsg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderLeft"));
})(varBag.model, idService);
}
},
"HAJ8Z7VGvU6y+YSDE7IYKQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"s0vIu0zOzUWzroSTuhD5UA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderRight"));
})(varBag.model, idService);
}
},
"JX9cAAd9ukGi12PP2g_G4w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"iOQ0q4RKpk+yhOWx7pBFeg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"DxPwEwFC00KwtX5XY8Dd9w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("notIsFetchingBookmarks"));
})(varBag.model, idService);
}
},
"L_vCssl0I0KFRGUWOh2GWw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_NoNetworkError"));
})(varBag.model, idService);
}
},
"28IBq5tY5EWSaJ+p8q6GNA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("IsHasBookmarks"));
})(varBag.model, idService);
}
},
"RzC7XaUIZEiFDnaaRWZ7hA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasContacts"));
})(varBag.model, idService);
}
},
"uAy1jnTaiE6zwg49zMZpkA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MyBookmarks_Contacts"));
})(varBag.model, idService);
}
},
"DUIi0sDnBke_dGUbUxh_Aw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_BookmarksContent"));
})(varBag.model, idService);
}
},
"TKQunfDtQEihb3ZVjPafZw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MyBookmarksAlbum_Contacts"));
})(varBag.model, idService);
}
},
"J9pZbO8XlE+vYn05U0zzKA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasLocations"));
})(varBag.model, idService);
}
},
"4kFWdsIP80CuOIR4YOnjZw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MyBookmarks_Locations"));
})(varBag.model, idService);
}
},
"00TxWFhyt0S+v_tqenyCoA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_BookmarksContent"));
})(varBag.model, idService);
}
},
"au2LW_BJU0uNwteVjU7jbQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MyBookmarksAlbum_Locations"));
})(varBag.model, idService);
}
},
"qXOI1odrsUKFbGx5tpcNIg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasEntities"));
})(varBag.model, idService);
}
},
"tRwdtIoUaUyQfQ6eJxqUAA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MyBookmarks_Entities"));
})(varBag.model, idService);
}
},
"7p6BlLxVN0SZnhKdM1ciEg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_BookmarksContent"));
})(varBag.model, idService);
}
},
"HQdb3TnMkUeNMl6nmH_dFA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MyBookmarksAlbum_Entities"));
})(varBag.model, idService);
}
},
"+Eab9NABrE2vU_kEafFk+w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("FreeSubscriptionAlert"));
})(varBag.model, idService);
}
},
"hV_bTZoBQkKNfX_IxNK1Cg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TitlePlaceholder"));
})(varBag.model, idService);
}
},
"s1Cubsc200uBqFStupgsIw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TextPlaceholder"));
})(varBag.model, idService);
}
},
"XFQAuUU4GEqStpHwZWOyBg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomBar"));
})(varBag.model, idService);
}
},
"EekwRMKzx0OMz71QDW8wlA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomBar"));
})(varBag.model, idService);
}
},
"co7ADq6XuUapWZW1gEyEog": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
},
"AhUqrUoLcEGw+xVlMjz0sA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
