define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostInformation.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.controller", "Connect2_LegacyShared.controller", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.PhotoLazyLoaded.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$model", "ReactiveHtmlSanitizer.HtmlSanitizer.SanitizedHtml.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.ContactOptions_Orbit.mvc$model", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTimeById", "Connect2_OrbitMobile_IS.model$HostInformationRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_AppLauncherPlugin.model$LauncherParametersRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_AppLauncherPlugin", "Connect2_AppLauncherPlugin.model$LauncherReturnRec", "Connect2_AppLauncherPlugin.controller$LaunchWithData", "Connect2_LegacyShared.controller$NavigateToMaps", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_AppLauncherPluginModel, Connect2_AppLauncherPluginController, Connect2_LegacySharedController, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_PhotoLazyLoaded_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvcModel, ReactiveHtmlSanitizer_HtmlSanitizer_SanitizedHtml_mvcModel, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_ContactOptions_Orbit_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("In_MilestoneTypeId", "in_MilestoneTypeIdIn", "In_MilestoneTypeId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_MilestoneTypeIdInDataFetchStatus", "_in_MilestoneTypeIdInDataFetchStatus", "_in_MilestoneTypeIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("MilestoneDateTime", "milestoneDateTimeIn", "MilestoneDateTime", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, false), 
this.attr("_milestoneDateTimeInDataFetchStatus", "_milestoneDateTimeInDataFetchStatus", "_milestoneDateTimeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("HostInformation", "hostInformationIn", "HostInformation", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.HostInformationRec());
}, false, Connect2_OrbitMobile_ISModel.HostInformationRec), 
this.attr("_hostInformationInDataFetchStatus", "_hostInformationInDataFetchStatus", "_hostInformationInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Captions", "captionsIn", "Captions", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_captionsInDataFetchStatus", "_captionsInDataFetchStatus", "_captionsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("IsFetchingCaptions", "isFetchingCaptionsIn", "IsFetchingCaptions", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isFetchingCaptionsInDataFetchStatus", "_isFetchingCaptionsInDataFetchStatus", "_isFetchingCaptionsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (((Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_PhotoLazyLoaded_mvcModel.hasValidationWidgets || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvcModel.hasValidationWidgets) || ReactiveHtmlSanitizer_HtmlSanitizer_SanitizedHtml_mvcModel.hasValidationWidgets) || Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_ContactOptions_Orbit_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_MilestoneTypeId" in inputs) {
this.variables.in_MilestoneTypeIdIn = inputs.In_MilestoneTypeId;
if("_in_MilestoneTypeIdInDataFetchStatus" in inputs) {
this.variables._in_MilestoneTypeIdInDataFetchStatus = inputs._in_MilestoneTypeIdInDataFetchStatus;
}

}

if("MilestoneDateTime" in inputs) {
this.variables.milestoneDateTimeIn = inputs.MilestoneDateTime;
if("_milestoneDateTimeInDataFetchStatus" in inputs) {
this.variables._milestoneDateTimeInDataFetchStatus = inputs._milestoneDateTimeInDataFetchStatus;
}

}

if("HostInformation" in inputs) {
this.variables.hostInformationIn = inputs.HostInformation;
if("_hostInformationInDataFetchStatus" in inputs) {
this.variables._hostInformationInDataFetchStatus = inputs._hostInformationInDataFetchStatus;
}

}

if("Captions" in inputs) {
this.variables.captionsIn = inputs.Captions;
if("_captionsInDataFetchStatus" in inputs) {
this.variables._captionsInDataFetchStatus = inputs._captionsInDataFetchStatus;
}

}

if("IsFetchingCaptions" in inputs) {
this.variables.isFetchingCaptionsIn = inputs.IsFetchingCaptions;
if("_isFetchingCaptionsInDataFetchStatus" in inputs) {
this.variables._isFetchingCaptionsInDataFetchStatus = inputs._isFetchingCaptionsInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Orbit_Blocks.HostInformation");
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostInformation.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.controller", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostInformation.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostInformation.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.PhotoLazyLoaded.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$view", "ReactiveHtmlSanitizer.HtmlSanitizer.SanitizedHtml.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.ContactOptions_Orbit.mvc$view", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTimeById", "Connect2_OrbitMobile_IS.model$HostInformationRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_AppLauncherPlugin.model$LauncherParametersRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_AppLauncherPlugin", "Connect2_AppLauncherPlugin.model$LauncherReturnRec", "Connect2_AppLauncherPlugin.controller$LaunchWithData", "Connect2_LegacyShared.controller$NavigateToMaps", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_AppLauncherPluginModel, Connect2_AppLauncherPluginController, Connect2_LegacySharedController, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostInformation_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostInformation_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_PhotoLazyLoaded_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, ReactiveHtmlSanitizer_HtmlSanitizer_SanitizedHtml_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_ContactOptions_Orbit_mvc_view) {
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
        View.displayName = "Orbit_Blocks.HostInformation";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_PhotoLazyLoaded_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, ReactiveHtmlSanitizer_HtmlSanitizer_SanitizedHtml_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_ContactOptions_Orbit_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_HostInformation_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_HostInformation_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "full-width",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex flex-direction-column",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "padding-x-m padding-y-m bold color-orbit-primary-7",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Your Host"), $if((model.variables.hostInformationIn.signedPhotoURLAttr === "https://publicimageconnect.s3.ap-southeast-2.amazonaws.com/householdMock.png"), false, this, function () {
return [React.createElement(OSWidgets.Image, {
style: "host-information-image",
type: /*External*/ 1,
url: model.variables.hostInformationIn.signedPhotoURLAttr,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
url_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hostInformationInDataFetchStatus)
})];
}, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_PhotoLazyLoaded_mvc_view, {
inputs: {
Size: Connect2_OrbitMobile_MUIModel.staticEntities.imageSigningSize.medium,
Id: model.variables.hostInformationIn.householderIdAttr,
_idInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hostInformationInDataFetchStatus),
Type: Connect2_OrbitMobile_MUIModel.staticEntities.directoryAPIFilter.household
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
imageClicked$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Generic_Blocks/PhotoLazyLoaded ImageClicked");
controller.navigateTo_HostProfile$Action(model.variables.hostInformationIn.householderIdAttr, controller.callContext(eventHandlerContext));
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
uuid: "4",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostInformation/Container onclick");
controller.navigateTo_HostProfile$Action(model.variables.hostInformationIn.householderIdAttr, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
style: "padding-x-m padding-y-m",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("yzsss5ko_USUBLSbysVOvw.Style"), function () {
return (((model.variables.isFetchingCaptionsIn || ((model.variables.captionsIn) !== ("")))) ? ("margin-bottom-xs") : (""));
}, function () {
return model.variables.isFetchingCaptionsIn;
}, function () {
return model.variables.captionsIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isFetchingCaptionsInDataFetchStatus, model.variables._captionsInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
style: "text-uppercase bold",
value: model.getCachedValue(idService.getId("aKGsO6TTO0SvEWJlJezi4Q.Value"), function () {
return ((((model.variables.hostInformationIn.householdSurnameAttr) !== (""))) ? (model.variables.hostInformationIn.householdSurnameAttr) : (""));
}, function () {
return model.variables.hostInformationIn.householdSurnameAttr;
}),
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hostInformationInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
style: "bold",
value: model.getCachedValue(idService.getId("aRRy5+Tk+EK47I4H7RKitw.Value"), function () {
return ((((model.variables.hostInformationIn.householdSurnameAttr) !== (""))) ? (((((model.variables.hostInformationIn.householdNameAttr) !== (""))) ? ((" " + model.variables.hostInformationIn.householdNameAttr)) : (""))) : (model.variables.hostInformationIn.householdNameAttr));
}, function () {
return model.variables.hostInformationIn.householdSurnameAttr;
}, function () {
return model.variables.hostInformationIn.householdNameAttr;
}),
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hostInformationInDataFetchStatus)
})), $if(model.variables.isFetchingCaptionsIn, false, this, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, {
inputs: {
In_SkeletonLoadingId: Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.singleItem
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
uuid: "9",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [$if(((model.variables.captionsIn) !== ("")), false, this, function () {
return [React.createElement(ReactiveHtmlSanitizer_HtmlSanitizer_SanitizedHtml_mvc_view, {
inputs: {
ResetWhitelist: false,
Value: model.variables.captionsIn,
_valueInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._captionsInDataFetchStatus),
AllowedTags: "nobr,sup"
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
uuid: "10",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
})];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "padding-x-m padding-bottom-m",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostInformation/Container onclick");
return controller.onClick_Address$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
style: "margin-bottom-m",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-location",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: "text-underline bold color-orbit-primary-7",
value: model.variables.hostInformationIn.formattedAddressAttr,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hostInformationInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-date-time",
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
value: model.getCachedValue(idService.getId("dF7vmXy2u0yie4Va61162A.Value"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedDateTimeById$Action(model.variables.in_MilestoneTypeIdIn, model.variables.milestoneDateTimeIn, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.in_MilestoneTypeIdIn;
}, function () {
return model.variables.milestoneDateTimeIn;
}),
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneTypeIdInDataFetchStatus, model.variables._milestoneDateTimeInDataFetchStatus)
})))), React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_ContactOptions_Orbit_mvc_view, {
inputs: {
In_PhoneNumber: model.variables.hostInformationIn.phoneAttr,
_in_PhoneNumberInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hostInformationInDataFetchStatus),
In_Email: model.variables.hostInformationIn.emailAttr,
_in_EmailInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hostInformationInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
clicked_Email$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Generic_Blocks/ContactOptions_Orbit Clicked_Email");
controller.navigateTo_EmailHost$Action((model.variables.hostInformationIn.householdNameAttr + ((((model.variables.hostInformationIn.householdSurnameAttr) !== (""))) ? ((" " + model.variables.hostInformationIn.householdSurnameAttr)) : (""))), model.variables.hostInformationIn.emailAttr, OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedDateTimeById$Action(model.variables.in_MilestoneTypeIdIn, model.variables.milestoneDateTimeIn, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
clicked_Phone$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Generic_Blocks/ContactOptions_Orbit Clicked_Phone");
controller.clicked_PhoneNumber$Action(model.variables.hostInformationIn.phoneAttr, model.variables.hostInformationIn.householdNameAttr, model.variables.hostInformationIn.localityIdAttr, controller.callContext(eventHandlerContext));
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
uuid: "18",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostInformation.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_AppLauncherPlugin.model", "Connect2_AppLauncherPlugin.controller", "Connect2_LegacyShared.controller", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostInformation.mvc$debugger", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTimeById", "Connect2_OrbitMobile_IS.model$HostInformationRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_AppLauncherPlugin.model$LauncherParametersRec", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_AppLauncherPlugin", "Connect2_AppLauncherPlugin.model$LauncherReturnRec", "Connect2_AppLauncherPlugin.controller$LaunchWithData", "Connect2_LegacyShared.controller$NavigateToMaps", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_AppLauncherPluginModel, Connect2_AppLauncherPluginController, Connect2_LegacySharedController, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostInformation_mvc_Debugger) {
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
Controller.prototype._onClick_Address$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_Address");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostInformation.OnClick_Address$vars"))());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var launchWithDataVar = new OS.DataTypes.VariableHolder();
var navigateToMapsVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.launchWithDataVar = launchWithDataVar;
varBag.navigateToMapsVar = navigateToMapsVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:C02pa31z7EuZGf+T6LyDpA:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.nTTpQWMrsEi3KEU_fEj9rA/ClientActions.C02pa31z7EuZGf+T6LyDpA:C9spLRFvmvtxHPrZssmVWQ", "Connect2_OrbitMobile_MUI", "OnClick_Address", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TUYeDsMn0U6EIo1fiPRKkg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:O12QMlVvsUiuZFzarn08+w", callContext.id);
// MapsAddress = Replace + ", " + Replace
vars.value.mapsAddressVar = ((OS.BuiltinFunctions.replace(model.variables.hostInformationIn.formattedAddressAttr, ",", " ") + ", ") + OS.BuiltinFunctions.replace(model.variables.hostInformationIn.countryNameAttr, ",", " "));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:li9l33lp20WdZ67xMxdhGA", callContext.id);
// Execute Action: NavigateToMaps
navigateToMapsVar.value = Connect2_LegacySharedController.default.navigateToMaps$Action(callContext);

// Choose Map Redirect
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pM1qmjuJhkW4g9nETUToFQ", callContext.id) && (navigateToMapsVar.value.mapNavigationRedirectIdOut === Connect2_OrbitMobile_MUIModel.staticEntities.mapNavigationRedirect.androidBrowser))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ir8LFVFQq02bu9NawsHekw", callContext.id);
// Destination: geo:0,0
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("geo:0,0", {
q: OS.DataConversion.ServerDataConverter.asString(vars.value.mapsAddressVar, OS.DataTypes.DataTypes.Text)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
return OS.Flow.executeSequence(function () {
if((navigateToMapsVar.value.mapNavigationRedirectIdOut === Connect2_OrbitMobile_MUIModel.staticEntities.mapNavigationRedirect.androidNative)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:hMs_WvsKHkGOAwyEQ+AyXg", callContext.id);
// Execute Action: LaunchWithData
model.flush();
return Connect2_AppLauncherPluginController.default.launchWithData$Action(function () {
var rec = new Connect2_AppLauncherPluginModel.LauncherParametersRec();
rec.packageNameAttr = "com.google.android.apps.maps";
rec.uriAttr = ("https://www.google.com/maps/search/?api=1&query=" + OS.BuiltinFunctions.encodeUrl(vars.value.mapsAddressVar));
rec.subActivityAttr = false;
return rec;
}(), callContext).then(function (value) {
launchWithDataVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:FdgyBOizD0i3CYOdWKmkwg", callContext.id);
});
} else {
if((navigateToMapsVar.value.mapNavigationRedirectIdOut === Connect2_OrbitMobile_MUIModel.staticEntities.mapNavigationRedirect.iPhoneBrowser)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jG5BOSOtcUag7YBZGAFCiQ", callContext.id);
// Destination: comgooglemaps://
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("comgooglemaps://", {
q: OS.DataConversion.ServerDataConverter.asString(vars.value.mapsAddressVar, OS.DataTypes.DataTypes.Text)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:S1ohnF8ArkK68vFwQeaM0w", callContext.id);
// Destination: https://www.google.com/maps/dir/?api=1
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("https://www.google.com/maps/dir/?api=1", {
api: OS.DataConversion.ServerDataConverter.asString(1, OS.DataTypes.DataTypes.Integer),
query: OS.DataConversion.ServerDataConverter.asString(vars.value.mapsAddressVar, OS.DataTypes.DataTypes.Text)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

}

});
}

});
}).catch(function (ex) {
OS.Logger.trace("HostInformation.OnClick_Address", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RT5PdajcbE2qRqgrN6qXzw", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:AES6chpm8E20_uFo66Vs+w", callContext.id) && (OS.BuiltinFunctions.toLower(allExceptionsVar.value.exceptionMessageAttr) === "application not found for uri."))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0JBrgnmB1k++QcRjAeN0Aw", callContext.id);
// Raise Error: GoogleMapsNotInstalled
throw new OS.Exceptions.Exceptions.UserException("Connect2_OrbitMobile_MUI.GoogleMapsNotInstalled", "Please install and enable Google Maps");
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:f+8nFmY0Q0yNkgaTrZjiMw", callContext.id);
// Raise Error: UnknownError
throw new OS.Exceptions.Exceptions.UserException("Connect2_OrbitMobile_MUI.UnknownError", allExceptionsVar.value.exceptionMessageAttr);
}

});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:C02pa31z7EuZGf+T6LyDpA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:C02pa31z7EuZGf+T6LyDpA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostInformation.OnClick_Address$vars", [{
name: "MapsAddress",
attrName: "mapsAddressVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);

Controller.prototype.onClick_Address$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_Address$Action, callContext);

};
Controller.prototype.navigateTo_EmailHost$Action = function () {
return Promise.resolve();
};
Controller.prototype.clicked_PhoneNumber$Action = function () {
return Promise.resolve();
};
Controller.prototype.navigateTo_HostProfile$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ:tepBwzTPFZZUt4uwi04GJA", "Connect2_OrbitMobile_MUI", "Orbit_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:nTTpQWMrsEi3KEU_fEj9rA:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.nTTpQWMrsEi3KEU_fEj9rA:k3muu_2cv5ShEqz5ftA18w", "Connect2_OrbitMobile_MUI", "HostInformation", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:nTTpQWMrsEi3KEU_fEj9rA", callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ", callContext.id);
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
return Connect2_OrbitMobile_MUIController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, Connect2_OrbitMobile_MUILanguageResources);
});

define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostInformation.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"NffA7n4ebUCWTzDWquI6zg": {
getter: function (varBag, idService) {
return varBag.vars.value.mapsAddressVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"RT5PdajcbE2qRqgrN6qXzw": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"hMs_WvsKHkGOAwyEQ+AyXg": {
getter: function (varBag, idService) {
return varBag.launchWithDataVar.value;
}
},
"li9l33lp20WdZ67xMxdhGA": {
getter: function (varBag, idService) {
return varBag.navigateToMapsVar.value;
}
},
"y1zE70YrDkyRF5rlFf_Ruw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MilestoneTypeIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Q9CY97vxvk+qSIpqvf830w": {
getter: function (varBag, idService) {
return varBag.model.variables.milestoneDateTimeIn;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"iOffebDQrUGrnHWUr2LCKQ": {
getter: function (varBag, idService) {
return varBag.model.variables.hostInformationIn;
}
},
"d5c+EmLbC0+Qolsih2dfDg": {
getter: function (varBag, idService) {
return varBag.model.variables.captionsIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"cafJ4u4T20mxZR8TYaKbDQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isFetchingCaptionsIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"NdPTsBGZJUeKB7DYJQVcMA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("IsMockImage"));
})(varBag.model, idService);
}
},
"mooS_itsa0qidpLKfg4NZA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsFetchingCaptions"));
})(varBag.model, idService);
}
},
"tKdcKeCIR0GQBEVG0jITgg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasCaptions"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
