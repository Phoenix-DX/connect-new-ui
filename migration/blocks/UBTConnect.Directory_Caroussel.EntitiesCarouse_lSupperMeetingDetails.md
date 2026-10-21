# UBTConnect.Directory_Caroussel.EntitiesCarouse_lSupperMeetingDetails

- Kind: shared; build screens using it: HouseholdCarousel, SupperMeeting_Carousel
- Compiled source: `migration/screens/SupperMeeting_Carousel/analysis/sources/pretty/UBTConnect.Directory_Caroussel.EntitiesCarouse_lSupperMeetingDetails.mvc.js`
- Child blocks: UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock (queue: UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock)

## Inputs

| Input | Type |
|---|---|
| In_SubdivisionId | LongInteger |

## Captured DOM variants (1 distinct, 9 instances)

### Variant 1: SupperMeeting_Carousel/default (×9)

```html
<div class="OSBlockWidget" data-block="Directory_Caroussel.EntitiesCarouse_lSupperMeetingDetails" id="b3-l1-1164_0-b2-$b1">
  <div class="OSBlockWidget" data-block="Directory_SupperMeetings.SupperMeeting_DetailsBlock" id="b3-l1-1164_0-b2-b1-$b1"><!-- nested block: 574 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect.Directory_Caroussel.EntitiesCarouse_lSupperMeetingDetails.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Caroussel.EntitiesCarouse_lSupperMeetingDetails.mvc$model", "UBTConnect.Directory_Caroussel.EntitiesCarouse_lSupperMeetingDetails.mvc$controller", "UBTConnect.clientVariables", "UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc$view", "OutSystems/ReactWidgets/Main"], function(OutSystems, UBTConnectModel, UBTConnectController, React, OSView, UBTConnect_Directory_Caroussel_EntitiesCarouse_lSupperMeetingDetails_mvc_model, UBTConnect_Directory_Caroussel_EntitiesCarouse_lSupperMeetingDetails_mvc_controller, UBTConnectClientVariables, UBTConnect_Directory_SupperMeetings_SupperMeeting_DetailsBlock_mvc_view, OSWidgets) {
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
        View.displayName = "Directory_Caroussel.EntitiesCarouse_lSupperMeetingDetails";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_Directory_SupperMeetings_SupperMeeting_DetailsBlock_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Directory_Caroussel_EntitiesCarouse_lSupperMeetingDetails_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Directory_Caroussel_EntitiesCarouse_lSupperMeetingDetails_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnect_Directory_SupperMeetings_SupperMeeting_DetailsBlock_mvc_view, {
                inputs: {
                    In_SubdivsionId: model.variables.in_SubdivisionIdIn,
                    _in_SubdivsionIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_SubdivisionIdInDataFetchStatus)
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
                    placeholder_CarouselTag: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Placeholder, {
                            align: /*Default*/ 0,
                            content: _this.props.placeholders.placeholder_CarouselTag,
                            _idProps: {
                                service: idService,
                                name: "Placeholder_CarouselTag"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    })
                }
            }));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
    return View;
});
```
