# NavigationHandler.ConfirmationDialogs.NavigationConfirmationDialog

- Kind: shared; build screens using it: ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactUsDetails, Profile
- Compiled source: `migration/blocks/sources/NavigationHandler.ConfirmationDialogs.NavigationConfirmationDialog.mvc.js`
- Child blocks: NavigationHandler.NavigationHandler.NavigationHandler, NavigationHandler.NavigationHandler.PreventBackNavigation (queue: -)

## Inputs

(none found)

## Captured DOM variants (0 distinct, 0 instances)


## Compiled view (debugger lines removed)

```js
define("NavigationHandler.ConfirmationDialogs.NavigationConfirmationDialog.mvc$view", ["OutSystems/ClientRuntime/Main", "NavigationHandler.model", "NavigationHandler.controller", "react", "OutSystems/ReactView/Main", "NavigationHandler.ConfirmationDialogs.NavigationConfirmationDialog.mvc$model", "NavigationHandler.ConfirmationDialogs.NavigationConfirmationDialog.mvc$controller", "OutSystems/ReactWidgets/Main", "NavigationHandler.NavigationHandler.PreventBackNavigation.mvc$view", "NavigationHandler.NavigationHandler.NavigationHandler.mvc$view", "NavigationHandler.controller$ResumeNavigation", "NavigationHandler.controller$WasNavigationPrevented", "NavigationHandler.controller$CopyClassesAcrossPortal"], function (OutSystems, NavigationHandlerModel, NavigationHandlerController, React, OSView, NavigationHandler_ConfirmationDialogs_NavigationConfirmationDialog_mvc_model, NavigationHandler_ConfirmationDialogs_NavigationConfirmationDialog_mvc_controller, OSWidgets, NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view, NavigationHandler_NavigationHandler_NavigationHandler_mvc_view) {
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
        View.displayName = "ConfirmationDialogs.NavigationConfirmationDialog";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [NavigationHandler_NavigationHandler_PreventBackNavigation_mvc_view, NavigationHandler_NavigationHandler_NavigationHandler_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return NavigationHandler_ConfirmationDialogs_NavigationConfirmationDialog_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return NavigationHandler_ConfirmationDialogs_NavigationConfirmationDialog_mvc_controller;
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
extendedEvents: {
"componentDidUpdate": function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);
controller.onRootComponentDidUpdate$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
;
}
},
style: "dx-confirmation-dialog",
visible: true,
_idProps: {
service: idService,
name: "Root"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Popup, {
showPopup: model.variables.showDialogVar,
style: "popup-dialog",
_idProps: {
service: idService,
name: "Popup"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.dialogHeader,
style: "dx-dialog-header",
_idProps: {
service: idService,
name: "DialogHeader"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.dialogBody,
style: "dx-dialog-body",
_idProps: {
service: idService,
name: "DialogBody"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "dx-dialog-footer",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
isDefault: false,
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);
controller.yes$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
;
},
style: "btn btn-primary",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.buttonLabel_Confirm,
_idProps: {
service: idService,
name: "ButtonLabel_Confirm"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Button, {
enabled: true,
isDefault: false,
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);
controller.no$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
;
},
style: "btn",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.buttonLabel_Dismiss,
_idProps: {
service: idService,
name: "ButtonLabel_Dismiss"
},
_widgetRecordProvider: widgetsRecordProvider
}))))), $if(false, false, this, function () {
return [];
}, function () {
return [$if(model.variables.showDialogVar, false, this, function () {
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
controller.no$Action(controller.callContext(eventHandlerContext));
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
uuid: "10",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), React.createElement(NavigationHandler_NavigationHandler_NavigationHandler_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
navigation$Action: function (navigationEventIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);
return controller.onNavigation$Action(navigationEventIn, controller.callContext(eventHandlerContext));
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
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
```
(… 2 more lines in `migration/blocks/sources/NavigationHandler.ConfirmationDialogs.NavigationConfirmationDialog.mvc.js`)
