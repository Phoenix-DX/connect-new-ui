define("UBTConnect.Directory_Photobook.Photobook_Options_Right.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetOpen", "OutSystemsUI_2_23.controller$BottomSheetClose"], function (OutSystems, UBTConnectModel, UBTConnectLibraryModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("SpeedSheetId", "speedSheetIdVar", "SpeedSheetId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("SelectedSpeed", "selectedSpeedVar", "SelectedSpeed", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("In_MainContainerClass", "in_MainContainerClassIn", "In_MainContainerClass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_MainContainerClassInDataFetchStatus", "_in_MainContainerClassInDataFetchStatus", "_in_MainContainerClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_IsShow", "in_IsShowIn", "In_IsShow", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsShowInDataFetchStatus", "_in_IsShowInDataFetchStatus", "_in_IsShowInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_CurrentSpeed", "in_CurrentSpeedIn", "In_CurrentSpeed", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("_in_CurrentSpeedInDataFetchStatus", "_in_CurrentSpeedInDataFetchStatus", "_in_CurrentSpeedInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
return {
RadioGroup_SpeedOptions: OS.Model.ValidationWidgetRecord
};
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
return true;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_MainContainerClass" in inputs) {
this.variables.in_MainContainerClassIn = inputs.In_MainContainerClass;
if("_in_MainContainerClassInDataFetchStatus" in inputs) {
this.variables._in_MainContainerClassInDataFetchStatus = inputs._in_MainContainerClassInDataFetchStatus;
}

}

if("In_IsShow" in inputs) {
this.variables.in_IsShowIn = inputs.In_IsShow;
if("_in_IsShowInDataFetchStatus" in inputs) {
this.variables._in_IsShowInDataFetchStatus = inputs._in_IsShowInDataFetchStatus;
}

}

if("In_CurrentSpeed" in inputs) {
this.variables.in_CurrentSpeedIn = inputs.In_CurrentSpeed;
if("_in_CurrentSpeedInDataFetchStatus" in inputs) {
this.variables._in_CurrentSpeedInDataFetchStatus = inputs._in_CurrentSpeedInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Directory_Photobook.Photobook_Options_Right");
});
define("UBTConnect.Directory_Photobook.Photobook_Options_Right.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Photobook.Photobook_Options_Right.mvc$model", "UBTConnect.Directory_Photobook.Photobook_Options_Right.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$view", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetOpen", "OutSystemsUI_2_23.controller$BottomSheetClose"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, UBTConnect_Directory_Photobook_Photobook_Options_Right_mvc_model, UBTConnect_Directory_Photobook_Photobook_Options_Right_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_view) {
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
        View.displayName = "Directory_Photobook.Photobook_Options_Right";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Directory_Photobook_Photobook_Options_Right_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Directory_Photobook_Photobook_Options_Right_mvc_controller;
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
ExtendedClasses: (model.variables.in_MainContainerClassIn + "--top-right"),
_extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MainContainerClassInDataFetchStatus),
Options: model.getCachedValue(idService.getId("Photobook_Options_Top_Right.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.displayOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
rec.displayAttr = UBTConnectModel.staticEntities.uBT_Display.flex;
rec.alignItemsAttr = UBTConnectModel.staticEntities.uBT_AlignItems.center;
rec.justifyContentAttr = UBTConnectModel.staticEntities.uBT_JustifyContent.flexEnd;
rec.flexDirectionAttr = UBTConnectModel.staticEntities.uBT_FlexDirection.row;
return rec;
}();
rec.visibilityAttr = ((model.variables.in_IsShowIn) ? (UBTConnectModel.staticEntities.uBT_Visibility.visible) : (UBTConnectModel.staticEntities.uBT_Visibility.hidden));
return rec;
}();
}, function () {
return model.variables.in_IsShowIn;
}),
_optionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsShowInDataFetchStatus)
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
name: "Photobook_Options_Top_Right",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("Photobook_Options_Top_Speed.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.backgroundAttr = function () {
var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral9;
rec.opacityAttr = (new OS.DataTypes.Decimal("0.6"));
return rec;
}();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
rec.borderOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.BorderOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
rec.sizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.medium;
return rec;
}();
rec.radiusAttr = function () {
var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Shape.circle;
return rec;
}();
return rec;
}();
rec.displayOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
return rec;
}();
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
clicked$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "BasePatterns/CustomContainer Clicked");
controller.toggleSpeedSheet$Action(true, controller.callContext(eventHandlerContext));
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
name: "Photobook_Options_Top_Speed",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.clock,
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral0,
In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.base_24
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
name: "Photobook_Options_Top_Speed_Icon",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("Photobook_Options_Top_Close.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.backgroundAttr = function () {
var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral9;
rec.opacityAttr = (new OS.DataTypes.Decimal("0.6"));
return rec;
}();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
rec.marginSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.leftSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
return rec;
}();
rec.borderOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.BorderOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
rec.sizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.medium;
return rec;
}();
rec.radiusAttr = function () {
var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Shape.circle;
return rec;
}();
return rec;
}();
rec.displayOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
return rec;
}();
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
clicked$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "BasePatterns/CustomContainer Clicked");
controller.closePhotobook$Action(controller.callContext(eventHandlerContext));
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
name: "Photobook_Options_Top_Close",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.close,
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral0,
In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.base_24
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
name: "Photobook_Options_Top_Close_Icon",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
})];
})
},
_dependencies: []
}), $if(model.variables.in_IsShowIn, false, this, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_view, {
inputs: {
ExtendedClasses: (((model.variables.in_MainContainerClassIn + "-bottom-sheet ") + model.variables.in_MainContainerClassIn) + "-bottom-sheet--speed"),
_extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MainContainerClassInDataFetchStatus),
Title: "Speed setting",
CloseOnClickOutsite: false,
ShowHandlerPreview: false
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onToggle$Action: function (isOpenIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/BottomSheet OnToggle");
return controller.handler_ToggleSpeedSheet$Action(isOpenIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
initialized$Action: function (idIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/BottomSheet Initialized");
controller.handler_SpeedInitialized$Action(idIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
onClose$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/BottomSheet OnClose");
controller.toggleSpeedSheet$Action(false, controller.callContext(eventHandlerContext));
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
name: "BottomSheet_Speed",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.RadioGroup, {
_validationProps: {
validationService: validationService
},
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
mandatory: true,
style: (("radio-group " + model.variables.in_MainContainerClassIn) + "--radio-group"),
variable: model.createVariable(OS.DataTypes.DataTypes.Integer, model.variables.selectedSpeedVar, function (value) {
model.variables.selectedSpeedVar = value;
}),
_idProps: {
service: idService,
name: "RadioGroup_SpeedOptions"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MainContainerClassInDataFetchStatus)
}, React.createElement(OSWidgets.RadioButton, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
style: (("radio-button " + model.variables.in_MainContainerClassIn) + "--radio-button"),
value: UBTConnectModel.staticEntities.photobook_Speed.fiveSeconds,
visible: true,
_idProps: {
service: idService,
name: "Five"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MainContainerClassInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: "5s",
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.RadioButton, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
style: (("radio-button " + model.variables.in_MainContainerClassIn) + "--radio-button"),
value: UBTConnectModel.staticEntities.photobook_Speed.eightSeconds,
visible: true,
_idProps: {
service: idService,
name: "Eight"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MainContainerClassInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: "8s",
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.RadioButton, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
style: (("radio-button " + model.variables.in_MainContainerClassIn) + "--radio-button"),
value: UBTConnectModel.staticEntities.photobook_Speed.fifteenSeconds,
visible: true,
_idProps: {
service: idService,
name: "Fifteen"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MainContainerClassInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: "15s",
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}),
footer: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables._in_MainContainerClassInDataFetchStatus), asPrimitiveValue(model.variables.in_MainContainerClassIn), asPrimitiveValue(model.variables.selectedSpeedVar)]
})];
}, function () {
return [];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.Directory_Photobook.Photobook_Options_Right.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Photobook.Photobook_Options_Right.mvc$debugger", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetOpen", "OutSystemsUI_2_23.controller$BottomSheetClose"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Photobook_Photobook_Options_Right_mvc_Debugger) {
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
Controller.prototype._handler_ToggleSpeedSheet$Action = function (isOpenIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_ToggleSpeedSheet");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Options_Right.Handler_ToggleSpeedSheet$vars"))());
vars.value.isOpenInLocal = isOpenIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:ndHyBwvOcUerLmkXnOi98w:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.lHN5pmn_j0e2pgkKMui7qg/ClientActions.ndHyBwvOcUerLmkXnOi98w:JcBRfMzM7Qu5nR_ZcBZ3IQ", "UBTConnect", "Handler_ToggleSpeedSheet", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2VmWl9uqHU6+sc3NX+M_Ug", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6FyzHytx9UCN_odYDeNaHA", callContext.id) && vars.value.isOpenInLocal)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Q+jrEErz1ES8J6Xi+jzsDA", callContext.id);
// Trigger Event: SheetIsOpen
return controller.sheetIsOpen$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:21mAFaTAv0iwErvX8ELuDg", callContext.id);
});
} else {
// New Speed?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BZ01VnxzHEGkyCQXb9fUxg", callContext.id) && ((model.variables.selectedSpeedVar) !== (model.variables.in_CurrentSpeedIn)))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9yl+cLFFHEqTvhLRE9WFTQ", callContext.id);
// Trigger Event: SetSpeed
return controller.setSpeed$Action(model.variables.selectedSpeedVar, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6vmQadAOPEu6NFa+koG16A", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:E5A5Lf8TXEmu1jT5CQuF9Q", callContext.id);
// Trigger Event: Closed
return controller.closed$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6vmQadAOPEu6NFa+koG16A", callContext.id);
});
}

});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:ndHyBwvOcUerLmkXnOi98w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:ndHyBwvOcUerLmkXnOi98w", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Options_Right.Handler_ToggleSpeedSheet$vars", [{
name: "IsOpen",
attrName: "isOpenInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._handler_SpeedInitialized$Action = function (idIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_SpeedInitialized");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Options_Right.Handler_SpeedInitialized$vars"))());
vars.value.idInLocal = idIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:CTPpjFQ3P0Og7T0MyJGR8A:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.lHN5pmn_j0e2pgkKMui7qg/ClientActions.CTPpjFQ3P0Og7T0MyJGR8A:jn5PSLxOhRxc77vlJGuX3A", "UBTConnect", "Handler_SpeedInitialized", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+skyBUIzTkCtc1882l6d4g", callContext.id);
// Set Bottom Sheet Id
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MLhyNlEGdE6nMm5G3IPw0A", callContext.id);
// SpeedSheetId = Id
model.variables.speedSheetIdVar = vars.value.idInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0wgsmSZ2cUe+9YmbgQPu7w", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:CTPpjFQ3P0Og7T0MyJGR8A", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Options_Right.Handler_SpeedInitialized$vars", [{
name: "Id",
attrName: "idInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._toggleSpeedSheet$Action = function (isOpenIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ToggleSpeedSheet");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Options_Right.ToggleSpeedSheet$vars"))());
vars.value.isOpenInLocal = isOpenIn;
var bottomSheetOpenVar = new OS.DataTypes.VariableHolder();
var bottomSheetCloseVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.bottomSheetOpenVar = bottomSheetOpenVar;
varBag.bottomSheetCloseVar = bottomSheetCloseVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:hd8Uo0Tu6UqaQ7HAZOXJzg:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.lHN5pmn_j0e2pgkKMui7qg/ClientActions.hd8Uo0Tu6UqaQ7HAZOXJzg:ajQohynwjdrIfowwi5oAfA", "UBTConnect", "ToggleSpeedSheet", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7iUfRM2vyU69xP9pzeLExw", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YBaO_N0+nUKj37TyQ3pwiw", callContext.id) && vars.value.isOpenInLocal)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oYHZAFoNsEOp+QpSZ_xrbA", callContext.id);
// Execute Action: BottomSheetOpen
bottomSheetOpenVar.value = OutSystemsUI_2_23Controller.default.bottomSheetOpen$Action(model.variables.speedSheetIdVar, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ufr8D+CsQUOWg_XJcSAXmw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5ShKEI5AAkiarrVnazSjCw", callContext.id);
// Execute Action: BottomSheetClose
bottomSheetCloseVar.value = OutSystemsUI_2_23Controller.default.bottomSheetClose$Action(model.variables.speedSheetIdVar, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ufr8D+CsQUOWg_XJcSAXmw", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:hd8Uo0Tu6UqaQ7HAZOXJzg", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_Photobook.Photobook_Options_Right.ToggleSpeedSheet$vars", [{
name: "IsOpen",
attrName: "isOpenInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._onInitialize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:HDmU0PnrOkqM5vgMOKToUA:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.lHN5pmn_j0e2pgkKMui7qg/ClientActions.HDmU0PnrOkqM5vgMOKToUA:ljtuIg8XMUjquWKyy7LDKw", "UBTConnect", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:plq71iUXbUuT_UlPFX86hw", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YVzMYm0ZOUC63NGwwEjFLQ", callContext.id);
// SelectedSpeed = In_CurrentSpeed
model.variables.selectedSpeedVar = model.variables.in_CurrentSpeedIn;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wHV7HYnKeEqbvJsrHie9sQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:HDmU0PnrOkqM5vgMOKToUA", callContext.id);
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
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:UtTL3C6fg0GNBCAvEgmGXQ:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.lHN5pmn_j0e2pgkKMui7qg/ClientActions.UtTL3C6fg0GNBCAvEgmGXQ:xbBbZF7brhbm7oLrNQLZeQ", "UBTConnect", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0H7DER4XVUGMVJNxGam04Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BdicTJrKrUCmTOw+W66UJQ", callContext.id);
// SelectedSpeed = In_CurrentSpeed
model.variables.selectedSpeedVar = model.variables.in_CurrentSpeedIn;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8u0KLec1AUOQc5IDHvFHFA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:UtTL3C6fg0GNBCAvEgmGXQ", callContext.id);
}

};

Controller.prototype.handler_ToggleSpeedSheet$Action = function (isOpenIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_ToggleSpeedSheet$Action, callContext, isOpenIn);

};
Controller.prototype.handler_SpeedInitialized$Action = function (idIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_SpeedInitialized$Action, callContext, idIn);

};
Controller.prototype.toggleSpeedSheet$Action = function (isOpenIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._toggleSpeedSheet$Action, callContext, isOpenIn);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.setSpeed$Action = function () {
return Promise.resolve();
};
Controller.prototype.closed$Action = function () {
return Promise.resolve();
};
Controller.prototype.sheetIsOpen$Action = function () {
return Promise.resolve();
};
Controller.prototype.closePhotobook$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:8oQxJd3P8Uyxf_ey5QuLaQ:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ:2C839kPvosckW+xI1T0rUw", "UBTConnect", "Directory_Photobook", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:lHN5pmn_j0e2pgkKMui7qg:/NRWebFlows.8oQxJd3P8Uyxf_ey5QuLaQ/NodesShownInESpaceTree.lHN5pmn_j0e2pgkKMui7qg:kwcABzYSAm0wzrBkF0rrkQ", "UBTConnect", "Photobook_Options_Right", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:lHN5pmn_j0e2pgkKMui7qg", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:8oQxJd3P8Uyxf_ey5QuLaQ", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Photobook/Photobook_Options_Right On Initialize");
return controller.onInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Photobook/Photobook_Options_Right On Parameters Changed");
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

define("UBTConnect.Directory_Photobook.Photobook_Options_Right.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"9KV85jXzY0iv6jzmcPaNeg": {
getter: function (varBag, idService) {
return varBag.vars.value.isOpenInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"FVsKGwOwy06RU+i43XPhug": {
getter: function (varBag, idService) {
return varBag.vars.value.idInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"1IfpivbuMke4QUFECG1+Dw": {
getter: function (varBag, idService) {
return varBag.vars.value.isOpenInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"oYHZAFoNsEOp+QpSZ_xrbA": {
getter: function (varBag, idService) {
return varBag.bottomSheetOpenVar.value;
}
},
"5ShKEI5AAkiarrVnazSjCw": {
getter: function (varBag, idService) {
return varBag.bottomSheetCloseVar.value;
}
},
"GG34cYBAikqD0n3dYp+PVg": {
getter: function (varBag, idService) {
return varBag.model.variables.speedSheetIdVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"dwVfL8r2n06j3CAo68nD2g": {
getter: function (varBag, idService) {
return varBag.model.variables.selectedSpeedVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"iMjNL8aYOESpQTv9s3Zkgg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MainContainerClassIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"5oo6SD0ugU6e+LcAt_Z_MQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsShowIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"KrZhsb7IAUW_Mzb7qOoOJQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_CurrentSpeedIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"wjqQ5CMn0Ua5pm8aWR8MXw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Photobook_Options_Top_Right"));
})(varBag.model, idService);
}
},
"22qcD_t5UUmFzBWYkYFi+Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"U6xcUWC_EUmMJRbyhNgsCA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Photobook_Options_Top_Speed"));
})(varBag.model, idService);
}
},
"XDdM3rlwGUCw0XChS7vjvg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"dCOC_73y0Uy67ctmAkAwXA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Photobook_Options_Top_Speed_Icon"));
})(varBag.model, idService);
}
},
"Kqv8yJLsBUGyxEOC3mp95g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Photobook_Options_Top_Close"));
})(varBag.model, idService);
}
},
"sT4FBuYfQEK3pEKfj42Q_g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"KEzYXe8nkUOrJN6OmJ5_eA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Photobook_Options_Top_Close_Icon"));
})(varBag.model, idService);
}
},
"NUVmT8XIOUmG7xOwtGVZ9A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsShow"));
})(varBag.model, idService);
}
},
"OGgkpB55zESglQ0XCi7tjA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomSheet_Speed"));
})(varBag.model, idService);
}
},
"oqIGxjBEt0y9PIqVUVAuEw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"4s5Fv9Frh06E+HJnShvxag": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("RadioGroup_SpeedOptions"));
})(varBag.model, idService);
}
},
"SP8Jm0Xi_0qJmGuSsExt5w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Five"));
})(varBag.model, idService);
}
},
"ADKYWmRK+kaZj_nwZxc4Pg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Eight"));
})(varBag.model, idService);
}
},
"0HMUrwg5H0aCvpOZj_aKFg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Fifteen"));
})(varBag.model, idService);
}
},
"p4tCU1ewykmJzOBppgFG6A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Footer"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
