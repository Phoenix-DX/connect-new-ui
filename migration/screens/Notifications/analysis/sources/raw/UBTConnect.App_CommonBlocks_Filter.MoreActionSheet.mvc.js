define("UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "UBTConnect.controller", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model", "NavigationHandler.controller", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTConnectLibrary.controller", "UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnectLibrary.ConnectPatterns.Button.mvc$model", "UBTConnect.App_Cache.CacheControl_UserInfo_Wrapper.mvc$model", "UBTConnect.App_Notifications.Notifications_ConfirmDialog.mvc$model", "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$model", "UBTConnect.model$Filter_Common_Control_ListRec", "UBTConnect.model$CacheControl_AllCountriesBooleanRecord", "UBTConnect.model$CacheControl_AllLocalitiesBooleanRecord", "UBTConnect.model$BooleanDirectory_UserCurrentRecord", "UBTConnect.model$Filter_Common_Control_ListListFilter_Common_Control_ListListFilter_Common_Control_ChoiceListRecord", "UBTConnect.model$Filter_CommonRec", "UBTConnect.model$Filter_Common_OptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ButtonOptionsRec", "UBTConnect.model$Filter_Common_Control_ChoiceList", "UBTConnect.model$Filter_Common_Control_ListList", "UBTConnectLibrary.model$SelectionOption_ItemRec", "UBTConnect.model$SelectionOption_ItemList", "UBTConnect.model$Filter_Common_Control_ChoiceRec", "UBTConnect.controller$App_CommonFilter_DefineOptionNames", "UBTConnect.model$TextTextLongIntegerRecordList", "UBTConnect.controller$App_CommonFilter_CheckCountry", "UBTConnect_Utils.model$UI_LocalityDetailsRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$UI_LocalityDetailsList", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "NavigationHandler.controller$PreventNavigation", "UBTConnect.referencesHealth$NavigationHandler", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetClose", "UBTConnect_Utils.model$UI_CountryDetailsRec", "UBTConnect.model$UI_CountryDetails2List", "UBTConnectLibrary.controller$Input_ClearString"], function (OutSystems, UBTConnectModel, UBTConnectLibraryModel, UBTConnectController, UBTConnect_UtilsModel, APIDomain_Directory_ISModel, NavigationHandlerController, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTConnectLibraryController, UBTConnectLibrary_ConnectPatterns_BottomSheet_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_ConnectPatterns_IconText_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, UBTConnectLibrary_ConnectPatterns_Button_mvcModel, UBTConnect_App_Cache_CacheControl_UserInfo_Wrapper_mvcModel, UBTConnect_App_Notifications_Notifications_ConfirmDialog_mvcModel, NavigationHandler_NavigationHandler_BackNavigationHandler_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("BottomSheetId", "bottomSheetIdVar", "BottomSheetId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("SubState_Selected", "subState_SelectedVar", "SubState_Selected", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("SubState_Main", "subState_MainVar", "SubState_Main", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("SubState_Localities", "subState_LocalitiesVar", "SubState_Localities", true, false, OS.DataTypes.DataTypes.Text, function () {
return "Localities";
}, false), 
this.attr("SubState_Countries", "subState_CountriesVar", "SubState_Countries", true, false, OS.DataTypes.DataTypes.Text, function () {
return "Countries";
}, false), 
this.attr("SortBy_Title", "sortBy_TitleVar", "SortBy_Title", true, false, OS.DataTypes.DataTypes.Text, function () {
return "Sort by";
}, false), 
this.attr("OptionList_Selected", "optionList_SelectedVar", "OptionList_Selected", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.Filter_Common_Control_ListRec());
}, false, UBTConnectModel.Filter_Common_Control_ListRec), 
this.attr("LocalCacheControl_AllCountries", "localCacheControl_AllCountriesVar", "LocalCacheControl_AllCountries", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.CacheControl_AllCountriesBooleanRecord());
}, false, UBTConnectModel.CacheControl_AllCountriesBooleanRecord), 
this.attr("LocalCacheControl_AllLocalities", "localCacheControl_AllLocalitiesVar", "LocalCacheControl_AllLocalities", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.CacheControl_AllLocalitiesBooleanRecord());
}, false, UBTConnectModel.CacheControl_AllLocalitiesBooleanRecord), 
this.attr("LocalCacheControl_UserInfo", "localCacheControl_UserInfoVar", "LocalCacheControl_UserInfo", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.BooleanDirectory_UserCurrentRecord());
}, false, UBTConnectModel.BooleanDirectory_UserCurrentRecord), 
this.attr("OptionControl", "optionControlVar", "OptionControl", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.Filter_Common_Control_ListListFilter_Common_Control_ListListFilter_Common_Control_ChoiceListRecord());
}, false, UBTConnectModel.Filter_Common_Control_ListListFilter_Common_Control_ListListFilter_Common_Control_ChoiceListRecord), 
this.attr("LastSearched_OptionControl", "lastSearched_OptionControlVar", "LastSearched_OptionControl", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.Filter_Common_Control_ListListFilter_Common_Control_ListListFilter_Common_Control_ChoiceListRecord());
}, false, UBTConnectModel.Filter_Common_Control_ListListFilter_Common_Control_ListListFilter_Common_Control_ChoiceListRecord), 
this.attr("Empty_OptionControl", "empty_OptionControlVar", "Empty_OptionControl", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.Filter_Common_Control_ListListFilter_Common_Control_ListListFilter_Common_Control_ChoiceListRecord());
}, false, UBTConnectModel.Filter_Common_Control_ListListFilter_Common_Control_ListListFilter_Common_Control_ChoiceListRecord), 
this.attr("isSingleFilter", "isSingleFilterVar", "isSingleFilter", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("isOpen_Local", "isOpen_LocalVar", "isOpen_Local", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("SearchInputId", "searchInputIdVar", "SearchInputId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("ForceUpdateOptionList", "forceUpdateOptionListVar", "ForceUpdateOptionList", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("ShowConfirmDeleteAllPopup", "showConfirmDeleteAllPopupVar", "ShowConfirmDeleteAllPopup", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("In_StartFilter", "in_StartFilterIn", "In_StartFilter", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.Filter_CommonRec());
}, false, UBTConnectModel.Filter_CommonRec), 
this.attr("_in_StartFilterInDataFetchStatus", "_in_StartFilterInDataFetchStatus", "_in_StartFilterInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_Filter_Common_Options_Choice", "in_Filter_Common_Options_ChoiceIn", "In_Filter_Common_Options_Choice", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.Filter_Common_OptionsRec());
}, false, UBTConnectModel.Filter_Common_OptionsRec), 
this.attr("_in_Filter_Common_Options_ChoiceInDataFetchStatus", "_in_Filter_Common_Options_ChoiceInDataFetchStatus", "_in_Filter_Common_Options_ChoiceInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ExtendedClasses", "extendedClassesIn", "ExtendedClasses", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_extendedClassesInDataFetchStatus", "_extendedClassesInDataFetchStatus", "_extendedClassesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (((((((UBTConnectLibrary_ConnectPatterns_BottomSheet_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_IconText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Button_mvcModel.hasValidationWidgets) || UBTConnect_App_Cache_CacheControl_UserInfo_Wrapper_mvcModel.hasValidationWidgets) || UBTConnect_App_Notifications_Notifications_ConfirmDialog_mvcModel.hasValidationWidgets) || NavigationHandler_NavigationHandler_BackNavigationHandler_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_StartFilter" in inputs) {
this.variables.in_StartFilterIn = inputs.In_StartFilter;
if("_in_StartFilterInDataFetchStatus" in inputs) {
this.variables._in_StartFilterInDataFetchStatus = inputs._in_StartFilterInDataFetchStatus;
}

}

if("In_Filter_Common_Options_Choice" in inputs) {
this.variables.in_Filter_Common_Options_ChoiceIn = inputs.In_Filter_Common_Options_Choice;
if("_in_Filter_Common_Options_ChoiceInDataFetchStatus" in inputs) {
this.variables._in_Filter_Common_Options_ChoiceInDataFetchStatus = inputs._in_Filter_Common_Options_ChoiceInDataFetchStatus;
}

}

if("ExtendedClasses" in inputs) {
this.variables.extendedClassesIn = inputs.ExtendedClasses;
if("_extendedClassesInDataFetchStatus" in inputs) {
this.variables._extendedClassesInDataFetchStatus = inputs._extendedClassesInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "App_CommonBlocks_Filter.MoreActionSheet");
});
define("UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model", "NavigationHandler.controller", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.mvc$model", "UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.mvc$controller", "UBTConnect.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.ConnectPatterns.Button.mvc$view", "UBTConnect.App_Cache.CacheControl_UserInfo_Wrapper.mvc$view", "UBTConnect.App_Notifications.Notifications_ConfirmDialog.mvc$view", "NavigationHandler.NavigationHandler.BackNavigationHandler.mvc$view", "UBTConnect.model$Filter_Common_Control_ListRec", "UBTConnect.model$CacheControl_AllCountriesBooleanRecord", "UBTConnect.model$CacheControl_AllLocalitiesBooleanRecord", "UBTConnect.model$BooleanDirectory_UserCurrentRecord", "UBTConnect.model$Filter_Common_Control_ListListFilter_Common_Control_ListListFilter_Common_Control_ChoiceListRecord", "UBTConnect.model$Filter_CommonRec", "UBTConnect.model$Filter_Common_OptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ButtonOptionsRec", "UBTConnect.model$Filter_Common_Control_ChoiceList", "UBTConnect.model$Filter_Common_Control_ListList", "UBTConnectLibrary.model$SelectionOption_ItemRec", "UBTConnect.model$SelectionOption_ItemList", "UBTConnect.model$Filter_Common_Control_ChoiceRec", "UBTConnect.controller$App_CommonFilter_DefineOptionNames", "UBTConnect.model$TextTextLongIntegerRecordList", "UBTConnect.controller$App_CommonFilter_CheckCountry", "UBTConnect_Utils.model$UI_LocalityDetailsRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$UI_LocalityDetailsList", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "NavigationHandler.controller$PreventNavigation", "UBTConnect.referencesHealth$NavigationHandler", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetClose", "UBTConnect_Utils.model$UI_CountryDetailsRec", "UBTConnect.model$UI_CountryDetails2List", "UBTConnectLibrary.controller$Input_ClearString"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTConnect_UtilsModel, APIDomain_Directory_ISModel, NavigationHandlerController, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTConnectLibraryController, React, OSView, UBTConnect_App_CommonBlocks_Filter_MoreActionSheet_mvc_model, UBTConnect_App_CommonBlocks_Filter_MoreActionSheet_mvc_controller, UBTConnectClientVariables, OSWidgets, UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectPatterns_Button_mvc_view, UBTConnect_App_Cache_CacheControl_UserInfo_Wrapper_mvc_view, UBTConnect_App_Notifications_Notifications_ConfirmDialog_mvc_view, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view) {
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
        View.displayName = "App_CommonBlocks_Filter.MoreActionSheet";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectPatterns_Button_mvc_view, UBTConnect_App_Cache_CacheControl_UserInfo_Wrapper_mvc_view, UBTConnect_App_Notifications_Notifications_ConfirmDialog_mvc_view, NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_App_CommonBlocks_Filter_MoreActionSheet_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_App_CommonBlocks_Filter_MoreActionSheet_mvc_controller;
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
style: "moreActionContainer",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_view, {
inputs: {
Content_Padding: model.getCachedValue(idService.getId("xEQNIjn_mEG3X0I4AHL_sw.Content_Padding"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
}),
ShowHeader: false,
FooterHeight: "72px",
Content_BackgroundColorId: UBTConnectModel.staticEntities.uBT_Color.neutral2,
Title: "Sort",
ExtendedClasses: model.variables.extendedClassesIn,
_extendedClassesInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassesInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onToggle$Action: function (isOpenIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/BottomSheet OnToggle");
controller.bottomSheetOnToggle$Action(isOpenIn, controller.callContext(eventHandlerContext));
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
controller.bottomSheetOnClose$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
initialized$Action: function (idIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/BottomSheet Initialized");
return controller.bottomSheetInitialized$Action(idIn, controller.callContext(eventHandlerContext));
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
uuid: "1",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("GVIV7xxWYECsYdZ5eKF0_g.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.backgroundAttr = function () {
var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
return rec;
}();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
return rec;
}();
rec.borderOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.BorderOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
rec.radiusAttr = function () {
var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Shape.medium;
return rec;
}();
return rec;
}();
rec.shadowIdAttr = UBTConnectModel.staticEntities.uBT_Shadow.extraSmall;
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
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("_BAVYG1fs02q3uhkbNPIFw.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
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
uuid: "3",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
inputs: {
TextOptions: model.getCachedValue(idService.getId("d4+d7k8Gs0+NAbj4T6Pp1Q.TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.primary;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.base;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
Text: "Mark all as read"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
clicked$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/IconText Clicked");
return controller.markAllAsReadClicked$Action(controller.callContext(eventHandlerContext));
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
uuid: "4",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.primary,
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.mail,
In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.medium_20
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
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("vAXP1j46xki7Hv9272nSJg.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
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
uuid: "6",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
inputs: {
Text: "Delete all notifications",
TextOptions: model.getCachedValue(idService.getId("tCBN6wu5GUiwx+4b9AGWMQ.TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.error;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.base;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/IconText Clicked");
controller.toggle_DeleteAllPopup$Action(controller.callContext(eventHandlerContext));
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
uuid: "7",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.medium_20,
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.error,
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.delete
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
uuid: "8",
alias: "8"
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
})];
})
},
_dependencies: []
})];
}),
footer: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("mg0BTOCVGUiGAYH6NKRuYQ.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.backgroundAttr = function () {
var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
return rec;
}();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.none;
rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.none;
return rec;
}();
rec.borderOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.BorderOptionsRec();
return rec;
}();
rec.shadowIdAttr = UBTConnectModel.staticEntities.uBT_Shadow.extraSmall;
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
uuid: "9",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Button_mvc_view, {
inputs: {
In_IsDisabled: false,
In_ButtonOptions: model.getCachedValue(idService.getId("26j4FwxM3kaLzfnwlFzbNQ.In_ButtonOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ButtonOptionsRec();
rec.uBT_ButtonSizeIdAttr = UBTConnectModel.staticEntities.uBT_ButtonSize.medium;
rec.uBT_ButtonTypeIdAttr = UBTConnectModel.staticEntities.uBT_ButtonType.tertiary;
rec.uBT_FlexBehaviorAttr = UBTConnectModel.staticEntities.uBT_FlexBehavior.grow;
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_OnClick$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Button Event_OnClick");
return controller.onClick_Clear$Action(controller.callContext(eventHandlerContext));
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
uuid: "10",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return ["Cancel"];
})
},
_dependencies: []
})];
})
},
_dependencies: []
})];
})
},
_dependencies: []
})), $if((model.variables.in_Filter_Common_Options_ChoiceIn.hasCountriesAttr.enableAttr || model.variables.in_Filter_Common_Options_ChoiceIn.hasLocalitiesAttr.enableAttr), false, this, function () {
return [React.createElement(UBTConnect_App_Cache_CacheControl_UserInfo_Wrapper_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
result$Action: function (userInformationIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Cache/CacheControl_UserInfo_Wrapper Result");
return controller.cacheControl_UserInfo_WrapperResult$Action(userInformationIn, controller.callContext(eventHandlerContext));
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
uuid: "11",
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), React.createElement(OSWidgets.Popup, {
showPopup: model.variables.showConfirmDeleteAllPopupVar,
style: "popup-dialog",
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnect_App_Notifications_Notifications_ConfirmDialog_mvc_view, {
inputs: {
IsSingle: false
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
confirm$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Notifications/Notifications_ConfirmDialog Confirm");
return controller.deleteAllNotificationClicked$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
cancel$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Notifications/Notifications_ConfirmDialog Cancel");
controller.toggle_DeleteAllPopup$Action(controller.callContext(eventHandlerContext));
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
uuid: "13",
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(NavigationHandler_NavigationHandler_BackNavigationHandler_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
backNavigation$Action: function (backNavigationEventIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "NavigationHandler/BackNavigationHandler BackNavigation");
controller.handler_BackNavigation$Action(backNavigationEventIn, controller.callContext(eventHandlerContext));
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
uuid: "14",
alias: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTConnect_Utils.model", "APIDomain_Directory_IS.model", "NavigationHandler.controller", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTConnectLibrary.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.mvc$debugger", "UBTConnect.model$Filter_Common_Control_ListRec", "UBTConnect.model$CacheControl_AllCountriesBooleanRecord", "UBTConnect.model$CacheControl_AllLocalitiesBooleanRecord", "UBTConnect.model$BooleanDirectory_UserCurrentRecord", "UBTConnect.model$Filter_Common_Control_ListListFilter_Common_Control_ListListFilter_Common_Control_ChoiceListRecord", "UBTConnect.model$Filter_CommonRec", "UBTConnect.model$Filter_Common_OptionsRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ButtonOptionsRec", "UBTConnect.model$Filter_Common_Control_ChoiceList", "UBTConnect.model$Filter_Common_Control_ListList", "UBTConnectLibrary.model$SelectionOption_ItemRec", "UBTConnect.model$SelectionOption_ItemList", "UBTConnect.model$Filter_Common_Control_ChoiceRec", "UBTConnect.controller$App_CommonFilter_DefineOptionNames", "UBTConnect.model$TextTextLongIntegerRecordList", "UBTConnect.controller$App_CommonFilter_CheckCountry", "UBTConnect_Utils.model$UI_LocalityDetailsRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$UI_LocalityDetailsList", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "NavigationHandler.controller$PreventNavigation", "UBTConnect.referencesHealth$NavigationHandler", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetClose", "UBTConnect_Utils.model$UI_CountryDetailsRec", "UBTConnect.model$UI_CountryDetails2List", "UBTConnectLibrary.controller$Input_ClearString"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTConnect_UtilsModel, APIDomain_Directory_ISModel, NavigationHandlerController, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTConnectLibraryController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_CommonBlocks_Filter_MoreActionSheet_mvc_Debugger) {
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
Controller.prototype._bottomSheetOnToggle$Action = function (isOpenIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("BottomSheetOnToggle");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.BottomSheetOnToggle$vars"))());
vars.value.isOpenInLocal = isOpenIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:RPK3CcLJVEix+F3B65pX7A:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.UdG21F4c3E6cr1pBKYbIfQ/ClientActions.RPK3CcLJVEix+F3B65pX7A:4Ux2IqQZn02JMWBte0BuOA", "UBTConnect", "BottomSheetOnToggle", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HOq+zaJZCkS7h1Wr2PaWbQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Qpejj5QgykavgFyCxeHcWA", callContext.id);
// isOpen_Local = IsOpen
model.variables.isOpen_LocalVar = vars.value.isOpenInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:iGJl76HU5UKtVDHyrCuCSw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:RPK3CcLJVEix+F3B65pX7A", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.BottomSheetOnToggle$vars", [{
name: "IsOpen",
attrName: "isOpenInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._handler_Input_OnReady$Action = function (idIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_Input_OnReady");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.Handler_Input_OnReady$vars"))());
vars.value.idInLocal = idIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:+XCrGKJFXUWiDhWqKy9R9g:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.UdG21F4c3E6cr1pBKYbIfQ/ClientActions.+XCrGKJFXUWiDhWqKy9R9g:3KUTWqYQswqPh3uyIknRag", "UBTConnect", "Handler_Input_OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rIFK3h+cgkK5KHvd9BT_YQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8dSuuGvmtkuMdAklqCTR5A", callContext.id);
// SearchInputId = Id
model.variables.searchInputIdVar = vars.value.idInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Z8mJvX78jEGk1XED1_gGlg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:+XCrGKJFXUWiDhWqKy9R9g", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.Handler_Input_OnReady$vars", [{
name: "Id",
attrName: "idInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._action_DefineOptionControl_Empty$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_DefineOptionControl_Empty");
callContext = controller.callContext(callContext);
var listIndexOfVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.listIndexOfVar = listIndexOfVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:TsZsHu4H40u6Wp_agfh82Q:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.UdG21F4c3E6cr1pBKYbIfQ/ClientActions.TsZsHu4H40u6Wp_agfh82Q:qUQAhkE8uIXAIPJyvPdZEg", "UBTConnect", "Action_DefineOptionControl_Empty", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Yu+0F1PwSEe7QKbvfJ3IQg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:j4XVMjs7+Em6UqjNufwE1g", callContext.id);
// Empty_OptionControl = OptionControl
model.variables.empty_OptionControlVar = model.variables.optionControlVar;
// Foreach Empty_OptionControl.OptionList_Control
callContext.iterationContext.registerIterationStart(model.variables.empty_OptionControlVar.optionList_ControlAttr);
try {var optionList_ControlIterator = callContext.iterationContext.getIterator(model.variables.empty_OptionControlVar.optionList_ControlAttr);
var optionList_ControlIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:K0hAUoXdXEWa0rChma6H5Q", callContext.id) && (optionList_ControlIndex < model.variables.empty_OptionControlVar.optionList_ControlAttr.length))) {
optionList_ControlIterator.currentRowNumber = optionList_ControlIndex;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6gxuqPOcf06Kgouo+ShEog", callContext.id);
// Execute Action: ListClear
OS.SystemActions.listClear(model.variables.empty_OptionControlVar.optionList_ControlAttr.getItem(optionList_ControlIndex.valueOf()).selectedIdsAttr, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CH0XgCuPzUeYvwKUdDKoVg", callContext.id);
// Execute Action: ListClear2
OS.SystemActions.listClear(model.variables.empty_OptionControlVar.optionList_ControlAttr.getItem(optionList_ControlIndex.valueOf()).selectedNamesAttr, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Sx61_DcutkWWJRs47IjaUg", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(model.variables.empty_OptionControlVar.optionList_ControlAttr.getItem(optionList_ControlIndex.valueOf()).selectedIdsAttr, UBTConnectModel.staticEntities.choice.none, callContext);
optionList_ControlIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.empty_OptionControlVar.optionList_ControlAttr);
}

// Foreach Empty_OptionControl.OptionChoice_Control
callContext.iterationContext.registerIterationStart(model.variables.empty_OptionControlVar.optionChoice_ControlAttr);
try {var optionChoice_ControlIterator = callContext.iterationContext.getIterator(model.variables.empty_OptionControlVar.optionChoice_ControlAttr);
var optionChoice_ControlIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JdE_BaY0gUmdYUESXajTLA", callContext.id) && (optionChoice_ControlIndex < model.variables.empty_OptionControlVar.optionChoice_ControlAttr.length))) {
optionChoice_ControlIterator.currentRowNumber = optionChoice_ControlIndex;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tGxSZCZ95k6AvpiqxZzzyA", callContext.id);
// Empty_OptionControl.OptionChoice_Control.Current.SelectedChoiceId = None
model.variables.empty_OptionControlVar.optionChoice_ControlAttr.getItem(optionChoice_ControlIndex.valueOf()).selectedChoiceIdAttr = UBTConnectModel.staticEntities.choice.none;
optionChoice_ControlIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.empty_OptionControlVar.optionChoice_ControlAttr);
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:07nlAKbvDkqWTRsnlQ5CsQ", callContext.id);
// Execute Action: ListIndexOf
listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.empty_OptionControlVar.optionChoice_ControlAttr, function (p) {
return (p.titleAttr === model.variables.sortBy_TitleVar);
}, callContext);

// Has Sort
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Hd0PI+1mbEGWxnstRX+DIQ", callContext.id) && (listIndexOfVar.value.positionOut >= 0))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2kNGdvRX+kGVEWTzxB+gkQ", callContext.id);
// Empty_OptionControl.OptionChoice_Control[ListIndexOf.Position].SelectedChoiceId = Yes
model.variables.empty_OptionControlVar.optionChoice_ControlAttr.getItem(listIndexOfVar.value.positionOut).selectedChoiceIdAttr = UBTConnectModel.staticEntities.choice.yes;
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:toQFhQHxJ0OEaDx37UdJWg", callContext.id);
// Execute Action: Action_SetSingleFilter
controller._action_SetSingleFilter$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AZpwQmHvvEygbJZbs3jPpw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:TsZsHu4H40u6Wp_agfh82Q", callContext.id);
}

};
Controller.prototype._handler_ListOnSelectionChange$Action = function (selectedItemsIn, clickedItemIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_ListOnSelectionChange");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.Handler_ListOnSelectionChange$vars"))());
vars.value.selectedItemsInLocal = selectedItemsIn.clone();
vars.value.clickedItemIdInLocal = clickedItemIdIn;
var listIndexOfVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.listIndexOfVar = listIndexOfVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:vlJcIPVf7EekKZ661yKOHQ:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.UdG21F4c3E6cr1pBKYbIfQ/ClientActions.vlJcIPVf7EekKZ661yKOHQ:1UEIPfd9CX1MFUC57vQq8w", "UBTConnect", "Handler_ListOnSelectionChange", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Kxf9t_vZGUmyeA+kTlUz6w", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tkBkzl6frU+mBAQZ1GlBtg", callContext.id);
// OptionControl.OptionFlatList_Control.Current.SelectedIds = SelectedItems
model.variables.optionControlVar.optionFlatList_ControlAttr.getCurrent(callContext.iterationContext).selectedIdsAttr = OS.DataConversion.JSConversions.typeConvertRecordList(vars.value.selectedItemsInLocal, new OS.DataTypes.TextList(), function (source, target) {
target = source.idAttr;
return target;
});
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tkBkzl6frU+mBAQZ1GlBtg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// OptionControl.OptionFlatList_Control.Current.SelectedNames = SelectedItems
model.variables.optionControlVar.optionFlatList_ControlAttr.getCurrent(callContext.iterationContext).selectedNamesAttr = OS.DataConversion.JSConversions.typeConvertRecordList(vars.value.selectedItemsInLocal, new OS.DataTypes.TextList(), function (source, target) {
target = source.displayTextAttr;
return target;
});
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dv0c9Be+zk+4EKb77YN0UQ", callContext.id);
// Execute Action: ListIndexOf
listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.optionControlVar.optionFlatList_ControlAttr.getCurrent(callContext.iterationContext).in_OptionsAttr, function (p) {
return (p.idAttr === vars.value.clickedItemIdInLocal);
}, callContext);

if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:s+Mu8hqGrkqFvJ0o+Pb19g", callContext.id) && (listIndexOfVar.value.positionOut >= 0))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0twKuFeThkmcwoIiDQhfcQ", callContext.id);
// OptionControl.OptionFlatList_Control.Current.In_Options[ListIndexOf.Position].isSelected = notOptionControl.OptionFlatList_Control.Current.In_Options[ListIndexOf.Position].isSelected
model.variables.optionControlVar.optionFlatList_ControlAttr.getCurrent(callContext.iterationContext).in_OptionsAttr.getItem(listIndexOfVar.value.positionOut).isSelectedAttr = !(model.variables.optionControlVar.optionFlatList_ControlAttr.getCurrent(callContext.iterationContext).in_OptionsAttr.getItem(listIndexOfVar.value.positionOut).isSelectedAttr);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zHQUyqo6Zk+J7obvZA4KCQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zHQUyqo6Zk+J7obvZA4KCQ", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:vlJcIPVf7EekKZ661yKOHQ", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.Handler_ListOnSelectionChange$vars", [{
name: "SelectedItems",
attrName: "selectedItemsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnectModel.SelectionOption_ItemList();
},
complexType: UBTConnectModel.SelectionOption_ItemList
}, {
name: "ClickedItemId",
attrName: "clickedItemIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._bottomSheetInitialized$Action = function (idIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("BottomSheetInitialized");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.BottomSheetInitialized$vars"))());
vars.value.idInLocal = idIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:3ktDM0NgQUqK5ZeKiKXyfg:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.UdG21F4c3E6cr1pBKYbIfQ/ClientActions.3ktDM0NgQUqK5ZeKiKXyfg:zSm7LEqeRJNabHNOw6Atsw", "UBTConnect", "BottomSheetInitialized", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_d2wWwq6ZUC_X7toXf5wfQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uzkKezW2jUmmrP508VFdVw", callContext.id);
// BottomSheetId = Id
model.variables.bottomSheetIdVar = vars.value.idInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:A+eFrGq+8k672dj0um4AZA", callContext.id);
// Trigger Event: SheetInitialized
return controller.sheetInitialized$Action(vars.value.idInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rh+IPNasi0WdJ8YOVLI_OA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:3ktDM0NgQUqK5ZeKiKXyfg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:3ktDM0NgQUqK5ZeKiKXyfg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.BottomSheetInitialized$vars", [{
name: "Id",
attrName: "idInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._action_DefineSortBy$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_DefineSortBy");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.Action_DefineSortBy$vars"))());
var listIndexOfVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.listIndexOfVar = listIndexOfVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:R2B2N5L0QE6WUmsKhVfl_g:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.UdG21F4c3E6cr1pBKYbIfQ/ClientActions.R2B2N5L0QE6WUmsKhVfl_g:wYMxGpmFzAzYsQX6d9bqMw", "UBTConnect", "Action_DefineSortBy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+tHoNl8hE0ebHm3L5mxmcg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3xNcmsfJfkOzmXFF8STtNQ", callContext.id);
// Execute Action: ListIndexOf
listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.optionControlVar.optionChoice_ControlAttr, function (p) {
return (p.titleAttr === model.variables.sortBy_TitleVar);
}, callContext);

// Has Sorting
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:efg3sUD4ck2TlYaZobDTew", callContext.id) && model.variables.in_Filter_Common_Options_ChoiceIn.hasSortingAttr.enableAttr)) {
// Already Has Element
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5fOk7FnZRE2Yxkw1c7qHMA", callContext.id) && (listIndexOfVar.value.positionOut >= 0))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2uuzcLcWc0u3+eUEa9bWeA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3QTrCyyfiUe+qyVwi86WOA", callContext.id);
// Local_FilterChoiceItem.Title = SortBy_Title
vars.value.local_FilterChoiceItemVar.titleAttr = model.variables.sortBy_TitleVar;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3QTrCyyfiUe+qyVwi86WOA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Local_FilterChoiceItem.SelectedChoiceId = If
vars.value.local_FilterChoiceItemVar.selectedChoiceIdAttr = (((model.variables.in_StartFilterIn.sort_ByNewestAttr === OS.BuiltinFunctions.nullTextIdentifier())) ? (UBTConnectModel.staticEntities.choice.yes) : (model.variables.in_StartFilterIn.sort_ByNewestAttr));
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3QTrCyyfiUe+qyVwi86WOA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Local_FilterChoiceItem.YesLabel = In_Filter_Common_Options_Choice.HasSorting.YesLabel
vars.value.local_FilterChoiceItemVar.yesLabelAttr = model.variables.in_Filter_Common_Options_ChoiceIn.hasSortingAttr.yesLabelAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3QTrCyyfiUe+qyVwi86WOA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// Local_FilterChoiceItem.NoLabel = In_Filter_Common_Options_Choice.HasSorting.NoLabel
vars.value.local_FilterChoiceItemVar.noLabelAttr = model.variables.in_Filter_Common_Options_ChoiceIn.hasSortingAttr.noLabelAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3QTrCyyfiUe+qyVwi86WOA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// Local_FilterChoiceItem.NoneLabel = ""
vars.value.local_FilterChoiceItemVar.noneLabelAttr = "";
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3QTrCyyfiUe+qyVwi86WOA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "6");
// Local_FilterChoiceItem.Order = In_Filter_Common_Options_Choice.HasSorting.Order
vars.value.local_FilterChoiceItemVar.orderAttr = model.variables.in_Filter_Common_Options_ChoiceIn.hasSortingAttr.orderAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:J9tGiaULZUSBcJuLeZEhsQ", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(model.variables.optionControlVar.optionChoice_ControlAttr, vars.value.local_FilterChoiceItemVar, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:R56Y2wIoW0m8WaUsw0fFEQ", callContext.id);
}

} else {
// Already Has Element
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:86tZRFgbMU6iDpD00_vXfA", callContext.id) && (listIndexOfVar.value.positionOut >= 0))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3lnqu_FOaE6kCVLwj3l9jg", callContext.id);
// Execute Action: ListRemove
OS.SystemActions.listRemove(model.variables.optionControlVar.optionChoice_ControlAttr, listIndexOfVar.value.positionOut, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:R56Y2wIoW0m8WaUsw0fFEQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1AuwwQYxR0uHMrizBEtEYQ", callContext.id);
}

}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:R2B2N5L0QE6WUmsKhVfl_g", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.Action_DefineSortBy$vars", [{
name: "Local_FilterChoiceItem",
attrName: "local_FilterChoiceItemVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectModel.Filter_Common_Control_ChoiceRec();
},
complexType: UBTConnectModel.Filter_Common_Control_ChoiceRec
}]);
Controller.prototype._screenEvent_OnInitialize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ScreenEvent_OnInitialize");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:_phiQwHXGUSZoj+JsEVL3Q:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.UdG21F4c3E6cr1pBKYbIfQ/ClientActions._phiQwHXGUSZoj+JsEVL3Q:HejYCG6c8mDTp4VkszrN9Q", "UBTConnect", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1W1+ZdExkUSuTCZzp6PZQQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Tgf8dpOf1kyQ1BMkYsXOPQ", callContext.id);
// Execute Action: Action_Define_OptionControl
controller._action_Define_OptionControl$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dSt0lbHBYkKNhCkjjhNaKg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:_phiQwHXGUSZoj+JsEVL3Q", callContext.id);
}

};
Controller.prototype._toggle_DeleteAllPopup$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Toggle_DeleteAllPopup");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:KxUKS9p5x0W3keBUmdIssA:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.UdG21F4c3E6cr1pBKYbIfQ/ClientActions.KxUKS9p5x0W3keBUmdIssA:gcJTrWbVp1wr6Sr03aJJEA", "UBTConnect", "Toggle_DeleteAllPopup", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UqakJjIbSEeiTLjIy3ETyQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6jMuZzrpN0+hpWU0FdWM4A", callContext.id);
// ShowConfirmDeleteAllPopup = notShowConfirmDeleteAllPopup
model.variables.showConfirmDeleteAllPopupVar = !(model.variables.showConfirmDeleteAllPopupVar);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:z92wYS5CEUyHJk8Tm+ooqg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:KxUKS9p5x0W3keBUmdIssA", callContext.id);
}

};
Controller.prototype._action_FilterLocalitiesByCountry$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_FilterLocalitiesByCountry");
callContext = controller.callContext(callContext);
var listDuplicateVar = new OS.DataTypes.VariableHolder();
var listIndexOfCountriesVar = new OS.DataTypes.VariableHolder();
var listFilterVar = new OS.DataTypes.VariableHolder();
var app_CommonFilter_DefineOptionNamesVar = new OS.DataTypes.VariableHolder();
var listAnyVar = new OS.DataTypes.VariableHolder();
var listIndexOfLocalitiesVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.listDuplicateVar = listDuplicateVar;
varBag.listIndexOfCountriesVar = listIndexOfCountriesVar;
varBag.listFilterVar = listFilterVar;
varBag.app_CommonFilter_DefineOptionNamesVar = app_CommonFilter_DefineOptionNamesVar;
varBag.listAnyVar = listAnyVar;
varBag.listIndexOfLocalitiesVar = listIndexOfLocalitiesVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:kgDbVpSEMkOmacIa_OQ+bw:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.UdG21F4c3E6cr1pBKYbIfQ/ClientActions.kgDbVpSEMkOmacIa_OQ+bw:BreLpnr3ZW1gvuF1YIiD3A", "UBTConnect", "Action_FilterLocalitiesByCountry", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:q2wRrJ3PpUyV9GC3sy4Yhw", callContext.id);
// ShouldFilter
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vNcWuTQYiE24bzxRJYfSRQ", callContext.id) && (model.variables.in_Filter_Common_Options_ChoiceIn.hasCountriesAttr.enableAttr && model.variables.in_Filter_Common_Options_ChoiceIn.hasLocalitiesAttr.enableAttr))) {
// isFetched
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:toBA_5Sw+k2MAlMJ3Baq_g", callContext.id) && (model.variables.localCacheControl_AllCountriesVar.isFetchedAttr && model.variables.localCacheControl_AllLocalitiesVar.isFetchedAttr))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MTEH0BIl8Eixyqo0QM6NTA", callContext.id);
// Execute Action: ListIndexOfLocalities
listIndexOfLocalitiesVar.value = OS.SystemActions.listIndexOf(model.variables.optionControlVar.optionList_ControlAttr, function (p) {
return (p.titleAttr === model.variables.subState_LocalitiesVar);
}, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ekh_g5LTzUiOnEnjLXP2rg", callContext.id);
// Execute Action: ListIndexOfCountries
listIndexOfCountriesVar.value = OS.SystemActions.listIndexOf(model.variables.optionControlVar.optionList_ControlAttr, function (p) {
return (p.titleAttr === model.variables.subState_CountriesVar);
}, callContext);

// HasItems
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sl+eMQFyz0SeRVdTwFFm5A", callContext.id) && ((listIndexOfLocalitiesVar.value.positionOut >= 0) && (listIndexOfCountriesVar.value.positionOut >= 0)))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tDR9NAsLVEaTvyjJom8n8Q", callContext.id);
// Execute Action: ListClear
OS.SystemActions.listClear(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfLocalitiesVar.value.positionOut).in_OptionsAttr, callContext);
// Country Has All Selected
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Uj5elSBSD02xuNRtODrVFA", callContext.id) && (model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfCountriesVar.value.positionOut).selectedIdsAttr.getCurrent(callContext.iterationContext) === UBTConnectModel.staticEntities.choice.none))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:z+vHpBijkUCJk5rLkokcUA", callContext.id);
// Execute Action: ListAppendAll
OS.SystemActions.listAppendAll(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfLocalitiesVar.value.positionOut).in_OptionsAttr, OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.localCacheControl_AllLocalitiesVar.cacheControl_AllLocalitiesAttr.localityListAttr, new UBTConnectModel.SelectionOption_ItemList(), function (source, target) {
target.idAttr = source.localityIdAttr;
target.displayTextAttr = source.nameAttr;
target.countryCodeAttr = source.countryCodeAttr;
target.isEnabledAttr = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectController.default.app_CommonFilter_CheckCountry$Action(source.countryCodeAttr, model.variables.localCacheControl_UserInfoVar.directory_UserCurrentAttr.directory_UserCurrent_SubscriptionAttr.subscribedCountriesAttr, callContext).isEnabledOut;
}, OS.DataTypes.DataTypes.Boolean, callContext.id);
return target;
}), callContext);
} else {
// ForEachSelected
// Foreach OptionControl.OptionList_Control[ListIndexOfCountries.Position].SelectedIds
callContext.iterationContext.registerIterationStart(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfCountriesVar.value.positionOut).selectedIdsAttr);
try {var selectedIdsIterator = callContext.iterationContext.getIterator(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfCountriesVar.value.positionOut).selectedIdsAttr);
var selectedIdsIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:laA17FQqzUCpPytlmSeCow", callContext.id) && (selectedIdsIndex < model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfCountriesVar.value.positionOut).selectedIdsAttr.length))) {
selectedIdsIterator.currentRowNumber = selectedIdsIndex;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NwrLoRlnZk2GHAefw5dXLg", callContext.id);
// Execute Action: ListFilter
listFilterVar.value = OS.SystemActions.listFilter(model.variables.localCacheControl_AllLocalitiesVar.cacheControl_AllLocalitiesAttr.localityListAttr, function (p) {
return (OS.BuiltinFunctions.toUpper(OS.BuiltinFunctions.trim(p.countryCodeAttr)) === OS.BuiltinFunctions.toUpper(OS.BuiltinFunctions.trim(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfCountriesVar.value.positionOut).selectedIdsAttr.getItem(selectedIdsIndex.valueOf()))));
}, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sqr5WPVph0OVvsMuFxJGqw", callContext.id);
// Execute Action: ListAppendAll2
OS.SystemActions.listAppendAll(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfLocalitiesVar.value.positionOut).in_OptionsAttr, OS.DataConversion.JSConversions.typeConvertRecordList(listFilterVar.value.filteredListOut, new UBTConnectModel.SelectionOption_ItemList(), function (source, target) {
target.idAttr = source.localityIdAttr;
target.displayTextAttr = source.nameAttr;
target.countryCodeAttr = source.countryCodeAttr;
target.isEnabledAttr = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectController.default.app_CommonFilter_CheckCountry$Action(source.countryCodeAttr, model.variables.localCacheControl_UserInfoVar.directory_UserCurrentAttr.directory_UserCurrent_SubscriptionAttr.subscribedCountriesAttr, callContext).isEnabledOut;
}, OS.DataTypes.DataTypes.Boolean, callContext.id);
return target;
}), callContext);
selectedIdsIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfCountriesVar.value.positionOut).selectedIdsAttr);
}

}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fGShhTNpZkWaOfhDtl5_dA", callContext.id);
// Execute Action: ListSort
OS.SystemActions.listSort(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfLocalitiesVar.value.positionOut).in_OptionsAttr, function (p) {
return (p.countryCodeAttr + p.displayTextAttr);
}, true, callContext);
// Locality Has All Selected
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZiyFkKL8rESgnDgcVvDa7w", callContext.id) && (model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfLocalitiesVar.value.positionOut).selectedIdsAttr.getCurrent(callContext.iterationContext) === UBTConnectModel.staticEntities.choice.none))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vlZPXxUWUUOOjRwTyTfm8w", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:akbvKpPzsEGqBroLgOKffA", callContext.id);
// Execute Action: ListDuplicate
listDuplicateVar.value = OS.SystemActions.listDuplicate(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfLocalitiesVar.value.positionOut).selectedIdsAttr, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Sn4GFL07+0iskflsJWx56g", callContext.id);
// Execute Action: ListClear2
OS.SystemActions.listClear(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfLocalitiesVar.value.positionOut).selectedIdsAttr, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Vo4z0qAqW0KYon6LtR_7Cg", callContext.id);
// Execute Action: ListClear3
OS.SystemActions.listClear(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfLocalitiesVar.value.positionOut).selectedNamesAttr, callContext);
// Foreach ListDuplicate.DuplicatedList
callContext.iterationContext.registerIterationStart(listDuplicateVar.value.duplicatedListOut);
try {var duplicatedListIterator = callContext.iterationContext.getIterator(listDuplicateVar.value.duplicatedListOut);
var duplicatedListIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+AAh5VFEGUGy+JD8aFvD9A", callContext.id) && (duplicatedListIndex < listDuplicateVar.value.duplicatedListOut.length))) {
duplicatedListIterator.currentRowNumber = duplicatedListIndex;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2hHaqwc4zESsfuRXl1nFCQ", callContext.id);
// Execute Action: ListAny
listAnyVar.value = OS.SystemActions.listAny(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfLocalitiesVar.value.positionOut).in_OptionsAttr, function (p) {
return (p.idAttr === listDuplicateVar.value.duplicatedListOut.getItem(duplicatedListIndex.valueOf()));
}, callContext);

// SelectedOptionStillExist
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:N0YLXfS2okKDvf5kTkGkgA", callContext.id) && listAnyVar.value.resultOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:P+twBkR6C0CbR7mvfwOMDQ", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfLocalitiesVar.value.positionOut).selectedIdsAttr, listDuplicateVar.value.duplicatedListOut.getItem(duplicatedListIndex.valueOf()), callContext);
}

duplicatedListIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(listDuplicateVar.value.duplicatedListOut);
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fW_4qMYNxUy3bVb0KUiCSQ", callContext.id);
// Execute Action: App_CommonFilter_DefineOptionNames
app_CommonFilter_DefineOptionNamesVar.value = UBTConnectController.default.app_CommonFilter_DefineOptionNames$Action(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfLocalitiesVar.value.positionOut), callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SHviQT9M00qf5K7+Wuzwww", callContext.id);
// OptionControl.OptionList_Control[ListIndexOfLocalities.Position] = App_CommonFilter_DefineOptionNames.Formatted
model.variables.optionControlVar.optionList_ControlAttr.setItem(listIndexOfLocalitiesVar.value.positionOut,app_CommonFilter_DefineOptionNamesVar.value.formattedOut);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6E0j_MWjBEqX0_idklSK8Q", callContext.id);
}

} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:T0ONMYOVNkmEOIguxZfA4Q", callContext.id);
}

} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Vr9CpzaBjk+E+Do67LnN4g", callContext.id);
}

} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Vr9CpzaBjk+E+Do67LnN4g", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:kgDbVpSEMkOmacIa_OQ+bw", callContext.id);
}

};
Controller.prototype._cacheControl_UserInfo_WrapperResult$Action = function (userInformationIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("CacheControl_UserInfo_WrapperResult");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.CacheControl_UserInfo_WrapperResult$vars"))());
vars.value.userInformationInLocal = userInformationIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:pPGlYzXbG0y5GIrdX7wIgQ:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.UdG21F4c3E6cr1pBKYbIfQ/ClientActions.pPGlYzXbG0y5GIrdX7wIgQ:mIZjgk2WpNaZ06_E0Qijtg", "UBTConnect", "CacheControl_UserInfo_WrapperResult", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Bf3s0PXjl0WG4G2T7WHd9w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// LocalCacheControl_UserInfo
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:95XpvfNJHkavOC9NLjEyuA", callContext.id);
// LocalCacheControl_UserInfo.Directory_UserCurrent = UserInformation
model.variables.localCacheControl_UserInfoVar.directory_UserCurrentAttr = vars.value.userInformationInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:95XpvfNJHkavOC9NLjEyuA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// LocalCacheControl_UserInfo.isFetched = True
model.variables.localCacheControl_UserInfoVar.isFetchedAttr = true;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6PbLaoVGqk+l2xUTya+uVg", callContext.id);
// Execute Action: Action_Define_Countries
controller._action_Define_Countries$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:24FTcRTTfkSDVOmFgCrV+Q", callContext.id);
// Execute Action: Action_Define_Localities
controller._action_Define_Localities$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:F1aMgo7gGkuA4mvs7WmU5A", callContext.id);
// HasFiltersOtherThanLocality = notIn_Filter_Common_Options_Choice.Extra_OptionLists.Empty or notIn_Filter_Common_Options_Choice.Extra_OptionChoices.Empty or In_Filter_Common_Options_Choice.HasSorting.Enable
vars.value.hasFiltersOtherThanLocalityVar = ((!(model.variables.in_Filter_Common_Options_ChoiceIn.extra_OptionListsAttr.isEmpty) || !(model.variables.in_Filter_Common_Options_ChoiceIn.extra_OptionChoicesAttr.isEmpty)) || model.variables.in_Filter_Common_Options_ChoiceIn.hasSortingAttr.enableAttr);
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TOjuQfyP1keUn7gpttGgyg", callContext.id) && vars.value.hasFiltersOtherThanLocalityVar)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gBQyskQKa0aHwdMtWuyAMQ", callContext.id);
// ShowSubscriptionOnClick = False
vars.value.showSubscriptionOnClickVar = false;
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:s8THvygJp0W04O34XsVsAw", callContext.id);
// ShowSubscriptionOnClick = UserInformation.Directory_UserCurrent_Subscription.SubscriptionType = Free
vars.value.showSubscriptionOnClickVar = (vars.value.userInformationInLocal.directory_UserCurrent_SubscriptionAttr.subscriptionTypeAttr === UBTConnectModel.staticEntities.connect_Subscription_Plan.free);
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8Hpb3djwWUu6UcQCbfvkDQ", callContext.id);
// Trigger Event: Loaded
return controller.loaded$Action(vars.value.showSubscriptionOnClickVar, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TPkMMSONvU2U_qPKRho9wA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:pPGlYzXbG0y5GIrdX7wIgQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:pPGlYzXbG0y5GIrdX7wIgQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.CacheControl_UserInfo_WrapperResult$vars", [{
name: "UserInformation",
attrName: "userInformationInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new APIDomain_Directory_ISModel.Directory_UserCurrentRec();
},
complexType: APIDomain_Directory_ISModel.Directory_UserCurrentRec
}, {
name: "HasFiltersOtherThanLocality",
attrName: "hasFiltersOtherThanLocalityVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ShowSubscriptionOnClick",
attrName: "showSubscriptionOnClickVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._handler_BackNavigation$Action = function (backNavigationEventIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_BackNavigation");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.Handler_BackNavigation$vars"))());
vars.value.backNavigationEventInLocal = backNavigationEventIn;
var bottomSheetCloseVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.bottomSheetCloseVar = bottomSheetCloseVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:svjAacFFA0amBmC_waTiXA:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.UdG21F4c3E6cr1pBKYbIfQ/ClientActions.svjAacFFA0amBmC_waTiXA:jB1nMk_tYuRvvzdpTABLbA", "UBTConnect", "Handler_BackNavigation", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2zEPr0Q7tUyKLWqKricxXg", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tSfWNGLNqUeREwrr1DPsIA", callContext.id) && model.variables.isOpen_LocalVar)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SUvh+Yy4WkiHvrrDylDm0A", callContext.id);
// Execute Action: BottomSheetClose
bottomSheetCloseVar.value = OutSystemsUI_2_23Controller.default.bottomSheetClose$Action(model.variables.bottomSheetIdVar, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9wZIvu4m80mvmI6_dS7cyQ", callContext.id);
// Execute Action: PreventNavigation
NavigationHandlerController.default.preventNavigation$Action(vars.value.backNavigationEventInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pMGVx6m5aE2KW5LOabu7yQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GcACj04r10yeDo+tgp7qwg", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:svjAacFFA0amBmC_waTiXA", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.Handler_BackNavigation$vars", [{
name: "BackNavigationEvent",
attrName: "backNavigationEventInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._onChange_ListOption$Action = function (in_SelectedIdsIn, in_TitleIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnChange_ListOption");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.OnChange_ListOption$vars"))());
vars.value.in_SelectedIdsInLocal = in_SelectedIdsIn.clone();
vars.value.in_TitleInLocal = in_TitleIn;
var app_CommonFilter_DefineOptionNamesVar = new OS.DataTypes.VariableHolder();
var listIndexOfVar = new OS.DataTypes.VariableHolder();
var listIndexOfLocalitiesVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.app_CommonFilter_DefineOptionNamesVar = app_CommonFilter_DefineOptionNamesVar;
varBag.listIndexOfVar = listIndexOfVar;
varBag.listIndexOfLocalitiesVar = listIndexOfLocalitiesVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:eYWXh321mEOyArr63nvyDg:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.UdG21F4c3E6cr1pBKYbIfQ/ClientActions.eYWXh321mEOyArr63nvyDg:dhIw_NAjWbsnGQAuwmOY_Q", "UBTConnect", "OnChange_ListOption", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WanZyMSE9UW+96mjORF+XA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AKceVDf3V0W2UwOjPKP9rw", callContext.id);
// Execute Action: ListIndexOf
listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.optionControlVar.optionList_ControlAttr, function (p) {
return (p.titleAttr === vars.value.in_TitleInLocal);
}, callContext);

if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:07GD+pOgQkqs2FU7QuYz+w", callContext.id) && (listIndexOfVar.value.positionOut >= 0))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:h4ffjilMLEKYBp7AipnBow", callContext.id);
// OptionControl.OptionList_Control[ListIndexOf.Position].SelectedIds = In_SelectedIds
model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfVar.value.positionOut).selectedIdsAttr = vars.value.in_SelectedIdsInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DbhlSPeG7UihrBSPCowkww", callContext.id);
// Execute Action: App_CommonFilter_DefineOptionNames
app_CommonFilter_DefineOptionNamesVar.value = UBTConnectController.default.app_CommonFilter_DefineOptionNames$Action(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfVar.value.positionOut), callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:RbHlK7ukbEOLQPL39o8aYg", callContext.id);
// OptionControl.OptionList_Control[ListIndexOf.Position] = App_CommonFilter_DefineOptionNames.Formatted
model.variables.optionControlVar.optionList_ControlAttr.setItem(listIndexOfVar.value.positionOut,app_CommonFilter_DefineOptionNamesVar.value.formattedOut);
}

if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lPqDOneBH0it5gnCaeKkFg", callContext.id) && (vars.value.in_TitleInLocal === model.variables.subState_CountriesVar))) {
// IsAllCountries
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xASwBLJshE6ROzkg2N4Kkw", callContext.id) && (vars.value.in_SelectedIdsInLocal.getCurrent(callContext.iterationContext) === UBTConnectModel.staticEntities.choice.none))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QixJVdwy90KpvexqhYuZSA", callContext.id);
// Execute Action: ListIndexOfLocalities
listIndexOfLocalitiesVar.value = OS.SystemActions.listIndexOf(model.variables.optionControlVar.optionList_ControlAttr, function (p) {
return (p.titleAttr === model.variables.subState_LocalitiesVar);
}, callContext);

if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lrH6Ya0EnUOXUTH8joD1qA", callContext.id) && ((listIndexOfLocalitiesVar.value.positionOut) !== (-1)))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6N9XP3kuXUaHFS97dk6gtw", callContext.id);
// Execute Action: ListClear
OS.SystemActions.listClear(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfLocalitiesVar.value.positionOut).selectedIdsAttr, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9V4qzTB3cE658ZXEW3NQYQ", callContext.id);
// Execute Action: ListClear2
OS.SystemActions.listClear(model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfLocalitiesVar.value.positionOut).selectedNamesAttr, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LkeLvXilYkOyFT1A3TVsmQ", callContext.id);
// OptionControl.OptionList_Control[ListIndexOfLocalities.Position].SelectedIds = In_SelectedIds
model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfLocalitiesVar.value.positionOut).selectedIdsAttr = vars.value.in_SelectedIdsInLocal;
}

}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:yh7DMhj97ESmnojHLZjxtQ", callContext.id);
// Execute Action: Action_FilterLocalitiesByCountry
controller._action_FilterLocalitiesByCountry$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oqzgikZUX0u4wfZgWpMJOg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oqzgikZUX0u4wfZgWpMJOg", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:eYWXh321mEOyArr63nvyDg", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.OnChange_ListOption$vars", [{
name: "In_SelectedIds",
attrName: "in_SelectedIdsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OS.DataTypes.TextList();
},
complexType: OS.DataTypes.TextList
}, {
name: "In_Title",
attrName: "in_TitleInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._screenEvent_OnParametersChanged$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ScreenEvent_OnParametersChanged");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:h6b5kTSGS0aqUPoafZYJlA:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.UdG21F4c3E6cr1pBKYbIfQ/ClientActions.h6b5kTSGS0aqUPoafZYJlA:BbxefezWMZvlVI0crKCgJg", "UBTConnect", "ScreenEvent_OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gHJPgtNU60WqpFUcgrakXQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Y5we0y79Hk+BY0kEWgMkxQ", callContext.id);
// Execute Action: Action_Define_OptionControl
controller._action_Define_OptionControl$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eKSnxSmUJkqsLNHZEh23VQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:h6b5kTSGS0aqUPoafZYJlA", callContext.id);
}

};
Controller.prototype._action_Define_Localities$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_Define_Localities");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.Action_Define_Localities$vars"))());
var app_CommonFilter_DefineOptionNamesVar = new OS.DataTypes.VariableHolder();
var positionVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.app_CommonFilter_DefineOptionNamesVar = app_CommonFilter_DefineOptionNamesVar;
varBag.positionVar = positionVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:RTjdl90uLEOQyghFzIkVgA:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.UdG21F4c3E6cr1pBKYbIfQ/ClientActions.RTjdl90uLEOQyghFzIkVgA:k91Z67EWPlBYee7lK4fVJg", "UBTConnect", "Action_Define_Localities", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eV3_iUcUNUOeaAZfZ9hVQQ", callContext.id);
// HasData
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:e7tWRYJ2NEWNDjGG5oFRlA", callContext.id) && ((model.variables.localCacheControl_AllLocalitiesVar.isFetchedAttr && model.variables.localCacheControl_UserInfoVar.isFetchedAttr) && ((model.variables.localCacheControl_UserInfoVar.directory_UserCurrentAttr.directory_UserCurrent_SubscriptionAttr.subscriptionTypeAttr) !== (UBTConnectModel.staticEntities.connect_Subscription_Plan.free))))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gO8YuRV3PkiOaawDVgaFug", callContext.id);
// LocalFilter_SelectionControls.Title = SubState_Localities
vars.value.localFilter_SelectionControlsVar.titleAttr = model.variables.subState_LocalitiesVar;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gO8YuRV3PkiOaawDVgaFug", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// LocalFilter_SelectionControls.In_Options = LocalCacheControl_AllLocalities.CacheControl_AllLocalities.LocalityList
vars.value.localFilter_SelectionControlsVar.in_OptionsAttr = OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.localCacheControl_AllLocalitiesVar.cacheControl_AllLocalitiesAttr.localityListAttr, new UBTConnectModel.SelectionOption_ItemList(), function (source, target) {
target.idAttr = source.localityIdAttr;
target.displayTextAttr = source.nameAttr;
target.countryCodeAttr = source.countryCodeAttr;
return target;
});
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gO8YuRV3PkiOaawDVgaFug", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// LocalFilter_SelectionControls.Order = In_Filter_Common_Options_Choice.HasSorting.Order
vars.value.localFilter_SelectionControlsVar.orderAttr = model.variables.in_Filter_Common_Options_ChoiceIn.hasSortingAttr.orderAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gO8YuRV3PkiOaawDVgaFug", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// LocalFilter_SelectionControls.AddAllOptions = In_Filter_Common_Options_Choice.HasLocalities.AddAllOptions
vars.value.localFilter_SelectionControlsVar.addAllOptionsAttr = model.variables.in_Filter_Common_Options_ChoiceIn.hasLocalitiesAttr.addAllOptionsAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gO8YuRV3PkiOaawDVgaFug", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// LocalFilter_SelectionControls.SheetTitle = "Locality"
vars.value.localFilter_SelectionControlsVar.sheetTitleAttr = "Locality";
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Eat3iAG1kU+H6b9dBFxNiw", callContext.id) && model.variables.in_StartFilterIn.localitiesIdsAttr.isEmpty)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UrgY3IsYBUi18vJ_2pD5Dg", callContext.id);
// Execute Action: AppenAllOption
OS.SystemActions.listAppend(vars.value.localFilter_SelectionControlsVar.selectedIdsAttr, UBTConnectModel.staticEntities.choice.none, callContext);
} else {
// Foreach In_StartFilter.LocalitiesIds
callContext.iterationContext.registerIterationStart(model.variables.in_StartFilterIn.localitiesIdsAttr);
try {var localitiesIdsIterator = callContext.iterationContext.getIterator(model.variables.in_StartFilterIn.localitiesIdsAttr);
var localitiesIdsIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dw4oi5QiCE+E7dKi27uNdQ", callContext.id) && (localitiesIdsIndex < model.variables.in_StartFilterIn.localitiesIdsAttr.length))) {
localitiesIdsIterator.currentRowNumber = localitiesIdsIndex;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+TKoNeke7UKjbig1r+ovLA", callContext.id);
// Execute Action: ListAppend3
OS.SystemActions.listAppend(vars.value.localFilter_SelectionControlsVar.selectedIdsAttr, model.variables.in_StartFilterIn.countryIdsAttr.getCurrent(callContext.iterationContext), callContext);
localitiesIdsIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.in_StartFilterIn.localitiesIdsAttr);
}

}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uAnORGZ9CE6yC7jf3ZJPzg", callContext.id);
// Execute Action: App_CommonFilter_DefineOptionNames
app_CommonFilter_DefineOptionNamesVar.value = UBTConnectController.default.app_CommonFilter_DefineOptionNames$Action(vars.value.localFilter_SelectionControlsVar, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rZWOaSRS20acQre6Pre5HA", callContext.id);
// LocalFilter_SelectionControls = App_CommonFilter_DefineOptionNames.Formatted
vars.value.localFilter_SelectionControlsVar = app_CommonFilter_DefineOptionNamesVar.value.formattedOut;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uWSt_xvUw0qrtYlEuhWKMg", callContext.id);
// Execute Action: Position
positionVar.value = OS.SystemActions.listIndexOf(model.variables.optionControlVar.optionList_ControlAttr, function (p) {
return (p.titleAttr === model.variables.subState_LocalitiesVar);
}, callContext);

// AlreadyHasElement
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bDZstVATP0W4d7l48i7tLA", callContext.id) && (positionVar.value.positionOut >= 0))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZB7cetwgCES_vmikwviP1Q", callContext.id);
// OptionControl.OptionList_Control[Position.Position] = LocalFilter_SelectionControls
model.variables.optionControlVar.optionList_ControlAttr.setItem(positionVar.value.positionOut,vars.value.localFilter_SelectionControlsVar);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6ml2esoCcUC2esUGE7tcTA", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(model.variables.optionControlVar.optionList_ControlAttr, vars.value.localFilter_SelectionControlsVar, callContext);
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:t7PVvFmb20WQv+aCMippSg", callContext.id);
// Execute Action: Action_FilterLocalitiesByCountry
controller._action_FilterLocalitiesByCountry$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LV6gXz0tWEKDuMmFV7K8rA", callContext.id);
// Execute Action: Action_Define_OptionControlVars
controller._action_Define_OptionControl_Last$Action(false, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VuH6RFUB90+dFb5cYpVHgQ", callContext.id);
// Execute Action: Action_DefineOptionControl_Empty
controller._action_DefineOptionControl_Empty$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oJQdZ_57Fke_vKMTCOveUQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:YjsEghhttUWHuLWp_PDyuQ", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:RTjdl90uLEOQyghFzIkVgA", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.Action_Define_Localities$vars", [{
name: "LocalFilter_SelectionControls",
attrName: "localFilter_SelectionControlsVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectModel.Filter_Common_Control_ListRec();
},
complexType: UBTConnectModel.Filter_Common_Control_ListRec
}]);
Controller.prototype._action_SetSubState$Action = function (in_SubStateIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_SetSubState");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.Action_SetSubState$vars"))());
vars.value.in_SubStateInLocal = in_SubStateIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:qR2VmXCgOk+NxDp8ENMgSA:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.UdG21F4c3E6cr1pBKYbIfQ/ClientActions.qR2VmXCgOk+NxDp8ENMgSA:2e6gOLdaTqtCrSXFESEswA", "UBTConnect", "Action_SetSubState", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:K1B3aOQPl0madAJXgq1Aag", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jdHh1PdMYkGpS6TmkIHXwQ", callContext.id) && ((vars.value.in_SubStateInLocal === model.variables.subState_MainVar) && model.variables.isSingleFilterVar))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:M2gur_0grkSKXNsjYIrRUw", callContext.id);
// Execute Action: Action_SetSingleFilter
controller._action_SetSingleFilter$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LlDqC3BbKkyLsCAMyipkPg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wNGf_hL7M06C2_zw8pT02Q", callContext.id);
// SubState_Selected = In_SubState
model.variables.subState_SelectedVar = vars.value.in_SubStateInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:A_Wka6yBQkGGAUugNBQYrg", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:qR2VmXCgOk+NxDp8ENMgSA", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.Action_SetSubState$vars", [{
name: "In_SubState",
attrName: "in_SubStateInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onClick_Clear$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_Clear");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:9gLundYSmkiOclD+n_B2ow:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.UdG21F4c3E6cr1pBKYbIfQ/ClientActions.9gLundYSmkiOclD+n_B2ow:7MWsmzMTXRHa+oGsYfRwuQ", "UBTConnect", "OnClick_Clear", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:EoJKOI6ZPE+7n9EviaLCyQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:c2lCFRxWRUKvMSwCnDd1zA", callContext.id);
// OptionControl = Empty_OptionControl
model.variables.optionControlVar = model.variables.empty_OptionControlVar;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kYVHy19pXkGv8iiekuxrvA", callContext.id);
// Execute Action: ListClear
OS.SystemActions.listClear(model.variables.optionList_SelectedVar.selectedIdsAttr, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NdWijUQYC0K+qsX2OeYjag", callContext.id);
// Execute Action: ListClear2
OS.SystemActions.listClear(model.variables.optionList_SelectedVar.selectedNamesAttr, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VW5QV0EKN0CLOcuSfj6P_Q", callContext.id);
// Execute Action: OnClick_Apply
return controller._onClick_Apply$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sCJsuhfCLECZ741ComMdaw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:9gLundYSmkiOclD+n_B2ow", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:9gLundYSmkiOclD+n_B2ow", callContext.id);
throw ex;

});
};
Controller.prototype._bottomSheetOnClose$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("BottomSheetOnClose");
callContext = controller.callContext(callContext);
var bottomSheetCloseVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.bottomSheetCloseVar = bottomSheetCloseVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:6xREntKAuUm8b4XjwqaPUA:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.UdG21F4c3E6cr1pBKYbIfQ/ClientActions.6xREntKAuUm8b4XjwqaPUA:21oWPVcSr_30VlqOSnGeig", "UBTConnect", "BottomSheetOnClose", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:E7iawab1xUGU33_SNxFrtQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5EeEhOTKV0a9A9IKZt0K7Q", callContext.id);
// OptionControl = LastSearched_OptionControl
model.variables.optionControlVar = model.variables.lastSearched_OptionControlVar;
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5veTanHCdECwX0PLNXY9aw", callContext.id) && model.variables.isSingleFilterVar)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:V5zcL6lQn02nd+FSM47XQQ", callContext.id);
// ForceUpdateOptionList = notForceUpdateOptionList
model.variables.forceUpdateOptionListVar = !(model.variables.forceUpdateOptionListVar);
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LqsEjOEz4E+LZkS75yK1vQ", callContext.id);
// Execute Action: BottomSheetClose
bottomSheetCloseVar.value = OutSystemsUI_2_23Controller.default.bottomSheetClose$Action(model.variables.bottomSheetIdVar, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2uQCKc8hcE2QQvVoJel7Ww", callContext.id);
// Execute Action: Action_SetSubState
controller._action_SetSubState$Action(model.variables.subState_MainVar, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:g+34SL06hEKP5LhmQICWkg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:6xREntKAuUm8b4XjwqaPUA", callContext.id);
}

};
Controller.prototype._action_CloseSheet$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_CloseSheet");
callContext = controller.callContext(callContext);
var bottomSheetCloseVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.bottomSheetCloseVar = bottomSheetCloseVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:cnpIntB1h0CY3kpUNDlvIA:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.UdG21F4c3E6cr1pBKYbIfQ/ClientActions.cnpIntB1h0CY3kpUNDlvIA:MtTCBRsE57o06LVmzSJfpA", "UBTConnect", "Action_CloseSheet", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PhaYLcW5R06qVBsTDnyPcA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FrETnO4SWESchmo9p01T1A", callContext.id);
// Execute Action: BottomSheetClose
bottomSheetCloseVar.value = OutSystemsUI_2_23Controller.default.bottomSheetClose$Action(model.variables.bottomSheetIdVar, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3aUzc46VBUS9p39rGuuXdQ", callContext.id);
// Execute Action: Action_SetSubState
controller._action_SetSubState$Action(model.variables.subState_MainVar, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0xiu6LfAA0ObqMv4OuqBGQ", callContext.id);
// Execute Action: Action_ClearSearchString
controller._action_ClearSearchString$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8nCl3x9u4Ua+ebLGWWi8BQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:cnpIntB1h0CY3kpUNDlvIA", callContext.id);
}

};
Controller.prototype._action_Define_OptionControl$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_Define_OptionControl");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:uY0KoTN+g0CGjJRkwQP3vw:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.UdG21F4c3E6cr1pBKYbIfQ/ClientActions.uY0KoTN+g0CGjJRkwQP3vw:kyae+hWQ1ZRU_jL0slFUWw", "UBTConnect", "Action_Define_OptionControl", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Nk1TLdHKRUCdUiC4B6LY6w", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ttLA5odneUajnbR4NcFGfA", callContext.id);
// OptionControl.OptionList_Control = In_Filter_Common_Options_Choice.Extra_OptionLists
model.variables.optionControlVar.optionList_ControlAttr = model.variables.in_Filter_Common_Options_ChoiceIn.extra_OptionListsAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ttLA5odneUajnbR4NcFGfA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// OptionControl.OptionChoice_Control = In_Filter_Common_Options_Choice.Extra_OptionChoices
model.variables.optionControlVar.optionChoice_ControlAttr = model.variables.in_Filter_Common_Options_ChoiceIn.extra_OptionChoicesAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ttLA5odneUajnbR4NcFGfA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// OptionControl.OptionFlatList_Control = In_Filter_Common_Options_Choice.Extra_OptionFlatLists
model.variables.optionControlVar.optionFlatList_ControlAttr = model.variables.in_Filter_Common_Options_ChoiceIn.extra_OptionFlatListsAttr;
// Countries
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SsnQ36L+fkiMQvdnq52apg", callContext.id) && model.variables.in_Filter_Common_Options_ChoiceIn.hasCountriesAttr.enableAttr)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ea6pCxsCfUim4ZH092r4gw", callContext.id);
// Execute Action: Action_Define_Countries
controller._action_Define_Countries$Action(callContext);
}

// Localities
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uG8eVsXmokqvWEzfYjl6Mg", callContext.id) && model.variables.in_Filter_Common_Options_ChoiceIn.hasLocalitiesAttr.enableAttr)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rjMpmQVBeUGcvE1R6JTrEw", callContext.id);
// Execute Action: Action_Define_Localities
controller._action_Define_Localities$Action(callContext);
}

if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:h4NLQx2LSEKB_9SVV2Ui_A", callContext.id) && model.variables.in_Filter_Common_Options_ChoiceIn.hasSortingAttr.enableAttr)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jKb+L1CSSUOFQ5Uz4zaWgg", callContext.id);
// Execute Action: Action_DefineSortBy
controller._action_DefineSortBy$Action(callContext);
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jUoZiILm90yOWDv0hzLaaQ", callContext.id);
// Execute Action: ListSort
OS.SystemActions.listSort(model.variables.optionControlVar.optionChoice_ControlAttr, function (p) {
return p.orderAttr;
}, true, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sedXWiPks0aGLrbTpICHDQ", callContext.id);
// Execute Action: ListSort2
OS.SystemActions.listSort(model.variables.optionControlVar.optionList_ControlAttr, function (p) {
return p.orderAttr;
}, true, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SxcB_6_S60qLUGpCgy40fQ", callContext.id);
// Execute Action: ListSort3
OS.SystemActions.listSort(model.variables.optionControlVar.optionFlatList_ControlAttr, function (p) {
return p.orderAttr;
}, true, callContext);
// Has Year Flat List Options
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QYmZZ7DjE0OH6bdeVh0a3Q", callContext.id) && !(model.variables.in_Filter_Common_Options_ChoiceIn.extra_OptionFlatListsAttr.getCurrent(callContext.iterationContext).in_OptionsAttr.isEmpty))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:afzMPrmXhEyG1JZvkus5SQ", callContext.id);
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:p8+rjGcDe0umwx1ZVT5daw", callContext.id);
// Execute Action: Action_Define_OptionControlVars
controller._action_Define_OptionControl_Last$Action(false, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cdLurAZ1W02+iZik+HZk5A", callContext.id);
// Execute Action: Action_DefineOptionControl_Empty
controller._action_DefineOptionControl_Empty$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xPVeASw1DkyEY9o_gflLKw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:uY0KoTN+g0CGjJRkwQP3vw", callContext.id);
}

};
Controller.prototype._onClick_Apply$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_Apply");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:HABqpDio+Umix2hOqu63Ew:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.UdG21F4c3E6cr1pBKYbIfQ/ClientActions.HABqpDio+Umix2hOqu63Ew:1ZE9XDnE0FTjGX2lEG9uoQ", "UBTConnect", "OnClick_Apply", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ez6Xt4Phh0iADsZvQjcyzQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3gYywB8l3kKjsMYzq+BZpg", callContext.id);
// Execute Action: Action_Define_OptionControl_Last
controller._action_Define_OptionControl_Last$Action(true, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VzgIBtuBg0GnVPungz1VfQ", callContext.id);
// Execute Action: Action_CloseSheet
controller._action_CloseSheet$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WtMZZYpZ90iRFzZhX3Pg6g", callContext.id);
// Trigger Event: ApplySort
return controller.applySort$Action(model.variables.sortBy_TitleVar, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Bk+1fn4VZkukLEQnUVGtzA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:HABqpDio+Umix2hOqu63Ew", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:HABqpDio+Umix2hOqu63Ew", callContext.id);
throw ex;

});
};
Controller.prototype._deleteAllNotificationClicked$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("DeleteAllNotificationClicked");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:wCyVpipH1kupg01HL1nM0w:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.UdG21F4c3E6cr1pBKYbIfQ/ClientActions.wCyVpipH1kupg01HL1nM0w:5peIhB4XbMw2HUx9g+Dskw", "UBTConnect", "DeleteAllNotificationClicked", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vVo4I0MzvEurEwOHK0XuuQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:F2ubVVGlu0yqRMxJYwYO5g", callContext.id);
// Trigger Event: DeleteAllNotification
return controller.deleteAllNotification$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UHlCBqk1QUGluMqX9SJB8w", callContext.id);
// Execute Action: Toggle_DeleteAllPopup
controller._toggle_DeleteAllPopup$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MReFXBdWY0mXh8dyNszAJQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:wCyVpipH1kupg01HL1nM0w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:wCyVpipH1kupg01HL1nM0w", callContext.id);
throw ex;

});
};
Controller.prototype._onClick_SelectionOption$Action = function (in_TitleIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_SelectionOption");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.OnClick_SelectionOption$vars"))());
vars.value.in_TitleInLocal = in_TitleIn;
var listIndexOfVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.listIndexOfVar = listIndexOfVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:hQ5bqmbJRkuHkOtRsTPVxw:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.UdG21F4c3E6cr1pBKYbIfQ/ClientActions.hQ5bqmbJRkuHkOtRsTPVxw:Ygk7k0kPq4kOoMSzIDLhXw", "UBTConnect", "OnClick_SelectionOption", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TUm_YDHOqUCdJLlVwkOMnw", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kb7TfNiS2EaSL5yY_vr9OA", callContext.id);
// Execute Action: ListIndexOf
listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.optionControlVar.optionList_ControlAttr, function (p) {
return (p.titleAttr === vars.value.in_TitleInLocal);
}, callContext);

if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:d9lvg26bOUy_ARRfqbq8iw", callContext.id) && (listIndexOfVar.value.positionOut >= 0))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_fSqZzGgjUSO8IqphjZNZA", callContext.id);
// Execute Action: Action_SetSubState
controller._action_SetSubState$Action(model.variables.optionControlVar.optionList_ControlAttr.getCurrent(callContext.iterationContext).titleAttr, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:W0VFARyWH020nETv2sRu8w", callContext.id);
// OptionList_Selected = OptionControl.OptionList_Control[ListIndexOf.Position]
model.variables.optionList_SelectedVar = model.variables.optionControlVar.optionList_ControlAttr.getItem(listIndexOfVar.value.positionOut);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IeLico6dCkucdIb5tpS9wQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:n+831ZvAw0aCyvfcNzGlPg", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:hQ5bqmbJRkuHkOtRsTPVxw", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.OnClick_SelectionOption$vars", [{
name: "In_Title",
attrName: "in_TitleInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._action_Define_Countries$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_Define_Countries");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.Action_Define_Countries$vars"))());
var app_CommonFilter_CheckCountryVar = new OS.DataTypes.VariableHolder();
var app_CommonFilter_DefineOptionNamesVar = new OS.DataTypes.VariableHolder();
var positionVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.app_CommonFilter_CheckCountryVar = app_CommonFilter_CheckCountryVar;
varBag.app_CommonFilter_DefineOptionNamesVar = app_CommonFilter_DefineOptionNamesVar;
varBag.positionVar = positionVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:9tzDuQKb+kuhnMWuj9uEVg:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.UdG21F4c3E6cr1pBKYbIfQ/ClientActions.9tzDuQKb+kuhnMWuj9uEVg:n2OMydKi4XvXs806x+PIyA", "UBTConnect", "Action_Define_Countries", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CjL3x2LvgUeeO4_ByauIHg", callContext.id);
// HasData
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:E9M6UcsimEiDlyLY4AT8Vw", callContext.id) && ((model.variables.localCacheControl_AllCountriesVar.isFetchedAttr && model.variables.localCacheControl_UserInfoVar.isFetchedAttr) && ((model.variables.localCacheControl_UserInfoVar.directory_UserCurrentAttr.directory_UserCurrent_SubscriptionAttr.subscriptionTypeAttr) !== (UBTConnectModel.staticEntities.connect_Subscription_Plan.free))))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cVIl6_DzEUWNKFgsFS3TFQ", callContext.id);
// LocalFilter_SelectionControls.Title = SubState_Countries
vars.value.localFilter_SelectionControlsVar.titleAttr = model.variables.subState_CountriesVar;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cVIl6_DzEUWNKFgsFS3TFQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// LocalFilter_SelectionControls.In_Options = LocalCacheControl_AllCountries.CacheControl_AllCountries.CountryList
vars.value.localFilter_SelectionControlsVar.in_OptionsAttr = OS.DataConversion.JSConversions.typeConvertRecordList(model.variables.localCacheControl_AllCountriesVar.cacheControl_AllCountriesAttr.countryListAttr, new UBTConnectModel.SelectionOption_ItemList(), function (source, target) {
target.idAttr = source.countryCodeAttr;
target.displayTextAttr = source.countryNameAttr;
target.countryCodeAttr = source.countryCodeAttr;
return target;
});
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cVIl6_DzEUWNKFgsFS3TFQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// LocalFilter_SelectionControls.Order = In_Filter_Common_Options_Choice.HasCountries.Order
vars.value.localFilter_SelectionControlsVar.orderAttr = model.variables.in_Filter_Common_Options_ChoiceIn.hasCountriesAttr.orderAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cVIl6_DzEUWNKFgsFS3TFQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// LocalFilter_SelectionControls.AddAllOptions = In_Filter_Common_Options_Choice.HasCountries.AddAllOptions
vars.value.localFilter_SelectionControlsVar.addAllOptionsAttr = model.variables.in_Filter_Common_Options_ChoiceIn.hasCountriesAttr.addAllOptionsAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cVIl6_DzEUWNKFgsFS3TFQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// LocalFilter_SelectionControls.SheetTitle = "Country"
vars.value.localFilter_SelectionControlsVar.sheetTitleAttr = "Country";
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:utwZO4RMIkaMNvHTH7sc9A", callContext.id) && model.variables.in_StartFilterIn.countryIdsAttr.isEmpty)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ih1amAdzhEONBQWBdmQyug", callContext.id);
// Execute Action: AppenAllOption
OS.SystemActions.listAppend(vars.value.localFilter_SelectionControlsVar.selectedIdsAttr, UBTConnectModel.staticEntities.choice.none, callContext);
} else {
// Foreach In_StartFilter.CountryIds
callContext.iterationContext.registerIterationStart(model.variables.in_StartFilterIn.countryIdsAttr);
try {var countryIdsIterator = callContext.iterationContext.getIterator(model.variables.in_StartFilterIn.countryIdsAttr);
var countryIdsIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IrW0qLJHtkyCDdhRv+LtTQ", callContext.id) && (countryIdsIndex < model.variables.in_StartFilterIn.countryIdsAttr.length))) {
countryIdsIterator.currentRowNumber = countryIdsIndex;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kNGqqHTt+U6E9udkQ7PVMQ", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(vars.value.localFilter_SelectionControlsVar.selectedIdsAttr, model.variables.in_StartFilterIn.countryIdsAttr.getItem(countryIdsIndex.valueOf()), callContext);
countryIdsIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.in_StartFilterIn.countryIdsAttr);
}

}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:W8t164McN02ClJ_aVFjgFA", callContext.id);
// Execute Action: App_CommonFilter_DefineOptionNames
app_CommonFilter_DefineOptionNamesVar.value = UBTConnectController.default.app_CommonFilter_DefineOptionNames$Action(vars.value.localFilter_SelectionControlsVar, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sTUIXblozUGmrfuNOZD3Rg", callContext.id);
// LocalFilter_SelectionControls = App_CommonFilter_DefineOptionNames.Formatted
vars.value.localFilter_SelectionControlsVar = app_CommonFilter_DefineOptionNamesVar.value.formattedOut;
// Not Global?
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IQMxWKgCjEuUTNU0pUFqrQ", callContext.id) && ((model.variables.localCacheControl_UserInfoVar.directory_UserCurrentAttr.directory_UserCurrent_SubscriptionAttr.subscriptionTypeAttr) !== (UBTConnectModel.staticEntities.connect_Subscription_Plan.global)))) {
// Foreach LocalFilter_SelectionControls.In_Options
callContext.iterationContext.registerIterationStart(vars.value.localFilter_SelectionControlsVar.in_OptionsAttr);
try {var in_OptionsIterator = callContext.iterationContext.getIterator(vars.value.localFilter_SelectionControlsVar.in_OptionsAttr);
var in_OptionsIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LQKjov2QVUmkY5viC+blGw", callContext.id) && (in_OptionsIndex < vars.value.localFilter_SelectionControlsVar.in_OptionsAttr.length))) {
in_OptionsIterator.currentRowNumber = in_OptionsIndex;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_ZI8Afaa0UOaYge7V1NRSg", callContext.id);
// Execute Action: App_CommonFilter_CheckCountry
app_CommonFilter_CheckCountryVar.value = UBTConnectController.default.app_CommonFilter_CheckCountry$Action(vars.value.localFilter_SelectionControlsVar.in_OptionsAttr.getItem(in_OptionsIndex.valueOf()).idAttr, model.variables.localCacheControl_UserInfoVar.directory_UserCurrentAttr.directory_UserCurrent_SubscriptionAttr.subscribedCountriesAttr, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5OvbjW2w1kaLqHfWe_N_WA", callContext.id);
// LocalFilter_SelectionControls.In_Options.Current.isEnabled = App_CommonFilter_CheckCountry.IsEnabled
vars.value.localFilter_SelectionControlsVar.in_OptionsAttr.getItem(in_OptionsIndex.valueOf()).isEnabledAttr = app_CommonFilter_CheckCountryVar.value.isEnabledOut;
in_OptionsIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(vars.value.localFilter_SelectionControlsVar.in_OptionsAttr);
}

}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:scKU_GjsS02WT0o4A8NmAA", callContext.id);
// Execute Action: Position
positionVar.value = OS.SystemActions.listIndexOf(model.variables.optionControlVar.optionList_ControlAttr, function (p) {
return (p.titleAttr === model.variables.subState_CountriesVar);
}, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:J2seCOfXSUO6JChcB8mNVw", callContext.id);
// Execute Action: ListSort
OS.SystemActions.listSort(vars.value.localFilter_SelectionControlsVar.in_OptionsAttr, function (p) {
return p.displayTextAttr;
}, true, callContext);
// AlreadyHasElement
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:d126XiRsMUuw5CZ+jv1R9A", callContext.id) && (positionVar.value.positionOut >= 0))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:C0h7qxZbCk2tu+PhbcKSgw", callContext.id);
// OptionControl.OptionList_Control[Position.Position] = LocalFilter_SelectionControls
model.variables.optionControlVar.optionList_ControlAttr.setItem(positionVar.value.positionOut,vars.value.localFilter_SelectionControlsVar);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6530PXxeyUydcm3b98r7XQ", callContext.id);
// Execute Action: ListAppend3
OS.SystemActions.listAppend(model.variables.optionControlVar.optionList_ControlAttr, vars.value.localFilter_SelectionControlsVar, callContext);
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xjskATghlEKPB1W+JM_qWw", callContext.id);
// Execute Action: Action_FilterLocalitiesByCountry
controller._action_FilterLocalitiesByCountry$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Jf4pZDE_7kmMvDy78NmPYQ", callContext.id);
// Execute Action: Action_Define_OptionControl_Last
controller._action_Define_OptionControl_Last$Action(false, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+eJQrT3M8EyukW55i1OWyw", callContext.id);
// Execute Action: Action_DefineOptionControl_Empty
controller._action_DefineOptionControl_Empty$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JlDMzr0DVk+egW_uF4cFrw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:luCD0DsaRkqRW71bqhvwag", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:9tzDuQKb+kuhnMWuj9uEVg", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.Action_Define_Countries$vars", [{
name: "LocalFilter_SelectionControls",
attrName: "localFilter_SelectionControlsVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBTConnectModel.Filter_Common_Control_ListRec();
},
complexType: UBTConnectModel.Filter_Common_Control_ListRec
}]);
Controller.prototype._markAllAsReadClicked$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("MarkAllAsReadClicked");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:xQVywcugWUO4uhhjFAZ31A:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.UdG21F4c3E6cr1pBKYbIfQ/ClientActions.xQVywcugWUO4uhhjFAZ31A:FW352JMoKAw+YAsDlSW3aQ", "UBTConnect", "MarkAllAsReadClicked", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9J70fCGl+U6bWdq+q4HsVQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Pm7fnn7P_EyfuJqZ4KDy_w", callContext.id);
// Trigger Event: MarkAllAsRead
return controller.markAllAsRead$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ktIUo07iak+26c94y1mpIQ", callContext.id);
// Execute Action: BottomSheetOnClose
controller._bottomSheetOnClose$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:y++JG2Es_UWJiUEQQK+_Eg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:xQVywcugWUO4uhhjFAZ31A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:xQVywcugWUO4uhhjFAZ31A", callContext.id);
throw ex;

});
};
Controller.prototype._onClick_SelectionBack$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_SelectionBack");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:BXq7yT2M3kyh5+pNbStR_g:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.UdG21F4c3E6cr1pBKYbIfQ/ClientActions.BXq7yT2M3kyh5+pNbStR_g:NnHoKMfada0zKE_Gpehi3A", "UBTConnect", "OnClick_SelectionBack", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Y6SOE1hSWE6J0N88Pcy1Rw", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZS7EssQoT0W1zSEMmwxqSA", callContext.id) && model.variables.isSingleFilterVar)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wEkFLQeoaU+HBsYoH29Jug", callContext.id);
// Execute Action: Action_CloseSheet
controller._action_CloseSheet$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ekFhrHpcB0ueFUkjyt74KA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0QjVY_j6UE6+VNMQDje6RA", callContext.id);
// Execute Action: Action_SetSubState
controller._action_SetSubState$Action(model.variables.subState_MainVar, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BMkqJqVBhkyz3Kkueo1Oww", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:BXq7yT2M3kyh5+pNbStR_g", callContext.id);
}

};
Controller.prototype._onChange_ChoiceOption$Action = function (in_TitleIn, choiceIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnChange_ChoiceOption");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.OnChange_ChoiceOption$vars"))());
vars.value.in_TitleInLocal = in_TitleIn;
vars.value.choiceIdInLocal = choiceIdIn;
var listIndexOfVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.listIndexOfVar = listIndexOfVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:of+00kWuSkOpFKCJAKLbkA:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.UdG21F4c3E6cr1pBKYbIfQ/ClientActions.of+00kWuSkOpFKCJAKLbkA:6yM+n4gzAxK8Fptt7Tr2Pw", "UBTConnect", "OnChange_ChoiceOption", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tWG72pW6wUSrBp7gKmcfGg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:EP4U042+nESaR0_1AnLCNA", callContext.id);
// Execute Action: ListIndexOf
listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.optionControlVar.optionChoice_ControlAttr, function (p) {
return (p.titleAttr === vars.value.in_TitleInLocal);
}, callContext);

if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dAQ6+oifNUyMTwNvjqKBGQ", callContext.id) && (listIndexOfVar.value.positionOut >= 0))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fzkXgtsL5EqwDuvsNJEj5w", callContext.id);
// OptionControl.OptionChoice_Control[ListIndexOf.Position].SelectedChoiceId = ChoiceId
model.variables.optionControlVar.optionChoice_ControlAttr.getItem(listIndexOfVar.value.positionOut).selectedChoiceIdAttr = vars.value.choiceIdInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:I3cez2OpmkubanGTtVcxFg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:I3cez2OpmkubanGTtVcxFg", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:of+00kWuSkOpFKCJAKLbkA", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.OnChange_ChoiceOption$vars", [{
name: "In_Title",
attrName: "in_TitleInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ChoiceId",
attrName: "choiceIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._action_ClearSearchString$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_ClearSearchString");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:z0gS25PJnESpJ4AYc2x9Wg:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.UdG21F4c3E6cr1pBKYbIfQ/ClientActions.z0gS25PJnESpJ4AYc2x9Wg:ryihgf6sDnqknscbh5W4zA", "UBTConnect", "Action_ClearSearchString", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LFKTN+bZwUy11sBuAVfutg", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BqWEhy7e5EusQaCvDz5NpQ", callContext.id) && ((model.variables.searchInputIdVar) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:t9yz1lAUGUCooYQsM_uSUg", callContext.id);
// Execute Action: Input_ClearString
UBTConnectLibraryController.default.input_ClearString$Action(model.variables.searchInputIdVar, false, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6ZR32gXD0E+OJl2nArzWhw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6ZR32gXD0E+OJl2nArzWhw", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:z0gS25PJnESpJ4AYc2x9Wg", callContext.id);
}

};
Controller.prototype._action_Define_OptionControl_Last$Action = function (isFromApplyIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_Define_OptionControl_Last");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.Action_Define_OptionControl_Last$vars"))());
vars.value.isFromApplyInLocal = isFromApplyIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:eWyn3q_7UEWsBFlakgbxqg:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.UdG21F4c3E6cr1pBKYbIfQ/ClientActions.eWyn3q_7UEWsBFlakgbxqg:+IiKbhpw04G78JW+pN2vAw", "UBTConnect", "Action_Define_OptionControl_Last", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:x2jDljKkKUCIsJCYdCjYYA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:C+h8uxnMJUSFAkzqk_3Z9w", callContext.id);
// LastSearched_OptionControl = OptionControl
model.variables.lastSearched_OptionControlVar = model.variables.optionControlVar;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7cQu9_pql0Cbyg28tz7jVg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:eWyn3q_7UEWsBFlakgbxqg", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.Action_Define_OptionControl_Last$vars", [{
name: "isFromApply",
attrName: "isFromApplyInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._action_SetSingleFilter$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_SetSingleFilter");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Jy984xO+_UWQLQSkOidScQ:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.UdG21F4c3E6cr1pBKYbIfQ/ClientActions.Jy984xO+_UWQLQSkOidScQ:t7Nq3FjenP_mTHEwuNSX8g", "UBTConnect", "Action_SetSingleFilter", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0jivSJ+pnk+sfYdgSmFe4Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KFGhFfzXPU6FtWq3FWifQQ", callContext.id);
// isSingleFilter = OptionControl.OptionChoice_Control.Length + OptionControl.OptionList_Control.Length = 1
model.variables.isSingleFilterVar = ((model.variables.optionControlVar.optionChoice_ControlAttr.length + model.variables.optionControlVar.optionList_ControlAttr.length) === 1);
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:r1yndy1DBEK8RQ_Lt3aVKg", callContext.id) && model.variables.isSingleFilterVar)) {
// OptionList?
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZMFvqpctKE6rp_efnkGJHQ", callContext.id) && model.variables.optionControlVar.optionList_ControlAttr.isEmpty)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LrdJWJ9ylkuqquD_rUknbw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:89PZyhJ02ECM731rHsu5_g", callContext.id);
// SubState_Selected = OptionControl.OptionList_Control.Current.Title
model.variables.subState_SelectedVar = model.variables.optionControlVar.optionList_ControlAttr.getCurrent(callContext.iterationContext).titleAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:89PZyhJ02ECM731rHsu5_g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// OptionList_Selected = OptionControl.OptionList_Control.Current
model.variables.optionList_SelectedVar = model.variables.optionControlVar.optionList_ControlAttr.getCurrent(callContext.iterationContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LrdJWJ9ylkuqquD_rUknbw", callContext.id);
}

} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jYKvVablkEeiddb+LFn7Bg", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Jy984xO+_UWQLQSkOidScQ", callContext.id);
}

};

Controller.prototype.bottomSheetOnToggle$Action = function (isOpenIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._bottomSheetOnToggle$Action, callContext, isOpenIn);

};
Controller.prototype.handler_Input_OnReady$Action = function (idIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_Input_OnReady$Action, callContext, idIn);

};
Controller.prototype.action_DefineOptionControl_Empty$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_DefineOptionControl_Empty$Action, callContext);

};
Controller.prototype.handler_ListOnSelectionChange$Action = function (selectedItemsIn, clickedItemIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_ListOnSelectionChange$Action, callContext, selectedItemsIn, clickedItemIdIn);

};
Controller.prototype.bottomSheetInitialized$Action = function (idIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._bottomSheetInitialized$Action, callContext, idIn);

};
Controller.prototype.action_DefineSortBy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_DefineSortBy$Action, callContext);

};
Controller.prototype.screenEvent_OnInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._screenEvent_OnInitialize$Action, callContext);

};
Controller.prototype.toggle_DeleteAllPopup$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._toggle_DeleteAllPopup$Action, callContext);

};
Controller.prototype.action_FilterLocalitiesByCountry$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_FilterLocalitiesByCountry$Action, callContext);

};
Controller.prototype.cacheControl_UserInfo_WrapperResult$Action = function (userInformationIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._cacheControl_UserInfo_WrapperResult$Action, callContext, userInformationIn);

};
Controller.prototype.handler_BackNavigation$Action = function (backNavigationEventIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_BackNavigation$Action, callContext, backNavigationEventIn);

};
Controller.prototype.onChange_ListOption$Action = function (in_SelectedIdsIn, in_TitleIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onChange_ListOption$Action, callContext, in_SelectedIdsIn, in_TitleIn);

};
Controller.prototype.screenEvent_OnParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._screenEvent_OnParametersChanged$Action, callContext);

};
Controller.prototype.action_Define_Localities$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_Define_Localities$Action, callContext);

};
Controller.prototype.action_SetSubState$Action = function (in_SubStateIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_SetSubState$Action, callContext, in_SubStateIn);

};
Controller.prototype.onClick_Clear$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_Clear$Action, callContext);

};
Controller.prototype.bottomSheetOnClose$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._bottomSheetOnClose$Action, callContext);

};
Controller.prototype.action_CloseSheet$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_CloseSheet$Action, callContext);

};
Controller.prototype.action_Define_OptionControl$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_Define_OptionControl$Action, callContext);

};
Controller.prototype.onClick_Apply$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_Apply$Action, callContext);

};
Controller.prototype.deleteAllNotificationClicked$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._deleteAllNotificationClicked$Action, callContext);

};
Controller.prototype.onClick_SelectionOption$Action = function (in_TitleIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_SelectionOption$Action, callContext, in_TitleIn);

};
Controller.prototype.action_Define_Countries$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_Define_Countries$Action, callContext);

};
Controller.prototype.markAllAsReadClicked$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._markAllAsReadClicked$Action, callContext);

};
Controller.prototype.onClick_SelectionBack$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_SelectionBack$Action, callContext);

};
Controller.prototype.onChange_ChoiceOption$Action = function (in_TitleIn, choiceIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onChange_ChoiceOption$Action, callContext, in_TitleIn, choiceIdIn);

};
Controller.prototype.action_ClearSearchString$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_ClearSearchString$Action, callContext);

};
Controller.prototype.action_Define_OptionControl_Last$Action = function (isFromApplyIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_Define_OptionControl_Last$Action, callContext, isFromApplyIn);

};
Controller.prototype.action_SetSingleFilter$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_SetSingleFilter$Action, callContext);

};
Controller.prototype.applySort$Action = function () {
return Promise.resolve();
};
Controller.prototype.loaded$Action = function () {
return Promise.resolve();
};
Controller.prototype.sheetInitialized$Action = function () {
return Promise.resolve();
};
Controller.prototype.deleteAllNotification$Action = function () {
return Promise.resolve();
};
Controller.prototype.markAllAsRead$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Jpw6vcM30keGIepdkjtS7A:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A:aO+UykmPPS6VEpIYdNjDCA", "UBTConnect", "App_CommonBlocks_Filter", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:UdG21F4c3E6cr1pBKYbIfQ:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.UdG21F4c3E6cr1pBKYbIfQ:xTv71UY2LfhxZlTF6EcXIg", "UBTConnect", "MoreActionSheet", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:UdG21F4c3E6cr1pBKYbIfQ", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Jpw6vcM30keGIepdkjtS7A", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "App_CommonBlocks_Filter/MoreActionSheet On Initialize");
return controller.screenEvent_OnInitialize$Action(callContext);

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

OutSystemsDebugger.setThreadStartName(callContext.id, "App_CommonBlocks_Filter/MoreActionSheet On Parameters Changed");
return controller.screenEvent_OnParametersChanged$Action(callContext);

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

define("UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"1JO3Hk9JwkOs0Nu8GVjTVg": {
getter: function (varBag, idService) {
return varBag.vars.value.isOpenInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"EfOx0brGf0y1FH9jL3GJ5A": {
getter: function (varBag, idService) {
return varBag.vars.value.idInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"07nlAKbvDkqWTRsnlQ5CsQ": {
getter: function (varBag, idService) {
return varBag.listIndexOfVar.value;
}
},
"RabaUjXkUkOg9QCrwqrIMg": {
getter: function (varBag, idService) {
return varBag.vars.value.selectedItemsInLocal;
}
},
"n7JXFtVD_Eqmg6V2vUsVVg": {
getter: function (varBag, idService) {
return varBag.vars.value.clickedItemIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"dv0c9Be+zk+4EKb77YN0UQ": {
getter: function (varBag, idService) {
return varBag.listIndexOfVar.value;
}
},
"2ucCejcJW0+_26TTzD6aCQ": {
getter: function (varBag, idService) {
return varBag.vars.value.idInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"6E9kphj_0E6pqJ6xvzxa8Q": {
getter: function (varBag, idService) {
return varBag.vars.value.local_FilterChoiceItemVar;
}
},
"3xNcmsfJfkOzmXFF8STtNQ": {
getter: function (varBag, idService) {
return varBag.listIndexOfVar.value;
}
},
"akbvKpPzsEGqBroLgOKffA": {
getter: function (varBag, idService) {
return varBag.listDuplicateVar.value;
}
},
"ekh_g5LTzUiOnEnjLXP2rg": {
getter: function (varBag, idService) {
return varBag.listIndexOfCountriesVar.value;
}
},
"NwrLoRlnZk2GHAefw5dXLg": {
getter: function (varBag, idService) {
return varBag.listFilterVar.value;
}
},
"fW_4qMYNxUy3bVb0KUiCSQ": {
getter: function (varBag, idService) {
return varBag.app_CommonFilter_DefineOptionNamesVar.value;
}
},
"2hHaqwc4zESsfuRXl1nFCQ": {
getter: function (varBag, idService) {
return varBag.listAnyVar.value;
}
},
"MTEH0BIl8Eixyqo0QM6NTA": {
getter: function (varBag, idService) {
return varBag.listIndexOfLocalitiesVar.value;
}
},
"AvBa814tHU2A8RugSxz_LQ": {
getter: function (varBag, idService) {
return varBag.vars.value.hasFiltersOtherThanLocalityVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"dj6Fdw_3eUesJPRbJp6gHA": {
getter: function (varBag, idService) {
return varBag.vars.value.showSubscriptionOnClickVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"DnkJVCPZd06xMo+L1zpLFQ": {
getter: function (varBag, idService) {
return varBag.vars.value.userInformationInLocal;
}
},
"VTRC9b5SY0Gdx76OKTqZfw": {
getter: function (varBag, idService) {
return varBag.vars.value.backNavigationEventInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"SUvh+Yy4WkiHvrrDylDm0A": {
getter: function (varBag, idService) {
return varBag.bottomSheetCloseVar.value;
}
},
"Et2DGaqNjEyuIeih3H3mPQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_SelectedIdsInLocal;
}
},
"SXorWS7ho0ipw2fBdU3FEg": {
getter: function (varBag, idService) {
return varBag.vars.value.in_TitleInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"DbhlSPeG7UihrBSPCowkww": {
getter: function (varBag, idService) {
return varBag.app_CommonFilter_DefineOptionNamesVar.value;
}
},
"AKceVDf3V0W2UwOjPKP9rw": {
getter: function (varBag, idService) {
return varBag.listIndexOfVar.value;
}
},
"QixJVdwy90KpvexqhYuZSA": {
getter: function (varBag, idService) {
return varBag.listIndexOfLocalitiesVar.value;
}
},
"veetom0DJ0KPc2_pwLaLoA": {
getter: function (varBag, idService) {
return varBag.vars.value.localFilter_SelectionControlsVar;
}
},
"uAnORGZ9CE6yC7jf3ZJPzg": {
getter: function (varBag, idService) {
return varBag.app_CommonFilter_DefineOptionNamesVar.value;
}
},
"uWSt_xvUw0qrtYlEuhWKMg": {
getter: function (varBag, idService) {
return varBag.positionVar.value;
}
},
"mYBuR_ZObU+UQB9InvEE8A": {
getter: function (varBag, idService) {
return varBag.vars.value.in_SubStateInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"LqsEjOEz4E+LZkS75yK1vQ": {
getter: function (varBag, idService) {
return varBag.bottomSheetCloseVar.value;
}
},
"FrETnO4SWESchmo9p01T1A": {
getter: function (varBag, idService) {
return varBag.bottomSheetCloseVar.value;
}
},
"WNHD1gGKSEm0fNT3yckbzQ": {
getter: function (varBag, idService) {
return varBag.vars.value.in_TitleInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"kb7TfNiS2EaSL5yY_vr9OA": {
getter: function (varBag, idService) {
return varBag.listIndexOfVar.value;
}
},
"UJvD6WUxCU2h7quBJbOcyg": {
getter: function (varBag, idService) {
return varBag.vars.value.localFilter_SelectionControlsVar;
}
},
"_ZI8Afaa0UOaYge7V1NRSg": {
getter: function (varBag, idService) {
return varBag.app_CommonFilter_CheckCountryVar.value;
}
},
"W8t164McN02ClJ_aVFjgFA": {
getter: function (varBag, idService) {
return varBag.app_CommonFilter_DefineOptionNamesVar.value;
}
},
"scKU_GjsS02WT0o4A8NmAA": {
getter: function (varBag, idService) {
return varBag.positionVar.value;
}
},
"rczs4Xp250K995gG2WmwWA": {
getter: function (varBag, idService) {
return varBag.vars.value.in_TitleInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"isGlEIPbGUuKrRtQfXdTag": {
getter: function (varBag, idService) {
return varBag.vars.value.choiceIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"EP4U042+nESaR0_1AnLCNA": {
getter: function (varBag, idService) {
return varBag.listIndexOfVar.value;
}
},
"bWBlvZL9kEy0vTWHpw5svA": {
getter: function (varBag, idService) {
return varBag.vars.value.isFromApplyInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"VZaZG7m0p0GuyC2DwhNjoA": {
getter: function (varBag, idService) {
return varBag.model.variables.bottomSheetIdVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"+TV+m2LG7keMt2uE_cLuUQ": {
getter: function (varBag, idService) {
return varBag.model.variables.subState_SelectedVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ixYxvrelV0GmRskd26mPZQ": {
getter: function (varBag, idService) {
return varBag.model.variables.subState_MainVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"zM1x0Soz8Uu4AiDqyzTLDQ": {
getter: function (varBag, idService) {
return varBag.model.variables.subState_LocalitiesVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"OV1WGL7QuUqH5KZcf9aKYw": {
getter: function (varBag, idService) {
return varBag.model.variables.subState_CountriesVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ScAZe+hqOUKCqyKnMJEC+w": {
getter: function (varBag, idService) {
return varBag.model.variables.sortBy_TitleVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"1YfN1PrKP02ZS6Qr0CfsMw": {
getter: function (varBag, idService) {
return varBag.model.variables.optionList_SelectedVar;
}
},
"2TPVbIfimEOCLdyY+sOxjA": {
getter: function (varBag, idService) {
return varBag.model.variables.localCacheControl_AllCountriesVar;
}
},
"9yYCHvPeJ0KpVJjR92IdEw": {
getter: function (varBag, idService) {
return varBag.model.variables.localCacheControl_AllLocalitiesVar;
}
},
"65ZKoXFf+kiiOG9zTEGqjw": {
getter: function (varBag, idService) {
return varBag.model.variables.localCacheControl_UserInfoVar;
}
},
"bmtPEvAIt0OjRJrIDrVI0A": {
getter: function (varBag, idService) {
return varBag.model.variables.optionControlVar;
}
},
"fqBfNLlNI02Gam_oh+R04g": {
getter: function (varBag, idService) {
return varBag.model.variables.lastSearched_OptionControlVar;
}
},
"7DIBtJnMU0+z3HqgVN1LRQ": {
getter: function (varBag, idService) {
return varBag.model.variables.empty_OptionControlVar;
}
},
"_U_VR_hq30i5Az7PyTzKWw": {
getter: function (varBag, idService) {
return varBag.model.variables.isSingleFilterVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Sg0senUoiE6cTQWJ8VtLvw": {
getter: function (varBag, idService) {
return varBag.model.variables.isOpen_LocalVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"EbWppR8UuEWhSRmD2c1nsw": {
getter: function (varBag, idService) {
return varBag.model.variables.searchInputIdVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"WLkJe2E8okiGdsTLswPOhA": {
getter: function (varBag, idService) {
return varBag.model.variables.forceUpdateOptionListVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"TdJkncZ4wUSoVeF60+M6+w": {
getter: function (varBag, idService) {
return varBag.model.variables.showConfirmDeleteAllPopupVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"+IBuw+VoCUu6oqcHhD5Chw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_StartFilterIn;
}
},
"F7FNN_xe+EyWVRwRpmSENw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_Filter_Common_Options_ChoiceIn;
}
},
"8ln+NVpsLEidWLOrsg5Mjg": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassesIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"bGta4IZXzEWXT6LyUOAcfw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"MFzqNTIJSUW1seW2OgKReA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"H6Ssl4_NVkOYnw9yp9gRtw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"xdeSelMEQ0yaCP2eLFf8HQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"Gb50ASQ2wU+vGsv4Eq0Xmg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"+iSEZUZp2kuA+Lh+ZYIjuQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"ZzO5FqLDwkmNsuMEf+BB0Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Footer"));
})(varBag.model, idService);
}
},
"CmvcTWyfgkCPgGmxA9uhKg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"vjhnOcq7rkC6B3kJus2AzQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"medT71f6iEKn+t_Q8Y+f7A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("NeedSubscriptionData"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
