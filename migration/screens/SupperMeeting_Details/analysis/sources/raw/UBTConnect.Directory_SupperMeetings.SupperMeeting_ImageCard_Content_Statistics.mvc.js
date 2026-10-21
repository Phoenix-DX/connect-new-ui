define("UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_Statistics.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$model", "UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_IconText.mvc$model", "UBTConnectLibrary.ConnectPatterns.ImageCard__Content__Tag.mvc$model", "UBTConnect.controller$GetDescriptor_BretherenCount", "UBTConnectLibrary.model$LookupConceptsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.controller$GetLookupConcepts", "UBTConnect.controller$GetDescriptor_Subdivision_HouseholdCount", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel, UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_IconText_mvcModel, UBTConnectLibrary_ConnectPatterns_ImageCard__Content__Tag_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("FontSize", "fontSizeVar", "FontSize", true, false, OS.DataTypes.DataTypes.Text, function () {
return UBTConnectModel.staticEntities.uBT_FontSize.extraSmall;
}, false), 
this.attr("In_BretherenCount", "in_BretherenCountIn", "In_BretherenCount", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("_in_BretherenCountInDataFetchStatus", "_in_BretherenCountInDataFetchStatus", "_in_BretherenCountInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_HouseholdCount", "in_HouseholdCountIn", "In_HouseholdCount", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("_in_HouseholdCountInDataFetchStatus", "_in_HouseholdCountInDataFetchStatus", "_in_HouseholdCountInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_GenderSplit", "in_GenderSplitIn", "In_GenderSplit", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_GenderSplitInDataFetchStatus", "_in_GenderSplitInDataFetchStatus", "_in_GenderSplitInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (((UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel.hasValidationWidgets) || UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_IconText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_ImageCard__Content__Tag_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_BretherenCount" in inputs) {
this.variables.in_BretherenCountIn = inputs.In_BretherenCount;
if("_in_BretherenCountInDataFetchStatus" in inputs) {
this.variables._in_BretherenCountInDataFetchStatus = inputs._in_BretherenCountInDataFetchStatus;
}

}

if("In_HouseholdCount" in inputs) {
this.variables.in_HouseholdCountIn = inputs.In_HouseholdCount;
if("_in_HouseholdCountInDataFetchStatus" in inputs) {
this.variables._in_HouseholdCountInDataFetchStatus = inputs._in_HouseholdCountInDataFetchStatus;
}

}

if("In_GenderSplit" in inputs) {
this.variables.in_GenderSplitIn = inputs.In_GenderSplit;
if("_in_GenderSplitInDataFetchStatus" in inputs) {
this.variables._in_GenderSplitInDataFetchStatus = inputs._in_GenderSplitInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Directory_SupperMeetings.SupperMeeting_ImageCard_Content_Statistics");
});
define("UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_Statistics.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_Statistics.mvc$model", "UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_Statistics.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_IconText.mvc$view", "UBTConnectLibrary.ConnectPatterns.ImageCard__Content__Tag.mvc$view", "UBTConnect.controller$GetDescriptor_BretherenCount", "UBTConnectLibrary.model$LookupConceptsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.controller$GetLookupConcepts", "UBTConnect.controller$GetDescriptor_Subdivision_HouseholdCount", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_Statistics_mvc_model, UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_Statistics_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_ImageCard__Content__Tag_mvc_view) {
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
        View.displayName = "Directory_SupperMeetings.SupperMeeting_ImageCard_Content_Statistics";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_ImageCard__Content__Tag_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_Statistics_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_Statistics_mvc_controller;
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
Options: model.getCachedValue(idService.getId("zkZ7shNTU06v+2QjADBacQ.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.marginSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
return rec;
}();
rec.textOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex gap-s flex-wrap flex-direction-column",
visible: true,
_idProps: {
service: idService,
name: "DIV_Statistics"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "DIV_Bretherens"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
inputs: {
ColumnOptions: model.getCachedValue(idService.getId("KdRwa_FryUGdbcaSDHkpyg.ColumnOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
rec.columnBehaviourAttr = UBTConnectModel.staticEntities.uBT_ColumnBehaviour.reduceFirst;
rec.spacingSizeAttr = UBTConnectModel.staticEntities.uBT_Size.small;
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
uuid: "3",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
left: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_IconText_mvc_view, {
inputs: {
In_Text: model.getCachedValue(idService.getId("PJ+sScQP1UeO6lMKOl58Fw.In_Text"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectController.default.getDescriptor_BretherenCount$Action(model.variables.in_BretherenCountIn, callContext).out_DescriptorOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.in_BretherenCountIn;
}),
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_BretherenCountInDataFetchStatus),
In_UBT_IconId: model.getCachedValue(idService.getId("PJ+sScQP1UeO6lMKOl58Fw.In_UBT_IconId"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.getLookupConcepts$Action(false, callContext).out_LookupOut;
}, OS.DataTypes.DataTypes.Record, callContext.id).brethrenAttr.iconAttr;
}),
In_UBT_ColorId: model.getCachedValue(idService.getId("PJ+sScQP1UeO6lMKOl58Fw.In_UBT_ColorId"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.getLookupConcepts$Action(false, callContext).out_LookupOut;
}, OS.DataTypes.DataTypes.Record, callContext.id).brethrenAttr.icon_ColorAttr;
}),
In_FontSize: model.variables.fontSizeVar
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
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
right: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_ImageCard__Content__Tag_mvc_view, {
inputs: {
Content: model.variables.in_GenderSplitIn,
_contentInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_GenderSplitInDataFetchStatus)
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
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_GenderSplitIn), asPrimitiveValue(model.variables.fontSizeVar), asPrimitiveValue(model.variables._in_GenderSplitInDataFetchStatus), asPrimitiveValue(model.variables._in_BretherenCountInDataFetchStatus), asPrimitiveValue(model.variables.in_BretherenCountIn)]
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "DIV_Households"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_IconText_mvc_view, {
inputs: {
In_Text: model.getCachedValue(idService.getId("uo1Cma43oE6jz_PdB7kZCg.In_Text"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectController.default.getDescriptor_Subdivision_HouseholdCount$Action(model.variables.in_HouseholdCountIn, callContext).out_DescriptorOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.in_HouseholdCountIn;
}),
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HouseholdCountInDataFetchStatus),
In_FontSize: model.variables.fontSizeVar,
In_UBT_IconId: model.getCachedValue(idService.getId("uo1Cma43oE6jz_PdB7kZCg.In_UBT_IconId"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.getLookupConcepts$Action(false, callContext).out_LookupOut;
}, OS.DataTypes.DataTypes.Record, callContext.id).householdAttr.iconAttr;
}),
In_UBT_ColorId: model.getCachedValue(idService.getId("uo1Cma43oE6jz_PdB7kZCg.In_UBT_ColorId"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.getLookupConcepts$Action(false, callContext).out_LookupOut;
}, OS.DataTypes.DataTypes.Record, callContext.id).householdAttr.icon_ColorAttr;
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
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})))];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_HouseholdCountIn), asPrimitiveValue(model.variables.in_GenderSplitIn), asPrimitiveValue(model.variables.fontSizeVar), asPrimitiveValue(model.variables._in_HouseholdCountInDataFetchStatus), asPrimitiveValue(model.variables._in_GenderSplitInDataFetchStatus), asPrimitiveValue(model.variables._in_BretherenCountInDataFetchStatus), asPrimitiveValue(model.variables.in_BretherenCountIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_Statistics.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_Statistics.mvc$debugger", "UBTConnect.controller$GetDescriptor_BretherenCount", "UBTConnectLibrary.model$LookupConceptsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.controller$GetLookupConcepts", "UBTConnect.controller$GetDescriptor_Subdivision_HouseholdCount", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_Statistics_mvc_Debugger) {
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
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:ysVqQjJFJU+eHpsBerSZLQ:/NRWebFlows.E53piema20KUP3HqQIZR6A/NodesShownInESpaceTree.ysVqQjJFJU+eHpsBerSZLQ:1U2RiNx4RX_khTnCXkp_qQ", "UBTConnect", "SupperMeeting_ImageCard_Content_Statistics", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:ysVqQjJFJU+eHpsBerSZLQ", callContext.id);
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

define("UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_Statistics.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"RYdVrDCINUS1pl3W6mmghA": {
getter: function (varBag, idService) {
return varBag.model.variables.fontSizeVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"XbFrLjq1ukW1Q69ajsfogQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_BretherenCountIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"ljSBJDOAt0iQp21sPYMocg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HouseholdCountIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"jS7HgCG4FUy60UsnaJt_0w": {
getter: function (varBag, idService) {
return varBag.model.variables.in_GenderSplitIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"iozAenJcl0+87v778J1hog": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"8XFdzFSFxUGxK+4gGdcXag": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DIV_Statistics"));
})(varBag.model, idService);
}
},
"FEftPsPftEK+VdzW+NG82w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DIV_Bretherens"));
})(varBag.model, idService);
}
},
"fbKkaO1SckOz4pU+Mjcwrw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"UIcfEmF5LEy8_57nyOAkFw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"TcTyXj_JZ0OhVIo4tAGJrg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DIV_Households"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
