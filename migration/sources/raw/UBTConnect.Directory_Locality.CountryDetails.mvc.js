define("UBTConnect.Directory_Locality.CountryDetails.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.controller", "Leaflet.model", "Connect_Geography_CS.model", "UBTConnectLibrary.model", "UBTConnect.controller", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTConnect_Utils.controller", "UBTJavaScriptUtils.controller", "Leaflet.controller", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$model", "UBTConnect.SubLayout.SubLayout_Browse_Section.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$model", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "Leaflet.Leaflet.LeafletMap.mvc$model", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnectLibrary.ConnectPatterns.Input.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnect.Directory_Locality.Statistics_TypedItem.mvc$model", "UBTConnectLibrary.ConnectPatterns.EmptyList.mvc$model", "UBTConnect.App_Common.BottomBarMenu.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "UBTConnect.App_CommonBlocks_Filter.FilterSheet.mvc$model", "UBTConnect.Directory_Locality.Directory_LegendBottomSheet.mvc$model", "UBTConnectLibrary.controller$GetClass_Color", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "Leaflet.model$MarkerWithWindowRec", "UBTConnect.referencesHealth$Leaflet", "UBTConnect.model$MarkerWithWindowList", "Connect_Geography_CS.model$UI_LocalityStatisticsRec", "UBTConnect.referencesHealth$Connect_Geography_CS", "UBTConnect.model$UI_LocalityStatisticsList", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "Leaflet.model$MapOptionsRec", "Leaflet.model$MaxBoundsRec", "Leaflet.model$MarkerRec", "Leaflet.model$MarkerOptionsRec", "Leaflet.model$IconRec", "Leaflet.model$TooltipRec", "Leaflet.model$TooltipOptionsRec", "Leaflet.model$PopUpRec", "Leaflet.model$OffsetRec", "Leaflet.model$TileLayerRec", "Leaflet.model$TileLayerOptionsRec", "Leaflet.model$GeoJSONFeatureRec", "UBTConnect.model$GeoJSONFeatureList", "Leaflet.model$PathOptionsRec", "Leaflet.model$ZoomControlOptionsRec", "UBTConnectLibrary.model$SearchInputRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnect.model$UI_TypedStatisticsRec", "Connect_Geography_CS.model$UI_StatisticsTextsRec", "UBTConnect.model$Filter_CommonRec", "UBTConnect.model$Filter_Common_OptionsRec", "UBTConnect.model$Filter_Common_Options_ChoiceRec", "UBTConnect.model$Filter_Common_Options_ListRec", "UBTConnect.model$Filter_Common_Control_ListList", "UBTConnectLibrary.model$SelectionOption_ItemRec", "UBTConnect.model$SelectionOption_ItemList", "UBTConnect.model$Filter_Common_Control_ChoiceList", "UBTConnect.controller$GetSkeletonList_UI_LocalityStatistics", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetOpen", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTJavaScriptUtils.controller$JSUtils_String_RemoveAccents", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "Leaflet.controller$Map_Marker_OpenPopUp", "Leaflet.controller$Map_InvalidateSize", "Leaflet.controller$Map_FitBoundsAuto", "Leaflet.controller$Map_SetPopupBindingCallback", "UBTConnect.controller$Directory_BrowseByCountry_TooltipBuilder", "UBTConnect.controller$HasAccessToRegion", "UBTConnect.controller$GetLocalityLabel"], function (OutSystems, UBTConnectModel, UBTConnectLibraryController, LeafletModel, Connect_Geography_CSModel, UBTConnectLibraryModel, UBTConnectController, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTConnect_UtilsController, UBTJavaScriptUtilsController, LeafletController, UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel, UBTConnect_SubLayout_SubLayout_Browse_Section_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel, UBTConnectLibrary_ConnectPatterns_IconText_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, Leaflet_Leaflet_LeafletMap_mvcModel, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, UBTConnectLibrary_ConnectPatterns_Input_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel, UBTConnect_Directory_Locality_Statistics_TypedItem_mvcModel, UBTConnectLibrary_ConnectPatterns_EmptyList_mvcModel, UBTConnect_App_Common_BottomBarMenu_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel, UBTConnect_App_CommonBlocks_Filter_FilterSheet_mvcModel, UBTConnect_Directory_Locality_Directory_LegendBottomSheet_mvcModel) {
var OS = OutSystems.Internal;

var GetLocalityStatisticsDataActRec = (function (_super) {
__extends(GetLocalityStatisticsDataActRec, _super);
function GetLocalityStatisticsDataActRec(defaults) {
_super.apply(this, arguments);
}
GetLocalityStatisticsDataActRec.attributesToDeclare = function () {
return [
this.attr("Out_LocalitiesStatistics", "out_LocalitiesStatisticsOut", "Out_LocalitiesStatistics", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_LocalityStatisticsList());
}, true, UBTConnectModel.UI_LocalityStatisticsList), 
this.attr("CountryName", "countryNameOut", "CountryName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetLocalityStatisticsDataActRec.init();
return GetLocalityStatisticsDataActRec;
})(OS.Model.DataSourceRecord);

var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("MarkersList", "markersListVar", "MarkersList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.MarkerWithWindowList());
}, false, UBTConnectModel.MarkerWithWindowList), 
this.attr("Center", "centerVar", "Center", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.DecimalList());
}, false, OS.DataTypes.DecimalList), 
this.attr("Local_MapId", "local_MapIdVar", "Local_MapId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("SearchString", "searchStringVar", "SearchString", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("Local_List", "local_ListVar", "Local_List", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_LocalityStatisticsList());
}, false, UBTConnectModel.UI_LocalityStatisticsList), 
this.attr("HasFiltersApplied", "hasFiltersAppliedVar", "HasFiltersApplied", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("BottomSheetId_IsLoaded", "bottomSheetId_IsLoadedVar", "BottomSheetId_IsLoaded", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("BottomSheetId_ShowSubscription", "bottomSheetId_ShowSubscriptionVar", "BottomSheetId_ShowSubscription", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("Filter_BottomSheetId", "filter_BottomSheetIdVar", "Filter_BottomSheetId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("OriginalCountryCode", "originalCountryCodeVar", "OriginalCountryCode", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("BottomSheetId", "bottomSheetIdVar", "BottomSheetId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("CountryCode", "countryCodeIn", "CountryCode", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_countryCodeInDataFetchStatus", "_countryCodeInDataFetchStatus", "_countryCodeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("GetLocalityStatistics", "getLocalityStatisticsDataAct", "getLocalityStatisticsDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetLocalityStatisticsDataActRec());
}, true, GetLocalityStatisticsDataActRec)
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
Model._hasValidationWidgetsValue = (((((((((((((((UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel.hasValidationWidgets || UBTConnect_SubLayout_SubLayout_Browse_Section_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_IconText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || Leaflet_Leaflet_LeafletMap_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Input_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets) || UBTConnect_Directory_Locality_Statistics_TypedItem_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_EmptyList_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_BottomBarMenu_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets) || UBTConnect_App_CommonBlocks_Filter_FilterSheet_mvcModel.hasValidationWidgets) || UBTConnect_Directory_Locality_Directory_LegendBottomSheet_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("CountryCode" in inputs) {
this.variables.countryCodeIn = OS.DataConversion.ServerDataConverter.from(inputs.CountryCode, OS.DataTypes.DataTypes.Text);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Directory_Locality.CountryDetails");
});
define("UBTConnect.Directory_Locality.CountryDetails.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.controller", "Leaflet.model", "Connect_Geography_CS.model", "UBTConnectLibrary.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTConnect_Utils.controller", "UBTJavaScriptUtils.controller", "Leaflet.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Locality.CountryDetails.mvc$model", "UBTConnect.Directory_Locality.CountryDetails.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.SubLayout.SubLayout_Browse_Section.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "Leaflet.Leaflet.LeafletMap.mvc$view", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnectLibrary.ConnectPatterns.Input.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnect.Directory_Locality.Statistics_TypedItem.mvc$view", "UBTConnectLibrary.ConnectPatterns.EmptyList.mvc$view", "UBTConnect.App_Common.BottomBarMenu.mvc$view", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "UBTConnect.App_CommonBlocks_Filter.FilterSheet.mvc$view", "UBTConnect.Directory_Locality.Directory_LegendBottomSheet.mvc$view", "UBTConnectLibrary.controller$GetClass_Color", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "Leaflet.model$MarkerWithWindowRec", "UBTConnect.referencesHealth$Leaflet", "UBTConnect.model$MarkerWithWindowList", "Connect_Geography_CS.model$UI_LocalityStatisticsRec", "UBTConnect.referencesHealth$Connect_Geography_CS", "UBTConnect.model$UI_LocalityStatisticsList", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "Leaflet.model$MapOptionsRec", "Leaflet.model$MaxBoundsRec", "Leaflet.model$MarkerRec", "Leaflet.model$MarkerOptionsRec", "Leaflet.model$IconRec", "Leaflet.model$TooltipRec", "Leaflet.model$TooltipOptionsRec", "Leaflet.model$PopUpRec", "Leaflet.model$OffsetRec", "Leaflet.model$TileLayerRec", "Leaflet.model$TileLayerOptionsRec", "Leaflet.model$GeoJSONFeatureRec", "UBTConnect.model$GeoJSONFeatureList", "Leaflet.model$PathOptionsRec", "Leaflet.model$ZoomControlOptionsRec", "UBTConnectLibrary.model$SearchInputRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnect.model$UI_TypedStatisticsRec", "Connect_Geography_CS.model$UI_StatisticsTextsRec", "UBTConnect.model$Filter_CommonRec", "UBTConnect.model$Filter_Common_OptionsRec", "UBTConnect.model$Filter_Common_Options_ChoiceRec", "UBTConnect.model$Filter_Common_Options_ListRec", "UBTConnect.model$Filter_Common_Control_ListList", "UBTConnectLibrary.model$SelectionOption_ItemRec", "UBTConnect.model$SelectionOption_ItemList", "UBTConnect.model$Filter_Common_Control_ChoiceList", "UBTConnect.controller$GetSkeletonList_UI_LocalityStatistics", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetOpen", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTJavaScriptUtils.controller$JSUtils_String_RemoveAccents", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "Leaflet.controller$Map_Marker_OpenPopUp", "Leaflet.controller$Map_InvalidateSize", "Leaflet.controller$Map_FitBoundsAuto", "Leaflet.controller$Map_SetPopupBindingCallback", "UBTConnect.controller$Directory_BrowseByCountry_TooltipBuilder", "UBTConnect.controller$HasAccessToRegion", "UBTConnect.controller$GetLocalityLabel"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryController, LeafletModel, Connect_Geography_CSModel, UBTConnectLibraryModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTConnect_UtilsController, UBTJavaScriptUtilsController, LeafletController, React, OSView, UBTConnect_Directory_Locality_CountryDetails_mvc_model, UBTConnect_Directory_Locality_CountryDetails_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, OSWidgets, UBTConnect_SubLayout_SubLayout_Browse_Section_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, Leaflet_Leaflet_LeafletMap_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_ConnectPatterns_Input_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnect_Directory_Locality_Statistics_TypedItem_mvc_view, UBTConnectLibrary_ConnectPatterns_EmptyList_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, UBTConnect_App_CommonBlocks_Filter_FilterSheet_mvc_view, UBTConnect_Directory_Locality_Directory_LegendBottomSheet_mvc_view) {
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
        View.displayName = "Directory_Locality.CountryDetails";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/UBTConnect.Directory_Locality.CountryDetails.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, UBTConnect_SubLayout_SubLayout_Browse_Section_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, Leaflet_Leaflet_LeafletMap_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_ConnectPatterns_Input_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnect_Directory_Locality_Statistics_TypedItem_mvc_view, UBTConnectLibrary_ConnectPatterns_EmptyList_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, UBTConnect_App_CommonBlocks_Filter_FilterSheet_mvc_view, UBTConnect_Directory_Locality_Directory_LegendBottomSheet_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Directory_Locality_CountryDetails_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Directory_Locality_CountryDetails_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "CountryDetails";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, {
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Header_Title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("8oUN4xSRMUqbx2y_qQMVrg.Value"), function () {
return (((model.variables.getLocalityStatisticsDataAct.countryNameOut === "")) ? ("Browse Directory") : (model.variables.getLocalityStatisticsDataAct.countryNameOut));
}, function () {
return model.variables.getLocalityStatisticsDataAct.countryNameOut;
}),
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalityStatisticsDataAct.dataFetchStatusAttr)
})];
}),
placeholder_Header_Right: new PlaceholderContent(function () {
return [$if(false, false, this, function () {
return [];
}, function () {
return [];
})];
}),
headerContent: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_SubLayout_SubLayout_Browse_Section_mvc_view, {
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
uuid: "2",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_TopSection: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("ZiyihFaxxk+FcOLbsW8InQ.Options"), function () {
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Locality/CountryDetails/Container onclick");
return controller.handler_BrowseCountries$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
inputs: {
ExtendedClasses: "margin-left-base",
ColumnOptions: model.getCachedValue(idService.getId("fs8K2B4zT0qUthEzuV0Jnw.ColumnOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
rec.columnBehaviourAttr = UBTConnectModel.staticEntities.uBT_ColumnBehaviour.reduceLast;
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
uuid: "5",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
left: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
inputs: {
SpacingSize: UBTConnectModel.staticEntities.uBT_Size.base,
Text: "Select another country to view",
TextOptions: model.getCachedValue(idService.getId("0N6a3CcPmE+C38KX9YljQw.TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
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
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral7,
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.locationOn
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
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
})];
}),
right: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.chevronRight
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
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
}))];
})
},
_dependencies: []
})];
}),
placeholder_BottomSection: new PlaceholderContent(function () {
return [$if((!(model.variables.centerVar.isEmpty) && (model.variables.getLocalityStatisticsDataAct.isDataFetchedAttr || model.variables.getLocalityStatisticsDataAct.hasFetchErrorAttr)), false, this, function () {
return [React.createElement(Leaflet_Leaflet_LeafletMap_mvc_view, {
inputs: {
useClustering: true,
MarkersList: model.variables.markersListVar,
TileLayer: model.getCachedValue(idService.getId("LeafletMap.TileLayer"), function () {
return function () {
var rec = new LeafletModel.TileLayerRec();
rec.urlAttr = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}";
rec.optionsAttr = function () {
var rec = new LeafletModel.TileLayerOptionsRec();
rec.minZoomAttr = OS.BuiltinFunctions.integerToLongInteger(2);
rec.maxZoomAttr = OS.BuiltinFunctions.integerToLongInteger(20);
rec.subdomainsAttr = function () {
var list = new OS.DataTypes.TextList();
list.pushAll(["a", "b", "c", "d"]);
return list;
}();
return rec;
}();
return rec;
}();
}),
MapOptions: model.getCachedValue(idService.getId("LeafletMap.MapOptions"), function () {
return function () {
var rec = new LeafletModel.MapOptionsRec();
rec.centerAttr = model.variables.centerVar;
rec.zoomAttr = OS.BuiltinFunctions.integerToLongInteger(5);
rec.minZoomAttr = OS.BuiltinFunctions.integerToLongInteger(2);
rec.maxZoomAttr = OS.BuiltinFunctions.integerToLongInteger(20);
rec.maxBoundsAttr = function () {
var rec = new LeafletModel.MaxBoundsRec();
rec.max_LatAttr = 100;
rec.min_LatAttr = -100;
rec.max_LongAttr = 190;
rec.min_LongAttr = -190;
return rec;
}();
rec.attributionControlAttr = false;
rec.maxBoundsViscosityAttr = OS.DataTypes.LongInteger.defaultValue;
return rec;
}();
}, function () {
return model.variables.centerVar;
}),
ZoomControlOptions: model.getCachedValue(idService.getId("LeafletMap.ZoomControlOptions"), function () {
return function () {
var rec = new LeafletModel.ZoomControlOptionsRec();
rec.positionAttr = "bottomright";
rec.zoomInTitleAttr = "Zoom in";
rec.zoomInClassAttr = ((("ubt-icon " + UBTConnectModel.staticEntities.uBT_Icons2.add) + " ") + OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.getClass_Color$Action(UBTConnectModel.staticEntities.uBT_Color.primary, callContext).out_ColorClassOut;
}, OS.DataTypes.DataTypes.Text, callContext.id));
rec.zoomOutTitleAttr = "Zoom out";
rec.zoomOutClassAttr = ((("ubt-icon " + UBTConnectModel.staticEntities.uBT_Icons2.remove) + " ") + OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.getClass_Color$Action(UBTConnectModel.staticEntities.uBT_Color.primary, callContext).out_ColorClassOut;
}, OS.DataTypes.DataTypes.Text, callContext.id));
rec.isAddGoToMyLocationButtonAttr = false;
rec.myLocationButtonClassAttr = ((("ubt-icon " + UBTConnectModel.staticEntities.uBT_Icons2.myLocationFill) + " ") + OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.getClass_Color$Action(UBTConnectModel.staticEntities.uBT_Color.primary, callContext).out_ColorClassOut;
}, OS.DataTypes.DataTypes.Text, callContext.id));
rec.myLocationButtonTitleAttr = "Your location";
rec.useCustomZoomControlAttr = true;
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onMarker_Clicked$Action: function (markerIdIn, mapIdIn, typeIn, extraDataIn, latIn, longIn, markerObjIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Leaflet/LeafletMap OnMarker_Clicked");
controller.handler_LeafletMapOnMarker_Clicked$Action(markerIdIn, mapIdIn, typeIn, extraDataIn, latIn, longIn, markerObjIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
setCallbacks$Action: function (mapIdIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Leaflet/LeafletMap SetCallbacks");
controller.leafletMapSetCallbacks$Action(mapIdIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
onInitialized$Action: function (mapIdIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Leaflet/LeafletMap OnInitialized");
controller.handler_LeafletMapOnInitialized$Action(mapIdIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
onParametersChanged$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Leaflet/LeafletMap OnParametersChanged");
controller.leafletMapOnParametersChanged$Action(controller.callContext(eventHandlerContext));
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
name: "LeafletMap",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
inputs: {
In_IsLoading: true
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
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_LoadingSection: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "leaflet-container",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: []
})];
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("TYu2yUtrt0OaD3foJYeTKQ.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.backgroundAttr = function () {
var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
return rec;
}();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
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
uuid: "12",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("Block_Search.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.marginSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
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
name: "Block_Search",
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Input_mvc_view, {
inputs: {
In_Options: model.getCachedValue(idService.getId("Block_SearchInput.In_Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SearchInputRec();
rec.isEnabledAttr = (model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut.length > 1);
rec.initalStringAttr = model.variables.searchStringVar;
rec.searchPromptAttr = "Search locality";
rec.debounce_DelayMSAttr = 200;
rec.borderRadiusAttr = UBTConnectModel.staticEntities.shape.rounded;
return rec;
}();
}, function () {
return model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut.length;
}, function () {
return model.variables.searchStringVar;
}),
_in_OptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalityStatisticsDataAct.dataFetchStatusAttr)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_Submit$Action: function (event_SubmittedStringIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Input Event_Submit");
controller.handler_Search_OnChange$Action(event_SubmittedStringIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
event_ClearString$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Input Event_ClearString");
controller.handler_Search_ClearString$Action(controller.callContext(eventHandlerContext));
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
controller.handler_Search_OnChange$Action(event_CurrentStringIn, controller.callContext(eventHandlerContext));
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
name: "Block_SearchInput",
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.getLocalityStatisticsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.searchStringVar), asPrimitiveValue(model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut.length)]
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("Legend.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
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
name: "Legend",
alias: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
inputs: {
ColumnOptions: model.getCachedValue(idService.getId("Title.ColumnOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
rec.columnBehaviourAttr = UBTConnectModel.staticEntities.uBT_ColumnBehaviour.reduceLast;
rec.verticalAlignAttr = UBTConnectModel.staticEntities.uBT_VerticalAlign.center;
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
name: "Title",
alias: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
left: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_TextOptions: model.getCachedValue(idService.getId("eYIcj7K7kUORRJv9hjA1kw.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral10;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.base;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
In_Text: "Browse by Locality"
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
alias: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
right: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.primary,
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.info,
In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.nonStandard_16
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
click$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Icon Click");
controller.onClick_LegendInfo$Action(controller.callContext(eventHandlerContext));
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
uuid: "18",
alias: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("LocalityCount.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.topSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
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
name: "LocalityCount",
alias: "17"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: right;"
},
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
inputs: {
In_IsLoading: !((model.variables.getLocalityStatisticsDataAct.isDataFetchedAttr || model.variables.getLocalityStatisticsDataAct.hasFetchErrorAttr))
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
alias: "18"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_LoadingSection: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_Text: model.getCachedValue(idService.getId("API3tc0Nh0+gpe4TFO1kQw.In_Text"), function () {
return ((model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut.length).toString() + (((model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut.length === 1)) ? (" Locality") : (" Localities")));
}, function () {
return model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut.length;
}),
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalityStatisticsDataAct.dataFetchStatusAttr),
InJustifyText: true,
In_TextOptions: model.getCachedValue(idService.getId("API3tc0Nh0+gpe4TFO1kQw.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral7;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.regular;
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
uuid: "22",
alias: "19"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.getLocalityStatisticsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut.length)]
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.getLocalityStatisticsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut.length), asPrimitiveValue(model.variables.getLocalityStatisticsDataAct.hasFetchErrorAttr), asPrimitiveValue(model.variables.getLocalityStatisticsDataAct.isDataFetchedAttr)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.getLocalityStatisticsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut.length), asPrimitiveValue(model.variables.getLocalityStatisticsDataAct.hasFetchErrorAttr), asPrimitiveValue(model.variables.getLocalityStatisticsDataAct.isDataFetchedAttr)]
}), $if(!((model.variables.getLocalityStatisticsDataAct.isDataFetchedAttr || model.variables.getLocalityStatisticsDataAct.hasFetchErrorAttr)), false, this, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
inputs: {
In_IsLoading: true
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
uuid: "23",
alias: "20"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_LoadingSection: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnect_Directory_Locality_Statistics_TypedItem_mvc_view, {
inputs: {
In_ImageEntityTypeId: UBTConnectModel.staticEntities.connect_Entity.supperMeetings_aka_Subdivisions,
In_HasImage: true,
UI_CountryStatistics: model.getCachedValue(idService.getId("vRFN1aRNvkmt8QE4r9oIiQ.UI_CountryStatistics"), function () {
return function () {
var rec = new UBTConnectModel.UI_TypedStatisticsRec();
rec.uI_StatisticsTextsAttr = function () {
var rec = new Connect_Geography_CSModel.UI_StatisticsTextsRec();
rec.membersAttr = "111";
rec.householdsAttr = "11";
rec.brothersAttr = "11";
rec.sistersAttr = "11";
rec.supperMeetingsAttr = "123";
return rec;
}();
rec.nameAttr = "Loading Name";
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
uuid: "25",
alias: "21"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnect_Directory_Locality_Statistics_TypedItem_mvc_view, {
inputs: {
UI_CountryStatistics: model.getCachedValue(idService.getId("naSTTjOQM0qrhknmxuSdDw.UI_CountryStatistics"), function () {
return function () {
var rec = new UBTConnectModel.UI_TypedStatisticsRec();
rec.uI_StatisticsTextsAttr = function () {
var rec = new Connect_Geography_CSModel.UI_StatisticsTextsRec();
rec.membersAttr = "111";
rec.householdsAttr = "11";
rec.brothersAttr = "11";
rec.sistersAttr = "11";
rec.supperMeetingsAttr = "123";
return rec;
}();
rec.nameAttr = "Loading Name";
return rec;
}();
}),
In_ImageEntityTypeId: UBTConnectModel.staticEntities.connect_Entity.supperMeetings_aka_Subdivisions,
In_HasImage: true
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
uuid: "27",
alias: "22"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnect_Directory_Locality_Statistics_TypedItem_mvc_view, {
inputs: {
In_ImageEntityTypeId: UBTConnectModel.staticEntities.connect_Entity.supperMeetings_aka_Subdivisions,
In_HasImage: true,
UI_CountryStatistics: model.getCachedValue(idService.getId("ZznFI_N2IU6XfWN_kieksA.UI_CountryStatistics"), function () {
return function () {
var rec = new UBTConnectModel.UI_TypedStatisticsRec();
rec.uI_StatisticsTextsAttr = function () {
var rec = new Connect_Geography_CSModel.UI_StatisticsTextsRec();
rec.membersAttr = "111";
rec.householdsAttr = "11";
rec.brothersAttr = "11";
rec.sistersAttr = "11";
rec.supperMeetingsAttr = "123";
return rec;
}();
rec.nameAttr = "Loading Name";
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
uuid: "29",
alias: "23"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
})
},
_dependencies: []
})];
}, function () {
return [$if((model.variables.local_ListVar.isEmpty && ((model.variables.searchStringVar) !== (""))), false, this, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_EmptyList_mvc_view, {
inputs: {
IconId: UBTConnectModel.staticEntities.uBT_Icons2.search
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
uuid: "30",
alias: "24"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
titlePlaceholder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: (("No results found for \'" + model.variables.searchStringVar) + "\'"),
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
textPlaceholder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "Sorry, we couldn\'t find any results for your search. Please check your spelling or try different keywords.",
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.searchStringVar)]
})];
}, function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.local_ListVar,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider,
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Locality/CountryDetails/Container onclick");
return controller.handler_StatisticsList_Clicked$Action(OS.BuiltinFunctions.longIntegerToText(model.variables.local_ListVar.getCurrent(callContext.iterationContext).localityIdAttr), controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
visible: true,
_idProps: {
service: idService,
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.local_ListVar.getCurrent(callContext.iterationContext))]
}, React.createElement(UBTConnect_Directory_Locality_Statistics_TypedItem_mvc_view, {
inputs: {
In_HasImage: true,
UI_CountryStatistics: model.getCachedValue(idService.getId("Dhp1iB6LUEi+jkQENkrh1Q.UI_CountryStatistics"), function () {
return OS.DataConversion.JSConversions.typeConvertRecord(model.variables.local_ListVar.getCurrent(callContext.iterationContext), new UBTConnectModel.UI_TypedStatisticsRec(), function (source, target) {
target.uI_StatisticsTextsAttr = source.uI_TypedStatisticsTextsAttr;
target.nameAttr = source.nameAttr;
return target;
});
}, function () {
return model.variables.local_ListVar.getCurrent(callContext.iterationContext);
}),
In_ImageEntityTypeId: UBTConnectModel.staticEntities.connect_Entity.supperMeetings_aka_Subdivisions,
In_ImageEntityId: OS.BuiltinFunctions.longIntegerToText(model.variables.local_ListVar.getCurrent(callContext.iterationContext).mainHallSubdivisionIdAttr)
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
uuid: "35",
alias: "25"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}, callContext, idService, "1")
},
_dependencies: []
})];
})];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.local_ListVar), asPrimitiveValue(model.variables.getLocalityStatisticsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.searchStringVar), asPrimitiveValue(model.variables.getLocalityStatisticsDataAct.hasFetchErrorAttr), asPrimitiveValue(model.variables.getLocalityStatisticsDataAct.isDataFetchedAttr), asPrimitiveValue(model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut.length)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.local_ListVar), asPrimitiveValue(model.variables.getLocalityStatisticsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.searchStringVar), asPrimitiveValue(model.variables.markersListVar), asPrimitiveValue(model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut.length), asPrimitiveValue(model.variables.getLocalityStatisticsDataAct.hasFetchErrorAttr), asPrimitiveValue(model.variables.getLocalityStatisticsDataAct.isDataFetchedAttr), asPrimitiveValue(model.variables.centerVar)]
})];
}),
bottom: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_App_Common_BottomBarMenu_mvc_view, {
inputs: {
ActiveItem: UBTConnectModel.staticEntities.connect_BottomBar_Items.directory
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
alias: "26"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
placeholder_CommonUI_Inside_Layout: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, {
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
uuid: "37",
alias: "27"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.local_ListVar), asPrimitiveValue(model.variables.searchStringVar), asPrimitiveValue(model.variables.markersListVar), asPrimitiveValue(model.variables.centerVar), asPrimitiveValue(model.variables.getLocalityStatisticsDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut.length), asPrimitiveValue(model.variables.getLocalityStatisticsDataAct.hasFetchErrorAttr), asPrimitiveValue(model.variables.getLocalityStatisticsDataAct.isDataFetchedAttr), asPrimitiveValue(model.variables.getLocalityStatisticsDataAct.countryNameOut)]
}), $if(false, false, this, function () {
return [];
}, function () {
return [React.createElement(UBTConnect_App_CommonBlocks_Filter_FilterSheet_mvc_view, {
inputs: {
ExtendedClasses: "bottom-sheet-higher-z-index",
In_StartFilter: model.getCachedValue(idService.getId("hR4ca0F6K0i5LoNv_DrdbA.In_StartFilter"), function () {
return function () {
var rec = new UBTConnectModel.Filter_CommonRec();
rec.countryIdsAttr = function () {
var list = new OS.DataTypes.TextList();
list.pushAll([model.variables.originalCountryCodeVar]);
return list;
}();
return rec;
}();
}, function () {
return model.variables.originalCountryCodeVar;
}),
In_Options: model.getCachedValue(idService.getId("hR4ca0F6K0i5LoNv_DrdbA.In_Options"), function () {
return function () {
var rec = new UBTConnectModel.Filter_Common_OptionsRec();
rec.hasCountriesAttr = function () {
var rec = new UBTConnectModel.Filter_Common_Options_ListRec();
rec.enableAttr = true;
rec.orderAttr = 1;
rec.addAllOptionsAttr = false;
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
loaded$Action: function (showSubscriptionOnClickIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_CommonBlocks_Filter/FilterSheet Loaded");
controller.handler_FilterSheetLoaded$Action(showSubscriptionOnClickIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
sheetInitialized$Action: function (sheetIdIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_CommonBlocks_Filter/FilterSheet SheetInitialized");
controller.handler_FilterSheetSheetInitialized$Action(sheetIdIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
applyFilters$Action: function (optionList_ControlIn, optionChoice_ControlIn, optionFlatList_ControlIn, subState_LocalitiesIn, subState_CountriesIn, sortBy_TitleIn, hasFitlerAppliedIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_CommonBlocks_Filter/FilterSheet ApplyFilters");
return controller.handler_FilterSheetApplyFilters$Action(optionList_ControlIn, optionChoice_ControlIn, subState_LocalitiesIn, subState_CountriesIn, sortBy_TitleIn, hasFitlerAppliedIn, controller.callContext(eventHandlerContext));
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
uuid: "38",
alias: "28"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}), $if(false, false, this, function () {
return [];
}, function () {
return [React.createElement(UBTConnect_Directory_Locality_Directory_LegendBottomSheet_mvc_view, {
inputs: {
ShowLocalities: false
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
sheetInitialized$Action: function (sheetIdIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Directory_Locality/Directory_LegendBottomSheet SheetInitialized");
controller.directory_LegendBottomSheetSheetInitialized$Action(sheetIdIn, controller.callContext(eventHandlerContext));
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
uuid: "39",
alias: "29"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("UBTConnect.Directory_Locality.CountryDetails.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.controller", "Leaflet.model", "Connect_Geography_CS.model", "UBTConnectLibrary.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTConnect_Utils.controller", "UBTJavaScriptUtils.controller", "Leaflet.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Locality.CountryDetails.mvc$debugger", "UBTConnect.Directory_Locality.controller", "UBTConnect.Directory_Locality.CountryDetails.mvc$controller.ScreenEvent_OnReady.IsViewRestoredFromCacheJS", "UBTConnect.Directory_Locality.CountryDetails.mvc$controller.OnAfterFetch_GetLocalityStatistics.GetCallbackJS", "UBTConnect.Directory_Locality.CountryDetails.mvc$controller.LeafletMapSetCallbacks.JavaScript1JS", "UBTConnect.Directory_Locality.CountryDetails.mvc$controller.Handler_LeafletMapOnInitialized.AsyncInvalidateJS", "UBTConnectLibrary.controller$GetClass_Color", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "Leaflet.model$MarkerWithWindowRec", "UBTConnect.referencesHealth$Leaflet", "UBTConnect.model$MarkerWithWindowList", "Connect_Geography_CS.model$UI_LocalityStatisticsRec", "UBTConnect.referencesHealth$Connect_Geography_CS", "UBTConnect.model$UI_LocalityStatisticsList", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "Leaflet.model$MapOptionsRec", "Leaflet.model$MaxBoundsRec", "Leaflet.model$MarkerRec", "Leaflet.model$MarkerOptionsRec", "Leaflet.model$IconRec", "Leaflet.model$TooltipRec", "Leaflet.model$TooltipOptionsRec", "Leaflet.model$PopUpRec", "Leaflet.model$OffsetRec", "Leaflet.model$TileLayerRec", "Leaflet.model$TileLayerOptionsRec", "Leaflet.model$GeoJSONFeatureRec", "UBTConnect.model$GeoJSONFeatureList", "Leaflet.model$PathOptionsRec", "Leaflet.model$ZoomControlOptionsRec", "UBTConnectLibrary.model$SearchInputRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnect.model$UI_TypedStatisticsRec", "Connect_Geography_CS.model$UI_StatisticsTextsRec", "UBTConnect.model$Filter_CommonRec", "UBTConnect.model$Filter_Common_OptionsRec", "UBTConnect.model$Filter_Common_Options_ChoiceRec", "UBTConnect.model$Filter_Common_Options_ListRec", "UBTConnect.model$Filter_Common_Control_ListList", "UBTConnectLibrary.model$SelectionOption_ItemRec", "UBTConnect.model$SelectionOption_ItemList", "UBTConnect.model$Filter_Common_Control_ChoiceList", "UBTConnect.controller$GetSkeletonList_UI_LocalityStatistics", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetOpen", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTJavaScriptUtils.controller$JSUtils_String_RemoveAccents", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "Leaflet.controller$Map_Marker_OpenPopUp", "Leaflet.controller$Map_InvalidateSize", "Leaflet.controller$Map_FitBoundsAuto", "Leaflet.controller$Map_SetPopupBindingCallback", "UBTConnect.controller$Directory_BrowseByCountry_TooltipBuilder", "UBTConnect.controller$HasAccessToRegion", "UBTConnect.controller$GetLocalityLabel"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryController, LeafletModel, Connect_Geography_CSModel, UBTConnectLibraryModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTConnect_UtilsController, UBTJavaScriptUtilsController, LeafletController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Locality_CountryDetails_mvc_Debugger, _flow_UBTConnect_Directory_LocalityController, UBTConnect_Directory_Locality_CountryDetails_mvc_controller_ScreenEvent_OnReady_IsViewRestoredFromCacheJS, UBTConnect_Directory_Locality_CountryDetails_mvc_controller_OnAfterFetch_GetLocalityStatistics_GetCallbackJS, UBTConnect_Directory_Locality_CountryDetails_mvc_controller_LeafletMapSetCallbacks_JavaScript1JS, UBTConnect_Directory_Locality_CountryDetails_mvc_controller_Handler_LeafletMapOnInitialized_AsyncInvalidateJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
handler_StatisticsList_Clicked$Action: function (event_IdIn) {
event_IdIn = (event_IdIn === undefined) ? "" : event_IdIn;
return controller.executeActionInsideJSNode(controller._handler_StatisticsList_Clicked$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(event_IdIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Handler_StatisticsList_Clicked");
},
action_InvalidateMapSize$Action: function () {
return controller.executeActionInsideJSNode(controller._action_InvalidateMapSize$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Action_InvalidateMapSize");
}
};
this.dataFetchDependenciesOriginal = {
getLocalityStatistics$DataActRefresh: -1
};
this.dataFetchDependentsGraph = {
getLocalityStatistics$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions
Controller.prototype.getLocalityStatistics$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:rX6TEA6fE0Kx8lExdezfQA:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.ic_m+EUSkES938K80SXJXQ/DataActions.rX6TEA6fE0Kx8lExdezfQA:3JfCDqW8Y7b7arbbpZI1jQ", "UBTConnect", "GetLocalityStatistics", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Locality/CountryDetails/GetLocalityStatistics");
return controller.callDataAction("DataActionGetLocalityStatistics", "screenservices/UBTConnect/Directory_Locality/CountryDetails/DataActionGetLocalityStatistics", "avevDySAI8vIT+Te4_4bkg", function (b) {
model.variables.getLocalityStatisticsDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getLocalityStatisticsDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getLocalityStatisticsDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Locality/CountryDetails/GetLocalityStatistics On After Fetch");
controller._onAfterFetch_GetLocalityStatistics$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:rX6TEA6fE0Kx8lExdezfQA", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getLocalityStatistics$DataActRefresh"];
// Client Actions
Controller.prototype._action_RefreshData$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_RefreshData");
callContext = controller.callContext(callContext);
var getSkeletonList_UI_LocalityStatisticsVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getSkeletonList_UI_LocalityStatisticsVar = getSkeletonList_UI_LocalityStatisticsVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:BFFVDPBDq0qovHPnhtyTaw:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.ic_m+EUSkES938K80SXJXQ/ClientActions.BFFVDPBDq0qovHPnhtyTaw:HckCIMG1l3iV6ppkQvT7uA", "UBTConnect", "Action_RefreshData", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ID2nBDXzQkCh2R54Mo_LYw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:OILNBV2+SEaz7fsGKEv67w", callContext.id);
// Execute Action: GetSkeletonList_UI_LocalityStatistics
getSkeletonList_UI_LocalityStatisticsVar.value = UBTConnectController.default.getSkeletonList_UI_LocalityStatistics$Action(10, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CJFTC89Lm0CvoK_dbf51Gg", callContext.id);
// GetLocalityStatistics.Out_LocalitiesStatistics = GetSkeletonList_UI_LocalityStatistics.UI_LocalityStatistics
model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut = getSkeletonList_UI_LocalityStatisticsVar.value.uI_LocalityStatisticsOut;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:RcDuEbGZ70qDszdD8EIhCQ", callContext.id);
// Refresh Query: GetLocalityStatistics
var result = controller.getLocalityStatistics$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SHErRqpVh0K14i2rOSei_A", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:BFFVDPBDq0qovHPnhtyTaw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:BFFVDPBDq0qovHPnhtyTaw", callContext.id);
throw ex;

});
};
Controller.prototype._onClick_LegendInfo$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_LegendInfo");
callContext = controller.callContext(callContext);
var bottomSheetOpenVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.bottomSheetOpenVar = bottomSheetOpenVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:1p+oDbgHVE6IistSp8zsnQ:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.ic_m+EUSkES938K80SXJXQ/ClientActions.1p+oDbgHVE6IistSp8zsnQ:_rNk2LrSTgCiq8MA1omVbQ", "UBTConnect", "OnClick_LegendInfo", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:h3tlY68+FUOuRNJBAGINIg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wxWnsbjwFEGsr66jw6TUNQ", callContext.id);
// Execute Action: BottomSheetOpen
bottomSheetOpenVar.value = OutSystemsUI_2_23Controller.default.bottomSheetOpen$Action(model.variables.bottomSheetIdVar, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7WbFJLvpUkmRXiF+CGHChw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:1p+oDbgHVE6IistSp8zsnQ", callContext.id);
}

};
Controller.prototype._screenEvent_OnReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ScreenEvent_OnReady");
callContext = controller.callContext(callContext);
var isViewRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.isViewRestoredFromCacheJSResult = isViewRestoredFromCacheJSResult;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:nnAmNEbI+kmP25DD9xz_NQ:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.ic_m+EUSkES938K80SXJXQ/ClientActions.nnAmNEbI+kmP25DD9xz_NQ:VP9WqLmDnPMYv757JSjyGA", "UBTConnect", "ScreenEvent_OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8ZxPoQzdWk6QKCK72NpgQQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ge+_FlBQ9Uym0FKMOK2nSA", callContext.id);
isViewRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(UBTConnect_Directory_Locality_CountryDetails_mvc_controller_ScreenEvent_OnReady_IsViewRestoredFromCacheJS, "IsViewRestoredFromCache", "ScreenEvent_OnReady", {
IsRestoredFromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Locality.CountryDetails.ScreenEvent_OnReady$isViewRestoredFromCacheJSResult"))();
jsNodeResult.isRestoredFromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsRestoredFromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
// Check if IsViewRestoredFromCache IsRestoredFromCache
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lNWMX5mWZ0KiRdVFcx+mfw", callContext.id) && (isViewRestoredFromCacheJSResult.value.isRestoredFromCacheOut && model.variables.getLocalityStatisticsDataAct.isDataFetchedAttr))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0tYrWTLSykmV9lWdToMwqw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nAg0d_WFtE2N0QylgfNWGw", callContext.id);
// Execute Action: Action_RefreshData
return controller._action_RefreshData$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Ehu8TEdRvEqT4fnagjjNNg", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:nnAmNEbI+kmP25DD9xz_NQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:nnAmNEbI+kmP25DD9xz_NQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Directory_Locality.CountryDetails.ScreenEvent_OnReady$isViewRestoredFromCacheJSResult", [{
name: "IsRestoredFromCache",
attrName: "isRestoredFromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._handler_BrowseCountries$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_BrowseCountries");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:S2BtPpYMeUyk8mLbDl655w:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.ic_m+EUSkES938K80SXJXQ/ClientActions.S2BtPpYMeUyk8mLbDl655w:aLz0+oPW73JAWR3ErQJkOg", "UBTConnect", "Handler_BrowseCountries", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8HGNa1xznUy9u0al+L1Zcg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FzoLwW53LkOF_cwXsZWNqQ", callContext.id);
// Execute Action: Action_ManuallyOpenFilterSheet
return controller._action_ManuallyOpenFilterSheet$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4Rip+DtMUUqMS0gN9GeMSw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:S2BtPpYMeUyk8mLbDl655w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:S2BtPpYMeUyk8mLbDl655w", callContext.id);
throw ex;

});
};
Controller.prototype._action_ManuallyOpenFilterSheet$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_ManuallyOpenFilterSheet");
callContext = controller.callContext(callContext);
var bottomSheetOpenVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.bottomSheetOpenVar = bottomSheetOpenVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:KYE7RBvtZk68icQI_OPKUQ:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.ic_m+EUSkES938K80SXJXQ/ClientActions.KYE7RBvtZk68icQI_OPKUQ:eG20LeNBBiELG_27mhM_YA", "UBTConnect", "Action_ManuallyOpenFilterSheet", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NY_qppoggkC5Xo7ZgB9_IQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:b5K1lvV3MkW+o4GEWndY5g", callContext.id) && model.variables.bottomSheetId_IsLoadedVar)) {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Wcy8pIeG50C2HJVwsZiqHA", callContext.id) && model.variables.bottomSheetId_ShowSubscriptionVar)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:G0PHn92FhUyKeNor1ZhOdg", callContext.id);
// Execute Action: App_Subscription_ShowUpgradePopUp
model.flush();
return UBTConnect_UtilsController.default.app_Subscription_ShowUpgradePopUp$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hE+W88cdvUuWrqGUbrabnA", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:i4dRZQ3CyEeEWkWYibx_dg", callContext.id);
// Execute Action: BottomSheetOpen
bottomSheetOpenVar.value = OutSystemsUI_2_23Controller.default.bottomSheetOpen$Action(model.variables.filter_BottomSheetIdVar, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XzniUCi6_kiETdL6a_4c5A", callContext.id);
}

});
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:38vR1YqG0E2Vt1qHPeMElg", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:KYE7RBvtZk68icQI_OPKUQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:KYE7RBvtZk68icQI_OPKUQ", callContext.id);
throw ex;

});
};
Controller.prototype._action_DefineList$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_DefineList");
callContext = controller.callContext(callContext);
var listFilterVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.listFilterVar = listFilterVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:UsgIRT+ltkOm2506IHXbSw:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.ic_m+EUSkES938K80SXJXQ/ClientActions.UsgIRT+ltkOm2506IHXbSw:vihda3QV0s804TFbnl4w6A", "UBTConnect", "Action_DefineList", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:iriInUssfESyGMd4BcT5Mw", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:138Pc3uSpUCcDuFIgZEvqw", callContext.id) && (model.variables.searchStringVar === ""))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:v9_K3TV9OkqPRwM6qD4GbA", callContext.id);
// Local_List = GetLocalityStatistics.Out_LocalitiesStatistics
model.variables.local_ListVar = model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DvvrVLmFZ0qv6m61lsIWdQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FE+xJSMuXkqmb9br+NM9gA", callContext.id);
// Execute Action: ListFilter
listFilterVar.value = OS.SystemActions.listFilter(model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut, function (p) {
return ((OS.BuiltinFunctions.index(OutSystemsDebugger.handleFunctionCall(function () {
return UBTJavaScriptUtilsController.default.jSUtils_String_RemoveAccents$Action(p.nameAttr, callContext).out_TextOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), OutSystemsDebugger.handleFunctionCall(function () {
return UBTJavaScriptUtilsController.default.jSUtils_String_RemoveAccents$Action(model.variables.searchStringVar, callContext).out_TextOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), 0, false, true)) !== (-1));
}, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:bJIFKcJnZEKgRnTcP1vEMg", callContext.id);
// Local_List = ListFilter.FilteredList
model.variables.local_ListVar = listFilterVar.value.filteredListOut;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gPk5zNkvoU+KHi5vpghjUw", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:UsgIRT+ltkOm2506IHXbSw", callContext.id);
}

};
Controller.prototype._leafletMapOnParametersChanged$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("LeafletMapOnParametersChanged");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:OfnFRRmI7022Tpzp66fyLw:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.ic_m+EUSkES938K80SXJXQ/ClientActions.OfnFRRmI7022Tpzp66fyLw:gIWuxGmvu964kfj3CW7j3Q", "UBTConnect", "LeafletMapOnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vp9zWrDIUU+qQM+ta8RoGA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QMpdsk4gv06+KJbLEqqpqA", callContext.id);
// Execute Action: Action_InvalidateMapSize
controller._action_InvalidateMapSize$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_QIdpkPql0+KjaGjNc9pxA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:OfnFRRmI7022Tpzp66fyLw", callContext.id);
}

};
Controller.prototype._handler_FilterSheetApplyFilters$Action = function (optionList_ControlIn, optionChoice_ControlIn, subState_LocalitiesIn, subState_CountriesIn, sortBy_TitleIn, hasFitlerAppliedIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_FilterSheetApplyFilters");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Locality.CountryDetails.Handler_FilterSheetApplyFilters$vars"))());
vars.value.optionList_ControlInLocal = optionList_ControlIn.clone();
vars.value.optionChoice_ControlInLocal = optionChoice_ControlIn.clone();
vars.value.subState_LocalitiesInLocal = subState_LocalitiesIn;
vars.value.subState_CountriesInLocal = subState_CountriesIn;
vars.value.sortBy_TitleInLocal = sortBy_TitleIn;
vars.value.hasFitlerAppliedInLocal = hasFitlerAppliedIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:zbYbSYvvVU60DyAUgP7KMQ:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.ic_m+EUSkES938K80SXJXQ/ClientActions.zbYbSYvvVU60DyAUgP7KMQ:9aN+c6OSN2+a_N1dcYUQrg", "UBTConnect", "Handler_FilterSheetApplyFilters", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:h8qJbJGs1UGKyyc61nUiYA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:x4pro1J+HkeFKMTDukkGjA", callContext.id) && (vars.value.optionList_ControlInLocal.getCurrent(callContext.iterationContext).selectedIdsAttr.isEmpty || (vars.value.optionList_ControlInLocal.getCurrent(callContext.iterationContext).selectedIdsAttr.getCurrent(callContext.iterationContext) === UBTConnectModel.staticEntities.choice.none)))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:I_BOPO4qD0mMzAm99vLUtQ", callContext.id);
// CountryCode = OriginalCountryCode
model.variables.countryCodeIn = model.variables.originalCountryCodeVar;
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HjwT94d11EOUbLKItdBiCQ", callContext.id);
// CountryCode = OptionList_Control.Current.SelectedIds.Current
model.variables.countryCodeIn = vars.value.optionList_ControlInLocal.getCurrent(callContext.iterationContext).selectedIdsAttr.getCurrent(callContext.iterationContext);
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ITi1XXcxqU2ov1G8BfNVJg", callContext.id);
// HasFiltersApplied = hasFitlerApplied
model.variables.hasFiltersAppliedVar = vars.value.hasFitlerAppliedInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:K5CJFQntI0qKCFpQqG8bTw", callContext.id);
// Refresh Query: GetLocalityStatistics
var result = controller.getLocalityStatistics$DataActRefresh(callContext);
model.flush();
return result.then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VCeoa+Qc50u91JptCbGFuQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:zbYbSYvvVU60DyAUgP7KMQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:zbYbSYvvVU60DyAUgP7KMQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Directory_Locality.CountryDetails.Handler_FilterSheetApplyFilters$vars", [{
name: "OptionList_Control",
attrName: "optionList_ControlInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnectModel.Filter_Common_Control_ListList();
},
complexType: UBTConnectModel.Filter_Common_Control_ListList
}, {
name: "OptionChoice_Control",
attrName: "optionChoice_ControlInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new UBTConnectModel.Filter_Common_Control_ChoiceList();
},
complexType: UBTConnectModel.Filter_Common_Control_ChoiceList
}, {
name: "SubState_Localities",
attrName: "subState_LocalitiesInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SubState_Countries",
attrName: "subState_CountriesInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SortBy_Title",
attrName: "sortBy_TitleInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "hasFitlerApplied",
attrName: "hasFitlerAppliedInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._handler_FilterSheetSheetInitialized$Action = function (sheetIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_FilterSheetSheetInitialized");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Locality.CountryDetails.Handler_FilterSheetSheetInitialized$vars"))());
vars.value.sheetIdInLocal = sheetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:x_M5Sw1lUU2RnzUxNlTkpA:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.ic_m+EUSkES938K80SXJXQ/ClientActions.x_M5Sw1lUU2RnzUxNlTkpA:qhWfTT5sU6F6taAeGa1+Og", "UBTConnect", "Handler_FilterSheetSheetInitialized", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_QVhvHZUjEGk+TLzzWJ1jA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:F_oD9wQrrEqnnRWZJdhiIA", callContext.id);
// Filter_BottomSheetId = SheetId
model.variables.filter_BottomSheetIdVar = vars.value.sheetIdInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kD7vW0Hwe0yXHHCAx56dSg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:x_M5Sw1lUU2RnzUxNlTkpA", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_Locality.CountryDetails.Handler_FilterSheetSheetInitialized$vars", [{
name: "SheetId",
attrName: "sheetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._handler_LeafletMapOnMarker_Clicked$Action = function (markerIdIn, mapIdIn, typeIn, extraDataIn, latIn, longIn, markerObjIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_LeafletMapOnMarker_Clicked");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Locality.CountryDetails.Handler_LeafletMapOnMarker_Clicked$vars"))());
vars.value.markerIdInLocal = markerIdIn;
vars.value.mapIdInLocal = mapIdIn;
vars.value.typeInLocal = typeIn;
vars.value.extraDataInLocal = extraDataIn;
vars.value.latInLocal = latIn;
vars.value.longInLocal = longIn;
vars.value.markerObjInLocal = markerObjIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:EMKHaLAHzUeXu4aBH8i7WQ:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.ic_m+EUSkES938K80SXJXQ/ClientActions.EMKHaLAHzUeXu4aBH8i7WQ:n2b7lF4W1_eY+BVomxMJkQ", "UBTConnect", "Handler_LeafletMapOnMarker_Clicked", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XPOCewC5h0WaNNS4aGT3Tw", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Z1hGSM4EWku_M4qN2IbG7Q", callContext.id);
// Execute Action: Map_Marker_OpenPopUp
LeafletController.default.map_Marker_OpenPopUp$Action(vars.value.markerObjInLocal, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:iTWCExdKYEuRWfFik2XVZA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:EMKHaLAHzUeXu4aBH8i7WQ", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_Locality.CountryDetails.Handler_LeafletMapOnMarker_Clicked$vars", [{
name: "MarkerId",
attrName: "markerIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Type",
attrName: "typeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ExtraData",
attrName: "extraDataInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Lat",
attrName: "latInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "Long",
attrName: "longInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "MarkerObj",
attrName: "markerObjInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._handler_FilterSheetLoaded$Action = function (showSubscriptionOnClickIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_FilterSheetLoaded");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Locality.CountryDetails.Handler_FilterSheetLoaded$vars"))());
vars.value.showSubscriptionOnClickInLocal = showSubscriptionOnClickIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:vcZXi+a4+kWoHDOUZL6Yug:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.ic_m+EUSkES938K80SXJXQ/ClientActions.vcZXi+a4+kWoHDOUZL6Yug:Y75pGwKt6ZRZtb9IWokRQg", "UBTConnect", "Handler_FilterSheetLoaded", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6sJG9CVPc0SxZMcOc6WTLA", callContext.id);
// Setup Bottom Sheet Info
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lD8XZqFDYkOZNyfORn50nw", callContext.id);
// BottomSheetId_IsLoaded = True
model.variables.bottomSheetId_IsLoadedVar = true;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:lD8XZqFDYkOZNyfORn50nw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// BottomSheetId_ShowSubscription = ShowSubscriptionOnClick
model.variables.bottomSheetId_ShowSubscriptionVar = vars.value.showSubscriptionOnClickInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XhQe8GqcJE60QqQH3f5UIA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:vcZXi+a4+kWoHDOUZL6Yug", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_Locality.CountryDetails.Handler_FilterSheetLoaded$vars", [{
name: "ShowSubscriptionOnClick",
attrName: "showSubscriptionOnClickInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._onAfterFetch_GetLocalityStatistics$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnAfterFetch_GetLocalityStatistics");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Locality.CountryDetails.OnAfterFetch_GetLocalityStatistics$vars"))());
var getCallbackJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getCallbackJSResult = getCallbackJSResult;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:vorenh09UUmL5zY09LW2_A:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.ic_m+EUSkES938K80SXJXQ/ClientActions.vorenh09UUmL5zY09LW2_A:OwXcBzs4ZqKDj+qyrfC_iQ", "UBTConnect", "OnAfterFetch_GetLocalityStatistics", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+XDpl0edqUGBG8_es7zlFg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AChhyqZt5EG241yd1fNdPw", callContext.id);
// Execute Action: Action_DefineList
controller._action_DefineList$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fghs7fr20UmFB51jj9DNZw", callContext.id);
// Execute Action: CenterClear
OS.SystemActions.listClear(model.variables.centerVar, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:n456Pgv9GEuoDznNIPRiMg", callContext.id);
// Execute Action: CenterLat
OS.SystemActions.listAppend(model.variables.centerVar, model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut.getCurrent(callContext.iterationContext).latitudeAttr, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:X5e9JlkUhEmwCjOgMB9LVg", callContext.id);
// Execute Action: CenterLong
OS.SystemActions.listAppend(model.variables.centerVar, model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut.getCurrent(callContext.iterationContext).longitudeAttr, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:A3rNzdYqrkePqt_IDVD_Fw", callContext.id);
getCallbackJSResult.value = controller.safeExecuteJSNode(UBTConnect_Directory_Locality_CountryDetails_mvc_controller_OnAfterFetch_GetLocalityStatistics_GetCallbackJS, "GetCallback", "OnAfterFetch_GetLocalityStatistics", {
Object: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Locality.CountryDetails.OnAfterFetch_GetLocalityStatistics$getCallbackJSResult"))();
jsNodeResult.objectOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Object, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
Handler_StatisticsList_Clicked: controller.clientActionProxies.handler_StatisticsList_Clicked$Action
}, {});
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tAK3bweAE0OSquQz7P+9ww", callContext.id);
// Execute Action: ListClear
OS.SystemActions.listClear(model.variables.markersListVar, callContext);
// Foreach GetLocalityStatistics.Out_LocalitiesStatistics
callContext.iterationContext.registerIterationStart(model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut);
try {var out_LocalitiesStatisticsIterator = callContext.iterationContext.getIterator(model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut);
var out_LocalitiesStatisticsIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:KvpFGJ+tC0+b1v+Ur_6Cwg", callContext.id) && (out_LocalitiesStatisticsIndex < model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut.length))) {
out_LocalitiesStatisticsIterator.currentRowNumber = out_LocalitiesStatisticsIndex;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:FK8YMU2jFE6TjGVwoqP9QQ", callContext.id);
// Execute Action: MarkerClear
OS.SystemActions.listClear(vars.value.local_MarkerWithTooltipVar.markerAttr.latlngAttr, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BUdjZu11Ok+JFsFwRlm+MQ", callContext.id);
// Local_MarkerWithTooltip = GetLocalityStatistics.Out_LocalitiesStatistics.Current
vars.value.local_MarkerWithTooltipVar = OS.DataConversion.JSConversions.typeConvertRecord(model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut.getItem(out_LocalitiesStatisticsIndex.valueOf()), new LeafletModel.MarkerWithWindowRec(), function (source, target) {
target.markerAttr.idAttr = OS.BuiltinFunctions.longIntegerToText(source.localityIdAttr);
target.markerAttr.typeAttr = UBTConnectModel.staticEntities.connect_Entity.locality;
target.markerAttr.extraDataAttr = source.statisticsAttr.titleAttr;
target.markerAttr.optionsAttr = function () {
var rec = new LeafletModel.MarkerOptionsRec();
rec.iconAttr = function () {
var rec = new LeafletModel.IconRec();
rec.iconUrlAttr = "/UBTConnect/img/UBTConnectLibrary.Pin_Member.svg";
rec.iconSizeAttr = function () {
var list = new OS.DataTypes.DecimalList();
list.pushAll([OS.BuiltinFunctions.integerToDecimal(20), OS.BuiltinFunctions.integerToDecimal(24)]);
return list;
}();
rec.iconAnchorAttr = function () {
var list = new OS.DataTypes.DecimalList();
list.pushAll([OS.BuiltinFunctions.integerToDecimal(10), OS.BuiltinFunctions.integerToDecimal(24)]);
return list;
}();
rec.popupAnchorAttr = function () {
var list = new OS.DataTypes.DecimalList();
list.pushAll([OS.BuiltinFunctions.integerToDecimal(0), OS.BuiltinFunctions.integerToDecimal(-24)]);
return list;
}();
return rec;
}();
return rec;
}();
target.popupAttr.closeButtonAttr = true;
target.popupAttr.autoCloseAttr = false;
target.popupAttr.interactiveAttr = true;
target.popupAttr.contentAttr = "Dummy";
return target;
});
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tMf4ZD5wOUiDQnX0A3s+Bg", callContext.id);
// Execute Action: MarkerLat
OS.SystemActions.listAppend(vars.value.local_MarkerWithTooltipVar.markerAttr.latlngAttr, model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut.getItem(out_LocalitiesStatisticsIndex.valueOf()).latitudeAttr, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:84Jk5_Z7QEeM+6Yy1A5dKw", callContext.id);
// Execute Action: MarkerLong
OS.SystemActions.listAppend(vars.value.local_MarkerWithTooltipVar.markerAttr.latlngAttr, model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut.getItem(out_LocalitiesStatisticsIndex.valueOf()).longitudeAttr, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HSUfQrUvYkCHyalzPb3tEQ", callContext.id);
// Execute Action: AddMarker
OS.SystemActions.listAppend(model.variables.markersListVar, vars.value.local_MarkerWithTooltipVar, callContext);
out_LocalitiesStatisticsIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut);
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7M5oUWLPbkOmWERyKpCQTQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:vorenh09UUmL5zY09LW2_A", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_Locality.CountryDetails.OnAfterFetch_GetLocalityStatistics$vars", [{
name: "Local_MarkerWithTooltip",
attrName: "local_MarkerWithTooltipVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new LeafletModel.MarkerWithWindowRec();
},
complexType: LeafletModel.MarkerWithWindowRec
}]);
Controller.registerVariableGroupType("UBTConnect.Directory_Locality.CountryDetails.OnAfterFetch_GetLocalityStatistics$getCallbackJSResult", [{
name: "Object",
attrName: "objectOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._handler_Search_OnChange$Action = function (event_CurrentStringIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_Search_OnChange");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Locality.CountryDetails.Handler_Search_OnChange$vars"))());
vars.value.event_CurrentStringInLocal = event_CurrentStringIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:jfH7q9hPiE68tOC7Y9300w:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.ic_m+EUSkES938K80SXJXQ/ClientActions.jfH7q9hPiE68tOC7Y9300w:YShWtHdmbJ4hjNiOtI1A3g", "UBTConnect", "Handler_Search_OnChange", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:o6WrLJLTakqEk1srtFN3_A", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:W9kXi_VIb0yhOPiuZy1Liw", callContext.id);
// SearchString = Event_CurrentString
model.variables.searchStringVar = vars.value.event_CurrentStringInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:iyDSmEXeNEWjfsHMHfxWkg", callContext.id);
// Execute Action: Action_DefineList
controller._action_DefineList$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DoIDk8lCIEabUabZHtfR2A", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:jfH7q9hPiE68tOC7Y9300w", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_Locality.CountryDetails.Handler_Search_OnChange$vars", [{
name: "Event_CurrentString",
attrName: "event_CurrentStringInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._action_InvalidateMapSize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_InvalidateMapSize");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:VHtJsv50FkG+7e5Gsu8cSQ:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.ic_m+EUSkES938K80SXJXQ/ClientActions.VHtJsv50FkG+7e5Gsu8cSQ:ky5D61yCd47zBMBlfe9xWA", "UBTConnect", "Action_InvalidateMapSize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cIWu+Zm0cEeKRxuoNXusvg", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:H7xoi8Y8gkSBnPXw0y3gXw", callContext.id) && ((model.variables.local_MapIdVar) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Xs+GZXQs_kapVFqrdoKxSQ", callContext.id);
// Execute Action: Map_InvalidateSize
LeafletController.default.map_InvalidateSize$Action(model.variables.local_MapIdVar, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2Ydqye9IB0q1z7fP5XXgTQ", callContext.id);
// Execute Action: Map_FitBoundsAuto
LeafletController.default.map_FitBoundsAuto$Action(model.variables.local_MapIdVar, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QbMvzvvQFkiMklH5UMoigg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QbMvzvvQFkiMklH5UMoigg", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:VHtJsv50FkG+7e5Gsu8cSQ", callContext.id);
}

};
Controller.prototype._leafletMapSetCallbacks$Action = function (mapIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("LeafletMapSetCallbacks");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Locality.CountryDetails.LeafletMapSetCallbacks$vars"))());
vars.value.mapIdInLocal = mapIdIn;
var javaScript1JSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.javaScript1JSResult = javaScript1JSResult;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:ygBrwtWmIUSOTs+ESDPXvw:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.ic_m+EUSkES938K80SXJXQ/ClientActions.ygBrwtWmIUSOTs+ESDPXvw:x46zbE+XeiNvMnmyKhC+0w", "UBTConnect", "LeafletMapSetCallbacks", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IwFU4oFXtUOmAD2xSEXhrQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8AzJBb2qL0aF0lzPWH2s4A", callContext.id);
javaScript1JSResult.value = controller.safeExecuteJSNode(UBTConnect_Directory_Locality_CountryDetails_mvc_controller_LeafletMapSetCallbacks_JavaScript1JS, "JavaScript1", "LeafletMapSetCallbacks", {
PopupBindingCallback: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Locality.CountryDetails.LeafletMapSetCallbacks$javaScript1JSResult"))();
jsNodeResult.popupBindingCallbackOut = OS.DataConversion.JSNodeParamConverter.from($parameters.PopupBindingCallback, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
Directory_BrowseByCountry_TooltipBuilder: UBTConnectController.default.getClientActionProxies(controller).directory_BrowseByCountry_TooltipBuilder$Action,
Handler_StatisticsList_Clicked: controller.clientActionProxies.handler_StatisticsList_Clicked$Action
}, {});
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:h1LbDruwgkGLW83W5IbhXQ", callContext.id);
// Execute Action: Map_SetPopupBindingCallback
LeafletController.default.map_SetPopupBindingCallback$Action(vars.value.mapIdInLocal, javaScript1JSResult.value.popupBindingCallbackOut, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:f9+Sq4WeWU+ix0SDHgQriQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:ygBrwtWmIUSOTs+ESDPXvw", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_Locality.CountryDetails.LeafletMapSetCallbacks$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("UBTConnect.Directory_Locality.CountryDetails.LeafletMapSetCallbacks$javaScript1JSResult", [{
name: "PopupBindingCallback",
attrName: "popupBindingCallbackOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._directory_LegendBottomSheetSheetInitialized$Action = function (sheetIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Directory_LegendBottomSheetSheetInitialized");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Locality.CountryDetails.Directory_LegendBottomSheetSheetInitialized$vars"))());
vars.value.sheetIdInLocal = sheetIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:DcgcynZ140CnytC62QgCMg:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.ic_m+EUSkES938K80SXJXQ/ClientActions.DcgcynZ140CnytC62QgCMg:_h3Wjitni8cXtJ6Pp80z9Q", "UBTConnect", "Directory_LegendBottomSheetSheetInitialized", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:g4xAgXBv+Uu9CZlzmJapag", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:P2nzxQyoukaxR3IW5D+G+g", callContext.id);
// BottomSheetId = SheetId
model.variables.bottomSheetIdVar = vars.value.sheetIdInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vW91shFXNkagIr9VEDkzmw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:DcgcynZ140CnytC62QgCMg", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_Locality.CountryDetails.Directory_LegendBottomSheetSheetInitialized$vars", [{
name: "SheetId",
attrName: "sheetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._handler_StatisticsList_Clicked$Action = function (event_IdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_StatisticsList_Clicked");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Locality.CountryDetails.Handler_StatisticsList_Clicked$vars"))());
vars.value.event_IdInLocal = event_IdIn;
var hasAccessToRegionVar = new OS.DataTypes.VariableHolder();
var listIndexOfVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.hasAccessToRegionVar = hasAccessToRegionVar;
varBag.listIndexOfVar = listIndexOfVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:zWXX1LrNA0CbnHOmMUKv2Q:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.ic_m+EUSkES938K80SXJXQ/ClientActions.zWXX1LrNA0CbnHOmMUKv2Q:XwtSwSYpHF0ZhDnUn9u+uQ", "UBTConnect", "Handler_StatisticsList_Clicked", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1b09xay7REOLZ+LzIAfxdw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7xKxcMjWHEOwNKs6yIHDIQ", callContext.id) && ((vars.value.event_IdInLocal) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:naVvX5RBl06gP4KI15XDKQ", callContext.id);
// Execute Action: HasAccessToRegion
model.flush();
return UBTConnectController.default.hasAccessToRegion$Action(OS.BuiltinFunctions.longIntegerToText(OS.BuiltinFunctions.textToLongInteger(vars.value.event_IdInLocal)), model.variables.countryCodeIn, callContext).then(function (value) {
hasAccessToRegionVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:kRCkyp8Vc0q2NKmcuRTbzQ", callContext.id) && hasAccessToRegionVar.value.hasAccessOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:q6w9ti+udUKIRkal5rLUWw", callContext.id);
// Execute Action: ListIndexOf
listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut, function (p) {
return (OS.BuiltinFunctions.longIntegerToText(p.localityIdAttr) === vars.value.event_IdInLocal);
}, callContext);

if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TX3Q3ZTaOUGSZ5Mnshj0Dg", callContext.id) && ((listIndexOfVar.value.positionOut) !== (-1)))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:aoo7hIIQt0KuBWbtieKKcA", callContext.id);
// LocalityLabel = GetLocalityLabel(GetLocalityStatistics.Out_LocalitiesStatistics[ListIndexOf.Position].Name, GetLocalityStatistics.CountryName)
vars.value.localityLabelVar = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectController.default.getLocalityLabel$Action(model.variables.getLocalityStatisticsDataAct.out_LocalitiesStatisticsOut.getItem(listIndexOfVar.value.positionOut).nameAttr, model.variables.getLocalityStatisticsDataAct.countryNameOut, callContext).out_LabelOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:T2ok0_BEIkK9BjJHwb0eQw", callContext.id);
// Destination: /UBTConnect/Locality_Details
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/Locality_Details", {
LocalityId: OS.DataConversion.ServerDataConverter.asString(OS.BuiltinFunctions.textToLongInteger(vars.value.event_IdInLocal), OS.DataTypes.DataTypes.LongInteger),
PreloadedLocalityLabel: OS.DataConversion.ServerDataConverter.asString(vars.value.localityLabelVar, OS.DataTypes.DataTypes.Text)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8J8OsitKVE6aDNnlnxne3A", callContext.id);
// Execute Action: App_Subscription_ShowUpgradePopUp
model.flush();
return UBTConnect_UtilsController.default.app_Subscription_ShowUpgradePopUp$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:o4tYu1GngEmrjmIRQrx1RA", callContext.id);
});
}

});
});
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fv1L2vx3nkiRnib4fnSy_Q", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:zWXX1LrNA0CbnHOmMUKv2Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:zWXX1LrNA0CbnHOmMUKv2Q", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Directory_Locality.CountryDetails.Handler_StatisticsList_Clicked$vars", [{
name: "Event_Id",
attrName: "event_IdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "LocalityLabel",
attrName: "localityLabelVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._handler_LeafletMapOnInitialized$Action = function (mapIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_LeafletMapOnInitialized");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Locality.CountryDetails.Handler_LeafletMapOnInitialized$vars"))());
vars.value.mapIdInLocal = mapIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:tQ7l2qUei0Cs+vGRWXYnCQ:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.ic_m+EUSkES938K80SXJXQ/ClientActions.tQ7l2qUei0Cs+vGRWXYnCQ:L+UNwcr69L9MkWH3TOPwQg", "UBTConnect", "Handler_LeafletMapOnInitialized", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3p0Pdlv65ESx3jvrbLwvfw", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:QLf7YOK5l0mdqHFpXAL1LQ", callContext.id);
// Local_MapId = MapId
model.variables.local_MapIdVar = vars.value.mapIdInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nNws+OvVA0exi9nbCrWqjg", callContext.id);
controller.safeExecuteJSNode(UBTConnect_Directory_Locality_CountryDetails_mvc_controller_Handler_LeafletMapOnInitialized_AsyncInvalidateJS, "AsyncInvalidate", "Handler_LeafletMapOnInitialized", null, function ($parameters) {
}, {
Action_InvalidateMapSize: controller.clientActionProxies.action_InvalidateMapSize$Action
}, {});
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LtkyeJPUjUmAVhjYNmfjWw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:tQ7l2qUei0Cs+vGRWXYnCQ", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_Locality.CountryDetails.Handler_LeafletMapOnInitialized$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._handler_Search_ClearString$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_Search_ClearString");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:ZF6f67UZIEOOBVHK3u1PVQ:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.ic_m+EUSkES938K80SXJXQ/ClientActions.ZF6f67UZIEOOBVHK3u1PVQ:cMilrp3U0SEHkHKaMWdOTQ", "UBTConnect", "Handler_Search_ClearString", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3xSnhFZ+uU+NJKW_jIXESQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vbc4xejX2UavNhxQxZ_akA", callContext.id);
// SearchString = ""
model.variables.searchStringVar = "";
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:W16bjbMfDE62dO7ajHTxTw", callContext.id);
// Execute Action: Action_DefineList
controller._action_DefineList$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:RnjL+g7voEWd+0aJuj4a8g", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:ZF6f67UZIEOOBVHK3u1PVQ", callContext.id);
}

};
Controller.prototype._statisticsListOnParametersChanged$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("StatisticsListOnParametersChanged");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:kjb17eVC9USgm9cajqjHjA:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.ic_m+EUSkES938K80SXJXQ/ClientActions.kjb17eVC9USgm9cajqjHjA:iBBbD5CNVj6b6fyVP9i1kw", "UBTConnect", "StatisticsListOnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:q57SPqG82UiSmq+cp9yu8w", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9sNr9Iqn+0CLMhFlAf2Mww", callContext.id) && ((model.variables.local_MapIdVar) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DNm+3+4NT0a69fYE6aNRhA", callContext.id);
// Execute Action: Map_InvalidateSize
LeafletController.default.map_InvalidateSize$Action(model.variables.local_MapIdVar, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:smBb5Z+lS0qj6Z3kJrV4cg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:smBb5Z+lS0qj6Z3kJrV4cg", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:kjb17eVC9USgm9cajqjHjA", callContext.id);
}

};
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
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:9dAx92LPqk+XR+eiw41UYA:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.ic_m+EUSkES938K80SXJXQ/ClientActions.9dAx92LPqk+XR+eiw41UYA:g9s0GidfiKvRp+UBLRqSSA", "UBTConnect", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dXcp7zMBZEmxYKSXWHEZ2w", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:SwulPkT3tUGCPieJvyR2aA", callContext.id);
// OriginalCountryCode = CountryCode
model.variables.originalCountryCodeVar = model.variables.countryCodeIn;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9JNArc0Xvk6vzDHfYhTHww", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:9dAx92LPqk+XR+eiw41UYA", callContext.id);
}

};

Controller.prototype.action_RefreshData$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_RefreshData$Action, callContext);

};
Controller.prototype.onClick_LegendInfo$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_LegendInfo$Action, callContext);

};
Controller.prototype.screenEvent_OnReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._screenEvent_OnReady$Action, callContext);

};
Controller.prototype.handler_BrowseCountries$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_BrowseCountries$Action, callContext);

};
Controller.prototype.action_ManuallyOpenFilterSheet$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_ManuallyOpenFilterSheet$Action, callContext);

};
Controller.prototype.action_DefineList$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_DefineList$Action, callContext);

};
Controller.prototype.leafletMapOnParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._leafletMapOnParametersChanged$Action, callContext);

};
Controller.prototype.handler_FilterSheetApplyFilters$Action = function (optionList_ControlIn, optionChoice_ControlIn, subState_LocalitiesIn, subState_CountriesIn, sortBy_TitleIn, hasFitlerAppliedIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_FilterSheetApplyFilters$Action, callContext, optionList_ControlIn, optionChoice_ControlIn, subState_LocalitiesIn, subState_CountriesIn, sortBy_TitleIn, hasFitlerAppliedIn);

};
Controller.prototype.handler_FilterSheetSheetInitialized$Action = function (sheetIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_FilterSheetSheetInitialized$Action, callContext, sheetIdIn);

};
Controller.prototype.handler_LeafletMapOnMarker_Clicked$Action = function (markerIdIn, mapIdIn, typeIn, extraDataIn, latIn, longIn, markerObjIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_LeafletMapOnMarker_Clicked$Action, callContext, markerIdIn, mapIdIn, typeIn, extraDataIn, latIn, longIn, markerObjIn);

};
Controller.prototype.handler_FilterSheetLoaded$Action = function (showSubscriptionOnClickIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_FilterSheetLoaded$Action, callContext, showSubscriptionOnClickIn);

};
Controller.prototype.onAfterFetch_GetLocalityStatistics$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onAfterFetch_GetLocalityStatistics$Action, callContext);

};
Controller.prototype.handler_Search_OnChange$Action = function (event_CurrentStringIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_Search_OnChange$Action, callContext, event_CurrentStringIn);

};
Controller.prototype.action_InvalidateMapSize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_InvalidateMapSize$Action, callContext);

};
Controller.prototype.leafletMapSetCallbacks$Action = function (mapIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._leafletMapSetCallbacks$Action, callContext, mapIdIn);

};
Controller.prototype.directory_LegendBottomSheetSheetInitialized$Action = function (sheetIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._directory_LegendBottomSheetSheetInitialized$Action, callContext, sheetIdIn);

};
Controller.prototype.handler_StatisticsList_Clicked$Action = function (event_IdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_StatisticsList_Clicked$Action, callContext, event_IdIn);

};
Controller.prototype.handler_LeafletMapOnInitialized$Action = function (mapIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_LeafletMapOnInitialized$Action, callContext, mapIdIn);

};
Controller.prototype.handler_Search_ClearString$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_Search_ClearString$Action, callContext);

};
Controller.prototype.statisticsListOnParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._statisticsListOnParametersChanged$Action, callContext);

};
Controller.prototype.screenEvent_OnInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._screenEvent_OnInitialize$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:BmZ1TBE6pkiXu8fkupJ8UQ:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ:FwAkjRuoCVCfL_Y3sNenPQ", "UBTConnect", "Directory_Locality", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:ic_m+EUSkES938K80SXJXQ:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.ic_m+EUSkES938K80SXJXQ:XDB3cXyr1drQAeFjpyL0oA", "UBTConnect", "CountryDetails", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:ic_m+EUSkES938K80SXJXQ", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:BmZ1TBE6pkiXu8fkupJ8UQ", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Locality/CountryDetails On Initialize");
return controller.screenEvent_OnInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Directory_Locality/CountryDetails On Ready");
return controller.screenEvent_OnReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return _flow_UBTConnect_Directory_LocalityController.default.handleError(ex, this.callContext());
};
Controller.checkPermissions = function () {
OS.RolesInfo.checkRegistered();
};
Controller.prototype.getDefaultTimeout = function () {
return UBTConnectController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});
define("UBTConnect.Directory_Locality.CountryDetails.mvc$controller.ScreenEvent_OnReady.IsViewRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
};
});
define("UBTConnect.Directory_Locality.CountryDetails.mvc$controller.OnAfterFetch_GetLocalityStatistics.GetCallbackJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Object = $actions.Handler_StatisticsList_Clicked;
};
});
define("UBTConnect.Directory_Locality.CountryDetails.mvc$controller.LeafletMapSetCallbacks.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.PopupBindingCallback = function(marker) {
    var object = $actions.Directory_BrowseByCountry_TooltipBuilder(marker,$actions.Handler_StatisticsList_Clicked).Object;
    return object;
};
};
});
define("UBTConnect.Directory_Locality.CountryDetails.mvc$controller.Handler_LeafletMapOnInitialized.AsyncInvalidateJS", [], function () {
return function ($actions, $roles, $public) {
setTimeout($actions.Action_InvalidateMapSize,0)
};
});

define("UBTConnect.Directory_Locality.CountryDetails.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"OILNBV2+SEaz7fsGKEv67w": {
getter: function (varBag, idService) {
return varBag.getSkeletonList_UI_LocalityStatisticsVar.value;
}
},
"wxWnsbjwFEGsr66jw6TUNQ": {
getter: function (varBag, idService) {
return varBag.bottomSheetOpenVar.value;
}
},
"ge+_FlBQ9Uym0FKMOK2nSA": {
getter: function (varBag, idService) {
return varBag.isViewRestoredFromCacheJSResult.value;
}
},
"i4dRZQ3CyEeEWkWYibx_dg": {
getter: function (varBag, idService) {
return varBag.bottomSheetOpenVar.value;
}
},
"FE+xJSMuXkqmb9br+NM9gA": {
getter: function (varBag, idService) {
return varBag.listFilterVar.value;
}
},
"QVCteb3Ckkqx7xYXYllOjw": {
getter: function (varBag, idService) {
return varBag.vars.value.optionList_ControlInLocal;
}
},
"Z4WQHH+_p0q8gQbPYxbe0Q": {
getter: function (varBag, idService) {
return varBag.vars.value.optionChoice_ControlInLocal;
}
},
"PsF_LY6p0U6mtJy8SDt+Ig": {
getter: function (varBag, idService) {
return varBag.vars.value.subState_LocalitiesInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"EQjspgKiHky9hUF3ixtRFg": {
getter: function (varBag, idService) {
return varBag.vars.value.subState_CountriesInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"po12OQusWUeeznUFupe7ig": {
getter: function (varBag, idService) {
return varBag.vars.value.sortBy_TitleInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"TzGF7bO0sUu_xnKxayOr_A": {
getter: function (varBag, idService) {
return varBag.vars.value.hasFitlerAppliedInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"e9RVx4f9FkuJMKDrD9PWzA": {
getter: function (varBag, idService) {
return varBag.vars.value.sheetIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"JQYeRByUkk2z6f6NXV7XAg": {
getter: function (varBag, idService) {
return varBag.vars.value.markerIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"JpZa2dXyREmp8fDiK8MXTg": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"qJweogpqN0W0S_TZmdHHiQ": {
getter: function (varBag, idService) {
return varBag.vars.value.typeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"FutsozZ0_ka+1Tg1zI5flA": {
getter: function (varBag, idService) {
return varBag.vars.value.extraDataInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"arCEcCjW+Eih7ks1ZZjt3w": {
getter: function (varBag, idService) {
return varBag.vars.value.latInLocal;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"VniUjwHcI02fjA3qAm3mTw": {
getter: function (varBag, idService) {
return varBag.vars.value.longInLocal;
},
dataType: OS.DataTypes.DataTypes.Decimal
},
"_v6Xzqgb5UKPiXL0tWcOnw": {
getter: function (varBag, idService) {
return varBag.vars.value.markerObjInLocal;
},
dataType: OS.DataTypes.DataTypes.Object
},
"yrKPSFxGckWJpxn5MVWvPw": {
getter: function (varBag, idService) {
return varBag.vars.value.showSubscriptionOnClickInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"tMsNX2dQ9k6DJsBrMgcTOQ": {
getter: function (varBag, idService) {
return varBag.vars.value.local_MarkerWithTooltipVar;
}
},
"A3rNzdYqrkePqt_IDVD_Fw": {
getter: function (varBag, idService) {
return varBag.getCallbackJSResult.value;
}
},
"hmFuKzrZWUOdHFWqFp+okA": {
getter: function (varBag, idService) {
return varBag.vars.value.event_CurrentStringInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"kHrsOyH9q0m+lMKVwRWPuA": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"8AzJBb2qL0aF0lzPWH2s4A": {
getter: function (varBag, idService) {
return varBag.javaScript1JSResult.value;
}
},
"1wG9yZVCJke+Lwu0LWqpEQ": {
getter: function (varBag, idService) {
return varBag.vars.value.sheetIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"k2ICyw3Om0Ox6AA8jk+Mzw": {
getter: function (varBag, idService) {
return varBag.vars.value.localityLabelVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"I4AOqXNHE0OFU6J3toF6_g": {
getter: function (varBag, idService) {
return varBag.vars.value.event_IdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"naVvX5RBl06gP4KI15XDKQ": {
getter: function (varBag, idService) {
return varBag.hasAccessToRegionVar.value;
}
},
"q6w9ti+udUKIRkal5rLUWw": {
getter: function (varBag, idService) {
return varBag.listIndexOfVar.value;
}
},
"UX8TP250S0OYbp3vVHUhJQ": {
getter: function (varBag, idService) {
return varBag.vars.value.mapIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"nNws+OvVA0exi9nbCrWqjg": {
getter: function (varBag, idService) {
return varBag.asyncInvalidateJSResult.value;
}
},
"MrD8F2s3okqLM339Nraj3w": {
getter: function (varBag, idService) {
return varBag.model.variables.markersListVar;
}
},
"PAaH3Cqz9k2EmPtZ0PuX6g": {
getter: function (varBag, idService) {
return varBag.model.variables.centerVar;
}
},
"Gji+3ofpyE2DbS0o+0CEYQ": {
getter: function (varBag, idService) {
return varBag.model.variables.local_MapIdVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"on2y3XSjd0aRVXaaFsOluQ": {
getter: function (varBag, idService) {
return varBag.model.variables.searchStringVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"HPTnGQOaPEySYtXu512jDQ": {
getter: function (varBag, idService) {
return varBag.model.variables.local_ListVar;
}
},
"xjeiaf9yyUaz0ibIxi2YEA": {
getter: function (varBag, idService) {
return varBag.model.variables.hasFiltersAppliedVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"JN8+xrXew0C+EOrQUxeqRA": {
getter: function (varBag, idService) {
return varBag.model.variables.bottomSheetId_IsLoadedVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"zs5rUf8D7EuUoQfsKWNOHg": {
getter: function (varBag, idService) {
return varBag.model.variables.bottomSheetId_ShowSubscriptionVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"FzKRAvwuK0m0R_ICzEuQRA": {
getter: function (varBag, idService) {
return varBag.model.variables.filter_BottomSheetIdVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"BVP4EZpJGEC8dUt6cxluZw": {
getter: function (varBag, idService) {
return varBag.model.variables.originalCountryCodeVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"29xDofNGfUKShss7c1fhiA": {
getter: function (varBag, idService) {
return varBag.model.variables.bottomSheetIdVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"zdfPRbAYak66q3XN4hBmag": {
getter: function (varBag, idService) {
return varBag.model.variables.countryCodeIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"rX6TEA6fE0Kx8lExdezfQA": {
getter: function (varBag, idService) {
return varBag.model.variables.getLocalityStatisticsDataAct;
}
},
"Evfc0x5J4UiCUjL5fqOYDg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Title"));
})(varBag.model, idService);
}
},
"jEqrxxbQ8E2XU6Qq4JdtHw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Right"));
})(varBag.model, idService);
}
},
"GMFF10otzEGv_Q_8KK4tWg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HidingForNow"));
})(varBag.model, idService);
}
},
"JIAbmk+1aEi4qNAS0ezR_Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"1uOR3wPhcEOwseqNaL4L+Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"vKYvq7LPOkCiVc5bX9m1_Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_TopSection"));
})(varBag.model, idService);
}
},
"QRHUnYMdwUqP46_VdxJvPA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"eeZ6qS+zo0mF+rG6oZ0bfw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"qoTEGqNnXU+_3IDJX6v4Lg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"GcpxkAjLqUquaki9PY+igw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"5Xpk8JPP1UCFLnX+9dCNGg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_BottomSection"));
})(varBag.model, idService);
}
},
"8tsIOvW9hUqDG10hxdl4bg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("LeafletMap"));
})(varBag.model, idService);
}
},
"xcIdD4V3sEiIQ9hIzdHQ1g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
})(varBag.model, idService);
}
},
"Cr9K4i2twEmWncITru_iDQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"Yv2LaRIDaEapfJBYMOM4XQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Block_Search"));
})(varBag.model, idService);
}
},
"ZfY9V98PWkmQbxfeGU5uYA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"ddd+XKiocEqmrA9cEWDOEw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Block_SearchInput"));
})(varBag.model, idService);
}
},
"6YnRJozb3EmioWZ9OmBZ3w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Legend"));
})(varBag.model, idService);
}
},
"nVtTUJeLfU+dlK1S9sftew": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"V1S56qj+20+DcAcZ1aSuIw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Title"));
})(varBag.model, idService);
}
},
"GCdI9mu_Lka837Dxya1BvQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"PSbceKlYpEO+G8+7cEQD+w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"820zSoFwwUeMUVvrcacgng": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("LocalityCount"));
})(varBag.model, idService);
}
},
"1CtxE4lGn0ipptgiUqP2ww": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"0S+O84jyv0avRqsHERDa7Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
})(varBag.model, idService);
}
},
"ABwU97qRRk6_d2ooRUnrIQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("isLoading"));
})(varBag.model, idService);
}
},
"s3eQ9X4WTU+NO68ehpFz9g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
})(varBag.model, idService);
}
},
"8gC8Pwxid0Cx_VCMJEHEJw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TitlePlaceholder"));
})(varBag.model, idService);
}
},
"8abx9uhouk604tNHDXcy0A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("TextPlaceholder"));
})(varBag.model, idService);
}
},
"U8X71VyltkCABcQpCKzdPQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
},
"ZlKTOCtX70G_vp2MfHKcbQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
})(varBag.model, idService);
}
},
"ZIMGbsHk9UOBddH3OqztcA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HideInServiceStudio_BottomSheet"));
})(varBag.model, idService);
}
},
"83QHUdAdNUiycDHjEJLziw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HideInServiceStudio_LegendBottomSheet"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
