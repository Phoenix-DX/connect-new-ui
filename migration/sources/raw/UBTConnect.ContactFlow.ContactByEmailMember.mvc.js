define("UBTConnect.ContactFlow.ContactByEmailMember.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "Connect_Communication_CS.model", "Connect2_OrbitMobile_MUI.model", "UBTConnectLibrary.model", "Connect2_OrbitMobile_MUI.controller", "UBT_AppManager.model", "UBT_AppManager.controller", "Connect2_LegacyShared.controller", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$model", "UBTConnect.ContactFlow.ContactByEmailForm.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "UBTConnectLibrary.BasePatterns.Columns_Three.mvc$model", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$model", "UBTConnectLibrary.BasePatterns.CustomText.mvc$model", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$model", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$model", "Connect_Communication_CS.model$UI_ContactByEmailFormRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Communication_CS", "Connect2_OrbitMobile_MUI.model$EmailHouseholdEventRec", "UBTConnect.referencesHealth$Connect2_OrbitMobile_MUI", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$InlineIconRec", "Connect2_OrbitMobile_MUI.model$AuditPayload_EmailHostRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_EmailHost", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "UBTConnect.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "Connect2_LegacyShared.controller$zOnApplicationEvent_Wrapper", "UBTConnect.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.controller$AddAuditEventDetailEvent"], function (OutSystems, UBTConnectModel, Connect_Communication_CSModel, Connect2_OrbitMobile_MUIModel, UBTConnectLibraryModel, Connect2_OrbitMobile_MUIController, UBT_AppManagerModel, UBT_AppManagerController, Connect2_LegacySharedController, UBTConnectLibrary_Layouts_Layout_DetailPage_mvcModel, UBTConnect_ContactFlow_ContactByEmailForm_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, UBTConnectLibrary_BasePatterns_Columns_Three_mvcModel, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvcModel, UBTConnectLibrary_BasePatterns_CustomText_mvcModel, UBTConnectLibrary_ConnectPatterns_IconText_mvcModel, UBTConnectLibrary_ConnectPatterns_Icon_mvcModel) {
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
this.attr("EmailEvent", "emailEventVar", "EmailEvent", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Connect2_OrbitMobile_MUIModel.EmailHouseholdEventRec());
}, false, Connect2_OrbitMobile_MUIModel.EmailHouseholdEventRec), 
this.attr("In_AvatarURL", "in_AvatarURLIn", "In_AvatarURL", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_AvatarURLInDataFetchStatus", "_in_AvatarURLInDataFetchStatus", "_in_AvatarURLInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ContactName", "in_ContactNameIn", "In_ContactName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_ContactNameInDataFetchStatus", "_in_ContactNameInDataFetchStatus", "_in_ContactNameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_ContactSurname", "in_ContactSurnameIn", "In_ContactSurname", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_ContactSurnameInDataFetchStatus", "_in_ContactSurnameInDataFetchStatus", "_in_ContactSurnameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
this.attr("In_EmailTo", "in_EmailToIn", "In_EmailTo", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_EmailToInDataFetchStatus", "_in_EmailToInDataFetchStatus", "_in_EmailToInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
this.attr("In_LDMEventDate", "in_LDMEventDateIn", "In_LDMEventDate", true, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, false), 
this.attr("_in_LDMEventDateInDataFetchStatus", "_in_LDMEventDateInDataFetchStatus", "_in_LDMEventDateInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_LDMEventLocality", "in_LDMEventLocalityIn", "In_LDMEventLocality", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_LDMEventLocalityInDataFetchStatus", "_in_LDMEventLocalityInDataFetchStatus", "_in_LDMEventLocalityInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_AuditEventId", "in_AuditEventIdIn", "In_AuditEventId", true, false, OS.DataTypes.DataTypes.Text, function () {
return UBTConnectModel.staticEntities.applicationEvents_Directory.emailHousehold;
}, false), 
this.attr("_in_AuditEventIdInDataFetchStatus", "_in_AuditEventIdInDataFetchStatus", "_in_AuditEventIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_OrbitEventTitle", "in_OrbitEventTitleIn", "In_OrbitEventTitle", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_OrbitEventTitleInDataFetchStatus", "_in_OrbitEventTitleInDataFetchStatus", "_in_OrbitEventTitleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_OrbitEventId", "in_OrbitEventIdIn", "In_OrbitEventId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, false), 
this.attr("_in_OrbitEventIdInDataFetchStatus", "_in_OrbitEventIdInDataFetchStatus", "_in_OrbitEventIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_OrbitMilestoneId", "in_OrbitMilestoneIdIn", "In_OrbitMilestoneId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_OrbitMilestoneIdInDataFetchStatus", "_in_OrbitMilestoneIdInDataFetchStatus", "_in_OrbitMilestoneIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_IsHousehold", "in_IsHouseholdIn", "In_IsHousehold", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsHouseholdInDataFetchStatus", "_in_IsHouseholdInDataFetchStatus", "_in_IsHouseholdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_HouseholdHeaderName", "in_HouseholdHeaderNameIn", "In_HouseholdHeaderName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_in_HouseholdHeaderNameInDataFetchStatus", "_in_HouseholdHeaderNameInDataFetchStatus", "_in_HouseholdHeaderNameInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("In_AvatarURL" in inputs) {
this.variables.in_AvatarURLIn = OS.DataConversion.ServerDataConverter.from(inputs.In_AvatarURL, OS.DataTypes.DataTypes.Text);
}

if("In_ContactName" in inputs) {
this.variables.in_ContactNameIn = OS.DataConversion.ServerDataConverter.from(inputs.In_ContactName, OS.DataTypes.DataTypes.Text);
}

if("In_ContactSurname" in inputs) {
this.variables.in_ContactSurnameIn = OS.DataConversion.ServerDataConverter.from(inputs.In_ContactSurname, OS.DataTypes.DataTypes.Text);
}

if("In_ContactLocality" in inputs) {
this.variables.in_ContactLocalityIn = OS.DataConversion.ServerDataConverter.from(inputs.In_ContactLocality, OS.DataTypes.DataTypes.Text);
}

if("In_ContactCountry" in inputs) {
this.variables.in_ContactCountryIn = OS.DataConversion.ServerDataConverter.from(inputs.In_ContactCountry, OS.DataTypes.DataTypes.Text);
}

if("In_EmailTo" in inputs) {
this.variables.in_EmailToIn = OS.DataConversion.ServerDataConverter.from(inputs.In_EmailTo, OS.DataTypes.DataTypes.Text);
}

if("In_EntityType" in inputs) {
this.variables.in_EntityTypeIn = OS.DataConversion.ServerDataConverter.from(inputs.In_EntityType, OS.DataTypes.DataTypes.Text);
}

if("In_EntityId" in inputs) {
this.variables.in_EntityIdIn = OS.DataConversion.ServerDataConverter.from(inputs.In_EntityId, OS.DataTypes.DataTypes.LongInteger);
}

if("In_LDMEventDate" in inputs) {
this.variables.in_LDMEventDateIn = OS.DataConversion.ServerDataConverter.from(inputs.In_LDMEventDate, OS.DataTypes.DataTypes.Date);
}

if("In_LDMEventLocality" in inputs) {
this.variables.in_LDMEventLocalityIn = OS.DataConversion.ServerDataConverter.from(inputs.In_LDMEventLocality, OS.DataTypes.DataTypes.Text);
}

if("In_AuditEventId" in inputs) {
this.variables.in_AuditEventIdIn = OS.DataConversion.ServerDataConverter.from(inputs.In_AuditEventId, OS.DataTypes.DataTypes.Text);
}

if("In_OrbitEventTitle" in inputs) {
this.variables.in_OrbitEventTitleIn = OS.DataConversion.ServerDataConverter.from(inputs.In_OrbitEventTitle, OS.DataTypes.DataTypes.Text);
}

if("In_OrbitEventId" in inputs) {
this.variables.in_OrbitEventIdIn = OS.DataConversion.ServerDataConverter.from(inputs.In_OrbitEventId, OS.DataTypes.DataTypes.LongInteger);
}

if("In_OrbitMilestoneId" in inputs) {
this.variables.in_OrbitMilestoneIdIn = OS.DataConversion.ServerDataConverter.from(inputs.In_OrbitMilestoneId, OS.DataTypes.DataTypes.Text);
}

if("In_IsHousehold" in inputs) {
this.variables.in_IsHouseholdIn = OS.DataConversion.ServerDataConverter.from(inputs.In_IsHousehold, OS.DataTypes.DataTypes.Boolean);
}

if("In_HouseholdHeaderName" in inputs) {
this.variables.in_HouseholdHeaderNameIn = OS.DataConversion.ServerDataConverter.from(inputs.In_HouseholdHeaderName, OS.DataTypes.DataTypes.Text);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "ContactFlow.ContactByEmailMember");
});
define("UBTConnect.ContactFlow.ContactByEmailMember.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Communication_CS.model", "Connect2_OrbitMobile_MUI.model", "UBTConnectLibrary.model", "Connect2_OrbitMobile_MUI.controller", "UBT_AppManager.model", "UBT_AppManager.controller", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.ContactFlow.ContactByEmailMember.mvc$model", "UBTConnect.ContactFlow.ContactByEmailMember.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.Layouts.Layout_DetailPage.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.ContactFlow.ContactByEmailForm.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.BasePatterns.Columns_Three.mvc$view", "UBTConnect_Utils.CW_Image.UBT_LazyImage.mvc$view", "UBTConnectLibrary.BasePatterns.CustomText.mvc$view", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "Connect_Communication_CS.model$UI_ContactByEmailFormRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Communication_CS", "Connect2_OrbitMobile_MUI.model$EmailHouseholdEventRec", "UBTConnect.referencesHealth$Connect2_OrbitMobile_MUI", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$InlineIconRec", "Connect2_OrbitMobile_MUI.model$AuditPayload_EmailHostRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_EmailHost", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "UBTConnect.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "Connect2_LegacyShared.controller$zOnApplicationEvent_Wrapper", "UBTConnect.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.controller$AddAuditEventDetailEvent"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Communication_CSModel, Connect2_OrbitMobile_MUIModel, UBTConnectLibraryModel, Connect2_OrbitMobile_MUIController, UBT_AppManagerModel, UBT_AppManagerController, Connect2_LegacySharedController, React, OSView, UBTConnect_ContactFlow_ContactByEmailMember_mvc_model, UBTConnect_ContactFlow_ContactByEmailMember_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_Layouts_Layout_DetailPage_mvc_view, OSWidgets, UBTConnect_ContactFlow_ContactByEmailForm_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, UBTConnectLibrary_BasePatterns_Columns_Three_mvc_view, UBTConnect_Utils_CW_Image_UBT_LazyImage_mvc_view, UBTConnectLibrary_BasePatterns_CustomText_mvc_view, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view) {
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
        View.displayName = "ContactFlow.ContactByEmailMember";
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
                return UBTConnect_ContactFlow_ContactByEmailMember_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_ContactFlow_ContactByEmailMember_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "ContactByEmailMember";
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
In_AlignTitleLeft: true,
In_IsPrimaryColor: false
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
value: model.getCachedValue(idService.getId("E0lAGVV_iUaslqAONoD8JA.Value"), function () {
return ((model.variables.in_IsHouseholdIn) ? ((("Contact the " + model.variables.in_HouseholdHeaderNameIn) + " household")) : ("Contact Member"));
}, function () {
return model.variables.in_IsHouseholdIn;
}, function () {
return model.variables.in_HouseholdHeaderNameIn;
}),
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
In_MessagePlaceholder: "Add a message",
In_SubjectPlaceholder: "Add a subject",
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
Options: model.getCachedValue(idService.getId("ezVtS4XYBUarzvDyW4zwGw.Options"), function () {
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
ColumnOptions: model.getCachedValue(idService.getId("cgeZy7L2zEi3FQqOg1FEBQ.ColumnOptions"), function () {
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
Options: model.getCachedValue(idService.getId("SyfJggaiyk6_XUChZoMSOg.Options"), function () {
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
EntityType: model.getCachedValue(idService.getId("ZqQQ_XrS10CEvG3YzVKOBA.EntityType"), function () {
return (((model.variables.in_EntityTypeIn === OS.BuiltinFunctions.nullTextIdentifier())) ? (UBTConnectModel.staticEntities.connect_Entity.member) : (model.variables.in_EntityTypeIn));
}, function () {
return model.variables.in_EntityTypeIn;
}),
EntityId: OS.BuiltinFunctions.longIntegerToText(model.variables.in_EntityIdIn),
ImageSize: model.getCachedValue(idService.getId("ZqQQ_XrS10CEvG3YzVKOBA.ImageSize"), function () {
return function () {
var rec = new UBTConnectLibraryModel.LazyImageSizeRec();
rec.heightAttr = UBTConnectModel.staticEntities.uBT_ImageSize.base_52;
rec.widthAttr = UBTConnectModel.staticEntities.uBT_ImageSize.square;
return rec;
}();
}),
ImageURL: model.variables.in_AvatarURLIn
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
In_TextOptions: model.getCachedValue(idService.getId("uPCAt9jcaEW_YPXiIS+9Fg.In_TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.base;
rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
return rec;
}();
}),
In_Text: ((model.variables.in_ContactNameIn + " ") + model.variables.in_ContactSurnameIn)
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
Text: model.getCachedValue(idService.getId("F5amLJcRUU69drH0LWZWOQ.Text"), function () {
return ((model.variables.in_ContactLocalityIn + (((((model.variables.in_ContactLocalityIn) !== ("")) && ((model.variables.in_ContactCountryIn) !== ("")))) ? (", ") : (""))) + model.variables.in_ContactCountryIn);
}, function () {
return model.variables.in_ContactLocalityIn;
}, function () {
return model.variables.in_ContactCountryIn;
}),
TextOptions: model.getCachedValue(idService.getId("F5amLJcRUU69drH0LWZWOQ.TextOptions"), function () {
return function () {
var rec = new UBTConnectLibraryModel.TextOptionsRec();
rec.colorAttr = UBTConnectModel.staticEntities.uBT_Color.neutral7;
rec.fontSizeAttr = UBTConnectModel.staticEntities.uBT_FontSize.extraSmall;
return rec;
}();
}),
SpacingSize: UBTConnectModel.staticEntities.uBT_Size.extraSmall
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
In_IconId: UBTConnectModel.staticEntities.uBT_Icons2.homePIn,
In_ColorId: UBTConnectModel.staticEntities.uBT_Color.neutral7,
In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.nonStandard_14
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
_dependencies: [asPrimitiveValue(model.variables.in_ContactCountryIn), asPrimitiveValue(model.variables.in_ContactLocalityIn), asPrimitiveValue(model.variables.in_ContactSurnameIn), asPrimitiveValue(model.variables.in_ContactNameIn), asPrimitiveValue(model.variables.in_AvatarURLIn), asPrimitiveValue(model.variables.in_EntityIdIn), asPrimitiveValue(model.variables.in_EntityTypeIn)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_ContactCountryIn), asPrimitiveValue(model.variables.in_ContactLocalityIn), asPrimitiveValue(model.variables.in_ContactSurnameIn), asPrimitiveValue(model.variables.in_ContactNameIn), asPrimitiveValue(model.variables.in_AvatarURLIn), asPrimitiveValue(model.variables.in_EntityIdIn), asPrimitiveValue(model.variables.in_EntityTypeIn)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.in_ContactCountryIn), asPrimitiveValue(model.variables.in_ContactLocalityIn), asPrimitiveValue(model.variables.in_ContactSurnameIn), asPrimitiveValue(model.variables.in_ContactNameIn), asPrimitiveValue(model.variables.in_AvatarURLIn), asPrimitiveValue(model.variables.in_EntityIdIn), asPrimitiveValue(model.variables.in_EntityTypeIn)]
})];
}),
bottom: PlaceholderContent.Empty,
placeholder_CommonUI_Inside_Layout: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.in_ContactCountryIn), asPrimitiveValue(model.variables.in_ContactLocalityIn), asPrimitiveValue(model.variables.in_ContactSurnameIn), asPrimitiveValue(model.variables.in_ContactNameIn), asPrimitiveValue(model.variables.in_AvatarURLIn), asPrimitiveValue(model.variables.in_EntityIdIn), asPrimitiveValue(model.variables.in_EntityTypeIn), asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.in_HouseholdHeaderNameIn), asPrimitiveValue(model.variables.in_IsHouseholdIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("UBTConnect.ContactFlow.ContactByEmailMember.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Communication_CS.model", "Connect2_OrbitMobile_MUI.model", "UBTConnectLibrary.model", "Connect2_OrbitMobile_MUI.controller", "UBT_AppManager.model", "UBT_AppManager.controller", "Connect2_LegacyShared.controller", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.ContactFlow.ContactByEmailMember.mvc$debugger", "UBTConnect.ContactFlow.controller", "UBTConnect.ContactFlow.ContactByEmailMember.mvc$controller.Handler_SubmitForm.ScheduleFeedbackMessageAfterTransitionJS", "Connect_Communication_CS.model$UI_ContactByEmailFormRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Communication_CS", "Connect2_OrbitMobile_MUI.model$EmailHouseholdEventRec", "UBTConnect.referencesHealth$Connect2_OrbitMobile_MUI", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnectLibrary.model$ColumnOptionsRec", "UBTConnect.model$IntegerIntegerIntegerRecord", "UBTConnectLibrary.model$LazyImageSizeRec", "UBTConnectLibrary.model$InlineIconRec", "Connect2_OrbitMobile_MUI.model$AuditPayload_EmailHostRec", "Connect2_OrbitMobile_MUI.controller$OnApplicationEvent_EmailHost", "UBT_AppManager.model$AppManager_CachedUserInfoRec", "UBTConnect.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$AppManager_GetCachedUserInfo", "Connect2_LegacyShared.controller$zOnApplicationEvent_Wrapper", "UBTConnect.referencesHealth$Connect2_LegacyShared", "Connect2_OrbitMobile_MUI.controller$AddAuditEventDetailEvent"], function (OutSystems, UBTConnectModel, UBTConnectController, Connect_Communication_CSModel, Connect2_OrbitMobile_MUIModel, UBTConnectLibraryModel, Connect2_OrbitMobile_MUIController, UBT_AppManagerModel, UBT_AppManagerController, Connect2_LegacySharedController, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_ContactFlow_ContactByEmailMember_mvc_Debugger, _flow_UBTConnect_ContactFlowController, UBTConnect_ContactFlow_ContactByEmailMember_mvc_controller_Handler_SubmitForm_ScheduleFeedbackMessageAfterTransitionJS) {
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
Controller.prototype.sendContactMemberEmail$ServerAction = function (in_UI_ContactByEmailFormIn, callContext) {
var controller = this.controller;
var inputs = {
In_UI_ContactByEmailForm: OS.DataConversion.ServerDataConverter.to(in_UI_ContactByEmailFormIn, OS.DataTypes.DataTypes.Record)
};
return controller.callServerAction("SendContactMemberEmail", "screenservices/UBTConnect/ContactFlow/ContactByEmailMember/ServiceAPISendContactMemberEmail", "kOLBjpp9AhIYIaVHkECoxw", inputs, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
});
};

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
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.ContactFlow.ContactByEmailMember.Handler_SubmitForm$vars"))());
vars.value.event_SubjectInLocal = event_SubjectIn;
vars.value.event_MessageInLocal = event_MessageIn;
var appManager_GetCachedUserInfoVar = new OS.DataTypes.VariableHolder();
var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.appManager_GetCachedUserInfoVar = appManager_GetCachedUserInfoVar;
varBag.jSONSerialize1Var = jSONSerialize1Var;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:HquDSEgMkkqx2125ZgaFpw:/NRWebFlows.44k9sr6oZUWsIXFdGfOLuw/NodesShownInESpaceTree.dZ2G9H2TdEeljEuDleFR9Q/ClientActions.HquDSEgMkkqx2125ZgaFpw:W8mhYcy5n0clQhV4IrAiCg", "UBTConnect", "Handler_SubmitForm", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ESq_+EW3cki2iKcLcr_8Wg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3fSpy2NWP0q6qmeDX7xJEA", callContext.id);
// IsLoading = True
model.variables.isLoadingVar = true;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LHe73tUAqkmdO_CsJuxqiQ", callContext.id);
// ContactByEmailForm.Subject = Event_Subject
model.variables.contactByEmailFormVar.subjectAttr = vars.value.event_SubjectInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:LHe73tUAqkmdO_CsJuxqiQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByEmailForm.Message = Event_Message
model.variables.contactByEmailFormVar.messageAttr = vars.value.event_MessageInLocal;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:I9vVrkGFTUCk0IffLtu15w", callContext.id);
// Execute Action: SendContactMemberEmail
model.flush();
return controller.sendContactMemberEmail$ServerAction(model.variables.contactByEmailFormVar, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:1jlBiMmeKEuosWEDWE5kMw", callContext.id);
// Execute Action: AppManager_GetCachedUserInfo
appManager_GetCachedUserInfoVar.value = UBT_AppManagerController.default.appManager_GetCachedUserInfo$Action(callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:I3nE7f0EOkeTaNDj+bqy8w", callContext.id);
// EmailEvent.EmailTo = ContactByEmailForm.EmailTo
model.variables.emailEventVar.emailToAttr = model.variables.contactByEmailFormVar.emailToAttr;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:I3nE7f0EOkeTaNDj+bqy8w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// EmailEvent.NameOfSender = AppManager_GetCachedUserInfo.UserInformation.LastName + ", " + AppManager_GetCachedUserInfo.UserInformation.FirstName
model.variables.emailEventVar.nameOfSenderAttr = ((appManager_GetCachedUserInfoVar.value.userInformationOut.lastNameAttr + ", ") + appManager_GetCachedUserInfoVar.value.userInformationOut.firstNameAttr);
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Uub43+2y4UO0NGrBQnvcwg", callContext.id) && (model.variables.in_AuditEventIdIn === UBTConnectModel.staticEntities.orbitApplicationEvent.emailHost))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:l1mNXiNmN06oswXuHhV6Jw", callContext.id);
// Execute Action: OnApplicationEvent_EmailHost
model.flush();
return Connect2_OrbitMobile_MUIController.default.onApplicationEvent_EmailHost$Action(function () {
var rec = new Connect2_OrbitMobile_MUIModel.AuditPayload_EmailHostRec();
rec.milestoneIdAttr = model.variables.in_OrbitMilestoneIdIn;
rec.eventIdAttr = model.variables.in_OrbitEventIdIn;
rec.eventTitleAttr = model.variables.in_OrbitEventTitleIn;
rec.hostNameAttr = model.variables.in_ContactNameIn;
rec.subjectAttr = vars.value.event_SubjectInLocal;
rec.messageAttr = vars.value.event_MessageInLocal;
return rec;
}(), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:CIfSSwmfcEuoVZevdT+9PA", callContext.id);
});
} else {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rkX6jBp9SEa+0fiSAicrVQ", callContext.id) && (!(model.variables.in_LDMEventDateIn.equals(OS.BuiltinFunctions.nullDate())) || ((model.variables.in_LDMEventLocalityIn) !== (""))))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:E35B2cgxW0muePNDSUa4+Q", callContext.id);
// Execute Action: AddAuditEventDetailEvent
model.flush();
return Connect2_OrbitMobile_MUIController.default.addAuditEventDetailEvent$Action(UBTConnectModel.staticEntities.applicationEvents_Directory.emailHousehold, OS.DataTypes.LongInteger.defaultValue, "", model.variables.in_LDMEventDateIn, model.variables.in_LDMEventLocalityIn, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:0SufeK1Iv0+Gt2WXuORLyw", callContext.id);
// JSON Serialize: JSONSerialize1
jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.emailEventVar, false, false);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:zsiMwliAfkW80OZJcwWMhA", callContext.id);
// EventJSON = JSONSerialize1.JSON
vars.value.eventJSONVar = jSONSerialize1Var.value.jSONOut;
});
}

}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:VroOqV2yrESd6SOH4l3ccA", callContext.id);
// Execute Action: zOnApplicationEvent_Wrapper
model.flush();
return Connect2_LegacySharedController.default.zOnApplicationEvent_Wrapper$Action(UBTConnectModel.staticEntities.applicationEvents_Directory.emailHousehold, vars.value.eventJSONVar, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:ear9jYd88U6Cr63ap2dNeA", callContext.id);
controller.safeExecuteJSNode(UBTConnect_ContactFlow_ContactByEmailMember_mvc_controller_Handler_SubmitForm_ScheduleFeedbackMessageAfterTransitionJS, "ScheduleFeedbackMessageAfterTransition", "Handler_SubmitForm", {
Message: OS.DataConversion.JSNodeParamConverter.to("Your message has been sent.", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PfFrJ9EW5kScTQrXkJRhIA", callContext.id);
// Destination: (PreviousScreen)
return OS.Flow.returnAsync(OS.Navigation.navigateBack(null, callContext, true));
});
});
}

});
});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:HquDSEgMkkqx2125ZgaFpw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:HquDSEgMkkqx2125ZgaFpw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.ContactFlow.ContactByEmailMember.Handler_SubmitForm$vars", [{
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
}, {
name: "EventJSON",
attrName: "eventJSONVar",
mandatory: false,
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
try {OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:0gFSY5J9V0eido30seTuxg:/NRWebFlows.44k9sr6oZUWsIXFdGfOLuw/NodesShownInESpaceTree.dZ2G9H2TdEeljEuDleFR9Q/ClientActions.0gFSY5J9V0eido30seTuxg:QgsHIzLtqtf52MpuYTwQpw", "UBTConnect", "ScreenEvent_OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:s5CsQIEdiEWF9ho68S64gw", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xi8R8MN+50ysE2QwXdc8Mw", callContext.id);
// ContactByEmailForm.FirstName = In_ContactName
model.variables.contactByEmailFormVar.firstNameAttr = model.variables.in_ContactNameIn;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xi8R8MN+50ysE2QwXdc8Mw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ContactByEmailForm.ContactMember = In_ContactName
model.variables.contactByEmailFormVar.contactMemberAttr = model.variables.in_ContactNameIn;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:xi8R8MN+50ysE2QwXdc8Mw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ContactByEmailForm.EmailTo = In_EmailTo
model.variables.contactByEmailFormVar.emailToAttr = model.variables.in_EmailToIn;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:iV5PFwnvs0ymTDfV4e6MGg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:0gFSY5J9V0eido30seTuxg", callContext.id);
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
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:dZ2G9H2TdEeljEuDleFR9Q:/NRWebFlows.44k9sr6oZUWsIXFdGfOLuw/NodesShownInESpaceTree.dZ2G9H2TdEeljEuDleFR9Q:97e3H8zgHgTQQd_biSOwyA", "UBTConnect", "ContactByEmailMember", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:dZ2G9H2TdEeljEuDleFR9Q", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:44k9sr6oZUWsIXFdGfOLuw", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "ContactFlow/ContactByEmailMember On Initialize");
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
define("UBTConnect.ContactFlow.ContactByEmailMember.mvc$controller.Handler_SubmitForm.ScheduleFeedbackMessageAfterTransitionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.setTimeout(function() {
    $public.FeedbackMessage.showFeedbackMessage($parameters.Message, 1);
}, 500);
};
});

define("UBTConnect.ContactFlow.ContactByEmailMember.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"W8iIwnHmE0Sdg9KDQua+cA": {
getter: function (varBag, idService) {
return varBag.vars.value.eventJSONVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Uq1tWsD8wUqXAuKm3tSmVg": {
getter: function (varBag, idService) {
return varBag.vars.value.event_SubjectInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"39Lnm9OoDEWGftSHyv2VPg": {
getter: function (varBag, idService) {
return varBag.vars.value.event_MessageInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"1jlBiMmeKEuosWEDWE5kMw": {
getter: function (varBag, idService) {
return varBag.appManager_GetCachedUserInfoVar.value;
}
},
"0SufeK1Iv0+Gt2WXuORLyw": {
getter: function (varBag, idService) {
return varBag.jSONSerialize1Var.value;
}
},
"ear9jYd88U6Cr63ap2dNeA": {
getter: function (varBag, idService) {
return varBag.scheduleFeedbackMessageAfterTransitionJSResult.value;
}
},
"XTK2KDmN6E6qtSN+A1tkwA": {
getter: function (varBag, idService) {
return varBag.model.variables.isLoadingVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"arkYqY1Vf0K4qI+M3CrNVg": {
getter: function (varBag, idService) {
return varBag.model.variables.contactByEmailFormVar;
}
},
"ipIGEGl6LkG1fAJr+LIAew": {
getter: function (varBag, idService) {
return varBag.model.variables.emailEventVar;
}
},
"+9podgv03kGWHhmjRElrsg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_AvatarURLIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"oAnl9UoqlkeIeV_BENAHOg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ContactNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"aig0mDvLlkm15rzz6hsGNw": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ContactSurnameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"wOtozHJJAUqnDGsLJvGnLg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ContactLocalityIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"iCkKGJHJEEa6fGOZ6VpKCQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_ContactCountryIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"jfSt7EJ690WAwSPLsJWEXA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EmailToIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"3V5+FvKpx0mfB47Uyb_r6w": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EntityTypeIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Y0N6z7zP6EWZGUK7gm8a7g": {
getter: function (varBag, idService) {
return varBag.model.variables.in_EntityIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"bWQ+xtcT80KR7TEjg5kaYQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_LDMEventDateIn;
},
dataType: OS.DataTypes.DataTypes.Date
},
"DdGLeTL71UOWUd24K8kUmQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_LDMEventLocalityIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"JMv_o8mwEEq7mrTSJ2ZzzQ": {
getter: function (varBag, idService) {
return varBag.model.variables.in_AuditEventIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"vM1OFGHmpEGyzvEQsOKizg": {
getter: function (varBag, idService) {
return varBag.model.variables.in_OrbitEventTitleIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"nWzJKrjQ8kSvUy6UsDFh9g": {
getter: function (varBag, idService) {
return varBag.model.variables.in_OrbitEventIdIn;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"zcdtPJT4bkymYjyM3c29SA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_OrbitMilestoneIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"nRtRC3P4iEKgWOR9YbArTA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsHouseholdIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"2Ef5VQyH10OMHjmezZ4x0g": {
getter: function (varBag, idService) {
return varBag.model.variables.in_HouseholdHeaderNameIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ZxzxO06WLUCBsUErpD747A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Title"));
})(varBag.model, idService);
}
},
"foGknEg2hUWhDboLPCV8Yg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header_Right"));
})(varBag.model, idService);
}
},
"KzUairqVM06YE_It5urIYA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderContent"));
})(varBag.model, idService);
}
},
"LR7nxTcf3Eqy9kAN4tA1BQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"Ez7my3Deu02HHaKvM5VWnA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_ContactCard"));
})(varBag.model, idService);
}
},
"c8d+c9_vl0asRVKr18tSvA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"aG9qTeYPTkK3wt6D6AmU7g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Left"));
})(varBag.model, idService);
}
},
"dJ28qyNYPkiIpIeKXfRhqg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"SBmoBlnebESeQSdNpk4ZSQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Middle"));
})(varBag.model, idService);
}
},
"7wMXENdYS0a9Kpg1okkwUQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Icon"));
})(varBag.model, idService);
}
},
"aoAQ1UUWH06FHNaQoDSV3Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"7or5Acs85kWwJc2fpxOhQw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
},
"IxlvfL_n+UOhpMh32Z8HEw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
