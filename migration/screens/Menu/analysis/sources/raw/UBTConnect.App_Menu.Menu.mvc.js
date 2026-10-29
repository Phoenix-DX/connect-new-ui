define("UBTConnect.App_Menu.Menu.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "UBTConnect.controller", "NavigationHandler.controller", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$model", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$model", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$model", "UBTConnect.App_Menu.Menu_List.mvc$model", "UBTConnect.App_Common.Version.mvc$model", "UBTConnect.App_Common.BottomBarMenu.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_CustomChoice.mvc$model", "UBTConnect.App_Cache.CacheControl_UserInfo_Wrapper.mvc$model", "UBTConnect.model$UI_ListMenuOptionList", "UBTConnect.model$BooleanDirectory_UserCurrentRecord", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnect.model$UI_MenuSectionRec", "UBTConnect.controller$Connect_Logout", "NavigationHandler.controller$ConfirmAction", "UBTConnect.referencesHealth$NavigationHandler", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnect_Utils.model$Menu_ItemRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$Menu_ItemList", "UBTConnect_Utils.controller$Menu_GetList", "UBTConnect_Utils.controller$OpenInApp_OpenExternalLink"], function (OutSystems, UBTConnectModel, UBTConnectLibraryModel, UBTConnectController, NavigationHandlerController, APIDomain_Directory_ISModel, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel, UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel, UBTConnect_App_Menu_Menu_List_mvcModel, UBTConnect_App_Common_Version_mvcModel, UBTConnect_App_Common_BottomBarMenu_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel, UBTConnect_App_Common_Blocks_PopupDialogs_Dialog_CustomChoice_mvcModel, UBTConnect_App_Cache_CacheControl_UserInfo_Wrapper_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("MenuOptionList", "menuOptionListVar", "MenuOptionList", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.UI_ListMenuOptionList());
}, false, UBTConnectModel.UI_ListMenuOptionList), 
this.attr("LocalCacheControl_UserInformation", "localCacheControl_UserInformationVar", "LocalCacheControl_UserInformation", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectModel.BooleanDirectory_UserCurrentRecord());
}, false, UBTConnectModel.BooleanDirectory_UserCurrentRecord)
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
Model._hasValidationWidgetsValue = (((((((((((UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_Columns_Two_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel.hasValidationWidgets) || UBTConnect_App_Menu_Menu_List_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_Version_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_BottomBarMenu_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_Blocks_PopupDialogs_Dialog_CustomChoice_mvcModel.hasValidationWidgets) || UBTConnect_App_Cache_CacheControl_UserInfo_Wrapper_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "App_Menu.Menu");
});
define("UBTConnect.App_Menu.Menu.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "NavigationHandler.controller", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Menu.Menu.mvc$model", "UBTConnect.App_Menu.Menu.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc$view", "UBTConnectLibrary.BasePatterns.Columns_Two.mvc$view", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$view", "UBTConnect.App_Menu.Menu_List.mvc$view", "UBTConnect.App_Common.Version.mvc$view", "UBTConnect.App_Common.BottomBarMenu.mvc$view", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_CustomChoice.mvc$view", "UBTConnect.App_Cache.CacheControl_UserInfo_Wrapper.mvc$view", "UBTConnect.model$UI_ListMenuOptionList", "UBTConnect.model$BooleanDirectory_UserCurrentRecord", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnect.model$UI_MenuSectionRec", "UBTConnect.controller$Connect_Logout", "NavigationHandler.controller$ConfirmAction", "UBTConnect.referencesHealth$NavigationHandler", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnect_Utils.model$Menu_ItemRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$Menu_ItemList", "UBTConnect_Utils.controller$Menu_GetList", "UBTConnect_Utils.controller$OpenInApp_OpenExternalLink"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, NavigationHandlerController, APIDomain_Directory_ISModel, UBTConnect_UtilsModel, UBTConnect_UtilsController, React, OSView, UBTConnect_App_Menu_Menu_mvc_model, UBTConnect_App_Menu_Menu_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnect_App_Menu_Menu_List_mvc_view, UBTConnect_App_Common_Version_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, UBTConnect_App_Common_Blocks_PopupDialogs_Dialog_CustomChoice_mvc_view, UBTConnect_App_Cache_CacheControl_UserInfo_Wrapper_mvc_view) {
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
        View.displayName = "App_Menu.Menu";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnect_App_Menu_Menu_List_mvc_view, UBTConnect_App_Common_Version_mvc_view, UBTConnect_App_Common_BottomBarMenu_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, UBTConnect_App_Common_Blocks_PopupDialogs_Dialog_CustomChoice_mvc_view, UBTConnect_App_Cache_CacheControl_UserInfo_Wrapper_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_App_Menu_Menu_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_App_Menu_Menu_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "Menu";
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
inputs: {
In_AlignTitleLeft: true
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
placeholder_Header_Title: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_TextOptions: model.getCachedValue(idService.getId("x6bVjVfy8EGJ9uwG1TF_XQ.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral0;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.heading5;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
In_Text: "Menu"
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
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
placeholder_Header_Right: PlaceholderContent.Empty,
headerContent: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("bbEB+wDdfU6rTCcLmEkzow.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.displayOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
rec.displayAttr = UBTConnectModel.staticEntities.uBT_Display.flex;
rec.justifyContentAttr = UBTConnectModel.staticEntities.uBT_JustifyContent.spaceBetween;
rec.flexDirectionAttr = UBTConnectModel.staticEntities.uBT_FlexDirection.column;
return rec;
}();
return rec;
}();
}),
ExtendedClasses: "full-height"
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
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_ConnectPatterns_SkeletonSection_mvc_view, {
inputs: {
In_IsLoading: !(model.variables.localCacheControl_UserInformationVar.isFetchedAttr)
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
placeholders: {
placeholder_LoadingSection: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("Header.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
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
name: "Header",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Two_mvc_view, {
inputs: {
ColumnOptions: model.getCachedValue(idService.getId("4CJxSMisOk2a1KrmJhAYMQ.ColumnOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
rec.columnBehaviourAttr = UBTConnectModel.staticEntities.uBT_ColumnBehaviour.reduceFirst;
rec.spacingSizeAttr = UBTConnectModel.staticEntities.uBT_Size.base;
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
left: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, {
inputs: {
EntityId: OS.BuiltinFunctions.longIntegerToText(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.memberIDAttr),
ImageSize: model.getCachedValue(idService.getId("t1FvsBKWZ0Kmc6Cnu_i8tQ.ImageSize"), function () {
return function () {
var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
rec.heightAttr = UBTConnectModel.staticEntities.uBT_ImageSize.small_40;
rec.widthAttr = UBTConnectModel.staticEntities.uBT_ImageSize.square;
return rec;
}();
}),
EntityType: UBTConnectModel.staticEntities.connect_Entity.member,
ImageURL: model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_MemberAttr.photoAttr.signedURLAttr
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
_dependencies: []
})];
}),
right: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_TextOptions: model.getCachedValue(idService.getId("+3JVH35zdkm5X0WohD+61A.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral9;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.base;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
In_Text: model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.fullNameAttr
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
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Menu/Menu/Link OnClick");
controller.onClick_EditYourAccount$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_Text: "Edit your account",
In_TextOptions: model.getCachedValue(idService.getId("5xsZOOBTT0WneWlwfCTDOg.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.primary;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.extraSmall;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
rec.isUnderlinedAttr = true;
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
uuid: "11",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.fullNameAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_MemberAttr.photoAttr.signedURLAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.memberIDAttr)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.fullNameAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_MemberAttr.photoAttr.signedURLAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.memberIDAttr)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.fullNameAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_MemberAttr.photoAttr.signedURLAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.memberIDAttr)]
}), React.createElement(UBTConnect_App_Menu_Menu_List_mvc_view, {
inputs: {
In_MenuSection: model.getCachedValue(idService.getId("+0WYu90YfUmgl3qrkOQnJg.In_MenuSection"), function () {
return function () {
var rec = new UBTConnectModel.UI_MenuSectionRec();
rec.menuOptionsAttr = model.variables.menuOptionListVar;
return rec;
}();
}, function () {
return model.variables.menuOptionListVar;
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onClick_MenuOption$Action: function (uI_ListMenuOptionIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Menu/Menu_List OnClick_MenuOption");
return controller.onClick_MenuOption$Action(uI_ListMenuOptionIn.idAttr, controller.callContext(eventHandlerContext));
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
uuid: "12",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("UAZWlxAs9UeNAuXPvq4n9A.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.marginSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.verticalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.small;
return rec;
}();
rec.textOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral7;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.doubleExtraSmall;
return rec;
}();
rec.displayOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
rec.displayAttr = UBTConnectModel.staticEntities.uBT_Display.flex;
rec.justifyContentAttr = UBTConnectModel.staticEntities.uBT_JustifyContent.center;
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
uuid: "13",
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_App_Common_Version_mvc_view, {
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
uuid: "14",
alias: "12"
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
_dependencies: [asPrimitiveValue(model.variables.menuOptionListVar), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.fullNameAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_MemberAttr.photoAttr.signedURLAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.memberIDAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.isFetchedAttr)]
})];
}),
bottom: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_App_Common_BottomBarMenu_mvc_view, {
inputs: {
ActiveItem: UBTConnectModel.staticEntities.connect_BottomBar_Items.menu,
isRootPage: true
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
uuid: "15",
alias: "13"
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
uuid: "16",
alias: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.menuOptionListVar), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.fullNameAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_MemberAttr.photoAttr.signedURLAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.memberIDAttr), asPrimitiveValue(model.variables.localCacheControl_UserInformationVar.isFetchedAttr)]
}), React.createElement(UBTConnect_App_Common_Blocks_PopupDialogs_Dialog_CustomChoice_mvc_view, {
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
name: "PopUp_Logout",
alias: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Header: new PlaceholderContent(function () {
return ["Logout"];
}),
placeholder_Body: new PlaceholderContent(function () {
return ["Are you sure you wish to logout?"];
}),
placeholder_ButtonLabel: new PlaceholderContent(function () {
return ["Yes"];
}),
placeholder_DismissButtonLabe: new PlaceholderContent(function () {
return ["No"];
})
},
_dependencies: []
}), React.createElement(UBTConnect_App_Cache_CacheControl_UserInfo_Wrapper_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
result$Action: function (userInformationIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Cache/CacheControl_UserInfo_Wrapper Result");
controller.cacheControl_UserInfo_WrapperResult$Action(userInformationIn, controller.callContext(eventHandlerContext));
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
}), React.createElement(UBTConnect_App_Common_Blocks_PopupDialogs_Dialog_CustomChoice_mvc_view, {
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
name: "Popup_SubmitPhotoRequest",
alias: "17"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Header: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "Photo Request?",
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
placeholder_Body: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "Are you sure you wish to request a photo update?",
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
placeholder_ButtonLabel: new PlaceholderContent(function () {
return ["Submit"];
}),
placeholder_DismissButtonLabe: new PlaceholderContent(function () {
return ["Cancel"];
})
},
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("UBTConnect.App_Menu.Menu.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "NavigationHandler.controller", "APIDomain_Directory_IS.model", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_Menu.Menu.mvc$debugger", "UBTConnect.App_Menu.controller", "UBTConnect.model$UI_ListMenuOptionList", "UBTConnect.model$BooleanDirectory_UserCurrentRecord", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnect.model$UI_MenuSectionRec", "UBTConnect.controller$Connect_Logout", "NavigationHandler.controller$ConfirmAction", "UBTConnect.referencesHealth$NavigationHandler", "APIDomain_Directory_IS.model$Directory_UserCurrentRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnect_Utils.model$Menu_ItemRec", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnect.model$Menu_ItemList", "UBTConnect_Utils.controller$Menu_GetList", "UBTConnect_Utils.controller$OpenInApp_OpenExternalLink"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, NavigationHandlerController, APIDomain_Directory_ISModel, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_Menu_Menu_mvc_Debugger, _flow_UBTConnect_App_MenuController) {
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
Controller.prototype.requestPhotoUpdate$ServerAction = function (callContext) {
var controller = this.controller;
return controller.callServerAction("RequestPhotoUpdate", "screenservices/UBTConnect/App_Menu/Menu/ActionRequestPhotoUpdate", "zITZYLadkGVfODtSTCr0Og", {}, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("UBTConnect.App_Menu.Menu$ActionRequestPhotoUpdate"))();
executeServerActionResult.out_IsSuccessOut = OS.DataConversion.ServerDataConverter.from(outputs.Out_IsSuccess, OS.DataTypes.DataTypes.Boolean);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("UBTConnect.App_Menu.Menu$ActionRequestPhotoUpdate", [{
name: "Out_IsSuccess",
attrName: "out_IsSuccessOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._action_Logout$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Action_Logout");
callContext = controller.callContext(callContext);
var confirmActionVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.confirmActionVar = confirmActionVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Mek_J7MGMUSJcolWKoIg4w:/NRWebFlows.MYece3hSIUew7QsUSQXJdw/NodesShownInESpaceTree.pKXc9K7wn0uQF60hKH22Xg/ClientActions.Mek_J7MGMUSJcolWKoIg4w:N2DgrLjQysTMP5GgU1rbCg", "UBTConnect", "Action_Logout", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Wjghw4UZc0aQPTndz08s+g", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:s9AynYo0HEWMnbDSXXa5jw", callContext.id);
// Execute Action: ConfirmAction
model.flush();
return NavigationHandlerController.default.confirmAction$Action(idService.getId("PopUp_Logout"), callContext).then(function (value) {
confirmActionVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:P052n6vj60+M31plA1+KHA", callContext.id) && confirmActionVar.value.isConfirmedOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:aBuaGvayQkqXG1US1eZPNQ", callContext.id);
// Execute Action: Connect_Logout
model.flush();
return UBTConnectController.default.connect_Logout$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UilNene6eUGho5E4vkKn9Q", callContext.id);
// Destination: /UBTConnect/HomeFeed
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HomeFeed", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Fade), callContext, true));
});
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7WiL4uEXK0a6rq7fsdJVAQ", callContext.id);
}

});
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Mek_J7MGMUSJcolWKoIg4w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Mek_J7MGMUSJcolWKoIg4w", callContext.id);
throw ex;

});
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
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Menu.Menu.CacheControl_UserInfo_WrapperResult$vars"))());
vars.value.userInformationInLocal = userInformationIn.clone();
var listIndexOf_SubscriptionsAndPaymentsVar = new OS.DataTypes.VariableHolder();
var listIndexOf_RequestPhotoUpdateVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.listIndexOf_SubscriptionsAndPaymentsVar = listIndexOf_SubscriptionsAndPaymentsVar;
varBag.listIndexOf_RequestPhotoUpdateVar = listIndexOf_RequestPhotoUpdateVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:5wzgOn9h2UuyCj2zyIKPqg:/NRWebFlows.MYece3hSIUew7QsUSQXJdw/NodesShownInESpaceTree.pKXc9K7wn0uQF60hKH22Xg/ClientActions.5wzgOn9h2UuyCj2zyIKPqg:arv6IHHDHhLZPUq3tKxDgw", "UBTConnect", "CacheControl_UserInfo_WrapperResult", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:J2laabCZDEOt7h2QRpnQcA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ku3QNbBrhUOCoGRmmyaW0Q", callContext.id);
// Execute Action: ListIndexOf_SubscriptionsAndPayments
listIndexOf_SubscriptionsAndPaymentsVar.value = OS.SystemActions.listIndexOf(model.variables.menuOptionListVar, function (p) {
return (p.idAttr === UBTConnectModel.staticEntities.connect_Menu_Items.subscriptionAndPayments);
}, callContext);

if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1g8iYrD2o0KadCsM_vyzHg", callContext.id) && ((listIndexOf_SubscriptionsAndPaymentsVar.value.positionOut) !== (-1)))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MolfoAzEj0qzGddrFpfdQA", callContext.id);
// MenuOptionList[ListIndexOf_SubscriptionsAndPayments.Position].IconRight = OpenNew
model.variables.menuOptionListVar.getItem(listIndexOf_SubscriptionsAndPaymentsVar.value.positionOut).iconRightAttr = UBTConnectModel.staticEntities.uBT_Icons2.openNew;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MolfoAzEj0qzGddrFpfdQA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// MenuOptionList[ListIndexOf_SubscriptionsAndPayments.Position].IconRightText = UserInformation.Directory_UserCurrent_Subscription.SubscriptionType
model.variables.menuOptionListVar.getItem(listIndexOf_SubscriptionsAndPaymentsVar.value.positionOut).iconRightTextAttr = vars.value.userInformationInLocal.directory_UserCurrent_SubscriptionAttr.subscriptionTypeAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MolfoAzEj0qzGddrFpfdQA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// MenuOptionList[ListIndexOf_SubscriptionsAndPayments.Position].IconRightLoading = False
model.variables.menuOptionListVar.getItem(listIndexOf_SubscriptionsAndPaymentsVar.value.positionOut).iconRightLoadingAttr = false;
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1B9jqdNICkuBW_+p_mmr0g", callContext.id);
// LocalCacheControl_UserInformation.Directory_UserCurrent = UserInformation
model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr = vars.value.userInformationInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1B9jqdNICkuBW_+p_mmr0g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// LocalCacheControl_UserInformation.isFetched = True
model.variables.localCacheControl_UserInformationVar.isFetchedAttr = true;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:T0_ETfQFDkG2PeSyit8o4g", callContext.id);
// Execute Action: ListIndexOf_RequestPhotoUpdate
listIndexOf_RequestPhotoUpdateVar.value = OS.SystemActions.listIndexOf(model.variables.menuOptionListVar, function (p) {
return (p.idAttr === UBTConnectModel.staticEntities.connect_Menu_Items.requestPhotoUpdate);
}, callContext);

if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:A15pUvT5UU6mZiWKr0L_hw", callContext.id) && ((listIndexOf_RequestPhotoUpdateVar.value.positionOut) !== (-1)))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zCgP4s4kzkSlBqkhvzA4aw", callContext.id);
// MenuOptionList[ListIndexOf_RequestPhotoUpdate.Position].IsLoading = False
model.variables.menuOptionListVar.getItem(listIndexOf_RequestPhotoUpdateVar.value.positionOut).isLoadingAttr = false;
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:oPBBlriC2E6v0wNSueNTtQ", callContext.id) && !((vars.value.userInformationInLocal.directory_UserCurrent_MemberAttr.isHouseholderAttr || vars.value.userInformationInLocal.directory_UserCurrent_MemberAttr.spouseIsHouseholderAttr)))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PIMoC8xNcESHYhgo5YT0dA", callContext.id);
// Execute Action: ListRemove
OS.SystemActions.listRemove(model.variables.menuOptionListVar, listIndexOf_RequestPhotoUpdateVar.value.positionOut, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:B7YOPA7LfkWx5pJERb98_w", callContext.id);
return ;

}

}

// >>
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:R0mg4j741kWyc4LQ0ZNXAA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:B7YOPA7LfkWx5pJERb98_w", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:5wzgOn9h2UuyCj2zyIKPqg", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.App_Menu.Menu.CacheControl_UserInfo_WrapperResult$vars", [{
name: "UserInformation",
attrName: "userInformationInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new APIDomain_Directory_ISModel.Directory_UserCurrentRec();
},
complexType: APIDomain_Directory_ISModel.Directory_UserCurrentRec
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
var menu_GetListVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.menu_GetListVar = menu_GetListVar;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:3CkCQptqVU22TFSBffxVAA:/NRWebFlows.MYece3hSIUew7QsUSQXJdw/NodesShownInESpaceTree.pKXc9K7wn0uQF60hKH22Xg/ClientActions.3CkCQptqVU22TFSBffxVAA:LWQ+UFQjAwqmxNjAmuVv7Q", "UBTConnect", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NNRYi165JkSeYzqwNIb7_g", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8kzbQyxE5UmzAGZKw7wnpw", callContext.id);
// Execute Action: Menu_GetList
menu_GetListVar.value = UBTConnect_UtilsController.default.menu_GetList$Action(callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tEvSmx2_3k2+HCN30lhwAw", callContext.id);
// MenuOptionList = Menu_GetList.MenuItemsList
model.variables.menuOptionListVar = OS.DataConversion.JSConversions.typeConvertRecordList(menu_GetListVar.value.menuItemsListOut, new UBTConnectModel.UI_ListMenuOptionList(), function (source, target) {
target.idAttr = source.menuItemIdAttr;
target.iconIdAttr = source.uBTIconAttr;
target.labelAttr = source.labelAttr;
target.iconRightTextAttr = (((source.menuItemIdAttr === UBTConnectModel.staticEntities.connect_Menu_Items.subscriptionAndPayments)) ? ("Dummy") : (""));
target.iconRightLoadingAttr = (source.menuItemIdAttr === UBTConnectModel.staticEntities.connect_Menu_Items.subscriptionAndPayments);
target.isLoadingAttr = (source.menuItemIdAttr === UBTConnectModel.staticEntities.connect_Menu_Items.requestPhotoUpdate);
return target;
});
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WYw6qPX8FEy4phNuHfJHGQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:3CkCQptqVU22TFSBffxVAA", callContext.id);
}

};
Controller.prototype._onClick_EditYourAccount$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_EditYourAccount");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:77dmXySOXUyO4X0EZELtkQ:/NRWebFlows.MYece3hSIUew7QsUSQXJdw/NodesShownInESpaceTree.pKXc9K7wn0uQF60hKH22Xg/ClientActions.77dmXySOXUyO4X0EZELtkQ:k3QEcy1tP5aoHiFJPZkefg", "UBTConnect", "OnClick_EditYourAccount", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:tehMt_GpFku_nlPWb_b_oA", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:5p5Q+MslZ0uMsa4_O6sEGA", callContext.id) && model.variables.localCacheControl_UserInformationVar.isFetchedAttr)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:8uPonf6WeEGg8catz9av_w", callContext.id);
// Destination: /UBTConnect/Profile
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/Profile", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jLYfUeVQDEmAORm+Iact8g", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:77dmXySOXUyO4X0EZELtkQ", callContext.id);
}

};
Controller.prototype._onClick_MenuOption$Action = function (idIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnClick_MenuOption");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Menu.Menu.OnClick_MenuOption$vars"))());
vars.value.idInLocal = idIn;
var requestPhotoUpdateVar = new OS.DataTypes.VariableHolder();
var confirmActionVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.requestPhotoUpdateVar = requestPhotoUpdateVar;
varBag.confirmActionVar = confirmActionVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:QVJ007qD+025NvHjRLNuHw:/NRWebFlows.MYece3hSIUew7QsUSQXJdw/NodesShownInESpaceTree.pKXc9K7wn0uQF60hKH22Xg/ClientActions.QVJ007qD+025NvHjRLNuHw:C_5y0mxobKcB5J_G2+sxQA", "UBTConnect", "OnClick_MenuOption", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:nAJZiiS5aUmY01OcL4tZ1w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Tf6doqiN_kWXSXR_CZ_VSQ", callContext.id) && (vars.value.idInLocal === UBTConnectModel.staticEntities.connect_Menu_Items.logOut))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2e0GeSYYpUmQZ8HEdtUfAg", callContext.id);
// Execute Action: Action_Logout
return controller._action_Logout$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2iuG5inPBkGYO9aNwhyyhQ", callContext.id);
});
} else {
return OS.Flow.executeSequence(function () {
if((vars.value.idInLocal === UBTConnectModel.staticEntities.connect_Menu_Items.contactUs)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:X3Ib8+DVjUisa9Pa+R706Q", callContext.id);
// Destination: /UBTConnect/ContactUsMenu
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/ContactUsMenu", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
return OS.Flow.executeSequence(function () {
if((vars.value.idInLocal === UBTConnectModel.staticEntities.connect_Menu_Items.termsAndPolicies)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:B3xMcg1T7EeObfRVGZxBsw", callContext.id);
// Destination: /UBTConnect/TermsAndPoliciesMenu
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/TermsAndPoliciesMenu", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
return OS.Flow.executeSequence(function () {
if((vars.value.idInLocal === UBTConnectModel.staticEntities.connect_Menu_Items.pINAndBiometrics)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:e90gu26t8UejcWq5gHAP6Q", callContext.id);
// Destination: /UBTConnect/PINBiometricsMenu
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/PINBiometricsMenu", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
return OS.Flow.executeSequence(function () {
if((vars.value.idInLocal === UBTConnectModel.staticEntities.connect_Menu_Items.subscriptionAndPayments)) {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1FraWb7UvUewGhxGBgKwig", callContext.id) && model.variables.localCacheControl_UserInformationVar.isFetchedAttr)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jBff5bVDdUSQnqSMy4+ObQ", callContext.id);
// Execute Action: OpenInApp_OpenExternalLink
UBTConnect_UtilsController.default.openInApp_OpenExternalLink$Action(model.variables.localCacheControl_UserInformationVar.directory_UserCurrentAttr.directory_UserCurrent_SubscriptionAttr.subscriptionManageLinkAttr, true, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CiuWYgUu2UyoPMSCl_T6cg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:IF_lc7p5uUmlP5SqFg1rkg", callContext.id);
}

} else {
return OS.Flow.executeSequence(function () {
if((vars.value.idInLocal === UBTConnectModel.staticEntities.connect_Menu_Items.requestPhotoUpdate)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ycfn5U0xj0GTLTfQZa3WPQ", callContext.id);
// Execute Action: ConfirmAction
model.flush();
return NavigationHandlerController.default.confirmAction$Action(idService.getId("Popup_SubmitPhotoRequest"), callContext).then(function (value) {
confirmActionVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:el+rPvPZ+USvN7XN_RXo+A", callContext.id) && confirmActionVar.value.isConfirmedOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:C_2PY6Kpyk2HZiyClVbjIQ", callContext.id);
// Execute Action: RequestPhotoUpdate
model.flush();
return controller.requestPhotoUpdate$ServerAction(callContext).then(function (value) {
requestPhotoUpdateVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:04kFTTSeaUWHWNj7i8paRA", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage("Your update photo request has been submitted.", /*Success*/ 1);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sT+1zWM88kmmlP8uhdKBfw", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:sT+1zWM88kmmlP8uhdKBfw", callContext.id);
}

});
});
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uwDICXV5D0yzvnB+2gv8Aw", callContext.id);
OS.FeedbackMessageService.showFeedbackMessage(("Go to " + vars.value.idInLocal), /*Info*/ 0);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CpzGr6dmF0yd3OUT6R0dPw", callContext.id);
}

});
}

});
}

});
}

});
}

});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:QVJ007qD+025NvHjRLNuHw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:QVJ007qD+025NvHjRLNuHw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.App_Menu.Menu.OnClick_MenuOption$vars", [{
name: "Id",
attrName: "idInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);

Controller.prototype.action_Logout$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._action_Logout$Action, callContext);

};
Controller.prototype.cacheControl_UserInfo_WrapperResult$Action = function (userInformationIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._cacheControl_UserInfo_WrapperResult$Action, callContext, userInformationIn);

};
Controller.prototype.screenEvent_OnInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._screenEvent_OnInitialize$Action, callContext);

};
Controller.prototype.onClick_EditYourAccount$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_EditYourAccount$Action, callContext);

};
Controller.prototype.onClick_MenuOption$Action = function (idIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_MenuOption$Action, callContext, idIn);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:MYece3hSIUew7QsUSQXJdw:/NRWebFlows.MYece3hSIUew7QsUSQXJdw:rb6xGIB+BVZXljBZL+G3Tw", "UBTConnect", "App_Menu", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:pKXc9K7wn0uQF60hKH22Xg:/NRWebFlows.MYece3hSIUew7QsUSQXJdw/NodesShownInESpaceTree.pKXc9K7wn0uQF60hKH22Xg:noF6TFGEIfD8D07Ktd8Tcg", "UBTConnect", "Menu", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:pKXc9K7wn0uQF60hKH22Xg", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:MYece3hSIUew7QsUSQXJdw", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "App_Menu/Menu On Initialize");
return controller.screenEvent_OnInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return _flow_UBTConnect_App_MenuController.default.handleError(ex, this.callContext());
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

define("UBTConnect.App_Menu.Menu.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"s9AynYo0HEWMnbDSXXa5jw": {
getter: function (varBag, idService) {
return varBag.confirmActionVar.value;
}
},
"7xf48+dK90+0QMlK884UMQ": {
getter: function (varBag, idService) {
return varBag.vars.value.userInformationInLocal;
}
},
"ku3QNbBrhUOCoGRmmyaW0Q": {
getter: function (varBag, idService) {
return varBag.listIndexOf_SubscriptionsAndPaymentsVar.value;
}
},
"T0_ETfQFDkG2PeSyit8o4g": {
getter: function (varBag, idService) {
return varBag.listIndexOf_RequestPhotoUpdateVar.value;
}
},
"8kzbQyxE5UmzAGZKw7wnpw": {
getter: function (varBag, idService) {
return varBag.menu_GetListVar.value;
}
},
"y897xgzHGUCovKFehSZJUA": {
getter: function (varBag, idService) {
return varBag.vars.value.idInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"C_2PY6Kpyk2HZiyClVbjIQ": {
getter: function (varBag, idService) {
return varBag.requestPhotoUpdateVar.value;
}
},
"ycfn5U0xj0GTLTfQZa3WPQ": {
getter: function (varBag, idService) {
return varBag.confirmActionVar.value;
}
},
"XwmFX5xGN0qrYG7I5UcNWg": {
getter: function (varBag, idService) {
return varBag.model.variables.menuOptionListVar;
}
},
"t6p45l5gVE2_aV3rDgOgCQ": {
getter: function (varBag, idService) {
return varBag.model.variables.localCacheControl_UserInformationVar;
}
},
"HCNmpsm5qE2ptPyZNAhy2Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Title"));
})(varBag.model, idService);
}
},
"RCYnMT6p4keXLfCE8G3OJw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Right"));
})(varBag.model, idService);
}
},
"R5ZkyEsnAU6CMz1SH06WjA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"fNdAukCJSkaBIw5fZ0E49g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"iZbyyRCyW06w5SXyEuKlKA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"SoCubEwMaE2cq4vGMjh_Yw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_LoadingSection"));
})(varBag.model, idService);
}
},
"v3AiJu0xWk+PVfkOmOqK8w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Header"));
})(varBag.model, idService);
}
},
"SPZLYj5Q2E6dfrILx9LX6Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"gQKWf31h8U6WspP_bgr1yQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"8eunSprs7kS2heUH1DUq9w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"INyCpKuQfEOoVdqj81ll_A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"gKDDGQgqb0WVdFuf6toGXQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
},
"yR19YDquL0OsNkCEEXf4_g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
})(varBag.model, idService);
}
},
"bJGFw8cPckSs9fgnpuRDpA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PopUp_Logout"));
})(varBag.model, idService);
}
},
"Nqv_XkWmj0CNudtQ_WnE0Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header"));
})(varBag.model, idService);
}
},
"qAFl3VSnYkyjkuQw57wRCA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Body"));
})(varBag.model, idService);
}
},
"h1jlUDofy0eczXbOg5G3KA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_ButtonLabel"));
})(varBag.model, idService);
}
},
"zLiUDPaysU6atghTOyCQKA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_DismissButtonLabe"));
})(varBag.model, idService);
}
},
"H8D1IqiFK06F2TGY_Aq7VA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Popup_SubmitPhotoRequest"));
})(varBag.model, idService);
}
},
"gDDhzEC2mEKslXuslWI6Qw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header"));
})(varBag.model, idService);
}
},
"tYOoQGwV5UCbJe_jn8dO9Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Body"));
})(varBag.model, idService);
}
},
"h8NBdIRLWkupCBonun13Qw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_ButtonLabel"));
})(varBag.model, idService);
}
},
"JEojwy_0rUana+BUG+O8XA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_DismissButtonLabe"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
