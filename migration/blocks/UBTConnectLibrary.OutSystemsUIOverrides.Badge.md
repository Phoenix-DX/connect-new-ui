# UBTConnectLibrary.OutSystemsUIOverrides.Badge

- Kind: shared; build screens using it: BookmarksByGroup, BrowseCountries, BrowseDirectory, CountryDetails, CountryList, HomeFeed, HouseholdCarousel, HouseholdDetails, Household_Relations, Locality_Details, Menu, MessageDetail, MessageList, MyBookmarks, Notes, Notifications, OneSchoolGlobalDetails, Search, Updates_SingleList
- Compiled source: `migration/screens/BookmarksByGroup/analysis/sources/pretty/UBTConnectLibrary.OutSystemsUIOverrides.Badge.mvc.js`
- Child blocks: - (queue: -)

## Inputs

| Input | Type |
|---|---|
| Number | LongInteger |
| Color | Text |
| Size | Text |
| Shape | Text |
| IsLight | Boolean |
| ExtendedClass | Text |
| MaxNumber | Integer |

## Captured DOM variants (2 distinct, 76 instances)

### Variant 1: BookmarksByGroup/default (×69)

```html
<div class="OSBlockWidget" data-block="OutSystemsUIOverrides.Badge" id="b2-l1-49_2-b3-b2-$b1">
  <div class="ubt-badge badge border-radius-rounded background-red OSInline" data-container="">
    <span class="OSFillParent" data-expression="">
      ••
    </span>
  </div>
</div>
```

### Variant 2: Notifications/default (×7)

```html
<div class="OSBlockWidget" data-block="OutSystemsUIOverrides.Badge" id="$b6">
  <div class="ubt-badge badge badge-xs border-radius-rounded background-red-dark OSInline" data-container="">
    <span class="OSFillParent" data-expression="">
      •
    </span>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnectLibrary.OutSystemsUIOverrides.Badge.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.OutSystemsUIOverrides.Badge.mvc$model", "UBTConnectLibrary.OutSystemsUIOverrides.Badge.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.controller$GetClass_BackgroundColor"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_OutSystemsUIOverrides_Badge_mvc_model, UBTConnectLibrary_OutSystemsUIOverrides_Badge_mvc_controller, UBTConnectLibraryClientVariables, OSWidgets) {
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
        View.displayName = "OutSystemsUIOverrides.Badge";
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
                return UBTConnectLibrary_OutSystemsUIOverrides_Badge_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_OutSystemsUIOverrides_Badge_mvc_controller;
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
                gridProperties: {
                    classes: "OSInline"
                },
                style: model.getCachedValue(idService.getId("fuFCg7LFXU+jKb_YwyJ8WA.Style"), function() {
                        return UBTConnectLibraryController.default.getClass_BackgroundColor$Action(model.variables.colorIn, callContext).out_ColorClassOut;
                        return UBTConnectLibraryController.default.getClass_BackgroundColor$Action(model.variables.colorIn, callContext).out_ColorClassOut;
                    }, OS.DataTypes.DataTypes.Text, callContext.id))))) + " ") + model.variables.extendedClassIn);
                }, function() {
                    return model.variables.sizeIn;
                }, function() {
                    return model.variables.shapeIn;
                }, function() {
                    return model.variables.isLightIn;
                }, function() {
                    return model.variables.colorIn;
                }, function() {
                    return model.variables.extendedClassIn;
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._sizeInDataFetchStatus, model.variables._shapeInDataFetchStatus, model.variables._isLightInDataFetchStatus, model.variables._colorInDataFetchStatus, model.variables._extendedClassInDataFetchStatus)
            }, React.createElement(OSWidgets.Expression, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                value: model.getCachedValue(idService.getId("sJ8LQqlaF0ii0t8lAYgR1A.Value"), function() {
                    return ((model.variables.numberIn.lte(OS.BuiltinFunctions.integerToLongInteger(model.variables.maxNumberIn))) ? (OS.BuiltinFunctions.longIntegerToText(model.variables.numberIn)) : (((model.variables.maxNumberIn).toString() + "+")));
                }, function() {
                    return model.variables.numberIn;
                }, function() {
                    return model.variables.maxNumberIn;
                }),
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._numberInDataFetchStatus, model.variables._maxNumberInDataFetchStatus)
            })));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
