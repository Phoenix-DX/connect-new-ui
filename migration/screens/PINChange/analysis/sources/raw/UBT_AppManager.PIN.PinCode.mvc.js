define("UBT_AppManager.PIN.PinCode.mvc$model", ["OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "NavigationHandler.controller", "UBT_AppManager.controller", "NavigationHandler.NavigationHandler.PreventBackNavigation.mvc$model", "NavigationHandler.controller$ReplaceOnUpcomingNavigation", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$NavigationHandler", "UBT_AppManager.controller$PIN_SessionInactivity_Destroy"], function (OutSystems, UBT_AppManagerModel, NavigationHandlerController, UBT_AppManagerController, NavigationHandler_NavigationHandler_PreventBackNavigation_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("pincode", "pincodeVar", "pincode", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("ButtonsEnabled", "buttonsEnabledVar", "ButtonsEnabled", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("PinDisplay", "pinDisplayVar", "PinDisplay", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("Counter", "counterVar", "Counter", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("DigitList", "digitListVar", "DigitList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.IntegerList());
}, false, OS.DataTypes.IntegerList), 
this.attr("DestroyCallback", "destroyCallbackVar", "DestroyCallback", true, false, OS.DataTypes.DataTypes.Object, function () {
return null;
}, false), 
this.attr("Length", "lengthIn", "Length", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("_lengthInDataFetchStatus", "_lengthInDataFetchStatus", "_lengthInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ExtendedClasses", "in_ExtendedClassesIn", "In_ExtendedClasses", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_ExtendedClassesInDataFetchStatus", "_in_ExtendedClassesInDataFetchStatus", "_in_ExtendedClassesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_AllowBackNavigation", "in_AllowBackNavigationIn", "In_AllowBackNavigation", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_AllowBackNavigationInDataFetchStatus", "_in_AllowBackNavigationInDataFetchStatus", "_in_AllowBackNavigationInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = NavigationHandler_NavigationHandler_PreventBackNavigation_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("Length" in inputs) {
this.variables.lengthIn = inputs.Length;
if("_lengthInDataFetchStatus" in inputs) {
this.variables._lengthInDataFetchStatus = inputs._lengthInDataFetchStatus;
}

}

if("In_ExtendedClasses" in inputs) {
this.variables.in_ExtendedClassesIn = inputs.In_ExtendedClasses;
if("_in_ExtendedClassesInDataFetchStatus" in inputs) {
this.variables._in_ExtendedClassesInDataFetchStatus = inputs._in_ExtendedClassesInDataFetchStatus;
}

}

if("In_AllowBackNavigation" in inputs) {
this.variables.in_AllowBackNavigationIn = inputs.In_AllowBackNavigation;
if("_in_AllowBackNavigationInDataFetchStatus" in inputs) {
this.variables._in_AllowBackNavigationInDataFetchStatus = inputs._in_AllowBackNavigationInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "PIN.PinCode");
});
define("UBT_AppManager.PIN.PinCode.mvc$view", ["OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "UBT_AppManager.PIN.PinCode.mvc$model", "UBT_AppManager.PIN.PinCode.mvc$controller", "UBT_AppManager.clientVariables", "OutSystems/ReactWidgets/Main", "NavigationHandler.NavigationHandler.PreventBackNavigation.mvc$view", "NavigationHandler.controller$ReplaceOnUpcomingNavigation", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$NavigationHandler", "UBT_AppManager.controller$PIN_SessionInactivity_Destroy"], function (OutSystems, UBT_AppManagerModel, UBT_AppManagerController, NavigationHandlerController, React, OSView, UBT_AppManager_PIN_PinCode_mvc_model, UBT_AppManager_PIN_PinCode_mvc_controller, UBT_AppManagerClientVariables, OSWidgets, NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view) {
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
        View.displayName = "PIN.PinCode";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/UBT_AppManager.PIN.PinCode.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBT_AppManager_PIN_PinCode_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBT_AppManager_PIN_PinCode_mvc_controller;
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
style: ("ubt-pincode " + model.variables.in_ExtendedClassesIn),
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ExtendedClassesInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ubt-pincode__header-bar",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.headerBar,
_idProps: {
service: idService,
name: "HeaderBar"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Center*/ 2,
animate: false,
style: "ubt-pincode__header",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.titlePlaceholder,
style: "ubt-pincode__header__title",
_idProps: {
service: idService,
name: "TitlePlaceholder"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.List, {
animateItems: false,
extendedProperties: {
"disable-virtualization": "True"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.digitListVar,
style: "list list-group ubt-pincode__header__pins",
tag: "div",
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "ubt-pincode__pin",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.pinDisplayVar), asPrimitiveValue(model.variables.digitListVar.getCurrent(callContext.iterationContext))]
}, $if((model.variables.digitListVar.getCurrent(callContext.iterationContext) < OS.BuiltinFunctions.length(model.variables.pinDisplayVar)), false, this, function () {
return [React.createElement(OSWidgets.Icon, {
icon: "circle",
iconSize: /*FontSize*/ 0,
style: "icon selected-icon",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Icon, {
icon: "circle-thin",
iconSize: /*FontSize*/ 0,
style: "icon empty-icon",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}))];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables.pinDisplayVar)]
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.message,
style: "ubt-pincode__header__message",
_idProps: {
service: idService,
name: "Message"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "height: 345.333px;"
},
style: "ubt-pincode__keyboard",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Center*/ 2,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ubt-pincode__keyboard-buttons",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline",
width: "auto"
},
style: "ubt-pincode__keyboard-buttons-column",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: model.variables.buttonsEnabledVar,
gridProperties: {
classes: "OSFillParent"
},
isDefault: false,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "PIN/PinCode/Button OnClick");
return controller.digitClick$Action(1, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
style: "btn ubt-pincode__button",
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "ubt-pincode-digit",
text: ["1"],
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: model.variables.buttonsEnabledVar,
gridProperties: {
classes: "OSFillParent"
},
isDefault: false,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "PIN/PinCode/Button OnClick");
return controller.digitClick$Action(4, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
style: "btn ubt-pincode__button",
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "ubt-pincode-digit",
text: ["4"],
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: model.variables.buttonsEnabledVar,
gridProperties: {
classes: "OSFillParent"
},
isDefault: false,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "PIN/PinCode/Button OnClick");
return controller.digitClick$Action(7, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
style: "btn ubt-pincode__button",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "ubt-pincode-digit",
text: ["7"],
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if((model.variables.lengthIn > 0), false, this, function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.option,
style: "text-primary-color ubt-pincode-digit",
_idProps: {
service: idService,
name: "Option"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Button, {
enabled: true,
isDefault: false,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "PIN/PinCode/Button OnClick");
return controller.validate$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
style: "btn ubt-pincode__button-confirm",
visible: true,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "text-primary-color ubt-pincode-digit",
text: ["OK"],
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline",
width: "auto"
},
style: "ubt-pincode__keyboard-buttons-column",
visible: true,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: model.variables.buttonsEnabledVar,
gridProperties: {
classes: "OSFillParent"
},
isDefault: false,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "PIN/PinCode/Button OnClick");
return controller.digitClick$Action(2, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
style: "btn ubt-pincode__button",
visible: true,
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "ubt-pincode-digit",
text: ["2"],
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: model.variables.buttonsEnabledVar,
gridProperties: {
classes: "OSFillParent"
},
isDefault: false,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "PIN/PinCode/Button OnClick");
return controller.digitClick$Action(5, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
style: "btn ubt-pincode__button",
visible: true,
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "ubt-pincode-digit",
text: ["5"],
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: model.variables.buttonsEnabledVar,
gridProperties: {
classes: "OSFillParent"
},
isDefault: false,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "PIN/PinCode/Button OnClick");
return controller.digitClick$Action(8, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
style: "btn ubt-pincode__button",
visible: true,
_idProps: {
service: idService,
uuid: "35"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "ubt-pincode-digit",
text: ["8"],
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "37"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: model.variables.buttonsEnabledVar,
gridProperties: {
classes: "OSFillParent"
},
isDefault: false,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "PIN/PinCode/Button OnClick");
return controller.digitClick$Action(0, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
style: "btn ubt-pincode__button",
visible: true,
_idProps: {
service: idService,
uuid: "38"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "ubt-pincode-digit",
text: ["0"],
_idProps: {
service: idService,
uuid: "39"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline",
width: "auto"
},
style: "ubt-pincode__keyboard-buttons-column",
visible: true,
_idProps: {
service: idService,
uuid: "40"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: model.variables.buttonsEnabledVar,
gridProperties: {
classes: "OSFillParent"
},
isDefault: false,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "PIN/PinCode/Button OnClick");
return controller.digitClick$Action(3, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
style: "btn ubt-pincode__button",
visible: true,
_idProps: {
service: idService,
uuid: "42"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "ubt-pincode-digit",
text: ["3"],
_idProps: {
service: idService,
uuid: "43"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "44"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: model.variables.buttonsEnabledVar,
gridProperties: {
classes: "OSFillParent"
},
isDefault: false,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "PIN/PinCode/Button OnClick");
return controller.digitClick$Action(6, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
style: "btn ubt-pincode__button",
visible: true,
_idProps: {
service: idService,
uuid: "45"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "ubt-pincode-digit",
text: ["6"],
_idProps: {
service: idService,
uuid: "46"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "47"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: model.variables.buttonsEnabledVar,
gridProperties: {
classes: "OSFillParent"
},
isDefault: false,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "PIN/PinCode/Button OnClick");
return controller.digitClick$Action(9, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
style: "btn ubt-pincode__button",
visible: true,
_idProps: {
service: idService,
uuid: "48"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "ubt-pincode-digit",
text: ["9"],
_idProps: {
service: idService,
uuid: "49"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "50"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: model.getCachedValue(idService.getId("YGbFj8eT20qIEr0yQdT3_g.Enabled"), function () {
return (OS.BuiltinFunctions.length(model.variables.pincodeVar) > 0);
}, function () {
return model.variables.pincodeVar;
}),
gridProperties: {
classes: "OSFillParent"
},
isDefault: false,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "PIN/PinCode/Button OnClick");
return controller.eraseClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
style: "btn ubt-pincode__button-erase",
visible: true,
_idProps: {
service: idService,
uuid: "51"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.erasePlaceholder,
_idProps: {
service: idService,
name: "ErasePlaceholder"
},
_widgetRecordProvider: widgetsRecordProvider
}))))), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_BottomKeyboard,
_idProps: {
service: idService,
name: "Placeholder_BottomKeyboard"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.contentPlaceholder,
style: "ubt-pincode__keyboard-content",
_idProps: {
service: idService,
name: "ContentPlaceholder"
},
_widgetRecordProvider: widgetsRecordProvider
})), $if(model.variables.in_AllowBackNavigationIn, false, this, function () {
return [];
}, function () {
return [React.createElement(NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view, {
inputs: {},
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
uuid: "55",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBT_AppManager.PIN.PinCode.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBT_AppManager.model", "UBT_AppManager.controller", "NavigationHandler.controller", "UBT_AppManager.languageResources", "UBT_AppManager.clientVariables", "UBT_AppManager.PIN.PinCode.mvc$debugger", "UBT_AppManager.PIN.PinCode.mvc$controller.Validate.DelayResetVariablesJS", "UBT_AppManager.PIN.PinCode.mvc$controller.DigitClick.ValidateInPromiseJS", "UBT_AppManager.PIN.PinCode.mvc$controller.OnDestroy.ExecuteDestroyCallbackJS", "NavigationHandler.controller$ReplaceOnUpcomingNavigation", "UBT_AppManager.referencesHealth", "UBT_AppManager.referencesHealth$NavigationHandler", "UBT_AppManager.controller$PIN_SessionInactivity_Destroy"], function (OutSystems, UBT_AppManagerModel, UBT_AppManagerController, NavigationHandlerController, UBT_AppManagerLanguageResources, UBT_AppManagerClientVariables, UBT_AppManager_PIN_PinCode_mvc_Debugger, UBT_AppManager_PIN_PinCode_mvc_controller_Validate_DelayResetVariablesJS, UBT_AppManager_PIN_PinCode_mvc_controller_DigitClick_ValidateInPromiseJS, UBT_AppManager_PIN_PinCode_mvc_controller_OnDestroy_ExecuteDestroyCallbackJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
resetVariables$Action: function () {
return controller.executeActionInsideJSNode(controller._resetVariables$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "ResetVariables");
},
validate$Action: function () {
return controller.executeActionInsideJSNode(controller._validate$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Validate");
}
};
this.dataFetchDependenciesOriginal = {};
this.dataFetchDependentsGraph = {};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._validate$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Validate");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.PIN.PinCode.Validate$vars"))());
var delayResetVariablesJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.delayResetVariablesJSResult = delayResetVariablesJSResult;
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:3TE3Ji3FBEa00DHL3dacEg:/NRWebFlows.EVrBUbYotE+jABIep0Ejew/NodesShownInESpaceTree.Dxz9dFfMY06X37Ty2VbE1w/ClientActions.3TE3Ji3FBEa00DHL3dacEg:h0BN52VtZjmg5GohBDoK3g", "UBT_AppManager", "Validate", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:cQjFAQJWBESWk8FNR4_ATg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:OLTakW82bUW+mSs3_EZaMQ", callContext.id);
// FinalPincode = pincode
vars.value.finalPincodeVar = model.variables.pincodeVar;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:_iSpl_E7IkO++RT3Kvq0BA", callContext.id);
delayResetVariablesJSResult.value = controller.safeExecuteJSNode(UBT_AppManager_PIN_PinCode_mvc_controller_Validate_DelayResetVariablesJS, "DelayResetVariables", "Validate", {
DestroyCallback: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBT_AppManager.PIN.PinCode.Validate$delayResetVariablesJSResult"))();
jsNodeResult.destroyCallbackOut = OS.DataConversion.JSNodeParamConverter.from($parameters.DestroyCallback, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
ResetVariables: controller.clientActionProxies.resetVariables$Action
}, {});
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:oskBqNajtUWydJixUn02PA", callContext.id);
// DestroyCallback = DelayResetVariables.DestroyCallback
model.variables.destroyCallbackVar = delayResetVariablesJSResult.value.destroyCallbackOut;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:UD2GDh6zhkWdG+33u7556g", callContext.id);
// Execute Action: ReplaceOnUpcomingNavigation
NavigationHandlerController.default.replaceOnUpcomingNavigation$Action(callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:YBTynLSWbUKSt9Tyfo1gkw", callContext.id);
// Trigger Event: SetPin
return controller.setPin$Action(vars.value.finalPincodeVar, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:X7JVAA4TC0mCZKhjn3kXhw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:3TE3Ji3FBEa00DHL3dacEg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:3TE3Ji3FBEa00DHL3dacEg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBT_AppManager.PIN.PinCode.Validate$vars", [{
name: "FinalPincode",
attrName: "finalPincodeVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("UBT_AppManager.PIN.PinCode.Validate$delayResetVariablesJSResult", [{
name: "DestroyCallback",
attrName: "destroyCallbackOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._resetVariables$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ResetVariables");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:kwDcL_KE906oEe2IzpailQ:/NRWebFlows.EVrBUbYotE+jABIep0Ejew/NodesShownInESpaceTree.Dxz9dFfMY06X37Ty2VbE1w/ClientActions.kwDcL_KE906oEe2IzpailQ:ZPariziLaVILGskTHYLj4g", "UBT_AppManager", "ResetVariables", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:n83sQu+JIUWj+4CAP_ZibQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Reset variables
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:xIgZTZB1sUSkMd5ptlUajw", callContext.id);
// pincode = ""
model.variables.pincodeVar = "";
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:xIgZTZB1sUSkMd5ptlUajw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// PinDisplay = ""
model.variables.pinDisplayVar = "";
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:xIgZTZB1sUSkMd5ptlUajw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ButtonsEnabled = True
model.variables.buttonsEnabledVar = true;
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:eSvzeJdLfk2mboUKW_qqKw", callContext.id) && (model.variables.lengthIn === 0))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:E2h8RiiYXkS42rilHtyrQQ", callContext.id);
// Counter = 0
model.variables.counterVar = 0;
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:NpZrvCars0qUFEoApXSOGQ", callContext.id);
// Execute Action: ListClear
OS.SystemActions.listClear(model.variables.digitListVar, callContext);
}

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ntraS6Lehka18MVK6Xpveg", callContext.id);
// Execute Action: PincodeChanged
return controller._pincodeChanged$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:o9u4XxNa7EmTa8JjhV8Ivg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:kwDcL_KE906oEe2IzpailQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:kwDcL_KE906oEe2IzpailQ", callContext.id);
throw ex;

});
};
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
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:BmOgRTxoiEW5qE1JTvTF4g:/NRWebFlows.EVrBUbYotE+jABIep0Ejew/NodesShownInESpaceTree.Dxz9dFfMY06X37Ty2VbE1w/ClientActions.BmOgRTxoiEW5qE1JTvTF4g:LzUCRJ324EKh5evXw7RGrQ", "UBT_AppManager", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:JnCPmqfw2ESMxH5r4vzHTg", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:sD1oEpLW5kecxhxw6J_7Gg", callContext.id);
// Execute Action: PIN_SessionInactivity_Destroy
UBT_AppManagerController.default.pIN_SessionInactivity_Destroy$Action(callContext);
// Set default length
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:s10Raf3SXU67CecKJ0_Zrg", callContext.id);
// Length = If
model.variables.lengthIn = (((model.variables.lengthIn < 0)) ? (4) : (model.variables.lengthIn));
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:TEUjGRJkGEG_ybRPMm4D5w", callContext.id);
// Execute Action: ListClear
OS.SystemActions.listClear(model.variables.digitListVar, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:mpWA99nWRkyrYs5InXVkQQ", callContext.id);
// Counter = 0
model.variables.counterVar = 0;
while ((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:JrObkTfaLUKL5+dZBe6r0Q", callContext.id) && (model.variables.counterVar < model.variables.lengthIn))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:wvawf6lhjUqIsYgjzNHgUQ", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(model.variables.digitListVar, model.variables.counterVar, callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:38gzRgtC00a1cmFYa5m5mQ", callContext.id);
// Counter = Counter + 1
model.variables.counterVar = (model.variables.counterVar + 1);
}

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:QuR8yy4IV0ufF5IyN6J8qw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:BmOgRTxoiEW5qE1JTvTF4g", callContext.id);
}

};
Controller.prototype._validateButtonsEnabled$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ValidateButtonsEnabled");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:YMqnsgCnXEWD8vSAzTysCQ:/NRWebFlows.EVrBUbYotE+jABIep0Ejew/NodesShownInESpaceTree.Dxz9dFfMY06X37Ty2VbE1w/ClientActions.YMqnsgCnXEWD8vSAzTysCQ:toxr2PbUNaGnYdLAP3P0Kg", "UBT_AppManager", "ValidateButtonsEnabled", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:HI3f372PJke23+KNR5ZSTQ", callContext.id);
// Validate If Buttons Enable
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:zm2pEkhNFUSpCiWOSuXIFA", callContext.id);
// ButtonsEnabled = Length < Length or Length = 0
model.variables.buttonsEnabledVar = ((OS.BuiltinFunctions.length(model.variables.pincodeVar) < model.variables.lengthIn) || (model.variables.lengthIn === 0));
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:9tYCVuOoxku2LJ3Ht69VEQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:YMqnsgCnXEWD8vSAzTysCQ", callContext.id);
}

};
Controller.prototype._pincodeChanged$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("PincodeChanged");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:RLEbvqi_ZECO6ipmW0oygA:/NRWebFlows.EVrBUbYotE+jABIep0Ejew/NodesShownInESpaceTree.Dxz9dFfMY06X37Ty2VbE1w/ClientActions.RLEbvqi_ZECO6ipmW0oygA:OYiLswzJY2Q17CICzF3OJQ", "UBT_AppManager", "PincodeChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:i+wul6pmhkSrn8oicx1tcA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Q8ibWIxJOUqSFOijC6p9TQ", callContext.id);
// Trigger Event: PincodeChange
return controller.pincodeChange$Action(OS.BuiltinFunctions.length(model.variables.pincodeVar), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:9zb_rfkCDEq6uLxgj3IHmg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:RLEbvqi_ZECO6ipmW0oygA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:RLEbvqi_ZECO6ipmW0oygA", callContext.id);
throw ex;

});
};
Controller.prototype._digitClick$Action = function (digitIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("DigitClick");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBT_AppManager.PIN.PinCode.DigitClick$vars"))());
vars.value.digitInLocal = digitIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:atWJx3hA10iSKe48231i2A:/NRWebFlows.EVrBUbYotE+jABIep0Ejew/NodesShownInESpaceTree.Dxz9dFfMY06X37Ty2VbE1w/ClientActions.atWJx3hA10iSKe48231i2A:bs410iCqxt0mcFc1mTH4Gw", "UBT_AppManager", "DigitClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:NcoXlVAfMkyBofeoK2zDkw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:vv+TKDaP_0+Z48+s_UlxHg", callContext.id);
// Trigger Event: KeyPressed
return controller.keyPressed$Action(callContext).then(function () {
// Create ubt-pincode
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Kj1vEobbK0CVtSbiCaxI4A", callContext.id);
// pincode = pincode + Digit
model.variables.pincodeVar = (model.variables.pincodeVar + (vars.value.digitInLocal).toString());
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:Kj1vEobbK0CVtSbiCaxI4A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// PinDisplay = PinDisplay + "*"
model.variables.pinDisplayVar = (model.variables.pinDisplayVar + "*");
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:STbdKTZSS0qEQVVqGNaP1A", callContext.id) && (model.variables.lengthIn === 0))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:q9Klde70XkymURfRDsU27A", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(model.variables.digitListVar, model.variables.counterVar, callContext);
}

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:GeCLZd95F0mQhEMX0D5F+A", callContext.id);
// Execute Action: ValidateButtonsEnabled
controller._validateButtonsEnabled$Action(callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:+9gy+h3pPECI8ka9J9Ocxg", callContext.id);
// Execute Action: PincodeChanged
return controller._pincodeChanged$Action(callContext);
}).then(function () {
// ubt-pincode reached length?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:BQedS8V55ECiU+eqgTxNOA", callContext.id) && ((OS.BuiltinFunctions.length(model.variables.pincodeVar) === model.variables.lengthIn) && ((model.variables.lengthIn) !== (0))))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:xCmAB4qLc0KAPf4hkBWj8g", callContext.id);
return controller.safeExecuteAsyncJSNode(UBT_AppManager_PIN_PinCode_mvc_controller_DigitClick_ValidateInPromiseJS, "ValidateInPromise", "DigitClick", null, function ($parameters) {
}, {
Validate: controller.clientActionProxies.validate$Action
}, {}).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:pFr96Sw_xkG0M9_fzz4ikw", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:7QhcIr2eaka4OO3hWEQdww", callContext.id);
}

});
});
}).then(function (res) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:atWJx3hA10iSKe48231i2A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:atWJx3hA10iSKe48231i2A", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBT_AppManager.PIN.PinCode.DigitClick$vars", [{
name: "Digit",
attrName: "digitInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._onDestroy$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:X_5w55wVikSsPfOKKP3trw:/NRWebFlows.EVrBUbYotE+jABIep0Ejew/NodesShownInESpaceTree.Dxz9dFfMY06X37Ty2VbE1w/ClientActions.X_5w55wVikSsPfOKKP3trw:Q1VAEvZTHlVs8nHdIiK8Fw", "UBT_AppManager", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:+X+6KhVe5EW+LKHAimNCmg", callContext.id);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:ij3xyHrDxEq54acWmzYszA", callContext.id);
controller.safeExecuteJSNode(UBT_AppManager_PIN_PinCode_mvc_controller_OnDestroy_ExecuteDestroyCallbackJS, "ExecuteDestroyCallback", "OnDestroy", {
DestroyCallback: OS.DataConversion.JSNodeParamConverter.to(model.variables.destroyCallbackVar, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:O_owTRYfpUKPTHprv0RfXQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:X_5w55wVikSsPfOKKP3trw", callContext.id);
}

};
Controller.prototype._eraseClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("EraseClick");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:ALMc9o_DGEKVFkUA2LE0dg:/NRWebFlows.EVrBUbYotE+jABIep0Ejew/NodesShownInESpaceTree.Dxz9dFfMY06X37Ty2VbE1w/ClientActions.ALMc9o_DGEKVFkUA2LE0dg:fL+a2VLK4LRtWqdgHYDpbw", "UBT_AppManager", "EraseClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:pzyQlCxP+UyzumRs_Rl+zQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Erase Last Char
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:GWntBkxZU0e8RQkeAqSPcw", callContext.id);
// pincode = Substr
model.variables.pincodeVar = OS.BuiltinFunctions.substr(model.variables.pincodeVar, 0, (OS.BuiltinFunctions.length(model.variables.pincodeVar) - 1));
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:GWntBkxZU0e8RQkeAqSPcw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// PinDisplay = Substr
model.variables.pinDisplayVar = OS.BuiltinFunctions.substr(model.variables.pinDisplayVar, 0, (OS.BuiltinFunctions.length(model.variables.pinDisplayVar) - 1));
if((OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:MRIgeOoWd0GHEdfIuqjn9w", callContext.id) && (model.variables.lengthIn === 0))) {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:jjLXAMgA80e4MX5BlsegTw", callContext.id);
// Execute Action: ListRemove
OS.SystemActions.listRemove(model.variables.digitListVar, model.variables.digitListVar.getItem((((OS.BuiltinFunctions.length(model.variables.pinDisplayVar) === 0)) ? (0) : ((OS.BuiltinFunctions.length(model.variables.pinDisplayVar) - 1)))), callContext);
}

OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:yqzPhPr6r0W_rIB1HTAQNg", callContext.id);
// Execute Action: ValidateButtonsEnabled
controller._validateButtonsEnabled$Action(callContext);
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:m+KF52Vh30OPKyzmi_JvKQ", callContext.id);
// Execute Action: PincodeChanged
return controller._pincodeChanged$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:L5Y1QDGP_kuXlBjZF+NRyQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:ALMc9o_DGEKVFkUA2LE0dg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:ALMc9o_DGEKVFkUA2LE0dg", callContext.id);
throw ex;

});
};

Controller.prototype.validate$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._validate$Action, callContext);

};
Controller.prototype.resetVariables$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._resetVariables$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.validateButtonsEnabled$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._validateButtonsEnabled$Action, callContext);

};
Controller.prototype.pincodeChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._pincodeChanged$Action, callContext);

};
Controller.prototype.digitClick$Action = function (digitIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._digitClick$Action, callContext, digitIn);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.eraseClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._eraseClick$Action, callContext);

};
Controller.prototype.keyPressed$Action = function () {
return Promise.resolve();
};
Controller.prototype.setPin$Action = function () {
return Promise.resolve();
};
Controller.prototype.pincodeChange$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:EVrBUbYotE+jABIep0Ejew:/NRWebFlows.EVrBUbYotE+jABIep0Ejew:tcKb4E8x2qIhKwyUwFCtgQ", "UBT_AppManager", "PIN", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("U+moTowL4Uei+h+0UlGNPQ:Dxz9dFfMY06X37Ty2VbE1w:/NRWebFlows.EVrBUbYotE+jABIep0Ejew/NodesShownInESpaceTree.Dxz9dFfMY06X37Ty2VbE1w:AxtR27RY3ko54ZQp+44vtQ", "UBT_AppManager", "PinCode", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:Dxz9dFfMY06X37Ty2VbE1w", callContext.id);
OutSystemsDebugger.pop("U+moTowL4Uei+h+0UlGNPQ:EVrBUbYotE+jABIep0Ejew", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "PIN/PinCode On Initialize");
return controller.onInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "PIN/PinCode On Destroy");
return controller.onDestroy$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return controller.handleError(ex);
};
Controller.checkPermissions = function () {
};
Controller.prototype.getDefaultTimeout = function () {
return UBT_AppManagerController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBT_AppManagerLanguageResources);
});
define("UBT_AppManager.PIN.PinCode.mvc$controller.Validate.DelayResetVariablesJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var destroyed = false;

var reset = function() {
    if (!destroyed) {
        $actions.ResetVariables();
    }
};

var timeout = window.setTimeout(reset, 500);

var destroy = function() {
    destroyed = true;
    window.clearTimeout(timeout);
};


$parameters.DestroyCallback = destroy;
};
});
define("UBT_AppManager.PIN.PinCode.mvc$controller.DigitClick.ValidateInPromiseJS", [], function () {
return function ($actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
$actions.Validate();
$resolve();
});
};
});
define("UBT_AppManager.PIN.PinCode.mvc$controller.OnDestroy.ExecuteDestroyCallbackJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if ($parameters.DestroyCallback) {
    $parameters.DestroyCallback();
}
 
};
});

define("UBT_AppManager.PIN.PinCode.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"u+w1r1_zqUWKHhJh9heIEQ": {
getter: function (varBag, idService) {
return varBag.vars.value.finalPincodeVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"_iSpl_E7IkO++RT3Kvq0BA": {
getter: function (varBag, idService) {
return varBag.delayResetVariablesJSResult.value;
}
},
"OQn3c6Qew0aKP9iGqe3KMg": {
getter: function (varBag, idService) {
return varBag.vars.value.digitInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"xCmAB4qLc0KAPf4hkBWj8g": {
getter: function (varBag, idService) {
return varBag.validateInPromiseJSResult.value;
}
},
"ij3xyHrDxEq54acWmzYszA": {
getter: function (varBag, idService) {
return varBag.executeDestroyCallbackJSResult.value;
}
},
"JLqGpjBxtEmO9NFlrWd3lw": {
getter: function (varBag, idService) {
return varBag.model.variables.pincodeVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"pRQ0TpU9pEuSswnEYzqP6g": {
getter: function (varBag, idService) {
return varBag.model.variables.buttonsEnabledVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"2N6xKom6aEOrtzXhpGO31w": {
getter: function (varBag, idService) {
return varBag.model.variables.pinDisplayVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"vjdWTVO1q0qnOCrNDquUYQ": {
getter: function (varBag, idService) {
return varBag.model.variables.counterVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"mNV6wGh_v02Tvi0zgGW35A": {
getter: function (varBag, idService) {
return varBag.model.variables.digitListVar;
}
},
"jSVbobuEOU6gN+9fApWIjA": {
getter: function (varBag, idService) {
return varBag.model.variables.destroyCallbackVar;
},
dataType: OS.DataTypes.DataTypes.Object
},
"oepzcyh6MUit+9jOvsbDog": {
getter: function (varBag, idService) {
return varBag.model.variables.lengthIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"HdcpMg57cE+txDkEjvoSRg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ExtendedClassesIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"xw2HO6p+C0Ok5QhkuLlNYg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_AllowBackNavigationIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"OFaurkOEs0SxmlX0OU2LIA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderBar"));
})(varBag.model, idService);
}
},
"CKpQo1qkgECzkyR+KlhSqA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TitlePlaceholder"));
})(varBag.model, idService);
}
},
"zfyTLSFj0kWXscy8SNXFjw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Message"));
})(varBag.model, idService);
}
},
"bwKGCxABBkGErhj9ExnMOA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Option"));
})(varBag.model, idService);
}
},
"Q4IqvEb0OEaa19RBUQtuaw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ErasePlaceholder"));
})(varBag.model, idService);
}
},
"NY9C_R+5+Ea6m2QYttmmyg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_BottomKeyboard"));
})(varBag.model, idService);
}
},
"5PIjnw+j_EuDH4D171DB9g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ContentPlaceholder"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
