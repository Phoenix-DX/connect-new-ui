# Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails

- Kind: shared; build screens using it: AssembleDetail, AssembleEvents
- Compiled source: `migration/blocks/sources/Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails.mvc.js`
- Child blocks: Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails_Entry, Connect2_LegacyShared.Reusable.NewConnectContent (queue: Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails_Entry, Connect2_LegacyShared.Reusable.NewConnectContent)

## Inputs

(none found)

## Captured DOM variants (0 distinct, 0 instances)


## Compiled view (debugger lines removed)

```js
define("Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "react", "OutSystems/ReactView/Main", "Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails.mvc$model", "Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails.mvc$controller", "Connect2_LegacyShared.Reusable.NewConnectContent.mvc$view", "OutSystems/ReactWidgets/Main", "Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails_Entry.mvc$view"], function (OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, React, OSView, Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingDetails_mvc_model, Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingDetails_mvc_controller, Connect2_LegacyShared_Reusable_NewConnectContent_mvc_view, OSWidgets, Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingDetails_Entry_mvc_view) {
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
        View.displayName = "Assemble.AssembleCommon_VirtualMeetingDetails";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Reusable_NewConnectContent_mvc_view, Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingDetails_Entry_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingDetails_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingDetails_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_LegacyShared_Reusable_NewConnectContent_mvc_view, {
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "break-word",
visible: ((model.variables.virtualMeetingLinkIn) !== ("")),
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._virtualMeetingLinkInDataFetchStatus)
}, React.createElement(Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingDetails_Entry_mvc_view, {
inputs: {
Value: model.variables.virtualMeetingLinkIn,
_valueInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._virtualMeetingLinkInDataFetchStatus),
Label: "Meeting Link",
IsURL: true
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
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: ((model.variables.virtualMeetingIdIn) !== ("")),
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._virtualMeetingIdInDataFetchStatus)
}, React.createElement(Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingDetails_Entry_mvc_view, {
inputs: {
Label: "Meeting Id",
Value: model.variables.virtualMeetingIdIn,
_valueInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._virtualMeetingIdInDataFetchStatus),
IsURL: false
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
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: ((model.variables.virtualMeetingPasswordIn) !== ("")),
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._virtualMeetingPasswordInDataFetchStatus)
}, React.createElement(Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingDetails_Entry_mvc_view, {
inputs: {
Value: model.variables.virtualMeetingPasswordIn,
_valueInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._virtualMeetingPasswordInDataFetchStatus),
IsURL: false,
Label: "Passcode"
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
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.virtualMeetingPasswordIn), asPrimitiveValue(model.variables.virtualMeetingIdIn), asPrimitiveValue(model.variables._virtualMeetingPasswordInDataFetchStatus), asPrimitiveValue(model.variables._virtualMeetingIdInDataFetchStatus), asPrimitiveValue(model.variables._virtualMeetingLinkInDataFetchStatus), asPrimitiveValue(model.variables.virtualMeetingLinkIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
