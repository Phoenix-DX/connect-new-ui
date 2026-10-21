# UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen

- Kind: shared; build screens using it: HouseholdCarousel, HouseholdDetails, Locality_Details, OneSchoolGlobalDetails, Profile, SupperMeeting_Carousel, SupperMeeting_Details
- Compiled source: `migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen.mvc.js`
- Child blocks: - (queue: -)

## Inputs

| Input | Type |
|---|---|
| HideActions | Boolean |

## Captured DOM variants (4 distinct, 31 instances)

### Variant 1: HouseholdCarousel/default (×14)

```html
<div class="OSBlockWidget" data-block="SubLayout.SubLayout_DirectoryDetailScreen" id="b3-l1-1152_0-b2-b3-b1-DirectoryDetailScreenContent">
  <div class="directory-detail-screen" data-container="">
    <div id="b3-l1-1152_0-b2-b3-b1-b1-Placeholder_DetailCard">
      <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="b3-l1-1152_0-b2-b3-b1-$b2"><!-- nested block: 147 nodes --></div>
    </div>
    <div class="" id="b3-l1-1152_0-b2-b3-b1-b1-Placeholder_CallToAction">
      <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="b3-l1-1152_0-b2-b3-b1-$b30"><!-- nested block: 107 nodes --></div>
    </div>
    <div id="b3-l1-1152_0-b2-b3-b1-b1-Placeholder_Content">
      <div class="" data-container="" id="b3-l1-1152_0-b2-b3-b1-VisibleAboutTab">
        <div class="OSBlockWidget" data-block="Directory_Household_Blocks.HouseholdDetails_Members_Block" id="b3-l1-1152_0-b2-b3-b1-$b39"><!-- nested block: 316 nodes --></div>
      </div>
    </div>
  </div>
</div>
```

### Variant 2: HouseholdDetails/loading (×2)

```html
<div class="OSBlockWidget" data-block="SubLayout.SubLayout_DirectoryDetailScreen" id="b2-DirectoryDetailScreenContent">
  <div class="directory-detail-screen" data-container="">
    <div id="b2-b1-Placeholder_DetailCard">
      <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="b2-$b2"><!-- nested block: 62 nodes --></div>
    </div>
    <div class="" id="b2-b1-Placeholder_CallToAction">
      <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="b2-$b30"><!-- nested block: 36 nodes --></div>
    </div>
    <div id="b2-b1-Placeholder_Content">
      <div class="hidden" data-container="" id="b2-VisibleAboutTab">
        <div class="OSBlockWidget" data-block="Directory_Household_Blocks.HouseholdDetails_Members_Block" id="b2-$b39"><!-- nested block: 249 nodes --></div>
      </div>
    </div>
  </div>
</div>
```

### Variant 3: OneSchoolGlobalDetails/default (×3)

```html
<div class="OSBlockWidget" data-block="SubLayout.SubLayout_DirectoryDetailScreen" id="$b3">
  <div class="directory-detail-screen" data-container="">
    <div id="b3-Placeholder_DetailCard">
      <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="$b4"><!-- nested block: 71 nodes --></div>
    </div>
    <div class="" id="b3-Placeholder_CallToAction">
      <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="$b13"><!-- nested block: 120 nodes --></div>
    </div>
    <div id="b3-Placeholder_Content">
      <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="$b15"><!-- nested block: 74 nodes --></div>
    </div>
  </div>
</div>
```

### Variant 4: SupperMeeting_Carousel/default (×12)

```html
<div class="OSBlockWidget" data-block="SubLayout.SubLayout_DirectoryDetailScreen" id="b3-l1-1164_0-b2-b1-b1-$b1">
  <div class="directory-detail-screen" data-container="">
    <div id="b3-l1-1164_0-b2-b1-b1-b1-Placeholder_DetailCard">
      <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="b3-l1-1164_0-b2-b1-b1-$b2"><!-- nested block: 105 nodes --></div>
    </div>
    <div class="" id="b3-l1-1164_0-b2-b1-b1-b1-Placeholder_CallToAction">
      <div class="OSBlockWidget" data-block="ConnectPatterns.SkeletonSection" id="b3-l1-1164_0-b2-b1-b1-$b6"><!-- nested block: 93 nodes --></div>
    </div>
    <div id="b3-l1-1164_0-b2-b1-b1-b1-Placeholder_Content">
      <div class="OSBlockWidget" data-block="Directory_SupperMeetings.SupperMeeting_HouseholdList" id="b3-l1-1164_0-b2-b1-b1-Block_Household_List"><!-- nested block: 368 nodes --></div>
    </div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen.mvc$model", "UBTConnect.SubLayout.SubLayout_DirectoryDetailScreen.mvc$controller", "UBTConnect.clientVariables", "OutSystems/ReactWidgets/Main"], function(OutSystems, UBTConnectModel, UBTConnectController, React, OSView, UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_mvc_model, UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_mvc_controller, UBTConnectClientVariables, OSWidgets) {
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
        View.displayName = "SubLayout.SubLayout_DirectoryDetailScreen";
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
                return UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_SubLayout_SubLayout_DirectoryDetailScreen_mvc_controller;
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
                content: _this.props.placeholders.placeholder_DetailCard,
                _idProps: {
                    service: idService,
                    name: "Placeholder_DetailCard"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.placeholder_CallToAction,
                style: model.getCachedValue(idService.getId("Placeholder_CallToAction.Style"), function() {
                    return ((model.variables.hideActionsIn) ? ("display-none") : (""));
                }, function() {
                    return model.variables.hideActionsIn;
                }),
                _idProps: {
                    service: idService,
                    name: "Placeholder_CallToAction"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hideActionsInDataFetchStatus)
            }), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.placeholder_Content,
                _idProps: {
                    service: idService,
                    name: "Placeholder_Content"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
