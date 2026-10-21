define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.mvc$model", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "UBTJavaScriptUtils.controller", "Connect2_LegacyShared.controller", "NavigationHandler.controller", "Connect2_OrbitMobile_MUI.entities", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTime", "Connect2_OrbitMobile_MUI.model$LocalHelperStatusRecordList", "Connect2_OrbitMobile_MUI.model$LocalHelperStatusRec", "Connect2_OrbitMobile_MUI.controller$GetHelperStatusByJSON_Name", "Connect2_OrbitMobile_MUI.model$IntegerLocalHostSurveyStepRecord", "Connect2_OrbitMobile_IS.model$GetHostSurveyResponseRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$StepPropertiesStepPropertiesStepPropertiesStepPropertiesRecord", "Connect2_OrbitMobile_MUI.model$TextTextBooleanBooleanBooleanBooleanBooleanRecord", "Connect2_OrbitMobile_MUI.model$LocalHelperRoleList", "Connect2_OrbitMobile_MUI.model$LocalHostSurveyStepRec", "Connect2_OrbitMobile_MUI.model$StepPropertiesRec", "Connect2_OrbitMobile_MUI.model$TextLocalHostSurveyStepRecordList", "Connect2_OrbitMobile_IS.model$HostSurvey_RoomItemRec", "Connect2_OrbitMobile_MUI.model$LocalHouseFloorList", "Connect2_OrbitMobile_MUI.model$LocalBedSizeList", "Connect2_OrbitMobile_MUI.model$LocalGenderPreferenceList", "Connect2_OrbitMobile_IS.model$HostSurvey_MealItemInfoRec", "Connect2_OrbitMobile_MUI.model$LocalMealTypeList", "Connect2_OrbitMobile_IS.model$HostSurvey_HelperItemInfoRec", "Connect2_OrbitMobile_MUI.model$LocalHelperStatusList", "Connect2_OrbitMobile_IS.model$HostSurvey_VehicleItemInfoRec", "Connect2_OrbitMobile_MUI.model$LocalVehicleOwnerList", "Connect2_OrbitMobile_MUI.model$LocalVehicleTypeList", "Connect2_OrbitMobile_MUI.model$HostSurvey_RoomItemList", "Connect2_OrbitMobile_MUI.model$HostSurvey_VehicleItemInfoList", "Connect2_OrbitMobile_MUI.model$HostSurvey_HelperItemInfoList", "Connect2_OrbitMobile_MUI.controller$GetPopUpInfo", "Connect2_OrbitMobile_MUI.controller$GetStepProperties", "Connect2_OrbitMobile_MUI.model$HostSurvey_MealItemInfoList", "Connect2_OrbitMobile_MUI.model$LocalHostSurveyStepRecordList", "Connect2_OrbitMobile_MUI.model$LocalHostSurveyStepRecord", "Connect2_OrbitMobile_MUI.controller$FocusOnFirstInvalidInput", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "Connect2_OrbitMobile_MUI.referencesHealth$UBTJavaScriptUtils", "Connect2_OrbitMobile_MUI.model$LocalSurveyStatusRec", "Connect2_OrbitMobile_MUI.controller$GetSurveyStatusById", "Connect2_LegacyShared.controller$FeedbackMessageAfterTransition", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.model$LocalHelperRoleRecordList", "NavigationHandler.controller$PreventNavigation", "Connect2_OrbitMobile_MUI.referencesHealth$NavigationHandler", "Connect2_OrbitMobile_MUI.model$LocalHouseFloorRecordList", "Connect2_OrbitMobile_MUI.model$LocalBedSizeRecordList", "Connect2_OrbitMobile_MUI.model$LocalSurveyStatusRecordList", "Connect2_OrbitMobile_MUI.model$LocalVehicleOwnerRecordList", "Connect2_OrbitMobile_MUI.model$LocalMealTypeRecordList", "Connect2_OrbitMobile_MUI.model$LocalVehicleTypeRecordList", "Connect2_OrbitMobile_MUI.model$LocalGenderPreferenceRecordList", "Connect2_OrbitMobile_MUI.model$LocalHouseFloorRec", "Connect2_OrbitMobile_MUI.model$LocalBedSizeRec", "Connect2_OrbitMobile_MUI.model$LocalVehicleOwnerRec", "Connect2_OrbitMobile_MUI.model$LocalMealTypeRec", "Connect2_OrbitMobile_MUI.model$LocalHelperRoleRec", "Connect2_OrbitMobile_MUI.model$LocalVehicleTypeRec", "Connect2_OrbitMobile_MUI.model$LocalGenderPreferenceRec"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, UBTJavaScriptUtilsController, Connect2_LegacySharedController, NavigationHandlerController, Connect2_OrbitMobile_MUIEntities) {
var OS = OutSystems.Internal;
var GetLocalHouseFloorsAggrRec = (function (_super) {
__extends(GetLocalHouseFloorsAggrRec, _super);
function GetLocalHouseFloorsAggrRec(defaults) {
_super.apply(this, arguments);
}
GetLocalHouseFloorsAggrRec.RecordListType = Connect2_OrbitMobile_MUIModel.LocalHouseFloorRecordList;
GetLocalHouseFloorsAggrRec.init();
return GetLocalHouseFloorsAggrRec;
})(OS.Model.AggregateRecord);
var GetLocalBedSizesAggrRec = (function (_super) {
__extends(GetLocalBedSizesAggrRec, _super);
function GetLocalBedSizesAggrRec(defaults) {
_super.apply(this, arguments);
}
GetLocalBedSizesAggrRec.RecordListType = Connect2_OrbitMobile_MUIModel.LocalBedSizeRecordList;
GetLocalBedSizesAggrRec.init();
return GetLocalBedSizesAggrRec;
})(OS.Model.AggregateRecord);
var GetCurrentLocalSurveyStatusAggrRec = (function (_super) {
__extends(GetCurrentLocalSurveyStatusAggrRec, _super);
function GetCurrentLocalSurveyStatusAggrRec(defaults) {
_super.apply(this, arguments);
}
GetCurrentLocalSurveyStatusAggrRec.RecordListType = Connect2_OrbitMobile_MUIModel.LocalSurveyStatusRecordList;
GetCurrentLocalSurveyStatusAggrRec.init();
return GetCurrentLocalSurveyStatusAggrRec;
})(OS.Model.AggregateRecord);
var GetLocalHelperStatusAggrRec = (function (_super) {
__extends(GetLocalHelperStatusAggrRec, _super);
function GetLocalHelperStatusAggrRec(defaults) {
_super.apply(this, arguments);
}
GetLocalHelperStatusAggrRec.RecordListType = Connect2_OrbitMobile_MUIModel.LocalHelperStatusRecordList;
GetLocalHelperStatusAggrRec.init();
return GetLocalHelperStatusAggrRec;
})(OS.Model.AggregateRecord);
var GetLocalVehicleOwnersAggrRec = (function (_super) {
__extends(GetLocalVehicleOwnersAggrRec, _super);
function GetLocalVehicleOwnersAggrRec(defaults) {
_super.apply(this, arguments);
}
GetLocalVehicleOwnersAggrRec.RecordListType = Connect2_OrbitMobile_MUIModel.LocalVehicleOwnerRecordList;
GetLocalVehicleOwnersAggrRec.init();
return GetLocalVehicleOwnersAggrRec;
})(OS.Model.AggregateRecord);
var GetLocalMealTypesAggrRec = (function (_super) {
__extends(GetLocalMealTypesAggrRec, _super);
function GetLocalMealTypesAggrRec(defaults) {
_super.apply(this, arguments);
}
GetLocalMealTypesAggrRec.RecordListType = Connect2_OrbitMobile_MUIModel.LocalMealTypeRecordList;
GetLocalMealTypesAggrRec.init();
return GetLocalMealTypesAggrRec;
})(OS.Model.AggregateRecord);
var GetLocalHostSurveyStepsAggrRec = (function (_super) {
__extends(GetLocalHostSurveyStepsAggrRec, _super);
function GetLocalHostSurveyStepsAggrRec(defaults) {
_super.apply(this, arguments);
}
GetLocalHostSurveyStepsAggrRec.RecordListType = Connect2_OrbitMobile_MUIModel.LocalHostSurveyStepRecordList;
GetLocalHostSurveyStepsAggrRec.init();
return GetLocalHostSurveyStepsAggrRec;
})(OS.Model.AggregateRecord);
var GetLocalHelperRolesAggrRec = (function (_super) {
__extends(GetLocalHelperRolesAggrRec, _super);
function GetLocalHelperRolesAggrRec(defaults) {
_super.apply(this, arguments);
}
GetLocalHelperRolesAggrRec.RecordListType = Connect2_OrbitMobile_MUIModel.LocalHelperRoleRecordList;
GetLocalHelperRolesAggrRec.init();
return GetLocalHelperRolesAggrRec;
})(OS.Model.AggregateRecord);
var GetLocalVehicleTypesAggrRec = (function (_super) {
__extends(GetLocalVehicleTypesAggrRec, _super);
function GetLocalVehicleTypesAggrRec(defaults) {
_super.apply(this, arguments);
}
GetLocalVehicleTypesAggrRec.RecordListType = Connect2_OrbitMobile_MUIModel.LocalVehicleTypeRecordList;
GetLocalVehicleTypesAggrRec.init();
return GetLocalVehicleTypesAggrRec;
})(OS.Model.AggregateRecord);
var GetLocalGenderPreferencesAggrRec = (function (_super) {
__extends(GetLocalGenderPreferencesAggrRec, _super);
function GetLocalGenderPreferencesAggrRec(defaults) {
_super.apply(this, arguments);
}
GetLocalGenderPreferencesAggrRec.RecordListType = Connect2_OrbitMobile_MUIModel.LocalGenderPreferenceRecordList;
GetLocalGenderPreferencesAggrRec.init();
return GetLocalGenderPreferencesAggrRec;
})(OS.Model.AggregateRecord);

var GetHostSurveyDataActRec = (function (_super) {
__extends(GetHostSurveyDataActRec, _super);
function GetHostSurveyDataActRec(defaults) {
_super.apply(this, arguments);
}
GetHostSurveyDataActRec.attributesToDeclare = function () {
return [
this.attr("Response", "responseOut", "Response", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.GetHostSurveyResponseRec());
}, true, Connect2_OrbitMobile_ISModel.GetHostSurveyResponseRec), 
this.attr("HasError", "hasErrorOut", "HasError", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetHostSurveyDataActRec.init();
return GetHostSurveyDataActRec;
})(OS.Model.DataSourceRecord);

var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsFetchingData", "isFetchingDataVar", "IsFetchingData", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("CurrentStep", "currentStepVar", "CurrentStep", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.IntegerLocalHostSurveyStepRecord());
}, false, Connect2_OrbitMobile_MUIModel.IntegerLocalHostSurveyStepRecord), 
this.attr("HostSurvey", "hostSurveyVar", "HostSurvey", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_ISModel.GetHostSurveyResponseRec());
}, false, Connect2_OrbitMobile_ISModel.GetHostSurveyResponseRec), 
this.attr("StepProperties", "stepPropertiesVar", "StepProperties", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.StepPropertiesStepPropertiesStepPropertiesStepPropertiesRecord());
}, false, Connect2_OrbitMobile_MUIModel.StepPropertiesStepPropertiesStepPropertiesStepPropertiesRecord), 
this.attr("RoomNames", "roomNamesVar", "RoomNames", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, false, OS.DataTypes.TextList), 
this.attr("IsAddingHelper", "isAddingHelperVar", "IsAddingHelper", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("PopUpInfo", "popUpInfoVar", "PopUpInfo", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.TextTextBooleanBooleanBooleanBooleanBooleanRecord());
}, false, Connect2_OrbitMobile_MUIModel.TextTextBooleanBooleanBooleanBooleanBooleanRecord), 
this.attr("PositionToDelete", "positionToDeleteVar", "PositionToDelete", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("SurveyDiscarded", "surveyDiscardedVar", "SurveyDiscarded", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("SurveySubmitted", "surveySubmittedVar", "SurveySubmitted", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsConfirmedSurvey", "isConfirmedSurveyVar", "IsConfirmedSurvey", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("HasDataSteps", "hasDataStepsVar", "HasDataSteps", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("FilteredHelperRoles", "filteredHelperRolesVar", "FilteredHelperRoles", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.LocalHelperRoleList());
}, false, Connect2_OrbitMobile_MUIModel.LocalHelperRoleList), 
this.attr("IsPostingSurvey", "isPostingSurveyVar", "IsPostingSurvey", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("In_EventId", "in_EventIdIn", "In_EventId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_EventIdInDataFetchStatus", "_in_EventIdInDataFetchStatus", "_in_EventIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_MemberId", "in_MemberIdIn", "In_MemberId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_MemberIdInDataFetchStatus", "_in_MemberIdInDataFetchStatus", "_in_MemberIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_EventName", "in_EventNameIn", "In_EventName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_EventNameInDataFetchStatus", "_in_EventNameInDataFetchStatus", "_in_EventNameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_EventStartDate", "in_EventStartDateIn", "In_EventStartDate", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, false), 
this.attr("_in_EventStartDateInDataFetchStatus", "_in_EventStartDateInDataFetchStatus", "_in_EventStartDateInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_EventEndDate", "in_EventEndDateIn", "In_EventEndDate", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, false), 
this.attr("_in_EventEndDateInDataFetchStatus", "_in_EventEndDateInDataFetchStatus", "_in_EventEndDateInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("GetLocalHouseFloors", "getLocalHouseFloorsAggr", "getLocalHouseFloorsAggr", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetLocalHouseFloorsAggrRec());
}, true, GetLocalHouseFloorsAggrRec), 
this.attr("GetLocalBedSizes", "getLocalBedSizesAggr", "getLocalBedSizesAggr", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetLocalBedSizesAggrRec());
}, true, GetLocalBedSizesAggrRec), 
this.attr("GetCurrentLocalSurveyStatus", "getCurrentLocalSurveyStatusAggr", "getCurrentLocalSurveyStatusAggr", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetCurrentLocalSurveyStatusAggrRec());
}, true, GetCurrentLocalSurveyStatusAggrRec), 
this.attr("GetLocalHelperStatus", "getLocalHelperStatusAggr", "getLocalHelperStatusAggr", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetLocalHelperStatusAggrRec());
}, true, GetLocalHelperStatusAggrRec), 
this.attr("GetLocalVehicleOwners", "getLocalVehicleOwnersAggr", "getLocalVehicleOwnersAggr", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetLocalVehicleOwnersAggrRec());
}, true, GetLocalVehicleOwnersAggrRec), 
this.attr("GetLocalMealTypes", "getLocalMealTypesAggr", "getLocalMealTypesAggr", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetLocalMealTypesAggrRec());
}, true, GetLocalMealTypesAggrRec), 
this.attr("GetLocalHostSurveySteps", "getLocalHostSurveyStepsAggr", "getLocalHostSurveyStepsAggr", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetLocalHostSurveyStepsAggrRec());
}, true, GetLocalHostSurveyStepsAggrRec), 
this.attr("GetLocalHelperRoles", "getLocalHelperRolesAggr", "getLocalHelperRolesAggr", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetLocalHelperRolesAggrRec());
}, true, GetLocalHelperRolesAggrRec), 
this.attr("GetLocalVehicleTypes", "getLocalVehicleTypesAggr", "getLocalVehicleTypesAggr", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetLocalVehicleTypesAggrRec());
}, true, GetLocalVehicleTypesAggrRec), 
this.attr("GetLocalGenderPreferences", "getLocalGenderPreferencesAggr", "getLocalGenderPreferencesAggr", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetLocalGenderPreferencesAggrRec());
}, true, GetLocalGenderPreferencesAggrRec), 
this.attr("GetHostSurvey", "getHostSurveyDataAct", "getHostSurveyDataAct", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetHostSurveyDataActRec());
}, true, GetHostSurveyDataActRec)
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
Input_HostSurveyNote: OS.Model.ValidationWidgetRecord,
Input_AccommodationNote: OS.Model.ValidationWidgetRecord,
TextArea_MealNote: OS.Model.ValidationWidgetRecord,
Input_HelperNote: OS.Model.ValidationWidgetRecord,
Switch_HasVehicles: OS.Model.ValidationWidgetRecord
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
if("In_EventId" in inputs) {
this.variables.in_EventIdIn = inputs.In_EventId;
if("_in_EventIdInDataFetchStatus" in inputs) {
this.variables._in_EventIdInDataFetchStatus = inputs._in_EventIdInDataFetchStatus;
}

}

if("In_MemberId" in inputs) {
this.variables.in_MemberIdIn = inputs.In_MemberId;
if("_in_MemberIdInDataFetchStatus" in inputs) {
this.variables._in_MemberIdInDataFetchStatus = inputs._in_MemberIdInDataFetchStatus;
}

}

if("In_EventName" in inputs) {
this.variables.in_EventNameIn = inputs.In_EventName;
if("_in_EventNameInDataFetchStatus" in inputs) {
this.variables._in_EventNameInDataFetchStatus = inputs._in_EventNameInDataFetchStatus;
}

}

if("In_EventStartDate" in inputs) {
this.variables.in_EventStartDateIn = inputs.In_EventStartDate;
if("_in_EventStartDateInDataFetchStatus" in inputs) {
this.variables._in_EventStartDateInDataFetchStatus = inputs._in_EventStartDateInDataFetchStatus;
}

}

if("In_EventEndDate" in inputs) {
this.variables.in_EventEndDateIn = inputs.In_EventEndDate;
if("_in_EventEndDateInDataFetchStatus" in inputs) {
this.variables._in_EventEndDateInDataFetchStatus = inputs._in_EventEndDateInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey");
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "UBTJavaScriptUtils.controller", "Connect2_LegacyShared.controller", "NavigationHandler.controller", "Connect2_OrbitMobile_MUI.entities", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Layout.MenuIcon__UpdatedOSUI.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_StepHeader.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_TopMessage.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.InputWithMaxChar.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_NavigationItem.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AdminNotes.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationItem.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_MealItem.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_HelperItem.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AddHelper.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_VehicleItem.mvc$view", "OutSystemsUI_2_23.Content.Accordion.mvc$view", "OutSystemsUI_2_23.Content.AccordionItem.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_Item.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_AccommodationPills.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_MealPills.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_PillItem.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_HelperPills.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Blocks.HostSurvey_VehiclePills.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Orbit_ConfirmationPopUp_New.mvc$view", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Orbit_FooterWithActions.mvc$view", "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$view", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTime", "Connect2_OrbitMobile_MUI.model$LocalHelperStatusRecordList", "Connect2_OrbitMobile_MUI.model$LocalHelperStatusRec", "Connect2_OrbitMobile_MUI.controller$GetHelperStatusByJSON_Name", "Connect2_OrbitMobile_MUI.model$IntegerLocalHostSurveyStepRecord", "Connect2_OrbitMobile_IS.model$GetHostSurveyResponseRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$StepPropertiesStepPropertiesStepPropertiesStepPropertiesRecord", "Connect2_OrbitMobile_MUI.model$TextTextBooleanBooleanBooleanBooleanBooleanRecord", "Connect2_OrbitMobile_MUI.model$LocalHelperRoleList", "Connect2_OrbitMobile_MUI.model$LocalHostSurveyStepRec", "Connect2_OrbitMobile_MUI.model$StepPropertiesRec", "Connect2_OrbitMobile_MUI.model$TextLocalHostSurveyStepRecordList", "Connect2_OrbitMobile_IS.model$HostSurvey_RoomItemRec", "Connect2_OrbitMobile_MUI.model$LocalHouseFloorList", "Connect2_OrbitMobile_MUI.model$LocalBedSizeList", "Connect2_OrbitMobile_MUI.model$LocalGenderPreferenceList", "Connect2_OrbitMobile_IS.model$HostSurvey_MealItemInfoRec", "Connect2_OrbitMobile_MUI.model$LocalMealTypeList", "Connect2_OrbitMobile_IS.model$HostSurvey_HelperItemInfoRec", "Connect2_OrbitMobile_MUI.model$LocalHelperStatusList", "Connect2_OrbitMobile_IS.model$HostSurvey_VehicleItemInfoRec", "Connect2_OrbitMobile_MUI.model$LocalVehicleOwnerList", "Connect2_OrbitMobile_MUI.model$LocalVehicleTypeList", "Connect2_OrbitMobile_MUI.model$HostSurvey_RoomItemList", "Connect2_OrbitMobile_MUI.model$HostSurvey_VehicleItemInfoList", "Connect2_OrbitMobile_MUI.model$HostSurvey_HelperItemInfoList", "Connect2_OrbitMobile_MUI.controller$GetPopUpInfo", "Connect2_OrbitMobile_MUI.controller$GetStepProperties", "Connect2_OrbitMobile_MUI.model$HostSurvey_MealItemInfoList", "Connect2_OrbitMobile_MUI.model$LocalHostSurveyStepRecordList", "Connect2_OrbitMobile_MUI.model$LocalHostSurveyStepRecord", "Connect2_OrbitMobile_MUI.controller$FocusOnFirstInvalidInput", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "Connect2_OrbitMobile_MUI.referencesHealth$UBTJavaScriptUtils", "Connect2_OrbitMobile_MUI.model$LocalSurveyStatusRec", "Connect2_OrbitMobile_MUI.controller$GetSurveyStatusById", "Connect2_LegacyShared.controller$FeedbackMessageAfterTransition", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.model$LocalHelperRoleRecordList", "NavigationHandler.controller$PreventNavigation", "Connect2_OrbitMobile_MUI.referencesHealth$NavigationHandler", "Connect2_OrbitMobile_MUI.model$LocalHouseFloorRecordList", "Connect2_OrbitMobile_MUI.model$LocalBedSizeRecordList", "Connect2_OrbitMobile_MUI.model$LocalSurveyStatusRecordList", "Connect2_OrbitMobile_MUI.model$LocalVehicleOwnerRecordList", "Connect2_OrbitMobile_MUI.model$LocalMealTypeRecordList", "Connect2_OrbitMobile_MUI.model$LocalVehicleTypeRecordList", "Connect2_OrbitMobile_MUI.model$LocalGenderPreferenceRecordList", "Connect2_OrbitMobile_MUI.model$LocalHouseFloorRec", "Connect2_OrbitMobile_MUI.model$LocalBedSizeRec", "Connect2_OrbitMobile_MUI.model$LocalVehicleOwnerRec", "Connect2_OrbitMobile_MUI.model$LocalMealTypeRec", "Connect2_OrbitMobile_MUI.model$LocalHelperRoleRec", "Connect2_OrbitMobile_MUI.model$LocalVehicleTypeRec", "Connect2_OrbitMobile_MUI.model$LocalGenderPreferenceRec"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, UBTJavaScriptUtilsController, Connect2_LegacySharedController, NavigationHandlerController, Connect2_OrbitMobile_MUIEntities, React, OSView, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_HostSurvey_ScreenBlock_HostSurvey_mvc_model, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_HostSurvey_ScreenBlock_HostSurvey_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, OSWidgets, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_StepHeader_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_TopMessage_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_InputWithMaxChar_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_NavigationItem_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AdminNotes_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AccommodationItem_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_MealItem_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_HelperItem_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AddHelper_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_VehicleItem_mvc_view, OutSystemsUI_2_23_Content_Accordion_mvc_view, OutSystemsUI_2_23_Content_AccordionItem_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_Item_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AccommodationPills_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_MealPills_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_HelperPills_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_VehiclePills_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Orbit_ConfirmationPopUp_New_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Orbit_FooterWithActions_mvc_view, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view) {
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
        View.displayName = "Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/Connect2_OrbitMobile_MUI.TimeFormat.js"];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_StepHeader_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_TopMessage_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_InputWithMaxChar_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_NavigationItem_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AdminNotes_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AccommodationItem_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_MealItem_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_HelperItem_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AddHelper_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_VehicleItem_mvc_view, OutSystemsUI_2_23_Content_Accordion_mvc_view, OutSystemsUI_2_23_Content_AccordionItem_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_Item_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AccommodationPills_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_MealPills_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_HelperPills_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_VehiclePills_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Orbit_ConfirmationPopUp_New_mvc_view, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Orbit_FooterWithActions_mvc_view, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_HostSurvey_ScreenBlock_HostSurvey_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_HostSurvey_ScreenBlock_HostSurvey_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_LegacyShared_Layout_OrbitTheme_Layout_Orbit_mvc_view, {
inputs: {
CustomClass: model.getCachedValue(idService.getId("EoI9XW++DEq62qW3oZ9wJg.CustomClass"), function () {
return ("orbit-detail orbit-host-survey" + ((!(model.variables.hasDataStepsVar)) ? (" orbit-host-survey-no-steps") : ("")));
}, function () {
return model.variables.hasDataStepsVar;
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
menu: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.menu,
_idProps: {
service: idService,
name: "Menu"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
headerLeft: new PlaceholderContent(function () {
return [React.createElement(Connect2_LegacyShared_Layout_MenuIcon__UpdatedOSUI_mvc_view, {
inputs: {
MenuAction: Connect2_OrbitMobile_MUIModel.staticEntities.menuAction.auto
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
_dependencies: []
})];
}),
title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-host-survey-header-title",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("6GaPFV7wYkm7T4cLz1aG6A.Value"), function () {
return ((((model.variables.in_EventNameIn) !== (""))) ? (model.variables.in_EventNameIn) : (model.variables.hostSurveyVar.surveyInfoAttr.eventNameAttr));
}, function () {
return model.variables.in_EventNameIn;
}, function () {
return model.variables.hostSurveyVar.surveyInfoAttr.eventNameAttr;
}),
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EventNameInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "font-size-s",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("_bpSIYTCKUiuRc1Z_MuKFg.Value"), function () {
return (((!(model.variables.in_EventStartDateIn.equals(OS.BuiltinFunctions.nullDate())) && !(model.variables.in_EventEndDateIn.equals(OS.BuiltinFunctions.nullDate())))) ? (((OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedDateTime$Action(model.variables.in_EventStartDateIn, false, true, false, true, false, false, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id) + " - ") + OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedDateTime$Action(model.variables.in_EventEndDateIn, false, true, false, true, false, false, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id))) : ((((!(model.variables.hostSurveyVar.surveyInfoAttr.eventStartDateTimeAttr.equals(OS.BuiltinFunctions.nullDate())) && !(model.variables.hostSurveyVar.surveyInfoAttr.eventEndDateTimeAttr.equals(OS.BuiltinFunctions.nullDate())))) ? (((OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedDateTime$Action(model.variables.hostSurveyVar.surveyInfoAttr.eventStartDateTimeAttr, false, true, false, true, false, false, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id) + " - ") + OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getFormattedDateTime$Action(model.variables.hostSurveyVar.surveyInfoAttr.eventEndDateTimeAttr, false, true, false, true, false, false, callContext).out_FormattedDateTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id))) : (""))));
}, function () {
return model.variables.in_EventStartDateIn;
}, function () {
return model.variables.in_EventEndDateIn;
}, function () {
return model.variables.hostSurveyVar.surveyInfoAttr.eventStartDateTimeAttr;
}, function () {
return model.variables.hostSurveyVar.surveyInfoAttr.eventEndDateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EventStartDateInDataFetchStatus, model.variables._in_EventEndDateInDataFetchStatus)
}))];
}),
headerRight: PlaceholderContent.Empty,
headerContent: new PlaceholderContent(function () {
return [$if(model.variables.currentStepVar.localHostSurveyStepAttr.isDataStepAttr, false, this, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_StepHeader_mvc_view, {
inputs: {
In_StepProperties: model.variables.stepPropertiesVar,
In_LocalHostStepSurvey: model.variables.currentStepVar.localHostSurveyStepAttr,
In_StepLength: model.variables.getLocalHostSurveyStepsAggr.countOut.sub(OS.BuiltinFunctions.integerToLongInteger(2)),
_in_StepLengthInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalHostSurveyStepsAggr.dataFetchStatusAttr),
In_CurrentRowNumber: (model.variables.currentStepVar.currentRowNumberAttr - 1)
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
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [$if((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.summary), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-host-survey-header-summary full-width background-neutral-0 bold color-orbit-primary-8 font-size-base",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("SZurpQBvz0CygHV52r7LQQ.Value"), function () {
return ((model.variables.isConfirmedSurveyVar) ? ("Summary Review") : ("Ready to Submit"));
}, function () {
return model.variables.isConfirmedSurveyVar;
}),
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}, function () {
return [];
})];
})];
}),
content: new PlaceholderContent(function () {
return [$if(!(model.variables.isFetchingDataVar), false, this, function () {
return [$if(((model.variables.getCurrentLocalSurveyStatusAggr.listOut.getCurrent(callContext.iterationContext).localSurveyStatusAttr.idAttr) !== (Connect2_OrbitMobile_MUIModel.staticEntities.surveyStatus.unableToHost)), false, this, function () {
return [$if((model.variables.hasDataStepsVar || model.variables.isConfirmedSurveyVar), false, this, function () {
return [$if((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.navigation), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-host-survey-navigation",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(((model.variables.getCurrentLocalSurveyStatusAggr.listOut.getCurrent(callContext.iterationContext).localSurveyStatusAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.surveyStatus.pending) || (model.variables.getCurrentLocalSurveyStatusAggr.listOut.getCurrent(callContext.iterationContext).localSurveyStatusAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.surveyStatus.sent)), false, this, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_TopMessage_mvc_view, {
inputs: {
In_Message: "Please ensure all details are correct before submission.",
In_Title: "Continue Host Survey"
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
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "padding-m background-neutral-0",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_InputWithMaxChar_mvc_view, {
inputs: {
In_MaxChar: 250
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
uuid: "13",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
mandatory: false,
style: "bold",
targetWidget: "Input_HostSurveyNote",
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Notes for Event Team",
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
placeholder_Input: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService
},
enabled: !(model.variables.isConfirmedSurveyVar),
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: false,
maxLength: 250,
prompt: "Any additional details",
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.hostSurveyVar.surveyInfoAttr.hostSurveyNoteAttr, function (value) {
model.variables.hostSurveyVar.surveyInfoAttr.hostSurveyNoteAttr = value;
}),
_idProps: {
service: idService,
name: "Input_HostSurveyNote"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.isConfirmedSurveyVar), asPrimitiveValue(model.variables.hostSurveyVar.surveyInfoAttr.hostSurveyNoteAttr)]
}))];
}, function () {
return [];
}), React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_NavigationItem_mvc_view, {
inputs: {
In_HostSurveySteps: model.getCachedValue(idService.getId("GESY4JkBfUu9LwPfe0rEjA.In_HostSurveySteps"), function () {
return OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getLocalHostSurveyStepsAggr.listOut, new Connect2_OrbitMobile_MUIModel.TextLocalHostSurveyStepRecordList(), function (source, target) {
target.adminNoteAttr = (((source.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.accommodation)) ? (model.variables.hostSurveyVar.surveyInfoAttr.accommodationSurveyNoteAttr) : ((((source.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.meal)) ? (model.variables.hostSurveyVar.surveyInfoAttr.mealSurveyNoteAttr) : ((((source.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.helper)) ? (model.variables.hostSurveyVar.surveyInfoAttr.helperSurveyNoteAttr) : ((((source.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.vehicle)) ? (model.variables.hostSurveyVar.surveyInfoAttr.vehicleSurveyNoteAttr) : (""))))))));
target.localHostSurveyStepAttr = source.localHostSurveyStepAttr;
return target;
});
}, function () {
return model.variables.getLocalHostSurveyStepsAggr.listOut;
}),
_in_HostSurveyStepsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalHostSurveyStepsAggr.dataFetchStatusAttr),
In_StepProperties: model.variables.stepPropertiesVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
navigateTo_Step$Action: function (event_HostSurveyStepIdIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_NavigationItem NavigateTo_Step");
return controller.navigateTo_SpecificStep$Action(event_HostSurveyStepIdIn, controller.callContext(eventHandlerContext));
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
uuid: "17",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}, function () {
return [];
}), $if((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.accommodation), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-host-survey-accommodation",
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(((model.variables.hostSurveyVar.surveyInfoAttr.accommodationSurveyNoteAttr) !== ("")), false, this, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AdminNotes_mvc_view, {
inputs: {
In_AdminNotes: model.variables.hostSurveyVar.surveyInfoAttr.accommodationSurveyNoteAttr
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
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "padding-m background-neutral-0 margin-top-s",
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_InputWithMaxChar_mvc_view, {
inputs: {
In_MaxChar: 250
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
uuid: "21",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
mandatory: false,
targetWidget: "Input_AccommodationNote",
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "bold",
text: ["Accommodation Notes"],
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
placeholder_Input: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService
},
enabled: !(model.variables.isConfirmedSurveyVar),
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: false,
maxLength: 250,
prompt: "Notes for Event Team",
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.hostSurveyVar.roomsAttr.accommodationNoteAttr, function (value) {
model.variables.hostSurveyVar.roomsAttr.accommodationNoteAttr = value;
}),
_idProps: {
service: idService,
name: "Input_AccommodationNote"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.isConfirmedSurveyVar), asPrimitiveValue(model.variables.hostSurveyVar.roomsAttr.accommodationNoteAttr)]
})), React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": "True"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.hostSurveyVar.roomsAttr.hostSurvey_RoomItemAttr,
style: "list list-group orbit-host-survey-list",
tag: "div",
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-host-survey-list-item",
visible: true,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.stepPropertiesVar.accommodationAttr), asPrimitiveValue(model.variables.getLocalBedSizesAggr.listOut), asPrimitiveValue(model.variables.getLocalHouseFloorsAggr.listOut), asPrimitiveValue(model.variables.roomNamesVar), asPrimitiveValue(model.variables.isConfirmedSurveyVar), asPrimitiveValue(model.variables.getLocalBedSizesAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalHouseFloorsAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalGenderPreferencesAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalGenderPreferencesAggr.listOut), asPrimitiveValue(model.variables.hostSurveyVar.roomsAttr.hostSurvey_RoomItemAttr.getCurrent(callContext.iterationContext)), asPrimitiveValue(model.variables.hostSurveyVar.roomsAttr.hostSurvey_RoomItemAttr.getCurrentRowNumber(callContext.iterationContext))]
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AccommodationItem_mvc_view, {
inputs: {
In_CurrentRowNumber: model.variables.hostSurveyVar.roomsAttr.hostSurvey_RoomItemAttr.getCurrentRowNumber(callContext.iterationContext),
In_GenderPreferences: model.getCachedValue(idService.getId("NMcogN+mpUqgfu84VvoP4A.In_GenderPreferences"), function () {
return OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getLocalGenderPreferencesAggr.listOut, new Connect2_OrbitMobile_MUIModel.LocalGenderPreferenceList(), function (source, target) {
target = source.localGenderPreferenceAttr;
return target;
});
}, function () {
return model.variables.getLocalGenderPreferencesAggr.listOut;
}),
_in_GenderPreferencesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalGenderPreferencesAggr.dataFetchStatusAttr),
In_IsSurveyConfirmed: model.variables.isConfirmedSurveyVar,
In_RoomNames: model.variables.roomNamesVar,
In_HostSurvey_Room: model.variables.hostSurveyVar.roomsAttr.hostSurvey_RoomItemAttr.getCurrent(callContext.iterationContext),
In_HouseFloors: model.getCachedValue(idService.getId("NMcogN+mpUqgfu84VvoP4A.In_HouseFloors"), function () {
return OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getLocalHouseFloorsAggr.listOut, new Connect2_OrbitMobile_MUIModel.LocalHouseFloorList(), function (source, target) {
target = source.localHouseFloorAttr;
return target;
});
}, function () {
return model.variables.getLocalHouseFloorsAggr.listOut;
}),
_in_HouseFloorsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalHouseFloorsAggr.dataFetchStatusAttr),
In_BedSize: model.getCachedValue(idService.getId("NMcogN+mpUqgfu84VvoP4A.In_BedSize"), function () {
return OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getLocalBedSizesAggr.listOut, new Connect2_OrbitMobile_MUIModel.LocalBedSizeList(), function (source, target) {
target = source.localBedSizeAttr;
return target;
});
}, function () {
return model.variables.getLocalBedSizesAggr.listOut;
}),
_in_BedSizeInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalBedSizesAggr.dataFetchStatusAttr),
In_StepProperties: model.variables.stepPropertiesVar.accommodationAttr
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
save_Failed$Action: function (disableMessageIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_AccommodationItem Save_Failed");
controller.onHandle_SaveFailed$Action(0, disableMessageIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
click_Edit$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_AccommodationItem Click_Edit");
controller.onHandle_EditItem$Action(model.variables.hostSurveyVar.roomsAttr.hostSurvey_RoomItemAttr.getCurrentRowNumber(callContext.iterationContext), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
save_Successful$Action: function (event_RoomInfoItemIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_AccommodationItem Save_Successful");
controller.onHandle_SaveItem$Action(model.variables.hostSurveyVar.roomsAttr.hostSurvey_RoomItemAttr.getCurrentRowNumber(callContext.iterationContext), event_RoomInfoItemIn, new Connect2_OrbitMobile_ISModel.HostSurvey_MealItemInfoRec(), new Connect2_OrbitMobile_ISModel.HostSurvey_HelperItemInfoRec(), new Connect2_OrbitMobile_ISModel.HostSurvey_VehicleItemInfoRec(), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
click_Delete$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_AccommodationItem Click_Delete");
controller.onHandle_DeleteItem$Action(model.variables.hostSurveyVar.roomsAttr.hostSurvey_RoomItemAttr.getCurrentRowNumber(callContext.iterationContext), controller.callContext(eventHandlerContext));
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
uuid: "27",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables.stepPropertiesVar.accommodationAttr), asPrimitiveValue(model.variables.getLocalBedSizesAggr.listOut), asPrimitiveValue(model.variables.getLocalHouseFloorsAggr.listOut), asPrimitiveValue(model.variables.roomNamesVar), asPrimitiveValue(model.variables.isConfirmedSurveyVar), asPrimitiveValue(model.variables.getLocalBedSizesAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalHouseFloorsAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalGenderPreferencesAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalGenderPreferencesAggr.listOut)]
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "text-align-right font-size-s bold background-neutral-0 padding-m margin-y-s",
visible: !(model.variables.isConfirmedSurveyVar),
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks_HostSurvey/ScreenBlock_HostSurvey/Expression onclick");
controller.onClick_AddItem$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
style: model.getCachedValue(idService.getId("4GAjMN_E80e6ajoIIkaSpw.Style"), function () {
return (((model.variables.stepPropertiesVar.accommodationAttr.isEditAttr && model.variables.stepPropertiesVar.accommodationAttr.hasDataAttr)) ? ("text-neutral-7") : ("color-orbit-primary-7"));
}, function () {
return model.variables.stepPropertiesVar.accommodationAttr.isEditAttr;
}, function () {
return model.variables.stepPropertiesVar.accommodationAttr.hasDataAttr;
}),
value: ("+ Add " + model.variables.currentStepVar.localHostSurveyStepAttr.addLabelAttr),
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}, function () {
return [];
}), $if((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.meal), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-host-survey-meal",
visible: true,
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(((model.variables.hostSurveyVar.surveyInfoAttr.mealSurveyNoteAttr) !== ("")), false, this, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AdminNotes_mvc_view, {
inputs: {
In_AdminNotes: model.variables.hostSurveyVar.surveyInfoAttr.mealSurveyNoteAttr
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
uuid: "31",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "full-width padding-m margin-top-s background-neutral-0",
visible: true,
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bold",
visible: true,
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Enter preferred meals"), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "font-size-s margin-top-m",
visible: true,
_idProps: {
service: idService,
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Please make sure you tick which meal is your preference."), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-top-l",
visible: true,
_idProps: {
service: idService,
uuid: "35"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_InputWithMaxChar_mvc_view, {
inputs: {
In_MaxChar: 250
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
uuid: "36",
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
mandatory: false,
targetWidget: "TextArea_MealNote",
_idProps: {
service: idService,
uuid: "37"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "bold",
text: ["Meal Notes"],
_idProps: {
service: idService,
uuid: "38"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
placeholder_Input: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.TextArea, {
_validationProps: {
validationService: validationService
},
enabled: !(model.variables.isConfirmedSurveyVar),
gridProperties: {
classes: "OSFillParent"
},
mandatory: false,
maxLength: 250,
prompt: "Notes for Event Team",
style: "form-control",
textLines: 3,
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.hostSurveyVar.mealsAttr.mealNoteAttr, function (value) {
model.variables.hostSurveyVar.mealsAttr.mealNoteAttr = value;
}),
_idProps: {
service: idService,
name: "TextArea_MealNote"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.isConfirmedSurveyVar), asPrimitiveValue(model.variables.hostSurveyVar.mealsAttr.mealNoteAttr)]
}))), React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": "True"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.hostSurveyVar.mealsAttr.mealItemInfoAttr,
style: "list list-group orbit-host-survey-list",
tag: "div",
_idProps: {
service: idService,
uuid: "40"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-host-survey-list-item",
visible: true,
_idProps: {
service: idService,
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.isConfirmedSurveyVar), asPrimitiveValue(model.variables.hostSurveyVar.mealsAttr.mealItemInfoAttr.getCurrentRowNumber(callContext.iterationContext)), asPrimitiveValue(model.variables.hostSurveyVar.mealsAttr.mealItemInfoAttr.getCurrent(callContext.iterationContext)), asPrimitiveValue(model.variables.stepPropertiesVar.mealsAttr), asPrimitiveValue(model.variables.getLocalMealTypesAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalMealTypesAggr.listOut)]
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_MealItem_mvc_view, {
inputs: {
In_MealTypes: model.getCachedValue(idService.getId("68YYn6N4r0CDRkM8EfXh1A.In_MealTypes"), function () {
return OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getLocalMealTypesAggr.listOut, new Connect2_OrbitMobile_MUIModel.LocalMealTypeList(), function (source, target) {
target = source.localMealTypeAttr;
return target;
});
}, function () {
return model.variables.getLocalMealTypesAggr.listOut;
}),
_in_MealTypesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalMealTypesAggr.dataFetchStatusAttr),
In_StepProperties: model.variables.stepPropertiesVar.mealsAttr,
In_HostSurvey_Meal: model.variables.hostSurveyVar.mealsAttr.mealItemInfoAttr.getCurrent(callContext.iterationContext),
In_IsSurveyConfirmed: model.variables.isConfirmedSurveyVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
click_Edit$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_MealItem Click_Edit");
controller.onHandle_EditItem$Action(model.variables.hostSurveyVar.mealsAttr.mealItemInfoAttr.getCurrentRowNumber(callContext.iterationContext), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
mealDataReset$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_MealItem MealDataReset");
controller.toggleSingleResetMealData$Action(OS.BuiltinFunctions.integerToLongInteger(model.variables.hostSurveyVar.mealsAttr.mealItemInfoAttr.getCurrentRowNumber(callContext.iterationContext)), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
save_Failed$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_MealItem Save_Failed");
controller.onHandle_SaveFailed$Action(model.variables.hostSurveyVar.mealsAttr.mealItemInfoAttr.getCurrentRowNumber(callContext.iterationContext), false, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
save_Successful$Action: function (event_MealInfoItemIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_MealItem Save_Successful");
controller.onHandle_SaveItem$Action(model.variables.hostSurveyVar.mealsAttr.mealItemInfoAttr.getCurrentRowNumber(callContext.iterationContext), new Connect2_OrbitMobile_ISModel.HostSurvey_RoomItemRec(), event_MealInfoItemIn, new Connect2_OrbitMobile_ISModel.HostSurvey_HelperItemInfoRec(), new Connect2_OrbitMobile_ISModel.HostSurvey_VehicleItemInfoRec(), controller.callContext(eventHandlerContext));
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
uuid: "42",
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}, callContext, idService, "2")
},
_dependencies: [asPrimitiveValue(model.variables.isConfirmedSurveyVar), asPrimitiveValue(model.variables.stepPropertiesVar.mealsAttr), asPrimitiveValue(model.variables.getLocalMealTypesAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalMealTypesAggr.listOut)]
}))];
}, function () {
return [];
}), $if((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.helper), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-host-survey-helper",
visible: true,
_idProps: {
service: idService,
uuid: "43"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(((model.variables.hostSurveyVar.surveyInfoAttr.helperSurveyNoteAttr) !== ("")), false, this, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AdminNotes_mvc_view, {
inputs: {
In_AdminNotes: model.variables.hostSurveyVar.surveyInfoAttr.helperSurveyNoteAttr
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
uuid: "44",
alias: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "padding-m background-neutral-0 margin-top-s",
visible: true,
_idProps: {
service: idService,
uuid: "45"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_InputWithMaxChar_mvc_view, {
inputs: {
In_MaxChar: 250
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
uuid: "46",
alias: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
mandatory: false,
targetWidget: "Input_HelperNote",
_idProps: {
service: idService,
uuid: "47"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "bold",
text: ["Helper Notes"],
_idProps: {
service: idService,
uuid: "48"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
placeholder_Input: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService
},
enabled: !(model.variables.isConfirmedSurveyVar),
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: false,
maxLength: 250,
prompt: "Notes for Event Team",
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.hostSurveyVar.helpersAttr.helperNoteAttr, function (value) {
model.variables.hostSurveyVar.helpersAttr.helperNoteAttr = value;
}),
_idProps: {
service: idService,
name: "Input_HelperNote"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.isConfirmedSurveyVar), asPrimitiveValue(model.variables.hostSurveyVar.helpersAttr.helperNoteAttr)]
})), React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": "True"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.hostSurveyVar.helpersAttr.helperItemInfoAttr,
style: "list list-group orbit-host-survey-list",
tag: "div",
_idProps: {
service: idService,
uuid: "50"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-host-survey-list-item",
visible: true,
_idProps: {
service: idService,
uuid: "51"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.stepPropertiesVar.helpersAttr), asPrimitiveValue(model.variables.getLocalHelperRolesAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalHelperRolesAggr.listOut), asPrimitiveValue(model.variables.hostSurveyVar.helpersAttr.helperItemInfoAttr.getCurrent(callContext.iterationContext)), asPrimitiveValue(model.variables.hostSurveyVar.helpersAttr.helperItemInfoAttr.getCurrentRowNumber(callContext.iterationContext)), asPrimitiveValue(model.variables.filteredHelperRolesVar), asPrimitiveValue(model.variables.isConfirmedSurveyVar)]
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_HelperItem_mvc_view, {
inputs: {
In_IsSurveyConfirmed: model.variables.isConfirmedSurveyVar,
In_FilteredHelperRoles: model.variables.filteredHelperRolesVar,
In_CurrentRowNumber: model.variables.hostSurveyVar.helpersAttr.helperItemInfoAttr.getCurrentRowNumber(callContext.iterationContext),
In_HelperRoles: model.getCachedValue(idService.getId("IGV4IXuPdkWRwtsEzHgUIw.In_HelperRoles"), function () {
return OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getLocalHelperRolesAggr.listOut, new Connect2_OrbitMobile_MUIModel.LocalHelperRoleList(), function (source, target) {
target = source.localHelperRoleAttr;
return target;
});
}, function () {
return model.variables.getLocalHelperRolesAggr.listOut;
}),
_in_HelperRolesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalHelperRolesAggr.dataFetchStatusAttr),
In_HostSurvey_Helper: model.variables.hostSurveyVar.helpersAttr.helperItemInfoAttr.getCurrent(callContext.iterationContext),
In_StepProperties: model.variables.stepPropertiesVar.helpersAttr
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
save_Failed$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_HelperItem Save_Failed");
controller.onHandle_SaveFailed$Action(0, false, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
click_Edit$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_HelperItem Click_Edit");
controller.onHandle_EditItem$Action(model.variables.hostSurveyVar.helpersAttr.helperItemInfoAttr.getCurrentRowNumber(callContext.iterationContext), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
click_Delete$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_HelperItem Click_Delete");
controller.onHandle_DeleteItem$Action(model.variables.hostSurveyVar.helpersAttr.helperItemInfoAttr.getCurrentRowNumber(callContext.iterationContext), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
save_Successful$Action: function (event_HelperInfoItemIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_HelperItem Save_Successful");
controller.onHandle_SaveItem$Action(model.variables.hostSurveyVar.helpersAttr.helperItemInfoAttr.getCurrentRowNumber(callContext.iterationContext), new Connect2_OrbitMobile_ISModel.HostSurvey_RoomItemRec(), new Connect2_OrbitMobile_ISModel.HostSurvey_MealItemInfoRec(), event_HelperInfoItemIn, new Connect2_OrbitMobile_ISModel.HostSurvey_VehicleItemInfoRec(), controller.callContext(eventHandlerContext));
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
uuid: "52",
alias: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}, callContext, idService, "3")
},
_dependencies: [asPrimitiveValue(model.variables.stepPropertiesVar.helpersAttr), asPrimitiveValue(model.variables.getLocalHelperRolesAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalHelperRolesAggr.listOut), asPrimitiveValue(model.variables.filteredHelperRolesVar), asPrimitiveValue(model.variables.isConfirmedSurveyVar)]
}), $if(model.variables.isAddingHelperVar, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-top-s",
visible: true,
_idProps: {
service: idService,
uuid: "53"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AddHelper_mvc_view, {
inputs: {
In_HelperRoles: model.variables.filteredHelperRolesVar,
In_EventId: model.variables.in_EventIdIn,
_in_EventIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EventIdInDataFetchStatus),
In_TrySave: model.variables.stepPropertiesVar.helpersAttr.trySaveAttr,
In_HelperStatus: model.getCachedValue(idService.getId("2V2ljeipe0yLmhUBGesxEw.In_HelperStatus"), function () {
return OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getLocalHelperStatusAggr.listOut, new Connect2_OrbitMobile_MUIModel.LocalHelperStatusList(), function (source, target) {
target = source.localHelperStatusAttr;
return target;
});
}, function () {
return model.variables.getLocalHelperStatusAggr.listOut;
}),
_in_HelperStatusInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalHelperStatusAggr.dataFetchStatusAttr),
In_AlreadyAddedHelpers: model.getCachedValue(idService.getId("2V2ljeipe0yLmhUBGesxEw.In_AlreadyAddedHelpers"), function () {
return OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.hostSurveyVar.helpersAttr.helperItemInfoAttr, new OS.DataTypes.LongIntegerList(), function (source, target) {
target = source.memberIdAttr;
return target;
});
}, function () {
return model.variables.hostSurveyVar.helpersAttr.helperItemInfoAttr;
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
save_Failed$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_AddHelper Save_Failed");
controller.onHandle_SaveFailed$Action(0, false, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
save_Successful$Action: function (event_HelperItemInfoIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_AddHelper Save_Successful");
controller.onHandle_AddHelpers$Action(event_HelperItemInfoIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
click_Delete$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_AddHelper Click_Delete");
controller.onHandle_DeleteSearchHelper$Action(controller.callContext(eventHandlerContext));
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
uuid: "54",
alias: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}, function () {
return [];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "text-align-right font-size-s bold background-neutral-0 padding-m margin-y-s",
visible: !(model.variables.isConfirmedSurveyVar),
_idProps: {
service: idService,
uuid: "55"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks_HostSurvey/ScreenBlock_HostSurvey/Expression onclick");
controller.onClick_AddItem$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
style: model.getCachedValue(idService.getId("U3bCqkCJIkq37LLECRpqLQ.Style"), function () {
return ((((model.variables.stepPropertiesVar.helpersAttr.isEditAttr && model.variables.stepPropertiesVar.helpersAttr.hasDataAttr) || model.variables.isAddingHelperVar)) ? ("text-neutral-7") : ("color-orbit-primary-7"));
}, function () {
return model.variables.stepPropertiesVar.helpersAttr.isEditAttr;
}, function () {
return model.variables.stepPropertiesVar.helpersAttr.hasDataAttr;
}, function () {
return model.variables.isAddingHelperVar;
}),
value: ("+ Add " + model.variables.currentStepVar.localHostSurveyStepAttr.addLabelAttr),
_idProps: {
service: idService,
uuid: "56"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}, function () {
return [];
}), $if((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.vehicle), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-host-survey-vehicle",
visible: true,
_idProps: {
service: idService,
uuid: "57"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(((model.variables.hostSurveyVar.surveyInfoAttr.vehicleSurveyNoteAttr) !== ("")), false, this, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AdminNotes_mvc_view, {
inputs: {
In_AdminNotes: model.variables.hostSurveyVar.surveyInfoAttr.vehicleSurveyNoteAttr
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
uuid: "58",
alias: "17"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "font-size-s padding-y-m margin-y-s background-neutral-0",
visible: true,
_idProps: {
service: idService,
uuid: "59"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-bottom-m padding-x-m display-flex flex-direction-row align-items-center justify-content-space-between",
visible: true,
_idProps: {
service: idService,
uuid: "60"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "61"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Do you, or your guests & helpers, have vehicles to help transport guests within the locality?"), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-switch-cont",
visible: true,
_idProps: {
service: idService,
uuid: "62"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Switch, {
_validationProps: {
validationService: validationService
},
enabled: true,
style: "switch orbit-switch",
variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, model.variables.hostSurveyVar.vehiclesAttr.hasVehiclesAttr, function (value) {
model.variables.hostSurveyVar.vehiclesAttr.hasVehiclesAttr = value;
}),
_idProps: {
service: idService,
name: "Switch_HasVehicles"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "padding-x-m",
visible: true,
_idProps: {
service: idService,
uuid: "64"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Let your guest know the type of vehicles you have to collect them when they arrive.")), $if(model.variables.hostSurveyVar.vehiclesAttr.hasVehiclesAttr, false, this, function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": "True"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.hostSurveyVar.vehiclesAttr.vehicleItemInfoAttr,
style: "list list-group orbit-host-survey-list",
tag: "div",
_idProps: {
service: idService,
uuid: "65"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-host-survey-list-item",
visible: true,
_idProps: {
service: idService,
uuid: "66"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.getLocalVehicleOwnersAggr.listOut), asPrimitiveValue(model.variables.getLocalVehicleOwnersAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalVehicleTypesAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalVehicleTypesAggr.listOut), asPrimitiveValue(model.variables.isConfirmedSurveyVar), asPrimitiveValue(model.variables.hostSurveyVar.vehiclesAttr.vehicleItemInfoAttr.getCurrent(callContext.iterationContext)), asPrimitiveValue(model.variables.hostSurveyVar.vehiclesAttr.vehicleItemInfoAttr.getCurrentRowNumber(callContext.iterationContext)), asPrimitiveValue(model.variables.stepPropertiesVar.vehiclesAttr)]
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_VehicleItem_mvc_view, {
inputs: {
In_StepProperties: model.variables.stepPropertiesVar.vehiclesAttr,
In_CurrentRowNumber: model.variables.hostSurveyVar.vehiclesAttr.vehicleItemInfoAttr.getCurrentRowNumber(callContext.iterationContext),
In_IsSurveyConfirmed: model.variables.isConfirmedSurveyVar,
In_VehicleType: model.getCachedValue(idService.getId("NSsb3X90MU+pPgjD7Sdnmw.In_VehicleType"), function () {
return OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getLocalVehicleTypesAggr.listOut, new Connect2_OrbitMobile_MUIModel.LocalVehicleTypeList(), function (source, target) {
target = source.localVehicleTypeAttr;
return target;
});
}, function () {
return model.variables.getLocalVehicleTypesAggr.listOut;
}),
_in_VehicleTypeInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalVehicleTypesAggr.dataFetchStatusAttr),
In_HostSurvey_Vehicle: model.variables.hostSurveyVar.vehiclesAttr.vehicleItemInfoAttr.getCurrent(callContext.iterationContext),
In_OwnerType: model.getCachedValue(idService.getId("NSsb3X90MU+pPgjD7Sdnmw.In_OwnerType"), function () {
return OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getLocalVehicleOwnersAggr.listOut, new Connect2_OrbitMobile_MUIModel.LocalVehicleOwnerList(), function (source, target) {
target = source.localVehicleOwnerAttr;
return target;
});
}, function () {
return model.variables.getLocalVehicleOwnersAggr.listOut;
}),
_in_OwnerTypeInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalVehicleOwnersAggr.dataFetchStatusAttr)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
save_Failed$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_VehicleItem Save_Failed");
controller.onHandle_SaveFailed$Action(0, false, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
save_Successful$Action: function (event_VehicleItemIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_VehicleItem Save_Successful");
controller.onHandle_SaveItem$Action(model.variables.hostSurveyVar.vehiclesAttr.vehicleItemInfoAttr.getCurrentRowNumber(callContext.iterationContext), new Connect2_OrbitMobile_ISModel.HostSurvey_RoomItemRec(), new Connect2_OrbitMobile_ISModel.HostSurvey_MealItemInfoRec(), new Connect2_OrbitMobile_ISModel.HostSurvey_HelperItemInfoRec(), event_VehicleItemIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
click_Delete$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_VehicleItem Click_Delete");
controller.onHandle_DeleteItem$Action(model.variables.hostSurveyVar.vehiclesAttr.vehicleItemInfoAttr.getCurrentRowNumber(callContext.iterationContext), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
click_Edit$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Blocks/HostSurvey_VehicleItem Click_Edit");
controller.onHandle_EditItem$Action(model.variables.hostSurveyVar.vehiclesAttr.vehicleItemInfoAttr.getCurrentRowNumber(callContext.iterationContext), controller.callContext(eventHandlerContext));
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
uuid: "67",
alias: "18"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}, callContext, idService, "4")
},
_dependencies: [asPrimitiveValue(model.variables.getLocalVehicleOwnersAggr.listOut), asPrimitiveValue(model.variables.getLocalVehicleOwnersAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalVehicleTypesAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalVehicleTypesAggr.listOut), asPrimitiveValue(model.variables.isConfirmedSurveyVar), asPrimitiveValue(model.variables.stepPropertiesVar.vehiclesAttr)]
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "text-align-right font-size-s bold background-neutral-0 padding-m margin-y-s",
visible: !(model.variables.isConfirmedSurveyVar),
_idProps: {
service: idService,
uuid: "68"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks_HostSurvey/ScreenBlock_HostSurvey/Expression onclick");
controller.onClick_AddItem$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
style: model.getCachedValue(idService.getId("Xkc4TRgpB0KfxhByIzDFMg.Style"), function () {
return (((model.variables.stepPropertiesVar.vehiclesAttr.isEditAttr && model.variables.stepPropertiesVar.vehiclesAttr.hasDataAttr)) ? ("text-neutral-7") : ("color-orbit-primary-7"));
}, function () {
return model.variables.stepPropertiesVar.vehiclesAttr.isEditAttr;
}, function () {
return model.variables.stepPropertiesVar.vehiclesAttr.hasDataAttr;
}),
value: ("+ Add " + model.variables.currentStepVar.localHostSurveyStepAttr.addLabelAttr),
_idProps: {
service: idService,
uuid: "69"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}, function () {
return [];
}))];
}, function () {
return [];
}), $if((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.summary), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-host-survey-summary",
visible: true,
_idProps: {
service: idService,
uuid: "70"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_TopMessage_mvc_view, {
inputs: {
In_Message: model.getCachedValue(idService.getId("y8m4oFQhl0GsaMu_NSFu8g.In_Message"), function () {
return ((!(model.variables.isConfirmedSurveyVar)) ? ("Please ensure all details are correct before submission.") : ("If you require further updates to your Host Survey, please contact the Orbit Helpdesk."));
}, function () {
return model.variables.isConfirmedSurveyVar;
}),
In_Title: model.getCachedValue(idService.getId("y8m4oFQhl0GsaMu_NSFu8g.In_Title"), function () {
return ((model.variables.isConfirmedSurveyVar) ? ("") : ("Summary Review"));
}, function () {
return model.variables.isConfirmedSurveyVar;
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
uuid: "71",
alias: "19"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), $if(((model.variables.hostSurveyVar.surveyInfoAttr.hostSurveyNoteAttr) !== ("")), false, this, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_TopMessage_mvc_view, {
inputs: {
In_Title: "Notes for Event Team",
In_Message: model.variables.hostSurveyVar.surveyInfoAttr.hostSurveyNoteAttr
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
uuid: "72",
alias: "20"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), React.createElement(OutSystemsUI_2_23_Content_Accordion_mvc_view, {
inputs: {
MultipleItems: true,
ExtendedClass: "orbit-host-survey-accordion"
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
uuid: "73",
alias: "21"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [$if((model.variables.hostSurveyVar.surveyInfoAttr.accommodationSurveyAttr && model.variables.hostSurveyVar.surveyInfoAttr.accommodationSurveyUpdateAttr), false, this, function () {
return [React.createElement(OutSystemsUI_2_23_Content_AccordionItem_mvc_view, {
inputs: {
IconPosition: Connect2_OrbitMobile_MUIModel.staticEntities.accordionIconPosition.right,
StartsExpanded: true,
Icon: Connect2_OrbitMobile_MUIModel.staticEntities.accordionIconType.caret
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
uuid: "74",
alias: "22"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
title: new PlaceholderContent(function () {
return ["Accommodation"];
}),
customIcon: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "text-align-right color-orbit-primary-7 font-size-s",
visible: !(model.variables.isConfirmedSurveyVar),
_idProps: {
service: idService,
uuid: "75"
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks_HostSurvey/ScreenBlock_HostSurvey/Container onclick");
return controller.navigateTo_SpecificStep$Action(Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.accommodation, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
style: "bold display-flex flex-direction-row align-items-center justify-content-flex-end",
visible: true,
_idProps: {
service: idService,
uuid: "76"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-edit",
visible: true,
_idProps: {
service: idService,
uuid: "77"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
style: "margin-left-s",
text: ["Edit"],
_idProps: {
service: idService,
uuid: "78"
},
_widgetRecordProvider: widgetsRecordProvider
}))), $if(!(model.variables.hostSurveyVar.roomsAttr.hostSurvey_RoomItemAttr.isEmpty), false, this, function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": "True"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.hostSurveyVar.roomsAttr.hostSurvey_RoomItemAttr,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "79"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-host-survey-list-item",
visible: true,
_idProps: {
service: idService,
uuid: "80"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.getLocalGenderPreferencesAggr.listOut), asPrimitiveValue(model.variables.getLocalGenderPreferencesAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalHouseFloorsAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalHouseFloorsAggr.listOut), asPrimitiveValue(model.variables.isConfirmedSurveyVar), asPrimitiveValue(model.variables.hostSurveyVar.roomsAttr.hostSurvey_RoomItemAttr.getCurrent(callContext.iterationContext)), asPrimitiveValue(model.variables.hostSurveyVar.roomsAttr.hostSurvey_RoomItemAttr.getCurrentRowNumber(callContext.iterationContext))]
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_Item_mvc_view, {
inputs: {
In_Title: ("Room " + ((model.variables.hostSurveyVar.roomsAttr.hostSurvey_RoomItemAttr.getCurrentRowNumber(callContext.iterationContext) + 1)).toString()),
In_HasEdit: false,
In_HasDelete: false,
In_HasPlaceholder: false
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
uuid: "81",
alias: "23"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Status: PlaceholderContent.Empty,
placeholder_Content: new PlaceholderContent(function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_AccommodationPills_mvc_view, {
inputs: {
In_IsDisabled: model.variables.isConfirmedSurveyVar,
In_HouseFloors: model.getCachedValue(idService.getId("gAKHTwfB3UugBjZU9RPfsQ.In_HouseFloors"), function () {
return OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getLocalHouseFloorsAggr.listOut, new Connect2_OrbitMobile_MUIModel.LocalHouseFloorList(), function (source, target) {
target = source.localHouseFloorAttr;
return target;
});
}, function () {
return model.variables.getLocalHouseFloorsAggr.listOut;
}),
_in_HouseFloorsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalHouseFloorsAggr.dataFetchStatusAttr),
In_HostSurvey_Room: model.variables.hostSurveyVar.roomsAttr.hostSurvey_RoomItemAttr.getCurrent(callContext.iterationContext),
In_GenderPreferences: model.getCachedValue(idService.getId("gAKHTwfB3UugBjZU9RPfsQ.In_GenderPreferences"), function () {
return OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getLocalGenderPreferencesAggr.listOut, new Connect2_OrbitMobile_MUIModel.LocalGenderPreferenceList(), function (source, target) {
target = source.localGenderPreferenceAttr;
return target;
});
}, function () {
return model.variables.getLocalGenderPreferencesAggr.listOut;
}),
_in_GenderPreferencesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalGenderPreferencesAggr.dataFetchStatusAttr)
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
uuid: "82",
alias: "24"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.getLocalGenderPreferencesAggr.listOut), asPrimitiveValue(model.variables.hostSurveyVar.roomsAttr.hostSurvey_RoomItemAttr.getCurrent(callContext.iterationContext)), asPrimitiveValue(model.variables.getLocalGenderPreferencesAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalHouseFloorsAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalHouseFloorsAggr.listOut), asPrimitiveValue(model.variables.isConfirmedSurveyVar)]
}))];
}, callContext, idService, "5")
},
_dependencies: [asPrimitiveValue(model.variables.getLocalGenderPreferencesAggr.listOut), asPrimitiveValue(model.variables.getLocalGenderPreferencesAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalHouseFloorsAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalHouseFloorsAggr.listOut), asPrimitiveValue(model.variables.isConfirmedSurveyVar)]
})];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "font-size-s",
visible: true,
_idProps: {
service: idService,
uuid: "83"
},
_widgetRecordProvider: widgetsRecordProvider
}, "No room data added.")];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.getLocalGenderPreferencesAggr.listOut), asPrimitiveValue(model.variables.getLocalGenderPreferencesAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalHouseFloorsAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalHouseFloorsAggr.listOut), asPrimitiveValue(model.variables.hostSurveyVar.roomsAttr.hostSurvey_RoomItemAttr), asPrimitiveValue(model.variables.isConfirmedSurveyVar)]
})];
}, function () {
return [];
}), $if((model.variables.hostSurveyVar.surveyInfoAttr.mealSurveyAttr && model.variables.hostSurveyVar.surveyInfoAttr.mealSurveyUpdateAttr), false, this, function () {
return [React.createElement(OutSystemsUI_2_23_Content_AccordionItem_mvc_view, {
inputs: {
StartsExpanded: true,
Icon: Connect2_OrbitMobile_MUIModel.staticEntities.accordionIconType.caret,
IconPosition: Connect2_OrbitMobile_MUIModel.staticEntities.accordionIconPosition.right
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
uuid: "84",
alias: "25"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
title: new PlaceholderContent(function () {
return ["Meal Options"];
}),
customIcon: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "text-align-right color-orbit-primary-7 font-size-s",
visible: !(model.variables.isConfirmedSurveyVar),
_idProps: {
service: idService,
uuid: "85"
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks_HostSurvey/ScreenBlock_HostSurvey/Container onclick");
return controller.navigateTo_SpecificStep$Action(Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.meal, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
style: "bold display-flex flex-direction-row align-items-center justify-content-flex-end",
visible: true,
_idProps: {
service: idService,
uuid: "86"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-edit",
visible: true,
_idProps: {
service: idService,
uuid: "87"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
style: "margin-left-s",
text: ["Edit"],
_idProps: {
service: idService,
uuid: "88"
},
_widgetRecordProvider: widgetsRecordProvider
}))), $if(!(model.variables.hostSurveyVar.mealsAttr.mealItemInfoAttr.isEmpty), false, this, function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": "True"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.hostSurveyVar.mealsAttr.mealItemInfoAttr,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "89"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-host-survey-list-item",
visible: true,
_idProps: {
service: idService,
uuid: "90"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.isConfirmedSurveyVar), asPrimitiveValue(model.variables.hostSurveyVar.mealsAttr.mealItemInfoAttr.getCurrent(callContext.iterationContext))]
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_Item_mvc_view, {
inputs: {
In_Title: model.variables.hostSurveyVar.mealsAttr.mealItemInfoAttr.getCurrent(callContext.iterationContext).milestoneDescriptionAttr,
In_HasPlaceholder: false,
In_HasEdit: false,
In_HasDelete: false
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
uuid: "91",
alias: "26"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Status: PlaceholderContent.Empty,
placeholder_Content: new PlaceholderContent(function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_MealPills_mvc_view, {
inputs: {
In_HostSurvey_Meal: model.variables.hostSurveyVar.mealsAttr.mealItemInfoAttr.getCurrent(callContext.iterationContext),
In_IsDisabled: model.variables.isConfirmedSurveyVar
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
uuid: "92",
alias: "27"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.isConfirmedSurveyVar), asPrimitiveValue(model.variables.hostSurveyVar.mealsAttr.mealItemInfoAttr.getCurrent(callContext.iterationContext))]
}))];
}, callContext, idService, "6")
},
_dependencies: [asPrimitiveValue(model.variables.isConfirmedSurveyVar)]
})];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "font-size-s",
visible: true,
_idProps: {
service: idService,
uuid: "93"
},
_widgetRecordProvider: widgetsRecordProvider
}, "No meal data added.")];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.hostSurveyVar.mealsAttr.mealItemInfoAttr), asPrimitiveValue(model.variables.isConfirmedSurveyVar)]
})];
}, function () {
return [];
}), $if(model.variables.hostSurveyVar.surveyInfoAttr.helperSurveyAttr, false, this, function () {
return [React.createElement(OutSystemsUI_2_23_Content_AccordionItem_mvc_view, {
inputs: {
StartsExpanded: true,
IconPosition: Connect2_OrbitMobile_MUIModel.staticEntities.accordionIconPosition.right,
Icon: Connect2_OrbitMobile_MUIModel.staticEntities.accordionIconType.caret
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
uuid: "94",
alias: "28"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
title: new PlaceholderContent(function () {
return ["Helpers"];
}),
customIcon: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "text-align-right color-orbit-primary-7 font-size-s",
visible: !(model.variables.isConfirmedSurveyVar),
_idProps: {
service: idService,
uuid: "95"
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks_HostSurvey/ScreenBlock_HostSurvey/Container onclick");
return controller.navigateTo_SpecificStep$Action(Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.helper, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
style: "bold display-flex flex-direction-row align-items-center justify-content-flex-end",
visible: true,
_idProps: {
service: idService,
uuid: "96"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-edit",
visible: true,
_idProps: {
service: idService,
uuid: "97"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
style: "margin-left-s",
text: ["Edit"],
_idProps: {
service: idService,
uuid: "98"
},
_widgetRecordProvider: widgetsRecordProvider
}))), $if(!(model.variables.hostSurveyVar.helpersAttr.helperItemInfoAttr.isEmpty), false, this, function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": "True"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.hostSurveyVar.helpersAttr.helperItemInfoAttr,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "99"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-host-survey-list-item",
visible: true,
_idProps: {
service: idService,
uuid: "100"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.getLocalHelperRolesAggr.listOut), asPrimitiveValue(model.variables.isConfirmedSurveyVar), asPrimitiveValue(model.variables.getLocalHelperRolesAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalHelperStatusAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalHelperStatusAggr.listOut), asPrimitiveValue(model.variables.hostSurveyVar.helpersAttr.helperItemInfoAttr.getCurrent(callContext.iterationContext)), asPrimitiveValue(model.variables.hostSurveyVar.helpersAttr.helperItemInfoAttr.getCurrentRowNumber(callContext.iterationContext))]
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_Item_mvc_view, {
inputs: {
In_HasEdit: false,
In_Title: ("Helper " + ((model.variables.hostSurveyVar.helpersAttr.helperItemInfoAttr.getCurrentRowNumber(callContext.iterationContext) + 1)).toString()),
In_HasPlaceholder: true,
In_HasDelete: false
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
uuid: "101",
alias: "29"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Status: new PlaceholderContent(function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_PillItem_mvc_view, {
inputs: {
In_ExtendedStyle: model.getCachedValue(idService.getId("0POq_BKOC0GWlUs83R0stA.In_ExtendedStyle"), function () {
return (((OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getHelperStatusByJSON_Name$Action(model.variables.hostSurveyVar.helpersAttr.helperItemInfoAttr.getCurrent(callContext.iterationContext).helperStatusAttr, model.variables.getLocalHelperStatusAggr.listOut, callContext).out_HelperStatusOut;
}, OS.DataTypes.DataTypes.Record, callContext.id).idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.helperStatus.approved)) ? ("background-color: var(--orbit-green-2); color: var(--orbit-green-6);") : ("background-color: var(--orbit-orange-2); color: var(--orbit-orange-8);"));
}, function () {
return model.variables.hostSurveyVar.helpersAttr.helperItemInfoAttr.getCurrent(callContext.iterationContext).helperStatusAttr;
}, function () {
return model.variables.getLocalHelperStatusAggr.listOut;
}),
_in_ExtendedStyleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalHelperStatusAggr.dataFetchStatusAttr),
In_IconClass: model.getCachedValue(idService.getId("0POq_BKOC0GWlUs83R0stA.In_IconClass"), function () {
return (((OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getHelperStatusByJSON_Name$Action(model.variables.hostSurveyVar.helpersAttr.helperItemInfoAttr.getCurrent(callContext.iterationContext).helperStatusAttr, model.variables.getLocalHelperStatusAggr.listOut, callContext).out_HelperStatusOut;
}, OS.DataTypes.DataTypes.Record, callContext.id).idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.helperStatus.approved)) ? ("orbit-icon-circle-check") : ((((OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getHelperStatusByJSON_Name$Action(model.variables.hostSurveyVar.helpersAttr.helperItemInfoAttr.getCurrent(callContext.iterationContext).helperStatusAttr, model.variables.getLocalHelperStatusAggr.listOut, callContext).out_HelperStatusOut;
}, OS.DataTypes.DataTypes.Record, callContext.id).idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.helperStatus.pending)) ? ("orbit-icon-circle-warning") : ("orbit-icon-warning"))));
}, function () {
return model.variables.hostSurveyVar.helpersAttr.helperItemInfoAttr.getCurrent(callContext.iterationContext).helperStatusAttr;
}, function () {
return model.variables.getLocalHelperStatusAggr.listOut;
}),
_in_IconClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalHelperStatusAggr.dataFetchStatusAttr),
In_IsSmallIcon: true,
In_PillText: model.getCachedValue(idService.getId("0POq_BKOC0GWlUs83R0stA.In_PillText"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return Connect2_OrbitMobile_MUIController.default.getHelperStatusByJSON_Name$Action(model.variables.hostSurveyVar.helpersAttr.helperItemInfoAttr.getCurrent(callContext.iterationContext).helperStatusAttr, model.variables.getLocalHelperStatusAggr.listOut, callContext).out_HelperStatusOut;
}, OS.DataTypes.DataTypes.Record, callContext.id).labelAttr;
}, function () {
return model.variables.hostSurveyVar.helpersAttr.helperItemInfoAttr.getCurrent(callContext.iterationContext).helperStatusAttr;
}, function () {
return model.variables.getLocalHelperStatusAggr.listOut;
}),
_in_PillTextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalHelperStatusAggr.dataFetchStatusAttr)
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
uuid: "102",
alias: "30"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
placeholder_Content: new PlaceholderContent(function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_HelperPills_mvc_view, {
inputs: {
In_IsDisabled: model.variables.isConfirmedSurveyVar,
In_HelperRoles: model.getCachedValue(idService.getId("TmAgJx4TQkq6iWqB1a4BSA.In_HelperRoles"), function () {
return OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getLocalHelperRolesAggr.listOut, new Connect2_OrbitMobile_MUIModel.LocalHelperRoleList(), function (source, target) {
target = source.localHelperRoleAttr;
return target;
});
}, function () {
return model.variables.getLocalHelperRolesAggr.listOut;
}),
_in_HelperRolesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalHelperRolesAggr.dataFetchStatusAttr),
In_HostSurvey_Helper: model.variables.hostSurveyVar.helpersAttr.helperItemInfoAttr.getCurrent(callContext.iterationContext)
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
uuid: "103",
alias: "31"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.getLocalHelperRolesAggr.listOut), asPrimitiveValue(model.variables.isConfirmedSurveyVar), asPrimitiveValue(model.variables.getLocalHelperRolesAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalHelperStatusAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalHelperStatusAggr.listOut), asPrimitiveValue(model.variables.hostSurveyVar.helpersAttr.helperItemInfoAttr.getCurrent(callContext.iterationContext))]
}))];
}, callContext, idService, "7")
},
_dependencies: [asPrimitiveValue(model.variables.getLocalHelperRolesAggr.listOut), asPrimitiveValue(model.variables.isConfirmedSurveyVar), asPrimitiveValue(model.variables.getLocalHelperRolesAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalHelperStatusAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalHelperStatusAggr.listOut)]
})];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "font-size-s",
visible: true,
_idProps: {
service: idService,
uuid: "104"
},
_widgetRecordProvider: widgetsRecordProvider
}, "No helper data added.")];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.getLocalHelperRolesAggr.listOut), asPrimitiveValue(model.variables.getLocalHelperRolesAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalHelperStatusAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalHelperStatusAggr.listOut), asPrimitiveValue(model.variables.hostSurveyVar.helpersAttr.helperItemInfoAttr), asPrimitiveValue(model.variables.isConfirmedSurveyVar)]
})];
}, function () {
return [];
}), $if(model.variables.hostSurveyVar.surveyInfoAttr.vehicleSurveyAttr, false, this, function () {
return [React.createElement(OutSystemsUI_2_23_Content_AccordionItem_mvc_view, {
inputs: {
IconPosition: Connect2_OrbitMobile_MUIModel.staticEntities.accordionIconPosition.right,
StartsExpanded: true,
Icon: Connect2_OrbitMobile_MUIModel.staticEntities.accordionIconType.caret
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
name: "Vehicles",
alias: "32"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
title: new PlaceholderContent(function () {
return ["Vehicles"];
}),
customIcon: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "text-align-right color-orbit-primary-7 font-size-s",
visible: !(model.variables.isConfirmedSurveyVar),
_idProps: {
service: idService,
uuid: "106"
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_ScreenBlocks_HostSurvey/ScreenBlock_HostSurvey/Container onclick");
return controller.navigateTo_SpecificStep$Action(Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.vehicle, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
style: "bold display-flex flex-direction-row align-items-center justify-content-flex-end",
visible: true,
_idProps: {
service: idService,
uuid: "107"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon orbit-icon-edit",
visible: true,
_idProps: {
service: idService,
uuid: "108"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
style: "margin-left-s",
text: ["Edit"],
_idProps: {
service: idService,
uuid: "109"
},
_widgetRecordProvider: widgetsRecordProvider
}))), $if((!(model.variables.hostSurveyVar.vehiclesAttr.vehicleItemInfoAttr.isEmpty) && model.variables.hostSurveyVar.vehiclesAttr.hasVehiclesAttr), false, this, function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"disable-virtualization": "True"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.hostSurveyVar.vehiclesAttr.vehicleItemInfoAttr,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "110"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-host-survey-list-item",
visible: true,
_idProps: {
service: idService,
uuid: "111"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.getLocalVehicleTypesAggr.listOut), asPrimitiveValue(model.variables.getLocalVehicleTypesAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalVehicleOwnersAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalVehicleOwnersAggr.listOut), asPrimitiveValue(model.variables.isConfirmedSurveyVar), asPrimitiveValue(model.variables.hostSurveyVar.vehiclesAttr.vehicleItemInfoAttr.getCurrent(callContext.iterationContext)), asPrimitiveValue(model.variables.hostSurveyVar.vehiclesAttr.vehicleItemInfoAttr.getCurrentRowNumber(callContext.iterationContext))]
}, React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_Item_mvc_view, {
inputs: {
In_HasPlaceholder: false,
In_HasDelete: false,
In_HasEdit: false,
In_Title: ("Vehicle " + ((model.variables.hostSurveyVar.vehiclesAttr.vehicleItemInfoAttr.getCurrentRowNumber(callContext.iterationContext) + 1)).toString())
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
uuid: "112",
alias: "33"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Status: PlaceholderContent.Empty,
placeholder_Content: new PlaceholderContent(function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Blocks_HostSurvey_VehiclePills_mvc_view, {
inputs: {
In_IsDisabled: model.variables.isConfirmedSurveyVar,
In_VehicleOwners: model.getCachedValue(idService.getId("N3XgqleJlEmTedKHIhtAAA.In_VehicleOwners"), function () {
return OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getLocalVehicleOwnersAggr.listOut, new Connect2_OrbitMobile_MUIModel.LocalVehicleOwnerList(), function (source, target) {
target = source.localVehicleOwnerAttr;
return target;
});
}, function () {
return model.variables.getLocalVehicleOwnersAggr.listOut;
}),
_in_VehicleOwnersInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalVehicleOwnersAggr.dataFetchStatusAttr),
In_HostSurvey_Vehicle: model.variables.hostSurveyVar.vehiclesAttr.vehicleItemInfoAttr.getCurrent(callContext.iterationContext),
In_VehicleTypes: model.getCachedValue(idService.getId("N3XgqleJlEmTedKHIhtAAA.In_VehicleTypes"), function () {
return OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.getLocalVehicleTypesAggr.listOut, new Connect2_OrbitMobile_MUIModel.LocalVehicleTypeList(), function (source, target) {
target = source.localVehicleTypeAttr;
return target;
});
}, function () {
return model.variables.getLocalVehicleTypesAggr.listOut;
}),
_in_VehicleTypesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalVehicleTypesAggr.dataFetchStatusAttr)
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
uuid: "113",
alias: "34"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.getLocalVehicleTypesAggr.listOut), asPrimitiveValue(model.variables.hostSurveyVar.vehiclesAttr.vehicleItemInfoAttr.getCurrent(callContext.iterationContext)), asPrimitiveValue(model.variables.getLocalVehicleTypesAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalVehicleOwnersAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalVehicleOwnersAggr.listOut), asPrimitiveValue(model.variables.isConfirmedSurveyVar)]
}))];
}, callContext, idService, "8")
},
_dependencies: [asPrimitiveValue(model.variables.getLocalVehicleTypesAggr.listOut), asPrimitiveValue(model.variables.getLocalVehicleTypesAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalVehicleOwnersAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalVehicleOwnersAggr.listOut), asPrimitiveValue(model.variables.isConfirmedSurveyVar)]
})];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "font-size-s",
visible: true,
_idProps: {
service: idService,
uuid: "114"
},
_widgetRecordProvider: widgetsRecordProvider
}, "No vehicle data added.")];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.getLocalVehicleTypesAggr.listOut), asPrimitiveValue(model.variables.getLocalVehicleTypesAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalVehicleOwnersAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalVehicleOwnersAggr.listOut), asPrimitiveValue(model.variables.hostSurveyVar.vehiclesAttr.hasVehiclesAttr), asPrimitiveValue(model.variables.hostSurveyVar.vehiclesAttr.vehicleItemInfoAttr), asPrimitiveValue(model.variables.isConfirmedSurveyVar)]
})];
}, function () {
return [];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.getLocalVehicleTypesAggr.listOut), asPrimitiveValue(model.variables.getLocalVehicleOwnersAggr.listOut), asPrimitiveValue(model.variables.getLocalHelperRolesAggr.listOut), asPrimitiveValue(model.variables.getLocalHelperStatusAggr.listOut), asPrimitiveValue(model.variables.getLocalGenderPreferencesAggr.listOut), asPrimitiveValue(model.variables.getLocalVehicleTypesAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalVehicleOwnersAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalHelperRolesAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalHelperStatusAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalGenderPreferencesAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalHouseFloorsAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalHouseFloorsAggr.listOut), asPrimitiveValue(model.variables.isConfirmedSurveyVar), asPrimitiveValue(model.variables.hostSurveyVar.vehiclesAttr.hasVehiclesAttr), asPrimitiveValue(model.variables.hostSurveyVar.vehiclesAttr.vehicleItemInfoAttr), asPrimitiveValue(model.variables.hostSurveyVar.helpersAttr.helperItemInfoAttr), asPrimitiveValue(model.variables.hostSurveyVar.mealsAttr.mealItemInfoAttr), asPrimitiveValue(model.variables.hostSurveyVar.roomsAttr.hostSurvey_RoomItemAttr), asPrimitiveValue(model.variables.hostSurveyVar.surveyInfoAttr.vehicleSurveyAttr), asPrimitiveValue(model.variables.hostSurveyVar.surveyInfoAttr.helperSurveyAttr), asPrimitiveValue(model.variables.hostSurveyVar.surveyInfoAttr.mealSurveyUpdateAttr), asPrimitiveValue(model.variables.hostSurveyVar.surveyInfoAttr.mealSurveyAttr), asPrimitiveValue(model.variables.hostSurveyVar.surveyInfoAttr.accommodationSurveyUpdateAttr), asPrimitiveValue(model.variables.hostSurveyVar.surveyInfoAttr.accommodationSurveyAttr)]
}))];
}, function () {
return [];
})];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "padding-m background-neutral-0",
visible: true,
_idProps: {
service: idService,
uuid: "115"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "There is no setup for this household yet.",
_idProps: {
service: idService,
uuid: "116"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})];
}, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_view, {
inputs: {
IsUrgent: false,
Message: "This Survey is no longer available for you. Please check again later or contact the Orbit Helpdesk if you have any questions."
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
uuid: "117",
alias: "35"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
}, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_view, {
inputs: {
In_SkeletonLoadingId: Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.hostSurvey
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
uuid: "118",
alias: "36"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}), React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Orbit_ConfirmationPopUp_New_mvc_view, {
inputs: {
In_ShowPopUp: model.variables.popUpInfoVar.isShowPopup_CancelAttr,
In_Message: model.variables.popUpInfoVar.messageAttr,
In_Title: model.variables.popUpInfoVar.titleAttr
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
close$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Generic_Blocks/Orbit_ConfirmationPopUp_New Close");
controller.onHandle_PopUp_Close$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
secondaryAction$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Generic_Blocks/Orbit_ConfirmationPopUp_New SecondaryAction");
return controller.onHandle_PopUp_Secondary$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
primaryAction$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Generic_Blocks/Orbit_ConfirmationPopUp_New PrimaryAction");
return controller.onHandle_PopUp_Primary$Action(controller.callContext(eventHandlerContext));
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
name: "PopUp_Cancel",
alias: "37"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Secondary: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "Back",
_idProps: {
service: idService,
uuid: "120"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
placeholder_Primary: new PlaceholderContent(function () {
return ["Yes"];
})
},
_dependencies: []
}), React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Orbit_ConfirmationPopUp_New_mvc_view, {
inputs: {
In_Title: model.variables.popUpInfoVar.titleAttr,
In_ShowPopUp: model.variables.popUpInfoVar.isShowPopup_DeleteAttr,
In_Message: model.variables.popUpInfoVar.messageAttr
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
secondaryAction$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Generic_Blocks/Orbit_ConfirmationPopUp_New SecondaryAction");
return controller.onHandle_PopUp_Secondary$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
close$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Generic_Blocks/Orbit_ConfirmationPopUp_New Close");
controller.onHandle_PopUp_Close$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
primaryAction$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Generic_Blocks/Orbit_ConfirmationPopUp_New PrimaryAction");
return controller.onHandle_PopUp_Primary$Action(controller.callContext(eventHandlerContext));
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
name: "PopUp_Delete",
alias: "38"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Secondary: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "Cancel",
_idProps: {
service: idService,
uuid: "122"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
placeholder_Primary: new PlaceholderContent(function () {
return ["Yes"];
})
},
_dependencies: []
}), React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Orbit_ConfirmationPopUp_New_mvc_view, {
inputs: {
In_Message: model.variables.popUpInfoVar.messageAttr,
In_Title: model.variables.popUpInfoVar.titleAttr,
In_ShowPopUp: model.variables.popUpInfoVar.isShowPopup_NoInfoAttr
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
primaryAction$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Generic_Blocks/Orbit_ConfirmationPopUp_New PrimaryAction");
return controller.onHandle_PopUp_Primary$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
close$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Generic_Blocks/Orbit_ConfirmationPopUp_New Close");
controller.onHandle_PopUp_Close$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
secondaryAction$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Generic_Blocks/Orbit_ConfirmationPopUp_New SecondaryAction");
return controller.onHandle_PopUp_Secondary$Action(controller.callContext(eventHandlerContext));
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
name: "PopUp_NoInfo",
alias: "39"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Secondary: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "Cancel",
_idProps: {
service: idService,
uuid: "124"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
placeholder_Primary: new PlaceholderContent(function () {
return ["Yes"];
})
},
_dependencies: []
}), React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Orbit_ConfirmationPopUp_New_mvc_view, {
inputs: {
In_ShowPopUp: model.variables.popUpInfoVar.isShowPopup_ReturnNavigationAttr,
In_Message: model.variables.popUpInfoVar.messageAttr,
In_Title: model.variables.popUpInfoVar.titleAttr
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
primaryAction$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Generic_Blocks/Orbit_ConfirmationPopUp_New PrimaryAction");
return controller.onHandle_PopUp_Primary$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
secondaryAction$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Generic_Blocks/Orbit_ConfirmationPopUp_New SecondaryAction");
return controller.onHandle_PopUp_Secondary$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
close$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Generic_Blocks/Orbit_ConfirmationPopUp_New Close");
controller.onHandle_PopUp_Close$Action(controller.callContext(eventHandlerContext));
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
name: "PopUp_ReturnNavigation",
alias: "40"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Secondary: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "Cancel",
_idProps: {
service: idService,
uuid: "126"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
placeholder_Primary: new PlaceholderContent(function () {
return ["Yes"];
})
},
_dependencies: []
}), React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Orbit_ConfirmationPopUp_New_mvc_view, {
inputs: {
In_ShowPopUp: model.variables.popUpInfoVar.isShowPopup_ReturnBackAttr,
In_Message: model.variables.popUpInfoVar.messageAttr,
In_Title: model.variables.popUpInfoVar.titleAttr
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
close$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Generic_Blocks/Orbit_ConfirmationPopUp_New Close");
controller.onHandle_PopUp_Close$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
secondaryAction$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Generic_Blocks/Orbit_ConfirmationPopUp_New SecondaryAction");
return controller.onHandle_PopUp_Secondary$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
primaryAction$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Generic_Blocks/Orbit_ConfirmationPopUp_New PrimaryAction");
return controller.onHandle_PopUp_Primary$Action(controller.callContext(eventHandlerContext));
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
name: "PopUp_ReturnBack",
alias: "41"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Secondary: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "Discard Survey",
_idProps: {
service: idService,
uuid: "128"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
placeholder_Primary: new PlaceholderContent(function () {
return ["Yes"];
})
},
_dependencies: []
})];
}),
bottomBar: new PlaceholderContent(function () {
return [$if(((!(model.variables.isConfirmedSurveyVar) && model.variables.hasDataStepsVar) && ((model.variables.getCurrentLocalSurveyStatusAggr.listOut.getCurrent(callContext.iterationContext).localSurveyStatusAttr.idAttr) !== (Connect2_OrbitMobile_MUIModel.staticEntities.surveyStatus.unableToHost))), false, this, function () {
return [React.createElement(Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Orbit_FooterWithActions_mvc_view, {
inputs: {
In_IsSmallButtons: false,
In_HasSecondaryButton: true,
In_HasTopShadow: true,
In_ExtendedClass_Primary: model.getCachedValue(idService.getId("chwJDVWyXkColHjizgEWcQ.In_ExtendedClass_Primary"), function () {
return ((model.variables.currentStepVar.localHostSurveyStepAttr.isDataStepAttr) ? ("") : ((((((((model.variables.hostSurveyVar.surveyInfoAttr.accommodationSurveyAttr && model.variables.hostSurveyVar.surveyInfoAttr.accommodationSurveyUpdateAttr) && model.variables.stepPropertiesVar.accommodationAttr.isEditAttr) || ((model.variables.hostSurveyVar.surveyInfoAttr.mealSurveyAttr && model.variables.hostSurveyVar.surveyInfoAttr.mealSurveyUpdateAttr) && model.variables.stepPropertiesVar.mealsAttr.isEditAttr)) || (model.variables.hostSurveyVar.surveyInfoAttr.helperSurveyAttr && model.variables.stepPropertiesVar.helpersAttr.isEditAttr)) || (model.variables.hostSurveyVar.surveyInfoAttr.vehicleSurveyAttr && model.variables.stepPropertiesVar.vehiclesAttr.isEditAttr))) ? (" orbit-host-survey-footer-btn-disabled") : (""))));
}, function () {
return model.variables.currentStepVar.localHostSurveyStepAttr.isDataStepAttr;
}, function () {
return model.variables.hostSurveyVar.surveyInfoAttr.accommodationSurveyAttr;
}, function () {
return model.variables.hostSurveyVar.surveyInfoAttr.accommodationSurveyUpdateAttr;
}, function () {
return model.variables.stepPropertiesVar.accommodationAttr.isEditAttr;
}, function () {
return model.variables.hostSurveyVar.surveyInfoAttr.mealSurveyAttr;
}, function () {
return model.variables.hostSurveyVar.surveyInfoAttr.mealSurveyUpdateAttr;
}, function () {
return model.variables.stepPropertiesVar.mealsAttr.isEditAttr;
}, function () {
return model.variables.hostSurveyVar.surveyInfoAttr.helperSurveyAttr;
}, function () {
return model.variables.stepPropertiesVar.helpersAttr.isEditAttr;
}, function () {
return model.variables.hostSurveyVar.surveyInfoAttr.vehicleSurveyAttr;
}, function () {
return model.variables.stepPropertiesVar.vehiclesAttr.isEditAttr;
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
click_PrimaryButton$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Generic_Blocks/Orbit_FooterWithActions Click_PrimaryButton");
return controller.onHandle_PrimaryButton$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
click_SecondaryButton$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Orbit_Generic_Blocks/Orbit_FooterWithActions Click_SecondaryButton");
return controller.onHandle_SecondaryButton$Action(controller.callContext(eventHandlerContext));
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
uuid: "129",
alias: "42"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Secondary: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("WwL0ztRE9UCFbW_aqI7qsQ.Value"), function () {
return ((!(model.variables.currentStepVar.localHostSurveyStepAttr.isDataStepAttr)) ? ((((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.navigation)) ? ("Close") : ("Back"))) : ((((((((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.accommodation) && (model.variables.stepPropertiesVar.accommodationAttr.isEditAttr && !(model.variables.hostSurveyVar.roomsAttr.hostSurvey_RoomItemAttr.isEmpty))) || ((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.meal) && (model.variables.stepPropertiesVar.mealsAttr.isEditAttr && !(model.variables.hostSurveyVar.mealsAttr.mealItemInfoAttr.isEmpty)))) || ((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.helper) && (model.variables.stepPropertiesVar.helpersAttr.isEditAttr && model.variables.isAddingHelperVar))) || ((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.vehicle) && (model.variables.stepPropertiesVar.vehiclesAttr.isEditAttr && !(model.variables.hostSurveyVar.vehiclesAttr.vehicleItemInfoAttr.isEmpty))))) ? ("Cancel") : ("Back"))));
}, function () {
return model.variables.currentStepVar.localHostSurveyStepAttr.isDataStepAttr;
}, function () {
return model.variables.currentStepVar.localHostSurveyStepAttr.idAttr;
}, function () {
return model.variables.stepPropertiesVar.accommodationAttr.isEditAttr;
}, function () {
return model.variables.hostSurveyVar.roomsAttr.hostSurvey_RoomItemAttr.isEmpty;
}, function () {
return model.variables.stepPropertiesVar.mealsAttr.isEditAttr;
}, function () {
return model.variables.hostSurveyVar.mealsAttr.mealItemInfoAttr.isEmpty;
}, function () {
return model.variables.stepPropertiesVar.helpersAttr.isEditAttr;
}, function () {
return model.variables.isAddingHelperVar;
}, function () {
return model.variables.stepPropertiesVar.vehiclesAttr.isEditAttr;
}, function () {
return model.variables.hostSurveyVar.vehiclesAttr.vehicleItemInfoAttr.isEmpty;
}),
_idProps: {
service: idService,
uuid: "130"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
placeholder_Primary: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("8lL2868T5UusBX1Hjunnow.Value"), function () {
return ((((((((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.accommodation) && model.variables.stepPropertiesVar.accommodationAttr.isEditAttr) && model.variables.stepPropertiesVar.accommodationAttr.hasDataAttr) || (((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.meal) && model.variables.stepPropertiesVar.mealsAttr.isEditAttr) && model.variables.stepPropertiesVar.mealsAttr.hasDataAttr)) || (((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.helper) && model.variables.stepPropertiesVar.helpersAttr.isEditAttr) && (model.variables.stepPropertiesVar.helpersAttr.hasDataAttr || model.variables.isAddingHelperVar))) || (((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.vehicle) && model.variables.stepPropertiesVar.vehiclesAttr.isEditAttr) && model.variables.stepPropertiesVar.vehiclesAttr.hasDataAttr))) ? ("Save") : (((model.variables.currentStepVar.localHostSurveyStepAttr.isDataStepAttr) ? ("Next") : ("Submit"))));
}, function () {
return model.variables.currentStepVar.localHostSurveyStepAttr.idAttr;
}, function () {
return model.variables.stepPropertiesVar.accommodationAttr.isEditAttr;
}, function () {
return model.variables.stepPropertiesVar.accommodationAttr.hasDataAttr;
}, function () {
return model.variables.stepPropertiesVar.mealsAttr.isEditAttr;
}, function () {
return model.variables.stepPropertiesVar.mealsAttr.hasDataAttr;
}, function () {
return model.variables.stepPropertiesVar.helpersAttr.isEditAttr;
}, function () {
return model.variables.stepPropertiesVar.helpersAttr.hasDataAttr;
}, function () {
return model.variables.isAddingHelperVar;
}, function () {
return model.variables.stepPropertiesVar.vehiclesAttr.isEditAttr;
}, function () {
return model.variables.stepPropertiesVar.vehiclesAttr.hasDataAttr;
}, function () {
return model.variables.currentStepVar.localHostSurveyStepAttr.isDataStepAttr;
}),
_idProps: {
service: idService,
uuid: "131"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.isAddingHelperVar), asPrimitiveValue(model.variables.hostSurveyVar.vehiclesAttr.vehicleItemInfoAttr.isEmpty), asPrimitiveValue(model.variables.hostSurveyVar.mealsAttr.mealItemInfoAttr.isEmpty), asPrimitiveValue(model.variables.hostSurveyVar.roomsAttr.hostSurvey_RoomItemAttr.isEmpty), asPrimitiveValue(model.variables.stepPropertiesVar.vehiclesAttr.hasDataAttr), asPrimitiveValue(model.variables.stepPropertiesVar.vehiclesAttr.isEditAttr), asPrimitiveValue(model.variables.stepPropertiesVar.helpersAttr.hasDataAttr), asPrimitiveValue(model.variables.stepPropertiesVar.helpersAttr.isEditAttr), asPrimitiveValue(model.variables.stepPropertiesVar.mealsAttr.hasDataAttr), asPrimitiveValue(model.variables.stepPropertiesVar.mealsAttr.isEditAttr), asPrimitiveValue(model.variables.stepPropertiesVar.accommodationAttr.hasDataAttr), asPrimitiveValue(model.variables.stepPropertiesVar.accommodationAttr.isEditAttr), asPrimitiveValue(model.variables.currentStepVar.localHostSurveyStepAttr.idAttr), asPrimitiveValue(model.variables.currentStepVar.localHostSurveyStepAttr.isDataStepAttr)]
})];
}, function () {
return [];
})];
}),
commonUI_Elements: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.commonUI_Elements,
_idProps: {
service: idService,
name: "CommonUI_Elements"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
}
}), React.createElement(NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
backNavigation$Action: function (backNavigationEventIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "NavigationHandler/BackNavigationHandler BackNavigation");
return controller.onHandle_BackNavigation$Action(backNavigationEventIn, controller.callContext(eventHandlerContext));
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
uuid: "133",
alias: "43"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.mvc$controller", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "Connect2_OrbitMobile_IS.model", "UBTJavaScriptUtils.controller", "Connect2_LegacyShared.controller", "NavigationHandler.controller", "Connect2_OrbitMobile_MUI.entities", "Connect2_OrbitMobile_MUI.languageResources", "Connect2_OrbitMobile_MUI.clientVariables", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.mvc$debugger", "Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", "Connect2_OrbitMobile_MUI.controller$GetFormattedDateTime", "Connect2_OrbitMobile_MUI.model$LocalHelperStatusRecordList", "Connect2_OrbitMobile_MUI.model$LocalHelperStatusRec", "Connect2_OrbitMobile_MUI.controller$GetHelperStatusByJSON_Name", "Connect2_OrbitMobile_MUI.model$IntegerLocalHostSurveyStepRecord", "Connect2_OrbitMobile_IS.model$GetHostSurveyResponseRec", "Connect2_OrbitMobile_MUI.referencesHealth", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_OrbitMobile_IS", "Connect2_OrbitMobile_MUI.model$StepPropertiesStepPropertiesStepPropertiesStepPropertiesRecord", "Connect2_OrbitMobile_MUI.model$TextTextBooleanBooleanBooleanBooleanBooleanRecord", "Connect2_OrbitMobile_MUI.model$LocalHelperRoleList", "Connect2_OrbitMobile_MUI.model$LocalHostSurveyStepRec", "Connect2_OrbitMobile_MUI.model$StepPropertiesRec", "Connect2_OrbitMobile_MUI.model$TextLocalHostSurveyStepRecordList", "Connect2_OrbitMobile_IS.model$HostSurvey_RoomItemRec", "Connect2_OrbitMobile_MUI.model$LocalHouseFloorList", "Connect2_OrbitMobile_MUI.model$LocalBedSizeList", "Connect2_OrbitMobile_MUI.model$LocalGenderPreferenceList", "Connect2_OrbitMobile_IS.model$HostSurvey_MealItemInfoRec", "Connect2_OrbitMobile_MUI.model$LocalMealTypeList", "Connect2_OrbitMobile_IS.model$HostSurvey_HelperItemInfoRec", "Connect2_OrbitMobile_MUI.model$LocalHelperStatusList", "Connect2_OrbitMobile_IS.model$HostSurvey_VehicleItemInfoRec", "Connect2_OrbitMobile_MUI.model$LocalVehicleOwnerList", "Connect2_OrbitMobile_MUI.model$LocalVehicleTypeList", "Connect2_OrbitMobile_MUI.model$HostSurvey_RoomItemList", "Connect2_OrbitMobile_MUI.model$HostSurvey_VehicleItemInfoList", "Connect2_OrbitMobile_MUI.model$HostSurvey_HelperItemInfoList", "Connect2_OrbitMobile_MUI.controller$GetPopUpInfo", "Connect2_OrbitMobile_MUI.controller$GetStepProperties", "Connect2_OrbitMobile_MUI.model$HostSurvey_MealItemInfoList", "Connect2_OrbitMobile_MUI.model$LocalHostSurveyStepRecordList", "Connect2_OrbitMobile_MUI.model$LocalHostSurveyStepRecord", "Connect2_OrbitMobile_MUI.controller$FocusOnFirstInvalidInput", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "Connect2_OrbitMobile_MUI.referencesHealth$UBTJavaScriptUtils", "Connect2_OrbitMobile_MUI.model$LocalSurveyStatusRec", "Connect2_OrbitMobile_MUI.controller$GetSurveyStatusById", "Connect2_LegacyShared.controller$FeedbackMessageAfterTransition", "Connect2_OrbitMobile_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.model$LocalHelperRoleRecordList", "NavigationHandler.controller$PreventNavigation", "Connect2_OrbitMobile_MUI.referencesHealth$NavigationHandler", "Connect2_OrbitMobile_MUI.model$LocalHouseFloorRecordList", "Connect2_OrbitMobile_MUI.model$LocalBedSizeRecordList", "Connect2_OrbitMobile_MUI.model$LocalSurveyStatusRecordList", "Connect2_OrbitMobile_MUI.model$LocalVehicleOwnerRecordList", "Connect2_OrbitMobile_MUI.model$LocalMealTypeRecordList", "Connect2_OrbitMobile_MUI.model$LocalVehicleTypeRecordList", "Connect2_OrbitMobile_MUI.model$LocalGenderPreferenceRecordList", "Connect2_OrbitMobile_MUI.model$LocalHouseFloorRec", "Connect2_OrbitMobile_MUI.model$LocalBedSizeRec", "Connect2_OrbitMobile_MUI.model$LocalVehicleOwnerRec", "Connect2_OrbitMobile_MUI.model$LocalMealTypeRec", "Connect2_OrbitMobile_MUI.model$LocalHelperRoleRec", "Connect2_OrbitMobile_MUI.model$LocalVehicleTypeRec", "Connect2_OrbitMobile_MUI.model$LocalGenderPreferenceRec"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, Connect2_OrbitMobile_ISModel, UBTJavaScriptUtilsController, Connect2_LegacySharedController, NavigationHandlerController, Connect2_OrbitMobile_MUIEntities, Connect2_OrbitMobile_MUILanguageResources, Connect2_OrbitMobile_MUIClientVariables, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_HostSurvey_ScreenBlock_HostSurvey_mvc_Debugger, Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_HostSurvey_ScreenBlock_HostSurvey_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
getLocalHouseFloors$AggrRefresh: -1,
getLocalBedSizes$AggrRefresh: -1,
getCurrentLocalSurveyStatus$AggrRefresh: -1,
getLocalHelperStatus$AggrRefresh: -1,
getLocalVehicleOwners$AggrRefresh: -1,
getLocalMealTypes$AggrRefresh: -1,
getLocalHostSurveySteps$AggrRefresh: -1,
getLocalHelperRoles$AggrRefresh: -1,
getLocalVehicleTypes$AggrRefresh: -1,
getLocalGenderPreferences$AggrRefresh: -1,
getHostSurvey$DataActRefresh: -1
};
this.dataFetchDependentsGraph = {
getLocalHouseFloors$AggrRefresh: [],
getLocalBedSizes$AggrRefresh: [],
getCurrentLocalSurveyStatus$AggrRefresh: [],
getLocalHelperStatus$AggrRefresh: [],
getLocalVehicleOwners$AggrRefresh: [],
getLocalMealTypes$AggrRefresh: [],
getLocalHostSurveySteps$AggrRefresh: [],
getLocalHelperRoles$AggrRefresh: [],
getLocalVehicleTypes$AggrRefresh: [],
getLocalGenderPreferences$AggrRefresh: [],
getHostSurvey$DataActRefresh: ["getLocalHostSurveySteps$AggrRefresh"]
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions
Controller.prototype.postHostSurvey$ServerAction = function (getHostSurveyIn, callContext) {
var controller = this.controller;
var inputs = {
GetHostSurvey: OS.DataConversion.ServerDataConverter.to(getHostSurveyIn, OS.DataTypes.DataTypes.Record)
};
return controller.callServerAction("PostHostSurvey", "screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks_HostSurvey/ScreenBlock_HostSurvey/ActionPostHostSurvey", "cg+b5mTvHLHBcz4+80NvVg", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey$rssespaceconnect2_orbitmobile_bl_ActionPostHostSurvey"))();
executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, OS.DataTypes.DataTypes.Boolean);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey$rssespaceconnect2_orbitmobile_bl_ActionPostHostSurvey", [{
name: "Response",
attrName: "responseOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);

// Aggregates and Data Actions
Controller.prototype.getLocalHouseFloors$AggrRefresh = function (maxRecords) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext();

var executeQuery = null;
if(OS.NativeHelper.isRunningOnNative()) {
executeQuery = function () {
var targetListType = Connect2_OrbitMobile_MUIModel.LocalHouseFloorRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 4;
}


var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENLocalHouseFloor\".\"Id\" o0, \"ENLocalHouseFloor\".\"Label\" o1, \"ENLocalHouseFloor\".\"JSON_Name\" o2, \"ENLocalHouseFloor\".\"Order\" o3";
} else {
selectSql += "\"ENLocalHouseFloor\".\"Id\" o0, \"ENLocalHouseFloor\".\"Label\" o1, \"ENLocalHouseFloor\".\"JSON_Name\" o2, \"ENLocalHouseFloor\".\"Order\" o3";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_hq9_LocalHouseFloor\" \"ENLocalHouseFloor\"";
orderBySql += " ORDER BY \"ENLocalHouseFloor\".\"Order\" ASC ";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, Connect2_OrbitMobile_MUIModel.LocalHouseFloorRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"localHouseFloorAttr",
];
return OS.DataConversion.LocalStorageConverter.from(r, targetListType.getItemType(), indexRef, attrOrder);

}, argsList).then(function (resultList) {
result.list = resultList;
}).then(function () {
}).then(function () {
return result;
});
};
} else {
executeQuery = function () {
if(!(maxRecords)) {
maxRecords = 4;
}

return new Promise(function (resolve, reject) {
require(["Connect2_OrbitMobile_MUI.aggregates.IDB"], function (Connect2_OrbitMobile_MUIAggregates_IDB) {
return Connect2_OrbitMobile_MUIAggregates_IDB.executeOrbit_ScreenBlocks_HostSurvey_ScreenBlock_HostSurvey$Block$getLocalHouseFloorsAggr(maxRecords).then(function (result) {
resolve(result);
}).catch(function (e) {
reject(e);
});
});
});
};
}

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Si6GYXhGq0KwwQ76NwGvRg:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ScreenDataSets.Si6GYXhGq0KwwQ76NwGvRg:kiVJPikAeBBJj06CiAvYXw", "Connect2_OrbitMobile_MUI", "GetLocalHouseFloors", "NRNodes.WebScreenDataSet", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_HostSurvey/ScreenBlock_HostSurvey/GetLocalHouseFloors");
return controller.executeScreenClientAggregate(executeQuery, function () {
return model.variables.getLocalHouseFloorsAggr;
}, function () {
});

}, function () {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Si6GYXhGq0KwwQ76NwGvRg", callContext.id);
controller.popDebuggerContext(callContext);

});
};
Controller.prototype.getLocalBedSizes$AggrRefresh = function (maxRecords) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext();

var executeQuery = null;
if(OS.NativeHelper.isRunningOnNative()) {
executeQuery = function () {
var targetListType = Connect2_OrbitMobile_MUIModel.LocalBedSizeRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 5;
}


var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENLocalBedSize\".\"Id\" o0, \"ENLocalBedSize\".\"Label\" o1, \"ENLocalBedSize\".\"JSON_Name\" o2, \"ENLocalBedSize\".\"Order\" o3";
} else {
selectSql += "\"ENLocalBedSize\".\"Id\" o0, \"ENLocalBedSize\".\"Label\" o1, \"ENLocalBedSize\".\"JSON_Name\" o2, \"ENLocalBedSize\".\"Order\" o3";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_hq9_LocalBedSize\" \"ENLocalBedSize\"";
orderBySql += " ORDER BY \"ENLocalBedSize\".\"Order\" ASC ";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, Connect2_OrbitMobile_MUIModel.LocalBedSizeRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"localBedSizeAttr",
];
return OS.DataConversion.LocalStorageConverter.from(r, targetListType.getItemType(), indexRef, attrOrder);

}, argsList).then(function (resultList) {
result.list = resultList;
}).then(function () {
}).then(function () {
return result;
});
};
} else {
executeQuery = function () {
if(!(maxRecords)) {
maxRecords = 5;
}

return new Promise(function (resolve, reject) {
require(["Connect2_OrbitMobile_MUI.aggregates.IDB"], function (Connect2_OrbitMobile_MUIAggregates_IDB) {
return Connect2_OrbitMobile_MUIAggregates_IDB.executeOrbit_ScreenBlocks_HostSurvey_ScreenBlock_HostSurvey$Block$getLocalBedSizesAggr(maxRecords).then(function (result) {
resolve(result);
}).catch(function (e) {
reject(e);
});
});
});
};
}

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:cUOlai+Zv0eCIzff3V1f5w:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ScreenDataSets.cUOlai+Zv0eCIzff3V1f5w:7h15DAkMbyr5ejLenobZJA", "Connect2_OrbitMobile_MUI", "GetLocalBedSizes", "NRNodes.WebScreenDataSet", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_HostSurvey/ScreenBlock_HostSurvey/GetLocalBedSizes");
return controller.executeScreenClientAggregate(executeQuery, function () {
return model.variables.getLocalBedSizesAggr;
}, function () {
});

}, function () {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:cUOlai+Zv0eCIzff3V1f5w", callContext.id);
controller.popDebuggerContext(callContext);

});
};
Controller.prototype.getCurrentLocalSurveyStatus$AggrRefresh = function (maxRecords) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext();

var executeQuery = null;
if(OS.NativeHelper.isRunningOnNative()) {
executeQuery = function () {
var targetListType = Connect2_OrbitMobile_MUIModel.LocalSurveyStatusRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 1;
}

var qpstJSON_Name = model.variables.hostSurveyVar.surveyInfoAttr.hostProfileSurveyStatusAttr;

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENLocalSurveyStatus\".\"Id\" o0, NULL o1, NULL o2";
} else {
selectSql += "\"ENLocalSurveyStatus\".\"Id\" o0, \"ENLocalSurveyStatus\".\"Label\" o1, \"ENLocalSurveyStatus\".\"JSON_Name\" o2";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_hq9_LocalSurveyStatus\" \"ENLocalSurveyStatus\"";
fromAndWhereSql += " WHERE (\"ENLocalSurveyStatus\".\"JSON_Name\" = :qpstJSON_Name)";
argsList.add("qpstJSON_Name", /*TEXT*/ 0, qpstJSON_Name);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, Connect2_OrbitMobile_MUIModel.LocalSurveyStatusRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"localSurveyStatusAttr",
];
return OS.DataConversion.LocalStorageConverter.from(r, targetListType.getItemType(), indexRef, attrOrder);

}, argsList).then(function (resultList) {
result.list = resultList;
}).then(function () {
}).then(function () {
return result;
});
};
} else {
executeQuery = function () {
if(!(maxRecords)) {
maxRecords = 1;
}

return new Promise(function (resolve, reject) {
require(["Connect2_OrbitMobile_MUI.aggregates.IDB"], function (Connect2_OrbitMobile_MUIAggregates_IDB) {
return Connect2_OrbitMobile_MUIAggregates_IDB.executeOrbit_ScreenBlocks_HostSurvey_ScreenBlock_HostSurvey$Block$getCurrentLocalSurveyStatusAggr(model.variables.hostSurveyVar.surveyInfoAttr.hostProfileSurveyStatusAttr, maxRecords).then(function (result) {
resolve(result);
}).catch(function (e) {
reject(e);
});
});
});
};
}

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:c2MwbdLir0WUErVXEYqsbQ:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ScreenDataSets.c2MwbdLir0WUErVXEYqsbQ:iVxL6FVpGQImCqUU1Tc1Uw", "Connect2_OrbitMobile_MUI", "GetCurrentLocalSurveyStatus", "NRNodes.WebScreenDataSet", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_HostSurvey/ScreenBlock_HostSurvey/GetCurrentLocalSurveyStatus");
return controller.executeScreenClientAggregate(executeQuery, function () {
return model.variables.getCurrentLocalSurveyStatusAggr;
}, function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_HostSurvey/ScreenBlock_HostSurvey/GetCurrentLocalSurveyStatus On After Fetch");
return controller._onAfterFetch_GetSurveyStatus$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:c2MwbdLir0WUErVXEYqsbQ", callContext.id);
controller.popDebuggerContext(callContext);

});
};
Controller.prototype.getLocalHelperStatus$AggrRefresh = function (maxRecords) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext();

var executeQuery = null;
if(OS.NativeHelper.isRunningOnNative()) {
executeQuery = function () {
var targetListType = Connect2_OrbitMobile_MUIModel.LocalHelperStatusRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 10;
}


var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENLocalHelperStatus\".\"Id\" o0, \"ENLocalHelperStatus\".\"Label\" o1, \"ENLocalHelperStatus\".\"JSON_Name\" o2";
} else {
selectSql += "\"ENLocalHelperStatus\".\"Id\" o0, \"ENLocalHelperStatus\".\"Label\" o1, \"ENLocalHelperStatus\".\"JSON_Name\" o2";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_hq9_LocalHelperStatus\" \"ENLocalHelperStatus\"";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, Connect2_OrbitMobile_MUIModel.LocalHelperStatusRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"localHelperStatusAttr",
];
return OS.DataConversion.LocalStorageConverter.from(r, targetListType.getItemType(), indexRef, attrOrder);

}, argsList).then(function (resultList) {
result.list = resultList;
}).then(function () {
}).then(function () {
return result;
});
};
} else {
executeQuery = function () {
if(!(maxRecords)) {
maxRecords = 10;
}

return new Promise(function (resolve, reject) {
require(["Connect2_OrbitMobile_MUI.aggregates.IDB"], function (Connect2_OrbitMobile_MUIAggregates_IDB) {
return Connect2_OrbitMobile_MUIAggregates_IDB.executeOrbit_ScreenBlocks_HostSurvey_ScreenBlock_HostSurvey$Block$getLocalHelperStatusAggr(maxRecords).then(function (result) {
resolve(result);
}).catch(function (e) {
reject(e);
});
});
});
};
}

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:4SDudjVU1U+65BMZH8m_rA:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ScreenDataSets.4SDudjVU1U+65BMZH8m_rA:04iONjZXoY2w9m1M0kkIwA", "Connect2_OrbitMobile_MUI", "GetLocalHelperStatus", "NRNodes.WebScreenDataSet", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_HostSurvey/ScreenBlock_HostSurvey/GetLocalHelperStatus");
return controller.executeScreenClientAggregate(executeQuery, function () {
return model.variables.getLocalHelperStatusAggr;
}, function () {
});

}, function () {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:4SDudjVU1U+65BMZH8m_rA", callContext.id);
controller.popDebuggerContext(callContext);

});
};
Controller.prototype.getLocalVehicleOwners$AggrRefresh = function (maxRecords) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext();

var executeQuery = null;
if(OS.NativeHelper.isRunningOnNative()) {
executeQuery = function () {
var targetListType = Connect2_OrbitMobile_MUIModel.LocalVehicleOwnerRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 4;
}


var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENLocalVehicleOwner\".\"Id\" o0, \"ENLocalVehicleOwner\".\"Label\" o1, \"ENLocalVehicleOwner\".\"Order\" o2, \"ENLocalVehicleOwner\".\"JSON_Name\" o3";
} else {
selectSql += "\"ENLocalVehicleOwner\".\"Id\" o0, \"ENLocalVehicleOwner\".\"Label\" o1, \"ENLocalVehicleOwner\".\"Order\" o2, \"ENLocalVehicleOwner\".\"JSON_Name\" o3";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_hq9_LocalVehicleOwner\" \"ENLocalVehicleOwner\"";
orderBySql += " ORDER BY \"ENLocalVehicleOwner\".\"Order\" ASC ";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, Connect2_OrbitMobile_MUIModel.LocalVehicleOwnerRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"localVehicleOwnerAttr",
];
return OS.DataConversion.LocalStorageConverter.from(r, targetListType.getItemType(), indexRef, attrOrder);

}, argsList).then(function (resultList) {
result.list = resultList;
}).then(function () {
}).then(function () {
return result;
});
};
} else {
executeQuery = function () {
if(!(maxRecords)) {
maxRecords = 4;
}

return new Promise(function (resolve, reject) {
require(["Connect2_OrbitMobile_MUI.aggregates.IDB"], function (Connect2_OrbitMobile_MUIAggregates_IDB) {
return Connect2_OrbitMobile_MUIAggregates_IDB.executeOrbit_ScreenBlocks_HostSurvey_ScreenBlock_HostSurvey$Block$getLocalVehicleOwnersAggr(maxRecords).then(function (result) {
resolve(result);
}).catch(function (e) {
reject(e);
});
});
});
};
}

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:sP2Ud6Phv0CAPHAXNn8kDw:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ScreenDataSets.sP2Ud6Phv0CAPHAXNn8kDw:J_dVd7M7BvSf5QCPUhNIMA", "Connect2_OrbitMobile_MUI", "GetLocalVehicleOwners", "NRNodes.WebScreenDataSet", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_HostSurvey/ScreenBlock_HostSurvey/GetLocalVehicleOwners");
return controller.executeScreenClientAggregate(executeQuery, function () {
return model.variables.getLocalVehicleOwnersAggr;
}, function () {
});

}, function () {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:sP2Ud6Phv0CAPHAXNn8kDw", callContext.id);
controller.popDebuggerContext(callContext);

});
};
Controller.prototype.getLocalMealTypes$AggrRefresh = function (maxRecords) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext();

var executeQuery = null;
if(OS.NativeHelper.isRunningOnNative()) {
executeQuery = function () {
var targetListType = Connect2_OrbitMobile_MUIModel.LocalMealTypeRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 10;
}


var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENLocalMealType\".\"Id\" o0, \"ENLocalMealType\".\"Label\" o1, \"ENLocalMealType\".\"JSON_Name\" o2";
} else {
selectSql += "\"ENLocalMealType\".\"Id\" o0, \"ENLocalMealType\".\"Label\" o1, \"ENLocalMealType\".\"JSON_Name\" o2";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_hq9_LocalMealType\" \"ENLocalMealType\"";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, Connect2_OrbitMobile_MUIModel.LocalMealTypeRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"localMealTypeAttr",
];
return OS.DataConversion.LocalStorageConverter.from(r, targetListType.getItemType(), indexRef, attrOrder);

}, argsList).then(function (resultList) {
result.list = resultList;
}).then(function () {
}).then(function () {
return result;
});
};
} else {
executeQuery = function () {
if(!(maxRecords)) {
maxRecords = 10;
}

return new Promise(function (resolve, reject) {
require(["Connect2_OrbitMobile_MUI.aggregates.IDB"], function (Connect2_OrbitMobile_MUIAggregates_IDB) {
return Connect2_OrbitMobile_MUIAggregates_IDB.executeOrbit_ScreenBlocks_HostSurvey_ScreenBlock_HostSurvey$Block$getLocalMealTypesAggr(maxRecords).then(function (result) {
resolve(result);
}).catch(function (e) {
reject(e);
});
});
});
};
}

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:+MN_h5+1O0Ssh8__SsaCRQ:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ScreenDataSets.+MN_h5+1O0Ssh8__SsaCRQ:yoeEhmoytk3QxKVxLmXOMw", "Connect2_OrbitMobile_MUI", "GetLocalMealTypes", "NRNodes.WebScreenDataSet", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_HostSurvey/ScreenBlock_HostSurvey/GetLocalMealTypes");
return controller.executeScreenClientAggregate(executeQuery, function () {
return model.variables.getLocalMealTypesAggr;
}, function () {
});

}, function () {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:+MN_h5+1O0Ssh8__SsaCRQ", callContext.id);
controller.popDebuggerContext(callContext);

});
};
Controller.prototype.getLocalHostSurveySteps$AggrRefresh = function (maxRecords) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext();

var executeQuery = null;
if(OS.NativeHelper.isRunningOnNative()) {
executeQuery = function () {
var targetListType = Connect2_OrbitMobile_MUIModel.LocalHostSurveyStepRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 10;
}

var qpboAccommodationSurvey = model.variables.getHostSurveyDataAct.responseOut.surveyInfoAttr.accommodationSurveyAttr;
var qpboAccommodationSurveyUpdate = model.variables.getHostSurveyDataAct.responseOut.surveyInfoAttr.accommodationSurveyUpdateAttr;
var qpboHelperSurvey = model.variables.getHostSurveyDataAct.responseOut.surveyInfoAttr.helperSurveyAttr;
var qpboMealSurvey = model.variables.getHostSurveyDataAct.responseOut.surveyInfoAttr.mealSurveyAttr;
var qpboMealSurveyUpdate = model.variables.getHostSurveyDataAct.responseOut.surveyInfoAttr.mealSurveyUpdateAttr;
var qpboVehicleSurvey = model.variables.getHostSurveyDataAct.responseOut.surveyInfoAttr.vehicleSurveyAttr;
var qpboIsConfirmedSurvey = model.variables.isConfirmedSurveyVar;

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENLocalHostSurveyStep\".\"Id\" o0, \"ENLocalHostSurveyStep\".\"HeaderLabel\" o1, \"ENLocalHostSurveyStep\".\"AddLabel\" o2, \"ENLocalHostSurveyStep\".\"Order\" o3, \"ENLocalHostSurveyStep\".\"IsDataStep\" o4";
} else {
selectSql += "\"ENLocalHostSurveyStep\".\"Id\" o0, \"ENLocalHostSurveyStep\".\"HeaderLabel\" o1, \"ENLocalHostSurveyStep\".\"AddLabel\" o2, \"ENLocalHostSurveyStep\".\"Order\" o3, \"ENLocalHostSurveyStep\".\"IsDataStep\" o4";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_hq9_LocalHostSurveyStep\" \"ENLocalHostSurveyStep\"";
fromAndWhereSql += " WHERE ((CASE WHEN (:qpboIsConfirmedSurvey = 1) THEN 1 ELSE (CASE WHEN ((NOT (:qpboAccommodationSurvey = 1)) OR (NOT (:qpboAccommodationSurveyUpdate = 1))) THEN (CASE WHEN (\"ENLocalHostSurveyStep\".\"Id\" <> ";
fromAndWhereSql += Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.accommodation;
fromAndWhereSql += ") THEN 1 ELSE 0 END) ELSE 1 END) END) = 1) AND ((CASE WHEN (:qpboIsConfirmedSurvey = 1) THEN 1 ELSE (CASE WHEN ((NOT (:qpboMealSurvey = 1)) OR (NOT (:qpboMealSurveyUpdate = 1))) THEN (CASE WHEN (\"ENLocalHostSurveyStep\".\"Id\" <> ";
fromAndWhereSql += Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.meal;
fromAndWhereSql += ") THEN 1 ELSE 0 END) ELSE 1 END) END) = 1) AND ((CASE WHEN (:qpboIsConfirmedSurvey = 1) THEN 1 ELSE (CASE WHEN (NOT (:qpboHelperSurvey = 1)) THEN (CASE WHEN (\"ENLocalHostSurveyStep\".\"Id\" <> ";
fromAndWhereSql += Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.helper;
fromAndWhereSql += ") THEN 1 ELSE 0 END) ELSE 1 END) END) = 1) AND ((CASE WHEN (:qpboIsConfirmedSurvey = 1) THEN 1 ELSE (CASE WHEN (NOT (:qpboVehicleSurvey = 1)) THEN (CASE WHEN (\"ENLocalHostSurveyStep\".\"Id\" <> ";
fromAndWhereSql += Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.vehicle;
fromAndWhereSql += ") THEN 1 ELSE 0 END) ELSE 1 END) END) = 1) AND ((CASE WHEN (:qpboIsConfirmedSurvey = 1) THEN (CASE WHEN (\"ENLocalHostSurveyStep\".\"Id\" = ";
fromAndWhereSql += Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.summary;
fromAndWhereSql += ") THEN 1 ELSE 0 END) ELSE 1 END) = 1)";
orderBySql += " ORDER BY \"ENLocalHostSurveyStep\".\"Order\" ASC ";
argsList.add("qpboIsConfirmedSurvey", /*BOOLEAN*/ 2, qpboIsConfirmedSurvey);
countArgsList.add("qpboIsConfirmedSurvey", /*BOOLEAN*/ 2, qpboIsConfirmedSurvey);
argsList.add("qpboAccommodationSurvey", /*BOOLEAN*/ 2, qpboAccommodationSurvey);
countArgsList.add("qpboAccommodationSurvey", /*BOOLEAN*/ 2, qpboAccommodationSurvey);
argsList.add("qpboAccommodationSurveyUpdate", /*BOOLEAN*/ 2, qpboAccommodationSurveyUpdate);
countArgsList.add("qpboAccommodationSurveyUpdate", /*BOOLEAN*/ 2, qpboAccommodationSurveyUpdate);
argsList.add("qpboMealSurvey", /*BOOLEAN*/ 2, qpboMealSurvey);
countArgsList.add("qpboMealSurvey", /*BOOLEAN*/ 2, qpboMealSurvey);
argsList.add("qpboMealSurveyUpdate", /*BOOLEAN*/ 2, qpboMealSurveyUpdate);
countArgsList.add("qpboMealSurveyUpdate", /*BOOLEAN*/ 2, qpboMealSurveyUpdate);
argsList.add("qpboHelperSurvey", /*BOOLEAN*/ 2, qpboHelperSurvey);
countArgsList.add("qpboHelperSurvey", /*BOOLEAN*/ 2, qpboHelperSurvey);
argsList.add("qpboVehicleSurvey", /*BOOLEAN*/ 2, qpboVehicleSurvey);
countArgsList.add("qpboVehicleSurvey", /*BOOLEAN*/ 2, qpboVehicleSurvey);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;
var sqlCount = "SELECT COUNT(1) " + fromAndWhereSql + groupByAndHavingSql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, Connect2_OrbitMobile_MUIModel.LocalHostSurveyStepRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"localHostSurveyStepAttr",
];
return OS.DataConversion.LocalStorageConverter.from(r, targetListType.getItemType(), indexRef, attrOrder);

}, argsList).then(function (resultList) {
result.list = resultList;
}).then(function () {
return OS.Entities.webSQLStorageInstance.executeCount(sqlCount, countArgsList).then(function (count) {
result.count = count;
});
}).then(function () {
return result;
});
};
} else {
executeQuery = function () {
if(!(maxRecords)) {
maxRecords = 10;
}

return new Promise(function (resolve, reject) {
require(["Connect2_OrbitMobile_MUI.aggregates.IDB"], function (Connect2_OrbitMobile_MUIAggregates_IDB) {
return Connect2_OrbitMobile_MUIAggregates_IDB.executeOrbit_ScreenBlocks_HostSurvey_ScreenBlock_HostSurvey$Block$getLocalHostSurveyStepsAggr(model.variables.getHostSurveyDataAct.responseOut.surveyInfoAttr.accommodationSurveyAttr, model.variables.getHostSurveyDataAct.responseOut.surveyInfoAttr.accommodationSurveyUpdateAttr, model.variables.getHostSurveyDataAct.responseOut.surveyInfoAttr.helperSurveyAttr, model.variables.getHostSurveyDataAct.responseOut.surveyInfoAttr.mealSurveyAttr, model.variables.getHostSurveyDataAct.responseOut.surveyInfoAttr.mealSurveyUpdateAttr, model.variables.getHostSurveyDataAct.responseOut.surveyInfoAttr.vehicleSurveyAttr, model.variables.isConfirmedSurveyVar, maxRecords).then(function (result) {
resolve(result);
}).catch(function (e) {
reject(e);
});
});
});
};
}

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:qqY90GcHs0KpbnEUMRLF2g:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ScreenDataSets.qqY90GcHs0KpbnEUMRLF2g:ZLVTrdOWb4CCRcEFuVL9QA", "Connect2_OrbitMobile_MUI", "GetLocalHostSurveySteps", "NRNodes.WebScreenDataSet", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_HostSurvey/ScreenBlock_HostSurvey/GetLocalHostSurveySteps");
return controller.executeScreenClientAggregate(executeQuery, function () {
return model.variables.getLocalHostSurveyStepsAggr;
}, function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_HostSurvey/ScreenBlock_HostSurvey/GetLocalHostSurveySteps On After Fetch");
return controller._onAfterFetch_GetHostSurveySteps$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:qqY90GcHs0KpbnEUMRLF2g", callContext.id);
controller.popDebuggerContext(callContext);

});
};
Controller.prototype.getLocalHelperRoles$AggrRefresh = function (maxRecords) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext();

var executeQuery = null;
if(OS.NativeHelper.isRunningOnNative()) {
executeQuery = function () {
var targetListType = Connect2_OrbitMobile_MUIModel.LocalHelperRoleRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 20;
}


var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENLocalHelperRole\".\"Id\" o0, \"ENLocalHelperRole\".\"Label\" o1, \"ENLocalHelperRole\".\"Order\" o2, \"ENLocalHelperRole\".\"JSON_Name\" o3, \"ENLocalHelperRole\".\"isReadOnly\" o4";
} else {
selectSql += "\"ENLocalHelperRole\".\"Id\" o0, \"ENLocalHelperRole\".\"Label\" o1, \"ENLocalHelperRole\".\"Order\" o2, \"ENLocalHelperRole\".\"JSON_Name\" o3, \"ENLocalHelperRole\".\"isReadOnly\" o4";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_hq9_LocalHelperRole\" \"ENLocalHelperRole\"";
orderBySql += " ORDER BY \"ENLocalHelperRole\".\"Order\" ASC ";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, Connect2_OrbitMobile_MUIModel.LocalHelperRoleRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"localHelperRoleAttr",
];
return OS.DataConversion.LocalStorageConverter.from(r, targetListType.getItemType(), indexRef, attrOrder);

}, argsList).then(function (resultList) {
result.list = resultList;
}).then(function () {
}).then(function () {
return result;
});
};
} else {
executeQuery = function () {
if(!(maxRecords)) {
maxRecords = 20;
}

return new Promise(function (resolve, reject) {
require(["Connect2_OrbitMobile_MUI.aggregates.IDB"], function (Connect2_OrbitMobile_MUIAggregates_IDB) {
return Connect2_OrbitMobile_MUIAggregates_IDB.executeOrbit_ScreenBlocks_HostSurvey_ScreenBlock_HostSurvey$Block$getLocalHelperRolesAggr(maxRecords).then(function (result) {
resolve(result);
}).catch(function (e) {
reject(e);
});
});
});
};
}

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Bdhh5N9+bU+IGRRu5owC7A:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ScreenDataSets.Bdhh5N9+bU+IGRRu5owC7A:y6SMBc1LFemsTmOqO0asSw", "Connect2_OrbitMobile_MUI", "GetLocalHelperRoles", "NRNodes.WebScreenDataSet", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_HostSurvey/ScreenBlock_HostSurvey/GetLocalHelperRoles");
return controller.executeScreenClientAggregate(executeQuery, function () {
return model.variables.getLocalHelperRolesAggr;
}, function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_HostSurvey/ScreenBlock_HostSurvey/GetLocalHelperRoles On After Fetch");
controller._onAfterFetch_GetLocalHelperRoles$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Bdhh5N9+bU+IGRRu5owC7A", callContext.id);
controller.popDebuggerContext(callContext);

});
};
Controller.prototype.getLocalVehicleTypes$AggrRefresh = function (maxRecords) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext();

var executeQuery = null;
if(OS.NativeHelper.isRunningOnNative()) {
executeQuery = function () {
var targetListType = Connect2_OrbitMobile_MUIModel.LocalVehicleTypeRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 8;
}


var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENLocalVehicleType\".\"Id\" o0, \"ENLocalVehicleType\".\"Label\" o1, \"ENLocalVehicleType\".\"Order\" o2, \"ENLocalVehicleType\".\"JSON_Name\" o3";
} else {
selectSql += "\"ENLocalVehicleType\".\"Id\" o0, \"ENLocalVehicleType\".\"Label\" o1, \"ENLocalVehicleType\".\"Order\" o2, \"ENLocalVehicleType\".\"JSON_Name\" o3";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_hq9_LocalVehicleType\" \"ENLocalVehicleType\"";
orderBySql += " ORDER BY \"ENLocalVehicleType\".\"Order\" ASC ";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, Connect2_OrbitMobile_MUIModel.LocalVehicleTypeRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"localVehicleTypeAttr",
];
return OS.DataConversion.LocalStorageConverter.from(r, targetListType.getItemType(), indexRef, attrOrder);

}, argsList).then(function (resultList) {
result.list = resultList;
}).then(function () {
}).then(function () {
return result;
});
};
} else {
executeQuery = function () {
if(!(maxRecords)) {
maxRecords = 8;
}

return new Promise(function (resolve, reject) {
require(["Connect2_OrbitMobile_MUI.aggregates.IDB"], function (Connect2_OrbitMobile_MUIAggregates_IDB) {
return Connect2_OrbitMobile_MUIAggregates_IDB.executeOrbit_ScreenBlocks_HostSurvey_ScreenBlock_HostSurvey$Block$getLocalVehicleTypesAggr(maxRecords).then(function (result) {
resolve(result);
}).catch(function (e) {
reject(e);
});
});
});
};
}

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:mwXZ+GPQU0ekdrRKXv591g:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ScreenDataSets.mwXZ+GPQU0ekdrRKXv591g:KZR_RYA9_b1Avds0wH9IlA", "Connect2_OrbitMobile_MUI", "GetLocalVehicleTypes", "NRNodes.WebScreenDataSet", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_HostSurvey/ScreenBlock_HostSurvey/GetLocalVehicleTypes");
return controller.executeScreenClientAggregate(executeQuery, function () {
return model.variables.getLocalVehicleTypesAggr;
}, function () {
});

}, function () {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:mwXZ+GPQU0ekdrRKXv591g", callContext.id);
controller.popDebuggerContext(callContext);

});
};
Controller.prototype.getLocalGenderPreferences$AggrRefresh = function (maxRecords) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext();

var executeQuery = null;
if(OS.NativeHelper.isRunningOnNative()) {
executeQuery = function () {
var targetListType = Connect2_OrbitMobile_MUIModel.LocalGenderPreferenceRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 4;
}


var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENLocalGenderPreference\".\"Id\" o0, \"ENLocalGenderPreference\".\"Label\" o1, \"ENLocalGenderPreference\".\"JSON_Name\" o2, \"ENLocalGenderPreference\".\"Order\" o3";
} else {
selectSql += "\"ENLocalGenderPreference\".\"Id\" o0, \"ENLocalGenderPreference\".\"Label\" o1, \"ENLocalGenderPreference\".\"JSON_Name\" o2, \"ENLocalGenderPreference\".\"Order\" o3";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_hq9_LocalGenderPreference\" \"ENLocalGenderPreference\"";
orderBySql += " ORDER BY \"ENLocalGenderPreference\".\"Order\" ASC ";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, Connect2_OrbitMobile_MUIModel.LocalGenderPreferenceRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"localGenderPreferenceAttr",
];
return OS.DataConversion.LocalStorageConverter.from(r, targetListType.getItemType(), indexRef, attrOrder);

}, argsList).then(function (resultList) {
result.list = resultList;
}).then(function () {
}).then(function () {
return result;
});
};
} else {
executeQuery = function () {
if(!(maxRecords)) {
maxRecords = 4;
}

return new Promise(function (resolve, reject) {
require(["Connect2_OrbitMobile_MUI.aggregates.IDB"], function (Connect2_OrbitMobile_MUIAggregates_IDB) {
return Connect2_OrbitMobile_MUIAggregates_IDB.executeOrbit_ScreenBlocks_HostSurvey_ScreenBlock_HostSurvey$Block$getLocalGenderPreferencesAggr(maxRecords).then(function (result) {
resolve(result);
}).catch(function (e) {
reject(e);
});
});
});
};
}

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:wAr3+T9K40aquTqaZPJZIw:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ScreenDataSets.wAr3+T9K40aquTqaZPJZIw:Y8yVWcMbWQf7nU_mrkSqtQ", "Connect2_OrbitMobile_MUI", "GetLocalGenderPreferences", "NRNodes.WebScreenDataSet", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_HostSurvey/ScreenBlock_HostSurvey/GetLocalGenderPreferences");
return controller.executeScreenClientAggregate(executeQuery, function () {
return model.variables.getLocalGenderPreferencesAggr;
}, function () {
});

}, function () {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:wAr3+T9K40aquTqaZPJZIw", callContext.id);
controller.popDebuggerContext(callContext);

});
};
Controller.prototype.getHostSurvey$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:aJ7ND3qZUkSpENePAPwFaQ:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/DataActions.aJ7ND3qZUkSpENePAPwFaQ:xDjew0N2hh3mBOnD+0HrdA", "Connect2_OrbitMobile_MUI", "GetHostSurvey", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_HostSurvey/ScreenBlock_HostSurvey/GetHostSurvey");
return controller.callDataAction("DataActionGetHostSurvey", "screenservices/Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks_HostSurvey/ScreenBlock_HostSurvey/DataActionGetHostSurvey", "vPPj+acshdL7jzerhkJz0A", function (b) {
model.variables.getHostSurveyDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getHostSurveyDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getHostSurveyDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_HostSurvey/ScreenBlock_HostSurvey/GetHostSurvey On After Fetch");
return controller._onAfterFetch_GetHostSurvey$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:aJ7ND3qZUkSpENePAPwFaQ", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getLocalHouseFloors$AggrRefresh", "getLocalBedSizes$AggrRefresh", "getCurrentLocalSurveyStatus$AggrRefresh", "getLocalHelperStatus$AggrRefresh", "getLocalVehicleOwners$AggrRefresh", "getLocalMealTypes$AggrRefresh", "getLocalHostSurveySteps$AggrRefresh", "getLocalHelperRoles$AggrRefresh", "getLocalVehicleTypes$AggrRefresh", "getLocalGenderPreferences$AggrRefresh", "getHostSurvey$DataActRefresh"];
// Client Actions
Controller.prototype._onHandle_EditItem$Action = function (in_CurrentRowNumberIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_EditItem");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.OnHandle_EditItem$vars"))());
vars.value.in_CurrentRowNumberInLocal = in_CurrentRowNumberIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:boa3BDQiZUCfX3on2NJzWQ:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ClientActions.boa3BDQiZUCfX3on2NJzWQ:k9DDTitSLIpmPGLTM376aQ", "Connect2_OrbitMobile_MUI", "OnHandle_EditItem", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8ESYATMgsE+awxSqT04Peg", callContext.id);
// Current Step
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:cM+MtfUThUGNzJSKgmyyCg", callContext.id) && (model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.accommodation))) {
// Set Rooms
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:29dgbgnx40W9cp2_G_4XZw", callContext.id);
// HostSurvey.Rooms.HostSurvey_RoomItem[In_CurrentRowNumber].IsEdit = True
model.variables.hostSurveyVar.roomsAttr.hostSurvey_RoomItemAttr.getItem(vars.value.in_CurrentRowNumberInLocal).isEditAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:29dgbgnx40W9cp2_G_4XZw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// StepProperties.Accommodation.IsEdit = True
model.variables.stepPropertiesVar.accommodationAttr.isEditAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BpBzt0zvRk+N6PR0YWrT4w", callContext.id);
} else {
if((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.meal)) {
// Set Meals
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zp8jxRDCU02YFkmj79ghNQ", callContext.id);
// HostSurvey.Meals.MealItemInfo[In_CurrentRowNumber].IsEdit = True
model.variables.hostSurveyVar.mealsAttr.mealItemInfoAttr.getItem(vars.value.in_CurrentRowNumberInLocal).isEditAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zp8jxRDCU02YFkmj79ghNQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// StepProperties.Meals.IsEdit = True
model.variables.stepPropertiesVar.mealsAttr.isEditAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BpBzt0zvRk+N6PR0YWrT4w", callContext.id);
} else {
if((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.helper)) {
// Set Helpers
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jAA0fAtvS0ep6C2HFxVqlw", callContext.id);
// HostSurvey.Helpers.HelperItemInfo[In_CurrentRowNumber].IsEdit = True
model.variables.hostSurveyVar.helpersAttr.helperItemInfoAttr.getItem(vars.value.in_CurrentRowNumberInLocal).isEditAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jAA0fAtvS0ep6C2HFxVqlw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// StepProperties.Helpers.IsEdit = True
model.variables.stepPropertiesVar.helpersAttr.isEditAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BpBzt0zvRk+N6PR0YWrT4w", callContext.id);
} else {
if((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.vehicle)) {
// Set Vehicles
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7fcGsnihyECE0U5DCKqqtw", callContext.id);
// HostSurvey.Vehicles.VehicleItemInfo[In_CurrentRowNumber].IsEdit = True
model.variables.hostSurveyVar.vehiclesAttr.vehicleItemInfoAttr.getItem(vars.value.in_CurrentRowNumberInLocal).isEditAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7fcGsnihyECE0U5DCKqqtw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// StepProperties.Vehicles.IsEdit = True
model.variables.stepPropertiesVar.vehiclesAttr.isEditAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BpBzt0zvRk+N6PR0YWrT4w", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:90Up5j_zz0aNXWsPGEiULg", callContext.id);
}

}

}

}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:boa3BDQiZUCfX3on2NJzWQ", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.OnHandle_EditItem$vars", [{
name: "In_CurrentRowNumber",
attrName: "in_CurrentRowNumberInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._deleteItem$Action = function (in_CurrentRowNumberIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("DeleteItem");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.DeleteItem$vars"))());
vars.value.in_CurrentRowNumberInLocal = in_CurrentRowNumberIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:1I0NB7DR4U65R5f3+zBNKQ:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ClientActions.1I0NB7DR4U65R5f3+zBNKQ:ocoVjT_4xPK0Ob9A_CH+fg", "Connect2_OrbitMobile_MUI", "DeleteItem", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GDEhH8c+w0iDN6Jh9zMGow", callContext.id);
// Current Step
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:u2VTjiZA50udj+Ia3T8wlw", callContext.id) && (model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.accommodation))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:j2qmFlIf_EmU85vQ911lVg", callContext.id);
// Execute Action: ListRemove_Room
OS.SystemActions.listRemove(model.variables.hostSurveyVar.roomsAttr.hostSurvey_RoomItemAttr, vars.value.in_CurrentRowNumberInLocal, callContext);
// Set Step Properties
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KyodTEHUIE+JDniEoL+dGw", callContext.id);
// StepProperties.Accommodation.HasData = notHostSurvey.Rooms.HostSurvey_RoomItem.Empty
model.variables.stepPropertiesVar.accommodationAttr.hasDataAttr = !(model.variables.hostSurveyVar.roomsAttr.hostSurvey_RoomItemAttr.isEmpty);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KyodTEHUIE+JDniEoL+dGw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// StepProperties.Accommodation.IsEdit = HostSurvey.Rooms.HostSurvey_RoomItem.Empty
model.variables.stepPropertiesVar.accommodationAttr.isEditAttr = model.variables.hostSurveyVar.roomsAttr.hostSurvey_RoomItemAttr.isEmpty;
} else {
if((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.meal)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:157Q0yhIZ0amTETP4XgXeQ", callContext.id);
return ;

} else {
if((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.helper)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xptR8lsc+0ORnQk6DnaOCQ", callContext.id);
// Execute Action: ListRemove_Helper
OS.SystemActions.listRemove(model.variables.hostSurveyVar.helpersAttr.helperItemInfoAttr, vars.value.in_CurrentRowNumberInLocal, callContext);
// Set Step Properties
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:O5WleaFeUEWhK8oT+fd6rw", callContext.id);
// StepProperties.Helpers.HasData = notHostSurvey.Helpers.HelperItemInfo.Empty
model.variables.stepPropertiesVar.helpersAttr.hasDataAttr = !(model.variables.hostSurveyVar.helpersAttr.helperItemInfoAttr.isEmpty);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:O5WleaFeUEWhK8oT+fd6rw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// StepProperties.Helpers.IsEdit = HostSurvey.Helpers.HelperItemInfo.Empty
model.variables.stepPropertiesVar.helpersAttr.isEditAttr = model.variables.hostSurveyVar.helpersAttr.helperItemInfoAttr.isEmpty;
} else {
if((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.vehicle)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qyCwwm0xnUy0jZ8kHzvzag", callContext.id);
// Execute Action: ListRemove_Vehicle
OS.SystemActions.listRemove(model.variables.hostSurveyVar.vehiclesAttr.vehicleItemInfoAttr, vars.value.in_CurrentRowNumberInLocal, callContext);
// Set Step Properties
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UxkLrdvm+0aqkHvUWeXhog", callContext.id);
// StepProperties.Vehicles.HasData = notHostSurvey.Vehicles.VehicleItemInfo.Empty
model.variables.stepPropertiesVar.vehiclesAttr.hasDataAttr = !(model.variables.hostSurveyVar.vehiclesAttr.vehicleItemInfoAttr.isEmpty);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UxkLrdvm+0aqkHvUWeXhog", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// StepProperties.Vehicles.IsEdit = HostSurvey.Vehicles.VehicleItemInfo.Empty
model.variables.stepPropertiesVar.vehiclesAttr.isEditAttr = model.variables.hostSurveyVar.vehiclesAttr.vehicleItemInfoAttr.isEmpty;
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:FJhIk9pOW0enTjuq0GcJsg", callContext.id);
return ;

}

}

}

}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UAkuPKrHrEqij4LZCvlucA", callContext.id);
// PositionToDelete = 0
model.variables.positionToDeleteVar = 0;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1bvnMxcbeUepK0tzPsGtrg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:1I0NB7DR4U65R5f3+zBNKQ", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.DeleteItem$vars", [{
name: "In_CurrentRowNumber",
attrName: "in_CurrentRowNumberInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._onReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.OnReady$vars"))());
var wasCurrentViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.wasCurrentViewRestoredFromCacheJSResult = wasCurrentViewRestoredFromCacheJSResult;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:7__xC7RZXUSyGDvlgBz33Q:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ClientActions.7__xC7RZXUSyGDvlgBz33Q:7y4DGhidhdZJyi9t4F2U8A", "Connect2_OrbitMobile_MUI", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nW7XqL7kSkCAFqnmCor0tA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Sj0nFNoKpkSX9rDn8P9CUA", callContext.id);
wasCurrentViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(Connect2_OrbitMobile_MUI_Orbit_ScreenBlocks_HostSurvey_ScreenBlock_HostSurvey_mvc_controller_OnReady_WasCurrentViewRestoredFromCacheJS, "WasCurrentViewRestoredFromCache", "OnReady", {
FromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.OnReady$wasCurrentViewRestoredFromCacheJSResult"))();
jsNodeResult.fromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.FromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
// Was Cached?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mXWn6KLN_kS6jE1YKnjeEA", callContext.id) && wasCurrentViewRestoredFromCacheJSResult.value.fromCacheOut)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:cy4LojwhcUGSC7RoakSu9A", callContext.id);
} else {
// Set Blank Site Properties
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:boYZZDryaE+v5eN+W+6w4A", callContext.id);
// BlankStepProperties.IsEdit = True
vars.value.blankStepPropertiesVar.isEditAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:boYZZDryaE+v5eN+W+6w4A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// BlankStepProperties.TrySave = False
vars.value.blankStepPropertiesVar.trySaveAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:boYZZDryaE+v5eN+W+6w4A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// BlankStepProperties.HasData = False
vars.value.blankStepPropertiesVar.hasDataAttr = false;
// Reset Step Properties
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4ma1Vy09DU2hG7gg4XGpmA", callContext.id);
// StepProperties.Accommodation = BlankStepProperties
model.variables.stepPropertiesVar.accommodationAttr = vars.value.blankStepPropertiesVar;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4ma1Vy09DU2hG7gg4XGpmA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// StepProperties.Meals = BlankStepProperties
model.variables.stepPropertiesVar.mealsAttr = vars.value.blankStepPropertiesVar;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4ma1Vy09DU2hG7gg4XGpmA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// StepProperties.Helpers = BlankStepProperties
model.variables.stepPropertiesVar.helpersAttr = vars.value.blankStepPropertiesVar;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4ma1Vy09DU2hG7gg4XGpmA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// StepProperties.Vehicles = BlankStepProperties
model.variables.stepPropertiesVar.vehiclesAttr = vars.value.blankStepPropertiesVar;
// Set IsFetching
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7eDFkkxf0kGfvwRoamE95g", callContext.id);
// IsFetchingData = True
model.variables.isFetchingDataVar = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:X4voZxlVhkif6N616B0Ntg", callContext.id);
// Execute Action: RefreshData
return controller._refreshData$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:hoK81EVgkkeuky9ym1nB9A", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:7__xC7RZXUSyGDvlgBz33Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:7__xC7RZXUSyGDvlgBz33Q", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.OnReady$vars", [{
name: "BlankStepProperties",
attrName: "blankStepPropertiesVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.StepPropertiesRec();
},
complexType: Connect2_OrbitMobile_MUIModel.StepPropertiesRec
}]);
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.OnReady$wasCurrentViewRestoredFromCacheJSResult", [{
name: "FromCache",
attrName: "fromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._toggleSingleResetMealData$Action = function (in_PositionIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ToggleSingleResetMealData");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.ToggleSingleResetMealData$vars"))());
vars.value.in_PositionInLocal = in_PositionIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:89gaHBTWCUqVrlKyxSrHXg:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ClientActions.89gaHBTWCUqVrlKyxSrHXg:a4JLs0i39FfCe1dtcmNthA", "Connect2_OrbitMobile_MUI", "ToggleSingleResetMealData", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bYpHSrYtkk6xo2ORe3aUPA", callContext.id);
// Set ResetMealData to False
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:b_dG4s1CoUGQnTdIk7M4yA", callContext.id);
// HostSurvey.Meals.MealItemInfo[In_Position].ResetMealData = False
model.variables.hostSurveyVar.mealsAttr.mealItemInfoAttr.getItem(OS.BuiltinFunctions.longIntegerToInteger(vars.value.in_PositionInLocal)).resetMealDataAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lwrUyyddnUSU7prO3x1QSg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:89gaHBTWCUqVrlKyxSrHXg", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.ToggleSingleResetMealData$vars", [{
name: "In_Position",
attrName: "in_PositionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Controller.prototype._onHandle_PopUp_Secondary$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_PopUp_Secondary");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:oeCPHP4R5U6aAIQdJYqACg:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ClientActions.oeCPHP4R5U6aAIQdJYqACg:sx_8almefYy6ldgGTHGGzA", "Connect2_OrbitMobile_MUI", "OnHandle_PopUp_Secondary", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3M0PLYmQt0K2tkuGnoYCqg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:T6DvoXY4ek+nXOaRNttJkw", callContext.id) && model.variables.popUpInfoVar.isShowPopup_CancelAttr)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qwAlb7ROh0W1HOIc14St8A", callContext.id);
// Execute Action: CancelEdit
controller._cancelEdit$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UWKIrayV8kiOmCAoZ1SQhA", callContext.id);
// Execute Action: ValidateStepEdit
controller._validateStepEdit$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:kGlIe7UeCEKVwEYlgmjEoA", callContext.id);
// Execute Action: PopUpClose_Cancel
controller._onHandle_PopUp_Close$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:e3lR2o6b3kq2vlUVIfJCJw", callContext.id);
// Execute Action: NavigateTo_SpecificStep
return controller._navigateTo_SpecificStep$Action(Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.navigation, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:71tHemytzkq4zAyeTHYLCw", callContext.id);
});
} else {
return OS.Flow.executeSequence(function () {
if(model.variables.popUpInfoVar.isShowPopup_DeleteAttr) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:iAat7sah5kiHYFodc3KH5w", callContext.id);
// Execute Action: OnHandle_PopUp_Close_Delete
controller._onHandle_PopUp_Close$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pANWJOEqZE2nA0HAGGRhzw", callContext.id);
} else {
return OS.Flow.executeSequence(function () {
if(model.variables.popUpInfoVar.isShowPopup_NoInfoAttr) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NO_wI+BOrEicrii39xLB0A", callContext.id);
// Execute Action: OnHandle_PopUp_Close_NoInfo
controller._onHandle_PopUp_Close$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mfWunXjyJEyd8uMWM1dLPg", callContext.id);
} else {
return OS.Flow.executeSequence(function () {
if(model.variables.popUpInfoVar.isShowPopup_ReturnBackAttr) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dOtDWG1lm06yZ6E2e2o1rQ", callContext.id);
// SurveyDiscarded = True
model.variables.surveyDiscardedVar = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7Hn7lL6VG0GP+huxkE1bEg", callContext.id);
// Execute Action: OnHandle_PopUp_Close_ReturnBack
controller._onHandle_PopUp_Close$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6GckkC3Rdk69rU4_CpJruw", callContext.id);
// Trigger Event: NavigateTo_Back
return controller.navigateTo_Back$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gOMhAN3+y0O+wLE0A_RR0Q", callContext.id);
});
} else {
if(model.variables.popUpInfoVar.isShowPopup_ReturnNavigationAttr) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:U8r2LoV6G0awQGvHUlDfbA", callContext.id);
// Execute Action: OnHandle_PopUp_Close_ReturnNavigation
controller._onHandle_PopUp_Close$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XOA4Pk4KB06qjrDx9mkrKg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CaxxCWBTd0+wFAonU5eyUg", callContext.id);
}

}

});
}

});
}

});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:oeCPHP4R5U6aAIQdJYqACg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:oeCPHP4R5U6aAIQdJYqACg", callContext.id);
throw ex;

});
};
Controller.prototype._onHandle_PopUp_Close$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_PopUp_Close");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:WB1rImViK0i0j8IzOVx+_Q:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ClientActions.WB1rImViK0i0j8IzOVx+_Q:SWHeXonjmjRL0nzVVGVTHQ", "Connect2_OrbitMobile_MUI", "OnHandle_PopUp_Close", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jEotqQMfIkKFrVkzXO2c8g", callContext.id);
// Close Popups
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IaCUHbIb00Cxic4i0Ja+Wg", callContext.id);
// PopUpInfo.Title = ""
model.variables.popUpInfoVar.titleAttr = "";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IaCUHbIb00Cxic4i0Ja+Wg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// PopUpInfo.Message = ""
model.variables.popUpInfoVar.messageAttr = "";
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IaCUHbIb00Cxic4i0Ja+Wg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// PopUpInfo.IsShowPopup_Cancel = False
model.variables.popUpInfoVar.isShowPopup_CancelAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IaCUHbIb00Cxic4i0Ja+Wg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// PopUpInfo.IsShowPopup_Delete = False
model.variables.popUpInfoVar.isShowPopup_DeleteAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IaCUHbIb00Cxic4i0Ja+Wg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// PopUpInfo.IsShowPopup_NoInfo = False
model.variables.popUpInfoVar.isShowPopup_NoInfoAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IaCUHbIb00Cxic4i0Ja+Wg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// PopUpInfo.IsShowPopup_ReturnBack = False
model.variables.popUpInfoVar.isShowPopup_ReturnBackAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IaCUHbIb00Cxic4i0Ja+Wg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "7");
// PopUpInfo.IsShowPopup_ReturnNavigation = False
model.variables.popUpInfoVar.isShowPopup_ReturnNavigationAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LpNtXt1qZUCXqCVdcJg5nQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:WB1rImViK0i0j8IzOVx+_Q", callContext.id);
}

};
Controller.prototype._onHandle_DeleteItem$Action = function (in_CurrentRowNumberIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_DeleteItem");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.OnHandle_DeleteItem$vars"))());
vars.value.in_CurrentRowNumberInLocal = in_CurrentRowNumberIn;
var getPopUpInfoVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getPopUpInfoVar = getPopUpInfoVar;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:TdeoNryz2EmCK0rXdU4WEA:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ClientActions.TdeoNryz2EmCK0rXdU4WEA:O_W8oDT3mA1IfxMHoHT7sQ", "Connect2_OrbitMobile_MUI", "OnHandle_DeleteItem", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3kX7+vEte0y7QHSWISZ6NQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Zs0+syoY3keNM5aYtsNWnw", callContext.id);
// PositionToDelete = In_CurrentRowNumber
model.variables.positionToDeleteVar = vars.value.in_CurrentRowNumberInLocal;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GMUCNqMhQk6u4GzGVKvU4Q", callContext.id);
// Execute Action: GetPopUpInfo
getPopUpInfoVar.value = Connect2_OrbitMobile_MUIController.default.getPopUpInfo$Action(false, false, true, false, false, callContext);

// Set PopUpInfo
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:E6uo_lYMPEmr95s+8p5HLg", callContext.id);
// PopUpInfo.Title = GetPopUpInfo.Out_Title
model.variables.popUpInfoVar.titleAttr = getPopUpInfoVar.value.out_TitleOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:E6uo_lYMPEmr95s+8p5HLg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// PopUpInfo.Message = GetPopUpInfo.Out_Message
model.variables.popUpInfoVar.messageAttr = getPopUpInfoVar.value.out_MessageOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:E6uo_lYMPEmr95s+8p5HLg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// PopUpInfo.IsShowPopup_Delete = True
model.variables.popUpInfoVar.isShowPopup_DeleteAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XzTEpjxP_UutHSRqtDr0KA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:TdeoNryz2EmCK0rXdU4WEA", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.OnHandle_DeleteItem$vars", [{
name: "In_CurrentRowNumber",
attrName: "in_CurrentRowNumberInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._onAfterFetch_GetHostSurvey$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnAfterFetch_GetHostSurvey");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Hxw4QFUJQ0uu0+eB+d7TFQ:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ClientActions.Hxw4QFUJQ0uu0+eB+d7TFQ:UqDW2adKwwsR7d50aVugww", "Connect2_OrbitMobile_MUI", "OnAfterFetch_GetHostSurvey", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:HNPdDi5ocU+s7vvDYG8BMQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1GdaUK_SEkibNNWisMDKIw", callContext.id) && model.variables.getHostSurveyDataAct.hasErrorOut)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:c0mH8dDw1k6KWLonjUrhlQ", callContext.id);
// IsFetchingData = False
model.variables.isFetchingDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9lhCkWJAKEeCdES8V0Ijlg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tgnoDXnnOkilMlckIIgEmw", callContext.id);
// HostSurvey = GetHostSurvey.Response
model.variables.hostSurveyVar = model.variables.getHostSurveyDataAct.responseOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:v86LCGRiRkqzCixGdJ0zbw", callContext.id);
// Execute Action: RefreshLocalSurveyStatus
return controller._refreshLocalSurveyStatus$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:MzbgDVH3bkeFffDjd0oLLA", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Hxw4QFUJQ0uu0+eB+d7TFQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Hxw4QFUJQ0uu0+eB+d7TFQ", callContext.id);
throw ex;

});
};
Controller.prototype._onHandle_SecondaryButton$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_SecondaryButton");
callContext = controller.callContext(callContext);
var getStepPropertiesVar = new OS.DataTypes.VariableHolder();
var getPopUpInfoVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getStepPropertiesVar = getStepPropertiesVar;
varBag.getPopUpInfoVar = getPopUpInfoVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:FCLpRwTpnEyB4nfPYI7afg:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ClientActions.FCLpRwTpnEyB4nfPYI7afg:U06K7XXuaNsMj3g9ARsU4A", "Connect2_OrbitMobile_MUI", "OnHandle_SecondaryButton", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3UhzOyCYeECI73G9KlXeRg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Is Confirmed Survey?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oPlCrvZFLEOepYbFXsFyCA", callContext.id) && !(model.variables.isConfirmedSurveyVar))) {
// Is First Step?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DqwAdmNRl0m_sDcTZjkc9A", callContext.id) && !((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.navigation)))) {
// Is Last Step?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BPV_rrxBr0egZtKckYN03w", callContext.id) && !((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.summary)))) {
// Is Data Step?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Ad69E+y2jEOvev12kGpcBw", callContext.id) && model.variables.currentStepVar.localHostSurveyStepAttr.isDataStepAttr)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dYwm3nicxUmW4k74LlCkxw", callContext.id);
// Execute Action: ValidateStepEdit
controller._validateStepEdit$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fqOwbj5jG0aAslpIKxaCeQ", callContext.id);
// Execute Action: GetStepProperties
getStepPropertiesVar.value = Connect2_OrbitMobile_MUIController.default.getStepProperties$Action(model.variables.currentStepVar.localHostSurveyStepAttr, model.variables.stepPropertiesVar, callContext);

// Is Edit?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ngWol+5sREKOWUwtkeHTBA", callContext.id) && getStepPropertiesVar.value.out_CurrentStepPropertiesOut.isEditAttr)) {
// Has Data?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gsUeeyDGeEqrbNpucQD2ww", callContext.id) && (((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.helper)) ? ((getStepPropertiesVar.value.out_CurrentStepPropertiesOut.hasDataAttr || model.variables.isAddingHelperVar)) : (getStepPropertiesVar.value.out_CurrentStepPropertiesOut.hasDataAttr)))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yeJ0_pRuhUKRTwmjyH2zjA", callContext.id);
// Execute Action: GetPopUpInfo
getPopUpInfoVar.value = Connect2_OrbitMobile_MUIController.default.getPopUpInfo$Action(true, false, false, false, false, callContext);

// Set PopUp Info - Cancel
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ao6EPgmICkCexzQGavcwtg", callContext.id);
// PopUpInfo.Title = GetPopUpInfo.Out_Title
model.variables.popUpInfoVar.titleAttr = getPopUpInfoVar.value.out_TitleOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ao6EPgmICkCexzQGavcwtg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// PopUpInfo.Message = GetPopUpInfo.Out_Message
model.variables.popUpInfoVar.messageAttr = getPopUpInfoVar.value.out_MessageOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ao6EPgmICkCexzQGavcwtg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// PopUpInfo.IsShowPopup_Cancel = True
model.variables.popUpInfoVar.isShowPopup_CancelAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:kW9E2wiGO0OOcO6J77x2Dw", callContext.id);
return OS.Flow.returnAsync();

}

}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QV4L2E2HEEG0PpvFNEFChw", callContext.id);
// Execute Action: NavigateTo_SpecificStep
return controller._navigateTo_SpecificStep$Action(Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.navigation, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nErb+2PzWEmzW7O3t9nSCg", callContext.id);
return OS.Flow.returnAsync();

});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YtUa6xHb+EqyMzu+FwWaCA", callContext.id);
return OS.Flow.returnAsync();

}

});
}

});
}

});
}

}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:He+9LgZR_keIXthhgtMviw", callContext.id);
// Trigger Event: NavigateTo_Back
return controller.navigateTo_Back$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:60tEqjMrZkKNqgFJ0VyDaA", callContext.id);
});
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:FCLpRwTpnEyB4nfPYI7afg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:FCLpRwTpnEyB4nfPYI7afg", callContext.id);
throw ex;

});
};
Controller.prototype._onHandle_DeleteSearchHelper$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_DeleteSearchHelper");
callContext = controller.callContext(callContext);
var getPopUpInfoVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getPopUpInfoVar = getPopUpInfoVar;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:F+kWSkRGnU6nLU1mVCR4CQ:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ClientActions.F+kWSkRGnU6nLU1mVCR4CQ:4sG37mkGkHI08PzyfRhhqw", "Connect2_OrbitMobile_MUI", "OnHandle_DeleteSearchHelper", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:h7jOhHPXsEmM8TG0DoQ_1Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:J3dZ78P0902KoQmIZZNpdA", callContext.id);
// Execute Action: GetPopUpInfo
getPopUpInfoVar.value = Connect2_OrbitMobile_MUIController.default.getPopUpInfo$Action(false, false, true, false, false, callContext);

// Set PopUpInfo
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XY19RBUbnU2L2WZji1t6LQ", callContext.id);
// PopUpInfo.Title = GetPopUpInfo.Out_Title
model.variables.popUpInfoVar.titleAttr = getPopUpInfoVar.value.out_TitleOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XY19RBUbnU2L2WZji1t6LQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// PopUpInfo.Message = GetPopUpInfo.Out_Message
model.variables.popUpInfoVar.messageAttr = getPopUpInfoVar.value.out_MessageOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XY19RBUbnU2L2WZji1t6LQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// PopUpInfo.IsShowPopup_Delete = True
model.variables.popUpInfoVar.isShowPopup_DeleteAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XAilnD0un0KaXoUpI80nSA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:F+kWSkRGnU6nLU1mVCR4CQ", callContext.id);
}

};
Controller.prototype._saveMultipleMeals_Success$Action = function (in_MealItemTriggerPositionIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("SaveMultipleMeals_Success");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.SaveMultipleMeals_Success$vars"))());
vars.value.in_MealItemTriggerPositionInLocal = in_MealItemTriggerPositionIn;
var listFilter_IsEditVar = new OS.DataTypes.VariableHolder();
var listIndexOf_EditItemVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.listFilter_IsEditVar = listFilter_IsEditVar;
varBag.listIndexOf_EditItemVar = listIndexOf_EditItemVar;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:E1suVY6_ik2XZQzkwqLKJQ:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ClientActions.E1suVY6_ik2XZQzkwqLKJQ:dGcGjt4zg27dcVxr05Saqw", "Connect2_OrbitMobile_MUI", "SaveMultipleMeals_Success", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2wD4VeETHkCeYEmuFO06ig", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PbUKPoaHXESz7UIjKrEmAQ", callContext.id);
// Execute Action: ListFilter_IsEdit
listFilter_IsEditVar.value = OS.SystemActions.listFilter(model.variables.hostSurveyVar.mealsAttr.mealItemInfoAttr, function (p) {
return p.isEditAttr;
}, callContext);

// No more Meals in Edit?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JHfkHeMY00uw+EQOHfVMWg", callContext.id) && !(listFilter_IsEditVar.value.filteredListOut.isEmpty))) {
// Foreach ListFilter_IsEdit.FilteredList
callContext.iterationContext.registerIterationStart(listFilter_IsEditVar.value.filteredListOut);
try {var filteredListIterator = callContext.iterationContext.getIterator(listFilter_IsEditVar.value.filteredListOut);
var filteredListIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+5RCxf3lKE+IjkKv93nT2w", callContext.id) && (filteredListIndex < listFilter_IsEditVar.value.filteredListOut.length))) {
filteredListIterator.currentRowNumber = filteredListIndex;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ialXPnQxRUOec5umSYMdUw", callContext.id);
// Execute Action: ListIndexOf_EditItem
listIndexOf_EditItemVar.value = OS.SystemActions.listIndexOf(model.variables.hostSurveyVar.mealsAttr.mealItemInfoAttr, function (p) {
return p.idAttr.equals(listFilter_IsEditVar.value.filteredListOut.getItem(filteredListIndex.valueOf()).idAttr);
}, callContext);

// Found item?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Bz4hWO9gdEiAlLtls2kDlw", callContext.id) && ((listIndexOf_EditItemVar.value.positionOut) !== (-1)))) {
// Has more items?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:m+JlVjA6m0Wn+tNgtLAoDQ", callContext.id) && (vars.value.in_MealItemTriggerPositionInLocal < listIndexOf_EditItemVar.value.positionOut))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7gRx7Pt4GkC5l5lgM07g6A", callContext.id);
return ;

}

}

filteredListIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(listFilter_IsEditVar.value.filteredListOut);
}

}

// Set TrySave
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IY3JLihKh0ady4hx298reQ", callContext.id);
// StepProperties.Meals.TrySave = False
model.variables.stepPropertiesVar.mealsAttr.trySaveAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9CZHvfqMmUmGroM2nDuS8g", callContext.id);
// Execute Action: SetStepData
controller._setStepData$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3BPiVwvUtUa6WFxUmm+O2g", callContext.id);
// Execute Action: ValidateStepEdit
controller._validateStepEdit$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rRT8bxUePEa7TY1AOgEunw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:E1suVY6_ik2XZQzkwqLKJQ", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.SaveMultipleMeals_Success$vars", [{
name: "In_MealItemTriggerPosition",
attrName: "in_MealItemTriggerPositionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._survey_Next$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Survey_Next");
callContext = controller.callContext(callContext);
var listIndexOf_NextStepVar = new OS.DataTypes.VariableHolder();
var listFilter_GetNextStepVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.listIndexOf_NextStepVar = listIndexOf_NextStepVar;
varBag.listFilter_GetNextStepVar = listFilter_GetNextStepVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:8aVfX7tU9EC8o3i6ivSfzQ:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ClientActions.8aVfX7tU9EC8o3i6ivSfzQ:M0rKQ_CxYnLNtURO4FhiVQ", "Connect2_OrbitMobile_MUI", "Survey_Next", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RSgELzFQ5kaALg34Z+yDyA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Is Last Step?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:r9665zaR+02Z9RdQKnN0uA", callContext.id) && (model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.summary))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0dvjfuh4fEKneYY4OWzDyQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fEocv9xy80aAJcYellKQEQ", callContext.id);
// Execute Action: ListFilter_GetNextStep
listFilter_GetNextStepVar.value = OS.SystemActions.listFilter(model.variables.getLocalHostSurveyStepsAggr.listOut, function (p) {
return (p.localHostSurveyStepAttr.orderAttr > model.variables.currentStepVar.localHostSurveyStepAttr.orderAttr);
}, callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SPeHx8gJSUeeqIsMMo9zog", callContext.id);
// Execute Action: ListSort_Ascending
OS.SystemActions.listSort(listFilter_GetNextStepVar.value.filteredListOut, function (p) {
return p.localHostSurveyStepAttr.orderAttr;
}, true, callContext);
// Found step?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:a3aeIhB0OEmD8DxSUHPpXA", callContext.id) && !(listFilter_GetNextStepVar.value.filteredListOut.isEmpty))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:81MWW4m2W0ufpliPvxQV_w", callContext.id);
// Execute Action: ListIndexOf_NextStep
listIndexOf_NextStepVar.value = OS.SystemActions.listIndexOf(model.variables.getLocalHostSurveyStepsAggr.listOut, function (p) {
return (p.localHostSurveyStepAttr.idAttr === listFilter_GetNextStepVar.value.filteredListOut.getItem(0).localHostSurveyStepAttr.idAttr);
}, callContext);

// Set CurrentStep
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:18m_n7JwekqORp4+D7_SGg", callContext.id);
// CurrentStep.LocalHostSurveyStep = ListFilter_GetNextStep.FilteredList[0]
model.variables.currentStepVar.localHostSurveyStepAttr = listFilter_GetNextStepVar.value.filteredListOut.getItem(0).localHostSurveyStepAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:18m_n7JwekqORp4+D7_SGg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// CurrentStep.CurrentRowNumber = ListIndexOf_NextStep.Position
model.variables.currentStepVar.currentRowNumberAttr = listIndexOf_NextStepVar.value.positionOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qaZ3+5oACEy4ZDpqofEn5Q", callContext.id);
// Execute Action: RefreshStaticEntities
return controller._refreshStaticEntities$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:kVAr87FaukeNhvR0r365kA", callContext.id);
// Execute Action: ValidateStepEdit
controller._validateStepEdit$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TGNzySkceEePFOwRN2XTbA", callContext.id);
// Execute Action: SetStepData
controller._setStepData$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qZAKfAODw0ixwg8r15IHTg", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5k5j9Ysd7U2o1428LjE_FA", callContext.id);
}

});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:8aVfX7tU9EC8o3i6ivSfzQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:8aVfX7tU9EC8o3i6ivSfzQ", callContext.id);
throw ex;

});
};
Controller.prototype._onHandle_SaveFailed$Action = function (in_CurrentRowNumberIn, in_DisableMessageIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_SaveFailed");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.OnHandle_SaveFailed$vars"))());
vars.value.in_CurrentRowNumberInLocal = in_CurrentRowNumberIn;
vars.value.in_DisableMessageInLocal = in_DisableMessageIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:9vHKYwO18EC9SaHzXfqyww:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ClientActions.9vHKYwO18EC9SaHzXfqyww:zaMSvM5RKcq+cseQvd9ZSA", "Connect2_OrbitMobile_MUI", "OnHandle_SaveFailed", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mLmhF0hW+EKJmwsgOwpgyQ", callContext.id);
// Current Step
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QqtJj_C0Ak+N65hZ21XnXA", callContext.id) && (model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.accommodation))) {
// AttemptSave
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9V5YBGz+R0uOfhhl58WO6A", callContext.id);
// StepProperties.Accommodation.TrySave = False
model.variables.stepPropertiesVar.accommodationAttr.trySaveAttr = false;
} else {
if((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.meal)) {
// AttemptSave
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gjDW7hK5lEqeEIyp9b4etg", callContext.id);
// HostSurvey.Meals.MealItemInfo[In_CurrentRowNumber].ResetMealData = False
model.variables.hostSurveyVar.mealsAttr.mealItemInfoAttr.getItem(vars.value.in_CurrentRowNumberInLocal).resetMealDataAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:cxkY61rbqk6sAypo1gT8jw", callContext.id);
// Execute Action: SaveMultipleMeals_Failed
controller._saveMultipleMeals_Failed$Action(vars.value.in_CurrentRowNumberInLocal, callContext);
// Is still saving?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Gi7pBvrCvUuC9IghWuYyPg", callContext.id) && model.variables.stepPropertiesVar.mealsAttr.trySaveAttr)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SbVtnlLDD02ggB6bRa2yDA", callContext.id);
return ;

}

} else {
if((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.helper)) {
// AttemptSave
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rarYd3tRMUiv+9Oe7yyphg", callContext.id);
// StepProperties.Helpers.TrySave = False
model.variables.stepPropertiesVar.helpersAttr.trySaveAttr = false;
} else {
if((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.vehicle)) {
// AttemptSave
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:R0dpbYmig0uUuT4uYaai_w", callContext.id);
// StepProperties.Vehicles.TrySave = False
model.variables.stepPropertiesVar.vehiclesAttr.trySaveAttr = false;
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WbNUlLP+oUaj21kWdV62tw", callContext.id);
return ;

}

}

}

}

if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7+1rov0cs0mm6mkfLNeYlQ", callContext.id) && !(vars.value.in_DisableMessageInLocal))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:D1bZ0ZjkVU+BGvN75yKPBw", callContext.id);
// Execute Action: FeedbackMessage_AutoClose
UBTJavaScriptUtilsController.default.feedbackMessage_AutoClose$Action("", "Ensure you complete all required fields.", Connect2_OrbitMobile_MUIModel.staticEntities.uBT_MessageType.error, true, "", 0, false, callContext);
}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NiN2k5qT+EuX4raH3AVjxw", callContext.id);
// Execute Action: FocusOnFirstInvalidInput
Connect2_OrbitMobile_MUIController.default.focusOnFirstInvalidInput$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:k_hD+qeMWkSDMuCIWr0Rrw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:9vHKYwO18EC9SaHzXfqyww", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.OnHandle_SaveFailed$vars", [{
name: "In_CurrentRowNumber",
attrName: "in_CurrentRowNumberInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "In_DisableMessage",
attrName: "in_DisableMessageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._refreshData$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("RefreshData");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:ARxDa3ICrUKZPp9RF49DSQ:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ClientActions.ARxDa3ICrUKZPp9RF49DSQ:8flPYD2gmuWuSBgI0IX4aQ", "Connect2_OrbitMobile_MUI", "RefreshData", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:76mvcDAcPk2vDktzD19JWw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ZiFETncSHUiyRR8YCaFVzw", callContext.id);
// Refresh Query: GetHostSurvey
var result = controller.getHostSurvey$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zmYP5RScgEec8erkfvzHjQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:ARxDa3ICrUKZPp9RF49DSQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:ARxDa3ICrUKZPp9RF49DSQ", callContext.id);
throw ex;

});
};
Controller.prototype._saveMultipleMeals_Failed$Action = function (in_MealItemTriggerPositionIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("SaveMultipleMeals_Failed");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.SaveMultipleMeals_Failed$vars"))());
vars.value.in_MealItemTriggerPositionInLocal = in_MealItemTriggerPositionIn;
var listFilter_IsEditAndNotSelfVar = new OS.DataTypes.VariableHolder();
var listIndexOf_EditItemVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.listFilter_IsEditAndNotSelfVar = listFilter_IsEditAndNotSelfVar;
varBag.listIndexOf_EditItemVar = listIndexOf_EditItemVar;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:AEXPbrmn+EW1szscvNtbpA:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ClientActions.AEXPbrmn+EW1szscvNtbpA:qATLke5uIoMRnUtkwgbjyw", "Connect2_OrbitMobile_MUI", "SaveMultipleMeals_Failed", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:r2QTDScrDUeIVjdLRw1ayQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XsvINUcfkUu0auOJufpbRA", callContext.id);
// Execute Action: ListFilter_IsEditAndNotSelf
listFilter_IsEditAndNotSelfVar.value = OS.SystemActions.listFilter(model.variables.hostSurveyVar.mealsAttr.mealItemInfoAttr, function (p) {
return (p.isEditAttr && !(p.idAttr.equals(model.variables.hostSurveyVar.mealsAttr.mealItemInfoAttr.getItem(vars.value.in_MealItemTriggerPositionInLocal).idAttr)));
}, callContext);

// No more Meals in Edit?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:joknKZpBY0yZqktGabVUMg", callContext.id) && !(listFilter_IsEditAndNotSelfVar.value.filteredListOut.isEmpty))) {
// Foreach ListFilter_IsEditAndNotSelf.FilteredList
callContext.iterationContext.registerIterationStart(listFilter_IsEditAndNotSelfVar.value.filteredListOut);
try {var filteredListIterator = callContext.iterationContext.getIterator(listFilter_IsEditAndNotSelfVar.value.filteredListOut);
var filteredListIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Ry6C2JzEE0C1DtcKhKXNHw", callContext.id) && (filteredListIndex < listFilter_IsEditAndNotSelfVar.value.filteredListOut.length))) {
filteredListIterator.currentRowNumber = filteredListIndex;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xvPY4yPmykGrYo+KeKdnOQ", callContext.id);
// Execute Action: ListIndexOf_EditItem
listIndexOf_EditItemVar.value = OS.SystemActions.listIndexOf(model.variables.hostSurveyVar.mealsAttr.mealItemInfoAttr, function (p) {
return p.idAttr.equals(listFilter_IsEditAndNotSelfVar.value.filteredListOut.getItem(filteredListIndex.valueOf()).idAttr);
}, callContext);

// Found item?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XEbY5GbDWE2FeQddIW+ZEg", callContext.id) && ((listIndexOf_EditItemVar.value.positionOut) !== (-1)))) {
// Has more items?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ZPnAhzLZXkOtM8XQjeMdQw", callContext.id) && (vars.value.in_MealItemTriggerPositionInLocal < listIndexOf_EditItemVar.value.positionOut))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VIugSl5KSkKcExJuQYw71Q", callContext.id);
return ;

}

}

filteredListIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(listFilter_IsEditAndNotSelfVar.value.filteredListOut);
}

}

// Set TrySave
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7u4QCgq9VE6sKi4cUjRHJA", callContext.id);
// StepProperties.Meals.TrySave = False
model.variables.stepPropertiesVar.mealsAttr.trySaveAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NQSeZa84_U+Jsl6ZY_+DhQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:AEXPbrmn+EW1szscvNtbpA", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.SaveMultipleMeals_Failed$vars", [{
name: "In_MealItemTriggerPosition",
attrName: "in_MealItemTriggerPositionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._refreshStaticEntities$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("RefreshStaticEntities");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:AMZuclWVR0uvlkLD_pZxwA:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ClientActions.AMZuclWVR0uvlkLD_pZxwA:scvEffOo5yyVOGnCGLoTAg", "Connect2_OrbitMobile_MUI", "RefreshStaticEntities", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:EaUciFnXTkmOdhXc2TOHUw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Is Accommodation?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lbj_Tk1ep0iZ6IBDkxlziw", callContext.id) && ((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.accommodation) || ((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.summary) && (model.variables.hostSurveyVar.surveyInfoAttr.accommodationSurveyAttr && model.variables.hostSurveyVar.surveyInfoAttr.accommodationSurveyUpdateAttr))))) {
// Fetched Floors?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:g9+2OxmyHEKftNCF+KkG7Q", callContext.id) && !(model.variables.getLocalHouseFloorsAggr.isDataFetchedAttr))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qcItGPF09kixfaC4J8JU8A", callContext.id);
// Refresh Query: GetLocalHouseFloors
var result = controller.getLocalHouseFloors$AggrRefresh(4, 0, callContext);
model.flush();
return result;
}

}).then(function () {
// Fetched Gender Preferences?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2F1vZVLlf0W8TmeKBEz5fg", callContext.id) && !(model.variables.getLocalGenderPreferencesAggr.isDataFetchedAttr))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bnoHFy8wZEeEOkKvHXqV4w", callContext.id);
// Refresh Query: GetLocalGenderPreferences
var result = controller.getLocalGenderPreferences$AggrRefresh(4, 0, callContext);
model.flush();
return result;
}

});
}).then(function () {
// Fetched Bed Sizes?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:EeP02Ulr6U2EBruA82asaA", callContext.id) && !(model.variables.getLocalBedSizesAggr.isDataFetchedAttr))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:L025PwDrlkOiUgAU9RXxjg", callContext.id);
// Refresh Query: GetLocalBedSizes
var result = controller.getLocalBedSizes$AggrRefresh(5, 0, callContext);
model.flush();
return result;
}

});
}).then(function () {
// Is Summary?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ULdImQgKtkOlMHIaS2A_LQ", callContext.id) && !((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.summary)))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rOw7YhnoEEGzoyKmCEfieg", callContext.id);
return OS.Flow.returnAsync();

}

});
}

}).then(function () {
// Is Meals?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6foyqzxwh02g6zJO5RqqVg", callContext.id) && ((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.meal) || ((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.summary) && (model.variables.hostSurveyVar.surveyInfoAttr.mealSurveyAttr && model.variables.hostSurveyVar.surveyInfoAttr.mealSurveyUpdateAttr))))) {
// Fetched Meal Types?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XTBtTOdPH0GqYu0lUYL5BA", callContext.id) && !(model.variables.getLocalMealTypesAggr.isDataFetchedAttr))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:u3igS56RCUS1xJfUJcB+dA", callContext.id);
// Refresh Query: GetLocalMealTypes
var result = controller.getLocalMealTypes$AggrRefresh(10, 0, callContext);
model.flush();
return result;
}

}).then(function () {
// Is Summary?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xPx7V8j6XUOxTrWQISIbeA", callContext.id) && !((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.summary)))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6o1Em2ArbkCkSxmbJyWrRQ", callContext.id);
return OS.Flow.returnAsync();

}

});
}

});
}).then(function () {
// Is Helper?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:eejJEN3OnkqKRFs+69lb8w", callContext.id) && ((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.helper) || ((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.summary) && model.variables.hostSurveyVar.surveyInfoAttr.helperSurveyAttr)))) {
// Fetched Helper Status?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VfQ7vrY5I0qLTgHF2oHRwQ", callContext.id) && !(model.variables.getLocalHelperStatusAggr.isDataFetchedAttr))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oZwKiYwLHkWEKrvSEeXVMg", callContext.id);
// Refresh Query: GetLocalHelperStatus
var result = controller.getLocalHelperStatus$AggrRefresh(10, 0, callContext);
model.flush();
return result;
}

}).then(function () {
// Fetched Helper Roles?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VinQD1PMz0+ubjzO6zqVRg", callContext.id) && !(model.variables.getLocalHelperRolesAggr.isDataFetchedAttr))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3MtBcglOu0C9jqhpuSHIWg", callContext.id);
// Refresh Query: GetLocalHelperRoles
var result = controller.getLocalHelperRoles$AggrRefresh(20, 0, callContext);
model.flush();
return result;
}

});
}).then(function () {
// Is Summary?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lvkFN3zwVEuhholM_PjXGw", callContext.id) && !((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.summary)))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jb93a_PdhEuhgXpardorXg", callContext.id);
return OS.Flow.returnAsync();

}

});
}

});
}).then(function () {
// Is Vehicles?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1O1Z1fbqVU24Gszwgj7V6A", callContext.id) && ((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.vehicle) || ((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.summary) && model.variables.hostSurveyVar.surveyInfoAttr.vehicleSurveyAttr)))) {
// Fetched Vehicle Owners?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5D7I3tHC+US4SpL4ApnqWQ", callContext.id) && !(model.variables.getLocalVehicleOwnersAggr.isDataFetchedAttr))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:F0D3sgXad0+OEwcTvYWtcg", callContext.id);
// Refresh Query: GetLocalVehicleOwners
var result = controller.getLocalVehicleOwners$AggrRefresh(4, 0, callContext);
model.flush();
return result;
}

}).then(function () {
// Fetched Vehicle Types?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:sgooZZyZzU2iMj+FTAwiNQ", callContext.id) && model.variables.getLocalVehicleTypesAggr.isDataFetchedAttr)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:iPRDMDyhjEWEzh95b33OVA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mCeE36TG4kyUbL6Y1tqgKQ", callContext.id);
// Refresh Query: GetLocalVehicleTypes
var result = controller.getLocalVehicleTypes$AggrRefresh(8, 0, callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:iPRDMDyhjEWEzh95b33OVA", callContext.id);
});
}

});
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wA+h4MXrCEemx2ZCwVcV4w", callContext.id);
}

});
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:AMZuclWVR0uvlkLD_pZxwA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:AMZuclWVR0uvlkLD_pZxwA", callContext.id);
throw ex;

});
};
Controller.prototype._onHandle_AddHelpers$Action = function (in_HelperItemInfoIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_AddHelpers");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.OnHandle_AddHelpers$vars"))());
vars.value.in_HelperItemInfoInLocal = in_HelperItemInfoIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:7a+ndqxwu0e7ItamMUQJhg:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ClientActions.7a+ndqxwu0e7ItamMUQJhg:d4z12SaB0kavX0L8fkliYg", "Connect2_OrbitMobile_MUI", "OnHandle_AddHelpers", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uC7Wi1Ph0UeuE9KqWauibw", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:c7eTVr00rkSvXCeHqVjl_w", callContext.id);
// Execute Action: ListAppendAll_Helpers
OS.SystemActions.listAppendAll(model.variables.hostSurveyVar.helpersAttr.helperItemInfoAttr, vars.value.in_HelperItemInfoInLocal, callContext);
// Set TrySave
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oMBmeqt5Kk+dLp2uLu5dbQ", callContext.id);
// StepProperties.Helpers.TrySave = False
model.variables.stepPropertiesVar.helpersAttr.trySaveAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TUxClrzShEqtPsXUO+l2qQ", callContext.id);
// IsAddingHelper = False
model.variables.isAddingHelperVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bRJ8i9uHt0Occ72RXD9pCQ", callContext.id);
// Execute Action: ValidateStepEdit
controller._validateStepEdit$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:AkWWBrJOe0GxuQFlQNt6Fg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:7a+ndqxwu0e7ItamMUQJhg", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.OnHandle_AddHelpers$vars", [{
name: "In_HelperItemInfo",
attrName: "in_HelperItemInfoInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new Connect2_OrbitMobile_MUIModel.HostSurvey_HelperItemInfoList();
},
complexType: Connect2_OrbitMobile_MUIModel.HostSurvey_HelperItemInfoList
}]);
Controller.prototype._onAfterFetch_GetHostSurveySteps$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnAfterFetch_GetHostSurveySteps");
callContext = controller.callContext(callContext);
var listFilter_DataStepsVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.listFilter_DataStepsVar = listFilter_DataStepsVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:217jdteMiUeSZi5dFUfPFw:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ClientActions.217jdteMiUeSZi5dFUfPFw:Uto_Ym_LzXZStdyTm8E_fA", "Connect2_OrbitMobile_MUI", "OnAfterFetch_GetHostSurveySteps", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ev47Zly0t0mhR_10yUHIZw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Set Default Step
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DsJnsD+mJU2PrwZIkgnIIg", callContext.id);
// CurrentStep.LocalHostSurveyStep = GetLocalHostSurveySteps.List.Current
model.variables.currentStepVar.localHostSurveyStepAttr = model.variables.getLocalHostSurveyStepsAggr.listOut.getCurrent(callContext.iterationContext).localHostSurveyStepAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DsJnsD+mJU2PrwZIkgnIIg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// CurrentStep.CurrentRowNumber = GetLocalHostSurveySteps.List.CurrentRowNumber
model.variables.currentStepVar.currentRowNumberAttr = model.variables.getLocalHostSurveyStepsAggr.listOut.getCurrentRowNumber(callContext.iterationContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qKy6eJOho0ibPDbA3Vs81Q", callContext.id);
// Execute Action: ListFilter_DataSteps
listFilter_DataStepsVar.value = OS.SystemActions.listFilter(model.variables.getLocalHostSurveyStepsAggr.listOut, function (p) {
return p.localHostSurveyStepAttr.isDataStepAttr;
}, callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ZRaXYwcf3k6yGM5W738zxQ", callContext.id);
// HasDataSteps = notListFilter_DataSteps.FilteredList.Empty
model.variables.hasDataStepsVar = !(listFilter_DataStepsVar.value.filteredListOut.isEmpty);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:HVF_qUMajU2VTV4Ho2Y7NA", callContext.id);
// Execute Action: RefreshStaticEntities
return controller._refreshStaticEntities$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gs8LwshvoUOpnTjNjB1gRw", callContext.id);
// Execute Action: SetStepData
controller._setStepData$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Sqy9h_hRFkiSm5YMDacIkg", callContext.id);
// Execute Action: ValidateStepEdit
controller._validateStepEdit$Action(callContext);
// Set IsFetching
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:CAVTR_E5A0iPpwfmicvcfw", callContext.id);
// IsFetchingData = False
model.variables.isFetchingDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mFDbK+8JbUin6xlkTzwoZA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:217jdteMiUeSZi5dFUfPFw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:217jdteMiUeSZi5dFUfPFw", callContext.id);
throw ex;

});
};
Controller.prototype._cancelEdit$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("CancelEdit");
callContext = controller.callContext(callContext);
var listIndexOf_VehiclesVar = new OS.DataTypes.VariableHolder();
var listIndexOf_RoomsVar = new OS.DataTypes.VariableHolder();
var listIndexOf_HelpersVar = new OS.DataTypes.VariableHolder();
var listFilter_MealsVar = new OS.DataTypes.VariableHolder();
var listIndexOf_CurrentVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.listIndexOf_VehiclesVar = listIndexOf_VehiclesVar;
varBag.listIndexOf_RoomsVar = listIndexOf_RoomsVar;
varBag.listIndexOf_HelpersVar = listIndexOf_HelpersVar;
varBag.listFilter_MealsVar = listFilter_MealsVar;
varBag.listIndexOf_CurrentVar = listIndexOf_CurrentVar;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:G9Z2dx6dckabhT+MCd2CSA:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ClientActions.G9Z2dx6dckabhT+MCd2CSA:3RTXsO0EjtTBGhoZCO6iJA", "Connect2_OrbitMobile_MUI", "CancelEdit", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SzpLWPaY1ku1gATasw9P5g", callContext.id);
// Current Step
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:C25IJquxU0aBUAOARo_sgQ", callContext.id) && (model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.accommodation))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UjmkjercKkyYsBne9YLDIg", callContext.id);
// Execute Action: ListIndexOf_Rooms
listIndexOf_RoomsVar.value = OS.SystemActions.listIndexOf(model.variables.hostSurveyVar.roomsAttr.hostSurvey_RoomItemAttr, function (p) {
return p.isEditAttr;
}, callContext);

// Exists?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LzHyZPivsUmMtFPikcXjpQ", callContext.id) && ((listIndexOf_RoomsVar.value.positionOut) !== (-1)))) {
// Has data?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0iEFX2yW8kKsxjPLrAtknQ", callContext.id) && ((model.variables.hostSurveyVar.roomsAttr.hostSurvey_RoomItemAttr.getItem(listIndexOf_RoomsVar.value.positionOut).nameAttr) !== ("")))) {
// Set IsEdit
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:H92x4D21NUipmi5TYh4LIw", callContext.id);
// HostSurvey.Rooms.HostSurvey_RoomItem[ListIndexOf_Rooms.Position].IsEdit = False
model.variables.hostSurveyVar.roomsAttr.hostSurvey_RoomItemAttr.getItem(listIndexOf_RoomsVar.value.positionOut).isEditAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fDgNl2yg6kyfNu_bQ7D+aA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:MqCaVLevBkitLvch8a9u8g", callContext.id);
// PositionToDelete = ListIndexOf_Rooms.Position
model.variables.positionToDeleteVar = listIndexOf_RoomsVar.value.positionOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:w4ByV3B6F0Wd3wH6fYc9nA", callContext.id);
// Execute Action: DeleteItem_Room
controller._deleteItem$Action(model.variables.positionToDeleteVar, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9UCfUfo47Emt3qFSJo2M9g", callContext.id);
// Execute Action: SetStepData_Room
controller._setStepData$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fDgNl2yg6kyfNu_bQ7D+aA", callContext.id);
}

} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VS7NyU2zY0iP_y+23er7Tg", callContext.id);
}

} else {
if((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.meal)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rldG8cmhXkqP3+pCa71uQQ", callContext.id);
// Execute Action: ListFilter_Meals
listFilter_MealsVar.value = OS.SystemActions.listFilter(model.variables.hostSurveyVar.mealsAttr.mealItemInfoAttr, function (p) {
return p.isEditAttr;
}, callContext);

// Found?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:meAy8xhAwku_5hSAHNIo8g", callContext.id) && !(listFilter_MealsVar.value.filteredListOut.isEmpty))) {
// Cycle Filter List
// Foreach ListFilter_Meals.FilteredList
callContext.iterationContext.registerIterationStart(listFilter_MealsVar.value.filteredListOut);
try {var filteredListIterator = callContext.iterationContext.getIterator(listFilter_MealsVar.value.filteredListOut);
var filteredListIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qukD3P_YFU2mQjqtZL127w", callContext.id) && (filteredListIndex < listFilter_MealsVar.value.filteredListOut.length))) {
filteredListIterator.currentRowNumber = filteredListIndex;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uA5E+fOlWUKDVRjBowKTDw", callContext.id);
// Execute Action: ListIndexOf_Current
listIndexOf_CurrentVar.value = OS.SystemActions.listIndexOf(model.variables.hostSurveyVar.mealsAttr.mealItemInfoAttr, function (p) {
return p.idAttr.equals(listFilter_MealsVar.value.filteredListOut.getItem(filteredListIndex.valueOf()).idAttr);
}, callContext);

// Has both capacities?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nDKIPZ6oTEybqmTArzwExA", callContext.id) && (((listFilter_MealsVar.value.filteredListOut.getCurrent(callContext.iterationContext).comfortableCapacityAttr) !== ("")) && ((listFilter_MealsVar.value.filteredListOut.getCurrent(callContext.iterationContext).stretchCapacityAttr) !== (""))))) {
// Set IsEdit to False
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_TI26hX36UGriktobqSv8w", callContext.id);
// HostSurvey.Meals.MealItemInfo[ListIndexOf_Current.Position].IsEdit = False
model.variables.hostSurveyVar.mealsAttr.mealItemInfoAttr.getItem(listIndexOf_CurrentVar.value.positionOut).isEditAttr = false;
} else {
// Reset Meal Data
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:sGGW1TrlIESAETNO3ypNkw", callContext.id);
// HostSurvey.Meals.MealItemInfo[ListIndexOf_Current.Position].ResetMealData = True
model.variables.hostSurveyVar.mealsAttr.mealItemInfoAttr.getItem(listIndexOf_CurrentVar.value.positionOut).resetMealDataAttr = true;
}

filteredListIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(listFilter_MealsVar.value.filteredListOut);
}

}

// Reset Meal Note
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:m9v18ptUTUOSAF265HYCTg", callContext.id);
// HostSurvey.Meals.MealNote = GetHostSurvey.Response.Meals.MealNote
model.variables.hostSurveyVar.mealsAttr.mealNoteAttr = model.variables.getHostSurveyDataAct.responseOut.mealsAttr.mealNoteAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KPtJtqLuAkuQAPNJFLX07g", callContext.id);
} else {
if((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.helper)) {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bdFsGiE_c0StU_Pz+uK7bQ", callContext.id) && model.variables.isAddingHelperVar)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:z704lAWtJky1Ea0WWUduyg", callContext.id);
// IsAddingHelper = False
model.variables.isAddingHelperVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:iG0cOO8p2EiTLyn6QN7hhQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rb7p6Kttp0qHr9L6nvwU5Q", callContext.id);
// Execute Action: ListIndexOf_Helpers
listIndexOf_HelpersVar.value = OS.SystemActions.listIndexOf(model.variables.hostSurveyVar.helpersAttr.helperItemInfoAttr, function (p) {
return p.isEditAttr;
}, callContext);

// Exists?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UKraoN67rkuHYKjPFoy4TA", callContext.id) && ((listIndexOf_HelpersVar.value.positionOut) !== (-1)))) {
// Has data?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:g2CepiwBvUms8JXV_P0yeA", callContext.id) && !(model.variables.hostSurveyVar.helpersAttr.helperItemInfoAttr.getItem(listIndexOf_HelpersVar.value.positionOut).memberIdAttr.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier()))))) {
// Set IsEdit to False
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:r+w++TQt0UqOJE8P3oAEyA", callContext.id);
// HostSurvey.Helpers.HelperItemInfo[ListIndexOf_Helpers.Position].IsEdit = False
model.variables.hostSurveyVar.helpersAttr.helperItemInfoAttr.getItem(listIndexOf_HelpersVar.value.positionOut).isEditAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LBMscmBuwkSZ0EQzzhHC+A", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bW9wWXi32kuNDPrRG+_ebQ", callContext.id);
// PositionToDelete = ListIndexOf_Helpers.Position
model.variables.positionToDeleteVar = listIndexOf_HelpersVar.value.positionOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Tp1y_eU+Yk2Ehc06cBa6lw", callContext.id);
// Execute Action: DeleteItem_Helper
controller._deleteItem$Action(model.variables.positionToDeleteVar, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LBMscmBuwkSZ0EQzzhHC+A", callContext.id);
}

} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:iG0cOO8p2EiTLyn6QN7hhQ", callContext.id);
}

}

} else {
if((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.vehicle)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:g3pFdycCo0i7eQTv5e61WQ", callContext.id);
// Execute Action: ListIndexOf_Vehicles
listIndexOf_VehiclesVar.value = OS.SystemActions.listIndexOf(model.variables.hostSurveyVar.vehiclesAttr.vehicleItemInfoAttr, function (p) {
return p.isEditAttr;
}, callContext);

// Exists?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:hpGRP8joykqBWT0xl8PRlQ", callContext.id) && ((listIndexOf_VehiclesVar.value.positionOut) !== (-1)))) {
// Has data?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:y2zZ78sx+EKyoeS0afECWg", callContext.id) && ((model.variables.hostSurveyVar.vehiclesAttr.vehicleItemInfoAttr.getItem(listIndexOf_VehiclesVar.value.positionOut).ownerTypeAttr) !== ("")))) {
// Set IsEdit to False
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:u9V_+auYf0m4qxFul7dkqQ", callContext.id);
// HostSurvey.Vehicles.VehicleItemInfo[ListIndexOf_Vehicles.Position].IsEdit = False
model.variables.hostSurveyVar.vehiclesAttr.vehicleItemInfoAttr.getItem(listIndexOf_VehiclesVar.value.positionOut).isEditAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nR9vWx3gNE6o9+gBlcQwyg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5bqsjV0xS0eTH+BhhLIHqg", callContext.id);
// PositionToDelete = ListIndexOf_Vehicles.Position
model.variables.positionToDeleteVar = listIndexOf_VehiclesVar.value.positionOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9PnfXjgp80SexkEDx_Bn4Q", callContext.id);
// Execute Action: DeleteItem_Vehicle
controller._deleteItem$Action(model.variables.positionToDeleteVar, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nR9vWx3gNE6o9+gBlcQwyg", callContext.id);
}

} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2LiKPs5KxkOv7M3v5DBsog", callContext.id);
}

} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Zok7YlUcjUOwTH0Iy99w+A", callContext.id);
}

}

}

}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:G9Z2dx6dckabhT+MCd2CSA", callContext.id);
}

};
Controller.prototype._refreshLocalSurveyStatus$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("RefreshLocalSurveyStatus");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:twAchJ1tcU6jHQz6Ypyz1Q:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ClientActions.twAchJ1tcU6jHQz6Ypyz1Q:XfvlUzA1j5YeGAvXblTxhA", "Connect2_OrbitMobile_MUI", "RefreshLocalSurveyStatus", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Xsk+ZiwJh06XOzd9vToaNw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Fetched Current Status?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Emf+D6R0Z0qpqU7ySSiG3w", callContext.id) && model.variables.getCurrentLocalSurveyStatusAggr.isDataFetchedAttr)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3LjL1XpYTU25b6RUhPCilg", callContext.id);
// Execute Action: RefreshLocalSurveySteps
return controller._refreshLocalSurveySteps$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7mMGF13AB0KBp1DQ2ZlfbQ", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fU1aLATcokmOvPi3OPbCfw", callContext.id);
// Refresh Query: GetCurrentLocalSurveyStatus
var result = controller.getCurrentLocalSurveyStatus$AggrRefresh(1, 0, callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7mMGF13AB0KBp1DQ2ZlfbQ", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:twAchJ1tcU6jHQz6Ypyz1Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:twAchJ1tcU6jHQz6Ypyz1Q", callContext.id);
throw ex;

});
};
Controller.prototype._postHostSurvey$Action = function (surveyStatusIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("PostHostSurvey");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.PostHostSurvey$vars"))());
vars.value.surveyStatusInLocal = surveyStatusIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var postHostSurvey2Var = new OS.DataTypes.VariableHolder();
var getSurveyStatusByIdVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.postHostSurvey2Var = postHostSurvey2Var;
varBag.getSurveyStatusByIdVar = getSurveyStatusByIdVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:RqltjkvYTEOblqBifG0+lA:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ClientActions.RqltjkvYTEOblqBifG0+lA:mlPoptVDObDAbrRzjyQfTA", "Connect2_OrbitMobile_MUI", "PostHostSurvey", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nBHX5tjiu0Cztmt_gbR9NQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:g90WdSuZAEy7bt1ioG4PLQ", callContext.id);
// Execute Action: GetSurveyStatusById
model.flush();
return Connect2_OrbitMobile_MUIController.default.getSurveyStatusById$Action(vars.value.surveyStatusInLocal, callContext).then(function (value) {
getSurveyStatusByIdVar.value = value;
}).then(function () {
// Set Status
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uA4I_XnIPEenLFZE+9ew+Q", callContext.id);
// HostSurvey.SurveyInfo.HostProfileSurveyStatus = GetSurveyStatusById.Out_SurveyStatus.JSON_Name
model.variables.hostSurveyVar.surveyInfoAttr.hostProfileSurveyStatusAttr = getSurveyStatusByIdVar.value.out_SurveyStatusOut.jSON_NameAttr;
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2iiSiqztZUO_6kW7mx4M8Q", callContext.id) && (!(model.variables.hostSurveyVar.vehiclesAttr.hasVehiclesAttr) && !(model.variables.hostSurveyVar.vehiclesAttr.vehicleItemInfoAttr.isEmpty)))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jxmEsdJFI0CsDDbBO_j3AA", callContext.id);
// Execute Action: ListClearVehicles
OS.SystemActions.listClear(model.variables.hostSurveyVar.vehiclesAttr.vehicleItemInfoAttr, callContext);
}

return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ulVj4uYQP0yGNcjWx9Al0Q", callContext.id) && model.variables.isPostingSurveyVar)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:cxwpc4tbaUulF+0TyJJTxQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KkbxwEg9lk+VAhB63equRw", callContext.id);
// IsPostingSurvey = True
model.variables.isPostingSurveyVar = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+k0NT8QbaUywTuD1S9wYUA", callContext.id);
// Execute Action: PostHostSurvey2
model.flush();
return controller.postHostSurvey$ServerAction(model.variables.hostSurveyVar, callContext).then(function (value) {
postHostSurvey2Var.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YXevC7deSUGsvzHrfuE7ow", callContext.id);
// SurveySubmitted = True
model.variables.surveySubmittedVar = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YXevC7deSUGsvzHrfuE7ow", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// IsPostingSurvey = False
model.variables.isPostingSurveyVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vgDBG6IZB06rxpUw_ulUMQ", callContext.id);
});
}

});
});
}).catch(function (ex) {
OS.Logger.trace("ScreenBlock_HostSurvey.PostHostSurvey", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oNd+i1+I7U+qkn5+u06HNw", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:M7MKmRRRvEK1gak6WVLJdQ", callContext.id);
// IsPostingSurvey = False
model.variables.isPostingSurveyVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+pD30zNjJ0iMpPw4d6+4Zg", callContext.id);
return OS.Flow.returnAsync();

});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:RqltjkvYTEOblqBifG0+lA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:RqltjkvYTEOblqBifG0+lA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.PostHostSurvey$vars", [{
name: "SurveyStatus",
attrName: "surveyStatusInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._onHandle_PopUp_Primary$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_PopUp_Primary");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:a8lDoOFwTEWQ2HmefuGrEg:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ClientActions.a8lDoOFwTEWQ2HmefuGrEg:2iDWvACh7HRYSVh+KzEVmw", "Connect2_OrbitMobile_MUI", "OnHandle_PopUp_Primary", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WXt6A4oNjkOJUHiOTdKvMw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:f+q4M7r22kmaHASoZGfocQ", callContext.id) && model.variables.popUpInfoVar.isShowPopup_CancelAttr)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XW9YY87wMEO5wdaj5JadkA", callContext.id);
// Execute Action: CancelEdit
controller._cancelEdit$Action(callContext);
} else {
return OS.Flow.executeSequence(function () {
if(model.variables.popUpInfoVar.isShowPopup_DeleteAttr) {
// Is Adding Helper?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jynXxzyuZ0i5l8QcdgoEDA", callContext.id) && ((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.helper) && model.variables.isAddingHelperVar))) {
// Set vars
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0qO25pPUTUKHA2DU72P7zA", callContext.id);
// IsAddingHelper = False
model.variables.isAddingHelperVar = false;
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:t7kPZv+EJEKjTUNlWYDKXQ", callContext.id);
// Execute Action: DeleteItem
controller._deleteItem$Action(model.variables.positionToDeleteVar, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:kLsbNAWHZUWtjCb8EcQ1Qw", callContext.id);
// Execute Action: SetStepData
controller._setStepData$Action(callContext);
}

} else {
return OS.Flow.executeSequence(function () {
if(model.variables.popUpInfoVar.isShowPopup_NoInfoAttr) {
// Current Step
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:E6x6I742QE+vEIQxjcNHsw", callContext.id) && (model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.accommodation))) {
// Is Edit
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:FCBWnUNqU0GeXAfpzRNASA", callContext.id);
// StepProperties.Accommodation.IsEdit = False
model.variables.stepPropertiesVar.accommodationAttr.isEditAttr = false;
} else {
if((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.meal)) {
// Is Edit
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bRnbNy46BUuYnj7_bqfU2Q", callContext.id);
// StepProperties.Meals.IsEdit = False
model.variables.stepPropertiesVar.mealsAttr.isEditAttr = false;
} else {
if((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.helper)) {
// Is Edit
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:sc6vQrKHFEOjtU4dOmj3yw", callContext.id);
// StepProperties.Helpers.IsEdit = False
model.variables.stepPropertiesVar.helpersAttr.isEditAttr = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:sc6vQrKHFEOjtU4dOmj3yw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// IsAddingHelper = False
model.variables.isAddingHelperVar = false;
} else {
if((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.vehicle)) {
// Is Edit
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fclpXqUhJESKLnICQ_kOng", callContext.id);
// StepProperties.Vehicles.IsEdit = False
model.variables.stepPropertiesVar.vehiclesAttr.isEditAttr = false;
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:OyMZ5P9PHkKVPIe5NSFoqw", callContext.id);
return OS.Flow.returnAsync();

}

}

}

}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:q7XTix5BFE+f1UtNseZeYQ", callContext.id);
// Execute Action: ValidateStepEdit_NoInfo
controller._validateStepEdit$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:V0j_YdnygEmHH337elsSIA", callContext.id);
// Execute Action: PopUpClose_NoInfo
controller._onHandle_PopUp_Close$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PlmN9rThtkOAWajeq4nrbA", callContext.id);
// Execute Action: Survey_Next
return controller._survey_Next$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GjstQ8j5_0a2B4j2DnvA6w", callContext.id);
return OS.Flow.returnAsync();

});
} else {
return OS.Flow.executeSequence(function () {
if(model.variables.popUpInfoVar.isShowPopup_ReturnBackAttr) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:MAMsscidxEyHpF6KFGKKDw", callContext.id);
// Execute Action: PostHostSurvey
return controller._postHostSurvey$Action(Connect2_OrbitMobile_MUIModel.staticEntities.surveyStatus.sent, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VUfay+2W_EmbNauU4qX4bw", callContext.id);
// Execute Action: PopUpClose_ReturnBack
controller._onHandle_PopUp_Close$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:hsPszH3cUkuDYunmeD0fOA", callContext.id);
// Trigger Event: NavigateTo_Back
return controller.navigateTo_Back$Action(callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:peglAbEL+0CU4Vjhd3SOsg", callContext.id);
// Execute Action: FeedbackMessageAfterTransition
Connect2_LegacySharedController.default.feedbackMessageAfterTransition$Action("Thank you, your survey has been saved as a draft.", OS.BuiltinFunctions.integerToIdentifier(1), callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4K0Y9lEGQEGRtUWCIupjAA", callContext.id);
return OS.Flow.returnAsync();

});
} else {
return OS.Flow.executeSequence(function () {
if(model.variables.popUpInfoVar.isShowPopup_ReturnNavigationAttr) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5yyOiH74NUau1S0zdNXwvQ", callContext.id);
// Execute Action: CancelEdit_Return
controller._cancelEdit$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UDAH12tRjEKX+dG8pMSk7Q", callContext.id);
// Execute Action: ValidateStepEdit_Return
controller._validateStepEdit$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jB0DpfjVZ024iKcr1gXjGQ", callContext.id);
// Execute Action: PopUpClose_ReturnNavigation
controller._onHandle_PopUp_Close$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:A87sILNx4Ee8G2Vcru3qfg", callContext.id);
// Execute Action: NavigateTo_SpecificStep
return controller._navigateTo_SpecificStep$Action(Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.navigation, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bbcO_L+U4UO0iOCxVA5zYw", callContext.id);
return OS.Flow.returnAsync();

});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9V3i_pqRT06KFh6e2GR5rQ", callContext.id);
return OS.Flow.returnAsync();

}

});
}

});
}

});
}

});
}

}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:o2aUr8WyNEusu8CW75eEhw", callContext.id);
// Execute Action: ValidateStepEdit
controller._validateStepEdit$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:r7LWqGELKkeD2YIyUGmVzA", callContext.id);
// Execute Action: PopUpClose
controller._onHandle_PopUp_Close$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8NxrzoTNikWfAT1KMUd4Sg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:a8lDoOFwTEWQ2HmefuGrEg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:a8lDoOFwTEWQ2HmefuGrEg", callContext.id);
throw ex;

});
};
Controller.prototype._navigateTo_SpecificStep$Action = function (in_HostSurveyStepIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("NavigateTo_SpecificStep");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.NavigateTo_SpecificStep$vars"))());
vars.value.in_HostSurveyStepIdInLocal = in_HostSurveyStepIdIn;
var listIndexOf_SpecificStepVar = new OS.DataTypes.VariableHolder();
var listFilter_SpecificStepVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.listIndexOf_SpecificStepVar = listIndexOf_SpecificStepVar;
varBag.listFilter_SpecificStepVar = listFilter_SpecificStepVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:R5dQsJTh5kax5F738dtIwg:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ClientActions.R5dQsJTh5kax5F738dtIwg:HVLyQCTo_K4ET+UA6nfCoA", "Connect2_OrbitMobile_MUI", "NavigateTo_SpecificStep", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zGR12jwUfEWtiz5nyCzTHQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mXJAT4mnIUKEJxwaj4k0gw", callContext.id) && model.variables.isConfirmedSurveyVar)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uOhu2JENYk+6_NIi77fIAQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JHF_ZzJo2keHIWN0Hsd4+A", callContext.id);
// Execute Action: ListFilter_SpecificStep
listFilter_SpecificStepVar.value = OS.SystemActions.listFilter(model.variables.getLocalHostSurveyStepsAggr.listOut, function (p) {
return (p.localHostSurveyStepAttr.idAttr === vars.value.in_HostSurveyStepIdInLocal);
}, callContext);

// Found step?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:rGu58HK6tUOHh594nBIypw", callContext.id) && !(listFilter_SpecificStepVar.value.filteredListOut.isEmpty))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:7owqELy5EEmSUIyVbOyeQA", callContext.id);
// Execute Action: ListIndexOf_SpecificStep
listIndexOf_SpecificStepVar.value = OS.SystemActions.listIndexOf(model.variables.getLocalHostSurveyStepsAggr.listOut, function (p) {
return (p.localHostSurveyStepAttr.idAttr === listFilter_SpecificStepVar.value.filteredListOut.getItem(0).localHostSurveyStepAttr.idAttr);
}, callContext);

// Set Current Step
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:F0gqQnRv7kqhv5vq3Aq58g", callContext.id);
// CurrentStep.LocalHostSurveyStep = ListFilter_SpecificStep.FilteredList.Current
model.variables.currentStepVar.localHostSurveyStepAttr = listFilter_SpecificStepVar.value.filteredListOut.getCurrent(callContext.iterationContext).localHostSurveyStepAttr;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:F0gqQnRv7kqhv5vq3Aq58g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// CurrentStep.CurrentRowNumber = ListIndexOf_SpecificStep.Position
model.variables.currentStepVar.currentRowNumberAttr = listIndexOf_SpecificStepVar.value.positionOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Oq7ABBU5bEavuz0kPflykg", callContext.id);
// Execute Action: RefreshStaticEntities
return controller._refreshStaticEntities$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ENEzbePo60WZGqJM9qd4wg", callContext.id);
// Execute Action: ValidateStepEdit
controller._validateStepEdit$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:iVs6vcmnW0m6Nb2AAlKtnA", callContext.id);
// Execute Action: SetStepData
controller._setStepData$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WvrVZHV6yEaV9mvp3xz_qQ", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PeZJEuCX5kukXddA2ZBtpA", callContext.id);
}

});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:R5dQsJTh5kax5F738dtIwg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:R5dQsJTh5kax5F738dtIwg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.NavigateTo_SpecificStep$vars", [{
name: "In_HostSurveyStepId",
attrName: "in_HostSurveyStepIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._onAfterFetch_GetLocalHelperRoles$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnAfterFetch_GetLocalHelperRoles");
callContext = controller.callContext(callContext);
var listFilter_EditableRolesVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.listFilter_EditableRolesVar = listFilter_EditableRolesVar;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:iFuZsMleB0qvhs9zuB8_kw:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ClientActions.iFuZsMleB0qvhs9zuB8_kw:Ruul7yJM8JvpdgSX+mNuMQ", "Connect2_OrbitMobile_MUI", "OnAfterFetch_GetLocalHelperRoles", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UDkkl7v3CUyAfGqKR75MeQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:snj26N5RkEiUMXFgIfL3CA", callContext.id);
// Execute Action: ListFilter_EditableRoles
listFilter_EditableRolesVar.value = OS.SystemActions.listFilter(model.variables.getLocalHelperRolesAggr.listOut, function (p) {
return !(p.localHelperRoleAttr.isReadOnlyAttr);
}, callContext);

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:aFB6tbm550iCo5BfWBaHxQ", callContext.id);
// FilteredHelperRoles = ListFilter_EditableRoles.FilteredList
model.variables.filteredHelperRolesVar = OS.DataConversion.JSConversions.typeConvertRecordList(listFilter_EditableRolesVar.value.filteredListOut, new Connect2_OrbitMobile_MUIModel.LocalHelperRoleList(), function (source, target) {
target = source.localHelperRoleAttr;
return target;
});
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:O9nbdHHqTUaUOxOs4YRUQQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:iFuZsMleB0qvhs9zuB8_kw", callContext.id);
}

};
Controller.prototype._setStepData$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("SetStepData");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:OLjOwho6xkeAN6REmA9teQ:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ClientActions.OLjOwho6xkeAN6REmA9teQ:kuzvf9pnIJroitS7oJO9yg", "Connect2_OrbitMobile_MUI", "SetStepData", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5+8B6_0QZUKhFmdOcUN5fA", callContext.id);
// Current Step
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_f_vFYervUmpUQ6dHuoxaA", callContext.id) && (model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.accommodation))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1A3lBFLTYEGEdn+z2y71Sw", callContext.id);
// Execute Action: ListClear
OS.SystemActions.listClear(model.variables.roomNamesVar, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:VWN04syvg0q_yycMbL6KCQ", callContext.id);
// Execute Action: ListAppendAll
OS.SystemActions.listAppendAll(model.variables.roomNamesVar, OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.hostSurveyVar.roomsAttr.hostSurvey_RoomItemAttr, new OS.DataTypes.TextList(), function (source, target) {
target = source.nameAttr;
return target;
}), callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fKlYR12yIE+FdJMSCcbqyQ", callContext.id);
} else {
if((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.meal)) {
// Meals
// Foreach HostSurvey.Meals.MealItemInfo
callContext.iterationContext.registerIterationStart(model.variables.hostSurveyVar.mealsAttr.mealItemInfoAttr);
try {var mealItemInfoIterator = callContext.iterationContext.getIterator(model.variables.hostSurveyVar.mealsAttr.mealItemInfoAttr);
var mealItemInfoIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lS9m1ny6dkaqOOE1lBeoaQ", callContext.id) && (mealItemInfoIndex < model.variables.hostSurveyVar.mealsAttr.mealItemInfoAttr.length))) {
mealItemInfoIterator.currentRowNumber = mealItemInfoIndex;
// Set ResetMealData
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Nr9RfROk3EyWMlNRP1uzxg", callContext.id);
// HostSurvey.Meals.MealItemInfo.Current.ResetMealData = False
model.variables.hostSurveyVar.mealsAttr.mealItemInfoAttr.getItem(mealItemInfoIndex.valueOf()).resetMealDataAttr = false;
mealItemInfoIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.hostSurveyVar.mealsAttr.mealItemInfoAttr);
}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LDgMMjtk4UufUqSLkIw1Zw", callContext.id);
} else {
if((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.helper)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:TPxq_CEt9UC_rNgAxx6gbg", callContext.id);
} else {
if((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.vehicle)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xrnfAMHFckCsz346a9sXyQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:LWFNyEJ0dUOwJ3TK_5ddLg", callContext.id);
}

}

}

}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:OLjOwho6xkeAN6REmA9teQ", callContext.id);
}

};
Controller.prototype._onHandle_PrimaryButton$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_PrimaryButton");
callContext = controller.callContext(callContext);
var getPopUpInfoVar = new OS.DataTypes.VariableHolder();
var getStepPropertiesVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getPopUpInfoVar = getPopUpInfoVar;
varBag.getStepPropertiesVar = getStepPropertiesVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:MgNSzPetukyIy2CiRyOhlg:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ClientActions.MgNSzPetukyIy2CiRyOhlg:qad4fH7zicxkEheAHyStgg", "Connect2_OrbitMobile_MUI", "OnHandle_PrimaryButton", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:gCAJt8M02UG_c630j3sBYQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Is Confirmed Survey?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+SliJGhpwkC_TuGfUGIoGw", callContext.id) && model.variables.isConfirmedSurveyVar)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:v7vlvsIU_E+9Hhp8eqcusQ", callContext.id);
} else {
// Is Data Step?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:aaAQImwk50GLc7_+wKKI0A", callContext.id) && model.variables.currentStepVar.localHostSurveyStepAttr.isDataStepAttr)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Ta2UiJhTMkWFUeKWi4VhVQ", callContext.id);
// Execute Action: ValidateStepEdit
controller._validateStepEdit$Action(callContext);
// Has data?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:eoWspYfQ9U20Bmh6WCCOAQ", callContext.id) && !((((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.accommodation)) ? (model.variables.stepPropertiesVar.accommodationAttr.hasDataAttr) : ((((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.meal)) ? (model.variables.stepPropertiesVar.mealsAttr.hasDataAttr) : ((((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.helper)) ? (model.variables.stepPropertiesVar.helpersAttr.hasDataAttr) : ((((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.vehicle)) ? (model.variables.stepPropertiesVar.vehiclesAttr.hasDataAttr) : (false))))))))))) {
// Is Adding Helper?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:kh08l7a_tkO1lwKtapt3PQ", callContext.id) && !(((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.helper) && model.variables.isAddingHelperVar)))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9hchDF1fb0SeiTwh7Xzs4Q", callContext.id);
// Execute Action: GetPopUpInfo
getPopUpInfoVar.value = Connect2_OrbitMobile_MUIController.default.getPopUpInfo$Action(false, true, false, false, false, callContext);

// Set PopUp Info
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:w6sUcj9wZEG9RBq_M2ammw", callContext.id);
// PopUpInfo.Title = GetPopUpInfo.Out_Title
model.variables.popUpInfoVar.titleAttr = getPopUpInfoVar.value.out_TitleOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:w6sUcj9wZEG9RBq_M2ammw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// PopUpInfo.Message = GetPopUpInfo.Out_Message
model.variables.popUpInfoVar.messageAttr = getPopUpInfoVar.value.out_MessageOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:w6sUcj9wZEG9RBq_M2ammw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// PopUpInfo.IsShowPopup_NoInfo = True
model.variables.popUpInfoVar.isShowPopup_NoInfoAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:w8p+Z7Ek10+yexQmKtjxFg", callContext.id);
return OS.Flow.returnAsync();

}

}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6Xy3ZBSYck2AMxNnIMBGUA", callContext.id);
// Execute Action: GetStepProperties
getStepPropertiesVar.value = Connect2_OrbitMobile_MUIController.default.getStepProperties$Action(model.variables.currentStepVar.localHostSurveyStepAttr, model.variables.stepPropertiesVar, callContext);

// Is Edit?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IXZQdV0AGke4T_4OA1Dw+Q", callContext.id) && getStepPropertiesVar.value.out_CurrentStepPropertiesOut.isEditAttr)) {
// Current Step
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9zqG9P+g_kqhcQYXB_MZ6Q", callContext.id) && (model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.accommodation))) {
// AttemptSave
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Lz2I7e44ME6osV209VqW6w", callContext.id);
// StepProperties.Accommodation.TrySave = True
model.variables.stepPropertiesVar.accommodationAttr.trySaveAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1Sgnd2hhgUycJRVGKBdM_g", callContext.id);
} else {
if((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.meal)) {
// AttemptSave
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WzFGmfmAOEas9ncp9CPISw", callContext.id);
// StepProperties.Meals.TrySave = True
model.variables.stepPropertiesVar.mealsAttr.trySaveAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1Sgnd2hhgUycJRVGKBdM_g", callContext.id);
} else {
if((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.helper)) {
// AttemptSave
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Y1xwDqpP90S8Yzi6HEjS+w", callContext.id);
// StepProperties.Helpers.TrySave = True
model.variables.stepPropertiesVar.helpersAttr.trySaveAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1Sgnd2hhgUycJRVGKBdM_g", callContext.id);
} else {
if((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.vehicle)) {
// AttemptSave
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tCRfHIV4RkWk3yHtIvFF+g", callContext.id);
// StepProperties.Vehicles.TrySave = True
model.variables.stepPropertiesVar.vehiclesAttr.trySaveAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:1Sgnd2hhgUycJRVGKBdM_g", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:iqOGDXCjUEi4exT+AKQQAA", callContext.id);
}

}

}

}

} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:4pYRxoMtlUaSVeSCzQfRSQ", callContext.id);
// Execute Action: Survey_Next
return controller._survey_Next$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:L8MSbduyeU2BGFdJtzvhOA", callContext.id);
});
}

});
} else {
// Has any StepEdit?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:k8X6CFWkz02Hzm5_+OhAmg", callContext.id) && (((((model.variables.hostSurveyVar.surveyInfoAttr.accommodationSurveyAttr && model.variables.hostSurveyVar.surveyInfoAttr.accommodationSurveyUpdateAttr) && model.variables.stepPropertiesVar.accommodationAttr.isEditAttr) || ((model.variables.hostSurveyVar.surveyInfoAttr.mealSurveyAttr && model.variables.hostSurveyVar.surveyInfoAttr.mealSurveyUpdateAttr) && model.variables.stepPropertiesVar.mealsAttr.isEditAttr)) || (model.variables.hostSurveyVar.surveyInfoAttr.helperSurveyAttr && model.variables.stepPropertiesVar.helpersAttr.isEditAttr)) || (model.variables.hostSurveyVar.surveyInfoAttr.vehicleSurveyAttr && model.variables.stepPropertiesVar.vehiclesAttr.isEditAttr)))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:fQcM_ZgxokOSNfdgIcK4IA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QlWl_YtY3EOR+41aBxWT2A", callContext.id);
// Execute Action: PostHostSurvey
return controller._postHostSurvey$Action(Connect2_OrbitMobile_MUIModel.staticEntities.surveyStatus.confirmed, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:t27wCckYdU63tMVguTGFGw", callContext.id);
// Trigger Event: NavigateTo_Back
return controller.navigateTo_Back$Action(callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:xe9oryeGSEqAYVufIEOFnQ", callContext.id);
// Execute Action: FeedbackMessageAfterTransition
Connect2_LegacySharedController.default.feedbackMessageAfterTransition$Action("Thank you, your survey has been submitted.", OS.BuiltinFunctions.integerToIdentifier(1), callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KDNKN5qoRU+_kKLntYwq_w", callContext.id);
});
}

});
}

});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:MgNSzPetukyIy2CiRyOhlg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:MgNSzPetukyIy2CiRyOhlg", callContext.id);
throw ex;

});
};
Controller.prototype._addNewVehicle$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("AddNewVehicle");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.AddNewVehicle$vars"))());
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:vku41YCg7Uu2acnoKr6ndQ:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ClientActions.vku41YCg7Uu2acnoKr6ndQ:llIkpTyBy9dnuoBoI2APSw", "Connect2_OrbitMobile_MUI", "AddNewVehicle", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:XoOxRGrAPEOt4lpDGsLgrQ", callContext.id);
// Set IsEdit
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:dRnhwjG2TkG4kebuYtvVvg", callContext.id);
// NewVehicle.IsEdit = True
vars.value.newVehicleVar.isEditAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NJbU7d9p2Uy5j9tpDN2pMQ", callContext.id);
// Execute Action: ListAppend_Vehicle
OS.SystemActions.listAppend(model.variables.hostSurveyVar.vehiclesAttr.vehicleItemInfoAttr, vars.value.newVehicleVar, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ZmUP7+jKbEKyPQAswEG+zQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:vku41YCg7Uu2acnoKr6ndQ", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.AddNewVehicle$vars", [{
name: "NewVehicle",
attrName: "newVehicleVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_ISModel.HostSurvey_VehicleItemInfoRec();
},
complexType: Connect2_OrbitMobile_ISModel.HostSurvey_VehicleItemInfoRec
}]);
Controller.prototype._refreshLocalSurveySteps$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("RefreshLocalSurveySteps");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:HCdQ35cOz0qbHrBzJKPXyA:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ClientActions.HCdQ35cOz0qbHrBzJKPXyA:2Hc9hH4Gz7EciwTTUwIfgg", "Connect2_OrbitMobile_MUI", "RefreshLocalSurveySteps", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:HV87J0IHmEmIcKURjY1RLw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Fetched Steps?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:aZx3wv6P706woyAXbz5CTg", callContext.id) && model.variables.getLocalHostSurveyStepsAggr.isDataFetchedAttr)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:doxUO0vST0ihThmAJ32h3Q", callContext.id);
// Execute Action: RefreshStaticEntities
return controller._refreshStaticEntities$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:x_c625FlIU+1dZ6+eYRDMQ", callContext.id);
// Execute Action: SetStepData
controller._setStepData$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:MdLogMyHKUuGDxG1jw+3mQ", callContext.id);
// Execute Action: ValidateStepEdit
controller._validateStepEdit$Action(callContext);
// Set IsFetching
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:g13gmjv30UWdTLZF5mulYg", callContext.id);
// IsFetchingData = False
model.variables.isFetchingDataVar = false;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lm1T18vYBEGA+XIfoSPvkA", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:avmoGZLv306VFAll6BytjA", callContext.id);
// Refresh Query: GetLocalHostSurveySteps
var result = controller.getLocalHostSurveySteps$AggrRefresh(10, 0, callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RcjEUhBbAUGOTUioFt8g7Q", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:HCdQ35cOz0qbHrBzJKPXyA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:HCdQ35cOz0qbHrBzJKPXyA", callContext.id);
throw ex;

});
};
Controller.prototype._onClick_AddItem$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_AddItem");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Lqgl7PxTU0S+8TwMH0nshQ:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ClientActions.Lqgl7PxTU0S+8TwMH0nshQ:i0k9ZcjjTAdeBYECQFhgdQ", "Connect2_OrbitMobile_MUI", "OnClick_AddItem", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_nh37Ku4R0Cmvy5LZyCcpQ", callContext.id);
// Is Confirmed Survey?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2tNwZGBELkyJz3NT9zB9Bg", callContext.id) && model.variables.isConfirmedSurveyVar)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:z62QN9w3_0qyMUrq8Hwoqw", callContext.id);
} else {
// CurrentStep
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DxetA+8otkSGnK2bPFIMDw", callContext.id) && (model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.accommodation))) {
// Is Edit and Has Data?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vCfwpKEGR0KxIftH1hBr2g", callContext.id) && (model.variables.stepPropertiesVar.accommodationAttr.isEditAttr && model.variables.stepPropertiesVar.accommodationAttr.hasDataAttr))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:urDT7Sj3WU6D+EmQRM_7DA", callContext.id);
return ;

} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:kizUPUMAbUuUDrTI7+_cuw", callContext.id);
// Execute Action: AddNewRoom
controller._addNewRoom$Action(callContext);
}

} else {
if((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.meal)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Y6Tt_mYmS0CcYRC1iCg+Eg", callContext.id);
return ;

} else {
if((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.helper)) {
// Is Edit and Has Data?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:hotYlgNE2EWkXzbV2OXpuw", callContext.id) && (model.variables.stepPropertiesVar.helpersAttr.isEditAttr && model.variables.stepPropertiesVar.helpersAttr.hasDataAttr))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:urDT7Sj3WU6D+EmQRM_7DA", callContext.id);
return ;

} else {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:n9_uHszFZkakUjKkSOnTSg", callContext.id) && model.variables.isAddingHelperVar)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:urDT7Sj3WU6D+EmQRM_7DA", callContext.id);
return ;

} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:MggPEqLtdka1pveJd96KTQ", callContext.id);
// IsAddingHelper = True
model.variables.isAddingHelperVar = true;
}

}

} else {
if((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.vehicle)) {
// Is Edit and Has Data?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KV4u_nEPKkKT4bWyOj62nw", callContext.id) && (model.variables.stepPropertiesVar.vehiclesAttr.isEditAttr && model.variables.stepPropertiesVar.vehiclesAttr.hasDataAttr))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uHY7YvVmIkak4ALvKM0Vig", callContext.id);
return ;

} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8QXUxbrhZ0eJx5oO1VlCdA", callContext.id);
// Execute Action: AddNewVehicle
controller._addNewVehicle$Action(callContext);
}

} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0h21fAm9O0KI+5KFI3+Hew", callContext.id);
return ;

}

}

}

}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:6XMnbTMOkk+VeUL17RFXVg", callContext.id);
// Execute Action: ValidateStepEdit
controller._validateStepEdit$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:BamTCSXALEq155VBczCplw", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Lqgl7PxTU0S+8TwMH0nshQ", callContext.id);
}

};
Controller.prototype._addNewRoom$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("AddNewRoom");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.AddNewRoom$vars"))());
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:JgFU72m0R0a7WY74KlghRQ:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ClientActions.JgFU72m0R0a7WY74KlghRQ:eFDCSdDl4Rct8KRGQzYOkQ", "Connect2_OrbitMobile_MUI", "AddNewRoom", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Ki81ZNwuTE+k7Cwg5CL9ow", callContext.id);
// Set IsEdit
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:T7nKybUe6EWQZGEWpH_FKQ", callContext.id);
// NewRoom.IsEdit = True
vars.value.newRoomVar.isEditAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:zyWsy8MAl06_8a546KFYqA", callContext.id);
// Execute Action: ListAppend_Room
OS.SystemActions.listAppend(model.variables.hostSurveyVar.roomsAttr.hostSurvey_RoomItemAttr, vars.value.newRoomVar, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5+I4jYF5G06LQ8VgSsTcBg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:JgFU72m0R0a7WY74KlghRQ", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.AddNewRoom$vars", [{
name: "NewRoom",
attrName: "newRoomVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_ISModel.HostSurvey_RoomItemRec();
},
complexType: Connect2_OrbitMobile_ISModel.HostSurvey_RoomItemRec
}]);
Controller.prototype._onHandle_BackNavigation$Action = function (navigationEventIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_BackNavigation");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.OnHandle_BackNavigation$vars"))());
vars.value.navigationEventInLocal = navigationEventIn;
var getPopUpInfo_ReturnNavigationVar = new OS.DataTypes.VariableHolder();
var getPopUpInfo_ReturnBackVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getPopUpInfo_ReturnNavigationVar = getPopUpInfo_ReturnNavigationVar;
varBag.getPopUpInfo_ReturnBackVar = getPopUpInfo_ReturnBackVar;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:6fyc8ZvUZE6DYObK_GE8rg:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ClientActions.6fyc8ZvUZE6DYObK_GE8rg:x6RRbiTb7tpJMTwS8+yPbQ", "Connect2_OrbitMobile_MUI", "OnHandle_BackNavigation", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:mE5sURnXI0Sz7_zH12RU_A", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:kIKzOzg3akSjkBjgXlbUOA", callContext.id) && (model.variables.getCurrentLocalSurveyStatusAggr.listOut.getCurrent(callContext.iterationContext).localSurveyStatusAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.surveyStatus.unableToHost))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:5W4qD+DNmkyo34l5gD5ECw", callContext.id);
// Trigger Event: NavigateTo_Back
return controller.navigateTo_Back$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8B3FWKJ_lkW+gm9me9JyUQ", callContext.id);
});
} else {
// Is Confirmed Survey?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lqF+ol1jQ0WfPSFz69g03A", callContext.id) && model.variables.isConfirmedSurveyVar)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:q+W3_TaRHEqjsqSOIBCE+g", callContext.id);
} else {
// Has Data Steps?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PaqtoOh770GcDZhL42_ClA", callContext.id) && model.variables.hasDataStepsVar)) {
// Is PopUp open?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:IYNOmtzv3EqZ_ugtwr_AXA", callContext.id) && ((((model.variables.popUpInfoVar.isShowPopup_CancelAttr || model.variables.popUpInfoVar.isShowPopup_DeleteAttr) || model.variables.popUpInfoVar.isShowPopup_NoInfoAttr) || model.variables.popUpInfoVar.isShowPopup_ReturnBackAttr) || model.variables.popUpInfoVar.isShowPopup_ReturnNavigationAttr))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:qVjO+iYmsUWBp99DgC3r6Q", callContext.id);
// Execute Action: PreventNavigation_PopUp
NavigationHandlerController.default.preventNavigation$Action(vars.value.navigationEventInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:tQ3+acYXwU2JmlFHHQr8xA", callContext.id);
// Execute Action: OnHandle_PopUp_Close
controller._onHandle_PopUp_Close$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Zlx_jlpqWU6j0tkoEC+otg", callContext.id);
} else {
// Is Data Step?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PUYEIFww+Uy+GW+JONeMbw", callContext.id) && !(model.variables.currentStepVar.localHostSurveyStepAttr.isDataStepAttr))) {
// Is Last Step?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:cUlnxcze50uiIgKn4TFN1g", callContext.id) && (model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.summary))) {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RvIO21ZsiUu1qc0brbfZGQ", callContext.id) && model.variables.surveySubmittedVar)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vo7Cz1yUX0yx_71FSv28iQ", callContext.id);
return OS.Flow.returnAsync();

}

} else {
// Is First Step?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:jqe4J+c9sk23Gh2zjwoqDg", callContext.id) && (model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.navigation))) {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nUteGX8dEEyCs1QJbPPHbA", callContext.id) && model.variables.surveySubmittedVar)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SClDoLn7lkGBg17ri2Il0g", callContext.id);
return OS.Flow.returnAsync();

} else {
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:d_ZbeszPZkmrqMUyhg8R9w", callContext.id) && model.variables.surveyDiscardedVar)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SClDoLn7lkGBg17ri2Il0g", callContext.id);
return OS.Flow.returnAsync();

} else {
// Has Data Steps?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ICShw38jh0SgT+PNRpauGg", callContext.id) && model.variables.hasDataStepsVar)) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:lnf4sXjPC02oJKne4CvSeg", callContext.id);
// Execute Action: PreventNavigation_Submit
NavigationHandlerController.default.preventNavigation$Action(vars.value.navigationEventInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:hT3RncAV7E+1M5jqXnYOgg", callContext.id);
// Execute Action: GetPopUpInfo_ReturnBack
getPopUpInfo_ReturnBackVar.value = Connect2_OrbitMobile_MUIController.default.getPopUpInfo$Action(false, false, false, false, true, callContext);

// Set PopUp Info
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_BhSXFX3U02xWFEh5vFOuA", callContext.id);
// PopUpInfo.Title = GetPopUpInfo_ReturnBack.Out_Title
model.variables.popUpInfoVar.titleAttr = getPopUpInfo_ReturnBackVar.value.out_TitleOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_BhSXFX3U02xWFEh5vFOuA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// PopUpInfo.Message = GetPopUpInfo_ReturnBack.Out_Message
model.variables.popUpInfoVar.messageAttr = getPopUpInfo_ReturnBackVar.value.out_MessageOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_BhSXFX3U02xWFEh5vFOuA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// PopUpInfo.IsShowPopup_ReturnBack = True
model.variables.popUpInfoVar.isShowPopup_ReturnBackAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:0LadCejHsk2yfKgDPfASrw", callContext.id);
return OS.Flow.returnAsync();

} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SClDoLn7lkGBg17ri2Il0g", callContext.id);
return OS.Flow.returnAsync();

}

}

}

} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:SClDoLn7lkGBg17ri2Il0g", callContext.id);
return OS.Flow.returnAsync();

}

}

}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UsvmRS8ITk2QQ0fCvGXGOw", callContext.id);
// Execute Action: PreventNavigation
NavigationHandlerController.default.preventNavigation$Action(vars.value.navigationEventInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:D26hhcnDTkK+c3UcYbt8MA", callContext.id);
// Execute Action: GetPopUpInfo_ReturnNavigation
getPopUpInfo_ReturnNavigationVar.value = Connect2_OrbitMobile_MUIController.default.getPopUpInfo$Action(false, false, false, true, false, callContext);

// Set PopUp Info
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wF2uWQk_hk2A+DeFEjKv0Q", callContext.id);
// PopUpInfo.Title = GetPopUpInfo_ReturnNavigation.Out_Title
model.variables.popUpInfoVar.titleAttr = getPopUpInfo_ReturnNavigationVar.value.out_TitleOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wF2uWQk_hk2A+DeFEjKv0Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// PopUpInfo.Message = GetPopUpInfo_ReturnNavigation.Out_Message
model.variables.popUpInfoVar.messageAttr = getPopUpInfo_ReturnNavigationVar.value.out_MessageOut;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:wF2uWQk_hk2A+DeFEjKv0Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// PopUpInfo.IsShowPopup_ReturnNavigation = True
model.variables.popUpInfoVar.isShowPopup_ReturnNavigationAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oHchM4FNN0ar3nU68tQeMQ", callContext.id);
}

} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:30XhBmmUdEG+ni1mHAbqww", callContext.id);
}

}

}

});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:6fyc8ZvUZE6DYObK_GE8rg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:6fyc8ZvUZE6DYObK_GE8rg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.OnHandle_BackNavigation$vars", [{
name: "NavigationEvent",
attrName: "navigationEventInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._onAfterFetch_GetSurveyStatus$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnAfterFetch_GetSurveyStatus");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:2a_Z8d3eBk6dD7NJV6XR7g:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ClientActions.2a_Z8d3eBk6dD7NJV6XR7g:m6LvKkwVe7pWb4f5vlp+bw", "Connect2_OrbitMobile_MUI", "OnAfterFetch_GetSurveyStatus", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bKpcKPJlaEO2gxO7ZjqBlA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:GtC6douNfUi+2KGeByz3oQ", callContext.id);
// IsConfirmedSurvey = GetCurrentLocalSurveyStatus.List.Current.LocalSurveyStatus.Id = Confirmed
model.variables.isConfirmedSurveyVar = (model.variables.getCurrentLocalSurveyStatusAggr.listOut.getCurrent(callContext.iterationContext).localSurveyStatusAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.surveyStatus.confirmed);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8G+2WztbRkKdhYlxcx7_6w", callContext.id);
// Execute Action: RefreshLocalSurveySteps
return controller._refreshLocalSurveySteps$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:yEDYoRAVt0ur8z+AQvByyg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:2a_Z8d3eBk6dD7NJV6XR7g", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:2a_Z8d3eBk6dD7NJV6XR7g", callContext.id);
throw ex;

});
};
Controller.prototype._onHandle_SaveItem$Action = function (in_CurrentRowNumberIn, in_CurrentRoomItemIn, in_CurrentMealItemIn, in_CurrentHelperItemIn, in_CurrentVehicleItemIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnHandle_SaveItem");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.OnHandle_SaveItem$vars"))());
vars.value.in_CurrentRowNumberInLocal = in_CurrentRowNumberIn;
vars.value.in_CurrentRoomItemInLocal = in_CurrentRoomItemIn.clone();
vars.value.in_CurrentMealItemInLocal = in_CurrentMealItemIn.clone();
vars.value.in_CurrentHelperItemInLocal = in_CurrentHelperItemIn.clone();
vars.value.in_CurrentVehicleItemInLocal = in_CurrentVehicleItemIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:0DGh9RQW_E6l2t30cPyGCA:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ClientActions.0DGh9RQW_E6l2t30cPyGCA:oDcevK1r3LMQcD_CivqeJg", "Connect2_OrbitMobile_MUI", "OnHandle_SaveItem", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:braBgV5YEESaGIvDjxS0Fw", callContext.id);
// Current Step
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ZeasPFSlrkCbMxCBtjPe0g", callContext.id) && (model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.accommodation))) {
// Set TrySave
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+JOLN1GnXUWr9ygb1XyHRQ", callContext.id);
// StepProperties.Accommodation.TrySave = False
model.variables.stepPropertiesVar.accommodationAttr.trySaveAttr = false;
// Set Room IsEdit
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UigWROonP0yDMcK4D0B6Eg", callContext.id);
// In_CurrentRoomItem.IsEdit = False
vars.value.in_CurrentRoomItemInLocal.isEditAttr = false;
// Set Room
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:nt5Aoxny1EuhpsjbHshtXQ", callContext.id);
// HostSurvey.Rooms.HostSurvey_RoomItem[In_CurrentRowNumber] = In_CurrentRoomItem
model.variables.hostSurveyVar.roomsAttr.hostSurvey_RoomItemAttr.setItem(vars.value.in_CurrentRowNumberInLocal,vars.value.in_CurrentRoomItemInLocal);
} else {
if((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.meal)) {
// Set Meal IsEdit
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:kg_o2XkB2EyXwgzWusLM8A", callContext.id);
// In_CurrentMealItem.IsEdit = False
vars.value.in_CurrentMealItemInLocal.isEditAttr = false;
// Set Meals
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:PHRL200ahkeqlLQT2wh+dQ", callContext.id);
// HostSurvey.Meals.MealItemInfo[In_CurrentRowNumber] = In_CurrentMealItem
model.variables.hostSurveyVar.mealsAttr.mealItemInfoAttr.setItem(vars.value.in_CurrentRowNumberInLocal,vars.value.in_CurrentMealItemInLocal);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:shOOskG3s0Sz2m4_31p6TQ", callContext.id);
// Execute Action: SaveMultipleMeals_Success
controller._saveMultipleMeals_Success$Action(vars.value.in_CurrentRowNumberInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:eo+m3ME95U6p9AGZZTz3NQ", callContext.id);
return ;

} else {
if((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.helper)) {
// Set TrySave
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WA4cZu5kAUq9S2nagmcGHA", callContext.id);
// StepProperties.Helpers.TrySave = False
model.variables.stepPropertiesVar.helpersAttr.trySaveAttr = false;
// Set Helper IsEdit
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:DomNhzmoa0a_pxZDqO_tSQ", callContext.id);
// In_CurrentHelperItem.IsEdit = False
vars.value.in_CurrentHelperItemInLocal.isEditAttr = false;
// Set Helpers
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:WERsz02+7UCIGSpoiESpRA", callContext.id);
// HostSurvey.Helpers.HelperItemInfo[In_CurrentRowNumber] = In_CurrentHelperItem
model.variables.hostSurveyVar.helpersAttr.helperItemInfoAttr.setItem(vars.value.in_CurrentRowNumberInLocal,vars.value.in_CurrentHelperItemInLocal);
} else {
if((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.vehicle)) {
// Set TrySave
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:vzvgyLmQL0ec5HPh95K+ew", callContext.id);
// StepProperties.Vehicles.TrySave = False
model.variables.stepPropertiesVar.vehiclesAttr.trySaveAttr = false;
// Set Vehicle IsEdit
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ZWuE+R_wjkuTlEPydHt6Gw", callContext.id);
// In_CurrentVehicleItem.IsEdit = False
vars.value.in_CurrentVehicleItemInLocal.isEditAttr = false;
// Set Vehicle
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:QSyxFeHAg0CFtOUEu+GXBw", callContext.id);
// HostSurvey.Vehicles.VehicleItemInfo[In_CurrentRowNumber] = In_CurrentVehicleItem
model.variables.hostSurveyVar.vehiclesAttr.vehicleItemInfoAttr.setItem(vars.value.in_CurrentRowNumberInLocal,vars.value.in_CurrentVehicleItemInLocal);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:9aN6zKvQbU6JkzZHw_2MxQ", callContext.id);
return ;

}

}

}

}

OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uyiSUVsLp0GnWMptiukgNg", callContext.id);
// Execute Action: SetStepData
controller._setStepData$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3LfHjLHMDkaSxdUmL49b4w", callContext.id);
// Execute Action: ValidateStepEdit
controller._validateStepEdit$Action(callContext);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:YI_z4s0a0k2MBNtYbiWuyw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:0DGh9RQW_E6l2t30cPyGCA", callContext.id);
}

};
Controller.registerVariableGroupType("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.OnHandle_SaveItem$vars", [{
name: "In_CurrentRowNumber",
attrName: "in_CurrentRowNumberInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "In_CurrentRoomItem",
attrName: "in_CurrentRoomItemInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_ISModel.HostSurvey_RoomItemRec();
},
complexType: Connect2_OrbitMobile_ISModel.HostSurvey_RoomItemRec
}, {
name: "In_CurrentMealItem",
attrName: "in_CurrentMealItemInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_ISModel.HostSurvey_MealItemInfoRec();
},
complexType: Connect2_OrbitMobile_ISModel.HostSurvey_MealItemInfoRec
}, {
name: "In_CurrentHelperItem",
attrName: "in_CurrentHelperItemInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_ISModel.HostSurvey_HelperItemInfoRec();
},
complexType: Connect2_OrbitMobile_ISModel.HostSurvey_HelperItemInfoRec
}, {
name: "In_CurrentVehicleItem",
attrName: "in_CurrentVehicleItemInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Connect2_OrbitMobile_ISModel.HostSurvey_VehicleItemInfoRec();
},
complexType: Connect2_OrbitMobile_ISModel.HostSurvey_VehicleItemInfoRec
}]);
Controller.prototype._validateStepEdit$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ValidateStepEdit");
callContext = controller.callContext(callContext);
var listFilter_HelpersVar = new OS.DataTypes.VariableHolder();
var listFilter_VehiclesVar = new OS.DataTypes.VariableHolder();
var listFilter_MealsVar = new OS.DataTypes.VariableHolder();
var listFilter_RoomsVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.listFilter_HelpersVar = listFilter_HelpersVar;
varBag.listFilter_VehiclesVar = listFilter_VehiclesVar;
varBag.listFilter_MealsVar = listFilter_MealsVar;
varBag.listFilter_RoomsVar = listFilter_RoomsVar;
try {OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:Snyn9XTQsUSps73YL8Rdnw:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA/ClientActions.Snyn9XTQsUSps73YL8Rdnw:+1oJYkhDarzpOrmELULpXQ", "Connect2_OrbitMobile_MUI", "ValidateStepEdit", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bXP_w7LuS0uodtG8DBXZ7w", callContext.id);
// Accommodation?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:kxvQeJtQzkG+2nNx+sMO_A", callContext.id) && ((model.variables.hostSurveyVar.surveyInfoAttr.accommodationSurveyAttr && model.variables.hostSurveyVar.surveyInfoAttr.accommodationSurveyUpdateAttr) && ((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.accommodation) || !(model.variables.currentStepVar.localHostSurveyStepAttr.isDataStepAttr))))) {
//  No Rooms?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:+56jeM0tdUio_YHeJ7Nhqg", callContext.id) && model.variables.hostSurveyVar.roomsAttr.hostSurvey_RoomItemAttr.isEmpty)) {
// Set Step Data
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:KtMD41lJN0akrbSHyFohHA", callContext.id);
// StepProperties.Accommodation.HasData = notStepProperties.Accommodation.IsEdit
model.variables.stepPropertiesVar.accommodationAttr.hasDataAttr = !(model.variables.stepPropertiesVar.accommodationAttr.isEditAttr);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ljdB_zlvVkieQ3i4bohXIA", callContext.id);
// Execute Action: ListFilter_Rooms
listFilter_RoomsVar.value = OS.SystemActions.listFilter(model.variables.hostSurveyVar.roomsAttr.hostSurvey_RoomItemAttr, function (p) {
return p.isEditAttr;
}, callContext);

// Set StepEdit
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ELaXai8eHESrUE4dz7CeGA", callContext.id);
// StepProperties.Accommodation.IsEdit = notListFilter_Rooms.FilteredList.Empty
model.variables.stepPropertiesVar.accommodationAttr.isEditAttr = !(listFilter_RoomsVar.value.filteredListOut.isEmpty);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:ELaXai8eHESrUE4dz7CeGA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// StepProperties.Accommodation.HasData = True
model.variables.stepPropertiesVar.accommodationAttr.hasDataAttr = true;
}

// Not data?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:JdOgR3y96EOmbnNWK0hXKQ", callContext.id) && !(!(model.variables.currentStepVar.localHostSurveyStepAttr.isDataStepAttr)))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:8vtIIHqtDUO0glfnDkmwXg", callContext.id);
return ;

}

}

// Meals?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oDDTgJdnVUupGu2mW7nRJg", callContext.id) && ((model.variables.hostSurveyVar.surveyInfoAttr.mealSurveyAttr && model.variables.hostSurveyVar.surveyInfoAttr.mealSurveyUpdateAttr) && ((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.meal) || !(model.variables.currentStepVar.localHostSurveyStepAttr.isDataStepAttr))))) {
// No Meals?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:hTkGPF2JgE2py5lDR6uADg", callContext.id) && model.variables.hostSurveyVar.mealsAttr.mealItemInfoAttr.isEmpty)) {
// Set Step Data
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:AUjRxXuTHEi7ZMerMcEkyg", callContext.id);
// StepProperties.Meals.HasData = notStepProperties.Meals.IsEdit
model.variables.stepPropertiesVar.mealsAttr.hasDataAttr = !(model.variables.stepPropertiesVar.mealsAttr.isEditAttr);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:knF6spyIDUKy02FRT4JYHw", callContext.id);
// Execute Action: ListFilter_Meals
listFilter_MealsVar.value = OS.SystemActions.listFilter(model.variables.hostSurveyVar.mealsAttr.mealItemInfoAttr, function (p) {
return p.isEditAttr;
}, callContext);

// Set StepEdit
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UKAKu7ZLa0i+QUcX6eVq7w", callContext.id);
// StepProperties.Meals.IsEdit = notListFilter_Meals.FilteredList.Empty
model.variables.stepPropertiesVar.mealsAttr.isEditAttr = !(listFilter_MealsVar.value.filteredListOut.isEmpty);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:UKAKu7ZLa0i+QUcX6eVq7w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// StepProperties.Meals.HasData = True
model.variables.stepPropertiesVar.mealsAttr.hasDataAttr = true;
}

// Not data?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:3Kipe7kA5USaa8hY1HoRhg", callContext.id) && !(!(model.variables.currentStepVar.localHostSurveyStepAttr.isDataStepAttr)))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RQJmmVgB2U2dYzdjWlXr+w", callContext.id);
return ;

}

}

// Helpers?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:NnwHUlHZGE2KqC8TOkNqZg", callContext.id) && (model.variables.hostSurveyVar.surveyInfoAttr.helperSurveyAttr && ((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.helper) || !(model.variables.currentStepVar.localHostSurveyStepAttr.isDataStepAttr))))) {
// No Helpers?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bq_5ShuqfUiOR9njUa_6hQ", callContext.id) && model.variables.hostSurveyVar.helpersAttr.helperItemInfoAttr.isEmpty)) {
// Set Step Properties
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:FC03E_SMVE62cVyvLmHN_w", callContext.id);
// StepProperties.Helpers.HasData = notStepProperties.Helpers.IsEdit
model.variables.stepPropertiesVar.helpersAttr.hasDataAttr = !(model.variables.stepPropertiesVar.helpersAttr.isEditAttr);
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:uy62bNt2Aki2xLUb6i_5wA", callContext.id) && model.variables.isAddingHelperVar)) {
// Set StepEdit
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:cdyauEBpuEWtXoAaf0XPBg", callContext.id);
// StepProperties.Helpers.IsEdit = True
model.variables.stepPropertiesVar.helpersAttr.isEditAttr = true;
}

} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:bOsoL02zWEet00UEAzqd2A", callContext.id);
// Execute Action: ListFilter_Helpers
listFilter_HelpersVar.value = OS.SystemActions.listFilter(model.variables.hostSurveyVar.helpersAttr.helperItemInfoAttr, function (p) {
return p.isEditAttr;
}, callContext);

// Set StepEdit
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:elHC6U4rQEyZal2mB5of2A", callContext.id);
// StepProperties.Helpers.IsEdit = notListFilter_Helpers.FilteredList.Empty or IsAddingHelper
model.variables.stepPropertiesVar.helpersAttr.isEditAttr = (!(listFilter_HelpersVar.value.filteredListOut.isEmpty) || model.variables.isAddingHelperVar);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:elHC6U4rQEyZal2mB5of2A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// StepProperties.Helpers.HasData = True
model.variables.stepPropertiesVar.helpersAttr.hasDataAttr = true;
}

// Not data?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_9Z8lAIySkGvglqokkHjuA", callContext.id) && !(!(model.variables.currentStepVar.localHostSurveyStepAttr.isDataStepAttr)))) {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:2ff7ajE+R0SCKCybbOGrDw", callContext.id);
return ;

}

}

// Vehicles?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Gz_dj_Jf8kuOibPcbg37vg", callContext.id) && (model.variables.hostSurveyVar.surveyInfoAttr.vehicleSurveyAttr && ((model.variables.currentStepVar.localHostSurveyStepAttr.idAttr === Connect2_OrbitMobile_MUIModel.staticEntities.hostSurveyStep.vehicle) || !(model.variables.currentStepVar.localHostSurveyStepAttr.isDataStepAttr))))) {
// No Vehicles?
if((OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:_uaYot1lnkakUIkmU8bIzQ", callContext.id) && model.variables.hostSurveyVar.vehiclesAttr.vehicleItemInfoAttr.isEmpty)) {
// Set Step Data
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:oYDsg29ix06edvl1reTiKA", callContext.id);
// StepProperties.Vehicles.HasData = notStepProperties.Vehicles.IsEdit
model.variables.stepPropertiesVar.vehiclesAttr.hasDataAttr = !(model.variables.stepPropertiesVar.vehiclesAttr.isEditAttr);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RkF7+8dYp0adnD1kW4J5sA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:pj+pVeepHESHC9qp_KfWVA", callContext.id);
// Execute Action: ListFilter_Vehicles
listFilter_VehiclesVar.value = OS.SystemActions.listFilter(model.variables.hostSurveyVar.vehiclesAttr.vehicleItemInfoAttr, function (p) {
return p.isEditAttr;
}, callContext);

// Set StepEdit
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Ey5IPhyqN0C2oMQUJSJeVA", callContext.id);
// StepProperties.Vehicles.IsEdit = notListFilter_Vehicles.FilteredList.Empty
model.variables.stepPropertiesVar.vehiclesAttr.isEditAttr = !(listFilter_VehiclesVar.value.filteredListOut.isEmpty);
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:Ey5IPhyqN0C2oMQUJSJeVA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// StepProperties.Vehicles.HasData = True
model.variables.stepPropertiesVar.vehiclesAttr.hasDataAttr = true;
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:RkF7+8dYp0adnD1kW4J5sA", callContext.id);
}

} else {
OutSystemsDebugger.handleBreakpoint("rMzmm49Sw0CsKZc1bJZ9DQ:clfOqXcLVke0BhAQI3XhwQ", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:Snyn9XTQsUSps73YL8Rdnw", callContext.id);
}

};

Controller.prototype.onHandle_EditItem$Action = function (in_CurrentRowNumberIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_EditItem$Action, callContext, in_CurrentRowNumberIn);

};
Controller.prototype.deleteItem$Action = function (in_CurrentRowNumberIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._deleteItem$Action, callContext, in_CurrentRowNumberIn);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.toggleSingleResetMealData$Action = function (in_PositionIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._toggleSingleResetMealData$Action, callContext, in_PositionIn);

};
Controller.prototype.onHandle_PopUp_Secondary$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_PopUp_Secondary$Action, callContext);

};
Controller.prototype.onHandle_PopUp_Close$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_PopUp_Close$Action, callContext);

};
Controller.prototype.onHandle_DeleteItem$Action = function (in_CurrentRowNumberIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_DeleteItem$Action, callContext, in_CurrentRowNumberIn);

};
Controller.prototype.onAfterFetch_GetHostSurvey$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onAfterFetch_GetHostSurvey$Action, callContext);

};
Controller.prototype.onHandle_SecondaryButton$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_SecondaryButton$Action, callContext);

};
Controller.prototype.onHandle_DeleteSearchHelper$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_DeleteSearchHelper$Action, callContext);

};
Controller.prototype.saveMultipleMeals_Success$Action = function (in_MealItemTriggerPositionIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._saveMultipleMeals_Success$Action, callContext, in_MealItemTriggerPositionIn);

};
Controller.prototype.survey_Next$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._survey_Next$Action, callContext);

};
Controller.prototype.onHandle_SaveFailed$Action = function (in_CurrentRowNumberIn, in_DisableMessageIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_SaveFailed$Action, callContext, in_CurrentRowNumberIn, in_DisableMessageIn);

};
Controller.prototype.refreshData$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._refreshData$Action, callContext);

};
Controller.prototype.saveMultipleMeals_Failed$Action = function (in_MealItemTriggerPositionIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._saveMultipleMeals_Failed$Action, callContext, in_MealItemTriggerPositionIn);

};
Controller.prototype.refreshStaticEntities$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._refreshStaticEntities$Action, callContext);

};
Controller.prototype.onHandle_AddHelpers$Action = function (in_HelperItemInfoIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_AddHelpers$Action, callContext, in_HelperItemInfoIn);

};
Controller.prototype.onAfterFetch_GetHostSurveySteps$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onAfterFetch_GetHostSurveySteps$Action, callContext);

};
Controller.prototype.cancelEdit$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._cancelEdit$Action, callContext);

};
Controller.prototype.refreshLocalSurveyStatus$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._refreshLocalSurveyStatus$Action, callContext);

};
Controller.prototype.postHostSurvey$Action = function (surveyStatusIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._postHostSurvey$Action, callContext, surveyStatusIn);

};
Controller.prototype.onHandle_PopUp_Primary$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_PopUp_Primary$Action, callContext);

};
Controller.prototype.navigateTo_SpecificStep$Action = function (in_HostSurveyStepIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._navigateTo_SpecificStep$Action, callContext, in_HostSurveyStepIdIn);

};
Controller.prototype.onAfterFetch_GetLocalHelperRoles$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onAfterFetch_GetLocalHelperRoles$Action, callContext);

};
Controller.prototype.setStepData$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._setStepData$Action, callContext);

};
Controller.prototype.onHandle_PrimaryButton$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_PrimaryButton$Action, callContext);

};
Controller.prototype.addNewVehicle$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._addNewVehicle$Action, callContext);

};
Controller.prototype.refreshLocalSurveySteps$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._refreshLocalSurveySteps$Action, callContext);

};
Controller.prototype.onClick_AddItem$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_AddItem$Action, callContext);

};
Controller.prototype.addNewRoom$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._addNewRoom$Action, callContext);

};
Controller.prototype.onHandle_BackNavigation$Action = function (navigationEventIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_BackNavigation$Action, callContext, navigationEventIn);

};
Controller.prototype.onAfterFetch_GetSurveyStatus$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onAfterFetch_GetSurveyStatus$Action, callContext);

};
Controller.prototype.onHandle_SaveItem$Action = function (in_CurrentRowNumberIn, in_CurrentRoomItemIn, in_CurrentMealItemIn, in_CurrentHelperItemIn, in_CurrentVehicleItemIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onHandle_SaveItem$Action, callContext, in_CurrentRowNumberIn, in_CurrentRoomItemIn, in_CurrentMealItemIn, in_CurrentHelperItemIn, in_CurrentVehicleItemIn);

};
Controller.prototype.validateStepEdit$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._validateStepEdit$Action, callContext);

};
Controller.prototype.navigateTo_Back$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:OQ15o5p5UUO5IF4D27wyLQ:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ:imSmHXV7Nkr73AcV6vQzkg", "Connect2_OrbitMobile_MUI", "Orbit_ScreenBlocks_HostSurvey", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("rMzmm49Sw0CsKZc1bJZ9DQ:G166RdD7HkC_nuOuEVABAA:/NRWebFlows.OQ15o5p5UUO5IF4D27wyLQ/NodesShownInESpaceTree.G166RdD7HkC_nuOuEVABAA:2wTh4Pe+vOTu+35+q5J7RA", "Connect2_OrbitMobile_MUI", "ScreenBlock_HostSurvey", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:G166RdD7HkC_nuOuEVABAA", callContext.id);
OutSystemsDebugger.pop("rMzmm49Sw0CsKZc1bJZ9DQ:OQ15o5p5UUO5IF4D27wyLQ", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Orbit_ScreenBlocks_HostSurvey/ScreenBlock_HostSurvey On Ready");
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
define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.mvc$controller.OnReady.WasCurrentViewRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
};
});

define("Connect2_OrbitMobile_MUI.Orbit_ScreenBlocks_HostSurvey.ScreenBlock_HostSurvey.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"2I5iIkF3B0qmIeHaJ+MQpQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_CurrentRowNumberInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"hEwKYA33Bku8_nejeVJlJQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_CurrentRowNumberInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"YKoiVk3hQ0+rBlwLXpDgtA": {
getter: function (varBag, idService) {
return varBag.vars.value.blankStepPropertiesVar;
}
},
"Sj0nFNoKpkSX9rDn8P9CUA": {
getter: function (varBag, idService) {
return varBag.wasCurrentViewRestoredFromCacheJSResult.value;
}
},
"lyvQGWeZq0G0RQZhRzaJcA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_PositionInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"tKCNlx1Oh0O4_ba7g0mWUQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_CurrentRowNumberInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"GMUCNqMhQk6u4GzGVKvU4Q": {
getter: function (varBag, idService) {
return varBag.getPopUpInfoVar.value;
}
},
"fqOwbj5jG0aAslpIKxaCeQ": {
getter: function (varBag, idService) {
return varBag.getStepPropertiesVar.value;
}
},
"yeJ0_pRuhUKRTwmjyH2zjA": {
getter: function (varBag, idService) {
return varBag.getPopUpInfoVar.value;
}
},
"J3dZ78P0902KoQmIZZNpdA": {
getter: function (varBag, idService) {
return varBag.getPopUpInfoVar.value;
}
},
"nCWb0yeo5EmhpmS1RaY1cg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_MealItemTriggerPositionInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"PbUKPoaHXESz7UIjKrEmAQ": {
getter: function (varBag, idService) {
return varBag.listFilter_IsEditVar.value;
}
},
"ialXPnQxRUOec5umSYMdUw": {
getter: function (varBag, idService) {
return varBag.listIndexOf_EditItemVar.value;
}
},
"81MWW4m2W0ufpliPvxQV_w": {
getter: function (varBag, idService) {
return varBag.listIndexOf_NextStepVar.value;
}
},
"fEocv9xy80aAJcYellKQEQ": {
getter: function (varBag, idService) {
return varBag.listFilter_GetNextStepVar.value;
}
},
"c1aWTopkkkyDZbl5OMizNQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_CurrentRowNumberInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"25Lt1CgGE0mFutvryxt35Q": {
getter: function (varBag, idService) {
return varBag.vars.value.in_DisableMessageInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"+8CTZRQmGU62yKH0+p6LrA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_MealItemTriggerPositionInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"XsvINUcfkUu0auOJufpbRA": {
getter: function (varBag, idService) {
return varBag.listFilter_IsEditAndNotSelfVar.value;
}
},
"xvPY4yPmykGrYo+KeKdnOQ": {
getter: function (varBag, idService) {
return varBag.listIndexOf_EditItemVar.value;
}
},
"g0HX2gyVZkG_5QgmRv2Ghw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_HelperItemInfoInLocal;
}
},
"qKy6eJOho0ibPDbA3Vs81Q": {
getter: function (varBag, idService) {
return varBag.listFilter_DataStepsVar.value;
}
},
"g3pFdycCo0i7eQTv5e61WQ": {
getter: function (varBag, idService) {
return varBag.listIndexOf_VehiclesVar.value;
}
},
"UjmkjercKkyYsBne9YLDIg": {
getter: function (varBag, idService) {
return varBag.listIndexOf_RoomsVar.value;
}
},
"rb7p6Kttp0qHr9L6nvwU5Q": {
getter: function (varBag, idService) {
return varBag.listIndexOf_HelpersVar.value;
}
},
"rldG8cmhXkqP3+pCa71uQQ": {
getter: function (varBag, idService) {
return varBag.listFilter_MealsVar.value;
}
},
"uA5E+fOlWUKDVRjBowKTDw": {
getter: function (varBag, idService) {
return varBag.listIndexOf_CurrentVar.value;
}
},
"j4bluNFHvESwb2sl8gf_VQ": {
getter: function (varBag, idService) {
return varBag.vars.value.surveyStatusInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"oNd+i1+I7U+qkn5+u06HNw": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"+k0NT8QbaUywTuD1S9wYUA": {
getter: function (varBag, idService) {
return varBag.postHostSurvey2Var.value;
}
},
"g90WdSuZAEy7bt1ioG4PLQ": {
getter: function (varBag, idService) {
return varBag.getSurveyStatusByIdVar.value;
}
},
"Xf0Q1b1WjUSaYuEJCj+OmA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_HostSurveyStepIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"7owqELy5EEmSUIyVbOyeQA": {
getter: function (varBag, idService) {
return varBag.listIndexOf_SpecificStepVar.value;
}
},
"JHF_ZzJo2keHIWN0Hsd4+A": {
getter: function (varBag, idService) {
return varBag.listFilter_SpecificStepVar.value;
}
},
"snj26N5RkEiUMXFgIfL3CA": {
getter: function (varBag, idService) {
return varBag.listFilter_EditableRolesVar.value;
}
},
"9hchDF1fb0SeiTwh7Xzs4Q": {
getter: function (varBag, idService) {
return varBag.getPopUpInfoVar.value;
}
},
"6Xy3ZBSYck2AMxNnIMBGUA": {
getter: function (varBag, idService) {
return varBag.getStepPropertiesVar.value;
}
},
"7wZGS5X+S0CFf7XlsSZryg": {
getter: function (varBag, idService) {
return varBag.vars.value.newVehicleVar;
}
},
"RVGdsS2sN06hvovEo8ox+Q": {
getter: function (varBag, idService) {
return varBag.vars.value.newRoomVar;
}
},
"o_DpMVFpsEuuUc9D1VkpXg": {
getter: function (varBag, idService) {
return varBag.vars.value.navigationEventInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"D26hhcnDTkK+c3UcYbt8MA": {
getter: function (varBag, idService) {
return varBag.getPopUpInfo_ReturnNavigationVar.value;
}
},
"hT3RncAV7E+1M5jqXnYOgg": {
getter: function (varBag, idService) {
return varBag.getPopUpInfo_ReturnBackVar.value;
}
},
"f5uDUYn6g02vqdGVhnQdXw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_CurrentRowNumberInLocal;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"1iEzdi8me0+bANMOVx1kKA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_CurrentRoomItemInLocal;
}
},
"ttINYwOcX0u_Bf3eOUo6vw": {
getter: function (varBag, idService) {
return varBag.vars.value.in_CurrentMealItemInLocal;
}
},
"c3f0KzgM8kS9j77WmrUknQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_CurrentHelperItemInLocal;
}
},
"J3t_oAqxB0a3nTCUbFBfJQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_CurrentVehicleItemInLocal;
}
},
"bOsoL02zWEet00UEAzqd2A": {
getter: function (varBag, idService) {
return varBag.listFilter_HelpersVar.value;
}
},
"pj+pVeepHESHC9qp_KfWVA": {
getter: function (varBag, idService) {
return varBag.listFilter_VehiclesVar.value;
}
},
"knF6spyIDUKy02FRT4JYHw": {
getter: function (varBag, idService) {
return varBag.listFilter_MealsVar.value;
}
},
"ljdB_zlvVkieQ3i4bohXIA": {
getter: function (varBag, idService) {
return varBag.listFilter_RoomsVar.value;
}
},
"8pohrRbT3kiCBHO7j29wig": {
getter: function (varBag, idService) {
return varBag.model.variables.isFetchingDataVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Hq5cuJYLxkyrwmPMy2CY0w": {
getter: function (varBag, idService) {
return varBag.model.variables.currentStepVar;
}
},
"JPZGy16utEiQTc+Qn9P2hg": {
getter: function (varBag, idService) {
return varBag.model.variables.hostSurveyVar;
}
},
"GXKu7WjMcEiiYoPKsNEF4Q": {
getter: function (varBag, idService) {
return varBag.model.variables.stepPropertiesVar;
}
},
"_pBDeFjir0Gx588W9sNXmw": {
getter: function (varBag, idService) {
return varBag.model.variables.roomNamesVar;
}
},
"2x+Xf0MdGUmNQf0cv_vHjQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isAddingHelperVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"beECeFulIU2HkVzLpZhtPQ": {
getter: function (varBag, idService) {
return varBag.model.variables.popUpInfoVar;
}
},
"9_sWgqFVqEm+42jSeJPM2w": {
getter: function (varBag, idService) {
return varBag.model.variables.positionToDeleteVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"LwAV7OCKPUO22B7mOhzwAQ": {
getter: function (varBag, idService) {
return varBag.model.variables.surveyDiscardedVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"h3cNm3jiV0GSMnj+_QAx9Q": {
getter: function (varBag, idService) {
return varBag.model.variables.surveySubmittedVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"cixtyGqwOkSj8a8ap_VAag": {
getter: function (varBag, idService) {
return varBag.model.variables.isConfirmedSurveyVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"I9+riteMIkqjUdPF0OVkcQ": {
getter: function (varBag, idService) {
return varBag.model.variables.hasDataStepsVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"mEqJCBnyEE6O_9iOk1u9wQ": {
getter: function (varBag, idService) {
return varBag.model.variables.filteredHelperRolesVar;
}
},
"jcOC6qMLC0e92TlTzG_1yQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isPostingSurveyVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"AevjlKXX6UGODkQBCckjSA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"lS1jgC+480yJ9c+RRlCrpw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MemberIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"LkCyOT0yZ0K3pKfwMNeXHQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"GqYRaiZg+0mLjCAAnoDvFg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventStartDateIn;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"Ye5bcMTy7U+9pi2_RCisHg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventEndDateIn;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"aJ7ND3qZUkSpENePAPwFaQ": {
getter: function (varBag, idService) {
return varBag.model.variables.getHostSurveyDataAct;
}
},
"Si6GYXhGq0KwwQ76NwGvRg": {
getter: function (varBag, idService) {
return varBag.model.variables.getLocalHouseFloorsAggr;
}
},
"cUOlai+Zv0eCIzff3V1f5w": {
getter: function (varBag, idService) {
return varBag.model.variables.getLocalBedSizesAggr;
}
},
"c2MwbdLir0WUErVXEYqsbQ": {
getter: function (varBag, idService) {
return varBag.model.variables.getCurrentLocalSurveyStatusAggr;
}
},
"4SDudjVU1U+65BMZH8m_rA": {
getter: function (varBag, idService) {
return varBag.model.variables.getLocalHelperStatusAggr;
}
},
"sP2Ud6Phv0CAPHAXNn8kDw": {
getter: function (varBag, idService) {
return varBag.model.variables.getLocalVehicleOwnersAggr;
}
},
"+MN_h5+1O0Ssh8__SsaCRQ": {
getter: function (varBag, idService) {
return varBag.model.variables.getLocalMealTypesAggr;
}
},
"qqY90GcHs0KpbnEUMRLF2g": {
getter: function (varBag, idService) {
return varBag.model.variables.getLocalHostSurveyStepsAggr;
}
},
"Bdhh5N9+bU+IGRRu5owC7A": {
getter: function (varBag, idService) {
return varBag.model.variables.getLocalHelperRolesAggr;
}
},
"mwXZ+GPQU0ekdrRKXv591g": {
getter: function (varBag, idService) {
return varBag.model.variables.getLocalVehicleTypesAggr;
}
},
"wAr3+T9K40aquTqaZPJZIw": {
getter: function (varBag, idService) {
return varBag.model.variables.getLocalGenderPreferencesAggr;
}
},
"XOHxMqEGn0+LNFVg_6GNWQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"uGzAwiNt30qkpGnQvRwdFA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Menu"));
})(varBag.model, idService);
}
},
"OujEZ+L3dEKzJPbp9hQ75w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderLeft"));
})(varBag.model, idService);
}
},
"ByMbc7abQkqGXwtNAMsSzQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"fXAnmSkY_0Oqo5WbLar0zQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderRight"));
})(varBag.model, idService);
}
},
"jB5vJq4GyUmenAPyCUWyFA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"lrxKMLAYUUCdDZjzMfYQFA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsDataStep"));
})(varBag.model, idService);
}
},
"3xPBzztuokmSRSohow96zg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsSummary"));
})(varBag.model, idService);
}
},
"TYfNoiayHE+iKzUvKOTCwQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"AKSjRR9c+E2gMjWOboxYTg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsNotFetching"));
})(varBag.model, idService);
}
},
"kAo_pFIqPUC5QaxT7BxtCg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasCorrectStatus"));
})(varBag.model, idService);
}
},
"iJWYkMtrEU+HqhQRHryvLA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasAnyStep"));
})(varBag.model, idService);
}
},
"S1i5K65+7Uyj7byqUgiulQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsNavigation"));
})(varBag.model, idService);
}
},
"A9yOM4nlMUSlupHS9fHjWQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsPendingOrSent"));
})(varBag.model, idService);
}
},
"3BKo9vJFCUKJoxgS4q+otw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Label"));
})(varBag.model, idService);
}
},
"qWp7zGH5_EaLUb7kGQrbdw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Input"));
})(varBag.model, idService);
}
},
"Tyzt66iMoEOpQmYgqusqEw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_HostSurveyNote"));
})(varBag.model, idService);
}
},
"i9s8xnVFVUOZzDW_zGxSeQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsAccommodation"));
})(varBag.model, idService);
}
},
"i3syIGIpg0CGr9OpALJt6Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasAccommodationSurveyNote"));
})(varBag.model, idService);
}
},
"4n1_TwDYgUGKCDJ1OFYq6A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Label"));
})(varBag.model, idService);
}
},
"xuQe_GdIhkeaMnnVx5zpbg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Input"));
})(varBag.model, idService);
}
},
"Yz1_LFq01kG2KA9hJdh4tg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_AccommodationNote"));
})(varBag.model, idService);
}
},
"vIerFK+2iUazDcLzIi3mqw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsMeals"));
})(varBag.model, idService);
}
},
"sWKGgu5ck02me+Rl_Trvow": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasMealSurveyNote"));
})(varBag.model, idService);
}
},
"m91j8yKXoEy9epeMcM9NrQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Label"));
})(varBag.model, idService);
}
},
"RtAGvA9fPUW+8pDYai5vxA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Input"));
})(varBag.model, idService);
}
},
"7FVwiXzHb0yGqjBsMZXL7g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TextArea_MealNote"));
})(varBag.model, idService);
}
},
"THGX5x8WV0aIx+lfuTGkhA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsHelper"));
})(varBag.model, idService);
}
},
"k_VkeZb_Q0CvBJMDeSkMww": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasHelperSurveyNote"));
})(varBag.model, idService);
}
},
"5OB0um75g0i47pw0Bm_nKQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Label"));
})(varBag.model, idService);
}
},
"7VbBVMLn40ygQowl278j_Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Input"));
})(varBag.model, idService);
}
},
"rxty063Rn0eAGNcrNYxetw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_HelperNote"));
})(varBag.model, idService);
}
},
"3eeE6QZ0BUePvwvDC9uY9g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsAddingHelper"));
})(varBag.model, idService);
}
},
"nFe7SPShC0ykMPQE43lddg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_IsVehicle"));
})(varBag.model, idService);
}
},
"qmHVtLeN00WgahMXPfoWBQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasVehicleSurveyNote"));
})(varBag.model, idService);
}
},
"y+gr2p4wg0uGUhHqnsJhbw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Switch_HasVehicles"));
})(varBag.model, idService);
}
},
"3+5yOIj5NEeaYBakeqjbHQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasVehiclesSwitch"));
})(varBag.model, idService);
}
},
"IBoReexem0S593XI7B4tOw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_Summary"));
})(varBag.model, idService);
}
},
"Nk6cPfgmf0C+ZaIIfu5gcQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasHostSurveyNote"));
})(varBag.model, idService);
}
},
"Ee2htptbm0qxYN4RKhkuUQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"TYVorREm_EOZqzOK+sqpyw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasAccommodationSurvey"));
})(varBag.model, idService);
}
},
"6pKcIxi5LUOTvRIDU8SfJg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"A9pdNpq7OkWgAGLd92EPKg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CustomIcon"));
})(varBag.model, idService);
}
},
"Rtmv64aOn0a_rZdE_qDalw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"fL8CzzvsiUKFmzXltCdlqg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasRooms"));
})(varBag.model, idService);
}
},
"sz7P1q7LmEyihX6R5nAWQA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Status"));
})(varBag.model, idService);
}
},
"Wu5uRx_4SU+Gtf3cCR+nFg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Content"));
})(varBag.model, idService);
}
},
"hpKpCKbMZkC9+XT_eNnuVw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasMealSurvey"));
})(varBag.model, idService);
}
},
"bnbG3gxJlUe4gAjjtSlb1w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"TdXUBlDTUEm0G7epiE_1Hg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CustomIcon"));
})(varBag.model, idService);
}
},
"fvUX7X7OGU+YtEydnuHJJQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"3gaT14jdX0CyKiDIyqNjPQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasMealData"));
})(varBag.model, idService);
}
},
"PHdXuDiIk0eNyYFKghnJGA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Status"));
})(varBag.model, idService);
}
},
"kYEn2F0tZ0iDkiZ6GJVfkg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Content"));
})(varBag.model, idService);
}
},
"Q8iGpFi+h0q04Kp_RZtD9Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasHelperSurvey"));
})(varBag.model, idService);
}
},
"JTjhRcu7GE6p1f63uy37oQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"5vlPGpmOj0+lnHKN8iL3Aw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CustomIcon"));
})(varBag.model, idService);
}
},
"mXaWu9GzT0W5pmipJaDUbg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"Jf_ySFpUx02+Cajwjn9F9Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasHelpers"));
})(varBag.model, idService);
}
},
"bkgS96pUXEm2AntIBBN0hQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Status"));
})(varBag.model, idService);
}
},
"fB3w7ukzS0CgIocxWLcNjA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Content"));
})(varBag.model, idService);
}
},
"NleMzkD34UiU7QsBX7NNTQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasVehicleSurvey"));
})(varBag.model, idService);
}
},
"n5aWvkmTWUKgAHNMJyAJlA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Vehicles"));
})(varBag.model, idService);
}
},
"FtWl0oWnqUSHS+uF7ogSYg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"qjzcpzWa+keC8E1CRTyNpw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CustomIcon"));
})(varBag.model, idService);
}
},
"vFbf8pxq0k6zf4OHVGrLfQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"WDH51cAGRkuou3NlfB99gg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_HasVehicles2"));
})(varBag.model, idService);
}
},
"RHJsy8NbW02txla4wDhmwA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Status"));
})(varBag.model, idService);
}
},
"4721gEqKcUmSFSdaPVFWkw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Content"));
})(varBag.model, idService);
}
},
"Fa6EpRQhKE2P1XFF7ig3jQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PopUp_Cancel"));
})(varBag.model, idService);
}
},
"sMMFiEgw4U+MQe2jFSpFWA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Secondary"));
})(varBag.model, idService);
}
},
"l6cfCTZh00qRIFRmtzMbXA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Primary"));
})(varBag.model, idService);
}
},
"suvI4daxAUK5eKitLQ1Iyw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PopUp_Delete"));
})(varBag.model, idService);
}
},
"KeGPIu+_3kCJxo9tA4fRPg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Secondary"));
})(varBag.model, idService);
}
},
"ul3erts+Y02ockFyFEp4aA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Primary"));
})(varBag.model, idService);
}
},
"dYYc5sdN1Uy7Qx4MHHo9tg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PopUp_NoInfo"));
})(varBag.model, idService);
}
},
"QxKl_3iYjUqjLH1RaxbJ9g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Secondary"));
})(varBag.model, idService);
}
},
"IJv0xXjMYkK15gwcVjdn_A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Primary"));
})(varBag.model, idService);
}
},
"vY92aZznBUqYOnPCs0SqwA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PopUp_ReturnNavigation"));
})(varBag.model, idService);
}
},
"e9h94Cb5rkeV8xDq9m7r3w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Secondary"));
})(varBag.model, idService);
}
},
"0LK4Ca2qhkuGG_BJB43zfg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Primary"));
})(varBag.model, idService);
}
},
"vlfMWy2PR0yprCLMckQ+FA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PopUp_ReturnBack"));
})(varBag.model, idService);
}
},
"Jl2tioWxqUS_Zoz0hJ+mPw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Secondary"));
})(varBag.model, idService);
}
},
"o8wbpweXRUuFtW6Q5Ti4KQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Primary"));
})(varBag.model, idService);
}
},
"Q8u4Y4XaP02GgukOeeLqZg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("BottomBar"));
})(varBag.model, idService);
}
},
"xx51GMRrN0ePCT9oVY4C8Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_ShowBottomBar"));
})(varBag.model, idService);
}
},
"1hDTn4sp2EubmzrTaV9RqA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Secondary"));
})(varBag.model, idService);
}
},
"n9j8SW6oI02JXN6zfTG3Rw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Primary"));
})(varBag.model, idService);
}
},
"F85+tNG6MkiIivolfVNU2Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
},
"hXgTVTiQM0yTI974I477QA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("CommonUI_Elements"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
