# Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_SubSection

- Kind: shared; build screens using it: LDM_EventDetail_V2, LDM_MyEvents_V2
- Compiled source: `migration/screens/LDM_MyEvents/analysis/sources/pretty/Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_SubSection.mvc.js`
- Child blocks: - (queue: -)

## Inputs

| Input | Type |
|---|---|
| In_Title | Text |
| In_HasBottomBorder | Boolean |

## Captured DOM variants (1 distinct, 1 instances)

### Variant 1: LDM_MyEvents_V2/default (×1)

```html
<div class="OSBlockWidget" data-block="LDM_Blocks.EventDetail_SubSection" id="b1-b9-SubSection_MyTimeline">
  <div class="event-detail-subsection" data-container="">
    <div class="event-detail-subsection-title" data-container="">
      <span data-expression="">
        Past Events
      </span>
    </div>
    <div class="event-detail-subsection-placeholder" id="b1-b9-b3-SubSection_Placeholder">
      <div class="list list-group past-event-list OSFillParent" data-list="" data-virtualization-disabled="" id="b1-b9-List_PastEvents">
        <div class="past-event-cont" data-container="">
          <div class="past-event-date" data-container="">
            <span data-expression="">
              ••••• ••••
            </span>
          </div>
          <div class="list list-group OSFillParent" data-list="" data-virtualization-disabled="" id="b1-b9-l3-73_0-List_PastEventsData">
            <div class="OSBlockWidget" data-block="LDM_Blocks_V2.EventCard_V2" id="b1-b9-l3-73_0-l3-99_0-ListItem_PastEvents"><!-- nested block: 36 nodes --></div>
          </div>
        </div>
        <div class="past-event-cont" data-container="">
          <div class="past-event-date" data-container="">
            <span data-expression="">
              •••• ••••
            </span>
          </div>
          <div class="list list-group OSFillParent" data-list="" data-virtualization-disabled="" id="b1-b9-l3-73_1-List_PastEventsData">
            <div class="OSBlockWidget" data-block="LDM_Blocks_V2.EventCard_V2" id="b1-b9-l3-73_1-l3-101_0-ListItem_PastEvents"><!-- nested block: 37 nodes --></div>
          </div>
        </div>
        <div class="past-event-cont" data-container="">
          <div class="past-event-date" data-container="">
            <span data-expression="">
              ••••••••• ••••
            </span>
          </div>
          <div class="list list-group OSFillParent" data-list="" data-virtualization-disabled="" id="b1-b9-l3-73_2-List_PastEventsData">
            <div class="OSBlockWidget" data-block="LDM_Blocks_V2.EventCard_V2" id="b1-b9-l3-73_2-l3-103_0-ListItem_PastEvents"><!-- nested block: 40 nodes --></div>
          </div>
        </div>
        <div class="past-event-cont" data-container="">
          <div class="past-event-date" data-container="">
            <span data-expression="">
              ••••••••• ••••
            </span>
          </div>
          <div class="list list-group OSFillParent" data-list="" data-virtualization-disabled="" id="b1-b9-l3-73_3-List_PastEventsData">
            <div class="OSBlockWidget" data-block="LDM_Blocks_V2.EventCard_V2" id="b1-b9-l3-73_3-l3-105_0-ListItem_PastEvents"><!-- nested block: 39 nodes --></div>
          </div>
        </div>
        <div class="past-event-cont" data-container="">
          <div class="past-event-date" data-container="">
            <span data-expression="">
              •••••••• ••••
            </span>
          </div>
          <div class="list list-group OSFillParent" data-list="" data-virtualization-disabled="" id="b1-b9-l3-73_4-List_PastEventsData">
            <div class="OSBlockWidget" data-block="LDM_Blocks_V2.EventCard_V2" id="b1-b9-l3-73_4-l3-107_0-ListItem_PastEvents"><!-- nested block: 39 nodes --></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_SubSection.mvc$view", ["OutSystems/ClientRuntime/Main", "Connect2_OrbitMobile_MUI.model", "Connect2_OrbitMobile_MUI.controller", "react", "OutSystems/ReactView/Main", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_SubSection.mvc$model", "Connect2_OrbitMobile_MUI.LDM_Blocks.EventDetail_SubSection.mvc$controller", "Connect2_OrbitMobile_MUI.clientVariables", "OutSystems/ReactWidgets/Main"], function(OutSystems, Connect2_OrbitMobile_MUIModel, Connect2_OrbitMobile_MUIController, React, OSView, Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_SubSection_mvc_model, Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_SubSection_mvc_controller, Connect2_OrbitMobile_MUIClientVariables, OSWidgets) {
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
        View.displayName = "LDM_Blocks.EventDetail_SubSection";
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
                return Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_SubSection_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return Connect2_OrbitMobile_MUI_LDM_Blocks_EventDetail_SubSection_mvc_controller;
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
                style: "event-detail-subsection",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "event-detail-subsection-title",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Expression, {
                value: model.variables.in_TitleIn,
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_TitleInDataFetchStatus)
            })), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.subSection_Placeholder,
                extendedProperties: {
                    className: model.getCachedValue(idService.getId("SubSection_Placeholder.class"), function() {
                        return ("event-detail-subsection-placeholder" + ((model.variables.in_HasBottomBorderIn) ? (" border-bottom-neutral-4") : ("")));
                    }, function() {
                        return model.variables.in_HasBottomBorderIn;
                    })
                },
                style: "event-detail-subsection-placeholder",
                _idProps: {
                    service: idService,
                    name: "SubSection_Placeholder"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
