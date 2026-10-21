# Connect2_MyBookmarks_MUI.MyBookmarksFlow.NoBookmarks

- Kind: shared; build screens using it: BookmarksByGroup, MyBookmarks
- Compiled source: `migration/blocks/sources/Connect2_MyBookmarks_MUI.MyBookmarksFlow.NoBookmarks.mvc.js`
- Child blocks: Connect2_LegacyShared.Reusable.ConnectBlankSlate (queue: Connect2_LegacyShared.Reusable.ConnectBlankSlate)

## Inputs

(none found)

## Captured DOM variants (1 distinct, 2 instances)

### Variant 1: BookmarksByGroup/loading (×2)

```html
<div class="OSBlockWidget" data-block="MyBookmarksFlow.NoBookmarks" id="b1-$b21">
  <div class="OSBlockWidget" data-block="Reusable.ConnectBlankSlate" id="b1-b21-$b1"><!-- nested block: 15 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("Connect2_MyBookmarks_MUI.MyBookmarksFlow.NoBookmarks.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_MyBookmarks_MUI.model", "Connect2_MyBookmarks_MUI.controller", "react", "OutSystems/ReactView/Main", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.NoBookmarks.mvc$model", "Connect2_MyBookmarks_MUI.MyBookmarksFlow.NoBookmarks.mvc$controller", "Connect2_LegacyShared.Reusable.ConnectBlankSlate.mvc$view", "OutSystems/ReactWidgets/Main"], function (OutSystems, Connect2_MyBookmarks_MUIModel, Connect2_MyBookmarks_MUIController, React, OSView, Connect2_MyBookmarks_MUI_MyBookmarksFlow_NoBookmarks_mvc_model, Connect2_MyBookmarks_MUI_MyBookmarksFlow_NoBookmarks_mvc_controller, Connect2_LegacyShared_Reusable_ConnectBlankSlate_mvc_view, OSWidgets) {
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
        View.displayName = "MyBookmarksFlow.NoBookmarks";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Connect2_LegacyShared_Reusable_ConnectBlankSlate_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Connect2_MyBookmarks_MUI_MyBookmarksFlow_NoBookmarks_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_MyBookmarks_MUI_MyBookmarksFlow_NoBookmarks_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), $if(model.variables.isToDisplayIn, false, this, function () {
return [React.createElement(Connect2_LegacyShared_Reusable_ConnectBlankSlate_mvc_view, {
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
image: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "OSFillParent"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/Connect2_LegacyShared.bookmark_unavailable_icon.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.titlePlaceholder,
_idProps: {
service: idService,
name: "TitlePlaceholder"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
subtitle: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.textPlaceholder,
_idProps: {
service: idService,
name: "TextPlaceholder"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
}
})];
}, function () {
return [];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
