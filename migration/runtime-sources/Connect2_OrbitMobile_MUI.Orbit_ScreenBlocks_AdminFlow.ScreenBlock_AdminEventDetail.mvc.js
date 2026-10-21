define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "APIDomain_Directory_IS.model", "UBT_AppManager.model", "UBT_AppManager.controller", "Connect2_LegacyShared.controller", "CommonPlugin.model", "BarcodePlugin.controller", "BarcodePlugin.model", "Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$model", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Popup_QRCodeScan.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.OrbitErrorMessage.mvc$model", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTime", "Connect2_OrbitMobile_IS.model$QRCodeStatusRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_BL.model$ScannedUserRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_BL.model$OrbitEventTypeRec", "Connect2_OrbitMobile_MUI.model$TextBooleanRecord", "APIDomain_Directory_IS.model$Directory_MemberByIdRec", "Connect2_OrbitMobile_MUI.referencesHealth$APIDomain_Directory_IS", "Connect2_OrbitMobile_IS.model$QRCodeSeatItemRec", "Connect2_OrbitMobile_MUI.model$QRCodeSeatItemList", "Connect2_OrbitMobile_MUI.model$AuditPayload_QRCodeScannedRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_QRCodeScanned", "Connect2_OrbitMobile_BL.model$ScannedQRCodeInfoRec", "Connect2_OrbitMobile_IS.model$GetScanEventQRCodeResponseRec", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "Connect2_LegacyShared.controller$GetCacheableSignedImageURL", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_BL.model$ScannerAdminInfoRec", "Connect2_OrbitMobile_BL.model$ScannedUserInformationRec", "Connect2_OrbitMobile_MUI.model$QRCodeInformationRec", "CommonPlugin.model$ErrorRec", "Connect2_OrbitMobile_MUI.referencesHealth$CommonPlugin", "BarcodePlugin.controller$CheckBarcodePlugin", "Connect2_OrbitMobile_MUI.referencesHealth$BarcodePlugin", "BarcodePlugin.model$ScanResultRec", "BarcodePlugin.controller$ScanBarcode", "Connect2_OrbitMobile_MUI.model$AuditPayload_LaunchQRCodeScannerRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_LaunchQRCodeScanner", "Connect2_LegacyShared.controller$CopyClassesAcrossPortal"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel, APIDomain_Directory_ISModel, UBT_AppManagerModel, UBT_AppManagerController, Connect2_LegacySharedController, CommonPluginModel, BarcodePluginController, BarcodePluginModel, Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvcModel, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_Popup_QRCodeScan_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_OrbitErrorMessage_mvcModel) {
var OS = OutSystems.Internal;

var Get_EventInformationDataActRec = (function (_super) {
__extends(Get_EventInformationDataActRec, _super);
function Get_EventInformationDataActRec(defaults) {
_super.apply(this, arguments);
}
Get_EventInformationDataActRec.attributesToDeclare = function () {
return [
this.attr("HasQRCode", "hasQRCodeOut", "HasQRCode", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("OrbitEventType", "orbitEventTypeOut", "OrbitEventType", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.OrbitEventTypeRec());
}, true, Connect2_OrbitMobile_BLModel.OrbitEventTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
Get_EventInformationDataActRec.init();
return Get_EventInformationDataActRec;
})(OS.Model.DataSourceRecord);

var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsFetchingData", "isFetchingDataVar", "IsFetchingData", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsProcessingData", "isProcessingDataVar", "IsProcessingData", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("ScanResult", "scanResultVar", "ScanResult", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.QRCodeStatusRec());
}, false, Connect2_OrbitMobile_ISModel.QRCodeStatusRec), 
this.attr("ScannedUser", "scannedUserVar", "ScannedUser", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.ScannedUserRec());
}, false, Connect2_OrbitMobile_BLModel.ScannedUserRec), 
this.attr("EventType", "eventTypeVar", "EventType", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.OrbitEventTypeRec());
}, false, Connect2_OrbitMobile_BLModel.OrbitEventTypeRec), 
this.attr("QRCodePopupOpened", "qRCodePopupOpenedVar", "QRCodePopupOpened", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("ScanError", "scanErrorVar", "ScanError", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.TextBooleanRecord());
}, false, Connect2_OrbitMobile_MUIModel.TextBooleanRecord), 
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
this.attr("In_EventLocation", "in_EventLocationIn", "In_EventLocation", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_EventLocationInDataFetchStatus", "_in_EventLocationInDataFetchStatus", "_in_EventLocationInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_EventTypeFriendly", "in_EventTypeFriendlyIn", "In_EventTypeFriendly", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_EventTypeFriendlyInDataFetchStatus", "_in_EventTypeFriendlyInDataFetchStatus", "_in_EventTypeFriendlyInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Get_EventInformation", "get_EventInformationDataAct", "get_EventInformationDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Get_EventInformationDataActRec());
}, true, Get_EventInformationDataActRec)
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
Model._hasValidationWidgetsValue = (((((Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvcModel.hasValidationWidgets || Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_Popup_QRCodeScan_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_OrbitErrorMessage_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
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

if("In_EventLocation" in inputs) {
this.variables.in_EventLocationIn = inputs.In_EventLocation;
if("_in_EventLocationInDataFetchStatus" in inputs) {
this.variables._in_EventLocationInDataFetchStatus = inputs._in_EventLocationInDataFetchStatus;
}

}

if("In_EventTypeFriendly" in inputs) {
this.variables.in_EventTypeFriendlyIn = inputs.In_EventTypeFriendly;
if("_in_EventTypeFriendlyInDataFetchStatus" in inputs) {
this.variables._in_EventTypeFriendlyInDataFetchStatus = inputs._in_EventTypeFriendlyInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail");
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "APIDomain_Directory_IS.model", "UBT_AppManager.model", "UBT_AppManager.controller", "Connect2_LegacyShared.controller", "CommonPlugin.model", "BarcodePlugin.controller", "BarcodePlugin.model", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Popup_QRCodeScan.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.OrbitErrorMessage.mvc$view", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTime", "Connect2_OrbitMobile_IS.model$QRCodeStatusRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_BL.model$ScannedUserRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_BL.model$OrbitEventTypeRec", "Connect2_OrbitMobile_MUI.model$TextBooleanRecord", "APIDomain_Directory_IS.model$Directory_MemberByIdRec", "Connect2_OrbitMobile_MUI.referencesHealth$APIDomain_Directory_IS", "Connect2_OrbitMobile_IS.model$QRCodeSeatItemRec", "Connect2_OrbitMobile_MUI.model$QRCodeSeatItemList", "Connect2_OrbitMobile_MUI.model$AuditPayload_QRCodeScannedRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_QRCodeScanned", "Connect2_OrbitMobile_BL.model$ScannedQRCodeInfoRec", "Connect2_OrbitMobile_IS.model$GetScanEventQRCodeResponseRec", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "Connect2_LegacyShared.controller$GetCacheableSignedImageURL", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_BL.model$ScannerAdminInfoRec", "Connect2_OrbitMobile_BL.model$ScannedUserInformationRec", "Connect2_OrbitMobile_MUI.model$QRCodeInformationRec", "CommonPlugin.model$ErrorRec", "Connect2_OrbitMobile_MUI.referencesHealth$CommonPlugin", "BarcodePlugin.controller$CheckBarcodePlugin", "Connect2_OrbitMobile_MUI.referencesHealth$BarcodePlugin", "BarcodePlugin.model$ScanResultRec", "BarcodePlugin.controller$ScanBarcode", "Connect2_OrbitMobile_MUI.model$AuditPayload_LaunchQRCodeScannerRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_LaunchQRCodeScanner", "Connect2_LegacyShared.controller$CopyClassesAcrossPortal"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel, APIDomain_Directory_ISModel, UBT_AppManagerModel, UBT_AppManagerController, Connect2_LegacySharedController, CommonPluginModel, BarcodePluginController, BarcodePluginModel, React, OSView, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminEventDetail_mvc_model, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminEventDetail_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, OSWidgets, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Popup_QRCodeScan_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_OrbitErrorMessage_mvc_view) {
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
        View.displayName = "Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/Connect2_OrbitMobile_MUI.TimeFormat.js"];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Popup_QRCodeScan_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_OrbitErrorMessage_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminEventDetail_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminEventDetail_mvc_controller;
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
CustomClass: "orbit-detail"
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
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon menu-icon-Orbit",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.in_EventNameIn,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EventNameInDataFetchStatus)
}))];
}),
headerRight: PlaceholderContent.Empty,
headerContent: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [$if(!(model.variables.isFetchingDataVar), false, this, function () {
return [$if(model.variables.get_EventInformationDataAct.isDataFetchedAttr, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "font-size-0-9em padding-x-m padding-y-m",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "flex-center-vertical",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-date-time",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "margin-left-base",
value: model.getCachedValue(idService.getId("bFT2x81plkuoE9BNgwr0AQ.Value"), function () {
return ((OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedDateTime$Action(model.variables.in_EventStartDateIn, false, true, false, true, false, false, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id) + " - ") + OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedDateTime$Action(model.variables.in_EventEndDateIn, false, true, false, true, false, false, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id));
}, function () {
return model.variables.in_EventStartDateIn;
}, function () {
return model.variables.in_EventEndDateIn;
}),
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EventStartDateInDataFetchStatus, model.variables._in_EventEndDateInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "flex-center-vertical margin-top-m",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-location",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "margin-left-base",
value: model.variables.in_EventLocationIn,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EventLocationInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "flex-center-vertical margin-top-m",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-host-guest",
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "margin-left-base",
value: model.variables.eventTypeVar.typeAttr,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "flex-center-vertical margin-top-m",
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-window",
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "margin-left-base",
value: model.variables.in_EventTypeFriendlyIn,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EventTypeFriendlyInDataFetchStatus)
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "orbit-spinner-cont",
visible: model.variables.isProcessingDataVar,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "spinner",
iconSize: /*Twotimes*/ 1,
style: "icon orbit-spinner-icon",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
style: "bold margin-top-base",
text: ["Loading"],
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "full-width padding-xl text-align-center",
visible: (model.variables.get_EventInformationDataAct.hasQRCodeOut && !(model.variables.isProcessingDataVar)),
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.get_EventInformationDataAct.dataFetchStatusAttr)
}, React.createElement(OSWidgets.Button, {
enabled: true,
isDefault: false,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminEventDetail/Button OnClick");
return controller.onClick_ScanQrCode$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
style: "btn btn-primary",
visible: true,
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "qrcode",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
style: "margin-left-s",
text: ["Scan QR Code"],
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "RootPlaceholder_QRCode"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
"componentDidUpdate": function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminEventDetail/Root_QRCode componentDidUpdate");
controller.componentDidUpdate_QRCode$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
style: "backwards-compatibility",
visible: true,
_idProps: {
service: idService,
name: "Root_QRCode"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Popup, {
showPopup: model.variables.qRCodePopupOpenedVar,
style: "popup-dialog",
_idProps: {
service: idService,
name: "Popup_QRCode"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_Popup_QRCodeScan_mvc_view, {
inputs: {
ScannedUser: model.variables.scannedUserVar,
ScanResult: model.variables.scanResultVar,
EventName: model.variables.in_EventNameIn,
_eventNameInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EventNameInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_Done$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/Popup_QRCodeScan Event_Done");
return controller.onHandle_ScanEventDone$Action(controller.callContext(eventHandlerContext));
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
uuid: "30",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))))];
}, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, {
inputs: {
Message: "The Event is no longer available for you."
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
uuid: "31",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
}, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, {
inputs: {
In_SkeletonLoadingId: Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.adminEventDetails
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
uuid: "32",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "backwards-compatibility",
visible: true,
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_OrbitErrorMessage_mvc_view, {
inputs: {
IsShowMessage: model.variables.scanErrorVar.isShowErrorMessageAttr,
DisplayMessage: model.variables.scanErrorVar.messageAttr
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
clickedOk$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Generic_Blocks/OrbitErrorMessage ClickedOk");
return controller.onHandle_OrbitErrorMessage$Action(controller.callContext(eventHandlerContext));
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
uuid: "34",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
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
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "APIDomain_Directory_IS.model", "UBT_AppManager.model", "UBT_AppManager.controller", "Connect2_LegacyShared.controller", "CommonPlugin.model", "BarcodePlugin.controller", "BarcodePlugin.model", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail.mvc$debugger", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTime", "Connect2_OrbitMobile_IS.model$QRCodeStatusRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_BL.model$ScannedUserRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_BL.model$OrbitEventTypeRec", "Connect2_OrbitMobile_MUI.model$TextBooleanRecord", "APIDomain_Directory_IS.model$Directory_MemberByIdRec", "Connect2_OrbitMobile_MUI.referencesHealth$APIDomain_Directory_IS", "Connect2_OrbitMobile_IS.model$QRCodeSeatItemRec", "Connect2_OrbitMobile_MUI.model$QRCodeSeatItemList", "Connect2_OrbitMobile_MUI.model$AuditPayload_QRCodeScannedRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_QRCodeScanned", "Connect2_OrbitMobile_BL.model$ScannedQRCodeInfoRec", "Connect2_OrbitMobile_IS.model$GetScanEventQRCodeResponseRec", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "Connect2_LegacyShared.controller$GetCacheableSignedImageURL", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_BL.model$ScannerAdminInfoRec", "Connect2_OrbitMobile_BL.model$ScannedUserInformationRec", "Connect2_OrbitMobile_MUI.model$QRCodeInformationRec", "CommonPlugin.model$ErrorRec", "Connect2_OrbitMobile_MUI.referencesHealth$CommonPlugin", "BarcodePlugin.controller$CheckBarcodePlugin", "Connect2_OrbitMobile_MUI.referencesHealth$BarcodePlugin", "BarcodePlugin.model$ScanResultRec", "BarcodePlugin.controller$ScanBarcode", "Connect2_OrbitMobile_MUI.model$AuditPayload_LaunchQRCodeScannerRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_LaunchQRCodeScanner", "Connect2_LegacyShared.controller$CopyClassesAcrossPortal"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel, APIDomain_Directory_ISModel, UBT_AppManagerModel, UBT_AppManagerController, Connect2_LegacySharedController, CommonPluginModel, BarcodePluginController, BarcodePluginModel, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminEventDetail_mvc_Debugger, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminEventDetail_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
get_EventInformation$DataActRefresh: -1
};
this.dataFetchDependentsGraph = {
get_EventInformation$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions
Controller.prototype.getMemberByMemberId$ServerAction = function (memberIdIn, callContext) {
var controller = this.controller;
var inputs = {
MemberId: OS.DataConversion.ServerDataConverter.to(memberIdIn, OS.DataTypes.DataTypes.LongInteger)
};
return controller.callServerAction("GetMemberByMemberId", "screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminEventDetail/ActionGetMemberByMemberId", "pLvsU0gnyhxKm0c5ZSlAUA", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail$rssespaceconnect2_orbitmobile_bl_ActionGetMemberByMemberId"))();
executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, APIDomain_Directory_ISModel.Directory_MemberByIdRec);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail$rssespaceconnect2_orbitmobile_bl_ActionGetMemberByMemberId", [{
name: "Response",
attrName: "responseOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new APIDomain_Directory_ISModel.Directory_MemberByIdRec();
},
complexType: APIDomain_Directory_ISModel.Directory_MemberByIdRec
}]);
Controller.prototype.getScanEventQRCode$ServerAction = function (scannedQRCodeInfoIn, callContext) {
var controller = this.controller;
var inputs = {
ScannedQRCodeInfo: OS.DataConversion.ServerDataConverter.to(scannedQRCodeInfoIn, OS.DataTypes.DataTypes.Record)
};
return controller.callServerAction("GetScanEventQRCode", "screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminEventDetail/ActionGetScanEventQRCode", "EqiSoQNLdvX9TN3BpO9cyg", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail$rssespaceconnect2_orbitmobile_bl_ActionGetScanEventQRCode"))();
executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, Connect2_OrbitMobile_ISModel.GetScanEventQRCodeResponseRec);
executeServerActionResult.qRCodeErrorTypeIdOut = OS.DataConversion.ServerDataConverter.from(outputs.QRCodeErrorTypeId, OS.DataTypes.DataTypes.Text);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail$rssespaceconnect2_orbitmobile_bl_ActionGetScanEventQRCode", [{
name: "Response",
attrName: "responseOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_ISModel.GetScanEventQRCodeResponseRec();
},
complexType: Connect2_OrbitMobile_ISModel.GetScanEventQRCodeResponseRec
}, {
name: "QRCodeErrorTypeId",
attrName: "qRCodeErrorTypeIdOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);

// Aggregates and Data Actions
Controller.prototype.get_EventInformation$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:mWcc97XIjU2c0Z1Yh9zBjA:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.hknATrw7SUiepUc_Ubqsqw/DataActions.mWcc97XIjU2c0Z1Yh9zBjA:oH6d+Z40kCUeixDo3TstSA", "Connect2_OrbitMobile_MUI", "Get_EventInformation", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminEventDetail/Get_EventInformation");
return controller.callDataAction("DataActionGet_EventInformation", "screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminEventDetail/DataActionGet_EventInformation", "J+CHk_ubjoXYUXh9NjaKBw", function (b) {
model.variables.get_EventInformationDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.get_EventInformationDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.get_EventInformationDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminEventDetail/Get_EventInformation On After Fetch");
controller._onAfterFetch_Get_EventInformation$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:mWcc97XIjU2c0Z1Yh9zBjA", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["get_EventInformation$DataActRefresh"];
// Client Actions
Controller.prototype._onHandle_ScanEventDone$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_ScanEventDone");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:JcUuCIVCx0mLn6QAtRS0zw:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.hknATrw7SUiepUc_Ubqsqw/ClientActions.JcUuCIVCx0mLn6QAtRS0zw:HOZ63qf5pbc6_bDqXzZV4A", "Connect2_OrbitMobile_MUI", "OnHandle_ScanEventDone", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GWryyDefvE6_VDOIRSM94Q", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Pyqz3q3VIkeb1XA7A_rcqQ", callContext.id);
// Execute Action: OnToggle_PopupQRCode
controller._onToggle_PopupQRCode$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NvdLICN+mEuBtSZb4mS3vg", callContext.id);
// Execute Action: OnClick_ScanQrCode
return controller._onClick_ScanQrCode$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qjzTREgF8kGhTvPEtfjglw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:JcUuCIVCx0mLn6QAtRS0zw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:JcUuCIVCx0mLn6QAtRS0zw", callContext.id);
throw ex;

});
};
Controller.prototype._onToggle_PopupQRCode$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnToggle_PopupQRCode");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:jiFDLQBPcUKBnnyljPaD+w:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.hknATrw7SUiepUc_Ubqsqw/ClientActions.jiFDLQBPcUKBnnyljPaD+w:csqQnFdVsUR2B1PjfPOQTA", "Connect2_OrbitMobile_MUI", "OnToggle_PopupQRCode", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Y838aGCCGUegNNFEcwwXUQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:h2n+ppDMvEmj9zcg41Gx1A", callContext.id);
// QRCodePopupOpened = notQRCodePopupOpened
model.variables.qRCodePopupOpenedVar = !(model.variables.qRCodePopupOpenedVar);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BbTAzFR29UiBEUFsZVlxHQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:jiFDLQBPcUKBnnyljPaD+w", callContext.id);
}

};
Controller.prototype._onHandle_ScanCode$Action = function (codeScannedIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_ScanCode");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail.OnHandle_ScanCode$vars"))());
vars.value.codeScannedInLocal = codeScannedIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getMemberByMemberIdVar = new OS.DataTypes.VariableHolder();
var getScanEventQRCodeVar = new OS.DataTypes.VariableHolder();
var appManager_GetCachedUserInfoVar = new OS.DataTypes.VariableHolder();
var getCacheableSignedImageURLVar = new OS.DataTypes.VariableHolder();
var jSONDeserialize_QRCodeInformationVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(Connect2_OrbitMobile_MUIModel.QRCodeInformationRec))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.getMemberByMemberIdVar = getMemberByMemberIdVar;
varBag.getScanEventQRCodeVar = getScanEventQRCodeVar;
varBag.appManager_GetCachedUserInfoVar = appManager_GetCachedUserInfoVar;
varBag.getCacheableSignedImageURLVar = getCacheableSignedImageURLVar;
varBag.jSONDeserialize_QRCodeInformationVar = jSONDeserialize_QRCodeInformationVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:hwBIMdd_PEmNguonJeGRBA:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.hknATrw7SUiepUc_Ubqsqw/ClientActions.hwBIMdd_PEmNguonJeGRBA:LF1ltVsd9kpmWAxB1geZAQ", "Connect2_OrbitMobile_MUI", "OnHandle_ScanCode", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8kdMzgAGekS3yNJ_jq9K8g", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Force lowercase
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fJjmtSsbAESfz7bVYcqG9g", callContext.id);
// CodeScanned = ToLower
vars.value.codeScannedInLocal = OS.BuiltinFunctions.toLower(vars.value.codeScannedInLocal);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Pf6cvMtJSUKV7zvTy_xNdg", callContext.id);
// JSON Deserialize: JSONDeserialize_QRCodeInformation
jSONDeserialize_QRCodeInformationVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(vars.value.codeScannedInLocal, Connect2_OrbitMobile_MUIModel.QRCodeInformationRec, false);
// Has data?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VZNXJB8Wlk6Vj_HH8jhuOw", callContext.id) && (!(jSONDeserialize_QRCodeInformationVar.value.dataOut.eventIdAttr.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier()))) && !(jSONDeserialize_QRCodeInformationVar.value.dataOut.memberIdAttr.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier())))))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NTc9aYcIYk6Aygjz7KLF7w", callContext.id);
// Execute Action: GetMemberByMemberId
model.flush();
return controller.getMemberByMemberId$ServerAction(jSONDeserialize_QRCodeInformationVar.value.dataOut.memberIdAttr, callContext).then(function (value) {
getMemberByMemberIdVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dDMo_fSLy0ypcTUgMhujHQ", callContext.id);
// Execute Action: GetCacheableSignedImageURL
model.flush();
return Connect2_LegacySharedController.default.getCacheableSignedImageURL$Action(jSONDeserialize_QRCodeInformationVar.value.dataOut.memberIdAttr, Connect2_OrbitMobile_MUIModel.staticEntities.directoryAPIFilter.member, Connect2_OrbitMobile_MUIModel.staticEntities.imageSigningSize.small, callContext).then(function (value) {
getCacheableSignedImageURLVar.value = value;
});
}).then(function () {
// Set Scanned User
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JWxgglI4QUOefOAYZKxSAA", callContext.id);
// ScannedUser.Member = GetMemberByMemberId.Response
model.variables.scannedUserVar.memberAttr = getMemberByMemberIdVar.value.responseOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JWxgglI4QUOefOAYZKxSAA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ScannedUser.SignedURL = GetCacheableSignedImageURL.URL
model.variables.scannedUserVar.signedURLAttr = getCacheableSignedImageURLVar.value.uRLOut;
}).then(function () {
// Same EventId?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vYSZWC+0i0KguvIfM0bwCA", callContext.id) && jSONDeserialize_QRCodeInformationVar.value.dataOut.eventIdAttr.equals(model.variables.in_EventIdIn))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IMdah+hoRUekIU39PEOD6Q", callContext.id);
// Execute Action: AppManager_GetCachedUserInfo
appManager_GetCachedUserInfoVar.value = UBT_AppManagerController.default.appManager_GetCachedUserInfo$Action(callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JN+rbIvye0auJwVaze2SLw", callContext.id);
// Execute Action: GetScanEventQRCode
model.flush();
return controller.getScanEventQRCode$ServerAction(function () {
var rec = new Connect2_OrbitMobile_BLModel.ScannedQRCodeInfoRec();
rec.eventIdAttr = jSONDeserialize_QRCodeInformationVar.value.dataOut.eventIdAttr;
rec.scannedUserInformationAttr = function () {
var rec = new Connect2_OrbitMobile_BLModel.ScannedUserInformationRec();
rec.memberIdAttr = jSONDeserialize_QRCodeInformationVar.value.dataOut.memberIdAttr;
rec.memberFirstNameAttr = getMemberByMemberIdVar.value.responseOut.firstNameAttr;
rec.memberLastNameAttr = getMemberByMemberIdVar.value.responseOut.lastnameAttr;
rec.memberLocalityAttr = getMemberByMemberIdVar.value.responseOut.localityNameAttr;
rec.memberCountryAttr = getMemberByMemberIdVar.value.responseOut.countryNameAttr;
return rec;
}();
rec.scannerAdminInfoAttr = function () {
var rec = new Connect2_OrbitMobile_BLModel.ScannerAdminInfoRec();
rec.adminMemberIdAttr = OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.textToInteger(appManager_GetCachedUserInfoVar.value.userInformationOut.memberIdAttr));
rec.adminFirstNameAttr = appManager_GetCachedUserInfoVar.value.userInformationOut.firstNameAttr;
rec.adminLastNameAttr = appManager_GetCachedUserInfoVar.value.userInformationOut.lastNameAttr;
rec.adminLocalityAttr = appManager_GetCachedUserInfoVar.value.userInformationOut.localityAttr;
rec.adminCountryAttr = appManager_GetCachedUserInfoVar.value.userInformationOut.countryAttr;
return rec;
}();
return rec;
}(), callContext).then(function (value) {
getScanEventQRCodeVar.value = value;
}).then(function () {
// Set Scanned User Role, Seats, Tag & GuestRole
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4KpLAl3pKkap4RPpjXQ5ug", callContext.id);
// ScannedUser.UserRole = GetScanEventQRCode.Response.UserRole
model.variables.scannedUserVar.userRoleAttr = getScanEventQRCodeVar.value.responseOut.userRoleAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4KpLAl3pKkap4RPpjXQ5ug", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ScannedUser.Seats = GetScanEventQRCode.Response.Seats
model.variables.scannedUserVar.seatsAttr = getScanEventQRCodeVar.value.responseOut.seatsAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4KpLAl3pKkap4RPpjXQ5ug", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ScannedUser.Tag = GetScanEventQRCode.Response.Tag
model.variables.scannedUserVar.tagAttr = getScanEventQRCodeVar.value.responseOut.tagAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4KpLAl3pKkap4RPpjXQ5ug", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ScannedUser.GuestRole = GetScanEventQRCode.Response.GuestRole
model.variables.scannedUserVar.guestRoleAttr = getScanEventQRCodeVar.value.responseOut.guestRoleAttr;
}).then(function () {
// Success?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:eAs3Slvpn0W_snfZfTdQgg", callContext.id) && getScanEventQRCodeVar.value.responseOut.statusAttr.successAttr)) {
// Set IsSuccessfulScan
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Irza1eG2+kO076U8TlehrA", callContext.id);
// ScanResult.Success = True
model.variables.scanResultVar.successAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Irza1eG2+kO076U8TlehrA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ScanResult.ErrorMessage = GetScanEventQRCode.Response.Status.ErrorMessage
model.variables.scanResultVar.errorMessageAttr = getScanEventQRCodeVar.value.responseOut.statusAttr.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wNhXik4vvk2fIIOxooTSSg", callContext.id);
// Execute Action: OnToggle_PopupQRCode_Success
controller._onToggle_PopupQRCode$Action(callContext);
// Set IsProcessingData
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vlUVwXEwoEyuG75xNO9y7Q", callContext.id);
// IsProcessingData = False
model.variables.isProcessingDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8qwcPqS3wkGGhUcvfo9HuQ", callContext.id);
// Execute Action: OnApplicationEvent_QRCodeScanned
model.flush();
return Connect2_OrbitMobile_MUIController.default.onApplicationEvent_QRCodeScanned$Action(function () {
var rec = new Connect2_OrbitMobile_MUIModel.AuditPayload_QRCodeScannedRec();
rec.eventIdAttr = model.variables.in_EventIdIn;
rec.eventTitleAttr = model.variables.in_EventNameIn;
rec.eventLocationAttr = model.variables.in_EventLocationIn;
rec.scannedMemberIdAttr = model.variables.scannedUserVar.memberAttr.idAttr;
rec.scannedMemberNameAttr = (model.variables.scannedUserVar.memberAttr.firstNameAttr + ((((model.variables.scannedUserVar.memberAttr.firstNameAttr) !== (""))) ? ((" " + model.variables.scannedUserVar.memberAttr.lastnameAttr)) : (model.variables.scannedUserVar.memberAttr.lastnameAttr)));
rec.scannedMemberRoleAttr = model.variables.scannedUserVar.userRoleAttr;
return rec;
}(), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nM1Slwlx40CYPU_2tWQKsQ", callContext.id);
});
} else {
// Set IsSuccessfulScan
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1uZ2No2luES2mXOeRPCteg", callContext.id);
// ScanResult.Success = False
model.variables.scanResultVar.successAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1uZ2No2luES2mXOeRPCteg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ScanResult.ErrorMessage = GetScanEventQRCode.Response.Status.ErrorMessage
model.variables.scanResultVar.errorMessageAttr = getScanEventQRCodeVar.value.responseOut.statusAttr.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ESm0kxjHGES+xmd9smVL_g", callContext.id);
// Execute Action: OnToggle_PopupQRCode_Error
controller._onToggle_PopupQRCode$Action(callContext);
// Set IsProcessingData
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:G1z4wgjMG0SLpNZNMpOBHA", callContext.id);
// IsProcessingData = False
model.variables.isProcessingDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bEdC+5UVdkuBGtSPHtko0w", callContext.id);
}

});
});
} else {
// Set IsSuccessfulScan
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3ae2mw29PUq0mbM8qmHrKA", callContext.id);
// ScanResult.Success = False
model.variables.scanResultVar.successAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3ae2mw29PUq0mbM8qmHrKA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ScanResult.ErrorMessage = "Guest is not allocated to this event."
model.variables.scanResultVar.errorMessageAttr = "Guest is not allocated to this event.";
// Empty Scanned User Role, Seats & Tag
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:M3Jk24WXmkuAvffvWBEssA", callContext.id);
// ScannedUser.UserRole = ""
model.variables.scannedUserVar.userRoleAttr = "";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:M3Jk24WXmkuAvffvWBEssA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ScannedUser.Seats = EmptySeats
model.variables.scannedUserVar.seatsAttr = vars.value.emptySeatsVar;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:M3Jk24WXmkuAvffvWBEssA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ScannedUser.Tag = ""
model.variables.scannedUserVar.tagAttr = "";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:M3Jk24WXmkuAvffvWBEssA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ScannedUser.GuestRole = ""
model.variables.scannedUserVar.guestRoleAttr = "";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wnYSDJcMnEmAfOQaUnN+kQ", callContext.id);
// Execute Action: OnToggle_PopupQRCode_WrongEvent
controller._onToggle_PopupQRCode$Action(callContext);
// Set IsProcessingData
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0UmELbqrzEuXHlb27o9VhQ", callContext.id);
// IsProcessingData = False
model.variables.isProcessingDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+vywGwZzYkig7i+gEwykQQ", callContext.id);
}

});
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PdzZUyAvckeFdBH3EhgHAw", callContext.id);
// IsProcessingData = False
model.variables.isProcessingDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YDbYJqu1sE+aubVufIdOKw", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("This QR Code was unable to be processed. Please try again later.", /*Info*/ 0);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:hyUxsIa_oEuDcwfbNuBIYQ", callContext.id);
}

});
}).catch(function (ex) {
OS.Logger.trace("ScreenBlock_AdminEventDetail.OnHandle_ScanCode", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Z8eIi64hrUSSLBvLV7cSWQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gNDWjLbmw0qSui4jmPijug", callContext.id);
// IsProcessingData = False
model.variables.isProcessingDataVar = false;
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Uv79PzqPfEKmfklTAU42kA", callContext.id) && ((OS.BuiltinFunctions.index(allExceptionsVar.value.exceptionMessageAttr, "Failed to deserialize JSON", 0, false, true)) !== (-1)))) {
// SetErrorMessage
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KFp+upi5ZU+gYu7yf8iOAA", callContext.id);
// ScanError.IsShowErrorMessage = True
model.variables.scanErrorVar.isShowErrorMessageAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KFp+upi5ZU+gYu7yf8iOAA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ScanError.Message = "Unable to read QR code, please try again."
model.variables.scanErrorVar.messageAttr = "Unable to read QR code, please try again.";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:s_7Wzx7fJ0mNyA9YaVjlzQ", callContext.id);
return OS.Flow.returnAsync();

} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0WDfVw_hNECcoERvxO71Ow", callContext.id);
// Raise Error: UnknownError
throw new OS.Exceptions.Exceptions.UserException("Connect2_OrbitMobile_MUI.UnknownError", allExceptionsVar.value.exceptionMessageAttr);
}

});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:hwBIMdd_PEmNguonJeGRBA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:hwBIMdd_PEmNguonJeGRBA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail.OnHandle_ScanCode$vars", [{
name: "CodeScanned",
attrName: "codeScannedInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "EmptySeats",
attrName: "emptySeatsVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.QRCodeSeatItemList();
},
complexType: Connect2_OrbitMobile_MUIModel.QRCodeSeatItemList
}]);
Controller.prototype._onClick_ScanQrCode$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_ScanQrCode");
callContext = controller.callContext(callContext);
var checkBarcodePluginVar = new OS.DataTypes.VariableHolder();
var scanBarcodeVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.checkBarcodePluginVar = checkBarcodePluginVar;
varBag.scanBarcodeVar = scanBarcodeVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:mvMuSpDW+kKVtrRLu6wfUQ:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.hknATrw7SUiepUc_Ubqsqw/ClientActions.mvMuSpDW+kKVtrRLu6wfUQ:wMrVPwcPBYImnIBp25FNgw", "Connect2_OrbitMobile_MUI", "OnClick_ScanQrCode", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2GwR1kgok0C8uMhWiiFvAA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Has QRCode?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4uIi9BIkz0iDTOlqJZ_4Tw", callContext.id) && model.variables.get_EventInformationDataAct.hasQRCodeOut)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:n1ycsO0Hak24V6wJN92zBg", callContext.id);
// Execute Action: CheckBarcodePlugin
model.flush();
return BarcodePluginController.default.checkBarcodePlugin$Action(callContext).then(function (value) {
checkBarcodePluginVar.value = value;
}).then(function () {
// Is available?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pO4j94ZewEGQp5azrUfyTw", callContext.id) && checkBarcodePluginVar.value.isAvailableOut)) {
// Set IsProcessingData
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:kxTBVSpJbU24ydkxQRS8JQ", callContext.id);
// IsProcessingData = True
model.variables.isProcessingDataVar = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SZXI8R+90023yDQP5O2i3w", callContext.id);
// Execute Action: OnApplicationEvent_LaunchQRCodeScanner
model.flush();
return Connect2_OrbitMobile_MUIController.default.onApplicationEvent_LaunchQRCodeScanner$Action(function () {
var rec = new Connect2_OrbitMobile_MUIModel.AuditPayload_LaunchQRCodeScannerRec();
rec.eventIdAttr = model.variables.in_EventIdIn;
rec.eventTitleAttr = model.variables.in_EventNameIn;
rec.eventTypeAttr = model.variables.in_EventTypeFriendlyIn;
rec.eventLocationAttr = model.variables.in_EventLocationIn;
rec.eventStartDateAttr = model.variables.in_EventStartDateIn;
rec.eventEndDateAttr = model.variables.in_EventEndDateIn;
return rec;
}(), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JHuW6n+tZ0u1kpQJKBhBbw", callContext.id);
// Execute Action: ScanBarcode
model.flush();
return BarcodePluginController.default.scanBarcode$Action("Please center the code in the frame", Connect2_OrbitMobile_MUIModel.staticEntities.cameraDirection.backCamera, Connect2_OrbitMobile_MUIModel.staticEntities.scanOrientation.portrait, false, "Scan", false, OS.BuiltinFunctions.textToInteger("Entities.Format.ALL"), -1, "Entities.AndroidScanningLibrary.ZXing", callContext).then(function (value) {
scanBarcodeVar.value = value;
});
}).then(function () {
// Successful scan?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fhAxW3+Q20K3NdcyEhhByA", callContext.id) && scanBarcodeVar.value.successOut)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7ESaELIqgUGMitMOTAs4ig", callContext.id);
// Execute Action: OnHandle_ScanCode
return controller._onHandle_ScanCode$Action(scanBarcodeVar.value.scanResultOut.textAttr, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:iE1ry41MkkuY_fCETuzpMg", callContext.id);
});
} else {
// Set IsProcessingData
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pg73IJMxakuDcrhu+3uKjg", callContext.id);
// IsProcessingData = False
model.variables.isProcessingDataVar = false;
// User closed the scanner?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:71bOd0jSCU68_L_YO3NvNA", callContext.id) && (scanBarcodeVar.value.errorOut.errorCodeAttr === "OS-PLUG-BARC-0006"))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wfdJv0s4z06SMXmkPmm97Q", callContext.id);
} else {
// Unavailable
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pRHg43CvoES7xqlmbDhxrg", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage(scanBarcodeVar.value.errorOut.errorMessageAttr, /*Info*/ 0);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0Ya23wpKWEGklGXNKglWxQ", callContext.id);
}

}

});
});
} else {
// Unavailable
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:kvGgARB3ZEuNo4vMUVm_WA", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage(checkBarcodePluginVar.value.errorOut.errorMessageAttr, /*Info*/ 0);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:I2gcRHj+m0WnD2IVi2Xldw", callContext.id);
}

});
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7JK9Vgt1yEKI0AZipq6zRQ", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:mvMuSpDW+kKVtrRLu6wfUQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:mvMuSpDW+kKVtrRLu6wfUQ", callContext.id);
throw ex;

});
};
Controller.prototype._componentDidUpdate_QRCode$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ComponentDidUpdate_QRCode");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:4X79pvWbIUWkV07EdQ1Hhg:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.hknATrw7SUiepUc_Ubqsqw/ClientActions.4X79pvWbIUWkV07EdQ1Hhg:ojkZFG_2DJZaEYIX0gmsbQ", "Connect2_OrbitMobile_MUI", "ComponentDidUpdate_QRCode", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UOj0MXxwFkOBkv11fZndnQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QjvcV2g8y0uu2k38o2cLPw", callContext.id);
// Execute Action: CopyClassesAcrossPortal
Connect2_LegacySharedController.default.copyClassesAcrossPortal$Action(idService.getId("Root_QRCode"), idService.getId("Popup_QRCode"), callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:86anWMzZYUuI_JMVL8CU2w", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:4X79pvWbIUWkV07EdQ1Hhg", callContext.id);
}

};
Controller.prototype._refreshData$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("RefreshData");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Ih0VwFlMRkyeIPo+J21dew:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.hknATrw7SUiepUc_Ubqsqw/ClientActions.Ih0VwFlMRkyeIPo+J21dew:WGQsYPsCVtdRfs96n5B9cw", "Connect2_OrbitMobile_MUI", "RefreshData", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1QsqPGljdUCEBqUWzR+lxQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:n2Xf_UWcjkuc5sahum9Dww", callContext.id);
// IsFetchingData = True
model.variables.isFetchingDataVar = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Vsh3XyIcD0+hwWlkhChGhw", callContext.id);
// Refresh Query: Get_EventInformation
var result = controller.get_EventInformation$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Owz9XNirOUSkK9b4NGGdUg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Ih0VwFlMRkyeIPo+J21dew", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Ih0VwFlMRkyeIPo+J21dew", callContext.id);
throw ex;

});
};
Controller.prototype._onHandle_OrbitErrorMessage$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_OrbitErrorMessage");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:wLF31C32LEayrHgG35oAsg:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.hknATrw7SUiepUc_Ubqsqw/ClientActions.wLF31C32LEayrHgG35oAsg:neZnZed1ggUljW_BuydVPg", "Connect2_OrbitMobile_MUI", "OnHandle_OrbitErrorMessage", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yI+57t5ZS0aHas6CeCd1xA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Reset Error Message
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:AyOOsox48UKqozyAJbHYJQ", callContext.id);
// ScanError.IsShowErrorMessage = False
model.variables.scanErrorVar.isShowErrorMessageAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:AyOOsox48UKqozyAJbHYJQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ScanError.Message = ""
model.variables.scanErrorVar.messageAttr = "";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:MwKGiCXrJ0i7oxVr5tgRDQ", callContext.id);
// Execute Action: OnClick_ScanQrCode
return controller._onClick_ScanQrCode$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Ns_LjwI+MEa8fv731+gsSA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:wLF31C32LEayrHgG35oAsg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:wLF31C32LEayrHgG35oAsg", callContext.id);
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
var wasCurrentViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.wasCurrentViewRestoredFromCacheJSResult = wasCurrentViewRestoredFromCacheJSResult;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Ejda81wWSkuuyd1I2dm38Q:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.hknATrw7SUiepUc_Ubqsqw/ClientActions.Ejda81wWSkuuyd1I2dm38Q:wXZp9UpJOzESxResR5I95Q", "Connect2_OrbitMobile_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uWwblGZb2EWh5JZEnqZ3QA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gm3FKK7gBEm8nlHza1a6iA", callContext.id);
wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminEventDetail_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnReady", {
FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail.OnReady$wasCurrentViewRestoredFromCacheJSResult"))();
jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bHyfDrMLvE+mqP93rKiFZQ", callContext.id) && wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tL_ANgsfjUWQb0uANOMoKQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IFrKk+HEukqRsza0fU9O4Q", callContext.id);
// Execute Action: RefreshData
return controller._refreshData$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7OrwtV2x_ECKrGrC8ZIHWg", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Ejda81wWSkuuyd1I2dm38Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Ejda81wWSkuuyd1I2dm38Q", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail.OnReady$wasCurrentViewRestoredFromCacheJSResult", [{
name: "FromCache",
attrName: "fromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._onAfterFetch_Get_EventInformation$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnAfterFetch_Get_EventInformation");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:cHkd+ZVR3UmnQtY5OH5Kqw:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.hknATrw7SUiepUc_Ubqsqw/ClientActions.cHkd+ZVR3UmnQtY5OH5Kqw:fohBvwDxZrhaPpn6FWA+uQ", "Connect2_OrbitMobile_MUI", "OnAfterFetch_Get_EventInformation", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9sAnvLUYmkaDrWle+slqCQ", callContext.id);
// Set Screen Data
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:iegJ2N8Ww0qqNxXYYe8XHA", callContext.id);
// EventType = Get_EventInformation.OrbitEventType
model.variables.eventTypeVar = model.variables.get_EventInformationDataAct.orbitEventTypeOut;
// Set IsFetchingData to False
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wHZ9v+BjDUqgjxraPwZ3uw", callContext.id);
// IsFetchingData = False
model.variables.isFetchingDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zD6+rJ+R5U6wRu_oU1M1_w", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:cHkd+ZVR3UmnQtY5OH5Kqw", callContext.id);
}

};

Controller.prototype.onHandle_ScanEventDone$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ScanEventDone$Action, callContext);

};
Controller.prototype.onToggle_PopupQRCode$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onToggle_PopupQRCode$Action, callContext);

};
Controller.prototype.onHandle_ScanCode$Action = function (codeScannedIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ScanCode$Action, callContext, codeScannedIn);

};
Controller.prototype.onClick_ScanQrCode$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_ScanQrCode$Action, callContext);

};
Controller.prototype.componentDidUpdate_QRCode$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._componentDidUpdate_QRCode$Action, callContext);

};
Controller.prototype.refreshData$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._refreshData$Action, callContext);

};
Controller.prototype.onHandle_OrbitErrorMessage$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_OrbitErrorMessage$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onAfterFetch_Get_EventInformation$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onAfterFetch_Get_EventInformation$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:gsvXRoYDGUKLqTlTbKlOFA:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA:3HoUgFFZNBz79txQ+Fnk_A", "Connect2_OrbitMobile_MUI", "Orbit_ScreenBlocks_AdminFlow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:hknATrw7SUiepUc_Ubqsqw:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.hknATrw7SUiepUc_Ubqsqw:ERMr7+fyc4ZrmxEJcdfO+Q", "Connect2_OrbitMobile_MUI", "ScreenBlock_AdminEventDetail", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:hknATrw7SUiepUc_Ubqsqw", callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:gsvXRoYDGUKLqTlTbKlOFA", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminEventDetail On Ready");
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
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
};
});

define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminEventDetail.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"v+B29nN3MEGcUIyBskXGmQ": {
getter: function (varBag, idService) {
return varBag.vars.value.emptySeatsVar;
}
},
"LgS8gCje90GG_S7FSj5NkA": {
getter: function (varBag, idService) {
return varBag.vars.value.codeScannedInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Z8eIi64hrUSSLBvLV7cSWQ": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"NTc9aYcIYk6Aygjz7KLF7w": {
getter: function (varBag, idService) {
return varBag.getMemberByMemberIdVar.value;
}
},
"JN+rbIvye0auJwVaze2SLw": {
getter: function (varBag, idService) {
return varBag.getScanEventQRCodeVar.value;
}
},
"IMdah+hoRUekIU39PEOD6Q": {
getter: function (varBag, idService) {
return varBag.appManager_GetCachedUserInfoVar.value;
}
},
"dDMo_fSLy0ypcTUgMhujHQ": {
getter: function (varBag, idService) {
return varBag.getCacheableSignedImageURLVar.value;
}
},
"Pf6cvMtJSUKV7zvTy_xNdg": {
getter: function (varBag, idService) {
return varBag.jSONDeserialize_QRCodeInformationVar.value;
}
},
"n1ycsO0Hak24V6wJN92zBg": {
getter: function (varBag, idService) {
return varBag.checkBarcodePluginVar.value;
}
},
"JHuW6n+tZ0u1kpQJKBhBbw": {
getter: function (varBag, idService) {
return varBag.scanBarcodeVar.value;
}
},
"gm3FKK7gBEm8nlHza1a6iA": {
getter: function (varBag, idService) {
return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
}
},
"58ydaaMD40eeIZwWWhNAcw": {
getter: function (varBag, idService) {
return varBag.model.variables.isFetchingDataVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Kxn_xM3aOU2RDJnLu1zWCw": {
getter: function (varBag, idService) {
return varBag.model.variables.isProcessingDataVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"n9v2Q9w7CE+HUhfmy+t8rA": {
getter: function (varBag, idService) {
return varBag.model.variables.scanResultVar;
}
},
"zHqjvuLLuUmk4hX9FTMRww": {
getter: function (varBag, idService) {
return varBag.model.variables.scannedUserVar;
}
},
"v+jFvlOEFkCaU2Xoe_b+OA": {
getter: function (varBag, idService) {
return varBag.model.variables.eventTypeVar;
}
},
"v3j2xcQB_EKBfKAnVou_Eg": {
getter: function (varBag, idService) {
return varBag.model.variables.qRCodePopupOpenedVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"jf_p2x0_HEiv7mLpFA_aAg": {
getter: function (varBag, idService) {
return varBag.model.variables.scanErrorVar;
}
},
"s4h4ob62KUKh3KUVCU7jAw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"htXPenVz8EG1jip_GG9ZGA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"G9XMMwnpKkawxGhtRNLEyQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventStartDateIn;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"1NLNtP+ssUWGjRlsBJuaLg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventEndDateIn;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"TLncYiyfukKw6dgfLoUMLA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventLocationIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"qflnAmBwOkePwnHWJV92Jg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventTypeFriendlyIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"mWcc97XIjU2c0Z1Yh9zBjA": {
getter: function (varBag, idService) {
return varBag.model.variables.get_EventInformationDataAct;
}
},
"5Vt+I9YKZEKk21RRw2advw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"bgWXxNWj6kua9r8sf1e7YA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"dNkESHHs2kyuspOEysTzrw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderLeft"));
})(varBag.model, idService);
}
},
"iYmAeoOubkuax6e3pY1EcA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"Z1yp+xn8yEu3P8gYNeqlVw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderRight"));
})(varBag.model, idService);
}
},
"pncoJOH58EuHKPsUitjrwg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"3Xo4rVZMM0ujyBzVPvgT3g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"KaoSK6EmlE6D68+gL05B7Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsNotFetching"));
})(varBag.model, idService);
}
},
"BIib1DL7kEOzf6ydfoOEYg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasFetched"));
})(varBag.model, idService);
}
},
"SoAcsmo4M067SBOT3LDXMA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("RootPlaceholder_QRCode"));
})(varBag.model, idService);
}
},
"LzO1e1CZUEK0KepR_7xHHw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Root_QRCode"));
})(varBag.model, idService);
}
},
"E6z3OSR6Y0KbtIm5BXksAg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Popup_QRCode"));
})(varBag.model, idService);
}
},
"Wqo1Xw8sb0WCkWjSoabacA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomBar"));
})(varBag.model, idService);
}
},
"sGroZF3eRkmw61HyOpyiFA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomBar"));
})(varBag.model, idService);
}
},
"+3IzHXz1s0qeF9Umq3hjeQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
},
"D_j7swPPP0O69ZPQZnrjbA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
