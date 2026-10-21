# Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingURL

- Kind: shared; build screens using it: AssembleDetail, AssembleEvents
- Compiled source: `migration/blocks/sources/Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingURL.mvc.js`
- Child blocks: Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails, Connect2_Assemble_MUI.Assemble.AssembleSummary_Card_Row, NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog (queue: Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails, Connect2_Assemble_MUI.Assemble.AssembleSummary_Card_Row)

## Inputs

(none found)

## Captured DOM variants (0 distinct, 0 instances)


## Compiled view (debugger lines removed)

```js
define("Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingURL.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "NavigationHandler.controller", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingURL.mvc$model", "Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingURL.mvc$controller", "OutSystems/ReactWidgets/Main", "Connect2_Assemble_MUI.Assemble.AssembleSummary_Card_Row.mvc$view", "NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc$view", "Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails.mvc$view", "NavigationHandler.controller$ConfirmAction", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$NavigationHandler", "Connect2_LegacyShared.controller$CheckSupportedBrowserVersion", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_LegacyShared.controller$OpenExternalURL"], function (OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, NavigationHandlerController, Connect2_LegacySharedController, React, OSView, Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingURL_mvc_model, Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingURL_mvc_controller, OSWidgets, Connect2_Assemble_MUI_Assemble_AssembleSummary_Card_Row_mvc_view, NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_view, Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingDetails_mvc_view) {
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
        View.displayName = "Assemble.AssembleCommon_VirtualMeetingURL";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_Assemble_MUI_Assemble_AssembleSummary_Card_Row_mvc_view, NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_view, Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingDetails_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingURL_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingURL_mvc_controller;
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
style: "font-regular",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_Assemble_MUI_Assemble_AssembleSummary_Card_Row_mvc_view, {
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
uuid: "1",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Icon_Left: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*FontSize*/ 0,
style: "icon connect-icon-video-camera",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
placeholder_Content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
style: "display-inline inline",
value: model.getCachedValue(idService.getId("JnkQ6oY7mkaSDatMqo1eGw.Value"), function () {
return (((model.variables.virtualMeetingURLIn === "")) ? ("Link is not available, refer to local signal chat") : ((("Join with " + model.variables.virtualMeetingPlatformIn) + ": ")));
}, function () {
return model.variables.virtualMeetingURLIn;
}, function () {
return model.variables.virtualMeetingPlatformIn;
}),
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._virtualMeetingURLInDataFetchStatus, model.variables._virtualMeetingPlatformInDataFetchStatus)
}), $if(((model.variables.virtualMeetingURLIn) !== ("")), false, this, function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
extendedProperties: {
target: "_blank"
},
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);
controller.linkVirtualAddressOnClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
;
},
visible: true,
_idProps: {
service: idService,
name: "Link_VirtualAddress"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "break-word font-regular",
value: "[Tap here]",
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}, function () {
return [];
})];
}),
placeholder_Icon_Right: new PlaceholderContent(function () {
return [$if(((((model.variables.virtualMeetingURLIn) !== ("")) || ((model.variables.virtualMeetingIdIn) !== (""))) || ((model.variables.virtualMeetingPasswordIn) !== (""))), false, this, function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);
return controller.meetingInfo_Toggle$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "info-circle",
iconSize: /*FontSize*/ 0,
style: "icon connect-icon-info-fill margin-right-none margin-left-auto line-height-1 text-neutral-6 font-size-base",
visible: true,
_idProps: {
service: idService,
name: "Icon_VirtualMeetingInfo"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}, function () {
return [];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.virtualMeetingPasswordIn), asPrimitiveValue(model.variables.virtualMeetingIdIn), asPrimitiveValue(model.variables._virtualMeetingPasswordInDataFetchStatus), asPrimitiveValue(model.variables._virtualMeetingIdInDataFetchStatus), asPrimitiveValue(model.variables._virtualMeetingPlatformInDataFetchStatus), asPrimitiveValue(model.variables._virtualMeetingURLInDataFetchStatus), asPrimitiveValue(model.variables.virtualMeetingPlatformIn), asPrimitiveValue(model.variables.virtualMeetingURLIn)]
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "backwards-compatibility assemble-meeting-info-popup",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(NavigationHandler_ConfirmationDialogs_ActionConfirmationDialog_mvc_view, {
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
name: "MeetingInfo",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
dialogHeader: PlaceholderContent.Empty,
dialogBody: new PlaceholderContent(function () {
return [React.createElement(Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingDetails_mvc_view, {
inputs: {
VirtualMeetingLink: model.variables.virtualMeetingURLIn,
_virtualMeetingLinkInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._virtualMeetingURLInDataFetchStatus),
VirtualMeetingId: model.variables.virtualMeetingIdIn,
_virtualMeetingIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._virtualMeetingIdInDataFetchStatus),
VirtualMeetingPassword: model.variables.virtualMeetingPasswordIn,
_virtualMeetingPasswordInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._virtualMeetingPasswordInDataFetchStatus)
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
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
buttonLabel_Confirm: PlaceholderContent.Empty,
buttonLabel_Dismiss: new PlaceholderContent(function () {
return ["Close"];
})
},
_dependencies: [asPrimitiveValue(model.variables.virtualMeetingPasswordIn), asPrimitiveValue(model.variables.virtualMeetingIdIn), asPrimitiveValue(model.variables._virtualMeetingPasswordInDataFetchStatus), asPrimitiveValue(model.variables._virtualMeetingIdInDataFetchStatus), asPrimitiveValue(model.variables._virtualMeetingURLInDataFetchStatus), asPrimitiveValue(model.variables.virtualMeetingURLIn)]
})));
        };
        return View;
```
(… 3 more lines in `migration/blocks/sources/Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingURL.mvc.js`)
