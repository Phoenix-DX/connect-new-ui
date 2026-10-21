# Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Card

- Kind: shared; build screens using it: AssembleDetail, AssembleEvents
- Compiled source: `migration/blocks/sources/Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Card.mvc.js`
- Child blocks: - (queue: -)

## Inputs

(none found)

## Captured DOM variants (1 distinct, 6 instances)

### Variant 1: AssembleEvents/loading (×6)

```html
<div class="OSBlockWidget" data-block="NewConnect_Utilities.NC_Result_Item__Card" id="b2-b4-b7-l1-75_0-b1-$b1">
  <div class="nc-result-item-card" data-container="" data-item="" id="b2-b4-b7-l1-75_0-b1-b1-Result_Item" style="cursor: pointer;">
    <div class="margin-bottom-s" data-container="" id="b2-b4-b7-l1-75_0-b1-b1-Result_Visual">
      <div id="b2-b4-b7-l1-75_0-b1-b1-Card_Visual">
        <div id="b2-b4-b7-l1-75_0-b1-Placeholder_Image"></div>
      </div>
    </div>
    <div class="padding-x-base" data-container="" id="b2-b4-b7-l1-75_0-b1-b1-Result_Description">
      <div class="display-flex justify-content-space-between align-content-center" data-container="">
        <div class="flex1" data-container="">
          <div id="b2-b4-b7-l1-75_0-b1-b1-Placeholder_1">
            <div id="b2-b4-b7-l1-75_0-b1-Placeholder_SubtitleTop">
              <div class="font-size-h6 margin-bottom-s ThemeGrid_Width8" data-container=""><!-- 2 nodes below depth 7 --></div>
              <div class="font-size-xs ThemeGrid_Width5" data-container=""><!-- 2 nodes below depth 7 --></div>
            </div>
          </div>
          <div id="b2-b4-b7-l1-75_0-b1-b1-Placeholder_2">
            <div id="b2-b4-b7-l1-75_0-b1-Placeholder_Title">
              <div class="ThemeGrid_Width7" data-container=""><!-- 2 nodes below depth 7 --></div>
            </div>
          </div>
          <div id="b2-b4-b7-l1-75_0-b1-b1-Placeholder_3">
            <div id="b2-b4-b7-l1-75_0-b1-Placeholder_Subtitle_Bottom">
              <span data-expression=""></span>
            </div>
          </div>
          <div id="b2-b4-b7-l1-75_0-b1-b1-Placeholder_4"></div>
          <div id="b2-b4-b7-l1-75_0-b1-b1-Placeholder_5"></div>
          <div id="b2-b4-b7-l1-75_0-b1-b1-Placeholder_6"></div>
        </div>
        <div class="gap-base flex-shrink-0 align-content-center" id="b2-b4-b7-l1-75_0-b1-b1-Placeholder_Right">
          <div id="b2-b4-b7-l1-75_0-b1-Placeholder_Right">
            <div class="OSBlockWidget" data-block="NewConnect_Utilities.NC_Result_Item_Badge" id="b2-b4-b7-l1-75_0-$b5"><!-- nested block: 1 nodes --></div>
          </div>
        </div>
      </div>
      <div id="b2-b4-b7-l1-75_0-b1-b1-Placeholder_Location">
        <div id="b2-b4-b7-l1-75_0-b1-Placeholder_Location">
          <div class="OSBlockWidget" data-block="NewConnect_Utilities.NC_Result_Item__Card__Location" id="b2-b4-b7-l1-75_0-$b6"><!-- nested block: 4 nodes --></div>
        </div>
      </div>
    </div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Card.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Card.mvc$model", "Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Card.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystems/ReactWidgets/Main"], function (OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, React, OSView, Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Card_mvc_model, Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Card_mvc_controller, Connect2_LegacySharedClientVariables, OSWidgets) {
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
        View.displayName = "NewConnect_Utilities.NC_Result_Item__Card";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Card_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Card_mvc_controller;
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
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);
return controller.onClick_Result_Item$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
extendedProperties: {
style: "",
"data-item": model.variables.htmlDataItemIn
},
style: ("nc-result-item-card " + model.variables.customClassIn),
visible: true,
_idProps: {
service: idService,
name: "Result_Item"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._customClassInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-bottom-s",
visible: true,
_idProps: {
service: idService,
name: "Result_Visual"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.card_Visual,
_idProps: {
service: idService,
name: "Card_Visual"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "padding-x-base",
visible: true,
_idProps: {
service: idService,
name: "Result_Description"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "display-flex justify-content-space-between align-content-center",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "flex1",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_1,
_idProps: {
service: idService,
name: "Placeholder_1"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_2,
_idProps: {
service: idService,
name: "Placeholder_2"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_3,
_idProps: {
service: idService,
name: "Placeholder_3"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_4,
_idProps: {
service: idService,
name: "Placeholder_4"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_5,
_idProps: {
service: idService,
name: "Placeholder_5"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_6,
_idProps: {
service: idService,
name: "Placeholder_6"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_Right,
style: "gap-base flex-shrink-0 align-content-center",
_idProps: {
service: idService,
name: "Placeholder_Right"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_Location,
_idProps: {
service: idService,
name: "Placeholder_Location"
},
_widgetRecordProvider: widgetsRecordProvider
}))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
