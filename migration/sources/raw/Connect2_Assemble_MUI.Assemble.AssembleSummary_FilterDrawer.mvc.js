define("Connect2_Assemble_MUI.Assemble.AssembleSummary_FilterDrawer.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_CS.model", "Connect2_Assemble_MUI.controller", "UBTConnectLibrary.model", "Connect2_Assemble_CS.model$AssembleEventFilterRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS", "Connect2_Assemble_MUI.controller$CompareAssembleFilters", "Connect2_Assemble_MUI.model$AssembleEventTypeBooleanRecordList", "UBTConnectLibrary.model$SearchInputRec", "Connect2_Assemble_MUI.referencesHealth$UBTConnectLibrary", "Connect2_Assemble_MUI.model$AssembleEventTypeBooleanRecord"], function (OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_CSModel, Connect2_Assemble_MUIController, UBTConnectLibraryModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("OriginalAssembleMeetingFilter", "originalAssembleMeetingFilterVar", "OriginalAssembleMeetingFilter", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_CSModel.AssembleEventFilterRec());
}, false, Connect2_Assemble_CSModel.AssembleEventFilterRec), 
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("FilteredEventTypes", "filteredEventTypesVar", "FilteredEventTypes", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_MUIModel.AssembleEventTypeBooleanRecordList());
}, false, Connect2_Assemble_MUIModel.AssembleEventTypeBooleanRecordList), 
this.attr("SearchKey_Current", "searchKey_CurrentVar", "SearchKey_Current", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("IsOpen", "isOpenIn", "IsOpen", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isOpenInDataFetchStatus", "_isOpenInDataFetchStatus", "_isOpenInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("AssembleMeetingFilter", "assembleMeetingFilterIn", "AssembleMeetingFilter", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_Assemble_CSModel.AssembleEventFilterRec());
}, false, Connect2_Assemble_CSModel.AssembleEventFilterRec), 
this.attr("_assembleMeetingFilterInDataFetchStatus", "_assembleMeetingFilterInDataFetchStatus", "_assembleMeetingFilterInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Checkbox_IsSelected: OS.Model.ValidationWidgetRecord
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
if("IsOpen" in inputs) {
this.variables.isOpenIn = inputs.IsOpen;
if("_isOpenInDataFetchStatus" in inputs) {
this.variables._isOpenInDataFetchStatus = inputs._isOpenInDataFetchStatus;
}

}

if("AssembleMeetingFilter" in inputs) {
this.variables.assembleMeetingFilterIn = inputs.AssembleMeetingFilter;
if("_assembleMeetingFilterInDataFetchStatus" in inputs) {
this.variables._assembleMeetingFilterInDataFetchStatus = inputs._assembleMeetingFilterInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Assemble.AssembleSummary_FilterDrawer");
});
define("Connect2_Assemble_MUI.Assemble.AssembleSummary_FilterDrawer.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "Connect2_Assemble_CS.model", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "Connect2_Assemble_MUI.Assemble.AssembleSummary_FilterDrawer.mvc$model", "Connect2_Assemble_MUI.Assemble.AssembleSummary_FilterDrawer.mvc$controller", "Connect2_LegacyShared.NewConnect.InBlock_ActionMenu.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Reusable.NewConnectContent.mvc$view", "UBTConnectLibrary.ConnectPatterns.Input.mvc$view", "NavigationHandler.NavigationHandler.PreventBackNavigation.mvc$view", "Connect2_Assemble_CS.model$AssembleEventFilterRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS", "Connect2_Assemble_MUI.controller$CompareAssembleFilters", "Connect2_Assemble_MUI.model$AssembleEventTypeBooleanRecordList", "UBTConnectLibrary.model$SearchInputRec", "Connect2_Assemble_MUI.referencesHealth$UBTConnectLibrary", "Connect2_Assemble_MUI.model$AssembleEventTypeBooleanRecord"], function (OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, Connect2_Assemble_CSModel, UBTConnectLibraryModel, React, OSView, Connect2_Assemble_MUI_Assemble_AssembleSummary_FilterDrawer_mvc_model, Connect2_Assemble_MUI_Assemble_AssembleSummary_FilterDrawer_mvc_controller, Connect2_LegacyShared_NewConnect_InBlock_ActionMenu_mvc_view, OSWidgets, Connect2_LegacyShared_Reusable_NewConnectContent_mvc_view, UBTConnectLibrary_ConnectPatterns_Input_mvc_view, NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view) {
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
        View.displayName = "Assemble.AssembleSummary_FilterDrawer";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_NewConnect_InBlock_ActionMenu_mvc_view, Connect2_LegacyShared_Reusable_NewConnectContent_mvc_view, UBTConnectLibrary_ConnectPatterns_Input_mvc_view, NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_Assemble_MUI_Assemble_AssembleSummary_FilterDrawer_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_Assemble_MUI_Assemble_AssembleSummary_FilterDrawer_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_LegacyShared_NewConnect_InBlock_ActionMenu_mvc_view, {
inputs: {
ExtendedClass: "ignore-backwards-compatibility-content action-menu-container--scrollable action-menu-container--padding-none",
IsOpen: model.variables.isOpenIn,
_isOpenInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isOpenInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onClose$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "NewConnect/InBlock_ActionMenu OnClose");
return controller.actionMenuOnClose$Action(false, controller.callContext(eventHandlerContext));
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
name: "Block_ActionMenu",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
menuEntries: new PlaceholderContent(function () {
return [React.createElement(Connect2_LegacyShared_Reusable_NewConnectContent_mvc_view, {
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
name: "Block_FilterContent",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "font-size-s font-semi-bold padding-base action-menu-container--scrollable__header",
visible: true,
_idProps: {
service: idService,
name: "DIV_Header"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Filters", React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "padding-x-s padding-y-base assemble-filter-search",
visible: true,
_idProps: {
service: idService,
name: "DIV_Search"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_ConnectPatterns_Input_mvc_view, {
inputs: {
In_Options: model.getCachedValue(idService.getId("oGExHZFJ6k2BjXwWLiTMIQ.In_Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SearchInputRec();
rec.initalStringAttr = model.variables.searchKey_CurrentVar;
rec.searchPromptAttr = "Search";
rec.borderRadiusAttr = Connect2_Assemble_MUIModel.staticEntities.shape.rounded;
rec.isSyncValueWithInputAttr = true;
return rec;
}();
}, function () {
return model.variables.searchKey_CurrentVar;
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_ClearString$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Input Event_ClearString");
controller.handler_SearchInputEventOnClear$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
event_OnChange$Action: function (event_CurrentStringIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Input Event_OnChange");
controller.search_InputEvent_OnChange$Action(event_CurrentStringIn, controller.callContext(eventHandlerContext));
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
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex justify-content-space-between font-semi-bold",
visible: true,
_idProps: {
service: idService,
name: "DIV_MeetingType__Header"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Meeting Types"), React.createElement(OSWidgets.Link, {
enabled: true,
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/AssembleSummary_FilterDrawer/Link OnClick");
controller.link_ClearOnClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Reset"))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "padding-x-base padding-bottom-base font-size-s assemble-filter-filters",
visible: true,
_idProps: {
service: idService,
name: "DIV_Filters"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "DIV_MeetingType"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "DIV_MeetingType__FilterList"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(!(model.variables.isLoadingVar), false, this, function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.filteredEventTypesVar,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex justify-content-space-between padding-y-s",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.filteredEventTypesVar.getCurrent(callContext.iterationContext).isSelectedAttr), asPrimitiveValue(model.variables.filteredEventTypesVar.getCurrent(callContext.iterationContext).assembleEventTypeAttr.titleAttr)]
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "break-word",
value: model.variables.filteredEventTypesVar.getCurrent(callContext.iterationContext).assembleEventTypeAttr.titleAttr,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Checkbox, {
_validationProps: {
validationService: validationService
},
enabled: true,
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
onChange: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/AssembleSummary_FilterDrawer/Checkbox_IsSelected OnChange");
controller.checkbox_IsSelectedOnChange$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "checkbox",
variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, model.variables.filteredEventTypesVar.getCurrent(callContext.iterationContext).isSelectedAttr, function (value) {
model.variables.filteredEventTypesVar.getCurrent(callContext.iterationContext).isSelectedAttr = value;
}),
_idProps: {
service: idService,
name: "Checkbox_IsSelected"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}, callContext, idService, "1")
},
_dependencies: []
})];
}, function () {
return [];
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-align-center assemble-filter-actions",
visible: true,
_idProps: {
service: idService,
name: "DIV_Action"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
isDefault: false,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/AssembleSummary_FilterDrawer/Button OnClick");
return controller.actionMenuOnClose$Action(true, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
style: "btn",
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Cancel"), React.createElement(OSWidgets.Button, {
enabled: model.getCachedValue(idService.getId("nSQBX21o002MZnDsA9mFZQ.Enabled"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_Assemble_MUIController.default.compareAssembleFilters$Action(model.variables.assembleMeetingFilterIn, model.variables.originalAssembleMeetingFilterVar, callContext).isDifferentOut;
}, OS.DataTypes.DataTypes.Boolean, callContext.id);
}, function () {
return model.variables.assembleMeetingFilterIn;
}, function () {
return model.variables.originalAssembleMeetingFilterVar;
}),
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
isDefault: false,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Assemble/AssembleSummary_FilterDrawer/Button OnClick");
return controller.applyOnClick$Action(controller.callContext(eventHandlerContext));
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
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider,
enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._assembleMeetingFilterInDataFetchStatus)
}, React.createElement(OSWidgets.Text, {
style: "font-size-s",
text: ["Apply"],
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "padding-x-base padding-bottom-base",
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables._assembleMeetingFilterInDataFetchStatus), asPrimitiveValue(model.variables.originalAssembleMeetingFilterVar), asPrimitiveValue(model.variables.assembleMeetingFilterIn), asPrimitiveValue(model.variables.filteredEventTypesVar), asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.searchKey_CurrentVar)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables._assembleMeetingFilterInDataFetchStatus), asPrimitiveValue(model.variables.originalAssembleMeetingFilterVar), asPrimitiveValue(model.variables.assembleMeetingFilterIn), asPrimitiveValue(model.variables.filteredEventTypesVar), asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.searchKey_CurrentVar)]
}), $if(model.variables.isOpenIn, false, this, function () {
return [React.createElement(NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
backNavigationPrevented$Action: function (backNavigationEventIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "NavigationHandler/PreventBackNavigation BackNavigationPrevented");
return controller.actionMenuOnClose$Action(true, controller.callContext(eventHandlerContext));
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
uuid: "21",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_Assemble_MUI.Assemble.AssembleSummary_FilterDrawer.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "Connect2_Assemble_CS.model", "UBTConnectLibrary.model", "Connect2_Assemble_MUI.languageResources", "Connect2_Assemble_MUI.Assemble.AssembleSummary_FilterDrawer.mvc$debugger", "Connect2_Assemble_MUI.Assemble.AssembleSummary_FilterDrawer.mvc$controller.OnReady.JavaScript1JS", "Connect2_Assemble_MUI.Assemble.AssembleSummary_FilterDrawer.mvc$controller.ScrollToTop.ScrollToTopJS", "Connect2_Assemble_MUI.Assemble.AssembleSummary_FilterDrawer.mvc$controller.ActionMenuOnClose.HasClickedInsideFilterDivJS", "Connect2_Assemble_CS.model$AssembleEventFilterRec", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_Assemble_CS", "Connect2_Assemble_MUI.controller$CompareAssembleFilters", "Connect2_Assemble_MUI.model$AssembleEventTypeBooleanRecordList", "UBTConnectLibrary.model$SearchInputRec", "Connect2_Assemble_MUI.referencesHealth$UBTConnectLibrary", "Connect2_Assemble_MUI.model$AssembleEventTypeBooleanRecord"], function (OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, Connect2_Assemble_CSModel, UBTConnectLibraryModel, Connect2_Assemble_MUILanguageResources, Connect2_Assemble_MUI_Assemble_AssembleSummary_FilterDrawer_mvc_Debugger, Connect2_Assemble_MUI_Assemble_AssembleSummary_FilterDrawer_mvc_controller_OnReady_JavaScript1JS, Connect2_Assemble_MUI_Assemble_AssembleSummary_FilterDrawer_mvc_controller_ScrollToTop_ScrollToTopJS, Connect2_Assemble_MUI_Assemble_AssembleSummary_FilterDrawer_mvc_controller_ActionMenuOnClose_HasClickedInsideFilterDivJS) {
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
Controller.prototype._link_ClearOnClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Link_ClearOnClick");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:Yq_oFjd3zkqUAAADxdwzAg:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.ulAeDNoZzU+9zVKT8b5pAA/ClientActions.Yq_oFjd3zkqUAAADxdwzAg:H+CEyuxgjrgpHBmEJ9EXgg", "Connect2_Assemble_MUI", "Link_ClearOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:CBQNf4rprEWvOVCTKTIqkA", callContext.id);
// Foreach AssembleMeetingFilter.AssembleEventType
callContext.iterationContext.registerIterationStart(model.variables.assembleMeetingFilterIn.assembleEventTypeAttr);
try {var assembleEventTypeIterator = callContext.iterationContext.getIterator(model.variables.assembleMeetingFilterIn.assembleEventTypeAttr);
var assembleEventTypeIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:O3kKyV0ud0G5QlUNuCbYMQ", callContext.id) && (assembleEventTypeIndex < model.variables.assembleMeetingFilterIn.assembleEventTypeAttr.length))) {
assembleEventTypeIterator.currentRowNumber = assembleEventTypeIndex;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:wyZOqt3XIk2zrx1ZhJ7PDg", callContext.id);
// AssembleMeetingFilter.AssembleEventType.Current.IsSelected = False
model.variables.assembleMeetingFilterIn.assembleEventTypeAttr.getItem(assembleEventTypeIndex.valueOf()).isSelectedAttr = false;
assembleEventTypeIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.assembleMeetingFilterIn.assembleEventTypeAttr);
}

OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:IqFt5GDxBky7l_DLpFXiIA", callContext.id);
// Execute Action: ApplySearchFilter
controller._applySearchFilter$Action(callContext);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:NJWh5MalMkSNaoh0Zu6quA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:Yq_oFjd3zkqUAAADxdwzAg", callContext.id);
}

};
Controller.prototype._applyOnClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ApplyOnClick");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.Assemble.AssembleSummary_FilterDrawer.ApplyOnClick$vars"))());
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:jztGLvq_kUWtU8ogP+HMpw:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.ulAeDNoZzU+9zVKT8b5pAA/ClientActions.jztGLvq_kUWtU8ogP+HMpw:8j0aaIwNrBMbzodGLF+u8w", "Connect2_Assemble_MUI", "ApplyOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:_DtlbPsfm0eOourkQQPs3g", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:bOXSg0eXcE+9j_LtfRUJww", callContext.id);
// SelectedAssembleMeetingFilters = AssembleMeetingFilter
vars.value.selectedAssembleMeetingFiltersVar = model.variables.assembleMeetingFilterIn;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:3ja6WVWvFkaPtQFrPH+lWA", callContext.id);
// Execute Action: ScrollToTop
controller._scrollToTop$Action(callContext);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:VWEGhb_IfE+1jhUpwId+ZQ", callContext.id);
// Trigger Event: ApplyFilters
return controller.applyFilters$Action(vars.value.selectedAssembleMeetingFiltersVar, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:xonH1LFDaU2nO1nBiLBG0g", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:jztGLvq_kUWtU8ogP+HMpw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:jztGLvq_kUWtU8ogP+HMpw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_Assemble_MUI.Assemble.AssembleSummary_FilterDrawer.ApplyOnClick$vars", [{
name: "SelectedAssembleMeetingFilters",
attrName: "selectedAssembleMeetingFiltersVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_Assemble_CSModel.AssembleEventFilterRec();
},
complexType: Connect2_Assemble_CSModel.AssembleEventFilterRec
}]);
Controller.prototype._applySearchFilter$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ApplySearchFilter");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:cyosNc5b6ESK2rUwzsnY8Q:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.ulAeDNoZzU+9zVKT8b5pAA/ClientActions.cyosNc5b6ESK2rUwzsnY8Q:u7K3XMN+xxZ_iMdHKCBGCw", "Connect2_Assemble_MUI", "ApplySearchFilter", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:lYB8Rx3tdEygXtMntD4fsg", callContext.id);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:vjBJge3YC0yq33_4V1Ju1g", callContext.id);
// Execute Action: ListClearFilteredEventTypes
OS.SystemActions.listClear(model.variables.filteredEventTypesVar, callContext);
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:o6q1DfCOcUaKWtBrzhLNvg", callContext.id) && (model.variables.searchKey_CurrentVar === ""))) {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:uE5bXmGhw0GAM4wB3qCoSg", callContext.id);
// Execute Action: ListClear_FilteredEventTypes
OS.SystemActions.listClear(model.variables.filteredEventTypesVar, callContext);
// Foreach AssembleMeetingFilter.AssembleEventType
callContext.iterationContext.registerIterationStart(model.variables.assembleMeetingFilterIn.assembleEventTypeAttr);
try {var assembleEventTypeIterator = callContext.iterationContext.getIterator(model.variables.assembleMeetingFilterIn.assembleEventTypeAttr);
var assembleEventTypeIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:euaY8n8W7EaC69xGW57kNg", callContext.id) && (assembleEventTypeIndex < model.variables.assembleMeetingFilterIn.assembleEventTypeAttr.length))) {
assembleEventTypeIterator.currentRowNumber = assembleEventTypeIndex;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:zv6k+h8u5UWMxiVNImizMA", callContext.id);
// Execute Action: ListAppendToFilteredEventTypes
OS.SystemActions.listAppend(model.variables.filteredEventTypesVar, model.variables.assembleMeetingFilterIn.assembleEventTypeAttr.getItem(assembleEventTypeIndex.valueOf()), callContext);
assembleEventTypeIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.assembleMeetingFilterIn.assembleEventTypeAttr);
}

OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:jHZiGrHZ8kS9HrkZoUKW9w", callContext.id);
} else {
// Foreach AssembleMeetingFilter.AssembleEventType
callContext.iterationContext.registerIterationStart(model.variables.assembleMeetingFilterIn.assembleEventTypeAttr);
try {var assembleEventTypeIterator = callContext.iterationContext.getIterator(model.variables.assembleMeetingFilterIn.assembleEventTypeAttr);
var assembleEventTypeIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:rIQESxlu_02x9sLo77IIZQ", callContext.id) && (assembleEventTypeIndex < model.variables.assembleMeetingFilterIn.assembleEventTypeAttr.length))) {
assembleEventTypeIterator.currentRowNumber = assembleEventTypeIndex;
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:6fFJKaaDw0OVJGV0A9e+nw", callContext.id) && ((OS.BuiltinFunctions.index(OS.BuiltinFunctions.toUpper(model.variables.assembleMeetingFilterIn.assembleEventTypeAttr.getItem(assembleEventTypeIndex.valueOf()).assembleEventTypeAttr.titleAttr), OS.BuiltinFunctions.toUpper(model.variables.searchKey_CurrentVar), 0, false, false)) !== (-1)))) {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:mVvlyIrdGE+vDM9cGv6bjg", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(model.variables.filteredEventTypesVar, model.variables.assembleMeetingFilterIn.assembleEventTypeAttr.getItem(assembleEventTypeIndex.valueOf()), callContext);
}

assembleEventTypeIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.assembleMeetingFilterIn.assembleEventTypeAttr);
}

OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:SGpoKaF66Eet1o+sJYVXKg", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:cyosNc5b6ESK2rUwzsnY8Q", callContext.id);
}

};
Controller.prototype._handler_SearchInputEventOnClear$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_SearchInputEventOnClear");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:pdLDQuthGkChPIKlpVZ9lg:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.ulAeDNoZzU+9zVKT8b5pAA/ClientActions.pdLDQuthGkChPIKlpVZ9lg:OlE6o8aJcuFOy1V74Ehwzw", "Connect2_Assemble_MUI", "Handler_SearchInputEventOnClear", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:CrE82KYAJ0+NM9zDNl0WmQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Z3ns0s4t4U6laFVkah5fMg", callContext.id);
// SearchKey_Current = ""
model.variables.searchKey_CurrentVar = "";
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:VBdp1BJETEyBEEIQIY121A", callContext.id);
// Execute Action: ApplySearchFilter
controller._applySearchFilter$Action(callContext);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:TqUcj7t+wESWxM_AbUc7lA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:pdLDQuthGkChPIKlpVZ9lg", callContext.id);
}

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
varBag.callContext = callContext;
try {OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:XEQBmLD1D06MrDhB5aaWIg:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.ulAeDNoZzU+9zVKT8b5pAA/ClientActions.XEQBmLD1D06MrDhB5aaWIg:kW3D4UU1TONM2gWgMCXcrw", "Connect2_Assemble_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:zlsTznSMt0iYHtBdD67jig", callContext.id);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:ybPqhsMgvEucgBZJBm8+qg", callContext.id);
controller.safeExecuteJSNode(Connect2_Assemble_MUI_Assemble_AssembleSummary_FilterDrawer_mvc_controller_OnReady_JavaScript1JS, "JavaScript1", "OnReady", {
FilterContainerId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Block_FilterContent"), OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:TXRnnhlgv0uH6yKtC_mBKw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:XEQBmLD1D06MrDhB5aaWIg", callContext.id);
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
try {OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:MdJqomHAcU2XdYR4Y1Fc+A:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.ulAeDNoZzU+9zVKT8b5pAA/ClientActions.MdJqomHAcU2XdYR4Y1Fc+A:bfNHBWWvGAbjMAhVI+JdYg", "Connect2_Assemble_MUI", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:zzrFzOuilUC0VWnmvxerXw", callContext.id);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:c_IhSJnt7E+hjHVDbdTzBQ", callContext.id);
// IsLoading = AssembleMeetingFilter.AssembleEventType.Empty
model.variables.isLoadingVar = model.variables.assembleMeetingFilterIn.assembleEventTypeAttr.isEmpty;
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:GSQghSSPbEiq7whmCcaYCg", callContext.id) && model.variables.isOpenIn)) {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:cQnarBMFfkSuAnphpsp67Q", callContext.id);
// OriginalAssembleMeetingFilter.AssembleFilterTimeOptionId = AssembleMeetingFilter.AssembleFilterTimeOptionId
model.variables.originalAssembleMeetingFilterVar.assembleFilterTimeOptionIdAttr = model.variables.assembleMeetingFilterIn.assembleFilterTimeOptionIdAttr;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:cQnarBMFfkSuAnphpsp67Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// SearchKey_Current = ""
model.variables.searchKey_CurrentVar = "";
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:bBgUBbHBWEmQ_RWWkI7hUA", callContext.id);
// Execute Action: ListClearOriginalAssembleEventType
OS.SystemActions.listClear(model.variables.originalAssembleMeetingFilterVar.assembleEventTypeAttr, callContext);
// Foreach AssembleMeetingFilter.AssembleEventType
callContext.iterationContext.registerIterationStart(model.variables.assembleMeetingFilterIn.assembleEventTypeAttr);
try {var assembleEventTypeIterator = callContext.iterationContext.getIterator(model.variables.assembleMeetingFilterIn.assembleEventTypeAttr);
var assembleEventTypeIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:pE5cx2+WHU6j1sIczF74sg", callContext.id) && (assembleEventTypeIndex < model.variables.assembleMeetingFilterIn.assembleEventTypeAttr.length))) {
assembleEventTypeIterator.currentRowNumber = assembleEventTypeIndex;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:H0nrsd2fq0yqnq8x0OXJPw", callContext.id);
// Execute Action: ListAppendToOriginalAssembleEventType
OS.SystemActions.listAppend(model.variables.originalAssembleMeetingFilterVar.assembleEventTypeAttr, model.variables.assembleMeetingFilterIn.assembleEventTypeAttr.getItem(assembleEventTypeIndex.valueOf()), callContext);
assembleEventTypeIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.assembleMeetingFilterIn.assembleEventTypeAttr);
}

OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:bi4eJgo6IEOtjuVUQ+1mCw", callContext.id);
// Execute Action: ListClear_FilteredEventTypes
OS.SystemActions.listClear(model.variables.filteredEventTypesVar, callContext);
// Foreach AssembleMeetingFilter.AssembleEventType
callContext.iterationContext.registerIterationStart(model.variables.assembleMeetingFilterIn.assembleEventTypeAttr);
try {var assembleEventTypeIterator = callContext.iterationContext.getIterator(model.variables.assembleMeetingFilterIn.assembleEventTypeAttr);
var assembleEventTypeIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:3kloI4ThpE2R4HgsXDhxVQ", callContext.id) && (assembleEventTypeIndex < model.variables.assembleMeetingFilterIn.assembleEventTypeAttr.length))) {
assembleEventTypeIterator.currentRowNumber = assembleEventTypeIndex;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:FXgZLfnK10q1I6z2neXS4w", callContext.id);
// Execute Action: ListAppendToFilteredEventTypes
OS.SystemActions.listAppend(model.variables.filteredEventTypesVar, model.variables.assembleMeetingFilterIn.assembleEventTypeAttr.getItem(assembleEventTypeIndex.valueOf()), callContext);
assembleEventTypeIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.assembleMeetingFilterIn.assembleEventTypeAttr);
}

OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:6JfPPlJ6yEKedl0BGao7nQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:6JfPPlJ6yEKedl0BGao7nQ", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:MdJqomHAcU2XdYR4Y1Fc+A", callContext.id);
}

};
Controller.prototype._checkbox_IsSelectedOnChange$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Checkbox_IsSelectedOnChange");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:kAicqZj4fkmCxNdzSnUeQg:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.ulAeDNoZzU+9zVKT8b5pAA/ClientActions.kAicqZj4fkmCxNdzSnUeQg:jnN+sl5y2fZSn8Ug7gK9dA", "Connect2_Assemble_MUI", "Checkbox_IsSelectedOnChange", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:VJ4cGVXSSEWqtuTsK2FiyQ", callContext.id);
// Foreach AssembleMeetingFilter.AssembleEventType
callContext.iterationContext.registerIterationStart(model.variables.assembleMeetingFilterIn.assembleEventTypeAttr);
try {var assembleEventTypeIterator = callContext.iterationContext.getIterator(model.variables.assembleMeetingFilterIn.assembleEventTypeAttr);
var assembleEventTypeIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:kM+E0pD5cUuXfa4+fEZHJw", callContext.id) && (assembleEventTypeIndex < model.variables.assembleMeetingFilterIn.assembleEventTypeAttr.length))) {
assembleEventTypeIterator.currentRowNumber = assembleEventTypeIndex;
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:ELzQQA1iXkCVTsgmB_GTzw", callContext.id) && (model.variables.assembleMeetingFilterIn.assembleEventTypeAttr.getItem(assembleEventTypeIndex.valueOf()).assembleEventTypeAttr.idAttr === model.variables.filteredEventTypesVar.getCurrent(callContext.iterationContext).assembleEventTypeAttr.idAttr))) {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:43PjCRAOjEGosbJxYHqq+A", callContext.id);
// AssembleMeetingFilter.AssembleEventType.Current.IsSelected = FilteredEventTypes.Current.IsSelected
model.variables.assembleMeetingFilterIn.assembleEventTypeAttr.getItem(assembleEventTypeIndex.valueOf()).isSelectedAttr = model.variables.filteredEventTypesVar.getCurrent(callContext.iterationContext).isSelectedAttr;
}

assembleEventTypeIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.assembleMeetingFilterIn.assembleEventTypeAttr);
}

OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:hhFkqAe+vEyCrxD+9o8WNA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:kAicqZj4fkmCxNdzSnUeQg", callContext.id);
}

};
Controller.prototype._search_InputEvent_OnChange$Action = function (event_CurrentStringIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Search_InputEvent_OnChange");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.Assemble.AssembleSummary_FilterDrawer.Search_InputEvent_OnChange$vars"))());
vars.value.event_CurrentStringInLocal = event_CurrentStringIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:66gR3nWs70WCNeanXMU+NQ:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.ulAeDNoZzU+9zVKT8b5pAA/ClientActions.66gR3nWs70WCNeanXMU+NQ:1DhA32efCObpahIusYWuBQ", "Connect2_Assemble_MUI", "Search_InputEvent_OnChange", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:MJue_2CDLEeBLSIWj5PD+A", callContext.id);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:F1VxevM0Ak6iMtNtIaedDQ", callContext.id);
// SearchKey_Current = Event_CurrentString
model.variables.searchKey_CurrentVar = vars.value.event_CurrentStringInLocal;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:kM3BmhEX6UuOt+qFRoChZA", callContext.id);
// Execute Action: ApplySearchFilter
controller._applySearchFilter$Action(callContext);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Dfew_juuhEmcMaghovqXsA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:66gR3nWs70WCNeanXMU+NQ", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_Assemble_MUI.Assemble.AssembleSummary_FilterDrawer.Search_InputEvent_OnChange$vars", [{
name: "Event_CurrentString",
attrName: "event_CurrentStringInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._scrollToTop$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ScrollToTop");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:8z+561iYTUy1ByoZY931dA:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.ulAeDNoZzU+9zVKT8b5pAA/ClientActions.8z+561iYTUy1ByoZY931dA:Cu_SD4pFZYwoqJddgn93cQ", "Connect2_Assemble_MUI", "ScrollToTop", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:5opaJgtnPkaBaQPygUPelg", callContext.id);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:H7nnO6d81UyDMsK7cOQl1g", callContext.id);
controller.safeExecuteJSNode(Connect2_Assemble_MUI_Assemble_AssembleSummary_FilterDrawer_mvc_controller_ScrollToTop_ScrollToTopJS, "ScrollToTop", "ScrollToTop", {
ParentElId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Block_ActionMenu"), OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:UUALdGFJ50WajR+15947gw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:8z+561iYTUy1ByoZY931dA", callContext.id);
}

};
Controller.prototype._actionMenuOnClose$Action = function (isCloseActionIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ActionMenuOnClose");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.Assemble.AssembleSummary_FilterDrawer.ActionMenuOnClose$vars"))());
vars.value.isCloseActionInLocal = isCloseActionIn;
var hasClickedInsideFilterDivJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.hasClickedInsideFilterDivJSResult = hasClickedInsideFilterDivJSResult;
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:IMm88M+gRE2kssxOWs4bXQ:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.ulAeDNoZzU+9zVKT8b5pAA/ClientActions.IMm88M+gRE2kssxOWs4bXQ:30Fr4wpzbkosu+qrWUTyVA", "Connect2_Assemble_MUI", "ActionMenuOnClose", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:9ENT2ImtI0OB1o8miq_J3A", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:5ln1fCheoEq7tt0pqCcJHg", callContext.id) && !(vars.value.isCloseActionInLocal))) {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:n82xvn7ksE2NV1cP09HweQ", callContext.id);
hasClickedInsideFilterDivJSResult.value = controller.safeExecuteJSNode(Connect2_Assemble_MUI_Assemble_AssembleSummary_FilterDrawer_mvc_controller_ActionMenuOnClose_HasClickedInsideFilterDivJS, "HasClickedInsideFilterDiv", "ActionMenuOnClose", {
FilterContainerId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Block_FilterContent"), OS.DataTypes.DataTypes.Text),
HasClickedInside: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_Assemble_MUI.Assemble.AssembleSummary_FilterDrawer.ActionMenuOnClose$hasClickedInsideFilterDivJSResult"))();
jsNodeResult.hasClickedInsideOut = OS.DataConversion.JSNodeParamConverter.from($parameters.HasClickedInside, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
// Check if HasClickedInsideFilterDiv HasClickedInside
if((OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:Kqiv7AQzsUufos6XaFB7Dg", callContext.id) && (hasClickedInsideFilterDivJSResult.value.hasClickedInsideOut === true))) {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:yC3CjlVeMEy243QjAdw0cA", callContext.id);
return OS.Flow.returnAsync();

}

}

OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:o_xnFm2WPU27g9Imlhh9sQ", callContext.id);
// IsOpen = False
model.variables.isOpenIn = false;
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:6Sk5gjMMLEap1PwOeyrHwQ", callContext.id);
// Execute Action: ScrollToTop
controller._scrollToTop$Action(callContext);
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:gYCwXzxGE0yib19Fr8MlnQ", callContext.id);
// Trigger Event: Close
return controller.close$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("4YvUCWT53U+6BrZWsVWc3Q:pt3uVyIt40Sg+fNJ8yLTPw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:IMm88M+gRE2kssxOWs4bXQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:IMm88M+gRE2kssxOWs4bXQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_Assemble_MUI.Assemble.AssembleSummary_FilterDrawer.ActionMenuOnClose$vars", [{
name: "IsCloseAction",
attrName: "isCloseActionInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.registerVariableGroupType("Connect2_Assemble_MUI.Assemble.AssembleSummary_FilterDrawer.ActionMenuOnClose$hasClickedInsideFilterDivJSResult", [{
name: "HasClickedInside",
attrName: "hasClickedInsideOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);

Controller.prototype.link_ClearOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._link_ClearOnClick$Action, callContext);

};
Controller.prototype.applyOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._applyOnClick$Action, callContext);

};
Controller.prototype.applySearchFilter$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._applySearchFilter$Action, callContext);

};
Controller.prototype.handler_SearchInputEventOnClear$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_SearchInputEventOnClear$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.checkbox_IsSelectedOnChange$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._checkbox_IsSelectedOnChange$Action, callContext);

};
Controller.prototype.search_InputEvent_OnChange$Action = function (event_CurrentStringIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._search_InputEvent_OnChange$Action, callContext, event_CurrentStringIn);

};
Controller.prototype.scrollToTop$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._scrollToTop$Action, callContext);

};
Controller.prototype.actionMenuOnClose$Action = function (isCloseActionIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._actionMenuOnClose$Action, callContext, isCloseActionIn);

};
Controller.prototype.close$Action = function () {
return Promise.resolve();
};
Controller.prototype.applyFilters$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:n+VQoM4mfUCcC1ucCtOSYA:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA:9jQU9CfZCZWwIcnaUbLRAg", "Connect2_Assemble_MUI", "Assemble", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("4YvUCWT53U+6BrZWsVWc3Q:ulAeDNoZzU+9zVKT8b5pAA:/NRWebFlows.n+VQoM4mfUCcC1ucCtOSYA/NodesShownInESpaceTree.ulAeDNoZzU+9zVKT8b5pAA:r0x2TDHUMLQ70g5tYj5DgQ", "Connect2_Assemble_MUI", "AssembleSummary_FilterDrawer", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:ulAeDNoZzU+9zVKT8b5pAA", callContext.id);
OutSystemsDebugger.pop("4YvUCWT53U+6BrZWsVWc3Q:n+VQoM4mfUCcC1ucCtOSYA", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Assemble/AssembleSummary_FilterDrawer On Ready");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Assemble/AssembleSummary_FilterDrawer On Parameters Changed");
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
return Connect2_Assemble_MUIController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, Connect2_Assemble_MUILanguageResources);
});
define("Connect2_Assemble_MUI.Assemble.AssembleSummary_FilterDrawer.mvc$controller.OnReady.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
document.addEventListener('mousedown', function(event) {
    window.__filterDrawerClickWasInside = !!event.target.closest('#' + $parameters.FilterContainerId);
}, true);
};
});
define("Connect2_Assemble_MUI.Assemble.AssembleSummary_FilterDrawer.mvc$controller.ScrollToTop.ScrollToTopJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
let parentEl = document.getElementById($parameters.ParentElId);
if (parentEl) {
    parentEl.querySelector(".action-menu").scrollTop = 0;
}

};
});
define("Connect2_Assemble_MUI.Assemble.AssembleSummary_FilterDrawer.mvc$controller.ActionMenuOnClose.HasClickedInsideFilterDivJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.HasClickedInside = window.__filterDrawerClickWasInside === true;
};
});

define("Connect2_Assemble_MUI.Assemble.AssembleSummary_FilterDrawer.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"qdVoAi5GME2xPtC+mnsxlg": {
getter: function (varBag, idService) {
return varBag.vars.value.selectedAssembleMeetingFiltersVar;
}
},
"ybPqhsMgvEucgBZJBm8+qg": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"yu4nCPhUl060UfgeSTPBUw": {
getter: function (varBag, idService) {
return varBag.vars.value.event_CurrentStringInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"H7nnO6d81UyDMsK7cOQl1g": {
getter: function (varBag, idService) {
return varBag.scrollToTopJSResult.value;
}
},
"XnjNXKcyC0iPpBlFSH0iuQ": {
getter: function (varBag, idService) {
return varBag.vars.value.isCloseActionInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"n82xvn7ksE2NV1cP09HweQ": {
getter: function (varBag, idService) {
return varBag.hasClickedInsideFilterDivJSResult.value;
}
},
"EbKhTwMovE25xD2Ej+MR2A": {
getter: function (varBag, idService) {
return varBag.model.variables.originalAssembleMeetingFilterVar;
}
},
"JakU2sRXxUeAsqUFaFY+eA": {
getter: function (varBag, idService) {
return varBag.model.variables.isLoadingVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"KFPkvSvrXECU6MohgnEPLw": {
getter: function (varBag, idService) {
return varBag.model.variables.filteredEventTypesVar;
}
},
"4+iDP9J2c0uHt4No5paOTQ": {
getter: function (varBag, idService) {
return varBag.model.variables.searchKey_CurrentVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"cUpT7Ml+i0KLsm+IQXeMvw": {
getter: function (varBag, idService) {
return varBag.model.variables.isOpenIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"6jQ34O3yTkODymKyQMGJ6g": {
getter: function (varBag, idService) {
return varBag.model.variables.assembleMeetingFilterIn;
}
},
"sPt2lR+G0ES0AFwjwGjMRQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Block_ActionMenu"));
})(varBag.model, idService);
}
},
"3ebM_k27dkOeUAuJMxlmIQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MenuEntries"));
})(varBag.model, idService);
}
},
"sssdoaRxskGMMZnlgQuUTA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Block_FilterContent"));
})(varBag.model, idService);
}
},
"_XO5BUbZAkKOIIHc4+jCzA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"I7HhBFTFPkmbC7cofYxXKg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DIV_Header"));
})(varBag.model, idService);
}
},
"T7c3Wdg_rku7qIy73yOVTw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DIV_Search"));
})(varBag.model, idService);
}
},
"o0VEe9Bo+06E6tzVcRWzAA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DIV_MeetingType__Header"));
})(varBag.model, idService);
}
},
"glUGlkN3dEukK+cYeJoLGg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DIV_Filters"));
})(varBag.model, idService);
}
},
"MiC67gRQgkK0Ui_nETKbBQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DIV_MeetingType"));
})(varBag.model, idService);
}
},
"mART96f6gEuUpQNXF9ySTg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DIV_MeetingType__FilterList"));
})(varBag.model, idService);
}
},
"34kiJFGFUkeTuN8h3qhD8w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Checkbox_IsSelected"));
})(varBag.model, idService);
}
},
"Ek2pvYcQkE60xu2n4mUBgw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DIV_Action"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
