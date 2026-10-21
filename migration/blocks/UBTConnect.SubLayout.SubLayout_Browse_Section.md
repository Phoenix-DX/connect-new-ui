# UBTConnect.SubLayout.SubLayout_Browse_Section

- Kind: shared; build screens using it: BrowseDirectory, CountryDetails
- Compiled source: `migration/screens/BrowseDirectory/analysis/sources/pretty/UBTConnect.SubLayout.SubLayout_Browse_Section.mvc.js`
- Child blocks: - (queue: -)

## Inputs

(none found)

## Captured DOM variants (2 distinct, 6 instances)

### Variant 1: BrowseDirectory/default (×2)

```html
<div class="OSBlockWidget" data-block="SubLayout.SubLayout_Browse_Section" id="$b2">
  <div class="directory-detail-screen" data-container="">
    <div id="b2-Placeholder_TopSection">
      <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="$b3"><!-- nested block: 28 nodes --></div>
    </div>
    <div id="b2-Placeholder_BottomSection">
      <div class="OSBlockWidget" data-block="Leaflet.LeafletMap" id="LeafletMap"><!-- nested block: 31 nodes --></div>
      <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="$b10"><!-- nested block: 263 nodes --></div>
    </div>
  </div>
</div>
```

### Variant 2: BrowseDirectory/loading (×4)

```html
<div class="OSBlockWidget" data-block="SubLayout.SubLayout_Browse_Section" id="$b2">
  <div class="directory-detail-screen" data-container="">
    <div id="b2-Placeholder_TopSection">
      <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="$b3"><!-- nested block: 28 nodes --></div>
    </div>
    <div id="b2-Placeholder_BottomSection">
      <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="$b9"><!-- nested block: 2 nodes --></div>
      <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="$b10"><!-- nested block: 833 nodes --></div>
    </div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect.SubLayout.SubLayout_Browse_Section.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.SubLayout.SubLayout_Browse_Section.mvc$model", "UBTConnect.SubLayout.SubLayout_Browse_Section.mvc$controller", "UBTConnect.clientVariables", "OutSystems/ReactWidgets/Main"], function(OutSystems, UBTConnectModel, UBTConnectController, React, OSView, UBTConnect_SubLayout_SubLayout_Browse_Section_mvc_model, UBTConnect_SubLayout_SubLayout_Browse_Section_mvc_controller, UBTConnectClientVariables, OSWidgets) {
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
        View.displayName = "SubLayout.SubLayout_Browse_Section";
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
                return UBTConnect_SubLayout_SubLayout_Browse_Section_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_SubLayout_SubLayout_Browse_Section_mvc_controller;
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
                style: "directory-detail-screen",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.placeholder_TopSection,
                _idProps: {
                    service: idService,
                    name: "Placeholder_TopSection"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.placeholder_BottomSection,
                _idProps: {
                    service: idService,
                    name: "Placeholder_BottomSection"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
