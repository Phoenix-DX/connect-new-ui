# Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails_Entry

- Kind: shared; build screens using it: AssembleDetail, AssembleEvents
- Compiled source: `migration/blocks/sources/Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails_Entry.mvc.js`
- Child blocks: Connect2_LegacyShared.Utility.LabelWithCopyIcon (queue: Connect2_LegacyShared.Utility.LabelWithCopyIcon)

## Inputs

(none found)

## Captured DOM variants (0 distinct, 0 instances)


## Compiled view (debugger lines removed)

```js
define("Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails_Entry.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails_Entry.mvc$model", "Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails_Entry.mvc$controller", "OutSystems/ReactWidgets/Main", "Connect2_LegacyShared.Utility.LabelWithCopyIcon.mvc$view", "Connect2_LegacyShared.controller$CheckSupportedBrowserVersion", "Connect2_Assemble_MUI.referencesHealth", "Connect2_Assemble_MUI.referencesHealth$Connect2_LegacyShared", "Connect2_LegacyShared.controller$OpenExternalURL"], function (OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, Connect2_LegacySharedController, React, OSView, Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingDetails_Entry_mvc_model, Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingDetails_Entry_mvc_controller, OSWidgets, Connect2_LegacyShared_Utility_LabelWithCopyIcon_mvc_view) {
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
        View.displayName = "Assemble.AssembleCommon_VirtualMeetingDetails_Entry";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Utility_LabelWithCopyIcon_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingDetails_Entry_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_Assemble_MUI_Assemble_AssembleCommon_VirtualMeetingDetails_Entry_mvc_controller;
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
style: "margin-bottom-base",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(Connect2_LegacyShared_Utility_LabelWithCopyIcon_mvc_view, {
inputs: {
AttributeValue: model.variables.valueIn,
_attributeValueInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._valueInDataFetchStatus)
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
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder_Label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: model.variables.labelIn,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._labelInDataFetchStatus)
})];
}),
placeholder_Icon: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Icon, {
icon: "flag",
iconSize: /*Twotimes*/ 1,
style: "icon connect-icon-copy font-size-h5 text-neutral-6",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
placeholder_Value: new PlaceholderContent(function () {
return [$if(model.variables.isURLIn, false, this, function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
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
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
target: "_blank"
},
style: "font-regular",
value: model.variables.valueIn,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._valueInDataFetchStatus)
}))];
}, function () {
return [React.createElement(OSWidgets.Expression, {
style: "text-neutral-7",
value: model.variables.valueIn,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._valueInDataFetchStatus)
})];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.valueIn), asPrimitiveValue(model.variables.isURLIn), asPrimitiveValue(model.variables._valueInDataFetchStatus), asPrimitiveValue(model.variables._isURLInDataFetchStatus), asPrimitiveValue(model.variables._labelInDataFetchStatus), asPrimitiveValue(model.variables.labelIn)]
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
