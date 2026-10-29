define("UBTConnectLibrary.ConnectCorePatterns.Notification_ListItem.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.BasePatterns.Columns_Three.mvc$model", "UBTConnectLibrary.ConnectPatterns.AvatarDouble.mvc$model", "UBTConnectLibrary.ConnectPatterns.AvatarImage.mvc$model", "ReactiveHtmlSanitizer.HtmlSanitizer.SanitizedHtml.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnectLibrary.controller$GetBackgroundColor_IsRead", "UBTConnectLibrary.controller$Get_ElapsedTime_Notification", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnectLibrary.model$InlineIconRec"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_BasePatterns_Columns_Three_mvcModel, UBTConnectLibrary_ConnectPatterns_AvatarDouble_mvcModel, UBTConnectLibrary_ConnectPatterns_AvatarImage_mvcModel, ReactiveHtmlSanitizer_HtmlSanitizer_SanitizedHtml_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("MainContainerClass", "mainContainerClassVar", "MainContainerClass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "ubt-notification-item";
}, false), 
this.attr("In_IsRead", "in_IsReadIn", "In_IsRead", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsReadInDataFetchStatus", "_in_IsReadInDataFetchStatus", "_in_IsReadInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_IsDoubleAvatar", "in_IsDoubleAvatarIn", "In_IsDoubleAvatar", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsDoubleAvatarInDataFetchStatus", "_in_IsDoubleAvatarInDataFetchStatus", "_in_IsDoubleAvatarInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_Description", "in_DescriptionIn", "In_Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_DescriptionInDataFetchStatus", "_in_DescriptionInDataFetchStatus", "_in_DescriptionInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_NotificationDate", "in_NotificationDateIn", "In_NotificationDate", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, false), 
this.attr("_in_NotificationDateInDataFetchStatus", "_in_NotificationDateInDataFetchStatus", "_in_NotificationDateInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_AvatarImage_Left", "in_AvatarImage_LeftIn", "In_AvatarImage_Left", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.AvatarImageRec());
}, false, UBTConnectLibraryModel.AvatarImageRec), 
this.attr("_in_AvatarImage_LeftInDataFetchStatus", "_in_AvatarImage_LeftInDataFetchStatus", "_in_AvatarImage_LeftInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_AvatarImage_Right", "in_AvatarImage_RightIn", "In_AvatarImage_Right", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new UBTConnectLibraryModel.AvatarImageRec());
}, false, UBTConnectLibraryModel.AvatarImageRec), 
this.attr("_in_AvatarImage_RightInDataFetchStatus", "_in_AvatarImage_RightInDataFetchStatus", "_in_AvatarImage_RightInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (((((UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets || UBTConnectLibrary_BasePatterns_Columns_Three_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_AvatarDouble_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_AvatarImage_mvcModel.hasValidationWidgets) || ReactiveHtmlSanitizer_HtmlSanitizer_SanitizedHtml_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_IsRead" in inputs) {
this.variables.in_IsReadIn = inputs.In_IsRead;
if("_in_IsReadInDataFetchStatus" in inputs) {
this.variables._in_IsReadInDataFetchStatus = inputs._in_IsReadInDataFetchStatus;
}

}

if("In_IsDoubleAvatar" in inputs) {
this.variables.in_IsDoubleAvatarIn = inputs.In_IsDoubleAvatar;
if("_in_IsDoubleAvatarInDataFetchStatus" in inputs) {
this.variables._in_IsDoubleAvatarInDataFetchStatus = inputs._in_IsDoubleAvatarInDataFetchStatus;
}

}

if("In_Description" in inputs) {
this.variables.in_DescriptionIn = inputs.In_Description;
if("_in_DescriptionInDataFetchStatus" in inputs) {
this.variables._in_DescriptionInDataFetchStatus = inputs._in_DescriptionInDataFetchStatus;
}

}

if("In_NotificationDate" in inputs) {
this.variables.in_NotificationDateIn = inputs.In_NotificationDate;
if("_in_NotificationDateInDataFetchStatus" in inputs) {
this.variables._in_NotificationDateInDataFetchStatus = inputs._in_NotificationDateInDataFetchStatus;
}

}

if("In_AvatarImage_Left" in inputs) {
this.variables.in_AvatarImage_LeftIn = inputs.In_AvatarImage_Left;
if("_in_AvatarImage_LeftInDataFetchStatus" in inputs) {
this.variables._in_AvatarImage_LeftInDataFetchStatus = inputs._in_AvatarImage_LeftInDataFetchStatus;
}

}

if("In_AvatarImage_Right" in inputs) {
this.variables.in_AvatarImage_RightIn = inputs.In_AvatarImage_Right;
if("_in_AvatarImage_RightInDataFetchStatus" in inputs) {
this.variables._in_AvatarImage_RightInDataFetchStatus = inputs._in_AvatarImage_RightInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "ConnectCorePatterns.Notification_ListItem");
});
define("UBTConnectLibrary.ConnectCorePatterns.Notification_ListItem.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectCorePatterns.Notification_ListItem.mvc$model", "UBTConnectLibrary.ConnectCorePatterns.Notification_ListItem.mvc$controller", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.Columns_Three.mvc$view", "UBTConnectLibrary.ConnectPatterns.AvatarDouble.mvc$view", "UBTConnectLibrary.ConnectPatterns.AvatarImage.mvc$view", "ReactiveHtmlSanitizer.HtmlSanitizer.SanitizedHtml.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.controller$GetBackgroundColor_IsRead", "UBTConnectLibrary.controller$Get_ElapsedTime_Notification", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnectLibrary.model$InlineIconRec"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectCorePatterns_Notification_ListItem_mvc_model, UBTConnectLibrary_ConnectCorePatterns_Notification_ListItem_mvc_controller, UBTConnectLibraryClientVariables, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OSWidgets, UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, UBTConnectLibrary_ConnectPatterns_AvatarDouble_mvc_view, UBTConnectLibrary_ConnectPatterns_AvatarImage_mvc_view, ReactiveHtmlSanitizer_HtmlSanitizer_SanitizedHtml_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view) {
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
        View.displayName = "ConnectCorePatterns.Notification_ListItem";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, UBTConnectLibrary_ConnectPatterns_AvatarDouble_mvc_view, UBTConnectLibrary_ConnectPatterns_AvatarImage_mvc_view, ReactiveHtmlSanitizer_HtmlSanitizer_SanitizedHtml_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectCorePatterns_Notification_ListItem_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnectLibrary_ConnectCorePatterns_Notification_ListItem_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("BNnQW4nxp0Ksw4+cseDKfg.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.backgroundAttr = function () {
var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
rec.backgroundColorAttr = OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.getBackgroundColor_IsRead$Action(model.variables.in_IsReadIn, callContext).out_BackgroundColorOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
return rec;
}();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.generalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.base;
return rec;
}();
rec.borderOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.BorderOptionsRec();
return rec;
}();
return rec;
}();
}, function () {
return model.variables.in_IsReadIn;
}),
_optionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsReadInDataFetchStatus),
ExtendedClasses: model.variables.mainContainerClassVar
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
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, {
inputs: {
ExtendedClasses: "ubt-notification-item__columns",
ColumnOptions: model.getCachedValue(idService.getId("ZrsXGvl_m0CrCTGAg3Vbgw.ColumnOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
rec.columnBehaviourAttr = UBTConnectLibraryModel.staticEntities.uBT_ColumnBehaviour.expandMiddle;
rec.spacingSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.small;
rec.verticalAlignAttr = UBTConnectLibraryModel.staticEntities.uBT_VerticalAlign.center;
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
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
left: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "Notification_Visual"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.in_IsDoubleAvatarIn, false, this, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_AvatarDouble_mvc_view, {
inputs: {
In_SizeId: UBTConnectLibraryModel.staticEntities.uBT_AvatarSize.base_52,
In_FirstAvatarImage: model.variables.in_AvatarImage_LeftIn,
_in_FirstAvatarImageInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_AvatarImage_LeftInDataFetchStatus),
In_SecondAvatarImage: model.variables.in_AvatarImage_RightIn,
_in_SecondAvatarImageInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_AvatarImage_RightInDataFetchStatus)
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
_dependencies: []
})];
}, function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_AvatarImage_mvc_view, {
inputs: {
In_AvatarImage: model.variables.in_AvatarImage_LeftIn,
_in_AvatarImageInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_AvatarImage_LeftInDataFetchStatus),
In_SizeId: UBTConnectLibraryModel.staticEntities.uBT_AvatarSize.base_52
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
}))];
}),
middle: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "Notification_Description"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("nJbEoCYAR0ys7t8Kmc0s4A.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.textOptionsAttr = function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.extraSmall;
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
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(ReactiveHtmlSanitizer_HtmlSanitizer_SanitizedHtml_mvc_view, {
inputs: {
ResetWhitelist: true,
Value: model.variables.in_DescriptionIn,
_valueInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_DescriptionInDataFetchStatus)
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
_dependencies: [asPrimitiveValue(model.variables._in_DescriptionInDataFetchStatus), asPrimitiveValue(model.variables.in_DescriptionIn)]
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "Notification_Elapsed"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("conJs4inW0yLEsHeH1aFJQ.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.topSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.small;
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
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_TextOptions: model.getCachedValue(idService.getId("oIEvmnWE90OCD7vGPZ8SEA.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral7;
rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.doubleExtraSmall;
rec.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
In_Text: model.getCachedValue(idService.getId("oIEvmnWE90OCD7vGPZ8SEA.In_Text"), function () {
return OutSystemsDebugger.handleFunctionCall(function () {
return UBTConnectLibraryController.default.get_ElapsedTime_Notification$Action(model.variables.in_NotificationDateIn, callContext).out_ElapsedTimeOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
}, function () {
return model.variables.in_NotificationDateIn;
}),
_in_TextInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_NotificationDateInDataFetchStatus)
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
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables._in_NotificationDateInDataFetchStatus), asPrimitiveValue(model.variables.in_NotificationDateIn)]
}))];
}),
right: new PlaceholderContent(function () {
return [$if(model.variables.in_IsReadIn, false, this, function () {
return [];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "text-align: right;"
},
style: "notification-unread-dot",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/UBTConnectLibrary.NotificationDot.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_IsReadIn), asPrimitiveValue(model.variables.in_NotificationDateIn), asPrimitiveValue(model.variables.in_DescriptionIn), asPrimitiveValue(model.variables.in_AvatarImage_RightIn), asPrimitiveValue(model.variables.in_AvatarImage_LeftIn), asPrimitiveValue(model.variables._in_IsReadInDataFetchStatus), asPrimitiveValue(model.variables._in_NotificationDateInDataFetchStatus), asPrimitiveValue(model.variables._in_DescriptionInDataFetchStatus), asPrimitiveValue(model.variables._in_AvatarImage_RightInDataFetchStatus), asPrimitiveValue(model.variables._in_AvatarImage_LeftInDataFetchStatus), asPrimitiveValue(model.variables._in_IsDoubleAvatarInDataFetchStatus), asPrimitiveValue(model.variables.in_IsDoubleAvatarIn)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_IsReadIn), asPrimitiveValue(model.variables.in_NotificationDateIn), asPrimitiveValue(model.variables.in_DescriptionIn), asPrimitiveValue(model.variables.in_AvatarImage_RightIn), asPrimitiveValue(model.variables.in_AvatarImage_LeftIn), asPrimitiveValue(model.variables._in_IsReadInDataFetchStatus), asPrimitiveValue(model.variables._in_NotificationDateInDataFetchStatus), asPrimitiveValue(model.variables._in_DescriptionInDataFetchStatus), asPrimitiveValue(model.variables._in_AvatarImage_RightInDataFetchStatus), asPrimitiveValue(model.variables._in_AvatarImage_LeftInDataFetchStatus), asPrimitiveValue(model.variables._in_IsDoubleAvatarInDataFetchStatus), asPrimitiveValue(model.variables.in_IsDoubleAvatarIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("UBTConnectLibrary.ConnectCorePatterns.Notification_ListItem.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "UBTConnectLibrary.languageResources", "UBTConnectLibrary.clientVariables", "UBTConnectLibrary.ConnectCorePatterns.Notification_ListItem.mvc$debugger", "UBTConnectLibrary.controller$GetBackgroundColor_IsRead", "UBTConnectLibrary.controller$Get_ElapsedTime_Notification", "UBTConnectLibrary.model$AvatarImageRec", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnectLibrary.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$AvatarImageFallbackoptionsRec", "UBTConnectLibrary.model$InlineIconRec"], function (OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, UBTConnectLibraryLanguageResources, UBTConnectLibraryClientVariables, UBTConnectLibrary_ConnectCorePatterns_Notification_ListItem_mvc_Debugger) {
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


// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:7WP6eMpZLUWcKuZ3c_pmbg:/NRWebFlows.7WP6eMpZLUWcKuZ3c_pmbg:oyDD4nRcBfstlKKpUR3Bug", "UBTConnectLibrary", "ConnectCorePatterns", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("lAQ0zS6tEEyl6BBIK9yo1A:tibjY8yxRkeZi774q2ldYQ:/NRWebFlows.7WP6eMpZLUWcKuZ3c_pmbg/NodesShownInESpaceTree.tibjY8yxRkeZi774q2ldYQ:K_Pp7DkHZwhmpVKyzlYMXg", "UBTConnectLibrary", "Notification_ListItem", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:tibjY8yxRkeZi774q2ldYQ", callContext.id);
OutSystemsDebugger.pop("lAQ0zS6tEEyl6BBIK9yo1A:7WP6eMpZLUWcKuZ3c_pmbg", callContext.id);
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
return UBTConnectLibraryController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, UBTConnectLibraryLanguageResources);
});

define("UBTConnectLibrary.ConnectCorePatterns.Notification_ListItem.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"b_5PExfxiUmp4p7BJ9Bs6A": {
getter: function (varBag, idService) {
return varBag.model.variables.mainContainerClassVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"omdzmtdG00ijIRyIR8PIYg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsReadIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"8rBgqffEykaKgSc8NNMr5w": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsDoubleAvatarIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"8Fa2kDEy3UaKZd1B5aErWA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_DescriptionIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"jNVuXR+Wi0CxjlozI1PpVw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_NotificationDateIn;
},
dataType: OS.DataTypes.DataTypes.DateTime
},
"MqlNxW97QU6UP5AbwkvlnQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_AvatarImage_LeftIn;
}
},
"7ivig1ZqKkOgLiGLE07GTw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_AvatarImage_RightIn;
}
},
"xWVHbCJf6UmgblY9mk8pnQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"K0cK3lxVnEyTd2+OEdS+Zw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"8Smb+4yT_kKau1G719Ui0g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Notification_Visual"));
})(varBag.model, idService);
}
},
"OJkSIt9+kEibwyVuOONTQg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DoubleImage"));
})(varBag.model, idService);
}
},
"qvKEKRTHJkeI4Kl+jt_d9Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Middle"));
})(varBag.model, idService);
}
},
"0qqIMznFN0mE2hZTEYVzjw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Notification_Description"));
})(varBag.model, idService);
}
},
"hS2pj7L8Wk6srPDdfK3gWQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"_iNhyQrKnkylNb67ziE0dA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Notification_Elapsed"));
})(varBag.model, idService);
}
},
"Mr8ax0Oktku1QIPdk0LuyA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"BLfY3cHZtkm+TPL6gnCOog": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
