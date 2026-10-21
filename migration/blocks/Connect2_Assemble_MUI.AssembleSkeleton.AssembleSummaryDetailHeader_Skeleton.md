# Connect2_Assemble_MUI.AssembleSkeleton.AssembleSummaryDetailHeader_Skeleton

- Kind: shared; build screens using it: AssembleDetail, AssembleEvents
- Compiled source: `migration/blocks/sources/Connect2_Assemble_MUI.AssembleSkeleton.AssembleSummaryDetailHeader_Skeleton.mvc.js`
- Child blocks: Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Card (queue: Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Card)

## Inputs

(none found)

## Captured DOM variants (1 distinct, 6 instances)

### Variant 1: AssembleEvents/loading (×6)

```html
<div class="OSBlockWidget" data-block="AssembleSkeleton.AssembleSummaryDetailHeader_Skeleton" id="b2-b4-b7-l1-75_0-$b1">
  <div class="OSBlockWidget" data-block="NewConnect_Utilities.NC_Result_Item__Card" id="b2-b4-b7-l1-75_0-b1-$b1"><!-- nested block: 37 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("Connect2_Assemble_MUI.AssembleSkeleton.AssembleSummaryDetailHeader_Skeleton.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_Assemble_MUI.model", "Connect2_Assemble_MUI.controller", "react", "OutSystems/ReactView/Main", "Connect2_Assemble_MUI.AssembleSkeleton.AssembleSummaryDetailHeader_Skeleton.mvc$model", "Connect2_Assemble_MUI.AssembleSkeleton.AssembleSummaryDetailHeader_Skeleton.mvc$controller", "Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item__Card.mvc$view", "OutSystems/ReactWidgets/Main"], function (OutSystems, Connect2_Assemble_MUIModel, Connect2_Assemble_MUIController, React, OSView, Connect2_Assemble_MUI_AssembleSkeleton_AssembleSummaryDetailHeader_Skeleton_mvc_model, Connect2_Assemble_MUI_AssembleSkeleton_AssembleSummaryDetailHeader_Skeleton_mvc_controller, Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Card_mvc_view, OSWidgets) {
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
        View.displayName = "AssembleSkeleton.AssembleSummaryDetailHeader_Skeleton";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Card_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_Assemble_MUI_AssembleSkeleton_AssembleSummaryDetailHeader_Skeleton_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_Assemble_MUI_AssembleSkeleton_AssembleSummaryDetailHeader_Skeleton_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(Connect2_LegacyShared_NewConnect_Utilities_NC_Result_Item__Card_mvc_view, {
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
card_Visual: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_Image,
_idProps: {
service: idService,
name: "Placeholder_Image"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
placeholder_1: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_SubtitleTop,
_idProps: {
service: idService,
name: "Placeholder_SubtitleTop"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
placeholder_2: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_Title,
_idProps: {
service: idService,
name: "Placeholder_Title"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
placeholder_3: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_Subtitle_Bottom,
_idProps: {
service: idService,
name: "Placeholder_Subtitle_Bottom"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
placeholder_4: PlaceholderContent.Empty,
placeholder_5: PlaceholderContent.Empty,
placeholder_6: PlaceholderContent.Empty,
placeholder_Right: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_Right,
_idProps: {
service: idService,
name: "Placeholder_Right"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
placeholder_Location: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder_Location,
_idProps: {
service: idService,
name: "Placeholder_Location"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
}
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
