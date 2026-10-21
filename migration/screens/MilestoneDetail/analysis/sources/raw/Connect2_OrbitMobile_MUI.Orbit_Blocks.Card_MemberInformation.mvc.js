define("Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_MemberInformation.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_IS.model", "Connect2_LegacyShared.controller", "Connect2_OrbitMobile_IS.model$MemberInformationRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_LegacyShared.controller$GetCacheableSignedImageURL", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_ISModel, Connect2_LegacySharedController) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("LoadedPhotoURL", "loadedPhotoURLVar", "LoadedPhotoURL", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("In_MemberInformation", "in_MemberInformationIn", "In_MemberInformation", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.MemberInformationRec());
}, false, Connect2_OrbitMobile_ISModel.MemberInformationRec), 
this.attr("_in_MemberInformationInDataFetchStatus", "_in_MemberInformationInDataFetchStatus", "_in_MemberInformationInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_DisplayDot", "in_DisplayDotIn", "In_DisplayDot", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_DisplayDotInDataFetchStatus", "_in_DisplayDotInDataFetchStatus", "_in_DisplayDotInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Is_ShowPersonalInfo", "is_ShowPersonalInfoIn", "Is_ShowPersonalInfo", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("_is_ShowPersonalInfoInDataFetchStatus", "_is_ShowPersonalInfoInDataFetchStatus", "_is_ShowPersonalInfoInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_HideMemberInfoLocation", "in_HideMemberInfoLocationIn", "In_HideMemberInfoLocation", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_HideMemberInfoLocationInDataFetchStatus", "_in_HideMemberInfoLocationInDataFetchStatus", "_in_HideMemberInfoLocationInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_HouseholderId", "in_HouseholderIdIn", "In_HouseholderId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_HouseholderIdInDataFetchStatus", "_in_HouseholderIdInDataFetchStatus", "_in_HouseholderIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_HouseholdLocality", "in_HouseholdLocalityIn", "In_HouseholdLocality", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_HouseholdLocalityInDataFetchStatus", "_in_HouseholdLocalityInDataFetchStatus", "_in_HouseholdLocalityInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_HouseholdCountryCode", "in_HouseholdCountryCodeIn", "In_HouseholdCountryCode", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_HouseholdCountryCodeInDataFetchStatus", "_in_HouseholdCountryCodeInDataFetchStatus", "_in_HouseholdCountryCodeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ShowAdminTag", "in_ShowAdminTagIn", "In_ShowAdminTag", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_ShowAdminTagInDataFetchStatus", "_in_ShowAdminTagInDataFetchStatus", "_in_ShowAdminTagInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
return false;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_MemberInformation" in inputs) {
this.variables.in_MemberInformationIn = inputs.In_MemberInformation;
if("_in_MemberInformationInDataFetchStatus" in inputs) {
this.variables._in_MemberInformationInDataFetchStatus = inputs._in_MemberInformationInDataFetchStatus;
}

}

if("In_DisplayDot" in inputs) {
this.variables.in_DisplayDotIn = inputs.In_DisplayDot;
if("_in_DisplayDotInDataFetchStatus" in inputs) {
this.variables._in_DisplayDotInDataFetchStatus = inputs._in_DisplayDotInDataFetchStatus;
}

}

if("Is_ShowPersonalInfo" in inputs) {
this.variables.is_ShowPersonalInfoIn = inputs.Is_ShowPersonalInfo;
if("_is_ShowPersonalInfoInDataFetchStatus" in inputs) {
this.variables._is_ShowPersonalInfoInDataFetchStatus = inputs._is_ShowPersonalInfoInDataFetchStatus;
}

}

if("In_HideMemberInfoLocation" in inputs) {
this.variables.in_HideMemberInfoLocationIn = inputs.In_HideMemberInfoLocation;
if("_in_HideMemberInfoLocationInDataFetchStatus" in inputs) {
this.variables._in_HideMemberInfoLocationInDataFetchStatus = inputs._in_HideMemberInfoLocationInDataFetchStatus;
}

}

if("In_HouseholderId" in inputs) {
this.variables.in_HouseholderIdIn = inputs.In_HouseholderId;
if("_in_HouseholderIdInDataFetchStatus" in inputs) {
this.variables._in_HouseholderIdInDataFetchStatus = inputs._in_HouseholderIdInDataFetchStatus;
}

}

if("In_HouseholdLocality" in inputs) {
this.variables.in_HouseholdLocalityIn = inputs.In_HouseholdLocality;
if("_in_HouseholdLocalityInDataFetchStatus" in inputs) {
this.variables._in_HouseholdLocalityInDataFetchStatus = inputs._in_HouseholdLocalityInDataFetchStatus;
}

}

if("In_HouseholdCountryCode" in inputs) {
this.variables.in_HouseholdCountryCodeIn = inputs.In_HouseholdCountryCode;
if("_in_HouseholdCountryCodeInDataFetchStatus" in inputs) {
this.variables._in_HouseholdCountryCodeInDataFetchStatus = inputs._in_HouseholdCountryCodeInDataFetchStatus;
}

}

if("In_ShowAdminTag" in inputs) {
this.variables.in_ShowAdminTagIn = inputs.In_ShowAdminTag;
if("_in_ShowAdminTagInDataFetchStatus" in inputs) {
this.variables._in_ShowAdminTagInDataFetchStatus = inputs._in_ShowAdminTagInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Orbit_Blocks.Card_MemberInformation");
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_MemberInformation.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_MemberInformation.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_MemberInformation.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_OrbitMobile_IS.model$MemberInformationRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_LegacyShared.controller$GetCacheableSignedImageURL", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_LegacySharedController, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets) {
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
        View.displayName = "Orbit_Blocks.Card_MemberInformation";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_mvc_controller;
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
style: "member-info-cont",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/Card_MemberInformation/Container onclick");
controller.clickedMember$Action(model.variables.in_HouseholderIdIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
style: "member-info-img-cont",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "member-info-img",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Image, {
extendedProperties: {
"data-error-placeholder-src": OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.User.png")
},
style: "member-info-img",
type: /*External*/ 1,
url: model.variables.loadedPhotoURLVar,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "member-info-img-dot",
visible: (model.variables.in_DisplayDotIn && (model.variables.in_MemberInformationIn.isHouseholderAttr || model.variables.in_MemberInformationIn.isSpouseAttr)),
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_DisplayDotInDataFetchStatus, model.variables._in_MemberInformationInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "member-info-left-cont",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "member-info-data-cont",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/Card_MemberInformation/Container onclick");
controller.clickedMember$Action(model.variables.in_HouseholderIdIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
style: "member-info-text-cont",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "member-info-text-title",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "member-info-name",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("lXyuOI6wKUyHfIyFDHzJlQ.Value"), function () {
return ((model.variables.in_MemberInformationIn.titleAttr + ((((model.variables.in_MemberInformationIn.firstNameAttr) !== (""))) ? ((" " + model.variables.in_MemberInformationIn.firstNameAttr)) : (""))) + ((((model.variables.in_MemberInformationIn.lastNameAttr) !== (""))) ? ((" " + model.variables.in_MemberInformationIn.lastNameAttr)) : ("")));
}, function () {
return model.variables.in_MemberInformationIn.titleAttr;
}, function () {
return model.variables.in_MemberInformationIn.firstNameAttr;
}, function () {
return model.variables.in_MemberInformationIn.lastNameAttr;
}),
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MemberInformationInDataFetchStatus)
})), $if(model.variables.in_ShowAdminTagIn, false, this, function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_OrbitAdmin,
style: "member-info-admin-tag",
_idProps: {
service: idService,
name: "Placeholder_OrbitAdmin"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
})), $if(!(model.variables.in_HideMemberInfoLocationIn), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "member-info-location",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("YEU0aVanekeSufFoa3fbrQ.Value"), function () {
return (((((model.variables.in_HouseholdLocalityIn) !== ("")) && ((model.variables.in_HouseholdCountryCodeIn) !== ("")))) ? (((model.variables.in_HouseholdLocalityIn + ((((model.variables.in_HouseholdCountryCodeIn) !== (""))) ? (" - ") : (""))) + model.variables.in_HouseholdCountryCodeIn)) : (((model.variables.in_MemberInformationIn.localityAttr + ((((model.variables.in_MemberInformationIn.countryCodeAttr) !== (""))) ? (" - ") : (""))) + model.variables.in_MemberInformationIn.countryCodeAttr)));
}, function () {
return model.variables.in_HouseholdLocalityIn;
}, function () {
return model.variables.in_HouseholdCountryCodeIn;
}, function () {
return model.variables.in_MemberInformationIn.localityAttr;
}, function () {
return model.variables.in_MemberInformationIn.countryCodeAttr;
}),
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HouseholdLocalityInDataFetchStatus, model.variables._in_HouseholdCountryCodeInDataFetchStatus, model.variables._in_MemberInformationInDataFetchStatus)
}))];
}, function () {
return [];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "member-info-data-right-cont",
visible: model.variables.is_ShowPersonalInfoIn,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._is_ShowPersonalInfoInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
style: model.getCachedValue(idService.getId("SZBmJtCfLE6cRQcbplqvoA.style"), function () {
return ((model.variables.in_ShowAdminTagIn) ? ("margin-left: var(--space-s)") : (""));
}, function () {
return model.variables.in_ShowAdminTagIn;
})
},
style: "member-info-age-cont",
visible: model.variables.in_MemberInformationIn.ageAttr.gt(OS.BuiltinFunctions.integerToLongInteger(0)),
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MemberInformationInDataFetchStatus)
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-circle-arrow member-info-age-icon",
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: model.getCachedValue(idService.getId("A7bVQUNWg0KcpXEY5kUqUw.style"), function () {
return ((((OS.BuiltinFunctions.length(OS.BuiltinFunctions.longIntegerToText(model.variables.in_MemberInformationIn.ageAttr)) >= 0) && (OS.BuiltinFunctions.length(OS.BuiltinFunctions.longIntegerToText(model.variables.in_MemberInformationIn.ageAttr)) < 3))) ? ("") : ("font-size: 0.8em; justify-self: start;"));
}, function () {
return model.variables.in_MemberInformationIn.ageAttr;
})
},
style: "member-info-age-text",
value: OS.BuiltinFunctions.longIntegerToText(model.variables.in_MemberInformationIn.ageAttr),
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MemberInformationInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "member-info-phone-cont",
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/Card_MemberInformation/Icon onclick");
controller.clickedPhone$Action(model.variables.in_MemberInformationIn.phoneAttr, ((model.variables.in_MemberInformationIn.firstNameAttr + " ") + model.variables.in_MemberInformationIn.lastNameAttr), model.variables.in_MemberInformationIn.localityIdAttr, model.variables.in_MemberInformationIn.memberIdAttr, model.variables.loadedPhotoURLVar, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-phone",
visible: ((model.variables.in_MemberInformationIn.phoneAttr) !== ("")),
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MemberInformationInDataFetchStatus)
})))), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_Info,
_idProps: {
service: idService,
name: "Placeholder_Info"
},
_widgetRecordProvider: widgetsRecordProvider
}))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_MemberInformation.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "Connect2_LegacyShared.controller", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_MemberInformation.mvc$debugger", "Connect2_OrbitMobile_IS.model$MemberInformationRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_LegacyShared.controller$GetCacheableSignedImageURL", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, Connect2_LegacySharedController, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_mvc_Debugger) {
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
Controller.prototype._onReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var getCacheableSignedImageURLVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getCacheableSignedImageURLVar = getCacheableSignedImageURLVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:aZE4eiHv0ES92XCOjdYAXg:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.2pocFx3Go0yKVeGAHjokjw/ClientActions.aZE4eiHv0ES92XCOjdYAXg:dF6Al2kyqXqInX+dcq_Dzw", "Connect2_OrbitMobile_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:eGq_ch1V9EenJ3rRoPJpbQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BQRYfrTIDkCNjV2U71SAZA", callContext.id) && (model.variables.loadedPhotoURLVar === ""))) {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tf0EJd7umUOZK1gRX4CNPg", callContext.id) && ((model.variables.in_MemberInformationIn.signedPhotoURLAttr) !== ("https://publicimageconnect.s3.ap-southeast-2.amazonaws.com/memberMock.png")))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BVKYq7kgvk6dVfHFXYDprA", callContext.id);
// Execute Action: GetCacheableSignedImageURL
model.flush();
return Connect2_LegacySharedController.default.getCacheableSignedImageURL$Action(model.variables.in_MemberInformationIn.memberIdAttr, Connect2_OrbitMobile_MUIModel.staticEntities.directoryAPIFilter.member, Connect2_OrbitMobile_MUIModel.staticEntities.imageSigningSize.small, callContext).then(function (value) {
getCacheableSignedImageURLVar.value = value;
}).then(function () {
// Has Photo URL?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:geuUbAGorkasv1zLFB53iw", callContext.id) && ((getCacheableSignedImageURLVar.value.uRLOut) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:FlJJUVtkQU+3uQ41P7fxuw", callContext.id);
// LoadedPhotoURL = GetCacheableSignedImageURL.URL
model.variables.loadedPhotoURLVar = getCacheableSignedImageURLVar.value.uRLOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_EtiRA1kJ0+eTlVq0_kHjA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TfZcdu3S0UeXwFr+3bZlMQ", callContext.id);
// LoadedPhotoURL = Images.User.URL
model.variables.loadedPhotoURLVar = OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.User.png");
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_EtiRA1kJ0+eTlVq0_kHjA", callContext.id);
}

});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JexB0U61Z0apvMpZ+45eKQ", callContext.id);
// LoadedPhotoURL = In_MemberInformation.SignedPhotoURL
model.variables.loadedPhotoURLVar = model.variables.in_MemberInformationIn.signedPhotoURLAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yyT1uDpgYEO37bzAjZL0Pg", callContext.id);
}

});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+gWdkdQkVUCer8P8ork4oQ", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:aZE4eiHv0ES92XCOjdYAXg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:aZE4eiHv0ES92XCOjdYAXg", callContext.id);
throw ex;

});
};

Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.clickedPhone$Action = function () {
return Promise.resolve();
};
Controller.prototype.clickedMember$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ:tepBwzTPFZZUt4uwi04GJA", "Connect2_OrbitMobile_MUI", "Orbit_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:2pocFx3Go0yKVeGAHjokjw:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.2pocFx3Go0yKVeGAHjokjw:CZBghlh+pCi4jisbIniojg", "Connect2_OrbitMobile_MUI", "Card_MemberInformation", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:2pocFx3Go0yKVeGAHjokjw", callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_Blocks/Card_MemberInformation On Ready");
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

define("Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_MemberInformation.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"BVKYq7kgvk6dVfHFXYDprA": {
getter: function (varBag, idService) {
return varBag.getCacheableSignedImageURLVar.value;
}
},
"VattFyZbv0mEgiujh0itLA": {
getter: function (varBag, idService) {
return varBag.model.variables.loadedPhotoURLVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"WZewk4ItfUeH_AKnn1a5TQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MemberInformationIn;
}
},
"t_ZEOLn1ak+iWl6YXUM2_A": {
getter: function (varBag, idService) {
return varBag.model.variables.in_DisplayDotIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"zljxhjTLR0WyD1dNalwG5A": {
getter: function (varBag, idService) {
return varBag.model.variables.is_ShowPersonalInfoIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"ClXodQf72EOL7+dTy_W0Iw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HideMemberInfoLocationIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"n9ofqcXBsUmYzacsSeqabQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HouseholderIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"TBU9KfrTe0a7FRz60PXt6A": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HouseholdLocalityIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"nQD7ZH2vDE+DJetF1kcqkw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HouseholdCountryCodeIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"rEbcHJK2YkKvubsbYDDngg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ShowAdminTagIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"boAaUfysNEWCsp0fuvmBSw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_ShowAdminTag"));
})(varBag.model, idService);
}
},
"4v0Ik9+QqUSHSDEcvE63OQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_OrbitAdmin"));
})(varBag.model, idService);
}
},
"_HoTmR_Du0Wx8+JCsvFBSQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Info"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
