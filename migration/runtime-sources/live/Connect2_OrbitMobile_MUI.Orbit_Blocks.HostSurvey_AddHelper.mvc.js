define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "Connect2_OrbitMobile_MUI.controller$CreateValidationMessage", "Connect2_OrbitMobile_MUI.model$HostSurvey_AddHelperRec", "Connect2_OrbitMobile_IS.model$HostSurvey_HelperMemberRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$HostSurvey_HelperMemberList", "Connect2_OrbitMobile_MUI.model$LocalHelperRoleList", "Connect2_OrbitMobile_MUI.model$LocalHelperStatusList", "Connect2_OrbitMobile_IS.model$MemberInformationRec", "Connect2_OrbitMobile_IS.model$MemberAccommodationRec", "Connect2_OrbitMobile_IS.model$HostSurvey_HelperItemInfoRec", "Connect2_OrbitMobile_MUI.model$HostSurvey_HelperItemInfoList", "OutSystemsUI_2_23.model$ErrorMessageRec", "Connect2_OrbitMobile_MUI.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetClose", "Connect2_OrbitMobile_MUI.controller$BlurInput", "OutSystemsUI_2_23.controller$BottomSheetOpen", "Connect2_OrbitMobile_IS.model$GetSurveyHelpersResponseRec"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller) {
var OS = OutSystems.Internal;

var GetSurveyHelpersDataActRec = (function (_super) {
__extends(GetSurveyHelpersDataActRec, _super);
function GetSurveyHelpersDataActRec(defaults) {
_super.apply(this, arguments);
}
GetSurveyHelpersDataActRec.attributesToDeclare = function () {
return [
this.attr("Response", "responseOut", "Response", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.GetSurveyHelpersResponseRec());
}, true, Connect2_OrbitMobile_ISModel.GetSurveyHelpersResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
GetSurveyHelpersDataActRec.fromStructure = function (str) {
return new GetSurveyHelpersDataActRec(new GetSurveyHelpersDataActRec.RecordClass({
responseOut: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetSurveyHelpersDataActRec.init();
return GetSurveyHelpersDataActRec;
})(OS.Model.DataSourceRecord);

var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Helpers", "helpersVar", "Helpers", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.HostSurvey_AddHelperRec());
}, false, Connect2_OrbitMobile_MUIModel.HostSurvey_AddHelperRec), 
this.attr("SearchTerm", "searchTermVar", "SearchTerm", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("SurveyHelpersData", "surveyHelpersDataVar", "SurveyHelpersData", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.HostSurvey_HelperMemberList());
}, false, Connect2_OrbitMobile_MUIModel.HostSurvey_HelperMemberList), 
this.attr("IsFetchingData", "isFetchingDataVar", "IsFetchingData", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsNotValidInput", "isNotValidInputVar", "IsNotValidInput", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("LastSearchedTerm", "lastSearchedTermVar", "LastSearchedTerm", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("IsTyping", "isTypingVar", "IsTyping", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("MaxHelpers", "maxHelpersVar", "MaxHelpers", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 10;
}, false), 
this.attr("PageNumber", "pageNumberVar", "PageNumber", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 1;
}, false), 
this.attr("IsNewSearch", "isNewSearchVar", "IsNewSearch", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("In_TrySave", "in_TrySaveIn", "In_TrySave", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_TrySaveInDataFetchStatus", "_in_TrySaveInDataFetchStatus", "_in_TrySaveInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_HelperRoles", "in_HelperRolesIn", "In_HelperRoles", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.LocalHelperRoleList());
}, false, Connect2_OrbitMobile_MUIModel.LocalHelperRoleList), 
this.attr("_in_HelperRolesInDataFetchStatus", "_in_HelperRolesInDataFetchStatus", "_in_HelperRolesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_HelperStatus", "in_HelperStatusIn", "In_HelperStatus", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.LocalHelperStatusList());
}, false, Connect2_OrbitMobile_MUIModel.LocalHelperStatusList), 
this.attr("_in_HelperStatusInDataFetchStatus", "_in_HelperStatusInDataFetchStatus", "_in_HelperStatusInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_EventId", "in_EventIdIn", "In_EventId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_EventIdInDataFetchStatus", "_in_EventIdInDataFetchStatus", "_in_EventIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_AlreadyAddedHelpers", "in_AlreadyAddedHelpersIn", "In_AlreadyAddedHelpers", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.LongIntegerList());
}, false, OS.DataTypes.LongIntegerList), 
this.attr("_in_AlreadyAddedHelpersInDataFetchStatus", "_in_AlreadyAddedHelpersInDataFetchStatus", "_in_AlreadyAddedHelpersInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("GetSurveyHelpers", "getSurveyHelpersDataAct", "getSurveyHelpersDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetSurveyHelpersDataActRec());
}, true, GetSurveyHelpersDataActRec)
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
Dropdown_HelperRoles: OS.Model.ValidationWidgetRecord,
Input_SearchTerm: OS.Model.ValidationWidgetRecord
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
if("In_TrySave" in inputs) {
this.variables.in_TrySaveIn = inputs.In_TrySave;
if("_in_TrySaveInDataFetchStatus" in inputs) {
this.variables._in_TrySaveInDataFetchStatus = inputs._in_TrySaveInDataFetchStatus;
}

}

if("In_HelperRoles" in inputs) {
this.variables.in_HelperRolesIn = inputs.In_HelperRoles;
if("_in_HelperRolesInDataFetchStatus" in inputs) {
this.variables._in_HelperRolesInDataFetchStatus = inputs._in_HelperRolesInDataFetchStatus;
}

}

if("In_HelperStatus" in inputs) {
this.variables.in_HelperStatusIn = inputs.In_HelperStatus;
if("_in_HelperStatusInDataFetchStatus" in inputs) {
this.variables._in_HelperStatusInDataFetchStatus = inputs._in_HelperStatusInDataFetchStatus;
}

}

if("In_EventId" in inputs) {
this.variables.in_EventIdIn = inputs.In_EventId;
if("_in_EventIdInDataFetchStatus" in inputs) {
this.variables._in_EventIdInDataFetchStatus = inputs._in_EventIdInDataFetchStatus;
}

}

if("In_AlreadyAddedHelpers" in inputs) {
this.variables.in_AlreadyAddedHelpersIn = inputs.In_AlreadyAddedHelpers;
if("_in_AlreadyAddedHelpersInDataFetchStatus" in inputs) {
this.variables._in_AlreadyAddedHelpersInDataFetchStatus = inputs._in_AlreadyAddedHelpersInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Orbit_Blocks.HostSurvey_AddHelper");
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_Item.mvc$view", "OutSystems/ReactWidgets/Main", "OutSystemsUI_2_23.Interaction.BottomSheet.mvc$view", "OutSystemsUI_2_23.Interaction.InputWithIcon.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.Card_MemberInformation_Survey.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Orbit_FooterWithActions.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoResults.mvc$view", "Connect2_OrbitMobile_MUI.controller$CreateValidationMessage", "Connect2_OrbitMobile_MUI.model$HostSurvey_AddHelperRec", "Connect2_OrbitMobile_IS.model$HostSurvey_HelperMemberRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$HostSurvey_HelperMemberList", "Connect2_OrbitMobile_MUI.model$LocalHelperRoleList", "Connect2_OrbitMobile_MUI.model$LocalHelperStatusList", "Connect2_OrbitMobile_IS.model$MemberInformationRec", "Connect2_OrbitMobile_IS.model$MemberAccommodationRec", "Connect2_OrbitMobile_IS.model$HostSurvey_HelperItemInfoRec", "Connect2_OrbitMobile_MUI.model$HostSurvey_HelperItemInfoList", "OutSystemsUI_2_23.model$ErrorMessageRec", "Connect2_OrbitMobile_MUI.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetClose", "Connect2_OrbitMobile_MUI.controller$BlurInput", "OutSystemsUI_2_23.controller$BottomSheetOpen", "Connect2_OrbitMobile_IS.model$GetSurveyHelpersResponseRec"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AddHelper_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AddHelper_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_Item_mvc_view, OSWidgets, OutSystemsUI_2_23_Interaction_BottomSheet_mvc_view, OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_Survey_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Orbit_FooterWithActions_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoResults_mvc_view) {
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
        View.displayName = "Orbit_Blocks.HostSurvey_AddHelper";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_Item_mvc_view, OutSystemsUI_2_23_Interaction_BottomSheet_mvc_view, OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_Survey_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Orbit_FooterWithActions_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoResults_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AddHelper_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AddHelper_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_Item_mvc_view, {
inputs: {
In_Title: "Helper",
In_HasDelete: true,
In_HasEdit: false
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
click_Delete$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_Item Click_Delete");
controller.click_Delete$Action(controller.callContext(eventHandlerContext));
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Status: PlaceholderContent.Empty,
placeholder_Content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Search Helpers",
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "orbit-host-survey-helper-asterisk",
value: "*",
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "5"
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_AddHelper/Div_SearchMember onclick");
controller.onClick_SearchHelperInput$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
extendedProperties: {
style: model.getCachedValue(idService.getId("Div_SearchMember.style"), function () {
return ((model.variables.helpersVar.helpersAttr.isEmpty) ? ("align-items: center;") : ("align-items: flex-start;"));
}, function () {
return model.variables.helpersVar.helpersAttr.isEmpty;
})
},
style: model.getCachedValue(idService.getId("Div_SearchMember.Style"), function () {
return ("orbit-host-survey-helper-search" + ((model.variables.isNotValidInputVar) ? (" orbit-host-survey-helper-search-not-valid") : ("")));
}, function () {
return model.variables.isNotValidInputVar;
}),
visible: true,
_idProps: {
service: idService,
name: "Div_SearchMember"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "search",
iconSize: /*FontSize*/ 0,
style: "icon font-size-1-5em text-neutral-7",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}), $if(model.variables.helpersVar.helpersAttr.isEmpty, false, this, function () {
return [React.createElement(OSWidgets.Text, {
style: "text-neutral-6 margin-left-base",
text: ["Search member"],
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": "True"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.helpersVar.helpersAttr,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-host-survey-helper-search-pill",
visible: true,
_idProps: {
service: idService,
name: "Div_MemberPill"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.helpersVar.helpersAttr.getCurrent(callContext.iterationContext).lastNameAttr), asPrimitiveValue(model.variables.helpersVar.helpersAttr.getCurrent(callContext.iterationContext).firstNameAttr)]
}, React.createElement(OSWidgets.Expression, {
style: "font-size-xs line-height-s",
value: model.getCachedValue(idService.getId("e0Rb6Cx1l0S77c3yzqYRgg.Value"), function () {
return (((((model.variables.helpersVar.helpersAttr.getCurrent(callContext.iterationContext).firstNameAttr) !== (""))) ? ((model.variables.helpersVar.helpersAttr.getCurrent(callContext.iterationContext).firstNameAttr + ((((model.variables.helpersVar.helpersAttr.getCurrent(callContext.iterationContext).lastNameAttr) !== (""))) ? (" ") : ("")))) : ("")) + model.variables.helpersVar.helpersAttr.getCurrent(callContext.iterationContext).lastNameAttr);
}, function () {
return model.variables.helpersVar.helpersAttr.getCurrent(callContext.iterationContext).firstNameAttr;
}, function () {
return model.variables.helpersVar.helpersAttr.getCurrent(callContext.iterationContext).lastNameAttr;
}),
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Icon, {
extendedEvents: {
"componentdidmount": function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_AddHelper/Icon_Delete componentdidmount");
controller.onHandle_ComponentDidMount$Action(idService.getId("Icon_Delete"), model.variables.helpersVar.helpersAttr.getCurrentRowNumber(callContext.iterationContext), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-circle-cross font-size-s line-height-s",
visible: true,
_idProps: {
service: idService,
name: "Icon_Delete"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}, callContext, idService, "1")
},
_dependencies: []
}))];
})), $if(model.variables.isNotValidInputVar, false, this, function () {
return [React.createElement(OSWidgets.Expression, {
style: "validation-message",
value: model.getCachedValue(idService.getId("2kTLzUN2ukykpBMhvWoyJw.Value"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.createValidationMessage$Action("Helper", false, callContext).validationMessageOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}),
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
mandatory: true,
targetWidget: "Dropdown_HelperRoles",
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Role")), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Dropdown, {
_validationProps: {
validationService: validationService
},
dropdownMode: /*Custom*/ 1,
emptyValue: "Select role",
enabled: true,
extendedEvents: {
onFocus: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_AddHelper/Dropdown_HelperRoles onfocus");
controller.onFocus_Inputs$Action(idService.getId("Dropdown_HelperRoles"), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
list: model.variables.in_HelperRolesIn,
mandatory: true,
onChange: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_AddHelper/Dropdown_HelperRoles OnChange");
controller.onChange_HelperRoles$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "dropdown",
values: function (elem) {
return elem.jSON_NameAttr;
},
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.helpersVar.roleAttr, function (value) {
model.variables.helpersVar.roleAttr = value;
}),
_idProps: {
service: idService,
name: "Dropdown_HelperRoles"
},
_widgetRecordProvider: widgetsRecordProvider,
list_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HelperRolesInDataFetchStatus),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Expression, {
value: model.variables.in_HelperRolesIn.getCurrent(callContext.iterationContext).labelAttr,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HelperRolesInDataFetchStatus),
_dependencies: []
})];
}, callContext, idService, "2")
},
_dependencies: [asPrimitiveValue(model.variables._in_HelperRolesInDataFetchStatus)]
})), React.createElement(OutSystemsUI_2_23_Interaction_BottomSheet_mvc_view, {
inputs: {
Shape: Connect2_OrbitMobile_MUIModel.staticEntities.shape.rounded,
ExtendedClass: "orbit-host-survey-helper-sheet",
ShowHandler: true
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onToggle$Action: function (bottomSheetIdIn, isOpenIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Interaction/BottomSheet OnToggle");
controller.onToggle_BottomSheet_Helpers$Action(isOpenIn, controller.callContext(eventHandlerContext));
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
name: "BottomSheet_Helpers",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
topBar: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-align-left",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
mandatory: true,
targetWidget: "Input_SearchTerm",
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Search Helpers")), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OutSystemsUI_2_23_Interaction_InputWithIcon_mvc_view, {
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
uuid: "24",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Icon, {
icon: "search",
iconSize: /*FontSize*/ 0,
style: "icon font-size-1-5em",
visible: true,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
input: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService
},
enabled: true,
extendedEvents: {
onKeyUp: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_AddHelper/Input_SearchTerm onkeyup");
controller.onKeyup_Input_SearchTerm$Action(idService.getId("Input_SearchTerm"), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
onFocus: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_AddHelper/Input_SearchTerm onfocus");
controller.onFocus_Input_SearchTerm$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
onBlur: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_AddHelper/Input_SearchTerm onblur");
controller.onBlur_Input_SearchTerm$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Search*/ 8,
mandatory: true,
maxLength: 50,
prompt: "Search member",
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.searchTermVar, function (value) {
model.variables.searchTermVar = value;
}),
_idProps: {
service: idService,
name: "Input_SearchTerm"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.searchTermVar)]
}))];
}),
content: new PlaceholderContent(function () {
return [$if(((model.variables.isNewSearchVar) ? (!(model.variables.isFetchingDataVar)) : (true)), false, this, function () {
return [$if(!(model.variables.surveyHelpersDataVar.isEmpty), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-align-left bold padding-x-m padding-top-m",
visible: true,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: (("Top " + (model.variables.surveyHelpersDataVar.length).toString()) + " results"),
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-top-base margin-bottom-l",
visible: true,
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.surveyHelpersDataVar,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_Card_MemberInformation_Survey_mvc_view, {
inputs: {
In_ExtendedClass: model.getCachedValue(idService.getId("x1MZdfFJ7U+B0KfNfhkPhw.In_ExtendedClass"), function () {
return ((model.variables.surveyHelpersDataVar.getCurrent(callContext.iterationContext).isSelectedAttr) ? ("background-neutral-2") : (""));
}, function () {
return model.variables.surveyHelpersDataVar.getCurrent(callContext.iterationContext).isSelectedAttr;
}),
In_MemberInformation: model.getCachedValue(idService.getId("x1MZdfFJ7U+B0KfNfhkPhw.In_MemberInformation"), function () {
return OS.DataConversion.JSConversions.typeConvertRecord(model.variables.surveyHelpersDataVar.getCurrent(callContext.iterationContext), new Connect2_OrbitMobile_ISModel.MemberInformationRec(), function (source, target) {
target.memberIdAttr = source.memberIdAttr;
target.localityAttr = source.localityNameAttr;
target.countryCodeAttr = source.countryNameAttr;
target.firstNameAttr = source.firstNameAttr;
target.lastNameAttr = source.lastNameAttr;
return target;
});
}, function () {
return model.variables.surveyHelpersDataVar.getCurrent(callContext.iterationContext);
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
clickedMember$Action: function (event_HouseholdIdIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/Card_MemberInformation_Survey ClickedMember");
controller.onClick_HelperMember$Action(model.variables.surveyHelpersDataVar.getCurrentRowNumber(callContext.iterationContext), controller.callContext(eventHandlerContext));
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
uuid: "31",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, callContext, idService, "3")
},
_dependencies: []
}), $if(model.variables.isFetchingDataVar, false, this, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, {
inputs: {
In_SkeletonLoadingId: Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.hostSurveyHelpers
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
uuid: "32",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [$if((model.variables.surveyHelpersDataVar.length === (model.variables.pageNumberVar * model.variables.maxHelpersVar)), false, this, function () {
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_AddHelper/Container onclick");
return controller.onClick_LoadMoreHelpers$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
extendedProperties: {
style: "color: var(--orbit-primary-7);"
},
style: "orbit-host-survey-load-more-button",
visible: true,
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Load more results")];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "color: var(--color-neutral-7);"
},
style: "orbit-host-survey-load-more-button",
visible: true,
_idProps: {
service: idService,
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider
}, "No more results found. Try a different search term.")];
})];
})), $if(!(model.variables.isTypingVar), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "position: sticky; bottom: 0;"
},
visible: true,
_idProps: {
service: idService,
uuid: "35"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Orbit_FooterWithActions_mvc_view, {
inputs: {
In_HasTopShadow: true,
In_HasSecondaryButton: false,
In_IsSmallButtons: false
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
click_PrimaryButton$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Generic_Blocks/Orbit_FooterWithActions Click_PrimaryButton");
controller.onClick_AddHelpers$Action(controller.callContext(eventHandlerContext));
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
uuid: "36",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Secondary: PlaceholderContent.Empty,
placeholder_Primary: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "Add",
_idProps: {
service: idService,
uuid: "37"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: []
}))];
}, function () {
return [];
})];
}, function () {
return [$if((model.variables.getSurveyHelpersDataAct.isDataFetchedAttr && ((model.variables.lastSearchedTermVar) !== (""))), false, this, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoResults_mvc_view, {
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
uuid: "38",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("FDNJe9KcEkeVhpVsSZvNgw.Value"), function () {
return ((((model.variables.lastSearchedTermVar) !== (""))) ? (((("No results for " + "\'") + model.variables.lastSearchedTermVar) + "\'.")) : ("No results."));
}, function () {
return model.variables.lastSearchedTermVar;
}),
_idProps: {
service: idService,
uuid: "39"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
placeholder_Message: new PlaceholderContent(function () {
return ["Make sure that all words are spelled correctly, or refine your search terms."];
})
},
_dependencies: [asPrimitiveValue(model.variables.lastSearchedTermVar)]
})];
}, function () {
return [];
})];
})];
}, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, {
inputs: {
In_SkeletonLoadingId: Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.hostSurveyHelpers
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
uuid: "40",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.lastSearchedTermVar), asPrimitiveValue(model.variables.getSurveyHelpersDataAct.isDataFetchedAttr), asPrimitiveValue(model.variables.isTypingVar), asPrimitiveValue(model.variables.maxHelpersVar), asPrimitiveValue(model.variables.pageNumberVar), asPrimitiveValue(model.variables.surveyHelpersDataVar), asPrimitiveValue(model.variables.isFetchingDataVar), asPrimitiveValue(model.variables.isNewSearchVar), asPrimitiveValue(model.variables.searchTermVar)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.lastSearchedTermVar), asPrimitiveValue(model.variables.getSurveyHelpersDataAct.isDataFetchedAttr), asPrimitiveValue(model.variables.isTypingVar), asPrimitiveValue(model.variables.maxHelpersVar), asPrimitiveValue(model.variables.pageNumberVar), asPrimitiveValue(model.variables.surveyHelpersDataVar), asPrimitiveValue(model.variables.isFetchingDataVar), asPrimitiveValue(model.variables.isNewSearchVar), asPrimitiveValue(model.variables.searchTermVar), asPrimitiveValue(model.variables._in_HelperRolesInDataFetchStatus), asPrimitiveValue(model.variables.in_HelperRolesIn), asPrimitiveValue(model.variables.helpersVar.roleAttr), asPrimitiveValue(model.variables.helpersVar.helpersAttr), asPrimitiveValue(model.variables.isNotValidInputVar)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.mvc$debugger", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.mvc$controller.OnFocus_Inputs.ScrollIntoViewJS", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.mvc$controller.OnKeyup_Input_SearchTerm.RefreshDataJS", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.mvc$controller.OnKeyup_Input_SearchTerm.CheckForEnterKeyJS", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.mvc$controller.OnKeyup_Input_SearchTerm.ScrollToBottomJS", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.mvc$controller.OnToggle_BottomSheet_Helpers.FocusInputJS", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.mvc$controller.OnToggle_BottomSheet_Helpers.BlurInputJS", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.mvc$controller.OnToggle_BottomSheet_Helpers.SetCorrectHeightJS", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.mvc$controller.OnHandle_ComponentDidMount.AddClickEventJS", "Connect2_OrbitMobile_MUI.controller$CreateValidationMessage", "Connect2_OrbitMobile_MUI.model$HostSurvey_AddHelperRec", "Connect2_OrbitMobile_IS.model$HostSurvey_HelperMemberRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$HostSurvey_HelperMemberList", "Connect2_OrbitMobile_MUI.model$LocalHelperRoleList", "Connect2_OrbitMobile_MUI.model$LocalHelperStatusList", "Connect2_OrbitMobile_IS.model$MemberInformationRec", "Connect2_OrbitMobile_IS.model$MemberAccommodationRec", "Connect2_OrbitMobile_IS.model$HostSurvey_HelperItemInfoRec", "Connect2_OrbitMobile_MUI.model$HostSurvey_HelperItemInfoList", "OutSystemsUI_2_23.model$ErrorMessageRec", "Connect2_OrbitMobile_MUI.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetClose", "Connect2_OrbitMobile_MUI.controller$BlurInput", "OutSystemsUI_2_23.controller$BottomSheetOpen", "Connect2_OrbitMobile_IS.model$GetSurveyHelpersResponseRec"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AddHelper_mvc_Debugger, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AddHelper_mvc_controller_OnFocus_Inputs_ScrollIntoViewJS, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AddHelper_mvc_controller_OnKeyup_Input_SearchTerm_RefreshDataJS, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AddHelper_mvc_controller_OnKeyup_Input_SearchTerm_CheckForEnterKeyJS, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AddHelper_mvc_controller_OnKeyup_Input_SearchTerm_ScrollToBottomJS, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AddHelper_mvc_controller_OnToggle_BottomSheet_Helpers_FocusInputJS, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AddHelper_mvc_controller_OnToggle_BottomSheet_Helpers_BlurInputJS, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AddHelper_mvc_controller_OnToggle_BottomSheet_Helpers_SetCorrectHeightJS, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AddHelper_mvc_controller_OnHandle_ComponentDidMount_AddClickEventJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
refreshSurveyHelpersData$Action: function (in_IsNewSearchIn) {
in_IsNewSearchIn = (in_IsNewSearchIn === undefined) ? false : in_IsNewSearchIn;
return controller.executeActionInsideJSNode(controller._refreshSurveyHelpersData$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_IsNewSearchIn, OS.DataTypes.DataTypes.Boolean)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "RefreshSurveyHelpersData");
},
onClick_DeleteHelper$Action: function (in_CurrentRowNumberIn) {
in_CurrentRowNumberIn = (in_CurrentRowNumberIn === undefined) ? 0 : in_CurrentRowNumberIn;
return controller.executeActionInsideJSNode(controller._onClick_DeleteHelper$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(in_CurrentRowNumberIn, OS.DataTypes.DataTypes.Integer)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "OnClick_DeleteHelper");
}
};
this.dataFetchDependenciesOriginal = {
getSurveyHelpers$DataActRefresh: -1
};
this.dataFetchDependentsGraph = {
getSurveyHelpers$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions
Controller.prototype.getSurveyHelpers$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:lJZdQyq6HkS6hruU7+s5+A:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.dsrwrV_rz02C81uPbJpFPQ/DataActions.lJZdQyq6HkS6hruU7+s5+A:YlgtO234CgGC0CKhk6_Vcg", "Connect2_OrbitMobile_MUI", "GetSurveyHelpers", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_Blocks/HostSurvey_AddHelper/GetSurveyHelpers");
return controller.callDataAction("DataActionGetSurveyHelpers", "screenservices/Connect2_OrbitMobile_MUI/Orbit_Blocks/HostSurvey_AddHelper/DataActionGetSurveyHelpers", "Vb7uUiXI26nIOnxCyTMxVw", function (b) {
model.variables.getSurveyHelpersDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getSurveyHelpersDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getSurveyHelpersDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_Blocks/HostSurvey_AddHelper/GetSurveyHelpers On After Fetch");
controller._onAfterFetch_GetSurveyHelpers$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:lJZdQyq6HkS6hruU7+s5+A", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getSurveyHelpers$DataActRefresh"];
// Client Actions
Controller.prototype._onHandle_Save$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_Save");
callContext = controller.callContext(callContext);
var listFilter_PendingVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.listFilter_PendingVar = listFilter_PendingVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:vw19BBMCQUimubBuWhI4zw:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.dsrwrV_rz02C81uPbJpFPQ/ClientActions.vw19BBMCQUimubBuWhI4zw:YeRJ0EXFcaMWlDY+xc5IHw", "Connect2_OrbitMobile_MUI", "OnHandle_Save", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:AwOau+kSjEGr0FoRfhLQ4w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Has Role?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:F8+_g6Pe3USXyMMQtD3wLg", callContext.id) && !(((model.variables.helpersVar.roleAttr) !== (""))))) {
// Validate Helper Role
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:EW3Dph4EIEyUtZ2ggK9boQ", callContext.id);
// Dropdown_HelperRoles.Valid = False
model.widgets.get(idService.getId("Dropdown_HelperRoles")).validAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:EW3Dph4EIEyUtZ2ggK9boQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Dropdown_HelperRoles.ValidationMessage = CreateValidationMessage("Role", false)
model.widgets.get(idService.getId("Dropdown_HelperRoles")).validationMessageAttr = OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.createValidationMessage$Action("Role", false, callContext).validationMessageOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}

// Has Helpers?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8QuB8pPFq0ic4IrXRpkMeg", callContext.id) && !(!(model.variables.helpersVar.helpersAttr.isEmpty)))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wBLeAglQrkWG9Rp4bSLR_g", callContext.id);
// IsNotValidInput = True
model.variables.isNotValidInputVar = true;
}

// Has invalida data?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GL_nuoALGE2RppeWY01BhQ", callContext.id) && (!(model.widgets.get(idService.getId("Dropdown_HelperRoles")).validAttr) || model.variables.isNotValidInputVar))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nVyE+NOwDU2fC1PLmAnORQ", callContext.id);
// Trigger Event: Save_Failed
return controller.save_Failed$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IvVpAVO5IE2pVrawRCgLjA", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XHSimUHhIE2PxSIls9UUsw", callContext.id);
// Execute Action: ListFilter_Pending
listFilter_PendingVar.value = OS.SystemActions.listFilter(model.variables.in_HelperStatusIn, function (p) {
return (p.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.helperStatus.pending);
}, callContext);

// Foreach Helpers.Helpers
callContext.iterationContext.registerIterationStart(model.variables.helpersVar.helpersAttr);
try {var helpersIterator = callContext.iterationContext.getIterator(model.variables.helpersVar.helpersAttr);
var helpersIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:iM78FDp8aUu39Pn1eFmq3Q", callContext.id) && (helpersIndex < model.variables.helpersVar.helpersAttr.length))) {
helpersIterator.currentRowNumber = helpersIndex;
// Set Status & Role
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KAbpfrJnYUeeZ18z0KZHJg", callContext.id);
// Helpers.Helpers.Current.HelperRole = Helpers.Role
model.variables.helpersVar.helpersAttr.getItem(helpersIndex.valueOf()).helperRoleAttr = model.variables.helpersVar.roleAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KAbpfrJnYUeeZ18z0KZHJg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Helpers.Helpers.Current.HelperStatus = ListFilter_Pending.FilteredList.Current.JSON_Name
model.variables.helpersVar.helpersAttr.getItem(helpersIndex.valueOf()).helperStatusAttr = listFilter_PendingVar.value.filteredListOut.getCurrent(callContext.iterationContext).jSON_NameAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KAbpfrJnYUeeZ18z0KZHJg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Helpers.Helpers.Current.IsEdit = False
model.variables.helpersVar.helpersAttr.getItem(helpersIndex.valueOf()).isEditAttr = false;
helpersIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.helpersVar.helpersAttr);
}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4A_Rg3HfjU26eC1Ji2qVLg", callContext.id);
// Trigger Event: Save_Successful
return controller.save_Successful$Action(model.variables.helpersVar.helpersAttr, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fsEQn5v2Uk65sNZAJm4erQ", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:vw19BBMCQUimubBuWhI4zw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:vw19BBMCQUimubBuWhI4zw", callContext.id);
throw ex;

});
};
Controller.prototype._refreshSurveyHelpersData$Action = function (in_IsNewSearchIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("RefreshSurveyHelpersData");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.RefreshSurveyHelpersData$vars"))());
vars.value.in_IsNewSearchInLocal = in_IsNewSearchIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:8x_UCLsiREWBFOsxDIkYew:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.dsrwrV_rz02C81uPbJpFPQ/ClientActions.8x_UCLsiREWBFOsxDIkYew:nLpWnjWKUBkxYgbl_TDHDQ", "Connect2_OrbitMobile_MUI", "RefreshSurveyHelpersData", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PnEgh1NjcUWeJR1QcNJQzQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LUsqKCBsJEmXWr2GxnuUCg", callContext.id);
// IsNewSearch = In_IsNewSearch
model.variables.isNewSearchVar = vars.value.in_IsNewSearchInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6t8gLg9dmkSF4vj52wIFSQ", callContext.id);
// PageNumber = If
model.variables.pageNumberVar = ((model.variables.isNewSearchVar) ? (1) : (model.variables.pageNumberVar));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RtTJeTj1fEqwth3M9lqXxA", callContext.id);
// IsFetchingData = True
model.variables.isFetchingDataVar = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nMmzlbBjCUCYcKOfwP79pQ", callContext.id);
// LastSearchedTerm = ""
model.variables.lastSearchedTermVar = "";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:MqTuq266KEmfHuPQFuJ1JA", callContext.id);
// Refresh Query: GetSurveyHelpers
var result = controller.getSurveyHelpers$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fzPWgWFRZk2KY67cNmowTw", callContext.id);
// IsFetchingData = False
model.variables.isFetchingDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:D9T0JtU74EWtW9lhfEemHQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:8x_UCLsiREWBFOsxDIkYew", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:8x_UCLsiREWBFOsxDIkYew", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.RefreshSurveyHelpersData$vars", [{
name: "In_IsNewSearch",
attrName: "in_IsNewSearchInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._onAfterFetch_GetSurveyHelpers$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnAfterFetch_GetSurveyHelpers");
callContext = controller.callContext(callContext);
var listIndexOf_SameMemberVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.listIndexOf_SameMemberVar = listIndexOf_SameMemberVar;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:lnHRJMlnrE6QxUykDZWPqA:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.dsrwrV_rz02C81uPbJpFPQ/ClientActions.lnHRJMlnrE6QxUykDZWPqA:OTQGXUQqJqrY0tF_x6yJyg", "Connect2_OrbitMobile_MUI", "OnAfterFetch_GetSurveyHelpers", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xCSlEnjF1kmA1B5H2dpI5w", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uYQ0HRa7O0SO4mcPJWxYyg", callContext.id);
// LastSearchedTerm = SearchTerm
model.variables.lastSearchedTermVar = model.variables.searchTermVar;
// Foreach Helpers.Helpers
callContext.iterationContext.registerIterationStart(model.variables.helpersVar.helpersAttr);
try {var helpersIterator = callContext.iterationContext.getIterator(model.variables.helpersVar.helpersAttr);
var helpersIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:HrcjlXcls0Si3+Cj8gLGIQ", callContext.id) && (helpersIndex < model.variables.helpersVar.helpersAttr.length))) {
helpersIterator.currentRowNumber = helpersIndex;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+titL8DFiUa+BoyzWLRSNQ", callContext.id);
// Execute Action: ListIndexOf_SameMember
listIndexOf_SameMemberVar.value = OS.SystemActions.listIndexOf(model.variables.getSurveyHelpersDataAct.responseOut.helperMembersAttr, function (p) {
return p.memberIdAttr.equals(model.variables.helpersVar.helpersAttr.getItem(helpersIndex.valueOf()).memberIdAttr);
}, callContext);

// Found?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KVCVUnTWWEmdg7eGItaHuA", callContext.id) && ((listIndexOf_SameMemberVar.value.positionOut) !== (-1)))) {
// Set IsSelected
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+jT36uSCEk6sIOn1DgwX8w", callContext.id);
// GetSurveyHelpers.Response.HelperMembers[ListIndexOf_SameMember.Position].IsSelected = True
model.variables.getSurveyHelpersDataAct.responseOut.helperMembersAttr.getItem(listIndexOf_SameMemberVar.value.positionOut).isSelectedAttr = true;
}

helpersIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.helpersVar.helpersAttr);
}

if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pTqVLV3qI0ScX4buXW3j5w", callContext.id) && model.variables.isNewSearchVar)) {
// ReplaceData
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7sSFPZZdwE+z0R7535wj1g", callContext.id);
// SurveyHelpersData = GetSurveyHelpers.Response.HelperMembers
model.variables.surveyHelpersDataVar = model.variables.getSurveyHelpersDataAct.responseOut.helperMembersAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ySoU5pyZ90WTkv0SXXnMDA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:M2JQXaxUREerbOlfrKfvfw", callContext.id);
// Execute Action: ListAppendAll
OS.SystemActions.listAppendAll(model.variables.surveyHelpersDataVar, model.variables.getSurveyHelpersDataAct.responseOut.helperMembersAttr, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ySoU5pyZ90WTkv0SXXnMDA", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:lnHRJMlnrE6QxUykDZWPqA", callContext.id);
}

};
Controller.prototype._onClick_LoadMoreHelpers$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_LoadMoreHelpers");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:XLMSJZJORUiYt+rwBSAtew:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.dsrwrV_rz02C81uPbJpFPQ/ClientActions.XLMSJZJORUiYt+rwBSAtew:5JmJrOc6H52YgYyaDAZOHA", "Connect2_OrbitMobile_MUI", "OnClick_LoadMoreHelpers", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6q+KcdOmmk6k7dPlCnci2g", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BQA5GC0p60qips10D9XFLQ", callContext.id);
// PageNumber = PageNumber + 1
model.variables.pageNumberVar = (model.variables.pageNumberVar + 1);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wYOji_cV6Eqk4DYf1eNjAA", callContext.id);
// Execute Action: RefreshSurveyHelpersData
return controller._refreshSurveyHelpersData$Action(false, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xtRYLI1P+Uu0X7SXOxIAEw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:XLMSJZJORUiYt+rwBSAtew", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:XLMSJZJORUiYt+rwBSAtew", callContext.id);
throw ex;

});
};
Controller.prototype._onFocus_Inputs$Action = function (inputIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnFocus_Inputs");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.OnFocus_Inputs$vars"))());
vars.value.inputIdInLocal = inputIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:jRFoQEzJJ0qm_dd_pcVOXQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.dsrwrV_rz02C81uPbJpFPQ/ClientActions.jRFoQEzJJ0qm_dd_pcVOXQ:4l7Otu3ZpOQBjf_usjdxUA", "Connect2_OrbitMobile_MUI", "OnFocus_Inputs", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VICXnvefqEKbD8tDnIctqQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WJoS1GPmlEWq_pqGMNfq_w", callContext.id);
controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AddHelper_mvc_controller_OnFocus_Inputs_ScrollIntoViewJS, "ScrollIntoView", "OnFocus_Inputs", {
In_InputId: OS.DataConversion.JSNodeParamConverter.to(vars.value.inputIdInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oVgVVhLH_kGbZtM7MgPfcQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:jRFoQEzJJ0qm_dd_pcVOXQ", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.OnFocus_Inputs$vars", [{
name: "InputId",
attrName: "inputIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onClick_AddHelpers$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_AddHelpers");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.OnClick_AddHelpers$vars"))());
var bottomSheetCloseVar = new OS.DataTypes.VariableHolder();
var listFilter_AlreadyAddedVar = new OS.DataTypes.VariableHolder();
var listFilter_SelectedVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.bottomSheetCloseVar = bottomSheetCloseVar;
varBag.listFilter_AlreadyAddedVar = listFilter_AlreadyAddedVar;
varBag.listFilter_SelectedVar = listFilter_SelectedVar;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:+9yjUNbPd02+QYaoFRXxsA:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.dsrwrV_rz02C81uPbJpFPQ/ClientActions.+9yjUNbPd02+QYaoFRXxsA:BuXZTrFlj0JKPUcBXJhR6g", "Connect2_OrbitMobile_MUI", "OnClick_AddHelpers", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bCfxZKXjrEq5Sl1b8+L7Yw", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8O0rtKIqVkGr8BsrIjoDAA", callContext.id);
// Execute Action: ListFilter_Selected
listFilter_SelectedVar.value = OS.SystemActions.listFilter(model.variables.surveyHelpersDataVar, function (p) {
return p.isSelectedAttr;
}, callContext);

// Has Selected?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:p2Pw+F4nKk6Rsw_B5eg5Rg", callContext.id) && !(listFilter_SelectedVar.value.filteredListOut.isEmpty))) {
// Foreach ListFilter_Selected.FilteredList
callContext.iterationContext.registerIterationStart(listFilter_SelectedVar.value.filteredListOut);
try {var filteredListIterator = callContext.iterationContext.getIterator(listFilter_SelectedVar.value.filteredListOut);
var filteredListIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tWyoCknfDkuPAFqw9bZS4w", callContext.id) && (filteredListIndex < listFilter_SelectedVar.value.filteredListOut.length))) {
filteredListIterator.currentRowNumber = filteredListIndex;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:B1LzZgUzv0KPA0NpHldx7g", callContext.id);
// Execute Action: ListFilter_AlreadyAdded
listFilter_AlreadyAddedVar.value = OS.SystemActions.listFilter(model.variables.helpersVar.helpersAttr, function (p) {
return p.memberIdAttr.equals(listFilter_SelectedVar.value.filteredListOut.getItem(filteredListIndex.valueOf()).memberIdAttr);
}, callContext);

// Already added?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Wwf+dvFg_0mCVP6kNKxgWA", callContext.id) && !(!(listFilter_AlreadyAddedVar.value.filteredListOut.isEmpty)))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:W_274n+myEyLInRlahYMlw", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(vars.value.helpersToAddVar, OS.DataConversion.JSConversions.typeConvertRecord(listFilter_SelectedVar.value.filteredListOut.getItem(filteredListIndex.valueOf()), new Connect2_OrbitMobile_ISModel.HostSurvey_HelperItemInfoRec(), function (source, target) {
target.memberIdAttr = source.memberIdAttr;
target.firstNameAttr = source.firstNameAttr;
target.lastNameAttr = source.lastNameAttr;
target.localityNameAttr = source.localityNameAttr;
target.countryNameAttr = source.countryNameAttr;
return target;
}), callContext);
}

filteredListIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(listFilter_SelectedVar.value.filteredListOut);
}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zacTbpacakqAA7PXBlFvug", callContext.id);
// Execute Action: ListAppendAll
OS.SystemActions.listAppendAll(model.variables.helpersVar.helpersAttr, vars.value.helpersToAddVar, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Efn3FXmPZE6BsbaTATKscw", callContext.id);
// IsNotValidInput = False
model.variables.isNotValidInputVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mzpkKXIy4UeslyNayAXk_A", callContext.id);
// Execute Action: BottomSheetClose
bottomSheetCloseVar.value = OutSystemsUI_2_23Controller.default.bottomSheetClose$Action(idService.getId("BottomSheet_Helpers"), callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fopCjcx8nEe0s9ZUBxRdRg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4PluIixVUk2rAFo6vraGmg", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:+9yjUNbPd02+QYaoFRXxsA", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.OnClick_AddHelpers$vars", [{
name: "HelpersToAdd",
attrName: "helpersToAddVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.HostSurvey_HelperItemInfoList();
},
complexType: Connect2_OrbitMobile_MUIModel.HostSurvey_HelperItemInfoList
}]);
Controller.prototype._onKeyup_Input_SearchTerm$Action = function (in_InputIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnKeyup_Input_SearchTerm");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.OnKeyup_Input_SearchTerm$vars"))());
vars.value.in_InputIdInLocal = in_InputIdIn;
var checkForEnterKeyJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkForEnterKeyJSResult = checkForEnterKeyJSResult;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:3eLIZyHoKkmwj1DdjLOuMw:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.dsrwrV_rz02C81uPbJpFPQ/ClientActions.3eLIZyHoKkmwj1DdjLOuMw:TE9kmZIYH7XuPTfrX5QS1w", "Connect2_OrbitMobile_MUI", "OnKeyup_Input_SearchTerm", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:37izhLJSkUe7lAKx3OTSCw", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XJFx5oxKA0e6_CKCUYnt8Q", callContext.id);
checkForEnterKeyJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AddHelper_mvc_controller_OnKeyup_Input_SearchTerm_CheckForEnterKeyJS, "CheckForEnterKey", "OnKeyup_Input_SearchTerm", {
IsEnterKey: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.OnKeyup_Input_SearchTerm$checkForEnterKeyJSResult"))();
jsNodeResult.isEnterKeyOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsEnterKey, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
// IsEnter?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4Qw2GbmOLkW26g7wCCGCpg", callContext.id) && checkForEnterKeyJSResult.value.isEnterKeyOut)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2Vx41wr+ZUC1M2aLRe7xtQ", callContext.id);
// Execute Action: BlurInput
Connect2_OrbitMobile_MUIController.default.blurInput$Action(vars.value.in_InputIdInLocal, callContext);
// Same search?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CiwPV6OTakWamcMlYaqqag", callContext.id) && (model.variables.searchTermVar === model.variables.lastSearchedTermVar))) {
// Same search
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BsaBBh4uRkKd_9mEjr8shw", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("Results for this search are already on screen, check \'Load more results\' if available for extra results.", /*Info*/ 0);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dCyC_D3L10qzjUrAqQBXxA", callContext.id);
controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AddHelper_mvc_controller_OnKeyup_Input_SearchTerm_ScrollToBottomJS, "ScrollToBottom", "OnKeyup_Input_SearchTerm", null, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:f04u3p7rJ06lR48_2MvUbA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ixjafDKVwU+F89jM63xjsg", callContext.id);
controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AddHelper_mvc_controller_OnKeyup_Input_SearchTerm_RefreshDataJS, "RefreshData", "OnKeyup_Input_SearchTerm", null, function ($parameters) {
}, {
RefreshSurveyHelpersData: controller.clientActionProxies.refreshSurveyHelpersData$Action
}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7_NfjiChGU+N_pe15tWJrg", callContext.id);
}

} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:j5atH+l1Sk2z3rOBRfAosg", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:3eLIZyHoKkmwj1DdjLOuMw", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.OnKeyup_Input_SearchTerm$vars", [{
name: "In_InputId",
attrName: "in_InputIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.OnKeyup_Input_SearchTerm$checkForEnterKeyJSResult", [{
name: "IsEnterKey",
attrName: "isEnterKeyOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._onClick_SearchHelperInput$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_SearchHelperInput");
callContext = controller.callContext(callContext);
var bottomSheetOpenVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.bottomSheetOpenVar = bottomSheetOpenVar;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:o8rQcJh_DUeufFFyxatf5Q:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.dsrwrV_rz02C81uPbJpFPQ/ClientActions.o8rQcJh_DUeufFFyxatf5Q:xeEfn+V+zcoAMmNOq1ku4A", "Connect2_OrbitMobile_MUI", "OnClick_SearchHelperInput", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dvS_cind4U66cs2g4wjRFQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tStbaITtu0eHeHKr0giVvA", callContext.id);
// Execute Action: BottomSheetOpen
bottomSheetOpenVar.value = OutSystemsUI_2_23Controller.default.bottomSheetOpen$Action(idService.getId("BottomSheet_Helpers"), callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:86h7Hzum20S3aYPz9qyvqA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:o8rQcJh_DUeufFFyxatf5Q", callContext.id);
}

};
Controller.prototype._onChange_HelperRoles$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnChange_HelperRoles");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:31jch7g_00OQhBf+ZIYzjw:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.dsrwrV_rz02C81uPbJpFPQ/ClientActions.31jch7g_00OQhBf+ZIYzjw:srKCn6uEA1dT8l8+lCvtiA", "Connect2_OrbitMobile_MUI", "OnChange_HelperRoles", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6EvtRqGLlUyqOW5rFSwq2A", callContext.id);
// Validate Helper Role
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uE7zFcXDCUWa6VgpMvrcVw", callContext.id);
// Dropdown_HelperRoles.Valid = Helpers.Role <> ""
model.widgets.get(idService.getId("Dropdown_HelperRoles")).validAttr = ((model.variables.helpersVar.roleAttr) !== (""));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uE7zFcXDCUWa6VgpMvrcVw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Dropdown_HelperRoles.ValidationMessage = If
model.widgets.get(idService.getId("Dropdown_HelperRoles")).validationMessageAttr = ((((model.variables.helpersVar.roleAttr) !== (""))) ? ("") : (OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.createValidationMessage$Action("Helper role", false, callContext).validationMessageOut;
}, OS.DataTypes.DataTypes.Text, callContext.id)));
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Wqsl_6olD0Op_IRKTFx1pQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:31jch7g_00OQhBf+ZIYzjw", callContext.id);
}

};
Controller.prototype._onToggle_BottomSheet_Helpers$Action = function (isOpenIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnToggle_BottomSheet_Helpers");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.OnToggle_BottomSheet_Helpers$vars"))());
vars.value.isOpenInLocal = isOpenIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:349Wih6VLEeHs+6NDIEVJQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.dsrwrV_rz02C81uPbJpFPQ/ClientActions.349Wih6VLEeHs+6NDIEVJQ:JurmfAFjq7AQi1kbov2JaA", "Connect2_OrbitMobile_MUI", "OnToggle_BottomSheet_Helpers", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WYADnBSXuUKO7FVBnr8_6w", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Z8QHNLj2aESNA_3PnzIzeg", callContext.id) && vars.value.isOpenInLocal)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:aCjj55NPW06deN9Zkd4OFA", callContext.id);
controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AddHelper_mvc_controller_OnToggle_BottomSheet_Helpers_SetCorrectHeightJS, "SetCorrectHeight", "OnToggle_BottomSheet_Helpers", {
BottomSheetId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("BottomSheet_Helpers"), OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pWwGk4hnrkqyjelu_Oan7Q", callContext.id);
controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AddHelper_mvc_controller_OnToggle_BottomSheet_Helpers_FocusInputJS, "FocusInput", "OnToggle_BottomSheet_Helpers", {
InputId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Input_SearchTerm"), OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xRr+vhCaKE2Vbcws7w0uqA", callContext.id);
controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AddHelper_mvc_controller_OnToggle_BottomSheet_Helpers_BlurInputJS, "BlurInput", "OnToggle_BottomSheet_Helpers", {
InputId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Input_SearchTerm"), OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {
BlurInput: Connect2_OrbitMobile_MUIController.default.getClientActionProxies(controller).blurInput$Action
}, {});
}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:za2ozrPI00uJT0PbLMMFIg", callContext.id);
// Execute Action: ListClear
OS.SystemActions.listClear(model.variables.surveyHelpersDataVar, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Bx03IB0orEmPSBxpv3uAXg", callContext.id);
// SearchTerm = ""
model.variables.searchTermVar = "";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Bx03IB0orEmPSBxpv3uAXg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// LastSearchedTerm = ""
model.variables.lastSearchedTermVar = "";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Bx03IB0orEmPSBxpv3uAXg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// PageNumber = 1
model.variables.pageNumberVar = 1;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:OtZErebN0kSe450muNfSdQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:349Wih6VLEeHs+6NDIEVJQ", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.OnToggle_BottomSheet_Helpers$vars", [{
name: "IsOpen",
attrName: "isOpenInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._onClick_HelperMember$Action = function (positionIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_HelperMember");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.OnClick_HelperMember$vars"))());
vars.value.positionInLocal = positionIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:SL3ks062BUC6897_UKT45w:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.dsrwrV_rz02C81uPbJpFPQ/ClientActions.SL3ks062BUC6897_UKT45w:B1EtwGQQru58CVvrGHDRfg", "Connect2_OrbitMobile_MUI", "OnClick_HelperMember", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zykfFnGVdEyie7X6ioUr7g", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:u58ReJLsAUeqtPQV17Ra0A", callContext.id);
// SurveyHelpersData[Position].IsSelected = notSurveyHelpersData[Position].IsSelected
model.variables.surveyHelpersDataVar.getItem(vars.value.positionInLocal).isSelectedAttr = !(model.variables.surveyHelpersDataVar.getItem(vars.value.positionInLocal).isSelectedAttr);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:II8Ox7zPjU+skZ0t9NLl9g", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:SL3ks062BUC6897_UKT45w", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.OnClick_HelperMember$vars", [{
name: "Position",
attrName: "positionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._onHandle_ComponentDidMount$Action = function (in_InputIdIn, in_CurrentRowNumberIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_ComponentDidMount");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.OnHandle_ComponentDidMount$vars"))());
vars.value.in_InputIdInLocal = in_InputIdIn;
vars.value.in_CurrentRowNumberInLocal = in_CurrentRowNumberIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:EgK_z1eZoUmQGeT9fQ4S5w:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.dsrwrV_rz02C81uPbJpFPQ/ClientActions.EgK_z1eZoUmQGeT9fQ4S5w:4kclmGMAb_CNag9yMrVXuA", "Connect2_OrbitMobile_MUI", "OnHandle_ComponentDidMount", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RlvM6IziSUeCFFESGl9q8g", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5XU4LyJMl02LxCp7IVDtIw", callContext.id);
controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AddHelper_mvc_controller_OnHandle_ComponentDidMount_AddClickEventJS, "AddClickEvent", "OnHandle_ComponentDidMount", {
InputId: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_InputIdInLocal, OS.DataTypes.DataTypes.Text),
CurrentRowNumber: OS.DataConversion.JSNodeParamConverter.to(vars.value.in_CurrentRowNumberInLocal, OS.DataTypes.DataTypes.Integer)
}, function ($parameters) {
}, {
OnClick_DeleteHelper: controller.clientActionProxies.onClick_DeleteHelper$Action
}, {});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nmizB7RflkiqxQ_6LqKebw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:EgK_z1eZoUmQGeT9fQ4S5w", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.OnHandle_ComponentDidMount$vars", [{
name: "In_InputId",
attrName: "in_InputIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "In_CurrentRowNumber",
attrName: "in_CurrentRowNumberInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._onClick_DeleteHelper$Action = function (in_CurrentRowNumberIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_DeleteHelper");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.OnClick_DeleteHelper$vars"))());
vars.value.in_CurrentRowNumberInLocal = in_CurrentRowNumberIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:btr65Afc20qNd4Rt0v+FQg:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.dsrwrV_rz02C81uPbJpFPQ/ClientActions.btr65Afc20qNd4Rt0v+FQg:5Tp7r7duUc1GjXl4IGnXbQ", "Connect2_OrbitMobile_MUI", "OnClick_DeleteHelper", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LBvDoqo3HUWVOBsurUXPng", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Dn6kBmz5+kaYbSZrXOHYpw", callContext.id);
// Execute Action: ListRemove
OS.SystemActions.listRemove(model.variables.helpersVar.helpersAttr, vars.value.in_CurrentRowNumberInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:hTDqmPiMtk6OK8cSum6YKw", callContext.id);
// IsNotValidInput = Helpers.Helpers.Empty
model.variables.isNotValidInputVar = model.variables.helpersVar.helpersAttr.isEmpty;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2IZ_DbhI3Eunqc20Ey9JvQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:btr65Afc20qNd4Rt0v+FQg", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.OnClick_DeleteHelper$vars", [{
name: "In_CurrentRowNumber",
attrName: "in_CurrentRowNumberInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._onBlur_Input_SearchTerm$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnBlur_Input_SearchTerm");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:_z6V6PYs8k+KuY5x7BtjKw:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.dsrwrV_rz02C81uPbJpFPQ/ClientActions._z6V6PYs8k+KuY5x7BtjKw:iF5hy7NlW6q03geRSaJ3qA", "Connect2_OrbitMobile_MUI", "OnBlur_Input_SearchTerm", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UAHtvE_3dE2N__u2WdJdBw", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:neSqSdUDsUCKwCOTi6xpbg", callContext.id);
// IsTyping = False
model.variables.isTypingVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:byVSps1Zf0iyQun5jt3z_g", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:_z6V6PYs8k+KuY5x7BtjKw", callContext.id);
}

};
Controller.prototype._onFocus_Input_SearchTerm$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnFocus_Input_SearchTerm");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:9vBb6VNrrkmkvF6YD0ABBA:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.dsrwrV_rz02C81uPbJpFPQ/ClientActions.9vBb6VNrrkmkvF6YD0ABBA:1MndjTDLJ3NK3dPDCOkaJQ", "Connect2_OrbitMobile_MUI", "OnFocus_Input_SearchTerm", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nX3CjHgP_U6MxMWJphTFBw", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Yxa5bIFuMEKI4I2HkeyoPw", callContext.id);
// IsTyping = True
model.variables.isTypingVar = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lpeR9I+lzkS+SfgFnqZuOw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:9vBb6VNrrkmkvF6YD0ABBA", callContext.id);
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
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:9h3W7JIvWUGMCIH7KRgfhw:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.dsrwrV_rz02C81uPbJpFPQ/ClientActions.9h3W7JIvWUGMCIH7KRgfhw:VhvdvD0bxWL2Xxm3MGtREA", "Connect2_OrbitMobile_MUI", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:hFSC29x+T06xcyKBFUYbIA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4fmKIPd9ak+Lj2u_KWvB2A", callContext.id) && model.variables.in_TrySaveIn)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6K4IhIV8_U2wz493cy+qUA", callContext.id);
// Execute Action: OnHandle_Save
return controller._onHandle_Save$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:E9z87f_HxkWagjL7wPiokw", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:E9z87f_HxkWagjL7wPiokw", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:9h3W7JIvWUGMCIH7KRgfhw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:9h3W7JIvWUGMCIH7KRgfhw", callContext.id);
throw ex;

});
};

Controller.prototype.onHandle_Save$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_Save$Action, callContext);

};
Controller.prototype.refreshSurveyHelpersData$Action = function (in_IsNewSearchIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._refreshSurveyHelpersData$Action, callContext, in_IsNewSearchIn);

};
Controller.prototype.onAfterFetch_GetSurveyHelpers$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onAfterFetch_GetSurveyHelpers$Action, callContext);

};
Controller.prototype.onClick_LoadMoreHelpers$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_LoadMoreHelpers$Action, callContext);

};
Controller.prototype.onFocus_Inputs$Action = function (inputIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onFocus_Inputs$Action, callContext, inputIdIn);

};
Controller.prototype.onClick_AddHelpers$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_AddHelpers$Action, callContext);

};
Controller.prototype.onKeyup_Input_SearchTerm$Action = function (in_InputIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onKeyup_Input_SearchTerm$Action, callContext, in_InputIdIn);

};
Controller.prototype.onClick_SearchHelperInput$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_SearchHelperInput$Action, callContext);

};
Controller.prototype.onChange_HelperRoles$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onChange_HelperRoles$Action, callContext);

};
Controller.prototype.onToggle_BottomSheet_Helpers$Action = function (isOpenIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onToggle_BottomSheet_Helpers$Action, callContext, isOpenIn);

};
Controller.prototype.onClick_HelperMember$Action = function (positionIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_HelperMember$Action, callContext, positionIn);

};
Controller.prototype.onHandle_ComponentDidMount$Action = function (in_InputIdIn, in_CurrentRowNumberIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_ComponentDidMount$Action, callContext, in_InputIdIn, in_CurrentRowNumberIn);

};
Controller.prototype.onClick_DeleteHelper$Action = function (in_CurrentRowNumberIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_DeleteHelper$Action, callContext, in_CurrentRowNumberIn);

};
Controller.prototype.onBlur_Input_SearchTerm$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onBlur_Input_SearchTerm$Action, callContext);

};
Controller.prototype.onFocus_Input_SearchTerm$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onFocus_Input_SearchTerm$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.save_Failed$Action = function () {
return Promise.resolve();
};
Controller.prototype.click_Delete$Action = function () {
return Promise.resolve();
};
Controller.prototype.save_Successful$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ:tepBwzTPFZZUt4uwi04GJA", "Connect2_OrbitMobile_MUI", "Orbit_Blocks", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:dsrwrV_rz02C81uPbJpFPQ:/NRWebFlows.Qj0wv+k4akW2_YHY41VrPQ/NodesShownInESpaceTree.dsrwrV_rz02C81uPbJpFPQ:hqdhXgXpprqCzsUrZVaQ_A", "Connect2_OrbitMobile_MUI", "HostSurvey_AddHelper", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:dsrwrV_rz02C81uPbJpFPQ", callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Qj0wv+k4akW2_YHY41VrPQ", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
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

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_Blocks/HostSurvey_AddHelper On Parameters Changed");
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
return Connect2_OrbitMobile_MUIController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, Connect2_OrbitMobile_MUILanguageResources);
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.mvc$controller.OnFocus_Inputs.ScrollIntoViewJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
document.getElementById($parameters.In_InputId).scrollIntoView({ behavior: "smooth", block:"center" });
};
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.mvc$controller.OnKeyup_Input_SearchTerm.RefreshDataJS", [], function () {
return function ($actions, $roles, $public) {
$actions.RefreshSurveyHelpersData(true);
};
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.mvc$controller.OnKeyup_Input_SearchTerm.CheckForEnterKeyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if(event.keyCode == 13){
    $parameters.IsEnterKey = true;
}
};
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.mvc$controller.OnKeyup_Input_SearchTerm.ScrollToBottomJS", [], function () {
return function ($actions, $roles, $public) {
window.setTimeout(() => {
    let scrollItem = document.querySelector(".osui-bottom-sheet__content");
    scrollItem.scrollTo({top:scrollItem.offsetHeight,behavior:"smooth"});
},250);
};
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.mvc$controller.OnToggle_BottomSheet_Helpers.FocusInputJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
let searchInput = document.getElementById($parameters.InputId);
if(searchInput){
    searchInput.focus();
}
};
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.mvc$controller.OnToggle_BottomSheet_Helpers.BlurInputJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
let searchInput = document.getElementById($parameters.InputId);
if(searchInput){
    $actions.BlurInput($parameters.InputId);
}
};
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.mvc$controller.OnToggle_BottomSheet_Helpers.SetCorrectHeightJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
let bSheader = document.getElementById($parameters.BottomSheetId).querySelector(".osui-bottom-sheet__header");
let bScontent = document.getElementById($parameters.BottomSheetId).querySelector(".osui-bottom-sheet__content");
if(bSheader && bScontent){
    bScontent.style.maxHeight = "calc(100vh - " + bSheader.offsetHeight + "px)";
}

};
});
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.mvc$controller.OnHandle_ComponentDidMount.AddClickEventJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var elem = document.getElementById($parameters.InputId);
if(elem && !elem.customEvent){
    elem.customEvent = document.getElementById($parameters.InputId).addEventListener("click",function(event){
        event.stopPropagation();
        $actions.OnClick_DeleteHelper($parameters.CurrentRowNumber);
    });
}

};
});

define("Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"XHSimUHhIE2PxSIls9UUsw": {
getter: function (varBag, idService) {
return varBag.listFilter_PendingVar.value;
}
},
"+S4UvgkW9EOj51vd6PmX2A": {
getter: function (varBag, idService) {
return varBag.vars.value.in_IsNewSearchInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"+titL8DFiUa+BoyzWLRSNQ": {
getter: function (varBag, idService) {
return varBag.listIndexOf_SameMemberVar.value;
}
},
"luiNgy3f2kCvOhYaKKknXw": {
getter: function (varBag, idService) {
return varBag.vars.value.inputIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"WJoS1GPmlEWq_pqGMNfq_w": {
getter: function (varBag, idService) {
return varBag.scrollIntoViewJSResult.value;
}
},
"f1T72_NHdEGv9RqkTkncYQ": {
getter: function (varBag, idService) {
return varBag.vars.value.helpersToAddVar;
}
},
"mzpkKXIy4UeslyNayAXk_A": {
getter: function (varBag, idService) {
return varBag.bottomSheetCloseVar.value;
}
},
"B1LzZgUzv0KPA0NpHldx7g": {
getter: function (varBag, idService) {
return varBag.listFilter_AlreadyAddedVar.value;
}
},
"8O0rtKIqVkGr8BsrIjoDAA": {
getter: function (varBag, idService) {
return varBag.listFilter_SelectedVar.value;
}
},
"AP6FVUKYLEa8TE4IuR72pg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_InputIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ixjafDKVwU+F89jM63xjsg": {
getter: function (varBag, idService) {
return varBag.refreshDataJSResult.value;
}
},
"XJFx5oxKA0e6_CKCUYnt8Q": {
getter: function (varBag, idService) {
return varBag.checkForEnterKeyJSResult.value;
}
},
"dCyC_D3L10qzjUrAqQBXxA": {
getter: function (varBag, idService) {
return varBag.scrollToBottomJSResult.value;
}
},
"tStbaITtu0eHeHKr0giVvA": {
getter: function (varBag, idService) {
return varBag.bottomSheetOpenVar.value;
}
},
"Lt5ihGnT0U24gxk8lRiRAg": {
getter: function (varBag, idService) {
return varBag.vars.value.isOpenInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"pWwGk4hnrkqyjelu_Oan7Q": {
getter: function (varBag, idService) {
return varBag.focusInputJSResult.value;
}
},
"xRr+vhCaKE2Vbcws7w0uqA": {
getter: function (varBag, idService) {
return varBag.blurInputJSResult.value;
}
},
"aCjj55NPW06deN9Zkd4OFA": {
getter: function (varBag, idService) {
return varBag.setCorrectHeightJSResult.value;
}
},
"X7PoEiyk9Ua6XxJ2E4U+PQ": {
getter: function (varBag, idService) {
return varBag.vars.value.positionInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"xBgTQzOTek6N1EISC3Sjag": {
getter: function (varBag, idService) {
return varBag.vars.value.in_InputIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"vvpfqb2eGUanBfPMGJe2wg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_CurrentRowNumberInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"5XU4LyJMl02LxCp7IVDtIw": {
getter: function (varBag, idService) {
return varBag.addClickEventJSResult.value;
}
},
"A+uwkgMJykizXQFU041QXA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_CurrentRowNumberInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"9_a5k_ohUUOe5ILuVKtJdQ": {
getter: function (varBag, idService) {
return varBag.model.variables.helpersVar;
}
},
"g0Tmn9msuECw1YRukihH6g": {
getter: function (varBag, idService) {
return varBag.model.variables.searchTermVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"PKTzUO4MlU6DRRNTGbx6mA": {
getter: function (varBag, idService) {
return varBag.model.variables.surveyHelpersDataVar;
}
},
"kd24ymjh5kudO91e0rtVuQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isFetchingDataVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"LOX+BqejbUi40celQ1xVqQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isNotValidInputVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"ZV_gmLe7hkiv+KdHC5H67A": {
getter: function (varBag, idService) {
return varBag.model.variables.lastSearchedTermVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"oXkz88rnO0WToCvNDkVwxw": {
getter: function (varBag, idService) {
return varBag.model.variables.isTypingVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"b8fjvdXPak2Ruvy7h6frHw": {
getter: function (varBag, idService) {
return varBag.model.variables.maxHelpersVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"TgyYkJZEfE2tUvs9rV2hYQ": {
getter: function (varBag, idService) {
return varBag.model.variables.pageNumberVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"ZAaaGpWyS0ecjcOngGpxWg": {
getter: function (varBag, idService) {
return varBag.model.variables.isNewSearchVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"cLsJq5ZpT0i3GzYxzzbEtQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_TrySaveIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"tm1NIo349U67amSR8IUzjA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HelperRolesIn;
}
},
"pBlayluBQE+6mmnYCVNsWA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HelperStatusIn;
}
},
"GhKF4Aez3U2x3GJ1R4VhdQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"Xsb6jFEFOEqiQAVvv99Tdg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_AlreadyAddedHelpersIn;
}
},
"lJZdQyq6HkS6hruU7+s5+A": {
getter: function (varBag, idService) {
return varBag.model.variables.getSurveyHelpersDataAct;
}
},
"marP2tCx+0i5fFKF21hj8A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Status"));
})(varBag.model, idService);
}
},
"zfAFwXV+8UeyNOCxQHKpYQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Content"));
})(varBag.model, idService);
}
},
"Ca92ur03XEu6anKY3iuQIA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Div_SearchMember"));
})(varBag.model, idService);
}
},
"5BrqoftxyU+r6Gx+sONCRA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_NeedsPlaceholder"));
})(varBag.model, idService);
}
},
"9cCJWkCKu0axWzai+8_HgA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Div_MemberPill"));
})(varBag.model, idService);
}
},
"2780vHkNPEmRobvV4N6FiQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon_Delete"));
})(varBag.model, idService);
}
},
"Wgb9vREji0qNUiml1medlA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsNotValidInput"));
})(varBag.model, idService);
}
},
"AhES9dqPQ0iWuNYOwYWZCg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Dropdown_HelperRoles"));
})(varBag.model, idService);
}
},
"pOnH72cXRUGm8EgjN_H5Bw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomSheet_Helpers"));
})(varBag.model, idService);
}
},
"z64ufCikHUGj7GDc5xZuRw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TopBar"));
})(varBag.model, idService);
}
},
"nAE15GOAZE+tDIuAro1GUQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"GQj_PNpnCUyICo7+XH4r5g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input"));
})(varBag.model, idService);
}
},
"VqwooFXABkaHfKzfWGmwZw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_SearchTerm"));
})(varBag.model, idService);
}
},
"B3IC+yRUaU2nCbHaOfZy+g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"t_2jFm_AIUq8UhkbtCf7xQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsDataFetched"));
})(varBag.model, idService);
}
},
"0eZ5RxUleky8cEDMmhvpOQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasData"));
})(varBag.model, idService);
}
},
"xJM_UQJO4ES3VCSDEVGkgA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsDataFetching"));
})(varBag.model, idService);
}
},
"VYIFzB6EWkec3_ndog5r8g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_ShowLoadMoreButton"));
})(varBag.model, idService);
}
},
"3BvyJKZMZk6WJGMd84kAiQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsNotTyping"));
})(varBag.model, idService);
}
},
"bTsiEyZ0ok2S6vaute6ZPg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Secondary"));
})(varBag.model, idService);
}
},
"JMuW1Pe8FU+tjA319ZlLMg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Primary"));
})(varBag.model, idService);
}
},
"iBhRDt8A10ymGNPx85Kkig": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasFetched"));
})(varBag.model, idService);
}
},
"HlkP5swBY0efJkQTR2xbQA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Title"));
})(varBag.model, idService);
}
},
"DY0FCqPNKkuvGt1SYRbq7Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Message"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
