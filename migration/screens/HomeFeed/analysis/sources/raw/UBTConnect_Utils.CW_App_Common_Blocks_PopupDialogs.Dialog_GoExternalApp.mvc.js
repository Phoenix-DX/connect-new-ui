define("UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_GoExternalApp.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnectLibrary.model", "UBTConnect_Utils.controller", "UBTJavaScriptUtils.controller", "NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "UBTConnectLibrary.ConnectPatterns.CircleButton.mvc$model", "UBTConnect_Utils.model$ExternalApp_PopUpInfoRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnect_Utils.controller$OpenInApp_OpenApp", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect_Utils.referencesHealth$UBTJavaScriptUtils"], function (OutSystems, UBTConnect_UtilsModel, UBTConnectLibraryModel, UBTConnect_UtilsController, UBTJavaScriptUtilsController, NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel, UBTConnectLibrary_ConnectPatterns_CircleButton_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("In_ExtendedClass", "in_ExtendedClassIn", "In_ExtendedClass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_ExtendedClassInDataFetchStatus", "_in_ExtendedClassInDataFetchStatus", "_in_ExtendedClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ExternalApp_PopUpInfo", "externalApp_PopUpInfoIn", "ExternalApp_PopUpInfo", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnect_UtilsModel.ExternalApp_PopUpInfoRec());
}, false, UBTConnect_UtilsModel.ExternalApp_PopUpInfoRec), 
this.attr("_externalApp_PopUpInfoInDataFetchStatus", "_externalApp_PopUpInfoInDataFetchStatus", "_externalApp_PopUpInfoInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = ((((NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_CircleButton_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_ExtendedClass" in inputs) {
this.variables.in_ExtendedClassIn = inputs.In_ExtendedClass;
if("_in_ExtendedClassInDataFetchStatus" in inputs) {
this.variables._in_ExtendedClassInDataFetchStatus = inputs._in_ExtendedClassInDataFetchStatus;
}

}

if("ExternalApp_PopUpInfo" in inputs) {
this.variables.externalApp_PopUpInfoIn = inputs.ExternalApp_PopUpInfo;
if("_externalApp_PopUpInfoInDataFetchStatus" in inputs) {
this.variables._externalApp_PopUpInfoInDataFetchStatus = inputs._externalApp_PopUpInfoInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "CW_App_Common_Blocks_PopupDialogs.Dialog_GoExternalApp");
});
define("UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_GoExternalApp.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnectLibrary.model", "UBTJavaScriptUtils.controller", "react", "OutSystems/ReactView/Main", "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_GoExternalApp.mvc$model", "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_GoExternalApp.mvc$controller", "UBTConnect_Utils.clientVariables", "OutSystems/ReactWidgets/Main", "NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.ConnectPatterns.CircleButton.mvc$view", "UBTConnect_Utils.model$ExternalApp_PopUpInfoRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnect_Utils.controller$OpenInApp_OpenApp", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect_Utils.referencesHealth$UBTJavaScriptUtils"], function (OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnectLibraryModel, UBTJavaScriptUtilsController, React, OSView, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_GoExternalApp_mvc_model, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_GoExternalApp_mvc_controller, UBTConnect_UtilsClientVariables, OSWidgets, NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectPatterns_CircleButton_mvc_view) {
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
        View.displayName = "CW_App_Common_Blocks_PopupDialogs.Dialog_GoExternalApp";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, UBTConnectLibrary_ConnectPatterns_CircleButton_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_GoExternalApp_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_GoExternalApp_mvc_controller;
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
style: ("subscription-pop-up connect-dialog-popup connect-dialog-popup--access-restricted " + model.variables.in_ExtendedClassIn),
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_ExtendedClassInDataFetchStatus)
}, React.createElement(NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
confirmed$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ConfirmationDialogs/ActionConfirmationDialog Confirmed");
return controller.goToExternalApp$Action(controller.callContext(eventHandlerContext));
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
name: "PopUp",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
dialogHeader: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-align-center",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_Text: ("Move to " + model.variables.externalApp_PopUpInfoIn.appNameAttr),
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._externalApp_PopUpInfoInDataFetchStatus),
In_TextOptions: model.getCachedValue(idService.getId("V8Or0cbDuk+7cYAw2eRlKQ.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.fontSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontSize.base;
rec.fontWeightAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
In_PaddingOptions: model.getCachedValue(idService.getId("V8Or0cbDuk+7cYAw2eRlKQ.In_PaddingOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.bottomSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.small;
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
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}),
dialogBody: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("nT7AFQJvvUOZgKAvnNeNDg.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.generalSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.base;
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
uuid: "4",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: center;"
},
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(((model.variables.externalApp_PopUpInfoIn.iconIdAttr) !== (OS.BuiltinFunctions.nullTextIdentifier())), false, this, function () {
return [$if(((OS.BuiltinFunctions.index(model.variables.externalApp_PopUpInfoIn.iconIdAttr, "SVG_", 0, false, false)) !== (-1)), false, this, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_IconId: model.variables.externalApp_PopUpInfoIn.iconIdAttr,
_in_IconIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._externalApp_PopUpInfoInDataFetchStatus),
In_SizeId: UBTConnect_UtilsModel.staticEntities.uBT_IconSize.nonStandard_64
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
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_CircleButton_mvc_view, {
inputs: {
BackgroundColorId: UBTConnect_UtilsModel.staticEntities.uBT_Color.primary,
SizeId: UBTConnect_UtilsModel.staticEntities.uBT_AvatarSize.base_52
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
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_SizeId: UBTConnect_UtilsModel.staticEntities.uBT_IconSize.nonStandard_32,
In_ColorId: UBTConnect_UtilsModel.staticEntities.uBT_Color.neutral0,
In_IconId: model.variables.externalApp_PopUpInfoIn.iconIdAttr,
_in_IconIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._externalApp_PopUpInfoInDataFetchStatus)
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
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
badge: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables._externalApp_PopUpInfoInDataFetchStatus), asPrimitiveValue(model.variables.externalApp_PopUpInfoIn.iconIdAttr)]
})];
})];
}, function () {
return [];
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables._externalApp_PopUpInfoInDataFetchStatus), asPrimitiveValue(model.variables.externalApp_PopUpInfoIn.iconIdAttr)]
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("Message.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
return rec;
}();
rec.marginSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.topSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.base;
rec.bottomSizeIdAttr = UBTConnect_UtilsModel.staticEntities.uBT_Size.base;
return rec;
}();
rec.textOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnect_UtilsModel.staticEntities.uBT_Color.neutral10;
return rec;
}();
rec.displayOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
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
name: "Message",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: (("You’re about to leave this app and open " + model.variables.externalApp_PopUpInfoIn.appNameAttr) + ". Are you sure you want to continue?"),
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._externalApp_PopUpInfoInDataFetchStatus)
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables._externalApp_PopUpInfoInDataFetchStatus), asPrimitiveValue(model.variables.externalApp_PopUpInfoIn.appNameAttr)]
})];
}),
buttonLabel_Confirm: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("BtpSf61TdEOLhskrgPtSSg.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.displayOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.DisplayOptionsRec();
rec.displayAttr = UBTConnect_UtilsModel.staticEntities.uBT_Display.flex;
rec.alignItemsAttr = UBTConnect_UtilsModel.staticEntities.uBT_AlignItems.center;
rec.justifyContentAttr = UBTConnect_UtilsModel.staticEntities.uBT_JustifyContent.center;
rec.flexDirectionAttr = UBTConnect_UtilsModel.staticEntities.uBT_FlexDirection.row;
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
alias: "8"
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
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
NoWrap: true,
In_TextOptions: model.getCachedValue(idService.getId("1mxzU0w4EEytk8TzY6Al3w.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnect_UtilsModel.staticEntities.uBT_Color.neutral0;
rec.fontSizeAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontSize.small;
rec.fontWeightAttr = UBTConnect_UtilsModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
In_Text: ("Continue to " + model.variables.externalApp_PopUpInfoIn.appNameAttr),
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._externalApp_PopUpInfoInDataFetchStatus)
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
uuid: "14",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-left-s",
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_SizeId: UBTConnect_UtilsModel.staticEntities.uBT_IconSize.nonStandard_16,
In_IconId: UBTConnect_UtilsModel.staticEntities.uBT_Icons.openNew,
In_ColorId: UBTConnect_UtilsModel.staticEntities.uBT_Color.neutral0
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
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables._externalApp_PopUpInfoInDataFetchStatus), asPrimitiveValue(model.variables.externalApp_PopUpInfoIn.appNameAttr)]
})];
}),
buttonLabel_Dismiss: new PlaceholderContent(function () {
return ["Cancel"];
})
},
_dependencies: [asPrimitiveValue(model.variables._externalApp_PopUpInfoInDataFetchStatus), asPrimitiveValue(model.variables.externalApp_PopUpInfoIn.iconIdAttr), asPrimitiveValue(model.variables.externalApp_PopUpInfoIn.appNameAttr)]
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_GoExternalApp.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect_Utils.model", "UBTConnect_Utils.controller", "UBTConnectLibrary.model", "UBTJavaScriptUtils.controller", "UBTConnect_Utils.languageResources", "UBTConnect_Utils.clientVariables", "UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_GoExternalApp.mvc$debugger", "UBTConnect_Utils.model$ExternalApp_PopUpInfoRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect_Utils.referencesHealth", "UBTConnect_Utils.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$InlineIconRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnect_Utils.controller$OpenInApp_OpenApp", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect_Utils.referencesHealth$UBTJavaScriptUtils"], function (OutSystems, UBTConnect_UtilsModel, UBTConnect_UtilsController, UBTConnectLibraryModel, UBTJavaScriptUtilsController, UBTConnect_UtilsLanguageResources, UBTConnect_UtilsClientVariables, UBTConnect_Utils_CW_App_Common_Blocks_PopupDialogs_Dialog_GoExternalApp_mvc_Debugger) {
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
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:NZ6CeFUg7UefvlLrkJbV+Q:/NRWebFlows.R5vwMKLVLkuCtlMIOr29Cw/NodesShownInESpaceTree.c_CYLC1kcEaHlofFdqHSIQ/ClientActions.NZ6CeFUg7UefvlLrkJbV+Q:gozpxuu2G2Xx0R201cjkJw", "UBTConnect_Utils", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:+KAAuajtE0aPs+m6d1nQyw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:eEqtnRQ82k6AMUlrBH4sGA", callContext.id);
// Trigger Event: OnPopUpReady
return controller.onPopUpReady$Action(idService.getId("PopUp"), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:9ndZgkE7VEqEO6TTrApb5g", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:NZ6CeFUg7UefvlLrkJbV+Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:NZ6CeFUg7UefvlLrkJbV+Q", callContext.id);
throw ex;

});
};
Controller.prototype._goToExternalApp$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("GoToExternalApp");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:0vQzmfWEHk2leBB4Hpk1yQ:/NRWebFlows.R5vwMKLVLkuCtlMIOr29Cw/NodesShownInESpaceTree.c_CYLC1kcEaHlofFdqHSIQ/ClientActions.0vQzmfWEHk2leBB4Hpk1yQ:ADMJJAig60tebKFAn_eJlA", "UBTConnect_Utils", "GoToExternalApp", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:wBCXO7oW8kuT2dxewTlBxQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:wVr6MovHkUW3risUBnpQ8g", callContext.id) && (model.variables.externalApp_PopUpInfoIn.packageNameAttr === ""))) {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:wo4Wn3jjl02zbS6EIrhUXA", callContext.id);
// Execute Action: FeedbackMessage_AutoClose2
UBTJavaScriptUtilsController.default.feedbackMessage_AutoClose$Action("Not available", "Sorry, this is not available in the platform you are using", OS.BuiltinFunctions.textToInteger("Entities.UBT_MessageType.Error"), true, "", 0, false, callContext);
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:Y3170s0lRkGVvlrmPcx0Cg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:2aeUgmxTZEaQ20JwI42QEQ", callContext.id);
// Execute Action: OpenInApp_OpenApp
model.flush();
return UBTConnect_UtilsController.default.openInApp_OpenApp$Action(model.variables.externalApp_PopUpInfoIn.packageNameAttr, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:JxxpGllksk6AxYJOpHz1AA", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:0vQzmfWEHk2leBB4Hpk1yQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:0vQzmfWEHk2leBB4Hpk1yQ", callContext.id);
throw ex;

});
};

Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.goToExternalApp$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._goToExternalApp$Action, callContext);

};
Controller.prototype.onPopUpReady$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:R5vwMKLVLkuCtlMIOr29Cw:/NRWebFlows.R5vwMKLVLkuCtlMIOr29Cw:WUreZLtBKMIK4h7egpH4sw", "UBTConnect_Utils", "CW_App_Common_Blocks_PopupDialogs", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("_OwvmJqPz0GyaZBFX4uPyQ:c_CYLC1kcEaHlofFdqHSIQ:/NRWebFlows.R5vwMKLVLkuCtlMIOr29Cw/NodesShownInESpaceTree.c_CYLC1kcEaHlofFdqHSIQ:fZT+Gk_x27ASq+AEBziJHQ", "UBTConnect_Utils", "Dialog_GoExternalApp", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:c_CYLC1kcEaHlofFdqHSIQ", callContext.id);
OutSystemsDebugger.pop("_OwvmJqPz0GyaZBFX4uPyQ:R5vwMKLVLkuCtlMIOr29Cw", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "CW_App_Common_Blocks_PopupDialogs/Dialog_GoExternalApp On Ready");
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
return UBTConnect_UtilsController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnect_UtilsLanguageResources);
});

define("UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_GoExternalApp.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"letLw31HTE+UxGeOyt4Qwg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ExtendedClassIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"D9PIwDxORE+GaNJay3FmwQ": {
getter: function (varBag, idService) {
return varBag.model.variables.externalApp_PopUpInfoIn;
}
},
"iHwcic0N9kGpxtppiZlZUw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PopUp"));
})(varBag.model, idService);
}
},
"kuO83wa1kk2rEXL26Gr5+Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DialogHeader"));
})(varBag.model, idService);
}
},
"U+9dg2d5fki9traDwiXKaw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DialogBody"));
})(varBag.model, idService);
}
},
"mW9ZR+im2kO0IKEfUhEp3g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"Wx2IqOG7NE+VVtuVgw1mzA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HasIcon"));
})(varBag.model, idService);
}
},
"Uj7BWAyFPkad2jZNPnxbnQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("IsSVG"));
})(varBag.model, idService);
}
},
"xbDmonBVhkmZnaWpDpv0mg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"lAz07YnXvkiFWL_G3kbQPQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Badge"));
})(varBag.model, idService);
}
},
"Y5eLXOTfZ0WDqysF_t0lqw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Message"));
})(varBag.model, idService);
}
},
"XXF9R90xzEubUzaK+TBxHw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"RQpQSp2vrUycJaW3WMcHag": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ButtonLabel_Confirm"));
})(varBag.model, idService);
}
},
"udixi+bhkUybGT72HwAL_A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"Vwbq2D7FCEeY0UguM90tRw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ButtonLabel_Dismiss"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
