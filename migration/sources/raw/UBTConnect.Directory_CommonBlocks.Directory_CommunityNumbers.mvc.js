define("UBTConnect.Directory_CommonBlocks.Directory_CommunityNumbers.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "Connect_Geography_CS.model", "UBTConnectLibrary.model", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnect.Directory_CommonBlocks.Directory_CommunityNumbers__Number.mvc$model", "Connect_Geography_CS.model$UI_CommunityStatisticsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Geography_CS", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function (OutSystems, UBTConnectModel, Connect_Geography_CSModel, UBTConnectLibraryModel, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, UBTConnect_Directory_CommonBlocks_Directory_CommunityNumbers__Number_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Local_CommunityStatistics", "local_CommunityStatisticsVar", "Local_CommunityStatistics", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Geography_CSModel.UI_CommunityStatisticsRec());
}, false, Connect_Geography_CSModel.UI_CommunityStatisticsRec), 
this.attr("In_IsLoading", "in_IsLoadingIn", "In_IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsLoadingInDataFetchStatus", "_in_IsLoadingInDataFetchStatus", "_in_IsLoadingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_CommunityStatistics", "in_CommunityStatisticsIn", "In_CommunityStatistics", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Geography_CSModel.UI_CommunityStatisticsRec());
}, false, Connect_Geography_CSModel.UI_CommunityStatisticsRec), 
this.attr("_in_CommunityStatisticsInDataFetchStatus", "_in_CommunityStatisticsInDataFetchStatus", "_in_CommunityStatisticsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (((UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || UBTConnect_Directory_CommonBlocks_Directory_CommunityNumbers__Number_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_IsLoading" in inputs) {
this.variables.in_IsLoadingIn = inputs.In_IsLoading;
if("_in_IsLoadingInDataFetchStatus" in inputs) {
this.variables._in_IsLoadingInDataFetchStatus = inputs._in_IsLoadingInDataFetchStatus;
}

}

if("In_CommunityStatistics" in inputs) {
this.variables.in_CommunityStatisticsIn = inputs.In_CommunityStatistics;
if("_in_CommunityStatisticsInDataFetchStatus" in inputs) {
this.variables._in_CommunityStatisticsInDataFetchStatus = inputs._in_CommunityStatisticsInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Directory_CommonBlocks.Directory_CommunityNumbers");
});
define("UBTConnect.Directory_CommonBlocks.Directory_CommunityNumbers.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Geography_CS.model", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_CommonBlocks.Directory_CommunityNumbers.mvc$model", "UBTConnect.Directory_CommonBlocks.Directory_CommunityNumbers.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnect.Directory_CommonBlocks.Directory_CommunityNumbers__Number.mvc$view", "Connect_Geography_CS.model$UI_CommunityStatisticsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Geography_CS", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Geography_CSModel, UBTConnectLibraryModel, React, OSView, UBTConnect_Directory_CommonBlocks_Directory_CommunityNumbers_mvc_model, UBTConnect_Directory_CommonBlocks_Directory_CommunityNumbers_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnect_Directory_CommonBlocks_Directory_CommunityNumbers__Number_mvc_view) {
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
        View.displayName = "Directory_CommonBlocks.Directory_CommunityNumbers";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/UBTConnect.Directory_CommonBlocks.Directory_CommunityNumbers.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnect_Directory_CommonBlocks_Directory_CommunityNumbers__Number_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Directory_CommonBlocks_Directory_CommunityNumbers_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Directory_CommonBlocks_Directory_CommunityNumbers_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_LoadingSection: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "directory-numbers-card",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("BIkVQbypmUmiTBnJyjCMxQ.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.textOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.peachDark;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.extraSmall;
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
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return ["COMMUNITY BY THE NUMBERS"];
})
},
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "directory-numbers-card__content",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "directory-numbers-card__left",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.sVG_CommunityMembers,
In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.nonStandard_40
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
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("pNBiWnZ81EGS4wLyHum48A.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.textOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.cyanDarker;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.heading1;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
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
uuid: "7",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("Zaptu76Z+UythS_9kTXVFA.Value"), function () {
return OS.BuiltinFunctions.formatCurrency(OS.BuiltinFunctions.integerToDecimal(model.variables.local_CommunityStatisticsVar.in_MembersCountAttr), "", 0, "", ",");
}, function () {
return model.variables.local_CommunityStatisticsVar.in_MembersCountAttr;
}),
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.local_CommunityStatisticsVar.in_MembersCountAttr)]
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "directory-numbers-card__variation",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(((model.variables.local_CommunityStatisticsVar.in_ChangeAttr) !== (0)), false, this, function () {
return [$if((model.variables.local_CommunityStatisticsVar.in_ChangeAttr > 0), false, this, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.extraSmall_10,
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.greenDark,
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.arrowUp
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
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.redDark,
In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.extraSmall_10,
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.arrowDown
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
uuid: "11",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("KbwbcgIW+kuiO5oAmEw6sQ.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.textOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = (((model.variables.local_CommunityStatisticsVar.in_ChangeAttr > 0)) ? (UBTConnectModel.staticEntities.uBT_Color.greenDark) : (UBTConnectModel.staticEntities.uBT_Color.redDark));
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.doubleExtraSmall;
return rec;
}();
return rec;
}();
}, function () {
return model.variables.local_CommunityStatisticsVar.in_ChangeAttr;
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
uuid: "12",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("GetE5uqVEUCQPgZDHduxNw.Value"), function () {
return ((((model.variables.local_CommunityStatisticsVar.in_ChangeAttr > 0)) ? ("+") : ("-")) + OS.BuiltinFunctions.formatCurrency(OS.BuiltinFunctions.integerToDecimal(model.variables.local_CommunityStatisticsVar.in_ChangeAttr), "", 0, "", ","));
}, function () {
return model.variables.local_CommunityStatisticsVar.in_ChangeAttr;
}),
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.local_CommunityStatisticsVar.in_ChangeAttr)]
})];
}, function () {
return [];
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("8+yDb1+qXUSWFXo50PvzjQ.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.textOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral7;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.doubleExtraSmall;
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
uuid: "14",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("GfUhlGfjskG1NHySGZwCsg.Value"), function () {
return ((((model.variables.local_CommunityStatisticsVar.in_ChangeAttr) !== (0))) ? ("Today") : ("No change today"));
}, function () {
return model.variables.local_CommunityStatisticsVar.in_ChangeAttr;
}),
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.local_CommunityStatisticsVar.in_ChangeAttr)]
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "directory-numbers-card__right",
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnect_Directory_CommonBlocks_Directory_CommunityNumbers__Number_mvc_view, {
inputs: {
In_Icon: UBTConnectModel.staticEntities.uBT_Icons2.sVG_CommunityHouseholds,
In_HideBorder: true,
In_Number: model.variables.local_CommunityStatisticsVar.in_HouseholdCountAttr,
In_Label: "Households"
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
uuid: "17",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(UBTConnect_Directory_CommonBlocks_Directory_CommunityNumbers__Number_mvc_view, {
inputs: {
In_Icon: UBTConnectModel.staticEntities.uBT_Icons2.sVG_CommunityLocalities,
In_Label: "Localities",
In_Number: model.variables.local_CommunityStatisticsVar.in_LocalitiesCountAttr
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
uuid: "18",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(UBTConnect_Directory_CommonBlocks_Directory_CommunityNumbers__Number_mvc_view, {
inputs: {
In_Icon: UBTConnectModel.staticEntities.uBT_Icons2.sVG_CommunityCountries,
In_Label: "Countries",
In_Number: model.variables.local_CommunityStatisticsVar.in_CountriesCountAttr
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
uuid: "19",
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))))];
})
},
_dependencies: [asPrimitiveValue(model.variables.local_CommunityStatisticsVar.in_CountriesCountAttr), asPrimitiveValue(model.variables.local_CommunityStatisticsVar.in_LocalitiesCountAttr), asPrimitiveValue(model.variables.local_CommunityStatisticsVar.in_HouseholdCountAttr), asPrimitiveValue(model.variables.local_CommunityStatisticsVar.in_ChangeAttr), asPrimitiveValue(model.variables.local_CommunityStatisticsVar.in_MembersCountAttr)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.Directory_CommonBlocks.Directory_CommunityNumbers.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Geography_CS.model", "UBTConnectLibrary.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_CommonBlocks.Directory_CommunityNumbers.mvc$debugger", "Connect_Geography_CS.model$UI_CommunityStatisticsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Geography_CS", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Geography_CSModel, UBTConnectLibraryModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_CommonBlocks_Directory_CommunityNumbers_mvc_Debugger) {
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
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:+tQ_Pvtf9USO6oB596KuCQ:/NRWebFlows.jGNlo9EW9U24MVecsZ_9tQ/NodesShownInESpaceTree.yh4WVAxKM0WxDhy7_o+wZg/ClientActions.+tQ_Pvtf9USO6oB596KuCQ:flm54MbPj271rRxegSD63g", "UBTConnect", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Dm3b4Wueb0yELdA6oebjgQ", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CyLIWUEsaEqwxkitBMujaQ", callContext.id) && model.variables.in_IsLoadingIn)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FHZ2IA1OPk+jX6716plE6A", callContext.id);
// Local_CommunityStatistics.In_HouseholdCount = 1000
model.variables.local_CommunityStatisticsVar.in_HouseholdCountAttr = 1000;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FHZ2IA1OPk+jX6716plE6A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Local_CommunityStatistics.In_LocalitiesCount = 1000
model.variables.local_CommunityStatisticsVar.in_LocalitiesCountAttr = 1000;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FHZ2IA1OPk+jX6716plE6A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Local_CommunityStatistics.In_CountriesCount = 1000
model.variables.local_CommunityStatisticsVar.in_CountriesCountAttr = 1000;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FHZ2IA1OPk+jX6716plE6A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Local_CommunityStatistics.In_MembersCount = 1000
model.variables.local_CommunityStatisticsVar.in_MembersCountAttr = 1000;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FHZ2IA1OPk+jX6716plE6A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// Local_CommunityStatistics.In_Change = 1000
model.variables.local_CommunityStatisticsVar.in_ChangeAttr = 1000;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6w64zDEsZUCSf4upKMGNog", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6w64zDEsZUCSf4upKMGNog", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:+tQ_Pvtf9USO6oB596KuCQ", callContext.id);
}

};
Controller.prototype._onParametersChanged$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:_OVcZbSLh0OSNyOINPP0hQ:/NRWebFlows.jGNlo9EW9U24MVecsZ_9tQ/NodesShownInESpaceTree.yh4WVAxKM0WxDhy7_o+wZg/ClientActions._OVcZbSLh0OSNyOINPP0hQ:9Ici_6hH7XYEw59lCCoD2A", "UBTConnect", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2DRTYdv9aUirb1BWROk4Aw", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2_yxSiHXcE6q9vzC4pu1pw", callContext.id) && model.variables.in_IsLoadingIn)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YDluF6zQQUmMzJdxA3pU7Q", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3PyDds6xhUKBeMiVCkLlYQ", callContext.id);
// Local_CommunityStatistics = In_CommunityStatistics
model.variables.local_CommunityStatisticsVar = model.variables.in_CommunityStatisticsIn;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:aIKQzWbtyUqorqAck7MqLw", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:_OVcZbSLh0OSNyOINPP0hQ", callContext.id);
}

};

Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:jGNlo9EW9U24MVecsZ_9tQ:/NRWebFlows.jGNlo9EW9U24MVecsZ_9tQ:rc_AvpAI2laOpbdC1taVaA", "UBTConnect", "Directory_CommonBlocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:yh4WVAxKM0WxDhy7_o+wZg:/NRWebFlows.jGNlo9EW9U24MVecsZ_9tQ/NodesShownInESpaceTree.yh4WVAxKM0WxDhy7_o+wZg:67e4UtW7nCdQZ193+8nl0A", "UBTConnect", "Directory_CommunityNumbers", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:yh4WVAxKM0WxDhy7_o+wZg", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:jGNlo9EW9U24MVecsZ_9tQ", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_CommonBlocks/Directory_CommunityNumbers On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_CommonBlocks/Directory_CommunityNumbers On Parameters Changed");
return controller.onParametersChanged$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
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

define("UBTConnect.Directory_CommonBlocks.Directory_CommunityNumbers.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"GSD2boTW3UWcqdnnWQsS7g": {
getter: function (varBag, idService) {
return varBag.model.variables.local_CommunityStatisticsVar;
}
},
"knl5lxZFf0Kzmqb9vStrcQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsLoadingIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"PY85r6ilMUCrG6c84GTU7g": {
getter: function (varBag, idService) {
return varBag.model.variables.in_CommunityStatisticsIn;
}
},
"n+2aUmyAFkisfYtEIdpcEw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
})(varBag.model, idService);
}
},
"npFBs6IAdUWmKR+4Ah1u2g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"sbuc0SsgrUOEW6WyCwhPRA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"Zl48zeZNZkCSvWr351KXdg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"d0ezNCyIU0uu7wfmIQx6UA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
