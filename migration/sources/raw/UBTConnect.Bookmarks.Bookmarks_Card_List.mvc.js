define("UBTConnect.Bookmarks.Bookmarks_Card_List.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "Connect_Bookmarks_CS.model", "UBTConnectLibrary.model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnectLibrary.ConnectPatterns.EmptyList.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnect.Bookmarks.Bookmarks_Card_Item.mvc$model", "Connect_Bookmarks_CS.model$UI_Bookmark_CardItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Bookmarks_CS", "UBTConnect.model$UI_Bookmark_CardItemList", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "Connect_Bookmarks_CS.model$UI_Bookmark_Card_ContentRec", "Connect_Bookmarks_CS.model$UI_Bookmark_Card_SourceHeaderRec", "UBTConnectLibrary.model$NotesRec", "UBTConnectLibrary.model$Note_ItemRec", "UBTConnect.model$Note_ItemList"], function (OutSystems, UBTConnectModel, Connect_Bookmarks_CSModel, UBTConnectLibraryModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, UBTConnectLibrary_ConnectPatterns_EmptyList_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel, UBTConnect_Bookmarks_Bookmarks_Card_Item_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("In_Bookmarks", "in_BookmarksIn", "In_Bookmarks", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_Bookmark_CardItemList());
}, false, UBTConnectModel.UI_Bookmark_CardItemList), 
this.attr("_in_BookmarksInDataFetchStatus", "_in_BookmarksInDataFetchStatus", "_in_BookmarksInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_IsLoading", "in_IsLoadingIn", "In_IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsLoadingInDataFetchStatus", "_in_IsLoadingInDataFetchStatus", "_in_IsLoadingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_SearchString", "in_SearchStringIn", "In_SearchString", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_SearchStringInDataFetchStatus", "_in_SearchStringInDataFetchStatus", "_in_SearchStringInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = ((((UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_EmptyList_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets) || UBTConnect_Bookmarks_Bookmarks_Card_Item_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_Bookmarks" in inputs) {
this.variables.in_BookmarksIn = inputs.In_Bookmarks;
if("_in_BookmarksInDataFetchStatus" in inputs) {
this.variables._in_BookmarksInDataFetchStatus = inputs._in_BookmarksInDataFetchStatus;
}

}

if("In_IsLoading" in inputs) {
this.variables.in_IsLoadingIn = inputs.In_IsLoading;
if("_in_IsLoadingInDataFetchStatus" in inputs) {
this.variables._in_IsLoadingInDataFetchStatus = inputs._in_IsLoadingInDataFetchStatus;
}

}

if("In_SearchString" in inputs) {
this.variables.in_SearchStringIn = inputs.In_SearchString;
if("_in_SearchStringInDataFetchStatus" in inputs) {
this.variables._in_SearchStringInDataFetchStatus = inputs._in_SearchStringInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Bookmarks.Bookmarks_Card_List");
});
define("UBTConnect.Bookmarks.Bookmarks_Card_List.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Bookmarks_CS.model", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Bookmarks.Bookmarks_Card_List.mvc$model", "UBTConnect.Bookmarks.Bookmarks_Card_List.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnectLibrary.ConnectPatterns.EmptyList.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnect.Bookmarks.Bookmarks_Card_Item.mvc$view", "Connect_Bookmarks_CS.model$UI_Bookmark_CardItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Bookmarks_CS", "UBTConnect.model$UI_Bookmark_CardItemList", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "Connect_Bookmarks_CS.model$UI_Bookmark_Card_ContentRec", "Connect_Bookmarks_CS.model$UI_Bookmark_Card_SourceHeaderRec", "UBTConnectLibrary.model$NotesRec", "UBTConnectLibrary.model$Note_ItemRec", "UBTConnect.model$Note_ItemList"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Bookmarks_CSModel, UBTConnectLibraryModel, React, OSView, UBTConnect_Bookmarks_Bookmarks_Card_List_mvc_model, UBTConnect_Bookmarks_Bookmarks_Card_List_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_ConnectPatterns_EmptyList_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnect_Bookmarks_Bookmarks_Card_Item_mvc_view) {
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
        View.displayName = "Bookmarks.Bookmarks_Card_List";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_ConnectPatterns_EmptyList_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnect_Bookmarks_Bookmarks_Card_Item_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Bookmarks_Bookmarks_Card_List_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Bookmarks_Bookmarks_Card_List_mvc_controller;
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
Options: model.getCachedValue(idService.getId("FkFUXWff4UmFGAd5fzV2ww.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.backgroundAttr = function () {
var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
return rec;
}();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
inputs: {
In_IsLoading: model.variables.in_IsLoadingIn,
_in_IsLoadingInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsLoadingInDataFetchStatus)
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
return [$if(model.variables.in_BookmarksIn.isEmpty, false, this, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_EmptyList_mvc_view, {
inputs: {
IconId: UBTConnectModel.staticEntities.uBT_Icons2.bookmark
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
titlePlaceholder: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_TextOptions: model.getCachedValue(idService.getId("csnQzx9rbEGfY0pgdGEKjg.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral9;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.base;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
In_Text: "No Bookmarks found"
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
textPlaceholder: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_Text: "We were unable to find any Bookmarks to",
In_TextOptions: model.getCachedValue(idService.getId("GSd81jyzh0G9OeWZirOZ9w.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
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
uuid: "4",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_Text: "display.",
In_TextOptions: model.getCachedValue(idService.getId("9VKoNtPMZUWS9KcP7OUcyA.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
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
_dependencies: []
})];
})
},
_dependencies: []
})];
}, function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
onScrollEnding: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Bookmarks/Bookmarks_Card_List/List OnScrollEnding");
return controller.bookmarksCardList_OnScrollEnding$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
source: model.variables.in_BookmarksIn,
style: "list list-group list--gap-s",
tag: "div",
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_BookmarksInDataFetchStatus),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(UBTConnect_Bookmarks_Bookmarks_Card_Item_mvc_view, {
inputs: {
Bookmark_CardItem: model.variables.in_BookmarksIn.getCurrent(callContext.iterationContext),
_bookmark_CardItemInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_BookmarksInDataFetchStatus),
In_SearchString: model.variables.in_SearchStringIn,
_in_SearchStringInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SearchStringInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
item_Unbookmarked$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Bookmarks/Bookmarks_Card_Item Item_Unbookmarked");
controller.item_Unbookmarked$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
onClickCardItem$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Bookmarks/Bookmarks_Card_Item OnClickCardItem");
controller.onClick_BookmarkCardItem$Action(OS.BuiltinFunctions.longIntegerToText(model.variables.in_BookmarksIn.getCurrent(callContext.iterationContext).itemIdAttr), model.variables.in_BookmarksIn.getCurrent(callContext.iterationContext).bookmarkCategoryIdAttr, controller.callContext(eventHandlerContext));
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
uuid: "7",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables.in_SearchStringIn), asPrimitiveValue(model.variables._in_SearchStringInDataFetchStatus), asPrimitiveValue(model.variables._in_BookmarksInDataFetchStatus)]
})];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_SearchStringIn), asPrimitiveValue(model.variables._in_SearchStringInDataFetchStatus), asPrimitiveValue(model.variables._in_BookmarksInDataFetchStatus), asPrimitiveValue(model.variables.in_BookmarksIn)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_SearchStringIn), asPrimitiveValue(model.variables.in_BookmarksIn), asPrimitiveValue(model.variables._in_SearchStringInDataFetchStatus), asPrimitiveValue(model.variables._in_BookmarksInDataFetchStatus), asPrimitiveValue(model.variables._in_IsLoadingInDataFetchStatus), asPrimitiveValue(model.variables.in_IsLoadingIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.Bookmarks.Bookmarks_Card_List.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Bookmarks_CS.model", "UBTConnectLibrary.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Bookmarks.Bookmarks_Card_List.mvc$debugger", "Connect_Bookmarks_CS.model$UI_Bookmark_CardItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Bookmarks_CS", "UBTConnect.model$UI_Bookmark_CardItemList", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "Connect_Bookmarks_CS.model$UI_Bookmark_Card_ContentRec", "Connect_Bookmarks_CS.model$UI_Bookmark_Card_SourceHeaderRec", "UBTConnectLibrary.model$NotesRec", "UBTConnectLibrary.model$Note_ItemRec", "UBTConnect.model$Note_ItemList"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Bookmarks_CSModel, UBTConnectLibraryModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Bookmarks_Bookmarks_Card_List_mvc_Debugger) {
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
Controller.prototype._bookmarksCardList_OnScrollEnding$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("BookmarksCardList_OnScrollEnding");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:C7h1GAxZDEGpQ2C3YQkylA:/NRWebFlows.kStR2ohBzUir2kDhfuOSLg/NodesShownInESpaceTree._L5cuheRa0e0+Mi_QpRM3w/ClientActions.C7h1GAxZDEGpQ2C3YQkylA:GwSbiEDZ858N+2N+C0HxUw", "UBTConnect", "BookmarksCardList_OnScrollEnding", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gSH159lj6EO2ofzDjrSu5A", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:OqGEIiNeAkKSP5_X0XVyqg", callContext.id);
// Trigger Event: OnLoadMore
return controller.onLoadMore$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LElJDxmZQ02zJkb+iFoiiw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:C7h1GAxZDEGpQ2C3YQkylA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:C7h1GAxZDEGpQ2C3YQkylA", callContext.id);
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
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:0C4LXAE_4ECz+d2uU6LPvA:/NRWebFlows.kStR2ohBzUir2kDhfuOSLg/NodesShownInESpaceTree._L5cuheRa0e0+Mi_QpRM3w/ClientActions.0C4LXAE_4ECz+d2uU6LPvA:a8+vgog7C_Fi229IMJJycg", "UBTConnect", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mn9y9PK5G0exQGCuDS9LhA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PkHgmuGEwE60FVwra2xsmg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:0C4LXAE_4ECz+d2uU6LPvA", callContext.id);
}

};
Controller.prototype._onInitialize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:7o4oeDD2CUK+zGAYyACi8w:/NRWebFlows.kStR2ohBzUir2kDhfuOSLg/NodesShownInESpaceTree._L5cuheRa0e0+Mi_QpRM3w/ClientActions.7o4oeDD2CUK+zGAYyACi8w:+wIuDzAOL+vTURyVp82VYg", "UBTConnect", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:c08geU6kW0KNbqn2IroerQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PcTUtviFHUCEii4ZyNw_Ew", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Y_DhjrB0Wk612IJJiUVYrg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:7o4oeDD2CUK+zGAYyACi8w", callContext.id);
}

};

Controller.prototype.bookmarksCardList_OnScrollEnding$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._bookmarksCardList_OnScrollEnding$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.item_Unbookmarked$Action = function () {
return Promise.resolve();
};
Controller.prototype.onClick_BookmarkCardItem$Action = function () {
return Promise.resolve();
};
Controller.prototype.onLoadMore$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:kStR2ohBzUir2kDhfuOSLg:/NRWebFlows.kStR2ohBzUir2kDhfuOSLg:JSKfj0CjfVbkU+WuEIFgoA", "UBTConnect", "Bookmarks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:_L5cuheRa0e0+Mi_QpRM3w:/NRWebFlows.kStR2ohBzUir2kDhfuOSLg/NodesShownInESpaceTree._L5cuheRa0e0+Mi_QpRM3w:6GxgE2o71AvYG5R2oUbEqg", "UBTConnect", "Bookmarks_Card_List", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:_L5cuheRa0e0+Mi_QpRM3w", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:kStR2ohBzUir2kDhfuOSLg", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Bookmarks/Bookmarks_Card_List On Initialize");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Bookmarks/Bookmarks_Card_List On Ready");
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

define("UBTConnect.Bookmarks.Bookmarks_Card_List.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"LhuoqmnDk0aUPEsX1Zs2Lw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_BookmarksIn;
}
},
"jaAIAeIo50+i0VethPhasQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsLoadingIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"xYSetddIGEmzH96oVHMeKQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_SearchStringIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"dphyW4dVc0u1Qiq6ES46Iw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"RuMt0ogBh0GllFl7ZuCIvw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
})(varBag.model, idService);
}
},
"fw_D4RHYoEavRoeLsB0yfw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Empty"));
})(varBag.model, idService);
}
},
"FOWiXpdlUEGoavMXCMsjiQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TitlePlaceholder"));
})(varBag.model, idService);
}
},
"v7XYBMlOsUeRT1z86uGfVg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TextPlaceholder"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
