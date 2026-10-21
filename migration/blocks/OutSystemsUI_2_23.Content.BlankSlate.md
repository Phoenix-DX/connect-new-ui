# OutSystemsUI_2_23.Content.BlankSlate

- Kind: osui; build screens using it: CommunityBusinessDetails_CoomingSoon
- Compiled source: `migration/screens/CommunityBusinessDetails_CoomingSoon/analysis/sources/pretty/OutSystemsUI_2_23.Content.BlankSlate.mvc.js`
- Child blocks: - (queue: -)

## Inputs

| Input | Type |
|---|---|
| FullHeight | Boolean |
| ExtendedClass | Text |

## Captured DOM variants (1 distinct, 3 instances)

### Variant 1: CommunityBusinessDetails_CoomingSoon/default (×3)

```html
<div class="OSBlockWidget" data-block="Content.BlankSlate" id="$b3">
  <div class="blank-slate large" data-container="" id="b3-BlankState" role="region">
    <div data-container="">
      <div class="placeholder-empty blank-slate-icon" id="b3-Icon">
        <i class="icon fa fa-ellipsis-h fa-2x" data-icon=""></i>
      </div>
      <div class="placeholder-empty blank-slate-description" id="b3-Content" role="status">
        Comming soon
      </div>
      <div class="placeholder-empty blank-slate-actions" id="b3-Actions"></div>
    </div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("OutSystemsUI_2_23.Content.BlankSlate.mvc$view", ["OutSystems/ClientRuntime/Main", "OutSystemsUI_2_23.model", "OutSystemsUI_2_23.controller", "react", "OutSystems/ReactView/Main", "OutSystemsUI_2_23.Content.BlankSlate.mvc$model", "OutSystemsUI_2_23.Content.BlankSlate.mvc$controller", "OutSystems/ReactWidgets/Main"], function(OutSystems, OutSystemsUI_2_23Model, OutSystemsUI_2_23Controller, React, OSView, OutSystemsUI_2_23_Content_BlankSlate_mvc_model, OutSystemsUI_2_23_Content_BlankSlate_mvc_controller, OSWidgets) {
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
        View.displayName = "Content.BlankSlate";
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
                return OutSystemsUI_2_23_Content_BlankSlate_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return OutSystemsUI_2_23_Content_BlankSlate_mvc_controller;
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
                    role: "region"
                },
                style: model.getCachedValue(idService.getId("BlankState.Style"), function() {
                    return ((("blank-slate" + ((!(model.variables.fullHeightIn)) ? ("") : (" large"))) + " ") + model.variables.extendedClassIn);
                }, function() {
                    return model.variables.fullHeightIn;
                }, function() {
                    return model.variables.extendedClassIn;
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    name: "BlankState"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._fullHeightInDataFetchStatus, model.variables._extendedClassInDataFetchStatus)
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.icon,
                style: "placeholder-empty blank-slate-icon",
                _idProps: {
                    service: idService,
                    name: "Icon"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.content,
                extendedProperties: {
                    role: "status"
                },
                style: "placeholder-empty blank-slate-description",
                _idProps: {
                    service: idService,
                    name: "Content"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.actions,
                style: "placeholder-empty blank-slate-actions",
                _idProps: {
                    service: idService,
                    name: "Actions"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
