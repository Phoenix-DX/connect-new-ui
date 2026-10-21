# UBTConnect.Directory_Caroussel.EntitiesCarousel_HouseholdDetails

- Kind: shared; build screens using it: HouseholdCarousel, SupperMeeting_Carousel
- Compiled source: `migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnect.Directory_Caroussel.EntitiesCarousel_HouseholdDetails.mvc.js`
- Child blocks: UBTConnect.Directory_Household.HouseholdDetails_Block (queue: UBTConnect.Directory_Household.HouseholdDetails_Block)

## Inputs

| Input | Type |
|---|---|
| In_HouseholdId | LongInteger |
| In_IsSkeletonOnly | Boolean |

## Captured DOM variants (1 distinct, 12 instances)

### Variant 1: HouseholdCarousel/default (×12)

```html
<div class="OSBlockWidget" data-block="Directory_Caroussel.EntitiesCarousel_HouseholdDetails" id="b3-l1-1152_0-b2-$b3">
  <div class="OSBlockWidget" data-block="Directory_Household.HouseholdDetails_Block" id="b3-l1-1152_0-b2-b3-$b1"><!-- nested block: 579 nodes --></div>
</div>
```


## Compiled view (debugger lines removed)

```js
define("UBTConnect.Directory_Caroussel.EntitiesCarousel_HouseholdDetails.mvc$view", ["OutSystems/ClientRuntime/Main", "UBTConnect.model", "UBTConnect.controller", "Connect_Household_CS.model", "APIDomain_Directory_IS.model", "react", "OutSystems/ReactView/Main", "UBTConnect.Directory_Caroussel.EntitiesCarousel_HouseholdDetails.mvc$model", "UBTConnect.Directory_Caroussel.EntitiesCarousel_HouseholdDetails.mvc$controller", "UBTConnect.clientVariables", "UBTConnect.Directory_Household.HouseholdDetails_Block.mvc$view", "OutSystems/ReactWidgets/Main", "UBTConnect.model$HouseholdPreviewStructureRec", "Connect_Household_CS.model$UI_AccountFormRec", "UBTConnect.referencesHealth", "UBTConnect.referencesHealth$Connect_Household_CS", "Connect_Household_CS.model$UI_AccountForm_PersonalInformationRec", "UBTConnect.model$TextTextTextCustom_Address_ItemListRecord", "APIDomain_Directory_IS.model$Custom_Address_ItemRec", "UBTConnect.referencesHealth$APIDomain_Directory_IS", "UBTConnect.model$Custom_Address_ItemList", "Connect_Household_CS.model$UI_AccountForm_ContactInformationRec", "Connect_Household_CS.model$UI_AccountForm_IdentificationInformationRec"], function(OutSystems, UBTConnectModel, UBTConnectController, Connect_Household_CSModel, APIDomain_Directory_ISModel, React, OSView, UBTConnect_Directory_Caroussel_EntitiesCarousel_HouseholdDetails_mvc_model, UBTConnect_Directory_Caroussel_EntitiesCarousel_HouseholdDetails_mvc_controller, UBTConnectClientVariables, UBTConnect_Directory_Household_HouseholdDetails_Block_mvc_view, OSWidgets) {
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
        View.displayName = "Directory_Caroussel.EntitiesCarousel_HouseholdDetails";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [UBTConnect_Directory_Household_HouseholdDetails_Block_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function() {
                return UBTConnect_Directory_Caroussel_EntitiesCarousel_HouseholdDetails_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function() {
                return UBTConnect_Directory_Caroussel_EntitiesCarousel_HouseholdDetails_mvc_controller;
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
            return React.createElement("div", this.getRootNodeProperties(), React.createElement(UBTConnect_Directory_Household_HouseholdDetails_Block_mvc_view, {
                inputs: {
                    HouseholdId: model.variables.in_HouseholdIdIn,
                    _householdIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_HouseholdIdInDataFetchStatus),
                    In_IsSkeletonOnly: model.variables.in_IsSkeletonOnlyIn,
                    _in_IsSkeletonOnlyInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._in_IsSkeletonOnlyInDataFetchStatus)
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    householdDataFetched$Action: function(localityNameIn, countryNameIn, deceasedOrAncestry_ViewIn) {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return OS.Flow.tryFinally(function() {
                                var varBag = {};
                                controller.pushDebuggerContext(eventHandlerContext);
                                return controller.handler_HouseholdDetails_DataFetched$Action(localityNameIn, countryNameIn, deceasedOrAncestry_ViewIn, controller.callContext(eventHandlerContext));
                            }, function() {
                                controller.popDebuggerContext(eventHandlerContext);
                            });
                        });;
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
