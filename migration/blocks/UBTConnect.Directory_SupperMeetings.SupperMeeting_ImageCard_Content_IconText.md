# UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_IconText

- Kind: shared; build screens using it: HouseholdCarousel, Locality_Details, SupperMeeting_Carousel, SupperMeeting_Details
- Compiled source: `migration/screens/SupperMeeting_Carousel/analysis/sources/pretty/UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_IconText.mvc.js`
- Child blocks: UBTConnectLibrary.ConnectPatterns.Icon, UBTConnectLibrary.ConnectPatterns.IconText (queue: -)

## Inputs

| Input | Type |
|---|---|
| In_Text | Text |
| In_FontSize | Text |
| In_UBT_IconId | Text |
| In_UBT_ColorId | Text |

## Captured DOM variants (1 distinct, 24 instances)

### Variant 1: SupperMeeting_Carousel/default (×24)

```html
<div class="OSBlockWidget" data-block="Directory_SupperMeetings.SupperMeeting_ImageCard_Content_IconText" id="b3-l1-1164_0-b2-b1-b1-b5-b2-$b3">
  <div class="OSBlockWidget" data-block="ConnectPatterns.IconText" id="b3-l1-1164_0-b2-b1-b1-b5-b2-b3-$b1"><!-- nested block: 16 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_IconText.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "UBTConnectLibrary.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_IconText.mvc$model", "UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_IconText.mvc$controller", "UBTConnect.clientVariables", "UBTConnectLibrary.ConnectPatterns.IconText.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnectLibrary.ConnectPatterns.Icon.mvc$view", "UBTConnectLibrary.model$TextOptionsRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$UBTConnectLibrary"], function(OutSystems, UBTConnectModel, UBTConnectController, UBTConnectLibraryModel, React, OSView, UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_IconText_mvc_model, UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_IconText_mvc_controller, UBTConnectClientVariables, UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, OSWidgets, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view) {
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
        View.displayName = "Directory_SupperMeetings.SupperMeeting_ImageCard_Content_IconText";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, UBTConnectLibrary_ConnectPatterns_Icon_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_IconText_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Directory_SupperMeetings_SupperMeeting_ImageCard_Content_IconText_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnectLibrary_ConnectPatterns_IconText_mvc_view, {
                inputs: {
                    SpacingSize: UBTConnectModel.staticEntities.uBT_Size.extraSmall,
                    Text: model.variables.in_TextIn,
                    _textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_TextInDataFetchStatus),
                    TextOptions: model.getCachedValue(idService.getId("UmMqiZ4ygkKbeyVLPBXxxQ.TextOptions"), function() {
                        return function() {
                            var rec = new UBTConnectLibraryModel.TextOptionsRec();
                            rec.fontSizeAttr = model.variables.in_FontSizeIn;
                            rec.fontWeightAttr = UBTConnectModel.staticEntities.uBT_FontWeight.semiBold;
                            return rec;
                        }();
                    }, function() {
                        return model.variables.in_FontSizeIn;
                    }),
                    _textOptionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_FontSizeInDataFetchStatus)
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
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    icon: new PlaceholderContent(function() {
                        return [React.createElement(UBTConnectLibrary_ConnectPatterns_Icon_mvc_view, {
                            inputs: {
                                In_ColorId: model.variables.in_UBT_ColorIdIn,
                                _in_ColorIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_UBT_ColorIdInDataFetchStatus),
                                In_IconId: model.variables.in_UBT_IconIdIn,
                                _in_IconIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_UBT_IconIdInDataFetchStatus),
                                In_SizeId: UBTConnectModel.staticEntities.uBT_IconsSize.nonStandard_16
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
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.in_UBT_IconIdIn), asPrimitiveValue(model.variables._in_UBT_IconIdInDataFetchStatus), asPrimitiveValue(model.variables._in_UBT_ColorIdInDataFetchStatus), asPrimitiveValue(model.variables.in_UBT_ColorIdIn)]
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
