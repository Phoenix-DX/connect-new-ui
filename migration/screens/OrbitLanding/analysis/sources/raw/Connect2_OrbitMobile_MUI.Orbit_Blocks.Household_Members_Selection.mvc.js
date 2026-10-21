define("Connect2_OrbitMobile_MUI.Orbit_Blocks.Household_Members_Selection.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.model$GetHouseholdMembersResponse_ScreenList"], function (OutSystems, Connect2_OrbitMobile_MUIModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsItemFound", "isItemFoundVar", "IsItemFound", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("InitialPosition", "initialPositionVar", "InitialPosition", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("In_HouseholdMembersList", "in_HouseholdMembersListIn", "In_HouseholdMembersList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.GetHouseholdMembersResponse_ScreenList());
}, false, Connect2_OrbitMobile_MUIModel.GetHouseholdMembersResponse_ScreenList), 
this.attr("_in_HouseholdMembersListInDataFetchStatus", "_in_HouseholdMembersListInDataFetchStatus", "_in_HouseholdMembersListInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("In_HouseholdMembersList" in inputs) {
this.variables.in_HouseholdMembersListIn = inputs.In_HouseholdMembersList;
if("_in_HouseholdMembersListInDataFetchStatus" in inputs) {
this.variables._in_HouseholdMembersListInDataFetchStatus = inputs._in_HouseholdMembersListInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Orbit_Blocks.Household_Members_Selection");
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.Household_Members_Selection.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Household_Members_Selection.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Household_Members_Selection.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_OrbitMobile_MUI.model$GetHouseholdMembersResponse_ScreenList"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Blocks_Household_Members_Selection_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Blocks_Household_Members_Selection_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets) {
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
        View.displayName = "Orbit_Blocks.Household_Members_Selection";
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
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_Household_Members_Selection_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_Household_Members_Selection_mvc_controller;
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
gridProperties: {
classes: "OSInline"
},
style: "orbit-household-member-list-cont",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.in_HouseholdMembersListIn,
style: "list list-group orbit-household-member-list",
tag: "div",
_idProps: {
service: idService,
name: "List_HouseholdMembers"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HouseholdMembersListInDataFetchStatus),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/Household_Members_Selection/Container onclick");
return controller.onClick_HouseholdMember$Action(model.variables.in_HouseholdMembersListIn.getCurrentRowNumber(callContext.iterationContext), model.variables.in_HouseholdMembersListIn.getCurrent(callContext.iterationContext).memberIdAttr, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
style: "orbit-household-member-list-item",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables._in_HouseholdMembersListInDataFetchStatus), asPrimitiveValue(model.variables.in_HouseholdMembersListIn.getCurrent(callContext.iterationContext).isSelectedAttr), asPrimitiveValue(model.variables.in_HouseholdMembersListIn.getCurrent(callContext.iterationContext).firstNameAttr)]
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
style: model.getCachedValue(idService.getId("cfmW4uA2tEe0tW7ftIKPuw.style"), function () {
return ((model.variables.in_HouseholdMembersListIn.getCurrent(callContext.iterationContext).isSelectedAttr) ? ("opacity: 1; border-bottom: 2px solid var(--color-neutral-0);") : (""));
}, function () {
return model.variables.in_HouseholdMembersListIn.getCurrent(callContext.iterationContext).isSelectedAttr;
})
},
style: "orbit-household-member-list-item-text",
value: model.variables.in_HouseholdMembersListIn.getCurrent(callContext.iterationContext).firstNameAttr,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HouseholdMembersListInDataFetchStatus)
}))];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables._in_HouseholdMembersListInDataFetchStatus)]
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.Household_Members_Selection.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Household_Members_Selection.mvc$debugger", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Household_Members_Selection.mvc$controller.ScrollToSelectMember.ScrollToNewPositionJS", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Household_Members_Selection.mvc$controller.SetIsItemFound.IsItemAvailableJS", "Connect2_OrbitMobile_MUI.model$GetHouseholdMembersResponse_ScreenList"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_Blocks_Household_Members_Selection_mvc_Debugger, Connect2_OrbitMobile_MUI_Orbit_Blocks_Household_Members_Selection_mvc_controller_ScrollToSelectMember_ScrollToNewPositionJS, Connect2_OrbitMobile_MUI_Orbit_Blocks_Household_Members_Selection_mvc_controller_SetIsItemFound_IsItemAvailableJS) {
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
Controller.prototype._onClick_HouseholdMember$Action = function (currentRowNumberIn, memberIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_HouseholdMember");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.Household_Members_Selection.OnClick_HouseholdMember$vars"))());
vars.value.currentRowNumberInLocal = currentRowNumberIn;
vars.value.memberIdInLocal = memberIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:dOj_EITuPkivJsidE7AaXQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.voAZFwCvd0iTfFnWNlkMaA/ClientActions.dOj_EITuPkivJsidE7AaXQ:Q7q3OJURLT6WSMhpzMaDMg", "Connect2_OrbitMobile_MUI", "OnClick_HouseholdMember", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GCMPDLqJ0US46VOJZMugWA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Foreach In_HouseholdMembersList
callContext.iterationContext.registerIterationStart(model.variables.in_HouseholdMembersListIn);
try {var in_HouseholdMembersListIterator = callContext.iterationContext.getIterator(model.variables.in_HouseholdMembersListIn);
var in_HouseholdMembersListIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:idpmSPHLAEGiUzdXQniUlQ", callContext.id) && (in_HouseholdMembersListIndex < model.variables.in_HouseholdMembersListIn.length))) {
in_HouseholdMembersListIterator.currentRowNumber = in_HouseholdMembersListIndex;
// Is Selected?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CtrHIv6y9kaBzUU5zdR5xw", callContext.id) && model.variables.in_HouseholdMembersListIn.getItem(in_HouseholdMembersListIndex.valueOf()).isSelectedAttr)) {
// Unselect member
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LG+nw1dFcUGNNf4+FvI7hg", callContext.id);
// In_HouseholdMembersList.Current.IsSelected = False
model.variables.in_HouseholdMembersListIn.getItem(in_HouseholdMembersListIndex.valueOf()).isSelectedAttr = false;
}

in_HouseholdMembersListIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.in_HouseholdMembersListIn);
}

// Set new IsSelected
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ltjsMKJlM02CkDDcGVhrAg", callContext.id);
// In_HouseholdMembersList[CurrentRowNumber].IsSelected = True
model.variables.in_HouseholdMembersListIn.getItem(vars.value.currentRowNumberInLocal).isSelectedAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vkS5Xk1OIUuCFgt8ghTmZA", callContext.id);
// Execute Action: ScrollToSelectMember
controller._scrollToSelectMember$Action(idService.getId("List_HouseholdMembers"), vars.value.currentRowNumberInLocal, "smooth", callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SbS9Yf7uiUOx2Mca53fwsg", callContext.id);
// Trigger Event: ClickedHouseholdMember
return controller.clickedHouseholdMember$Action(model.variables.in_HouseholdMembersListIn, vars.value.memberIdInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nQ2E0r8q2EyPfaxUvIdFLQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:dOj_EITuPkivJsidE7AaXQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:dOj_EITuPkivJsidE7AaXQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.Household_Members_Selection.OnClick_HouseholdMember$vars", [{
name: "CurrentRowNumber",
attrName: "currentRowNumberInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "MemberId",
attrName: "memberIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
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
var listIndexOfVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.listIndexOfVar = listIndexOfVar;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:dJuTHFRoJEyYb597udEeQg:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.voAZFwCvd0iTfFnWNlkMaA/ClientActions.dJuTHFRoJEyYb597udEeQg:MAaXA2vn1_n3+wNzimZ6iw", "Connect2_OrbitMobile_MUI", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DyJaC0CDpk+pAa4mvRaXXg", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ArKs2KbtO0mmGte3AxZQ_w", callContext.id);
// IsItemFound = False
model.variables.isItemFoundVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9MeMVP44JEOw7LyWHF0avQ", callContext.id);
// Execute Action: ListIndexOf
listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.in_HouseholdMembersListIn, function (p) {
return p.isSelectedAttr;
}, callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:OkPubki_KEuav+E0hh8uUA", callContext.id);
// InitialPosition = ListIndexOf.Position
model.variables.initialPositionVar = listIndexOfVar.value.positionOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SFZn1Ckhz0+Vu+JM7v7sPQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:dJuTHFRoJEyYb597udEeQg", callContext.id);
}

};
Controller.prototype._onRender$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnRender");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:AEphYNlHp0KOSwSExWMc5A:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.voAZFwCvd0iTfFnWNlkMaA/ClientActions.AEphYNlHp0KOSwSExWMc5A:mTsKMDmjsW_0WHp9G5WR9Q", "Connect2_OrbitMobile_MUI", "OnRender", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PgrtVDwtY0uwaK02TS669A", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BDO4tS8be0C8b4FLB203ww", callContext.id) && model.variables.isItemFoundVar)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:p8MhpsfmdkGDM8YaHrnwDw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4yxkVIm_OU6v4lg4L1aB6Q", callContext.id);
// Execute Action: SetIsItemFound
controller._setIsItemFound$Action(model.variables.initialPositionVar, callContext);
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lizZXyFwGkqsAO78gaD9Kw", callContext.id) && model.variables.isItemFoundVar)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:o1k2FNbPTUK2ECr5CvLwYQ", callContext.id);
// Execute Action: ScrollToSelectMember
controller._scrollToSelectMember$Action(idService.getId("List_HouseholdMembers"), model.variables.initialPositionVar, "instant", callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:p8MhpsfmdkGDM8YaHrnwDw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:p8MhpsfmdkGDM8YaHrnwDw", callContext.id);
}

}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:AEphYNlHp0KOSwSExWMc5A", callContext.id);
}

};
Controller.prototype._scrollToSelectMember$Action = function (listIdIn, currentRowNumberIn, scrollBehaviorIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ScrollToSelectMember");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.Household_Members_Selection.ScrollToSelectMember$vars"))());
vars.value.listIdInLocal = listIdIn;
vars.value.currentRowNumberInLocal = currentRowNumberIn;
vars.value.scrollBehaviorInLocal = scrollBehaviorIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:rtj6r4dK_0Wr33dqZshhiQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.voAZFwCvd0iTfFnWNlkMaA/ClientActions.rtj6r4dK_0Wr33dqZshhiQ:U1EkwXmHSJXNXa4b1wln7A", "Connect2_OrbitMobile_MUI", "ScrollToSelectMember", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:iAJVL8E25ECKdrvfkpeXyw", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rndoJgsDyUG6jf6I7Yeaog", callContext.id);
controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_Blocks_Household_Members_Selection_mvc_controller_ScrollToSelectMember_ScrollToNewPositionJS, "ScrollToNewPosition", "ScrollToSelectMember", {
In_IntendedPosition: OS.DataConversion.JSNodeParamConverter.to(vars.value.currentRowNumberInLocal, OS.DataTypes.DataTypes.Integer),
In_ListId: OS.DataConversion.JSNodeParamConverter.to(vars.value.listIdInLocal, OS.DataTypes.DataTypes.Text),
In_ScrollBehavior: OS.DataConversion.JSNodeParamConverter.to(vars.value.scrollBehaviorInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IYXvg0ZNlk6xKYU41t6IUA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:rtj6r4dK_0Wr33dqZshhiQ", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.Household_Members_Selection.ScrollToSelectMember$vars", [{
name: "ListId",
attrName: "listIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "CurrentRowNumber",
attrName: "currentRowNumberInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "ScrollBehavior",
attrName: "scrollBehaviorInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "smooth";
}
}]);
Controller.prototype._setIsItemFound$Action = function (targetPositionIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("SetIsItemFound");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.Household_Members_Selection.SetIsItemFound$vars"))());
vars.value.targetPositionInLocal = targetPositionIn;
var isItemAvailableJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.isItemAvailableJSResult = isItemAvailableJSResult;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:smOav8i_G0Oeo9uv6ZML4g:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.voAZFwCvd0iTfFnWNlkMaA/ClientActions.smOav8i_G0Oeo9uv6ZML4g:Ui72oKbYlBxkS3FBI7nqlA", "Connect2_OrbitMobile_MUI", "SetIsItemFound", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bNjTO7xD30WHbFMkkyJL3w", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Qtagwr1JIkmNXhBdSHET8Q", callContext.id);
isItemAvailableJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_Blocks_Household_Members_Selection_mvc_controller_SetIsItemFound_IsItemAvailableJS, "IsItemAvailable", "SetIsItemFound", {
In_Position: OS.DataConversion.JSNodeParamConverter.to(vars.value.targetPositionInLocal, OS.DataTypes.DataTypes.Integer),
In_ListItemClass: OS.DataConversion.JSNodeParamConverter.to(".orbit-household-member-list-item", OS.DataTypes.DataTypes.Text),
ItemFound: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.Household_Members_Selection.SetIsItemFound$isItemAvailableJSResult"))();
jsNodeResult.itemFoundOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ItemFound, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:e8n9lUvAXUOGefeHCxFvdA", callContext.id);
// IsItemFound = IsItemAvailable.ItemFound
model.variables.isItemFoundVar = isItemAvailableJSResult.value.itemFoundOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jlZZplBXp0+6BJmnMSFhsg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:smOav8i_G0Oeo9uv6ZML4g", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.Household_Members_Selection.SetIsItemFound$vars", [{
name: "TargetPosition",
attrName: "targetPositionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.Household_Members_Selection.SetIsItemFound$isItemAvailableJSResult", [{
name: "ItemFound",
attrName: "itemFoundOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);

Controller.prototype.onClick_HouseholdMember$Action = function (currentRowNumberIn, memberIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_HouseholdMember$Action, callContext, currentRowNumberIn, memberIdIn);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.onRender$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onRender$Action, callContext);

};
Controller.prototype.scrollToSelectMember$Action = function (listIdIn, currentRowNumberIn, scrollBehaviorIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._scrollToSelectMember$Action, callContext, listIdIn, currentRowNumberIn, scrollBehaviorIn);

};
Controller.prototype.setIsItemFound$Action = function (targetPositionIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._setIsItemFound$Action, callContext, targetPositionIn);

};
Controller.prototype.clickedHouseholdMember$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ:tepBwzTPFZZUt4uwi04GJA", "Connect2_OrbitMobile_MUI", "Orbit_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:voAZFwCvd0iTfFnWNlkMaA:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.voAZFwCvd0iTfFnWNlkMaA:b+0ThTCM5nJxes3AqNVETQ", "Connect2_OrbitMobile_MUI", "Household_Members_Selection", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:voAZFwCvd0iTfFnWNlkMaA", callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_Blocks/Household_Members_Selection On Initialize");
return controller.onInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_Blocks/Household_Members_Selection On Render");
return controller.onRender$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
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
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.Household_Members_Selection.mvc$controller.ScrollToSelectMember.ScrollToNewPositionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
function scrollToMember(){

    var membersList = document.getElementById($parameters.In_ListId);
    var halfScreen = document.querySelector(".header-content").offsetWidth / 3;

    if(membersList && halfScreen){
        membersList.scroll({
            top:0,
            left: $parameters.In_IntendedPosition * halfScreen,
            behavior: $parameters.In_ScrollBehavior
        });
    }
}

scrollToMember();
};
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.Household_Members_Selection.mvc$controller.SetIsItemFound.IsItemAvailableJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
try {    
    var csL = window.getComputedStyle(document.querySelectorAll($parameters.In_ListItemClass)[$parameters.In_Position]);
    $parameters.ItemFound = true;

} catch (error) {
    $parameters.ItemFound = false;
}
};
});

define("Connect2_OrbitMobile_MUI.Orbit_Blocks.Household_Members_Selection.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"sY_qAmOQ6kWNml_NZQPdRw": {
getter: function (varBag, idService) {
return varBag.vars.value.currentRowNumberInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"ufU0ZGEZH0ynmrmzHfCCPw": {
getter: function (varBag, idService) {
return varBag.vars.value.memberIdInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"9MeMVP44JEOw7LyWHF0avQ": {
getter: function (varBag, idService) {
return varBag.listIndexOfVar.value;
}
},
"DbtJ7BOGQU+xzsvZDnWSMA": {
getter: function (varBag, idService) {
return varBag.vars.value.listIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"KkoU1pv9wEOual5F5ZrdeA": {
getter: function (varBag, idService) {
return varBag.vars.value.currentRowNumberInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"9664EKCV8kio28gsGG73XA": {
getter: function (varBag, idService) {
return varBag.vars.value.scrollBehaviorInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"rndoJgsDyUG6jf6I7Yeaog": {
getter: function (varBag, idService) {
return varBag.scrollToNewPositionJSResult.value;
}
},
"lFEwqbPS70eLiSHzyI_LwA": {
getter: function (varBag, idService) {
return varBag.vars.value.targetPositionInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"Qtagwr1JIkmNXhBdSHET8Q": {
getter: function (varBag, idService) {
return varBag.isItemAvailableJSResult.value;
}
},
"hs7m+93pZkigdKFIGVIKuA": {
getter: function (varBag, idService) {
return varBag.model.variables.isItemFoundVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"WTqecbZ+7E+lK_4qOeKYZw": {
getter: function (varBag, idService) {
return varBag.model.variables.initialPositionVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"E_jMuuOYN0W8ahqGt4x13A": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HouseholdMembersListIn;
}
},
"3M0oajNlXE2EA7iQbMq6gg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("List_HouseholdMembers"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
