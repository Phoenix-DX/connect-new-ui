define("UBTConnect.Home.Feed_Embeded.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect_Utils.controller", "UBTConnect_Utils.model", "UBTJavaScriptUtils.controller", "CommonPlugin.model", "Connect2_MediaScannerPlugin.controller", "FileViewerPlugin.controller", "FileTransferPlugin.model", "UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS.mvc$model", "UBTConnect_Utils.CW_CTA_PopUps.SharePopup.mvc$model", "FileTransferPlugin.FileTransfer.HandleDownload.mvc$model", "UBTConnect_Utils.controller$GetHasFeedEnabled", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTJavaScriptUtils.controller$JSUtils_Console_Log", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTConnect_Utils.controller$GetHasExtendedShare", "CommonPlugin.model$ErrorRec", "UBTConnect.referencesHealth$CommonPlugin", "Connect2_MediaScannerPlugin.controller$MediaScannerPlugin_ForceScan", "UBTConnect.referencesHealth$Connect2_MediaScannerPlugin", "Connect2_MediaScannerPlugin.controller$CheckMediaScanner_Plugin", "FileViewerPlugin.controller$OpenDocumentFromLocalPath", "UBTConnect.referencesHealth$FileViewerPlugin", "FileTransferPlugin.model$FileDownloadResultRec", "UBTConnect.referencesHealth$FileTransferPlugin", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "FileTransferPlugin.model$FileTransferErrorRec", "UBTConnect_Utils.controller$OpenInApp_TryOpenFileInApp", "FileTransferPlugin.model$ProgressRec", "UBTConnect_Utils.controller$ShareEntity_ByURL"], function (OutSystems, UBTConnectModel, UBTConnect_UtilsController, UBTConnect_UtilsModel, UBTJavaScriptUtilsController, CommonPluginModel, Connect2_MediaScannerPluginController, FileViewerPluginController, FileTransferPluginModel, UBTConnect_EmbedFeed_Blocks_Embedded_FeedCMS_mvcModel, UBTConnect_Utils_CW_CTA_PopUps_SharePopup_mvcModel, FileTransferPlugin_FileTransfer_HandleDownload_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("SharePopUp_Show", "sharePopUp_ShowVar", "SharePopUp_Show", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("SharePopUp_Id", "sharePopUp_IdVar", "SharePopUp_Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("ShareFeedItem_Title", "shareFeedItem_TitleVar", "ShareFeedItem_Title", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("isLoadingDocument", "isLoadingDocumentVar", "isLoadingDocument", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("FeedItemId", "feedItemIdIn", "FeedItemId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_feedItemIdInDataFetchStatus", "_feedItemIdInDataFetchStatus", "_feedItemIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = ((UBTConnect_EmbedFeed_Blocks_Embedded_FeedCMS_mvcModel.hasValidationWidgets || UBTConnect_Utils_CW_CTA_PopUps_SharePopup_mvcModel.hasValidationWidgets) || FileTransferPlugin_FileTransfer_HandleDownload_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("FeedItemId" in inputs) {
this.variables.feedItemIdIn = inputs.FeedItemId;
if("_feedItemIdInDataFetchStatus" in inputs) {
this.variables._feedItemIdInDataFetchStatus = inputs._feedItemIdInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Home.Feed_Embeded");
});
define("UBTConnect.Home.Feed_Embeded.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "UBTConnect_Utils.model", "UBTJavaScriptUtils.controller", "CommonPlugin.model", "Connect2_MediaScannerPlugin.controller", "FileViewerPlugin.controller", "FileTransferPlugin.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Home.Feed_Embeded.mvc$model", "UBTConnect.Home.Feed_Embeded.mvc$controller", "UBTConnect.clientVariables", "UBTConnect_EmbedFeed.Blocks.Embedded_FeedCMS.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect_Utils.CW_CTA_PopUps.SharePopup.mvc$view", "FileTransferPlugin.FileTransfer.HandleDownload.mvc$view", "UBTConnect_Utils.controller$GetHasFeedEnabled", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTJavaScriptUtils.controller$JSUtils_Console_Log", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTConnect_Utils.controller$GetHasExtendedShare", "CommonPlugin.model$ErrorRec", "UBTConnect.referencesHealth$CommonPlugin", "Connect2_MediaScannerPlugin.controller$MediaScannerPlugin_ForceScan", "UBTConnect.referencesHealth$Connect2_MediaScannerPlugin", "Connect2_MediaScannerPlugin.controller$CheckMediaScanner_Plugin", "FileViewerPlugin.controller$OpenDocumentFromLocalPath", "UBTConnect.referencesHealth$FileViewerPlugin", "FileTransferPlugin.model$FileDownloadResultRec", "UBTConnect.referencesHealth$FileTransferPlugin", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "FileTransferPlugin.model$FileTransferErrorRec", "UBTConnect_Utils.controller$OpenInApp_TryOpenFileInApp", "FileTransferPlugin.model$ProgressRec", "UBTConnect_Utils.controller$ShareEntity_ByURL"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, UBTConnect_UtilsModel, UBTJavaScriptUtilsController, CommonPluginModel, Connect2_MediaScannerPluginController, FileViewerPluginController, FileTransferPluginModel, React, OSView, UBTConnect_Home_Feed_Embeded_mvc_model, UBTConnect_Home_Feed_Embeded_mvc_controller, UBTConnectClientVariables, UBTConnect_EmbedFeed_Blocks_Embedded_FeedCMS_mvc_view, OSWidgets, UBTConnect_Utils_CW_CTA_PopUps_SharePopup_mvc_view, FileTransferPlugin_FileTransfer_HandleDownload_mvc_view) {
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
        View.displayName = "Home.Feed_Embeded";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_EmbedFeed_Blocks_Embedded_FeedCMS_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_SharePopup_mvc_view, FileTransferPlugin_FileTransfer_HandleDownload_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Home_Feed_Embeded_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Home_Feed_Embeded_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnect_UtilsController.default.getHasFeedEnabled$Action(callContext).hasAccessOut;
}, OS.DataTypes.DataTypes.Boolean, callContext.id), false, this, function () {
return [React.createElement(UBTConnect_EmbedFeed_Blocks_Embedded_FeedCMS_mvc_view, {
inputs: {
B2CTenant: UBTConnectClientVariables.getEmbedd_B2CTenant(),
FeedItemId: model.variables.feedItemIdIn,
_feedItemIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._feedItemIdInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onDownloaded$Action: function (uRLIn, filenameIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Blocks/Embedded_FeedCMS OnDownloaded");
return controller.handle_Download$Action(uRLIn, filenameIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
onShare$Action: function (shareIdIn, feedItemTitleIn, feedItemSubtitleIn, feedItemImageURLIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Blocks/Embedded_FeedCMS OnShare");
return controller.embedded_FeedCMSOnShare$Action(shareIdIn, feedItemTitleIn, feedItemSubtitleIn, feedItemImageURLIn, controller.callContext(eventHandlerContext));
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), React.createElement(UBTConnect_Utils_CW_CTA_PopUps_SharePopup_mvc_view, {
inputs: {
In_ContactPopupData: model.getCachedValue(idService.getId("GgBLoXZjyE+M6J7NXPfRvw.In_ContactPopupData"), function () {
return function () {
var rec = new UBTConnect_UtilsModel.ContactPopupDataRec();
rec.entityTypeIdAttr = UBTConnectModel.staticEntities.connect_Entity.feedItem;
rec.entityIdAttr = OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.textToInteger(model.variables.sharePopUp_IdVar));
rec.isAvatarImageAttr = false;
rec.actionNameAttr = ("Share " + model.variables.shareFeedItem_TitleVar);
rec.nameAttr = "";
rec.localityAttr = "";
rec.timezoneNameAttr = "";
rec.timezoneOffsetAttr = 0;
rec.showPopupAttr = model.variables.sharePopUp_ShowVar;
rec.isFetchingTimezoneAttr = false;
rec.isLoadingAttr = false;
rec.showTimezoneAttr = false;
rec.showImageAttr = false;
return rec;
}();
}, function () {
return model.variables.sharePopUp_IdVar;
}, function () {
return model.variables.shareFeedItem_TitleVar;
}, function () {
return model.variables.sharePopUp_ShowVar;
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_Cancel$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_CTA_PopUps/SharePopup Event_Cancel");
controller.handle_Share$Action(false, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
event_ShareToOthers$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_CTA_PopUps/SharePopup Event_ShareToOthers");
return controller.handle_Share_Others$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
event_ShareToConnect$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "CW_CTA_PopUps/SharePopup Event_ShareToConnect");
return controller.handle_Share_Connect$Action(controller.callContext(eventHandlerContext));
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
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(FileTransferPlugin_FileTransfer_HandleDownload_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onDownloadComplete$Action: function (fileDownloadResultIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "FileTransfer/HandleDownload OnDownloadComplete");
return controller.handleDownloadOnDownloadComplete$Action(fileDownloadResultIn, fileDownloadResultIn.fullPathAttr, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
onDownloadProgress$Action: function (progressIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "FileTransfer/HandleDownload OnDownloadProgress");
controller.handleDownloadOnDownloadProgress$Action(progressIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
onDownloadError$Action: function (fileTransferErrorIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "FileTransfer/HandleDownload OnDownloadError");
controller.handleDownloadOnDownloadError$Action(fileTransferErrorIn, controller.callContext(eventHandlerContext));
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
uuid: "2",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.Home.Feed_Embeded.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "UBTConnect_Utils.model", "UBTJavaScriptUtils.controller", "CommonPlugin.model", "Connect2_MediaScannerPlugin.controller", "FileViewerPlugin.controller", "FileTransferPlugin.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Home.Feed_Embeded.mvc$debugger", "UBTConnect.Home.Feed_Embeded.mvc$controller.Handle_Share_Connect.YieldJS", "UBTConnect_Utils.controller$GetHasFeedEnabled", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect_Utils.model$ContactPopupDataRec", "UBTJavaScriptUtils.controller$JSUtils_Console_Log", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTConnect_Utils.controller$GetHasExtendedShare", "CommonPlugin.model$ErrorRec", "UBTConnect.referencesHealth$CommonPlugin", "Connect2_MediaScannerPlugin.controller$MediaScannerPlugin_ForceScan", "UBTConnect.referencesHealth$Connect2_MediaScannerPlugin", "Connect2_MediaScannerPlugin.controller$CheckMediaScanner_Plugin", "FileViewerPlugin.controller$OpenDocumentFromLocalPath", "UBTConnect.referencesHealth$FileViewerPlugin", "FileTransferPlugin.model$FileDownloadResultRec", "UBTConnect.referencesHealth$FileTransferPlugin", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "FileTransferPlugin.model$FileTransferErrorRec", "UBTConnect_Utils.controller$OpenInApp_TryOpenFileInApp", "FileTransferPlugin.model$ProgressRec", "UBTConnect_Utils.controller$ShareEntity_ByURL"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, UBTConnect_UtilsModel, UBTJavaScriptUtilsController, CommonPluginModel, Connect2_MediaScannerPluginController, FileViewerPluginController, FileTransferPluginModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Home_Feed_Embeded_mvc_Debugger, UBTConnect_Home_Feed_Embeded_mvc_controller_Handle_Share_Connect_YieldJS) {
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
Controller.prototype._handle_Share$Action = function (in_isOpenIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handle_Share");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Home.Feed_Embeded.Handle_Share$vars"))());
vars.value.in_isOpenInLocal = in_isOpenIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:dFqJDvUzzkqreSl58OotXA:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.YAHTXFJNskizTcZ1e2MlWg/ClientActions.dFqJDvUzzkqreSl58OotXA:FeZRdtR0BxYeYehcZNf7lA", "UBTConnect", "Handle_Share", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sPpojzm+Q0WfZO9fu+daFQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+eCZOG1RskCETT6vEK4Z7A", callContext.id);
// SharePopUp_Show = In_isOpen
model.variables.sharePopUp_ShowVar = vars.value.in_isOpenInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_7VPcwxGJESM8m2LpdkDLg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:dFqJDvUzzkqreSl58OotXA", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Home.Feed_Embeded.Handle_Share$vars", [{
name: "In_isOpen",
attrName: "in_isOpenInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._handle_Share_Connect$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handle_Share_Connect");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:L2pxGBEpvEazqUr5g0oblQ:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.YAHTXFJNskizTcZ1e2MlWg/ClientActions.L2pxGBEpvEazqUr5g0oblQ:qCa_NztX+KpiiaVSx8QF2w", "UBTConnect", "Handle_Share_Connect", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XlaXPaDgQEiMe66u93S8ZA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Jz4lanugI0aUSYm1JKma7A", callContext.id);
// Execute Action: Handle_Share
controller._handle_Share$Action(false, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JaoWGvj5W0y1vZCRQvnjeA", callContext.id);
return controller.safeExecuteAsyncJSNode(UBTConnect_Home_Feed_Embeded_mvc_controller_Handle_Share_Connect_YieldJS, "Yield", "Handle_Share_Connect", null, function ($parameters) {
}, {}, {}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VwjTrJj5gkWEkBmW4UZhyw", callContext.id);
// Destination: /UBTConnect/LegacyShareObject
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/LegacyShareObject", {
In_ShareObjectTypeId: OS.DataConversion.ServerDataConverter.asString(UBTConnectModel.staticEntities.type_ShareObject.feed, OS.DataTypes.DataTypes.Text),
In_CustomTitle: OS.DataConversion.ServerDataConverter.asString(model.variables.shareFeedItem_TitleVar, OS.DataTypes.DataTypes.Text),
In_ObjectId: OS.DataConversion.ServerDataConverter.asString(model.variables.sharePopUp_IdVar, OS.DataTypes.DataTypes.Text)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:L2pxGBEpvEazqUr5g0oblQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:L2pxGBEpvEazqUr5g0oblQ", callContext.id);
throw ex;

});
};
Controller.prototype._embedded_FeedCMSOnShare$Action = function (shareIdIn, feedItemTitleIn, feedItemSubtitleIn, feedItemImageURLIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Embedded_FeedCMSOnShare");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Home.Feed_Embeded.Embedded_FeedCMSOnShare$vars"))());
vars.value.shareIdInLocal = shareIdIn;
vars.value.feedItemTitleInLocal = feedItemTitleIn;
vars.value.feedItemSubtitleInLocal = feedItemSubtitleIn;
vars.value.feedItemImageURLInLocal = feedItemImageURLIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:HKM_Jt_Gok2HWbzuqrqqFQ:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.YAHTXFJNskizTcZ1e2MlWg/ClientActions.HKM_Jt_Gok2HWbzuqrqqFQ:ES1xBjvjd3TmkJFJq0Ko7A", "UBTConnect", "Embedded_FeedCMSOnShare", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UD660nb9TkmRIeaKewimsw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9ePLBT_ga0u3M0iAqZ0UFQ", callContext.id) && OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnect_UtilsController.default.getHasExtendedShare$Action(callContext).hasExtendedShareOut;
}, OS.DataTypes.DataTypes.Boolean, callContext.id))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:EYf8vssMkk23yNmKY9KqHA", callContext.id);
// Trigger Event: Event_Share
return controller.event_Share$Action(vars.value.shareIdInLocal, vars.value.feedItemTitleInLocal, vars.value.feedItemSubtitleInLocal, vars.value.feedItemImageURLInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YMO5lrz+XkGjtWS+u351Hw", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:aMeRPi4pa0u1dVAj0I7cGA", callContext.id);
// Execute Action: JSUtils_Console_Log
UBTJavaScriptUtilsController.default.jSUtils_Console_Log$Action(vars.value.shareIdInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Nu49V0yblEig_ra8oJDUxQ", callContext.id);
// SharePopUp_Id = ShareId
model.variables.sharePopUp_IdVar = vars.value.shareIdInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Nu49V0yblEig_ra8oJDUxQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// SharePopUp_Show = True
model.variables.sharePopUp_ShowVar = true;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Nu49V0yblEig_ra8oJDUxQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ShareFeedItem_Title = FeedItemTitle
model.variables.shareFeedItem_TitleVar = vars.value.feedItemTitleInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5O_mC4JB0k28EzYuavBlWg", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:HKM_Jt_Gok2HWbzuqrqqFQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:HKM_Jt_Gok2HWbzuqrqqFQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Home.Feed_Embeded.Embedded_FeedCMSOnShare$vars", [{
name: "ShareId",
attrName: "shareIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "FeedItemTitle",
attrName: "feedItemTitleInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "FeedItemSubtitle",
attrName: "feedItemSubtitleInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "FeedItemImageURL",
attrName: "feedItemImageURLInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._handleDownloadOnDownloadComplete$Action = function (fileDownloadResultIn, filepathIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("HandleDownloadOnDownloadComplete");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Home.Feed_Embeded.HandleDownloadOnDownloadComplete$vars"))());
vars.value.fileDownloadResultInLocal = fileDownloadResultIn.clone();
vars.value.filepathInLocal = filepathIn;
var mediaScannerPlugin_ForceScanVar = new OS.DataTypes.VariableHolder();
var checkMediaScanner_PluginVar = new OS.DataTypes.VariableHolder();
var openDocumentFromLocalPathVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.mediaScannerPlugin_ForceScanVar = mediaScannerPlugin_ForceScanVar;
varBag.checkMediaScanner_PluginVar = checkMediaScanner_PluginVar;
varBag.openDocumentFromLocalPathVar = openDocumentFromLocalPathVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:fvxygNr2VkyS8T4zskDL9Q:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.YAHTXFJNskizTcZ1e2MlWg/ClientActions.fvxygNr2VkyS8T4zskDL9Q:T3LKUdf_6mKb+smns7JLIA", "UBTConnect", "HandleDownloadOnDownloadComplete", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wCbrsDbynUy79e5cfDVD9A", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JNIUNdh7QkOFBETwmOzYZg", callContext.id);
// Execute Action: CheckMediaScanner_Plugin
model.flush();
return Connect2_MediaScannerPluginController.default.checkMediaScanner_Plugin$Action(callContext).then(function (value) {
checkMediaScanner_PluginVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Y1wLj0+3b0yqeqIFvML9mQ", callContext.id) && checkMediaScanner_PluginVar.value.isAvailableOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9mZ6IrAbJ0uT7L_FQmXuww", callContext.id);
// Execute Action: MediaScannerPlugin_ForceScan
model.flush();
return Connect2_MediaScannerPluginController.default.mediaScannerPlugin_ForceScan$Action(vars.value.filepathInLocal, callContext).then(function (value) {
mediaScannerPlugin_ForceScanVar.value = value;
});
}

});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eBH40k0MOkK6wx27mNJ2Kg", callContext.id);
// Execute Action: OpenDocumentFromLocalPath
model.flush();
return FileViewerPluginController.default.openDocumentFromLocalPath$Action(vars.value.fileDownloadResultInLocal.fullPathAttr, "", "", callContext).then(function (value) {
openDocumentFromLocalPathVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:y_BD0bt_okK+6dlvBh6E8Q", callContext.id);
// isLoadingDocument = False
model.variables.isLoadingDocumentVar = false;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qS+V5Guyik6POio+6uumiQ", callContext.id);
});
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:fvxygNr2VkyS8T4zskDL9Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:fvxygNr2VkyS8T4zskDL9Q", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Home.Feed_Embeded.HandleDownloadOnDownloadComplete$vars", [{
name: "FileDownloadResult",
attrName: "fileDownloadResultInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new FileTransferPluginModel.FileDownloadResultRec();
},
complexType: FileTransferPluginModel.FileDownloadResultRec
}, {
name: "Filepath",
attrName: "filepathInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._handleDownloadOnDownloadError$Action = function (fileTransferErrorIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("HandleDownloadOnDownloadError");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Home.Feed_Embeded.HandleDownloadOnDownloadError$vars"))());
vars.value.fileTransferErrorInLocal = fileTransferErrorIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:G3BwiGbWKU6voZc921wMuQ:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.YAHTXFJNskizTcZ1e2MlWg/ClientActions.G3BwiGbWKU6voZc921wMuQ:7K3p2JZ6kNj23GFYdCXaLA", "UBTConnect", "HandleDownloadOnDownloadError", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nQeOcpHA6kictoa0EAi91A", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZXz8hknp4ke7PvsH4x7xag", callContext.id);
// isLoadingDocument = False
model.variables.isLoadingDocumentVar = false;
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:prsctVoM7Eit+EJ+4Z10fA", callContext.id) && (vars.value.fileTransferErrorInLocal.messageAttr === "Document not found"))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WPgkHWr87UCyZb90YCr6WQ", callContext.id);
// Message = "The file you are trying to open is no longer available and cannot be opened."
vars.value.messageVar = "The file you are trying to open is no longer available and cannot be opened.";
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7VJUiCkabk+lNhRUbtILXw", callContext.id);
// Message = "Unfortunately this file could not be opened. Please try again at a later time."
vars.value.messageVar = "Unfortunately this file could not be opened. Please try again at a later time.";
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rSajDItcrEucS_WJ50270g", callContext.id);
// Execute Action: FeedbackMessage_AutoClose
UBTJavaScriptUtilsController.default.feedbackMessage_AutoClose$Action("", vars.value.messageVar, UBTConnectModel.staticEntities.uBT_MessageType.info, true, "", 0, false, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Lwj3ZnESLEGY4pGz8kLu8Q", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:G3BwiGbWKU6voZc921wMuQ", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Home.Feed_Embeded.HandleDownloadOnDownloadError$vars", [{
name: "FileTransferError",
attrName: "fileTransferErrorInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new FileTransferPluginModel.FileTransferErrorRec();
},
complexType: FileTransferPluginModel.FileTransferErrorRec
}, {
name: "Message",
attrName: "messageVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._handle_Download$Action = function (uRLIn, filenameIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handle_Download");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Home.Feed_Embeded.Handle_Download$vars"))());
vars.value.uRLInLocal = uRLIn;
vars.value.filenameInLocal = filenameIn;
var openInApp_TryOpenFileInAppVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.openInApp_TryOpenFileInAppVar = openInApp_TryOpenFileInAppVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:o2QorPyiKkiDUXj_0HjUEg:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.YAHTXFJNskizTcZ1e2MlWg/ClientActions.o2QorPyiKkiDUXj_0HjUEg:02SOyPfVZS++oIaX2lakxQ", "UBTConnect", "Handle_Download", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bxdh06Q__Uqcgqtb0UfFMQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kBietV_flUq3yt7pyISerQ", callContext.id);
// Execute Action: OpenInApp_TryOpenFileInApp
model.flush();
return UBTConnect_UtilsController.default.openInApp_TryOpenFileInApp$Action(vars.value.filenameInLocal, vars.value.uRLInLocal, "connect-feed-documents", "pdf", callContext).then(function (value) {
openInApp_TryOpenFileInAppVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:w7wigOLNEkewoD7NrsD9jA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:o2QorPyiKkiDUXj_0HjUEg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:o2QorPyiKkiDUXj_0HjUEg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Home.Feed_Embeded.Handle_Download$vars", [{
name: "URL",
attrName: "uRLInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Filename",
attrName: "filenameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._handleDownloadOnDownloadProgress$Action = function (progressIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("HandleDownloadOnDownloadProgress");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Home.Feed_Embeded.HandleDownloadOnDownloadProgress$vars"))());
vars.value.progressInLocal = progressIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:paLLtjJjbE6ZWw4nAjVqAA:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.YAHTXFJNskizTcZ1e2MlWg/ClientActions.paLLtjJjbE6ZWw4nAjVqAA:QNQl4yASFqzl_JMY1TNnkQ", "UBTConnect", "HandleDownloadOnDownloadProgress", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3tXWW01+NUyMUWax9za3DQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MeHbsouc2kylHiP3YHkF6g", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:paLLtjJjbE6ZWw4nAjVqAA", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Home.Feed_Embeded.HandleDownloadOnDownloadProgress$vars", [{
name: "Progress",
attrName: "progressInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new FileTransferPluginModel.ProgressRec();
},
complexType: FileTransferPluginModel.ProgressRec
}]);
Controller.prototype._handle_Share_Others$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handle_Share_Others");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Zrriu2BYz0mc_ya_CyqtUw:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.YAHTXFJNskizTcZ1e2MlWg/ClientActions.Zrriu2BYz0mc_ya_CyqtUw:nUX5tsucvZVZ7V7bAZHZKw", "UBTConnect", "Handle_Share_Others", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0qFTW4UokEq7eBsoqgRBOg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XyRId8n0MEm8xPWjIny73g", callContext.id);
// Execute Action: Handle_Share
controller._handle_Share$Action(false, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:A4ljzFvu+kWwN5N0D3zGhg", callContext.id);
// Execute Action: ShareEntity_ByURL
model.flush();
return UBTConnect_UtilsController.default.shareEntity_ByURL$Action(UBTConnectModel.staticEntities.type_ShareObject.feed, model.variables.sharePopUp_IdVar, "", OS.DataTypes.DateTime.defaultValue, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:EmQSLWZqHkOxsBUNXMIsDA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Zrriu2BYz0mc_ya_CyqtUw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Zrriu2BYz0mc_ya_CyqtUw", callContext.id);
throw ex;

});
};

Controller.prototype.handle_Share$Action = function (in_isOpenIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handle_Share$Action, callContext, in_isOpenIn);

};
Controller.prototype.handle_Share_Connect$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handle_Share_Connect$Action, callContext);

};
Controller.prototype.embedded_FeedCMSOnShare$Action = function (shareIdIn, feedItemTitleIn, feedItemSubtitleIn, feedItemImageURLIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._embedded_FeedCMSOnShare$Action, callContext, shareIdIn, feedItemTitleIn, feedItemSubtitleIn, feedItemImageURLIn);

};
Controller.prototype.handleDownloadOnDownloadComplete$Action = function (fileDownloadResultIn, filepathIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handleDownloadOnDownloadComplete$Action, callContext, fileDownloadResultIn, filepathIn);

};
Controller.prototype.handleDownloadOnDownloadError$Action = function (fileTransferErrorIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handleDownloadOnDownloadError$Action, callContext, fileTransferErrorIn);

};
Controller.prototype.handle_Download$Action = function (uRLIn, filenameIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handle_Download$Action, callContext, uRLIn, filenameIn);

};
Controller.prototype.handleDownloadOnDownloadProgress$Action = function (progressIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handleDownloadOnDownloadProgress$Action, callContext, progressIn);

};
Controller.prototype.handle_Share_Others$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handle_Share_Others$Action, callContext);

};
Controller.prototype.event_Share$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:9o650LFgPEKO3jEzGxssNw:/NRWebFlows.9o650LFgPEKO3jEzGxssNw:9fwzOG+yQfV_SOU4v_xngw", "UBTConnect", "Home", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:YAHTXFJNskizTcZ1e2MlWg:/NRWebFlows.9o650LFgPEKO3jEzGxssNw/NodesShownInESpaceTree.YAHTXFJNskizTcZ1e2MlWg:OMXY_nVC5nMRR+CjUVGgNw", "UBTConnect", "Feed_Embeded", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:YAHTXFJNskizTcZ1e2MlWg", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:9o650LFgPEKO3jEzGxssNw", callContext.id);
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
define("UBTConnect.Home.Feed_Embeded.mvc$controller.Handle_Share_Connect.YieldJS", [], function () {
return function ($actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
Promise.resolve().then($resolve);
});
};
});

define("UBTConnect.Home.Feed_Embeded.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"PWTMUqAgrUqt3dZT697++g": {
getter: function (varBag, idService) {
return varBag.vars.value.in_isOpenInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"JaoWGvj5W0y1vZCRQvnjeA": {
getter: function (varBag, idService) {
return varBag.yieldJSResult.value;
}
},
"GXwEGg8t80iDTCTd4OG8pg": {
getter: function (varBag, idService) {
return varBag.vars.value.shareIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ZNPZ7zar4EuiXXWhKkgP4A": {
getter: function (varBag, idService) {
return varBag.vars.value.feedItemTitleInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"U3gtzU_ZwEqEZejdcctMwQ": {
getter: function (varBag, idService) {
return varBag.vars.value.feedItemSubtitleInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Bor9zvszdk2+5mB3BO0AUQ": {
getter: function (varBag, idService) {
return varBag.vars.value.feedItemImageURLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"pbQzXf5tmEGTKLzAacqqBw": {
getter: function (varBag, idService) {
return varBag.vars.value.fileDownloadResultInLocal;
}
},
"YCVviJJAtUGgsBqXkNPvxg": {
getter: function (varBag, idService) {
return varBag.vars.value.filepathInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"9mZ6IrAbJ0uT7L_FQmXuww": {
getter: function (varBag, idService) {
return varBag.mediaScannerPlugin_ForceScanVar.value;
}
},
"JNIUNdh7QkOFBETwmOzYZg": {
getter: function (varBag, idService) {
return varBag.checkMediaScanner_PluginVar.value;
}
},
"eBH40k0MOkK6wx27mNJ2Kg": {
getter: function (varBag, idService) {
return varBag.openDocumentFromLocalPathVar.value;
}
},
"Kr2vdjKR9EORKggWHz3k6Q": {
getter: function (varBag, idService) {
return varBag.vars.value.messageVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"XbrjP8VTFEm32sEshUcgbQ": {
getter: function (varBag, idService) {
return varBag.vars.value.fileTransferErrorInLocal;
}
},
"L18LJjK67EmwsHqWlvXwew": {
getter: function (varBag, idService) {
return varBag.vars.value.uRLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"BnW+U4Pncky0mxkXlQ__tw": {
getter: function (varBag, idService) {
return varBag.vars.value.filenameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"kBietV_flUq3yt7pyISerQ": {
getter: function (varBag, idService) {
return varBag.openInApp_TryOpenFileInAppVar.value;
}
},
"bOnHGkjn8U+6_XhUkpgNCA": {
getter: function (varBag, idService) {
return varBag.vars.value.progressInLocal;
}
},
"atEwNaiaoU6Susun_Cmq3Q": {
getter: function (varBag, idService) {
return varBag.model.variables.sharePopUp_ShowVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"ntk0crjqxkyFyHzR7+dliw": {
getter: function (varBag, idService) {
return varBag.model.variables.sharePopUp_IdVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"PsXabdDwOkOFKv8uEahEDg": {
getter: function (varBag, idService) {
return varBag.model.variables.shareFeedItem_TitleVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"JwrsBp1AZ06_XrUu+W8Ovw": {
getter: function (varBag, idService) {
return varBag.model.variables.isLoadingDocumentVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"rLbsyPPvLUiCtFOrryEFBg": {
getter: function (varBag, idService) {
return varBag.model.variables.feedItemIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
