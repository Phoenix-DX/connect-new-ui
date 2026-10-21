define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_QRCode.ScreenBlock_GenerateQRCode.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_BL.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_LegacyShared.controller", "UBT_AppManager.model", "UBT_AppManager.controller", "Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$model", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.ContactHelpdesk_Footer.mvc$model", "Connect2_OrbitMobile_BL.model$GetEventQRCode_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.controller$GetContactHelpdeskSubject_Event", "Connect2_LegacyShared.controller$GetCacheableSignedImageURL", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_BLModel, Connect2_OrbitMobile_MUIController, Connect2_LegacySharedController, UBT_AppManagerModel, UBT_AppManagerController, Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvcModel, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvcModel) {
var OS = OutSystems.Internal;

var Get_EventQRCodeDataActRec = (function (_super) {
__extends(Get_EventQRCodeDataActRec, _super);
function Get_EventQRCodeDataActRec(defaults) {
_super.apply(this, arguments);
}
Get_EventQRCodeDataActRec.attributesToDeclare = function () {
return [
this.attr("Response", "responseOut", "Response", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.GetEventQRCode_ScreenRec());
}, true, Connect2_OrbitMobile_BLModel.GetEventQRCode_ScreenRec)
].concat(_super.attributesToDeclare.call(this));
};
Get_EventQRCodeDataActRec.fromStructure = function (str) {
return new Get_EventQRCodeDataActRec(new Get_EventQRCodeDataActRec.RecordClass({
responseOut: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Get_EventQRCodeDataActRec.init();
return Get_EventQRCodeDataActRec;
})(OS.Model.DataSourceRecord);

var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("UserName", "userNameVar", "UserName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("UserLocation", "userLocationVar", "UserLocation", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("UserSignedURL", "userSignedURLVar", "UserSignedURL", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("IsFetchingData", "isFetchingDataVar", "IsFetchingData", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("QRCodeData", "qRCodeDataVar", "QRCodeData", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_BLModel.GetEventQRCode_ScreenRec());
}, false, Connect2_OrbitMobile_BLModel.GetEventQRCode_ScreenRec), 
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
this.attr("Get_EventQRCode", "get_EventQRCodeDataAct", "get_EventQRCodeDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Get_EventQRCodeDataActRec());
}, true, Get_EventQRCodeDataActRec)
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
Model._hasValidationWidgetsValue = ((((Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvcModel.hasValidationWidgets || Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvcModel.hasValidationWidgets);
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

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Orbit_ScreenBlocks_QRCode.ScreenBlock_GenerateQRCode");
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_QRCode.ScreenBlock_GenerateQRCode.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "Connect2_LegacyShared.controller", "UBT_AppManager.model", "UBT_AppManager.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_QRCode.ScreenBlock_GenerateQRCode.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_QRCode.ScreenBlock_GenerateQRCode.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.ContactHelpdesk_Footer.mvc$view", "Connect2_OrbitMobile_BL.model$GetEventQRCode_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.controller$GetContactHelpdeskSubject_Event", "Connect2_LegacyShared.controller$GetCacheableSignedImageURL", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, Connect2_LegacySharedController, UBT_AppManagerModel, UBT_AppManagerController, React, OSView, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_QRCode_ScreenBlock_GenerateQRCode_mvc_model, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_QRCode_ScreenBlock_GenerateQRCode_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, OSWidgets, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvc_view) {
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
        View.displayName = "Orbit_ScreenBlocks_QRCode.ScreenBlock_GenerateQRCode";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_ContactHelpdesk_Footer_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_QRCode_ScreenBlock_GenerateQRCode_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_QRCode_ScreenBlock_GenerateQRCode_mvc_controller;
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
return [$if((model.variables.get_EventQRCodeDataAct.isDataFetchedAttr && !(OS.DataTypes.areBinaryNulls(model.variables.get_EventQRCodeDataAct.responseOut.qRCodeAsBinaryAttr, OS.BuiltinFunctions.nullBinary()))), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-qrcode-member-cont",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-member-photo-cont",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
style: "orbit-member-photo",
type: /*External*/ 1,
url: model.variables.userSignedURLVar,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bold font-size-1-1em full-width margin-top-base text-align-center",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.userNameVar,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "full-width margin-top-s text-align-center",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.userLocationVar,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "full-width text-align-center",
visible: ((model.variables.qRCodeDataVar.getEventQRCodeResponseAttr.guestRoleAttr) !== ("")),
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "white-space-nowrap",
value: model.variables.qRCodeDataVar.getEventQRCodeResponseAttr.guestRoleAttr,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "display-flex",
visible: !(model.variables.qRCodeDataVar.getEventQRCodeResponseAttr.seatsAttr.isEmpty),
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "white-space-nowrap",
text: ["Row:"],
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.qRCodeDataVar.getEventQRCodeResponseAttr.seatsAttr,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("ihJC3wVpDkqzVMe7poSesw.Value"), function () {
return (((((model.variables.qRCodeDataVar.getEventQRCodeResponseAttr.seatsAttr.getCurrentRowNumber(callContext.iterationContext)) !== (0))) ? (" & ") : (" ")) + model.variables.qRCodeDataVar.getEventQRCodeResponseAttr.seatsAttr.getCurrent(callContext.iterationContext).seatAllocationAttr);
}, function () {
return model.variables.qRCodeDataVar.getEventQRCodeResponseAttr.seatsAttr.getCurrentRowNumber(callContext.iterationContext);
}, function () {
return model.variables.qRCodeDataVar.getEventQRCodeResponseAttr.seatsAttr.getCurrent(callContext.iterationContext).seatAllocationAttr;
}),
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, callContext, idService, "1")
},
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "full-width text-align-center",
visible: ((model.variables.qRCodeDataVar.getEventQRCodeResponseAttr.tagAttr) !== ("")),
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "white-space-nowrap",
value: ("GMP Tag: " + model.variables.qRCodeDataVar.getEventQRCodeResponseAttr.tagAttr),
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
})), $if(!(OS.DataTypes.areBinaryNulls(model.variables.qRCodeDataVar.qRCodeAsBinaryAttr, OS.BuiltinFunctions.nullBinary())), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "full-width margin-top-xxl text-align-center",
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "font-size-0-9em",
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Check into Event"), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
imageContent: model.variables.qRCodeDataVar.qRCodeAsBinaryAttr,
style: "orbit-qrcode-code",
type: /*Binary*/ 2,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}, function () {
return [];
}))];
}, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, {
inputs: {
Message: "Unfortunately the QR Code couldn\'t be generated. Please try again later."
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
uuid: "23",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
}, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, {
inputs: {
In_SkeletonLoadingId: Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.memberQRCode
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
uuid: "24",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
}),
bottomBar: new PlaceholderContent(function () {
return [$if(!(model.variables.isFetchingDataVar), false, this, function () {
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
uuid: "25",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
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
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_QRCode.ScreenBlock_GenerateQRCode.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_BL.model", "Connect2_LegacyShared.controller", "UBT_AppManager.model", "UBT_AppManager.controller", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_QRCode.ScreenBlock_GenerateQRCode.mvc$debugger", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_QRCode.ScreenBlock_GenerateQRCode.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", "Connect2_OrbitMobile_BL.model$GetEventQRCode_ScreenRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_BL", "Connect2_OrbitMobile_MUI.controller$GetContactHelpdeskSubject_Event", "Connect2_LegacyShared.controller$GetCacheableSignedImageURL", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "Connect2_OrbitMobile_MUI.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_BLModel, Connect2_LegacySharedController, UBT_AppManagerModel, UBT_AppManagerController, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_QRCode_ScreenBlock_GenerateQRCode_mvc_Debugger, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_QRCode_ScreenBlock_GenerateQRCode_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
get_EventQRCode$DataActRefresh: -1
};
this.dataFetchDependentsGraph = {
get_EventQRCode$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions
Controller.prototype.get_EventQRCode$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Bih+eL9WK0iyLDJpWtqcNg:/NRWebFlows.Y1_i4sHzKUeiNswE+T5aUA/NodesShownInESpaceTree.rrnU3UoqQUu00sYxJPeEKg/DataActions.Bih+eL9WK0iyLDJpWtqcNg:aVU4H2m4ONtVvFPMtx8IvA", "Connect2_OrbitMobile_MUI", "Get_EventQRCode", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_QRCode/ScreenBlock_GenerateQRCode/Get_EventQRCode");
return controller.callDataAction("DataActionGet_EventQRCode", "screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks_QRCode/ScreenBlock_GenerateQRCode/DataActionGet_EventQRCode", "+cs6kQlQgFKeE2qoVj9jDg", function (b) {
model.variables.get_EventQRCodeDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.get_EventQRCodeDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.get_EventQRCodeDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_QRCode/ScreenBlock_GenerateQRCode/Get_EventQRCode On After Fetch");
controller._onAfterFetch_Get_EventQRCode$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Bih+eL9WK0iyLDJpWtqcNg", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["get_EventQRCode$DataActRefresh"];
// Client Actions
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
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:E7i1DmRT3EWKrtED+w9M1A:/NRWebFlows.Y1_i4sHzKUeiNswE+T5aUA/NodesShownInESpaceTree.rrnU3UoqQUu00sYxJPeEKg/ClientActions.E7i1DmRT3EWKrtED+w9M1A:Tzw_mB6yzq5XWlnlerO9VA", "Connect2_OrbitMobile_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:36d8HKPcwkSM7NdAYI02cA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YerOBfTtxUWX7OBzcm7EmQ", callContext.id);
wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_QRCode_ScreenBlock_GenerateQRCode_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnReady", {
FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_QRCode.ScreenBlock_GenerateQRCode.OnReady$wasCurrentViewRestoredFromCacheJSResult"))();
jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tVIhiCeYvUyEcePHWhRbVg", callContext.id) && wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:K+STqSQ830u7PzvG36JvoQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:hvXOPG0Sm0ultK783rGoow", callContext.id);
// Execute Action: RefreshData
return controller._refreshData$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8rpIh2FeXkuNKe3TtHC5qg", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:E7i1DmRT3EWKrtED+w9M1A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:E7i1DmRT3EWKrtED+w9M1A", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_QRCode.ScreenBlock_GenerateQRCode.OnReady$wasCurrentViewRestoredFromCacheJSResult", [{
name: "FromCache",
attrName: "fromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
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
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:giHpEHurcEWctafEz63i0A:/NRWebFlows.Y1_i4sHzKUeiNswE+T5aUA/NodesShownInESpaceTree.rrnU3UoqQUu00sYxJPeEKg/ClientActions.giHpEHurcEWctafEz63i0A:5DrxRXciOGtfO3NRePhhmw", "Connect2_OrbitMobile_MUI", "OnHandle_ContactHelpdesk", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:y5mj7q7zd06+cEbAyZfedQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9lJTeT2cEUOlEDfSW0BJVw", callContext.id);
// Trigger Event: NavigateTo_ContactHelpdesk
return controller.navigateTo_ContactHelpdesk$Action(OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getContactHelpdeskSubject_Event$Action(model.variables.in_EventNameIn, model.variables.in_EventStartDateIn, model.variables.in_EventEndDateIn, model.variables.in_EventLocationIn, callContext).out_FormattedSubjectOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), model.variables.in_EventNameIn, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:F_JN5y5Zt0WJ7NDEF6ZJzw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:giHpEHurcEWctafEz63i0A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:giHpEHurcEWctafEz63i0A", callContext.id);
throw ex;

});
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
var getCacheableSignedImageURLVar = new OS.DataTypes.VariableHolder();
var appManager_GetCachedUserInfoVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getCacheableSignedImageURLVar = getCacheableSignedImageURLVar;
varBag.appManager_GetCachedUserInfoVar = appManager_GetCachedUserInfoVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:epZoPB20sECGnojiS+UxlA:/NRWebFlows.Y1_i4sHzKUeiNswE+T5aUA/NodesShownInESpaceTree.rrnU3UoqQUu00sYxJPeEKg/ClientActions.epZoPB20sECGnojiS+UxlA:lcTBUYIDfxmK8Aa962hV3w", "Connect2_OrbitMobile_MUI", "RefreshData", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Uo5Vm2Sj9ECVP7qwtulBcg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:f66dTHZNl0iwKYS6slK1XQ", callContext.id);
// IsFetchingData = True
model.variables.isFetchingDataVar = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KNvkybghjEG6cRqOAgQ3ag", callContext.id);
// Execute Action: AppManager_GetCachedUserInfo
appManager_GetCachedUserInfoVar.value = UBT_AppManagerController.default.appManager_GetCachedUserInfo$Action(callContext);

// Set User data
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:AoVWEGVz_ke4RA9ZmrXAVg", callContext.id);
// UserName = AppManager_GetCachedUserInfo.UserInformation.FirstName + " " + AppManager_GetCachedUserInfo.UserInformation.LastName
model.variables.userNameVar = ((appManager_GetCachedUserInfoVar.value.userInformationOut.firstNameAttr + " ") + appManager_GetCachedUserInfoVar.value.userInformationOut.lastNameAttr);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:AoVWEGVz_ke4RA9ZmrXAVg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// UserLocation = AppManager_GetCachedUserInfo.UserInformation.Locality + If
model.variables.userLocationVar = (appManager_GetCachedUserInfoVar.value.userInformationOut.localityAttr + ((((appManager_GetCachedUserInfoVar.value.userInformationOut.localityAttr) !== (""))) ? ((", " + appManager_GetCachedUserInfoVar.value.userInformationOut.countryAttr)) : (appManager_GetCachedUserInfoVar.value.userInformationOut.countryAttr)));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jQL9IKu1fUiHgALz1NBfpQ", callContext.id);
// Execute Action: GetCacheableSignedImageURL
model.flush();
return Connect2_LegacySharedController.default.getCacheableSignedImageURL$Action(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.textToInteger(appManager_GetCachedUserInfoVar.value.userInformationOut.memberIdAttr)), Connect2_OrbitMobile_MUIModel.staticEntities.directoryAPIFilter.member, Connect2_OrbitMobile_MUIModel.staticEntities.imageSigningSize.medium, callContext).then(function (value) {
getCacheableSignedImageURLVar.value = value;
}).then(function () {
// Set User SignedURL
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XPFTxZ8oNk+X9tHDJKJyLQ", callContext.id);
// UserSignedURL = GetCacheableSignedImageURL.URL
model.variables.userSignedURLVar = getCacheableSignedImageURLVar.value.uRLOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oYrMlWWY8U+jOThiRa8Jnw", callContext.id);
// Refresh Query: Get_EventQRCode
var result = controller.get_EventQRCode$DataActRefresh(callContext);
model.flush();
return result;
}).then(function () {
// Set IsFetching to False
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:js4aXiLMGki7_AGwISEcZw", callContext.id);
// IsFetchingData = False
model.variables.isFetchingDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pMLVNzs0iUKQbA_RbySeRg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:epZoPB20sECGnojiS+UxlA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:epZoPB20sECGnojiS+UxlA", callContext.id);
throw ex;

});
};
Controller.prototype._onAfterFetch_Get_EventQRCode$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnAfterFetch_Get_EventQRCode");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:iN6qcbWtrUiKw32Rg1fimw:/NRWebFlows.Y1_i4sHzKUeiNswE+T5aUA/NodesShownInESpaceTree.rrnU3UoqQUu00sYxJPeEKg/ClientActions.iN6qcbWtrUiKw32Rg1fimw:RGu02xaxE_SeJzr67mvpdA", "Connect2_OrbitMobile_MUI", "OnAfterFetch_Get_EventQRCode", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KJBxn4ZRJEOfPgWkueJqXQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YY9bHFuqjEOTEUcrelhi9A", callContext.id);
// QRCodeData = Get_EventQRCode.Response
model.variables.qRCodeDataVar = model.variables.get_EventQRCodeDataAct.responseOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0OCd8Ep+LkuLglBjaNj00Q", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:iN6qcbWtrUiKw32Rg1fimw", callContext.id);
}

};

Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onHandle_ContactHelpdesk$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ContactHelpdesk$Action, callContext);

};
Controller.prototype.refreshData$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._refreshData$Action, callContext);

};
Controller.prototype.onAfterFetch_Get_EventQRCode$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onAfterFetch_Get_EventQRCode$Action, callContext);

};
Controller.prototype.navigateTo_ContactHelpdesk$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Y1_i4sHzKUeiNswE+T5aUA:/NRWebFlows.Y1_i4sHzKUeiNswE+T5aUA:sAQvoCpIGLGddO1JesnlkA", "Connect2_OrbitMobile_MUI", "Orbit_ScreenBlocks_QRCode", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:rrnU3UoqQUu00sYxJPeEKg:/NRWebFlows.Y1_i4sHzKUeiNswE+T5aUA/NodesShownInESpaceTree.rrnU3UoqQUu00sYxJPeEKg:mFCi8oEcJpbHduKQn1SKAg", "Connect2_OrbitMobile_MUI", "ScreenBlock_GenerateQRCode", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:rrnU3UoqQUu00sYxJPeEKg", callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Y1_i4sHzKUeiNswE+T5aUA", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_QRCode/ScreenBlock_GenerateQRCode On Ready");
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
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_QRCode.ScreenBlock_GenerateQRCode.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
};
});

define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_QRCode.ScreenBlock_GenerateQRCode.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"YerOBfTtxUWX7OBzcm7EmQ": {
getter: function (varBag, idService) {
return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
}
},
"jQL9IKu1fUiHgALz1NBfpQ": {
getter: function (varBag, idService) {
return varBag.getCacheableSignedImageURLVar.value;
}
},
"KNvkybghjEG6cRqOAgQ3ag": {
getter: function (varBag, idService) {
return varBag.appManager_GetCachedUserInfoVar.value;
}
},
"BfX97BK4Q0SZD3Nc6Gu+Ng": {
getter: function (varBag, idService) {
return varBag.model.variables.userNameVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"oc2JRO0Zy0+64dMxsfKmtw": {
getter: function (varBag, idService) {
return varBag.model.variables.userLocationVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Ba1uoFghVUS7KX4ocaMyUA": {
getter: function (varBag, idService) {
return varBag.model.variables.userSignedURLVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"N5c4CW3AXUqqm4YeDQXEHw": {
getter: function (varBag, idService) {
return varBag.model.variables.isFetchingDataVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Rubu36++FEOYR_74hy_eXQ": {
getter: function (varBag, idService) {
return varBag.model.variables.qRCodeDataVar;
}
},
"YB9Ncp8tdUmrG8rW6UwLXg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MemberIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"eUf32nGKhUOXdxjKYfEcCg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"AxZGzWGAU0eYyKjoSeVxMA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"2dh0_xwvOEOGBNRELD3LiA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventStartDateIn;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"6_c5im0ta0Gfaa+zmyZGBQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventEndDateIn;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"O1BWLfO6ck+XdxAN1Xw30w": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventLocationIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Bih+eL9WK0iyLDJpWtqcNg": {
getter: function (varBag, idService) {
return varBag.model.variables.get_EventQRCodeDataAct;
}
},
"YNIiuHRcw0ql5l7O35O7IA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"yJtg4HA3R0qLJFlOOjy5Uw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"oei4dGJXSkOB_8t2pxxhzQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderLeft"));
})(varBag.model, idService);
}
},
"26gj0jpQaU+vAHpm22c+4A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"Vg0DqnZmVkuePzMHteYWdA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderRight"));
})(varBag.model, idService);
}
},
"N4RN3PSgQUq4hfGO6etekg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"Vd7q76Aa1kyfZAP1c_OIxA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"DaRJiSsJPkGi4M2dHrLIOw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsNotFetching"));
})(varBag.model, idService);
}
},
"NJbLgAG_u0eN7XbkZfBp0g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasData"));
})(varBag.model, idService);
}
},
"MnBuluD53EyxszAcGPNTUw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasQRCodeData"));
})(varBag.model, idService);
}
},
"R1hheRV_bEOR01Xvh5ffUw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomBar"));
})(varBag.model, idService);
}
},
"RIh9jQFrkkaMyiqgxud9mg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasFetched"));
})(varBag.model, idService);
}
},
"RMMQXoEakUafXEWzU5JgLA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
},
"8yODqmBwGUa8x7W2t2imOQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
