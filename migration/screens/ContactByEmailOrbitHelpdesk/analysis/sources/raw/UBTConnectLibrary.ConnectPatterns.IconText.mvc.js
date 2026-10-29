define("UBTConnectLibrary.ConnectPatterns.IconText.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsIconOnRight", "isIconOnRightIn", "IsIconOnRight", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isIconOnRightInDataFetchStatus", "_isIconOnRightInDataFetchStatus", "_isIconOnRightInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Text", "textIn", "Text", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_textInDataFetchStatus", "_textInDataFetchStatus", "_textInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("TextOptions", "textOptionsIn", "TextOptions", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.TextOptionsRec());
}, false, UBTConnectLibraryModel.TextOptionsRec), 
this.attr("_textOptionsInDataFetchStatus", "_textOptionsInDataFetchStatus", "_textOptionsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("SpacingSize", "spacingSizeIn", "SpacingSize", true, false, OS.DataTypes.DataTypes.Text, function () {
return UBTConnectLibraryModel.staticEntities.uBT_Size.extraSmall;
}, false), 
this.attr("_spacingSizeInDataFetchStatus", "_spacingSizeInDataFetchStatus", "_spacingSizeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ExtendedClasses", "extendedClassesIn", "ExtendedClasses", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_extendedClassesInDataFetchStatus", "_extendedClassesInDataFetchStatus", "_extendedClassesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("SubtextOptions", "subtextOptionsIn", "SubtextOptions", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.TextOptionsRec());
}, false, UBTConnectLibraryModel.TextOptionsRec), 
this.attr("_subtextOptionsInDataFetchStatus", "_subtextOptionsInDataFetchStatus", "_subtextOptionsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_Subtext", "in_SubtextIn", "In_Subtext", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_SubtextInDataFetchStatus", "_in_SubtextInDataFetchStatus", "_in_SubtextInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_JustifyText", "in_JustifyTextIn", "In_JustifyText", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_JustifyTextInDataFetchStatus", "_in_JustifyTextInDataFetchStatus", "_in_JustifyTextInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("IsIconOnRight" in inputs) {
this.variables.isIconOnRightIn = inputs.IsIconOnRight;
if("_isIconOnRightInDataFetchStatus" in inputs) {
this.variables._isIconOnRightInDataFetchStatus = inputs._isIconOnRightInDataFetchStatus;
}

}

if("Text" in inputs) {
this.variables.textIn = inputs.Text;
if("_textInDataFetchStatus" in inputs) {
this.variables._textInDataFetchStatus = inputs._textInDataFetchStatus;
}

}

if("TextOptions" in inputs) {
this.variables.textOptionsIn = inputs.TextOptions;
if("_textOptionsInDataFetchStatus" in inputs) {
this.variables._textOptionsInDataFetchStatus = inputs._textOptionsInDataFetchStatus;
}

}

if("SpacingSize" in inputs) {
this.variables.spacingSizeIn = inputs.SpacingSize;
if("_spacingSizeInDataFetchStatus" in inputs) {
this.variables._spacingSizeInDataFetchStatus = inputs._spacingSizeInDataFetchStatus;
}

}

if("ExtendedClasses" in inputs) {
this.variables.extendedClassesIn = inputs.ExtendedClasses;
if("_extendedClassesInDataFetchStatus" in inputs) {
this.variables._extendedClassesInDataFetchStatus = inputs._extendedClassesInDataFetchStatus;
}

}

if("SubtextOptions" in inputs) {
this.variables.subtextOptionsIn = inputs.SubtextOptions;
if("_subtextOptionsInDataFetchStatus" in inputs) {
this.variables._subtextOptionsInDataFetchStatus = inputs._subtextOptionsInDataFetchStatus;
}

}

if("In_Subtext" in inputs) {
this.variables.in_SubtextIn = inputs.In_Subtext;
if("_in_SubtextInDataFetchStatus" in inputs) {
this.variables._in_SubtextInDataFetchStatus = inputs._in_SubtextInDataFetchStatus;
}

}

if("In_JustifyText" in inputs) {
this.variables.in_JustifyTextIn = inputs.In_JustifyText;
if("_in_JustifyTextInDataFetchStatus" in inputs) {
this.variables._in_JustifyTextInDataFetchStatus = inputs._in_JustifyTextInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "ConnectPatterns.IconText");
});
define("UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$model", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_IconText_mvc_model, UBTConnectLibrary_ConnectPatterns_IconText_mvc_controller, UBTConnectLibraryClientVariables, OSWidgets, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view) {
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
        View.displayName = "ConnectPatterns.IconText";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectPatterns_IconText_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectPatterns_IconText_mvc_controller;
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
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/IconText/DIV_IconText onclick");
controller.clicked$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
visible: true,
_idProps: {
service: idService,
name: "DIV_IconText"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
inputs: {
ExtendedClasses: model.variables.extendedClassesIn,
_extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassesInDataFetchStatus),
ColumnOptions: model.getCachedValue(idService.getId("sMb5qJARuk6LBwvDiM1Xeg.ColumnOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
rec.columnBehaviourAttr = ((!(model.variables.isIconOnRightIn)) ? (UBTConnectLibraryModel.staticEntities.uBT_ColumnBehaviour.reduceFirst) : (UBTConnectLibraryModel.staticEntities.uBT_ColumnBehaviour.reduceLast));
rec.spacingSizeAttr = model.variables.spacingSizeIn;
rec.verticalAlignAttr = UBTConnectLibraryModel.staticEntities.uBT_VerticalAlign.center;
rec.flexDirectionAttr = ((model.variables.isIconOnRightIn) ? (UBTConnectLibraryModel.staticEntities.uBT_FlexDirection.rowReverse) : (OS.BuiltinFunctions.nullTextIdentifier()));
return rec;
}();
}, function () {
return model.variables.isIconOnRightIn;
}, function () {
return model.variables.spacingSizeIn;
}),
_columnOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isIconOnRightInDataFetchStatus, model.variables._spacingSizeInDataFetchStatus)
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
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
left: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.icon,
_idProps: {
service: idService,
name: "Icon"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
right: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
InJustifyText: model.variables.in_JustifyTextIn,
_inJustifyTextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_JustifyTextInDataFetchStatus),
In_TextOptions: model.variables.textOptionsIn,
_in_TextOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._textOptionsInDataFetchStatus),
In_Text: model.variables.textIn,
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._textInDataFetchStatus)
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
_dependencies: []
}), $if(((model.variables.in_SubtextIn) !== ("")), false, this, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_Text: model.variables.in_SubtextIn,
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SubtextInDataFetchStatus),
In_TextOptions: model.variables.subtextOptionsIn,
_in_TextOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._subtextOptionsInDataFetchStatus)
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
}, function () {
return [];
})];
})
}
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnectLibrary.ConnectPatterns.IconText.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$debugger", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectPatterns_IconText_mvc_Debugger) {
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

Controller.prototype.clicked$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g:Y06DhYqVkffzqTnycnKUGw", "UBTConnectLibrary", "ConnectPatterns", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:_+C1tD3TLUSPBcrLJtoNXQ:/NRWebFlows.GRnUlqBGNE26Hxr_Ah3_7g/NodesShownInESpaceTree._+C1tD3TLUSPBcrLJtoNXQ:QabjYMUBHiWvGV05fNQk6Q", "UBTConnectLibrary", "IconText", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:_+C1tD3TLUSPBcrLJtoNXQ", callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:GRnUlqBGNE26Hxr_Ah3_7g", callContext.id);
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
return UBTConnectLibraryController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLibraryLanguageResources);
});

define("UBTConnectLibrary.ConnectPatterns.IconText.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"vOJ1gAVZcUir1_WjqrIhjg": {
getter: function (varBag, idService) {
return varBag.model.variables.isIconOnRightIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"kH8XF_FTr0SJaVESRXScGA": {
getter: function (varBag, idService) {
return varBag.model.variables.textIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"4_ynUwCkckaghalZjelUxw": {
getter: function (varBag, idService) {
return varBag.model.variables.textOptionsIn;
}
},
"05fKRIlldEeRXxVypxlJNQ": {
getter: function (varBag, idService) {
return varBag.model.variables.spacingSizeIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"moj8zfd_aEirV8wPVH7RAw": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassesIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"n0Uh62hUlkiorhP8RFV0qQ": {
getter: function (varBag, idService) {
return varBag.model.variables.subtextOptionsIn;
}
},
"3zwGPLHt4EyIcerIPI86fg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_SubtextIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"x4U4OKyuAUmnxd83mrVtgA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_JustifyTextIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"7JH33_U8DUWVWXb8AtMtcg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DIV_IconText"));
})(varBag.model, idService);
}
},
"ccegL1hP6EOsj8etgpAyTA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"gfJkg3VsqEuJ0oIEE2zORw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"pEnv80pUpkiniz08Zw5PFg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
