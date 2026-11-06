define("UBTConnect.App_Common.Login.mvc$model", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnectLibrary.model", "UBTConnect.controller", "UBT_AppManager.controller", "NavigationHandler.controller", "UBTJavaScriptUtils.controller", "Connect2_LegacyShared.model", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Notes_MCS.model", "UBT_AppManager.model", "UBTConnectLibrary.Layouts.Layout_LoginFlow.mvc$model", "UBTConnectLibrary.ConnectPatterns.Tile.mvc$model", "UBTConnect.App_Common.UnsupportedVersion_Wrapper.mvc$model", "UBTConnect.App_Common.WelcomeToConnect.mvc$model", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$model", "OutSystemsUI_2_23.Utilities.ButtonLoading.mvc$model", "UBTConnect.App_Common.Version_LoginWrapper.mvc$model", "UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_ExitConfirmation.mvc$model", "UBTConnect.App_Common.OfflineDataSyncEvents.mvc$model", "UBT_AppManager.Layouts.AppManager_Events.mvc$model", "NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc$model", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$model", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnect.controller$ShowExceptionMessage", "UBT_AppManager.controller$AppManager_Login", "UBTConnect.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$DelayedMessage_Show", "UBT_AppManager.controller$AppManager_HandleDeviceAwarenessPopUp", "NavigationHandler.controller$ReplaceOnUpcomingNavigation", "UBTConnect.referencesHealth$NavigationHandler", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "Connect2_LegacyShared.model$LocalBookmarkRec", "UBTConnect.referencesHealth$Connect2_LegacyShared", "UBTConnect.model$LocalBookmarkList", "UBTConnect_Bookmarks_MCS.model$LocalBookmarkRec", "UBTConnect.referencesHealth$UBTConnect_Bookmarks_MCS", "UBTConnect.model$LocalBookmark2List", "UBTConnect_Notes_MCS.model$LocalNoteRec", "UBTConnect.referencesHealth$UBTConnect_Notes_MCS", "UBTConnect.model$LocalNoteList", "UBTConnect.controller$Connect_SetLoggedContext", "UBTConnect.controller$TriggerOfflineDataSync", "UBT_AppManager.model$AppManager_CallbackRec", "UBT_AppManager.controller$AppManager_SetAppCallback", "UBT_AppManager.controller$AppManager_Logout", "UBTConnect.controller$Get_IsUnsupportedSystem"], function (OutSystems, UBTConnectModel, UBTConnectLibraryModel, UBTConnectController, UBT_AppManagerController, NavigationHandlerController, UBTJavaScriptUtilsController, Connect2_LegacySharedModel, UBTConnect_Bookmarks_MCSModel, UBTConnect_Notes_MCSModel, UBT_AppManagerModel, UBTConnectLibrary_Layouts_Layout_LoginFlow_mvcModel, UBTConnectLibrary_ConnectPatterns_Tile_mvcModel, UBTConnect_App_Common_UnsupportedVersion_Wrapper_mvcModel, UBTConnect_App_Common_WelcomeToConnect_mvcModel, UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel, OutSystemsUI_2_23_Utilities_ButtonLoading_mvcModel, UBTConnect_App_Common_Version_LoginWrapper_mvcModel, UBTConnect_App_Common_Blocks_PopupDialogs_Dialog_ExitConfirmation_mvcModel, UBTConnect_App_Common_OfflineDataSyncEvents_mvcModel, UBT_AppManager_Layouts_AppManager_Events_mvcModel, NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvcModel, UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsExecutingLogin", "isExecutingLoginVar", "IsExecutingLogin", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsResettingPassword", "isResettingPasswordVar", "IsResettingPassword", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsUnsupportedSystem", "isUnsupportedSystemVar", "IsUnsupportedSystem", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("In_IsFromInvalidPermissions", "in_IsFromInvalidPermissionsIn", "In_IsFromInvalidPermissions", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsFromInvalidPermissionsInDataFetchStatus", "_in_IsFromInvalidPermissionsInDataFetchStatus", "_in_IsFromInvalidPermissionsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("In_IsFromResetPIN", "in_IsFromResetPINIn", "In_IsFromResetPIN", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_in_IsFromResetPINInDataFetchStatus", "_in_IsFromResetPINInDataFetchStatus", "_in_IsFromResetPINInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("CallbackType", "callbackTypeIn", "CallbackType", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_callbackTypeInDataFetchStatus", "_callbackTypeInDataFetchStatus", "_callbackTypeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("CallbackGUID", "callbackGUIDIn", "CallbackGUID", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_callbackGUIDInDataFetchStatus", "_callbackGUIDInDataFetchStatus", "_callbackGUIDInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (((((((((((UBTConnectLibrary_Layouts_Layout_LoginFlow_mvcModel.hasValidationWidgets || UBTConnectLibrary_ConnectPatterns_Tile_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_UnsupportedVersion_Wrapper_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_WelcomeToConnect_mvcModel.hasValidationWidgets) || UBTConnectLibrary_BasePatterns_CustomContainer_mvcModel.hasValidationWidgets) || OutSystemsUI_2_23_Utilities_ButtonLoading_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_Version_LoginWrapper_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_Blocks_PopupDialogs_Dialog_ExitConfirmation_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_OfflineDataSyncEvents_mvcModel.hasValidationWidgets) || UBT_AppManager_Layouts_AppManager_Events_mvcModel.hasValidationWidgets) || NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvcModel.hasValidationWidgets) || UBTConnect_App_Common_CommonUI_InsideLayout_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("In_IsFromInvalidPermissions" in inputs) {
this.variables.in_IsFromInvalidPermissionsIn = OS.DataConversion.ServerDataConverter.from(inputs.In_IsFromInvalidPermissions, OS.DataTypes.DataTypes.Boolean);
}

if("In_IsFromResetPIN" in inputs) {
this.variables.in_IsFromResetPINIn = OS.DataConversion.ServerDataConverter.from(inputs.In_IsFromResetPIN, OS.DataTypes.DataTypes.Boolean);
}

if("CallbackType" in inputs) {
this.variables.callbackTypeIn = OS.DataConversion.ServerDataConverter.from(inputs.CallbackType, OS.DataTypes.DataTypes.Text);
}

if("CallbackGUID" in inputs) {
this.variables.callbackGUIDIn = OS.DataConversion.ServerDataConverter.from(inputs.CallbackGUID, OS.DataTypes.DataTypes.Text);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "App_Common.Login");
});
define("UBTConnect.App_Common.Login.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBT_AppManager.controller", "NavigationHandler.controller", "UBTJavaScriptUtils.controller", "Connect2_LegacyShared.model", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Notes_MCS.model", "UBT_AppManager.model", "react", "OutSystems/ReactView/Main", "UBTConnect.App_Common.Login.mvc$model", "UBTConnect.App_Common.Login.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.Layouts.Layout_LoginFlow.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.Tile.mvc$view", "UBTConnect.App_Common.UnsupportedVersion_Wrapper.mvc$view", "UBTConnect.App_Common.WelcomeToConnect.mvc$view", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "OutSystemsUI_2_23.Utilities.ButtonLoading.mvc$view", "UBTConnect.App_Common.Version_LoginWrapper.mvc$view", "UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_ExitConfirmation.mvc$view", "UBTConnect.App_Common.OfflineDataSyncEvents.mvc$view", "UBT_AppManager.Layouts.AppManager_Events.mvc$view", "NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc$view", "UBTConnect.App_Common.CommonUI_InsideLayout.mvc$view", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnect.controller$ShowExceptionMessage", "UBT_AppManager.controller$AppManager_Login", "UBTConnect.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$DelayedMessage_Show", "UBT_AppManager.controller$AppManager_HandleDeviceAwarenessPopUp", "NavigationHandler.controller$ReplaceOnUpcomingNavigation", "UBTConnect.referencesHealth$NavigationHandler", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "Connect2_LegacyShared.model$LocalBookmarkRec", "UBTConnect.referencesHealth$Connect2_LegacyShared", "UBTConnect.model$LocalBookmarkList", "UBTConnect_Bookmarks_MCS.model$LocalBookmarkRec", "UBTConnect.referencesHealth$UBTConnect_Bookmarks_MCS", "UBTConnect.model$LocalBookmark2List", "UBTConnect_Notes_MCS.model$LocalNoteRec", "UBTConnect.referencesHealth$UBTConnect_Notes_MCS", "UBTConnect.model$LocalNoteList", "UBTConnect.controller$Connect_SetLoggedContext", "UBTConnect.controller$TriggerOfflineDataSync", "UBT_AppManager.model$AppManager_CallbackRec", "UBT_AppManager.controller$AppManager_SetAppCallback", "UBT_AppManager.controller$AppManager_Logout", "UBTConnect.controller$Get_IsUnsupportedSystem"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBT_AppManagerController, NavigationHandlerController, UBTJavaScriptUtilsController, Connect2_LegacySharedModel, UBTConnect_Bookmarks_MCSModel, UBTConnect_Notes_MCSModel, UBT_AppManagerModel, React, OSView, UBTConnect_App_Common_Login_mvc_model, UBTConnect_App_Common_Login_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_Layouts_Layout_LoginFlow_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_Tile_mvc_view, UBTConnect_App_Common_UnsupportedVersion_Wrapper_mvc_view, UBTConnect_App_Common_WelcomeToConnect_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OutSystemsUI_2_23_Utilities_ButtonLoading_mvc_view, UBTConnect_App_Common_Version_LoginWrapper_mvc_view, UBTConnect_App_Common_Blocks_PopupDialogs_Dialog_ExitConfirmation_mvc_view, UBTConnect_App_Common_OfflineDataSyncEvents_mvc_view, UBT_AppManager_Layouts_AppManager_Events_mvc_view, NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view) {
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
        View.displayName = "App_Common.Login";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI_2_23.OutSystemsUI.css", "css/UBTConnectLibrary.UBTConnectBase.css", "css/UBTConnectLibrary.UBTConnectLibrary.css", "css/Connect2_LegacyShared.UBTConnect.css", "css/OutSystemsUI_2_23.OutSystemsUI.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_Layouts_Layout_LoginFlow_mvc_view, UBTConnectLibrary_ConnectPatterns_Tile_mvc_view, UBTConnect_App_Common_UnsupportedVersion_Wrapper_mvc_view, UBTConnect_App_Common_WelcomeToConnect_mvc_view, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, OutSystemsUI_2_23_Utilities_ButtonLoading_mvc_view, UBTConnect_App_Common_Version_LoginWrapper_mvc_view, UBTConnect_App_Common_Blocks_PopupDialogs_Dialog_ExitConfirmation_mvc_view, UBTConnect_App_Common_OfflineDataSyncEvents_mvc_view, UBT_AppManager_Layouts_AppManager_Events_mvc_view, NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_view, UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return UBTConnect_App_Common_Login_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return UBTConnect_App_Common_Login_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "Login";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_Layouts_Layout_LoginFlow_mvc_view, {
inputs: {
In_HasOverlay: true
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
placeholder_Header: PlaceholderContent.Empty,
placeholder_Content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "connect-login-screen",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "connect-login-screen__content",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_ConnectPatterns_Tile_mvc_view, {
inputs: {
ExtendedClasses: "ubt-zindex-2 connect-login-card"
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
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "connect-login-card__content",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.isUnsupportedSystemVar, false, this, function () {
return [React.createElement(UBTConnect_App_Common_UnsupportedVersion_Wrapper_mvc_view, {
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
uuid: "5",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [React.createElement(UBTConnect_App_Common_WelcomeToConnect_mvc_view, {
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
uuid: "6",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("U_bvzt2cA0m4At4XZHZ+JA.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.marginSizeAttr = function () {
var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
return rec;
}();
return rec;
}();
}),
ExtendedClasses: "login-button  "
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
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OutSystemsUI_2_23_Utilities_ButtonLoading_mvc_view, {
inputs: {
ExtendedClass: "full-width",
ShowLabelOnLoading: true,
IsLoading: model.variables.isExecutingLoginVar
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
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: !(model.variables.isResettingPasswordVar),
gridProperties: {
classes: "OSFillParent"
},
isDefault: false,
onClick: function () {
_this.validateWidget("");
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Common/Login/Button OnClick");
return controller.login$Action(false, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});

;
},
style: "btn btn-primary",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "osui-btn-loading__spinner-animation",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}), "Login with UBT One ")];
})
},
_dependencies: [asPrimitiveValue(model.variables.isResettingPasswordVar)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.isResettingPasswordVar), asPrimitiveValue(model.variables.isExecutingLoginVar)]
}), React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
inputs: {
ExtendedClasses: "login-button",
Options: model.getCachedValue(idService.getId("dMq8M5RMsUy6UWrBcQ3Rfw.Options"), function () {
return function () {
var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
rec.marginSizeAttr = function () {
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
uuid: "12",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OutSystemsUI_2_23_Utilities_ButtonLoading_mvc_view, {
inputs: {
ShowLabelOnLoading: true,
ExtendedClass: "full-width",
IsLoading: model.variables.isResettingPasswordVar
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
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: !(model.variables.isExecutingLoginVar),
gridProperties: {
classes: "OSFillParent"
},
isDefault: false,
onClick: function () {
_this.validateWidget("");
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "App_Common/Login/Button OnClick");
return controller.login$Action(true, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});

;
},
style: "btn",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "osui-btn-loading__spinner-animation",
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}), "Forgot Password?")];
})
},
_dependencies: [asPrimitiveValue(model.variables.isExecutingLoginVar)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.isExecutingLoginVar), asPrimitiveValue(model.variables.isResettingPasswordVar)]
}))];
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.isResettingPasswordVar), asPrimitiveValue(model.variables.isExecutingLoginVar), asPrimitiveValue(model.variables.isUnsupportedSystemVar)]
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-align-center",
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "need-help-footer",
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Need help? ", React.createElement(OSWidgets.Link, {
enabled: true,
gridProperties: {
marginLeft: "0"
},
style: "font-regular text-underline",
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL("/UBTConnect/ContactUsMenu", {}),
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Contact Us")), React.createElement(UBTConnect_App_Common_Version_LoginWrapper_mvc_view, {
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
uuid: "19",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})))), React.createElement(UBTConnect_App_Common_Blocks_PopupDialogs_Dialog_ExitConfirmation_mvc_view, {
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
uuid: "20",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
placeholder_CommonUI_Inside_Layout: new PlaceholderContent(function () {
return [React.createElement(UBTConnect_App_Common_OfflineDataSyncEvents_mvc_view, {
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
uuid: "21",
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(UBT_AppManager_Layouts_AppManager_Events_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onCallback$Action: function (appManager_CallbackIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Layouts2/AppManager_Events OnCallback");
return controller.appManager_Callback$Action(appManager_CallbackIn, controller.callContext(eventHandlerContext));
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
uuid: "22",
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_view, {
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
name: "ConfirmationDialog_ResetPassword",
alias: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
dialogHeader: new PlaceholderContent(function () {
return ["Security Warning"];
}),
dialogBody: new PlaceholderContent(function () {
return ["Your Connect account was accessed from a different device or application.", React.createElement("br"), "To help keep your account secure, please click ‘Continue’ to reset your password."];
}),
buttonLabel_Confirm: new PlaceholderContent(function () {
return ["Continue"];
}),
buttonLabel_Dismiss: new PlaceholderContent(function () {
return ["Cancel"];
})
},
_dependencies: []
}), React.createElement(UBTConnect_App_Common_CommonUI_InsideLayout_mvc_view, {
inputs: {
In_IgnoreLockScreen: true,
In_IgnorePolicy: true
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
uuid: "24",
alias: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.isResettingPasswordVar), asPrimitiveValue(model.variables.isExecutingLoginVar), asPrimitiveValue(model.variables.isUnsupportedSystemVar)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("UBTConnect.App_Common.Login.mvc$controller", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "UBT_AppManager.controller", "NavigationHandler.controller", "UBTJavaScriptUtils.controller", "Connect2_LegacyShared.model", "UBTConnect_Bookmarks_MCS.model", "UBTConnect_Notes_MCS.model", "UBT_AppManager.model", "UBTConnect.languageResources", "UBTConnect.clientVariables", "UBTConnect.App_Common.Login.mvc$debugger", "UBTConnect.App_Common.controller", "UBTConnect.App_Common.Login.mvc$controller.OnInitialize.IsRestoredFromCacheJS", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec", "UBTConnect.controller$ShowExceptionMessage", "UBT_AppManager.controller$AppManager_Login", "UBTConnect.referencesHealth$UBT_AppManager", "UBT_AppManager.controller$DelayedMessage_Show", "UBT_AppManager.controller$AppManager_HandleDeviceAwarenessPopUp", "NavigationHandler.controller$ReplaceOnUpcomingNavigation", "UBTConnect.referencesHealth$NavigationHandler", "UBTJavaScriptUtils.controller$FeedbackMessage_AutoClose", "UBTConnect.referencesHealth$UBTJavaScriptUtils", "Connect2_LegacyShared.model$LocalBookmarkRec", "UBTConnect.referencesHealth$Connect2_LegacyShared", "UBTConnect.model$LocalBookmarkList", "UBTConnect_Bookmarks_MCS.model$LocalBookmarkRec", "UBTConnect.referencesHealth$UBTConnect_Bookmarks_MCS", "UBTConnect.model$LocalBookmark2List", "UBTConnect_Notes_MCS.model$LocalNoteRec", "UBTConnect.referencesHealth$UBTConnect_Notes_MCS", "UBTConnect.model$LocalNoteList", "UBTConnect.controller$Connect_SetLoggedContext", "UBTConnect.controller$TriggerOfflineDataSync", "UBT_AppManager.model$AppManager_CallbackRec", "UBT_AppManager.controller$AppManager_SetAppCallback", "UBT_AppManager.controller$AppManager_Logout", "UBTConnect.controller$Get_IsUnsupportedSystem"], function (OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, UBT_AppManagerController, NavigationHandlerController, UBTJavaScriptUtilsController, Connect2_LegacySharedModel, UBTConnect_Bookmarks_MCSModel, UBTConnect_Notes_MCSModel, UBT_AppManagerModel, UBTConnectLanguageResources, UBTConnectClientVariables, UBTConnect_App_Common_Login_mvc_Debugger, _flow_UBTConnect_App_CommonController, UBTConnect_App_Common_Login_mvc_controller_OnInitialize_IsRestoredFromCacheJS) {
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
Controller.prototype._login$Action = function (isResetPasswordIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Login");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Common.Login.Login$vars"))());
vars.value.isResetPasswordInLocal = isResetPasswordIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:sC2nGARaFEqQ5vyrsxahHA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.wfp+ldjfn02BaWgFSFyglA/ClientActions.sC2nGARaFEqQ5vyrsxahHA:kNfwoSGuwqbOag9GLfRfig", "UBTConnect", "Login", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:PV_6Q+SZzEuR9KkMEr_XzA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:GCQJ2MdSU0OSCBnm3lG89g", callContext.id) && vars.value.isResetPasswordInLocal)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:7pvvKyiELkidpIoUMD5Elg", callContext.id);
// IsResettingPassword = True
model.variables.isResettingPasswordVar = true;
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gh1_6+VhsUi3gE+XmyzF0w", callContext.id);
// IsExecutingLogin = True
model.variables.isExecutingLoginVar = true;
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_dbjz_VIt0OR8wTbXIlhyw", callContext.id);
// Execute Action: AppManager_Login
model.flush();
return UBT_AppManagerController.default.appManager_Login$Action(vars.value.isResetPasswordInLocal, idService.getId("ConfirmationDialog_ResetPassword"), "", callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:_NfhpqRXy0u8cwaV_L4JAg", callContext.id);
});
}).catch(function (ex) {
OS.Logger.trace("Login.Login", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:x_q2e9IbYUa98ZcL_0phZQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4X8nGAFc6ki4W2cRdMPePg", callContext.id);
// IsExecutingLogin = False
model.variables.isExecutingLoginVar = false;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4X8nGAFc6ki4W2cRdMPePg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// IsResettingPassword = False
model.variables.isResettingPasswordVar = false;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6LtpCdmkhUiMNXY+XzNmDw", callContext.id);
// Execute Action: ShowExceptionMessage
model.flush();
return UBTConnectController.default.showExceptionMessage$Action(allExceptionsVar.value.exceptionMessageAttr, false, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TTwAn5JQwk2h6_YbqoLw7g", callContext.id);
return OS.Flow.returnAsync();

});
});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:sC2nGARaFEqQ5vyrsxahHA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:sC2nGARaFEqQ5vyrsxahHA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.App_Common.Login.Login$vars", [{
name: "isResetPassword",
attrName: "isResetPasswordInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
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
var appManager_HandleDeviceAwarenessPopUpVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.appManager_HandleDeviceAwarenessPopUpVar = appManager_HandleDeviceAwarenessPopUpVar;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:U39QZOCcQkChCY0tS3IgTg:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.wfp+ldjfn02BaWgFSFyglA/ClientActions.U39QZOCcQkChCY0tS3IgTg:vZRlamqbKYevtyI_jsGRiA", "UBTConnect", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:9fVXSu+Cxke8NNRPr68Avw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// DeviceAwarenesCallback?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:WNjxtxdpfkKdQI_+YWOubQ", callContext.id) && (model.variables.callbackTypeIn === UBTConnectModel.staticEntities.appManager_JSUtils_CustomEvents.deviceAwareness_InvalidDevice))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:RJ6E1MkVs02EC1W8FHZHYg", callContext.id);
// Execute Action: AppManager_HandleDeviceAwarenessPopUp
model.flush();
return UBT_AppManagerController.default.appManager_HandleDeviceAwarenessPopUp$Action(idService.getId("ConfirmationDialog_ResetPassword"), model.variables.callbackGUIDIn, callContext).then(function (value) {
appManager_HandleDeviceAwarenessPopUpVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Bj4hwaebXU+6Bwi2MbD6fA", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rEgeFOdAvEinPzQQQ9LwVg", callContext.id);
// Execute Action: DelayedMessage_Show
UBT_AppManagerController.default.delayedMessage_Show$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wij7RNlxtUG3SAxkJ7AbVw", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:U39QZOCcQkChCY0tS3IgTg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:U39QZOCcQkChCY0tS3IgTg", callContext.id);
throw ex;

});
};
Controller.prototype._appManager_Callback$Action = function (appManager_CallbackIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("AppManager_Callback");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("UBTConnect.App_Common.Login.AppManager_Callback$vars"))());
vars.value.appManager_CallbackInLocal = appManager_CallbackIn.clone();
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:JXPFehooy0Sbx2cM_7Gdzg:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.wfp+ldjfn02BaWgFSFyglA/ClientActions.JXPFehooy0Sbx2cM_7Gdzg:sku7UXQXjRrNjDGGuI9pxw", "UBTConnect", "AppManager_Callback", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:Yn0lk7NQoU2lTTUpQwPlPQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:O7pgqG+b60aZYWzE72qz7A", callContext.id) && vars.value.appManager_CallbackInLocal.isSucessAttr)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:HwQu0VFaFUq3pyfeC7cIGQ", callContext.id);
// Execute Action: Connect_SetLoggedContext
model.flush();
return UBTConnectController.default.connect_SetLoggedContext$Action(new UBTConnectModel.LocalBookmarkList(), true, new UBTConnectModel.LocalBookmark2List(), new UBTConnectModel.LocalNoteList(), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gCC66QaFhEKJ2qBaOssc8g", callContext.id);
// Execute Action: TriggerOfflineDataSync
UBTConnectController.default.triggerOfflineDataSync$Action("", false, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:NEoqitiwh0SLzXI3Z0Sz1A", callContext.id);
// Execute Action: ReplaceOnUpcomingNavigation
NavigationHandlerController.default.replaceOnUpcomingNavigation$Action(callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pmYa2G+dF0mTG_8Jy6PuSw", callContext.id);
// IsExecutingLogin = False
model.variables.isExecutingLoginVar = false;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:pmYa2G+dF0mTG_8Jy6PuSw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// IsResettingPassword = False
model.variables.isResettingPasswordVar = false;
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:jA6K0xqrrUO2_LPTE201+A", callContext.id) && (vars.value.appManager_CallbackInLocal.callbackTypeAttr === UBTConnectModel.staticEntities.appManager_JSUtils_CustomEvents.idP_OnLogin))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:mHrkBCNQwEiI2dbEDkBsQQ", callContext.id);
// Destination: /UBTConnect/HomeFeed
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/HomeFeed", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
if((vars.value.appManager_CallbackInLocal.callbackTypeAttr === UBTConnectModel.staticEntities.appManager_JSUtils_CustomEvents.idP_OnResetPassword)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:AboNxZjR3U64z7VJGeDNCQ", callContext.id);
// Execute Action: FeedbackMessage_AutoClose2
UBTJavaScriptUtilsController.default.feedbackMessage_AutoClose$Action(vars.value.appManager_CallbackInLocal.messageTitleAttr, vars.value.appManager_CallbackInLocal.messageAttr, UBTConnectModel.staticEntities.uBT_MessageType.success, true, "", 0, false, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:o_nrNMto70uOYk+geSB_rw", callContext.id);
} else {
if((vars.value.appManager_CallbackInLocal.callbackTypeAttr === UBTConnectModel.staticEntities.appManager_JSUtils_CustomEvents.pIN_NeedRegistration)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:e_vdwFpnhUiMCDM6V6wl_w", callContext.id);
// Destination: /UBTConnect/PINRegister
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/UBTConnect/PINRegister", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:K5R0SfHT5E+Gbs+vBYnA8g", callContext.id);
}

}

}

});
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:UKKc8tFeGEOVjjgFl7DSxg", callContext.id);
// Execute Action: FeedbackMessage_AutoClose
UBTJavaScriptUtilsController.default.feedbackMessage_AutoClose$Action(vars.value.appManager_CallbackInLocal.messageTitleAttr, vars.value.appManager_CallbackInLocal.messageAttr, vars.value.appManager_CallbackInLocal.messageTypeAttr, true, "", 0, false, callContext);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gWR_fSD08kaugrc0m1xN7g", callContext.id);
// IsExecutingLogin = False
model.variables.isExecutingLoginVar = false;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:gWR_fSD08kaugrc0m1xN7g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// IsResettingPassword = False
model.variables.isResettingPasswordVar = false;
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:MIzaLQOe4E22JwXMJshipw", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:JXPFehooy0Sbx2cM_7Gdzg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:JXPFehooy0Sbx2cM_7Gdzg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.App_Common.Login.AppManager_Callback$vars", [{
name: "AppManager_Callback",
attrName: "appManager_CallbackInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new UBT_AppManagerModel.AppManager_CallbackRec();
},
complexType: UBT_AppManagerModel.AppManager_CallbackRec
}]);
Controller.prototype._onInitialize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
var get_IsUnsupportedSystemVar = new OS.DataTypes.VariableHolder();
var isRestoredFromCacheJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.get_IsUnsupportedSystemVar = get_IsUnsupportedSystemVar;
varBag.isRestoredFromCacheJSResult = isRestoredFromCacheJSResult;
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:j+bBlSDHVk6+BDFYpubRsA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.wfp+ldjfn02BaWgFSFyglA/ClientActions.j+bBlSDHVk6+BDFYpubRsA:MfD5_E3ixSoY2OiDE7h49g", "UBTConnect", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:RdRiGBS3fUuemF52ALgAyA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:rmRQgtSWrUSA8bKWwma36Q", callContext.id);
// Execute Action: Get_IsUnsupportedSystem
get_IsUnsupportedSystemVar.value = UBTConnectController.default.get_IsUnsupportedSystem$Action(callContext);

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:6z3JE9FrlECE8RSzJS_fyQ", callContext.id);
// IsUnsupportedSystem = Get_IsUnsupportedSystem.Out_IsUnsupportedSystem
model.variables.isUnsupportedSystemVar = get_IsUnsupportedSystemVar.value.out_IsUnsupportedSystemOut;
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:4E1e1MKuzkSQNLwtozvJaw", callContext.id) && model.variables.isUnsupportedSystemVar)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:aLJ1Tn__00WX4pa_d0HeZA", callContext.id);
} else {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:yEbRs0WAnU6F_laiuMXZlA", callContext.id) && !(model.variables.in_IsFromInvalidPermissionsIn))) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:+9UnIdBni0OnJ3+_nb4zEg", callContext.id);
// Execute Action: AppManager_SetAppCallback
UBT_AppManagerController.default.appManager_SetAppCallback$Action("", callContext);
}

OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:3ylbyJYeEUO1fpoOvXCVFA", callContext.id);
// IsExecutingLogin = False
model.variables.isExecutingLoginVar = false;
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:wA9VG4cV+U+OkeoqFSg9mQ", callContext.id) && model.variables.in_IsFromResetPINIn)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:eAj0t9ikskCuLzwNy+6tzg", callContext.id);
isRestoredFromCacheJSResult.value = controller.safeExecuteJSNode(UBTConnect_App_Common_Login_mvc_controller_OnInitialize_IsRestoredFromCacheJS, "IsRestoredFromCache", "OnInitialize", {
IsRestoredFromCache: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("UBTConnect.App_Common.Login.OnInitialize$isRestoredFromCacheJSResult"))();
jsNodeResult.isRestoredFromCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsRestoredFromCache, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {});
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:TyA0EJgWhkCXoECGlsHhsg", callContext.id) && isRestoredFromCacheJSResult.value.isRestoredFromCacheOut)) {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:XpRp2hhaBkKUx2qKhcJZHQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:2npk+rio30uKjkFQ9ZQqUA", callContext.id);
// Execute Action: Login
return controller._login$Action(false, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:A90cQ7pWmUa3xnatlPo56w", callContext.id);
// Execute Action: AppManager_Logout
model.flush();
return UBT_AppManagerController.default.appManager_Logout$Action(callContext);
}).then(function () {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:J8NHpnVXn02KCgqkHFjQww", callContext.id);
});
}

});
} else {
OutSystemsDebugger.handleBreakpoint("ZK4RCP5OdEuntYI2VRpwBA:I4g88xXNMkuYVX2zLDMmnQ", callContext.id);
}

});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:j+bBlSDHVk6+BDFYpubRsA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:j+bBlSDHVk6+BDFYpubRsA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("UBTConnect.App_Common.Login.OnInitialize$isRestoredFromCacheJSResult", [{
name: "IsRestoredFromCache",
attrName: "isRestoredFromCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);

Controller.prototype.login$Action = function (isResetPasswordIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._login$Action, callContext, isResetPasswordIn);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.appManager_Callback$Action = function (appManager_CallbackIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._appManager_Callback$Action, callContext, appManager_CallbackIn);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:0eZ+W3SSVk+CJcw1X48PQA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA:mJCG955vpb2MtUitKU2aNA", "UBTConnect", "App_Common", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("ZK4RCP5OdEuntYI2VRpwBA:wfp+ldjfn02BaWgFSFyglA:/NRWebFlows.0eZ+W3SSVk+CJcw1X48PQA/NodesShownInESpaceTree.wfp+ldjfn02BaWgFSFyglA:BsQy6eVjh1O1_jsfs1ZYlQ", "UBTConnect", "Login", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:wfp+ldjfn02BaWgFSFyglA", callContext.id);
OutSystemsDebugger.pop("ZK4RCP5OdEuntYI2VRpwBA:0eZ+W3SSVk+CJcw1X48PQA", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "App_Common/Login On Initialize");
return controller.onInitialize$Action(callContext);

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

OutSystemsDebugger.setThreadStartName(callContext.id, "App_Common/Login On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return _flow_UBTConnect_App_CommonController.default.handleError(ex, this.callContext());
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
define("UBTConnect.App_Common.Login.mvc$controller.OnInitialize.IsRestoredFromCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
};
});

define("UBTConnect.App_Common.Login.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"nQtRee1f1k2_PrN+WDwcGw": {
getter: function (varBag, idService) {
return varBag.vars.value.isResetPasswordInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"x_q2e9IbYUa98ZcL_0phZQ": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"RJ6E1MkVs02EC1W8FHZHYg": {
getter: function (varBag, idService) {
return varBag.appManager_HandleDeviceAwarenessPopUpVar.value;
}
},
"Xiv_mEYn_0mdVoefHyUC_A": {
getter: function (varBag, idService) {
return varBag.vars.value.appManager_CallbackInLocal;
}
},
"rmRQgtSWrUSA8bKWwma36Q": {
getter: function (varBag, idService) {
return varBag.get_IsUnsupportedSystemVar.value;
}
},
"eAj0t9ikskCuLzwNy+6tzg": {
getter: function (varBag, idService) {
return varBag.isRestoredFromCacheJSResult.value;
}
},
"Uk74dMMyf0iMkPBkXz_F+Q": {
getter: function (varBag, idService) {
return varBag.model.variables.isExecutingLoginVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"NHqIsInQy0qi3KuyCTRZzg": {
getter: function (varBag, idService) {
return varBag.model.variables.isResettingPasswordVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"ivRQ0ECqkE2rsTgGKfnk2w": {
getter: function (varBag, idService) {
return varBag.model.variables.isUnsupportedSystemVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"agt4PnhwT0CNbf72SjIONA": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsFromInvalidPermissionsIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"zBPJLB5BjUqcKR+dwSjo5A": {
getter: function (varBag, idService) {
return varBag.model.variables.in_IsFromResetPINIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"jvLAs05xQ0qVyrpTiLtTGw": {
getter: function (varBag, idService) {
return varBag.model.variables.callbackTypeIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"GVfMjTw_rEqibjgCJlyN9g": {
getter: function (varBag, idService) {
return varBag.model.variables.callbackGUIDIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"LuhhugzaVEOUCYE0Kl28Ww": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Header"));
})(varBag.model, idService);
}
},
"IXIfhWn0iESDjiONx8V6bA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_Content"));
})(varBag.model, idService);
}
},
"6TnJGTZrlESnodyMCEgGpg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"3xSPIMbzz0+u2V1vOd1Rqw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("IsUnsupported"));
})(varBag.model, idService);
}
},
"+Uph9HhZCUCGP8QD0HUGjg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"U2jy9nM6QEKRAzqtUqOUJw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Button"));
})(varBag.model, idService);
}
},
"ohgmdOpN_kSI0XawwYx1mw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"37m5naiMEEeQlTQuIFQxmg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Button"));
})(varBag.model, idService);
}
},
"685uiKM2rE6EIoiq3ihodQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Placeholder_CommonUI_Inside_Layout"));
})(varBag.model, idService);
}
},
"G0F4AFOkJ06jX8bzhhyfDg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ConfirmationDialog_ResetPassword"));
})(varBag.model, idService);
}
},
"u_KqHMte8EeRGh+m_wki6g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DialogHeader"));
})(varBag.model, idService);
}
},
"oprn54MbA0ynsCOEPEInBQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("DialogBody"));
})(varBag.model, idService);
}
},
"sSVULqcF10eA6LZ2cKtbQg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ButtonLabel_Confirm"));
})(varBag.model, idService);
}
},
"J4bVKmIc_UuE_6LEaQCvEQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ButtonLabel_Dismiss"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
