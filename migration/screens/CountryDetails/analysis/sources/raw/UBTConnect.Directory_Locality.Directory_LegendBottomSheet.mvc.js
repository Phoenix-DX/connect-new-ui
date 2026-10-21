define("UBTConnect.Directory_Locality.Directory_LegendBottomSheet.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect_Utils.controller", "UBTConnectLibrary.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "NavigationHandler.NavigationHandler.PreventBackNavigation.mvc$model", "UBTConnect_Utils.controller$GetEntityType_Icon", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetClose"], function (OutSystems, UBTConnectModel, UBTConnect_UtilsController, UBTConnectLibraryModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTConnectLibrary_ConnectPatterns_BottomSheet_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_ConnectPatterns_IconText_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel, NavigationHandler_NavigationHandler_PreventBackNavigation_mvcModel) {
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
this.attr("IsOpened", "isOpenedVar", "IsOpened", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("ShowLocalities", "showLocalitiesIn", "ShowLocalities", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, false), 
this.attr("_showLocalitiesInDataFetchStatus", "_showLocalitiesInDataFetchStatus", "_showLocalitiesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (((((UBTConnectLibrary_ConnectPatterns_BottomSheet_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_IconText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets) || NavigationHandler_NavigationHandler_PreventBackNavigation_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("ShowLocalities" in inputs) {
this.variables.showLocalitiesIn = inputs.ShowLocalities;
if("_showLocalitiesInDataFetchStatus" in inputs) {
this.variables._showLocalitiesInDataFetchStatus = inputs._showLocalitiesInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Directory_Locality.Directory_LegendBottomSheet");
});
define("UBTConnect.Directory_Locality.Directory_LegendBottomSheet.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "UBTConnectLibrary.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Locality.Directory_LegendBottomSheet.mvc$model", "UBTConnect.Directory_Locality.Directory_LegendBottomSheet.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.ConnectPatterns.BottomSheet.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "NavigationHandler.NavigationHandler.PreventBackNavigation.mvc$view", "UBTConnect_Utils.controller$GetEntityType_Icon", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetClose"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, UBTConnectLibraryModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, UBTConnect_Directory_Locality_Directory_LegendBottomSheet_mvc_model, UBTConnect_Directory_Locality_Directory_LegendBottomSheet_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view) {
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
        View.displayName = "Directory_Locality.Directory_LegendBottomSheet";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/UBTConnect.Directory_Locality.Directory_LegendBottomSheet.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Directory_Locality_Directory_LegendBottomSheet_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Directory_Locality_Directory_LegendBottomSheet_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_ConnectPatterns_BottomSheet_mvc_view, {
inputs: {
ShowBackButton: false,
Title: "About the numbers",
ExtendedClasses: "directory-legend-explanation",
ShowHeader: true,
Content_BackgroundColorId: UBTConnectModel.staticEntities.uBT_Color.neutral0,
Content_Padding: model.getCachedValue(idService.getId("4niMauQcF0mevbxa2uPFzQ.Content_Padding"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
rec.bottomSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.doubleExtraLarge;
return rec;
}();
})
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("LegendItem_Member.Options"), function () {
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
name: "LegendItem_Member",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
inputs: {
In_JustifyText: true,
TextOptions: model.getCachedValue(idService.getId("Members.TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral7;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
return rec;
}();
}),
SpacingSize: UBTConnectModel.staticEntities.uBT_Size.extraSmall,
Text: "Brethren"
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
name: "Members",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.purple,
In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.nonStandard_16,
In_IconId: model.getCachedValue(idService.getId("3nQIm1Z3dkOW8CJqMaVJlQ.In_IconId"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnect_UtilsController.default.getEntityType_Icon$Action(UBTConnectModel.staticEntities.connect_Entity.member, callContext).iconIdOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
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
_dependencies: []
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("LegendItem_Houses.Options"), function () {
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
name: "LegendItem_Houses",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
inputs: {
Text: "Households",
TextOptions: model.getCachedValue(idService.getId("Houses.TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral7;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
return rec;
}();
}),
SpacingSize: UBTConnectModel.staticEntities.uBT_Size.extraSmall,
In_JustifyText: true
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
name: "Houses",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.primary,
In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.nonStandard_16,
In_IconId: model.getCachedValue(idService.getId("mbKEhfuCh0SoK1ou2LO55Q.In_IconId"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnect_UtilsController.default.getEntityType_Icon$Action(UBTConnectModel.staticEntities.connect_Entity.household, callContext).iconIdOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
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
alias: "7"
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
Options: model.getCachedValue(idService.getId("LegendItem_Localities.Options"), function () {
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
name: "LegendItem_Localities",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [$if(model.variables.showLocalitiesIn, false, this, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
inputs: {
In_JustifyText: true,
Text: "Localities",
SpacingSize: UBTConnectModel.staticEntities.uBT_Size.extraSmall,
TextOptions: model.getCachedValue(idService.getId("Localities.TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral7;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
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
name: "Localities",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_IconId: model.getCachedValue(idService.getId("Kemc7v+pYkSCT7MbDbNbcw.In_IconId"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnect_UtilsController.default.getEntityType_Icon$Action(UBTConnectModel.staticEntities.connect_Entity.locality, callContext).iconIdOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}),
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.error,
In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.nonStandard_16
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
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
InlineIcon: model.getCachedValue(idService.getId("Nh4RR5rrB0izVn5mvvfdSQ.InlineIcon"), function () {
return function () {
var rec = new UBTConnectLibraryModel.InlineIconRec();
rec.iconIdAttr = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnect_UtilsController.default.getEntityType_Icon$Action(UBTConnectModel.staticEntities.connect_Entity.supperMeetings_aka_Subdivisions, callContext).iconIdOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
rec.iconSizeIdAttr = UBTConnectModel.staticEntities.uBT_IconsSize.nonStandard_16;
rec.spacingSizeAttr = UBTConnectModel.staticEntities.uBT_Size.extraSmall;
rec.iconColorIdAttr = UBTConnectModel.staticEntities.uBT_Color.orange;
return rec;
}();
}),
In_TextOptions: model.getCachedValue(idService.getId("Nh4RR5rrB0izVn5mvvfdSQ.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral7;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
return rec;
}();
}),
In_Text: "Supper Meetings",
InJustifyText: true
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
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables._showLocalitiesInDataFetchStatus), asPrimitiveValue(model.variables.showLocalitiesIn)]
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("LegendItem_Brothers.Options"), function () {
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
name: "LegendItem_Brothers",
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
inputs: {
In_JustifyText: true,
Text: "Brothers",
SpacingSize: UBTConnectModel.staticEntities.uBT_Size.extraSmall,
TextOptions: model.getCachedValue(idService.getId("Brothers.TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral7;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
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
name: "Brothers",
alias: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.blueNonStandarDarker,
In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.nonStandard_16,
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.boy
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
alias: "14"
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
Options: model.getCachedValue(idService.getId("LegendItem_Sisters.Options"), function () {
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
name: "LegendItem_Sisters",
alias: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
inputs: {
In_JustifyText: true,
SpacingSize: UBTConnectModel.staticEntities.uBT_Size.extraSmall,
TextOptions: model.getCachedValue(idService.getId("Sisters.TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral7;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.small;
return rec;
}();
}),
Text: "Sisters"
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
name: "Sisters",
alias: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.girl,
In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.nonStandard_16,
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.pinkNonStandardDarker
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
uuid: "16",
alias: "17"
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
}),
footer: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables._showLocalitiesInDataFetchStatus), asPrimitiveValue(model.variables.showLocalitiesIn)]
}), $if(model.variables.isOpenedVar, false, this, function () {
return [React.createElement(NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
backNavigationPrevented$Action: function (backNavigationEventIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "NavigationHandler/PreventBackNavigation BackNavigationPrevented");
controller.bottomSheetOnClose$Action(controller.callContext(eventHandlerContext));
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
uuid: "17",
alias: "18"
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
define("UBTConnect.Directory_Locality.Directory_LegendBottomSheet.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnect_Utils.controller", "UBTConnectLibrary.model", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.Directory_Locality.Directory_LegendBottomSheet.mvc$debugger", "UBTConnect_Utils.controller$GetEntityType_Icon", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnect_Utils", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "OutSystemsUI_2_23.model$ErrorMessageRec", "UBTConnect.referencesHealth$OutSystemsUI_2_23", "OutSystemsUI_2_23.controller$BottomSheetClose"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnect_UtilsController, UBTConnectLibraryModel, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_Directory_Locality_Directory_LegendBottomSheet_mvc_Debugger) {
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
Controller.prototype._bottomSheetInitialized$Action = function (idIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("BottomSheetInitialized");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Locality.Directory_LegendBottomSheet.BottomSheetInitialized$vars"))());
vars.value.idInLocal = idIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:7F5ICtYzRkel0c3R6cCawg:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.WidVyy_CXE+NhT5Lozr81g/ClientActions.7F5ICtYzRkel0c3R6cCawg:aVNF2JG+xZ+m3FlIX7RZQg", "UBTConnect", "BottomSheetInitialized", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:x_Dh8FsSmkWYeQrHsJwy2A", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hXr_JlI3EUqh38TtMpKYyg", callContext.id);
// BottomSheetId = Id
model.variables.bottomSheetIdVar = vars.value.idInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:s4WC6yWRsUWSW+jhW69jVg", callContext.id);
// Trigger Event: SheetInitialized
return controller.sheetInitialized$Action(vars.value.idInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:cGVoewJnzUyCKw5UY3M6Xw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:7F5ICtYzRkel0c3R6cCawg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:7F5ICtYzRkel0c3R6cCawg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.Directory_Locality.Directory_LegendBottomSheet.BottomSheetInitialized$vars", [{
name: "Id",
attrName: "idInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
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
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:Et9pQhjqM02HMQpO8goY7w:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.WidVyy_CXE+NhT5Lozr81g/ClientActions.Et9pQhjqM02HMQpO8goY7w:CWrympKO0bLHzm92YdHGoQ", "UBTConnect", "BottomSheetOnClose", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:dCNzLrFC70+lTEpfVyEAwg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4OzxP0HWk0e5iZZ2hQhHzg", callContext.id);
// Execute Action: BottomSheetOnToggle
controller._bottomSheetOnToggle$Action(false, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:hVPGv58l6UykoATs3m0imA", callContext.id);
// Execute Action: BottomSheetClose
bottomSheetCloseVar.value = OutSystemsUI_2_23Controller.default.bottomSheetClose$Action(model.variables.bottomSheetIdVar, callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NDOUYQzUn0S+tYLJW9Ml_Q", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:Et9pQhjqM02HMQpO8goY7w", callContext.id);
}

};
Controller.prototype._bottomSheetOnToggle$Action = function (isOpenIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("BottomSheetOnToggle");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.Directory_Locality.Directory_LegendBottomSheet.BottomSheetOnToggle$vars"))());
vars.value.isOpenInLocal = isOpenIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:o0yo9RGnBkGMMnQqTN_Zng:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.WidVyy_CXE+NhT5Lozr81g/ClientActions.o0yo9RGnBkGMMnQqTN_Zng:mJseRPmRBHH9UkwAeoADPA", "UBTConnect", "BottomSheetOnToggle", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ifFDg1s0K0COHOUsjRzycA", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:qGAsCtOmikm_JMMulnn7gw", callContext.id);
// IsOpened = IsOpen
model.variables.isOpenedVar = vars.value.isOpenInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:z68x3FMusUW6offMR7U_Og", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:o0yo9RGnBkGMMnQqTN_Zng", callContext.id);
}

};
Controller.registerVariableGroupType("UBTConnect.Directory_Locality.Directory_LegendBottomSheet.BottomSheetOnToggle$vars", [{
name: "IsOpen",
attrName: "isOpenInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);

Controller.prototype.bottomSheetInitialized$Action = function (idIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._bottomSheetInitialized$Action, callContext, idIn);

};
Controller.prototype.bottomSheetOnClose$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._bottomSheetOnClose$Action, callContext);

};
Controller.prototype.bottomSheetOnToggle$Action = function (isOpenIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._bottomSheetOnToggle$Action, callContext, isOpenIn);

};
Controller.prototype.sheetInitialized$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:BmZ1TBE6pkiXu8fkupJ8UQ:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ:FwAkjRuoCVCfL_Y3sNenPQ", "UBTConnect", "Directory_Locality", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:WidVyy_CXE+NhT5Lozr81g:/NRWebFlows.BmZ1TBE6pkiXu8fkupJ8UQ/NodesShownInESpaceTree.WidVyy_CXE+NhT5Lozr81g:aZKNd9bluQsUocq5jXT3pA", "UBTConnect", "Directory_LegendBottomSheet", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:WidVyy_CXE+NhT5Lozr81g", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:BmZ1TBE6pkiXu8fkupJ8UQ", callContext.id);
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
return UBTConnectController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLanguageResources);
});

define("UBTConnect.Directory_Locality.Directory_LegendBottomSheet.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"IWw9k2adF02rc7+1oRhBvg": {
getter: function (varBag, idService) {
return varBag.vars.value.idInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"hVPGv58l6UykoATs3m0imA": {
getter: function (varBag, idService) {
return varBag.bottomSheetCloseVar.value;
}
},
"Us214hoTTEGql7JeRMRMgQ": {
getter: function (varBag, idService) {
return varBag.vars.value.isOpenInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Ti_Q67GrCU+jz0htI4PAbQ": {
getter: function (varBag, idService) {
return varBag.model.variables.bottomSheetIdVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"sDX2NeS+okmLRI04Cvgh9A": {
getter: function (varBag, idService) {
return varBag.model.variables.isOpenedVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"EnRw6_ERFUumYSPxKojW7w": {
getter: function (varBag, idService) {
return varBag.model.variables.showLocalitiesIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"SkVMEE8EykOok7H2TZOhXQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"cJFgKh4skUOf6WxDZ81ygQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("LegendItem_Member"));
})(varBag.model, idService);
}
},
"Gtpbq7zezkmdvvadCms80Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"XzRaq3svaUGuV670v8tz_w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Members"));
})(varBag.model, idService);
}
},
"DVxXm47wUE6HpqOS4GglHg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"YHiynH4JpUe_BljwdbobIw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("LegendItem_Houses"));
})(varBag.model, idService);
}
},
"iPlQFduxmUKOx1RWFOr0qA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"w6Kne7gIi0+MyVmNqJTPzw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Houses"));
})(varBag.model, idService);
}
},
"U_QeJwnOfkesPLVZIo4XuQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"aFchk+GUnUSFO9btbxAUxA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("LegendItem_Localities"));
})(varBag.model, idService);
}
},
"VoBT8Gl00kiMwqJq_12YKQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"QNv68KUI30mYOCyQ0saEng": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Localities"));
})(varBag.model, idService);
}
},
"+D0ymfeJw0upIA4cc4P7zA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"3dwGQymxEUyet06+ST1tzA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("LegendItem_Brothers"));
})(varBag.model, idService);
}
},
"RXxVYogal0K7KkebYb9HwQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"L8tXjfxH40KooGUMvTdB5w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Brothers"));
})(varBag.model, idService);
}
},
"GNquqNJdI0yyRavdb+jnKw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"P7KtM_NWQUiB9wBVH_moxw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("LegendItem_Sisters"));
})(varBag.model, idService);
}
},
"kiVnbrNNm0OQkBLeUEeXnw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"IDYlWu7Ig0yFPsfk0714Uw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Sisters"));
})(varBag.model, idService);
}
},
"mVaka8FpvEak5AJ9w1tiHA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"rQI+TkELH065XbvFnPUgfQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Footer"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
