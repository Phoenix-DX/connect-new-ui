define("UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Subdivision_CS.model", "UBTConnectLibrary.model", "APIDomain_Directory_IS.model", "UBTConnectLibrary.ConnectPatterns.ImageCard__Content.mvc$model", "UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_Statistics.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnect_Utils.CW_CTA_PopUps.AddressPopup_Wrapper.mvc$model", "UBTConnect.controller$GetDescriptor_Subdivision_GenderSplit", "Connect_Subdivision_CS.model$UI_Subdivision_Card_ContentRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Subdivision_CS", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "APIDomain_Directory_IS.model$Directory_CoordinatesRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Subdivision_CSModel, UBTConnectLibraryModel, APIDomain_Directory_ISModel, UBTConnectLibrary_ConnectPatterns_ImageCard__Content_mvcModel, UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_Statistics_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_Wrapper_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("In_Subdivision_CardContent", "in_Subdivision_CardContentIn", "In_Subdivision_CardContent", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Subdivision_CSModel.UI_Subdivision_Card_ContentRec());
}, false, Connect_Subdivision_CSModel.UI_Subdivision_Card_ContentRec), 
this.attr("_in_Subdivision_CardContentInDataFetchStatus", "_in_Subdivision_CardContentInDataFetchStatus", "_in_Subdivision_CardContentInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ShowAddress", "in_ShowAddressIn", "In_ShowAddress", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_ShowAddressInDataFetchStatus", "_in_ShowAddressInDataFetchStatus", "_in_ShowAddressInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (((UBTConnectLibrary_ConnectPatterns_ImageCard__Content_mvcModel.hasValidationWidgets || UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_Statistics_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_Wrapper_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_Subdivision_CardContent" in inputs) {
this.variables.in_Subdivision_CardContentIn = inputs.In_Subdivision_CardContent;
if("_in_Subdivision_CardContentInDataFetchStatus" in inputs) {
this.variables._in_Subdivision_CardContentInDataFetchStatus = inputs._in_Subdivision_CardContentInDataFetchStatus;
}

}

if("In_ShowAddress" in inputs) {
this.variables.in_ShowAddressIn = inputs.In_ShowAddress;
if("_in_ShowAddressInDataFetchStatus" in inputs) {
this.variables._in_ShowAddressInDataFetchStatus = inputs._in_ShowAddressInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Directory_SupperMeetings.SupperMeeting_ImageCard_Content");
});
define("UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Subdivision_CS.model", "UBTConnectLibrary.model", "APIDomain_Directory_IS.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content.mvc$model", "UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.ConnectPatterns.ImageCard__Content.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_Statistics.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnect_Utils.CW_CTA_PopUps.AddressPopup_Wrapper.mvc$view", "UBTConnect.controller$GetDescriptor_Subdivision_GenderSplit", "Connect_Subdivision_CS.model$UI_Subdivision_Card_ContentRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Subdivision_CS", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "APIDomain_Directory_IS.model$Directory_CoordinatesRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Subdivision_CSModel, UBTConnectLibraryModel, APIDomain_Directory_ISModel, React, OSView, UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_mvc_model, UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_ConnectPatterns_ImageCard__Content_mvc_view, OSWidgets, UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_Statistics_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_Wrapper_mvc_view) {
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
        View.displayName = "Directory_SupperMeetings.SupperMeeting_ImageCard_Content";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_ImageCard__Content_mvc_view, UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_Statistics_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_Wrapper_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_ConnectPatterns_ImageCard__Content_mvc_view, {
inputs: {
In_Title: model.variables.in_Subdivision_CardContentIn.nameAttr,
_in_TitleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_Subdivision_CardContentInDataFetchStatus)
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
placeholder_TopSectionContent: PlaceholderContent.Empty,
placeholder_BottomSectionContent: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_Statistics_mvc_view, {
inputs: {
In_BretherenCount: model.variables.in_Subdivision_CardContentIn.bretherenCountAttr,
_in_BretherenCountInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_Subdivision_CardContentInDataFetchStatus),
In_GenderSplit: model.getCachedValue(idService.getId("AtQ9DtaN60OQOShaH3B54w.In_GenderSplit"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectController.default.getDescriptor_Subdivision_GenderSplit$Action(model.variables.in_Subdivision_CardContentIn.brothersCountAttr, model.variables.in_Subdivision_CardContentIn.sistersCountAttr, callContext).out_DescriptorOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.in_Subdivision_CardContentIn.brothersCountAttr;
}, function () {
return model.variables.in_Subdivision_CardContentIn.sistersCountAttr;
}),
_in_GenderSplitInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_Subdivision_CardContentInDataFetchStatus),
In_HouseholdCount: model.variables.in_Subdivision_CardContentIn.householdCountAttr,
_in_HouseholdCountInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_Subdivision_CardContentInDataFetchStatus)
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
_dependencies: []
}), $if(model.variables.in_ShowAddressIn, false, this, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("BVsQLhptvUC7BDks9xQyAg.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.marginSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
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
uuid: "2",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Utils_CW_CTA_PopUps_AddressPopup_Wrapper_mvc_view, {
inputs: {
In_Address: model.variables.in_Subdivision_CardContentIn.addressAttr,
_in_AddressInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_Subdivision_CardContentInDataFetchStatus)
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
})
},
_dependencies: [asPrimitiveValue(model.variables._in_Subdivision_CardContentInDataFetchStatus), asPrimitiveValue(model.variables.in_Subdivision_CardContentIn.addressAttr)]
})];
}, function () {
return [];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_ShowAddressIn), asPrimitiveValue(model.variables._in_ShowAddressInDataFetchStatus), asPrimitiveValue(model.variables._in_Subdivision_CardContentInDataFetchStatus), asPrimitiveValue(model.variables.in_Subdivision_CardContentIn.addressAttr), asPrimitiveValue(model.variables.in_Subdivision_CardContentIn.householdCountAttr), asPrimitiveValue(model.variables.in_Subdivision_CardContentIn.sistersCountAttr), asPrimitiveValue(model.variables.in_Subdivision_CardContentIn.brothersCountAttr), asPrimitiveValue(model.variables.in_Subdivision_CardContentIn.bretherenCountAttr)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Subdivision_CS.model", "UBTConnectLibrary.model", "APIDomain_Directory_IS.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content.mvc$debugger", "UBTConnect.controller$GetDescriptor_Subdivision_GenderSplit", "Connect_Subdivision_CS.model$UI_Subdivision_Card_ContentRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Subdivision_CS", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "APIDomain_Directory_IS.model$Directory_CoordinatesRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Subdivision_CSModel, UBTConnectLibraryModel, APIDomain_Directory_ISModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_mvc_Debugger) {
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


// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:E53piema20KUP3HqQIZR6A:/NRWebFlows.E53piema20KUP3HqQIZR6A:zbxcFH+tyRwg__bC3mWnVg", "UBTConnect", "Directory_SupperMeetings", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:YDq0LXPKtUerdB+YHlEr+A:/NRWebFlows.E53piema20KUP3HqQIZR6A/NodesShownInESpaceTree.YDq0LXPKtUerdB+YHlEr+A:0SUNXge6P8UZFGaKpE+rKg", "UBTConnect", "SupperMeeting_ImageCard_Content", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:YDq0LXPKtUerdB+YHlEr+A", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:E53piema20KUP3HqQIZR6A", callContext.id);
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

define("UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"TuaR6c4yUUaPax3iBmZkmg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_Subdivision_CardContentIn;
}
},
"3bhvCkvGc0e1lb0QaANq9g": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ShowAddressIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"vnL1uakl_UuL4WRB8kr02A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_TopSectionContent"));
})(varBag.model, idService);
}
},
"L9xX_oLyAEuRifkdeOD+Iw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_BottomSectionContent"));
})(varBag.model, idService);
}
},
"9JxhDdpFq06H2Zw1ONLIhQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ShowAddress2"));
})(varBag.model, idService);
}
},
"FcyQclaTaEGVJ5LDPo8OBw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
