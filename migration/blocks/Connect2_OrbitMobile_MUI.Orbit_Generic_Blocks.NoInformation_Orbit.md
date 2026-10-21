# Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit

- Kind: shared; build screens using it: EventDetail, GuestArrangements, HelpersDetail, HostSurvey, MilestoneDetail, OrbitAdminEventDetail, OrbitAdminLanding, OrbitLanding, QRCodeGenerate, ViewDocuments
- Compiled source: `migration/screens/HelpersDetail/analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.mvc.js`
- Child blocks: - (queue: -)

## Inputs

| Input | Type |
|---|---|
| Message | Text |
| IsUrgent | Boolean |

## Captured DOM variants (1 distinct, 2 instances)

### Variant 1: HelpersDetail/default (×2)

```html
<div class="OSBlockWidget" data-block="Orbit_Generic_Blocks.NoInformation_Orbit" id="b1-$b7">
  <div class="bold padding-y-m padding-x-m color-orbit-primary-7" data-container="">
    <span data-expression="">
      There is no Helper available.
    </span>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.mvc$model", "Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, React, OSView, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_model, Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets) {
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
        View.displayName = "Orbit_Generic_Blocks.NoInformation_Orbit";
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
                return Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_Orbit_Generic_Blocks_NoInformation_Orbit_mvc_controller;
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
                extendedProperties: {
                    className: model.getCachedValue(idService.getId("PYSWqnxogkeQwfz_mWjFJg.class"), function() {
                        return ("bold padding-y-m padding-x-m" + ((!(model.variables.isUrgentIn)) ? (" color-orbit-primary-7") : (" flex-center-vertical color-orbit-red-6")));
                    }, function() {
                        return model.variables.isUrgentIn;
                    })
                },
                style: "bold padding-y-m padding-x-m",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Icon, {
                icon: "flag",
                iconSize: /*FontSize*/ 0,
                style: "icon orbit-icon-circle-cross margin-right-s",
                visible: model.variables.isUrgentIn,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isUrgentInDataFetchStatus)
            }), React.createElement(OSWidgets.Expression, {
                value: model.variables.messageIn,
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._messageInDataFetchStatus)
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
