define("Connect2_MyBookmarks_MUI.MyBookmarksFlow.MyBookmarks_Album.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_IS.model", "OutSystemsUI_2_23.Adaptive.DEPRECATED_GalleryV2.mvc$model", "Connect2_MyBookmarks_IS.model$BookmarkItemRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_MyBookmarks_IS", "Connect2_MyBookmarks_MUI.model$BookmarkItemList"], function (OutSystems, Connect2_MyBookmarks_MUIModel, Connect2_MyBookmarks_ISModel, OutSystemsUI_2_23_Adaptive_DEPRECATED_GalleryV2_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("BookmarkItemList", "bookmarkItemListIn", "BookmarkItemList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_MyBookmarks_MUIModel.BookmarkItemList());
}, false, Connect2_MyBookmarks_MUIModel.BookmarkItemList), 
this.attr("_bookmarkItemListInDataFetchStatus", "_bookmarkItemListInDataFetchStatus", "_bookmarkItemListInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("BookmarkGroup", "bookmarkGroupIn", "BookmarkGroup", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_bookmarkGroupInDataFetchStatus", "_bookmarkGroupInDataFetchStatus", "_bookmarkGroupInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = OutSystemsUI_2_23_Adaptive_DEPRECATED_GalleryV2_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("BookmarkItemList" in inputs) {
this.variables.bookmarkItemListIn = inputs.BookmarkItemList;
if("_bookmarkItemListInDataFetchStatus" in inputs) {
this.variables._bookmarkItemListInDataFetchStatus = inputs._bookmarkItemListInDataFetchStatus;
}

}

if("BookmarkGroup" in inputs) {
this.variables.bookmarkGroupIn = inputs.BookmarkGroup;
if("_bookmarkGroupInDataFetchStatus" in inputs) {
this.variables._bookmarkGroupInDataFetchStatus = inputs._bookmarkGroupInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "MyBookmarksFlow.MyBookmarks_Album");
});
define("Connect2_MyBookmarks_MUI.MyBookmarksFlow.MyBookmarks_Album.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.controller", "Connect2_MyBookmarks_IS.model", "react", "OutSystems/ReactView/Main", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.MyBookmarks_Album.mvc$model", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.MyBookmarks_Album.mvc$controller", "OutSystemsUI_2_23.Adaptive.DEPRECATED_GalleryV2.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_MyBookmarks_IS.model$BookmarkItemRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_MyBookmarks_IS", "Connect2_MyBookmarks_MUI.model$BookmarkItemList"], function (OutSystems, Connect2_MyBookmarks_MUIModel, Connect2_MyBookmarks_MUIController, Connect2_MyBookmarks_ISModel, React, OSView, Connect2_MyBookmarks_MUI_MyBookmarksFlow_MyBookmarks_Album_mvc_model, Connect2_MyBookmarks_MUI_MyBookmarksFlow_MyBookmarks_Album_mvc_controller, OutSystemsUI_2_23_Adaptive_DEPRECATED_GalleryV2_mvc_view, OSWidgets) {
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
        View.displayName = "MyBookmarksFlow.MyBookmarks_Album";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [OutSystemsUI_2_23_Adaptive_DEPRECATED_GalleryV2_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_MyBookmarks_MUI_MyBookmarksFlow_MyBookmarks_Album_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_MyBookmarks_MUI_MyBookmarksFlow_MyBookmarks_Album_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(false, false, this, function () {
return [];
}, function () {
return [React.createElement(OutSystemsUI_2_23_Adaptive_DEPRECATED_GalleryV2_mvc_view, {
inputs: {
GutterSize: Connect2_MyBookmarks_MUIModel.staticEntities.space.small,
ItemInPhone: model.getCachedValue(idService.getId("DEPRECATED_GalleryV2_BookmarkedImages.ItemInPhone"), function () {
return (((((model.variables.bookmarkItemListIn.length <= 3) && (model.variables.bookmarkItemListIn.length > 0))) ? (model.variables.bookmarkItemListIn.length) : (2))).toString();
}, function () {
return model.variables.bookmarkItemListIn.length;
}),
_itemInPhoneInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._bookmarkItemListInDataFetchStatus),
ItemsInTablet: model.getCachedValue(idService.getId("DEPRECATED_GalleryV2_BookmarkedImages.ItemsInTablet"), function () {
return ((((model.variables.bookmarkItemListIn.length <= 3) && (model.variables.bookmarkItemListIn.length > 0))) ? (model.variables.bookmarkItemListIn.length) : (2));
}, function () {
return model.variables.bookmarkItemListIn.length;
}),
_itemsInTabletInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._bookmarkItemListInDataFetchStatus),
ItemsInDesktop: model.getCachedValue(idService.getId("DEPRECATED_GalleryV2_BookmarkedImages.ItemsInDesktop"), function () {
return ((((model.variables.bookmarkItemListIn.length <= 3) && (model.variables.bookmarkItemListIn.length > 0))) ? (model.variables.bookmarkItemListIn.length) : (2));
}, function () {
return model.variables.bookmarkItemListIn.length;
}),
_itemsInDesktopInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._bookmarkItemListInDataFetchStatus)
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
name: "DEPRECATED_GalleryV2_BookmarkedImages",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": "True"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.bookmarkItemListIn,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
name: "List_BookmarkedImages"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._bookmarkItemListInDataFetchStatus),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "MyBookmarksFlow/MyBookmarks_Album/Container onclick");
controller.onHandle_BookmarkedItem$Action(model.variables.bookmarkItemListIn.getCurrent(callContext.iterationContext).idAttr, model.variables.bookmarkItemListIn.getCurrentRowNumber(callContext.iterationContext), model.variables.bookmarkItemListIn.getCurrent(callContext.iterationContext).objectTypeAttr, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
style: "position-relative",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.bookmarkGroupIn), asPrimitiveValue(model.variables._bookmarkGroupInDataFetchStatus), asPrimitiveValue(model.variables._bookmarkItemListInDataFetchStatus), asPrimitiveValue(model.variables.bookmarkItemListIn.getCurrent(callContext.iterationContext).titleAttr), asPrimitiveValue(model.variables.bookmarkItemListIn.getCurrent(callContext.iterationContext).objectTypeAttr), asPrimitiveValue(model.variables.bookmarkItemListIn.getCurrent(callContext.iterationContext).detailsJsonAttr.isDeceasedAttr), asPrimitiveValue(model.variables.bookmarkItemListIn.getCurrent(callContext.iterationContext).groupAttr), asPrimitiveValue(model.variables.bookmarkItemListIn.getCurrent(callContext.iterationContext).imageAttr)]
}, React.createElement(OSWidgets.Image, {
extendedProperties: {
"data-error-placeholder-src": model.getCachedValue(idService.getId("zflV2wXbH0i3kn86CsHSvA.data-error-placeholder-src"), function () {
return (((model.variables.bookmarkItemListIn.getCurrent(callContext.iterationContext).groupAttr === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_Group.contacts)) ? (((model.variables.bookmarkItemListIn.getCurrent(callContext.iterationContext).detailsJsonAttr.isDeceasedAttr) ? (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.PlaceholderImage_Household.png")) : (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.User_rectangle.png")))) : ((((model.variables.bookmarkItemListIn.getCurrent(callContext.iterationContext).groupAttr === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_Group.locations)) ? (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.no_division_rectangle.png")) : ((((model.variables.bookmarkItemListIn.getCurrent(callContext.iterationContext).groupAttr === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_Group.entities)) ? ((((model.variables.bookmarkItemListIn.getCurrent(callContext.iterationContext).objectTypeAttr === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_ObjectType.oneSchoolGlobal)) ? (((((model.variables.bookmarkItemListIn.getCurrent(callContext.iterationContext).titleAttr) !== (""))) ? (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.OneSchool_PhotoComingSoon.png")) : (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.OneSchool_PhotoUnavailable.png")))) : ((((model.variables.bookmarkItemListIn.getCurrent(callContext.iterationContext).objectTypeAttr === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_ObjectType.campusCo)) ? (((((model.variables.bookmarkItemListIn.getCurrent(callContext.iterationContext).titleAttr) !== (""))) ? (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.CampusCo_PhotoComingSoon.png")) : (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.CampusCo_PhotoUnavailable.png")))) : (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.no_division_rectangle.png")))))) : (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.no_division_rectangle.png")))))));
}, function () {
return model.variables.bookmarkItemListIn.getCurrent(callContext.iterationContext).groupAttr;
}, function () {
return model.variables.bookmarkItemListIn.getCurrent(callContext.iterationContext).detailsJsonAttr.isDeceasedAttr;
}, function () {
return model.variables.bookmarkItemListIn.getCurrent(callContext.iterationContext).objectTypeAttr;
}, function () {
return model.variables.bookmarkItemListIn.getCurrent(callContext.iterationContext).titleAttr;
})
},
gridProperties: {
marginLeft: "Adaptive"
},
style: model.getCachedValue(idService.getId("zflV2wXbH0i3kn86CsHSvA.Style"), function () {
return ("bookmark-card-image" + (((model.variables.bookmarkGroupIn === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_Group.contacts)) ? (" bookmark-card-image-household") : ("")));
}, function () {
return model.variables.bookmarkGroupIn;
}),
type: /*External*/ 1,
url: model.getCachedValue(idService.getId("zflV2wXbH0i3kn86CsHSvA.Url"), function () {
return ((((model.variables.bookmarkItemListIn.getCurrent(callContext.iterationContext).imageAttr) !== (""))) ? (model.variables.bookmarkItemListIn.getCurrent(callContext.iterationContext).imageAttr) : ((((model.variables.bookmarkItemListIn.getCurrent(callContext.iterationContext).groupAttr === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_Group.contacts)) ? (((model.variables.bookmarkItemListIn.getCurrent(callContext.iterationContext).detailsJsonAttr.isDeceasedAttr) ? (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.PlaceholderImage_Household.png")) : (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.User_rectangle.png")))) : ((((model.variables.bookmarkItemListIn.getCurrent(callContext.iterationContext).groupAttr === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_Group.locations)) ? (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.no_division_rectangle.png")) : ((((model.variables.bookmarkItemListIn.getCurrent(callContext.iterationContext).groupAttr === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_Group.entities)) ? ((((model.variables.bookmarkItemListIn.getCurrent(callContext.iterationContext).objectTypeAttr === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_ObjectType.oneSchoolGlobal)) ? (((((model.variables.bookmarkItemListIn.getCurrent(callContext.iterationContext).titleAttr) !== (""))) ? (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.OneSchool_PhotoComingSoon.png")) : (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.OneSchool_PhotoUnavailable.png")))) : ((((model.variables.bookmarkItemListIn.getCurrent(callContext.iterationContext).objectTypeAttr === Connect2_MyBookmarks_MUIModel.staticEntities.myBookmarks_ObjectType.campusCo)) ? (((((model.variables.bookmarkItemListIn.getCurrent(callContext.iterationContext).titleAttr) !== (""))) ? (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.CampusCo_PhotoComingSoon.png")) : (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.CampusCo_PhotoUnavailable.png")))) : (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.no_division_rectangle.png")))))) : (OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.no_division_rectangle.png")))))))));
}, function () {
return model.variables.bookmarkItemListIn.getCurrent(callContext.iterationContext).imageAttr;
}, function () {
return model.variables.bookmarkItemListIn.getCurrent(callContext.iterationContext).groupAttr;
}, function () {
return model.variables.bookmarkItemListIn.getCurrent(callContext.iterationContext).detailsJsonAttr.isDeceasedAttr;
}, function () {
return model.variables.bookmarkItemListIn.getCurrent(callContext.iterationContext).objectTypeAttr;
}, function () {
return model.variables.bookmarkItemListIn.getCurrent(callContext.iterationContext).titleAttr;
}),
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._bookmarkGroupInDataFetchStatus),
url_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._bookmarkItemListInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "bookmark-card-image-title",
visible: true,
_idProps: {
service: idService,
name: "BookmarkAlbumTitle_Cont"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("BookmarkAlbumTitle.Value"), function () {
return ((((model.variables.bookmarkItemListIn.getCurrent(callContext.iterationContext).titleAttr) !== (""))) ? (model.variables.bookmarkItemListIn.getCurrent(callContext.iterationContext).titleAttr) : ("Information not available"));
}, function () {
return model.variables.bookmarkItemListIn.getCurrent(callContext.iterationContext).titleAttr;
}),
_idProps: {
service: idService,
name: "BookmarkAlbumTitle"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._bookmarkItemListInDataFetchStatus)
})))];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables.bookmarkGroupIn), asPrimitiveValue(model.variables._bookmarkGroupInDataFetchStatus), asPrimitiveValue(model.variables._bookmarkItemListInDataFetchStatus)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.bookmarkGroupIn), asPrimitiveValue(model.variables._bookmarkGroupInDataFetchStatus), asPrimitiveValue(model.variables._bookmarkItemListInDataFetchStatus), asPrimitiveValue(model.variables.bookmarkItemListIn)]
})];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_MyBookmarks_MUI.MyBookmarksFlow.MyBookmarks_Album.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.controller", "Connect2_MyBookmarks_IS.model", "Connect2_MyBookmarks_MUI.languageResources", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.MyBookmarks_Album.mvc$debugger", "Connect2_MyBookmarks_IS.model$BookmarkItemRec", "Connect2_MyBookmarks_MUI.referencesHealth", "Connect2_MyBookmarks_MUI.referencesHealth$Connect2_MyBookmarks_IS", "Connect2_MyBookmarks_MUI.model$BookmarkItemList"], function (OutSystems, Connect2_MyBookmarks_MUIModel, Connect2_MyBookmarks_MUIController, Connect2_MyBookmarks_ISModel, Connect2_MyBookmarks_MUILanguageResources, Connect2_MyBookmarks_MUI_MyBookmarksFlow_MyBookmarks_Album_mvc_Debugger) {
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

Controller.prototype.onHandle_BookmarkedItem$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:CBvOGFy8j0+xPUeAWREtQw:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw:9WxoUPdIIKPcyGMtXvfZqg", "Connect2_MyBookmarks_MUI", "MyBookmarksFlow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("UunlNQ2jyEq6yy9zIw6bHA:HkZ7IsBalUGVO76rYh5a+Q:/NRWebFlows.CBvOGFy8j0+xPUeAWREtQw/NodesShownInESpaceTree.HkZ7IsBalUGVO76rYh5a+Q:t_a0M+ZiqjZuzGwh4nFVKA", "Connect2_MyBookmarks_MUI", "MyBookmarks_Album", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:HkZ7IsBalUGVO76rYh5a+Q", callContext.id);
OutSystemsDebugger.pop("UunlNQ2jyEq6yy9zIw6bHA:CBvOGFy8j0+xPUeAWREtQw", callContext.id);
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
return Connect2_MyBookmarks_MUIController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, Connect2_MyBookmarks_MUILanguageResources);
});

define("Connect2_MyBookmarks_MUI.MyBookmarksFlow.MyBookmarks_Album.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"gQqO9YyLmUWe8t3gyrwXaw": {
getter: function (varBag, idService) {
return varBag.model.variables.bookmarkItemListIn;
}
},
"IQbQC55KAEyQRkhR0aWexQ": {
getter: function (varBag, idService) {
return varBag.model.variables.bookmarkGroupIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"J_F0VsndbE+7AXjiXjo5zQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ShowFalse"));
})(varBag.model, idService);
}
},
"T4e7BtibjkG3_qpQnIywzQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DEPRECATED_GalleryV2_BookmarkedImages"));
})(varBag.model, idService);
}
},
"1OfWapyRxkO2PjDqsKfqaA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"Ddc9OjEfuki0qL+dbevUng": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("List_BookmarkedImages"));
})(varBag.model, idService);
}
},
"Y6fTkRX1hEGpPG3tE14yxg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BookmarkAlbumTitle_Cont"));
})(varBag.model, idService);
}
},
"a4t3bgqSbEWIIX5VtNgYGw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BookmarkAlbumTitle"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
