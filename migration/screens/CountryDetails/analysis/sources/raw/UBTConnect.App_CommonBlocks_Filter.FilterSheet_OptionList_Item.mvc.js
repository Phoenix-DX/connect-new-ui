define("UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionList_Item.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "UBTJavaScriptUtils.controller", "UBTConnect_Utils.controller", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnectLibrary.ConnectPatterns.Input.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnectLibrary.ConnectPatterns.SelectionOption_List.mvc$model", "UBTConnectLibrary.model$SelectionOption_ItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$SelectionOption_ItemList", "UBTConnect.model$Filter_Common_Control_ListRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$SearchInputRec", "UBTConnectLibrary.model$InlineIconRec", "UBTJavaScriptUtils.controller$JSUtils_String_RemoveAccents", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect.referencesHealth$UBTConnect_Utils"], function (OutSystems, UBTConnectModel, UBTConnectLibraryModel, UBTJavaScriptUtilsController, UBTConnect_UtilsController, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_ConnectPatterns_IconText_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, UBTConnectLibrary_ConnectPatterns_Input_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel, UBTConnectLibrary_ConnectPatterns_SelectionOption_List_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Search_Selection", "search_SelectionVar", "Search_Selection", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("Options", "optionsVar", "Options", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.SelectionOption_ItemList());
}, false, UBTConnectModel.SelectionOption_ItemList), 
this.attr("Filter_Common_Control_List", "filter_Common_Control_ListIn", "Filter_Common_Control_List", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.Filter_Common_Control_ListRec());
}, false, UBTConnectModel.Filter_Common_Control_ListRec), 
this.attr("_filter_Common_Control_ListInDataFetchStatus", "_filter_Common_Control_ListInDataFetchStatus", "_filter_Common_Control_ListInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ShowHeader", "showHeaderIn", "ShowHeader", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_showHeaderInDataFetchStatus", "_showHeaderInDataFetchStatus", "_showHeaderInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ForceUpdate", "forceUpdateIn", "ForceUpdate", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_forceUpdateInDataFetchStatus", "_forceUpdateInDataFetchStatus", "_forceUpdateInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (((((UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_IconText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Input_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_SelectionOption_List_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("Filter_Common_Control_List" in inputs) {
this.variables.filter_Common_Control_ListIn = inputs.Filter_Common_Control_List;
if("_filter_Common_Control_ListInDataFetchStatus" in inputs) {
this.variables._filter_Common_Control_ListInDataFetchStatus = inputs._filter_Common_Control_ListInDataFetchStatus;
}

}

if("ShowHeader" in inputs) {
this.variables.showHeaderIn = inputs.ShowHeader;
if("_showHeaderInDataFetchStatus" in inputs) {
this.variables._showHeaderInDataFetchStatus = inputs._showHeaderInDataFetchStatus;
}

}

if("ForceUpdate" in inputs) {
this.variables.forceUpdateIn = inputs.ForceUpdate;
if("_forceUpdateInDataFetchStatus" in inputs) {
this.variables._forceUpdateInDataFetchStatus = inputs._forceUpdateInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "App_CommonBlocks_Filter.FilterSheet_OptionList_Item");
});
define("UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionList_Item.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTJavaScriptUtils.controller", "UBTConnect_Utils.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionList_Item.mvc$model", "UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionList_Item.mvc$controller", "UBTConnect.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.ConnectPatterns.Input.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.ConnectPatterns.SelectionOption_List.mvc$view", "UBTConnectLibrary.model$SelectionOption_ItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$SelectionOption_ItemList", "UBTConnect.model$Filter_Common_Control_ListRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$SearchInputRec", "UBTConnectLibrary.model$InlineIconRec", "UBTJavaScriptUtils.controller$JSUtils_String_RemoveAccents", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect.referencesHealth$UBTConnect_Utils"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTJavaScriptUtilsController, UBTConnect_UtilsController, React, OSView, UBTConnect_App_CommonBlocks_Filter_FilterSheet_OptionList_Item_mvc_model, UBTConnect_App_CommonBlocks_Filter_FilterSheet_OptionList_Item_mvc_controller, UBTConnectClientVariables, OSWidgets, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectPatterns_Input_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_SelectionOption_List_mvc_view) {
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
        View.displayName = "App_CommonBlocks_Filter.FilterSheet_OptionList_Item";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectPatterns_Input_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_SelectionOption_List_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_App_CommonBlocks_Filter_FilterSheet_OptionList_Item_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_App_CommonBlocks_Filter_FilterSheet_OptionList_Item_mvc_controller;
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
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("Selections.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.backgroundAttr = function () {
var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
rec.backgroundColorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
return rec;
}();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
rec.borderOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.BorderOptionsRec();
rec.radiusAttr = function () {
var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Shape.soft;
return rec;
}();
return rec;
}();
return rec;
}();
}),
ExtendedClasses: "text-align-left"
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
name: "Selections",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [$if(model.variables.showHeaderIn, false, this, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("cPohU7Q3t0OIQ+PAquQMJw.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
rec.borderOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.BorderOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral3;
rec.sizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
return rec;
}();
return rec;
}();
}),
ExtendedClasses: "ubt-zindex-2"
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

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "BasePatterns/CustomContainer Clicked");
return controller.onClick_SelectionBack$Action(controller.callContext(eventHandlerContext));
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
uuid: "2",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
inputs: {
Text: ("All " + model.variables.filter_Common_Control_ListIn.titleAttr),
_textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._filter_Common_Control_ListInDataFetchStatus)
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
icon: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral7,
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.arrowLeftAlt
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
alias: "4"
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
_dependencies: [asPrimitiveValue(model.variables._filter_Common_Control_ListInDataFetchStatus), asPrimitiveValue(model.variables.filter_Common_Control_ListIn.titleAttr)]
})];
}, function () {
return [];
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("0LvwdXn0aUWTBbe9FtqfAA.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
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
uuid: "5",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Input_mvc_view, {
inputs: {
In_Options: model.getCachedValue(idService.getId("UyM9b7jGEUeVqHI3I+rtuQ.In_Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SearchInputRec();
rec.searchPromptAttr = "Search";
rec.debounce_DelayMSAttr = 300;
rec.borderRadiusAttr = UBTConnectModel.staticEntities.shape.rounded;
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_OnReady$Action: function (idIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Input Event_OnReady");
return controller.handler_InputEvent_OnReady$Action(idIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
event_ClearString$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/Input Event_ClearString");
controller.inputEvent_ClearString$Action(controller.callContext(eventHandlerContext));
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
controller.onChange_SelectionSearch$Action(event_CurrentStringIn, controller.callContext(eventHandlerContext));
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
uuid: "6",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
}), $if((((model.variables.search_SelectionVar) !== ("")) && model.variables.optionsVar.isEmpty), false, this, function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("+StEY_kVqUa_qYJHOVAcFQ.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
rec.marginSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
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
uuid: "7",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_Text: (("No results found for ‘" + model.variables.search_SelectionVar) + "’"),
In_TextOptions: model.getCachedValue(idService.getId("BtAT78O3m0OjFPGeCKaIXw.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral9;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
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
uuid: "8",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.search_SelectionVar)]
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("1W8S_RogVUWB5VAAYWTLMQ.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
rec.marginSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
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
uuid: "9",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_TextOptions: model.getCachedValue(idService.getId("BFQ2qLUkS06s2PXvnYlFsg.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral9;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.regular;
return rec;
}();
}),
In_Text: "We couldn’t find an item that matches your search. Please check your spelling or try different keywords."
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
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
})];
}, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_SelectionOption_List_mvc_view, {
inputs: {
SelectionOption_ItemList: model.variables.optionsVar,
isMultiselect: false,
LastItem_StyleOptions: model.getCachedValue(idService.getId("5RQiRVaz80Gc7ccrGrEQow.LastItem_StyleOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.borderOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.BorderOptionsRec();
rec.sizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.generalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.none;
return rec;
}();
return rec;
}();
return rec;
}();
}),
Item_StyleOptions: model.getCachedValue(idService.getId("5RQiRVaz80Gc7ccrGrEQow.Item_StyleOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.backgroundAttr = function () {
var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
return rec;
}();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
rec.borderOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.BorderOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral3;
rec.sizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
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
notEnabledOnClick$Action: function (clickedItemIdIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/SelectionOption_List NotEnabledOnClick");
return controller.selectionOption_ListNotEnabledOnClick$Action(clickedItemIdIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
onSelectionChange$Action: function (selectedItemsIn, clickedItemIdIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConnectPatterns/SelectionOption_List OnSelectionChange");
return controller.onChange_Selection$Action(selectedItemsIn, clickedItemIdIn, controller.callContext(eventHandlerContext));
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
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.optionsVar), asPrimitiveValue(model.variables.search_SelectionVar), asPrimitiveValue(model.variables.filter_Common_Control_ListIn.titleAttr), asPrimitiveValue(model.variables._filter_Common_Control_ListInDataFetchStatus), asPrimitiveValue(model.variables._showHeaderInDataFetchStatus), asPrimitiveValue(model.variables.showHeaderIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionList_Item.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBTJavaScriptUtils.controller", "UBTConnect_Utils.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionList_Item.mvc$debugger", "UBTConnectLibrary.model$SelectionOption_ItemRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnect.model$SelectionOption_ItemList", "UBTConnect.model$Filter_Common_Control_ListRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$SearchInputRec", "UBTConnectLibrary.model$InlineIconRec", "UBTJavaScriptUtils.controller$JSUtils_String_RemoveAccents", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "UBTConnect_Utils.controller$App_Subscription_ShowUpgradePopUp", "UBTConnect.referencesHealth$UBTConnect_Utils"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBTJavaScriptUtilsController, UBTConnect_UtilsController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_CommonBlocks_Filter_FilterSheet_OptionList_Item_mvc_Debugger) {
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
Controller.prototype._action_DefineOptions$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_DefineOptions");
callContext = controller.callContext(callContext);
var listAnyVar = new OS.DataTypes.VariableHolder();
var listFilterVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.listAnyVar = listAnyVar;
varBag.listFilterVar = listFilterVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:CEdEHe+25k61fseaIdvqRA:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.quJosii360SED9lZt91bfg/ClientActions.CEdEHe+25k61fseaIdvqRA:bHrSa7p1OH6kMvYSnEeYDQ", "UBTConnect", "Action_DefineOptions", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:i6kZbCcwqUeNkPcaSF5HYw", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jtnmJV6Ee0qCXp8o+EFC9Q", callContext.id);
// ForceUpdate = ForceUpdate
model.variables.forceUpdateIn = model.variables.forceUpdateIn;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:E5WFf7Ie+ESF+jsBzZ2imA", callContext.id);
// Execute Action: ListClear
OS.SystemActions.listClear(model.variables.optionsVar, callContext);
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zjd8LStJRkqf57pMui7Ueg", callContext.id) && ((model.variables.search_SelectionVar) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wpp2098TkESV9al57tU0Ig", callContext.id);
// Execute Action: ListFilter
listFilterVar.value = OS.SystemActions.listFilter(model.variables.filter_Common_Control_ListIn.in_OptionsAttr, function (p) {
return ((OS.BuiltinFunctions.index(OutSystemsDebugger.handleFunctionCall(function () {
return UBTJavaScriptUtilsController.default.jSUtils_String_RemoveAccents$Action(p.displayTextAttr, callContext).out_TextOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), OutSystemsDebugger.handleFunctionCall(function () {
return UBTJavaScriptUtilsController.default.jSUtils_String_RemoveAccents$Action(model.variables.search_SelectionVar, callContext).out_TextOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), 0, false, true)) !== (-1));
}, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZRiJYytPbUWCBzhdXU741A", callContext.id);
// Execute Action: ListAppendAll2
OS.SystemActions.listAppendAll(model.variables.optionsVar, listFilterVar.value.filteredListOut, callContext);
} else {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:RgsCGVJNoEeDLTdIi_ZPrw", callContext.id) && model.variables.filter_Common_Control_ListIn.addAllOptionsAttr)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GZq_AOFP60q_Me8fQW82RQ", callContext.id);
// Execute Action: ListAppend
OS.SystemActions.listAppend(model.variables.optionsVar, function () {
var rec = new UBTConnectLibraryModel.SelectionOption_ItemRec();
rec.idAttr = UBTConnectModel.staticEntities.choice.none;
rec.displayTextAttr = ("All " + model.variables.filter_Common_Control_ListIn.titleAttr);
rec.isSelectedAttr = (model.variables.filter_Common_Control_ListIn.selectedIdsAttr.getCurrent(callContext.iterationContext) === OS.BuiltinFunctions.textToIdentifier(UBTConnectModel.staticEntities.choice.none));
return rec;
}(), callContext);
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tKfNBUY2tk25dcoCE9J1zg", callContext.id);
// Execute Action: ListAppendAll
OS.SystemActions.listAppendAll(model.variables.optionsVar, model.variables.filter_Common_Control_ListIn.in_OptionsAttr, callContext);
}

// Foreach Options
callContext.iterationContext.registerIterationStart(model.variables.optionsVar);
try {var optionsIterator = callContext.iterationContext.getIterator(model.variables.optionsVar);
var optionsIndex = 0;
while ((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DZL0zHd1TE+H22SY_XoB+Q", callContext.id) && (optionsIndex < model.variables.optionsVar.length))) {
optionsIterator.currentRowNumber = optionsIndex;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:O6AVJQi00ESIT1HhZy9Vcg", callContext.id);
// Execute Action: ListAny
listAnyVar.value = OS.SystemActions.listAny(model.variables.filter_Common_Control_ListIn.selectedIdsAttr, function (p) {
return (p === model.variables.optionsVar.getItem(optionsIndex.valueOf()).idAttr);
}, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nGWPHtf840eQoz7+2KVU7A", callContext.id);
// Options.Current.isSelected = ListAny.Result
model.variables.optionsVar.getItem(optionsIndex.valueOf()).isSelectedAttr = listAnyVar.value.resultOut;
optionsIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.optionsVar);
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Y6BuTbg4nEaC42i4CSISpQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:CEdEHe+25k61fseaIdvqRA", callContext.id);
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
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:xG5+QK5UM0qW3fmrVLJw9A:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.quJosii360SED9lZt91bfg/ClientActions.xG5+QK5UM0qW3fmrVLJw9A:dvBSIEZfmtfjYaXmMf8edw", "UBTConnect", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cj6ZXx4ZNEmGURiNxQKvpg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:K3lSE7pPHEu23LfdjfHC_A", callContext.id);
// Execute Action: Action_DefineOptions
controller._action_DefineOptions$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:vPQV7aPjOUSuxKiLWZg39A", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:xG5+QK5UM0qW3fmrVLJw9A", callContext.id);
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
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:l2MDRFsgckuUu+jLlUuzIw:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.quJosii360SED9lZt91bfg/ClientActions.l2MDRFsgckuUu+jLlUuzIw:tpLUQVcSrPmijkoGLxrYWA", "UBTConnect", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZxBPd8sZ7ESHVkT9696Xsw", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BjXpp4htR0yfJRIdXnTefw", callContext.id);
// Execute Action: Action_DefineOptions
controller._action_DefineOptions$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cy2xFEVkSUKF+iEzYWcfjg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:l2MDRFsgckuUu+jLlUuzIw", callContext.id);
}

};
Controller.prototype._onChange_Selection$Action = function (selectedItemsIn, clickedItemIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnChange_Selection");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionList_Item.OnChange_Selection$vars"))());
vars.value.selectedItemsInLocal = selectedItemsIn.clone();
vars.value.clickedItemIdInLocal = clickedItemIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:R1S_RNv1vUKrdS1BwlOjIw:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.quJosii360SED9lZt91bfg/ClientActions.R1S_RNv1vUKrdS1BwlOjIw:sQFm5DKndg03Lc89EW7JmQ", "UBTConnect", "OnChange_Selection", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gwCMjxeuWkSMf2tO1SeE9g", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:fPoYyX7q0kWhApqN6XKuJw", callContext.id);
// Execute Action: ListClear
OS.SystemActions.listClear(model.variables.filter_Common_Control_ListIn.selectedIdsAttr, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Y6rGIIctx0iTyevoveCBCw", callContext.id);
// Execute Action: ListAppendAll
OS.SystemActions.listAppendAll(model.variables.filter_Common_Control_ListIn.selectedIdsAttr, OS.DataConversion.JSConversions.typeConvertRecordList(vars.value.selectedItemsInLocal, new OS.DataTypes.TextList(), function (source, target) {
target = source.idAttr;
return target;
}), callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:C2vAtAouLEiNs5fIwsBfpw", callContext.id);
// Trigger Event: OnChange
return controller.onChange$Action(model.variables.filter_Common_Control_ListIn.selectedIdsAttr, model.variables.filter_Common_Control_ListIn.titleAttr, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ve0ZVALYkESnizY2oefMKw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:R1S_RNv1vUKrdS1BwlOjIw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:R1S_RNv1vUKrdS1BwlOjIw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionList_Item.OnChange_Selection$vars", [{
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
Controller.prototype._inputEvent_ClearString$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("InputEvent_ClearString");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:8OztSopzDEqjZeDFB7ZGew:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.quJosii360SED9lZt91bfg/ClientActions.8OztSopzDEqjZeDFB7ZGew:HjOnJXK06KRBsPpU5FvX4A", "UBTConnect", "InputEvent_ClearString", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7FCca+8CaUS7qWl_2dAs7w", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DydsI42u0EKwGg4ZB4MLiA", callContext.id);
// Execute Action: OnChange_SelectionSearch
controller._onChange_SelectionSearch$Action("", callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:JHC4Zf9jqE6EZ9OVcuqqaw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:8OztSopzDEqjZeDFB7ZGew", callContext.id);
}

};
Controller.prototype._onChange_SelectionSearch$Action = function (event_CurrentStringIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnChange_SelectionSearch");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionList_Item.OnChange_SelectionSearch$vars"))());
vars.value.event_CurrentStringInLocal = event_CurrentStringIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:qvajWQOIUkqUNE8jyAWmbA:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.quJosii360SED9lZt91bfg/ClientActions.qvajWQOIUkqUNE8jyAWmbA:os9uhjtArExCcy49SNOVEA", "UBTConnect", "OnChange_SelectionSearch", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:BEnfTD+Tw0Syo4qiLOqx3Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:u8wfpRyZgEmhoGG2gTDdmg", callContext.id);
// Search_Selection = Event_CurrentString
model.variables.search_SelectionVar = vars.value.event_CurrentStringInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Ck5dkXzNiUeXL_PXFEkTow", callContext.id);
// Execute Action: Action_DefineOptions
controller._action_DefineOptions$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2w8X8+n5VkyXZ4CbeOSMHw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:qvajWQOIUkqUNE8jyAWmbA", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionList_Item.OnChange_SelectionSearch$vars", [{
name: "Event_CurrentString",
attrName: "event_CurrentStringInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._handler_InputEvent_OnReady$Action = function (idIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_InputEvent_OnReady");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionList_Item.Handler_InputEvent_OnReady$vars"))());
vars.value.idInLocal = idIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:1Ez8lyemAE2DZ4gzn_Jl9g:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.quJosii360SED9lZt91bfg/ClientActions.1Ez8lyemAE2DZ4gzn_Jl9g:Dro6H0GJhJLyPgJNA7SDQQ", "UBTConnect", "Handler_InputEvent_OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LuFKKFo33EykAg7vuv8H3A", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_a9NuGMYsU2n0kQoG8CRzA", callContext.id);
// Trigger Event: Event_Input_OnReady
return controller.event_Input_OnReady$Action(vars.value.idInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:W6_vnQZZuEOdDl3ULiV_3Q", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:1Ez8lyemAE2DZ4gzn_Jl9g", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:1Ez8lyemAE2DZ4gzn_Jl9g", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionList_Item.Handler_InputEvent_OnReady$vars", [{
name: "Id",
attrName: "idInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
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
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Vzb3qmRau0+fUi6U_omjEw:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.quJosii360SED9lZt91bfg/ClientActions.Vzb3qmRau0+fUi6U_omjEw:CQK7FRm6z5Q_cu5S6ytmLg", "UBTConnect", "OnClick_SelectionBack", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qPFEjhZvsUGgrNh7Dvy+ng", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4EjNxO2Sik68f50r8CmcLw", callContext.id);
// Trigger Event: OnBack
return controller.onBack$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nVUKdH66xUOLwSBTZ09muw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Vzb3qmRau0+fUi6U_omjEw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Vzb3qmRau0+fUi6U_omjEw", callContext.id);
throw ex;

});
};
Controller.prototype._selectionOption_ListNotEnabledOnClick$Action = function (clickedItemIdIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("SelectionOption_ListNotEnabledOnClick");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionList_Item.SelectionOption_ListNotEnabledOnClick$vars"))());
vars.value.clickedItemIdInLocal = clickedItemIdIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:9BVx4JnaKEWwjtGCz0hIWA:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.quJosii360SED9lZt91bfg/ClientActions.9BVx4JnaKEWwjtGCz0hIWA:s_lmzCdFopivSFYR6cWASA", "UBTConnect", "SelectionOption_ListNotEnabledOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0F7WzVUFWUupGztZOVy7lg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:DCZ5wDUlZEaH2D65iVcu5w", callContext.id);
// Execute Action: App_Subscription_ShowUpgradePopUp
model.flush();
return UBTConnect_UtilsController.default.app_Subscription_ShowUpgradePopUp$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:okQV5JKITk6Er93WIZsDKw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:9BVx4JnaKEWwjtGCz0hIWA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:9BVx4JnaKEWwjtGCz0hIWA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionList_Item.SelectionOption_ListNotEnabledOnClick$vars", [{
name: "ClickedItemId",
attrName: "clickedItemIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);

Controller.prototype.action_DefineOptions$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_DefineOptions$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.onChange_Selection$Action = function (selectedItemsIn, clickedItemIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onChange_Selection$Action, callContext, selectedItemsIn, clickedItemIdIn);

};
Controller.prototype.inputEvent_ClearString$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._inputEvent_ClearString$Action, callContext);

};
Controller.prototype.onChange_SelectionSearch$Action = function (event_CurrentStringIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onChange_SelectionSearch$Action, callContext, event_CurrentStringIn);

};
Controller.prototype.handler_InputEvent_OnReady$Action = function (idIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_InputEvent_OnReady$Action, callContext, idIn);

};
Controller.prototype.onClick_SelectionBack$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_SelectionBack$Action, callContext);

};
Controller.prototype.selectionOption_ListNotEnabledOnClick$Action = function (clickedItemIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._selectionOption_ListNotEnabledOnClick$Action, callContext, clickedItemIdIn);

};
Controller.prototype.event_Input_OnReady$Action = function () {
return Promise.resolve();
};
Controller.prototype.onChange$Action = function () {
return Promise.resolve();
};
Controller.prototype.onBack$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Jpw6vcM30keGIepdkjtS7A:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A:aO+UykmPPS6VEpIYdNjDCA", "UBTConnect", "App_CommonBlocks_Filter", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:quJosii360SED9lZt91bfg:/NRWebFlows.Jpw6vcM30keGIepdkjtS7A/NodesShownInESpaceTree.quJosii360SED9lZt91bfg:xBsHO_+IgrKRLQrzmWH__w", "UBTConnect", "FilterSheet_OptionList_Item", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:quJosii360SED9lZt91bfg", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Jpw6vcM30keGIepdkjtS7A", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "App_CommonBlocks_Filter/FilterSheet_OptionList_Item On Ready");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "App_CommonBlocks_Filter/FilterSheet_OptionList_Item On Parameters Changed");
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

define("UBTConnect.App_CommonBlocks_Filter.FilterSheet_OptionList_Item.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"O6AVJQi00ESIT1HhZy9Vcg": {
getter: function (varBag, idService) {
return varBag.listAnyVar.value;
}
},
"wpp2098TkESV9al57tU0Ig": {
getter: function (varBag, idService) {
return varBag.listFilterVar.value;
}
},
"Rt7HGAKEpEy3nafU_nj26A": {
getter: function (varBag, idService) {
return varBag.vars.value.selectedItemsInLocal;
}
},
"hmfKEosIJU+WDLkobhxaow": {
getter: function (varBag, idService) {
return varBag.vars.value.clickedItemIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"fzdBENTBAUuHW_mCVD1_wg": {
getter: function (varBag, idService) {
return varBag.vars.value.event_CurrentStringInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"h33_rKmz6EaqyT9Gjimisg": {
getter: function (varBag, idService) {
return varBag.vars.value.idInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"97lYbTRZ_kCln9qkMsy0DQ": {
getter: function (varBag, idService) {
return varBag.vars.value.clickedItemIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"NxV+TZvJzkGy7RMxYY7OJg": {
getter: function (varBag, idService) {
return varBag.model.variables.search_SelectionVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"PILATSnNxkCjR62Be9K+9g": {
getter: function (varBag, idService) {
return varBag.model.variables.optionsVar;
}
},
"5rwzFgaWQUG3SMlZFsHeUw": {
getter: function (varBag, idService) {
return varBag.model.variables.filter_Common_Control_ListIn;
}
},
"cOIAk6C380SevtO3+mA8bQ": {
getter: function (varBag, idService) {
return varBag.model.variables.showHeaderIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"0MZ83DPjs0SmhzpWtpnKhA": {
getter: function (varBag, idService) {
return varBag.model.variables.forceUpdateIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"CyjhzNPdB0yOGKaRzfnmBw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Selections"));
})(varBag.model, idService);
}
},
"H6aELmSPYEWeZUBS50pAnQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"pwisVN_83k+Oaq26nQgS5A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ShowHeader2"));
})(varBag.model, idService);
}
},
"jtsCjdgcGkyf4_s0f58_IQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"j4ggXGbJGUmjs_FvUF_qnA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"s+GP+J24x0W0ABvsTfbQgg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"SqreSyEetUyA_TUC8CxIZg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("SearchEmpty"));
})(varBag.model, idService);
}
},
"aKCoRnehtk6FrqLrguDqWQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"noiksfV_YkaFQnms3WoiAg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
