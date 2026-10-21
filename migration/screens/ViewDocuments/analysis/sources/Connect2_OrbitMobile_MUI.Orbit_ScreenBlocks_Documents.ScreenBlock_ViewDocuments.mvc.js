define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_Documents.ScreenBlock_ViewDocuments.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "UBTConnect_Utils.controller", "Connect2_OrbitMobile_MUI.controller", "FileTransferPlugin.model", "CommonPlugin.model", "FileViewerPlugin.controller", "Connect2_OrbitMobile_IS.model", "UBTJavaScriptUtils.controller", "Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$model", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.LoadingSpinner.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.ContactHelpdesk_Footer.mvc$model", "FileTransferPlugin.FileTransfer.HandleDownload.mvc$model", "Connect2_OrbitMobile_MUI.model$EventDocumentItem_ScreenList", "UBTConnect_Utils.controller$OpenInApp_TryOpenFileInApp", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_MUI.controller$AddExtensionToFile", "Connect2_OrbitMobile_MUI.controller$GetContactHelpdeskSubject_Event", "FileTransferPlugin.model$ProgressRec", "Connect2_OrbitMobile_MUI.referencesHealth$FileTransferPlugin", "CommonPlugin.model$ErrorRec", "Connect2_OrbitMobile_MUI.referencesHealth$CommonPlugin", "FileViewerPlugin.controller$OpenDocumentFromLocalPath", "Connect2_OrbitMobile_MUI.referencesHealth$FileViewerPlugin", "FileTransferPlugin.model$FileDownloadResultRec", "Connect2_OrbitMobile_IS.model$EventDocumentItemRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$EventDocumentItemList", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "Connect2_OrbitMobile_MUI.referencesHealth$UBTJavaScriptUtils", "FileTransferPlugin.model$FileTransferErrorRec", "Connect2_OrbitMobile_IS.model$GetEventDocumentsResponseRec"], function (OutSystems, Connect2_OrbitMobile_MUIModel, UBTConnect_UtilsController, Connect2_OrbitMobile_MUIController, FileTransferPluginModel, CommonPluginModel, FileViewerPluginController, Connect2_OrbitMobile_ISModel, UBTJavaScriptUtilsController, Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvcModel, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_LoadingSpinner_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvcModel, FileTransferPlugin_FileTransfer_HandleDownload_mvcModel) {
var OS = OutSystems.Internal;

var GetEventDocumentsDataActRec = (function (_super) {
__extends(GetEventDocumentsDataActRec, _super);
function GetEventDocumentsDataActRec(defaults) {
_super.apply(this, arguments);
}
GetEventDocumentsDataActRec.attributesToDeclare = function () {
return [
this.attr("Response", "responseOut", "Response", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.GetEventDocumentsResponseRec());
}, true, Connect2_OrbitMobile_ISModel.GetEventDocumentsResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
GetEventDocumentsDataActRec.fromStructure = function (str) {
return new GetEventDocumentsDataActRec(new GetEventDocumentsDataActRec.RecordClass({
responseOut: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetEventDocumentsDataActRec.init();
return GetEventDocumentsDataActRec;
})(OS.Model.DataSourceRecord);

var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("EventDocuments", "eventDocumentsVar", "EventDocuments", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.EventDocumentItem_ScreenList());
}, false, Connect2_OrbitMobile_MUIModel.EventDocumentItem_ScreenList), 
this.attr("IsFetchingData", "isFetchingDataVar", "IsFetchingData", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsLoadingDocument", "isLoadingDocumentVar", "IsLoadingDocument", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("In_MemberId", "in_MemberIdIn", "In_MemberId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_MemberIdInDataFetchStatus", "_in_MemberIdInDataFetchStatus", "_in_MemberIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_EventId", "in_EventIdIn", "In_EventId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_EventIdInDataFetchStatus", "_in_EventIdInDataFetchStatus", "_in_EventIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_EventName", "in_EventNameIn", "In_EventName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_EventNameInDataFetchStatus", "_in_EventNameInDataFetchStatus", "_in_EventNameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_EventLocation", "in_EventLocationIn", "In_EventLocation", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_EventLocationInDataFetchStatus", "_in_EventLocationInDataFetchStatus", "_in_EventLocationInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_EventStartDate", "in_EventStartDateIn", "In_EventStartDate", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, false), 
this.attr("_in_EventStartDateInDataFetchStatus", "_in_EventStartDateInDataFetchStatus", "_in_EventStartDateInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_EventEndDate", "in_EventEndDateIn", "In_EventEndDate", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, false), 
this.attr("_in_EventEndDateInDataFetchStatus", "_in_EventEndDateInDataFetchStatus", "_in_EventEndDateInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("GetEventDocuments", "getEventDocumentsDataAct", "getEventDocumentsDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetEventDocumentsDataActRec());
}, true, GetEventDocumentsDataActRec)
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
Model._hasValidationWidgetsValue = ((((((Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvcModel.hasValidationWidgets || Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_LoadingSpinner_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvcModel.hasValidationWidgets) || FileTransferPlugin_FileTransfer_HandleDownload_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_MemberId" in inputs) {
this.variables.in_MemberIdIn = inputs.In_MemberId;
if("_in_MemberIdInDataFetchStatus" in inputs) {
this.variables._in_MemberIdInDataFetchStatus = inputs._in_MemberIdInDataFetchStatus;
}

}

if("In_EventId" in inputs) {
this.variables.in_EventIdIn = inputs.In_EventId;
if("_in_EventIdInDataFetchStatus" in inputs) {
this.variables._in_EventIdInDataFetchStatus = inputs._in_EventIdInDataFetchStatus;
}

}

if("In_EventName" in inputs) {
this.variables.in_EventNameIn = inputs.In_EventName;
if("_in_EventNameInDataFetchStatus" in inputs) {
this.variables._in_EventNameInDataFetchStatus = inputs._in_EventNameInDataFetchStatus;
}

}

if("In_EventLocation" in inputs) {
this.variables.in_EventLocationIn = inputs.In_EventLocation;
if("_in_EventLocationInDataFetchStatus" in inputs) {
this.variables._in_EventLocationInDataFetchStatus = inputs._in_EventLocationInDataFetchStatus;
}

}

if("In_EventStartDate" in inputs) {
this.variables.in_EventStartDateIn = inputs.In_EventStartDate;
if("_in_EventStartDateInDataFetchStatus" in inputs) {
this.variables._in_EventStartDateInDataFetchStatus = inputs._in_EventStartDateInDataFetchStatus;
}

}

if("In_EventEndDate" in inputs) {
this.variables.in_EventEndDateIn = inputs.In_EventEndDate;
if("_in_EventEndDateInDataFetchStatus" in inputs) {
this.variables._in_EventEndDateInDataFetchStatus = inputs._in_EventEndDateInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Orbit_ScreenBlocks_Documents.ScreenBlock_ViewDocuments");
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_Documents.ScreenBlock_ViewDocuments.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "UBTConnect_Utils.controller", "FileTransferPlugin.model", "CommonPlugin.model", "FileViewerPlugin.controller", "Connect2_OrbitMobile_IS.model", "UBTJavaScriptUtils.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_Documents.ScreenBlock_ViewDocuments.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_Documents.ScreenBlock_ViewDocuments.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.LoadingSpinner.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.ContactHelpdesk_Footer.mvc$view", "FileTransferPlugin.FileTransfer.HandleDownload.mvc$view", "Connect2_OrbitMobile_MUI.model$EventDocumentItem_ScreenList", "UBTConnect_Utils.controller$OpenInApp_TryOpenFileInApp", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_MUI.controller$AddExtensionToFile", "Connect2_OrbitMobile_MUI.controller$GetContactHelpdeskSubject_Event", "FileTransferPlugin.model$ProgressRec", "Connect2_OrbitMobile_MUI.referencesHealth$FileTransferPlugin", "CommonPlugin.model$ErrorRec", "Connect2_OrbitMobile_MUI.referencesHealth$CommonPlugin", "FileViewerPlugin.controller$OpenDocumentFromLocalPath", "Connect2_OrbitMobile_MUI.referencesHealth$FileViewerPlugin", "FileTransferPlugin.model$FileDownloadResultRec", "Connect2_OrbitMobile_IS.model$EventDocumentItemRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$EventDocumentItemList", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "Connect2_OrbitMobile_MUI.referencesHealth$UBTJavaScriptUtils", "FileTransferPlugin.model$FileTransferErrorRec", "Connect2_OrbitMobile_IS.model$GetEventDocumentsResponseRec"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, UBTConnect_UtilsController, FileTransferPluginModel, CommonPluginModel, FileViewerPluginController, Connect2_OrbitMobile_ISModel, UBTJavaScriptUtilsController, React, OSView, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_Documents_ScreenBlock_ViewDocuments_mvc_model, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_Documents_ScreenBlock_ViewDocuments_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, OSWidgets, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_LoadingSpinner_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvc_view, FileTransferPlugin_FileTransfer_HandleDownload_mvc_view) {
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
        View.displayName = "Orbit_ScreenBlocks_Documents.ScreenBlock_ViewDocuments";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_LoadingSpinner_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvc_view, FileTransferPlugin_FileTransfer_HandleDownload_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_Documents_ScreenBlock_ViewDocuments_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_Documents_ScreenBlock_ViewDocuments_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, {
inputs: {
CustomClass: "orbit-detail orbit-header-center"
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
MenuAction: Connect2_OrbitMobile_MUIModel.staticEntities.menuAction.auto
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
return [React.createElement(OSWidgets.Expression, {
value: model.variables.in_EventNameIn,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EventNameInDataFetchStatus)
})];
}),
headerRight: PlaceholderContent.Empty,
headerContent: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [$if(!(model.variables.isFetchingDataVar), false, this, function () {
return [$if(!(model.variables.getEventDocumentsDataAct.responseOut.eventDocumentsAttr.isEmpty), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "full-width padding-x-m padding-y-m",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "file-text-o",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
style: "margin-left-base",
text: ["Tap the link/s below to view/download documents"],
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "full-width margin-top-m",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.eventDocumentsVar,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
name: "List_EventDocuments"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks_Documents/ScreenBlock_ViewDocuments/Container onclick");
return controller.onClick_Document$Action(model.variables.eventDocumentsVar.getCurrent(callContext.iterationContext).documentURLAttr, model.variables.eventDocumentsVar.getCurrent(callContext.iterationContext).documentNameAttr, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
extendedProperties: {
className: model.getCachedValue(idService.getId("5mhAMgU6j0qM_l+jRDoIyg.class"), function () {
return ("full-width" + ((((model.variables.eventDocumentsVar.getCurrentRowNumber(callContext.iterationContext)) !== ((model.variables.eventDocumentsVar.length - 1)))) ? (" margin-bottom-m") : ("")));
}, function () {
return model.variables.eventDocumentsVar.getCurrentRowNumber(callContext.iterationContext);
}, function () {
return model.variables.eventDocumentsVar.length;
})
},
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.eventDocumentsVar.getCurrent(callContext.iterationContext).isViewedAttr), asPrimitiveValue(model.variables.eventDocumentsVar.getCurrent(callContext.iterationContext).documentNameAttr)]
}, React.createElement(OSWidgets.Icon, {
icon: "file-pdf-o",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-file-pdf color-orbit-red-5",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
className: model.getCachedValue(idService.getId("RdjjDpPzek+9P_uqNcwPqQ.class"), function () {
return ("margin-left-base underline" + ((!(model.variables.eventDocumentsVar.getCurrent(callContext.iterationContext).isViewedAttr)) ? (" color-orbit-primary-7") : (" text-neutral-7")));
}, function () {
return model.variables.eventDocumentsVar.getCurrent(callContext.iterationContext).isViewedAttr;
})
},
value: model.variables.eventDocumentsVar.getCurrent(callContext.iterationContext).documentNameAttr,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}, callContext, idService, "1")
},
_dependencies: []
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "backwards-compatibility",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_LoadingSpinner_mvc_view, {
inputs: {
IsProcessingData: model.variables.isLoadingDocumentVar
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
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}, function () {
return [$if(model.variables.getEventDocumentsDataAct.isDataFetchedAttr, false, this, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, {
inputs: {
Message: "There are no documents available for this event at the moment. For any enquiries please contact the event organiser."
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
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
})];
})];
}, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, {
inputs: {
In_SkeletonLoadingId: Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.viewDocument
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
uuid: "16",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
}),
bottomBar: new PlaceholderContent(function () {
return [$if(!(model.variables.eventDocumentsVar.isEmpty), false, this, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
click$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/ContactHelpdesk_Footer Click");
return controller.onHandle_ContactHelpdesk$Action(controller.callContext(eventHandlerContext));
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
uuid: "17",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
})];
}),
commonUI_Elements: new PlaceholderContent(function () {
return [React.createElement(FileTransferPlugin_FileTransfer_HandleDownload_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
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
},
onDownloadComplete$Action: function (fileDownloadResultIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "FileTransfer/HandleDownload OnDownloadComplete");
return controller.handleDownloadOnDownloadComplete$Action(fileDownloadResultIn, controller.callContext(eventHandlerContext));
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
uuid: "18",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Placeholder, {
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
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_Documents.ScreenBlock_ViewDocuments.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "UBTConnect_Utils.controller", "FileTransferPlugin.model", "CommonPlugin.model", "FileViewerPlugin.controller", "Connect2_OrbitMobile_IS.model", "UBTJavaScriptUtils.controller", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_Documents.ScreenBlock_ViewDocuments.mvc$debugger", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_Documents.ScreenBlock_ViewDocuments.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", "Connect2_OrbitMobile_MUI.model$EventDocumentItem_ScreenList", "UBTConnect_Utils.controller$OpenInApp_TryOpenFileInApp", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$UBTConnect_Utils", "Connect2_OrbitMobile_MUI.controller$AddExtensionToFile", "Connect2_OrbitMobile_MUI.controller$GetContactHelpdeskSubject_Event", "FileTransferPlugin.model$ProgressRec", "Connect2_OrbitMobile_MUI.referencesHealth$FileTransferPlugin", "CommonPlugin.model$ErrorRec", "Connect2_OrbitMobile_MUI.referencesHealth$CommonPlugin", "FileViewerPlugin.controller$OpenDocumentFromLocalPath", "Connect2_OrbitMobile_MUI.referencesHealth$FileViewerPlugin", "FileTransferPlugin.model$FileDownloadResultRec", "Connect2_OrbitMobile_IS.model$EventDocumentItemRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$EventDocumentItemList", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "Connect2_OrbitMobile_MUI.referencesHealth$UBTJavaScriptUtils", "FileTransferPlugin.model$FileTransferErrorRec", "Connect2_OrbitMobile_IS.model$GetEventDocumentsResponseRec"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, UBTConnect_UtilsController, FileTransferPluginModel, CommonPluginModel, FileViewerPluginController, Connect2_OrbitMobile_ISModel, UBTJavaScriptUtilsController, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_Documents_ScreenBlock_ViewDocuments_mvc_Debugger, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_Documents_ScreenBlock_ViewDocuments_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
getEventDocuments$DataActRefresh: -1
};
this.dataFetchDependentsGraph = {
getEventDocuments$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions
Controller.prototype.getEventDocuments$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:X1tk_MxSWUecmJj8_NbWhQ:/NRWebFlows.G6RurzpZl0iMC1nQx0GJJQ/NodesShownInESpaceTree.1_889PqmHUq3if+k+eOHaA/DataActions.X1tk_MxSWUecmJj8_NbWhQ:_ljgN9XZ3FiQnrLIi6ZjAw", "Connect2_OrbitMobile_MUI", "GetEventDocuments", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_Documents/ScreenBlock_ViewDocuments/GetEventDocuments");
return controller.callDataAction("DataActionGetEventDocuments", "screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks_Documents/ScreenBlock_ViewDocuments/DataActionGetEventDocuments", "bmmO7NNcz7HpzCEebUtdwg", function (b) {
model.variables.getEventDocumentsDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getEventDocumentsDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getEventDocumentsDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_Documents/ScreenBlock_ViewDocuments/GetEventDocuments On After Fetch");
controller._onAfterFetch_GetEventDocuments$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:X1tk_MxSWUecmJj8_NbWhQ", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getEventDocuments$DataActRefresh"];
// Client Actions
Controller.prototype._onClick_Document$Action = function (in_DocumentURLIn, in_DocumentNameIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_Document");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_Documents.ScreenBlock_ViewDocuments.OnClick_Document$vars"))());
vars.value.in_DocumentURLInLocal = in_DocumentURLIn;
vars.value.in_DocumentNameInLocal = in_DocumentNameIn;
var unknownErrorVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var openInApp_TryOpenFileInAppVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.unknownErrorVar = unknownErrorVar;
varBag.openInApp_TryOpenFileInAppVar = openInApp_TryOpenFileInAppVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:2xdlA_XV2kCbxf6xahsTRg:/NRWebFlows.G6RurzpZl0iMC1nQx0GJJQ/NodesShownInESpaceTree.1_889PqmHUq3if+k+eOHaA/ClientActions.2xdlA_XV2kCbxf6xahsTRg:EE5LEqYRVPLDAu0MC_SGHA", "Connect2_OrbitMobile_MUI", "OnClick_Document", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:E2m9psQRuE2ydfOzz73vLA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:sf28waDMs0m_mGD8bn6Rrw", callContext.id) && model.variables.isLoadingDocumentVar)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:m6BxZpvv1Ue+A6SkJCdu_g", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1Gz7LKUadE+1d6055X9Sdw", callContext.id);
// IsLoadingDocument = True
model.variables.isLoadingDocumentVar = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mRFnYcYfdUeb8eZWF0iEEw", callContext.id);
// Execute Action: OpenInApp_TryOpenFileInApp
model.flush();
return UBTConnect_UtilsController.default.openInApp_TryOpenFileInApp$Action(OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.addExtensionToFile$Action(vars.value.in_DocumentNameInLocal, Connect2_OrbitMobile_MUIModel.staticEntities.fileExtension.pDF, callContext).fileWithExtensionOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), vars.value.in_DocumentURLInLocal, "orbit-documents", "pdf", callContext).then(function (value) {
openInApp_TryOpenFileInAppVar.value = value;
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:o6tdhtO3oEmyb0ISue3zUw", callContext.id) && openInApp_TryOpenFileInAppVar.value.isInAppOut)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1F8oIyA93kWIPHrYNPoLZQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IQ0wqtnAlE22OrKE0+RVJg", callContext.id);
// Execute Action: Action_OpenDoc
controller._action_OpenDoc$Action(vars.value.in_DocumentNameInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:b_sh8HNlbEayZVP5yfpYUg", callContext.id);
// IsLoadingDocument = False
model.variables.isLoadingDocumentVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zYP_hml7M02SpHuK0TosZA", callContext.id);
}

});
}

});
}).catch(function (ex) {
OS.Logger.trace("ScreenBlock_ViewDocuments.OnClick_Document", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: UnknownError
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.UserException, "Connect2_OrbitMobile_MUI.UnknownError")) {
unknownErrorVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(unknownErrorVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:taf0g14bGUKJdz6pEhHMpA", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:D6J536mbrUGTZx1O9wWJPw", callContext.id);
// IsLoadingDocument = False
model.variables.isLoadingDocumentVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xsFAuuQz2UW_6DxLTgFlGw", callContext.id);
// Raise Error: UnknownError
throw new OS.Exceptions.Exceptions.UserException("Connect2_OrbitMobile_MUI.UnknownError", unknownErrorVar.value.exceptionMessageAttr);
});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:2xdlA_XV2kCbxf6xahsTRg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:2xdlA_XV2kCbxf6xahsTRg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_Documents.ScreenBlock_ViewDocuments.OnClick_Document$vars", [{
name: "In_DocumentURL",
attrName: "in_DocumentURLInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_DocumentName",
attrName: "in_DocumentNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._action_OpenDoc$Action = function (docNameIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_OpenDoc");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_Documents.ScreenBlock_ViewDocuments.Action_OpenDoc$vars"))());
vars.value.docNameInLocal = docNameIn;
var listIndexOf_SelectedDocumentVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.listIndexOf_SelectedDocumentVar = listIndexOf_SelectedDocumentVar;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:dBkYDvdSDUqELwMRj1ASDg:/NRWebFlows.G6RurzpZl0iMC1nQx0GJJQ/NodesShownInESpaceTree.1_889PqmHUq3if+k+eOHaA/ClientActions.dBkYDvdSDUqELwMRj1ASDg:akTlmwctb66nmOp2TfY7og", "Connect2_OrbitMobile_MUI", "Action_OpenDoc", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:aLaeGL2Fy0SrQcfGtn553w", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Hv+FpNPyPEWqmbOdS5E4Xw", callContext.id);
// IsLoadingDocument = False
model.variables.isLoadingDocumentVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Mx8+K_dx3EqAYKbWa7IC9g", callContext.id);
// Execute Action: ListIndexOf_SelectedDocument
listIndexOf_SelectedDocumentVar.value = OS.SystemActions.listIndexOf(model.variables.eventDocumentsVar, function (p) {
return ((p.documentNameAttr === vars.value.docNameInLocal) || (vars.value.docNameInLocal === OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.addExtensionToFile$Action(p.documentNameAttr, Connect2_OrbitMobile_MUIModel.staticEntities.fileExtension.pDF, callContext).fileWithExtensionOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)));
}, callContext);

// Found?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ByRd72x2w0mQcTnS01PeOg", callContext.id) && ((listIndexOf_SelectedDocumentVar.value.positionOut) !== (-1)))) {
// Set IsViewed
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:hm8VBCNlmk2DC0dgiNBvYg", callContext.id);
// EventDocuments[ListIndexOf_SelectedDocument.Position].IsViewed = True
model.variables.eventDocumentsVar.getItem(listIndexOf_SelectedDocumentVar.value.positionOut).isViewedAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xYGekU0q6kWzi0ut+riWtg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lyfvZPwgcUuVbNLT0MGBYQ", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:dBkYDvdSDUqELwMRj1ASDg", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_Documents.ScreenBlock_ViewDocuments.Action_OpenDoc$vars", [{
name: "DocName",
attrName: "docNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onHandle_ContactHelpdesk$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_ContactHelpdesk");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:izwxRhbn8Eibnrmv2DxJug:/NRWebFlows.G6RurzpZl0iMC1nQx0GJJQ/NodesShownInESpaceTree.1_889PqmHUq3if+k+eOHaA/ClientActions.izwxRhbn8Eibnrmv2DxJug:FHrawD9HdiIPC2H8fxRM1g", "Connect2_OrbitMobile_MUI", "OnHandle_ContactHelpdesk", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:O1AMjR_8kEeJcNfio+kzag", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Lz31MXUZv0K5TmWGxIqvLQ", callContext.id);
// Trigger Event: ContactHelpdesk
return controller.contactHelpdesk$Action(OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getContactHelpdeskSubject_Event$Action(model.variables.in_EventNameIn, model.variables.in_EventStartDateIn, model.variables.in_EventEndDateIn, model.variables.in_EventLocationIn, callContext).out_FormattedSubjectOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), model.variables.in_EventNameIn, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pGY60qraikq8w96rEA6kkw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:izwxRhbn8Eibnrmv2DxJug", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:izwxRhbn8Eibnrmv2DxJug", callContext.id);
throw ex;

});
};
Controller.prototype._handleDownloadOnDownloadProgress$Action = function (progressIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("HandleDownloadOnDownloadProgress");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_Documents.ScreenBlock_ViewDocuments.HandleDownloadOnDownloadProgress$vars"))());
vars.value.progressInLocal = progressIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:LtE4iJSmOUywCKiV8qnYfw:/NRWebFlows.G6RurzpZl0iMC1nQx0GJJQ/NodesShownInESpaceTree.1_889PqmHUq3if+k+eOHaA/ClientActions.LtE4iJSmOUywCKiV8qnYfw:ZnrBkxRxQ5NNKvlD1Z3lJA", "Connect2_OrbitMobile_MUI", "HandleDownloadOnDownloadProgress", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jMnTh8R3GkKCS5QgcjL60g", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mEkTlz9wz0eL9XINXECMBA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:LtE4iJSmOUywCKiV8qnYfw", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_Documents.ScreenBlock_ViewDocuments.HandleDownloadOnDownloadProgress$vars", [{
name: "Progress",
attrName: "progressInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new FileTransferPluginModel.ProgressRec();
},
complexType: FileTransferPluginModel.ProgressRec
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
var wasCurrentViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.wasCurrentViewRestoredFromCacheJSResult = wasCurrentViewRestoredFromCacheJSResult;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Dqq2p0SToUKxgNORV9ecqQ:/NRWebFlows.G6RurzpZl0iMC1nQx0GJJQ/NodesShownInESpaceTree.1_889PqmHUq3if+k+eOHaA/ClientActions.Dqq2p0SToUKxgNORV9ecqQ:7q4qNkTVY3M2+P4zy2OXTw", "Connect2_OrbitMobile_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pcMh0iSAPEGOEi11nD6yUw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:li1rPxuWCUWRYMx_QbkOIQ", callContext.id);
wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_Documents_ScreenBlock_ViewDocuments_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnReady", {
FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_Documents.ScreenBlock_ViewDocuments.OnReady$wasCurrentViewRestoredFromCacheJSResult"))();
jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gjfNwHChYkGALSgaRbCgJw", callContext.id) && !(wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8eNhdqfRNUmdqiBbMAFXkw", callContext.id);
// IsFetchingData = True
model.variables.isFetchingDataVar = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_0zk8gsD8kaH249LfXMk0w", callContext.id);
// Execute Action: RefreshDocumentData
return controller._refreshDocumentData$Action(callContext);
}

}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KHRX7CqpjU2RkafXzfk9BA", callContext.id);
// IsFetchingData = False
model.variables.isFetchingDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DGRCQf5_r0GENJp1By4G0Q", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Dqq2p0SToUKxgNORV9ecqQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Dqq2p0SToUKxgNORV9ecqQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_Documents.ScreenBlock_ViewDocuments.OnReady$wasCurrentViewRestoredFromCacheJSResult", [{
name: "FromCache",
attrName: "fromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._handleDownloadOnDownloadComplete$Action = function (fileDownloadResultIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("HandleDownloadOnDownloadComplete");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_Documents.ScreenBlock_ViewDocuments.HandleDownloadOnDownloadComplete$vars"))());
vars.value.fileDownloadResultInLocal = fileDownloadResultIn.clone();
var openDocumentFromLocalPathVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.openDocumentFromLocalPathVar = openDocumentFromLocalPathVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:VgT9q+VfBUaxcvVx9TPtfg:/NRWebFlows.G6RurzpZl0iMC1nQx0GJJQ/NodesShownInESpaceTree.1_889PqmHUq3if+k+eOHaA/ClientActions.VgT9q+VfBUaxcvVx9TPtfg:SP4+QlJFS6Gt_+MCY9IKnw", "Connect2_OrbitMobile_MUI", "HandleDownloadOnDownloadComplete", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pvcpPMw2O0OZdP_oK7HXHw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UsY1t_KpvEidU34WPlhzxA", callContext.id);
// Execute Action: OpenDocumentFromLocalPath
model.flush();
return FileViewerPluginController.default.openDocumentFromLocalPath$Action(vars.value.fileDownloadResultInLocal.fullPathAttr, "", "", callContext).then(function (value) {
openDocumentFromLocalPathVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nsuIJ7WTCUSmnNiVIZFPGQ", callContext.id);
// Execute Action: Action_OpenDoc
controller._action_OpenDoc$Action(vars.value.fileDownloadResultInLocal.nameAttr, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Pn7HfZGZO0G+wHruphF4IQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:VgT9q+VfBUaxcvVx9TPtfg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:VgT9q+VfBUaxcvVx9TPtfg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_Documents.ScreenBlock_ViewDocuments.HandleDownloadOnDownloadComplete$vars", [{
name: "FileDownloadResult",
attrName: "fileDownloadResultInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new FileTransferPluginModel.FileDownloadResultRec();
},
complexType: FileTransferPluginModel.FileDownloadResultRec
}]);
Controller.prototype._onAfterFetch_GetEventDocuments$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnAfterFetch_GetEventDocuments");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:xeap1E6Yt0efMPkSbzOauQ:/NRWebFlows.G6RurzpZl0iMC1nQx0GJJQ/NodesShownInESpaceTree.1_889PqmHUq3if+k+eOHaA/ClientActions.xeap1E6Yt0efMPkSbzOauQ:Mw0b5a+csl+tabIMkkapig", "Connect2_OrbitMobile_MUI", "OnAfterFetch_GetEventDocuments", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:psH07U3HnUSgp1QOfKymGg", callContext.id);
// Set Screen Data
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vTey3ySJjU+adng738JDNQ", callContext.id);
// EventDocuments = GetEventDocuments.Response.EventDocuments
model.variables.eventDocumentsVar = OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getEventDocumentsDataAct.responseOut.eventDocumentsAttr, new Connect2_OrbitMobile_MUIModel.EventDocumentItem_ScreenList(), function (source, target) {
target.documentURLAttr = source.documentURLAttr;
target.documentNameAttr = source.documentNameAttr;
target.lastUpdatedOnAttr = source.lastUpdatedOnAttr;
target.lastUpdatedByAttr = source.lastUpdatedByAttr;
target.isViewedAttr = false;
return target;
});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4Kfx7MryNke7k87xSXpp3w", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:xeap1E6Yt0efMPkSbzOauQ", callContext.id);
}

};
Controller.prototype._handleDownloadOnDownloadError$Action = function (fileTransferErrorIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("HandleDownloadOnDownloadError");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_Documents.ScreenBlock_ViewDocuments.HandleDownloadOnDownloadError$vars"))());
vars.value.fileTransferErrorInLocal = fileTransferErrorIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:fGpn5nlhr0Gf8b5PrA9BLQ:/NRWebFlows.G6RurzpZl0iMC1nQx0GJJQ/NodesShownInESpaceTree.1_889PqmHUq3if+k+eOHaA/ClientActions.fGpn5nlhr0Gf8b5PrA9BLQ:yAICeHW+uWQnjzvrtqSdHQ", "Connect2_OrbitMobile_MUI", "HandleDownloadOnDownloadError", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+Z5visOvGUqjtKo+zHYyhQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:EdgNakJgRky4yzC94U3NOQ", callContext.id);
// IsLoadingDocument = False
model.variables.isLoadingDocumentVar = false;
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GIxLdU7lxEukPy2HiBASow", callContext.id) && (vars.value.fileTransferErrorInLocal.messageAttr === "Document not found"))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:I+VGH3JA_ECzDH3wNCYI1Q", callContext.id);
// Message = "The file you are trying to open is no longer available and cannot be opened."
vars.value.messageVar = "The file you are trying to open is no longer available and cannot be opened.";
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VbE4YkQoTUqlFAUR776CUA", callContext.id);
// Message = "Unfortunately this file could not be opened. Please try again at a later time."
vars.value.messageVar = "Unfortunately this file could not be opened. Please try again at a later time.";
}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6avQjcy4hkW48Da9rNvMVQ", callContext.id);
// Execute Action: FeedbackMessage_AutoClose
UBTJavaScriptUtilsController.default.feedbackMessage_AutoClose$Action("", vars.value.fileTransferErrorInLocal.messageAttr, Connect2_OrbitMobile_MUIModel.staticEntities.uBT_MessageType.info, true, "", 0, false, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RQwaLn0TwEWhKg0WLPlfXQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:fGpn5nlhr0Gf8b5PrA9BLQ", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_Documents.ScreenBlock_ViewDocuments.HandleDownloadOnDownloadError$vars", [{
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
Controller.prototype._refreshDocumentData$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("RefreshDocumentData");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:8XPp_3mkSE26GVZU4yvUZA:/NRWebFlows.G6RurzpZl0iMC1nQx0GJJQ/NodesShownInESpaceTree.1_889PqmHUq3if+k+eOHaA/ClientActions.8XPp_3mkSE26GVZU4yvUZA:2s4fycajlQHGDr_gSskO5A", "Connect2_OrbitMobile_MUI", "RefreshDocumentData", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:saMbWV8kQ0O9cQDxaYS7rQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_EN8YO+vM0CEkfU78uOHTQ", callContext.id);
// Refresh Query: GetEventDocuments
var result = controller.getEventDocuments$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:48u3wowj4UW_FtRrTjH0yg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:8XPp_3mkSE26GVZU4yvUZA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:8XPp_3mkSE26GVZU4yvUZA", callContext.id);
throw ex;

});
};

Controller.prototype.onClick_Document$Action = function (in_DocumentURLIn, in_DocumentNameIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_Document$Action, callContext, in_DocumentURLIn, in_DocumentNameIn);

};
Controller.prototype.action_OpenDoc$Action = function (docNameIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_OpenDoc$Action, callContext, docNameIn);

};
Controller.prototype.onHandle_ContactHelpdesk$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ContactHelpdesk$Action, callContext);

};
Controller.prototype.handleDownloadOnDownloadProgress$Action = function (progressIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handleDownloadOnDownloadProgress$Action, callContext, progressIn);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.handleDownloadOnDownloadComplete$Action = function (fileDownloadResultIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handleDownloadOnDownloadComplete$Action, callContext, fileDownloadResultIn);

};
Controller.prototype.onAfterFetch_GetEventDocuments$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onAfterFetch_GetEventDocuments$Action, callContext);

};
Controller.prototype.handleDownloadOnDownloadError$Action = function (fileTransferErrorIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handleDownloadOnDownloadError$Action, callContext, fileTransferErrorIn);

};
Controller.prototype.refreshDocumentData$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._refreshDocumentData$Action, callContext);

};
Controller.prototype.contactHelpdesk$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:G6RurzpZl0iMC1nQx0GJJQ:/NRWebFlows.G6RurzpZl0iMC1nQx0GJJQ:7KuGvabOcYbiwhpnF3PPiw", "Connect2_OrbitMobile_MUI", "Orbit_ScreenBlocks_Documents", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:1_889PqmHUq3if+k+eOHaA:/NRWebFlows.G6RurzpZl0iMC1nQx0GJJQ/NodesShownInESpaceTree.1_889PqmHUq3if+k+eOHaA:LWuN1qyKnJauTXnF8rN7Fg", "Connect2_OrbitMobile_MUI", "ScreenBlock_ViewDocuments", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:1_889PqmHUq3if+k+eOHaA", callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:G6RurzpZl0iMC1nQx0GJJQ", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_Documents/ScreenBlock_ViewDocuments On Ready");
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
return Connect2_OrbitMobile_MUIController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, Connect2_OrbitMobile_MUILanguageResources);
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_Documents.ScreenBlock_ViewDocuments.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
};
});

define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_Documents.ScreenBlock_ViewDocuments.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"4MtHhwM7tEirjSUVk4TIEw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_DocumentURLInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"3ASt0AHG9kK0OmmP48ma6A": {
getter: function (varBag, idService) {
return varBag.vars.value.in_DocumentNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"taf0g14bGUKJdz6pEhHMpA": {
getter: function (varBag, idService) {
return varBag.unknownErrorVar.value;
}
},
"mRFnYcYfdUeb8eZWF0iEEw": {
getter: function (varBag, idService) {
return varBag.openInApp_TryOpenFileInAppVar.value;
}
},
"XkUyKor5Z0WBgnP+iiym4w": {
getter: function (varBag, idService) {
return varBag.vars.value.docNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Mx8+K_dx3EqAYKbWa7IC9g": {
getter: function (varBag, idService) {
return varBag.listIndexOf_SelectedDocumentVar.value;
}
},
"GnwgS7E4aUCCUEhrnvmZfw": {
getter: function (varBag, idService) {
return varBag.vars.value.progressInLocal;
}
},
"li1rPxuWCUWRYMx_QbkOIQ": {
getter: function (varBag, idService) {
return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
}
},
"dHddyZZF5EOMSNcY69mTow": {
getter: function (varBag, idService) {
return varBag.vars.value.fileDownloadResultInLocal;
}
},
"UsY1t_KpvEidU34WPlhzxA": {
getter: function (varBag, idService) {
return varBag.openDocumentFromLocalPathVar.value;
}
},
"16eTQsUJbkCCBrt11OKEiQ": {
getter: function (varBag, idService) {
return varBag.vars.value.messageVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"IcP4pKA6cEyDyBzNZUAI0Q": {
getter: function (varBag, idService) {
return varBag.vars.value.fileTransferErrorInLocal;
}
},
"cHCXYK0+QUqB8O9iVm26nQ": {
getter: function (varBag, idService) {
return varBag.model.variables.eventDocumentsVar;
}
},
"EVQvCp+YsUe3zxhDwRVJtw": {
getter: function (varBag, idService) {
return varBag.model.variables.isFetchingDataVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"RaF+KnFti0C1NxG1+q0kag": {
getter: function (varBag, idService) {
return varBag.model.variables.isLoadingDocumentVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"a8VL6TchI0S5GCBqOScvvg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MemberIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"SAoGZUqC0UyAgpYWmOYVWQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"gZePeiXAK0y+88SwlDss8g": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"v8SjqcpvgUawQFv7iY5i4w": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventLocationIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"gCErdErMEUqyNS03pEdtPw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventStartDateIn;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"tilzKN7M+kqad4OxjI3YMQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventEndDateIn;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"X1tk_MxSWUecmJj8_NbWhQ": {
getter: function (varBag, idService) {
return varBag.model.variables.getEventDocumentsDataAct;
}
},
"VwtEkCY5ik+n_HjSby72cg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"Na4rvmSRSUegIO2lJFWEAg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"GWmZ8keQEEqwm93mvG6GBg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderLeft"));
})(varBag.model, idService);
}
},
"4XmTy_YSckOieDf6C8bNpg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"5x3MCI+KiE6w_JwhXKeMvw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderRight"));
})(varBag.model, idService);
}
},
"zHbIH8O2R0+cKssO2O_5lg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"GiBumcoBb0KA68eSrV6qKg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"hpjd5nL5MU6GbNjZXx1jYw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsNotFetching"));
})(varBag.model, idService);
}
},
"S979MZptOESLUG4FxLCF1A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasDocuments"));
})(varBag.model, idService);
}
},
"jZ8_gboVLU6xZL+hZtt7UQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("List_EventDocuments"));
})(varBag.model, idService);
}
},
"omOrO8nybEGOg1G42CdGlA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasFetchedData"));
})(varBag.model, idService);
}
},
"xLbJqTWpeEKyIL6o8qQPIw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomBar"));
})(varBag.model, idService);
}
},
"gyYjrQ_h_Eu96pBvSgC0fQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_APIHasData"));
})(varBag.model, idService);
}
},
"oJ+Z22jWVESt1cbmMhzYUw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
},
"Dr8FntmtU02reKNih7LsiA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
