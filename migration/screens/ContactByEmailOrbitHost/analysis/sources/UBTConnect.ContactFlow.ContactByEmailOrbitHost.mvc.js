define("UBTConnect.ContactFlow.ContactByEmailOrbitHost.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "Connect_Communication_CS.model", "UBTConnectLibrary.model", "UBT_Email.model", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$model", "UBTConnect.ContactFlow.ContactByEmailForm.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.BasePatterns.Columns_Three.mvc$model", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "Connect_Communication_CS.model$UI_ContactByEmailFormRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Communication_CS", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$InlineIconRec", "UBT_Email.model$OrbitEmailInformationRec", "UBTConnect.referencesHealth$UBT_Email"], function (OutSystems, UBTConnectModel, Connect_Communication_CSModel, UBTConnectLibraryModel, UBT_EmailModel, UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel, UBTConnect_ContactFlow_ContactByEmailForm_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_BasePatterns_Columns_Three_mvcModel, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel, UBTConnectLibrary_ConnectPatterns_IconText_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("ContactByEmailForm", "contactByEmailFormVar", "ContactByEmailForm", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect_Communication_CSModel.UI_ContactByEmailFormRec());
}, false, Connect_Communication_CSModel.UI_ContactByEmailFormRec), 
this.attr("In_Subject", "in_SubjectIn", "In_Subject", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_SubjectInDataFetchStatus", "_in_SubjectInDataFetchStatus", "_in_SubjectInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_MilestoneTitle", "in_MilestoneTitleIn", "In_MilestoneTitle", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_MilestoneTitleInDataFetchStatus", "_in_MilestoneTitleInDataFetchStatus", "_in_MilestoneTitleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_EventName", "in_EventNameIn", "In_EventName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_EventNameInDataFetchStatus", "_in_EventNameInDataFetchStatus", "_in_EventNameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_HostName", "in_HostNameIn", "In_HostName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_HostNameInDataFetchStatus", "_in_HostNameInDataFetchStatus", "_in_HostNameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_HostEmail", "in_HostEmailIn", "In_HostEmail", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_HostEmailInDataFetchStatus", "_in_HostEmailInDataFetchStatus", "_in_HostEmailInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_FormattedDateTime", "in_FormattedDateTimeIn", "In_FormattedDateTime", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_FormattedDateTimeInDataFetchStatus", "_in_FormattedDateTimeInDataFetchStatus", "_in_FormattedDateTimeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ContactLocality", "in_ContactLocalityIn", "In_ContactLocality", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_ContactLocalityInDataFetchStatus", "_in_ContactLocalityInDataFetchStatus", "_in_ContactLocalityInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ContactCountry", "in_ContactCountryIn", "In_ContactCountry", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_ContactCountryInDataFetchStatus", "_in_ContactCountryInDataFetchStatus", "_in_ContactCountryInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_AvatarURL", "in_AvatarURLIn", "In_AvatarURL", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_AvatarURLInDataFetchStatus", "_in_AvatarURLInDataFetchStatus", "_in_AvatarURLInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_EntityType", "in_EntityTypeIn", "In_EntityType", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_EntityTypeInDataFetchStatus", "_in_EntityTypeInDataFetchStatus", "_in_EntityTypeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_EntityId", "in_EntityIdIn", "In_EntityId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_EntityIdInDataFetchStatus", "_in_EntityIdInDataFetchStatus", "_in_EntityIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_Surname", "in_SurnameIn", "In_Surname", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_SurnameInDataFetchStatus", "_in_SurnameInDataFetchStatus", "_in_SurnameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (((((((UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel.hasValidationWidgets || UBTConnect_ContactFlow_ContactByEmailForm_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_Columns_Three_mvcModel.hasValidationWidgets) || UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_IconText_mvcModel.hasValidationWidgets) || UBTConnectLibrary_ConnectPatterns_Icon_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_Subject" in inputs) {
this.variables.in_SubjectIn = OS.DataConversion.ServerDataConverter.from(inputs.In_Subject, OS.DataTypes.DataTypes.Text);
}

if("In_MilestoneTitle" in inputs) {
this.variables.in_MilestoneTitleIn = OS.DataConversion.ServerDataConverter.from(inputs.In_MilestoneTitle, OS.DataTypes.DataTypes.Text);
}

if("In_EventName" in inputs) {
this.variables.in_EventNameIn = OS.DataConversion.ServerDataConverter.from(inputs.In_EventName, OS.DataTypes.DataTypes.Text);
}

if("In_HostName" in inputs) {
this.variables.in_HostNameIn = OS.DataConversion.ServerDataConverter.from(inputs.In_HostName, OS.DataTypes.DataTypes.Text);
}

if("In_HostEmail" in inputs) {
this.variables.in_HostEmailIn = OS.DataConversion.ServerDataConverter.from(inputs.In_HostEmail, OS.DataTypes.DataTypes.Text);
}

if("In_FormattedDateTime" in inputs) {
this.variables.in_FormattedDateTimeIn = OS.DataConversion.ServerDataConverter.from(inputs.In_FormattedDateTime, OS.DataTypes.DataTypes.Text);
}

if("In_ContactLocality" in inputs) {
this.variables.in_ContactLocalityIn = OS.DataConversion.ServerDataConverter.from(inputs.In_ContactLocality, OS.DataTypes.DataTypes.Text);
}

if("In_ContactCountry" in inputs) {
this.variables.in_ContactCountryIn = OS.DataConversion.ServerDataConverter.from(inputs.In_ContactCountry, OS.DataTypes.DataTypes.Text);
}

if("In_AvatarURL" in inputs) {
this.variables.in_AvatarURLIn = OS.DataConversion.ServerDataConverter.from(inputs.In_AvatarURL, OS.DataTypes.DataTypes.Text);
}

if("In_EntityType" in inputs) {
this.variables.in_EntityTypeIn = OS.DataConversion.ServerDataConverter.from(inputs.In_EntityType, OS.DataTypes.DataTypes.Text);
}

if("In_EntityId" in inputs) {
this.variables.in_EntityIdIn = OS.DataConversion.ServerDataConverter.from(inputs.In_EntityId, OS.DataTypes.DataTypes.LongInteger);
}

if("In_Surname" in inputs) {
this.variables.in_SurnameIn = OS.DataConversion.ServerDataConverter.from(inputs.In_Surname, OS.DataTypes.DataTypes.Text);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "ContactFlow.ContactByEmailOrbitHost");
});
define("UBTConnect.ContactFlow.ContactByEmailOrbitHost.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Communication_CS.model", "UBTConnectLibrary.model", "UBT_Email.model", "react", "OutSystems/ReactView/Main", "UBTConnect.ContactFlow.ContactByEmailOrbitHost.mvc$model", "UBTConnect.ContactFlow.ContactByEmailOrbitHost.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.ContactFlow.ContactByEmailForm.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.BasePatterns.Columns_Three.mvc$view", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "Connect_Communication_CS.model$UI_ContactByEmailFormRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Communication_CS", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$InlineIconRec", "UBT_Email.model$OrbitEmailInformationRec", "UBTConnect.referencesHealth$UBT_Email"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Communication_CSModel, UBTConnectLibraryModel, UBT_EmailModel, React, OSView, UBTConnect_ContactFlow_ContactByEmailOrbitHost_mvc_model, UBTConnect_ContactFlow_ContactByEmailOrbitHost_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, OSWidgets, UBTConnect_ContactFlow_ContactByEmailForm_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view) {
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
        View.displayName = "ContactFlow.ContactByEmailOrbitHost";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, UBTConnect_ContactFlow_ContactByEmailForm_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_ContactFlow_ContactByEmailOrbitHost_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_ContactFlow_ContactByEmailOrbitHost_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "ContactByEmailOrbitHost";
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
In_IsPrimaryColor: false,
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
return [React.createElement(OSWidgets.Expression, {
value: (("Contact the " + model.variables.in_SurnameIn) + " household"),
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
placeholder_Header_Right: PlaceholderContent.Empty,
headerContent: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_ContactFlow_ContactByEmailForm_mvc_view, {
inputs: {
In_SubjectPlaceholder: "Add a subject",
In_UseDynamicTextAreaSubject: true,
In_MessagePlaceholder: "Add a message",
IsLoading: model.variables.isLoadingVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_SubmitForm$Action: function (event_SubjectIn, event_MessageIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ContactFlow/ContactByEmailForm Event_SubmitForm");
return controller.handler_SubmitForm$Action(event_SubjectIn, event_MessageIn, controller.callContext(eventHandlerContext));
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
placeholder_ContactCard: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("lFimr6TyAUWjS+yrUhFTCg.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.horizontalSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.extraSmall;
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
return [React.createElement(UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, {
inputs: {
ColumnOptions: model.getCachedValue(idService.getId("in0JxCsQu0igXprf0g2jLA.ColumnOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ColumnOptionsRec();
rec.columnBehaviourAttr = UBTConnectModel.staticEntities.uBT_ColumnBehaviour.expandMiddle;
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
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
left: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
ExtendedClasses: "ubt-object-fit-avatar-img",
Options: model.getCachedValue(idService.getId("lAC6pZAnYUu66IJCa0NgHg.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.paddingSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
rec.rightSizeIdAttr = UBTConnectModel.staticEntities.uBT_Size.base;
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
return [React.createElement(UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, {
inputs: {
EntityType: model.getCachedValue(idService.getId("XCQgAIY5KEqfjUYg_e7O1A.EntityType"), function () {
return (((model.variables.in_EntityTypeIn === OS.BuiltinFunctions.nullTextIdentifier())) ? (UBTConnectModel.staticEntities.connect_Entity.member) : (model.variables.in_EntityTypeIn));
}, function () {
return model.variables.in_EntityTypeIn;
}),
EntityId: OS.BuiltinFunctions.longIntegerToText(model.variables.in_EntityIdIn),
ImageURL: model.variables.in_AvatarURLIn,
ImageSize: model.getCachedValue(idService.getId("XCQgAIY5KEqfjUYg_e7O1A.ImageSize"), function () {
return function () {
var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
rec.heightAttr = UBTConnectModel.staticEntities.uBT_ImageSize.base_52;
rec.widthAttr = UBTConnectModel.staticEntities.uBT_ImageSize.square;
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
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_AvatarURLIn), asPrimitiveValue(model.variables.in_EntityIdIn), asPrimitiveValue(model.variables.in_EntityTypeIn)]
})];
}),
middle: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_BasePatterns_CustomText_mvc_view, {
inputs: {
In_Text: model.variables.in_HostNameIn,
In_TextOptions: model.getCachedValue(idService.getId("UyDdOZz40E+twkNYSdJ2TQ.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.base;
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
uuid: "7",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
inputs: {
SpacingSize: UBTConnectModel.staticEntities.uBT_Size.extraSmall,
TextOptions: model.getCachedValue(idService.getId("gvTaObuTcUGTeLWTUO3ulw.TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral7;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.extraSmall;
return rec;
}();
}),
Text: model.getCachedValue(idService.getId("gvTaObuTcUGTeLWTUO3ulw.Text"), function () {
return ((model.variables.in_ContactLocalityIn + (((((model.variables.in_ContactLocalityIn) !== ("")) && ((model.variables.in_ContactCountryIn) !== ("")))) ? (", ") : (""))) + model.variables.in_ContactCountryIn);
}, function () {
return model.variables.in_ContactLocalityIn;
}, function () {
return model.variables.in_ContactCountryIn;
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
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
inputs: {
In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.nonStandard_14,
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.homePIn,
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral7
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
_dependencies: []
})];
})
},
_dependencies: []
})];
}),
right: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.in_ContactCountryIn), asPrimitiveValue(model.variables.in_ContactLocalityIn), asPrimitiveValue(model.variables.in_HostNameIn), asPrimitiveValue(model.variables.in_AvatarURLIn), asPrimitiveValue(model.variables.in_EntityIdIn), asPrimitiveValue(model.variables.in_EntityTypeIn)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_ContactCountryIn), asPrimitiveValue(model.variables.in_ContactLocalityIn), asPrimitiveValue(model.variables.in_HostNameIn), asPrimitiveValue(model.variables.in_AvatarURLIn), asPrimitiveValue(model.variables.in_EntityIdIn), asPrimitiveValue(model.variables.in_EntityTypeIn)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_ContactCountryIn), asPrimitiveValue(model.variables.in_ContactLocalityIn), asPrimitiveValue(model.variables.in_HostNameIn), asPrimitiveValue(model.variables.in_AvatarURLIn), asPrimitiveValue(model.variables.in_EntityIdIn), asPrimitiveValue(model.variables.in_EntityTypeIn)]
})];
}),
bottom: PlaceholderContent.Empty,
placeholder_CommonUI_Inside_Layout: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.in_ContactCountryIn), asPrimitiveValue(model.variables.in_ContactLocalityIn), asPrimitiveValue(model.variables.in_HostNameIn), asPrimitiveValue(model.variables.in_AvatarURLIn), asPrimitiveValue(model.variables.in_EntityIdIn), asPrimitiveValue(model.variables.in_EntityTypeIn), asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.in_SurnameIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("UBTConnect.ContactFlow.ContactByEmailOrbitHost.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Communication_CS.model", "UBTConnectLibrary.model", "UBT_Email.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.ContactFlow.ContactByEmailOrbitHost.mvc$debugger", "UBTConnect.ContactFlow.controller", "UBTConnect.ContactFlow.ContactByEmailOrbitHost.mvc$controller.Handler_SubmitForm.ScheduleFeedbackMessageAfterTransitionJS", "Connect_Communication_CS.model$UI_ContactByEmailFormRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Communication_CS", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$InlineIconRec", "UBT_Email.model$OrbitEmailInformationRec", "UBTConnect.referencesHealth$UBT_Email"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Communication_CSModel, UBTConnectLibraryModel, UBT_EmailModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_ContactFlow_ContactByEmailOrbitHost_mvc_Debugger, _flow_UBTConnect_ContactFlowController, UBTConnect_ContactFlow_ContactByEmailOrbitHost_mvc_controller_Handler_SubmitForm_ScheduleFeedbackMessageAfterTransitionJS) {
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
Controller.prototype.sendContactEmail$ServerAction = function (isContactHelpdeskIn, eventIdIn, milestoneIdIn, targetMemberIdIn, subjectIn, userSubjectIn, messageIn, emailInfoIn, callContext) {
var controller = this.controller;
var inputs = {
IsContactHelpdesk: OS.DataConversion.ServerDataConverter.to(isContactHelpdeskIn, OS.DataTypes.DataTypes.Boolean),
EventId: OS.DataConversion.ServerDataConverter.to(eventIdIn, OS.DataTypes.DataTypes.LongInteger),
MilestoneId: OS.DataConversion.ServerDataConverter.to(milestoneIdIn, OS.DataTypes.DataTypes.Text),
TargetMemberId: OS.DataConversion.ServerDataConverter.to(targetMemberIdIn, OS.DataTypes.DataTypes.LongInteger),
Subject: OS.DataConversion.ServerDataConverter.to(subjectIn, OS.DataTypes.DataTypes.Text),
UserSubject: OS.DataConversion.ServerDataConverter.to(userSubjectIn, OS.DataTypes.DataTypes.Text),
Message: OS.DataConversion.ServerDataConverter.to(messageIn, OS.DataTypes.DataTypes.Text),
EmailInfo: OS.DataConversion.ServerDataConverter.to(emailInfoIn, OS.DataTypes.DataTypes.Record)
};
return controller.callServerAction("SendContactEmail", "screenservices/UBTConnect/ContactFlow/ContactByEmailOrbitHost/ActionSendContactEmail", "1IXCj0Dy31NbV9HfVKiKYg", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("UBTConnect.ContactFlow.ContactByEmailOrbitHost$rssespaceconnect2_orbitmobile_bl_ActionSendContactEmail"))();
executeServerActionResult.isSuccessOut = OS.DataConversion.ServerDataConverter.from(outputs.IsSuccess, OS.DataTypes.DataTypes.Boolean);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("UBTConnect.ContactFlow.ContactByEmailOrbitHost$rssespaceconnect2_orbitmobile_bl_ActionSendContactEmail", [{
name: "IsSuccess",
attrName: "isSuccessOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return true;
}
}]);

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._handler_SubmitForm$Action = function (event_SubjectIn, event_MessageIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Handler_SubmitForm");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.ContactFlow.ContactByEmailOrbitHost.Handler_SubmitForm$vars"))());
vars.value.event_SubjectInLocal = event_SubjectIn;
vars.value.event_MessageInLocal = event_MessageIn;
var sendContactEmailVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.sendContactEmailVar = sendContactEmailVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:8LlOr2BeWky6KBQGiiZ2Dw:/NRWebFlows.44k9sr6oZUWsIXFdGfOLuw/NodesShownInESpaceTree.wJM+qKVAN0y+d+ImgTBOSw/ClientActions.8LlOr2BeWky6KBQGiiZ2Dw:LFABbnZjp3yEFBSSDvaXyg", "UBTConnect", "Handler_SubmitForm", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ZABcQmFvXE6NKRm8ulelVw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:louOJRVlukK+Cr8VWXOXcA", callContext.id);
// IsLoading = True
model.variables.isLoadingVar = true;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LvPhKLmtgkWrk9Xxe8lDZw", callContext.id);
// ContactByEmailForm.Subject = Event_Subject
model.variables.contactByEmailFormVar.subjectAttr = vars.value.event_SubjectInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LvPhKLmtgkWrk9Xxe8lDZw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByEmailForm.Message = Event_Message
model.variables.contactByEmailFormVar.messageAttr = vars.value.event_MessageInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Mpdkh1tsVESA_MwUnJc2bw", callContext.id);
// Execute Action: SendContactEmail
model.flush();
return controller.sendContactEmail$ServerAction(false, OS.DataTypes.LongInteger.defaultValue, "", OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier()), model.variables.in_SubjectIn, model.variables.contactByEmailFormVar.subjectAttr, model.variables.contactByEmailFormVar.messageAttr, function () {
var rec = new UBT_EmailModel.OrbitEmailInformationRec();
rec.eventNameAttr = model.variables.in_EventNameIn;
rec.senderFullNameAttr = "";
rec.senderEmailAttr = "";
rec.hostNameAttr = model.variables.in_HostNameIn;
rec.hostEmailAttr = model.variables.in_HostEmailIn;
rec.milestoneNameAttr = model.variables.in_MilestoneTitleIn;
rec.formattedDateTimeAttr = model.variables.in_FormattedDateTimeIn;
return rec;
}(), callContext).then(function (value) {
sendContactEmailVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zGV018Xq_kuhTBKi6G8HqA", callContext.id);
controller.safeExecuteJSNode(UBTConnect_ContactFlow_ContactByEmailOrbitHost_mvc_controller_Handler_SubmitForm_ScheduleFeedbackMessageAfterTransitionJS, "ScheduleFeedbackMessageAfterTransition", "Handler_SubmitForm", {
Message: OS.DataConversion.JSNodeParamConverter.to("Your message has been sent.", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:76o1RePXQkOgV_pr_zJSCg", callContext.id);
// Destination: (PreviousScreen)
return OS.Flow.returnAsync(OS.Navigation.navigateBack(null, callContext, true));
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:8LlOr2BeWky6KBQGiiZ2Dw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:8LlOr2BeWky6KBQGiiZ2Dw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.ContactFlow.ContactByEmailOrbitHost.Handler_SubmitForm$vars", [{
name: "Event_Subject",
attrName: "event_SubjectInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Event_Message",
attrName: "event_MessageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
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
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:3CnMtlsHL0u61p36MBQh+Q:/NRWebFlows.44k9sr6oZUWsIXFdGfOLuw/NodesShownInESpaceTree.wJM+qKVAN0y+d+ImgTBOSw/ClientActions.3CnMtlsHL0u61p36MBQh+Q:Nfge_JJW7bcLLcI9nw9uDg", "UBTConnect", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HfzDp3blIEidjrzZXjoCXg", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:RFiOTWo9T0CAGHbPfHk7IQ", callContext.id);
// ContactByEmailForm.EmailTo = In_HostEmail
model.variables.contactByEmailFormVar.emailToAttr = model.variables.in_HostEmailIn;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:uWRuf_Gv_0mm5tgSpB5UIA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:3CnMtlsHL0u61p36MBQh+Q", callContext.id);
}

};

Controller.prototype.handler_SubmitForm$Action = function (event_SubjectIn, event_MessageIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._handler_SubmitForm$Action, callContext, event_SubjectIn, event_MessageIn);

};
Controller.prototype.screenEvent_OnInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._screenEvent_OnInitialize$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:44k9sr6oZUWsIXFdGfOLuw:/NRWebFlows.44k9sr6oZUWsIXFdGfOLuw:06ULszUsjYTPVWsvtfNAow", "UBTConnect", "ContactFlow", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:wJM+qKVAN0y+d+ImgTBOSw:/NRWebFlows.44k9sr6oZUWsIXFdGfOLuw/NodesShownInESpaceTree.wJM+qKVAN0y+d+ImgTBOSw:Oq48NIgqbsI8TI6eeKbBIA", "UBTConnect", "ContactByEmailOrbitHost", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:wJM+qKVAN0y+d+ImgTBOSw", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:44k9sr6oZUWsIXFdGfOLuw", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "ContactFlow/ContactByEmailOrbitHost On Initialize");
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
return _flow_UBTConnect_ContactFlowController.default.handleError(ex, this.callContext());
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
define("UBTConnect.ContactFlow.ContactByEmailOrbitHost.mvc$controller.Handler_SubmitForm.ScheduleFeedbackMessageAfterTransitionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.setTimeout(function() {
    $public.FeedbackMessage.showFeedbackMessage($parameters.Message, 1);
}, 500);
};
});

define("UBTConnect.ContactFlow.ContactByEmailOrbitHost.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"vJmpyB27AEOWIdDPiO9YNw": {
getter: function (varBag, idService) {
return varBag.vars.value.event_SubjectInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"CYlUxqPF80uQ1yz_lAAVGw": {
getter: function (varBag, idService) {
return varBag.vars.value.event_MessageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Mpdkh1tsVESA_MwUnJc2bw": {
getter: function (varBag, idService) {
return varBag.sendContactEmailVar.value;
}
},
"zGV018Xq_kuhTBKi6G8HqA": {
getter: function (varBag, idService) {
return varBag.scheduleFeedbackMessageAfterTransitionJSResult.value;
}
},
"jWgY6zZ03k+HV8LScXBH9g": {
getter: function (varBag, idService) {
return varBag.model.variables.isLoadingVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"nugclqzCgUqE+tSrTCJSWg": {
getter: function (varBag, idService) {
return varBag.model.variables.contactByEmailFormVar;
}
},
"SLSYCz3Hwk6x5atmU3+ytw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_SubjectIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"0q0PMUNHz0ODpFn4q84iWg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_MilestoneTitleIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"AuCEYUfwyUqUDpAbNpFJkA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EventNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"HSAS5_UDe0O4lZ3r05kPhw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HostNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"C3SsbbStokygzSAGnly6xw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HostEmailIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Wj6zQZ4lsUOITfcm8lnsGA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_FormattedDateTimeIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"u8mcRnoe+Eqoo62kfjWB4w": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ContactLocalityIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"dShaYakMeUmk58goyR9g9A": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ContactCountryIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"bFQYcuUePkKnbSU45GXFVQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_AvatarURLIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"+Ni9CwNgjEiExMZuEfREqA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EntityTypeIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"4WusctMm7EWqGxN0ZgPChA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EntityIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"OvWE_eSEMUaq9AJS4bC8WQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_SurnameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"XPkIn82WPEyHwizCQWB7SA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Title"));
})(varBag.model, idService);
}
},
"qa5K1poB6E6csrm3irYBsw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Right"));
})(varBag.model, idService);
}
},
"oYTk9JHOYUa58qAOK24ifw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"I5i0KU7NCUCjYUw82tcunA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"vDf0W44ev0qGicq6nPq_gw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_ContactCard"));
})(varBag.model, idService);
}
},
"Y99gyQseSE2c1ipyxZf0rA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"LRxWdzgZp0mqI1nBbbTRMA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"BrgThNJYGkaWmrI6S_BRwQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"G7IY7eIQYEGYmVtOTNw7Ng": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Middle"));
})(varBag.model, idService);
}
},
"zpGHjGRoo0ikDrc4sLRkBA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"0t6QjKzrXUepJbkwiENbCA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"6bBMdFklgkug689ttZb6xg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
},
"xdXZIXhaCkKXX14aEPCQQQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
