define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestoneDetail.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "APIDomain_Directory_IS.model", "BarcodePlugin.model", "CommonPlugin.model", "BarcodePlugin.controller", "UBT_CW.controller", "Connect2_LegacyShared.controller", "UBT_AppManager.model", "UBT_AppManager.controller", "Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$model", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Popup_QRCodeScan_Milestone.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.OrbitErrorMessage.mvc$model", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTime", "Connect2_OrbitMobile_MUI.controller$GetFormattedTime_FromDateTime", "Connect2_OrbitMobile_IS.model$QRCodeStatusRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_BL.model$ScannedUserRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_BL.model$OrbitMilestoneTypeRec", "Connect2_OrbitMobile_MUI.model$TextBooleanRecord", "APIDomain_Directory_IS.model$Directory_MemberByIdRec", "Connect2_OrbitMobile_MUI.referencesHealth$APIDomain_Directory_IS", "Connect2_OrbitMobile_IS.model$QRCodeSeatItemRec", "Connect2_OrbitMobile_MUI.model$QRCodeSeatItemList", "BarcodePlugin.model$ScanResultRec", "Connect2_OrbitMobile_MUI.referencesHealth$BarcodePlugin", "CommonPlugin.model$ErrorRec", "Connect2_OrbitMobile_MUI.referencesHealth$CommonPlugin", "BarcodePlugin.controller$ScanBarcode", "BarcodePlugin.controller$CheckBarcodePlugin", "UBT_CW.controller$CopyClassesAcrossPortal", "Connect2_OrbitMobile_MUI.referencesHealth$UBT_CW", "Connect2_LegacyShared.controller$GetCacheableSignedImageURL", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "Connect2_OrbitMobile_BL.model$ScannedQRCodeInfoRec", "Connect2_OrbitMobile_IS.model$GetScanMilestoneQRCodeResponseRec", "Connect2_OrbitMobile_BL.model$ScannerAdminInfoRec", "Connect2_OrbitMobile_BL.model$ScannedUserInformationRec", "Connect2_OrbitMobile_MUI.model$QRCodeInformationRec"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel, APIDomain_Directory_ISModel, BarcodePluginModel, CommonPluginModel, BarcodePluginController, UBT_CWController, Connect2_LegacySharedController, UBT_AppManagerModel, UBT_AppManagerController, Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvcModel, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_Popup_QRCodeScan_Milestone_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_OrbitErrorMessage_mvcModel) {
var OS = OutSystems.Internal;

var Get_MilestoneInformationDataActRec = (function (_super) {
__extends(Get_MilestoneInformationDataActRec, _super);
function Get_MilestoneInformationDataActRec(defaults) {
_super.apply(this, arguments);
}
Get_MilestoneInformationDataActRec.attributesToDeclare = function () {
return [
this.attr("HasQRCode", "hasQRCodeOut", "HasQRCode", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("OrbitMilestoneType", "orbitMilestoneTypeOut", "OrbitMilestoneType", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.OrbitMilestoneTypeRec());
}, true, Connect2_OrbitMobile_BLModel.OrbitMilestoneTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
Get_MilestoneInformationDataActRec.init();
return Get_MilestoneInformationDataActRec;
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
this.attr("MilestoneType", "milestoneTypeVar", "MilestoneType", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.OrbitMilestoneTypeRec());
}, false, Connect2_OrbitMobile_BLModel.OrbitMilestoneTypeRec), 
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
this.attr("In_MilestoneId", "in_MilestoneIdIn", "In_MilestoneId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_MilestoneIdInDataFetchStatus", "_in_MilestoneIdInDataFetchStatus", "_in_MilestoneIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_MilestoneName", "in_MilestoneNameIn", "In_MilestoneName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_MilestoneNameInDataFetchStatus", "_in_MilestoneNameInDataFetchStatus", "_in_MilestoneNameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_MilestoneDate", "in_MilestoneDateIn", "In_MilestoneDate", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, false), 
this.attr("_in_MilestoneDateInDataFetchStatus", "_in_MilestoneDateInDataFetchStatus", "_in_MilestoneDateInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_MilestoneDescription", "in_MilestoneDescriptionIn", "In_MilestoneDescription", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_MilestoneDescriptionInDataFetchStatus", "_in_MilestoneDescriptionInDataFetchStatus", "_in_MilestoneDescriptionInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_MilestoneStartDate", "in_MilestoneStartDateIn", "In_MilestoneStartDate", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, false), 
this.attr("_in_MilestoneStartDateInDataFetchStatus", "_in_MilestoneStartDateInDataFetchStatus", "_in_MilestoneStartDateInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_MilestoneEndDate", "in_MilestoneEndDateIn", "In_MilestoneEndDate", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, false), 
this.attr("_in_MilestoneEndDateInDataFetchStatus", "_in_MilestoneEndDateInDataFetchStatus", "_in_MilestoneEndDateInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Get_MilestoneInformation", "get_MilestoneInformationDataAct", "get_MilestoneInformationDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Get_MilestoneInformationDataActRec());
}, true, Get_MilestoneInformationDataActRec)
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
Model._hasValidationWidgetsValue = (((((Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvcModel.hasValidationWidgets || Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_Popup_QRCodeScan_Milestone_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_OrbitErrorMessage_mvcModel.hasValidationWidgets);
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

if("In_MilestoneId" in inputs) {
this.variables.in_MilestoneIdIn = inputs.In_MilestoneId;
if("_in_MilestoneIdInDataFetchStatus" in inputs) {
this.variables._in_MilestoneIdInDataFetchStatus = inputs._in_MilestoneIdInDataFetchStatus;
}

}

if("In_MilestoneName" in inputs) {
this.variables.in_MilestoneNameIn = inputs.In_MilestoneName;
if("_in_MilestoneNameInDataFetchStatus" in inputs) {
this.variables._in_MilestoneNameInDataFetchStatus = inputs._in_MilestoneNameInDataFetchStatus;
}

}

if("In_MilestoneDate" in inputs) {
this.variables.in_MilestoneDateIn = inputs.In_MilestoneDate;
if("_in_MilestoneDateInDataFetchStatus" in inputs) {
this.variables._in_MilestoneDateInDataFetchStatus = inputs._in_MilestoneDateInDataFetchStatus;
}

}

if("In_MilestoneDescription" in inputs) {
this.variables.in_MilestoneDescriptionIn = inputs.In_MilestoneDescription;
if("_in_MilestoneDescriptionInDataFetchStatus" in inputs) {
this.variables._in_MilestoneDescriptionInDataFetchStatus = inputs._in_MilestoneDescriptionInDataFetchStatus;
}

}

if("In_MilestoneStartDate" in inputs) {
this.variables.in_MilestoneStartDateIn = inputs.In_MilestoneStartDate;
if("_in_MilestoneStartDateInDataFetchStatus" in inputs) {
this.variables._in_MilestoneStartDateInDataFetchStatus = inputs._in_MilestoneStartDateInDataFetchStatus;
}

}

if("In_MilestoneEndDate" in inputs) {
this.variables.in_MilestoneEndDateIn = inputs.In_MilestoneEndDate;
if("_in_MilestoneEndDateInDataFetchStatus" in inputs) {
this.variables._in_MilestoneEndDateInDataFetchStatus = inputs._in_MilestoneEndDateInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestoneDetail");
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestoneDetail.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "APIDomain_Directory_IS.model", "BarcodePlugin.model", "CommonPlugin.model", "BarcodePlugin.controller", "UBT_CW.controller", "Connect2_LegacyShared.controller", "UBT_AppManager.model", "UBT_AppManager.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestoneDetail.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestoneDetail.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Popup_QRCodeScan_Milestone.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.OrbitErrorMessage.mvc$view", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTime", "Connect2_OrbitMobile_MUI.controller$GetFormattedTime_FromDateTime", "Connect2_OrbitMobile_IS.model$QRCodeStatusRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_BL.model$ScannedUserRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_BL.model$OrbitMilestoneTypeRec", "Connect2_OrbitMobile_MUI.model$TextBooleanRecord", "APIDomain_Directory_IS.model$Directory_MemberByIdRec", "Connect2_OrbitMobile_MUI.referencesHealth$APIDomain_Directory_IS", "Connect2_OrbitMobile_IS.model$QRCodeSeatItemRec", "Connect2_OrbitMobile_MUI.model$QRCodeSeatItemList", "BarcodePlugin.model$ScanResultRec", "Connect2_OrbitMobile_MUI.referencesHealth$BarcodePlugin", "CommonPlugin.model$ErrorRec", "Connect2_OrbitMobile_MUI.referencesHealth$CommonPlugin", "BarcodePlugin.controller$ScanBarcode", "BarcodePlugin.controller$CheckBarcodePlugin", "UBT_CW.controller$CopyClassesAcrossPortal", "Connect2_OrbitMobile_MUI.referencesHealth$UBT_CW", "Connect2_LegacyShared.controller$GetCacheableSignedImageURL", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "Connect2_OrbitMobile_BL.model$ScannedQRCodeInfoRec", "Connect2_OrbitMobile_IS.model$GetScanMilestoneQRCodeResponseRec", "Connect2_OrbitMobile_BL.model$ScannerAdminInfoRec", "Connect2_OrbitMobile_BL.model$ScannedUserInformationRec", "Connect2_OrbitMobile_MUI.model$QRCodeInformationRec"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel, APIDomain_Directory_ISModel, BarcodePluginModel, CommonPluginModel, BarcodePluginController, UBT_CWController, Connect2_LegacySharedController, UBT_AppManagerModel, UBT_AppManagerController, React, OSView, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminMilestoneDetail_mvc_model, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminMilestoneDetail_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, OSWidgets, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Popup_QRCodeScan_Milestone_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_OrbitErrorMessage_mvc_view) {
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
        View.displayName = "Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestoneDetail";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/Connect2_OrbitMobile_MUI.TimeFormat.js"];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Popup_QRCodeScan_Milestone_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_OrbitErrorMessage_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminMilestoneDetail_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminMilestoneDetail_mvc_controller;
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
value: model.variables.in_MilestoneNameIn,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneNameInDataFetchStatus)
}))];
}),
headerRight: PlaceholderContent.Empty,
headerContent: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [$if(!(model.variables.isFetchingDataVar), false, this, function () {
return [$if(model.variables.get_MilestoneInformationDataAct.isDataFetchedAttr, false, this, function () {
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
animate: true,
style: "flex-center-vertical",
visible: model.getCachedValue(idService.getId("l9r9NGdL60uajQZkAopmMg.Visible"), function () {
return !(model.variables.in_MilestoneDateIn.equals(OS.BuiltinFunctions.nullDate()));
}, function () {
return model.variables.in_MilestoneDateIn;
}),
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneDateInDataFetchStatus)
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
value: model.getCachedValue(idService.getId("hAPZabkZbkeidiQ0s0xzvw.Value"), function () {
return (OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedDateTime$Action(model.variables.in_MilestoneDateIn, false, false, false, false, false, false, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id) + (((!(model.variables.in_MilestoneStartDateIn.equals(OS.BuiltinFunctions.nullDate())) && !(model.variables.in_MilestoneEndDateIn.equals(OS.BuiltinFunctions.nullDate())))) ? ((((" " + OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedTime_FromDateTime$Action(model.variables.in_MilestoneStartDateIn, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)) + " - ") + OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedTime_FromDateTime$Action(model.variables.in_MilestoneEndDateIn, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id))) : ("")));
}, function () {
return model.variables.in_MilestoneDateIn;
}, function () {
return model.variables.in_MilestoneStartDateIn;
}, function () {
return model.variables.in_MilestoneEndDateIn;
}),
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneDateInDataFetchStatus, model.variables._in_MilestoneStartDateInDataFetchStatus, model.variables._in_MilestoneEndDateInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: model.getCachedValue(idService.getId("tPkPcyfXkkOUtpupCmXDFg.Style"), function () {
return ("flex-center-vertical" + ((!(model.variables.in_MilestoneDateIn.equals(OS.BuiltinFunctions.nullDate()))) ? (" margin-top-m") : ("")));
}, function () {
return model.variables.in_MilestoneDateIn;
}),
visible: ((model.variables.milestoneTypeVar.nameAttr) !== ("")),
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneDateInDataFetchStatus)
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-host-guest",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "margin-left-base",
value: model.variables.milestoneTypeVar.nameAttr,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: model.getCachedValue(idService.getId("O2Cvvy0Be0CkIxl6HQw7KQ.Style"), function () {
return ("flex-center-vertical" + (((!(model.variables.in_MilestoneDateIn.equals(OS.BuiltinFunctions.nullDate())) || ((model.variables.milestoneTypeVar.nameAttr) !== ("")))) ? (" margin-top-m") : ("")));
}, function () {
return model.variables.in_MilestoneDateIn;
}, function () {
return model.variables.milestoneTypeVar.nameAttr;
}),
visible: ((model.variables.in_MilestoneDescriptionIn) !== ("")),
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneDateInDataFetchStatus),
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneDescriptionInDataFetchStatus)
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-window",
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "margin-left-base",
value: model.variables.in_MilestoneDescriptionIn,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneDescriptionInDataFetchStatus)
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "orbit-spinner-cont",
visible: model.variables.isProcessingDataVar,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "spinner",
iconSize: /*Twotimes*/ 1,
style: "icon orbit-spinner-icon",
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
style: "bold margin-top-base",
text: ["Loading"],
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "full-width padding-xl text-align-center",
visible: (model.variables.get_MilestoneInformationDataAct.hasQRCodeOut && !(model.variables.isProcessingDataVar)),
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.get_MilestoneInformationDataAct.dataFetchStatusAttr)
}, React.createElement(OSWidgets.Button, {
enabled: true,
isDefault: false,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminMilestoneDetail/Button OnClick");
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
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "qrcode",
iconSize: /*Twotimes*/ 1,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
style: "margin-left-s",
text: ["Scan QR Code"],
_idProps: {
service: idService,
uuid: "23"
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminMilestoneDetail/Root_QRCode componentDidUpdate");
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
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_Popup_QRCodeScan_Milestone_mvc_view, {
inputs: {
ScanResult: model.variables.scanResultVar,
MilestoneName: model.variables.in_MilestoneNameIn,
_milestoneNameInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneNameInDataFetchStatus),
ScannedUser: model.variables.scannedUserVar
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/Popup_QRCodeScan_Milestone Event_Done");
return controller.onHandle_ScanMilestoneDone$Action(controller.callContext(eventHandlerContext));
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
uuid: "27",
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
uuid: "28",
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
uuid: "29",
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
uuid: "30"
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
uuid: "31",
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
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestoneDetail.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_OrbitMobile_BL.model", "APIDomain_Directory_IS.model", "BarcodePlugin.model", "CommonPlugin.model", "BarcodePlugin.controller", "UBT_CW.controller", "Connect2_LegacyShared.controller", "UBT_AppManager.model", "UBT_AppManager.controller", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestoneDetail.mvc$debugger", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestoneDetail.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTime", "Connect2_OrbitMobile_MUI.controller$GetFormattedTime_FromDateTime", "Connect2_OrbitMobile_IS.model$QRCodeStatusRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_BL.model$ScannedUserRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_BL.model$OrbitMilestoneTypeRec", "Connect2_OrbitMobile_MUI.model$TextBooleanRecord", "APIDomain_Directory_IS.model$Directory_MemberByIdRec", "Connect2_OrbitMobile_MUI.referencesHealth$APIDomain_Directory_IS", "Connect2_OrbitMobile_IS.model$QRCodeSeatItemRec", "Connect2_OrbitMobile_MUI.model$QRCodeSeatItemList", "BarcodePlugin.model$ScanResultRec", "Connect2_OrbitMobile_MUI.referencesHealth$BarcodePlugin", "CommonPlugin.model$ErrorRec", "Connect2_OrbitMobile_MUI.referencesHealth$CommonPlugin", "BarcodePlugin.controller$ScanBarcode", "BarcodePlugin.controller$CheckBarcodePlugin", "UBT_CW.controller$CopyClassesAcrossPortal", "Connect2_OrbitMobile_MUI.referencesHealth$UBT_CW", "Connect2_LegacyShared.controller$GetCacheableSignedImageURL", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "Connect2_OrbitMobile_BL.model$ScannedQRCodeInfoRec", "Connect2_OrbitMobile_IS.model$GetScanMilestoneQRCodeResponseRec", "Connect2_OrbitMobile_BL.model$ScannerAdminInfoRec", "Connect2_OrbitMobile_BL.model$ScannedUserInformationRec", "Connect2_OrbitMobile_MUI.model$QRCodeInformationRec"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_OrbitMobile_BLModel, APIDomain_Directory_ISModel, BarcodePluginModel, CommonPluginModel, BarcodePluginController, UBT_CWController, Connect2_LegacySharedController, UBT_AppManagerModel, UBT_AppManagerController, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminMilestoneDetail_mvc_Debugger, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminMilestoneDetail_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
get_MilestoneInformation$DataActRefresh: 0
};
this.dataFetchDependentsGraph = {
get_MilestoneInformation$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions
Controller.prototype.getMemberByMemberId$ServerAction = function (memberIdIn, callContext) {
var controller = this.controller;
var inputs = {
MemberId: OS.DataConversion.ServerDataConverter.to(memberIdIn, OS.DataTypes.DataTypes.LongInteger)
};
return controller.callServerAction("GetMemberByMemberId", "screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminMilestoneDetail/ActionGetMemberByMemberId", "pLvsU0gnyhxKm0c5ZSlAUA", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestoneDetail$rssespaceconnect2_orbitmobile_bl_ActionGetMemberByMemberId"))();
executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, APIDomain_Directory_ISModel.Directory_MemberByIdRec);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestoneDetail$rssespaceconnect2_orbitmobile_bl_ActionGetMemberByMemberId", [{
name: "Response",
attrName: "responseOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new APIDomain_Directory_ISModel.Directory_MemberByIdRec();
},
complexType: APIDomain_Directory_ISModel.Directory_MemberByIdRec
}]);
Controller.prototype.getScanMilestoneQRCode$ServerAction = function (scanClientIdIn, scannedQRCodeInfoIn, callContext) {
var controller = this.controller;
var inputs = {
ScanClientId: OS.DataConversion.ServerDataConverter.to(scanClientIdIn, OS.DataTypes.DataTypes.Text),
ScannedQRCodeInfo: OS.DataConversion.ServerDataConverter.to(scannedQRCodeInfoIn, OS.DataTypes.DataTypes.Record)
};
return controller.callServerAction("GetScanMilestoneQRCode", "screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminMilestoneDetail/ActionGetScanMilestoneQRCode", "SJQt+Ane_UY4xFBe6RjB8A", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestoneDetail$rssespaceconnect2_orbitmobile_bl_ActionGetScanMilestoneQRCode"))();
executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, Connect2_OrbitMobile_ISModel.GetScanMilestoneQRCodeResponseRec);
executeServerActionResult.qRCodeErrorTypeIdOut = OS.DataConversion.ServerDataConverter.from(outputs.QRCodeErrorTypeId, OS.DataTypes.DataTypes.Text);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestoneDetail$rssespaceconnect2_orbitmobile_bl_ActionGetScanMilestoneQRCode", [{
name: "Response",
attrName: "responseOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_ISModel.GetScanMilestoneQRCodeResponseRec();
},
complexType: Connect2_OrbitMobile_ISModel.GetScanMilestoneQRCodeResponseRec
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
Controller.prototype.get_MilestoneInformation$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:v4jvE_Qfm0Gk949P4gV36Q:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.KxCj7xn2uECvFgaQUYq02A/DataActions.v4jvE_Qfm0Gk949P4gV36Q:dzaQtxdKqJ8UQHLqU1Km_w", "Connect2_OrbitMobile_MUI", "Get_MilestoneInformation", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminMilestoneDetail/Get_MilestoneInformation");
return controller.callDataAction("DataActionGet_MilestoneInformation", "screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminMilestoneDetail/DataActionGet_MilestoneInformation", "0LuhuB2MCUL7jPHcmzWGkA", function (b) {
model.variables.get_MilestoneInformationDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.get_MilestoneInformationDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.get_MilestoneInformationDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminMilestoneDetail/Get_MilestoneInformation On After Fetch");
controller._onAfterFetch_Get_MilestoneInformation$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:v4jvE_Qfm0Gk949P4gV36Q", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["get_MilestoneInformation$DataActRefresh"];
// Client Actions
Controller.prototype._onClick_ScanQrCode$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_ScanQrCode");
callContext = controller.callContext(callContext);
var scanBarcodeVar = new OS.DataTypes.VariableHolder();
var checkBarcodePluginVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.scanBarcodeVar = scanBarcodeVar;
varBag.checkBarcodePluginVar = checkBarcodePluginVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:MqO7L5pxT0WJsDZTJMIGSA:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.KxCj7xn2uECvFgaQUYq02A/ClientActions.MqO7L5pxT0WJsDZTJMIGSA:RPPCPPtMtMpe7xaRc_D2PQ", "Connect2_OrbitMobile_MUI", "OnClick_ScanQrCode", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SYrC9X5z9U6SuYcUUum8wQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Has QRCode?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:u7k2pfjwZE+Ir8RZ6IDTFA", callContext.id) && model.variables.get_MilestoneInformationDataAct.hasQRCodeOut)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:aUoqxyQ2skGdHtjxPTJ7Dw", callContext.id);
// Execute Action: CheckBarcodePlugin
model.flush();
return BarcodePluginController.default.checkBarcodePlugin$Action(callContext).then(function (value) {
checkBarcodePluginVar.value = value;
}).then(function () {
// Is available?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bfk2OMeXCUS5XDQhw2m1dQ", callContext.id) && checkBarcodePluginVar.value.isAvailableOut)) {
// Set IsProcessingData
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:sYgHNIWYRkO9KXWCaqGVGQ", callContext.id);
// IsProcessingData = True
model.variables.isProcessingDataVar = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fPXyUNF3eUuC58BkgOzebA", callContext.id);
// Execute Action: ScanBarcode
model.flush();
return BarcodePluginController.default.scanBarcode$Action("Please center the code in the frame", Connect2_OrbitMobile_MUIModel.staticEntities.cameraDirection.backCamera, Connect2_OrbitMobile_MUIModel.staticEntities.scanOrientation.portrait, false, "Scan", false, OS.BuiltinFunctions.textToInteger("Entities.Format.ALL"), -1, "Entities.AndroidScanningLibrary.ZXing", callContext).then(function (value) {
scanBarcodeVar.value = value;
}).then(function () {
// Successful scan?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:S2GPpNXdIkuNByxvRNlpIA", callContext.id) && scanBarcodeVar.value.successOut)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XMDRG5QDk02Y7agtkTDkNA", callContext.id);
// Execute Action: OnHandle_ScanCode
return controller._onHandle_ScanCode$Action(scanBarcodeVar.value.scanResultOut.textAttr, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Sha0MjViF0m9_XEGD41SSA", callContext.id);
});
} else {
// Set IsProcessingData
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:u13Egp62r0mRkg2cLRPFhA", callContext.id);
// IsProcessingData = False
model.variables.isProcessingDataVar = false;
// User closed the scanner?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5WHjlzIdn0GFKHb84h0_Qw", callContext.id) && (scanBarcodeVar.value.errorOut.errorCodeAttr === "OS-PLUG-BARC-0006"))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xaU2eVT_p0yYyf8qDmB1qA", callContext.id);
} else {
// Unavailable
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CgDylq246k+Qi3QDIPrusg", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage(scanBarcodeVar.value.errorOut.errorMessageAttr, /*Info*/ 0);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KlK_aGlAKUmP3OQ40HQBpQ", callContext.id);
}

}

});
});
} else {
// Unavailable
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RGqcNJnmp0uTYlj3Tu3h1g", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage(checkBarcodePluginVar.value.errorOut.errorMessageAttr, /*Info*/ 0);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ENV2zkylXkeW0lGVqxIdKw", callContext.id);
}

});
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:AJe4Lri31kSMI1gQ2TVWrQ", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:MqO7L5pxT0WJsDZTJMIGSA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:MqO7L5pxT0WJsDZTJMIGSA", callContext.id);
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
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:xHuOPONzE0iNuQPHXOPqTA:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.KxCj7xn2uECvFgaQUYq02A/ClientActions.xHuOPONzE0iNuQPHXOPqTA:KN4heN9lD+sPqicLAQXxIQ", "Connect2_OrbitMobile_MUI", "OnToggle_PopupQRCode", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bbI310ihcUOnoFOIPKDDKQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:kfN9LjF03k6PY49_ZaoZvw", callContext.id);
// QRCodePopupOpened = notQRCodePopupOpened
model.variables.qRCodePopupOpenedVar = !(model.variables.qRCodePopupOpenedVar);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:sQ2zLucOp06WIflYxiGEhw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:xHuOPONzE0iNuQPHXOPqTA", callContext.id);
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
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Kx2mPeZASkSyGo8Y+_VdgQ:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.KxCj7xn2uECvFgaQUYq02A/ClientActions.Kx2mPeZASkSyGo8Y+_VdgQ:IVi7HHTwMS8asCEOy9LKkw", "Connect2_OrbitMobile_MUI", "RefreshData", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:cyU+Wb35S0qM_eiW1heL2w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uLxAS9F_90qe+JgXlYutoQ", callContext.id);
// IsFetchingData = True
model.variables.isFetchingDataVar = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XGaNWrjza0iyfhC_VbuT0w", callContext.id);
// Refresh Query: Get_MilestoneInformation
var result = controller.get_MilestoneInformation$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KQc1KqnkSE2lvhE4xirAgQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Kx2mPeZASkSyGo8Y+_VdgQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Kx2mPeZASkSyGo8Y+_VdgQ", callContext.id);
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
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:BHD8Yc0M1EuoOr1Q6ZVwBw:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.KxCj7xn2uECvFgaQUYq02A/ClientActions.BHD8Yc0M1EuoOr1Q6ZVwBw:mObQ5m0O+oaKO8TxLDk3Mw", "Connect2_OrbitMobile_MUI", "ComponentDidUpdate_QRCode", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:psJPyRwigUKlyiRDxBAtQw", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0rnCmUlYwEyaLcwOj7uOJQ", callContext.id);
// Execute Action: CopyClassesAcrossPortal2
UBT_CWController.default.copyClassesAcrossPortal$Action(idService.getId("Root_QRCode"), idService.getId("Popup_QRCode"), callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NdehLHb8Y02ubyGwZoh9yA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:BHD8Yc0M1EuoOr1Q6ZVwBw", callContext.id);
}

};
Controller.prototype._onAfterFetch_Get_MilestoneInformation$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnAfterFetch_Get_MilestoneInformation");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:27aMY2X7SkeW4byISwLQzQ:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.KxCj7xn2uECvFgaQUYq02A/ClientActions.27aMY2X7SkeW4byISwLQzQ:Pwe_KE6DliG1KCiKm3Au4A", "Connect2_OrbitMobile_MUI", "OnAfterFetch_Get_MilestoneInformation", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Sz23RfsBnkqZjyeLuAfeew", callContext.id);
// Set Screen Data
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7qH2ZEJGtUaFQ5_vqM3SEg", callContext.id);
// MilestoneType = Get_MilestoneInformation.OrbitMilestoneType
model.variables.milestoneTypeVar = model.variables.get_MilestoneInformationDataAct.orbitMilestoneTypeOut;
// Set IsFetchingData to False
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UIuhAfnS3UeimJ6xaIhGzw", callContext.id);
// IsFetchingData = False
model.variables.isFetchingDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:hbsOS0FFy0ST6PbcYzdAFg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:27aMY2X7SkeW4byISwLQzQ", callContext.id);
}

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
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:vL_xwGeIm0mGXBkLL4RY3A:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.KxCj7xn2uECvFgaQUYq02A/ClientActions.vL_xwGeIm0mGXBkLL4RY3A:VyQ8VJlXz5DGklk37CPRWg", "Connect2_OrbitMobile_MUI", "OnHandle_OrbitErrorMessage", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GdyKHHNtMUGHw9SGm6hhRg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Reset Error Message
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Z5T4oysDEky1wS+FPq1ceA", callContext.id);
// ScanError.IsShowErrorMessage = False
model.variables.scanErrorVar.isShowErrorMessageAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Z5T4oysDEky1wS+FPq1ceA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ScanError.Message = ""
model.variables.scanErrorVar.messageAttr = "";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:HCHCycLftUqmpfsfk8sF4w", callContext.id);
// Execute Action: OnClick_ScanQrCode
return controller._onClick_ScanQrCode$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:FD5rWtfuK0+FqkiBGrRoAQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:vL_xwGeIm0mGXBkLL4RY3A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:vL_xwGeIm0mGXBkLL4RY3A", callContext.id);
throw ex;

});
};
Controller.prototype._onHandle_ScanMilestoneDone$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_ScanMilestoneDone");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:NRGsyAZy1EGKvYyKXMWNjg:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.KxCj7xn2uECvFgaQUYq02A/ClientActions.NRGsyAZy1EGKvYyKXMWNjg:dpDROAEi+d5LRY2hdoBQJQ", "Connect2_OrbitMobile_MUI", "OnHandle_ScanMilestoneDone", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4Emn+5snyE2A__JwDpI+pQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lS8yQSkVm0m6v+kxVgqX3w", callContext.id);
// Execute Action: OnToggle_PopupQRCode
controller._onToggle_PopupQRCode$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7VWZLyRv7E+ZuPxtU7cagw", callContext.id);
// Execute Action: OnClick_ScanQrCode
return controller._onClick_ScanQrCode$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YArN1e9qakaUL0J__pTuOw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:NRGsyAZy1EGKvYyKXMWNjg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:NRGsyAZy1EGKvYyKXMWNjg", callContext.id);
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
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Gkhs7WaW5UKAz7VIbFXI0g:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.KxCj7xn2uECvFgaQUYq02A/ClientActions.Gkhs7WaW5UKAz7VIbFXI0g:kz+2SU0WKh2qUksLZQN7SA", "Connect2_OrbitMobile_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:A_VLg3A0D0G2WT2MHBogcQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+rBQgCRO7kOI87oI_76zhw", callContext.id);
wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_AdminFlow_ScreenBlock_AdminMilestoneDetail_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnReady", {
FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestoneDetail.OnReady$wasCurrentViewRestoredFromCacheJSResult"))();
jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:kKT5vhZBY0qhVPCRyGuW3w", callContext.id) && wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:hcNmpjbnAEuut9LGyt8CBQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wVWvvA_VTUSkXxIyRK4rYw", callContext.id);
// Execute Action: RefreshData
return controller._refreshData$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lG9Ma6nH0kWtBH9RuGA+vQ", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Gkhs7WaW5UKAz7VIbFXI0g", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Gkhs7WaW5UKAz7VIbFXI0g", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestoneDetail.OnReady$wasCurrentViewRestoredFromCacheJSResult", [{
name: "FromCache",
attrName: "fromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._onHandle_ScanCode$Action = function (codeScannedIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_ScanCode");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestoneDetail.OnHandle_ScanCode$vars"))());
vars.value.codeScannedInLocal = codeScannedIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getMemberByMemberIdVar = new OS.DataTypes.VariableHolder();
var getScanMilestoneQRCodeVar = new OS.DataTypes.VariableHolder();
var getCacheableSignedImageURLVar = new OS.DataTypes.VariableHolder();
var appManager_GetCachedUserInfoVar = new OS.DataTypes.VariableHolder();
var jSONDeserialize_QRCodeInformationVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(Connect2_OrbitMobile_MUIModel.QRCodeInformationRec))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.getMemberByMemberIdVar = getMemberByMemberIdVar;
varBag.getScanMilestoneQRCodeVar = getScanMilestoneQRCodeVar;
varBag.getCacheableSignedImageURLVar = getCacheableSignedImageURLVar;
varBag.appManager_GetCachedUserInfoVar = appManager_GetCachedUserInfoVar;
varBag.jSONDeserialize_QRCodeInformationVar = jSONDeserialize_QRCodeInformationVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:xwBB+vBzYE+4gwQu3BA7zg:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.KxCj7xn2uECvFgaQUYq02A/ClientActions.xwBB+vBzYE+4gwQu3BA7zg:IF6KDyIyEI+oHbcqzq_vvg", "Connect2_OrbitMobile_MUI", "OnHandle_ScanCode", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4NHnLWOXhU+N0jAeE9RyzQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Force lowercase
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TPsWXS1LpEWpx3b3ce+ZTA", callContext.id);
// CodeScanned = ToLower
vars.value.codeScannedInLocal = OS.BuiltinFunctions.toLower(vars.value.codeScannedInLocal);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PmiKTYFKcEiLNnCcPJijtg", callContext.id);
// JSON Deserialize: JSONDeserialize_QRCodeInformation
jSONDeserialize_QRCodeInformationVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(vars.value.codeScannedInLocal, Connect2_OrbitMobile_MUIModel.QRCodeInformationRec, false);
// Has data?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Dqm9ThSEE0GoTadOOw7h0g", callContext.id) && (!(jSONDeserialize_QRCodeInformationVar.value.dataOut.eventIdAttr.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier()))) && !(jSONDeserialize_QRCodeInformationVar.value.dataOut.memberIdAttr.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier())))))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4TBYpVVbBUSvAhCfHcL52Q", callContext.id);
// Execute Action: GetMemberByMemberId
model.flush();
return controller.getMemberByMemberId$ServerAction(jSONDeserialize_QRCodeInformationVar.value.dataOut.memberIdAttr, callContext).then(function (value) {
getMemberByMemberIdVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:U7QDe9mNNkyZOemvOwqPjQ", callContext.id);
// Execute Action: GetCacheableSignedImageURL
model.flush();
return Connect2_LegacySharedController.default.getCacheableSignedImageURL$Action(jSONDeserialize_QRCodeInformationVar.value.dataOut.memberIdAttr, Connect2_OrbitMobile_MUIModel.staticEntities.directoryAPIFilter.member, Connect2_OrbitMobile_MUIModel.staticEntities.imageSigningSize.small, callContext).then(function (value) {
getCacheableSignedImageURLVar.value = value;
});
}).then(function () {
// Set Scanned User
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pSN+rzEZr0Gde3CVtNuw_w", callContext.id);
// ScannedUser.Member = GetMemberByMemberId.Response
model.variables.scannedUserVar.memberAttr = getMemberByMemberIdVar.value.responseOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pSN+rzEZr0Gde3CVtNuw_w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ScannedUser.SignedURL = GetCacheableSignedImageURL.URL
model.variables.scannedUserVar.signedURLAttr = getCacheableSignedImageURLVar.value.uRLOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pSN+rzEZr0Gde3CVtNuw_w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ScannedUser.MilestoneDescription = In_MilestoneDescription
model.variables.scannedUserVar.milestoneDescriptionAttr = model.variables.in_MilestoneDescriptionIn;
}).then(function () {
// Same EventId?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dn96hkG940yzClVQcA6rWQ", callContext.id) && jSONDeserialize_QRCodeInformationVar.value.dataOut.eventIdAttr.equals(model.variables.in_EventIdIn))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WfA7gaD9TEOh3BcVJRGrYg", callContext.id);
// Execute Action: AppManager_GetCachedUserInfo
appManager_GetCachedUserInfoVar.value = UBT_AppManagerController.default.appManager_GetCachedUserInfo$Action(callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xcJ098wE9Uqhx0hHGDj5zQ", callContext.id);
// Execute Action: GetScanMilestoneQRCode
model.flush();
return controller.getScanMilestoneQRCode$ServerAction(Connect2_OrbitMobile_MUIModel.staticEntities.scanClient.connectMobile, function () {
var rec = new Connect2_OrbitMobile_BLModel.ScannedQRCodeInfoRec();
rec.eventIdAttr = jSONDeserialize_QRCodeInformationVar.value.dataOut.eventIdAttr;
rec.milestoneIdAttr = model.variables.in_MilestoneIdIn;
rec.milestoneTypeAttr = model.variables.milestoneTypeVar.idAttr;
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
rec.adminMemberIdAttr = ((OS.BuiltinFunctions.textToLongIntegerValidate(appManager_GetCachedUserInfoVar.value.userInformationOut.memberIdAttr)) ? (OS.BuiltinFunctions.textToLongInteger(appManager_GetCachedUserInfoVar.value.userInformationOut.memberIdAttr)) : (OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier())));
rec.adminFirstNameAttr = appManager_GetCachedUserInfoVar.value.userInformationOut.firstNameAttr;
rec.adminLastNameAttr = appManager_GetCachedUserInfoVar.value.userInformationOut.lastNameAttr;
rec.adminLocalityAttr = appManager_GetCachedUserInfoVar.value.userInformationOut.localityAttr;
rec.adminCountryAttr = appManager_GetCachedUserInfoVar.value.userInformationOut.countryAttr;
return rec;
}();
return rec;
}(), callContext).then(function (value) {
getScanMilestoneQRCodeVar.value = value;
}).then(function () {
// Set Scanned User Info
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IOi+9hOj+0G0lzq1cOEAww", callContext.id);
// ScannedUser.UserRole = GetScanMilestoneQRCode.Response.UserRole
model.variables.scannedUserVar.userRoleAttr = getScanMilestoneQRCodeVar.value.responseOut.userRoleAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IOi+9hOj+0G0lzq1cOEAww", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ScannedUser.Seats = GetScanMilestoneQRCode.Response.Seats
model.variables.scannedUserVar.seatsAttr = getScanMilestoneQRCodeVar.value.responseOut.seatsAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IOi+9hOj+0G0lzq1cOEAww", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ScannedUser.Tag = GetScanMilestoneQRCode.Response.Tag
model.variables.scannedUserVar.tagAttr = getScanMilestoneQRCodeVar.value.responseOut.tagAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IOi+9hOj+0G0lzq1cOEAww", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ScannedUser.GuestRole = GetScanMilestoneQRCode.Response.GuestRole
model.variables.scannedUserVar.guestRoleAttr = getScanMilestoneQRCodeVar.value.responseOut.guestRoleAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IOi+9hOj+0G0lzq1cOEAww", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// ScannedUser.RowAllocation = GetScanMilestoneQRCode.Response.RowAllocation
model.variables.scannedUserVar.rowAllocationAttr = getScanMilestoneQRCodeVar.value.responseOut.rowAllocationAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IOi+9hOj+0G0lzq1cOEAww", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// ScannedUser.SeatingPlan = GetScanMilestoneQRCode.Response.SeatingPlanName
model.variables.scannedUserVar.seatingPlanAttr = getScanMilestoneQRCodeVar.value.responseOut.seatingPlanNameAttr;
}).then(function () {
// Success?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9hJgE5QCOkq8yypiKKAL8w", callContext.id) && getScanMilestoneQRCodeVar.value.responseOut.statusAttr.successAttr)) {
// Set IsSuccessfulScan
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:22hrYdaiNEqqePKxiWi18g", callContext.id);
// ScanResult.Success = True
model.variables.scanResultVar.successAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:22hrYdaiNEqqePKxiWi18g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ScanResult.ErrorMessage = GetScanMilestoneQRCode.Response.Status.ErrorMessage
model.variables.scanResultVar.errorMessageAttr = getScanMilestoneQRCodeVar.value.responseOut.statusAttr.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2zVfH_lXjEKoMZ8rqNPdSA", callContext.id);
// Execute Action: OnToggle_PopupQRCode_Success
controller._onToggle_PopupQRCode$Action(callContext);
// Set IsProcessingData
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gB4IIsziFEKR6E3g5YXZdg", callContext.id);
// IsProcessingData = False
model.variables.isProcessingDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5A8WvQ8ASES6B3g_jTvO9Q", callContext.id);
} else {
// Set IsSuccessfulScan
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bZH+WrnuzEyGB04llTsA0Q", callContext.id);
// ScanResult.Success = False
model.variables.scanResultVar.successAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bZH+WrnuzEyGB04llTsA0Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ScanResult.ErrorMessage = GetScanMilestoneQRCode.Response.Status.ErrorMessage
model.variables.scanResultVar.errorMessageAttr = getScanMilestoneQRCodeVar.value.responseOut.statusAttr.errorMessageAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rRDcZ_y_sUmnnsAMgPu8YQ", callContext.id);
// Execute Action: OnToggle_PopupQRCode_Error
controller._onToggle_PopupQRCode$Action(callContext);
// Set IsProcessingData
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:H8HXz1geQ0y0m1B0K9d37A", callContext.id);
// IsProcessingData = False
model.variables.isProcessingDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pvJzr1DnbkuSU4cnG1p8uw", callContext.id);
}

});
} else {
// Set IsSuccessfulScan
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5fmI0ZmycEK3UQP48ul4ZQ", callContext.id);
// ScanResult.Success = False
model.variables.scanResultVar.successAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5fmI0ZmycEK3UQP48ul4ZQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ScanResult.ErrorMessage = "Guest is not allocated to this event."
model.variables.scanResultVar.errorMessageAttr = "Guest is not allocated to this event.";
// Empty Scanned User
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IfXrLdkDwEW0O2BiivgkGw", callContext.id);
// ScannedUser.UserRole = ""
model.variables.scannedUserVar.userRoleAttr = "";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IfXrLdkDwEW0O2BiivgkGw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ScannedUser.Seats = EmptySeats
model.variables.scannedUserVar.seatsAttr = vars.value.emptySeatsVar;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IfXrLdkDwEW0O2BiivgkGw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ScannedUser.Tag = ""
model.variables.scannedUserVar.tagAttr = "";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IfXrLdkDwEW0O2BiivgkGw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// ScannedUser.GuestRole = ""
model.variables.scannedUserVar.guestRoleAttr = "";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IfXrLdkDwEW0O2BiivgkGw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// ScannedUser.RowAllocation = ""
model.variables.scannedUserVar.rowAllocationAttr = "";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IfXrLdkDwEW0O2BiivgkGw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// ScannedUser.SeatingPlan = ""
model.variables.scannedUserVar.seatingPlanAttr = "";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6E4+srJ6Y0aXlb7RkvHmEA", callContext.id);
// Execute Action: OnToggle_PopupQRCode_WrongEvent
controller._onToggle_PopupQRCode$Action(callContext);
// Set IsProcessingData
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pylvs2kyZkSUopXj1jm1nA", callContext.id);
// IsProcessingData = False
model.variables.isProcessingDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:kmyAeZa+tkmVEaj6rtYUrg", callContext.id);
}

});
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oKHrDLY3ME+yNTHth2yz+Q", callContext.id);
// IsProcessingData = False
model.variables.isProcessingDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:V2nczidTkEqPkOQDm1G9xQ", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("This QR Code was unable to be processed. Please try again later.", /*Info*/ 0);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:inZBmriNsEGig+NfUKTf_A", callContext.id);
}

});
}).catch(function (ex) {
OS.Logger.trace("ScreenBlock_AdminMilestoneDetail.OnHandle_ScanCode", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:btSWbApbwE+M89OTqgSDfw", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2N+JzMFo2UOxNFlx1WNFMw", callContext.id);
// IsProcessingData = False
model.variables.isProcessingDataVar = false;
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6nZ9c2JqI0iyNfzY9kdzgQ", callContext.id) && ((OS.BuiltinFunctions.index(allExceptionsVar.value.exceptionMessageAttr, "Failed to deserialize JSON", 0, false, true)) !== (-1)))) {
// SetErrorMessage
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:O_zo3qjnXk+81CtXgKm4aw", callContext.id);
// ScanError.IsShowErrorMessage = True
model.variables.scanErrorVar.isShowErrorMessageAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:O_zo3qjnXk+81CtXgKm4aw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ScanError.Message = "Unable to read QR code, please try again."
model.variables.scanErrorVar.messageAttr = "Unable to read QR code, please try again.";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CdgeDviCAEOSgadKxfdDkw", callContext.id);
return OS.Flow.returnAsync();

} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:EfjwrXr6bkitq6qCUWAWkg", callContext.id);
// Raise Error: UnknownError
throw new OS.Exceptions.Exceptions.UserException("Connect2_OrbitMobile_MUI.UnknownError", allExceptionsVar.value.exceptionMessageAttr);
}

});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:xwBB+vBzYE+4gwQu3BA7zg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:xwBB+vBzYE+4gwQu3BA7zg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestoneDetail.OnHandle_ScanCode$vars", [{
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

Controller.prototype.onClick_ScanQrCode$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_ScanQrCode$Action, callContext);

};
Controller.prototype.onToggle_PopupQRCode$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onToggle_PopupQRCode$Action, callContext);

};
Controller.prototype.refreshData$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._refreshData$Action, callContext);

};
Controller.prototype.componentDidUpdate_QRCode$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._componentDidUpdate_QRCode$Action, callContext);

};
Controller.prototype.onAfterFetch_Get_MilestoneInformation$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onAfterFetch_Get_MilestoneInformation$Action, callContext);

};
Controller.prototype.onHandle_OrbitErrorMessage$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_OrbitErrorMessage$Action, callContext);

};
Controller.prototype.onHandle_ScanMilestoneDone$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ScanMilestoneDone$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onHandle_ScanCode$Action = function (codeScannedIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ScanCode$Action, callContext, codeScannedIn);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:gsvXRoYDGUKLqTlTbKlOFA:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA:3HoUgFFZNBz79txQ+Fnk_A", "Connect2_OrbitMobile_MUI", "Orbit_ScreenBlocks_AdminFlow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:KxCj7xn2uECvFgaQUYq02A:/NRWebFlows.gsvXRoYDGUKLqTlTbKlOFA/NodesShownInESpaceTree.KxCj7xn2uECvFgaQUYq02A:IFRQKFZ_VuLNLDLF6CiHjw", "Connect2_OrbitMobile_MUI", "ScreenBlock_AdminMilestoneDetail", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:KxCj7xn2uECvFgaQUYq02A", callContext.id);
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_AdminFlow/ScreenBlock_AdminMilestoneDetail On Ready");
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
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestoneDetail.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
};
});

define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_AdminFlow.ScreenBlock_AdminMilestoneDetail.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"fPXyUNF3eUuC58BkgOzebA": {
getter: function (varBag, idService) {
return varBag.scanBarcodeVar.value;
}
},
"aUoqxyQ2skGdHtjxPTJ7Dw": {
getter: function (varBag, idService) {
return varBag.checkBarcodePluginVar.value;
}
},
"+rBQgCRO7kOI87oI_76zhw": {
getter: function (varBag, idService) {
return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
}
},
"BxVf2eiih0yNrCY0zRIYHw": {
getter: function (varBag, idService) {
return varBag.vars.value.emptySeatsVar;
}
},
"Lic29qyzIkKoMzB8+klcKw": {
getter: function (varBag, idService) {
return varBag.vars.value.codeScannedInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"btSWbApbwE+M89OTqgSDfw": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"4TBYpVVbBUSvAhCfHcL52Q": {
getter: function (varBag, idService) {
return varBag.getMemberByMemberIdVar.value;
}
},
"xcJ098wE9Uqhx0hHGDj5zQ": {
getter: function (varBag, idService) {
return varBag.getScanMilestoneQRCodeVar.value;
}
},
"U7QDe9mNNkyZOemvOwqPjQ": {
getter: function (varBag, idService) {
return varBag.getCacheableSignedImageURLVar.value;
}
},
"WfA7gaD9TEOh3BcVJRGrYg": {
getter: function (varBag, idService) {
return varBag.appManager_GetCachedUserInfoVar.value;
}
},
"PmiKTYFKcEiLNnCcPJijtg": {
getter: function (varBag, idService) {
return varBag.jSONDeserialize_QRCodeInformationVar.value;
}
},
"poDfwfB4JUKJFcL0tDsaUA": {
getter: function (varBag, idService) {
return varBag.model.variables.isFetchingDataVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"g5kkPk6FjUGBbkrWZO8tNw": {
getter: function (varBag, idService) {
return varBag.model.variables.isProcessingDataVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"ohGiU2dkCkqg6efzECQYKw": {
getter: function (varBag, idService) {
return varBag.model.variables.scanResultVar;
}
},
"idhOyWj+EUqQraMHrqbBOA": {
getter: function (varBag, idService) {
return varBag.model.variables.scannedUserVar;
}
},
"knP8+bXAXUmkQDvYKs+uew": {
getter: function (varBag, idService) {
return varBag.model.variables.milestoneTypeVar;
}
},
"Yjz7TEYoQUagZyKMqQMwew": {
getter: function (varBag, idService) {
return varBag.model.variables.qRCodePopupOpenedVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"XUNJzPZTY0e9JjBqlQd5Gw": {
getter: function (varBag, idService) {
return varBag.model.variables.scanErrorVar;
}
},
"CSiTKa8WlECGgdFpd8oDUw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"oh5o_MsbTUKAZhb7W3B8GQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MilestoneIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"WosdKahLR0q5XbM+5KxoBQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MilestoneNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"9D7iniof4E+O6ERmI0PzVw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MilestoneDateIn;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"_fQaBmLa20asit1h951BSA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MilestoneDescriptionIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"k97AMlvw9kS5b+Ylfbs2tg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MilestoneStartDateIn;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"SUiBsF2HME6Ey6HD3eUtEA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MilestoneEndDateIn;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"v4jvE_Qfm0Gk949P4gV36Q": {
getter: function (varBag, idService) {
return varBag.model.variables.get_MilestoneInformationDataAct;
}
},
"qoufQp2Erk+hcK2yPrAS9A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"eubhqQ3UB0WK2A2doB2Bzw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"1SsHDO7Qn0eM3Kkm5RAesQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderLeft"));
})(varBag.model, idService);
}
},
"D7hvrhpi50Www6qWiWqkUg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"wOrlZuuhn0aBHma7JfH5tg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderRight"));
})(varBag.model, idService);
}
},
"3w3IdImCQ0y+6wwIcrcC7A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"4DQSYGVuwEamQ+gfwuqxGg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"8s6ZOwxeqkGEwVVDpSbtPA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsNotFetching"));
})(varBag.model, idService);
}
},
"jIueqgmb4EWyQpCeX73lnQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasFetched"));
})(varBag.model, idService);
}
},
"toIW3dQ8aUy6DpBWaXJxGA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("RootPlaceholder_QRCode"));
})(varBag.model, idService);
}
},
"pxBejfQxVEihFQ7W8Voldg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Root_QRCode"));
})(varBag.model, idService);
}
},
"zTBN2UJNqUy1gG2EUgHPKw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Popup_QRCode"));
})(varBag.model, idService);
}
},
"N6oy0Emv3ESV6gHeoZRB5A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomBar"));
})(varBag.model, idService);
}
},
"hKytwxJLjUGmFYM3UEvnKw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomBar"));
})(varBag.model, idService);
}
},
"bLianqoRvUayNDAFuIuzAw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
},
"g0OkULsUyEO4mmTy616WDQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
