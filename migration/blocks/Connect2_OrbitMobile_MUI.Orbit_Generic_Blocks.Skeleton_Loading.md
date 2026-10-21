# Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading

- Kind: shared; build screens using it: EventBooklet, EventDetail, GuestArrangements, HelpersDetail, HostSurvey, MilestoneDetail, OrbitAdminEventDetail, OrbitAdminLanding, OrbitLanding, QRCodeGenerate, TransportDetail, ViewDocuments
- Compiled source: `migration/blocks/sources/Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc.js`
- Child blocks: - (queue: -)

## Inputs

(none found)

## Captured DOM variants (3 distinct, 8 instances)

### Variant 1: EventDetail/loading (×2)

```html
<div class="OSBlockWidget" data-block="Orbit_Generic_Blocks.Skeleton_Loading" id="b1-$b14">
  <div class="orbit-skeleton-loading-cont" data-container="">
    <div class="orbit-skeleton-loading-item orbit-skeleton-item-height-s" data-container=""></div>
    <div class="orbit-skeleton-loading-item orbit-skeleton-item-height-s" data-container=""></div>
    <div class="orbit-skeleton-loading-item orbit-skeleton-item-height-s" data-container=""></div>
    <div class="orbit-skeleton-loading-item orbit-skeleton-item-height-s" data-container=""></div>
    <div class="orbit-skeleton-loading-item orbit-skeleton-item-height-m" data-container=""></div>
    <div class="list list-group orbit-skeleton-loading-list OSFillParent" data-list="" id="b1-b14-List_SkeletonLoadingEventDetail" style="position: relative;">
      <div class="orbit-skeleton-loading-item orbit-skeleton-item-height-large" data-container=""></div>
      <div class="orbit-skeleton-loading-item orbit-skeleton-item-height-large" data-container=""></div>
      <div class="orbit-skeleton-loading-item orbit-skeleton-item-height-large" data-container=""></div>
      <div class="orbit-skeleton-loading-item orbit-skeleton-item-height-large" data-container=""></div>
    </div>
  </div>
</div>
```

### Variant 2: HelpersDetail/loading (×2)

```html
<div class="OSBlockWidget" data-block="Orbit_Generic_Blocks.Skeleton_Loading" id="b1-$b8">
  <div class="orbit-skeleton-loading-cont" data-container="">
    <div class="orbit-skeleton-loading-item orbit-skeleton-item-height-s" data-container=""></div>
    <div class="orbit-skeleton-loading-item orbit-skeleton-item-height-s" data-container=""></div>
  </div>
  <div class="orbit-skeleton-loading-item orbit-skeleton-loading-item-no-border orbit-skeleton-loading-item-margin-s orbit-skeleton-item-height-sm" data-container=""></div>
  <div class="orbit-skeleton-loading-item orbit-skeleton-loading-item-no-border orbit-skeleton-loading-item-margin-s orbit-skeleton-item-height-sm" data-container=""></div>
  <div class="orbit-skeleton-loading-item orbit-skeleton-loading-item-no-border orbit-skeleton-loading-item-margin-s orbit-skeleton-item-height-sm" data-container=""></div>
</div>
```

### Variant 3: OrbitAdminLanding/loading (×4)

```html
<div class="OSBlockWidget" data-block="Orbit_Generic_Blocks.Skeleton_Loading" id="b1-$b5">
  <div class="orbit-skeleton-loading-cont" data-container="">
    <div class="list list-group orbit-skeleton-loading-list OSFillParent" data-list="" id="b1-b5-List_SkeletonLoadingSingle" style="position: relative;">
      <div class="orbit-skeleton-loading-item orbit-skeleton-item-height-large" data-container=""></div>
      <div class="orbit-skeleton-loading-item orbit-skeleton-item-height-large" data-container=""></div>
      <div class="orbit-skeleton-loading-item orbit-skeleton-item-height-large" data-container=""></div>
      <div class="orbit-skeleton-loading-item orbit-skeleton-item-height-large" data-container=""></div>
      <div class="orbit-skeleton-loading-item orbit-skeleton-item-height-large" data-container=""></div>
      <div class="orbit-skeleton-loading-item orbit-skeleton-item-height-large" data-container=""></div>
    </div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main"], function (OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets) {
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
        View.displayName = "Orbit_Generic_Blocks.Skeleton_Loading";
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
                return Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_Skeleton_Loading_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), $if((model.variables.in_SkeletonLoadingIdIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.singleItem), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-base",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
}), $if((model.variables.in_SkeletonLoadingIdIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.adminEventDetails), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-cont",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-s",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-s",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-s",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-s",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}, function () {
return [];
}), $if(((((model.variables.in_SkeletonLoadingIdIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.orbitLanding) || (model.variables.in_SkeletonLoadingIdIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.transportDetail)) || (model.variables.in_SkeletonLoadingIdIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.viewDocument)) || (model.variables.in_SkeletonLoadingIdIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.hostSurveyHelpers)), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-cont",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.loadingBlocksVar,
style: "list list-group orbit-skeleton-loading-list",
tag: "div",
_idProps: {
service: idService,
name: "List_SkeletonLoadingSingle"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
className: model.getCachedValue(idService.getId("7+IhQGEwfUysCO0o7Ui8Kg.class"), function () {
return ("orbit-skeleton-loading-item" + (((model.variables.in_SkeletonLoadingIdIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.orbitLanding)) ? (" orbit-skeleton-item-height-large") : ((((model.variables.in_SkeletonLoadingIdIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.transportDetail)) ? (" orbit-skeleton-item-height-base") : ((((model.variables.in_SkeletonLoadingIdIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.viewDocument)) ? (" orbit-skeleton-item-height-s") : (" orbit-skeleton-item-height-base")))))));
}, function () {
return model.variables.in_SkeletonLoadingIdIn;
})
},
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables._in_SkeletonLoadingIdInDataFetchStatus), asPrimitiveValue(model.variables.in_SkeletonLoadingIdIn)]
}))];
}, function () {
return [];
}), $if((model.variables.in_SkeletonLoadingIdIn === Connect2_OrbitMobile_MUIModel.staticEntities.orbitSkeletonLoading.eventDetail), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-cont",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-s",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-s",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-s",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-s",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "orbit-skeleton-loading-item orbit-skeleton-item-height-m",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.loadingBlocksVar,
style: "list list-group orbit-skeleton-loading-list",
tag: "div",
_idProps: {
service: idService,
name: "List_SkeletonLoadingEventDetail"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
```
(… 618 more lines in `migration/blocks/sources/Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Skeleton_Loading.mvc.js`)
