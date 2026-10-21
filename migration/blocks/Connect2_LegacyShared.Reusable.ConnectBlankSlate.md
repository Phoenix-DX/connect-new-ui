# Connect2_LegacyShared.Reusable.ConnectBlankSlate

- Kind: shared; build screens using it: BookmarksByGroup, ConnectShare, MyBookmarks
- Compiled source: `migration/screens/ConnectShare/analysis/sources/pretty/Connect2_LegacyShared.Reusable.ConnectBlankSlate.mvc.js`
- Child blocks: - (queue: -)

## Inputs

(none found)

## Captured DOM variants (3 distinct, 4 instances)

### Variant 1: BookmarksByGroup/loading (×2)

```html
<div class="OSBlockWidget" data-block="Reusable.ConnectBlankSlate" id="b1-b21-$b1">
  <div class="connect-blank-slate-container" data-container="">
    <div id="b1-b21-b1-Image">
      <img class="OSFillParent" data-image="" data-rendered-size="266x200" src="/UBTConnect/img/Connect2_LegacyShared.bookmark_unavailable_icon.svg"/>
    </div>
    <div class="connect-blank-slate-title margin-top-base text-align-center" id="b1-b21-b1-Title">
      <div id="b1-b21-TitlePlaceholder">
        <div class="no-bookmark-top-message" data-container="">
          •••••• •••• ••••
          <br/>
          bookmarks here
        </div>
      </div>
    </div>
    <div class="connect-blank-slate-sub-title margin-top-s" id="b1-b21-b1-Subtitle">
      <div id="b1-b21-TextPlaceholder">
        <div class="no-bookmark-bottom-message" data-container="">
          ••• ••• ••• •••• •• • •••• ••••••
          <br/>
          important to you by adding a bookmark
        </div>
      </div>
    </div>
  </div>
</div>
```

### Variant 2: ConnectShare/default (×1)

```html
<div class="OSBlockWidget" data-block="Reusable.ConnectBlankSlate" id="b1-$b4">
  <div class="connect-blank-slate-container" data-container="">
    <div id="b1-b4-Image">
      <img data-image="" data-rendered-size="294x222" src="/UBTConnect/img/Connect2_LegacyShared.share_unavailable_icon.png"/>
    </div>
    <div class="connect-blank-slate-title margin-top-base text-align-center" id="b1-b4-Title">
      <span data-expression="">
        ••••••• ••••• ••• ••••••••••••••••••••••••••••••••••••
      </span>
    </div>
    <div class="connect-blank-slate-sub-title margin-top-s" id="b1-b4-Subtitle"></div>
  </div>
</div>
```

### Variant 3: ConnectShare/offline (×1)

```html
<div class="OSBlockWidget" data-block="Reusable.ConnectBlankSlate" id="b1-$b4">
  <div class="connect-blank-slate-container" data-container="">
    <div id="b1-b4-Image">
      <img data-image="" data-rendered-size="294x222" src="/UBTConnect/img/Connect2_LegacyShared.share_unavailable_icon.png"/>
    </div>
    <div class="connect-blank-slate-title margin-top-base text-align-center" id="b1-b4-Title">
      <span data-expression=""></span>
    </div>
    <div class="connect-blank-slate-sub-title margin-top-s" id="b1-b4-Subtitle"></div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("Connect2_LegacyShared.Reusable.ConnectBlankSlate.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_LegacyShared.model", "Connect2_LegacyShared.controller", "react", "OutSystems/ReactView/Main", "Connect2_LegacyShared.Reusable.ConnectBlankSlate.mvc$model", "Connect2_LegacyShared.Reusable.ConnectBlankSlate.mvc$controller", "Connect2_LegacyShared.clientVariables", "OutSystems/ReactWidgets/Main"], function(OutSystems, Connect2_LegacySharedModel, Connect2_LegacySharedController, React, OSView, Connect2_LegacyShared_Reusable_ConnectBlankSlate_mvc_model, Connect2_LegacyShared_Reusable_ConnectBlankSlate_mvc_controller, Connect2_LegacySharedClientVariables, OSWidgets) {
    var OS = OutSystems.Internal;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;
    var View = (function(_super) {
        __extends(View, _super);
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
        View.displayName = "Reusable.ConnectBlankSlate";
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
            get: function() {
                return Connect2_LegacyShared_Reusable_ConnectBlankSlate_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_LegacyShared_Reusable_ConnectBlankSlate_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function() {
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
                style: "connect-blank-slate-container",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.image,
                _idProps: {
                    service: idService,
                    name: "Image"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.title,
                style: "connect-blank-slate-title margin-top-base text-align-center",
                _idProps: {
                    service: idService,
                    name: "Title"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.subtitle,
                style: "connect-blank-slate-sub-title margin-top-s",
                _idProps: {
                    service: idService,
                    name: "Subtitle"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
