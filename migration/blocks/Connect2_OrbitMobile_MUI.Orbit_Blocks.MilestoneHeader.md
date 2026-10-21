# Connect2_OrbitMobile_MUI.Orbit_Blocks.MilestoneHeader

- Kind: shared; build screens using it: GuestArrangements, HelpersDetail, MilestoneDetail
- Compiled source: `migration/screens/HelpersDetail/analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_Blocks.MilestoneHeader.mvc.js`
- Child blocks: - (queue: -)

## Inputs

| Input | Type |
|---|---|
| In_EventName | Text |
| In_MilestoneName | Text |
| In_OrbitMilestoneTypeId | Text |

## Captured DOM variants (2 distinct, 4 instances)

### Variant 1: HelpersDetail/default (×3)

```html
<div class="OSBlockWidget" data-block="Orbit_Blocks.MilestoneHeader" id="b1-$b3">
  <div class="orbit-milestone-header" data-container="">
    <div class="full-width margin-bottom-base" data-container="">
      <span data-expression="">
        ••••••• ••••• ••••••••••• • ••••• ••• ••••
      </span>
    </div>
    <div class="orbit-milestone-sub-header" data-container="">
      <i class="icon orbit-icon-person-wave" data-icon=""></i>
      <span class="font-size-0-9rem margin-left-s" data-expression="">
        Helper (Host)
      </span>
    </div>
  </div>
</div>
```

### Variant 2: MilestoneDetail/default (×1)

```html
<div class="OSBlockWidget" data-block="Orbit_Blocks.MilestoneHeader" id="b1-b5-$b3">
  <div class="orbit-milestone-header" data-container="">
    <div class="full-width margin-bottom-base" data-container="">
      <span data-expression="">
        ••••••• ••••• ••••••••••• • ••••• ••• ••••
      </span>
    </div>
    <div class="orbit-milestone-sub-header" data-container="">
      <i class="icon orbit-icon-accommodation" data-icon=""></i>
      <span class="font-size-0-9rem margin-left-s" data-expression="">
        Accommodation (Host)
      </span>
    </div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("Connect2_OrbitMobile_MUI.Orbit_Blocks.MilestoneHeader.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Blocks.MilestoneHeader.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Blocks.MilestoneHeader.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main", "Connect2_OrbitMobile_MUI.model$LocalOrbitMilestoneTypeRec", "Connect2_OrbitMobile_MUI.controller$GetLocalOrbitMilestoneTypeById"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Blocks_MilestoneHeader_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Blocks_MilestoneHeader_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets) {
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
        View.displayName = "Orbit_Blocks.MilestoneHeader";
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
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_MilestoneHeader_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_Orbit_Blocks_MilestoneHeader_mvc_controller;
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
                style: "orbit-milestone-header",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "full-width margin-bottom-base",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Expression, {
                value: model.variables.in_EventNameIn,
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_EventNameInDataFetchStatus)
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "orbit-milestone-sub-header",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Icon, {
                extendedProperties: {
                    className: ("icon " + model.variables.orbitMilestoneTypeVar.mainIconAttr)
                },
                icon: "flag",
                iconSize: /*FontSize*/ 0,
                style: "icon",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Expression, {
                style: "font-size-0-9rem margin-left-s",
                value: (((model.variables.in_MilestoneNameIn + " (") + model.variables.orbitMilestoneTypeVar.typeAttr) + ")"),
                _idProps: {
                    service: idService,
                    uuid: "5"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_MilestoneNameInDataFetchStatus)
            }))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
