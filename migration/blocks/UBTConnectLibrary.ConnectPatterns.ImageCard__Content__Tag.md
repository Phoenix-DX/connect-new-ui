# UBTConnectLibrary.ConnectPatterns.ImageCard__Content__Tag

- Kind: shared; build screens using it: HouseholdCarousel, Locality_Details, SupperMeeting_Carousel, SupperMeeting_Details
- Compiled source: `migration/screens/SupperMeeting_Carousel/analysis/sources/pretty/UBTConnectLibrary.ConnectPatterns.ImageCard__Content__Tag.mvc.js`
- Child blocks: UBTConnectLibrary.BasePatterns.CustomContainer (queue: -)

## Inputs

| Input | Type |
|---|---|
| Content | Text |

## Captured DOM variants (1 distinct, 12 instances)

### Variant 1: SupperMeeting_Carousel/default (×12)

```html
<div class="OSBlockWidget" data-block="ConnectPatterns.ImageCard__Content__Tag" id="b3-l1-1164_0-b2-b1-b1-b5-b2-$b4">
  <div class="font-size-xs" data-container="" id="b3-l1-1164_0-b2-b1-b1-b5-b2-b4-Div_ForceBlockLine">
    <div class="OSInline" data-container="">
      <div class="OSBlockWidget" data-block="BasePatterns.CustomContainer" id="b3-l1-1164_0-b2-b1-b1-b5-b2-b4-$b1"><!-- nested block: 3 nodes --></div>
    </div>
  </div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnectLibrary.ConnectPatterns.ImageCard__Content__Tag.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnectLibrary.model", "UBTConnectLibrary.controller", "react", "OutSystems/ReactView/Main", "UBTConnectLibrary.ConnectPatterns.ImageCard__Content__Tag.mvc$model", "UBTConnectLibrary.ConnectPatterns.ImageCard__Content__Tag.mvc$controller", "UBTConnectLibrary.clientVariables", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.BasePatterns.CustomContainer.mvc$view", "UBTConnectLibrary.model$ContainerOptionsRec", "UBTConnectLibrary.model$BackgroundOptionsRec", "UBTConnectLibrary.model$BackgroundImageRec", "UBTConnectLibrary.model$SpacingOptionsRec", "UBTConnectLibrary.model$BorderOptionsRec", "UBTConnectLibrary.model$RadiusOptionsRec", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnectLibrary.model$DisplayOptionsRec", "UBTConnectLibrary.model$SizeOptionsRec"], function(OutSystems, UBTConnectLibraryModel, UBTConnectLibraryController, React, OSView, UBTConnectLibrary_ConnectPatterns_ImageCard__Content__Tag_mvc_model, UBTConnectLibrary_ConnectPatterns_ImageCard__Content__Tag_mvc_controller, UBTConnectLibraryClientVariables, OSWidgets, UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view) {
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
        View.displayName = "ConnectPatterns.ImageCard__Content__Tag";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_ImageCard__Content__Tag_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnectLibrary_ConnectPatterns_ImageCard__Content__Tag_mvc_controller;
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
                style: "font-size-xs",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Div_ForceBlockLine"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                gridProperties: {
                    classes: "OSInline"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(UBTConnectLibrary_BasePatterns_CustomContainer_mvc_view, {
                inputs: {
                    Options: model.getCachedValue(idService.getId("jcHhLvPCKEWsjYIXyYluMg.Options"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.ContainerOptionsRec();
                            rec.backgroundAttr = function() {
                                var rec = new UBTConnectLibraryModel.BackgroundOptionsRec();
                                rec.backgroundColorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.yellowLighter;
                                return rec;
                            }();
                            rec.paddingSizeAttr = function() {
                                var rec = new UBTConnectLibraryModel.SpacingOptionsRec();
                                rec.horizontalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Size.small;
                                return rec;
                            }();
                            rec.borderOptionsAttr = function() {
                                var rec = new UBTConnectLibraryModel.BorderOptionsRec();
                                rec.radiusAttr = function() {
                                    var rec = new UBTConnectLibraryModel.RadiusOptionsRec();
                                    rec.generalSizeIdAttr = UBTConnectLibraryModel.staticEntities.uBT_Shape.medium;
                                    return rec;
                                }();
                                return rec;
                            }();
                            rec.textOptionsAttr = function() {
                                var rec = new UBTConnectLibraryModel.TextOptionsRec();
                                rec.colorAttr = UBTConnectLibraryModel.staticEntities.uBT_Color.neutral9;
                                rec.fontSizeAttr = UBTConnectLibraryModel.staticEntities.uBT_FontSize.extraSmall;
                                rec.fontWeightAttr = UBTConnectLibraryModel.staticEntities.uBT_FontWeight.regular;
                                return rec;
                            }();
                            rec.isSkeletonElementAttr = true;
                            return rec;
                        }();
                    })
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    }
                },
                _validationProps: {
                    validationService: validationService
                },
                _idProps: {
                    service: idService,
                    uuid: "2",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    content: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Expression, {
                            value: model.variables.contentIn,
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._contentInDataFetchStatus)
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables._contentInDataFetchStatus), asPrimitiveValue(model.variables.contentIn)]
            }))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
